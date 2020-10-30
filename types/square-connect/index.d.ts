// Type definitions for square-connect 3.20200325
// Project: https://docs.connect.squareup.com/
// Definitions by: Dmitri Dimitrioglo <https://github.com/ddimitrioglo>
//                 Richard Moot <https://github.com/mootrichard>
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
 * Defines request parameters for the AcceptDispute endpoint.
 */
export class AcceptDisputeRequest {}

/**
 * Defines fields in a AcceptDispute response.
 */
export class AcceptDisputeResponse {
    /**
     * Information on errors encountered during the request.
     */
    errors?: Array<Error>;
    /**
     * Details about the accepted dispute.
     */
    dispute?: Dispute;
}

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
     * The unique ID for this `AdditionalRecipientReceivable`, assigned by the server.
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

/**
 * Represents a bank account.
 * For more information about linking a bank account to a Square account, see [Bank Accounts API](/docs/bank-accounts-api).
 */
export class BankAccount {
    /**
     * The unique, Square-issued identifier for the bank account.
     */
    id: string;
    /**
     * The last few digits of the account number.
     */
    account_number_suffix: string;
    /**
     * The ISO 3166 Alpha-2 country code where the bank account is based. See [Country](#type-country) for possible values
     */
    country: string;
    /**
     * The 3-character ISO 4217 currency code indicating the operating currency of the bank account.
     * For example, the currency code for US dollars is `USD`. See [Currency](#type-currency) for possible values
     */
    currency: string;
    /**
     * The financial purpose of the associated bank account. See [BankAccountType](#type-bankaccounttype) for possible values
     */
    account_type: string;
    /**
     * Name of the account holder. This name must match the name  on the targeted bank account record.
     */
    holder_name: string;
    /**
     * Primary identifier for the bank. For more information, see  [Bank Accounts API](https://developer.squareup.com/docs/docs/bank-accounts-api).
     */
    primary_bank_identification_number: string;
    /**
     * Secondary identifier for the bank. For more information, see  [Bank Accounts API](https://developer.squareup.com/docs/docs/bank-accounts-api).
     */
    secondary_bank_identification_number?: string;
    /**
     * Reference identifier that will be displayed to UK bank account owners when collecting direct debit authorization. Only required for UK bank accounts.
     */
    debit_mandate_reference_id?: string;
    /**
     * Client-provided identifier for linking the banking account to an entity in a third-party system (for example, a bank account number or a user identifier).
     */
    reference_id?: string;
    /**
     * The location to which the bank account belongs.
     */
    location_id?: string;
    /**
     * Read-only. The current verification status of this BankAccount object. See [BankAccountStatus](#type-bankaccountstatus) for possible values
     */
    status: string;
    /**
     * Indicates whether it is possible for Square to send money to this bank account.
     */
    creditable: boolean;
    /**
     * Indicates whether it is possible for Square to take money from this  bank account.
     */
    debitable: boolean;
    /**
     * A Square-assigned, unique identifier for the bank account based on the account information.
     * The account fingerprint can be used to compare account entries and determine if the they represent the same real-world bank account.
     */
    fingerprint?: string;
    /**
     * The current version of the `BankAccount`.
     */
    version?: number;
    /**
     * Read only. Name of actual financial institution. For example \"Bank of America\".
     */
    bank_name?: string;
}

/**
 * Indicates the current verification status of a `BankAccount` object.
 */
export class BankAccountStatus {}

/**
 * Indicates the financial purpose of the bank account.
 */
export class BankAccountType {}

export class BatchChangeInventoryRequest {
    /**
     * A client-supplied, universally unique identifier (UUID) for the request.
     * See [Idempotency](https://developer.squareup.com/docs/basics/api101/idempotency) in the
     * [API Development 101](https://developer.squareup.com/docs/basics/api101/overview) section for more information.
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
     * The IDs of the CatalogObjects to be deleted. When an object is deleted, other objects in the graph that depend on
     * that object will be deleted as well (for example, deleting a CatalogItem will delete its CatalogItemVariation.
     */
    object_ids?: Array<string>;
}

export class BatchDeleteCatalogObjectsResponse {
    /**
     * The set of Errors encountered.
     */
    errors?: Array<Error>;
    /**
     * The IDs of all CatalogObjects deleted by this request.
     */
    deleted_object_ids?: Array<string>;
    /**
     * The database [timestamp](https://developer.squareup.com/docs/build-basics/working-with-dates) of this deletion
     * in RFC 3339 format, e.g., "2016-09-04T23:59:33.123Z".
     */
    deleted_at?: string;
}

export class BatchRetrieveCatalogObjectsRequest {
    /**
     * The IDs of the CatalogObjects to be retrieved.
     */
    object_ids: Array<string>;
    /**
     * If `true`, the response will include additional objects that are related to the requested objects, as follows:
     *  * If the `objects` field of the response contains a CatalogItem, its associated CatalogCategory objects, CatalogTax objects,
     *  CatalogImage objects and CatalogModifierLists will be returned in the `related_objects` field of the response.
     *  * If the `objects` field of the response contains a CatalogItemVariation, its parent CatalogItem will be returned
     *  in the `related_objects` field of the response.
     */
    include_related_objects?: boolean;
}

export class BatchRetrieveCatalogObjectsResponse {
    /**
     * The set of `Error`s encountered.
     */
    errors?: Array<Error>;
    /**
     * A list of `CatalogObject`s returned.
     */
    objects?: Array<CatalogObject>;
    /**
     * A list of `CatalogObject`s referenced by the object in the `objects` field.
     */
    related_objects?: Array<CatalogObject>;
}

export class BatchRetrieveInventoryChangesRequest {
    /**
     * Filters results by `CatalogObject` ID. Only applied when set. Default: unset.
     */
    catalog_object_ids?: Array<string>;
    /**
     * Filters results by `Location` ID. Only applied when set. Default: unset.
     */
    location_ids?: Array<string>;
    /**
     * Filters results by `InventoryChangeType`. Default: [`PHYSICAL_COUNT`, `ADJUSTMENT`].
     * `TRANSFER` is not supported as a filter. See [InventoryChangeType](#type-inventorychangetype) for possible values.
     */
    types?: Array<InventoryType>;
    /**
     * Filters `ADJUSTMENT` query results by `InventoryState`. Only applied when set. Default: unset.
     * See [InventoryState](#type-inventorystate) for possible values
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
     * A pagination cursor returned by a previous call to this endpoint.
     * Provide this to retrieve the next set of results for the original query.
     * See the [Pagination](https://developer.squareup.com/docs/working-with-apis/pagination) guide for more information.
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
     * See the [Pagination](https://developer.squareup.com/docs/working-with-apis/pagination) guide for more information.
     */
    cursor?: string;
}

export class BatchRetrieveInventoryCountsRequest {
    /**
     * Filters results by `CatalogObject` ID. Only applied when set. Default: unset.
     */
    catalog_object_ids?: Array<string>;
    /**
     * Filters results by `Location` ID. Only applied when set. Default: unset.
     */
    location_ids?: Array<string>;
    /**
     * Provided as an RFC 3339 timestamp. Returns results whose `calculated_at` value is after the given time.
     * Default: UNIX epoch (`1970-01-01T00:00:00Z`).
     */
    updated_after?: string;
    /**
     * A pagination cursor returned by a previous call to this endpoint.
     * Provide this to retrieve the next set of results for the original query.
     * See the [Pagination](https://developer.squareup.com/docs/working-with-apis/pagination) guide for more information.
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
     * See the [Pagination](https://developer.squareup.com/docs/working-with-apis/pagination) guide for more information.
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
     * idempotency key is to use a Universally unique identifier (UUID). If you're unsure whether a particular request was
     * successful, you can reattempt it with the same idempotency key without worrying about creating duplicate objects.
     * See [Idempotency](https://developer.squareup.com/docs/basics/api101/idempotency) for more information.
     */
    idempotency_key: string;
    /**
     * A batch of CatalogObjects to be inserted/updated atomically. The objects within a batch will be inserted in an
     * all-or-nothing fashion, i.e., if an error occurs attempting to insert or update an object within a batch, the entire
     * batch will be rejected. However, an error in one batch will not affect other batches within the same request.
     * For each object, its `updated_at` field is ignored and replaced with a current
     * [timestamp](https://developer.squareup.com/docs/build-basics/working-with-dates), and its `is_deleted` field must
     * not be set to `true`. To modify an existing object, supply its ID. To create a new object, use an ID starting with `#`.
     * These IDs may be used to create relationships between an object and attributes of other objects that reference it.
     * For example, you can create a CatalogItem with ID `#ABC` and a CatalogItemVariation with its `item_id` attribute
     * set to `#ABC` in order to associate the CatalogItemVariation with its parent CatalogItem.
     * Any `#`-prefixed IDs are valid only within a single atomic batch, and will be replaced by server-generated IDs.
     * Each batch may contain up to 1,000 objects. The total number of objects across all batches for a single request
     * may not exceed 10,000. If either of these limits is violated, an error will be returned and no objects
     * will be inserted or updated.
     */
    batches: Array<CatalogObjectBatch>;
}

export class BatchUpsertCatalogObjectsResponse {
    /**
     * Information on any errors that encountered.
     */
    errors?: Array<Error>;
    /**
     * The created successfully created CatalogObjects.
     */
    objects?: Array<CatalogObject>;
    /**
     * The database [timestamp](https://developer.squareup.com/docs/build-basics/working-with-dates) of this update
     * in RFC 3339 format, e.g., "2016-09-04T23:59:33.123Z".
     */
    updated_at?: string;
    /**
     * The mapping between client and server IDs for this upsert.
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
 * Cancels (voids) a payment before it has been completed.
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
     * The card's brand. See [CardBrand](#type-cardbrand) for possible values
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
     * @proposed Intended as a Square-assigned identifier, based on the card number, to identify the card across
     * multiple locations within a single application.
     */
    fingerprint?: string;
    /**
     * The type of the card. The Card object includes this field only in response to Payments API calls.
     * See [CardType](#type-cardtype) for possible values.
     */
    card_type?: string;
    /**
     * Indicates whether the Card is prepaid or not. The Card object includes this field only in response to Payments API calls.
     * See [CardPrepaidType](#type-cardprepaidtype) for possible values.
     */
    prepaid_type?: string;
    /**
     * The first six digits of the card number, known as the Bank Identification Number (BIN). Only the Payments API returns this field.
     */
    bin?: string;
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
     * Status code returned from the Card Verification Value (CVV) check. Can be `CVV_ACCEPTED`, `CVV_REJECTED`, `CVV_NOT_CHECKED`.
     */
    cvv_status?: string;
    /**
     * Status code returned from the Address Verification System (AVS) check. Can be `AVS_ACCEPTED`, `AVS_REJECTED`, `AVS_NOT_CHECKED`.
     */
    avs_status?: string;
    /**
     * Status code returned by the card issuer that describes the payment's authorization status.
     */
    auth_result_code?: string;
    /**
     * For EMV payments, identifies the EMV application used for the payment.
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
     * For EMV payments, method used to verify the cardholder's identity.
     * Can be one of `PIN`, `SIGNATURE`, `PIN_AND_SIGNATURE`, `ON_DEVICE`, or `NONE`.
     */
    verification_method?: string;
    /**
     * For EMV payments, the results of the cardholder verification.
     */
    verification_results?: 'SUCCESS' | 'FAILURE' | 'UNKNOWN';
    /**
     * The statement description sent to the card networks.
     * @note The actual statement description will vary and is likely to be truncated and appended with additional
     * information on a per issuer basis.
     */
    statement_description?: string;
    /**
     * Details about the device that took the payment.
     */
    device_details?: DeviceDetails;
    /**
     * Information on errors encountered during the request.
     */
    errors?: Array<Error>;
}

/**
 * Indicates a card's prepaid type, such as `NOT_PREPAID` or `PREPAID`.
 */
export class CardPrepaidType {}

/**
 * Indicates a card's type, such as `CREDIT` or `DEBIT`.
 */
export class CardType {}

export class CashDrawerDevice {
    /**
     * The device Square-issued ID
     */
    id?: string;
    /**
     * The device merchant-specified name.
     */
    name?: string;
}

/**
 * The types of events on a CashDrawerShift. Each event type represents an employee action on the actual cash drawer
 * represented by a CashDrawerShift.
 */
export class CashDrawerEventType {}

/**
 * This model gives the details of a cash drawer shift. The cash_payment_money, cash_refund_money,
 * cash_paid_in_money, and cash_paid_out_money fields are all computed by summing their respective event types.
 */
export class CashDrawerShift {
    /**
     * The shift unique ID.
     */
    id?: string;
    /**
     * The shift current state. See [CashDrawerShiftState](#type-cashdrawershiftstate) for possible values.
     */
    state?: string;
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
     * The IDs of all employees that were logged into Square Point of Sale at any point while the cash drawer shift was open.
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
     * The ID of the employee that closed the cash drawer shift by auditing the cash drawer contents.
     */
    closing_employee_id?: string;
    /**
     * The free-form text description of a cash drawer by an employee.
     */
    description?: string;
    /**
     * The amount of money in the cash drawer at the start of the shift. The amount must be greater than or equal to zero.
     */
    opened_cash_money?: Money;
    /**
     * The amount of money added to the cash drawer from cash payments.
     * This is computed by summing all events with the types CASH_TENDER_PAYMENT and CASH_TENDER_CANCELED_PAYMENT.
     * The amount is always greater than or equal to zero.
     */
    cash_payment_money?: Money;
    /**
     * The amount of money removed from the cash drawer from cash refunds.
     * It is computed by summing the events of type CASH_TENDER_REFUND. The amount is always greater than or equal to zero.
     */
    cash_refunds_money?: Money;
    /**
     * The amount of money added to the cash drawer for reasons other than cash payments.
     * It is computed by summing the events of type PAID_IN. The amount is always greater than or equal to zero.
     */
    cash_paid_in_money?: Money;
    /**
     * The amount of money removed from the cash drawer for reasons other than cash refunds.
     * It is computed by summing the events of type PAID_OUT. The amount is always greater than or equal to zero.
     */
    cash_paid_out_money?: Money;
    /**
     * The amount of money that should be in the cash drawer at the end of the shift, based on the shift's other money amounts.
     * This can be negative if employees have not correctly recorded all the events on the cash drawer.
     * cash_paid_out_money is a summation of amounts from cash_payment_money (zero or positive), cash_refunds_money
     * (zero or negative), cash_paid_in_money (zero or positive), and cash_paid_out_money (zero or negative) event types.
     */
    expected_cash_money?: Money;
    /**
     * The amount of money found in the cash drawer at the end of the shift by an auditing employee. The amount should be positive.
     */
    closed_cash_money?: Money;
    /**
     * The device running Square Point of Sale that was connected to the cash drawer.
     */
    device?: CashDrawerDevice;
}

export class CashDrawerShiftEvent {
    /**
     * The unique ID of the event.
     */
    id?: string;
    /**
     * The ID of the employee that created the event.
     */
    employee_id?: string;
    /**
     * The type of cash drawer shift event. See [CashDrawerEventType](#type-cashdrawereventtype) for possible values
     */
    event_type?: string;
    /**
     * The amount of money that was added to or removed from the cash drawer in the event.
     * The amount can be positive (for added money), negative (for removed money), or zero (for other tender type payments).
     */
    event_money?: Money;
    /**
     * The event time in ISO 8601 format.
     */
    created_at?: string;
    /**
     * An optional description of the event, entered by the employee that created the event.
     */
    description?: string;
}

/**
 * The current state of a cash drawer shift.
 */
export class CashDrawerShiftState {}

/**
 * The summary of a closed cash drawer shift.
 * This model contains only the money counted to start a cash drawer shift, counted at the end of the shift, and the
 * amount that should be in the drawer at shift end based on summing all cash drawer shift events.
 */
