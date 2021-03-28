declare namespace GoogleAdsScripts {
    namespace AdsApp {
        /**
         * Represents the address of a geographical point. Contains information about the street address, country, province / state, and postal code.
         *
         * For instance, the address "1600 Amphitheatre Parkway, Mountain View, CA 94043" will have the following values:
         *
         * * `getStreetAddress()`: "1600 Amphitheatre Parkway"
         * * `getStreetAddress2()`: `null`
         * * `getCityName()`: "Mountain View"
         * * `getProvinceCode()`: "CA"
         * * `getProvinceName()`: "California"
         * * `getPostalCode()`: "94043"
         * * `getCountryCode()`: "US"
         */
        interface Address {
            /** Returns the city name, or `null` if not known. */
            getCityName(): string | null;
            /** Returns the country code, or `null` if not known. */
            getCountryCode(): string | null;
            /** Returns the postal code, or `null` if not known. */
            getPostalCode(): string | null;
            /** Returns the province / state code, or `null` if not known. */
            getProvinceCode(): string | null;
            /** Returns the province / state name, or `null` if not known. */
            getProvinceName(): string | null;
            /** Returns the street address, or `null` if not known. */
            getStreetAddress(): string | null;
            /** Returns the second line of the street address, or `null` if not known. */
            getStreetAddress2(): string | null;
        }

        /** Plain JavaScript objects describing an address. */
        interface AddressObject {
            streetAddress?: string;
            cityName?: string;
            provinceName?: string;
            provinceCode?: string;
            postalCode?: string;
            countryCode?: string;
        }
    }
}
