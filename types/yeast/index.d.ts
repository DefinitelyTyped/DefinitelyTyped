export = yeast;
/**
 * Yeast: A tiny growing id generator.
 */
declare function yeast(): string;

declare namespace yeast {
    /**
     * Return a string representing the specified number.
     */
    function encode(num: number): string;

    /**
     * Return the integer value specified by the given string.
     */
    function decode(str: string): number;
}
