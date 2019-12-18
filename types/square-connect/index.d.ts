// Type definitions for square-connect 2.20190814
// Project: https://docs.connect.squareup.com/
// Definitions by: Dmitri Dimitrioglo <https://github.com/ddimitrioglo>
//                 Richard Moot <https://github.com/mootrichard>
//                 Nican <https://github.com/Nican>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.4

export type CountryType =
    | 'ZZ'
    | 'AD'
    | 'AE'
    | 'AF'
    | 'AG'
    | 'AI'
    | 'AL'
    | 'AM'
    | 'AO'
    | 'AQ'
    | 'AR'
    | 'AS'
    | 'AT'
    | 'AU'
    | 'AW'
    | 'AX'
    | 'AZ'
    | 'BA'
    | 'BB'
    | 'BD'
    | 'BE'
    | 'BF'
    | 'BG'
    | 'BH'
    | 'BI'
    | 'BJ'
    | 'BL'
    | 'BM'
    | 'BN'
    | 'BO'
    | 'BQ'
    | 'BR'
    | 'BS'
    | 'BT'
    | 'BV'
    | 'BW'
    | 'BY'
    | 'BZ'
    | 'CA'
    | 'CC'
    | 'CD'
    | 'CF'
    | 'CG'
    | 'CH'
    | 'CI'
    | 'CK'
    | 'CL'
    | 'CM'
    | 'CN'
    | 'CO'
    | 'CR'
    | 'CU'
    | 'CV'
    | 'CW'
    | 'CX'
    | 'CY'
    | 'CZ'
    | 'DE'
    | 'DJ'
    | 'DK'
    | 'DM'
    | 'DO'
    | 'DZ'
    | 'EC'
    | 'EE'
    | 'EG'
    | 'EH'
    | 'ER'
    | 'ES'
    | 'ET'
    | 'FI'
    | 'FJ'
    | 'FK'
    | 'FM'
    | 'FO'
    | 'FR'
    | 'GA'
    | 'GB'
    | 'GD'
    | 'GE'
    | 'GF'
    | 'GG'
    | 'GH'
    | 'GI'
    | 'GL'
    | 'GM'
    | 'GN'
    | 'GP'
    | 'GQ'
    | 'GR'
    | 'GS'
    | 'GT'
    | 'GU'
    | 'GW'
    | 'GY'
    | 'HK'
    | 'HM'
    | 'HN'
    | 'HR'
    | 'HT'
    | 'HU'
    | 'ID'
    | 'IE'
    | 'IL'
    | 'IM'
    | 'IN'
    | 'IO'
    | 'IQ'
    | 'IR'
    | 'IS'
    | 'IT'
    | 'JE'
    | 'JM'
    | 'JO'
    | 'JP'
    | 'KE'
    | 'KG'
    | 'KH'
    | 'KI'
    | 'KM'
    | 'KN'
    | 'KP'
    | 'KR'
    | 'KW'
    | 'KY'
    | 'KZ'
    | 'LA'
    | 'LB'
    | 'LC'
    | 'LI'
    | 'LK'
    | 'LR'
    | 'LS'
    | 'LT'
    | 'LU'
    | 'LV'
    | 'LY'
    | 'MA'
    | 'MC'
    | 'MD'
    | 'ME'
    | 'MF'
    | 'MG'
    | 'MH'
    | 'MK'
    | 'ML'
    | 'MM'
    | 'MN'
    | 'MO'
    | 'MP'
    | 'MQ'
    | 'MR'
    | 'MS'
    | 'MT'
    | 'MU'
    | 'MV'
    | 'MW'
    | 'MX'
    | 'MY'
    | 'MZ'
    | 'NA'
    | 'NC'
    | 'NE'
    | 'NF'
    | 'NG'
    | 'NI'
    | 'NL'
    | 'NO'
    | 'NP'
    | 'NR'
    | 'NU'
    | 'NZ'
    | 'OM'
    | 'PA'
    | 'PE'
    | 'PF'
    | 'PG'
    | 'PH'
    | 'PK'
    | 'PL'
    | 'PM'
    | 'PN'
    | 'PR'
    | 'PS'
    | 'PT'
    | 'PW'
    | 'PY'
    | 'QA'
    | 'RE'
    | 'RO'
    | 'RS'
    | 'RU'
    | 'RW'
    | 'SA'
    | 'SB'
    | 'SC'
    | 'SD'
    | 'SE'
    | 'SG'
    | 'SH'
    | 'SI'
    | 'SJ'
    | 'SK'
    | 'SL'
    | 'SM'
    | 'SN'
    | 'SO'
    | 'SR'
    | 'SS'
    | 'ST'
    | 'SV'
    | 'SX'
    | 'SY'
    | 'SZ'
    | 'TC'
    | 'TD'
    | 'TF'
    | 'TG'
    | 'TH'
    | 'TJ'
    | 'TK'
    | 'TL'
    | 'TM'
    | 'TN'
    | 'TO'
    | 'TR'
    | 'TT'
    | 'TV'
    | 'TW'
    | 'TZ'
    | 'UA'
    | 'UG'
    | 'UM'
    | 'US'
    | 'UY'
    | 'UZ'
    | 'VA'
    | 'VC'
    | 'VE'
    | 'VG'
    | 'VI'
    | 'VN'
    | 'VU'
    | 'WF'
    | 'WS'
    | 'YE'
    | 'YT'
    | 'ZA'
    | 'ZM'
    | 'ZW';

export type CurrencyType =
    | 'UNKNOWN_CURRENCY'
    | 'AED'
    | 'AFN'
    | 'ALL'
    | 'AMD'
    | 'ANG'
    | 'AOA'
    | 'ARS'
    | 'AUD'
    | 'AWG'
    | 'AZN'
    | 'BAM'
    | 'BBD'
    | 'BDT'
    | 'BGN'
    | 'BHD'
    | 'BIF'
    | 'BMD'
    | 'BND'
    | 'BOB'
    | 'BOV'
    | 'BRL'
    | 'BSD'
    | 'BTN'
    | 'BWP'
    | 'BYR'
    | 'BZD'
    | 'CAD'
    | 'CDF'
    | 'CHE'
    | 'CHF'
    | 'CHW'
    | 'CLF'
    | 'CLP'
    | 'CNY'
    | 'COP'
    | 'COU'
    | 'CRC'
    | 'CUC'
    | 'CUP'
    | 'CVE'
    | 'CZK'
    | 'DJF'
    | 'DKK'
    | 'DOP'
    | 'DZD'
    | 'EGP'
    | 'ERN'
    | 'ETB'
    | 'EUR'
    | 'FJD'
    | 'FKP'
    | 'GBP'
    | 'GEL'
    | 'GHS'
    | 'GIP'
    | 'GMD'
    | 'GNF'
    | 'GTQ'
    | 'GYD'
    | 'HKD'
    | 'HNL'
    | 'HRK'
    | 'HTG'
    | 'HUF'
    | 'IDR'
    | 'ILS'
    | 'INR'
    | 'IQD'
    | 'IRR'
    | 'ISK'
    | 'JMD'
    | 'JOD'
    | 'JPY'
    | 'KES'
    | 'KGS'
    | 'KHR'
    | 'KMF'
    | 'KPW'
    | 'KRW'
    | 'KWD'
    | 'KYD'
    | 'KZT'
    | 'LAK'
    | 'LBP'
    | 'LKR'
    | 'LRD'
    | 'LSL'
    | 'LTL'
    | 'LVL'
    | 'LYD'
    | 'MAD'
    | 'MDL'
    | 'MGA'
    | 'MKD'
    | 'MMK'
    | 'MNT'
    | 'MOP'
    | 'MRO'
    | 'MUR'
    | 'MVR'
    | 'MWK'
    | 'MXN'
    | 'MXV'
    | 'MYR'
    | 'MZN'
    | 'NAD'
    | 'NGN'
    | 'NIO'
    | 'NOK'
    | 'NPR'
    | 'NZD'
    | 'OMR'
    | 'PAB'
    | 'PEN'
    | 'PGK'
    | 'PHP'
    | 'PKR'
    | 'PLN'
    | 'PYG'
    | 'QAR'
    | 'RON'
    | 'RSD'
    | 'RUB'
    | 'RWF'
    | 'SAR'
    | 'SBD'
    | 'SCR'
    | 'SDG'
    | 'SEK'
    | 'SGD'
    | 'SHP'
    | 'SLL'
    | 'SOS'
    | 'SRD'
    | 'SSP'
    | 'STD'
    | 'SVC'
    | 'SYP'
    | 'SZL'
    | 'THB'
    | 'TJS'
    | 'TMT'
    | 'TND'
    | 'TOP'
    | 'TRY'
    | 'TTD'
    | 'TWD'
    | 'TZS'
    | 'UAH'
    | 'UGX'
    | 'USD'
    | 'USN'
    | 'USS'
    | 'UYI'
    | 'UYU'
    | 'UZS'
    | 'VEF'
    | 'VND'
    | 'VUV'
    | 'WST'
    | 'XAF'
    | 'XAG'
    | 'XAU'
    | 'XBA'
    | 'XBB'
    | 'XBC'
    | 'XBD'
    | 'XCD'
    | 'XDR'
    | 'XOF'
    | 'XPD'
    | 'XPF'
    | 'XPT'
    | 'XTS'
    | 'XXX'
    | 'YER'
    | 'ZAR'
    | 'ZMK'
    | 'ZMW'
    | 'BTC';

export type DayOfWeekType = 'SUN' | 'MON' | 'TUE' | 'WED' | 'THU' | 'FRI' | 'SAT';

export type CardBrandType =
    | 'JCB'
    | 'VISA'
    | 'DISCOVER'
    | 'MASTERCARD'
    | 'OTHER_BRAND'
    | 'CHINA_UNIONPAY'
    | 'DISCOVER_DINERS'
    | 'AMERICAN_EXPRESS'
    | 'SQUARE_GIFT_CARD';

export type SortOrderType = 'ASC' | 'DESC';

export type TaxType = 'ADDITIVE' | 'INCLUSIVE' | 'UNKNOWN_TAX';

export type TaxApplicationScopeType = 'ORDER' | 'LINE_ITEM' | 'OTHER_TAX_SCOPE';

export type DiscountType =
    | 'FIXED_AMOUNT'
    | 'FIXED_PERCENTAGE'
    | 'VARIABLE_AMOUNT'
    | 'VARIABLE_PERCENTAGE'
    | 'UNKNOWN_DISCOUNT';

export type DiscountApplicationScopeType = 'ORDER' | 'LINE_ITEM' | 'OTHER_DISCOUNT_SCOPE';

export type CustomerSourceType =
    | 'OTHER'
    | 'APPOINTMENTS'
    | 'COUPON'
    | 'DELETION_RECOVERY'
    | 'DIRECTORY'
    | 'EGIFTING'
    | 'EMAIL_COLLECTION'
    | 'FEEDBACK'
    | 'IMPORT'
    | 'INVOICES'
    | 'LOYALTY'
    | 'MARKETING'
    | 'MERGE'
    | 'ONLINE_STORE'
    | 'INSTANT_PROFILE'
    | 'TERMINAL'
    | 'THIRD_PARTY'
    | 'THIRD_PARTY_IMPORT'
    | 'UNMERGE_RECOVERY';

export type InventoryStateType =
    | 'CUSTOM'
    | 'IN_STOCK'
    | 'SOLD'
    | 'RETURNED_BY_CUSTOMER'
    | 'RESERVED_FOR_SALE'
    | 'SOLD_ONLINE'
    | 'ORDERED_FROM_VENDOR'
    | 'RECEIVED_FROM_VENDOR'
    | 'IN_TRANSIT_TO'
    | 'NONE'
    | 'WASTE'
    | 'UNLINKED_RETURN';

export type ActivityStatusType = 'ACTIVE' | 'INACTIVE';

export type FulfillmentType = 'PICKUP' | 'SHIPMENT';

export type FulfillmentStateType = 'PROPOSED' | 'RESERVED' | 'PREPARED' | 'COMPLETED' | 'CANCELED' | 'FAILED';

export type InventoryType = 'PHYSICAL_COUNT' | 'ADJUSTMENT' | 'TRANSFER';

export type ObjectType =
    | 'ITEM'
    | 'IMAGE'
    | 'CATEGORY'
    | 'ITEM_VARIATION'
    | 'TAX'
    | 'DISCOUNT'
    | 'MODIFIER_LIST'
    | 'MODIFIER';

export type PricingType = 'FIXED_PRICING' | 'VARIABLE_PRICING';

export type InventoryAlertType = 'NONE' | 'LOW_QUANTITY';

export type OrderStateType = 'OPEN' | 'COMPLETED' | 'CANCELED';

export type AreaUnitType =
    | 'IMPERIAL_ACRE'
    | 'IMPERIAL_SQUARE_INCH'
    | 'IMPERIAL_SQUARE_FOOT'
    | 'IMPERIAL_SQUARE_YARD'
    | 'IMPERIAL_SQUARE_MILE'
    | 'METRIC_SQUARE_METER'
    | 'METRIC_SQUARE_KILOMETER'
    | 'METRIC_SQUARE_CENTIMETER';

export type LengthUnitType =
    | 'IMPERIAL_INCH'
    | 'IMPERIAL_FOOT'
    | 'IMPERIAL_YARD'
    | 'IMPERIAL_MILE'
    | 'METRIC_MILLIMETER'
    | 'METRIC_CENTIMETER'
    | 'METRIC_METER'
    | 'METRIC_KILOMETER';

export type VolumeUnitType =
    | 'GENERIC_FLUID_OUNCE'
    | 'GENERIC_SHOT'
    | 'GENERIC_CUP'
    | 'GENERIC_PINT'
    | 'GENERIC_QUART'
    | 'GENERIC_GALLON'
    | 'IMPERIAL_CUBIC_INCH'
    | 'IMPERIAL_CUBIC_FOOT'
    | 'IMPERIAL_CUBIC_YARD'
    | 'METRIC_MILLILITER'
    | 'METRIC_LITER';

export type WeightUnitType =
    | 'IMPERIAL_WEIGHT_OUNCE'
    | 'IMPERIAL_POUND'
    | 'IMPERIAL_STONE'
    | 'METRIC_MILLIGRAM'
    | 'METRIC_GRAM'
    | 'METRIC_KILOGRAM';

export type ErrorCategoryType =
    | 'API_ERROR'
    | 'AUTHENTICATION_ERROR'
    | 'INVALID_REQUEST_ERROR'
    | 'RATE_LIMIT_ERROR'
    | 'PAYMENT_METHOD_ERROR'
    | 'REFUND_ERROR';

export type ErrorCodeType =
    | 'INTERNAL_SERVER_ERROR'
    | 'UNAUTHORIZED'
    | 'ACCESS_TOKEN_EXPIRED'
    | 'ACCESS_TOKEN_REVOKED'
    | 'FORBIDDEN'
    | 'INSUFFICIENT_SCOPES'
    | 'APPLICATION_DISABLED'
    | 'V1_APPLICATION'
    | 'V1_ACCESS_TOKEN'
    | 'CARD_PROCESSING_NOT_ENABLED'
    | 'BAD_REQUEST'
    | 'MISSING_REQUIRED_PARAMETER'
    | 'INCORRECT_TYPE'
    | 'INVALID_TIME'
    | 'INVALID_TIME_RANGE'
    | 'INVALID_VALUE'
    | 'INVALID_CURSOR'
    | 'UNKNOWN_QUERY_PARAMETER'
    | 'CONFLICTING_PARAMETERS'
    | 'EXPECTED_JSON_BODY'
    | 'INVALID_SORT_ORDER'
    | 'VALUE_REGEX_MISMATCH'
    | 'VALUE_TOO_SHORT'
    | 'VALUE_TOO_LONG'
    | 'VALUE_TOO_LOW'
    | 'VALUE_TOO_HIGH'
    | 'VALUE_EMPTY'
    | 'ARRAY_LENGTH_TOO_LONG'
    | 'ARRAY_LENGTH_TOO_SHORT'
    | 'ARRAY_EMPTY'
    | 'EXPECTED_BOOLEAN'
    | 'EXPECTED_INTEGER'
    | 'EXPECTED_FLOAT'
    | 'EXPECTED_STRING'
    | 'EXPECTED_OBJECT'
    | 'EXPECTED_ARRAY'
    | 'EXPECTED_MAP'
    | 'EXPECTED_BASE64_ENCODED_BYTE_ARRAY'
    | 'INVALID_ARRAY_VALUE'
    | 'INVALID_ENUM_VALUE'
    | 'INVALID_CONTENT_TYPE'
    | 'INVALID_FORM_VALUE'
    | 'ONE_INSTRUMENT_EXPECTED'
    | 'NO_FIELDS_SET'
    | 'DEPRECATED_FIELD_SET'
    | 'CARD_EXPIRED'
    | 'INVALID_EXPIRATION'
    | 'INVALID_EXPIRATION_YEAR'
    | 'INVALID_EXPIRATION_DATE'
    | 'UNSUPPORTED_CARD_BRAND'
    | 'UNSUPPORTED_ENTRY_METHOD'
    | 'INVALID_ENCRYPTED_CARD'
    | 'INVALID_CARD'
    | 'DELAYED_TRANSACTION_EXPIRED'
    | 'DELAYED_TRANSACTION_CANCELED'
    | 'DELAYED_TRANSACTION_CAPTURED'
    | 'DELAYED_TRANSACTION_FAILED'
    | 'CARD_TOKEN_EXPIRED'
    | 'CARD_TOKEN_USED'
    | 'AMOUNT_TOO_HIGH'
    | 'UNSUPPORTED_INSTRUMENT_TYPE'
    | 'REFUND_AMOUNT_INVALID'
    | 'REFUND_ALREADY_PENDING'
    | 'PAYMENT_NOT_REFUNDABLE'
    | 'INVALID_CARD_DATA'
    | 'LOCATION_MISMATCH'
    | 'IDEMPOTENCY_KEY_REUSED'
    | 'UNEXPECTED_VALUE'
    | 'SANDBOX_NOT_SUPPORTED'
    | 'INVALID_EMAIL_ADDRESS'
    | 'INVALID_PHONE_NUMBER'
    | 'CHECKOUT_EXPIRED'
    | 'BAD_CERTIFICATE'
    | 'INVALID_SQUARE_VERSION_FORMAT'
    | 'API_VERSION_INCOMPATIBLE'
    | 'CARD_DECLINED'
    | 'VERIFY_CVV_FAILURE'
    | 'VERIFY_AVS_FAILURE'
    | 'CARD_DECLINED_CALL_ISSUER'
    | 'NOT_FOUND'
    | 'APPLE_PAYMENT_PROCESSING_CERTIFICATE_HASH_NOT_FOUND'
    | 'METHOD_NOT_ALLOWED'
    | 'NOT_ACCEPTABLE'
    | 'REQUEST_TIMEOUT'
    | 'CONFLICT'
    | 'REQUEST_ENTITY_TOO_LARGE'
    | 'UNSUPPORTED_MEDIA_TYPE'
    | 'RATE_LIMITED'
    | 'NOT_IMPLEMENTED'
    | 'SERVICE_UNAVAILABLE'
    | 'GATEWAY_TIMEOUT';

export type ProductSourceType =
    | 'SQUARE_POS'
    | 'EXTERNAL_API'
    | 'BILLING'
    | 'APPOINTMENTS'
    | 'INVOICES'
    | 'ONLINE_STORE'
    | 'PAYROLL'
    | 'DASHBOARD'
    | 'ITEM_LIBRARY_IMPORT'
    | 'OTHER';

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
     * The first line of the address. Fields that start with `address_line` provide the address's most specific
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
    country?: CountryType;
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

/**
 * Reflects the current status of a balance payment.
 */
