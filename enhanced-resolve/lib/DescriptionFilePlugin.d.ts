import Resolver = require('./Resolver');
declare class DescriptionFilePlugin {
    source: string;
    target: string;
    filenames: string[];

    constructor(source: string, filenames: string[] | string, target: string);

    apply(resolver: Resolver): void;
}
export = DescriptionFilePlugin;
