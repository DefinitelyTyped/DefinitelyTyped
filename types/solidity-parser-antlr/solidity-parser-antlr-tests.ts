import { parse } from "solidity-parser-antlr";

const parserOpts = { range: true, loc: true, tolerant: false };
parse("contract A {}", parserOpts);
