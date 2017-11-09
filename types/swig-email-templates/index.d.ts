// Type definitions for swig-email-templates
// Project: https://github.com/andrewrk/swig-email-templates
// Definitions by: Adam Babcock <https://github.com/mrhen>
//                 Satana Charuwichitratana <https://github.com/micksatana>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="swig" />

import swig = require('swig');

interface SwigRender<T> {
    (file: string, context: T, callback: (err: any, html: string, text: string) => any): any;
}

interface SwigEmailTemplatesOptions extends swig.SwigOptions {
    root?: string;
    juice?: any;
}

declare class EmailTemplates {
    constructor(options?: SwigEmailTemplatesOptions);

    generateText(templatePath: string, context: any, html: string, cb: Function): void;
    generateSubject(templatePath: string, context: any, cb: Function): void;
    rewriteUrls($: Function, rewrite: Function): void;
    render(templatePath: string, context: any, cb: Function): void;
}

export = EmailTemplates;
