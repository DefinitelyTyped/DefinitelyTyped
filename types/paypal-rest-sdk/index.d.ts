/// <reference types="node" />

import http = require("http");

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
    response_stringified?: string | undefined;
    stack: string;
}
export interface ErrorDetails {
    readonly field: string;
    readonly issue: string;
}

export interface Address {
    line1: string;
    line2?: string | undefined;
    city: string;
    country_code: string;
    postal_code: string;
    state: string;
    phone?: string | undefined;
    readonly normalization_status?: string | undefined;
    type?: string | undefined;
    recipient_name?: string | undefined;
}

export interface Phone {
    country_code: string;
    national_number: string;
}

export interface ConfigureOptions {
    client_id: string;
    client_secret: string;
    mode: string;
    schema?: string | undefined;
    host?: string | undefined;
    port?: string | undefined;
    openid_connect_schema?: string | undefined;
    openid_connect_host?: string | undefined;
    openid_connect_port?: string | undefined;
    authorize_url?: string | undefined;
    logout_url?: string | undefined;
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
    readonly create_time?: string | undefined;
    readonly count?: number | undefined;
    readonly total_count?: number | undefined;
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
        subtotal?: string | undefined;
        shipping?: string | undefined;
        tax?: string | undefined;
        handling_fee?: string | undefined;
        shipping_discout?: string | undefined;
        insurance?: string | undefined;
        gift_wrap?: string | undefined;
    } | undefined;
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
    count?: number | undefined;
    start_id?: string | undefined;
    start_index?: number | undefined;
    start_time?: string | undefined;
    end_time?: string | undefined;
    payee_id?: string | undefined;
    sort_by?: string | undefined;
    sort_order?: string | undefined;
    anchor_type?: string | undefined;
    page_size?: number | undefined;
    transaction_id?: string | undefined;
    event_type?: string | undefined;
    webhook_id?: string | undefined;
    page?: number | undefined;
    total_count_required?: boolean | undefined;
    status?: string[] | undefined;
}

export interface Link {
    href: string;
    method: string;
    rel: string;
}

export interface Transaction {
    reference_id?: string | undefined;
    amount: Amount;
    description?: string | undefined;
    item_list?: {
        items: Item[];
        shipping_address?: Address | undefined;
        shipping_method?: string | undefined;
        shipping_phone_number?: string | undefined;
    } | undefined;
    payee?: Payee | undefined;
    note_to_payee?: string | undefined;
    custom?: string | undefined;
    invoice_number?: string | undefined;
    purchase_order?: string | undefined;
    soft_descriptor?: string | undefined;
    payment_options?: {
        allowed_payment_method: string;
    } | undefined;
    notify_url?: string | undefined;
    order_url?: string | undefined;
    readonly related_resources?: RelatedResources[] | undefined;
}

export interface Payee {
    email: string;
    merchant_id: string;
    payee_display_metadata?: {
        email?: string | undefined;
        display_phone?: Phone | undefined;
        brand_name?: string | undefined;
    } | undefined;
}

export interface Payment {
    readonly id?: string | undefined;
    intent: string;
    payer: {
        payment_method: string;
    };
    transactions: Transaction[];
    readonly state?: string | undefined;
    experience_profile_id?: string | undefined;
    note_to_payer?: string | undefined;
    redirect_urls?: {
        return_url?: string | undefined;
        cancel_url?: string | undefined;
    } | undefined;
    readonly failure_reason?: string | undefined;
    readonly create_time?: string | undefined;
    readonly update_time?: string | undefined;
    readonly links?: Link[] | undefined;
}

export interface PaymentResponse extends Payment, Response {}

export interface Resource {
    readonly id: string;
    amount: Amount;
    readonly payment_mode?: string | undefined;
    readonly state?: string | undefined;
    readonly reason_code?: string | undefined;
    readonly protection_eligibility?: string | undefined;
    readonly protection_eligibility_type?: string | undefined;
    readonly fmf_details?: FraudManagementFiltersDetails | undefined;
    readonly receipt_id?: string | undefined;
    readonly parent_payment?: string | undefined;
    readonly processor_response?: any;
    readonly create_time?: string | undefined;
    readonly update_time?: string | undefined;
    readonly links?: Link[] | undefined;
}

