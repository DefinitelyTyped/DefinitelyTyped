/* *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved. 
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0  
 
THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE, 
MERCHANTABLITY OR NON-INFRINGEMENT. 
 
See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */

/// <reference no-default-lib="true"/>

////////////////
/// ECMAScript APIs
////////////////

declare var NaN: number;
declare var Infinity: number;

/**
  * Evaluates JavaScript code and executes it. 
  * @param x A String value that contains valid JavaScript code.
  */
declare function eval(x: string): any;

/**
  * Converts A string to an integer.
  * @param s A string to convert into a number.
  * @param radix A value between 2 and 36 that specifies the base of the number in numString. 
  * If this argument is not supplied, strings with a prefix of '0x' are considered hexadecimal.
  * All other strings are considered decimal.
  */
declare function parseInt(s: string, radix?: number): number;

/**
  * Converts a string to a floating-point number. 
  * @param string A string that contains a floating-point number. 
  */
declare function parseFloat(string: string): number;

/**
  * Returns a Boolean value that indicates whether a value is the reserved value NaN (not a number). 
  * @param number A numeric value.
  */
declare function isNaN(number: number): bool;

/** 
  * Determines whether a supplied number is finite.
  * @param number Any numeric value.
  */
declare function isFinite(number: number): bool;

/**
  * Gets the unencoded version of an encoded Uniform Resource Identifier (URI).
  * @param encodedURI A value representing an encoded URI.
  */
declare function decodeURI(encodedURI: string): string;

/**
  * Gets the unencoded version of an encoded component of a Uniform Resource Identifier (URI).
  * @param encodedURIComponent A value representing an encoded URI component.
  */
declare function decodeURIComponent(encodedURIComponent: string): string;

/** 
  * Encodes a text string as a valid Uniform Resource Identifier (URI)
  * @param uri A value representing an encoded URI.
  */ 
declare function encodeURI(uri: string): string;

/**
  * Encodes a text string as a valid component of a Uniform Resource Identifier (URI).
  * @param uriComponent A value representing an encoded URI component.
  */
declare function encodeURIComponent(uriComponent: string): string;

interface PropertyDescriptor {
    configurable?: bool;
    enumerable?: bool;
    value?: any;
    writable?: bool;
    get?(): any;
    set?(v: any): void;
}

interface PropertyDescriptorMap {
    [s: string]: PropertyDescriptor;
}

interface Object {
    /** Returns a string representation of an object. */
    toString(): string;

    /** Returns a date converted to a string using the current locale. */
    toLocaleString(): string;

    /** Returns the primitive value of the specified object. */
    valueOf(): Object;

    /**
      * Determines whether an object has a property with the specified name. 
      * @param v A property name.
      */
    hasOwnProperty(v: string): bool;

    /**
      * Determines whether an object exists in another object's prototype chain. 
      * @param v Another object whose prototype chain is to be checked.
      */
    isPrototypeOf(v: Object): bool;

    /** 
      * Determines whether a specified property is enumerable.
      * @param v A property name.
      */
    propertyIsEnumerable(v: string): bool;

    [s: string]: any;
}

/**
  * Provides functionality common to all JavaScript objects.
  */
declare var Object: {
    new (value?: any): Object;
    (): any;
    (value: any): any;

    /** A reference to the prototype for a class of objects. */
    prototype: Object;

    /** 
      * Returns the prototype of an object. 
      * @param o The object that references the prototype.
      */
    getPrototypeOf(o: any): any;

    /**
      * Gets the own property descriptor of the specified object. 
      * An own property descriptor is one that is defined directly on the object and is not inherited from the object's prototype. 
      * @param o Object that contains the property.
      * @param p Name of the property.
    */
    getOwnPropertyDescriptor(o: any, p: string): PropertyDescriptor;

    /** 
      * Returns the names of the own properties of an object. The own properties of an object are those that are defined directly 
      * on that object, and are not inherited from the object's prototype. The properties of an object include both fields (objects) and functions.
      * @param o Object that contains the own properties.
      */
    getOwnPropertyNames(o: any): string[];

    /** 
      * Creates an object that has the specified prototype, and that optionally contains specified properties.
      * @param o Object to use as a prototype. May be null
      * @param properties JavaScript object that contains one or more property descriptors. 
      */
    create(o: any, properties?: PropertyDescriptorMap): any;

    /**
      * Adds a property to an object, or modifies attributes of an existing property. 
      * @param o Object on which to add or modify the property. This can be a native JavaScript object (that is, a user-defined object or a built in object) or a DOM object.
      * @param p The property name.
      * @param attributes Descriptor for the property. It can be for a data property or an accessor property.
      */
    defineProperty(o: any, p: string, attributes: PropertyDescriptor): any;

    /**
      * Adds one or more properties to an object, and/or modifies attributes of existing properties. 
      * @param o Object on which to add or modify the properties. This can be a native JavaScript object or a DOM object.
      * @param properties JavaScript object that contains one or more descriptor objects. Each descriptor object describes a data property or an accessor property.
      */
    defineProperties(o: any, properties: PropertyDescriptorMap): any;

    /**
      * Prevents the modification of attributes of existing properties, and prevents the addition of new properties.
      * @param o Object on which to lock the attributes. 
      */
    seal(o: any): any;

    /**
      * Prevents the modification of existing property attributes and values, and prevents the addition of new properties.
      * @param o Object on which to lock the attributes.
      */
    freeze(o: any): any;

    /**
      * Prevents the addition of new properties to an object.
      * @param o Object to make non-extensible. 
      */
    preventExtensions(o: any): any;

    /**
      * Returns true if existing property attributes cannot be modified in an object and new properties cannot be added to the object.
      * @param o Object to test. 
      */
    isSealed(o: any): bool;

    /**
      * Returns true if existing property attributes and values cannot be modified in an object, and new properties cannot be added to the object.
      * @param o Object to test.  
      */
    isFrozen(o: any): bool;

    /**
      * Returns a value that indicates whether new properties can be added to an object.
      * @param o Object to test. 
      */
    isExtensible(o: any): bool;

    /**
      * Returns the names of the enumerable properties and methods of an object.
      * @param o Object that contains the properties and methods. This can be an object that you created or an existing Document Object Model (DOM) object.
      */
    keys(o: any): string[];
}

/**
  * Creates a new function.
  */
interface Function {
    /**
      * Calls the function, substituting the specified object for the this value of the function, and the specified array for the arguments of the function.
      * @param thisArg The object to be used as the this object.
      * @param argArray A set of arguments to be passed to the function.
      */
    apply(thisArg: any, argArray?: any): any;

    /**
      * Calls a method of an object, substituting another object for the current object.
      * @param thisArg The object to be used as the current object.
      * @param argArray A list of arguments to be passed to the method.
      */
    call(thisArg: any, ...argArray: any[]): any;

    /**
      * For a given function, creates a bound function that has the same body as the original function. 
      * The this object of the bound function is associated with the specified object, and has the specified initial parameters.
      * @param thisArg An object to which the this keyword can refer inside the new function.
      * @param argArray A list of arguments to be passed to the new function.
      */
    bind(thisArg: any, ...argArray: any[]): any;
    
    prototype: any;
    length: number;

    // Non-standard extensions
    arguments: any;
    caller: Function;
}

declare var Function: {
    /** 
      * Creates a new function.
      * @param args A list of arguments the function accepts.
      */
    new (...args: string[]): Function;
    (...args: string[]): Function;
    prototype: Function;
}

interface IArguments {
    [index: number]: any;
    length: number;
    callee: Function;
}

interface String {
    /** Returns a string representation of a string. */
    toString(): string;

    /**
      * Returns the character at the specified index.
      * @param pos The zero-based index of the desired character.
      */
    charAt(pos: number): string;

    /** 
      * Returns the Unicode value of the character at the specified location.
      * @param index The zero-based index of the desired character. If there is no character at the specified index, NaN is returned.
      */
    charCodeAt(index: number): number;

    /**
      * Returns a string that contains the concatenation of two or more strings.
      * @param strings The strings to append to the end of the string.  
      */
    concat(...strings: string[]): string;

    /**
      * Returns the position of the first occurrence of a substring. 
      * @param searchString The substring to search for in the string
      * @param position The index at which to begin searching the String object. If omitted, search starts at the beginning of the string.
      */
    indexOf(searchString: string, position?: number): number;

    /**
      * Returns the last occurrence of a substring in the string.
      * @param searchString The substring to search for.
      * @param position The index at which to begin searching. If omitted, the search begins at the end of the string.
      */
    lastIndexOf(searchString: string, position?: number): number;

    /**
      * Determines whether two strings are equivalent in the current locale.
      * @param that String to compare to target string
      */
    localeCompare(that: string): number;

    /** 
      * Matches a string with a regular expression, and returns an array containing the results of that search.
      * @param regexp A variable name or string literal containing the regular expression pattern and flags.
      */
    match(regexp: string): string[];
    /** 
      * Matches a string with a regular expression, and returns an array containing the results of that search.
      * @param regexp A regular expression object that contains the regular expression pattern and applicable flags. 
      */
    match(regexp: RegExp): string[];

    /**
      * Replaces text in a string, using a regular expression or search string.
      * @param searchValue A String object or string literal that represents the regular expression
      * @param replaceValue A String object or string literal containing the text to replace for every successful match of rgExp in stringObj.
      */
    replace(searchValue: string, replaceValue: string): string;
    /**
      * Replaces text in a string, using a regular expression or search string.
      * @param searchValue A String object or string literal that represents the regular expression
      * @param replaceValue A function that returns the replacement text.
      */
    replace(searchValue: string, replaceValue: (substring: string, ...args: any[]) => string): string;
    /**
      * Replaces text in a string, using a regular expression or search string.
      * @param searchValue A Regular Expression object containing the regular expression pattern and applicable flags
      * @param replaceValue A String object or string literal containing the text to replace for every successful match of rgExp in stringObj.
      */
    replace(searchValue: RegExp, replaceValue: string): string;
    /**
      * Replaces text in a string, using a regular expression or search string.
      * @param searchValue A Regular Expression object containing the regular expression pattern and applicable flags
      * @param replaceValue A function that returns the replacement text.
      */
    replace(searchValue: RegExp, replaceValue: (substring: string, ...args: any[]) => string): string;

    /**
      * Finds the first substring match in a regular expression search.
      * @param regexp The regular expression pattern and applicable flags. 
      */
    search(regexp: string): number;
    /**
      * Finds the first substring match in a regular expression search.
      * @param regexp The regular expression pattern and applicable flags. 
      */
    search(regexp: RegExp): number;

    /**
      * Returns a section of a string.
      * @param start The index to the beginning of the specified portion of stringObj. 
      * @param end The index to the end of the specified portion of stringObj. The substring includes the characters up to, but not including, the character indicated by end. 
      * If this value is not specified, the substring continues to the end of stringObj.
      */
    slice(start: number, end?: number): string;

    /**
      * Split a string into substrings using the specified separator and return them as an array.
      * @param separator A string that identifies character or characters to use in separating the string. If omitted, a single-element array containing the entire string is returned. 
      * @param limit A value used to limit the number of elements returned in the array.
      */
    split(separator: string, limit?: number): string[];
    /**
      * Split a string into substrings using the specified separator and return them as an array.
      * @param separator A Regular Express that identifies character or characters to use in separating the string. If omitted, a single-element array containing the entire string is returned. 
      * @param limit A value used to limit the number of elements returned in the array.
      */
    split(separator: RegExp, limit?: number): string[];

    /**
      * Returns the substring at the specified location within a String object. 
      * @param start The zero-based index integer indicating the beginning of the substring.
      * @param end Zero-based index integer indicating the end of the substring. The substring includes the characters up to, but not including, the character indicated by end.
      * If end is omitted, the characters from start through the end of the original string are returned.
      */
    substring(start: number, end?: number): string;

    /** Converts all the alphabetic characters in a string to lowercase. */
    toLowerCase(): string;

    /** Converts all alphabetic characters to lowercase, taking into account the host environment's current locale. */
    toLocaleLowerCase(): string;

    /** Converts all the alphabetic characters in a string to uppercase. */
    toUpperCase(): string;

    /** Returns a string where all alphabetic characters have been converted to uppercase, taking into account the host environment's current locale. */
    toLocaleUpperCase(): string;

    /** Removes the leading and trailing white space and line terminator characters from a string. */
    trim(): string;

    /** Returns the length of a String object. */
    length: number;

    // IE extensions
    /**
      * Gets a substring beginning at the specified location and having the specified length.
      * @param from The starting position of the desired substring. The index of the first character in the string is zero.
      * @param length The number of characters to include in the returned substring.
      */
    substr(from: number, length?: number): string;
}

/** 
  * Allows manipulation and formatting of text strings and determination and location of substrings within strings. 
  */
declare var String: {
    new (value?: any): String;
    (value?: any): string;
    prototype: String;
    fromCharCode(...codes: number[]): string;
}

interface Boolean {
}
declare var Boolean: {
    new (value?: any): Boolean;
    (value?: any): bool;
    prototype: Boolean;
}

interface Number {
    toString(radix?: number): string;
    toFixed(fractionDigits?: number): string;
    toExponential(fractionDigits?: number): string;
    toPrecision(precision: number): string;
}
/** An object that represents a number of any kind. All JavaScript numbers are 64-bit floating-point numbers. */
declare var Number: {
    new (value?: any): Number;
    (value?: any): number;
    prototype: Number;
    /** The largest number that can be represented in JavaScript. Equal to approximately 1.79E+308. */
    MAX_VALUE: number;
    /** The closest number to zero that can be represented in JavaScript. Equal to approximately 5.00E-324. */
    MIN_VALUE: number;
    /** 
      * A value that is not a number.
      * In equality comparisons, NaN does not equal any value, including itself. To test whether a value is equivalent to NaN, use the isNaN function.
      */
    NaN: number;
    /** 
      * A value that is less than the largest negative number that can be represented in JavaScript.
      * JavaScript displays NEGATIVE_INFINITY values as -infinity. 
      */
    NEGATIVE_INFINITY: number;
    /**
      * A value greater than the largest number that can be represented in JavaScript. 
      * JavaScript displays POSITIVE_INFINITY values as infinity. 
      */
    POSITIVE_INFINITY: number;
}

interface Math {
    /** The mathematical constant e. This is Euler's number, the base of natural logarithms. */
    E: number;
    /** The natural logarithm of 10. */
    LN10: number;
    /** The natural logarithm of 2. */
    LN2: number;
    /** The base-2 logarithm of e. */
    LOG2E: number;
    /** The base-10 logarithm of e. */
    LOG10E: number;
    /** Pi. This is the ratio of the circumference of a circle to its diameter. */
    PI: number;
    /** The square root of 0.5, or, equivalently, one divided by the square root of 2. */
    SQRT1_2: number;
    /** The square root of 2. */
    SQRT2: number;
    /**
      * Returns the absolute value of a number (the value without regard to whether it is positive or negative). 
      * For example, the absolute value of -5 is the same as the absolute value of 5.
      * @param x A numeric expression for which the absolute value is needed.
      */
    abs(x: number): number;
    /**
      * Returns the arc cosine (or inverse cosine) of a number. 
      * @param x A numeric expression.
      */ 
    acos(x: number): number;
    /** 
      * Returns the arcsine of a number. 
      * @param x A numeric expression.
      */
    asin(x: number): number;
    /**
      * Returns the arctangent of a number. 
      * @param x A numeric expression for which the arctangent is needed.
      */
    atan(x: number): number;
    /**
      * Returns the angle (in radians) from the X axis to a point (y,x).
      * @param y A numeric expression representing the cartesian y-coordinate.
      * @param x A numeric expression representing the cartesian x-coordinate.
      */
    atan2(y: number, x: number): number;
    /**
      * Returns the smallest integer greater than or equal to its numeric argument. 
      * @param x A numeric expression.
      */
    ceil(x: number): number;
    /**
      * Returns the cosine of a number. 
      * @param x A numeric expression that contains an angle measured in radians.
      */ 
    cos(x: number): number;
    /**
      * Returns e (the base of natural logarithms) raised to a power. 
      * @param x A numeric expression representing the power of e.
      */
    exp(x: number): number;
    /**
      * Returns the greatest integer less than or equal to its numeric argument. 
      * @param x A numeric expression.
      */
    floor(x: number): number;
    /**
      * Returns the natural logarithm (base e) of a number. 
      * @param x A numeric expression.
      */
    log(x: number): number;
    /**
      * Returns the larger of a set of supplied numeric expressions. 
      * @param values Numeric expressions to be evaluated.
      */
    max(...values: number[]): number;
    /**
      * Returns the smaller of a set of supplied numeric expressions. 
      * @param values Numeric expressions to be evaluated.
      */
    min(...values: number[]): number;
    /**
      * Returns the value of a base expression taken to a specified power. 
      * @param x The base value of the expression.
      * @param y The exponent value of the expression.
      */
    pow(x: number, y: number): number;
    /** Returns a pseudorandom number between 0 and 1. */ 
    random(): number;
    /** 
      * Returns a supplied numeric expression rounded to the nearest integer.
      * @param x The value to be rounded to the nearest integer.
      */
    round(x: number): number;
    /**
      * Returns the sine of a number.
      * @param x A numeric expression that contains an angle measured in radians.
      */
    sin(x: number): number;
    /**
      * Returns the square root of a number.
      * @param x A numeric expression.
      */
    sqrt(x: number): number;
    /**
      * Returns the tangent of a number.
      * @param x A numeric expression that contains an angle measured in radians.
      */
    tan(x: number): number;
}
/** An intrinsic object that provides basic mathematics functionality and constants. */
declare var Math: Math;

/** Enables basic storage and retrieval of dates and times. */
interface Date {
    /** Returns a string representation of a date. The format of the string depends on the locale. */
    toString(): string;
    /** Returns a date as a string value. */
    toDateString(): string;
    /** Returns a time as a string value. */
    toTimeString(): string;
    toLocaleString(): string;
    /** Returns a date as a string value appropriate to the host environment's current locale. */
    toLocaleDateString(): string;
    /** Returns a time as a string value appropriate to the host environment's current locale. */
    toLocaleTimeString(): string;
    /** Returns the stored time value in milliseconds since midnight, January 1, 1970 UTC. */
    valueOf(): number;
    /** Gets the time value in milliseconds. */
    getTime(): number;
    /** Gets the year, using local time. */
    getFullYear(): number;
    /** Gets the year using Universal Coordinated Time (UTC). */
    getUTCFullYear(): number;
    /** Gets the month, using local time. */
    getMonth(): number;
    /** Gets the month of a Date object using Universal Coordinated Time (UTC). */
    getUTCMonth(): number;
    /** Gets the day-of-the-month, using local time. */
    getDate(): number;
    /** Gets the day-of-the-month, using Universal Coordinated Time (UTC). */
    getUTCDate(): number;
    /** Gets the day of the week, using local time. */
    getDay(): number;
    /** Gets the day of the week using Universal Coordinated Time (UTC). */
    getUTCDay(): number;
    /** Gets the hours in a date, using local time. */
    getHours(): number;
    /** Gets the hours value in a Date object using Universal Coordinated Time (UTC). */
    getUTCHours(): number;
    /** Gets the minutes of a Date object, using local time. */
    getMinutes(): number;
    /** Gets the minutes of a Date object using Universal Coordinated Time (UTC). */
    getUTCMinutes(): number;
    /** Gets the seconds of a Date object, using local time. */
    getSeconds(): number;
    /** Gets the seconds of a Date object using Universal Coordinated Time (UTC). */
    getUTCSeconds(): number;
    /** Gets the milliseconds of a Date, using local time. */
    getMilliseconds(): number;
    /** Gets the milliseconds of a Date object using Universal Coordinated Time (UTC). */
    getUTCMilliseconds(): number;
    /** Gets the difference in minutes between the time on the local computer and Universal Coordinated Time (UTC). */
    getTimezoneOffset(): number;
    /** 
      * Sets the date and time value in the Date object.
      * @param time A numeric value representing the number of elapsed milliseconds since midnight, January 1, 1970 GMT. 
      */
    setTime(time: number): void;
    /**
      * Sets the milliseconds value in the Date object using local time. 
      * @param ms A numeric value equal to the millisecond value.
      */
    setMilliseconds(ms: number): void;
    /** 
      * Sets the milliseconds value in the Date object using Universal Coordinated Time (UTC).
      * @param ms A numeric value equal to the millisecond value. 
      */
    setUTCMilliseconds(ms: number): void;

    /**
      * Sets the seconds value in the Date object using local time. 
      * @param sec A numeric value equal to the seconds value.
      * @param ms A numeric value equal to the milliseconds value.
      */
    setSeconds(sec: number, ms?: number): void;
    /**
      * Sets the seconds value in the Date object using Universal Coordinated Time (UTC).
      * @param sec A numeric value equal to the seconds value.
      * @param ms A numeric value equal to the milliseconds value.
      */
    setUTCSeconds(sec: number, ms?: number): void;
    /**
      * Sets the minutes value in the Date object using local time. 
      * @param min A numeric value equal to the minutes value. 
      * @param sec A numeric value equal to the seconds value. 
      * @param ms A numeric value equal to the milliseconds value.
      */
    setMinutes(min: number, sec?: number, ms?: number): void;
    /**
      * Sets the minutes value in the Date object using Universal Coordinated Time (UTC).
      * @param min A numeric value equal to the minutes value. 
      * @param sec A numeric value equal to the seconds value. 
      * @param ms A numeric value equal to the milliseconds value.
      */
    setUTCMinutes(min: number, sec?: number, ms?: number): void;
    /**
      * Sets the hour value in the Date object using local time.
      * @param hours A numeric value equal to the hours value.
      * @param min A numeric value equal to the minutes value.
      * @param sec A numeric value equal to the seconds value. 
      * @param ms A numeric value equal to the milliseconds value.
      */
    setHours(hours: number, min?: number, sec?: number, ms?: number): void;
    /**
      * Sets the hours value in the Date object using Universal Coordinated Time (UTC).
      * @param hours A numeric value equal to the hours value.
      * @param min A numeric value equal to the minutes value.
      * @param sec A numeric value equal to the seconds value. 
      * @param ms A numeric value equal to the milliseconds value.
      */
    setUTCHours(hours: number, min?: number, sec?: number, ms?: number): void;
    /**
      * Sets the numeric day-of-the-month value of the Date object using local time. 
      * @param date A numeric value equal to the day of the month.
      */
    setDate(date: number): void;
    /** 
      * Sets the numeric day of the month in the Date object using Universal Coordinated Time (UTC).
      * @param date A numeric value equal to the day of the month. 
      */
    setUTCDate(date: number): void;
    /** 
      * Sets the month value in the Date object using local time. 
      * @param month A numeric value equal to the month. The value for January is 0, and other month values follow consecutively. 
      * @param date A numeric value representing the day of the month. If this value is not supplied, the value from a call to the getDate method is used.
      */
    setMonth(month: number, date?: number): void;
    /**
      * Sets the month value in the Date object using Universal Coordinated Time (UTC).
      * @param month A numeric value equal to the month. The value for January is 0, and other month values follow consecutively.
      * @param date A numeric value representing the day of the month. If it is not supplied, the value from a call to the getUTCDate method is used.
      */
    setUTCMonth(month: number, date?: number): void;
    /**
      * Sets the year of the Date object using local time.
      * @param year A numeric value for the year.
      * @param month A zero-based numeric value for the month (0 for January, 11 for December). Must be specified if numDate is specified.
      * @param date A numeric value equal for the day of the month.
      */
    setFullYear(year: number, month?: number, date?: number): void;
    /**
      * Sets the year value in the Date object using Universal Coordinated Time (UTC).
      * @param year A numeric value equal to the year.
      * @param month A numeric value equal to the month. The value for January is 0, and other month values follow consecutively. Must be supplied if numDate is supplied.
      * @param date A numeric value equal to the day of the month.
      */
    setUTCFullYear(year: number, month?: number, date?: number): void;
    /** Returns a date converted to a string using Universal Coordinated Time (UTC). */
    toUTCString(): string;
    /** Returns a date as a string value in ISO format. */
    toISOString(): string;
    /** Used by the JSON.stringify method to enable the transformation of an object's data for JavaScript Object Notation (JSON) serialization. */ 
    toJSON(key?: any): string;
}
/**
  * Enables basic storage and retrieval of dates and times.
  */
declare var Date: {
    new (): Date;
    new (value: number): Date;
    new (value: string): Date;
    new (year: number, month: number, date?: number, hours?: number, minutes?: number, seconds?: number, ms?: number): Date;
    (): string;
    prototype: Date;
    /**
      * Parses a string containing a date, and returns the number of milliseconds between that date and midnight, January 1, 1970.
      * @param s A date string
      */
    parse(s: string): number;
    /**
      * Returns the number of milliseconds between midnight, January 1, 1970 Universal Coordinated Time (UTC) (or GMT) and the specified date. 
      * @param year The full year designation is required for cross-century date accuracy. If year is between 0 and 99 is used, then year is assumed to be 1900 + year.
      * @param month The month as an integer between 0 and 11 (January to December).
      * @param date The date as an integer between 1 and 31.
      * @param hours Must be supplied if minutes is supplied. An integer from 0 to 23 (midnight to 11pm) that specifies the hour.
      * @param minutes Must be supplied if seconds is supplied. An integer from 0 to 59 that specifies the minutes.
      * @param seconds Must be supplied if milliseconds is supplied. An integer from 0 to 59 that specifies the seconds.
      * @param ms An integer from 0 to 999 that specifies the milliseconds.
      */
    UTC(year: number, month: number, date?: number, hours?: number, minutes?: number, seconds?: number, ms?: number): number;
    now(): number;
}

interface RegExpExecArray {
    [index: number]: string;
    length: number;

    index: number;
    input: string;

    toString(): string;
    toLocaleString(): string;
    concat(...items: string[][]): string[];
    join(seperator?: string): string;
    pop(): string;
    push(...items: string[]): number;
    reverse(): string[];
    shift(): string;
    slice(start: number, end?: number): string[];
    sort(compareFn?: (a: string, b: string) => number): string[];
    splice(start: number): string[];
    splice(start: number, deleteCount: number, ...items: string[]): string[];
    unshift(...items: string[]): number;

    indexOf(searchElement: string, fromIndex?: number): number;
    lastIndexOf(searchElement: string, fromIndex?: number): number;
    every(callbackfn: (value: string, index: number, array: string[]) => bool, thisArg?: any): bool;
    some(callbackfn: (value: string, index: number, array: string[]) => bool, thisArg?: any): bool;
    forEach(callbackfn: (value: string, index: number, array: string[]) => void , thisArg?: any): void;
    map(callbackfn: (value: string, index: number, array: string[]) => any, thisArg?: any): any[];
    filter(callbackfn: (value: string, index: number, array: string[]) => bool, thisArg?: any): string[];
    reduce(callbackfn: (previousValue: any, currentValue: any, currentIndex: number, array: string[]) => any, initialValue?: any): any;
    reduceRight(callbackfn: (previousValue: any, currentValue: any, currentIndex: number, array: string[]) => any, initialValue?: any): any;
}


interface RegExp {
    /** 
      * Executes a search on a string using a regular expression pattern, and returns an array containing the results of that search.
      * @param string The String object or string literal on which to perform the search.
      */
    exec(string: string): RegExpExecArray;
    /** 
      * Returns a Boolean value that indicates whether or not a pattern exists in a searched string.
      * @param string String on which to perform the search.
      */
    test(string: string): bool;
    /** Returns a copy of the text of the regular expression pattern. Read-only. The rgExp argument is a Regular expression object. It can be a variable name or a literal. */
    source: string;
    /** Returns a Boolean value indicating the state of the global flag (g) used with a regular expression. Default is false. Read-only. */
    global: bool;
    /** Returns a Boolean value indicating the state of the ignoreCase flag (i) used with a regular expression. Default is false. Read-only. */
    ignoreCase: bool;
    /** Returns a Boolean value indicating the state of the multiline flag (m) used with a regular expression. Default is false. Read-only. */
    multiline: bool;

    lastIndex: number;

    // Non-standard extensions
    compile(): RegExp;
}
declare var RegExp: {
    new (pattern: string, flags?: string): RegExp;
    (pattern: string, flags?: string): RegExp;

    // Non-standard extensions
    $1: string;
    $2: string;
    $3: string;
    $4: string;
    $5: string;
    $6: string;
    $7: string;
    $8: string;
    $9: string;
    lastMatch: string;
}

interface Error {
    name: string;
    message: string;
}
declare var Error: {
    new (message?: string): Error;
    (message?: string): Error;
    prototype: Error;
}

interface EvalError extends Error {
}
declare var EvalError: {
    new (message?: string): EvalError;
    (message?: string): EvalError;
    prototype: EvalError;
}

interface RangeError extends Error {
}
declare var RangeError: {
    new (message?: string): RangeError;
    (message?: string): RangeError;
    prototype: RangeError;
}

interface ReferenceError extends Error {
}
declare var ReferenceError: {
    new (message?: string): ReferenceError;
    (message?: string): ReferenceError;
    prototype: ReferenceError;
}

interface SyntaxError extends Error {
}
declare var SyntaxError: {
    new (message?: string): SyntaxError;
    (message?: string): SyntaxError;
    prototype: SyntaxError;
}

interface TypeError extends Error {
}
declare var TypeError: {
    new (message?: string): TypeError;
    (message?: string): TypeError;
    prototype: TypeError;
}

interface URIError extends Error {
}
declare var URIError: {
    new (message?: string): URIError;
    (message?: string): URIError;
    prototype: URIError;
}

interface JSON {
    /**
      * Converts a JavaScript Object Notation (JSON) string into an object.
      * @param text A valid JSON string.
      * @param reviver A function that transforms the results. This function is called for each member of the object. 
      * If a member contains nested objects, the nested objects are transformed before the parent object is. 
      */
    parse(text: string, reviver?: (key: any, value: any) => any): any;
    /**
      * Converts a JavaScript value to a JavaScript Object Notation (JSON) string.
      * @param value A JavaScript value, usually an object or array, to be converted.
      */
    stringify(value: any): string;
    /**
      * Converts a JavaScript value to a JavaScript Object Notation (JSON) string.
      * @param value A JavaScript value, usually an object or array, to be converted.
      * @param replacer A function that transforms the results.
      */
    stringify(value: any, replacer: (key: string, value: any) => any): string;
    /**
      * Converts a JavaScript value to a JavaScript Object Notation (JSON) string.
      * @param value A JavaScript value, usually an object or array, to be converted.
      * @param replacer Array that transforms the results.
      */
    stringify(value: any, replacer: any[]): string;
    /**
      * Converts a JavaScript value to a JavaScript Object Notation (JSON) string.
      * @param value A JavaScript value, usually an object or array, to be converted.
      * @param replacer A function that transforms the results.
      * @param space Adds indentation, white space, and line break characters to the return-value JSON text to make it easier to read.
      */
    stringify(value: any, replacer: (key: string, value: any) => any, space: any): string;
    /**
      * Converts a JavaScript value to a JavaScript Object Notation (JSON) string.
      * @param value A JavaScript value, usually an object or array, to be converted.
      * @param replacer Array that transforms the results.
      * @param space Adds indentation, white space, and line break characters to the return-value JSON text to make it easier to read.
      */
    stringify(value: any, replacer: any[], space: any): string;
}
/**
  * An intrinsic object that provides functions to convert JavaScript values to and from the JavaScript Object Notation (JSON) format.
  */
declare var JSON: JSON;

////////////////
/// ECMAScript Array API (specially handled by compiler)
////////////////

interface Array {
    toString(): string;
    toLocaleString(): string;
    concat(...items: _element[][]): _element[];
    concat(...items: _element[]): _element[];
    join(seperator?: string): string;
    pop(): _element;
    push(...items: _element[]): number;
    reverse(): _element[];
    shift(): _element;
    slice(start: number, end?: number): _element[];
    sort(compareFn?: (a: _element, b: _element) => number): _element[];
    splice(start: number): _element[];
    splice(start: number, deleteCount: number, ...items: _element[]): _element[];
    unshift(...items: _element[]): number;

    indexOf(searchElement: _element, fromIndex?: number): number;
    lastIndexOf(searchElement: _element, fromIndex?: number): number;
    every(callbackfn: (value: _element, index: number, array: _element[]) => bool, thisArg?: any): bool;
    some(callbackfn: (value: _element, index: number, array: _element[]) => bool, thisArg?: any): bool;
    forEach(callbackfn: (value: _element, index: number, array: _element[]) => void , thisArg?: any): void;
    map(callbackfn: (value: _element, index: number, array: _element[]) => any, thisArg?: any): any[];
    filter(callbackfn: (value: _element, index: number, array: _element[]) => bool, thisArg?: any): _element[];
    reduce(callbackfn: (previousValue: any, currentValue: any, currentIndex: number, array: _element[]) => any, initialValue?: any): any;
    reduceRight(callbackfn: (previousValue: any, currentValue: any, currentIndex: number, array: _element[]) => any, initialValue?: any): any;

    length: number;
}
declare var Array: {
    new (...items: any[]): any[];
    (...items: any[]): any[];
    isArray(arg: any): bool;
    prototype: Array;
}

////////////////
/// IE10 ECMAScript Extensions
////////////////

interface ArrayBuffer {
    byteLength: number;
}
declare var ArrayBuffer: {
    prototype: ArrayBuffer;
    new (byteLength: number);
}

interface ArrayBufferView {
    buffer: ArrayBuffer;
    byteOffset: number;
    byteLength: number;
}

