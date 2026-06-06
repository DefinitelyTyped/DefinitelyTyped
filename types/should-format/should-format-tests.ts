import format = require("should-format");

// Test default format function
const objStr: string = format({ a: 1, b: 2 });
const arrStr: string = format([1, 2, 3]);
const nullStr: string = format(null);
const undefinedStr: string = format(undefined);
const numStr: string = format(42);
const boolStr: string = format(true);
const strStr: string = format("hello");
const dateStr: string = format(new Date());
const regexStr: string = format(/test/g);

// Test with options
const withOptions: string = format({ a: 1 }, {
    maxLineLength: 80,
    propSep: ";",
    isUTCdate: true,
});

// Test with keysFunc option
const withKeysFunc: string = format({ a: 1, b: 2 }, {
    keysFunc: (obj) => Object.keys(obj).reverse(),
});

// Test with keys: false option
const withAllKeys: string = format({ a: 1 }, {
    keys: false,
});

// Test Formatter class
const formatter = new format.Formatter();
const formatted: string = formatter.format({ test: true });

// Test Formatter with options
const formatterWithOpts = new format.Formatter({
    maxLineLength: 100,
    propSep: ",",
});
const formatted2: string = formatterWithOpts.format([1, 2, 3]);
