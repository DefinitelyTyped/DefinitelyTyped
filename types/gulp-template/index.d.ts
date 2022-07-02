// Type definitions for gulp-template 5.0
// Project: https://github.com/sindresorhus/gulp-template#readme
// Definitions by: Peter Safranek <https://github.com/pe8ter>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

/// <reference types="node" />

import * as _ from 'lodash';
import * as stream from 'stream';

declare function gulpTemplate(data: any, options: _.TemplateOptions): stream.Transform;

declare namespace gulpTemplate {
    function precompile(options: _.TemplateOptions): stream.Transform;
}

export = gulpTemplate;
