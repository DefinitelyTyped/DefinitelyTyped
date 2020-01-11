// Type definitions for color-hash 1.0
// Project: https://github.com/zenozeng/color-hash
// Definitions by: Johannes Hoppe <https://github.com/JohannesHoppe>
//                 Kamil Socha <https://github.com/ksocha>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

type ColorValueArray = [number, number, number];

interface HueObject {
    min: number;
    max: number;
}

type Hue = number | HueObject | ReadonlyArray<HueObject>;
type Lightness = number | ColorValueArray;
type Saturation = number | ColorValueArray;

type HashFunction = (input: string) => number;

interface ColorHashOptions {
    lightness?: Lightness;
    saturation?: Saturation;
    hue?: Hue;
    hash?: HashFunction;
}

declare class ColorHash {
    constructor(options?: ColorHashOptions);

    /**
     * Returns the hash in [h, s, l].
     * Note that H ∈ [0, 360); S ∈ [0, 1]; L ∈ [0, 1];
     *
     * @param input string to hash
     * @returns [h, s, l]
     */
    hsl(input: string): ColorValueArray;

    /**
     * Returns the hash in [r, g, b].
     * Note that R, G, B ∈ [0, 255]
     *
     * @param input string to hash
     * @returns [r, g, b]
     */
    rgb(input: string): ColorValueArray;

    /**
     * Returns the hash in hex.
     *
     * @param input string to hash
     * @returns hex with #
     */
    hex(input: string): string;
}

export as namespace ColorHash;
export = ColorHash;
