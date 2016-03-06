// Type definitions for swig-email-templates
// Project: https://github.com/andrewrk/swig-email-templates
// Definitions by: Adam Babcock <https://github.com/mrhen>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/// <reference path="../swig/swig.d.ts" />

declare module "swig-email-templates" {
    import swig = require('swig');

    interface SwigRender<T> {
        (file:string, context:T, callback:(err:any, html:string, text:string)=>any):any;
    }

    interface SwigEmailTemplatesOptions extends swig.SwigOptions {
        root?: string;
    }

    function init<T>(options:SwigEmailTemplatesOptions, cb:(err:any, render:SwigRender<T>)=>any):any;
    export = init
}
