// Type definitions for fs-capacitor 2.0
// Project: https://github.com/mike-marcacci/fs-capacitor#readme
// Definitions by: Mike Marcacci <https://github.com/mike-marcacci>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.3

/// <reference types="node" />

import { ReadStream as FSReadStream, WriteStream as FSWriteStream } from "fs";

export class ReadAfterDestroyedError extends Error {}

export class ReadStream extends FSReadStream {}

export class WriteStream extends FSWriteStream {
  constructor()
  createReadStream(name?: string): ReadStream;
}
