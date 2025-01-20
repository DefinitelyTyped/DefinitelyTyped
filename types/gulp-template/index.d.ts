/// <reference types="node" />

import * as _ from "lodash";
import * as stream from "stream";

declare function gulpTemplate(data: any, options: _.TemplateOptions): stream.Transform;

declare namespace gulpTemplate {
    function precompile(options: _.TemplateOptions): stream.Transform;
}

export = gulpTemplate;
