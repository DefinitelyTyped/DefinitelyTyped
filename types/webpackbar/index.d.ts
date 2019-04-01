// Type definitions for webpackbar 3.1
// Project: https://github.com/nuxt/webpackbar
// Definitions by: Ryan Clark <https://github.com/rynclark>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

/// <reference types="node" />

import { Plugin } from 'webpack';

export = WebpackBar;

declare class WebpackBar extends Plugin {
	constructor(options?: WebpackBar.Options);

  state: WebpackBar.State;
}

declare namespace WebpackBar {
  interface Stats {
    count: number;
    time: [number, number];
  }

  class Profile {
    requests: any[];

    name: string;

    constructor(name: string);

    getStats(): { ext: Stats, loader: Stats };
  }

  interface State {
    isRunning: boolean;
    color: string;
    profile: Profile | null;
  }

  type Handler = (context: WebpackBar) => void;
    
  interface Reporter {
    start?: Handler;
    change?: Handler;
    update?: Handler;
    done?: Handler;
    progress?: Handler;
    allDone?: Handler;
    beforeAllDone?: Handler;
    afterAllDone?: Handler;
  }

  interface SharedState {
    [name: string]: State;
  }

  interface Options {
    /** Display name */
    name?: string;
    /** Color output of the progress bar */
    color?: string;
    /** Enable the profiler for files and loaders */
    profile?: boolean;
    /** Enable bars reporter */
    fancy?: boolean;
    /** Enable a simple log reporter (only start and end) */
    basic?: boolean;
    /** Register a custom reporter */
    reporter?: Reporter,
    /** Register a custom reporter */
    reporters?: Array<Reporter | string>,
  }
}