export class CashDrawerShiftSummary {
    /**
     * The shift unique ID.
     */
    id?: string;
    /**
     * The shift current state. See [CashDrawerShiftState](#type-cashdrawershiftstate) for possible values.
     */
    state?: string;
    /**
     * The shift start time in ISO 8601 format.
     */
    opened_at?: string;
    /**
     * The shift end time in ISO 8601 format.
     */
    ended_at?: string;
    /**
     * The shift close time in ISO 8601 format.
     */
    closed_at?: string;
    /**
     * An employee free-text description of a cash drawer shift.
     */
    description?: string;
    /**
     * The amount of money in the cash drawer at the start of the shift. This must be a positive amount.
     */
    opened_cash_money?: Money;
    /**
     * The amount of money that should be in the cash drawer at the end of the shift, based on the cash drawer events on the shift.
     * The amount is correct if all shift employees accurately recorded their cash drawer shift events.
     * Unrecorded events and events with the wrong amount result in an incorrect expected_cash_money amount that can be negative.
     */
    expected_cash_money?: Money;
    /**
     * The amount of money found in the cash drawer at the end of the shift by an auditing employee.
     * The amount must be greater than or equal to zero.
     */
    closed_cash_money?: Money;
}

/**
 * A category to which a `CatalogItem` belongs in the `Catalog` object model.
 */
export class CatalogCategory {
    /**
     * The category name. Searchable. This field has max length of 255 Unicode code points.
     */
    name?: string;
}

/**
 * Contains information defining a custom attribute.
 * Custom attributes are intended to store additional information about a catalog object or to associate a catalog
 * object with an entity in another system. Do not use custom attributes to store any sensitive information
 * (personally identifiable information, card details, etc.). [Read more about custom attributes](/catalog-api/add-custom-attributes)
 */
export class CatalogCustomAttributeDefinition {
    /**
     * The type of this custom attribute. Cannot be modified after creation. Required.
     * See [CatalogCustomAttributeDefinitionType](#type-catalogcustomattributedefinitiontype) for possible values.
     */
    type: string;
    /**
     *  The name of this definition for API and seller-facing UI purposes.
     *  The name must be unique within the (merchant, application_id) pair. Required.
     *  May not be empty and may not exceed 255 characters. Can be modified after creation.
     */
    name: string;
    /**
     * Seller-oriented description of the meaning of this Custom Attribute, any constraints that the seller should observe, etc.
     * May be displayed as a tooltip in Square UIs.
     */
    description?: string;
    /**
     * Contains information about the application that created this custom attribute definition.
     */
    readonly source_application?: SourceApplication;
    /**
     * The set of Catalog Object Types that this Custom Attribute may be applied to.
     * Only `ITEM` and `ITEM_VARIATION` are allowed. See [CatalogObjectType](#type-catalogobjecttype) for possible values.
     */
    allowed_object_types?: Array<string>;
    /**
     * The visibility of a custom attribute in seller-facing UIs (including Square Point of Sale applications and
     * Square Dashboard). May be modified.
     * See [CatalogCustomAttributeDefinitionSellerVisibility](#type-catalogcustomattributedefinitionsellervisibility) for possible values.
     */
    seller_visibility?: string;
    /**
     * The visibility of a custom attribute to applications other than the application that created the attribute.
     * See [CatalogCustomAttributeDefinitionAppVisibility](#type-catalogcustomattributedefinitionappvisibility) for possible values.
     */
    app_visibility?: string;
    /**
     * Optionally, populated when `type` = `STRING`, unset otherwise.
     */
    string_config?: CatalogCustomAttributeDefinitionStringConfig;
    /**
     * Populated when `type` is set to `SELECTION`, unset otherwise.
     */
    selection_config?: CatalogCustomAttributeDefinitionSelectionConfig;
    /**
     * __Read-only.__ The number of custom attributes that reference this custom attribute definition.
     * Set by the server in response to a ListCatalog request with `include_counts` set to `true`.
     * If the actual count is greater than 100, `custom_attribute_usage_count` will be set to `100`.
     */
    custom_attribute_usage_count?: number;
    /**
     * The name of the desired custom attribute key that can be used to access the custom attribute value on catalog objects.
     * Cannot be modified after the custom attribute definition has been created.
     */
    key?: string;
}

/**
 * Defines the visibility of a custom attribute to applications other than their creating application.
 */
export class CatalogCustomAttributeDefinitionAppVisibility {}

/**
 * Configuration associated with `SELECTION`-type custom attribute definitions.
 */
export class CatalogCustomAttributeDefinitionSelectionConfig {
    /**
     * The maximum number of selections that can be set. The maximum value for this attribute is 100.
     * May be modified, but changing the value will not affect existing custom attribute values on objects.
     * Clients need to handle Custom Attributes with more selected values than allowed by this limit.
     */
    max_allowed_selections?: number;
    /**
     * The set of valid `CatalogCustomAttributeSelections`. Up to a maximum of 100 selections can be defined. Can be modified.
     */
    allowed_selections?: Array<CatalogCustomAttributeDefinitionSelectionConfigCustomAttributeSelection>;
}

/**
 * A named selection for this `SELECTION`-type custom attribute definition.
 */
export class CatalogCustomAttributeDefinitionSelectionConfigCustomAttributeSelection {
    /**
     * Unique ID set by Square.
     */
    uid?: string;
    /**
     * Selection name, unique within `allowed_selections`. Required. Min length of 1, max length of 255.
     */
    name: string;
}

/**
 * Defines the visibility of a custom attribute to sellers in Square client applications, Square APIs or in
 * Square UIs (including Square Point of Sale applications and Square Dashboard).
 */
export class CatalogCustomAttributeDefinitionSellerVisibility {}

/**
 * Configuration associated with Custom Attribute Definitions of type `STRING`.
 */
export class CatalogCustomAttributeDefinitionStringConfig {
    /**
     * If true, each Custom Attribute instance associated with this Custom Attribute Definition must have a unique value
     * within the seller's catalog. For example, this may be used for a value like a SKU that should not be duplicated
     * within a seller's catalog. May not be modified after the definition has been created.
     */
    enforce_uniqueness?: boolean;
}

/**
 * Defines the possible types for a custom attribute.
 */
export class CatalogCustomAttributeDefinitionType {}

/**
 * An instance of a custom attribute. Custom attributes can be defined and added to `ITEM` and `ITEM_VARIATION` type catalog objects.
 * [Read more about custom attributes](/catalog-api/add-custom-attributes).
 */
export class CatalogCustomAttributeValue {
    /**
     * The name of the custom attribute.
     */
    name?: string;
    /**
     * The string value of the custom attribute. Populated if `type` = `STRING`.
     */
    string_value?: string;
    /**
     * The custom attribute definition this value belongs to.
     */
    readonly custom_attribute_definition_id?: string;
    /**
     * A copy of type from the associated custom attribute definition.
     * See [CatalogCustomAttributeDefinitionType](#type-catalogcustomattributedefinitiontype) for possible values.
     */
    readonly type?: string;
    /**
     * Populated if `type` = `NUMBER`. Contains a string representation of a decimal number, using a `.` as the decimal separator.
     */
    number_value?: string;
    /**
     * A `true` or `false` value. Populated if `type` = `BOOLEAN`.
     */
    boolean_value?: boolean;
    /**
     * One or more choices from `allowed_selections`. Populated if `type` = `SELECTION`.
     */
    selection_uid_values?: Array<string>;
    /**
     * A copy of key from the associated custom attribute definition.
     */
    readonly key?: string;
}

/**
 * A discount in the Catalog object model.
 */
export class CatalogDiscount {
    /**
     * The discount name. Searchable. This field has max length of 255 Unicode code points.
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
     * The color of the discount display label in the Square Point of Sale app. This must be a valid hex color code.
     */
    label_color?: string;
    /**
     * Indicates whether this discount should reduce the price used to calculate tax.
     * Most discounts should use `MODIFY_TAX_BASIS`. However, in some circumstances taxes must be calculated based on
     * an item's price, ignoring a particular discount. For example, in many US jurisdictions, a manufacturer coupon or
     * instant rebate reduces the price a customer pays but does not reduce the sale price used to calculate how much
     * sales tax is due. In this case, the discount representing that manufacturer coupon should have
     * `DO_NOT_MODIFY_TAX_BASIS` for this field. If you are unsure whether you need to use this field, consult your
     * tax professional. See [CatalogDiscountModifyTaxBasis](#type-catalogdiscountmodifytaxbasis) for possible values.
     */
    modify_tax_basis?: string;
}

export class CatalogDiscountModifyTaxBasis {}

/**
 * How to apply a CatalogDiscount to a CatalogItem.
 */
export class CatalogDiscountType {}

/**
 * A mapping between a client-supplied temporary ID and a permanent server ID.
 */
export class CatalogIdMapping {
    /**
     * The client-supplied, temporary `#`-prefixed ID for a new `CatalogObject`.
     */
    client_object_id?: string;
    /**
     * The permanent ID for the CatalogObject created by the server.
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
     * The set of errors encountered.
     */
    errors?: Array<Error>;
    /**
     * Response limit
     */
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
     * A set of IDs indicating the taxes enabled for this item. When updating an item, any taxes listed here will be
     * added to the item. Taxes may also be added to or deleted from an item using `UpdateItemTaxes`.
     */
    tax_ids?: Array<string>;
    /**
     * A set of `CatalogItemModifierListInfo` objects representing the modifier lists that apply to this item, along with
     * the overrides and min and max limits that are specific to this item. Modifier lists may also be added to or
     * deleted from an item using `UpdateItemModifierLists`.
     */
    modifier_list_info?: Array<CatalogItemModifierListInfo>;
    /**
     * A list of CatalogObjects containing the `CatalogItemVariation`s for this item.
     */
    variations?: Array<CatalogObject>;
    /**
     * The product type of the item. May not be changed once an item has been created.
     * Only items of product type `REGULAR` or `APPOINTMENTS_SERVICE` may be created by this API; items with other product
     * types are read-only. See [CatalogItemProductType](#type-catalogitemproducttype) for possible values
     */
    product_type?: 'REGULAR' | 'GIFT_CARD' | 'APPOINTMENTS_SERVICE' | 'RETAIL_ITEM' | 'RESTAURANT_ITEM';
    /**
     * If `false`, the Square Point of Sale app will present the `CatalogItem`'s details screen immediately, allowing
     * the merchant to choose `CatalogModifier`s before adding the item to the cart. This is the default behavior.
     * If `true`, the Square Point of Sale app will immediately add the item to the cart with the pre-selected modifiers,
     * and merchants can edit modifiers by drilling down onto the item's details. Third-party clients are encouraged to
     * implement similar behaviors.
     */
    skip_modifier_screen?: boolean;
    /**
     * List of item options IDs for this item. Used to manage and group item variations in a specified order.
     * Maximum: 6 item options.
     */
    item_options?: Array<CatalogItemOptionForItem>;
}

/**
 * Controls the properties of a `CatalogModifierList` as it applies to this `CatalogItem`.
 */
export class CatalogItemModifierListInfo {
    /**
     * The ID of the `CatalogModifierList` controlled by this `CatalogModifierListInfo`.
     */
    modifier_list_id: string;
    /**
     * A set of `CatalogModifierOverride` objects that override whether a given `CatalogModifier` is enabled by default.
     */
    modifier_overrides?: Array<CatalogModifierOverride>;
    /**
     * If 0 or larger, the smallest number of `CatalogModifier`s that must be selected from this `CatalogModifierList`.
     */
    min_selected_modifiers?: number;
    /**
     * If 0 or larger, the largest number of `CatalogModifier`s that can be selected from this `CatalogModifierList`.
     */
    max_selected_modifiers?: number;
    /**
     * If `true`, enable this `CatalogModifierList`. The default value is `true`.
     */
    enabled?: boolean;
}

/**
 * A group of variations for a `CatalogItem`.
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
     * The item option's human-readable description.
     * Displayed in the Square Point of Sale app for the seller and in the Online Store or on receipts for the buyer.
     */
    description?: string;
    /**
     * If true, display colors for entries in `values` when present.
     */
    show_colors?: boolean;
    /**
     * A list of CatalogObjects containing the `CatalogItemOptionValue`s for this item.
     */
    values?: Array<CatalogObject>;
    /**
     * The number of `CatalogItem`s currently associated with this item option.
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
 * An enumerated value that can link a `CatalogItemVariation` to an item option as one of its item option values.
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
     * A human-readable description for the option value.
     */
    description?: string;
    /**
     * The HTML-supported hex color for the item option (e.g., "#ff8d4e85").
     * Only displayed if `show_colors` is enabled on the parent `ItemOption`. When left unset, `color` defaults to
     * white ("#ffffff") when `show_colors` is enabled on the parent `ItemOption`.
     */
    color?: string;
    /**
     * Determines where this option value appears in a list of option values.
     */
    ordinal?: number;
    /**
     * The number of `CatalogItemVariation`s that currently make use of this Item Option value.
     * Present only if `retrieve_counts` was specified on the request used to retrieve the parent Item Option of this value.
     * Maximum: 100 counts.
     */
    item_variation_count?: number;
}

/**
 * A `CatalogItemOptionValue` links an item variation to an item option as an item option value.
 * For example, a t-shirt item may offer a color option and a size option. An item option value would represent each
 * variation of t-shirt: For example, "Color:Red, Size:Small" or "Color:Blue, Size:Medium".
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
 * The type of a CatalogItem. Connect V2 only allows the creation of `REGULAR` or `APPOINTMENTS_SERVICE` items.
 */
export class CatalogItemProductType {}

/**
 * An item variation (i.e., product) in the Catalog object model. Each item may have a maximum of 250 item variations.
 */
export class CatalogItemVariation {
    /**
     * The ID of the `CatalogItem` associated with this item variation. Searchable.
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
     * each item variation within a parent `CatalogItem` is set according to the item variations's position. On reads,
     * the value is not guaranteed to be sequential or unique.
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
     * Per-location price and inventory overrides.
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
    inventory_alert_type?: 'NONE' | 'LOW_QUANTITY';
    /**
     * If the inventory quantity for the variation is less than or equal to this value and `inventory_alert_type` is
     * `LOW_QUANTITY`, the variation displays an alert in the merchant dashboard. This value is always an integer.
     */
    inventory_alert_threshold?: number;
    /**
     * Arbitrary user metadata to associate with the item variation. Searchable.
     * This field has max length of 255 Unicode code points.
     */
    user_data?: string;
    /**
     * If the `CatalogItem` that owns this item variation is of type `APPOINTMENTS_SERVICE`, then this is the duration
     * of the service in milliseconds. For example, a 30 minute appointment would have the value `1800000`, which is
     * equal to 30 (minutes) * 60 (seconds per minute) * 1000 (milliseconds per second).
     */
    service_duration?: number;
    /**
     * List of item option values associated with this item variation. Listed in the same order as the item options of the parent item.
     */
    item_option_values?: Array<CatalogItemOptionValueForItemVariation>;
    /**
     * ID of the ‘CatalogMeasurementUnit’ that is used to measure the quantity sold of this item variation.
     * If left unset, the item will be sold in whole quantities.
     */
    measurement_unit_id?: string;
}

/**
 * Represents the unit used to measure a `CatalogItemVariation` and specifies the precision for decimal quantities.
 */
export class CatalogMeasurementUnit {
    /**
     * Indicates the unit used to measure the quantity of a catalog item variation.
     */
    measurement_unit?: MeasurementUnit;
    /**
     * An integer between 0 and 5 that represents the maximum number of positions allowed after the decimal in quantities
     * measured with this unit. For example:
     *  - if the precision is 0, the quantity can be 1, 2, 3, etc.
     *  - if the precision is 1, the quantity can be 0.1, 0.2, etc.
     *  - if the precision is 2, the quantity can be 0.01, 0.12, etc.
     *  Default: 3
     */
    precision?: number;
}

/**
 * A modifier in the Catalog object model.
 */
export class CatalogModifier {
    /**
     * The modifier name. Searchable. This field has max length of 255 Unicode code points.
     */
    name?: string;
    /**
     * The modifier price.
     */
    price_money?: Money;
    /**
     * Determines where this `CatalogModifier` appears in the `CatalogModifierList`.
     */
    ordinal?: number;
    /**
     * The ID of the `CatalogModifierList` associated with this modifier. Searchable.
     */
    modifier_list_id?: string;
}

/**
 * A modifier list in the Catalog object model. A `CatalogModifierList` contains `CatalogModifier` objects that can
 * be applied to a `CatalogItem` at the time of sale. For example, a modifier list "Condiments" that would apply to
 * a "Hot Dog" `CatalogItem` might contain `CatalogModifier`s "Ketchup", "Mustard", and "Relish".
 * The `selection_type` field specifies whether or not multiple selections from the modifier list are allowed.
 */
