export = modularscale;

declare function modularscale(value: number, ratio?: number | modularscale.RatioLiteral): number;

declare namespace modularscale {
    type RatioLiteral =
        | "minor second"
        | "major second"
        | "minor third"
        | "major third"
        | "augmented fourth"
        | "perfect fifth"
        | "minor sixth"
        | "golden"
        | "phi"
        | "major sixth"
        | "minor seventh"
        | "major seventh"
        | "octave"
        | "major tenth"
        | "major eleventh"
        | "major twelfth"
        | "double octave";
}
