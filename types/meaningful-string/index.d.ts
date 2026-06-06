/**
 * Options for the {@link random} function.
 */
export interface RandomOptions {
    /**
     * This is the minimum length of the generated random string.
     */
    min?: number | undefined;
    /**
     * This is the maximum length of the generated random string.
     */
    max?: number | undefined;
    /**
     * When true, the string will only be uppercase letters and no numbers.
     */
    allCaps?: boolean | undefined;
    /**
     * When true, the string will only be lowercase letters and no numbers.
     */
    allSmall?: boolean | undefined;
    /**
     * When true, the string will only be uppercase letters and can include numbers.
     */
    capsWithNumbers?: boolean | undefined;
    /**
     * When true, the string will only be lowercase letters and can include numbers.
     */
    smallWithNumbers?: boolean | undefined;
    /**
     * When true, the string will only be numbers.
     */
    onlyNumbers?: boolean | undefined;
    /**
     * A custom pool of characters to source from instead of the built-in letters and numbers.
     */
    custom?: string[] | undefined;
    /**
     * The output length. Takes precedent over {@link min} and {@link max}.
     */
    charLength?: number | undefined;
    /**
     * Optional prefix for the output.
     */
    startWith?: string | undefined;
    /**
     * Optional suffix for the output.
     */
    endWith?: string | undefined;
}

/**
 * Options for the {@link meaningful} function.
 */
export interface MeaningfulOptions {
    /**
     * The maximum number to use for the number section.
     */
    numberUpto?: number | undefined;
    /**
     * The string to join the sections with. Defaults to "-".
     */
    joinBy?: string | undefined;
}

/**
 * Options for the {@link shortId} function.
 */
export interface ShortIdOptions extends Exclude<RandomOptions, "min" | "max"> {
    /**
     * Exact length of the string. Must be between 3 and 8.
     */
    charLength?: number | undefined;
}

/**
 * Generates a random string. Defaults to including uppercase and lowercase letters, and numbers.
 * @param options Options for customizing the output.
 */
export function random(options?: RandomOptions): string;

/**
 * Generates a random "meaningful" string in the format of `animal-emotion-number`.
 * @param options Options for customizing the output.
 */
export function meaningful(options?: MeaningfulOptions): string;

/**
 * Generate a short ID.
 * @param options Options for customizing the output.
 */
export function shortId(options?: ShortIdOptions): string;

/**
 * Generate the hash code of the given input.
 * @param input The string to hash.
 */
export function hashCode(input: string): string;

/**
 * Generates a pseudorandom UUID v4.
 * WARNING: This is not cryptographically random.
 * You should probably use Node's `crypto.randomUUID` or the `uuid` package (>=8) instead.
 */
export function uuidv4(): string;
