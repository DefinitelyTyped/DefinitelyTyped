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
