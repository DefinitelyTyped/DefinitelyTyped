// Type definitions for folder-hash 4.0
// Project: https://github.com/marc136/node-folder-hash#readme
// Definitions by: Kevin Brown <https://github.com/thekevinbrown>
//                 Piotr Błażejewicz <https://github.com/peterblazejewicz>
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

export type SymbolicLinkOptions = Omit<FolderAndFileOptions, "exclude" | "include"> & {
    include?: boolean;
    ignoreTargetPath?: boolean;
    ignoreTargetContent?: boolean;
    ignoreTargetContentAfterError?: boolean;
};
export interface HashElementOptions {
    // See crypto.getHashes() for options.
    // Defaults to 'sha1'.
    algo?: string;
    // Defaults to 'base64'
    encoding?: "base64" | "hex" | "binary";
    files?: FolderAndFileOptions;
    folders?: FolderAndFileOptions;
    symbolicLinks?: SymbolicLinkOptions;
}

export interface HashElementNode {
    name: string;
    hash: string;
    children: HashElementNode[];
}

/**
 * @param name element name or an element's path
 * @param options Options object
 */
export function hashElement(name: string, options?: HashElementOptions): Promise<HashElementNode>;
/**
 * @param name element name or an element's path
 * @param dir directory that contains the element (generated from name if omitted)
 * @param options Options object
 */
export function hashElement(name: string, dir?: string, options?: HashElementOptions): Promise<HashElementNode>;
/**
 * @param name element name or an element's path
 * @param dir directory that contains the element (generated from name if omitted)
 * @param options Options object
 * @param callback Error-first callback function
 */
export function hashElement(
    name: string,
    dir?: string,
    options?: HashElementOptions,
    callback?: (error?: Error, result?: HashElementNode) => any,
): void;

export const defaults: HashElementOptions;
