// Type definitions for gaussian 1.1
// Project: https://github.com/errcw/gaussian
// Definitions by: Scott Cooper <https://github.com/scttcper>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare function gaussian(mean: number, variance: number): gaussian.Gaussian;

export = gaussian;
export as namespace gaussian;

declare namespace gaussian {
	interface Gaussian {
		/**
		 * the mean (μ) of the distribution
		 */
		mean: number;
		/**
		 * the variance (σ^2) of the distribution
		 */
		variance: number;
		/**
		 * the standard deviation (σ) of the distribution
		 */
		standardDeviation: number;
		/**
		 * the probability density function, which describes the
		 * probability of a random variable taking on the value x
		 */
		pdf(x: number): number;
		/**
		 * the cumulative distribution function, which describes the
		 * probability of a random variable falling in the interval (−∞, x]
		 */
		cdf(x: number): number;
		/**
		 * the percent point function, the inverse of cdf
		 */
		ppf(x: number): number;
		/**
		 * returns the product distribution of this and the given
		 * distribution; equivalent to scale(d) when d is a constant
		 */
		mul(x: number | Gaussian): number;
		/**
		 * returns the quotient distribution of this and the given
		 * distribution; equivalent to scale(1/d) when d is a constant
		 */
		div(x: number | Gaussian): number;
		/**
		 * returns the result of adding this and the given
		 * distribution's means and variances
		 */
		add(x: Gaussian): number;
		/**
		 * returns the result of subtracting this and the given
		 * distribution's means and variances
		 */
		sub(x: Gaussian): number;
		/**
		 * returns the result of scaling this distribution by the
		 * given constant
		 */
		scale(x: number): number;
	}
}
