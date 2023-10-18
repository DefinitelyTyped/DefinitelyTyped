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
