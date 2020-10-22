// Type definitions for level-js 4.0
// Project: https://github.com/Level/level-js
// Definitions by: Daniel Byrne <https://github.com/danwbyrne>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

import { AbstractLevelDOWN, AbstractOptions } from 'abstract-leveldown';

interface Level extends AbstractLevelDOWN {
  readonly location: string;
  readonly prefix: string;
  readonly version: string | number;
  destroy(location: string, cb: (err: Error | undefined) => void): void;
  destroy(location: string, prefix: string, cb: (err: Error | undefined) => void): void;
}

interface LevelOptions {
  readonly prefix?: string;
  readonly version?: string | number;
}

interface LevelConstructor {
  new (location: string, options?: LevelOptions): Level;
  (location: string, options?: LevelOptions): Level;
}

declare const Level: LevelConstructor;
export = Level;
