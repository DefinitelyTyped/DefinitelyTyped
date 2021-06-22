import MultivariateNormal from 'multivariate-normal';

// Test constructing using mutable and literal arrays
const mutArray: number[] = [1, 2, 3];
const dist = MultivariateNormal(mutArray, [[0, 0, 1], [0, 1, 0], [1, 0, 0]]);

// Test methods for creating a new distribution from an existing one using
// mutable and literal arrays
const mutArray2: number[] = [4, 5, 6];
const newDist = dist.setMean(mutArray2).setCov([[0, 0, 1], [0, 1, 0], [1, 0, 0]]);

// Test accessors
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

// Check that we can pass immutable arrays into the constructor or mutators
MultivariateNormal(newDist.getMean(), newDist.getCov());

newDist.setCov(dist.getCov());
newDist.setMean(dist.getMean());
