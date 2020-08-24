// Type definitions for linkify-markdown 1.0
// Project: https://github.com/nitin42/linkify-markdown#readme
// Definitions by: Jamie Magee <https://github.com/JamieMagee>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export function linkify(source: string, options?: LinkifyOptions): string;
export interface LinkifyOptions {
    strong?: boolean;
    repository?: string;
}
