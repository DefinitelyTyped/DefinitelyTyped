// Type definitions for fingerprintjs 0.5.4
// Project: https://github.com/Valve/fingerprintjs
// Definitions by: Shunsuke Ohtani <https://github.com/zaneli>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare namespace FingerprintJs {

  interface FingerprintStatic {
    /**
     * Create Fingerprint object.
     */
    new(hasher: (key: string, seed: number) => number): Fingerprint;
    new(option: FingerprintOption): Fingerprint;
    new(): Fingerprint;
  }

  interface Fingerprint {
    /**
     * Generate fingerprint number.
     */
    get(): number;

    /**
     * Generate fingerprint number using Murmur hashing.
     * @param key ASCII only
     * @param seed Positive integer only
     */
    murmurhash3_32_gc(key: string, seed: number): number;

    /**
     * Check whether or not the browser has local storage.
     */
    hasLocalStorage(): boolean;

    /**
     * Check whether or not the browser has session storage.
     */
    hasSessionStorage(): boolean;

    /**
     * Check whether or not the browser supports canvas.
     */
    isCanvasSupported(): boolean;

    /**
     * Check whether or not the browser is IE.
     */
    isIE(): boolean;

    /**
     * Get plugins string.
     */
    getPluginsString(): string;

    /**
     * Get plugins string from navigator plugins.
     */
    getRegularPluginsString(): string;

    /**
     * Get plugins string from ActiveXObject.
     */
    getIEPluginsString(): string;

    /**
     * Get screen height and width.
     */
    getScreenResolution(): number[];

    /**
     * Get canvas data url string.
     */
    getCanvasFingerprint(): string;
  }

  interface FingerprintOption {
    /**
     * If you want to use canvas fingerprinting, set true.
     */
    canvas?: boolean;

    /**
     * If you want to use the screen resolution in calculating the fingerprint, set true.
     */
    screen_resolution?: boolean;

    /**
     * If you want to query the IE plugins info to further diversify the fingerprinting process, set true.
     */
    ie_activex?: boolean;

    /**
     * If you want to use custom hashing function, set function.
     */
    hasher?: (key: string, seed: number) => number;
  }
}

declare var Fingerprint: FingerprintJs.FingerprintStatic;
