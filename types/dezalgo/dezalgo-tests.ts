import dezalgo = require("dezalgo");

// Basic usage
const safeCb = dezalgo((err: Error | null, data: string) => {});

safeCb(null, "hello");

// With no-arg callback
const simple = dezalgo(() => {});
simple();

// @ts-expect-error - argument must be a function
dezalgo("not a function");
