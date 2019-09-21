// Type definitions for multivariate-normal 0.1
// Project: https://github.com/tulip/multivariate-normal-js#readme
// Definitions by: Ben Weissmann <https://github.com/benweissmann>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

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
