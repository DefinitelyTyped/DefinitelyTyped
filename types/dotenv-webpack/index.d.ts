/// <reference types="node" />
import { Compiler } from "webpack";

/**
 * A secure webpack plugin that supports dotenv and other environment variables
 * and only exposes what you choose and use.
 */
declare class DotenvWebpackPlugin {
    constructor(options?: DotenvWebpackPlugin.Options);
    apply(compiler: Compiler): void;
}

declare namespace DotenvWebpackPlugin {
    interface Options {
        /**
         * The path to your environment variables.
         * @default './.env'.
         */
        path?: string | undefined;

        /**
         * If `false` ignore safe-mode, if `true` load `'./.env.example'`, if a `string` load that file as the sample.
         * @default false
         */
        safe?: boolean | string | undefined;

        /**
         * Whether to allow empty strings in safe mode.
         * If false, will throw an error if any env variables are empty (but only if safe mode is enabled).
         * @default false
         */
        allowEmptyValues?: boolean | undefined;

        /**
         * Set to `true` if you would rather load all system variables as well (useful for CI purposes).
         * @default false
         */
        systemvars?: boolean | undefined;

        /**
         * If `true`, all warnings will be surpressed.
         * @default false
         */
        silent?: boolean | undefined;

        /**
         * Allows your variables to be "expanded" for reusability within your .env file.
         * @default false
         */
        expand?: boolean | undefined;

        /**
         * Adds support for dotenv-defaults. If set to `true`, uses `./.env.defaults`. If a `string`, uses that location for a defaults file.
         * Read more at {@link https://www.npmjs.com/package/dotenv-defaults}.
         * @default false
         */
        defaults?: boolean | string | undefined;

        /**
         * Override the automatic check whether to stub `process.env`.
         * @default false
         */
        ignoreStub?: boolean | undefined;
    }
}

export = DotenvWebpackPlugin;
