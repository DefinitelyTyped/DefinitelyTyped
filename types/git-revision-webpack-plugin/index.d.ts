// Type definitions for git-revision-webpack-plugin 3.0
// Project: https://github.com/pirelenito/git-revision-webpack-plugin
// Definitions by: Anders Kaseorg <https://github.com/andersk>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.7

import { Compiler, WebpackPluginInstance } from 'webpack';

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

declare class GitRevisionPlugin implements WebpackPluginInstance {
    constructor(options?: GitRevisionPlugin.Options);
    apply(compiler: Compiler): void;
    version(): string;
    commithash(): string;
    branch(): string;
}

export = GitRevisionPlugin;
