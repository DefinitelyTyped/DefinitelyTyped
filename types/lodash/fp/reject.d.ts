// AUTO-GENERATED: do not modify this file directly.
// If you need to make changes, modify generate-fp.ts (if necessary), then open a terminal in types/lodash/scripts, and do:
// npm run fp

import _ = require("../index");

declare namespace Lodash {
    interface Reject {
        /**
         * The opposite of _.filter; this method returns the elements of collection that predicate does not return
         * truthy for.
         *
         * @param collection The collection to iterate over.
         * @param predicate The function invoked per iteration.
         * @param thisArg The this binding of predicate.
         * @return Returns the new filtered array.
         */
        (): Reject;
        /**
         * The opposite of _.filter; this method returns the elements of collection that predicate does not return
         * truthy for.
         *
         * @param collection The collection to iterate over.
         * @param predicate The function invoked per iteration.
         * @param thisArg The this binding of predicate.
         * @return Returns the new filtered array.
         */
        (predicate: (value: string) => boolean): Reject1x1;
        /**
         * The opposite of _.filter; this method returns the elements of collection that predicate does not return
         * truthy for.
         *
         * @param collection The collection to iterate over.
         * @param predicate The function invoked per iteration.
         * @param thisArg The this binding of predicate.
         * @return Returns the new filtered array.
         */
        (predicate: (value: string) => boolean, collection: string | null | undefined): string[];
        /**
         * The opposite of _.filter; this method returns the elements of collection that predicate does not return
         * truthy for.
         *
         * @param collection The collection to iterate over.
         * @param predicate The function invoked per iteration.
         * @param thisArg The this binding of predicate.
         * @return Returns the new filtered array.
         */
        <T>(predicate: _.ValueIterateeCustom<T, boolean>): Reject2x1<T>;
        /**
         * The opposite of _.filter; this method returns the elements of collection that predicate does not return
         * truthy for.
         *
         * @param collection The collection to iterate over.
         * @param predicate The function invoked per iteration.
         * @param thisArg The this binding of predicate.
         * @return Returns the new filtered array.
         */
        <T>(predicate: _.ValueIterateeCustom<T, boolean>, collection: _.List<T> | null | undefined): T[];
        /**
         * The opposite of _.filter; this method returns the elements of collection that predicate does not return
         * truthy for.
         *
         * @param collection The collection to iterate over.
         * @param predicate The function invoked per iteration.
         * @param thisArg The this binding of predicate.
         * @return Returns the new filtered array.
         */
        <T extends object>(predicate: _.ValueIterateeCustom<T[keyof T], boolean>, collection: T | null | undefined): Array<T[keyof T]>;
    }
    interface Reject1x1 {
        /**
         * The opposite of _.filter; this method returns the elements of collection that predicate does not return
         * truthy for.
         *
         * @param collection The collection to iterate over.
         * @param predicate The function invoked per iteration.
         * @param thisArg The this binding of predicate.
         * @return Returns the new filtered array.
         */
        (): Reject1x1;
        /**
         * The opposite of _.filter; this method returns the elements of collection that predicate does not return
         * truthy for.
         *
         * @param collection The collection to iterate over.
         * @param predicate The function invoked per iteration.
         * @param thisArg The this binding of predicate.
         * @return Returns the new filtered array.
         */
        (collection: string | null | undefined): string[];
    }
    interface Reject2x1<T> {
        /**
         * The opposite of _.filter; this method returns the elements of collection that predicate does not return
         * truthy for.
         *
         * @param collection The collection to iterate over.
         * @param predicate The function invoked per iteration.
         * @param thisArg The this binding of predicate.
         * @return Returns the new filtered array.
         */
        (): Reject2x1<T>;
        /**
         * The opposite of _.filter; this method returns the elements of collection that predicate does not return
         * truthy for.
         *
         * @param collection The collection to iterate over.
         * @param predicate The function invoked per iteration.
         * @param thisArg The this binding of predicate.
         * @return Returns the new filtered array.
         */
        (collection: _.List<T> | null | undefined): T[];
        /**
         * The opposite of _.filter; this method returns the elements of collection that predicate does not return
         * truthy for.
         *
         * @param collection The collection to iterate over.
         * @param predicate The function invoked per iteration.
         * @param thisArg The this binding of predicate.
         * @return Returns the new filtered array.
         */
        (collection: object | null | undefined): Array<T[keyof T]>;
    }
}

declare const reject: Lodash.Reject;
export = reject;
