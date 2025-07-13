declare global {
    const YaGames: {
        init<TGlobalSigned extends boolean = false>(opts?: { signed?: TGlobalSigned }): Promise<SDK<TGlobalSigned>>;
    };
}

export interface SDK<TGlobalSigned extends boolean = false> {
    EVENTS: {
        EXIT: "EXIT";
        HISTORY_BACK: "HISTORY_BACK";
        ACCOUNT_SELECTION_DIALOG_OPENED: "ACCOUNT_SELECTION_DIALOG_OPENED";
        ACCOUNT_SELECTION_DIALOG_CLOSED: "ACCOUNT_SELECTION_DIALOG_CLOSED";
    };
    adv: {
        getBannerAdvStatus(): Promise<{
            reason?: StickyAdvError;
            stickyAdvIsShowing: boolean;
        }>;
        hideBannerAdv(): Promise<{ stickyAdvIsShowing: boolean }>;
        showBannerAdv(): Promise<{ reason?: StickyAdvError }>;
        showFullscreenAdv(opts?: {
            callbacks?: {
                onClose?: (wasShown: boolean) => void;
                onError?: (error: string) => void;
                onOffline?: () => void;
                onOpen?: () => void;
            };
        }): void;
        showRewardedVideo(opts?: {
            callbacks?: {
                onClose?: () => void;
                onError?: (error: string) => void;
                onOpen?: () => void;
                onRewarded?: () => void;
            };
        }): void;
    };
    auth: {
        openAuthDialog(): Promise<void>;
    };
    clipboard: {
        writeText(text: string): void;
    };
    deviceInfo: DeviceInfo;
    environment: Environment;
    features: {
        GameplayAPI: {
            start(): void;
            stop(): void;
        };
        LoadingAPI: {
            ready(): void;
        };
        GamesAPI: {
            getAllGames(): Promise<{ games: Game[]; developerURL: string }>;
            getGameByID(id: number): Promise<{ game?: Game; isAvailable: boolean }>;
        };
    };
    feedback: {
        canReview(): Promise<{
            reason?: FeedbackError;
            value: boolean;
        }>;
        requestReview(): Promise<{ feedbackSent: boolean }>;
    };
    leaderboards: YLeaderboards;
    multiplayer: Multiplayer;
    payments: Payments<TGlobalSigned>;
    screen: {
        fullscreen: {
            STATUS_OFF: "off";
            STATUS_ON: "on";
            status: "off" | "on";
            exit(): Promise<void>;
            request(): Promise<void>;
        };
    };
    shortcut: {
        canShowPrompt(): Promise<{ canShow: boolean }>;
        showPrompt(): Promise<{ outcome: "accepted" | "rejected" }>;
    };
    dispatchEvent(eventName: SdkEventName, detail?: object): Promise<unknown>;
    getFlags(params?: GetFlagsParams): Promise<Record<string, string>>;
    /** @deprecated - use ysdk.leaderboards */
    getLeaderboards(): Promise<Leaderboards>;
    getPayments<TSigned extends boolean = false>(opts?: { signed?: TSigned }): Promise<Payments<TSigned>>;
    getPlayer<TSigned extends boolean = false>(opts?: {
        signed?: TSigned;
    }): Promise<TSigned extends true ? Signed<Player> : Player>;
    getStorage(): Promise<SafeStorage>;
    isAvailableMethod(methodName: string): Promise<boolean>;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any -- SDK event args can be of any type
    off(event: "game_api_pause" | "game_api_resume", observer: (...args: any) => any): void;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any -- SDK event args can be of any type
    on(event: "game_api_pause" | "game_api_resume", observer: (...args: any) => any): () => void;
    onEvent(eventName: SdkEventName, listener: () => void): () => void;
    serverTime(): number;
}

export interface ClientFeature {
    name: string;
    value: string;
}

export interface GetFlagsParams {
    clientFeatures?: ClientFeature[];
    defaultFlags?: Record<string, string>;
}

export interface Game {
    appID: string;
    title: string;
    url: string;
    coverURL: string;
    iconURL: string;
}

/** When an object is passed through signature, it is not returned as itself,
 * but instead the signature field contains an encrypted string with object fields that can be decrypted on your server */
export interface Signed<T> {
    signature: string;
}

export interface Environment {
    get app(): {
        id: string;
    };
    get browser(): {
        lang: string;
    };
    get i18n(): {
        lang: ISO_639_1;
        tld: TopLevelDomain;
    };
    get payload(): null | string;
}

