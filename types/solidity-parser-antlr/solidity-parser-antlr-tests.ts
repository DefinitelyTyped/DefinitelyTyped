import { parse } from 'solidity-parser-antlr';

const parserOpts = { range: true };
parse('contract A {}', parserOpts);
