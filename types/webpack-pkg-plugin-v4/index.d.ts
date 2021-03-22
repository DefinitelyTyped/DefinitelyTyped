// Type definitions for webpack-pkg-plugin-v4 2.0
// Project: https://github.com/Metnew/webpack-pkg-plugin#readme
// Definitions by: danpintara <https://github.com/danpintara>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import { Plugin } from 'webpack';

export interface Configuration {
    targets?: string[];
    output: string;
}

export class WebpackPkgPlugin extends Plugin {
    constructor(config: Configuration);
}
