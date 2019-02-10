// Type definitions for text-clipper 1.2
// Project: https://github.com/arendjr/text-clipper
// Definitions by: Krzysztof Grzybek <https://github.com/krzysztof-grzybek>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

interface Options {
    breakWords?: boolean;
    html?: boolean;
    imageWeight?: number;
    indicator?: string;
    maxLines?: number;
}

declare function clip(string: string, maxLength: number, options?: Options): string;
export = clip;
