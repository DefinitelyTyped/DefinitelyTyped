// Type definitions for shell-escape 0.2
// Project: https://github.com/xxorax/node-shell-escape
// Definitions by: Miloslav Nenadál <https://github.com/nenadalm>
//                 BendingBender <https://github.com/BendingBender>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

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
