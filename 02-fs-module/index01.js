// 1. Write a script that creates a new text file called `example.txt` and writes the string "Hello, World!" into it.
// 2. Modify the script to append "This is Node.js FS module." to the same file.
// 3. Read the contents of `example.txt` and print them to the console.

const fs = require('fs').promises;

const message1 = 'Hello, World!';
const message2 = 'This is Node.js FS module.';

async function writeReadPrint() {
  try {
    await fs.writeFile('./example.txt', message1, 'utf-8');
    await fs.appendFile('./example.txt', message2, 'utf-8');

    const data = await fs.readFile('example.txt', 'utf-8');
    console.log('This is file contents:', data);
  } catch (err) {
    console.error(err);
  }
}

writeReadPrint();
