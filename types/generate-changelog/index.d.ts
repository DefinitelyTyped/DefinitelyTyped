export interface Options {
    /** allow unkown commit types */
    allowUnknown?: boolean | undefined;
    /** exclude listed commit types (e.g. `['chore', 'style', 'refactor']`) */
    exclude?: string[] | undefined;
    /** whether it should be a patch changelog */
    patch?: boolean | undefined;
    /** whether it should be a minor changelog */
    minor?: boolean | undefined;
    /** whether it should be a major changelog */
    major?: boolean | undefined;
    /** repo URL that will be used when linking commits */
    repoUrl?: string | undefined;
    /** generate from specific tag or range (e.g. `v1.2.3` or `v1.2.3..v1.2.4`)' */
    tag?: string | undefined;
}

export function generate(options: Options): Promise<string>;
