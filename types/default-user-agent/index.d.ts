// Type definitions for default-user-agent 1.0
// Project: https://github.com/node-modules/default-user-agent
// Definitions by: BendingBender <https://github.com/BendingBender>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export = defaultUserAgent;

/**
 * Get the default user agent string for Node.js http request.
 *
 * @example
 * import ua = require('default-user-agent');
 *
 * // darwin
 * console.log(ua()); // 'Node.js/0.11.15 (OS X Yosemite; x64)'
 * console.log(ua('urllib', '0.0.1')); // 'urllib/0.0.1 Node.js/0.11.15 (OS X Yosemite; x64)'
 *
 * // linux
 * // 'Node.js/0.11.15 (Linux 3.13; x64)'
 */
declare function defaultUserAgent(): string;
declare function defaultUserAgent(name: string, version: string): string;
