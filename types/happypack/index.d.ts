// Type definitions for happypack 5.0
// Project: https://github.com/amireh/happypack
// Definitions by: Akash Vishwakarma <https://github.com/akashishu777>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.7

import { Plugin } from 'webpack';

export = happypack;

declare namespace happypack {
    interface PluginOptions {
        id?: string | undefined;
        threads?: number | undefined;
        loaders: any;
        threadPool: ThreadPool;
    }

    interface ThreadPoolConfig {
        size: number;
        id?: string | undefined;
        verbose?: boolean | undefined;
        debug?: boolean | undefined;
        bufferedMessaging?: boolean | undefined;
    }

    interface ThreadPool {

    }

    declare function HappyThreadPool(config: ThreadPoolConfig): ThreadPool;
}

declare class happypack extends Plugin {
    constructor(options: happypack.PluginOptions);
    static ThreadPool = happypack.HappyThreadPool
}
