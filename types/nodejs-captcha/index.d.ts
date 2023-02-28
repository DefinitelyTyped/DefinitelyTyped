// Type definitions for nodejs-captcha 0.0
// Project: https://github.com/ozgur-dogan/nodejs-captcha
// Definitions by: JPBM135 <https://github.com/JPBM135>
//                 BendingBender <https://github.com/BendingBender>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export = captcha;

/**
 * Creates Captcha in base64 format.
 *
 * @param options List of options, all of which are optional.
 * @return A captcha object.
 *
 * @example
 * import captcha = require("nodejs-captcha");
 *
 * // Create new Captcha
 * const newCaptcha = captcha();
 *
 * // Value of the captcha
 * const value = newCaptcha.value
 *
 * // Image in base64
 * const imageBase64 = newCaptcha.image;
 *
 * // Width of the image
 * const width = newCaptcha.width;
 *
 * // Height of the image
 * const height = newCaptcha.height;
 */
declare function captcha(options?: captcha.Options): captcha.Captcha;

declare namespace captcha {
    interface Options {
        /**
         * The character set to use for the captcha.
         * @default {'1234567890abcdefghijklmnoprstuvyz'.split('')}
         */
        charset?: readonly string[] | undefined;
        /**
         * The length of the captcha.
         * @default 6
         * @throws {Error} If the length is less than 1.
         */
        length?: number | undefined;
        /**
         * The value of the text to display on the captcha.
         * @throws {Error} If the length of the value is different than the length.
         */
        value?: string | undefined;
        /**
         * The width of the captcha.
         * @default 200
         * @throws {Error} If the width is less than 40.
         */
        width?: number | undefined;
        /**
         * The height of the captcha.
         * @default 100
         * @throws {Error} If the height is less than 50.
         */
        height?: number | undefined;
        /**
         * Number of noise circles to add to the captcha.
         * @default {10-25} Randomly generated
         */
        numberOfCircles?: number | undefined;
    }

    interface Captcha {
        /**
         * The text value encoded on the captcha.
         */
        value: string;
        /**
         * The width of the captcha.
         */
        width: number;
        /**
         * The height of the captcha.
         */
        height: number;
        /**
         * The image data of the captcha as a data URL.
         *
         * **Base64-encoded data URL** (contains `data:image/png;base64`)
         */
        image: string;
    }
}
