declare module Mongo {
    interface Selector {
        [key: string]: any;
    }
    interface Selector extends Object { }
    interface Modifier { }
    interface SortSpecifier { }
    interface FieldSpecifier {
        [id: string]: Number;
    }

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
        find(selector?: Selector | ObjectID | string, options?: {
            sort?: SortSpecifier;
            skip?: number;
            limit?: number;
            fields?: FieldSpecifier;
            reactive?: boolean;
            transform?: Function;
        }): Cursor<T>;
        findOne(selector?: Selector | ObjectID | string, options?: {
            sort?: SortSpecifier;
            skip?: number;
            fields?: FieldSpecifier;
            reactive?: boolean;
            transform?: Function;
        }): T;
        insert(doc: T, callback?: Function): string;
        rawCollection(): any;
        rawDatabase(): any;
        remove(selector: Selector | ObjectID | string, callback?: Function): number;
        update(selector: Selector | ObjectID | string, modifier: Modifier, options?: {
            multi?: boolean;
            upsert?: boolean;
        }, callback?: Function): number;
        upsert(selector: Selector | ObjectID | string, modifier: Modifier, options?: {
            multi?: boolean;
        }, callback?: Function): {
                numberAffected?: number; insertedId?: string;
            };
        _ensureIndex(keys: {
            [key: string]: number | string
        } | string, options?: {
            [key: string]: any
        }): void;
        _dropIndex(keys: {
            [key: string]: number | string
        } | string): void;
    }

    var Cursor: CursorStatic;
    interface CursorStatic {
        new <T>(): Cursor<T>;
    }
    interface ObserveCallbacks {
        added?(document: Object): void;
        addedAt?(document: Object, atIndex: number, before: Object): void;
        changed?(newDocument: Object, oldDocument: Object): void;
        changedAt?(newDocument: Object, oldDocument: Object, indexAt: number): void;
        removed?(oldDocument: Object): void;
        removedAt?(oldDocument: Object, atIndex: number): void;
        movedTo?(document: Object, fromIndex: number, toIndex: number, before: Object): void;
    }
    interface ObserveChangesCallbacks {
        added?(id: string, fields: Object): void;
        addedBefore?(id: string, fields: Object, before: Object): void;
        changed?(id: string, fields: Object): void;
        movedBefore?(id: string, before: Object): void;
        removed?(id: string): void;
    }
    interface Cursor<T> {
        count(applySkipLimit?: boolean): number;
        fetch(): Array<T>;
        forEach(callback: < T > (doc: T, index: number, cursor: Cursor<T>) => void, thisArg?: any): void;
        map<U>(callback: (doc: T, index: number, cursor: Cursor<T>) => U, thisArg?: any): Array<U>;
        observe(callbacks: ObserveCallbacks): Meteor.LiveQueryHandle;
        observeChanges(callbacks: ObserveChangesCallbacks): Meteor.LiveQueryHandle;
    }

    var ObjectID: ObjectIDStatic;
    interface ObjectIDStatic {
        new (hexString?: string): ObjectID;
    }
    interface ObjectID {
        toHexString(): string;
        equals(otherID: ObjectID): boolean;
    }

    function setConnectionOptions(options: any): void;
}

declare module "meteor/mongo" {
    module Mongo {
        interface Selector {
            [key: string]: any;
        }
        interface Selector extends Object { }
        interface Modifier { }
        interface SortSpecifier { }
        interface FieldSpecifier {
            [id: string]: Number;
        }

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
            find(selector?: Selector | ObjectID | string, options?: {
                sort?: SortSpecifier;
                skip?: number;
                limit?: number;
                fields?: FieldSpecifier;
                reactive?: boolean;
                transform?: Function;
            }): Cursor<T>;
            findOne(selector?: Selector | ObjectID | string, options?: {
                sort?: SortSpecifier;
                skip?: number;
                fields?: FieldSpecifier;
                reactive?: boolean;
                transform?: Function;
            }): T;
            insert(doc: T, callback?: Function): string;
            rawCollection(): any;
            rawDatabase(): any;
            remove(selector: Selector | ObjectID | string, callback?: Function): number;
            update(selector: Selector | ObjectID | string, modifier: Modifier, options?: {
                multi?: boolean;
                upsert?: boolean;
            }, callback?: Function): number;
            upsert(selector: Selector | ObjectID | string, modifier: Modifier, options?: {
                multi?: boolean;
            }, callback?: Function): {
                    numberAffected?: number; insertedId?: string;
                };
            _ensureIndex(keys: {
                [key: string]: number | string
            } | string, options?: {
                [key: string]: any
            }): void;
            _dropIndex(keys: {
                [key: string]: number | string
            } | string): void;
        }

        var Cursor: CursorStatic;
        interface CursorStatic {
            new <T>(): Cursor<T>;
        }
        interface ObserveCallbacks {
            added?(document: Object): void;
            addedAt?(document: Object, atIndex: number, before: Object): void;
            changed?(newDocument: Object, oldDocument: Object): void;
            changedAt?(newDocument: Object, oldDocument: Object, indexAt: number): void;
            removed?(oldDocument: Object): void;
            removedAt?(oldDocument: Object, atIndex: number): void;
            movedTo?(document: Object, fromIndex: number, toIndex: number, before: Object): void;
        }
        interface ObserveChangesCallbacks {
            added?(id: string, fields: Object): void;
            addedBefore?(id: string, fields: Object, before: Object): void;
            changed?(id: string, fields: Object): void;
            movedBefore?(id: string, before: Object): void;
            removed?(id: string): void;
        }
        interface Cursor<T> {
            count(applySkipLimit?: boolean): number;
            fetch(): Array<T>;
            forEach(callback: (doc: T, index: number, cursor: Cursor<T>) => void, thisArg?: any): void;
            map<U>(callback: (doc: T, index: number, cursor: Cursor<T>) => U, thisArg?: any): Array<U>;
            observe(callbacks: ObserveCallbacks): Meteor.LiveQueryHandle;
            observeChanges(callbacks: ObserveChangesCallbacks): Meteor.LiveQueryHandle;
        }

        var ObjectID: ObjectIDStatic;
        interface ObjectIDStatic {
            new (hexString?: string): ObjectID;
        }
        interface ObjectID {
            toHexString(): string;
            equals(otherID: ObjectID): boolean;
         }

        function setConnectionOptions(options: any): void;
    }
}

declare module Mongo {
    interface AllowDenyOptions {
        insert?: (userId: string, doc: any) => boolean;
        update?: (userId: string, doc: any, fieldNames: string[], modifier: any) => boolean;
        remove?: (userId: string, doc: any) => boolean;
        fetch?: string[];
        transform?: Function;
    }
}

declare module "meteor/mongo" {
    module Mongo {
        interface AllowDenyOptions {
            insert?: (userId: string, doc: any) => boolean;
            update?: (userId: string, doc: any, fieldNames: string[], modifier: any) => boolean;
            remove?: (userId: string, doc: any) => boolean;
            fetch?: string[];
            transform?: Function;
        }
    }
}
