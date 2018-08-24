// Type definitions for pg-large-object 2.0
// Project: https://github.com/Joris-van-der-Wel/node-pg-large-object#readme
// Definitions by: Mateusz Krupa <https://github.com/mateuszkrupa>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />

import { WriteStream } from "fs";

export class LargeObjectManager {
  constructor(options: any);
  openAndReadableStreamAsync(oid: number, bufferSize: number): Promise<[number, NodeJS.ReadableStream]>;
  createAndWritableStreamAsync(bufferSize: number): Promise<[number, WriteStream]>;
  unlinkAsync(oid: number): Promise<any>;
}
