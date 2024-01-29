// <reference types="node" />

import { Request } from "express";
export namespace core {
    class Batch<T> {
        constructor();
        lookups: T[];
        add(lookup: T): void;
        lookupsHasRoomForLookup(): boolean;
        length(): number;
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
        buildInternationalAddressAutocompleteClient(): Client<
            internationalAddressAutocomplete.Lookup,
            internationalAddressAutocomplete.Lookup
        >;
    }

    namespace buildClient {
        function usStreet(
            credentials: StaticCredentials | SharedCredentials,
        ): Client<usStreet.Lookup | Batch<usStreet.Lookup>, Batch<usStreet.Lookup>>;
        function usAutocomplete(
            credentials: StaticCredentials | SharedCredentials,
        ): Client<usAutocomplete.Lookup, usAutocomplete.Lookup>;
        function usAutocompletePro(
            credentials: StaticCredentials | SharedCredentials,
        ): Client<usAutocompletePro.Lookup, usAutocompletePro.Lookup>;
        function usExtract(
            credentials: StaticCredentials | SharedCredentials,
        ): Client<usExtract.Lookup, usExtract.Lookup>;
        function usZipcode(
            credentials: StaticCredentials | SharedCredentials,
        ): Client<usZipcode.Lookup | Batch<usZipcode.Lookup>, Batch<usZipcode.Lookup>>;
        function internationalStreet(
            credentials: StaticCredentials | SharedCredentials,
        ): Client<internationalStreet.Lookup, internationalStreet.Lookup>;
        function usReverseGeo(
            credentials: StaticCredentials | SharedCredentials,
        ): Client<usReverseGeo.Lookup, usReverseGeo.Lookup>;
        function internationalAddressAutocomplete(
            credentials: StaticCredentials | SharedCredentials,
        ): Client<internationalAddressAutocomplete.Lookup, internationalAddressAutocomplete.Lookup>;
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
             * Freeform input can be up to 100 characters but only the first 50 will be considered for the street portion of the address. Freeform inputs should NOT include any form of country
             * information (like "USA").
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
             * - invalid  The API will return detailed output for both valid and invalid addresses. To find out if the address is valid, check the [dpv_match_code](
             * https://smartystreets.com/docs/cloud/us-street-api#dpvmatchcode). Values of Y, S, or D indicate a valid address.
             *
             * Notes:
             *
             * 1. The invalid setting is not compatible with freeform address input. For all addresses submitted freeform, the API will automatically employ a strict match output strategy.
             * 2. When submitting addresses in components, setting match to invalid will prevent the API from finding valid matches for ambiguous address input.
             * @default strict
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
         * Freeform input can be up to 100 characters but only the first 50 will be considered for the street portion of the address. Freeform inputs should NOT include any form of
         * country information (like "USA").
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
        /** The state name or abbreviation */
        state: string;
        /** The ZIP Code */
        zipCode: string;
        /** City, state, and ZIP Code combined */
        lastLine: string;
        /** The name of the person or company at this address */
        addressee: string;
        /** The neighborhood (only Puerto Rican addresses) */
        urbanization: string;
        /**
         * The match output strategy to be employed for this lookup. Valid values are:
         * - strict  The API will return detailed output only if a valid match is found. Otherwise the API response will be an empty array.
         * - invalid  The API will return detailed output for both valid and invalid addresses. To find out if the address is valid, check the [dpv_match_code](
         * https://smartystreets.com/docs/cloud/us-street-api#dpvmatchcode). Values of Y, S, or D indicate a valid address.
         *
         * Notes:
         *
         * 1. The invalid setting is not compatible with freeform address input. For all addresses submitted freeform, the API will automatically employ a strict match output strategy.
         * 2. When submitting addresses in components, setting match to invalid will prevent the API from finding valid matches for ambiguous address input.
         * @default strict
         */
        match: string;
        /**
         * The maximum number of addresses returned when the input is ambiguous
         * @default 1
         */
        maxCandidates: number;
        /** A unique identifier for this address used in your application; this field will be copied into the output. */
        inputId: string;
        result: Candidate[];
    }

