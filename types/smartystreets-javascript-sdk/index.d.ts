// Type definitions for smartystreets-javascript-sdk 1.6
// Project: https://github.com/smartystreets/smartystreets-javascript-sdk
// Definitions by: Keith Kikta <https://github.com/newbish>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.9

// <reference types="node" />

import { Request } from 'express';
export namespace core {
    class Batch<T> {
        constructor();
        lookups: T[];
        add(lookup: T): void;
        lookupsHasRoomForLookup(): boolean;
        lenght(): number;
        getByIndex(index: number): T;
        getByInputId(inputId: string): T[];
        clear(): void;
        isEmpty(): boolean;
    }

    interface ClientInstance {
        sender: any;
    }

    interface Client<T, R> extends ClientInstance {
        send(lookup: T): Promise<R>;
    }

    class StaticCredentials {
        constructor(authId: string, authToken: string);
        sign(request: Request): any;
    }

    class SharedCredentials {
        constructor(authId: string, hostName?: string);
        sign(request: Request): any;
    }

    class ClientBuilder<T, R> {
        constructor(credentials: StaticCredentials | SharedCredentials);

        signer: StaticCredentials | SharedCredentials;
        httpSender: any;
        maxRetries: number;
        maxTimeout: number;
        baseUrl: string;
        proxy: string;
        customHeaders: any;
        debug: boolean;
        licenses: string[];

        withMaxRetries(retries: number): ClientBuilder<T, R>;
        withMaxTimeout(timeout: number): ClientBuilder<T, R>;
        withSender(sender: any): ClientBuilder<T, R>;
        withBaseUrl(url: string): ClientBuilder<T, R>;
        withProxy(host: string, port: number, username?: string, password?: string): ClientBuilder<T, R>;
        withCustomHeaders(customHeaders: any): ClientBuilder<T, R>;
        withDebug(): ClientBuilder<T, R>;
        withLicenses(licenses: string[]): ClientBuilder<T, R>;
        buildSender(): any;
        buildClient(baseUrl: string, Client: Client<T, R>): Client<T, R>;
        buildUsStreetApiClient(): Client<usStreet.Lookup | Batch<usStreet.Lookup>, Batch<usStreet.Lookup>>;
        buildUsZipcodeClient(): Client<usZipcode.Lookup | Batch<usZipcode.Lookup>, Batch<usZipcode.Lookup>>;
        buildUsAutocompleteClient(): Client<usAutocomplete.Lookup, usAutocomplete.Lookup>;
        buildUsAutocompleteProClient(): Client<usAutocompletePro.Lookup, usAutocompletePro.Lookup>;
        buildUsExtractClient(): Client<usExtract.Lookup, usExtract.Lookup>;
        buildInternationalStreetClient(): Client<internationalStreet.Lookup, internationalStreet.Lookup>;
        buildUsReverseGeoClient(): Client<usReverseGeo.Lookup, usReverseGeo.Lookup>;
    }

    namespace buildClient {
        function usStreet(credentials: StaticCredentials | SharedCredentials): Client<usStreet.Lookup | Batch<usStreet.Lookup>, Batch<usStreet.Lookup>>;
        function usAutocomplete(credentials: StaticCredentials | SharedCredentials): Client<usAutocomplete.Lookup, usAutocomplete.Lookup>;
        function usAutocompletePro(
            credentials: StaticCredentials | SharedCredentials,
        ): Client<usAutocompletePro.Lookup, usAutocompletePro.Lookup>;
        function usExtract(credentials: StaticCredentials | SharedCredentials): Client<usExtract.Lookup, usExtract.Lookup>;
        function usZipcode(credentials: StaticCredentials | SharedCredentials): Client<usZipcode.Lookup | Batch<usZipcode.Lookup>, Batch<usZipcode.Lookup>>;
        function internationalStreet(
            credentials: StaticCredentials | SharedCredentials,
        ): Client<internationalStreet.Lookup, internationalStreet.Lookup>;
        function usReverseGeo(credentials: StaticCredentials | SharedCredentials): Client<usReverseGeo.Lookup, usReverseGeo.Lookup>;
    }

    namespace Errors {
        class SmartyError extends Error {
            constructor(message: string);
        }
        class BatchFullError extends SmartyError {
            constructor();
        }
        class BatchEmptyError extends SmartyError {
            constructor();
        }
        class UndefinedLookupError extends SmartyError {
            constructor();
        }
        class BadCredentialsError extends SmartyError {
            constructor();
        }
        class PaymentRequiredError extends SmartyError {
            constructor();
        }
        class RequestEntityTooLargeError extends SmartyError {
            constructor();
        }
        class BadRequestError extends SmartyError {
            constructor();
        }
        class UnprocessableEntityError extends SmartyError {
            constructor(message: string);
        }
        class TooManyRequestsError extends SmartyError {
            constructor();
        }
        class InternalServerError extends SmartyError {
            constructor();
        }
        class ServiceUnavailableError extends SmartyError {
            constructor();
        }
        class GatewayTimeoutError extends SmartyError {
            constructor();
        }
    }
}

