// Type definitions for async-busboy 0.7
// Project: https://github.com/m4nuC/async-busboy#readme
// Definitions by: Hiroshi Ioka <https://github.com/hirochachacha>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

import * as fs from 'fs';
import * as http from 'http';

import busboy = require('busboy');

interface Options extends busboy.BusboyConfig {
  onFile: (
    fieldname: string,
    file: NodeJS.ReadableStream,
    filename: string,
    encoding: string,
    mimetype: string) => void;
}

type AsyncBusboy = (
  req: http.IncomingMessage,
  options?: Options
) => Promise<{fields: {[key: string]: any}; files?: fs.ReadStream[]}>;

declare const asyncBusboy: AsyncBusboy;

export = asyncBusboy;
