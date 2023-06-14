// Type definitions for barnard59-base 1.0
// Project: https://github.com/zazuko/barnard59-base
// Definitions by: Tomasz Pluskiewicz <https://github.com/tpluscode>
//                 Benjamin Hofstetter <https://github.com/BenjaminHofstetter>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 4.4

/// <reference types="node" />

import { Writable } from 'readable-stream';

export { default as combine } from './combine';
export { default as concat, object as concatObject } from './concat';
export { default as filter } from './filter';
export { default as flatten } from './flatten';
export { default as glob } from './glob';
export { parse as jsonParse, stringify as jsonStringify } from './json';
export { default as limit } from './limit';
export { default as map } from './map';
export function nul(): Writable;
export { default as offset } from './offset';
export { default as stdout } from './stdout';
export { default as toString } from './toString';
