import fs = require("fs");
import sha1 = require("sha1");

console.log(sha1('message')); // should print 6f9b9af3cd6e8b8a73c2cdced37fe9f59226e27d

const testTwo = sha1('message', {asString: true});
const testThree = sha1('message', {asBytes: true});

fs.readFile('sha1.d.ts', (err: Error, buf: Buffer) => {
    console.log(sha1(buf));
});
