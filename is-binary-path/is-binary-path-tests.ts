import isBinaryPath = require("is-binary-path");

let a: boolean = isBinaryPath("src/unicorn.png");

let b: boolean = isBinaryPath("src/unicorn.txt");