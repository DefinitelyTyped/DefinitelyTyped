/**
 * Docs: https://developer.paypal.com/docs/api/orders/v2/
 */

// https://developer.paypal.com/docs/api/payments/v2/#definition-ach_debit
export interface AchDebit {
    account_holder_name: string;
    account_number: string;
    account_type?: AccountType;
    routing_number: string;
}

export enum AccountType {
    CHECKING = 'CHECKING',
    SAVINGS = 'SAVINGS',
}

// https://developer.paypal.com/docs/api/payments/v2/#definition-activity_timestamps
export interface ActivityTimestamps {
    create_time: string;
    update_time: string;
}

// https://developer.paypal.com/docs/api/payments/v2/#definition-address_details
export interface AddressDetails {
    building_name: string;
    delivery_service: string;
    street_name: string;
    street_number: string;
    street_type: string;
    sub_building: string;
}

// https://developer.paypal.com/docs/api/payments/v2/#definition-address_portable
export interface AddressPortable {
    address_details?: AddressDetails;
    address_line_1?: string;
    address_line_2?: string;
    address_line_3?: string;
    admin_area_1?: string;
    admin_area_2?: string;
    admin_area_3?: string;
    admin_area_4?: string;
    country_code: string;
    postal_code?: string;
}

// https://developer.paypal.com/docs/api/payments/v2/#definition-amount_breakdown
export interface AmountBreakdown {
    discount: Money;
    handling: Money;
    insurance: Money;
    item_total: Money;
    shipping_discount: Money;
    shipping: Money;
    tax_total: Money;
}

// https://developer.paypal.com/docs/api/payments/v2/#definition-authorization
export interface Authorization extends ActivityTimestamps, AuthorizationStatus {
    amount: Money;
    custom_id: string;
    expiration_time: string;
    id: string;
    invoice_id: string;
    links: LinkDescription[];
    seller_protection: SellerProtection;
}

export enum Status {
    CANCELLED = 'CANCELLED',
    CAPTURED = 'CAPTURED',
    COMPLETED = 'COMPLETED',
    CREATED = 'CREATED',
    DECLINED = 'DECLINED',
    DENIED = 'DENIED',
    ELIGIBLE = 'ELIGIBLE',
    EXPIRED = 'EXPIRED',
    FAILED = 'FAILED',
    NOT_ELIGIBLE = 'NOT_ELIGIBLE',
    PARTIALLY_CAPTURED = 'PARTIALLY_CAPTURED',
    PARTIALLY_CREATED = 'PARTIALLY_CREATED',
    PARTIALLY_ELIGIBLE = 'PARTIALLY_ELIGIBLE',
    PARTIALLY_REFUNDED = 'PARTIALLY_REFUNDED',
    PENDING = 'PENDING',
    REFUNDED = 'REFUNDED',
    VOIDED = 'VOIDED',
}

// https://developer.paypal.com/docs/api/payments/v2/#definition-authorization_status
export interface AuthorizationStatus {
    readonly status_details: AuthorizationStatusDetails;
    readonly status: Status;
}

// https://developer.paypal.com/docs/api/payments/v2/#definition-authorization_status_details
export interface AuthorizationStatusDetails {
    reason: Reason;
}

export enum Reason {
    BUYER_COMPLAINT = 'BUYER_COMPLAINT',
    CHARGEBACK = 'CHARGEBACK',
    ECHECK = 'ECHECK',
    INTERNATIONAL_WITHDRAWAL = 'INTERNATIONAL_WITHDRAWAL',
    OTHER = 'OTHER',
    PENDING_REVIEW = 'PENDING_REVIEW',
    RECEIVING_PREFERENCE_MANDATES_MANUAL_ACTION = 'RECEIVING_PREFERENCE_MANDATES_MANUAL_ACTION',
    REFUNDED = 'REFUNDED',
    TRANSACTION_APPROVED_AWAITING_FUNDING = 'TRANSACTION_APPROVED_AWAITING_FUNDING',
    UNILATERAL = 'UNILATERAL',
    VERIFICATION_REQUIRED = 'VERIFICATION_REQUIRED',
}

// https://developer.paypal.com/docs/api/payments/v2/#definition-capture
export interface Capture extends ActivityTimestamps, CaptureStatus {
    amount: Money;
    custom_id: string;
    disbursement_mode: DisbursementMode;
    final_capture: boolean;
    id: string;
    invoice_id: string;
    links: LinkDescription[];
    processor_response: ProcessorResponse;
    seller_protection: SellerProtection;
    seller_receivable_breakdown: SellerReceivableBreakdown;
}

