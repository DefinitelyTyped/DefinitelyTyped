// Type definitions for randoma 1.2
// Project: https://github.com/sindresorhus/randoma#readme
// Definitions by: BendingBender <https://github.com/BendingBender>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

import Color = require('color');

export = Randoma;

declare class Randoma {
    static seed(): number;

    constructor(options: Randoma.Options);

    integer(): number;
    integerInRange(min: number, max: number): number;
    float(): number;
    floatInRange(min: number, max: number): number;
    boolean(): boolean;
    arrayItem<T>(array: T[]): T;
    date(): Date;
    dateInRange(startDate: Date, endDate: Date): Date;
    color(saturation?: number): Color;
}

declare namespace Randoma {
    interface Options {
        seed: string | number;
    }
}
