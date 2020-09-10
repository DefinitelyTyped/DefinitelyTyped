// Type definitions for smartystreets-javascript-sdk 1.5
// Project: https://github.com/smartystreets/smartystreets-javascript-sdk
// Definitions by: Keith Kikta <https://github.com/newbish>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.9

// <reference types="node" />

import { Request } from 'express';

export namespace core {
    class Batch {
        constructor();
        lookups: [Lookup];
        add(lookup: Lookup): void;
        lookupsHasRoomForLookup(): boolean;
        lenght(): number;
        getByIndex(index: number): Lookup;
        getByInputId(inputId: string): [Lookup];
        clear(): void;
        isEmpty(): boolean;
    }

    interface ClientInstance {
        sender: any;
    }

    interface Client extends ClientInstance {
        send(lookup: any): Promise<Batch>;
    }

    class StaticCredentials {
        constructor(authId: string, authToken: string);
        sign(request: Request): any;
    }

    class SharedCredentials {
        constructor(authId: string, hostName?: string);
        sign(request: Request): any;
    }

    class ClientBuilder {
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

        withMaxRetries(retries: number): ClientBuilder;
        withMaxTimeout(timeout: number): ClientBuilder;
        withSender(sender: any): ClientBuilder;
        withBaseUrl(url: string): ClientBuilder;
        withProxy(
            host: string,
            port: number,
            username?: string,
            password?: string,
        ): ClientBuilder;
        withCustomHeaders(customHeaders: any): ClientBuilder;
        withDebug(): ClientBuilder;
        withLicenses(licenses: string[]): ClientBuilder;
        buildSender(): any;
        buildClient(baseUrl: string, Client: Client): Client;
        buildUsStreetApiClient(): Client;
        buildUsZipcodeClient(): Client;
        buildUsAutocompleteClient(): Client;
        buildUsAutocompleteProClient(): Client;
        buildUsExtractClient(): Client;
        buildInternationalStreetClient(): Client;
    }

    namespace buildClient {
        function usStreet(credentials: StaticCredentials | SharedCredentials): Client;
        function usAutocomplete(
            credentials: StaticCredentials | SharedCredentials,
        ): Client;
        function usAutocompletePro(
            credentials: StaticCredentials | SharedCredentials,
        ): Client;
        function usExtract(credentials: StaticCredentials | SharedCredentials): Client;
        function usZipcode(credentials: StaticCredentials | SharedCredentials): Client;
        function internationalStreet(
            credentials: StaticCredentials | SharedCredentials,
        ): Client;
    }

    namespace Errors {
        class SmartyError extends Error {
            constructor(message: string);
        }
        class BatchFullError extends SmartyError {
            constructor();
        }
        class BatchEmptyError extends SmartyError  {
            constructor();
        }
        class UndefinedLookupError extends SmartyError  {
            constructor();
        }
       class  BadCredentialsError extends SmartyError  {
            constructor();
        }
        class PaymentRequiredError extends SmartyError  {
            constructor();
        }
        class RequestEntityTooLargeError extends SmartyError  {
            constructor();
        }
        class BadRequestError extends SmartyError  {
            constructor();
        }
        class UnprocessableEntityError extends SmartyError  {
            constructor(message: string);
        }
        class TooManyRequestsError extends SmartyError  {
            constructor();
        }
        class InternalServerError extends SmartyError  {
            constructor();
        }
        class ServiceUnavailableError extends SmartyError  {
            constructor();
        }
        class GatewayTimeoutError extends SmartyError  {
            constructor();
        }
    }
    type Lookup = usStreet.Lookup | usZipcode.Lookup | usAutocomplete.Lookup | usAutocompletePro.Lookup | usExtract.Lookup | internationalStreet.Lookup;
}

export namespace usStreet {
    class Lookup {
        constructor(street1?: string, street2?: string, secondary?: string, city?: string, state?: string, zipCode?: string,
            lastLine?: string, addressee?: string, urbanization?: string, match?: string, maxCandidates?: string,
            inputId?: string);
        street: string;
        street2: string;
        secondary: string;
        city: string;
        state: string;
        zipCode: string;
        lastLine: string;
        adressee: string;
        urbanization: string;
        match: string;
        maxCandidates: number;
        inputId: string;
        result: [Candidate];
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
        components: [Componenet];
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
        result: [any];
    }

    class Result {
        constructor(responseData: any);
        inputIndex: string;
        status: string;
        reason: string;
        valid: boolean;
        cities: [City];
        zipcodes: [ZipCode];
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
        alternateCounties: [County];
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
        prefix: string;
        maxSuggestions: number;
        cityFilter: [any];
        stateFilter: [any];
        prefer: [any];
        preferRation: any;
        geolocate: any;
        geolocatePrecision: any;
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
        result: [any];
        search: string;
		selected: any;
		maxResults: number;
		includeOnlyCities: [any];
		includeOnlyStates: [any];
		includeOnlyZIPCodes: [any];
		excludeStates: [any];
		preferCities: [any];
		preferStates: [any];
		preferZIPCodes: [any];
		preferRatio: any;
		preferGeolocation: any;
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
        result: { meta: any, addresses: any };
        text: string;
        html: any;
        aggressive: any;
        addressesHaveLineBreaks: any;
        addressesPerLine: any;
    }
    class Result {
        constructor(x: {meta: any, addresses: any});
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
        constructor(country: string, freeform: string)
        result: [any];
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
