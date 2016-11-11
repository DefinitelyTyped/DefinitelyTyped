import Resolver = require('./Resolver');
declare class ConcordMainPlugin {
    source: string;
    options: {};
    target: string;

    constructor(source: string, options: {}, target: string);

    apply(resolver: Resolver): void;
}
export = ConcordMainPlugin;
