// Type definitions for coingecko-api 1.0
// Project: https://github.com/miscavage/CoinGecko-API#readme
// Definitions by: Jan Klimo <https://github.com/janklimo>
//                 Artem Ilinykh <https://github.com/singlesly>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

type Locale =
    | 'ar'
    | 'de'
    | 'en'
    | 'es'
    | 'fr'
    | 'hu'
    | 'id'
    | 'it'
    | 'ja'
    | 'ko'
    | 'nl'
    | 'pl'
    | 'pt'
    | 'ro'
    | 'ru'
    | 'sv'
    | 'th'
    | 'tr'
    | 'vi'
    | 'zh'
    | 'zh-tw';

type Localization = Record<Locale, string>;

type Currency =
    | 'aed'
    | 'ars'
    | 'aud'
    | 'bch'
    | 'bdt'
    | 'bhd'
    | 'bmd'
    | 'bnb'
    | 'brl'
    | 'btc'
    | 'cad'
    | 'chf'
    | 'clp'
    | 'cny'
    | 'czk'
    | 'dkk'
    | 'eos'
    | 'eth'
    | 'eur'
    | 'gbp'
    | 'hkd'
    | 'huf'
    | 'idr'
    | 'ils'
    | 'inr'
    | 'jpy'
    | 'krw'
    | 'kwd'
    | 'lkr'
    | 'ltc'
    | 'mmk'
    | 'mxn'
    | 'myr'
    | 'ngn'
    | 'nok'
    | 'nzd'
    | 'php'
    | 'pkr'
    | 'pln'
    | 'rub'
    | 'sar'
    | 'sek'
    | 'sgd'
    | 'thb'
    | 'try'
    | 'twd'
    | 'uah'
    | 'usd'
    | 'vef'
    | 'vnd'
    | 'xag'
    | 'xau'
    | 'xdr'
    | 'xlm'
    | 'xrp'
    | 'zar'
    | 'bits'
    | 'link'
    | 'sats';

type Order =
    | 'gecko_asc'
    | 'gecko_desc'
    | 'market_cap_asc'
    | 'market_cap_desc'
    | 'volume_asc'
    | 'volume_desc'
    | 'coin_name_asc'
    | 'coin_name_desc'
    | 'price_asc'
    | 'price_desc'
    | 'h24_change_asc'
    | 'h24_change_desc'
    | 'trust_score_desc'
    | 'name_asc'
    | 'name_desc'
    | 'open_interest_btc_asc'
    | 'open_interest_btc_desc'
    | 'trade_volume_24h_btc_asc'
    | 'trade_volume_24h_btc_desc';

interface Response<T = any> {
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
    data: T;
}

/**
 * Coins
 */
interface CoinsAllParams {
    /**
     * Order results by Order
     */
    // tslint:disable-next-line no-redundant-undefined
    order?: Order | undefined;
    /**
     * Total results per page
     */
    // tslint:disable-next-line no-redundant-undefined
    per_page?: number | undefined;
    /**
     * Page through results
     */
    // tslint:disable-next-line no-redundant-undefined
    page?: number | undefined;
    /**
     * Set to false to exclude localized languages in response.
     */
    // tslint:disable-next-line no-redundant-undefined
    localization?: boolean | undefined;
    /**
     * Include sparkline 7 days data
     */
    // tslint:disable-next-line no-redundant-undefined
    sparkline?: boolean | undefined;
}

interface CoinsFetchMarketChartParams {
    /**
     * The target currency of market data (usd, eur, jpy, etc.)
     */
    vs_currency: string;
    /**
     * Data up to number of days ago (eg. 1, 14, 30, max)
     */
    days: string;
    /**
     * Data interval. Possible value: daily
     */
    interval?: string;
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

interface CoinsFetchHistoryParams {
    /**
     * The date of data snapshot in dd-mm-yyyy eg. 30-12-2017
     */
    date: string;

