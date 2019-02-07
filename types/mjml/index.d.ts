// Type definitions for mjml 4.0
// Project: https://github.com/mjmlio/mjml
// Definitions by: aahoughton <https://github.com/aahoughton>
//                 marpstar   <https://github.com/marpstar>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

interface MJMLParsingOpts {
    fonts?: { [key: string]: string; };
    keepComments?: boolean;
    beautify?: boolean;
    minify?: boolean;
    validationLevel?: 'strict' | 'soft' | 'skip';
    filePath?: string;
}

interface MJMLParseError {
    line: number;
    message: string;
    tagName: string;
    formattedMessage: string;
}

interface MJMLParseResults {
    html: string;
    errors: MJMLParseError[];
}

declare function mjml2html(inp: string, opts?: MJMLParsingOpts): MJMLParseResults;

export = mjml2html;
