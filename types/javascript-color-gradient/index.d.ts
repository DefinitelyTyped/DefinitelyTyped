export = Gradient;

declare class Gradient {
    constructor(gradients?: string, maxNum?: number, colors?: string[], intervals?: any[]);
    getColor(index: number): string;
    getColors(): string[];
    setColorGradient(...args: string[]): Gradient;
    setMidpoint(maxNumber: number): this;
}
