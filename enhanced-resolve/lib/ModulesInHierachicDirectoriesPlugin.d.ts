import Resolver = require('./Resolver');
declare class ModulesInHierachicDirectoriesPlugin {
    source: string;
    target: string;
    directories: string[];

    constructor(source: string, directories: string[], target: string);

    apply(resolver: Resolver): void;
}
export = ModulesInHierachicDirectoriesPlugin;
