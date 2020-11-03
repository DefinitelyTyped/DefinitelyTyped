// Type definitions for kyujitai 1.3
// Project: https://github.com/hakatashi/kyujitai.js
// Definitions by: Piotr Błażejewicz <https://github.com/peterblazejewicz>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
export as namespace Kyujitai;

/**
 * Utility collections for making Japanese text old-fashioned.
 */
declare class Kyujitai {
    constructor(options?: Kyujitai.Options, callback?: Kyujitai.InitializeCallback);
    constructor(callback: Kyujitai.InitializeCallback);

    /**
     * Encode string from shinjitai to kyujitai.
     * @param str Input string
     * @param [options]
     */
    encode(str: string, options?: Kyujitai.EncodeOptions): string;

    /**
     * Decode string from kyujitai to shinjitai.
     */
    decode(str: string, options?: Kyujitai.DecodeOptions): string;
}

declare namespace Kyujitai {
    interface Options {
        /**
         * the path to ivd.json file.
         * Valid only in browser.
         * Default is the same directory to the ivs.js file.
         */
        ivd?: string;

        kyujitai?: string;
    }

    /**
     * Called when construction completed
     */
    type InitializeCallback = (error: Error | null) => void;

    interface EncodeOptions {
        /**
         * `true` if you want to allow IVS for the encoded string
         * @default false
         */
        IVD?: boolean;
    }

    /** unused */
    interface DecodeOptions {
        [key: string]: unknown;
    }
}

export = Kyujitai;
