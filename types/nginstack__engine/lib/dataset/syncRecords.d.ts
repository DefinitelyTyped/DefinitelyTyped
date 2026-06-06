declare function _exports(
    source: import('./DataSet'),
    target: import('./DataSet'),
    opt_options?: {
        idFieldName?: string;
        ignoredFieldNames?: string[];
    }
): {
    modified: boolean;
    insertedIds: any[];
    updatedIds: any[];
    deletedIds: any[];
};
export = _exports;
