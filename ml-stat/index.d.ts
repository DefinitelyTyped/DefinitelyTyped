// Type definitions for ml-stat 1.3.3
// Project: https://github.com/mljs/stat
// Definitions by: Diana Caro <https://github.com/CaribeSoy>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare namespace ML.Stat {
    export module array {
        /**
         * Computes the sum of the given values
         * @param {Array} values
         * @returns {number}
         */
        function sum(values: number[]): number;
        /**
         * Computes the maximum of the given values
         * @param {Array} values
         * @returns {number}
         */
        function max(values: number[]): number;
        /**
         * Computes the minimum of the given values
         * @param {Array} values
         * @returns {number}
         */
        function min(values: number[]): number;
        /**
         * Computes the min and max of the given values
         * @param {Array} values
         * @returns {{min: number, max: number}}
         */
        function minMax(values: number[]): {
            min: number;
            max: number;
        };
        /**
         * Computes the arithmetic mean of the given values
         * @param {Array} values
         * @returns {number}
         */
        function arithmeticMean(values: number[]): number;
        /**
         * {@link arithmeticMean}
         */
        var mean: typeof arithmeticMean;
        /**
         * Computes the geometric mean of the given values
         * @param {Array} values
         * @returns {number}
         */
        function geometricMean(values: number[]): number;
        /**
         * Computes the mean of the log of the given values
         * If the return value is exponentiated, it gives the same result as the
         * geometric mean.
         * @param {Array} values
         * @returns {number}
         */
        function logMean(values: number[]): number;
        /**
         * Computes the weighted grand mean for a list of means and sample sizes
         * @param {Array} means - Mean values for each set of samples
         * @param {Array} samples - Number of original values for each set of samples
         * @returns {number}
         */
        function grandMean(means: number[], samples: number[]): number;
        /**
         * Computes the truncated mean of the given values using a given percentage
         * @param {Array} values
         * @param {number} percent - The percentage of values to keep (range: [0,1])
         * @param {boolean} [alreadySorted=false]
         * @returns {number}
         */
        function truncatedMean(values: number[], percent: number, alreadySorted?: boolean): number;
        /**
         * Computes the harmonic mean of the given values
         * @param {Array} values
         * @returns {number}
         */
        function harmonicMean(values: number[]): number;
        /**
         * Computes the contra-harmonic mean of the given values
         * @param {Array} values
         * @returns {number}
         */
        function contraHarmonicMean(values: number[]): number;
        /**
         * Computes the median of the given values
         * @param {Array} values
         * @param {boolean} [alreadySorted=false]
         * @returns {number}
         */
        function median(values: number[], alreadySorted?: boolean): number;
        /**
         * Computes the variance of the given values
         * @param {Array} values
         * @param {boolean} [unbiased=true] - if true, divide by (n-1); if false, divide by n.
         * @returns {number}
         */
        function variance(values: number[], unbiased?: boolean): number;
        /**
         * Computes the standard deviation of the given values
         * @param {Array} values
         * @param {boolean} [unbiased=true] - if true, divide by (n-1); if false, divide by n.
         * @returns {number}
         */
        function standardDeviation(values: number[], unbiased?: boolean): number;
        function standardError(values: number[]): number;
        /**
         * IEEE Transactions on biomedical engineering, vol. 52, no. 1, January 2005, p. 76-
         * Calculate the standard deviation via the Median of the absolute deviation
         *  The formula for the standard deviation only holds for Gaussian random variables.
         * @returns {{mean: number, stdev: number}}
         */
        function robustMeanAndStdev(y: number[]): {
            mean: number;
            stdev: number;
        };
        function quartiles(values: number[], alreadySorted?: boolean): {
            q1: number;
            q2: number;
            q3: number;
        };
        function pooledStandardDeviation(samples: number[][], unbiased?: boolean): number;
        function pooledVariance(samples: number[][], unbiased?: boolean): number;
        /**
         * Computes the mode of the given values
         *
         * @export
         * @param {number[]} values
         * @returns {number}
         */
        function mode(values: number[]): number;
        /**
         * Computes the covariance given two vectors
         *
         * @export
         * @param {number[]} vector1
         * @param {number[]} vector2
         * @param {boolean} [unbiased=true]
         * @returns {number}
         */
        function covariance(vector1: number[], vector2: number[], unbiased?: boolean): number;
        /**
         *
         *
         * @export
         * @param {number[]} values
         * @param {boolean} [unbiased=true]
         * @returns {number}
         */
        function skewness(values: number[], unbiased?: boolean): number;
        /**
         *
         *
         * @export
         * @param {number[]} values
         * @param {boolean} [unbiased=true]
         * @returns {number}
         */
        function kurtosis(values: number[], unbiased?: boolean): number;
        /**
         * Computes the entropy of the given values
         *
         * @export
         * @param {number[]} values
         * @param {number} [eps=0]
         * @returns {number}
         */
        function entropy(values: number[], eps?: number): number;
        /**
         * Computes the weighted mean of the given values
         *
         * @export
         * @param {number[]} values
         * @param {number[]} weights
         * @returns {number}
         */
        function weightedMean(values: number[], weights: number[]): number;
        /**
         * Computes the weighted standardar deviation of the given values
         *
         * @export
         * @param {number[]} values
         * @param {number[]} weights
         * @returns {number}
         */
        function weightedStandardDeviation(values: number[], weights: number[]): number;
        /**
         * Computes the weighted variance of the given values
         *
         * @export
         * @param {number[]} values
         * @param {number[]} weights
         * @returns {number}
         */
        function weightedVariance(values: number[], weights: number[]): number;
        /**
         *
         *
         * @export
         * @param {number[]} values
         * @param {boolean} [inPlace=false]
         * @returns {number[]}
         */
        function center(values: number[], inPlace?: boolean): number[];
        /**
         * Standardize the given values
         *
         * @export
         * @param {number[]} values
         * @param {number} [standardDev=standardDeviation(values)]
         * @param {boolean} [inPlace=false]
         * @returns {number[]}
         */
        function standardize(values: number[], standardDev?: number, inPlace?: boolean): number[];
        /**
         * Computes the cumulative sum of the given array
         *
         * @export
         * @param {number[]} array
         * @returns {number[]}
         */
        function cumulativeSum(array: number[]): number[];
    }

    export module matrix {
        /**
         * Computes the maximum of the given matrix
         *
         * @export
         * @param {number[][]} matrix
         * @returns {number}
         */
        function max(matrix: number[][]): number;
        /**
         * Computes the minimum of the given matrix
         *
         * @export
         * @param {number[][]} matrix
         * @returns {number}
         */
        function min(matrix: number[][]): number;
        /**
         * Computes the min and max of the given matrix
         *
         * @export
         * @param {number[][]} matrix
         * @returns {{min: number, max: number}}
         */
        function minMax(matrix: number[][]): {
            min: number;
            max: number;
        };
        /**
         * Computes the entropy of the given matrix
         *
         * @export
         * @param {number[][]} matrix
         * @param {number} [eps=0]
         * @returns {number}
         */
        function entropy(matrix: number[][], eps?: number): number;
        /**
         * Computes the mean of the given matrix
         *
         * @export
         * @param {number[][]} matrix
         * @param {number} [dimension=0]
         * @returns {number[]}
         */
        function mean(matrix: number[][], dimension?: number): number[];
        /**
         * Computes the sum of the given matrix
         *
         * @export
         * @param {number[][]} matrix
         * @param {number} [dimension=0]
         * @returns {number[]}
         */
        function sum(matrix: number[][], dimension?: number): number[];
        /**
         * Computes the product of the given matrix
         *
         * @export
         * @param {number[][]} matrix
         * @param {number} [dimension=0]
         * @returns {number[]}
         */
        function product(matrix: number[][], dimension?: number): number[];
        /**
         * Computes the standard deviation of the given matrix
         *
         * @export
         * @param {number[][]} matrix
         * @param {boolean} [unbiased]
         * @param {number[]} [means]
         * @returns {number[]}
         */
        function standardDeviation(matrix: number[][], unbiased?: boolean, means?: number[]): number[];
        /**
         * Computes the variance of the given matrix
         *
         * @export
         * @param {number[][]} matrix
         * @param {number[]} [means=mean(matrix)]
         * @param {boolean} [unbiased=true]
         * @returns {number[]}
         */
        function variance(matrix: number[][], means?: number[], unbiased?: boolean): number[];
        /**
         * Computes the median of the given matrix
         *
         * @export
         * @param {number[][]} matrix
         * @returns {number[]}
         */
        function median(matrix: number[][]): number[];
        /**
         * Computes the mode of the given matrix
         *
         * @export
         * @param {number[][]} matrix
         * @returns {number[]}
         */
        function mode(matrix: number[][]): number[];
        /**
         * Computes the skewness of the given matrix
         *
         * @export
         * @param {number[][]} matrix
         * @param {boolean} [unbiased=true]
         * @returns {number[]}
         */
        function skewness(matrix: number[][], unbiased?: boolean): number[];
        /**
         * Computes the sample kurtosis of the given matrix
         *
         * @export
         * @param {number[][]} matrix
         * @param {boolean} [unbiased=true]
         * @returns {number[]}
         */
        function kurtosis(matrix: number[][], unbiased?: boolean): number[];
        /**
         * Computes the standard error of the given matrix
         *
         * @export
         * @param {number[][]} matrix
         * @returns {number[]}
         */
        function standardError(matrix: number[][]): number[];
        /**
         * Computes the covariance of the given matrix
         *
         * @export
         * @param {number[][]} matrix
         * @param {number} [dimension]
         * @returns {number[][]}
         */
        function covariance(matrix: number[][], dimension?: number): number[][];
        /**
         *
         *
         * @export
         * @param {number[][]} matrix
         * @param {number} [divisor=matrix.length - 1]
         * @param {number} [dimension=0]
         * @returns {number[][]}
         */
        function scatter(matrix: number[][], divisor?: number, dimension?: number): number[][];
        /**
         * Computes the correlation of the given matrix
         *
         * @export
         * @param {number[][]} matrix
         * @returns {number[][]}
         */
        function correlation(matrix: number[][]): number[][];
        /**
         * Computes the zScores of the given matrix
         *
         * @export
         * @param {number[][]} matrix
         * @param {number[]} [means=mean(matrix)]
         * @param {boolean} [standardDeviations=standardDeviation(matrix, true, means)]
         * @returns {number[][]}
         */
        function zScores(matrix: number[][], means?: number[], standardDeviations?: number[]): number[][];
        /**
         * Computes the center of the given matrix
         *
         * @export
         * @param {number[][]} matrix
         * @param {number[]} [means=mean(matrix)]
         * @param {boolean} inPlace
         * @returns {number[][]}
         */
        function center(matrix: number[][], means: number[], inPlace: boolean): number[][];
        /**
         * Standardize the given matrix
         *
         * @export
         * @param {number[][]} matrix
         * @param {number[]} [standardDeviations=standardDeviation(matrix)]
         * @param {boolean} [inPlace=true]
         * @returns {number[][]}
         */
        function standardize(matrix: number[][], standardDeviations?: number[], inPlace?: boolean): number[][];
        /**
         * Computes the weighted variance of the given matrix
         *
         * @export
         * @param {number[][]} matrix
         * @param {number[]} weights
         * @returns {number[]}
         */
        function weightedVariance(matrix: number[][], weights: number[]): number[];
        /**
         * Computes the weighted mean of the given matrix
         *
         * @export
         * @param {number[][]} matrix
         * @param {number[]} weights
         * @param {number} [dimension=0]
         * @returns {number[]}
         */
        function weightedMean(matrix: number[][], weights: number[], dimension?: number): number[];
        /**
         * Computes the weighted covariance of the given matrix
         *
         * @export
         * @param {number[][]} matrix
         * @param {number[]} weights
         * @param {number} [dimension=0]
         * @param {number[]} [means=weightedMean(matrix, weights, dimension)]
         * @returns {number[][]}
         */
        function weightedCovariance(matrix: number[][], weights: number[], dimension?: number, means?: number[]): number[][];
        /**
         *
         *
         * @export
         * @param {number[][]} matrix
         * @param {number[]} weights
         * @param {number[]} means
         * @param {number} [factor=1]
         * @param {number} [dimension=0]
         * @returns {number[][]}
         */
        function weightedScatter(matrix: number[][], weights: number[], means: number[], factor?: number, dimension?: number): number[][];
    }
}

declare module "ml-stat" {
    export = ML.Stat;
}