import Resolver = require('./Resolver');
import { Dictionary } from './concord';

declare class ConcordExtensionsPlugin {
    options: Dictionary<any>;
    source: string;
    target: string;

    constructor(source: string, options: Dictionary<any>, target: string);

    apply(resolver: Resolver): void;
}
export = ConcordExtensionsPlugin;
