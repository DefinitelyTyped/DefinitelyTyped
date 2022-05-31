/**
 * Docs: https://developer.paypal.com/docs/api/orders/v2/
 */

import {
    ActivityTimestamps,
    AddressDetails,
    AddressPortable,
    AmountBreakdown,
    Capture,
    CardBrand,
    CardType,
    LinkDescription,
    Money,
    Name,
    Payee,
    PaymentInstruction,
    Phone,
    ProcessorResponse,
    Refund,
    ShippingType,
    Status,
    TaxInfo,
    Token,
} from '../payments/lib';

// https://developer.paypal.com/docs/api/orders/v2/#definition-account_tier
export enum AccountTier {
    BUSINESS = 'BUSINESS',
    PERSONAL = 'PERSONAL',
    PREMIER = 'PREMIER',
}

// https://developer.paypal.com/docs/api/orders/v2/#definition-ach_debit_response
export interface AchDebitResponse {
    account_holder_name: string;
    last_digits: string;
    routing_number: string;
}

// https://developer.paypal.com/docs/api/orders/v2/#definition-address_name
export interface AddressName {
    address_details?: AddressDetails;
    address_line_1?: string;
    address_line_2?: string;
    address_line_3?: string;
    addressee?: string;
    admin_area_1?: string;
    admin_area_2?: string;
    admin_area_3?: string;
    admin_area_4?: string;
    country_code: string;
    postal_code?: string;
}

// https://developer.paypal.com/docs/api/orders/v2/#definition-amount_with_breakdown
export interface AmountWithBreakdown {
    breakdown?: AmountBreakdown;
    currency_code: string;
    value: string;
}

// https://developer.paypal.com/docs/api/orders/v2/#definition-authentication_response
export interface AuthenticationResponse {
    liability_shift: LiabilityShift;
    three_d_secure: ThreeDSecureAuthenticationResponse;
}

// https://developer.paypal.com/docs/api/orders/v2/#definition-three_d_secure_authentication_response
export interface ThreeDSecureAuthenticationResponse {
    authentication_status: AuthenticationStatus;
    enrollment_status: EnrollmentStatus;
}

export enum AuthenticationStatus {
    Y = 'Y',
    N = 'N',
    U = 'U',
    A = 'A',
    C = 'C',
    R = 'R',
    D = 'D',
    I = 'I',
}

export enum EnrollmentStatus {
    Y = 'Y',
    N = 'N',
    U = 'U',
    B = 'B',
}

export enum LiabilityShift {
    NO = 'NO',
    POSSIBLE = 'POSSIBLE',
    UNKNOWN = 'UNKNOWN',
    YES = 'YES',
}

// https://developer.paypal.com/docs/api/orders/v2/#definition-business_name
export interface BusinessName {
    business_name: string;
    orthography: Orthography;
}

export enum Orthography {
    Arab = 'Arab',
    Armn = 'Armn',
    Beng = 'Beng',
    Cans = 'Cans',
    Cyrl = 'Cyrl',
    Deva = 'Deva',
    Ethi = 'Ethi',
    Geor = 'Geor',
    Grek = 'Grek',
    Gujr = 'Gujr',
    Guru = 'Guru',
    Hani = 'Hani',
    Hebr = 'Hebr',
    Java = 'Java',
    Jpan = 'Jpan',
    Kana = 'Kana',
    Khmr = 'Khmr',
    Knda = 'Knda',
    Kore = 'Kore',
    Laoo = 'Laoo',
    Latn = 'Latn',
    Mlym = 'Mlym',
    Mong = 'Mong',
    Mymr = 'Mymr',
    Orya = 'Orya',
    Sinh = 'Sinh',
    Sund = 'Sund',
    Syrc = 'Syrc',
    Taml = 'Taml',
    Telu = 'Telu',
    Thaa = 'Thaa',
    Thai = 'Thai',
    Tibt = 'Tibt',
    Yiii = 'Yiii',
    Zyyy = 'Zyyy',
    Zzzz = 'Zzzz',
}