interface Int8Array extends ArrayBufferView {
    BYTES_PER_ELEMENT: number;
    length: number;
    [index: number]: number;
    get(index: number): number;
    set(index: number, value: number): void;
    set(array: Int8Array, offset?: number): void;
    set(array: number[], offset?: number): void;
    subarray(begin: number, end?: number): Int8Array;
}
declare var Int8Array: {
    prototype: Int8Array;
    new (length: number): Int8Array;
    new (array: Int8Array): Int8Array;
    new (array: number[]): Int8Array;
    new (buffer: ArrayBuffer, byteOffset?: number, length?: number): Int8Array;
    BYTES_PER_ELEMENT: number;
}

interface Uint8Array extends ArrayBufferView {
    BYTES_PER_ELEMENT: number;
    length: number;
    [index: number]: number;
    get(index: number): number;
    set(index: number, value: number): void;
    set(array: Uint8Array, offset?: number): void;
    set(array: number[], offset?: number): void;
    subarray(begin: number, end?: number): Uint8Array;
}
declare var Uint8Array: {
    prototype: Uint8Array;
    new (length: number): Uint8Array;
    new (array: Uint8Array): Uint8Array;
    new (array: number[]): Uint8Array;
    new (buffer: ArrayBuffer, byteOffset?: number, length?: number): Uint8Array;
    BYTES_PER_ELEMENT: number;
}

interface Int16Array extends ArrayBufferView {
    BYTES_PER_ELEMENT: number;
    length: number;
    [index: number]: number;
    get(index: number): number;
    set(index: number, value: number): void;
    set(array: Int16Array, offset?: number): void;
    set(array: number[], offset?: number): void;
    subarray(begin: number, end?: number): Int16Array;
}
declare var Int16Array: {
    prototype: Int16Array;
    new (length: number): Int16Array;
    new (array: Int16Array): Int16Array;
    new (array: number[]): Int16Array;
    new (buffer: ArrayBuffer, byteOffset?: number, length?: number): Int16Array;
    BYTES_PER_ELEMENT: number;
}

interface Uint16Array extends ArrayBufferView {
    BYTES_PER_ELEMENT: number;
    length: number;
    [index: number]: number;
    get(index: number): number;
    set(index: number, value: number): void;
    set(array: Uint16Array, offset?: number): void;
    set(array: number[], offset?: number): void;
    subarray(begin: number, end?: number): Uint16Array;
}
declare var Uint16Array: {
    prototype: Uint16Array;
    new (length: number): Uint16Array;
    new (array: Uint16Array): Uint16Array;
    new (array: number[]): Uint16Array;
    new (buffer: ArrayBuffer, byteOffset?: number, length?: number): Uint16Array;
    BYTES_PER_ELEMENT: number;
}

interface Int32Array extends ArrayBufferView {
    BYTES_PER_ELEMENT: number;
    length: number;
    [index: number]: number;
    get(index: number): number;
    set(index: number, value: number): void;
    set(array: Int32Array, offset?: number): void;
    set(array: number[], offset?: number): void;
    subarray(begin: number, end?: number): Int32Array;
}
declare var Int32Array: {
    prototype: Int32Array;
    new (length: number): Int32Array;
    new (array: Int32Array): Int32Array;
    new (array: number[]): Int32Array;
    new (buffer: ArrayBuffer, byteOffset?: number, length?: number): Int32Array;
    BYTES_PER_ELEMENT: number;
}

interface Uint32Array extends ArrayBufferView {
    BYTES_PER_ELEMENT: number;
    length: number;
    [index: number]: number;
    get(index: number): number;
    set(index: number, value: number): void;
    set(array: Uint32Array, offset?: number): void;
    set(array: number[], offset?: number): void;
    subarray(begin: number, end?: number): Uint32Array;
}
declare var Uint32Array: {
    prototype: Uint32Array;
    new (length: number): Uint32Array;
    new (array: Uint32Array): Uint32Array;
    new (array: number[]): Uint32Array;
    new (buffer: ArrayBuffer, byteOffset?: number, length?: number): Uint32Array;
    BYTES_PER_ELEMENT: number;
}

interface Float32Array extends ArrayBufferView {
    BYTES_PER_ELEMENT: number;
    length: number;
    [index: number]: number;
    get(index: number): number;
    set(index: number, value: number): void;
    set(array: Float32Array, offset?: number): void;
    set(array: number[], offset?: number): void;
    subarray(begin: number, end?: number): Float32Array;
}
declare var Float32Array: {
    prototype: Float32Array;
    new (length: number): Float32Array;
    new (array: Float32Array): Float32Array;
    new (array: number[]): Float32Array;
    new (buffer: ArrayBuffer, byteOffset?: number, length?: number): Float32Array;
    BYTES_PER_ELEMENT: number;
}

interface Float64Array extends ArrayBufferView {
    BYTES_PER_ELEMENT: number;
    length: number;
    [index: number]: number;
    get(index: number): number;
    set(index: number, value: number): void;
    set(array: Float64Array, offset?: number): void;
    set(array: number[], offset?: number): void;
    subarray(begin: number, end?: number): Float64Array;
}
declare var Float64Array: {
    prototype: Float64Array;
    new (length: number): Float64Array;
    new (array: Float64Array): Float64Array;
    new (array: number[]): Float64Array;
    new (buffer: ArrayBuffer, byteOffset?: number, length?: number): Float64Array;
    BYTES_PER_ELEMENT: number;
}

interface DataView extends ArrayBufferView {
    getInt8(byteOffset: number): number;
    getUint8(byteOffset: number): number;
    getInt16(byteOffset: number, littleEndian?: bool): number;
    getUint16(byteOffset: number, littleEndian?: bool): number;
    getInt32(byteOffset: number, littleEndian?: bool): number;
    getUint32(byteOffset: number, littleEndian?: bool): number;
    getFloat32(byteOffset: number, littleEndian?: bool): number;
    getFloat64(byteOffset: number, littleEndian?: bool): number;

    setInt8(byteOffset: number, value: number): void;
    setUint8(byteOffset: number, value: number): void;
    setInt16(byteOffset: number, value: number, littleEndian?: bool): void;
    setUint16(byteOffset: number, value: number, littleEndian?: bool): void;
    setInt32(byteOffset: number, value: number, littleEndian?: bool): void;
    setUint32(byteOffset: number, value: number, littleEndian?: bool): void;
    setFloat32(byteOffset: number, value: number, littleEndian?: bool): void;
    setFloat64(byteOffset: number, value: number, littleEndian?: bool): void;
}
declare var DataView: {
    prototype: DataView;
    new (buffer: ArrayBuffer, byteOffset?: number, length?: number): DataView;
}

////////////////
/// IE9 DOM APIs (note that 
////////////////

interface NavigatorID {
    appVersion: string;
    appName: string;
    userAgent: string;
    platform: string;
}

interface HTMLTableElement extends HTMLElement, DOML2DeprecatedBorderStyle_HTMLTableElement, DOML2DeprecatedAlignmentStyle_HTMLTableElement, MSBorderColorStyle, MSDataBindingExtensions, MSHTMLTableElementExtensions, DOML2DeprecatedBackgroundStyle, MSBorderColorHighlightStyle, MSDataBindingTableExtensions, DOML2DeprecatedBackgroundColorStyle {
    tBodies: HTMLCollection;
    width: string;
    tHead: HTMLTableSectionElement;
    cellSpacing: string;
    tFoot: HTMLTableSectionElement;
    frame: string;
    rows: HTMLCollection;
    rules: string;
    cellPadding: string;
    summary: string;
    caption: HTMLTableCaptionElement;
    deleteRow(index?: number): void;
    createTBody(): HTMLElement;
    deleteCaption(): void;
    insertRow(index?: number): HTMLElement;
    deleteTFoot(): void;
    createTHead(): HTMLElement;
    deleteTHead(): void;
    createCaption(): HTMLElement;
    createTFoot(): HTMLElement;
}
declare var HTMLTableElement: {
    prototype: HTMLTableElement;
    new(): HTMLTableElement;
}

interface TreeWalker {
    whatToShow: number;
    filter: NodeFilterCallback;
    root: Node;
    currentNode: Node;
    expandEntityReferences: bool;
    previousSibling(): Node;
    lastChild(): Node;
    nextSibling(): Node;
    nextNode(): Node;
    parentNode(): Node;
    firstChild(): Node;
    previousNode(): Node;
}
declare var TreeWalker: {
    prototype: TreeWalker;
    new(): TreeWalker;
}

interface GetSVGDocument {
    getSVGDocument(): SVGDocument;
}

interface HTMLHtmlElementDOML2Deprecated {
    version: string;
}

interface SVGPathSegCurvetoQuadraticRel extends SVGPathSeg {
    y: number;
    y1: number;
    x: number;
    x1: number;
}
declare var SVGPathSegCurvetoQuadraticRel: {
    prototype: SVGPathSegCurvetoQuadraticRel;
    new(): SVGPathSegCurvetoQuadraticRel;
}

interface Performance {
    navigation: PerformanceNavigation;
    timing: PerformanceTiming;
    toJSON(): any;
}
declare var Performance: {
    prototype: Performance;
    new(): Performance;
}

interface SVGSVGElementEventHandlers {
    onresize: (ev: UIEvent) => any;
    onunload: (ev: Event) => any;
    onscroll: (ev: UIEvent) => any;
    onerror: (ev: Event) => any;
    onzoom: (ev: any) => any;
    onabort: (ev: UIEvent) => any;
}

interface MSDataBindingTableExtensions {
    dataPageSize: number;
    nextPage(): void;
    firstPage(): void;
    refresh(): void;
    previousPage(): void;
    lastPage(): void;
}

interface DOML2DeprecatedAlignmentStyle_HTMLParagraphElement {
    align: string;
}

interface CompositionEvent extends UIEvent {
    data: string;
    locale: string;
    initCompositionEvent(typeArg: string, canBubbleArg: bool, cancelableArg: bool, viewArg: AbstractView, dataArg: string, locale: string): void;
}
declare var CompositionEvent: {
    prototype: CompositionEvent;
    new(): CompositionEvent;
}

interface SVGMarkerElement extends SVGElement, SVGStylable, SVGLangSpace, SVGFitToViewBox {
    orientType: SVGAnimatedEnumeration;
    markerUnits: SVGAnimatedEnumeration;
    markerWidth: SVGAnimatedLength;
    markerHeight: SVGAnimatedLength;
    orientAngle: SVGAnimatedAngle;
    refY: SVGAnimatedLength;
    refX: SVGAnimatedLength;
    setOrientToAngle(angle: SVGAngle): void;
    setOrientToAuto(): void;
    SVG_MARKER_ORIENT_UNKNOWN: number;
    SVG_MARKER_ORIENT_ANGLE: number;
    SVG_MARKERUNITS_UNKNOWN: number;
    SVG_MARKERUNITS_STROKEWIDTH: number;
    SVG_MARKER_ORIENT_AUTO: number;
    SVG_MARKERUNITS_USERSPACEONUSE: number;
}
declare var SVGMarkerElement: {
    prototype: SVGMarkerElement;
    new(): SVGMarkerElement;
    SVG_MARKER_ORIENT_UNKNOWN: number;
    SVG_MARKER_ORIENT_ANGLE: number;
    SVG_MARKERUNITS_UNKNOWN: number;
    SVG_MARKERUNITS_STROKEWIDTH: number;
    SVG_MARKER_ORIENT_AUTO: number;
    SVG_MARKERUNITS_USERSPACEONUSE: number;
}

interface WindowTimers {
    clearTimeout(handle: number): void;
    setTimeout(expression: any, msec?: number, language?: any): number;
    clearInterval(handle: number): void;
    setInterval(expression: any, msec?: number, language?: any): number;
}

interface CSSStyleDeclaration extends CSS3Properties, SVG1_1Properties, CSS2Properties {
    cssText: string;
    length: number;
    parentRule: CSSRule;
    getPropertyPriority(propertyName: string): string;
    getPropertyValue(propertyName: string): string;
    removeProperty(propertyName: string): string;
    item(index: number): string;
    [index: number]: string;
    setProperty(propertyName: string, value: string, priority?: string): void;
}
declare var CSSStyleDeclaration: {
    prototype: CSSStyleDeclaration;
    new(): CSSStyleDeclaration;
}

interface SVGGElement extends SVGElement, SVGStylable, SVGTransformable, SVGLangSpace, SVGTests {
}
declare var SVGGElement: {
    prototype: SVGGElement;
    new(): SVGGElement;
}

interface MSStyleCSSProperties extends MSCSSProperties {
    pixelWidth: number;
    posHeight: number;
    posLeft: number;
    pixelTop: number;
    pixelBottom: number;
    textDecorationNone: bool;
    pixelLeft: number;
    posTop: number;
    posBottom: number;
    textDecorationOverline: bool;
    posWidth: number;
    textDecorationLineThrough: bool;
    pixelHeight: number;
    textDecorationBlink: bool;
    posRight: number;
    pixelRight: number;
    textDecorationUnderline: bool;
}
declare var MSStyleCSSProperties: {
    prototype: MSStyleCSSProperties;
    new(): MSStyleCSSProperties;
}

interface MSCSSStyleSheetExtensions {
    owningElement: Element;
    imports: StyleSheetList;
    isAlternate: bool;
    rules: MSCSSRuleList;
    isPrefAlternate: bool;
    readOnly: bool;
    cssText: string;
    href: string;
    id: string;
    pages: StyleSheetPageList;
    addImport(bstrURL: string, lIndex?: number): number;
    addPageRule(bstrSelector: string, bstrStyle: string, lIndex?: number): number;
    removeRule(lIndex: number): void;
    addRule(bstrSelector: string, bstrStyle?: string, lIndex?: number): number;
    removeImport(lIndex: number): void;
}

interface Navigator extends NavigatorID, NavigatorOnLine, NavigatorDoNotTrack, NavigatorAbilities, NavigatorGeolocation, MSNavigatorAbilities {
}
declare var Navigator: {
    prototype: Navigator;
    new(): Navigator;
}

interface SVGPathSegCurvetoCubicSmoothAbs extends SVGPathSeg {
    y: number;
    x2: number;
    x: number;
    y2: number;
}
declare var SVGPathSegCurvetoCubicSmoothAbs: {
    prototype: SVGPathSegCurvetoCubicSmoothAbs;
    new(): SVGPathSegCurvetoCubicSmoothAbs;
}

interface MSBorderColorStyle_HTMLFrameSetElement {
    borderColor: any;
}

interface SVGZoomEvent extends UIEvent {
    zoomRectScreen: SVGRect;
    previousScale: number;
    newScale: number;
    previousTranslate: SVGPoint;
    newTranslate: SVGPoint;
}
declare var SVGZoomEvent: {
    prototype: SVGZoomEvent;
    new(): SVGZoomEvent;
}

interface NodeSelector {
    querySelectorAll(selectors: string): NodeList;
    querySelector(selectors: string): Element;
}

interface HTMLTableDataCellElement extends HTMLTableCellElement, MSHTMLTableDataCellElementExtensions {
}
declare var HTMLTableDataCellElement: {
    prototype: HTMLTableDataCellElement;
    new(): HTMLTableDataCellElement;
}

interface MSHTMLDirectoryElementExtensions extends DOML2DeprecatedListNumberingAndBulletStyle {
}

interface HTMLBaseElement extends HTMLElement {
    target: string;
    href: string;
}
declare var HTMLBaseElement: {
    prototype: HTMLBaseElement;
    new(): HTMLBaseElement;
}

interface ClientRect {
    left: number;
    width: number;
    right: number;
    top: number;
    bottom: number;
    height: number;
}
declare var ClientRect: {
    prototype: ClientRect;
    new(): ClientRect;
}

interface PositionErrorCallback {
    (error: PositionError): void;
}

interface DOMImplementation extends DOMHTMLImplementation {
    createDocumentType(qualifiedName: string, publicId: string, systemId: string): DocumentType;
    createDocument(namespaceURI: string, qualifiedName: string, doctype: DocumentType): Document;
    hasFeature(feature: string, version?: string): bool;
}
declare var DOMImplementation: {
    prototype: DOMImplementation;
    new(): DOMImplementation;
}

interface DOML2DeprecatedWidthStyle_HTMLBlockElement {
    width: number;
}

interface SVGUnitTypes {
    SVG_UNIT_TYPE_UNKNOWN: number;
    SVG_UNIT_TYPE_OBJECTBOUNDINGBOX: number;
    SVG_UNIT_TYPE_USERSPACEONUSE: number;
}
declare var SVGUnitTypes: {
    prototype: SVGUnitTypes;
    new(): SVGUnitTypes;
    SVG_UNIT_TYPE_UNKNOWN: number;
    SVG_UNIT_TYPE_OBJECTBOUNDINGBOX: number;
    SVG_UNIT_TYPE_USERSPACEONUSE: number;
}

interface DocumentRange {
    createRange(): Range;
}

interface MSHTMLDocumentExtensions {
    onrowexit: (ev: MSEventObj) => any;
    compatible: MSCompatibleInfoCollection;
    oncontrolselect: (ev: MSEventObj) => any;
    onrowsinserted: (ev: MSEventObj) => any;
    onpropertychange: (ev: MSEventObj) => any;
    media: string;
    onafterupdate: (ev: MSEventObj) => any;
    onhelp: (ev: Event) => any;
    uniqueID: string;
    onbeforeactivate: (ev: UIEvent) => any;
    onstoragecommit: (ev: StorageEvent) => any;
    onselectionchange: (ev: Event) => any;
    documentMode: number;
    onfocusout: (ev: FocusEvent) => any;
    ondataavailable: (ev: MSEventObj) => any;
    onbeforeupdate: (ev: MSEventObj) => any;
    onfocusin: (ev: FocusEvent) => any;
    security: string;
    namespaces: MSNamespaceInfoCollection;
    ondatasetcomplete: (ev: MSEventObj) => any;
    onbeforedeactivate: (ev: UIEvent) => any;
    onstop: (ev: Event) => any;
    onactivate: (ev: UIEvent) => any;
    onmssitemodejumplistitemremoved: (ev: MSSiteModeEvent) => any;
    frames: Window;
    onselectstart: (ev: Event) => any;
    onerrorupdate: (ev: MSEventObj) => any;
    parentWindow: Window;
    ondeactivate: (ev: UIEvent) => any;
    ondatasetchanged: (ev: MSEventObj) => any;
    onrowsdelete: (ev: MSEventObj) => any;
    onmsthumbnailclick: (ev: MSSiteModeEvent) => any;
    onrowenter: (ev: MSEventObj) => any;
    onbeforeeditfocus: (ev: MSEventObj) => any;
    Script: MSScriptHost;
    oncellchange: (ev: MSEventObj) => any;
    URLUnencoded: string;
    updateSettings(): void;
    execCommandShowHelp(commandId: string): bool;
    releaseCapture(): void;
    focus(): void;
}

interface CSS2Properties {
    backgroundAttachment: string;
    visibility: string;
    fontFamily: string;
    borderRightStyle: string;
    clear: string;
    content: string;
    counterIncrement: string;
    orphans: string;
    marginBottom: string;
    borderStyle: string;
    counterReset: string;
    outlineWidth: string;
    marginRight: string;
    paddingLeft: string;
    borderBottom: string;
    marginTop: string;
    borderTopColor: string;
    top: string;
    fontWeight: string;
    textIndent: string;
    borderRight: string;
    width: string;
    listStyleImage: string;
    cursor: string;
    listStylePosition: string;
    borderTopStyle: string;
    direction: string;
    maxWidth: string;
    color: string;
    clip: string;
    borderRightWidth: string;
    verticalAlign: string;
    pageBreakAfter: string;
    overflow: string;
    borderBottomStyle: string;
    borderLeftStyle: string;
    fontStretch: string;
    emptyCells: string;
    padding: string;
    paddingRight: string;
    background: string;
    bottom: string;
    height: string;
    paddingTop: string;
    right: string;
    borderLeftWidth: string;
    borderLeft: string;
    backgroundPosition: string;
    backgroundColor: string;
    widows: string;
    lineHeight: string;
    pageBreakInside: string;
    borderTopWidth: string;
    left: string;
    outlineStyle: string;
    borderTop: string;
    paddingBottom: string;
    outlineColor: string;
    wordSpacing: string;
    outline: string;
    font: string;
    marginLeft: string;
    display: string;
    maxHeight: string;
    cssFloat: string;
    letterSpacing: string;
    borderSpacing: string;
    backgroundRepeat: string;
    fontSizeAdjust: string;
    borderLeftColor: string;
    borderWidth: string;
    backgroundImage: string;
    listStyleType: string;
    whiteSpace: string;
    fontStyle: string;
    borderBottomColor: string;
    minWidth: string;
    position: string;
    zIndex: string;
    borderColor: string;
    listStyle: string;
    captionSide: string;
    borderCollapse: string;
    fontVariant: string;
    quotes: string;
    tableLayout: string;
    unicodeBidi: string;
    borderBottomWidth: string;
    minHeight: string;
    textDecoration: string;
    fontSize: string;
    border: string;
    pageBreakBefore: string;
    textAlign: string;
    textTransform: string;
    margin: string;
    borderRightColor: string;
}

interface MSImageResourceExtensions_HTMLInputElement {
    dynsrc: string;
    vrml: string;
    lowsrc: string;
    start: string;
    loop: number;
}

interface MSHTMLEmbedElementExtensions {
    palette: string;
    hidden: string;
    pluginspage: string;
    units: string;
}

interface MSHTMLModElementExtensions {
}

interface Element extends Node, NodeSelector, ElementTraversal, MSElementExtensions {
    scrollTop: number;
    clientLeft: number;
    scrollLeft: number;
    tagName: string;
    clientWidth: number;
    scrollWidth: number;
    clientHeight: number;
    clientTop: number;
    scrollHeight: number;
    getAttribute(name?: string): string;
    getElementsByTagNameNS(namespaceURI: string, localName: string): NodeList;
    hasAttributeNS(namespaceURI: string, localName: string): bool;
    getBoundingClientRect(): ClientRect;
    getAttributeNS(namespaceURI: string, localName: string): string;
    getAttributeNodeNS(namespaceURI: string, localName: string): Attr;
    setAttributeNodeNS(newAttr: Attr): Attr;
    hasAttribute(name: string): bool;
    removeAttribute(name?: string): void;
    setAttributeNS(namespaceURI: string, qualifiedName: string, value: string): void;
    getAttributeNode(name: string): Attr;
    getElementsByTagName(name: string): NodeList;
    setAttributeNode(newAttr: Attr): Attr;
    getClientRects(): ClientRectList;
    removeAttributeNode(oldAttr: Attr): Attr;
    setAttribute(name?: string, value?: string): void;
    removeAttributeNS(namespaceURI: string, localName: string): void;
}
declare var Element: {
    prototype: Element;
    new(): Element;
}

interface SVGDocument {
    rootElement: SVGSVGElement;
}

interface HTMLNextIdElement extends HTMLElement {
    n: string;
}
declare var HTMLNextIdElement: {
    prototype: HTMLNextIdElement;
    new(): HTMLNextIdElement;
}

interface SVGPathSegMovetoRel extends SVGPathSeg {
    y: number;
    x: number;
}
declare var SVGPathSegMovetoRel: {
    prototype: SVGPathSegMovetoRel;
    new(): SVGPathSegMovetoRel;
}

interface SVGLineElement extends SVGElement, SVGStylable, SVGTransformable, SVGLangSpace, SVGTests {
    y1: SVGAnimatedLength;
    x2: SVGAnimatedLength;
    x1: SVGAnimatedLength;
    y2: SVGAnimatedLength;
}
declare var SVGLineElement: {
    prototype: SVGLineElement;
    new(): SVGLineElement;
}

interface HTMLParagraphElement extends HTMLElement, DOML2DeprecatedAlignmentStyle_HTMLParagraphElement, MSHTMLParagraphElementExtensions {
}
declare var HTMLParagraphElement: {
    prototype: HTMLParagraphElement;
    new(): HTMLParagraphElement;
}

interface MSHTMLTextAreaElementExtensions {
    status: any;
    createTextRange(): TextRange;
}

interface ErrorFunction {
    (eventOrMessage: any, source: string, fileno: number): any;
}

interface HTMLAreasCollection extends HTMLCollection {
    remove(index?: number): void;
    add(element: HTMLElement, before?: any): void;
}
declare var HTMLAreasCollection: {
    prototype: HTMLAreasCollection;
    new(): HTMLAreasCollection;
}

interface SVGDescElement extends SVGElement, SVGStylable, SVGLangSpace {
}
declare var SVGDescElement: {
    prototype: SVGDescElement;
    new(): SVGDescElement;
}

interface Node extends EventTarget {
    nodeType: number;
    previousSibling: Node;
    localName: string;
    namespaceURI: string;
    textContent: string;
    parentNode: Node;
    nextSibling: Node;
    nodeValue: string;
    lastChild: Node;
    childNodes: NodeList;
    nodeName: string;
    ownerDocument: Document;
    attributes: Attr[];
    firstChild: Node;
    prefix: string;
    removeChild(oldChild: Node): Node;
    appendChild(newChild: Node): Node;
    isSupported(feature: string, version: string): bool;
    isEqualNode(arg: Node): bool;
    lookupPrefix(namespaceURI: string): string;
    isDefaultNamespace(namespaceURI: string): bool;
    compareDocumentPosition(other: Node): number;
    normalize(): void;
    isSameNode(other: Node): bool;
    hasAttributes(): bool;
    lookupNamespaceURI(prefix: string): string;
    cloneNode(deep?: bool): Node;
    hasChildNodes(): bool;
    replaceChild(newChild: Node, oldChild: Node): Node;
    insertBefore(newChild: Node, refChild?: Node): Node;
    ENTITY_REFERENCE_NODE: number;
    ATTRIBUTE_NODE: number;
    DOCUMENT_FRAGMENT_NODE: number;
    TEXT_NODE: number;
    ELEMENT_NODE: number;
    COMMENT_NODE: number;
    DOCUMENT_POSITION_DISCONNECTED: number;
    DOCUMENT_POSITION_CONTAINED_BY: number;
    DOCUMENT_POSITION_CONTAINS: number;
    DOCUMENT_TYPE_NODE: number;
    DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC: number;
    DOCUMENT_NODE: number;
    ENTITY_NODE: number;
    PROCESSING_INSTRUCTION_NODE: number;
    CDATA_SECTION_NODE: number;
    NOTATION_NODE: number;
    DOCUMENT_POSITION_FOLLOWING: number;
    DOCUMENT_POSITION_PRECEDING: number;
}
declare var Node: {
    prototype: Node;
    new(): Node;
    ENTITY_REFERENCE_NODE: number;
    ATTRIBUTE_NODE: number;
    DOCUMENT_FRAGMENT_NODE: number;
    TEXT_NODE: number;
    ELEMENT_NODE: number;
    COMMENT_NODE: number;
    DOCUMENT_POSITION_DISCONNECTED: number;
    DOCUMENT_POSITION_CONTAINED_BY: number;
    DOCUMENT_POSITION_CONTAINS: number;
    DOCUMENT_TYPE_NODE: number;
    DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC: number;
    DOCUMENT_NODE: number;
    ENTITY_NODE: number;
    PROCESSING_INSTRUCTION_NODE: number;
    CDATA_SECTION_NODE: number;
    NOTATION_NODE: number;
    DOCUMENT_POSITION_FOLLOWING: number;
    DOCUMENT_POSITION_PRECEDING: number;
}

interface MSHTMLLegendElementExtensions {
}

interface MSCSSStyleDeclarationExtensions {
    getAttribute(attributeName: string, flags?: number): any;
    setAttribute(attributeName: string, AttributeValue: any, flags?: number): void;
    removeAttribute(attributeName: string, flags?: number): bool;
}

interface SVGPathSegCurvetoQuadraticSmoothRel extends SVGPathSeg {
    y: number;
    x: number;
}
declare var SVGPathSegCurvetoQuadraticSmoothRel: {
    prototype: SVGPathSegCurvetoQuadraticSmoothRel;
    new(): SVGPathSegCurvetoQuadraticSmoothRel;
}

interface DOML2DeprecatedAlignmentStyle_HTMLTableRowElement {
    align: string;
}

interface DOML2DeprecatedBorderStyle_HTMLObjectElement {
    border: string;
}

interface MSHTMLSpanElementExtensions {
}

interface MSHTMLObjectElementExtensions {
    object: Object;
    alt: string;
    classid: string;
    altHtml: string;
    BaseHref: string;
}

interface DOML2DeprecatedListSpaceReduction {
    compact: bool;
}

interface CSS3Properties {
    textAlignLast: string;
    textUnderlinePosition: string;
    wordWrap: string;
    borderTopLeftRadius: string;
    backgroundClip: string;
    msTransformOrigin: string;
    opacity: string;
    overflowY: string;
    boxShadow: string;
    backgroundSize: string;
    wordBreak: string;
    boxSizing: string;
    rubyOverhang: string;
    rubyAlign: string;
    textJustify: string;
    borderRadius: string;
    overflowX: string;
    borderTopRightRadius: string;
    msTransform: string;
    borderBottomLeftRadius: string;
    rubyPosition: string;
    borderBottomRightRadius: string;
    backgroundOrigin: string;
    textOverflow: string;
}

interface MSScriptHost {
}
declare var MSScriptHost: {
    prototype: MSScriptHost;
    new(): MSScriptHost;
}

interface SVGClipPathElement extends SVGElement, SVGUnitTypes, SVGStylable, SVGTransformable, SVGLangSpace, SVGTests {
    clipPathUnits: SVGAnimatedEnumeration;
}
declare var SVGClipPathElement: {
    prototype: SVGClipPathElement;
    new(): SVGClipPathElement;
}

interface MouseEvent extends UIEvent, MSMouseEventExtensions {
    pageX: number;
    offsetY: number;
    x: number;
    y: number;
    altKey: bool;
    metaKey: bool;
    ctrlKey: bool;
    offsetX: number;
    screenX: number;
    clientY: number;
    shiftKey: bool;
    screenY: number;
    relatedTarget: EventTarget;
    button: number;
    pageY: number;
    buttons: number;
    clientX: number;
    initMouseEvent(typeArg: string, canBubbleArg: bool, cancelableArg: bool, viewArg: AbstractView, detailArg: number, screenXArg: number, screenYArg: number, clientXArg: number, clientYArg: number, ctrlKeyArg: bool, altKeyArg: bool, shiftKeyArg: bool, metaKeyArg: bool, buttonArg: number, relatedTargetArg: EventTarget): void;
    getModifierState(keyArg: string): bool;
}
declare var MouseEvent: {
    prototype: MouseEvent;
    new(): MouseEvent;
}

interface DOML2DeprecatedAlignmentStyle_HTMLTableElement {
    align: string;
}

interface RangeException {
    code: number;
    message: string;
    toString(): string;
    INVALID_NODE_TYPE_ERR: number;
    BAD_BOUNDARYPOINTS_ERR: number;
}
declare var RangeException: {
    prototype: RangeException;
    new(): RangeException;
    INVALID_NODE_TYPE_ERR: number;
    BAD_BOUNDARYPOINTS_ERR: number;
}

interface DOML2DeprecatedAlignmentStyle_HTMLHRElement {
    align: string;
}

interface SVGTextPositioningElement extends SVGTextContentElement {
    y: SVGAnimatedLengthList;
    rotate: SVGAnimatedNumberList;
    dy: SVGAnimatedLengthList;
    x: SVGAnimatedLengthList;
    dx: SVGAnimatedLengthList;
}
declare var SVGTextPositioningElement: {
    prototype: SVGTextPositioningElement;
    new(): SVGTextPositioningElement;
}

interface HTMLAppletElement extends HTMLElement, DOML2DeprecatedWidthStyle_HTMLAppletElement, DOML2DeprecatedMarginStyle_HTMLObjectElement, MSHTMLAppletElementExtensions, MSDataBindingExtensions, MSDataBindingRecordSetExtensions, DOML2DeprecatedAlignmentStyle_HTMLObjectElement {
    object: string;
    archive: string;
    codeBase: string;
    alt: string;
    name: string;
    height: string;
    code: string;
}
declare var HTMLAppletElement: {
    prototype: HTMLAppletElement;
    new(): HTMLAppletElement;
}

interface MSHTMLFieldSetElementExtensions extends DOML2DeprecatedAlignmentStyle_HTMLFieldSetElement {
}

interface DocumentEvent {
    createEvent(eventInterface: string): Event;
}

interface MSHTMLUnknownElementExtensions {
}

interface TextMetrics {
    width: number;
}
declare var TextMetrics: {
    prototype: TextMetrics;
    new(): TextMetrics;
}

interface DOML2DeprecatedWordWrapSuppression_HTMLBodyElement {
    noWrap: bool;
}

interface HTMLOListElement extends HTMLElement, DOML2DeprecatedListNumberingAndBulletStyle, DOML2DeprecatedListSpaceReduction, MSHTMLOListElementExtensions {
    start: number;
}
declare var HTMLOListElement: {
    prototype: HTMLOListElement;
    new(): HTMLOListElement;
}

interface MSHTMLTableCaptionElementExtensions {
    vAlign: string;
}

interface SVGAnimatedString {
    animVal: string;
    baseVal: string;
}
declare var SVGAnimatedString: {
    prototype: SVGAnimatedString;
    new(): SVGAnimatedString;
}

interface SVGPathSegLinetoVerticalRel extends SVGPathSeg {
    y: number;
}
declare var SVGPathSegLinetoVerticalRel: {
    prototype: SVGPathSegLinetoVerticalRel;
    new(): SVGPathSegLinetoVerticalRel;
}

interface CDATASection extends Text {
}
declare var CDATASection: {
    prototype: CDATASection;
    new(): CDATASection;
}

interface StyleMedia {
    type: string;
    matchMedium(mediaquery: string): bool;
}
declare var StyleMedia: {
    prototype: StyleMedia;
    new(): StyleMedia;
}

