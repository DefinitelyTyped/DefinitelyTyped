import {
    dir,
    DirResult,
    dirSync,
    file,
    FileResult,
    fileSync,
    setGracefulCleanup,
    tmpName,
    tmpNameSync
} from "tmp";

file((err, name, fd, removeCallback) => {
    if (err) throw err;

    console.log("File name: ", name);
    console.log("File descriptor: ", fd);

    removeCallback();
});

dir((err, name, removeCallback) => {
    if (err) throw err;

    console.log("Dir name: ", name);

    removeCallback();
});

tmpName((err, name) => {
    if (err) throw err;

    console.log("Created temporary filename: ", name);
});

file({ mode: 644, prefix: "prefix-", postfix: ".txt" }, (err, name, fd) => {
    if (err) throw err;

    console.log("File name: ", name);
    console.log("File descriptor: ", fd);
});

dir({ mode: 750, prefix: "myTmpDir_" }, (err, name) => {
    if (err) throw err;

    console.log("Dir name: ", name);
});

tmpName({ template: "/tmp/tmp-XXXXXX" }, (err, name) => {
    if (err) throw err;

    console.log("Created temporary filename: ", name);
});

setGracefulCleanup();

let tmpFile: FileResult = fileSync();
console.log("File name: ", tmpFile.name);
console.log("File descriptor: ", tmpFile.fd);
tmpFile.removeCallback();

let tmpDir: DirResult = dirSync();
console.log("Dir name: ", tmpDir.name);
tmpDir.removeCallback();

let name: string = tmpNameSync();
console.log("Created temporary filename: ", name);

tmpFile = fileSync({ mode: 644, prefix: "prefix-", postfix: ".txt" });
console.log("File name: ", tmpFile.name);
console.log("File descriptor: ", tmpFile.fd);

tmpDir = dirSync({ mode: 750, prefix: "myTmpDir_" });
console.log("Dir: ", tmpDir.name);

name = tmpNameSync({ template: "/tmp/tmp-XXXXXX" });
console.log("Created temporary filename: ", name);
