// Type definitions for Microsoft.Maps 8.0 (Change set e6d7cc4)
// Project: https://github.com/Microsoft/Bing-Maps-V8-TypeScript-Definitions
// Definitions by: Ricky Brundritt <https://github.com/rbrundritt>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

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