export namespace usStreet {
    class Lookup {
        constructor(
            /**
             * The street line of the address, or the entire address ("freeform" input).
             *
             * Freeform input can be up to 100 characters but only the first 50 will be considered for the street portion of the address. Freeform inputs should NOT include any form of country information (like "USA").
             */
            street1?: string,
            /**
             * Any extra address information
             * @example Leave it on the front porch.
             */
            street2?: string,
            /**
             * Apartment, suite, or office number
             * @example "Apt 52" or simply "52"; not "Apt52"
             */
            secondary?: string,
            /** The city name */
            city?: string,
            /** The state name or abbreviation */
            state?: string,
            /** The ZIP Code */
            zipCode?: string,
            /** City, state, and ZIP Code combined */
            lastLine?: string,
            /** The name of the person or company at this address */
            addressee?: string,
            /** The neighborhood (only Puerto Rican addresses) */
            urbanization?: string,
            /**
             * The match output strategy to be employed for this lookup. Valid values are:
             * - strict  The API will return detailed output only if a valid match is found. Otherwise the API response will be an empty array.
             * - invalid  The API will return detailed output for both valid and invalid addresses. To find out if the address is valid, check the dpv_match_code. Values of Y, S, or D indicate a valid address.
             *
             * Notes:
             *
             * 1 The invalid setting is not compatible with freeform address input. For all addresses submitted freeform, the API will automatically employ a strict match output strategy.
             * + When submitting addresses in components, setting match to invalid will prevent the API from finding valid matches for ambiguous address input.
             */
            match?: string,
            /**
             * The maximum number of addresses returned when the input is ambiguous
             * @default 1
             */
            maxCandidates?: string,
            /** A unique identifier for this address used in your application; this field will be copied into the output. */
            inputId?: string,
        );
        /**
         * The street line of the address, or the entire address ("freeform" input).
         *
         * Freeform input can be up to 100 characters but only the first 50 will be considered for the street portion of the address. Freeform inputs should NOT include any form of country information (like "USA").
         */
        street: string;
        /**
         * Any extra address information
         * @example Leave it on the front porch.
         */
        street2: string;
        /**
         * Apartment, suite, or office number
         * @example "Apt 52" or simply "52"; not "Apt52"
         */
        secondary: string;
        /** The city name */
        city: string;
        state: string;
        zipCode: string;
        lastLine: string;
        adressee: string;
        urbanization: string;
        match: string;
        maxCandidates: number;
        /** A unique identifier for this address used in your application; this field will be copied into the output. */
        inputId: string;
        result: Candidate[];
    }
    class Candidate {
        constructor(responseData: any);
        inputIndex: any;
        candidateIndex: any;
        addressee: string;
        deliveryLine1: string;
        deliveryLine2: string;
        lastLine: string;
        deliveryPointBarcode: string;
        components: Componenet;
        metadata: Metadata;
        analysis: Analysis;
    }
    interface Analysis {
        active: string;
        cmra: string;
        dpvFootnotes: string;
        dpvMatchCode: string;
        footnotes: string;
        isEwsMatch: boolean;
        isSuiteLinkMatch: boolean;
        lacsLinkCode: any;
        lacsLinkIndicator: any;
        vacant: string;
    }
    interface Metadata {
        buildingDefaultIndicator: any;
        carrierRoute: string;
        congressionalDistrict: string;
        countyFips: string;
        countyName: string;
        elotSequence: string;
        elotSort: string;
        isEwsMatch: boolean;
        latitude: number;
        longitude: number;
        obeysDst: boolean;
        precision: string;
        rdi: string;
        recordType: string;
        timeZone: string;
        utcOffset: number;
        zipType: string;
    }
    interface Componenet {
        cityName: string;
        defaultCityName: string;
        deliveryPoint: string;
        deliveryPointCheckDigit: string;
        extraSecondaryDesignator: any;
        extraSecondaryNumber: any;
        plus4Code: string;
        pmbDesignator: any;
        pmbNumber: any;
        primaryNumber: string;
        secondaryDesignator: string;
        secondaryNumber: string;
        state: string;
        streetName: string;
        streetPostdirection: string;
        streetPredirection: string;
        streetSuffix: string;
        urbanization: string;
        zipCode: string;
    }
}

export namespace usZipcode {
    class Lookup {
        constructor(city?: string, state?: string, zipCode?: string, inputId?: string);
        city: string;
        state: string;
        zipCode: string;
        inputId: string;
        result: Result[];
    }

