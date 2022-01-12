// Type definitions for sentencer 0.2
// Project: https://www.npmjs.com/package/sentencer (Does not have to be to GitHub, but prefer linking to a source code repository rather than to a project website.)
// Definitions by: Julien <https://github.com/JLambertazzo>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

type action = () => string;
interface options {
    nounList?: string[];
    adjectiveList?: string[];
    actions?: {[key: string]: action};
}

declare namespace instance { // the Sentencer instance exported by the library
    function make(template: string): string;
    function configure(options: options): void;
}

export = instance;
