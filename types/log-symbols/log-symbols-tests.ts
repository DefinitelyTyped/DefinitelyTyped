/// <reference types="node"/>

import * as logSymbols from 'log-symbols';

console.log(logSymbols.success, 'Finished successfully!');

let str: string;

str = logSymbols.info;
str = logSymbols.success;
str = logSymbols.warning;
str = logSymbols.error;
