// Type definitions for libphonenumber v7.4.3
// Project: https://github.com/googlei18n/libphonenumber, https://github.com/seegno/google-libphonenumber
// Definitions by: Leon Yu <https://github.com/leonyu>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare namespace libphonenumber {
    export enum PhoneNumberFormat {
        E164,
        INTERNATIONAL,
        NATIONAL,
        RFC3966
    }

    export enum PhoneNumberType {
        FIXED_LINE = 0,
        MOBILE = 1,
        FIXED_LINE_OR_MOBILE = 2,
        TOLL_FREE = 3,
        PREMIUM_RATE = 4,
        SHARED_COST = 5,
        VOIP = 6,
        PERSONAL_NUMBER = 7,
        PAGER = 8,
        UAN = 9,
        VOICEMAIL = 10,
        UNKNOWN = -1
    }

    interface PhoneNumber {
    }

    export module PhoneNumberUtil {
        export enum ValidationResult {
            IS_POSSIBLE,
            INVALID_COUNTRY_CODE,
            TOO_SHORT,
            TOO_LONG
        }
    }

    export class PhoneNumberUtil {
        static getInstance(): PhoneNumberUtil
        parse(number: string, region: string): PhoneNumber;
        isValidNumber(phoneNumber: PhoneNumber): boolean;
        isPossibleNumber(phoneNumber: PhoneNumber): boolean;
        isPossibleNumberWithReason(phoneNumber: PhoneNumber): PhoneNumberUtil.ValidationResult;
        isValidNumberForRegion(phoneNumber: PhoneNumber, region: string): boolean;
        getNumberType(phoneNumber: PhoneNumber): PhoneNumberType; 
        getRegionCodeForNumber(phoneNumber: PhoneNumber): string;
        isNANPACountry(regionCode: string): boolean;
        format(phoneNumber: PhoneNumber, format: PhoneNumberFormat): string;
        parseAndKeepRawInput(number: string, regionCode: string): PhoneNumber;
    }

    export class AsYouTypeFormatter {
        constructor(region: string);
        inputDigit(digit: string): string;
        clear(): void;
    }
}


declare module 'google-libphonenumber' {
    export = libphonenumber;
}
