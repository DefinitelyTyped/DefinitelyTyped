// Based on https://github.com/microsoft/TypeScript/issues/28791#issuecomment-443520161
declare type UnionOmit<T, K extends keyof any> = T extends T ? Pick<T, Exclude<keyof T, K>> : never;

declare module Mongo {

    type BsonType = 1 | "double" |
        2 | "string" |
        3 | "object" |
        4 | "array" |
        5 | "binData" |
        6 | "undefined" |
        7 | "objectId" |
        8 | "bool" |
        9 | "date" |
        10 | "null" |
        11 | "regex" |
        12 | "dbPointer" |
        13 | "javascript" |
        14 | "symbol" |
        15 | "javascriptWithScope" |
        16 | "int" |
        17 | "timestamp" |
        18 | "long" |
        19 | "decimal" |
        -1 | "minKey" |
        127 | "maxKey" | "number"

    type FieldExpression<T> = {
        $eq?: T,
        $gt?: T,
        $gte?: T,
        $lt?: T,
        $lte?: T,
        $in?: T[],
        $nin?: T[],
        $ne?: T,
        $exists?: boolean,
        $type?: BsonType[] | BsonType,
        $not?: FieldExpression<T>,
        $expr?: FieldExpression<T>,
        $jsonSchema?: any,
        $mod?: number[],
        $regex?: RegExp | string,
        $options?: string,
        $text?: { $search: string, $language?: string, $caseSensitive?: boolean, $diacriticSensitive?: boolean },
        $where?: string | Function,
        $geoIntersects?: any,
        $geoWithin?: any,
        $near?: any,
        $nearSphere?: any,
        $all?: T[],
        $elemMatch?: T extends {} ? Query<T> : FieldExpression<T>,
        $size?: number,
        $bitsAllClear?: any,
        $bitsAllSet?: any,
        $bitsAnyClear?: any,
        $bitsAnySet?: any,
        $comment?: string
    }

    type Flatten<T> = T extends any[] ? T[0] : T

    type Query<T> = {
        [P in keyof T]?: Flatten<T[P]> | RegExp | FieldExpression<Flatten<T[P]>>
    } & {
        $or?: Query<T>[],
        $and?: Query<T>[],
        $nor?: Query<T>[]
    } & Dictionary<any>

    type QueryWithModifiers<T> = {
        $query: Query<T>,
        $comment?: string,
        $explain?: any,
        $hint?: any,
        $maxScan?: any,
        $max?: any,
        $maxTimeMS?: any,
        $min?: any,
        $orderby?: any,
        $returnKey?: any,
        $showDiskLoc?: any,
        $natural?: any
    }

    type Selector<T> = Query<T> | QueryWithModifiers<T>

    type Dictionary<T> = { [key: string]: T }
    type PartialMapTo<T, M> = Partial<Record<keyof T, M>>
    type OnlyArrays<T> = T extends any[] ? T : never;
    type OnlyElementsOfArrays<T> = T extends any[] ? Partial<T[0]> : never
    type ElementsOf<T> = {
        [P in keyof T]?: OnlyElementsOfArrays<T[P]>
    }
    type PushModifier<T> = {
        [P in keyof T]?:
        OnlyElementsOfArrays<T[P]> |
        { $each?: T[P], $position?: number, $slice?: number, $sort?: 1 | -1 | Dictionary<number> }
    }
    type ArraysOrEach<T> = {
        [P in keyof T]?: OnlyElementsOfArrays<T[P]> | { $each: T[P] }
    }
    type CurrentDateModifier = { $type: "timestamp" | "date" } | true
    type Modifier<T> = T | {
        $currentDate?: Partial<Record<keyof T, CurrentDateModifier>> & Dictionary<CurrentDateModifier>,
        $inc?: PartialMapTo<T, number> & Dictionary<number>,
        $min?: PartialMapTo<T, Date | number> & Dictionary<Date | number>,
        $max?: PartialMapTo<T, Date | number> & Dictionary<Date | number>,
        $mul?: PartialMapTo<T, number> & Dictionary<number>,
        $rename?: PartialMapTo<T, string> & Dictionary<string>,
        $set?: Partial<T> & Dictionary<any>,
        $setOnInsert?: Partial<T> & Dictionary<any>,
        $unset?: PartialMapTo<T, string | boolean | 1 | 0> & Dictionary<any>,
        $addToSet?: ArraysOrEach<T> & Dictionary<any>,
        $push?: PushModifier<T> & Dictionary<any>,
        $pull?: ElementsOf<T> & Dictionary<any>,
        $pullAll?: Partial<T> & Dictionary<any>,
        $pop?: PartialMapTo<T, 1 | -1> & Dictionary<1 | -1>,
    }

