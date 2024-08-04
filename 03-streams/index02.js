// Task: Create a Node.js script that uses a transform stream to handle JSON objects, 
// modifying each one by adding a new property timestamp and converting it back into 
// a string before writing it to an output file.

const fs = require('fs');
const path = require('path');
const { Transform } = require('stream');

const inputFilePath = path.join(__dirname, 'input.json');
const outputFilePath = path.join(__dirname, 'output.json');

if (!fs.existsSync(inputFilePath)) {
  console.error('Source file does not exist:', inputFilePath);
  process.exit(1);
}

const readStream = fs.createReadStream(inputFilePath, 'utf-8');
const writeStream = fs.createWriteStream(outputFilePath, 'utf-8');

const transformStream = new Transform({
  readableObjectMode: true,
  writableObjectMode: true,
  transform(chunk, encoding, callback) {
    try {
      const jsonObjects = JSON.parse(chunk);

      if (!Array.isArray(jsonObjects)) {
        throw new Error('Expected an array of JSON objects');
      }

      const modifiedChunks = jsonObjects.map(obj => {
        obj.timestamp = new Date().toISOString();
        return obj;
      });

      this.push(JSON.stringify(modifiedChunks, null, 2));
      callback();
    } catch (err) {
      callback(err);
    }
  }
});

readStream.on('error', (err) => {
  console.error('Error reading input file:', err);
});

writeStream.on('error', (err) => {
  console.error('Error writing to output file:', err);
});

transformStream.on('error', (err) => {
  console.error('Error during transformation:', err);
});

readStream.pipe(transformStream).pipe(writeStream);

writeStream.on('finish', () => {
  console.log('File processing completed successfully.');
});
