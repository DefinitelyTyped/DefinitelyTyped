import { Converter } from ".";

declare class Dictionary {
    constructor(prefix?: string);
    define(term: string, pattern: string | RegExp, converters?: Converter | Converter[]): this;
    merge(other: Dictionary): Dictionary;
}

export = Dictionary;
