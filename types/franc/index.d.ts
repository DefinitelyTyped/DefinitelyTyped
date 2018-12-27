// Type definitions for franc 4.0
// Project: https://github.com/wooorm/franc/
// Definitions by: William LeGate <https://github.com/wlegate>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

// ISO 639-3 code (see: https://iso639-3.sil.org/code_tables/639/data)
type ISO6393 = string;

// Range [0, 1]
type Confidence = number;

interface Options {
    minLength?: number;
    whitelist?: ISO6393[];
    blacklist?: ISO6393[];
}

declare function detect(text: string, options?: Options): ISO6393;

declare namespace detect {
    function all(text: string, options?: Options): [ISO6393, number];
}

export = detect;
