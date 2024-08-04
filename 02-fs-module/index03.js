// 1. Write two scripts:
//    - One that uses synchronous methods (`fs.readFileSync`, `fs.writeFileSync`) to read from and write to a file.
//    - Another that uses asynchronous methods (`fs.readFile`, `fs.writeFile`) to achieve the same functionality.
// 2. Compare the scripts and note the differences in their execution.

const fs = require('fs');

const message1 = 'Hello, World!';

const filePath = './syncFile.txt';

fs.writeFileSync(filePath, message1, 'utf-8');

const data = fs.readFileSync(filePath, 'utf-8');
console.log('File contents / Sync:', data);

const message2 = 'Hello, World!';
const filePath2 = './asyncFile.txt';

async function readWriteFileAsync() {
  try {
    await fs.promises.writeFile(filePath2, message2, 'utf-8');
    console.log('File written asynchronously');

    const data = await fs.promises.readFile(filePath2, 'utf-8');
    console.log('File contents / Async:', data);
  } catch (err) {
    console.error('An error occurred during ASYNC read/write:', err);
  }
}

readWriteFileAsync();
