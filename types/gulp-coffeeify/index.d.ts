/// <reference types="node" />

declare namespace coffeeify {
    interface Coffeeify {
        (option?: Option): NodeJS.ReadWriteStream;
    }

    interface Option {
        options?: {
            debug?: boolean | undefined;
            paths?: string[] | undefined;
        } | undefined;
        /**
         * [DEPRECATED]: You should use a 'paths' options of browserify.
         */
        aliases?: Aliases | undefined;
        /**
         * [DEPRECATED]
         */
        transforms?: Transforms | undefined;
    }

    type Aliases = Array<{
        cwd?: string | undefined;
        base?: string | undefined;
    }>;

    type Transforms = Array<{
        ext?: string | undefined;
        transform?(data: string): string;
    }>;
}

declare var coffeeify: coffeeify.Coffeeify;

export = coffeeify;