    /**
     * A match candidate
     *
     * https://smartystreets.com/docs/cloud/us-street-api#root
     */
    class Candidate {
        constructor(responseData: any);
        /** The order in which this address was submitted with the others (0 if alone) */
        inputIndex: number;
        /** An input address can match multiple valid addresses. This ties the candidates to the input index. */
        candidateIndex: number;
        /**
         * The name of the person or company at this address. This value is taken directly from the addressee input field. Very rarely, this field might be filled automatically based on the USPS
         * address record.
         */
        addressee: string;
        /**
         * Contains the first delivery line (usually the street address). This can include any of the following:
         * - urbanization (Puerto Rico only)
         * - primary number
         * - street predirection
         * - street name
         * - street suffix
         * - street postdirection
         * - secondary designator
         * - secondary number
         * - extra secondary designator
         * - extra secondary number
         * - PMB designator
         * - PMB number
         */
        deliveryLine1: string;
        /** The second delivery line (if needed). It is common for this field to remain empty, but it may contain a private mailbox number. */
        deliveryLine2: string;
        /** City, state, and ZIP Code combined */
        lastLine: string;
        /** 12-digit POSTNET™ barcode; consists of 5-digit ZIP Code, 4-digit add-on code, 2-digit delivery point, and 1-digit check digit. */
        deliveryPointBarcode: string;
        /** @see Component */
        components: Component;
        /** @see Metadata */
        metadata: Metadata;
        /** @see Analysis */
        analysis: Analysis;
    }
    /**
     * Analysis
     *
     * https://smartystreets.com/docs/cloud/us-street-api#analysis
     */
    interface Analysis {
        /**
         * Indicates whether the address is active or not, based on USPS data. Note that the USPS is often months behind in updating this data point, so use with caution. Some users may prefer not to
         * base any decisions on the active status of an address. More info [here](https://smartystreets.com/articles/what-is-an-inactive-no-stat-address).
         * - **Y** — Address is active.
         * - **N** — Address is inactive.
         * - **[blank]** — Active status is not known by the USPS.
         */
        active: string;
        /**
         * Indicates whether the address is associated with a Commercial Mail Receiving Agency (CMRA), also known as a private mailbox (PMB) operator. A CMRA is a business through which USPS mail may
         * be sent or received, for example the UPS Store and Mailboxes Etc.
         * - **Y** — Address is associated with a valid CMRA.
         * - **N** — Address is not associated with a valid CMRA.
         * - **[blank]** — Address was not submitted for CMRA verification.
         */
        cmra: string;
        /**
         * Information related to the delivery point validation of this address. All these footnotes have a length of 2 characters, and there may be up to 14 footnotes.
         * - **AA** — Street name, city, state, and ZIP are all valid. (e.g., [2335 S State St Ste 300 Provo UT](
         * https://smartystreets.com/products/single-address?street=%202335%20S%20State%20St%20Ste%20300&street2=&city=Provo&state=Ut&zipcode=&address-type=us-street-components))
         * - **A1** — Address is invalid. (e.g., [3214 N University Ave New York NY](
         * https://smartystreets.com/products/single-address?street=3214%20N%20university%20Ave&street2=&city=new%20york%20&state=ny&zipcode=&address-type=us-street-components))
         * - BB** — Entire address is valid. (e.g., [2335 S State St Ste 300 Provo UT](
         * https://smartystreets.com/products/single-address?street=%202335%20S%20State%20St%20Ste%20300&street2=&city=Provo&state=Ut&zipcode=&address-type=us-street-components))
         * - **CC** — The submitted secondary information (apartment, suite, etc.) was not recognized. (e.g., [2335 S State St Ste 500 Provo UT](
         * https://smartystreets.com/products/single-address?street=%202335%20S%20State%20St%20Ste%20500&street2=&city=Provo&state=Ut&zipcode=&address-type=us-street-components))
         * - **F1** — Military or diplomatic address (e.g., [Unit 2050 Box 4190 APO AP 96278](
         * https://smartystreets.com/products/single-address?street=Unit%202050%20Box%204190%20&street2=&city=APO&state=AP&zipcode=96278&address-type=us-street-components))
         * - **G1** — General delivery address (e.g., [General Delivery Provo UT 84601](
         * https://smartystreets.com/products/single-address?street=General%20Delivery&street2=&city=Provo&state=UT&zipcode=84601&address-type=us-street-components))
         * - **M1** — Primary number (e.g., house number) is missing. (e.g., [N University Ave Provo UT](
         * https://smartystreets.com/products/single-address?street=N%20University%20ave&street2=&city=Provo&state=UT&zipcode=&address-type=us-street-components))
         * - **M3** — Primary number (e.g., house number) is invalid. (e.g., [16 N University Ave Provo UT](
         * https://smartystreets.com/products/single-address?street=16%20N%20University%20Ave%20&street2=&city=Provo&state=UT&zipcode=&address-type=us-street-components))
         * - **N1** — Address is missing secondary information (apartment, suite, etc.). (e.g., [2335 S State St Provo UT](
         * https://smartystreets.com/products/single-address?street=2335%20S%20State%20St&street2=&city=Provo&state=UT&zipcode=&address-type=us-street-components))
         * - **PB** — PO Box street style address. (e.g., [555 S B B King Blvd Unit 1 Memphis TN 38103](
         * https://smartystreets.com/products/single-address?street=555%20S%20B%20B%20King%20Blvd%20unit%201&street2=&city=Memphis&state=TN&zipcode=&address-type=us-street-components))
         * - **P1** — PO, RR, or HC box number is missing. (e.g., [Dept 126 Denver CO 802910126](
         * https://smartystreets.com/products/single-address?street=Dept%20126&street2=&city=Denver&state=CO&zipcode=802910126&address-type=us-street-components))
         * - **P3** — PO, RR, or HC box number is invalid. (e.g., [PO BOX 60780 FAIRBANKS AK 99706](
         * https://smartystreets.com/products/single-address?street=PO%20BOX%2060780&street2=&city=FAIRBANKS&state=AK%20&zipcode=99706&address-type=us-street-components))
         * - **RR** — Confirmed address with private mailbox (PMB) info. (e.g., [3214 N University Ave #409 Provo UT](
         * https://smartystreets.com/products/single-address?street=3214%20n%20university%20ave%20%23409&street2=&city=Provo&state=UT&zipcode=&address-type=us-street-components))
         * - **R1** — Confirmed address without private mailbox (PMB) info. (e.g., [3214 N University Ave Provo UT](
         * https://smartystreets.com/products/single-address?street=3214%20N%20university%20ave&street2=&city=provo&state=ut&zipcode=&address-type=us-street-components))
         * - **R7** — Confirmed as a valid address that doesn't currently receive US Postal Service street delivery. (e.g., [6D Cruz Bay St John VI 00830](
         * https://smartystreets.com/products/single-address?street=6D%20Cruz%20Bay%20&street2=&city=St%20John&state=VI&zipcode=00830&address-type=us-street-components))
         * - **U1** — Address has a ["unique" ZIP Code](https://smartystreets.com/articles/unique-zip-codes). (e.g., [100 North Happy Street 12345](
         * https://smartystreets.com/products/single-address?street=100%20North%20Happy%20St&street2=&city=&state=&zipcode=12345&address-type=us-street-components))
         *
         * Here are some common combinations:
         * - AABB - ZIP, state, city, street name, and primary number match.
         * - AAM1 - ZIP, state, city, and street name match, but the primary number is missing.
         * - AAM3 - ZIP, state, city, and street name match, but the primary number is invalid.
         * - AAN1 - ZIP, state, city, street name, and primary number match, but there is secondary information such as apartment or suite that would be helpful.
         * - AABBR1 - ZIP, state, city, street name, and primary number match. Address confirmed without private mailbox (PMB) info.
         */
        dpvFootnotes: string;
        /**
         * Status of the Delivery Point Validation (DPV). This lets you know if the USPS delivers mail to the address.
         * - **Y** — Confirmed; entire address is present in the USPS data. To be certain the address is actually deliverable, verify that the dpv_vacant field has a value of N. You may also want to
         * verify that the active field has a value of Y. However, the USPS is often months behind in updating this data point, so use with caution. Some users may prefer not to base any decisions on
         * the active status of an address. More info here. (e.g., 1600 Amphitheatre Pkwy Mountain View, CA)
         * - **N** — Not confirmed; address is not present in the USPS data.
         * - **S** — Confirmed by ignoring secondary info; the main address is present in the USPS data, but the submitted secondary information (apartment, suite, etc.) was not recognized. (e.g., 62
         * Ea Darden Dr Apt 298 Anniston, AL)
         * - **D** — Confirmed but missing secondary info; the main address is present in the USPS data, but it is missing secondary information (apartment, suite, etc.). (e.g., 122 Mast Rd Lee, NH)
         * - **[blank or null]** — The address is not present in the USPS database.
         */
        dpvMatchCode?: string | undefined;
        /**
         * Indicates which changes were made to the input address. Footnotes are delimited by a # character. See the [footnotes](https://smartystreets.com/docs/cloud/us-street-api#footnotes) table
         * below for details.
         */
        footnotes: string;
        /**
         * @deprecated
         */
        isEwsMatch: boolean;
        /**
         * Indicates a match (or not) to the USPS SuiteLink data. SuiteLink attempts to provide secondary information such as "suite" or "apartment" whenever there is a match based on address and
         * company name.
         * - **true** — There was a SuiteLink match and the result is provided.
         * - **false** — There was no SuiteLink match.
         */
        isSuiteLinkMatch: boolean;
        /**
         *  The reason for the LACSLink indication that was given (below)
         * - **A** — Match: Address provided. LACSLink record match was found, and a converted address was provided.
         * - **00** — No Match. No converted address. No soup for you!
         * - **09** — Match: No new address. LACSLink matched an input address to an old address which is a "high-rise default" address; no new address was provided.
         * - **14** — Match: No conversion. Found a LACSLink record, but couldn't convert the data to a deliverable address.
         * - **92** — Match: Dropped secondary number. LACSLink record was matched after dropping the secondary number from input.
         * - **[blank]** — No LACSLink lookup attempted.
         */
        lacsLinkCode: string;
        /**
         * Indicates whether there is an address match in the LACSLink database.
         * - **Y** — LACS record match; a new address could be furnished because the input record matched a record in the master file.
         * - **S** — LACS record - secondary number dropped; the record is a ZIP+4 street level or high-rise match. The input record matched a master file record, but the input address had a
         * secondary number and the master file record did not.
         * - **N** — No match; a new address could not be furnished; the input record could not be matched to a record in the master file.
         * - **F** — False positive; a false positive record was detected.
         * - **[blank]** — No LACSLink lookup attempted.
         */
        lacsLinkIndicator: any;
        /**
         * Indicates that a delivery point was active in the past but is currently vacant (in most cases, unoccupied over 90 days) and is not receiving deliveries. This status is often obtained when
         * mail receptacles aren't being emptied and are filling up, so mail is held at the post office for a certain number of days before the delivery point is marked vacant.
         * - **Y**— Address is vacant.
         * - **N** — Address is not vacant.
         * - **[blank]** — Address was not submitted for vacancy verification.
         */
        vacant: string;
    }
    /**
     * Metadata
     *
     * https://smartystreets.com/docs/cloud/us-street-api#metadata
     */
    interface Metadata {
        /**
         * Indicates whether the address is the "default" address for a building; for example, the main lobby
         * - **Y** — Yes
         * - **N** — No
         */
        buildingDefaultIndicator: boolean;
        /**
         * The postal carrier route for the address. Consists of a one-letter prefix followed by a three-digit route designator. (e.g., C007, R123)
         * - **C** — Carrier Route (commonly termed "City Route")
         * - **R** — Rural Route
         * - **H** — Highway Contract Route
         * - **B** — Post Office Box Section
         * - **G** — General Delivery Unit
         *
         * Routes C770 through C779 pertain to [PO Box Street Addresses](https://smartystreets.com/articles/is-there-any-preference-between-po-box-and-street-address#pbsa).
         */
        carrierRoute: string;
        /**
         * The congressional district to which the address belongs. Output will be two digits from 01 - 53 or "AL." "AL" means that the entire state (or territory) is covered by a single
         * congressional district. These include Alaska, Delaware, Montana, North Dakota, South Dakota, Vermont, Wyoming, Washington DC, Virgin Islands, and other territories.
         */
        congressionalDistrict: string;
        /**
         * The [5-digit county FIPS (Federal Information Processing Standards) code](https://smartystreets.com/articles/county-fips-codes). It is a combination of a [2-digit state FIPS code](
         * https://bit.ly/3pYZfbr) and a [3-digit county code](https://smartystreets.com/articles/county-fips-codes#how-to-read-a-county-fips-code) assigned by the NIST (National Institute of
         * Standards and Technology).
         */
        countyFips: string;
        /** The name of the [county in which the address is located](https://smartystreets.com/articles/county-by-zip-code) */
        countyName: string;
        /** [eLOT](https://postalpro.usps.com/address-quality/elot) (Enhanced Line of Travel) 4-digit sequence number */
        elotSequence: string;
        /**
         * eLOT (Enhanced Line of Travel) product was developed to give mailers the ability to sort their mailings by line of travel sequence.
         * - **A** - Ascending
         * - **D** - Descending
         * - **[blank]** - Address not submitted for eLOT
         */
        elotSort: string;
        /**
         * Early warning system flag; a positive result indicates the street of the address is not yet ready for mail delivery and that the address will soon be added to the master ZIP+4 file in the
         * coming weeks or months. This commonly occurs for new streets or streets undergoing a name change.
         * - **true** — The address was flagged by EWS, preventing a ZIP+4 match.
         * - **[blank]** — Address was not flagged by EWS.
         */
        isEwsMatch?: boolean | undefined;
        /**
         * The horizontal component used for geographic positioning. It is the angle between 0° (the equator) and ±90° (north or south) at the poles. It is the first value in an ordered pair of
         * (latitude, longitude). A negative number denotes a location below the equator; a positive number is above the equator. Combining lat/long values enables you to pinpoint addresses on a map.
         */
        latitude: number;
        /**
         * The vertical component used for geographic positioning. It is the angle between 0° (the Prime Meridian) and ±180° (westward or eastward). It is the second number in an ordered pair of
         * (latitude, longitude). A negative number indicates a location west of Greenwich, England; a positive number east. Combining lat/long values enables you to pinpoint addresses on a map.
         */
        longitude: number;
        /**
         * Indicates if the time zone "obeys," or, in other words, adjusts their clocks forward and back with the seasons. This information is particularly useful to determine time in other time
         * zones with areas that may or may not use daylight saving time - for example, Arizona, Hawaii, and, of all places, Indiana.
         * - **true** — Time zone observes daylight saving time.
         *
         * If dst is absent from the response, then time zone does not observe daylight saving time.
         */
        obeysDst: boolean;
        /**
         * Indicates the precision of the latitude and longitude values.
         * - **Unknown** — Coordinates not known. Reasons could include: address is invalid, military address (APO or FPO), lat/lon coordinates not available.
         * - **Zip5** — Accurate to a 5-digit ZIP Code level (least precise)
         * - **Zip6** — Accurate to a 6-digit ZIP Code level
         * - **Zip7** — Accurate to a 7-digit ZIP Code level
         * - **Zip8** — Accurate to an 8-digit ZIP Code level
         * - **Zip9** — Accurate to a 9-digit ZIP Code level (most precise with the basic subscription)
         * - **Parcel** — Accurate to the centroid of a property parcel. Requires the US Rooftop Geocoding subscription.
         * - **Rooftop** — Accurate to the rooftop of a structure for this address. Requires the US Rooftop Geocoding subscription.
         *
         * Note: Concerning addresses for which the ZIP9 precision is not available, the ZIP# precision is interpolated based on neighboring addresses. Thus, ZIP7 is an average of all the lat/long
         * coordinates of nearby ZIP Codes that share those first 7 digits.
         */
        precision: string;
        /**
         * Residential Delivery Indicator (residential or commercial)
         * - **Residential** — The address is a residential address.
         * - **Commercial** — The address is a commercial address.
         * - **[blank]** — This happens when the address is invalid or we don't have enough information to ascertain RDI status. The [Bulk Address Validation Tool](
         * https://smartystreets.com/docs/plugins/smartylist) translates a [blank] RDI value to "Unknown."
         *
         * Note: For some reason, known only to the US Postal Service, PO Boxes are always marked as "Residential."
         */
        rdi?: string | undefined;
        /**
         * Indicates the type of record that was matched. Only given if a DPV match is made.
         * - **F** - Firm; the finest level of match available for an address. (e.g., [Julie Julia 11300 Center Ave Gilroy CA 95020-9257](https://bit.ly/36OLtAj))
         * - **G** - General Delivery; for mail to be held at local post offices. (e.g., [General Delivery Provo UT 84601](
         * https://smartystreets.com/products/single-address?street=General%20Delivery&street2=&city=provo&state=Ut&zipcode=&address-type=us-street-components))
         * - **H** — High-rise; address contains apartment or building sub-units. (e.g., [1600 Pennsylvania Ave SE Washington DC 20003-3228](
         * https://smartystreets.com/products/single-address?street=1600%20Pennsylvania%20ave%20SE&street2=&city=washington&state=DC&zipcode=20003-3228&address-type=us-street-components))
         * - **P** — Post Office box (e.g., [PO Box 4735 Tulsa OK 74159-0735](
         * https://smartystreets.com/products/single-address?street=PO%20Box%204735&street2=&city=Tulsa&state=OK&zipcode=74159-0735&address-type=us-street-components))
         * - **R** — Rural Route or Highway Contract; may have box number ranges. (e.g., [RR 2 Box 4560 Anasco PR 00610-9393](
         * https://smartystreets.com/products/single-address?street=RR%202%20box%204560&street2=&city=Anasco&state=PR&zipcode=00610-9393&address-type=us-street-components))
         * - **S** — Street; address contains a valid primary number range. (e.g., [16990 Monterey Rd Lake Elsinore CA 92530-7529](
         * https://smartystreets.com/products/single-address?street=16990%20MOnterey%20rd&street2=&city=lake%20elsinore&state=ca&zipcode=92530&address-type=us-street-components))
         * - **[blank]** — No record type because address did not make a valid DPV match
         */
        recordType: string;
        /**
         * Indicates the common name of the time zone associated with the address.
         *
         * **Valid Responses**:
         * Alaska, Atlantic, Central, Eastern, Hawaii, Mountain, None, Pacific, Samoa, UTC+9, UTC+10, UTC+11, UTC+12
         */
        timeZone: string;
        /**
         * Indicates the number of hours the time zone is offset from Universal Time Coordinated (UTC), the international time standard, also known as Greenwich Meridian Time (GMT).
         *
         * **Valid Responses**:
         * -11, -10, -9, -8, -7, -6, -5, -4, 0, 9, 10, 11, 12
         */
        utcOffset: number;
        /**
         * Indicates the type of the ZIP Code for the address that was matched. Only given if a 5-digit match is made.
         * - **Unique** — The ZIP Code consists of a single delivery point, pertaining to a US Postal Service customer (like a large business or government agency) that routes all of its own mail
         * internally.
         * - **Military** — The ZIP Code pertains to military units and diplomatic organizations, often in foreign locations.
         * - **POBox** — The ZIP Code is a [PO Box ZIP Code](https://smartystreets.com/articles/po-box-only-zip-codes) and is assigned to a collection of Post Office Boxes.
         * - **Standard** — The ZIP Code does not pertain to any of the above categories.
         */
        zipType: string;
    }
    /**
     * Component
     *
     * https://smartystreets.com/docs/cloud/us-street-api#components
     */
    interface Component {
        /** The USPS-preferred city name for this particular address, or an acceptable alternate if provided by the user */
        cityName: string;
        /** The default city name for this 5-digit ZIP Code */
        defaultCityName: string;
        /**
         * The last two digits of the house/box number, unless an "H" record is matched, in which case this is the secondary unit number representing the delivery point information to form the
         * delivery point barcode (DPBC).
         */
        deliveryPoint: string;
        /** Correction character, or check digit, for the 11-digit barcode */
        deliveryPointCheckDigit: string;
        /**
         * Description of the location type within a campus
         * @example Bldg, Unit, Lot, etc.)
         */
        extraSecondaryDesignator: string;
        /**
         * Descriptive information about the location of a building within a campus
         * @example E-5 in "5619 Loop 1604, Bldg E-5, Ste. 101 San Antonio TX"
         */
        extraSecondaryNumber: string;
        /** The 4-digit add-on code (more specific than 5-digit ZIP) */
        plus4Code: string;
        /** The private mailbox unit designator, assigned by a CMRA */
        pmbDesignator: any;
        /** The private mailbox number, assigned by a CMRA */
        pmbNumber: any;
        /** The house, PO Box, or building number */
        primaryNumber: string;
        /** Describes location within a complex/building (Ste, Apt, etc.) */
        secondaryDesignator: string;
        /** Apartment or suite number, if any */
        secondaryNumber: string;
        /** The two-letter state abbreviation */
        state: string;
        /** The name of the street */
        streetName: string;
        /** Directional information after a street name (N, SW, etc.) */
        streetPostdirection: string;
        /** Directional information before a street name (N, SW, etc.) */
        streetPredirection: string;
        /** Abbreviated value describing the street (St, Ave, Blvd, etc.) */
        streetSuffix: string;
        /** The neighborhood, or city subdivision; used with Puerto Rican addresses */
        urbanization: string;
        /** The [5-digit ZIP Code](https://smartystreets.com/docs/zip-codes-101) */
        zipCode: string;
    }
}

export namespace usZipcode {
    class Lookup {
        constructor(
            /** The city name */
            city?: string,
            /** State name or two-letter abbreviation */
            state?: string,
            /** The ZIP Code. See the [paragraphs](https://smartystreets.com/docs/cloud/us-zipcode-api#zip-code-inputs) below this table for a few relevant details. */
            zipCode?: string,
            inputId?: string,
        );
        /** The city name */
        city: string;
        /** State name or two-letter abbreviation */
        state: string;
        /** The ZIP Code. See the [paragraphs](https://smartystreets.com/docs/cloud/us-zipcode-api#zip-code-inputs) below this table for a few relevant details. */
        zipCode: string;
        /** A unique identifier for this address used in your application; this field will be copied into the output. */
        inputId: string;
        result: Result[];
    }

