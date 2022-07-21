// Type definitions for wink-jaro-distance 2.0.0
// Project: https://github.com/winkjs/wink-jaro-distance (Does not have to be to GitHub, but prefer linking to a source code repository rather than to a project website.)
// Definitions by: Warren Edwards <https://github.com/Wazbat>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export default function jaro(a: string, b: string): {
    similarity: number;
    distance: number;
};