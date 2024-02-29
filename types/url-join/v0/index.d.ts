/**
 * Join all arguments together and normalize the resulting url.
 * This works similar to path.join but you shouldn't use path.join for urls since it will work different depending of the operative systems but also doesn't work for some cases.
 */

declare function urljoin(...parts: string[]): string;

export = urljoin;
