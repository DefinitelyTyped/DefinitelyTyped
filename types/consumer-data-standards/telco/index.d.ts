/* These are the schema definitions stipulated by the Data Standards Body for the telco api. */

/**
 * Australian address formatted according to the file format defined by the [PAF file format](https://auspost.com.au/content/dam/auspost_corp/media/documents/australia-post-data-guide.pdf). Required if addressUType is set to paf
 */
export interface CommonPAFAddress {
    /**
     * Building/Property name 1
     */
    buildingName1?: string | null;
    /**
     * Building/Property name 2
     */
    buildingName2?: string | null;
    /**
     * Unique identifier for an address as defined by Australia Post.  Also known as Delivery Point Identifier
     */
    dpid?: string | null;
    /**
     * Unit number (including suffix, if applicable)
     */
    flatUnitNumber?: string | null;
    /**
     * Type of flat or unit for the address
     */
    flatUnitType?: string | null;
    /**
     * Floor or level number (including alpha characters)
     */
    floorLevelNumber?: string | null;
    /**
     * Type of floor or level for the address
     */
    floorLevelType?: string | null;
    /**
     * Full name of locality
     */
    localityName: string;
    /**
     * Allotment number for the address
     */
    lotNumber?: string | null;
    /**
     * Postal delivery number if the address is a postal delivery type
     */
    postalDeliveryNumber?: number | null;
    /**
     * Postal delivery number prefix related to the postal delivery number
     */
    postalDeliveryNumberPrefix?: string | null;
    /**
     * Postal delivery number suffix related to the postal delivery number
     */
    postalDeliveryNumberSuffix?: string | null;
    /**
     * Postal delivery type. (eg. PO BOX). Valid enumeration defined by Australia Post PAF code file
     */
    postalDeliveryType?: string | null;
    /**
     * Postcode for the locality
     */
    postcode: string;
    /**
     * State in which the address belongs. Valid enumeration defined by Australia Post PAF code file [State Type Abbreviation](https://auspost.com.au/content/dam/auspost_corp/media/documents/australia-post-data-guide.pdf). NSW, QLD, VIC, NT, WA, SA, TAS, ACT, AAT
     */
    state: string;
    /**
     * The name of the street
     */
    streetName?: string | null;
    /**
     * The street type suffix. Valid enumeration defined by Australia Post PAF code file
     */
    streetSuffix?: string | null;
    /**
     * The street type. Valid enumeration defined by Australia Post PAF code file
     */
    streetType?: string | null;
    /**
     * Thoroughfare number for a property (first number in a property ranged address)
     */
    thoroughfareNumber1?: number | null;
    /**
     * Suffix for the thoroughfare number. Only relevant is thoroughfareNumber1 is populated
     */
    thoroughfareNumber1Suffix?: string | null;
    /**
     * Second thoroughfare number (only used if the property has a ranged address eg 23-25)
     */
    thoroughfareNumber2?: number | null;
    /**
     * Suffix for the second thoroughfare number. Only relevant is thoroughfareNumber2 is populated
     */
    thoroughfareNumber2Suffix?: string | null;
    [k: string]: unknown;
}
/* These are the schema definitions stipulated by the Data Standards Body for the telco api. */

export interface CommonPhysicalAddress {
    /**
     * The type of address object present
     */
    addressUType: "paf" | "simple";
    /**
     * Australian address formatted according to the file format defined by the [PAF file format](https://auspost.com.au/content/dam/auspost_corp/media/documents/australia-post-data-guide.pdf). Required if addressUType is set to paf
     */
    paf?: {
        /**
         * Building/Property name 1
         */
        buildingName1?: string | null;
        /**
         * Building/Property name 2
         */
        buildingName2?: string | null;
        /**
         * Unique identifier for an address as defined by Australia Post.  Also known as Delivery Point Identifier
         */
        dpid?: string | null;
        /**
         * Unit number (including suffix, if applicable)
         */
        flatUnitNumber?: string | null;
        /**
         * Type of flat or unit for the address
         */
        flatUnitType?: string | null;
        /**
         * Floor or level number (including alpha characters)
         */
        floorLevelNumber?: string | null;
        /**
         * Type of floor or level for the address
         */
        floorLevelType?: string | null;
        /**
         * Full name of locality
         */
        localityName: string;
        /**
         * Allotment number for the address
         */
        lotNumber?: string | null;
        /**
         * Postal delivery number if the address is a postal delivery type
         */
        postalDeliveryNumber?: number | null;
        /**
         * Postal delivery number prefix related to the postal delivery number
         */
        postalDeliveryNumberPrefix?: string | null;
        /**
         * Postal delivery number suffix related to the postal delivery number
         */
        postalDeliveryNumberSuffix?: string | null;
        /**
         * Postal delivery type. (eg. PO BOX). Valid enumeration defined by Australia Post PAF code file
         */
        postalDeliveryType?: string | null;
        /**
         * Postcode for the locality
         */
        postcode: string;
        /**
         * State in which the address belongs. Valid enumeration defined by Australia Post PAF code file [State Type Abbreviation](https://auspost.com.au/content/dam/auspost_corp/media/documents/australia-post-data-guide.pdf). NSW, QLD, VIC, NT, WA, SA, TAS, ACT, AAT
         */
        state: string;
        /**
         * The name of the street
         */
        streetName?: string | null;
        /**
         * The street type suffix. Valid enumeration defined by Australia Post PAF code file
         */
        streetSuffix?: string | null;
        /**
         * The street type. Valid enumeration defined by Australia Post PAF code file
         */
        streetType?: string | null;
        /**
         * Thoroughfare number for a property (first number in a property ranged address)
         */
        thoroughfareNumber1?: number | null;
        /**
         * Suffix for the thoroughfare number. Only relevant is thoroughfareNumber1 is populated
         */
        thoroughfareNumber1Suffix?: string | null;
        /**
         * Second thoroughfare number (only used if the property has a ranged address eg 23-25)
         */
        thoroughfareNumber2?: number | null;
        /**
         * Suffix for the second thoroughfare number. Only relevant is thoroughfareNumber2 is populated
         */
        thoroughfareNumber2Suffix?: string | null;
        [k: string]: unknown;
    };
    /**
     * Required if addressUType is set to simple
     */
    simple?: {
        /**
         * First line of the standard address object
         */
        addressLine1: string;
        /**
         * Second line of the standard address object
         */
        addressLine2?: string | null;
        /**
         * Third line of the standard address object
         */
        addressLine3?: string | null;
        /**
         * Name of the city or locality
         */
        city: string;
        /**
         * A valid [ISO 3166 Alpha-3](https://www.iso.org/iso-3166-country-codes.html) country code. Australia (AUS) is assumed if country is not present.
         */
        country?: string | null;
        /**
         * Name of the individual or business formatted for inclusion in an address used for physical mail
         */
        mailingName?: string | null;
        /**
         * Mandatory for Australian addresses
         */
        postcode?: string | null;
        /**
         * Free text if the country is not Australia. If country is Australia then must be one of the values defined by the [State Type Abbreviation](https://auspost.com.au/content/dam/auspost_corp/media/documents/australia-post-data-guide.pdf) in the PAF file format. NSW, QLD, VIC, NT, WA, SA, TAS, ACT, AAT
         */
        state: string;
        [k: string]: unknown;
    };
    [k: string]: unknown;
}
/* These are the schema definitions stipulated by the Data Standards Body for the telco api. */

/**
 * Required if addressUType is set to simple
 */
export interface CommonSimpleAddress {
    /**
     * First line of the standard address object
     */
    addressLine1: string;
    /**
     * Second line of the standard address object
     */
    addressLine2?: string | null;
    /**
     * Third line of the standard address object
     */
    addressLine3?: string | null;
    /**
     * Name of the city or locality
     */
    city: string;
    /**
     * A valid [ISO 3166 Alpha-3](https://www.iso.org/iso-3166-country-codes.html) country code. Australia (AUS) is assumed if country is not present.
     */
    country?: string | null;
    /**
     * Name of the individual or business formatted for inclusion in an address used for physical mail
     */
    mailingName?: string | null;
    /**
     * Mandatory for Australian addresses
     */
    postcode?: string | null;
    /**
     * Free text if the country is not Australia. If country is Australia then must be one of the values defined by the [State Type Abbreviation](https://auspost.com.au/content/dam/auspost_corp/media/documents/australia-post-data-guide.pdf) in the PAF file format. NSW, QLD, VIC, NT, WA, SA, TAS, ACT, AAT
     */
    state: string;
    [k: string]: unknown;
}
/* These are the schema definitions stipulated by the Data Standards Body for the telco api. */

export interface Links {
    /**
     * Fully qualified link that generated the current response document
     */
    self: string;
    [k: string]: unknown;
}
/* These are the schema definitions stipulated by the Data Standards Body for the telco api. */

export interface LinksPaginated {
    /**
     * URI to the first page of this set. Mandatory if this response is not the first page
     */
    first?: string | null;
    /**
     * URI to the last page of this set. Mandatory if this response is not the last page
     */
    last?: string | null;
    /**
     * URI to the next page of this set. Mandatory if this response is not the last page
     */
    next?: string | null;
    /**
     * URI to the previous page of this set. Mandatory if this response is not the first page
     */
    prev?: string | null;
    /**
     * Fully qualified link that generated the current response document
     */
    self: string;
    [k: string]: unknown;
}
/* These are the schema definitions stipulated by the Data Standards Body for the telco api. */

export interface Meta {
    [k: string]: unknown;
}
/* These are the schema definitions stipulated by the Data Standards Body for the telco api. */

/**
 * Additional data for customised error codes
 */
export interface MetaError {
    /**
     * The CDR error code URN which the application-specific error code extends. Mandatory if the error `code` is an application-specific error rather than a standardised error code.
     */
    urn?: string | null;
    [k: string]: unknown;
}
/* These are the schema definitions stipulated by the Data Standards Body for the telco api. */

export interface MetaPaginated {
    /**
     * The total number of pages in the full set. See [pagination](#pagination).
     */
    totalPages: number;
    /**
     * The total number of records in the full set. See [pagination](#pagination).
     */
    totalRecords: number;
    [k: string]: unknown;
}
/* These are the schema definitions stipulated by the Data Standards Body for the telco api. */

export interface ResponseErrorListV2 {
    errors: Array<{
        /**
         * The code of the error encountered. Where the error is specific to the respondent, an application-specific error code, expressed as a string value. If the error is application-specific, the URN code that the specific error extends must be provided in the meta object. Otherwise, the value is the error code URN.
         */
        code: string;
        /**
         * A human-readable explanation specific to this occurrence of the problem.
         */
        detail: string;
        /**
         * Additional data for customised error codes
         */
        meta?: {
            /**
             * The CDR error code URN which the application-specific error code extends. Mandatory if the error `code` is an application-specific error rather than a standardised error code.
             */
            urn?: string | null;
            [k: string]: unknown;
        };
        /**
         * A short, human-readable summary of the problem that MUST NOT change from occurrence to occurrence of the problem represented by the error code.
         */
        title: string;
        [k: string]: unknown;
    }>;
    [k: string]: unknown;
}
/* These are the schema definitions stipulated by the Data Standards Body for the telco api. */

/**
 * The array of plans containing services and associated plan details
 */
export interface TelcoAccount {
    /**
     * The array of plans containing service and associated plan details
     */
    plans: Array<{
        /**
         * The billing type of then plan
         */
        billingType: "PRE_PAID" | "POST_PAID" | "UPFRONT_PAID" | "OTHER";
        /**
         * Optional display name for the plan provided by the customer to help differentiate multiple plans
         */
        nickname?: string | null;
        /**
         * Mandatory if openStatus is OPEN
         */
        planOverview: {
            /**
             * The name of the plan if one exists
             */
            displayName?: string | null;
            /**
             * The end date of the applicability of this plan
             */
            endDate?: string | null;
            /**
             * The start date of the applicability of this plan
             */
            startDate: string;
            [k: string]: unknown;
        };
        /**
         * The serviceId representing a unique service identifier such as a mobile [MSISDN](https://www.etsi.org/deliver/etsi_gts/03/0303/05.00.00_60/gsmts_0303v050000p.pdf), [FNN](https://www.nbnco.com.au/content/dam/nbnco2/documents/sfaa-wba2-dictionary_FTTN-launch.pdf) or internet service e.g [NBN AVC Service ID](https://www.nbnco.com.au/content/dam/nbnco2/documents/sfaa-wba2-dictionary_FTTN-launch.pdf). In accordance with [CDR ID permanence](#id-permanence) requirement
         */
        serviceIds: string[];
        /**
         * The type of the plan. The type of plan. A [MOBILE](https://www.legislation.gov.au/Details/C2022C00170/Html/Volume_1#_Toc95898745) service or BROADBAND fixed internet service
         */
        type: "MOBILE" | "BROADBAND";
        [k: string]: unknown;
    }>;
    [k: string]: unknown;
}
/* These are the schema definitions stipulated by the Data Standards Body for the telco api. */

export interface TelcoAccountBase {
    /**
     * The ID of the account. To be created in accordance with [CDR ID permanence](#id-permanence) requirements
     */
    accountId?: string | null;
    /**
     * Masked identifier of the account as defined by the data holder. This must be the value presented on physical statements (required if it exists) and must not be used for the value of the accountId
     */
    accountNumber?: string | null;
    /**
     * The retail name of the brand
     */
    brand?: string | null;
    /**
     * The date that the account was created or opened. Mandatory if openStatus is OPEN
     */
    creationDate?: string | null;
    /**
     * An optional display name for the account if one exists or can be derived. The content of this field is at the discretion of the data holder
     */
    displayName?: string | null;
    /**
     * The date and time which the account was last updated
     */
    lastUpdated?: string | null;
    /**
     * Open or closed status for the account. If not present then OPEN is assumed
     */
    openStatus?: ("CLOSED" | "OPEN") | null;
    [k: string]: unknown;
}
/* These are the schema definitions stipulated by the Data Standards Body for the telco api. */

/**
 * The array of plans containing services and associated plan details
 */
export interface TelcoAccountDetail {
    /**
     * The array of plans containing services and associated plan details
     */
    plans: Array<
        {
            /**
             * The billing type of then plan
             */
            billingType: "PRE_PAID" | "POST_PAID" | "UPFRONT_PAID" | "OTHER";
            /**
             * Optional display name for the plan provided by the customer to help differentiate multiple plans
             */
            nickname?: string | null;
            /**
             * Mandatory if openStatus is OPEN
             */
            planOverview: {
                /**
                 * The name of the plan if one exists
                 */
                displayName?: string | null;
                /**
                 * The end date of the applicability of this plan
                 */
                endDate?: string | null;
                /**
                 * The start date of the applicability of this plan
                 */
                startDate: string;
                [k: string]: unknown;
            };
            /**
             * The serviceId representing a unique service identifier such as a mobile [MSISDN](https://www.etsi.org/deliver/etsi_gts/03/0303/05.00.00_60/gsmts_0303v050000p.pdf), [FNN](https://www.nbnco.com.au/content/dam/nbnco2/documents/sfaa-wba2-dictionary_FTTN-launch.pdf) or internet service e.g [NBN AVC Service ID](https://www.nbnco.com.au/content/dam/nbnco2/documents/sfaa-wba2-dictionary_FTTN-launch.pdf). In accordance with [CDR ID permanence](#id-permanence) requirement
             */
            serviceIds: string[];
            /**
             * The type of the plan. The type of plan. A [MOBILE](https://www.legislation.gov.au/Details/C2022C00170/Html/Volume_1#_Toc95898745) service or BROADBAND fixed internet service
             */
            type: "MOBILE" | "BROADBAND";
            [k: string]: unknown;
        } & {
            planDetail: {
                /**
                 * Charges for metering included in the plan
                 */
                charges: Array<{
                    /**
                     * Description of the charge
                     */
                    description?: string | null;
                    /**
                     * Display name of the charge
                     */
                    displayName: string;
                    /**
                     * The upper limit of the charge if the charge could occur in a range
                     */
                    maximumValue?: string | null;
                    /**
                     * Minimum value of the charge if the charge is a range or the absolute value of the charge if no range is specified
                     */
                    minimumValue: string;
                    /**
                     * The charges that occur on a schedule indicates the frequency. Formatted according to [ISO 8601 Durations](https://en.wikipedia.org/wiki/ISO_8601#Durations) (excludes recurrence syntax)
                     */
                    period?: string | null;
                    [k: string]: unknown;
                }>;
                [k: string]: unknown;
            };
            [k: string]: unknown;
        }
    >;
    [k: string]: unknown;
}
/* These are the schema definitions stipulated by the Data Standards Body for the telco api. */

export interface TelcoAccountDetailAuthorisedContacts {
    /**
     * For people with single names this field need not be present. The single name should be in the lastName field
     */
    firstName?: string | null;
    /**
     * For people with single names the single name should be in this field
     */
    lastName: string;
    /**
     * Field is mandatory but array may be empty
     */
    middleNames?: string[] | null;
    /**
     * Also known as title or salutation. The prefix to the name (e.g. Mr, Mrs, Ms, Miss, Sir, etc)
     */
    prefix?: string | null;
    /**
     * Used for a trailing suffix to the name (e.g. Jr)
     */
    suffix?: string | null;
    [k: string]: unknown;
}
/* These are the schema definitions stipulated by the Data Standards Body for the telco api. */

export interface TelcoAccountDetailResponse {
    data: {
        /**
         * The ID of the account. To be created in accordance with [CDR ID permanence](#id-permanence) requirements
         */
        accountId?: string | null;
        /**
         * Masked identifier of the account as defined by the data holder. This must be the value presented on physical statements (required if it exists) and must not be used for the value of the accountId
         */
        accountNumber?: string | null;
        /**
         * The retail name of the brand
         */
        brand?: string | null;
        /**
         * The date that the account was created or opened. Mandatory if openStatus is OPEN
         */
        creationDate?: string | null;
        /**
         * An optional display name for the account if one exists or can be derived. The content of this field is at the discretion of the data holder
         */
        displayName?: string | null;
        /**
         * The date and time which the account was last updated
         */
        lastUpdated?: string | null;
        /**
         * Open or closed status for the account. If not present then OPEN is assumed
         */
        openStatus?: ("CLOSED" | "OPEN") | null;
        [k: string]: unknown;
    } & {
        /**
         * The array of plans containing service and associated plan details
         */
        plans: Array<{
            /**
             * The billing type of then plan
             */
            billingType: "PRE_PAID" | "POST_PAID" | "UPFRONT_PAID" | "OTHER";
            /**
             * Optional display name for the plan provided by the customer to help differentiate multiple plans
             */
            nickname?: string | null;
            /**
             * Mandatory if openStatus is OPEN
             */
            planOverview: {
                /**
                 * The name of the plan if one exists
                 */
                displayName?: string | null;
                /**
                 * The end date of the applicability of this plan
                 */
                endDate?: string | null;
                /**
                 * The start date of the applicability of this plan
                 */
                startDate: string;
                [k: string]: unknown;
            };
            /**
             * The serviceId representing a unique service identifier such as a mobile [MSISDN](https://www.etsi.org/deliver/etsi_gts/03/0303/05.00.00_60/gsmts_0303v050000p.pdf), [FNN](https://www.nbnco.com.au/content/dam/nbnco2/documents/sfaa-wba2-dictionary_FTTN-launch.pdf) or internet service e.g [NBN AVC Service ID](https://www.nbnco.com.au/content/dam/nbnco2/documents/sfaa-wba2-dictionary_FTTN-launch.pdf). In accordance with [CDR ID permanence](#id-permanence) requirement
             */
            serviceIds: string[];
            /**
             * The type of the plan. The type of plan. A [MOBILE](https://www.legislation.gov.au/Details/C2022C00170/Html/Volume_1#_Toc95898745) service or BROADBAND fixed internet service
             */
            type: "MOBILE" | "BROADBAND";
            [k: string]: unknown;
        }>;
        [k: string]: unknown;
    } & {
        /**
         * The array of plans containing services and associated plan details
         */
        plans: Array<
            {
                /**
                 * The billing type of then plan
                 */
                billingType: "PRE_PAID" | "POST_PAID" | "UPFRONT_PAID" | "OTHER";
                /**
                 * Optional display name for the plan provided by the customer to help differentiate multiple plans
                 */
                nickname?: string | null;
                /**
                 * Mandatory if openStatus is OPEN
                 */
                planOverview: {
                    /**
                     * The name of the plan if one exists
                     */
                    displayName?: string | null;
                    /**
                     * The end date of the applicability of this plan
                     */
                    endDate?: string | null;
                    /**
                     * The start date of the applicability of this plan
                     */
                    startDate: string;
                    [k: string]: unknown;
                };
                /**
                 * The serviceId representing a unique service identifier such as a mobile [MSISDN](https://www.etsi.org/deliver/etsi_gts/03/0303/05.00.00_60/gsmts_0303v050000p.pdf), [FNN](https://www.nbnco.com.au/content/dam/nbnco2/documents/sfaa-wba2-dictionary_FTTN-launch.pdf) or internet service e.g [NBN AVC Service ID](https://www.nbnco.com.au/content/dam/nbnco2/documents/sfaa-wba2-dictionary_FTTN-launch.pdf). In accordance with [CDR ID permanence](#id-permanence) requirement
                 */
                serviceIds: string[];
                /**
                 * The type of the plan. The type of plan. A [MOBILE](https://www.legislation.gov.au/Details/C2022C00170/Html/Volume_1#_Toc95898745) service or BROADBAND fixed internet service
                 */
                type: "MOBILE" | "BROADBAND";
                [k: string]: unknown;
            } & {
                planDetail: {
                    /**
                     * Charges for metering included in the plan
                     */
                    charges: Array<{
                        /**
                         * Description of the charge
                         */
                        description?: string | null;
                        /**
                         * Display name of the charge
                         */
                        displayName: string;
                        /**
                         * The upper limit of the charge if the charge could occur in a range
                         */
                        maximumValue?: string | null;
                        /**
                         * Minimum value of the charge if the charge is a range or the absolute value of the charge if no range is specified
                         */
                        minimumValue: string;
                        /**
                         * The charges that occur on a schedule indicates the frequency. Formatted according to [ISO 8601 Durations](https://en.wikipedia.org/wiki/ISO_8601#Durations) (excludes recurrence syntax)
                         */
                        period?: string | null;
                        [k: string]: unknown;
                    }>;
                    [k: string]: unknown;
                };
                [k: string]: unknown;
            }
        >;
        [k: string]: unknown;
    };
    links: {
        /**
         * Fully qualified link that generated the current response document
         */
        self: string;
        [k: string]: unknown;
    };
    meta: {
        [k: string]: unknown;
    };
    [k: string]: unknown;
}
/* These are the schema definitions stipulated by the Data Standards Body for the telco api. */

export type TelcoAccountDetailResponseData = {
    /**
     * The ID of the account. To be created in accordance with [CDR ID permanence](#id-permanence) requirements
     */
    accountId?: string | null;
    /**
     * Masked identifier of the account as defined by the data holder. This must be the value presented on physical statements (required if it exists) and must not be used for the value of the accountId
     */
    accountNumber?: string | null;
    /**
     * The retail name of the brand
     */
    brand?: string | null;
    /**
     * The date that the account was created or opened. Mandatory if openStatus is OPEN
     */
    creationDate?: string | null;
    /**
     * An optional display name for the account if one exists or can be derived. The content of this field is at the discretion of the data holder
     */
    displayName?: string | null;
    /**
     * The date and time which the account was last updated
     */
    lastUpdated?: string | null;
    /**
     * Open or closed status for the account. If not present then OPEN is assumed
     */
    openStatus?: ("CLOSED" | "OPEN") | null;
    [k: string]: unknown;
} & {
    /**
     * The array of plans containing service and associated plan details
     */
    plans: Array<{
        /**
         * The billing type of then plan
         */
        billingType: "PRE_PAID" | "POST_PAID" | "UPFRONT_PAID" | "OTHER";
        /**
         * Optional display name for the plan provided by the customer to help differentiate multiple plans
         */
        nickname?: string | null;
        /**
         * Mandatory if openStatus is OPEN
         */
        planOverview: {
            /**
             * The name of the plan if one exists
             */
            displayName?: string | null;
            /**
             * The end date of the applicability of this plan
             */
            endDate?: string | null;
            /**
             * The start date of the applicability of this plan
             */
            startDate: string;
            [k: string]: unknown;
        };
        /**
         * The serviceId representing a unique service identifier such as a mobile [MSISDN](https://www.etsi.org/deliver/etsi_gts/03/0303/05.00.00_60/gsmts_0303v050000p.pdf), [FNN](https://www.nbnco.com.au/content/dam/nbnco2/documents/sfaa-wba2-dictionary_FTTN-launch.pdf) or internet service e.g [NBN AVC Service ID](https://www.nbnco.com.au/content/dam/nbnco2/documents/sfaa-wba2-dictionary_FTTN-launch.pdf). In accordance with [CDR ID permanence](#id-permanence) requirement
         */
        serviceIds: string[];
        /**
         * The type of the plan. The type of plan. A [MOBILE](https://www.legislation.gov.au/Details/C2022C00170/Html/Volume_1#_Toc95898745) service or BROADBAND fixed internet service
         */
        type: "MOBILE" | "BROADBAND";
        [k: string]: unknown;
    }>;
    [k: string]: unknown;
} & {
    /**
     * The array of plans containing services and associated plan details
     */
    plans: Array<
        {
            /**
             * The billing type of then plan
             */
            billingType: "PRE_PAID" | "POST_PAID" | "UPFRONT_PAID" | "OTHER";
            /**
             * Optional display name for the plan provided by the customer to help differentiate multiple plans
             */
            nickname?: string | null;
            /**
             * Mandatory if openStatus is OPEN
             */
            planOverview: {
                /**
                 * The name of the plan if one exists
                 */
                displayName?: string | null;
                /**
                 * The end date of the applicability of this plan
                 */
                endDate?: string | null;
                /**
                 * The start date of the applicability of this plan
                 */
                startDate: string;
                [k: string]: unknown;
            };
            /**
             * The serviceId representing a unique service identifier such as a mobile [MSISDN](https://www.etsi.org/deliver/etsi_gts/03/0303/05.00.00_60/gsmts_0303v050000p.pdf), [FNN](https://www.nbnco.com.au/content/dam/nbnco2/documents/sfaa-wba2-dictionary_FTTN-launch.pdf) or internet service e.g [NBN AVC Service ID](https://www.nbnco.com.au/content/dam/nbnco2/documents/sfaa-wba2-dictionary_FTTN-launch.pdf). In accordance with [CDR ID permanence](#id-permanence) requirement
             */
            serviceIds: string[];
            /**
             * The type of the plan. The type of plan. A [MOBILE](https://www.legislation.gov.au/Details/C2022C00170/Html/Volume_1#_Toc95898745) service or BROADBAND fixed internet service
             */
            type: "MOBILE" | "BROADBAND";
            [k: string]: unknown;
        } & {
            planDetail: {
                /**
                 * Charges for metering included in the plan
                 */
                charges: Array<{
                    /**
                     * Description of the charge
                     */
                    description?: string | null;
                    /**
                     * Display name of the charge
                     */
                    displayName: string;
                    /**
                     * The upper limit of the charge if the charge could occur in a range
                     */
                    maximumValue?: string | null;
                    /**
                     * Minimum value of the charge if the charge is a range or the absolute value of the charge if no range is specified
                     */
                    minimumValue: string;
                    /**
                     * The charges that occur on a schedule indicates the frequency. Formatted according to [ISO 8601 Durations](https://en.wikipedia.org/wiki/ISO_8601#Durations) (excludes recurrence syntax)
                     */
                    period?: string | null;
                    [k: string]: unknown;
                }>;
                [k: string]: unknown;
            };
            [k: string]: unknown;
        }
    >;
    [k: string]: unknown;
};
/* These are the schema definitions stipulated by the Data Standards Body for the telco api. */

export interface TelcoAccountListResponse {
    data: {
        /**
         * Array of accounts
         */
        accounts: Array<
            {
                /**
                 * The ID of the account. To be created in accordance with [CDR ID permanence](#id-permanence) requirements
                 */
                accountId?: string | null;
                /**
                 * Masked identifier of the account as defined by the data holder. This must be the value presented on physical statements (required if it exists) and must not be used for the value of the accountId
                 */
                accountNumber?: string | null;
                /**
                 * The retail name of the brand
                 */
                brand?: string | null;
                /**
                 * The date that the account was created or opened. Mandatory if openStatus is OPEN
                 */
                creationDate?: string | null;
                /**
                 * An optional display name for the account if one exists or can be derived. The content of this field is at the discretion of the data holder
                 */
                displayName?: string | null;
                /**
                 * The date and time which the account was last updated
                 */
                lastUpdated?: string | null;
                /**
                 * Open or closed status for the account. If not present then OPEN is assumed
                 */
                openStatus?: ("CLOSED" | "OPEN") | null;
                [k: string]: unknown;
            } & {
                /**
                 * The array of plans containing service and associated plan details
                 */
                plans: Array<{
                    /**
                     * The billing type of then plan
                     */
                    billingType: "PRE_PAID" | "POST_PAID" | "UPFRONT_PAID" | "OTHER";
                    /**
                     * Optional display name for the plan provided by the customer to help differentiate multiple plans
                     */
                    nickname?: string | null;
                    /**
                     * Mandatory if openStatus is OPEN
                     */
                    planOverview: {
                        /**
                         * The name of the plan if one exists
                         */
                        displayName?: string | null;
                        /**
                         * The end date of the applicability of this plan
                         */
                        endDate?: string | null;
                        /**
                         * The start date of the applicability of this plan
                         */
                        startDate: string;
                        [k: string]: unknown;
                    };
                    /**
                     * The serviceId representing a unique service identifier such as a mobile [MSISDN](https://www.etsi.org/deliver/etsi_gts/03/0303/05.00.00_60/gsmts_0303v050000p.pdf), [FNN](https://www.nbnco.com.au/content/dam/nbnco2/documents/sfaa-wba2-dictionary_FTTN-launch.pdf) or internet service e.g [NBN AVC Service ID](https://www.nbnco.com.au/content/dam/nbnco2/documents/sfaa-wba2-dictionary_FTTN-launch.pdf). In accordance with [CDR ID permanence](#id-permanence) requirement
                     */
                    serviceIds: string[];
                    /**
                     * The type of the plan. The type of plan. A [MOBILE](https://www.legislation.gov.au/Details/C2022C00170/Html/Volume_1#_Toc95898745) service or BROADBAND fixed internet service
                     */
                    type: "MOBILE" | "BROADBAND";
                    [k: string]: unknown;
                }>;
                [k: string]: unknown;
            }
        >;
        [k: string]: unknown;
    };
    links: {
        /**
         * URI to the first page of this set. Mandatory if this response is not the first page
         */
        first?: string | null;
        /**
         * URI to the last page of this set. Mandatory if this response is not the last page
         */
        last?: string | null;
        /**
         * URI to the next page of this set. Mandatory if this response is not the last page
         */
        next?: string | null;
        /**
         * URI to the previous page of this set. Mandatory if this response is not the first page
         */
        prev?: string | null;
        /**
         * Fully qualified link that generated the current response document
         */
        self: string;
        [k: string]: unknown;
    };
    meta: {
        /**
         * The total number of pages in the full set. See [pagination](#pagination).
         */
        totalPages: number;
        /**
         * The total number of records in the full set. See [pagination](#pagination).
         */
        totalRecords: number;
        [k: string]: unknown;
    };
    [k: string]: unknown;
}
/* These are the schema definitions stipulated by the Data Standards Body for the telco api. */

