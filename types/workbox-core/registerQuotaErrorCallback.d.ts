/**
 * Adds a function to the set of quotaErrorCallbacks that will be executed if
 * there's a quota error.
 *
 * @param callback
 */
export function registerQuotaErrorCallback(callback: () => void): void;
