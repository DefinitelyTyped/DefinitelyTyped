// Type definitions for folder-hash 3.3
// Project: https://github.com/marc136/node-folder-hash#readme
// Definitions by: Kevin Brown <https://github.com/thekevinbrown>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export type PathGlobFunction = () => string[];

export interface FolderAndFileOptions {
    exclude?: string[] | PathGlobFunction;
    include?: string[] | PathGlobFunction;
    matchBasename?: boolean;
    matchPath?: boolean;
    ignoreBasename?: boolean;
    ignoreRootName?: boolean;
}
export interface HashElementOptions {
    // See crypto.getHashes() for options.
    // Defaults to 'sha1'.
    algo?: string;
    // Defaults to 'base64'
    encoding?: 'base64' | 'hex' | 'binary';
    folders?: FolderAndFileOptions;
    files?: FolderAndFileOptions;
}

export interface HashElementNode {
    name: string;
    hash: string;
    children: HashElementNode[];
}
export function hashElement(path: string, options?: HashElementOptions): Promise<HashElementNode>;
export function hashElement(path: string, dir?: string, options?: HashElementOptions): Promise<HashElementNode>;
export function hashElement(
    path: string,
    dir?: string,
    options?: HashElementOptions,
    callback?: (error?: Error, result?: HashElementNode) => any,
): void;
