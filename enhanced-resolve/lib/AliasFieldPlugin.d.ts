import Resolver = require('./Resolver');
declare class AliasFieldPlugin {
    source: string;
    field: string;
    target: string;

    constructor(source: string, field: string, target: string);

    apply(resolver: Resolver): void;
}
export = AliasFieldPlugin;
