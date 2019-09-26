// Type definitions for license-checker-webpack-plugin 0.0
// Project: https://github.com/Microsoft/license-checker-webpack-plugin#readme
// Definitions by: Joel Spadin <https://github.com/ChaosinaCan>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

import { Plugin } from 'webpack';

declare class LicenseCheckerWebpackPlugin extends Plugin {
    constructor(options?: Partial<LicenseCheckerWebpackPlugin.Options>);
}

declare namespace LicenseCheckerWebpackPlugin {
    interface Dependency {
        name: string;
        version: string;
        repository: string;
        licenseName: string;
        licenseText: string;
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
         * Default: `"(Apache-2.0 OR BSD-2-Clause OR BSD-3-Clause OR MIT)"`
         */
        allow: string;

        /**
         * Array of dependencies to ignore, in the format `["<dependency name>@<version range>"]`.
         * For example, `["assignment@^2.0.0"]`.
         *
         * Default: `[]`
         */
        ignore: string[];

        /**
         * Object of dependencies to override, in the format `{"<dependency name>@<version range>": { ... }}`.
         * For example, `{"assignment@^2.0.0": { licenseName: "MIT" }}`.
         *
         * Default: `{}`
         */
        override: Record<string, Partial<Dependency>>;

        /**
         * Whether to emit errors instead of warnings.
         *
         * Default: `false`
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
         * Default: `"ThirdPartyNotices.txt"`
         */
        outputFilename: string;
    }
}

export = LicenseCheckerWebpackPlugin;
