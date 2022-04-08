// Type definitions for coinbase-commerce-node 1.0
// Project: https://github.com/coinbase/coinbase-commerce-node
// Definitions by: Jørgen Vatle <https://github.com/JorgenVatle>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

/**
 * Client request options.
 */
interface Options {
    url: string;
    body: string;
    method: 'GET' | 'POST' | 'DELETE' | 'PUT';
    timeout: number;
    headers: {
        [key: string]: any;
        'Content-Type': 'application/json';
        'Accept': 'application/json';
        'User-Agent': string;
        'X-CC-Api-Key': string;
        'X-CC-Version': string;
    };
}

/**
 * Omit a property from the given type.
 */
type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;

/**
 * Node callback
 */
type Callback<T> = (error: any, response: T) => void;

/**
 * Pagination callback.
 */
type PaginationCallback<T> = (error: any, response: T[], pagination: Pagination) => void;

/**
 * Fiat currency.
 */
type FiatCurrency = 'USD' | 'GBP' | 'EUR' | string;

/**
 * Crypto currency.
 */
type CryptoCurrency = 'BTC' | 'ETH' | 'BCH' | 'LTC' | 'USDC';

/**
 * Full crypto currency name.
 */
type CryptoName = 'bitcoin' | 'ethereum' | 'bitcoincash' | 'litecoin' | 'usdc';

/**
 * Pricing type.
 */
type PricingType = 'no_price' | 'fixed_price';

/**
 * Timestamp string.
 * ISO 8601
 */
type Timestamp = string;

/**
 * Payment status.
 */
type PaymentStatus = 'NEW' | 'PENDING' | 'COMPLETED' | 'UNRESOLVED' | 'RESOLVED' | 'EXPIRED' | 'CANCELED';

/**
 * Crypto pricing object.
 */
type CryptoPricing = {
    [key in CryptoName]?: Price<CryptoCurrency>;
};

/**
 * Key-value object.
 */
interface KeyVal {
    [key: string]: any;
}

/**
 * Price object.
 */
interface Price<Currency = CryptoCurrency | FiatCurrency> {
    amount: string;
    currency: Currency;
}

/**
 * Pricing object.
 */
interface Pricing extends CryptoPricing {
    local: Price<FiatCurrency>;
}

/**
 * Pagination request.
 *
 * @link https://commerce.coinbase.com/docs/api/#pagination
 */
interface PaginationRequest {
    /**
     * Order of resources in the response.
     *
     * default: desc
     */
    order?: 'asc' | 'desc';

    /**
     * Number of results per call.
     *
     * Accepted values: 0 - 100
     * Default: 25
     */
    limit?: number;

    /**
     * A cursor for use in pagination.
     * This is a resource ID that defines your place in the list.
     */
    starting_after?: string | null;

    /**
     * A cursor for use in pagination.
     * This is a resource ID that defines your place in the list.
     */
    ending_before?: string | null;
}

/**
 * Pagination response.
 *
 * @link https://commerce.coinbase.com/docs/api/#pagination
 */
interface Pagination extends Pick<PaginationRequest, 'order' | 'starting_after' | 'ending_before' | 'limit'> {
    total: number;
    yielded: number;
    previous_uri: null | string;
    next_uri: null | string;
    cursor_range: [string, string];
}

/**
 * No price resource.
 */
interface NoPrice {
    /**
     * Pricing type.
     */
    pricing_type: 'no_price';
}

/**
 * Fixed price resource.
 */
interface FixedPrice {
    /**
     * Pricing type
     */
    pricing_type: 'fixed_price';

    /**
     * Local price in fiat currency.
     */
    local_price: Price<FiatCurrency>;
}

/**
 * Base charge properties.
 */
interface BaseCharge {
    /**
     * Charge name.
     * 100 characters or less.
     */
    name: string;

    /**
     * More detailed description of the charge.
     * 200 characters or less.
     */
    description: string;

    /**
     * Charge pricing type.
     */
    pricing_type: PricingType;

    /**
     * Optional key value pairs for your own use.
     */
    metadata?: KeyVal;

    /**
     * Redirect the user to this URL on completion.
     */
    redirect_url?: string;

    /**
     * Redirect the user to this URL on cancel.
     */
    cancel_url?: string;
}

/**
 * Create a charge.
 *
 * @link https://commerce.coinbase.com/docs/api/#charge-resource
 */
type CreateCharge = BaseCharge & (FixedPrice | NoPrice);