// https://developer.paypal.com/docs/api/orders/v2/#definition-business_type
export enum business_type {
    ANY_OTHER_BUSINESS_ENTITY = 'ANY_OTHER_BUSINESS_ENTITY',
    ASSOCIATION = 'ASSOCIATION',
    CORPORATION = 'CORPORATION',
    GENERAL_PARTNERSHIP = 'GENERAL_PARTNERSHIP',
    GOVERNMENT = 'GOVERNMENT',
    INDIVIDUAL = 'INDIVIDUAL',
    LIMITED_LIABILITY_PARTNERSHIP = 'LIMITED_LIABILITY_PARTNERSHIP',
    LIMITED_LIABILITY_PRIVATE_CORPORATION = 'LIMITED_LIABILITY_PRIVATE_CORPORATION',
    LIMITED_LIABILITY_PROPRIETORS = 'LIMITED_LIABILITY_PROPRIETORS',
    LIMITED_PARTNERSHIP = 'LIMITED_PARTNERSHIP',
    LIMITED_PARTNERSHIP_PRIVATE_CORPORATION = 'LIMITED_PARTNERSHIP_PRIVATE_CORPORATION',
    NONPROFIT = 'NONPROFIT',
    ONLY_BUY_OR_SEND_MONEY = 'ONLY_BUY_OR_SEND_MONEY',
    OTHER_CORPORATE_BODY = 'OTHER_CORPORATE_BODY',
    PARTNERSHIP = 'PARTNERSHIP',
    PRIVATE_CORPORATION = 'PRIVATE_CORPORATION',
    PRIVATE_PARTNERSHIP = 'PRIVATE_PARTNERSHIP',
    PROPRIETORSHIP = 'PROPRIETORSHIP',
    PROPRIETORSHIP_CRAFTSMAN = 'PROPRIETORSHIP_CRAFTSMAN',
    PROPRIETORY_COMPANY = 'PROPRIETORY_COMPANY',
    PUBLIC_COMPANY = 'PUBLIC_COMPANY',
    PUBLIC_CORPORATION = 'PUBLIC_CORPORATION',
    PUBLIC_PARTNERSHIP = 'PUBLIC_PARTNERSHIP',
    REGISTERED_COOPERATIVE = 'REGISTERED_COOPERATIVE',
}

// https://developer.paypal.com/docs/api/orders/v2/#definition-card_response
export interface CardResponse {
    billing_address: {
        address_line_1?: string;
        address_line_2?: string;
        admin_area_1?: string;
        admin_area_2?: string;
        country_code: string;
        postal_code?: string;
    };
    authentication_result: AuthenticationResponse;
    brand: CardBrand;
    last_digits: string;
    name: string;
    type: CardType;
}

// https://developer.paypal.com/docs/api/orders/v2/#definition-checkout_payment_intent
export type CheckoutPaymentIntent = 'CAPTURE' | 'AUTHORIZE';

// https://developer.paypal.com/docs/api/orders/v2/#definition-confirm_order_request
export interface ConfirmOrderRequest {
    application_context?: OrderConfirmApplicationContext;
    payment_source: PaymentSource;
}

// https://developer.paypal.com/docs/api/orders/v2/#definition-order_confirm_application_context
export interface OrderConfirmApplicationContext {
    brand_name: string;
    cancel_url: string;
    locale: string;
    return_url: string;
}

// https://developer.paypal.com/docs/api/orders/v2/#definition-payment_source
export interface PaymentSource {
    token: Token;
}

// https://developer.paypal.com/docs/api/orders/v2/#definition-contingency
export enum Contingency {
    '3D_SECURE' = '3D_SECURE',
}

// https://developer.paypal.com/docs/api/orders/v2/#definition-document_issuer
export interface DocumentIssuer {
    authority?: string;
    country_code: string;
    province_code?: string;
}

// https://developer.paypal.com/docs/api/orders/v2/#definition-enrolled
export enum Enrolled {
    B = 'B',
    N = 'N',
    U = 'U',
    Y = 'Y',
}

