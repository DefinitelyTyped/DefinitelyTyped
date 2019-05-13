// Type definitions for coinbase-commerce-node 1.0.0
// Project: https://github.com/coinbase/coinbase-commerce-node
// Definitions by: Jørgen Vatle <https://github.com/JorgenVatle>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/**
 * Client request options.
 */
interface Options {
    url: string;
    body: string;
    method: 'GET' | 'POST' | 'DELETE' | 'PUT',
    timeout: number,
    headers: {
        [key: string]: any,
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'User-Agent': string,
        'X-CC-Api-Key': string,
        'X-CC-Version': string,
    }
}

/**
 * Key-value object.
 */
interface KeyVal {
    [key: string]: any;
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
type CryptoCurrency = 'BTC' | 'ETH' | 'BCH' | 'LTC';

/**
 * Full crypto currency name.
 */
type CryptoName = 'bitcoin' | 'ethereum' | 'bitcoincash' | 'litecoin';

/**
 * Pricing type.
 */
type PricingType = 'no_price' | 'fixed_price'

/**
 * Timestamp string.
 * ISO 8601
 */
type Timestamp = string;

/**
 * Payment status.
 */
type PaymentStatus = 'NEW' | 'PENDING' | 'CONFIRMED' | 'UNRESOLVED' | 'RESOLVED'

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
 * Crypto pricing object.
 */
type CryptoPricing = {
    [key in CryptoName]?: Price<CryptoCurrency>;
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
    order?: 'asc' | 'desc',

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
export interface Pagination extends Pick<PaginationRequest, 'order' | 'starting_after' | 'ending_before' | 'limit'> {
    total: number;
    yielded: number;
    previous_uri: null | string;
    next_uri: null | string;
    cursor_range: [string, string];
}

/**
 * Create a charge.
 *
 * @link https://commerce.coinbase.com/docs/api/#charge-resource
 */
export interface CreateCharge {

    /**
     * Charge name.
     * 100 characters or less.
     */
    name: string,

    /**
     * More detailed description of the charge.
     * 200 characters or less.
     */
    description: string,

    /**
     * Charge pricing type.
     */
    pricing_type: PricingType,

    /**
     * Price in local fiat currency.
     */
    local_price?: Price<FiatCurrency>;

    /**
     * Optional key value pairs for your own use.
     */
    metadata?: KeyVal,

    /**
     * Redirect the user to this URL on completion.
     */
    redirect_url?: string,

    /**
     * Redirect the user to this URL on cancel.
     */
    cancel_url?: string;
}

/**
 * Charge creation response.
 *
 * @link https://commerce.coinbase.com/docs/api/#charge-resource
 */
interface ChargeResource {

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
     * Charge name.
     */
    name: string;

    /**
     * Charge description.
     */
    description: string;

    /**
     * Charge image URL.
     */
    logo_url: string;

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
    confirmed_at: Timestamp;

    /**
     * Associated checkout resource.
     */
    checkout: {
        id: string;
    };

    /**
     * Array of status update objects.
     */
    timeline: {

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
        context?: 'UNDERPAID';

    }[];

    /**
     * Charge metadata provided by you, the developer.
     */
    metadata: KeyVal;

    /**
     * Pricing type.
     */
    pricing_type: PricingType;

    /**
     * Charge price information object.
     */
    pricing: Pricing;

    /**
     * Array of charge payment objects.
     */
    payments: {
        network: CryptoName;
        transaction_id: string;
        status: PaymentStatus;
        value:  {
            local: Price<FiatCurrency>,
            crypto: Price<CryptoCurrency>,
        };
        block: {
            height: number;
            hash: string;
            confirmations_accumulated: number;
            confirmations_required: number;
        }
    }[];

    /**
     * Set of addresses associated with the charge.
     */
    addresses: Partial<Record<CryptoName, string>>;
}

/**
 * Create a checkout.
 *
 * @link https://commerce.coinbase.com/docs/api/#create-a-checkout
 */
export interface CreateCheckout {

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
     * Price in local fiat currency.
     */
    local_price?: Price<FiatCurrency>,

    /**
     * Information to collect from the customer.
     */
    requested_info?: ('email' | 'name')[]

}

/**
 * Update a checkout resource.
 *
 * @link https://commerce.coinbase.com/docs/api/#update-a-checkout
 */
export type UpdateCheckout = Pick<CreateCheckout, 'name' | 'description' | 'local_price' | 'requested_info'>

/**
 * Checkout Resource.
 *
 * @link https://commerce.coinbase.com/docs/api/#checkout-resource
 */
export interface CheckoutResource extends CreateCheckout {

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

}

/**
 * Event Resource.
 *
 * @link
 */
export interface EventResource {

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
    type: 'charge:created' | 'charge:confirmed' | 'charge:failed' | 'charge:delayed' | 'charge:pending';

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
    data: ChargeResource | CheckoutResource;
}

/**
 * Coinbase-Commerce-Node entry point.
 *
 * @link https://github.com/coinbase/coinbase-commerce-node#usage
 */
export class Client {

    /**
     * Setup client.
     */
    public static init(apiKey: string, baseApiUrl?: string, apiVersion?: string, timeout?: number): Options;

}

export module resources {

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
        public constructor(data: Request);

        /**
         * Save the current resource.
         * Creates a new resource if it doesn't already exist in Coinbase Commerce's systems.
         */
        public save(callback?: Callback<this>): Promise<this>;

        /**
         * Delete the current resource.
         */
        public delete(callback?: Callback<this>): Promise<this>;

        /**
         * Save new resource to Coinbase Commerce.
         */
        public insert(callback?: Callback<this>): Promise<this>;

        /**
         * Update the current resource.
         */
        public update(callback?: Callback<this>): Promise<this>;
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
    export class Charge extends Resource<CreateCharge> {

        /**
         * Create a charge.
         */
        public static create(chargeData: CreateCharge, callback?: Callback<Charge>): Promise<Charge>;

        /**
         * List charges.
         */
        public static list(paginationOptions: PaginationRequest, callback?: PaginationCallback<Charge>): Promise<[Charge[], Pagination]>;

        /**
         * Fetch all charges.
         */
        public static all(paginationOptions: PaginationRequest, callback?: Callback<Charge[]>): Promise<Charge[]>

        /**
         * Retrieve a charge by ID.
         */
        public static retrieve(chargeId: ChargeResource['id'], callback?: Callback<Charge>): Promise<Charge>;

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
    export class Checkout extends Resource<CreateCheckout> {

        /**
         * Create a checkout.
         */
        public static create(checkoutData: CreateCheckout, callback?: Callback<Checkout>): Promise<Checkout>;

        /**
         * List checkouts.
         */
        public static list(paginationOptions: PaginationRequest, callback?: PaginationCallback<Checkout>): Promise<[Checkout[], Pagination]>;

        /**
         * Fetch all checkouts.
         */
        public static all(paginationOptions: PaginationRequest, callback?: Callback<Checkout[]>): Promise<Checkout[]>

        /**
         * Retrieve a checkout by ID.
         */
        public static retrieve(checkoutId: CheckoutResource['id'], callback?: Callback<Checkout>): Promise<Checkout>;

        /**
         * Update a checkout by ID.
         */
        public static updateById(checkoutId: CheckoutResource['id'], update: UpdateCheckout, callback?: Callback<Checkout>): Promise<Checkout>

        /**
         * Delete a checkout by ID.
         */
        public static deleteById(checkoutId: CheckoutResource['id'], callback?: Callback<Checkout>): Promise<Checkout>;

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
    export class Event extends Resource<EventResource> {

        /**
         * Retrieve a event by ID.
         */
        public static retrieve(eventId: EventResource['id'], callback?: Callback<Event>): Promise<Event>;

        /**
         * List events.
         */
        public static list(paginationOptions: PaginationRequest, callback?: PaginationCallback<Event>): Promise<[Event[], Pagination]>;

        /**
         * Fetch all events.
         */
        public static all(paginationOptions: PaginationRequest, callback?: Callback<Event[]>): Promise<Event[]>

    }

}
