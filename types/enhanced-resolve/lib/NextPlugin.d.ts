import Resolver = require('./Resolver');
declare class NextPlugin {
    source: string;
    target: string;

    constructor(source: string, target: string);

    apply(resolver: Resolver): void;
}
export = NextPlugin;
