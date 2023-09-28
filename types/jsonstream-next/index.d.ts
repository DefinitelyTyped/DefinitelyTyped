// Type definitions for jsonstream-next 3.0
// Project: https://github.com/dominictarr/JSONStream
// Definitions by: Daniel Rosenwasser <https://github.com/DanielRosenwasser>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />

import stream = require("stream");

export interface Options {
    recurse: boolean;
}

export function parse(pattern: any): stream.Transform;
export function parse(patterns: any[]): stream.Transform;

/**
 * Create a writable stream.
 * You may pass in custom open, close, and seperator strings, but, by default,
 * JSONStream.stringify() will create an array,
 * (with default options open='[\n', sep='\n,\n', close='\n]\n')
 */
export function stringify(): stream.Transform;

/**
 * Create a writable stream.
 * You may pass in custom open, close, and seperator strings.
 */
export function stringify(open: string, sep: string, close: string): stream.Transform;

/** Creates a writable stream where elements are only seperated by a newline. */
export function stringify(newlineOnly: NewlineOnlyIndicator): stream.Transform;
export type NewlineOnlyIndicator = false;

export function stringifyObject(): stream.Transform;
export function stringifyObject(open: string, sep: string, close: string): stream.Transform;
export function stringifyObject(newlineOnly: NewlineOnlyIndicator): stream.Transform;
