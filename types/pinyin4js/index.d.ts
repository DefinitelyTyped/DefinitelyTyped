// export = pinyin4js;
export as namespace pinyin4js;

export type WITH_TONE_NUMBER = string;
export type WITHOUT_TONE = string;
export type WITH_TONE_MARK = string;
export type FIRST_LETTER = string;
export type format = WITH_TONE_NUMBER | WITHOUT_TONE | WITH_TONE_MARK | FIRST_LETTER;

/**
 * pinyin4js
 * @npm https://www.npmjs.com/package/pinyin4js
 */
// declare module "pinyin4js" {}

/** 数字代表声调 */
export const WITH_TONE_NUMBER: WITH_TONE_NUMBER;
/** 不带声调 */
export const WITHOUT_TONE: WITHOUT_TONE;
/** 带声调 */
export const WITH_TONE_MARK: WITH_TONE_MARK;
/** 首字母风格 */
export const FIRST_LETTER: FIRST_LETTER;

export function convertToPinyinString(str: string, separator: string, format: format): string;
/**
 * 首字母风格
 * '厦门你好大厦厦门' ==> xmnhdsxm
 */
export function getShortPinyin(str: string): string;
/** 转换为简体中文 */
export function convertToSimplifiedChinese(str: string): string;
/** 转换为繁体中文 */
export function convertToTraditionalChinese(str: string): string;
