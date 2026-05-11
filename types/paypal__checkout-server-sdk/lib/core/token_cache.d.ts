/**
 * Documentation
 *
 * @see {@link https://github.com/paypal/Checkout-NodeJS-SDK/blob/develop/lib/core/token_cache.js}
 */

import paypalhttp = require("@paypal/paypalhttp");
import { AccessToken } from "./access_token";

declare class TokenCache {
    static cacheForEnvironment<T extends paypalhttp.Environment>(environment: T, refreshToken?: string): T;

    constructor();

    /**
     * Gets the current token for the client
     */
    getToken(): AccessToken | null;

    /**
     * Sets the token for the current client also setting its status to absent or valid if the token exist or not
     * @param token - The current token for the client or null to remove it
     */
    setToken(token: AccessToken | null): void;

    lock(): void;

    unlock(): void;

    isLocked(): boolean;

    isValid(): boolean;

    isPresent(): boolean;

    /**
     * Add a request to the queue and wait for the notify method to signal error or completion
     * @param request - The request to be queued
     */
    wait<T = any>(request: T): Promise<T>;

    /**
     * Flush the request queue resolving every call in the order they were added or rejects all calls if an error is provided
     * @param err - An optional error that rejects all requests instead of resolving them
     */
    notify(err?: any[]): void;
}

export { TokenCache };
