// Type definitions for jsdoc-to-markdown 4.0
// Project: https://github.com/jsdoc2md/jsdoc-to-markdown
// Definitions by:  Adam Zerella <https://github.com/adamzerella>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.9

interface RenderOptions {
    data: object[];
    template?: string;
    headingDepth?: number;
    exampleLang?: string;
    plugin?: string|string[];
    helper?: string|string[];
    partial?: string|string[];
    nameFormat?: string;
    noGfm?: boolean;
    seperators?: boolean;
    moduleIndexFormat?: string;
    globalIndexFormat?: string;  // @todo
    paramListFormat?: string;    // @todo
    propertyListFormat?: string; // @todo
    memberIndexFormat?: string;  // @todo
}

interface JsdocOptions {
    noCache: boolean;
    files: string|string[];
    source: string;
    configure: string;
}

declare class JsdocToMarkdown {
    render(options: RenderOptions): Promise<string>;
    renderSync(options: RenderOptions): string;
    getTemplateData(options: JsdocOptions): object[];
    getTemplateDataSync(options: JsdocOptions): object[];
    getJsdocData(options: JsdocOptions): object[];
    getJsdocDataSync(options: JsdocOptions): object[];
    clear(): Promise<void>;
    getNamepaths(options: JsdocOptions): object;
}
