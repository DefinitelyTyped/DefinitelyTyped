// Type definitions for mjml 4.0
// Project: https://github.com/mjmlio/mjml, https://mjml.io
// Definitions by: aahoughton <https://github.com/aahoughton>
//                 marpstar   <https://github.com/marpstar>
//                 eiskalteschatten   <https://github.com/eiskalteschatten>
//                 emrah88    <https://github.com/emrah88>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

interface MJMLParsingOpts {
    fonts?: { [key: string]: string; };
    keepComments?: boolean;
    beautify?: boolean;
    minify?: boolean;
    validationLevel?: 'strict' | 'soft' | 'skip';
    filePath?: string;
    minifyOptions?: MJMLMinifyOptions;
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

interface MJMLMinifyOptions {
    collapseWhitespace?: boolean;
    minifyCSS?: boolean;
    removeEmptyAttributes?: boolean;
}

declare function mjml2html(inp: string | MJMLJsonObject, opts?: MJMLParsingOpts): MJMLParseResults;

export = mjml2html;
