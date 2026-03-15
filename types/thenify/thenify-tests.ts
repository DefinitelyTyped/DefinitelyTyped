import thenify = require("thenify");

function readFile(path: string, cb: (err: Error | null, data: string) => void): void {
    cb(null, "content");
}

// $ExpectType (...args: any[]) => Promise<any>
const readFileAsync = thenify(readFile);

// $ExpectType Promise<any>
readFileAsync("test.txt");

// With options
// $ExpectType (...args: any[]) => Promise<any>
const readFileAsync2 = thenify(readFile, { multiArgs: false });

// withCallback
// $ExpectType (...args: any[]) => Promise<any>
const readFileBoth = thenify.withCallback(readFile);

// @ts-expect-error - argument must be a function
thenify("not a function");
