// Type definitions for is-ssh 1.3
// Project: https://github.com/IonicaBizau/node-is-ssh
// Definitions by: Florian Keller <https://github.com/ffflorian>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/**
 * @param input The input url or an array of protocols.
 * @returns `true` if the input is a ssh url, `false` otherwise.
 */
declare function isSsh(input: string | string[]): boolean;

export = isSsh;
