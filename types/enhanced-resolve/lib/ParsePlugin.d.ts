import Resolver = require('./Resolver');
declare class ParsePlugin {
    source: string;
    target: string;

    constructor(source: string, target: string);

    apply(resolver: Resolver): void;
}
export = ParsePlugin;
