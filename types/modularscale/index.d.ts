// Type definitions for modularscale 2.0
// Project: https://github.com/KyleAMathews/modularscale
// Definitions by: Cyril CHAPON <https://github.com/cyrilchapon>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export type RatioLiteral =
    | 'minor second'
    | 'major second'
    | 'minor third'
    | 'major third'
    | 'augmented fourth'
    | 'perfect fifth'
    | 'minor sixth'
    | 'golden'
    | 'phi'
    | 'major sixth'
    | 'minor seventh'
    | 'major seventh'
    | 'octave'
    | 'major tenth'
    | 'major eleventh'
    | 'major twelfth'
    | 'double octave';

export default function modularscale(value: number, ratio?: number | RatioLiteral): number;
