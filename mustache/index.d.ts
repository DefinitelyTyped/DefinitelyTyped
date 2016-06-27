// Type definitions for Mustache 0.8.2
// Project: https://github.com/janl/mustache.js
// Definitions by: Mark Ashley Bell <https://github.com/markashleybell/>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped


interface MustacheScanner {
    string: string;
    tail: string;
    pos: number;

    eos(): boolean;
    scan(re: RegExp): string;
    scanUntil(re: RegExp): string;
}

interface MustacheContext {
    view: any;
    parentContext: MustacheContext;

    push(view: any): MustacheContext;
    lookup(name: string): any;
}

interface MustacheWriter {
    (view: any): string;

    clearCache(): void;
    parse(template: string, tags?: any): any;
    render(template: string, view: any, partials: any): string;
    renderTokens(tokens: string[], context: MustacheContext, partials: any, originalTemplate: any): string;
}

interface MustacheStatic {
    name: string;
    version: string;
    tags: string;
    Scanner: MustacheScanner;
    Context: MustacheContext;
    Writer: MustacheWriter;
    escape: any;

    clearCache(): MustacheWriter;
    parse(template: string, tags?: any): any;
    render(template: string, view: any, partials?: any): string;
    to_html(template: string, view: any, partials?: any, send?: any): any;
}

declare var Mustache: MustacheStatic;

declare module 'mustache' {
	export = Mustache;
}
