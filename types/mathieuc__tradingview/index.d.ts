export type AnyFunction = (value: number) => void;

/** Market symbol (like: 'BTCEUR' or 'KRAKEN:BTCEUR') */
export type MarketSymbol = string;

/** Timezone for chart operations */
export type Timezone =
    | "Etc/UTC"
    | "exchange"
    | "Pacific/Honolulu"
    | "America/Juneau"
    | "America/Los_Angeles"
    | "America/Phoenix"
    | "America/Vancouver"
    | "US/Mountain"
    | "America/El_Salvador"
    | "America/Bogota"
    | "America/Chicago"
    | "America/Lima"
    | "America/Mexico_City"
    | "America/Caracas"
    | "America/New_York"
    | "America/Toronto"
    | "America/Argentina/Buenos_Aires"
    | "America/Santiago"
    | "America/Sao_Paulo"
    | "Atlantic/Reykjavik"
    | "Europe/Dublin"
    | "Africa/Lagos"
    | "Europe/Lisbon"
    | "Europe/London"
    | "Europe/Amsterdam"
    | "Europe/Belgrade"
    | "Europe/Berlin"
    | "Europe/Brussels"
    | "Europe/Copenhagen"
    | "Africa/Johannesburg"
    | "Africa/Cairo"
    | "Europe/Luxembourg"
    | "Europe/Madrid"
    | "Europe/Malta"
    | "Europe/Oslo"
    | "Europe/Paris"
    | "Europe/Rome"
    | "Europe/Stockholm"
    | "Europe/Warsaw"
    | "Europe/Zurich"
    | "Europe/Athens"
    | "Asia/Bahrain"
    | "Europe/Helsinki"
    | "Europe/Istanbul"
    | "Asia/Jerusalem"
    | "Asia/Kuwait"
    | "Europe/Moscow"
    | "Asia/Qatar"
    | "Europe/Riga"
    | "Asia/Riyadh"
    | "Europe/Tallinn"
    | "Europe/Vilnius"
    | "Asia/Tehran"
    | "Asia/Dubai"
    | "Asia/Muscat"
    | "Asia/Ashkhabad"
    | "Asia/Kolkata"
    | "Asia/Almaty"
    | "Asia/Bangkok"
    | "Asia/Jakarta"
    | "Asia/Ho_Chi_Minh"
    | "Asia/Chongqing"
    | "Asia/Hong_Kong"
    | "Australia/Perth"
    | "Asia/Shanghai"
    | "Asia/Singapore"
    | "Asia/Taipei"
    | "Asia/Seoul"
    | "Asia/Tokyo"
    | "Australia/Brisbane"
    | "Australia/Adelaide"
    | "Australia/Sydney"
    | "Pacific/Norfolk"
    | "Pacific/Auckland"
    | "Pacific/Fakaofo"
    | "Pacific/Chatham";

/** Time frame for chart data */
export type TimeFrame =
    | "1"
    | "3"
    | "5"
    | "15"
    | "30"
    | "45"
    | "60"
    | "120"
    | "180"
    | "240"
    | "1D"
    | "1W"
    | "1M"
    | "D"
    | "W"
    | "M";

/** Market type filter */
export type MarketType = "stock" | "futures" | "forex" | "cfd" | "crypto" | "index" | "economic";

/** Server type for client connection */
export type ServerType = "data" | "prodata" | "widgetdata";

/** Client event types */
export type ClientEvent = "connected" | "disconnected" | "logged" | "ping" | "data" | "error" | "event";

/** Chart event types */
export type ChartEvent = "seriesLoaded" | "symbolLoaded" | "update" | "error";

/** Quote fields for data subscription */
export type QuoteField =
    | "base-currency-logoid"
    | "ch"
    | "chp"
    | "currency-logoid"
    | "provider_id"
    | "currency_code"
    | "current_session"
    | "description"
    | "exchange"
    | "format"
    | "fractional"
    | "is_tradable"
    | "language"
    | "local_description"
    | "logoid"
    | "lp"
    | "lp_time"
    | "minmov"
    | "minmove2"
    | "original_name"
    | "pricescale"
    | "pro_name"
    | "short_name"
    | "type"
    | "update_mode"
    | "volume"
    | "ask"
    | "bid"
    | "fundamentals"
    | "high_price"
    | "low_price"
    | "open_price"
    | "prev_close_price"
    | "rch"
    | "rchp"
    | "rtc"
    | "rtc_time"
    | "status"
    | "industry"
    | "basic_eps_net_income"
    | "beta_1_year"
    | "market_cap_basic"
    | "earnings_per_share_basic_ttm"
    | "price_earnings_ttm"
    | "sector"
    | "dividends_yield"
    | "timezone"
    | "country_code";

