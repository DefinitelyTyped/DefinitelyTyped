// Type definitions for fast-stats 0.0.2
// Project: https://github.com/bluesmoon/node-faststats
// Definitions by: Rogier Schouten <https://github.com/rogierschouten>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped



export interface StatsOpts {
    /**
     * Tells fast-stats to maintain a histogram of your dataset using this parameter as the least count, or precision.
     * By default, fast-stats will not maintain buckets since it does not know the least count and range of your dataset in advance.
     * This option is required if you need to use the distribution() method.
     */
    bucket_precision?: number;

    /**
     * Tells fast-stats to maintain a histogram of your dataset using these custom buckets.
     * Each number in the array is the upper limit of a bucket. The lower limit of the first bucket is 0, the lower limit for all other buckets is the upper limit of the previous bucket.
     * If you use both bucket_precision and buckets, buckets takes precedence.
     */
    buckets?: number[];

    /**
     * Tells fast-stats how to extend the pre-defined buckets if data exceeding the range is added. This is useful to capture data above your range, in multiple buckets, but with low precision so you do not end up with a large number of empty buckets.
     * By default this is not defined, so buckets will not be extended and all data beyond the end range will end up in the last bucket.
     */
    bucket_extension_interval?: number;

    /**
     * Tells fast-stats not to store actual data values. This is useful to reduce memory utilisation for large datasets, however it comes with a few caveats.
     * - You can no longer get an exact median or other percentile value out of your dataset, however you could use bucketing (see bucket_precision above) to get an approximate percentile value.
     * - You can no longer run an exact iqr filter or a band_pass filter on the data, however you could use bucketing to get an approximate filtered object.
     * - You can no longer get at the entire dataset or remove data from the dataset.
     * The mean, standard deviation and margin of error calculations are unaffected by this parameter. If you use bucketing, and only care about the mean, standard deviation and margin of error or an approximate median or percentile value, set this option to false.
     * By default, store_data is true.
     */
    store_data?: boolean;

    /**
     * Tells fast-stats whether the data you pass in is a sample (true) or the entire (false default) population.
     * The standard deviation algorithm differs for populations v/s samples.
     */
    sampling?: boolean;
}

/**
 * Distribution bucket
 */
export interface Bucket {
    /**
     * Bucket midpoint
     */
    bucket: number;
    /**
     * [<bucket low>, <bucket high>],
     */
    range: number[];
    /**
     * Number of datapoints
     */
    count: number;
}

/**
 * A NodeJS library to do statistical analysis of numeric datasets.
 * When doing statistical analysis of data, the most common usage pattern is to run multiple statistical methods on the same set of data. Some of these methods use others. For example, to calculate the standard deviation of a dataset, we first need the mean.
 * Additionally, some methods can be calculated quickly as data is inserted, thereby reducing the number of loops required to run through the data during processing.
 * Fast stats maintains a running cache of several summary values as data is inserted making final calculation very fast. It trades off a small amount of additional memory usage for a large reduction in execution time.	 
 */
export declare class Stats {
    constructor(opts?: StatsOpts);

    /**
     * Add elements to back
     */
    push(...args: number[]): void;
    push(args: number[]): void;

    /**
     * Remove element from back
     */
    pop(): number;

    /**
     * Remove element from front
     */
    shift(): number;

    /**
     * Add elements to front
     */
    unshift(...args: number[]): void;

    /**
     * Number of elements
     */
    length: number;

    /**
     * Clear all data
     */
    reset(): void;

    /**
     * Fresh copy
     */
    copy(): Stats;


    /**
     * Arithmetic Mean
     * The arithmetic mean is calculated as the sum of all data points divided by the number of data points. This is useful for data sets that are fairly uniform, following a linear or binomial distribution. Use the amean() method or the `�()? method to get at it:
     */
    amean(): number;

    /**
     * Geometric Mean
     * The geometric mean is the nth root of the product of all data points where n is the number of data points. This is useful for data sets that follow an exponential or log-normal distribution. Use the gmean() method to get at it:
     */
    gmean(): number;

