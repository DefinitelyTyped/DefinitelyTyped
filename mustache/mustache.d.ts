// Type definitions for Mustache 0.8.2
// Project: https://github.com/janl/mustache.js
// Definitions by: Mark Ashley Bell <https://github.com/markashleybell/>
// Definitions: https://github.com/borisyankov/DefinitelyTyped


interface MustacheScanner {
    string: string;
    tail: string;
    pos: number;

    eos(): boolean;
    scan(re: RegExp): string;
    scanUntil(re: RegExp): string;
}

interface MustacheContext {
    view;
    parent;

    push(view): MustacheContext;
    lookup(name: string): any;
}

interface MustacheWriter {
    (view: any): string;

    clearCache();
    parse(template: string, tags?: any);
    render(template, view, partials);
    renderTokens(tokens, context, partials, originalTemplate);
}

interface MustacheStatic {
    name: string;
    version: string;
    tags: string;
    Scanner: MustacheScanner;
    Context: MustacheContext;
    Writer: MustacheWriter;
    escape;

    clearCache(): MustacheWriter;
    parse(template: string, tags?: any);
    render(template: string, view: any, partials?: any): string;
    to_html(template: string, view: any, partials?: any, send?): string;
}

declare var Mustache: MustacheStatic;
