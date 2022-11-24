// Type definitions for pretty-quick 3.1
// Project: https://github.com/azz/pretty-quick#readme
// Definitions by: Piotr Błażejewicz <https://github.com/peterblazejewicz>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// Minimum TypeScript Version: 4.2

import { ResolveConfigOptions } from 'prettier';

declare namespace prettyQuick {
    interface Options {
        config?: ResolveConfigOptions | undefined;
        since?: string | undefined;
        /** @default false */
        staged?: boolean | undefined;
        pattern?: string | string[] | undefined;
        /** @default true */
        restage?: boolean | undefined;
        /**
         * @default 'master' | 'default'
         */
        branch?: string | undefined;
        bail?: boolean | undefined;
        check?: boolean | undefined;
        ignorePath?: string | undefined;
        verbose?: boolean | undefined;
        onFoundSinceRevision?: ((name: string, revision: string) => void) | undefined;
        onFoundChangedFiles?: ((changedFiles: string[]) => void) | undefined;
        onPartiallyStagedFile?: ((file: string) => void) | undefined;
        onExamineFile?: ((file: string) => void) | undefined;
        onCheckFile?: ((file: string, isFormatted: boolean) => void) | undefined;
        onWriteFile?: ((file: string) => void) | undefined;
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
