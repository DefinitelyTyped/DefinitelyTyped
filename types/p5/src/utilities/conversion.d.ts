// This file was auto-generated. Please do not edit it.

import * as p5 from '../../index';

declare module '../../index' {
    interface p5InstanceExtensions {
        /**
         *   Converts a string to its floating point
         *   representation. The contents of a string must
         *   resemble a number, or NaN (not a number) will be
         *   returned. For example, float("1234.56") evaluates
         *   to 1234.56, but float("giraffe") will return NaN.
         *   When an array of values is passed in, then an
         *   array of floats of the same length is returned.
         *   @param str float string to parse
         *   @return floating point representation of string
         */
        float(str: string): number;

        /**
         *   Converts a boolean, string, or float to its
         *   integer representation. When an array of values is
         *   passed in, then an int array of the same length is
         *   returned.
         *   @param n value to parse
         *   @param [radix] the radix to convert to (default:
         *   10)
         *   @return integer representation of value
         */
        int(n: string | boolean | number, radix?: number): number;

        /**
         *   Converts a boolean, string, or float to its
         *   integer representation. When an array of values is
         *   passed in, then an int array of the same length is
         *   returned.
         *   @param ns values to parse
         *   @return integer representation of values
         */
        int(ns: any[]): number[];

        /**
         *   Converts a boolean, string or number to its string
         *   representation. When an array of values is passed
         *   in, then an array of strings of the same length is
         *   returned.
         *   @param n value to parse
         *   @return string representation of value
         */
        str(n: string | boolean | number | any[]): string;

        /**
         *   Converts a number or string to its boolean
         *   representation. For a number, any non-zero value
         *   (positive or negative) evaluates to true, while
         *   zero evaluates to false. For a string, the value
         *   "true" evaluates to true, while any other value
         *   evaluates to false. When an array of number or
         *   string values is passed in, then a array of
         *   booleans of the same length is returned.
         *   @param n value to parse
         *   @return boolean representation of value
         */
        boolean(n: string | boolean | number | any[]): boolean;

        /**
         *   Converts a number, string representation of a
         *   number, or boolean to its byte representation. A
         *   byte can be only a whole number between -128 and
         *   127, so when a value outside of this range is
         *   converted, it wraps around to the corresponding
         *   byte representation. When an array of number,
         *   string or boolean values is passed in, then an
         *   array of bytes the same length is returned.
         *   @param n value to parse
         *   @return byte representation of value
         */
        byte(n: string | boolean | number): number;

        /**
         *   Converts a number, string representation of a
         *   number, or boolean to its byte representation. A
         *   byte can be only a whole number between -128 and
         *   127, so when a value outside of this range is
         *   converted, it wraps around to the corresponding
         *   byte representation. When an array of number,
         *   string or boolean values is passed in, then an
         *   array of bytes the same length is returned.
         *   @param ns values to parse
         *   @return array of byte representation of values
         */
        byte(ns: any[]): number[];

        /**
         *   Converts a number or string to its corresponding
         *   single-character string representation. If a
         *   string parameter is provided, it is first parsed
         *   as an integer and then translated into a
         *   single-character string. When an array of number
         *   or string values is passed in, then an array of
         *   single-character strings of the same length is
         *   returned.
         *   @param n value to parse
         *   @return string representation of value
         */
        char(n: string | number): string;

        /**
         *   Converts a number or string to its corresponding
         *   single-character string representation. If a
         *   string parameter is provided, it is first parsed
         *   as an integer and then translated into a
         *   single-character string. When an array of number
         *   or string values is passed in, then an array of
         *   single-character strings of the same length is
         *   returned.
         *   @param ns values to parse
         *   @return array of string representation of values
         */
        char(ns: any[]): string[];

        /**
         *   Converts a single-character string to its
         *   corresponding integer representation. When an
         *   array of single-character string values is passed
         *   in, then an array of integers of the same length
         *   is returned.
         *   @param n value to parse
         *   @return integer representation of value
         */
        unchar(n: string): number;

        /**
         *   Converts a single-character string to its
         *   corresponding integer representation. When an
         *   array of single-character string values is passed
         *   in, then an array of integers of the same length
         *   is returned.
         *   @param ns values to parse
         *   @return integer representation of values
         */
        unchar(ns: any[]): number[];

        /**
         *   Converts a number to a string in its equivalent
         *   hexadecimal notation. If a second parameter is
         *   passed, it is used to set the number of characters
         *   to generate in the hexadecimal notation. When an
         *   array is passed in, an array of strings in
         *   hexadecimal notation of the same length is
         *   returned.
         *   @param n value to parse
         *   @return hexadecimal string representation of value
         */
        hex(n: number, digits?: number): string;

        /**
         *   Converts a number to a string in its equivalent
         *   hexadecimal notation. If a second parameter is
         *   passed, it is used to set the number of characters
         *   to generate in the hexadecimal notation. When an
         *   array is passed in, an array of strings in
         *   hexadecimal notation of the same length is
         *   returned.
         *   @param ns array of values to parse
         *   @return hexadecimal string representation of
         *   values
         */
        hex(ns: number[], digits?: number): string[];

        /**
         *   Converts a string representation of a hexadecimal
         *   number to its equivalent integer value. When an
         *   array of strings in hexadecimal notation is passed
         *   in, an array of integers of the same length is
         *   returned.
         *   @param n value to parse
         *   @return integer representation of hexadecimal
         *   value
         */
        unhex(n: string): number;

        /**
         *   Converts a string representation of a hexadecimal
         *   number to its equivalent integer value. When an
         *   array of strings in hexadecimal notation is passed
         *   in, an array of integers of the same length is
         *   returned.
         *   @param ns values to parse
         *   @return integer representations of hexadecimal
         *   value
         */
        unhex(ns: any[]): number[];
    }
}
