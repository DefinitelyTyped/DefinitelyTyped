// This file was auto-generated. Please do not edit it.

import * as p5 from '../../index';

declare module '../../index' {
    interface p5InstanceExtensions {
        /**
         *   Returns the Perlin noise value at specified
         *   coordinates. Perlin noise is a random sequence
         *   generator producing a more naturally ordered,
         *   harmonic succession of numbers compared to the
         *   standard random() function. It was invented by Ken
         *   Perlin in the 1980s and been used since in
         *   graphical applications to produce procedural
         *   textures, natural motion, shapes, terrains etc.
         *   The main difference to the random() function is
         *   that Perlin noise is defined in an infinite
         *   n-dimensional space where each pair of coordinates
         *   corresponds to a fixed semi-random value (fixed
         *   only for the lifespan of the program; see the
         *   noiseSeed() function). p5.js can compute 1D, 2D
         *   and 3D noise, depending on the number of
         *   coordinates given. The resulting value will always
         *   be between 0.0 and 1.0. The noise value can be
         *   animated by moving through the noise space as
         *   demonstrated in the example above. The 2nd and 3rd
         *   dimensions can also be interpreted as time.
         *
         *   The actual noise is structured similar to an audio
         *   signal, in respect to the function's use of
         *   frequencies. Similar to the concept of harmonics
         *   in physics, Perlin noise is computed over several
         *   octaves which are added together for the final
         *   result.
         *
         *   Another way to adjust the character of the
         *   resulting sequence is the scale of the input
         *   coordinates. As the function works within an
         *   infinite space the value of the coordinates
         *   doesn't matter as such, only the distance between
         *   successive coordinates does (eg. when using
         *   noise() within a loop). As a general rule the
         *   smaller the difference between coordinates, the
         *   smoother the resulting noise sequence will be.
         *   Steps of 0.005-0.03 work best for most
         *   applications, but this will differ depending on
         *   use.
         *   @param x x-coordinate in noise space
         *   @param [y] y-coordinate in noise space
         *   @param [z] z-coordinate in noise space
         *   @return Perlin noise value (between 0 and 1) at
         *   specified coordinates
         */
        noise(x: number, y?: number, z?: number): number;

        /**
         *   Adjusts the character and level of detail produced
         *   by the Perlin noise function. Similar to harmonics
         *   in physics, noise is computed over several
         *   octaves. Lower octaves contribute more to the
         *   output signal and as such define the overall
         *   intensity of the noise, whereas higher octaves
         *   create finer-grained details in the noise
         *   sequence. By default, noise is computed over 4
         *   octaves with each octave contributing exactly half
         *   as much as its predecessor, starting at 50%
         *   strength for the 1st octave. This falloff amount
         *   can be changed by adding an additional function
         *   parameter. Eg. a falloff factor of 0.75 means each
         *   octave will now have 75% impact (25% less) of the
         *   previous lower octave. Any value between 0.0 and
         *   1.0 is valid, however, note that values greater
         *   than 0.5 might result in greater than 1.0 values
         *   returned by noise(). By changing these parameters,
         *   the signal created by the noise() function can be
         *   adapted to fit very specific needs and
         *   characteristics.
         *   @param lod number of octaves to be used by the
         *   noise
         *   @param falloff falloff factor for each octave
         */
        noiseDetail(lod: number, falloff: number): void;

        /**
         *   Sets the seed value for noise(). By default,
         *   noise() produces different results each time the
         *   program is run. Set the seed parameter to a
         *   constant to return the same pseudo-random numbers
         *   each time the software is run.
         *   @param seed the seed value
         */
        noiseSeed(seed: number): void;
    }
}
