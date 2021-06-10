// Type definitions for gh-pages 3.0
// Project: https://github.com/tschaub/gh-pages
// Definitions by: Daniel Rosenwasser <https://github.com/DanielRosenwasser>
//                 Piotr Błażejewicz <https://github.com/peterblazejewicz>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export interface PublishOptions {
    add?: boolean;
    branch?: string;
    dest?: string;
    dotfiles?: boolean;
    git?: string;
    /**
     * Push force new commit without parent history
     * @default true
     */
    history?: boolean;
    message?: string;
    only?: string;
    push?: boolean;
    remote?: string;
    /**
     * Removes files that match the given pattern (Ignored if used together with --add).
     * By default, gh-pages removes everything inside the target branch auto-generated directory before copying the new files from dir.
     * @default '.'
     */
    remove?: string;
    repo?: string;
    silent?: boolean;
    src?: string | string[];
    tag?: string;
    user?: null | {
        name: string;
        email: string;
    };
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