/**
 * Charge creation response.
 *
 * @link https://commerce.coinbase.com/docs/api/#charge-resource
 */
interface ChargeResource extends BaseCharge {
    /**
     * Charge UUID
     */
    id: string;

    /**
     * Resource name.
     */
    resource: 'charge';

    /**
     * User fiendly primary key.
     */
    code: string;

    /**
     * Charge image URL.
     */
    logo_url?: string;

    /**
     * Hosted charge URL.
     */
    hosted_url: string;

    /**
     * Charge creation time.
     */
    created_at: Timestamp;

    /**
     * Charge expiration time.
     */
    expires_at: Timestamp;

    /**
     * Charge confirmation time.
     */
    confirmed_at?: Timestamp;

    /**
     * Associated checkout resource.
     */
    checkout?: {
        id: string;
    };

    /**
     * Array of status update objects.
     */
    timeline: Array<{
        /**
         * Timeline entry timestamp.
         */
        time: Timestamp;

        /**
         * Timeline entry status.
         */
        status: PaymentStatus;

        /**
         * Timeline entry context.
         */
        context?: 'UNDERPAID' | 'OVERPAID' | 'DELAYED' | 'MULTIPLE' | 'MANUAL' | 'OTHER';
    }>;

    /**
     * Charge metadata provided by you, the developer.
     */
    metadata: KeyVal;

    /**
     * Charge price information object.
     */
    pricing: Pricing;

    /**
     * Array of charge payment objects.
     */
    payments: Array<{
        network: CryptoName;
        transaction_id: string;
        status: PaymentStatus;
        value: {
            local: Price<FiatCurrency>;
            crypto: Price<CryptoCurrency>;
        };
        block: {
            height: number;
            hash: string;
            confirmations_accumulated: number;
            confirmations_required: number;
        }
    }>;

    /**
     * Set of addresses associated with the charge.
     */
    addresses: Partial<Record<CryptoName, string>>;
}

/**
 * Base checkout properties.
 */
interface BaseCheckout {
    /**
     * Checkout name.
     * 100 characters or less.
     */
    name: string;

    /**
     * More detailed description.
     * 200 characters or less.
     */
    description: string;

    /**
     * Checkout pricing type.
     */
    pricing_type: PricingType;

    /**
     * Information to collect from the customer.
     */
    requested_info?: Array<'email' | 'name'>;
}

/**
 * Create a checkout.
 *
 * @link https://commerce.coinbase.com/docs/api/#create-a-checkout
 */
type CreateCheckout = BaseCheckout & (FixedPrice | NoPrice);

/**
 * Update a checkout resource.
 *
 * @link https://commerce.coinbase.com/docs/api/#update-a-checkout
 */
type UpdateCheckout = Omit<CreateCheckout, 'pricing_type'>;

/**
 * Checkout Resource.
 *
 * @link https://commerce.coinbase.com/docs/api/#checkout-resource
 */
interface CheckoutResource extends BaseCheckout {
    /**
     * Checkout UUID.
     */
    id: string;

    /**
     * Resource name.
     */
    resource: 'checkout';

    /**
     * Checkout image URL.
     */
    logo_url?: string;

    /**
     * Price in local fiat currency.
     */
    local_price?: Price<FiatCurrency>;
}

/**
 * Event Resource.
 *
 * @link
 */
interface EventResource<T = ChargeResource | CheckoutResource> {
    /**
     * Event UUID.
     */
    id: string;

    /**
     * Resource name.
     */
    resource: 'event';

    /**
     * Event type.
     */
    type: 'charge:created' | 'charge:confirmed' | 'charge:failed' | 'charge:delayed' | 'charge:pending' | 'charge:resolved';

    /**
     * Event creation time.
     */
    created_at: Timestamp;

    /**
     * API version of the `data` payload.
     */
    api_version: string;

    /**
     * Event Payload.
     * Resource of the associated object at the time of the event.
     */
    data: T;
}

/**
 * Coinbase-Commerce-Node entry point.
 *
 * @link https://github.com/coinbase/coinbase-commerce-node#usage
 */
export namespace Client {
    /**
     * Setup client.
     */
    function init(apiKey: string, baseApiUrl?: string, apiVersion?: string, timeout?: number): Options;
}

export namespace resources {
    /**
     * Resource object
     * All coinbase-commerce-node resources implement the following static methods.
     *
     * @link https://github.com/coinbase/coinbase-commerce-node#documentation
     */
    abstract class Resource<Request> {
        /**
         * Charge constructor.
         */
        constructor(data: Request);

