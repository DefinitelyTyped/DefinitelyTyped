// Type definitions for @wordpress/library-export-default-webpack-plugin 1.3
// Project: https://github.com/WordPress/gutenberg/tree/master/packages/library-export-default-webpack-plugin/README.md
// Definitions by: Derek Sifford <https://github.com/dsifford>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.5

import { Plugin } from 'webpack';

declare class LibraryExportDefaultPlugin extends Plugin {
    constructor(entryPointNames: string[]);
}

export = LibraryExportDefaultPlugin;
