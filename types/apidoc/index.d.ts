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
    filters?: Record<string, string>;
    languages?: Record<string, string>;
    parsers?: Record<string, string>;
    workers?: Record<string, string>;
    silent?: boolean;
    simulate?: boolean;
    markdown?: boolean;
    lineEnding?: string;
    encoding?: string;
    copyDefinitions?: boolean;
    filterBy?: string | string[];
}

export function createDoc(options: DocOptions): boolean | { data: Record<string, any>; project: Record<string, any> };
