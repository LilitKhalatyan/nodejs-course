// 1. Create a script that recursively lists all files and directories within a given directory.
// 2. Write another script that copies the contents of one directory to another, preserving the directory structure.
// *Add check if directory exists or not

const fs = require('fs');
const path = require('path');

const listFilesAndDirs = async (dirPath) => {
  if (!fs.existsSync(dirPath)) {
    console.error(`Directory does not exist: ${dirPath}`);
    return;
  }

  const readDir = async (currentPath) => {
    const items = await fs.promises.readdir(currentPath, {
      withFileTypes: true,
    });

    for (const item of items) {
      const fullPath = path.join(currentPath, item.name);
      if (item.isDirectory()) {
        console.log(`Directory: ${fullPath}`);
        await readDir(fullPath);
      } else {
        console.log(`File: ${fullPath}`);
      }
    }
  };

  await readDir(dirPath);
};

const copyDirectory = async (dir, copiedDir) => {
  if (!fs.existsSync(dir)) {
    console.error(`Source directory does not exist: ${dir}`);
    return;
  }

  if (!fs.existsSync(copiedDir)) {
    fs.mkdirSync(copiedDir, { recursive: true });
  }

  const items = await fs.promises.readdir(dir, { withFileTypes: true });

  for (const item of items) {
    const srcPath = path.join(dir, item.name);
    const destPath = path.join(copiedDir, item.name);

    if (item.isDirectory()) {
      await copyDirectory(srcPath, destPath);
    } else {
      await fs.promises.copyFile(srcPath, destPath);
      console.log(`Copied file: ${srcPath} -> ${destPath}`);
    }
  }
};

const existingDirPath = './watchDir';
const notExistingDirPath = './watchDir2';
const destinationDirectory = './watchDir3';

listFilesAndDirs(existingDirPath);
listFilesAndDirs(notExistingDirPath);
copyDirectory(existingDirPath, destinationDirectory);
