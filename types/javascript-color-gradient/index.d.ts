// Type definitions for javascript-color-gradient 1.3
// Project: https://github.com/Adrinlol/javascript-color-gradient
// Definitions by: Wilson Chua <https://github.com/wilsoncwc/>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export = Gradient;

declare class Gradient {
    constructor(gradients?: string, maxNum?: number, colors?: string[], intervals?: any[]);
    setGradient(...args: string[]): Gradient;
    getArray(): string[];
    getColor(index: number): string;
    setMidpoint(maxNumber: number): this;
}
