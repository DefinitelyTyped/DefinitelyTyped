import Resolver = require('./Resolver');
declare class SymlinkPlugin {
    source: string;
    target: string;

    constructor(source: string, target: string);

    apply(resolver: Resolver): void;
}
export = SymlinkPlugin;
