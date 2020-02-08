// Type definitions for gray-percentage 2.0
// Project: https://github.com/KyleAMathews/gray-percentage
// Definitions by: Luis Rodrigues <https://github.com/goblindegook>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export = grayPercentage;

declare function grayPercentage(
    lightness: number,
    hue?: number | 'cool' | 'slate' | 'warm',
    darkBackground?: boolean,
): string;
