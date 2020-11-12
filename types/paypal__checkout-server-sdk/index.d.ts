type intentsTypes = 'CAPTURE' | 'AUTHORIZE';
type taxesType = 'BR_CPF' | 'BR_CNPL';
type statusType = 'CREATED' | 'COMPLETED' | 'SAVED' | 'APPROVED' | 'VOIDED' | 'PAYER_ACTION_REQUIRED';
type landingDef = 'LOGIN' | 'BILLING' | 'NO_PREFERENCE';
type shippingDef = 'GET_FROM_FILE' | 'NO_SHIPPING' | 'SET_PROVIDED_ADDRESS';
type userActionDef = 'PAY_NOW' | 'CONTINUE';
type entryClassCodeDef = 'TEL' | 'WEB' | 'CCD' | 'PPD';
type payeePrefDef = 'UNRESTRICTED' | 'IMMEDIATE_PAYMENT_REQUIRED';

interface optionsI {
    _accessToken: string | undefined;
    _tokenType : string | undefined;
    _expiresIn : Number;
    _dateCreated : Number;
}

interface payerNameI {
    give_name: string;
    surname: string;
}

interface payerPhoneI {
    country_code: string;
    national_number: string;
    extension_number?: string
}

interface payerTaxI {
    tax_id: string;
    tax_id_type: taxesType;
}

interface payerAddressI {
    address_line_1?: string;
    address_line_2?: string;
    admin_area_2?: string;
}

interface payerI {
    name: payerNameI;
    email_address: string;
    payer_id: string;
    phone: payerPhoneI;
    birth_date: string;
    tax_info: payerTaxI;
    address: payerAddressI;
}

interface amountI {
    currency_code: string;
    value: string;
}

interface purchaseUnitI {
    reference_id?: string;
    amount: amountI;
    description?: string;
    custom_id?: string;
    invoice_id?: string;
    soft_descriptor?: string;
}

interface linksI {
    href: string;
    rel: string;
    method: string;
}

interface orderResultI {
    id: string;
    status: statusType;
    links: Array<linksI>
    payer: payerI;
    purchase_units: purchaseUnitI;
}

interface orderResponseI {
    statusCode: number;
    headers: Object;
    result: orderResultI;
}

interface paymentMethodI {
    payer_selected?: string;
    standard_entry_class_code: entryClassCodeDef;
    payee_preferred: payeePrefDef;
}

interface applicationContextI {
    brand_name?: string;
    locale?: string;
    landing_page?: landingDef;
    shipping_preference?: shippingDef;
    user_action?: userActionDef;
    payment_method?: paymentMethodI;
    return_url?: string;
    cancel_url?: string;
    stored_payment_source?: object;
}

export declare interface bodyOptions {
    intent: intentsTypes;
    purchase_units: Array<purchaseUnitI>;
    payer?: payerI;
    application_context?: applicationContextI;
}

export declare class baseEnvironment {
    constructor(clientId: string, clientSecret: string);
    authorizationString(): string;
}

export declare namespace core {
    export class AccessToken {
        constructor(options: optionsI); 
        isExpired(): boolean;
        authorizationString(): string;
    }

    export class PayPalHttpClient {
        constructor(paypalEnvironement: SandboxEnvironment | LiveEnvironment);
        execute(order: orders.OrdersCreateRequest) : Promise<orderResponseI>
    }

    export class SandboxEnvironment extends baseEnvironment {}
    export class LiveEnvironment extends baseEnvironment {}
}

export declare namespace orders {
    export class OrdersCreateRequest {
        constructor();
        requestBody(bodyOptions: bodyOptions): void;
    }

    export class OrdersCaptureRequest {
        constructor(orderId: string);
        requestBody() : void;
    }
}