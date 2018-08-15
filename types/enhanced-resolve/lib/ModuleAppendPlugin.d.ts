import Resolver = require('./Resolver');
declare class ModuleAppendPlugin {
    source: string;
    appending: string;
    target: string;

    constructor(source: string, appending: string, target: string);

    apply(resolver: Resolver): void;
}
export = ModuleAppendPlugin;
