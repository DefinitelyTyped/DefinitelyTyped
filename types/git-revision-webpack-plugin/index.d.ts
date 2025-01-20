import { Compiler, WebpackPluginInstance } from "webpack";

declare namespace GitRevisionPlugin {
    interface Options {
        lightweightTags?: boolean | undefined;
        branch?: boolean | undefined;
        commithashCommand?: string | undefined;
        versionCommand?: string | undefined;
        branchCommand?: string | undefined;
        gitWorkTree?: string | undefined;
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
