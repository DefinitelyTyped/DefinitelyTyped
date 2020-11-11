// Type definitions for pouchdb-find 6.3
// Project: https://pouchdb.com/, https://github.com/pouchdb/pouchdb
// Definitions by: Jakub Navratil <https://github.com/trubit>
//                 Sebastian Ramirez <https://github.com/tiangolo>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

/// <reference types="pouchdb-core" />

declare namespace PouchDB {
    namespace Find {
        interface ConditionOperators {
            /** Match fields "less than" this one. */
            $lt?: any;

            /** Match fields "greater than" this one. */
            $gt?: any;

            /** Match fields "less than or equal to" this one. */
            $lte?: any;

            /** Match fields "greater than or equal to" this one. */
            $gte?: any;

            /** Match fields equal to this one. */
            $eq?: any;

            /** Match fields not equal to this one. */
            $ne?: any;

            /** True if the field should exist, false otherwise. */
            $exists?: boolean;

            /** One of: "null", "boolean", "number", "string", "array", or "object". */
            $type?: "null" | "boolean" | "number" | "string" | "array" | "object";

            /** The document field must exist in the list provided. */
            $in?: any[];

            /** The document field must not exist in the list provided. */
            $nin?: any[];

            /** Special condition to match the length of an array field in a document. Non-array fields cannot match this condition. */
            $size?: number;

            /**
             * Divisor and Remainder are both positive or negative integers.
             * Non-integer values result in a 404 status.
             * Matches documents where (field % Divisor == Remainder) is true, and only when the document field is an integer.
             * [divisor, remainder]
             */
            $mod?: [number, number];

            /** A regular expression pattern to match against the document field. Only matches when the field is a string value and matches the supplied regular expression. */
            $regex?: string;

            /** Matches an array value if it contains all the elements of the argument array. */
            $all?: any[];

            $elemMatch?: ConditionOperators;
        }

        interface CombinationOperators {
            /** Matches if all the selectors in the array match. */
            $and?: Selector[];

            /** Matches if any of the selectors in the array match. All selectors must use the same index. */
            $or?: Selector[];

            /** Matches if the given selector does not match. */
            $not?: Selector;

            /** Matches if none of the selectors in the array match. */
            $nor?: Selector[];
        }

        interface Selector extends CombinationOperators {
            [field: string]: Selector | Selector[] | ConditionOperators | any;

            _id?: string | ConditionOperators;
        }

        interface FindRequest<Content extends {}> {
            /** Defines a selector to filter the results. Required */
            selector: Selector;

            /** Defines a list of fields that you want to receive. If omitted, you get the full documents. */
            fields?: string[];

            /** Defines a list of fields defining how you want to sort. Note that sorted fields also have to be selected in the selector. */
            sort?: Array<string|{[propName: string]: 'asc' | 'desc'}>;

            /** Maximum number of documents to return. */
            limit?: number;

            /** Number of docs to skip before returning. */
            skip?: number;

            /** Set which index to use for the query. It can be “design-doc-name” or “[‘design-doc-name’, ‘name’]”. */
            use_index?: string | [string, string];
        }

        interface FindResponse<Content extends {}> {
            docs: Array<Core.ExistingDocument<Content>>;
            warning?: string;
        }

        interface CreateIndexOptions {
            index: {
                /** List of fields to index */
                fields: string[];

                /** Name of the index, auto-generated if you don't include it */
                name?: string;

                /** Design document name (i.e. the part after '_design/', auto-generated if you don't include it */
                ddoc?: string;

                /** Only supports 'json', and it's also the default */
                type?: string;
            };
        }

        interface CreateIndexResponse<Content extends {}> {
            result: string;
        }

        interface Index {
            /** Name of the index, auto-generated if you don't include it */
            name: string;

            /** Design document name (i.e. the part after '_design/', auto-generated if you don't include it */
            ddoc: string | null;

            /** Only supports 'json' */
            type: string;

            def: {
                fields: Array<{
                    [fieldName: string]: string
                }>;
            };
        }

        interface GetIndexesResponse<Content extends {}> {
            indexes: Index[];
        }

        interface DeleteIndexOptions {
            /** Name of the index */
            name: string;

            /** Design document name */
            ddoc: string;

            /** Default 'json' */
            type?: string;
        }

        interface DeleteIndexResponse<Content extends {}> {
            [propertyName: string]: any;
        }
    }

    interface Database<Content extends {} = {}> {
        /** Query the API to find some documents. */
        find(request: Find.FindRequest<Content>,
             callback: Core.Callback<Find.FindResponse<Content>>): void;
        find(request?: Find.FindRequest<Content>): Promise<Find.FindResponse<Content>>;

        /** Create an index if it doesn't exist, or do nothing if it already exists. */
        createIndex(index: Find.CreateIndexOptions,
                    callback: Core.Callback<Find.CreateIndexResponse<Content>>): void;
        createIndex(index?: Find.CreateIndexOptions): Promise<Find.CreateIndexResponse<Content>>;

        /** Get a list of all the indexes you've created. Also tells you about the special _all_docs index, i.e. the default index on the _id field. */
        getIndexes(callback: Core.Callback<Find.GetIndexesResponse<Content>>): void;
        getIndexes(): Promise<Find.GetIndexesResponse<Content>>;

        /** Delete an index and clean up any leftover data on the disk. */
        deleteIndex(index: Find.DeleteIndexOptions,
                    callback: Core.Callback<Find.DeleteIndexResponse<Content>>): void;
        deleteIndex(index?: Find.DeleteIndexOptions): Promise<Find.DeleteIndexResponse<Content>>;
    }
}

declare module 'pouchdb-find' {
    const plugin: PouchDB.Plugin;
    export = plugin;
}