export class CatalogModifierList {
    /**
     * A searchable name for the `CatalogModifierList`. This field has max length of 255 Unicode code points.
     */
    name?: string;
    /**
     * Determines where this `CatalogModifierList` appears in a list of `CatalogModifierList` values.
     */
    ordinal?: number;
    /**
     * Indicates whether multiple options from the `CatalogModifierList` can be applied to a single `CatalogItem`.
     * See [CatalogModifierListSelectionType](#type-catalogmodifierlistselectiontype) for possible values.
     */
    selection_type?: 'SINGLE' | 'MULTIPLE';
    /**
     * The options included in the `CatalogModifierList`. You must include at least one `CatalogModifier`.
     * Each CatalogObject must have type `MODIFIER` and contain `CatalogModifier` data.
     */
    modifiers?: Array<CatalogObject>;
}

/**
 * Indicates whether a CatalogModifierList supports multiple selections.
 */
export class CatalogModifierListSelectionType {}

export class CatalogModifierOverride {
    /**
     * The ID of the `CatalogModifier` whose default behavior is being overridden.
     */
    modifier_id: string;
    /**
     * If `true`, this `CatalogModifier` should be selected by default for this `CatalogItem`.
     */
    on_by_default?: boolean;
}

/**
 * The wrapper object for object types in the Catalog data model.
 * The type of a particular `CatalogObject` is determined by the value of `type` and only the corresponding data field may be set.
 *  - if type = `ITEM`, only `item_data` will be populated and it will contain a valid `CatalogItem` object.
 *  - if type = `ITEM_VARIATION`, only `item_variation_data` will be populated and it will contain a valid `CatalogItemVariation` object.
 *  - if type = `MODIFIER`, only `modifier_data` will be populated and it will contain a valid `CatalogModifier` object.
 *  - if type = `MODIFIER_LIST`, only `modifier_list_data` will be populated and it will contain a valid `CatalogModifierList` object.
 *  - if type = `CATEGORY`, only `category_data` will be populated and it will contain a valid `CatalogCategory` object.
 *  - if type = `DISCOUNT`, only `discount_data` will be populated and it will contain a valid `CatalogDiscount` object.
 *  - if type = `TAX`, only `tax_data` will be populated and it will contain a valid `CatalogTax` object.
 *  - if type = `IMAGE`, only `image_data` will be populated and it will contain a valid `CatalogImage` object.
 * For a more detailed discussion of the Catalog data model, please see the [Design a Catalog](/catalog-api/design-a-catalog) guide.
 */
export class CatalogObject {
    /**
     * The type of this object. Each object type has expected properties expressed in a structured format within its
     * corresponding `*_data` field below. See [CatalogObjectType](#type-catalogobjecttype) for possible values.
     */
    type: ObjectType;
    /**
     * An identifier to reference this object in the catalog. When a new `CatalogObject` is inserted, the client should
     * set the id to a temporary identifier starting with a `#` character. Other objects being inserted or updated
     * within the same request may use this identifier to refer to the new object. When the server receives the new object,
     * it will supply a unique identifier that replaces the temporary identifier for all future references.
     */
    id: string;
    /**
     * Last modification [timestamp](https://developer.squareup.com/docs/build-basics/working-with-dates) in RFC 3339 format,
     * e.g., "2016-08-15T23:59:33.123Z" would indicate the UTC time (denoted by `Z`) of August 15, 2016 at 23:59:33 and 123 milliseconds.
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
     * Application-defined key/value attributes that are set at a global (location-independent) level.
     * Values from the `*_data` fields may not be duplicated. Custom Attribute fields are intended to store additional
     * information about a Catalog Object or associations with an entity in another system. Do not use custom attributes
     * to store any sensitive information (personally identifiable information, card details, etc.).
     * For CustomAttributesDefinitions defined by the app making the request, the map key is the key defined in
     * CustomAttributeDefinition (eg. `reference_id`). For CustomAttributesDefinitions by other apps, the map key is the key
     * defined in CustomAttributeDefinition prefixed with the application ID and a colon (eg. "abcd1234:reference_id").
     */
    custom_attribute_values?: { [key: string]: CatalogCustomAttributeValue; };
    /**
     * The Connect v1 IDs for this object at each location where it is present, where they differ from the object's Connect V2 ID.
     * The field will only be present for objects that have been created or modified by legacy APIs.
     */
    catalog_v1_ids?: Array<Record<string, any>>;
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
     * Structured data for a `CatalogItem`, set for CatalogObjects of type `ITEM`.
     */
    item_data?: CatalogItem;
    /**
     * Structured data for a `CatalogCategory`, set for CatalogObjects of type `CATEGORY`.
     */
    category_data?: CatalogCategory;
    /**
     * Structured data for a `CatalogItemVariation`, set for CatalogObjects of type `ITEM_VARIATION`.
     */
    item_variation_data?: CatalogItemVariation;
    /**
     * Structured data for a `CatalogTax`, set for CatalogObjects of type `TAX`.
     */
    tax_data?: CatalogTax;
    /**
     * Structured data for a `CatalogDiscount`, set for CatalogObjects of type `DISCOUNT`.
     */
    discount_data?: CatalogDiscount;
    /**
     * Structured data for a `CatalogModifierList`, set for CatalogObjects of type `MODIFIER_LIST`.
     */
    modifier_list_data?: CatalogModifierList;
    /**
     * Structured data for a `CatalogModifier`, set for CatalogObjects of type `MODIFIER`.
     */
    modifier_data?: CatalogModifier;
    /**
     * Structured data for a `CatalogTimePeriod`, set for CatalogObjects of type `TIME_PERIOD`.
     */
    time_period_data?: CatalogTimePeriod;
    /**
     * Structured data for a `CatalogProductSet`, set for CatalogObjects of type `PRODUCT_SET`.
     */
    product_set_data?: CatalogProductSet;
    /**
     * Structured data for a `CatalogPricingRule`, set for CatalogObjects of type `PRICING_RULE`.
     */
    pricing_rule_data?: CatalogPricingRule;
    /**
     * Structured data for a `CatalogImage`, set for CatalogObjects of type `IMAGE`.
     */
    image_data?: CatalogImage;
    /**
     * Structured data for a `CatalogMeasurementUnit`, set for CatalogObjects of type `MEASUREMENT_UNIT`.
     */
    measurement_unit_data?: CatalogMeasurementUnit;
    /**
     * Structured data for a `CatalogItemOption`, set for CatalogObjects of type `ITEM_OPTION`.
     */
    item_option_data?: CatalogItemOption;
    /**
     * Structured data for a `CatalogItemOptionValue`, set for CatalogObjects of type `ITEM_OPTION_VAL`.
     */
    item_option_value_data?: CatalogItemOptionValue;
    /**
     * Structured data for a `CatalogCustomAttributeDefinition`, set for CatalogObjects of type `CUSTOM_ATTRIBUTE_DEFINITION`.
     */
    custom_attribute_definition_data?: CatalogCustomAttributeDefinition;
}

/**
 * A batch of catalog objects.
 */
export class CatalogObjectBatch {
    /**
     * A list of CatalogObjects belonging to this batch.
     */
    objects: Array<CatalogObject>;
}

/**
 * Possible types of CatalogObjects returned from the Catalog, each containing type-specific properties in the
 * `*_data` field corresponding to the object type.
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
     * A list of unique IDs for the catalog time periods when this pricing rule is in effect.
     * If left unset, the pricing rule is always in effect.
     */
    time_period_ids?: Array<string>;
    /**
     * Unique ID for the `CatalogDiscount` to take off the price of all matched items.
     */
    discount_id?: string;
    /**
     * Unique ID for the `CatalogProductSet` that will be matched by this rule. A match rule matches within the entire cart.
     * A match rule can match multiple times in the cart. If no `ProductSet` is present, the rule will match all products.
     */
    match_products_id?: string;
    /**
     * @deprecated Please use the `exclude_products_id` field to apply an exclude set instead.
     * Exclude sets allow better control over quantity ranges and offer more flexibility for which matched items receive a discount.
     * `CatalogProductSet` to apply the pricing to. An apply rule matches within the subset of the cart that fits the match
     * rules (the match set). An apply rule can only match once in the match set. If not supplied, the pricing will be
     * applied to all products in the match set. Other products retain their base price, or a price generated by other rules.
     */
    apply_products_id?: string;
    /**
     * `CatalogProductSet` to exclude from the pricing rule. An exclude rule matches within the subset of the cart that
     * fits the match rules (the match set). An exclude rule can only match once in the match set. If not supplied,
     * the pricing will be applied to all products in the match set. Other products retain their base price, or
     * a price generated by other rules.
     */
    exclude_products_id?: string;
    /**
     * Represents the date the Pricing Rule is valid from. Represented in RFC3339 full-date format (YYYY-MM-DD).
     */
    valid_from_date?: string;
    /**
     * Represents the local time the pricing rule should be valid from. Represented in RFC3339 partial-time format (HH:MM:SS).
     * Partial seconds will be truncated.
     */
    valid_from_local_time?: string;
    /**
     * Represents the date the Pricing Rule is valid until. Represented in RFC3339 full-date format (YYYY-MM-DD).
     */
    valid_until_date?: string;
    /**
     * Represents the local time the pricing rule should be valid until.
     * Represented in RFC3339 partial-time format (HH:MM:SS). Partial seconds will be truncated.
     */
    valid_until_local_time?: string;
    /**
     * If an `exclude_products_id` was given, controls which subset of matched products is excluded from any discounts.
     * Default value: `LEAST_EXPENSIVE` See [ExcludeStrategy](#type-excludestrategy) for possible values.
     */
    exclude_strategy?: string;
}

/**
 * Indicates whether the price of a CatalogItemVariation should be entered manually at the time of sale.
 */
export class CatalogPricingType {}

/**
 * Represents a collection of catalog objects for the purpose of applying a `PricingRule`. Including a catalog object will
 * include all of its subtypes. For example, including a category in a product set will include all of its items and
 * associated item variations in the product set. Including an item in a product set will also include its item variations.
 */
export class CatalogProductSet {
    /**
     * User-defined name for the product set. For example, "Clearance Items" or "Winter Sale Items".
     */
    name?: string;
    /**
     * Unique IDs for any `CatalogObject` included in this product set. Any number of these catalog objects can be in
     * an order for a pricing rule to apply. This can be used with `product_ids_all` in a parent `CatalogProductSet`
     * to match groups of products for a bulk discount, such as a discount for an entree and side combo.
     * Only one of `product_ids_all`, `product_ids_any`, or `all_products` can be set. Max: 500 catalog object IDs.
     */
    product_ids_any?: Array<string>;
    /**
     * Unique IDs for any `CatalogObject` included in this product set. All objects in this set must be included in an
     * order for a pricing rule to apply. Only one of `product_ids_all`, `product_ids_any`, or `all_products` can be set.
     * Max: 500 catalog object IDs.
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
 *  A query to be applied to a `SearchCatalogObjectsRequest`. Only one query field may be present. Where an attribute
 *  name is required, it should be specified as the name of any field marked "searchable" from the structured data types
 *  for the desired result object type(s) (`CatalogItem`, `CatalogItemVariation`, `CatalogCategory`, `CatalogTax`,
 *  `CatalogDiscount`, `CatalogModifierList`, `CatalogModifier`).
 *  For example, a query that should return Items may specify attribute names from any of the searchable fields of the
 *  `CatalogItem` data type, namely `name`, `description`, and `abbreviation`.
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
     * A query that returns only objects whose searchable attributes contain all of the given keywords as prefixes.
     * For example, if a `CatalogItem` contains attributes `{\"name\": \"t-shirt\"}` and `{\"description\": \"Small, Purple\"}`,
     * it will be matched by the query `{\"keywords\": [\"shirt\", \"sma\", \"purp\"]}`.
     */
    text_query?: CatalogQueryText;
    /**
     * A query that returns all `CatalogItem`s that have any of the given `CatalogTax`es enabled.
     */
    items_for_tax_query?: CatalogQueryItemsForTax;
    /**
     * A query that returns all `CatalogItem`s that have any of the given `CatalogModifierList`s enabled.
     */
    items_for_modifier_list_query?: CatalogQueryItemsForModifierList;
    /**
     * A query that returns all `CatalogItem`s that have all of the given `CatalogItemOption`s.
     */
    items_for_item_options_query?: CatalogQueryItemsForItemOptions;
    /**
     * A query that returns all `CatalogItemVariation`s that have all of the given `CatalogItemOption` values.
     */
    item_variations_for_item_option_values_query?: CatalogQueryItemVariationsForItemOptionValues;
}