/** Built-in indicator types */
export type BuiltInIndicatorType =
    | "Volume@tv-basicstudies-241"
    | "VbPFixed@tv-basicstudies-241"
    | "VbPFixed@tv-basicstudies-241!"
    | "VbPFixed@tv-volumebyprice-53!"
    | "VbPSessions@tv-volumebyprice-53"
    | "VbPSessionsRough@tv-volumebyprice-53!"
    | "VbPSessionsDetailed@tv-volumebyprice-53!"
    | "VbPVisible@tv-volumebyprice-53";

/** Built-in indicator options */
export type BuiltInIndicatorOption =
    | "rowsLayout"
    | "rows"
    | "volume"
    | "vaVolume"
    | "subscribeRealtime"
    | "first_bar_time"
    | "first_visible_bar_time"
    | "last_bar_time"
    | "last_visible_bar_time"
    | "extendPocRight";

/** Indicator input types */
export type IndicatorInputType = "text" | "source" | "integer" | "float" | "resolution" | "bool" | "color";

/** Indicator types */
export type IndicatorType = "Script@tv-scripting-101!" | "StrategyScript@tv-scripting-101!";

/** Custom chart types */
export type ChartType = "HeikinAshi" | "Renko" | "LineBreak" | "Kagi" | "PointAndFigure" | "Range";

/** Chart input sources */
export type ChartInputSource = "open" | "high" | "low" | "close" | "hl2" | "hlc3" | "ohlc4";

/** Chart input styles */
export type ChartInputStyle = "ATR" | string;

/** Chart input sources for specific types */
export type ChartInputSources = "Close";

// ============================================================================
// INTERFACE DEFINITIONS
// ============================================================================

/** Technical analysis advice value */
export type Advice = number;

/** Technical analysis period data */
export interface Period {
    Other: Advice;
    All: Advice;
    MA: Advice;
}

/** Technical analysis periods for different timeframes */
export interface Periods {
    "1": Period;
    "5": Period;
    "15": Period;
    "60": Period;
    "240": Period;
    "1D": Period;
    "1W": Period;
    "1M": Period;
}

/** Search market result */
export interface SearchMarketResult {
    id: string;
    exchange: string;
    fullExchange: string;
    symbol: string;
    description: string;
    type: string;
    getTA(): Promise<Periods>;
}

/** Search indicator result */
export interface SearchIndicatorResult {
    id: string;
    version: string;
    name: string;
    author: { id: number; username: string };
    image: string;
    source: string | "";
    type: "study" | "strategy";
    access: "open_source" | "closed_source" | "invite_only" | "private" | "other";
    get(): Promise<PineIndicator>;
}

/** Indicator input definition */
export interface IndicatorInput {
    name: string;
    inline: string;
    internalID?: string;
    tooltip?: string;
    type: IndicatorInputType;
    value: string | number | boolean;
    isHidden: boolean;
    isFake: boolean;
    options?: string[];
}

/** Indicator definition */
export interface Indicator {
    pineId: string;
    pineVersion: string;
    description: string;
    shortDescription: string;
    inputs: Record<string, IndicatorInput>;
    plots: Record<string, string>;
    script: string;
}

/** Socket session information */
export interface SocketSession {
    session_id: string;
    timestamp: number;
    timestampMs: number;
    release: string;
    studies_metadata_hash: string;
    protocol: "json" | string;
    javastudies: string;
    auth_scheme_vsn: number;
    via: string;
}

/** Client options */
export interface ClientOptions {
    token?: string;
    signature?: string;
    DEBUG?: boolean;
    server?: ServerType;
    location?: string;
}

/** Session definition */
export interface Session {
    type: "quote" | "chart" | "replay";
    onData: (data: any) => null;
}

/** Session list */
export interface SessionList {
    [key: string]: Session;
}

/** Send packet function */
export type SendPacket = (t: string, p?: string[]) => void;

/** Client bridge interface */
export interface ClientBridge {
    sessions: SessionList;
    send: SendPacket;
}

/** Quote session options */
export interface QuoteSessionOptions {
    fields?: "all" | "price";
    customFields?: QuoteField[];
}

