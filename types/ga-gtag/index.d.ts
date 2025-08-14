/// <reference types="gtag.js" />

/**
 * Adds the Global Site Tag script element into `<head>`. It only needs to be
 * called once, but can safely be called multiple times (the script won't be
 * re-added).
 *
 * @param trackingId - Your tracking ID (begins with "G-", "UA-", "AW-" or
 * "DC-")
 * @param additionalConfigInfo - Specify additional config info for the
 * initialization
 */
export function install(trackingId: string, additionalConfigInfo?: Gtag.GtagCommands["config"][1]): void;

/**
 * Initializes `window.dataLayer` to allow calling `gtag()` before the Global
 * Site Tag script is installed with `install()` (for instance, to manage
 * consent settings in consent mode).
 */
export function initDataLayer(): void;

/**
 * Calls a Google tag API command.
 */
export const gtag: Gtag.Gtag;
