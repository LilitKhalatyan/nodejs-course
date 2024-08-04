// 1. Write a script that attempts to read a file that does not exist.
// 2. Implement error handling to gracefully handle the error and print an appropriate message to the console.

const fs = require('fs').promises;

const filePath = './nonExistentFile.txt';

async function readFileAsync() {
  try {
    const data = await fs.readFile(filePath, 'utf-8');
    console.log('File contents:', data);
  } catch (err) {
    console.error('An error occurred while reading the file:', err.message);
  }
}

readFileAsync();
