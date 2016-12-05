// Type definitions for emarkup v3.3.2
// Project: http://github.com/bterlson/ecmarkup
// Definitions by: Ron Buckton <https://github.com/rbuckton>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export interface Spec {
    spec: this;
    location: string;
    opts: Options;
    rootPath: string;
    rootDir: string;
    namespace: string;
    toHTML(): string;
    exportBiblio(): any;
}

export interface Options {
    status?: "proposal" | "draft" | "standard";
    version?: string;
    title?: string;
    shortname?: string;
    stage?: string | null;
    copyright?: boolean;
    date?: Date;
    location?: string;
    contributors?: string;
    toc?: boolean;
    oldToc?: boolean;
    verbose?: boolean;
}

export function build(path: string, fetch: (path: string) => PromiseLike<string>, opts?: Options): PromiseLike<Spec | undefined>;