// Type definitions for node-browser-history 1.0.4
// Project: https://github.com/MyOutDeskLLC/node-browser-history
// Definitions by: Arindam Dawn <https://github.com/arindamdawn>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/**
 * Gets the history for the Specified browsers and time in minutes.
 * Returns an array of browser records.
 * @param historyTimeLength | Integer
 * @returns {Promise<array>}
 */
export function getAllHistory(historyTimeLength?: number): any[];
/**
 * Gets Firefox history
 * @param historyTimeLength time is in minutes
 * @returns {Promise<array>}
 */
export function getFirefoxHistory(historyTimeLength?: number): Promise<any[]>;
/**
 * Gets Seamonkey History
 * @param historyTimeLength time is in minutes
 * @returns {Promise<array>}
 */
export function getSeaMonkeyHistory(historyTimeLength?: number): Promise<any[]>;
/**
 * Gets Chrome History
 * @param historyTimeLength time is in minutes
 * @returns {Promise<array>}
 */
export function getChromeHistory(historyTimeLength?: number): Promise<any[]>;
/**
 * Gets Opera History
 * @param historyTimeLength time is in minutes
 * @returns {Promise<array>}
 */
export function getOperaHistory(historyTimeLength?: number): Promise<any[]>;
/**
 * Gets Torch History
 * @param historyTimeLength time is in minutes
 * @returns {Promise<array>}
 */
export function getTorchHistory(historyTimeLength?: number): Promise<any[]>;
/**
 * Gets Safari History
 * @param historyTimeLength time is in minutes
 * @returns {Promise<array>}
 */
export function getSafariHistory(historyTimeLength?: number): Promise<any[]>;
/**
 * Gets Maxthon History
 * @param historyTimeLength time is in minutes
 * @returns {Promise<array>}
 */
export function getMaxthonHistory(historyTimeLength?: number): Promise<any[]>;
/**
 * Gets Vivaldi History
 * @param historyTimeLength time is in minutes
 * @returns {Promise<array>}
 */
export function getVivaldiHistory(historyTimeLength?: number): Promise<any[]>;
/**
 * Gets IE History
 * @param historyTimeLength time is in minutes
 * @returns {Promise<array>}
 */
export function getIEHistory(historyTimeLength?: number): Promise<any[]>;
