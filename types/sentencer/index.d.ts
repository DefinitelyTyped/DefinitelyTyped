type action = () => string;
interface actions {
    [key: string]: action;
}
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