export interface TelcoAccountListResponseData {
    /**
     * Array of accounts
     */
    accounts: Array<
        {
            /**
             * The ID of the account. To be created in accordance with [CDR ID permanence](#id-permanence) requirements
             */
            accountId?: string | null;
            /**
             * Masked identifier of the account as defined by the data holder. This must be the value presented on physical statements (required if it exists) and must not be used for the value of the accountId
             */
            accountNumber?: string | null;
            /**
             * The retail name of the brand
             */
            brand?: string | null;
            /**
             * The date that the account was created or opened. Mandatory if openStatus is OPEN
             */
            creationDate?: string | null;
            /**
             * An optional display name for the account if one exists or can be derived. The content of this field is at the discretion of the data holder
             */
            displayName?: string | null;
            /**
             * The date and time which the account was last updated
             */
            lastUpdated?: string | null;
            /**
             * Open or closed status for the account. If not present then OPEN is assumed
             */
            openStatus?: ("CLOSED" | "OPEN") | null;
            [k: string]: unknown;
        } & {
            /**
             * The array of plans containing service and associated plan details
             */
            plans: Array<{
                /**
                 * The billing type of then plan
                 */
                billingType: "PRE_PAID" | "POST_PAID" | "UPFRONT_PAID" | "OTHER";
                /**
                 * Optional display name for the plan provided by the customer to help differentiate multiple plans
                 */
                nickname?: string | null;
                /**
                 * Mandatory if openStatus is OPEN
                 */
                planOverview: {
                    /**
                     * The name of the plan if one exists
                     */
                    displayName?: string | null;
                    /**
                     * The end date of the applicability of this plan
                     */
                    endDate?: string | null;
                    /**
                     * The start date of the applicability of this plan
                     */
                    startDate: string;
                    [k: string]: unknown;
                };
                /**
                 * The serviceId representing a unique service identifier such as a mobile [MSISDN](https://www.etsi.org/deliver/etsi_gts/03/0303/05.00.00_60/gsmts_0303v050000p.pdf), [FNN](https://www.nbnco.com.au/content/dam/nbnco2/documents/sfaa-wba2-dictionary_FTTN-launch.pdf) or internet service e.g [NBN AVC Service ID](https://www.nbnco.com.au/content/dam/nbnco2/documents/sfaa-wba2-dictionary_FTTN-launch.pdf). In accordance with [CDR ID permanence](#id-permanence) requirement
                 */
                serviceIds: string[];
                /**
                 * The type of the plan. The type of plan. A [MOBILE](https://www.legislation.gov.au/Details/C2022C00170/Html/Volume_1#_Toc95898745) service or BROADBAND fixed internet service
                 */
                type: "MOBILE" | "BROADBAND";
                [k: string]: unknown;
            }>;
            [k: string]: unknown;
        }
    >;
    [k: string]: unknown;
}
/* These are the schema definitions stipulated by the Data Standards Body for the telco api. */

export interface TelcoAccountPlan {
    /**
     * The billing type of then plan
     */
    billingType: "PRE_PAID" | "POST_PAID" | "UPFRONT_PAID" | "OTHER";
    /**
     * Optional display name for the plan provided by the customer to help differentiate multiple plans
     */
    nickname?: string | null;
    /**
     * Mandatory if openStatus is OPEN
     */
    planOverview: {
        /**
         * The name of the plan if one exists
         */
        displayName?: string | null;
        /**
         * The end date of the applicability of this plan
         */
        endDate?: string | null;
        /**
         * The start date of the applicability of this plan
         */
        startDate: string;
        [k: string]: unknown;
    };
    /**
     * The serviceId representing a unique service identifier such as a mobile [MSISDN](https://www.etsi.org/deliver/etsi_gts/03/0303/05.00.00_60/gsmts_0303v050000p.pdf), [FNN](https://www.nbnco.com.au/content/dam/nbnco2/documents/sfaa-wba2-dictionary_FTTN-launch.pdf) or internet service e.g [NBN AVC Service ID](https://www.nbnco.com.au/content/dam/nbnco2/documents/sfaa-wba2-dictionary_FTTN-launch.pdf). In accordance with [CDR ID permanence](#id-permanence) requirement
     */
    serviceIds: string[];
    /**
     * The type of the plan. The type of plan. A [MOBILE](https://www.legislation.gov.au/Details/C2022C00170/Html/Volume_1#_Toc95898745) service or BROADBAND fixed internet service
     */
    type: "MOBILE" | "BROADBAND";
    [k: string]: unknown;
}
/* These are the schema definitions stipulated by the Data Standards Body for the telco api. */

/**
 * Detail on the plan applicable to this account. Mandatory if openStatus is OPEN
 */
export interface TelcoAccountPlanDetail {
    planDetail: {
        /**
         * Charges for metering included in the plan
         */
        charges: Array<{
            /**
             * Description of the charge
             */
            description?: string | null;
            /**
             * Display name of the charge
             */
            displayName: string;
            /**
             * The upper limit of the charge if the charge could occur in a range
             */
            maximumValue?: string | null;
            /**
             * Minimum value of the charge if the charge is a range or the absolute value of the charge if no range is specified
             */
            minimumValue: string;
            /**
             * The charges that occur on a schedule indicates the frequency. Formatted according to [ISO 8601 Durations](https://en.wikipedia.org/wiki/ISO_8601#Durations) (excludes recurrence syntax)
             */
            period?: string | null;
            [k: string]: unknown;
        }>;
        [k: string]: unknown;
    };
    [k: string]: unknown;
}
/* These are the schema definitions stipulated by the Data Standards Body for the telco api. */

/**
 * Mandatory if openStatus is OPEN
 */
export interface TelcoAccountPlanOverview {
    /**
     * The name of the plan if one exists
     */
    displayName?: string | null;
    /**
     * The end date of the applicability of this plan
     */
    endDate?: string | null;
    /**
     * The start date of the applicability of this plan
     */
    startDate: string;
    [k: string]: unknown;
}
/* These are the schema definitions stipulated by the Data Standards Body for the telco api. */

export type TelcoAccountResponseData = {
    /**
     * The ID of the account. To be created in accordance with [CDR ID permanence](#id-permanence) requirements
     */
    accountId?: string | null;
    /**
     * Masked identifier of the account as defined by the data holder. This must be the value presented on physical statements (required if it exists) and must not be used for the value of the accountId
     */
    accountNumber?: string | null;
    /**
     * The retail name of the brand
     */
    brand?: string | null;
    /**
     * The date that the account was created or opened. Mandatory if openStatus is OPEN
     */
    creationDate?: string | null;
    /**
     * An optional display name for the account if one exists or can be derived. The content of this field is at the discretion of the data holder
     */
    displayName?: string | null;
    /**
     * The date and time which the account was last updated
     */
    lastUpdated?: string | null;
    /**
     * Open or closed status for the account. If not present then OPEN is assumed
     */
    openStatus?: ("CLOSED" | "OPEN") | null;
    [k: string]: unknown;
} & {
    /**
     * The array of plans containing service and associated plan details
     */
    plans: Array<{
        /**
         * The billing type of then plan
         */
        billingType: "PRE_PAID" | "POST_PAID" | "UPFRONT_PAID" | "OTHER";
        /**
         * Optional display name for the plan provided by the customer to help differentiate multiple plans
         */
        nickname?: string | null;
        /**
         * Mandatory if openStatus is OPEN
         */
        planOverview: {
            /**
             * The name of the plan if one exists
             */
            displayName?: string | null;
            /**
             * The end date of the applicability of this plan
             */
            endDate?: string | null;
            /**
             * The start date of the applicability of this plan
             */
            startDate: string;
            [k: string]: unknown;
        };
        /**
         * The serviceId representing a unique service identifier such as a mobile [MSISDN](https://www.etsi.org/deliver/etsi_gts/03/0303/05.00.00_60/gsmts_0303v050000p.pdf), [FNN](https://www.nbnco.com.au/content/dam/nbnco2/documents/sfaa-wba2-dictionary_FTTN-launch.pdf) or internet service e.g [NBN AVC Service ID](https://www.nbnco.com.au/content/dam/nbnco2/documents/sfaa-wba2-dictionary_FTTN-launch.pdf). In accordance with [CDR ID permanence](#id-permanence) requirement
         */
        serviceIds: string[];
        /**
         * The type of the plan. The type of plan. A [MOBILE](https://www.legislation.gov.au/Details/C2022C00170/Html/Volume_1#_Toc95898745) service or BROADBAND fixed internet service
         */
        type: "MOBILE" | "BROADBAND";
        [k: string]: unknown;
    }>;
    [k: string]: unknown;
};
/* These are the schema definitions stipulated by the Data Standards Body for the telco api. */

export interface TelcoAccountUsage {
    /**
     * Tokenised ID of the account. In accordance with [CDR ID permanence](#id-permanence) requirements
     */
    accountId: string;
    /**
     * List of services that are part of the account
     */
    services: Array<{
        service: {
            /**
             * Optional description of the service used for display purposes
             */
            displayName?: string | null;
            /**
             * Date when the usage period ends
             */
            endDate?: string | null;
            /**
             * Required if the service includes a phone number
             */
            phoneNumber?: string | null;
            /**
             * Tokenised ID of the service identifier. E.g. a mobile [MSISDN](https://www.etsi.org/deliver/etsi_gts/03/0303/05.00.00_60/gsmts_0303v050000p.pdf), [FNN](https://www.nbnco.com.au/content/dam/nbnco2/documents/sfaa-wba2-dictionary_FTTN-launch.pdf) or internet service e.g [NBN AVC Service ID](https://www.nbnco.com.au/content/dam/nbnco2/documents/sfaa-wba2-dictionary_FTTN-launch.pdf). To be created in accordance with [CDR ID permanence](#id-permanence) requirements
             */
            serviceId: string;
            /**
             * Date when the usage period started
             */
            startDate: string;
            /**
             * Object containing usage summary
             */
            usage?: {
                /**
                 * Summary of data usage
                 */
                data?: {
                    /**
                     * Cost amount of data usage
                     */
                    amount: string;
                    /**
                     * Amount of data downloaded in megabytes (MB)
                     */
                    download: number;
                    /**
                     * Required if roaming is suipported
                     */
                    roaming?: {
                        /**
                         * Amount value of data roaming charges
                         */
                        amount?: string | null;
                        /**
                         * Amount of data used while roaming in megabytes (MB)
                         */
                        download?: number | null;
                        [k: string]: unknown;
                    };
                    /**
                     * Number of data sessions
                     */
                    sessions?: number | null;
                    /**
                     * Amount of data uploaded in megabytes (MB)
                     */
                    upload: number;
                    [k: string]: unknown;
                };
                /**
                 * Summary of messaging. Required if messaging services is included in the product plan
                 */
                messaging?: {
                    /**
                     * Summary of MMS usage
                     */
                    mms: {
                        /**
                         * Cost amount of MMS messages
                         */
                        amount: string;
                        /**
                         * ber of international MMS messages sent
                         */
                        international?: number | null;
                        /**
                         * Number of national MMS messages sent
                         */
                        national: number;
                        /**
                         * Number of roaming SMS messages sent. Including premium SMS services
                         */
                        roaming?: number | null;
                        [k: string]: unknown;
                    };
                    /**
                     * Summary of SMS usage
                     */
                    sms: {
                        /**
                         * Cost amount of SMS messages. Including premium SMS services
                         */
                        amount: string;
                        /**
                         * Number of international SMS messages sent. Including premium SMS services
                         */
                        international?: number | null;
                        /**
                         * Number of national SMS messages sent. Including premium SMS services
                         */
                        national: number;
                        /**
                         * Number of roaming SMS messages sent. Including premium SMS services
                         */
                        roaming?: number | null;
                        [k: string]: unknown;
                    };
                    [k: string]: unknown;
                };
                /**
                 * Summary of voice calls. Required if voice calls are included in product plan
                 */
                voice?: {
                    /**
                     * International voice calls. Requied if international calling is supported
                     */
                    international: {
                        /**
                         * Cost amount of international voice calls
                         */
                        amount: string;
                        /**
                         * Total duration (hours, minutes, and seconds) of international voice calls. Not limited to 24hrs
                         */
                        duration: string;
                        /**
                         * Number of international voice calls
                         */
                        number: number;
                        [k: string]: unknown;
                    };
                    /**
                     * National voice calls
                     */
                    national: {
                        /**
                         * Cost amount of national calls
                         */
                        amount: string;
                        /**
                         * Total duration (hours, minutes, and seconds) of national voice calls. Not limited to 24hrs
                         */
                        duration: string;
                        /**
                         * Number of national voice calls
                         */
                        number: number;
                        [k: string]: unknown;
                    };
                    /**
                     * Roaming voice calls, Required if roaming is supported
                     */
                    roaming: {
                        /**
                         * Cost amount of roaming voice calls
                         */
                        amount: string;
                        /**
                         * Total duration (hours, minutes, and seconds) of roaming voice calls. Not limited to 24hrs
                         */
                        duration: string;
                        /**
                         * Number of roaming voice calls
                         */
                        number: number;
                        [k: string]: unknown;
                    };
                    [k: string]: unknown;
                };
                [k: string]: unknown;
            };
            [k: string]: unknown;
        };
        [k: string]: unknown;
    }>;
    [k: string]: unknown;
}
/* These are the schema definitions stipulated by the Data Standards Body for the telco api. */

export interface TelcoAccountUsageServices {
    service: {
        /**
         * Optional description of the service used for display purposes
         */
        displayName?: string | null;
        /**
         * Date when the usage period ends
         */
        endDate?: string | null;
        /**
         * Required if the service includes a phone number
         */
        phoneNumber?: string | null;
        /**
         * Tokenised ID of the service identifier. E.g. a mobile [MSISDN](https://www.etsi.org/deliver/etsi_gts/03/0303/05.00.00_60/gsmts_0303v050000p.pdf), [FNN](https://www.nbnco.com.au/content/dam/nbnco2/documents/sfaa-wba2-dictionary_FTTN-launch.pdf) or internet service e.g [NBN AVC Service ID](https://www.nbnco.com.au/content/dam/nbnco2/documents/sfaa-wba2-dictionary_FTTN-launch.pdf). To be created in accordance with [CDR ID permanence](#id-permanence) requirements
         */
        serviceId: string;
        /**
         * Date when the usage period started
         */
        startDate: string;
        /**
         * Object containing usage summary
         */
        usage?: {
            /**
             * Summary of data usage
             */
            data?: {
                /**
                 * Cost amount of data usage
                 */
                amount: string;
                /**
                 * Amount of data downloaded in megabytes (MB)
                 */
                download: number;
                /**
                 * Required if roaming is suipported
                 */
                roaming?: {
                    /**
                     * Amount value of data roaming charges
                     */
                    amount?: string | null;
                    /**
                     * Amount of data used while roaming in megabytes (MB)
                     */
                    download?: number | null;
                    [k: string]: unknown;
                };
                /**
                 * Number of data sessions
                 */
                sessions?: number | null;
                /**
                 * Amount of data uploaded in megabytes (MB)
                 */
                upload: number;
                [k: string]: unknown;
            };
            /**
             * Summary of messaging. Required if messaging services is included in the product plan
             */
            messaging?: {
                /**
                 * Summary of MMS usage
                 */
                mms: {
                    /**
                     * Cost amount of MMS messages
                     */
                    amount: string;
                    /**
                     * ber of international MMS messages sent
                     */
                    international?: number | null;
                    /**
                     * Number of national MMS messages sent
                     */
                    national: number;
                    /**
                     * Number of roaming SMS messages sent. Including premium SMS services
                     */
                    roaming?: number | null;
                    [k: string]: unknown;
                };
                /**
                 * Summary of SMS usage
                 */
                sms: {
                    /**
                     * Cost amount of SMS messages. Including premium SMS services
                     */
                    amount: string;
                    /**
                     * Number of international SMS messages sent. Including premium SMS services
                     */
                    international?: number | null;
                    /**
                     * Number of national SMS messages sent. Including premium SMS services
                     */
                    national: number;
                    /**
                     * Number of roaming SMS messages sent. Including premium SMS services
                     */
                    roaming?: number | null;
                    [k: string]: unknown;
                };
                [k: string]: unknown;
            };
            /**
             * Summary of voice calls. Required if voice calls are included in product plan
             */
            voice?: {
                /**
                 * International voice calls. Requied if international calling is supported
                 */
                international: {
                    /**
                     * Cost amount of international voice calls
                     */
                    amount: string;
                    /**
                     * Total duration (hours, minutes, and seconds) of international voice calls. Not limited to 24hrs
                     */
                    duration: string;
                    /**
                     * Number of international voice calls
                     */
                    number: number;
                    [k: string]: unknown;
                };
                /**
                 * National voice calls
                 */
                national: {
                    /**
                     * Cost amount of national calls
                     */
                    amount: string;
                    /**
                     * Total duration (hours, minutes, and seconds) of national voice calls. Not limited to 24hrs
                     */
                    duration: string;
                    /**
                     * Number of national voice calls
                     */
                    number: number;
                    [k: string]: unknown;
                };
                /**
                 * Roaming voice calls, Required if roaming is supported
                 */
                roaming: {
                    /**
                     * Cost amount of roaming voice calls
                     */
                    amount: string;
                    /**
                     * Total duration (hours, minutes, and seconds) of roaming voice calls. Not limited to 24hrs
                     */
                    duration: string;
                    /**
                     * Number of roaming voice calls
                     */
                    number: number;
                    [k: string]: unknown;
                };
                [k: string]: unknown;
            };
            [k: string]: unknown;
        };
        [k: string]: unknown;
    };
    [k: string]: unknown;
}
/* These are the schema definitions stipulated by the Data Standards Body for the telco api. */

/**
 * Object that contains links to additional information on specific topics
 */
export interface TelcoAdditionalInformation {
    /**
     * A link to detail on bundles that this plan can be a part of
     */
    bundleUri?: string | null;
    /**
     * A link to detail on eligibility criteria for the plan
     */
    eligibilityUri?: string | null;
    /**
     * A link to a general overview of the plan
     */
    overviewUri?: string | null;
    /**
     * A link to detail on pricing for the plan
     */
    pricingUri?: string | null;
    /**
     * A link to terms and conditions for the plan
     */
    termsUri?: string | null;
    [k: string]: unknown;
}
/* These are the schema definitions stipulated by the Data Standards Body for the telco api. */

/**
 * Object containing account service usage summary
 */
export interface TelcoBalance {
    /**
     * Summary of balances
     */
    services: Array<{
        /**
         * A summary of Service balances
         */
        balance?: {
            /**
             * Summary of data balances
             */
            data?: {
                /**
                 * Remaining value amount of data available. Required unless planType is UNSUPPORTED or UNMETERED
                 */
                amount?: string | null;
                /**
                 * An overview of plan limits. Required unless planType is UNSUPPORTED
                 */
                description?: string | null;
                /**
                 * Remaining download data in megabytes (MB). Required unless planType is UNSUPPORTED or UNMETERED
                 */
                download?: number | null;
                /**
                 * Plan type for this feature. METERED: A plan is charged by usage for the feature. UNMETERED: A plan with no limits for a feature. LIMITED: Where plan limit inclusions apply. UNSUPPORTED: Feature is not supported
                 */
                planType: "METERED" | "UNMETERED" | "LIMITED" | "UNSUPPORTED";
                /**
                 * Balance of data roaming charges. Required unless planType is UNSUPPORTED
                 */
                roaming?: {
                    /**
                     * Amount value of data roaming charges. Required unless planType is UNSUPPORTED
                     */
                    amount?: string | null;
                    /**
                     * An overview of plan limits. Required unless planType is UNSUPPORTED
                     */
                    description?: string | null;
                    /**
                     * Amount of data used overseas in megabytes (MB). Required unless planType is UNSUPPORTED
                     */
                    download?: number | null;
                    [k: string]: unknown;
                };
                /**
                 * Remaining upload data in megabytes (MB). Required unless planType is UNSUPPORTED or UNMETERED
                 */
                upload?: number | null;
                [k: string]: unknown;
            };
            /**
             * Summary of messaging. Required if messaging services is included in the product plan
             */
            messaging?: {
                /**
                 * Summary of MMS Balance. Required if the service plan supports MMS messaging
                 */
                mms: {
                    /**
                     * Amount value of MMS messages remaining. Required unless planType is UNSUPPORTED or UNMETERED
                     */
                    amount?: string | null;
                    /**
                     * An overview of plan limits. Required unless planType is UNSUPPORTED
                     */
                    description?: string | null;
                    /**
                     * Number of international MMS messages remaining. Required unless planType is UNSUPPORTED or UNMETERED
                     */
                    international?: number | null;
                    /**
                     * Number of national MMS messages remaining. Required unless planType is UNSUPPORTED or UNMETERED
                     */
                    national?: number | null;
                    /**
                     * Number of roaming MMS messages remaining. Required unless planType is UNSUPPORTED or UNMETERED
                     */
                    roaming?: number | null;
                    [k: string]: unknown;
                };
                /**
                 * Plan type for this feature. METERED: A plan is charged by usage for the feature. UNMETERED: A plan with no limits for a feature. LIMITED: Where plan limit inclusions apply. UNSUPPORTED: Feature is not supported
                 */
                planType?: "METERED" | "UNMETERED" | "LIMITED" | "UNSUPPORTED";
                /**
                 * Summary of SMS Balance. Required if the service plan supports SMS messaging
                 */
                sms: {
                    /**
                     * Amount value of SMS messages remaining. Required unless planType is UNSUPPORTED or UNMETERED
                     */
                    amount?: string | null;
                    /**
                     * An overview of plan limits. Required unless planType is UNSUPPORTED
                     */
                    description?: string | null;
                    /**
                     * Number of international SMS messages remaining. Required unless planType is UNSUPPORTED or UNMETERED
                     */
                    international?: number | null;
                    /**
                     * Number of national SMS messages remaining. Required unless planType is UNSUPPORTED or UNMETERED
                     */
                    national?: number | null;
                    /**
                     * Number of roaming SMS messages remaining. Required unless planType is UNSUPPORTED or UNMETERED
                     */
                    roaming?: number | null;
                    [k: string]: unknown;
                };
                [k: string]: unknown;
            };
            /**
             * Summary of voice balances. Required if voice calls are included in product plan
             */
            voice?: {
                /**
                 * International voice calls
                 */
                international?: {
                    /**
                     * Amount value of international calls available. Required unless planType is UNSUPPORTED or UNMETERED
                     */
                    amount?: string | null;
                    /**
                     * An overview of plan limits. Required unless planType is UNSUPPORTED
                     */
                    description?: string | null;
                    /**
                     * Total duration (hours, minutes, and seconds) of international voice calls available. Not limited to 24hrs. Required unless planType is UNSUPPORTED or UNMETERED
                     */
                    duration?: string | null;
                    /**
                     * Number of international voice calls available Required unless planType is UNSUPPORTED or UNMETERED
                     */
                    number?: number | null;
                    [k: string]: unknown;
                };
                /**
                 * National voice calls
                 */
                national?: {
                    /**
                     * Amount balance of national calls. Required unless planType is UNSUPPORTED or UNMETERED
                     */
                    amount?: string | null;
                    /**
                     * An overview of plan limits. Required unless planType is UNSUPPORTED
                     */
                    description?: string | null;
                    /**
                     * Total duration (hours, minutes, and seconds) of national voice calls. Not limited to 24hrs. Required unless planType is UNSUPPORTED or UNMETERED
                     */
                    duration?: string | null;
                    /**
                     * Number of national voice calls. Required unless planType is UNSUPPORTED or UNMETERED
                     */
                    number?: number | null;
                    [k: string]: unknown;
                };
                /**
                 * Plan type for this feature. METERED: A plan is charged by usage for the feature. UNMETERED: A plan with no limits for a feature. LIMITED: Where plan limit inclusions apply. UNSUPPORTED: Feature is not supported
                 */
                planType: "METERED" | "UNMETERED" | "LIMITED" | "UNSUPPORTED";
                /**
                 * Roaming voice calls
                 */
                roaming?: {
                    /**
                     * Amount value of roaming calls available. Required unless planType is UNSUPPORTED or UNMETERED
                     */
                    amount?: string | null;
                    /**
                     * An overview of plan limits. Required unless planType is UNSUPPORTED
                     */
                    description?: string | null;
                    /**
                     * Total duration (hours, minutes, and seconds) of roaming voice calls available. Not limited to 24hrs. Required unless planType is UNSUPPORTED or UNMETERED
                     */
                    duration?: string | null;
                    /**
                     * Number of roaming voice calls available Required unless planType is UNSUPPORTED or UNMETERED
                     */
                    number?: number | null;
                    [k: string]: unknown;
                };
                [k: string]: unknown;
            };
            [k: string]: unknown;
        };
        /**
         * Optional description of the service used for display purposes
         */
        displayName?: string | null;
        /**
         * Date when the balance period ends
         */
        endDate?: string | null;
        /**
         * Required if the service includes a phone number
         */
        phoneNumber?: string | null;
        /**
         * The serviceId representing a unique service identifier such as a mobile [MSISDN](https://www.etsi.org/deliver/etsi_gts/03/0303/05.00.00_60/gsmts_0303v050000p.pdf), [FNN](https://www.nbnco.com.au/content/dam/nbnco2/documents/sfaa-wba2-dictionary_FTTN-launch.pdf) or internet service e.g [NBN AVC Service ID](https://www.nbnco.com.au/content/dam/nbnco2/documents/sfaa-wba2-dictionary_FTTN-launch.pdf). In accordance with [CDR ID permanence](#id-permanence) requirements
         */
        serviceId?: string | null;
        /**
         * Date when the balance period started
         */
        startDate?: string | null;
        [k: string]: unknown;
    }>;
    [k: string]: unknown;
}
/* These are the schema definitions stipulated by the Data Standards Body for the telco api. */

export interface TelcoBalanceListResponse {
    data: {
        /**
         * Array of account balances
         */
        balances: Array<{
            /**
             * The ID of the account. In accordance with [CDR ID permanence](#id-permanence) requirements
             */
            accountId?: string | null;
            /**
             * Object containing account service usage summary
             */
            balance?: {
                /**
                 * Summary of balances
                 */
                services: Array<{
                    /**
                     * A summary of Service balances
                     */
                    balance?: {
                        /**
                         * Summary of data balances
                         */
                        data?: {
                            /**
                             * Remaining value amount of data available. Required unless planType is UNSUPPORTED or UNMETERED
                             */
                            amount?: string | null;
                            /**
                             * An overview of plan limits. Required unless planType is UNSUPPORTED
                             */
                            description?: string | null;
                            /**
                             * Remaining download data in megabytes (MB). Required unless planType is UNSUPPORTED or UNMETERED
                             */
                            download?: number | null;
                            /**
                             * Plan type for this feature. METERED: A plan is charged by usage for the feature. UNMETERED: A plan with no limits for a feature. LIMITED: Where plan limit inclusions apply. UNSUPPORTED: Feature is not supported
                             */
                            planType: "METERED" | "UNMETERED" | "LIMITED" | "UNSUPPORTED";
                            /**
                             * Balance of data roaming charges. Required unless planType is UNSUPPORTED
                             */
                            roaming?: {
                                /**
                                 * Amount value of data roaming charges. Required unless planType is UNSUPPORTED
                                 */
                                amount?: string | null;
                                /**
                                 * An overview of plan limits. Required unless planType is UNSUPPORTED
                                 */
                                description?: string | null;
                                /**
                                 * Amount of data used overseas in megabytes (MB). Required unless planType is UNSUPPORTED
                                 */
                                download?: number | null;
                                [k: string]: unknown;
                            };
                            /**
                             * Remaining upload data in megabytes (MB). Required unless planType is UNSUPPORTED or UNMETERED
                             */
                            upload?: number | null;
                            [k: string]: unknown;
                        };
                        /**
                         * Summary of messaging. Required if messaging services is included in the product plan
                         */
                        messaging?: {
                            /**
                             * Summary of MMS Balance. Required if the service plan supports MMS messaging
                             */
                            mms: {
                                /**
                                 * Amount value of MMS messages remaining. Required unless planType is UNSUPPORTED or UNMETERED
                                 */
                                amount?: string | null;
                                /**
                                 * An overview of plan limits. Required unless planType is UNSUPPORTED
                                 */
                                description?: string | null;
                                /**
                                 * Number of international MMS messages remaining. Required unless planType is UNSUPPORTED or UNMETERED
                                 */
                                international?: number | null;
                                /**
                                 * Number of national MMS messages remaining. Required unless planType is UNSUPPORTED or UNMETERED
                                 */
                                national?: number | null;
                                /**
                                 * Number of roaming MMS messages remaining. Required unless planType is UNSUPPORTED or UNMETERED
                                 */
                                roaming?: number | null;
                                [k: string]: unknown;
                            };
                            /**
                             * Plan type for this feature. METERED: A plan is charged by usage for the feature. UNMETERED: A plan with no limits for a feature. LIMITED: Where plan limit inclusions apply. UNSUPPORTED: Feature is not supported
                             */
                            planType?: "METERED" | "UNMETERED" | "LIMITED" | "UNSUPPORTED";
                            /**
                             * Summary of SMS Balance. Required if the service plan supports SMS messaging
                             */
                            sms: {
                                /**
                                 * Amount value of SMS messages remaining. Required unless planType is UNSUPPORTED or UNMETERED
                                 */
                                amount?: string | null;
                                /**
                                 * An overview of plan limits. Required unless planType is UNSUPPORTED
                                 */
                                description?: string | null;
                                /**
                                 * Number of international SMS messages remaining. Required unless planType is UNSUPPORTED or UNMETERED
                                 */
                                international?: number | null;
                                /**
                                 * Number of national SMS messages remaining. Required unless planType is UNSUPPORTED or UNMETERED
                                 */
                                national?: number | null;
                                /**
                                 * Number of roaming SMS messages remaining. Required unless planType is UNSUPPORTED or UNMETERED
                                 */
                                roaming?: number | null;
                                [k: string]: unknown;
                            };
                            [k: string]: unknown;
                        };
                        /**
                         * Summary of voice balances. Required if voice calls are included in product plan
                         */
                        voice?: {
                            /**
                             * International voice calls
                             */
                            international?: {
                                /**
                                 * Amount value of international calls available. Required unless planType is UNSUPPORTED or UNMETERED
                                 */
                                amount?: string | null;
                                /**
                                 * An overview of plan limits. Required unless planType is UNSUPPORTED
                                 */
                                description?: string | null;
                                /**
                                 * Total duration (hours, minutes, and seconds) of international voice calls available. Not limited to 24hrs. Required unless planType is UNSUPPORTED or UNMETERED
                                 */
                                duration?: string | null;
                                /**
                                 * Number of international voice calls available Required unless planType is UNSUPPORTED or UNMETERED
                                 */
                                number?: number | null;
                                [k: string]: unknown;
                            };
                            /**
                             * National voice calls
                             */
                            national?: {
                                /**
                                 * Amount balance of national calls. Required unless planType is UNSUPPORTED or UNMETERED
                                 */
                                amount?: string | null;
                                /**
                                 * An overview of plan limits. Required unless planType is UNSUPPORTED
                                 */
                                description?: string | null;
                                /**
                                 * Total duration (hours, minutes, and seconds) of national voice calls. Not limited to 24hrs. Required unless planType is UNSUPPORTED or UNMETERED
                                 */
                                duration?: string | null;
                                /**
                                 * Number of national voice calls. Required unless planType is UNSUPPORTED or UNMETERED
                                 */
                                number?: number | null;
                                [k: string]: unknown;
                            };
                            /**
                             * Plan type for this feature. METERED: A plan is charged by usage for the feature. UNMETERED: A plan with no limits for a feature. LIMITED: Where plan limit inclusions apply. UNSUPPORTED: Feature is not supported
                             */
                            planType: "METERED" | "UNMETERED" | "LIMITED" | "UNSUPPORTED";
                            /**
                             * Roaming voice calls
                             */
                            roaming?: {
                                /**
                                 * Amount value of roaming calls available. Required unless planType is UNSUPPORTED or UNMETERED
                                 */
                                amount?: string | null;
                                /**
                                 * An overview of plan limits. Required unless planType is UNSUPPORTED
                                 */
                                description?: string | null;
                                /**
                                 * Total duration (hours, minutes, and seconds) of roaming voice calls available. Not limited to 24hrs. Required unless planType is UNSUPPORTED or UNMETERED
                                 */
                                duration?: string | null;
                                /**
                                 * Number of roaming voice calls available Required unless planType is UNSUPPORTED or UNMETERED
                                 */
                                number?: number | null;
                                [k: string]: unknown;
                            };
                            [k: string]: unknown;
                        };
                        [k: string]: unknown;
                    };
                    /**
                     * Optional description of the service used for display purposes
                     */
                    displayName?: string | null;
                    /**
                     * Date when the balance period ends
                     */
                    endDate?: string | null;
                    /**
                     * Required if the service includes a phone number
                     */
                    phoneNumber?: string | null;
                    /**
                     * The serviceId representing a unique service identifier such as a mobile [MSISDN](https://www.etsi.org/deliver/etsi_gts/03/0303/05.00.00_60/gsmts_0303v050000p.pdf), [FNN](https://www.nbnco.com.au/content/dam/nbnco2/documents/sfaa-wba2-dictionary_FTTN-launch.pdf) or internet service e.g [NBN AVC Service ID](https://www.nbnco.com.au/content/dam/nbnco2/documents/sfaa-wba2-dictionary_FTTN-launch.pdf). In accordance with [CDR ID permanence](#id-permanence) requirements
                     */
                    serviceId?: string | null;
                    /**
                     * Date when the balance period started
                     */
                    startDate?: string | null;
                    [k: string]: unknown;
                }>;
                [k: string]: unknown;
            };
            [k: string]: unknown;
        }>;
        [k: string]: unknown;
    };
    links: {
        /**
         * URI to the first page of this set. Mandatory if this response is not the first page
         */
        first?: string | null;
        /**
         * URI to the last page of this set. Mandatory if this response is not the last page
         */
        last?: string | null;
        /**
         * URI to the next page of this set. Mandatory if this response is not the last page
         */
        next?: string | null;
        /**
         * URI to the previous page of this set. Mandatory if this response is not the first page
         */
        prev?: string | null;
        /**
         * Fully qualified link that generated the current response document
         */
        self: string;
        [k: string]: unknown;
    };
    meta: {
        /**
         * The total number of pages in the full set. See [pagination](#pagination).
         */
        totalPages: number;
        /**
         * The total number of records in the full set. See [pagination](#pagination).
         */
        totalRecords: number;
        [k: string]: unknown;
    };
    [k: string]: unknown;
}
/* These are the schema definitions stipulated by the Data Standards Body for the telco api. */