// https://developer.paypal.com/docs/api/orders/v2/#definition-identity_document
export interface IdentityDocument {
    type: IdentityDocumentType;
    issuer: DocumentIssuer;
    id_number: string;
    issued_date: string;
    expiration_date: string;
}

export enum IdentityDocumentType {
    INDIVIDUAL_TAXPAYER_IDENTIFICATION_NUMBER = 'INDIVIDUAL_TAXPAYER_IDENTIFICATION_NUMBER',
    NATIONAL_IDENTIFICATION_NUMBER = 'NATIONAL_IDENTIFICATION_NUMBER',
    PASSPORT_NUMBER = 'PASSPORT_NUMBER',
    SOCIAL_SECURITY_NUMBER = 'SOCIAL_SECURITY_NUMBER',
    SSN4 = 'SSN4',
    TAX_IDENTIFICATION_NUMBER = 'TAX_IDENTIFICATION_NUMBER',
}

// https://developer.paypal.com/docs/api/orders/v2/#definition-issuer
export enum Issuer {
    CARD_ISSUER_INSTALLMENTS = 'CARD_ISSUER_INSTALLMENTS',
    PAYPAL = 'PAYPAL',
}

// https://developer.paypal.com/docs/api/orders/v2/#definition-model-account
export interface ModelAccount {
    account_id: string;
    account_number: string;
    account_tags: string[];
    legal_country_code: string;
    legal_entity: string;
    pricing_category: string;
    registration_type: string;
    status: Status;
    tier: Tier;
    time_created: string;
}

export enum Tier {
    BUSINESS = 'BUSINESS',
    PERSONAL = 'PERSONAL',
    PREMIER = 'PREMIER',
}

// https://developer.paypal.com/docs/api/orders/v2/#definition-model-address_with_confirmation
export interface ModelAddressWithConfirmation {
    confirmation_authority: string;
    confirmation_status: string;
    id: string;
}

// https://developer.paypal.com/docs/api/orders/v2/#definition-model-auth_tolerance
export interface ModelAuthTolerance {
    absolute: Money;
    percent: string;
}

// https://developer.paypal.com/docs/api/orders/v2/#definition-model-authorization_directives
export interface ModelAuthorizationDirectives {
    allow_multiple_captures: boolean;
    expiry_time_offset: number;
    honor_time_offset: number;
    tolerance: ModelAuthTolerance;
}

// https://developer.paypal.com/docs/api/orders/v2/#definition-model-business
export interface ModelBusiness extends ActivityTimestamps {
    addresses: ModelAddressWithConfirmation[];
    category: ModelBusinessCategory;
    customer_service_contactsobject: ModelCustomerServiceContact;
    description: string;
    emails: string[];
    external_id: string;
    id: string;
    identifications: ModelBusinessIdentification;
    names: BusinessName[];
    owners: ModelPerson[];
    phones: ModelPhoneInfo[];
    primary_email: string;
    primary: boolean;
    type: 'INDIVIDUAL' | 'PROPRIETORSHIP' | 'PARTNERSHIP';
    url: string;
}

// https://developer.paypal.com/docs/api/orders/v2/#definition-model-business_category
export interface ModelBusinessCategory {
    category: string;
    mcc_code: string;
    sub_category: string;
}

// https://developer.paypal.com/docs/api/orders/v2/#definition-model-business_identification
export interface ModelBusinessIdentification {
    identifier: string;
    issued_time: string;
    issuer: DocumentIssuer;
    type: 'TAX_IDENTIFICATION_NUMBER' | 'BUSINESS_REGISTRATION_NUMBER';
}

// https://developer.paypal.com/docs/api/orders/v2/#definition-model-customer_service_contact
export interface ModelCustomerServiceContact {
    emails: string[];
    phones: ModelPhoneInfo[];
}

// https://developer.paypal.com/docs/api/orders/v2/#definition-model-enums-currency_receiving_type
export enum ModelEnumsCurrencyReceivingType {
    ACCEPT = 'ACCEPT',
    ACCEPT_OPEN = 'ACCEPT_OPEN',
    DENY = 'DENY',
    HOLD = 'HOLD',
}

