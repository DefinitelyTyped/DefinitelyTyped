/// <reference types="node" />

export interface Options {
    recurse: boolean;
}

export function parse(pattern: any): NodeJS.ReadWriteStream;
export function parse(patterns: any[]): NodeJS.ReadWriteStream;

/**
 * Create a writable stream.
 * You may pass in custom open, close, and seperator strings, but, by default,
 * JSONStream.stringify() will create an array,
 * (with default options open='[\n', sep='\n,\n', close='\n]\n')
 */
export function stringify(): NodeJS.ReadWriteStream;

/**
 * Create a writable stream.
 * You may pass in custom open, close, and seperator strings.
 */
export function stringify(open: string, sep: string, close: string): NodeJS.ReadWriteStream;

/** Creates a writable stream where elements are only seperated by a newline. */
export function stringify(newlineOnly: NewlineOnlyIndicator): NodeJS.ReadWriteStream;
export type NewlineOnlyIndicator = false;

export function stringifyObject(): NodeJS.ReadWriteStream;
export function stringifyObject(open: string, sep: string, close: string): NodeJS.ReadWriteStream;
