import * as fs from "fs";
import recursiveReaddir = require("recursive-readdir");

recursiveReaddir("some/path", (err, files) => {});
recursiveReaddir("some/path", ["foo.cs", "*.html"], (err, files) => {});

function apple(a: string, b: fs.Stats): boolean {
    return true;
}

async function banana(): Promise<string[]> {
    return recursiveReaddir("some/path", [apple]);
}
