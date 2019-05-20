// Type definitions for uslug 1.0
// Project: https://github.com/jeremys/uslug
// Definitions by: Junyoung Choi <https://github.com/rokt33r>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

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
    allowedChars?: string;
    lower?: boolean;
    spaces?: boolean;
  }
}

export = uslug;
