// Task: Write a simple Node.js script using the `fs` module to read a text file and write it to another text file using streams.
// With Pipes

const fs = require('fs');
const path = require('path');

const sourceFilePath = path.join(__dirname, 'test.txt');
const destinationFilePath = path.join(__dirname, 'output.txt');

if (!fs.existsSync(sourceFilePath)) {
  console.error('Source file does not exist:', sourceFilePath);
  process.exit(1);
}

const readStream = fs.createReadStream(sourceFilePath, 'utf-8');
const writeStream = fs.createWriteStream(destinationFilePath, 'utf-8');

readStream.pipe(writeStream);

// readStream.on('data', (chunk) => {
//   writeStream.write(chunk);
// });

// readStream.on('end', () => {
//   writeStream.end(); 
//   console.log('File copied successfully.');
// });


writeStream.on('finish', () => {
  console.log('File copied successfully using pipes.');
});

writeStream.on('error', (err) => {
  console.error('An error occurred during writing file:', err);
});

readStream.on('error', (err) => {
  console.error('Error reading file:', err);
});
