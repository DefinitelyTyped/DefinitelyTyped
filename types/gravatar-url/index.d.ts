// Type definitions for gravatar-url 2.0
// Project: https://github.com/sindresorhus/gravatar-url
// Definitions by: Ivan Gabriele <https://github.com/ivangabriele>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export interface Options {
    default?: string;
    rating?: 'g' | 'pg' | 'r' | 'x';
    size?: number;
}

export default function GravatarUrl(email: string, options?: Options): string;
