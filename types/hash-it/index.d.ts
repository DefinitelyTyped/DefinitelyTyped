// Type definitions for hash-it 4.0
// Project: https://github.com/planttheidea/hash-it
// Definitions by: Eric Gonzalez <https://github.com/lochiego>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// Documentation based on: https://github.com/planttheidea/hash-it

export default hash;

/**
 * hash the value passed to a unique, consistent hash value
 *
 * @param value the value to hash
 * @returns the object hash
 */
export function hash(object: any): number;

export namespace hash {
    /**
     * create a comparator for the object passed to determine if a second is equal
     *
     * @param object the object to test against
     * @returns the method to test against the object
     */
    function is(object: any): (anotherObject: any) => boolean;

    /**
     * create a comparator for the first object passed to determine if the second is equal
     *
     * @param object the object to test against
     * @param anotherObject the object to compare
     * @returns are the objects equal
     */
    function is(object: any, anotherObject: any): boolean;

    namespace is {
        type Comparator = (...objects: any[]) => boolean;

        /**
         * create a comparator to determine if all of the objects passed are equal in value to the initial
         *
         * @param object the object to test for equality
         * @returns comparator function that checks if all objects equal the initial
         */
        function all(object: any): Comparator;

        /**
         * determine if all of the objects passed are equal in value to the first
         *
         * @param object the object to test for equality against
         * @param objects the objects to test for equality
         * @returns are the objects equal
         */
        function all(object: any, ...objects: any[]): boolean;

        /**
         * create a comparator to determine if any objects are equal in value to the initial
         *
         * @param object the object to test for equality
         * @returns comparator function that checks if all the objects equal the initial
         */
        function any(object: any): Comparator;

        /**
         * determine if any of the objects passed are equal in value to the first
         *
         * @param object the object to test for equality against
         * @param objects the objects to test for equality
         * @returns are the objects equal
         */
        function any(object: any, ...args: any[]): boolean;

        /**
         * create a comparator for the first object passed to determine if a second is not equal
         *
         * @param object the object to test against
         * @returns the method to test against the object
         */
        function not(object: any): Comparator;

        /**
         * determine if all of the objects passed are not equal in value to the first
         *
         * @param object the object to test against
         * @param objects the objects to compare
         * @returns are all the objects different from the first
         */
        function not(object: any, ...objects: any[]): boolean;
    }
}
