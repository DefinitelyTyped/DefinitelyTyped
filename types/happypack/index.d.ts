// Type definitions for happypack 5.0
// Project: https://github.com/amireh/happypack
// Definitions by: Akash Vishwakarma <https://github.com/akashishu777>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.7

import { Plugin } from 'webpack';

export = happypack;

declare namespace happypack {
    interface PluginOptions {
        id?: string;
        threads?: number;
        loaders: any;
    }
}

declare class happypack extends Plugin {
    constructor(options: happypack.PluginOptions);
}
