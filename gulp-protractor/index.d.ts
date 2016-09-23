// Type definitions for gulp-protractor v1.0.0
// Project: https://github.com/mllrsohn/gulp-protractor
// Definitions by: Tanguy Krotoff <https://github.com/tkrotoff>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />

import gulp = require('gulp');

interface IOptions {
    configFile?: string;
    args?: Array<string>;
    debug?: boolean;
}

interface IGulpProtractor {
    getProtractorDir(): string;
    protractor(options?: IOptions): NodeJS.ReadWriteStream;
    webdriver_standalone: gulp.TaskCallback;
    webdriver_update: gulp.TaskCallback;
}

declare var protractor: IGulpProtractor;
export = protractor;
