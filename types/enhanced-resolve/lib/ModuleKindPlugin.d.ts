import Resolver = require('./Resolver');
declare class ModuleKindPlugin {
    source: string;
    target: string;

    constructor(source: string, target: string);

    apply(resolver: Resolver): void;
}
export = ModuleKindPlugin;