    class Result {
        constructor(responseData: any);
        inputIndex: string;
        status: string;
        reason: string;
        valid: boolean;
        cities: City[];
        zipcodes: ZipCode[];
    }
    interface City {
        city: string;
        stateAbbreviation: string;
        state: string;
        mailableCity: string;
    }
    interface ZipCode {
        zipcode: string;
        zipcodeType: string;
        defaultCity: string;
        countyFips: any;
        countyName: string;
        latitude: number;
        longitude: number;
        precision: string;
        stateAbbreviation: string;
        state: string;
        alternateCounties: County[];
    }
    interface County {
        countyFips: any;
        countyName: string;
        stateAbbreviation: string;
        state: string;
    }
}

export namespace usAutocomplete {
    class Lookup {
        constructor(prefix: string);
        result: Suggestion[];
        /**
         * Required. The part of the address that has already been typed. Maximum length is 128 bytes.
         */
        prefix: string;
        /**
         * Maximum number of address suggestions, range [1, 10].
         * @default 10
         */
        maxSuggestions: number;
        /**
         * Exclude the following cities from the results.
         *
         * See [filtering](https://smartystreets.com/docs/cloud/us-autocomplete-pro-api#pro-filtering) for more information.
         */
        cityFilter: string[];
        /**
         * Exclude the following states from the results.
         *
         * See [filtering](https://smartystreets.com/docs/cloud/us-autocomplete-pro-api#pro-filtering) for more information.
         * @example ['SD', 'ND', 'MT']
         */
        stateFilter: string[];
        /**
         * A list of cities/states to prefer at the top of the results.
         *
         * See [preferencing](https://smartystreets.com/docs/cloud/us-autocomplete-basic-api#preference) for more information.
         */
        prefer: string[];
        /**
         * Specifies the percentage of address suggestions that should be from preferred cities/states. Expressed as a decimal value, range [0, 1] (input out of bounds is adjusted).
         *
         * See [preferencing](https://smartystreets.com/docs/cloud/us-autocomplete-basic-api#preference) for more information.
         * @default 0.333333333
         */
        preferRatio: number;
        /**
         * Whether to prefer address suggestions in the user's city and state, based on their IP address. (If the request to the Autocomplete API goes through a proxy, you will need to set an [X-Forwarded-For](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-Forwarded-For) header specifying the user's IP address.)
         */
        geolocate: boolean;
        /**
         * If the geolocate field is set to true then setting this field to city causes the geolocated results that bubble up to the top of the response to be from the city/state corresponding to the sender's IP address. Setting this field to state causes results from the sender's entire state to be preferred.
         */
        geolocatePrecision: string;
    }

    class Suggestion {
        constructor(responseData: any);
        text: string;
        streetLine: string;
        city: string;
        state: string;
    }
}

