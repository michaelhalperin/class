const fs = require("fs/promises");
const path = require("path");

const originalPath = path.join(__dirname, "..", "data", "original.txt");
const copyPath = path.join(__dirname, "..", "data", "copy.txt");

fs.readFile(originalPath, "utf8")
  .then((data) => fs.writeFile(copyPath, data, "utf8"))
  .then(() => fs.readFile(copyPath, "utf8"))
  .then(console.log)
  .then(console.log('always'))
  .catch(console.error)
  
