// Type definitions for paypal-rest-sdk 1.7
// Project: https://github.com/paypal/PayPal-node-SDK
// Definitions by: Andrew Throener <https://github.com/trainerbill>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.1

/// <reference types="node" />

import http = require('http');

export function configure(opts: ConfigureOptions): string;

/*~ You can declare types that are available via importing the module */

export interface PayPalError {
    readonly name: string;
    readonly message: string;
    readonly details: ErrorDetails[];
    readonly information_link: string;
    readonly debug_id: string;
}

export type CallbackFunction<T> = (err: SDKError, response: T) => any;

export interface SDKError {
    httpStatusCode: number;
    message: string;
    response: PayPalError;
    response_stringified?: string;
    stack: string;
}
export interface ErrorDetails {
    readonly field: string;
    readonly issue: string;
}

export interface Address {
    line1: string;
    line2?: string;
    city: string;
    country_code: string;
    postal_code: string;
    state: string;
    phone?: string;
    readonly normalization_status?: string;
    type?: string;
    recipient_name?: string;
}

export interface Phone {
    country_code: string;
    national_number: string;
}

export interface ConfigureOptions {
    client_id: string;
    client_secret: string;
    mode: string;
    schema?: string;
    host?: string;
    port?: string;
    openid_connect_schema?: string;
    openid_connect_host?: string;
    openid_connect_port?: string;
    authorize_url?: string;
    logout_url?: string;
    headers?: any;
}

export interface FraudManagementFiltersDetails {
    filter_type: string;
    filter_id: string;
    name: string;
    description: string;
}

export interface Response {
    readonly httpStatusCode: number;
    readonly create_time?: string;
    readonly count?: number;
    readonly total_count?: number;
}

export interface FilterOptions {
    page_size: number;
    start_time: string;
    end_time: string;
}

export interface UpdateRequest {
    op: string;
    path: string;
    value: any;
}

export interface Amount {
    currency: string;
    total: string;
    details?: {
        subtotal?: string;
        shipping?: string;
        tax?: string;
        handling_fee?: string;
        shipping_discout?: string;
        insurance?: string;
        gift_wrap?: string;
    };
}
export interface ErrorDetails {
    readonly field: string;
    readonly issue: string;
}

export interface Currency {
    currency: string;
    value: string;
}

export interface QueryParameters {
    count?: number;
    start_id?: string;
    start_index?: number;
    start_time?: string;
    end_time?: string;
    payee_id?: string;
    sort_by?: string;
    sort_order?: string;
    anchor_type?: string;
    page_size?: number;
    transaction_id?: string;
    event_type?: string;
    webhook_id?: string;
    page?: number;
    total_count_required?: boolean;
    status?: string[];
}

export interface Link {
    href: string;
    method: string;
    rel: string;
}

export interface Transaction {
    reference_id?: string;
    amount: Amount;
    description?: string;
    item_list?: {
        items: Item[];
        shipping_address?: Address;
        shipping_method?: string;
        shipping_phone_number?: string;
    };
    payee?: Payee;
    note_to_payee?: string;
    custom?: string;
    invoice_number?: string;
    purchase_order?: string;
    soft_descriptor?: string;
    payment_options?: {
        allowed_payment_method: string;
    };
    notify_url?: string;
    order_url?: string;
    readonly related_resources?: RelatedResources;
}

export interface Payee {
    email: string;
    merchant_id: string;
    payee_display_metadata?: {
        email?: string;
        display_phone?: Phone;
        brand_name?: string;
    };
}

export interface Payment {
    readonly id?: string;
    intent: string;
    payer: {
        payment_method: string;
    };
    transactions: [ Transaction ];
    readonly state?: string;
    experience_profile_id?: string;
    note_to_payer?: string;
    redirect_urls?: {
        return_url?: string;
        cancel_url?: string;
    };
    readonly failure_reason?: string;
    readonly create_time?: string;
    readonly update_time?: string;
    readonly links?: Link[];
}

export interface PaymentResponse extends Payment, Response {}

export interface Resource {
    readonly id: string;
    amount: Amount;
    readonly payment_mode?: string;
    readonly state?: string;
    readonly reason_code?: string;
    readonly protection_eligibility?: string;
    readonly protection_eligibility_type?: string;
    readonly fmf_details?: FraudManagementFiltersDetails;
    readonly receipt_id?: string;
    readonly parent_payment?: string;
    readonly processor_response?: any;
    readonly create_time?: string;
    readonly update_time?: string;
    readonly links?: Link[];
}

