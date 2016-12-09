import Resolver = require('./Resolver');
declare class ModulesInRootPlugin {
    source: string;
    path: string;
    target: string;

    constructor(source: string, path: string, target: string);

    apply(resolver: Resolver): void;
}
export = ModulesInRootPlugin;
