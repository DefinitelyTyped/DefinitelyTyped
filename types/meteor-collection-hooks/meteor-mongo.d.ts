declare module 'meteor/mongo' {
  namespace Mongo {
    interface Collection<T> {
      before: {
        find(hook: (
            userId: string,
            selector: Mongo.Selector,
            options: CollectionHooks.ModifierOptions
          ) => void
        ): void;
        findOne(hook: (
            userId: string,
            selector: Mongo.Selector,
            options: CollectionHooks.ModifierOptions
          ) => void
        ): void;
        insert(hook: (
            userId: string,
            doc: T
          ) => void
        ): void;
        remove(hook: (
            userId: string,
            doc: T
          ) => void
        ): void;
        update(hook: (
            userId: string,
            doc: T,
            fieldNames: string[],
            modifier: Mongo.Modifier,
            options: CollectionHooks.ModifierOptions
          ) => void
        ): void;
        upsert(hook: (
            userId: string,
            doc: T,
            selector: Mongo.Selector,
            modifier: Mongo.Modifier,
            options: CollectionHooks.ModifierOptions
          ) => void
        ): void;
      };
      after: {
        find(hook: (
            userId: string,
            selector: Mongo.Selector,
            options: CollectionHooks.ModifierOptions,
            cursor: Mongo.Cursor<T>
          ) => void
        ): void;
        findOne(hook: (
            userId: string,
            selector: Mongo.Selector,
            options: CollectionHooks.ModifierOptions,
            doc: T
          ) => void
        ): void;
        insert(hook: (
            userId: string,
            doc: T
          ) => void
        ): void;
        remove(hook: (
            userId: string,
            doc: T
          ) => void
        ): void;
        update(hook: (
            userId: string,
            doc: T,
            fieldNames: string[],
            modifier: Mongo.Modifier,
            options: CollectionHooks.ModifierOptions
          ) => void,
          options?: CollectionHooks.HookOptionValue
        ): void;
        upsert(hook: (
            userId: string,
            doc: T,
            selector: Mongo.Selector,
            modifier: Mongo.Modifier,
            options: CollectionHooks.ModifierOptions
          ) => void
        ): void;
      };
      direct: {
        find(selector?: Mongo.Selector | Mongo.ObjectID | string, options?: {
          sort?: Mongo.SortSpecifier;
          skip?: number;
          limit?: number;
          fields?: Mongo.FieldSpecifier;
          reactive?: boolean;
          transform?: (doc: any) => void;
        }): Mongo.Cursor<T>;
        findOne(selector?: Mongo.Selector | Mongo.ObjectID | string, options?: {
          sort?: Mongo.SortSpecifier;
          skip?: number;
          fields?: Mongo.FieldSpecifier;
          reactive?: boolean;
          transform?: (doc: any) => void;
        }): T;
        insert(
          doc: T,
          callback?: () => void
        ): string;
        remove(
          selector: Mongo.Selector | Mongo.ObjectID | string, callback?: () => void
        ): number;
        update(
          selector: Mongo.Selector | Mongo.ObjectID | string, modifier: Mongo.Modifier, options?: {
            multi?: boolean;
            upsert?: boolean;
          },
          callback?: () => void
        ): number;
        upsert(
          selector: Mongo.Selector | Mongo.ObjectID | string, modifier: Mongo.Modifier, options?: {
            multi?: boolean;
          },
          callback?: () => void
        ): { numberAffected?: number; insertedId?: string; };
      };
      hookOptions: CollectionHooks.GlobalHookOptions;
    }
  }

  namespace CollectionHooks {
    interface ModifierOptions {
      multi?: boolean;
      upsert?: boolean;
    }

    interface HookOptionValue {
      fetchPrevious?: boolean;
    }

    interface LocalHookOptions {
      all?: HookOptionValue;
      find?: HookOptionValue;
      findOne?: HookOptionValue;
      insert?: HookOptionValue;
      remove?: HookOptionValue;
      update?: HookOptionValue;
      upsert?: HookOptionValue;
    }

    interface GlobalHookOptions {
      before?: LocalHookOptions;
      after?: LocalHookOptions;
      all?: LocalHookOptions;
    }
  }
}
