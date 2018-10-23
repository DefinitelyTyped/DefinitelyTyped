import Resolver = require('./Resolver');
declare class DirectoryExistsPlugin {
    source: string;
    target: string;

    constructor(source: string, target: string);

    apply(resolver: Resolver): void;
}
export = DirectoryExistsPlugin;
