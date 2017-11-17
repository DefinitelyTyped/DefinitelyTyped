// Type definitions for read-pkg-up 2.0
// Project: https://github.com/sindresorhus/read-pkg-up
// Definitions by: Louis Orleans <https://github.com/dudeofawesome>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare namespace ReadPkgUp {
    function sync(options?: Options): Package;

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

    interface Package {
        [key: string]: any;
    }
}

declare function ReadPkgUp(options?: ReadPkgUp.Options): Promise<ReadPkgUp.Package>;

export = ReadPkgUp;
