/**
 * Force a service worker to become active, instead of waiting. This is
 * normally used in conjunction with `clientsClaim()`.
 */
export function skipWaiting(): void;
