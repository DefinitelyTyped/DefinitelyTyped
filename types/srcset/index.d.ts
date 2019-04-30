// Type definitions for srcset 1.0
// Project: https://github.com/sindresorhus/srcset#readme
// Definitions by: BendingBender <https://github.com/BendingBender>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/**
 * Parse the HTML `<img>`
 * [srcset](http://mobile.smashingmagazine.com/2013/08/21/webkit-implements-srcset-and-why-its-a-good-thing/) attribute.
 *
 * @param srcset An srcset string.
 */
export function parse(srcset: string): SrcSetDefinition[];

/**
 * Stringify a list of `SrcSetDefinition`s.
 *
 * @param srcSetDefinitions An array of `SrcSetDefinition` object.
 * @returns A srcset string.
 */
export function stringify(srcSetDefinitions: SrcSetDefinition[]): string;

export interface SrcSetDefinition {
    url: string;
    width?: number;
    height?: number;
    density?: number;
}
