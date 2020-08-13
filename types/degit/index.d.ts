// Type definitions for degit 2.8
// Project: https://github.com/Rich-Harris/degit#readme
// Definitions by: Piotr Błażejewicz <https://github.com/peterblazejewicz>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import { EventEmitter } from 'events';

export default function degit(src: string, opts: Options): Degit;

export class Degit extends EventEmitter {
    constructor(src: string, opts?: Options);

    /**
     * @async
     */
    clone(dest: string): Promise<void>;
    /**
     * @async
     */
    remove(dir: string, dest: string, action: RemoveAction): Promise<void>;
    on(event: 'info' | 'warn', callback: (info: Info) => void): this;
}

export interface Options {
    /**
     * @default false
     */
    cache?: boolean;
    /**
     * @default false
     */
    force?: boolean;
    /**
     * @default undefined
     */
    mode?: ValidModes;
    /**
     * @default false
     */
    verbose?: boolean;
}

// varia
export type ValidModes = 'tar' | 'git';

export type InfoCode =
    | 'SUCCESS'
    | 'FILE_DOES_NOT_EXIST'
    | 'REMOVED'
    | 'DEST_NOT_EMPTY'
    | 'DEST_IS_EMPTY'
    | 'USING_CACHE'
    | 'FOUND_MATCH'
    | 'FILE_EXISTS'
    | 'PROXY'
    | 'DOWNLOADING'
    | 'EXTRACTING';

export type DegitErrorCode =
    | 'DEST_NOT_EMPTY'
    | 'MISSING_REF'
    | 'COULD_NOT_DOWNLOAD'
    | 'BAD_SRC'
    | 'UNSUPPORTED_HOST'
    | 'BAD_REF'
    | 'COULD_NOT_FETCH';

export interface Info {
    readonly code: string;
    readonly message: string;
    readonly repo: Degit;
    readonly dest: string;
}

export interface Action {
    action: string;
    cache?: boolean;
    verbose?: boolean;
}

export interface DegitAction extends Action {
    action: 'clone';
    src: string;
}

export interface RemoveAction extends Action {
    action: 'remove';
    files: string[];
}
