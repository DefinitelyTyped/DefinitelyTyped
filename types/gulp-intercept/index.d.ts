// Type definitions for gulp-intercept 0.1
// Project: https://github.com/khilnani/gulp-intercept
// Definitions by: DefinitelyTyped <https://github.com/DefinitelyTyped>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />

import Vinyl = require('vinyl');

declare namespace intercept {
    interface Intercept {
        (interceptFunction: InterceptFunction): NodeJS.ReadWriteStream;
    }

    interface InterceptFunction {
        (file: Vinyl): Vinyl;
    }
}

declare var intercept: intercept.Intercept;

export = intercept;