export enum DeviceType {
    DESKTOP = "desktop",
    MOBILE = "mobile",
    TABLET = "tablet",
    TV = "tv",
}

export interface DeviceInfo {
    isDesktop(): boolean;
    isMobile(): boolean;
    isTV(): boolean;
    isTablet(): boolean;
    get type(): DeviceType;
}

export type SafeStorage = typeof window.localStorage;

export interface Player {
    getData<T extends string>(keys?: readonly T[]): Promise<Partial<Record<T, Serializable>>>;
    getIDsPerGame(): Promise<Array<{ appID: number; userID: string }>>;
    /** @deprecated - use isAuthorized */
    getMode(): "" | "lite";
    getName(): string;
    getPayingStatus(): "not_paying" | "partially_paying" | "paying" | "unknown";
    getPhoto(size: "large" | "medium" | "small"): string;
    getStats<T extends string>(keys?: readonly T[]): Promise<Partial<Record<T, number>>>;
    getUniqueID(): string;
    incrementStats<T extends Record<number | string, number>>(stats: T): Promise<IncrementedStats<T>>;
    isAuthorized(): boolean;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any -- SDK data can be of any type
    setData(data: any, flush?: boolean): Promise<void>;
    setStats(stats: Record<number | string, number>): Promise<void>;
}

export interface IncrementedStats<TStats extends Record<string, number>> {
    newKeys: string[];
    stats: Record<keyof TStats, number> & Record<number | string, number>;
}

export interface Purchase {
    developerPayload?: string;
    productID: string;
    purchaseToken: string;
}

export interface Product {
    description: string;
    id: string;
    imageURI: string;
    price: string;
    priceCurrencyCode: string;
    priceValue: string;
    title: string;
    getPriceCurrencyImage(size: "medium" | "small" | "svg"): string;
}

export interface Payments<TSigned extends boolean = false> {
    consumePurchase(token: string): Promise<void>;
    getCatalog(): Promise<Product[]>;
    getPurchases(): Promise<TSigned extends true ? Signed<Purchase[]> : Purchase[]>;
    purchase(opts?: {
        developerPayload?: string;
        id: string;
    }): Promise<TSigned extends true ? Signed<Purchase> : Purchase>;
}

export interface GetLeaderboardEntriesOpts {
    includeUser?: boolean;
    quantityAround?: number;
    quantityTop?: number;
}

export interface Leaderboards {
    getLeaderboardDescription(leaderboardName: string): Promise<LeaderboardDescription>;
    getLeaderboardEntries(leaderboardName: string, opts?: GetLeaderboardEntriesOpts): Promise<LeaderboardEntriesData>;
    /**
     * @throws {{code: string}}
     */
    getLeaderboardPlayerEntry(leaderboardName: string): Promise<LeaderboardEntry>;
    setLeaderboardScore(leaderboardName: string, score: number, extraData?: string): Promise<void>;
}

export interface YLeaderboards {
    getDescription(leaderboardName: string): Promise<LeaderboardDescription>;
    getEntries(leaderboardName: string, opts?: GetLeaderboardEntriesOpts): Promise<LeaderboardEntriesData>;
    /**
     * @throws {{code: string}}
     */
    getPlayerEntry(leaderboardName: string): Promise<LeaderboardEntry>;
    setScore(leaderboardName: string, score: number, extraData?: string): Promise<void>;
}

export interface LeaderboardEntriesData {
    entries: LeaderboardEntry[];
    leaderboard: LeaderboardDescription;
    ranges: Array<{ size: number; start: number }>;
    userRank: number;
}

export interface LeaderboardEntry {
    extraData?: string;
    formattedScore: string;
    player: {
        lang: string;
        publicName: string;
        scopePermissions: {
            avatar: string;
            public_name: string;
        };
        uniqueID: string;
        getAvatarSrc(size: "large" | "medium" | "small"): string;
        getAvatarSrcSet(size: "large" | "medium" | "small"): string;
    };
    rank: number;
    score: number;
}

export interface LeaderboardDescription {
    appID: string;
    default: boolean;
    description: {
        invert_sort_order: boolean;
        score_format: {
            options: {
                decimal_offset: number;
            };
        };
        type: "numberic" | "time";
    };
    name: string;
    title: Record<string, string>;
}

export type FeedbackError = "GAME_RATED" | "NO_AUTH" | "REVIEW_ALREADY_REQUESTED" | "UNKNOWN";

export type StickyAdvError = "ADV_IS_NOT_CONNECTED" | "UNKNOWN";

