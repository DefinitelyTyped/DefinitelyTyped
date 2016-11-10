// Type definitions for libphonenumber v7.4.3
// Project: https://github.com/googlei18n/libphonenumber
// Project: https://github.com/seegno/google-libphonenumber
// Definitions by: Leon Yu <https://github.com/leonyu>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare namespace libphonenumber {
    export enum PhoneNumberFormat {
        E164,
        INTERNATIONAL,
        NATIONAL,
        RFC3966
    }

    interface PhoneNumber {
    }

    export class PhoneNumberUtil {
        static getInstance(): PhoneNumberUtil
        parse(number: string, region: string): PhoneNumber;
        isValidNumber(phoneNumber: PhoneNumber): boolean;
        isPossibleNumber(phoneNumber: PhoneNumber): boolean;
        isValidNumberForRegion(phoneNumber: PhoneNumber): boolean;
        getRegionCodeForNumber(phoneNumber: PhoneNumber): string;
        isNANPACountry(regionCode: string): boolean;
        format(phoneNumber: PhoneNumber, format: PhoneNumberFormat): string;
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
