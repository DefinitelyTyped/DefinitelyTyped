declare namespace Mongo {
    var Collection: CollectionStatic;
    interface CollectionStatic {
        new<T>(name: string, options?: {
            connection?: Object | undefined;
            idGeneration?: string | undefined;
            transform?: Function | undefined;
        }): Collection<T>;
    }
    interface Collection<T> {
        allow(options: {
            insert?: ((userId: string, doc: T) => boolean) | undefined;
            update?: ((userId: string, doc: T, fieldNames: string[], modifier: any) => boolean) | undefined;
            remove?: ((userId: string, doc: T) => boolean) | undefined;
            fetch?: string[] | undefined;
            transform?: Function | undefined;
        }): boolean;
        deny(options: {
            insert?: ((userId: string, doc: T) => boolean) | undefined;
            update?: ((userId: string, doc: T, fieldNames: string[], modifier: any) => boolean) | undefined;
            remove?: ((userId: string, doc: T) => boolean) | undefined;
            fetch?: string[] | undefined;
            transform?: Function | undefined;
        }): boolean;
        find(selector?: any, options?: {
            sort?: any;
            skip?: number | undefined;
            limit?: number | undefined;
            fields?: any;
            reactive?: boolean | undefined;
            transform?: Function | undefined;
        }): Mongo.Cursor<T>;
        findOne(selector?: any, options?: {
            sort?: any;
            skip?: number | undefined;
            fields?: any;
            reactive?: boolean | undefined;
            transform?: Function | undefined;
        }): T;
        insert(doc: T, callback?: Function): string;
        rawCollection(): any;
        rawDatabase(): any;
        remove(selector: any, callback?: Function): void;
        update(selector: any, modifier: any, options?: {
            multi?: boolean | undefined;
            upsert?: boolean | undefined;
        }, callback?: Function): number;
        upsert(selector: any, modifier: any, options?: {
            multi?: boolean | undefined;
        }, callback?: Function): { numberAffected?: number | undefined; insertedId?: string | undefined };
        _ensureIndex(indexName: string, options?: { [key: string]: any }): void;
    }

    var Cursor: CursorStatic;
    interface CursorStatic {
        new<T>(): Cursor<T>;
    }
    interface Cursor<T> {
        count(): number;
        fetch(): T[];
        forEach(callback: <T>(doc: T, index: number, cursor: Mongo.Cursor<T>) => void, thisArg?: any): void;
        map<U>(callback: (doc: T, index: number, cursor: Mongo.Cursor<T>) => U, thisArg?: any): U[];
        observe(callbacks: Object): any;
        observeChanges(callbacks: Object): any;
    }

    var ObjectID: ObjectIDStatic;
    interface ObjectIDStatic {
        new(hexString: string): ObjectID;
    }
    interface ObjectID {
    }
}

declare namespace Meteor {
    var isServer: boolean;
    var isClient: boolean;
}
