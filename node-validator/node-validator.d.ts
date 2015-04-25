// Type definitions for node-validator
// Project: https://github.com/Vadorequest/node-validator
// Definitions by: Vadorequest <https://github.com/vadorequest>

/// <reference path="../node/node.d.ts" />

declare class validator {
    private static email: string;
    private static url: string;
    private static creditCard: string;
    private static isbn10Maybe: string;
    private static isbn13Maybe: string;
    private static ipv4Maybe: string;
    private static ipv6: string;
    private static uuid: string;
    private static alpha: string;
    private static alphanumeric: string;
    private static numeric: string;
    private static int: string;
    private static float: string;
    private static hexadecimal: string;
    private static hexcolor: string;

    public static toString(input: any): string;
    public static toDate(date: any): Date;
    public static toFloat(str: string): number;
    public static toInt(str: string, radix?: number): number;
    public static toBoolean(str: string, strict?: boolean): boolean;
    public static equals(str: string, comparison: string): boolean;
    public static contains(str: any, elem: string): boolean;
    public static matches(str: string, pattern: string, modifiers?: string): boolean;
    public static isEmail(str: string): boolean;
    public static isURL(str: string): boolean;
    public static isIP(str: string, version?: string): boolean;
    public static isAlpha(str: string): boolean;
    public static isAlphanumeric(str: string): boolean;
    public static isNumeric(str: string): boolean;
    public static isHexadecimal(str: string): boolean;
    public static isHexColor(str: string): boolean;
    public static isLowercase(str: string): boolean;
    public static isUppercase(str: string): boolean;
    public static isInt(str: string): boolean;
    public static isFloat(str: string): boolean;
    public static isDivisibleBy(str: number, num: any): boolean;
    public static isNull(str: string): boolean;
    public static isLength(str: string, min?: number, max?: number): boolean;
    public static isUUID(str: string, version?: string): boolean;
    public static isDate(str: string): boolean;
    public static isAfter(str: string, date: string): boolean;
    public static isBefore(str: string, date: string): boolean;
    public static isIn(str: string, options: any): boolean;
    public static isCreditCard(str: string): boolean;
    public static isISBN(str: string, version?: string): boolean;
    public static ltrim(str: string, chars: string): boolean;
    public static rtrim(str: string, chars: string): boolean;
    public static trim(str: string, chars: string): boolean;
    public static escape(str: string): boolean;
    public static whitelist(str: string, chars: string): boolean;
    public static blacklist(str: string, chars: string): boolean;
}
