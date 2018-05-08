import Resolver = require('./Resolver');
declare class CloneBasenamePlugin {
    source: string;
    target: string;

    constructor(source: string, target: string);

    apply(resolver: Resolver): void;
}
export = CloneBasenamePlugin;