export class BalancePaymentDetails {
    /**
     * ID for the account used to fund the payment.
     */
    account_id?: string;
    /**
     * The balance payment’s current state. Can be `COMPLETED` or `FAILED`.
     */
    status?: string;
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
     * The IDs of the [CatalogObject](#type-catalogobject)s to be deleted. When an object is deleted, other objects in
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
     * [CatalogCategory](#type-catalogcategory), [CatalogTax](#type-catalogtax)es, [CatalogImage](#type-catalogimage)s
     * and [CatalogModifierList](#type-catalogmodifierlist)s will be returned in the `related_objects` field of the response.
     * If the `objects` field of the response contains a [CatalogItemVariation](#type-catalogitemvariation), its parent
     * [CatalogItem](#type-catalogitem) will be returned in the `related_objects` field of the response.
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
    types?: Array<InventoryType>;
    /**
     * Filters `ADJUSTMENT` query results by [InventoryState](#type-inventorystate). Only applied when set. Default: unset.
     */
    states?: Array<InventoryStateType>;
    /**
     * Provided as an RFC 3339 timestamp. Returns results whose `created_at` or `calculated_at` value is after the given time.
     * Default: UNIX epoch (`1970-01-01T00:00:00Z`).
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
     * Provided as an RFC 3339 timestamp. Returns results whose `calculated_at` value is after the given time.
     * Default: UNIX epoch (`1970-01-01T00:00:00Z`).
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
     * The requested orders. This will omit any requested orders that do not exist.
     */
    orders?: Array<Order>;
    /**
     * Any errors that occurred during the request.
     */
    errors?: Array<Error>;
}

export class BatchUpsertCatalogObjectsRequest {
    /**
     * A value you specify that uniquely identifies this request among all your requests. A common way to create a valid
     * idempotency key is to use a Universally unique identifier (UUID). If you're unsure whether a particular request
     * was successful, you can reattempt it with the same idempotency key without worrying about creating duplicate
     * objects. See [Idempotency](/basics/api101/idempotency) for more information.
     */
    idempotency_key: string;
    /**
     * A batch of [CatalogObject](#type-catalogobject)s to be inserted/updated atomically. The objects within a batch
     * will be inserted in an all-or-nothing fashion, i.e., if an error occurs attempting to insert or update an object
     * within a batch, the entire batch will be rejected. However, an error in one batch will not affect other batches
     * within the same request. For each object, its `updated_at` field is ignored and replaced with a current
     * [timestamp](#workingwithdates), and its `is_deleted` field must not be set to `true`. To modify an existing
     * object, supply its ID. To create a new object, use an ID starting with `#`. These IDs may be used to create
     * relationships between an object and attributes of other objects that reference it. For example, you can create a
     * [CatalogItem](#type-catalogitem) with ID `#ABC` and a [CatalogItemVariation](#type-catalogitemvariation) with its
     * `item_id` attribute set to `#ABC` in order to associate the [CatalogItemVariation](#type-catalogitemvariation)
     * with its parent [CatalogItem](#type-catalogitem). Any `#`-prefixed IDs are valid only within a single atomic
     * batch, and will be replaced by server-generated IDs. Each batch may contain up to 1,000 objects. The total
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
     * Used for resolving concurrency issues; request will fail if version provided does not match server version at time of request.
     * If a value is not provided, Square's servers execute a "blind" write; potentially overwriting another writer's data.
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
    day_of_week?: DayOfWeekType;
    /**
     * The start time of a business hours period, specified in local time using partial-time RFC3339 format.
     */
    start_local_time?: string;
    /**
     * The end time of a business hours period, specified in local time using partial-time RFC3339 format.
     */
    end_local_time?: string;
}

/**
 * Specifies idempotency key of a payment to cancel.
 */
export class CancelPaymentByIdempotencyKeyRequest {
    /**
     * `idempotency_key` identifying the payment to be canceled.
     */
    idempotency_key: string;
}

/**
 * Return value from the [CancelPaymentByIdempotencyKey](#endpoint-payments-cancelpaymentbyidempotencykey) endpoint.
 * On success, `errors` will be empty.
 */
export class CancelPaymentByIdempotencyKeyResponse {
    /**
     * Any errors that occurred during the request.
     */
    errors?: Array<Error>;
}

/**
 * Cancels a payment before it has been completed.
 * @note only payments created with `autocomplete` set to false can be canceled.
 */
export class CancelPaymentRequest {}

/**
 * Return value from the [CancelPayment](#endpoint-payments-cancelpayment) endpoint.
 */
export class CancelPaymentResponse {
    /**
     * Information on errors encountered during the request.
     */
    errors?: Array<Error>;
    /**
     * The successfully canceled `Payment` object.
     */
    payment?: Payment;
}

/**
 * Defines the query parameters for calls to the CaptureTransaction endpoint.
 */
export class CaptureTransactionRequest {}

/**
 * Defines the fields that are included in the response body of a request to the [CaptureTransaction](#endpoint-capturetransaction) endpoint.
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
    card_brand?: CardBrandType;
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
     * A unique, Square-assigned ID that identifies the card across multiple locations and applications for a single Square account.
     */
    fingerprint?: string;
}

/**
 * Indicates a card's brand, such as `VISA` or `MASTERCARD`.
 */
export class CardBrand {}

/**
 * Reflects the current status of a card payment.
 */
export class CardPaymentDetails {
    /**
     * The card payment's current state. It can be one of: `AUTHORIZED`, `CAPTURED`, `VOIDED`, `FAILED`.
     */
    status?: string;
    /**
     * The credit card's non-confidential details.
     */
    card?: Card;
    /**
     * The method used to enter the card's details for the payment. Can be `KEYED`, `SWIPED`, `EMV`, `ON_FILE`, or `CONTACTLESS`.
     */
    entry_method?: string;
    /**
     * Status code returned from the Card Verification Value (CVV) check.
     */
    cvv_status?: string;
    /**
     * Status code returned from the Address Verification System (AVS) check.
     */
    avs_status?: string;
    /**
     * Status code returned by the card issuer that describes the payment's authorization status.
     */
    auth_result_code?: string;
    /**
     * For EMV payments, identifies the EMV application used for the payment
     */
    application_identifier?: string;
    /**
     * For EMV payments, the human-readable name of the EMV application used for the payment.
     */
    application_name?: string;
    /**
     * For EMV payments, the cryptogram generated for the payment.
     */
    application_cryptogram?: string;
    /**
     * Information on errors encountered during the request.
     */
    errors?: Array<Error>;
}

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
    discount_type?: DiscountType;
    /**
     * The percentage of the discount as a string representation of a decimal number, using a `.` as the decimal
     * separator and without a `%` sign. A value of `7.5` corresponds to `7.5%`. Specify a percentage of `0` if
     * `discount_type` is `VARIABLE_PERCENTAGE`. Do not include this field for amount-based or variable discounts.
     */
    percentage?: string;
    /**
     * The amount of the discount. Specify an amount of `0` if `discount_type` is `VARIABLE_AMOUNT`.
     * Do not include this field for percentage-based or variable discounts.
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

export class CatalogInfoResponse {
    /**
     * The set of [Error](#type-error)s encountered.
     */
    errors?: Array<Error>;

    limits?: CatalogInfoResponseLimits;
    /**
     * Names and abbreviations for standard units.
     */
    standard_unit_description_group?: StandardUnitDescriptionGroup;
}

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
     * string are used. Searchable. This field has max length of 24 Unicode code points.
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
     * A list of [CatalogObject](#type-catalogobject)s containing the [CatalogItemVariation](#type-catalogitemvariation)s
     * for this item. Maximum: 250 item variations.
     */
    variations?: Array<CatalogObject>;
    /**
     * The product type of the item. May not be changed once an item has been created.
     * Only items of product type `REGULAR` or `APPOINTMENTS_SERVICE` may be created by this API; items with other product
     * types are read-only. See [CatalogItemProductType](#type-catalogitemproducttype) for possible values
     */
    product_type?: 'REGULAR' | 'GIFT_CARD' | 'APPOINTMENTS_SERVICE' | 'RETAIL_ITEM' | 'RESTAURANT_ITEM';
    /**
     * If `false`, the Square Point of Sale app will present the [CatalogItem](#type-catalogitem)'s details screen immediately,
     * allowing the merchant to choose [CatalogModifier](#type-catalogmodifier)s before adding the item to the cart.
     * This is the default behavior. If `true`, the Square Point of Sale app will immediately add the item to the cart
     * with the pre-selected modifiers, and merchants can edit modifiers by drilling down onto the item's details.
     * Third-party clients are encouraged to implement similar behaviors.
     */
    skip_modifier_screen?: boolean;
    /**
     * List of item options IDs for this item. Used to manage and group item variations in a specified order.
     * Maximum: 6 item options.
     */
    item_options?: Array<CatalogItemOptionForItem>;
}

/**
 * Controls the properties of a [CatalogModifierList](#type-catalogmodifierlist) as it applies to this [CatalogItem](#type-catalogitem).
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
 * A group of variations for a [CatalogItem](#type-catalogitem)'s.
 */
export class CatalogItemOption {
    /**
     * The item option's display name for the seller. Must be unique across all item options. Searchable.
     */
    name?: string;
    /**
     * The item option's display name for the customer. Searchable.
     */
    display_name?: string;
    /**
     * The item option's human-readable description. Displays for in the Square Point of Sale app for the seller
     * and in the Online Store or on receipts for the buyer.
     */
    description?: string;
    /**
     * If true, display colors for entries in `values` when present.
     */
    show_colors?: boolean;
    /**
     * A list of [CatalogObject](#type-catalogobject)s containing the [CatalogItemOptionValue](#type-catalogitemoptionvalue)s for this item.
     */
    values?: Array<CatalogObject>;
    /**
     * The number of [CatalogItem](#type-catalogitem)s currently associated with this item option.
     * Present only if the `include_counts` was specified in the request. Any count over 100 will be returned as `100`.
     */
    item_count?: number;
}

/**
 *  A list of item option values that can be assigned to item variations.
 *  For example, a t-shirt item may offer a color option or a size option.
 */
export class CatalogItemOptionForItem {
    /**
     * The unique id of the item option, used to form the dimensions of the item option matrix in a specified order.
     */
    item_option_id?: string;
}

/**
 * An enumerated value that can link a [CatalogItemVariation(#type-catalogitemvariation) to an item option as
 * one of its item option values.
 */
export class CatalogItemOptionValue {
    /**
     * Unique ID of the associated item option.
     */
    item_option_id?: string;
    /**
     * Name of this item option value. Searchable.
     */
    name?: string;
    /**
     * The option value's human-readable description.
     */
    description?: string;
    /**
     * The HTML color for this value in the format #FFRRGGBB or #RRGGBB (e.g., \"#ff8d4e85\").
     * Only displayed if parent Item Option's `show_colors` flag is enabled. value.
     */
    color?: string;
    /**
     * Determines where this option value appears in a list of option values.
     */
    ordinal?: number;
    /**
     * The number of [CatalogItemVariation(#type-catalogitemvariation)s that currently make use of this Item Option value.
     * Present only if `retrieve_counts` was specified on the request used to retrieve the parent Item Option of this value.
     * Maximum: 100 counts.
     */
    item_variation_count?: number;
}

/**
 * A [CatalogItemOptionValue](#type-catalogitemoptionvalue) links an item variation to an item option as an item option value.
 * For example, a t-shirt item may offer a color option and a size option. An item option value would represent each
 * variation of t-shirt: For example, “Color:Red, Size:Small” or “Color:Blue, Size:Medium”.
 */
export class CatalogItemOptionValueForItemVariation {
    /**
     * The unique id of an item option.
     */
    item_option_id?: string;
    /**
     * The unique id of the selected value for the item option.
     */
    item_option_value_id?: string;
}

/**
 * The type of a [CatalogItem](#type-catalogitem). Connect V2 only allows the creation of `REGULAR` or `APPOINTMENTS_SERVICE` items.
 */
export class CatalogItemProductType {}

/**
 * An item variation (i.e., product) in the Catalog object model. Each item may have a maximum of 250 item variations.
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
    pricing_type?: PricingType;
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
    inventory_alert_type?: InventoryAlertType;
    /**
     * If the inventory quantity for the variation is less than or equal to this value and `inventory_alert_type` is
     * `LOW_QUANTITY`, the variation displays an alert in the merchant dashboard. This value is always an integer.
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
    /**
     * List of item option values associated with this item variation. Listed in the same order as the item options of the parent item.
     */
    item_option_values?: Array<CatalogItemOptionValueForItemVariation>;
    /**
     * ID of the ‘CatalogMeasurementUnit’ that is used to measure the quantity sold of this item variation. If left unset, the item will be sold in whole quantities.
     */
    measurement_unit_id?: string;
}

/**
 * Represents the unit used to measure a [CatalogItemVariation](#type-catalogitemvariation) and specifies
 * the precision for decimal quantities.
 */
export class CatalogMeasurementUnit {
    /**
     * Indicates the unit used to measure the quantity of a catalog item variation.
     */
    measurement_unit?: MeasurementUnit;
    /**
     * Represents the maximum number of positions allowed after the decimal in quantities measured with this unit.
     * For example, if the precision is 2, then an itemization’s quantity can be 0.01, 0.12, etc. Min: 0, Max: 5, Default: 3.
     */
    precision?: number;
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
    selection_type?: 'SINGLE' | 'MULTIPLE';
    /**
     * The options included in the [CatalogModifierList](#type-catalogmodifierlist). You must include at least one
     * [CatalogModifier](#type-catalogmodifier). Each [CatalogObject](#type-catalogobject) must have type `MODIFIER` and
     * contain [CatalogModifier](#type-catalogmodifier) data.
     */
    modifiers?: Array<CatalogObject>;
}

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
 * For a more detailed discussion of the Catalog data model, please see the [Design a Catalog](/catalog-api/design-a-catalog) guide.
 */
export class CatalogObject {
    /**
     * The type of this object. Each object type has expected properties expressed in a structured format within its
     * corresponding `*_data` field below. See [CatalogObjectType](#type-catalogobjecttype) for possible values.
     */
    type: ObjectType;
    /**
     * An identifier to reference this object in the catalog. When a new CatalogObject is inserted, the client should
     * set the id to a temporary identifier starting with a `'#'` character. Other objects being inserted or updated
     * within the same request may use this identifier to refer to the new object. When the server receives the new
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
     * Structured data for a [CatalogTimePeriod](#type-catalogtimeperiod), set for CatalogObjects of type `TIME_PERIOD`.
     */
    time_period_data?: CatalogTimePeriod;
    /**
     * Structured data for a [CatalogProductSet](#type-catalogproductset), set for CatalogObjects of type `PRODUCT_SET`.
     */
    product_set_data?: CatalogProductSet;
    /**
     * Structured data for a [CatalogPricingRule](#type-catalogpricingrule), set for CatalogObjects of type `PRICING_RULE`.
     */
    pricing_rule_data?: CatalogPricingRule;
    /**
     * Structured data for a [CatalogImage](#type-catalogimage), set for CatalogObjects of type `IMAGE`.
     */
    image_data?: CatalogImage;
    /**
     * Structured data for a [CatalogMeasurementUnit](#type-catalogmeasurementunit), set for CatalogObjects of type `MEASUREMENT_UNIT`.
     */
    measurement_unit_data?: CatalogMeasurementUnit;
    /**
     * Structured data for a [CatalogItemOption](#type-catalogitemoption), set for CatalogObjects of type `ITEM_OPTION`.
     */
    item_option_data?: CatalogItemOption;
    /**
     * Structured data for a [CatalogItemOptionValue](#type-catalogitemoptionvalue), set for CatalogObjects of type `ITEM_OPTION_VAL`.
     */
    item_option_value_data?: CatalogItemOptionValue;
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
 * Defines how prices are modified or set for items that match the pricing rule during the active time period.
 */
export class CatalogPricingRule {
    /**
     * User-defined name for the pricing rule. For example, "Buy one get one free" or "10% off".
     */
    name?: string;
    /**
     * Unique ID for the [CatalogTimePeriod](#type-catalogtimeperiod)s when this pricing rule is in effect.
     * If left unset, the pricing rule is always in effect.
     */
    time_period_ids?: Array<string>;
    /**
     * Unique ID for the [CatalogDiscount](#type-catalogdiscount) to take off the price of all matched items.
     * Only one of `total_price_money`, `item_price`, or `discount` can be supplied.
     */
    discount_id?: string;
    /**
     * Unique ID for the [CatalogProductSet](#type-catalogproductset) that will be matched by this rule.
     * A match rule matches within the entire cart.
     */
    match_products_id?: string;
    /**
     * The [CatalogProductSet](#type-catalogproductset) to apply the pricing rule to within the set of matched products
     * specified by `match_products_id`. An apply rule can only match once within the set of matched products.
     * If left unset, the pricing rule will be applied to all products within the set of matched products.
     */
    apply_products_id?: string;
    /**
     * Identifies the [CatalogProductSet](#type-catalogproductset) to exclude from this pricing rule.
     * An exclude rule matches within the subset of the cart that fits the match rules (the match set).
     * An exclude rule can only match once in the match set. If not supplied, the pricing will be applied to all products
     * in the match set. Other products retain their base price, or a price generated by other rules.
     */
    exclude_products_id?: string;
    /**
     * Represents the date the Pricing Rule is valid from. Represented in RFC3339 full-date format (YYYY-MM-DD).
     */
    valid_from_date?: string;
    /**
     * Represents the local time the pricing rule should be valid from. Time zone is determined by the device running the
     * Point of Sale app. Represented in RFC3339 partial-time format (HH:MM:SS). Partial seconds will be truncated.
     */
    valid_from_local_time?: string;
    /**
     * Represents the date the pricing rule will become inactive. Represented in RFC3339 full-date format (YYYY-MM-DD).
     */
    valid_until_date?: string;
    /**
     * Represents the local time at which the pricing rule will become inactive. Time zone is determined by the device running the
     * Point of Sale app. Represented in RFC3339 partial-time format (HH:MM:SS). Partial seconds will be truncated.
     */
    valid_until_local_time?: string;
}

/**
 * Indicates whether the price of a [CatalogItemVariation](#type-catalogitemvariation) should be entered manually at the
 * time of sale.
 */
export class CatalogPricingType {}

/**
 * Represents a collection of catalog objects for the purpose of applying a [PricingRule](#type-pricingrule).
 * Including a catalog object will include all of its subtypes. For example, including a category in a product set will
 * include all of its items and associated item variations in the product set.
 * Including an item in a product set will also include its item variations.
 */
export class CatalogProductSet {
    /**
     * User-defined name for the product set. For example, "Clearance Items" or "Winter Sale Items".
     */
    name?: string;
    /**
     * Unique IDs for any [CatalogObjects](#type-catalogobject)s to include in this product set.
     * Any number of these catalog objects can be in an order for a pricing rule to apply.
     * This can be used with `product_ids_all` in a parent [CatalogProductSet](#type-catalogproductset) to match
     * groups of products for a bulk discount, such as a discount for an entree and side combo.
     * Only one of `product_ids_all`, `product_ids_any`, or `all_products` can be set. Max: 500 catalog object IDs.
     */
    product_ids_any?: Array<string>;
    /**
     * Unique IDs for [CatalogObjects](#type-catalogobject) to include in this product set.
     * All objects in this set must be included in an order for a pricing rule to apply.
     * Only one of `product_ids_all`, `product_ids_any`, or `all_products` can be set. Max: 500 catalog object IDs.
     */
    product_ids_all?: Array<string>;
    /**
     * If set, there must be exactly this many items from `products_any` or `products_all` in the cart for the discount to apply.
     * Cannot be combined with either `quantity_min` or `quantity_max`.
     */
    quantity_exact?: number;
    /**
     * If set, there must be at least this many items from `products_any` or `products_all` in a cart for the discount to apply.
     * See `quantity_exact`. Defaults to 0 if `quantity_exact`, `quantity_min` and `quantity_max` are all unspecified.
     */
    quantity_min?: number;
    /**
     * If set, the pricing rule will apply to a maximum of this many items from `products_any` or `products_all`.
     */
    quantity_max?: number;
    /**
     * If set to `true`, the product set will include every item in the catalog.
     * Only one of `product_ids_all`, `product_ids_any`, or `all_products` can be set.
     */
    all_products?: boolean;
}

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
    /**
     * A query that returns all [CatalogItem](#type-catalogitem)s that have all of the given
     * [CatalogItemOption](#type-catalogitemoption)s.
     */
    items_for_item_options_query?: CatalogQueryItemsForItemOptions;
    /**
     * A query that returns all [CatalogItemVariation](#type-catalogitemvariations)s that have all of the given
     * [CatalogItemOption](#type-catalogitemoption) values.
     */
    item_variations_for_item_option_values_query?: CatalogQueryItemVariationsForItemOptionValues;
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

export class CatalogQueryItemVariationsForItemOptionValues {
    /**
     * A set of [CatalogItemOptionValue](#type-catalogitemoptionvalue) IDs to be used to find associated
     * [CatalogItemVariation](#type-catalogitemvariation)s. All ItemVariations that contain all of the given
     * Item Option Values (in any order) will be returned.
     */
    item_option_value_ids?: Array<string>;
}

export class CatalogQueryItemsForItemOptions {
    /**
     * A set of [CatalogItemOption](#type-catalogitemoption) IDs to be used to find associated [CatalogItem](#type-catalogitem)s.
     * All Items that contain all of the given Item Options (in any order) will be returned.
     */
    item_option_ids?: Array<string>;
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
    sort_order?: SortOrderType;
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
    calculation_phase?: 'TAX_SUBTOTAL_PHASE' | 'TAX_TOTAL_PHASE';
    /**
     * Whether the tax is `ADDITIVE` or `INCLUSIVE`. See [TaxInclusionType](#type-taxinclusiontype) for possible values.
     */
    inclusion_type?: TaxType;
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

/**
 * Represents a time period - either a single period or a repeating period.
 */
export class CatalogTimePeriod {
    /**
     * An iCalendar (RFC5545) [event](https://tools.ietf.org/html/rfc5545#section-3.6.1), which specifies the name,
     * timing, duration and recurrence of this time period.
     * Example: `DTSTART:20190707T180000 DURATION:P2H RRULE:FREQ=WEEKLY;BYDAY=MO,WE,FR`
     * Only `SUMMARY`, `DTSTART`, `DURATION` and `RRULE` fields are supported.
     * `DTSTART` must be in local (unzoned) time format. Note that while `BEGIN:VEVENT` and `END:VEVENT`
     * is not required in the request. The response will always include them.
     */
    event?: string;
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
 * Defines the parameters that can be included in the body of a request to the [Charge](#endpoint-charge) endpoint.
 * @deprecated recommend using [CreatePayment](#endpoint-payments-createpayment)
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
     * split from here. If you provide this value, the `amount_money` value in your additional_recipients must not be
     * more than 90% of the `amount_money` value in the charge request. The `location_id` must be the valid location of
     * the app owner merchant. This field requires the `PAYMENTS_WRITE_ADDITIONAL_RECIPIENTS` OAuth permission.
     * This field is currently not supported in sandbox.
     */
    additional_recipients?: Array<AdditionalRecipient>;
    /**
     * An identifying token generated by `SqPaymentForm.verifyBuyer()`. Verification tokens encapsulate customer device
     * information and 3-D Secure challenge results to indicate that Square has verified the buyer identity.
     */
    verification_token?: string;
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
 * Defines the fields that are included in the response body of a request to the [Charge](#endpoint-charge) endpoint.
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
     * use to contact the merchant. If this value is not set, the confirmation page and email will display the primary
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
 * Completes a payment. By default, payments are set to autocomplete immediately after they are created.
 * To complete payments manually, set `autocomplete` to false.
 */
export class CompletePaymentRequest {}

/**
 * Return value from a [CompletePayment](#endpoint-payments-completepayment) call.
 */
export class CompletePaymentResponse {
    /**
     * Information on errors encountered during the request
     */
    errors?: Array<Error>;
    /**
     * The successfully completed `Payment`.
     */
    payment?: Payment;
}

/**
 * Latitude and longitude coordinates.
 */
export class Coordinates {
    /**
     * The coordinate's latitude expressed in degrees.
     */
    latitude?: number;
    /**
     * The coordinate's longitude expressed in degrees.
     */
    longitude?: number;
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
     * transaction information in your Square Dashboard. Default: `false`.
     */
    ask_for_shipping_address?: boolean;
    /**
     * The email address to display on the Square Checkout confirmation page and confirmation email that the buyer can
     * use to contact the merchant. If this value is not set, the confirmation page and email will display the primary
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
     * See [Embedding the payment form](/payment-form/payment-form-walkthrough) for more information.
     * @note Card nonces generated by digital wallets (e.g., Apple Pay) cannot be used to create a customer card.
     */
    card_nonce: string;
    /**
     * Address information for the card on file. Only the `postal_code` field is required for payments in the US and Canada.
     */
    billing_address?: Address;
    /**
     * The full name printed on the credit card.
     */
    cardholder_name?: string;
    /**
     * An identifying token generated by `SqPaymentForm.verifyBuyer()`. Verification tokens encapsulate customer device
     * information and 3-D Secure challenge results to indicate that Square has verified the buyer identity.
     */
    verification_token?: string;
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
     * A value you specify that uniquely identifies this order among orders you've created. If you're unsure whether a
     * particular order was created successfully, you can reattempt it with the same idempotency key without worrying
     * about creating duplicate orders. See [Idempotency](/basics/api101/idempotency) for more information.
     */
    idempotency_key?: string;
    /**
     * @deprecated Please set the reference_id on the nested [order](#type-order) field instead. An optional ID you can
     * associate with the order for your own purposes (such as to associate the order with an entity ID in your own database).
     * This value cannot exceed 40 characters.
     */
    reference_id?: string;
    /**
     * @deprecated Please set the line_items on the nested [order](#type-order) field instead. The line items to
     * associate with this order. Each line item represents a different product to include in a purchase.
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
 * [CreateOrderRequest](#type-createorderrequest) instead. Represents a line item to include in an order. Each line
 * item describes a different product to purchase, with its own quantity and price details. Line items can either
 * reference objects from the merchant's catalog, or can alternatively specify a name and price instead.
 */
export class CreateOrderRequestLineItem {
    /**
     * Only used for ad hoc line items. The name of the line item. This value cannot exceed 500 characters.
     * Do not provide a value for this field if you provide a value for `catalog_object_id`.
     */
    name?: string;
    /**
     * The quantity to purchase, as a string representation of a number.
     * This string must have a positive integer value.
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
     * If this value is not set for an ad hoc line item, the default value of `Regular` is used.
     * Do not provide a value for this field if you provide a value for the `catalog_object_id`.
     */
    variation_name?: string;
    /**
     * The note of the line item. This value cannot exceed 500 characters.
     */
    note?: string;
    /**
     * Only used for Catalog line items. The catalog object ID for an existing [CatalogItemVariation](#type-catalogitemvariation).
     * Do not provide a value for this field if you provide a value for `name` and `base_price_money`.
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
 * @deprecated Please use the [OrderLineItemModifier](#type-orderlineitemmodifier) type instead. Represents a
 * modifier applied to a single line item. Modifiers can reference existing objects in a merchant catalog or be
 * constructed ad hoc at the time of purchase by providing a name and price.
 */
export class CreateOrderRequestModifier {
    /**
     * The catalog object ID of a [CatalogModifier](#type-catalogmodifier).
     */
    catalog_object_id?: string;
    /**
     * Only used for ad hoc modifiers. The name of the modifier. `name` cannot exceed 255 characters. Do not provide a
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
    type?: TaxType;
    /**
     * Only used for ad hoc taxes. The percentage of the tax, as a string representation of a decimal number.
     * A value of `7.25` corresponds to a percentage of 7.25%. This value range between 0.0 up to 100.0.
     */
    percentage?: string;
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
 * Creates a payment from the source (nonce, card on file, etc.).
 * The `PAYMENTS_WRITE_ADDITIONAL_RECIPIENTS` OAuth permission is required to enable application fees.
 * For more information, see [Payments and Refunds Overview](/payments-api/overview).
 * For information about application fees in a payment, see [Collect Fees](/payments-api/take-payments-and-collect-fees).
 */
export class CreatePaymentRequest {
    /**
     * The ID for the source of funds for this payment.
     * This can be a nonce generated by the Payment Form or a card on file made with the Customers API.
     */
    source_id: string;
    /**
     * A unique string that identifies this CreatePayment request.
     * Keys can be any valid string but must be unique for every CreatePayment request.
     * Max: 45 characters  See [Idempotency keys](/basics/api101/idempotency) for more information.
     */
    idempotency_key: string;
    /**
     * The amount of money to accept for this payment, not including `tip_money`.
     * Must be specified in the smallest denomination of the applicable currency. For example, US dollar amounts are
     * specified in cents. See [Working with monetary amounts](/build-basics/working-with-monetary-amounts) for details.
     * The currency code must match the currency associated with the business that is accepting the payment.
     */
    amount_money: Money;
    /**
     * The amount designated as a tip, in addition to `amount_money`.
     * Must be specified in the smallest denomination of the applicable currency. For example, US dollar amounts are
     * specified in cents. See [Working with monetary amounts](/build-basics/working-with-monetary-amounts) for details.
     * The currency code must match the currency associated with the business that is accepting the payment.
     */
    tip_money?: Money;
    /**
     * The amount of money the developer is taking as a fee for facilitating the payment on behalf of the seller.
     * Cannot be more than 90% of the total amount of the Payment. Must be specified in the smallest denomination of
     * the applicable currency. For example, US dollar amounts are specified in cents.
     * See [Working with monetary amounts](/build-basics/working-with-monetary-amounts) for details.
     * The currency code must match the currency associated with the business that is accepting the payment.
     * For more information about the application fee scenario, see [Collect Fees](/payments-api/take-payments-and-collect-fees).
     */
    app_fee_money?: Money;
    /**
     * If set to `true`, this payment will be completed when possible.
     * If set to `false`, this payment will be held in an approved state until either explicitly completed or canceled.
     * For more information, see [Delayed Payments](/payments-api/take-payments#delayed-payments). Default: true.
     */
    autocomplete?: boolean;
    /**
     * Associate a previously created order with this payment.
     */
    order_id?: string;
    /**
     * The ID of the customer associated with the payment.
     * Required if the `source_id` refers to a card on file created using the Customers API.
     */
    customer_id?: string;
    /**
     * The location ID to associate with the payment. If not specified, the default location is used.
     */
    location_id?: string;
    /**
     * A user-defined ID to associate with the payment. You can use this field to associate the payment to an entity
     * in an external system. For example, you might specify an order ID that is generated by a third-party shopping cart.
     * Limit 40 characters.
     */
    reference_id?: string;
    /**
     * An identifying token generated by `SqPaymentForm.verifyBuyer()`.
     * Verification tokens encapsulate customer device information and 3-D Secure challenge results to indicate that
     * Square has verified the buyer identity. See the [SCA Overview](/sca-overview) for more.
     */
    verification_token?: string;
    /**
     * If set to true and charging a Square Gift Card, a payment may be returned with amount_money equal to less than
     * what was requested. Example, a request for $20 when charging a Square Gift Card with balance of $5 wil result
     * in an APPROVED payment of $5. You may choose to prompt the buyer for an additional payment to cover the remainder,
     * or cancel the gift card payment. Cannot be `true` when `autocomplete = true  For more information,
     * see [Partial amount with Square gift cards](/payments-api/take-payments#partial-payment-gift-card). Default: false.
     */
    accept_partial_authorization?: boolean;
    /**
     * The buyer's e-mail address
     */
    buyer_email_address?: string;
    /**
     * The buyer's billing address.
     */
    billing_address?: Address;
    /**
     * The buyer's shipping address.
     */
    shipping_address?: Address;
    /**
     * An optional note to be entered by the developer when creating a payment.
     * Limit 500 characters.
     */
    note?: string;
}

/**
 * Defines the fields that are included in the response body of a request to the
 * [CreatePayment](#endpoint-payments-createpayment) endpoint.
 * @note if there are errors processing the request, the payment field may not be present, or it may be present with a status of `FAILED`.
 */
export class CreatePaymentResponse {
    /**
     * Information on errors encountered during the request.
     */
    errors?: Array<Error>;
    /**
     * The newly created payment.
     */
    payment?: Payment;
}

/**
 * Defines the body parameters that can be included in a request to the [CreateRefund](#endpoint-createrefund) endpoint.
 * @deprecated recommend using [RefundPayment](#endpoint-refunds-refundpayment)
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
 * Defines the fields that are included in the response body of a request to the [CreateRefund](#endpoint-createrefund) endpoint.
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
    creation_source?: CustomerSourceType;
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
    values?: Array<CustomerSourceType>;
    /**
     * Indicates whether a customer profile matching the filter criteria should be included in the result or excluded
     * from the result. Default: `INCLUDE`.
     * See [CustomerInclusionExclusion](#type-customerinclusionexclusion) for possible values.
     */
    rule?: 'INCLUDE' | 'EXCLUDE';
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
 * Indicates the field to use for sorting customer profiles.
 * For example, by total money spent with the merchant or the date of their first purchase.
 */
export class CustomerSort {
    /**
     * The field to sort the results on. It could be the total money spent at the merchant, the date of the first visit (etc).
     * See [CustomerSortField](#type-customersortfield) for possible values.
     */
    field?: string;
    /**
     * Indicates the order in which results should be displayed based on the value of the sort field.
     * String comparisons use standard alphabetic comparison to determine order.
     * Strings representing numbers are sorted as strings. See [SortOrder](#type-sortorder) for possible values.
     */
    order?: SortOrderType;
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
    status?: ActivityStatusType;
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
 * Indicates the specific error that occurred during a request to a Square API.
 */
export class ErrorCode {}

/**
 * A request to GET a `BreakType` by ID.
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
 * Retrieves a specific `Refund` using the `refund_id`.
 */
export class GetPaymentRefundRequest {}

/**
 * Defines the fields that are included in the response body of a request to the
 * [GetRefund](#endpoint-refunds-getpaymentrefund) endpoint.
 * @note if there are errors processing the request, the refund field may not be present, or it may be present in a FAILED state.
 */
export class GetPaymentRefundResponse {
    /**
     * Information on errors encountered during the request.
     */
    errors?: Array<Error>;
    /**
     * The requested `PaymentRefund`.
     */
    refund?: PaymentRefund;
}

/**
 * Retrieve details for a specific Payment.
 */
export class GetPaymentRequest {}

/**
 * Defines the fields that are included in the response body of a request to the
 * [GetPayment](#endpoint-payments-getpayment) endpoint.
 */
export class GetPaymentResponse {
    /**
     * Information on errors encountered during the request.
     */
    errors?: Array<Error>;
    /**
     * The requested `Payment`.
     */
    payment?: Payment;
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
    from_state?: InventoryStateType;
    /**
     * The [InventoryState](#type-inventorystate) of the related quantity of items after the adjustment.
     * See [InventoryState](#type-inventorystate) for possible values.
     */
    to_state?: InventoryStateType;
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
     * @note: The Point of Sale app and Dashboard do not currently support decimal quantities. If a Point of Sale app or
     * Dashboard attempts to read a decimal quantity on inventory counts or adjustments, the quantity will be rounded
     * down to the nearest integer. For example, `2.5` will become `2`, and `-2.5` will become `-3`.
     * Read [Decimal Quantities (BETA)](/orders-api/what-it-does#decimal-quantities) for more information.
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

/**
 * Represents a single physical count, inventory, adjustment, or transfer that is part of the history of inventory
 * changes for a particular [CatalogObject](#type-catalogobject).
 */
export class InventoryChange {
    /**
     * Indicates how the inventory change was applied.
     * See [InventoryChangeType](#type-inventorychangetype) for possible values.
     */
    type?: InventoryType;
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
    state?: InventoryStateType;
    /**
     * The Square ID of the [Location](#type-location) where the related quantity of items are being tracked.
     */
    location_id?: string;
    /**
     * The number of items in the count as a decimal string. Can support up to 5 digits after the decimal point.
     * @note The Point of Sale app and Dashboard do not currently support decimal quantities. If a Point of Sale app or
     * Dashboard attempts to read a decimal quantity on inventory counts or adjustments, the quantity will be rounded
     * down to the nearest integer. For example, `2.5` will become `2`, and `-2.5` will become `-3`.
     * Read [Decimal Quantities (BETA)](/orders-api/what-it-does#decimal-quantities) for more information.
     */
    quantity?: string;
    /**
     * A read-only timestamp in RFC 3339 format that indicates when Square received the most recent physical count or
     * adjustment that had an affect on the estimated count.
     */
    calculated_at?: string;
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
    state?: InventoryStateType;
    /**
     * The Square ID of the [Location](#type-location) where the related quantity of items are being tracked.
     */
    location_id?: string;
    /**
     * The number of items affected by the physical count as a decimal string. Can support up to 5 digits after the decimal point.
     * @note The Point of Sale app and Dashboard do not currently support decimal quantities. If a Point of Sale app or
     * Dashboard attempts to read a decimal quantity on inventory counts or adjustments, the quantity will be rounded down
     * to the nearest integer. For example, `2.5` will become `2`, and `-2.5` will become `-3`.
     * Read [Decimal Quantities (BETA)](/orders-api/what-it-does#decimal-quantities) for more information.
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
    state?: InventoryStateType;
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
     * @note The Point of Sale app and Dashboard do not currently support decimal quantities. If a Point of Sale app or
     * Dashboard attempts to read a decimal quantity on inventory counts or adjustments, the quantity will be rounded down
     * to the nearest integer. For example, `2.5` will become `2`, and `-2.5` will become `-3`.
     * Read [Decimal Quantities (BETA)](/orders-api/what-it-does#decimal-quantities) for more information.
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
    pricing_type?: PricingType;
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
    inventory_alert_type?: InventoryAlertType;
    /**
     * If the inventory quantity for the variation is less than or equal to this value and `inventory_alert_type` is
     * `LOW_QUANTITY`, the variation displays an alert in the merchant dashboard. This value is always an integer.
     */
    inventory_alert_threshold?: number;
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
    sort_order?: SortOrderType;
    /**
     * A pagination cursor returned by a previous call to this endpoint. Provide this to retrieve the next set of
     * results for your original query. See [Pagination](/basics/api101/pagination) for more information.
     */
    cursor?: string;
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
    sort_order?: SortOrderType;
    /**
     * A pagination cursor returned by a previous call to this endpoint. Provide this to retrieve the next set of
     * results for your original query. See [Pagination](/basics/api101/pagination) for more information.
     */
    cursor?: string;
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
    sort_field?: string;
    /**
     * Indicates whether Customers should be sorted in ascending (`ASC`) or descending (`DESC`) order. Default: `ASC`.
     * See [SortOrder](#type-sortorder) for possible values.
     */
    sort_order?: SortOrderType;
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
    status?: ActivityStatusType;
    /**
     * The number of employees to be returned on each page.
     */
    limit?: number;
    /**
     * The token required to retrieve the specified page of results.
     */
    cursor?: string;
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
 * Retrieves a list of refunds for the account making the request. Max results per page: 100
 */
export class ListPaymentRefundsRequest {
    /**
     * Timestamp for the beginning of the requested reporting period, in RFC 3339 format.
     * Default: The current time minus one year.
     */
    begin_time?: string;
    /**
     * Timestamp for the end of the requested reporting period, in RFC 3339 format. Default: The current time.
     */
    end_time?: string;
    /**
     * The order in which results are listed. - `ASC` - oldest to newest - `DESC` - newest to oldest (default).
     */
    sort_order?: SortOrderType;
    /**
     * A pagination cursor returned by a previous call to this endpoint.
     * Provide this to retrieve the next set of results for the original query.
     * See [Pagination](/basics/api101/pagination) for more information.
     */
    cursor?: string;
    /**
     * ID of location associated with payment.
     */
    location_id?: string;
    /**
     * If provided, only refunds with the given status are returned. For a list of refund status values, see [PaymentRefund](#type-paymentrefund).
     * Default: If omitted refunds are returned regardless of status.
     */
    status?: string;
    /**
     * If provided, only refunds with the given source type are returned.
     * - `CARD` - List refunds only for payments where card was specified as payment source.
     * Default: If omitted refunds are returned regardless of source type.
     */
    source_type?: string;
}

/**
 * Defines the fields that are included in the response body of a request to the [ListPaymentRefunds](#endpoint-refunds-listpaymentrefunds) endpoint.
 * One of `errors` or `refunds` is present in a given response (never both).
 */
export class ListPaymentRefundsResponse {
    /**
     * Information on errors encountered during the request.
     */
    errors?: Array<Error>;
    /**
     * The list of requested refunds.
     */
    refunds?: Array<PaymentRefund>;
    /**
     * The pagination cursor to be used in a subsequent request. If empty, this is the final response.
     * See [Pagination](/basics/api101/pagination) for more information.
     */
    cursor?: string;
}

/**
 * Retrieves a list of refunds taken by the account making the request. Max results per page: 100.
 */
export class ListPaymentsRequest {
    /**
     * Timestamp for the beginning of the reporting period, in RFC 3339 format. Inclusive.
     * Default: The current time minus one year.
     */
    begin_time?: string;
    /**
     * Timestamp for the end of the requested reporting period, in RFC 3339 format. Default: The current time.
     */
    end_time?: string;
    /**
     * The order in which results are listed. - `ASC` - oldest to newest - `DESC` - newest to oldest (default).
     */
    sort_order?: string;
    /**
     * A pagination cursor returned by a previous call to this endpoint.
     * Provide this to retrieve the next set of results for the original query.
     * See [Pagination](/basics/api101/pagination) for more information.
     */
    cursor?: string;
    /**
     * ID of location associated with payment.
     */
    location_id?: string;
    /**
     * The exact amount in the total_money for a `Payment`.
     */
    total?: number;
    /**
     * The last 4 digits of `Payment` card.
     */
    last_4?: string;
    /**
     * The brand of `Payment` card. For example, `VISA`.
     */
    card_brand?: CardBrandType;
}

/**
 * Defines the fields that are included in the response body of a request to the [ListPayments](#endpoint-payments-listpayments) endpoint.
 */
export class ListPaymentsResponse {
    /**
     * Information on errors encountered during the request.
     */
    errors?: Array<Error>;
    /**
     * The requested list of `Payment`s.
     */
    payments?: Array<Payment>;
    /**
     * The pagination cursor to be used in a subsequent request. If empty, this is the final response.
     * See [Pagination](/basics/api101/pagination) for more information.
     */
    cursor?: string;
}

/**
 * Defines the query parameters that can be included in a request to the ListRefunds endpoint.
 */
export class ListRefundsRequest {
    /**
     * The beginning of the requested reporting period, in RFC 3339 format.
     * See [Date ranges](#dateranges) for details on date inclusivity/exclusivity.
     * Default value: The current time minus one year.
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
    sort_order?: SortOrderType;
    /**
     * A pagination cursor returned by a previous call to this endpoint. Provide this to retrieve the next set of
     * results for your original query. See [Pagination](/basics/api101/pagination) for more information.
     */
    cursor?: string;
}

/**
 * Defines the fields that are included in the response body of a request to the [ListRefunds](#endpoint-listrefunds) endpoint.
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
 * Defines the query parameters that can be included in a request to the [ListTransactions](#endpoint-listtransactions) endpoint.
 * @deprecated recommend using [SearchOrders](#endpoint-orders-searchorders).
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
    sort_order?: SortOrderType;
    /**
     * A pagination cursor returned by a previous call to this endpoint. Provide this to retrieve the next set of
     * results for your original query. See [Pagination](/basics/api101/pagination) for more information.
     */
    cursor?: string;
}

/**
 * Defines the fields that are included in the response body of a request to the [ListTransactions](#endpoint-listtransactions) endpoint.
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
    capabilities?: Array<'CREDIT_CARD_PROCESSING'>;
    /**
     * The location's status. See [LocationStatus](#type-locationstatus) for possible values.
     */
    status?: ActivityStatusType;
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
    country?: CountryType;
    /**
     * The language associated with the location in [BCP 47 format](https://tools.ietf.org/html/bcp47#appendix-A).
     */
    language_code?: string;
    /**
     * The currency used for all transactions at this location, specified in __ISO 4217 format__.
     * For example, the currency for a location processing transactions in the United States is 'USD'.
     * See [Currency](#type-currency) for possible values.
     */
    currency?: CurrencyType;
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
    type?: 'PHYSICAL' | 'MOBILE';
    /**
     * The location's website, as set by the account owner in the Square dashboard.
     * Default: none; only exists if explicitly set.
     */
    website_url?: string;
    /**
     * The hours of operation for a business location. Default: none; only exists if explicitly set.
     */
    business_hours?: BusinessHours;
    /**
     * The email of the location.
     */
    business_email?: string;
    /**
     * The business description of the location.
     */
    description?: string;
    /**
     * The Twitter username of the location without the '
     */
    twitter_username?: string;
    /**
     * The Instagram username of the location without the '
     */
    instagram_username?: string;
    /**
     * The Facebook profile URL of the location. The URL should begin with 'facebook.com/'.
     */
    facebook_url?: string;
    /**
     * The physical coordinates (latitude and longitude) of the location.
     */
    coordinates?: Coordinates;
    /**
     * The logo image URL of the location.
     */
    logo_url?: string;
    /**
     * The Point of Sale background image URL of the location.
     */
    pos_background_url?: string;
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
    area_unit?: AreaUnitType;
    /**
     * Represents a standard length unit. See [MeasurementUnitLength](#type-measurementunitlength) for possible values.
     */
    length_unit?: LengthUnitType;
    /**
     * Represents a standard volume unit. See [MeasurementUnitVolume](#type-measurementunitvolume) for possible values.
     */
    volume_unit?: VolumeUnitType;
    /**
     * Represents a standard unit of weight or mass. See [MeasurementUnitWeight](#type-measurementunitweight) for possible values.
     */
    weight_unit?: WeightUnitType;
    /**
     * Reserved for API integrations that lack the ability to specify a real measurement unit.
     * See [MeasurementUnitGeneric](#type-measurementunitgeneric) for possible values.
     */
    generic_unit?: string;
    /**
     * Represents the type of the measurement unit.
     * See [MeasurementUnitUnitType](#type-measurementunitunittype) for possible values.
     */
    type?: string;
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
 * A custom unit of measurement defined by the user.
 */
export class MeasurementUnitGeneric {}

/**
 * The unit of length used to measure a quantity.
 */
export class MeasurementUnitLength {}

/**
 * Describes the type of this unit and indicates which field contains the unit information. This is an ‘open’ enum.
 */
export class MeasurementUnitUnitType {}

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
     * The high-level category for the error.
     * See [ErrorCategory](#type-errorcategory) See [ErrorCategory](#type-errorcategory) for possible values.
     */
    category: ErrorCategoryType;
    /**
     * The specific code of the error.
     * See [ErrorCode](#type-errorcode) for possible See [ErrorCode](#type-errorcode) for possible values.
     */
    code: ErrorCodeType;
    /**
     * A human-readable description of the error for debugging purposes.
     */
    detail?: string;
    /**
     * The name of the field provided in the original request (if any) that the error pertains to.
     */
    field?: string;
}

/**
 * Represents an amount of money. `Money` fields can be signed or unsigned.
 */
export class Money {
    /**
     * The amount of money, in the smallest denomination of the currency indicated by `currency`.
     * For example, when `currency` is `USD`, `amount` is in cents. Monetary amounts can be positive or negative.
     * See the specific API documentation to determine the meaning of the sign in a particular case.
     */
    amount: number;
    /**
     * The type of currency, in __ISO 4217 format__. For example, the currency code for US dollars is `USD`.
     * See [Currency](#type-currency) for possible values. See [Currency](#type-currency) for possible values
     */
    currency: CurrencyType;
}

export class ObtainTokenRequest {
    /**
     * The Square-issued ID of your application, available from the [application dashboard](https://connect.squareup.com/apps).
     */
    client_id?: string;
    /**
     * The Square-issued application secret for your application, available from the
     * [application dashboard](https://connect.squareup.com/apps).
     */
    client_secret?: string;
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
    grant_type?: string;
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
     * @deprecated The ID of the subscription plan the merchant signed up for.
     * Only present if the merchant signed up for a subscription during authorization.
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
     * The order's unique ID.
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
     * The list of all taxes associated with the order. Taxes can be scoped to either `ORDER` or `LINE_ITEM`.
     * For taxes with `LINE_ITEM` scope, an `OrderLineItemAppliedTax` must be added to each line item that the tax applies to.
     * For taxes with `ORDER` scope, the server will generate an `OrderLineItemAppliedTax` for every line item.
     * On reads, each tax in the list will include the total amount of that tax applied to the order.
     * @note If `LINE_ITEM` scope is set on any taxes in this field, usage of the deprecated `line_items.taxes`
     * field will result in an error. Please use `line_items.applied_taxes` instead.
     */
    taxes?: Array<OrderLineItemTax>;
    /**
     * The list of all discounts associated with the order. Discounts can be scoped to either `ORDER` or `LINE_ITEM`.
     * For discounts scoped to `LINE_ITEM`, an `OrderLineItemAppliedDiscount` must be added to each line item that the
     * discount applies to. For discounts with `ORDER` scope, the server will generate an `OrderLineItemAppliedDiscount`
     * for every line item.
     * @note If `LINE_ITEM` scope is set on any discounts in this field, usage of the deprecated `line_items.discounts`
     * field will result in an error. Please use `line_items.applied_discounts` instead.
     */
    discounts?: Array<OrderLineItemDiscount>;
    /**
     * A list of service charges applied to the order.
     */
    service_charges?: Array<OrderServiceCharge>;
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
     * The Tenders which were used to pay for the Order.
     */
    tenders?: Array<Tender>;
    /**
     * The Refunds that are part of this Order.
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
    state?: OrderStateType;
    /**
     * Version number which is incremented each time an update is committed to the order.
     * Orders that were not created through the API will not include a version and thus cannot be updated.
     * [Read more about working with versions](/orders-api/manage-orders#update-orders).
     */
    version?: number;
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
    /**
     * The total amount of money collected in service charges for the order.
     * @note `total_service_charge_money` is the sum of `applied_money` fields for each individual service charge.
     * Therefore, `total_service_charge_money` will only include inclusive tax amounts, not additive tax amounts.
     */
    total_service_charge_money?: Money;
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
     * Version number which is incremented each time an update is committed to the order.
     * Orders that were not created through the API will not include a version and thus cannot be updated.
     * [Read more about working with versions](/orders-api/manage-orders#update-orders).
     */
    version?: number;
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
     * Unique ID that identifies the fulfillment only within this order.
     */
    uid?: string;
    /**
     * The type of the fulfillment. See [OrderFulfillmentType](#type-orderfulfillmenttype) for possible values.
     */
    type?: FulfillmentType;
    /**
     * The state of the fulfillment. See [OrderFulfillmentState](#type-orderfulfillmentstate) for possible values.
     */
    state?: FulfillmentStateType;
    /**
     * Contains details for a pickup fulfillment. Required when fulfillment type is `PICKUP`.
     */
    pickup_details?: OrderFulfillmentPickupDetails;
    /**
     * Contains details for a shipment fulfillment. Required when fulfillment type is `SHIPMENT`.
     * A shipment fulfillment's relationship to fulfillment `state`:
     *  `PROPOSED`: A shipment is requested.
     *  `RESERVED`: Fulfillment accepted. Shipment processing.
     *  `PREPARED`: Shipment packaged. Shipping label created.
     *  `COMPLETED`: Package has been shipped.
     *  `CANCELED`: Shipment has been canceled.
     *  `FAILED`: Shipment has failed.
     */
    shipment_details?: OrderFulfillmentShipmentDetails;
}

/**
 * Contains details necessary to fulfill a pickup order.
 */
export class OrderFulfillmentPickupDetails {
    /**
     * Information on the person meant to pick up this fulfillment from a physical location.
     */
    recipient?: OrderFulfillmentRecipient;
    /**
     * The [timestamp](#workingwithdates) indicating when this fulfillment will expire if it is not accepted.
     * Must be in RFC 3339 format e.g., "2016-09-04T23:59:33.123Z". Expiration time can only be set up to 7 days in the future.
     * If `expires_at` is not set, this pickup fulfillment will be automatically accepted when placed.
     */
    expires_at?: string;
    /**
     * The duration of time after which an open and accepted pickup fulfillment will automatically move to the `COMPLETED` state.
     * Must be in RFC3339 duration format e.g., "P1W3D".
     * If not set, this pickup fulfillment will remain accepted until it is canceled or completed.
     */
    auto_complete_duration?: string;
    /**
     * The schedule type of the pickup fulfillment. Defaults to `SCHEDULED`.
     * See [OrderFulfillmentPickupDetailsScheduleType](#type-orderfulfillmentpickupdetailsscheduletype) for possible values.
     */
    schedule_type?: 'SCHEDULED' | 'ASAP';
    /**
     * The [timestamp](#workingwithdates) that represents the start of the pickup window.
     * Must be in RFC3339 timestamp format, e.g., "2016-09-04T23:59:33.123Z". For fulfillments with the schedule type `ASAP`,
     * this is automatically set to the current time plus the expected duration to prepare the fulfillment.
     */
    pickup_at?: string;
    /**
     * The window of time in which the order should be picked up after the `pickup_at` timestamp.
     * Must be in RFC3339 duration format, e.g., "P1W3D". Can be used as an informational guideline for merchants.
     */
    pickup_window_duration?: string;
    /**
     * The duration of time it takes to prepare this fulfillment. Must be in RFC3339 duration format, e.g., "P1W3D".
     */
    prep_time_duration?: string;
    /**
     * A note meant to provide additional instructions about the pickup fulfillment displayed in the Square Point of Sale and set by the API.
     */
    note?: string;
    /**
     * The [timestamp](#workingwithdates) indicating when the fulfillment was placed.
     * Must be in RFC3339 timestamp format, e.g., "2016-09-04T23:59:33.123Z".
     */
    placed_at?: string;
    /**
     * The [timestamp](#workingwithdates) indicating when the fulfillment was accepted.
     * In RFC3339 timestamp format, e.g., "2016-09-04T23:59:33.123Z".
     */
    accepted_at?: string;
    /**
     * The [timestamp](#workingwithdates) indicating when the fulfillment was rejected.
     * In RFC3339 timestamp format, e.g., "2016-09-04T23:59:33.123Z".
     */
    rejected_at?: string;
    /**
     * The [timestamp](#workingwithdates) indicating when the fulfillment is marked as ready for pickup.
     * In RFC3339 timestamp format, e.g., "2016-09-04T23:59:33.123Z".
     */
    ready_at?: string;
    /**
     * The [timestamp](#workingwithdates) indicating when the fulfillment expired.
     * In RFC3339 timestamp format, e.g., "2016-09-04T23:59:33.123Z".
     */
    expired_at?: string;
    /**
     * The [timestamp](#workingwithdates) indicating when the fulfillment was picked up by the recipient.
     * In RFC3339 timestamp format, e.g., "2016-09-04T23:59:33.123Z".
     */
    picked_up_at?: string;
    /**
     * The [timestamp](#workingwithdates) in RFC3339 timestamp format.
     * e.g., "2016-09-04T23:59:33.123Z", indicating when the fulfillment was canceled.
     */
    canceled_at?: string;
    /**
     * A description of why the pickup was canceled. Max length: 100 characters.
     */
    cancel_reason?: string;
}

/**
 * Contains information on the recipient of a fulfillment.
 */
export class OrderFulfillmentRecipient {
    /**
     * The Customer ID of the customer associated with the fulfillment.
     * If `customer_id` is provided, the fulfillment recipient's `display_name`, `email_address`, and `phone_number`
     * are automatically populated from the targeted customer profile. If these fields are set in the request,
     * the request values will override the information from the customer profile. If the targeted customer profile
     * does not contain the necessary information and these fields are left unset, the request will result in an error.
     */
    customer_id?: string;
    /**
     * The display name of the fulfillment recipient.
     * If provided, overrides the value pulled from the customer profile indicated by `customer_id`.
     */
    display_name?: string;
    /**
     * The email address of the fulfillment recipient.
     * If provided, overrides the value pulled from the customer profile indicated by `customer_id`.
     */
    email_address?: string;
    /**
     * The phone number of the fulfillment recipient.
     * If provided, overrides the value pulled from the customer profile indicated by `customer_id`.
     */
    phone_number?: string;
    /**
     * The address of the fulfillment recipient.
     * If provided, overrides the value pulled from the customer profile indicated by `customer_id`.
     */
    address?: Address;
}

/**
 * Contains details necessary to fulfill a shipment order.
 */
export class OrderFulfillmentShipmentDetails {
    /**
     * Information on the person meant to receive this shipment fulfillment.
     */
    recipient?: OrderFulfillmentRecipient;
    /**
     * The shipping carrier being used to ship this fulfillment e.g. UPS, FedEx, USPS, etc.
     */
    carrier?: string;
    /**
     * A note with additional information for the shipping carrier.
     */
    shipping_note?: string;
    /**
     * A description of the type of shipping product purchased from the carrier. e.g. First Class, Priority, Express
     */
    shipping_type?: string;
    /**
     * The reference number provided by the carrier to track the shipment's progress.
     */
    tracking_number?: string;
    /**
     * A link to the tracking webpage on the carrier's website.
     */
    tracking_url?: string;
    /**
     * The [timestamp](#workingwithdates) indicating when the shipment was requested.
     * Must be in RFC3339 timestamp format, e.g., "2016-09-04T23:59:33.123Z".
     */
    placed_at?: string;
    /**
     * The [timestamp](#workingwithdates) indicating when this fulfillment was moved to the `RESERVED` state.
     * Indicates that preparation of this shipment has begun. Must be in RFC3339 timestamp format, e.g., "2016-09-04T23:59:33.123Z".
     */
    in_progress_at?: string;
    /**
     * The [timestamp](#workingwithdates) indicating when this fulfillment was moved to the `PREPARED` state.
     * Indicates that the fulfillment is packaged. Must be in RFC3339 timestamp format, e.g., "2016-09-04T23:59:33.123Z".
     */
    packaged_at?: string;
    /**
     * The [timestamp](#workingwithdates) indicating when the shipment is expected to be delivered to the shipping carrier.
     * Must be in RFC3339 timestamp format, e.g., "2016-09-04T23:59:33.123Z".
     */
    expected_shipped_at?: string;
    /**
     * The [timestamp](#workingwithdates) indicating when this fulfillment was moved to the `COMPLETED`state.
     * Indicates that the fulfillment has been given to the shipping carrier.
     * Must be in RFC3339 timestamp format, e.g., "2016-09-04T23:59:33.123Z".
     */
    shipped_at?: string;
    /**
     * The [timestamp](#workingwithdates) indicating the shipment was canceled.
     * Must be in RFC3339 timestamp format, e.g., "2016-09-04T23:59:33.123Z".
     */
    canceled_at?: string;
    /**
     * A description of why the shipment was canceled.
     */
    cancel_reason?: string;
    /**
     * The [timestamp](#workingwithdates) indicating when the shipment failed to be completed.
     * Must be in RFC3339 timestamp format, e.g., "2016-09-04T23:59:33.123Z".
     */
    failed_at?: string;
    /**
     * A description of why the shipment failed to be completed.
     */
    failure_reason?: string;
}

/**
 * The current state of this fulfillment.
 */
export class OrderFulfillmentState {}

/**
 * The type of fulfillment.
 */
export class OrderFulfillmentType {}

/**
 * Represents a line item in an order.
 * Each line item describes a different product to purchase, with its own quantity and price details.
 */
export class OrderLineItem {
    /**
     * Unique ID that identifies the line item only within this order.
     */
    uid?: string;
    /**
     * The name of the line item.
     */
    name?: string;
    /**
     * The quantity purchased, formatted as a decimal number. For example: "3".
     * Line items with a `quantity_unit` can have non-integer quantities. For example: "1.70000".
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
     * This field has been deprecated in favour of `applied_taxes`.
     * Usage of both this field and `applied_taxes` when creating an order will result in an error.
     * Usage of this field when sending requests to the UpdateOrder endpoint will result in an error.
     */
    taxes?: Array<OrderLineItemTax>;
    /**
     * A list of discounts applied to this line item. On read or retrieve, this list includes both item-level
     * discounts and any order-level discounts apportioned to this item. When creating an Order, set your item-level
     * discounts in this list. This field has been deprecated in favour of `applied_discounts`.
     * Usage of both this field and `applied_discounts` when creating an order will result in an error.
     * Usage of this field when sending requests to the UpdateOrder endpoint will result in an error.
     */
    discounts?: Array<OrderLineItemDiscount>;
    /**
     * The list of references to taxes applied to this line item. Each `OrderLineItemAppliedTax` has a `tax_uid` that
     * references the `uid` of a top-level `OrderLineItemTax` applied to the line item. On reads, the amount applied is populated.
     * An `OrderLineItemAppliedTax` will be automatically created on every line item for all `ORDER` scoped taxes
     * added to the order. `OrderLineItemAppliedTax` records for `LINE_ITEM` scoped taxes must be added in requests for
     * the tax to apply to any line items. To change the amount of a tax, modify the referenced top-level tax.
     */
    applied_taxes?: Array<OrderLineItemAppliedTax>;
    /**
     * The list of references to discounts applied to this line item. Each `OrderLineItemAppliedDiscount` has a
     * `discount_uid` that references the `uid` of a top-level `OrderLineItemDiscounts` applied to the line item.
     * On reads, the amount applied is populated. An `OrderLineItemAppliedDiscount` will be automatically created on
     * every line item for all `ORDER` scoped discounts that are added to the order. `OrderLineItemAppliedDiscount`
     * records for `LINE_ITEM` scoped discounts must be added in requests for the discount to apply to any line items.
     * To change the amount of a discount, modify the referenced top-level discount.
     */
    applied_discounts?: Array<OrderLineItemAppliedDiscount>;
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
 * Represents an applied portion of a discount to a line item in an order.
 * Order scoped discounts will automatically have applied discounts present for each line item.
 * Line item scoped discounts must have applied discounts added manually for any applicable line items.
 * The corresponding applied money will automatically be computed based on participating line items.
 */
export class OrderLineItemAppliedDiscount {
    /**
     * Unique ID that identifies the applied discount only within this order.
     */
    uid?: string;
    /**
     * The `uid` of the discount the applied discount represents. Must reference a discount present in the
     * `order.discounts` field. This field is immutable. To change which discounts apply to a line item, you must delete
     * the discount and re-add it as a new `OrderLineItemAppliedDiscount`.
     */
    discount_uid: string;
    /**
     * The amount of money applied by the discount to the line item.
     */
    applied_money?: Money;
}

/**
 * Represents an applied portion of a tax to a line item in an order.
 * Order-scoped taxes automatically include the applied taxes in each line item.
 * Line item taxes must be referenced from any applicable line items. The corresponding applied money is automatically
 * computed, based on the set of participating line items.
 */
export class OrderLineItemAppliedTax {
    /**
     * Unique ID that identifies the applied tax only within this order.
     */
    uid?: string;
    /**
     * The `uid` of the tax for which this applied tax represents.
     * Must reference a tax present in the `order.taxes` field. This field is immutable.
     * To change which taxes apply to a line item, delete and add new `OrderLineItemAppliedTax`s.
     */
    tax_uid: string;
    /**
     * The amount of money applied by the tax to the line item.
     */
    applied_money?: Money;
}

/**
 * Represents a discount that applies to one or more line items in an order.
 * Fixed-amount, order-scoped discounts are distributed across all non-zero line item totals.
 * The amount distributed to each line item is relative to the amount contributed by the item to the order subtotal.
 */
export class OrderLineItemDiscount {
    /**
     * Unique ID that identifies the discount only within this order.
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
    type?: DiscountType;
    /**
     * The percentage of the discount, as a string representation of a decimal number.
     * A value of `7.25` corresponds to a percentage of 7.25%. The percentage won't be set for an amount-based discount.
     */
    percentage?: string;
    /**
     * The total declared monetary amount of the discount. `amount_money` is not set for percentage-based discounts.
     */
    amount_money?: Money;
    /**
     * The amount of discount actually applied to the line item. Represents the amount of money applied as a line
     * item-scoped discount. When an amount-based discount is scoped to the entire order, the value of `applied_money`
     * is different from `amount_money` because the total amount of the discount is distributed across all line items.
     */
    applied_money?: Money;
    /**
     * Indicates the level at which the discount applies. For `ORDER` scoped discounts, Square generates references
     * in `applied_discounts` on all order line items that do not have them. For `LINE_ITEM` scoped discounts,
     * the discount only applies to line items with a discount reference in their `applied_discounts` field.
     * This field is immutable. To change the scope of a discount you must delete the discount and re-add it as a new discount.
     * See [OrderLineItemDiscountScope](#type-orderlineitemdiscountscope) for possible values.
     */
    scope?: DiscountApplicationScopeType;
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
     * Unique ID that identifies the modifier only within this order.
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
 * Represents a tax that applies to one or more line item in the order.
 * Fixed-amount, order-scoped taxes are distributed across all non-zero line item totals.
 * The amount distributed to each line item is relative to the amount the item contributes to the order subtotal.
 */
export class OrderLineItemTax {
    /**
     * Unique ID that identifies the tax only within this order.
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
    type?: TaxType;
    /**
     * The percentage of the tax, as a string representation of a decimal number.
     * For example, a value of "7.25" corresponds to a percentage of 7.25%.
     */
    percentage?: string;
    /**
     * The amount of the money applied by the tax in the order.
     */
    applied_money?: Money;
    /**
     * Indicates the level at which the tax applies. For `ORDER` scoped taxes, Square generates references in
     * `applied_taxes` on all order line items that do not have them. For `LINE_ITEM` scoped taxes, the tax will only
     * apply to line items with references in their `applied_taxes` field. This field is immutable.
     * To change the scope, you must delete the tax and re-add it as a new tax.
     * See [OrderLineItemTaxScope](#type-orderlineitemtaxscope) for possible values.
     */
    scope?: TaxApplicationScopeType;
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
     * For example, a precision of 1 allows quantities like "1.0" and "1.1", but not "1.01". Min: 0. Max: 5.
     */
    precision?: number;
}

/**
 * The set of line items, service charges, taxes, discounts, tips, etc. being returned in an Order.
 */
export class OrderReturn {
    /**
     * Unique ID that identifies the return only within this order.
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
     * Collection of service charges which are being returned.
     */
    return_service_charges?: Array<OrderReturnServiceCharge>;
    /**
     * Collection of references to taxes being returned for an order, including the total applied tax amount to be returned.
     * The taxes must reference a top-level tax ID from the source order.
     */
    return_taxes?: Array<OrderReturnTax>;
    /**
     * Collection of references to discounts being returned for an order, including the total applied discount amount to be returned.
     * The discounts must reference a top-level discount ID from the source order.
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
 * Represents a discount being returned that applies to one or more return line items in an order.
 * Fixed-amount, order-scoped discounts are distributed across all non-zero return line item totals.
 * The amount distributed to each return line item is relative to that item’s contribution to the order subtotal.
 */
export class OrderReturnDiscount {
    /**
     * Unique ID that identifies the return discount only within this order.
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
    type?: DiscountType;
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
    scope?: DiscountApplicationScopeType;
}

/**
 * The line item being returned in an Order.
 */
export class OrderReturnLineItem {
    /**
     * Unique identifier for this return line item entry.
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
     * return-level taxes apportioned to this item. This field has been deprecated in favour of `applied_taxes`.
     */
    return_taxes?: Array<OrderReturnTax>;
    /**
     * A list of discounts applied to this line item. On read or retrieve, this list includes both item-level discounts
     * and any return-level discounts apportioned to this item. This field has been deprecated in favour of `applied_discounts`.
     */
    return_discounts?: Array<OrderReturnDiscount>;
    /**
     * The list of references to `OrderReturnTax` entities applied to the returned line item.
     * Each `OrderLineItemAppliedTax` has a `tax_uid` that references the `uid` of a top-level `OrderReturnTax`
     * applied to the returned line item. On reads, the amount applied is populated.
     */
    applied_taxes?: Array<OrderLineItemAppliedTax>;
    /**
     * The list of references to `OrderReturnDiscount` entities applied to the returned line item.
     * Each `OrderLineItemAppliedDiscount` has a `discount_uid` that references the `uid` of a top-level `OrderReturnDiscount`
     * applied to the returned line item. On reads, the amount applied is populated.
     */
    applied_discounts?: Array<OrderLineItemAppliedDiscount>;
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
     * Unique ID that identifies the return modifier only within this order.
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
 * Represents the service charge applied to the original order.
 */
export class OrderReturnServiceCharge {
    /**
     * Unique ID that identifies the return service charge only within this order.
     */
    uid?: string;
    /**
     * `uid` of the Service Charge from the Order containing the original charge of the service charge.
     * `source_service_charge_uid` is `null` for unlinked returns.
     */
    source_service_charge_uid?: string;
    /**
     * The name of the service charge.
     */
    name?: string;
    /**
     * The catalog object ID of the associated [CatalogServiceCharge](#type-catalogservicecharge).
     */
    catalog_object_id?: string;
    /**
     * The percentage of the service charge, as a string representation of a decimal number.
     * For example, a value of "7.25" corresponds to a percentage of 7.25%.
     * Exactly one of `percentage` or `amount_money` should be set.
     */
    percentage?: string;
    /**
     * The amount of a non-percentage based service charge. Exactly one of `percentage` or `amount_money` should be set.
     */
    amount_money?: Money;
    /**
     * The amount of money applied to the order by the service charge, including any inclusive tax amounts, as calculated by Square.
     * - For fixed-amount service charges, `applied_money` is equal to `amount_money`.
     * - For percentage-based service charges, `applied_money` is the money calculated using the percentage.
     */
    applied_money?: Money;
    /**
     * The total amount of money to collect for the service charge.
     * @note if an inclusive tax is applied to the service charge, `total_money` does not equal `applied_money`
     * plus `total_tax_money` since the inclusive tax amount will already be included in both `applied_money`
     * and `total_tax_money`.
     */
    total_money?: Money;
    /**
     * The total amount of tax money to collect for the service charge.
     */
    total_tax_money?: Money;
    /**
     * The calculation phase after which to apply the service charge.
     * See [OrderServiceChargeCalculationPhase](#type-orderservicechargecalculationphase) for possible values.
     */
    calculation_phase?: string;
    /**
     * Indicates whether the surcharge can be taxed. Service charges calculated in the `TOTAL_PHASE` cannot be marked as taxable.
     */
    taxable?: boolean;
    /**
     * Taxes applied to the `OrderReturnServiceCharge`. By default, return-level taxes apply to `OrderReturnServiceCharge`s
     * calculated in the `SUBTOTAL_PHASE` if `taxable` is set to `true`. On read or retrieve, this list includes both
     * item-level taxes and any return-level taxes apportioned to this item.
     * This field has been deprecated in favour of `applied_taxes`.
     */
    return_taxes?: Array<OrderReturnTax>;
    /**
     * The list of references to `OrderReturnTax` entities applied to the `OrderReturnServiceCharge`.
     * Each `OrderLineItemAppliedTax` has a `tax_uid` that references the `uid` of a top-level `OrderReturnTax` that
     * is being applied to the `OrderReturnServiceCharge`. On reads, the amount applied is populated.
     */
    applied_taxes?: Array<OrderLineItemAppliedTax>;
}

/**
 * Represents a tax being returned that applies to one or more return line items in an order.
 * Fixed-amount, order-scoped taxes are distributed across all non-zero return line item totals.
 * The amount distributed to each return line item is relative to that item’s contribution to the order subtotal.
 */
export class OrderReturnTax {
    /**
     * Unique ID that identifies the return tax only within this order.
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
    type?: TaxType;
    /**
     * The percentage of the tax, as a string representation of a decimal number.
     * For example, a value of "7.25" corresponds to a percentage of 7.25%.
     */
    percentage?: string;
    /**
     * The amount of the money applied by the tax in an order.
     */
    applied_money?: Money;
    /**
     * Indicates the level at which the `OrderReturnTax` applies. For `ORDER` scoped taxes, Square generates references
     * in `applied_taxes` on all `OrderReturnLineItem`s. For `LINE_ITEM` scoped taxes, the tax will only apply to
     * `OrderReturnLineItem`s with references in their `applied_discounts` field.
     * See [OrderLineItemTaxScope](#type-orderlineitemtaxscope) for possible values.
     */
    scope?: TaxApplicationScopeType;
}

/**
 * A rounding adjustment of the money being returned. Commonly used to apply Cash Rounding when the minimum unit
 * of account is smaller than the lowest physical denomination of currency.
 */
export class OrderRoundingAdjustment {
    /**
     * Unique ID that identifies the rounding adjustment only within this order.
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
 * Represents a service charge applied to an order.
 */
export class OrderServiceCharge {
    /**
     * Unique ID that identifies the service charge only within this order.
     */
    uid?: string;
    /**
     * The name of the service charge.
     */
    name?: string;
    /**
     * The catalog object ID referencing the service charge [CatalogObject](#type-catalogobject).
     */
    catalog_object_id?: string;
    /**
     * The service charge percentage as a string representation of a decimal number.
     * For example, "7.25" indicates a service charge of 7.25%. Exactly 1 of `percentage` or `amount_money` should be set.
     */
    percentage?: string;
    /**
     * The amount of a non-percentage based service charge. Exactly one of `percentage` or `amount_money` should be set.
     */
    amount_money?: Money;
    /**
     * The amount of money applied to the order by the service charge, including any inclusive tax amounts, as calculated by Square.
     * - For fixed-amount service charges, `applied_money` is equal to `amount_money`.
     * - For percentage-based service charges, `applied_money` is the money calculated using the percentage.
     */
    applied_money?: Money;
    /**
     * The total amount of money to collect for the service charge.
     * @note if an inclusive tax is applied to the service charge, `total_money` __does not__ equal `applied_money` plus
     * `total_tax_money` since the inclusive tax amount will already be included in both `applied_money` and `total_tax_money`.
     */
    total_money?: Money;
    /**
     * The total amount of tax money to collect for the service charge.
     */
    total_tax_money?: Money;
    /**
     * The calculation phase at which to apply the service charge.
     * See [OrderServiceChargeCalculationPhase](#type-orderservicechargecalculationphase) for possible values.
     */
    calculation_phase?: string;
    /**
     * Indicates whether the service charge can be taxed. If set to `true`, order-level taxes automatically apply to
     * the service charge. Note that service charges calculated in the `TOTAL_PHASE` cannot be marked as taxable.
     */
    taxable?: boolean;
    /**
     * A list of taxes applied to this service charge. On read or retrieve, this list includes both item-level taxes
     * and any order-level taxes apportioned to this service charge. When creating an Order, set your service charge-level
     * taxes in this list. By default, order-level taxes apply to service charges calculated in the `SUBTOTAL_PHASE`
     * if `taxable` is set to `true`. This field has been deprecated in favour of `applied_taxes`.
     * Usage of both this field and `applied_taxes` when creating an order will result in an error.
     * Usage of this field when sending requests to the UpdateOrder endpoint will result in an error.
     */
    taxes?: Array<OrderLineItemTax>;
    /**
     * The list of references to taxes applied to this service charge.
     * Each `OrderLineItemAppliedTax` has a `tax_uid` that references the `uid` of a top-level `OrderLineItemTax` that
     * is being applied to this service charge. On reads, the amount applied is populated. An `OrderLineItemAppliedTax`
     * will be automatically created on every taxable service charge for all `ORDER` scoped taxes that are added to the order.
     * `OrderLineItemAppliedTax` records for `LINE_ITEM` scoped taxes must be added in requests for the tax to apply to
     * any taxable service charge. Taxable service charges have the `taxable` field set to true and calculated in
     * the `SUBTOTAL_PHASE`. To change the amount of a tax, modify the referenced top-level tax.
     */
    applied_taxes?: Array<OrderLineItemAppliedTax>;
}

/**
 * Represents a phase in the process of calculating order totals. Service charges are applied __after__ the indicated phase.
 * [Read more about how order totals are calculated.](/docs/orders-api/how-it-works#how-totals-are-calculated).
 */
export class OrderServiceChargeCalculationPhase {}

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
 * Defines the fields that are included in requests to the [PayOrder](#endpoint-payorder) endpoint.
 */
export class PayOrderRequest {
    /**
     * A value you specify that uniquely identifies this request among requests you've sent.
     * If you're unsure whether a particular payment request was completed successfully, you can reattempt it with the
     * same idempotency key without worrying about duplicate payments.
     * See [Idempotency](/working-with-apis/idempotency) for more information.
     */
    idempotency_key: string;
    /**
     * The version of the order being paid. If not supplied, the latest version will be paid.
     */
    order_version?: number;

    payment_ids?: Array<string>;
}

/**
 * Defines the fields that are included in the response body of a request to the [PayOrder](#endpoint-payorder) endpoint.
 */
export class PayOrderResponse {
    /**
     * Any errors that occurred during the request.
     */
    errors?: Array<Error>;
    /**
     * The paid, updated [order](#type-order).
     */
    order?: Order;
}

/**
 * Represents a payment processed by the Square API.
 */
export class Payment {
    /**
     * Unique ID for the payment.
     */
    id: string;
    /**
     * Timestamp of when the payment was created, in RFC 3339 format.
     */
    created_at?: string;
    /**
     * Timestamp of when the payment was last updated, in RFC 3339 format.
     */
    updated_at?: string;
    /**
     * The amount of money processed for this payment, not including `tip_money`.
     * Specified in the smallest denomination of the applicable currency. For example, US dollar amounts are specified in cents.
     * For more information, see [Working with monetary amounts](/build-basics/working-with-monetary-amounts).
     */
    amount_money: Money;
    /**
     * The amount designated as a tip. Specified in the smallest denomination of the applicable currency.
     * For example, US dollar amounts are specified in cents.
     */
    tip_money?: Money;
    /**
     * The total money for the payment, including `amount_money` and `tip_money`.
     * Specified in the smallest denomination of the applicable currency. For example, US dollar amounts are specified in cents.
     */
    total_money?: Money;
    /**
     * The amount of money the developer is taking as a fee for facilitating the payment on behalf of the seller.
     * Specified in the smallest denomination of the applicable currency. For example, US dollar amounts are specified in cents.
     * For more information, see [Take Payments and Collect Fees](/payments-api/take-payments-and-collect-fees).
     * Cannot be more than 90% of the `total_money` value.
     */
    app_fee_money?: Money;
    /**
     * Processing fees and fee adjustments assessed by Square on this payment.
     */
    processing_fee?: Array<ProcessingFee>;
    /**
     * Total amount of the payment refunded to-date. Specified in the smallest denomination of the applicable currency.
     * For example, US dollar amounts are specified in cents.
     */
    refunded_money?: Money;
    /**
     * Indicates whether the payment is `APPROVED`, `COMPLETED`, `CANCELED`, or `FAILED`.
     */
    status?: string;
    /**
     * The source type for this payment.
     */
    source_type?: string;
    /**
     * Non-confidential details about the source. Only populated if the `source_type` is `CARD`.
     */
    card_details?: CardPaymentDetails;
    /**
     * ID of the location associated with the payment.
     */
    location_id?: string;
    /**
     * ID of the order associated with this payment.
     */
    order_id?: string;
    /**
     * An optional ID that associates this payment with an entity in another system.
     */
    reference_id?: string;
    /**
     * An optional customer_id to be entered by the developer when creating a payment.
     */
    customer_id?: string;
    /**
     * List of `refund_id`s identifying refunds for this payment.
     */
    refund_ids?: Array<string>;
    /**
     * The buyer's e-mail address.
     */
    buyer_email_address?: string;
    /**
     * The buyer's billing address.
     */
    billing_address?: Address;
    /**
     * The buyer's shipping address.
     */
    shipping_address?: Address;
    /**
     * An optional note to include when creating a payment.
     */
    note?: string;
}

/**
 * Represents a refund of a payment made using Square. Contains information on the original payment and the amount of money refunded.
 */
export class PaymentRefund {
    /**
     * Unique ID for this refund, generated by Square.
     */
    id: string;
    /**
     * The refund's status:
     * - `PENDING` - awaiting approval
     * - `COMPLETED` - successfully completed
     * - `REJECTED` - the refund was rejected
     * - `FAILED` - an error occurred
     */
    status: 'PENDING' | 'COMPLETED' | 'REJECTED' | 'FAILED';
    /**
     * Location ID associated with the payment this refund is attached to.
     */
    location_id?: string;
    /**
     * The amount of money refunded, specified in the smallest denomination of the applicable currency.
     * For example, US dollar amounts are specified in cents.
     */
    amount_money: Money;
    /**
     * Amount of money the app developer contributed to help cover the refunded amount.
     * Specified in the smallest denomination of the applicable currency. For example, US dollar amounts are specified in cents.
     * See [Working with monetary amounts](/build-basics/working-with-monetary-amounts) for details.
     */
    app_fee_money?: Money;
    /**
     * Processing fees and fee adjustments assessed by Square on this refund.
     */
    processing_fee?: Array<ProcessingFee>;
    /**
     * The ID of the payment assocated with this refund.
     */
    payment_id?: string;
    /**
     * The ID of the order associated with the refund.
     */
    order_id?: string;
    /**
     * The reason for the refund.
     */
    reason?: string;
    /**
     * Timestamp of when the refund was created, in RFC 3339 format.
     */
    created_at?: string;
    /**
     * Timestamp of when the refund was last updated, in RFC 3339 format.
     */
    updated_at?: string;
}

/**
 * Represents Square processing fee.
 */
export class ProcessingFee {
    /**
     * Timestamp of when the fee takes effect, in RFC 3339 format.
     */
    effective_at?: string;
    /**
     * The type of fee assessed or adjusted. Can be one of: `INITIAL`, `ADJUSTMENT`.
     */
    type?: string;
    /**
     * The fee amount assessed or adjusted by Square. May be negative.
     * Positive values represent funds being assessed, while negative values represent funds being returned.
     */
    amount_money?: Money;
}

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
    status: 'PENDING' | 'APPROVED' | 'REJECTED' | 'FAILED';
    /**
     * The amount of Square processing fee money refunded to the *merchant*.
     */
    processing_fee_money?: Money;
    /**
     * Additional recipients (other than the merchant) receiving a portion of this refund.
     * For example, fees assessed on a refund of a purchase by a third party integration.
     */
    additional_recipients?: Array<AdditionalRecipient>;
}

/**
 * Refunds a payment.
 */
export class RefundPaymentRequest {
    /**
     * A unique string that identifies this RefundPayment request. Key can be any valid string but must be unique
     * for every RefundPayment request. For more information, see [Idempotency keys](/basics/api101/idempotency).
     */
    idempotency_key: string;
    /**
     * The amount of money to refund. Cannot be more than the `total_money` value of the payment minus the total amount
     * of all previously completed refunds for this payment. Must be specified in the smallest denomination of the
     * applicable currency. For example, US dollar amounts are specified in cents.
     * See [Working with monetary amounts](/build-basics/working-with-monetary-amounts) for details.
     * The currency code must match the currency associated with the business that is charging the card.
     */
    amount_money: Money;
    /**
     * Amount of money the developer will contribute to help cover the refunded amount.
     * Specified in the smallest denomination of the applicable currency. For example, US dollar amounts are specified in cents.
     * Value cannot be more than the `amount_money`. You can specify this parameter in a refund request only if the
     * same parameter was also included when taking the payment. This is part of the application fee scenario the API supports.
     * For more information, see [Collect Fees](/payments-api/take-payments-and-collect-fees).
     */
    app_fee_money?: Money;
    /**
     * Unique ID of the payment being refunded.
     */
    payment_id?: string;
    /**
     * A description of the reason for the refund.
     */
    reason?: string;
}

/**
 * Defines the fields that are included in the response body of a request to the [RefundPayment](#endpoint-refunds-refundpayment) endpoint.
 * Note: if there are errors processing the request, the refund field may not be present, or it may be present in a FAILED state.
 */
export class RefundPaymentResponse {
    /**
     * Information on errors encountered during the request.
     */
    errors?: Array<Error>;
    /**
     * The successfully created `PaymentRefund`.
     */
    refund?: PaymentRefund;
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
     * Status of the domain registration.
     * See [RegisterDomainResponseStatus](#type-registerdomainresponsestatus) for possible values.
     */
    status?: 'PENDING' | 'VERIFIED';
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
     * @deprecated
     * The ID of the merchant subscription associated with the authorization. Only present if the merchant signed up for
     * a subscription during authorization.
     */
    subscription_id?: string;
    /**
     * @deprecated
     * The ID of the subscription plan the merchant signed up for. Only present if the merchant signed up for a
     * subscription during authorization.
     */
    plan_id?: string;
}

export class RetrieveCatalogObjectRequest {
    /**
     * If `true`, the response will include additional objects that are related to the requested object, as follows:
     * If the `object` field of the response contains a [CatalogItem](#type-catalogitem), its associated
     * [CatalogCategory](#type-catalogcategory), [CatalogTax](#type-catalogtax)es, [CatalogImage](#type-catalogimage)s
     * and [CatalogModifierList](#type-catalogmodifierlist)s will be returned in the `related_objects` field of the response.
     * If the `object` field of the response contains a [CatalogItemVariation](#type-catalogitemvariation), its
     * parent [CatalogItem](#type-catalogitem) will be returned in the `related_objects` field of  the response.
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
     * The pagination cursor to be used in a subsequent request. If unset, this is the final response.
     * See [Pagination](/basics/api101/pagination) for more information.
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

export class RetrieveLocationRequest {}

/**
 * Defines the fields that are included in the response body of a request to the [RetrieveLocation](#endpoint-retrievelocation) endpoint.
 * One of `errors` or `location` is present in a given response (never both).
 */
export class RetrieveLocationResponse {
    /**
     * Any errors that occurred during the request.
     */
    errors?: Array<Error>;
    /**
     * The requested location.
     */
    location?: Location;
}

/**
 * Defines the request body fields for calls to the RetrieveTransaction endpoint.
 */
export class RetrieveTransactionRequest {}

/**
 * Defines the fields that are included in the response body of a request to the [RetrieveTransaction](#endpont-retrievetransaction) endpoint.
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
     * The pagination cursor returned in the previous response. Leave unset for an initial request.
     * See [Pagination](/basics/api101/pagination) for more information.
     */
    cursor?: string;
    /**
     * The desired set of object types to appear in the search results.
     * The legal values are taken from the [CatalogObjectType](#type-catalogobjecttype) enumeration, namely "ITEM",
     * "ITEM_VARIATION", "CATEGORY", "DISCOUNT", "TAX", "MODIFIER", or "MODIFIER_LIST".
     * See [CatalogObjectType](#type-catalogobjecttype) for possible values.
     */
    object_types?: Array<ObjectType>;
    /**
     * If `true`, deleted objects will be included in the results.
     * Deleted objects will have their `is_deleted` field set to `true`.
     */
    include_deleted_objects?: boolean;
    /**
     * If `true`, the response will include additional objects that are related to the requested object, as follows:
     * If a [CatalogItem](#type-catalogitem) is returned in the object field of the response, its associated
     * [CatalogCategory](#type-catalogcategory), [CatalogTax](#type-catalogtax)es, [CatalogImage](#type-catalogimage)s
     * and [CatalogModifierList](#type-catalogmodifierlist)s will be included in the `related_objects` field of the response.
     * If a [CatalogItemVariation](#type-catalogitemvariation) is returned in the object field of the response, its
     * parent [CatalogItem](#type-catalogitem) will be included in the `related_objects` field of the response.
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
     * List of customer IDs to filter by. Max: 10 customer IDs.
     */
    customer_ids?: Array<string>;
}

/**
 * Filter for `Order` objects based on whether their `CREATED_AT`, `CLOSED_AT` or `UPDATED_AT` timestamps fall within a
 * specified time range. You can specify the time range and which timestamp to filter for. You can filter for only one
 * time range at a time. For each time range, the start time and end time are inclusive. If the end time is absent, it
 * defaults to the time of the first request for the cursor.
 * @note If you use the DateTimeFilter in a SearchOrders query, you must also set the `sort_field` in
 * [OrdersSort](#type-searchorderordersort) to the same field you filter for. For example, if you set the `CLOSED_AT`
 * field in DateTimeFilter, you must also set the `sort_field` in SearchOrdersSort to `CLOSED_AT`.
 * Otherwise, SearchOrders will throw an error. [Learn more about filtering ordersby time range](/orders-api/manage-orders#important-note-on-filtering-orders-by-time-range).
 */
export class SearchOrdersDateTimeFilter {
    /**
     * Time range for filtering on the `created_at` timestamp.
     * If you use this value, you must also set the `sort_field` in the OrdersSearchSort object to `CREATED_AT`.
     */
    created_at?: TimeRange;
    /**
     * Time range for filtering on the `updated_at` timestamp.
     * If you use this value, you must also set the `sort_field` in the OrdersSearchSort object to `UPDATED_AT`.
     */
    updated_at?: TimeRange;
    /**
     * Time range for filtering on the `closed_at` timestamp.
     * If you use this value, you must also set the `sort_field` in the OrdersSearchSort object to `CLOSED_AT`.
     */
    closed_at?: TimeRange;
}

/**
 * Filtering criteria to use for a SearchOrders request. Multiple filters will be ANDed together.
 */
export class SearchOrdersFilter {
    /**
     * Filter by [`OrderState`](#type-orderstate).
     */
    state_filter?: SearchOrdersStateFilter;
    /**
     * Filter for results within a time range.
     * @note If you filter for orders by time range, you must set SearchOrdersSort to sort by the same field.
     * [Learn more about filtering orders by time range](/orders-api/manage-orders#important-note-on-filtering-orders-by-time-range).
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
    fulfillment_types: Array<FulfillmentType>;
    /**
     * List of [fulfillment states](#type-orderfulfillmentstate) to filter for.
     * Will return orders if any of its fulfillments match any of the fulfillment states listed in this field.
     * See [OrderFulfillmentState](#type-orderfulfillmentstate) for possible values.
     */
    fulfillment_states?: Array<FulfillmentStateType>;
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
     * The location IDs for the orders to query. All locations must belong to the same merchant.
     * Min: 1 location IDs. Max: 10 location IDs.
     */
    location_ids?: Array<string>;
    /**
     * A pagination cursor returned by a previous call to this endpoint.
     * Provide this to retrieve the next set of results for your original query.
     * See [Pagination](/basics/api101/pagination) for more information.
     */
    cursor?: string;
    /**
     * Query conditions used to filter or sort the results. Note that when fetching additional pages using a cursor,
     * the query must be equal to the query used to fetch the first page of results.
     */
    query?: SearchOrdersQuery;
    /**
     * Maximum number of results to be returned in a single page.
     * It is possible to receive fewer results than the specified limit on a given page. Default: `500`.
     */
    limit?: number;
    /**
     * Boolean that controls the format of the search results.
     * - If `true`, SearchOrders will return [`OrderEntry`](#type-orderentry) objects.
     * - If `false`, SearchOrders will return complete Order objects. Default: `false`.
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
     * Populated only if `return_entries` was set to `true` in the request.
     */
    order_entries?: Array<OrderEntry>;
    /**
     * List of [Order](#type-order) objects that match query conditions.
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
}

/**
 * Sorting criteria for a SearchOrders request. Results can only be sorted by a timestamp field.
 */
export class SearchOrdersSort {
    /**
     * The field to sort by.
     * @note When using a [DateTimeFilter](#type-searchordersfilter), `sort_field` must match the timestamp field that
     * the DateTimeFilter uses to filter. For example, If you set your `sort_field` to `CLOSED_AT` and you use a
     * DateTimeFilter, your DateTimeFilter must filter for orders by their `CLOSED_AT` date. If this field does not
     * match the timestamp field in `DateTimeFilter`, SearchOrders will return an error. Default: `CREATED_AT`.
     * See [SearchOrdersSortField](#type-searchorderssortfield) for possible values.
     */
    sort_field: 'CREATED_AT' | 'UPDATED_AT' | 'CLOSED_AT';
    /**
     * The chronological order in which results are returned. Defaults to `DESC`.
     * See [SortOrder](#type-sortorder) for possible values.
     */
    sort_order?: SortOrderType;
}

/**
 * Specifies which timestamp to use to sort SearchOrder results.
 */
export class SearchOrdersSortField {}

/**
 * Filter based on order `source` information.
 */
export class SearchOrdersSourceFilter {
    /**
     * Filters by [Source](#type-ordersource) `name`.
     * Will return any orders with with a `source.name` that matches any of the listed source names. Max: 10 source names.
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
    states: Array<OrderStateType>;
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
 * The response to a request for `Shift` objects.
 * Contains the requested `Shift` objects. May contain a set of `Error` objects if the request resulted in errors.
 */
export class SearchShiftsResponse {
    /**
     * Shifts.
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
 * A record of the hourly rate, start, and end times for a single work shift for an employee.
 * May include a record of the start and end times for breaks taken during the shift.
 */
export class Shift {
    /**
     * UUID for this object.
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
    status?: 'OPEN' | 'CLOSED';
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
    status?: 'OPEN' | 'CLOSED';
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

/**
 * Specifies the `status` of `Shift` records to be returned.
 */
export class ShiftFilterStatus {}

/**
 * The parameters of a `Shift` search query. Includes filter and sort options.
 */
export class ShiftQuery {
    /**
     * Query filter options.
     */
    filter?: ShiftFilter;
    /**
     * Sort order details.
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
    field?: 'START_AT' | 'END_AT' | 'CREATED_AT' | 'UPDATED_AT';
    /**
     * The order in which results are returned. Defaults to DESC. See [SortOrder](#type-sortorder) for possible values.
     */
    order?: SortOrderType;
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
    match_shifts_by?: 'START_AT' | 'END_AT' | 'INTERSECTION';
    /**
     * Location-specific timezones convert workdays to datetime filters.
     * Every location included in the query must have a timezone, or this field must be provided as a fallback.
     * Format: the IANA timezone database identifier for the relevant timezone.
     */
    default_timezone?: string;
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
    product?: ProductSourceType;
    /**
     * Read-only Square ID assigned to the application. Only used for [Product](#type-product) type `EXTERNAL_API`.
     */
    application_id?: string;
    /**
     * Read-only display name assigned to the application (e.g. "Custom Application", "Square POS 4.74 for Android").
     */
    name?: string;
}

/**
 * Contains the name and abbreviation for standard measurement unit.
 */
export class StandardUnitDescription {
    /**
     * Identifies the measurement unit being described.
     */
    unit?: MeasurementUnit;
    /**
     * Display name of the measurement unit. For example, 'Pound'.
     */
    name?: string;
    /**
     * Abbreviation for the measurement unit. For example, 'lb'.
     */
    abbreviation?: string;
}

/**
 * Group of standard measurement units.
 */
export class StandardUnitDescriptionGroup {
    /**
     * List of measurement units in this description group.
     */
    standard_unit_descriptions?: Array<StandardUnitDescription>;
    /**
     * IETF language tag.
     */
    language_code?: string;
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
     * The total amount of the tender, including `tip_money`. If the tender has a `payment_id`, the `total_money` of
     * the corresponding [Payment](#type-payment) will be equal to the `amount_money` of the tender.
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
    type: 'CARD' | 'CASH' | 'THIRD_PARTY_CARD' | 'SQUARE_GIFT_CARD' | 'NO_SALE' | 'OTHER';
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
    /**
     * The ID of the [Payment](#type-payment) that corresponds to this tender.
     * This value is only present for payments created with the v2 Payments API.
     */
    payment_id?: string;
}

/**
 * Represents additional details of a tender with `type` `CARD` or `SQUARE_GIFT_CARD`.
 */
export class TenderCardDetails {
    /**
     * The credit card payment's current state (such as `AUTHORIZED` or `CAPTURED`).
     * See [TenderCardDetailsStatus](#type-tendercarddetailsstatus) for possible values.
     */
    status?: 'AUTHORIZED' | 'CAPTURED' | 'VOIDED' | 'FAILED';
    /**
     * The credit card's non-confidential details.
     */
    card?: Card;
    /**
     * The method used to enter the card's details for the transaction.
     * See [TenderCardDetailsEntryMethod](#type-tendercarddetailsentrymethod) for possible values.
     */
    entry_method?: 'SWIPED' | 'KEYED' | 'EMV' | 'ON_FILE' | 'CONTACTLESS';
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
    product?: 'REGISTER' | 'EXTERNAL_API' | 'BILLING' | 'APPOINTMENTS' | 'INVOICES' | 'ONLINE_STORE' | 'PAYROLL' | 'OTHER';
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
 * Defines the fields that are included in requests to the [UpdateOrder](#endpoint-orders-updateorder) endpoint.
 */
export class UpdateOrderRequest {
    /**
     * The [sparse order](/orders-api/manage-orders#sparse-order-objects) containing only the fields to update and
     * the version the update is being applied to.
     */
    order?: Order;
    /**
     * The [dot notation paths](/orders-api/manage-orders#on-dot-notation) fields to clear.
     * For example, `line_items[uid].note` [Read more about Deleting fields](/orders-api/manage-orders#delete-fields).
     */
    fields_to_clear?: Array<string>;
    /**
     * A value you specify that uniquely identifies this update request ff you're unsure whether a particular
     * update was applied to an order successfully, you can reattempt it with the same idempotency key without
     * worrying about creating duplicate updates to the order. The latest order version will be returned.
     * See [Idempotency](/basics/api101/idempotency) for more information.
     */
    idempotency_key?: string;
}

/**
 * Defines the fields that are included in the response body of a request to the [UpdateOrder](#endpoint-orders-updateorder) endpoint.
 */
export class UpdateOrderResponse {
    /**
     * The updated Order.
     */
    order?: Order;
    /**
     * Any errors that occurred during the request.
     */
    errors?: Array<Error>;
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
 * The response to a request to update a `Shift`.
 * Contains the updated `Shift` object. May contain a set of `Error` objects if the request resulted in errors.
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
    adjustment_type?: string;
    /**
     * A note about the inventory adjustment.
     */
    memo?: string;
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
    type?: string;
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
    event_type?: string;
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

export class V1CashDrawerEventEventType {}

/**
 * Contains details for a single cash drawer shift.
 */
export class V1CashDrawerShift {
    /**
     * The shift's unique ID.
     */
    id?: string;
    /**
     * The shift's current state. See [V1CashDrawerShiftEventType](#type-v1cashdrawershifteventtype) for possible values.
     */
    event_type?: string;
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
     * A description of the cash drawer shift.
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
    type: string;
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

export class V1CreateRefundRequestType {}

export class V1CreateVariationRequest {
    /**
     * An object containing the fields to POST for the request.
     * See the corresponding object definition for field details.
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
    discount_type?: string;
    /**
     * Indicates whether a mobile staff member needs to enter their PIN to apply the discount to a payment.
     */
    pin_required?: boolean;
    /**
     * The color of the discount's display label in Square Register, if not the default color.
     * The default color is "9da2a6". See [V1DiscountColor](#type-v1discountcolor) for possible values.
     */
    color?: string;
    /**
     * The ID of the CatalogObject in the Connect v2 API. Objects that are shared across multiple locations share the same v2 ID.
     */
    v2_id?: string;
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
    status?: string;
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
    permissions: Array<string>;
    /**
     * If true, employees with this role have all permissions, regardless of the values indicated in permissions.
     */
    is_owner?: boolean;
    /**
     * The time when the employee entity was created, in ISO 8601 format. Is set by Square when the Role is created.
     */
    created_at?: string;
    /**
     * The time when the employee entity was most recently updated, in ISO 8601 format.
     * Is set by Square when the Role updated.
     */
    updated_at?: string;
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
    calculation_phase?: string;
    /**
     * The type of adjustment the fee applies to a payment. Currently, this value is TAX for all fees.
     * See [V1FeeAdjustmentType](#type-v1feeadjustmenttype) for possible values.
     */
    adjustment_type?: string;
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
    inclusion_type?: string;
    /**
     * In countries with multiple classifications for sales taxes, indicates which classification the fee falls under.
     * Currently relevant only to Canadian merchants. See [V1FeeType](#type-v1feetype) for possible values.
     */
    type?: string;
    /**
     * The ID of the CatalogObject in the Connect v2 API. Objects that are shared across multiple locations share the same v2 ID.
     */
    v2_id?: string;
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
    type?: string;
    /**
     * The color of the discount's display label in Square Register, if not the default color.
     * The default color is '9da2a6'. See [V1ItemColor](#type-v1itemcolor) for possible values.
     */
    color?: string;
    /**
     * The text of the item's display label in Square Register. Only up to the first five characters of the string are used.
     */
    abbreviation?: string;
    /**
     * Indicates whether the item is viewable from the merchant's online store (PUBLIC) or PRIVATE.
     * See [V1ItemVisibility](#type-v1itemvisibility) for possible values.
     */
    visibility?: string;
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
    order?: string;
    /**
     * The beginning of the requested reporting period, in ISO 8601 format. Default value: The current time minus 90 days.
     */
    begin_time?: string;
    /**
     * The beginning of the requested reporting period, in ISO 8601 format. Default value: The current time.
     */
    end_time?: string;
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
    order?: string;
    /**
     * The maximum integer number of employee entities to return in a single response. Default 100, maximum 200.
     */
    limit?: number;
    /**
     * A pagination cursor to retrieve the next set of results for your original query to the endpoint.
     */
    batch_token?: string;
}

export class V1ListEmployeeRolesResponse {
    items?: Array<V1EmployeeRole>;
}

export class V1ListEmployeesRequest {
    /**
     * The order in which employees are listed in the response, based on their created_at field.
     * Default value: ASC See [SortOrder](#type-sortorder) for possible values.
     */
    order?: string;
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
    status?: string;
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
     * The order in which payments are listed in the response. See [SortOrder](#type-sortorder) for possible values.
     */
    order?: string;
    /**
     * The maximum number of payments to return in a single response. This value cannot exceed 200.
     */
    limit?: number;
    /**
     * A pagination cursor to retrieve the next set of results for your original query to the endpoint.
     */
    batch_token?: string;
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
     * The order in which payments are listed in the response. See [SortOrder](#type-sortorder) for possible values.
     */
    order?: string;
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

export class V1ListPaymentsResponse {
    items?: Array<V1Payment>;
}

export class V1ListRefundsRequest {
    /**
     * TThe order in which payments are listed in the response. See [SortOrder](#type-sortorder) for possible values
     */
    order?: string;
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

export class V1ListRefundsResponse {
    items?: Array<V1Refund>;
}

export class V1ListSettlementsRequest {
    /**
     * The order in which payments are listed in the response. See [SortOrder](#type-sortorder) for possible values.
     */
    order?: string;
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
     * See [V1ListSettlementsRequestStatus](#type-v1listsettlementsrequeststatus) for possible values.
     */
    status?: string;
    /**
     * A pagination cursor to retrieve the next set of results for your original query to the endpoint.
     */
    batch_token?: string;
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
    order?: string;
    /**
     * If provided, the endpoint returns only timecards for the employee with the specified ID.
     */
    employee_id?: string;
    /**
     * If filtering results by their clockin_time field, the beginning of the requested reporting period, in ISO 8601 format.
     */
    begin_clockin_time?: string;
    /**
     * If filtering results by their clockin_time field, the end of the requested reporting period, in ISO 8601 format.
     */
    end_clockin_time?: string;
    /**
     * If filtering results by their clockout_time field, the beginning of the requested reporting period, in ISO 8601 format.
     */
    begin_clockout_time?: string;
    /**
     * If filtering results by their clockout_time field, the end of the requested reporting period, in ISO 8601 format.
     */
    end_clockout_time?: string;
    /**
     * If filtering results by their updated_at field, the beginning of the requested reporting period, in ISO 8601 format.
     */
    begin_updated_at?: string;
    /**
     * If filtering results by their updated_at field, the end of the requested reporting period, in ISO 8601 format.
     */
    end_updated_at?: string;
    /**
     * If true, only deleted timecards are returned. If false, only valid timecards are returned.
     * If you don't provide this parameter, both valid and deleted timecards are returned.
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
     * (BUSINESS). This value is almost always LOCATION.
     * See [V1MerchantAccountType](#type-v1merchantaccounttype) for possible values.
     */
    account_type?: string;
    /**
     * Capabilities that are enabled for the merchant's Square account.
     * Capabilities that are not listed in this array are not enabled for the account.
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
     * The type of business operated by the merchant.
     * See [V1MerchantBusinessType](#type-v1merchantbusinesstype) for possible values.
     */
    business_type?: string;
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
    selection_type?: string;
    /**
     * The options included in the modifier list.
     */
    modifier_options?: Array<V1ModifierOption>;
    /**
     * The ID of the CatalogObject in the Connect v2 API. Objects that are shared across multiple locations share the same v2 ID.
     */
    v2_id?: string;
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
     * The ID of the CatalogObject in the Connect v2 API.
     * Objects that are shared across multiple locations share the same v2 ID.
     */
    v2_id?: string;
}

export class V1Money {
    /**
     * Amount in the lowest denominated value of this Currency.
     * E.g. in USD these are cents, in JPY they are Yen (which do not have a 'cent' concept).
     */
    amount?: number;
    /**
     * See [Currency](#type-currency) for possible values.
     */
    currency_code?: string;
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
    state?: string;
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

/**
 * V1OrderHistoryEntry
 */
export class V1OrderHistoryEntry {
    /**
     * The type of action performed on the order.
     * See [V1OrderHistoryEntryAction](#type-v1orderhistoryentryaction) for possible values.
     */
    action?: string;
    /**
     * The time when the action was performed, in ISO 8601 format.
     */
    created_at?: string;
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
     * The type of entity represented in the cell (ITEM, DISCOUNT, CATEGORY, or PLACEHOLDER).
     * See [V1PageCellObjectType](#type-v1pagecellobjecttype) for possible values.
     */
    object_type?: string;
    /**
     * The unique identifier of the entity represented in the cell.
     * Not present for cells with an object_type of PLACEHOLDER.
     */
    object_id?: string;
    /**
     * For a cell with an object_type of PLACEHOLDER, this value indicates the cell's special behavior. See
     * [V1PageCellPlaceholderType](#type-v1pagecellplaceholdertype) for possible values
     */
    placeholder_type?: string;
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
     * The total of all taxes applied to the payment.
     * This is always the sum of inclusive_tax_money and additive_tax_money.
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
 * information included in a `Payment` object reflects details collected **at the time of the payment**.
 * Details such as the name or price of items might have changed since the payment was processed.
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
    itemization_type?: string;
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
    type?: string;
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
     * Whether the tax is an ADDITIVE tax or an INCLUSIVE tax.
     * See [V1PaymentTaxInclusionType](#type-v1paymenttaxinclusiontype) for possible values.
     */
    inclusion_type?: string;
    /**
     * The ID of the tax, if available. Taxes applied in older versions of Square Register might not have an ID.
     */
    fee_id?: string;
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
     * The type of refund. See [V1RefundType](#type-v1refundtype) for possible values.
     */
    type?: string;
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
     * (is_exchange == true), payment_id is the ID of the original payment ID even if the payment includes other tenders.
     */
    payment_id?: string;

    merchant_id?: string;
    /**
     * Indicates whether or not the refund is associated with an exchange. If is_exchange is true, the refund reflects
     * the value of goods returned in the exchange not the total money refunded.
     */
    is_exchange?: boolean;
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
     * The settlement's current status. See [V1SettlementStatus](#type-v1settlementstatus) for possible values.
     */
    status?: string;
    /**
     * The amount of money involved in the settlement.
     * A positive amount indicates a deposit, and a negative amount indicates a withdrawal. This amount is never zero.
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

/**
 * V1SettlementEntry
 */
export class V1SettlementEntry {
    /**
     * The settlement's unique identifier.
     */
    payment_id?: string;
    /**
     * The settlement's current status. See [V1SettlementEntryType](#type-v1settlemententrytype) for possible values.
     */
    type?: string;
    /**
     * The total amount of money this entry contributes to the total settlement amount.
     */
    amount_money?: V1Money;
    /**
     * The amount of all Square fees associated with this settlement entry. This value is always negative or zero.
     */
    fee_money?: V1Money;
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
    type?: string;
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
    card_brand?: string;
    /**
     * The last four digits of the provided credit card's account number.
     */
    pan_suffix?: string;
    /**
     * The tender's unique ID. See [V1TenderEntryMethod](#type-v1tenderentrymethod) for possible values.
     */
    entry_method?: string;
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
     * The ID of the timecard to list events for.
     * See [V1TimecardEventEventType](#type-v1timecardeventeventtype) for possible values.
     */
    event_type?: string;
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

/**
 * Actions that resulted in a change to a timecard.
 * All timecard events created with the Connect API have an event type that begins with `API`.
 */
export class V1TimecardEventEventType {}

export class V1UpdateCategoryRequest {
    /**
     * An object containing the fields to POST for the request.
     * See the corresponding object definition for field details.
     */
    body: V1Category;
}

export class V1UpdateDiscountRequest {
    /**
     * An object containing the fields to POST for the request.
     * See the corresponding object definition for field details.
     */
    body: V1Discount;
}

export class V1UpdateEmployeeRequest {
    /**
     * An object containing the fields to POST for the request.
     * See the corresponding object definition for field details.
     */
    body: V1Employee;
}

export class V1UpdateEmployeeRoleRequest {
    /**
     * An object containing the fields to POST for the request.
     * See the corresponding object definition for field details.
     */
    body: V1EmployeeRole;
}

export class V1UpdateFeeRequest {
    /**
     * An object containing the fields to POST for the request.
     * See the corresponding object definition for field details.
     */
    body: V1Fee;
}

export class V1UpdateItemRequest {
    /**
     * An object containing the fields to POST for the request.
     * See the corresponding object definition for field details.
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
     * Indicates whether multiple options from the modifier list can be applied to a single item.
     * See [V1UpdateModifierListRequestSelectionType](#type-v1updatemodifierlistrequestselectiontype) for possible values.
     */
    selection_type?: string;
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
     * The action to perform on the order (COMPLETE, CANCEL, or REFUND).
     * See [V1UpdateOrderRequestAction](#type-v1updateorderrequestaction) for possible values.
     */
    action: string;
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
     * Indicates the variation's list position when displayed in Square Register and the merchant dashboard.
     * If more than one variation for the same item has the same ordinal value, those variations are displayed in
     * alphabetical order
     */
    ordinal?: number;
    /**
     * Indicates whether the item variation's price is fixed or determined at the time of sale.
     * See [V1VariationPricingType](#type-v1variationpricingtype) for possible values.
     */
    pricing_type?: string;
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
    inventory_alert_type?: string;
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

export class V1VariationInventoryAlertType {}

export class V1VariationPricingType {}

/**
 * Defines the request body for calls to the VoidTransaction endpoint.
 */
export class VoidTransactionRequest {}

/**
 * Defines the fields that are included in the response body of a request to the [VoidTransaction](#endpoint-voidtransaction) endpoint.
 */
export class VoidTransactionResponse {
    /**
     * Any errors that occurred during the request.
     */
    errors?: Array<Error>;
}

/**
 * The type of an event that triggers a webhook notification to an application.
 */
export class WebhookEvents {}

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
    start_of_week: DayOfWeekType;
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

/**
 * Manages low level client-server communications, parameter marshalling, etc. There should not be any need for an
 * application to use this class directly - the *Api and model classes provide the public API for the service. The
 * contents of this file should be regarded as internal but are documented for completeness.
 */
export class ApiClient {
    /**
     * The base URL against which to resolve every API call's (relative) path.
     */
    basePath: string;

    /**
     * The authentication methods to be included for all API calls.
     */
    authentications: {
        oauth2: {
            type: string;
            accessToken: string;
        }
        oauth2ClientSecret: {
            type: string;
            in: string;
            name: string;
        }
    };

    /**
     * The default HTTP headers to be included for all API calls.
     */
    defaultHeaders: {[key: string]: string};

    /**
     *  The default HTTP timeout for all API calls.
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

    /**
     * The default API client implementation.
     */
    static instance: ApiClient;
}

export class ApplePayApi {
    /**
     * Constructs a new ApplePayApi.
     * @param apiClient Optional API client implementation to use, default to ApiClient.instance if unspecified.
     */
    constructor(apiClient?: ApiClient);
    /**
     * Activates a domain for use with Web Apple Pay and Square.
     * A validation will be performed on this domain by Apple to ensure is it properly set up as an Apple Pay enabled domain.
     * This endpoint provides an easy way for platform developers to bulk activate Web Apple Pay with Square for merchants using
     * their platform. To learn more about Apple Pay on Web see the Apple Pay section in
     * the [Embedding the Square Payment Form](/payment-form/add-digital-wallets/apple-pay) guide.
     */
    registerDomain(...args: Array<any>): Promise<RegisterDomainResponse>;
}

export class CatalogApi {
    /**
     * Constructs a new CatalogApi.
     * @param apiClient Optional API client implementation to use, default to ApiClient.instance if unspecified.
     */
    constructor(apiClient?: ApiClient);
    /**
     * Returns a list of [CatalogObject](#type-catalogobject)s that includes all objects of a set of desired types
     * (for example, all [CatalogItem](#type-catalogitem) and [CatalogTax](#type-catalogtax) objects) in the catalog.
     * The `types` parameter is specified as a comma-separated list of valid [CatalogObject](#type-catalogobject)
     * types: `ITEM`, `ITEM_VARIATION`, `MODIFIER`, `MODIFIER_LIST`, `CATEGORY`, `DISCOUNT`, `TAX`.
     * @note ListCatalog does not return deleted catalog items. To retrieve deleted catalog items, use SearchCatalogObjects
     * and set `include_deleted_objects` to `true`.
     */
    batchDeleteCatalogObjects(...args: Array<any>): Promise<BatchDeleteCatalogObjectsResponse>;
    /**
     * Returns a set of objects based on the provided ID. Each [CatalogItem](#type-catalogitem) returned in the set includes all of
     * its child information including: all of its [CatalogItemVariation](#type-catalogitemvariation) objects, references to its
     * [CatalogModifierList](#type-catalogmodifierlist) objects, and the ids of any [CatalogTax](#type-catalogtax) objects that apply to it.
     */
    batchRetrieveCatalogObjects(...args: Array<any>): Promise<BatchRetrieveCatalogObjectsResponse>;
    /**
     * Creates or updates up to 10,000 target objects based on the provided list of objects. The target objects are grouped into
     * batches and each batch is inserted/updated in an all-or-nothing manner. If an object within a batch is malformed in some way,
     * or violates a database constraint, the entire batch containing that item will be disregarded. However, other batches in
     * the same request may still succeed. Each batch may contain up to 1,000 objects, and batches will be processed in order as long
     * as the total object count for the request (items, variations, modifier lists, discounts, and taxes) is no more than 10,000.
     */
    batchUpsertCatalogObjects(...args: Array<any>): Promise<BatchUpsertCatalogObjectsResponse>;
    /**
     * Returns information about the Square Catalog API, such as batch size limits for `BatchUpsertCatalogObjects`.
     */
    catalogInfo(...args: Array<any>): Promise<CatalogInfoResponse>;
    /**
     * Deletes a single [CatalogObject](#type-catalogobject) based on the provided ID and returns the set of successfully deleted
     * IDs in the response. Deletion is a cascading event such that all children of the targeted object are also deleted.
     * For example, deleting a [CatalogItem](#type-catalogitem) will also delete all of its
     * [CatalogItemVariation](#type-catalogitemvariation) children.
     */
    deleteCatalogObject(...args: Array<any>): Promise<DeleteCatalogObjectResponse>;
    /**
     * Returns a list of [CatalogObject](#type-catalogobject)s that includes all objects of a set of desired types
     * (for example, all [CatalogItem](#type-catalogitem) and [CatalogTax](#type-catalogtax) objects) in the catalog.
     * The types parameter is specified as a comma-separated list of valid [CatalogObject](#type-catalogobject)
     * types: `ITEM`, `ITEM_VARIATION`, `MODIFIER`, `MODIFIER_LIST`, `CATEGORY`, `DISCOUNT`, `TAX`.
     */
    listCatalog(...args: Array<any>): Promise<ListCatalogResponse>;
    /**
     * Returns a single [CatalogItem](#type-catalogitem) as a [CatalogObject](#type-catalogobject) based on the provided ID.
     * The returned object includes all of the relevant [CatalogItem](#type-catalogitem) information including:
     * [CatalogItemVariation](#type-catalogitemvariation) children, references to its [CatalogModifierList](#type-catalogmodifierlist)
     * objects, and the ids of any [CatalogTax](#type-catalogtax) objects that apply to it.
     */
    retrieveCatalogObject(...args: Array<any>): Promise<RetrieveCatalogObjectResponse>;
    /**
     * Queries the targeted catalog using a variety of query types: [CatalogQuerySortedAttribute](#type-catalogquerysortedattribute),
     * [CatalogQueryExact](#type-catalogqueryexact), [CatalogQueryRange](#type-catalogqueryrange),
     * [CatalogQueryText](#type-catalogquerytext), [CatalogQueryItemsForTax](#type-catalogqueryitemsfortax),
     * and [CatalogQueryItemsForModifierList](#type-catalogqueryitemsformodifierlist).
     */
    searchCatalogObjects(...args: Array<any>): Promise<SearchCatalogObjectsResponse>;
    /**
     * Updates the [CatalogModifierList](#type-catalogmodifierlist) objects that apply to the targeted
     * [CatalogItem](#type-catalogitem) without having to perform an upsert on the entire item.
     */
    updateItemModifierLists(...args: Array<any>): Promise<UpdateItemModifierListsResponse>;
    /**
     * Updates the [CatalogTax](#type-catalogtax) objects that apply to the targeted [CatalogItem](#type-catalogitem)
     * without having to perform an upsert on the entire item.
     */
    updateItemTaxes(...args: Array<any>): Promise<UpdateItemTaxesResponse>;
    /**
     * Creates or updates the target [CatalogObject](#type-catalogobject).
     */
    upsertCatalogObject(...args: Array<any>): Promise<UpsertCatalogObjectResponse>;
}

export class CheckoutApi {
    /**
     * Constructs a new CheckoutApi.
     * @param apiClient Optional API client implementation to use, default to ApiClient.instance if unspecified.
     */
    constructor(apiClient?: ApiClient);
    /**
     * Links a `checkoutId` to a `checkout_page_url` that customers will be directed to in order to provide their payment
     * information using a payment processing workflow hosted on connect.squareup.com.
     */
    createCheckout(locationId: string, body: CreateCheckoutRequest): Promise<CreateCheckoutResponse>;
}

export class CustomersApi {
    /**
     * Constructs a new CustomersApi.
     * @param apiClient Optional API client implementation to use, default to ApiClient.instance if unspecified.
     */
    constructor(apiClient?: ApiClient);
    /**
     * Creates a new customer for a business, which can have associated cards on file. You must provide at least one of the
     * following values in your request to this endpoint: `given_name`. `family_name`, `company_name`, `email_address`,`phone_number`.
     */
    createCustomer(body: CreateCustomerRequest): Promise<CreateCustomerResponse>;
    /**
     * Adds a card on file to an existing customer. As with charges, calls to `CreateCustomerCard` are idempotent.
     * Multiple calls with the same card nonce return the same card record that was created with the provided nonce during the
     * _first_ call. Cards on file are automatically updated on a monthly basis to confirm they are still valid and can be charged.
     */
    createCustomerCard(customerId: string, body: CreateCustomerCardRequest): Promise<CreateCustomerCardResponse>;
    /**
     * Deletes a customer from a business, along with any linked cards on file.
     * When two profiles are merged into a single profile, that profile is assigned a new `customer_id`.
     * You must use the new `customer_id` to delete merged profiles.
     */
    deleteCustomer(...args: Array<any>): Promise<DeleteCustomerResponse>;
    /**
     * Removes a card on file from a customer.
     */
    deleteCustomerCard(customerId: string, cardId: string): Promise<DeleteCustomerCardResponse>;
    /**
     * Lists a business's customers.
     */
    listCustomers(...args: Array<any>): Promise<ListCustomersResponse>;
    /**
     * Returns details for a single customer.
     */
    retrieveCustomer(customerId: string): Promise<RetrieveCustomerResponse>;
    /**
     * Searches the customer profiles associated with a Square account.
     * Calling SearchCustomers without an explicit query parameter returns all customer profiles ordered alphabetically based
     * on `given_name` and `family_name`.
     */
    searchCustomers(...args: Array<any>): Promise<SearchCustomersResponse>;
    /**
     * Updates the details of an existing customer. When two profiles are merged into a single profile, that profile is assigned
     * a new `customer_id`. You must use the new `customer_id` to update merged profiles.
     * You cannot edit a customer's cards on file with this endpoint. To make changes to a card on file, you must delete the
     * existing card on file with the [DeleteCustomerCard](#endpoint-customers-deletecustomercard) endpoint, then create a
     * new one with the [CreateCustomerCard](#endpoint-customers-createcustomercard) endpoint.
     */
    updateCustomer(...args: Array<any>): Promise<UpdateCustomerResponse>;
}

export class EmployeesApi {
    /**
     * Constructs a new EmployeesApi.
     * @param apiClient Optional API client implementation to use, default to ApiClient.instance if unspecified.
     */
    constructor(apiClient?: ApiClient);
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
     * Constructs a new InventoryApi.
     * @param apiClient Optional API client implementation to use, default to ApiClient.instance if unspecified.
     */
    constructor(apiClient?: ApiClient);
    /**
     * Applies adjustments and counts to the provided item quantities.
     * On success: returns the current calculated counts for all objects referenced in the request.
     * On failure: returns a list of related errors.
     */
    batchChangeInventory(...args: Array<any>): Promise<BatchChangeInventoryResponse>;
    /**
     * Returns historical physical counts and adjustments based on the provided filter criteria.
     * Results are paginated and sorted in ascending order according their `occurred_at` timestamp (oldest first).
     * BatchRetrieveInventoryChanges is a catch-all query endpoint for queries that cannot be handled by other, simpler endpoints.
     */
    batchRetrieveInventoryChanges(...args: Array<any>): Promise<BatchRetrieveInventoryChangesResponse>;
    /**
     * Returns current counts for the provided [CatalogObject](#type-catalogobject)s at the requested [Location](#type-location)s.
     * Results are paginated and sorted in descending order according to their `calculated_at` timestamp (newest first).
     * When `updated_after` is specified, only counts that have changed since that time (based on the server timestamp for
     * the most recent change) are returned. This allows clients to perform a "sync" operation, for example in response to
     * receiving a Webhook notification.
     */
    batchRetrieveInventoryCounts(...args: Array<any>): Promise<BatchRetrieveInventoryCountsResponse>;
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

export class LaborApi {
    /**
     * Constructs a new LaborApi.
     * @param apiClient Optional API client implementation to use, default to ApiClient.instance if unspecified.
     */
    constructor(apiClient?: ApiClient);
    /**
     * Creates a new `BreakType`. A `BreakType` is a template for creating `Break` objects.
     * You must provide the following values in your request to this endpoint:
     * - `location_id` - `break_name` - `expected_duration` - `is_paid`
     * You can only have 3 `BreakType` instances per location. If you attempt to add a 4th `BreakType` for a location,
     * an `INVALID_REQUEST_ERROR` "Exceeded limit of 3 breaks per location." is returned.
     */
    createBreakType(...args: Array<any>): Promise<CreateBreakTypeResponse>;
    /**
     * Creates a new `Shift`. A `Shift` represents a complete work day for a single employee.
     * You must provide the following values in your request to this endpoint:
     * - `location_id` - `employee_id` - `start_at`
     * An attempt to create a new `Shift` can result in a `BAD_REQUEST` error when: - The `status` of the new `Shift`
     * is `OPEN` and the employee has another shift with an `OPEN` status. - The `start_at` date is in the future - the
     * `start_at` or `end_at` overlaps another shift for the same employee - If `Break`s are set in the request, a break
     * `start_at` must not be before the `Shift.start_at`. A break `end_at` must not be after the `Shift.end_at`.
     */
    createShift(...args: Array<any>): Promise<CreateShiftResponse>;
    /**
     * Deletes an existing `BreakType`. A `BreakType` can be deleted even if it is referenced from a `Shift`.
     */
    deleteBreakType(...args: Array<any>): Promise<DeleteBreakTypeResponse>;
    /**
     * Deletes a `Shift`.
     */
    deleteShift(...args: Array<any>): Promise<DeleteShiftResponse>;
    /**
     * Returns a single `BreakType` specified by id.
     */
    getBreakType(...args: Array<any>): Promise<GetBreakTypeResponse>;
    /**
     * Returns a single `EmployeeWage` specified by id.
     */
    getEmployeeWage(...args: Array<any>): Promise<GetEmployeeWageResponse>;
    /**
     * Returns a single `Shift` specified by id.
     */
    getShift(...args: Array<any>): Promise<GetShiftResponse>;
    /**
     * Returns a paginated list of `BreakType` instances for a business.
     */
    listBreakTypes(...args: Array<any>): Promise<ListBreakTypesResponse>;
    /**
     * Returns a paginated list of `EmployeeWage` instances for a business.
     */
    listEmployeeWages(...args: Array<any>): Promise<ListEmployeeWagesResponse>;
    /**
     * Returns a list of `WorkweekConfig` instances for a business.
     */
    listWorkweekConfigs(...args: Array<any>): Promise<ListWorkweekConfigsResponse>;
    /**
     * Returns a paginated list of `Shift` records for a business.
     * The list to be returned can be filtered by: - Location IDs **and** - employee IDs **and** - shift
     * status (`OPEN`, `CLOSED`) **and** - shift start **and** - shift end **and** - work day details.
     * The list can be sorted by: - `start_at` - `end_at` - `created_at` - `updated_at`.
     */
    searchShifts(...args: Array<any>): Promise<SearchShiftsResponse>;
    /**
     * Updates an existing `BreakType`.
     */
    updateBreakType(...args: Array<any>): Promise<UpdateBreakTypeResponse>;
    /**
     * Updates an existing `Shift`. When adding a `Break` to a `Shift`, any earlier `Breaks` in the `Shift` have
     * the `end_at` property set to a valid RFC-3339 datetime string. When closing a `Shift`, all `Break` instances
     * in the shift must be complete with `end_at` set on each `Break`.
     */
    updateShift(...args: Array<any>): Promise<UpdateShiftResponse>;
    /**
     * Updates a `WorkweekConfig`.
     */
    updateWorkweekConfig(...args: Array<any>): Promise<UpdateWorkweekConfigResponse>;
}

export class LocationsApi {
    /**
     * Constructs a new LocationsApi.
     * @param apiClient Optional API client implementation to use, default to {@link module:ApiClient#instance} if unspecified.
     */
    constructor(apiClient?: ApiClient);
    /**
     * Provides the details for all of a business's locations.
     * Most other Connect API endpoints have a required `location_id` path parameter. The `id` field of the
     * [`Location`](#type-location) objects returned by this endpoint correspond to that `location_id` parameter.
     */
    listLocations(): Promise<ListLocationsResponse>;
}

export class MobileAuthorizationApi {
    /**
     * Constructs a new MobileAuthorizationApi.
     * @param apiClient Optional API client implementation to use, default to ApiClient.instance if unspecified.
     */
    constructor(apiClient?: ApiClient);
    /**
     * Generates code to authorize a mobile application to connect to a Square card reader Authorization codes are
     * one-time-use and expire __60 minutes__ after being issued.
     * @note The `Authorization` header you provide to this endpoint must have the following format:
     * `Authorization: Bearer ACCESS_TOKEN` Replace `ACCESS_TOKEN` with a [valid production authorization credential]
     * @link https://docs.connect.squareup.com/get-started#step-4-understand-the-different-application-credentials
     */
    createMobileAuthorizationCode(body: CreateMobileAuthorizationCodeRequest): Promise<CreateMobileAuthorizationCodeResponse>;
}

export class OAuthApi {
    /**
     * Constructs a new OAuthApi.
     * @param apiClient Optional API client implementation to use, default to ApiClient.instance if unspecified.
     */
    constructor(apiClient?: ApiClient);
    /**
     * Returns an OAuth access token. The endpoint supports distinct methods of obtaining OAuth access tokens.
     * Applications specify a method by adding the `grant_type` parameter  in the request and also provide relevant information.
     * For more information, see [OAuth access token management](/authz/oauth/how-it-works#oauth-access-token-management).
     * @note Regardless of the method application specified, the endpoint always returns two items; an OAuth access token and
     * a refresh token in the response. __OAuth tokens should only live on secure servers. Application clients should never
     * interact directly with OAuth tokens__.
     */
    obtainToken(body: ObtainTokenRequest): Promise<ObtainTokenResponse>;
    /**
     * `RenewToken` is deprecated. For information about refreshing OAuth access tokens,
     * see [Renew OAuth Token](https://developer.squareup.com/docs/oauth-api/cookbook/renew-oauth-tokens).
     * Renews an OAuth access token before it expires. OAuth access tokens besides your application's personal access
     * token expire after __30 days__. You can also renew expired tokens within __15 days__ of their expiration.
     * You cannot renew an access token that has been expired for more than 15 days. Instead, the associated user
     * must re-complete the OAuth flow from the beginning.
     * @note The `Authorization` header for this endpoint must have the following format:
     * ``` Authorization: Client APPLICATION_SECRET ```  Replace `APPLICATION_SECRET`
     * with the application secret on the Credentials page in the [application dashboard](https://connect.squareup.com/apps).
     */
    renewToken(clientId: string, body: RenewTokenRequest): Promise<RenewTokenResponse>;
    /**
     * Revokes an access token generated with the OAuth flow. If an account has more than one OAuth access token for
     * your application, this endpoint revokes all of them, regardless of which token you specify. When an OAuth access
     * token is revoked, all of the active subscriptions associated with that OAuth token are canceled immediately.
     * @note The `Authorization` header for this endpoint must have the following format:
     * ``` Authorization: Client APPLICATION_SECRET ```  Replace `APPLICATION_SECRET` with the application secret on the
     * Credentials page in the [application dashboard](https://connect.squareup.com/apps).
     */
    revokeToken(body: RevokeTokenRequest): Promise<RevokeTokenResponse>;
}

export class OrdersApi {
    /**
     * Constructs a new OrdersApi.
     * @param apiClient Optional API client implementation to use, default to ApiClient.instance if unspecified.
     */
    constructor(apiClient?: ApiClient);
    /**
     * Retrieves a set of [Order](#type-order)s by their IDs.
     * If a given Order ID does not exist, the ID is ignored instead of generating an error.
     */
    batchRetrieveOrders(locationId: string, params: BatchRetrieveOrdersRequest): Promise<BatchRetrieveOrdersResponse>;
    /**
     * Creates an [Order](#type-order) that can then be referenced as `order_id` in a request to the [Charge](#endpoint-charge)
     * endpoint. Orders specify products for purchase, along with discounts, taxes, and other settings to apply to the purchase.
     * To associate a created order with a request to the Charge endpoint, provide the order's `id` in the `order_id` field of
     * your request. You cannot modify an order after you create it. If you need to modify an order, instead create a new order
     * with modified details. To learn more about the Orders API, see the [Orders API Overview](/products/orders/overview).
     */
    createOrder(locationId: string, params: CreateOrderRequest): Promise<CreateOrderResponse>;
    /**
     * Pay for an [order](#type-order) using one or more approved [payments](#type-payment), or settle an order with a total of `0`.
     * The total of the `payment_ids` listed in the request must be equal to the order total. Orders with a total amount
     * of `0` can be marked as paid by specifying an empty array of `payment_ids` in the request. To be used with PayOrder,
     * a payment must: - Reference the order by specifying the `order_id` when [creating the payment](#endpoint-payments-createpayment).
     * Any approved payments that reference the same `order_id` not specified in the `payment_ids` will be canceled.
     * - Be approved with [delayed capture](/payments-api/take-payments#delayed-capture). Using a delayed capture payment
     * with PayOrder will complete the approved payment. Learn how to [pay for orders with a single payment using the
     * Payments API](/orders-api/pay-for-orders).
     */
    payOrder(orderId: string, body: PayOrderRequest): Promise<PayOrderResponse>;
    /**
     * Search all orders for one or more locations. Orders include all sales, returns, and exchanges regardless of how
     * or when they entered the Square Ecosystem (e.g. Point of Sale, Invoices, Connect APIs, etc). SearchOrders requests
     * need to specify which locations to search and define a [`SearchOrdersQuery`](#type-searchordersquery) object which
     * controls how to sort or filter the results. Your SearchOrdersQuery can: Set filter criteria. Set sort order.
     * Determine whether to return results as complete Order objects, or as [OrderEntry](#type-orderentry) objects.
     * Note that details for orders processed with Square Point of Sale while in offline mode may not be transmitted to
     * Square for up to 72 hours. Offline orders have a `created_at` value that reflects the time the order was created,
     * not the time it was subsequently transmitted to Square.
     */
    searchOrders(body: SearchOrdersRequest): Promise<SearchOrdersResponse>;
    /**
     * Updates an open [Order](#type-order) by adding, replacing, or deleting fields. Orders with a `COMPLETED` or `CANCELED`
     * state cannot be updated. An UpdateOrder request requires the following:
     * - The `order_id` in the endpoint path, identifying the order to update.
     * - The latest `version` of the order to update.
     * - The [sparse order](/orders-api/manage-orders#sparse-order-objects) containing only the fields to update and the version the update is being applied to.
     * - If deleting fields, the [dot notation paths](/orders-api/manage-orders#on-dot-notation) identifying fields to clear.
     * To pay for an order, please refer to the [Pay for Orders](/orders-api/pay-for-orders) guide.
     * To learn more about the Orders API, see the [Orders API Overview](/orders-api/what-it-does).
     */
    updateOrder(body: UpdateOrderRequest): Promise<UpdateOrderResponse>;
}

export class PaymentsApi {
    /**
     * Constructs a new PaymentsApi.
     * @param apiClient Optional API client implementation to use, default to ApiClient.instance if unspecified.
     */
    constructor(apiClient?: ApiClient);
    /**
     * Cancels a payment. If you set `autocomplete` to false when creating a payment, you can cancel the payment using
     * this endpoint. For more information, see [Delayed Payments](/payments-api/take-payments#delayed-payments).
     */
    cancelPayment(paymentId: string): Promise<CancelPaymentResponse>;
    /**
     * Cancels a payment identified by the idenpotency key that is specified the request. Use this method when status
     * of a CreatePayment request is unknown. For example, after you send a CreatePayment request a network error occurs
     * and you don't get a response. In this case, you can direct Square to cancel the payment using this endpoint.
     * In the request, you provide the same idempotency key that you provided in your CreatePayment request you want to cancel.
     * After cancelling the payment, you can submit your CreatePayment request again. Note that if no payment with the
     * specified idempotency key is found, no action is taken, the end  point returns successfully.
     */
    cancelPaymentByIdempotencyKey(body: CancelPaymentByIdempotencyKeyRequest): Promise<CancelPaymentByIdempotencyKeyResponse>;
    /**
     * Completes a payment. By default, payments are set to complete immediately after they are created.
     * If you set autocomplete to false when creating a payment, you can complete the payment using this endpoint.
     * For more information, see [Delayed Payments](/payments-api/take-payments#delayed-payments).
     */
    completePayment(paymentId: string): Promise<CompletePaymentResponse>;
    /**
     * Charges a payment source, for example, a card represented by customer's card on file or a card nonce.
     * In addition to the payment source, the request must also include the amount to accept for the payment.
     * There are several optional parameters that you can include in the request.
     * For example, tip money, whether to autocomplete the payment, or a reference ID to correlate this payment with
     * another system. For more information about these  payment options, see [Take Payments](/payments-api/take-payments).
     * The `PAYMENTS_WRITE_ADDITIONAL_RECIPIENTS` OAuth permission is required to enable application fees.
     */
    createPayment(body: CreatePaymentRequest): Promise<CreatePaymentResponse>;
    /**
     * Retrieves details for a specific Payment.
     */
    getPayment(paymentId: string): Promise<GetPaymentResponse>;
    /**
     * Retrieves a list of payments taken by the account making the request. Max results per page: 100.
     */
    listPayments(params: ListPaymentsRequest): Promise<ListPaymentsResponse>;
}

export class RefundsApi {
    /**
     * Constructs a new RefundsApi.
     * @param apiClient Optional API client implementation to use, default to ApiClient.instance if unspecified.
     */
    constructor(apiClient?: ApiClient);
    /**
     * Retrieves a specific `Refund` using the `refund_id`.
     */
    getPaymentRefund(refundId: string): Promise<GetPaymentRefundResponse>;
    /**
     * Retrieves a list of refunds for the account making the request. Max results per page: 100.
     */
    listPaymentRefunds(params: ListPaymentRefundsRequest): Promise<ListPaymentRefundsResponse>;
    /**
     * Refunds a payment. You can refund the entire payment amount or a  portion of it.
     * For more information, see [Payments and Refunds Overview](/payments-api/overview).
     */
    refundPayment(body: RefundPaymentRequest): Promise<RefundPaymentResponse>;
}

// @todo describe methods
export class ReportingApi {}

export class TransactionsApi {
    /**
     * Constructs a new TransactionsApi.
     * @param apiClient Optional API client implementation to use, default to ApiClient.instance if unspecified.
     */
    constructor(apiClient?: ApiClient);

    /**
     * Captures a transaction that was created with the [Charge](#endpoint-transactions-charge) endpoint with a `delay_capture` value of `true`.
     * See the [Delay Capture of Funds](/transactions-api/cookbook/delay-capture) recipe for more information.
     */
    captureTransaction(locationId: string, transactionId: string): Promise<CaptureTransactionResponse>;
    /**
     * Charges a card represented by a card nonce or a customer's card on file.
     * @deprecated recommend using [CreatePayment](#endpoint-payments-createpayment) Your request to this endpoint must
     * include _either_: - A value for the `card_nonce` parameter (to charge a card nonce generated with the `SqPaymentForm`)
     * - Values for the `customer_card_id` and `customer_id` parameters (to charge a customer's card on file)  When this
     * response is returned, the amount of Square's processing fee might not yet be calculated. To obtain the processing fee,
     * wait about ten seconds and call [RetrieveTransaction](#endpoint-transactions-retrievetransaction).
     * See the `processing_fee_money` field of each [Tender included](#type-tender) in the transaction.
     */
    charge(locationId: string, body: ChargeRequest): Promise<ChargeResponse>;
    /**
     * Initiates a refund for a previously charged tender.
     * @deprecated recommend using [RefundPayment](#endpoint-refunds-refundpayment) You must issue a refund within 120
     * days of the associated payment. See [this article](https://squareup.com/help/us/en/article/5060) for more
     * information on refund behavior.
     * @note: Card-present transactions with Interac credit cards **cannot be refunded using the Connect API**.
     * Interac transactions must refunded in-person (e.g., dipping the card using POS app).
     */
    createRefund(locationId: string, transactionId: string, body: CreateRefundRequest): Promise<CreateRefundResponse>;
    /**
     * Lists refunds for one of a business's locations.
     * @deprecated recommend using [SearchOrders](#endpoint-orders-searchorders) In addition to full or partial tender
     * refunds processed through Square APIs, refunds may result from itemized returns or exchanges through Square's
     * Point of Sale applications. Refunds with a `status` of `PENDING` are not currently included in this endpoint's response.
     * Max results per [page](#paginatingresults): 50.
     */
    listRefunds(locationId: string, params: ListRefundsRequest): Promise<ListRefundsResponse>;
    /**
     * Lists transactions for a particular location.
     * @deprecated recommend using [SearchOrders](#endpoint-orders-searchorders) Transactions include payment information
     * from sales and exchanges and refund information from returns and exchanges.
     * Max results per [page](#paginatingresults): 50.
     */
    listTransactions(locationId: string, params: ListTransactionsRequest): Promise<ListTransactionsResponse>;
    /**
     * Retrieves details for a single transaction.
     * @deprecated recommend using [BatchRetrieveOrders](#endpoint-batchretrieveorders).
     */
    retrieveTransaction(locationId: string, transactionId: string): Promise<RetrieveTransactionResponse>;
    /**
     * Cancels a transaction that was created with the [Charge](#endpoint-transactions-charge) endpoint with a
     * `delay_capture` value of `true`. See the [Delay Capture of Funds](/transactions-api/cookbook/delay-capture) recipe
     * for more information.
     */
    voidTransaction(locationId: string, transactionId: string): Promise<VoidTransactionResponse>;
}

// @todo describe methods
export class V1EmployeesApi {}

// @todo describe methods
export class V1ItemsApi {}

// @todo describe methods
export class V1LocationsApi {}

// @todo describe methods
export class V1TransactionsApi {}
