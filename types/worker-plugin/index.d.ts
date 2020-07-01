// Type definitions for worker-plugin 3.2
// Project: https://github.com/GoogleChromeLabs/worker-plugin
// Definitions by: Artur Androsovych <https://github.com/arturovt>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

import * as webpack from 'webpack';

export = WorkerPlugin;

declare class WorkerPlugin extends webpack.Plugin {
  constructor(options?: WorkerPlugin.Options);
}

declare namespace WorkerPlugin {
  interface Options {
    globalObject?: boolean | string;
    plugins?: Array<string | webpack.Plugin>;
  }
}
