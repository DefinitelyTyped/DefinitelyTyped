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