        /**
         * Save the current resource.
         * Creates a new resource if it doesn't already exist in Coinbase Commerce's systems.
         */
        save(callback?: Callback<this>): Promise<this>;

        /**
         * Delete the current resource.
         */
        delete(callback?: Callback<this>): Promise<this>;

        /**
         * Save new resource to Coinbase Commerce.
         */
        insert(callback?: Callback<this>): Promise<this>;

        /**
         * Update the current resource.
         */
        update(callback?: Callback<this>): Promise<this>;
    }

    /**
     * Merge CreateACharge with Charge class.
     */
    interface Charge extends ChargeResource {}

    /**
     * Charge Class
     *
     * @link https://github.com/coinbase/coinbase-commerce-node#charges
     */
    class Charge extends Resource<CreateCharge> {
        /**
         * Create a charge.
         */
        static create(chargeData: CreateCharge, callback?: Callback<Charge>): Promise<Charge>;

        /**
         * List charges.
         */
        static list(paginationOptions: PaginationRequest, callback?: PaginationCallback<Charge>): Promise<[Charge[], Pagination]>;

        /**
         * Fetch all charges.
         */
        static all(paginationOptions: PaginationRequest, callback?: Callback<Charge[]>): Promise<Charge[]>;

        /**
         * Retrieve a charge by ID.
         */
        static retrieve(chargeId: ChargeResource['id'], callback?: Callback<Charge>): Promise<Charge>;
    }

    /**
     * Merge CheckoutResource with Checkout class.
     */
    interface Checkout extends CheckoutResource {}

    /**
     * Checkout class.
     *
     * @link https://github.com/coinbase/coinbase-commerce-node#checkouts
     */
    class Checkout extends Resource<CreateCheckout> {
        /**
         * Create a checkout.
         */
        static create(checkoutData: CreateCheckout, callback?: Callback<Checkout>): Promise<Checkout>;

        /**
         * List checkouts.
         */
        static list(paginationOptions: PaginationRequest, callback?: PaginationCallback<Checkout>): Promise<[Checkout[], Pagination]>;

        /**
         * Fetch all checkouts.
         */
        static all(paginationOptions: PaginationRequest, callback?: Callback<Checkout[]>): Promise<Checkout[]>;

        /**
         * Retrieve a checkout by ID.
         */
        static retrieve(checkoutId: CheckoutResource['id'], callback?: Callback<Checkout>): Promise<Checkout>;

        /**
         * Update a checkout by ID.
         */
        static updateById(checkoutId: CheckoutResource['id'], update: UpdateCheckout, callback?: Callback<Checkout>): Promise<Checkout>;

        /**
         * Delete a checkout by ID.
         */
        static deleteById(checkoutId: CheckoutResource['id'], callback?: Callback<Checkout>): Promise<Checkout>;
    }

    /**
     * Merge EventResource with Event class.
     */
    interface Event extends EventResource {}

    /**
     * Event class.
     *
     * @link https://github.com/coinbase/coinbase-commerce-node#events
     */
    class Event extends Resource<EventResource> {
        /**
         * Retrieve a event by ID.
         */
        static retrieve(eventId: EventResource['id'], callback?: Callback<Event>): Promise<Event>;

        /**
         * List events.
         */
        static list(paginationOptions: PaginationRequest, callback?: PaginationCallback<Event>): Promise<[Event[], Pagination]>;

        /**
         * Fetch all events.
         */
        static all(paginationOptions: PaginationRequest, callback?: Callback<Event[]>): Promise<Event[]>;
    }

    export {
        Event,
        Charge,
        Checkout,
    };
}

/**
 * Webhook class.
 *
 * @link https://github.com/coinbase/coinbase-commerce-node#webhooks
 */
declare namespace Webhook {
    /**
     * Verify a signature header.
     *
     * @link https://github.com/coinbase/coinbase-commerce-node#verify-signature-header
     */
    function verifySigHeader(rawBody: string, signature: string, sharedSecret: string): void;

    /**
     * Verify event body.
     *
     * @link https://github.com/coinbase/coinbase-commerce-node/blob/v1.0.4/lib/Webhook.js#L10
     */
    function verifyEventBody(rawBody: string, signature: string, sharedSecret: string): resources.Event;
}

export {
    Webhook,
    Pagination,
    ChargeResource,
    CheckoutResource,
    CreateCheckout,
    EventResource,
    CreateCharge,
};
