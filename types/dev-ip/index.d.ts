// Type definitions for dev-ip 1.0
// Project: https://github.com/shakyshane/dev-ip
// Definitions by: Mike Engel <https://github.com/mike-engel>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/**
 * Returns either an array of IP addresses or false if none can be found (offline, etc)
 */
declare function devIp(): string[] | boolean;

export = devIp;
