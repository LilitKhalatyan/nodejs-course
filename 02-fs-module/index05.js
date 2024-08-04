// 1. Write a script that watches a directory called `watchDir` for changes.
// 2. Whenever a file is added, modified, or deleted in `watchDir`, log the event to the console.

const fs = require('fs');
const path = require('path');

const watchDir = path.join(__dirname, 'watchDir');
const filePath1 = path.join(watchDir, 'file1.txt');
const filePath2 = path.join(watchDir, 'file2.txt');
const renamedFilePath2 = path.join(watchDir, 'renamedFile2.txt');

const message1 = 'Hello, from file1!';
const message2 = 'Hello, from file2!';

if (!fs.existsSync(watchDir)) {
  fs.mkdirSync(watchDir, { recursive: true });
}

fs.writeFileSync(filePath1, message1, 'utf-8');

const addNewFile = (filePath, message) => {
  console.log('New file created at:', new Date().toISOString());
  fs.writeFileSync(filePath, message, 'utf-8');
};

const updateFile = (filePath, data) => {
  if (fs.existsSync(filePath)) {
    console.log('Data added at:', new Date().toISOString());
    fs.appendFileSync(filePath, data);
  } else {
    console.log(`File ${filePath} does not exist. Cannot append data.`);
  }
};

const renameFile = (oldPath, newPath) => {
  if (fs.existsSync(oldPath)) {
    fs.renameSync(oldPath, newPath);
    console.log('File renamed at:', new Date().toISOString());
  } else {
    console.log('File to rename does not exist:', oldPath);
  }
};

const deleteFile = (filePath) => {
  if (fs.existsSync(filePath)) {
    fs.unlinkSync(filePath);
    console.log('File deleted at:', new Date().toISOString());
  } else {
    console.log('File to delete does not exist:', filePath);
  }
};

const watcher = fs.watch(watchDir, (eventType, filename) => {
  if (filename) {
    console.log(
      `Watcher Event: ${eventType}, File: ${filename}, Time: ${new Date().toISOString()}`
    );
  } else {
    console.log(
      `Watcher Event: ${eventType}, Time: ${new Date().toISOString()}`
    );
  }
});

addNewFile(filePath2, message2);

setTimeout(() => {
  updateFile(filePath2, '\nThis is appended text to file2.');
}, 5000);

setTimeout(() => {
  renameFile(filePath2, renamedFilePath2);
}, 10000);

setTimeout(() => {
  deleteFile(filePath1);
  deleteFile(renamedFilePath2);
}, 15000);
