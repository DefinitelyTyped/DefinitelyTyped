import Resolver = require('./Resolver');
declare class LogInfoPlugin {
    source: string;

    constructor(source: string);

    apply(resolver: Resolver): void;
}
export = LogInfoPlugin;