// https://developer.paypal.com/docs/api/orders/v2/#definition-model-enums-disbursement_type
export enum ModelEnumsDisbursementType {
    INSTANT = 'INSTANT',
    DELAYED = 'DELAYED',
}

// https://developer.paypal.com/docs/api/orders/v2/#definition-model-enums-facilitator_type
export enum ModelEnumsFacilitatorType {
    API_CALLER = 'API_CALLER',
    INTERNAL = 'INTERNAL',
    PARTNER = 'PARTNER',
}

// https://developer.paypal.com/docs/api/orders/v2/#definition-model-enums-liability_type
export enum ModelEnumsLiabilityType {
    FULL = 'FULL',
    PARTIAL = 'PARTIAL',
}

// https://developer.paypal.com/docs/api/orders/v2/#definition-model-enums-participant_type
export enum ModelEnumsParticipantType {
    FACILITATOR = 'FACILITATOR',
    RECEIVER = 'RECEIVER',
    SENDER = 'SENDER',
}

// https://developer.paypal.com/docs/api/orders/v2/#definition-model-enums-pricing_type
export enum ModelEnumsPricingType {
    BLENDED = 'BLENDED',
    IC_PLUS = 'IC_PLUS',
}

// https://developer.paypal.com/docs/api/orders/v2/#definition-model-business
export interface ModelPerson extends ActivityTimestamps {
    id: string;
    external_id: string;
    primary: boolean;
    primary_email: string;
    emails: string[];
    phones: ModelPhoneInfo[];
    addresses: ModelAddressWithConfirmation[];
    names: string[];
    citizenship: string;
    birth_date: string;
    identifications: IdentityDocument;
}

// https://developer.paypal.com/api/orders/v2/#definition-order
export interface Order extends ActivityTimestamps {
    id: string;
    intent: string;
    links: LinkDescription[];
    payer: Payer;
    payment_source: PaymentSourceResponse;
    purchase_units: PurchaseUnit[];
    status: Status;
}

// https://developer.paypal.com/docs/api/orders/v2/#definition-model-phone_info
export interface ModelPhoneInfo {
    phone_number: Phone;
    phone_type: PhoneType;
}

export enum PhoneType {
    FAX = 'FAX',
    HOME = 'HOME',
    MOBILE = 'MOBILE',
    OTHER = 'OTHER',
    PAGER = 'PAGER',
    WORK = 'WORK',
}

// https://developer.paypal.com/docs/api/orders/v2/#definition-payer_base
export interface PayerBase {
    email_address: string;
    payer_id: string;
}

// https://developer.paypal.com/docs/api/orders/v2/#definition-payer
export interface Payer extends PayerBase {
    address: AddressPortable;
    birth_date: string;
    name: Name;
    phone: PhoneWithType;
    tax_info: TaxInfo;
}

// https://developer.paypal.com/docs/api/orders/v2/#definition-phone_with_type
export interface PhoneWithType {
    phone_type?: PhoneType;
    phone_number: {
        national_number: string;
    };
}

// https://developer.paypal.com/docs/api/orders/v2/#definition-purchase_unit
export interface PurchaseUnit {
    amount: AmountWithBreakdown;
    custom_id: string;
    description: string;
    id: string;
    invoice_id: string;
    items: Item[];
    payee: Payee;
    payment_instruction: PaymentInstruction;
    payments: PaymentCollection;
    reference_id: string;
    shipping: ShippingDetail;
    soft_descriptor: string;
}

// https://developer.paypal.com/docs/api/orders/v2/#definition-purchase_unit_request
export interface PurchaseUnitRequest {
    amount: AmountWithBreakdown;
    custom_id?: string;
    description?: string;
    invoice_id?: string;
    items?: Item[];
    payee?: Payee;
    payment_instruction?: PaymentInstruction;
    reference_id?: string;
    shipping?: ShippingDetail;
    soft_descriptor?: string;
}