    class Result {
        constructor(responseData: any);
        /** The positional index, or ordering, of the input that is associated with this result */
        inputIndex: string;
        /** For a lookup with no matches, [status classifies the kind of failure](https://smartystreets.com/docs/cloud/us-zipcode-api#statuses) and always comes with a reason */
        status: string;
        /**
         * For a lookup with no matches, [reason explains why the lookup failed](https://smartystreets.com/docs/cloud/us-zipcode-api#statuses)
         * - **blank** - Blank lookup (you must provide a ZIP Code and/or City/State combination).
         * - **invalid_state** - Invalid State name or abbreviation.
         * - **invalid_city** - Invalid City for the given State.
         * - **invalid_zipcode** - Invalid ZIP Code.
         * - **conflict** - Conflicting ZIP Code/City/State information.
         */
        reason: string;
        valid: boolean;
        /** A [list of cities](https://smartystreets.com/docs/cloud/us-zipcode-api#cities) and their states that match the input */
        cities: City[];
        /** A [list of ZIP Codes](https://smartystreets.com/docs/cloud/us-zipcode-api#zipcodes) that match the input */
        zipcodes: ZipCode[];
    }
    interface City {
        /** The name of the city */
        city: string;
        /** The official, two-letter state abbreviation */
        stateAbbreviation: string;
        /** The state name */
        state: string;
        /** A boolean value indicating whether or not the city name is an approved USPS mailing name */
        mailableCity: string;
    }
    interface ZipCode {
        /** The 5-digit ZIP Code */
        zipcode: string;
        /**
         * The type of ZIP Code. Possible values:
         * - **S** - Standard (regular ZIP Code)
         * - **M** - Military (APO/FPO military ZIP Code. Also includes DPO - Diplomatic addresses)
         * - **P** - P.O. Box (serves only post-office boxes)
         * - **U** - Unique (belongs primarily to a firm
         */
        zipcodeType: string;
        /** A string containing the default city name for this ZIP Code */
        defaultCity: string;
        /** [The county FIPS code](https://smartystreets.com/articles/county-fips-codes) */
        countyFips: any;
        /**
         * The name of the [county in which the ZIP Code is located](https://smartystreets.com/articles/county-by-zip-code)
         *
         * Note: The county name listed here pertains to the 5-digit ZIP Code, not necessarily the city.
         */
        countyName: string;
        /** The approximate latitude geo-coordinate */
        latitude: number;
        /** The approximate longitude geo-coordinate */
        longitude: number;
        /**
         * Indicates the precision of the latitude and longitude values.
         * - **None** — Coordinates not known. Reasons could include: address is invalid, military address (APO or FPO), lat/lon coordinates not available.
         * - **Zip5** — Accurate to a 5-digit ZIP Code level (least precise)
         * - **Zip6** — Accurate to a 6-digit ZIP Code level
         * - **Zip7** — Accurate to a 7-digit ZIP Code level
         * - **Zip8** — Accurate to an 8-digit ZIP Code level
         * - **Zip9** — Accurate to a [9-digit ZIP Code](https://smartystreets.com/articles/zip-4-code) level (most precise but NOT [rooftop level](https://smartystreets.com/docs/geocoding-accuracy))
         */
        precision: string;
        /** The official, two-letter state abbreviation */
        stateAbbreviation: string;
        /** The state name */
        state: string;
        /**
         * The county FIPS codes, county names, state abbreviations, and states, that share the same zip code.
         *
         * Note: The county names listed here pertain to the 5-digit ZIP Code, not necessarily the city.
         * @example
         * Input: zipcode=42223
         * Output: [
         * 	{
         * 		"county_fips":"21047",
         * 		"county_name":"Christian",
         * 		"state_abbreviation":"KY",
         * 		"state":"Kentucky"
         * 	},
         * 	{
         * 		"county_fips":"47125",
         * 		"county_name":"Montgomery",
         * 		"state_abbreviation":"TN",
         * 		"state":"Tennessee"
         * 	}
         * ]
         */
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
         * Whether to prefer address suggestions in the user's city and state, based on their IP address. (If the request to the Autocomplete API goes through a proxy, you will need to set an
         * [X-Forwarded-For](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-Forwarded-For) header specifying the user's IP address.)
         */
        geolocate: boolean;
        /**
         * If the geolocate field is set to true then setting this field to city causes the geolocated results that bubble up to the top of the response to be from the city/state corresponding to the
         * sender's IP address. Setting this field to state causes results from the sender's entire state to be preferred.
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
        constructor(
            /**
             * The part of the address that has already been typed. Maximum length is 128 bytes.
             */
            search: string,
        );
        result: Suggestion[];
        /**
         * Required. The part of the address that has already been typed. Maximum length is 128 bytes.
         */
        search: string;
        /**
         * Used by UI components to request a list of secondaries (up to 100) for the specified address. See
         * [Secondary Number Expansion](https://smartystreets.com/docs/cloud/us-autocomplete-pro-api#pro-secondary-expansion) for usage information.
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
         * Note: The prefer_geolocation parameter MUST be set to none if the customer's current location is in a state specified in this parameter; otherwise the customer will see addresses from
         * their current location.
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
         * Specifies the percentage of address suggestions that should be preferred and will appear at the top of the suggestion list. Expressed as an integer value, range [0, 100]. See
         * [preferencing](https://smartystreets.com/docs/cloud/us-autocomplete-pro-api#pro-preference) for more information.
         */
        preferRatio: number;
        /**
         * If omitted or set to city, it uses the sender's IP address to determine location, then automatically adds the city and state to the prefer_cities value. This parameter takes precedence
         * over other _include or _exclude parameters meaning that if it is not set to none, you may see addresses from the customer's area when you may not desire it.
         *
         * Acceptable values are: empty string (which defaults to city), none, or city.
         *
         * Notes:
         * 1. If any _zip_codes parameters are used, this parameter MUST be set to none)
         * 2. If the request to the Autocomplete Pro API goes through a proxy, you will need to set an [X-Forwarded-For](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-Forwarded-For)
         * header specifying the user's IP address.
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
        constructor(
            /**
             * The text with addresses to extract as the body of the request. Set the value of the Content-Type header to text/plain; charset=utf-8. Each request body is limited to a maximum length of
             * 64 kilobytes.
             */
            text: string,
        );
        result: Result[];
        /**
         * The text with addresses to extract as the body of the request. Set the value of the Content-Type header to text/plain; charset=utf-8. Each request body is limited to a maximum length of 64
         * kilobytes.
         */
        text: string;
        /**
         * HTML input is automatically detected and stripped, but you can manually specify whether your input is formatted as HTML by setting this to true or false.
         */
        html: boolean;
        /**
         * Aggressive mode may use more lookups on your account, but it can find addresses in populous cities without needing a state and [ZIP Code](https://smartystreets.com/docs/zip-codes-101) , as
         * well as finding addresses in some messy inputs.
         * @default true
         */
        aggressive: boolean;
        /**
         * This parameter specifies if addresses in your input will ever have line breaks.
         * @default true
         */
        addressesHaveLineBreaks: boolean;
        /**
         * Limits the extractor to a certain number of addresses per input line. Generally, you will not need this parameter unless you are submitting structured data that you know will only have a
         * certain number of addresses per line.
         * @default 0 - no limit
         */
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
        /**
         * (required) This must be entered with every address. Country Name or [ISO classification (ISO-3, ISO-2 or ISO-N)](https://www.iso.org/obp/ui/#search/code/). Address validation will fail if
         * this is missing.
         * @example Brazil, BRA, BR, or 076
         */
        country: string;
        /**
         * The entire address in a single field (without the country). If freeform is specified, all other address input fields (except country) will be ignored.
         * @example Via Santa Maria di Costantinopoli, 72 46030-Tabellano MN
         */
        freeform: string;
        /**
         * The first address line
         * @example Calle Proc. San Sebastián, 15
         */
        address1: string;
        /** The second address line (if any) */
        address2: string;
        /** The third address line (if any) */
        address3: string;
        /** The fourth address line (if any) */
        address4: string;
        /**
         * The name of the recipient, firm, or company at this address
         * @example Robert Smith OR The Clean Oil Company
         */
        organization: string;
        /**
         * The city name
         * @example Paris
         */
        locality: string;
        /**
         * The state or province name or abbreviation
         * @example Alberta or AB
         */
        administrativeArea: string;
        /**
         * The postal code
         * @example 90210-2301
         */
        postalCode: string;
        /** Set to true to enable geocoding (disabled by default). See the [examples section](https://smartystreets.com/docs/cloud/international-street-api#withgeocode) for, well, an example. */
        geocode: string;
        /**
         * When not set, the output language will match the language of the input values. When set to native, the results will always be in the language of the output country. When set to latin,
         * the results will always be provided using a Latin character set. The following character sets can be transliterated, into either native or Latin characters: Cyrillic, Hellenic, Hebrew,
         * Kanji, Simplified Chinese, Arabic, Thai, Hangul.
         */
        language: string;
        /**
         * A unique identifier generated by you for this address for use within your application; this field will be copied into the output.
         * @example 123456
         */
        inputId: string;
        readonly ensureEnoughInfo: boolean;
        readonly ensureValidData: boolean;
    }
    class Candidate {
        constructor(reponseData: any);
        /** The name of the recipient, firm, or company at this address. The output will be identical to the input. */
        organization: string;
        /**
         * If **address_precision** = **DeliveryPoint** or **Premise**, these fields will contain the correctly formatted address for mailing in the relevant country, split into individual address
         * lines. (**Note**: These fields may contain values that are not referenced in the address components.)
         *
         * If **address_precision** ≠ **DeliveryPoint** or **Premise**, the address fields may contain standardized address information or even the original input data.
         */
        address1: string;
        /**
         * If **address_precision** = **DeliveryPoint** or **Premise**, these fields will contain the correctly formatted address for mailing in the relevant country, split into individual address
         * lines. (**Note**: These fields may contain values that are not referenced in the address components.)
         *
         * If **address_precision** ≠ **DeliveryPoint** or **Premise**, the address fields may contain standardized address information or even the original input data.
         */
        address2: string;
        /**
         * If **address_precision** = **DeliveryPoint** or **Premise**, these fields will contain the correctly formatted address for mailing in the relevant country, split into individual address
         * lines. (**Note**: These fields may contain values that are not referenced in the address components.)
         *
         * If **address_precision** ≠ **DeliveryPoint** or **Premise**, the address fields may contain standardized address information or even the original input data.
         */
        address3: string;
        /**
         * If **address_precision** = **DeliveryPoint** or **Premise**, these fields will contain the correctly formatted address for mailing in the relevant country, split into individual address
         * lines. (**Note**: These fields may contain values that are not referenced in the address components.)
         *
         * If **address_precision** ≠ **DeliveryPoint** or **Premise**, the address fields may contain standardized address information or even the original input data.
         */
        address4: string;
        /**
         * If **address_precision** = **DeliveryPoint** or **Premise**, these fields will contain the correctly formatted address for mailing in the relevant country, split into individual address
         * lines. (**Note**: These fields may contain values that are not referenced in the address components.)
         *
         * If **address_precision** ≠ **DeliveryPoint** or **Premise**, the address fields may contain standardized address information or even the original input data.
         */
        address5: string;
        /**
         * If **address_precision** = **DeliveryPoint** or **Premise**, these fields will contain the correctly formatted address for mailing in the relevant country, split into individual address
         * lines. (**Note**: These fields may contain values that are not referenced in the address components.)
         *
         * If **address_precision** ≠ **DeliveryPoint** or **Premise**, the address fields may contain standardized address information or even the original input data.
         */
        address6: string;
        /**
         * If **address_precision** = **DeliveryPoint** or **Premise**, these fields will contain the correctly formatted address for mailing in the relevant country, split into individual address
         * lines. (**Note**: These fields may contain values that are not referenced in the address components.)
         *
         * If **address_precision** ≠ **DeliveryPoint** or **Premise**, the address fields may contain standardized address information or even the original input data.
         */
        address7: string;
        /**
         * If **address_precision** = **DeliveryPoint** or **Premise**, these fields will contain the correctly formatted address for mailing in the relevant country, split into individual address
         * lines. (**Note**: These fields may contain values that are not referenced in the address components.)
         *
         * If **address_precision** ≠ **DeliveryPoint** or **Premise**, the address fields may contain standardized address information or even the original input data.
         */
        address8: string;
        /**
         * If **address_precision** = **DeliveryPoint** or **Premise**, these fields will contain the correctly formatted address for mailing in the relevant country, split into individual address
         * lines. (**Note**: These fields may contain values that are not referenced in the address components.)
         *
         * If **address_precision** ≠ **DeliveryPoint** or **Premise**, the address fields may contain standardized address information or even the original input data.
         */
        address9: string;
        /**
         * If **address_precision** = **DeliveryPoint** or **Premise**, these fields will contain the correctly formatted address for mailing in the relevant country, split into individual address
         * lines. (**Note**: These fields may contain values that are not referenced in the address components.)
         *
         * If **address_precision** ≠ **DeliveryPoint** or **Premise**, the address fields may contain standardized address information or even the original input data.
         */
        address10: string;
        /**
         * If **address_precision** = **DeliveryPoint** or **Premise**, these fields will contain the correctly formatted address for mailing in the relevant country, split into individual address
         * lines. (**Note**: These fields may contain values that are not referenced in the address components.)
         *
         * If **address_precision** ≠ **DeliveryPoint** or **Premise**, the address fields may contain standardized address information or even the original input data.
         */
        address11: string;
        /**
         * If **address_precision** = **DeliveryPoint** or **Premise**, these fields will contain the correctly formatted address for mailing in the relevant country, split into individual address
         * lines. (**Note**: These fields may contain values that are not referenced in the address components.)
         *
         * If **address_precision** ≠ **DeliveryPoint** or **Premise**, the address fields may contain standardized address information or even the original input data.
         */
        address12: string;
        /** See "[Components](https://smartystreets.com/docs/cloud/international-street-api#components)" table. Contains the various basic elements of the address. */
        components: any;
        /** See "[Analysis](https://smartystreets.com/docs/cloud/international-street-api#analysis)" table. Contains information about the validation and the precision of the output address. */
        analysis: any;
        /** See "[Metadata](https://smartystreets.com/docs/cloud/international-street-api#metadata)" table. Contains ancillary data about each address. */
        metadata: any;
    }
    // TODO: Document Components
    // TODO: Document Metadata
    // TODO: Document Analysis
}

