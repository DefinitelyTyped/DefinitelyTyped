// Type definitions for react-native-datawedge-intents 0.1
// Project: https://github.com/darryncampbell/react-native-datawedge-intents#readme
// Definitions by: DerZersaeger <https://github.com/DerZersaeger>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

interface ExtrasObject {
    action: string;
    extras?: object;
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
