// Type definitions for scrambo 0.3
// Project: https://github.com/nickcolley/scrambo
// Definitions by: Christopher Mühl <https://github.com/padarom>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

type NNN = '222' | '333' | '444' | '555' | '666' | '777';
type ScrambleType = NNN | 'clock' | 'minx' | 'pyram' | 'sq1' | 'skewb';

declare class Scrambo {
    /**
     * Sets this instance's scrambler type and returns the original instance.
     * @param type
     */
    type(type: ScrambleType): Scrambo;

    /**
     * Returns the currently configured scrambler type.
     */
    type(): ScrambleType;

    /**
     * Sets this instance's seed and returns the original instance.
     * @param seed
     */
    seed(seed: number): Scrambo;

    /**
     * Returns the current seed type of this scrambler.
     */
    seed(): number;

    /**
     * Sets this instance's scramble length and returns the original instance.
     * @param length
     */
    length(length: number): Scrambo;

    /**
     * Returns the currently configured scramble length.
     */
    length(): number;

    /**
     * Returns an array of random scrambles with the given length
     * for the configured scrambler type.
     * @param number defaults to 1
     */
    get(number?: number): [string];
}

export = Scrambo;
