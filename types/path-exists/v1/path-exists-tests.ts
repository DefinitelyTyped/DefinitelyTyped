import pathExists = require("path-exists");

pathExists("test/path-exists.d.ts", (error, exists) => {
    const bool: boolean = exists;
});
const bool: boolean = pathExists.sync("test/__path-exists.d.ts");
