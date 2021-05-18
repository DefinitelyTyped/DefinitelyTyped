// Type definitions for libphonenumber v7.4.3
// Project: https://github.com/googlei18n/libphonenumber, https://github.com/seegno/google-libphonenumber
// Definitions by: Leon Yu <https://github.com/leonyu>
//           Roman Jurkov <https://github.com/winfinit>
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

    export class PhoneNumber {
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

        export enum MatchType {
            EXACT_MATCH,
            NO_MATCH,
            NOT_A_NUMBER,
            NSN_MATCH,
            SHORT_NSN_MATCH
        }
    }

    class StringBuffer {
        constructor(opt_a1?: any, ...var_args: any[]);
        append(a1: any, opt_a2?: any, ...var_args: any[]): StringBuffer;
        toString(): string;
    }

    export class PhoneNumberUtil {
        static getInstance(): PhoneNumberUtil
        extractCountryCode(fullNumber: StringBuffer, nationalNumber: StringBuffer): number;
        format(phoneNumber: PhoneNumber, format: PhoneNumberFormat): string;
        formatInOriginalFormat(phoneNumber: PhoneNumber, regionDialingFrom?: string): string;
        formatOutOfCountryCallingNumber(phoneNumber: PhoneNumber, regionDialingFrom?: string): string;
        getNddPrefixForRegion(regionCode?: string, stripNonDigits?: boolean): string | undefined;
        getNumberType(phoneNumber: PhoneNumber): PhoneNumberType;
        getCountryCodeForRegion(supportedRegion:string):number;
        getExampleNumber(regionCode: string): PhoneNumber;
        getExampleNumberForType(regionCode: string, type: PhoneNumberType): PhoneNumber;
        getRegionCodeForCountryCode(countryCallingCode: number): string;
        getRegionCodeForNumber(phoneNumber: PhoneNumber): string | undefined;
        getSupportedRegions():string [];
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
        isNumberMatch(firstNumber: string | PhoneNumber, secondNumber: string | PhoneNumber): PhoneNumberUtil.MatchType;
        getLengthOfGeographicalAreaCode(number: PhoneNumber): number;
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
