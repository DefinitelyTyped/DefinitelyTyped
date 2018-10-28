import Resolver = require('./Resolver');
declare class FileKindPlugin {
    source: string;
    target: string;

    constructor(source: string, target: string);

    apply(resolver: Resolver): void;
}
export = FileKindPlugin;
