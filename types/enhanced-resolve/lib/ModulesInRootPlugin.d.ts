import Resolver = require('./Resolver');
declare class ModulesInRootPlugin {
    path: string;
    source: string;
    target: string;

    constructor(source: string, path: string, target: string);

    apply(resolver: Resolver): void;
}
export = ModulesInRootPlugin;
