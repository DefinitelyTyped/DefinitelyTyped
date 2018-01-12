// Type definitions for read-pkg-up 3.0
// Project: https://github.com/sindresorhus/read-pkg-up
// Definitions by: Louis Orleans <https://github.com/dudeofawesome>
//                 Jeff Dickey <https://github.com/jdxcode>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import normalize = require('normalize-package-data');

declare namespace ReadPkgUp {
    function sync(options: Options & {normalize: false}): {[k: string]: any};
    function sync(options?: Options): normalize.Package;

    interface Options {
        /**
         * Directory to start looking for a package.json file.
         *
         * @default 'process.cwd()'
         */
        cwd?: string;
        /**
         * [Normalize](https://github.com/npm/normalize-package-data#what-normalization-currently-entails) the package data.
         *
         * @default true
         */
        normalize?: boolean;
    }

    type Package = normalize.Package;
}

declare function ReadPkgUp(options: ReadPkgUp.Options & {normalize: false}): Promise<{[k: string]: any}>;
declare function ReadPkgUp(options?: ReadPkgUp.Options): Promise<normalize.Package>;

export = ReadPkgUp;
