/// <reference path="Point.d.ts" />
declare module L {

    export class Util {

        /**
          * Merges the properties of the src object (or multiple objects) into dest object
          * and returns the latter. Has an L.extend shortcut.
          */
        static extend(dest: any, ...sources: any[]): any;
    
        /**
          * Returns a function which executes function fn with the given scope obj (so
          * that this keyword refers to obj inside the function code). Has an L.bind shortcut.
          */
        static bind<T extends Function>(fn: T, obj: any): T;
    
        /**
          * Applies a unique key to the object and returns that key. Has an L.stamp shortcut.
          */
        static stamp(obj: any): string;
        
        /**
          * Returns a wrapper around the function fn that makes sure it's called not more
          * often than a certain time interval time, but as fast as possible otherwise
          * (for example, it is used for checking and requesting new tiles while dragging
          * the map), optionally passing the scope (context) in which the function will
          * be called.
          */
        static limitExecByInterval<T extends Function>(fn: T, time: number, context?: any): T;
    
        /**
          * Returns a function which always returns false.
          */
        static falseFn(): () => boolean;
    
        /**
          * Returns the number num rounded to digits decimals.
          */
        static formatNum(num: number, digits: number): number;
    
        /**
          * Trims and splits the string on whitespace and returns the array of parts.
          */
        static splitWords(str: string): string[];
    
        /**
          * Merges the given properties to the options of the obj object, returning the
          * resulting options. See Class options. Has an L.setOptions shortcut.
          */
        static setOptions(obj: any, options: any): any;
    
        /**
          * Converts an object into a parameter URL string, e.g. {a: "foo", b: "bar"}
          * translates to '?a=foo&b=bar'.
          */
        static getParamString(obj: any): string;
    
        /**
          * Simple templating facility, creates a string by applying the values of the
          * data object of a form {a: 'foo', b: 'bar', …} to a template string of the form
          * 'Hello {a}, {b}' — in this example you will get 'Hello foo, bar'.
          */
        static template(str: string, data: any): string;
    
        /**
          * Returns true if the given object is an array.
          */
        static isArray(obj: any): boolean;
    
        /**
          * Trims the whitespace from both ends of the string and returns the result.
          */
        static trim(str: string): boolean;

        /**
          * Data URI string containing a base64-encoded empty GIF image. Used as a hack
          * to free memory from unused images on WebKit-powered mobile devices (by setting
          * image src to this string).
          */
        static emptyImageUrl: string;
    }
}
