import Resolver = require('./Resolver');
declare class MainFieldPlugin {
    source: string;
    options: {
        name: string;
        forceRelative: boolean;
    };
    target: string;

    constructor(
        source: string, options: {
            name: string;
            forceRelative: boolean;
        }, target: string
    );

    apply(resolver: Resolver): void;
}
export = MainFieldPlugin;
