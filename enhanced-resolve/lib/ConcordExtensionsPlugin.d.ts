import Resolver = require('./Resolver');
declare class ConcordExtensionsPlugin {
    source: string;
    options: {};
    target: string;

    constructor(source: string, options: {}, target: string);

    apply(resolver: Resolver): void;
}
export = ConcordExtensionsPlugin;
