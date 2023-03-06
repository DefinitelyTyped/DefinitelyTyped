// Type definitions for license-checker-webpack-plugin 0.2
// Project: https://github.com/Microsoft/license-checker-webpack-plugin#readme
// Definitions by: DefinitelyTyped <https://github.com/DefinitelyTyped>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.7

import { Compiler, WebpackPluginInstance } from 'webpack';

declare class LicenseCheckerWebpackPlugin implements WebpackPluginInstance {
    constructor(options?: Partial<LicenseCheckerWebpackPlugin.Options>);
    apply(compiler: Compiler): void;
}

declare namespace LicenseCheckerWebpackPlugin {
    interface Dependency {
        name: string;
        version: string;
        repository?: string;
        author?: string;
        licenseName: string;
        licenseText?: string;
    }

    interface OutputWriterArgs {
        dependencies: Dependency[];
    }

    type OutputWriter = (args: OutputWriterArgs) => string;

    interface Options {
        /**
         * Regular expression that matches the file paths of dependencies to check.
         */
        filter: RegExp;

        /**
         * SPDX expression with allowed licenses.
         *
         * @default "(Apache-2.0 OR BSD-2-Clause OR BSD-3-Clause OR MIT)"
         */
        allow: string;

        /**
         * Array of dependencies to ignore, in the format `["<dependency name>@<version range>"]`.
         * For example, `["assignment@^2.0.0"]`.
         *
         * @default []
         */
        ignore: string[];

        /**
         * Object of dependencies to override, in the format `{"<dependency name>@<version range>": { ... }}`.
         * For example, `{"assignment@^2.0.0": { licenseName: "MIT" }}`.
         *
         * @default {}
         */
        override: Record<string, Partial<Dependency>>;

        /**
         * Whether to emit errors instead of warnings.
         *
         * @default false
         */
        emitError: boolean;

        /**
         * Path to a `.ejs` template, or function that will generate the contents
         * of the third-party notices file.
         */
        outputWriter: string | OutputWriter;

        /**
         * Name of the third-party notices file with all licensing information.
         *
         * @default "ThirdPartyNotices.txt"
         */
        outputFilename: string;
    }
}

export = LicenseCheckerWebpackPlugin;
