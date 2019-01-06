// Type definitions for gulp-tap
// Project: https://github.com/geejs/gulp-tap
// Definitions by: Takesi Tokugawa <https://github.com/TokugawaTakesi>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />
/// <reference types="vinyl" />

import Vinyl = require('vinyl');

declare namespace tap {
    interface Tap {
        (tapFunction: TapFunction, t?: any): NodeJS.ReadWriteStream;
    }

    interface TapFunction {
        (file: Vinyl): any;
    }
}

declare var tap: tap.Tap;

export = tap;