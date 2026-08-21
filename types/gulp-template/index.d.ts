/// <reference types="node" />

import _ = require("lodash");
import stream = require("stream");

declare function gulpTemplate(data: any, options: _.TemplateOptions): stream.Transform;

declare namespace gulpTemplate {
    function precompile(options: _.TemplateOptions): stream.Transform;
}

export = gulpTemplate;
