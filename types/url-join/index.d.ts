// Type definitions for url-join 4.0
// Project: https://github.com/jfromaniello/url-join
// Definitions by: Rogier Schouten <https://github.com/rogierschouten>
//                 Mike Deverell <https://github.com/devrelm>
//                 BendingBender <https://github.com/BendingBender>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/**
 * Join all arguments together and normalize the resulting url.
 * This works similar to `path.join` but you shouldn't use `path.join` for urls since it works
 * differently depending on the operating system and also doesn't work for some cases.
 */
declare function urljoin(...parts: string[]): string;
declare function urljoin(parts: string[]): string;

export = urljoin;
export as namespace urljoin;
