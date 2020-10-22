import Resolver = require('./Resolver');
declare class TryNextPlugin {
    source: string;
    message: string | null;
    target: string;

    constructor(source: string, message: string | null, target: string);

    apply(resolver: Resolver): void;
}
export = TryNextPlugin;
