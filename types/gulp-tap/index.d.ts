// Type definitions for gulp-tap 1.0
// Project: https://github.com/geejs/gulp-tap
// Definitions by: DefinitelyTyped <https://github.com/DefinitelyTyped>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />

import Vinyl = require('vinyl');

declare namespace tap {
    interface Tap {
        (tapFunction: TapFunction, t?: any): NodeJS.ReadWriteStream;
    }

    interface TapFunction {
        (file: Vinyl): any;
    }
}

declare function tap(tapFunction: (file: Vinyl, t?: {}) => void): NodeJS.ReadWriteStream;

export = tap;
