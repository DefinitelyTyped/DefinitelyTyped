/// <reference types="node" />

import type * as fs from "fs";
import type { promisify } from "util";

export type Properties = Record<string, string>;

export interface EditorOptions {
    separator?: string;
    path?: string;
    callback?: (err: Error | null, editor: Editor) => void;
}

export function parse(text: string): Properties;
export function read(path: fs.PathLike): Properties;
export function read(path: fs.PathLike, callback: (err: Error | null, data: Properties) => void): void;

export const createEditor: {
    (options?: EditorOptions): Editor;
    (path: fs.PathLike, options?: EditorOptions): Editor;
    (path: fs.PathLike, options?: EditorOptions, callback?: (err: Error | null, editor: Editor) => void): void;
    [promisify.custom]: (path: fs.PathLike, options?: EditorOptions) => Promise<Editor>;
};

export interface Editor {
    get(key: string): string | undefined;
    set(key: string, value?: string | null, comment?: string): void;
    unset(key: string): void;

    save(callback: (err: Error | null) => void, path?: fs.PathLike): void;
    save(path?: fs.PathLike, callback?: (err: Error | null) => void): void;

    addHeadComment(comment: string): void;

    toString(): string;
    valueOf(): string;
}
