// Type definitions for jasmine-expect-jsx 3.2
// Project: https://github.com/smacker/jasmine-expect-jsx#readme
// Definitions by: Nathan <https://github.com/nweber-gh>
//                 Bryan <https://github.com/bdwain>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// Minimum TypeScript Version: 3.2

/// <reference types="jasmine"/>

import * as React from 'react';

declare global {
    namespace jasmine {
        interface Matchers<T> {
            toEqualJSX(element: Expected<T>): boolean;
            toIncludeJSX(element: Expected<T>): boolean;
        }
    }
}
