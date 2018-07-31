/// <reference types="node" />

import * as fs from "fs";
import iferr = require("iferr");

const { tiferr, throwerr, printerr } = iferr;

const { readFile } = fs;

const errcb = (err: Error) => { throw err; };

readFile("test.txt", iferr(errcb, result => {
    Buffer.from("test", "utf8") === result;
}));

readFile("test.txt", "utf8", iferr(errcb, result => {
    "test" === result;
}));

readFile("test.txt", tiferr(errcb, result => {
    Buffer.from("test", "utf8") === result;
}));

readFile("test.txt", "utf8", tiferr(errcb, result => {
    "test" === result;
}));

readFile("test.txt", throwerr(result => {
    Buffer.from("test", "utf8") === result;
}));

readFile("test.txt", "utf8", throwerr(result => {
    "test" === result;
}));

readFile("test.txt", printerr);

readFile("test.txt", "utf8", printerr);
