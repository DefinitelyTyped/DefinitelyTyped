import Resolver = require('./Resolver');
declare class AliasFieldPlugin {
    field: string;
    source: string;
    target: string;

    constructor(source: string, field: string, target: string);

    apply(resolver: Resolver): void;
}
export = AliasFieldPlugin;
