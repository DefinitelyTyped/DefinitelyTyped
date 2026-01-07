/**
 * An object of key-value pairs with a major Electron version as the key,
 * and the corresponding major Chromium version as the value.
 */
export const versions: typeof import("./versions");
/**
 * An object of key-value pairs with a Electron version as the key,
 * and the corresponding full Chromium version as the value.
 */
export const fullVersions: typeof import("./full-versions");
/**
 * An object of key-value pairs with a major Chromium version as the key,
 * and the corresponding major Electron version as the value.
 */
export const chromiumVersions: typeof import("./chromium-versions");
/**
 * An object of key-value pairs with a Chromium version as the key,
 * and an array of the corresponding major Electron versions as the value.
 */
export const fullChromiumVersions: typeof import("./full-chromium-versions");

/**
 * A function that returns the corresponding Chromium version for a given Electron function.
 * If you provide it with a major Electron version, it will return a major Chromium version.
 * If you provide it with a full Electron version, it will return the full Chromium version.
 * If a query does not match a Chromium version, it will return `undefined`.
 */
export function electronToChromium(query: string | number): string | undefined;

/**
 * Returns a string with the corresponding Electron version for a given Chromium query.
 * If you provide it with a major Chromium version, it will return a major Electron version.
 * If you provide it with a full Chrome version, it will return an array of full Electron versions.
 * If a query does not match an Electron version, it will return `undefined`.
 */
export function chromiumToElectron(query: string | number): string | undefined;

/**
 * @deprecated
 * A function that returns a {@link https://github.com/browserslist/browserslist Browserslist} query
 * that matches the given major Electron version.
 * If you provide it with a major Electron version,
 * it will return a Browserlist query string that matches the Chromium capabilities.
 * If a query does not match a Chromium version, it will return `undefined`.
 */
export function electronToBrowserList(query: string | number): string | undefined;