export type SdkEventName = "EXIT" | "HISTORY_BACK";

export type ISO_639_1 =
    | "af"
    | "am"
    | "ar"
    | "az"
    | "be"
    | "bg"
    | "bn"
    | "ca"
    | "cs"
    | "da"
    | "de"
    | "el"
    | "en"
    | "es"
    | "et"
    | "eu"
    | "fa"
    | "fi"
    | "fr"
    | "gl"
    | "he"
    | "hi"
    | "hr"
    | "hu"
    | "hy"
    | "id"
    | "is"
    | "it"
    | "ja"
    | "ka"
    | "kk"
    | "km"
    | "kn"
    | "ko"
    | "ky"
    | "lo"
    | "lt"
    | "lv"
    | "mk"
    | "ml"
    | "mn"
    | "mr"
    | "ms"
    | "my"
    | "ne"
    | "nl"
    | "no"
    | "pl"
    | "pt"
    | "ro"
    | "ru"
    | "si"
    | "sk"
    | "sl"
    | "sr"
    | "sv"
    | "sw"
    | "ta"
    | "te"
    | "tg"
    | "th"
    | "tk"
    | "tl"
    | "tr"
    | "uk"
    | "ur"
    | "uz"
    | "vi"
    | "zh"
    | "zu";

export type TopLevelDomain =
    | "az"
    | "by"
    | "co.il"
    | "com"
    | "com.am"
    | "com.ge"
    | "com.tr"
    | "ee"
    | "fr"
    | "kg"
    | "kz"
    | "lt"
    | "lv"
    | "md"
    | "ru"
    | "tj"
    | "tm"
    | "ua"
    | "uz";

export type Serializable = { [key: string]: Serializable } | Serializable[] | boolean | null | number | string;

export interface Multiplayer {
    sessions: MultiplayerSessions;
}

export interface MultiplayerSessions {
    /**
     * Collect transactions of the current game session
     * @param payload - fragment of information that allows to restore the game process
     */
    commit(payload: MultiplayerSessionsCommitPayload): void;

    /**
     * Sends a message about initialization to the parent frame. Returns an array of data about loaded sessions
     * @param options - initialization parameters
     * @param options.count - how many opponents sessions to load.
     * In the value 0, the loading of opponent sessions does not occur, only the collection of data in the current game is available.
     * @param options.isEventBased - flag for managing the process through the sdk event bus.
     * In the value true, the opponent's transactions come in messages according to the time of their registration from the start of the game
     * with the correction of options.maxOpponentTurnTime. At the end, the message multiplayer-sessions-finish comes.
     * In the value false, the developer himself organizes competitions, using the data that came from the method.
     * @param options.meta - parameters meta1-3 (ranges max-min) for sessions selection
     * @param options.maxOpponentTurnTime - opponent turn time limit
     * @returns array of data about loaded sessions
     */
    init(options?: MultiplayerSessionsInitOptions): Promise<MultiplayerSessionsOpponent[]>;

    /**
     * Called when the game is finished
     * @param meta - numerical values of parameters meta1-3 for the saved session
     */
    push(meta: MultiplayerSessionsMeta): Promise<CallbackBaseMessageData>;
}

export interface CallbackBaseMessageData {
    data?: unknown;
    error?: {
        message: string;
    };
    status: "error" | "ok";
}

export interface MultiplayerSessionsCommitPayload {
    /** Transaction data */
    data: Record<string, unknown>;
    /** Transaction time */
    time: number;
}

export interface MultiplayerSessionsInitOptions {
    /** How many opponents sessions to load */
    count?: number;
    /** Is using event-based process */
    isEventBased?: boolean;
    /** Opponent turn time limit */
    maxOpponentTurnTime?: number;
    /** Parameters meta1-3 (ranges max-min) for sessions selection */
    meta?: MultiplayerSessionsMetaRanges;
}

export interface MultiplayerSessionsMeta {
    meta1: number;
    meta2: number;
    meta3: number;
}

export interface MultiplayerSessionsMetaRanges {
    meta1: {
        max: number;
        min: number;
    };
    meta2: {
        max: number;
        min: number;
    };
    meta3: {
        max: number;
        min: number;
    };
}

export interface MultiplayerSessionsOpponent {
    /** Opponent ID */
    id: string;
    /** Opponent metadata */
    meta: MultiplayerSessionsMeta;
    /** Opponent transactions */
    transactions: MultiplayerSessionsCommitPayload[];
}
