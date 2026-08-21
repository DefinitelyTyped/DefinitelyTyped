import Pumpify = require("pumpify");

declare namespace csv2json {
    interface Options {
        dynamicTyping?: boolean | undefined;
        separator?: string | undefined;
    }
}

declare function csv2json(options?: csv2json.Options): Pumpify;

export = csv2json;