export namespace usAutocompletePro {
    class Lookup {
        constructor(search: string);
        result: Suggestion[];
        /**
         * Required. The part of the address that has already been typed. Maximum length is 128 bytes.
         */
        search: string;
        /**
         * Used by UI components to request a list of secondaries (up to 100) for the specified address. See [Secondary Number Expansion](https://smartystreets.com/docs/cloud/us-autocomplete-pro-api#pro-secondary-expansion) for usage information.
         */
        selected: string;
        /**
         * Maximum number of address suggestions to return; range [1, 10].
         */
        maxResults: number;
        /**
         * Limit the results to only those cities and states listed, as well as those in include_only_states.
         *
         * See [filtering](https://smartystreets.com/docs/cloud/us-autocomplete-pro-api#pro-filtering) for more information.
         * @example ['DENVER,AURORA,CO', 'OMAHA,NE']
         */
        includeOnlyCities: string[];
        /**
         * Limit the results to only those states listed, as well as those listed in include_only_cities.
         *
         * See [filtering](https://smartystreets.com/docs/cloud/us-autocomplete-pro-api#pro-filtering) for more information.
         * @example ['UT', 'ID', 'MT'] or ['CONTIGUOUS'] or ['ALLSTATES']
         */
        includeOnlyStates: string[];
        /**
         * Limit the results to only those ZIP Codes listed. When this parameter is used, no other _cities, _states parameters can be used.
         *
         * Note: When using this parameter, the prefer_geolocation parameter MUST be set to none.
         *
         * See [filtering](https://smartystreets.com/docs/cloud/us-autocomplete-pro-api#pro-filtering) for more information.
         * @example ['90210', '06504']
         */
        includeOnlyZIPCodes: string[];
        /**
         * Exclude the following states from the results. When this parameter is used, no other include_ parameters may be used.
         *
         * Note: The prefer_geolocation parameter MUST be set to none if the customer's current location is in a state specified in this parameter; otherwise the customer will see addresses from their current location.
         *
         * See [filtering](https://smartystreets.com/docs/cloud/us-autocomplete-pro-api#pro-filtering) for more information.
         * @example ['SD', 'ND', 'MT']
         */
        excludeStates: string[];
        /**
         * Display suggestions with the listed cities and states at the top of the suggestion list, as well as those listed in prefer_states. Example: DENVER,AURORA,CO;OMAHA,NE
         *
         * See [preferencing](https://smartystreets.com/docs/cloud/us-autocomplete-pro-api#pro-preference) for more information.
         */
        preferCities: string[];
        /**
         * Display suggestions with the listed states at the top of the suggestion list, as well as those listed in prefer_cities. Examples: UT;ID;MT
         *
         * See [preferencing](https://smartystreets.com/docs/cloud/us-autocomplete-pro-api#pro-preference) for more information.
         */
        preferStates: string[];
        /**
         * Display suggestions with the listed ZIP Codes at the top of the suggestion list. When this parameter is used, no other _cities or _states parameters can be used.
         *
         * Note: When using this parameter, the prefer_geolocation parameter MUST be set to none.
         *
         * See [preferencing](https://smartystreets.com/docs/cloud/us-autocomplete-pro-api#pro-preference) for more information.
         */
        preferZIPCodes: string[];
        /**
         * Specifies the percentage of address suggestions that should be preferred and will appear at the top of the suggestion list. Expressed as an integer value, range [0, 100]. See [preferencing](https://smartystreets.com/docs/cloud/us-autocomplete-pro-api#pro-preference) for more information.
         */
        preferRatio: number;
        /**
         * If omitted or set to city, it uses the sender's IP address to determine location, then automatically adds the city and state to the prefer_cities value. This parameter takes precedence over other _include or _exclude parameters meaning that if it is not set to none, you may see addresses from the customer's area when you may not desire it.
         *
         * Acceptable values are: empty string (which defaults to city), none, or city.
         *
         * Notes:
         * 1. If any _zip_codes parameters are used, this parameter MUST be set to none)
         * 2. If the request to the Autocomplete Pro API goes through a proxy, you will need to set an [X-Forwarded-For](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-Forwarded-For) header specifying the user's IP address.
         */
        preferGeolocation: string;
    }
    class Suggestion {
        constructor(responseData: any);
        streetLine: string;
        secondary: string;
        city: string;
        state: string;
        zipcode: string;
        entries: number;
    }
}

export namespace usExtract {
    class Lookup {
        constructor(text: string);
        result: Result[];
        text: string;
        /**
         * HTML input is automatically detected and stripped, but you can manually specify whether your input is formatted as HTML by setting this to true or false.
         */
        html: boolean;
        /**
         * Aggressive mode may use more lookups on your account, but it can find addresses in populous cities without needing a state and [ZIP Code](https://smartystreets.com/docs/zip-codes-101) , as well as finding addresses in some messy inputs.
         * @default true */
        aggressive: boolean;
        /**
         * This parameter specifies if addresses in your input will ever have line breaks.
         * @default true */
        addressesHaveLineBreaks: boolean;
        /**
         * Limits the extractor to a certain number of addresses per input line. Generally, you will not need this parameter unless you are submitting structured data that you know will only have a certain number of addresses per line.
         * @default 0 - no limit */
        addressesPerLine: number;
    }
    class Result {
        constructor(x: { meta: any; addresses: any });
        meta: {
            lines: any;
            unicode: any;
            addressCount: number;
            verifiedCount: number;
            bytes: number;
            characterCount: number;
        };
        addressees: [any];
    }
}

export namespace internationalStreet {
    class Lookup {
        constructor(country: string, freeform: string);
        result: Candidate[];
        country: string;
        freeform: string;
        address1: string;
        address2: string;
        address3: string;
        address4: string;
        organization: string;
        locality: string;
        administrativeArea: string;
        postalCode: string;
        geocode: string;
        language: string;
        inputId: string;
        readonly ensureEnoughInfo: boolean;
        readonly ensureValidData: boolean;
    }
    class Candidate {
        constructor(reponseData: any);
        organization: string;
        address1: string;
        address2: string;
        address3: string;
        address4: string;
        address5: string;
        address6: string;
        address7: string;
        address8: string;
        address9: string;
        address10: string;
        address11: string;
        address12: string;
        components: any;
        analysis: any;
        metadata: any;
    }
}

export namespace usReverseGeo {
    class Lookup {
        constructor(latitude: string, longitude: string);
        latitude: string;
        longitude: string;
        response: Response;
    }

    class Response {
        constructor(responseData: any)
        results: Result[];
    }

    interface ResultAddress {
        street: string;
        city: string;
        state_abbreviation: string;
        zipcode: string;
    }

    interface ResultCoordinate {
        latitude: number;
        longitude: number;
        accuracy: string;
        license: number;
    }

    class Result {
        constructor(responseData: any)
        distance: number;
        address: ResultAddress;
        coordinate: ResultCoordinate;
    }
}
