// Type definitions for webpack-pkg-plugin-v4 2.0
// Project: https://github.com/Metnew/webpack-pkg-plugin#readme
// Definitions by: DefinitelyTyped <https://github.com/DefinitelyTyped>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.7

import { Plugin } from 'webpack';

export interface Configuration {
    targets?: string[] | undefined;
    output: string;
}

export class WebpackPkgPlugin extends Plugin {
    constructor(config: Configuration);
}
