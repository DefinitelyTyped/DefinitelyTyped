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

    export module PhoneNumber {
        export enum CountryCodeSource {
            FROM_NUMBER_WITH_PLUS_SIGN = 1,
            FROM_NUMBER_WITH_IDD = 5,
            FROM_NUMBER_WITHOUT_PLUS_SIGN = 10,
            FROM_DEFAULT_COUNTRY = 20,
        }
    }

    export interface PhoneNumber {
        getCountryCode(): number | undefined;
        getCountryCodeOrDefault(): number;
        setCountryCode(value: number): void;
        hasCountryCode(): boolean;
        countryCodeCount(): number;
        clearCountryCode(): void;

        getNationalNumber(): number | undefined;
        getNationalNumberOrDefault(): number;
        setNationalNumber(value: number): number;
        hasNationalNumber(): boolean;
        nationalNumberCount(): number;
        clearNationalNumber(): void;

        getExtension(): string | undefined;
        getExtensionOrDefault(): string;
        setExtension(value: string): void;
        hasExtension(): boolean;
        extensionCount(): number;
        clearExtension(): void;

        getItalianLeadingZero(): boolean | undefined;
        getItalianLeadingZeroOrDefault(): boolean;
        setItalianLeadingZero(value: boolean): void;
        hasItalianLeadingZero(): boolean;
        italianLeadingZeroCount(): number;
        clearItalianLeadingZero(): void;

        getNumberOfLeadingZeros(): number | undefined;
        getNumberOfLeadingZerosOrDefault(): number;
        setNumberOfLeadingZeros(value: number): void;
        hasNumberOfLeadingZeros(): boolean;
        numberOfLeadingZerosCount(): number;
        clearNumberOfLeadingZeros(): void;

        getRawInput(): string | undefined;
        getRawInputOrDefault(): string;
        setRawInput(value: string): void;
        hasRawInput(): boolean;
        rawInputCount(): number;
        clearRawInput(): void;

        getCountryCodeSource(): PhoneNumber.CountryCodeSource | undefined;
        getCountryCodeSourceOrDefault(): PhoneNumber.CountryCodeSource;
        setCountryCodeSource(value: PhoneNumber.CountryCodeSource): void;
        hasCountryCodeSource(): boolean;
        countryCodeSourceCount(): number;
        clearCountryCodeSource(): void;

        getPreferredDomesticCarrierCode(): string | undefined;
        getPreferredDomesticCarrierCodeOrDefault(): string;
        setPreferredDomesticCarrierCode(value: string): void;
        hasPreferredDomesticCarrierCode(): boolean;
        preferredDomesticCarrierCodeCount(): number;
        clearPreferredDomesticCarrierCode(): void;
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
        format(phoneNumber: PhoneNumber, format: PhoneNumberFormat): string;
        getNddPrefixForRegion(regionCode?: string, stripNonDigits?: boolean): string | undefined;
        getNumberType(phoneNumber: PhoneNumber): PhoneNumberType;
        getRegionCodeForCountryCode(countryCallingCode: number): string;
        getRegionCodeForNumber(phoneNumber: PhoneNumber): string | undefined;
        isAlphaNumber(number: string): boolean;
        isLeadingZeroPossible(countryCallingCode: number): boolean;
        isNANPACountry(regionCode?: string): boolean;
        isPossibleNumber(number: PhoneNumber): boolean;
        isPossibleNumber(phoneNumber: PhoneNumber): boolean;
        isPossibleNumberForType(number: PhoneNumber, type: PhoneNumberType): boolean;
        isPossibleNumberForTypeWithReason(number: PhoneNumber, type: PhoneNumberType): PhoneNumberUtil.ValidationResult;
        isPossibleNumberString(number: string, regionDialingFrom: string): boolean;
        isPossibleNumberWithReason(number: PhoneNumber): PhoneNumberUtil.ValidationResult;
        isPossibleNumberWithReason(phoneNumber: PhoneNumber): PhoneNumberUtil.ValidationResult;
        isValidNumber(phoneNumber: PhoneNumber): boolean;
        isValidNumberForRegion(phoneNumber: PhoneNumber, region?: string): boolean;
        parse(number?: string, region?: string): PhoneNumber;
        parseAndKeepRawInput(number: string, regionCode?: string): PhoneNumber;
        truncateTooLongNumber(number: PhoneNumber): boolean;
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
