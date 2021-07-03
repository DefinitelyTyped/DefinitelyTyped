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
    excludeFilters?: string[];
    includeFilters?: string[];
    src?: string;
    dest?: string;
    template?: string;
    templateSingleFile?: string;
    config?: string;
    apiprivate?: boolean;
    verbose?: boolean;
    single?: boolean;
    debug?: boolean;
    parse?: boolean;
    colorize?: boolean;
    filters?: Record<string, string> | {
        [keys: string]: {
            postFilter: (parsedFiles: ParsedFile[], parsedFilenames: string[]) => void
        }
    };
    languages?: Record<string, string> | {
        [language: string]: {
            docBlocksRegExp: RegExp;
            inlineRegExp: RegExp;
        }
    };
    parsers?: Record<string, string> | {
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
    workers?: Record<string, string> | {
        [keys: string]: any;
    };
    silent?: boolean;
    simulate?: boolean;
    markdown?: boolean;
    lineEnding?: string;
    encoding?: string;
    copyDefinitions?: boolean;
    filterBy?: string | string[];
}

export function createDoc(options: DocOptions): boolean | { data: Record<string, any>; project: Record<string, any> };
