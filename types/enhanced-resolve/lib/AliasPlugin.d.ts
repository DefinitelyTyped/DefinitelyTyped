import Resolver = require('./Resolver');
import Resolve  = require('enhanced-resolve');

declare class AliasPlugin {
    alias: string;
    name: string;
    onlyModule: boolean;
    options: Resolve.ResolverFactory.AliasItem;
    source: string;
    target: string;

    constructor(source: string, options: Resolve.ResolverFactory.AliasItem, target: string);

    apply(resolver: Resolver): void;
}

export = AliasPlugin;
