// Type definitions for generate-changelog 1.8
// Project: https://github.com/lob/generate-changelog#readme
// Definitions by: Florian Keller <https://github.com/ffflorian>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export interface Options {
    /** allow unkown commit types */
    allowUnknown?: boolean;
    /** exclude listed commit types (e.g. `['chore', 'style', 'refactor']`) */
    exclude?: string[];
    /** whether it should be a patch changelog */
    patch?: boolean;
    /** whether it should be a minor changelog */
    minor?: boolean;
    /** whether it should be a major changelog */
    major?: boolean;
    /** repo URL that will be used when linking commits */
    repoUrl?: string;
    /** generate from specific tag or range (e.g. `v1.2.3` or `v1.2.3..v1.2.4`)' */
    tag?: string;
}

export function generate(options: Options): Promise<string>;
