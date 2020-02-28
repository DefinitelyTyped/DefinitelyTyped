// Type definitions for mjml 4.0
// Project: https://github.com/mjmlio/mjml, https://mjml.io
// Definitions by: aahoughton <https://github.com/aahoughton>
//                 marpstar   <https://github.com/marpstar>
//                 eiskalteschatten   <https://github.com/eiskalteschatten>
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

interface MJMLJsonObject {
    tagName: string;
    attributes: object;
    children?: MJMLJsonObject[];
    content?: string;
}

declare function mjml2html(inp: string | MJMLJsonObject, opts?: MJMLParsingOpts): MJMLParseResults;

export = mjml2html;
