/**
 * used to normalize mobile phone numbers into E.164 format
 */
declare function phone(phoneNumber: string, countryCode?: string, allowLandLine?: boolean): string[];

declare namespace phone {
    const iso3166_data: PhoneData[];

    interface PhoneData {
        alpha2: string;
        alpha3: string;
        country_code: string;

        country_name: string;
        mobile_begin_with: string[];
        phone_number_lengths: number[];
    }
}

export as namespace phone;

export = phone;
