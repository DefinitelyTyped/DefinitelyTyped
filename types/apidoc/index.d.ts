// Type definitions for apidoc 0.22
// Project: https://github.com/apidoc/apidoc
// Definitions by: rigwild <https://github.com/rigwild>
//                 hoonga <https://github.com/hoonga>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export interface ParsedFile {
    filename: string;
    extension: string;
    src: string;

    blocks: Array<{ global: any; local: any; }>;
}
export interface DocOptions {
    dest?: string | string[];
    template?: string;
    templateSingleFile?: string;
    debug?: boolean;
    single?: boolean;
    silent?: boolean;
    verbose?: boolean;
    simulate?: boolean;
    parse?: boolean;
    colorize?: boolean;
    markdown?: boolean;
    config?: string;
    apiprivate?: boolean;
    encoding?: string;
    excludeFilters?: string[];
    includeFilters?: string[];
    filters?: {
        [keys: string]: {
            postFilter: (parsedFiles: ParsedFile[], parsedFilenames: string[]) => void
        }
    };
    languages?: {
        [language: string]: {
            docBlocksRegExp: RegExp;
            inlineRegExp: RegExp;
        }
    };
    parsers?: {
        parse: (content: string, source: string, messages: string) => {
            name: string;
            title: string;
            description: string;
        };
        path: string;
        getGroup?: () => string;
        markdownFields?: string[];
        markdownRemovePTags?: string[];
    };
    workers?: {
        [keys: string]: any;
    };
    lineEnding?: string;
    copyDefinitions?: boolean;
    filterBy?: string | string[];
}

export function createDoc(options: DocOptions): boolean | { data: Record<string, any>; project: Record<string, any> };
