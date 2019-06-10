// This file was auto-generated. Please do not edit it.

import * as p5 from "../../index";

declare module "../../index" {
  interface p5InstanceExtensions {
    /**
     *   Sets the seed value for random(). By default,
     *   random() produces different results each time the
     *   program is run. Set the seed parameter to a
     *   constant to return the same pseudo-random numbers
     *   each time the software is run.
     *   @param seed the seed value
     */
    randomSeed(
      seed: number
    ): void;

    /**
     *   Return a random floating-point number. Takes
     *   either 0, 1 or 2 arguments.
     *
     *   If no argument is given, returns a random number
     *   from 0 up to (but not including) 1.
     *
     *   If one argument is given and it is a number,
     *   returns a random number from 0 up to (but not
     *   including) the number.
     *
     *   If one argument is given and it is an array,
     *   returns a random element from that array.
     *
     *   If two arguments are given, returns a random
     *   number from the first argument up to (but not
     *   including) the second argument.
     *   @param [min] the lower bound (inclusive)
     *   @param [max] the upper bound (exclusive)
     *   @return the random number
     */
    random(
      min?: number,
      max?: number
    ): number;

    /**
     *   Return a random floating-point number. Takes
     *   either 0, 1 or 2 arguments.
     *
     *   If no argument is given, returns a random number
     *   from 0 up to (but not including) 1.
     *
     *   If one argument is given and it is a number,
     *   returns a random number from 0 up to (but not
     *   including) the number.
     *
     *   If one argument is given and it is an array,
     *   returns a random element from that array.
     *
     *   If two arguments are given, returns a random
     *   number from the first argument up to (but not
     *   including) the second argument.
     *   @param choices the array to choose from
     *   @return the random element from the array
     */
    random(
      choices: any[]
    ): any;

    /**
     *   Returns a random number fitting a Gaussian, or
     *   normal, distribution. There is theoretically no
     *   minimum or maximum value that randomGaussian()
     *   might return. Rather, there is just a very low
     *   probability that values far from the mean will be
     *   returned; and a higher probability that numbers
     *   near the mean will be returned.  Takes either 0, 1
     *   or 2 arguments.
     *
     *   If no args, returns a mean of 0 and standard
     *   deviation of 1.
     *
     *   If one arg, that arg is the mean (standard
     *   deviation is 1).
     *
     *   If two args, first is mean, second is standard
     *   deviation.
     *   @param mean the mean
     *   @param sd the standard deviation
     *   @return the random number
     */
    randomGaussian(
      mean: number,
      sd: number
    ): number;
  }
}
