/// <reference types="jquery" />

import swig = require("swig");

type SwigRender<T> = (file: string, context: T, callback: (err: any, html: string, text: string) => any) => any;

interface SwigEmailTemplatesOptions extends swig.SwigOptions {
    root?: string | undefined;
    juice?: any;
    rewriteUrl?: ((href: string) => string) | undefined;
    rewrite?: (($: JQueryStatic) => void) | undefined;
}

declare class EmailTemplates {
    constructor(options?: SwigEmailTemplatesOptions);

    generateText(templatePath: string, context: any, html: string, cb: (error: any, text: string | null) => void): void;
    generateSubject(templatePath: string, context: any, cb: (error: any, text: string | null) => void): void;
    rewriteUrls($: JQueryStatic, rewrite: (href: string) => void): void;
    render(
        templatePath: string,
        context: any,
        cb: (error: any, inlinedHTML?: string, text?: string, subject?: string) => void,
    ): void;
    /** @async */
    render(templatePath: string, context: any): Promise<{ html?: string; text?: string; subject?: string }>;
}

export = EmailTemplates;
