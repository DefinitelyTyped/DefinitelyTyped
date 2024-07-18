export interface Distribution {
    sample(): number[];
    getMean(): readonly number[];
    setMean(newMean: readonly number[]): Distribution;
    getCov(): ReadonlyArray<readonly number[]>;
    setCov(newCov: ReadonlyArray<readonly number[]>): Distribution;
}

export default function MultivariateNormal(
    mean: readonly number[],
    cov: ReadonlyArray<readonly number[]>,
): Distribution;