/** Chart session options */
export interface ChartSessionOptions {
    symbol?: MarketSymbol;
    timeframe?: TimeFrame;
    range?: number;
    to?: number;
    from?: number;
    countback?: number;
    adjustment?: "splits" | "dividends" | "earnings" | "none";
    session?: string;
    timezone?: Timezone;
}

/** Chart inputs for custom chart types */
export interface ChartInputs {
    atrLength?: number;
    source?: ChartInputSource;
    style?: ChartInputStyle;
    boxSize?: number;
    reversalAmount?: number;
    sources?: ChartInputSources;
    wicks?: boolean;
    lb?: number;
    oneStepBackBuilding?: boolean;
    phantomBars?: boolean;
    range?: number;
}

/** Price period data */
export interface PricePeriod {
    time: number;
    open: number;
    close: number;
    max: number;
    min: number;
    volume: number;
}

/** Subsession information */
export interface Subsession {
    id: string;
    description: string;
    private: boolean;
    session: string;
    "session-correction": string;
    "session-display": string;
}

/** Market information */
export interface MarketInfos {
    series_id: string;
    base_currency: string;
    base_currency_id: string;
    name: string;
    full_name: string;
    pro_name: string;
    description: string;
    short_description: string;
    exchange: string;
    listed_exchange: string;
    provider_id: string;
    currency_id: string;
    currency_code: string;
    variable_tick_size: string;
    pricescale: number;
    pointvalue: number;
    session: string;
    session_display: string;
    type: string;
    has_intraday: boolean;
    fractional: boolean;
    is_tradable: boolean;
    minmov: number;
    minmove2: number;
    timezone: string;
    is_replayable: boolean;
    has_adjustment: boolean;
    has_extended_hours: boolean;
    bar_source: string;
    bar_transform: string;
    bar_fillgaps: boolean;
    allowed_adjustment: string;
    subsession_id: string;
    pro_perm: string;
    base_name: string[];
    legs: string[];
    subsessions: Subsession[];
    typespecs: any[];
    resolutions: any[];
    aliases: any[];
    alternatives: any[];
}

/** Authorization user information */
export interface AuthorizationUser {
    id: number;
    username: string;
    userpic: string;
    expiration: string;
    created: string;
}

/** Quote session bridge */
export interface QuoteSessionBridge {
    sessionID: string;
    symbolListeners: Record<string, AnyFunction[]>;
    send: SendPacket;
}

/** Chart session bridge */
export interface ChartSessionBridge {
    sessionID: string;
    studyListeners: Record<string, AnyFunction[]>;
    indexes: Record<number, number>;
    send: SendPacket;
}

/** Symbol listeners */
export interface SymbolListeners {
    [key: string]: AnyFunction[];
}

/** Study listeners */
export interface StudyListeners {
    [key: string]: AnyFunction[];
}

// ============================================================================
// CLASS DEFINITIONS
// ============================================================================

/** TradingView Client class */
export class Client {
    /** If the client is logged in */
    readonly isLogged: boolean;

    /** If the client was closed */
    readonly isOpen: boolean;

    /** Session namespace */
    readonly Session: {
        Quote: new(options?: QuoteSessionOptions) => QuoteSession;
        Chart: new() => ChartSession;
    };

    /**
     * Create a new TradingView client
     * @param clientOptions TradingView client options
     */
    constructor(clientOptions?: ClientOptions);

    /**
     * When client is connected
     * @param cb Callback
     */
    onConnected(cb: () => void): void;

    /**
     * When client is disconnected
     * @param cb Callback
     */
    onDisconnected(cb: () => void): void;

    /**
     * When client is logged
     * @param cb Callback
     */
    onLogged(cb: (session: SocketSession) => void): void;

    /**
     * When server is pinging the client
     * @param cb Callback
     */
    onPing(cb: (i: number) => void): void;

    /**
     * When unparsed data is received
     * @param cb Callback
     */
    onData(cb: (...data: any[]) => void): void;

    /**
     * When a client error happens
     * @param cb Callback
     */
    onError(cb: (...data: any[]) => void): void;

    /**
     * When a client event happens
     * @param cb Callback
     */
    onEvent(cb: (...data: any[]) => void): void;

    /**
     * Send a custom packet
     * @param t Packet type
     * @param p Packet data
     */
    send(t: string, p?: string[]): void;

    /**
     * Send all waiting packets
     */
    sendQueue(): void;

    /**
     * Close the websocket connection
     * @returns Promise that resolves when websocket is closed
     */
    end(): Promise<void>;
}

