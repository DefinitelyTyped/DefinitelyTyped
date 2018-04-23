// Type definitions for mjml 4.0
// Project: https://mjml.io
// Definitions by: aahoughton <https://github.com/aahoughton>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare module "mjml" {
    interface ParsingOpts {
        fonts?: { [key: string]: string; };
        keepComments?: boolean;
        beautify?: boolean;
        minify?: boolean;
        validationLevel?: 'strict' | 'soft' | 'skip';
        filePath?: boolean;
    }

    interface ParseResults {
        html: string,
        errors: string[]
    }

    function mjml2html(inp: string, opts?: ParsingOpts): ParseResults;

    export = mjml2html;
}
