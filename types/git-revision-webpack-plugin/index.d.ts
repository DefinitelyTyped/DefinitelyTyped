// Type definitions for git-revision-webpack-plugin 3.0
// Project: https://github.com/pirelenito/git-revision-webpack-plugin
// Definitions by: Anders Kaseorg <https://github.com/andersk>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

import { Plugin } from 'webpack';

declare namespace GitRevisionPlugin {
    interface Options {
        lightweightTags?: boolean;
        branch?: boolean;
        commithashCommand?: string;
        versionCommand?: string;
        branchCommand?: string;
        gitWorkTree?: string;
    }
}

declare class GitRevisionPlugin extends Plugin {
    constructor(options?: GitRevisionPlugin.Options);
    version(): string;
    commithash(): string;
    branch(): string;
}

export = GitRevisionPlugin;
