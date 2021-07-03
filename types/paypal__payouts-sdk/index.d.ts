// Type definitions for @paypal/payouts-sdk 1.0
// Project: https://github.com/paypal/Payouts-NodeJS-SDK#readme
// Definitions by: Rumon <https://github.com/msrumon>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// Minimum TypeScript Version: 3.7

type RecipientType = 'EMAIL' | 'PHONE' | 'PAYPAL_ID';
type RecipientWallet = 'PAYPAL' | 'VENMO';

interface Currency {
    currency: string;
    value: string;
}
interface LinkDescription {
    href: string;
    rel: string;
    method?: 'CONNECT' | 'DELETE' | 'GET' | 'HEAD' | 'OPTIONS' | 'PATCH' | 'POST' | 'PUT';
}
interface PayoutBatchHeader extends PayoutHeader {
    time_completed?: string;
    time_closed?: string;
    funding_source?: 'BALANCE';
    amount?: Currency;
    fees?: Currency;
}
interface PayoutBatchItems {
    payout_item_id: string;
    transaction_id?: string;
    activity_id?: string;
    transaction_status?:
        | 'BLOCKED'
        | 'FAILED'
        | 'ONHOLD'
        | 'PENDING'
        | 'REFUNDED'
        | 'RETURNED'
        | 'REVERSED'
        | 'SUCCESS'
        | 'UNCLAIMED';
    payout_item_fee?: Currency;
    payout_batch_id: string;
    payout_item: PayoutItemDetail;
    currency_conversion?: PayoutCurrencyConversion;
    time_processed?: string;
    errors?: any;
    links?: LinkDescription[];
}
interface PayoutCurrencyConversion {
    from_amount?: Currency;
    to_amount?: Currency;
    exchange_rate?: string;
}
interface PayoutHeader {
    payout_batch_id: string;
    batch_status: 'CANCELED' | 'DENIED' | 'PENDING' | 'PROCESSING' | 'SUCCESS';
    time_created?: string;
    sender_batch_header: PayoutSenderBatchHeader;
    errors?: any;
}
interface PayoutItem {
    recipient_type?: RecipientType;
    amount: { currency: string; value: string };
    note?: string;
    receiver: string;
    sender_item_id?: string;
    recipient_wallet?: RecipientWallet;
    alternate_notification_method?: {
        phone?: { country_code: string; national_number: string; extension_number?: string };
    };
    notification_language?: string;
}
interface PayoutItemDetail {
    recipient_type?: RecipientType;
    amount: Currency;
    note?: string;
    receiver: string;
    sender_item_id?: string;
    recipient_name?: {
        prefix?: string;
        given_name?: string;
        surname?: string;
        middle_name?: string;
        suffix?: string;
        alternate_full_name?: string;
        full_name?: string;
    };
    recipient_wallet?: RecipientWallet;
}
interface PayoutSenderBatchHeader {
    sender_batch_id?: string;
    recipient_type?: RecipientType;
    email_subject?: string;
    email_message?: string;
}
interface SenderBatchHeader extends PayoutSenderBatchHeader {
    note?: string;
}

interface PaypalHeader {
    Authorization: string;
}
interface CreatePayoutRequestBody {
    sender_batch_header: SenderBatchHeader;
    items: PayoutItem[];
}
interface CreateBatchPayoutResponse {
    batch_header?: PayoutHeader;
    links?: LinkDescription[];
}
interface GetBatchPayoutResponse {
    total_items?: number;
    total_pages?: number;
    batch_header?: PayoutBatchHeader;
    items?: PayoutBatchItems[];
    errors?: any;
    links?: LinkDescription[];
}
interface GetPayoutsItemResponse extends PayoutBatchItems {
    sender_batch_id?: string;
}

interface HttpRequest {
    headers: PaypalHeader;
    body?: { [key: string]: string };
}

interface HttpResponse<R> {
    statusCode: number;
    headers: { [key: string]: string };
    message?: string;
    result?: R;
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