export interface SaleResource extends Resource {
    readonly purchase_unit_reference_id?: string | undefined;
    readonly clearing_time?: string | undefined;
    readonly payment_hold_status?: string | undefined;
    readonly payment_hold_reasons?: string[] | undefined;
    readonly transaction_fee?: Currency | undefined;
    readonly exchange_rate?: string | undefined;
    readonly billing_agreement_id?: string | undefined;
}

export interface AuthorizationResource extends Resource {
    readonly valid_until: string;
    readonly update_time: string;
    readonly reference_id?: string | undefined;
}

export interface CaptureResource extends Resource {
    is_final_capture?: boolean | undefined;
    invoice_number?: string | undefined;
    transaction_fee?: Currency | undefined;
}

export interface RefundResource extends Resource {
    reason?: string | undefined;
    invoice_number?: string | undefined;
    readonly sale_id?: string | undefined;
    readonly capture_id?: string | undefined;
    description?: string | undefined;
    readonly reason_code?: string | undefined;
    readonly refund_reason_code?: string | undefined;
    readonly refund_funding_type?: string | undefined;
}

export interface Item {
    currency: string;
    name: string;
    price: string;
    quantity: number;
    sku?: string | undefined;
    description?: string | undefined;
    tax?: string | undefined;
    url?: string | undefined;
}

export interface PayerInfo {
    email?: string | undefined;
    readonly salutation?: string | undefined;
    readonly first_name?: string | undefined;
    readonly middle_name?: string | undefined;
    readonly last_name?: string | undefined;
    readonly suffix?: string | undefined;
    readonly payer_id?: string | undefined;
    birth_date?: string | undefined;
    tax_id?: string | undefined;
    tax_id_type?: string | undefined;
    country_code?: string | undefined;
    billing_address?: Address | undefined;
    readonly shipping_address?: Address | undefined;
}

export interface RefundRequest {
    amount?: Amount | undefined;
    description?: string | undefined;
    refund_source?: string | undefined;
    reason?: string | undefined;
    invoice_number?: string | undefined;
    refund_advice?: boolean | undefined;
    items?: Item[] | undefined;
    payer_info?: PayerInfo | undefined;
    supplementary_data?: any[] | undefined;
}