interface TextRange {
    boundingLeft: number;
    htmlText: string;
    offsetLeft: number;
    boundingWidth: number;
    boundingHeight: number;
    boundingTop: number;
    text: string;
    offsetTop: number;
    moveToPoint(x: number, y: number): void;
    queryCommandValue(cmdID: string): any;
    getBookmark(): string;
    move(Unit: string, Count?: number): number;
    queryCommandIndeterm(cmdID: string): bool;
    scrollIntoView(fStart?: bool): void;
    findText(string: string, count?: number, flags?: number): bool;
    execCommand(cmdID: string, showUI?: bool, value?: any): bool;
    getBoundingClientRect(): ClientRect;
    moveToBookmark(Bookmark: string): bool;
    isEqual(range: TextRange): bool;
    duplicate(): TextRange;
    collapse(Start?: bool): void;
    queryCommandText(cmdID: string): string;
    select(): void;
    pasteHTML(html: string): void;
    inRange(range: TextRange): bool;
    moveEnd(Unit: string, Count?: number): number;
    getClientRects(): ClientRectList;
    moveStart(Unit: string, Count?: number): number;
    parentElement(): Element;
    queryCommandState(cmdID: string): bool;
    compareEndPoints(how: string, sourceRange: TextRange): number;
    execCommandShowHelp(cmdID: string): bool;
    moveToElementText(element: Element): void;
    expand(Unit: string): bool;
    queryCommandSupported(cmdID: string): bool;
    setEndPoint(how: string, SourceRange: TextRange): void;
    queryCommandEnabled(cmdID: string): bool;
}
declare var TextRange: {
    prototype: TextRange;
    new(): TextRange;
}

interface HTMLSelectElement extends HTMLElement, MSHTMLCollectionExtensions, MSDataBindingExtensions, MSHTMLSelectElementExtensions {
    options: HTMLSelectElement;
    value: string;
    form: HTMLFormElement;
    name: string;
    size: number;
    length: number;
    selectedIndex: number;
    multiple: bool;
    type: string;
    remove(index?: number): void;
    add(element: HTMLElement, before?: any): void;
    item(name?: any, index?: any): any;
    (name: any, index: any): any;
    namedItem(name: string): any;
    [name: string]: any;
    (name: string): any;
}
declare var HTMLSelectElement: {
    prototype: HTMLSelectElement;
    new(): HTMLSelectElement;
}

interface CSSStyleSheet extends StyleSheet, MSCSSStyleSheetExtensions {
    ownerRule: CSSRule;
    cssRules: CSSRuleList;
    insertRule(rule: string, index?: number): number;
    deleteRule(index?: number): void;
}
declare var CSSStyleSheet: {
    prototype: CSSStyleSheet;
    new(): CSSStyleSheet;
}

interface HTMLBlockElement extends HTMLElement, DOML2DeprecatedTextFlowControl_HTMLBlockElement, DOML2DeprecatedWidthStyle_HTMLBlockElement {
    cite: string;
}
declare var HTMLBlockElement: {
    prototype: HTMLBlockElement;
    new(): HTMLBlockElement;
}

interface SVGTests {
    requiredFeatures: SVGStringList;
    requiredExtensions: SVGStringList;
    systemLanguage: SVGStringList;
    hasExtension(extension: string): bool;
}

interface MSSelection {
    type: string;
    typeDetail: string;
    createRange(): TextRange;
    clear(): void;
    createRangeCollection(): TextRangeCollection;
    empty(): void;
}
declare var MSSelection: {
    prototype: MSSelection;
    new(): MSSelection;
}

interface MSHTMLDListElementExtensions {
}

interface HTMLMetaElement extends HTMLElement, MSHTMLMetaElementExtensions {
    httpEquiv: string;
    name: string;
    content: string;
    scheme: string;
}
declare var HTMLMetaElement: {
    prototype: HTMLMetaElement;
    new(): HTMLMetaElement;
}

interface Selection {
    isCollapsed: bool;
    anchorNode: Node;
    focusNode: Node;
    anchorOffset: number;
    focusOffset: number;
    rangeCount: number;
    addRange(range: Range): void;
    collapseToEnd(): void;
    toString(): string;
    selectAllChildren(parentNode: Node): void;
    getRangeAt(index: number): Range;
    collapse(parentNode: Node, offset: number): void;
    removeAllRanges(): void;
    collapseToStart(): void;
    deleteFromDocument(): void;
    removeRange(range: Range): void;
}
declare var Selection: {
    prototype: Selection;
    new(): Selection;
}

interface SVGAnimatedAngle {
    animVal: SVGAngle;
    baseVal: SVGAngle;
}
declare var SVGAnimatedAngle: {
    prototype: SVGAnimatedAngle;
    new(): SVGAnimatedAngle;
}

interface SVGPatternElement extends SVGElement, SVGUnitTypes, SVGStylable, SVGLangSpace, SVGTests, SVGFitToViewBox, SVGURIReference {
    patternUnits: SVGAnimatedEnumeration;
    y: SVGAnimatedLength;
    width: SVGAnimatedLength;
    x: SVGAnimatedLength;
    patternContentUnits: SVGAnimatedEnumeration;
    patternTransform: SVGAnimatedTransformList;
    height: SVGAnimatedLength;
}
declare var SVGPatternElement: {
    prototype: SVGPatternElement;
    new(): SVGPatternElement;
}

interface SVGScriptElement extends SVGElement, SVGURIReference {
    type: string;
}
declare var SVGScriptElement: {
    prototype: SVGScriptElement;
    new(): SVGScriptElement;
}

interface HTMLDDElement extends HTMLElement, DOML2DeprecatedWordWrapSuppression_HTMLDDElement {
}
declare var HTMLDDElement: {
    prototype: HTMLDDElement;
    new(): HTMLDDElement;
}

interface NodeIterator {
    whatToShow: number;
    filter: NodeFilterCallback;
    root: Node;
    expandEntityReferences: bool;
    nextNode(): Node;
    detach(): void;
    previousNode(): Node;
}
declare var NodeIterator: {
    prototype: NodeIterator;
    new(): NodeIterator;
}

interface CSSStyleRule extends CSSRule, MSCSSStyleRuleExtensions {
    selectorText: string;
    style: MSStyleCSSProperties;
}
declare var CSSStyleRule: {
    prototype: CSSStyleRule;
    new(): CSSStyleRule;
}

interface MSDataBindingRecordSetReadonlyExtensions {
    recordset: Object;
    namedRecordset(dataMember: string, hierarchy?: any): Object;
}

interface HTMLLinkElement extends HTMLElement, MSLinkStyleExtensions, LinkStyle {
    rel: string;
    target: string;
    href: string;
    media: string;
    rev: string;
    type: string;
    charset: string;
    hreflang: string;
}
declare var HTMLLinkElement: {
    prototype: HTMLLinkElement;
    new(): HTMLLinkElement;
}

interface SVGViewElement extends SVGElement, SVGZoomAndPan, SVGFitToViewBox {
    viewTarget: SVGStringList;
}
declare var SVGViewElement: {
    prototype: SVGViewElement;
    new(): SVGViewElement;
}

interface MSHTMLAppletElementExtensions extends DOML2DeprecatedBorderStyle_HTMLObjectElement {
    codeType: string;
    standby: string;
    classid: string;
    useMap: string;
    form: HTMLFormElement;
    data: string;
    contentDocument: Document;
    altHtml: string;
    declare: bool;
    type: string;
    BaseHref: string;
}

interface SVGLocatable {
    farthestViewportElement: SVGElement;
    nearestViewportElement: SVGElement;
    getBBox(): SVGRect;
    getTransformToElement(element: SVGElement): SVGMatrix;
    getCTM(): SVGMatrix;
    getScreenCTM(): SVGMatrix;
}

interface HTMLFontElement extends HTMLElement, DOML2DeprecatedColorProperty, MSHTMLFontElementExtensions, DOML2DeprecatedSizeProperty {
    face: string;
}
declare var HTMLFontElement: {
    prototype: HTMLFontElement;
    new(): HTMLFontElement;
}

interface MSHTMLTableElementExtensions {
    cells: HTMLCollection;
    height: any;
    cols: number;
    moveRow(indexFrom?: number, indexTo?: number): Object;
}

interface SVGTitleElement extends SVGElement, SVGStylable, SVGLangSpace {
}
declare var SVGTitleElement: {
    prototype: SVGTitleElement;
    new(): SVGTitleElement;
}

interface ControlRangeCollection {
    length: number;
    queryCommandValue(cmdID: string): any;
    remove(index: number): void;
    add(item: Element): void;
    queryCommandIndeterm(cmdID: string): bool;
    scrollIntoView(varargStart?: any): void;
    item(index: number): Element;
    [index: number]: Element;
    execCommand(cmdID: string, showUI?: bool, value?: any): bool;
    addElement(item: Element): void;
    queryCommandState(cmdID: string): bool;
    queryCommandSupported(cmdID: string): bool;
    queryCommandEnabled(cmdID: string): bool;
    queryCommandText(cmdID: string): string;
    select(): void;
}
declare var ControlRangeCollection: {
    prototype: ControlRangeCollection;
    new(): ControlRangeCollection;
}

interface DOML2DeprecatedAlignmentStyle_HTMLImageElement {
    align: string;
}

interface MSHTMLFrameElementExtensions {
    width: any;
    contentWindow: Window;
    onload: (ev: Event) => any;
    frameBorder: string;
    height: any;
    border: string;
    frameSpacing: any;
}

interface MSNamespaceInfo extends MSEventAttachmentTarget {
    urn: string;
    onreadystatechange: (ev: Event) => any;
    name: string;
    readyState: string;
    doImport(implementationUrl: string): void;
}
declare var MSNamespaceInfo: {
    prototype: MSNamespaceInfo;
    new(): MSNamespaceInfo;
}

interface WindowSessionStorage {
    sessionStorage: Storage;
}

interface SVGAnimatedTransformList {
    animVal: SVGTransformList;
    baseVal: SVGTransformList;
}
declare var SVGAnimatedTransformList: {
    prototype: SVGAnimatedTransformList;
    new(): SVGAnimatedTransformList;
}

interface HTMLTableCaptionElement extends HTMLElement, MSHTMLTableCaptionElementExtensions, DOML2DeprecatedAlignmentStyle_HTMLTableCaptionElement {
}
declare var HTMLTableCaptionElement: {
    prototype: HTMLTableCaptionElement;
    new(): HTMLTableCaptionElement;
}

interface HTMLOptionElement extends HTMLElement, MSDataBindingExtensions {
    index: number;
    defaultSelected: bool;
    value: string;
    text: string;
    form: HTMLFormElement;
    label: string;
    selected: bool;
}
declare var HTMLOptionElement: {
    prototype: HTMLOptionElement;
    new(): HTMLOptionElement;
}

interface HTMLMapElement extends HTMLElement {
    name: string;
    areas: HTMLAreasCollection;
}
declare var HTMLMapElement: {
    prototype: HTMLMapElement;
    new(): HTMLMapElement;
}

interface HTMLMenuElement extends HTMLElement, DOML2DeprecatedListSpaceReduction, MSHTMLMenuElementExtensions {
    type: string;
}
declare var HTMLMenuElement: {
    prototype: HTMLMenuElement;
    new(): HTMLMenuElement;
}

interface MouseWheelEvent extends MouseEvent {
    wheelDelta: number;
    initMouseWheelEvent(typeArg: string, canBubbleArg: bool, cancelableArg: bool, viewArg: AbstractView, detailArg: number, screenXArg: number, screenYArg: number, clientXArg: number, clientYArg: number, buttonArg: number, relatedTargetArg: EventTarget, modifiersListArg: string, wheelDeltaArg: number): void;
}
declare var MouseWheelEvent: {
    prototype: MouseWheelEvent;
    new(): MouseWheelEvent;
}

interface SVGFitToViewBox {
    viewBox: SVGAnimatedRect;
    preserveAspectRatio: SVGAnimatedPreserveAspectRatio;
}

interface MSHTMLAnchorElementExtensions {
    nameProp: string;
    protocolLong: string;
    urn: string;
    mimeType: string;
    Methods: string;
}

interface SVGPointList {
    numberOfItems: number;
    replaceItem(newItem: SVGPoint, index: number): SVGPoint;
    getItem(index: number): SVGPoint;
    clear(): void;
    appendItem(newItem: SVGPoint): SVGPoint;
    initialize(newItem: SVGPoint): SVGPoint;
    removeItem(index: number): SVGPoint;
    insertItemBefore(newItem: SVGPoint, index: number): SVGPoint;
}
declare var SVGPointList: {
    prototype: SVGPointList;
    new(): SVGPointList;
}

interface MSElementCSSInlineStyleExtensions {
    doScroll(component?: any): void;
    componentFromPoint(x: number, y: number): string;
}

interface SVGAnimatedLengthList {
    animVal: SVGLengthList;
    baseVal: SVGLengthList;
}
declare var SVGAnimatedLengthList: {
    prototype: SVGAnimatedLengthList;
    new(): SVGAnimatedLengthList;
}

interface MSHTMLTableDataCellElementExtensions {
}

interface Window extends ViewCSS, MSEventAttachmentTarget, MSWindowExtensions, WindowPerformance, ScreenView, EventTarget, WindowLocalStorage, WindowSessionStorage, WindowTimers {
    ondragend: (ev: DragEvent) => any;
    onkeydown: (ev: KeyboardEvent) => any;
    ondragover: (ev: DragEvent) => any;
    onkeyup: (ev: KeyboardEvent) => any;
    onreset: (ev: Event) => any;
    onmouseup: (ev: MouseEvent) => any;
    ondragstart: (ev: DragEvent) => any;
    ondrag: (ev: DragEvent) => any;
    onmouseover: (ev: MouseEvent) => any;
    ondragleave: (ev: DragEvent) => any;
    history: History;
    name: string;
    onafterprint: (ev: Event) => any;
    onpause: (ev: Event) => any;
    onbeforeprint: (ev: Event) => any;
    top: Window;
    onmousedown: (ev: MouseEvent) => any;
    onseeked: (ev: Event) => any;
    opener: Window;
    onclick: (ev: MouseEvent) => any;
    onwaiting: (ev: Event) => any;
    ononline: (ev: Event) => any;
    ondurationchange: (ev: Event) => any;
    frames: Window;
    onblur: (ev: FocusEvent) => any;
    onemptied: (ev: Event) => any;
    onseeking: (ev: Event) => any;
    oncanplay: (ev: Event) => any;
    onstalled: (ev: Event) => any;
    onmousemove: (ev: MouseEvent) => any;
    onoffline: (ev: Event) => any;
    length: number;
    onbeforeunload: (ev: BeforeUnloadEvent) => any;
    onratechange: (ev: Event) => any;
    onstorage: (ev: StorageEvent) => any;
    onloadstart: (ev: Event) => any;
    ondragenter: (ev: DragEvent) => any;
    onsubmit: (ev: Event) => any;
    self: Window;
    onprogress: (ev: any) => any;
    ondblclick: (ev: MouseEvent) => any;
    oncontextmenu: (ev: MouseEvent) => any;
    onchange: (ev: Event) => any;
    onloadedmetadata: (ev: Event) => any;
    onplay: (ev: Event) => any;
    onerror: ErrorFunction;
    onplaying: (ev: Event) => any;
    parent: Window;
    location: Location;
    oncanplaythrough: (ev: Event) => any;
    onabort: (ev: UIEvent) => any;
    onreadystatechange: (ev: Event) => any;
    onkeypress: (ev: KeyboardEvent) => any;
    frameElement: Element;
    onloadeddata: (ev: Event) => any;
    onsuspend: (ev: Event) => any;
    window: Window;
    onfocus: (ev: FocusEvent) => any;
    onmessage: (ev: MessageEvent) => any;
    ontimeupdate: (ev: Event) => any;
    onresize: (ev: UIEvent) => any;
    navigator: Navigator;
    onselect: (ev: UIEvent) => any;
    ondrop: (ev: DragEvent) => any;
    onmouseout: (ev: MouseEvent) => any;
    onended: (ev: Event) => any;
    onhashchange: (ev: Event) => any;
    onunload: (ev: Event) => any;
    onscroll: (ev: UIEvent) => any;
    onmousewheel: (ev: MouseWheelEvent) => any;
    onload: (ev: Event) => any;
    onvolumechange: (ev: Event) => any;
    oninput: (ev: Event) => any;
    alert(message?: string): void;
    focus(): void;
    print(): void;
    prompt(message?: string, defaul?: string): string;
    toString(): string;
    open(url?: string, target?: string, features?: string, replace?: bool): Window;
    close(): void;
    confirm(message?: string): bool;
    postMessage(message: any, targetOrigin: string, ports?: any): void;
    showModalDialog(url?: string, argument?: any, options?: any): any;
    blur(): void;
    getSelection(): Selection;
}
declare var Window: {
    prototype: Window;
    new(): Window;
}

interface SVGAnimatedPreserveAspectRatio {
    animVal: SVGPreserveAspectRatio;
    baseVal: SVGPreserveAspectRatio;
}
declare var SVGAnimatedPreserveAspectRatio: {
    prototype: SVGAnimatedPreserveAspectRatio;
    new(): SVGAnimatedPreserveAspectRatio;
}

interface MSSiteModeEvent extends Event {
    buttonID: number;
    actionURL: string;
}
declare var MSSiteModeEvent: {
    prototype: MSSiteModeEvent;
    new(): MSSiteModeEvent;
}

interface MSCSSStyleRuleExtensions {
    readOnly: bool;
}

interface StyleSheetPageList {
    length: number;
    item(index: number): StyleSheetPage;
    [index: number]: StyleSheetPage;
}
declare var StyleSheetPageList: {
    prototype: StyleSheetPageList;
    new(): StyleSheetPageList;
}

interface HTMLCollection extends MSHTMLCollectionExtensions {
    length: number;
    item(nameOrIndex?: any, optionalIndex?: any): Element;
    (nameOrIndex: any, optionalIndex: any): Element;
    namedItem(name: string): Element;
    [index: number]: Element;
    [name: string]: Element;
    (name: string): Element;
}
declare var HTMLCollection: {
    prototype: HTMLCollection;
    new(): HTMLCollection;
}

interface MSCSSProperties extends CSSStyleDeclaration, MSCSSStyleDeclarationExtensions {
    scrollbarShadowColor: string;
    scrollbarHighlightColor: string;
    layoutGridChar: string;
    layoutGridType: string;
    textAutospace: string;
    textKashidaSpace: string;
    writingMode: string;
    scrollbarFaceColor: string;
    backgroundPositionY: string;
    lineBreak: string;
    imeMode: string;
    msBlockProgression: string;
    layoutGridLine: string;
    scrollbarBaseColor: string;
    layoutGrid: string;
    layoutFlow: string;
    textKashida: string;
    filter: string;
    zoom: string;
    scrollbarArrowColor: string;
    behavior: string;
    backgroundPositionX: string;
    accelerator: string;
    layoutGridMode: string;
    textJustifyTrim: string;
    scrollbar3dLightColor: string;
    msInterpolationMode: string;
    scrollbarTrackColor: string;
    scrollbarDarkShadowColor: string;
    styleFloat: string;
}
declare var MSCSSProperties: {
    prototype: MSCSSProperties;
    new(): MSCSSProperties;
}

interface HTMLImageElement extends HTMLElement, DOML2DeprecatedMarginStyle, DOML2DeprecatedBorderStyle, DOML2DeprecatedAlignmentStyle_HTMLImageElement, MSImageResourceExtensions, MSHTMLImageElementExtensions, MSDataBindingExtensions, MSResourceMetadata {
   width: number;
    naturalHeight: number;
    alt: string;
    src: string;
    useMap: string;
    naturalWidth: number;
    name: string;
    height: number;
    longDesc: string;
    isMap: bool;
    complete: bool;
}
declare var HTMLImageElement: {
    prototype: HTMLImageElement;
    new(): HTMLImageElement;
}

interface HTMLAreaElement extends HTMLElement, MSHTMLAreaElementExtensions {
    protocol: string;
    search: string;
    alt: string;
    coords: string;
    hostname: string;
    port: string;
    pathname: string;
    host: string;
    hash: string;
    target: string;
    href: string;
    noHref: bool;
    shape: string;
    toString(): string;
}
declare var HTMLAreaElement: {
    prototype: HTMLAreaElement;
    new(): HTMLAreaElement;
}

interface EventTarget {
    removeEventListener(type: string, listener: EventListener, useCapture?: bool): void;
    addEventListener(type: string, listener: EventListener, useCapture?: bool): void;
    dispatchEvent(evt: Event): bool;
}

interface SVGAngle {
    valueAsString: string;
    valueInSpecifiedUnits: number;
    value: number;
    unitType: number;
    newValueSpecifiedUnits(unitType: number, valueInSpecifiedUnits: number): void;
    convertToSpecifiedUnits(unitType: number): void;
    SVG_ANGLETYPE_RAD: number;
    SVG_ANGLETYPE_UNKNOWN: number;
    SVG_ANGLETYPE_UNSPECIFIED: number;
    SVG_ANGLETYPE_DEG: number;
    SVG_ANGLETYPE_GRAD: number;
}
declare var SVGAngle: {
    prototype: SVGAngle;
    new(): SVGAngle;
    SVG_ANGLETYPE_RAD: number;
    SVG_ANGLETYPE_UNKNOWN: number;
    SVG_ANGLETYPE_UNSPECIFIED: number;
    SVG_ANGLETYPE_DEG: number;
    SVG_ANGLETYPE_GRAD: number;
}

interface HTMLButtonElement extends HTMLElement, MSHTMLButtonElementExtensions, MSDataBindingExtensions {
    value: string;
    form: HTMLFormElement;
    name: string;
    type: string;
}
declare var HTMLButtonElement: {
    prototype: HTMLButtonElement;
    new(): HTMLButtonElement;
}

interface MSHTMLLabelElementExtensions {
}

interface HTMLSourceElement extends HTMLElement {
    src: string;
    media: string;
    type: string;
}
declare var HTMLSourceElement: {
    prototype: HTMLSourceElement;
    new(): HTMLSourceElement;
}

interface CanvasGradient {
    addColorStop(offset: number, color: string): void;
}
declare var CanvasGradient: {
    prototype: CanvasGradient;
    new(): CanvasGradient;
}

interface KeyboardEvent extends UIEvent, KeyboardEventExtensions {
    location: number;
    shiftKey: bool;
    locale: string;
    key: string;
    altKey: bool;
    metaKey: bool;
    char: string;
    ctrlKey: bool;
    repeat: bool;
    getModifierState(keyArg: string): bool;
    initKeyboardEvent(typeArg: string, canBubbleArg: bool, cancelableArg: bool, viewArg: AbstractView, keyArg: string, locationArg: number, modifiersListArg: string, repeat: bool, locale: string): void;
    DOM_KEY_LOCATION_RIGHT: number;
    DOM_KEY_LOCATION_STANDARD: number;
    DOM_KEY_LOCATION_LEFT: number;
    DOM_KEY_LOCATION_NUMPAD: number;
    DOM_KEY_LOCATION_JOYSTICK: number;
    DOM_KEY_LOCATION_MOBILE: number;
}
declare var KeyboardEvent: {
    prototype: KeyboardEvent;
    new(): KeyboardEvent;
    DOM_KEY_LOCATION_RIGHT: number;
    DOM_KEY_LOCATION_STANDARD: number;
    DOM_KEY_LOCATION_LEFT: number;
    DOM_KEY_LOCATION_NUMPAD: number;
    DOM_KEY_LOCATION_JOYSTICK: number;
    DOM_KEY_LOCATION_MOBILE: number;
}

interface Document extends Node, DocumentStyle, DocumentRange, HTMLDocument, NodeSelector, DocumentEvent, DocumentTraversal, DocumentView, SVGDocument {
    doctype: DocumentType;
    xmlVersion: string;
    implementation: DOMImplementation;
    xmlEncoding: string;
    xmlStandalone: bool;
    documentElement: HTMLElement;
    inputEncoding: string;
    createElement(tagName: string): HTMLElement;
    adoptNode(source: Node): Node;
    createComment(data: string): Comment;
    createDocumentFragment(): DocumentFragment;
    getElementsByTagName(tagname: string): NodeList;
    getElementsByTagNameNS(namespaceURI: string, localName: string): NodeList;
    createProcessingInstruction(target: string, data: string): ProcessingInstruction;
    createElementNS(namespaceURI: string, qualifiedName: string): Element;
    createAttribute(name: string): Attr;
    createTextNode(data: string): Text;
    importNode(importedNode: Node, deep: bool): Node;
    createCDATASection(data: string): CDATASection;
    createAttributeNS(namespaceURI: string, qualifiedName: string): Attr;
    getElementById(elementId: string): HTMLElement;
}
declare var Document: {
    prototype: Document;
    new(): Document;
}

interface MessageEvent extends Event {
    source: Window;
    origin: string;
    data: any;
    initMessageEvent(typeArg: string, canBubbleArg: bool, cancelableArg: bool, dataArg: any, originArg: string, lastEventIdArg: string, sourceArg: Window): void;
}
declare var MessageEvent: {
    prototype: MessageEvent;
    new(): MessageEvent;
}

interface SVGElement extends Element, SVGElementEventHandlers {
    xmlbase: string;
    viewportElement: SVGElement;
    id: string;
    ownerSVGElement: SVGSVGElement;
}
declare var SVGElement: {
    prototype: SVGElement;
    new(): SVGElement;
}

interface HTMLScriptElement extends HTMLElement {
    defer: bool;
    text: string;
    src: string;
    htmlFor: string;
    charset: string;
    type: string;
    event: string;
}
declare var HTMLScriptElement: {
    prototype: HTMLScriptElement;
    new(): HTMLScriptElement;
}

interface MSHTMLBodyElementExtensions extends DOML2DeprecatedWordWrapSuppression_HTMLBodyElement {
    scroll: string;
    bottomMargin: any;
    topMargin: any;
    rightMargin: any;
    bgProperties: string;
    leftMargin: any;
    createTextRange(): TextRange;
}

interface HTMLTableRowElement extends HTMLElement, MSBorderColorHighlightStyle_HTMLTableRowElement, HTMLTableAlignment, MSBorderColorStyle_HTMLTableRowElement, DOML2DeprecatedAlignmentStyle_HTMLTableRowElement, DOML2DeprecatedBackgroundColorStyle, MSHTMLTableRowElementExtensions {
    rowIndex: number;
    cells: HTMLCollection;
    sectionRowIndex: number;
    deleteCell(index?: number): void;
    insertCell(index?: number): HTMLElement;
}
declare var HTMLTableRowElement: {
    prototype: HTMLTableRowElement;
    new(): HTMLTableRowElement;
}

interface MSCommentExtensions {
    text: string;
}

interface DOML2DeprecatedMarginStyle_HTMLMarqueeElement {
    vspace: number;
    hspace: number;
}

interface MSCSSRuleList {
    length: number;
    item(index?: number): CSSStyleRule;
    [index: number]: CSSStyleRule;
}
declare var MSCSSRuleList: {
    prototype: MSCSSRuleList;
    new(): MSCSSRuleList;
}

interface CanvasRenderingContext2D {
    shadowOffsetX: number;
    lineWidth: number;
    miterLimit: number;
    canvas: HTMLCanvasElement;
    strokeStyle: any;
    font: string;
    globalAlpha: number;
    globalCompositeOperation: string;
    shadowOffsetY: number;
    fillStyle: any;
    lineCap: string;
    shadowBlur: number;
    textAlign: string;
    textBaseline: string;
    shadowColor: string;
    lineJoin: string;
    restore(): void;
    setTransform(m11: number, m12: number, m21: number, m22: number, dx: number, dy: number): void;
    save(): void;
    arc(x: number, y: number, radius: number, startAngle: number, endAngle: number, anticlockwise?: bool): void;
    measureText(text: string): TextMetrics;
    isPointInPath(x: number, y: number): bool;
    quadraticCurveTo(cpx: number, cpy: number, x: number, y: number): void;
    putImageData(imagedata: ImageData, dx: number, dy: number, dirtyX?: number, dirtyY?: number, dirtyWidth?: number, dirtyHeight?: number): void;
    rotate(angle: number): void;
    fillText(text: string, x: number, y: number, maxWidth?: number): void;
    translate(x: number, y: number): void;
    scale(x: number, y: number): void;
    createRadialGradient(x0: number, y0: number, r0: number, x1: number, y1: number, r1: number): CanvasGradient;
    lineTo(x: number, y: number): void;
    fill(): void;
    createPattern(image: HTMLElement, repetition: string): CanvasPattern;
    closePath(): void;
    rect(x: number, y: number, w: number, h: number): void;
    clip(): void;
    createImageData(imageDataOrSw: any, sh?: number): ImageData;
    clearRect(x: number, y: number, w: number, h: number): void;
    moveTo(x: number, y: number): void;
    getImageData(sx: number, sy: number, sw: number, sh: number): ImageData;
    fillRect(x: number, y: number, w: number, h: number): void;
    bezierCurveTo(cp1x: number, cp1y: number, cp2x: number, cp2y: number, x: number, y: number): void;
    drawImage(image: HTMLElement, offsetX: number, offsetY: number, width?: number, height?: number, canvasOffsetX?: number, canvasOffsetY?: number, canvasImageWidth?: number, canvasImageHeight?: number): void;
    transform(m11: number, m12: number, m21: number, m22: number, dx: number, dy: number): void;
    stroke(): void;
    strokeRect(x: number, y: number, w: number, h: number): void;
    strokeText(text: string, x: number, y: number, maxWidth?: number): void;
    beginPath(): void;
    arcTo(x1: number, y1: number, x2: number, y2: number, radius: number): void;
    createLinearGradient(x0: number, y0: number, x1: number, y1: number): CanvasGradient;
}
declare var CanvasRenderingContext2D: {
    prototype: CanvasRenderingContext2D;
    new(): CanvasRenderingContext2D;
}

interface SVGPathSegLinetoHorizontalAbs extends SVGPathSeg {
    x: number;
}
declare var SVGPathSegLinetoHorizontalAbs: {
    prototype: SVGPathSegLinetoHorizontalAbs;
    new(): SVGPathSegLinetoHorizontalAbs;
}

interface DOML2DeprecatedAlignmentStyle_HTMLObjectElement {
    align: string;
}

interface DOML2DeprecatedBorderStyle_MSHTMLIFrameElementExtensions {
    border: string;
}

interface MSHTMLElementRangeExtensions {
    createControlRange(): ControlRangeCollection;
}

interface SVGPathSegArcAbs extends SVGPathSeg {
    y: number;
    sweepFlag: bool;
    r2: number;
    x: number;
    angle: number;
    r1: number;
    largeArcFlag: bool;
}
declare var SVGPathSegArcAbs: {
    prototype: SVGPathSegArcAbs;
    new(): SVGPathSegArcAbs;
}

interface MSScreenExtensions {
    deviceXDPI: number;
    fontSmoothingEnabled: bool;
    bufferDepth: number;
    logicalXDPI: number;
    systemXDPI: number;
    logicalYDPI: number;
    systemYDPI: number;
    updateInterval: number;
    deviceYDPI: number;
}

interface HTMLHtmlElement extends HTMLElement, HTMLHtmlElementDOML2Deprecated {
}
declare var HTMLHtmlElement: {
    prototype: HTMLHtmlElement;
    new(): HTMLHtmlElement;
}

interface MSBorderColorStyle {
    borderColor: any;
}

interface SVGTransformList {
    numberOfItems: number;
    getItem(index: number): SVGTransform;
    consolidate(): SVGTransform;
    clear(): void;
    appendItem(newItem: SVGTransform): SVGTransform;
    initialize(newItem: SVGTransform): SVGTransform;
    removeItem(index: number): SVGTransform;
    insertItemBefore(newItem: SVGTransform, index: number): SVGTransform;
    replaceItem(newItem: SVGTransform, index: number): SVGTransform;
    createSVGTransformFromMatrix(matrix: SVGMatrix): SVGTransform;
}
declare var SVGTransformList: {
    prototype: SVGTransformList;
    new(): SVGTransformList;
}

interface SVGPathSegClosePath extends SVGPathSeg {
}
declare var SVGPathSegClosePath: {
    prototype: SVGPathSegClosePath;
    new(): SVGPathSegClosePath;
}

interface DOML2DeprecatedMarginStyle_MSHTMLIFrameElementExtensions {
    vspace: number;
    hspace: number;
}

interface HTMLFrameElement extends HTMLElement, GetSVGDocument, MSHTMLFrameElementExtensions, MSDataBindingExtensions, MSBorderColorStyle_HTMLFrameElement {
    scrolling: string;
    marginHeight: string;
    src: string;
    name: string;
    marginWidth: string;
    contentDocument: Document;
    longDesc: string;
    noResize: bool;
}
declare var HTMLFrameElement: {
    prototype: HTMLFrameElement;
    new(): HTMLFrameElement;
}

interface SVGAnimatedLength {
    animVal: SVGLength;
    baseVal: SVGLength;
}
declare var SVGAnimatedLength: {
    prototype: SVGAnimatedLength;
    new(): SVGAnimatedLength;
}

interface CSSMediaRule extends CSSRule {
    media: MediaList;
    cssRules: CSSRuleList;
    insertRule(rule: string, index?: number): number;
    deleteRule(index?: number): void;
}
declare var CSSMediaRule: {
    prototype: CSSMediaRule;
    new(): CSSMediaRule;
}

interface HTMLQuoteElement extends HTMLElement, MSHTMLQuoteElementExtensions {
    cite: string;
}
declare var HTMLQuoteElement: {
    prototype: HTMLQuoteElement;
    new(): HTMLQuoteElement;
}

