// Type definitions for FastSimplexNoise v2.1.1
// Project: https://www.npmjs.com/package/fast-simplex-noise
// Definitions by: Tobias Cohen <https://github.com/tobico/>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/**
 * A JavaScript implementation of the improved, faster Simplex algorithm outlined in Stefan Gustavson's Simplex noise demystified.
 *
 * Convenience functions have been added as well, in order to avoid needing to scale and handle the raw noise data directly.
 */
declare class FastSimplexNoise {
  amplitude: number;
  frequency: number;
  max: number;
  min: number;
  octaves: number;
  persistence: number;
  random: ()=>number;

  /**
   * Options is an optional object that can contain:
   *
   * amplitude: float - The base amplitude (default: 1.0)
   * frequency: float - The base frequency (default: 1.0)
   * max: float - The maximum scaled value to return (effective default: 1.0)
   * min: float - The minimum scaled value to return (effective default: -1.0)
   * octaves: integer - The number of octaves to sum for noise generation (default: 1)
   * persistence: float - The persistence of amplitude per octave (default: 0.5)
   * random: function - A function that generates random values between 0 and 1 (default: Math.random)
   */
  constructor(options?: {
    amplitude?: number;
    frequency?: number;
    max?: number;
    min?: number;
    octaves?: number;
    persistence?: number;
    random?: ()=>number;
  });

  /**
   * Get a noise value between min and max for a point (x,y) on the surface of a cylinder with circumference c.
   */
  cylindrical2D(c: number, x: number, y: number): number;

  /**
   * Get a noise value between min and max for a point (x, y, z) on the surface of a cylinder with circumference c.
   */
  cylindrical3D(c: number, x: number, y: number, z: number): number;

  /**
   * Get a noise value between min and max at the 2D coordinate (x,y) in summed octaves, using amplitude, frequency, and persistence values.
   */
  in2D(x: number, y: number): number;

  /**
   * Get a noise value between min and max at the 3D coordinate (x,y,z) in summed octaves, using amplitude, frequency, and persistence values.
   */
  in3D(x: number, y: number, z: number): number;

  /**
   * Get a noise value between min and max at the 4D coordinate (x,y,z,w) in summed octaves, using amplitude, frequency, and persistence values.
   */
  in4D(x: number, y: number, z: number, w: number): number;

  /**
   * Get a noise value [-1, 1] at the 2D coordinate (x,y).
   */
  raw2D(x: number, y: number): number;

  /**
   * Get a noise value [-1, 1] at the 3D coordinate (x,y,z).
   */
  raw3D(x: number, y: number, z: number): number;

  /**
   * Get a noise value [-1, 1] at the 4D coordinate (x,y,z,w).
   */
  raw4D(x: number, y: number, z: number, w: number): number;

  /**
   * Get a noise value between min and max for a point (x, y) on the surface of a sphere with circumference c.
   */
  spherical2D(c: number, x: number, y: number): number;

  /**
   * Get a noise value between min and max for a point (x, y, z) on the surface of a sphere with circumference c.
   */
  spherical3D(c: number, x: number, y: number, z: number): number;
}

declare module "fast-simplex-noise" {
  export = FastSimplexNoise;
}
