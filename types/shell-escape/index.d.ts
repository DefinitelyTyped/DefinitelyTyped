/**
 * Escape and stringify an array of arguments to be executed on the shell.
 *
 * @example
 * import shellescape = require('shell-escape');
 *
 * const simpleArgs = ['curl', '-H', 'Location;', '-H', 'User-Agent: dave#10', 'https://example.com?foo=bar&baz=quux'];
 * console.log(shellescape(simpleArgs));
 * // => curl -H 'Location;' -H 'User-Agent: dave#10' 'https://example.com?foo=bar&baz=quux'
 *
 * const advancedArgs = ['echo', 'hello!', 'how are you doing $USER', '"double"', "'single'"];
 * console.log(shellescape(advancedArgs));
 * // => echo 'hello!' 'how are you doing $USER' '"double"' \''single'\'
 */
declare function shellEscape(args: readonly string[]): string;

export = shellEscape;
