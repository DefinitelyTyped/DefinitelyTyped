// Type definitions for @sindresorhus/slugify 0.6
// Project: https://github.com/sindresorhus/slugify
// Definitions by: BendingBender <https://github.com/BendingBender>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export = slugify;

declare function slugify(input: string, options?: slugify.Options): string;

declare namespace slugify {
    interface Options {
        separator?: string;
        lowercase?: boolean;
        decamelize?: boolean;
        customReplacements?: string[][];
    }
}