interface SVGDefsElement extends SVGElement, SVGStylable, SVGTransformable, SVGLangSpace, SVGTests {
}
declare var SVGDefsElement: {
    prototype: SVGDefsElement;
    new(): SVGDefsElement;
}

interface SVGAnimatedPoints {
    points: SVGPointList;
    animatedPoints: SVGPointList;
}

interface WindowModal {
    dialogArguments: any;
    returnValue: any;
}

interface MSHTMLButtonElementExtensions {
    status: any;
    createTextRange(): TextRange;
}

interface XMLHttpRequest extends EventTarget, MSXMLHttpRequestExtensions {
    onreadystatechange: (ev: Event) => any;
    status: number;
    onload: (ev: Event) => any;
    readyState: number;
    responseText: string;
    responseXML: Document;
    statusText: string;
    open(method: string, url: string, async?: bool, user?: string, password?: string): void;
    send(data?: any): void;
    abort(): void;
    getAllResponseHeaders(): string;
    setRequestHeader(header: string, value: string): void;
    getResponseHeader(header: string): string;
    LOADING: number;
    DONE: number;
    UNSENT: number;
    OPENED: number;
    HEADERS_RECEIVED: number;
}
declare var XMLHttpRequest: {
    prototype: XMLHttpRequest;
    new (): XMLHttpRequest;
    LOADING: number;
    DONE: number;
    UNSENT: number;
    OPENED: number;
    HEADERS_RECEIVED: number;
}

interface HTMLTableHeaderCellElement extends HTMLTableCellElement, HTMLTableHeaderCellScope {
}
declare var HTMLTableHeaderCellElement: {
    prototype: HTMLTableHeaderCellElement;
    new(): HTMLTableHeaderCellElement;
}

interface HTMLDListElement extends HTMLElement, DOML2DeprecatedListSpaceReduction, MSHTMLDListElementExtensions {
}
declare var HTMLDListElement: {
    prototype: HTMLDListElement;
    new(): HTMLDListElement;
}

interface MSDataBindingExtensions {
    dataSrc: string;
    dataFormatAs: string;
    dataFld: string;
}

interface SVGEllipseElement extends SVGElement, SVGStylable, SVGTransformable, SVGLangSpace, SVGTests {
    ry: SVGAnimatedLength;
    cx: SVGAnimatedLength;
    rx: SVGAnimatedLength;
    cy: SVGAnimatedLength;
}
declare var SVGEllipseElement: {
    prototype: SVGEllipseElement;
    new(): SVGEllipseElement;
}

interface SVGPathSegLinetoHorizontalRel extends SVGPathSeg {
    x: number;
}
declare var SVGPathSegLinetoHorizontalRel: {
    prototype: SVGPathSegLinetoHorizontalRel;
    new(): SVGPathSegLinetoHorizontalRel;
}

interface SVGAElement extends SVGElement, SVGStylable, SVGTransformable, SVGLangSpace, SVGTests, SVGURIReference {
    target: SVGAnimatedString;
}
declare var SVGAElement: {
    prototype: SVGAElement;
    new(): SVGAElement;
}

interface MSHTMLMetaElementExtensions {
    url: string;
    charset: string;
}

interface SVGStylable {
    className: SVGAnimatedString;
    style: CSSStyleDeclaration;
}

interface MSHTMLTableCellElementExtensions {
}

interface HTMLFrameSetElement extends HTMLElement, MSHTMLFrameSetElementExtensions, MSBorderColorStyle_HTMLFrameSetElement {
    onresize: (ev: UIEvent) => any;
    ononline: (ev: Event) => any;
    onafterprint: (ev: Event) => any;
    onbeforeprint: (ev: Event) => any;
    onoffline: (ev: Event) => any;
    rows: string;
    cols: string;
    onblur: (ev: FocusEvent) => any;
    onunload: (ev: Event) => any;
    onhashchange: (ev: Event) => any;
    onfocus: (ev: FocusEvent) => any;
    onmessage: (ev: MessageEvent) => any;
    onload: (ev: Event) => any;
    onerror: (ev: Event) => any;
    onbeforeunload: (ev: BeforeUnloadEvent) => any;
    onstorage: (ev: StorageEvent) => any;
}
declare var HTMLFrameSetElement: {
    prototype: HTMLFrameSetElement;
    new(): HTMLFrameSetElement;
}

interface SVGTransformable extends SVGLocatable {
    transform: SVGAnimatedTransformList;
}

interface Screen extends MSScreenExtensions {
    width: number;
    colorDepth: number;
    availWidth: number;
    pixelDepth: number;
    availHeight: number;
    height: number;
}
declare var Screen: {
    prototype: Screen;
    new(): Screen;
}

interface NavigatorGeolocation {
    geolocation: Geolocation;
}

interface Coordinates {
    altitudeAccuracy: number;
    longitude: number;
    latitude: number;
    speed: number;
    heading: number;
    altitude: number;
    accuracy: number;
}
declare var Coordinates: {
    prototype: Coordinates;
    new(): Coordinates;
}

interface DOML2DeprecatedAlignmentStyle_HTMLTableColElement {
    align: string;
}

interface EventListener {
    (evt: Event): void;
}

interface SVGLangSpace {
    xmllang: string;
    xmlspace: string;
}

interface DataTransfer {
    effectAllowed: string;
    dropEffect: string;
    clearData(format?: string): bool;
    setData(format: string, data: string): bool;
    getData(format: string): string;
}
declare var DataTransfer: {
    prototype: DataTransfer;
    new(): DataTransfer;
}

interface FocusEvent extends UIEvent {
    relatedTarget: EventTarget;
    initFocusEvent(typeArg: string, canBubbleArg: bool, cancelableArg: bool, viewArg: AbstractView, detailArg: number, relatedTargetArg: EventTarget): void;
}
declare var FocusEvent: {
    prototype: FocusEvent;
    new(): FocusEvent;
}

interface Range {
    startOffset: number;
    collapsed: bool;
    endOffset: number;
    startContainer: Node;
    endContainer: Node;
    commonAncestorContainer: Node;
    setStart(refNode: Node, offset: number): void;
    setEndBefore(refNode: Node): void;
    setStartBefore(refNode: Node): void;
    selectNode(refNode: Node): void;
    detach(): void;
    getBoundingClientRect(): ClientRect;
    toString(): string;
    compareBoundaryPoints(how: number, sourceRange: Range): number;
    insertNode(newNode: Node): void;
    collapse(toStart: bool): void;
    selectNodeContents(refNode: Node): void;
    cloneContents(): DocumentFragment;
    setEnd(refNode: Node, offset: number): void;
    cloneRange(): Range;
    getClientRects(): ClientRectList;
    surroundContents(newParent: Node): void;
    deleteContents(): void;
    setStartAfter(refNode: Node): void;
    extractContents(): DocumentFragment;
    setEndAfter(refNode: Node): void;
    END_TO_END: number;
    START_TO_START: number;
    START_TO_END: number;
    END_TO_START: number;
}
declare var Range: {
    prototype: Range;
    new(): Range;
    END_TO_END: number;
    START_TO_START: number;
    START_TO_END: number;
    END_TO_START: number;
}

interface MSHTMLPreElementExtensions extends DOML2DeprecatedTextFlowControl_HTMLBlockElement {
    cite: string;
}

interface SVGPoint {
    y: number;
    x: number;
    matrixTransform(matrix: SVGMatrix): SVGPoint;
}
declare var SVGPoint: {
    prototype: SVGPoint;
    new(): SVGPoint;
}

interface MSPluginsCollection {
    length: number;
    refresh(reload?: bool): void;
}
declare var MSPluginsCollection: {
    prototype: MSPluginsCollection;
    new(): MSPluginsCollection;
}

interface MSHTMLFontElementExtensions {
}

interface SVGAnimatedNumberList {
    animVal: SVGNumberList;
    baseVal: SVGNumberList;
}
declare var SVGAnimatedNumberList: {
    prototype: SVGAnimatedNumberList;
    new(): SVGAnimatedNumberList;
}

interface SVGSVGElement extends SVGElement, SVGZoomAndPan, SVGLangSpace, SVGLocatable, SVGTests, SVGFitToViewBox, SVGSVGElementEventHandlers, SVGStylable, DocumentEvent, ViewCSS_SVGSVGElement {
    width: SVGAnimatedLength;
    x: SVGAnimatedLength;
    contentStyleType: string;
    screenPixelToMillimeterY: number;
    height: SVGAnimatedLength;
    contentScriptType: string;
    pixelUnitToMillimeterX: number;
    currentTranslate: SVGPoint;
    y: SVGAnimatedLength;
    viewport: SVGRect;
    currentScale: number;
    screenPixelToMillimeterX: number;
    pixelUnitToMillimeterY: number;
    setCurrentTime(seconds: number): void;
    createSVGLength(): SVGLength;
    getIntersectionList(rect: SVGRect, referenceElement: SVGElement): NodeList;
    unpauseAnimations(): void;
    createSVGRect(): SVGRect;
    checkIntersection(element: SVGElement, rect: SVGRect): bool;
    unsuspendRedrawAll(): void;
    pauseAnimations(): void;
    suspendRedraw(maxWaitMilliseconds: number): number;
    deselectAll(): void;
    createSVGAngle(): SVGAngle;
    getEnclosureList(rect: SVGRect, referenceElement: SVGElement): NodeList;
    createSVGTransform(): SVGTransform;
    unsuspendRedraw(suspendHandleID: number): void;
    forceRedraw(): void;
    getCurrentTime(): number;
    checkEnclosure(element: SVGElement, rect: SVGRect): bool;
    createSVGMatrix(): SVGMatrix;
    createSVGPoint(): SVGPoint;
    createSVGNumber(): SVGNumber;
    createSVGTransformFromMatrix(matrix: SVGMatrix): SVGTransform;
    getElementById(elementId: string): Element;
}
declare var SVGSVGElement: {
    prototype: SVGSVGElement;
    new(): SVGSVGElement;
}

interface HTMLLabelElement extends HTMLElement, MSDataBindingExtensions, MSHTMLLabelElementExtensions {
    htmlFor: string;
    form: HTMLFormElement;
}
declare var HTMLLabelElement: {
    prototype: HTMLLabelElement;
    new(): HTMLLabelElement;
}

interface MSResourceMetadata {
    protocol: string;
    fileSize: string;
    fileUpdatedDate: string;
    nameProp: string;
    fileCreatedDate: string;
    fileModifiedDate: string;
    mimeType: string;
}

interface MSHTMLQuoteElementExtensions {
    dateTime: string;
}

interface DOML2DeprecatedAlignmentStyle_HTMLIFrameElement {
    align: string;
}

interface HTMLLegendElement extends HTMLElement, DOML2DeprecatedAlignmentStyle_HTMLLegendElement, MSDataBindingExtensions, MSHTMLLegendElementExtensions {
    form: HTMLFormElement;
}
declare var HTMLLegendElement: {
    prototype: HTMLLegendElement;
    new(): HTMLLegendElement;
}

interface HTMLDirectoryElement extends HTMLElement, DOML2DeprecatedListSpaceReduction, MSHTMLDirectoryElementExtensions {
}
declare var HTMLDirectoryElement: {
    prototype: HTMLDirectoryElement;
    new(): HTMLDirectoryElement;
}

interface NavigatorAbilities {
}

interface MSHTMLImageElementExtensions {
    href: string;
}

interface SVGAnimatedInteger {
    animVal: number;
    baseVal: number;
}
declare var SVGAnimatedInteger: {
    prototype: SVGAnimatedInteger;
    new(): SVGAnimatedInteger;
}

interface SVGTextElement extends SVGTextPositioningElement, SVGTransformable {
}
declare var SVGTextElement: {
    prototype: SVGTextElement;
    new(): SVGTextElement;
}

interface SVGTSpanElement extends SVGTextPositioningElement {
}
declare var SVGTSpanElement: {
    prototype: SVGTSpanElement;
    new(): SVGTSpanElement;
}

interface HTMLLIElement extends HTMLElement, DOML2DeprecatedListNumberingAndBulletStyle, MSHTMLLIElementExtensions {
    value: number;
}
declare var HTMLLIElement: {
    prototype: HTMLLIElement;
    new(): HTMLLIElement;
}

interface SVGPathSegLinetoVerticalAbs extends SVGPathSeg {
    y: number;
}
declare var SVGPathSegLinetoVerticalAbs: {
    prototype: SVGPathSegLinetoVerticalAbs;
    new(): SVGPathSegLinetoVerticalAbs;
}

interface ViewCSS {
    getComputedStyle(elt: Element, pseudoElt?: string): CSSStyleDeclaration;
}

interface MSAttrExtensions {
    expando: bool;
}

interface MSStorageExtensions {
    remainingSpace: number;
}

interface SVGStyleElement extends SVGElement, SVGLangSpace {
    media: string;
    type: string;
    title: string;
}
declare var SVGStyleElement: {
    prototype: SVGStyleElement;
    new(): SVGStyleElement;
}

interface MSCurrentStyleCSSProperties extends MSCSSProperties {
    blockDirection: string;
    clipBottom: string;
    clipLeft: string;
    clipRight: string;
    clipTop: string;
    hasLayout: string;
}
declare var MSCurrentStyleCSSProperties: {
    prototype: MSCurrentStyleCSSProperties;
    new(): MSCurrentStyleCSSProperties;
}

interface MSLinkStyleExtensions {
    styleSheet: StyleSheet;
}

interface MSHTMLCollectionExtensions {
    urns(urn: any): Object;
    tags(tagName: any): Object;
}

interface DOML2DeprecatedWordWrapSuppression_HTMLDivElement {
    noWrap: bool;
}

interface DocumentTraversal {
    createNodeIterator(root: Node, whatToShow: number, filter: NodeFilterCallback, entityReferenceExpansion: bool): NodeIterator;
    createTreeWalker(root: Node, whatToShow: number, filter: NodeFilterCallback, entityReferenceExpansion: bool): TreeWalker;
}

interface Storage extends MSStorageExtensions {
    length: number;
    getItem(key: string): any;
    [key: string]: any;
    setItem(key: string, data: string): void;
    clear(): void;
    removeItem(key: string): void;
    key(index: number): string;
    [index: number]: any;
}
declare var Storage: {
    prototype: Storage;
    new(): Storage;
}

interface HTMLTableHeaderCellScope {
    scope: string;
}

interface HTMLIFrameElement extends HTMLElement, GetSVGDocument, MSHTMLIFrameElementExtensions, MSDataBindingExtensions, DOML2DeprecatedAlignmentStyle_HTMLIFrameElement {
    width: string;
    contentWindow: Window;
    scrolling: string;
    src: string;
    marginHeight: string;
    name: string;
    marginWidth: string;
    height: string;
    contentDocument: Document;
    longDesc: string;
    frameBorder: string;
}
declare var HTMLIFrameElement: {
    prototype: HTMLIFrameElement;
    new(): HTMLIFrameElement;
}

interface MSNavigatorAbilities {
    userLanguage: string;
    plugins: MSPluginsCollection;
    cookieEnabled: bool;
    appCodeName: string;
    cpuClass: string;
    appMinorVersion: string;
    connectionSpeed: number;
    browserLanguage: string;
    mimeTypes: MSMimeTypesCollection;
    product: string;
    systemLanguage: string;
    javaEnabled(): bool;
    taintEnabled(): bool;
}

interface TextRangeCollection {
    length: number;
    item(index: number): TextRange;
    [index: number]: TextRange;
}
declare var TextRangeCollection: {
    prototype: TextRangeCollection;
    new(): TextRangeCollection;
}

interface HTMLBodyElement extends HTMLElement, HTMLBodyElementDOML2Deprecated, MSHTMLBodyElementExtensions, DOML2DeprecatedBackgroundStyle, DOML2DeprecatedBackgroundColorStyle {
    onresize: (ev: UIEvent) => any;
    ononline: (ev: Event) => any;
    onafterprint: (ev: Event) => any;
    onbeforeprint: (ev: Event) => any;
    onoffline: (ev: Event) => any;
    onblur: (ev: FocusEvent) => any;
    onhashchange: (ev: Event) => any;
    onunload: (ev: Event) => any;
    onfocus: (ev: FocusEvent) => any;
    onmessage: (ev: MessageEvent) => any;
    onload: (ev: Event) => any;
    onerror: (ev: Event) => any;
    onbeforeunload: (ev: BeforeUnloadEvent) => any;
    onstorage: (ev: StorageEvent) => any;
}
declare var HTMLBodyElement: {
    prototype: HTMLBodyElement;
    new(): HTMLBodyElement;
}

interface DocumentType extends Node {
    name: string;
    notations: NamedNodeMap;
    systemId: string;
    internalSubset: string;
    entities: NamedNodeMap;
    publicId: string;
}
declare var DocumentType: {
    prototype: DocumentType;
    new(): DocumentType;
}

interface MSHTMLInputElementExtensions extends DOML2DeprecatedMarginStyle_HTMLInputElement, DOML2DeprecatedBorderStyle_HTMLInputElement {
    status: bool;
    complete: bool;
    createTextRange(): TextRange;
}

interface DOML2DeprecatedAlignmentStyle_HTMLLegendElement {
    align: string;
}

interface SVGRadialGradientElement extends SVGGradientElement {
    cx: SVGAnimatedLength;
    r: SVGAnimatedLength;
    cy: SVGAnimatedLength;
    fx: SVGAnimatedLength;
    fy: SVGAnimatedLength;
}
declare var SVGRadialGradientElement: {
    prototype: SVGRadialGradientElement;
    new(): SVGRadialGradientElement;
}

interface MutationEvent extends Event {
    newValue: string;
    attrChange: number;
    attrName: string;
    prevValue: string;
    relatedNode: Node;
    initMutationEvent(typeArg: string, canBubbleArg: bool, cancelableArg: bool, relatedNodeArg: Node, prevValueArg: string, newValueArg: string, attrNameArg: string, attrChangeArg: number): void;
    MODIFICATION: number;
    REMOVAL: number;
    ADDITION: number;
}
declare var MutationEvent: {
    prototype: MutationEvent;
    new(): MutationEvent;
    MODIFICATION: number;
    REMOVAL: number;
    ADDITION: number;
}

interface DragEvent extends MouseEvent {
    dataTransfer: DataTransfer;
    initDragEvent(typeArg: string, canBubbleArg: bool, cancelableArg: bool, viewArg: AbstractView, detailArg: number, screenXArg: number, screenYArg: number, clientXArg: number, clientYArg: number, ctrlKeyArg: bool, altKeyArg: bool, shiftKeyArg: bool, metaKeyArg: bool, buttonArg: number, relatedTargetArg: EventTarget, dataTransferArg: DataTransfer): void;
}
declare var DragEvent: {
    prototype: DragEvent;
    new(): DragEvent;
}

interface DOML2DeprecatedWidthStyle_HTMLTableCellElement {
    width: number;
}

interface HTMLTableSectionElement extends HTMLElement, MSHTMLTableSectionElementExtensions, DOML2DeprecatedAlignmentStyle_HTMLTableSectionElement, HTMLTableAlignment {
    rows: HTMLCollection;
    deleteRow(index?: number): void;
    insertRow(index?: number): HTMLElement;
}
declare var HTMLTableSectionElement: {
    prototype: HTMLTableSectionElement;
    new(): HTMLTableSectionElement;
}

interface DOML2DeprecatedListNumberingAndBulletStyle {
    type: string;
}

interface HTMLInputElement extends HTMLElement, DOML2DeprecatedAlignmentStyle_HTMLInputElement, MSImageResourceExtensions_HTMLInputElement, MSHTMLInputElementExtensions, MSDataBindingExtensions {
    width: string;
    defaultChecked: bool;
    alt: string;
    accept: string;
    value: string;
    src: string;
    useMap: string;
    name: string;
    form: HTMLFormElement;
    selectionStart: number;
    height: string;
    indeterminate: bool;
    readOnly: bool;
    size: number;
    checked: bool;
    maxLength: number;
    selectionEnd: number;
    type: string;
    defaultValue: string;
    setSelectionRange(start: number, end: number): void;
    select(): void;
}
declare var HTMLInputElement: {
    prototype: HTMLInputElement;
    new(): HTMLInputElement;
}

interface HTMLAnchorElement extends HTMLElement, MSHTMLAnchorElementExtensions, MSDataBindingExtensions {
    rel: string;
    protocol: string;
    search: string;
    coords: string;
    hostname: string;
    pathname: string;
    target: string;
    href: string;
    name: string;
    charset: string;
    hreflang: string;
    port: string;
    host: string;
    hash: string;
    rev: string;
    type: string;
    shape: string;
    toString(): string;
}
declare var HTMLAnchorElement: {
    prototype: HTMLAnchorElement;
    new(): HTMLAnchorElement;
}

interface SVGImageElement extends SVGElement, SVGStylable, SVGTransformable, SVGLangSpace, SVGTests, SVGURIReference {
    y: SVGAnimatedLength;
    width: SVGAnimatedLength;
    preserveAspectRatio: SVGAnimatedPreserveAspectRatio;
    x: SVGAnimatedLength;
    height: SVGAnimatedLength;
}
declare var SVGImageElement: {
    prototype: SVGImageElement;
    new(): SVGImageElement;
}

interface MSElementExtensions {
    msMatchesSelector(selectors: string): bool;
    fireEvent(eventName: string, eventObj?: any): bool;
}

interface HTMLParamElement extends HTMLElement {
    value: string;
    name: string;
    type: string;
    valueType: string;
}
declare var HTMLParamElement: {
    prototype: HTMLParamElement;
    new(): HTMLParamElement;
}

interface MSHTMLDocumentViewExtensions {
    createStyleSheet(href?: string, index?: number): CSSStyleSheet;
}

interface SVGAnimatedNumber {
    animVal: number;
    baseVal: number;
}
declare var SVGAnimatedNumber: {
    prototype: SVGAnimatedNumber;
    new(): SVGAnimatedNumber;
}

interface PerformanceTiming {
    redirectStart: number;
    domainLookupEnd: number;
    responseStart: number;
    domComplete: number;
    domainLookupStart: number;
    loadEventStart: number;
    msFirstPaint: number;
    unloadEventEnd: number;
    fetchStart: number;
    requestStart: number;
    domInteractive: number;
    navigationStart: number;
    connectEnd: number;
    loadEventEnd: number;
    connectStart: number;
    responseEnd: number;
    domLoading: number;
    redirectEnd: number;
    unloadEventStart: number;
    domContentLoadedEventStart: number;
    domContentLoadedEventEnd: number;
    toJSON(): any;
}
declare var PerformanceTiming: {
    prototype: PerformanceTiming;
    new(): PerformanceTiming;
}

interface DOML2DeprecatedAlignmentStyle_HTMLInputElement {
    align: string;
}

interface HTMLPreElement extends HTMLElement, DOML2DeprecatedWidthStyle, MSHTMLPreElementExtensions {
}
declare var HTMLPreElement: {
    prototype: HTMLPreElement;
    new(): HTMLPreElement;
}

interface EventException {
    code: number;
    message: string;
    toString(): string;
    DISPATCH_REQUEST_ERR: number;
    UNSPECIFIED_EVENT_TYPE_ERR: number;
}
declare var EventException: {
    prototype: EventException;
    new(): EventException;
    DISPATCH_REQUEST_ERR: number;
    UNSPECIFIED_EVENT_TYPE_ERR: number;
}

interface MSBorderColorHighlightStyle_HTMLTableCellElement {
    borderColorLight: any;
    borderColorDark: any;
}

interface DOMHTMLImplementation {
    createHTMLDocument(title: string): Document;
}

interface NavigatorOnLine {
    onLine: bool;
}

interface SVGElementEventHandlers {
    onmouseover: (ev: MouseEvent) => any;
    onmousemove: (ev: MouseEvent) => any;
    onmouseout: (ev: MouseEvent) => any;
    ondblclick: (ev: MouseEvent) => any;
    onfocusout: (ev: FocusEvent) => any;
    onfocusin: (ev: FocusEvent) => any;
    onmousedown: (ev: MouseEvent) => any;
    onmouseup: (ev: MouseEvent) => any;
    onload: (ev: Event) => any;
    onclick: (ev: MouseEvent) => any;
}

interface WindowLocalStorage {
    localStorage: Storage;
}

interface SVGMetadataElement extends SVGElement {
}
declare var SVGMetadataElement: {
    prototype: SVGMetadataElement;
    new(): SVGMetadataElement;
}

interface SVGPathSegArcRel extends SVGPathSeg {
    y: number;
    sweepFlag: bool;
    r2: number;
    x: number;
    angle: number;
    r1: number;
    largeArcFlag: bool;
}
declare var SVGPathSegArcRel: {
    prototype: SVGPathSegArcRel;
    new(): SVGPathSegArcRel;
}

interface SVGPathSegMovetoAbs extends SVGPathSeg {
    y: number;
    x: number;
}
declare var SVGPathSegMovetoAbs: {
    prototype: SVGPathSegMovetoAbs;
    new(): SVGPathSegMovetoAbs;
}

interface SVGStringList {
    numberOfItems: number;
    replaceItem(newItem: string, index: number): string;
    getItem(index: number): string;
    clear(): void;
    appendItem(newItem: string): string;
    initialize(newItem: string): string;
    removeItem(index: number): string;
    insertItemBefore(newItem: string, index: number): string;
}
declare var SVGStringList: {
    prototype: SVGStringList;
    new(): SVGStringList;
}

interface XDomainRequest {
    timeout: number;
    onerror: (ev: Event) => any;
    onload: (ev: Event) => any;
    onprogress: (ev: any) => any;
    ontimeout: (ev: Event) => any;
    responseText: string;
    contentType: string;
    open(method: string, url: string): void;
    abort(): void;
    send(data?: any): void;
}
declare var XDomainRequest: {
    prototype: XDomainRequest;
    new (): XDomainRequest;
}

interface DOML2DeprecatedBackgroundColorStyle {
    bgColor: any;
}

interface ElementTraversal {
    childElementCount: number;
    previousElementSibling: Element;
    lastElementChild: Element;
    nextElementSibling: Element;
    firstElementChild: Element;
}

interface SVGLength {
    valueAsString: string;
    valueInSpecifiedUnits: number;
    value: number;
    unitType: number;
    newValueSpecifiedUnits(unitType: number, valueInSpecifiedUnits: number): void;
    convertToSpecifiedUnits(unitType: number): void;
    SVG_LENGTHTYPE_NUMBER: number;
    SVG_LENGTHTYPE_CM: number;
    SVG_LENGTHTYPE_PC: number;
    SVG_LENGTHTYPE_PERCENTAGE: number;
    SVG_LENGTHTYPE_MM: number;
    SVG_LENGTHTYPE_PT: number;
    SVG_LENGTHTYPE_IN: number;
    SVG_LENGTHTYPE_EMS: number;
    SVG_LENGTHTYPE_PX: number;
    SVG_LENGTHTYPE_UNKNOWN: number;
    SVG_LENGTHTYPE_EXS: number;
}
declare var SVGLength: {
    prototype: SVGLength;
    new(): SVGLength;
    SVG_LENGTHTYPE_NUMBER: number;
    SVG_LENGTHTYPE_CM: number;
    SVG_LENGTHTYPE_PC: number;
    SVG_LENGTHTYPE_PERCENTAGE: number;
    SVG_LENGTHTYPE_MM: number;
    SVG_LENGTHTYPE_PT: number;
    SVG_LENGTHTYPE_IN: number;
    SVG_LENGTHTYPE_EMS: number;
    SVG_LENGTHTYPE_PX: number;
    SVG_LENGTHTYPE_UNKNOWN: number;
    SVG_LENGTHTYPE_EXS: number;
}

interface SVGPolygonElement extends SVGElement, SVGStylable, SVGTransformable, SVGLangSpace, SVGAnimatedPoints, SVGTests {
}
declare var SVGPolygonElement: {
    prototype: SVGPolygonElement;
    new(): SVGPolygonElement;
}

interface HTMLPhraseElement extends HTMLElement {
    dateTime: string;
    cite: string;
}
declare var HTMLPhraseElement: {
    prototype: HTMLPhraseElement;
    new(): HTMLPhraseElement;
}

interface MSHTMLAreaElementExtensions {
}

interface SVGPathSegCurvetoCubicRel extends SVGPathSeg {
    y: number;
    y1: number;
    x2: number;
    x: number;
    x1: number;
    y2: number;
}
declare var SVGPathSegCurvetoCubicRel: {
    prototype: SVGPathSegCurvetoCubicRel;
    new(): SVGPathSegCurvetoCubicRel;
}

interface MSEventObj {
    nextPage: string;
    keyCode: number;
    toElement: Element;
    returnValue: any;
    dataFld: string;
    y: number;
    dataTransfer: DataTransfer;
    propertyName: string;
    url: string;
    offsetX: number;
    recordset: Object;
    screenX: number;
    buttonID: number;
    wheelDelta: number;
    reason: number;
    origin: string;
    data: string;
    srcFilter: Object;
    boundElements: HTMLCollection;
    cancelBubble: bool;
    altLeft: bool;
    behaviorCookie: number;
    bookmarks: BookmarkCollection;
    type: string;
    repeat: bool;
    srcElement: Element;
    source: Window;
    fromElement: Element;
    offsetY: number;
    x: number;
    behaviorPart: number;
    qualifier: string;
    altKey: bool;
    ctrlKey: bool;
    clientY: number;
    shiftKey: bool;
    shiftLeft: bool;
    contentOverflow: bool;
    screenY: number;
    ctrlLeft: bool;
    button: number;
    srcUrn: string;
    clientX: number;
    actionURL: string;
    getAttribute(strAttributeName: string, lFlags?: number): any;
    setAttribute(strAttributeName: string, AttributeValue: any, lFlags?: number): void;
    removeAttribute(strAttributeName: string, lFlags?: number): bool;
}
declare var MSEventObj: {
    prototype: MSEventObj;
    new(): MSEventObj;
}

interface SVGTextContentElement extends SVGElement, SVGStylable, SVGLangSpace, SVGTests {
    textLength: SVGAnimatedLength;
    lengthAdjust: SVGAnimatedEnumeration;
    getCharNumAtPosition(point: SVGPoint): number;
    getStartPositionOfChar(charnum: number): SVGPoint;
    getExtentOfChar(charnum: number): SVGRect;
    getComputedTextLength(): number;
    getSubStringLength(charnum: number, nchars: number): number;
    selectSubString(charnum: number, nchars: number): void;
    getNumberOfChars(): number;
    getRotationOfChar(charnum: number): number;
    getEndPositionOfChar(charnum: number): SVGPoint;
    LENGTHADJUST_SPACING: number;
    LENGTHADJUST_SPACINGANDGLYPHS: number;
    LENGTHADJUST_UNKNOWN: number;
}
declare var SVGTextContentElement: {
    prototype: SVGTextContentElement;
    new(): SVGTextContentElement;
    LENGTHADJUST_SPACING: number;
    LENGTHADJUST_SPACINGANDGLYPHS: number;
    LENGTHADJUST_UNKNOWN: number;
}

interface DOML2DeprecatedColorProperty {
    color: string;
}

interface MSHTMLLIElementExtensions {
}

interface HTMLCanvasElement extends HTMLElement {
    width: number;
    height: number;
    toDataURL(): string;
    toDataURL(type: string, ...args: any[]): string;
    getContext(contextId: string): CanvasRenderingContext2D;
}
declare var HTMLCanvasElement: {
    prototype: HTMLCanvasElement;
    new(): HTMLCanvasElement;
}

interface HTMLTitleElement extends HTMLElement {
    text: string;
}
declare var HTMLTitleElement: {
    prototype: HTMLTitleElement;
    new(): HTMLTitleElement;
}

interface Location {
    hash: string;
    protocol: string;
    search: string;
    href: string;
    hostname: string;
    port: string;
    pathname: string;
    host: string;
    reload(flag?: bool): void;
    replace(url: string): void;
    assign(url: string): void;
    toString(): string;
}
declare var Location: {
    prototype: Location;
    new(): Location;
}

interface HTMLStyleElement extends HTMLElement, MSLinkStyleExtensions, LinkStyle {
    media: string;
    type: string;
}
declare var HTMLStyleElement: {
    prototype: HTMLStyleElement;
    new(): HTMLStyleElement;
}

interface MSHTMLOptGroupElementExtensions {
    index: number;
    defaultSelected: bool;
    text: string;
    value: string;
    form: HTMLFormElement;
    selected: bool;
}

interface MSBorderColorHighlightStyle {
    borderColorLight: any;
    borderColorDark: any;
}

interface DOML2DeprecatedSizeProperty_HTMLBaseFontElement {
    size: number;
}

interface SVGTransform {
    type: number;
    angle: number;
    matrix: SVGMatrix;
    setTranslate(tx: number, ty: number): void;
    setScale(sx: number, sy: number): void;
    setMatrix(matrix: SVGMatrix): void;
    setSkewY(angle: number): void;
    setRotate(angle: number, cx: number, cy: number): void;
    setSkewX(angle: number): void;
    SVG_TRANSFORM_SKEWX: number;
    SVG_TRANSFORM_UNKNOWN: number;
    SVG_TRANSFORM_SCALE: number;
    SVG_TRANSFORM_TRANSLATE: number;
    SVG_TRANSFORM_MATRIX: number;
    SVG_TRANSFORM_ROTATE: number;
    SVG_TRANSFORM_SKEWY: number;
}
declare var SVGTransform: {
    prototype: SVGTransform;
    new(): SVGTransform;
    SVG_TRANSFORM_SKEWX: number;
    SVG_TRANSFORM_UNKNOWN: number;
    SVG_TRANSFORM_SCALE: number;
    SVG_TRANSFORM_TRANSLATE: number;
    SVG_TRANSFORM_MATRIX: number;
    SVG_TRANSFORM_ROTATE: number;
    SVG_TRANSFORM_SKEWY: number;
}

