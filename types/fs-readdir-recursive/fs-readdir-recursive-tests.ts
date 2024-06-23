import readdirRecursive = require("fs-readdir-recursive");

const unfilteredPaths: string[] = readdirRecursive("path");
const filteredPaths: string[] = readdirRecursive("path", (name: string, index: number, dir: string) => name[0] !== ".");
const mergedFilteredPaths: string[] = readdirRecursive(
    "another-path",
    (name: string, index: number, dir: string) => name[0] !== ".",
    filteredPaths,
);
const filteredJoinedPaths: string[] = readdirRecursive(
    "",
    (name: string, index: number, dir: string) => name[0] !== ".",
    [],
    "path",
);