export namespace usReverseGeo {
    class Lookup {
        constructor(
            /** The latitude portion of the coordinate. The latitude must be specified as a decimal between **-90.0** and **90.0.** */
            latitude: string,
            /** The longitude portion of the coordinate. The longitude must be specified as a decimal between **-180.0** and **180.0**. */
            longitude: string,
        );
        /** **Required**. The latitude portion of the coordinate. The latitude must be specified as a decimal between **-90.0** and **90.0.** */
        latitude: string;
        /** **Required**. The longitude portion of the coordinate. The longitude must be specified as a decimal between **-180.0** and **180.0**. */
        longitude: string;
        response: Response;
    }

    class Response {
        constructor(responseData: any);
        /** The array of result objects. Each object contains the fields described in the Result. */
        results: Result[];
    }

    interface ResultAddress {
        /** The street name of this address. */
        street: string;
        /** The city name of this address. */
        city: string;
        /** The state abbreviation of this address. */
        state_abbreviation: string;
        /** The 5-digit ZIP Code of this address. */
        zipcode: string;
    }

    interface ResultCoordinate {
        /** The latitude value of this address. */
        latitude: number;
        /** The longitude value of this address. */
        longitude: number;
        /**
         * Indicates the accuracy of the latitude and longitude values.
         * - **Unknown** — Coordinates not known. Reasons could include: lat/lon coordinates not available.
         * - **Zip5** — Accurate to a 5-digit ZIP Code level (least accurate)
         * - **Zip6** — Accurate to a 6-digit ZIP Code level
         * - **Zip7** — Accurate to a 7-digit ZIP Code level
         * - **Zip8** — Accurate to an 8-digit ZIP Code level
         * - **Zip9** — Accurate to a [9-digit ZIP Code level](https://smartystreets.com/articles/zip-4-code)
         * - **Parcel** — Accurate to the centroid of a property parcel.
         * - **Rooftop** — Accurate to the rooftop of a structure for this address.
         *
         * Note: Concerning addresses for which the ZIP9 accuracy is not available, the ZIP# accuracy is interpolated based on neighboring addresses. Thus, ZIP7 is an average of all the lat/long
         * coordinates of nearby ZIP Codes that share those first 7 digits.
         */
        accuracy: string;
        /** The license ID for the geographic coordinate returned. See the licensing table below for more details. */
        license: number;
    }