export interface TelcoBalanceListResponseData {
    /**
     * Array of account balances
     */
    balances: Array<{
        /**
         * The ID of the account. In accordance with [CDR ID permanence](#id-permanence) requirements
         */
        accountId?: string | null;
        /**
         * Object containing account service usage summary
         */
        balance?: {
            /**
             * Summary of balances
             */
            services: Array<{
                /**
                 * A summary of Service balances
                 */
                balance?: {
                    /**
                     * Summary of data balances
                     */
                    data?: {
                        /**
                         * Remaining value amount of data available. Required unless planType is UNSUPPORTED or UNMETERED
                         */
                        amount?: string | null;
                        /**
                         * An overview of plan limits. Required unless planType is UNSUPPORTED
                         */
                        description?: string | null;
                        /**
                         * Remaining download data in megabytes (MB). Required unless planType is UNSUPPORTED or UNMETERED
                         */
                        download?: number | null;
                        /**
                         * Plan type for this feature. METERED: A plan is charged by usage for the feature. UNMETERED: A plan with no limits for a feature. LIMITED: Where plan limit inclusions apply. UNSUPPORTED: Feature is not supported
                         */
                        planType: "METERED" | "UNMETERED" | "LIMITED" | "UNSUPPORTED";
                        /**
                         * Balance of data roaming charges. Required unless planType is UNSUPPORTED
                         */
                        roaming?: {
                            /**
                             * Amount value of data roaming charges. Required unless planType is UNSUPPORTED
                             */
                            amount?: string | null;
                            /**
                             * An overview of plan limits. Required unless planType is UNSUPPORTED
                             */
                            description?: string | null;
                            /**
                             * Amount of data used overseas in megabytes (MB). Required unless planType is UNSUPPORTED
                             */
                            download?: number | null;
                            [k: string]: unknown;
                        };
                        /**
                         * Remaining upload data in megabytes (MB). Required unless planType is UNSUPPORTED or UNMETERED
                         */
                        upload?: number | null;
                        [k: string]: unknown;
                    };
                    /**
                     * Summary of messaging. Required if messaging services is included in the product plan
                     */
                    messaging?: {
                        /**
                         * Summary of MMS Balance. Required if the service plan supports MMS messaging
                         */
                        mms: {
                            /**
                             * Amount value of MMS messages remaining. Required unless planType is UNSUPPORTED or UNMETERED
                             */
                            amount?: string | null;
                            /**
                             * An overview of plan limits. Required unless planType is UNSUPPORTED
                             */
                            description?: string | null;
                            /**
                             * Number of international MMS messages remaining. Required unless planType is UNSUPPORTED or UNMETERED
                             */
                            international?: number | null;
                            /**
                             * Number of national MMS messages remaining. Required unless planType is UNSUPPORTED or UNMETERED
                             */
                            national?: number | null;
                            /**
                             * Number of roaming MMS messages remaining. Required unless planType is UNSUPPORTED or UNMETERED
                             */
                            roaming?: number | null;
                            [k: string]: unknown;
                        };
                        /**
                         * Plan type for this feature. METERED: A plan is charged by usage for the feature. UNMETERED: A plan with no limits for a feature. LIMITED: Where plan limit inclusions apply. UNSUPPORTED: Feature is not supported
                         */
                        planType?: "METERED" | "UNMETERED" | "LIMITED" | "UNSUPPORTED";
                        /**
                         * Summary of SMS Balance. Required if the service plan supports SMS messaging
                         */
                        sms: {
                            /**
                             * Amount value of SMS messages remaining. Required unless planType is UNSUPPORTED or UNMETERED
                             */
                            amount?: string | null;
                            /**
                             * An overview of plan limits. Required unless planType is UNSUPPORTED
                             */
                            description?: string | null;
                            /**
                             * Number of international SMS messages remaining. Required unless planType is UNSUPPORTED or UNMETERED
                             */
                            international?: number | null;
                            /**
                             * Number of national SMS messages remaining. Required unless planType is UNSUPPORTED or UNMETERED
                             */
                            national?: number | null;
                            /**
                             * Number of roaming SMS messages remaining. Required unless planType is UNSUPPORTED or UNMETERED
                             */
                            roaming?: number | null;
                            [k: string]: unknown;
                        };
                        [k: string]: unknown;
                    };
                    /**
                     * Summary of voice balances. Required if voice calls are included in product plan
                     */
                    voice?: {
                        /**
                         * International voice calls
                         */
                        international?: {
                            /**
                             * Amount value of international calls available. Required unless planType is UNSUPPORTED or UNMETERED
                             */
                            amount?: string | null;
                            /**
                             * An overview of plan limits. Required unless planType is UNSUPPORTED
                             */
                            description?: string | null;
                            /**
                             * Total duration (hours, minutes, and seconds) of international voice calls available. Not limited to 24hrs. Required unless planType is UNSUPPORTED or UNMETERED
                             */
                            duration?: string | null;
                            /**
                             * Number of international voice calls available Required unless planType is UNSUPPORTED or UNMETERED
                             */
                            number?: number | null;
                            [k: string]: unknown;
                        };
                        /**
                         * National voice calls
                         */
                        national?: {
                            /**
                             * Amount balance of national calls. Required unless planType is UNSUPPORTED or UNMETERED
                             */
                            amount?: string | null;
                            /**
                             * An overview of plan limits. Required unless planType is UNSUPPORTED
                             */
                            description?: string | null;
                            /**
                             * Total duration (hours, minutes, and seconds) of national voice calls. Not limited to 24hrs. Required unless planType is UNSUPPORTED or UNMETERED
                             */
                            duration?: string | null;
                            /**
                             * Number of national voice calls. Required unless planType is UNSUPPORTED or UNMETERED
                             */
                            number?: number | null;
                            [k: string]: unknown;
                        };
                        /**
                         * Plan type for this feature. METERED: A plan is charged by usage for the feature. UNMETERED: A plan with no limits for a feature. LIMITED: Where plan limit inclusions apply. UNSUPPORTED: Feature is not supported
                         */
                        planType: "METERED" | "UNMETERED" | "LIMITED" | "UNSUPPORTED";
                        /**
                         * Roaming voice calls
                         */
                        roaming?: {
                            /**
                             * Amount value of roaming calls available. Required unless planType is UNSUPPORTED or UNMETERED
                             */
                            amount?: string | null;
                            /**
                             * An overview of plan limits. Required unless planType is UNSUPPORTED
                             */
                            description?: string | null;
                            /**
                             * Total duration (hours, minutes, and seconds) of roaming voice calls available. Not limited to 24hrs. Required unless planType is UNSUPPORTED or UNMETERED
                             */
                            duration?: string | null;
                            /**
                             * Number of roaming voice calls available Required unless planType is UNSUPPORTED or UNMETERED
                             */
                            number?: number | null;
                            [k: string]: unknown;
                        };
                        [k: string]: unknown;
                    };
                    [k: string]: unknown;
                };
                /**
                 * Optional description of the service used for display purposes
                 */
                displayName?: string | null;
                /**
                 * Date when the balance period ends
                 */
                endDate?: string | null;
                /**
                 * Required if the service includes a phone number
                 */
                phoneNumber?: string | null;
                /**
                 * The serviceId representing a unique service identifier such as a mobile [MSISDN](https://www.etsi.org/deliver/etsi_gts/03/0303/05.00.00_60/gsmts_0303v050000p.pdf), [FNN](https://www.nbnco.com.au/content/dam/nbnco2/documents/sfaa-wba2-dictionary_FTTN-launch.pdf) or internet service e.g [NBN AVC Service ID](https://www.nbnco.com.au/content/dam/nbnco2/documents/sfaa-wba2-dictionary_FTTN-launch.pdf). In accordance with [CDR ID permanence](#id-permanence) requirements
                 */
                serviceId?: string | null;
                /**
                 * Date when the balance period started
                 */
                startDate?: string | null;
                [k: string]: unknown;
            }>;
            [k: string]: unknown;
        };
        [k: string]: unknown;
    }>;
    [k: string]: unknown;
}
/* These are the schema definitions stipulated by the Data Standards Body for the telco api. */

export interface TelcoBalanceResponse {
    /**
     * Object containing account service usage summary
     */
    data: {
        /**
         * Summary of balances
         */
        services: Array<{
            /**
             * A summary of Service balances
             */
            balance?: {
                /**
                 * Summary of data balances
                 */
                data?: {
                    /**
                     * Remaining value amount of data available. Required unless planType is UNSUPPORTED or UNMETERED
                     */
                    amount?: string | null;
                    /**
                     * An overview of plan limits. Required unless planType is UNSUPPORTED
                     */
                    description?: string | null;
                    /**
                     * Remaining download data in megabytes (MB). Required unless planType is UNSUPPORTED or UNMETERED
                     */
                    download?: number | null;
                    /**
                     * Plan type for this feature. METERED: A plan is charged by usage for the feature. UNMETERED: A plan with no limits for a feature. LIMITED: Where plan limit inclusions apply. UNSUPPORTED: Feature is not supported
                     */
                    planType: "METERED" | "UNMETERED" | "LIMITED" | "UNSUPPORTED";
                    /**
                     * Balance of data roaming charges. Required unless planType is UNSUPPORTED
                     */
                    roaming?: {
                        /**
                         * Amount value of data roaming charges. Required unless planType is UNSUPPORTED
                         */
                        amount?: string | null;
                        /**
                         * An overview of plan limits. Required unless planType is UNSUPPORTED
                         */
                        description?: string | null;
                        /**
                         * Amount of data used overseas in megabytes (MB). Required unless planType is UNSUPPORTED
                         */
                        download?: number | null;
                        [k: string]: unknown;
                    };
                    /**
                     * Remaining upload data in megabytes (MB). Required unless planType is UNSUPPORTED or UNMETERED
                     */
                    upload?: number | null;
                    [k: string]: unknown;
                };
                /**
                 * Summary of messaging. Required if messaging services is included in the product plan
                 */
                messaging?: {
                    /**
                     * Summary of MMS Balance. Required if the service plan supports MMS messaging
                     */
                    mms: {
                        /**
                         * Amount value of MMS messages remaining. Required unless planType is UNSUPPORTED or UNMETERED
                         */
                        amount?: string | null;
                        /**
                         * An overview of plan limits. Required unless planType is UNSUPPORTED
                         */
                        description?: string | null;
                        /**
                         * Number of international MMS messages remaining. Required unless planType is UNSUPPORTED or UNMETERED
                         */
                        international?: number | null;
                        /**
                         * Number of national MMS messages remaining. Required unless planType is UNSUPPORTED or UNMETERED
                         */
                        national?: number | null;
                        /**
                         * Number of roaming MMS messages remaining. Required unless planType is UNSUPPORTED or UNMETERED
                         */
                        roaming?: number | null;
                        [k: string]: unknown;
                    };
                    /**
                     * Plan type for this feature. METERED: A plan is charged by usage for the feature. UNMETERED: A plan with no limits for a feature. LIMITED: Where plan limit inclusions apply. UNSUPPORTED: Feature is not supported
                     */
                    planType?: "METERED" | "UNMETERED" | "LIMITED" | "UNSUPPORTED";
                    /**
                     * Summary of SMS Balance. Required if the service plan supports SMS messaging
                     */
                    sms: {
                        /**
                         * Amount value of SMS messages remaining. Required unless planType is UNSUPPORTED or UNMETERED
                         */
                        amount?: string | null;
                        /**
                         * An overview of plan limits. Required unless planType is UNSUPPORTED
                         */
                        description?: string | null;
                        /**
                         * Number of international SMS messages remaining. Required unless planType is UNSUPPORTED or UNMETERED
                         */
                        international?: number | null;
                        /**
                         * Number of national SMS messages remaining. Required unless planType is UNSUPPORTED or UNMETERED
                         */
                        national?: number | null;
                        /**
                         * Number of roaming SMS messages remaining. Required unless planType is UNSUPPORTED or UNMETERED
                         */
                        roaming?: number | null;
                        [k: string]: unknown;
                    };
                    [k: string]: unknown;
                };
                /**
                 * Summary of voice balances. Required if voice calls are included in product plan
                 */
                voice?: {
                    /**
                     * International voice calls
                     */
                    international?: {
                        /**
                         * Amount value of international calls available. Required unless planType is UNSUPPORTED or UNMETERED
                         */
                        amount?: string | null;
                        /**
                         * An overview of plan limits. Required unless planType is UNSUPPORTED
                         */
                        description?: string | null;
                        /**
                         * Total duration (hours, minutes, and seconds) of international voice calls available. Not limited to 24hrs. Required unless planType is UNSUPPORTED or UNMETERED
                         */
                        duration?: string | null;
                        /**
                         * Number of international voice calls available Required unless planType is UNSUPPORTED or UNMETERED
                         */
                        number?: number | null;
                        [k: string]: unknown;
                    };
                    /**
                     * National voice calls
                     */
                    national?: {
                        /**
                         * Amount balance of national calls. Required unless planType is UNSUPPORTED or UNMETERED
                         */
                        amount?: string | null;
                        /**
                         * An overview of plan limits. Required unless planType is UNSUPPORTED
                         */
                        description?: string | null;
                        /**
                         * Total duration (hours, minutes, and seconds) of national voice calls. Not limited to 24hrs. Required unless planType is UNSUPPORTED or UNMETERED
                         */
                        duration?: string | null;
                        /**
                         * Number of national voice calls. Required unless planType is UNSUPPORTED or UNMETERED
                         */
                        number?: number | null;
                        [k: string]: unknown;
                    };
                    /**
                     * Plan type for this feature. METERED: A plan is charged by usage for the feature. UNMETERED: A plan with no limits for a feature. LIMITED: Where plan limit inclusions apply. UNSUPPORTED: Feature is not supported
                     */
                    planType: "METERED" | "UNMETERED" | "LIMITED" | "UNSUPPORTED";
                    /**
                     * Roaming voice calls
                     */
                    roaming?: {
                        /**
                         * Amount value of roaming calls available. Required unless planType is UNSUPPORTED or UNMETERED
                         */
                        amount?: string | null;
                        /**
                         * An overview of plan limits. Required unless planType is UNSUPPORTED
                         */
                        description?: string | null;
                        /**
                         * Total duration (hours, minutes, and seconds) of roaming voice calls available. Not limited to 24hrs. Required unless planType is UNSUPPORTED or UNMETERED
                         */
                        duration?: string | null;
                        /**
                         * Number of roaming voice calls available Required unless planType is UNSUPPORTED or UNMETERED
                         */
                        number?: number | null;
                        [k: string]: unknown;
                    };
                    [k: string]: unknown;
                };
                [k: string]: unknown;
            };
            /**
             * Optional description of the service used for display purposes
             */
            displayName?: string | null;
            /**
             * Date when the balance period ends
             */
            endDate?: string | null;
            /**
             * Required if the service includes a phone number
             */
            phoneNumber?: string | null;
            /**
             * The serviceId representing a unique service identifier such as a mobile [MSISDN](https://www.etsi.org/deliver/etsi_gts/03/0303/05.00.00_60/gsmts_0303v050000p.pdf), [FNN](https://www.nbnco.com.au/content/dam/nbnco2/documents/sfaa-wba2-dictionary_FTTN-launch.pdf) or internet service e.g [NBN AVC Service ID](https://www.nbnco.com.au/content/dam/nbnco2/documents/sfaa-wba2-dictionary_FTTN-launch.pdf). In accordance with [CDR ID permanence](#id-permanence) requirements
             */
            serviceId?: string | null;
            /**
             * Date when the balance period started
             */
            startDate?: string | null;
            [k: string]: unknown;
        }>;
        [k: string]: unknown;
    };
    links: {
        /**
         * Fully qualified link that generated the current response document
         */
        self: string;
        [k: string]: unknown;
    };
    meta: {
        [k: string]: unknown;
    };
    [k: string]: unknown;
}
/* These are the schema definitions stipulated by the Data Standards Body for the telco api. */

export interface TelcoBalanceResponseData {
    /**
     * The ID of the account. In accordance with [CDR ID permanence](#id-permanence) requirements
     */
    accountId?: string | null;
    /**
     * Object containing account service usage summary
     */
    balance?: {
        /**
         * Summary of balances
         */
        services: Array<{
            /**
             * A summary of Service balances
             */
            balance?: {
                /**
                 * Summary of data balances
                 */
                data?: {
                    /**
                     * Remaining value amount of data available. Required unless planType is UNSUPPORTED or UNMETERED
                     */
                    amount?: string | null;
                    /**
                     * An overview of plan limits. Required unless planType is UNSUPPORTED
                     */
                    description?: string | null;
                    /**
                     * Remaining download data in megabytes (MB). Required unless planType is UNSUPPORTED or UNMETERED
                     */
                    download?: number | null;
                    /**
                     * Plan type for this feature. METERED: A plan is charged by usage for the feature. UNMETERED: A plan with no limits for a feature. LIMITED: Where plan limit inclusions apply. UNSUPPORTED: Feature is not supported
                     */
                    planType: "METERED" | "UNMETERED" | "LIMITED" | "UNSUPPORTED";
                    /**
                     * Balance of data roaming charges. Required unless planType is UNSUPPORTED
                     */
                    roaming?: {
                        /**
                         * Amount value of data roaming charges. Required unless planType is UNSUPPORTED
                         */
                        amount?: string | null;
                        /**
                         * An overview of plan limits. Required unless planType is UNSUPPORTED
                         */
                        description?: string | null;
                        /**
                         * Amount of data used overseas in megabytes (MB). Required unless planType is UNSUPPORTED
                         */
                        download?: number | null;
                        [k: string]: unknown;
                    };
                    /**
                     * Remaining upload data in megabytes (MB). Required unless planType is UNSUPPORTED or UNMETERED
                     */
                    upload?: number | null;
                    [k: string]: unknown;
                };
                /**
                 * Summary of messaging. Required if messaging services is included in the product plan
                 */
                messaging?: {
                    /**
                     * Summary of MMS Balance. Required if the service plan supports MMS messaging
                     */
                    mms: {
                        /**
                         * Amount value of MMS messages remaining. Required unless planType is UNSUPPORTED or UNMETERED
                         */
                        amount?: string | null;
                        /**
                         * An overview of plan limits. Required unless planType is UNSUPPORTED
                         */
                        description?: string | null;
                        /**
                         * Number of international MMS messages remaining. Required unless planType is UNSUPPORTED or UNMETERED
                         */
                        international?: number | null;
                        /**
                         * Number of national MMS messages remaining. Required unless planType is UNSUPPORTED or UNMETERED
                         */
                        national?: number | null;
                        /**
                         * Number of roaming MMS messages remaining. Required unless planType is UNSUPPORTED or UNMETERED
                         */
                        roaming?: number | null;
                        [k: string]: unknown;
                    };
                    /**
                     * Plan type for this feature. METERED: A plan is charged by usage for the feature. UNMETERED: A plan with no limits for a feature. LIMITED: Where plan limit inclusions apply. UNSUPPORTED: Feature is not supported
                     */
                    planType?: "METERED" | "UNMETERED" | "LIMITED" | "UNSUPPORTED";
                    /**
                     * Summary of SMS Balance. Required if the service plan supports SMS messaging
                     */
                    sms: {
                        /**
                         * Amount value of SMS messages remaining. Required unless planType is UNSUPPORTED or UNMETERED
                         */
                        amount?: string | null;
                        /**
                         * An overview of plan limits. Required unless planType is UNSUPPORTED
                         */
                        description?: string | null;
                        /**
                         * Number of international SMS messages remaining. Required unless planType is UNSUPPORTED or UNMETERED
                         */
                        international?: number | null;
                        /**
                         * Number of national SMS messages remaining. Required unless planType is UNSUPPORTED or UNMETERED
                         */
                        national?: number | null;
                        /**
                         * Number of roaming SMS messages remaining. Required unless planType is UNSUPPORTED or UNMETERED
                         */
                        roaming?: number | null;
                        [k: string]: unknown;
                    };
                    [k: string]: unknown;
                };
                /**
                 * Summary of voice balances. Required if voice calls are included in product plan
                 */
                voice?: {
                    /**
                     * International voice calls
                     */
                    international?: {
                        /**
                         * Amount value of international calls available. Required unless planType is UNSUPPORTED or UNMETERED
                         */
                        amount?: string | null;
                        /**
                         * An overview of plan limits. Required unless planType is UNSUPPORTED
                         */
                        description?: string | null;
                        /**
                         * Total duration (hours, minutes, and seconds) of international voice calls available. Not limited to 24hrs. Required unless planType is UNSUPPORTED or UNMETERED
                         */
                        duration?: string | null;
                        /**
                         * Number of international voice calls available Required unless planType is UNSUPPORTED or UNMETERED
                         */
                        number?: number | null;
                        [k: string]: unknown;
                    };
                    /**
                     * National voice calls
                     */
                    national?: {
                        /**
                         * Amount balance of national calls. Required unless planType is UNSUPPORTED or UNMETERED
                         */
                        amount?: string | null;
                        /**
                         * An overview of plan limits. Required unless planType is UNSUPPORTED
                         */
                        description?: string | null;
                        /**
                         * Total duration (hours, minutes, and seconds) of national voice calls. Not limited to 24hrs. Required unless planType is UNSUPPORTED or UNMETERED
                         */
                        duration?: string | null;
                        /**
                         * Number of national voice calls. Required unless planType is UNSUPPORTED or UNMETERED
                         */
                        number?: number | null;
                        [k: string]: unknown;
                    };
                    /**
                     * Plan type for this feature. METERED: A plan is charged by usage for the feature. UNMETERED: A plan with no limits for a feature. LIMITED: Where plan limit inclusions apply. UNSUPPORTED: Feature is not supported
                     */
                    planType: "METERED" | "UNMETERED" | "LIMITED" | "UNSUPPORTED";
                    /**
                     * Roaming voice calls
                     */
                    roaming?: {
                        /**
                         * Amount value of roaming calls available. Required unless planType is UNSUPPORTED or UNMETERED
                         */
                        amount?: string | null;
                        /**
                         * An overview of plan limits. Required unless planType is UNSUPPORTED
                         */
                        description?: string | null;
                        /**
                         * Total duration (hours, minutes, and seconds) of roaming voice calls available. Not limited to 24hrs. Required unless planType is UNSUPPORTED or UNMETERED
                         */
                        duration?: string | null;
                        /**
                         * Number of roaming voice calls available Required unless planType is UNSUPPORTED or UNMETERED
                         */
                        number?: number | null;
                        [k: string]: unknown;
                    };
                    [k: string]: unknown;
                };
                [k: string]: unknown;
            };
            /**
             * Optional description of the service used for display purposes
             */
            displayName?: string | null;
            /**
             * Date when the balance period ends
             */
            endDate?: string | null;
            /**
             * Required if the service includes a phone number
             */
            phoneNumber?: string | null;
            /**
             * The serviceId representing a unique service identifier such as a mobile [MSISDN](https://www.etsi.org/deliver/etsi_gts/03/0303/05.00.00_60/gsmts_0303v050000p.pdf), [FNN](https://www.nbnco.com.au/content/dam/nbnco2/documents/sfaa-wba2-dictionary_FTTN-launch.pdf) or internet service e.g [NBN AVC Service ID](https://www.nbnco.com.au/content/dam/nbnco2/documents/sfaa-wba2-dictionary_FTTN-launch.pdf). In accordance with [CDR ID permanence](#id-permanence) requirements
             */
            serviceId?: string | null;
            /**
             * Date when the balance period started
             */
            startDate?: string | null;
            [k: string]: unknown;
        }>;
        [k: string]: unknown;
    };
    [k: string]: unknown;
}
/* These are the schema definitions stipulated by the Data Standards Body for the telco api. */

export interface TelcoBillingAccountTransaction {
    /**
     * Optional array of adjustments arising for this transaction
     */
    adjustments?:
        | Array<{
            /**
             * The amount of the adjustment
             */
            amount: string;
            /**
             * A free text description of the adjustment
             */
            description: string;
            [k: string]: unknown;
        }>
        | null;
    /**
     * The amount charged or credited for this transaction prior to any adjustments being applied.  A negative value indicates a credit
     */
    amount: string;
    /**
     * Optional description of the transaction that can be used for display purposes
     */
    description?: string | null;
    /**
     * Date and time when the usage period ends
     */
    endDate: string;
    /**
     * The number of the invoice in which this transaction is included if it has been issued
     */
    invoiceNumber?: string | null;
    /**
     * Array list of services identifiers to which this transaction applies if any. E.g. a mobile [MSISDN](https://www.etsi.org/deliver/etsi_gts/03/0303/05.00.00_60/gsmts_0303v050000p.pdf), [FNN](https://www.nbnco.com.au/content/dam/nbnco2/documents/sfaa-wba2-dictionary_FTTN-launch.pdf) or internet service e.g [NBN AVC Service ID](https://www.nbnco.com.au/content/dam/nbnco2/documents/sfaa-wba2-dictionary_FTTN-launch.pdf). In accordance with [CDR ID permanence](#id-permanence) requirements
     */
    serviceIds?: string | null;
    /**
     * Date and time when the usage period starts
     */
    startDate: string;
    [k: string]: unknown;
}
/* These are the schema definitions stipulated by the Data Standards Body for the telco api. */

export interface TelcoBillingAccountTransactionAdjustments {
    /**
     * The amount of the adjustment
     */
    amount: string;
    /**
     * A free text description of the adjustment
     */
    description: string;
    [k: string]: unknown;
}
/* These are the schema definitions stipulated by the Data Standards Body for the telco api. */

export interface TelcoBillingOnceOffTransaction {
    /**
     * The amount of the charge or credit.  A positive value indicates a charge and a negative value indicates a credit
     */
    amount: string;
    /**
     * A free text description of the item
     */
    description: string;
    /**
     * The number of the invoice in which this transaction is included if it has been issued
     */
    invoiceNumber?: string | null;
    /**
     * The ID of the service identifier to which this transaction applies if any. E.g a [MSISDN](https://www.etsi.org/deliver/etsi_gts/03/0303/05.00.00_60/gsmts_0303v050000p.pdf), [FNN](https://www.nbnco.com.au/content/dam/nbnco2/documents/sfaa-wba2-dictionary_FTTN-launch.pdf) or internet service e.g [NBN AVC Service ID](https://www.nbnco.com.au/content/dam/nbnco2/documents/sfaa-wba2-dictionary_FTTN-launch.pdf). In accordance with [CDR ID permanence](#id-permanence) requirements
     */
    serviceId?: string | null;
    [k: string]: unknown;
}
/* These are the schema definitions stipulated by the Data Standards Body for the telco api. */

export interface TelcoBillingOtherTransaction {
    /**
     * Optional array of adjustments arising for this transaction
     */
    adjustments?:
        | Array<{
            /**
             * The amount of the adjustment
             */
            amount: string;
            /**
             * A free text description of the adjustment
             */
            description: string;
            [k: string]: unknown;
        }>
        | null;
    /**
     * The amount of the charge
     */
    amount: string;
    /**
     * A free text description of the item
     */
    description: string;
    /**
     * Optional end date for the application of the charge
     */
    endDate?: string | null;
    /**
     * The number of the invoice in which this transaction is included if it has been issued
     */
    invoiceNumber?: string | null;
    /**
     * The service identifier to which this transaction applies if any. E.g a mobile [MSISDN](https://www.etsi.org/deliver/etsi_gts/03/0303/05.00.00_60/gsmts_0303v050000p.pdf), [FNN](https://www.nbnco.com.au/content/dam/nbnco2/documents/sfaa-wba2-dictionary_FTTN-launch.pdf) or internet service e.g [NBN AVC Service ID](https://www.nbnco.com.au/content/dam/nbnco2/documents/sfaa-wba2-dictionary_FTTN-launch.pdf). In accordance with [CDR ID permanence](#id-permanence) requirements
     */
    serviceId?: string | null;
    /**
     * Optional start date for the application of the charge
     */
    startDate?: string | null;
    /**
     * Type of charge. Assumed to be OTHER if absent
     */
    type?: ("SERVICE" | "NETWORK" | "EQUIPMENT" | "METERING" | "OTHER") | null;
    [k: string]: unknown;
}
/* These are the schema definitions stipulated by the Data Standards Body for the telco api. */

export interface TelcoBillingPaymentTransaction {
    /**
     * The amount paid
     */
    amount: string;
    /**
     * The method of payment
     */
    method: "DIRECT_DEBIT" | "CARD" | "TRANSFER" | "BPAY" | "CASH" | "CHEQUE" | "VOUCHER" | "OTHER";
    [k: string]: unknown;
}
/* These are the schema definitions stipulated by the Data Standards Body for the telco api. */

