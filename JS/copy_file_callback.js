const fs = require("fs");
const path = require("path");

const originalPath = path.join(__dirname, "..", "data", "original.txt");
const copyPath = path.join(__dirname, "..", "data", "copy.txt");

fs.readFile(originalPath, "utf8", (err, data) => {
  if (err) {
    console.error(err);
    return;
  }

  fs.writeFile(copyPath, data, "utf8", (err) => {
    if (err) {
      console.error(err);
      return;
    }

    fs.readFile(copyPath, "utf8", (err, copiedData) => {
      if (err) {
        console.error(err);
        return;
      }

      console.log(copiedData);
    });
  });
});
