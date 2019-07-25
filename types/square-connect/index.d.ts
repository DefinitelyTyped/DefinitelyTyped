// Type definitions for square-connect 2.20190508
// Project: https://docs.connect.squareup.com/
// Definitions by: Dmitri Dimitrioglo <https://github.com/ddimitrioglo>
//                 Richard Moot <https://github.com/mootrichard>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.4

/**
 * Represents an additional recipient (other than the merchant) receiving a portion of this tender.
 */
export class AdditionalRecipient {
    /**
     * The location ID for a recipient (other than the merchant) receiving a portion of this tender.
     */
    location_id: string;
    /**
     * The description of the additional recipient.
     */
    description: string;
    /**
     * The amount of money distributed to the recipient.
     */
    amount_money: Money;
    /**
     * The unique ID for this [AdditionalRecipientReceivable](#type-additionalrecipientreceivable), assigned by the server.
     */
    receivable_id?: string;
}

/**
 * Represents a monetary distribution of part of a [Transaction](#type-transaction)'s amount for Transactions which
 * included additional recipients. The location of this receivable is that same as the one specified in the
 * [AdditionalRecipient](#type-additionalrecipient).
 */
export class AdditionalRecipientReceivable {
    /**
     * The additional recipient receivable's unique ID, issued by Square payments servers.
     */
    id: string;
    /**
     * The ID of the transaction that the additional recipient receivable was applied to.
     */
    transaction_id: string;
    /**
     * The ID of the location that created the receivable. This is the location ID on the associated transaction.
     */
    transaction_location_id: string;
    /**
     * The amount of the receivable. This will always be non-negative.
     */
    amount_money: Money;
    /**
     * The time when the additional recipient receivable was created, in RFC 3339 format.
     */
    created_at?: string;
    /**
     * Any refunds of the receivable that have been applied.
     */
    refunds?: Array<AdditionalRecipientReceivableRefund>;
}

/**
 * A refund of an [AdditionalRecipientReceivable](#type-additionalrecipientreceivable). This includes the ID of the
 * additional recipient receivable associated to this object, as well as a reference to the [Refund](#type-refund) that
 * created this receivable refund.
 */
export class AdditionalRecipientReceivableRefund {
    /**
     * The receivable refund's unique ID, issued by Square payments servers.
     */
    id: string;
    /**
     * The ID of the receivable that the refund was applied to.
     */
    receivable_id: string;
    /**
     * The ID of the refund that is associated to this receivable refund.
     */
    refund_id: string;
    /**
     * The ID of the location that created the receivable. This is the location ID on the associated transaction.
     */
    transaction_location_id: string;
    /**
     * The amount of the refund. This will always be non-negative.
     */
    amount_money: Money;
    /**
     * The time when the refund was created, in RFC 3339 format.
     */
    created_at?: string;
}

/**
 * Represents a physical address.
 */
export class Address {
    /**
     * The first line of the address.  Fields that start with `address_line` provide the address's most specific
     * details, like street number, street name, and building name. They do *not* provide less specific details like
     * city, state/province, or country (these details are provided in other fields).
     */
    address_line_1?: string;
    /**
     * The second line of the address, if any.
     */
    address_line_2?: string;
    /**
     * The third line of the address, if any.
     */
    address_line_3?: string;
    /**
     * The city or town of the address.
     */
    locality?: string;
    /**
     * A civil region within the address's `locality`, if any.
     */
    sublocality?: string;
    /**
     * A civil region within the address's `sublocality`, if any.
     */
    sublocality_2?: string;
    /**
     * A civil region within the address's `sublocality_2`, if any.
     */
    sublocality_3?: string;
    /**
     * A civil entity within the address's country. In the US, this is the state.
     */
    administrative_district_level_1?: string;
    /**
     * A civil entity within the address's `administrative_district_level_1`. In the US, this is the county.
     */
    administrative_district_level_2?: string;
    /**
     * A civil entity within the address's `administrative_district_level_2`, if any.
     */
    administrative_district_level_3?: string;
    /**
     * The address's postal code.
     */
    postal_code?: string;
    /**
     * The address's country, in ISO 3166-1-alpha-2 format. See [Country](#type-country) for possible values
     */
    country?: Address.CountryEnum;
    /**
     * Optional first name when it's representing recipient.
     */
    first_name?: string;
    /**
     * Optional last name when it's representing recipient.
     */
    last_name?: string;
    /**
     * Optional organization name when it's representing recipient.
     */
    organization?: string;
}

export namespace Address {
    export enum CountryEnum {
        ZZ = 'ZZ',
        AD = 'AD',
        AE = 'AE',
        AF = 'AF',
        AG = 'AG',
        AI = 'AI',
        AL = 'AL',
        AM = 'AM',
        AO = 'AO',
        AQ = 'AQ',
        AR = 'AR',
        AS = 'AS',
        AT = 'AT',
        AU = 'AU',
        AW = 'AW',
        AX = 'AX',
        AZ = 'AZ',
        BA = 'BA',
        BB = 'BB',
        BD = 'BD',
        BE = 'BE',
        BF = 'BF',
        BG = 'BG',
        BH = 'BH',
        BI = 'BI',
        BJ = 'BJ',
        BL = 'BL',
        BM = 'BM',
        BN = 'BN',
        BO = 'BO',
        BQ = 'BQ',
        BR = 'BR',
        BS = 'BS',
        BT = 'BT',
        BV = 'BV',
        BW = 'BW',
        BY = 'BY',
        BZ = 'BZ',
        CA = 'CA',
        CC = 'CC',
        CD = 'CD',
        CF = 'CF',
        CG = 'CG',
        CH = 'CH',
        CI = 'CI',
        CK = 'CK',
        CL = 'CL',
        CM = 'CM',
        CN = 'CN',
        CO = 'CO',
        CR = 'CR',
        CU = 'CU',
        CV = 'CV',
        CW = 'CW',
        CX = 'CX',
        CY = 'CY',
        CZ = 'CZ',
        DE = 'DE',
        DJ = 'DJ',
        DK = 'DK',
        DM = 'DM',
        DO = 'DO',
        DZ = 'DZ',
        EC = 'EC',
        EE = 'EE',
        EG = 'EG',
        EH = 'EH',
        ER = 'ER',
        ES = 'ES',
        ET = 'ET',
        FI = 'FI',
        FJ = 'FJ',
        FK = 'FK',
        FM = 'FM',
        FO = 'FO',
        FR = 'FR',
        GA = 'GA',
        GB = 'GB',
        GD = 'GD',
        GE = 'GE',
        GF = 'GF',
        GG = 'GG',
        GH = 'GH',
        GI = 'GI',
        GL = 'GL',
        GM = 'GM',
        GN = 'GN',
        GP = 'GP',
        GQ = 'GQ',
        GR = 'GR',
        GS = 'GS',
        GT = 'GT',
        GU = 'GU',
        GW = 'GW',
        GY = 'GY',
        HK = 'HK',
        HM = 'HM',
        HN = 'HN',
        HR = 'HR',
        HT = 'HT',
        HU = 'HU',
        ID = 'ID',
        IE = 'IE',
        IL = 'IL',
        IM = 'IM',
        IN = 'IN',
        IO = 'IO',
        IQ = 'IQ',
        IR = 'IR',
        IS = 'IS',
        IT = 'IT',
        JE = 'JE',
        JM = 'JM',
        JO = 'JO',
        JP = 'JP',
        KE = 'KE',
        KG = 'KG',
        KH = 'KH',
        KI = 'KI',
        KM = 'KM',
        KN = 'KN',
        KP = 'KP',
        KR = 'KR',
        KW = 'KW',
        KY = 'KY',
        KZ = 'KZ',
        LA = 'LA',
        LB = 'LB',
        LC = 'LC',
        LI = 'LI',
        LK = 'LK',
        LR = 'LR',
        LS = 'LS',
        LT = 'LT',
        LU = 'LU',
        LV = 'LV',
        LY = 'LY',
        MA = 'MA',
        MC = 'MC',
        MD = 'MD',
        ME = 'ME',
        MF = 'MF',
        MG = 'MG',
        MH = 'MH',
        MK = 'MK',
        ML = 'ML',
        MM = 'MM',
        MN = 'MN',
        MO = 'MO',
        MP = 'MP',
        MQ = 'MQ',
        MR = 'MR',
        MS = 'MS',
        MT = 'MT',
        MU = 'MU',
        MV = 'MV',
        MW = 'MW',
        MX = 'MX',
        MY = 'MY',
        MZ = 'MZ',
        NA = 'NA',
        NC = 'NC',
        NE = 'NE',
        NF = 'NF',
        NG = 'NG',
        NI = 'NI',
        NL = 'NL',
        NO = 'NO',
        NP = 'NP',
        NR = 'NR',
        NU = 'NU',
        NZ = 'NZ',
        OM = 'OM',
        PA = 'PA',
        PE = 'PE',
        PF = 'PF',
        PG = 'PG',
        PH = 'PH',
        PK = 'PK',
        PL = 'PL',
        PM = 'PM',
        PN = 'PN',
        PR = 'PR',
        PS = 'PS',
        PT = 'PT',
        PW = 'PW',
        PY = 'PY',
        QA = 'QA',
        RE = 'RE',
        RO = 'RO',
        RS = 'RS',
        RU = 'RU',
        RW = 'RW',
        SA = 'SA',
        SB = 'SB',
        SC = 'SC',
        SD = 'SD',
        SE = 'SE',
        SG = 'SG',
        SH = 'SH',
        SI = 'SI',
        SJ = 'SJ',
        SK = 'SK',
        SL = 'SL',
        SM = 'SM',
        SN = 'SN',
        SO = 'SO',
        SR = 'SR',
        SS = 'SS',
        ST = 'ST',
        SV = 'SV',
        SX = 'SX',
        SY = 'SY',
        SZ = 'SZ',
        TC = 'TC',
        TD = 'TD',
        TF = 'TF',
        TG = 'TG',
        TH = 'TH',
        TJ = 'TJ',
        TK = 'TK',
        TL = 'TL',
        TM = 'TM',
        TN = 'TN',
        TO = 'TO',
        TR = 'TR',
        TT = 'TT',
        TV = 'TV',
        TW = 'TW',
        TZ = 'TZ',
        UA = 'UA',
        UG = 'UG',
        UM = 'UM',
        US = 'US',
        UY = 'UY',
        UZ = 'UZ',
        VA = 'VA',
        VC = 'VC',
        VE = 'VE',
        VG = 'VG',
        VI = 'VI',
        VN = 'VN',
        VU = 'VU',
        WF = 'WF',
        WS = 'WS',
        YE = 'YE',
        YT = 'YT',
        ZA = 'ZA',
        ZM = 'ZM',
        ZW = 'ZW',
    }
}

export class BatchChangeInventoryRequest {
    /**
     * A client-supplied, universally unique identifier (UUID) for the request.
     * See [Idempotency](/basics/api101/idempotency) in the [API Development 101](/basics/api101/overview) section for details.
     */
    idempotency_key?: string;
    /**
     * The set of physical counts and inventory adjustments to be made.
     * Changes are applied based on the client-supplied timestamp and may be sent out of order. Max size is 100 changes.
     */
    changes?: Array<InventoryChange>;
    /**
     * Indicates whether the current physical count should be ignored if the quantity is unchanged since the last physical count.
     * Default: `true`.
     */
    ignore_unchanged_counts?: boolean;
}

export class BatchChangeInventoryResponse {
    /**
     * Any errors that occurred during the request.
     */
    errors?: Array<Error>;
    /**
     * The current counts for all objects referenced in the request.
     */
    counts?: Array<InventoryCount>;
}

export class BatchDeleteCatalogObjectsRequest {
    /**
     * The IDs of the [CatalogObject](#type-catalogobject)s to be deleted. \When an object is deleted, other objects in
     * the graph that depend on that object will be deleted as well (for example, deleting a
     * [CatalogItem](#type-catalogitem) will delete its [CatalogItemVariation](#type-catalogitemvariation)s).
     */
    object_ids?: Array<string>;
}

export class BatchDeleteCatalogObjectsResponse {
    /**
     * The set of [Error](#type-error)s encountered.
     */
    errors?: Array<Error>;
    /**
     * The IDs of all [CatalogObject](#type-catalogobject)s deleted by this request.
     */
    deleted_object_ids?: Array<string>;
    /**
     * The database [timestamp](#workingwithdates) of this deletion in RFC 3339 format, e.g., "2016-09-04T23:59:33.123Z".
     */
    deleted_at?: string;
}

export class BatchRetrieveCatalogObjectsRequest {
    /**
     * The IDs of the [CatalogObject](#type-catalogobject)s to be retrieved.
     */
    object_ids: Array<string>;
    /**
     * If `true`, the response will include additional objects that are related to the requested objects, as follows:
     * If the `objects` field of the response contains a [CatalogItem](#type-catalogitem), its associated
     * [CatalogCategory](#type-catalogcategory), [CatalogTax](#type-catalogtax)es, and
     * [CatalogModifierList](#type-catalogmodifierlist)s will be returned in the `related_objects` field of the
     * response. If the `objects` field of the response contains a [CatalogItemVariation](#type-catalogitemvariation),
     * its parent [CatalogItem](#type-catalogitem) will be returned in the `related_objects` field of the response.
     */
    include_related_objects?: boolean;
}

export class BatchRetrieveCatalogObjectsResponse {
    /**
     * The set of [Error](#type-error)s encountered.
     */
    errors?: Array<Error>;
    /**
     * A list of [CatalogObject](#type-catalogobject)s returned.
     */
    objects?: Array<CatalogObject>;
    /**
     * A list of [CatalogObject](#type-catalogobject)s referenced by the object in the `objects` field.
     */
    related_objects?: Array<CatalogObject>;
}

export class BatchRetrieveInventoryChangesRequest {
    /**
     * Filters results by [CatalogObject](#type-catalogobject) ID. Only applied when set. Default: unset.
     */
    catalog_object_ids?: Array<string>;
    /**
     * Filters results by [Location](#type-location) ID. Only applied when set. Default: unset.
     */
    location_ids?: Array<string>;
    /**
     * Filters results by [InventoryChangeType](#type-inventorychangetype). Default: [`PHYSICAL_COUNT`, `ADJUSTMENT`].
     * `TRANSFER` is not supported as a filter.
     */
    types?: Array<BatchRetrieveInventoryChangesRequest.TypesEnum>;
    /**
     * Filters `ADJUSTMENT` query results by [InventoryState](#type-inventorystate). Only applied when set. Default:
     * unset.
     */
    states?: Array<BatchRetrieveInventoryChangesRequest.StatesEnum>;
    /**
     * Provided as an RFC 3339 timestamp. Returns results whose `created_at` or `calculated_at` value is after the given
     * time. Default: UNIX epoch (`1970-01-01T00:00:00Z`).
     */
    updated_after?: string;
    /**
     * Provided as an RFC 3339 timestamp. Returns results whose `created_at` or `calculated_at` value is strictly before
     * the given time. Default: UNIX epoch (`1970-01-01T00:00:00Z`).
     */
    updated_before?: string;
    /**
     * A pagination cursor returned by a previous call to this endpoint. Provide this to retrieve the next set of
     * results for the original query. See [Pagination](/basics/api101/pagination) for more information.
     */
    cursor?: string;
}

export namespace BatchRetrieveInventoryChangesRequest {
    export enum TypesEnum {
        PHYSICAL_COUNT = 'PHYSICAL_COUNT',
        ADJUSTMENT = 'ADJUSTMENT',
        TRANSFER = 'TRANSFER',
    }
    export enum StatesEnum {
        CUSTOM = 'CUSTOM',
        IN_STOCK = 'IN_STOCK',
        SOLD = 'SOLD',
        RETURNED_BY_CUSTOMER = 'RETURNED_BY_CUSTOMER',
        RESERVED_FOR_SALE = 'RESERVED_FOR_SALE',
        SOLD_ONLINE = 'SOLD_ONLINE',
        ORDERED_FROM_VENDOR = 'ORDERED_FROM_VENDOR',
        RECEIVED_FROM_VENDOR = 'RECEIVED_FROM_VENDOR',
        IN_TRANSIT_TO = 'IN_TRANSIT_TO',
        NONE = 'NONE',
        WASTE = 'WASTE',
        UNLINKED_RETURN = 'UNLINKED_RETURN',
    }
}

export class BatchRetrieveInventoryChangesResponse {
    /**
     * Any errors that occurred during the request.
     */
    errors?: Array<Error>;
    /**
     * The current calculated inventory changes for the requested objects and locations.
     */
    changes?: Array<InventoryChange>;
    /**
     * The pagination cursor to be used in a subsequent request. If unset, this is the final response.
     * See [Pagination](/basics/api101/pagination) for more information.
     */
    cursor?: string;
}

export class BatchRetrieveInventoryCountsRequest {
    /**
     * Filters results by [CatalogObject](#type-catalogobject) ID. Only applied when set. Default: unset.
     */
    catalog_object_ids?: Array<string>;
    /**
     * Filters results by [Location](#type-location) ID. Only applied when set. Default: unset.
     */
    location_ids?: Array<string>;
    /**
     * Provided as an RFC 3339 timestamp. Returns results whose `calculated_at` value is after the given time. Default:
     * UNIX epoch (`1970-01-01T00:00:00Z`).
     */
    updated_after?: string;
    /**
     * A pagination cursor returned by a previous call to this endpoint. Provide this to retrieve the next set of
     * results for the original query. See [Pagination](/basics/api101/pagination) for more information.
     */
    cursor?: string;
}

export class BatchRetrieveInventoryCountsResponse {
    /**
     * Any errors that occurred during the request.
     */
    errors?: Array<Error>;
    /**
     * The current calculated inventory counts for the requested objects and locations.
     */
    counts?: Array<InventoryCount>;
    /**
     * The pagination cursor to be used in a subsequent request. If unset, this is the final response.
     * See [Pagination](/basics/api101/pagination) for more information.
     */
    cursor?: string;
}

export class BatchRetrieveOrdersRequest {
    /**
     * The IDs of the orders to retrieve. A maximum of 100 orders can be retrieved per request.
     */
    order_ids: Array<string>;
}

/**
 * Defines the fields that are included in the response body of a request to the BatchRetrieveOrders endpoint.
 */
export class BatchRetrieveOrdersResponse {
    /**
     * The requested orders. This will omit any requested orders that do not exist or are not charged.
     */
    orders?: Array<Order>;
    /**
     * Any errors that occurred during the request.
     */
    errors?: Array<Error>;
    /**
     * List of transaction ids within the requested set of ids that encountered transformation issues when being
     * converted to an Order.
     */
    unconvertible_transaction_ids?: Array<string>;
}

export class BatchUpsertCatalogObjectsRequest {
    /**
     * A value you specify that uniquely identifies this request among all your requests. A common way to create a valid
     * idempotency key is to use a Universally unique identifier (UUID).  If you're unsure whether a particular request
     * was successful, you can reattempt it with the same idempotency key without worrying about creating duplicate
     * objects. See [Idempotency](/basics/api101/idempotency) for more information.
     */
    idempotency_key: string;
    /**
     * A batch of [CatalogObject](#type-catalogobject)s to be inserted/updated atomically. The objects within a batch
     * will be inserted in an all-or-nothing fashion, i.e., if an error occurs attempting to insert or update an object
     * within a batch, the entire batch will be rejected. However, an error in one batch will not affect other batches
     * within the same request.  For each object, its `updated_at` field is ignored and replaced with a current
     * [timestamp](#workingwithdates), and its `is_deleted` field must not be set to `true`.  To modify an existing
     * object, supply its ID. To create a new object, use an ID starting with `#`. These IDs may be used to create
     * relationships between an object and attributes of other objects that reference it. For example, you can create a
     * [CatalogItem](#type-catalogitem) with ID `#ABC` and a [CatalogItemVariation](#type-catalogitemvariation) with its
     * `item_id` attribute set to `#ABC` in order to associate the [CatalogItemVariation](#type-catalogitemvariation)
     * with its parent [CatalogItem](#type-catalogitem).  Any `#`-prefixed IDs are valid only within a single atomic
     * batch, and will be replaced by server-generated IDs.  Each batch may contain up to 1,000 objects. The total
     * number of objects across all batches for a single request may not exceed 10,000. If either of these limits is
     * violated, an error will be returned and no objects will be inserted or updated.
     */
    batches?: Array<CatalogObjectBatch>;
}

export class BatchUpsertCatalogObjectsResponse {
    /**
     * The set of [Error](#type-error)s encountered.
     */
    errors?: Array<Error>;
    /**
     * The created [CatalogObject](#type-catalogobject)s
     */
    objects?: Array<CatalogObject>;
    /**
     * The database [timestamp](#workingwithdates) of this update in RFC 3339 format, e.g., "2016-09-04T23:59:33.123Z".
     */
    updated_at?: string;
    /**
     * The mapping between client and server IDs for this Upsert.
     */
    id_mappings?: Array<CatalogIdMapping>;
}

/**
 * A defined break template that sets an expectation for possible `Break` instances on a `Shift`.
 */
export class BreakType {
    /**
     * UUID for this object.
     */
    id?: string;
    /**
     * The ID of the business location this type of break applies to.
     */
    location_id: string;
    /**
     * A human-readable name for this type of break. Will be displayed to employees in Square products.
     */
    break_name: string;
    /**
     * Format: RFC-3339 P[n]Y[n]M[n]DT[n]H[n]M[n]S. The expected length of this break. Precision below minutes is truncated.
     */
    expected_duration: string;
    /**
     * Whether this break counts towards time worked for compensation purposes.
     */
    is_paid: boolean;
    /**
     * Used for resolving concurrency issues; request will fail if version provided does not match server version at
     * time of request. If a value is not provided, Square's servers execute a \"blind\" write; potentially  overwriting
     * another writer's data.
     */
    version?: number;
    /**
     * A read-only timestamp in RFC 3339 format.
     */
    created_at?: string;
    /**
     * A read-only timestamp in RFC 3339 format.
     */
    updated_at?: string;
}

/**
 *  Represents the hours of operation for a business location.
 */
export class BusinessHours {
    /**
     * The list of time periods during which the business is open. There may be at most 10 periods per day.
     */
    periods?: Array<BusinessHoursPeriod>;
}

/**
 *  Represents a period of time during which a business location is open.
 */
export class BusinessHoursPeriod {
    /**
     * The day of week for this time period. See [DayOfWeek](#type-dayofweek) for possible values
     */
    day_of_week?: BusinessHoursPeriod.DayOfWeekEnum;
    /**
     * The start time of a business hours period, specified in local time using partial-time RFC3339 format.
     */
    start_local_time?: string;
    /**
     * The end time of a business hours period, specified in local time using partial-time RFC3339 format.
     */
    end_local_time?: string;
}

export namespace BusinessHoursPeriod {
    export enum DayOfWeekEnum {
        SUN = 'SUN',
        MON = 'MON',
        TUE = 'TUE',
        WED = 'WED',
        THU = 'THU',
        FRI = 'FRI',
        SAT = 'SAT',
    }
}

export class CaptureTransactionRequest {}

/**
 * Defines the fields that are included in the response body of a request to the
 * [CaptureTransaction](#endpoint-capturetransaction) endpoint.
 */
export class CaptureTransactionResponse {
    /**
     * Any errors that occurred during the request.
     */
    errors?: Array<Error>;
}

/**
 * Represents the payment details of a card to be used for payments.
 * These details are determined by the `card_nonce` generated by `SqPaymentForm`.
 */
export class Card {
    /**
     * Unique ID for this card. Generated by Square.
     */
    id?: string;
    /**
     * The card's brand (such as `VISA`). See [CardBrand](#type-cardbrand) for possible values.
     */
    card_brand?: Card.CardBrandEnum;
    /**
     * The last 4 digits of the card number.
     */
    last_4?: string;
    /**
     * The expiration month of the associated card as an integer between 1 and 12.
     */
    exp_month?: number;
    /**
     * The four-digit year of the card's expiration date.
     */
    exp_year?: number;
    /**
     * The name of the cardholder.
     */
    cardholder_name?: string;
    /**
     * The billing address for this card.
     */
    billing_address?: Address;
    /**
     * __Not currently set.__ Intended as a Square-assigned identifier, based on the card number, to identify the card
     * across multiple locations within a single application.
     */
    fingerprint?: string;
}

export namespace Card {
    export enum CardBrandEnum {
        OTHER_BRAND = 'OTHER_BRAND',
        VISA = 'VISA',
        MASTERCARD = 'MASTERCARD',
        AMERICAN_EXPRESS = 'AMERICAN_EXPRESS',
        DISCOVER = 'DISCOVER',
        DISCOVER_DINERS = 'DISCOVER_DINERS',
        JCB = 'JCB',
        CHINA_UNIONPAY = 'CHINA_UNIONPAY',
        SQUARE_GIFT_CARD = 'SQUARE_GIFT_CARD',
    }
}

/**
 * Indicates a card's brand, such as `VISA` or `MASTERCARD`.
 */
export class CardBrand {}

/**
 * A category to which an [CatalogItem](#type-catalogitem) belongs in the Catalog object model.
 */
export class CatalogCategory {
    /**
     * The category's name. Searchable. This field has max length of 255 Unicode code points.
     */
    name?: string;
}

/**
 * A discount in the Catalog object model.
 */
export class CatalogDiscount {
    /**
     * The discount's name. Searchable. This field has max length of 255 Unicode code points.
     */
    name?: string;
    /**
     * Indicates whether the discount is a fixed amount or percentage, or entered at the time of sale.
     * See [CatalogDiscountType](#type-catalogdiscounttype) for possible values.
     */
    discount_type?: CatalogDiscount.DiscountTypeEnum;
    /**
     * The percentage of the discount as a string representation of a decimal number, using a `.` as the decimal
     * separator and without a `%` sign. A value of `7.5` corresponds to `7.5%`. Specify a percentage of `0` if
     * `discount_type` is `VARIABLE_PERCENTAGE`.  Do not include this field for amount-based or variable discounts.
     */
    percentage?: string;
    /**
     * The amount of the discount. Specify an amount of `0` if `discount_type` is `VARIABLE_AMOUNT`.  Do not include
     * this field for percentage-based or variable discounts.
     */
    amount_money?: Money;
    /**
     * Indicates whether a mobile staff member needs to enter their PIN to apply the discount to a payment in the Square
     * Point of Sale app.
     */
    pin_required?: boolean;
    /**
     * The color of the discount's display label in the Square Point of Sale app. This must be a valid hex color code.
     */
    label_color?: string;
}

export namespace CatalogDiscount {
    export enum DiscountTypeEnum {
        FIXED_PERCENTAGE = 'FIXED_PERCENTAGE',
        FIXED_AMOUNT = 'FIXED_AMOUNT',
        VARIABLE_PERCENTAGE = 'VARIABLE_PERCENTAGE',
        VARIABLE_AMOUNT = 'VARIABLE_AMOUNT',
    }
}
/**
 * How to apply a [CatalogDiscount](#type-catalogdiscount) to a [CatalogItem](#type-catalogitem).
 */
export class CatalogDiscountType {}

/**
 * A mapping between a client-supplied temporary ID and a permanent server ID.
 */
export class CatalogIdMapping {
    /**
     * The client-supplied, temporary `#`-prefixed ID for a new [CatalogObject](#type-catalogobject).
     */
    client_object_id?: string;
    /**
     * The permanent ID for the [CatalogObject](#type-catalogobject) created by the server.
     */
    object_id?: string;
}

/**
 * An image file to use in Square catalogs. Can be associated with catalog items, item variations, and categories.
 */
export class CatalogImage {
    /**
     * The internal name of this image. Identifies this image in calls to the Connect APIs.
     */
    name?: string;
    /**
     * The URL of this image. Generated by Square after an image is uploaded to the CreateCatalogImage endpoint.
     */
    url?: string;
    /**
     * A caption that describes what is shown in the image. Displayed in the Square Online Store.
     */
    caption?: string;
}

export class CatalogInfoRequest {}

export class CatalogInfoResponseLimits {
    /**
     * The maximum number of objects that may appear within a single batch in a `/v2/catalog/batch-upsert` request.
     */
    batch_upsert_max_objects_per_batch?: number;
    /**
     * The maximum number of objects that may appear across all batches in a `/v2/catalog/batch-upsert` request.
     */
    batch_upsert_max_total_objects?: number;
    /**
     * The maximum number of object IDs that may appear in a `/v2/catalog/batch-retrieve` request.
     */
    batch_retrieve_max_object_ids?: number;
    /**
     * The maximum number of results that may be returned in a page of a `/v2/catalog/search` response.
     */
    search_max_page_limit?: number;
    /**
     * The maximum number of object IDs that may be included in a single `/v2/catalog/batch-delete` request.
     */
    batch_delete_max_object_ids?: number;
    /**
     * The maximum number of item IDs that may be included in a single `/v2/catalog/update-item-taxes` request.
     */
    update_item_taxes_max_item_ids?: number;
    /**
     * The maximum number of tax IDs to be enabled that may be included in a single `/v2/catalog/update-item-taxes` request.
     */
    update_item_taxes_max_taxes_to_enable?: number;
    /**
     * The maximum number of tax IDs to be disabled that may be included in a single `/v2/catalog/update-item-taxes` request.
     */
    update_item_taxes_max_taxes_to_disable?: number;
    /**
     * The maximum number of item IDs that may be included in a single `/v2/catalog/update-item-modifier-lists` request.
     */
    update_item_modifier_lists_max_item_ids?: number;
    /**
     * The maximum number of modifier list IDs to be enabled that may be included in a single
     * `/v2/catalog/update-item-modifier-lists` request.
     */
    update_item_modifier_lists_max_modifier_lists_to_enable?: number;
    /**
     * The maximum number of modifier list IDs to be disabled that may be included in a single
     * `/v2/catalog/update-item-modifier-lists` request.
     */
    update_item_modifier_lists_max_modifier_lists_to_disable?: number;
}

export class CatalogInfoResponse {
    /**
     * The set of [Error](#type-error)s encountered.
     */
    errors?: Array<Error>;

    limits?: CatalogInfoResponseLimits;
}

/**
 * An item (i.e., product family) in the Catalog object model.
 */
export class CatalogItem {
    /**
     * The item's name. Searchable. This field must not be empty. This field has max length of 512 Unicode code points.
     */
    name?: string;
    /**
     * The item's description. Searchable. This field has max length of 4096 Unicode code points.
     */
    description?: string;
    /**
     * The text of the item's display label in the Square Point of Sale app. Only up to the first five characters of the
     * string are used.  Searchable. This field has max length of 24 Unicode code points.
     */
    abbreviation?: string;
    /**
     * The color of the item's display label in the Square Point of Sale app. This must be a valid hex color code.
     */
    label_color?: string;
    /**
     * If `true`, the item can be added to shipping orders from the merchant's online store.
     */
    available_online?: boolean;
    /**
     * If `true`, the item can be added to pickup orders from the merchant's online store.
     */
    available_for_pickup?: boolean;
    /**
     * If `true`, the item can be added to electronically fulfilled orders from the merchant's online store.
     */
    available_electronically?: boolean;
    /**
     * The ID of the item's category, if any.
     */
    category_id?: string;
    /**
     * A set of IDs indicating the [CatalogTax](#type-catalogtax)es that are enabled for this item. When updating an
     * item, any taxes listed here will be added to the item. [CatalogTax](#type-catalogtax)es may also be added to or
     * deleted from an item using `UpdateItemTaxes`.
     */
    tax_ids?: Array<string>;
    /**
     * A set of [CatalogItemModifierListInfo](#type-catalogitemmodifierlistinfo) objects representing the modifier lists
     * that apply to this item, along with the overrides and min and max limits that are specific to this item.
     * [CatalogModifierList](#type-catalogmodifierlist)s may also be added to or deleted from an item using `UpdateItemModifierLists`.
     */
    modifier_list_info?: Array<CatalogItemModifierListInfo>;
    /**
     * The URL of an image representing this item.
     * @deprecated Deprecated in favor of `image_id` in [`CatalogObject`](#type-catalogobject).
     */
    image_url?: string;
    /**
     * A list of [CatalogObject](#type-catalogobject)s containing the
     * [CatalogItemVariation](#type-catalogitemvariation)s for this item.
     */
    variations?: Array<CatalogObject>;
    /**
     * The product type of the item. May not be changed once an item has been created.
     * Only items of product type `REGULAR` may be created by this API; items with other product types are read-only.
     * See [CatalogItemProductType](#type-catalogitemproducttype) for possible values.
     */
    product_type?: CatalogItem.ProductTypeEnum;
    /**
     * If `false`, the Square Point of Sale app will present the [CatalogItem](#type-catalogitem)'s details screen immediately,
     * allowing the merchant to choose [CatalogModifier](#type-catalogmodifier)s before adding the item to the cart.
     * This is the default behavior. If `true`, the Square Point of Sale app will immediately add the item to the cart
     * with the pre-selected modifiers, and merchants can edit modifiers by drilling down onto the item's details.
     * Third-party clients are encouraged to implement similar behaviors.
     */
    skip_modifier_screen?: boolean;
}

export namespace CatalogItem {
    export enum ProductTypeEnum {
        REGULAR = 'REGULAR',
        GIFT_CARD = 'GIFT_CARD',
        APPOINTMENTS_SERVICE = 'APPOINTMENTS_SERVICE',
        RETAIL_ITEM = 'RETAIL_ITEM',
        RESTAURANT_ITEM = 'RESTAURANT_ITEM',
    }
}

/**
 * Controls the properties of a [CatalogModifierList](#type-catalogmodifierlist) as it applies to this
 * [CatalogItem](#type-catalogitem).
 */
export class CatalogItemModifierListInfo {
    /**
     * The ID of the [CatalogModifierList](#type-catalogmodifierlist) controlled by this
     * [CatalogModifierListInfo](#type-catalogmodifierlistinfo).
     */
    modifier_list_id: string;
    /**
     * A set of [CatalogModifierOverride](#type-catalogmodifieroverride) objects that override whether a given
     * [CatalogModifier](#type-catalogmodifier) is enabled by default.
     */
    modifier_overrides?: Array<CatalogModifierOverride>;
    /**
     * If zero or larger, the smallest number of [CatalogModifier](#type-catalogmodifier)s that must be selected from
     * this [CatalogModifierList](#type-catalogmodifierlist).
     */
    min_selected_modifiers?: number;
    /**
     * If zero or larger, the largest number of [CatalogModifier](#type-catalogmodifier)s that can be selected from this
     * [CatalogModifierList](#type-catalogmodifierlist).
     */
    max_selected_modifiers?: number;
    /**
     * If `true`, enable this [CatalogModifierList](#type-catalogmodifierlist).
     */
    enabled?: boolean;
}

/**
 * The type of a [CatalogItem](#type-catalogitem). Connect V2 only allows the creation of `REGULAR` items.
 */
export class CatalogItemProductType {}

/**
 * An item variation (i.e., product) in the Catalog object model.
 */
export class CatalogItemVariation {
    /**
     * The ID of the [CatalogItem](#type-catalogitem) associated with this item variation. Searchable.
     */
    item_id?: string;
    /**
     * The item variation's name. Searchable. This field has max length of 255 Unicode code points.
     */
    name?: string;
    /**
     * The item variation's SKU, if any. Searchable.
     */
    sku?: string;
    /**
     * The item variation's UPC, if any. Searchable in the Connect API. This field is only exposed in the Connect API.
     * It is not exposed in Square's Dashboard, Square Point of Sale app or Retail Point of Sale app.
     */
    upc?: string;
    /**
     * The order in which this item variation should be displayed. This value is read-only. On writes, the ordinal for
     * each item variation within a parent [CatalogItem](#type-catalogitem) is set according to the item variations's
     * position. On reads, the value is not guaranteed to be sequential or unique.
     */
    ordinal?: number;
    /**
     * Indicates whether the item variation's price is fixed or determined at the time of sale.
     * See [CatalogPricingType](#type-catalogpricingtype) for possible values.
     */
    pricing_type?: CatalogItemVariation.PricingTypeEnum;
    /**
     * The item variation's price, if fixed pricing is used.
     */
    price_money?: Money;
    /**
     * Per-[location](#type-location) price and inventory overrides.
     */
    location_overrides?: Array<ItemVariationLocationOverrides>;
    /**
     * If `true`, inventory tracking is active for the variation.
     */
    track_inventory?: boolean;
    /**
     * Indicates whether the item variation displays an alert when its inventory quantity is less than or equal to its
     * `inventory_alert_threshold`. See [InventoryAlertType](#type-inventoryalerttype) for possible values.
     */
    inventory_alert_type?: CatalogItemVariation.InventoryAlertTypeEnum;
    /**
     * If the inventory quantity for the variation is less than or equal to this value and `inventory_alert_type` is
     * `LOW_QUANTITY`, the variation displays an alert in the merchant dashboard.  This value is always an integer.
     */
    inventory_alert_threshold?: number;
    /**
     * Arbitrary user metadata to associate with the item variation. Cannot exceed 255 characters. Searchable.
     */
    user_data?: string;
    /**
     * If the [CatalogItem](#type-catalogitem) that owns this item variation is of type `APPOINTMENTS_SERVICE`, then
     * this is the duration of the service in milliseconds. For example, a 30 minute appointment would have the value
     * `1800000`, which is equal to 30 (minutes) * 60 (seconds per minute) * 1000 (milliseconds per second).
     */
    service_duration?: number;
}

export namespace CatalogItemVariation {
    export enum PricingTypeEnum {
        FIXED_PRICING = 'FIXED_PRICING',
        VARIABLE_PRICING = 'VARIABLE_PRICING',
    }
    export enum InventoryAlertTypeEnum {
        NONE = 'NONE',
        LOW_QUANTITY = 'LOW_QUANTITY',
    }
}

/**
 * A modifier in the Catalog object model.
 */
export class CatalogModifier {
    /**
     * The modifier's name. Searchable. This field has max length of 255 Unicode code points.
     */
    name?: string;
    /**
     * The modifier's price.
     */
    price_money?: Money;
}

/**
 * A modifier list in the Catalog object model. A [CatalogModifierList](#type-catalogmodifierlist) contains
 * [Modifier](#type-catalogmodifier)s that can be applied to a [CatalogItem](#type-catalogitem) at the time of sale.
 * For example, a modifier list "Condiments" that would apply to a "Hot Dog" [CatalogItem](#type-catalogitem) might
 * contain [CatalogModifier](#type-catalogmodifier)s "Ketchup", "Mustard", and "Relish".
 * The `selection_type` field specifies whether or not multiple selections from the modifier list are allowed.
 */
export class CatalogModifierList {
    /**
     * The [CatalogModifierList](#type-catalogmodifierlist)'s name. Searchable.
     * This field has max length of 255 Unicode code points.
     */
    name?: string;
    /**
     * Indicates whether multiple options from the [CatalogModifierList](#type-catalogmodifierlist) can be applied to a
     * single [CatalogItem](#type-catalogitem).
     * See [CatalogModifierListSelectionType](#type-catalogmodifierlistselectiontype) for possible values.
     */
    selection_type?: CatalogModifierList.SelectionTypeEnum;
    /**
     * The options included in the [CatalogModifierList](#type-catalogmodifierlist). You must include at least one
     * [CatalogModifier](#type-catalogmodifier). Each [CatalogObject](#type-catalogobject) must have type `MODIFIER` and
     * contain [CatalogModifier](#type-catalogmodifier) data.
     */
    modifiers?: Array<CatalogObject>;
}

export namespace CatalogModifierList {
    export enum SelectionTypeEnum {
        SINGLE = 'SINGLE',
        MULTIPLE = 'MULTIPLE',
    }
}

/**
 * Indicates whether a [CatalogModifierList](#type-catalogmodifierlist) supports multiple selections.
 */
export class CatalogModifierListSelectionType {}

export class CatalogModifierOverride {
    /**
     * The ID of the [CatalogModifier](#type-catalogmodifier) whose default behavior is being overridden.
     */
    modifier_id: string;
    /**
     * If `true`, this [CatalogModifier](#type-catalogmodifier) should be selected by default for this
     * [CatalogItem](#type-catalogitem).
     */
    on_by_default?: boolean;
}

/**
 * The wrapper object for object types in the Catalog data model.
 * The type of a particular `CatalogObject` is determined by the value of `type` and only the corresponding data field may be set.
 * - if type = `ITEM`, only `item_data` will be populated and it will contain a valid [CatalogItem](#type-catalogitem) object.
 * - if type = `ITEM_VARIATION`, only `item_variation_data` will be populated and it will contain a valid [CatalogItemVariation](#type-catalogitemvariation) object.
 * - if type = `MODIFIER`, only `modifier_data` will be populated and it will contain a valid [CatalogModifier](#type-catalogmodifier) object.
 * - if type = `MODIFIER_LIST`, only `modifier_list_data` will be populated and it will contain a valid [CatalogModifierList](#type-catalogmodifierlist) object.
 * - if type = `CATEGORY`, only `category_data` will be populated and it will contain a valid [CatalogCategory](#type-catalogcategory) object.
 * - if type = `DISCOUNT`, only `discount_data` will be populated and it will contain a valid [CatalogDiscount](#type-catalogdiscount) object.
 * - if type = `TAX`, only `tax_data` will be populated and it will contain a valid [CatalogTax](#type-catalogtax) object.
 * - if type = `IMAGE`, only `image_data` will be populated and it will contain a valid [CatalogImage](#type-catalogimage) object.
 * For a more detailed discussion of the Catalog data model, please see the [Catalog Overview](/products/catalog/overview).
 */
export class CatalogObject {
    /**
     * The type of this object. Each object type has expected properties expressed in a structured format within its
     * corresponding `*_data` field below. See [CatalogObjectType](#type-catalogobjecttype) for possible values.
     */
    type: CatalogObject.TypeEnum;
    /**
     * An identifier to reference this object in the catalog. When a new CatalogObject is inserted, the client should
     * set the id to a temporary identifier starting with a `'#'` character. Other objects being inserted or updated
     * within the same request may use this identifier to refer to the new object.  When the server receives the new
     * object, it will supply a unique identifier that replaces the temporary identifier for all future references.
     */
    id: string;
    /**
     * Last modification [timestamp](#workingwithdates) in RFC 3339 format, e.g., `\"2016-08-15T23:59:33.123Z\"` would
     * indicate the UTC time (denoted by `Z`) of August 15, 2016 at 23:59:33 and 123 milliseconds.
     */
    updated_at?: string;
    /**
     * The version of the object. When updating an object, the version supplied must match the version in the database,
     * otherwise the write will be rejected as conflicting.
     */
    version?: number;
    /**
     * If `true`, the object has been deleted from the database. Must be `false` for new objects being inserted. When
     * deleted, the `updated_at` field will equal the deletion time.
     */
    is_deleted?: boolean;
    /**
     * The Connect V1 IDs for this object at each [location](#type-location) where it is present, where they differ from
     * the object's Connect V2 ID. The field will only be present for objects that have been created or modified by
     * legacy APIs.
     */
    catalog_v1_ids?: Array<CatalogV1Id>;
    /**
     * If `true`, this object is present at all locations (including future locations), except where specified in the
     * `absent_at_location_ids` field. If `false`, this object is not present at any locations (including future
     * locations), except where specified in the `present_at_location_ids` field. If not specified, defaults to `true`.
     */
    present_at_all_locations?: boolean;
    /**
     * A list of locations where the object is present, even if `present_at_all_locations` is `false`.
     */
    present_at_location_ids?: Array<string>;
    /**
     * A list of locations where the object is not present, even if `present_at_all_locations` is `true`.
     */
    absent_at_location_ids?: Array<string>;
    /**
     * Identifies the `CatalogImage` attached to this `CatalogObject`.
     */
    image_id?: string;
    /**
     * Structured data for a [CatalogItem](#type-catalogitem), set for CatalogObjects of type `ITEM`.
     */
    item_data?: CatalogItem;
    /**
     * Structured data for a [CatalogCategory](#type-catalogcategory), set for CatalogObjects of type `CATEGORY`.
     */
    category_data?: CatalogCategory;
    /**
     * Structured data for a [CatalogItemVariation](#type-catalogitemvariation), set for CatalogObjects of type `ITEM_VARIATION`.
     */
    item_variation_data?: CatalogItemVariation;
    /**
     * Structured data for a [CatalogTax](#type-catalogtax), set for CatalogObjects of type `TAX`.
     */
    tax_data?: CatalogTax;
    /**
     * Structured data for a [CatalogDiscount](#type-catalogdiscount), set for CatalogObjects of type `DISCOUNT`.
     */
    discount_data?: CatalogDiscount;
    /**
     * Structured data for a [CatalogModifierList](#type-catalogmodifierlist), set for CatalogObjects of type `MODIFIER_LIST`.
     */
    modifier_list_data?: CatalogModifierList;
    /**
     * Structured data for a [CatalogModifier](#type-catalogmodifier), set for CatalogObjects of type `MODIFIER`.
     */
    modifier_data?: CatalogModifier;
    /**
     * Structured data for a [CatalogImage](#type-catalogimage), set for CatalogObjects of type `IMAGE`.
     */
    image_data?: CatalogImage;
}

export namespace CatalogObject {
    export enum TypeEnum {
        ITEM = 'ITEM',
        IMAGE = 'IMAGE',
        CATEGORY = 'CATEGORY',
        ITEM_VARIATION = 'ITEM_VARIATION',
        TAX = 'TAX',
        DISCOUNT = 'DISCOUNT',
        MODIFIER_LIST = 'MODIFIER_LIST',
        MODIFIER = 'MODIFIER',
    }
}

/**
 * A batch of [CatalogObject](#type-catalogobject)s.
 */
export class CatalogObjectBatch {
    /**
     * A list of [CatalogObject](#type-catalogobject)s belonging to this batch.
     */
    objects?: Array<CatalogObject>;
}

/**
 * Possible kinds of [CatalogObject](#type-catalogobject)s returned from the Catalog, each containing type-specific
 * properties in the `*_data` field corresponding to the object type.
 */
export class CatalogObjectType {}

/**
 * Indicates whether the price of a [CatalogItemVariation](#type-catalogitemvariation) should be entered manually at the
 * time of sale.
 */
export class CatalogPricingType {}

/**
 * A query to be applied to a [SearchCatalogObjectsRequest](#type-searchcatalogobjectsrequest). Only one query field may be present.
 * Where an attribute name is required, it should be specified as the name of any field marked "searchable" from the structured
 * data types for the desired result object type(s):
 *  [CatalogItem](#type-catalogitem),
 *  [CatalogItemVariation](#type-catalogitemvariation),
 *  [CatalogCategory](#type-catalogcategory),
 *  [CatalogTax](#type-catalogtax),
 *  [CatalogDiscount](#type-catalogdiscount),
 *  [CatalogModifierList](#type-catalogmodifierlist),
 *  [CatalogModifier](#type-catalogmodifier)
 *  For example, a query that should return Items may specify attribute names from any of the searchable fields of
 *  the [CatalogItem](#type-catalogitem) data type, namely "name", "description", and "abbreviation".
 */
export class CatalogQuery {
    /**
     * A query that returns all objects, sorted by the given attribute.
     */
    sorted_attribute_query?: CatalogQuerySortedAttribute;
    /**
     * A query that returns only objects for which the given (string-valued) attribute has the given case-insensitive
     * value.
     */
    exact_query?: CatalogQueryExact;
    /**
     * A query that returns only objects for which the given (string-valued) attribute has the given case-insensitive
     * prefix.
     */
    prefix_query?: CatalogQueryPrefix;
    /**
     * A query that returns only objects for which the given (integer-valued) attribute lies in the given range.
     */
    range_query?: CatalogQueryRange;
    /**
     * A query that returns only objects whose searchable attributes contain all of the given keywords as prefixes. For
     * example, if a [CatalogItem](#type-catalogitem) contains attributes `{"name": "t-shirt"}` and
     * `{"description": "Small, Purple"}`, it will be matched by the query `{"keywords": ["shirt", "sma", "purp"]}`.
     */
    text_query?: CatalogQueryText;
    /**
     * A query that returns all [CatalogItem](#type-catalogitem)s that have any of the given
     * [CatalogTax](#type-catalogtax)es enabled.
     */
    items_for_tax_query?: CatalogQueryItemsForTax;
    /**
     * A query that returns all [CatalogItem](#type-catalogitem)s that have any of the given
     * [CatalogModifierList](#type-catalogmodifierlist)s enabled.
     */
    items_for_modifier_list_query?: CatalogQueryItemsForModifierList;
}

export class CatalogQueryExact {
    /**
     * The name of the attribute to be searched.
     */
    attribute_name: string;
    /**
     * The desired value of the search attribute.
     */
    attribute_value: string;
}

export class CatalogQueryItemsForModifierList {
    /**
     * A set of [CatalogModifierList](#type-catalogmodifierlist) IDs to be used to find associated
     * [CatalogItem](#type-catalogitem)s.
     */
    modifier_list_ids: Array<string>;
}

export class CatalogQueryItemsForTax {
    /**
     * A set of [CatalogTax](#type-catalogtax) IDs to be used to find associated [CatalogItem](#type-catalogitem)s.
     */
    tax_ids: Array<string>;
}

export class CatalogQueryPrefix {
    /**
     * The name of the attribute to be searched.
     */
    attribute_name: string;
    /**
     * The desired prefix of the search attribute value.
     */
    attribute_prefix: string;
}

export class CatalogQueryRange {
    /**
     * The name of the attribute to be searched.
     */
    attribute_name: string;
    /**
     * The desired minimum value for the search attribute (inclusive).
     */
    attribute_min_value?: number;
    /**
     * The desired maximum value for the search attribute (inclusive).
     */
    attribute_max_value?: number;
}

export class CatalogQuerySortedAttribute {
    /**
     * The attribute whose value should be used as the sort key.
     */
    attribute_name: string;
    /**
     * The first attribute value to be returned by the query. Ascending sorts will return only objects with this value
     * or greater, while descending sorts will return only objects with this value or less.
     * If unset, start at the beginning (for ascending sorts) or end (for descending sorts).
     */
    initial_attribute_value?: string;
    /**
     * The desired [SortOrder](#type-sortorder), "ASC" (ascending) or "DESC" (descending).
     * See [SortOrder](#type-sortorder) for possible values.
     */
    sort_order?: CatalogQuerySortedAttribute.SortOrderEnum;
}

export namespace CatalogQuerySortedAttribute {
    export enum SortOrderEnum {
        DESC = 'DESC',
        ASC = 'ASC',
    }
}

export class CatalogQueryText {
    /**
     * A list of one, two, or three search keywords. Keywords with fewer than three characters are ignored.
     */
    keywords: Array<string>;
}

/**
 * A tax in the Catalog object model.
 */
export class CatalogTax {
    /**
     * The tax's name. Searchable. This field has max length of 255 Unicode code points.
     */
    name?: string;
    /**
     * Whether the tax is calculated based on a payment's subtotal or total.
     * See [TaxCalculationPhase](#type-taxcalculationphase) for possible values.
     */
    calculation_phase?: CatalogTax.CalculationPhaseEnum;
    /**
     * Whether the tax is `ADDITIVE` or `INCLUSIVE`. See [TaxInclusionType](#type-taxinclusiontype) for possible values.
     */
    inclusion_type?: CatalogTax.InclusionTypeEnum;
    /**
     * The percentage of the tax in decimal form, using a '.' as the decimal separator and without a '%' sign.
     * A value of `7.5` corresponds to 7.5%.
     */
    percentage?: string;
    /**
     * If `true`, the fee applies to custom amounts entered into the Square Point of Sale app that are not associated
     * with a particular [CatalogItem](#type-catalogitem).
     */
    applies_to_custom_amounts?: boolean;
    /**
     * If `true`, the tax will be shown as enabled in the Square Point of Sale app.
     */
    enabled?: boolean;
}

export namespace CatalogTax {
    export enum CalculationPhaseEnum {
        TAX_SUBTOTAL_PHASE = 'TAX_SUBTOTAL_PHASE',
        TAX_TOTAL_PHASE = 'TAX_TOTAL_PHASE',
    }
    export enum InclusionTypeEnum {
        ADDITIVE = 'ADDITIVE',
        INCLUSIVE = 'INCLUSIVE',
    }
}

/**
 * An Items Connect V1 object ID along with its associated [location](#type-location) ID.
 */
export class CatalogV1Id {
    /**
     * The ID for an object in Connect V1, if different from its Connect V2 ID.
     */
    catalog_v1_id?: string;
    /**
     * The ID of the [location](#type-location) this Connect V1 ID is associated with.
     */
    location_id?: string;
}

/**
 * Defines the parameters that can be included in the body of a request to the Charge endpoint.
 */
export class ChargeRequest {
    /**
     * A value you specify that uniquely identifies this transaction among transactions you've created.
     * If you're unsure whether a particular transaction succeeded, you can reattempt it with the same idempotency key
     * without worrying about double-charging the buyer. See [Idempotency](/basics/api101/idempotency) for more information.
     */
    idempotency_key: string;
    /**
     * The amount of money to charge. Note that you specify the amount in the __smallest denomination of the applicable
     * currency__. For example, US dollar amounts are specified in cents.
     * See [Working with monetary amounts] (#workingwithmonetaryamounts) for details.
     * The value of `currency` must match the currency associated with the business that is charging the card.
     */
    amount_money: Money;
    /**
     * A nonce generated from the `SqPaymentForm` that represents the card to charge. The application that provides a
     * nonce to this endpoint must be the _same application_ that generated the nonce with the `SqPaymentForm`.
     * Otherwise, the nonce is invalid. Do not provide a value for this field if you provide a value for `customer_card_id`.
     */
    card_nonce?: string;
    /**
     * The ID of the customer card on file to charge. Do not provide a value for this field if you provide a value for `card_nonce`.
     * If you provide this value, you _must_ also provide a value for `customer_id`.
     */
    customer_card_id?: string;
    /**
     * If `true`, the request will only perform an Auth on the provided card. You can then later perform either a
     * Capture (with the [CaptureTransaction](#endpoint-capturetransaction) endpoint) or a Void (with the
     * [VoidTransaction](#endpoint-voidtransaction) endpoint). Default value: `false`.
     */
    delay_capture?: boolean;
    /**
     * An optional ID you can associate with the transaction for your own purposes (such as to associate the transaction
     * with an entity ID in your own database). This value cannot exceed 40 characters.
     */
    reference_id?: string;

    /**
     * An optional note to associate with the transaction. This value cannot exceed 60 characters.
     */
    note?: string;
    /**
     * The ID of the customer to associate this transaction with.
     * This field is required if you provide a value for `customer_card_id`, and optional otherwise.
     */
    customer_id?: string;
    /**
     * The buyer's billing address.
     */
    billing_address?: Address;
    /**
     * The buyer's shipping address, if available.
     */
    shipping_address?: Address;
    /**
     * The buyer's email address, if available.
     */
    buyer_email_address?: string;
    /**
     * The ID of the order to associate with this transaction. If you provide this value, the `amount_money` value of
     * your request must __exactly match__ the value of the order's `total_money` field.
     */
    order_id?: string;
    /**
     * The basic primitive of multi-party transaction. The value is optional. The transaction facilitated by you can be
     * split from here.  If you provide this value, the `amount_money` value in your additional_recipients must not be
     * more than 90% of the `amount_money` value in the charge request. The `location_id` must be the valid location of
     * the app owner merchant.  This field requires the `PAYMENTS_WRITE_ADDITIONAL_RECIPIENTS` OAuth permission.  This
     * field is currently not supported in sandbox.
     */
    additional_recipients?: Array<AdditionalRecipient>;
}

/**
 * Represents an additional recipient (other than the merchant) entitled to a portion of the tender. Support is
 * currently limited to USD, CAD and GBP currencies
 */
export class ChargeRequestAdditionalRecipient {
    /**
     * The location ID for a recipient (other than the merchant) receiving a portion of the tender.
     */
    location_id: string;
    /**
     * The description of the additional recipient.
     */
    description: string;
    /**
     * The amount of money distributed to the recipient.
     */
    amount_money: Money;
}

/**
 * Defines the fields that are included in the response body of a request to the Charge endpoint.
 * One of `errors` or `transaction` is present in a given response (never both).
 */
export class ChargeResponse {
    /**
     * Any errors that occurred during the request.
     */
    errors?: Array<Error>;
    /**
     * The created transaction.
     */
    transaction?: Transaction;
}

/**
 * Square Checkout lets merchants accept online payments for supported payment types using a checkout workflow hosted on squareup.com.
 */
export class Checkout {
    /**
     * ID generated by Square Checkout when a new checkout is requested.
     */
    id?: string;
    /**
     * The URL that the buyer's browser should be redirected to after the checkout is completed.
     */
    checkout_page_url?: string;
    /**
     * If `true`, Square Checkout will collect shipping information on your behalf and store that information with the
     * transaction information in your Square Dashboard. Default: `false`.
     */
    ask_for_shipping_address?: boolean;
    /**
     * The email address to display on the Square Checkout confirmation page and confirmation email that the buyer can
     * use to contact the merchant.  If this value is not set, the confirmation page and email will display the primary
     * email address associated with the merchant's Square account. Default: none; only exists if explicitly set.
     */
    merchant_support_email?: string;
    /**
     * If provided, the buyer's email is pre-populated on the checkout page as an editable text field.
     * Default: none; only exists if explicitly set.
     */
    pre_populate_buyer_email?: string;
    /**
     * If provided, the buyer's shipping info is pre-populated on the checkout page as editable text fields.
     * Default: none; only exists if explicitly set.
     */
    pre_populate_shipping_address?: Address;
    /**
     * The URL to redirect to after checkout is completed with `checkoutId`, Square's `orderId`, `transactionId`, and
     * `referenceId` appended as URL parameters. For example, if the provided redirect_url is
     * `http://www.example.com/order-complete`, a successful transaction redirects the customer to:
     * `http://www.example.com/order-complete?checkoutId=xxxxxx&orderId=xxxxxx&referenceId=xxxxxx&transactionId=xxxxxx`
     * If you do not provide a redirect URL, Square Checkout will display an order confirmation page on your behalf;
     * however Square strongly recommends that you provide a redirect URL so you can verify the transaction results and
     * finalize the order through your existing/normal confirmation workflow.
     */
    redirect_url?: string;
    /**
     * Order to be checked out.
     */
    order?: Order;
    /**
     * The time when the checkout was created, in RFC 3339 format.
     */
    created_at?: string;
    /**
     * Additional recipients (other than the merchant) receiving a portion of this checkout. For example, fees assessed
     * on the purchase by a third party integration.
     */
    additional_recipients?: Array<AdditionalRecipient>;
}

/**
 * Indicates the country associated with another entity, such as a business. Values are in [ISO 3166-1-alpha-2
 * format](http://www.iso.org/iso/home/standards/country_codes.htm).
 */
export class Country {}

/**
 * A request to create a new `BreakType`.
 */
export class CreateBreakTypeRequest {
    /**
     * Unique string value to insure idempotency of the operation.
     */
    idempotency_key?: string;
    /**
     * The `BreakType` to be created.
     */
    break_type: BreakType;
}

/**
 * The response to the request to create a `BreakType`. Contains the created `BreakType` object.
 * May contain a set of `Error` objects if the request resulted in errors.
 */
export class CreateBreakTypeResponse {
    /**
     * The `BreakType` that was created by the request.
     */
    break_type?: BreakType;
    /**
     * Any errors that occurred during the request.
     */
    errors?: Array<Error>;
}

/**
 * Defines the parameters that can be included in the body of a request to the CreateCheckout endpoint.
 */
export class CreateCheckoutRequest {
    /**
     * A unique string that identifies this checkout among others you've created. It can be any valid string but must be
     * unique for every order sent to Square Checkout for a given location ID. The idempotency key is used to avoid
     * processing the same order more than once. If you're unsure whether a particular checkout was created
     * successfully, you can reattempt it with the same idempotency key and all the same other parameters without
     * worrying about creating duplicates. We recommend using a random number/string generator native to the language
     * you are working in to generate strings for your idempotency keys. See [Idempotency](/basics/api101/idempotency)
     * for more information.
     */
    idempotency_key: string;
    /**
     * The order including line items to be checked out.
     */
    order: CreateOrderRequest;
    /**
     * If `true`, Square Checkout will collect shipping information on your behalf and store that information with the
     * transaction information in your Square Dashboard.  Default: `false`.
     */
    ask_for_shipping_address?: boolean;
    /**
     * The email address to display on the Square Checkout confirmation page and confirmation email that the buyer can
     * use to contact the merchant. If this value is not set, the confirmation page and email will display the primary
     * email address associated with the merchant's Square account. Default: none; only exists if explicitly set.
     */
    merchant_support_email?: string;
    /**
     * If provided, the buyer's email is pre-populated on the checkout page as an editable text field.  Default: none;
     * only exists if explicitly set.
     */
    pre_populate_buyer_email?: string;
    /**
     * If provided, the buyer's shipping info is pre-populated on the checkout page as editable text fields.  Default:
     * none; only exists if explicitly set.
     */
    pre_populate_shipping_address?: Address;
    /**
     * The URL to redirect to after checkout is completed with `checkoutId`, Square's `orderId`, `transactionId`, and
     * `referenceId` appended as URL parameters. For example, if the provided redirect_url is
     * `http://www.example.com/order-complete`, a successful transaction redirects the customer to:
     * `http://www.example.com/order-complete?checkoutId=xxxxxx&orderId=xxxxxx&referenceId=xxxxxx&transactionId=xxxxxx`
     * If you do not provide a redirect URL, Square Checkout will display an order confirmation page on your behalf;
     * however Square strongly recommends that you provide a redirect URL so you can verify the transaction results and
     * finalize the order through your existing/normal confirmation workflow.
     * Default: none; only exists if explicitly set.
     */
    redirect_url?: string;
    /**
     * The basic primitive of multi-party transaction. The value is optional. The transaction facilitated by you can be
     * split from here. If you provide this value, the `amount_money` value in your additional_recipients must not be
     * more than 90% of the `total_money` calculated by Square for your order. The `location_id` must be the valid
     * location of the app owner merchant. This field requires `PAYMENTS_WRITE_ADDITIONAL_RECIPIENTS` OAuth permission.
     * This field is currently not supported in sandbox.
     */
    additional_recipients?: Array<ChargeRequestAdditionalRecipient>;
    /**
     * An optional note to associate with the checkout object. This value cannot exceed 60 characters.
     */
    note?: string;
}

/**
 * Defines the fields that are included in the response body of a request to the CreateCheckout endpoint.
 */
export class CreateCheckoutResponse {
    /**
     * The newly created checkout. If the same request was made with the same idempotency_key, this will be the checkout
     * created with the idempotency_key.
     */
    checkout?: Checkout;
    /**
     * Any errors that occurred during the request.
     */
    errors?: Array<Error>;
}

/**
 * Defines the fields that are included in the request body of a request to the CreateCustomerCard endpoint.
 */
export class CreateCustomerCardRequest {
    /**
     * A card nonce representing the credit card to link to the customer.
     * Card nonces are generated by the `SqPaymentForm` that buyers enter their card information into.
     * See [Embedding the payment form](/payments/sqpaymentform/overview) for more information.
     * @note Card nonces generated by digital wallets (e.g., Apple Pay) cannot be used to create a customer card.
     */
    card_nonce: string;
    /**
     * Address information for the card on file. Only the `postal_code` field is required for payments in the US and Canada.
     */
    billing_address?: Address;
    /**
     * The cardholder's name.
     */
    cardholder_name?: string;
}

/**
 * Defines the fields that are included in the response body of a request to the CreateCustomerCard endpoint.
 * One of `errors` or `card` is present in a given response (never both).
 */
export class CreateCustomerCardResponse {
    /**
     * Any errors that occurred during the request.
     */
    errors?: Array<Error>;
    /**
     * The created card on file.
     */
    card?: Card;
}

/**
 * Defines the body parameters that can be provided in a request to the CreateCustomer endpoint.
 */
export class CreateCustomerRequest {
    /**
     * The idempotency key for the request. See the [Idempotency](/basics/api101/idempotency) guide for more information.
     */
    idempotency_key?: string;
    /**
     * The customer's given (i.e., first) name.
     */
    given_name?: string;
    /**
     * The customer's family (i.e., last) name.
     */
    family_name?: string;
    /**
     * The name of the customer's company.
     */
    company_name?: string;
    /**
     * A nickname for the customer.
     */
    nickname?: string;
    /**
     * The customer's email address.
     */
    email_address?: string;
    /**
     * The customer's physical address.
     */
    address?: Address;
    /**
     * The customer's phone number.
     */
    phone_number?: string;
    /**
     * An optional second ID you can set to associate the customer with an entity in another system.
     */
    reference_id?: string;
    /**
     * An optional note to associate with the customer.
     */
    note?: string;
    /**
     * The customer birthday in RFC-3339 format. Year is optional, timezone and times are not allowed. Example:
     * `0000-09-01T00:00:00-00:00` for a birthday on September 1st. `1998-09-01T00:00:00-00:00` for a birthday on
     * September 1st 1998.
     */
    birthday?: string;
}

/**
 * Defines the fields that are included in the response body of a request to the CreateCustomer endpoint.
 * One of `errors` or `customer` is present in a given response (never both).
 */
export class CreateCustomerResponse {
    /**
     * Any errors that occurred during the request.
     */
    errors?: Array<Error>;
    /**
     * The created customer.
     */
    customer?: Customer;
}

/**
 * Defines the body parameters that can be provided in a request to the CreateMobileAuthorizationCode endpoint.
 */
export class CreateMobileAuthorizationCodeRequest {
    /**
     * The Square location ID the authorization code should be tied to.
     */
    location_id?: string;
}

/**
 * Defines the fields that are included in the response body of a request to the CreateMobileAuthorizationCode endpoint.
 */
export class CreateMobileAuthorizationCodeResponse {
    /**
     * Generated authorization code that connects a mobile application instance to a Square account.
     */
    authorization_code?: string;
    /**
     * The timestamp when `authorization_code` expires in [RFC 3339](https://tools.ietf.org/html/rfc3339) format,
     * e.g., "2016-09-04T23:59:33.123Z".
     */
    expires_at?: string;
    /**
     * An error object that provides details about how creation of authorization code failed.
     */
    error?: Error;
}

export class CreateOrderRequest {
    /**
     * The order to create. If this field is set, then the only other top-level field that can be set is the idempotency_key.
     */
    order?: Order;
    /**
     * A value you specify that uniquely identifies this order among orders you've created.  If you're unsure whether a
     * particular order was created successfully, you can reattempt it with the same idempotency key without worrying
     * about creating duplicate orders. See [Idempotency](/basics/api101/idempotency) for more information.
     */
    idempotency_key?: string;
    /**
     * @deprecated Please set the reference_id on the nested [order](#type-order) field instead. An optional ID you can
     * associate with the order for your own purposes (such as to associate the order with an entity ID in your own database).
     * This value cannot exceed 40 characters.
     * -- Top-level fields necessary to support the connect v2 CreateOrderRequest shape.
     */
    reference_id?: string;
    /**
     * @deprecated Please set the line_items on the nested [order](#type-order) field instead.  The line items to
     * associate with this order.  Each line item represents a different product to include in a purchase.
     */
    line_items?: Array<CreateOrderRequestLineItem>;
    /**
     * @deprecated Please set the taxes on the nested [order](#type-order) field instead. The taxes to include on the order.
     */
    taxes?: Array<CreateOrderRequestTax>;
    /**
     * @deprecated Please set the discounts on the nested [order](#type-order) field instead.
     * The discounts to include on the order.
     */
    discounts?: Array<CreateOrderRequestDiscount>;
}

/**
 * @deprecated Please use the [OrderLineItemDiscount](#type-orderlineitemdiscount) type in the order field of
 * [CreateOrderRequest](#type-createorderrequest) instead. Represents a discount that can apply to either a single line
 * item or an entire order.
 */
export class CreateOrderRequestDiscount {
    /**
     * Only used for catalog discounts. The catalog object ID for an existing [CatalogDiscount](#type-catalogdiscount).
     * Do not provide a value for this field if you provide values in other fields for an ad hoc discount.
     */
    catalog_object_id?: string;
    /**
     * Only used for ad hoc discounts. The discount's name.
     */
    name?: string;
    /**
     * Only used for ad hoc discounts. The percentage of the discount, as a string representation of a decimal number.
     * A value of `7.25` corresponds to a percentage of 7.25%. This value range between 0.0 up to 100.0.
     */
    percentage?: string;
    /**
     * Only used for ad hoc discounts. The monetary amount of the discount.
     */
    amount_money?: Money;
}

/**
 * @deprecated Please use the [OrderLineItem](#type-orderlineitem) type in the order field of
 * [CreateOrderRequest](#type-createorderrequest) instead.  Represents a line item to include in an order. Each line
 * item describes a different product to purchase, with its own quantity and price details.  Line items can either
 * reference objects from the merchant's catalog, or can alternatively specify a name and price instead.
 */
export class CreateOrderRequestLineItem {
    /**
     * Only used for ad hoc line items. The name of the line item. This value cannot exceed 500 characters.  Do not
     * provide a value for this field if you provide a value for `catalog_object_id`.
     */
    name?: string;
    /**
     * The quantity to purchase, as a string representation of a number.  This string must have a positive integer
     * value.
     */
    quantity: string;
    /**
     * The base price for a single unit of the line item. `base_price_money` is required for ad hoc line items and
     * variable priced [CatalogItemVariation](#type-catalogitemvariation)s. If both `catalog_object_id` and
     * `base_price_money` are set, `base_price_money` will override the CatalogItemVariation's price.
     */
    base_price_money?: Money;
    /**
     * Only used for ad hoc line items. The variation name of the line item. This value cannot exceed 255 characters.
     * If this value is not set for an ad hoc line item, the default value of `Regular` is used.  Do not provide a value
     * for this field if you provide a value for the `catalog_object_id`.
     */
    variation_name?: string;
    /**
     * The note of the line item. This value cannot exceed 500 characters.
     */
    note?: string;
    /**
     * Only used for Catalog line items. The catalog object ID for an existing
     * [CatalogItemVariation](#type-catalogitemvariation).  Do not provide a value for this field if you provide a value
     * for `name` and `base_price_money`.
     */
    catalog_object_id?: string;
    /**
     * Only used for Catalog line items. The modifiers to include on the line item.
     */
    modifiers?: Array<CreateOrderRequestModifier>;
    /**
     * The taxes to include on the line item.
     */
    taxes?: Array<CreateOrderRequestTax>;
    /**
     * The discounts to include on the line item.
     */
    discounts?: Array<CreateOrderRequestDiscount>;
}

/**
 * @deprecated Please use the [OrderLineItemModifier](#type-orderlineitemmodifier) type instead.  Represents a
 * modifier applied to a single line item.  Modifiers can reference existing objects in a merchant catalog or be
 * constructed ad hoc at the time of purchase by providing a name and price.
 */
export class CreateOrderRequestModifier {
    /**
     * The catalog object ID of a [CatalogModifier](#type-catalogmodifier).
     */
    catalog_object_id?: string;
    /**
     * Only used for ad hoc modifiers. The name of the modifier. `name` cannot exceed 255 characters.  Do not provide a
     * value for `name` if you provide a value for `catalog_object_id`.
     */
    name?: string;
    /**
     * The base price for the modifier. `base_price_money` is required for ad hoc modifiers. If both
     * `catalog_object_id` and `base_price_money` are set, `base_price_money` will override the predefined
     * [CatalogModifier](#type-catalogmodifier) price.
     */
    base_price_money?: Money;
}

/**
 * @deprecated Please use the [OrderLineItemTax](#type-orderlineitemtax) type in the order field of
 * [CreateOrderRequest](#type-createorderrequest) instead.
 * Represents a tax that can apply to either a single line item or an entire order.
 */
export class CreateOrderRequestTax {
    /**
     * Only used for catalog taxes. The catalog object ID of an existing [CatalogTax](#type-catalogtax).
     * Do not provide a value for this field if you provide values in other fields for an ad hoc tax.
     */
    catalog_object_id?: string;
    /**
     * Only used for ad hoc taxes. The tax's name. Do not provide a value for this field if you set `catalog_object_id`.
     */
    name?: string;
    /**
     * Only used for ad hoc taxes. Indicates the calculation method used to apply the line item tax.
     * Default: `ADDITIVE`; See [OrderLineItemTaxType](#type-orderlineitemtaxtype) for possible values.
     * See [OrderLineItemTaxType](#type-orderlineitemtaxtype) for possible values.
     */
    type?: CreateOrderRequestTax.TypeEnum;
    /**
     * Only used for ad hoc taxes. The percentage of the tax, as a string representation of a decimal number.
     * A value of `7.25` corresponds to a percentage of 7.25%. This value range between 0.0 up to 100.0.
     */
    percentage?: string;
}

export namespace CreateOrderRequestTax {
    export enum TypeEnum {
        UNKNOWN_TAX = 'UNKNOWN_TAX',
        ADDITIVE = 'ADDITIVE',
        INCLUSIVE = 'INCLUSIVE',
    }
}

/**
 * Defines the fields that are included in the response body of a request to the CreateOrder endpoint.
 * One of `errors` or `order` is present in a given response (never both).
 */
export class CreateOrderResponse {
    /**
     * The newly created order.
     */
    order?: Order;
    /**
     * Any errors that occurred during the request.
     */
    errors?: Array<Error>;
}

/**
 * Defines the body parameters that can be included in a request to the CreateRefund endpoint.
 */
export class CreateRefundRequest {
    /**
     * A value you specify that uniquely identifies this refund among refunds you've created for the tender.
     * If you're unsure whether a particular refund succeeded, you can reattempt it with the same idempotency key without
     * worrying about duplicating the refund. See [Idempotency](/basics/api101/idempotency) for more information.
     */
    idempotency_key: string;
    /**
     * The ID of the tender to refund. A [`Transaction`](#type-transaction) has one or more `tenders` (i.e., methods of payment)
     * associated with it, and you refund each tender separately with the Connect API.
     */
    tender_id: string;
    /**
     * A description of the reason for the refund. Default value: `Refund via API`
     */
    reason?: string;
    /**
     * The amount of money to refund. Note that you specify the amount in the __smallest denomination of the applicable
     * currency__. For example, US dollar amounts are specified in cents.
     * See [Working with monetary amounts](#workingwithmonetaryamounts) for details.
     * This amount cannot exceed the amount that was originally charged to the tender that corresponds to `tender_id`.
     */
    amount_money: Money;
}

/**
 * Defines the fields that are included in the response body of a request to the CreateRefund endpoint.
 * One of `errors` or `refund` is present in a given response (never both).
 */
export class CreateRefundResponse {
    /**
     * Any errors that occurred during the request.
     */
    errors?: Array<Error>;
    /**
     * The created refund.
     */
    refund?: Refund;
}

/**
 * Represents a request to create a `Shift`.
 */
export class CreateShiftRequest {
    /**
     * Unique string value to insure the idempotency of the operation.
     */
    idempotency_key?: string;
    /**
     * The `Shift` to be created
     */
    shift: Shift;
}

/**
 * The response to the request to create a `Shift`. Contains the created `Shift` object. May contain a set of `Error`
 * objects if the request resulted in errors.
 */
export class CreateShiftResponse {
    /**
     * The `Shift` that was created on the request.
     */
    shift?: Shift;
    /**
     * Any errors that occurred during the request.
     */
    errors?: Array<Error>;
}

/**
 * Indicates the associated currency for an amount of money. Values correspond to [ISO
 * 4217](https://wikipedia.org/wiki/ISO_4217).
 */
export class Currency {}

/**
 * Represents one of a business's customers, which can have one or more cards on file associated with it.
 */
export class Customer {
    /**
     * The customer's unique ID.
     */
    id: string;
    /**
     * The time when the customer was created, in RFC 3339 format.
     */
    created_at: string;
    /**
     * The time when the customer was last updated, in RFC 3339 format.
     */
    updated_at: string;
    /**
     * The payment details of the customer's cards on file.
     */
    cards?: Array<Card>;
    /**
     * The customer's given (i.e., first) name.
     */
    given_name?: string;
    /**
     * The customer's family (i.e., last) name.
     */
    family_name?: string;
    /**
     * The customer's nickname.
     */
    nickname?: string;
    /**
     * The name of the customer's company.
     */
    company_name?: string;
    /**
     * The customer's email address.
     */
    email_address?: string;
    /**
     * The customer's physical address.
     */
    address?: Address;
    /**
     * The customer's phone number.
     */
    phone_number?: string;
    /**
     * The customer's birthday in RFC-3339 format. Year is optional, timezone and times are not allowed. Example:
     * `0000-09-01T00:00:00-00:00` for a birthday on September 1st. `1998-09-01T00:00:00-00:00` for a birthday on
     * September 1st 1998.
     */
    birthday?: string;
    /**
     * A second ID you can set to associate the customer with an entity in another system.
     */
    reference_id?: string;
    /**
     * A note to associate with the customer.
     */
    note?: string;
    /**
     * The customer's preferences.
     */
    preferences?: CustomerPreferences;
    /**
     * The groups the customer belongs to.
     */
    groups?: Array<CustomerGroupInfo>;
    /**
     * A creation source represents the method used to create the customer profile.
     * See [CustomerCreationSource](#type-customercreationsource) for possible values.
     */
    creation_source?: Customer.CreationSourceEnum;
}

export namespace Customer {
    export enum CreationSourceEnum {
        OTHER = 'OTHER',
        APPOINTMENTS = 'APPOINTMENTS',
        COUPON = 'COUPON',
        DELETION_RECOVERY = 'DELETION_RECOVERY',
        DIRECTORY = 'DIRECTORY',
        EGIFTING = 'EGIFTING',
        EMAIL_COLLECTION = 'EMAIL_COLLECTION',
        FEEDBACK = 'FEEDBACK',
        IMPORT = 'IMPORT',
        INVOICES = 'INVOICES',
        LOYALTY = 'LOYALTY',
        MARKETING = 'MARKETING',
        MERGE = 'MERGE',
        ONLINE_STORE = 'ONLINE_STORE',
        INSTANT_PROFILE = 'INSTANT_PROFILE',
        TERMINAL = 'TERMINAL',
        THIRDPARTY = 'THIRD_PARTY',
        THIRD_PARTY_IMPORT = 'THIRD_PARTY_IMPORT',
        UNMERGE_RECOVERY = 'UNMERGE_RECOVERY',
    }
}

/**
 * Indicates the method used to create the customer profile.
 */
export class CustomerCreationSource {}

/**
 * Creation source filter. If one or more creation sources are set, customer profiles are included in, or excluded
 * from, the result if they match at least one of the filter criteria.
 */
export class CustomerCreationSourceFilter {
    /**
     * The list of creation sources used as filtering criteria.
     * See [CustomerCreationSource](#type-customercreationsource) for possible values.
     */
    values?: Array<CustomerCreationSourceFilter.ValuesEnum>;
    /**
     * Indicates whether a customer profile matching the filter criteria should be included in the result or excluded
     * from the result. Default: `INCLUDE`.
     * See [CustomerInclusionExclusion](#type-customerinclusionexclusion) for possible values.
     */
    rule?: CustomerCreationSourceFilter.RuleEnum;
}

export namespace CustomerCreationSourceFilter {
    export enum ValuesEnum {
        OTHER = 'OTHER',
        APPOINTMENTS = 'APPOINTMENTS',
        COUPON = 'COUPON',
        DELETION_RECOVERY = 'DELETION_RECOVERY',
        DIRECTORY = 'DIRECTORY',
        EGIFTING = 'EGIFTING',
        EMAIL_COLLECTION = 'EMAIL_COLLECTION',
        FEEDBACK = 'FEEDBACK',
        IMPORT = 'IMPORT',
        INVOICES = 'INVOICES',
        LOYALTY = 'LOYALTY',
        MARKETING = 'MARKETING',
        MERGE = 'MERGE',
        ONLINE_STORE = 'ONLINE_STORE',
        INSTANT_PROFILE = 'INSTANT_PROFILE',
        TERMINAL = 'TERMINAL',
        THIRD_PARTY = 'THIRD_PARTY',
        THIRD_PARTY_IMPORT = 'THIRD_PARTY_IMPORT',
        UNMERGE_RECOVERY = 'UNMERGE_RECOVERY',
    }
    export enum RuleEnum {
        INCLUDE = 'INCLUDE',
        EXCLUDE = 'EXCLUDE',
    }
}

/**
 * Represents a set of [`CustomerQuery`](#type-customerquery) filters used to limit the set of Customers returned by
 * [`SearchCustomers`](#endpoint-customers-seachcustomers).
 */
export class CustomerFilter {
    /**
     * A filter to select customers based on their creation source.
     */
    creation_source?: CustomerCreationSourceFilter;
    /**
     * A filter to select customers based on when they were created.
     */
    created_at?: TimeRange;
    /**
     * A filter to select customers based on when they were updated.
     */
    updated_at?: TimeRange;
}

/**
 * Contains some brief information about a customer group with its identifier included.
 */
export class CustomerGroupInfo {
    /**
     * The ID of the customer group.
     */
    id: string;
    /**
     * The name of the customer group.
     */
    name: string;
}

/**
 * Indicates whether customers should be included in, or excluded from, the result set when they match the filtering criteria.
 */
export class CustomerInclusionExclusion {}

/**
 * Represents a particular customer's preferences.
 */
export class CustomerPreferences {
    /**
     * The customer has unsubscribed from receiving marketing campaign emails.
     */
    email_unsubscribed?: boolean;
}

/**
 * Represents a query (filtering and sorting criteria) used to search for customer profiles.
 */
export class CustomerQuery {
    /**
     * A list of filter criteria.
     */
    filter?: CustomerFilter;
    /**
     * Sort criteria for query results. The default sort behavior is to order customers alphabetically by `given_name`
     * and `last_name`.
     */
    sort?: CustomerSort;
}

/**
 * Indicates the field to use for sorting customer profiles. For example, by total money spent with the merchant or the
 * date of their first purchase.
 */
export class CustomerSort {
    /**
     * The field to sort the results on. It could be the total money spent at the merchant, the date of the first visit (etc).
     * See [CustomerSortField](#type-customersortfield) for possible values.
     */
    field?: CustomerSort.FieldEnum;
    /**
     * Indicates the order in which results should be displayed based on the value of the sort field.
     * String comparisons use standard alphabetic comparison to determine order.
     * Strings representing numbers are sorted as strings. See [SortOrder](#type-sortorder) for possible values.
     */
    order?: CustomerSort.OrderEnum;
}

export namespace CustomerSort {
    export enum FieldEnum {
        DEFAULT = 'DEFAULT',
        CREATED_AT = 'CREATED_AT',
    }
    export enum OrderEnum {
        DESC = 'DESC',
        ASC = 'ASC',
    }
}

/**
 * Indicates the sort criteria for a list of Customers.
 */
export class CustomerSortField {}

/**
 * A range defined by two dates. Used for filtering a query for Connect v2 objects that have date properties.
 */
export class DateRange {
    /**
     * String in `YYYY-MM-DD` format, e.g. `2017-10-31` per the ISO 8601 extended format for calendar dates.
     * The beginning of a date range (inclusive).
     */
    start_date?: string;
    /**
     * String in `YYYY-MM-DD` format, e.g. `2017-10-31` per the ISO 8601 extended format for calendar dates.
     * The end of a date range (inclusive)
     */
    end_date?: string;
}

/**
 * Indicates the specific day of the week.
 */
export class DayOfWeek {}

/**
 * A request to delete a `BreakType`
 */
export class DeleteBreakTypeRequest {}

/**
 * The response to a request to delete a `BreakType`. May contain a set  of `Error` objects if the request resulted in errors.
 */
export class DeleteBreakTypeResponse {
    /**
     * Any errors that occurred during the request.
     */
    errors?: Array<Error>;
}

export class DeleteCatalogObjectRequest {}

export class DeleteCatalogObjectResponse {
    /**
     * The set of [Error](#type-error)s encountered.
     */
    errors?: Array<Error>;
    /**
     * The IDs of all [CatalogObject](#type-catalogobject)s deleted by this request. Multiple IDs may be returned when
     * associated objects are also deleted, for example a [CatalogItemVariation](#type-catalogitemvariation) will be
     * deleted (and its ID included in this field) when its parent [CatalogItem](#type-catalogitem) is deleted.
     */
    deleted_object_ids?: Array<string>;
    /**
     * The database [timestamp](#workingwithdates) of this deletion in RFC 3339 format, e.g.,
     * \"2016-09-04T23:59:33.123Z\".
     */
    deleted_at?: string;
}

/**
 * Defines the fields that are included in requests to the DeleteCustomerCard endpoint.
 */
export class DeleteCustomerCardRequest {}

/**
 * Defines the fields that are included in the response body of a request to the DeleteCustomerCard endpoint.
 */
export class DeleteCustomerCardResponse {
    /**
     * Any errors that occurred during the request.
     */
    errors?: Array<Error>;
}

/**
 * Defines the fields that are included in a request to the DeleteCustomer endpoint.
 */
export class DeleteCustomerRequest {}

/**
 * Defines the fields that are included in the response body of a request to the DeleteCustomer endpoint.
 */
export class DeleteCustomerResponse {
    /**
     * Any errors that occurred during the request.
     */
    errors?: Array<Error>;
}

/**
 * A request to delete a `Shift`.
 */
export class DeleteShiftRequest {}

/**
 * The response to a request to delete a `Shift`. May contain a set of `Error` objects if the request resulted in errors.
 */
export class DeleteShiftResponse {
    /**
     * Any errors that occurred during the request.
     */
    errors?: Array<Error>;
}

export class Device {
    /**
     * The device's Square-issued ID.
     */
    id?: string;
    /**
     * The device's merchant-specified name.
     */
    name?: string;
}

/**
 * An employee created in the **Square Dashboard** account of a business. Used by the Labor API.
 */
export class Employee {
    /**
     * UUID for this `Employee`.
     */
    id?: string;
    /**
     * Given (first) name of the employee.
     */
    first_name?: string;
    /**
     * Family (last) name of the employee
     */
    last_name?: string;
    /**
     * Email of the employee
     */
    email?: string;
    /**
     * Phone number of the employee in E.164 format, i.e. "+12125554250"
     */
    phone_number?: string;
    /**
     * A list of location IDs where this employee has access.
     */
    location_ids?: Array<string>;
    /**
     * Specifies the status of the employee being fetched. See [EmployeeStatus](#type-employeestatus) for possible values.
     */
    status?: Employee.StatusEnum;
    /**
     * A read-only timestamp in RFC 3339 format.
     */
    created_at?: string;
    /**
     * A read-only timestamp in RFC 3339 format.
     */
    updated_at?: string;
}

export namespace Employee {
    export enum StatusEnum {
        ACTIVE = 'ACTIVE',
        INACTIVE = 'INACTIVE',
    }
}

/**
 * The status of the Employee being retrieved.
 */
export class EmployeeStatus {}

/**
 * The hourly wage rate that an employee will earn on a `Shift` for doing the job specified by the `title` property of this object.
 */
export class EmployeeWage {
    /**
     * UUID for this object.
     */
    id?: string;
    /**
     * The `Employee` that this wage is assigned to.
     */
    employee_id: string;
    /**
     * The job title that this wage relates to.
     */
    title?: string;
    /**
     * Can be a custom-set hourly wage or the calculated effective hourly wage based on annual wage and hours worked per
     * week.
     */
    hourly_rate?: Money;
}

/**
 * Indicates which high-level category of error has occurred during a request to the Connect API.
 */
export class ErrorCategory {}

/**
 * Indicates specific errors that can occur during a request to the Connect API.
 */
export class ErrorCode {}

/**
 * A request to GET a `BreakType` by ID
 */
export class GetBreakTypeRequest {}

/**
 * The response to a request to get a `BreakType`. Contains the requested `BreakType` objects.
 * May contain a set of `Error` objects if the request resulted in errors.
 */
export class GetBreakTypeResponse {
    /**
     * The response object.
     */
    break_type?: BreakType;
    /**
     * Any errors that occurred during the request.
     */
    errors?: Array<Error>;
}

/**
 * A request to get an `EmployeeWage`
 */
export class GetEmployeeWageRequest {}

/**
 * A response to a request to get an `EmployeeWage`. Contains the requested `EmployeeWage` objects.
 * May contain a set of `Error` objects if the request resulted in errors.
 */
export class GetEmployeeWageResponse {
    /**
     * The requested `EmployeeWage` object.
     */
    employee_wage?: EmployeeWage;
    /**
     * Any errors that occurred during the request.
     */
    errors?: Array<Error>;
}

/**
 * A request to get a `Shift` by ID.
 */
export class GetShiftRequest {}

/**
 * A response to request to get a `Shift`. Contains the requested `Shift` object.
 * May contain a set of `Error` objects if the request resulted in errors.
 */
export class GetShiftResponse {
    /**
     * The requested `Shift`.
     */
    shift?: Shift;
    /**
     * Any errors that occurred during the request.
     */
    errors?: Array<Error>;
}

/**
 * Represents a change in state or quantity of product inventory at a particular time and location.
 */
export class InventoryAdjustment {
    /**
     * A unique ID generated by Square for the [InventoryAdjustment](#type-inventoryadjustment).
     */
    id?: string;
    /**
     * An optional ID provided by the application to tie the [InventoryAdjustment](#type-inventoryadjustment) to an
     * external system.
     */
    reference_id?: string;
    /**
     * The [InventoryState](#type-inventorystate) of the related quantity of items before the adjustment.
     * See [InventoryState](#type-inventorystate) for possible values.
     */
    from_state?: InventoryAdjustment.FromStateEnum;
    /**
     * The [InventoryState](#type-inventorystate) of the related quantity of items after the adjustment.
     * See [InventoryState](#type-inventorystate) for possible values.
     */
    to_state?: InventoryAdjustment.ToStateEnum;
    /**
     * The Square ID of the [Location](#type-location) where the related quantity of items are being tracked.
     */
    location_id?: string;
    /**
     * The Square generated ID of the [CatalogObject](#type-catalogobject) being tracked.
     */
    catalog_object_id?: string;
    /**
     * The [CatalogObjectType](#type-catalogobjecttype) of the [CatalogObject](#type-catalogobject) being tracked.
     * Tracking is only supported for the `ITEM_VARIATION` type.
     */
    catalog_object_type?: string;
    /**
     * The number of items affected by the adjustment as a decimal string. Can support up to 5 digits after the decimal point.
     * @important: The Point of Sale app and Dashboard do not currently support decimal quantities. If a Point of Sale app
     * or Dashboard attempts to read a decimal quantity on inventory counts or adjustments, the quantity will be rounded down
     * to the nearest integer. For example, `2.5` will become `2`, and `-2.5` will become `-3`.
     * Read [Decimal Quantities (BETA)](/more-apis/inventory/overview#decimal-quantities-beta) for more information.
     */
    quantity?: string;
    /**
     * The read-only total price paid for goods associated with the adjustment.
     * Present if and only if `to_state` is `SOLD`. Always non-negative.
     */
    total_price_money?: Money;
    /**
     * A client-generated timestamp in RFC 3339 format that indicates when the adjustment took place. For write actions,
     * the `occurred_at` timestamp cannot be older than 24 hours or in the future relative to the time of the request.
     */
    occurred_at?: string;
    /**
     * A read-only timestamp in RFC 3339 format that indicates when Square received the adjustment.
     */
    created_at?: string;
    /**
     * Read-only information about the application that caused the inventory adjustment.
     */
    source?: SourceApplication;
    /**
     * The Square ID of the [Employee](#type-employee) responsible for the inventory adjustment.
     */
    employee_id?: string;
    /**
     * The read-only Square ID of the [Transaction][#type-transaction] that caused the adjustment. Only relevant for
     * payment-related state transitions.
     */
    transaction_id?: string;
    /**
     * The read-only Square ID of the [Refund][#type-refund] that caused the adjustment. Only relevant for
     * refund-related state transitions.
     */
    refund_id?: string;
    /**
     * The read-only Square ID of the purchase order that caused the adjustment. Only relevant for state transitions
     * from the Square for Retail app.
     */
    purchase_order_id?: string;
    /**
     * The read-only Square ID of the Square goods receipt that caused the adjustment. Only relevant for state
     * transitions from the Square for Retail app.
     */
    goods_receipt_id?: string;
}

export namespace InventoryAdjustment {
    export enum FromStateEnum {
        CUSTOM = 'CUSTOM',
        IN_STOCK = 'IN_STOCK',
        SOLD = 'SOLD',
        RETURNED_BY_CUSTOMER = 'RETURNED_BY_CUSTOMER',
        RESERVED_FOR_SALE = 'RESERVED_FOR_SALE',
        SOLD_ONLINE = 'SOLD_ONLINE',
        ORDERED_FROM_VENDOR = 'ORDERED_FROM_VENDOR',
        RECEIVED_FROM_VENDOR = 'RECEIVED_FROM_VENDOR',
        IN_TRANSIT_TO = 'IN_TRANSIT_TO',
        NONE = 'NONE',
        WASTE = 'WASTE',
        UNLINKED_RETURN = 'UNLINKED_RETURN',
    }
    export enum ToStateEnum {
        CUSTOM = 'CUSTOM',
        IN_STOCK = 'IN_STOCK',
        SOLD = 'SOLD',
        RETURNED_BY_CUSTOMER = 'RETURNED_BY_CUSTOMER',
        RESERVED_FOR_SALE = 'RESERVED_FOR_SALE',
        SOLD_ONLINE = 'SOLD_ONLINE',
        ORDERED_FROM_VENDOR = 'ORDERED_FROM_VENDOR',
        RECEIVED_FROM_VENDOR = 'RECEIVED_FROM_VENDOR',
        IN_TRANSIT_TO = 'IN_TRANSIT_TO',
        NONE = 'NONE',
        WASTE = 'WASTE',
        UNLINKED_RETURN = 'UNLINKED_RETURN',
    }
}

/**
 * Indicates whether Square should alert the merchant when the inventory quantity of a
 * [CatalogItemVariation](#type-catalogitemvariation) is low.
 */
export class InventoryAlertType {}

/**
 * Represents a single physical count, inventory, adjustment, or transfer that is part of the history of inventory
 * changes for a particular [CatalogObject](#type-catalogobject).
 */
export class InventoryChange {
    /**
     * Indicates how the inventory change was applied.
     * See [InventoryChangeType](#type-inventorychangetype) for possible values.
     */
    type?: InventoryChange.TypeEnum;
    /**
     * Contains details about the physical count when `type` is `PHYSICAL_COUNT` and unset for all other types.
     */
    physical_count?: InventoryPhysicalCount;
    /**
     * Contains details about the inventory adjustment when `type` is `ADJUSTMENT` and unset for all other types.
     */
    adjustment?: InventoryAdjustment;
    /**
     * Contains details about the inventory transfer when `type` is `TRANSFER` and unset for all other types.
     */
    transfer?: InventoryTransfer;
}

export namespace InventoryChange {
    export enum TypeEnum {
        PHYSICAL_COUNT = 'PHYSICAL_COUNT',
        ADJUSTMENT = 'ADJUSTMENT',
        TRANSFER = 'TRANSFER',
    }
}

/**
 * Indicates how the inventory change was applied to a tracked quantity of items.
 */
export class InventoryChangeType {}

/**
 * Represents Square's estimated quantity of items in a particular state at a particular location based on the known history
 * of physical counts and inventory adjustments.
 */
export class InventoryCount {
    /**
     * The Square generated ID of the [CatalogObject](#type-catalogobject) being tracked.
     */
    catalog_object_id?: string;
    /**
     * The [CatalogObjectType](#type-catalogobjecttype) of the [CatalogObject](#type-catalogobject) being tracked.
     * Tracking is only supported for the `ITEM_VARIATION` type.
     */
    catalog_object_type?: string;
    /**
     * The current [InventoryState](#type-inventorystate) for the related quantity of items.
     * See [InventoryState](#type-inventorystate) for possible values.
     */
    state?: InventoryCount.StateEnum;
    /**
     * The Square ID of the [Location](#type-location) where the related quantity of items are being tracked.
     */
    location_id?: string;
    /**
     * The number of items in the count as a decimal string. Can support up to 5 digits after the decimal point.
     * @important The Point of Sale app and Dashboard do not currently support decimal quantities.
     * If a Point of Sale app or Dashboard attempts to read a decimal quantity on inventory counts or adjustments,
     * the quantity will be rounded down to the nearest integer. For example, `2.5` will become `2`, and `-2.5` will become `-3`.
     * Read [Decimal Quantities (BETA)](/more-apis/inventory/overview#decimal-quantities-beta) for more information.
     */
    quantity?: string;
    /**
     * A read-only timestamp in RFC 3339 format that indicates when Square received the most recent physical count or
     * adjustment that had an affect on the estimated count.
     */
    calculated_at?: string;
}

export namespace InventoryCount {
    export enum StateEnum {
        CUSTOM = 'CUSTOM',
        IN_STOCK = 'IN_STOCK',
        SOLD = 'SOLD',
        RETURNED_BY_CUSTOMER = 'RETURNED_BY_CUSTOMER',
        RESERVED_FOR_SALE = 'RESERVED_FOR_SALE',
        SOLD_ONLINE = 'SOLD_ONLINE',
        ORDERED_FROM_VENDOR = 'ORDERED_FROM_VENDOR',
        RECEIVED_FROM_VENDOR = 'RECEIVED_FROM_VENDOR',
        IN_TRANSIT_TO = 'IN_TRANSIT_TO',
        NONE = 'NONE',
        WASTE = 'WASTE',
        UNLINKED_RETURN = 'UNLINKED_RETURN',
    }
}

/**
 * Represents the quantity of an item variation that is physically present at a specific location, verified by a seller or
 * a seller's employee. For example, a physical count might come from an employee counting the item variations on hand or
 * from syncing with an external system.
 */
export class InventoryPhysicalCount {
    /**
     * A unique ID generated by Square for the [InventoryPhysicalCount](#type-inventoryphysicalcount).
     */
    id?: string;
    /**
     * An optional ID provided by the application to tie the [InventoryPhysicalCount](#type-inventoryphysicalcount) to
     * an external system.
     */
    reference_id?: string;
    /**
     * The Square generated ID of the [CatalogObject](#type-catalogobject) being tracked.
     */
    catalog_object_id?: string;
    /**
     * The [CatalogObjectType](#type-catalogobjecttype) of the [CatalogObject](#type-catalogobject) being tracked.
     * Tracking is only supported for the `ITEM_VARIATION` type.
     */
    catalog_object_type?: string;
    /**
     * The current [InventoryState](#type-inventorystate) for the related quantity of items.
     * See [InventoryState](#type-inventorystate) for possible values.
     */
    state?: InventoryPhysicalCount.StateEnum;
    /**
     * The Square ID of the [Location](#type-location) where the related quantity of items are being tracked.
     */
    location_id?: string;
    /**
     * The number of items affected by the physical count as a decimal string. Can support up to 5 digits after the decimal point.
     * @important The Point of Sale app and Dashboard do not currently support decimal quantities.
     * If a Point of Sale app or Dashboard attempts to read a decimal quantity on inventory counts or adjustments,
     * the quantity will be rounded down to the nearest integer. For example, `2.5` will become `2`, and `-2.5` will become `-3`.
     * Read [Decimal Quantities (BETA)](/more-apis/inventory/overview#decimal-quantities-beta) for more information.
     */
    quantity?: string;
    /**
     * Read-only information about the application that submitted the physical count.
     */
    source?: SourceApplication;
    /**
     * The Square ID of the [Employee](#type-employee) responsible for the physical count.
     */
    employee_id?: string;
    /**
     * A client-generated timestamp in RFC 3339 format that indicates when the physical count took place. For write actions,
     * the `occurred_at` timestamp cannot be older than 24 hours or in the future relative to the time of the request.
     */
    occurred_at?: string;
    /**
     * A read-only timestamp in RFC 3339 format that indicates when Square received the physical count.
     */
    created_at?: string;
}

export namespace InventoryPhysicalCount {
    export enum StateEnum {
        CUSTOM = 'CUSTOM',
        IN_STOCK = 'IN_STOCK',
        SOLD = 'SOLD',
        RETURNED_BY_CUSTOMER = 'RETURNED_BY_CUSTOMER',
        RESERVED_FOR_SALE = 'RESERVED_FOR_SALE',
        SOLD_ONLINE = 'SOLD_ONLINE',
        ORDERED_FROM_VENDOR = 'ORDERED_FROM_VENDOR',
        RECEIVED_FROM_VENDOR = 'RECEIVED_FROM_VENDOR',
        IN_TRANSIT_TO = 'IN_TRANSIT_TO',
        NONE = 'NONE',
        WASTE = 'WASTE',
        UNLINKED_RETURN = 'UNLINKED_RETURN',
    }
}

/**
 * Indicates the state of a tracked item quantity in the lifecycle of goods.
 */
export class InventoryState {}

/**
 * Represents the transfer of a quantity of product inventory at a particular time from one location to another.
 */
export class InventoryTransfer {
    /**
     * A unique ID generated by Square for the [InventoryTransfer](#type-inventorytransfer).
     */
    id?: string;
    /**
     * An optional ID provided by the application to tie the [InventoryTransfer](#type-inventorytransfer) to an external system.
     */
    reference_id?: string;
    /**
     * The [InventoryState](#type-inventorystate) for the quantity of items being transfered.
     * See [InventoryState](#type-inventorystate) for possible values.
     */
    state?: InventoryTransfer.StateEnum;
    /**
     * The Square ID of the [Location](#type-location) where the related quantity of items were tracked before the transfer.
     */
    from_location_id?: string;
    /**
     * The Square ID of the [Location](#type-location) where the related quantity of items were tracked after the transfer.
     */
    to_location_id?: string;
    /**
     * The Square generated ID of the [CatalogObject](#type-catalogobject) being tracked.
     */
    catalog_object_id?: string;
    /**
     * The [CatalogObjectType](#type-catalogobjecttype) of the [CatalogObject](#type-catalogobject) being tracked.
     * Tracking is only supported for the `ITEM_VARIATION` type.
     */
    catalog_object_type?: string;
    /**
     * The number of items affected by the transfer as a decimal string. Can support up to 5 digits after the decimal point.
     * @important The Point of Sale app and Dashboard do not currently support decimal quantities.
     * If a Point of Sale app or Dashboard attempts to read a decimal quantity on inventory counts or adjustments,
     * the quantity will be rounded down to the nearest integer. For example, `2.5` will become `2`, and `-2.5` will become `-3`.
     * Read [Decimal Quantities (BETA)](/more-apis/inventory/overview#decimal-quantities-beta) for more information.
     */
    quantity?: string;
    /**
     * A client-generated timestamp in RFC 3339 format that indicates when the transfer took place. For write actions,
     * the `occurred_at` timestamp cannot be older than 24 hours or in the future relative to the time of the request.
     */
    occurred_at?: string;
    /**
     * A read-only timestamp in RFC 3339 format that indicates when Square received the transfer request.
     */
    created_at?: string;
    /**
     * Read-only information about the application that initiated the inventory transfer.
     */
    source?: SourceApplication;
    /**
     * The Square ID of the [Employee](#type-employee) responsible for the inventory transfer.
     */
    employee_id?: string;
}

export namespace InventoryTransfer {
    export enum StateEnum {
        CUSTOM = 'CUSTOM',
        IN_STOCK = 'IN_STOCK',
        SOLD = 'SOLD',
        RETURNED_BY_CUSTOMER = 'RETURNED_BY_CUSTOMER',
        RESERVED_FOR_SALE = 'RESERVED_FOR_SALE',
        SOLD_ONLINE = 'SOLD_ONLINE',
        ORDERED_FROM_VENDOR = 'ORDERED_FROM_VENDOR',
        RECEIVED_FROM_VENDOR = 'RECEIVED_FROM_VENDOR',
        IN_TRANSIT_TO = 'IN_TRANSIT_TO',
        NONE = 'NONE',
        WASTE = 'WASTE',
        UNLINKED_RETURN = 'UNLINKED_RETURN',
    }
}

/**
 * Price and inventory alerting overrides for a [CatalogItemVariation](#type-catalogitemvariation) at a specific
 * [location](#type-location).
 */
export class ItemVariationLocationOverrides {
    /**
     * The ID of the [location](#type-location).
     */
    location_id?: string;
    /**
     * The price of the [CatalogItemVariation](#type-catalogitemvariation) at the given [location](#type-location), or
     * blank for variable pricing.
     */
    price_money?: Money;
    /**
     * The pricing type (fixed or variable) for the [CatalogItemVariation](#type-catalogitemvariation) at the given
     * [location](#type-location). See [CatalogPricingType](#type-catalogpricingtype) for possible values.
     */
    pricing_type?: ItemVariationLocationOverrides.PricingTypeEnum;
    /**
     * If `true`, inventory tracking is active for the [CatalogItemVariation](#type-catalogitemvariation) at this
     * [location](#type-location).
     */
    track_inventory?: boolean;
    /**
     * Indicates whether the [CatalogItemVariation](#type-catalogitemvariation) displays an alert when its inventory
     * quantity is less than or equal to its `inventory_alert_threshold`.
     * See [InventoryAlertType](#type-inventoryalerttype) for possible values.
     */
    inventory_alert_type?: ItemVariationLocationOverrides.InventoryAlertTypeEnum;
    /**
     * If the inventory quantity for the variation is less than or equal to this value and `inventory_alert_type` is
     * `LOW_QUANTITY`, the variation displays an alert in the merchant dashboard. This value is always an integer.
     */
    inventory_alert_threshold?: number;
}

export namespace ItemVariationLocationOverrides {
    export enum PricingTypeEnum {
        FIXED_PRICING = 'FIXED_PRICING',
        VARIABLE_PRICING = 'VARIABLE_PRICING',
    }
    export enum InventoryAlertTypeEnum {
        NONE = 'NONE',
        LOW_QUANTITY = 'LOW_QUANTITY',
    }
}

/**
 * Defines the query parameters that can be included in a request to the ListAdditionalRecipientReceivableRefunds endpoint.
 */
export class ListAdditionalRecipientReceivableRefundsRequest {
    /**
     * The beginning of the requested reporting period, in RFC 3339 format.
     * See [Date ranges](#dateranges) for details on date inclusivity/exclusivity. Default value: The current time minus one year.
     */
    begin_time?: string;
    /**
     * The end of the requested reporting period, in RFC 3339 format.
     * See [Date ranges](#dateranges) for details on date inclusivity/exclusivity. Default value: The current time.
     */
    end_time?: string;
    /**
     * The order in which results are listed in the response (`ASC` for oldest first, `DESC` for newest first).
     * Default value: `DESC` See [SortOrder](#type-sortorder) for possible values.
     */
    sort_order?: ListAdditionalRecipientReceivableRefundsRequest.SortOrderEnum;
    /**
     * A pagination cursor returned by a previous call to this endpoint. Provide this to retrieve the next set of
     * results for your original query. See [Pagination](/basics/api101/pagination) for more information.
     */
    cursor?: string;
}

export namespace ListAdditionalRecipientReceivableRefundsRequest {
    export enum SortOrderEnum {
        DESC = 'DESC',
        ASC = 'ASC',
    }
}

/**
 * Defines the fields that are included in the response body of a request to the ListAdditionalRecipientReceivableRefunds endpoint.
 * One of `errors` or `additional_recipient_receivable_refunds` is present in a given response (never both).
 */
export class ListAdditionalRecipientReceivableRefundsResponse {
    /**
     * Any errors that occurred during the request.
     */
    errors?: Array<Error>;
    /**
     * An array of AdditionalRecipientReceivableRefunds that match your query.
     */
    receivable_refunds?: Array<AdditionalRecipientReceivableRefund>;
    /**
     * A pagination cursor for retrieving the next set of results, if any remain. Provide this value as the `cursor`
     * parameter in a subsequent request to this endpoint. See [Pagination](/basics/api101/pagination) for more information.
     */
    cursor?: string;
}

/**
 * Defines the query parameters that can be included in a request to the ListAdditionalRecipientReceivables endpoint.
 */
export class ListAdditionalRecipientReceivablesRequest {
    /**
     * The beginning of the requested reporting period, in RFC 3339 format. See [Date ranges](#dateranges) for details
     * on date inclusivity/exclusivity. Default value: The current time minus one year.
     */
    begin_time?: string;
    /**
     * The end of the requested reporting period, in RFC 3339 format.
     * See [Date ranges](#dateranges) for details on date inclusivity/exclusivity. Default value: The current time.
     */
    end_time?: string;
    /**
     * The order in which results are listed in the response (`ASC` for oldest first, `DESC` for newest first).
     * Default value: `DESC` See [SortOrder](#type-sortorder) for possible values.
     */
    sort_order?: ListAdditionalRecipientReceivablesRequest.SortOrderEnum;
    /**
     * A pagination cursor returned by a previous call to this endpoint. Provide this to retrieve the next set of
     * results for your original query. See [Pagination](/basics/api101/pagination) for more information.
     */
    cursor?: string;
}

export namespace ListAdditionalRecipientReceivablesRequest {
    export enum SortOrderEnum {
        DESC = 'DESC',
        ASC = 'ASC',
    }
}

/**
 * Defines the fields that are included in the response body of a request to the ListAdditionalRecipientReceivables endpoint.
 * One of `errors` or `additional_recipient_receivables` is present in a given response (never both).
 */
export class ListAdditionalRecipientReceivablesResponse {
    /**
     * Any errors that occurred during the request.
     */
    errors?: Array<Error>;
    /**
     * An array of AdditionalRecipientReceivables that match your query.
     */
    receivables?: Array<AdditionalRecipientReceivable>;
    /**
     * A pagination cursor for retrieving the next set of results, if any remain. Provide this value as the `cursor`
     * parameter in a subsequent request to this endpoint.
     * See [Pagination](/basics/api101/pagination) for more information.
     */
    cursor?: string;
}

/**
 * A request for a filtered set of `BreakType` objects
 */
export class ListBreakTypesRequest {
    /**
     * Filter Break Types returned to only those that are associated with the specified location.
     */
    location_id?: string;
    /**
     * Maximum number of Break Types to return per page. Can range between 1 and 200. The default is the maximum at 200.
     */
    limit?: number;
    /**
     * Pointer to the next page of Break Type results to fetch.
     */
    cursor?: string;
}

/**
 * The response to a request for a set of `BreakTypes`. Contains the requested `BreakType` objects.
 * May contain a set of `Error` objects if the request resulted in errors.
 */
export class ListBreakTypesResponse {
    /**
     *  A page of `BreakType` results.
     */
    break_types?: Array<BreakType>;
    /**
     * Value supplied in the subsequent request to fetch the next next page of Break Type results.
     */
    cursor?: string;
    /**
     * Any errors that occurred during the request.
     */
    errors?: Array<Error>;
}

export class ListCatalogRequest {
    /**
     * The pagination cursor returned in the previous response. Leave unset for an initial request.
     * See [Pagination](/basics/api101/pagination) for more information.
     */
    cursor?: string;
    /**
     * An optional case-insensitive, comma-separated list of object types to retrieve, for example `ITEM,ITEM_VARIATION,CATEGORY,IMAGE`.
     * The legal values are taken from the [CatalogObjectType](#type-catalogobjecttype) enumeration, namely:
     * `ITEM`, `ITEM_VARIATION`, `CATEGORY`, `DISCOUNT`, `TAX`, `MODIFIER`, `MODIFIER_LIST`, or `IMAGE`.
     */
    types?: string;
}

export class ListCatalogResponse {
    /**
     * The set of [Error](#type-error)s encountered.
     */
    errors?: Array<Error>;
    /**
     * The pagination cursor to be used in a subsequent request. If unset, this is the final response.
     * See [Pagination](/basics/api101/pagination) for more information.
     */
    cursor?: string;
    /**
     * The [CatalogObject](#type-catalogobject)s returned.
     */
    objects?: Array<CatalogObject>;
}

/**
 * Defines the query parameters that can be provided in a request to the ListCustomers endpoint.
 */
export class ListCustomersRequest {
    /**
     * A pagination cursor returned by a previous call to this endpoint. Provide this to retrieve the next set of
     * results for your original query. See [Pagination](/basics/api101/pagination) for more information.
     */
    cursor?: string;
    /**
     * Indicates how Customers should be sorted. Default: `DEFAULT`.
     * See [CustomerSortField](#type-customersortfield) for possible values.
     */
    sort_field?: ListCustomersRequest.SortFieldEnum;
    /**
     * Indicates whether Customers should be sorted in ascending (`ASC`) or descending (`DESC`) order. Default: `ASC`.
     * See [SortOrder](#type-sortorder) for possible values.
     */
    sort_order?: ListCustomersRequest.SortOrderEnum;
}

export namespace ListCustomersRequest {
    export enum SortFieldEnum {
        DEFAULT = 'DEFAULT',
        CREATED_AT = 'CREATED_AT',
    }
    export enum SortOrderEnum {
        DESC = 'DESC',
        ASC = 'ASC',
    }
}

/**
 * Defines the fields that are included in the response body of a request to the ListCustomers endpoint.
 * One of `errors` or `customers` is present in a given response (never both).
 */
export class ListCustomersResponse {
    /**
     * Any errors that occurred during the request.
     */
    errors?: Array<Error>;
    /**
     * An array of `Customer` objects that match your query.
     */
    customers?: Array<Customer>;
    /**
     * A pagination cursor to retrieve the next set of results for your original query to the endpoint.
     * This value is present only if the request succeeded and additional results are available.
     * See [Pagination](/basics/api101/pagination) for more information.
     */
    cursor?: string;
}

/**
 * A request for a set of `EmployeeWage` objects
 */
export class ListEmployeeWagesRequest {
    /**
     * Filter wages returned to only those that are associated with the specified employee.
     */
    employee_id?: string;
    /**
     * Maximum number of Employee Wages to return per page. Can range between 1 and 200. The default is the maximum at
     * 200.
     */
    limit?: number;
    /**
     * Pointer to the next page of Employee Wage results to fetch.
     */
    cursor?: string;
}

/**
 * The response to a request for a set of `EmployeeWage` objects. Contains  a set of `EmployeeWage`.
 */
export class ListEmployeeWagesResponse {
    /**
     * A page of Employee Wage results.
     */
    employee_wages?: Array<EmployeeWage>;
    /**
     * Value supplied in the subsequent request to fetch the next next page of Employee Wage results.
     */
    cursor?: string;
    /**
     * Any errors that occurred during the request.
     */
    errors?: Array<Error>;
}

/**
 * Retrieve a paged-list of employees for a Square account
 */
export class ListEmployeesRequest {
    /**
     * Filter employees returned to only those that are associated with the specified location.
     */
    location_id?: string;
    /**
     * Specifies the EmployeeStatus to filter the employee by. See [EmployeeStatus](#type-employeestatus) for possible values.
     */
    status?: ListEmployeesRequest.StatusEnum;
    /**
     * The number of employees to be returned on each page.
     */
    limit?: number;
    /**
     * The token required to retrieve the specified page of results.
     */
    cursor?: string;
}

export namespace ListEmployeesRequest {
    export enum StatusEnum {
        ACTIVE = 'ACTIVE',
        INACTIVE = 'INACTIVE',
    }
}

/**
 * Defines the fields that are included in the response body of a request to the ListEmployees endpoint.
 * One of `errors` or `employees` is present in a given response (never both).
 */
export class ListEmployeesResponse {
    /**
     * List of employees returned from the request.
     */
    employees?: Array<Employee>;
    /**
     * The token to be used to retrieve the next page of results.
     */
    cursor?: string;
    /**
     * Any errors that occurred during the request.
     */
    errors?: Array<Error>;
}

/**
 * Defines the fields that are included in requests to the ListLocations endpoint.
 */
export class ListLocationsRequest {}

/**
 * Defines the fields that are included in the response body of a request to the ListLocations endpoint.
 * One of `errors` or `locations` is present in a given response (never both).
 */
export class ListLocationsResponse {
    /**
     * Any errors that occurred during the request.
     */
    errors?: Array<Error>;
    /**
     * The business's locations.
     */
    locations?: Array<Location>;
}

/**
 * Defines the query parameters that can be included in a request to the ListRefunds endpoint.
 */
export class ListRefundsRequest {
    /**
     * The beginning of the requested reporting period, in RFC 3339 format. See [Date ranges](#dateranges) for details
     * on date inclusivity/exclusivity. Default value: The current time minus one year.
     */
    begin_time?: string;
    /**
     * The end of the requested reporting period, in RFC 3339 format.
     * See [Date ranges](#dateranges) for details on date inclusivity/exclusivity. Default value: The current time.
     */
    end_time?: string;
    /**
     * The order in which results are listed in the response (`ASC` for oldest first, `DESC` for newest first).
     * Default value: `DESC` See [SortOrder](#type-sortorder) for possible values
     */
    sort_order?: ListRefundsRequest.SortOrderEnum;
    /**
     * A pagination cursor returned by a previous call to this endpoint. Provide this to retrieve the next set of
     * results for your original query. See [Pagination](/basics/api101/pagination) for more information.
     */
    cursor?: string;
}

export namespace ListRefundsRequest {
    export enum SortOrderEnum {
        DESC = 'DESC',
        ASC = 'ASC',
    }
}

/**
 * Defines the fields that are included in the response body of a request to the ListRefunds endpoint.
 * One of `errors` or `refunds` is present in a given response (never both).
 */
export class ListRefundsResponse {
    /**
     * Any errors that occurred during the request.
     */
    errors?: Array<Error>;
    /**
     * An array of refunds that match your query.
     */
    refunds?: Array<Refund>;
    /**
     * A pagination cursor for retrieving the next set of results, if any remain.
     * Provide this value as the `cursor` parameter in a subsequent request to this endpoint.
     * See [Pagination](/basics/api101/pagination) for more information.
     */
    cursor?: string;
}

/**
 * Defines the query parameters that can be included in a request to the ListTransactions endpoint.
 */
export class ListTransactionsRequest {
    /**
     * The beginning of the requested reporting period, in RFC 3339 format. See [Date ranges](#dateranges) for details
     * on date inclusivity/exclusivity. Default value: The current time minus one year.
     */
    begin_time?: string;
    /**
     * The end of the requested reporting period, in RFC 3339 format.
     * See [Date ranges](#dateranges) for details on date inclusivity/exclusivity. Default value: The current time.
     */
    end_time?: string;
    /**
     * The order in which results are listed in the response (`ASC` for oldest first, `DESC` for newest first).
     * Default value: `DESC` See [SortOrder](#type-sortorder) for possible values.
     */
    sort_order?: ListTransactionsRequest.SortOrderEnum;
    /**
     * A pagination cursor returned by a previous call to this endpoint. Provide this to retrieve the next set of
     * results for your original query. See [Pagination](/basics/api101/pagination) for more information.
     */
    cursor?: string;
}

export namespace ListTransactionsRequest {
    export enum SortOrderEnum {
        DESC = 'DESC',
        ASC = 'ASC',
    }
}

/**
 * Defines the fields that are included in the response body of a request to the ListTransactions endpoint.
 * One of `errors` or `transactions` is present in a given response (never both).
 */
export class ListTransactionsResponse {
    /**
     * Any errors that occurred during the request.
     */
    errors?: Array<Error>;
    /**
     * An array of transactions that match your query.
     */
    transactions?: Array<Transaction>;
    /**
     * A pagination cursor for retrieving the next set of results, if any remain.
     * Provide this value as the `cursor` parameter in a subsequent request to this endpoint.
     * See [Pagination](/basics/api101/pagination) for more information.
     */
    cursor?: string;
}

/**
 * A request for a set of `WorkweekConfig` objects
 */
export class ListWorkweekConfigsRequest {
    /**
     * Maximum number of Workweek Configs to return per page.
     */
    limit?: number;
    /**
     * Pointer to the next page of Workweek Config results to fetch.
     */
    cursor?: string;
}

/**
 * The response to a request for a set of `WorkweekConfig` objects. Contains the requested `WorkweekConfig` objects.
 * May contain a set of `Error` objects if the request resulted in errors.
 */
export class ListWorkweekConfigsResponse {
    /**
     * A page of Employee Wage results.
     */
    workweek_configs?: Array<WorkweekConfig>;
    /**
     * Value supplied in the subsequent request to fetch the next page of Employee Wage results.
     */
    cursor?: string;
    /**
     * Any errors that occurred during the request.
     */
    errors?: Array<Error>;
}

/**
 * Represents one of a business's locations.
 */
export class Location {
    /**
     * The location's unique ID.
     */
    id?: string;
    /**
     * The location's name. Location names are set by the account owner and displayed in the dashboard as the location's nickname.
     */
    name?: string;
    /**
     * The location's physical address.
     */
    address?: Address;
    /**
     * The [IANA Timezone Database](https://www.iana.org/time-zones) identifier for the location's timezone.
     */
    timezone?: string;
    /**
     * Indicates which Square features are enabled for the location.
     * See [LocationCapability](#type-locationcapability) for possible values.
     */
    capabilities?: Array<Location.CapabilitiesEnum>;
    /**
     * The location's status. See [LocationStatus](#type-locationstatus) for possible values.
     */
    status?: Location.StatusEnum;
    /**
     * The time when the location was created, in RFC 3339 format.
     */
    created_at?: string;
    /**
     * The identifier of the merchant that owns the location.
     */
    merchant_id?: string;
    /**
     * The location's country, in ISO 3166-1-alpha-2 format. See [Country](#type-country) for possible values.
     */
    country?: Location.CountryEnum;
    /**
     * The language associated with the location in [BCP 47 format](https://tools.ietf.org/html/bcp47#appendix-A).
     */
    language_code?: string;
    /**
     * The currency used for all transactions at this location, specified in __ISO 4217 format__.
     * For example, the currency for a location processing transactions in the United States is 'USD'.
     * See [Currency](#type-currency) for possible values.
     */
    currency?: Location.CurrencyEnum;
    /**
     * The location's phone_number.
     */
    phone_number?: string;
    /**
     * The location's business_name which is shown to its customers.
     * For example, this is the name printed on its customer's receipts.
     */
    business_name?: string;
    /**
     * The location's type, as set by the account owner in the Square dashboard.
     * Typically used to indicate whether or not the location object represents a physical space like a building or mall space.
     * See [LocationType](#type-locationtype) for possible values.
     */
    type?: Location.TypeEnum;
    /**
     * The location's website, as set by the account owner in the Square dashboard.
     * Default: none; only exists if explicitly set.
     */
    website_url?: string;
    /**
     * The hours of operation for a business location. Default: none; only exists if explicitly set.
     */
    business_hours?: BusinessHours;
}

export namespace Location {
    export enum CapabilitiesEnum {
        CREDIT_CARD_PROCESSING = 'CREDIT_CARD_PROCESSING',
    }
    export enum StatusEnum {
        ACTIVE = 'ACTIVE',
        INACTIVE = 'INACTIVE',
    }
    export enum CountryEnum {
        ZZ = 'ZZ',
        AD = 'AD',
        AE = 'AE',
        AF = 'AF',
        AG = 'AG',
        AI = 'AI',
        AL = 'AL',
        AM = 'AM',
        AO = 'AO',
        AQ = 'AQ',
        AR = 'AR',
        AS = 'AS',
        AT = 'AT',
        AU = 'AU',
        AW = 'AW',
        AX = 'AX',
        AZ = 'AZ',
        BA = 'BA',
        BB = 'BB',
        BD = 'BD',
        BE = 'BE',
        BF = 'BF',
        BG = 'BG',
        BH = 'BH',
        BI = 'BI',
        BJ = 'BJ',
        BL = 'BL',
        BM = 'BM',
        BN = 'BN',
        BO = 'BO',
        BQ = 'BQ',
        BR = 'BR',
        BS = 'BS',
        BT = 'BT',
        BV = 'BV',
        BW = 'BW',
        BY = 'BY',
        BZ = 'BZ',
        CA = 'CA',
        CC = 'CC',
        CD = 'CD',
        CF = 'CF',
        CG = 'CG',
        CH = 'CH',
        CI = 'CI',
        CK = 'CK',
        CL = 'CL',
        CM = 'CM',
        CN = 'CN',
        CO = 'CO',
        CR = 'CR',
        CU = 'CU',
        CV = 'CV',
        CW = 'CW',
        CX = 'CX',
        CY = 'CY',
        CZ = 'CZ',
        DE = 'DE',
        DJ = 'DJ',
        DK = 'DK',
        DM = 'DM',
        DO = 'DO',
        DZ = 'DZ',
        EC = 'EC',
        EE = 'EE',
        EG = 'EG',
        EH = 'EH',
        ER = 'ER',
        ES = 'ES',
        ET = 'ET',
        FI = 'FI',
        FJ = 'FJ',
        FK = 'FK',
        FM = 'FM',
        FO = 'FO',
        FR = 'FR',
        GA = 'GA',
        GB = 'GB',
        GD = 'GD',
        GE = 'GE',
        GF = 'GF',
        GG = 'GG',
        GH = 'GH',
        GI = 'GI',
        GL = 'GL',
        GM = 'GM',
        GN = 'GN',
        GP = 'GP',
        GQ = 'GQ',
        GR = 'GR',
        GS = 'GS',
        GT = 'GT',
        GU = 'GU',
        GW = 'GW',
        GY = 'GY',
        HK = 'HK',
        HM = 'HM',
        HN = 'HN',
        HR = 'HR',
        HT = 'HT',
        HU = 'HU',
        ID = 'ID',
        IE = 'IE',
        IL = 'IL',
        IM = 'IM',
        IN = 'IN',
        IO = 'IO',
        IQ = 'IQ',
        IR = 'IR',
        IS = 'IS',
        IT = 'IT',
        JE = 'JE',
        JM = 'JM',
        JO = 'JO',
        JP = 'JP',
        KE = 'KE',
        KG = 'KG',
        KH = 'KH',
        KI = 'KI',
        KM = 'KM',
        KN = 'KN',
        KP = 'KP',
        KR = 'KR',
        KW = 'KW',
        KY = 'KY',
        KZ = 'KZ',
        LA = 'LA',
        LB = 'LB',
        LC = 'LC',
        LI = 'LI',
        LK = 'LK',
        LR = 'LR',
        LS = 'LS',
        LT = 'LT',
        LU = 'LU',
        LV = 'LV',
        LY = 'LY',
        MA = 'MA',
        MC = 'MC',
        MD = 'MD',
        ME = 'ME',
        MF = 'MF',
        MG = 'MG',
        MH = 'MH',
        MK = 'MK',
        ML = 'ML',
        MM = 'MM',
        MN = 'MN',
        MO = 'MO',
        MP = 'MP',
        MQ = 'MQ',
        MR = 'MR',
        MS = 'MS',
        MT = 'MT',
        MU = 'MU',
        MV = 'MV',
        MW = 'MW',
        MX = 'MX',
        MY = 'MY',
        MZ = 'MZ',
        NA = 'NA',
        NC = 'NC',
        NE = 'NE',
        NF = 'NF',
        NG = 'NG',
        NI = 'NI',
        NL = 'NL',
        NO = 'NO',
        NP = 'NP',
        NR = 'NR',
        NU = 'NU',
        NZ = 'NZ',
        OM = 'OM',
        PA = 'PA',
        PE = 'PE',
        PF = 'PF',
        PG = 'PG',
        PH = 'PH',
        PK = 'PK',
        PL = 'PL',
        PM = 'PM',
        PN = 'PN',
        PR = 'PR',
        PS = 'PS',
        PT = 'PT',
        PW = 'PW',
        PY = 'PY',
        QA = 'QA',
        RE = 'RE',
        RO = 'RO',
        RS = 'RS',
        RU = 'RU',
        RW = 'RW',
        SA = 'SA',
        SB = 'SB',
        SC = 'SC',
        SD = 'SD',
        SE = 'SE',
        SG = 'SG',
        SH = 'SH',
        SI = 'SI',
        SJ = 'SJ',
        SK = 'SK',
        SL = 'SL',
        SM = 'SM',
        SN = 'SN',
        SO = 'SO',
        SR = 'SR',
        SS = 'SS',
        ST = 'ST',
        SV = 'SV',
        SX = 'SX',
        SY = 'SY',
        SZ = 'SZ',
        TC = 'TC',
        TD = 'TD',
        TF = 'TF',
        TG = 'TG',
        TH = 'TH',
        TJ = 'TJ',
        TK = 'TK',
        TL = 'TL',
        TM = 'TM',
        TN = 'TN',
        TO = 'TO',
        TR = 'TR',
        TT = 'TT',
        TV = 'TV',
        TW = 'TW',
        TZ = 'TZ',
        UA = 'UA',
        UG = 'UG',
        UM = 'UM',
        US = 'US',
        UY = 'UY',
        UZ = 'UZ',
        VA = 'VA',
        VC = 'VC',
        VE = 'VE',
        VG = 'VG',
        VI = 'VI',
        VN = 'VN',
        VU = 'VU',
        WF = 'WF',
        WS = 'WS',
        YE = 'YE',
        YT = 'YT',
        ZA = 'ZA',
        ZM = 'ZM',
        ZW = 'ZW',
    }
    export enum CurrencyEnum {
        UNKNOWN_CURRENCY = 'UNKNOWN_CURRENCY',
        AED = 'AED',
        AFN = 'AFN',
        ALL = 'ALL',
        AMD = 'AMD',
        ANG = 'ANG',
        AOA = 'AOA',
        ARS = 'ARS',
        AUD = 'AUD',
        AWG = 'AWG',
        AZN = 'AZN',
        BAM = 'BAM',
        BBD = 'BBD',
        BDT = 'BDT',
        BGN = 'BGN',
        BHD = 'BHD',
        BIF = 'BIF',
        BMD = 'BMD',
        BND = 'BND',
        BOB = 'BOB',
        BOV = 'BOV',
        BRL = 'BRL',
        BSD = 'BSD',
        BTN = 'BTN',
        BWP = 'BWP',
        BYR = 'BYR',
        BZD = 'BZD',
        CAD = 'CAD',
        CDF = 'CDF',
        CHE = 'CHE',
        CHF = 'CHF',
        CHW = 'CHW',
        CLF = 'CLF',
        CLP = 'CLP',
        CNY = 'CNY',
        COP = 'COP',
        COU = 'COU',
        CRC = 'CRC',
        CUC = 'CUC',
        CUP = 'CUP',
        CVE = 'CVE',
        CZK = 'CZK',
        DJF = 'DJF',
        DKK = 'DKK',
        DOP = 'DOP',
        DZD = 'DZD',
        EGP = 'EGP',
        ERN = 'ERN',
        ETB = 'ETB',
        EUR = 'EUR',
        FJD = 'FJD',
        FKP = 'FKP',
        GBP = 'GBP',
        GEL = 'GEL',
        GHS = 'GHS',
        GIP = 'GIP',
        GMD = 'GMD',
        GNF = 'GNF',
        GTQ = 'GTQ',
        GYD = 'GYD',
        HKD = 'HKD',
        HNL = 'HNL',
        HRK = 'HRK',
        HTG = 'HTG',
        HUF = 'HUF',
        IDR = 'IDR',
        ILS = 'ILS',
        INR = 'INR',
        IQD = 'IQD',
        IRR = 'IRR',
        ISK = 'ISK',
        JMD = 'JMD',
        JOD = 'JOD',
        JPY = 'JPY',
        KES = 'KES',
        KGS = 'KGS',
        KHR = 'KHR',
        KMF = 'KMF',
        KPW = 'KPW',
        KRW = 'KRW',
        KWD = 'KWD',
        KYD = 'KYD',
        KZT = 'KZT',
        LAK = 'LAK',
        LBP = 'LBP',
        LKR = 'LKR',
        LRD = 'LRD',
        LSL = 'LSL',
        LTL = 'LTL',
        LVL = 'LVL',
        LYD = 'LYD',
        MAD = 'MAD',
        MDL = 'MDL',
        MGA = 'MGA',
        MKD = 'MKD',
        MMK = 'MMK',
        MNT = 'MNT',
        MOP = 'MOP',
        MRO = 'MRO',
        MUR = 'MUR',
        MVR = 'MVR',
        MWK = 'MWK',
        MXN = 'MXN',
        MXV = 'MXV',
        MYR = 'MYR',
        MZN = 'MZN',
        NAD = 'NAD',
        NGN = 'NGN',
        NIO = 'NIO',
        NOK = 'NOK',
        NPR = 'NPR',
        NZD = 'NZD',
        OMR = 'OMR',
        PAB = 'PAB',
        PEN = 'PEN',
        PGK = 'PGK',
        PHP = 'PHP',
        PKR = 'PKR',
        PLN = 'PLN',
        PYG = 'PYG',
        QAR = 'QAR',
        RON = 'RON',
        RSD = 'RSD',
        RUB = 'RUB',
        RWF = 'RWF',
        SAR = 'SAR',
        SBD = 'SBD',
        SCR = 'SCR',
        SDG = 'SDG',
        SEK = 'SEK',
        SGD = 'SGD',
        SHP = 'SHP',
        SLL = 'SLL',
        SOS = 'SOS',
        SRD = 'SRD',
        SSP = 'SSP',
        STD = 'STD',
        SVC = 'SVC',
        SYP = 'SYP',
        SZL = 'SZL',
        THB = 'THB',
        TJS = 'TJS',
        TMT = 'TMT',
        TND = 'TND',
        TOP = 'TOP',
        TRY = 'TRY',
        TTD = 'TTD',
        TWD = 'TWD',
        TZS = 'TZS',
        UAH = 'UAH',
        UGX = 'UGX',
        USD = 'USD',
        USN = 'USN',
        USS = 'USS',
        UYI = 'UYI',
        UYU = 'UYU',
        UZS = 'UZS',
        VEF = 'VEF',
        VND = 'VND',
        VUV = 'VUV',
        WST = 'WST',
        XAF = 'XAF',
        XAG = 'XAG',
        XAU = 'XAU',
        XBA = 'XBA',
        XBB = 'XBB',
        XBC = 'XBC',
        XBD = 'XBD',
        XCD = 'XCD',
        XDR = 'XDR',
        XOF = 'XOF',
        XPD = 'XPD',
        XPF = 'XPF',
        XPT = 'XPT',
        XTS = 'XTS',
        XXX = 'XXX',
        YER = 'YER',
        ZAR = 'ZAR',
        ZMK = 'ZMK',
        ZMW = 'ZMW',
        BTC = 'BTC',
    }
    export enum TypeEnum {
        PHYSICAL = 'PHYSICAL',
        MOBILE = 'MOBILE',
    }
}

/**
 * Indicates payment capabilities that a business's location might or might not have enabled.
 */
export class LocationCapability {}

/**
 * Indicates the location's status.
 */
export class LocationStatus {}

/**
 * Indicates the location's type.
 */
export class LocationType {}

/**
 * Represents a unit of measurement to use with a quantity, such as ounces or inches.
 * Exactly one of the following fields are required: `custom_unit`, `area_unit`, `length_unit`, `volume_unit`, and `weight_unit`.
 * The `family` field describes the type of measurement. For example, ounces are in the weight family.
 */
export class MeasurementUnit {
    /**
     * A custom unit of measurement defined by the seller using the Point of Sale app or ad-hoc as an order line item.
     */
    custom_unit?: MeasurementUnitCustom;
    /**
     * Represents a standard area unit. See [MeasurementUnitArea](#type-measurementunitarea) for possible values.
     */
    area_unit?: MeasurementUnit.AreaUnitEnum;
    /**
     * Represents a standard length unit. See [MeasurementUnitLength](#type-measurementunitlength) for possible values.
     */
    length_unit?: MeasurementUnit.LengthUnitEnum;
    /**
     * Represents a standard volume unit. See [MeasurementUnitVolume](#type-measurementunitvolume) for possible values.
     */
    volume_unit?: MeasurementUnit.VolumeUnitEnum;
    /**
     * Represents a standard unit of weight or mass. See [MeasurementUnitWeight](#type-measurementunitweight) for possible values.
     */
    weight_unit?: MeasurementUnit.WeightUnitEnum;
}

export namespace MeasurementUnit {
    export enum AreaUnitEnum {
        IMPERIAL_ACRE = 'IMPERIAL_ACRE',
        IMPERIAL_SQUARE_INCH = 'IMPERIAL_SQUARE_INCH',
        IMPERIAL_SQUARE_FOOT = 'IMPERIAL_SQUARE_FOOT',
        IMPERIAL_SQUARE_YARD = 'IMPERIAL_SQUARE_YARD',
        IMPERIAL_SQUARE_MILE = 'IMPERIAL_SQUARE_MILE',
        METRIC_SQUARE_CENTIMETER = 'METRIC_SQUARE_CENTIMETER',
        METRIC_SQUARE_METER = 'METRIC_SQUARE_METER',
        METRIC_SQUARE_KILOMETER = 'METRIC_SQUARE_KILOMETER',
    }
    export enum LengthUnitEnum {
        IMPERIAL_INCH = 'IMPERIAL_INCH',
        IMPERIAL_FOOT = 'IMPERIAL_FOOT',
        IMPERIAL_YARD = 'IMPERIAL_YARD',
        IMPERIAL_MILE = 'IMPERIAL_MILE',
        METRIC_MILLIMETER = 'METRIC_MILLIMETER',
        METRIC_CENTIMETER = 'METRIC_CENTIMETER',
        METRIC_METER = 'METRIC_METER',
        METRIC_KILOMETER = 'METRIC_KILOMETER',
    }
    export enum VolumeUnitEnum {
        GENERIC_FLUID_OUNCE = 'GENERIC_FLUID_OUNCE',
        GENERIC_SHOT = 'GENERIC_SHOT',
        GENERIC_CUP = 'GENERIC_CUP',
        GENERIC_PINT = 'GENERIC_PINT',
        GENERIC_QUART = 'GENERIC_QUART',
        GENERIC_GALLON = 'GENERIC_GALLON',
        IMPERIAL_CUBIC_INCH = 'IMPERIAL_CUBIC_INCH',
        IMPERIAL_CUBIC_FOOT = 'IMPERIAL_CUBIC_FOOT',
        IMPERIAL_CUBIC_YARD = 'IMPERIAL_CUBIC_YARD',
        METRIC_MILLILITER = 'METRIC_MILLILITER',
        METRIC_LITER = 'METRIC_LITER',
    }
    export enum WeightUnitEnum {
        IMPERIAL_WEIGHT_OUNCE = 'IMPERIAL_WEIGHT_OUNCE',
        IMPERIAL_POUND = 'IMPERIAL_POUND',
        IMPERIAL_STONE = 'IMPERIAL_STONE',
        METRIC_MILLIGRAM = 'METRIC_MILLIGRAM',
        METRIC_GRAM = 'METRIC_GRAM',
        METRIC_KILOGRAM = 'METRIC_KILOGRAM',
    }
}

/**
 * Unit of area used to measure a quantity.
 */
export class MeasurementUnitArea {}

/**
 * The information needed to define a custom unit, provided by the seller.
 */
export class MeasurementUnitCustom {
    /**
     * The name of the custom unit, for example "bushel".
     */
    name: string;
    /**
     * The abbreviation of the custom unit, such as "bsh" (bushel).
     * This appears in the cart for the Point of Sale app, and in reports.
     */
    abbreviation: string;
}

/**
 * The unit of length used to measure a quantity.
 */
export class MeasurementUnitLength {}

/**
 * The unit of volume used to measure a quantity.
 */
export class MeasurementUnitVolume {}

/**
 * Unit of weight used to measure a quantity.
 */
export class MeasurementUnitWeight {}

/**
 * A record of an employee's break during a shift.
 */
export class ModelBreak {
    /**
     * UUID for this object.
     */
    id?: string;
    /**
     * RFC 3339; follows same timezone info as `Shift`. Precision up to the minute is respected; seconds are truncated.
     */
    start_at: string;
    /**
     * RFC 3339; follows same timezone info as `Shift`. Precision up to the minute is respected; seconds are truncated.
     * The `end_at` minute is not counted when the break length is calculated. For example, a break from `00:00` to
     * `00:11` is considered a 10 minute break (midnight to 10 minutes after midnight).
     */
    end_at?: string;
    /**
     * The `BreakType` this `Break` was templated on.
     */
    break_type_id: string;
    /**
     * A human-readable name.
     */
    name: string;
    /**
     * Format: RFC-3339 P[n]Y[n]M[n]DT[n]H[n]M[n]S. The expected length of the break.
     */
    expected_duration: string;
    /**
     * Whether this break counts towards time worked for compensation purposes.
     */
    is_paid: boolean;
}

/**
 * Represents an error encountered during a request to the Connect API.
 */
export class ModelError {
    /**
     * The error's high-level category. See [ErrorCategory](#type-errorcategory) for possible values.
     */
    category: ModelError.CategoryEnum;
    /**
     * The error's specific code. See [ErrorCode](#type-errorcode) for possible values
     */
    code: ModelError.CodeEnum;
    /**
     * A human-readable description of the error for debugging purposes.
     */
    detail?: string;
    /**
     * The name of the field provided in the original request that the error pertains to, if any.
     */
    field?: string;
}

export namespace ModelError {
    export enum CategoryEnum {
        API_ERROR = 'API_ERROR',
        AUTHENTICATION_ERROR = 'AUTHENTICATION_ERROR',
        INVALID_REQUEST_ERROR = 'INVALID_REQUEST_ERROR',
        RATE_LIMIT_ERROR = 'RATE_LIMIT_ERROR',
        PAYMENT_METHOD_ERROR = 'PAYMENT_METHOD_ERROR',
        REFUND_ERROR = 'REFUND_ERROR',
    }
    export enum CodeEnum {
        INTERNAL_SERVER_ERROR = 'INTERNAL_SERVER_ERROR',
        UNAUTHORIZED = 'UNAUTHORIZED',
        ACCESS_TOKEN_EXPIRED = 'ACCESS_TOKEN_EXPIRED',
        ACCESS_TOKEN_REVOKED = 'ACCESS_TOKEN_REVOKED',
        FORBIDDEN = 'FORBIDDEN',
        INSUFFICIENT_SCOPES = 'INSUFFICIENT_SCOPES',
        APPLICATION_DISABLED = 'APPLICATION_DISABLED',
        V1_APPLICATION = 'V1_APPLICATION',
        V1_ACCESS_TOKEN = 'V1_ACCESS_TOKEN',
        CARD_PROCESSING_NOT_ENABLED = 'CARD_PROCESSING_NOT_ENABLED',
        BAD_REQUEST = 'BAD_REQUEST',
        MISSING_REQUIRED_PARAMETER = 'MISSING_REQUIRED_PARAMETER',
        INCORRECT_TYPE = 'INCORRECT_TYPE',
        INVALID_TIME = 'INVALID_TIME',
        INVALID_TIME_RANGE = 'INVALID_TIME_RANGE',
        INVALID_VALUE = 'INVALID_VALUE',
        INVALID_CURSOR = 'INVALID_CURSOR',
        UNKNOWN_QUERY_PARAMETER = 'UNKNOWN_QUERY_PARAMETER',
        CONFLICTING_PARAMETERS = 'CONFLICTING_PARAMETERS',
        EXPECTED_JSON_BODY = 'EXPECTED_JSON_BODY',
        INVALID_SORT_ORDER = 'INVALID_SORT_ORDER',
        VALUE_REGEX_MISMATCH = 'VALUE_REGEX_MISMATCH',
        VALUE_TOO_SHORT = 'VALUE_TOO_SHORT',
        VALUE_TOO_LONG = 'VALUE_TOO_LONG',
        VALUE_TOO_LOW = 'VALUE_TOO_LOW',
        VALUE_TOO_HIGH = 'VALUE_TOO_HIGH',
        VALUE_EMPTY = 'VALUE_EMPTY',
        ARRAY_LENGTH_TOO_LONG = 'ARRAY_LENGTH_TOO_LONG',
        ARRAY_LENGTH_TOO_SHORT = 'ARRAY_LENGTH_TOO_SHORT',
        ARRAY_EMPTY = 'ARRAY_EMPTY',
        EXPECTED_BOOLEAN = 'EXPECTED_BOOLEAN',
        EXPECTED_INTEGER = 'EXPECTED_INTEGER',
        EXPECTED_FLOAT = 'EXPECTED_FLOAT',
        EXPECTED_STRING = 'EXPECTED_STRING',
        EXPECTED_OBJECT = 'EXPECTED_OBJECT',
        EXPECTED_ARRAY = 'EXPECTED_ARRAY',
        EXPECTED_MAP = 'EXPECTED_MAP',
        EXPECTED_BASE64_ENCODED_BYTE_ARRAY = 'EXPECTED_BASE64_ENCODED_BYTE_ARRAY',
        INVALID_ARRAY_VALUE = 'INVALID_ARRAY_VALUE',
        INVALID_ENUM_VALUE = 'INVALID_ENUM_VALUE',
        INVALID_CONTENT_TYPE = 'INVALID_CONTENT_TYPE',
        INVALID_FORM_VALUE = 'INVALID_FORM_VALUE',
        ONE_INSTRUMENT_EXPECTED = 'ONE_INSTRUMENT_EXPECTED',
        NO_FIELDS_SET = 'NO_FIELDS_SET',
        DEPRECATED_FIELD_SET = 'DEPRECATED_FIELD_SET',
        CARD_EXPIRED = 'CARD_EXPIRED',
        INVALID_EXPIRATION = 'INVALID_EXPIRATION',
        INVALID_EXPIRATION_YEAR = 'INVALID_EXPIRATION_YEAR',
        INVALID_EXPIRATION_DATE = 'INVALID_EXPIRATION_DATE',
        UNSUPPORTED_CARD_BRAND = 'UNSUPPORTED_CARD_BRAND',
        UNSUPPORTED_ENTRY_METHOD = 'UNSUPPORTED_ENTRY_METHOD',
        INVALID_ENCRYPTED_CARD = 'INVALID_ENCRYPTED_CARD',
        INVALID_CARD = 'INVALID_CARD',
        DELAYED_TRANSACTION_EXPIRED = 'DELAYED_TRANSACTION_EXPIRED',
        DELAYED_TRANSACTION_CANCELED = 'DELAYED_TRANSACTION_CANCELED',
        DELAYED_TRANSACTION_CAPTURED = 'DELAYED_TRANSACTION_CAPTURED',
        DELAYED_TRANSACTION_FAILED = 'DELAYED_TRANSACTION_FAILED',
        CARD_TOKEN_EXPIRED = 'CARD_TOKEN_EXPIRED',
        CARD_TOKEN_USED = 'CARD_TOKEN_USED',
        AMOUNT_TOO_HIGH = 'AMOUNT_TOO_HIGH',
        UNSUPPORTED_INSTRUMENT_TYPE = 'UNSUPPORTED_INSTRUMENT_TYPE',
        REFUND_AMOUNT_INVALID = 'REFUND_AMOUNT_INVALID',
        REFUND_ALREADY_PENDING = 'REFUND_ALREADY_PENDING',
        PAYMENT_NOT_REFUNDABLE = 'PAYMENT_NOT_REFUNDABLE',
        INVALID_CARD_DATA = 'INVALID_CARD_DATA',
        LOCATION_MISMATCH = 'LOCATION_MISMATCH',
        IDEMPOTENCY_KEY_REUSED = 'IDEMPOTENCY_KEY_REUSED',
        UNEXPECTED_VALUE = 'UNEXPECTED_VALUE',
        SANDBOX_NOT_SUPPORTED = 'SANDBOX_NOT_SUPPORTED',
        INVALID_EMAIL_ADDRESS = 'INVALID_EMAIL_ADDRESS',
        INVALID_PHONE_NUMBER = 'INVALID_PHONE_NUMBER',
        CHECKOUT_EXPIRED = 'CHECKOUT_EXPIRED',
        BAD_CERTIFICATE = 'BAD_CERTIFICATE',
        INVALID_SQUARE_VERSION_FORMAT = 'INVALID_SQUARE_VERSION_FORMAT',
        API_VERSION_INCOMPATIBLE = 'API_VERSION_INCOMPATIBLE',
        CARD_DECLINED = 'CARD_DECLINED',
        VERIFY_CVV_FAILURE = 'VERIFY_CVV_FAILURE',
        VERIFY_AVS_FAILURE = 'VERIFY_AVS_FAILURE',
        CARD_DECLINED_CALL_ISSUER = 'CARD_DECLINED_CALL_ISSUER',
        NOT_FOUND = 'NOT_FOUND',
        APPLE_PAYMENT_PROCESSING_CERTIFICATE_HASH_NOT_FOUND = 'APPLE_PAYMENT_PROCESSING_CERTIFICATE_HASH_NOT_FOUND',
        METHOD_NOT_ALLOWED = 'METHOD_NOT_ALLOWED',
        NOT_ACCEPTABLE = 'NOT_ACCEPTABLE',
        REQUEST_TIMEOUT = 'REQUEST_TIMEOUT',
        CONFLICT = 'CONFLICT',
        REQUEST_ENTITY_TOO_LARGE = 'REQUEST_ENTITY_TOO_LARGE',
        UNSUPPORTED_MEDIA_TYPE = 'UNSUPPORTED_MEDIA_TYPE',
        RATE_LIMITED = 'RATE_LIMITED',
        NOT_IMPLEMENTED = 'NOT_IMPLEMENTED',
        SERVICE_UNAVAILABLE = 'SERVICE_UNAVAILABLE',
        GATEWAY_TIMEOUT = 'GATEWAY_TIMEOUT',
    }
}

/**
 * Represents an amount of money. __Important:__ Unlike version 1 of the Connect API, __all monetary amounts returned
 * by v2 endpoints are positive.__ (In v1, monetary amounts are negative if they represent money being paid _by_ a
 * merchant, instead of money being paid _to_ a merchant.)
 */
export class Money {
    /**
     * The amount of money, in the smallest denomination of the currency indicated by `currency`.
     * For example, when `currency` is `USD`, `amount` is in cents.
     */
    amount?: number;
    /**
     * The type of currency, in __ISO 4217 format__. For example, the currency code for US dollars is `USD`.
     * See [Currency](#type-currency) for possible values.
     */
    currency?: Money.CurrencyEnum;
}

export namespace Money {
    export enum CurrencyEnum {
        UNKNOWN_CURRENCY = 'UNKNOWN_CURRENCY',
        AED = 'AED',
        AFN = 'AFN',
        ALL = 'ALL',
        AMD = 'AMD',
        ANG = 'ANG',
        AOA = 'AOA',
        ARS = 'ARS',
        AUD = 'AUD',
        AWG = 'AWG',
        AZN = 'AZN',
        BAM = 'BAM',
        BBD = 'BBD',
        BDT = 'BDT',
        BGN = 'BGN',
        BHD = 'BHD',
        BIF = 'BIF',
        BMD = 'BMD',
        BND = 'BND',
        BOB = 'BOB',
        BOV = 'BOV',
        BRL = 'BRL',
        BSD = 'BSD',
        BTN = 'BTN',
        BWP = 'BWP',
        BYR = 'BYR',
        BZD = 'BZD',
        CAD = 'CAD',
        CDF = 'CDF',
        CHE = 'CHE',
        CHF = 'CHF',
        CHW = 'CHW',
        CLF = 'CLF',
        CLP = 'CLP',
        CNY = 'CNY',
        COP = 'COP',
        COU = 'COU',
        CRC = 'CRC',
        CUC = 'CUC',
        CUP = 'CUP',
        CVE = 'CVE',
        CZK = 'CZK',
        DJF = 'DJF',
        DKK = 'DKK',
        DOP = 'DOP',
        DZD = 'DZD',
        EGP = 'EGP',
        ERN = 'ERN',
        ETB = 'ETB',
        EUR = 'EUR',
        FJD = 'FJD',
        FKP = 'FKP',
        GBP = 'GBP',
        GEL = 'GEL',
        GHS = 'GHS',
        GIP = 'GIP',
        GMD = 'GMD',
        GNF = 'GNF',
        GTQ = 'GTQ',
        GYD = 'GYD',
        HKD = 'HKD',
        HNL = 'HNL',
        HRK = 'HRK',
        HTG = 'HTG',
        HUF = 'HUF',
        IDR = 'IDR',
        ILS = 'ILS',
        INR = 'INR',
        IQD = 'IQD',
        IRR = 'IRR',
        ISK = 'ISK',
        JMD = 'JMD',
        JOD = 'JOD',
        JPY = 'JPY',
        KES = 'KES',
        KGS = 'KGS',
        KHR = 'KHR',
        KMF = 'KMF',
        KPW = 'KPW',
        KRW = 'KRW',
        KWD = 'KWD',
        KYD = 'KYD',
        KZT = 'KZT',
        LAK = 'LAK',
        LBP = 'LBP',
        LKR = 'LKR',
        LRD = 'LRD',
        LSL = 'LSL',
        LTL = 'LTL',
        LVL = 'LVL',
        LYD = 'LYD',
        MAD = 'MAD',
        MDL = 'MDL',
        MGA = 'MGA',
        MKD = 'MKD',
        MMK = 'MMK',
        MNT = 'MNT',
        MOP = 'MOP',
        MRO = 'MRO',
        MUR = 'MUR',
        MVR = 'MVR',
        MWK = 'MWK',
        MXN = 'MXN',
        MXV = 'MXV',
        MYR = 'MYR',
        MZN = 'MZN',
        NAD = 'NAD',
        NGN = 'NGN',
        NIO = 'NIO',
        NOK = 'NOK',
        NPR = 'NPR',
        NZD = 'NZD',
        OMR = 'OMR',
        PAB = 'PAB',
        PEN = 'PEN',
        PGK = 'PGK',
        PHP = 'PHP',
        PKR = 'PKR',
        PLN = 'PLN',
        PYG = 'PYG',
        QAR = 'QAR',
        RON = 'RON',
        RSD = 'RSD',
        RUB = 'RUB',
        RWF = 'RWF',
        SAR = 'SAR',
        SBD = 'SBD',
        SCR = 'SCR',
        SDG = 'SDG',
        SEK = 'SEK',
        SGD = 'SGD',
        SHP = 'SHP',
        SLL = 'SLL',
        SOS = 'SOS',
        SRD = 'SRD',
        SSP = 'SSP',
        STD = 'STD',
        SVC = 'SVC',
        SYP = 'SYP',
        SZL = 'SZL',
        THB = 'THB',
        TJS = 'TJS',
        TMT = 'TMT',
        TND = 'TND',
        TOP = 'TOP',
        TRY = 'TRY',
        TTD = 'TTD',
        TWD = 'TWD',
        TZS = 'TZS',
        UAH = 'UAH',
        UGX = 'UGX',
        USD = 'USD',
        USN = 'USN',
        USS = 'USS',
        UYI = 'UYI',
        UYU = 'UYU',
        UZS = 'UZS',
        VEF = 'VEF',
        VND = 'VND',
        VUV = 'VUV',
        WST = 'WST',
        XAF = 'XAF',
        XAG = 'XAG',
        XAU = 'XAU',
        XBA = 'XBA',
        XBB = 'XBB',
        XBC = 'XBC',
        XBD = 'XBD',
        XCD = 'XCD',
        XDR = 'XDR',
        XOF = 'XOF',
        XPD = 'XPD',
        XPF = 'XPF',
        XPT = 'XPT',
        XTS = 'XTS',
        XXX = 'XXX',
        YER = 'YER',
        ZAR = 'ZAR',
        ZMK = 'ZMK',
        ZMW = 'ZMW',
        BTC = 'BTC',
    }
}

export class ObtainTokenRequest {
    /**
     * The Square-issued ID of your application, available from the [application dashboard](https://connect.squareup.com/apps).
     */
    client_id: string;
    /**
     * The Square-issued application secret for your application, available from the
     * [application dashboard](https://connect.squareup.com/apps).
     */
    client_secret: string;
    /**
     * The authorization code to exchange. This is required if `grant_type` is set to `authorization_code`, to indicate
     * that the application wants to exchange an authorization code for an OAuth access token.
     */
    code?: string;
    /**
     * The redirect URL assigned in the [application dashboard](https://connect.squareup.com/apps).
     */
    redirect_uri?: string;
    /**
     * Specifies the method to request an OAuth access token.
     * Valid values are: `authorization_code`, `refresh_token`, and `migration_token`.
     */
    grant_type: string;
    /**
     * A valid refresh token for generating a new OAuth access token. A valid refresh token is required if `grant_type`
     * is set to `refresh_token`, to indicate the application wants a replacement for an expired OAuth access token.
     */
    refresh_token?: string;
    /**
     * Legacy OAuth access token obtained using a Connect API version prior to 2019-03-13. This parameter is required
     * if `grant_type` is set to `migration_token` to indicate that the application wants to get a replacement OAuth access token.
     * The response also returns a refresh token. For more information, see [Migrate to Using Refresh Tokens](/authz/oauth/migration).
     */
    migration_token?: string;
}

export class ObtainTokenResponse {
    /**
     * A valid OAuth access token. OAuth access tokens are 64 bytes long.
     * Provide the access token in a header with every request to Connect API endpoints.
     * See the [Build with OAuth](/authz/oauth/build-with-the-api) guide for more information.
     */
    access_token?: string;
    /**
     * This value is always "bearer".
     */
    token_type?: string;
    /**
     * The date when access_token expires, in [ISO 8601](http://www.iso.org/iso/home/standards/iso8601.htm) format.
     */
    expires_at?: string;
    /**
     * The ID of the authorizing merchant's business.
     */
    merchant_id?: string;
    /**
     * @deprecated The ID of a subscription plan the merchant signed up for.
     * Only present if the merchant signed up for a subscription during authorization.
     */
    subscription_id?: string;
    /**
     * The ID of the [subscription](https://docs.connect.squareup.com/api/connect/v1/#navsection-subscriptionmanagement)
     * plan the merchant signed up for. Only present if the merchant signed up for a subscription during authorization.
     */
    plan_id?: string;
    /**
     * Then OpenID token belonging to this this person.
     * Only present if the OPENID scope is included in the authorize request.
     */
    id_token?: string;
    /**
     * A refresh token.
     * For more information, see [OAuth access token management](/authz/oauth/how-it-works#oauth-access-token-management).
     */
    refresh_token?: string;
}

/**
 * Contains all information related to a single order to process with Square, including line items that specify the
 * products to purchase. Order objects also include information on any associated tenders, refunds, and returns.
 * All Connect V2 Transactions have all been converted to Orders including all associated itemization data.
 */
export class Order {
    /**
     * The order's unique ID. This value is only present for Order objects created by the Orders API through
     * the [CreateOrder](#endpoint-orders-createorder) endpoint.
     */
    id?: string;
    /**
     * The ID of the merchant location this order is associated with.
     */
    location_id?: string;
    /**
     * A client specified identifier to associate an entity in another system with this order.
     */
    reference_id?: string;
    /**
     * The origination details of the order.
     */
    source?: OrderSource;
    /**
     * The [Customer](#type-customer) ID of the customer associated with the order.
     */
    customer_id?: string;
    /**
     * The line items included in the order.
     */
    line_items?: Array<OrderLineItem>;
    /**
     * A list of taxes applied to this order. On read or retrieve, this list includes both order-level and item-level
     * taxes. When creating an Order, set your order-level taxes in this list.
     */
    taxes?: Array<OrderLineItemTax>;
    /**
     * A list of discounts applied to this order. On read or retrieve, this list includes both order-level and
     * item-level discounts. When creating an Order, set your order-level discounts in this list.
     */
    discounts?: Array<OrderLineItemDiscount>;
    /**
     * Details on order fulfillment. Orders can only be created with at most one fulfillment.
     * However, orders returned by the API may contain multiple fulfillments.
     */
    fulfillments?: Array<OrderFulfillment>;
    /**
     * Collection of items from sale Orders being returned in this one. Normally part of an Itemized Return or Exchange.
     * There will be exactly one `Return` object per sale Order being referenced.
     */
    returns?: Array<OrderReturn>;
    /**
     * Rollup of returned money amounts.
     */
    return_amounts?: OrderMoneyAmounts;
    /**
     * Net money amounts (sale money - return money).
     */
    net_amounts?: OrderMoneyAmounts;
    /**
     * A positive or negative rounding adjustment to the total of the order, commonly used to apply Cash Rounding when
     * the minimum unit of account is smaller than the lowest physical denomination of currency.
     */
    rounding_adjustment?: OrderRoundingAdjustment;
    /**
     * The Tenders which were used to pay for the Order. This field is read-only.
     */
    tenders?: Array<Tender>;
    /**
     * The Refunds that are part of this Order. This field is read-only.
     */
    refunds?: Array<Refund>;
    /**
     * Timestamp for when the order was created. In RFC 3339 format, e.g., "2016-09-04T23:59:33.123Z".
     */
    created_at?: string;
    /**
     * Timestamp for when the order was last updated. In RFC 3339 format, e.g., "2016-09-04T23:59:33.123Z".
     */
    updated_at?: string;
    /**
     * Timestamp for when the order was closed. In RFC 3339 format, e.g., "2016-09-04T23:59:33.123Z".
     */
    closed_at?: string;
    /**
     * The current state of the order. `OPEN`,`COMPLETED`,`CANCELED` See [OrderState](#type-orderstate) for possible values.
     */
    state?: Order.StateEnum;
    /**
     * The total amount of money to collect for the order.
     */
    total_money?: Money;
    /**
     * The total tax amount of money to collect for the order.
     */
    total_tax_money?: Money;
    /**
     * The total discount amount of money to collect for the order.
     */
    total_discount_money?: Money;
}

export namespace Order {
    export enum StateEnum {
        OPEN = 'OPEN',
        COMPLETED = 'COMPLETED',
        CANCELED = 'CANCELED'
    }
}

/**
 * A lightweight description of an [Order](#type-order) that is returned when `returned_entries` is true
 * on a [SearchOrderRequest](#type-searchorderrequest).
 */
export class OrderEntry {
    /**
     * The id of the Order.
     */
    order_id?: string;
    /**
     * The location id the Order belongs to.
     */
    location_id?: string;
}

/**
 * Contains details on how to fulfill this order.
 */
export class OrderFulfillment {
    /**
     * The type of the fulfillment. See [OrderFulfillmentType](#type-orderfulfillmenttype) for possible values.
     */
    type?: OrderFulfillment.TypeEnum;
    /**
     * The state of the fulfillment. See [OrderFulfillmentState](#type-orderfulfillmentstate) for possible values.
     */
    state?: OrderFulfillment.StateEnum;
    /**
     * Contains pickup-specific details. Required when fulfillment type is `PICKUP`.
     */
    pickup_details?: OrderFulfillmentPickupDetails;
}

export namespace OrderFulfillment {
    export enum TypeEnum {
        PICKUP = 'PICKUP',
    }
    export enum StateEnum {
        PROPOSED = 'PROPOSED',
        RESERVED = 'RESERVED',
        PREPARED = 'PREPARED',
        COMPLETED = 'COMPLETED',
        CANCELED = 'CANCELED',
        FAILED = 'FAILED',
    }
}

/**
 * Contains details necessary to fulfill a pickup order.
 */
export class OrderFulfillmentPickupDetails {
    /**
     * The recipient of this pickup fulfillment.
     */
    recipient?: OrderFulfillmentRecipient;
    /**
     * The expiry [timestamp](#workingwithdates) in RFC 3339 format, e.g., "2016-09-04T23:59:33.123Z". This timestamp
     * indicates when the pickup fulfillment will expire if it is not accepted by the merchant. Expiration time can only
     * be set up to 7 days in the future. If not set, this pickup fulfillment will be automatically accepted when placed.
     */
    expires_at?: string;
    /**
     * The auto completion duration in RFC3339 duration format, e.g., "P1W3D". If set, an open and accepted pickup
     * fulfillment will automatically move to the `COMPLETED` state after this period of time. If not set, this pickup
     * fulfillment will remain accepted until it is canceled or completed.
     */
    auto_complete_duration?: string;
    /**
     * The schedule type of the pickup fulfillment. Defaults to `SCHEDULED`.
     * See [OrderFulfillmentPickupDetailsScheduleType](#type-orderfulfillmentpickupdetailsscheduletype) for possible values.
     */
    schedule_type?: OrderFulfillmentPickupDetails.ScheduleTypeEnum;
    /**
     * The pickup [timestamp](#workingwithdates) in RFC3339 timestamp format, e.g., "2016-09-04T23:59:33.123Z".
     * For fulfillments with the schedule type `ASAP`, this is automatically set to the current time plus the expected
     * duration to prepare the fulfillment. This represents the start of the pickup window.
     */
    pickup_at?: string;
    /**
     * The pickup window duration in RFC3339 duration format, e.g., "P1W3D". This duration represents the window of
     * time for which the order should be picked up after the `pickup_at` time. Can be used as an informational
     * guideline for merchants.
     */
    pickup_window_duration?: string;
    /**
     * The preparation time duration in RFC3339 duration format, e.g., \"P1W3D\". This duration indicates how long it
     * takes the merchant to prepare this fulfillment.
     */
    prep_time_duration?: string;
    /**
     * A general note about the pickup fulfillment.  Notes are useful for providing additional instructions and are
     * displayed in Square apps.
     */
    note?: string;
    /**
     * The [timestamp](#workingwithdates) in RFC3339 timestamp format, e.g., \"2016-09-04T23:59:33.123Z\", indicating
     * when the fulfillment was placed.
     */
    placed_at?: string;
    /**
     * The [timestamp](#workingwithdates) in RFC3339 timestamp format, e.g., \"2016-09-04T23:59:33.123Z\", indicating
     * when the fulfillment was accepted by the merchant.
     */
    accepted_at?: string;
    /**
     * The [timestamp](#workingwithdates) in RFC3339 timestamp format, e.g., \"2016-09-04T23:59:33.123Z\", indicating
     * when the fulfillment was rejected.
     */
    rejected_at?: string;
    /**
     * The [timestamp](#workingwithdates) in RFC3339 timestamp format, e.g., \"2016-09-04T23:59:33.123Z\", indicating
     * when the merchant set the fulfillment as ready for pickup.
     */
    ready_at?: string;
    /**
     * The [timestamp](#workingwithdates) in RFC3339 timestamp format, e.g., \"2016-09-04T23:59:33.123Z\", indicating
     * when the fulfillment expired.
     */
    expired_at?: string;
    /**
     * The [timestamp](#workingwithdates) in RFC3339 timestamp format, e.g., \"2016-09-04T23:59:33.123Z\", indicating
     * when the fulfillment was picked up by the recipient.
     */
    picked_up_at?: string;
    /**
     * The [timestamp](#workingwithdates) in RFC3339 timestamp format, e.g., \"2016-09-04T23:59:33.123Z\", indicating
     * when the fulfillment was canceled by the merchant or buyer.
     */
    canceled_at?: string;
    /**
     * A description of why the pickup was canceled. Max length is 100 characters.
     */
    cancel_reason?: string;
}

export namespace OrderFulfillmentPickupDetails {
    export enum ScheduleTypeEnum {
        SCHEDULED = 'SCHEDULED',
        ASAP = 'ASAP',
    }
}
/**
 * The schedule type of the pickup fulfillment.
 */
export class OrderFulfillmentPickupDetailsScheduleType {}

/**
 * The recipient of a fulfillment.
 */
export class OrderFulfillmentRecipient {
    /**
     * The Customer ID of the customer associated with the fulfillment.  If customer_id is provided, the corresponding
     * recipient information fields (`display_name`, `email_address`, and `phone_number`) are automatically populated
     * from the relevant customer profile. If the targeted profile information does not contain the necessary required
     * information, the request will result in an error.
     */
    customer_id?: string;
    /**
     * The display name of the fulfillment recipient.  If provided, overrides the value from customer profile indicated
     * by customer_id.
     */
    display_name?: string;
    /**
     * The email address of the fulfillment recipient.  If provided, overrides the value from customer profile indicated
     * by customer_id.
     */
    email_address?: string;
    /**
     * The phone number of the fulfillment recipient.  If provided, overrides the value from customer profile indicated
     * by customer_id.
     */
    phone_number?: string;
}

/**
 * The state of the fulfillment.
 */
export class OrderFulfillmentState {}

/**
 * The type of fulfillment.
 */
export class OrderFulfillmentType {}

/**
 * Represents a line item in an order. Each line item describes a different product to purchase, with its own quantity
 * and price details.
 */
export class OrderLineItem {
    /**
     * The line item's Unique identifier, unique only within this order. This field is read-only.
     */
    uid?: string;
    /**
     * The name of the line item.
     */
    name?: string;
    /**
     * The quantity purchased, formatted as a decimal number. For example: "3".
     * Line items with a `quantity_unit` can have non-integer quantities. For example: "1.70000".
     * Orders Hub and older versions of Connect do not support non-integer quantities.
     * See [Decimal quantities with Orders hub and older versions of Connect](/more-apis/orders/overview#decimal-quantities).
     */
    quantity: string;
    /**
     * The unit and precision that this line item's quantity is measured in.
     */
    quantity_unit?: OrderQuantityUnit;
    /**
     * The note of the line item.
     */
    note?: string;
    /**
     * The [CatalogItemVariation](#type-catalogitemvariation) id applied to this line item.
     */
    catalog_object_id?: string;
    /**
     * The name of the variation applied to this line item.
     */
    variation_name?: string;
    /**
     * The [CatalogModifier](#type-catalogmodifier)s applied to this line item.
     */
    modifiers?: Array<OrderLineItemModifier>;
    /**
     * A list of taxes applied to this line item. On read or retrieve, this list includes both item-level taxes and any
     * order-level taxes apportioned to this item. When creating an Order, set your item-level taxes in this list.
     */
    taxes?: Array<OrderLineItemTax>;
    /**
     * A list of discounts applied to this line item.
     * On read or retrieve, this list includes both item-level discounts and any order-level discounts apportioned to this item.
     * When creating an Order, set your item-level discounts in this list.
     */
    discounts?: Array<OrderLineItemDiscount>;
    /**
     * The base price for a single unit of the line item.
     */
    base_price_money?: Money;
    /**
     * The total price of all item variations sold in this line item.
     * Calculated as `base_price_money` multiplied by `quantity`. Does not include modifiers.
     */
    variation_total_price_money?: Money;
    /**
     * The amount of money made in gross sales for this line item.
     * Calculated as the sum of the variation's total price and each modifier's total price.
     */
    gross_sales_money?: Money;
    /**
     * The total tax amount of money to collect for the line item.
     */
    total_tax_money?: Money;
    /**
     * The total discount amount of money to collect for the line item.
     */
    total_discount_money?: Money;
    /**
     * The total amount of money to collect for this line item.
     */
    total_money?: Money;
}

/**
 * Represents a discount that applies to one or more line items in an order.
 * Fixed-amount, order-level discounts are distributed across all non-zero line item totals.
 * The amount distributed to each line item is relative to that item’s contribution to the order subtotal.
 */
export class OrderLineItemDiscount {
    /**
     * The discount's Unique identifier, unique only within this order. This field is read-only.
     */
    uid?: string;
    /**
     * The catalog object id referencing [CatalogDiscount](#type-catalogdiscount).
     */
    catalog_object_id?: string;
    /**
     * The discount's name.
     */
    name?: string;
    /**
     * The type of the discount. If it is created by API, it would be either `FIXED_PERCENTAGE` or `FIXED_AMOUNT`.
     * VARIABLE_* is not supported in API because the order is created at the time of sale and either percentage or amount has
     * to be specified. See [OrderLineItemDiscountType](#type-orderlineitemdiscounttype) for possible values.
     */
    type?: OrderLineItemDiscount.TypeEnum;
    /**
     * The percentage of the discount, as a string representation of a decimal number.
     * A value of `7.25` corresponds to a percentage of 7.25%. The percentage won't be set for an amount-based discount.
     */
    percentage?: string;
    /**
     * The total monetary amount of the applicable discount. If it is at order level, it is the value of the order level
     * discount. If it is at line item level, it is the value of the line item level discount.  The amount_money won't
     * be set for a percentage-based discount.
     */
    amount_money?: Money;
    /**
     * The amount of discount actually applied to this line item.  Represents the amount of money applied to a line item
     * as a discount When an amount-based discount is at order-level, this value is different from `amount_money`
     * because the discount is distributed across the line items.
     */
    applied_money?: Money;
    /**
     * Indicates the level at which the discount applies. This field is set by the server.
     * If set in a CreateOrder request, it will be ignored on write.
     * See [OrderLineItemDiscountScope](#type-orderlineitemdiscountscope) for possible values.
     */
    scope?: OrderLineItemDiscount.ScopeEnum;
}

export namespace OrderLineItemDiscount {
    export enum TypeEnum {
        UNKNOWN_DISCOUNT = 'UNKNOWN_DISCOUNT',
        FIXED_PERCENTAGE = 'FIXED_PERCENTAGE',
        FIXED_AMOUNT = 'FIXED_AMOUNT',
        VARIABLE_PERCENTAGE = 'VARIABLE_PERCENTAGE',
        VARIABLE_AMOUNT = 'VARIABLE_AMOUNT',
    }
    export enum ScopeEnum {
        OTHER_DISCOUNT_SCOPE = 'OTHER_DISCOUNT_SCOPE',
        LINE_ITEM = 'LINE_ITEM',
        ORDER = 'ORDER',
    }
}

/**
 * Indicates whether this is a line item or order level discount.
 */
export class OrderLineItemDiscountScope {}

/**
 * Indicates how the discount is applied to the associated line item or order.
 */
export class OrderLineItemDiscountType {}

/**
 * A [CatalogModifier](#type-catalogmodifier).
 */
export class OrderLineItemModifier {
    /**
     * The modifier's Unique identifier, unique only within this order. This field is read-only.
     */
    uid?: string;
    /**
     * The catalog object id referencing [CatalogModifier](#type-catalogmodifier).
     */
    catalog_object_id?: string;
    /**
     * The name of the item modifier.
     */
    name?: string;
    /**
     * The base price for the modifier. `base_price_money` is required for ad hoc modifiers. If both
     * `catalog_object_id` and `base_price_money` are set, `base_price_money` will override the predefined
     * [CatalogModifier](#type-catalogmodifier) price.
     */
    base_price_money?: Money;
    /**
     * The total price of the item modifier for its line item.
     * This is the modifier's `base_price_money` multiplied by the line item's quantity.
     */
    total_price_money?: Money;
}

/**
 * Represents a tax that applies to one or more line items in an order.
 */
export class OrderLineItemTax {
    /**
     * The tax's Unique identifier, unique only within this order. This field is read-only.
     */
    uid?: string;
    /**
     * The catalog object id referencing [CatalogTax](#type-catalogtax).
     */
    catalog_object_id?: string;
    /**
     * The tax's name.
     */
    name?: string;
    /**
     * Indicates the calculation method used to apply the tax.
     * See [OrderLineItemTaxType](#type-orderlineitemtaxtype) for possible values.
     */
    type?: OrderLineItemTax.TypeEnum;
    /**
     * The percentage of the tax, as a string representation of a decimal number.  A value of `7.25` corresponds to a
     * percentage of 7.25%.
     */
    percentage?: string;
    /**
     * The amount of the money applied by the tax in an order.
     */
    applied_money?: Money;
    /**
     * Indicates the level at which the tax applies. This field is set by the server. If set in a CreateOrder request,
     * it will be ignored on write. See [OrderLineItemTaxScope](#type-orderlineitemtaxscope) for possible values.
     */
    scope?: OrderLineItemTax.ScopeEnum;
}

export namespace OrderLineItemTax {
    export enum TypeEnum {
        UNKNOWN_TAX = 'UNKNOWN_TAX',
        ADDITIVE = 'ADDITIVE',
        INCLUSIVE = 'INCLUSIVE',
    }
    export enum ScopeEnum {
        OTHER_TAX_SCOPE = 'OTHER_TAX_SCOPE',
        LINE_ITEM = 'LINE_ITEM',
        ORDER = 'ORDER',
    }
}

/**
 * Indicates whether this is a line item or order level tax.
 */
export class OrderLineItemTaxScope {}

/**
 * Indicates how the tax is applied to the associated line item or order.
 */
export class OrderLineItemTaxType {}

/**
 * A collection of various money amounts.
 */
export class OrderMoneyAmounts {
    /**
     * Total money.
     */
    total_money?: Money;
    /**
     * Money associated with taxes.
     */
    tax_money?: Money;
    /**
     * Money associated with discounts.
     */
    discount_money?: Money;
    /**
     * Money associated with tips.
     */
    tip_money?: Money;
    /**
     * Money associated with service charges.
     */
    service_charge_money?: Money;
}

/**
 * Contains the measurement unit for a quantity and a precision which specifies the number of digits after the decimal
 * point for decimal quantities.
 */
export class OrderQuantityUnit {
    /**
     * A [MeasurementUnit](#type-measurementunit) that represents the unit of measure for the quantity.
     */
    measurement_unit?: MeasurementUnit;
    /**
     * For non-integer quantities, represents the number of digits after the decimal point that are recorded for this quantity.
     * For example, a precision of 1 allows quantities like "1.0" and "1.1", but not "1.01".
     * Min: 0. Max: 5. Orders Hub and older versions of Connect do not support non-integer quantities.
     * See [Decimal quantities with Orders hub and older versions of Connect](/more-apis/orders/overview#decimal-quantities).
     */
    precision?: number;
}

/**
 * The set of line items, service charges, taxes, discounts, tips, etc. being returned in an Order.
 */
export class OrderReturn {
    /**
     * The return's Unique identifier, unique only within this order. This field is read-only.
     */
    uid?: string;
    /**
     * Order which contains the original sale of these returned line items. This will be unset for unlinked returns.
     */
    source_order_id?: string;
    /**
     * Collection of line items which are being returned.
     */
    return_line_items?: Array<OrderReturnLineItem>;
    /**
     * Collection of taxes which are being returned.
     */
    return_taxes?: Array<OrderReturnTax>;
    /**
     * Collection of discounts which are being returned.
     */
    return_discounts?: Array<OrderReturnDiscount>;
    /**
     * A positive or negative rounding adjustment to the total value being returned. Commonly used to apply Cash Rounding
     * when the minimum unit of account is smaller than the lowest physical denomination of currency.
     */
    rounding_adjustment?: OrderRoundingAdjustment;
    /**
     * Aggregate monetary value being returned by this Return entry.
     */
    return_amounts?: OrderMoneyAmounts;
}

/**
 * The line item discount being returned.
 */
export class OrderReturnDiscount {
    /**
     * The return discount's Unique identifier, unique only within this order.
     */
    uid?: string;
    /**
     * `uid` of the Discount from the Order which contains the original application of this discount.
     */
    source_discount_uid?: string;
    /**
     * The catalog object id referencing [CatalogDiscount](#type-catalogdiscount).
     */
    catalog_object_id?: string;
    /**
     * The discount's name.
     */
    name?: string;
    /**
     * The type of the discount. If it is created by API, it would be either `FIXED_PERCENTAGE` or `FIXED_AMOUNT`.
     * VARIABLE_* is not supported in API because the order is created at the time of sale and either percentage
     * or amount has to be specified. See [OrderLineItemDiscountType](#type-orderlineitemdiscounttype) for possible values.
     */
    type?: OrderReturnDiscount.TypeEnum;
    /**
     * The percentage of the tax, as a string representation of a decimal number.
     * A value of `7.25` corresponds to a percentage of 7.25%.
     * The percentage won't be set for an amount-based discount.
     */
    percentage?: string;
    /**
     * The total monetary amount of the applicable discount. If it is at order level, it is the value of the order level discount.
     * If it is at line item level, it is the value of the line item level discount.
     * The amount_money won't be set for a percentage-based discount.
     */
    amount_money?: Money;
    /**
     * The amount of discount actually applied to this line item. When an amount-based discount is at order-level,
     * this value is different from `amount_money` because the discount is distributed across the line items.
     */
    applied_money?: Money;
    /**
     * Indicates the level at which the discount applies. This field is set by the server.
     * If set in a CreateOrder request, it will be ignored on write.
     * See [OrderLineItemDiscountScope](#type-orderlineitemdiscountscope) for possible values.
     */
    scope?: OrderReturnDiscount.ScopeEnum;
}

export namespace OrderReturnDiscount {
    export enum TypeEnum {
        UNKNOWN_DISCOUNT = 'UNKNOWN_DISCOUNT',
        FIXED_PERCENTAGE = 'FIXED_PERCENTAGE',
        FIXED_AMOUNT = 'FIXED_AMOUNT',
        VARIABLE_PERCENTAGE = 'VARIABLE_PERCENTAGE',
        VARIABLE_AMOUNT = 'VARIABLE_AMOUNT',
    }
    export enum ScopeEnum {
        OTHER_DISCOUNT_SCOPE = 'OTHER_DISCOUNT_SCOPE',
        LINE_ITEM = 'LINE_ITEM',
        ORDER = 'ORDER',
    }
}

/**
 * The line item being returned in an Order.
 */
export class OrderReturnLineItem {
    /**
     * Unique identifier for this return line item entry. This is a read-only field.
     */
    uid?: string;
    /**
     * `uid` of the LineItem in the original sale Order.
     */
    source_line_item_uid?: string;
    /**
     * The name of the line item.
     */
    name?: string;
    /**
     * The quantity returned, formatted as a decimal number. For example: "3".
     * Line items with a `quantity_unit` can have non-integer quantities. For example: "1.70000".
     */
    quantity: string;
    /**
     * The unit and precision that this return line item's quantity is measured in.
     */
    quantity_unit?: OrderQuantityUnit;
    /**
     * The note of the returned line item.
     */
    note?: string;
    /**
     * The [CatalogItemVariation](#type-catalogitemvariation) id applied to this returned line item.
     */
    catalog_object_id?: string;
    /**
     * The name of the variation applied to this returned line item.
     */
    variation_name?: string;
    /**
     * The [CatalogModifier](#type-catalogmodifier)s applied to this line item.
     */
    return_modifiers?: Array<OrderReturnLineItemModifier>;
    /**
     * A list of taxes applied to this line item. On read or retrieve, this list includes both item-level taxes and any
     * return-level taxes apportioned to this item.
     */
    return_taxes?: Array<OrderReturnTax>;
    /**
     * A list of discounts applied to this line item. On read or retrieve, this list includes both item-level discounts
     * and any return-level discounts apportioned to this item.
     */
    return_discounts?: Array<OrderReturnDiscount>;
    /**
     * The base price for a single unit of the line item.
     */
    base_price_money?: Money;
    /**
     * The total price of all item variations returned in this line item.
     * Calculated as `base_price_money` multiplied by `quantity`. Does not include modifiers.
     */
    variation_total_price_money?: Money;
    /**
     * The gross return amount of money calculated as (item base price + modifiers price) * quantity.
     */
    gross_return_money?: Money;
    /**
     * The total tax amount of money to return for the line item.
     */
    total_tax_money?: Money;
    /**
     * The total discount amount of money to return for the line item.
     */
    total_discount_money?: Money;
    /**
     * The total amount of money to return for this line item.
     */
    total_money?: Money;
}

/**
 * A line item modifier being returned.
 */
export class OrderReturnLineItemModifier {
    /**
     * The return modifier's Unique identifier, unique only within this order
     */
    uid?: string;
    /**
     * `uid` of the Modifier from the LineItem from the Order which contains the original sale of this line item modifier.
     */
    source_modifier_uid?: string;
    /**
     * The catalog object id referencing [CatalogModifier](#type-catalogmodifier).
     */
    catalog_object_id?: string;
    /**
     * The name of the item modifier.
     */
    name?: string;
    /**
     * The base price for the modifier. base_price_money` is required for ad hoc modifiers.
     * If both `catalog_object_id` and `base_price_money` are set, `base_price_money` will override
     * the predefined [CatalogModifier](#type-catalogmodifier) price.
     */
    base_price_money?: Money;
    /**
     * The total price of the item modifier for its line item.
     * This is the modifier's `base_price_money` multiplied by the line item's quantity.
     */
    total_price_money?: Money;
}

/**
 * The line item tax being returned.
 */
export class OrderReturnTax {
    /**
     * The return tax's Unique identifier, unique only within this order.
     */
    uid?: string;
    /**
     * `uid` of the Tax from the Order which contains the original charge of this tax.
     */
    source_tax_uid?: string;
    /**
     * The catalog object id referencing [CatalogTax](#type-catalogtax).
     */
    catalog_object_id?: string;
    /**
     * The tax's name.
     */
    name?: string;
    /**
     * Indicates the calculation method used to apply the tax.
     * See [OrderLineItemTaxType](#type-orderlineitemtaxtype) for possible values.
     */
    type?: OrderReturnTax.TypeEnum;
    /**
     * The percentage of the tax, as a string representation of a decimal number.
     * A value of `7.25` corresponds to a percentage of 7.25%.
     */
    percentage?: string;
    /**
     * The amount of the money applied by the tax in an order.
     */
    applied_money?: Money;
    /**
     * Indicates the level at which the tax applies. This field is set by the server.
     * If set in a CreateOrder request, it will be ignored on write.
     * See [OrderLineItemTaxScope](#type-orderlineitemtaxscope) for possible values
     */
    scope?: OrderReturnTax.ScopeEnum;
}

export namespace OrderReturnTax {
    export enum TypeEnum {
        UNKNOWN_TAX = 'UNKNOWN_TAX',
        ADDITIVE = 'ADDITIVE',
        INCLUSIVE = 'INCLUSIVE',
    }
    export enum ScopeEnum {
        OTHER_TAX_SCOPE = 'OTHER_TAX_SCOPE',
        LINE_ITEM = 'LINE_ITEM',
        ORDER = 'ORDER',
    }
}

/**
 * A rounding adjustment of the money being returned. Commonly used to apply Cash Rounding when the minimum unit
 * of account is smaller than the lowest physical denomination of currency.
 */
export class OrderRoundingAdjustment {
    /**
     * The rounding adjustment's Unique identifier, unique only within this order. This field is read-only.
     */
    uid?: string;
    /**
     * The name of the rounding adjustment from the original sale Order.
     */
    name?: string;
    /**
     * Actual rounding adjustment amount.
     */
    amount_money?: Money;
}

/**
 * Represents the origination details of an order.
 */
export class OrderSource {
    /**
     * The name used to identify the place (physical or digital) that an order originates.
     * If unset, the name defaults to the name of the application that created the order.
     */
    name?: string;
}

/**
 * The state of the order.
 */
export class OrderState {}

/**
 * Indicates the Square product used to generate an inventory change.
 */
export class Product {}

/**
 * Represents a refund processed for a Square transaction.
 */
export class Refund {
    /**
     * The refund's unique ID.
     */
    id: string;
    /**
     * The ID of the refund's associated location.
     */
    location_id: string;
    /**
     * The ID of the transaction that the refunded tender is part of.
     */
    transaction_id: string;
    /**
     * The ID of the refunded tender.
     */
    tender_id: string;
    /**
     * The time when the refund was created, in RFC 3339 format.
     */
    created_at?: string;
    /**
     * The reason for the refund being issued.
     */
    reason: string;
    /**
     * The amount of money refunded to the buyer.
     */
    amount_money: Money;
    /**
     * The current status of the refund (`PENDING`, `APPROVED`, `REJECTED`, or `FAILED`).
     * See [RefundStatus](#type-refundstatus) for possible values.
     */
    status: Refund.StatusEnum;
    /**
     * The amount of Square processing fee money refunded to the *merchant*.
     */
    processing_fee_money?: Money;
    /**
     * Additional recipients (other than the merchant) receiving a portion of this refund. For example, fees assessed on
     * a refund of a purchase by a third party integration.
     */
    additional_recipients?: Array<AdditionalRecipient>;
}

export namespace Refund {
    export enum StatusEnum {
        PENDING = 'PENDING',
        APPROVED = 'APPROVED',
        REJECTED = 'REJECTED',
        FAILED = 'FAILED',
    }
}

/**
 * Indicates a refund's current status.
 */
export class RefundStatus {}

/**
 * Defines the parameters that can be included in the body of a request to the RegisterDomain endpoint.
 */
export class RegisterDomainRequest {
    /**
     * A domain name as described in RFC-1034 that will be registered with ApplePay
     */
    domain_name: string;
}

/**
 * Defines the fields that are included in the response body of a request to the RegisterDomain endpoint.
 * Either `errors` or `status` will be present in a given response (never both).
 */
export class RegisterDomainResponse {
    /**
     * Any errors that occurred during the request.
     */
    errors?: Array<Error>;
    /**
     * Status of the domain registration. See [RegisterDomainResponseStatus](#type-registerdomainresponsestatus) for possible values.
     */
    status?: RegisterDomainResponse.StatusEnum;
}

export namespace RegisterDomainResponse {
    export enum StatusEnum {
        PENDING = 'PENDING',
        VERIFIED = 'VERIFIED',
    }
}

/**
 * The status of domain registration.
 */
export class RegisterDomainResponseStatus {}

export class RenewTokenRequest {
    /**
     * The token you want to renew.
     */
    access_token?: string;
}

export class RenewTokenResponse {
    /**
     * The renewed access token. This value might be different from the `access_token` you provided in your request. You
     * provide this token in a header with every request to Connect API endpoints. See [Request and response
     * headers](https://docs.connect.squareup.com/api/connect/v2/#requestandresponseheaders) for the format of this
     * header.
     */
    access_token?: string;
    /**
     * This value is always _bearer_.
     */
    token_type?: string;
    /**
     * The date when access_token expires, in [ISO 8601](http://www.iso.org/iso/home/standards/iso8601.htm) format.
     */
    expires_at?: string;
    /**
     * The ID of the authorizing merchant's business.
     */
    merchant_id?: string;
    /**
     * The ID of the merchant
     * [subscription](https://docs.connect.squareup.com/api/connect/v1/#navsection-subscriptionmanagement) associated
     * with the authorization. Only present if the merchant signed up for a subscription during authorization.
     */
    subscription_id?: string;
    /**
     * The ID of the [subscription](https://docs.connect.squareup.com/api/connect/v1/#navsection-subscriptionmanagement)
     * plan the merchant signed up for. Only present if the merchant signed up for a subscription during authorization.
     */
    plan_id?: string;
}

export class RetrieveCatalogObjectRequest {
    /**
     * If `true`, the response will include additional objects that are related to the requested object, as follows:
     * If the `object` field of the response contains a [CatalogItem](#type-catalogitem), its associated
     * [CatalogCategory](#type-catalogcategory), [CatalogTax](#type-catalogtax)es, and
     * [CatalogModifierList](#type-catalogmodifierlist)s will be returned in the `related_objects` field of the
     * response. If the `object` field of the response contains a [CatalogItemVariation](#type-catalogitemvariation),
     * its parent [CatalogItem](#type-catalogitem) will be returned in the `related_objects` field of the response.
     * Default value: `false`.
     */
    include_related_objects?: boolean;
}

export class RetrieveCatalogObjectResponse {
    /**
     * The set of [Error](#type-error)s encountered.
     */
    errors?: Array<Error>;
    /**
     * The [CatalogObject](#type-catalogobject)s returned.
     */
    object?: CatalogObject;
    /**
     * A list of [CatalogObject](#type-catalogobject)s referenced by the object in the `object` field.
     */
    related_objects?: Array<CatalogObject>;
}

/**
 * Defines the fields that are included in requests to the RetrieveCustomer endpoint.
 */
export class RetrieveCustomerRequest {}

/**
 * Defines the fields that are included in the response body of a request to the RetrieveCustomer endpoint.
 * One of `errors` or `customer` is present in a given response (never both).
 */
export class RetrieveCustomerResponse {
    /**
     * Any errors that occurred during the request.
     */
    errors?: Array<Error>;
    /**
     * The requested customer.
     */
    customer?: Customer;
}

/**
 * Retrieve an employee by `Employee.id`
 */
export class RetrieveEmployeeRequest {}

/**
 * Defines the fields that are included in the response body of a request to the RetrieveEmployee endpoint.
 * One of `errors` or `employee` is present in a given response (never both).
 */
export class RetrieveEmployeeResponse {
    /**
     * The response object.
     */
    employee?: Employee;
    /**
     * Any errors that occurred during the request.
     */
    errors?: Array<Error>;
}

export class RetrieveInventoryAdjustmentRequest {}

export class RetrieveInventoryAdjustmentResponse {
    /**
     * Any errors that occurred during the request.
     */
    errors?: Array<Error>;
    /**
     * The requested [InventoryAdjustment](#type-inventoryadjustment).
     */
    adjustment?: InventoryAdjustment;
}

export class RetrieveInventoryChangesRequest {
    /**
     * The [Location](#type-location) IDs to look up as a comma-separated list. An empty list queries all locations.
     */
    location_ids?: string;
    /**
     * A pagination cursor returned by a previous call to this endpoint. Provide this to retrieve the next set of
     * results for the original query. See [Pagination](/basics/api101/pagination) for more information.
     */
    cursor?: string;
}

export class RetrieveInventoryChangesResponse {
    /**
     * Any errors that occurred during the request.
     */
    errors?: Array<Error>;
    /**
     * The set of inventory changes for the requested object and locations.
     */
    changes?: Array<InventoryChange>;
    /**
     * The pagination cursor to be used in a subsequent request. If unset, this is the final response.
     * See [Pagination](/basics/api101/pagination) for more information.
     */
    cursor?: string;
}

export class RetrieveInventoryCountRequest {
    /**
     * The [Location](#type-location) IDs to look up as a comma-separated list. An empty list queries all locations.
     */
    location_ids?: string;
    /**
     * A pagination cursor returned by a previous call to this endpoint. Provide this to retrieve the next set of
     * results for the original query. See [Pagination](/basics/api101/pagination) for more information.
     */
    cursor?: string;
}

export class RetrieveInventoryCountResponse {
    /**
     * Any errors that occurred during the request.
     */
    errors?: Array<Error>;
    /**
     * The current calculated inventory counts for the requested object and locations.
     */
    counts?: Array<InventoryCount>;
    /**
     * The pagination cursor to be used in a subsequent request. If unset, this is the final response.  See
     * [Pagination](/basics/api101/pagination) for more information.
     */
    cursor?: string;
}

export class RetrieveInventoryPhysicalCountRequest {}

export class RetrieveInventoryPhysicalCountResponse {
    /**
     * Any errors that occurred during the request.
     */
    errors?: Array<Error>;
    /**
     * The requested [InventoryPhysicalCount](#type-inventoryphysicalcount).
     */
    count?: InventoryPhysicalCount;
}

/**
 * Defines the request body fields for calls to the RetrieveTransaction endpoint.
 */
export class RetrieveTransactionRequest {}

/**
 * Defines the fields that are included in the response body of a request to the RetrieveTransaction endpoint.
 * One of `errors` or `transaction` is present in a given response (never both).
 */
export class RetrieveTransactionResponse {
    /**
     * Any errors that occurred during the request.
     */
    errors?: Array<Error>;
    /**
     * The requested transaction.
     */
    transaction?: Transaction;
}

export class RevokeTokenRequest {
    /**
     * Your application's ID, available from the [application dashboard](https://connect.squareup.com/apps).
     */
    client_id?: string;
    /**
     * The access token of the merchant whose token you want to revoke.
     * Do not provide a value for merchant_id if you provide this parameter.
     */
    access_token?: string;
    /**
     * The ID of the merchant whose token you want to revoke.
     * Do not provide a value for access_token if you provide this parameter.
     */
    merchant_id?: string;
}

export class RevokeTokenResponse {
    /**
     * If the request is successful, this is true.
     */
    success?: boolean;
}

export class SearchCatalogObjectsRequest {
    /**
     * The pagination cursor returned in the previous response. Leave unset for an initial request. See
     * [Pagination](/basics/api101/pagination) for more information.
     */
    cursor?: string;
    /**
     * The desired set of object types to appear in the search results. The legal values are taken from the
     * [CatalogObjectType](#type-catalogobjecttype) enumeration, namely "ITEM", "ITEM_VARIATION", "CATEGORY", "DISCOUNT",
     * "TAX", "MODIFIER", or "MODIFIER_LIST". See [CatalogObjectType](#type-catalogobjecttype) for possible values.
     */
    object_types?: Array<SearchCatalogObjectsRequest.ObjectTypesEnum>;
    /**
     * If `true`, deleted objects will be included in the results.
     * Deleted objects will have their `is_deleted` field set to `true`.
     */
    include_deleted_objects?: boolean;
    /**
     * If `true`, the response will include additional objects that are related to the requested object, as follows:  If
     * a [CatalogItem](#type-catalogitem) is returned in the object field of the response, its associated
     * [CatalogCategory](#type-catalogcategory), [CatalogTax](#type-catalogtax)es, and
     * [CatalogModifierList](#type-catalogmodifierlist)s will be included in the `related_objects` field of the response.
     * If a [CatalogItemVariation](#type-catalogitemvariation) is returned in the object field of the response,
     * its parent [CatalogItem](#type-catalogitem) will be included in the `related_objects` field of the response.
     */
    include_related_objects?: boolean;
    /**
     * Return objects modified after this [timestamp](#workingwithdates), in RFC 3339 format, e.g., "2016-09-04T23:59:33.123Z".
     * The timestamp is exclusive - objects with a timestamp equal to `begin_time` will not be included in the response.
     */
    begin_time?: string;
    /**
     * A query to be used to filter or sort the results. If no query is specified, the entire catalog will be returned.
     */
    query?: CatalogQuery;
    /**
     * A limit on the number of results to be returned in a single page.
     * The limit is advisory - the implementation may return more or fewer results.
     * If the supplied limit is negative, zero, or is higher than the maximum limit of 1,000, it will be ignored.
     */
    limit?: number;
}

export namespace SearchCatalogObjectsRequest {
    export enum ObjectTypesEnum {
        ITEM = 'ITEM',
        IMAGE = 'IMAGE',
        CATEGORY = 'CATEGORY',
        ITEM_VARIATION = 'ITEM_VARIATION',
        TAX = 'TAX',
        DISCOUNT = 'DISCOUNT',
        MODIFIER_LIST = 'MODIFIER_LIST',
        MODIFIER = 'MODIFIER',
    }
}

export class SearchCatalogObjectsResponse {
    /**
     * The set of [Error](#type-error)s encountered.
     */
    errors?: Array<Error>;
    /**
     * The pagination cursor to be used in a subsequent request. If unset, this is the final response.
     * See [Pagination](/basics/api101/pagination) for more information.
     */
    cursor?: string;
    /**
     * The [CatalogObject](#type-catalogobject)s returned.
     */
    objects?: Array<CatalogObject>;
    /**
     * A list of [CatalogObject](#type-catalogobject)s referenced by the objects in the `objects` field.
     */
    related_objects?: Array<CatalogObject>;
}

/**
 * Defines the fields included in the request body for the SearchCustomers endpoint.
 */
export class SearchCustomersRequest {
    /**
     * Include the pagination cursor in subsequent calls to this endpoint to retrieve the next set of results associated
     * with the original query. See [Pagination](/basics/api101/pagination) for more information.
     */
    cursor?: string;
    /**
     * A limit on the number of results to be returned in a single page. The limit is advisory - the implementation may
     * return more or fewer results. If the supplied limit is negative, zero, or is higher than the maximum limit of
     * 1,000, it will be ignored.
     */
    limit?: number;
    /**
     * Query customers based on the given conditions and sort order. Calling SearchCustomers without an explicit query
     * parameter will return all customers ordered alphabetically based on `given_name` and `family_name`.
     */
    query?: CustomerQuery;
}

/**
 * Defines the fields that are included in the response body of a request to the SearchCustomers endpoint.
 * One of `errors` or `customers` is present in a given response (never both).
 */
export class SearchCustomersResponse {
    /**
     * Any errors that occurred during the request.
     */
    errors?: Array<Error>;
    /**
     * An array of `Customer` objects that match a query.
     */
    customers?: Array<Customer>;
    /**
     * A pagination cursor that can be used during subsequent calls to SearchCustomers to retrieve the next set of
     * results associated with the original query. Pagination cursors are only present when a request succeeds and
     * additional results are available. See [Pagination](/basics/api101/pagination) for more information.
     */
    cursor?: string;
}

/**
 * Filter based on Order `customer_id` and any Tender `customer_id` associated with the Order.
 * Does not filter based on the [FulfillmentRecipient](#type-orderfulfillmentrecipient) `customer_id`.
 */
export class SearchOrdersCustomerFilter {
    /**
     * Filter by orders with any of the listed `customer_id`s. Max: 10 `customer_id`s.
     */
    customer_ids?: Array<string>;
}

/**
 * Filter for `Order` objects based on whether their `CREATED_AT`, `CLOSED_AT` or `UPDATED_AT` timestamps fall
 * within a specified time range. You can specify the time range and which timestamp to filter for.
 * You can filter for only one time range at a time.  For each time range, the start time and end time are inclusive.
 * If the end time is absent, it defaults to the time of the first request for the cursor.
 * @important If you use the DateTimeFilter to filter for `CLOSED_AT` or `UPDATED_AT`, you must also set
 * the [OrdersSort](#type-searchorderordersort). The TimeRange used in DateTimeFilter must correspond to the `sort_field`
 * in the [OrdersSort](#type-searchorderordersort) object.
 */
export class SearchOrdersDateTimeFilter {
    /**
     * Time range for filtering on the `created_at` timestamp.
     */
    created_at?: TimeRange;
    /**
     * Time range for filtering on the `updated_at` timestamp.
     */
    updated_at?: TimeRange;
    /**
     * Time range for filtering on the `closed_at` timestamp.
     */
    closed_at?: TimeRange;
}

/**
 * Filter options to use for a query. Multiple filters will be ANDed together.
 */
export class SearchOrdersFilter {
    /**
     * Filter by [`OrderState`](#type-orderstate).
     */
    state_filter?: SearchOrdersStateFilter;
    /**
     * Filter for results within a time range.
     */
    date_time_filter?: SearchOrdersDateTimeFilter;
    /**
     * Filter by fulfillment type or state.
     */
    fulfillment_filter?: SearchOrdersFulfillmentFilter;
    /**
     * Filter by source of order.
     */
    source_filter?: SearchOrdersSourceFilter;
    /**
     * Filter by customers associated with the order.
     */
    customer_filter?: SearchOrdersCustomerFilter;
}

/**
 * Filter based on [Order Fulfillment](#type-orderfulfillment) information.
 */
export class SearchOrdersFulfillmentFilter {
    /**
     * List of [fulfillment types](#type-orderfulfillmenttype) to filter for.
     * Will return orders if any of its fulfillments match any of the fulfillment types listed in this field.
     * See [OrderFulfillmentType](#type-orderfulfillmenttype) for possible values.
     */
    fulfillment_types: Array<SearchOrdersFulfillmentFilter.FulfillmentTypesEnum>;
    /**
     * List of [fulfillment states](#type-orderfulfillmentstate) to filter for.
     * Will return orders if any of its fulfillments match any of the fulfillment states listed in this field.
     * See [OrderFulfillmentState](#type-orderfulfillmentstate) for possible values.
     */
    fulfillment_states?: Array<SearchOrdersFulfillmentFilter.FulfillmentStatesEnum>;
}

export namespace SearchOrdersFulfillmentFilter {
    export enum FulfillmentTypesEnum {
        PICKUP = 'PICKUP',
    }
    export enum FulfillmentStatesEnum {
        PROPOSED = 'PROPOSED',
        RESERVED = 'RESERVED',
        PREPARED = 'PREPARED',
        COMPLETED = 'COMPLETED',
        CANCELED = 'CANCELED',
        FAILED = 'FAILED',
    }
}

/**
 * Contains query criteria for the search.
 */
export class SearchOrdersQuery {
    /**
     * Criteria to filter results by.
     */
    filter?: SearchOrdersFilter;
    /**
     * Criteria to sort results by.
     */
    sort?: SearchOrdersSort;
}

/**
 * The request does not have any required fields. When given no query criteria, SearchOrders will return all results
 * for all of the merchant’s locations. When fetching additional pages using a `cursor`, the `query` must be equal
 * to the `query` used to fetch the first page of results.
 */
export class SearchOrdersRequest {
    /**
     * The location IDs for the orders to query. The caller must have access to all provided locations.
     * Min: 1 `location_ids`. Max: 10 `location_ids`.
     */
    location_ids?: Array<string>;
    /**
     * A pagination cursor returned by a previous call to this endpoint.
     * Provide this to retrieve the next set of results for your original query.
     * See [Pagination](/basics/api101/pagination) for more information.
     */
    cursor?: string;
    /**
     * Query conditions used to filter or sort the results. Note that when fetching additional pages using a `cursor`,
     * the `query` must be equal to the `query` used to fetch the first page of results.
     */
    query?: SearchOrdersQuery;
    /**
     * Number of results to be returned in a single page. SearchOrders may use a smaller limit than specified depending
     * on server load. If the response includes a `cursor` field, you can use it to retrieve the next set of results.
     * Default: `500`.
     */
    limit?: number;
    /**
     * If set to `true`, SearchOrders will return [`OrderEntry`](#type-orderentry) objects instead of `Order` objects.
     * `OrderEntry` objects are lightweight descriptions of orders that include `order_id`s.  Default: `false`.
     */
    return_entries?: boolean;
}

/**
 * Only one of `order_entries` or `orders` fields will be set, depending on whether `return_entries` was set
 * on the [SearchOrdersRequest](#type-searchorderrequest).
 */
export class SearchOrdersResponse {
    /**
     * List of [OrderEntries](#type-orderentry) that fit the query conditions.
     * Populated only if `order_entries` was set to `true` in the request.
     */
    order_entries?: Array<OrderEntry>;
    /**
     * List of [Orders](#type-order) that match query conditions.
     * Populated only if `return_entries` in the request is set to `false`.
     */
    orders?: Array<Order>;
    /**
     * The pagination cursor to be used in a subsequent request. If unset, this is the final response.
     * See [Pagination](/basics/api101/pagination) for more information.
     */
    cursor?: string;
    /**
     * [Errors](#type-error) encountered during the search.
     */
    errors?: Array<Error>;
    /**
     * List of transaction IDs identifying transactions that could not be converted to an `Order`.
     * Empty if `return_entries` is true, however, attempts to retrieve those orders may encounter subsequent
     * `unconvertible_transcation_ids` Note that this field will not be present after SearchOrders moves from BETA to GA.
     */
    unconvertible_transaction_ids?: Array<string>;
}

/**
 * Sorting options for a query. Returned Orders will always be sorted on a timestamp.
 */
export class SearchOrdersSort {
    /**
     * The field to sort by.
     * @important When using a [DateTimeFilter](#type-searchordersfilter), `sort_field` must match the set time range field.
     * If this field does not match the time range field in `DateTimeFilter`, SearchOrder will return an error.
     * Default: `CREATED_AT`. See [SearchOrdersSortField](#type-searchorderssortfield) for possible values.
     */
    sort_field: SearchOrdersSort.SortFieldEnum;
    /**
     * The order in which results are returned. Defaults to `DESC`. See [SortOrder](#type-sortorder) for possible values.
     */
    sort_order?: SearchOrdersSort.SortOrderEnum;
}

export namespace SearchOrdersSort {
    export enum SortFieldEnum {
        CREATED_AT = 'CREATED_AT',
        UPDATED_AT = 'UPDATED_AT',
        CLOSED_AT = 'CLOSED_AT',
    }
    export enum SortOrderEnum {
        DESC = 'DESC',
        ASC = 'ASC',
    }
}

/**
 * Specifies which timestamp to use to sort SearchOrder results.
 */
export class SearchOrdersSortField {}

/**
 * Filter based on Order `source` information.
 */
export class SearchOrdersSourceFilter {
    /**
     * Filters by [Source](#type-ordersource) `name`.
     * Will return any orders with with `source.name`s that match any of the listed source names.  Max: 10 `source_names`.
     */
    source_names?: Array<string>;
}

/**
 * Filter by current Order `state`.
 */
export class SearchOrdersStateFilter {
    /**
     * States to filter for. See [OrderState](#type-orderstate) for possible values.
     */
    states: Array<SearchOrdersStateFilter.StatesEnum>;
}

export namespace SearchOrdersStateFilter {
    export enum StatesEnum {
        OPEN = 'OPEN',
        COMPLETED = 'COMPLETED',
        CANCELED = 'CANCELED',
    }
}

/**
 * A request for a filtered and sorted set of `Shift` objects.
 */
export class SearchShiftsRequest {
    /**
     * Query filters.
     */
    query?: ShiftQuery;
    /**
     * number of resources in a page (200 by default).
     */
    limit?: number;
    /**
     * opaque cursor for fetching the next page.
     */
    cursor?: string;
}

/**
 * The response to a request for `Shift` objects. Contains the requested `Shift` objects. May contain a set of `Error`
 * objects if the request resulted in errors.
 */
export class SearchShiftsResponse {
    /**
     * Shifts
     */
    shifts?: Array<Shift>;
    /**
     * Opaque cursor for fetching the next page.
     */
    cursor?: string;
    /**
     * Any errors that occurred during the request.
     */
    errors?: Array<Error>;
}

/**
 * A record of the hourly rate, start, and end times for a single work shift  for an employee. May include a record of
 * the start and end times for breaks  taken during the shift.
 */
export class Shift {
    /**
     * UUID for this object
     */
    id?: string;
    /**
     * The ID of the employee this shift belongs to.
     */
    employee_id: string;
    /**
     * The ID of the location this shift occurred at. Should be based on where the employee clocked in.
     */
    location_id?: string;
    /**
     * Read-only convenience value that is calculated from the location based on `location_id`. Format: the IANA
     * Timezone Database identifier for the location timezone.
     */
    timezone?: string;
    /**
     * RFC 3339; shifted to location timezone + offset. Precision up to the minute is respected; seconds are truncated.
     */
    start_at: string;
    /**
     * RFC 3339; shifted to timezone + offset. Precision up to the minute is respected; seconds are truncated. The
     * `end_at` minute is not counted when the shift length is calculated. For example, a shift from `00:00` to `08:01`
     * is considered an 8 hour shift (midnight to 8am).
     */
    end_at?: string;
    /**
     * Job and pay related information.
     */
    wage?: ShiftWage;
    /**
     * A list of any paid or unpaid breaks that were taken during this shift.
     */
    breaks?: Array<ModelBreak>;
    /**
     * Describes working state of the current `Shift`. See [ShiftStatus](#type-shiftstatus) for possible values.
     */
    status?: Shift.StatusEnum;
    /**
     * Used for resolving concurrency issues; request will fail if version provided does not match server version at
     * time of request. If not provided, Square executes a blind write; potentially overwriting data from another write.
     */
    version?: number;
    /**
     * A read-only timestamp in RFC 3339 format; presented in UTC.
     */
    created_at?: string;
    /**
     * A read-only timestamp in RFC 3339 format; presented in UTC.
     */
    updated_at?: string;
}

export namespace Shift {
    export enum StatusEnum {
        OPEN = 'OPEN',
        CLOSED = 'CLOSED',
    }
}

/**
 * Defines a filter used in a search for `Shift` records. `AND` logic is used by Square's servers to apply each filter
 * property specified.
 */
export class ShiftFilter {
    /**
     * Fetch shifts for the specified location.
     */
    location_id?: Array<string>;
    /**
     * Fetch shifts for the specified employee.
     */
    employee_id?: Array<string>;
    /**
     * Fetch a `Shift` instance by `Shift.status`. See [ShiftFilterStatus](#type-shiftfilterstatus) for possible values.
     */
    status?: ShiftFilter.StatusEnum;
    /**
     * Fetch `Shift`s that start in the time range - Inclusive.
     */
    start?: TimeRange;
    /**
     * Fetch the `Shift`s that end in the time range - Inclusive.
     */
    end?: TimeRange;
    /**
     * Fetch the `Shift`s based on workday date range.
     */
    workday?: ShiftWorkday;
}

export namespace ShiftFilter {
    export enum StatusEnum {
        OPEN = 'OPEN',
        CLOSED = 'CLOSED',
    }
}

/**
 * Specifies the `status` of `Shift` records to be returned.
 */
export class ShiftFilterStatus {}

/**
 * The parameters of a `Shift` search query. Includes filter and sort options.
 */
export class ShiftQuery {
    /**
     * Query filter options
     */
    filter?: ShiftFilter;
    /**
     * Sort order details
     */
    sort?: ShiftSort;
}

/**
 * Sets the sort order of search results.
 */
export class ShiftSort {
    /**
     * The field to sort on. See [ShiftSortField](#type-shiftsortfield) for possible values.
     */
    field?: ShiftSort.FieldEnum;
    /**
     * The order in which results are returned. Defaults to DESC. See [SortOrder](#type-sortorder) for possible values.
     */
    order?: ShiftSort.OrderEnum;
}

export namespace ShiftSort {
    export enum FieldEnum {
        START_AT = 'START_AT',
        END_AT = 'END_AT',
        CREATED_AT = 'CREATED_AT',
        UPDATED_AT = 'UPDATED_AT',
    }
    export enum OrderEnum {
        DESC = 'DESC',
        ASC = 'ASC',
    }
}

/**
 * Enumerates the `Shift` fields to sort on.
 */
export class ShiftSortField {}

/**
 * Enumerates the possible status of a `Shift`.
 */
export class ShiftStatus {}

/**
 * The hourly wage rate used to compensate an employee for this shift.
 */
export class ShiftWage {
    /**
     * The name of the job performed during this shift. Square labor-reporting UIs may group shifts together by title.
     */
    title?: string;
    /**
     * Can be a custom-set hourly wage or the calculated effective hourly wage based on annual wage and hours worked per week.
     */
    hourly_rate?: Money;
}

/**
 * A `Shift` search query filter parameter that sets a range of days that  a `Shift` must start or end in before passing
 * the filter condition.
 */
export class ShiftWorkday {
    /**
     * Dates for fetching the shifts
     */
    date_range?: DateRange;
    /**
     * The strategy on which the dates are applied. See [ShiftWorkdayMatcher](#type-shiftworkdaymatcher) for possible values.
     */
    match_shifts_by?: ShiftWorkday.MatchShiftsByEnum;
    /**
     * Location-specific timezones convert workdays to datetime filters.
     * Every location included in the query must have a timezone, or this field must be provided as a fallback.
     * Format: the IANA timezone database identifier for the relevant timezone.
     */
    default_timezone?: string;
}

export namespace ShiftWorkday {
    export enum MatchShiftsByEnum {
        START_AT = 'START_AT',
        END_AT = 'END_AT',
        INTERSECTION = 'INTERSECTION',
    }
}

/**
 * Defines the logic used to apply a workday filter.
 */
export class ShiftWorkdayMatcher {}

/**
 * The order (e.g., chronological or alphabetical) in which results from a request are returned.
 */
export class SortOrder {}

/**
 * Provides information about the application used to generate an inventory change.
 */
export class SourceApplication {
    /**
     * Read-only [Product](#type-product) type for the application. See [Product](#type-product) for possible values.
     */
    product?: SourceApplication.ProductEnum;
    /**
     * Read-only Square ID assigned to the application. Only used for [Product](#type-product) type `EXTERNAL_API`.
     */
    application_id?: string;
    /**
     * Read-only display name assigned to the application (e.g. "Custom Application", "Square POS 4.74 for Android").
     */
    name?: string;
}

export namespace SourceApplication {
    export enum ProductEnum {
        SQUARE_POS = 'SQUARE_POS',
        EXTERNAL_API = 'EXTERNAL_API',
        BILLING = 'BILLING',
        APPOINTMENTS = 'APPOINTMENTS',
        INVOICES = 'INVOICES',
        ONLINE_STORE = 'ONLINE_STORE',
        PAYROLL = 'PAYROLL',
        DASHBOARD = 'DASHBOARD',
        ITEM_LIBRARY_IMPORT = 'ITEM_LIBRARY_IMPORT',
        OTHER = 'OTHER',
    }
}

/**
 * When to calculate the taxes due on a cart.
 */
export class TaxCalculationPhase {}

/**
 * Whether to the tax amount should be additional to or included in to the [CatalogItem](#type-catalogitem) price.
 */
export class TaxInclusionType {}

/**
 * Represents a tender (i.e., a method of payment) used in a Square transaction.
 */
export class Tender {
    /**
     * The tender's unique ID.
     */
    id?: string;
    /**
     * The ID of the transaction's associated location.
     */
    location_id?: string;
    /**
     * The ID of the tender's associated transaction.
     */
    transaction_id?: string;
    /**
     * The time when the tender was created, in RFC 3339 format.
     */
    created_at?: string;
    /**
     * An optional note associated with the tender at the time of payment.
     */
    note?: string;
    /**
     * The amount of the tender.
     */
    amount_money?: Money;
    /**
     * The tip's amount of the tender.
     */
    tip_money?: Money;
    /**
     * The amount of any Square processing fees applied to the tender. This field is not immediately populated when a
     * new transaction is created. It is usually available after about ten seconds.
     */
    processing_fee_money?: Money;
    /**
     * If the tender is associated with a customer or represents a customer's card on file, this is the ID of the
     * associated customer.
     */
    customer_id?: string;
    /**
     * The type of tender, such as `CARD` or `CASH`. See [TenderType](#type-tendertype) for possible values.
     */
    type: Tender.TypeEnum;
    /**
     * The details of the card tender. This value is present only if the value of `type` is `CARD`.
     */
    card_details?: TenderCardDetails;
    /**
     * The details of the cash tender. This value is present only if the value of `type` is `CASH`.
     */
    cash_details?: TenderCashDetails;
    /**
     * Additional recipients (other than the merchant) receiving a portion of this tender.
     * For example, fees assessed on the purchase by a third party integration.
     */
    additional_recipients?: Array<AdditionalRecipient>;
}

export namespace Tender {
    export enum TypeEnum {
        CARD = 'CARD',
        CASH = 'CASH',
        THIRD_PARTY_CARD = 'THIRD_PARTY_CARD',
        SQUARE_GIFT_CARD = 'SQUARE_GIFT_CARD',
        NO_SALE = 'NO_SALE',
        OTHER = 'OTHER',
    }
}

/**
 * Represents additional details of a tender with `type` `CARD` or `SQUARE_GIFT_CARD`
 */
export class TenderCardDetails {
    /**
     * The credit card payment's current state (such as `AUTHORIZED` or `CAPTURED`).
     * See [TenderCardDetailsStatus](#type-tendercarddetailsstatus) for possible values.
     */
    status?: TenderCardDetails.StatusEnum;
    /**
     * The credit card's non-confidential details.
     */
    card?: Card;
    /**
     * The method used to enter the card's details for the transaction.
     * See [TenderCardDetailsEntryMethod](#type-tendercarddetailsentrymethod) for possible values.
     */
    entry_method?: TenderCardDetails.EntryMethodEnum;
}

export namespace TenderCardDetails {
    export enum StatusEnum {
        AUTHORIZED = 'AUTHORIZED',
        CAPTURED = 'CAPTURED',
        VOIDED = 'VOIDED',
        FAILED = 'FAILED',
    }
    export enum EntryMethodEnum {
        SWIPED = 'SWIPED',
        KEYED = 'KEYED',
        EMV = 'EMV',
        ON_FILE = 'ON_FILE',
        CONTACTLESS = 'CONTACTLESS',
    }
}

/**
 * Indicates the method used to enter the card's details.
 */
export class TenderCardDetailsEntryMethod {}

/**
 * Indicates the card transaction's current status.
 */
export class TenderCardDetailsStatus {}

/**
 * Represents the details of a tender with `type` `CASH`.
 */
export class TenderCashDetails {
    /**
     * The total amount of cash provided by the buyer, before change is given.
     */
    buyer_tendered_money?: Money;
    /**
     * The amount of change returned to the buyer.
     */
    change_back_money?: Money;
}

/**
 * Indicates a tender's type.
 */
export class TenderType {}

/**
 * Represents a generic time range. The start and end values are represented in RFC-3339 format. Time ranges are
 * customized to be inclusive or exclusive based on the needs of a particular endpoint. Refer to the relevent
 * endpoint-specific documentation to determine how time ranges are handled.
 */
export class TimeRange {
    /**
     * A datetime value in RFC-3339 format indicating when the time range starts.
     */
    start_at?: string;
    /**
     * A datetime value in RFC-3339 format indicating when the time range ends.
     */
    end_at?: string;
}

/**
 * Represents a transaction processed with Square, either with the Connect API or with Square Point of Sale.
 * The `tenders` field of this object lists all methods of payment used to pay in the transaction.
 */
export class Transaction {
    /**
     * The transaction's unique ID, issued by Square payments servers.
     */
    id?: string;
    /**
     * The ID of the transaction's associated location.
     */
    location_id?: string;
    /**
     * The time when the transaction was created, in RFC 3339 format.
     */
    created_at?: string;
    /**
     * The tenders used to pay in the transaction.
     */
    tenders?: Array<Tender>;
    /**
     * Refunds that have been applied to any tender in the transaction.
     */
    refunds?: Array<Refund>;
    /**
     * If the transaction was created with the [Charge](#endpoint-transactions-charge) endpoint, this value is the same as
     * the value provided for the `reference_id` parameter in the request to that endpoint. Otherwise, it is not set.
     */
    reference_id?: string;
    /**
     * The Square product that processed the transaction. See [TransactionProduct](#type-transactionproduct) for possible values.
     */
    product?: Transaction.ProductEnum;
    /**
     * If the transaction was created in the Square Point of Sale app, this value is the ID generated for the
     * transaction by Square Point of Sale. This ID has no relationship to the transaction's canonical `id`, which is
     * generated by Square's backend servers. This value is generated for bookkeeping purposes, in case the transaction
     * cannot immediately be completed (for example, if the transaction is processed in offline mode).
     * It is not currently possible with the Connect API to perform a transaction lookup by this value.
     */
    client_id?: string;
    /**
     * The shipping address provided in the request, if any.
     */
    shipping_address?: Address;
    /**
     * The order_id is an identifier for the order associated with this transaction, if any.
     */
    order_id?: string;
}

export namespace Transaction {
    export enum ProductEnum {
        REGISTER = 'REGISTER',
        EXTERNAL_API = 'EXTERNAL_API',
        BILLING = 'BILLING',
        APPOINTMENTS = 'APPOINTMENTS',
        INVOICES = 'INVOICES',
        ONLINE_STORE = 'ONLINE_STORE',
        PAYROLL = 'PAYROLL',
        OTHER = 'OTHER',
    }
}

/**
 * Indicates the Square product used to process a transaction.
 */
export class TransactionProduct {}

/**
 * A request to update a `BreakType`
 */
export class UpdateBreakTypeRequest {
    /**
     * The updated `BreakType`.
     */
    break_type?: BreakType;
}

/**
 * A response to a request to update a `BreakType`. Contains the requested `BreakType` objects. May contain a set of
 * `Error` objects if the request resulted in errors.
 */
export class UpdateBreakTypeResponse {
    /**
     * The response object.
     */
    break_type?: BreakType;
    /**
     * Any errors that occurred during the request.
     */
    errors?: Array<Error>;
}

/**
 * Defines the body parameters that can be provided in a request to the UpdateCustomer endpoint.
 */
export class UpdateCustomerRequest {
    /**
     * The customer's given (i.e., first) name.
     */
    given_name?: string;
    /**
     * The customer's family (i.e., last) name.
     */
    family_name?: string;
    /**
     * The name of the customer's company.
     */
    company_name?: string;
    /**
     * A nickname for the customer.
     */
    nickname?: string;
    /**
     * The customer's email address.
     */
    email_address?: string;
    /**
     * The customer's physical address.
     */
    address?: Address;
    /**
     * The customer's phone number.
     */
    phone_number?: string;
    /**
     * An optional second ID you can set to associate the customer with an entity in another system.
     */
    reference_id?: string;
    /**
     * An optional note to associate with the customer.
     */
    note?: string;
    /**
     * The customer birthday in RFC-3339 format. Year is optional, timezone and times are not allowed. Example:
     * `0000-09-01T00:00:00-00:00` for a birthday on September 1st. `1998-09-01T00:00:00-00:00` for a birthday on
     * September 1st 1998.
     */
    birthday?: string;
}

/**
 * Defines the fields that are included in the response body of a request to the UpdateCustomer endpoint.
 * One of `errors` or `customer` is present in a given response (never both).
 */
export class UpdateCustomerResponse {
    /**
     * Any errors that occurred during the request.
     */
    errors?: Array<Error>;
    /**
     * The updated customer.
     */
    customer?: Customer;
}

export class UpdateItemModifierListsRequest {
    /**
     * The [CatalogItem](#type-catalogitem)s whose [CatalogModifierList](#type-catalogmodifierlist)s are being updated.
     */
    item_ids: Array<string>;
    /**
     * The set of [CatalogModifierList](#type-catalogmodifierlist)s (referenced by ID) to enable for the
     * [CatalogItem](#type-catalogitem).
     */
    modifier_lists_to_enable?: Array<string>;
    /**
     * The set of [CatalogModifierList](#type-catalogmodifierlist)s (referenced by ID) to disable for the
     * [CatalogItem](#type-catalogitem).
     */
    modifier_lists_to_disable?: Array<string>;
}

export class UpdateItemModifierListsResponse {
    /**
     * The set of [Error](#type-error)s encountered.
     */
    errors?: Array<Error>;
    /**
     * The database [timestamp](#workingwithdates) of this update in RFC 3339 format, e.g., "2016-09-04T23:59:33.123Z".
     */
    updated_at?: string;
}

export class UpdateItemTaxesRequest {
    /**
     * The [CatalogItem](#type-catalogitem)s whose enabled/disabled [CatalogTax](#type-catalogtax)es are being updated.
     */
    item_ids: Array<string>;
    /**
     * The set of [CatalogTax](#type-catalogtax)es (referenced by ID) to enable for the [CatalogItem](#type-catalogitem).
     */
    taxes_to_enable?: Array<string>;
    /**
     * The set of [CatalogTax](#type-catalogtax)es (referenced by ID) to disable for the [CatalogItem](#type-catalogitem).
     */
    taxes_to_disable?: Array<string>;
}

export class UpdateItemTaxesResponse {
    /**
     * The set of [Error](#type-error)s encountered.
     */
    errors?: Array<Error>;
    /**
     * The database [timestamp](#workingwithdates) of this update in RFC 3339 format, e.g., "2016-09-04T23:59:33.123Z".
     */
    updated_at?: string;
}

/**
 * A request to update a `Shift` object.
 */
export class UpdateShiftRequest {
    /**
     * The updated `Shift` object.
     */
    shift: Shift;
}

/**
 * The response to a request to update a `Shift`. Contains the updated `Shift` object. May contain a set of `Error`
 * objects if the request resulted in errors.
 */
export class UpdateShiftResponse {
    /**
     * The updated `Shift`.
     */
    shift?: Shift;
    /**
     * Any errors that occurred during the request.
     */
    errors?: Array<Error>;
}

/**
 * A request to update a `WorkweekConfig` object
 */
export class UpdateWorkweekConfigRequest {
    /**
     * The updated `WorkweekConfig` object.
     */
    workweek_config?: WorkweekConfig;
}

/**
 * The response to a request to update a `WorkweekConfig` object. Contains the updated `WorkweekConfig` object.
 * May contain a set of `Error` objects if the request resulted in errors.
 */
export class UpdateWorkweekConfigResponse {
    /**
     * The response object.
     */
    workweek_config?: WorkweekConfig;
    /**
     * Any errors that occurred during the request.
     */
    errors?: Array<Error>;
}

export class UpsertCatalogObjectRequest {
    /**
     * A value you specify that uniquely identifies this request among all your requests.
     * A common way to create a valid idempotency key is to use a Universally unique identifier (UUID).
     * If you're unsure whether a particular request was successful, you can reattempt it with the same idempotency key
     * without worrying about creating duplicate objects. See [Idempotency](/basics/api101/idempotency) for more information.
     */
    idempotency_key: string;
    /**
     * A [CatalogObject](#type-catalogobject) to be created or updated.
     * - For updates, the object must be active (the `is_deleted` field is not `true`).
     * - For creates, the object ID must start with `#`. The provided ID is replaced with a server-generated ID.
     */
    object: CatalogObject;
}

export class UpsertCatalogObjectResponse {
    /**
     * The set of [Error](#type-error)s encountered.
     */
    errors?: Array<Error>;
    /**
     * The created [CatalogObject](#type-catalogobject).
     */
    catalog_object?: CatalogObject;
    /**
     * The mapping between client and server IDs for this Upsert.
     */
    id_mappings?: Array<CatalogIdMapping>;
}

/**
 * V1AdjustInventoryRequest
 */
export class V1AdjustInventoryRequest {
    /**
     * The number to adjust the variation's quantity by.
     */
    quantity_delta?: number;
    /**
     * The reason for the inventory adjustment.
     * See [V1AdjustInventoryRequestAdjustmentType](#type-v1adjustinventoryrequestadjustmenttype) for possible values.
     */
    adjustment_type?: V1AdjustInventoryRequest.AdjustmentTypeEnum;
    /**
     * A note about the inventory adjustment.
     */
    memo?: string;
}

export namespace V1AdjustInventoryRequest {
    export enum AdjustmentTypeEnum {
        SALE = 'SALE',
        RECEIVE_STOCK = 'RECEIVE_STOCK',
        MANUAL_ADJUST = 'MANUAL_ADJUST',
    }
}

export class V1AdjustInventoryRequestAdjustmentType {}

export class V1ApplyFeeRequest {}

export class V1ApplyModifierListRequest {}

/**
 * V1BankAccount
 */
export class V1BankAccount {
    /**
     * The bank account's Square-issued ID.
     */
    id?: string;
    /**
     * The Square-issued ID of the merchant associated with the bank account.
     */
    merchant_id?: string;
    /**
     * The name of the bank that manages the account.
     */
    bank_name?: string;
    /**
     * The name associated with the bank account.
     */
    name?: string;
    /**
     * The bank account's routing number.
     */
    routing_number?: string;
    /**
     * The last few digits of the bank account number.
     */
    account_number_suffix?: string;
    /**
     * The currency code of the currency associated with the bank account, in ISO 4217 format.
     * For example, the currency code for US dollars is USD.
     */
    currency_code?: string;
    /**
     * The bank account's type (for example, savings or checking).
     * See [V1BankAccountType](#type-v1bankaccounttype) for possible values.
     */
    type?: V1BankAccount.TypeEnum;
}

export namespace V1BankAccount {
    export enum TypeEnum {
        BUSINESS_CHECKING = 'BUSINESS_CHECKING',
        CHECKING = 'CHECKING',
        INVESTMENT = 'INVESTMENT',
        LOAN = 'LOAN',
        SAVINGS = 'SAVINGS',
        OTHER = 'OTHER',
    }
}

export class V1BankAccountType {}

/**
 * V1CashDrawerEvent
 */
export class V1CashDrawerEvent {
    /**
     * The event's unique ID.
     */
    id?: string;
    /**
     * The ID of the employee that created the event.
     */
    employee_id?: string;
    /**
     * The type of event that occurred. See [V1CashDrawerEventEventType](#type-v1cashdrawereventeventtype) for possible
     * values
     */
    event_type?: V1CashDrawerEvent.EventTypeEnum;
    /**
     * The amount of money that was added to or removed from the cash drawer because of the event.
     * This value can be positive (for added money) or negative (for removed money).
     */
    event_money?: V1Money;
    /**
     * The time when the event occurred, in ISO 8601 format.
     */
    created_at?: string;
    /**
     * An optional description of the event, entered by the employee that created it.
     */
    description?: string;
}

export namespace V1CashDrawerEvent {
    export enum EventTypeEnum {
        NO_SALE = 'NO_SALE',
        CASH_TENDER_PAYMENT = 'CASH_TENDER_PAYMENT',
        OTHER_TENDER_PAYMENT = 'OTHER_TENDER_PAYMENT',
        CASH_TENDER_CANCELED_PAYMENT = 'CASH_TENDER_CANCELED_PAYMENT',
        OTHER_TENDER_CANCELED_PAYMENT = 'OTHER_TENDER_CANCELED_PAYMENT',
        CASH_TENDER_REFUND = 'CASH_TENDER_REFUND',
        OTHER_TENDER_REFUND = 'OTHER_TENDER_REFUND',
        PAID_IN = 'PAID_IN',
        PAID_OUT = 'PAID_OUT',
    }
}

export class V1CashDrawerEventEventType {}

/**
 * V1CashDrawerShift
 */
export class V1CashDrawerShift {
    /**
     * The shift's unique ID.
     */
    id?: string;
    /**
     * The shift's current state. See [V1CashDrawerShiftEventType](#type-v1cashdrawershifteventtype) for possible values
     */
    event_type?: V1CashDrawerShift.EventTypeEnum;
    /**
     * The time when the shift began, in ISO 8601 format.
     */
    opened_at?: string;
    /**
     * The time when the shift ended, in ISO 8601 format.
     */
    ended_at?: string;
    /**
     * The time when the shift was closed, in ISO 8601 format.
     */
    closed_at?: string;
    /**
     * The IDs of all employees that were logged into Square Register at some point during the cash drawer shift.
     */
    employee_ids?: Array<string>;
    /**
     * The ID of the employee that started the cash drawer shift.
     */
    opening_employee_id?: string;
    /**
     * The ID of the employee that ended the cash drawer shift.
     */
    ending_employee_id?: string;
    /**
     * The ID of the employee that closed the cash drawer shift by auditing the cash drawer's contents.
     */
    closing_employee_id?: string;
    /**
     * The time when the timecard was created, in ISO 8601 format.
     */
    description?: string;
    /**
     * The amount of money in the cash drawer at the start of the shift.
     */
    starting_cash_money?: V1Money;
    /**
     * The amount of money added to the cash drawer from cash payments.
     */
    cash_payment_money?: V1Money;
    /**
     * The amount of money removed from the cash drawer from cash refunds. This value is always negative or zero.
     */
    cash_refunds_money?: V1Money;
    /**
     * The amount of money added to the cash drawer for reasons other than cash payments.
     */
    cash_paid_in_money?: V1Money;
    /**
     * The amount of money removed from the cash drawer for reasons other than cash refunds.
     */
    cash_paid_out_money?: V1Money;
    /**
     * The amount of money that should be in the cash drawer at the end of the shift, based on the shift's other money amounts.
     */
    expected_cash_money?: V1Money;
    /**
     * The amount of money found in the cash drawer at the end of the shift by an auditing employee.
     */
    closed_cash_money?: V1Money;
    /**
     * The device running Square Register that was connected to the cash drawer.
     */
    device?: Device;
    /**
     * All of the events (payments, refunds, and so on) that involved the cash drawer during the shift.
     */
    events?: Array<V1CashDrawerEvent>;
}

export namespace V1CashDrawerShift {
    export enum EventTypeEnum {
        OPEN = 'OPEN',
        ENDED = 'ENDED',
        CLOSED = 'CLOSED',
    }
}

export class V1CashDrawerShiftEventType {}

/**
 * V1Category
 */
export class V1Category {
    /**
     * The category's unique ID.
     */
    id?: string;
    /**
     * The category's name.
     */
    name?: string;
    /**
     * The ID of the CatalogObject in the Connect v2 API. Objects that are shared across multiple locations share the same v2 ID.
     */
    v2_id?: string;
}

export class V1CreateCategoryRequest {
    /**
     * An object containing the fields to POST for the request. See the corresponding object definition for field details.
     */
    body?: V1Category;
}

export class V1CreateDiscountRequest {
    /**
     * An object containing the fields to POST for the request. See the corresponding object definition for field details.
     */
    body?: V1Discount;
}

export class V1CreateEmployeeRoleRequest {
    /**
     * An EmployeeRole object with a name and permissions, and an optional owner flag.
     */
    employee_role?: V1EmployeeRole;
}

export class V1CreateFeeRequest {
    /**
     * An object containing the fields to POST for the request. See the corresponding object definition for field details.
     */
    body?: V1Fee;
}

export class V1CreateItemRequest {
    /**
     * An object containing the fields to POST for the request. See the corresponding object definition for field details.
     */
    body?: V1Item;
}

export class V1CreateModifierListRequest {
    /**
     * An object containing the fields to POST for the request. See the corresponding object definition for field details.
     */
    body?: V1ModifierList;
}

export class V1CreateModifierOptionRequest {
    /**
     * An object containing the fields to POST for the request. See the corresponding object definition for field details.
     */
    body?: V1ModifierOption;
}

export class V1CreatePageRequest {
    /**
     * An object containing the fields to POST for the request. See the corresponding object definition for field details.
     */
    body?: V1Page;
}

/**
 * V1CreateRefundRequest
 */
export class V1CreateRefundRequest {
    /**
     * The ID of the payment to refund. If you are creating a `PARTIAL` refund for a split tender payment, instead
     * provide the id of the particular tender you want to refund.
     */
    payment_id: string;
    /**
     * TThe type of refund (FULL or PARTIAL).
     * See [V1CreateRefundRequestType](#type-v1createrefundrequesttype) for possible values.
     */
    type: V1CreateRefundRequest.TypeEnum;
    /**
     * The reason for the refund.
     */
    reason: string;
    /**
     * The amount of money to refund. Required only for PARTIAL refunds.
     */
    refunded_money?: V1Money;
    /**
     * An optional key to ensure idempotence if you issue the same PARTIAL refund request more than once.
     */
    request_idempotence_key?: string;
}

export namespace V1CreateRefundRequest {
    export enum TypeEnum {
        FULL = 'FULL',
        PARTIAL = 'PARTIAL',
    }
}

export class V1CreateRefundRequestType {}

export class V1CreateVariationRequest {
    /**
     * An object containing the fields to POST for the request. See the corresponding object definition for field
     * details.
     */
    body?: V1Variation;
}

export class V1DeleteCategoryRequest {}

export class V1DeleteDiscountRequest {}

export class V1DeleteFeeRequest {}

export class V1DeleteItemRequest {}

export class V1DeleteModifierListRequest {}

export class V1DeleteModifierOptionRequest {}

export class V1DeletePageCellRequest {
    /**
     * The row of the cell to clear. Always an integer between 0 and 4, inclusive. Row 0 is the top row.
     */
    row?: string;
    /**
     * The column of the cell to clear. Always an integer between 0 and 4, inclusive. Column 0 is the leftmost column.
     */
    column?: string;
}

export class V1DeletePageRequest {}

export class V1DeleteTimecardRequest {}

export class V1DeleteTimecardResponse {}

export class V1DeleteVariationRequest {}

/**
 * V1Discount
 */
export class V1Discount {
    /**
     * The discount's unique ID.
     */
    id?: string;
    /**
     * The discount's name.
     */
    name?: string;
    /**
     * The rate of the discount, as a string representation of a decimal number.
     * A value of 0.07 corresponds to a rate of 7%. This rate is 0 if discount_type is VARIABLE_PERCENTAGE.
     */
    rate?: string;
    /**
     * The amount of the discount. This amount is 0 if discount_type is VARIABLE_AMOUNT.
     * This field is not included for rate-based discounts.
     */
    amount_money?: V1Money;
    /**
     * Indicates whether the discount is a FIXED value or entered at the time of sale.
     * See [V1DiscountDiscountType](#type-v1discountdiscounttype) for possible values.
     */
    discount_type?: V1Discount.DiscountTypeEnum;
    /**
     * Indicates whether a mobile staff member needs to enter their PIN to apply the discount to a payment.
     */
    pin_required?: boolean;
    /**
     * The color of the discount's display label in Square Register, if not the default color.
     * The default color is "9da2a6". See [V1DiscountColor](#type-v1discountcolor) for possible values.
     */
    color?: V1Discount.ColorEnum;
    /**
     * The ID of the CatalogObject in the Connect v2 API. Objects that are shared across multiple locations share the same v2 ID.
     */
    v2_id?: string;
}

export namespace V1Discount {
    export enum DiscountTypeEnum {
        FIXED = 'FIXED',
        VARIABLE_PERCENTAGE = 'VARIABLE_PERCENTAGE',
        VARIABLE_AMOUNT = 'VARIABLE_AMOUNT',
    }
    export enum ColorEnum {
        _9da2a6 = '9da2a6',
        _4ab200 = '4ab200',
        _0b8000 = '0b8000',
        _2952cc = '2952cc',
        A82ee5 = 'a82ee5',
        E5457a = 'e5457a',
        B21212 = 'b21212',
        _593c00 = '593c00',
        E5BF00 = 'e5BF00',
    }
}

export class V1DiscountColor {}

export class V1DiscountDiscountType {}

/**
 * Represents one of a business's employees.
 */
export class V1Employee {
    /**
     * The employee's unique ID.
     */
    id?: string;
    /**
     * The employee's first name.
     */
    first_name: string;
    /**
     * The employee's last name.
     */
    last_name: string;
    /**
     * The ids of the employee's associated roles. Currently, you can specify only one or zero roles per employee.
     */
    role_ids?: Array<string>;
    /**
     * The IDs of the locations the employee is allowed to clock in at.
     */
    authorized_location_ids?: Array<string>;
    /**
     * The employee's email address.
     */
    email?: string;
    /**
     * CWhether the employee is ACTIVE or INACTIVE. Inactive employees cannot sign in to Square Register.Merchants
     * update this field from the Square Dashboard. See [V1EmployeeStatus](#type-v1employeestatus) for possible values.
     */
    status?: V1Employee.StatusEnum;
    /**
     * An ID the merchant can set to associate the employee with an entity in another system.
     */
    external_id?: string;
    /**
     * The time when the employee entity was created, in ISO 8601 format.
     */
    created_at?: string;
    /**
     * The time when the employee entity was most recently updated, in ISO 8601 format.
     */
    updated_at?: string;
}

export namespace V1Employee {
    export enum StatusEnum {
        ACTIVE = 'ACTIVE',
        INACTIVE = 'INACTIVE',
    }
}

/**
 * V1EmployeeRole
 */
export class V1EmployeeRole {
    /**
     * The role's unique ID, Can only be set by Square.
     */
    id?: string;
    /**
     * The role's merchant-defined name.
     */
    name: string;
    /**
     * The role's permissions. See [V1EmployeeRolePermissions](#type-v1employeerolepermissions) for possible values
     */
    permissions: Array<V1EmployeeRole.PermissionsEnum>;
    /**
     * If true, employees with this role have all permissions, regardless of the values indicated in permissions.
     */
    is_owner?: boolean;
    /**
     * The time when the employee entity was created, in ISO 8601 format. Is set by Square when the Role is created.
     */
    created_at?: string;
    /**
     * The time when the employee entity was most recently updated, in ISO 8601 format. Is set by Square when the Role
     * updated.
     */
    updated_at?: string;
}

export namespace V1EmployeeRole {
    export enum PermissionsEnum {
        REGISTER_ACCESS_SALES_HISTORY = 'REGISTER_ACCESS_SALES_HISTORY',
        REGISTER_APPLY_RESTRICTED_DISCOUNTS = 'REGISTER_APPLY_RESTRICTED_DISCOUNTS',
        REGISTER_CHANGE_SETTINGS = 'REGISTER_CHANGE_SETTINGS',
        REGISTER_EDIT_ITEM = 'REGISTER_EDIT_ITEM',
        REGISTER_ISSUE_REFUNDS = 'REGISTER_ISSUE_REFUNDS',
        REGISTER_OPEN_CASH_DRAWER_OUTSIDE_SALE = 'REGISTER_OPEN_CASH_DRAWER_OUTSIDE_SALE',
        REGISTER_VIEW_SUMMARY_REPORTS = 'REGISTER_VIEW_SUMMARY_REPORTS',
    }
}

export class V1EmployeeRolePermissions {}

export class V1EmployeeStatus {}

/**
 * V1Fee
 */
export class V1Fee {
    /**
     * The fee's unique ID.
     */
    id?: string;
    /**
     * The fee's name.
     */
    name?: string;
    /**
     * The rate of the fee, as a string representation of a decimal number. A value of 0.07 corresponds to a rate of 7%.
     */
    rate?: string;
    /**
     * Forthcoming See [V1FeeCalculationPhase](#type-v1feecalculationphase) for possible values.
     */
    calculation_phase?: V1Fee.CalculationPhaseEnum;
    /**
     * The type of adjustment the fee applies to a payment. Currently, this value is TAX for all fees.
     * See [V1FeeAdjustmentType](#type-v1feeadjustmenttype) for possible values.
     */
    adjustment_type?: V1Fee.AdjustmentTypeEnum;
    /**
     * If true, the fee applies to custom amounts entered into Square Register that are not associated with a particular item.
     */
    applies_to_custom_amounts?: boolean;
    /**
     * If true, the fee is applied to all appropriate items. If false, the fee is not applied at all.
     */
    enabled?: boolean;
    /**
     * Whether the fee is ADDITIVE or INCLUSIVE. See [V1FeeInclusionType](#type-v1feeinclusiontype) for possible values.
     */
    inclusion_type?: V1Fee.InclusionTypeEnum;
    /**
     * In countries with multiple classifications for sales taxes, indicates which classification the fee falls under.
     * Currently relevant only to Canadian merchants. See [V1FeeType](#type-v1feetype) for possible values.
     */
    type?: V1Fee.TypeEnum;
    /**
     * The ID of the CatalogObject in the Connect v2 API. Objects that are shared across multiple locations share the same v2 ID.
     */
    v2_id?: string;
}

export namespace V1Fee {
    export enum CalculationPhaseEnum {
        FEE_SUBTOTAL_PHASE = 'FEE_SUBTOTAL_PHASE',
        OTHER = 'OTHER',
        FEE_TOTAL_PHASE = 'FEE_TOTAL_PHASE',
    }
    export enum AdjustmentTypeEnum {
        TAX = 'TAX',
    }
    export enum InclusionTypeEnum {
        ADDITIVE = 'ADDITIVE',
        INCLUSIVE = 'INCLUSIVE',
    }
    export enum TypeEnum {
        CA_GST = 'CA_GST',
        CA_HST = 'CA_HST',
        CA_PST = 'CA_PST',
        CA_QST = 'CA_QST',
        JP_CONSUMPTION_TAX = 'JP_CONSUMPTION_TAX',
        CA_PEI_PST = 'CA_PEI_PST',
        US_SALES_TAX = 'US_SALES_TAX',
        OTHER = 'OTHER',
    }
}

export class V1FeeAdjustmentType {}

export class V1FeeCalculationPhase {}

export class V1FeeInclusionType {}

export class V1FeeType {}

/**
 * V1InventoryEntry
 */
export class V1InventoryEntry {
    /**
     * The variation that the entry corresponds to.
     */
    variation_id?: string;
    /**
     * The current available quantity of the item variation.
     */
    quantity_on_hand?: number;
}

/**
 * V1Item
 */
export class V1Item {
    /**
     * The item's ID. Must be unique among all entity IDs ever provided on behalf of the merchant.
     * You can never reuse an ID. This value can include alphanumeric characters, dashes (-), and underscores (_).
     */
    id?: string;
    /**
     * The item's name.
     */
    name?: string;
    /**
     * The item's description.
     */
    description?: string;
    /**
     * The item's type. This value is NORMAL for almost all items. See [V1ItemType](#type-v1itemtype) for possible values.
     */
    type?: V1Item.TypeEnum;
    /**
     * The color of the discount's display label in Square Register, if not the default color. The default color is
     * 9da2a6. See [V1ItemColor](#type-v1itemcolor) for possible values.
     */
    color?: V1Item.ColorEnum;
    /**
     * The text of the item's display label in Square Register. Only up to the first five characters of the string are used.
     */
    abbreviation?: string;
    /**
     * Indicates whether the item is viewable from the merchant's online store (PUBLIC) or PRIVATE.
     * See [V1ItemVisibility](#type-v1itemvisibility) for possible values.
     */
    visibility?: V1Item.VisibilityEnum;
    /**
     * If true, the item can be added to shipping orders from the merchant's online store.
     */
    available_online?: boolean;
    /**
     * The item's master image, if any.
     */
    master_image?: V1ItemImage;
    /**
     * The category the item belongs to, if any.
     */
    category?: V1Category;
    /**
     * The item's variations. You must specify at least one variation.
     */
    variations?: Array<V1Variation>;
    /**
     * The modifier lists that apply to the item, if any.
     */
    modifier_lists?: Array<V1Variation>;
    /**
     * The fees that apply to the item, if any.
     */
    fees?: Array<V1Fee>;
    /**
     * Deprecated. This field is not used.
     */
    taxable?: boolean;
    /**
     * The ID of the item's category, if any.
     */
    category_id?: string;
    /**
     * If true, the item can be added to pickup orders from the merchant's online store. Default value: false
     */
    available_for_pickup?: boolean;
    /**
     * The ID of the CatalogObject in the Connect v2 API. Objects that are shared across multiple locations share the same v2 ID.
     */
    v2_id?: string;
}

export namespace V1Item {
    export enum TypeEnum {
        NORMAL = 'NORMAL',
        GIFT_CARD = 'GIFT_CARD',
        OTHER = 'OTHER',
    }
    export enum ColorEnum {
        _9da2a6 = '9da2a6',
        _4ab200 = '4ab200',
        _0b8000 = '0b8000',
        _2952cc = '2952cc',
        A82ee5 = 'a82ee5',
        E5457a = 'e5457a',
        B21212 = 'b21212',
        _593c00 = '593c00',
        E5BF00 = 'e5BF00',
    }
    export enum VisibilityEnum {
        PUBLIC = 'PUBLIC',
        PRIVATE = 'PRIVATE',
    }
}

export class V1ItemColor {}

/**
 * V1ItemImage
 */
export class V1ItemImage {
    /**
     * The image's unique ID.
     */
    id?: string;
    /**
     * The image's publicly accessible URL.
     */
    url?: string;
}

export class V1ItemType {}

export class V1ItemVisibility {}

export class V1ListBankAccountsRequest {}

export class V1ListBankAccountsResponse {
    items?: Array<V1BankAccount>;
}

export class V1ListCashDrawerShiftsRequest {
    /**
     * The order in which cash drawer shifts are listed in the response, based on their created_at field.
     * Default value: ASC See [SortOrder](#type-sortorder) for possible values.
     */
    order?: V1ListCashDrawerShiftsRequest.OrderEnum;
    /**
     * The beginning of the requested reporting period, in ISO 8601 format. Default value: The current time minus 90 days.
     */
    begin_time?: string;
    /**
     * The beginning of the requested reporting period, in ISO 8601 format. Default value: The current time.
     */
    end_time?: string;
}

export namespace V1ListCashDrawerShiftsRequest {
    export enum OrderEnum {
        DESC = 'DESC',
        ASC = 'ASC',
    }
}

export class V1ListCashDrawerShiftsResponse {
    items?: Array<V1CashDrawerShift>;
}

export class V1ListCategoriesRequest {}

export class V1ListCategoriesResponse {
    items?: Array<V1Category>;
}

export class V1ListDiscountsRequest {}

export class V1ListDiscountsResponse {
    items?: Array<V1Discount>;
}

export class V1ListEmployeeRolesRequest {
    /**
     * The order in which employees are listed in the response, based on their created_at field.
     * Default value: ASC See [SortOrder](#type-sortorder) for possible values.
     */
    order?: V1ListEmployeeRolesRequest.OrderEnum;
    /**
     * The maximum integer number of employee entities to return in a single response. Default 100, maximum 200.
     */
    limit?: number;
    /**
     * A pagination cursor to retrieve the next set of results for your original query to the endpoint.
     */
    batch_token?: string;
}

export namespace V1ListEmployeeRolesRequest {
    export enum OrderEnum {
        DESC = 'DESC',
        ASC = 'ASC',
    }
}

export class V1ListEmployeeRolesResponse {
    items?: Array<V1EmployeeRole>;
}

export class V1ListEmployeesRequest {
    /**
     * The order in which employees are listed in the response, based on their created_at field.
     * Default value: ASC See [SortOrder](#type-sortorder) for possible values.
     */
    order?: V1ListEmployeesRequest.OrderEnum;
    /**
     * If filtering results by their updated_at field, the beginning of the requested reporting period, in ISO 8601
     * format
     */
    begin_updated_at?: string;
    /**
     * If filtering results by there updated_at field, the end of the requested reporting period, in ISO 8601 format.
     */
    end_updated_at?: string;
    /**
     * If filtering results by their created_at field, the beginning of the requested reporting period, in ISO 8601 format.
     */
    begin_created_at?: string;
    /**
     * If filtering results by their created_at field, the end of the requested reporting period, in ISO 8601 format.
     */
    end_created_at?: string;
    /**
     * If provided, the endpoint returns only employee entities with the specified status (ACTIVE or INACTIVE).
     * See [V1ListEmployeesRequestStatus](#type-v1listemployeesrequeststatus) for possible values.
     */
    status?: V1ListEmployeesRequest.StatusEnum;
    /**
     * If provided, the endpoint returns only employee entities with the specified external_id.
     */
    external_id?: string;
    /**
     * The maximum integer number of employee entities to return in a single response. Default 100, maximum 200.
     */
    limit?: number;
    /**
     * A pagination cursor to retrieve the next set of results for your original query to the endpoint.
     */
    batch_token?: string;
}

export namespace V1ListEmployeesRequest {
    export enum OrderEnum {
        DESC = 'DESC',
        ASC = 'ASC',
    }
    export enum StatusEnum {
        ACTIVE = 'ACTIVE',
        INACTIVE = 'INACTIVE',
    }
}

export class V1ListEmployeesRequestStatus {}

export class V1ListEmployeesResponse {
    items?: Array<V1Employee>;
}

export class V1ListFeesRequest {}

export class V1ListFeesResponse {
    items?: Array<V1Fee>;
}

export class V1ListInventoryRequest {
    /**
     * The maximum number of inventory entries to return in a single response. This value cannot exceed 1000.
     */
    limit?: number;
    /**
     * A pagination cursor to retrieve the next set of results for your original query to the endpoint.
     */
    batch_token?: string;
}

export class V1ListInventoryResponse {
    items?: Array<V1InventoryEntry>;
}

export class V1ListItemsRequest {
    /**
     * A pagination cursor to retrieve the next set of results for your original query to the endpoint.
     */
    batch_token?: string;
}

export class V1ListItemsResponse {
    items?: Array<V1Item>;
}

export class V1ListLocationsRequest {}

export class V1ListLocationsResponse {
    items?: Array<V1Merchant>;
}

export class V1ListModifierListsRequest {}

export class V1ListModifierListsResponse {
    items?: Array<V1ModifierList>;
}

export class V1ListOrdersRequest {
    /**
     * TThe order in which payments are listed in the response. See [SortOrder](#type-sortorder) for possible values
     */
    order?: V1ListOrdersRequest.OrderEnum;
    /**
     * The maximum number of payments to return in a single response. This value cannot exceed 200.
     */
    limit?: number;
    /**
     * A pagination cursor to retrieve the next set of results for your original query to the endpoint.
     */
    batch_token?: string;
}

export namespace V1ListOrdersRequest {
    export enum OrderEnum {
        DESC = 'DESC',
        ASC = 'ASC',
    }
}

export class V1ListOrdersResponse {
    items?: Array<V1Order>;
}

export class V1ListPagesRequest {}

export class V1ListPagesResponse {
    items?: Array<V1Page>;
}

export class V1ListPaymentsRequest {
    /**
     * The order in which payments are listed in the response. See [SortOrder](#type-sortorder) for possible values
     */
    order?: V1ListPaymentsRequest.OrderEnum;
    /**
     * The beginning of the requested reporting period, in ISO 8601 format. If this value is before January 1, 2013
     * (2013-01-01T00:00:00Z), this endpoint returns an error. Default value: The current time minus one year.
     */
    begin_time?: string;
    /**
     * The end of the requested reporting period, in ISO 8601 format. If this value is more than one year greater than
     * begin_time, this endpoint returns an error. Default value: The current time.
     */
    end_time?: string;
    /**
     * The maximum number of payments to return in a single response. This value cannot exceed 200.
     */
    limit?: number;
    /**
     * A pagination cursor to retrieve the next set of results for your original query to the endpoint.
     */
    batch_token?: string;
    /**
     * Indicates whether or not to include partial payments in the response. Partial payments will have the tenders
     * collected so far, but the itemizations will be empty until the payment is completed.
     */
    include_partial?: boolean;
}

export namespace V1ListPaymentsRequest {
    export enum OrderEnum {
        DESC = 'DESC',
        ASC = 'ASC',
    }
}

export class V1ListPaymentsResponse {
    items?: Array<V1Payment>;
}

export class V1ListRefundsRequest {
    /**
     * TThe order in which payments are listed in the response. See [SortOrder](#type-sortorder) for possible values
     */
    order?: V1ListRefundsRequest.OrderEnum;
    /**
     * The beginning of the requested reporting period, in ISO 8601 format. If this value is before January 1, 2013
     * (2013-01-01T00:00:00Z), this endpoint returns an error. Default value: The current time minus one year.
     */
    begin_time?: string;
    /**
     * The end of the requested reporting period, in ISO 8601 format. If this value is more than one year greater than
     * begin_time, this endpoint returns an error. Default value: The current time.
     */
    end_time?: string;
    /**
     * The approximate number of refunds to return in a single response. Default: 100. Max: 200. Response may contain
     * more results than the prescribed limit when refunds are made simultaneously to multiple tenders in a payment or
     * when refunds are generated in an exchange to account for the value of returned goods.
     */
    limit?: number;
    /**
     * A pagination cursor to retrieve the next set of results for your original query to the endpoint.
     */
    batch_token?: string;
}

export namespace V1ListRefundsRequest {
    export enum OrderEnum {
        DESC = 'DESC',
        ASC = 'ASC',
    }
}

export class V1ListRefundsResponse {
    items?: Array<V1Refund>;
}

export class V1ListSettlementsRequest {
    /**
     * TThe order in which payments are listed in the response. See [SortOrder](#type-sortorder) for possible values
     */
    order?: V1ListSettlementsRequest.OrderEnum;
    /**
     * The beginning of the requested reporting period, in ISO 8601 format. If this value is before January 1, 2013
     * (2013-01-01T00:00:00Z), this endpoint returns an error. Default value: The current time minus one year.
     */
    begin_time?: string;
    /**
     * The end of the requested reporting period, in ISO 8601 format. If this value is more than one year greater than
     * begin_time, this endpoint returns an error. Default value: The current time.
     */
    end_time?: string;
    /**
     * The maximum number of payments to return in a single response. This value cannot exceed 200.
     */
    limit?: number;
    /**
     * Provide this parameter to retrieve only settlements with a particular status (SENT or FAILED).
     * See [V1ListSettlementsRequestStatus](#type-v1listsettlementsrequeststatus) for possible values
     */
    status?: V1ListSettlementsRequest.StatusEnum;
    /**
     * A pagination cursor to retrieve the next set of results for your original query to the endpoint.
     */
    batch_token?: string;
}

export namespace V1ListSettlementsRequest {
    export enum OrderEnum {
        DESC = 'DESC',
        ASC = 'ASC',
    }
    export enum StatusEnum {
        SENT = 'SENT',
        FAILED = 'FAILED',
    }
}

export class V1ListSettlementsRequestStatus {}

export class V1ListSettlementsResponse {
    items?: Array<V1Settlement>;
}

export class V1ListTimecardEventsRequest {}

export class V1ListTimecardEventsResponse {
    items?: Array<V1TimecardEvent>;
}

export class V1ListTimecardsRequest {
    /**
     * The order in which timecards are listed in the response, based on their created_at field. See
     * [SortOrder](#type-sortorder) for possible values
     */
    order?: V1ListTimecardsRequest.OrderEnum;
    /**
     * If provided, the endpoint returns only timecards for the employee with the specified ID.
     */
    employee_id?: string;
    /**
     * If filtering results by their clockin_time field, the beginning of the requested reporting period, in ISO 8601
     * format.
     */
    begin_clockin_time?: string;
    /**
     * If filtering results by their clockin_time field, the end of the requested reporting period, in ISO 8601 format.
     */
    end_clockin_time?: string;
    /**
     * If filtering results by their clockout_time field, the beginning of the requested reporting period, in ISO 8601
     * format.
     */
    begin_clockout_time?: string;
    /**
     * If filtering results by their clockout_time field, the end of the requested reporting period, in ISO 8601 format.
     */
    end_clockout_time?: string;
    /**
     * If filtering results by their updated_at field, the beginning of the requested reporting period, in ISO 8601
     * format.
     */
    begin_updated_at?: string;
    /**
     * If filtering results by their updated_at field, the end of the requested reporting period, in ISO 8601 format.
     */
    end_updated_at?: string;
    /**
     * If true, only deleted timecards are returned. If false, only valid timecards are returned.If you don't provide
     * this parameter, both valid and deleted timecards are returned.
     */
    deleted?: boolean;
    /**
     * The maximum integer number of employee entities to return in a single response. Default 100, maximum 200.
     */
    limit?: number;
    /**
     * A pagination cursor to retrieve the next set of results for your original query to the endpoint.
     */
    batch_token?: string;
}

export namespace V1ListTimecardsRequest {
    export enum OrderEnum {
        DESC = 'DESC',
        ASC = 'ASC',
    }
}

export class V1ListTimecardsResponse {
    items?: Array<V1Timecard>;
}

/**
 * Defines the fields that are included in the response body of a request to the **RetrieveBusiness** endpoint.
 */
export class V1Merchant {
    /**
     * The merchant account's unique identifier.
     */
    id?: string;
    /**
     * The name associated with the merchant account.
     */
    name?: string;
    /**
     * The email address associated with the merchant account.
     */
    email?: string;
    /**
     * Indicates whether the merchant account corresponds to a single-location account (LOCATION) or a business account
     * (BUSINESS). This value is almost always LOCATION. See [V1MerchantAccountType](#type-v1merchantaccounttype) for
     * possible values
     */
    account_type?: V1Merchant.AccountTypeEnum;
    /**
     * Capabilities that are enabled for the merchant's Square account. Capabilities that are not listed in this array
     * are not enabled for the account.
     */
    account_capabilities?: Array<string>;
    /**
     * The country associated with the merchant account, in ISO 3166-1-alpha-2 format.
     */
    country_code?: string;
    /**
     * The language associated with the merchant account, in BCP 47 format.
     */
    language_code?: string;
    /**
     * The currency associated with the merchant account, in ISO 4217 format. For example, the currency code for US
     * dollars is USD.
     */
    currency_code?: string;
    /**
     * The name of the merchant's business.
     */
    business_name?: string;
    /**
     * The address of the merchant's business.
     */
    business_address?: Address;
    /**
     * The phone number of the merchant's business.
     */
    business_phone?: V1PhoneNumber;
    /**
     * The type of business operated by the merchant. See [V1MerchantBusinessType](#type-v1merchantbusinesstype) for
     * possible values
     */
    business_type?: V1Merchant.BusinessTypeEnum;
    /**
     * The merchant's shipping address.
     */
    shipping_address?: Address;
    /**
     * Additional information for a single-location account specified by its associated business account, if it has one.
     */
    location_details?: V1MerchantLocationDetails;
    /**
     * The URL of the merchant's online store.
     */
    market_url?: string;
}

export namespace V1Merchant {
    export enum AccountTypeEnum {
        LOCATION = 'LOCATION',
        BUSINESS = 'BUSINESS',
    }
    export enum BusinessTypeEnum {
        ACCOUNTING = 'ACCOUNTING',
        APPAREL_AND_ACCESSORY_SHOPS = 'APPAREL_AND_ACCESSORY_SHOPS',
        ART_DEALERS_GALLERIES = 'ART_DEALERS_GALLERIES',
        ART_DESIGN_AND_PHOTOGRAPHY = 'ART_DESIGN_AND_PHOTOGRAPHY',
        BAR_CLUB_LOUNGE = 'BAR_CLUB_LOUNGE',
        BEAUTY_AND_BARBER_SHOPS = 'BEAUTY_AND_BARBER_SHOPS',
        BOOK_STORES = 'BOOK_STORES',
        BUSINESS_SERVICES = 'BUSINESS_SERVICES',
        CATERING = 'CATERING',
        CHARITABLE_SOCIAL_SERVICE_ORGANIZATIONS = 'CHARITABLE_SOCIAL_SERVICE_ORGANIZATIONS',
        CHARITIBLE_ORGS = 'CHARITIBLE_ORGS',
        CLEANING_SERVICES = 'CLEANING_SERVICES',
        COMPUTER_EQUIPMENT_SOFTWARE_MAINTENANCE_REPAIR_SERVICES = 'COMPUTER_EQUIPMENT_SOFTWARE_MAINTENANCE_REPAIR_SERVICES',
        CONSULTANT = 'CONSULTANT',
        CONTRACTORS = 'CONTRACTORS',
        DELIVERY_SERVICES = 'DELIVERY_SERVICES',
        DENTISTRY = 'DENTISTRY',
        EDUCATION = 'EDUCATION',
        FOOD_STORES_CONVENIENCE_STORES_AND_SPECIALTY_MARKETS = 'FOOD_STORES_CONVENIENCE_STORES_AND_SPECIALTY_MARKETS',
        FOOD_TRUCK_CART = 'FOOD_TRUCK_CART',
        FURNITURE_HOME_AND_OFFICE_EQUIPMENT = 'FURNITURE_HOME_AND_OFFICE_EQUIPMENT',
        FURNITURE_HOME_GOODS = 'FURNITURE_HOME_GOODS',
        HOTELS_AND_LODGING = 'HOTELS_AND_LODGING',
        INDIVIDUAL_USE = 'INDIVIDUAL_USE',
        JEWELRY_AND_WATCHES = 'JEWELRY_AND_WATCHES',
        LANDSCAPING_AND_HORTICULTURAL_SERVICES = 'LANDSCAPING_AND_HORTICULTURAL_SERVICES',
        LANGUAGE_SCHOOLS = 'LANGUAGE_SCHOOLS',
        LEGAL_SERVICES = 'LEGAL_SERVICES',
        MEDICAL_PRACTITIONERS = 'MEDICAL_PRACTITIONERS',
        MEDICAL_SERVICES_AND_HEALTH_PRACTITIONERS = 'MEDICAL_SERVICES_AND_HEALTH_PRACTITIONERS',
        MEMBERSHIP_ORGANIZATIONS = 'MEMBERSHIP_ORGANIZATIONS',
        MUSIC_AND_ENTERTAINMENT = 'MUSIC_AND_ENTERTAINMENT',
        OTHER = 'OTHER',
        OUTDOOR_MARKETS = 'OUTDOOR_MARKETS',
        PERSONAL_SERVICES = 'PERSONAL_SERVICES',
        POLITICAL_ORGANIZATIONS = 'POLITICAL_ORGANIZATIONS',
        PROFESSIONAL_SERVICES = 'PROFESSIONAL_SERVICES',
        REAL_ESTATE = 'REAL_ESTATE',
        RECREATION_SERVICES = 'RECREATION_SERVICES',
        REPAIR_SHOPS_AND_RELATED_SERVICES = 'REPAIR_SHOPS_AND_RELATED_SERVICES',
        RESTAURANTS = 'RESTAURANTS',
        RETAIL_SHOPS = 'RETAIL_SHOPS',
        SCHOOLS_AND_EDUCATIONAL_SERVICES = 'SCHOOLS_AND_EDUCATIONAL_SERVICES',
        SPORTING_GOODS = 'SPORTING_GOODS',
        TAXICABS_AND_LIMOUSINES = 'TAXICABS_AND_LIMOUSINES',
        TICKET_SALES = 'TICKET_SALES',
        TOURISM = 'TOURISM',
        TRAVEL_TOURISM = 'TRAVEL_TOURISM',
        VETERINARY_SERVICES = 'VETERINARY_SERVICES',
        WEB_DEV_DESIGN = 'WEB_DEV_DESIGN',
    }
}

export class V1MerchantAccountType {}

export class V1MerchantBusinessType {}

/**
 * Additional information for a single-location account specified by its associated business account, if it has one.
 */
export class V1MerchantLocationDetails {
    /**
     * The nickname assigned to the single-location account by the parent business.
     * This value appears in the parent business's multi-location dashboard.
     */
    nickname?: string;
}

/**
 * V1ModifierList
 */
export class V1ModifierList {
    /**
     * The modifier list's unique ID.
     */
    id?: string;
    /**
     * The modifier list's name.
     */
    name?: string;
    /**
     * Indicates whether MULTIPLE options or a SINGLE option from the modifier list can be applied to a single item.
     * See [V1ModifierListSelectionType](#type-v1modifierlistselectiontype) for possible values.
     */
    selection_type?: V1ModifierList.SelectionTypeEnum;
    /**
     * The options included in the modifier list.
     */
    modifier_options?: Array<V1ModifierOption>;
    /**
     * The ID of the CatalogObject in the Connect v2 API. Objects that are shared across multiple locations share the same v2 ID.
     */
    v2_id?: string;
}

export namespace V1ModifierList {
    export enum SelectionTypeEnum {
        SINGLE = 'SINGLE',
        MULTIPLE = 'MULTIPLE',
    }
}

export class V1ModifierListSelectionType {}

/**
 * V1ModifierOption
 */
export class V1ModifierOption {
    /**
     * The modifier option's unique ID.
     */
    id?: string;
    /**
     * The modifier option's name.
     */
    name?: string;
    /**
     * The modifier option's price.
     */
    price_money?: V1Money;
    /**
     * If true, the modifier option is the default option in a modifier list for which selection_type is SINGLE.
     */
    on_by_default?: boolean;
    /**
     * Indicates the modifier option's list position when displayed in Square Register and the merchant dashboard.
     * If more than one modifier option in the same modifier list has the same ordinal value, those options are displayed
     * in alphabetical order.
     */
    ordinal?: number;
    /**
     * The ID of the modifier list the option belongs to.
     */
    modifier_list_id?: string;
    /**
     * The ID of the CatalogObject in the Connect v2 API. Objects that are shared across multiple locations share the same v2 ID.
     */
    v2_id?: string;
}

export class V1Money {
    /**
     * Amount in the lowest denominated value of this Currency. E.g. in USD these are cents, in JPY they are Yen (which
     * do not have a 'cent' concept).
     */
    amount?: number;
    /**
     * See [Currency](#type-currency) for possible values.
     */
    currency_code?: V1Money.CurrencyCodeEnum;
}

export namespace V1Money {
    export enum CurrencyCodeEnum {
        UNKNOWN_CURRENCY = 'UNKNOWN_CURRENCY',
        AED = 'AED',
        AFN = 'AFN',
        ALL = 'ALL',
        AMD = 'AMD',
        ANG = 'ANG',
        AOA = 'AOA',
        ARS = 'ARS',
        AUD = 'AUD',
        AWG = 'AWG',
        AZN = 'AZN',
        BAM = 'BAM',
        BBD = 'BBD',
        BDT = 'BDT',
        BGN = 'BGN',
        BHD = 'BHD',
        BIF = 'BIF',
        BMD = 'BMD',
        BND = 'BND',
        BOB = 'BOB',
        BOV = 'BOV',
        BRL = 'BRL',
        BSD = 'BSD',
        BTN = 'BTN',
        BWP = 'BWP',
        BYR = 'BYR',
        BZD = 'BZD',
        CAD = 'CAD',
        CDF = 'CDF',
        CHE = 'CHE',
        CHF = 'CHF',
        CHW = 'CHW',
        CLF = 'CLF',
        CLP = 'CLP',
        CNY = 'CNY',
        COP = 'COP',
        COU = 'COU',
        CRC = 'CRC',
        CUC = 'CUC',
        CUP = 'CUP',
        CVE = 'CVE',
        CZK = 'CZK',
        DJF = 'DJF',
        DKK = 'DKK',
        DOP = 'DOP',
        DZD = 'DZD',
        EGP = 'EGP',
        ERN = 'ERN',
        ETB = 'ETB',
        EUR = 'EUR',
        FJD = 'FJD',
        FKP = 'FKP',
        GBP = 'GBP',
        GEL = 'GEL',
        GHS = 'GHS',
        GIP = 'GIP',
        GMD = 'GMD',
        GNF = 'GNF',
        GTQ = 'GTQ',
        GYD = 'GYD',
        HKD = 'HKD',
        HNL = 'HNL',
        HRK = 'HRK',
        HTG = 'HTG',
        HUF = 'HUF',
        IDR = 'IDR',
        ILS = 'ILS',
        INR = 'INR',
        IQD = 'IQD',
        IRR = 'IRR',
        ISK = 'ISK',
        JMD = 'JMD',
        JOD = 'JOD',
        JPY = 'JPY',
        KES = 'KES',
        KGS = 'KGS',
        KHR = 'KHR',
        KMF = 'KMF',
        KPW = 'KPW',
        KRW = 'KRW',
        KWD = 'KWD',
        KYD = 'KYD',
        KZT = 'KZT',
        LAK = 'LAK',
        LBP = 'LBP',
        LKR = 'LKR',
        LRD = 'LRD',
        LSL = 'LSL',
        LTL = 'LTL',
        LVL = 'LVL',
        LYD = 'LYD',
        MAD = 'MAD',
        MDL = 'MDL',
        MGA = 'MGA',
        MKD = 'MKD',
        MMK = 'MMK',
        MNT = 'MNT',
        MOP = 'MOP',
        MRO = 'MRO',
        MUR = 'MUR',
        MVR = 'MVR',
        MWK = 'MWK',
        MXN = 'MXN',
        MXV = 'MXV',
        MYR = 'MYR',
        MZN = 'MZN',
        NAD = 'NAD',
        NGN = 'NGN',
        NIO = 'NIO',
        NOK = 'NOK',
        NPR = 'NPR',
        NZD = 'NZD',
        OMR = 'OMR',
        PAB = 'PAB',
        PEN = 'PEN',
        PGK = 'PGK',
        PHP = 'PHP',
        PKR = 'PKR',
        PLN = 'PLN',
        PYG = 'PYG',
        QAR = 'QAR',
        RON = 'RON',
        RSD = 'RSD',
        RUB = 'RUB',
        RWF = 'RWF',
        SAR = 'SAR',
        SBD = 'SBD',
        SCR = 'SCR',
        SDG = 'SDG',
        SEK = 'SEK',
        SGD = 'SGD',
        SHP = 'SHP',
        SLL = 'SLL',
        SOS = 'SOS',
        SRD = 'SRD',
        SSP = 'SSP',
        STD = 'STD',
        SVC = 'SVC',
        SYP = 'SYP',
        SZL = 'SZL',
        THB = 'THB',
        TJS = 'TJS',
        TMT = 'TMT',
        TND = 'TND',
        TOP = 'TOP',
        TRY = 'TRY',
        TTD = 'TTD',
        TWD = 'TWD',
        TZS = 'TZS',
        UAH = 'UAH',
        UGX = 'UGX',
        USD = 'USD',
        USN = 'USN',
        USS = 'USS',
        UYI = 'UYI',
        UYU = 'UYU',
        UZS = 'UZS',
        VEF = 'VEF',
        VND = 'VND',
        VUV = 'VUV',
        WST = 'WST',
        XAF = 'XAF',
        XAG = 'XAG',
        XAU = 'XAU',
        XBA = 'XBA',
        XBB = 'XBB',
        XBC = 'XBC',
        XBD = 'XBD',
        XCD = 'XCD',
        XDR = 'XDR',
        XOF = 'XOF',
        XPD = 'XPD',
        XPF = 'XPF',
        XPT = 'XPT',
        XTS = 'XTS',
        XXX = 'XXX',
        YER = 'YER',
        ZAR = 'ZAR',
        ZMK = 'ZMK',
        ZMW = 'ZMW',
        BTC = 'BTC',
    }
}
/**
 * V1Order
 */
export class V1Order {
    /**
     * Any errors that occurred during the request.
     */
    errors?: Array<Error>;
    /**
     * The order's unique identifier.
     */
    id?: string;
    /**
     * The email address of the order's buyer.
     */
    buyer_email?: string;
    /**
     * The name of the order's buyer.
     */
    recipient_name?: string;
    /**
     * The phone number to use for the order's delivery.
     */
    recipient_phone_number?: string;
    /**
     * Whether the tax is an ADDITIVE tax or an INCLUSIVE tax. See [V1OrderState](#type-v1orderstate) for possible
     * values
     */
    state?: V1Order.StateEnum;
    /**
     * The address to ship the order to.
     */
    shipping_address?: Address;
    /**
     * The amount of all items purchased in the order, before taxes and shipping.
     */
    subtotal_money?: V1Money;
    /**
     * The shipping cost for the order.
     */
    total_shipping_money?: V1Money;
    /**
     * The total of all taxes applied to the order.
     */
    total_tax_money?: V1Money;
    /**
     * The total cost of the order.
     */
    total_price_money?: V1Money;
    /**
     * The total of all discounts applied to the order.
     */
    total_discount_money?: V1Money;
    /**
     * The time when the order was created, in ISO 8601 format.
     */
    created_at?: string;
    /**
     * The time when the order was last modified, in ISO 8601 format.
     */
    updated_at?: string;
    /**
     * The time when the order expires if no action is taken, in ISO 8601 format.
     */
    expires_at?: string;
    /**
     * The unique identifier of the payment associated with the order.
     */
    payment_id?: string;
    /**
     * A note provided by the buyer when the order was created, if any.
     */
    buyer_note?: string;
    /**
     * A note provided by the merchant when the order's state was set to COMPLETED, if any
     */
    completed_note?: string;
    /**
     * A note provided by the merchant when the order's state was set to REFUNDED, if any.
     */
    refunded_note?: string;
    /**
     * A note provided by the merchant when the order's state was set to CANCELED, if any.
     */
    canceled_note?: string;
    /**
     * The tender used to pay for the order.
     */
    tender?: V1Tender;
    /**
     * The history of actions associated with the order.
     */
    order_history?: Array<V1OrderHistoryEntry>;
    /**
     * The promo code provided by the buyer, if any.
     */
    promo_code?: string;
    /**
     * For Bitcoin transactions, the address that the buyer sent Bitcoin to.
     */
    btc_receive_address?: string;
    /**
     * For Bitcoin transactions, the price of the buyer's order in satoshi (100 million satoshi equals 1 BTC).
     */
    btc_price_satoshi?: number;
}

export namespace V1Order {
    export enum StateEnum {
        PENDING = 'PENDING',
        OPEN = 'OPEN',
        COMPLETED = 'COMPLETED',
        CANCELED = 'CANCELED',
        REFUNDED = 'REFUNDED',
        REJECTED = 'REJECTED',
    }
}
/**
 * V1OrderHistoryEntry
 */
export class V1OrderHistoryEntry {
    /**
     * The type of action performed on the order. See [V1OrderHistoryEntryAction](#type-v1orderhistoryentryaction) for
     * possible values
     */
    action?: V1OrderHistoryEntry.ActionEnum;
    /**
     * The time when the action was performed, in ISO 8601 format.
     */
    created_at?: string;
}

export namespace V1OrderHistoryEntry {
    export enum ActionEnum {
        ORDER_PLACED = 'ORDER_PLACED',
        DECLINED = 'DECLINED',
        PAYMENT_RECEIVED = 'PAYMENT_RECEIVED',
        CANCELED = 'CANCELED',
        COMPLETED = 'COMPLETED',
        REFUNDED = 'REFUNDED',
        EXPIRED = 'EXPIRED',
    }
}

export class V1OrderHistoryEntryAction {}

export class V1OrderState {}

/**
 * V1Page
 */
export class V1Page {
    /**
     * The page's unique identifier.
     */
    id?: string;
    /**
     * The page's name, if any.
     */
    name?: string;
    /**
     * The page's position in the merchant's list of pages. Always an integer between 0 and 6, inclusive.
     */
    page_index?: number;
    /**
     * The cells included on the page.
     */
    cells?: Array<V1PageCell>;
}

/**
 * V1PageCell
 */
export class V1PageCell {
    /**
     * The unique identifier of the page the cell is included on.
     */
    page_id?: string;
    /**
     * The row of the cell. Always an integer between 0 and 4, inclusive.
     */
    row?: number;
    /**
     * The column of the cell. Always an integer between 0 and 4, inclusive.
     */
    column?: number;
    /**
     * The type of entity represented in the cell (ITEM, DISCOUNT, CATEGORY, or PLACEHOLDER). See
     * [V1PageCellObjectType](#type-v1pagecellobjecttype) for possible values
     */
    object_type?: V1PageCell.ObjectTypeEnum;
    /**
     * The unique identifier of the entity represented in the cell. Not present for cells with an object_type of
     * PLACEHOLDER.
     */
    object_id?: string;
    /**
     * For a cell with an object_type of PLACEHOLDER, this value indicates the cell's special behavior. See
     * [V1PageCellPlaceholderType](#type-v1pagecellplaceholdertype) for possible values
     */
    placeholder_type?: V1PageCell.PlaceholderTypeEnum;
}

export namespace V1PageCell {
    export enum ObjectTypeEnum {
        ITEM = 'ITEM',
        DISCOUNT = 'DISCOUNT',
        CATEGORY = 'CATEGORY',
        PLACEHOLDER = 'PLACEHOLDER',
    }
    export enum PlaceholderTypeEnum {
        ALL_ITEMS = 'ALL_ITEMS',
        DISCOUNTS_CATEGORY = 'DISCOUNTS_CATEGORY',
        REWARDS_FINDER = 'REWARDS_FINDER',
    }
}

export class V1PageCellObjectType {}

export class V1PageCellPlaceholderType {}

/**
 * A payment represents a paid transaction between a Square merchant and a customer.
 * Payment details are usually available from Connect API endpoints within a few minutes after the transaction completes.
 * Each Payment object includes several fields that end in `_money`.
 * These fields describe the various amounts of money that contribute to the payment total:
 * <ul><li>Monetary values are <b>positive</b> if they represent an <em>increase</em> in the amount of money the merchant receives
 * (e.g., <code>tax_money</code>, <code>tip_money</code>).</li>
 * <li> Monetary values are <b>negative</b> if they represent an <em>decrease</em> in the amount of money the merchant receives
 * (e.g., <code>discount_money</code>, <code>refunded_money</code>).</li></ul>
 */
export class V1Payment {
    /**
     * The payment's unique identifier.
     */
    id?: string;
    /**
     * The unique identifier of the merchant that took the payment.
     */
    merchant_id?: string;
    /**
     * The time when the payment was created, in ISO 8601 format. Reflects the time of the first payment if the object
     * represents an incomplete partial payment, and the time of the last or complete payment otherwise.
     */
    created_at?: string;
    /**
     * The unique identifier of the Square account that took the payment.
     */
    creator_id?: string;
    /**
     * The device that took the payment.
     */
    device?: Device;
    /**
     * The URL of the payment's detail page in the merchant dashboard. The merchant must be signed in to the merchant
     * dashboard to view this page.
     */
    payment_url?: string;
    /**
     * The URL of the receipt for the payment. Note that for split tender payments, this URL corresponds to the receipt
     * for the first tender listed in the payment's tender field. Each Tender object has its own receipt_url field you
     * can use to get the other receipts associated with a split tender payment.
     */
    receipt_url?: string;
    /**
     * The sum of all inclusive taxes associated with the payment.
     */
    inclusive_tax_money?: V1Money;
    /**
     * The sum of all additive taxes associated with the payment.
     */
    additive_tax_money?: V1Money;
    /**
     * The total of all taxes applied to the payment. This is always the sum of inclusive_tax_money and
     * additive_tax_money.
     */
    tax_money?: V1Money;
    /**
     * The total of all tips applied to the payment.
     */
    tip_money?: V1Money;
    /**
     * The total of all discounts applied to the payment.
     */
    discount_money?: V1Money;
    /**
     * The total of all discounts applied to the payment.
     */
    total_collected_money?: V1Money;
    /**
     * The total of all processing fees collected by Square for the payment.
     */
    processing_fee_money?: V1Money;
    /**
     * The amount to be deposited into the merchant's bank account for the payment.
     */
    net_total_money?: V1Money;
    /**
     * The total of all refunds applied to the payment.
     */
    refunded_money?: V1Money;
    /**
     * The total of all sales, including any applicable taxes, rounded to the smallest legal unit of currency (e.g., the
     * nearest penny in USD, the nearest nickel in CAD)
     */
    swedish_rounding_money?: V1Money;
    /**
     * The total of all sales, including any applicable taxes.
     */
    gross_sales_money?: V1Money;
    /**
     * The total of all sales, minus any applicable taxes.
     */
    net_sales_money?: V1Money;
    /**
     * All of the inclusive taxes associated with the payment.
     */
    inclusive_tax?: Array<V1PaymentTax>;
    /**
     * All of the additive taxes associated with the payment.
     */
    additive_tax?: Array<V1PaymentTax>;
    /**
     * All of the tenders associated with the payment.
     */
    tender?: Array<V1Tender>;
    /**
     * All of the refunds applied to the payment. Note that the value of all refunds on a payment can exceed the value of all
     * tenders if a merchant chooses to refund money to a tender after previously accepting returned goods as part of an exchange.
     */
    refunds?: Array<V1Refund>;
    /**
     * The items purchased in the payment.
     */
    itemizations?: Array<V1PaymentItemization>;
    /**
     * The total of all surcharges applied to the payment.
     */
    surcharge_money?: V1Money;
    /**
     * A list of all surcharges associated with the payment.
     */
    surcharges?: Array<V1PaymentSurcharge>;
    /**
     * Indicates whether or not the payment is only partially paid for. If true, this payment will have the tenders
     * collected so far, but the itemizations will be empty until the payment is completed.
     */
    is_partial?: boolean;
}

/**
 * V1PaymentDiscount
 */
export class V1PaymentDiscount {
    /**
     * The discount's name.
     */
    name?: string;
    /**
     * The amount of money that this discount adds to the payment (note that this value is always negative or zero).
     */
    applied_money?: V1Money;
    /**
     * The ID of the applied discount, if available. Discounts applied in older versions of Square Register might not have an ID.
     */
    discount_id?: string;
}

/**
 * V1PaymentItemDetail
 */
export class V1PaymentItemDetail {
    /**
     * The name of the item's merchant-defined category, if any.
     */
    category_name?: string;
    /**
     *  The item's merchant-defined SKU, if any.
     */
    sku?: string;
    /**
     * The unique ID of the item purchased, if any.
     */
    item_id?: string;
    /**
     * The unique ID of the item variation purchased, if any.
     */
    item_variation_id?: string;
}

/**
 * Payment include an `itemizations` field that lists the items purchased, along with associated fees, modifiers, and
 * discounts. Each itemization has an `itemization_type` field that indicates which of the following the itemization
 * represents: <ul> <li>An item variation from the merchant's item library</li> <li>A custom monetary amount</li> <li>
 * An action performed on a Square gift card, such as activating or reloading it. </li> </ul>  *Note**: itemization
 * information included in a `Payment` object reflects details collected **at the time of the payment**. Details such as
 * the name or price of items might have changed since the payment was processed.
 */
export class V1PaymentItemization {
    /**
     * The item's name.
     */
    name?: string;
    /**
     * The quantity of the item purchased. This can be a decimal value.
     */
    quantity?: number;
    /**
     * The type of purchase that the itemization represents, such as an ITEM or CUSTOM_AMOUNT See
     * [V1PaymentItemizationItemizationType](#type-v1paymentitemizationitemizationtype) for possible values
     */
    itemization_type?: V1PaymentItemization.ItemizationTypeEnum;
    /**
     * Details of the item, including its unique identifier and the identifier of the item variation purchased.
     */
    item_detail?: V1PaymentItemDetail;
    /**
     * Notes entered by the merchant about the item at the time of payment, if any.
     */
    notes?: string;
    /**
     * The name of the item variation purchased, if any.
     */
    item_variation_name?: string;
    /**
     * The total cost of the item, including all taxes and discounts.
     */
    total_money?: V1Money;
    /**
     * The cost of a single unit of this item.
     */
    single_quantity_money?: V1Money;
    /**
     * The total cost of the itemization and its modifiers, not including taxes or discounts.
     */
    gross_sales_money?: V1Money;
    /**
     * The total of all discounts applied to the itemization. This value is always negative or zero.
     */
    discount_money?: V1Money;
    /**
     * The sum of gross_sales_money and discount_money.
     */
    net_sales_money?: V1Money;
    /**
     * All taxes applied to this itemization.
     */
    taxes?: Array<V1PaymentTax>;
    /**
     * All discounts applied to this itemization.
     */
    discounts?: Array<V1PaymentDiscount>;
    /**
     * All modifier options applied to this itemization.
     */
    modifiers?: Array<V1PaymentModifier>;
}

export namespace V1PaymentItemization {
    export enum ItemizationTypeEnum {
        ITEM = 'ITEM',
        CUSTOM_AMOUNT = 'CUSTOM_AMOUNT',
        GIFT_CARD_ACTIVATION = 'GIFT_CARD_ACTIVATION',
        GIFT_CARD_RELOAD = 'GIFT_CARD_RELOAD',
        GIFT_CARD_UNKNOWN = 'GIFT_CARD_UNKNOWN',
        OTHER = 'OTHER',
    }
}

export class V1PaymentItemizationItemizationType {}

/**
 * V1PaymentModifier
 */
export class V1PaymentModifier {
    /**
     * The modifier option's name.
     */
    name?: string;
    /**
     * The amount of money that this modifier option adds to the payment.
     */
    applied_money?: V1Money;
    /**
     * TThe ID of the applied modifier option, if available. Modifier options applied in older versions of Square
     * Register might not have an ID.
     */
    modifier_option_id?: string;
}

/**
 * V1PaymentSurcharge
 */
export class V1PaymentSurcharge {
    /**
     * The name of the surcharge.
     */
    name?: string;
    /**
     * The amount of money applied to the order as a result of the surcharge.
     */
    applied_money?: V1Money;
    /**
     * The amount of the surcharge as a percentage. The percentage is provided as a string representing the decimal
     * equivalent of the percentage. For example, \"0.7\" corresponds to a 7% surcharge. Exactly one of rate or
     * amount_money should be set.
     */
    rate?: string;
    /**
     * The amount of the surcharge as a Money object. Exactly one of rate or amount_money should be set.
     */
    amount_money?: V1Money;
    /**
     * Indicates the source of the surcharge. For example, if it was applied as an automatic gratuity for a large group.
     * See [V1PaymentSurchargeType](#type-v1paymentsurchargetype) for possible values
     */
    type?: V1PaymentSurcharge.TypeEnum;
    /**
     * Indicates whether the surcharge is taxable.
     */
    taxable?: boolean;
    /**
     * The list of taxes that should be applied to the surcharge.
     */
    taxes?: Array<V1PaymentTax>;
    /**
     * A Square-issued unique identifier associated with the surcharge.
     */
    surcharge_id?: string;
}

export namespace V1PaymentSurcharge {
    export enum TypeEnum {
        UNKNOWN = 'UNKNOWN',
        AUTO_GRATUITY = 'AUTO_GRATUITY',
        CUSTOM = 'CUSTOM',
    }
}

export class V1PaymentSurchargeType {}

/**
 * V1PaymentTax
 */
export class V1PaymentTax {
    /**
     * Any errors that occurred during the request.
     */
    errors?: Array<Error>;
    /**
     * The merchant-defined name of the tax.
     */
    name?: string;
    /**
     * The amount of money that this tax adds to the payment.
     */
    applied_money?: V1Money;
    /**
     * The rate of the tax, as a string representation of a decimal number. A value of 0.07 corresponds to a rate of 7%.
     */
    rate?: string;
    /**
     * Whether the tax is an ADDITIVE tax or an INCLUSIVE tax. See
     * [V1PaymentTaxInclusionType](#type-v1paymenttaxinclusiontype) for possible values
     */
    inclusion_type?: V1PaymentTax.InclusionTypeEnum;
    /**
     * The ID of the tax, if available. Taxes applied in older versions of Square Register might not have an ID.
     */
    fee_id?: string;
}

export namespace V1PaymentTax {
    export enum InclusionTypeEnum {
        ADDITIVE = 'ADDITIVE',
        INCLUSIVE = 'INCLUSIVE',
    }
}

export class V1PaymentTaxInclusionType {}

/**
 * Represents a phone number.
 */
export class V1PhoneNumber {
    /**
     * The phone number's international calling code. For US phone numbers, this value is +1.
     */
    calling_code: string;
    /**
     * The phone number.
     */
    number: string;
}

/**
 * V1Refund
 */
export class V1Refund {
    /**
     * The type of refund See [V1RefundType](#type-v1refundtype) for possible values
     */
    type?: V1Refund.TypeEnum;
    /**
     * The merchant-specified reason for the refund.
     */
    reason?: string;
    /**
     * The amount of money refunded. This amount is always negative.
     */
    refunded_money?: V1Money;
    /**
     * The amount of processing fee money refunded. This amount is always positive.
     */
    refunded_processing_fee_money?: V1Money;
    /**
     * The total amount of tax money refunded. This amount is always negative.
     */
    refunded_tax_money?: V1Money;
    /**
     * The amount of additive tax money refunded. This amount is always negative.
     */
    refunded_additive_tax_money?: V1Money;
    /**
     * All of the additive taxes associated with the refund.
     */
    refunded_additive_tax?: Array<V1PaymentTax>;
    /**
     * The amount of inclusive tax money refunded. This amount is always negative.
     */
    refunded_inclusive_tax_money?: V1Money;
    /**
     * All of the inclusive taxes associated with the refund.
     */
    refunded_inclusive_tax?: Array<V1PaymentTax>;
    /**
     * The amount of tip money refunded. This amount is always negative.
     */
    refunded_tip_money?: V1Money;
    /**
     * The amount of discount money refunded. This amount is always positive.
     */
    refunded_discount_money?: V1Money;
    /**
     * The amount of surcharge money refunded. This amount is always negative.
     */
    refunded_surcharge_money?: V1Money;
    /**
     * A list of all surcharges associated with the refund.
     */
    refunded_surcharges?: Array<V1PaymentSurcharge>;
    /**
     * The time when the merchant initiated the refund for Square to process, in ISO 8601 format.
     */
    created_at?: string;
    /**
     * The time when Square processed the refund on behalf of the merchant, in ISO 8601 format.
     */
    processed_at?: string;
    /**
     * A Square-issued ID associated with the refund. For single-tender refunds, payment_id is the ID of the original
     * payment ID. For split-tender refunds, payment_id is the ID of the original tender. For exchange-based refunds
     * (is_exchange == true), payment_id is the ID of the original payment ID even if the payment includes other
     * tenders.
     */
    payment_id?: string;

    merchant_id?: string;
    /**
     * Indicates whether or not the refund is associated with an exchange. If is_exchange is true, the refund reflects
     * the value of goods returned in the exchange not the total money refunded.
     */
    is_exchange?: boolean;
}

export namespace V1Refund {
    export enum TypeEnum {
        FULL = 'FULL',
        PARTIAL = 'PARTIAL',
    }
}

export class V1RefundType {}

export class V1RemoveFeeRequest {}

export class V1RemoveModifierListRequest {}

export class V1RetrieveBankAccountRequest {}

export class V1RetrieveBusinessRequest {}

export class V1RetrieveCashDrawerShiftRequest {}

export class V1RetrieveEmployeeRequest {}

export class V1RetrieveEmployeeRoleRequest {}

export class V1RetrieveItemRequest {}

export class V1RetrieveModifierListRequest {}

export class V1RetrieveOrderRequest {}

export class V1RetrievePaymentRequest {}

export class V1RetrieveSettlementRequest {}

export class V1RetrieveTimecardRequest {}

/**
 * V1Settlement
 */
export class V1Settlement {
    /**
     * The settlement's unique identifier.
     */
    id?: string;
    /**
     * The settlement's current status. See [V1SettlementStatus](#type-v1settlementstatus) for possible values
     */
    status?: V1Settlement.StatusEnum;
    /**
     * The amount of money involved in the settlement. A positive amount indicates a deposit, and a negative amount
     * indicates a withdrawal. This amount is never zero.
     */
    total_money?: V1Money;
    /**
     * The time when the settlement was submitted for deposit or withdrawal, in ISO 8601 format.
     */
    initiated_at?: string;
    /**
     * The Square-issued unique identifier for the bank account associated with the settlement.
     */
    bank_account_id?: string;
    /**
     * The entries included in this settlement.
     */
    entries?: Array<V1SettlementEntry>;
}

export namespace V1Settlement {
    export enum StatusEnum {
        FAILED = 'FAILED',
        SENT = 'SENT',
    }
}
/**
 * V1SettlementEntry
 */
export class V1SettlementEntry {
    /**
     * The settlement's unique identifier.
     */
    payment_id?: string;
    /**
     * The settlement's current status. See [V1SettlementEntryType](#type-v1settlemententrytype) for possible values
     */
    type?: V1SettlementEntry.TypeEnum;
    /**
     * The total amount of money this entry contributes to the total settlement amount.
     */
    amount_money?: V1Money;
    /**
     * The amount of all Square fees associated with this settlement entry. This value is always negative or zero.
     */
    fee_money?: V1Money;
}

export namespace V1SettlementEntry {
    export enum TypeEnum {
        ADJUSTMENT = 'ADJUSTMENT',
        BALANCE_CHARGE = 'BALANCE_CHARGE',
        CHARGE = 'CHARGE',
        FREE_PROCESSING = 'FREE_PROCESSING',
        HOLD_ADJUSTMENT = 'HOLD_ADJUSTMENT',
        PAID_SERVICE_FEE = 'PAID_SERVICE_FEE',
        PAID_SERVICE_FEE_REFUND = 'PAID_SERVICE_FEE_REFUND',
        REDEMPTION_CODE = 'REDEMPTION_CODE',
        REFUND = 'REFUND',
        RETURNED_PAYOUT = 'RETURNED_PAYOUT',
        SQUARE_CAPITAL_ADVANCE = 'SQUARE_CAPITAL_ADVANCE',
        SQUARE_CAPITAL_PAYMENT = 'SQUARE_CAPITAL_PAYMENT',
        SQUARE_CAPITAL_REVERSED_PAYMENT = 'SQUARE_CAPITAL_REVERSED_PAYMENT',
        SUBSCRIPTION_FEE = 'SUBSCRIPTION_FEE',
        SUBSCRIPTION_FEE_REFUND = 'SUBSCRIPTION_FEE_REFUND',
        OTHER = 'OTHER',
        INCENTED_PAYMENT = 'INCENTED_PAYMENT',
        RETURNED_ACH_ENTRY = 'RETURNED_ACH_ENTRY',
        RETURNED_SQUARE_275 = 'RETURNED_SQUARE_275',
        SQUARE_275 = 'SQUARE_275',
        SQUARE_CARD = 'SQUARE_CARD',
    }
}

export class V1SettlementEntryType {}

export class V1SettlementStatus {}

/**
 * A tender represents a discrete monetary exchange. Square represents this exchange as a money object with a specific
 * currency and amount, where the amount is given in the smallest denomination of the given currency.
 * Square POS can accept more than one form of tender for a single payment (such as by splitting a bill between a credit
 * card and a gift card). The `tender` field of the Payment object lists all forms of tender used for the payment.
 * Split tender payments behave slightly differently from single tender payments:
 * The receipt_url for a split tender corresponds only to the first tender listed in the tender field.
 * To get the receipt URLs for the remaining tenders, use the receipt_url fields of the corresponding Tender objects.
 * *A note on gift cards**: when a customer purchases a Square gift card from a merchant, the merchant receives the
 * full amount of the gift card in the associated payment.
 * When that gift card is used as a tender, the balance of the gift card is reduced and the merchant receives no funds.
 * A `Tender` object with a type of `SQUARE_GIFT_CARD` indicates a gift card was used for some or all of the associated payment.
 */
export class V1Tender {
    /**
     * The tender's unique ID.
     */
    id?: string;
    /**
     * The type of tender. See [V1TenderType](#type-v1tendertype) for possible values
     */
    type?: V1Tender.TypeEnum;
    /**
     * A human-readable description of the tender.
     */
    name?: string;
    /**
     * The ID of the employee that processed the tender.
     */
    employee_id?: string;
    /**
     * The URL of the receipt for the tender.
     */
    receipt_url?: string;
    /**
     * The brand of credit card provided. See [V1TenderCardBrand](#type-v1tendercardbrand) for possible values.
     */
    card_brand?: V1Tender.CardBrandEnum;
    /**
     * The last four digits of the provided credit card's account number.
     */
    pan_suffix?: string;
    /**
     * The tender's unique ID. See [V1TenderEntryMethod](#type-v1tenderentrymethod) for possible values.
     */
    entry_method?: V1Tender.EntryMethodEnum;
    /**
     * Notes entered by the merchant about the tender at the time of payment, if any.
     * Typically only present for tender with the type: OTHER.
     */
    payment_note?: string;
    /**
     * The total amount of money provided in this form of tender.
     */
    total_money?: V1Money;
    /**
     * The amount of total_money applied to the payment.
     */
    tendered_money?: V1Money;
    /**
     * The time when the tender was created, in ISO 8601 format.
     */
    tendered_at?: string;
    /**
     * The time when the tender was settled, in ISO 8601 format.
     */
    settled_at?: string;
    /**
     * The amount of total_money returned to the buyer as change.
     */
    change_back_money?: V1Money;
    /**
     * The total of all refunds applied to this tender. This amount is always negative or zero.
     */
    refunded_money?: V1Money;
    /**
     * Indicates whether or not the tender is associated with an exchange. If is_exchange is true, the tender represents
     * the value of goods returned in an exchange not the actual money paid. The exchange value reduces the tender
     * amounts needed to pay for items purchased in the exchange.
     */
    is_exchange?: boolean;
}

export namespace V1Tender {
    export enum TypeEnum {
        CREDIT_CARD = 'CREDIT_CARD',
        CASH = 'CASH',
        THIRD_PARTY_CARD = 'THIRD_PARTY_CARD',
        NO_SALE = 'NO_SALE',
        SQUARE_WALLET = 'SQUARE_WALLET',
        SQUARE_GIFT_CARD = 'SQUARE_GIFT_CARD',
        UNKNOWN = 'UNKNOWN',
        OTHER = 'OTHER',
    }
    export enum CardBrandEnum {
        OTHER_BRAND = 'OTHER_BRAND',
        VISA = 'VISA',
        MASTERCARD = 'MASTERCARD',
        AMERICAN_EXPRESS = 'AMERICAN_EXPRESS',
        DISCOVER = 'DISCOVER',
        DISCOVER_DINERS = 'DISCOVER_DINERS',
        JCB = 'JCB',
        CHINA_UNIONPAY = 'CHINA_UNIONPAY',
        SQUARE_GIFT_CARD = 'SQUARE_GIFT_CARD',
    }
    export enum EntryMethodEnum {
        MANUAL = 'MANUAL',
        SCANNED = 'SCANNED',
        SQUARE_CASH = 'SQUARE_CASH',
        SQUARE_WALLET = 'SQUARE_WALLET',
        SWIPED = 'SWIPED',
        WEB_FORM = 'WEB_FORM',
        OTHER = 'OTHER',
    }
}

/**
 * The brand of a credit card.
 */
export class V1TenderCardBrand {}

export class V1TenderEntryMethod {}

export class V1TenderType {}

/**
 * Represents a timecard for an employee.
 */
export class V1Timecard {
    /**
     * The timecard's unique ID.
     */
    id?: string;
    /**
     * The ID of the employee the timecard is associated with.
     */
    employee_id: string;
    /**
     * If true, the timecard was deleted by the merchant, and it is no longer valid.
     */
    deleted?: boolean;
    /**
     * The clock-in time for the timecard, in ISO 8601 format.
     */
    clockin_time?: string;
    /**
     * The clock-out time for the timecard, in ISO 8601 format. Provide this value only if importing timecard
     * information from another system.
     */
    clockout_time?: string;
    /**
     * The ID of the location the employee clocked in from. We strongly reccomend providing a clockin_location_id.
     * Square uses the clockin_location_id to determine a timecard’s timezone and overtime rules.
     */
    clockin_location_id?: string;
    /**
     * The ID of the location the employee clocked out from. Provide this value only if importing timecard information
     * from another system.
     */
    clockout_location_id?: string;
    /**
     * The time when the timecard was created, in ISO 8601 format.
     */
    created_at?: string;
    /**
     * The time when the timecard was most recently updated, in ISO 8601 format.
     */
    updated_at?: string;
    /**
     * The total number of regular (non-overtime) seconds worked in the timecard.
     */
    regular_seconds_worked?: number;
    /**
     * The total number of overtime seconds worked in the timecard.
     */
    overtime_seconds_worked?: number;
    /**
     * The total number of doubletime seconds worked in the timecard.
     */
    doubletime_seconds_worked?: number;
}

/**
 * V1TimecardEvent
 */
export class V1TimecardEvent {
    /**
     * The event's unique ID.
     */
    id?: string;
    /**
     * The ID of the timecard to list events for. See [V1TimecardEventEventType](#type-v1timecardeventeventtype) for
     * possible values
     */
    event_type?: V1TimecardEvent.EventTypeEnum;
    /**
     * The time the employee clocked in, in ISO 8601 format.
     */
    clockin_time?: string;
    /**
     * The time the employee clocked out, in ISO 8601 format.
     */
    clockout_time?: string;
    /**
     * The time when the event was created, in ISO 8601 format.
     */
    created_at?: string;
}

export namespace V1TimecardEvent {
    export enum EventTypeEnum {
        API_CREATE = 'API_CREATE',
        API_EDIT = 'API_EDIT',
        API_DELETE = 'API_DELETE',
        REGISTER_CLOCKIN = 'REGISTER_CLOCKIN',
        REGISTER_CLOCKOUT = 'REGISTER_CLOCKOUT',
        DASHBOARD_SUPERVISOR_CLOSE = 'DASHBOARD_SUPERVISOR_CLOSE',
        DASHBOARD_EDIT = 'DASHBOARD_EDIT',
        DASHBOARD_DELETE = 'DASHBOARD_DELETE',
    }
}
/**
 * Actions that resulted in a change to a timecard. All timecard events created with the Connect API have an event type
 * that begins with `API`.
 */
export class V1TimecardEventEventType {}

export class V1UpdateCategoryRequest {
    /**
     * An object containing the fields to POST for the request. See the corresponding object definition for field
     * details.
     */
    body: V1Category;
}

export class V1UpdateDiscountRequest {
    /**
     * An object containing the fields to POST for the request. See the corresponding object definition for field
     * details.
     */
    body: V1Discount;
}

export class V1UpdateEmployeeRequest {
    /**
     * An object containing the fields to POST for the request. See the corresponding object definition for field
     * details.
     */
    body: V1Employee;
}

export class V1UpdateEmployeeRoleRequest {
    /**
     * An object containing the fields to POST for the request. See the corresponding object definition for field
     * details.
     */
    body: V1EmployeeRole;
}

export class V1UpdateFeeRequest {
    /**
     * An object containing the fields to POST for the request. See the corresponding object definition for field
     * details.
     */
    body: V1Fee;
}

export class V1UpdateItemRequest {
    /**
     * An object containing the fields to POST for the request. See the corresponding object definition for field
     * details.
     */
    body: V1Item;
}

/**
 * V1UpdateModifierListRequest
 */
export class V1UpdateModifierListRequest {
    /**
     * The modifier list's name.
     */
    name?: string;
    /**
     * Indicates whether multiple options from the modifier list can be applied to a single item. See
     * [V1UpdateModifierListRequestSelectionType](#type-v1updatemodifierlistrequestselectiontype) for possible values
     */
    selection_type?: V1UpdateModifierListRequest.SelectionTypeEnum;
}

export namespace V1UpdateModifierListRequest {
    export enum SelectionTypeEnum {
        SINGLE = 'SINGLE',
        MULTIPLE = 'MULTIPLE',
    }
}

export class V1UpdateModifierListRequestSelectionType {}

export class V1UpdateModifierOptionRequest {
    /**
     * An object containing the fields to POST for the request. See the corresponding object definition for field details.
     */
    body: V1ModifierOption;
}

/**
 * V1UpdateOrderRequest
 */
export class V1UpdateOrderRequest {
    /**
     * The action to perform on the order (COMPLETE, CANCEL, or REFUND). See
     * [V1UpdateOrderRequestAction](#type-v1updateorderrequestaction) for possible values
     */
    action: V1UpdateOrderRequest.ActionEnum;
    /**
     * The tracking number of the shipment associated with the order. Only valid if action is COMPLETE.
     */
    shipped_tracking_number?: string;
    /**
     * A merchant-specified note about the completion of the order. Only valid if action is COMPLETE.
     */
    completed_note?: string;
    /**
     * A merchant-specified note about the refunding of the order. Only valid if action is REFUND.
     */
    refunded_note?: string;
    /**
     * A merchant-specified note about the canceling of the order. Only valid if action is CANCEL.
     */
    canceled_note?: string;
}

export namespace V1UpdateOrderRequest {
    export enum ActionEnum {
        COMPLETE = 'COMPLETE',
        CANCEL = 'CANCEL',
        REFUND = 'REFUND',
    }
}

export class V1UpdateOrderRequestAction {}

export class V1UpdatePageCellRequest {
    /**
     * An object containing the fields to POST for the request. See the corresponding object definition for field details.
     */
    body: V1PageCell;
}

export class V1UpdatePageRequest {
    /**
     * An object containing the fields to POST for the request. See the corresponding object definition for field details.
     */
    body: V1Page;
}

export class V1UpdateTimecardRequest {
    /**
     * An object containing the fields to POST for the request. See the corresponding object definition for field details.
     */
    body: V1Timecard;
}

export class V1UpdateVariationRequest {
    /**
     * An object containing the fields to POST for the request. See the corresponding object definition for field details.
     */
    body: V1Variation;
}

/**
 * V1Variation
 */
export class V1Variation {
    /**
     * The item variation's unique ID.
     */
    id?: string;
    /**
     * The item variation's name.
     */
    name?: string;
    /**
     * The ID of the variation's associated item.
     */
    item_id?: string;
    /**
     * Indicates the variation's list position when displayed in Square Register and the merchant dashboard. If more
     * than one variation for the same item has the same ordinal value, those variations are displayed in alphabetical
     * order
     */
    ordinal?: number;
    /**
     * Indicates whether the item variation's price is fixed or determined at the time of sale.
     * See [V1VariationPricingType](#type-v1variationpricingtype) for possible values.
     */
    pricing_type?: V1Variation.PricingTypeEnum;
    /**
     * The item variation's price, if any.
     */
    price_money?: V1Money;
    /**
     * The item variation's SKU, if any.
     */
    sku?: string;
    /**
     * If true, inventory tracking is active for the variation.
     */
    track_inventory?: boolean;
    /**
     * Indicates whether the item variation displays an alert when its inventory quantity is less than or equal to its
     * inventory_alert_threshold. See [V1VariationInventoryAlertType](#type-v1variationinventoryalerttype) for possible values.
     */
    inventory_alert_type?: V1Variation.InventoryAlertTypeEnum;
    /**
     * If the inventory quantity for the variation is less than or equal to this value and inventory_alert_type is
     * LOW_QUANTITY, the variation displays an alert in the merchant dashboard.
     */
    inventory_alert_threshold?: number;
    /**
     * Arbitrary metadata associated with the variation. Cannot exceed 255 characters.
     */
    user_data?: string;
    /**
     * The ID of the CatalogObject in the Connect v2 API. Objects that are shared across multiple locations share the same v2 ID.
     */
    v2_id?: string;
}

export namespace V1Variation {
    export enum PricingTypeEnum {
        FIXED_PRICING = 'FIXED_PRICING',
        VARIABLE_PRICING = 'VARIABLE_PRICING',
    }
    export enum InventoryAlertTypeEnum {
        LOW_QUANTITY = 'LOW_QUANTITY',
        NONE = 'NONE',
        INVESTMENT = 'INVESTMENT',
        LOAN = 'LOAN',
        SAVINGS = 'SAVINGS',
        OTHER = 'OTHER',
    }
}

export class V1VariationInventoryAlertType {}

export class V1VariationPricingType {}

/**
 * Defines the request body for calls to the VoidTransaction endpoint.
 */
export class VoidTransactionRequest {}

/**
 * Defines the fields that are included in the response body of a request to the VoidTransaction endpoint.
 */
export class VoidTransactionResponse {
    /**
     * Any errors that occurred during the request.
     */
    errors?: Array<Error>;
}

/**
 * The days of the week.
 */
export class Weekday {}

/**
 * Sets the Day of the week and hour of the day that a business starts a  work week. Used for the calculation of overtime pay.
 */
export class WorkweekConfig {
    /**
     * UUID for this object
     */
    id?: string;
    /**
     * The day of the week on which a business week cuts over for compensation purposes.
     * See [Weekday](#type-weekday) for possible values.
     */
    start_of_week: WorkweekConfig.StartOfWeekEnum;
    /**
     * The local time at which a business week cuts over. Represented as a string in `HH:MM` format (`HH:MM:SS` is also
     * accepted, but seconds are truncated).
     */
    start_of_day_local_time: string;
    /**
     * Used for resolving concurrency issues; request will fail if version provided does not match server version at
     * time of request. If not provided, Square executes a blind write; potentially overwriting data from another write.
     */
    version?: number;
    /**
     * A read-only timestamp in RFC 3339 format; presented in UTC.
     */
    created_at?: string;
    /**
     * A read-only timestamp in RFC 3339 format; presented in UTC.
     */
    updated_at?: string;
}

export namespace WorkweekConfig {
    export enum StartOfWeekEnum {
        MON = 'MON',
        TUE = 'TUE',
        WED = 'WED',
        THU = 'THU',
        FRI = 'FRI',
        SAT = 'SAT',
        SUN = 'SUN',
    }
}

export class ApiClient {
    /**
     * The base URL against which to resolve every API call's (relative) path.
     */
    basePath: string;
    /**
     * The authentication methods to be included for all API calls.
     */
    authentications: Record<string, any>;
    /**
     * The default HTTP headers to be included for all API calls.
     */
    defaultHeaders: Record<string, string>;
    /**
     * The default HTTP timeout for all API calls.
     */
    timeout: number;
    /**
     * If set to false an additional timestamp parameter is added to all API GET calls to prevent browser caching.
     */
    cache: boolean;
    /**
     * If set to true, the client will save the cookies from each server response, and return them in the next request.
     */
    enableCookies: boolean;
}

export class ApplePayApi {
    /**
     * Activates a domain for use with Web Apple Pay and Square.
     * A validation will be performed on this domain by Apple to ensure is it properly set up as an Apple Pay enabled domain.
     * This endpoint provides an easy way for platform developers to bulk activate Web Apple Pay with Square for merchants using
     * their platform. To learn more about Apple Pay on Web see the Apple Pay section in the
     * [Embedding the Square Payment Form](/payments/sqpaymentform/overview) guide.
     */
    registerDomain(params: RegisterDomainRequest): Promise<RegisterDomainResponse>;
}

export class CatalogApi {
    /**
     * Deletes a set of [CatalogItem](#type-catalogitem)s based on the provided list of target IDs and returns a set of successfully
     * deleted IDs in the response. Deletion is a cascading event such that all children of the targeted object are also deleted.
     * For example, deleting a CatalogItem will also delete all of its [CatalogItemVariation](#type-catalogitemvariation) children.
     * `BatchDeleteCatalogObjects` succeeds even if only a portion of the targeted IDs can be deleted.
     * The response will only include IDs that were actually deleted.
     */
    batchDeleteCatalogObjects(params: BatchDeleteCatalogObjectsRequest): Promise<BatchDeleteCatalogObjectsResponse>;
    /**
     * Returns a set of objects based on the provided ID. Each [CatalogItem](#type-catalogitem) returned in the set includes all of
     * its child information including: all of its [CatalogItemVariation](#type-catalogitemvariation) objects, references to its
     * [CatalogModifierList](#type-catalogmodifierlist) objects, and the ids of any [CatalogTax](#type-catalogtax) objects that apply to it.
     */
    batchRetrieveCatalogObjects(params: BatchRetrieveCatalogObjectsRequest): Promise<BatchRetrieveCatalogObjectsResponse>;
    /**
     * Creates or updates up to 10,000 target objects based on the provided list of objects. The target objects are grouped into
     * batches and each batch is inserted/updated in an all-or-nothing manner. If an object within a batch is malformed in some way,
     * or violates a database constraint, the entire batch containing that item will be disregarded. However, other batches in
     * the same request may still succeed. Each batch may contain up to 1,000 objects, and batches will be processed in order as long
     * as the total object count for the request (items, variations, modifier lists, discounts, and taxes) is no more than 10,000.
     */
    batchUpsertCatalogObjects(params: BatchUpsertCatalogObjectsRequest): Promise<BatchUpsertCatalogObjectsResponse>;
    /**
     * Returns information about the Square Catalog API, such as batch size limits for `BatchUpsertCatalogObjects`.
     */
    catalogInfo(params: CatalogInfoRequest): Promise<CatalogInfoResponse>;
    /**
     * Deletes a single [CatalogObject](#type-catalogobject) based on the provided ID and returns the set of successfully deleted
     * IDs in the response. Deletion is a cascading event such that all children of the targeted object are also deleted.
     * For example, deleting a [CatalogItem](#type-catalogitem) will also delete all of its
     * [CatalogItemVariation](#type-catalogitemvariation) children.
     */
    deleteCatalogObject(params: DeleteCatalogObjectRequest): Promise<DeleteCatalogObjectResponse>;
    /**
     * Returns a list of [CatalogObject](#type-catalogobject)s that includes all objects of a set of desired types
     * (for example, all [CatalogItem](#type-catalogitem) and [CatalogTax](#type-catalogtax) objects) in the catalog.
     * The types parameter is specified as a comma-separated list of valid [CatalogObject](#type-catalogobject)
     * types: `ITEM`, `ITEM_VARIATION`, `MODIFIER`, `MODIFIER_LIST`, `CATEGORY`, `DISCOUNT`, `TAX`.
     */
    listCatalog(params: ListCatalogRequest): Promise<ListCatalogResponse>;
    /**
     * Returns a single [CatalogItem](#type-catalogitem) as a [CatalogObject](#type-catalogobject) based on the provided ID.
     * The returned object includes all of the relevant [CatalogItem](#type-catalogitem) information including:
     * [CatalogItemVariation](#type-catalogitemvariation) children, references to its [CatalogModifierList](#type-catalogmodifierlist)
     * objects, and the ids of any [CatalogTax](#type-catalogtax) objects that apply to it.
     */
    retrieveCatalogObject(params: RetrieveCatalogObjectRequest): Promise<RetrieveCatalogObjectResponse>;
    /**
     * Queries the targeted catalog using a variety of query types: [CatalogQuerySortedAttribute](#type-catalogquerysortedattribute),
     * [CatalogQueryExact](#type-catalogqueryexact), [CatalogQueryRange](#type-catalogqueryrange),
     * [CatalogQueryText](#type-catalogquerytext), [CatalogQueryItemsForTax](#type-catalogqueryitemsfortax),
     * and [CatalogQueryItemsForModifierList](#type-catalogqueryitemsformodifierlist).
     */
    searchCatalogObjects(params: SearchCatalogObjectsRequest): Promise<SearchCatalogObjectsResponse>;
    /**
     * Updates the [CatalogModifierList](#type-catalogmodifierlist) objects that apply to the targeted
     * [CatalogItem](#type-catalogitem) without having to perform an upsert on the entire item.
     */
    updateItemModifierLists(params: UpdateItemModifierListsRequest): Promise<UpdateItemModifierListsResponse>;
    /**
     * Updates the [CatalogTax](#type-catalogtax) objects that apply to the targeted [CatalogItem](#type-catalogitem)
     * without having to perform an upsert on the entire item.
     */
    updateItemTaxes(params: UpdateItemTaxesRequest): Promise<UpdateItemTaxesResponse>;
    /**
     * Creates or updates the target [CatalogObject](#type-catalogobject).
     */
    upsertCatalogObject(params: UpsertCatalogObjectRequest): Promise<UpsertCatalogObjectResponse>;
}

export class CheckoutApi {
    /**
     * Links a `checkoutId` to a `checkout_page_url` that customers will be directed to in order to provide their payment
     * information using a payment processing workflow hosted on connect.squareup.com.
     */
    createCheckout(params: CreateCheckoutRequest): Promise<CreateCheckoutResponse>;
}

export class CustomersApi {
    /**
     * Creates a new customer for a business, which can have associated cards on file. You must provide at least one of the
     * following values in your request to this endpoint: `given_name`. `family_name`, `company_name`, `email_address`,`phone_number`.
     */
    createCustomer(params: CreateCustomerRequest): Promise<CreateCustomerResponse>;
    /**
     * Adds a card on file to an existing customer. As with charges, calls to `CreateCustomerCard` are idempotent.
     * Multiple calls with the same card nonce return the same card record that was created with the provided nonce during the
     * _first_ call. Cards on file are automatically updated on a monthly basis to confirm they are still valid and can be charged.
     */
    createCustomerCard(params: CreateCustomerCardRequest): Promise<CreateCustomerCardResponse>;
    /**
     * Deletes a customer from a business, along with any linked cards on file.
     * When two profiles are merged into a single profile, that profile is assigned a new `customer_id`.
     * You must use the new `customer_id` to delete merged profiles.
     */
    deleteCustomer(params: DeleteCustomerRequest): Promise<DeleteCustomerResponse>;
    /**
     * Removes a card on file from a customer.
     */
    deleteCustomerCard(params: DeleteCustomerCardRequest): Promise<DeleteCustomerCardResponse>;
    /**
     * Lists a business's customers.
     */
    listCustomers(params: ListCustomersRequest): Promise<ListCustomersResponse>;
    /**
     * Returns details for a single customer.
     */
    retrieveCustomer(params: RetrieveCustomerRequest): Promise<RetrieveCustomerResponse>;
    /**
     * Searches the customer profiles associated with a Square account.
     * Calling SearchCustomers without an explicit query parameter returns all customer profiles ordered alphabetically based
     * on `given_name` and `family_name`.
     */
    searchCustomers(params: SearchCustomersRequest): Promise<SearchCustomersResponse>;
    /**
     * Updates the details of an existing customer. When two profiles are merged into a single profile, that profile is assigned
     * a new `customer_id`. You must use the new `customer_id` to update merged profiles.
     * You cannot edit a customer's cards on file with this endpoint. To make changes to a card on file, you must delete the
     * existing card on file with the [DeleteCustomerCard](#endpoint-customers-deletecustomercard) endpoint, then create a
     * new one with the [CreateCustomerCard](#endpoint-customers-createcustomercard) endpoint.
     */
    updateCustomer(params: UpdateCustomerRequest): Promise<UpdateCustomerResponse>;
}

export class OrdersApi {
    /**
     * Retrieves a set of [Order](#type-order)s by their IDs.
     * If a given Order ID does not exist, the ID is ignored instead of generating an error.
     */
    batchRetrieveOrders(params: BatchRetrieveOrdersRequest): Promise<BatchRetrieveOrdersResponse>;
    /**
     * Creates an [Order](#type-order) that can then be referenced as `order_id` in a request to the [Charge](#endpoint-charge)
     * endpoint. Orders specify products for purchase, along with discounts, taxes, and other settings to apply to the purchase.
     * To associate a created order with a request to the Charge endpoint, provide the order's `id` in the `order_id` field of
     * your request. You cannot modify an order after you create it. If you need to modify an order, instead create a new order
     * with modified details. To learn more about the Orders API, see the [Orders API Overview](/products/orders/overview).
     */
    createOrder(params: CreateOrderRequest): Promise<CreateOrderResponse>;
}

export class EmployeesApi {
    /**
     * Gets a list of `Employee` objects for a business.
     */
    listEmployees(params: ListEmployeesRequest): Promise<ListEmployeesResponse>;
    /**
     * Gets an `Employee` by Square-assigned employee `ID` (UUID).
     */
    retrieveEmployee(id: string): Promise<RetrieveEmployeeResponse>;
}

export class InventoryApi {
    /**
     * Applies adjustments and counts to the provided item quantities.
     * On success: returns the current calculated counts for all objects referenced in the request.
     * On failure: returns a list of related errors.
     */
    batchChangeInventory(params: BatchChangeInventoryRequest): Promise<BatchChangeInventoryResponse>;
    /**
     * Returns historical physical counts and adjustments based on the provided filter criteria.
     * Results are paginated and sorted in ascending order according their `occurred_at` timestamp (oldest first).
     * BatchRetrieveInventoryChanges is a catch-all query endpoint for queries that cannot be handled by other, simpler endpoints.
     */
    batchRetrieveInventoryChanges(params: BatchRetrieveInventoryChangesRequest): Promise<BatchRetrieveInventoryChangesResponse>;
    /**
     * Returns current counts for the provided [CatalogObject](#type-catalogobject)s at the requested [Location](#type-location)s.
     * Results are paginated and sorted in descending order according to their `calculated_at` timestamp (newest first).
     * When `updated_after` is specified, only counts that have changed since that time (based on the server timestamp for
     * the most recent change) are returned. This allows clients to perform a "sync" operation, for example in response to
     * receiving a Webhook notification.
     */
    batchRetrieveInventoryCounts(params: BatchRetrieveInventoryCountsRequest): Promise<BatchRetrieveInventoryCountsResponse>;
    /**
     * Returns the [InventoryAdjustment](#type-inventoryadjustment) object with the provided `adjustment_id`.
     */
    retrieveInventoryAdjustment(...args: Array<any>): Promise<RetrieveInventoryAdjustmentResponse>;
    /**
     * Returns a set of physical counts and inventory adjustments for the provided [CatalogObject](#type-catalogobject) at the
     * requested [Location](#type-location)s. Results are paginated and sorted in descending order according to their
     * `occurred_at` timestamp (newest first). There are no limits on how far back the caller can page.
     * This endpoint is useful when displaying recent changes for a specific item. For more sophisticated queries,
     * use a batch endpoint.
     */
    retrieveInventoryChanges(...args: Array<any>): Promise<RetrieveInventoryChangesResponse>;
    /**
     * Retrieves the current calculated stock count for a given [CatalogObject](#type-catalogobject) at a given set
     * of [Location](#type-location)s. Responses are paginated and unsorted. For more sophisticated queries, use a batch endpoint.
     */
    retrieveInventoryCount(...args: Array<any>): Promise<RetrieveInventoryCountResponse>;
    /**
     * Returns the [InventoryPhysicalCount](#type-inventoryphysicalcount) object with the provided `physical_count_id`.
     */
    retrieveInventoryPhysicalCount(...args: Array<any>): Promise<RetrieveInventoryPhysicalCountResponse>;
}

// TBU...
export class LaborApi {}
export class MobileAuthorizationApi {}
export class OAuthApi {}
export class ReportingApi {}
export class TransactionsApi {}
export class V1EmployeesApi {}
export class V1ItemsApi {}
export class V1LocationsApi {}
export class V1TransactionsApi {}
