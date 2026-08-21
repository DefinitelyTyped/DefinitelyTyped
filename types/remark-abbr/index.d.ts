import { Plugin } from "unified";

declare namespace remarkAbbr {
    type Abbr = Plugin<[Options?]>;

    interface Options {
        expandFirst?: boolean | undefined;
    }
}

declare const remarkAbbr: remarkAbbr.Abbr;
export = remarkAbbr;
