import tmp = require("tmp");

tmp.file((err, name, fd, removeCallback) => {
    if (err) throw err;

    console.log("File name: ", name);
    console.log("File descriptor: ", fd);

    removeCallback();
});

tmp.dir((err, name, removeCallback) => {
    if (err) throw err;

    console.log("Dir name: ", name);

    removeCallback();
});

tmp.tmpName((err, name) => {
    if (err) throw err;

    console.log("Created temporary filename: ", name);
});

tmp.file({ mode: 644, prefix: "prefix-", postfix: ".txt" }, (err, name, fd) => {
    if (err) throw err;

    console.log("File name: ", name);
    console.log("File descriptor: ", fd);
});

tmp.dir({ mode: 750, prefix: "myTmpDir_" }, (err, name) => {
    if (err) throw err;

    console.log("Dir name: ", name);
});

tmp.tmpName({ template: "/tmp/tmp-XXXXXX" }, (err, name) => {
    if (err) throw err;

    console.log("Created temporary filename: ", name);
});

tmp.setGracefulCleanup();

let tmpFile = tmp.fileSync();
console.log("File name: ", tmpFile.name);
console.log("File descriptor: ", tmpFile.fd);
tmpFile.removeCallback();

let tmpDir = tmp.dirSync();
console.log("Dir name: ", tmpDir.name);
tmpDir.removeCallback();

const name = tmp.tmpNameSync();
console.log("Created temporary filename: ", name);

tmpFile = tmp.fileSync({ mode: 644, prefix: "prefix-", postfix: ".txt" });
console.log("File name: ", tmpFile.name);
console.log("File descriptor: ", tmpFile.fd);

tmpDir = tmp.dirSync({ mode: 750, prefix: "myTmpDir_" });
console.log("Dir: ", tmpDir.name);

const tmpName = tmp.tmpNameSync({ template: "/tmp/tmp-XXXXXX" });
console.log("Created temporary filename: ", tmpName);
