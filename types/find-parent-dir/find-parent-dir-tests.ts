/// <reference types="node" />

import findParentDir = require("find-parent-dir");

let parentDir: string | null;

findParentDir(__dirname, ".git", (err, dir) => {
    if (err) {
        console.error("error", err);
    } else {
        parentDir = dir;
    }
});

try {
    parentDir = findParentDir.sync(__dirname, ".git");
} catch (err) {
    console.error("error", err);
}
