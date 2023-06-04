// Type definitions for @hapi/pez 6.1.0
// Project: https://github.com/hapijs/pez
// Definitions by: Grant Timmerman <https://github.com/grant>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />

import Stream from 'stream';

export interface PezOptions extends Stream.WritableOptions {
  boundary: string;
  maxBytes?: number;
  maxParts?: number;
}

export class Dispenser extends Stream.Writable {
  constructor(options?: PezOptions);
}
