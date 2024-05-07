declare namespace libphonenumber {
    export enum PhoneNumberFormat {
        E164,
        INTERNATIONAL,
        NATIONAL,
        RFC3966,
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
        UNKNOWN = -1,
    }

    export namespace PhoneNumber {
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

    export namespace PhoneNumberUtil {
        export enum ValidationResult {
            /** The number length matches that of valid numbers for this region. =0 */
            IS_POSSIBLE,
            /** The number has an invalid country calling code. =1 */
            INVALID_COUNTRY_CODE,
            /** The number is shorter than all valid numbers for this region. =2 */
            TOO_SHORT,
            /** The number is longer than all valid numbers for this region. =3 */
            TOO_LONG,
            /**
             * The number length matches that of local numbers for this region only (i.e.
             * numbers that may be able to be dialled within an area, but do not have all
             * the information to be dialled from anywhere inside or outside the country).
             * =4
             */
            IS_POSSIBLE_LOCAL_ONLY,
            /**
             * The number is longer than the shortest valid numbers for this region,
             * shorter than the longest valid numbers for this region, and does not itself
             * have a number length that matches valid numbers for this region.
             * This can also be returned in the case where
             * isPossibleNumberForTypeWithReason was called, and there are no numbers of
             * this type at all for this region.
             * =5
             */
            INVALID_LENGTH,
        }

        export enum MatchType {
            EXACT_MATCH,
            NO_MATCH,
            NOT_A_NUMBER,
            NSN_MATCH,
            SHORT_NSN_MATCH,
        }
    }

    class StringBuffer {
        constructor(opt_a1?: any, ...var_args: any[]);
        append(a1: any, opt_a2?: any, ...var_args: any[]): StringBuffer;
        toString(): string;
    }

    export class PhoneNumberUtil {
        static getInstance(): PhoneNumberUtil;
        extractCountryCode(fullNumber: StringBuffer, nationalNumber: StringBuffer): number;
        format(phoneNumber: PhoneNumber, format: PhoneNumberFormat): string;
        formatInOriginalFormat(phoneNumber: PhoneNumber, regionDialingFrom?: string): string;
        formatOutOfCountryCallingNumber(phoneNumber: PhoneNumber, regionDialingFrom?: string): string;
        getNddPrefixForRegion(regionCode?: string, stripNonDigits?: boolean): string | undefined;
        getNumberType(phoneNumber: PhoneNumber): PhoneNumberType;
        getCountryCodeForRegion(supportedRegion: string): number;
        getExampleNumber(regionCode: string): PhoneNumber;
        getExampleNumberForType(regionCode: string, type: PhoneNumberType): PhoneNumber;
        getRegionCodeForCountryCode(countryCallingCode: number): RegionCode | RegionCodeUnknown;
        getRegionCodeForNumber(phoneNumber: PhoneNumber): RegionCode | undefined;
        getSupportedRegions(): RegionCode[];
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
        getNationalSignificantNumber(number: PhoneNumber): string;
        getLengthOfNationalDestinationCode(number: PhoneNumber): number;
    }

    export class AsYouTypeFormatter {
        constructor(region: string);
        inputDigit(digit: string): string;
        clear(): void;
    }

    export namespace ShortNumberInfo {
        /** Cost categories of short numbers. */
        export enum ShortNumberCost {
            TOLL_FREE = 0,
            STANDARD_RATE = 1,
            PREMIUM_RATE = 2,
            UNKNOWN_COST = 3,
        }
    }

    export class ShortNumberInfo {
        /** Returns the singleton instance of the ShortNumberInfo. */
        static getInstance(): ShortNumberInfo;

        /**
         * Check whether a short number is a possible number when dialed from the given region. This
         * provides a more lenient check than {@link ShortNumberInfo.isValidShortNumberForRegion}.
         *
         * @param number the short number to check
         * @param regionDialingFrom the region from which the number is dialed
         * @return whether the number is a possible short number
         */
        isPossibleShortNumberForRegion(number: PhoneNumber, regionDialingFrom: RegionCode): boolean;

        /**
         * Check whether a short number is a possible number. If a country calling code is shared by
         * multiple regions, this returns true if it's possible in any of them. This provides a more
         * lenient check than {@link ShortNumberInfo.isValidShortNumber}.
         * See {@link ShortNumberInfo.isPossibleShortNumberForRegion} for details.
         *
         * @param number the short number to check
         * @return whether the number is a possible short number
         */
        isPossibleShortNumber(number: PhoneNumber): boolean;

        /**
         * Tests whether a short number matches a valid pattern in a region. Note that this doesn't verify
         * the number is actually in use, which is impossible to tell by just looking at the number
         * itself.
         *
         * @param number the short number for which we want to test the validity
         * @param regionDialingFrom the region from which the number is dialed
         * @return whether the short number matches a valid pattern
         */
        isValidShortNumberForRegion(number: PhoneNumber, regionDialingFrom: RegionCode): boolean;

        /**
         * Tests whether a short number matches a valid pattern. If a country calling code is shared by
         * multiple regions, this returns true if it's valid in any of them. Note that this doesn't verify
         * the number is actually in use, which is impossible to tell by just looking at the number
         * itself. See {@link ShortNumberInfo.isValidShortNumberForRegion} for details.
         *
         * @param number the short number for which we want to test the validity
         * @return whether the short number matches a valid pattern
         */
        isValidShortNumber(number: PhoneNumber): boolean;

        /**
         * Gets the expected cost category of a short number when dialed from a region (however, nothing
         * is implied about its validity). If it is important that the number is valid, then its validity
         * must first be checked using {@link ShortNumberInfo.isValidShortNumberForRegion}. Note that emergency numbers
         * are always considered toll-free.
         *
         * @example Usage:
         * ```
         * // The region for which the number was parsed and the region we subsequently check against
         * // need not be the same. Here we parse the number in the US and check it for Canada.
         * const phoneNumber = phoneUtil.parse("110", "US");
         * const regionCode: RegionCode = '"CA"';
         * const shortInfo = ShortNumberInfo.getInstance();
         * if (shortInfo.isValidShortNumberForRegion(phoneNumber, regionCode)) {
         *   const cost = shortInfo.getExpectedCostForRegion(phoneNumber, regionCode);
         *   // Do something with the cost information here.
         * }
         * ```
         *
         * @param number the short number for which we want to know the expected cost category
         * @param regionDialingFrom the region from which the number is dialed
         * @return the expected cost category for that region of the short number. Returns UNKNOWN_COST
         * the number does not match a cost category. Note that an invalid number may match any cost
         * category.
         */
        getExpectedCostForRegion(number: PhoneNumber, regionDialingFrom: RegionCode): ShortNumberInfo.ShortNumberCost;

        /**
         * Gets the expected cost category of a short number (however, nothing is implied about its
         * validity). If the country calling code is unique to a region, this method behaves exactly the
         * same as {@link ShortNumberInfo.getExpectedCostForRegion}. However, if the country
         * calling code is shared by multiple regions, then it returns the highest cost in the sequence
         * PREMIUM_RATE, UNKNOWN_COST, STANDARD_RATE, TOLL_FREE. The reason for the position of
         * UNKNOWN_COST in this order is that if a number is UNKNOWN_COST in one region but STANDARD_RATE
         * or TOLL_FREE in another, its expected cost cannot be estimated as one of the latter since it
         * might be a PREMIUM_RATE number.
         *
         * For example, if a number is STANDARD_RATE in the US, but TOLL_FREE in Canada, the expected
         * cost returned by this method will be STANDARD_RATE, since the NANPA countries share the same
         * country calling code.
         *
         * Note: If the region from which the number is dialed is known, it is highly preferable to call
         * {@link ShortNumberInfo.getExpectedCostForRegion} instead.
         *
         * @param number the short number for which we want to know the expected cost category
         * @return the highest expected cost category of the short number in the region(s) with the given
         * country calling code
         */
        getExpectedCost(number: PhoneNumber): ShortNumberInfo.ShortNumberCost;

        /**
         * Returns true if the given number, exactly as dialed, might be used to connect to an emergency
         * service in the given region.
         *
         * This method accepts a string, rather than a PhoneNumber, because it needs to distinguish
         * cases such as "+1 911" and "911", where the former may not connect to an emergency service in
         * all cases but the latter would. This method takes into account cases where the number might
         * contain formatting, or might have additional digits appended (when it is okay to do that in
         * the specified region).
         *
         * @param number the phone number to test
         * @param regionCode the region where the phone number is being dialed
         * @return whether the number might be used to connect to an emergency service in the given region
         */
        connectsToEmergencyNumber(number: string, regionDialing: RegionCode): boolean;

        /**
         * Returns true if the given number exactly matches an emergency service number in the given
         * region.
         *
         * This method takes into account cases where the number might contain formatting, but doesn't
         * allow additional digits to be appended. Note that `isEmergencyNumber(number, region)`
         * implies `connectsToEmergencyNumber(number, region)`.
         *
         * @param number the phone number to test
         * @param regionCode the region where the phone number is being dialed
         * @return whether the number exactly matches an emergency services number in the given region
         */
        isEmergencyNumber(number: string, regionCode: RegionCode): boolean;

        /**
         * Given a valid short number, determines whether it is carrier-specific (however, nothing is
         * implied about its validity). Carrier-specific numbers may connect to a different end-point, or
         * not connect at all, depending on the user's carrier. If it is important that the number is
         * valid, then its validity must first be checked using {@link ShortNumberInfo.isValidShortNumber} or
         * {@link ShortNumberInfo.isValidShortNumberForRegion}.
         *
         * @param number  the valid short number to check
         * @return whether the short number is carrier-specific, assuming the input was a valid short
         * number
         */
        isCarrierSpecific(number: PhoneNumber): boolean;

        /**
         * Given a valid short number, determines whether it is carrier-specific when dialed from the
         * given region (however, nothing is implied about its validity). Carrier-specific numbers may
         * connect to a different end-point, or not connect at all, depending on the user's carrier. If
         * it is important that the number is valid, then its validity must first be checked using
         * {@link ShortNumberInfo.isValidShortNumber} or {@link ShortNumberInfo.isValidShortNumberForRegion}.
         * Returns false if the number doesn't match the region provided.
         *
         * @param number  the valid short number to check
         * @param regionDialingFrom  the region from which the number is dialed
         * @return  whether the short number is carrier-specific in the provided region, assuming the
         * input was a valid short number
         */
        isCarrierSpecificForRegion(number: PhoneNumber, regionDialingFrom: RegionCode): boolean;

        /**
         * Given a valid short number, determines whether it is an SMS service (however, nothing is
         * implied about its validity). An SMS service is where the primary or only intended usage is to
         * receive and/or send text messages (SMSs). This includes MMS as MMS numbers downgrade to SMS if
         * the other party isn't MMS-capable. If it is important that the number is valid, then its
         * validity must first be checked using {@link ShortNumberInfo.isValidShortNumber} or
         * {@link ShortNumberInfo.isValidShortNumberForRegion}.
         * Returns false if the number doesn't match the region provided.
         *
         * @param number  the valid short number to check
         * @param regionDialingFrom  the region from which the number is dialed
         * @return  whether the short number is an SMS service in the provided region, assuming the input
         * was a valid short number
         */
        isSmsServiceForRegion(number: PhoneNumber, regionDialingFrom: string): boolean;
    }

    export type RegionCodeUnknown = "ZZ";
    export type RegionCode =
        | "AC"
        | "AD"
        | "AE"
        | "AF"
        | "AG"
        | "AI"
        | "AL"
        | "AM"
        | "AO"
        | "AR"
        | "AS"
        | "AT"
        | "AU"
        | "AW"
        | "AX"
        | "AZ"
        | "BA"
        | "BB"
        | "BD"
        | "BE"
        | "BF"
        | "BG"
        | "BH"
        | "BI"
        | "BJ"
        | "BL"
        | "BM"
        | "BN"
        | "BO"
        | "BQ"
        | "BR"
        | "BS"
        | "BT"
        | "BW"
        | "BY"
        | "BZ"
        | "CA"
        | "CC"
        | "CD"
        | "CF"
        | "CG"
        | "CH"
        | "CI"
        | "CK"
        | "CL"
        | "CM"
        | "CN"
        | "CO"
        | "CR"
        | "CU"
        | "CV"
        | "CW"
        | "CX"
        | "CY"
        | "CZ"
        | "DE"
        | "DJ"
        | "DK"
        | "DM"
        | "DO"
        | "DZ"
        | "EC"
        | "EE"
        | "EG"
        | "EH"
        | "ER"
        | "ES"
        | "ET"
        | "FI"
        | "FJ"
        | "FK"
        | "FM"
        | "FO"
        | "FR"
        | "GA"
        | "GB"
        | "GD"
        | "GE"
        | "GF"
        | "GG"
        | "GH"
        | "GI"
        | "GL"
        | "GM"
        | "GN"
        | "GP"
        | "GQ"
        | "GR"
        | "GT"
        | "GU"
        | "GW"
        | "GY"
        | "HK"
        | "HN"
        | "HR"
        | "HT"
        | "HU"
        | "ID"
        | "IE"
        | "IL"
        | "IM"
        | "IN"
        | "IO"
        | "IQ"
        | "IR"
        | "IS"
        | "IT"
        | "JE"
        | "JM"
        | "JO"
        | "JP"
        | "KE"
        | "KG"
        | "KH"
        | "KI"
        | "KM"
        | "KN"
        | "KP"
        | "KR"
        | "KW"
        | "KY"
        | "KZ"
        | "LA"
        | "LB"
        | "LC"
        | "LI"
        | "LK"
        | "LR"
        | "LS"
        | "LT"
        | "LU"
        | "LV"
        | "LY"
        | "MA"
        | "MC"
        | "MD"
        | "ME"
        | "MF"
        | "MG"
        | "MH"
        | "MK"
        | "ML"
        | "MM"
        | "MN"
        | "MO"
        | "MP"
        | "MQ"
        | "MR"
        | "MS"
        | "MT"
        | "MU"
        | "MV"
        | "MW"
        | "MX"
        | "MY"
        | "MZ"
        | "NA"
        | "NC"
        | "NE"
        | "NF"
        | "NG"
        | "NI"
        | "NL"
        | "NO"
        | "NP"
        | "NR"
        | "NU"
        | "NZ"
        | "OM"
        | "PA"
        | "PE"
        | "PF"
        | "PG"
        | "PH"
        | "PK"
        | "PL"
        | "PM"
        | "PR"
        | "PS"
        | "PT"
        | "PW"
        | "PY"
        | "QA"
        | "RE"
        | "RO"
        | "RS"
        | "RU"
        | "RW"
        | "SA"
        | "SB"
        | "SC"
        | "SD"
        | "SE"
        | "SG"
        | "SH"
        | "SI"
        | "SJ"
        | "SK"
        | "SL"
        | "SM"
        | "SN"
        | "SO"
        | "SR"
        | "SS"
        | "ST"
        | "SV"
        | "SX"
        | "SY"
        | "SZ"
        | "TA"
        | "TC"
        | "TD"
        | "TG"
        | "TH"
        | "TJ"
        | "TK"
        | "TL"
        | "TM"
        | "TN"
        | "TO"
        | "TR"
        | "TT"
        | "TV"
        | "TW"
        | "TZ"
        | "UA"
        | "UG"
        | "US"
        | "UY"
        | "UZ"
        | "VA"
        | "VC"
        | "VE"
        | "VG"
        | "VI"
        | "VN"
        | "VU"
        | "WF"
        | "WS"
        | "XK"
        | "YE"
        | "YT"
        | "ZA"
        | "ZM"
        | "ZW";
}

declare module "google-libphonenumber" {
    export = libphonenumber;
}
