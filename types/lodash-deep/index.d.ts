// Type definitions for lodash-deep v 2.0
// Project: https://github.com/marklagendijk/lodash-deep
// Definitions by: Remo uzust01 <https://github.com/uzust01/>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.5


import * as _ from 'lodash';

declare module 'lodash' {
    interface LoDashStatic {
        deepMapValues(
            object: any,
            callback: any,
            propertyPath?: any
        ): any;
    }
}

export function deepMapValues(
    object: any,
    callback: any,
    propertyPath?: any
): any;

