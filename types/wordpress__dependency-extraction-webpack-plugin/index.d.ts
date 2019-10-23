// Type definitions for @wordpress/dependency-extraction-webpack-plugin 1.0
// Project: https://github.com/WordPress/gutenberg/tree/master/packages/dependency-extraction-webpack-plugin/README.md
// Definitions by: Derek Sifford <https://github.com/dsifford>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.5

import { Plugin } from "webpack";

interface Options {
    useDefaults?: boolean;
    injectPolyfill?: boolean;
    requestToExternal?(request: string): string | string[] | void;
    requestToHandle?(request: string): string | void;
}

declare class DependencyExtractionWebpackPlugin extends Plugin {
    constructor(options?: Options);
}

export = DependencyExtractionWebpackPlugin;