export interface TelcoBillingTransaction {
    account?: {
        /**
         * Optional array of adjustments arising for this transaction
         */
        adjustments?:
            | Array<{
                /**
                 * The amount of the adjustment
                 */
                amount: string;
                /**
                 * A free text description of the adjustment
                 */
                description: string;
                [k: string]: unknown;
            }>
            | null;
        /**
         * The amount charged or credited for this transaction prior to any adjustments being applied.  A negative value indicates a credit
         */
        amount: string;
        /**
         * Optional description of the transaction that can be used for display purposes
         */
        description?: string | null;
        /**
         * Date and time when the usage period ends
         */
        endDate: string;
        /**
         * The number of the invoice in which this transaction is included if it has been issued
         */
        invoiceNumber?: string | null;
        /**
         * Array list of services identifiers to which this transaction applies if any. E.g. a mobile [MSISDN](https://www.etsi.org/deliver/etsi_gts/03/0303/05.00.00_60/gsmts_0303v050000p.pdf), [FNN](https://www.nbnco.com.au/content/dam/nbnco2/documents/sfaa-wba2-dictionary_FTTN-launch.pdf) or internet service e.g [NBN AVC Service ID](https://www.nbnco.com.au/content/dam/nbnco2/documents/sfaa-wba2-dictionary_FTTN-launch.pdf). In accordance with [CDR ID permanence](#id-permanence) requirements
         */
        serviceIds?: string | null;
        /**
         * Date and time when the usage period starts
         */
        startDate: string;
        [k: string]: unknown;
    };
    /**
     * The ID of the account for which the transaction occurred. accountId must comply in accordance with [CDR ID permanence](#id-permanence)
     */
    accountId: string;
    /**
     * The date and time that the transaction occurred
     */
    executionDateTime: string;
    /**
     * The GST incurred in the transaction.  Should not be included for credits or payments.  If absent zero is assumed
     */
    gst?: string | null;
    onceOff?: {
        /**
         * The amount of the charge or credit.  A positive value indicates a charge and a negative value indicates a credit
         */
        amount: string;
        /**
         * A free text description of the item
         */
        description: string;
        /**
         * The number of the invoice in which this transaction is included if it has been issued
         */
        invoiceNumber?: string | null;
        /**
         * The ID of the service identifier to which this transaction applies if any. E.g a [MSISDN](https://www.etsi.org/deliver/etsi_gts/03/0303/05.00.00_60/gsmts_0303v050000p.pdf), [FNN](https://www.nbnco.com.au/content/dam/nbnco2/documents/sfaa-wba2-dictionary_FTTN-launch.pdf) or internet service e.g [NBN AVC Service ID](https://www.nbnco.com.au/content/dam/nbnco2/documents/sfaa-wba2-dictionary_FTTN-launch.pdf). In accordance with [CDR ID permanence](#id-permanence) requirements
         */
        serviceId?: string | null;
        [k: string]: unknown;
    };
    otherCharges?: {
        /**
         * Optional array of adjustments arising for this transaction
         */
        adjustments?:
            | Array<{
                /**
                 * The amount of the adjustment
                 */
                amount: string;
                /**
                 * A free text description of the adjustment
                 */
                description: string;
                [k: string]: unknown;
            }>
            | null;
        /**
         * The amount of the charge
         */
        amount: string;
        /**
         * A free text description of the item
         */
        description: string;
        /**
         * Optional end date for the application of the charge
         */
        endDate?: string | null;
        /**
         * The number of the invoice in which this transaction is included if it has been issued
         */
        invoiceNumber?: string | null;
        /**
         * The service identifier to which this transaction applies if any. E.g a mobile [MSISDN](https://www.etsi.org/deliver/etsi_gts/03/0303/05.00.00_60/gsmts_0303v050000p.pdf), [FNN](https://www.nbnco.com.au/content/dam/nbnco2/documents/sfaa-wba2-dictionary_FTTN-launch.pdf) or internet service e.g [NBN AVC Service ID](https://www.nbnco.com.au/content/dam/nbnco2/documents/sfaa-wba2-dictionary_FTTN-launch.pdf). In accordance with [CDR ID permanence](#id-permanence) requirements
         */
        serviceId?: string | null;
        /**
         * Optional start date for the application of the charge
         */
        startDate?: string | null;
        /**
         * Type of charge. Assumed to be OTHER if absent
         */
        type?: ("SERVICE" | "NETWORK" | "EQUIPMENT" | "METERING" | "OTHER") | null;
        [k: string]: unknown;
    };
    payment?: {
        /**
         * The amount paid
         */
        amount: string;
        /**
         * The method of payment
         */
        method: "DIRECT_DEBIT" | "CARD" | "TRANSFER" | "BPAY" | "CASH" | "CHEQUE" | "VOUCHER" | "OTHER";
        [k: string]: unknown;
    };
    /**
     * Indicator of the type of transaction object present in this record
     */
    transactionUType: "account" | "onceOff" | "otherCharges" | "payment";
    [k: string]: unknown;
}
/* These are the schema definitions stipulated by the Data Standards Body for the telco api. */

export interface TelcoConcession {
    /**
     * Display text providing more information on the concession
     */
    additionalInfo?: string | null;
    /**
     * Optional link to additional information regarding the concession
     */
    additionalInfoUri?: string | null;
    /**
     * Conditional attribute for the amount of discount for the concession- required if type is FIXED_AMOUNT
     */
    amount?: string | null;
    /**
     * Array of ENUM's to specify what the concession applies to. Multiple ENUM values can be provided. If absent, USAGE is assumed
     */
    appliedTo?: Array<"INVOICE" | "USAGE"> | null;
    /**
     * Conditional attribute for frequency at which a concession is applied. Required if type is FIXED_AMOUNT or FIXED_PERCENTAGE. Formatted according to [ISO 8601 Durations](https://en.wikipedia.org/wiki/ISO_8601#Durations) (excludes recurrence syntax)
     */
    discountFrequency?: string | null;
    /**
     * The display name of the concession
     */
    displayName: string;
    /**
     * Optional end date for the application of the concession
     */
    endDate?: string | null;
    /**
     * Conditional attribute for the percentage of discount of concession - required if type is FIXED_PERCENTAGE
     */
    percentage?: string | null;
    /**
     * Optional start date for the application of the concession
     */
    startDate: string;
    /**
     * The concession type
     */
    type: "CONCESSION" | "REBATE" | "GRANT";
    [k: string]: unknown;
}
/* These are the schema definitions stipulated by the Data Standards Body for the telco api. */

export interface TelcoConcessionsResponse {
    data: {
        /**
         * Array may be empty if no concessions exist
         */
        concessions: Array<{
            /**
             * Display text providing more information on the concession
             */
            additionalInfo?: string | null;
            /**
             * Optional link to additional information regarding the concession
             */
            additionalInfoUri?: string | null;
            /**
             * Conditional attribute for the amount of discount for the concession- required if type is FIXED_AMOUNT
             */
            amount?: string | null;
            /**
             * Array of ENUM's to specify what the concession applies to. Multiple ENUM values can be provided. If absent, USAGE is assumed
             */
            appliedTo?: Array<"INVOICE" | "USAGE"> | null;
            /**
             * Conditional attribute for frequency at which a concession is applied. Required if type is FIXED_AMOUNT or FIXED_PERCENTAGE. Formatted according to [ISO 8601 Durations](https://en.wikipedia.org/wiki/ISO_8601#Durations) (excludes recurrence syntax)
             */
            discountFrequency?: string | null;
            /**
             * The display name of the concession
             */
            displayName: string;
            /**
             * Optional end date for the application of the concession
             */
            endDate?: string | null;
            /**
             * Conditional attribute for the percentage of discount of concession - required if type is FIXED_PERCENTAGE
             */
            percentage?: string | null;
            /**
             * Optional start date for the application of the concession
             */
            startDate: string;
            /**
             * The concession type
             */
            type: "CONCESSION" | "REBATE" | "GRANT";
            [k: string]: unknown;
        }>;
        [k: string]: unknown;
    };
    links: {
        /**
         * URI to the first page of this set. Mandatory if this response is not the first page
         */
        first?: string | null;
        /**
         * URI to the last page of this set. Mandatory if this response is not the last page
         */
        last?: string | null;
        /**
         * URI to the next page of this set. Mandatory if this response is not the last page
         */
        next?: string | null;
        /**
         * URI to the previous page of this set. Mandatory if this response is not the first page
         */
        prev?: string | null;
        /**
         * Fully qualified link that generated the current response document
         */
        self: string;
        [k: string]: unknown;
    };
    meta: {
        /**
         * The total number of pages in the full set. See [pagination](#pagination).
         */
        totalPages: number;
        /**
         * The total number of records in the full set. See [pagination](#pagination).
         */
        totalRecords: number;
        [k: string]: unknown;
    };
    [k: string]: unknown;
}
/* These are the schema definitions stipulated by the Data Standards Body for the telco api. */

export interface TelcoConcessionsResponseData {
    /**
     * Array may be empty if no concessions exist
     */
    concessions: Array<{
        /**
         * Display text providing more information on the concession
         */
        additionalInfo?: string | null;
        /**
         * Optional link to additional information regarding the concession
         */
        additionalInfoUri?: string | null;
        /**
         * Conditional attribute for the amount of discount for the concession- required if type is FIXED_AMOUNT
         */
        amount?: string | null;
        /**
         * Array of ENUM's to specify what the concession applies to. Multiple ENUM values can be provided. If absent, USAGE is assumed
         */
        appliedTo?: Array<"INVOICE" | "USAGE"> | null;
        /**
         * Conditional attribute for frequency at which a concession is applied. Required if type is FIXED_AMOUNT or FIXED_PERCENTAGE. Formatted according to [ISO 8601 Durations](https://en.wikipedia.org/wiki/ISO_8601#Durations) (excludes recurrence syntax)
         */
        discountFrequency?: string | null;
        /**
         * The display name of the concession
         */
        displayName: string;
        /**
         * Optional end date for the application of the concession
         */
        endDate?: string | null;
        /**
         * Conditional attribute for the percentage of discount of concession - required if type is FIXED_PERCENTAGE
         */
        percentage?: string | null;
        /**
         * Optional start date for the application of the concession
         */
        startDate: string;
        /**
         * The concession type
         */
        type: "CONCESSION" | "REBATE" | "GRANT";
        [k: string]: unknown;
    }>;
    [k: string]: unknown;
}
/* These are the schema definitions stipulated by the Data Standards Body for the telco api. */

/**
 * Summary of the contract details. Mandatory if the billing type is POST_PAID and a contract agreement is required with the service provider for the plan
 */
export interface TelcoContract {
    /**
     * URI of the contract conditions
     */
    contractUri?: string | null;
    /**
     * Description of the contract
     */
    description?: string | null;
    /**
     * Minimum contract duration in months
     */
    duration: number;
    /**
     * Name of the contract
     */
    name: string;
    [k: string]: unknown;
}
/* These are the schema definitions stipulated by the Data Standards Body for the telco api. */

export interface TelcoInvoice {
    /**
     * Object contain charges and credits related to usage
     */
    accountCharges?: {
        /**
         * Optional array of charges that may be part of the invoice (for example services fees) (exclusive of GST)
         */
        otherCharges?: {
            /**
             * The aggregate total of charges for this item (exclusive of GST)
             */
            amount: string;
            /**
             * A free text description of the charge
             */
            description: string;
            /**
             * A free text description of the charge
             */
            type?:
                | (
                    | "SERVICE"
                    | "EQUIPMENT"
                    | "NETWORK"
                    | "HANDSET"
                    | "DEVICE"
                    | "ENTERTAINMENT"
                    | "SUBSCRIPTION"
                    | "SOFTWARE"
                    | "OTHER"
                )
                | null;
            [k: string]: unknown;
        };
        /**
         * The aggregate total of account level discounts or credits for the period covered by the invoice
         */
        totalDiscounts: string;
        /**
         * The total GST for all account level charges.  If absent then zero is assumed
         */
        totalGst?: string | null;
        /**
         * The aggregate total of any once off charges arising from usage for the period covered by the invoice (exclusive of GST)
         */
        totalOnceOffCharges: string;
        /**
         * The aggregate total of usage charges for the period covered by the invoice (exclusive of GST)
         */
        totalUsageCharges: string;
        [k: string]: unknown;
    };
    /**
     * The ID of the account for which the invoice was issued. accountId must comply in accordance with [CDR ID permanence](#id-permanence)
     */
    accountId: string;
    /**
     * Object containing usage summary
     */
    accountUsage?: {
        /**
         * Summary of data usage
         */
        data?: {
            /**
             * Cost amount of data usage
             */
            amount: string;
            /**
             * Amount of data downloaded in megabytes (MB)
             */
            download: number;
            /**
             * Required if roaming is suipported
             */
            roaming?: {
                /**
                 * Amount value of data roaming charges
                 */
                amount?: string | null;
                /**
                 * Amount of data used while roaming in megabytes (MB)
                 */
                download?: number | null;
                [k: string]: unknown;
            };
            /**
             * Number of data sessions
             */
            sessions?: number | null;
            /**
             * Amount of data uploaded in megabytes (MB)
             */
            upload: number;
            [k: string]: unknown;
        };
        /**
         * Summary of messaging. Required if messaging services is included in the product plan
         */
        messaging?: {
            /**
             * Summary of MMS usage
             */
            mms: {
                /**
                 * Cost amount of MMS messages
                 */
                amount: string;
                /**
                 * ber of international MMS messages sent
                 */
                international?: number | null;
                /**
                 * Number of national MMS messages sent
                 */
                national: number;
                /**
                 * Number of roaming SMS messages sent. Including premium SMS services
                 */
                roaming?: number | null;
                [k: string]: unknown;
            };
            /**
             * Summary of SMS usage
             */
            sms: {
                /**
                 * Cost amount of SMS messages. Including premium SMS services
                 */
                amount: string;
                /**
                 * Number of international SMS messages sent. Including premium SMS services
                 */
                international?: number | null;
                /**
                 * Number of national SMS messages sent. Including premium SMS services
                 */
                national: number;
                /**
                 * Number of roaming SMS messages sent. Including premium SMS services
                 */
                roaming?: number | null;
                [k: string]: unknown;
            };
            [k: string]: unknown;
        };
        /**
         * Summary of voice calls. Required if voice calls are included in product plan
         */
        voice?: {
            /**
             * International voice calls. Requied if international calling is supported
             */
            international: {
                /**
                 * Cost amount of international voice calls
                 */
                amount: string;
                /**
                 * Total duration (hours, minutes, and seconds) of international voice calls. Not limited to 24hrs
                 */
                duration: string;
                /**
                 * Number of international voice calls
                 */
                number: number;
                [k: string]: unknown;
            };
            /**
             * National voice calls
             */
            national: {
                /**
                 * Cost amount of national calls
                 */
                amount: string;
                /**
                 * Total duration (hours, minutes, and seconds) of national voice calls. Not limited to 24hrs
                 */
                duration: string;
                /**
                 * Number of national voice calls
                 */
                number: number;
                [k: string]: unknown;
            };
            /**
             * Roaming voice calls, Required if roaming is supported
             */
            roaming: {
                /**
                 * Cost amount of roaming voice calls
                 */
                amount: string;
                /**
                 * Total duration (hours, minutes, and seconds) of roaming voice calls. Not limited to 24hrs
                 */
                duration: string;
                /**
                 * Number of roaming voice calls
                 */
                number: number;
                [k: string]: unknown;
            };
            [k: string]: unknown;
        };
        [k: string]: unknown;
    };
    /**
     * The account balance at the time the invoice was issued
     */
    balanceAtIssue: string;
    /**
     * The date that the invoice is due to be paid
     */
    dueDate?: string | null;
    /**
     * The total GST amount for this invoice.  If absent then zero is assumed
     */
    gstAmount?: string | null;
    /**
     * The net amount due for this invoice regardless of previous balance
     */
    invoiceAmount?: string | null;
    /**
     * The number assigned to this invoice by the telco Retailer
     */
    invoiceNumber: string;
    /**
     * The date that the invoice was actually issued (as opposed to generated or calculated)
     */
    issueDate: string;
    /**
     * A discount for on time payment
     */
    payOnTimeDiscount?: {
        /**
         * The date by which the invoice must be paid to receive the pay on time discount
         */
        date: string;
        /**
         * The amount that will be discounted if the invoice is paid by the date specified
         */
        discountAmount: string;
        /**
         * The GST amount that will be discounted if the invoice is paid by the date specified.  If absent then zero is assumed
         */
        gstAmount?: string | null;
        [k: string]: unknown;
    };
    /**
     * Indicator of the payment status for the invoice
     */
    paymentStatus: "PAID" | "PARTIALLY_PAID" | "NOT_PAID";
    /**
     * Object containing the start and end date for the period covered by the invoice. Mandatory if any usage based charges are included in the invoice
     */
    period?: {
        /**
         * The end date of the period covered by this invoice
         */
        endDate: string;
        /**
         * The start date of the period covered by this invoice
         */
        startDate: string;
        [k: string]: unknown;
    };
    /**
     * An array of service IDs to which this invoice applies. May be empty if the invoice contains no usage related charges
     */
    services: string[];
    [k: string]: unknown;
}
/* These are the schema definitions stipulated by the Data Standards Body for the telco api. */

/**
 * Object contain charges and credits related to usage
 */
export interface TelcoInvoiceAccountCharges {
    /**
     * Optional array of charges that may be part of the invoice (for example services fees) (exclusive of GST)
     */
    otherCharges?: {
        /**
         * The aggregate total of charges for this item (exclusive of GST)
         */
        amount: string;
        /**
         * A free text description of the charge
         */
        description: string;
        /**
         * A free text description of the charge
         */
        type?:
            | (
                | "SERVICE"
                | "EQUIPMENT"
                | "NETWORK"
                | "HANDSET"
                | "DEVICE"
                | "ENTERTAINMENT"
                | "SUBSCRIPTION"
                | "SOFTWARE"
                | "OTHER"
            )
            | null;
        [k: string]: unknown;
    };
    /**
     * The aggregate total of account level discounts or credits for the period covered by the invoice
     */
    totalDiscounts: string;
    /**
     * The total GST for all account level charges.  If absent then zero is assumed
     */
    totalGst?: string | null;
    /**
     * The aggregate total of any once off charges arising from usage for the period covered by the invoice (exclusive of GST)
     */
    totalOnceOffCharges: string;
    /**
     * The aggregate total of usage charges for the period covered by the invoice (exclusive of GST)
     */
    totalUsageCharges: string;
    [k: string]: unknown;
}
/* These are the schema definitions stipulated by the Data Standards Body for the telco api. */

/**
 * Optional array of charges that may be part of the invoice (for example services fees) (exclusive of GST)
 */
export interface TelcoInvoiceAccountChargesOtherCharges {
    /**
     * The aggregate total of charges for this item (exclusive of GST)
     */
    amount: string;
    /**
     * A free text description of the charge
     */
    description: string;
    /**
     * A free text description of the charge
     */
    type?:
        | (
            | "SERVICE"
            | "EQUIPMENT"
            | "NETWORK"
            | "HANDSET"
            | "DEVICE"
            | "ENTERTAINMENT"
            | "SUBSCRIPTION"
            | "SOFTWARE"
            | "OTHER"
        )
        | null;
    [k: string]: unknown;
}
/* These are the schema definitions stipulated by the Data Standards Body for the telco api. */

export interface TelcoInvoiceListResponse {
    data: {
        /**
         * Array of invoices sorted by issue date in descending order
         */
        invoices: Array<{
            /**
             * Object contain charges and credits related to usage
             */
            accountCharges?: {
                /**
                 * Optional array of charges that may be part of the invoice (for example services fees) (exclusive of GST)
                 */
                otherCharges?: {
                    /**
                     * The aggregate total of charges for this item (exclusive of GST)
                     */
                    amount: string;
                    /**
                     * A free text description of the charge
                     */
                    description: string;
                    /**
                     * A free text description of the charge
                     */
                    type?:
                        | (
                            | "SERVICE"
                            | "EQUIPMENT"
                            | "NETWORK"
                            | "HANDSET"
                            | "DEVICE"
                            | "ENTERTAINMENT"
                            | "SUBSCRIPTION"
                            | "SOFTWARE"
                            | "OTHER"
                        )
                        | null;
                    [k: string]: unknown;
                };
                /**
                 * The aggregate total of account level discounts or credits for the period covered by the invoice
                 */
                totalDiscounts: string;
                /**
                 * The total GST for all account level charges.  If absent then zero is assumed
                 */
                totalGst?: string | null;
                /**
                 * The aggregate total of any once off charges arising from usage for the period covered by the invoice (exclusive of GST)
                 */
                totalOnceOffCharges: string;
                /**
                 * The aggregate total of usage charges for the period covered by the invoice (exclusive of GST)
                 */
                totalUsageCharges: string;
                [k: string]: unknown;
            };
            /**
             * The ID of the account for which the invoice was issued. accountId must comply in accordance with [CDR ID permanence](#id-permanence)
             */
            accountId: string;
            /**
             * Object containing usage summary
             */
            accountUsage?: {
                /**
                 * Summary of data usage
                 */
                data?: {
                    /**
                     * Cost amount of data usage
                     */
                    amount: string;
                    /**
                     * Amount of data downloaded in megabytes (MB)
                     */
                    download: number;
                    /**
                     * Required if roaming is suipported
                     */
                    roaming?: {
                        /**
                         * Amount value of data roaming charges
                         */
                        amount?: string | null;
                        /**
                         * Amount of data used while roaming in megabytes (MB)
                         */
                        download?: number | null;
                        [k: string]: unknown;
                    };
                    /**
                     * Number of data sessions
                     */
                    sessions?: number | null;
                    /**
                     * Amount of data uploaded in megabytes (MB)
                     */
                    upload: number;
                    [k: string]: unknown;
                };
                /**
                 * Summary of messaging. Required if messaging services is included in the product plan
                 */
                messaging?: {
                    /**
                     * Summary of MMS usage
                     */
                    mms: {
                        /**
                         * Cost amount of MMS messages
                         */
                        amount: string;
                        /**
                         * ber of international MMS messages sent
                         */
                        international?: number | null;
                        /**
                         * Number of national MMS messages sent
                         */
                        national: number;
                        /**
                         * Number of roaming SMS messages sent. Including premium SMS services
                         */
                        roaming?: number | null;
                        [k: string]: unknown;
                    };
                    /**
                     * Summary of SMS usage
                     */
                    sms: {
                        /**
                         * Cost amount of SMS messages. Including premium SMS services
                         */
                        amount: string;
                        /**
                         * Number of international SMS messages sent. Including premium SMS services
                         */
                        international?: number | null;
                        /**
                         * Number of national SMS messages sent. Including premium SMS services
                         */
                        national: number;
                        /**
                         * Number of roaming SMS messages sent. Including premium SMS services
                         */
                        roaming?: number | null;
                        [k: string]: unknown;
                    };
                    [k: string]: unknown;
                };
                /**
                 * Summary of voice calls. Required if voice calls are included in product plan
                 */
                voice?: {
                    /**
                     * International voice calls. Requied if international calling is supported
                     */
                    international: {
                        /**
                         * Cost amount of international voice calls
                         */
                        amount: string;
                        /**
                         * Total duration (hours, minutes, and seconds) of international voice calls. Not limited to 24hrs
                         */
                        duration: string;
                        /**
                         * Number of international voice calls
                         */
                        number: number;
                        [k: string]: unknown;
                    };
                    /**
                     * National voice calls
                     */
                    national: {
                        /**
                         * Cost amount of national calls
                         */
                        amount: string;
                        /**
                         * Total duration (hours, minutes, and seconds) of national voice calls. Not limited to 24hrs
                         */
                        duration: string;
                        /**
                         * Number of national voice calls
                         */
                        number: number;
                        [k: string]: unknown;
                    };
                    /**
                     * Roaming voice calls, Required if roaming is supported
                     */
                    roaming: {
                        /**
                         * Cost amount of roaming voice calls
                         */
                        amount: string;
                        /**
                         * Total duration (hours, minutes, and seconds) of roaming voice calls. Not limited to 24hrs
                         */
                        duration: string;
                        /**
                         * Number of roaming voice calls
                         */
                        number: number;
                        [k: string]: unknown;
                    };
                    [k: string]: unknown;
                };
                [k: string]: unknown;
            };
            /**
             * The account balance at the time the invoice was issued
             */
            balanceAtIssue: string;
            /**
             * The date that the invoice is due to be paid
             */
            dueDate?: string | null;
            /**
             * The total GST amount for this invoice.  If absent then zero is assumed
             */
            gstAmount?: string | null;
            /**
             * The net amount due for this invoice regardless of previous balance
             */
            invoiceAmount?: string | null;
            /**
             * The number assigned to this invoice by the telco Retailer
             */
            invoiceNumber: string;
            /**
             * The date that the invoice was actually issued (as opposed to generated or calculated)
             */
            issueDate: string;
            /**
             * A discount for on time payment
             */
            payOnTimeDiscount?: {
                /**
                 * The date by which the invoice must be paid to receive the pay on time discount
                 */
                date: string;
                /**
                 * The amount that will be discounted if the invoice is paid by the date specified
                 */
                discountAmount: string;
                /**
                 * The GST amount that will be discounted if the invoice is paid by the date specified.  If absent then zero is assumed
                 */
                gstAmount?: string | null;
                [k: string]: unknown;
            };
            /**
             * Indicator of the payment status for the invoice
             */
            paymentStatus: "PAID" | "PARTIALLY_PAID" | "NOT_PAID";
            /**
             * Object containing the start and end date for the period covered by the invoice. Mandatory if any usage based charges are included in the invoice
             */
            period?: {
                /**
                 * The end date of the period covered by this invoice
                 */
                endDate: string;
                /**
                 * The start date of the period covered by this invoice
                 */
                startDate: string;
                [k: string]: unknown;
            };
            /**
             * An array of service IDs to which this invoice applies. May be empty if the invoice contains no usage related charges
             */
            services: string[];
            [k: string]: unknown;
        }>;
        [k: string]: unknown;
    };
    links: {
        /**
         * URI to the first page of this set. Mandatory if this response is not the first page
         */
        first?: string | null;
        /**
         * URI to the last page of this set. Mandatory if this response is not the last page
         */
        last?: string | null;
        /**
         * URI to the next page of this set. Mandatory if this response is not the last page
         */
        next?: string | null;
        /**
         * URI to the previous page of this set. Mandatory if this response is not the first page
         */
        prev?: string | null;
        /**
         * Fully qualified link that generated the current response document
         */
        self: string;
        [k: string]: unknown;
    };
    meta: {
        /**
         * The total number of pages in the full set. See [pagination](#pagination).
         */
        totalPages: number;
        /**
         * The total number of records in the full set. See [pagination](#pagination).
         */
        totalRecords: number;
        [k: string]: unknown;
    };
    [k: string]: unknown;
}
/* These are the schema definitions stipulated by the Data Standards Body for the telco api. */

export interface TelcoInvoiceListResponseData {
    /**
     * Array of invoices sorted by issue date in descending order
     */
    invoices: Array<{
        /**
         * Object contain charges and credits related to usage
         */
        accountCharges?: {
            /**
             * Optional array of charges that may be part of the invoice (for example services fees) (exclusive of GST)
             */
            otherCharges?: {
                /**
                 * The aggregate total of charges for this item (exclusive of GST)
                 */
                amount: string;
                /**
                 * A free text description of the charge
                 */
                description: string;
                /**
                 * A free text description of the charge
                 */
                type?:
                    | (
                        | "SERVICE"
                        | "EQUIPMENT"
                        | "NETWORK"
                        | "HANDSET"
                        | "DEVICE"
                        | "ENTERTAINMENT"
                        | "SUBSCRIPTION"
                        | "SOFTWARE"
                        | "OTHER"
                    )
                    | null;
                [k: string]: unknown;
            };
            /**
             * The aggregate total of account level discounts or credits for the period covered by the invoice
             */
            totalDiscounts: string;
            /**
             * The total GST for all account level charges.  If absent then zero is assumed
             */
            totalGst?: string | null;
            /**
             * The aggregate total of any once off charges arising from usage for the period covered by the invoice (exclusive of GST)
             */
            totalOnceOffCharges: string;
            /**
             * The aggregate total of usage charges for the period covered by the invoice (exclusive of GST)
             */
            totalUsageCharges: string;
            [k: string]: unknown;
        };
        /**
         * The ID of the account for which the invoice was issued. accountId must comply in accordance with [CDR ID permanence](#id-permanence)
         */
        accountId: string;
        /**
         * Object containing usage summary
         */
        accountUsage?: {
            /**
             * Summary of data usage
             */
            data?: {
                /**
                 * Cost amount of data usage
                 */
                amount: string;
                /**
                 * Amount of data downloaded in megabytes (MB)
                 */
                download: number;
                /**
                 * Required if roaming is suipported
                 */
                roaming?: {
                    /**
                     * Amount value of data roaming charges
                     */
                    amount?: string | null;
                    /**
                     * Amount of data used while roaming in megabytes (MB)
                     */
                    download?: number | null;
                    [k: string]: unknown;
                };
                /**
                 * Number of data sessions
                 */
                sessions?: number | null;
                /**
                 * Amount of data uploaded in megabytes (MB)
                 */
                upload: number;
                [k: string]: unknown;
            };
            /**
             * Summary of messaging. Required if messaging services is included in the product plan
             */
            messaging?: {
                /**
                 * Summary of MMS usage
                 */
                mms: {
                    /**
                     * Cost amount of MMS messages
                     */
                    amount: string;
                    /**
                     * ber of international MMS messages sent
                     */
                    international?: number | null;
                    /**
                     * Number of national MMS messages sent
                     */
                    national: number;
                    /**
                     * Number of roaming SMS messages sent. Including premium SMS services
                     */
                    roaming?: number | null;
                    [k: string]: unknown;
                };
                /**
                 * Summary of SMS usage
                 */
                sms: {
                    /**
                     * Cost amount of SMS messages. Including premium SMS services
                     */
                    amount: string;
                    /**
                     * Number of international SMS messages sent. Including premium SMS services
                     */
                    international?: number | null;
                    /**
                     * Number of national SMS messages sent. Including premium SMS services
                     */
                    national: number;
                    /**
                     * Number of roaming SMS messages sent. Including premium SMS services
                     */
                    roaming?: number | null;
                    [k: string]: unknown;
                };
                [k: string]: unknown;
            };
            /**
             * Summary of voice calls. Required if voice calls are included in product plan
             */
            voice?: {
                /**
                 * International voice calls. Requied if international calling is supported
                 */
                international: {
                    /**
                     * Cost amount of international voice calls
                     */
                    amount: string;
                    /**
                     * Total duration (hours, minutes, and seconds) of international voice calls. Not limited to 24hrs
                     */
                    duration: string;
                    /**
                     * Number of international voice calls
                     */
                    number: number;
                    [k: string]: unknown;
                };
                /**
                 * National voice calls
                 */
                national: {
                    /**
                     * Cost amount of national calls
                     */
                    amount: string;
                    /**
                     * Total duration (hours, minutes, and seconds) of national voice calls. Not limited to 24hrs
                     */
                    duration: string;
                    /**
                     * Number of national voice calls
                     */
                    number: number;
                    [k: string]: unknown;
                };
                /**
                 * Roaming voice calls, Required if roaming is supported
                 */
                roaming: {
                    /**
                     * Cost amount of roaming voice calls
                     */
                    amount: string;
                    /**
                     * Total duration (hours, minutes, and seconds) of roaming voice calls. Not limited to 24hrs
                     */
                    duration: string;
                    /**
                     * Number of roaming voice calls
                     */
                    number: number;
                    [k: string]: unknown;
                };
                [k: string]: unknown;
            };
            [k: string]: unknown;
        };
        /**
         * The account balance at the time the invoice was issued
         */
        balanceAtIssue: string;
        /**
         * The date that the invoice is due to be paid
         */
        dueDate?: string | null;
        /**
         * The total GST amount for this invoice.  If absent then zero is assumed
         */
        gstAmount?: string | null;
        /**
         * The net amount due for this invoice regardless of previous balance
         */
        invoiceAmount?: string | null;
        /**
         * The number assigned to this invoice by the telco Retailer
         */
        invoiceNumber: string;
        /**
         * The date that the invoice was actually issued (as opposed to generated or calculated)
         */
        issueDate: string;
        /**
         * A discount for on time payment
         */
        payOnTimeDiscount?: {
            /**
             * The date by which the invoice must be paid to receive the pay on time discount
             */
            date: string;
            /**
             * The amount that will be discounted if the invoice is paid by the date specified
             */
            discountAmount: string;
            /**
             * The GST amount that will be discounted if the invoice is paid by the date specified.  If absent then zero is assumed
             */
            gstAmount?: string | null;
            [k: string]: unknown;
        };
        /**
         * Indicator of the payment status for the invoice
         */
        paymentStatus: "PAID" | "PARTIALLY_PAID" | "NOT_PAID";
        /**
         * Object containing the start and end date for the period covered by the invoice. Mandatory if any usage based charges are included in the invoice
         */
        period?: {
            /**
             * The end date of the period covered by this invoice
             */
            endDate: string;
            /**
             * The start date of the period covered by this invoice
             */
            startDate: string;
            [k: string]: unknown;
        };
        /**
         * An array of service IDs to which this invoice applies. May be empty if the invoice contains no usage related charges
         */
        services: string[];
        [k: string]: unknown;
    }>;
    [k: string]: unknown;
}
/* These are the schema definitions stipulated by the Data Standards Body for the telco api. */

/**
 * A discount for on time payment
 */
export interface TelcoInvoicePayOnTimeDiscount {
    /**
     * The date by which the invoice must be paid to receive the pay on time discount
     */
    date: string;
    /**
     * The amount that will be discounted if the invoice is paid by the date specified
     */
    discountAmount: string;
    /**
     * The GST amount that will be discounted if the invoice is paid by the date specified.  If absent then zero is assumed
     */
    gstAmount?: string | null;
    [k: string]: unknown;
}
/* These are the schema definitions stipulated by the Data Standards Body for the telco api. */

/**
 * Object containing the start and end date for the period covered by the invoice. Mandatory if any usage based charges are included in the invoice
 */
