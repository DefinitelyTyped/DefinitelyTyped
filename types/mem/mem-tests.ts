import mem = require('mem');

let i = 0;
const memoized = mem((arg: string) => ++i);
const ret1: number = memoized('foo');

// Clear the memoized data
mem.clear(memoized);

const ret2: Promise<string> = mem(() => Promise.resolve('foo'))();
