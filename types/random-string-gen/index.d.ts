type Type = "alphanumeric" | "alphabetic" | "numeric" | "hex" | "binary" | "octal" | "ascii-printable";
type Capitalization = "lowercase" | "uppercase";
interface GenerateOptions {
    /**
     * This is the length of the returned string. Setting this to `0` or a negative
     * eg: `-1` means an empty string will be returned.
     *
     * @default 32
     */
    length?: number;
    /**
     * Define the character set for the string.
     *
     * @param alphanumeric [0-9 a-z A-Z]
     * @param alphabetic [a-z A-Z]
     * @param numeric [0-9]
     * @param hex [0-9 a-f]
     * @param binary [01]
     * @param octal [0-7]
     * @param ascii-printable [0-7 a-z A-Z !"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~ ]
     *
     * @default 'alphanumeric'
     */
    type?: Type;
    /**
     * Define a custom character set to use.
     * This overrides whatever `type` is set.
     *
     * @default ' '
     */
    charset?: string;
    /**
     * Define whether the output should be `lowercase` or `uppercase` only.
     * Ignore this option to return both in the string.
     *
     * @default null
     */
    capitalization?: Capitalization;
}

/**
 * A Library to help you create random strings in your code. Can be useful for
 * creating an identifier (id), slug, salt, PIN code, strong passwords, fixture, etc.
 *
 * Based on whatever is preferred, this takes any of three parameters (or no parameters
 * at all and returns a `32` length `alphanumeric` random string by default).
 *
 * @param String Sets the character set with the remaining option default values
 * @param Number Sets the length of the string with the remaining option default values
 * @param Options An object with the preferred options for the string
 *
 * @returns a random `string` based on the options set.
 */
declare function randomString(options?: GenerateOptions | number | string): string;
export = randomString;
