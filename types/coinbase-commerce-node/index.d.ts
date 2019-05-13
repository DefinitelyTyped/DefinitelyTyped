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
interface Price {
    amount: string;
    currency: CryptoCurrency | FiatCurrency;
}

/**
 * Pricing object.
 */
interface Pricing extends CryptoPricing {
    local: Price;
}

/**
 * Crypto pricing object.
 */
type CryptoPricing = Record<CryptoName, Price>;

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
interface Pagination extends Pick<PaginationRequest, 'order' & 'starting_after' & 'ending_before' & 'limit'> {
    total: number;
    yielded: number;
    previous_url: null | string;
    next_uri: null | string;
    cursor_range: [string, string];
}

/**
 * Create a charge.
 *
 * @link https://commerce.coinbase.com/docs/api/#charge-resource
 */
export interface CreateACharge {

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
    local_price?: FiatCurrency;

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
        network: CryptoCurrency;
        transaction_id: string;
        status: PaymentStatus;
        value: Pricing;
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
    addresses: Record<CryptoName, string>;
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
     * Resource class.
     */
    abstract class ResourceClass<Request, Response> {

        /**
         * Charge constructor.
         */
        public constructor(data: Request);

        /**
         * Save Charge to Coinbase Commerce's servers.
         */
        public save(callback?: Callback<Response>): Promise<Response>;

    }

    /**
     * Resource object
     * All coinbase-commerce-node resources implement the following static methods.
     *
     * @link https://github.com/coinbase/coinbase-commerce-node#documentation
     */
    interface Resource<Request, Resource> {
        /**
         * Create new resource class.
         */
        new(data: Partial<Request>): ResourceClass<Request, Resource> & Request;

        /**
         * Immidiately create a resource.
         */
        create(chargeData: Request, callback?: Callback<Resource>): Promise<Resource>;

        /**
         * List resources.
         */
        list(paginationOptions: Partial<PaginationRequest>, callback?: PaginationCallback<Resource>): Promise<[Resource[], Pagination]>;

        /**
         * Retrieve a resource by ID.
         */
        retrieve(chargeId: string, callback?: Callback<Resource>): Promise<Resource>;

        /**
         * Retrieve all resources.
         */
        all(paginationOptions: Partial<PaginationRequest>, callback?: Callback<Resource[]>): Promise<Resource[]>;
    }

    /**
     * Charge Class
     *
     * @link https://commerce.coinbase.com/docs/api/#charges
     */
    export interface Charge extends Resource<CreateACharge, ChargeResource> {}

}
