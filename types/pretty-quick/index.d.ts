// Type definitions for pretty-quick 2.0
// Project: https://github.com/azz/pretty-quick#readme
// Definitions by: Piotr Błażejewicz <https://github.com/peterblazejewicz>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import { ResolveConfigOptions } from 'prettier';

declare namespace prettyQuick {
    interface Options {
        config?: ResolveConfigOptions;
        since?: string;
        /** @default false */
        staged?: boolean;
        pattern?: string | string[];
        /** @default true */
        restage?: boolean;
        /**
         * @default 'master' | 'default'
         */
        branch?: string;
        bail?: boolean;
        check?: boolean;
        verbose?: boolean;
        onFoundSinceRevision?: (name: string, revision: string) => void;
        onFoundChangedFiles?: (changedFiles: string[]) => void;
        onPartiallyStagedFile?: (file: string) => void;
        onExamineFile?: (file: string) => void;
        onCheckFile?: (file: string, isFormatted: boolean) => void;
        onWriteFile?: (file: string) => void;
        // ...args support
        [key: string]: any;
    }

    interface Results {
        readonly success: boolean;
        readonly errors: string[];
    }
}

/**
 * Runs Prettier on your changed files.
 * Supported source control managers:
 * * Git
 * * Mercurial
 */
declare function prettyQuick(currentDirectory: string, options?: prettyQuick.Options): prettyQuick.Results;

export = prettyQuick;
