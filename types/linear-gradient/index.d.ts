// Type definitions for linear-gradient 1.0
// Project: https://github.com/karmadata/linear-gradient#readme
// Definitions by: Jack Works <https://github.com/Jack-Works>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

type Color = [number, number, number];
declare class Gradient {
    constructor(colors: Color[]);
    /**
     * the input value should be normalized to the range between 0 and 1
     */
    calcArray(normalizedPercent: number): Color;
    /**
     * the input value should be normalized to the range between 0 and 1
     */
    calcHex(normalizedPrecent: number): string;
}
export = Gradient;
