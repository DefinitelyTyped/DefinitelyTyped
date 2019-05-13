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
type Callback = (error: any, response: any) => void;

/**
 * Fiat currency.
 */
type FiatCurrency = 'USD' | 'GBP' | 'EUR' | string;

/**
 * Crypto currency.
 */
type CryptoCurrency = 'BTC' | 'ETH'  | 'BCH' | 'LTC';

/**
 * Pricing type.
 */
type PricingType = 'no_price' | 'fixed_price'


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
type CreateAChargeResponse = any;

/**
 * Coinbase-Commerce-Node entry point.
 *
 * @link https://github.com/JorgenVatle/coinbase-commerce-node#usage
 */
export class Client {

    /**
     * Setup client.
     */
    public init(apiKey: string, baseApiUrl?: string, apiVersion?: string, timeout?: number): Options;

}

export module resources {

    /**
     * Charge class extends CreateACharge's properties.
     */
    interface Charge extends CreateACharge {}

    /**
     * Create a charge.
     *
     * @link https://commerce.coinbase.com/docs/api/#create-a-charge
     */
    export class Charge {

        /**
         * Charge constructor.
         */
        public constructor(data: CreateACharge);

        /**
         * Save Charge to Coinbase Commerce's servers.
         */
        public save(callback: Callback): Promise<CreateAChargeResponse>;

        /**
         * Immidiately create a charge.
         */
        public static create(chargeData: CreateACharge, callback: Callback): Promise<CreateAChargeResponse>;

    }

}
