// Type definitions for happypack
// Project: https://github.com/amireh/happypack
// Definitions by: Akash Vishwakarma <https://github.com/akashishu777>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

import { Plugin } from 'webpack';

declare class HappyPack extends Plugin {

    constructor(options?: HappyPack.PluginOptions);
}

declare namespace HappyPack {
    interface PluginOptions {
        id?: string;
        threads?: number;
        loaders?: any;
    }
}

export = HappyPack;
