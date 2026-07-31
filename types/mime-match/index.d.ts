/**
 * A simple function to checker whether a target mime type matches a mime-type pattern (e.g. `image/jpeg` matches `image/jpeg` OR `image/*`).
 *
 * @example
 * var match = require('mime-match');
 *
 * // exact match
 * console.log(match('image/jpeg', 'image/jpeg'));
 * // --> true
 *
 * // wildcard match
 * console.log(match('image/jpeg', 'image/*'));
 * // --> true
 *
 * // find which of our wildcard patterns matches a specific mimetype
 * console.log(['application/*', 'image/*'].filter(match('image/jpeg')));
 * // --> ['image/*']
 *
 * // charset suffix is ignored
 * console.log(match('application/json', 'application/json; charset=utf-8'));
 * // --> true
 */
declare function match(target: string): (pattern: string) => boolean;
declare function match(target: string, pattern: string): boolean;

export = match;
