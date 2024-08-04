// 1. Write a script that reads and prints the metadata (e.g., size, creation date) of a given file.
// 2. Modify the script to change the permissions of the file to read-only.

const fs = require('fs');
const path = require('path');

const getFileMetadata = (filePath) => {
  try {
    if (!fs.existsSync(filePath)) {
      console.error(`File does not exist: ${filePath}`);
      return;
    }

    const stats = fs.statSync(filePath);

    console.log(`Below is Metadata for the ${filePath} file:`);
    console.log(`- Size: ${stats.size} bytes`);
    console.log(`- Created: ${stats.birthtime}`);
    console.log(`- Modified: ${stats.mtime}`);
    console.log(`- Is Directory: ${stats.isDirectory()}`);
  } catch (error) {
    console.error('Error reading file metadata:', error);
  }
};

const setFilePermissionReadOnly = (filePath) => {
  try {
    if (!fs.existsSync(filePath)) {
      console.error(`File does not exist: ${filePath}`);
      return;
    }

    fs.chmodSync(filePath, '444');

    console.log(`File ${filePath} is now read-only.`);
  } catch (error) {
    console.error('Error changing file permissions:', error);
  }
};

const existingFilePath = './watchDir/file1.txt';
const notExistingFilePath = './watchDir/file2.txt';

getFileMetadata(notExistingFilePath);
getFileMetadata(existingFilePath);
setFilePermissionReadOnly(existingFilePath);