/** Built-in indicator class */
export class BuiltInIndicator {
    /** Indicator script type */
    readonly type: BuiltInIndicatorType;

    /** Indicator script options */
    readonly options: Record<string, any>;

    /**
     * Create a new built-in indicator
     * @param type Built-in indicator raw type
     */
    constructor(type: BuiltInIndicatorType);

    /**
     * Set an option
     * @param key The option you want to change
     * @param value The new value of the property
     * @param FORCE Ignore type and key verifications
     */
    setOption(key: BuiltInIndicatorOption, value: any, FORCE?: boolean): void;
}

/** Pine indicator class */
export class PineIndicator {
    /** Indicator ID */
    readonly pineId: string;

    /** Indicator version */
    readonly pineVersion: string;

    /** Indicator description */
    readonly description: string;

    /** Indicator short description */
    readonly shortDescription: string;

    /** Indicator inputs */
    readonly inputs: Record<string, IndicatorInput>;

    /** Indicator plots */
    readonly plots: Record<string, string>;

    /** Indicator script type */
    readonly type: IndicatorType;

    /** Indicator script */
    readonly script: string;

    /**
     * Create a new Pine indicator
     * @param options Indicator options
     */
    constructor(options: Indicator);

    /**
     * Set the indicator type
     * @param type Indicator type
     */
    setType(type?: IndicatorType): void;

    /**
     * Set an option
     * @param key The key can be ID of the property (`in_{ID}`), the inline name or the internalID
     * @param value The new value of the property
     */
    setOption(key: number | string, value: any): void;
}

/** Pine permission manager class */
export class PinePermManager {
    sessionId: string;
    pineId: string;

    /**
     * Create a Pine permission manager
     * @param sessionId Token from `sessionid` cookie
     * @param signature Signature cookie
     * @param pineId Indicator ID (Like: PUB;XXXXXXXXXXXXXXXXXXXXX)
     */
    constructor(sessionId: string, signature: string, pineId: string);

    /**
     * Get list of authorized users
     * @param limit Fetching limit
     * @param order Fetching order
     * @returns Promise with authorization users
     */
    getUsers(
        limit?: number,
        order?:
            | "user__username"
            | "-user__username"
            | "created"
            | "-created"
            | "expiration,user__username"
            | "-expiration,user__username",
    ): Promise<AuthorizationUser[]>;

    /**
     * Adds an user to the authorized list
     * @param username User's username
     * @param expiration Expiration date
     * @returns Promise with status
     */
    addUser(username: string, expiration?: Date | null): Promise<"ok" | "exists" | null>;

    /**
     * Modify an authorization expiration date
     * @param username User's username
     * @param expiration New expiration date
     * @returns Promise with status
     */
    modifyExpiration(username: string, expiration?: Date | null): Promise<"ok" | null>;

    /**
     * Removes an user to the authorized list
     * @param username User's username
     * @returns Promise with status
     */
    removeUser(username: string): Promise<"ok" | null>;
}

/** Quote session class */
export class QuoteSession {
    /** Market constructor */
    readonly Market: new(symbol: MarketSymbol) => QuoteMarket;

    /**
     * Create a new quote session
     * @param options Quote session options
     */
    constructor(options?: QuoteSessionOptions);

    /**
     * Delete the quote session
     */
    delete(): void;
}

/** Quote market class */
export class QuoteMarket {
    /**
     * Create a new quote market
     * @param symbol Market symbol
     */
    constructor(symbol: MarketSymbol);

    /**
     * Subscribe to market data
     * @param callback Data callback
     */
    onData(callback: (data: any) => void): void;

    /**
     * Unsubscribe from market data
     */
    unsubscribe(): void;
}

/** Chart session class */
export class ChartSession {
    /** List of periods values */
    readonly periods: PricePeriod[];

    /** Current market infos */
    readonly infos: MarketInfos;

    /** Study constructor */
    readonly Study: new(type: BuiltInIndicatorType | PineIndicator, options?: any) => Study;

    /**
     * Create a new chart session
     */
    constructor();

    /**
     * Set series parameters
     * @param timeframe Time frame
     * @param range Range
     * @param reference Reference
     */
    setSeries(timeframe?: TimeFrame, range?: number, reference?: number | null): void;

    /**
     * Set market symbol
     * @param symbol Market symbol
     * @param options Chart session options
     */
    setMarket(symbol: MarketSymbol, options?: ChartSessionOptions): void;

