import rewire = require("rewire");

const myModule = rewire("../lib/myModule.js");

myModule.__set__("path", "/dev/null");
myModule.__get__("path"); // = '/dev/null'

const fsMock = {
    readFile(path: string, encoding: string, cb: (a: any, b: any) => any) {
        cb(null, "Success!");
    }
};
myModule.__set__("fs", fsMock);

myModule.__set__({
    fs: fsMock,
    path: "/dev/null"
});

myModule.__set__({
    console: {
        log() { /* be quiet */ }
    },
    process: {
        argv: ["testArg1", "testArg2"]
    }
});

const revert = myModule.__set__("port", 3000);

// port is now 3000
revert();
// port is now the previous value

myModule.__with__({
    port: 3000
})(() => {
    // within this function port is 3000
});
// now port is the previous value again

myModule.__with__({
    port: 3000
})(() => {
}).then(() => {
    // now port is the previous value again
});
// port is still 3000 here because the promise hasn't been resolved yet
