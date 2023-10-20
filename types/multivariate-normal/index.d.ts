export interface Distribution {
    sample(): number[];
    getMean(): ReadonlyArray<number>;
    setMean(newMean: ReadonlyArray<number>): Distribution;
    getCov(): ReadonlyArray<ReadonlyArray<number>>;
    setCov(newCov: ReadonlyArray<ReadonlyArray<number>>): Distribution;
}

export default function MultivariateNormal(
    mean: ReadonlyArray<number>,
    cov: ReadonlyArray<ReadonlyArray<number>>,
): Distribution;
