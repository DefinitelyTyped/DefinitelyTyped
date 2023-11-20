interface ExtrasObject {
    action: string;
    extras?: object | undefined;
}

interface FilterObject {
    filterActions: readonly string[];
    filterCategories: readonly string[];
}

declare const DataWedgeIntents: {
    sendBroadcastWithExtras: (extrasObject: ExtrasObject) => void;
    registerBroadcastReceiver: (filter: FilterObject) => void;
};

export = DataWedgeIntents;
