// This file was auto-generated. Please do not edit it.

import * as p5 from '../../index';

declare module '../../index' {
    class TypedDict {
        /**
         *   Returns the number of key-value pairs currently
         *   stored in the Dictionary.
         *   @return the number of key-value pairs in the
         *   Dictionary
         */
        size(): number;

        /**
         *   Returns true if the given key exists in the
         *   Dictionary, otherwise returns false.
         *   @param key that you want to look up
         *   @return whether that key exists in Dictionary
         */
        hasKey(key: number | string): boolean;

        /**
         *   Returns the value stored at the given key.
         *   @param the key you want to access
         *   @return the value stored at that key
         */
        get(the: number | string): number | string;

        /**
         *   Updates the value associated with the given key in
         *   case it already exists in the Dictionary.
         *   Otherwise a new key-value pair is added.
         */
        set(key: number | string, value: number | string): void;

        /**
         *   Creates a new key-value pair in the Dictionary.
         */
        create(key: number | string, value: number | string): void;

        /**
         *   Creates a new key-value pair in the Dictionary.
         *   @param obj key/value pair
         */
        create(obj: object): void;

        /**
         *   Removes all previously stored key-value pairs from
         *   the Dictionary.
         */
        clear(): void;

        /**
         *   Removes the key-value pair stored at the given key
         *   from the Dictionary.
         *   @param key for the pair to remove
         */
        remove(key: number | string): void;

        /**
         *   Logs the set of items currently stored in the
         *   Dictionary to the console.
         */
        print(): void;

        /**
         *   Converts the Dictionary into a CSV file for local
         *   download.
         */
        saveTable(): void;

        /**
         *   Converts the Dictionary into a JSON file for local
         *   download.
         */
        saveJSON(): void;
    }
    class NumberDict extends TypedDict {
        /**
         *   Add the given number to the value currently stored
         *   at the given key. The sum then replaces the value
         *   previously stored in the Dictionary.
         *   @param Key for the value you wish to add to
         *   @param Number to add to the value
         */
        add(Key: number, Number: number): void;

        /**
         *   Subtract the given number from the value currently
         *   stored at the given key. The difference then
         *   replaces the value previously stored in the
         *   Dictionary.
         *   @param Key for the value you wish to subtract from
         *   @param Number to subtract from the value
         */
        sub(Key: number, Number: number): void;

        /**
         *   Multiply the given number with the value currently
         *   stored at the given key. The product then replaces
         *   the value previously stored in the Dictionary.
         *   @param Key for value you wish to multiply
         *   @param Amount to multiply the value by
         */
        mult(Key: number, Amount: number): void;

        /**
         *   Divide the given number with the value currently
         *   stored at the given key. The quotient then
         *   replaces the value previously stored in the
         *   Dictionary.
         *   @param Key for value you wish to divide
         *   @param Amount to divide the value by
         */
        div(Key: number, Amount: number): void;

        /**
         *   Return the lowest number currently stored in the
         *   Dictionary.
         */
        minValue(): number;

        /**
         *   Return the highest number currently stored in the
         *   Dictionary.
         */
        maxValue(): number;

        /**
         *   Return the lowest key currently used in the
         *   Dictionary.
         */
        minKey(): number;

        /**
         *   Return the highest key currently used in the
         *   Dictionary.
         */
        maxKey(): number;
    }
    class StringDict extends TypedDict {}
    interface p5InstanceExtensions {
        /**
         *   Creates a new instance of p5.StringDict using the
         *   key-value pair or the object you provide.
         */
        createStringDict(key: string, value: string): StringDict;

        /**
         *   Creates a new instance of p5.StringDict using the
         *   key-value pair or the object you provide.
         *   @param object object
         */
        createStringDict(object: object): StringDict;

        /**
         *   Creates a new instance of p5.NumberDict using the
         *   key-value pair or object you provide.
         */
        createNumberDict(key: number, value: number): NumberDict;

        /**
         *   Creates a new instance of p5.NumberDict using the
         *   key-value pair or object you provide.
         *   @param object object
         */
        createNumberDict(object: object): NumberDict;
    }
}