    /**
     * Median
     * The median is the middle point of the dataset when sorted in ascending order. This is useful if your dataset has a lot of outliers and noise that would not normally be found in a complete population. Use the median() method to get at it:
     * If your data set contains an odd number of points, the median will be the middle point. If it contains an even number of points, then the median will be the arithmetic mean of the two middle points.
     * If your Stats object is configured to use buckets and has store_data set to false, then the median will be an approximation of the actual median.
     */
    median(): number;

    /**
     * Any Percentile
     * You can also get at any percentile value within the data. Use the percentile() method to get at this data. The percentile() method takes in a single argument. This is a number between 0 and 100 (both inclusive) that specifies which percentile point you want.
     * Passing in 50 as an argument will return the median, while 25 and 75 will return the first and third quartiles respectively. These three special values may be arithmetic means of two other values within the set. All other arguments will return a number from the data set.
     * If your Stats object is configured to use buckets and has store_data set to false, then the percentile value returned will be an approximation of the actual percentile based on the configured bucket_precision or buckets.
     */
    percentile(n: number): number;

    /**
     * Range
     * The range() method tells you the minimum and maximum values of your data set. It returns an array of two values. The first is the lower bound and the second is the upper bound.
     */
    range(): number[];

    /**
     * The distribution() method tells you how your data is distributed. You need to set the bucket_precision or buckets configuration options if you plan on using this method. It will then split your data into buckets based on the value of bucket_precision or buckets and tell you how many data points fall into each bucket. You can use this to plot a histogram of your data, or to compare it to commonly known distribution functions.
     * The return value is a sparse array of buckets with counts of datapoints per bucket. To save on memory, any empty buckets are undefined. You should treat an undefined bucket as if it had 0 datapoints.
     */
    distribution(): Bucket[];

    /**
     * Arithmetic Standard Deviation
     * Also commonly just called the Standard Deviation, with the symbol s. This tells you the spread of your data if it follows a normal (or close to normal) distribution, ie, the bell curve. fast-stats is really fast at calculating the standard deviation of a dataset
     * The arithmetic standard deviation is used in conjunction with the arithmetic mean to tell you the spread of your dataset: [amean-stddev, amean+stddev]. Note that you could also use 2 or 3 standard deviations for different spreads.
     */
    stddev(): number;

    /**
     * Geometric Standard Deviation
     * The geometric standard deviation tells you the spread of your data if it follows a log-normal or exponential distribution. Use the gstddev() method to get at it.
     */
    gstddev(): number;

    /**
     * 95% Confidence Margin of Error
     * The Margin of Error value tells you the range within which the real arithmetic mean of the population is likely to be with 95% confidence. Use the moe() method to get at it.
     * This value suggests that we are 95% certain that the real mean of the population is within 2.60 of the calculated arithmetic mean of 4.67. We could use this to find out the percent error in our sample. In this case there is a 55.71% error.
     * The margin of error is inversely proportional to the square root of the number of data points, so increasing the size of your sample will reduce the margin of error. It is good to strive for a margin of error of less than 5%.
     */
    moe(): number;

    /**
     * Band-pass filtering
     * The band_pass() filter method returns a new Stats object with all its data points within the specified range. This method takes in three arguments. The first is the lower bound of the range, the second is the upper bound of the range. Both these arguments are required.
     * The third argument specifies whether the range is open or closed. An open range does not include the upper and lower bounds while a closed range includes them. If not specified (or set to false), the range is closed. If set to true the range is open.
     * Band pass filtering should be used if the range for your data is rigid and never changes.
     */
    band_pass(low: number, high: number, open?: boolean): Stats

    /**
     * IQR Filtering
     * IQR, or Inter Quartile Range filtering filters data based on the spread of the data. It is much more adaptive to changes in data ranges. Use the iqr() method to IQR filter a dataset. The iqr() method does not accept any arguments.
     * In some cases, IQR filtering may not filter out anything. This can happen if the acceptable range is wider than the bounds of your dataset.
     */
    iqr(): Stats;
}
