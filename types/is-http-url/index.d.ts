export = isHttpUrl;

/**
 * Validate URLs for sane values.
 *
 * Does the following:
 *
 * - Protocol should be one of `http:` or `https:`
 * - Hostname should be [valid domain](http://github.com/emilbayes/is-domain-name) name or IPv4 address (TODO: IPv6)
 * - Port, if given, should be an integer in the range `[1, 65535]`
 *
 * @example
 * // Example usage could be to validate the Origin or Referer HTTP headers
 * import * as assert from 'assert'
 * import isHttpUrl = require('is-http-url')
 *
 * assert.ok(isHttpUrl('http://example.com/hello-world.txt'))
 * assert.ok(!isHttpUrl('//test'))
 */
declare function isHttpUrl(url: string): boolean;
