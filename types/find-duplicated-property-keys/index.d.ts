/**
 * A package for detecting all duplicated property keys of a JSON string.
 * It can either be used as a standalone tool for validating JSON files or as a submodule for other Node.js projects.
 */
declare function findDuplicatedPropertyKeys(content: string): findDuplicatedPropertyKeys.PropertyInfo[];

declare namespace findDuplicatedPropertyKeys {
    interface PropertyInfo {
        /**
         *  The key name of the duplicated property
         */
        key: string;

        /**
         * The parent object of a property key
         */
        parent: PropertyInfo;

        /**
         * The number of property keys having the same key and parent object
         */

        occurrence: number;

        /**
         * Returns a list of property keys, which represents the path to the property key of the current object.
         */
        propertyPath(): string[];

        /**
         * Prints the path to the property key. However, since all necessary raw data are also contained by the object,
         * the result objects can also be represented in any other way if desired.
         */
        toString(): string;
    }
}

export = findDuplicatedPropertyKeys;
