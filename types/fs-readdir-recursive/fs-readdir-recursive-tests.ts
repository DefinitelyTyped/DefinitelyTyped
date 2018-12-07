import readdirRecursive = require("fs-readdir-recursive");

const unfilteredPaths: string[] = readdirRecursive("path");
const filteredPaths: string[] = readdirRecursive(
    "path",
    (path: string) => path[0] !== "."
);
