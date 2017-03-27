
import pathExists = require("path-exists");

pathExists("test/path-exists.d.ts", (error, exists) => {
  console.log(exists);
});
console.log(pathExists.sync("test/__path-exists.d.ts"));