// https://developer.paypal.com/docs/api/orders/v2/#definition-item
export interface Item {
    name: string;
    unit_amount: Money;
    tax?: Money;
    quantity: string;
    description?: string;
    sku?: string;
    category: Category;
}

export enum Category {
    DIGITAL_GOODS = 'DIGITAL_GOODS',
    PHYSICAL_GOODS = 'PHYSICAL_GOODS',
    DONATION = 'DONATION',
}

// https://developer.paypal.com/docs/api/orders/v2/#definition-shipping_detail
export interface ShippingDetail {
    address: {
        address_line_1?: string;
        address_line_2?: string;
        admin_area_1?: string;
        admin_area_2?: string;
        country_code: string;
        postal_code?: string;
    };
    name?: {
        full_name?: string;
    };
    type?: ShippingType;
}

// https://developer.paypal.com/docs/api/orders/v2/#definition-payment_collection
export interface PaymentCollection {
    authorizations: AuthorizationWithAdditionalData;
    captures: Capture[];
    refunds: Refund[];
}

// https://developer.paypal.com/docs/api/orders/v2/#definition-authorization_with_additional_data
export interface AuthorizationWithAdditionalData {
    processor_response: ProcessorResponse;
}

// https://developer.paypal.com/docs/api/orders/v2/#definition-payment_source_response
export interface PaymentSourceResponse {
    card: CardResponse;
}

// https://developer.paypal.com/docs/api/orders/v2/#definition-order_application_context
export interface OrderApplicationContext {
    brand_name?: string;
    locale?: string;
    landing_page?: LandingPage;
    shipping_preference?: ShippingPreference;
    user_action?: UserAction;
    payment_method?: PaymentMethod;
    return_url?: string;
    cancel_url?: string;
    stored_payment_source?: StoredPaymentSource;
}

export enum LandingPage {
    LOGIN = 'LOGIN',
    BILLING = 'BILLING',
    NO_PREFERENCE = 'NO_PREFERENCE',
}

export type ShippingPreference = 'GET_FROM_FILE' | 'NO_SHIPPING' | 'SET_PROVIDED_ADDRESS';

export type UserAction = 'CONTINUE' | 'PAY_NOW';

// https://developer.paypal.com/docs/api/orders/v2/#definition-payment_method
export interface PaymentMethod {
    payee_preferred: PayeePreferred;
    payer_selected: string;
    standard_entry_class_code: StandardEntryClassCode;
}

export enum PayeePreferred {
    IMMEDIATE_PAYMENT_REQUIRED = 'IMMEDIATE_PAYMENT_REQUIRED',
    UNRESTRICTED = 'UNRESTRICTED',
}

export enum StandardEntryClassCode {
    CCD = 'CCD',
    PP = 'PPD',
    TEL = 'TEL',
    WEB = 'WEB',
}

// https://developer.paypal.com/docs/api/orders/v2/#definition-stored_payment_source
export interface StoredPaymentSource {
    payment_initiator: PaymentInitiator;
    payment_type: PaymentType;
    usage?: Usage;
    previous_network_transaction_reference?: object;
}

// https://developer.paypal.com/docs/api/orders/v2/#definition-payment_initiator
export enum PaymentInitiator {
    CUSTOMER = 'CUSTOMER',
    MERCHANT = 'MERCHANT',
}

export enum PaymentType {
    ONE_TIME = 'ONE_TIME',
    RECURRING = 'RECURRING',
    UNSCHEDULED = 'UNSCHEDULED',
}

export enum Usage {
    DERIVED = 'DERIVED',
    FIRST = 'FIRST',
    SUBSEQUENT = 'SUBSEQUENT',
}

// https://developer.paypal.com/docs/api/orders/v2/#definition-patch
export interface Patch {
    from: string;
    op: Operation;
    path: string;
    value: any;
}

export enum Operation {
    ADD = 'add',
    COPY = 'copy',
    MOVE = 'move',
    REMOVE = 'remove',
    REPLACE = 'replace',
    TEST = 'test',
}

