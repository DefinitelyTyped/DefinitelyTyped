// Type definitions for Mustache 0.7
// Project: https://github.com/janl/mustache.js
// Definitions by: Boris Yankov <https://github.com/borisyankov/>
// Definitions: https://github.com/borisyankov/DefinitelyTyped


interface MustacheScanner {
    string: string;
    tail: string;
    pos: number;

    eos(): bool;
    scan(re: RegExp): string;
    scanUntil(re: RegExp): string;
}

interface MustacheContext {
    view;
    parent;

    clearCache();
    push(view): MustacheContext;
    lookup(name: string): any;
}

interface MustacheWriter {
    (view: any): string;
    clearCache();
    compile(template: string, tags);
    compilePartial(name, template, tags);
    compileTokens(tokens, template);
    render(template, view, partials);
}

interface MustacheStatic {
    name: string;
    version: string;
    tags: string;
    Scanner: MustacheScanner;
    Context: MustacheContext;
    Writer: MustacheWriter;
    escape;

    parse(template: string, tags);
    clearCache(): MustacheWriter;
    compile(template: string): MustacheWriter;
    compile(template: string, tags): MustacheWriter;
    compilePartial(name: string, template: string, tags): MustacheWriter;
    compileTokens(tokens, template: string): MustacheWriter;
    render(template: string, view: any, partials?: any): string;
    to_html(template: string, view: any, partials?: any, send?): string;
}

declare var Mustache: MustacheStatic;
