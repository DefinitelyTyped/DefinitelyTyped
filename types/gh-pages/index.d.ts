// Type definitions for gh-pages 3.0
// Project: https://github.com/tschaub/gh-pages
// Definitions by: Daniel Rosenwasser <https://github.com/DanielRosenwasser>
//                 Piotr Błażejewicz <https://github.com/peterblazejewicz>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export interface PublishOptions {
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

export function publish(basePath: string, callback: (err: any) => void): void;
export function publish(basePath: string, config: PublishOptions, callback?: (err: any) => void): void;

export function clean(): void;

export interface Defaults {
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