export interface SaleResource extends Resource {
    readonly purchase_unit_reference_id?: string;
    readonly clearing_time?: string;
    readonly payment_hold_status?: string;
    readonly payment_hold_reasons?: string[];
    readonly transaction_fee?: Currency;
    readonly exchange_rate?: string;
    readonly billing_agreement_id?: string;
}

export interface AuthorizationResource extends Resource {
    readonly valid_until: string;
    readonly update_time: string;
    readonly reference_id?: string;
}

export interface CaptureResource extends Resource {
    is_final_capture?: boolean;
    invoice_number?: string;
    transaction_fee?: Currency;
}

export interface RefundResource extends Resource {
    reason?: string;
    invoice_number?: string;
    readonly sale_id?: string;
    readonly capture_id?: string;
    description?: string;
    readonly reason_code?: string;
    readonly refund_reason_code?: string;
    readonly refund_funding_type?: string;
}

export interface Item {
    currency: string;
    name: string;
    price: string;
    quantity: number;
    sku?: string;
    description?: string;
    tax?: string;
    url?: string;
}

export interface RefundRequest {
    amount?: Amount;
    description?: string;
    refund_source?: string;
    reason?: string;
    invoice_number?: string;
    refund_advice?: boolean;
    items?: Item[];
    // TODO: Type this https://developer.paypal.com/docs/api/payments/#definition-payer_info
    payer_info?: any;
    supplementary_data?: any[];
}

export interface RelatedResources {
    sale?: SaleResource;
    authorization?: AuthorizationResource;
    order?: any;
    capture?: CaptureResource;
    refund?: RefundResource;
}

export namespace payment {
    interface ExecuteRequest {
        payer_id: string;
    }
    interface SaleResponse extends SaleResource, Response {}
    interface AuthorizationResponse extends AuthorizationResource, Response {}
    interface CaptureResponse extends CaptureResource, Response {}
    interface RefundResponse extends RefundResource, Response {}
    interface ListResponse extends Response {
        payments: Payment[];
        count: number;
        next_id: string;
    }
    function create(
        data: Payment,
        config: http.RequestOptions | CallbackFunction<PaymentResponse>,
        cb?: CallbackFunction<PaymentResponse>): void;
    function execute(
        id: string,
        data: ExecuteRequest,
        config: http.RequestOptions | CallbackFunction<PaymentResponse>,
        cb?: CallbackFunction<PaymentResponse>): void;
    function get(
        id: string,
        config: http.RequestOptions | CallbackFunction<PaymentResponse>,
        cb?: CallbackFunction<PaymentResponse>): void;
    function list(
        data: QueryParameters | http.RequestOptions | CallbackFunction<ListResponse>,
        config?: http.RequestOptions | CallbackFunction<ListResponse>,
        cb?: CallbackFunction<ListResponse>): void;
    function update(
        id: string,
        data: UpdateRequest[],
        config?: http.RequestOptions | CallbackFunction<PaymentResponse>,
        cb?: CallbackFunction<PaymentResponse>): void;
}
export namespace notification {
    interface NotificationEventType {
        readonly description?: string;
        name: string;
        status?: string;
    }
    interface EventTypesResponse extends Response {
        readonly event_types: NotificationEventType[];
    }
    namespace webhook {
        interface Webhook {
            event_types: NotificationEventType[];
            readonly id?: string;
            readonly links?: Link[];
            url: string;
        }
        interface WebhookListResponse extends Response {
            readonly webhooks: Webhook[];
        }
        function list(
            data: QueryParameters | http.RequestOptions | CallbackFunction<WebhookListResponse>,
            config?: http.RequestOptions | CallbackFunction<WebhookListResponse>,
            cb?: CallbackFunction<WebhookListResponse>): void;
        function create(
            data: Webhook,
            config: http.RequestOptions | CallbackFunction<Webhook>,
            cb?: CallbackFunction<Webhook>): void;
        function replace(
            id: string,
            data: UpdateRequest[],
            config: http.RequestOptions | CallbackFunction<Webhook>,
            cb?: CallbackFunction<Webhook>): void;
        function del(
            id: string,
            config: http.RequestOptions | CallbackFunction<Webhook>,
            cb?: CallbackFunction<Webhook>): void;
        function get(
            id: string,
            config: http.RequestOptions | CallbackFunction<Webhook>,
            cb?: CallbackFunction<Webhook>): void;
        function eventTypes(
            id: string,
            config: http.RequestOptions | CallbackFunction<EventTypesResponse>,
            cb?: CallbackFunction<EventTypesResponse>): void;
    }
    namespace webhookEvent {
        interface WebhookEvent {
            readonly id?: string;
            readonly create_time?: string;
            readonly resource_type?: string;
            readonly event_version?: string;
            readonly event_type?: string;
            readonly summary?: string;
            readonly resource?: any;
        }
        interface WebhookEventListResponse extends Response {
            events: WebhookEvent[];
        }
        interface WebhookVerifyResponse {
            verification_status: string;
        }
        function get(
            id: string,
            config: http.RequestOptions | CallbackFunction<WebhookEvent>,
            cb?: CallbackFunction<WebhookEvent>): void;
        function getAndVerify(
            body: WebhookEvent,
            cb: CallbackFunction<WebhookEvent>): void;
        function list(
            data: QueryParameters | http.RequestOptions | CallbackFunction<WebhookEventListResponse>,
            config?: http.RequestOptions | CallbackFunction<WebhookEventListResponse>,
            cb?: CallbackFunction<WebhookEventListResponse>): void;
        function resend(
            id: string,
            config: http.RequestOptions | CallbackFunction<WebhookEvent>,
            cb?: CallbackFunction<WebhookEvent>): void;
        function verify(
            headers: any,
            body: WebhookEvent,
            id: string,
            cb: CallbackFunction<WebhookVerifyResponse>): void;
    }
    namespace webhookEventType {
        function list(
            data: QueryParameters | http.RequestOptions | CallbackFunction<EventTypesResponse>,
            config?: http.RequestOptions | CallbackFunction<EventTypesResponse>,
            cb?: CallbackFunction<EventTypesResponse>): void;
    }
}

