// Type definitions for react-native-datawedge-intents 0.1
// Project: https://github.com/darryncampbell/react-native-datawedge-intents#readme
// Definitions by: DerZersaeger <https://github.com/DerZersaeger>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

interface ExtrasObject<T = object> {
    action: string
    extras?: T
}

interface FilterObject {
    filterActions: ReadonlyArray<string>
    filterCategories: ReadonlyArray<string>
}

declare const DataWedgeIntents: {
    sendBroadcastWithExtras: <T>(extrasObject: ExtrasObject<T>) => void;
    registerBroadcastReceiver: (filter: FilterObject) => void;
};

export default DataWedgeIntents;
