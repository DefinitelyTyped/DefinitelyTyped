// Type definitions for colorthief 2.3
// Project: https://github.com/lokesh/color-thief
// Definitions by: ibrahim <https://github.com/ibrahim-13>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare function getColor(img: string, quality?: number): Promise<number[]>;

declare function getPalette(img: string, colorCount?: number, quality?: number): Promise<number[][]>;

export {
  getColor,
  getPalette,
};
