declare namespace ColorHash {
    type ColorValueArray = [number, number, number];

    interface HueObject {
        min: number;
        max: number;
    }

    type Hue = number | HueObject | readonly HueObject[];
    type Lightness = number | number[];
    type Saturation = number | number[];

    type HashFunction = (input: string) => number;

    interface ColorHashOptions {
        lightness?: Lightness;
        saturation?: Saturation;
        hue?: Hue;
        hash?: HashFunction | "bkdr";
    }
}

declare class ColorHash {
    constructor(options?: ColorHash.ColorHashOptions);

    /**
     * Returns the hash in [h, s, l].
     * Note that H ∈ [0, 360); S ∈ [0, 1]; L ∈ [0, 1];
     *
     * @param input string to hash
     * @returns [h, s, l]
     */
    hsl(input: string): ColorHash.ColorValueArray;

    /**
     * Returns the hash in [r, g, b].
     * Note that R, G, B ∈ [0, 255]
     *
     * @param input string to hash
     * @returns [r, g, b]
     */
    rgb(input: string): ColorHash.ColorValueArray;

    /**
     * Returns the hash in hex.
     *
     * @param input string to hash
     * @returns hex with #
     */
    hex(input: string): string;
}

export = ColorHash;
