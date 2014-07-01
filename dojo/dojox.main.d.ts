// Type definitions for Dojo v1.9
// Project: http://dojotoolkit.org
// Definitions by: Michael Van Sickle <https://github.com/vansimke>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/// <reference path="dojox.gfx.d.ts" />
/// <reference path="dojox.date.d.ts" />
declare module dojox {

    /**
     * Permalink: http://dojotoolkit.org/api/1.9/dojox/main.html
     *
     * The dojox package main module; dojox package is somewhat unusual in that the main module currently just provides an empty object.
     * Apps should require modules from the dojox packages directly, rather than loading this module.
     * 
     */
    interface main {
        /**
         * 
         */
        buddhist: Object;
        /**
         * 
         */
        charting: Object;
        /**
         * 
         */
        data: Object;
        /**
         * 
         */
        functional: Object;
        /**
         * 
         */
        gesture: Object;
        /**
         * 
         */
        grid: Object;
        /**
         * 
         */
        hebrew: Object;
        /**
         * 
         */
        highlight: Object;
        /**
         * 
         */
        image: Object;
        /**
         * 
         */
        islamic: Object;
        /**
         * 
         */
        json: Object;
        /**
         * 
         */
        languages: Object;
        /**
         * 
         */
        math: Object;
        /**
         * 
         */
        persian: Object;
        /**
         * 
         */
        regexp: Object;
        /**
         * 
         */
        relative: Object;
        /**
         * 
         */
        rpc: Object;
        /**
         * 
         */
        umalqura: Object;
        /**
         * 
         */
        util: Object;
        /**
         * 
         */
        utils: Object;
        /**
         * 
         */
        validate: Object;
    }
    module main {
        /**
         * Permalink: http://dojotoolkit.org/api/1.9/dojox/main.charting.html
         *
         * 
         */
        interface charting {
            /**
             * Hides the tooltip displayed around the given shape.
             * 
             * @param gfxObject A gfx shape.             
             */
            hideTooltip(gfxObject: dojox.gfx.shape.Shape): void;
            /**
             * Show a Tooltip displaying the given HTML message around the given gfx shape.
             * 
             * @param innerHTML The message to display as a HTML string.             
             * @param gfxObject The gfx shape around which the tooltip will be placed.             
             * @param positions               Optional            
             */
            showTooltip(innerHTML: String, gfxObject: dojox.gfx.shape.Shape, positions: String[]): void;
        }
        /**
         * Permalink: http://dojotoolkit.org/api/1.9/dojox/main.islamic.html
         *
         * 
         */
        interface islamic {
            /**
             * 
             */
            locale: Object;
            /**
             * Add to a Date in intervals of different size, from milliseconds to years
             * 
             * @param date Date object to start with             
             * @param interval A string representing the interval.  One of the following:"year", "month", "day", "hour", "minute", "second","millisecond", "week", "weekday"             
             * @param amount How much to add to the date.             
             */
            add(date: dojox.date.islamic.Date, interval: String, amount: number): void;
            /**
             * Compare two islamic date objects by date, time, or both.
             * Returns 0 if equal, positive if a > b, else negative.
             * 
             * @param date1             
             * @param date2 If not specified, the current islamic.Date is used.             
             * @param portion               OptionalA string indicating the "date" or "time" portion of a Date object.Compares both "date" and "time" by default.  One of the following:"date", "time", "datetime"             
             */
            compare(date1: dojox.date.islamic.Date, date2: dojox.date.islamic.Date, portion: String): void;
            /**
             * date2 - date1
             * 
             * @param date1             
             * @param date2               OptionalIf not specified, the current dojox.date.islamic.Date is used.             
             * @param interval               OptionalA string representing the interval.  One of the following:"year", "month", "day", "hour", "minute", "second","millisecond",  "week", "weekday"Defaults to "day".             
             */
            difference(date1: dojox.date.islamic.Date, date2: dojox.date.islamic.Date, interval: String): void;
            /**
             * 
             * @param month             
             */
            getDaysInMonth(month: dojox.date.islamic.Date): void;
        }
        /**
         * Permalink: http://dojotoolkit.org/api/1.9/dojox/main.languages.html
         *
         * 
         */
        interface languages {
            /**
             * 
             */
            pygments: Object;
        }
        /**
         * Permalink: http://dojotoolkit.org/api/1.9/dojox/main.functional.html
         *
         * 
         */
        interface functional {
            /**
             * builds a function from a snippet, returns a string, which
             * represents the function.
             * This method returns a textual representation of a function
             * built from the snippet. It is meant to be evaled in the
             * proper context, so local variables can be pulled from the
             * environment.
             * 
             * @param s             
             */
            buildLambda(s: String): String;
            /**
             * clears internal cache of lambdas
             * 
             */
            clearLambdaCache(): void;
            /**
             * tests whether all elements in the array pass the test
             * implemented by the provided function.
             * 
             * @param a             
             * @param f             
             * @param o               Optional            
             */
            every(a: any[], f: Function, o: Object): boolean;
            /**
             * tests whether all elements in the array pass the test
             * implemented by the provided function.
             * 
             * @param a             
             * @param f             
             * @param o               Optional            
             */
            every(a: String, f: Function, o: Object): boolean;
            /**
             * tests whether all elements in the array pass the test
             * implemented by the provided function.
             * 
             * @param a             
             * @param f             
             * @param o               Optional            
             */
            every(a: Object, f: Function, o: Object): boolean;
            /**
             * tests whether all elements in the array pass the test
             * implemented by the provided function.
             * 
             * @param a             
             * @param f             
             * @param o               Optional            
             */
            every(a: any[], f: String, o: Object): boolean;
            /**
             * tests whether all elements in the array pass the test
             * implemented by the provided function.
             * 
             * @param a             
             * @param f             
             * @param o               Optional            
             */
            every(a: String, f: String, o: Object): boolean;
            /**
             * tests whether all elements in the array pass the test
             * implemented by the provided function.
             * 
             * @param a             
             * @param f             
             * @param o               Optional            
             */
            every(a: Object, f: String, o: Object): boolean;
            /**
             * tests whether all elements in the array pass the test
             * implemented by the provided function.
             * 
             * @param a             
             * @param f             
             * @param o               Optional            
             */
            every(a: any[], f: any[], o: Object): boolean;
            /**
             * tests whether all elements in the array pass the test
             * implemented by the provided function.
             * 
             * @param a             
             * @param f             
             * @param o               Optional            
             */
            every(a: String, f: any[], o: Object): boolean;
            /**
             * tests whether all elements in the array pass the test
             * implemented by the provided function.
             * 
             * @param a             
             * @param f             
             * @param o               Optional            
             */
            every(a: Object, f: any[], o: Object): boolean;
            /**
             * tests whether all elements in the array pass the test
             * implemented by the provided function.
             * 
             * @param a             
             * @param f             
             * @param o               Optional            
             */
            everyRev(a: any[], f: Function, o: Object): boolean;
            /**
             * tests whether all elements in the array pass the test
             * implemented by the provided function.
             * 
             * @param a             
             * @param f             
             * @param o               Optional            
             */
            everyRev(a: String, f: Function, o: Object): boolean;
            /**
             * tests whether all elements in the array pass the test
             * implemented by the provided function.
             * 
             * @param a             
             * @param f             
             * @param o               Optional            
             */
            everyRev(a: any[], f: String, o: Object): boolean;
            /**
             * tests whether all elements in the array pass the test
             * implemented by the provided function.
             * 
             * @param a             
             * @param f             
             * @param o               Optional            
             */
            everyRev(a: String, f: String, o: Object): boolean;
            /**
             * tests whether all elements in the array pass the test
             * implemented by the provided function.
             * 
             * @param a             
             * @param f             
             * @param o               Optional            
             */
            everyRev(a: any[], f: any[], o: Object): boolean;
            /**
             * tests whether all elements in the array pass the test
             * implemented by the provided function.
             * 
             * @param a             
             * @param f             
             * @param o               Optional            
             */
            everyRev(a: String, f: any[], o: Object): boolean;
            /**
             * creates a new array with all elements that pass the test
             * implemented by the provided function.
             * 
             * @param a             
             * @param f             
             * @param o               Optional            
             */
            filter(a: any[], f: Function, o: Object): any[];
            /**
             * creates a new array with all elements that pass the test
             * implemented by the provided function.
             * 
             * @param a             
             * @param f             
             * @param o               Optional            
             */
            filter(a: String, f: Function, o: Object): any[];
            /**
             * creates a new array with all elements that pass the test
             * implemented by the provided function.
             * 
             * @param a             
             * @param f             
             * @param o               Optional            
             */
            filter(a: Object, f: Function, o: Object): any[];
            /**
             * creates a new array with all elements that pass the test
             * implemented by the provided function.
             * 
             * @param a             
             * @param f             
             * @param o               Optional            
             */
            filter(a: any[], f: String, o: Object): any[];
            /**
             * creates a new array with all elements that pass the test
             * implemented by the provided function.
             * 
             * @param a             
             * @param f             
             * @param o               Optional            
             */
            filter(a: String, f: String, o: Object): any[];
            /**
             * creates a new array with all elements that pass the test
             * implemented by the provided function.
             * 
             * @param a             
             * @param f             
             * @param o               Optional            
             */
            filter(a: Object, f: String, o: Object): any[];
            /**
             * creates a new array with all elements that pass the test
             * implemented by the provided function.
             * 
             * @param a             
             * @param f             
             * @param o               Optional            
             */
            filter(a: any[], f: any[], o: Object): any[];
            /**
             * creates a new array with all elements that pass the test
             * implemented by the provided function.
             * 
             * @param a             
             * @param f             
             * @param o               Optional            
             */
            filter(a: String, f: any[], o: Object): any[];
            /**
             * creates a new array with all elements that pass the test
             * implemented by the provided function.
             * 
             * @param a             
             * @param f             
             * @param o               Optional            
             */
            filter(a: Object, f: any[], o: Object): any[];
            /**
             * creates new object with all attributes that pass the test
             * implemented by the provided function.
             * 
             * @param obj             
             * @param f             
             * @param o               Optional            
             */
            filterIn(obj: Object, f: Function, o: Object): Object;
            /**
             * creates new object with all attributes that pass the test
             * implemented by the provided function.
             * 
             * @param obj             
             * @param f             
             * @param o               Optional            
             */
            filterIn(obj: Object, f: String, o: Object): Object;
            /**
             * creates new object with all attributes that pass the test
             * implemented by the provided function.
             * 
             * @param obj             
             * @param f             
             * @param o               Optional            
             */
            filterIn(obj: Object, f: any[], o: Object): Object;
            /**
             * creates a new array with all elements that pass the test
             * implemented by the provided function.
             * 
             * @param a             
             * @param f             
             * @param o               Optional            
             */
            filterRev(a: any[], f: Function, o: Object): any[];
            /**
             * creates a new array with all elements that pass the test
             * implemented by the provided function.
             * 
             * @param a             
             * @param f             
             * @param o               Optional            
             */
            filterRev(a: String, f: Function, o: Object): any[];
            /**
             * creates a new array with all elements that pass the test
             * implemented by the provided function.
             * 
             * @param a             
             * @param f             
             * @param o               Optional            
             */
            filterRev(a: any[], f: String, o: Object): any[];
            /**
             * creates a new array with all elements that pass the test
             * implemented by the provided function.
             * 
             * @param a             
             * @param f             
             * @param o               Optional            
             */
            filterRev(a: String, f: String, o: Object): any[];
            /**
             * creates a new array with all elements that pass the test
             * implemented by the provided function.
             * 
             * @param a             
             * @param f             
             * @param o               Optional            
             */
            filterRev(a: any[], f: any[], o: Object): any[];
            /**
             * creates a new array with all elements that pass the test
             * implemented by the provided function.
             * 
             * @param a             
             * @param f             
             * @param o               Optional            
             */
            filterRev(a: String, f: any[], o: Object): any[];
            /**
             * repeatedly applies a binary function to an array from left
             * to right using a seed value as a starting point; returns the final
             * value.
             * 
             * @param a             
             * @param f             
             * @param z             
             * @param o               Optional            
             */
            foldl(a: any[], f: Function, z: Object, o: Object): any;
            /**
             * repeatedly applies a binary function to an array from left
             * to right using a seed value as a starting point; returns the final
             * value.
             * 
             * @param a             
             * @param f             
             * @param z             
             * @param o               Optional            
             */
            foldl(a: String, f: Function, z: Object, o: Object): any;
            /**
             * repeatedly applies a binary function to an array from left
             * to right using a seed value as a starting point; returns the final
             * value.
             * 
             * @param a             
             * @param f             
             * @param z             
             * @param o               Optional            
             */
            foldl(a: Object, f: Function, z: Object, o: Object): any;
            /**
             * repeatedly applies a binary function to an array from left
             * to right; returns the final value.
             * 
             * @param a             
             * @param f             
             * @param o               Optional            
             */
            foldl1(a: any[], f: Function, o: Object): any;
            /**
             * repeatedly applies a binary function to an array from left
             * to right; returns the final value.
             * 
             * @param a             
             * @param f             
             * @param o               Optional            
             */
            foldl1(a: String, f: Function, o: Object): any;
            /**
             * repeatedly applies a binary function to an array from left
             * to right; returns the final value.
             * 
             * @param a             
             * @param f             
             * @param o               Optional            
             */
            foldl1(a: Object, f: Function, o: Object): any;
            /**
             * repeatedly applies a binary function to an array from left
             * to right; returns the final value.
             * 
             * @param a             
             * @param f             
             * @param o               Optional            
             */
            foldl1(a: any[], f: String, o: Object): any;
            /**
             * repeatedly applies a binary function to an array from left
             * to right; returns the final value.
             * 
             * @param a             
             * @param f             
             * @param o               Optional            
             */
            foldl1(a: String, f: String, o: Object): any;
            /**
             * repeatedly applies a binary function to an array from left
             * to right; returns the final value.
             * 
             * @param a             
             * @param f             
             * @param o               Optional            
             */
            foldl1(a: Object, f: String, o: Object): any;
            /**
             * repeatedly applies a binary function to an array from left
             * to right; returns the final value.
             * 
             * @param a             
             * @param f             
             * @param o               Optional            
             */
            foldl1(a: any[], f: any[], o: Object): any;
            /**
             * repeatedly applies a binary function to an array from left
             * to right; returns the final value.
             * 
             * @param a             
             * @param f             
             * @param o               Optional            
             */
            foldl1(a: String, f: any[], o: Object): any;
            /**
             * repeatedly applies a binary function to an array from left
             * to right; returns the final value.
             * 
             * @param a             
             * @param f             
             * @param o               Optional            
             */
            foldl1(a: Object, f: any[], o: Object): any;
            /**
             * repeatedly applies a binary function to an array from right
             * to left using a seed value as a starting point; returns the final
             * value.
             * 
             * @param a             
             * @param f             
             * @param z             
             * @param o               Optional            
             */
            foldr(a: any[], f: Function, z: Object, o: Object): Object;
            /**
             * repeatedly applies a binary function to an array from right
             * to left using a seed value as a starting point; returns the final
             * value.
             * 
             * @param a             
             * @param f             
             * @param z             
             * @param o               Optional            
             */
            foldr(a: String, f: Function, z: Object, o: Object): Object;
            /**
             * repeatedly applies a binary function to an array from right
             * to left using a seed value as a starting point; returns the final
             * value.
             * 
             * @param a             
             * @param f             
             * @param z             
             * @param o               Optional            
             */
            foldr(a: any[], f: String, z: Object, o: Object): Object;
            /**
             * repeatedly applies a binary function to an array from right
             * to left using a seed value as a starting point; returns the final
             * value.
             * 
             * @param a             
             * @param f             
             * @param z             
             * @param o               Optional            
             */
            foldr(a: String, f: String, z: Object, o: Object): Object;
            /**
             * repeatedly applies a binary function to an array from right
             * to left using a seed value as a starting point; returns the final
             * value.
             * 
             * @param a             
             * @param f             
             * @param z             
             * @param o               Optional            
             */
            foldr(a: any[], f: any[], z: Object, o: Object): Object;
            /**
             * repeatedly applies a binary function to an array from right
             * to left using a seed value as a starting point; returns the final
             * value.
             * 
             * @param a             
             * @param f             
             * @param z             
             * @param o               Optional            
             */
            foldr(a: String, f: any[], z: Object, o: Object): Object;
            /**
             * repeatedly applies a binary function to an array from right
             * to left; returns the final value.
             * 
             * @param a             
             * @param f             
             * @param o               Optional            
             */
            foldr1(a: any[], f: Function, o: Object): any;
            /**
             * repeatedly applies a binary function to an array from right
             * to left; returns the final value.
             * 
             * @param a             
             * @param f             
             * @param o               Optional            
             */
            foldr1(a: String, f: Function, o: Object): any;
            /**
             * repeatedly applies a binary function to an array from right
             * to left; returns the final value.
             * 
             * @param a             
             * @param f             
             * @param o               Optional            
             */
            foldr1(a: any[], f: String, o: Object): any;
            /**
             * repeatedly applies a binary function to an array from right
             * to left; returns the final value.
             * 
             * @param a             
             * @param f             
             * @param o               Optional            
             */
            foldr1(a: String, f: String, o: Object): any;
            /**
             * repeatedly applies a binary function to an array from right
             * to left; returns the final value.
             * 
             * @param a             
             * @param f             
             * @param o               Optional            
             */
            foldr1(a: any[], f: any[], o: Object): any;
            /**
             * repeatedly applies a binary function to an array from right
             * to left; returns the final value.
             * 
             * @param a             
             * @param f             
             * @param o               Optional            
             */
            foldr1(a: String, f: any[], o: Object): any;
            /**
             * executes a provided function once per array element.
             * 
             * @param a             
             * @param f             
             * @param o               Optional            
             */
            forEach(a: any[], f: Function, o: Object): String;
            /**
             * executes a provided function once per array element.
             * 
             * @param a             
             * @param f             
             * @param o               Optional            
             */
            forEach(a: String, f: Function, o: Object): String;
            /**
             * executes a provided function once per array element.
             * 
             * @param a             
             * @param f             
             * @param o               Optional            
             */
            forEach(a: Object, f: Function, o: Object): String;
            /**
             * executes a provided function once per array element.
             * 
             * @param a             
             * @param f             
             * @param o               Optional            
             */
            forEach(a: any[], f: String, o: Object): String;
            /**
             * executes a provided function once per array element.
             * 
             * @param a             
             * @param f             
             * @param o               Optional            
             */
            forEach(a: String, f: String, o: Object): String;
            /**
             * executes a provided function once per array element.
             * 
             * @param a             
             * @param f             
             * @param o               Optional            
             */
            forEach(a: Object, f: String, o: Object): String;
            /**
             * executes a provided function once per array element.
             * 
             * @param a             
             * @param f             
             * @param o               Optional            
             */
            forEach(a: any[], f: any[], o: Object): String;
            /**
             * executes a provided function once per array element.
             * 
             * @param a             
             * @param f             
             * @param o               Optional            
             */
            forEach(a: String, f: any[], o: Object): String;
            /**
             * executes a provided function once per array element.
             * 
             * @param a             
             * @param f             
             * @param o               Optional            
             */
            forEach(a: Object, f: any[], o: Object): String;
            /**
             * executes a provided function once per array element.
             * 
             * @param a             
             * @param f             
             * @param o               Optional            
             */
            forEachRev(a: any[], f: Function, o: Object): void;
            /**
             * executes a provided function once per array element.
             * 
             * @param a             
             * @param f             
             * @param o               Optional            
             */
            forEachRev(a: String, f: Function, o: Object): void;
            /**
             * executes a provided function once per array element.
             * 
             * @param a             
             * @param f             
             * @param o               Optional            
             */
            forEachRev(a: any[], f: String, o: Object): void;
            /**
             * executes a provided function once per array element.
             * 
             * @param a             
             * @param f             
             * @param o               Optional            
             */
            forEachRev(a: String, f: String, o: Object): void;
            /**
             * executes a provided function once per array element.
             * 
             * @param a             
             * @param f             
             * @param o               Optional            
             */
            forEachRev(a: any[], f: any[], o: Object): void;
            /**
             * executes a provided function once per array element.
             * 
             * @param a             
             * @param f             
             * @param o               Optional            
             */
            forEachRev(a: String, f: any[], o: Object): void;
            /**
             * iterates over all object attributes.
             * 
             * @param obj             
             * @param f             
             * @param o               Optional            
             */
            forIn(obj: Object, f: Function, o: Object): String;
            /**
             * iterates over all object attributes.
             * 
             * @param obj             
             * @param f             
             * @param o               Optional            
             */
            forIn(obj: Object, f: String, o: Object): String;
            /**
             * iterates over all object attributes.
             * 
             * @param obj             
             * @param f             
             * @param o               Optional            
             */
            forIn(obj: Object, f: any[], o: Object): String;
            /**
             * returns an array of all keys in the object
             * 
             * @param obj             
             */
            keys(obj: Object): any[];
            /**
             * builds a function from a snippet, or array (composing),
             * returns a function object; functions are passed through
             * unmodified.
             * This method is used to normalize a functional
             * representation (a text snippet, an array, or a function) to
             * a function object.
             * 
             * @param s             
             */
            lambda(s: Function): Function;
            /**
             * builds a function from a snippet, or array (composing),
             * returns a function object; functions are passed through
             * unmodified.
             * This method is used to normalize a functional
             * representation (a text snippet, an array, or a function) to
             * a function object.
             * 
             * @param s             
             */
            lambda(s: String): Function;
            /**
             * builds a function from a snippet, or array (composing),
             * returns a function object; functions are passed through
             * unmodified.
             * This method is used to normalize a functional
             * representation (a text snippet, an array, or a function) to
             * a function object.
             * 
             * @param s             
             */
            lambda(s: any[]): Function;
            /**
             * creates a new array with the results of calling
             * a provided function on every element in this array.
             * 
             * @param a             
             * @param f             
             * @param o               Optional            
             */
            map(a: any[], f: Function, o: Object): any[];
            /**
             * creates a new array with the results of calling
             * a provided function on every element in this array.
             * 
             * @param a             
             * @param f             
             * @param o               Optional            
             */
            map(a: String, f: Function, o: Object): any[];
            /**
             * creates a new array with the results of calling
             * a provided function on every element in this array.
             * 
             * @param a             
             * @param f             
             * @param o               Optional            
             */
            map(a: Object, f: Function, o: Object): any[];
            /**
             * creates a new array with the results of calling
             * a provided function on every element in this array.
             * 
             * @param a             
             * @param f             
             * @param o               Optional            
             */
            map(a: any[], f: String, o: Object): any[];
            /**
             * creates a new array with the results of calling
             * a provided function on every element in this array.
             * 
             * @param a             
             * @param f             
             * @param o               Optional            
             */
            map(a: String, f: String, o: Object): any[];
            /**
             * creates a new array with the results of calling
             * a provided function on every element in this array.
             * 
             * @param a             
             * @param f             
             * @param o               Optional            
             */
            map(a: Object, f: String, o: Object): any[];
            /**
             * creates a new array with the results of calling
             * a provided function on every element in this array.
             * 
             * @param a             
             * @param f             
             * @param o               Optional            
             */
            map(a: any[], f: any[], o: Object): any[];
            /**
             * creates a new array with the results of calling
             * a provided function on every element in this array.
             * 
             * @param a             
             * @param f             
             * @param o               Optional            
             */
            map(a: String, f: any[], o: Object): any[];
            /**
             * creates a new array with the results of calling
             * a provided function on every element in this array.
             * 
             * @param a             
             * @param f             
             * @param o               Optional            
             */
            map(a: Object, f: any[], o: Object): any[];
            /**
             * creates new object with the results of calling
             * a provided function on every attribute in this object.
             * 
             * @param obj             
             * @param f             
             * @param o               Optional            
             */
            mapIn(obj: Object, f: Function, o: Object): Object;
            /**
             * creates new object with the results of calling
             * a provided function on every attribute in this object.
             * 
             * @param obj             
             * @param f             
             * @param o               Optional            
             */
            mapIn(obj: Object, f: String, o: Object): Object;
            /**
             * creates new object with the results of calling
             * a provided function on every attribute in this object.
             * 
             * @param obj             
             * @param f             
             * @param o               Optional            
             */
            mapIn(obj: Object, f: any[], o: Object): Object;
            /**
             * creates a new array with the results of calling
             * a provided function on every element in this array.
             * 
             * @param a             
             * @param f             
             * @param o               Optional            
             */
            mapRev(a: any[], f: Function, o: Object): any;
            /**
             * creates a new array with the results of calling
             * a provided function on every element in this array.
             * 
             * @param a             
             * @param f             
             * @param o               Optional            
             */
            mapRev(a: String, f: Function, o: Object): any;
            /**
             * creates a new array with the results of calling
             * a provided function on every element in this array.
             * 
             * @param a             
             * @param f             
             * @param o               Optional            
             */
            mapRev(a: any[], f: String, o: Object): any;
            /**
             * creates a new array with the results of calling
             * a provided function on every element in this array.
             * 
             * @param a             
             * @param f             
             * @param o               Optional            
             */
            mapRev(a: String, f: String, o: Object): any;
            /**
             * creates a new array with the results of calling
             * a provided function on every element in this array.
             * 
             * @param a             
             * @param f             
             * @param o               Optional            
             */
            mapRev(a: any[], f: any[], o: Object): any;
            /**
             * creates a new array with the results of calling
             * a provided function on every element in this array.
             * 
             * @param a             
             * @param f             
             * @param o               Optional            
             */
            mapRev(a: String, f: any[], o: Object): any;
            /**
             * builds a function from a snippet, or array (composing),
             * returns an object describing the function; functions are
             * passed through unmodified.
             * This method is to normalize a functional representation (a
             * text snippet) to an object that contains an array of
             * arguments, and a body , which is used to calculate the
             * returning value.
             * 
             * @param s             
             */
            rawLambda(s: String): any;
            /**
             * apply a function simultaneously against two values of the array
             * (from left-to-right) as to reduce it to a single value.
             * 
             * @param a             
             * @param f             
             * @param z               Optional            
             */
            reduce(a: any[], f: Function, z: Object): any;
            /**
             * apply a function simultaneously against two values of the array
             * (from left-to-right) as to reduce it to a single value.
             * 
             * @param a             
             * @param f             
             * @param z               Optional            
             */
            reduce(a: String, f: Function, z: Object): any;
            /**
             * apply a function simultaneously against two values of the array
             * (from left-to-right) as to reduce it to a single value.
             * 
             * @param a             
             * @param f             
             * @param z               Optional            
             */
            reduce(a: Object, f: Function, z: Object): any;
            /**
             * apply a function simultaneously against two values of the array
             * (from left-to-right) as to reduce it to a single value.
             * 
             * @param a             
             * @param f             
             * @param z               Optional            
             */
            reduce(a: any[], f: String, z: Object): any;
            /**
             * apply a function simultaneously against two values of the array
             * (from left-to-right) as to reduce it to a single value.
             * 
             * @param a             
             * @param f             
             * @param z               Optional            
             */
            reduce(a: String, f: String, z: Object): any;
            /**
             * apply a function simultaneously against two values of the array
             * (from left-to-right) as to reduce it to a single value.
             * 
             * @param a             
             * @param f             
             * @param z               Optional            
             */
            reduce(a: Object, f: String, z: Object): any;
            /**
             * apply a function simultaneously against two values of the array
             * (from left-to-right) as to reduce it to a single value.
             * 
             * @param a             
             * @param f             
             * @param z               Optional            
             */
            reduce(a: any[], f: any[], z: Object): any;
            /**
             * apply a function simultaneously against two values of the array
             * (from left-to-right) as to reduce it to a single value.
             * 
             * @param a             
             * @param f             
             * @param z               Optional            
             */
            reduce(a: String, f: any[], z: Object): any;
            /**
             * apply a function simultaneously against two values of the array
             * (from left-to-right) as to reduce it to a single value.
             * 
             * @param a             
             * @param f             
             * @param z               Optional            
             */
            reduce(a: Object, f: any[], z: Object): any;
            /**
             * apply a function simultaneously against two values of the array
             * (from right-to-left) as to reduce it to a single value.
             * 
             * @param a             
             * @param f             
             * @param z               Optional            
             */
            reduceRight(a: any[], f: Function, z: Object): any;
            /**
             * apply a function simultaneously against two values of the array
             * (from right-to-left) as to reduce it to a single value.
             * 
             * @param a             
             * @param f             
             * @param z               Optional            
             */
            reduceRight(a: String, f: Function, z: Object): any;
            /**
             * apply a function simultaneously against two values of the array
             * (from right-to-left) as to reduce it to a single value.
             * 
             * @param a             
             * @param f             
             * @param z               Optional            
             */
            reduceRight(a: any[], f: String, z: Object): any;
            /**
             * apply a function simultaneously against two values of the array
             * (from right-to-left) as to reduce it to a single value.
             * 
             * @param a             
             * @param f             
             * @param z               Optional            
             */
            reduceRight(a: String, f: String, z: Object): any;
            /**
             * apply a function simultaneously against two values of the array
             * (from right-to-left) as to reduce it to a single value.
             * 
             * @param a             
             * @param f             
             * @param z               Optional            
             */
            reduceRight(a: any[], f: any[], z: Object): any;
            /**
             * apply a function simultaneously against two values of the array
             * (from right-to-left) as to reduce it to a single value.
             * 
             * @param a             
             * @param f             
             * @param z               Optional            
             */
            reduceRight(a: String, f: any[], z: Object): any;
            /**
             * builds an array by repeatedly applying a unary function N times
             * with a seed value Z. N should be greater than 0.
             * 
             * @param n             
             * @param f             
             * @param z             
             * @param o               Optional            
             */
            repeat(n: number, f: Function, z: Object, o: Object): any;
            /**
             * builds an array by repeatedly applying a unary function N times
             * with a seed value Z. N should be greater than 0.
             * 
             * @param n             
             * @param f             
             * @param z             
             * @param o               Optional            
             */
            repeat(n: number, f: String, z: Object, o: Object): any;
            /**
             * builds an array by repeatedly applying a unary function N times
             * with a seed value Z. N should be greater than 0.
             * 
             * @param n             
             * @param f             
             * @param z             
             * @param o               Optional            
             */
            repeat(n: number, f: any[], z: Object, o: Object): any;
            /**
             * repeatedly applies a binary function to an array from left
             * to right using a seed value as a starting point; returns an array
             * of values produced by foldl() at that point.
             * 
             * @param a             
             * @param f             
             * @param z             
             * @param o               Optional            
             */
            scanl(a: any[], f: Function, z: Object, o: Object): any[];
            /**
             * repeatedly applies a binary function to an array from left
             * to right using a seed value as a starting point; returns an array
             * of values produced by foldl() at that point.
             * 
             * @param a             
             * @param f             
             * @param z             
             * @param o               Optional            
             */
            scanl(a: String, f: Function, z: Object, o: Object): any[];
            /**
             * repeatedly applies a binary function to an array from left
             * to right using a seed value as a starting point; returns an array
             * of values produced by foldl() at that point.
             * 
             * @param a             
             * @param f             
             * @param z             
             * @param o               Optional            
             */
            scanl(a: Object, f: Function, z: Object, o: Object): any[];
            /**
             * repeatedly applies a binary function to an array from left
             * to right using a seed value as a starting point; returns an array
             * of values produced by foldl() at that point.
             * 
             * @param a             
             * @param f             
             * @param z             
             * @param o               Optional            
             */
            scanl(a: any[], f: String, z: Object, o: Object): any[];
            /**
             * repeatedly applies a binary function to an array from left
             * to right using a seed value as a starting point; returns an array
             * of values produced by foldl() at that point.
             * 
             * @param a             
             * @param f             
             * @param z             
             * @param o               Optional            
             */
            scanl(a: String, f: String, z: Object, o: Object): any[];
            /**
             * repeatedly applies a binary function to an array from left
             * to right using a seed value as a starting point; returns an array
             * of values produced by foldl() at that point.
             * 
             * @param a             
             * @param f             
             * @param z             
             * @param o               Optional            
             */
            scanl(a: Object, f: String, z: Object, o: Object): any[];
            /**
             * repeatedly applies a binary function to an array from left
             * to right using a seed value as a starting point; returns an array
             * of values produced by foldl() at that point.
             * 
             * @param a             
             * @param f             
             * @param z             
             * @param o               Optional            
             */
            scanl(a: any[], f: any[], z: Object, o: Object): any[];
            /**
             * repeatedly applies a binary function to an array from left
             * to right using a seed value as a starting point; returns an array
             * of values produced by foldl() at that point.
             * 
             * @param a             
             * @param f             
             * @param z             
             * @param o               Optional            
             */
            scanl(a: String, f: any[], z: Object, o: Object): any[];
            /**
             * repeatedly applies a binary function to an array from left
             * to right using a seed value as a starting point; returns an array
             * of values produced by foldl() at that point.
             * 
             * @param a             
             * @param f             
             * @param z             
             * @param o               Optional            
             */
            scanl(a: Object, f: any[], z: Object, o: Object): any[];
            /**
             * repeatedly applies a binary function to an array from left
             * to right; returns an array of values produced by foldl1() at that
             * point.
             * 
             * @param a             
             * @param f             
             * @param o               Optional            
             */
            scanl1(a: any[], f: Function, o: Object): any[];
            /**
             * repeatedly applies a binary function to an array from left
             * to right; returns an array of values produced by foldl1() at that
             * point.
             * 
             * @param a             
             * @param f             
             * @param o               Optional            
             */
            scanl1(a: String, f: Function, o: Object): any[];
            /**
             * repeatedly applies a binary function to an array from left
             * to right; returns an array of values produced by foldl1() at that
             * point.
             * 
             * @param a             
             * @param f             
             * @param o               Optional            
             */
            scanl1(a: Object, f: Function, o: Object): any[];
            /**
             * repeatedly applies a binary function to an array from left
             * to right; returns an array of values produced by foldl1() at that
             * point.
             * 
             * @param a             
             * @param f             
             * @param o               Optional            
             */
            scanl1(a: any[], f: String, o: Object): any[];
            /**
             * repeatedly applies a binary function to an array from left
             * to right; returns an array of values produced by foldl1() at that
             * point.
             * 
             * @param a             
             * @param f             
             * @param o               Optional            
             */
            scanl1(a: String, f: String, o: Object): any[];
            /**
             * repeatedly applies a binary function to an array from left
             * to right; returns an array of values produced by foldl1() at that
             * point.
             * 
             * @param a             
             * @param f             
             * @param o               Optional            
             */
            scanl1(a: Object, f: String, o: Object): any[];
            /**
             * repeatedly applies a binary function to an array from left
             * to right; returns an array of values produced by foldl1() at that
             * point.
             * 
             * @param a             
             * @param f             
             * @param o               Optional            
             */
            scanl1(a: any[], f: any[], o: Object): any[];
            /**
             * repeatedly applies a binary function to an array from left
             * to right; returns an array of values produced by foldl1() at that
             * point.
             * 
             * @param a             
             * @param f             
             * @param o               Optional            
             */
            scanl1(a: String, f: any[], o: Object): any[];
            /**
             * repeatedly applies a binary function to an array from left
             * to right; returns an array of values produced by foldl1() at that
             * point.
             * 
             * @param a             
             * @param f             
             * @param o               Optional            
             */
            scanl1(a: Object, f: any[], o: Object): any[];
            /**
             * repeatedly applies a binary function to an array from right
             * to left using a seed value as a starting point; returns an array
             * of values produced by foldr() at that point.
             * 
             * @param a             
             * @param f             
             * @param z             
             * @param o               Optional            
             */
            scanr(a: any[], f: Function, z: Object, o: Object): any;
            /**
             * repeatedly applies a binary function to an array from right
             * to left using a seed value as a starting point; returns an array
             * of values produced by foldr() at that point.
             * 
             * @param a             
             * @param f             
             * @param z             
             * @param o               Optional            
             */
            scanr(a: String, f: Function, z: Object, o: Object): any;
            /**
             * repeatedly applies a binary function to an array from right
             * to left using a seed value as a starting point; returns an array
             * of values produced by foldr() at that point.
             * 
             * @param a             
             * @param f             
             * @param z             
             * @param o               Optional            
             */
            scanr(a: any[], f: String, z: Object, o: Object): any;
            /**
             * repeatedly applies a binary function to an array from right
             * to left using a seed value as a starting point; returns an array
             * of values produced by foldr() at that point.
             * 
             * @param a             
             * @param f             
             * @param z             
             * @param o               Optional            
             */
            scanr(a: String, f: String, z: Object, o: Object): any;
            /**
             * repeatedly applies a binary function to an array from right
             * to left using a seed value as a starting point; returns an array
             * of values produced by foldr() at that point.
             * 
             * @param a             
             * @param f             
             * @param z             
             * @param o               Optional            
             */
            scanr(a: any[], f: any[], z: Object, o: Object): any;
            /**
             * repeatedly applies a binary function to an array from right
             * to left using a seed value as a starting point; returns an array
             * of values produced by foldr() at that point.
             * 
             * @param a             
             * @param f             
             * @param z             
             * @param o               Optional            
             */
            scanr(a: String, f: any[], z: Object, o: Object): any;
            /**
             * repeatedly applies a binary function to an array from right
             * to left; returns an array of values produced by foldr1() at that
             * point.
             * 
             * @param a             
             * @param f             
             * @param o               Optional            
             */
            scanr1(a: any[], f: Function, o: Object): any;
            /**
             * repeatedly applies a binary function to an array from right
             * to left; returns an array of values produced by foldr1() at that
             * point.
             * 
             * @param a             
             * @param f             
             * @param o               Optional            
             */
            scanr1(a: String, f: Function, o: Object): any;
            /**
             * repeatedly applies a binary function to an array from right
             * to left; returns an array of values produced by foldr1() at that
             * point.
             * 
             * @param a             
             * @param f             
             * @param o               Optional            
             */
            scanr1(a: any[], f: String, o: Object): any;
            /**
             * repeatedly applies a binary function to an array from right
             * to left; returns an array of values produced by foldr1() at that
             * point.
             * 
             * @param a             
             * @param f             
             * @param o               Optional            
             */
            scanr1(a: String, f: String, o: Object): any;
            /**
             * repeatedly applies a binary function to an array from right
             * to left; returns an array of values produced by foldr1() at that
             * point.
             * 
             * @param a             
             * @param f             
             * @param o               Optional            
             */
            scanr1(a: any[], f: any[], o: Object): any;
            /**
             * repeatedly applies a binary function to an array from right
             * to left; returns an array of values produced by foldr1() at that
             * point.
             * 
             * @param a             
             * @param f             
             * @param o               Optional            
             */
            scanr1(a: String, f: any[], o: Object): any;
            /**
             * tests whether some element in the array passes the test
             * implemented by the provided function.
             * 
             * @param a             
             * @param f             
             * @param o               Optional            
             */
            some(a: any[], f: Function, o: Object): boolean;
            /**
             * tests whether some element in the array passes the test
             * implemented by the provided function.
             * 
             * @param a             
             * @param f             
             * @param o               Optional            
             */
            some(a: String, f: Function, o: Object): boolean;
            /**
             * tests whether some element in the array passes the test
             * implemented by the provided function.
             * 
             * @param a             
             * @param f             
             * @param o               Optional            
             */
            some(a: Object, f: Function, o: Object): boolean;
            /**
             * tests whether some element in the array passes the test
             * implemented by the provided function.
             * 
             * @param a             
             * @param f             
             * @param o               Optional            
             */
            some(a: any[], f: String, o: Object): boolean;
            /**
             * tests whether some element in the array passes the test
             * implemented by the provided function.
             * 
             * @param a             
             * @param f             
             * @param o               Optional            
             */
            some(a: String, f: String, o: Object): boolean;
            /**
             * tests whether some element in the array passes the test
             * implemented by the provided function.
             * 
             * @param a             
             * @param f             
             * @param o               Optional            
             */
            some(a: Object, f: String, o: Object): boolean;
            /**
             * tests whether some element in the array passes the test
             * implemented by the provided function.
             * 
             * @param a             
             * @param f             
             * @param o               Optional            
             */
            some(a: any[], f: any[], o: Object): boolean;
            /**
             * tests whether some element in the array passes the test
             * implemented by the provided function.
             * 
             * @param a             
             * @param f             
             * @param o               Optional            
             */
            some(a: String, f: any[], o: Object): boolean;
            /**
             * tests whether some element in the array passes the test
             * implemented by the provided function.
             * 
             * @param a             
             * @param f             
             * @param o               Optional            
             */
            some(a: Object, f: any[], o: Object): boolean;
            /**
             * tests whether some element in the array passes the test
             * implemented by the provided function.
             * 
             * @param a             
             * @param f             
             * @param o               Optional            
             */
            someRev(a: any[], f: Function, o: Object): boolean;
            /**
             * tests whether some element in the array passes the test
             * implemented by the provided function.
             * 
             * @param a             
             * @param f             
             * @param o               Optional            
             */
            someRev(a: String, f: Function, o: Object): boolean;
            /**
             * tests whether some element in the array passes the test
             * implemented by the provided function.
             * 
             * @param a             
             * @param f             
             * @param o               Optional            
             */
            someRev(a: any[], f: String, o: Object): boolean;
            /**
             * tests whether some element in the array passes the test
             * implemented by the provided function.
             * 
             * @param a             
             * @param f             
             * @param o               Optional            
             */
            someRev(a: String, f: String, o: Object): boolean;
            /**
             * tests whether some element in the array passes the test
             * implemented by the provided function.
             * 
             * @param a             
             * @param f             
             * @param o               Optional            
             */
            someRev(a: any[], f: any[], o: Object): boolean;
            /**
             * tests whether some element in the array passes the test
             * implemented by the provided function.
             * 
             * @param a             
             * @param f             
             * @param o               Optional            
             */
            someRev(a: String, f: any[], o: Object): boolean;
            /**
             * builds an array by unfolding a value
             * 
             * @param pr             
             * @param f             
             * @param g             
             * @param z             
             * @param o               Optional            
             */
            unfold(pr: Function, f: Function, g: Function, z: Object, o: Object): any[];
            /**
             * builds an array by unfolding a value
             * 
             * @param pr             
             * @param f             
             * @param g             
             * @param z             
             * @param o               Optional            
             */
            unfold(pr: String, f: Function, g: Function, z: Object, o: Object): any[];
            /**
             * builds an array by unfolding a value
             * 
             * @param pr             
             * @param f             
             * @param g             
             * @param z             
             * @param o               Optional            
             */
            unfold(pr: any[], f: Function, g: Function, z: Object, o: Object): any[];
            /**
             * builds an array by unfolding a value
             * 
             * @param pr             
             * @param f             
             * @param g             
             * @param z             
             * @param o               Optional            
             */
            unfold(pr: Function, f: String, g: Function, z: Object, o: Object): any[];
            /**
             * builds an array by unfolding a value
             * 
             * @param pr             
             * @param f             
             * @param g             
             * @param z             
             * @param o               Optional            
             */
            unfold(pr: String, f: String, g: Function, z: Object, o: Object): any[];
            /**
             * builds an array by unfolding a value
             * 
             * @param pr             
             * @param f             
             * @param g             
             * @param z             
             * @param o               Optional            
             */
            unfold(pr: any[], f: String, g: Function, z: Object, o: Object): any[];
            /**
             * builds an array by unfolding a value
             * 
             * @param pr             
             * @param f             
             * @param g             
             * @param z             
             * @param o               Optional            
             */
            unfold(pr: Function, f: any[], g: Function, z: Object, o: Object): any[];
            /**
             * builds an array by unfolding a value
             * 
             * @param pr             
             * @param f             
             * @param g             
             * @param z             
             * @param o               Optional            
             */
            unfold(pr: String, f: any[], g: Function, z: Object, o: Object): any[];
            /**
             * builds an array by unfolding a value
             * 
             * @param pr             
             * @param f             
             * @param g             
             * @param z             
             * @param o               Optional            
             */
            unfold(pr: any[], f: any[], g: Function, z: Object, o: Object): any[];
            /**
             * builds an array by unfolding a value
             * 
             * @param pr             
             * @param f             
             * @param g             
             * @param z             
             * @param o               Optional            
             */
            unfold(pr: Function, f: Function, g: String, z: Object, o: Object): any[];
            /**
             * builds an array by unfolding a value
             * 
             * @param pr             
             * @param f             
             * @param g             
             * @param z             
             * @param o               Optional            
             */
            unfold(pr: String, f: Function, g: String, z: Object, o: Object): any[];
            /**
             * builds an array by unfolding a value
             * 
             * @param pr             
             * @param f             
             * @param g             
             * @param z             
             * @param o               Optional            
             */
            unfold(pr: any[], f: Function, g: String, z: Object, o: Object): any[];
            /**
             * builds an array by unfolding a value
             * 
             * @param pr             
             * @param f             
             * @param g             
             * @param z             
             * @param o               Optional            
             */
            unfold(pr: Function, f: String, g: String, z: Object, o: Object): any[];
            /**
             * builds an array by unfolding a value
             * 
             * @param pr             
             * @param f             
             * @param g             
             * @param z             
             * @param o               Optional            
             */
            unfold(pr: String, f: String, g: String, z: Object, o: Object): any[];
            /**
             * builds an array by unfolding a value
             * 
             * @param pr             
             * @param f             
             * @param g             
             * @param z             
             * @param o               Optional            
             */
            unfold(pr: any[], f: String, g: String, z: Object, o: Object): any[];
            /**
             * builds an array by unfolding a value
             * 
             * @param pr             
             * @param f             
             * @param g             
             * @param z             
             * @param o               Optional            
             */
            unfold(pr: Function, f: any[], g: String, z: Object, o: Object): any[];
            /**
             * builds an array by unfolding a value
             * 
             * @param pr             
             * @param f             
             * @param g             
             * @param z             
             * @param o               Optional            
             */
            unfold(pr: String, f: any[], g: String, z: Object, o: Object): any[];
            /**
             * builds an array by unfolding a value
             * 
             * @param pr             
             * @param f             
             * @param g             
             * @param z             
             * @param o               Optional            
             */
            unfold(pr: any[], f: any[], g: String, z: Object, o: Object): any[];
            /**
             * builds an array by unfolding a value
             * 
             * @param pr             
             * @param f             
             * @param g             
             * @param z             
             * @param o               Optional            
             */
            unfold(pr: Function, f: Function, g: any[], z: Object, o: Object): any[];
            /**
             * builds an array by unfolding a value
             * 
             * @param pr             
             * @param f             
             * @param g             
             * @param z             
             * @param o               Optional            
             */
            unfold(pr: String, f: Function, g: any[], z: Object, o: Object): any[];
            /**
             * builds an array by unfolding a value
             * 
             * @param pr             
             * @param f             
             * @param g             
             * @param z             
             * @param o               Optional            
             */
            unfold(pr: any[], f: Function, g: any[], z: Object, o: Object): any[];
            /**
             * builds an array by unfolding a value
             * 
             * @param pr             
             * @param f             
             * @param g             
             * @param z             
             * @param o               Optional            
             */
            unfold(pr: Function, f: String, g: any[], z: Object, o: Object): any[];
            /**
             * builds an array by unfolding a value
             * 
             * @param pr             
             * @param f             
             * @param g             
             * @param z             
             * @param o               Optional            
             */
            unfold(pr: String, f: String, g: any[], z: Object, o: Object): any[];
            /**
             * builds an array by unfolding a value
             * 
             * @param pr             
             * @param f             
             * @param g             
             * @param z             
             * @param o               Optional            
             */
            unfold(pr: any[], f: String, g: any[], z: Object, o: Object): any[];
            /**
             * builds an array by unfolding a value
             * 
             * @param pr             
             * @param f             
             * @param g             
             * @param z             
             * @param o               Optional            
             */
            unfold(pr: Function, f: any[], g: any[], z: Object, o: Object): any[];
            /**
             * builds an array by unfolding a value
             * 
             * @param pr             
             * @param f             
             * @param g             
             * @param z             
             * @param o               Optional            
             */
            unfold(pr: String, f: any[], g: any[], z: Object, o: Object): any[];
            /**
             * builds an array by unfolding a value
             * 
             * @param pr             
             * @param f             
             * @param g             
             * @param z             
             * @param o               Optional            
             */
            unfold(pr: any[], f: any[], g: any[], z: Object, o: Object): any[];
            /**
             * builds an array by repeatedly applying a unary function with
             * a seed value Z until the predicate is satisfied.
             * 
             * @param pr             
             * @param f             
             * @param z             
             * @param o               Optional            
             */
            until(pr: Function, f: Function, z: Object, o: Object): any[];
            /**
             * builds an array by repeatedly applying a unary function with
             * a seed value Z until the predicate is satisfied.
             * 
             * @param pr             
             * @param f             
             * @param z             
             * @param o               Optional            
             */
            until(pr: String, f: Function, z: Object, o: Object): any[];
            /**
             * builds an array by repeatedly applying a unary function with
             * a seed value Z until the predicate is satisfied.
             * 
             * @param pr             
             * @param f             
             * @param z             
             * @param o               Optional            
             */
            until(pr: any[], f: Function, z: Object, o: Object): any[];
            /**
             * builds an array by repeatedly applying a unary function with
             * a seed value Z until the predicate is satisfied.
             * 
             * @param pr             
             * @param f             
             * @param z             
             * @param o               Optional            
             */
            until(pr: Function, f: String, z: Object, o: Object): any[];
            /**
             * builds an array by repeatedly applying a unary function with
             * a seed value Z until the predicate is satisfied.
             * 
             * @param pr             
             * @param f             
             * @param z             
             * @param o               Optional            
             */
            until(pr: String, f: String, z: Object, o: Object): any[];
            /**
             * builds an array by repeatedly applying a unary function with
             * a seed value Z until the predicate is satisfied.
             * 
             * @param pr             
             * @param f             
             * @param z             
             * @param o               Optional            
             */
            until(pr: any[], f: String, z: Object, o: Object): any[];
            /**
             * builds an array by repeatedly applying a unary function with
             * a seed value Z until the predicate is satisfied.
             * 
             * @param pr             
             * @param f             
             * @param z             
             * @param o               Optional            
             */
            until(pr: Function, f: any[], z: Object, o: Object): any[];
            /**
             * builds an array by repeatedly applying a unary function with
             * a seed value Z until the predicate is satisfied.
             * 
             * @param pr             
             * @param f             
             * @param z             
             * @param o               Optional            
             */
            until(pr: String, f: any[], z: Object, o: Object): any[];
            /**
             * builds an array by repeatedly applying a unary function with
             * a seed value Z until the predicate is satisfied.
             * 
             * @param pr             
             * @param f             
             * @param z             
             * @param o               Optional            
             */
            until(pr: any[], f: any[], z: Object, o: Object): any[];
            /**
             * returns an array of all values in the object
             * 
             * @param obj             
             */
            values(obj: Object): any[];
        }
        /**
         * Permalink: http://dojotoolkit.org/api/1.9/dojox/main.regexp.html
         *
         * 
         */
        interface regexp {
        }
        /**
         * Permalink: http://dojotoolkit.org/api/1.9/dojox/main.umalqura.html
         *
         * 
         */
        interface umalqura {
            /**
             * 
             */
            locale: Object;
            /**
             * Add to a Date in intervals of different size, from milliseconds to years
             * 
             * @param date Date object to start with             
             * @param interval A string representing the interval.  One of the following:"year", "month", "day", "hour", "minute", "second","millisecond", "week", "weekday"             
             * @param amount How much to add to the date.             
             */
            add(date: dojox.date.umalqura.Date, interval: String, amount: number): void;
            /**
             * Compare two umalqura date objects by date, time, or both.
             * Returns 0 if equal, positive if a > b, else negative.
             * 
             * @param date1             
             * @param date2 If not specified, the current umalqura.Date is used.             
             * @param portion               OptionalA string indicating the "date" or "time" portion of a Date object.Compares both "date" and "time" by default.  One of the following:"date", "time", "datetime"             
             */
            compare(date1: dojox.date.umalqura.Date, date2: dojox.date.umalqura.Date, portion: String): void;
            /**
             * date2 - date1
             * 
             * @param date1             
             * @param date2               OptionalIf not specified, the current dojox.date.umalqura.Date is used.             
             * @param interval               OptionalA string representing the interval.  One of the following:"year", "month", "day", "hour", "minute", "second","millisecond",  "week", "weekday"Defaults to "day".             
             */
            difference(date1: dojox.date.umalqura.Date, date2: dojox.date.umalqura.Date, interval: String): void;
            /**
             * 
             * @param month             
             */
            getDaysInMonth(month: dojox.date.umalqura.Date): void;
        }
        /**
         * Permalink: http://dojotoolkit.org/api/1.9/dojox/main.buddhist.html
         *
         * 
         */
        interface buddhist {
            /**
             * 
             */
            locale: Object;
            /**
             * Add to a Date in intervals of different size, from milliseconds to years
             * 
             * @param date Date object to start with             
             * @param interval A string representing the interval.  One of the following:"year", "month", "day", "hour", "minute", "second","millisecond", "week", "weekday"             
             * @param amount How much to add to the date.             
             */
            add(date: dojox.date.buddhist.Date, interval: String, amount: number): void;
            /**
             * Compare two buddhist date objects by date, time, or both.
             * 
             * @param date1             
             * @param date2             
             * @param portion               Optional            
             */
            compare(date1: dojox.date.buddhist.Date, date2: dojox.date.buddhist.Date, portion: String): void;
            /**
             * date2 - date1
             * 
             * @param date1             
             * @param date2               OptionalIf not specified, the current hebrew.Date is used.             
             * @param interval               OptionalA string representing the interval.  One of the following:"year", "month", "day", "hour", "minute", "second","millisecond",  "week", "weekday"Defaults to "day".             
             */
            difference(date1: dojox.date.hebrew.Date, date2: dojox.date.hebrew.Date, interval: String): void;
            /**
             * 
             * @param dateObject             
             */
            getDaysInMonth(dateObject: dojox.date.buddhist.Date): void;
            /**
             * 
             * @param dateObject             
             */
            isLeapYear(dateObject: dojox.date.buddhist.Date): void;
        }
        /**
         * Permalink: http://dojotoolkit.org/api/1.9/dojox/main.hebrew.html
         *
         * 
         */
        interface hebrew {
            /**
             * 
             */
            locale: Object;
            /**
             * 
             */
            numerals: Object;
            /**
             * Add to a Date in intervals of different size, from milliseconds to years
             * 
             * @param date Date object to start with             
             * @param interval A string representing the interval.  One of the following:"year", "month", "day", "hour", "minute", "second","millisecond", "week", "weekday"             
             * @param amount How much to add to the date.             
             */
            add(date: dojox.date.hebrew.Date, interval: String, amount: number): void;
            /**
             * Compare two hebrew date objects by date, time, or both.
             * Returns 0 if equal, positive if a > b, else negative.
             * 
             * @param dateheb1             
             * @param dateheb2             
             * @param portion               OptionalA string indicating the "date" or "time" portion of a Date object.Compares both "date" and "time" by default.  One of the following:"date", "time", "datetime"             
             */
            compare(dateheb1: dojox.date.hebrew.Date, dateheb2: dojox.date.hebrew.Date, portion: String): void;
            /**
             * date2 - date1
             * 
             * @param date1             
             * @param date2               OptionalIf not specified, the current dojox.date.hebrew.Date is used.             
             * @param interval               OptionalA string representing the interval.  One of the following:"year", "month", "day", "hour", "minute", "second","millisecond",  "week", "weekday"Defaults to "day".             
             */
            difference(date1: dojox.date.hebrew.Date, date2: dojox.date.hebrew.Date, interval: String): void;
            /**
             * 
             * @param month             
             */
            getDaysInMonth(month: dojox.date.hebrew.Date): void;
        }
        /**
         * Permalink: http://dojotoolkit.org/api/1.9/dojox/main.persian.html
         *
         * 
         */
        interface persian {
            /**
             * 
             */
            locale: Object;
            /**
             * Add to a Date in intervals of different size, from milliseconds to years
             * 
             * @param date Date object to start with             
             * @param interval A string representing the interval.  One of the following:"year", "month", "day", "hour", "minute", "second","millisecond", "week", "weekday"             
             * @param amount How much to add to the date.             
             */
            add(date: dojox.date.persian.Date, interval: String, amount: number): void;
            /**
             * Compare two persian date objects by date, time, or both.
             * Returns 0 if equal, positive if a > b, else negative.
             * 
             * @param date1             
             * @param date2 If not specified, the current persian.Date is used.             
             * @param portion               OptionalA string indicating the "date" or "time" portion of a Date object.Compares both "date" and "time" by default.  One of the following:"date", "time", "datetime"             
             */
            compare(date1: dojox.date.persian.Date, date2: dojox.date.persian.Date, portion: String): void;
            /**
             * date2 - date1
             * 
             * @param date1             
             * @param date2               OptionalIf not specified, the current dojox.date.persian.Date is used.             
             * @param interval               OptionalA string representing the interval.  One of the following:"year", "month", "day", "hour", "minute", "second","millisecond",  "week", "weekday"Defaults to "day".             
             */
            difference(date1: dojox.date.persian.Date, date2: dojox.date.persian.Date, interval: String): void;
            /**
             * 
             * @param month             
             */
            getDaysInMonth(month: dojox.date.persian.Date): void;
        }
        /**
         * Permalink: http://dojotoolkit.org/api/1.9/dojox/main.relative.html
         *
         * 
         */
        interface relative {
            /**
             * Format a Date object as a String, using locale-specific settings,
             * relative to the current date or some other date.
             * Create a string from a Date object using the most significant information
             * and a known localized pattern.  This method formats both the date and
             * time from dateObject.  Formatting patterns are chosen appropriate to
             * the locale.
             * 
             * If the day portion of the date falls within the current date (or the
             * relativeDate option, if present), then the time will be all that
             * is displayed
             * 
             * If the day portion of the date falls within the past week (or the
             * week preceeding relativeDate, if present), then the display will show
             * day of week and time.  This functionality can be turned off by setting
             * weekCheck to false.
             * 
             * If the year portion of the date falls within the current year (or the
             * year portion of relativeDate, if present), then the display will show
             * month and day.
             * 
             * Otherwise, this function is equivalent to calling dojo.date.format with
             * formatLength of "medium"
             * 
             * @param dateObject the date and time to be formatted.             
             * @param options               OptionalAn object with the following properties:locale (String): override the locale used to determine formatting rulesrelativeDate (Date): Date to calculate relation to (defaults to new Date())weekCheck (boolean): Whether or not to display the day of week (defaults true)            
             */
            format(dateObject: Date, options: Object): void;
        }
        /**
         * Permalink: http://dojotoolkit.org/api/1.9/dojox/main.util.html
         *
         * 
         */
        interface util {
        }
        /**
         * Permalink: http://dojotoolkit.org/api/1.9/dojox/main.utils.html
         *
         * 
         */
        interface utils {
            /**
             * Coerces one object to the type of another.
             * 
             * @param target object, which typeof result is used to coerce "source" object.             
             * @param source object, which will be forced to change type.             
             */
            coerceType(target: Object, source: Object): any;
            /**
             * Merge two objects structurally, mixin properties will override object's properties.
             * 
             * @param object original object.             
             * @param mixin additional object, which properties will override object's properties.             
             */
            merge(object: Object, mixin: Object): any;
            /**
             * Updates an existing object in place with properties from an "source" object.
             * 
             * @param target the "target" object to be updated             
             * @param source the "source" object, whose properties will be used to source the existed object.             
             * @param conv               Optionalforce conversion to the original type             
             */
            updateWithObject(target: Object, source: Object, conv: boolean): Object;
            /**
             * Updates an existing object in place with properties from an "source" object.
             * 
             * @param target the "target" object to be updated             
             * @param source the "source" object, whose properties will be used to source the existed object.             
             * @param pattern object, whose properties will be used to pull values from the "source"             
             * @param conv               Optionalforce conversion to the original type             
             */
            updateWithPattern(target: Object, source: Object, pattern: Object, conv: boolean): Object;
        }
    }

}