    /**
     * Set to false to exclude localized languages in response
     * [default: true]
     */
    localization?: boolean;
}

interface CoinsFetchHistoryData {
    id: string;
    symbol: string;
    name: string;
    localization: Localization;
    image: {
        thumb: string;
        small: string;
    };
    market_data: {
        current_price: Record<Currency & string, number>;
        market_cap: Record<Currency & string, number>;
        total_volume: Record<Currency & string, number>;
    };
    community_data: {
        facebook_likes: null | number;
        twitter_followers: number;
        reddit_average_posts_48h: number;
        reddit_average_comments_48h: number;
        reddit_subscribers: number;
        reddit_accounts_active_48h: string;
    };
    developer_data: {
        forks: number;
        stars: number;
        subscribers: number;
        total_issues: number;
        closed_issues: number;
        pull_requests_merged: number;
        pull_request_contributors: number;
        code_additions_deletions_4_weeks: { additions: number; deletions: number };
        commit_count_4_weeks: number;
    };
    public_interest_stats: { alexa_rank: number; bing_matches: null };
}

interface CoinsFetchMarketChart {
    market_caps: number[][];
    prices: number[][];
    total_volumes: number[][];
}

interface CoinsFetchParams {
    /**
     * Set to false to exclude localized languages in response
     * [default: true]
     */
    localization?: boolean;

    /**
     * Set to false to exclude tickers data in response
     * [default: true]
     */
    tickers?: boolean;

    /**
     * Set to false to exclude market_data in response
     * [default: true]
     */
    market_data?: boolean;

    /**
     * Set to false to exclude community_data in response
     * [default: true]
     */
    community_data?: boolean;

    /**
     * Set to false to exclude developer_data in response
     * [default: true]
     */
    developer_data?: boolean;

