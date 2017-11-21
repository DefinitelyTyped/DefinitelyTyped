// Type definitions for swig-email-templates 5.0
// Project: https://github.com/andrewrk/swig-email-templates
// Definitions by: Adam Babcock <https://github.com/mrhen>
//                 Satana Charuwichitratana <https://github.com/micksatana>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.4

/// <reference types="jquery" />

import swig = require('swig');

type SwigRender<T> = (file: string, context: T, callback: (err: any, html: string, text: string) => any) => any;

interface SwigEmailTemplatesOptions extends swig.SwigOptions {
    root?: string;
    juice?: any;
    rewriteUrl?: (href: string) => string;
    rewrite?: ($: JQueryStatic) => void;
}

declare class EmailTemplates {
    constructor(options?: SwigEmailTemplatesOptions);

    generateText(templatePath: string, context: any, html: string, cb: (error: any, text: string | null) => void): void;
    generateSubject(templatePath: string, context: any, cb: (error: any, text: string | null) => void): void;
    rewriteUrls($: JQueryStatic, rewrite: (href: string) => void): void;
    render(templatePath: string, context: any, cb: (error: any, inlinedHTML?: string, text?: string, subject?: string) => void): void;
}

export = EmailTemplates;
