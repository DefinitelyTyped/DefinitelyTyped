// Type definitions for javascript-color-gradient 2.4
// Project: https://github.com/Adrinlol/javascript-color-gradient
// Definitions by: Wilson Chua <https://github.com/wilsoncwc/>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export = Gradient;

declare class Gradient {
    constructor(gradients?: string, maxNum?: number, colors?: string[], intervals?: any[]);
    getColor(index: number): string;
    getColors(): string[];
    setColorGradient(...args: string[]): Gradient;
    setMidpoint(maxNumber: number): this;
}
