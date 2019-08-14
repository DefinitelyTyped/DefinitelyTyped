import * as path from "path";
import * as fs from "fs-plus";

const homeDir = fs.getHomeDirectory();

console.log(fs.absolute("~") === fs.realpathSync(homeDir));
console.log(
    fs.absolute(path.join("~", "does", "not", "exist")) ===
        path.join(homeDir, "does", "not", "exist")
);

console.log(fs.normalize("~/foo") === path.join(homeDir, "foo"));

console.log(fs.tildify(homeDir) === "~");

console.log(
    fs.getAppDataDirectory() ===
        path.join(fs.getHomeDirectory(), "Library", "Application Support")
);

console.log(fs.isAbsolute("/a/b/c"));

console.log(fs.existsSync("/a/b/c"));

console.log(fs.isDirectorySync("/a/b/c"));

fs.isDirectory("a/b/c", result => {
    console.log(result);
});

console.log(fs.isFileSync("/a/b/c"));

console.log(fs.isSymbolicLinkSync("/a/b/c"));

fs.isSymbolicLink("a/b/c", result => {
    console.log(result);
});

console.log(fs.isExecutableSync("/a/b/c"));

console.log(fs.getSizeSync("/a/b/c") === -1);

console.log(fs.listSync("/a/b").indexOf("c") === 0);
console.log(fs.listSync("/a/b", [".ts", ".tsx"]).indexOf("c.tsx") === 0);

fs.list("/a/b", (err, result) => {
    if (err) {
        console.error(err);
        return;
    }
    console.log(result.indexOf("c") === 0);
});
fs.list("/a/b", [".ts", ".tsx"], (err, result) => {
    if (err) {
        console.error(err);
        return;
    }
    console.log(result.indexOf("c.tsx") === 0);
});

console.log(fs.listTreeSync("/a/b").indexOf("c") === 0);

fs.moveSync("/a/b", "a/c");

fs.move("/a/b", "a/c", err => {
    console.log(err);
});

fs.removeSync("/a/b");

fs.remove("/a/b", err => {
    console.log(err);
});

fs.writeFileSync("a/b/c", "data");
fs.writeFileSync("a/b/c", "data", "utf8");
fs.writeFileSync("a/b/c", "data", { encoding: "utf8" });

fs.writeFile("a/b/c", "data", err => {
    console.log(err);
});
fs.writeFile("a/b/c", "data", "utf8", err => {
    console.log(err);
});
fs.writeFile("a/b/c", "data", { encoding: "utf8" }, err => {
    console.log(err);
});

fs.copySync("/a/b", "a/c");

fs.copy("/a/b", "a/c", err => {
    console.log(err);
});

fs.copyFileSync("/a/b", "a/c");
fs.copyFileSync("/a/b", "a/c", 32 * 1024);

fs.makeTreeSync("/a/b");

fs.makeTree("/a/b", err => {
    console.log(err);
});

fs.traverseTreeSync(
    "a/b/c",
    file => {
        console.log("file", file);
    },
    dir => {
        console.log("directory", dir);
        return true;
    }
);

fs.traverseTree(
    "a/b/c",
    file => {
        console.log("file", file);
    },
    dir => {
        console.log("directory", dir);
    },
    err => {
        console.error(err);
    }
);

console.log(fs.md5ForPath("a/b/c"));

console.log(fs.resolve("a/b/c", "sample.js"));
console.log(fs.resolve("a/b/c", "sample", [".js"]));

console.log(fs.resolveOnLoadPath("sample.js"));
console.log(fs.resolveOnLoadPath("sample", [".js"]));

console.log(fs.resolveExtension("a/b/c", [".js"]));

console.log(fs.isCompressedExtension(".tar.gz"));

console.log(fs.isImageExtension(".jpg"));

console.log(fs.isPdfExtension(".pdf"));

console.log(fs.isBinaryExtension(".exe"));

console.log(fs.isReadmePath("a/b/README.md"));

console.log(fs.isMarkdownExtension(".md"));

console.log(fs.isCaseInsensitive());
console.log(fs.isCaseSensitive());
