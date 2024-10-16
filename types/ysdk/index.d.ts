declare global {
    const YaGames: {
        init(opts?: {
            screen: {
                fullscreen?: boolean;
                orientation?: {
                    value: "portrait" | "landscape";
                    lock?: boolean;
                };
            };
        }): Promise<SDK>;
    };
}

export interface SDK {
    environment: Environment;

    deviceInfo: DeviceInfo;

    features: {
        LoadingAPI: {
            ready(): void;
        };
        GameplayAPI: {
            start(): void;
            stop(): void;
        };
        GamesAPI: {
            getAllGames(): Promise<{ games: Game[]; developerURL: string }>;
            getGameByID(id: number): Promise<{ game?: Game; isAvailable: boolean }>;
        };
    };

    clipboard: {
        writeText(text: string): void;
    };

    screen: {
        fullscreen: {
            STATUS_ON: "on";
            STATUS_OFF: "off";
            status: "on" | "off";
            request(): Promise<void>;
            exit(): Promise<void>;
        };
    };

    getStorage(): Promise<SafeStorage>;

    auth: {
        openAuthDialog(): Promise<void>;
    };

    getPlayer<TSigned extends boolean = false>(opts?: {
        signed?: TSigned;
    }): Promise<TSigned extends true ? Signed<Player> : Player>;

    feedback: {
        canReview(): Promise<{
            value: boolean;
            reason?: FeedbackError;
        }>;
        requestReview(): Promise<{ feedbackSent: boolean }>;
    };

    adv: {
        showFullscreenAdv(opts?: {
            callbacks?: {
                onOpen?: () => void;
                onClose?: (wasShown: boolean) => void;
                onError?: (error: string) => void;
                onOffline?: () => void;
            };
        }): void;

        showRewardedVideo(opts?: {
            callbacks?: {
                onOpen?: () => void;
                onClose?: () => void;
                onError?: (error: string) => void;
                onRewarded?: () => void;
            };
        }): void;

        showBannerAdv(): Promise<{ reason?: StickyAdvError }>;

        hideBannerAdv(): Promise<{ stickyAdvIsShowing: boolean }>;

        getBannerAdvStatus(): Promise<{
            stickyAdvIsShowing: boolean;
            reason?: StickyAdvError;
        }>;
    };

    EVENTS: {
        EXIT: "EXIT";
        HISTORY_BACK: "HISTORY_BACK";
    };

    dispatchEvent(eventName: SdkEventName, detail?: any): Promise<unknown>;

    onEvent(eventName: SdkEventName, listener: () => void): () => void;

    shortcut: {
        canShowPrompt(): Promise<{ canShow: boolean }>;
        showPrompt(): Promise<{ outcome: "accepted" | "rejected" }>;
    };

    getPayments<TSigned extends boolean = false>(opts?: { signed?: TSigned }): Promise<Payments<TSigned>>;

    getLeaderboards(): Promise<Leaderboards>;

    getFlags(params?: GetFlagsParams): Promise<Record<string, string>>;

    isAvailableMethod(methodName: string): Promise<boolean>;

    serverTime(): number;
}

interface Game {
    appID: string;
    title: string;
    url: string;
    coverURL: string;
    iconURL: string;
}

interface ClientFeature {
    name: string;
    value: string;
}

interface GetFlagsParams {
    defaultFlags?: Record<string, string>;
    clientFeatures?: ClientFeature[];
}

type Signed<T> = T & { signature: string };

interface Environment {
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
    get payload(): string | null;
}

interface DeviceInfo {
    get type(): string;
    isMobile(): boolean;
    isTablet(): boolean;
    isDesktop(): boolean;
    isTV(): boolean;
}

type SafeStorage = typeof window.localStorage;

export interface Player {
    getUniqueID(): string;
    getName(): string;
    getPhoto(size: "small" | "medium" | "large"): string;
    getPayingStatus(): "paying" | "partially_paying" | "not_paying" | "unknown";
    getIDsPerGame(): Promise<Array<{ appID: number; userID: string }>>;
    getMode(): "lite" | "";
    getData<T extends string>(keys?: readonly T[]): Promise<Partial<Record<T, Serializable>>>;
    setData(data: any, flush?: boolean): Promise<void>;
    getStats<T extends string>(keys?: readonly T[]): Promise<Partial<Record<T, number>>>;
    setStats(stats: Record<string | number, number>): Promise<void>;
    incrementStats<T extends Record<string | number, number>>(
        stats: T,
    ): Promise<IncrementedStats<T>>;
}

interface IncrementedStats<TStats extends Record<string, number>> {
    stats: Record<keyof TStats, number> & Record<string | number, number>;
    newKeys: string[];
}

export interface Purchase {
    productID: string;
    purchaseToken: string;
    developerPayload?: string;
}

export interface Product {
    id: string;
    title: string;
    description: string;
    imageURI: string;
    /**
     * @description String in format: "\<price_value\> \<currency_code\>"
     */
    price: string;
    priceValue: string;
    priceCurrencyCode: string;
    getPriceCurrencyImage(size: "small" | "medium" | "svg"): string;
}

export interface Payments<TSigned extends boolean = false> {
    getPurchases(): Promise<TSigned extends true ? Signed<Purchase[]> : Purchase[]>;
    getCatalog(): Promise<Product[]>;
    purchase(opts?: {
        id: string;
        developerPayload?: string;
    }): Promise<TSigned extends true ? Signed<Purchase> : Purchase>;
    consumePurchase(token: string): Promise<void>;
}

export interface Leaderboards {
    getLeaderboardDescription(leaderboardName: string): Promise<LeaderboardDescription>;

    setLeaderboardScore(leaderboardName: string, score: number, extraData?: string): Promise<void>;

    /**
     * @throws {{code: string}}
     */
    getLeaderboardPlayerEntry(leaderboardName: string): Promise<LeaderboardEntry>;

    getLeaderboardEntries(
        leaderboardName: string,
        opts?: {
            includeUser?: boolean;
            quantityAround?: number;
            quantityTop?: number;
        },
    ): Promise<LeaderboardEntriesData>;
}

export interface LeaderboardEntriesData {
    leaderboard: LeaderboardDescription;
    ranges: Array<{ start: number; size: number }>;
    userRank: number;
    entries: LeaderboardEntry[];
}

export interface LeaderboardEntry {
    score: number;
    extraData?: string;
    rank: number;
    player: {
        getAvatarSrc(size: "small" | "medium" | "large"): string;
        getAvatarSrcSet(size: "small" | "medium" | "large"): string;
        lang: string;
        publicName: string;
        scopePermissions: {
            avatar: string;
            public_name: string;
        };
        uniqueID: string;
    };
    formattedScore: string;
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

export type FeedbackError = "NO_AUTH" | "GAME_RATED" | "REVIEW_ALREADY_REQUESTED" | "UNKNOWN";

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

type Serializable = string | number | boolean | null | Serializable[] | { [key: string]: Serializable };

// Disabled automatic exporting
export {};
