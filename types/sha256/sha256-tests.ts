import sha256 = require("sha256");

const test1: string = sha256('message');
const test2: number[] = sha256('message', { asBytes: true });
const test3: string = sha256('message', { asString: true });
const test4: string = sha256(Buffer.from('message'));
const test5: string = sha256(Array.from(Buffer.from('message')));
const test6: string = sha256.x2('message');
const test7: number[] = sha256.x2('message', { asBytes: true });
const test8: string = sha256.x2('message', { asString: true });
