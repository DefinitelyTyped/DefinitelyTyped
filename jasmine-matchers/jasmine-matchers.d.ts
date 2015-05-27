// Type definitions for jasmine-matchers v0.2.1
// Project: https://github.com/uxebu/jasmine-matchers
// Definitions by: Bart van der Schoor <https://github.com/Bartvds>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/*
Typings 2013 Bart van der Schoor

TypeScript tests auto-extracted from jasmine-matchers unit test.

Original jasmine-matchers license applies:

Copyright (C) 2013, uxebu Inc.

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

/// <reference path="../jasmine/jasmine.d.ts" />

declare module jasmine {
    interface Matchers {

        //toBe
        toBeArray(): boolean;
        toBeCloseToOneOf(values: any[], isCloseToFunction: (actual: number, expected: number) => boolean): boolean;
        toBeInstanceOf(Constructor: Function): boolean;
        toBeInRange(min: number, max: number): boolean;
        toBeNan(): boolean;
        toBeNumber(): boolean;
        toBeOfType(type: string): boolean;
        toBeOneOf(values: any[]): boolean;

        //toContain
        toContainOnce(value: any): boolean;

        //toHave
        toHaveBeenCalledXTimes(count:number): boolean;
        toHaveLength(length:number): boolean;
        toHaveOwnProperties(...names:string[]): boolean;
        toHaveOwnPropertiesWithValues(obj:Object): boolean;
        toHaveProperties(...names:string[]): boolean;
        toHavePropertiesWithValues(obj:Object): boolean;
        toExactlyHaveProperties(...names:string[]): boolean;

        //toStartEndWith
        toStartWith(value:any): boolean;
        toStartWith(value:any[]): boolean;

        toEndWith(value:any): boolean;
        toEndWith(values:any[]): boolean;

        toEachStartWith(searchString:string): boolean;
        toSomeStartWith(searchString:string): boolean;

        toEachEndWith(searchString:string): boolean;
        toSomeEndWith(searchString:string): boolean;

        toStartWithEither(...searchString:any[]): boolean;

        //toThrow
        toThrowInstanceOf(klass:Function): boolean;
        toThrowStartsWith(text:string): boolean;
    }
}

