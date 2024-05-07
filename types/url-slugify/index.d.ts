type Separator = "-" | "_" | "~" | "''";

declare class URLSlugify {
    slugify(title: string, separator?: Separator): string;
}

export = URLSlugify;
