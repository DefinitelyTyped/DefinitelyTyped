// Type definitions for chai-snapshot-matcher 1.0
// Project: https://github.com/tlameiras/chai-snapshot#readme
// Definitions by: tpluscode <https://github.com/tpluscode>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.0

/// <reference types="chai" />

import { Context } from 'mocha';

declare global {
  namespace Chai {
    interface Assertion {
      matchSnapshot(that: Context, hint?: string): void;
      matchSpecificSnapshot(that: Context, options?: {
          hint?: string;
          name?: string;
          folder?: string;
          snapshotPath?: string;
      }): void;
    }
  }
}

export {};
