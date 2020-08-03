import { Helpers, Full, Data } from 'meteor/dburles:collection-helpers';
import { Mongo } from 'meteor/mongo';
// tslint:disable-next-line no-single-declare-module

// CollectionStatic, Collection.find, and Collection.findOne are pulled from https://github.com/DefinitelyTyped/DefinitelyTyped/blob/master/types/meteor/mongo.d.ts
// and should be kept in sync with any changes to it

declare module 'meteor/mongo' {
    namespace Mongo {
        // tslint:disable-next-line no-var-keyword
        var Collection: CollectionStatic;
        interface CollectionStatic {
            // modifications: return type Collection<T> -> Collection<Data<T>>
            new <T>(
                name: string | null,
                options?: {
                    // using Object because @types/meteor still uses it here
                    // tslint:disable-next-line ban-types
                    connection?: Object | null;
                    idGeneration?: string;
                    // ditto for Function
                    // tslint:disable-next-line ban-types
                    transform?: Function | null;
                },
            // this is a collection type
            // tslint:disable-next-line no-unnecessary-generics
            ): Collection<Data<T>>;
        }
        interface Collection<T> {
            /**
             * Provide the definitions here for the methods and Helper<T>s you declared on your item interface.
             * Tip: If you make those properties non-optional, they still won't be required when inserting items,
             * but you'll know that any object of your interface type has them.
             * Alternatively, if they're marked optional on your interface, they'll still be guaranteed on any
             * object you get out of the collection.
             * If you plan to pass around and create a lot of items pre-insertion, make them optional and use Full<T>
             * for ones with helpers attached.
             * If you plan to mostly pass around items that came out of a collection, make them required and use Data<T>
             * when creating new items.
             */
            helpers(helpers: Helpers<T>): void;

            // modifications: replaced T in return type with Full<T>

            find(
                selector?: Selector<T> | ObjectID | string,
                options?: {
                    sort?: SortSpecifier;
                    skip?: number;
                    limit?: number;
                    fields?: FieldSpecifier;
                    reactive?: boolean;
                    // ditto
                    // tslint:disable-next-line ban-types
                    transform?: Function | null;
                },
            ): Cursor<Full<T>>;
            findOne(
                selector?: Selector<T> | ObjectID | string,
                options?: {
                    sort?: SortSpecifier;
                    skip?: number;
                    fields?: FieldSpecifier;
                    reactive?: boolean;
                    // ditto
                    // tslint:disable-next-line ban-types
                    transform?: Function | null;
                },
            ): Full<T> | undefined;
        }
    }
}
