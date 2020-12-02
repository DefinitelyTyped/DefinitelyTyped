// Type definitions for blocked-at 1.0
// Project: https://github.com/naugtur/blocked-at#readme
// Definitions by: Jan Dolezel <https://github.com/dolezel>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />

/*~ Note that ES6 modules cannot directly export callable functions.
 *~ This file should be imported using the CommonJS-style:
 *~   import x = require('someLibrary');
 *~
 *~ Refer to the documentation to understand common
 *~ workarounds for this limitation of ES6 modules.
 */

export = blockedAt;

declare function blockedAt(fn: (time: number, stack: string[], resource: blockedAt.Resource) => unknown, options?: blockedAt.Options): blockedAt.Return;

declare namespace blockedAt {
  interface Options {
    trimFalsePositives?: boolean;
    threshold?: number;
    resourcesCap?: number;
    debug?: boolean;
  }

  interface Resource {
    type: string;
    resource?: any;
  }

  interface Return {
    stop: () => void;
  }
}
