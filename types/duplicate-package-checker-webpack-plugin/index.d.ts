// Type definitions for duplicate-package-checker-webpack-plugin 1.2
// Project: https://github.com/darrenscerri/duplicate-package-checker-webpack-plugin#readme
// Definitions by: Matt Traynham <https://github.com/mtraynham>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

import { Plugin } from 'webpack';

export = DuplicatePackageCheckerWebpackPlugin;

declare class DuplicatePackageCheckerWebpackPlugin extends Plugin {
    constructor(options?: DuplicatePackageCheckerWebpackPlugin.Options);
}

declare namespace DuplicatePackageCheckerWebpackPlugin {
    interface Options {
        // Also show module that is requiring each duplicate package
        verbose?: boolean;
        // Emit errors instead of warnings
        emitError?: boolean;
    }
}
