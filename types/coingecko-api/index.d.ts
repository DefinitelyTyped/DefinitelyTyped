// Type definitions for coingecko-api 1.0
// Project: https://github.com/miscavage/CoinGecko-API#readme
// Definitions by: Jan Klimo <https://github.com/janklimo>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/**
 * Coins
 */
interface CoinsAllParams {
    /**
     * Order results by Order
     */
    order?: Order;
    /**
     * Total results per page
     */
    per_page?: number;
    /**
     * Page through results
     */
    page?: number;
    /**
     * Set to false to exclude localized languages in response.
     */
    localization?: boolean;
    /**
     * Include sparkline 7 days data
     */
    sparkline?: boolean;
}

interface CoinsFetchMarketChartRangeParams {
    /**
     * The target currency of market data (usd, eur, jpy, etc.)
     */
    vs_currency: string;
    /**
     * From date in UNIX Timestamp (eg. 1392577232)
     */
    from: number;
    /**
     * To date in UNIX Timestamp (eg. 1422577232)
     */
    to: number;
}

/**
 * Simple
 */
interface SimplePriceParams {
    /**
     * A single id or a list of coin ids to filter if you want specific results. Use coins.list() for a list of coin ids.
     */
    ids: string | string[];
    /**
     * A single id or a list of ids. Use simple.supportedVsCurrencies() for a list of vsCurrency ids.
     */
    vs_currencies: string | string[];
    /**
     * To include 24hr_vol.
     */
    include_24hr_vol?: boolean;
    /**
     * To include last_updated_at of price.
     */
    include_last_updated_at?: boolean;
}

interface Response {
    /**
     * Whether the response status code returned a successful code (>200 && <300).
     */
    success: boolean;
    /**
     * The response status message
     */
    message: string;
    /**
     * The response status code
     */
    code: number;
    /**
     * The body data in JSON format from the request.
     */
    data: any;
}

type Order =
    | "gecko_asc"
    | "gecko_desc"
    | "market_cap_asc"
    | "market_cap_desc"
    | "volume_asc"
    | "volume_desc"
    | "coin_name_asc"
    | "coin_name_desc"
    | "price_asc"
    | "price_desc"
    | "h24_change_asc"
    | "h24_change_desc"
    | "trust_score_desc"
    | "name_asc"
    | "name_desc"
    | "open_interest_btc_asc"
    | "open_interest_btc_desc"
    | "trade_volume_24h_btc_asc"
    | "trade_volume_24h_btc_desc";

declare class CoinGecko {
    /**
     * Check API server status
     */
    ping(): Promise<Response>;

    /**
     * Get cryptocurrency global data
     */
    global(): Promise<Response>;

    coins: {
        /**
         * Get historical market data include price, market cap, and 24h volume within a range of timestamp (granularity auto).
         * Minutely data will be used for duration within 1 day.
         * Hourly data will be used for duration between 1 day and 90 days.
         * Daily data will be used for duration above 90 days.
         * @param coinId - The coin id (can be obtained from coins.list()) eg. bitcoin.
         * @param params - Parameters to pass through to the request.
         */
        fetchMarketChartRange(coinId: string, params: CoinsFetchMarketChartRangeParams): Promise<Response>;

        /**
         * List all coins with data (name, price, market, developer, community, etc) - paginated by 50
         * @param params - Parameters to pass through to the request
         */
        all(params?: CoinsAllParams): Promise<Response>;
    };

    simple: {
        /**
         * Get the current price of any cryptocurrencies in any other supported currencies that you need
         * @param params - Parameters to pass through to the request
         */
        price(params: SimplePriceParams): Promise<Response>;
    };
}

export = CoinGecko;