    type OptionalId<TSchema> = UnionOmit<TSchema, '_id'> & { _id?: any };

    interface SortSpecifier { }
    interface FieldSpecifier {
        [id: string]: Number;
    }

    var Collection: CollectionStatic;
    interface CollectionStatic {
        new <T>(name: string | null, options?: {
            connection?: Object | null;
            idGeneration?: string;
            transform?: Function | null;
        }): Collection<T>;
    }
    interface Collection<T> {
        allow(options: {
            insert?: (userId: string, doc: T) => boolean;
            update?: (userId: string, doc: T, fieldNames: string[], modifier: any) => boolean;
            remove?: (userId: string, doc: T) => boolean;
            fetch?: string[];
            transform?: Function | null;
        }): boolean;
        deny(options: {
            insert?: (userId: string, doc: T) => boolean;
            update?: (userId: string, doc: T, fieldNames: string[], modifier: any) => boolean;
            remove?: (userId: string, doc: T) => boolean;
            fetch?: string[];
            transform?: Function | null;
        }): boolean;
        find(selector?: Selector<T> | ObjectID | string, options?: {
            sort?: SortSpecifier;
            skip?: number;
            limit?: number;
            fields?: FieldSpecifier;
            reactive?: boolean;
            transform?: Function | null;
        }): Cursor<T>;
        findOne(selector?: Selector<T> | ObjectID | string, options?: {
            sort?: SortSpecifier;
            skip?: number;
            fields?: FieldSpecifier;
            reactive?: boolean;
            transform?: Function | null;
        }): T | undefined;
        insert(doc: OptionalId<T>, callback?: Function): string;
        rawCollection(): any;
        rawDatabase(): any;
        remove(selector: Selector<T> | ObjectID | string, callback?: Function): number;
        update(selector: Selector<T> | ObjectID | string, modifier: Modifier<T>, options?: {
            multi?: boolean;
            upsert?: boolean;
        }, callback?: Function): number;
        upsert(selector: Selector<T> | ObjectID | string, modifier: Modifier<T>, options?: {
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
    interface ObserveCallbacks<T> {
        added?(document: T): void;
        addedAt?(document: T, atIndex: number, before: T | null): void;
        changed?(newDocument: T, oldDocument: T): void;
        changedAt?(newDocument: T, oldDocument: T, indexAt: number): void;
        removed?(oldDocument: T): void;
        removedAt?(oldDocument: T, atIndex: number): void;
        movedTo?(document: T, fromIndex: number, toIndex: number, before: T | null): void;
    }
    interface ObserveChangesCallbacks<T> {
        added?(id: string, fields: Partial<T>): void;
        addedBefore?(id: string, fields: Partial<T>, before: T | null): void;
        changed?(id: string, fields: Partial<T>): void;
        movedBefore?(id: string, before: T | null): void;
        removed?(id: string): void;
    }
    interface Cursor<T> {
        count(applySkipLimit?: boolean): number;
        fetch(): Array<T>;
        forEach(callback: (doc: T, index: number, cursor: Cursor<T>) => void, thisArg?: any): void;
        map<U>(callback: (doc: T, index: number, cursor: Cursor<T>) => U, thisArg?: any): Array<U>;
        observe(callbacks: ObserveCallbacks<T>): Meteor.LiveQueryHandle;
        observeChanges(callbacks: ObserveChangesCallbacks<T>): Meteor.LiveQueryHandle;
    }

    var ObjectID: ObjectIDStatic;
    interface ObjectIDStatic {
        new(hexString?: string): ObjectID;
    }
    interface ObjectID {
        toHexString(): string;
        equals(otherID: ObjectID): boolean;
    }

    function setConnectionOptions(options: any): void;
}

declare module Mongo {
    interface AllowDenyOptions {
        insert?: (userId: string, doc: any) => boolean;
        update?: (userId: string, doc: any, fieldNames: string[], modifier: any) => boolean;
        remove?: (userId: string, doc: any) => boolean;
        fetch?: string[];
        transform?: Function | null;
    }
}
