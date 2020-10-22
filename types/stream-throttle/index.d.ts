// Type definitions for stream-throttle 0.1
// Project: https://github.com/tjgq/node-stream-throttle
// Definitions by: Daniel Byrne <https://github.com/danwbyrne>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types = "node" />

import { Transform } from 'stream';

export interface ThrottleOptions {
  readonly rate: number;
  readonly chunksize?: number;
}

export class Throttle extends Transform {
  constructor(options: ThrottleOptions);
}

export class ThrottleGroup {
  constructor(options: ThrottleOptions);
  throttle(options: ThrottleOptions): Throttle;
}
