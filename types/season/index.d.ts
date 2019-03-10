// Type definitions for season 6.0
// Project: http://atom.github.io/season
// Definitions by: Piotr Roszatycki <https://github.com/dex4er>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export interface ParseOptions {
    allowDuplicateKeys?: boolean;
}

/** Set the cache directory to use for storing compiled CSON files. */
export function setCacheDir(cacheDirectory: string): void;

/** Convert the object to a CSON string. */
export function stringify(object: any): string;

/** Read the CSON or JSON object at the given path and return it to the callback once it is read and parsed. */
export function readFile(objectPath: string, callback: (err: Error | null, object: any) => void): void;
export function readFile(objectPath: string, options: ParseOptions, callback: (err: Error | null, object: any) => void): void;

/** Synchronous version of `CSON.readFile(objectPath, callback)`. */
export function readFileSync(objectPath: string, options?: ParseOptions): any;

/** Write the object to the given path as either JSON or CSON depending on the path's extension. */
export function writeFile(objectPath: string, object: any, callback: (err: Error | null) => void): void;

/** Synchronous version of `CSON.writeFile(objectPath, object, callback)` */
export function writeFileSync(objectPath: string, object: any): void;

/** Is the given path a valid object path? Returns true if the path has a .json or .cson file extension, false otherwise. */
export function isObjectPath(objectPath: string): boolean;

/** Resolve the path to an existent file that has a .json or .cson extension. Returns the path to an existent CSON or JSON file or null if none found. */
export function resolve(objectPath: string): string | null;
