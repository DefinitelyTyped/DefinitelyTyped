import thenifyAll = require("thenify-all");

const fs = {
    readFile(path: string, cb: (err: Error | null, data: string) => void) {
        cb(null, "content");
    },
    writeFile(path: string, data: string, cb: (err: Error | null) => void) {
        cb(null);
    },
};

// Promisify all methods
const promisifiedFs = thenifyAll(fs);

// Promisify with specific methods
const partial = thenifyAll(fs, ["readFile"]);

// Promisify with destination object
const dest = {};
thenifyAll(fs, dest, ["readFile"]);

// withCallback
const withCb = thenifyAll.withCallback(fs);

// @ts-expect-error - source must be an object
thenifyAll("not an object");
