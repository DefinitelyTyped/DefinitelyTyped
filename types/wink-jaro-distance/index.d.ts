// Type definitions for wink-jaro-distance 2.0
// Project: https://github.com/winkjs/wink-jaro-distance
// Definitions by: Warren Edwards <https://github.com/Wazbat>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare function jaro(a: string, b: string): {
    similarity: number;
    distance: number;
};
export = jaro;