export namespace authorization {
    interface CaptureRequest {
        amount?: Amount;
        is_final_capture?: boolean;
        invoice_number?: string;
    }
    function get(
        id: string,
        config: http.RequestOptions | CallbackFunction<AuthorizationResource>,
        cb?: CallbackFunction<AuthorizationResource>): void;
    function capture(
        id: string,
        data: CaptureRequest | http.RequestOptions | CallbackFunction<CaptureResource>,
        config?: http.RequestOptions | CallbackFunction<CaptureResource>,
        cb?: CallbackFunction<CaptureResource>): void;
    function reauthorize(
        id: string, data: Amount | http.RequestOptions | CallbackFunction<AuthorizationResource>,
        config?: http.RequestOptions | CallbackFunction<AuthorizationResource>,
        cb?: CallbackFunction<AuthorizationResource>): void;
    // TODO: Not sure how to type a function named void....
    // function void(data?: any, config?: http.RequestOptions, cb?: CallbackFunction<EventTypesResponse>): void;
}
export namespace capture {
    function get(
        id: string,
        config: http.RequestOptions | CallbackFunction<CaptureResource>,
        cb?: CallbackFunction<CaptureResource>): void;
    function refund(
        id: string,
        data: RefundRequest | http.RequestOptions | CallbackFunction<RefundResource>,
        config?: http.RequestOptions | CallbackFunction<RefundResource>,
        cb?: CallbackFunction<RefundResource>): void;
}
export namespace invoice {
    interface EmailRequest {
        subject?: string;
        note?: string;
        send_to_merchant?: boolean;
        send_to_payer?: boolean;
        cc_emails?: string[];
    }
    interface Invoice {
        allow_tip?: boolean;
        billing_info?: [BillingInfo];
        discount?: Cost;
        shipping_cost?: ShippingCost;
        readonly id?: string;
        invoice_date?: string;
        items?: InvoiceItem[];
        merchant_info?: Merchant;
        readonly metadata?: {
            created_date?: string;
            created_by?: string;
            cancelled_date?: string;
            cancelled_by?: string;
            last_updated_date?: string;
            last_updated_by?: string;
            first_sent_date?: string;
            last_sent_date?: string;
            last_sent_by?: string;
            payer_view_url?: string;
        };
        note?: string;
        number?: string;
        payment_term?: PaymentTerm;
        reference?: string;
        shipping_info?: {
            address: Address;
            business_name?: string;
            first_name: string;
            last_name: string;
        };
        phone?: Phone;
        readonly status?: string;
        tax_calculated_after_discount?: boolean;
        tax_inclusive?: boolean;
        template_id?: string;
        readonly total_amount?: Currency;
        readonly uri?: string;
        cc_info?: Participant[];
        custom?: CustomAmount;
        allow_partial_payment?: boolean;
        minimum_amount_due?: Currency;
        terms?: string;
        merchant_memo?: string;
        logo_url?: string;
        readonly payments?: PaymentDetail[];
        readonly refunds?: Detail[];
        readonly payment_summary?: {
            paypal: Currency;
            other: Currency;
        };
        readonly refunded_amount?: {
            paypal: Currency;
            other: Currency;
        };
        readonly paid_amount?: {
            paypal: Currency;
            other: Currency;
        };
        attachments?: FileAttachment[];
        readonly links?: Link[];
    }
    interface InvoiceResponse extends Invoice, Response {}
    interface FileAttachment {
        name: string;
        url: string;
    }
    interface BillingInfo extends Person {
        email?: string;
        language?: string;
        notification_channel?: string;
        additional_info?: string;
    }
    interface InvoiceItem {
        name: string;
        description?: string;
        quantity: number;
        unit_price: Currency;
        tax?: Tax;
        date?: string;
        discount?: Cost;
        unit_of_measure?: string;
    }
    interface CustomAmount {
        label: string;
        amount: Currency;
    }
    interface ShippingCost {
        amount?: Currency;
        tax?: Tax;
    }
    interface Tax extends Cost {
        id?: string;
        name?: string;
    }
    interface Cost {
        percent?: number;
        amount?: Currency;
    }
    interface PaymentTerm {
        term_type?: string;
        due_date?: string;
    }
    interface Person {
        email?: string;
        first_name?: string;
        last_name?: string;
        business_name?: string;
        phone?: Phone;
        website?: string;
        address?: Address;
    }
    interface Merchant extends Person {
        tax_id?: string;
        fax?: Phone;
        additional_info_label?: string;
        additional_info?: string;
    }
    interface Participant extends Person {
        email: string;
        fax?: Phone;
        additional_info?: string;
    }
    interface Detail {
        type: string;
        transaction_id: string;
        date: string;
        note?: string;
        amount: Currency;
    }
    interface PaymentDetail extends Detail {
        transaction_type: string;
        method: string;
    }
    interface NumberResponse {
        number: string;
    }
    interface QrResponse {
        image: string;
    }
    interface ListResponse extends Response {
        invoices: Invoice[];
    }
    interface PayRequest {
        date: string;
        method: string;
        note?: string;
        amount: Currency;
    }
    interface RefundRequest {
        date: string;
        note?: string;
        amount: Currency;
    }
    interface SearchRequest {
        email?: string;
        recipient_first_name?: string;
        recipient_last_name?: string;
        recipient_business_name?: string;
        number?: string;
        status?: string;
        lower_total_amount?: Currency;
        upper_total_amount?: Currency;
        start_invoice_date?: string;
        end_invoice_date?: string;
        start_due_date?: string;
        end_due_date?: string;
        start_payment_date?: string;
        end_payment_date?: string;
        start_creation_date?: string;
        end_creation_date?: string;
        page?: number;
        page_size?: number;
        total_count_required?: boolean;
        archived?: boolean;
    }
    function cancel(
        id: string,
        data: EmailRequest | http.RequestOptions | CallbackFunction<null>,
        config?: http.RequestOptions | CallbackFunction<null> ,
        cb?: CallbackFunction<null>): void;
    function create(
        data: Invoice,
        config: http.RequestOptions | CallbackFunction<InvoiceResponse>,
        cb?: CallbackFunction<InvoiceResponse>): void;
    function del(
        id: string,
        config: http.RequestOptions | CallbackFunction<InvoiceResponse>,
        cb?: CallbackFunction<null>): void;
    function deleteExternalPayment(
        id: string,
        trxid: string,
        config: http.RequestOptions | CallbackFunction<null>,
        cb?: CallbackFunction<null>): void;
    function deleteExternalRefund(
        id: string,
        trxid: string,
        config: http.RequestOptions | CallbackFunction<null>,
        cb?: CallbackFunction<null>): void;
    function generateNumber(
        config: http.RequestOptions | CallbackFunction<NumberResponse>,
        cb?: CallbackFunction<NumberResponse>): void;
    function get(
        id: string,
        config: http.RequestOptions | CallbackFunction<InvoiceResponse>,
        cb?: CallbackFunction<InvoiceResponse>): void;
    function list(
        data: QueryParameters | http.RequestOptions | CallbackFunction<ListResponse>,
        config?: http.RequestOptions | CallbackFunction<ListResponse>,
        cb?: CallbackFunction<ListResponse>): void;
    function qrCode(
        id: string,
        height: number,
        width: number,
        config: http.RequestOptions | CallbackFunction<QrResponse>,
        cb?: CallbackFunction<QrResponse>): void;
    function recordPayment(
        id: string,
        data: PayRequest,
        config: http.RequestOptions | CallbackFunction<null>,
        cb?: CallbackFunction<null>): void;
    function recordRefund(
        id: string,
        data: RefundRequest,
        config: http.RequestOptions | CallbackFunction<null>,
        cb?: CallbackFunction<null>): void;
    function remind(
        id: string,
        data: EmailRequest | http.RequestOptions | CallbackFunction<null>,
        config?: http.RequestOptions | CallbackFunction<null>,
        cb?: CallbackFunction<null>): void;
    function search(
        data: SearchRequest,
        config: http.RequestOptions | CallbackFunction<ListResponse>,
        cb?: CallbackFunction<ListResponse>): void;
    function send(
        id: string,
        config: http.RequestOptions | CallbackFunction<ListResponse>,
        cb?: CallbackFunction<null>): void;
    function update(
        id: string,
        data: Invoice,
        config: http.RequestOptions | CallbackFunction<InvoiceResponse>,
        cb?: CallbackFunction<InvoiceResponse>): void;
}
export namespace refund {
    function get(
        id: string,
        config: http.RequestOptions | CallbackFunction<RefundResource>,
        cb?: CallbackFunction<RefundResource>): void;
}
export namespace sale {
    function get(
        id: string,
        config: http.RequestOptions | CallbackFunction<PaymentResponse>,
        cb?: CallbackFunction<PaymentResponse>): void;
    function refund(
        id: string,
        data: RefundRequest | http.RequestOptions | CallbackFunction<RefundResource>,
        config?: http.RequestOptions | CallbackFunction<RefundResource>,
        cb?: CallbackFunction<RefundResource>): void;
}
// TODO: Strong Typing stops here
export namespace billingAgreement {
    function billBalance(id: string, data: any, config?: any, cb?: any): void;
    function cancel(id: string, data: any, config?: any, cb?: any): void;
    function create(data: any, config: any, cb?: any): void;
    function execute(id: string, data: any, config?: any, cb?: any): void;
    function get(id: string, config: any, cb?: any): void;
    function reactivate(id: string, data: any, config?: any, cb?: any): void;
    function searchTransactions(id: string, start_date: any, end_date?: any, config?: any, cb?: any): void;
    function setBalance(id: string, data: any, config?: any, cb?: any): void;
    function suspend(id: string, data: any, config?: any, cb?: any): void;
    function update(id: string, data: any, config?: any, cb?: any): void;
}
export namespace billingPlan {
    function activate(id: string, config: any, cb?: any): void;
    function create(data: any, config: any, cb?: any): void;
    function get(id: string, config: any, cb?: any): void;
    function list(data: any, config?: any, cb?: any): void;
    function update(id: string, data: any, config: any, cb?: any): void;
}
export namespace invoiceTemplate {
    function create(data: any, config: any, cb?: any): void;
    // function delete(id: string, config: any, cb?: any): void;
    function get(id: string, config: any, cb?: any): void;
    function list(data: any, config?: any, cb?: any): void;
    function update(id: string, data: any, config: any, cb?: any): void;
}
export namespace order {
    function authorize(id: string, data: any, config: any, cb?: any): void;
    // function void(id: string, config: any, cb?: any): void;
    function get(id: string, config: any, cb?: any): void;
    function capture(id: string, data: any, config: any, cb?: any): void;
}
export namespace payout {
    function create(data: any, sync_mode: any, config?: any, cb?: any): void;
    function get(id: string, config: any, cb?: any): void;
}
export namespace payoutItem {
    function cancel(id: string, config: any, cb?: any): void;
    function get(id: string, config: any, cb?: any): void;
}
export namespace webProfile {
    function create(data: any, config: any, cb?: any): void;
    function del(id: string, config: any, cb?: any): void;
    function get(id: string, config: any, cb?: any): void;
    function list(data: any, config?: any, cb?: any): void;
    function replace(id: string, data: any, config: any, cb?: any): void;
    function update(id: string, data: any, config: any, cb?: any): void;
}
