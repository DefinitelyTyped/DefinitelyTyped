// Type definitions for read-pkg 4.0
// Project: https://github.com/sindresorhus/read-pkg
// Definitions by: Jeff Dickey <https://github.com/jdxcode>, Richard Smith <https://github.com/arichardsmith>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import normalize = require('normalize-package-data');

declare namespace ReadPkg {
    function sync(options: Options & {normalize: false}): {[k: string]: any};
    function sync(options?: Options): normalize.Package;

    interface Options {
        /**
         * [Normalize](https://github.com/npm/normalize-package-data#what-normalization-currently-entails) the package data.
         *
         * @default true
         */
        normalize?: boolean;
        /**
         * Current working directory
         *
         * @default process.cwd()
         */
        cwd?: string;
    }

    type Package = normalize.Package;
}

declare function ReadPkg(options: ReadPkg.Options & {normalize: false}): Promise<{[k: string]: any}>;
declare function ReadPkg(options?: ReadPkg.Options): Promise<normalize.Package>;

export = ReadPkg;