export interface TelcoInvoicePeriod {
    /**
     * The end date of the period covered by this invoice
     */
    endDate: string;
    /**
     * The start date of the period covered by this invoice
     */
    startDate: string;
    [k: string]: unknown;
}
/* These are the schema definitions stipulated by the Data Standards Body for the telco api. */

export interface TelcoInvoiceResponse {
    data: {
        /**
         * Array of invoices sorted by issue date in descending order
         */
        invoices: Array<{
            /**
             * Object contain charges and credits related to usage
             */
            accountCharges?: {
                /**
                 * Optional array of charges that may be part of the invoice (for example services fees) (exclusive of GST)
                 */
                otherCharges?: {
                    /**
                     * The aggregate total of charges for this item (exclusive of GST)
                     */
                    amount: string;
                    /**
                     * A free text description of the charge
                     */
                    description: string;
                    /**
                     * A free text description of the charge
                     */
                    type?:
                        | (
                            | "SERVICE"
                            | "EQUIPMENT"
                            | "NETWORK"
                            | "HANDSET"
                            | "DEVICE"
                            | "ENTERTAINMENT"
                            | "SUBSCRIPTION"
                            | "SOFTWARE"
                            | "OTHER"
                        )
                        | null;
                    [k: string]: unknown;
                };
                /**
                 * The aggregate total of account level discounts or credits for the period covered by the invoice
                 */
                totalDiscounts: string;
                /**
                 * The total GST for all account level charges.  If absent then zero is assumed
                 */
                totalGst?: string | null;
                /**
                 * The aggregate total of any once off charges arising from usage for the period covered by the invoice (exclusive of GST)
                 */
                totalOnceOffCharges: string;
                /**
                 * The aggregate total of usage charges for the period covered by the invoice (exclusive of GST)
                 */
                totalUsageCharges: string;
                [k: string]: unknown;
            };
            /**
             * The ID of the account for which the invoice was issued. accountId must comply in accordance with [CDR ID permanence](#id-permanence)
             */
            accountId: string;
            /**
             * Object containing usage summary
             */
            accountUsage?: {
                /**
                 * Summary of data usage
                 */
                data?: {
                    /**
                     * Cost amount of data usage
                     */
                    amount: string;
                    /**
                     * Amount of data downloaded in megabytes (MB)
                     */
                    download: number;
                    /**
                     * Required if roaming is suipported
                     */
                    roaming?: {
                        /**
                         * Amount value of data roaming charges
                         */
                        amount?: string | null;
                        /**
                         * Amount of data used while roaming in megabytes (MB)
                         */
                        download?: number | null;
                        [k: string]: unknown;
                    };
                    /**
                     * Number of data sessions
                     */
                    sessions?: number | null;
                    /**
                     * Amount of data uploaded in megabytes (MB)
                     */
                    upload: number;
                    [k: string]: unknown;
                };
                /**
                 * Summary of messaging. Required if messaging services is included in the product plan
                 */
                messaging?: {
                    /**
                     * Summary of MMS usage
                     */
                    mms: {
                        /**
                         * Cost amount of MMS messages
                         */
                        amount: string;
                        /**
                         * ber of international MMS messages sent
                         */
                        international?: number | null;
                        /**
                         * Number of national MMS messages sent
                         */
                        national: number;
                        /**
                         * Number of roaming SMS messages sent. Including premium SMS services
                         */
                        roaming?: number | null;
                        [k: string]: unknown;
                    };
                    /**
                     * Summary of SMS usage
                     */
                    sms: {
                        /**
                         * Cost amount of SMS messages. Including premium SMS services
                         */
                        amount: string;
                        /**
                         * Number of international SMS messages sent. Including premium SMS services
                         */
                        international?: number | null;
                        /**
                         * Number of national SMS messages sent. Including premium SMS services
                         */
                        national: number;
                        /**
                         * Number of roaming SMS messages sent. Including premium SMS services
                         */
                        roaming?: number | null;
                        [k: string]: unknown;
                    };
                    [k: string]: unknown;
                };
                /**
                 * Summary of voice calls. Required if voice calls are included in product plan
                 */
                voice?: {
                    /**
                     * International voice calls. Requied if international calling is supported
                     */
                    international: {
                        /**
                         * Cost amount of international voice calls
                         */
                        amount: string;
                        /**
                         * Total duration (hours, minutes, and seconds) of international voice calls. Not limited to 24hrs
                         */
                        duration: string;
                        /**
                         * Number of international voice calls
                         */
                        number: number;
                        [k: string]: unknown;
                    };
                    /**
                     * National voice calls
                     */
                    national: {
                        /**
                         * Cost amount of national calls
                         */
                        amount: string;
                        /**
                         * Total duration (hours, minutes, and seconds) of national voice calls. Not limited to 24hrs
                         */
                        duration: string;
                        /**
                         * Number of national voice calls
                         */
                        number: number;
                        [k: string]: unknown;
                    };
                    /**
                     * Roaming voice calls, Required if roaming is supported
                     */
                    roaming: {
                        /**
                         * Cost amount of roaming voice calls
                         */
                        amount: string;
                        /**
                         * Total duration (hours, minutes, and seconds) of roaming voice calls. Not limited to 24hrs
                         */
                        duration: string;
                        /**
                         * Number of roaming voice calls
                         */
                        number: number;
                        [k: string]: unknown;
                    };
                    [k: string]: unknown;
                };
                [k: string]: unknown;
            };
            /**
             * The account balance at the time the invoice was issued
             */
            balanceAtIssue: string;
            /**
             * The date that the invoice is due to be paid
             */
            dueDate?: string | null;
            /**
             * The total GST amount for this invoice.  If absent then zero is assumed
             */
            gstAmount?: string | null;
            /**
             * The net amount due for this invoice regardless of previous balance
             */
            invoiceAmount?: string | null;
            /**
             * The number assigned to this invoice by the telco Retailer
             */
            invoiceNumber: string;
            /**
             * The date that the invoice was actually issued (as opposed to generated or calculated)
             */
            issueDate: string;
            /**
             * A discount for on time payment
             */
            payOnTimeDiscount?: {
                /**
                 * The date by which the invoice must be paid to receive the pay on time discount
                 */
                date: string;
                /**
                 * The amount that will be discounted if the invoice is paid by the date specified
                 */
                discountAmount: string;
                /**
                 * The GST amount that will be discounted if the invoice is paid by the date specified.  If absent then zero is assumed
                 */
                gstAmount?: string | null;
                [k: string]: unknown;
            };
            /**
             * Indicator of the payment status for the invoice
             */
            paymentStatus: "PAID" | "PARTIALLY_PAID" | "NOT_PAID";
            /**
             * Object containing the start and end date for the period covered by the invoice. Mandatory if any usage based charges are included in the invoice
             */
            period?: {
                /**
                 * The end date of the period covered by this invoice
                 */
                endDate: string;
                /**
                 * The start date of the period covered by this invoice
                 */
                startDate: string;
                [k: string]: unknown;
            };
            /**
             * An array of service IDs to which this invoice applies. May be empty if the invoice contains no usage related charges
             */
            services: string[];
            [k: string]: unknown;
        }>;
        [k: string]: unknown;
    };
    links: {
        /**
         * Fully qualified link that generated the current response document
         */
        self: string;
        [k: string]: unknown;
    };
    meta: {
        [k: string]: unknown;
    };
    [k: string]: unknown;
}
/* These are the schema definitions stipulated by the Data Standards Body for the telco api. */

export interface TelcoPaymentSchedule {
    /**
     * Optional payment amount indicating that a constant payment amount is scheduled to be paid (used in bill smooting scenarios)
     */
    amount?: string | null;
    /**
     * Represents a regular credit card payment schedule. Mandatory if paymentScheduleUType is set to cardDebit
     */
    cardDebit?: {
        /**
         * The mechanism by which the payment amount is calculated.  Explanation of values are as follows:<br/><ul><li>**STATIC** - Indicates a consistent, static amount, per payment</li><li>**BALANCE** - Indicates that the outstanding balance for the account is paid per period</li><li>**CALCULATED** - Indicates that the payment amount is variable and calculated using a pre-defined algorithm</li></ul>
         */
        calculationType: "STATIC" | "BALANCE" | "CALCULATED";
        /**
         * The type of credit card held on file
         */
        cardScheme: "VISA" | "MASTERCARD" | "AMEX" | "DINERS" | "OTHER" | "UNKNOWN";
        /**
         * The frequency that payments will occur.  Formatted according to [ISO 8601 Durations](https://en.wikipedia.org/wiki/ISO_8601#Durations) (excludes recurrence syntax)
         */
        paymentFrequency: string;
        [k: string]: unknown;
    };
    /**
     * Represents a regular payment from a digital wallet. Mandatory if paymentScheduleUType is set to digitalWallet
     */
    digitalWallet?: {
        /**
         * The mechanism by which the payment amount is calculated.  Explanation of values are as follows:<br/><ul><li>**STATIC** - Indicates a consistent, static amount, per payment</li><li>**BALANCE** - Indicates that the outstanding balance for the account is paid per period</li><li>**CALCULATED** - Indicates that the payment amount is variable and calculated using a pre-defined algorithm</li></ul>
         */
        calculationType: "STATIC" | "BALANCE" | "CALCULATED";
        /**
         * The identifier of the digital wallet (dependent on type)
         */
        identifier: string;
        /**
         * The name assigned to the digital wallet by the owner of the wallet, else the display name provided by the digital wallet provider
         */
        name: string;
        /**
         * The frequency that payments will occur.  Formatted according to [ISO 8601 Durations](https://en.wikipedia.org/wiki/ISO_8601#Durations) (excludes recurrence syntax)
         */
        paymentFrequency: string;
        /**
         * The provider of the digital wallet
         */
        provider: "PAYPAL_AU" | "OTHER";
        /**
         * The type of the digital wallet identifier
         */
        type: "EMAIL" | "CONTACT_NAME" | "TELEPHONE";
        [k: string]: unknown;
    };
    /**
     * Represents a regular direct debit from a specified bank account. Mandatory if paymentScheduleUType is set to directDebit
     */
    directDebit?: {
        /**
         * The unmasked account number for the account to be debited. Is expected to be formatted as digits only with leading zeros included and no punctuation or spaces.  Is required if isTokenised is absent or false
         */
        accountNumber?: string | null;
        /**
         * The unmasked BSB for the account to be debited. Is expected to be formatted as digits only with leading zeros included and no punctuation or spaces.  Is required if isTokenised is absent or false
         */
        bsb?: string | null;
        /**
         * The mechanism by which the payment amount is calculated.  Explanation of values are as follows:<br/><ul><li>**STATIC** - Indicates a consistent, static amount, per payment</li><li>**BALANCE** - Indicates that the outstanding balance for the account is paid per period</li><li>**CALCULATED** - Indicates that the payment amount is variable and calculated using a pre-defined algorithm</li></ul>
         */
        calculationType: "STATIC" | "BALANCE" | "CALCULATED";
        /**
         * Flag indicating that the account details are tokenised and cannot be shared.  False if absent
         */
        isTokenised?: boolean | null;
        /**
         * The frequency that payments will occur.  Formatted according to [ISO 8601 Durations](https://en.wikipedia.org/wiki/ISO_8601#Durations) (excludes recurrence syntax)
         */
        paymentFrequency: string;
        [k: string]: unknown;
    };
    /**
     * Represents a manual payment schedule where the customer pays in response to a delivered statement. Mandatory if paymentScheduleUType is set to manualPayment
     */
    manualPayment?: {
        /**
         * The frequency with which a bill will be issued.  Formatted according to [ISO 8601 Durations](https://en.wikipedia.org/wiki/ISO_8601#Durations) (excludes recurrence syntax)
         */
        billFrequency: string;
        [k: string]: unknown;
    };
    /**
     * The type of object present in this response
     */
    paymentScheduleUType: "cardDebit" | "directDebit" | "manualPayment" | "digitalWallet";
    [k: string]: unknown;
}
/* These are the schema definitions stipulated by the Data Standards Body for the telco api. */

/**
 * Represents a regular credit card payment schedule. Mandatory if paymentScheduleUType is set to cardDebit
 */
export interface TelcoPaymentScheduleCardDebit {
    /**
     * The mechanism by which the payment amount is calculated.  Explanation of values are as follows:<br/><ul><li>**STATIC** - Indicates a consistent, static amount, per payment</li><li>**BALANCE** - Indicates that the outstanding balance for the account is paid per period</li><li>**CALCULATED** - Indicates that the payment amount is variable and calculated using a pre-defined algorithm</li></ul>
     */
    calculationType: "STATIC" | "BALANCE" | "CALCULATED";
    /**
     * The type of credit card held on file
     */
    cardScheme: "VISA" | "MASTERCARD" | "AMEX" | "DINERS" | "OTHER" | "UNKNOWN";
    /**
     * The frequency that payments will occur.  Formatted according to [ISO 8601 Durations](https://en.wikipedia.org/wiki/ISO_8601#Durations) (excludes recurrence syntax)
     */
    paymentFrequency: string;
    [k: string]: unknown;
}
/* These are the schema definitions stipulated by the Data Standards Body for the telco api. */

/**
 * Represents a regular payment from a digital wallet. Mandatory if paymentScheduleUType is set to digitalWallet
 */
export interface TelcoPaymentScheduleDigitalWallet {
    /**
     * The mechanism by which the payment amount is calculated.  Explanation of values are as follows:<br/><ul><li>**STATIC** - Indicates a consistent, static amount, per payment</li><li>**BALANCE** - Indicates that the outstanding balance for the account is paid per period</li><li>**CALCULATED** - Indicates that the payment amount is variable and calculated using a pre-defined algorithm</li></ul>
     */
    calculationType: "STATIC" | "BALANCE" | "CALCULATED";
    /**
     * The identifier of the digital wallet (dependent on type)
     */
    identifier: string;
    /**
     * The display name of the wallet as given by the customer, else a default value defined by the data holder
     */
    name: string;
    /**
     * The frequency that payments will occur.  Formatted according to [ISO 8601 Durations](https://en.wikipedia.org/wiki/ISO_8601#Durations) (excludes recurrence syntax)
     */
    paymentFrequency: string;
    /**
     * The provider of the digital wallet
     */
    provider: "PAYPAL_AU" | "OTHER";
    /**
     * The type of the digital wallet identifier
     */
    type: "EMAIL" | "CONTACT_NAME" | "TELEPHONE";
    [k: string]: unknown;
}
/* These are the schema definitions stipulated by the Data Standards Body for the telco api. */

/**
 * Represents a regular direct debit from a specified bank account. Mandatory if paymentScheduleUType is set to directDebit
 */
export interface TelcoPaymentScheduleDirectDebit {
    /**
     * The unmasked account number for the account to be debited. Is expected to be formatted as digits only with leading zeros included and no punctuation or spaces.  Is required if isTokenised is absent or false
     */
    accountNumber?: string | null;
    /**
     * The unmasked BSB for the account to be debited. Is expected to be formatted as digits only with leading zeros included and no punctuation or spaces.  Is required if isTokenised is absent or false
     */
    bsb?: string | null;
    /**
     * The mechanism by which the payment amount is calculated.  Explanation of values are as follows:<br/><ul><li>**STATIC** - Indicates a consistent, static amount, per payment</li><li>**BALANCE** - Indicates that the outstanding balance for the account is paid per period</li><li>**CALCULATED** - Indicates that the payment amount is variable and calculated using a pre-defined algorithm</li></ul>
     */
    calculationType: "STATIC" | "BALANCE" | "CALCULATED";
    /**
     * Flag indicating that the account details are tokenised and cannot be shared.  False if absent
     */
    isTokenised?: boolean | null;
    /**
     * The frequency that payments will occur.  Formatted according to [ISO 8601 Durations](https://en.wikipedia.org/wiki/ISO_8601#Durations) (excludes recurrence syntax)
     */
    paymentFrequency: string;
    [k: string]: unknown;
}
/* These are the schema definitions stipulated by the Data Standards Body for the telco api. */

/**
 * Represents a manual payment schedule where the customer pays in response to a delivered statement. Mandatory if paymentScheduleUType is set to manualPayment
 */
export interface TelcoPaymentScheduleManualPayment {
    /**
     * The frequency with which a bill will be issued.  Formatted according to [ISO 8601 Durations](https://en.wikipedia.org/wiki/ISO_8601#Durations) (excludes recurrence syntax)
     */
    billFrequency: string;
    [k: string]: unknown;
}
/* These are the schema definitions stipulated by the Data Standards Body for the telco api. */

export interface TelcoPaymentScheduleResponse {
    data: {
        /**
         * Array may be empty if no payment schedule exist
         */
        paymentSchedules: Array<{
            /**
             * Optional payment amount indicating that a constant payment amount is scheduled to be paid (used in bill smooting scenarios)
             */
            amount?: string | null;
            /**
             * Represents a regular credit card payment schedule. Mandatory if paymentScheduleUType is set to cardDebit
             */
            cardDebit?: {
                /**
                 * The mechanism by which the payment amount is calculated.  Explanation of values are as follows:<br/><ul><li>**STATIC** - Indicates a consistent, static amount, per payment</li><li>**BALANCE** - Indicates that the outstanding balance for the account is paid per period</li><li>**CALCULATED** - Indicates that the payment amount is variable and calculated using a pre-defined algorithm</li></ul>
                 */
                calculationType: "STATIC" | "BALANCE" | "CALCULATED";
                /**
                 * The type of credit card held on file
                 */
                cardScheme: "VISA" | "MASTERCARD" | "AMEX" | "DINERS" | "OTHER" | "UNKNOWN";
                /**
                 * The frequency that payments will occur.  Formatted according to [ISO 8601 Durations](https://en.wikipedia.org/wiki/ISO_8601#Durations) (excludes recurrence syntax)
                 */
                paymentFrequency: string;
                [k: string]: unknown;
            };
            /**
             * Represents a regular payment from a digital wallet. Mandatory if paymentScheduleUType is set to digitalWallet
             */
            digitalWallet?: {
                /**
                 * The mechanism by which the payment amount is calculated.  Explanation of values are as follows:<br/><ul><li>**STATIC** - Indicates a consistent, static amount, per payment</li><li>**BALANCE** - Indicates that the outstanding balance for the account is paid per period</li><li>**CALCULATED** - Indicates that the payment amount is variable and calculated using a pre-defined algorithm</li></ul>
                 */
                calculationType: "STATIC" | "BALANCE" | "CALCULATED";
                /**
                 * The identifier of the digital wallet (dependent on type)
                 */
                identifier: string;
                /**
                 * The name assigned to the digital wallet by the owner of the wallet, else the display name provided by the digital wallet provider
                 */
                name: string;
                /**
                 * The frequency that payments will occur.  Formatted according to [ISO 8601 Durations](https://en.wikipedia.org/wiki/ISO_8601#Durations) (excludes recurrence syntax)
                 */
                paymentFrequency: string;
                /**
                 * The provider of the digital wallet
                 */
                provider: "PAYPAL_AU" | "OTHER";
                /**
                 * The type of the digital wallet identifier
                 */
                type: "EMAIL" | "CONTACT_NAME" | "TELEPHONE";
                [k: string]: unknown;
            };
            /**
             * Represents a regular direct debit from a specified bank account. Mandatory if paymentScheduleUType is set to directDebit
             */
            directDebit?: {
                /**
                 * The unmasked account number for the account to be debited. Is expected to be formatted as digits only with leading zeros included and no punctuation or spaces.  Is required if isTokenised is absent or false
                 */
                accountNumber?: string | null;
                /**
                 * The unmasked BSB for the account to be debited. Is expected to be formatted as digits only with leading zeros included and no punctuation or spaces.  Is required if isTokenised is absent or false
                 */
                bsb?: string | null;
                /**
                 * The mechanism by which the payment amount is calculated.  Explanation of values are as follows:<br/><ul><li>**STATIC** - Indicates a consistent, static amount, per payment</li><li>**BALANCE** - Indicates that the outstanding balance for the account is paid per period</li><li>**CALCULATED** - Indicates that the payment amount is variable and calculated using a pre-defined algorithm</li></ul>
                 */
                calculationType: "STATIC" | "BALANCE" | "CALCULATED";
                /**
                 * Flag indicating that the account details are tokenised and cannot be shared.  False if absent
                 */
                isTokenised?: boolean | null;
                /**
                 * The frequency that payments will occur.  Formatted according to [ISO 8601 Durations](https://en.wikipedia.org/wiki/ISO_8601#Durations) (excludes recurrence syntax)
                 */
                paymentFrequency: string;
                [k: string]: unknown;
            };
            /**
             * Represents a manual payment schedule where the customer pays in response to a delivered statement. Mandatory if paymentScheduleUType is set to manualPayment
             */
            manualPayment?: {
                /**
                 * The frequency with which a bill will be issued.  Formatted according to [ISO 8601 Durations](https://en.wikipedia.org/wiki/ISO_8601#Durations) (excludes recurrence syntax)
                 */
                billFrequency: string;
                [k: string]: unknown;
            };
            /**
             * The type of object present in this response
             */
            paymentScheduleUType: "cardDebit" | "directDebit" | "manualPayment" | "digitalWallet";
            [k: string]: unknown;
        }>;
        [k: string]: unknown;
    };
    links: {
        /**
         * URI to the first page of this set. Mandatory if this response is not the first page
         */
        first?: string | null;
        /**
         * URI to the last page of this set. Mandatory if this response is not the last page
         */
        last?: string | null;
        /**
         * URI to the next page of this set. Mandatory if this response is not the last page
         */
        next?: string | null;
        /**
         * URI to the previous page of this set. Mandatory if this response is not the first page
         */
        prev?: string | null;
        /**
         * Fully qualified link that generated the current response document
         */
        self: string;
        [k: string]: unknown;
    };
    meta: {
        /**
         * The total number of pages in the full set. See [pagination](#pagination).
         */
        totalPages: number;
        /**
         * The total number of records in the full set. See [pagination](#pagination).
         */
        totalRecords: number;
        [k: string]: unknown;
    };
    [k: string]: unknown;
}
/* These are the schema definitions stipulated by the Data Standards Body for the telco api. */

export interface TelcoPaymentScheduleResponseData {
    /**
     * Array may be empty if no payment schedule exist
     */
    paymentSchedules: Array<{
        /**
         * Optional payment amount indicating that a constant payment amount is scheduled to be paid (used in bill smooting scenarios)
         */
        amount?: string | null;
        /**
         * Represents a regular credit card payment schedule. Mandatory if paymentScheduleUType is set to cardDebit
         */
        cardDebit?: {
            /**
             * The mechanism by which the payment amount is calculated.  Explanation of values are as follows:<br/><ul><li>**STATIC** - Indicates a consistent, static amount, per payment</li><li>**BALANCE** - Indicates that the outstanding balance for the account is paid per period</li><li>**CALCULATED** - Indicates that the payment amount is variable and calculated using a pre-defined algorithm</li></ul>
             */
            calculationType: "STATIC" | "BALANCE" | "CALCULATED";
            /**
             * The type of credit card held on file
             */
            cardScheme: "VISA" | "MASTERCARD" | "AMEX" | "DINERS" | "OTHER" | "UNKNOWN";
            /**
             * The frequency that payments will occur.  Formatted according to [ISO 8601 Durations](https://en.wikipedia.org/wiki/ISO_8601#Durations) (excludes recurrence syntax)
             */
            paymentFrequency: string;
            [k: string]: unknown;
        };
        /**
         * Represents a regular payment from a digital wallet. Mandatory if paymentScheduleUType is set to digitalWallet
         */
        digitalWallet?: {
            /**
             * The mechanism by which the payment amount is calculated.  Explanation of values are as follows:<br/><ul><li>**STATIC** - Indicates a consistent, static amount, per payment</li><li>**BALANCE** - Indicates that the outstanding balance for the account is paid per period</li><li>**CALCULATED** - Indicates that the payment amount is variable and calculated using a pre-defined algorithm</li></ul>
             */
            calculationType: "STATIC" | "BALANCE" | "CALCULATED";
            /**
             * The identifier of the digital wallet (dependent on type)
             */
            identifier: string;
            /**
             * The name assigned to the digital wallet by the owner of the wallet, else the display name provided by the digital wallet provider
             */
            name: string;
            /**
             * The frequency that payments will occur.  Formatted according to [ISO 8601 Durations](https://en.wikipedia.org/wiki/ISO_8601#Durations) (excludes recurrence syntax)
             */
            paymentFrequency: string;
            /**
             * The provider of the digital wallet
             */
            provider: "PAYPAL_AU" | "OTHER";
            /**
             * The type of the digital wallet identifier
             */
            type: "EMAIL" | "CONTACT_NAME" | "TELEPHONE";
            [k: string]: unknown;
        };
        /**
         * Represents a regular direct debit from a specified bank account. Mandatory if paymentScheduleUType is set to directDebit
         */
        directDebit?: {
            /**
             * The unmasked account number for the account to be debited. Is expected to be formatted as digits only with leading zeros included and no punctuation or spaces.  Is required if isTokenised is absent or false
             */
            accountNumber?: string | null;
            /**
             * The unmasked BSB for the account to be debited. Is expected to be formatted as digits only with leading zeros included and no punctuation or spaces.  Is required if isTokenised is absent or false
             */
            bsb?: string | null;
            /**
             * The mechanism by which the payment amount is calculated.  Explanation of values are as follows:<br/><ul><li>**STATIC** - Indicates a consistent, static amount, per payment</li><li>**BALANCE** - Indicates that the outstanding balance for the account is paid per period</li><li>**CALCULATED** - Indicates that the payment amount is variable and calculated using a pre-defined algorithm</li></ul>
             */
            calculationType: "STATIC" | "BALANCE" | "CALCULATED";
            /**
             * Flag indicating that the account details are tokenised and cannot be shared.  False if absent
             */
            isTokenised?: boolean | null;
            /**
             * The frequency that payments will occur.  Formatted according to [ISO 8601 Durations](https://en.wikipedia.org/wiki/ISO_8601#Durations) (excludes recurrence syntax)
             */
            paymentFrequency: string;
            [k: string]: unknown;
        };
        /**
         * Represents a manual payment schedule where the customer pays in response to a delivered statement. Mandatory if paymentScheduleUType is set to manualPayment
         */
        manualPayment?: {
            /**
             * The frequency with which a bill will be issued.  Formatted according to [ISO 8601 Durations](https://en.wikipedia.org/wiki/ISO_8601#Durations) (excludes recurrence syntax)
             */
            billFrequency: string;
            [k: string]: unknown;
        };
        /**
         * The type of object present in this response
         */
        paymentScheduleUType: "cardDebit" | "directDebit" | "manualPayment" | "digitalWallet";
        [k: string]: unknown;
    }>;
    [k: string]: unknown;
}
/* These are the schema definitions stipulated by the Data Standards Body for the telco api. */

/**
 * Plan type for this feature. METERED: A plan is charged by usage for the feature. UNMETERED: A plan with no limits for a feature. LIMITED: Where plan limit inclusions apply. UNSUPPORTED: Feature is not supported
 */
export type TelcoPlanType = "METERED" | "UNMETERED" | "LIMITED" | "UNSUPPORTED";
/* These are the schema definitions stipulated by the Data Standards Body for the telco api. */

export interface TelcoProduct {
    /**
     * Object that contains links to additional information on specific topics
     */
    additionalInformation?: {
        /**
         * A link to detail on bundles that this plan can be a part of
         */
        bundleUri?: string | null;
        /**
         * A link to detail on eligibility criteria for the plan
         */
        eligibilityUri?: string | null;
        /**
         * A link to a general overview of the plan
         */
        overviewUri?: string | null;
        /**
         * A link to detail on pricing for the plan
         */
        pricingUri?: string | null;
        /**
         * A link to terms and conditions for the plan
         */
        termsUri?: string | null;
        [k: string]: unknown;
    };
    /**
     * A link to an application web page where this plan can be applied for
     */
    applicationUri?: string | null;
    /**
     * The type of product
     */
    billingType: "PRE_PAID" | "POST_PAID" | "UPFRONT_PAID" | "OTHER";
    /**
     * The ID of the brand under which this product is offered
     */
    brand: string;
    /**
     * The display name of the brand under which this product is offered
     */
    brandName: string;
    /**
     * Required if part of a bundle. If not present FALSE is assumed
     */
    bundle?: boolean | null;
    /**
     * Summary of the contract details. Mandatory if the billing type is POST_PAID and a contract agreement is required with the service provider for the plan
     */
    contract?: {
        /**
         * URI of the contract conditions
         */
        contractUri?: string | null;
        /**
         * Description of the contract
         */
        description?: string | null;
        /**
         * Minimum contract duration in months
         */
        duration: number;
        /**
         * Name of the contract
         */
        name: string;
        [k: string]: unknown;
    };
    /**
     * A description of the product
     */
    description?: string | null;
    /**
     * The display name of the product
     */
    displayName?: string | null;
    /**
     * The date and time from which this product is effective (ie. is available for origination). Used to enable the articulation of products to the regime before they are available for customers to originate
     */
    effectiveFrom?: string | null;
    /**
     * The date and time at which this product will be retired and will no longer be offered. Used to enable the managed deprecation of plans
     */
    effectiveTo?: string | null;
    /**
     * The last date and time that the information for this plan was changed (or the creation date for the plan if it has never been altered)
     */
    lastUpdated?: string | null;
    /**
     * List of pricing details for the product plan
     */
    pricing: Array<{
        /**
         * The amount charged for the duration period
         */
        amount: string;
        /**
         * The description of the pricing
         */
        description: string;
        /**
         * The display name of the pricing
         */
        name: string;
        /**
         * The duration that occurs on a pricing schedule indicates the frequency. Formatted according to [ISO 8601 Durations](https://en.wikipedia.org/wiki/ISO_8601#Durations) (excludes recurrence syntax)
         */
        period?: string | null;
        [k: string]: unknown;
    }>;
    /**
     * The ID of the specific product
     */
    productId: string;
    /**
     * The purpose type of the product. If absent, then the value PERSONAL is assumed
     */
    purpose?: ("PERSONAL" | "BUSINESS" | "ALL") | null;
    /**
     * The ID of the Third Party through which this product may be originated
     */
    thirdPartyAgentId?: string | null;
    /**
     * The display name of the Third Party through which this product may be originated
     */
    thirdPartyAgentName?: string | null;
    /**
     * The type of product. [MOBILE](https://www.legislation.gov.au/Details/C2022C00170/Html/Volume_1#_Toc95898745) service or BROADBAND fixed internet service
     */
    type: "MOBILE" | "BROADBAND";
    [k: string]: unknown;
}
/* These are the schema definitions stipulated by the Data Standards Body for the telco api. */

