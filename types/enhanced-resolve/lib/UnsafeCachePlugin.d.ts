import Resolver = require('./Resolver');
import { ResolverRequest } from './common-types';
import { Dictionary } from './concord';

declare class UnsafeCachePlugin {
    source: string;
    filterPredicate: (request: ResolverRequest) => boolean;
    cache: Dictionary<any>;
    target: string;

    constructor(
        source: string,
        filterPredicate: (request: ResolverRequest) => boolean,
        cache: Dictionary<any>,
        target: string
    );

    apply(resolver: Resolver): void;
}
export = UnsafeCachePlugin;
