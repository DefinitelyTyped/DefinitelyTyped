export type ColorValueArray = [number, number, number];

export interface HueObject {
    min: number;
    max: number;
}

export type Hue = number | HueObject | readonly HueObject[];
export type Lightness = number | number[];
export type Saturation = number | number[];

export type HashFunction = (input: string) => number;

export interface ColorHashOptions {
    lightness?: Lightness;
    saturation?: Saturation;
    hue?: Hue;
    hash?: HashFunction | "bkdr";
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

export default ColorHash;
