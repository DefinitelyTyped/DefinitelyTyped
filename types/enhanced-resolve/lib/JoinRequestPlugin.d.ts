import Resolver = require('./Resolver');
declare class JoinRequestPlugin {
    source: string;
    target: string;

    constructor(source: string, target: string);

    apply(resolver: Resolver): void;
}
export = JoinRequestPlugin;