interface MSCSSFilter {
    Percent: number;
    Enabled: bool;
    Duration: number;
    Play(Duration: number): void;
    Apply(): void;
    Stop(): void;
}
declare var MSCSSFilter: {
    prototype: MSCSSFilter;
    new(): MSCSSFilter;
}

interface UIEvent extends Event {
    detail: number;
    view: AbstractView;
    initUIEvent(typeArg: string, canBubbleArg: bool, cancelableArg: bool, viewArg: AbstractView, detailArg: number): void;
}
declare var UIEvent: {
    prototype: UIEvent;
    new(): UIEvent;
}

interface ViewCSS_SVGSVGElement {
    getComputedStyle(elt: Element, pseudoElt?: string): CSSStyleDeclaration;
}

interface SVGURIReference {
    href: SVGAnimatedString;
}

interface SVGPathSeg {
    pathSegType: number;
    pathSegTypeAsLetter: string;
    PATHSEG_MOVETO_REL: number;
    PATHSEG_LINETO_VERTICAL_REL: number;
    PATHSEG_CURVETO_CUBIC_SMOOTH_ABS: number;
    PATHSEG_CURVETO_QUADRATIC_REL: number;
    PATHSEG_CURVETO_CUBIC_ABS: number;
    PATHSEG_LINETO_HORIZONTAL_ABS: number;
    PATHSEG_CURVETO_QUADRATIC_ABS: number;
    PATHSEG_LINETO_ABS: number;
    PATHSEG_CLOSEPATH: number;
    PATHSEG_LINETO_HORIZONTAL_REL: number;
    PATHSEG_CURVETO_CUBIC_SMOOTH_REL: number;
    PATHSEG_LINETO_REL: number;
    PATHSEG_CURVETO_QUADRATIC_SMOOTH_ABS: number;
    PATHSEG_ARC_REL: number;
    PATHSEG_CURVETO_CUBIC_REL: number;
    PATHSEG_UNKNOWN: number;
    PATHSEG_LINETO_VERTICAL_ABS: number;
    PATHSEG_ARC_ABS: number;
    PATHSEG_MOVETO_ABS: number;
    PATHSEG_CURVETO_QUADRATIC_SMOOTH_REL: number;
}
declare var SVGPathSeg: {
    PATHSEG_MOVETO_REL: number;
    PATHSEG_LINETO_VERTICAL_REL: number;
    PATHSEG_CURVETO_CUBIC_SMOOTH_ABS: number;
    PATHSEG_CURVETO_QUADRATIC_REL: number;
    PATHSEG_CURVETO_CUBIC_ABS: number;
    PATHSEG_LINETO_HORIZONTAL_ABS: number;
    PATHSEG_CURVETO_QUADRATIC_ABS: number;
    PATHSEG_LINETO_ABS: number;
    PATHSEG_CLOSEPATH: number;
    PATHSEG_LINETO_HORIZONTAL_REL: number;
    PATHSEG_CURVETO_CUBIC_SMOOTH_REL: number;
    PATHSEG_LINETO_REL: number;
    PATHSEG_CURVETO_QUADRATIC_SMOOTH_ABS: number;
    PATHSEG_ARC_REL: number;
    PATHSEG_CURVETO_CUBIC_REL: number;
    PATHSEG_UNKNOWN: number;
    PATHSEG_LINETO_VERTICAL_ABS: number;
    PATHSEG_ARC_ABS: number;
    PATHSEG_MOVETO_ABS: number;
    PATHSEG_CURVETO_QUADRATIC_SMOOTH_REL: number;
}

interface WheelEvent extends MouseEvent {
    deltaZ: number;
    deltaX: number;
    deltaMode: number;
    deltaY: number;
    initWheelEvent(typeArg: string, canBubbleArg: bool, cancelableArg: bool, viewArg: AbstractView, detailArg: number, screenXArg: number, screenYArg: number, clientXArg: number, clientYArg: number, buttonArg: number, relatedTargetArg: EventTarget, modifiersListArg: string, deltaXArg: number, deltaYArg: number, deltaZArg: number, deltaMode: number): void;
    DOM_DELTA_PIXEL: number;
    DOM_DELTA_LINE: number;
    DOM_DELTA_PAGE: number;
}
declare var WheelEvent: {
    prototype: WheelEvent;
    new(): WheelEvent;
    DOM_DELTA_PIXEL: number;
    DOM_DELTA_LINE: number;
    DOM_DELTA_PAGE: number;
}

interface DOML2DeprecatedAlignmentStyle_HTMLDivElement {
    align: string;
}

interface MSEventAttachmentTarget {
    attachEvent(event: string, listener: EventListener): bool;
    detachEvent(event: string, listener: EventListener): void;
}

interface SVGNumber {
    value: number;
}
declare var SVGNumber: {
    prototype: SVGNumber;
    new(): SVGNumber;
}

interface SVGPathElement extends SVGElement, SVGStylable, SVGAnimatedPathData, SVGTransformable, SVGLangSpace, SVGTests {
    getPathSegAtLength(distance: number): number;
    getPointAtLength(distance: number): SVGPoint;
    createSVGPathSegCurvetoQuadraticAbs(x: number, y: number, x1: number, y1: number): SVGPathSegCurvetoQuadraticAbs;
    createSVGPathSegLinetoRel(x: number, y: number): SVGPathSegLinetoRel;
    createSVGPathSegCurvetoQuadraticRel(x: number, y: number, x1: number, y1: number): SVGPathSegCurvetoQuadraticRel;
    createSVGPathSegCurvetoCubicAbs(x: number, y: number, x1: number, y1: number, x2: number, y2: number): SVGPathSegCurvetoCubicAbs;
    createSVGPathSegLinetoAbs(x: number, y: number): SVGPathSegLinetoAbs;
    createSVGPathSegClosePath(): SVGPathSegClosePath;
    createSVGPathSegCurvetoCubicRel(x: number, y: number, x1: number, y1: number, x2: number, y2: number): SVGPathSegCurvetoCubicRel;
    createSVGPathSegCurvetoQuadraticSmoothRel(x: number, y: number): SVGPathSegCurvetoQuadraticSmoothRel;
    createSVGPathSegMovetoRel(x: number, y: number): SVGPathSegMovetoRel;
    createSVGPathSegCurvetoCubicSmoothAbs(x: number, y: number, x2: number, y2: number): SVGPathSegCurvetoCubicSmoothAbs;
    createSVGPathSegMovetoAbs(x: number, y: number): SVGPathSegMovetoAbs;
    createSVGPathSegLinetoVerticalRel(y: number): SVGPathSegLinetoVerticalRel;
    createSVGPathSegArcRel(x: number, y: number, r1: number, r2: number, angle: number, largeArcFlag: bool, sweepFlag: bool): SVGPathSegArcRel;
    createSVGPathSegCurvetoQuadraticSmoothAbs(x: number, y: number): SVGPathSegCurvetoQuadraticSmoothAbs;
    createSVGPathSegLinetoHorizontalRel(x: number): SVGPathSegLinetoHorizontalRel;
    getTotalLength(): number;
    createSVGPathSegCurvetoCubicSmoothRel(x: number, y: number, x2: number, y2: number): SVGPathSegCurvetoCubicSmoothRel;
    createSVGPathSegLinetoHorizontalAbs(x: number): SVGPathSegLinetoHorizontalAbs;
    createSVGPathSegLinetoVerticalAbs(y: number): SVGPathSegLinetoVerticalAbs;
    createSVGPathSegArcAbs(x: number, y: number, r1: number, r2: number, angle: number, largeArcFlag: bool, sweepFlag: bool): SVGPathSegArcAbs;
}
declare var SVGPathElement: {
    prototype: SVGPathElement;
    new(): SVGPathElement;
}

interface MSCompatibleInfo {
    version: string;
    userAgent: string;
}
declare var MSCompatibleInfo: {
    prototype: MSCompatibleInfo;
    new(): MSCompatibleInfo;
}

interface MSHTMLDocumentEventExtensions {
    createEventObject(eventObj?: any): MSEventObj;
    fireEvent(eventName: string, eventObj?: any): bool;
}

interface Text extends CharacterData, MSNodeExtensions {
    wholeText: string;
    splitText(offset: number): Text;
    replaceWholeText(content: string): Text;
}
declare var Text: {
    prototype: Text;
    new(): Text;
}

interface SVGAnimatedRect {
    animVal: SVGRect;
    baseVal: SVGRect;
}
declare var SVGAnimatedRect: {
    prototype: SVGAnimatedRect;
    new(): SVGAnimatedRect;
}

interface CSSNamespaceRule extends CSSRule {
    namespaceURI: string;
    prefix: string;
}
declare var CSSNamespaceRule: {
    prototype: CSSNamespaceRule;
    new(): CSSNamespaceRule;
}

interface HTMLUnknownElement extends HTMLElement, MSDataBindingRecordSetReadonlyExtensions, MSHTMLUnknownElementExtensions {
}
declare var HTMLUnknownElement: {
    prototype: HTMLUnknownElement;
    new(): HTMLUnknownElement;
}

interface SVGPathSegList {
    numberOfItems: number;
    replaceItem(newItem: SVGPathSeg, index: number): SVGPathSeg;
    getItem(index: number): SVGPathSeg;
    clear(): void;
    appendItem(newItem: SVGPathSeg): SVGPathSeg;
    initialize(newItem: SVGPathSeg): SVGPathSeg;
    removeItem(index: number): SVGPathSeg;
    insertItemBefore(newItem: SVGPathSeg, index: number): SVGPathSeg;
}
declare var SVGPathSegList: {
    prototype: SVGPathSegList;
    new(): SVGPathSegList;
}

interface HTMLAudioElement extends HTMLMediaElement {
}
declare var HTMLAudioElement: {
    prototype: HTMLAudioElement;
    new(): HTMLAudioElement;
}

interface MSImageResourceExtensions {
    dynsrc: string;
    vrml: string;
    lowsrc: string;
    start: string;
    loop: number;
}

interface MSBorderColorHighlightStyle_HTMLTableRowElement {
    borderColorLight: any;
    borderColorDark: any;
}

interface PositionError {
    code: number;
    message: string;
    toString(): string;
    POSITION_UNAVAILABLE: number;
    PERMISSION_DENIED: number;
    TIMEOUT: number;
}
declare var PositionError: {
    POSITION_UNAVAILABLE: number;
    PERMISSION_DENIED: number;
    TIMEOUT: number;
}

interface BrowserPublic {
}
declare var BrowserPublic: {
    prototype: BrowserPublic;
    new(): BrowserPublic;
}

interface HTMLTableCellElement extends HTMLElement, DOML2DeprecatedTableCellHeight, HTMLTableAlignment, MSBorderColorHighlightStyle_HTMLTableCellElement, DOML2DeprecatedWidthStyle_HTMLTableCellElement, DOML2DeprecatedBackgroundStyle, MSBorderColorStyle_HTMLTableCellElement, MSHTMLTableCellElementExtensions, DOML2DeprecatedAlignmentStyle_HTMLTableCellElement, HTMLTableHeaderCellScope, DOML2DeprecatedWordWrapSuppression, DOML2DeprecatedBackgroundColorStyle {
    headers: string;
    abbr: string;
    rowSpan: number;
    cellIndex: number;
    colSpan: number;
    axis: string;
}
declare var HTMLTableCellElement: {
    prototype: HTMLTableCellElement;
    new(): HTMLTableCellElement;
}

interface MSNamespaceInfoCollection {
    length: number;
    add(namespace?: string, urn?: string, implementationUrl?: any): Object;
    item(index: any): Object;
    [index: string]: Object;
    (index: any): Object;
}
declare var MSNamespaceInfoCollection: {
    prototype: MSNamespaceInfoCollection;
    new(): MSNamespaceInfoCollection;
}

interface SVGElementInstance extends EventTarget {
    previousSibling: SVGElementInstance;
    parentNode: SVGElementInstance;
    lastChild: SVGElementInstance;
    nextSibling: SVGElementInstance;
    childNodes: SVGElementInstanceList;
    correspondingUseElement: SVGUseElement;
    correspondingElement: SVGElement;
    firstChild: SVGElementInstance;
}
declare var SVGElementInstance: {
    prototype: SVGElementInstance;
    new(): SVGElementInstance;
}

interface MSHTMLUListElementExtensions {
}

interface SVGCircleElement extends SVGElement, SVGStylable, SVGTransformable, SVGLangSpace, SVGTests {
    cx: SVGAnimatedLength;
    r: SVGAnimatedLength;
    cy: SVGAnimatedLength;
}
declare var SVGCircleElement: {
    prototype: SVGCircleElement;
    new(): SVGCircleElement;
}

interface HTMLBaseFontElement extends HTMLElement, DOML2DeprecatedSizeProperty_HTMLBaseFontElement, DOML2DeprecatedColorProperty {
    face: string;
}
declare var HTMLBaseFontElement: {
    prototype: HTMLBaseFontElement;
    new(): HTMLBaseFontElement;
}

interface CustomEvent extends Event {
    detail: Object;
    initCustomEvent(typeArg: string, canBubbleArg: bool, cancelableArg: bool, detailArg: Object): void;
}
declare var CustomEvent: {
    prototype: CustomEvent;
    new(): CustomEvent;
}

interface CSSImportRule extends CSSRule {
    styleSheet: CSSStyleSheet;
    href: string;
    media: MediaList;
}
declare var CSSImportRule: {
    prototype: CSSImportRule;
    new(): CSSImportRule;
}

interface StyleSheetList {
    length: number;
    item(index?: number): StyleSheet;
    [index: number]: StyleSheet;
}
declare var StyleSheetList: {
    prototype: StyleSheetList;
    new(): StyleSheetList;
}

interface HTMLTextAreaElement extends HTMLElement, MSDataBindingExtensions, MSHTMLTextAreaElementExtensions {
    value: string;
    form: HTMLFormElement;
    name: string;
    selectionStart: number;
    rows: number;
    cols: number;
    readOnly: bool;
    wrap: string;
    selectionEnd: number;
    type: string;
    defaultValue: string;
    setSelectionRange(start: number, end: number): void;
    select(): void;
}
declare var HTMLTextAreaElement: {
    prototype: HTMLTextAreaElement;
    new(): HTMLTextAreaElement;
}

interface MSHTMLFormElementExtensions {
    encoding: string;
}

interface DOML2DeprecatedMarginStyle {
    vspace: number;
    hspace: number;
}

interface Geolocation {
    clearWatch(watchId: number): void;
    getCurrentPosition(successCallback: PositionCallback, errorCallback?: PositionErrorCallback, options?: PositionOptions): void;
    watchPosition(successCallback: PositionCallback, errorCallback?: PositionErrorCallback, options?: PositionOptions): number;
}
declare var Geolocation: {
    prototype: Geolocation;
    new(): Geolocation;
}

interface MSWindowModeless {
    dialogTop: any;
    dialogLeft: any;
    dialogWidth: any;
    dialogHeight: any;
    menuArguments: any;
}

interface HTMLMarqueeElement extends HTMLElement, DOML2DeprecatedMarginStyle_HTMLMarqueeElement, MSDataBindingExtensions, MSHTMLMarqueeElementExtensions, DOML2DeprecatedBackgroundColorStyle {
    width: string;
    onbounce: (ev: Event) => any;
    trueSpeed: bool;
    scrollAmount: number;
    scrollDelay: number;
    behavior: string;
    height: string;
    loop: number;
    direction: string;
    onstart: (ev: Event) => any;
    onfinish: (ev: Event) => any;
    stop(): void;
    start(): void;
}
declare var HTMLMarqueeElement: {
    prototype: HTMLMarqueeElement;
    new(): HTMLMarqueeElement;
}

interface SVGRect {
    y: number;
    width: number;
    x: number;
    height: number;
}
declare var SVGRect: {
    prototype: SVGRect;
    new(): SVGRect;
}

interface MSNodeExtensions {
    swapNode(otherNode: Node): Node;
    removeNode(deep?: bool): Node;
    replaceNode(replacement: Node): Node;
}

interface KeyboardEventExtensions {
    keyCode: number;
    which: number;
    charCode: number;
}

interface History {
    length: number;
    back(distance?: any): void;
    forward(distance?: any): void;
    go(delta?: any): void;
}
declare var History: {
    prototype: History;
    new(): History;
}

interface DocumentStyle {
    styleSheets: StyleSheetList;
}

interface SVGPathSegCurvetoCubicAbs extends SVGPathSeg {
    y: number;
    y1: number;
    x2: number;
    x: number;
    x1: number;
    y2: number;
}
declare var SVGPathSegCurvetoCubicAbs: {
    prototype: SVGPathSegCurvetoCubicAbs;
    new(): SVGPathSegCurvetoCubicAbs;
}

interface TimeRanges {
    length: number;
    start(index: number): number;
    end(index: number): number;
}
declare var TimeRanges: {
    prototype: TimeRanges;
    new(): TimeRanges;
}

interface SVGPathSegCurvetoQuadraticAbs extends SVGPathSeg {
    y: number;
    y1: number;
    x: number;
    x1: number;
}
declare var SVGPathSegCurvetoQuadraticAbs: {
    prototype: SVGPathSegCurvetoQuadraticAbs;
    new(): SVGPathSegCurvetoQuadraticAbs;
}

interface MSHTMLSelectElementExtensions {
}

interface CSSRule {
    cssText: string;
    parentStyleSheet: CSSStyleSheet;
    parentRule: CSSRule;
    type: number;
    IMPORT_RULE: number;
    MEDIA_RULE: number;
    STYLE_RULE: number;
    NAMESPACE_RULE: number;
    PAGE_RULE: number;
    UNKNOWN_RULE: number;
    FONT_FACE_RULE: number;
    CHARSET_RULE: number;
}
declare var CSSRule: {
    prototype: CSSRule;
    new(): CSSRule;
    IMPORT_RULE: number;
    MEDIA_RULE: number;
    STYLE_RULE: number;
    NAMESPACE_RULE: number;
    PAGE_RULE: number;
    UNKNOWN_RULE: number;
    FONT_FACE_RULE: number;
    CHARSET_RULE: number;
}

interface SVGPathSegLinetoAbs extends SVGPathSeg {
    y: number;
    x: number;
}
declare var SVGPathSegLinetoAbs: {
    prototype: SVGPathSegLinetoAbs;
    new(): SVGPathSegLinetoAbs;
}

interface MSMouseEventExtensions {
    toElement: Element;
    layerY: number;
    fromElement: Element;
    which: number;
    layerX: number;
}

interface HTMLModElement extends HTMLElement, MSHTMLModElementExtensions {
    dateTime: string;
    cite: string;
}
declare var HTMLModElement: {
    prototype: HTMLModElement;
    new(): HTMLModElement;
}

interface DOML2DeprecatedWordWrapSuppression {
    noWrap: bool;
}

interface BeforeUnloadEvent extends Event {
    returnValue: string;
}
declare var BeforeUnloadEvent: {
    prototype: BeforeUnloadEvent;
    new(): BeforeUnloadEvent;
}

interface MSPopupWindow {
    document: HTMLDocument;
    isOpen: bool;
    show(x: number, y: number, w: number, h: number, element?: any): void;
    hide(): void;
}
declare var MSPopupWindow: {
    prototype: MSPopupWindow;
    new(): MSPopupWindow;
}

interface SVGMatrix {
    e: number;
    c: number;
    a: number;
    b: number;
    d: number;
    f: number;
    multiply(secondMatrix: SVGMatrix): SVGMatrix;
    flipY(): SVGMatrix;
    skewY(angle: number): SVGMatrix;
    inverse(): SVGMatrix;
    scaleNonUniform(scaleFactorX: number, scaleFactorY: number): SVGMatrix;
    rotate(angle: number): SVGMatrix;
    flipX(): SVGMatrix;
    translate(x: number, y: number): SVGMatrix;
    scale(scaleFactor: number): SVGMatrix;
    rotateFromVector(x: number, y: number): SVGMatrix;
    skewX(angle: number): SVGMatrix;
}
declare var SVGMatrix: {
    prototype: SVGMatrix;
    new(): SVGMatrix;
}

interface SVGUseElement extends SVGElement, SVGStylable, SVGTransformable, SVGLangSpace, SVGTests, SVGURIReference {
    y: SVGAnimatedLength;
    width: SVGAnimatedLength;
    animatedInstanceRoot: SVGElementInstance;
    instanceRoot: SVGElementInstance;
    x: SVGAnimatedLength;
    height: SVGAnimatedLength;
}
declare var SVGUseElement: {
    prototype: SVGUseElement;
    new(): SVGUseElement;
}

interface Event extends MSEventExtensions {
    timeStamp: number;
    defaultPrevented: bool;
    isTrusted: bool;
    currentTarget: EventTarget;
    target: EventTarget;
    eventPhase: number;
    type: string;
    cancelable: bool;
    bubbles: bool;
    initEvent(eventTypeArg: string, canBubbleArg: bool, cancelableArg: bool): void;
    stopPropagation(): void;
    stopImmediatePropagation(): void;
    preventDefault(): void;
    CAPTURING_PHASE: number;
    AT_TARGET: number;
    BUBBLING_PHASE: number;
}
declare var Event: {
    prototype: Event;
    new(): Event;
    CAPTURING_PHASE: number;
    AT_TARGET: number;
    BUBBLING_PHASE: number;
}

interface ImageData {
    width: number;
    data: number[];
    height: number;
}
declare var ImageData: {
    prototype: ImageData;
    new(): ImageData;
}

interface MSHTMLElementExtensions {
    onlosecapture: (ev: MSEventObj) => any;
    onrowexit: (ev: MSEventObj) => any;
    oncontrolselect: (ev: MSEventObj) => any;
    onrowsinserted: (ev: MSEventObj) => any;
    onmouseleave: (ev: MouseEvent) => any;
    document: HTMLDocument;
    behaviorUrns: MSBehaviorUrnsCollection;
    onpropertychange: (ev: MSEventObj) => any;
    children: HTMLCollection;
    filters: Object;
    onbeforecut: (ev: DragEvent) => any;
    scopeName: string;
    onbeforepaste: (ev: DragEvent) => any;
    onmove: (ev: MSEventObj) => any;
    onafterupdate: (ev: MSEventObj) => any;
    onbeforecopy: (ev: DragEvent) => any;
    onlayoutcomplete: (ev: MSEventObj) => any;
    onresizeend: (ev: MSEventObj) => any;
    uniqueID: string;
    onhelp: (ev: Event) => any;
    onbeforeactivate: (ev: UIEvent) => any;
    isMultiLine: bool;
    uniqueNumber: number;
    tagUrn: string;
    onfocusout: (ev: FocusEvent) => any;
    ondataavailable: (ev: MSEventObj) => any;
    hideFocus: bool;
    onbeforeupdate: (ev: MSEventObj) => any;
    onfilterchange: (ev: MSEventObj) => any;
    onfocusin: (ev: FocusEvent) => any;
    recordNumber: any;
    parentTextEdit: Element;
    ondatasetcomplete: (ev: MSEventObj) => any;
    onbeforedeactivate: (ev: UIEvent) => any;
    outerText: string;
    onresizestart: (ev: MSEventObj) => any;
    onactivate: (ev: UIEvent) => any;
    isTextEdit: bool;
    isDisabled: bool;
    readyState: string;
    all: HTMLCollection;
    onmouseenter: (ev: MouseEvent) => any;
    onmovestart: (ev: MSEventObj) => any;
    onselectstart: (ev: Event) => any;
    onpaste: (ev: DragEvent) => any;
    canHaveHTML: bool;
    innerText: string;
    onerrorupdate: (ev: MSEventObj) => any;
    ondeactivate: (ev: UIEvent) => any;
    oncut: (ev: DragEvent) => any;
    onmoveend: (ev: MSEventObj) => any;
    onresize: (ev: UIEvent) => any;
    language: string;
    ondatasetchanged: (ev: MSEventObj) => any;
    oncopy: (ev: DragEvent) => any;
    onrowsdelete: (ev: MSEventObj) => any;
    parentElement: HTMLElement;
    onrowenter: (ev: MSEventObj) => any;
    onbeforeeditfocus: (ev: MSEventObj) => any;
    canHaveChildren: bool;
    sourceIndex: number;
    oncellchange: (ev: MSEventObj) => any;
    dragDrop(): bool;
    releaseCapture(): void;
    addFilter(filter: Object): void;
    setCapture(containerCapture?: bool): void;
    removeBehavior(cookie: number): bool;
    contains(child: HTMLElement): bool;
    applyElement(apply: Element, where?: string): Element;
    replaceAdjacentText(where: string, newText: string): string;
    mergeAttributes(source: HTMLElement, preserveIdentity?: bool): void;
    insertAdjacentElement(position: string, insertedElement: Element): Element;
    insertAdjacentText(where: string, text: string): void;
    getAdjacentText(where: string): string;
    removeFilter(filter: Object): void;
    setActive(): void;
    addBehavior(bstrUrl: string, factory?: any): number;
    clearAttributes(): void;
}

interface HTMLTableColElement extends HTMLElement, MSHTMLTableColElementExtensions, HTMLTableAlignment, DOML2DeprecatedAlignmentStyle_HTMLTableColElement {
    width: any;
    span: number;
}
declare var HTMLTableColElement: {
    prototype: HTMLTableColElement;
    new(): HTMLTableColElement;
}

interface HTMLDocument extends MSEventAttachmentTarget, MSHTMLDocumentSelection, MSHTMLDocumentExtensions, MSNodeExtensions, MSResourceMetadata, MSHTMLDocumentEventExtensions, MSHTMLDocumentViewExtensions {
    ondragend: (ev: DragEvent) => any;
    ondragover: (ev: DragEvent) => any;
    onkeydown: (ev: KeyboardEvent) => any;
    bgColor: string;
    onkeyup: (ev: KeyboardEvent) => any;
    onreset: (ev: Event) => any;
    onmouseup: (ev: MouseEvent) => any;
    ondragstart: (ev: DragEvent) => any;
    scripts: HTMLCollection;
    ondrag: (ev: DragEvent) => any;
    linkColor: string;
    ondragleave: (ev: DragEvent) => any;
    onmouseover: (ev: MouseEvent) => any;
    onpause: (ev: Event) => any;
    charset: string;
    vlinkColor: string;
    onmousedown: (ev: MouseEvent) => any;
    onseeked: (ev: Event) => any;
    title: string;
    onclick: (ev: MouseEvent) => any;
    onwaiting: (ev: Event) => any;
    defaultCharset: string;
    embeds: HTMLCollection;
    ondurationchange: (ev: Event) => any;
    all: HTMLCollection;
    applets: HTMLCollection;
    forms: HTMLCollection;
    onblur: (ev: FocusEvent) => any;
    dir: string;
    body: HTMLElement;
    designMode: string;
    onemptied: (ev: Event) => any;
    domain: string;
    onseeking: (ev: Event) => any;
    oncanplay: (ev: Event) => any;
    onstalled: (ev: Event) => any;
    onmousemove: (ev: MouseEvent) => any;
    onratechange: (ev: Event) => any;
    onloadstart: (ev: Event) => any;
    ondragenter: (ev: DragEvent) => any;
    onsubmit: (ev: Event) => any;
    onprogress: (ev: any) => any;
    ondblclick: (ev: MouseEvent) => any;
    oncontextmenu: (ev: MouseEvent) => any;
    activeElement: Element;
    onchange: (ev: Event) => any;
    onloadedmetadata: (ev: Event) => any;
    onerror: (ev: Event) => any;
    onplay: (ev: Event) => any;
    links: HTMLCollection;
    onplaying: (ev: Event) => any;
    URL: string;
    images: HTMLCollection;
    head: HTMLHeadElement;
    location: Location;
    cookie: string;
    oncanplaythrough: (ev: Event) => any;
    onabort: (ev: UIEvent) => any;
    characterSet: string;
    anchors: HTMLCollection;
    lastModified: string;
    onreadystatechange: (ev: Event) => any;
    onkeypress: (ev: KeyboardEvent) => any;
    onloadeddata: (ev: Event) => any;
    plugins: HTMLCollection;
    onsuspend: (ev: Event) => any;
    referrer: string;
    readyState: string;
    alinkColor: string;
    onfocus: (ev: FocusEvent) => any;
    fgColor: string;
    ontimeupdate: (ev: Event) => any;
    onselect: (ev: UIEvent) => any;
    ondrop: (ev: DragEvent) => any;
    onmouseout: (ev: MouseEvent) => any;
    onended: (ev: Event) => any;
    compatMode: string;
    onscroll: (ev: UIEvent) => any;
    onmousewheel: (ev: MouseWheelEvent) => any;
    onload: (ev: Event) => any;
    onvolumechange: (ev: Event) => any;
    oninput: (ev: Event) => any;
    queryCommandValue(commandId: string): string;
    queryCommandIndeterm(commandId: string): bool;
    execCommand(commandId: string, showUI?: bool, value?: any): bool;
    getElementsByName(elementName: string): NodeList;
    writeln(...content: string[]): void;
    open(url?: string, name?: string, features?: string, replace?: bool): any;
    queryCommandState(commandId: string): bool;
    close(): void;
    hasFocus(): bool;
    getElementsByClassName(classNames: string): NodeList;
    queryCommandSupported(commandId: string): bool;
    getSelection(): Selection;
    queryCommandEnabled(commandId: string): bool;
    write(...content: string[]): void;
    queryCommandText(commandId: string): string;
}

interface SVGException {
    code: number;
    message: string;
    toString(): string;
    SVG_MATRIX_NOT_INVERTABLE: number;
    SVG_WRONG_TYPE_ERR: number;
    SVG_INVALID_VALUE_ERR: number;
}
declare var SVGException: {
    prototype: SVGException;
    new(): SVGException;
    SVG_MATRIX_NOT_INVERTABLE: number;
    SVG_WRONG_TYPE_ERR: number;
    SVG_INVALID_VALUE_ERR: number;
}

interface DOML2DeprecatedTableCellHeight {
    height: any;
}

interface HTMLTableAlignment {
    ch: string;
    vAlign: string;
    chOff: string;
}

interface SVGAnimatedEnumeration {
    animVal: number;
    baseVal: number;
}
declare var SVGAnimatedEnumeration: {
    prototype: SVGAnimatedEnumeration;
    new(): SVGAnimatedEnumeration;
}

interface SVGLinearGradientElement extends SVGGradientElement {
    y1: SVGAnimatedLength;
    x2: SVGAnimatedLength;
    x1: SVGAnimatedLength;
    y2: SVGAnimatedLength;
}
declare var SVGLinearGradientElement: {
    prototype: SVGLinearGradientElement;
    new(): SVGLinearGradientElement;
}

interface DOML2DeprecatedSizeProperty {
    size: number;
}

interface MSHTMLHeadingElementExtensions extends DOML2DeprecatedTextFlowControl_HTMLBlockElement {
}

interface MSBorderColorStyle_HTMLTableCellElement {
    borderColor: any;
}

interface DOML2DeprecatedWidthStyle_HTMLHRElement {
    width: number;
}

interface HTMLUListElement extends HTMLElement, DOML2DeprecatedListSpaceReduction, DOML2DeprecatedListNumberingAndBulletStyle, MSHTMLUListElementExtensions {
}
declare var HTMLUListElement: {
    prototype: HTMLUListElement;
    new(): HTMLUListElement;
}

interface SVGRectElement extends SVGElement, SVGStylable, SVGTransformable, SVGLangSpace, SVGTests {
    y: SVGAnimatedLength;
    width: SVGAnimatedLength;
    ry: SVGAnimatedLength;
    rx: SVGAnimatedLength;
    x: SVGAnimatedLength;
    height: SVGAnimatedLength;
}
declare var SVGRectElement: {
    prototype: SVGRectElement;
    new(): SVGRectElement;
}

interface DOML2DeprecatedBorderStyle {
    border: string;
}

interface HTMLDivElement extends HTMLElement, DOML2DeprecatedAlignmentStyle_HTMLDivElement, MSHTMLDivElementExtensions, MSDataBindingExtensions {
}
declare var HTMLDivElement: {
    prototype: HTMLDivElement;
    new(): HTMLDivElement;
}

interface NavigatorDoNotTrack {
    msDoNotTrack: string;
}

interface SVG1_1Properties {
    fillRule: string;
    strokeLinecap: string;
    stopColor: string;
    glyphOrientationHorizontal: string;
    kerning: string;
    alignmentBaseline: string;
    dominantBaseline: string;
    fill: string;
    strokeMiterlimit: string;
    marker: string;
    glyphOrientationVertical: string;
    markerMid: string;
    textAnchor: string;
    fillOpacity: string;
    strokeDasharray: string;
    mask: string;
    stopOpacity: string;
    stroke: string;
    strokeDashoffset: string;
    strokeOpacity: string;
    markerStart: string;
    pointerEvents: string;
    baselineShift: string;
    markerEnd: string;
    clipRule: string;
    strokeLinejoin: string;
    clipPath: string;
    strokeWidth: string;
}

interface NamedNodeMap {
    length: number;
    removeNamedItemNS(namespaceURI: string, localName: string): Node;
    item(index: number): Node;
    [index: number]: Node;
    removeNamedItem(name: string): Node;
    getNamedItem(name: string): Node;
    [name: string]: Node;
    setNamedItem(arg: Node): Node;
    getNamedItemNS(namespaceURI: string, localName: string): Node;
    setNamedItemNS(arg: Node): Node;
}
declare var NamedNodeMap: {
    prototype: NamedNodeMap;
    new(): NamedNodeMap;
}

