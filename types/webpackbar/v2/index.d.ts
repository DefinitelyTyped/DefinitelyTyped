// Type definitions for webpackbar 2.6
// Project: https://github.com/nuxt/webpackbar
// Definitions by: DefinitelyTyped <https://github.com/DefinitelyTyped>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.7

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

  interface SharedState {
    [name: string]: State;
  }

  interface Options {
    /** Display name */
    name?: string | undefined;
    /** Color output of the progress bar */
    color?: string | undefined;
    /** Enable the profiler for files and loaders */
    profile?: boolean | undefined;
    /** Stream to write to */
    stream?: NodeJS.WriteStream | undefined;
    /** Minimal output */
    minimal?: boolean | undefined;
    /** Show compiled in time */
    compiledIn?: boolean | undefined;
    /** Function called when all builds are finished */
    done?: ((sharedState: SharedState, ctx: WebpackBar) => void) | undefined;
  }
}