export interface TelcoProductDetail {
    /**
     * Bundles the product can be part of
     */
    bundles?:
        | Array<{
            /**
             * The URI of the product bundle
             */
            bundleUri?: string | null;
            /**
             * The description of the product bundle
             */
            description?: string | null;
            /**
             * The display name of the product bundle
             */
            displayName: string;
            /**
             * Optional list of features of the bundle
             */
            features?:
                | Array<{
                    /**
                     * The type of the feature
                     */
                    category?:
                        | (
                            | "DATA"
                            | "VOICE"
                            | "MESSAGING"
                            | "HANDSET"
                            | "DEVICE"
                            | "NETWORK"
                            | "ENTERTAINMENT"
                            | "SUBSCRIPTION"
                            | "SOFTWARE"
                            | "OTHER"
                        )
                        | null;
                    /**
                     * The description of the feature
                     */
                    description?: string | null;
                    /**
                     * The display name of the feature
                     */
                    displayName: string;
                    [k: string]: unknown;
                }>
                | null;
            [k: string]: unknown;
        }>
        | null;
    /**
     * Discounts associated to the product
     */
    discounts?:
        | Array<{
            /**
             * The description name of the product plan
             */
            description?: string | null;
            /**
             * The URI of the discount
             */
            discountUri?: string | null;
            /**
             * The display name of the product plan
             */
            displayName: string;
            /**
             * Optional list of features of the discount
             */
            features?:
                | Array<{
                    /**
                     * The description of the discount feature
                     */
                    description?: string | null;
                    /**
                     * The display name of the discount feature
                     */
                    displayName: string;
                    [k: string]: unknown;
                }>
                | null;
            [k: string]: unknown;
        }>
        | null;
    /**
     * Incentives associated to the product
     */
    incentives?:
        | Array<{
            /**
             * The description of the incentive
             */
            description?: string | null;
            /**
             * The display name of the incentive
             */
            displayName: string;
            /**
             * Optional list of features of the incentive
             */
            features?:
                | Array<{
                    /**
                     * The description of the incentive feature
                     */
                    description?: string | null;
                    /**
                     * The display name of the incentive feature
                     */
                    displayName: string;
                    [k: string]: unknown;
                }>
                | null;
            /**
             * The URI of the incentive
             */
            incentiveUri?: string | null;
            [k: string]: unknown;
        }>
        | null;
    /**
     * Charges for metering included in the plan
     */
    meteringCharges?:
        | Array<{
            /**
             * Description of the charge
             */
            description?: string | null;
            /**
             * Display name of the charge
             */
            displayName: string;
            /**
             * The upper limit of the charge if the charge could occur in a range
             */
            maximumValue?: string | null;
            /**
             * Minimum value of the charge if the charge is a range or the absolute value of the charge if no range is specified
             */
            minimumValue: string;
            /**
             * The charges that occur on a schedule indicates the frequency. Formatted according to [ISO 8601 Durations](https://en.wikipedia.org/wiki/ISO_8601#Durations) (excludes recurrence syntax)
             */
            period?: string | null;
            [k: string]: unknown;
        }>
        | null;
    /**
     * Plans associated to the product
     */
    plans?:
        | Array<{
            /**
             * The display name of the product plan
             */
            description?: string | null;
            /**
             * The display name of the product plan
             */
            displayName: string;
            /**
             * Optional list of features of the plan
             */
            features?:
                | Array<{
                    /**
                     * The description of the feature
                     */
                    description?: string | null;
                    /**
                     * The display name of the feature
                     */
                    displayName: string;
                    [k: string]: unknown;
                }>
                | null;
            /**
             * The URI of the product plan
             */
            planUri?: string | null;
            [k: string]: unknown;
        }>
        | null;
    [k: string]: unknown;
}
/* These are the schema definitions stipulated by the Data Standards Body for the telco api. */

export interface TelcoProductDetailBundles {
    /**
     * The URI of the product bundle
     */
    bundleUri?: string | null;
    /**
     * The description of the product bundle
     */
    description?: string | null;
    /**
     * The display name of the product bundle
     */
    displayName: string;
    /**
     * Optional list of features of the bundle
     */
    features?:
        | Array<{
            /**
             * The type of the feature
             */
            category?:
                | (
                    | "DATA"
                    | "VOICE"
                    | "MESSAGING"
                    | "HANDSET"
                    | "DEVICE"
                    | "NETWORK"
                    | "ENTERTAINMENT"
                    | "SUBSCRIPTION"
                    | "SOFTWARE"
                    | "OTHER"
                )
                | null;
            /**
             * The description of the feature
             */
            description?: string | null;
            /**
             * The display name of the feature
             */
            displayName: string;
            [k: string]: unknown;
        }>
        | null;
    [k: string]: unknown;
}
/* These are the schema definitions stipulated by the Data Standards Body for the telco api. */

export interface TelcoProductDetailDiscountFeature {
    /**
     * The description of the discount feature
     */
    description?: string | null;
    /**
     * The display name of the discount feature
     */
    displayName: string;
    [k: string]: unknown;
}
/* These are the schema definitions stipulated by the Data Standards Body for the telco api. */

export interface TelcoProductDetailDiscounts {
    /**
     * The description name of the product plan
     */
    description?: string | null;
    /**
     * The URI of the discount
     */
    discountUri?: string | null;
    /**
     * The display name of the product plan
     */
    displayName: string;
    /**
     * Optional list of features of the discount
     */
    features?:
        | Array<{
            /**
             * The description of the discount feature
             */
            description?: string | null;
            /**
             * The display name of the discount feature
             */
            displayName: string;
            [k: string]: unknown;
        }>
        | null;
    [k: string]: unknown;
}
/* These are the schema definitions stipulated by the Data Standards Body for the telco api. */

export interface TelcoProductDetailFeature {
    /**
     * The type of the feature
     */
    category?:
        | (
            | "DATA"
            | "VOICE"
            | "MESSAGING"
            | "HANDSET"
            | "DEVICE"
            | "NETWORK"
            | "ENTERTAINMENT"
            | "SUBSCRIPTION"
            | "SOFTWARE"
            | "OTHER"
        )
        | null;
    /**
     * The description of the feature
     */
    description?: string | null;
    /**
     * The display name of the feature
     */
    displayName: string;
    [k: string]: unknown;
}
/* These are the schema definitions stipulated by the Data Standards Body for the telco api. */

export interface TelcoProductDetailIncentiveFeature {
    /**
     * The description of the incentive feature
     */
    description?: string | null;
    /**
     * The display name of the incentive feature
     */
    displayName: string;
    [k: string]: unknown;
}
/* These are the schema definitions stipulated by the Data Standards Body for the telco api. */

export interface TelcoProductDetailIncentives {
    /**
     * The description of the incentive
     */
    description?: string | null;
    /**
     * The display name of the incentive
     */
    displayName: string;
    /**
     * Optional list of features of the incentive
     */
    features?:
        | Array<{
            /**
             * The description of the incentive feature
             */
            description?: string | null;
            /**
             * The display name of the incentive feature
             */
            displayName: string;
            [k: string]: unknown;
        }>
        | null;
    /**
     * The URI of the incentive
     */
    incentiveUri?: string | null;
    [k: string]: unknown;
}
/* These are the schema definitions stipulated by the Data Standards Body for the telco api. */

export interface TelcoProductDetailMeteringCharges {
    /**
     * Description of the charge
     */
    description?: string | null;
    /**
     * Display name of the charge
     */
    displayName: string;
    /**
     * The upper limit of the charge if the charge could occur in a range
     */
    maximumValue?: string | null;
    /**
     * Minimum value of the charge if the charge is a range or the absolute value of the charge if no range is specified
     */
    minimumValue: string;
    /**
     * The charges that occur on a schedule indicates the frequency. Formatted according to [ISO 8601 Durations](https://en.wikipedia.org/wiki/ISO_8601#Durations) (excludes recurrence syntax)
     */
    period?: string | null;
    [k: string]: unknown;
}
/* These are the schema definitions stipulated by the Data Standards Body for the telco api. */

export interface TelcoProductDetailPlan {
    /**
     * The display name of the product plan
     */
    description?: string | null;
    /**
     * The display name of the product plan
     */
    displayName: string;
    /**
     * Optional list of features of the plan
     */
    features?:
        | Array<{
            /**
             * The description of the feature
             */
            description?: string | null;
            /**
             * The display name of the feature
             */
            displayName: string;
            [k: string]: unknown;
        }>
        | null;
    /**
     * The URI of the product plan
     */
    planUri?: string | null;
    [k: string]: unknown;
}
/* These are the schema definitions stipulated by the Data Standards Body for the telco api. */

export interface TelcoProductDetailPlanFeature {
    /**
     * The description of the feature
     */
    description?: string | null;
    /**
     * The display name of the feature
     */
    displayName: string;
    [k: string]: unknown;
}
/* These are the schema definitions stipulated by the Data Standards Body for the telco api. */

export interface TelcoProductListResponse {
    data: {
        /**
         * Array of Products
         */
        plans: Array<{
            /**
             * Object that contains links to additional information on specific topics
             */
            additionalInformation?: {
                /**
                 * A link to detail on bundles that this plan can be a part of
                 */
                bundleUri?: string | null;
                /**
                 * A link to detail on eligibility criteria for the plan
                 */
                eligibilityUri?: string | null;
                /**
                 * A link to a general overview of the plan
                 */
                overviewUri?: string | null;
                /**
                 * A link to detail on pricing for the plan
                 */
                pricingUri?: string | null;
                /**
                 * A link to terms and conditions for the plan
                 */
                termsUri?: string | null;
                [k: string]: unknown;
            };
            /**
             * A link to an application web page where this plan can be applied for
             */
            applicationUri?: string | null;
            /**
             * The type of product
             */
            billingType: "PRE_PAID" | "POST_PAID" | "UPFRONT_PAID" | "OTHER";
            /**
             * The ID of the brand under which this product is offered
             */
            brand: string;
            /**
             * The display name of the brand under which this product is offered
             */
            brandName: string;
            /**
             * Required if part of a bundle. If not present FALSE is assumed
             */
            bundle?: boolean | null;
            /**
             * Summary of the contract details. Mandatory if the billing type is POST_PAID and a contract agreement is required with the service provider for the plan
             */
            contract?: {
                /**
                 * URI of the contract conditions
                 */
                contractUri?: string | null;
                /**
                 * Description of the contract
                 */
                description?: string | null;
                /**
                 * Minimum contract duration in months
                 */
                duration: number;
                /**
                 * Name of the contract
                 */
                name: string;
                [k: string]: unknown;
            };
            /**
             * A description of the product
             */
            description?: string | null;
            /**
             * The display name of the product
             */
            displayName?: string | null;
            /**
             * The date and time from which this product is effective (ie. is available for origination). Used to enable the articulation of products to the regime before they are available for customers to originate
             */
            effectiveFrom?: string | null;
            /**
             * The date and time at which this product will be retired and will no longer be offered. Used to enable the managed deprecation of plans
             */
            effectiveTo?: string | null;
            /**
             * The last date and time that the information for this plan was changed (or the creation date for the plan if it has never been altered)
             */
            lastUpdated?: string | null;
            /**
             * List of pricing details for the product plan
             */
            pricing: Array<{
                /**
                 * The amount charged for the duration period
                 */
                amount: string;
                /**
                 * The description of the pricing
                 */
                description: string;
                /**
                 * The display name of the pricing
                 */
                name: string;
                /**
                 * The duration that occurs on a pricing schedule indicates the frequency. Formatted according to [ISO 8601 Durations](https://en.wikipedia.org/wiki/ISO_8601#Durations) (excludes recurrence syntax)
                 */
                period?: string | null;
                [k: string]: unknown;
            }>;
            /**
             * The ID of the specific product
             */
            productId: string;
            /**
             * The purpose type of the product. If absent, then the value PERSONAL is assumed
             */
            purpose?: ("PERSONAL" | "BUSINESS" | "ALL") | null;
            /**
             * The ID of the Third Party through which this product may be originated
             */
            thirdPartyAgentId?: string | null;
            /**
             * The display name of the Third Party through which this product may be originated
             */
            thirdPartyAgentName?: string | null;
            /**
             * The type of product. [MOBILE](https://www.legislation.gov.au/Details/C2022C00170/Html/Volume_1#_Toc95898745) service or BROADBAND fixed internet service
             */
            type: "MOBILE" | "BROADBAND";
            [k: string]: unknown;
        }>;
        [k: string]: unknown;
    };
    links: {
        /**
         * URI to the first page of this set. Mandatory if this response is not the first page
         */
        first?: string | null;
        /**
         * URI to the last page of this set. Mandatory if this response is not the last page
         */
        last?: string | null;
        /**
         * URI to the next page of this set. Mandatory if this response is not the last page
         */
        next?: string | null;
        /**
         * URI to the previous page of this set. Mandatory if this response is not the first page
         */
        prev?: string | null;
        /**
         * Fully qualified link that generated the current response document
         */
        self: string;
        [k: string]: unknown;
    };
    meta: {
        /**
         * The total number of pages in the full set. See [pagination](#pagination).
         */
        totalPages: number;
        /**
         * The total number of records in the full set. See [pagination](#pagination).
         */
        totalRecords: number;
        [k: string]: unknown;
    };
    [k: string]: unknown;
}
/* These are the schema definitions stipulated by the Data Standards Body for the telco api. */

export interface TelcoProductListResponseData {
    /**
     * Array of Products
     */
    plans: Array<{
        /**
         * Object that contains links to additional information on specific topics
         */
        additionalInformation?: {
            /**
             * A link to detail on bundles that this plan can be a part of
             */
            bundleUri?: string | null;
            /**
             * A link to detail on eligibility criteria for the plan
             */
            eligibilityUri?: string | null;
            /**
             * A link to a general overview of the plan
             */
            overviewUri?: string | null;
            /**
             * A link to detail on pricing for the plan
             */
            pricingUri?: string | null;
            /**
             * A link to terms and conditions for the plan
             */
            termsUri?: string | null;
            [k: string]: unknown;
        };
        /**
         * A link to an application web page where this plan can be applied for
         */
        applicationUri?: string | null;
        /**
         * The type of product
         */
        billingType: "PRE_PAID" | "POST_PAID" | "UPFRONT_PAID" | "OTHER";
        /**
         * The ID of the brand under which this product is offered
         */
        brand: string;
        /**
         * The display name of the brand under which this product is offered
         */
        brandName: string;
        /**
         * Required if part of a bundle. If not present FALSE is assumed
         */
        bundle?: boolean | null;
        /**
         * Summary of the contract details. Mandatory if the billing type is POST_PAID and a contract agreement is required with the service provider for the plan
         */
        contract?: {
            /**
             * URI of the contract conditions
             */
            contractUri?: string | null;
            /**
             * Description of the contract
             */
            description?: string | null;
            /**
             * Minimum contract duration in months
             */
            duration: number;
            /**
             * Name of the contract
             */
            name: string;
            [k: string]: unknown;
        };
        /**
         * A description of the product
         */
        description?: string | null;
        /**
         * The display name of the product
         */
        displayName?: string | null;
        /**
         * The date and time from which this product is effective (ie. is available for origination). Used to enable the articulation of products to the regime before they are available for customers to originate
         */
        effectiveFrom?: string | null;
        /**
         * The date and time at which this product will be retired and will no longer be offered. Used to enable the managed deprecation of plans
         */
        effectiveTo?: string | null;
        /**
         * The last date and time that the information for this plan was changed (or the creation date for the plan if it has never been altered)
         */
        lastUpdated?: string | null;
        /**
         * List of pricing details for the product plan
         */
        pricing: Array<{
            /**
             * The amount charged for the duration period
             */
            amount: string;
            /**
             * The description of the pricing
             */
            description: string;
            /**
             * The display name of the pricing
             */
            name: string;
            /**
             * The duration that occurs on a pricing schedule indicates the frequency. Formatted according to [ISO 8601 Durations](https://en.wikipedia.org/wiki/ISO_8601#Durations) (excludes recurrence syntax)
             */
            period?: string | null;
            [k: string]: unknown;
        }>;
        /**
         * The ID of the specific product
         */
        productId: string;
        /**
         * The purpose type of the product. If absent, then the value PERSONAL is assumed
         */
        purpose?: ("PERSONAL" | "BUSINESS" | "ALL") | null;
        /**
         * The ID of the Third Party through which this product may be originated
         */
        thirdPartyAgentId?: string | null;
        /**
         * The display name of the Third Party through which this product may be originated
         */
        thirdPartyAgentName?: string | null;
        /**
         * The type of product. [MOBILE](https://www.legislation.gov.au/Details/C2022C00170/Html/Volume_1#_Toc95898745) service or BROADBAND fixed internet service
         */
        type: "MOBILE" | "BROADBAND";
        [k: string]: unknown;
    }>;
    [k: string]: unknown;
}
/* These are the schema definitions stipulated by the Data Standards Body for the telco api. */

export interface TelcoProductPricing {
    /**
     * The amount charged for the duration period
     */
    amount: string;
    /**
     * The description of the pricing
     */
    description: string;
    /**
     * The display name of the pricing
     */
    name: string;
    /**
     * The duration that occurs on a pricing schedule indicates the frequency. Formatted according to [ISO 8601 Durations](https://en.wikipedia.org/wiki/ISO_8601#Durations) (excludes recurrence syntax)
     */
    period?: string | null;
    [k: string]: unknown;
}
/* These are the schema definitions stipulated by the Data Standards Body for the telco api. */

export interface TelcoProductResponse {
    data: {
        /**
         * Object that contains links to additional information on specific topics
         */
        additionalInformation?: {
            /**
             * A link to detail on bundles that this plan can be a part of
             */
            bundleUri?: string | null;
            /**
             * A link to detail on eligibility criteria for the plan
             */
            eligibilityUri?: string | null;
            /**
             * A link to a general overview of the plan
             */
            overviewUri?: string | null;
            /**
             * A link to detail on pricing for the plan
             */
            pricingUri?: string | null;
            /**
             * A link to terms and conditions for the plan
             */
            termsUri?: string | null;
            [k: string]: unknown;
        };
        /**
         * A link to an application web page where this plan can be applied for
         */
        applicationUri?: string | null;
        /**
         * The type of product
         */
        billingType: "PRE_PAID" | "POST_PAID" | "UPFRONT_PAID" | "OTHER";
        /**
         * The ID of the brand under which this product is offered
         */
        brand: string;
        /**
         * The display name of the brand under which this product is offered
         */
        brandName: string;
        /**
         * Required if part of a bundle. If not present FALSE is assumed
         */
        bundle?: boolean | null;
        /**
         * Summary of the contract details. Mandatory if the billing type is POST_PAID and a contract agreement is required with the service provider for the plan
         */
        contract?: {
            /**
             * URI of the contract conditions
             */
            contractUri?: string | null;
            /**
             * Description of the contract
             */
            description?: string | null;
            /**
             * Minimum contract duration in months
             */
            duration: number;
            /**
             * Name of the contract
             */
            name: string;
            [k: string]: unknown;
        };
        /**
         * A description of the product
         */
        description?: string | null;
        /**
         * The display name of the product
         */
        displayName?: string | null;
        /**
         * The date and time from which this product is effective (ie. is available for origination). Used to enable the articulation of products to the regime before they are available for customers to originate
         */
        effectiveFrom?: string | null;
        /**
         * The date and time at which this product will be retired and will no longer be offered. Used to enable the managed deprecation of plans
         */
        effectiveTo?: string | null;
        /**
         * The last date and time that the information for this plan was changed (or the creation date for the plan if it has never been altered)
         */
        lastUpdated?: string | null;
        /**
         * List of pricing details for the product plan
         */
        pricing: Array<{
            /**
             * The amount charged for the duration period
             */
            amount: string;
            /**
             * The description of the pricing
             */
            description: string;
            /**
             * The display name of the pricing
             */
            name: string;
            /**
             * The duration that occurs on a pricing schedule indicates the frequency. Formatted according to [ISO 8601 Durations](https://en.wikipedia.org/wiki/ISO_8601#Durations) (excludes recurrence syntax)
             */
            period?: string | null;
            [k: string]: unknown;
        }>;
        /**
         * The ID of the specific product
         */
        productId: string;
        /**
         * The purpose type of the product. If absent, then the value PERSONAL is assumed
         */
        purpose?: ("PERSONAL" | "BUSINESS" | "ALL") | null;
        /**
         * The ID of the Third Party through which this product may be originated
         */
        thirdPartyAgentId?: string | null;
        /**
         * The display name of the Third Party through which this product may be originated
         */
        thirdPartyAgentName?: string | null;
        /**
         * The type of product. [MOBILE](https://www.legislation.gov.au/Details/C2022C00170/Html/Volume_1#_Toc95898745) service or BROADBAND fixed internet service
         */
        type: "MOBILE" | "BROADBAND";
        [k: string]: unknown;
    } & {
        /**
         * Bundles the product can be part of
         */
        bundles?:
            | Array<{
                /**
                 * The URI of the product bundle
                 */
                bundleUri?: string | null;
                /**
                 * The description of the product bundle
                 */
                description?: string | null;
                /**
                 * The display name of the product bundle
                 */
                displayName: string;
                /**
                 * Optional list of features of the bundle
                 */
                features?:
                    | Array<{
                        /**
                         * The type of the feature
                         */
                        category?:
                            | (
                                | "DATA"
                                | "VOICE"
                                | "MESSAGING"
                                | "HANDSET"
                                | "DEVICE"
                                | "NETWORK"
                                | "ENTERTAINMENT"
                                | "SUBSCRIPTION"
                                | "SOFTWARE"
                                | "OTHER"
                            )
                            | null;
                        /**
                         * The description of the feature
                         */
                        description?: string | null;
                        /**
                         * The display name of the feature
                         */
                        displayName: string;
                        [k: string]: unknown;
                    }>
                    | null;
                [k: string]: unknown;
            }>
            | null;
        /**
         * Discounts associated to the product
         */
        discounts?:
            | Array<{
                /**
                 * The description name of the product plan
                 */
                description?: string | null;
                /**
                 * The URI of the discount
                 */
                discountUri?: string | null;
                /**
                 * The display name of the product plan
                 */
                displayName: string;
                /**
                 * Optional list of features of the discount
                 */
                features?:
                    | Array<{
                        /**
                         * The description of the discount feature
                         */
                        description?: string | null;
                        /**
                         * The display name of the discount feature
                         */
                        displayName: string;
                        [k: string]: unknown;
                    }>
                    | null;
                [k: string]: unknown;
            }>
            | null;
        /**
         * Incentives associated to the product
         */
        incentives?:
            | Array<{
                /**
                 * The description of the incentive
                 */
                description?: string | null;
                /**
                 * The display name of the incentive
                 */
                displayName: string;
                /**
                 * Optional list of features of the incentive
                 */
                features?:
                    | Array<{
                        /**
                         * The description of the incentive feature
                         */
                        description?: string | null;
                        /**
                         * The display name of the incentive feature
                         */
                        displayName: string;
                        [k: string]: unknown;
                    }>
                    | null;
                /**
                 * The URI of the incentive
                 */
                incentiveUri?: string | null;
                [k: string]: unknown;
            }>
            | null;
        /**
         * Charges for metering included in the plan
         */
        meteringCharges?:
            | Array<{
                /**
                 * Description of the charge
                 */
                description?: string | null;
                /**
                 * Display name of the charge
                 */
                displayName: string;
                /**
                 * The upper limit of the charge if the charge could occur in a range
                 */
                maximumValue?: string | null;
                /**
                 * Minimum value of the charge if the charge is a range or the absolute value of the charge if no range is specified
                 */
                minimumValue: string;
                /**
                 * The charges that occur on a schedule indicates the frequency. Formatted according to [ISO 8601 Durations](https://en.wikipedia.org/wiki/ISO_8601#Durations) (excludes recurrence syntax)
                 */
                period?: string | null;
                [k: string]: unknown;
            }>
            | null;
        /**
         * Plans associated to the product
         */
        plans?:
            | Array<{
                /**
                 * The display name of the product plan
                 */
                description?: string | null;
                /**
                 * The display name of the product plan
                 */
                displayName: string;
                /**
                 * Optional list of features of the plan
                 */
                features?:
                    | Array<{
                        /**
                         * The description of the feature
                         */
                        description?: string | null;
                        /**
                         * The display name of the feature
                         */
                        displayName: string;
                        [k: string]: unknown;
                    }>
                    | null;
                /**
                 * The URI of the product plan
                 */
                planUri?: string | null;
                [k: string]: unknown;
            }>
            | null;
        [k: string]: unknown;
    };
    links: {
        /**
         * Fully qualified link that generated the current response document
         */
        self: string;
        [k: string]: unknown;
    };
    meta?: {
        [k: string]: unknown;
    };
    [k: string]: unknown;
}
/* These are the schema definitions stipulated by the Data Standards Body for the telco api. */

/**
 * Telco balances for a service
 */
export interface TelcoServiceBalance {
    /**
     * A summary of Service balances
     */
    balance?: {
        /**
         * Summary of data balances
         */
        data?: {
            /**
             * Remaining value amount of data available. Required unless planType is UNSUPPORTED or UNMETERED
             */
            amount?: string | null;
            /**
             * An overview of plan limits. Required unless planType is UNSUPPORTED
             */
            description?: string | null;
            /**
             * Remaining download data in megabytes (MB). Required unless planType is UNSUPPORTED or UNMETERED
             */
            download?: number | null;
            /**
             * Plan type for this feature. METERED: A plan is charged by usage for the feature. UNMETERED: A plan with no limits for a feature. LIMITED: Where plan limit inclusions apply. UNSUPPORTED: Feature is not supported
             */
            planType: "METERED" | "UNMETERED" | "LIMITED" | "UNSUPPORTED";
            /**
             * Balance of data roaming charges. Required unless planType is UNSUPPORTED
             */
            roaming?: {
                /**
                 * Amount value of data roaming charges. Required unless planType is UNSUPPORTED
                 */
                amount?: string | null;
                /**
                 * An overview of plan limits. Required unless planType is UNSUPPORTED
                 */
                description?: string | null;
                /**
                 * Amount of data used overseas in megabytes (MB). Required unless planType is UNSUPPORTED
                 */
                download?: number | null;
                [k: string]: unknown;
            };
            /**
             * Remaining upload data in megabytes (MB). Required unless planType is UNSUPPORTED or UNMETERED
             */
            upload?: number | null;
            [k: string]: unknown;
        };
        /**
         * Summary of messaging. Required if messaging services is included in the product plan
         */
        messaging?: {
            /**
             * Summary of MMS Balance. Required if the service plan supports MMS messaging
             */
            mms: {
                /**
                 * Amount value of MMS messages remaining. Required unless planType is UNSUPPORTED or UNMETERED
                 */
                amount?: string | null;
                /**
                 * An overview of plan limits. Required unless planType is UNSUPPORTED
                 */
                description?: string | null;
                /**
                 * Number of international MMS messages remaining. Required unless planType is UNSUPPORTED or UNMETERED
                 */
                international?: number | null;
                /**
                 * Number of national MMS messages remaining. Required unless planType is UNSUPPORTED or UNMETERED
                 */
                national?: number | null;
                /**
                 * Number of roaming MMS messages remaining. Required unless planType is UNSUPPORTED or UNMETERED
                 */
                roaming?: number | null;
                [k: string]: unknown;
            };
            /**
             * Plan type for this feature. METERED: A plan is charged by usage for the feature. UNMETERED: A plan with no limits for a feature. LIMITED: Where plan limit inclusions apply. UNSUPPORTED: Feature is not supported
             */
            planType?: "METERED" | "UNMETERED" | "LIMITED" | "UNSUPPORTED";
            /**
             * Summary of SMS Balance. Required if the service plan supports SMS messaging
             */
            sms: {
                /**
                 * Amount value of SMS messages remaining. Required unless planType is UNSUPPORTED or UNMETERED
                 */
                amount?: string | null;
                /**
                 * An overview of plan limits. Required unless planType is UNSUPPORTED
                 */
                description?: string | null;
                /**
                 * Number of international SMS messages remaining. Required unless planType is UNSUPPORTED or UNMETERED
                 */
                international?: number | null;
                /**
                 * Number of national SMS messages remaining. Required unless planType is UNSUPPORTED or UNMETERED
                 */
                national?: number | null;
                /**
                 * Number of roaming SMS messages remaining. Required unless planType is UNSUPPORTED or UNMETERED
                 */
                roaming?: number | null;
                [k: string]: unknown;
            };
            [k: string]: unknown;
        };
        /**
         * Summary of voice balances. Required if voice calls are included in product plan
         */
        voice?: {
            /**
             * International voice calls
             */
            international?: {
                /**
                 * Amount value of international calls available. Required unless planType is UNSUPPORTED or UNMETERED
                 */
                amount?: string | null;
                /**
                 * An overview of plan limits. Required unless planType is UNSUPPORTED
                 */
                description?: string | null;
                /**
                 * Total duration (hours, minutes, and seconds) of international voice calls available. Not limited to 24hrs. Required unless planType is UNSUPPORTED or UNMETERED
                 */
                duration?: string | null;
                /**
                 * Number of international voice calls available Required unless planType is UNSUPPORTED or UNMETERED
                 */
                number?: number | null;
                [k: string]: unknown;
            };
            /**
             * National voice calls
             */
            national?: {
                /**
                 * Amount balance of national calls. Required unless planType is UNSUPPORTED or UNMETERED
                 */
                amount?: string | null;
                /**
                 * An overview of plan limits. Required unless planType is UNSUPPORTED
                 */
                description?: string | null;
                /**
                 * Total duration (hours, minutes, and seconds) of national voice calls. Not limited to 24hrs. Required unless planType is UNSUPPORTED or UNMETERED
                 */
                duration?: string | null;
                /**
                 * Number of national voice calls. Required unless planType is UNSUPPORTED or UNMETERED
                 */
                number?: number | null;
                [k: string]: unknown;
            };
            /**
             * Plan type for this feature. METERED: A plan is charged by usage for the feature. UNMETERED: A plan with no limits for a feature. LIMITED: Where plan limit inclusions apply. UNSUPPORTED: Feature is not supported
             */
            planType: "METERED" | "UNMETERED" | "LIMITED" | "UNSUPPORTED";
            /**
             * Roaming voice calls
             */
            roaming?: {
                /**
                 * Amount value of roaming calls available. Required unless planType is UNSUPPORTED or UNMETERED
                 */
                amount?: string | null;
                /**
                 * An overview of plan limits. Required unless planType is UNSUPPORTED
                 */
                description?: string | null;
                /**
                 * Total duration (hours, minutes, and seconds) of roaming voice calls available. Not limited to 24hrs. Required unless planType is UNSUPPORTED or UNMETERED
                 */
                duration?: string | null;
                /**
                 * Number of roaming voice calls available Required unless planType is UNSUPPORTED or UNMETERED
                 */
                number?: number | null;
                [k: string]: unknown;
            };
            [k: string]: unknown;
        };
        [k: string]: unknown;
    };
    /**
     * Optional description of the service used for display purposes
     */
    displayName?: string | null;
    /**
     * Date when the balance period ends
     */
    endDate?: string | null;
    /**
     * Required if the service includes a phone number
     */
    phoneNumber?: string | null;
    /**
     * The serviceId representing a unique service identifier such as a mobile [MSISDN](https://www.etsi.org/deliver/etsi_gts/03/0303/05.00.00_60/gsmts_0303v050000p.pdf), [FNN](https://www.nbnco.com.au/content/dam/nbnco2/documents/sfaa-wba2-dictionary_FTTN-launch.pdf) or internet service e.g [NBN AVC Service ID](https://www.nbnco.com.au/content/dam/nbnco2/documents/sfaa-wba2-dictionary_FTTN-launch.pdf). In accordance with [CDR ID permanence](#id-permanence) requirements
     */
    serviceId?: string | null;
    /**
     * Date when the balance period started
     */
    startDate?: string | null;
    [k: string]: unknown;
}
/* These are the schema definitions stipulated by the Data Standards Body for the telco api. */

/**
 * Summary of data balances
 */
export interface TelcoServiceBalanceData {
    /**
     * Remaining value amount of data available. Required unless planType is UNSUPPORTED or UNMETERED
     */
    amount?: string | null;
    /**
     * An overview of plan limits. Required unless planType is UNSUPPORTED
     */
    description?: string | null;
    /**
     * Remaining download data in megabytes (MB). Required unless planType is UNSUPPORTED or UNMETERED
     */
    download?: number | null;
    /**
     * Plan type for this feature. METERED: A plan is charged by usage for the feature. UNMETERED: A plan with no limits for a feature. LIMITED: Where plan limit inclusions apply. UNSUPPORTED: Feature is not supported
     */
    planType: "METERED" | "UNMETERED" | "LIMITED" | "UNSUPPORTED";
    /**
     * Balance of data roaming charges. Required unless planType is UNSUPPORTED
     */
    roaming?: {
        /**
         * Amount value of data roaming charges. Required unless planType is UNSUPPORTED
         */
        amount?: string | null;
        /**
         * An overview of plan limits. Required unless planType is UNSUPPORTED
         */
        description?: string | null;
        /**
         * Amount of data used overseas in megabytes (MB). Required unless planType is UNSUPPORTED
         */
        download?: number | null;
        [k: string]: unknown;
    };
    /**
     * Remaining upload data in megabytes (MB). Required unless planType is UNSUPPORTED or UNMETERED
     */
    upload?: number | null;
    [k: string]: unknown;
}
/* These are the schema definitions stipulated by the Data Standards Body for the telco api. */

/**
 * Balance of data roaming charges. Required unless planType is UNSUPPORTED
 */
export interface TelcoServiceBalanceDataRoaming {
    /**
     * Amount value of data roaming charges. Required unless planType is UNSUPPORTED
     */
    amount?: string | null;
    /**
     * An overview of plan limits. Required unless planType is UNSUPPORTED
     */
    description?: string | null;
    /**
     * Amount of data used overseas in megabytes (MB). Required unless planType is UNSUPPORTED
     */
    download?: number | null;
    [k: string]: unknown;
}
/* These are the schema definitions stipulated by the Data Standards Body for the telco api. */