export interface RelatedResources {
    sale?: SaleResource | undefined;
    authorization?: AuthorizationResource | undefined;
    order?: any;
    capture?: CaptureResource | undefined;
    refund?: RefundResource | undefined;
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
        cb?: CallbackFunction<PaymentResponse>,
    ): void;
    function execute(
        id: string,
        data: ExecuteRequest,
        config: http.RequestOptions | CallbackFunction<PaymentResponse>,
        cb?: CallbackFunction<PaymentResponse>,
    ): void;
    function get(
        id: string,
        config: http.RequestOptions | CallbackFunction<PaymentResponse>,
        cb?: CallbackFunction<PaymentResponse>,
    ): void;
    function list(
        data: QueryParameters | http.RequestOptions | CallbackFunction<ListResponse>,
        config?: http.RequestOptions | CallbackFunction<ListResponse>,
        cb?: CallbackFunction<ListResponse>,
    ): void;
    function update(
        id: string,
        data: UpdateRequest[],
        config?: http.RequestOptions | CallbackFunction<PaymentResponse>,
        cb?: CallbackFunction<PaymentResponse>,
    ): void;
}
export namespace notification {
    interface NotificationEventType {
        readonly description?: string | undefined;
        name: string;
        status?: string | undefined;
    }
    interface EventTypesResponse extends Response {
        readonly event_types: NotificationEventType[];
    }
    namespace webhook {
        interface Webhook {
            event_types: NotificationEventType[];
            readonly id?: string | undefined;
            readonly links?: Link[] | undefined;
            url: string;
        }
        interface WebhookListResponse extends Response {
            readonly webhooks: Webhook[];
        }
        function list(
            data: QueryParameters | http.RequestOptions | CallbackFunction<WebhookListResponse>,
            config?: http.RequestOptions | CallbackFunction<WebhookListResponse>,
            cb?: CallbackFunction<WebhookListResponse>,
        ): void;
        function create(
            data: Webhook,
            config: http.RequestOptions | CallbackFunction<Webhook>,
            cb?: CallbackFunction<Webhook>,
        ): void;
        function replace(
            id: string,
            data: UpdateRequest[],
            config: http.RequestOptions | CallbackFunction<Webhook>,
            cb?: CallbackFunction<Webhook>,
        ): void;
        function del(
            id: string,
            config: http.RequestOptions | CallbackFunction<Webhook>,
            cb?: CallbackFunction<Webhook>,
        ): void;
        function get(
            id: string,
            config: http.RequestOptions | CallbackFunction<Webhook>,
            cb?: CallbackFunction<Webhook>,
        ): void;
        function eventTypes(
            id: string,
            config: http.RequestOptions | CallbackFunction<EventTypesResponse>,
            cb?: CallbackFunction<EventTypesResponse>,
        ): void;
    }
    namespace webhookEvent {
        interface WebhookEvent {
            readonly id?: string | undefined;
            readonly create_time?: string | undefined;
            readonly resource_type?: string | undefined;
            readonly event_version?: string | undefined;
            readonly event_type?: string | undefined;
            readonly summary?: string | undefined;
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
            cb?: CallbackFunction<WebhookEvent>,
        ): void;
        function getAndVerify(
            body: WebhookEvent,
            cb: CallbackFunction<WebhookEvent>,
        ): void;
        function list(
            data: QueryParameters | http.RequestOptions | CallbackFunction<WebhookEventListResponse>,
            config?: http.RequestOptions | CallbackFunction<WebhookEventListResponse>,
            cb?: CallbackFunction<WebhookEventListResponse>,
        ): void;
        function resend(
            id: string,
            config: http.RequestOptions | CallbackFunction<WebhookEvent>,
            cb?: CallbackFunction<WebhookEvent>,
        ): void;
        function verify(
            headers: any,
            body: WebhookEvent,
            id: string,
            cb: CallbackFunction<WebhookVerifyResponse>,
        ): void;
    }
    namespace webhookEventType {
        function list(
            data: QueryParameters | http.RequestOptions | CallbackFunction<EventTypesResponse>,
            config?: http.RequestOptions | CallbackFunction<EventTypesResponse>,
            cb?: CallbackFunction<EventTypesResponse>,
        ): void;
    }
}

