import Browsers = require('./browsers');

interface Prefixes {
    remove: { [k: string]: any };

    unprefixed(value: string): string;
}

declare class PrefixesImpl implements Prefixes {
    constructor(data: string[], browsers: Browsers, options?: any);

    remove: { [p: string]: any };

    unprefixed(value: string): string;
}

export = PrefixesImpl;
