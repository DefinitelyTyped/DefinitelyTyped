// Type definitions for degit 2.8
// Project: https://github.com/Rich-Harris/degit#readme
// Definitions by: Piotr Błażejewicz <https://github.com/peterblazejewicz>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import { EventEmitter } from 'events';

declare class Degit extends EventEmitter {
    constructor(src: string, opts?: degit.Options);

    /**
     * @async
     */
    clone(dest: string): Promise<void>;
    /**
     * @async
     */
    remove(dir: string, dest: string, action: degit.RemoveAction): Promise<void>;
    on(event: 'info' | 'warn', callback: (info: degit.Info) => void): this;
}

declare function degit(src: string, opts?: degit.Options): Degit;
declare namespace degit {
    interface Options {
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
    type ValidModes = 'tar' | 'git';

    type InfoCode =
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

    type DegitErrorCode =
        | 'DEST_NOT_EMPTY'
        | 'MISSING_REF'
        | 'COULD_NOT_DOWNLOAD'
        | 'BAD_SRC'
        | 'UNSUPPORTED_HOST'
        | 'BAD_REF'
        | 'COULD_NOT_FETCH';

    interface Info {
        readonly code: string;
        readonly message: string;
        readonly repo: Degit;
        readonly dest: string;
    }

    interface Action {
        action: string;
        cache?: boolean;
        verbose?: boolean;
    }

    interface DegitAction extends Action {
        action: 'clone';
        src: string;
    }

    interface RemoveAction extends Action {
        action: 'remove';
        files: string[];
    }
}

export = degit;