/**
 * Summary of messaging. Required if messaging services is included in the product plan
 */
export interface TelcoServiceBalanceMessaging {
    /**
     * Summary of MMS Balance. Required if the service plan supports MMS messaging
     */
    mms: {
        /**
         * Amount value of MMS messages remaining. Required unless planType is UNSUPPORTED or UNMETERED
         */
        amount?: string | null;
        /**
         * An overview of plan limits. Required unless planType is UNSUPPORTED
         */
        description?: string | null;
        /**
         * Number of international MMS messages remaining. Required unless planType is UNSUPPORTED or UNMETERED
         */
        international?: number | null;
        /**
         * Number of national MMS messages remaining. Required unless planType is UNSUPPORTED or UNMETERED
         */
        national?: number | null;
        /**
         * Number of roaming MMS messages remaining. Required unless planType is UNSUPPORTED or UNMETERED
         */
        roaming?: number | null;
        [k: string]: unknown;
    };
    /**
     * Plan type for this feature. METERED: A plan is charged by usage for the feature. UNMETERED: A plan with no limits for a feature. LIMITED: Where plan limit inclusions apply. UNSUPPORTED: Feature is not supported
     */
    planType?: "METERED" | "UNMETERED" | "LIMITED" | "UNSUPPORTED";
    /**
     * Summary of SMS Balance. Required if the service plan supports SMS messaging
     */
    sms: {
        /**
         * Amount value of SMS messages remaining. Required unless planType is UNSUPPORTED or UNMETERED
         */
        amount?: string | null;
        /**
         * An overview of plan limits. Required unless planType is UNSUPPORTED
         */
        description?: string | null;
        /**
         * Number of international SMS messages remaining. Required unless planType is UNSUPPORTED or UNMETERED
         */
        international?: number | null;
        /**
         * Number of national SMS messages remaining. Required unless planType is UNSUPPORTED or UNMETERED
         */
        national?: number | null;
        /**
         * Number of roaming SMS messages remaining. Required unless planType is UNSUPPORTED or UNMETERED
         */
        roaming?: number | null;
        [k: string]: unknown;
    };
    [k: string]: unknown;
}
/* These are the schema definitions stipulated by the Data Standards Body for the telco api. */

/**
 * Summary of MMS Balance. Required if the service plan supports MMS messaging
 */
export interface TelcoServiceBalanceMessagingMms {
    /**
     * Amount value of MMS messages remaining. Required unless planType is UNSUPPORTED or UNMETERED
     */
    amount?: string | null;
    /**
     * An overview of plan limits. Required unless planType is UNSUPPORTED
     */
    description?: string | null;
    /**
     * Number of international MMS messages remaining. Required unless planType is UNSUPPORTED or UNMETERED
     */
    international?: number | null;
    /**
     * Number of national MMS messages remaining. Required unless planType is UNSUPPORTED or UNMETERED
     */
    national?: number | null;
    /**
     * Number of roaming MMS messages remaining. Required unless planType is UNSUPPORTED or UNMETERED
     */
    roaming?: number | null;
    [k: string]: unknown;
}
/* These are the schema definitions stipulated by the Data Standards Body for the telco api. */

/**
 * Summary of SMS Balance. Required if the service plan supports SMS messaging
 */
export interface TelcoServiceBalanceMessagingSms {
    /**
     * Amount value of SMS messages remaining. Required unless planType is UNSUPPORTED or UNMETERED
     */
    amount?: string | null;
    /**
     * An overview of plan limits. Required unless planType is UNSUPPORTED
     */
    description?: string | null;
    /**
     * Number of international SMS messages remaining. Required unless planType is UNSUPPORTED or UNMETERED
     */
    international?: number | null;
    /**
     * Number of national SMS messages remaining. Required unless planType is UNSUPPORTED or UNMETERED
     */
    national?: number | null;
    /**
     * Number of roaming SMS messages remaining. Required unless planType is UNSUPPORTED or UNMETERED
     */
    roaming?: number | null;
    [k: string]: unknown;
}
/* These are the schema definitions stipulated by the Data Standards Body for the telco api. */

/**
 * Summary of voice balances. Required if voice calls are included in product plan
 */
export interface TelcoServiceBalanceVoice {
    /**
     * International voice calls
     */
    international?: {
        /**
         * Amount value of international calls available. Required unless planType is UNSUPPORTED or UNMETERED
         */
        amount?: string | null;
        /**
         * An overview of plan limits. Required unless planType is UNSUPPORTED
         */
        description?: string | null;
        /**
         * Total duration (hours, minutes, and seconds) of international voice calls available. Not limited to 24hrs. Required unless planType is UNSUPPORTED or UNMETERED
         */
        duration?: string | null;
        /**
         * Number of international voice calls available Required unless planType is UNSUPPORTED or UNMETERED
         */
        number?: number | null;
        [k: string]: unknown;
    };
    /**
     * National voice calls
     */
    national?: {
        /**
         * Amount balance of national calls. Required unless planType is UNSUPPORTED or UNMETERED
         */
        amount?: string | null;
        /**
         * An overview of plan limits. Required unless planType is UNSUPPORTED
         */
        description?: string | null;
        /**
         * Total duration (hours, minutes, and seconds) of national voice calls. Not limited to 24hrs. Required unless planType is UNSUPPORTED or UNMETERED
         */
        duration?: string | null;
        /**
         * Number of national voice calls. Required unless planType is UNSUPPORTED or UNMETERED
         */
        number?: number | null;
        [k: string]: unknown;
    };
    /**
     * Plan type for this feature. METERED: A plan is charged by usage for the feature. UNMETERED: A plan with no limits for a feature. LIMITED: Where plan limit inclusions apply. UNSUPPORTED: Feature is not supported
     */
    planType: "METERED" | "UNMETERED" | "LIMITED" | "UNSUPPORTED";
    /**
     * Roaming voice calls
     */
    roaming?: {
        /**
         * Amount value of roaming calls available. Required unless planType is UNSUPPORTED or UNMETERED
         */
        amount?: string | null;
        /**
         * An overview of plan limits. Required unless planType is UNSUPPORTED
         */
        description?: string | null;
        /**
         * Total duration (hours, minutes, and seconds) of roaming voice calls available. Not limited to 24hrs. Required unless planType is UNSUPPORTED or UNMETERED
         */
        duration?: string | null;
        /**
         * Number of roaming voice calls available Required unless planType is UNSUPPORTED or UNMETERED
         */
        number?: number | null;
        [k: string]: unknown;
    };
    [k: string]: unknown;
}
/* These are the schema definitions stipulated by the Data Standards Body for the telco api. */

/**
 * International voice calls
 */
export interface TelcoServiceBalanceVoiceInternational {
    /**
     * Amount value of international calls available. Required unless planType is UNSUPPORTED or UNMETERED
     */
    amount?: string | null;
    /**
     * An overview of plan limits. Required unless planType is UNSUPPORTED
     */
    description?: string | null;
    /**
     * Total duration (hours, minutes, and seconds) of international voice calls available. Not limited to 24hrs. Required unless planType is UNSUPPORTED or UNMETERED
     */
    duration?: string | null;
    /**
     * Number of international voice calls available Required unless planType is UNSUPPORTED or UNMETERED
     */
    number?: number | null;
    [k: string]: unknown;
}
/* These are the schema definitions stipulated by the Data Standards Body for the telco api. */

/**
 * National voice calls
 */
export interface TelcoServiceBalanceVoiceNational {
    /**
     * Amount balance of national calls. Required unless planType is UNSUPPORTED or UNMETERED
     */
    amount?: string | null;
    /**
     * An overview of plan limits. Required unless planType is UNSUPPORTED
     */
    description?: string | null;
    /**
     * Total duration (hours, minutes, and seconds) of national voice calls. Not limited to 24hrs. Required unless planType is UNSUPPORTED or UNMETERED
     */
    duration?: string | null;
    /**
     * Number of national voice calls. Required unless planType is UNSUPPORTED or UNMETERED
     */
    number?: number | null;
    [k: string]: unknown;
}
/* These are the schema definitions stipulated by the Data Standards Body for the telco api. */

/**
 * Roaming voice calls
 */
export interface TelcoServiceBalanceVoiceRoaming {
    /**
     * Amount value of roaming calls available. Required unless planType is UNSUPPORTED or UNMETERED
     */
    amount?: string | null;
    /**
     * An overview of plan limits. Required unless planType is UNSUPPORTED
     */
    description?: string | null;
    /**
     * Total duration (hours, minutes, and seconds) of roaming voice calls available. Not limited to 24hrs. Required unless planType is UNSUPPORTED or UNMETERED
     */
    duration?: string | null;
    /**
     * Number of roaming voice calls available Required unless planType is UNSUPPORTED or UNMETERED
     */
    number?: number | null;
    [k: string]: unknown;
}
/* These are the schema definitions stipulated by the Data Standards Body for the telco api. */

/**
 * A summary of Service balances
 */
export interface TelcoServiceBalances {
    /**
     * Summary of data balances
     */
    data?: {
        /**
         * Remaining value amount of data available. Required unless planType is UNSUPPORTED or UNMETERED
         */
        amount?: string | null;
        /**
         * An overview of plan limits. Required unless planType is UNSUPPORTED
         */
        description?: string | null;
        /**
         * Remaining download data in megabytes (MB). Required unless planType is UNSUPPORTED or UNMETERED
         */
        download?: number | null;
        /**
         * Plan type for this feature. METERED: A plan is charged by usage for the feature. UNMETERED: A plan with no limits for a feature. LIMITED: Where plan limit inclusions apply. UNSUPPORTED: Feature is not supported
         */
        planType: "METERED" | "UNMETERED" | "LIMITED" | "UNSUPPORTED";
        /**
         * Balance of data roaming charges. Required unless planType is UNSUPPORTED
         */
        roaming?: {
            /**
             * Amount value of data roaming charges. Required unless planType is UNSUPPORTED
             */
            amount?: string | null;
            /**
             * An overview of plan limits. Required unless planType is UNSUPPORTED
             */
            description?: string | null;
            /**
             * Amount of data used overseas in megabytes (MB). Required unless planType is UNSUPPORTED
             */
            download?: number | null;
            [k: string]: unknown;
        };
        /**
         * Remaining upload data in megabytes (MB). Required unless planType is UNSUPPORTED or UNMETERED
         */
        upload?: number | null;
        [k: string]: unknown;
    };
    /**
     * Summary of messaging. Required if messaging services is included in the product plan
     */
    messaging?: {
        /**
         * Summary of MMS Balance. Required if the service plan supports MMS messaging
         */
        mms: {
            /**
             * Amount value of MMS messages remaining. Required unless planType is UNSUPPORTED or UNMETERED
             */
            amount?: string | null;
            /**
             * An overview of plan limits. Required unless planType is UNSUPPORTED
             */
            description?: string | null;
            /**
             * Number of international MMS messages remaining. Required unless planType is UNSUPPORTED or UNMETERED
             */
            international?: number | null;
            /**
             * Number of national MMS messages remaining. Required unless planType is UNSUPPORTED or UNMETERED
             */
            national?: number | null;
            /**
             * Number of roaming MMS messages remaining. Required unless planType is UNSUPPORTED or UNMETERED
             */
            roaming?: number | null;
            [k: string]: unknown;
        };
        /**
         * Plan type for this feature. METERED: A plan is charged by usage for the feature. UNMETERED: A plan with no limits for a feature. LIMITED: Where plan limit inclusions apply. UNSUPPORTED: Feature is not supported
         */
        planType?: "METERED" | "UNMETERED" | "LIMITED" | "UNSUPPORTED";
        /**
         * Summary of SMS Balance. Required if the service plan supports SMS messaging
         */
        sms: {
            /**
             * Amount value of SMS messages remaining. Required unless planType is UNSUPPORTED or UNMETERED
             */
            amount?: string | null;
            /**
             * An overview of plan limits. Required unless planType is UNSUPPORTED
             */
            description?: string | null;
            /**
             * Number of international SMS messages remaining. Required unless planType is UNSUPPORTED or UNMETERED
             */
            international?: number | null;
            /**
             * Number of national SMS messages remaining. Required unless planType is UNSUPPORTED or UNMETERED
             */
            national?: number | null;
            /**
             * Number of roaming SMS messages remaining. Required unless planType is UNSUPPORTED or UNMETERED
             */
            roaming?: number | null;
            [k: string]: unknown;
        };
        [k: string]: unknown;
    };
    /**
     * Summary of voice balances. Required if voice calls are included in product plan
     */
    voice?: {
        /**
         * International voice calls
         */
        international?: {
            /**
             * Amount value of international calls available. Required unless planType is UNSUPPORTED or UNMETERED
             */
            amount?: string | null;
            /**
             * An overview of plan limits. Required unless planType is UNSUPPORTED
             */
            description?: string | null;
            /**
             * Total duration (hours, minutes, and seconds) of international voice calls available. Not limited to 24hrs. Required unless planType is UNSUPPORTED or UNMETERED
             */
            duration?: string | null;
            /**
             * Number of international voice calls available Required unless planType is UNSUPPORTED or UNMETERED
             */
            number?: number | null;
            [k: string]: unknown;
        };
        /**
         * National voice calls
         */
        national?: {
            /**
             * Amount balance of national calls. Required unless planType is UNSUPPORTED or UNMETERED
             */
            amount?: string | null;
            /**
             * An overview of plan limits. Required unless planType is UNSUPPORTED
             */
            description?: string | null;
            /**
             * Total duration (hours, minutes, and seconds) of national voice calls. Not limited to 24hrs. Required unless planType is UNSUPPORTED or UNMETERED
             */
            duration?: string | null;
            /**
             * Number of national voice calls. Required unless planType is UNSUPPORTED or UNMETERED
             */
            number?: number | null;
            [k: string]: unknown;
        };
        /**
         * Plan type for this feature. METERED: A plan is charged by usage for the feature. UNMETERED: A plan with no limits for a feature. LIMITED: Where plan limit inclusions apply. UNSUPPORTED: Feature is not supported
         */
        planType: "METERED" | "UNMETERED" | "LIMITED" | "UNSUPPORTED";
        /**
         * Roaming voice calls
         */
        roaming?: {
            /**
             * Amount value of roaming calls available. Required unless planType is UNSUPPORTED or UNMETERED
             */
            amount?: string | null;
            /**
             * An overview of plan limits. Required unless planType is UNSUPPORTED
             */
            description?: string | null;
            /**
             * Total duration (hours, minutes, and seconds) of roaming voice calls available. Not limited to 24hrs. Required unless planType is UNSUPPORTED or UNMETERED
             */
            duration?: string | null;
            /**
             * Number of roaming voice calls available Required unless planType is UNSUPPORTED or UNMETERED
             */
            number?: number | null;
            [k: string]: unknown;
        };
        [k: string]: unknown;
    };
    [k: string]: unknown;
}
/* These are the schema definitions stipulated by the Data Standards Body for the telco api. */

export interface TelcoServiceDetail {
    /**
     * The tokenised ID of the service identifier for use in the CDR APIs. E.g a mobile [MSISDN](https://www.etsi.org/deliver/etsi_gts/03/0303/05.00.00_60/gsmts_0303v050000p.pdf), [FNN](https://www.nbnco.com.au/content/dam/nbnco2/documents/sfaa-wba2-dictionary_FTTN-launch.pdf) or internet service e.g [NBN AVC Service ID](https://www.nbnco.com.au/content/dam/nbnco2/documents/sfaa-wba2-dictionary_FTTN-launch.pdf).  Created according to the CDR rules for [CDR ID permanence](#id-permanence)
     */
    serviceId: string;
    [k: string]: unknown;
}
/* These are the schema definitions stipulated by the Data Standards Body for the telco api. */

export interface TelcoServiceUsage {
    /**
     * Optional description of the service used for display purposes
     */
    displayName?: string | null;
    /**
     * Date when the usage period ends
     */
    endDate?: string | null;
    /**
     * Required if the service includes a phone number
     */
    phoneNumber?: string | null;
    /**
     * Tokenised ID of the service identifier. E.g. a mobile [MSISDN](https://www.etsi.org/deliver/etsi_gts/03/0303/05.00.00_60/gsmts_0303v050000p.pdf), [FNN](https://www.nbnco.com.au/content/dam/nbnco2/documents/sfaa-wba2-dictionary_FTTN-launch.pdf) or internet service e.g [NBN AVC Service ID](https://www.nbnco.com.au/content/dam/nbnco2/documents/sfaa-wba2-dictionary_FTTN-launch.pdf). To be created in accordance with [CDR ID permanence](#id-permanence) requirements
     */
    serviceId: string;
    /**
     * Date when the usage period started
     */
    startDate: string;
    /**
     * Object containing usage summary
     */
    usage?: {
        /**
         * Summary of data usage
         */
        data?: {
            /**
             * Cost amount of data usage
             */
            amount: string;
            /**
             * Amount of data downloaded in megabytes (MB)
             */
            download: number;
            /**
             * Required if roaming is suipported
             */
            roaming?: {
                /**
                 * Amount value of data roaming charges
                 */
                amount?: string | null;
                /**
                 * Amount of data used while roaming in megabytes (MB)
                 */
                download?: number | null;
                [k: string]: unknown;
            };
            /**
             * Number of data sessions
             */
            sessions?: number | null;
            /**
             * Amount of data uploaded in megabytes (MB)
             */
            upload: number;
            [k: string]: unknown;
        };
        /**
         * Summary of messaging. Required if messaging services is included in the product plan
         */
        messaging?: {
            /**
             * Summary of MMS usage
             */
            mms: {
                /**
                 * Cost amount of MMS messages
                 */
                amount: string;
                /**
                 * ber of international MMS messages sent
                 */
                international?: number | null;
                /**
                 * Number of national MMS messages sent
                 */
                national: number;
                /**
                 * Number of roaming SMS messages sent. Including premium SMS services
                 */
                roaming?: number | null;
                [k: string]: unknown;
            };
            /**
             * Summary of SMS usage
             */
            sms: {
                /**
                 * Cost amount of SMS messages. Including premium SMS services
                 */
                amount: string;
                /**
                 * Number of international SMS messages sent. Including premium SMS services
                 */
                international?: number | null;
                /**
                 * Number of national SMS messages sent. Including premium SMS services
                 */
                national: number;
                /**
                 * Number of roaming SMS messages sent. Including premium SMS services
                 */
                roaming?: number | null;
                [k: string]: unknown;
            };
            [k: string]: unknown;
        };
        /**
         * Summary of voice calls. Required if voice calls are included in product plan
         */
        voice?: {
            /**
             * International voice calls. Requied if international calling is supported
             */
            international: {
                /**
                 * Cost amount of international voice calls
                 */
                amount: string;
                /**
                 * Total duration (hours, minutes, and seconds) of international voice calls. Not limited to 24hrs
                 */
                duration: string;
                /**
                 * Number of international voice calls
                 */
                number: number;
                [k: string]: unknown;
            };
            /**
             * National voice calls
             */
            national: {
                /**
                 * Cost amount of national calls
                 */
                amount: string;
                /**
                 * Total duration (hours, minutes, and seconds) of national voice calls. Not limited to 24hrs
                 */
                duration: string;
                /**
                 * Number of national voice calls
                 */
                number: number;
                [k: string]: unknown;
            };
            /**
             * Roaming voice calls, Required if roaming is supported
             */
            roaming: {
                /**
                 * Cost amount of roaming voice calls
                 */
                amount: string;
                /**
                 * Total duration (hours, minutes, and seconds) of roaming voice calls. Not limited to 24hrs
                 */
                duration: string;
                /**
                 * Number of roaming voice calls
                 */
                number: number;
                [k: string]: unknown;
            };
            [k: string]: unknown;
        };
        [k: string]: unknown;
    };
    [k: string]: unknown;
}
/* These are the schema definitions stipulated by the Data Standards Body for the telco api. */

export interface TelcoServiceUsageListResponse {
    data: Array<{
        /**
         * Optional description of the service used for display purposes
         */
        displayName?: string | null;
        /**
         * Date when the usage period ends
         */
        endDate?: string | null;
        /**
         * Required if the service includes a phone number
         */
        phoneNumber?: string | null;
        /**
         * Tokenised ID of the service identifier. E.g. a mobile [MSISDN](https://www.etsi.org/deliver/etsi_gts/03/0303/05.00.00_60/gsmts_0303v050000p.pdf), [FNN](https://www.nbnco.com.au/content/dam/nbnco2/documents/sfaa-wba2-dictionary_FTTN-launch.pdf) or internet service e.g [NBN AVC Service ID](https://www.nbnco.com.au/content/dam/nbnco2/documents/sfaa-wba2-dictionary_FTTN-launch.pdf). To be created in accordance with [CDR ID permanence](#id-permanence) requirements
         */
        serviceId: string;
        /**
         * Date when the usage period started
         */
        startDate: string;
        /**
         * Object containing usage summary
         */
        usage?: {
            /**
             * Summary of data usage
             */
            data?: {
                /**
                 * Cost amount of data usage
                 */
                amount: string;
                /**
                 * Amount of data downloaded in megabytes (MB)
                 */
                download: number;
                /**
                 * Required if roaming is suipported
                 */
                roaming?: {
                    /**
                     * Amount value of data roaming charges
                     */
                    amount?: string | null;
                    /**
                     * Amount of data used while roaming in megabytes (MB)
                     */
                    download?: number | null;
                    [k: string]: unknown;
                };
                /**
                 * Number of data sessions
                 */
                sessions?: number | null;
                /**
                 * Amount of data uploaded in megabytes (MB)
                 */
                upload: number;
                [k: string]: unknown;
            };
            /**
             * Summary of messaging. Required if messaging services is included in the product plan
             */
            messaging?: {
                /**
                 * Summary of MMS usage
                 */
                mms: {
                    /**
                     * Cost amount of MMS messages
                     */
                    amount: string;
                    /**
                     * ber of international MMS messages sent
                     */
                    international?: number | null;
                    /**
                     * Number of national MMS messages sent
                     */
                    national: number;
                    /**
                     * Number of roaming SMS messages sent. Including premium SMS services
                     */
                    roaming?: number | null;
                    [k: string]: unknown;
                };
                /**
                 * Summary of SMS usage
                 */
                sms: {
                    /**
                     * Cost amount of SMS messages. Including premium SMS services
                     */
                    amount: string;
                    /**
                     * Number of international SMS messages sent. Including premium SMS services
                     */
                    international?: number | null;
                    /**
                     * Number of national SMS messages sent. Including premium SMS services
                     */
                    national: number;
                    /**
                     * Number of roaming SMS messages sent. Including premium SMS services
                     */
                    roaming?: number | null;
                    [k: string]: unknown;
                };
                [k: string]: unknown;
            };
            /**
             * Summary of voice calls. Required if voice calls are included in product plan
             */
            voice?: {
                /**
                 * International voice calls. Requied if international calling is supported
                 */
                international: {
                    /**
                     * Cost amount of international voice calls
                     */
                    amount: string;
                    /**
                     * Total duration (hours, minutes, and seconds) of international voice calls. Not limited to 24hrs
                     */
                    duration: string;
                    /**
                     * Number of international voice calls
                     */
                    number: number;
                    [k: string]: unknown;
                };
                /**
                 * National voice calls
                 */
                national: {
                    /**
                     * Cost amount of national calls
                     */
                    amount: string;
                    /**
                     * Total duration (hours, minutes, and seconds) of national voice calls. Not limited to 24hrs
                     */
                    duration: string;
                    /**
                     * Number of national voice calls
                     */
                    number: number;
                    [k: string]: unknown;
                };
                /**
                 * Roaming voice calls, Required if roaming is supported
                 */
                roaming: {
                    /**
                     * Cost amount of roaming voice calls
                     */
                    amount: string;
                    /**
                     * Total duration (hours, minutes, and seconds) of roaming voice calls. Not limited to 24hrs
                     */
                    duration: string;
                    /**
                     * Number of roaming voice calls
                     */
                    number: number;
                    [k: string]: unknown;
                };
                [k: string]: unknown;
            };
            [k: string]: unknown;
        };
        [k: string]: unknown;
    }>;
    links: {
        /**
         * URI to the first page of this set. Mandatory if this response is not the first page
         */
        first?: string | null;
        /**
         * URI to the last page of this set. Mandatory if this response is not the last page
         */
        last?: string | null;
        /**
         * URI to the next page of this set. Mandatory if this response is not the last page
         */
        next?: string | null;
        /**
         * URI to the previous page of this set. Mandatory if this response is not the first page
         */
        prev?: string | null;
        /**
         * Fully qualified link that generated the current response document
         */
        self: string;
        [k: string]: unknown;
    };
    meta: {
        /**
         * The total number of pages in the full set. See [pagination](#pagination).
         */
        totalPages: number;
        /**
         * The total number of records in the full set. See [pagination](#pagination).
         */
        totalRecords: number;
        [k: string]: unknown;
    };
    [k: string]: unknown;
}
/* These are the schema definitions stipulated by the Data Standards Body for the telco api. */

export interface TelcoServiceUsageResponse {
    data: {
        /**
         * Optional description of the service used for display purposes
         */
        displayName?: string | null;
        /**
         * Date when the usage period ends
         */
        endDate?: string | null;
        /**
         * Required if the service includes a phone number
         */
        phoneNumber?: string | null;
        /**
         * Tokenised ID of the service identifier. E.g. a mobile [MSISDN](https://www.etsi.org/deliver/etsi_gts/03/0303/05.00.00_60/gsmts_0303v050000p.pdf), [FNN](https://www.nbnco.com.au/content/dam/nbnco2/documents/sfaa-wba2-dictionary_FTTN-launch.pdf) or internet service e.g [NBN AVC Service ID](https://www.nbnco.com.au/content/dam/nbnco2/documents/sfaa-wba2-dictionary_FTTN-launch.pdf). To be created in accordance with [CDR ID permanence](#id-permanence) requirements
         */
        serviceId: string;
        /**
         * Date when the usage period started
         */
        startDate: string;
        /**
         * Object containing usage summary
         */
        usage?: {
            /**
             * Summary of data usage
             */
            data?: {
                /**
                 * Cost amount of data usage
                 */
                amount: string;
                /**
                 * Amount of data downloaded in megabytes (MB)
                 */
                download: number;
                /**
                 * Required if roaming is suipported
                 */
                roaming?: {
                    /**
                     * Amount value of data roaming charges
                     */
                    amount?: string | null;
                    /**
                     * Amount of data used while roaming in megabytes (MB)
                     */
                    download?: number | null;
                    [k: string]: unknown;
                };
                /**
                 * Number of data sessions
                 */
                sessions?: number | null;
                /**
                 * Amount of data uploaded in megabytes (MB)
                 */
                upload: number;
                [k: string]: unknown;
            };
            /**
             * Summary of messaging. Required if messaging services is included in the product plan
             */
            messaging?: {
                /**
                 * Summary of MMS usage
                 */
                mms: {
                    /**
                     * Cost amount of MMS messages
                     */
                    amount: string;
                    /**
                     * ber of international MMS messages sent
                     */
                    international?: number | null;
                    /**
                     * Number of national MMS messages sent
                     */
                    national: number;
                    /**
                     * Number of roaming SMS messages sent. Including premium SMS services
                     */
                    roaming?: number | null;
                    [k: string]: unknown;
                };
                /**
                 * Summary of SMS usage
                 */
                sms: {
                    /**
                     * Cost amount of SMS messages. Including premium SMS services
                     */
                    amount: string;
                    /**
                     * Number of international SMS messages sent. Including premium SMS services
                     */
                    international?: number | null;
                    /**
                     * Number of national SMS messages sent. Including premium SMS services
                     */
                    national: number;
                    /**
                     * Number of roaming SMS messages sent. Including premium SMS services
                     */
                    roaming?: number | null;
                    [k: string]: unknown;
                };
                [k: string]: unknown;
            };
            /**
             * Summary of voice calls. Required if voice calls are included in product plan
             */
            voice?: {
                /**
                 * International voice calls. Requied if international calling is supported
                 */
                international: {
                    /**
                     * Cost amount of international voice calls
                     */
                    amount: string;
                    /**
                     * Total duration (hours, minutes, and seconds) of international voice calls. Not limited to 24hrs
                     */
                    duration: string;
                    /**
                     * Number of international voice calls
                     */
                    number: number;
                    [k: string]: unknown;
                };
                /**
                 * National voice calls
                 */
                national: {
                    /**
                     * Cost amount of national calls
                     */
                    amount: string;
                    /**
                     * Total duration (hours, minutes, and seconds) of national voice calls. Not limited to 24hrs
                     */
                    duration: string;
                    /**
                     * Number of national voice calls
                     */
                    number: number;
                    [k: string]: unknown;
                };
                /**
                 * Roaming voice calls, Required if roaming is supported
                 */
                roaming: {
                    /**
                     * Cost amount of roaming voice calls
                     */
                    amount: string;
                    /**
                     * Total duration (hours, minutes, and seconds) of roaming voice calls. Not limited to 24hrs
                     */
                    duration: string;
                    /**
                     * Number of roaming voice calls
                     */
                    number: number;
                    [k: string]: unknown;
                };
                [k: string]: unknown;
            };
            [k: string]: unknown;
        };
        [k: string]: unknown;
    };
    links: {
        /**
         * Fully qualified link that generated the current response document
         */
        self: string;
        [k: string]: unknown;
    };
    meta: {
        [k: string]: unknown;
    };
    [k: string]: unknown;
}
/* These are the schema definitions stipulated by the Data Standards Body for the telco api. */

