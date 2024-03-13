/// <reference path="meteor-mongo.d.ts" />

declare namespace Mongo {
    interface Collection<T> {
        before: {
            find(
                hook: (
                    userId: string,
                    selector: Mongo.Selector,
                    options: CollectionHooks.ModifierOptions,
                ) => void,
            ): void;
            findOne(
                hook: (
                    userId: string,
                    selector: Mongo.Selector,
                    options: CollectionHooks.ModifierOptions,
                ) => void,
            ): void;
            insert(
                hook: (
                    userId: string,
                    doc: T,
                ) => void,
            ): void;
            remove(
                hook: (
                    userId: string,
                    doc: T,
                ) => void,
            ): void;
            update(
                hook: (
                    userId: string,
                    doc: T,
                    fieldNames: string[],
                    modifier: Mongo.Modifier,
                    options: CollectionHooks.ModifierOptions,
                ) => void,
            ): void;
            upsert(
                hook: (
                    userId: string,
                    doc: T,
                    selector: Mongo.Selector,
                    modifier: Mongo.Modifier,
                    options: CollectionHooks.ModifierOptions,
                ) => void,
            ): void;
        };
        after: {
            find(
                hook: (
                    userId: string,
                    selector: Mongo.Selector,
                    options: CollectionHooks.ModifierOptions,
                    cursor: Mongo.Cursor<T>,
                ) => void,
            ): void;
            findOne(
                hook: (
                    userId: string,
                    selector: Mongo.Selector,
                    options: CollectionHooks.ModifierOptions,
                    doc: T,
                ) => void,
            ): void;
            insert(
                hook: (
                    userId: string,
                    doc: T,
                ) => void,
            ): void;
            remove(
                hook: (
                    userId: string,
                    doc: T,
                ) => void,
            ): void;
            update(
                hook: (
                    userId: string,
                    doc: T,
                    fieldNames: string[],
                    modifier: Mongo.Modifier,
                    options: CollectionHooks.ModifierOptions,
                ) => void,
                options?: CollectionHooks.HookOptionValue,
            ): void;
            upsert(
                hook: (
                    userId: string,
                    doc: T,
                    selector: Mongo.Selector,
                    modifier: Mongo.Modifier,
                    options: CollectionHooks.ModifierOptions,
                ) => void,
            ): void;
        };
        direct: {
            find(selector?: Mongo.Selector | Mongo.ObjectID | string, options?: {
                sort?: Mongo.SortSpecifier | undefined;
                skip?: number | undefined;
                limit?: number | undefined;
                fields?: Mongo.FieldSpecifier | undefined;
                reactive?: boolean | undefined;
                transform?(doc: any): void;
            }): Mongo.Cursor<T>;
            findOne(selector?: Mongo.Selector | Mongo.ObjectID | string, options?: {
                sort?: Mongo.SortSpecifier | undefined;
                skip?: number | undefined;
                fields?: Mongo.FieldSpecifier | undefined;
                reactive?: boolean | undefined;
                transform?(doc: any): void;
            }): T;
            insert(
                doc: T,
                callback?: () => void,
            ): string;
            remove(
                selector: Mongo.Selector | Mongo.ObjectID | string,
                callback?: () => void,
            ): number;
            update(
                selector: Mongo.Selector | Mongo.ObjectID | string,
                modifier: Mongo.Modifier,
                options?: {
                    multi?: boolean | undefined;
                    upsert?: boolean | undefined;
                },
                callback?: () => void,
            ): number;
            upsert(
                selector: Mongo.Selector | Mongo.ObjectID | string,
                modifier: Mongo.Modifier,
                options?: {
                    multi?: boolean | undefined;
                },
                callback?: () => void,
            ): { numberAffected?: number | undefined; insertedId?: string | undefined };
        };
        hookOptions: CollectionHooks.GlobalHookOptions;
    }
}

declare namespace CollectionHooks {
    interface ModifierOptions {
        multi?: boolean | undefined;
        upsert?: boolean | undefined;
    }

    interface HookOptionValue {
        fetchPrevious?: boolean | undefined;
    }

    interface LocalHookOptions {
        all?: HookOptionValue | undefined;
        find?: HookOptionValue | undefined;
        findOne?: HookOptionValue | undefined;
        insert?: HookOptionValue | undefined;
        remove?: HookOptionValue | undefined;
        update?: HookOptionValue | undefined;
        upsert?: HookOptionValue | undefined;
    }

    interface GlobalHookOptions {
        before?: LocalHookOptions | undefined;
        after?: LocalHookOptions | undefined;
        all?: LocalHookOptions | undefined;
    }
}
