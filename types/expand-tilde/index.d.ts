/**
 * Bash-like tilde expansion for node.js.
 * Expands a leading tilde (~) in a file path to the user home directory, or ~+ to the cwd.
 *
 * @param {string} filePath - a file path to expand
 * @returns {string} the expanded file path
 */
declare function expandTilde(filePath: string): string;

export = expandTilde;
