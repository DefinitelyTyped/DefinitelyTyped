// Type definitions for sentencer 0.2
// Project: https://www.npmjs.com/package/sentencer (Does not have to be to GitHub, but prefer linking to a source code repository rather than to a project website.)
// Definitions by: Julien <https://github.com/JLambertazzo>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

type action = () => string;
interface actions { [key: string]: action; }
interface options {
    nounList?: string[];
    adjectiveList?: string[];
    actions?: actions;
}
interface Sentencer {
    actions: actions;
    make: (template: string) => string;
    configure: (options: options) => void;
    use: (options: options) => Sentencer;
}

export = sentencer;
export as namespace sentencer;

declare const sentencer: Sentencer;
