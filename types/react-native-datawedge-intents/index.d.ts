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
