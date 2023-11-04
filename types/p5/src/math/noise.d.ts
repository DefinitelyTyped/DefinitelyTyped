// This file was auto-generated. Please do not edit it.

import * as p5 from '../../index';

declare module '../../index' {
    interface p5InstanceExtensions {
        /**
         *   Returns random numbers that can be tuned to feel
         *   more organic. The values returned will always be
         *   between 0 and 1. Values returned by random() and
         *   randomGaussian() can change by large amounts
         *   between function calls. By contrast, values
         *   returned by noise() can be made "smooth". Calls to
         *   noise() with similar inputs will produce similar
         *   outputs. noise() is used to create textures,
         *   motion, shapes, terrains, and so on. Ken Perlin
         *   invented noise() while animating the original Tron
         *   film in the 1980s.
         *
         *   noise() returns the same value for a given input
         *   while a sketch is running. It produces different
         *   results each time a sketch runs. The noiseSeed()
         *   function can be used to generate the same sequence
         *   of Perlin noise values each time a sketch runs.
         *
         *   The character of the noise can be adjusted in two
         *   ways. The first way is to scale the inputs.
         *   noise() interprets inputs as coordinates. The
         *   sequence of noise values will be smoother when the
         *   input coordinates are closer. The second way is to
         *   use the noiseDetail() function.
         *
         *   The version of noise() with one parameter computes
         *   noise values in one dimension. This dimension can
         *   be thought of as space, as in noise(x), or time,
         *   as in noise(t).
         *
         *   The version of noise() with two parameters
         *   computes noise values in two dimensions. These
         *   dimensions can be thought of as space, as in
         *   noise(x, y), or space and time, as in noise(x, t).
         *
         *   The version of noise() with three parameters
         *   computes noise values in three dimensions. These
         *   dimensions can be thought of as space, as in
         *   noise(x, y, z), or space and time, as in noise(x,
         *   y, t).
         *   @param x x-coordinate in noise space.
         *   @param [y] y-coordinate in noise space.
         *   @param [z] z-coordinate in noise space.
         *   @return Perlin noise value at specified
         *   coordinates.
         */
        noise(x: number, y?: number, z?: number): number;

        /**
         *   Adjusts the character of the noise produced by the
         *   noise() function. Perlin noise values are created
         *   by adding layers of noise together. The noise
         *   layers, called octaves, are similar to harmonics
         *   in music. Lower octaves contribute more to the
         *   output signal. They define the overall intensity
         *   of the noise. Higher octaves create finer-grained
         *   details.
         *
         *   By default, noise values are created by combining
         *   four octaves. Each higher octave contributes half
         *   as much (50% less) compared to its predecessor.
         *   noiseDetail() changes the number of octaves and
         *   the falloff amount. For example, calling
         *   noiseDetail(6, 0.25) ensures that noise() will use
         *   six octaves. Each higher octave will contribute
         *   25% as much (75% less) compared to its
         *   predecessor. Falloff values between 0 and 1 are
         *   valid. However, falloff values greater than 0.5
         *   might result in noise values greater than 1.
         *   @param lod number of octaves to be used by the
         *   noise.
         *   @param falloff falloff factor for each octave.
         */
        noiseDetail(lod: number, falloff: number): void;

        /**
         *   Sets the seed value for noise(). By default,
         *   noise() produces different results each time a
         *   sketch is run. Calling noiseSeed() with a constant
         *   argument, such as noiseSeed(99), makes noise()
         *   produce the same results each time a sketch is
         *   run.
         *   @param seed seed value.
         */
        noiseSeed(seed: number): void;
    }
}
