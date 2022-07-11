// Type definitions for ssdeep.js 0.0
// Project: https://github.com/ozgur-dogan/nodejs-captcha
// Definitions by: JPBM135 <https://github.com/JPBM135>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export interface captchaValue {
	/**
	 * The text value encoded on the captcha
	 */
    value: string;
	/**
	 * The width of the captcha
	 */
    width: number;
	/**
	 * The height of the captcha
	 */
    height: number;
	/**
	 * The image data of the captcha
	 * @type Base64 string
	 */
    image: string;
}

export interface captchaOptions {
	/**
	 * The character set to use for the captcha.
	 * @default {'1234567890abcdefghijklmnoprstuvyz'.split('')}
	 */
	charset?: string[],
	/**
	 * The length of the captcha.
	 * @default 6
	 * @throws {Error} If the length is less than 1
	 */
	length?: number,
	/**
	 * The value of the text to display on the captcha.
	 * @default 'Randomly generated using the charset'
	 * @throws {Error} If the length of the value is different than the length
	 */
	value?: string,
	/**
	 * The width of the captcha.
	 * @default 200
	 * @throws {Error} If the width is less than 40
	 */
	width?: number,
	/**
	 * The height of the captcha.
	 * @default 100
	 * @throws {Error} If the height is less than 50
	 */
	height?: number,
	/**
	 * Number of noise circles to add to the captcha.
	 * @default {10-25} Randomly generated
	 */
	numberOfCircles?: number,
}

/**
 * Returns a captcha object
 * @param p List of options, all of which are optional.
 */
export default function captcha(p: captchaOptions): captchaValue;

export as namespace captcha;
