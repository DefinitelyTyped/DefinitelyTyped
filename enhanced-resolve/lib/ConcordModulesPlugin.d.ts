import Resolver = require('./Resolver');
declare class ConcordModulesPlugin {
    source: string;
    options: {};
    target: string;

    constructor(source: string, options: {}, target: string);

    apply(resolver: Resolver): void;
}
export = ConcordModulesPlugin;
