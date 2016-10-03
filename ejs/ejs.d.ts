// Type definitions for ejs.js v2.3.3
// Project: http://ejs.co/
// Definitions by: Ben Liddicott <https://github.com/benliddicott/DefinitelyTyped>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped


declare module "ejs" {
    namespace Ejs {
        type Data = { [name: string]: any };
        type Dependencies = string[];
        var cache: Cache;
        var localsName: string;
        function resolveInclude(name: string, filename: string): string;
        function compile(template: string, opts?: Options): (TemplateFunction);
        function render(template: string, data?: Data, opts?: Options): string;
        function renderFile(path: string, data?: Data, opts?: Options, cb?: Function): any;// TODO RenderFileCallback return type
        function clearCache(): any;

        function TemplateFunction(data: Data): any;
        interface TemplateFunction {
            dependencies: Dependencies;
        }
        interface Options {
            cache?: any;
            filename?: string;
            context?: any;
            compileDebug?: boolean;
            client?: boolean;
            delimiter?: string;
            debug?: any;
            _with?: boolean;
        }
        class Template {
            constructor(text: string, opts: Options);
            opts: Options;
            templateText: string;
            mode: string;
            truncate: boolean;
            currentLine: number;
            source: string;
            dependencies: Dependencies;
            createRegex(): RegExp;
            compile(): TemplateFunction;
            generateSource(): any;
            parseTemplateText(): string[];
            scanLine(line: string): any;

        }
        namespace Template {
            interface MODES {
                EVAL: string;
                ESCAPED: string;
                RAW: string;
                COMMENT: string;
                LITERAL: string;
            }
        }
        function escapeRegexChars(s: string): string;
        function escapeXML(markup: string): string;
        function shallowCopy<T1>(to: T1, fro: any): T1;
        interface Cache {
            _data: { [name: string]: any };
            set(key: string, val: any): any;
            get(key: string): any;
        }
        var cache: Cache;
        function resolve(from1: string, to: string): string;
        function resolve(from1: string, from2: string, to: string): string;
        function resolve(from1: string, from2: string, from3: string, to: string): string;
        function resolve(from1: string, from2: string, from3: string, from4: string, to: string): string;
        function resolve(from1: string, from2: string, from3: string, from4: string, from5: string, to: string): string;
        function resolve(from1: string, from2: string, from3: string, from4: string, from5: string, from6: string, to: string): string;
        function resolve(from1: string, from2: string, from3: string, from4: string, from5: string, from6: string, from7: string, to: string): string;
        function resolve(from1: string, from2: string, from3: string, from4: string, from5: string, from6: string, from7: string, from8: string, to: string): string;
        function resolve(from1: string, from2: string, from3: string, from4: string, from5: string, from6: string, from7: string, from8: string, from9: string, to: string): string;
        function resolve(...args: string[]): string;
        function normalize(path: string): string;
        function isAbsolute(path: string): boolean;
        function join(...args: string[]): string;
        function relative(from: string, to: string): string;
        var sep: string;
        var delimiter: string;
        function dirname(path: string): string;
        function basename(path: string): string;
        function extname(path: string): string;
        function filter(xs: any, f: any): any; // TODO WHUT?


    }
    export = Ejs;
}
