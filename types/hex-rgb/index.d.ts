// Type definitions for hex-rgb 3.0
// Project: https://github.com/sindresorhus/hex-rgb#readme
// Definitions by: BendingBender <https://github.com/BendingBender>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export = hexRgb;

declare function hexRgb(hex: string): hexRgb.RgbaObj;
declare function hexRgb(hex: string, options: hexRgb.Options): hexRgb.RgbaArr;

declare namespace hexRgb {
    interface Options {
        format: 'array';
    }

    interface RgbaObj {
        red: number;
        green: number;
        blue: number;
        alpha: number;
    }

    type RgbaArr = [number, number, number, number];
}
