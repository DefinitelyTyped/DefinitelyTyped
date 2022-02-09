// Type definitions for non-npm package @ember/polyfills 4.0
// Project: https://emberjs.com/api/ember/4.0/modules/@ember%2Fpolyfills
// Definitions by: Chris Krycho <https://github.com/chriskrycho>
//                 Dan Freeman <https://github.com/dfreeman>
//                 James C. Davis <https://github.com/jamescdavis>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// Minimum TypeScript Version: 4.4

import { Mix, Mix3, Mix4 } from './types';

/**
 * Copy properties from a source object to a target object.
 * @deprecated until v5.0. You should replace any calls to `Ember.assign` with
 *   `Object.assign` or use the object spread operator.
 */
export function assign<T extends object, U extends object>(target: T, source: U): Mix<T, U>;
export function assign<T extends object, U extends object, V extends object>(target: T, source1: U, source2: V): Mix3<T, U, V>;
export function assign<T extends object, U extends object, V extends object, W extends object>(target: T, source1: U, source2: V, source3: W): Mix4<T, U, V, W>;
export function assign(target: object, ...sources: object[]): unknown;
export function assign(target: object, final: undefined | null): never;
