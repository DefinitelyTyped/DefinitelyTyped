// Type definitions for deglob v 2.1
// Project: https://github.com/standard/deglob, https://github.com/flet/deglob
// Definitions by: Saad Quadri <https://github.com/saadq>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

type Callback = (err: Error | null, files: string[]) => void;

declare function deglob(patterns: string[], cb: Callback): void;
declare function deglob(patterns: string[], opts: deglob.Options, cb: Callback): void;

declare namespace deglob {
  interface Options {
    useGitIgnore?: boolean;
    usePackageJson?: boolean;
    configKey?: string;
    gitIgnoreFile?: string;
    ignore?: string[];
    cwd?: string;
  }
}

export = deglob;
