type ColorValueArray = [number, number, number];

interface HueObject {
    min: number;
    max: number;
}

type Hue = number | HueObject | ReadonlyArray<HueObject>;
type Lightness = number | number[];
type Saturation = number | number[];

type HashFunction = (input: string) => number;

interface ColorHashOptions {
    lightness?: Lightness | undefined;
    saturation?: Saturation | undefined;
    hue?: Hue | undefined;
    hash?: HashFunction | undefined;
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
