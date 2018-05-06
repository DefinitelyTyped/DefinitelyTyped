// Type definitions for pumpify 1.4
// Project: https://github.com/mafintosh/pumpify
// Definitions by: Justin Beckwith <https://github.com/JustinBeckwith>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />

import { Stream, Duplex } from 'stream';

export = pumpify;

declare class pumpify extends Duplex {
  constructor();
  setPipeline(...args: Stream[]): void;
}

declare namespace pumpify {}
