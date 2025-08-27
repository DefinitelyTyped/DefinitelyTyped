export type RecipientType = "EMAIL" | "PHONE" | "PAYPAL_ID";
export type RecipientWallet = "PAYPAL" | "VENMO";

export interface Currency {
    currency: string;
    value: string;
}
export interface LinkDescription {
    href: string;
    rel: string;
    method?: "CONNECT" | "DELETE" | "GET" | "HEAD" | "OPTIONS" | "PATCH" | "POST" | "PUT" | undefined;
}
export interface PayoutBatchHeader extends PayoutHeader {
    time_completed?: string | undefined;
    time_closed?: string | undefined;
    funding_source?: "BALANCE" | undefined;
    amount?: Currency | undefined;
    fees?: Currency | undefined;
}
export interface PayoutBatchItems {
    payout_item_id: string;
    transaction_id?: string | undefined;
    activity_id?: string | undefined;
    transaction_status?:
        | "BLOCKED"
        | "FAILED"
        | "ONHOLD"
        | "PENDING"
        | "REFUNDED"
        | "RETURNED"
        | "REVERSED"
        | "SUCCESS"
        | "UNCLAIMED"
        | undefined;
    payout_item_fee?: Currency | undefined;
    payout_batch_id: string;
    payout_item: PayoutItemDetail;
    currency_conversion?: PayoutCurrencyConversion | undefined;
    time_processed?: string | undefined;
    errors?: any;
    links?: LinkDescription[] | undefined;
}
export interface PayoutCurrencyConversion {
    from_amount?: Currency | undefined;
    to_amount?: Currency | undefined;
    exchange_rate?: string | undefined;
}
export interface PayoutHeader {
    payout_batch_id: string;
    batch_status: "CANCELED" | "DENIED" | "PENDING" | "PROCESSING" | "SUCCESS";
    time_created?: string | undefined;
    sender_batch_header: PayoutSenderBatchHeader;
    errors?: any;
}
export interface PayoutItem {
    recipient_type?: RecipientType | undefined;
    amount: { currency: string; value: string };
    note?: string | undefined;
    receiver: string;
    sender_item_id?: string | undefined;
    recipient_wallet?: RecipientWallet | undefined;
    alternate_notification_method?: {
        phone?: { country_code: string; national_number: string; extension_number?: string | undefined } | undefined;
    } | undefined;
    notification_language?: string | undefined;
}
export interface PayoutItemDetail {
    recipient_type?: RecipientType | undefined;
    amount: Currency;
    note?: string | undefined;
    receiver: string;
    sender_item_id?: string | undefined;
    recipient_name?: {
        prefix?: string | undefined;
        given_name?: string | undefined;
        surname?: string | undefined;
        middle_name?: string | undefined;
        suffix?: string | undefined;
        alternate_full_name?: string | undefined;
        full_name?: string | undefined;
    } | undefined;
    recipient_wallet?: RecipientWallet | undefined;
}
export interface PayoutSenderBatchHeader {
    sender_batch_id?: string | undefined;
    recipient_type?: RecipientType | undefined;
    email_subject?: string | undefined;
    email_message?: string | undefined;
}
export interface SenderBatchHeader extends PayoutSenderBatchHeader {
    note?: string | undefined;
}

export interface PaypalHeader {
    Authorization: string;
}
export interface CreatePayoutRequestBody {
    sender_batch_header: SenderBatchHeader;
    items: PayoutItem[];
}
export interface CreateBatchPayoutResponse {
    batch_header?: PayoutHeader | undefined;
    links?: LinkDescription[] | undefined;
}
export interface GetBatchPayoutResponse {
    total_items?: number | undefined;
    total_pages?: number | undefined;
    batch_header?: PayoutBatchHeader | undefined;
    items?: PayoutBatchItems[] | undefined;
    errors?: any;
    links?: LinkDescription[] | undefined;
}
export interface GetPayoutsItemResponse extends PayoutBatchItems {
    sender_batch_id?: string | undefined;
}

export interface HttpRequest {
    headers: PaypalHeader;
    body?: { [key: string]: string } | undefined;
}

export interface HttpResponse<R> {
    statusCode: number;
    headers: { [key: string]: string };
    message?: string | undefined;
    result?: R | undefined;
}

declare namespace core {
    /**
     * Base class for PayPal environments
     */
    class PayPalEnvironment {
        constructor(clientId: string, clientSecret: string, baseUrl: string, webUrl: string);

        // Authorization header string for basic authentication with the current client id and secret
        authorizationString(): string;
    }

    /**
     * Sandbox Environment
     */
    class SandboxEnvironment extends PayPalEnvironment {
        constructor(clientId: string, clientSecret: string);
    }

    /**
     * Live Environment
     */
    class LiveEnvironment extends PayPalEnvironment {
        constructor(clientId: string, clientSecret: string);
    }

    /**
     * PayPal HTTP client
     */
    class PayPalHttpClient {
        constructor(environment: PayPalEnvironment, refreshToken?: string);
        execute(request: payouts.PayoutsPostRequest): Promise<HttpResponse<CreateBatchPayoutResponse>>;
        execute(request: payouts.PayoutsGetRequest): Promise<HttpResponse<GetBatchPayoutResponse>>;
        execute(
            request: payouts.PayoutsItemGetRequest | payouts.PayoutsItemCancelRequest,
        ): Promise<HttpResponse<GetPayoutsItemResponse>>;
    }
}

declare namespace payouts {
    /**
     * Creates a batch payout.
     * In the JSON request body, pass a `sender_batch_header` and an `items` array.
     * The `sender_batch_header` defines how to handle the payout.
     * The `items` array defines the payout items.
     * You can make payouts to one or more recipients.
     */
    class PayoutsPostRequest implements HttpRequest {
        headers: PaypalHeader;
        payPalPartnerAttributionId(payPalPartnerAttributionId: string): this;
        payPalRequestId(payPalRequestId: string): this;
        requestBody(createPayoutRequest: CreatePayoutRequestBody): this;
    }

    /**
     * Shows the latest status of a batch payout.
     * Includes the transaction status and other data for individual payout items.
     */
    class PayoutsGetRequest implements HttpRequest {
        headers: PaypalHeader;
        constructor(payoutBatchId: string);
        fields(fields: string): this;
        page(page: number): this;
        pageSize(pageSize: number): this;
        totalRequired(totalRequired: boolean): this;
    }

    /**
     * Shows details for a payout item, by ID.
     * A `payout_item_id` helps you identify denied payments.
     * If a payment is denied, you can use the `payout_item_id` to identify the payment even if it lacks a `transaction_id`.
     */
    class PayoutsItemGetRequest implements HttpRequest {
        headers: PaypalHeader;
        constructor(payoutItemId: string);
    }

    /**
     * Cancels an unclaimed payout item, by ID.
     * If no one claims the unclaimed item within 30 days, the API automatically returns the funds to the sender.
     * Use this call to cancel the unclaimed item before the automatic 30-day refund.
     * You can cancel payout items with a `transaction_status` of `UNCLAIMED`.
     */
    class PayoutsItemCancelRequest implements HttpRequest {
        headers: PaypalHeader;
        constructor(payoutItemId: string);
    }
}

export { core, payouts };