export namespace authorization {
    interface CaptureRequest {
        amount?: Amount | undefined;
        is_final_capture?: boolean | undefined;
        invoice_number?: string | undefined;
    }
    function get(
        id: string,
        config: http.RequestOptions | CallbackFunction<AuthorizationResource>,
        cb?: CallbackFunction<AuthorizationResource>,
    ): void;
    function capture(
        id: string,
        data: CaptureRequest | http.RequestOptions | CallbackFunction<CaptureResource>,
        config?: http.RequestOptions | CallbackFunction<CaptureResource>,
        cb?: CallbackFunction<CaptureResource>,
    ): void;
    function reauthorize(
        id: string,
        data: Amount | http.RequestOptions | CallbackFunction<AuthorizationResource>,
        config?: http.RequestOptions | CallbackFunction<AuthorizationResource>,
        cb?: CallbackFunction<AuthorizationResource>,
    ): void;
    // TODO: Not sure how to type a function named void....
    // function void(data?: any, config?: http.RequestOptions, cb?: CallbackFunction<EventTypesResponse>): void;
}
export namespace capture {
    function get(
        id: string,
        config: http.RequestOptions | CallbackFunction<CaptureResource>,
        cb?: CallbackFunction<CaptureResource>,
    ): void;
    function refund(
        id: string,
        data: RefundRequest | http.RequestOptions | CallbackFunction<RefundResource>,
        config?: http.RequestOptions | CallbackFunction<RefundResource>,
        cb?: CallbackFunction<RefundResource>,
    ): void;
}
export namespace invoice {
    interface EmailRequest {
        subject?: string | undefined;
        note?: string | undefined;
        send_to_merchant?: boolean | undefined;
        send_to_payer?: boolean | undefined;
        cc_emails?: string[] | undefined;
    }
    interface Invoice {
        allow_tip?: boolean | undefined;
        billing_info?: [BillingInfo] | undefined;
        discount?: Cost | undefined;
        shipping_cost?: ShippingCost | undefined;
        readonly id?: string | undefined;
        invoice_date?: string | undefined;
        items?: InvoiceItem[] | undefined;
        merchant_info?: Merchant | undefined;
        readonly metadata?: {
            created_date?: string | undefined;
            created_by?: string | undefined;
            cancelled_date?: string | undefined;
            cancelled_by?: string | undefined;
            last_updated_date?: string | undefined;
            last_updated_by?: string | undefined;
            first_sent_date?: string | undefined;
            last_sent_date?: string | undefined;
            last_sent_by?: string | undefined;
            payer_view_url?: string | undefined;
        } | undefined;
        note?: string | undefined;
        number?: string | undefined;
        payment_term?: PaymentTerm | undefined;
        reference?: string | undefined;
        shipping_info?: {
            address: Address;
            business_name?: string | undefined;
            first_name: string;
            last_name: string;
        } | undefined;
        phone?: Phone | undefined;
        readonly status?: string | undefined;
        tax_calculated_after_discount?: boolean | undefined;
        tax_inclusive?: boolean | undefined;
        template_id?: string | undefined;
        readonly total_amount?: Currency | undefined;
        readonly uri?: string | undefined;
        cc_info?: Participant[] | undefined;
        custom?: CustomAmount | undefined;
        allow_partial_payment?: boolean | undefined;
        minimum_amount_due?: Currency | undefined;
        terms?: string | undefined;
        merchant_memo?: string | undefined;
        logo_url?: string | undefined;
        readonly payments?: PaymentDetail[] | undefined;
        readonly refunds?: Detail[] | undefined;
        readonly payment_summary?: {
            paypal: Currency;
            other: Currency;
        } | undefined;
        readonly refunded_amount?: {
            paypal: Currency;
            other: Currency;
        } | undefined;
        readonly paid_amount?: {
            paypal: Currency;
            other: Currency;
        } | undefined;
        attachments?: FileAttachment[] | undefined;
        readonly links?: Link[] | undefined;
    }
    interface InvoiceResponse extends Invoice, Response {}
    interface FileAttachment {
        name: string;
        url: string;
    }
    interface BillingInfo extends Person {
        email?: string | undefined;
        language?: string | undefined;
        notification_channel?: string | undefined;
        additional_info?: string | undefined;
    }
    interface InvoiceItem {
        name: string;
        description?: string | undefined;
        quantity: number;
        unit_price: Currency;
        tax?: Tax | undefined;
        date?: string | undefined;
        discount?: Cost | undefined;
        unit_of_measure?: string | undefined;
    }
    interface CustomAmount {
        label: string;
        amount: Currency;
    }
    interface ShippingCost {
        amount?: Currency | undefined;
        tax?: Tax | undefined;
    }
    interface Tax extends Cost {
        id?: string | undefined;
        name?: string | undefined;
    }
    interface Cost {
        percent?: number | undefined;
        amount?: Currency | undefined;
    }
    interface PaymentTerm {
        term_type?: string | undefined;
        due_date?: string | undefined;
    }
    interface Person {
        email?: string | undefined;
        first_name?: string | undefined;
        last_name?: string | undefined;
        business_name?: string | undefined;
        phone?: Phone | undefined;
        website?: string | undefined;
        address?: Address | undefined;
    }
    interface Merchant extends Person {
        tax_id?: string | undefined;
        fax?: Phone | undefined;
        additional_info_label?: string | undefined;
        additional_info?: string | undefined;
    }
    interface Participant extends Person {
        email: string;
        fax?: Phone | undefined;
        additional_info?: string | undefined;
    }
    interface Detail {
        type: string;
        transaction_id: string;
        date: string;
        note?: string | undefined;
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
        note?: string | undefined;
        amount: Currency;
    }
    interface RefundRequest {
        date: string;
        note?: string | undefined;
        amount: Currency;
    }
    interface SearchRequest {
        email?: string | undefined;
        recipient_first_name?: string | undefined;
        recipient_last_name?: string | undefined;
        recipient_business_name?: string | undefined;
        number?: string | undefined;
        status?: string | undefined;
        lower_total_amount?: Currency | undefined;
        upper_total_amount?: Currency | undefined;
        start_invoice_date?: string | undefined;
        end_invoice_date?: string | undefined;
        start_due_date?: string | undefined;
        end_due_date?: string | undefined;
        start_payment_date?: string | undefined;
        end_payment_date?: string | undefined;
        start_creation_date?: string | undefined;
        end_creation_date?: string | undefined;
        page?: number | undefined;
        page_size?: number | undefined;
        total_count_required?: boolean | undefined;
        archived?: boolean | undefined;
    }
    function cancel(
        id: string,
        data: EmailRequest | http.RequestOptions | CallbackFunction<null>,
        config?: http.RequestOptions | CallbackFunction<null>,
        cb?: CallbackFunction<null>,
    ): void;
    function create(
        data: Invoice,
        config: http.RequestOptions | CallbackFunction<InvoiceResponse>,
        cb?: CallbackFunction<InvoiceResponse>,
    ): void;
    function del(
        id: string,
        config: http.RequestOptions | CallbackFunction<InvoiceResponse>,
        cb?: CallbackFunction<null>,
    ): void;
    function deleteExternalPayment(
        id: string,
        trxid: string,
        config: http.RequestOptions | CallbackFunction<null>,
        cb?: CallbackFunction<null>,
    ): void;
    function deleteExternalRefund(
        id: string,
        trxid: string,
        config: http.RequestOptions | CallbackFunction<null>,
        cb?: CallbackFunction<null>,
    ): void;
    function generateNumber(
        config: http.RequestOptions | CallbackFunction<NumberResponse>,
        cb?: CallbackFunction<NumberResponse>,
    ): void;
    function get(
        id: string,
        config: http.RequestOptions | CallbackFunction<InvoiceResponse>,
        cb?: CallbackFunction<InvoiceResponse>,
    ): void;
    function list(
        data: QueryParameters | http.RequestOptions | CallbackFunction<ListResponse>,
        config?: http.RequestOptions | CallbackFunction<ListResponse>,
        cb?: CallbackFunction<ListResponse>,
    ): void;
    function qrCode(
        id: string,
        height: number,
        width: number,
        config: http.RequestOptions | CallbackFunction<QrResponse>,
        cb?: CallbackFunction<QrResponse>,
    ): void;
    function recordPayment(
        id: string,
        data: PayRequest,
        config: http.RequestOptions | CallbackFunction<null>,
        cb?: CallbackFunction<null>,
    ): void;
    function recordRefund(
        id: string,
        data: RefundRequest,
        config: http.RequestOptions | CallbackFunction<null>,
        cb?: CallbackFunction<null>,
    ): void;
    function remind(
        id: string,
        data: EmailRequest | http.RequestOptions | CallbackFunction<null>,
        config?: http.RequestOptions | CallbackFunction<null>,
        cb?: CallbackFunction<null>,
    ): void;
    function search(
        data: SearchRequest,
        config: http.RequestOptions | CallbackFunction<ListResponse>,
        cb?: CallbackFunction<ListResponse>,
    ): void;
    function send(
        id: string,
        config: http.RequestOptions | CallbackFunction<ListResponse>,
        cb?: CallbackFunction<null>,
    ): void;
    function update(
        id: string,
        data: Invoice,
        config: http.RequestOptions | CallbackFunction<InvoiceResponse>,
        cb?: CallbackFunction<InvoiceResponse>,
    ): void;
}
export namespace refund {
    function get(
        id: string,
        config: http.RequestOptions | CallbackFunction<RefundResource>,
        cb?: CallbackFunction<RefundResource>,
    ): void;
}
export namespace sale {
    function get(
        id: string,
        config: http.RequestOptions | CallbackFunction<PaymentResponse>,
        cb?: CallbackFunction<PaymentResponse>,
    ): void;
    function refund(
        id: string,
        data: RefundRequest | http.RequestOptions | CallbackFunction<RefundResource>,
        config?: http.RequestOptions | CallbackFunction<RefundResource>,
        cb?: CallbackFunction<RefundResource>,
    ): void;
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
