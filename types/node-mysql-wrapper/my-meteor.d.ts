// Type definitions for meteorjs for node-mysql-wrapper which helps in development
// Project: https://github.com/nodets/node-mysql-wrapper
// Definitions by: Makis Maropoulos <https://github.com/kataras>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare namespace Mongo {
    var Collection: CollectionStatic;
    interface CollectionStatic {
        new <T>(name: string, options?: {
            connection?: Object;
            idGeneration?: string;
            transform?: Function;
        }): Collection<T>;
    }
    interface Collection<T> {
        allow(options: {
            insert?: (userId: string, doc: T) => boolean;
            update?: (userId: string, doc: T, fieldNames: string[], modifier: any) => boolean;
            remove?: (userId: string, doc: T) => boolean;
            fetch?: string[];
            transform?: Function;
        }): boolean;
        deny(options: {
            insert?: (userId: string, doc: T) => boolean;
            update?: (userId: string, doc: T, fieldNames: string[], modifier: any) => boolean;
            remove?: (userId: string, doc: T) => boolean;
            fetch?: string[];
            transform?: Function;
        }): boolean;
        find(selector?: any, options?: {
            sort?: any;
            skip?: number;
            limit?: number;
            fields?: any;
            reactive?: boolean;
            transform?: Function;
        }): Mongo.Cursor<T>;
        findOne(selector?: any, options?: {
            sort?: any;
            skip?: number;
            fields?: any;
            reactive?: boolean;
            transform?: Function;
        }): T;
        insert(doc: T, callback?: Function): string;
        rawCollection():any;
        rawDatabase():any;
        remove(selector: any, callback?: Function): void;
        update(selector: any, modifier: any, options?: {
            multi?: boolean;
            upsert?: boolean;
        }, callback?: Function): number;
        upsert(selector: any, modifier: any, options?: {
            multi?: boolean;
        }, callback?: Function): { numberAffected?: number; insertedId?: string; };
        _ensureIndex(indexName: string, options?: { [key: string]: any }): void;
    }

    var Cursor: CursorStatic;
    interface CursorStatic {
        new <T>(): Cursor<T>;
    }
    interface Cursor<T> {
        count(): number;
        fetch(): Array<T>;
        forEach(callback: <T>(doc: T, index: number, cursor: Mongo.Cursor<T>) => void, thisArg?: any): void;
        map<U>(callback: (doc: T, index: number, cursor: Mongo.Cursor<T>) => U, thisArg?: any): Array<U>;
        observe(callbacks: Object): any;
        observeChanges(callbacks: Object): any;
    }

    var ObjectID: ObjectIDStatic;
    interface ObjectIDStatic {
        new (hexString: string): ObjectID;
    }
    interface ObjectID {
    }

}

declare namespace Meteor {
    var isServer: boolean;
    var isClient: boolean;
}
