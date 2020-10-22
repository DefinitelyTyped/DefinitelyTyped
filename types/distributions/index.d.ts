// Type definitions for distributions 2.0
// Project: https://github.com/AndreasMadsen/distributions
// Definitions by: Marco Lanaro <https://github.com/marcolanaro>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export function Normal(mean?: number, sd?: number): Distribution;
export function Studentt(df: number): Distribution;
export function Uniform(a?: number, b?: number): Distribution;
export function Binomial(properbility: number, size: number): Distribution;

export interface Distribution {
    pdf: (x: number) => number;
    cdf: (x: number) => number;
    inv: (p: number) => number;
    mean: () => number;
    median: () => number;
    variance: () => number;
}
