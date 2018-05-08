import pathExists = require("path-exists");

pathExists('foo.js').then(exists => {
    const bool: boolean = exists;
});
const bool: boolean = pathExists.sync("test/__path-exists.d.ts");
