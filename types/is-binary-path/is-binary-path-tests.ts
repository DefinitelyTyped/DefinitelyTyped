import isBinaryPath = require("is-binary-path");

const a: boolean = isBinaryPath("src/unicorn.png");

const b: boolean = isBinaryPath("src/unicorn.txt");
