export = splitter;

/**
 * Accepts a string consisting of one or more valid JSON substrings and splits it. Any remaining string after the end of the last complete JSON substring is returned in the 'remainder' field.
 *
 * Passing in invalid JSON can result in garbage output
 *
 * @alias splitter
 * @since 1.0.0
 * @param string The string to look for JSON in
 *
 * @example
 * import splitter = require("json-string-splitter");
 *
 * const pieces = splitter('{"foo":"bar"}{"more":"json"}{"partial":"json"');
 *
 * pieces.jsons[0]; // '{"foo":"bar"}'
 * pieces.jsons[1]; // '{"more":"json"}'
 * pieces.remainder; // '{"partial":"json"'
 */
declare function splitter(string: string): { jsons: string[]; remainder: string };
