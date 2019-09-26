// Type definitions for expand-tilde 2.0
// Project: https://github.com/jonschlinkert/expand-tilde
// Definitions by: Chris Arnesen <https://github.com/carnesen>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/**
 * Bash-like tilde expansion for node.js.
 * Expands a leading tilde (~) in a file path to the user home directory, or ~+ to the cwd.
 *
 * @param {string} filePath - a file path to expand
 * @returns {string} the expanded file path
 */
declare function expandTilde(filePath: string): string;

export = expandTilde;
