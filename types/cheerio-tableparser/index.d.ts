import type { CheerioAPI } from "cheerio";

declare module "cheerio" {
    interface Cheerio<T> {
        parsetable(dupCols?: boolean, dupRows?: boolean, textMode?: boolean): string[][];
    }
}

declare function tableParser($: CheerioAPI): void;

export = tableParser;
