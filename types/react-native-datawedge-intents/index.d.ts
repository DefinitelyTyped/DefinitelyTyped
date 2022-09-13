// Type definitions for react-native-datawedge-intents 0.1
// Project: https://github.com/darryncampbell/react-native-datawedge-intents#readme
// Definitions by: DefinitelyTyped <https://github.com/DefinitelyTyped>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

interface ExtrasObject {
    action: string;
    extras?: object | undefined;
}

interface FilterObject {
    filterActions: ReadonlyArray<string>;
    filterCategories: ReadonlyArray<string>;
}

declare const DataWedgeIntents: {
    sendBroadcastWithExtras: (extrasObject: ExtrasObject) => void;
    registerBroadcastReceiver: (filter: FilterObject) => void;
};

export = DataWedgeIntents;
