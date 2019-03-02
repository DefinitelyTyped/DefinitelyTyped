// Type definitions for nslog 3.0
// Project: https://github.com/atom/node-nslog
// Definitions by: Daniel Perez Alvarez <https://github.com/unindented>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/**
 * Outputs a message to the native console.
 */
type NSLog = (...args: any[]) => void;

declare var nslog: NSLog;
export = nslog;