// https://developer.paypal.com/docs/api/payments/v2/#definition-capture_request
export interface CaptureRequest {
    amount: Money;
    final_capture: boolean;
    invoice_id: string;
    note_to_payer: string;
    payment_instruction?: PaymentInstruction;
    soft_descriptor: string;
}

// https://developer.paypal.com/docs/api/payments/v2/#definition-capture_status
export interface CaptureStatus {
    readonly status_details: CaptureStatusDetails;
    readonly status: Status;
}

// https://developer.paypal.com/docs/api/payments/v2/#definition-capture_status_details
export interface CaptureStatusDetails {
    reason: Reason;
}

// https://developer.paypal.com/docs/api/payments/v2/#definition-card
export interface Card {
    billing_address?: {
        address_line_1?: string;
        address_line_2?: string;
        admin_area_1?: string;
        admin_area_2?: string;
        country_code: string;
        postal_code?: string;
    };
    brand?: CardBrand;
    card_type?: CardBrand;
    expiry: string;
    id?: string;
    last_digits?: string;
    name?: string;
    number: string;
    security_code?: string;
    type?: CardType;
}

// https://developer.paypal.com/docs/api/payments/v2/#definition-card_brand
export enum CardBrand {
    AMEX = 'AMEX',
    CB_NATIONALE = 'CB_NATIONALE',
    CETELEM = 'CETELEM',
    CHINA_UNION_PAY = 'CHINA_UNION_PAY',
    CONFIDIS = 'CONFIDIS',
    CONFIGOGA = 'CONFIGOGA',
    DELTA = 'DELTA',
    DISCOVER = 'DISCOVER',
    ELECTRON = 'ELECTRON',
    JCB = 'JCB',
    MAESTRO = 'MAESTRO',
    MASTERCARD = 'MASTERCARD',
    SOLO = 'SOLO',
    STAR = 'STAR',
    SWITCH = 'SWITCH',
    VISA = 'VISA',
}

// https://developer.paypal.com/docs/api/payments/v2/#definition-card_type
export enum CardType {
    CREDIT = 'CREDIT',
    DEBIT = 'DEBIT',
    PREPAID = 'PREPAID',
    STORE = 'STORE',
    UNKNOWN = 'UNKNOWN',
}

// https://developer.paypal.com/docs/api/payments/v2/#definition-disbursement_mode
export enum DisbursementMode {
    DELAYED = 'DELAYED',
    INSTANT = 'INSTANT',
}

// https://developer.paypal.com/docs/api/payments/v2/#definition-dispute_category
export enum DisputeCategory {
    ITEM_NOT_RECEIVED = 'ITEM_NOT_RECEIVED',
    UNAUTHORIZED_TRANSACTION = 'UNAUTHORIZED_TRANSACTION',
}

// https://developer.paypal.com/docs/api/payments/v2/#definition-error
export interface Error {
    debug_id: string;
    details?: ErrorDetails[];
    information_link?: string;
    links?: LinkDescription[];
    message: string;
    name: string;
}

// https://developer.paypal.com/docs/api/payments/v2/#definition-error_details
export interface ErrorDetails {
    description?: string;
    field?: string;
    issue: string;
    location?: string;
    value?: string;
}

// https://developer.paypal.com/docs/api/payments/v2/#definition-exchange_rate
export interface ExchangeRate {
    source_currency: string;
    target_currency: string;
    value: string;
}

// vhttps://developer.paypal.com/docs/api/payments/v2/#definition-link_description
export interface LinkDescription {
    href: string;
    method?: Method;
    rel: string;
}

export enum Method {
    CONNECT = 'CONNECT',
    DELETE = 'DELETE',
    GET = 'GET',
    HEAD = 'HEAD',
    OPTIONS = 'OPTIONS',
    PATCH = 'PATCH',
    POST = 'POST',
    PUT = 'PUT',
}

// https://developer.paypal.com/docs/api/payments/v2/#definition-money
export interface Money {
    currency_code: string;
    value: string;
}

// https://developer.paypal.com/docs/api/payments/v2/#definition-name
export interface Name {
    alternate_full_name: string;
    full_name: string;
    given_name: string;
    middle_name: string;
    prefix: string;
    suffix: string;
    surname: string;
}

