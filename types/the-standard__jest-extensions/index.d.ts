// Type definitions for @the-standard/jest-extensions 1.0
// Project: https://github.com/ecoulson/standard-jest-extensions#readme
// Definitions by: Evan Coulson <https://github.com/ecoulson>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// Minimum TypeScript Version: 4.3

/// <reference types="jest" />

import { Exception } from '@the-standard/exceptions';

declare global {
    namespace jest {
        interface Matchers<R = unknown> {
            toThrowException(expectedException: Exception): R;
            toThrowExceptionAsync(expectedException: Exception): Promise<R>;
        }
    }
}

export {};
