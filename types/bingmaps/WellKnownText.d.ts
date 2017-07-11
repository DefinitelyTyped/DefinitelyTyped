/*
 * Copyright(c) 2017 Microsoft Corporation. All rights reserved. 
 * 
 * This code is licensed under the MIT License (MIT). 
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal 
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies
 * of the Software, and to permit persons to whom the Software is furnished to do 
 * so, subject to the following conditions: 
 * 
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software. 
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, 
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, 
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE. 
*/

/// <reference path="../Microsoft.Maps.d.ts"/>

declare module Microsoft.Maps {
    /**
     * Class responsible for readon/writing geo data in well known text format
     * @requires The Microsoft.Maps.WellKnownText module.
     */
    export module WellKnownText {
        /**
         * Reads the data in wellknowntext format and returns the shapes. Multi-Geometry type shapes are returned as an array of shapes.
         * @param wkt The well known text string that needs to be parsed into shapes.
         * @param styles Styles to apply to the shapes.
         * @returns One of more shapes.
         */
        export function read(wkt: string, styles?: IStylesOptions): IPrimitive | IPrimitive[];

        /**
         * Writes the data into wellknowntext format.
         * @param data The data that needs to be serialized.
         * @returns Well known text formatted string.
         */
        export function write(data: IPrimitive | IPrimitive[]): string;
    }
}