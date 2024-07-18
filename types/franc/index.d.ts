// ISO 639-3 code (see: https://iso639-3.sil.org/code_tables/639/data)
type ISO6393 = string;

// Range [0, 1]
type Confidence = number;

interface Options {
    minLength?: number | undefined;
    whitelist?: ISO6393[] | undefined;
    blacklist?: ISO6393[] | undefined;
    only?: ISO6393[] | undefined;
}

declare function detect(text: string, options?: Options): ISO6393;

declare namespace detect {
    function all(text: string, options?: Options): Array<[ISO6393, Confidence]>;
}

export = detect;
