// Type definitions for globule v1.1.0
// Project: https://github.com/cowboy/node-globule
// Definitions by: durad <https://github.com/durad>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

interface IOptions {
    debug?: boolean;
    nobrace?: boolean;
    noglobstar?: boolean;
    dot?: boolean;
    noext?: boolean;
    nocase?: boolean;
    nonull?: boolean;
    matchBase?: boolean;
    nocomment?: boolean;
    nonegate?: boolean;
    flipNegate?: boolean;
}

interface GlobuleOptions {
    src?: string;
    srcBase?: string;
    destBase?: string;
    ext?: string;
    extDot?: 'first' | 'last';
    flatten: boolean;
    rename: (p: string) => string;
}

interface GlobuleStatic {
    match(patterns: string[], filepaths: string[], options: IOptions): string[];
    isMatch(patterns: string[], filepaths: string[], options: IOptions): boolean;
    find(options: GlobuleOptions): string[];
    find(path: string | string[], options?: GlobuleOptions): string[];
    find(path: string, path2: string, options?: GlobuleOptions): string[];
    find(path: string, path2: string, path3: string, options?: GlobuleOptions): string[];
    find(path: string, path2: string, path3: string, path4: string, options?: GlobuleOptions): string[];
    find(path: string, path2: string, path3: string, path4: string, path5: string, options?: GlobuleOptions): string[];
}

declare var globule: GlobuleStatic;

declare module 'globule' {
    export = globule;
}
