/// <reference types="node" />

export type TimeOffsetFunction = () => number;

/**
 * Returns the current local Unix time
 * @param [timeOffset=0] - This many seconds will be added to the returned time
 * @returns the current local Unix time
 */
export function time(timeOffset?: number): number;

/**
 * Generate a Steam-style TOTP authentication code.
 * @param secret - Your TOTP shared_secret as a Buffer, hex, or base64
 * @param [timeOffset=0] - If you know how far off your clock is from the Steam servers, put the offset here in seconds
 * @returns the generated auth code
 */
export function generateAuthCode(secret: string, timeOffset?: number | TimeOffsetFunction): string;

/**
 * Generate a Steam-style TOTP authentication code.
 * @param secret - Your TOTP shared_secret as a Buffer, hex, or base64
 * @param [timeOffset=0] - If you know how far off your clock is from the Steam servers, put the offset here in seconds
 * @returns the generated auth code
 */
export function getAuthCode(secret: string, timeOffset?: number | TimeOffsetFunction): string;

/**
 * Generate a base64 confirmation key for use with mobile trade confirmations. The key can only be used once.
 * @param identitySecret - The identity_secret that you received when enabling two-factor authentication
 * @param time - The Unix time for which you are generating this secret. Generally should be the current time.
 * @param tag - The tag which identifies what this request (and therefore key) will be for.
 * "conf" to load the confirmations page, "details" to load details about a trade, "allow" to confirm a trade, "cancel" to cancel it.
 * @returns the generated confirmation key
 */
export function generateConfirmationKey(identitySecret: Buffer | string, time: number, tag: string): string;

/**
 * Generate a base64 confirmation key for use with mobile trade confirmations. The key can only be used once.
 * @param identitySecret - The identity_secret that you received when enabling two-factor authentication
 * @param time - The Unix time for which you are generating this secret. Generally should be the current time.
 * @param tag - The tag which identifies what this request (and therefore key) will be for.
 * "conf" to load the confirmations page, "details" to load details about a trade, "allow" to confirm a trade, "cancel" to cancel it.
 * @returns the generated confirmation key
 */
export function getConfirmationKey(identitySecret: Buffer | string, time: number, tag: string): string;

/**
 * Requests the time offset from the Steam API.
 * @param callback - The result of the steam api request
 * @param [timeOffset=0] - If you know how far off your clock is from the Steam servers, put the offset here in seconds
 * @returns the time offset
 */
export function getTimeOffset(callback: (error: Error, offset?: number, elapsedTime?: number) => void): void;

/**
 * Get a standardized device ID based on your SteamID.
 * @param steamID - Your SteamID, either as a string or as an object which has a toString() method that returns the SteamID
 * @returns the device ID
 */
export function getDeviceID(steamID: string | object): string;
