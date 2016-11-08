import Resolver = require('./Resolver');
declare class ConcordExtensionsPlugin {
    source: string;
    options: Object;
    target: string;

    constructor(source: string, options: Object, target: string);

    apply(resolver: Resolver): void;
}
export = ConcordExtensionsPlugin;
