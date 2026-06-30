const fs = require("fs");
const path = require("path");

const originalPath = path.join(__dirname, "..", "data", "original.txt");
const copyPath = path.join(__dirname, "..", "data", "copy.txt");

function readFile(filePath) {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, "utf8", (err, data) => {
      if (err) reject(err);
      else resolve(data);
    });
  });
}

function writeFile(filePath, data) {
  return new Promise((resolve, reject) => {
    fs.writeFile(filePath, data, "utf8", (err) => {
      if (err) reject(err);
      else resolve();
    });
  });
}

readFile(originalPath)
  .then((data) => writeFile(copyPath, data))
  .then(() => readFile(copyPath))
  .then((copiedData) => console.log(copiedData))
  .catch(console.error);
