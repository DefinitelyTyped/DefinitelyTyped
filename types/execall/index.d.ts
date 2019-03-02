// Type definitions for execall 1.0
// Project: https://github.com/sindresorhus/execall
// Definitions by: BendingBender <https://github.com/BendingBender>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export = execall;

/**
 * Find multiple RegExp matches in a string. Instead of having to iterate over
 * `RegExp#exec`, immutable, and with a nicer result format.
 *
 * @param re Regular expression to match against the `input`.
 * @returns An array of matches.
 */
declare function execall(re: RegExp, input: string): execall.Match[];

declare namespace execall {
    interface Match {
        match: string;
        sub: string[];
        index: number;
    }
}
