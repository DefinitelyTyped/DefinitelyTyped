import shortHash from "short-hash";

// @ts-expect-error -- Need a string argument
shortHash();

shortHash("Hello, world!"); // $ExpectType string