// https://developer.paypal.com/docs/api/payments/v2/#definition-net_amount_breakdown
export interface NetAmountBreakdown {
    converted_amount: Money;
    exchange_rate: ExchangeRate;
    payable_amount: Money;
}

// https://developer.paypal.com/docs/api/payments/v2/#definition-payee
export interface Payee {
    email_address?: string;
    merchant_id?: string;
}

// https://developer.paypal.com/docs/api/payments/v2/#definition-payee_base
export type PayeeBase = Payee;

// https://developer.paypal.com/docs/api/payments/v2/#definition-payment_instruction
export interface PaymentInstruction {
    disbursement_mode: DisbursementMode;
    payee_pricing_tier_id: string;
    platform_fees: PlatformFee[];
}

// https://developer.paypal.com/docs/api/payments/v2/#definition-phone
export interface Phone {
    country_code: string;
    extension_number?: string;
    national_number: string;
}

// https://developer.paypal.com/docs/api/payments/v2/#definition-platform_fee
export interface PlatformFee {
    amount: Money;
    payee?: PayeeBase;
}

// https://developer.paypal.com/docs/api/payments/v2/#definition-processor_response
export interface ProcessorResponse {
    readonly avs_code: AVSCode;
    readonly cvv_code: CVVCode;
    readonly payment_advice_code: PaymentAdviceCode;
    readonly response_code: ResponseCode;
}

export enum AVSCode {
    A = 'A',
    B = 'B',
    C = 'C',
    D = 'D',
    E = 'E',
    F = 'F',
    G = 'G',
    I = 'I',
    M = 'M',
    N = 'N',
    P = 'P',
    R = 'R',
    S = 'S',
    U = 'U',
    W = 'W',
    X = 'X',
    Y = 'Y',
    Z = 'Z',
    MAESTRO_NOT_RESPONSE = 'Null',
    MAESTRO_ALL_MATCHES = '0',
    MAESTRO_NONE_MATCHES = '1',
    MAESTRO_PART_MATCHES = '2',
    MAESTRO_NOT_PROCESSED = '3',
    MAESTRO_NOT_AVAILABLE = '4',
}

export enum CVVCode {
    E = 'E',
    I = 'I',
    M = 'M',
    N = 'N',
    P = 'P',
    S = 'S',
    U = 'U',
    X = 'X',
    ALL_OTHERS = 'All others',
    Maestro_matched = '0',
    Maestro_not_match = '1',
    Maestro_not_implemented = '2',
    Maestro_not_present = '3',
    Maestro_not_available = '4',
}