    class Result {
        constructor(responseData: any);
        /** The distance in meters of this address to the input latitude/longitude values. */
        distance: number;
        address: ResultAddress;
        coordinate: ResultCoordinate;
    }
}

export namespace internationalAddressAutocomplete {
    class Lookup {
        constructor(search: string, country: string);
        result: Suggestion[];
        /**
         * Required. The part of the address that has already been typed. Maximum length is 128 bytes.
         */
        search: string;
        /**
         * Required. The ISO3 Alpha-3 country code where the desired address is located.
         * Only uppercase values are allowed.
         * See [supported country codes](https://www.smarty.com/docs/cloud/international-address-autocomplete-api#supported-country-codes). Maximum length is 3 bytes.
         */
        country: string;
        /**
         * Maximum number of address suggestions to return; range [1, 10].
         */
        maxResults: number;
        /**
         * When using geolocation=geocodes, and latitude/longitude,
         * this field specifies the radius in MILES from the geocode point.
         */
        distance: number;
        /**
         * Use the client's IP address to limit results to the surrounding area.
         *
         * The possible options are:
         * 1. adminarea - Limit results to the client's administrative area (state, province, etc.).
         * 2. locality - Limit results to the client's locality (city).
         * 3. postalcode - Limit results to the postal code where the client's IP address is registered.
         * 4. geocodes - Limit results to an area surrounding the lat/lon where the user's IP address is registered. See also distance.
         *
         * See [filtering](https://www.smarty.com/docs/cloud/international-address-autocomplete-api#pro-filtering) for more information.
         */
        geolocation: "adminarea" | "locality" | "postalcode" | "geocodes";
        /**
         * Limit the results to only the administrative area provided.
         * An administrative area is like a state in the United States, a province in Canada, or region in France.
         * Please use the correct postal name for the administrative area (e.g. use "NSW" instead of "New South Wales").
         *
         * See [filtering](https://www.smarty.com/docs/cloud/international-address-autocomplete-api#pro-filtering) for more information.
         * @example 'NSW'
         */
        includeOnlyAdministrativeArea: string;
        /**
         * Limit the results to only the locality provided.
         * A locality is a significant population center (i.e. city, town, or village).
         *
         * See [filtering](https://www.smarty.com/docs/cloud/international-address-autocomplete-api#pro-filtering) for more information.
         * @example 'Paris'
         */
        includeOnlyLocality: string;
        /**
         * Limit the results to only the postal code provided.
         * When this parameter is used, no include_only_administrative_area and/or include_only_locality parameters can be used.
         *
         * See [filtering](https://www.smarty.com/docs/cloud/international-address-autocomplete-api#pro-filtering) for more information.
         * @example '29200'
         */
        includeOnlyPostalCode: string;
        /**
         * Limit the results to the surrounding area specified by latitude and longitude. See also distance
         *
         * Notes: This must be used with the longitude parameter.
         *
         * See [filtering](https://www.smarty.com/docs/cloud/international-address-autocomplete-api#pro-filtering) for more information.
         * @example '-2.0234'
         */
        latitude: string;
        /**
         * Limit the results to the surrounding area specified by latitude and longitude. See also distance
         *
         * Notes: This must be used with the latitude parameter.
         *
         * See [filtering](https://www.smarty.com/docs/cloud/international-address-autocomplete-api#pro-filtering) for more information.
         * @example '44.0234'
         */
        longitude: string;
    }
    class Suggestion {
        constructor(responseData: any);
        street: string;
        locality: string;
        administrativeArea: string;
        postalCode: string;
        countryIso3: number;
    }
}
