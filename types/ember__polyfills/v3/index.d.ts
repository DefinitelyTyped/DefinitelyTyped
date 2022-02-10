// Type definitions for non-npm package @ember/polyfills  3.12
// Project: https://emberjs.com/api/ember/3.16/modules/@ember%2Fpolyfills
// Definitions by: Mike North <https://github.com/mike-north>
//                 Chris Krycho <https://github.com/chriskrycho>
//                 Dan Freeman <https://github.com/dfreeman>
//                 James C. Davis <https://github.com/jamescdavis>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.7

import { Mix, Mix3, Mix4 } from './types';

/**
 * Copy properties from a source object to a target object.
 */
export function assign<T extends object, U extends object>(target: T, source: U): Mix<T, U>;
export function assign<T extends object, U extends object, V extends object>(target: T, source1: U, source2: V): Mix3<T, U, V>;
export function assign<T extends object, U extends object, V extends object, W extends object>(target: T, source1: U, source2: V, source3: W): Mix4<T, U, V, W>;
export function assign(target: object, ...sources: object[]): any;
export function assign(target: object, final: undefined | null): never;

/**
 * Merge the contents of two objects together into the first object.
 * @deprecated Use Ember.assign
 */
export function merge<T extends object, U extends object>(original: T, updates: U): Mix<T, U>;
