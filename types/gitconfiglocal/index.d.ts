// Type definitions for gitconfiglocal 2.0
// Project: https://github.com/soldair/node-gitconfiglocal#readme
// Definitions by: Florian Keller <https://github.com/ffflorian>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.2

declare namespace gitconfig {
    interface GitConfig {
        [key: string]: any;
    }

    type callback = (error: Error | false, config: GitConfig) => void;

    interface Options {
        gitDir?: string | undefined;
    }
}

declare function gitconfig(dir: string, options: gitconfig.Options, cb: gitconfig.callback): void;
declare function gitconfig(dir: string, cb: gitconfig.callback): void;

export = gitconfig;
