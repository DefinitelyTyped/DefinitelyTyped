// Type definitions for gh-pages 3.2
// Project: https://github.com/tschaub/gh-pages
// Definitions by: Daniel Rosenwasser <https://github.com/DanielRosenwasser>
//                 Piotr Błażejewicz <https://github.com/peterblazejewicz>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
interface Git {
  cwd: string;
  cmd: string;
  output: string;
  exec: (command: string) => Promise<this | Error>;
  init: () => Promise<this | Error>;
  clean: () => Promise<this | Error>;
  reset: (remote: string, branch: string) => Promise<this | Error>;
  fetch: (remote: string) => Promise<this | Error>;
  checkout: (remote: string, branch: string) => Promise<this | Error>;
  rm: (files: string | string[]) => Promise<this | Error>;
  add: (files: string | string[]) => Promise<this | Error>;
  commit: (message: string)  => Promise<this | Error>;
  tag: (name: string)  => Promise<this | Error>;
  push: (remote: string, branch: string, force?: boolean) => Promise<this | Error>;
  getRemoteUrl: (remote: string) => Promise<this | Error>;
  deleteRef: (branch: string)=> Promise<this | Error>;
  clone: (repo: string, dir: string, branch: string, options: PublishOptions) => Promise<this | Error>;
}
export interface PublishOptions {
    beforeAdd?: null | ((git: Git) => Promise<Git | Error>);
    add?: boolean | undefined;
    branch?: string | undefined;
    dest?: string | undefined;
    dotfiles?: boolean | undefined;
    git?: string | undefined;
    /**
     * Push force new commit without parent history
     * @default true
     */
    history?: boolean | undefined;
    message?: string | undefined;
    only?: string | undefined;
    push?: boolean | undefined;
    remote?: string | undefined;
    /**
     * Removes files that match the given pattern (Ignored if used together with --add).
     * By default, gh-pages removes everything inside the target branch auto-generated directory before copying the new files from dir.
     * @default '.'
     */
    remove?: string | undefined;
    repo?: string | undefined;
    silent?: boolean | undefined;
    src?: string | string[] | undefined;
    tag?: string | undefined;
    user?: null | {
        name: string;
        email: string;
    } | undefined;
}

/**
 *  Get the cache directory.
 */
export function getCacheDir(optPath?: string): string;
export function publish(basePath: string, callback: (err: any) => void): void;
export function publish(basePath: string, config: PublishOptions, callback?: (err: any) => void): void;

export function clean(): void;

export interface Defaults {
    beforeAdd: null;
    dest: '.';
    add: false;
    git: 'git';
    depth: 1;
    dotfiles: false;
    branch: 'gh-pages';
    remote: string;
    src: '**/*';
    remove: '.';
    push: true;
    history: true;
    message: 'Updates';
    silent: false;
}

export const defaults: Readonly<Defaults>;
