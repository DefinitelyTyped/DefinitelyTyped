// Type definitions for url-slugify 1.0
// Project: https://github.com/s-barrah/url-slugify#readme
// Definitions by: tpluscode <https://github.com/tpluscode>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

type Separator = '-' | '_' | '~' | "''";

declare class URLSlugify {
    slugify(title: string, separator?: Separator): string;
}

export = URLSlugify;
