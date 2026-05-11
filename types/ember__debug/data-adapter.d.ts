import ContainerDebugAdapter from "@ember/debug/container-debug-adapter";
import EmberObject from "@ember/object";

declare namespace DataAdapter {
    interface Column {
        name: string;
        desc: string;
    }
    interface WrappedRecord {
        columnValues: object;
        object: object;
    }
    interface WrappedType {
        type: {
            name: string;
            count: number;
            columns: Column[];
            object: typeof Object;
        };
        release: () => void;
    }
}

/**
 * The `DataAdapter` helps a data persistence library
 * interface with tools that debug Ember such as Chrome and Firefox.
 */
export default class DataAdapter extends EmberObject {
    /**
     * The container-debug-adapter which is used
     * to list all models.
     */
    containerDebugAdapter: ContainerDebugAdapter;
    /**
     * Ember Data > v1.0.0-beta.18
     * requires string model names to be passed
     * around instead of the actual factories.
     */
    acceptsModelName: boolean;
    /**
     * Specifies how records can be filtered.
     * Records returned will need to have a `filterValues`
     * property with a key for every name in the returned array.
     */
    getFilters(): DataAdapter.Column[];
    /**
     * Fetch the model types and observe them for changes.
     */
    watchModelTypes(
        typesAdded: (types: DataAdapter.WrappedType[]) => void,
        typesUpdated: (types: DataAdapter.WrappedType[]) => void,
    ): () => void;
    /**
     * Fetch the records of a given type and observe them for changes.
     */
    watchRecords(
        modelName: string,
        recordsAdded: (records: DataAdapter.WrappedRecord[]) => void,
        recordsUpdated: (records: DataAdapter.WrappedRecord[]) => void,
        recordsRemoved: (idx: number, count: number) => void,
    ): () => void;
}