interface MediaList {
    length: number;
    mediaText: string;
    deleteMedium(oldMedium: string): void;
    appendMedium(newMedium: string): void;
    item(index: number): string;
    [index: number]: string;
    toString(): string;
}
declare var MediaList: {
    prototype: MediaList;
    new(): MediaList;
}

interface SVGPathSegCurvetoQuadraticSmoothAbs extends SVGPathSeg {
    y: number;
    x: number;
}
declare var SVGPathSegCurvetoQuadraticSmoothAbs: {
    prototype: SVGPathSegCurvetoQuadraticSmoothAbs;
    new(): SVGPathSegCurvetoQuadraticSmoothAbs;
}

interface SVGLengthList {
    numberOfItems: number;
    replaceItem(newItem: SVGLength, index: number): SVGLength;
    getItem(index: number): SVGLength;
    clear(): void;
    appendItem(newItem: SVGLength): SVGLength;
    initialize(newItem: SVGLength): SVGLength;
    removeItem(index: number): SVGLength;
    insertItemBefore(newItem: SVGLength, index: number): SVGLength;
}
declare var SVGLengthList: {
    prototype: SVGLengthList;
    new(): SVGLengthList;
}

interface SVGPathSegCurvetoCubicSmoothRel extends SVGPathSeg {
    y: number;
    x2: number;
    x: number;
    y2: number;
}
declare var SVGPathSegCurvetoCubicSmoothRel: {
    prototype: SVGPathSegCurvetoCubicSmoothRel;
    new(): SVGPathSegCurvetoCubicSmoothRel;
}

interface MSWindowExtensions {
    status: string;
    onmouseleave: (ev: MouseEvent) => any;
    screenLeft: number;
    offscreenBuffering: any;
    maxConnectionsPerServer: number;
    onmouseenter: (ev: MouseEvent) => any;
    clipboardData: DataTransfer;
    defaultStatus: string;
    clientInformation: Navigator;
    closed: bool;
    onhelp: (ev: Event) => any;
    external: BrowserPublic;
    event: MSEventObj;
    onfocusout: (ev: FocusEvent) => any;
    screenTop: number;
    onfocusin: (ev: FocusEvent) => any;
    showModelessDialog(url?: string, argument?: any, options?: any): Window;
    navigate(url: string): void;
    resizeBy(x?: number, y?: number): void;
    item(index: any): any;
    resizeTo(x?: number, y?: number): void;
    createPopup(arguments?: any): MSPopupWindow;
    toStaticHTML(html: string): string;
    execScript(code: string, language?: string): any;
    msWriteProfilerMark(profilerMarkName: string): void;
    moveTo(x?: number, y?: number): void;
    moveBy(x?: number, y?: number): void;
    showHelp(url: string, helpArg?: any, features?: string): void;
}

interface ProcessingInstruction extends Node {
    target: string;
    data: string;
}
declare var ProcessingInstruction: {
    prototype: ProcessingInstruction;
    new(): ProcessingInstruction;
}

interface MSBehaviorUrnsCollection {
    length: number;
    item(index: number): string;
}
declare var MSBehaviorUrnsCollection: {
    prototype: MSBehaviorUrnsCollection;
    new(): MSBehaviorUrnsCollection;
}

interface CSSFontFaceRule extends CSSRule {
    style: CSSStyleDeclaration;
}
declare var CSSFontFaceRule: {
    prototype: CSSFontFaceRule;
    new(): CSSFontFaceRule;
}

interface DOML2DeprecatedBackgroundStyle {
    background: string;
}

interface TextEvent extends UIEvent {
    inputMethod: number;
    data: string;
    locale: string;
    initTextEvent(typeArg: string, canBubbleArg: bool, cancelableArg: bool, viewArg: AbstractView, dataArg: string, inputMethod: number, locale: string): void;
    DOM_INPUT_METHOD_KEYBOARD: number;
    DOM_INPUT_METHOD_DROP: number;
    DOM_INPUT_METHOD_IME: number;
    DOM_INPUT_METHOD_SCRIPT: number;
    DOM_INPUT_METHOD_VOICE: number;
    DOM_INPUT_METHOD_UNKNOWN: number;
    DOM_INPUT_METHOD_PASTE: number;
    DOM_INPUT_METHOD_HANDWRITING: number;
    DOM_INPUT_METHOD_OPTION: number;
    DOM_INPUT_METHOD_MULTIMODAL: number;
}
declare var TextEvent: {
    prototype: TextEvent;
    new(): TextEvent;
    DOM_INPUT_METHOD_KEYBOARD: number;
    DOM_INPUT_METHOD_DROP: number;
    DOM_INPUT_METHOD_IME: number;
    DOM_INPUT_METHOD_SCRIPT: number;
    DOM_INPUT_METHOD_VOICE: number;
    DOM_INPUT_METHOD_UNKNOWN: number;
    DOM_INPUT_METHOD_PASTE: number;
    DOM_INPUT_METHOD_HANDWRITING: number;
    DOM_INPUT_METHOD_OPTION: number;
    DOM_INPUT_METHOD_MULTIMODAL: number;
}

interface MSHTMLHRElementExtensions extends DOML2DeprecatedColorProperty {
}

interface AbstractView {
    styleMedia: StyleMedia;
    document: Document;
}

interface DocumentFragment extends Node, NodeSelector, MSEventAttachmentTarget, MSNodeExtensions {
}
declare var DocumentFragment: {
    prototype: DocumentFragment;
    new(): DocumentFragment;
}

interface DOML2DeprecatedAlignmentStyle_HTMLFieldSetElement {
    align: string;
}

interface SVGPolylineElement extends SVGElement, SVGStylable, SVGTransformable, SVGLangSpace, SVGAnimatedPoints, SVGTests {
}
declare var SVGPolylineElement: {
    prototype: SVGPolylineElement;
    new(): SVGPolylineElement;
}

interface DOML2DeprecatedWidthStyle {
    width: number;
}

interface DOML2DeprecatedAlignmentStyle_HTMLHeadingElement {
    align: string;
}

interface SVGAnimatedPathData {
    pathSegList: SVGPathSegList;
}

interface Position {
    timestamp: Date;
    coords: Coordinates;
}
declare var Position: {
    prototype: Position;
    new(): Position;
}

interface BookmarkCollection {
    length: number;
    item(index: number): any;
    [index: number]: any;
}
declare var BookmarkCollection: {
    prototype: BookmarkCollection;
    new(): BookmarkCollection;
}

interface CSSPageRule extends CSSRule, StyleSheetPage {
    selectorText: string;
    style: CSSStyleDeclaration;
}
declare var CSSPageRule: {
    prototype: CSSPageRule;
    new(): CSSPageRule;
}

interface WindowPerformance {
    performance: any;
}

interface HTMLBRElement extends HTMLElement, DOML2DeprecatedTextFlowControl_HTMLBRElement {
}
declare var HTMLBRElement: {
    prototype: HTMLBRElement;
    new(): HTMLBRElement;
}

interface MSHTMLDivElementExtensions extends DOML2DeprecatedWordWrapSuppression_HTMLDivElement {
}

interface DOML2DeprecatedBorderStyle_HTMLInputElement {
    border: string;
}

interface HTMLSpanElement extends HTMLElement, MSHTMLSpanElementExtensions, MSDataBindingExtensions {
}
declare var HTMLSpanElement: {
    prototype: HTMLSpanElement;
    new(): HTMLSpanElement;
}

interface HTMLHRElementDOML2Deprecated {
    noShade: bool;
}

interface HTMLHeadElement extends HTMLElement {
    profile: string;
}
declare var HTMLHeadElement: {
    prototype: HTMLHeadElement;
    new(): HTMLHeadElement;
}

interface NodeFilterCallback {
    (...args: any[]): any;
}

interface HTMLHeadingElement extends HTMLElement, DOML2DeprecatedAlignmentStyle_HTMLHeadingElement, MSHTMLHeadingElementExtensions {
}
declare var HTMLHeadingElement: {
    prototype: HTMLHeadingElement;
    new(): HTMLHeadingElement;
}

interface HTMLFormElement extends HTMLElement, MSHTMLFormElementExtensions, MSHTMLCollectionExtensions {
    length: number;
    target: string;
    acceptCharset: string;
    enctype: string;
    elements: HTMLCollection;
    action: string;
    name: string;
    method: string;
    reset(): void;
    item(name?: any, index?: any): any;
    (name: any, index: any): any;
    submit(): void;
    namedItem(name: string): any;
    [name: string]: any;
    (name: string): any;
}
declare var HTMLFormElement: {
    prototype: HTMLFormElement;
    new(): HTMLFormElement;
}

interface SVGZoomAndPan {
    zoomAndPan: number;
    SVG_ZOOMANDPAN_MAGNIFY: number;
    SVG_ZOOMANDPAN_UNKNOWN: number;
    SVG_ZOOMANDPAN_DISABLE: number;
}
declare var SVGZoomAndPan: {
    prototype: SVGZoomAndPan;
    new(): SVGZoomAndPan;
    SVG_ZOOMANDPAN_MAGNIFY: number;
    SVG_ZOOMANDPAN_UNKNOWN: number;
    SVG_ZOOMANDPAN_DISABLE: number;
}

interface MSEventExtensions {
    cancelBubble: bool;
    srcElement: Element;
}

interface HTMLMediaElement extends HTMLElement {
    initialTime: number;
    played: TimeRanges;
    currentSrc: string;
    readyState: string;
    autobuffer: bool;
    loop: bool;
    ended: bool;
    buffered: TimeRanges;
    error: MediaError;
    seekable: TimeRanges;
    autoplay: bool;
    controls: bool;
    volume: number;
    src: string;
    playbackRate: number;
    duration: number;
    muted: bool;
    defaultPlaybackRate: number;
    paused: bool;
    seeking: bool;
    currentTime: number;
    preload: string;
    networkState: number;
    pause(): void;
    play(): void;
    load(): void;
    canPlayType(type: string): string;
    HAVE_METADATA: number;
    HAVE_CURRENT_DATA: number;
    HAVE_NOTHING: number;
    NETWORK_NO_SOURCE: number;
    HAVE_ENOUGH_DATA: number;
    NETWORK_EMPTY: number;
    NETWORK_LOADING: number;
    NETWORK_IDLE: number;
    HAVE_FUTURE_DATA: number;
}
declare var HTMLMediaElement: {
    prototype: HTMLMediaElement;
    new(): HTMLMediaElement;
    HAVE_METADATA: number;
    HAVE_CURRENT_DATA: number;
    HAVE_NOTHING: number;
    NETWORK_NO_SOURCE: number;
    HAVE_ENOUGH_DATA: number;
    NETWORK_EMPTY: number;
    NETWORK_LOADING: number;
    NETWORK_IDLE: number;
    HAVE_FUTURE_DATA: number;
}

interface ElementCSSInlineStyle extends MSElementCSSInlineStyleExtensions {
    runtimeStyle: MSStyleCSSProperties;
    currentStyle: MSCurrentStyleCSSProperties;
}

interface DOMParser {
    parseFromString(source: string, mimeType: string): Document;
}
declare var DOMParser: {
    prototype: DOMParser;
    new (): DOMParser;
}

interface MSMimeTypesCollection {
    length: number;
}
declare var MSMimeTypesCollection: {
    prototype: MSMimeTypesCollection;
    new(): MSMimeTypesCollection;
}

interface StyleSheet {
    disabled: bool;
    ownerNode: Node;
    parentStyleSheet: StyleSheet;
    href: string;
    media: MediaList;
    type: string;
    title: string;
}
declare var StyleSheet: {
    prototype: StyleSheet;
    new(): StyleSheet;
}

interface DOML2DeprecatedBorderStyle_HTMLTableElement {
    border: string;
}

interface DOML2DeprecatedWidthStyle_HTMLAppletElement {
    width: number;
}

interface SVGTextPathElement extends SVGTextContentElement, SVGURIReference {
    startOffset: SVGAnimatedLength;
    method: SVGAnimatedEnumeration;
    spacing: SVGAnimatedEnumeration;
    TEXTPATH_SPACINGTYPE_EXACT: number;
    TEXTPATH_METHODTYPE_STRETCH: number;
    TEXTPATH_SPACINGTYPE_AUTO: number;
    TEXTPATH_SPACINGTYPE_UNKNOWN: number;
    TEXTPATH_METHODTYPE_UNKNOWN: number;
    TEXTPATH_METHODTYPE_ALIGN: number;
}
declare var SVGTextPathElement: {
    prototype: SVGTextPathElement;
    new(): SVGTextPathElement;
    TEXTPATH_SPACINGTYPE_EXACT: number;
    TEXTPATH_METHODTYPE_STRETCH: number;
    TEXTPATH_SPACINGTYPE_AUTO: number;
    TEXTPATH_SPACINGTYPE_UNKNOWN: number;
    TEXTPATH_METHODTYPE_UNKNOWN: number;
    TEXTPATH_METHODTYPE_ALIGN: number;
}

interface NodeList {
    length: number;
    item(index: number): Node;
    [index: number]: Node;
}
declare var NodeList: {
    prototype: NodeList;
    new(): NodeList;
}

interface HTMLDTElement extends HTMLElement, DOML2DeprecatedWordWrapSuppression_HTMLDTElement {
}
declare var HTMLDTElement: {
    prototype: HTMLDTElement;
    new(): HTMLDTElement;
}

interface XMLSerializer {
    serializeToString(target: Node): string;
}
declare var XMLSerializer: {
    prototype: XMLSerializer;
    new (): XMLSerializer;
}

interface StyleSheetPage {
    pseudoClass: string;
    selector: string;
}

interface DOML2DeprecatedWordWrapSuppression_HTMLDDElement {
    noWrap: bool;
}

interface MSHTMLTableRowElementExtensions {
    height: any;
}

interface SVGGradientElement extends SVGElement, SVGUnitTypes, SVGStylable, SVGURIReference {
    spreadMethod: SVGAnimatedEnumeration;
    gradientTransform: SVGAnimatedTransformList;
    gradientUnits: SVGAnimatedEnumeration;
    SVG_SPREADMETHOD_REFLECT: number;
    SVG_SPREADMETHOD_PAD: number;
    SVG_SPREADMETHOD_UNKNOWN: number;
    SVG_SPREADMETHOD_REPEAT: number;
}
declare var SVGGradientElement: {
    prototype: SVGGradientElement;
    new(): SVGGradientElement;
    SVG_SPREADMETHOD_REFLECT: number;
    SVG_SPREADMETHOD_PAD: number;
    SVG_SPREADMETHOD_UNKNOWN: number;
    SVG_SPREADMETHOD_REPEAT: number;
}

interface DOML2DeprecatedTextFlowControl_HTMLBRElement {
    clear: string;
}

interface MSHTMLParagraphElementExtensions extends DOML2DeprecatedTextFlowControl_HTMLBlockElement {
}

interface NodeFilter {
    acceptNode(n: Node): number;
    SHOW_ENTITY_REFERENCE: number;
    SHOW_NOTATION: number;
    SHOW_ENTITY: number;
    SHOW_DOCUMENT: number;
    SHOW_PROCESSING_INSTRUCTION: number;
    FILTER_REJECT: number;
    SHOW_CDATA_SECTION: number;
    FILTER_ACCEPT: number;
    SHOW_ALL: number;
    SHOW_DOCUMENT_TYPE: number;
    SHOW_TEXT: number;
    SHOW_ELEMENT: number;
    SHOW_COMMENT: number;
    FILTER_SKIP: number;
    SHOW_ATTRIBUTE: number;
    SHOW_DOCUMENT_FRAGMENT: number;
}
declare var NodeFilter: {
    prototype: NodeFilter;
    new(): NodeFilter;
    SHOW_ENTITY_REFERENCE: number;
    SHOW_NOTATION: number;
    SHOW_ENTITY: number;
    SHOW_DOCUMENT: number;
    SHOW_PROCESSING_INSTRUCTION: number;
    FILTER_REJECT: number;
    SHOW_CDATA_SECTION: number;
    FILTER_ACCEPT: number;
    SHOW_ALL: number;
    SHOW_DOCUMENT_TYPE: number;
    SHOW_TEXT: number;
    SHOW_ELEMENT: number;
    SHOW_COMMENT: number;
    FILTER_SKIP: number;
    SHOW_ATTRIBUTE: number;
    SHOW_DOCUMENT_FRAGMENT: number;
}

interface MSBorderColorStyle_HTMLFrameElement {
    borderColor: any;
}

interface MSHTMLOListElementExtensions {
}

interface DOML2DeprecatedWordWrapSuppression_HTMLDTElement {
    noWrap: bool;
}

interface ScreenView extends AbstractView {
    outerWidth: number;
    pageXOffset: number;
    innerWidth: number;
    pageYOffset: number;
    screenY: number;
    outerHeight: number;
    screen: Screen;
    innerHeight: number;
    screenX: number;
    scroll(x?: number, y?: number): void;
    scrollBy(x?: number, y?: number): void;
    scrollTo(x?: number, y?: number): void;
}

interface DOML2DeprecatedMarginStyle_HTMLObjectElement {
    vspace: number;
    hspace: number;
}

interface DOML2DeprecatedMarginStyle_HTMLInputElement {
    vspace: number;
    hspace: number;
}

interface MSHTMLTableSectionElementExtensions extends DOML2DeprecatedBackgroundColorStyle {
    moveRow(indexFrom?: number, indexTo?: number): Object;
}

interface HTMLFieldSetElement extends HTMLElement, MSHTMLFieldSetElementExtensions {
    form: HTMLFormElement;
}
declare var HTMLFieldSetElement: {
    prototype: HTMLFieldSetElement;
    new(): HTMLFieldSetElement;
}

interface MediaError {
    code: number;
    MEDIA_ERR_ABORTED: number;
    MEDIA_ERR_NETWORK: number;
    MEDIA_ERR_SRC_NOT_SUPPORTED: number;
    MEDIA_ERR_DECODE: number;
}
declare var MediaError: {
    prototype: MediaError;
    new(): MediaError;
    MEDIA_ERR_ABORTED: number;
    MEDIA_ERR_NETWORK: number;
    MEDIA_ERR_SRC_NOT_SUPPORTED: number;
    MEDIA_ERR_DECODE: number;
}

interface SVGNumberList {
    numberOfItems: number;
    replaceItem(newItem: SVGNumber, index: number): SVGNumber;
    getItem(index: number): SVGNumber;
    clear(): void;
    appendItem(newItem: SVGNumber): SVGNumber;
    initialize(newItem: SVGNumber): SVGNumber;
    removeItem(index: number): SVGNumber;
    insertItemBefore(newItem: SVGNumber, index: number): SVGNumber;
}
declare var SVGNumberList: {
    prototype: SVGNumberList;
    new(): SVGNumberList;
}

interface HTMLBGSoundElement extends HTMLElement {
    balance: any;
    volume: any;
    src: string;
    loop: number;
}
declare var HTMLBGSoundElement: {
    prototype: HTMLBGSoundElement;
    new(): HTMLBGSoundElement;
}

interface HTMLElement extends Element, MSHTMLElementRangeExtensions, ElementCSSInlineStyle, MSEventAttachmentTarget, MSHTMLElementExtensions, MSNodeExtensions {
    ondragend: (ev: DragEvent) => any;
    onkeydown: (ev: KeyboardEvent) => any;
    ondragover: (ev: DragEvent) => any;
    onkeyup: (ev: KeyboardEvent) => any;
    offsetTop: number;
    onreset: (ev: Event) => any;
    onmouseup: (ev: MouseEvent) => any;
    ondragstart: (ev: DragEvent) => any;
    ondrag: (ev: DragEvent) => any;
    innerHTML: string;
    onmouseover: (ev: MouseEvent) => any;
    ondragleave: (ev: DragEvent) => any;
    lang: string;
    onpause: (ev: Event) => any;
    className: string;
    onseeked: (ev: Event) => any;
    onmousedown: (ev: MouseEvent) => any;
    title: string;
    onclick: (ev: MouseEvent) => any;
    onwaiting: (ev: Event) => any;
    outerHTML: string;
    offsetLeft: number;
    ondurationchange: (ev: Event) => any;
    offsetHeight: number;
    dir: string;
    onblur: (ev: FocusEvent) => any;
    onemptied: (ev: Event) => any;
    onseeking: (ev: Event) => any;
    oncanplay: (ev: Event) => any;
    onstalled: (ev: Event) => any;
    onmousemove: (ev: MouseEvent) => any;
    style: MSStyleCSSProperties;
    isContentEditable: bool;
    onratechange: (ev: Event) => any;
    onloadstart: (ev: Event) => any;
    ondragenter: (ev: DragEvent) => any;
    contentEditable: string;
    onsubmit: (ev: Event) => any;
    tabIndex: number;
    onprogress: (ev: any) => any;
    ondblclick: (ev: MouseEvent) => any;
    oncontextmenu: (ev: MouseEvent) => any;
    onchange: (ev: Event) => any;
    onloadedmetadata: (ev: Event) => any;
    onerror: (ev: Event) => any;
    onplay: (ev: Event) => any;
    id: string;
    onplaying: (ev: Event) => any;
    oncanplaythrough: (ev: Event) => any;
    onabort: (ev: UIEvent) => any;
    onreadystatechange: (ev: Event) => any;
    onkeypress: (ev: KeyboardEvent) => any;
    offsetParent: Element;
    onloadeddata: (ev: Event) => any;
    disabled: bool;
    onsuspend: (ev: Event) => any;
    accessKey: string;
    onfocus: (ev: FocusEvent) => any;
    ontimeupdate: (ev: Event) => any;
    onselect: (ev: UIEvent) => any;
    ondrop: (ev: DragEvent) => any;
    offsetWidth: number;
    onmouseout: (ev: MouseEvent) => any;
    onended: (ev: Event) => any;
    onscroll: (ev: UIEvent) => any;
    onmousewheel: (ev: MouseWheelEvent) => any;
    onvolumechange: (ev: Event) => any;
    onload: (ev: Event) => any;
    oninput: (ev: Event) => any;
    click(): void;
    getElementsByClassName(classNames: string): NodeList;
    scrollIntoView(top?: bool): void;
    focus(): void;
    blur(): void;
    insertAdjacentHTML(where: string, html: string): void;
}
declare var HTMLElement: {
    prototype: HTMLElement;
    new(): HTMLElement;
}

interface Comment extends CharacterData, MSCommentExtensions {
}
declare var Comment: {
    prototype: Comment;
    new(): Comment;
}

interface CanvasPattern {
}
declare var CanvasPattern: {
    prototype: CanvasPattern;
    new(): CanvasPattern;
}

interface HTMLHRElement extends HTMLElement, DOML2DeprecatedWidthStyle_HTMLHRElement, MSHTMLHRElementExtensions, HTMLHRElementDOML2Deprecated, DOML2DeprecatedAlignmentStyle_HTMLHRElement, DOML2DeprecatedSizeProperty {
}
declare var HTMLHRElement: {
    prototype: HTMLHRElement;
    new(): HTMLHRElement;
}

interface MSHTMLFrameSetElementExtensions {
    name: string;
    frameBorder: string;
    border: string;
    frameSpacing: any;
}

interface DOML2DeprecatedTextFlowControl_HTMLBlockElement {
    clear: string;
}

interface PositionOptions {
    enableHighAccuracy?: bool;
    timeout?: number;
    maximumAge?: number;
}

interface HTMLObjectElement extends HTMLElement, MSHTMLObjectElementExtensions, GetSVGDocument, DOML2DeprecatedMarginStyle_HTMLObjectElement, MSDataBindingExtensions, MSDataBindingRecordSetExtensions, DOML2DeprecatedAlignmentStyle_HTMLObjectElement, DOML2DeprecatedBorderStyle_HTMLObjectElement {
    width: string;
    codeType: string;
    archive: string;
    standby: string;
    name: string;
    useMap: string;
    form: HTMLFormElement;
    data: string;
    height: string;
    contentDocument: Document;
    codeBase: string;
    declare: bool;
    type: string;
    code: string;
}
declare var HTMLObjectElement: {
    prototype: HTMLObjectElement;
    new(): HTMLObjectElement;
}

interface MSHTMLMenuElementExtensions {
}

interface DocumentView {
    defaultView: AbstractView;
    elementFromPoint(x: number, y: number): Element;
}

interface StorageEvent extends Event {
    oldValue: any;
    newValue: any;
    url: string;
    storageArea: Storage;
    key: string;
    initStorageEvent(typeArg: string, canBubbleArg: bool, cancelableArg: bool, keyArg: string, oldValueArg: any, newValueArg: any, urlArg: string, storageAreaArg: Storage): void;
}
declare var StorageEvent: {
    prototype: StorageEvent;
    new(): StorageEvent;
}

interface HTMLEmbedElement extends HTMLElement, GetSVGDocument, MSHTMLEmbedElementExtensions {
    width: string;
    src: string;
    name: string;
    height: string;
}
declare var HTMLEmbedElement: {
    prototype: HTMLEmbedElement;
    new(): HTMLEmbedElement;
}

interface CharacterData extends Node {
    length: number;
    data: string;
    deleteData(offset: number, count: number): void;
    replaceData(offset: number, count: number, arg: string): void;
    appendData(arg: string): void;
    insertData(offset: number, arg: string): void;
    substringData(offset: number, count: number): string;
}
declare var CharacterData: {
    prototype: CharacterData;
    new(): CharacterData;
}

interface DOML2DeprecatedAlignmentStyle_HTMLTableSectionElement {
    align: string;
}

interface HTMLOptGroupElement extends HTMLElement, MSDataBindingExtensions, MSHTMLOptGroupElementExtensions {
    label: string;
}
declare var HTMLOptGroupElement: {
    prototype: HTMLOptGroupElement;
    new(): HTMLOptGroupElement;
}

interface HTMLIsIndexElement extends HTMLElement, MSHTMLIsIndexElementExtensions {
    form: HTMLFormElement;
    prompt: string;
}
declare var HTMLIsIndexElement: {
    prototype: HTMLIsIndexElement;
    new(): HTMLIsIndexElement;
}

interface SVGPathSegLinetoRel extends SVGPathSeg {
    y: number;
    x: number;
}
declare var SVGPathSegLinetoRel: {
    prototype: SVGPathSegLinetoRel;
    new(): SVGPathSegLinetoRel;
}

interface MSHTMLDocumentSelection {
    selection: MSSelection;
}

interface DOMException {
    code: number;
    message: string;
    toString(): string;
    HIERARCHY_REQUEST_ERR: number;
    NO_MODIFICATION_ALLOWED_ERR: number;
    INVALID_MODIFICATION_ERR: number;
    NAMESPACE_ERR: number;
    INVALID_CHARACTER_ERR: number;
    TYPE_MISMATCH_ERR: number;
    ABORT_ERR: number;
    INVALID_STATE_ERR: number;
    SECURITY_ERR: number;
    NETWORK_ERR: number;
    WRONG_DOCUMENT_ERR: number;
    QUOTA_EXCEEDED_ERR: number;
    INDEX_SIZE_ERR: number;
    DOMSTRING_SIZE_ERR: number;
    SYNTAX_ERR: number;
    SERIALIZE_ERR: number;
    VALIDATION_ERR: number;
    NOT_FOUND_ERR: number;
    URL_MISMATCH_ERR: number;
    PARSE_ERR: number;
    NO_DATA_ALLOWED_ERR: number;
    NOT_SUPPORTED_ERR: number;
    INVALID_ACCESS_ERR: number;
    INUSE_ATTRIBUTE_ERR: number;
}
declare var DOMException: {
    prototype: DOMException;
    new(): DOMException;
    HIERARCHY_REQUEST_ERR: number;
    NO_MODIFICATION_ALLOWED_ERR: number;
    INVALID_MODIFICATION_ERR: number;
    NAMESPACE_ERR: number;
    INVALID_CHARACTER_ERR: number;
    TYPE_MISMATCH_ERR: number;
    ABORT_ERR: number;
    INVALID_STATE_ERR: number;
    SECURITY_ERR: number;
    NETWORK_ERR: number;
    WRONG_DOCUMENT_ERR: number;
    QUOTA_EXCEEDED_ERR: number;
    INDEX_SIZE_ERR: number;
    DOMSTRING_SIZE_ERR: number;
    SYNTAX_ERR: number;
    SERIALIZE_ERR: number;
    VALIDATION_ERR: number;
    NOT_FOUND_ERR: number;
    URL_MISMATCH_ERR: number;
    PARSE_ERR: number;
    NO_DATA_ALLOWED_ERR: number;
    NOT_SUPPORTED_ERR: number;
    INVALID_ACCESS_ERR: number;
    INUSE_ATTRIBUTE_ERR: number;
}

interface MSCompatibleInfoCollection {
    length: number;
    item(index: number): MSCompatibleInfo;
}
declare var MSCompatibleInfoCollection: {
    prototype: MSCompatibleInfoCollection;
    new(): MSCompatibleInfoCollection;
}

interface MSHTMLIsIndexElementExtensions {
    action: string;
}

interface SVGAnimatedBoolean {
    animVal: bool;
    baseVal: bool;
}
declare var SVGAnimatedBoolean: {
    prototype: SVGAnimatedBoolean;
    new(): SVGAnimatedBoolean;
}

interface SVGSwitchElement extends SVGElement, SVGStylable, SVGTransformable, SVGLangSpace, SVGTests {
}
declare var SVGSwitchElement: {
    prototype: SVGSwitchElement;
    new(): SVGSwitchElement;
}

interface MSHTMLIFrameElementExtensions extends DOML2DeprecatedMarginStyle_MSHTMLIFrameElementExtensions, DOML2DeprecatedBorderStyle_MSHTMLIFrameElementExtensions {
    onload: (ev: Event) => any;
    frameSpacing: any;
    noResize: bool;
}

interface SVGPreserveAspectRatio {
    align: number;
    meetOrSlice: number;
    SVG_PRESERVEASPECTRATIO_NONE: number;
    SVG_PRESERVEASPECTRATIO_XMINYMID: number;
    SVG_PRESERVEASPECTRATIO_XMAXYMIN: number;
    SVG_PRESERVEASPECTRATIO_XMINYMAX: number;
    SVG_PRESERVEASPECTRATIO_XMAXYMAX: number;
    SVG_MEETORSLICE_UNKNOWN: number;
    SVG_PRESERVEASPECTRATIO_XMAXYMID: number;
    SVG_PRESERVEASPECTRATIO_XMIDYMAX: number;
    SVG_PRESERVEASPECTRATIO_XMINYMIN: number;
    SVG_MEETORSLICE_MEET: number;
   SVG_PRESERVEASPECTRATIO_XMIDYMID: number;
    SVG_PRESERVEASPECTRATIO_XMIDYMIN: number;
    SVG_MEETORSLICE_SLICE: number;
    SVG_PRESERVEASPECTRATIO_UNKNOWN: number;
}
declare var SVGPreserveAspectRatio: {
    prototype: SVGPreserveAspectRatio;
    new(): SVGPreserveAspectRatio;
    SVG_PRESERVEASPECTRATIO_NONE: number;
    SVG_PRESERVEASPECTRATIO_XMINYMID: number;
    SVG_PRESERVEASPECTRATIO_XMAXYMIN: number;
    SVG_PRESERVEASPECTRATIO_XMINYMAX: number;
    SVG_PRESERVEASPECTRATIO_XMAXYMAX: number;
    SVG_MEETORSLICE_UNKNOWN: number;
    SVG_PRESERVEASPECTRATIO_XMAXYMID: number;
    SVG_PRESERVEASPECTRATIO_XMIDYMAX: number;
    SVG_PRESERVEASPECTRATIO_XMINYMIN: number;
    SVG_MEETORSLICE_MEET: number;
    SVG_PRESERVEASPECTRATIO_XMIDYMID: number;
    SVG_PRESERVEASPECTRATIO_XMIDYMIN: number;
    SVG_MEETORSLICE_SLICE: number;
    SVG_PRESERVEASPECTRATIO_UNKNOWN: number;
}

interface Attr extends Node, MSAttrExtensions {
    specified: bool;
    ownerElement: Element;
    value: string;
    name: string;
}
declare var Attr: {
    prototype: Attr;
    new(): Attr;
}

interface MSBorderColorStyle_HTMLTableRowElement {
    borderColor: any;
}

interface DOML2DeprecatedAlignmentStyle_HTMLTableCaptionElement {
    align: string;
}

interface PerformanceNavigation {
    redirectCount: number;
    type: number;
    toJSON(): any;
    TYPE_RELOAD: number;
    TYPE_RESERVED: number;
    TYPE_BACK_FORWARD: number;
    TYPE_NAVIGATE: number;
}
declare var PerformanceNavigation: {
    prototype: PerformanceNavigation;
    new(): PerformanceNavigation;
    TYPE_RELOAD: number;
    TYPE_RESERVED: number;
    TYPE_BACK_FORWARD: number;
    TYPE_NAVIGATE: number;
}

interface HTMLBodyElementDOML2Deprecated {
    link: any;
    aLink: any;
    text: any;
    vLink: any;
}

interface SVGStopElement extends SVGElement, SVGStylable {
    offset: SVGAnimatedNumber;
}
declare var SVGStopElement: {
    prototype: SVGStopElement;
    new(): SVGStopElement;
}

interface PositionCallback {
    (position: Position): void;
}

interface SVGSymbolElement extends SVGElement, SVGStylable, SVGLangSpace, SVGFitToViewBox {
}
declare var SVGSymbolElement: {
    prototype: SVGSymbolElement;
    new(): SVGSymbolElement;
}

interface SVGElementInstanceList {
    length: number;
    item(index: number): SVGElementInstance;
}
declare var SVGElementInstanceList: {
    prototype: SVGElementInstanceList;
    new(): SVGElementInstanceList;
}

