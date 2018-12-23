// Type definitions for park-miller 1.0
// Project: https://github.com/sindresorhus/park-miller#readme
// Definitions by: BendingBender <https://github.com/BendingBender>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export = ParkMiller;

declare class ParkMiller {
    constructor(seed: number);

    integer(): number;
    integerInRange(min: number, max: number): number;
    float(): number;
    floatInRange(min: number, max: number): number;
    boolean(): boolean;
}
