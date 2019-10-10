// Type definitions for memdown 3.0
// Project: https://github.com/Level/memdown
// Definitions by: Meirion Hughes <https://github.com/MeirionHughes>
//                 Daniel Byrne <https://github.com/danwbyrne>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

import { AbstractLevelDOWN } from 'abstract-leveldown';

export interface MemDown<K, V> extends AbstractLevelDOWN<K, V> {}

export interface MemDownConstructor {
  // tslint:disable-next-line no-unnecessary-generics
  new <K = any, V = any>(): MemDown<K, V>;
  // tslint:disable-next-line no-unnecessary-generics
  <K = any, V = any>(): MemDown<K, V>;
}

export const MemDown: MemDownConstructor;
export default MemDown;
