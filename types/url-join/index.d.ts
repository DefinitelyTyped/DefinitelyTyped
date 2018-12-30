// Type definitions for url-join v0.8.3
// Project: https://github.com/jfromaniello/url-join
// Definitions by: Rogier Schouten <https://github.com/rogierschouten>, Mike Deverell <https://github.com/devrelm>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/**
 * Join all arguments together and normalize the resulting url.
 *
 * This works similar to path.join except it works properly for URIs and URLs. `path.join` shouldn't be used for URLs since
 * it works differently depending on the operating system and doesn't work for some cases. 
 */

declare var urljoin: (...parts: string[]) => string;

declare module "url-join" {
    export = urljoin;
}
