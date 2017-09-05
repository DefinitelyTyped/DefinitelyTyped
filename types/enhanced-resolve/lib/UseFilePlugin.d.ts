import Resolver = require('./Resolver');
declare class UseFilePlugin {
    source: string;
    filename: string;
    target: string;

    constructor(source: string, filename: string, target: string);

    apply(resolver: Resolver): void;
}
export = UseFilePlugin;
