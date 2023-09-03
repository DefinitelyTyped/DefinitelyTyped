// Type definitions for ospath 1.2
// Project: https://github.com/jprichardson/ospath#readme
// Definitions by: Kishan Gajera <https://github.com/kgajera>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/**
 * Returns the directory where an application should store its data directory.
 */
export function data(): string;

/**
 * Returns the user's desktop directory.
 */
export function desktop(): string;

/**
 * Returns the user's home directory.
 */
export function home(): string;

/**
 * Returns a temporary directory.
 */
export function tmp(): string;