interface MSDataBindingRecordSetExtensions {
    recordset: Object;
    namedRecordset(dataMember: string, hierarchy?: any): Object;
}

interface CSSRuleList {
    length: number;
    item(index: number): CSSRule;
    [index: number]: CSSRule;
}
declare var CSSRuleList: {
    prototype: CSSRuleList;
    new(): CSSRuleList;
}

interface MSHTMLTableColElementExtensions {
}

interface LinkStyle {
    sheet: StyleSheet;
}

interface MSHTMLMarqueeElementExtensions {
}

interface HTMLVideoElement extends HTMLMediaElement {
    width: number;
    videoWidth: number;
    videoHeight: number;
    height: number;
    poster: string;
}
declare var HTMLVideoElement: {
    prototype: HTMLVideoElement;
    new(): HTMLVideoElement;
}

interface MSXMLHttpRequestExtensions {
    responseBody: any;
    timeout: number;
    ontimeout: (ev: Event) => any;
}

interface ClientRectList {
    length: number;
    item(index: number): ClientRect;
    [index: number]: ClientRect;
}
declare var ClientRectList: {
    prototype: ClientRectList;
    new(): ClientRectList;
}

interface DOML2DeprecatedAlignmentStyle_HTMLTableCellElement {
    align: string;
}

interface SVGMaskElement extends SVGElement, SVGUnitTypes, SVGStylable, SVGLangSpace, SVGTests {
    y: SVGAnimatedLength;
    width: SVGAnimatedLength;
    maskUnits: SVGAnimatedEnumeration;
    maskContentUnits: SVGAnimatedEnumeration;
    x: SVGAnimatedLength;
    height: SVGAnimatedLength;
}
declare var SVGMaskElement: {
    prototype: SVGMaskElement;
    new(): SVGMaskElement;
}

declare var Audio: { new (src?: string): HTMLAudioElement; };
declare var Option: { new (text?: string, value?: string, defaultSelected?: bool, selected?: bool): HTMLOptionElement; };
declare var Image: { new (width?: number, height?: number): HTMLImageElement; };

declare var ondragend: (ev: DragEvent) => any;
declare var onkeydown: (ev: KeyboardEvent) => any;
declare var ondragover: (ev: DragEvent) => any;
declare var onkeyup: (ev: KeyboardEvent) => any;
declare var onreset: (ev: Event) => any;
declare var onmouseup: (ev: MouseEvent) => any;
declare var ondragstart: (ev: DragEvent) => any;
declare var ondrag: (ev: DragEvent) => any;
declare var onmouseover: (ev: MouseEvent) => any;
declare var ondragleave: (ev: DragEvent) => any;
declare var history: History;
declare var name: string;
declare var onafterprint: (ev: Event) => any;
declare var onpause: (ev: Event) => any;
declare var onbeforeprint: (ev: Event) => any;
declare var top: Window;
declare var onmousedown: (ev: MouseEvent) => any;
declare var onseeked: (ev: Event) => any;
declare var opener: Window;
declare var onclick: (ev: MouseEvent) => any;
declare var onwaiting: (ev: Event) => any;
declare var ononline: (ev: Event) => any;
declare var ondurationchange: (ev: Event) => any;
declare var frames: Window;
declare var onblur: (ev: FocusEvent) => any;
declare var onemptied: (ev: Event) => any;
declare var onseeking: (ev: Event) => any;
declare var oncanplay: (ev: Event) => any;
declare var onstalled: (ev: Event) => any;
declare var onmousemove: (ev: MouseEvent) => any;
declare var onoffline: (ev: Event) => any;
declare var length: number;
declare var onbeforeunload: (ev: BeforeUnloadEvent) => any;
declare var onratechange: (ev: Event) => any;
declare var onstorage: (ev: StorageEvent) => any;
declare var onloadstart: (ev: Event) => any;
declare var ondragenter: (ev: DragEvent) => any;
declare var onsubmit: (ev: Event) => any;
declare var self: Window;
declare var onprogress: (ev: any) => any;
declare var ondblclick: (ev: MouseEvent) => any;
declare var oncontextmenu: (ev: MouseEvent) => any;
declare var onchange: (ev: Event) => any;
declare var onloadedmetadata: (ev: Event) => any;
declare var onplay: (ev: Event) => any;
declare var onerror: ErrorFunction;
declare var onplaying: (ev: Event) => any;
declare var parent: Window;
declare var location: Location;
declare var oncanplaythrough: (ev: Event) => any;
declare var onabort: (ev: UIEvent) => any;
declare var onreadystatechange: (ev: Event) => any;
declare var onkeypress: (ev: KeyboardEvent) => any;
declare var frameElement: Element;
declare var onloadeddata: (ev: Event) => any;
declare var onsuspend: (ev: Event) => any;
declare var window: Window;
declare var onfocus: (ev: FocusEvent) => any;
declare var onmessage: (ev: MessageEvent) => any;
declare var ontimeupdate: (ev: Event) => any;
declare var onresize: (ev: UIEvent) => any;
declare var navigator: Navigator;
declare var onselect: (ev: UIEvent) => any;
declare var ondrop: (ev: DragEvent) => any;
declare var onmouseout: (ev: MouseEvent) => any;
declare var onended: (ev: Event) => any;
declare var onhashchange: (ev: Event) => any;
declare var onunload: (ev: Event) => any;
declare var onscroll: (ev: UIEvent) => any;
declare var onmousewheel: (ev: MouseWheelEvent) => any;
declare var onload: (ev: Event) => any;
declare var onvolumechange: (ev: Event) => any;
declare var oninput: (ev: Event) => any;
declare function alert(message?: string): void;
declare function focus(): void;
declare function print(): void;
declare function prompt(message?: string, defaul?: string): string;
declare function toString(): string;
declare function open(url?: string, target?: string, features?: string, replace?: bool): Window;
declare function close(): void;
declare function confirm(message?: string): bool;
declare function postMessage(message: any, targetOrigin: string, ports?: any): void;
declare function showModalDialog(url?: string, argument?: any, options?: any): any;
declare function blur(): void;
declare function getSelection(): Selection;
declare function getComputedStyle(elt: Element, pseudoElt?: string): CSSStyleDeclaration;
declare function attachEvent(event: string, listener: EventListener): bool;
declare function detachEvent(event: string, listener: EventListener): void;
declare var status: string;
declare var onmouseleave: (ev: MouseEvent) => any;
declare var screenLeft: number;
declare var offscreenBuffering: any;
declare var maxConnectionsPerServer: number;
declare var onmouseenter: (ev: MouseEvent) => any;
declare var clipboardData: DataTransfer;
declare var defaultStatus: string;
declare var clientInformation: Navigator;
declare var closed: bool;
declare var onhelp: (ev: Event) => any;
declare var external: BrowserPublic;
declare var event: MSEventObj;
declare var onfocusout: (ev: FocusEvent) => any;
declare var screenTop: number;
declare var onfocusin: (ev: FocusEvent) => any;
declare function showModelessDialog(url?: string, argument?: any, options?: any): Window;
declare function navigate(url: string): void;
declare function resizeBy(x?: number, y?: number): void;
declare function item(index: any): any;
declare function resizeTo(x?: number, y?: number): void;
declare function createPopup(arguments?: any): MSPopupWindow;
declare function toStaticHTML(html: string): string;
declare function execScript(code: string, language?: string): any;
declare function msWriteProfilerMark(profilerMarkName: string): void;
declare function moveTo(x?: number, y?: number): void;
declare function moveBy(x?: number, y?: number): void;
declare function showHelp(url: string, helpArg?: any, features?: string): void;
declare var performance: any;
declare var outerWidth: number;
declare var pageXOffset: number;
declare var innerWidth: number;
declare var pageYOffset: number;
declare var screenY: number;
declare var outerHeight: number;
declare var screen: Screen;
declare var innerHeight: number;
declare var screenX: number;
declare function scroll(x?: number, y?: number): void;
declare function scrollBy(x?: number, y?: number): void;
declare function scrollTo(x?: number, y?: number): void;
declare var styleMedia: StyleMedia;
declare var document: Document;
declare function removeEventListener(type: string, listener: EventListener, useCapture?: bool): void;
declare function addEventListener(type: string, listener: EventListener, useCapture?: bool): void;
declare function dispatchEvent(evt: Event): bool;
declare var localStorage: Storage;
declare var sessionStorage: Storage;
declare function clearTimeout(handle: number): void;
declare function setTimeout(expression: any, msec?: number, language?: any): number;
declare function clearInterval(handle: number): void;
declare function setInterval(expression: any, msec?: number, language?: any): number;


/////////////////////////////
/// IE10 DOM APIs 
/////////////////////////////

interface HTMLBodyElement {
    onpopstate: (ev: PopStateEvent) => any;
}

interface MSGestureEvent extends UIEvent {
    offsetY: number;
    translationY: number;
    velocityExpansion: number;
    velocityY: number;
    velocityAngular: number;
    translationX: number;
    velocityX: number;
    hwTimestamp: number;
    offsetX: number;
    screenX: number;
    rotation: number;
    expansion: number;
    clientY: number;
    screenY: number;
    scale: number;
    gestureObject: any;
    clientX: number;
    initGestureEvent(typeArg: string, canBubbleArg: bool, cancelableArg: bool, viewArg: AbstractView, detailArg: number, screenXArg: number, screenYArg: number, clientXArg: number, clientYArg: number, offsetXArg: number, offsetYArg: number, translationXArg: number, translationYArg: number, scaleArg: number, expansionArg: number, rotationArg: number, velocityXArg: number, velocityYArg: number, velocityExpansionArg: number, velocityAngularArg: number, hwTimestampArg: number): void;
    MSGESTURE_FLAG_BEGIN: number;
    MSGESTURE_FLAG_END: number;
    MSGESTURE_FLAG_CANCEL: number;
    MSGESTURE_FLAG_INERTIA: number;
    MSGESTURE_FLAG_NONE: number;
}
declare var MSGestureEvent: {
    prototype: MSGestureEvent;
    new(): MSGestureEvent;
    MSGESTURE_FLAG_BEGIN: number;
    MSGESTURE_FLAG_END: number;
    MSGESTURE_FLAG_CANCEL: number;
    MSGESTURE_FLAG_INERTIA: number;
    MSGESTURE_FLAG_NONE: number;
}

interface HTMLAnchorElement {
    text: string;
}

interface HTMLInputElement {
    validationMessage: string;
    files: FileList;
    max: string;
    formTarget: string;
    willValidate: bool;
    step: string;
    autofocus: bool;
    required: bool;
    formEnctype: string;
    valueAsNumber: number;
    placeholder: string;
    formMethod: string;
    list: HTMLElement;
    autocomplete: string;
    min: string;
    formAction: string;
    pattern: string;
    validity: ValidityState;
    formNoValidate: string;
    multiple: bool;
    checkValidity(): bool;
    stepDown(n?: number): void;
    stepUp(n?: number): void;
    setCustomValidity(error: string): void;
}

interface ErrorEvent extends Event {
    colno: number;
    filename: string;
    lineno: number;
    message: string;
    initErrorEvent(typeArg: string, canBubbleArg: bool, cancelableArg: bool, messageArg: string, filenameArg: string, linenoArg: number): void;
}
declare var ErrorEvent: {
    prototype: ErrorEvent;
    new(): ErrorEvent;
}

interface SVGFilterElement extends SVGElement, SVGUnitTypes, SVGStylable, SVGLangSpace, SVGURIReference {
    y: SVGAnimatedLength;
    width: SVGAnimatedLength;
    filterResX: SVGAnimatedInteger;
    filterUnits: SVGAnimatedEnumeration;
    primitiveUnits: SVGAnimatedEnumeration;
    x: SVGAnimatedLength;
    height: SVGAnimatedLength;
    filterResY: SVGAnimatedInteger;
    setFilterRes(filterResX: number, filterResY: number): void;
}
declare var SVGFilterElement: {
    prototype: SVGFilterElement;
    new(): SVGFilterElement;
}

interface TrackEvent extends Event {
    track: any;
}
declare var TrackEvent: {
    prototype: TrackEvent;
    new(): TrackEvent;
}

interface SVGFEMergeNodeElement extends SVGElement {
    in1: SVGAnimatedString;
}
declare var SVGFEMergeNodeElement: {
    prototype: SVGFEMergeNodeElement;
    new(): SVGFEMergeNodeElement;
}

interface SVGFEFloodElement extends SVGElement, SVGFilterPrimitiveStandardAttributes {
}
declare var SVGFEFloodElement: {
    prototype: SVGFEFloodElement;
    new(): SVGFEFloodElement;
}

interface MSElementExtensions {
    msRegionOverflow: string;
    onmspointerdown: (ev: any) => any;
    onmsgotpointercapture: (ev: any) => any;
    onmsgesturedoubletap: (ev: any) => any;
    onmspointerhover: (ev: any) => any;
    onmsgesturehold: (ev: any) => any;
    onmspointermove: (ev: any) => any;
    onmsgesturechange: (ev: any) => any;
    onmsgesturestart: (ev: any) => any;
    onmspointercancel: (ev: any) => any;
    onmsgestureend: (ev: any) => any;
    onmsgesturetap: (ev: any) => any;
    onmspointerout: (ev: any) => any;
    onmsinertiastart: (ev: any) => any;
    onmslostpointercapture: (ev: any) => any;
    onmspointerover: (ev: any) => any;
    msContentZoomFactor: number;
    onmspointerup: (ev: any) => any;
    msGetRegionContent(): MSRangeCollection;
    msReleasePointerCapture(pointerId: number): void;
    msSetPointerCapture(pointerId: number): void;
}
declare var MSElementExtensions: {
    prototype: MSElementExtensions;
    new(): MSElementExtensions;
}

interface MSCSSScrollTranslationProperties {
    msScrollTranslation: string;
}

interface MSGesture {
    target: Element;
    addPointer(pointerId: number): void;
    stop(): void;
}
declare var MSGesture: {
    prototype: MSGesture;
    new (): MSGesture;
}

interface TextTrackCue extends EventTarget {
    onenter: (ev: Event) => any;
    track: TextTrack;
    endTime: number;
    text: string;
    pauseOnExit: bool;
    id: string;
    startTime: number;
    onexit: (ev: Event) => any;
    getCueAsHTML(): DocumentFragment;
}
declare var TextTrackCue: {
    prototype: TextTrackCue;
    new(): TextTrackCue;
}

interface MSHTMLDocumentViewExtensions {
    msCSSOMElementFloatMetrics: bool;
    msElementsFromPoint(x: number, y: number): NodeList;
    msElementsFromRect(left: number, top: number, width: number, height: number): NodeList;
}
declare var MSHTMLDocumentViewExtensions: {
    prototype: MSHTMLDocumentViewExtensions;
    new(): MSHTMLDocumentViewExtensions;
}

interface MSStreamReader extends MSBaseReader {
    error: DOMError;
    readAsArrayBuffer(stream: MSStream, size?: number): void;
    readAsBlob(stream: MSStream, size?: number): void;
    readAsDataURL(stream: MSStream, size?: number): void;
    readAsText(stream: MSStream, encoding?: string, size?: number): void;
}
declare var MSStreamReader: {
    prototype: MSStreamReader;
    new (): MSStreamReader;
}

interface CSSFlexibleBoxProperties {
    msFlex: string;
    msFlexDirection: string;
    msFlexNegative: string;
    msFlexPack: string;
    msFlexWrap: string;
    msFlexItemAlign: string;
    msFlexOrder: string;
    msFlexPositive: string;
    msFlexAlign: string;
    msFlexFlow: string;
    msFlexPreferredSize: string;
    msFlexLinePack: string;
}

interface DOMTokenList {
    length: number;
    contains(token: string): bool;
    remove(token: string): void;
    toggle(token: string): bool;
    add(token: string): void;
    item(index: number): string;
    [index: number]: string;
    toString(): string;
}
declare var DOMTokenList: {
    prototype: DOMTokenList;
    new(): DOMTokenList;
}

interface EventException {
    name: string;
}

interface SVGFEFuncAElement extends SVGComponentTransferFunctionElement {
}
declare var SVGFEFuncAElement: {
    prototype: SVGFEFuncAElement;
    new(): SVGFEFuncAElement;
}

interface Performance {
    now(): number;
}

interface SVGFETileElement extends SVGElement, SVGFilterPrimitiveStandardAttributes {
    in1: SVGAnimatedString;
}
declare var SVGFETileElement: {
    prototype: SVGFETileElement;
    new(): SVGFETileElement;
}

interface SVGFEBlendElement extends SVGElement, SVGFilterPrimitiveStandardAttributes {
    in2: SVGAnimatedString;
    mode: SVGAnimatedEnumeration;
    in1: SVGAnimatedString;
    SVG_FEBLEND_MODE_DARKEN: number;
    SVG_FEBLEND_MODE_UNKNOWN: number;
    SVG_FEBLEND_MODE_MULTIPLY: number;
    SVG_FEBLEND_MODE_NORMAL: number;
    SVG_FEBLEND_MODE_SCREEN: number;
    SVG_FEBLEND_MODE_LIGHTEN: number;
}
declare var SVGFEBlendElement: {
    prototype: SVGFEBlendElement;
    new(): SVGFEBlendElement;
    SVG_FEBLEND_MODE_DARKEN: number;
    SVG_FEBLEND_MODE_UNKNOWN: number;
    SVG_FEBLEND_MODE_MULTIPLY: number;
    SVG_FEBLEND_MODE_NORMAL: number;
    SVG_FEBLEND_MODE_SCREEN: number;
    SVG_FEBLEND_MODE_LIGHTEN: number;
}

interface WindowTimers extends WindowTimersExtension {
}
declare var WindowTimers: {
    prototype: WindowTimers;
    new(): WindowTimers;
}

interface CSSStyleDeclaration extends CSS2DTransformsProperties, CSSTransitionsProperties, CSSFontsProperties, MSCSSHighContrastProperties, CSSGridProperties, CSSAnimationsProperties, MSCSSContentZoomProperties, MSCSSScrollTranslationProperties, MSCSSTouchManipulationProperties, CSSFlexibleBoxProperties, MSCSSPositionedFloatsProperties, MSCSSRegionProperties, MSCSSSelectionBoundaryProperties, CSSMultiColumnProperties, CSSTextProperties, CSS3DTransformsProperties {
}

interface MessageChannel {
    port2: MessagePort;
    port1: MessagePort;
}
declare var MessageChannel: {
    prototype: MessageChannel;
    new (): MessageChannel;
}

interface SVGFEMergeElement extends SVGElement, SVGFilterPrimitiveStandardAttributes {
}
declare var SVGFEMergeElement: {
    prototype: SVGFEMergeElement;
    new(): SVGFEMergeElement;
}

interface Navigator extends MSFileSaver {
}

interface TransitionEvent extends Event {
    propertyName: string;
    elapsedTime: number;
    initTransitionEvent(typeArg: string, canBubbleArg: bool, cancelableArg: bool, propertyNameArg: string, elapsedTimeArg: number): void;
}
declare var TransitionEvent: {
    prototype: TransitionEvent;
    new(): TransitionEvent;
}

interface MediaQueryList {
    matches: bool;
    media: string;
    addListener(listener: MediaQueryListListener): void;
    removeListener(listener: MediaQueryListListener): void;
}
declare var MediaQueryList: {
    prototype: MediaQueryList;
    new(): MediaQueryList;
}

interface DOMError {
    name: string;
    toString(): string;
}
declare var DOMError: {
    prototype: DOMError;
    new(): DOMError;
}

interface SVGFEPointLightElement extends SVGElement {
    y: SVGAnimatedNumber;
    x: SVGAnimatedNumber;
    z: SVGAnimatedNumber;
}
declare var SVGFEPointLightElement: {
    prototype: SVGFEPointLightElement;
    new(): SVGFEPointLightElement;
}

interface CSSFontsProperties {
    msFontFeatureSettings: string;
    fontFeatureSettings: string;
}

interface CloseEvent extends Event {
    wasClean: bool;
    reason: string;
    code: number;
    initCloseEvent(typeArg: string, canBubbleArg: bool, cancelableArg: bool, wasCleanArg: bool, codeArg: number, reasonArg: string): void;
}
declare var CloseEvent: {
    prototype: CloseEvent;
    new(): CloseEvent;
}

interface WebSocket extends EventTarget {
    protocol: string;
    readyState: number;
    bufferedAmount: number;
    onopen: (ev: Event) => any;
    extensions: string;
    onmessage: (ev: any) => any;
    onclose: (ev: CloseEvent) => any;
    onerror: (ev: ErrorEvent) => any;
    binaryType: string;
    url: string;
    close(code?: number, reason?: string): void;
    send(data: any): void;
    OPEN: number;
    CLOSING: number;
    CONNECTING: number;
    CLOSED: number;
}
declare var WebSocket: {
    prototype: WebSocket;
    new (url: string): WebSocket;
    new (url: string, prototcol: string): WebSocket;
    new (url: string, prototcol: string[]): WebSocket;
    OPEN: number;
    CLOSING: number;
    CONNECTING: number;
    CLOSED: number;
}

interface ProgressEvent extends Event {
    loaded: number;
    lengthComputable: bool;
    total: number;
    initProgressEvent(typeArg: string, canBubbleArg: bool, cancelableArg: bool, lengthComputableArg: bool, loadedArg: number, totalArg: number): void;
}
declare var ProgressEvent: {
    prototype: ProgressEvent;
    new(): ProgressEvent;
}

interface HTMLCanvasElement {
    msToBlob(): Blob;
}

interface IDBObjectStore {
    indexNames: DOMStringList;
    name: string;
    transaction: IDBTransaction;
    keyPath: string;
    count(key?: any): IDBRequest;
    add(value: any, key?: any): IDBRequest;
    clear(): IDBRequest;
    createIndex(name: string, keyPath: string, optionalParameters?: any): IDBIndex;
    put(value: any, key?: any): IDBRequest;
    openCursor(range?: any, direction?: string): IDBRequest;
    deleteIndex(indexName: string): void;
    index(name: string): IDBIndex;
    get(key: any): IDBRequest;
    delet(key: any): IDBRequest;
}
declare var IDBObjectStore: {
    prototype: IDBObjectStore;
    new(): IDBObjectStore;
}

interface ObjectURLOptions {
    oneTimeOnly?: bool;
}

interface SVGFEGaussianBlurElement extends SVGElement, SVGFilterPrimitiveStandardAttributes {
    stdDeviationX: SVGAnimatedNumber;
    in1: SVGAnimatedString;
    stdDeviationY: SVGAnimatedNumber;
    setStdDeviation(stdDeviationX: number, stdDeviationY: number): void;
}
declare var SVGFEGaussianBlurElement: {
    prototype: SVGFEGaussianBlurElement;
    new(): SVGFEGaussianBlurElement;
}

interface MSHTMLDocumentExtensions {
    onmspointerdown: (ev: any) => any;
    onmspointercancel: (ev: any) => any;
    onmsgesturedoubletap: (ev: any) => any;
    onmsgesturetap: (ev: any) => any;
    onmsgestureend: (ev: any) => any;
    onmspointerout: (ev: any) => any;
    onmsmanipulationstatechanged: (ev: any) => any;
    onmsinertiastart: (ev: any) => any;
    onmspointerhover: (ev: any) => any;
    onmscontentzoom: (ev: any) => any;
    onmsgesturehold: (ev: any) => any;
    onmspointermove: (ev: any) => any;
    onmspointerover: (ev: any) => any;
    onmsgesturechange: (ev: any) => any;
    onmsgesturestart: (ev: any) => any;
    onmspointerup: (ev: any) => any;
}
declare var MSHTMLDocumentExtensions: {
    prototype: MSHTMLDocumentExtensions;
    new(): MSHTMLDocumentExtensions;
}

interface MSCSSSelectionBoundaryProperties {
    msUserSelect: string;
}

interface SVGFilterPrimitiveStandardAttributes extends SVGStylable {
    y: SVGAnimatedLength;
    width: SVGAnimatedLength;
    x: SVGAnimatedLength;
    height: SVGAnimatedLength;
    result: SVGAnimatedString;
}

interface IDBVersionChangeEvent extends Event {
    newVersion: number;
    oldVersion: number;
}
declare var IDBVersionChangeEvent: {
    prototype: IDBVersionChangeEvent;
    new(): IDBVersionChangeEvent;
}

interface IDBIndex {
    unique: bool;
    name: string;
    keyPath: string;
    objectStore: IDBObjectStore;
    count(key?: any): IDBRequest;
    getKey(key: any): IDBRequest;
    openKeyCursor(range?: IDBKeyRange, direction?: string): IDBRequest;
    get(key: any): IDBRequest;
    openCursor(range?: IDBKeyRange, direction?: string): IDBRequest;
}
declare var IDBIndex: {
    prototype: IDBIndex;
    new(): IDBIndex;
}

interface FileList {
    length: number;
    item(index: number): File;
    [index: number]: File;
}
declare var FileList: {
    prototype: FileList;
    new(): FileList;
}

interface IDBCursor {
    source: any;
    direction: string;
    key: any;
    primaryKey: any;
    advance(count: number): void;
    delet(): IDBRequest;
    continu(key?: any): void;
    update(value: any): IDBRequest;
}
declare var IDBCursor: {
    prototype: IDBCursor;
    new(): IDBCursor;
}

interface CSSAnimationsProperties {
    animationFillMode: string;
    msAnimationDirection: string;
    msAnimationDelay: string;
    msAnimationFillMode: string;
    animationIterationCount: string;
    msAnimationPlayState: string;
    msAnimationIterationCount: string;
    animationDelay: string;
    animationTimingFunction: string;
    msAnimation: string;
    animation: string;
    animationDirection: string;
    animationDuration: string;
    animationName: string;
    animationPlayState: string;
    msAnimationTimingFunction: string;
    msAnimationName: string;
    msAnimationDuration: string;
}

interface SVGFESpecularLightingElement extends SVGElement, SVGFilterPrimitiveStandardAttributes {
    kernelUnitLengthY: SVGAnimatedNumber;
    surfaceScale: SVGAnimatedNumber;
    specularExponent: SVGAnimatedNumber;
    in1: SVGAnimatedString;
    kernelUnitLengthX: SVGAnimatedNumber;
    specularConstant: SVGAnimatedNumber;
}
declare var SVGFESpecularLightingElement: {
    prototype: SVGFESpecularLightingElement;
    new(): SVGFESpecularLightingElement;
}

interface File extends Blob {
    lastModifiedDate: any;
    name: string;
}
declare var File: {
    prototype: File;
    new(): File;
}

interface URL {
    revokeObjectURL(url: string): void;
    createObjectURL(object: any, options?: ObjectURLOptions): string;
}
declare var URL: URL;

interface RangeException {
    name: string;
}

interface IDBCursorWithValue extends IDBCursor {
    value: any;
}
declare var IDBCursorWithValue: {
    prototype: IDBCursorWithValue;
    new(): IDBCursorWithValue;
}

interface HTMLTextAreaElement {
    validationMessage: string;
    autofocus: bool;
    validity: ValidityState;
    required: bool;
    maxLength: number;
    willValidate: bool;
    placeholder: string;
    checkValidity(): bool;
    setCustomValidity(error: string): void;
}

interface XMLHttpRequestEventTarget extends EventTarget {
    onprogress: (ev: ProgressEvent) => any;
    onerror: (ev: ErrorEvent) => any;
    onload: (ev: any) => any;
    ontimeout: (ev: any) => any;
    onabort: (ev: any) => any;
    onloadstart: (ev: any) => any;
    onloadend: (ev: ProgressEvent) => any;
}
declare var XMLHttpRequestEventTarget: {
    prototype: XMLHttpRequestEventTarget;
    new(): XMLHttpRequestEventTarget;
}

interface IDBEnvironment {
    msIndexedDB: IDBFactory;
    indexedDB: IDBFactory;
}

interface AudioTrackList extends EventTarget {
    length: number;
    onchange: (ev: any) => any;
    onaddtrack: (ev: TrackEvent) => any;
    getTrackById(id: string): AudioTrack;
    item(index: number): AudioTrack;
    [index: number]: AudioTrack;
}
declare var AudioTrackList: {
    prototype: AudioTrackList;
    new(): AudioTrackList;
}

interface MSBaseReader extends EventTarget {
    onprogress: (ev: ProgressEvent) => any;
    readyState: number;
    onabort: (ev: any) => any;
    onloadend: (ev: ProgressEvent) => any;
    onerror: (ev: ErrorEvent) => any;
    onload: (ev: any) => any;
    onloadstart: (ev: any) => any;
    result: any;
    abort(): void;
    LOADING: number;
    EMPTY: number;
    DONE: number;
}

interface History {
    state: any;
    replaceState(statedata: any, title: string, url?: string): void;
    pushState(statedata: any, title: string, url?: string): void;
}

interface MSProtocol {
    protocol: string;
}
declare var MSProtocol: {
    prototype: MSProtocol;
    new(): MSProtocol;
}

interface SVGFEMorphologyElement extends SVGElement, SVGFilterPrimitiveStandardAttributes {
    operator: SVGAnimatedEnumeration;
    radiusX: SVGAnimatedNumber;
    radiusY: SVGAnimatedNumber;
    in1: SVGAnimatedString;
    SVG_MORPHOLOGY_OPERATOR_UNKNOWN: number;
    SVG_MORPHOLOGY_OPERATOR_ERODE: number;
    SVG_MORPHOLOGY_OPERATOR_DILATE: number;
}
declare var SVGFEMorphologyElement: {
    prototype: SVGFEMorphologyElement;
    new(): SVGFEMorphologyElement;
    SVG_MORPHOLOGY_OPERATOR_UNKNOWN: number;
    SVG_MORPHOLOGY_OPERATOR_ERODE: number;
    SVG_MORPHOLOGY_OPERATOR_DILATE: number;
}

interface HTMLSelectElement {
    validationMessage: string;
    autofocus: bool;
    validity: ValidityState;
    required: bool;
    willValidate: bool;
    checkValidity(): bool;
    setCustomValidity(error: string): void;
}

interface CSSTransitionsProperties {
    transition: string;
    transitionDelay: string;
    transitionDuration: string;
    msTransitionTimingFunction: string;
    msTransition: string;
    msTransitionDuration: string;
    transitionTimingFunction: string;
    msTransitionDelay: string;
    transitionProperty: string;
    msTransitionProperty: string;
}

interface SVGFEFuncRElement extends SVGComponentTransferFunctionElement {
}
declare var SVGFEFuncRElement: {
    prototype: SVGFEFuncRElement;
    new(): SVGFEFuncRElement;
}

interface CSSRule {
    KEYFRAMES_RULE: number;
    KEYFRAME_RULE: number;
    VIEWPORT_RULE: number;
}
//declare var CSSRule: {
//    KEYFRAMES_RULE: number;
//    KEYFRAME_RULE: number;
//    VIEWPORT_RULE: number;
//}

interface WindowTimersExtension {
    msSetImmediate(expression: any, ...args: any[]): number;
    clearImmediate(handle: number): void;
    msClearImmediate(handle: number): void;
    setImmediate(expression: any, ...args: any[]): number;
}

interface SVGFEDisplacementMapElement extends SVGElement, SVGFilterPrimitiveStandardAttributes {
    in2: SVGAnimatedString;
    xChannelSelector: SVGAnimatedEnumeration;
    yChannelSelector: SVGAnimatedEnumeration;
    scale: SVGAnimatedNumber;
    in1: SVGAnimatedString;
    SVG_CHANNEL_B: number;
    SVG_CHANNEL_R: number;
    SVG_CHANNEL_G: number;
    SVG_CHANNEL_UNKNOWN: number;
    SVG_CHANNEL_A: number;
}
declare var SVGFEDisplacementMapElement: {
    prototype: SVGFEDisplacementMapElement;
    new(): SVGFEDisplacementMapElement;
    SVG_CHANNEL_B: number;
    SVG_CHANNEL_R: number;
    SVG_CHANNEL_G: number;
    SVG_CHANNEL_UNKNOWN: number;
    SVG_CHANNEL_A: number;
}

interface MSCSSContentZoomProperties {
    msContentZoomLimit: string;
    msContentZooming: string;
    msContentZoomSnapType: string;
    msContentZoomLimitMax: any;
    msContentZoomSnapPoints: string;
    msContentZoomSnap: string;
    msContentZoomLimitMin: any;
    msContentZoomChaining: string;
}

interface AnimationEvent extends Event {
    animationName: string;
    elapsedTime: number;
    initAnimationEvent(typeArg: string, canBubbleArg: bool, cancelableArg: bool, animationNameArg: string, elapsedTimeArg: number): void;
}
declare var AnimationEvent: {
    prototype: AnimationEvent;
    new(): AnimationEvent;
}

interface SVGComponentTransferFunctionElement extends SVGElement {
    tableValues: SVGAnimatedNumberList;
    slope: SVGAnimatedNumber;
    type: SVGAnimatedEnumeration;
    exponent: SVGAnimatedNumber;
    amplitude: SVGAnimatedNumber;
    intercept: SVGAnimatedNumber;
    offset: SVGAnimatedNumber;
    SVG_FECOMPONENTTRANSFER_TYPE_UNKNOWN: number;
    SVG_FECOMPONENTTRANSFER_TYPE_TABLE: number;
    SVG_FECOMPONENTTRANSFER_TYPE_IDENTITY: number;
    SVG_FECOMPONENTTRANSFER_TYPE_GAMMA: number;
    SVG_FECOMPONENTTRANSFER_TYPE_DISCRETE: number;
    SVG_FECOMPONENTTRANSFER_TYPE_LINEAR: number;
}
declare var SVGComponentTransferFunctionElement: {
    prototype: SVGComponentTransferFunctionElement;
    new(): SVGComponentTransferFunctionElement;
    SVG_FECOMPONENTTRANSFER_TYPE_UNKNOWN: number;
    SVG_FECOMPONENTTRANSFER_TYPE_TABLE: number;
    SVG_FECOMPONENTTRANSFER_TYPE_IDENTITY: number;
    SVG_FECOMPONENTTRANSFER_TYPE_GAMMA: number;
    SVG_FECOMPONENTTRANSFER_TYPE_DISCRETE: number;
    SVG_FECOMPONENTTRANSFER_TYPE_LINEAR: number;
}

