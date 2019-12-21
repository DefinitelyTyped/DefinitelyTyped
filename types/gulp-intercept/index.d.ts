// Type definitions for gulp-intercept 0.1
// Project: https://github.com/khilnani/gulp-intercept
// Definitions by: Takesi Tokugawa <https://github.com/TokugawaTakesi>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// Thanks: https://stackoverflow.com/users/5669456/ford04

/// <reference types="node" />

import Vinyl = require('vinyl');

declare namespace intercept {
    interface Intercept {
        <VinylFileWithCustomProperties extends Vinyl>(
            interceptFunction: InterceptFunction<VinylFileWithCustomProperties>
        ): NodeJS.ReadWriteStream;
    }
    interface InterceptFunction<VinylFileWithCustomProperties extends Vinyl> {
        (file: VinylFileWithCustomProperties): VinylFileWithCustomProperties;
    }
}

declare var intercept: intercept.Intercept<Vinyl>;

export = intercept;
