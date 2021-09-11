/**
 * Simple JSONP helper. Supports error callbacks and a custom callback param.
 * The error callback will be called when no JSONP is executed after 10 seconds.
 */
export function jsonp(url: string, callback: () => void, opt_errback?: () => void, opt_callbackParam?: string): void;
