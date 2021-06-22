// Type definitions for node-sass-tilde-importer 1.0
// Project: https://github.com/matthewdavidson/node-sass-tilde-importer#readme
// Definitions by: Piotr Błażejewicz <https://github.com/peterblazejewicz>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
import { ImporterReturnType } from 'node-sass';

/**
 * A node-sass custom importer which turns ~ into absolute paths to the nearest parent node_modules directory.
 */
declare function importer(url: string, prev: string): ImporterReturnType;
declare function importer(url: string, prev: string, done: (data: ImporterReturnType) => void): void;

export = importer;