export interface TelcoTransactionListResponse {
    data: {
        /**
         * Array of transactions sorted by date and time in descending order
         */
        transactions: Array<{
            account?: {
                /**
                 * Optional array of adjustments arising for this transaction
                 */
                adjustments?:
                    | Array<{
                        /**
                         * The amount of the adjustment
                         */
                        amount: string;
                        /**
                         * A free text description of the adjustment
                         */
                        description: string;
                        [k: string]: unknown;
                    }>
                    | null;
                /**
                 * The amount charged or credited for this transaction prior to any adjustments being applied.  A negative value indicates a credit
                 */
                amount: string;
                /**
                 * Optional description of the transaction that can be used for display purposes
                 */
                description?: string | null;
                /**
                 * Date and time when the usage period ends
                 */
                endDate: string;
                /**
                 * The number of the invoice in which this transaction is included if it has been issued
                 */
                invoiceNumber?: string | null;
                /**
                 * Array list of services identifiers to which this transaction applies if any. E.g. a mobile [MSISDN](https://www.etsi.org/deliver/etsi_gts/03/0303/05.00.00_60/gsmts_0303v050000p.pdf), [FNN](https://www.nbnco.com.au/content/dam/nbnco2/documents/sfaa-wba2-dictionary_FTTN-launch.pdf) or internet service e.g [NBN AVC Service ID](https://www.nbnco.com.au/content/dam/nbnco2/documents/sfaa-wba2-dictionary_FTTN-launch.pdf). In accordance with [CDR ID permanence](#id-permanence) requirements
                 */
                serviceIds?: string | null;
                /**
                 * Date and time when the usage period starts
                 */
                startDate: string;
                [k: string]: unknown;
            };
            /**
             * The ID of the account for which the transaction occurred. accountId must comply in accordance with [CDR ID permanence](#id-permanence)
             */
            accountId: string;
            /**
             * The date and time that the transaction occurred
             */
            executionDateTime: string;
            /**
             * The GST incurred in the transaction.  Should not be included for credits or payments.  If absent zero is assumed
             */
            gst?: string | null;
            onceOff?: {
                /**
                 * The amount of the charge or credit.  A positive value indicates a charge and a negative value indicates a credit
                 */
                amount: string;
                /**
                 * A free text description of the item
                 */
                description: string;
                /**
                 * The number of the invoice in which this transaction is included if it has been issued
                 */
                invoiceNumber?: string | null;
                /**
                 * The ID of the service identifier to which this transaction applies if any. E.g a [MSISDN](https://www.etsi.org/deliver/etsi_gts/03/0303/05.00.00_60/gsmts_0303v050000p.pdf), [FNN](https://www.nbnco.com.au/content/dam/nbnco2/documents/sfaa-wba2-dictionary_FTTN-launch.pdf) or internet service e.g [NBN AVC Service ID](https://www.nbnco.com.au/content/dam/nbnco2/documents/sfaa-wba2-dictionary_FTTN-launch.pdf). In accordance with [CDR ID permanence](#id-permanence) requirements
                 */
                serviceId?: string | null;
                [k: string]: unknown;
            };
            otherCharges?: {
                /**
                 * Optional array of adjustments arising for this transaction
                 */
                adjustments?:
                    | Array<{
                        /**
                         * The amount of the adjustment
                         */
                        amount: string;
                        /**
                         * A free text description of the adjustment
                         */
                        description: string;
                        [k: string]: unknown;
                    }>
                    | null;
                /**
                 * The amount of the charge
                 */
                amount: string;
                /**
                 * A free text description of the item
                 */
                description: string;
                /**
                 * Optional end date for the application of the charge
                 */
                endDate?: string | null;
                /**
                 * The number of the invoice in which this transaction is included if it has been issued
                 */
                invoiceNumber?: string | null;
                /**
                 * The service identifier to which this transaction applies if any. E.g a mobile [MSISDN](https://www.etsi.org/deliver/etsi_gts/03/0303/05.00.00_60/gsmts_0303v050000p.pdf), [FNN](https://www.nbnco.com.au/content/dam/nbnco2/documents/sfaa-wba2-dictionary_FTTN-launch.pdf) or internet service e.g [NBN AVC Service ID](https://www.nbnco.com.au/content/dam/nbnco2/documents/sfaa-wba2-dictionary_FTTN-launch.pdf). In accordance with [CDR ID permanence](#id-permanence) requirements
                 */
                serviceId?: string | null;
                /**
                 * Optional start date for the application of the charge
                 */
                startDate?: string | null;
                /**
                 * Type of charge. Assumed to be OTHER if absent
                 */
                type?: ("SERVICE" | "NETWORK" | "EQUIPMENT" | "METERING" | "OTHER") | null;
                [k: string]: unknown;
            };
            payment?: {
                /**
                 * The amount paid
                 */
                amount: string;
                /**
                 * The method of payment
                 */
                method: "DIRECT_DEBIT" | "CARD" | "TRANSFER" | "BPAY" | "CASH" | "CHEQUE" | "VOUCHER" | "OTHER";
                [k: string]: unknown;
            };
            /**
             * Indicator of the type of transaction object present in this record
             */
            transactionUType: "account" | "onceOff" | "otherCharges" | "payment";
            [k: string]: unknown;
        }>;
        [k: string]: unknown;
    };
    links: {
        /**
         * URI to the first page of this set. Mandatory if this response is not the first page
         */
        first?: string | null;
        /**
         * URI to the last page of this set. Mandatory if this response is not the last page
         */
        last?: string | null;
        /**
         * URI to the next page of this set. Mandatory if this response is not the last page
         */
        next?: string | null;
        /**
         * URI to the previous page of this set. Mandatory if this response is not the first page
         */
        prev?: string | null;
        /**
         * Fully qualified link that generated the current response document
         */
        self: string;
        [k: string]: unknown;
    };
    meta: {
        /**
         * The total number of pages in the full set. See [pagination](#pagination).
         */
        totalPages: number;
        /**
         * The total number of records in the full set. See [pagination](#pagination).
         */
        totalRecords: number;
        [k: string]: unknown;
    };
    [k: string]: unknown;
}
/* These are the schema definitions stipulated by the Data Standards Body for the telco api. */

export interface TelcoTransactionListResponseData {
    /**
     * Array of transactions sorted by date and time in descending order
     */
    transactions: Array<{
        account?: {
            /**
             * Optional array of adjustments arising for this transaction
             */
            adjustments?:
                | Array<{
                    /**
                     * The amount of the adjustment
                     */
                    amount: string;
                    /**
                     * A free text description of the adjustment
                     */
                    description: string;
                    [k: string]: unknown;
                }>
                | null;
            /**
             * The amount charged or credited for this transaction prior to any adjustments being applied.  A negative value indicates a credit
             */
            amount: string;
            /**
             * Optional description of the transaction that can be used for display purposes
             */
            description?: string | null;
            /**
             * Date and time when the usage period ends
             */
            endDate: string;
            /**
             * The number of the invoice in which this transaction is included if it has been issued
             */
            invoiceNumber?: string | null;
            /**
             * Array list of services identifiers to which this transaction applies if any. E.g. a mobile [MSISDN](https://www.etsi.org/deliver/etsi_gts/03/0303/05.00.00_60/gsmts_0303v050000p.pdf), [FNN](https://www.nbnco.com.au/content/dam/nbnco2/documents/sfaa-wba2-dictionary_FTTN-launch.pdf) or internet service e.g [NBN AVC Service ID](https://www.nbnco.com.au/content/dam/nbnco2/documents/sfaa-wba2-dictionary_FTTN-launch.pdf). In accordance with [CDR ID permanence](#id-permanence) requirements
             */
            serviceIds?: string | null;
            /**
             * Date and time when the usage period starts
             */
            startDate: string;
            [k: string]: unknown;
        };
        /**
         * The ID of the account for which the transaction occurred. accountId must comply in accordance with [CDR ID permanence](#id-permanence)
         */
        accountId: string;
        /**
         * The date and time that the transaction occurred
         */
        executionDateTime: string;
        /**
         * The GST incurred in the transaction.  Should not be included for credits or payments.  If absent zero is assumed
         */
        gst?: string | null;
        onceOff?: {
            /**
             * The amount of the charge or credit.  A positive value indicates a charge and a negative value indicates a credit
             */
            amount: string;
            /**
             * A free text description of the item
             */
            description: string;
            /**
             * The number of the invoice in which this transaction is included if it has been issued
             */
            invoiceNumber?: string | null;
            /**
             * The ID of the service identifier to which this transaction applies if any. E.g a [MSISDN](https://www.etsi.org/deliver/etsi_gts/03/0303/05.00.00_60/gsmts_0303v050000p.pdf), [FNN](https://www.nbnco.com.au/content/dam/nbnco2/documents/sfaa-wba2-dictionary_FTTN-launch.pdf) or internet service e.g [NBN AVC Service ID](https://www.nbnco.com.au/content/dam/nbnco2/documents/sfaa-wba2-dictionary_FTTN-launch.pdf). In accordance with [CDR ID permanence](#id-permanence) requirements
             */
            serviceId?: string | null;
            [k: string]: unknown;
        };
        otherCharges?: {
            /**
             * Optional array of adjustments arising for this transaction
             */
            adjustments?:
                | Array<{
                    /**
                     * The amount of the adjustment
                     */
                    amount: string;
                    /**
                     * A free text description of the adjustment
                     */
                    description: string;
                    [k: string]: unknown;
                }>
                | null;
            /**
             * The amount of the charge
             */
            amount: string;
            /**
             * A free text description of the item
             */
            description: string;
            /**
             * Optional end date for the application of the charge
             */
            endDate?: string | null;
            /**
             * The number of the invoice in which this transaction is included if it has been issued
             */
            invoiceNumber?: string | null;
            /**
             * The service identifier to which this transaction applies if any. E.g a mobile [MSISDN](https://www.etsi.org/deliver/etsi_gts/03/0303/05.00.00_60/gsmts_0303v050000p.pdf), [FNN](https://www.nbnco.com.au/content/dam/nbnco2/documents/sfaa-wba2-dictionary_FTTN-launch.pdf) or internet service e.g [NBN AVC Service ID](https://www.nbnco.com.au/content/dam/nbnco2/documents/sfaa-wba2-dictionary_FTTN-launch.pdf). In accordance with [CDR ID permanence](#id-permanence) requirements
             */
            serviceId?: string | null;
            /**
             * Optional start date for the application of the charge
             */
            startDate?: string | null;
            /**
             * Type of charge. Assumed to be OTHER if absent
             */
            type?: ("SERVICE" | "NETWORK" | "EQUIPMENT" | "METERING" | "OTHER") | null;
            [k: string]: unknown;
        };
        payment?: {
            /**
             * The amount paid
             */
            amount: string;
            /**
             * The method of payment
             */
            method: "DIRECT_DEBIT" | "CARD" | "TRANSFER" | "BPAY" | "CASH" | "CHEQUE" | "VOUCHER" | "OTHER";
            [k: string]: unknown;
        };
        /**
         * Indicator of the type of transaction object present in this record
         */
        transactionUType: "account" | "onceOff" | "otherCharges" | "payment";
        [k: string]: unknown;
    }>;
    [k: string]: unknown;
}
/* These are the schema definitions stipulated by the Data Standards Body for the telco api. */

/**
 * Object containing usage summary
 */
export interface TelcoUsage {
    /**
     * Summary of data usage
     */
    data?: {
        /**
         * Cost amount of data usage
         */
        amount: string;
        /**
         * Amount of data downloaded in megabytes (MB)
         */
        download: number;
        /**
         * Required if roaming is suipported
         */
        roaming?: {
            /**
             * Amount value of data roaming charges
             */
            amount?: string | null;
            /**
             * Amount of data used while roaming in megabytes (MB)
             */
            download?: number | null;
            [k: string]: unknown;
        };
        /**
         * Number of data sessions
         */
        sessions?: number | null;
        /**
         * Amount of data uploaded in megabytes (MB)
         */
        upload: number;
        [k: string]: unknown;
    };
    /**
     * Summary of messaging. Required if messaging services is included in the product plan
     */
    messaging?: {
        /**
         * Summary of MMS usage
         */
        mms: {
            /**
             * Cost amount of MMS messages
             */
            amount: string;
            /**
             * ber of international MMS messages sent
             */
            international?: number | null;
            /**
             * Number of national MMS messages sent
             */
            national: number;
            /**
             * Number of roaming SMS messages sent. Including premium SMS services
             */
            roaming?: number | null;
            [k: string]: unknown;
        };
        /**
         * Summary of SMS usage
         */
        sms: {
            /**
             * Cost amount of SMS messages. Including premium SMS services
             */
            amount: string;
            /**
             * Number of international SMS messages sent. Including premium SMS services
             */
            international?: number | null;
            /**
             * Number of national SMS messages sent. Including premium SMS services
             */
            national: number;
            /**
             * Number of roaming SMS messages sent. Including premium SMS services
             */
            roaming?: number | null;
            [k: string]: unknown;
        };
        [k: string]: unknown;
    };
    /**
     * Summary of voice calls. Required if voice calls are included in product plan
     */
    voice?: {
        /**
         * International voice calls. Requied if international calling is supported
         */
        international: {
            /**
             * Cost amount of international voice calls
             */
            amount: string;
            /**
             * Total duration (hours, minutes, and seconds) of international voice calls. Not limited to 24hrs
             */
            duration: string;
            /**
             * Number of international voice calls
             */
            number: number;
            [k: string]: unknown;
        };
        /**
         * National voice calls
         */
        national: {
            /**
             * Cost amount of national calls
             */
            amount: string;
            /**
             * Total duration (hours, minutes, and seconds) of national voice calls. Not limited to 24hrs
             */
            duration: string;
            /**
             * Number of national voice calls
             */
            number: number;
            [k: string]: unknown;
        };
        /**
         * Roaming voice calls, Required if roaming is supported
         */
        roaming: {
            /**
             * Cost amount of roaming voice calls
             */
            amount: string;
            /**
             * Total duration (hours, minutes, and seconds) of roaming voice calls. Not limited to 24hrs
             */
            duration: string;
            /**
             * Number of roaming voice calls
             */
            number: number;
            [k: string]: unknown;
        };
        [k: string]: unknown;
    };
    [k: string]: unknown;
}
/* These are the schema definitions stipulated by the Data Standards Body for the telco api. */

/**
 * Roaming Data Usage
 */
export interface TelcoUsageDatRoaming {
    /**
     * Amount value of data roaming charges
     */
    amount?: string | null;
    /**
     * Amount of data used while roaming in megabytes (MB)
     */
    download?: number | null;
    [k: string]: unknown;
}
/* These are the schema definitions stipulated by the Data Standards Body for the telco api. */

/**
 * Summary of data usage
 */
export interface TelcoUsageData {
    /**
     * Cost amount of data usage
     */
    amount: string;
    /**
     * Amount of data downloaded in megabytes (MB)
     */
    download: number;
    /**
     * Required if roaming is suipported
     */
    roaming?: {
        /**
         * Amount value of data roaming charges
         */
        amount?: string | null;
        /**
         * Amount of data used while roaming in megabytes (MB)
         */
        download?: number | null;
        [k: string]: unknown;
    };
    /**
     * Number of data sessions
     */
    sessions?: number | null;
    /**
     * Amount of data uploaded in megabytes (MB)
     */
    upload: number;
    [k: string]: unknown;
}
/* These are the schema definitions stipulated by the Data Standards Body for the telco api. */

export interface TelcoUsageListResponse {
    data: {
        /**
         * Array of usage on accounts
         */
        accounts: Array<{
            /**
             * Tokenised ID of the account. In accordance with [CDR ID permanence](#id-permanence) requirements
             */
            accountId: string;
            /**
             * List of services that are part of the account
             */
            services: Array<{
                service: {
                    /**
                     * Optional description of the service used for display purposes
                     */
                    displayName?: string | null;
                    /**
                     * Date when the usage period ends
                     */
                    endDate?: string | null;
                    /**
                     * Required if the service includes a phone number
                     */
                    phoneNumber?: string | null;
                    /**
                     * Tokenised ID of the service identifier. E.g. a mobile [MSISDN](https://www.etsi.org/deliver/etsi_gts/03/0303/05.00.00_60/gsmts_0303v050000p.pdf), [FNN](https://www.nbnco.com.au/content/dam/nbnco2/documents/sfaa-wba2-dictionary_FTTN-launch.pdf) or internet service e.g [NBN AVC Service ID](https://www.nbnco.com.au/content/dam/nbnco2/documents/sfaa-wba2-dictionary_FTTN-launch.pdf). To be created in accordance with [CDR ID permanence](#id-permanence) requirements
                     */
                    serviceId: string;
                    /**
                     * Date when the usage period started
                     */
                    startDate: string;
                    /**
                     * Object containing usage summary
                     */
                    usage?: {
                        /**
                         * Summary of data usage
                         */
                        data?: {
                            /**
                             * Cost amount of data usage
                             */
                            amount: string;
                            /**
                             * Amount of data downloaded in megabytes (MB)
                             */
                            download: number;
                            /**
                             * Required if roaming is suipported
                             */
                            roaming?: {
                                /**
                                 * Amount value of data roaming charges
                                 */
                                amount?: string | null;
                                /**
                                 * Amount of data used while roaming in megabytes (MB)
                                 */
                                download?: number | null;
                                [k: string]: unknown;
                            };
                            /**
                             * Number of data sessions
                             */
                            sessions?: number | null;
                            /**
                             * Amount of data uploaded in megabytes (MB)
                             */
                            upload: number;
                            [k: string]: unknown;
                        };
                        /**
                         * Summary of messaging. Required if messaging services is included in the product plan
                         */
                        messaging?: {
                            /**
                             * Summary of MMS usage
                             */
                            mms: {
                                /**
                                 * Cost amount of MMS messages
                                 */
                                amount: string;
                                /**
                                 * ber of international MMS messages sent
                                 */
                                international?: number | null;
                                /**
                                 * Number of national MMS messages sent
                                 */
                                national: number;
                                /**
                                 * Number of roaming SMS messages sent. Including premium SMS services
                                 */
                                roaming?: number | null;
                                [k: string]: unknown;
                            };
                            /**
                             * Summary of SMS usage
                             */
                            sms: {
                                /**
                                 * Cost amount of SMS messages. Including premium SMS services
                                 */
                                amount: string;
                                /**
                                 * Number of international SMS messages sent. Including premium SMS services
                                 */
                                international?: number | null;
                                /**
                                 * Number of national SMS messages sent. Including premium SMS services
                                 */
                                national: number;
                                /**
                                 * Number of roaming SMS messages sent. Including premium SMS services
                                 */
                                roaming?: number | null;
                                [k: string]: unknown;
                            };
                            [k: string]: unknown;
                        };
                        /**
                         * Summary of voice calls. Required if voice calls are included in product plan
                         */
                        voice?: {
                            /**
                             * International voice calls. Requied if international calling is supported
                             */
                            international: {
                                /**
                                 * Cost amount of international voice calls
                                 */
                                amount: string;
                                /**
                                 * Total duration (hours, minutes, and seconds) of international voice calls. Not limited to 24hrs
                                 */
                                duration: string;
                                /**
                                 * Number of international voice calls
                                 */
                                number: number;
                                [k: string]: unknown;
                            };
                            /**
                             * National voice calls
                             */
                            national: {
                                /**
                                 * Cost amount of national calls
                                 */
                                amount: string;
                                /**
                                 * Total duration (hours, minutes, and seconds) of national voice calls. Not limited to 24hrs
                                 */
                                duration: string;
                                /**
                                 * Number of national voice calls
                                 */
                                number: number;
                                [k: string]: unknown;
                            };
                            /**
                             * Roaming voice calls, Required if roaming is supported
                             */
                            roaming: {
                                /**
                                 * Cost amount of roaming voice calls
                                 */
                                amount: string;
                                /**
                                 * Total duration (hours, minutes, and seconds) of roaming voice calls. Not limited to 24hrs
                                 */
                                duration: string;
                                /**
                                 * Number of roaming voice calls
                                 */
                                number: number;
                                [k: string]: unknown;
                            };
                            [k: string]: unknown;
                        };
                        [k: string]: unknown;
                    };
                    [k: string]: unknown;
                };
                [k: string]: unknown;
            }>;
            [k: string]: unknown;
        }>;
        [k: string]: unknown;
    };
    links: {
        /**
         * Fully qualified link that generated the current response document
         */
        self: string;
        [k: string]: unknown;
    };
    meta: {
        [k: string]: unknown;
    };
    [k: string]: unknown;
}
/* These are the schema definitions stipulated by the Data Standards Body for the telco api. */

export interface TelcoUsageListResponseData {
    /**
     * Array of usage on accounts
     */
    accounts: Array<{
        /**
         * Tokenised ID of the account. In accordance with [CDR ID permanence](#id-permanence) requirements
         */
        accountId: string;
        /**
         * List of services that are part of the account
         */
        services: Array<{
            service: {
                /**
                 * Optional description of the service used for display purposes
                 */
                displayName?: string | null;
                /**
                 * Date when the usage period ends
                 */
                endDate?: string | null;
                /**
                 * Required if the service includes a phone number
                 */
                phoneNumber?: string | null;
                /**
                 * Tokenised ID of the service identifier. E.g. a mobile [MSISDN](https://www.etsi.org/deliver/etsi_gts/03/0303/05.00.00_60/gsmts_0303v050000p.pdf), [FNN](https://www.nbnco.com.au/content/dam/nbnco2/documents/sfaa-wba2-dictionary_FTTN-launch.pdf) or internet service e.g [NBN AVC Service ID](https://www.nbnco.com.au/content/dam/nbnco2/documents/sfaa-wba2-dictionary_FTTN-launch.pdf). To be created in accordance with [CDR ID permanence](#id-permanence) requirements
                 */
                serviceId: string;
                /**
                 * Date when the usage period started
                 */
                startDate: string;
                /**
                 * Object containing usage summary
                 */
                usage?: {
                    /**
                     * Summary of data usage
                     */
                    data?: {
                        /**
                         * Cost amount of data usage
                         */
                        amount: string;
                        /**
                         * Amount of data downloaded in megabytes (MB)
                         */
                        download: number;
                        /**
                         * Required if roaming is suipported
                         */
                        roaming?: {
                            /**
                             * Amount value of data roaming charges
                             */
                            amount?: string | null;
                            /**
                             * Amount of data used while roaming in megabytes (MB)
                             */
                            download?: number | null;
                            [k: string]: unknown;
                        };
                        /**
                         * Number of data sessions
                         */
                        sessions?: number | null;
                        /**
                         * Amount of data uploaded in megabytes (MB)
                         */
                        upload: number;
                        [k: string]: unknown;
                    };
                    /**
                     * Summary of messaging. Required if messaging services is included in the product plan
                     */
                    messaging?: {
                        /**
                         * Summary of MMS usage
                         */
                        mms: {
                            /**
                             * Cost amount of MMS messages
                             */
                            amount: string;
                            /**
                             * ber of international MMS messages sent
                             */
                            international?: number | null;
                            /**
                             * Number of national MMS messages sent
                             */
                            national: number;
                            /**
                             * Number of roaming SMS messages sent. Including premium SMS services
                             */
                            roaming?: number | null;
                            [k: string]: unknown;
                        };
                        /**
                         * Summary of SMS usage
                         */
                        sms: {
                            /**
                             * Cost amount of SMS messages. Including premium SMS services
                             */
                            amount: string;
                            /**
                             * Number of international SMS messages sent. Including premium SMS services
                             */
                            international?: number | null;
                            /**
                             * Number of national SMS messages sent. Including premium SMS services
                             */
                            national: number;
                            /**
                             * Number of roaming SMS messages sent. Including premium SMS services
                             */
                            roaming?: number | null;
                            [k: string]: unknown;
                        };
                        [k: string]: unknown;
                    };
                    /**
                     * Summary of voice calls. Required if voice calls are included in product plan
                     */
                    voice?: {
                        /**
                         * International voice calls. Requied if international calling is supported
                         */
                        international: {
                            /**
                             * Cost amount of international voice calls
                             */
                            amount: string;
                            /**
                             * Total duration (hours, minutes, and seconds) of international voice calls. Not limited to 24hrs
                             */
                            duration: string;
                            /**
                             * Number of international voice calls
                             */
                            number: number;
                            [k: string]: unknown;
                        };
                        /**
                         * National voice calls
                         */
                        national: {
                            /**
                             * Cost amount of national calls
                             */
                            amount: string;
                            /**
                             * Total duration (hours, minutes, and seconds) of national voice calls. Not limited to 24hrs
                             */
                            duration: string;
                            /**
                             * Number of national voice calls
                             */
                            number: number;
                            [k: string]: unknown;
                        };
                        /**
                         * Roaming voice calls, Required if roaming is supported
                         */
                        roaming: {
                            /**
                             * Cost amount of roaming voice calls
                             */
                            amount: string;
                            /**
                             * Total duration (hours, minutes, and seconds) of roaming voice calls. Not limited to 24hrs
                             */
                            duration: string;
                            /**
                             * Number of roaming voice calls
                             */
                            number: number;
                            [k: string]: unknown;
                        };
                        [k: string]: unknown;
                    };
                    [k: string]: unknown;
                };
                [k: string]: unknown;
            };
            [k: string]: unknown;
        }>;
        [k: string]: unknown;
    }>;
    [k: string]: unknown;
}
/* These are the schema definitions stipulated by the Data Standards Body for the telco api. */

/**
 * Summary of messaging. Required if messaging services is included in the product plan
 */
export interface TelcoUsageMessaging {
    /**
     * Summary of MMS usage
     */
    mms: {
        /**
         * Cost amount of MMS messages
         */
        amount: string;
        /**
         * ber of international MMS messages sent
         */
        international?: number | null;
        /**
         * Number of national MMS messages sent
         */
        national: number;
        /**
         * Number of roaming SMS messages sent. Including premium SMS services
         */
        roaming?: number | null;
        [k: string]: unknown;
    };
    /**
     * Summary of SMS usage
     */
    sms: {
        /**
         * Cost amount of SMS messages. Including premium SMS services
         */
        amount: string;
        /**
         * Number of international SMS messages sent. Including premium SMS services
         */
        international?: number | null;
        /**
         * Number of national SMS messages sent. Including premium SMS services
         */
        national: number;
        /**
         * Number of roaming SMS messages sent. Including premium SMS services
         */
        roaming?: number | null;
        [k: string]: unknown;
    };
    [k: string]: unknown;
}
/* These are the schema definitions stipulated by the Data Standards Body for the telco api. */

/**
 * Summary of MMS usage
 */
export interface TelcoUsageMessagingMms {
    /**
     * Cost amount of MMS messages
     */
    amount: string;
    /**
     * ber of international MMS messages sent
     */
    international?: number | null;
    /**
     * Number of national MMS messages sent
     */
    national: number;
    /**
     * Number of roaming SMS messages sent. Including premium SMS services
     */
    roaming?: number | null;
    [k: string]: unknown;
}
/* These are the schema definitions stipulated by the Data Standards Body for the telco api. */

/**
 * Summary of SMS usage
 */
export interface TelcoUsageMessagingSms {
    /**
     * Cost amount of SMS messages. Including premium SMS services
     */
    amount: string;
    /**
     * Number of international SMS messages sent. Including premium SMS services
     */
    international?: number | null;
    /**
     * Number of national SMS messages sent. Including premium SMS services
     */
    national: number;
    /**
     * Number of roaming SMS messages sent. Including premium SMS services
     */
    roaming?: number | null;
    [k: string]: unknown;
}
/* These are the schema definitions stipulated by the Data Standards Body for the telco api. */

export interface TelcoUsageResponse {
    data: {
        /**
         * Tokenised ID of the account. In accordance with [CDR ID permanence](#id-permanence) requirements
         */
        accountId: string;
        /**
         * List of services that are part of the account
         */
        services: Array<{
            service: {
                /**
                 * Optional description of the service used for display purposes
                 */
                displayName?: string | null;
                /**
                 * Date when the usage period ends
                 */
                endDate?: string | null;
                /**
                 * Required if the service includes a phone number
                 */
                phoneNumber?: string | null;
                /**
                 * Tokenised ID of the service identifier. E.g. a mobile [MSISDN](https://www.etsi.org/deliver/etsi_gts/03/0303/05.00.00_60/gsmts_0303v050000p.pdf), [FNN](https://www.nbnco.com.au/content/dam/nbnco2/documents/sfaa-wba2-dictionary_FTTN-launch.pdf) or internet service e.g [NBN AVC Service ID](https://www.nbnco.com.au/content/dam/nbnco2/documents/sfaa-wba2-dictionary_FTTN-launch.pdf). To be created in accordance with [CDR ID permanence](#id-permanence) requirements
                 */
                serviceId: string;
                /**
                 * Date when the usage period started
                 */
                startDate: string;
                /**
                 * Object containing usage summary
                 */
                usage?: {
                    /**
                     * Summary of data usage
                     */
                    data?: {
                        /**
                         * Cost amount of data usage
                         */
                        amount: string;
                        /**
                         * Amount of data downloaded in megabytes (MB)
                         */
                        download: number;
                        /**
                         * Required if roaming is suipported
                         */
                        roaming?: {
                            /**
                             * Amount value of data roaming charges
                             */
                            amount?: string | null;
                            /**
                             * Amount of data used while roaming in megabytes (MB)
                             */
                            download?: number | null;
                            [k: string]: unknown;
                        };
                        /**
                         * Number of data sessions
                         */
                        sessions?: number | null;
                        /**
                         * Amount of data uploaded in megabytes (MB)
                         */
                        upload: number;
                        [k: string]: unknown;
                    };
                    /**
                     * Summary of messaging. Required if messaging services is included in the product plan
                     */
                    messaging?: {
                        /**
                         * Summary of MMS usage
                         */
                        mms: {
                            /**
                             * Cost amount of MMS messages
                             */
                            amount: string;
                            /**
                             * ber of international MMS messages sent
                             */
                            international?: number | null;
                            /**
                             * Number of national MMS messages sent
                             */
                            national: number;
                            /**
                             * Number of roaming SMS messages sent. Including premium SMS services
                             */
                            roaming?: number | null;
                            [k: string]: unknown;
                        };
                        /**
                         * Summary of SMS usage
                         */
                        sms: {
                            /**
                             * Cost amount of SMS messages. Including premium SMS services
                             */
                            amount: string;
                            /**
                             * Number of international SMS messages sent. Including premium SMS services
                             */
                            international?: number | null;
                            /**
                             * Number of national SMS messages sent. Including premium SMS services
                             */
                            national: number;
                            /**
                             * Number of roaming SMS messages sent. Including premium SMS services
                             */
                            roaming?: number | null;
                            [k: string]: unknown;
                        };
                        [k: string]: unknown;
                    };
                    /**
                     * Summary of voice calls. Required if voice calls are included in product plan
                     */
                    voice?: {
                        /**
                         * International voice calls. Requied if international calling is supported
                         */
                        international: {
                            /**
                             * Cost amount of international voice calls
                             */
                            amount: string;
                            /**
                             * Total duration (hours, minutes, and seconds) of international voice calls. Not limited to 24hrs
                             */
                            duration: string;
                            /**
                             * Number of international voice calls
                             */
                            number: number;
                            [k: string]: unknown;
                        };
                        /**
                         * National voice calls
                         */
                        national: {
                            /**
                             * Cost amount of national calls
                             */
                            amount: string;
                            /**
                             * Total duration (hours, minutes, and seconds) of national voice calls. Not limited to 24hrs
                             */
                            duration: string;
                            /**
                             * Number of national voice calls
                             */
                            number: number;
                            [k: string]: unknown;
                        };
                        /**
                         * Roaming voice calls, Required if roaming is supported
                         */
                        roaming: {
                            /**
                             * Cost amount of roaming voice calls
                             */
                            amount: string;
                            /**
                             * Total duration (hours, minutes, and seconds) of roaming voice calls. Not limited to 24hrs
                             */
                            duration: string;
                            /**
                             * Number of roaming voice calls
                             */
                            number: number;
                            [k: string]: unknown;
                        };
                        [k: string]: unknown;
                    };
                    [k: string]: unknown;
                };
                [k: string]: unknown;
            };
            [k: string]: unknown;
        }>;
        [k: string]: unknown;
    };
    links: {
        /**
         * Fully qualified link that generated the current response document
         */
        self: string;
        [k: string]: unknown;
    };
    meta: {
        [k: string]: unknown;
    };
    [k: string]: unknown;
}
/* These are the schema definitions stipulated by the Data Standards Body for the telco api. */

/**
 * Summary of voice calls. Required if voice calls are included in product plan
 */
export interface TelcoUsageVoice {
    /**
     * International voice calls. Requied if international calling is supported
     */
    international: {
        /**
         * Cost amount of international voice calls
         */
        amount: string;
        /**
         * Total duration (hours, minutes, and seconds) of international voice calls. Not limited to 24hrs
         */
        duration: string;
        /**
         * Number of international voice calls
         */
        number: number;
        [k: string]: unknown;
    };
    /**
     * National voice calls
     */
    national: {
        /**
         * Cost amount of national calls
         */
        amount: string;
        /**
         * Total duration (hours, minutes, and seconds) of national voice calls. Not limited to 24hrs
         */
        duration: string;
        /**
         * Number of national voice calls
         */
        number: number;
        [k: string]: unknown;
    };
    /**
     * Roaming voice calls, Required if roaming is supported
     */
    roaming: {
        /**
         * Cost amount of roaming voice calls
         */
        amount: string;
        /**
         * Total duration (hours, minutes, and seconds) of roaming voice calls. Not limited to 24hrs
         */
        duration: string;
        /**
         * Number of roaming voice calls
         */
        number: number;
        [k: string]: unknown;
    };
    [k: string]: unknown;
}
/* These are the schema definitions stipulated by the Data Standards Body for the telco api. */

/**
 * International voice calls. Requied if international calling is supported
 */
export interface TelcoUsageVoiceInternational {
    /**
     * Cost amount of international voice calls
     */
    amount: string;
    /**
     * Total duration (hours, minutes, and seconds) of international voice calls. Not limited to 24hrs
     */
    duration: string;
    /**
     * Number of international voice calls
     */
    number: number;
    [k: string]: unknown;
}
/* These are the schema definitions stipulated by the Data Standards Body for the telco api. */

/**
 * National voice calls
 */
export interface TelcoUsageVoiceNational {
    /**
     * Cost amount of national calls
     */
    amount: string;
    /**
     * Total duration (hours, minutes, and seconds) of national voice calls. Not limited to 24hrs
     */
    duration: string;
    /**
     * Number of national voice calls
     */
    number: number;
    [k: string]: unknown;
}
/* These are the schema definitions stipulated by the Data Standards Body for the telco api. */

/**
 * Roaming voice calls, Required if roaming is supported
 */
export interface TelcoUsageVoiceRoaming {
    /**
     * Cost amount of roaming voice calls
     */
    amount: string;
    /**
     * Total duration (hours, minutes, and seconds) of roaming voice calls. Not limited to 24hrs
     */
    duration: string;
    /**
     * Number of roaming voice calls
     */
    number: number;
    [k: string]: unknown;
}