export enum ResponseCode {
    APPROVED = '0000',
    REFERRAL = '0100',
    BAD_RESPONSE_REVERSAL_REQUIRED = '0800',
    PARTIAL_AUTHORIZATION = '1000',
    INVALID_DATA_FORMAT = '1300',
    INVALID_AMOUNT = '1310',
    INVALID_TRANSACTION_CARD_ISSUER_ACQUIRER = '1312',
    INVALID_CAPTURE_DATE = '1317',
    INVALID_CURRENCY_CODE = '1320',
    INVALID_ACCOUNT = '1330',
    INVALID_ACCOUNT_RECURRING = '1335',
    INVALID_TERMINAL = '1340',
    INVALID_MERCHANT = '1350',
    BAD_PROCESSING_CODE = '1360',
    INVALID_MCC = '1370',
    INVALID_EXPIRATION = '1380',
    INVALID_CARD_VERIFICATION_VALUE = '1382',
    INVALID_LIFE_CYCLE_OF_TRANSACTION = '1384',
    INVALID_ORDER = '1390',
    TRANSACTION_CANNOT_BE_COMPLETED = '1393',
    DO_NOT_HONOR = '0500',
    GENERIC_DECLINE = '5100',
    CVV2_FAILURE = '5110',
    INSUFFICIENT_FUNDS = '5120',
    INVALID_PIN = '5130',
    CARD_CLOSED = '5140',
    PICKUP_CARD_SPECIAL_CONDITIONS = '5150',
    UNAUTHORIZED_USER = '5160',
    AVS_FAILURE = '5170',
    INVALID_OR_RESTRICTED_CARD = '5180',
    SOFT_AVS = '5190',
    DUPLICATE_TRANSACTION = '5200',
    INVALID_TRANSACTION = '5210',
    EXPIRED_CARD = '5400',
    INCORRECT_PIN_REENTER = '5500',
    TRANSACTION_NOT_PERMITTED = '5700',
    REVERSAL_REJECTED = '5800',
    INVALID_ISSUE = '5900',
    ISSUER_NOT_AVAILABLE_NOT_RETRIABLE = '5910',
    ISSUER_NOT_AVAILABLE_RETRIABLE = '5920',
    ACCOUNT_NOT_ON_FILE = '6300',
    APPROVED_NON_CAPTURE = '7600',
    ERROR_3DS = '7700',
    AUTHENTICATION_FAILED = '7710',
    BIN_ERROR = '7800',
    PIN_ERROR = '7900',
    PROCESSOR_SYSTEM_ERROR = '8000',
    HOST_KEY_ERROR = '8010',
    CONFIGURATION_ERROR = '8020',
    UNSUPPORTED_OPERATION = '8030',
    FATAL_COMMUNICATION_ERROR = '8100',
    RETRIABLE_COMMUNICATION_ERROR = '8110',
    SYSTEM_UNAVAILABLE = '8220',
    DECLINED_PLEASE_RETRY = '9100',
    SUSPECTED_FRAUD = '9500',
    SECURITY_VIOLATION = '9510',
    LOST_OR_STOLEN = '9520',
    HOLD_CALL_CENTER = '9530',
    REFUSED_CARD = '9540',
    UNRECOGNIZED_RESPONSE_CODE = '9600',
    CARD_NOT_ACTIVATED = '5930',
    PPMD = 'PPMD',
    CE_REGISTRATION_INCOMPLETE = 'PPCE',
    NETWORK_ERROR = 'PPNT',
    CARD_TYPE_UNSUPPORTED = 'PPCT',
    TRANSACTION_TYPE_UNSUPPORTED = 'PPTT',
    CURRENCY_USED_INVALID = 'PPCU',
    QUASI_CASH_UNSUPPORTED = 'PPQC',
    VALIDATION_ERROR = 'PPVE',
    VIRTUAL_TERMINAL_UNSUPPORTED = 'PPVT',
    DCC_UNSUPPORTED = 'PPDC',
    INTERNAL_SYSTEM_ERROR = 'PPER',
    ID_MISMATCH = 'PPIM',
    H1_ERROR = 'PPH1',
    STATUS_DESCRIPTION = 'PPSD',
    ADULT_GAMING_UNSUPPORTED = 'PPAG',
    LARGE_STATUS_CODE = 'PPLS',
    COUNTRY = 'PPCO',
    BILLING_ADDRESS = 'PPAD',
    MCC_CODE = 'PPAU',
    CURRENCY_CODE_UNSUPPORTED = 'PPUC',
    UNSUPPORTED_REVERSAL = 'PPUR',
    VALIDATE_CURRENCY = 'PPVC',
    BANKAUTH_ROW_MISMATCH = 'PPS0',
    BANKAUTH_ROW_SETTLED = 'PPS1',
    BANKAUTH_ROW_VOIDED = 'PPS2',
    BANKAUTH_EXPIRED = 'PPS3',
    CURRENCY_MISMATCH = 'PPS4',
    CREDITCARD_MISMATCH = 'PPS5',
    AMOUNT_MISMATCH = 'PPS6',
    INVALID_PARENT_TRANSACTION_STATUS = 'PPRF',
    EXPIRY_DATE = 'PPEX',
    AMOUNT_EXCEEDED = 'PPAX',
    AUTH_MESSAGE = 'PPDV',
    DINERS_REJECT = 'PPDI',
    AUTH_RESULT = 'PPAR',
    BAD_GAMING = 'PPBG',
    GAMING_REFUND_ERROR = 'PPGR',
    CREDIT_ERROR = 'PPCR',
    AMOUNT_INCOMPATIBLE = 'PPAI',
    IDEMPOTENCY_FAILURE = 'PPIF',
    BLOCKED_Mastercard = 'PPMC',
    AMEX_DISABLED = 'PPAE',
    FIELD_VALIDATION_FAILED = 'PPFV',
    INVALID_INPUT_FAILURE = 'PPII',
    INVALID_PAYMENT_METHOD = 'PPPM',
    USER_NOT_AUTHORIZED = 'PPUA',
    INVALID_FUNDING_INSTRUMENT = 'PPFI',
    EXPIRED_FUNDING_INSTRUMENT = 'PPEF',
    RESTRICTED_FUNDING_INSTRUMENT = 'PPFR',
    EXCEEDS_FREQUENCY_LIMIT = 'PPEL',
    CVV_FAILURE = 'PCVV',
    INVALID_VERIFICATION_TOKEN = 'PPTV',
    VERIFICATION_TOKEN_EXPIRED = 'PPTE',
    INVALID_PRODUCT = 'PPPI',
    INVALID_TRACE_ID = 'PPIT',
    INVALID_TRACE_REFERENCE = 'PPTF',
    FUNDING_SOURCE_ALREADY_EXISTS = 'PPFE',
    VERIFICATION_TOKEN_REVOKED = 'PPTR',
    INVALID_TRANSACTION_ID = 'PPTI',
    SECURE_ERROR_3DS = 'PPD3',
    NO_PHONE_FOR_DCC_TRANSACTION = 'PPPH',
    ARC_AVS = 'PPAV',
    ARC_CVV = 'PPC2',
    LATE_REVERSAL = 'PPLR',
    NOT_SUPPORTED_NRC = 'PPNC',
    MERCHANT_NOT_REGISTERED = 'PPRR',
    ARC_SCORE = 'PPSC',
    AMEX_DENIED = 'PPSE',
    UNSUPPORT_ENTITY = 'PPUE',
    UNSUPPORT_INSTALLMENT = 'PPUI',
    UNSUPPORT_POS_FLAG = 'PPUP',
    UNSUPPORT_REFUND_ON_PENDING_BC = 'PPRE',
}

