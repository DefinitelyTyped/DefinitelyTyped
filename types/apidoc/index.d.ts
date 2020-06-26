// Type definitions for apidoc 0.22
// Project: https://github.com/apidoc/apidoc
// Definitions by: rigwild <https://github.com/rigwild>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export interface DocOptions {
    dest?: string;
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
}

export function createDoc(options: DocOptions): boolean | { data: Record<string, any>; project: Record<string, any> };
