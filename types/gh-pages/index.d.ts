// Type definitions for gh-pages 3.2
// Project: https://github.com/tschaub/gh-pages
// Definitions by: Daniel Rosenwasser <https://github.com/DanielRosenwasser>
//                 Piotr Błażejewicz <https://github.com/peterblazejewicz>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
export interface Git {
    exec: (command: string) => Promise<this>;
    init: () => Promise<this>;
    clean: () => Promise<this>;
    reset: (remote: string, branch: string) => Promise<this>;
    fetch: (remote: string) => Promise<this>;
    checkout: (remote: string, branch: string) => Promise<this>;
    rm: (files: string | string[]) => Promise<this>;
    add: (files: string | string[]) => Promise<this>;
    commit: (message: string) => Promise<this>;
    tag: (name: string) => Promise<this>;
    push: (remote: string, branch: string, force?: boolean) => Promise<this>;
    getRemoteUrl: (remote: string) => Promise<this>;
    deleteRef: (branch: string) => Promise<this>;
    clone: (repo: string, dir: string, branch: string, options: PublishOptions) => Promise<this>;
}
export interface PublishOptions {
    beforeAdd?: ((git: Git) => Promise<Git | undefined>) | null | undefined;
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
    user?:
        | null
        | {
              name: string;
              email: string;
          }
        | undefined;
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
