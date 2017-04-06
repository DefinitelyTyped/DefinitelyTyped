import Resolver = require('./Resolver');
declare class ModulesInHierachicDirectoriesPlugin {
    directories: string[];
    source: string;
    target: string;

    constructor(source: string, directories: string[], target: string);

    apply(resolver: Resolver): void;
}
export = ModulesInHierachicDirectoriesPlugin;
