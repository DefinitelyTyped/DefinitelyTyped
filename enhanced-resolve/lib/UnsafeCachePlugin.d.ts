import Resolver = require('./Resolver');
import { ResolverRequest } from './common-types'
declare class UnsafeCachePlugin {
    source: string;
    filterPredicate: (str: ResolverRequest) => boolean;
    cache: Object;
    target: string;

    constructor(source: string, filterPredicate: (str: ResolverRequest) => boolean, cache: Object, target: string);

    apply(resolver: Resolver): void;
}
export = UnsafeCachePlugin;
