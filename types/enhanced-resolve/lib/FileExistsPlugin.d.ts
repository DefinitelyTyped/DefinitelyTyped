import Resolver = require('./Resolver');
declare class FileExistsPlugin {
    source: string;
    target: string;

    constructor(source: string, target: string);

    apply(resolver: Resolver): void;
}
export = FileExistsPlugin;
