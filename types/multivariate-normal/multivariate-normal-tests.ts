import MultivariateNormal from 'multivariate-normal';

const dist = MultivariateNormal([1, 2, 3], [[0, 0, 1], [0, 1, 0], [1, 0, 0]]);

const newDist = dist
  .setMean([4, 5, 6])
  .setCov([[0, 0, 1], [0, 1, 0], [1, 0, 0]]);

const newMean: ReadonlyArray<number> = newDist.getMean();
const newCov: ReadonlyArray<ReadonlyArray<number>> = newDist.getCov();

// Mean and covariance are immutable

// $ExpectError
newDist.getMean()[0] = 10;

// $ExpectError
newDist.getCov()[0] = [1, 2, 3];

// $ExpectError
newDist.getCov()[0][0] = 10;

// Samples are mutable
const sample: number[] = newDist.sample();
sample[0] = 123;