    /**
     * Set to true to incluse sparkline 7 days in response
     * [default: false]
     */
    sparkline?: boolean;
}

interface CoinsFetchData {
    id: string;
    symbol: string;
    name: string;
    block_time_in_minutes: number;
    hashing_algorithm: string;
    categories: string[];
    localization: object;
    description: object;
    links: object;
    image: {
        thumb: string;
        small: string;
    };
    country_origin: string;
    genesis_date: string;
    sentiment_votes_up_percentage: number;
    sentiment_votes_down_percentage: number;
    market_cap_rank: number;
    coingecko_rank: number;
    coingecko_score: number;
    developer_score: number;
    community_score: number;
    liquidity_score: number;
    public_interest_score: number;
    market_data: {
        current_price: Record<Currency & string, number>;
        market_cap: Record<Currency & string, number>;
        total_volume: Record<Currency & string, number>;
        fully_diluted_valuation: Record<Currency & string, number>;
        total_value_locked: {
            btc: number
            usd: number
        }
        fdv_to_tvl_ratio: number
        mcap_to_tvl_ratio: number
        circulating_supply: number
        total_supply: number
        max_supply: number
    };
    community_data: {
        facebook_likes: null | number;
        twitter_followers: number;
        reddit_average_posts_48h: number;
        reddit_average_comments_48h: number;
        reddit_subscribers: number;
        reddit_accounts_active_48h: string;
    };
    developer_data: {
        forks: number;
        stars: number;
        subscribers: number;
        total_issues: number;
        closed_issues: number;
        pull_requests_merged: number;
        pull_request_contributors: number;
        code_additions_deletions_4_weeks: { additions: number; deletions: number };
        commit_count_4_weeks: number;
    };
    public_interest_stats: { alexa_rank: number; bing_matches: null };
    last_updated: string;
    tickers: CoinsFetchDataTicker[];
}

type TrustScore = 'green' | 'yellow' | 'red';

interface CoinsFetchDataTicker {
    base: string;
    target: string;
    market: {
        name: string;
        identifier: string;
        has_trading_incentive: boolean
    };
    last: number;
    volume: number;
    converted_last: {
        btc: number;
        eth: number;
        usd: number;
    };
    converted_volume: {
        btc: number;
        eth: number;
        usd: number;
    };
    trust_score: TrustScore;
    bid_ask_spread_percentage: number;
    timestamp: Date;
    last_traded_at: Date;
    last_fetch_at: Date;
    is_anomaly: boolean;
    is_stale: boolean;
    trade_url: string | null;
    token_info_url: string | null;
    coin_id: string;
    target_coin_id: string;
}

/**
 * Exchanges
 */
interface ExchangesAllParams {
    /**
     * Total results per page
     * [default: 100]
     */
    // tslint:disable-next-line no-redundant-undefined
    per_page?: number | undefined;
    /**
     * Page through results
     */
    // tslint:disable-next-line no-redundant-undefined
    page?: number | undefined;
}

interface Exchange {
    id: string;
    name: string;
    year_established: number;
    country: string;
    description: string;
    url: string;
    image: string;
    has_trading_incentive: boolean;
    trust_score: number;
    trust_score_rank: number;
    trade_volume_24h_btc: number;
    trade_volume_24h_btc_normalized: number;
}

interface ExchangesFetchData extends Exchange {
    facebook_url: string;
    reddit_url: string;
    telegram_url: string;
    slack_url: string;
    other_url_1: string;
    other_url_2: string;
    twitter_handle: string;
    centralized: boolean;
    public_notice: string;
    alert_notice: string;
    tickers: [];
    status_updates: [];
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
    // tslint:disable-next-line no-redundant-undefined
    include_24hr_vol?: boolean | undefined;
    /**
     * To include 24hr_change of price.
     */
    // tslint:disable-next-line no-redundant-undefined
    include_24hr_change?: boolean | undefined;
    /**
     * To include last_updated_at of price.
     */
    // tslint:disable-next-line no-redundant-undefined
    include_last_updated_at?: boolean | undefined;
    /**
     * To include market_cap, default: false.
     */
    // tslint:disable-next-line no-redundant-undefined
    include_market_cap?: boolean | undefined;
}

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
         * Get historical market data include price, market cap, and 24h volume (granularity auto).
         * @param coinId - The coin id (can be obtained from coins.list()) eg. bitcoin.
         * @param params - Parameters to pass through to the request.
         */
        fetchMarketChart(coinId: string, params: CoinsFetchMarketChartParams): Promise<Response<CoinsFetchMarketChart>>;

        /**
         * List all coins with data (name, price, market, developer, community, etc) - paginated by 50
         * @param params - Parameters to pass through to the request
         */
        all(params?: CoinsAllParams): Promise<Response>;

        /**
         * Get historical data (name, price, market, stats) at a given date for a coin
         * @param coinId - (Required) The coin id (can be obtained from coins.all()) eg. bitcoin
         * @param params - Parameters to pass through to the request
         */
        fetchHistory(coinId: string, params: CoinsFetchHistoryParams): Promise<Response<CoinsFetchHistoryData>>;

        /**
         * Get current data (name, price, market, … including exchange tickers) for a coin.
         * @param coinId - (Required) The coin id (can be obtained from coins.all()) eg. bitcoin
         * @param params - Parameters to pass through to the request
         */
        fetch(coinId: string, params: CoinsFetchParams): Promise<Response<CoinsFetchData>>;
    };

    simple: {
        /**
         * Get the current price of any cryptocurrencies in any other supported currencies that you need
         * @param params - Parameters to pass through to the request
         */
        price(params: SimplePriceParams): Promise<Response>;
    };

    exchanges: {
        /**
         * List all exchanges
         * @param params - Parameters to pass through to the request
         */
        all(params?: ExchangesAllParams): Promise<Response<Exchange[]>>;

        /**
         * Get exchange volume in BTC and tickers
         * @param exchangeId - (Required) The exchange id (can be obtained from exchanges.all()) eg. ripio
         */
        fetch(exchangeId: string): Promise<Response<ExchangesFetchData>>;
    };
}

export = CoinGecko;
