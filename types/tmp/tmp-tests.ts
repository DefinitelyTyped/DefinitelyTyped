import {
    DirResult,
    FileResult,
    tmpdir,
    tmpName,
    tmpNameSync,
    dir,
    dirSync,
    file,
    fileSync,
    setGracefulCleanup
} from "tmp";

console.log(tmpdir);

setGracefulCleanup();

file((err, name, fd, removeCallback) => {
    if (err) throw err;

    console.log("File name: ", name);
    console.log("File descriptor: ", fd);

    removeCallback();
});

file({ mode: 644, prefix: "prefix-", postfix: ".txt" }, (err, name, fd) => {
    if (err) throw err;

    console.log("File name: ", name);
    console.log("File descriptor: ", fd);
});

dir((err, name, removeCallback) => {
    if (err) throw err;

    console.log("Dir name: ", name);

    removeCallback();
});

dir({ mode: 750, prefix: "myTmpDir_" }, (err, name) => {
    if (err) throw err;

    console.log("Dir name: ", name);
});

tmpName((err, name) => {
    if (err) throw err;

    console.log("Created temporary filename: ", name);
});

tmpName({ template: "/tmp/tmp-XXXXXX" }, (err, name) => {
    if (err) throw err;

    console.log("Created temporary filename: ", name);
});

tmpName({ name: "fixed-name", dir: "relative" }, (err, name) => {
    if (err) throw err;

    console.log("Created temporary filename: ", name);
});

tmpName({ tmpdir: "/overridden/tmp/root" }, (err, name) => {
    if (err) throw err;

    console.log("Created temporary filename: ", name);
});

let tmpDir: DirResult = dirSync();
console.log("Dir name: ", tmpDir.name);
tmpDir.removeCallback();

tmpDir = dirSync({ mode: 750, prefix: "myTmpDir_" });
console.log("Dir: ", tmpDir.name);

let tmpFile: FileResult = fileSync();
console.log("File name: ", tmpFile.name);
console.log("File descriptor: ", tmpFile.fd);
tmpFile.removeCallback();

tmpFile = fileSync({ mode: 644, prefix: "prefix-", postfix: ".txt" });
console.log("File name: ", tmpFile.name);
console.log("File descriptor: ", tmpFile.fd);

let name: string = tmpNameSync();
console.log("Created temporary filename: ", name);

name = tmpNameSync({ template: "/tmp/tmp-XXXXXX" });
console.log("Created temporary filename: ", name);

name = tmpNameSync({ name: "fixed-name", dir: "relative" });
console.log("Created temporary filename: ", name);

name = tmpNameSync({ tmpdir: "/overridden/tmp/root" });
console.log("Created temporary filename: ", name);
