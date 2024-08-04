// 1. Write a script that creates a directory called `testDir`.
// 2. Inside `testDir`, create a new file called `testFile.txt` and write some text into it.
// 3. Rename `testFile.txt` to `renamedFile.txt`.
// 4. Delete `renamedFile.txt` and then delete `testDir`.

const fs = require('fs').promises;

const message1 = 'Hello, World!';

async function createDirectory() {
  try {
    await fs.mkdir('./testDir', { recursive: true });
    await fs.writeFile('./testDir/testFile.txt', message1, 'utf-8');
    await fs.rename('./testDir/testFile.txt', './testDir/renamedFile.txt');
    await fs.unlink('./testDir/renamedFile.txt');
    await fs.rmdir('./testDir');
  } catch (err) {
    console.error('An error occurred:', err);
  }
}

createDirectory();
