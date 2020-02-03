// Type definitions for shevyjs 1.1
// Project: https://github.com/kyleshevlin/shevyjs#readme
// Definitions by: nonAlgebraic <https://github.com/nonAlgebraic>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

import { getFontUnit, getFontScale } from './utils';
import { Options, RhythmProperties, Factor } from './types';

export default class Shevy {
    constructor(options?: Partial<Options>);

    baseFontSize: Options['baseFontSize'];
    baseFontUnit: ReturnType<typeof getFontUnit>;
    baseLineHeight: Options['baseLineHeight'];
    baseFontScale: ReturnType<typeof getFontScale>;
    addMarginBottom: Options['addMarginBottom'];
    proximity: Options['proximity'];
    proximityFactor: Options['proximityFactor'];

    h1: RhythmProperties;
    h2: RhythmProperties;
    h3: RhythmProperties;
    h4: RhythmProperties;
    h5: RhythmProperties;
    h6: RhythmProperties;

    body: Pick<RhythmProperties, Exclude<keyof RhythmProperties, 'marginBottom'>>;

    content: RhythmProperties;

    lineHeightSpacing(factor?: Factor): string;

    baseSpacing(factor?: Factor): string;
}

/*~ If this module has methods, declare them as functions like so.
 */
export function myMethod(a: string): string;
export function myOtherMethod(a: number): number;

/*~ You can declare types that are available via importing the module */
export interface someType {
    name: string;
    length: number;
    extras?: string[];
}

/*~ You can declare properties of the module using const, let, or var */
export const myField: number;

/*~ If there are types, properties, or methods inside dotted names
 *~ of the module, declare them inside a 'namespace'.
 */
export namespace subProp {
    /*~ For example, given this definition, someone could write:
     *~   import { subProp } from 'yourModule';
     *~   subProp.foo();
     *~ or
     *~   import * as yourMod from 'yourModule';
     *~   yourMod.subProp.foo();
     */
    function foo(): void;
}
