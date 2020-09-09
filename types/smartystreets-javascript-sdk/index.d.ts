// Type definitions for smartystreets-javascript-sdk 1.5
// Project: https://github.com/smartystreets/smartystreets-javascript-sdk
// Definitions by: Keith Kikta <https://github.com/newbish>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.9

// <reference types="node" />

import { Request } from 'express';

export namespace SmartyStreetsSDK {}

export namespace core {
    interface ClientInstance {
        sender: any;
    }

    interface Client extends ClientInstance {
        send(lookup: any): Promise<any>;
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
}

export namespace usStreet {
    class Lookup {
        constructor(street1?: string, street2?: string, secondary?: string, city?: string, state?: string,
            zipCode?: string, lastLine?: string, addressee?: string, urbanization?: string, match?: string,
            maxCandidates?: string, inputId?: string);
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