export class CatalogQueryCustomAttributeUsage {
    custom_attribute_definition_ids?: Array<string>;
    has_value?: boolean;
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

export class CatalogQueryFilteredItems {
    text_filter?: string;
    search_vendor_code?: boolean;
    category_ids?: Array<string>;
    /**
     * See [CatalogQueryFilteredItemsStockLevel](#type-catalogqueryfiltereditemsstocklevel) for possible values
     */
    stock_levels?: Array<string>;
    enabled_location_ids?: Array<string>;
    vendor_ids?: Array<string>;
    /**
     * See [CatalogItemProductType](#type-catalogitemproducttype) for possible values
     */
    product_types?: Array<string>;
    custom_attribute_filters?: Array<CatalogQueryFilteredItemsCustomAttributeFilter>;
    /**
     * See [CatalogQueryFilteredItemsNullableAttribute](#type-catalogqueryfiltereditemsnullableattribute) for possible values
     */
    does_not_exist?: Array<string>;
    /**
     * See [SortOrder](#type-sortorder) for possible values
     */
    sort_order?: string;
}

export class CatalogQueryFilteredItemsCustomAttributeFilter {
    /**
     * See [CatalogQueryFilteredItemsCustomAttributeFilterFilterType](#type-catalogqueryfiltereditemscustomattributefilterfiltertype) for possible values
     */
    filter_type?: string;
    custom_attribute_definition_ids?: Array<string>;
    custom_attribute_value_exact?: string;
    custom_attribute_value_prefix?: string;
    custom_attribute_min_value?: string;
    custom_attribute_max_value?: string;
}

export class CatalogQueryFilteredItemsCustomAttributeFilterFilterType {}

export class CatalogQueryFilteredItemsNullableAttribute {}

export class CatalogQueryFilteredItemsStockLevel {}

export class CatalogQueryItemVariationsForItemOptionValues {
    /**
     * A set of `CatalogItemOptionValue` IDs to be used to find associated `CatalogItemVariation`s.
     * All ItemVariations that contain all of the given Item Option Values (in any order) will be returned.
     */
    item_option_value_ids?: Array<string>;
}

export class CatalogQueryItemsForItemOptions {
    /**
     * A set of `CatalogItemOption` IDs to be used to find associated `CatalogItem`s.
     * All Items that contain all of the given Item Options (in any order) will be returned.
     */
    item_option_ids?: Array<string>;
}

export class CatalogQueryItemsForModifierList {
    /**
     * A set of `CatalogModifierList` IDs to be used to find associated `CatalogItem`s.
     */
    modifier_list_ids: Array<string>;
}

export class CatalogQueryItemsForTax {
    /**
     * A set of `CatalogTax` IDs to be used to find associated `CatalogItem`s.
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
     * The desired sort order, "ASC" (ascending) or "DESC" (descending). See [SortOrder](#type-sortorder) for possible values.
     */
    sort_order?: SortOrderType;
}

export class CatalogQueryText {
    /**
     * A list of 1, 2, or 3 search keywords. Keywords with fewer than 3 characters are ignored.
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
     * with a particular `CatalogItem`.
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
 * @deprecated recommend using [CreatePayment](#endpoint-payments-createpayment)
 * Defines the parameters that can be included in the body of a request to the [Charge](#endpoint-charge) endpoint.
 */
export class ChargeRequest {
    /**
     * A value you specify that uniquely identifies this transaction among transactions you've created.
     * If you're unsure whether a particular transaction succeeded, you can reattempt it with the same idempotency key
     * without worrying about double-charging the buyer. See [Idempotency keys](#idempotencykeys) for more information.
     */
    idempotency_key: string;
    /**
     * The amount of money to charge. Note that you specify the amount in the __smallest denomination of the applicable currency__.
     * For example, US dollar amounts are specified in cents.
     * See [Working with monetary amounts](https://developer.squareup.com/docs/build-basics/working-with-monetary-amounts) for details.
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
     * Capture (with the `CaptureTransaction` or a Void (with the `VoidTransaction`. Default value: `false`
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
     * The buyer's billing address. This value is optional, but this transaction is ineligible for chargeback protection
     * if neither this parameter nor `shipping_address` is provided.
     */
    billing_address?: Address;
    /**
     * The buyer's shipping address, if available. This value is optional, but this transaction is ineligible for
     * chargeback protection if neither this parameter nor `billing_address` is provided.
     */
    shipping_address?: Address;
    /**
     * The buyer's email address, if available.
     * This value is optional, but this transaction is ineligible for chargeback protection if it is not provided.
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
     * A token generated by SqPaymentForm's verifyBuyer() that represents customer's device info and 3ds challenge result.
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
 * Completes (captures) a payment. By default, payments are set to autocomplete immediately after they are created.
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
     * The latitude of the coordinate expressed in degrees.
     */
    latitude?: number;
    /**
     * The longitude of the coordinate expressed in degrees.
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

export class CreateCatalogImageRequest {
    /**
     * A unique string that identifies this CreateCatalogImage request.
     * Keys can be any valid string but must be unique for every CreateCatalogImage request.
     * See [Idempotency keys](https://developer.squareup.com/docs/basics/api101/idempotency) for more information.
     */
    idempotency_key: string;
    /**
     * Unique ID of the `CatalogObject` to attach to this `CatalogImage`. Leave this field empty to create unattached images,
     * for example if you are building an integration where these images can be attached to catalog items at a later time.
     */
    object_id?: string;
    /**
     * The new `IMAGE`-type `CatalogObject` to be attached to this `CatalogImage`.
     * If the `CatalogObject` already has a `CatalogImage`, this call will overwrite it.
     */
    image?: CatalogObject;
}

export class CreateCatalogImageResponse {
    /**
     * Information on any errors encountered.
     */
    errors?: Array<Error>;
    /**
     * The newly created `CatalogImage` including a Square-generated URL for each image.
     */
    image?: CatalogObject;
}

/**
 * Defines the parameters that can be included in the body of a request to the __CreateCheckout__ endpoint.
 */
export class CreateCheckoutRequest {
    /**
     * A unique string that identifies this checkout among others you've created. It can be any valid string but must be
     * unique for every order sent to Square Checkout for a given location ID. The idempotency key is used to avoid processing
     * the same order more than once. If you're unsure whether a particular checkout was created successfully,
     * you can reattempt it with the same idempotency key and all the same other parameters without worrying about creating duplicates.
     * We recommend using a random number/string generator native to the language you are working in to generate
     * strings for your idempotency keys.
     * See the [Idempotency](https://developer.squareup.com/docs/working-with-apis/idempotency) guide for more information.
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
 * Defines the fields that are included in the response body of a request to the __CreateCheckout__ endpoint.
 */
export class CreateCheckoutResponse {
    /**
     * The newly created checkout.
     * If the same request was made with the same idempotency_key, this will be the checkout created with the idempotency_key.
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
     * Card nonces are generated by the Square Payment Form when customers enter their card information.
     * See [Embedding the payment form](https://developer.squareup.com/docs/payment-form/payment-form-walkthrough) for more information.
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
     * The idempotency key for the request.
     * See the [Idempotency](https://developer.squareup.com/docs/working-with-apis/idempotency) guide for more information.
     */
    idempotency_key?: string;
    /**
     * The given (i.e., first) name associated with the customer profile.
     */
    given_name?: string;
    /**
     * The family (i.e., last) name associated with the customer profile.
     */
    family_name?: string;
    /**
     * A business name associated with the customer profile.
     */
    company_name?: string;
    /**
     * A nickname for the customer profile.
     */
    nickname?: string;
    /**
     * The email address associated with the customer profile.
     */
    email_address?: string;
    /**
     * The physical address associated with the customer profile.
     */
    address?: Address;
    /**
     * The 11-digit phone number associated with the customer profile.
     */
    phone_number?: string;
    /**
     * An optional, second ID used to associate the customer profile with an entity in another system.
     */
    reference_id?: string;
    /**
     * A custom note associated with the customer profile.
     */
    note?: string;
    /**
     * The birthday associated with the customer profile, in RFC-3339 format. Year is optional, timezone and times are not allowed.
     * For example: `0000-09-01T00:00:00-00:00` indicates a birthday on September 1st. `1998-09-01T00:00:00-00:00`
     * indications a birthday on September 1st 1998.
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
 * Defines parameters for a CreateDisputeEvidenceFile request.
 */
export class CreateDisputeEvidenceFileRequest {
    /**
     * Unique ID. For more information, see [Idempotency](https://developer.squareup.com/docs/docs/working-with-apis/idempotency).
     */
    idempotency_key: string;
    /**
     * The type of evidence you are uploading. See [DisputeEvidenceType](#type-disputeevidencetype) for possible values
     */
    evidence_type?: string;
    /**
     * The MIME type of the uploaded file. One of image/heic, image/heif, image/jpeg, application/pdf,  image/png, image/tiff.
     */
    content_type?: string;
}

/**
 * Defines fields in a CreateDisputeEvidenceFile response.
 */
export class CreateDisputeEvidenceFileResponse {
    /**
     * Any errors that occurred during the request.
     */
    errors?: Array<Error>;
    /**
     * The metadata of the newly uploaded dispute evidence.
     */
    evidence?: DisputeEvidence;
}

/**
 * Defines parameters for a CreateDisputeEvidenceText request.
 */
export class CreateDisputeEvidenceTextRequest {
    /**
     * Unique ID. For more information, see [Idempotency](https://developer.squareup.com/docs/docs/working-with-apis/idempotency).
     */
    idempotency_key: string;
    /**
     * The type of evidence you are uploading. See [DisputeEvidenceType](#type-disputeevidencetype) for possible values.
     */
    evidence_type?: string;
    /**
     * The evidence string.
     */
    evidence_text: string;
}

/**
 * Defines fields in a CreateDisputeEvidenceText response.
 */
export class CreateDisputeEvidenceTextResponse {
    /**
     * Any errors that occurred during the request.
     */
    errors?: Array<Error>;
    /**
     * The newly uploaded dispute evidence metadata.
     */
    evidence?: DisputeEvidence;
}

/**
 * Request object for the [CreateLocation](#endpoint-createlocation) endpoint.
 */
export class CreateLocationRequest {
    /**
     * The initial values of the location being created. The `name` field is required. All other fields are optional.
     * Unspecified fields will be set to default values using existing location data.
     */
    location?: Location;
}

/**
 * Response object returned by the [CreateLocation](#endpoint-createlocation) endpoint.
 */
export class CreateLocationResponse {
    /**
     * Information on errors encountered during the request.
     */
    errors?: Array<Error>;
    /**
     * The newly created `Location`.
     */
    location?: Location;
}

/**
 * Defines the body parameters that can be provided in a request to the __CreateMobileAuthorizationCode__ endpoint.
 */
export class CreateMobileAuthorizationCodeRequest {
    /**
     * The Square location ID the authorization code should be tied to.
     */
    location_id?: string;
}

/**
 * Defines the fields that are included in the response body of a request to the __CreateMobileAuthorizationCode__ endpoint.
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
     * A value you specify that uniquely identifies this order among orders you've created.
     * If you're unsure whether a particular order was created successfully, you can reattempt it with the same idempotency
     * key without worrying about creating duplicate orders.
     * See [Idempotency](https://developer.squareup.com/docs/basics/api101/idempotency) for more information.
     */
    idempotency_key?: string;
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
     * A unique string that identifies this CreatePayment request. Keys can be any valid string but must be unique
     * for every CreatePayment request. Max: 45 characters.
     * See [Idempotency keys](https://developer.squareup.com/docs/basics/api101/idempotency) for more information.
     */
    idempotency_key: string;
    /**
     * The amount of money to accept for this payment, not including `tip_money`.
     * Must be specified in the smallest denomination of the applicable currency. For example, US dollar amounts are specified in cents.
     * See [Working with monetary amounts](https://developer.squareup.com/docs/build-basics/working-with-monetary-amounts) for details.
     * The currency code must match the currency associated with the business that is accepting the payment.
     */
    amount_money: Money;
    /**
     * The amount designated as a tip, in addition to `amount_money`. Must be specified in the smallest denomination of
     * the applicable currency. For example, US dollar amounts are specified in cents.
     * See [Working with monetary amounts](https://developer.squareup.com/docs/build-basics/working-with-monetary-amounts) for details.
     * The currency code must match the currency associated with the business that is accepting the payment.
     */
    tip_money?: Money;
    /**
     * The amount of money the developer is taking as a fee for facilitating the payment on behalf of the seller.
     * Cannot be more than 90% of the total amount of the Payment. Must be specified in the smallest denomination of
     * the applicable currency. For example, US dollar amounts are specified in cents.
     * See [Working with monetary amounts](https://developer.squareup.com/docs/build-basics/working-with-monetary-amounts) for details.
     * The fee currency code must match the currency associated with the merchant that is accepting the payment.
     * The application must be from a developer account in the same country, and using the same currency code, as the merchant.
     * For more information about the application fee scenario,
     * see [Collect Fees](https://developer.squareup.com/docs/payments-api/take-payments-and-collect-fees).
     */
    app_fee_money?: Money;
    /**
     * The duration of time after the payment's creation when Square automatically cancels the payment.
     * This automatic cancellation applies only to payments that don't reach a terminal state (COMPLETED, CANCELED, or FAILED)
     * before the `delay_duration` time period. This parameter should be specified as a time duration, in RFC 3339 format,
     * with a minimum value of 1 minute. Notes: This feature is only supported for card payments.
     * This parameter can only be set for a delayed capture payment (`autocomplete=false`).
     * Default:
     *  - Card Present payments: "PT36H" (36 hours) from the creation time.
     *  - Card Not Present payments: "P7D" (7 days) from the creation time.
     */
    delay_duration?: string;
    /**
     * If set to `true`, this payment will be completed when possible.
     * If set to `false`, this payment will be held in an approved state until either explicitly completed (captured) or canceled (voided).
     * For more information, see [Delayed Payments](https://developer.squareup.com/docs/payments-api/take-payments#delayed-payments).
     * Default: true.
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
     * An identifying token generated by `SqPaymentForm.verifyBuyer()`. Verification tokens encapsulate customer device
     * information and 3-D Secure challenge results to indicate that Square has verified the buyer identity.
     * See the [SCA Overview](https://developer.squareup.com/docs/sca-overview).
     */
    verification_token?: string;
    /**
     * If set to true and charging a Square Gift Card, a payment may be returned with amount_money equal to less than what was requested.
     * Example, a request for $20 when charging a Square Gift Card with balance of $5 wil result in an APPROVED payment of $5.
     * You may choose to prompt the buyer for an additional payment to cover the remainder, or cancel the gift card payment.
     * Cannot be `true` when `autocomplete = true`. For more information, see [Partial amount with Square gift cards]
     * (https://developer.squareup.com/docs/payments-api/take-payments#partial-payment-gift-card). Default: false.
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
     * An optional note to be entered by the developer when creating a payment. Limit 500 characters.
     */
    note?: string;
    /**
     * Optional additional payment information to include on the customer's card statement as part of statement description.
     * This can be, for example, an invoice number, ticket number, or short description that uniquely identifies the purchase.
     * Limit 20 characters. Note that the statement_description_identifier may get truncated on the statement description
     * to fit the required information including the Square identifier (SQ *) and name of the merchant taking the payment.
     */
    statement_description_identifier?: string;
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
     * worrying about duplicating the refund. See [Idempotency keys](#idempotencykeys) for more information.
     */
    idempotency_key: string;
    /**
     * The ID of the tender to refund. A `Transaction` has one or more `tenders` (i.e., methods of payment) associated with it,
     * and you refund each tender separately with the Connect API.
     */
    tender_id: string;
    /**
     * A description of the reason for the refund. Default value: `Refund via API`
     */
    reason?: string;
    /**
     * The amount of money to refund. Note that you specify the amount in the __smallest denomination of the applicable currency__.
     * For example, US dollar amounts are specified in cents.
     * See [Working with monetary amounts](https://developer.squareup.com/docs/build-basics/working-with-monetary-amounts) for details.
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
 * Represents a Square customer profile, which can have one or more cards on file associated with it.
 */
export class Customer {
    /**
     * A unique, Square-assigned object ID.
     */
    id: string;
    /**
     * The time when the customer profile was created, in RFC 3339 format.
     */
    created_at: string;
    /**
     * The time when the customer profile was last updated, in RFC 3339 format.
     */
    updated_at: string;
    /**
     * Payment details of cards stored on file for the customer profile.
     */
    cards?: Array<Card>;
    /**
     * The given (i.e., first) name associated with the customer profile.
     */
    given_name?: string;
    /**
     * The family (i.e., last) name associated with the customer profile.
     */
    family_name?: string;
    /**
     * A nickname for the customer profile.
     */
    nickname?: string;
    /**
     * A business name associated with the customer profile.
     */
    company_name?: string;
    /**
     * The email address associated with the customer profile.
     */
    email_address?: string;
    /**
     * The physical address associated with the customer profile.
     */
    address?: Address;
    /**
     * The 11-digit phone number associated with the customer profile.
     */
    phone_number?: string;
    /**
     * The birthday associated with the customer profile, in RFC-3339 format. Year is optional, timezone and times are not allowed.
     * For example: `0000-09-01T00:00:00-00:00` indicates a birthday on September 1st. `1998-09-01T00:00:00-00:00`
     * indications a birthday on September 1st 1998.
     */
    birthday?: string;
    /**
     * An optional, second ID used to associate the customer profile with an entity in another system.
     */
    reference_id?: string;
    /**
     * A custom note associated with the customer profile.
     */
    note?: string;
    /**
     * Represents general customer preferences.
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
 * Represents a set of `CustomerQuery` filters used to limit the set of `Customers` returned by SearchCustomers.
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
 * Represents communication preferences for the customer profile.
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
 */
export class CustomerSort {
    /**
     * Indicates the information used to sort the results. For example, by creation date. Default: `DEFAULT`.
     * See [CustomerSortField](#type-customersortfield) for possible values.
     */
    field?: string;
    /**
     * Indicates the order in which results should be displayed based on the value of the sort field. String comparisons
     * use standard alphabetic comparison to determine order. Strings representing numbers are sorted as strings. Default: `ASC`.
     * See [SortOrder](#type-sortorder) for possible values.
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
     * Information on any errors encountered.
     */
    errors?: Array<Error>;
    /**
     * The IDs of all catalog objects deleted by this request. Multiple IDs may be returned when associated objects
     * are also deleted, for example a catalog item variation will be deleted (and its ID included in this field)
     * when its parent catalog item is deleted.
     */
    deleted_object_ids?: Array<string>;
    /**
     * The database [timestamp](https://developer.squareup.com/docs/build-basics/working-with-dates) of this deletion
     * in RFC 3339 format, e.g., `2016-09-04T23:59:33.123Z`.
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
 * Details about the device that took the payment.
 */
export class DeviceDetails {
    /**
     * Square-issued ID of the device.
     */
    device_id?: string;
    /**
     * The name of the device set by the merchant.
     */
    device_name?: string;
}

/**
 * Represents a dispute a cardholder initiated with their bank.
 */
export class Dispute {
    /**
     * Unique ID for this `Dispute`, generated by Square.
     */
    dispute_id?: string;
    /**
     * The disputed amount. The amount can be less than the entire transaction amount.
     * For example, a cardholder purchased multiple items, however initiated dispute only for some of the items.
     */
    amount_money?: Money;
    /**
     * The dispute reason why cardholder initiated dispute with their bank. See [DisputeReason](#type-disputereason) for possible values
     */
    reason?: string;
    /**
     * The current state of this dispute. See [DisputeState](#type-disputestate) for possible values
     */
    state?: string;
    /**
     * The time when the next action is due, in RFC 3339 format.
     */
    due_at?: string;
    /**
     * The payment challenged in this dispute.
     */
    disputed_payment?: DisputedPayment;
    /**
     * The IDs of the evidence associated with the dispute.
     */
    evidence_ids?: Array<string>;
    /**
     * The card brand used in the disputed payment. See [CardBrand](#type-cardbrand) for possible values
     */
    card_brand?: string;
    /**
     * Timestamp when the dispute was created, in RFC 3339 format.
     */
    created_at?: string;
    /**
     * Timestamp when dispute was last updated, in RFC 3339 format.
     */
    updated_at?: string;
    /**
     * ID of the dispute in the card brand system, generated by the card brand.
     */
    brand_dispute_id?: string;
    /**
     * Timestamp when the dispute was reported, in RFC 3339 format.
     */
    reported_date?: string;
    /**
     * The current version of the `Dispute`.
     */
    version?: number;
    /**
     * The ID of location where dispute originated.
     */
    location_id?: string;
}

export class DisputeEvidence {
    /**
     * The Square-generated ID of the evidence.
     */
    evidence_id?: string;
    /**
     * The ID of the dispute the evidence is associated with.
     */
    dispute_id?: string;
    /**
     * The time when the next action is due, in RFC 3339 format.
     */
    uploaded_at?: string;
    /**
     * The type of the evidence. See [DisputeEvidenceType](#type-disputeevidencetype) for possible values
     */
    evidence_type?: string;
}

/**
 * A file to be uploaded as dispute evidence.
 */
export class DisputeEvidenceFile {
    /**
     * The file name including the file extension. For example: \"receipt.tiff\".
     */
    filename?: string;
    /**
     * Dispute evidence files must one of application/pdf, image/heic, image/heif, image/jpeg, image/png, image/tiff formats.
     */
    filetype?: string;
}

/**
 * Type of the dispute evidence.
 */
export class DisputeEvidenceType {}

/**
 * List of possible reasons why a cardholder might initiate a dispute with their bank.
 */
export class DisputeReason {}

/**
 * List of possible dispute states.
 */
export class DisputeState {}

/**
 * The payment the cardholder disputed.
 */
export class DisputedPayment {
    /**
     * Square-generated unique ID of the payment being disputed.
     */
    payment_id?: string;
}

/**
 * Determines item visibility in Ecom (Online Store) and Online Checkout.
 */
export class EcomVisibility {}

/**
 * AAn employee object that is used by the external API.
 */
export class Employee {
    /**
     * UUID for this object.
     */
    id?: string;
    /**
     * The employee's first name.
     */
    first_name?: string;
    /**
     * The employee's last name.
     */
    last_name?: string;
    /**
     * The employee's email address
     */
    email?: string;
    /**
     * The employee's phone number in E.164 format, i.e. "+12125554250"
     */
    phone_number?: string;
    /**
     * A list of location IDs where this employee has access to.
     */
    location_ids?: Array<string>;
    /**
     * Specifies the status of the employees being fetched. See [EmployeeStatus](#type-employeestatus) for possible values.
     */
    status?: ActivityStatusType;
    /**
     * Whether this employee is the owner of the merchant. Each merchant has one owner employee, and that employee has full authority over the account.
     */
    is_owner?: boolean;
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
 * Indicates which products matched by a CatalogPricingRule will be excluded if the pricing rule uses an exclude set.
 */
export class ExcludeStrategy {}

/**
 * Request object for fetching a specific `BankAccount` by the object ID.
 */
export class GetBankAccountByV1IdRequest {}

/**
 * Request object to fetch a specific `BankAccount` by the object ID.
 */
export class GetBankAccountRequest {}

/**
 * Response object returned by `GetBankAccount`.
 */
export class GetBankAccountResponse {
    /**
     * Information on errors encountered during the request.
     */
    errors?: Array<Error>;
    /**
     * The requested `BankAccount` object.
     */
    bank_account?: BankAccount;
}

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
     * A unique ID generated by Square for the `InventoryAdjustment`.
     */
    id?: string;
    /**
     * An optional ID provided by the application to tie the `InventoryAdjustment` to an external system.
     */
    reference_id?: string;
    /**
     * The `InventoryState` of the related quantity of items before the adjustment. See [InventoryState](#type-inventorystate) for possible values
     */
    from_state?: InventoryStateType;
    /**
     * The `InventoryState` of the related quantity of items after the adjustment. See [InventoryState](#type-inventorystate) for possible values
     */
    to_state?: InventoryStateType;
    /**
     * The Square ID of the `Location` where the related quantity of items are being tracked.
     */
    location_id?: string;
    /**
     * The Square generated ID of the `CatalogObject` being tracked.
     */
    catalog_object_id?: string;
    /**
     * The `CatalogObjectType` of the `CatalogObject` being tracked. Tracking is only supported for the `ITEM_VARIATION` type.
     */
    catalog_object_type?: string;
    /**
     * The number of items affected by the adjustment as a decimal string. Can support up to 5 digits after the decimal point.
     * @note The Point of Sale app and Dashboard do not currently support decimal quantities. If a Point of Sale app or
     * Dashboard attempts to read a decimal quantity on inventory counts or adjustments, the quantity will be rounded down to
     * the nearest integer. For example, `2.5` will become `2`, and `-2.5` will become `-3`.
     * Read [Decimal Quantities (BETA)](https://developer.squareup.com/docs/inventory-api/what-it-does#decimal-quantities-beta) for more information.
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
     * The Square ID of the `Employee` responsible for the inventory adjustment.
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
 * Indicates whether Square should alert the merchant when the inventory quantity of a CatalogItemVariation is low.
 */
export class InventoryAlertType {}

/**
 * Represents a single physical count, inventory, adjustment, or transfer that is part of the history of inventory
 * changes for a particular `CatalogObject`.
 */
export class InventoryChange {
    /**
     * Indicates how the inventory change was applied. See `InventoryChangeType` for all possible values.
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
 * Represents Square's estimated quantity of items in a particular state at a particular location based on the known
 * history of physical counts and inventory adjustments.
 */
export class InventoryCount {
    /**
     * The Square generated ID of the `CatalogObject` being tracked.
     */
    catalog_object_id?: string;
    /**
     * The `CatalogObjectType` of the `CatalogObject` being tracked. Tracking is only supported for the `ITEM_VARIATION` type.
     */
    catalog_object_type?: string;
    /**
     * The current `InventoryState` for the related quantity of items. See [InventoryState](#type-inventorystate) for possible values
     */
    state?: InventoryStateType;
    /**
     * The Square ID of the `Location` where the related quantity of items are being tracked.
     */
    location_id?: string;
    /**
     * The number of items affected by the estimated count as a decimal string. Can support up to 5 digits after the decimal point.
     * @note The Point of Sale app and Dashboard do not currently support decimal quantities. If a Point of Sale app or
     * Dashboard attempts to read a decimal quantity on inventory counts or adjustments, the quantity will be rounded
     * down to the nearest integer. For example, `2.5` will become `2`, and `-2.5` will become `-3`.
     * Read [Decimal Quantities (BETA)](https://developer.squareup.com/docs/docs/inventory-api/what-it-does#decimal-quantities-beta) for more information.
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
     * A unique ID generated by Square for the `InventoryPhysicalCount`.
     */
    id?: string;
    /**
     * An optional ID provided by the application to tie the `InventoryPhysicalCount` to an external system.
     */
    reference_id?: string;
    /**
     * The Square generated ID of the `CatalogObject` being tracked.
     */
    catalog_object_id?: string;
    /**
     * The `CatalogObjectType` of the `CatalogObject` being tracked. Tracking is only supported for the `ITEM_VARIATION` type.
     */
    catalog_object_type?: string;
    /**
     * The current `InventoryState` for the related quantity of items.
     * See [InventoryState](#type-inventorystate) for possible values.
     */
    state?: InventoryStateType;
    /**
     * The Square ID of the `Location` where the related quantity of items are being tracked.
     */
    location_id?: string;
    /**
     * The number of items affected by the physical count as a decimal string. Can support up to 5 digits after the decimal point.
     * @note The Point of Sale app and Dashboard do not currently support decimal quantities. If a Point of Sale app or
     * Dashboard attempts to read a decimal quantity on inventory counts or adjustments, the quantity will be rounded down
     * to the nearest integer. For example, `2.5` will become `2`, and `-2.5` will become `-3`. Read [Decimal
     * Quantities (BETA)](https://developer.squareup.com/docs/inventory-api/what-it-does#decimal-quantities-beta) for more information.
     */
    quantity?: string;
    /**
     * Read-only information about the application that submitted the physical count.
     */
    source?: SourceApplication;
    /**
     * The Square ID of the `Employee` responsible for the physical count.
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
     * A unique ID generated by Square for the `InventoryTransfer`.
     */
    id?: string;
    /**
     * An optional ID provided by the application to tie the `InventoryTransfer` to an external system.
     */
    reference_id?: string;
    /**
     * The `InventoryState` for the quantity of items being transfered.
     * See [InventoryState](#type-inventorystate) for possible values.
     */
    state?: InventoryStateType;
    /**
     * The Square ID of the `Location` where the related quantity of items were tracked before the transfer.
     */
    from_location_id?: string;
    /**
     * The Square ID of the `Location` where the related quantity of items were tracked after the transfer.
     */
    to_location_id?: string;
    /**
     * The Square generated ID of the `CatalogObject` being tracked.
     */
    catalog_object_id?: string;
    /**
     * The `CatalogObjectType` of the `CatalogObject` being tracked.Tracking is only supported for the `ITEM_VARIATION` type.
     */
    catalog_object_type?: string;
    /**
     * The number of items affected by the transfer as a decimal string. Can support up to 5 digits after the decimal point.
     * @note The Point of Sale app and Dashboard do not currently support decimal quantities. If a Point of Sale app or
     * Dashboard attempts to read a decimal quantity on inventory counts or adjustments, the quantity will be rounded down
     * to the nearest integer. For example, `2.5` will become `2`, and `-2.5` will become `-3`. Read [Decimal
     * Quantities (BETA)](https://developer.squareup.com/docs/docs/inventory-api/what-it-does#decimal-quantities-beta) for more information.
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
     * The Square ID of the `Employee` responsible for the inventory transfer.
     */
    employee_id?: string;
}

/**
 * Price and inventory alerting overrides for a `CatalogItemVariation` at a specific `Location`.
 */
export class ItemVariationLocationOverrides {
    /**
     * The ID of the `Location`.
     */
    location_id?: string;
    /**
     * The price of the `CatalogItemVariation` at the given `Location`, or blank for variable pricing.
     */
    price_money?: Money;
    /**
     * The pricing type (fixed or variable) for the `CatalogItemVariation` at the given `Location`.
     * See [CatalogPricingType](#type-catalogpricingtype) for possible values.
     */
    pricing_type?: string;
    /**
     * If `true`, inventory tracking is active for the `CatalogItemVariation` at this `Location`.
     */
    track_inventory?: boolean;
    /**
     * Indicates whether the `CatalogItemVariation` displays an alert when its inventory quantity is less than or
     * equal to its `inventory_alert_threshold`. See [InventoryAlertType](#type-inventoryalerttype) for possible values.
     */
    inventory_alert_type?: 'NONE' | 'LOW_QUANTITY';
    /**
     * If the inventory quantity for the variation is less than or equal to this value and `inventory_alert_type` is
     * `LOW_QUANTITY`, the variation displays an alert in the merchant dashboard. This value is always an integer.
     */
    inventory_alert_threshold?: number;
}

/**
 * Defines the query parameters that can be included in a request to t
 * he [ListAdditionalRecipientReceivableRefunds](#endpoint-listadditionalrecipientreceivablerefunds) endpoint.
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
     * A pagination cursor returned by a previous call to this endpoint.
     * Provide this to retrieve the next set of results for your original query.
     * See [Paginating results](#paginatingresults) for more information.
     */
    cursor?: string;
}

/**
 * Defines the fields that are included in the response body of a request to
 * the [ListAdditionalRecipientReceivableRefunds](#endpoint-listadditionalrecipientreceivablerefunds) endpoint.
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
     * parameter in a subsequent request to this endpoint. See [Paginating results](#paginatingresults) for more information.
     */
    cursor?: string;
}

/**
 * Defines the query parameters that can be included in a request to the [ListAdditionalRecipientReceivables](#endpoint-listadditionalrecipientreceivables) endpoint.
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
     * A pagination cursor returned by a previous call to this endpoint.
     * Provide this to retrieve the next set of results for your original query.
     * See [Paginating results](#paginatingresults) for more information.
     */
    cursor?: string;
}

/**
 * Defines the fields that are included in the response body of a request to
 * the [ListAdditionalRecipientReceivables](#endpoint-listadditionalrecipientreceivables) endpoint.
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
     * A pagination cursor for retrieving the next set of results, if any remain.
     * Provide this value as the `cursor` parameter in a subsequent request to this endpoint.
     * See [Paginating results](#paginatingresults) for more information.
     */
    cursor?: string;
}

/**
 * Request object for fetching all `BankAccount` objects linked to a account.
 */
export class ListBankAccountsRequest {
    /**
     * The pagination cursor returned by a previous call to this endpoint.
     * Use it in the next `ListBankAccounts` request to retrieve the next set  of results.
     * See the [Pagination](https://developer.squareup.com/docs/docs/working-with-apis/pagination) guide for more information.
     */
    cursor?: string;
    /**
     * Upper limit on the number of bank accounts to return in the response. Currently, 1000 is the largest supported limit.
     * You can specify a limit  of up to 1000 bank accounts. This is also the default limit.
     */
    limit?: number;
    /**
     * Location ID. You can specify this optional filter to retrieve only the linked bank accounts belonging to a specific location.
     */
    location_id?: string;
}

/**
 * Response object returned by ListBankAccounts.
 */
export class ListBankAccountsResponse {
    /**
     * Information on errors encountered during the request.
     */
    errors?: Array<Error>;
    /**
     * List of BankAccounts associated with this account.
     */
    bank_accounts?: Array<BankAccount>;
    /**
     * When a response is truncated, it includes a cursor that you can  use in a subsequent request to fetch next set of bank accounts.
     * If empty, this is the final response.
     * For more information, see [Pagination](https://developer.squareup.com/docs/docs/working-with-apis/pagination).
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

export class ListCashDrawerShiftEventsRequest {
    /**
     * The ID of the location to list cash drawer shifts for.
     */
    location_id: string;
    /**
     * Number of resources to be returned in a page of results (200 by default, 1000 max).
     */
    limit?: number;
    /**
     * Opaque cursor for fetching the next page of results.
     */
    cursor?: string;
}

export class ListCashDrawerShiftEventsResponse {
    /**
     * All of the events (payments, refunds, etc.) for a cash drawer during the shift.
     */
    events?: Array<CashDrawerShiftEvent>;
    /**
     * Opaque cursor for fetching the next page. Cursor is not present in the last page of results.
     */
    cursor?: string;
    /**
     * Any errors that occurred during the request.
     */
    errors?: Array<Error>;
}

export class ListCashDrawerShiftsRequest {
    /**
     * The ID of the location to query for a list of cash drawer shifts.
     */
    location_id: string;
    /**
     * The order in which cash drawer shifts are listed in the response, based on their opened_at field.
     * Default value: ASC See [SortOrder](#type-sortorder) for possible values.
     */
    sort_order?: string;
    /**
     * The inclusive start time of the query on opened_at, in ISO 8601 format.
     */
    begin_time?: string;
    /**
     * The exclusive end date of the query on opened_at, in ISO 8601 format.
     */
    end_time?: string;
    /**
     * Number of cash drawer shift events in a page of results (200 by default, 1000 max).
     */
    limit?: number;
    /**
     * Opaque cursor for fetching the next page of results.
     */
    cursor?: string;
}

export class ListCashDrawerShiftsResponse {
    /**
     * A collection of CashDrawerShiftSummary objects for shifts that match the query.
     */
    items?: Array<CashDrawerShiftSummary>;
    /**
     * Opaque cursor for fetching the next page of results. Cursor is not present in the last page of results.
     */
    cursor?: string;
    /**
     * Any errors that occurred during the request.
     */
    errors?: Array<Error>;
}

export class ListCatalogRequest {
    /**
     * TThe pagination cursor returned in the previous response. Leave unset for an initial request.
     * See [Pagination](https://developer.squareup.com/docs/basics/api101/pagination) for more information.
     */
    cursor?: string;
    /**
     * An optional case-insensitive, comma-separated list of object types to retrieve, for example `ITEM,ITEM_VARIATION,CATEGORY,IMAGE`.
     */
    types?: 'ITEM' | 'ITEM_VARIATION' | 'CATEGORY' | 'DISCOUNT' | 'TAX' | 'MODIFIER' | 'MODIFIER_LIST' | 'IMAGE';
}

export class ListCatalogResponse {
    /**
     * Information on any errors encountered.
     */
    errors?: Array<Error>;
    /**
     * The pagination cursor to be used in a subsequent request. If unset, this is the final response.
     * See [Pagination](https://developer.squareup.com/docs/basics/api101/pagination) for more information.
     */
    cursor?: string;
    /**
     * The CatalogObjects returned.
     */
    objects?: Array<CatalogObject>;
}

/**
 * Defines the query parameters that can be provided in a request to the ListCustomers endpoint.
 */
export class ListCustomersRequest {
    /**
     * A pagination cursor returned by a previous call to this endpoint. Provide this to retrieve the next set of results for your original query.
     * See the [Pagination guide](https://developer.squareup.com/docs/working-with-apis/pagination) for more information.
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
     * An array of `Customer` objects that match the provided query.
     */
    customers?: Array<Customer>;
    /**
     * A pagination cursor to retrieve the next set of results for the original query.
     * Only present if the request succeeded and additional results are available.
     * See the [Pagination guide](https://developer.squareup.com/docs/working-with-apis/pagination) for more information.
     */
    cursor?: string;
}

/**
 * Defines parameters for a ListDisputeEvidence request.
 */
export class ListDisputeEvidenceRequest {}

/**
 * Defines fields in a ListDisputeEvidence response.
 */
export class ListDisputeEvidenceResponse {
    /**
     * The list of evidence previously uploaded to the specified dispute.
     */
    evidence?: Array<DisputeEvidence>;
    /**
     * Information on errors encountered during the request.
     */
    errors?: Array<Error>;
}

/**
 * Defines request parameters for the ListDisputes endpoint.
 */
export class ListDisputesRequest {
    /**
     * A pagination cursor returned by a previous call to this endpoint.
     * Provide this to retrieve the next set of results for the original query.
     * For more information, see [Paginating](https://developer.squareup.com/docs/basics/api101/pagination).
     */
    cursor?: string;
    /**
     * The dispute states to filter the result. If not specified, the endpoint returns all open disputes (dispute status
     * is not `INQUIRY_CLOSED`, `WON`, or `LOST`). See [DisputeState](#type-disputestate) for possible values.
     */
    states?: Array<string>;
    /**
     * The ID of the location for which to return a list of disputes. If not specified, the endpoint returns all open
     * disputes (dispute status is not `INQUIRY_CLOSED`, `WON`, or  `LOST`) associated with all locations.
     */
    location_id?: string;
}

/**
 * Defines fields in a ListDisputes response.
 */
export class ListDisputesResponse {
    /**
     * Information on errors encountered during the request.
     */
    errors?: Array<Error>;
    /**
     * The list of Disputes.
     */
    disputes?: Array<Dispute>;
    /**
     * The pagination cursor to be used in a subsequent request. If unset, this is the final response.
     * For more information, see [Paginating](https://developer.squareup.com/docs/basics/api101/pagination).
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
 * Defines the fields that are included in requests to the __ListLocations__ endpoint.
 */
export class ListLocationsRequest {}

/**
 * Defines the fields that are included in the response body of a request to the __ListLocations__ endpoint.
 * One of `errors` or `locations` is present in a given response (never both).
 */
export class ListLocationsResponse {
    /**
     * Any errors that occurred during the request.
     */
    errors?: Array<Error>;
    /**
     * The business locations.
     */
    locations?: Array<Location>;
}

/**
 * Request object for the [ListMerchant](#endpoint-listmerchant) endpoint.
 */
export class ListMerchantsRequest {
    /**
     * The cursor generated by the previous response.
     */
    cursor?: number;
}

/**
 * The response object returned by the [ListMerchant](#endpoint-listmerchant) endpoint.
 */
export class ListMerchantsResponse {
    /**
     * Information on errors encountered during the request.
     */
    errors?: Array<Error>;
    /**
     * The requested `Merchant` entities.
     */
    merchant?: Array<Merchant>;
    /**
     * If the  response is truncated, the cursor to use in next request to fetch next set of objects.
     */
    cursor?: number;
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
     * A pagination cursor returned by a previous call to this endpoint. Provide this to retrieve the next set of results for the original query.
     * See [Pagination](https://developer.squareup.com/docs/basics/api101/pagination) for more information.
     */
    cursor?: string;
    /**
     * ID of location associated with payment.
     */
    location_id?: string;
    /**
     * If provided, only refunds with the given status are returned. For a list of refund status values, see `PaymentRefund`.
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
     * See [Pagination](https://developer.squareup.com/docs/basics/api101/pagination) for more information.
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
     * A pagination cursor returned by a previous call to this endpoint. Provide this to retrieve the next set of results for the original query.
     * See [Pagination](https://developer.squareup.com/docs/basics/api101/pagination) for more information.
     */
    cursor?: string;
    /**
     * Limit results to the location supplied. By default, results are returned for all locations associated with the merchant.
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
     * See [Pagination](https://developer.squareup.com/docs/basics/api101/pagination) for more information.
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
     * A pagination cursor returned by a previous call to this endpoint.
     * Provide this to retrieve the next set of results for your original query.
     * See [Paginating results](#paginatingresults) for more information.
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
     * See [Paginating results](#paginatingresults) for more information.
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
     * A pagination cursor returned by a previous call to this endpoint.
     * Provide this to retrieve the next set of results for your original query.
     * See [Paginating results](#paginatingresults) for more information.
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
     * See [Paginating results](#paginatingresults) for more information.
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
     * The Square-issued ID of the location.
     */
    id?: string;
    /**
     * The name of the location. This information appears in the dashboard as the nickname.
     */
    name?: string;
    /**
     * The physical address of the location.
     */
    address?: Address;
    /**
     * The [IANA Timezone](https://www.iana.org/time-zones) identifier for the timezone of the location.
     */
    timezone?: string;
    /**
     * The Square features that are enabled for the location. See `LocationCapability` for possible values.
     * See [LocationCapability](#type-locationcapability) for possible values
     */
    capabilities?: Array<string>;
    /**
     * The status of the location, either active or inactive. See [LocationStatus](#type-locationstatus) for possible values.
     */
    status?: ActivityStatusType;
    /**
     * The time when the location was created, in RFC 3339 format.
     */
    created_at?: string;
    /**
     * The ID of the merchant that owns the location.
     */
    merchant_id?: string;
    /**
     * The country of the location, in ISO 3166-1-alpha-2 format. See `Country` for possible values.
     * See [Country](#type-country) for possible values
     */
    country?: CountryType;
    /**
     * The language associated with the location, in [BCP 47 format](https://tools.ietf.org/html/bcp47#appendix-A).
     */
    language_code?: string;
    /**
     * The currency used for all transactions at this location, in ISO 4217 format. See `Currency` for possible values.
     * See [Currency](#type-currency) for possible values.
     */
    currency?: CurrencyType;
    /**
     * The phone number of the location in human readable format.
     */
    phone_number?: string;
    /**
     * The business name of the location This is the name visible to the customers of the location.
     * For example, this name appears on customer receipts.
     */
    business_name?: string;
    /**
     * The type of the location, either physical or mobile. See [LocationType](#type-locationtype) for possible values
     */
    type?: 'PHYSICAL' | 'MOBILE';
    /**
     * The website URL of the location.
     */
    website_url?: string;
    /**
     *  Represents the hours of operation for the location.
     */
    business_hours?: BusinessHours;
    /**
     * The email of the location. This email is visible to the customers of the location. For example, the email appears on customer receipts.
     */
    business_email?: string;
    /**
     * The description of the location.
     */
    description?: string;
    /**
     * The Twitter username of the location without the '&#64;' symbol.
     */
    twitter_username?: string;
    /**
     * The Instagram username of the location without the '&#64;' symbol.
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
     * The URL of the logo image for the location.
     */
    logo_url?: string;
    /**
     * The URL of the Point of Sale background image for the location.
     */
    pos_background_url?: string;
    /**
     * The merchant category code (MCC) of the location, as standardized by ISO 18245.
     * The MCC describes the kind of goods or services sold at the location.
     */
    mcc?: string;
}

/**
 * The capabilities a location may have.
 */
export class LocationCapability {}

/**
 * The status of the location, whether a location is active or inactive.
 */
export class LocationStatus {}

/**
 * A location's physical or mobile type.
 */
export class LocationType {}

/**
 * Represents a unit of measurement to use with a quantity, such as ounces or inches.
 * Exactly one of the following fields are required: `custom_unit`, `area_unit`, `length_unit`, `volume_unit`, and `weight_unit`.
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
     * Represents a standard unit of time. See [MeasurementUnitTime](#type-measurementunittime) for possible values.
     */
    time_unit?: string;
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
 * Unit of time used to measure a quantity (a duration).
 */
export class MeasurementUnitTime {}

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
 * Represents a Square seller.
 */
export class Merchant {
    /**
     * The Square-issued ID of the merchant.
     */
    id?: string;
    /**
     * The business name of the merchant.
     */
    business_name?: string;
    /**
     * The country code associated with the merchant account, in ISO 3166-1-alpha-2 format.
     * See [Country](#type-country) for possible values.
     */
    country: string;
    /**
     * The language code associated with the merchant account, in BCP 47 format.
     */
    language_code?: string;
    /**
     * The currency associated with the merchant account, in ISO 4217 format. See [Currency](#type-currency) for possible values
     */
    currency?: string;
    /**
     * The merchant status, active or inactive. See [MerchantStatus](#type-merchantstatus) for possible values
     */
    status?: string;
}

export class MerchantStatus {}

export class MethodErrorCodes {
    /**
     * See [ErrorCode](#type-errorcode) for possible values.
     */
    value?: Array<string>;
}

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
 * Represents an error encountered during a request to the Connect API. See [Handling errors](#handlingerrors) for more information.
 */
export class ModelError {
    /**
     * The high-level category for the error. See `ErrorCategory` for possible values.
     * See [ErrorCategory](#type-errorcategory) for possible values.
     */
    category: ErrorCategoryType;
    /**
     * The specific code of the error. See `ErrorCode` for possible values See [ErrorCode](#type-errorcode) for possible values.
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
 * Fields that do not explicitly define whether they are signed or unsigned are considered unsigned and can only hold positive amounts.
 * For signed fields, the sign of the value indicates the purpose of the money transfer.
 * See [Working with Monetary Amounts](/build-basics/working-with-monetary-amounts) for more information.
 */
export class Money {
    /**
     * The amount of money, in the smallest denomination of the currency indicated by `currency`.
     * For example, when `currency` is `USD`, `amount` is in cents. Monetary amounts can be positive or negative.
     * See the specific field description to determine the meaning of the sign in a particular case.
     */
    amount: number;
    /**
     * The type of currency, in __ISO 4217 format__. For example, the currency code for US dollars is `USD`.
     * See `Currency` for possible values. See [Currency](#type-currency) for possible values.
     */
    currency: CurrencyType;
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
     * The response also returns a refresh token.
     * For more information, see [Migrate to Using Refresh Tokens](https://developer.squareup.com/docs/authz/oauth/migration).
     */
    migration_token?: string;
}

export class ObtainTokenResponse {
    /**
     * A valid OAuth access token. OAuth access tokens are 64 bytes long.
     * Provide the access token in a header with every request to Connect API endpoints.
     * See the [Build with OAuth](https://developer.squareup.com/docs/authz/oauth/build-with-the-api) guide for more information.
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
     * A refresh token. For more information, see [OAuth access token management]
     * @link https://developer.squareup.com/docs/authz/oauth/how-it-works#oauth-access-token-management
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
     * The `Customer` ID of the customer associated with the order.
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
     * Application-defined data attached to this order. Metadata fields are intended to store descriptive references
     * or associations with an entity in another system or store brief information about the object.
     * Square does not process this field; it only stores and returns it in relevant API calls. Do not use metadata to
     * store any sensitive information (personally identifiable information, card details, etc.).
     * Keys written by applications must be 60 characters or less and must be in the character set `[a-zA-Z0-9_-]`.
     * Entries may also include metadata generated by Square. These keys are prefixed with a namespace, separated
     * from the key with a ':' character. Values have a max length of 255 characters. An application may have up to
     * 10 entries per metadata field. Entries written by applications are private and can only be read or modified by
     * the same application. See [Metadata](https://developer.squareup.com/docs/build-basics/metadata) for more information.
     */
    metadata?: { [key: string]: string; };
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
     * Version number which is incremented each time an update is committed to the order. Orders that were not created
     * through the API will not include a version and thus cannot be updated.
     * [Read more about working with versions](https://developer.squareup.com/docs/orders-api/manage-orders#update-orders).
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
     * [Read more about working with versions](https://developer.squareup.com/docs/orders-api/manage-orders#update-orders).
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
     * Application-defined data attached to this fulfillment. Metadata fields are intended to store descriptive
     * references or associations with an entity in another system or store brief information about the object.
     * Square does not process this field; it only stores and returns it in relevant API calls.
     * Do not use metadata to store any sensitive information (personally identifiable information, card details, etc.).
     * Keys written by applications must be 60 characters or less and must be in the character set `[a-zA-Z0-9_-]`.
     * Entries may also include metadata generated by Square. These keys are prefixed with a namespace, separated from
     * the key with a ':' character. Values have a max length of 255 characters. An application may have up to 10 entries
     * per metadata field. Entries written by applications are private and can only be read or modified by the same application.
     * See [Metadata](https://developer.squareup.com/docs/build-basics/metadata) for more information.
     */
    metadata?: { [key: string]: string; };
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
     * The `CatalogItemVariation` id applied to this line item.
     */
    catalog_object_id?: string;
    /**
     * The name of the variation applied to this line item.
     */
    variation_name?: string;
    /**
     * Application-defined data attached to this line item. Metadata fields are intended to store descriptive references
     * or associations with an entity in another system or store brief information about the object. Square does not
     * process this field; it only stores and returns it in relevant API calls. Do not use metadata to store any sensitive
     * information (personally identifiable information, card details, etc.). Keys written by applications must be 60
     * characters or less and must be in the character set `[a-zA-Z0-9_-]`. Entries may also include metadata generated by Square.
     * These keys are prefixed with a namespace, separated from the key with a ':' character. Values have a max length of 255 characters.
     * An application may have up to 10 entries per metadata field. Entries written by applications are private and can only
     * be read or modified by the same application.
     * See [Metadata](https://developer.squareup.com/docs/build-basics/metadata) for more information.
     */
    metadata?: { [key: string]: string; };
    /**
     * The [CatalogModifier](#type-catalogmodifier)s applied to this line item.
     */
    modifiers?: Array<OrderLineItemModifier>;
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
     * The catalog object id referencing `CatalogDiscount`.
     */
    catalog_object_id?: string;
    /**
     * The discount's name.
     */
    name?: string;
    /**
     * The type of the discount. Discounts that don't reference a catalog object ID must have a type of `FIXED_PERCENTAGE`
     * or `FIXED_AMOUNT`. See [OrderLineItemDiscountType](#type-orderlineitemdiscounttype) for possible values.
     */
    type?: DiscountType;
    /**
     * The percentage of the discount, as a string representation of a decimal number.
     * A value of `7.25` corresponds to a percentage of 7.25%. `percentage` is not set for amount-based discounts.
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
     * Application-defined data attached to this discount. Metadata fields are intended to store descriptive references
     * or associations with an entity in another system or store brief information about the object. Square does not process
     * this field; it only stores and returns it in relevant API calls. Do not use metadata to store any sensitive information
     * (personally identifiable information, card details, etc.). Keys written by applications must be 60 characters or
     * less and must be in the character set `[a-zA-Z0-9_-]`. Entries may also include metadata generated by Square.
     * These keys are prefixed with a namespace, separated from the key with a ':' character. Values have a max length
     * of 255 characters. An application may have up to 10 entries per metadata field. Entries written by applications
     * are private and can only be read or modified by the same application.
     * See [Metadata](https://developer.squareup.com/docs/build-basics/metadata) for more information.
     */
    metadata?: Record<string, string>;
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
     * The catalog object id referencing `CatalogModifier`.
     */
    catalog_object_id?: string;
    /**
     * The name of the item modifier.
     */
    name?: string;
    /**
     * The base price for the modifier. `base_price_money` is required for ad hoc modifiers.
     * If both `catalog_object_id` and `base_price_money` are set, `base_price_money` will override the predefined `CatalogModifier` price.
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
     * The catalog object id referencing `CatalogTax`.
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
     * Application-defined data attached to this tax. Metadata fields are intended to store descriptive references or
     * associations with an entity in another system or store brief information about the object. Square does not process
     * this field; it only stores and returns it in relevant API calls. Do not use metadata to store any sensitive information
     * (personally identifiable information, card details, etc.). Keys written by applications must be 60 characters
     * or less and must be in the character set `[a-zA-Z0-9_-]`. Entries may also include metadata generated by Square.
     * These keys are prefixed with a namespace, separated from the key with a ':' character. Values have a max length
     * of 255 characters. An application may have up to 10 entries per metadata field. Entries written by applications
     * are private and can only be read or modified by the same application.
     * See [Metadata](https://developer.squareup.com/docs/build-basics/metadata) for more information.
     */
    metadata?: Record<string, string>;
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
     * A `MeasurementUnit` that represents the unit of measure for the quantity.
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
     * The catalog object id referencing `CatalogDiscount`.
     */
    catalog_object_id?: string;
    /**
     * The discount's name.
     */
    name?: string;
    /**
     * The type of the discount. If it is created by API, it would be either `FIXED_PERCENTAGE` or `FIXED_AMOUNT`.
     * Discounts that don't reference a catalog object ID must have a type of `FIXED_PERCENTAGE` or `FIXED_AMOUNT`.
     * See [OrderLineItemDiscountType](#type-orderlineitemdiscounttype) for possible values.
     */
    type?: DiscountType;
    /**
     * The percentage of the tax, as a string representation of a decimal number. A value of `7.25` corresponds
     * to a percentage of 7.25%. `percentage` is not set for amount-based discounts.
     */
    percentage?: string;
    /**
     * The total declared monetary amount of the discount. `amount_money` is not set for percentage-based discounts.
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
     * The `CatalogItemVariation` id applied to this returned line item.
     */
    catalog_object_id?: string;
    /**
     * The name of the variation applied to this returned line item.
     */
    variation_name?: string;
    /**
     * The `CatalogModifier`s applied to this line item.
     */
    return_modifiers?: Array<OrderReturnLineItemModifier>;
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
     * The catalog object id referencing `CatalogModifier`.
     */
    catalog_object_id?: string;
    /**
     * The name of the item modifier.
     */
    name?: string;
    /**
     * The base price for the modifier. `base_price_money` is required for ad hoc modifiers.
     * If both `catalog_object_id` and `base_price_money` are set, `base_price_money` will override the predefined `CatalogModifier` price.
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
     * The catalog object ID of the associated `CatalogServiceCharge`.
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
     * The catalog object id referencing `CatalogTax`.
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
     * The catalog object ID referencing the service charge `CatalogObject`.
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
     * The list of references to taxes applied to this service charge.
     * Each `OrderLineItemAppliedTax` has a `tax_uid` that references the `uid` of a top-level `OrderLineItemTax` that
     * is being applied to this service charge. On reads, the amount applied is populated. An `OrderLineItemAppliedTax`
     * will be automatically created on every taxable service charge for all `ORDER` scoped taxes that are added to the order.
     * `OrderLineItemAppliedTax` records for `LINE_ITEM` scoped taxes must be added in requests for the tax to apply to
     * any taxable service charge. Taxable service charges have the `taxable` field set to true and calculated in
     * the `SUBTOTAL_PHASE`. To change the amount of a tax, modify the referenced top-level tax.
     */
    applied_taxes?: Array<OrderLineItemAppliedTax>;
    /**
     * Application-defined data attached to this service charge. Metadata fields are intended to store descriptive
     * references or associations with an entity in another system or store brief information about the object. Square
     * does not process this field; it only stores and returns it in relevant API calls. Do not use metadata to store
     * any sensitive information (personally identifiable information, card details, etc.). Keys written by applications
     * must be 60 characters or less and must be in the character set `[a-zA-Z0-9_-]`. Entries may also include metadata
     * generated by Square. These keys are prefixed with a namespace, separated from the key with a ':' character.
     * Values have a max length of 255 characters. An application may have up to 10 entries per metadata field.
     * Entries written by applications are private and can only be read or modified by the same application.
     * See [Metadata](https://developer.squareup.com/docs/build-basics/metadata) for more information.
     */
    metadata?: Record<string, string>;
}

/**
 * Represents a phase in the process of calculating order totals. Service charges are applied __after__ the indicated phase.
 * [Read more about how order totals are calculated](https://developer.squareup.com/docs/docs/orders-api/how-it-works#how-totals-are-calculated).
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
     * See [Idempotency](https://developer.squareup.com/docs/working-with-apis/idempotency) for more information.
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
     * The paid, updated `order`.
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
    id?: string;
    /**
     * Timestamp of when the payment was created, in RFC 3339 format.
     */
    created_at?: string;
    /**
     * Timestamp of when the payment was last updated, in RFC 3339 format.
     */
    updated_at?: string;
    /**
     * The amount of money processed for this payment, not including `tip_money`. Specified in the smallest denomination
     * of the applicable currency. For example, US dollar amounts are specified in cents. For more information,
     * see [Working with monetary amounts](https://developer.squareup.com/docs/build-basics/working-with-monetary-amounts).
     */
    amount_money?: Money;
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
     * For more information, see [Take Payments and Collect Fees](https://developer.squareup.com/docs/payments-api/take-payments-and-collect-fees).
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
     * The duration of time after the payment's creation when Square automatically applies the `delay_action` to the payment.
     * This automatic `delay_action` applies only to payments that don't reach a terminal state (COMPLETED, CANCELED, or FAILED)
     * before the `delay_duration` time period. This field is specified as a time duration, in RFC 3339 format.
     * Notes: This feature is only supported for card payments.
     * Default:
     *  - Card Present payments: "PT36H" (36 hours) from the creation time.
     *  - Card Not Present payments: "P7D" (7 days) from the creation time.
     */
    delay_duration?: string;
    /**
     * The action to be applied to the payment when the `delay_duration` has elapsed. This field is read only.
     * Current values include: `CANCEL`.
     */
    delay_action?: string;
    /**
     * Read only timestamp of when the `delay_action` will automatically be applied, in RFC 3339 format.
     * Note that this field is calculated by summing the payment's `delay_duration` and `created_at` fields.
     * The `created_at` field is generated by Square and may not exactly match the time on your local machine.
     */
    delayed_until?: string;
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
     * An optional ID of the employee associated with taking this payment.
     */
    employee_id?: string;
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
    /**
     * Additional payment information that gets added on the customer's card statement as part of the statement description.
     * Note that the statement_description_identifier may get truncated on the statement description to fit the
     * required information including the Square identifier (SQ *) and name of the merchant taking the payment.
     */
    statement_description_identifier?: string;
    /**
     * The payment's receipt number. The field will be missing if a payment is CANCELED.
     */
    receipt_number?: string;
    /**
     * The URL for the payment's receipt. The field will only be populated for COMPLETED payments.
     */
    receipt_url?: string;
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
     * Amount of money the app developer contributed to help cover the refunded amount. Specified in the smallest
     * denomination of the applicable currency. For example, US dollar amounts are specified in cents.
     * See [Working with monetary amounts](https://developer.squareup.com/docs/build-basics/working-with-monetary-amounts) for details.
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
     * A unique string that identifies this RefundPayment request.
     * Key can be any valid string but must be unique for every RefundPayment request.
     * For more information, see [Idempotency keys](https://developer.squareup.com/docs/working-with-apis/idempotency).
     */
    idempotency_key: string;
    /**
     * The amount of money to refund. Cannot be more than the `total_money` value of the payment minus the total amount
     * of all previously completed refunds for this payment. Must be specified in the smallest denomination of the applicable currency.
     * For example, US dollar amounts are specified in cents.
     * See [Working with monetary amounts](https://developer.squareup.com/docs/build-basics/working-with-monetary-amounts) for details.
     * The currency code must match the currency associated with the business that is charging the card.
     */
    amount_money: Money;
    /**
     * Amount of money the developer will contribute to help cover the refunded amount. Specified in the smallest
     * denomination of the applicable currency. For example, US dollar amounts are specified in cents. Value cannot be
     * more than the `amount_money`. You can specify this parameter in a refund request only if the same parameter was
     * also included when taking the payment. This is part of the application fee scenario the API supports.
     * For more information, see [Collect Fees](https://developer.squareup.com/docs/payments-api/take-payments-and-collect-fees).
     */
    app_fee_money?: Money;
    /**
     * Unique ID of the payment being refunded.
     */
    payment_id: string;
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
 * Defines the parameters that can be included in the body of a request to the __RegisterDomain__ endpoint.
 */
export class RegisterDomainRequest {
    /**
     * A domain name as described in RFC-1034 that will be registered with ApplePay
     */
    domain_name: string;
}

/**
 * Defines the fields that are included in the response body of a request to the __RegisterDomain__ endpoint.
 * Either `errors` or `status` will be present in a given response (never both).
 */
export class RegisterDomainResponse {
    /**
     * Any errors that occurred during the request.
     */
    errors?: Array<Error>;
    /**
     * Status of the domain registration. See `RegisterDomainResponseStatus` for possible values.
     */
    status?: 'PENDING' | 'VERIFIED';
}

/**
 * The status of domain registration.
 */
export class RegisterDomainResponseStatus {}

/**
 * Defines parameters for a RemoveDisputeEvidence request.
 */
export class RemoveDisputeEvidenceRequest {}

/**
 * Defines fields in a RemoveDisputeEvidence response.
 */
export class RemoveDisputeEvidenceResponse {
    /**
     * Information on errors encountered during the request.
     */
    errors?: Array<Error>;
}

export class RenewTokenRequest {
    /**
     * The token you want to renew.
     */
    access_token?: string;
}

export class RenewTokenResponse {
    /**
     * The renewed access token. This value might be different from the `access_token` you provided in your request.
     * You provide this token in a header with every request to Connect API endpoints.
     * See [Request and response headers](https://developer.squareup.com/docs/api/connect/v2/#requestandresponseheaders) for the format of this header.
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

export class RetrieveCashDrawerShiftRequest {
    /**
     * The ID of the location to retrieve cash drawer shifts from.
     */
    location_id: string;
}

export class RetrieveCashDrawerShiftResponse {
    /**
     * The cash drawer shift queried for.
     */
    cash_drawer_shift?: CashDrawerShift;
    /**
     * Any errors that occurred during the request.
     */
    errors?: Array<Error>;
}

export class RetrieveCatalogObjectRequest {
    /**
     * If `true`, the response will include additional objects that are related to the requested object, as follows:
     *  - If the `object` field of the response contains a CatalogItem, its associated CatalogCategory, CatalogTax objects,
     *  CatalogImages and CatalogModifierLists will be returned in the `related_objects` field of the response.
     *  - If the `object` field of the response contains a CatalogItemVariation, its parent CatalogItem will be returned
     *  in the `related_objects` field of the response.
     *  Default value: `false`
     */
    include_related_objects?: boolean;
}

export class RetrieveCatalogObjectResponse {
    /**
     * Information on any errors encountered.
     */
    errors?: Array<Error>;
    /**
     * The CatalogObjects returned.
     */
    object?: CatalogObject;
    /**
     * A list of CatalogObjects referenced by the object in the `object` field.
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
 * Defines parameters for a RetrieveDisputeEvidence request.
 */
export class RetrieveDisputeEvidenceRequest {}

/**
 * Defines fields in a RetrieveDisputeEvidence response.
 */
export class RetrieveDisputeEvidenceResponse {
    /**
     * Any errors that occurred during the request.
     */
    errors?: Array<Error>;
    /**
     * Metadata about the dispute evidence file.
     */
    evidence?: DisputeEvidence;
}

/**
 * Defines request parameters for the RetrieveDispute endpoint.
 */
export class RetrieveDisputeRequest {}

/**
 * Defines fields in a RetrieveDispute response.
 */
export class RetrieveDisputeResponse {
    /**
     * Information on errors encountered during the request.
     */
    errors?: Array<Error>;
    /**
     * Details about the requested `Dispute`.
     */
    dispute?: Dispute;
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
     * The requested `InventoryAdjustment`.
     */
    adjustment?: InventoryAdjustment;
}

export class RetrieveInventoryChangesRequest {
    /**
     * The `Location` IDs to look up as a comma-separated list. An empty list queries all locations.
     */
    location_ids?: string;
    /**
     * A pagination cursor returned by a previous call to this endpoint.
     * Provide this to retrieve the next set of results for the original query.
     * See the [Pagination](https://developer.squareup.com/docs/docs/working-with-apis/pagination) guide for more information.
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
     * See the [Pagination](https://developer.squareup.com/docs/docs/working-with-apis/pagination) guide for more information.
     */
    cursor?: string;
}

export class RetrieveInventoryCountRequest {
    /**
     * The `Location` IDs to look up as a comma-separated list. An empty list queries all locations.
     */
    location_ids?: string;
    /**
     * A pagination cursor returned by a previous call to this endpoint.
     * Provide this to retrieve the next set of results for the original query.
     * See the [Pagination](https://developer.squareup.com/docs/docs/working-with-apis/pagination) guide for more information.
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
     * See the [Pagination](https://developer.squareup.com/docs/docs/working-with-apis/pagination) guide for more information.
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
     * The requested `InventoryPhysicalCount`.
     */
    count?: InventoryPhysicalCount;
}

/**
 * Defines the fields that are included in the request body for the __RetrieveLocation__ endpoint.
 */
export class RetrieveLocationRequest {}

/**
 * Defines the fields that the [RetrieveLocation](#endpoint-retrievelocation) endpoint returns in a response.
 */
export class RetrieveLocationResponse {
    /**
     * Information on errors encountered during the request.
     */
    errors?: Array<Error>;
    /**
     * The requested location.
     */
    location?: Location;
}

/**
 * Request object for the [RetrieveMerchant](#endpoint-retrievemerchant) endpoint.
 */
export class RetrieveMerchantRequest {}

/**
 * The response object returned by the [RetrieveMerchant](#endpoint-retrieveMerchant) endpoint.
 */
export class RetrieveMerchantResponse {
    /**
     * Information on errors encountered during the request.
     */
    errors?: Array<Error>;
    /**
     * The requested `Merchant` object.
     */
    merchant?: Merchant;
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
     * The Square issued ID for your application, available from the [application dashboard](https://connect.squareup.com/apps).
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
     * See [Pagination](https://developer.squareup.com/docs/basics/api101/pagination) for more information.
     */
    cursor?: string;
    /**
     * The desired set of object types to appear in the search results.
     * See [CatalogObjectType](#type-catalogobjecttype) for possible values
     */
    object_types?: Array<ObjectType>;
    /**
     * If `true`, deleted objects will be included in the results.
     * Deleted objects will have their `is_deleted` field set to `true`.
     */
    include_deleted_objects?: boolean;
    /**
     * If `true`, the response will include additional objects that are related to the requested object, as follows:
     *  - If a CatalogItem is returned in the object field of the response, its associated CatalogCategory, CatalogTax
     *  objects, CatalogImage objects and CatalogModifierList objects will be included in the `related_objects` field of the response.
     *  - If a CatalogItemVariation is returned in the object field of the response, its parent CatalogItem will be
     *  included in the `related_objects` field of the response.
     */
    include_related_objects?: boolean;
    /**
     * Return objects modified after this [timestamp](https://developer.squareup.com/docs/build-basics/working-with-dates),
     * in RFC 3339 format, e.g., `2016-09-04T23:59:33.123Z`. The timestamp is exclusive - objects with a timestamp equal
     * to `begin_time` will not be included in the response.
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
     * Information on any errors encountered.
     */
    errors?: Array<Error>;
    /**
     * The pagination cursor to be used in a subsequent request. If unset, this is the final response.
     * See [Pagination](https://developer.squareup.com/docs/basics/api101/pagination) for more information.
     */
    cursor?: string;
    /**
     * The CatalogObjects returned.
     */
    objects?: Array<CatalogObject>;
    /**
     * A list of CatalogObjects referenced by the objects in the `objects` field.
     */
    related_objects?: Array<CatalogObject>;
    /**
     * When the associated product catalog was last updated.
     * Will match the value for `end_time` or `cursor` if either field is included in the `SearchCatalog` request.
     */
    latest_time?: string;
}

/**
 * Defines the fields included in the request body for the SearchCustomers endpoint.
 */
export class SearchCustomersRequest {
    /**
     * Include the pagination cursor in subsequent calls to this endpoint to retrieve the next set of results associated with the original query.
     * See the [Pagination guide](https://developer.squareup.com/docs/working-with-apis/pagination) for more information.
     */
    cursor?: string;
    /**
     * A limit on the number of results to be returned in a single page.
     * The limit is advisory - the implementation may return more or fewer results. If the supplied limit is negative,
     * zero, or is higher than the maximum limit of 100, it will be ignored.
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
     * A pagination cursor that can be used during subsequent calls to SearchCustomers to retrieve the next set of results
     * associated with the original query. Pagination cursors are only present when a request succeeds and additional
     * results are available.
     * See the [Pagination guide](https://developer.squareup.com/docs/working-with-apis/pagination) for more information.
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
 * Otherwise, SearchOrders will throw an error.
 * [Learn more about filtering ordersby time range](/orders-api/manage-orders#important-note-on-filtering-orders-by-time-range).
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
     * Filter by `OrderState`.
     */
    state_filter?: SearchOrdersStateFilter;
    /**
     * Filter for results within a time range.
     * @note If you filter for orders by time range, you must set SearchOrdersSort to sort by the same field.
     * [Learn more about filtering orders by time range](https://developer.squareup.com/docs/orders-api/manage-orders#important-note-on-filtering-orders-by-time-range)
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
     * List of `fulfillment types` to filter for. Will return orders if any of its fulfillments match any of the fulfillment
     * types listed in this field. See [OrderFulfillmentType](#type-orderfulfillmenttype) for possible values.
     */
    fulfillment_types: Array<FulfillmentType>;
    /**
     * List of `fulfillment states` to filter for. Will return orders if any of its fulfillments match any of the
     * fulfillment states listed in this field. See [OrderFulfillmentState](#type-orderfulfillmentstate) for possible values.
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
     * See [Pagination](https://developer.squareup.com/docs/basics/api101/pagination) for more information.
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
     *  - If `true`, SearchOrders will return `OrderEntry` objects.
     *  - If `false`, SearchOrders will return complete Order objects.
     *  Default: `false`.
     */
    return_entries?: boolean;
}

/**
 * Only one of `order_entries` or `orders` fields will be set, depending on whether `return_entries` was set
 * on the [SearchOrdersRequest](#type-searchorderrequest).
 */
export class SearchOrdersResponse {
    /**
     * List of `OrderEntries` that fit the query conditions. Populated only if `return_entries` was set to `true` in the request.
     */
    order_entries?: Array<OrderEntry>;
    /**
     * List of `Order` objects that match query conditions. Populated only if `return_entries` in the request is set to `false`.
     */
    orders?: Array<Order>;
    /**
     * The pagination cursor to be used in a subsequent request. If unset, this is the final response.
     * See [Pagination](https://developer.squareup.com/docs/basics/api101/pagination) for more information.
     */
    cursor?: string;
    /**
     * `Errors` encountered during the search.
     */
    errors?: Array<Error>;
}

/**
 * Sorting criteria for a SearchOrders request. Results can only be sorted by a timestamp field.
 */
export class SearchOrdersSort {
    /**
     * The field to sort by.
     * @note When using a `DateTimeFilter`, `sort_field` must match the timestamp field that the DateTimeFilter uses to filter.
     * For example, If you set your `sort_field` to `CLOSED_AT` and you use a DateTimeFilter, your DateTimeFilter must filter
     * for orders by their `CLOSED_AT` date. If this field does not match the timestamp field in `DateTimeFilter`,
     * SearchOrders will return an error. Default: `CREATED_AT`.
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
     * Filters by `Source` `name`. Will return any orders with with a `source.name` that matches any of the listed source names.
     * Max: 10 source names.
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
     * Job and pay related information. If wage is not set on create, will default to a wage of zero money.
     * If title is not set on create, will default to the name of the role the employee is assigned to, if any.
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
    location_ids?: Array<string>;
    /**
     * Fetch shifts for the specified employee.
     */
    employee_ids?: Array<string>;
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
     * Read-only `Product` type for the application. See [Product](#type-product) for possible values.
     */
    product?: ProductSourceType;
    /**
     * Read-only Square ID assigned to the application. Only used for `Product` type `EXTERNAL_API`.
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
     * UI display name of the measurement unit. For example, 'Pound'.
     */
    name?: string;
    /**
     * UI display abbreviation for the measurement unit. For example, 'lb'.
     */
    abbreviation?: string;
}

/**
 * Group of standard measurement units.
 */
export class StandardUnitDescriptionGroup {
    /**
     * List of standard (non-custom) measurement units in this description group.
     */
    standard_unit_descriptions?: Array<StandardUnitDescription>;
    /**
     * IETF language tag.
     */
    language_code?: string;
}

/**
 * Defines parameters for a SubmitEvidence request.
 */
export class SubmitEvidenceRequest {}

/**
 * Defines fields in a SubmitEvidence response.
 */
export class SubmitEvidenceResponse {
    /**
     * Information on errors encountered during the request.
     */
    errors?: Array<Error>;
    /**
     * The `Dispute` for which evidence was submitted.
     */
    dispute?: Dispute;
}

/**
 * When to calculate the taxes due on a cart.
 */
export class TaxCalculationPhase {}

/**
 * Whether to the tax amount should be additional to or included in the CatalogItem price.
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
     * the corresponding `Payment` will be equal to the `amount_money` of the tender.
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
     * The ID of the `Payment` that corresponds to this tender. This value is only present for payments created with the v2 Payments API.
     */
    payment_id?: string;
}

/**
 * Represents additional details of a tender with `type` `CARD` or `SQUARE_GIFT_CARD`.
 */
export class TenderCardDetails {
    /**
     * The credit card payment's current state (such as `AUTHORIZED` or `CAPTURED`).
     * See `TenderCardDetailsStatus` for possible values.
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
     * If the transaction was created with the `Charge` endpoint, this value is the same as the value provided for
     * the `reference_id` parameter in the request to that endpoint. Otherwise, it is not set.
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
 * Transaction type used in the disputed payment.
 */
export class TransactionType {}

/**
 * A request to update a `BreakType`
 */
export class UpdateBreakTypeRequest {
    /**
     * The updated `BreakType`.
     */
    break_type: BreakType;
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
     * The given (i.e., first) name associated with the customer profile.
     */
    given_name?: string;
    /**
     * The family (i.e., last) name associated with the customer profile.
     */
    family_name?: string;
    /**
     * A business name associated with the customer profile.
     */
    company_name?: string;
    /**
     * A nickname for the customer profile.
     */
    nickname?: string;
    /**
     * The email address associated with the customer profile.
     */
    email_address?: string;
    /**
     * The physical address associated with the customer profile.
     */
    address?: Address;
    /**
     * The 11-digit phone number associated with the customer profile.
     */
    phone_number?: string;
    /**
     * An optional, second ID used to associate the customer profile with an entity in another system.
     */
    reference_id?: string;
    /**
     * A custom note associated with the customer profile.
     */
    note?: string;
    /**
     * The birthday associated with the customer profile, in RFC-3339 format. Year is optional, timezone and
     * times are not allowed.For example: `0000-09-01T00:00:00-00:00` indicates a birthday on September 1st.
     * `1998-09-01T00:00:00-00:00` indications a birthday on September 1st 1998.
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
     * The IDs of the catalog items associated with the CatalogModifierList objects being updated.
     */
    item_ids: Array<string>;
    /**
     * The IDs of the CatalogModifierList objects to enable for the CatalogItem.
     */
    modifier_lists_to_enable?: Array<string>;
    /**
     * The IDs of the CatalogModifierList objects to disable for the CatalogItem.
     */
    modifier_lists_to_disable?: Array<string>;
}

export class UpdateItemModifierListsResponse {
    /**
     * Information on any errors encountered.
     */
    errors?: Array<Error>;
    /**
     * The database [timestamp](#workingwithdates) of this update in RFC 3339 format, e.g., "2016-09-04T23:59:33.123Z".
     */
    updated_at?: string;
}

export class UpdateItemTaxesRequest {
    /**
     * IDs for the CatalogItems associated with the CatalogTax objects being updated.
     */
    item_ids: Array<string>;
    /**
     * IDs of the CatalogTax objects to enable.
     */
    taxes_to_enable?: Array<string>;
    /**
     * IDs of the CatalogTax objects to disable.
     */
    taxes_to_disable?: Array<string>;
}

export class UpdateItemTaxesResponse {
    /**
     * Information on any errors encountered.
     */
    errors?: Array<Error>;
    /**
     * The database [timestamp](https://developer.squareup.com/docs/build-basics/working-with-dates) of this update
     * in RFC 3339 format, e.g., `2016-09-04T23:59:33.123Z`.
     */
    updated_at?: string;
}

/**
 * Request object for the [UpdateLocation](#endpoint-updatelocation) endpoint.
 */
export class UpdateLocationRequest {
    /**
     * The `Location` object with only the fields to update.
     */
    location?: Location;
}

/**
 * Response object returned by the [UpdateLocation](#endpoint-updatelocation) endpoint.
 */
export class UpdateLocationResponse {
    /**
     * Information on errors encountered during the request.
     */
    errors?: Array<Error>;
    /**
     * The updated `Location`.
     */
    location?: Location;
}

/**
 * Defines the fields that are included in requests to the [UpdateOrder](#endpoint-orders-updateorder) endpoint.
 */
export class UpdateOrderRequest {
    /**
     * The [sparse order](https://developer.squareup.com/docs/orders-api/manage-orders#sparse-order-objects) containing
     * only the fields to update and the version the update is being applied to.
     */
    order?: Order;
    /**
     * The [dot notation paths](https://developer.squareup.com/docs/orders-api/manage-orders#on-dot-notation) fields to clear.
     * For example, `line_items[uid].note` [Read more about Deleting fields](https://developer.squareup.com/docs/orders-api/manage-orders#delete-fields).
     */
    fields_to_clear?: Array<string>;
    /**
     * A value you specify that uniquely identifies this update request If you're unsure whether a particular update was
     * applied to an order successfully, you can reattempt it with the same idempotency key without worrying about creating
     * duplicate updates to the order. The latest order version will be returned.
     * See [Idempotency](https://developer.squareup.com/docs/basics/api101/idempotency) for more information.
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
    workweek_config: WorkweekConfig;
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
     * without worrying about creating duplicate objects.
     * See [Idempotency](https://developer.squareup.com/docs/basics/api101/idempotency) for more information.
     */
    idempotency_key: string;
    /**
     * A CatalogObject to be created or updated.
     *  - For updates, the object must be active (the `is_deleted` field is not `true`).
     *  - For creates, the object ID must start with `#`.
     * The provided ID is replaced with a server-generated ID.
     */
    object: CatalogObject;
}

export class UpsertCatalogObjectResponse {
    /**
     * Information on any errors encountered.
     */
    errors?: Array<Error>;
    /**
     * The successfully created or updated CatalogObject.
     */
    catalog_object?: CatalogObject;
    /**
     * The mapping between client and server IDs for this upsert.
     */
    id_mappings?: Array<CatalogIdMapping>;
}

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
     * Activates a domain for use with Web Apple Pay and Square. A validation will be performed on this domain by Apple
     * to ensure is it properly set up as an Apple Pay enabled domain. This endpoint provides an easy way for platform
     * developers to bulk activate Web Apple Pay with Square for merchants using their platform. To learn more about
     * Apple Pay on Web see the Apple Pay section in the [Square Payment Form Walkthrough](/docs/payment-form/payment-form-walkthrough).
     */
    registerDomain(...args: Array<any>): Promise<RegisterDomainResponse>;
}

// @todo describe methods
export class BankAccountsApi {}

// @todo describe methods
export class CashDrawersApi {}

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
     * Returns a list of [CatalogObject](#type-catalogobject)s that includes all objects of a set of desired types (for example,
     * all [CatalogItem](#type-catalogitem) and [CatalogTax](#type-catalogtax) objects) in the catalog.
     * The `types` parameter is specified as a comma-separated list of valid [CatalogObject](#type-catalogobject)
     * types: `ITEM`, `ITEM_VARIATION`, `MODIFIER`, `MODIFIER_LIST`, `CATEGORY`, `DISCOUNT`, `TAX`, `IMAGE`.
     * @note ListCatalog does not return deleted catalog items.
     * To retrieve deleted catalog items, use SearchCatalogObjects and set `include_deleted_objects` to `true`.
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
     * Future end of the above comment: [CatalogQueryItemsForTax](#type-catalogqueryitemsfortax),
     * [CatalogQueryItemsForModifierList](#type-catalogqueryitemsformodifierlist),
     * [CatalogQueryItemsForItemOptions](#type-catalogqueryitemsforitemoptions),
     * and [CatalogQueryItemVariationsForItemOptionValues](#type-catalogqueryitemvariationsforitemoptionvalues).
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
     * Multiple calls with the same card nonce return the same card record that was created with the provided nonce during the _first_ call.
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
     * Updates the details of an existing customer. When two profiles are merged into a single profile, that profile
     * is assigned a new `customer_id`. You must use the new `customer_id` to update merged profiles. You cannot edit
     * a customer's cards on file with this endpoint. To make changes to a card on file, you must delete the existing
     * card on file with the [DeleteCustomerCard](#endpoint-deletecustomercard) endpoint, then create a new one with
     * the [CreateCustomerCard](#endpoint-createcustomercard) endpoint.
     */
    updateCustomer(...args: Array<any>): Promise<UpdateCustomerResponse>;
}

// @todo describe methods
export class DisputesApi {}

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
  /**
   * Creates a location.
   */
    createLocation(body: Location): Promise<CreateLocationResponse>;
  /**
   * Retrieves details of a location.
   */
    retrieveLocation(locationId: string): Promise<RetrieveLocationResponse>;
  /**
   * Updates a location.
   */
    updateLocation(locationId: string, body: Location): Promise<UpdateLocationResponse>;
}

// @todo describe methods
export class MerchantsApi {}

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
    updateOrder(locationId: string, orderId: string, body: UpdateOrderRequest): Promise<UpdateOrderResponse>;
}

export class PaymentsApi {
    /**
     * Constructs a new PaymentsApi.
     * @param apiClient Optional API client implementation to use, default to ApiClient.instance if unspecified.
     */
    constructor(apiClient?: ApiClient);
    /**
     * Cancels (voids) a payment. If you set `autocomplete` to false when creating a payment, you can cancel the payment
     * using this endpoint. For more information, see  [Delayed Payments](/payments-api/take-payments#delayed-payments).
     */
    cancelPayment(paymentId: string): Promise<CancelPaymentResponse>;
    /**
     * Cancels (voids) a payment identified by the idempotency key that is specified in the request.
     * Use this method when status of a CreatePayment request is unknown. For example, after you send a CreatePayment
     * request a network error occurs and you don't get a response. In this case, you can direct Square to cancel
     * the payment using this endpoint. In the request, you provide the same idempotency key that you provided in your
     * CreatePayment request you want  to cancel. After cancelling the payment, you can submit your CreatePayment request again.
     * Note that if no payment with the specified idempotency key is found, no action is taken, the end point returns successfully.
     */
    cancelPaymentByIdempotencyKey(body: CancelPaymentByIdempotencyKeyRequest): Promise<CancelPaymentByIdempotencyKeyResponse>;
    /**
     * Completes (captures) a payment. By default, payments are set to complete immediately after they are created.
     * If you set autocomplete to false when creating a payment, you can complete (capture) the payment using this endpoint.
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
