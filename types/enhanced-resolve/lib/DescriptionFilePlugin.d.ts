import Resolver = require('./Resolver');

declare class DescriptionFilePlugin {
    filenames: string[];
    source: string;
    target: string;

    constructor(source: string, filenames: string[] | string, target: string);

    apply(resolver: Resolver): void;
}

export = DescriptionFilePlugin;
