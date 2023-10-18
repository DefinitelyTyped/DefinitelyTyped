/// <reference types="node" />

import gulp = require("gulp");

interface IOptions {
    configFile?: string | undefined;
    args?: Array<string> | undefined;
    debug?: boolean | undefined;
}

interface IGulpProtractor {
    getProtractorDir(): string;
    getProtractorCli(): string;
    protractor(options?: IOptions): NodeJS.ReadWriteStream;
    webdriver_update_specific: gulp.TaskCallback;
    webdriver_standalone: gulp.TaskCallback;
    webdriver_update: gulp.TaskCallback;
}

declare var protractor: IGulpProtractor;
export = protractor;
