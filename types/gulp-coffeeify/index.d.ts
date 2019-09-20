// Type definitions for gulp-coffeeify
// Project: https://github.com/nariyu/gulp-coffeeify
// Definitions by: Qubo <https://github.com/tkQubo>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />


declare namespace coffeeify {
    interface Coffeeify {
        (option?: Option): NodeJS.ReadWriteStream;
    }

    interface Option {
        options?: {
            debug?: boolean;
            paths?: string[];
        },
        /**
         * [DEPRECATED]: You should use a 'paths' options of browserify.
         */
        aliases?: Aliases;
        /**
         * [DEPRECATED]
         */
        transforms?: Transforms;
    }

    type Aliases = Array<{
        cwd?: string;
        base?: string;
    }>;

    type Transforms = Array<{
        ext?: string;
        transform?(data: string): string;
    }>;
}

declare var coffeeify: coffeeify.Coffeeify;

export = coffeeify;
