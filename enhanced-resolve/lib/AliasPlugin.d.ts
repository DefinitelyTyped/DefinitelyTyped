import Resolver = require('./Resolver');
import Resolve  = require('../');

declare class AliasPlugin {
    source: string;
    options: Resolve.ResolverFactory.AliasItem;
    target: string;
    name: string;
    alias: string;
    onlyModule: boolean;

    constructor(source: string, options: Resolve.ResolverFactory.AliasItem, target: string);

    apply(resolver: Resolver): void;
}

export = AliasPlugin;