export enum PaymentAdviceCode {
    MASTERCARD_EXPIRED = '01',
    MASTERCARD_CREDIT_LIMIT = '02',
    MASTERCARD_ACCOUNT_CLOSED = '03',
    MASTERCARD_UNSUCCESSFUL = '21',
}

// https://developer.paypal.com/docs/api/payments/v2/#definition-reauthorize_request
export interface ReauthorizeRequest {
    amount: Money;
}

// https://developer.paypal.com/docs/api/payments/v2/#definition-refund
export interface Refund extends ActivityTimestamps, RefundStatus {
    amount: Money;
    id: string;
    invoice_id: string;
    links: LinkDescription[];
    note_to_payer: string;
    seller_payable_breakdown: SellerPayableBreakdown;
}

// https://developer.paypal.com/docs/api/payments/v2/#definition-refund_request
export interface RefundRequest {
    amont: Money;
    invoice_id: string;
    note_to_payer: string;
}

// https://developer.paypal.com/docs/api/payments/v2/#definition-refund_status
export interface RefundStatus {
    readonly status_details: RefundStatusDetails;
    readonly status: Status;
}

// https://developer.paypal.com/docs/api/payments/v2/#definition-refund_status_details
export interface RefundStatusDetails {
    reason: Reason;
}

// https://developer.paypal.com/docs/api/payments/v2/#definition-seller_payable_breakdown
export interface SellerPayableBreakdown {
    gross_amount: Money;
    net_amount_breakdown: NetAmountBreakdown[];
    net_amount_in_receivable_currency: Money;
    net_amount: Money;
    paypal_fee_in_receivable_currency: Money;
    paypal_fee: Money;
    platform_fees: PlatformFee[];
    total_refunded_amount: Money;
}

// https://developer.paypal.com/docs/api/payments/v2/#definition-seller_protection
export interface SellerProtection {
    readonly dispute_categories: DisputeCategory[];
    readonly status: Status;
}

// https://developer.paypal.com/docs/api/payments/v2/#definition-seller_receivable_breakdown
export interface SellerReceivableBreakdown {
    exchange_rate?: ExchangeRate;
    gross_amount: Money;
    net_amount?: Money;
    paypal_fee_in_receivable_currency?: Money;
    paypal_fee?: Money;
    platform_fees?: PlatformFee[];
    receivable_amount?: Money;
}

// https://developer.paypal.com/docs/api/payments/v2/#definition-shipping_type
export enum ShippingType {
    PICKUP = 'PICKUP',
    PICKUP_IN_PERSON = 'PICKUP_IN_PERSON',
    SHIPPING = 'SHIPPING',
}