export interface BaseOrderHeaders {
    Authorization: string;
    'Content-Type': 'application/json';
}

export class BaseOrderRequest<H extends BaseOrderHeaders, B = null> {
    readonly path: string;
    readonly verb: 'CONNECT' | 'DELETE' | 'GET' | 'HEAD' | 'OPTIONS' | 'PATCH' | 'POST' | 'PUT';
    readonly body: B;
    readonly headers: H;

    constructor(orderId: string);
}

/**
 * Orders Authorize
 * @see {@link https://developer.paypal.com/api/orders/v2/#orders_authorize}
 */
export namespace OrdersAuthorize {
    interface RequestHeaders extends BaseOrderHeaders {
        'PayPal-Client-Metadata-Id'?: string;
        'PayPal-Request-Id'?: string;
        Prefer?: string;
    }

    interface RequestData {
        payment_source: PaymentSource;
    }
}

export class OrdersAuthorizeRequest extends BaseOrderRequest<OrdersAuthorize.RequestHeaders, Order> {
    payPalClientMetadataId(payPalClientMetadataId: string): this;

    payPalRequestId(payPalRequestId: string): this;

    prefer(prefer: string): this;

    requestBody(body: OrdersAuthorize.RequestData): this;
}

/**
 * Orders Capture
 * @see {@link https://developer.paypal.com/api/orders/v2/#orders_capture}
 */
export namespace OrdersCapture {
    interface RequestHeaders extends BaseOrderHeaders {
        'PayPal-Client-Metadata-Id'?: string;
        'PayPal-Request-Id'?: string;
        Prefer?: string;
    }

    interface RequestData {
        payment_source: PaymentSource;
    }
}

export class OrdersCaptureRequest extends BaseOrderRequest<OrdersCapture.RequestHeaders, Order> {
    payPalClientMetadataId(payPalClientMetadataId: string): this;

    payPalRequestId(payPalRequestId: string): this;

    prefer(prefer: string): this;

    requestBody(body: OrdersCapture.RequestData): this;
}

/**
 * Orders Create
 * @see {@link https://developer.paypal.com/api/orders/v2/#orders_create}
 */
export namespace OrdersCreate {
    interface RequestHeaders extends BaseOrderHeaders {
        'PayPal-Partner-Attribution-Id'?: string;
        Prefer?: string;
    }

    interface RequestData {
        intent: CheckoutPaymentIntent;
        payer?: Payer;
        purchase_units: PurchaseUnitRequest[];
        application_context?: OrderApplicationContext;
    }
}

export class OrdersCreateRequest extends BaseOrderRequest<OrdersCreate.RequestHeaders, Order> {
    constructor();

    payPalPartnerAttributionId(payPalPartnerAttributionId: string): this;

    prefer(prefer: string): this;

    requestBody(order: OrdersCreate.RequestData): this;
}

/**
 * Orders Get
 * @see {@link https://developer.paypal.com/api/orders/v2/#orders_get}
 */
export namespace OrdersGet {
    type RequestHeaders = BaseOrderHeaders;
}

export class OrdersGetRequest extends BaseOrderRequest<OrdersGet.RequestHeaders, Order> {}

/**
 * Orders Patch
 * @see {@link https://developer.paypal.com/api/orders/v2/#orders_patch}
 */
export namespace OrdersPatch {
    type RequestHeaders = BaseOrderHeaders;

    type RequestData = Patch[];
}

export class OrdersPatchRequest extends BaseOrderRequest<OrdersPatch.RequestHeaders> {
    requestBody(body: OrdersPatch.RequestData): this;
}

/**
 * Orders Validate
 */
export namespace OrdersValidate {
    interface RequestHeaders extends BaseOrderHeaders {
        'PayPal-Client-Metadata-Id'?: string;
    }
}

export class OrdersValidateRequest extends BaseOrderRequest<OrdersValidate.RequestHeaders> {
    payPalClientMetadataId(payPalClientMetadataId: string): this;

    requestBody(body: object): this;
}
