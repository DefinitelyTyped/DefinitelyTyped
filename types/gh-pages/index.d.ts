// Type definitions for gh-pages 2.0
// Project: https://github.com/tschaub/gh-pages
// Definitions by: Daniel Rosenwasser <https://github.com/DanielRosenwasser>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export interface PublishOptions {
    add?: boolean;
    branch?: string;
    dest?: string;
    dotfiles?: boolean;
    git?: string;
    message?: string;
    only?: string;
    push?: boolean;
    remote?: string;
    repo?: string;
    silent?: boolean;
    src?: string | string[];
    tag?: string;
    user?: null | {
        name: string;
        email: string
    };
}

export function publish(
    basePath: string,
    callback: (err: any) => void): void;
export function publish(
    basePath: string,
    config: PublishOptions,
    callback?: (err: any) => void): void;