    /**
     * Set timezone
     * @param timezone Timezone
     */
    setTimezone(timezone: Timezone): void;

    /**
     * Fetch more data
     * @param number Number of bars
     */
    fetchMore(number?: number): void;

    /**
     * Replay step
     * @param number Step number
     */
    replayStep(number?: number): void;

    /**
     * Start replay mode
     * @param interval Interval in milliseconds
     */
    replayStart(interval?: number): void;

    /**
     * Stop replay mode
     */
    replayStop(): void;

    /**
     * When symbol is loaded
     * @param cb Callback
     */
    onSymbolLoaded(cb: () => void): void;

    /**
     * When data is updated
     * @param cb Callback
     */
    onUpdate(cb: (periods: PricePeriod[]) => void): void;

    /**
     * When replay is loaded
     * @param cb Callback
     */
    onReplayLoaded(cb: () => void): void;

    /**
     * When replay resolution changes
     * @param cb Callback
     */
    onReplayResolution(cb: (resolution: TimeFrame) => void): void;

    /**
     * When replay ends
     * @param cb Callback
     */
    onReplayEnd(cb: () => void): void;

    /**
     * When replay point changes
     * @param cb Callback
     */
    onReplayPoint(cb: (point: number) => void): void;

    /**
     * When error occurs
     * @param cb Callback
     */
    onError(cb: (...data: any[]) => void): void;

    /**
     * Delete the chart session
     */
    delete(): void;
}

/** Study class */
export class Study {
    /**
     * Create a new study
     * @param type Study type
     * @param options Study options
     */
    constructor(type: BuiltInIndicatorType | PineIndicator, options?: any);

    /**
     * Set study option
     * @param key Option key
     * @param value Option value
     */
    setOption(key: string, value: any): void;

    /**
     * Delete the study
     */
    delete(): void;
}

// ============================================================================
// FUNCTION EXPORTS
// ============================================================================

/**
 * Get technical analysis
 * @param id Full market id (Example: COINBASE:BTCEUR)
 * @returns Promise with technical analysis results
 */
export function getTA(id: string): Promise<Periods>;

/**
 * Find a symbol (deprecated)
 * @param search Keywords
 * @param filter Category filter
 * @returns Promise with search results
 * @deprecated Use searchMarketV3 instead
 */
export function searchMarket(search: string, filter?: MarketType): Promise<SearchMarketResult[]>;

/**
 * Find a symbol
 * @param search Keywords
 * @param filter Category filter
 * @returns Promise with search results
 */
export function searchMarketV3(search: string, filter?: MarketType): Promise<SearchMarketResult[]>;

/**
 * Find an indicator
 * @param search Keywords
 * @returns Promise with search results
 */
export function searchIndicator(search?: string): Promise<SearchIndicatorResult[]>;

/**
 * Get indicator by ID
 * @param id Indicator ID
 * @param version Indicator version
 * @param session Session token
 * @param signature Session signature
 * @returns Promise with indicator
 */
export function getIndicator(
    id: string,
    version?: string,
    session?: string,
    signature?: string,
): Promise<PineIndicator>;

/**
 * Login user
 * @param username Username
 * @param password Password
 * @param remember Remember login
 * @param UA User agent
 * @returns Promise with login result
 */
export function loginUser(
    username: string,
    password: string,
    remember?: boolean,
    UA?: string,
): Promise<{ session: string; signature: string }>;

/**
 * Get user information
 * @param session Session token
 * @param signature Session signature
 * @param location Auth page location
 * @returns Promise with user information
 */
export function getUser(session: string, signature?: string, location?: string): Promise<{ authToken: string }>;

/**
 * Get private indicators
 * @param session Session token
 * @param signature Session signature
 * @returns Promise with private indicators
 */
export function getPrivateIndicators(session: string, signature?: string): Promise<SearchIndicatorResult[]>;

/**
 * Get chart token
 * @param layout Chart layout
 * @param credentials User credentials
 * @returns Promise with chart token
 */
export function getChartToken(layout: string, credentials?: { session?: string; signature?: string }): Promise<string>;

/**
 * Get drawings
 * @param layout Chart layout
 * @param symbol Chart symbol
 * @param credentials User credentials
 * @param chartID Chart ID
 * @returns Promise with drawings
 */
export function getDrawings(
    layout: string,
    symbol?: string,
    credentials?: { session?: string; signature?: string },
    chartID?: string,
): Promise<any[]>;
