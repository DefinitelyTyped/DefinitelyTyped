import Resolver = require('./Resolver');
declare class ResultPlugin {
    source: string;

    constructor(source: string);

    apply(resolver: Resolver): void;
}
export = ResultPlugin;
