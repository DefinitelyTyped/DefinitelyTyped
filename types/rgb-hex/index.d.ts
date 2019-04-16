// Type definitions for rgb-hex 2.1
// Project: https://github.com/sindresorhus/rgb-hex#readme
// Definitions by: BendingBender <https://github.com/BendingBender>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export = rgbHex;

declare function rgbHex(rgba: string): string;
declare function rgbHex(red: number, green: number, blue: number, alpha?: string | number): string;