interface MSRangeCollection {
    length: number;
    item(index: number): Range;
    [index: number]: Range;
}
declare var MSRangeCollection: {
    prototype: MSRangeCollection;
    new(): MSRangeCollection;
}

interface MSHTMLElementExtensions {
    onmscontentzoom: (ev: any) => any;
    onmsmanipulationstatechanged: (ev: any) => any;
}
declare var MSHTMLElementExtensions: {
    prototype: MSHTMLElementExtensions;
    new(): MSHTMLElementExtensions;
}

interface MSCSSPositionedFloatsProperties {
    msWrapMargin: any;
    msWrapFlow: string;
}

interface SVGException {
    name: string;
}

interface SVGFEDistantLightElement extends SVGElement {
    azimuth: SVGAnimatedNumber;
    elevation: SVGAnimatedNumber;
}
declare var SVGFEDistantLightElement: {
    prototype: SVGFEDistantLightElement;
    new(): SVGFEDistantLightElement;
}

interface MSCSSRegionProperties {
    msFlowFrom: string;
    msFlowInto: string;
    msWrapThrough: string;
}

interface SVGFEFuncBElement extends SVGComponentTransferFunctionElement {
}
declare var SVGFEFuncBElement: {
    prototype: SVGFEFuncBElement;
    new(): SVGFEFuncBElement;
}

interface IDBKeyRange {
    upper: any;
    upperOpen: bool;
    lower: any;
    lowerOpen: bool;
    bound(lower: any, upper: any, lowerOpen?: bool, upperOpen?: bool): IDBKeyRange;
    only(value: any): IDBKeyRange;
    lowerBound(bound: any, open?: bool): IDBKeyRange;
    upperBound(bound: any, open?: bool): IDBKeyRange;
}
declare var IDBKeyRange: {
    prototype: IDBKeyRange;
    new(): IDBKeyRange;
}

interface WindowConsole {
    console: Console;
}

interface SVG1_1Properties {
    floodOpacity: string;
    floodColor: string;
    filter: string;
    lightingColor: string;
    enableBackground: string;
    colorInterpolationFilters: string;
}
declare var SVG1_1Properties: {
    prototype: SVG1_1Properties;
    new(): SVG1_1Properties;
}

interface IDBTransaction extends EventTarget {
    oncomplete: (ev: Event) => any;
    db: IDBDatabase;
    mode: string;
    error: DOMError;
    onerror: (ev: ErrorEvent) => any;
    onabort: (ev: any) => any;
    abort(): void;
    objectStore(name: string): IDBObjectStore;
}
declare var IDBTransaction: {
    prototype: IDBTransaction;
    new(): IDBTransaction;
}

interface MSWindowExtensions {
    onmspointerdown: (ev: any) => any;
    onmspointercancel: (ev: any) => any;
    onmsgesturedoubletap: (ev: any) => any;
    onmsgestureend: (ev: any) => any;
    onmsgesturetap: (ev: any) => any;
    onmspointerout: (ev: any) => any;
    onmspointerhover: (ev: any) => any;
    onmsinertiastart: (ev: any) => any;
    onmspointermove: (ev: any) => any;
    onmsgesturehold: (ev: any) => any;
    onmspointerover: (ev: any) => any;
    onmsgesturechange: (ev: any) => any;
    onmsgesturestart: (ev: any) => any;
    onmspointerup: (ev: any) => any;
    msIsStaticHTML(html: string): bool;
}
declare var MSWindowExtensions: {
    prototype: MSWindowExtensions;
    new(): MSWindowExtensions;
}

interface AudioTrack {
    kind: string;
    language: string;
    id: string;
    label: string;
    enabled: bool;
}
declare var AudioTrack: {
    prototype: AudioTrack;
    new(): AudioTrack;
}

interface SVGFEConvolveMatrixElement extends SVGElement, SVGFilterPrimitiveStandardAttributes {
    orderY: SVGAnimatedInteger;
    kernelUnitLengthY: SVGAnimatedNumber;
    orderX: SVGAnimatedInteger;
    preserveAlpha: SVGAnimatedBoolean;
    kernelMatrix: SVGAnimatedNumberList;
    edgeMode: SVGAnimatedEnumeration;
    kernelUnitLengthX: SVGAnimatedNumber;
    bias: SVGAnimatedNumber;
    targetX: SVGAnimatedInteger;
    targetY: SVGAnimatedInteger;
    divisor: SVGAnimatedNumber;
    in1: SVGAnimatedString;
    SVG_EDGEMODE_WRAP: number;
    SVG_EDGEMODE_DUPLICATE: number;
    SVG_EDGEMODE_UNKNOWN: number;
    SVG_EDGEMODE_NONE: number;
}
declare var SVGFEConvolveMatrixElement: {
    prototype: SVGFEConvolveMatrixElement;
    new(): SVGFEConvolveMatrixElement;
    SVG_EDGEMODE_WRAP: number;
    SVG_EDGEMODE_DUPLICATE: number;
    SVG_EDGEMODE_UNKNOWN: number;
    SVG_EDGEMODE_NONE: number;
}

interface TextTrackCueList {
    length: number;
    item(index: number): TextTrackCue;
    [index: number]: TextTrackCue;
    getCueById(id: string): TextTrackCue;
}
declare var TextTrackCueList: {
    prototype: TextTrackCueList;
    new(): TextTrackCueList;
}

interface CSSKeyframesRule extends CSSRule {
    name: string;
    cssRules: CSSRuleList;
    findRule(rule: string): CSSKeyframeRule;
    deleteRule(rule: string): void;
    appendRule(rule: string): void;
}
declare var CSSKeyframesRule: {
    prototype: CSSKeyframesRule;
    new(): CSSKeyframesRule;
}

interface MSCSSTouchManipulationProperties {
    msScrollSnapPointsY: string;
    msOverflowStyle: string;
    msScrollLimitXMax: any;
    msScrollSnapType: string;
    msScrollSnapPointsX: string;
    msScrollLimitYMax: any;
    msScrollSnapY: string;
    msScrollLimitXMin: any;
    msScrollLimitYMin: any;
    msScrollChaining: string;
    msTouchAction: string;
    msScrollSnapX: string;
    msScrollLimit: string;
    msScrollRails: string;
    msTouchSelect: string;
}

interface Window extends WindowAnimationTiming, WindowBase64, IDBEnvironment, WindowConsole {
    onpopstate: (ev: PopStateEvent) => any;
    applicationCache: ApplicationCache;
    matchMedia(mediaQuery: string): MediaQueryList;
    msMatchMedia(mediaQuery: string): MediaQueryList;
}

interface SVGFETurbulenceElement extends SVGElement, SVGFilterPrimitiveStandardAttributes {
    baseFrequencyX: SVGAnimatedNumber;
    numOctaves: SVGAnimatedInteger;
    type: SVGAnimatedEnumeration;
    baseFrequencyY: SVGAnimatedNumber;
    stitchTiles: SVGAnimatedEnumeration;
    seed: SVGAnimatedNumber;
    SVG_STITCHTYPE_UNKNOWN: number;
    SVG_STITCHTYPE_NOSTITCH: number;
    SVG_TURBULENCE_TYPE_UNKNOWN: number;
    SVG_TURBULENCE_TYPE_TURBULENCE: number;
    SVG_TURBULENCE_TYPE_FRACTALNOISE: number;
    SVG_STITCHTYPE_STITCH: number;
}
declare var SVGFETurbulenceElement: {
    prototype: SVGFETurbulenceElement;
    new(): SVGFETurbulenceElement;
    SVG_STITCHTYPE_UNKNOWN: number;
    SVG_STITCHTYPE_NOSTITCH: number;
    SVG_TURBULENCE_TYPE_UNKNOWN: number;
    SVG_TURBULENCE_TYPE_TURBULENCE: number;
    SVG_TURBULENCE_TYPE_FRACTALNOISE: number;
    SVG_STITCHTYPE_STITCH: number;
}

interface TextTrackList {
    length: number;
    item(index: number): TextTrack;
    [index: number]: TextTrack;
}
declare var TextTrackList: {
    prototype: TextTrackList;
    new(): TextTrackList;
}

interface WindowAnimationTiming {
    animationStartTime: number;
    msAnimationStartTime: number;
    msCancelRequestAnimationFrame(handle: number): void;
    cancelAnimationFrame(handle: number): void;
    requestAnimationFrame(callback: FrameRequestCallback): number;
    msRequestAnimationFrame(callback: FrameRequestCallback): number;
}

interface SVGFEFuncGElement extends SVGComponentTransferFunctionElement {
}
declare var SVGFEFuncGElement: {
    prototype: SVGFEFuncGElement;
    new(): SVGFEFuncGElement;
}

interface SVGFEColorMatrixElement extends SVGElement, SVGFilterPrimitiveStandardAttributes {
    in1: SVGAnimatedString;
    type: SVGAnimatedEnumeration;
    values: SVGAnimatedNumberList;
    SVG_FECOLORMATRIX_TYPE_SATURATE: number;
    SVG_FECOLORMATRIX_TYPE_UNKNOWN: number;
    SVG_FECOLORMATRIX_TYPE_MATRIX: number;
    SVG_FECOLORMATRIX_TYPE_HUEROTATE: number;
    SVG_FECOLORMATRIX_TYPE_LUMINANCETOALPHA: number;
}
declare var SVGFEColorMatrixElement: {
    prototype: SVGFEColorMatrixElement;
    new(): SVGFEColorMatrixElement;
    SVG_FECOLORMATRIX_TYPE_SATURATE: number;
    SVG_FECOLORMATRIX_TYPE_UNKNOWN: number;
    SVG_FECOLORMATRIX_TYPE_MATRIX: number;
    SVG_FECOLORMATRIX_TYPE_HUEROTATE: number;
    SVG_FECOLORMATRIX_TYPE_LUMINANCETOALPHA: number;
}

interface Console {
    info(): void;
    info(message: any, ...optionalParams: any[]): void;
    profile(reportName?: string): bool;
    assert(): void;
    assert(test: bool): void;
    assert(test: bool, message: any, ...optionalParams: any[]): void;
    msIsIndependentlyComposed(element: Element): bool;
    clear(): bool;
    dir(): bool;
    dir(value: any, ...optionalParams: any[]): bool;
    warn(): void;
    warn(message: any, ...optionalParams: any[]): void;
    error(): void;
    error(message: any, ...optionalParams: any[]): void;
    log(): void;
    log(message: any, ...optionalParams: any[]): void;
    profileEnd(): bool;
}
declare var Console: {
    prototype: Console;
    new(): Console;
}

interface SVGFESpotLightElement extends SVGElement {
    pointsAtY: SVGAnimatedNumber;
    y: SVGAnimatedNumber;
    limitingConeAngle: SVGAnimatedNumber;
    specularExponent: SVGAnimatedNumber;
    x: SVGAnimatedNumber;
    pointsAtZ: SVGAnimatedNumber;
    z: SVGAnimatedNumber;
    pointsAtX: SVGAnimatedNumber;
}
declare var SVGFESpotLightElement: {
    prototype: SVGFESpotLightElement;
    new(): SVGFESpotLightElement;
}

interface DocumentVisibility {
    msHidden: bool;
    msVisibilityState: string;
    visibilityState: string;
    hidden: bool;
}

interface WindowBase64 {
    btoa(rawString: string): string;
    atob(encodedString: string): string;
}

interface IDBDatabase extends EventTarget {
    version: string;
    name: string;
    objectStoreNames: DOMStringList;
    onerror: (ev: ErrorEvent) => any;
    onabort: (ev: any) => any;
    createObjectStore(name: string, optionalParameters?: any): IDBObjectStore;
    close(): void;
    transaction(storeNames: any, mode?: string): IDBTransaction;
    deleteObjectStore(name: string): void;
}
declare var IDBDatabase: {
    prototype: IDBDatabase;
    new(): IDBDatabase;
}

interface MSProtocolsCollection {
}
declare var MSProtocolsCollection: {
    prototype: MSProtocolsCollection;
    new(): MSProtocolsCollection;
}

interface DOMStringList {
    length: number;
    contains(str: string): bool;
    item(index: number): string;
    [index: number]: string;
}
declare var DOMStringList: {
    prototype: DOMStringList;
    new(): DOMStringList;
}

interface CSSMultiColumnProperties {
    breakAfter: string;
    columnSpan: string;
    columnRule: string;
    columnFill: string;
    columnRuleStyle: string;
    breakBefore: string;
    columnCount: any;
    breakInside: string;
    columnWidth: any;
    columns: string;
    columnRuleColor: any;
    columnGap: any;
    columnRuleWidth: any;
}

interface IDBOpenDBRequest extends IDBRequest {
    onupgradeneeded: (ev: IDBVersionChangeEvent) => any;
    onblocked: (ev: Event) => any;
}
declare var IDBOpenDBRequest: {
    prototype: IDBOpenDBRequest;
    new(): IDBOpenDBRequest;
}

interface HTMLButtonElement {
    validationMessage: string;
    formTarget: string;
    willValidate: bool;
    formAction: string;
    autofocus: bool;
    validity: ValidityState;
    formNoValidate: string;
    formEnctype: string;
    formMethod: string;
    checkValidity(): bool;
    setCustomValidity(error: string): void;
}

interface HTMLProgressElement extends HTMLElement {
    value: number;
    max: number;
    position: number;
    form: HTMLFormElement;
}
declare var HTMLProgressElement: {
    prototype: HTMLProgressElement;
    new(): HTMLProgressElement;
}

interface SVGFEOffsetElement extends SVGElement, SVGFilterPrimitiveStandardAttributes {
    dy: SVGAnimatedNumber;
    in1: SVGAnimatedString;
    dx: SVGAnimatedNumber;
}
declare var SVGFEOffsetElement: {
    prototype: SVGFEOffsetElement;
    new(): SVGFEOffsetElement;
}

interface HTMLFormElement {
    autocomplete: string;
    noValidate: bool;
    checkValidity(): bool;
}

interface MSUnsafeFunctionCallback {
    (): any;
}

interface Document extends DocumentVisibility {
}

interface MessageEvent extends Event {
    ports: any;
}

interface HTMLScriptElement {
    async: bool;
}

interface HTMLMediaElement extends MSHTMLMediaElementExtensions {
    textTracks: TextTrackList;
    audioTracks: AudioTrackList;
}

interface TextTrack extends EventTarget {
    language: string;
    mode: number;
    readyState: string;
    activeCues: TextTrackCueList;
    cues: TextTrackCueList;
    oncuechange: (ev: Event) => any;
    kind: string;
    onload: (ev: any) => any;
    onerror: (ev: ErrorEvent) => any;
    label: string;
    ERROR: number;
    SHOWING: number;
    LOADING: number;
    LOADED: number;
    NONE: number;
    HIDDEN: number;
    DISABLED: number;
}
declare var TextTrack: {
    prototype: TextTrack;
    new(): TextTrack;
    ERROR: number;
    SHOWING: number;
    LOADING: number;
    LOADED: number;
    NONE: number;
    HIDDEN: number;
    DISABLED: number;
}

interface MediaQueryListListener {
    (mql: MediaQueryList): void;
}

interface IDBRequest extends EventTarget {
    source: any;
    onsuccess: (ev: Event) => any;
    error: DOMError;
    transaction: IDBTransaction;
    onerror: (ev: ErrorEvent) => any;
    readyState: string;
    result: any;
}
declare var IDBRequest: {
    prototype: IDBRequest;
    new(): IDBRequest;
}

interface MessagePort extends EventTarget {
    onmessage: (ev: any) => any;
    close(): void;
    postMessage(message: any, ports?: any): void;
    start(): void;
}
declare var MessagePort: {
    prototype: MessagePort;
    new(): MessagePort;
}

interface FileReader extends MSBaseReader {
    error: DOMError;
    readAsArrayBuffer(blob: Blob): void;
    readAsDataURL(blob: Blob): void;
    readAsText(blob: Blob, encoding?: string): void;
}
declare var FileReader: {
    prototype: FileReader;
    new (): FileReader;
}

interface Blob {
    type: string;
    size: number;
    msDetachStream(): any;
    slice(start?: number, end?: number, contentType?: string): Blob;
    close(): void;
    msClose(): void;
}
interface BlobPropertyBag {
    /** Corresponds to the 'type' property of the Blob object */
    type?: string;
    /** Either 'transparent' or 'native' */
    endings?: string;
}
declare var Blob: {
    prototype: Blob;
    new (blobParts?: any[], options?: BlobPropertyBag): Blob;
}

interface ApplicationCache extends EventTarget {
    status: number;
    ondownloading: (ev: Event) => any;
    onprogress: (ev: ProgressEvent) => any;
    onupdateready: (ev: Event) => any;
    oncached: (ev: Event) => any;
    onobsolete: (ev: Event) => any;
    onerror: (ev: ErrorEvent) => any;
    onchecking: (ev: Event) => any;
    onnoupdate: (ev: Event) => any;
    swapCache(): void;
    abort(): void;
    update(): void;
    CHECKING: number;
    UNCACHED: number;
    UPDATEREADY: number;
    DOWNLOADING: number;
    IDLE: number;
    OBSOLETE: number;
}
declare var ApplicationCache: {
    prototype: ApplicationCache;
    new(): ApplicationCache;
    CHECKING: number;
    UNCACHED: number;
    UPDATEREADY: number;
    DOWNLOADING: number;
    IDLE: number;
    OBSOLETE: number;
}

interface MSHTMLVideoElementExtensions {
    msIsStereo3D: bool;
    msStereo3DPackingMode: string;
    onMSVideoOptimalLayoutChanged: (ev: any) => any;
    onMSVideoFrameStepCompleted: (ev: any) => any;
    msStereo3DRenderMode: string;
    msIsLayoutOptimalForPlayback: bool;
    msHorizontalMirror: bool;
    onMSVideoFormatChanged: (ev: any) => any;
    msZoom: bool;
    msInsertVideoEffect(activatableClassId: string, effectRequired: bool, config?: any): void;
    msSetVideoRectangle(left: number, top: number, right: number, bottom: number): void;
    msFrameStep(forward: bool): void;
}

interface FrameRequestCallback {
    (time: number): void;
}

interface CSS3DTransformsProperties {
    perspective: string;
    msBackfaceVisibility: string;
    perspectiveOrigin: string;
    transformStyle: string;
    backfaceVisibility: string;
    msPerspectiveOrigin: string;
    msTransformStyle: string;
    msPerspective: string;
}

interface XMLHttpRequest {
    withCredentials: bool;
}

interface PopStateEvent extends Event {
    state: any;
    initPopStateEvent(typeArg: string, canBubbleArg: bool, cancelableArg: bool, stateArg: any): void;
}
declare var PopStateEvent: {
    prototype: PopStateEvent;
    new(): PopStateEvent;
}

interface CSSKeyframeRule extends CSSRule {
    keyText: string;
    style: CSSStyleDeclaration;
}
declare var CSSKeyframeRule: {
    prototype: CSSKeyframeRule;
    new(): CSSKeyframeRule;
}

interface CSSGridProperties {
    msGridRows: string;
    msGridColumnSpan: any;
    msGridRow: any;
    msGridRowSpan: any;
    msGridColumns: string;
    msGridColumnAlign: string;
    msGridRowAlign: string;
    msGridColumn: any;
}

interface MSFileSaver {
    msSaveBlob(blob: any, defaultName?: string): bool;
    msSaveOrOpenBlob(blob: any, defaultName?: string): bool;
}

interface MSStream {
    type: string;
    msDetachStream(): any;
    msClose(): void;
}
declare var MSStream: {
    prototype: MSStream;
    new(): MSStream;
}

interface MediaError extends MSMediaErrorExtensions {
}

interface HTMLFieldSetElement {
    validationMessage: string;
    validity: ValidityState;
    willValidate: bool;
    checkValidity(): bool;
    setCustomValidity(error: string): void;
}

interface MSBlobBuilder {
    append(data: any, endings?: string): void;
    getBlob(contentType?: string): Blob;
}
declare var MSBlobBuilder: {
    prototype: MSBlobBuilder;
    new (): MSBlobBuilder;
}

interface MSRangeExtensions {
    createContextualFragment(fragment: string): DocumentFragment;
}

interface HTMLElement {
    oncuechange: (ev: Event) => any;
    spellcheck: bool;
    classList: DOMTokenList;
    draggable: bool;
}

interface DataTransfer {
    types: DOMStringList;
    files: FileList;
}

interface DOMSettableTokenList extends DOMTokenList {
    value: string;
}
declare var DOMSettableTokenList: {
    prototype: DOMSettableTokenList;
    new(): DOMSettableTokenList;
}

interface IDBFactory {
    open(name: string, version?: number): IDBOpenDBRequest;
    cmp(first: any, second: any): number;
    deleteDatabase(name: string): IDBOpenDBRequest;
}
declare var IDBFactory: {
    prototype: IDBFactory;
    new(): IDBFactory;
}

interface Range extends MSRangeExtensions {
}

interface HTMLObjectElement {
    validationMessage: string;
    validity: ValidityState;
    willValidate: bool;
    checkValidity(): bool;
    setCustomValidity(error: string): void;
}

interface MSPointerEvent extends MouseEvent {
    width: number;
    rotation: number;
    pressure: number;
    pointerType: number;
    isPrimary: bool;
    tiltY: number;
    height: number;
    intermediatePoints: any;
    currentPoint: any;
    tiltX: number;
    hwTimestamp: number;
    pointerId: number;
    initPointerEvent(typeArg: string, canBubbleArg: bool, cancelableArg: bool, viewArg: AbstractView, detailArg: number, screenXArg: number, screenYArg: number, clientXArg: number, clientYArg: number, ctrlKeyArg: bool, altKeyArg: bool, shiftKeyArg: bool, metaKeyArg: bool, buttonArg: number, relatedTargetArg: EventTarget, offsetXArg: number, offsetYArg: number, widthArg: number, heightArg: number, pressure: number, rotation: number, tiltX: number, tiltY: number, pointerIdArg: number, pointerType: number, hwTimestampArg: number, isPrimary: bool): void;
    getCurrentPoint(element: Element): void;
    getIntermediatePoints(element: Element): void;
    MSPOINTER_TYPE_PEN: number;
    MSPOINTER_TYPE_MOUSE: number;
    MSPOINTER_TYPE_TOUCH: number;
}
declare var MSPointerEvent: {
    prototype: MSPointerEvent;
    new(): MSPointerEvent;
    MSPOINTER_TYPE_PEN: number;
    MSPOINTER_TYPE_MOUSE: number;
    MSPOINTER_TYPE_TOUCH: number;
}

interface CSSTextProperties {
    textShadow: string;
    msHyphenateLimitLines: any;
    msHyphens: string;
    msHyphenateLimitChars: string;
    msHyphenateLimitZone: any;
}

interface CSS2DTransformsProperties {
    transform: string;
    transformOrigin: string;
}

interface DOMException {
    name: string;
    INVALID_NODE_TYPE_ERR: number;
    DATA_CLONE_ERR: number;
    TIMEOUT_ERR: number;
}
//declare var DOMException: {
//    INVALID_NODE_TYPE_ERR: number;
//    DATA_CLONE_ERR: number;
//    TIMEOUT_ERR: number;
//}

interface MSCSSHighContrastProperties {
    msHighContrastAdjust: string;
}

interface MSManipulationEvent extends UIEvent {
    lastState: number;
    currentState: number;
    initMSManipulationEvent(typeArg: string, canBubbleArg: bool, cancelableArg: bool, viewArg: AbstractView, detailArg: number, lastState: number, currentState: number): void;
    MS_MANIPULATION_STATE_STOPPED: number;
    MS_MANIPULATION_STATE_ACTIVE: number;
    MS_MANIPULATION_STATE_INERTIA: number;
}
declare var MSManipulationEvent: {
    prototype: MSManipulationEvent;
    new(): MSManipulationEvent;
    MS_MANIPULATION_STATE_STOPPED: number;
    MS_MANIPULATION_STATE_ACTIVE: number;
    MS_MANIPULATION_STATE_INERTIA: number;
}

interface FormData {
    append(name: any, value: any, blobName?: string): void;
}
declare var FormData: {
    prototype: FormData;
    new (): FormData;
    new (form: HTMLFormElement): FormData;
}

interface MSHTMLImageElementExtensions {
    msPlayToPrimary: bool;
    msPlayToDisabled: bool;
    msPlayToSource: any;
}
declare var MSHTMLImageElementExtensions: {
    prototype: MSHTMLImageElementExtensions;
    new(): MSHTMLImageElementExtensions;
}

interface MSHTMLMediaElementExtensions {
    msAudioCategory: string;
    msRealTime: bool;
    msPlayToPrimary: bool;
    msPlayToDisabled: bool;
    msPlayToSource: any;
    msAudioDeviceType: string;
    msClearEffects(): void;
    msSetMediaProtectionManager(mediaProtectionManager?: any): void;
    msInsertAudioEffect(activatableClassId: string, effectRequired: bool, config?: any): void;
}

interface SVGFEImageElement extends SVGElement, SVGLangSpace, SVGFilterPrimitiveStandardAttributes, SVGURIReference {
    preserveAspectRatio: SVGAnimatedPreserveAspectRatio;
}
declare var SVGFEImageElement: {
    prototype: SVGFEImageElement;
    new(): SVGFEImageElement;
}

interface HTMLDataListElement extends HTMLElement {
    options: HTMLCollection;
}
declare var HTMLDataListElement: {
    prototype: HTMLDataListElement;
    new(): HTMLDataListElement;
}

interface AbstractWorker extends EventTarget {
    onerror: (ev: ErrorEvent) => any;
}

interface SVGFECompositeElement extends SVGElement, SVGFilterPrimitiveStandardAttributes {
    operator: SVGAnimatedEnumeration;
    in2: SVGAnimatedString;
    k2: SVGAnimatedNumber;
    k1: SVGAnimatedNumber;
    k3: SVGAnimatedNumber;
    in1: SVGAnimatedString;
    k4: SVGAnimatedNumber;
    SVG_FECOMPOSITE_OPERATOR_OUT: number;
    SVG_FECOMPOSITE_OPERATOR_OVER: number;
    SVG_FECOMPOSITE_OPERATOR_XOR: number;
    SVG_FECOMPOSITE_OPERATOR_ARITHMETIC: number;
    SVG_FECOMPOSITE_OPERATOR_UNKNOWN: number;
    SVG_FECOMPOSITE_OPERATOR_IN: number;
    SVG_FECOMPOSITE_OPERATOR_ATOP: number;
}
declare var SVGFECompositeElement: {
    prototype: SVGFECompositeElement;
    new(): SVGFECompositeElement;
    SVG_FECOMPOSITE_OPERATOR_OUT: number;
    SVG_FECOMPOSITE_OPERATOR_OVER: number;
    SVG_FECOMPOSITE_OPERATOR_XOR: number;
    SVG_FECOMPOSITE_OPERATOR_ARITHMETIC: number;
    SVG_FECOMPOSITE_OPERATOR_UNKNOWN: number;
    SVG_FECOMPOSITE_OPERATOR_IN: number;
    SVG_FECOMPOSITE_OPERATOR_ATOP: number;
}

interface ValidityState {
    customError: bool;
    valueMissing: bool;
    stepMismatch: bool;
    rangeUnderflow: bool;
    rangeOverflow: bool;
    typeMismatch: bool;
    patternMismatch: bool;
    tooLong: bool;
    valid: bool;
}
declare var ValidityState: {
    prototype: ValidityState;
    new(): ValidityState;
}

interface HTMLVideoElement extends MSHTMLVideoElementExtensions {
}

interface HTMLTrackElement extends HTMLElement {
    kind: string;
    src: string;
    srclang: string;
    track: TextTrack;
    label: string;
    defaul: bool;
}
declare var HTMLTrackElement: {
    prototype: HTMLTrackElement;
    new(): HTMLTrackElement;
}

interface MSApp {
    createFileFromStorageFile(storageFile: any): File;
    createBlobFromRandomAccessStream(type: string, seeker: any): Blob;
    createStreamFromInputStream(type: string, inputStream: any): MSStream;
    terminateApp(exceptionObject: any): void;
    createDataPackage(object: any): any;
    execUnsafeLocalFunction(unsafeFunction: MSUnsafeFunctionCallback): any;
    getHtmlPrintDocumentSource(htmlDoc: any, printTemplate?: string): any;
    addPublicLocalApplicationUri(uri: string): void;
    createDataPackageFromSelection(): any;
}
declare var MSApp: MSApp;

interface MSXMLHttpRequestExtensions {
    response: any;
    onprogress: (ev: ProgressEvent) => any;
    onabort: (ev: any) => any;
    responseType: string;
    onloadend: (ev: ProgressEvent) => any;
    upload: XMLHttpRequestEventTarget;
    onerror: (ev: ErrorEvent) => any;
    onloadstart: (ev: any) => any;
}
declare var MSXMLHttpRequestExtensions: {
    prototype: MSXMLHttpRequestExtensions;
    new(): MSXMLHttpRequestExtensions;
}

interface SVGFEDiffuseLightingElement extends SVGElement, SVGFilterPrimitiveStandardAttributes {
    kernelUnitLengthY: SVGAnimatedNumber;
    surfaceScale: SVGAnimatedNumber;
    in1: SVGAnimatedString;
    kernelUnitLengthX: SVGAnimatedNumber;
    diffuseConstant: SVGAnimatedNumber;
}
declare var SVGFEDiffuseLightingElement: {
    prototype: SVGFEDiffuseLightingElement;
    new(): SVGFEDiffuseLightingElement;
}

interface SVGFEComponentTransferElement extends SVGElement, SVGFilterPrimitiveStandardAttributes {
    in1: SVGAnimatedString;
}
declare var SVGFEComponentTransferElement: {
    prototype: SVGFEComponentTransferElement;
    new(): SVGFEComponentTransferElement;
}

interface MSCSSMatrix {
    m24: number;
    m34: number;
    a: number;
    d: number;
    m32: number;
    m41: number;
    m11: number;
    f: number;
    e: number;
    m23: number;
    m14: number;
    m33: number;
    m22: number;
    m21: number;
    c: number;
    m12: number;
    b: number;
    m42: number;
    m31: number;
    m43: number;
    m13: number;
    m44: number;
    multiply(secondMatrix: MSCSSMatrix): MSCSSMatrix;
    skewY(angle: number): MSCSSMatrix;
    setMatrixValue(value: string): void;
    inverse(): MSCSSMatrix;
    rotateAxisAngle(x: number, y: number, z: number, angle: number): MSCSSMatrix;
    toString(): string;
    rotate(angleX: number, angleY?: number, angleZ?: number): MSCSSMatrix;
    translate(x: number, y: number, z?: number): MSCSSMatrix;
    scale(scaleX: number, scaleY?: number, scaleZ?: number): MSCSSMatrix;
    skewX(angle: number): MSCSSMatrix;
}
declare var MSCSSMatrix: {
    prototype: MSCSSMatrix;
    new (text?: string): MSCSSMatrix;
}

interface Worker extends AbstractWorker {
    onmessage: (ev: any) => any;
    postMessage(message: any, ports?: any): void;
    terminate(): void;
}
declare var Worker: {
    prototype: Worker;
    new (stringUrl: string): Worker;
}

interface HTMLIFrameElement {
    sandbox: DOMSettableTokenList;
}

interface MSMediaErrorExtensions {
    msExtendedCode: number;
}

interface MSNavigatorAbilities {
    msProtocols: MSProtocolsCollection;
    msMaxTouchPoints: number;
    msPointerEnabled: bool;
    msManipulationViewsEnabled: bool;
}
declare var MSNavigatorAbilities: {
    prototype: MSNavigatorAbilities;
    new(): MSNavigatorAbilities;
}

declare var onpopstate: (ev: PopStateEvent) => any;
declare var applicationCache: ApplicationCache;
declare function matchMedia(mediaQuery: string): MediaQueryList;
declare function msMatchMedia(mediaQuery: string): MediaQueryList;
declare var animationStartTime: number;
declare var msAnimationStartTime: number;
declare function msCancelRequestAnimationFrame(handle: number): void;
declare function cancelAnimationFrame(handle: number): void;
declare function requestAnimationFrame(callback: FrameRequestCallback): number;
declare function msRequestAnimationFrame(callback: FrameRequestCallback): number;
declare function btoa(rawString: string): string;
declare function atob(encodedString: string): string;
declare var msIndexedDB: IDBFactory;
declare var indexedDB: IDBFactory;
declare var console: Console;


/////////////////////////////
/// WorkerGlobalScope APIs 
/////////////////////////////
// TODO: These are only available in a Web Worker - should be in a seperate lib file
declare function importScripts(...urls: string[]): void;


/////////////////////////////
/// Windows Script Host APIS
/////////////////////////////
declare var ActiveXObject: { new (s: string): any; };

interface ITextWriter {
    Write(s: string): void;
    WriteLine(s: string): void;
    Close(): void;
}

declare var WScript : {
    Echo(s);
    StdErr: ITextWriter;
    StdOut: ITextWriter;
    Arguments: { length: number; Item(n: number): string; };
    ScriptFullName: string;
    Quit(exitCode?: number);
}

