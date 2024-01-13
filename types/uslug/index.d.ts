/**
 * Generate a slug for the string passed.
 * @param value The string you want to slugify
 * @param options An optional object that can contain:
 *   - allowedChars: a String of chars that you want to be whitelisted. Default: '-_~'.
 *   - lower: a Boolean to force to lower case the slug. Default: true.
 *   - spaces: a Boolean to allow spaces. Default: false.
 */
declare function uslug(value: string, options?: uslug.UslugOptions): string;

declare namespace uslug {
    interface UslugOptions {
        allowedChars?: string | undefined;
        lower?: boolean | undefined;
        spaces?: boolean | undefined;
    }
}

export = uslug;
