// This file was auto-generated. Please do not edit it.

import * as p5 from '../../index';

declare module '../../index' {
    interface p5InstanceExtensions {
        /**
         *   Sets the seed value for random() and
         *   randomGaussian(). By default, random() and
         *   randomGaussian() produce different results each
         *   time a sketch is run. Calling randomSeed() with a
         *   constant argument, such as randomSeed(99), makes
         *   these functions produce the same results each time
         *   a sketch is run.
         *   @param seed seed value.
         */
        randomSeed(seed: number): void;

        /**
         *   Returns a random number or a random element from
         *   an array. random() follows uniform distribution,
         *   which means that all outcomes are equally likely.
         *   When random() is used to generate numbers, all
         *   numbers in the output range are equally likely to
         *   be returned. When random() is used to select
         *   elements from an array, all elements are equally
         *   likely to be chosen.
         *
         *   By default, random() produces different results
         *   each time a sketch runs. The randomSeed() function
         *   can be used to generate the same sequence of
         *   numbers or choices each time a sketch runs.
         *
         *   The version of random() with no parameters returns
         *   a random number from 0 up to but not including 1.
         *
         *   The version of random() with one parameter works
         *   one of two ways. If the argument passed is a
         *   number, random() returns a random number from 0 up
         *   to but not including the number. For example,
         *   calling random(5) returns values between 0 and 5.
         *   If the argument passed is an array, random()
         *   returns a random element from that array. For
         *   example, calling random(['🦁', '🐯', '🐻'])
         *   returns either a lion, tiger, or bear emoji.
         *
         *   The version of random() with two parameters
         *   returns a random number from a given range. The
         *   arguments passed set the range's lower and upper
         *   bounds. For example, calling random(-5, 10.2)
         *   returns values from -5 up to but not including
         *   10.2.
         *   @param [min] lower bound (inclusive).
         *   @param [max] upper bound (exclusive).
         *   @return random number.
         */
        random(min?: number, max?: number): number;

        /**
         *   Returns a random number or a random element from
         *   an array. random() follows uniform distribution,
         *   which means that all outcomes are equally likely.
         *   When random() is used to generate numbers, all
         *   numbers in the output range are equally likely to
         *   be returned. When random() is used to select
         *   elements from an array, all elements are equally
         *   likely to be chosen.
         *
         *   By default, random() produces different results
         *   each time a sketch runs. The randomSeed() function
         *   can be used to generate the same sequence of
         *   numbers or choices each time a sketch runs.
         *
         *   The version of random() with no parameters returns
         *   a random number from 0 up to but not including 1.
         *
         *   The version of random() with one parameter works
         *   one of two ways. If the argument passed is a
         *   number, random() returns a random number from 0 up
         *   to but not including the number. For example,
         *   calling random(5) returns values between 0 and 5.
         *   If the argument passed is an array, random()
         *   returns a random element from that array. For
         *   example, calling random(['🦁', '🐯', '🐻'])
         *   returns either a lion, tiger, or bear emoji.
         *
         *   The version of random() with two parameters
         *   returns a random number from a given range. The
         *   arguments passed set the range's lower and upper
         *   bounds. For example, calling random(-5, 10.2)
         *   returns values from -5 up to but not including
         *   10.2.
         *   @param choices array to choose from.
         *   @return random element from the array.
         */
        random(choices: any[]): any;

        /**
         *   Returns a random number fitting a Gaussian, or
         *   normal, distribution. Normal distributions look
         *   like bell curves when plotted. Values from a
         *   normal distribution cluster around a central value
         *   called the mean. The cluster's standard deviation
         *   describes its spread. By default, randomGaussian()
         *   produces different results each time a sketch
         *   runs. The randomSeed() function can be used to
         *   generate the same sequence of numbers each time a
         *   sketch runs.
         *
         *   There's no minimum or maximum value that
         *   randomGaussian() might return. Values far from the
         *   mean are very unlikely and values near the mean
         *   are very likely.
         *
         *   The version of randomGaussian() with no parameters
         *   returns values with a mean of 0 and standard
         *   deviation of 1.
         *
         *   The version of randomGaussian() with one parameter
         *   interprets the argument passed as the mean. The
         *   standard deviation is 1.
         *
         *   The version of randomGaussian() with two
         *   parameters interprets the first argument passed as
         *   the mean and the second as the standard deviation.
         *   @param [mean] mean.
         *   @param [sd] standard deviation.
         *   @return random number.
         */
        randomGaussian(mean?: number, sd?: number): number;
    }
}
