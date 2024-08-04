// Task: Write a simple Node.js script using the `fs` module to read a text file and write it to another text file using streams.
// WO Pipes

const fs = require('fs');
const path = require('path');

const readableeFilePath = path.join(__dirname, 'test.txt');
const outputFilePath = path.join(__dirname, 'output.txt');

if (!fs.existsSync(readableeFilePath)) {
  console.error('Source file does not exist:', readableeFilePath);
  process.exit(1);
}

const readStream = fs.createReadStream(readableeFilePath, 'utf-8');
const writeStream = fs.createWriteStream(outputFilePath, 'utf-8');

readStream.on('data', (chunk) => {
  writeStream.write(chunk);
});

readStream.on('end', () => {
  writeStream.end(); 
  console.log('File copied successfully.');
});

writeStream.on('finish', () => {
  console.log('All data has been written to output.txt');
});

writeStream.on('error', (err) => {
  console.error('An error accured during writing file:', err);
});

readStream.on('error', (err) => {
  console.error('Error accured during reading file:', err);
});
