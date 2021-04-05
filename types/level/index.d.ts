// Type definitions for level 6.0
// Project: https://github.com/Level/level
// Definitions by: danielfx90 <https://github.com/danielfx90>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import { AbstractOptions, ErrorCallback } from 'abstract-leveldown';

import EncodingDown from 'encoding-down';

import { LevelUp } from 'levelup';

export interface LevelDB<K = any, V = any> extends LevelUp<EncodingDown<K, V>> {
  errors: /* typeof levelerrors */ any; // ? level-errors is not in DT
}

declare function level(location: string, options?: AbstractOptions, callback?: ErrorCallback): LevelDB;

export default level;