// https://developer.paypal.com/docs/api/payments/v2/#definition-supplementary_purchase_data
export interface SupplementaryPurchaseData {
    invoice_id: string;
    note_to_payer: string;
}

// https://developer.paypal.com/docs/api/payments/v2/#definition-tax_info
export interface TaxInfo {
    tax_id_type: TaxIdType;
    tax_id: string;
}

export enum TaxIdType {
    BR_CNPJ = 'BR_CNPJ',
    BR_CPF = 'BR_CPF',
}

// https://developer.paypal.com/docs/api/payments/v2/#definition-token
export interface Token {
    id: string;
    type: TokenType;
}

export enum TokenType {
    BILLING_AGREEMENT = 'BILLING_AGREEMENT',
}

export interface BasePaymentHeaders {
    Authorization: string;
    'Content-Type': 'application/json';
}

export class BasePaymentRequest<H extends BasePaymentHeaders, D = null> {
    readonly path: string;
    readonly verb: 'CONNECT' | 'DELETE' | 'GET' | 'HEAD' | 'OPTIONS' | 'PATCH' | 'POST' | 'PUT';
    readonly body: D;
    readonly headers: H;

    constructor(authorizationId: string);
}

/**
 * Authorizations Capture
 * @see {@link https://developer.paypal.com/api/payments/v2/#authorizations_capture}
 */
export namespace AuthorizationsCapture {
    interface RequestHeaders extends BasePaymentHeaders {
        'PayPal-Request-Id'?: string;
        Prefer?: string;
    }
}

export class AuthorizationsCaptureRequest extends BasePaymentRequest<AuthorizationsCapture.RequestHeaders, Capture> {
    payPalRequestId(payPalRequestId: string): this;

    prefer(prefer: string): this;

    requestBody(body: CaptureRequest): this;
}

/**
 * Authorizations Get
 * @see {@link https://developer.paypal.com/api/payments/v2/#authorizations_get}
 */
export class AuthorizationsGetRequest extends BasePaymentRequest<BasePaymentHeaders, Capture> {}

/**
 * Authorizations Reauthorize
 * @see {@link https://developer.paypal.com/api/payments/v2/#authorizations_reauthorize}
 */
export namespace AuthorizationsReauthorize {
    interface RequestHeaders extends BasePaymentHeaders {
        'PayPal-Request-Id'?: string;
        Prefer?: string;
    }

    interface RequestData {
        amount: Money;
    }
}

export class AuthorizationsReauthorizeRequest extends BasePaymentRequest<
    AuthorizationsReauthorize.RequestHeaders,
    Capture
> {
    payPalRequestId(payPalRequestId: string): this;

    prefer(prefer: string): this;

    requestBody(body: AuthorizationsReauthorize.RequestData): this;
}

/**
 * Authorizations Void
 * @see {@link https://developer.paypal.com/api/payments/v2/#authorizations_void}
 */
export namespace AuthorizationsVoid {
    interface RequestHeaders extends BasePaymentHeaders {
        'PayPal-Auth-Assertion'?: string;
        Prefer?: string;
    }
}

export class AuthorizationsVoidRequest extends BasePaymentRequest<AuthorizationsVoid.RequestHeaders> {}

/**
 * Captures Get
 * @see {@link https://developer.paypal.com/api/payments/v2/#captures_get}
 */
export class CapturesGetRequest extends BasePaymentRequest<BasePaymentHeaders, Capture> {}

/**
 * Captures Refund
 * @see {@link https://developer.paypal.com/api/payments/v2/#captures_refund}
 */
export namespace CapturesRefund {
    interface RequestHeaders extends BasePaymentHeaders {
        'PayPal-Auth-Assertion'?: string;
        'PayPal-Request-Id'?: string;
        Prefer?: string;
    }

    interface RequestData {
        amount: Money;
        invoice_id: string;
        note_to_payer: string;
    }
}

export class CapturesRefundRequest extends BasePaymentRequest<CapturesRefund.RequestHeaders, Capture> {
    constructor(captureId: string);

    payPalRequestId(payPalRequestId: string): this;

    prefer(prefer: string): this;

    requestBody(body: CapturesRefund.RequestData): this;
}

/**
 * Refunds Get
 * @see {@link https://developer.paypal.com/api/payments/v2/#refunds_get}
 */
export class RefundsGetRequest extends BasePaymentRequest<BasePaymentHeaders, Capture> {
    constructor(refundId: string);
}
