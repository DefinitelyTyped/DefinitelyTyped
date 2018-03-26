// Type definitions for facebook-instant-games 6.1
// Project: https://developers.facebook.com/docs/games/instant-games
// Definitions by: Menushka Weeratunga <https://github.com/menushka>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare namespace FBInstant {
    let player: Player;
    let context: Context;
    let payments: Payments;

    function getLocale(): string;
    function getPlatform(): string;
    function getSDKVersion(): string;
    function initializeAsync(): Promise<any>;
    function setLoadingProgress(progress: number): void;
    function getSupportedAPIs(): string[];
    function getEntryPointData(): any;
    function getEntryPointAsync(): Promise<string>;
    function setSessionData(sessionData: any): void;
    function startGameAsync(): Promise<any>;
    function shareAsync(payload: SharePayload): Promise<void>;
    function updateAsync(payload: UpdatePayload): Promise<void>;
    function switchGameAsync(appID: string, data?: string): Promise<void>;
    function canCreateShortcutAsync(): Promise<boolean>;
    function createShortcutAsync(): Promise<void>;
    function quit(): void;
    function logEvent(eventName: string, valueToSum?: number, parameter?: any): APIError;
    function onPause(func: () => void): void;
    function getInterstitialAdAsync(placementID: string): Promise<AdInstance>;
    function getRewardedVideoAsync(placementID: string): Promise<AdInstance>;
    function matchPlayerAsync(matchTag?: string, switchContextWhenMatched?: boolean): Promise<void>;
    function checkCanPlayerMatchAsync(): Promise<boolean>;
    function getLeaderboardAsync(name: string): Promise<Leaderboard>;

    interface Player {
        getID(): string;
        getSignedPlayerInfoAsync(requestPayload: string): Promise<SignedPlayerInfo>;
        canSubscribeBotAsync(): Promise<boolean>;
        subscribeBotAsync(): Promise<void>;
        getName(): string;
        getPhoto(): string;
        getDataAsync(keys?: string[]): Promise<DataObject>;
        setDataAsync(data: DataObject): Promise<void>;
        flushDataAsync(): Promise<void>;
        getStatsAsync(keys?: string[]): Promise<StatsObject>;
        setStatsAsync(stats: StatsObject): Promise<void>;
        incrementStatsAsync(increments: IncrementObject): Promise<StatsObject>;
        getConnectedPlayersAsync(): Promise<ConnectedPlayer[]>;
    }

    interface Context {
        getID(): string;
        getType(): Type;
        isSizeBetween(minSize: number, maxSize: number): ContextSizeResponse;
        switchAsync(id: string): Promise<void>;
        chooseAsync(options: ContextOptions): Promise<void>;
        createAsync(playerID: string): Promise<void>;
        getPlayersAsync(): Promise<ContextPlayer[]>;
    }

    interface Leaderboard {
        getName(): string;
        getContextID(): string;
        getEntryCountAsync(): Promise<number>;
        setScoreAsync(score: number, extraData: string): Promise<LeaderboardEntry>;
        getPlayerEntryAsync(): Promise<LeaderboardEntry>;
        getEntriesAsync(count: number, offset: number): Promise<LeaderboardEntry[]>;
    }

    interface LeaderboardEntry {
        getScore(): number;
        getFormattedScore(): string;
        getTimestamp(): number;
        getRank(): number;
        getExtraData(): string;
        getPlayer(): LeaderboardPlayer;
    }

    interface LeaderboardPlayer {
        getName(): string;
        getPhoto(): string;
        getID(): string;
    }

    interface ConnectedPlayer {
        getID(): string;
        getName(): string;
        getPhoto(): string;
    }

    interface SignedPlayerInfo {
        getPlayerID(): string;
        getSignature(): string;
    }

    interface ContextPlayer {
        getID(): string;
        getName(): string;
        getPhoto(): string;
    }

    interface AdInstance {
        getPlacementID(): string;
        loadAsync(): Promise<void>;
        showAsync(): Promise<void>;
    }

    interface Payments {
        purchaseAsync(purchaseConfig: PurchaseConfig): Promise<Purchase>;
        getPurchasesAsync(): Promise<Purchase[]>;
        consumePurchaseAsync(purchaseToken: string): Promise<void>;
        onReady(callback: () => void): void;
    }

    interface Product {
        title: string;
        productID: string;
        description?: string;
        imageURI?: string;
        price: string;
        priceCurrencyCode: string;
    }

    interface ContextSizeResponse {
        answer: boolean;
        minSize?: number;
        maxSize?: number;
    }

    interface Purchase {
        developerPayload?: string;
        paymentID: string;
        productID: string;
        purchaseTime: string;
        purchaseToken: string;
        signedRequest: SignedPurchaseRequest;
    }

    interface ContextOptions {
        filters?: ContextFilter[];
        maxSize?: number;
        minSize?: number;
    }

    interface SharePayload {
        intent?: Intent;
        image?: string;
        text?: string;
        data?: any;
    }

    interface APIError {
        code: ErrorCodeType;
        message: string;
    }

    interface PurchaseConfig {
        productID: string;
        developerPayload?: string;
    }

    interface UpdatePayload {
        action?: UpdateAction;
        template?: string;
        cta?: (string | LocalizableContent);
        image?: string;
        text?: (string | LocalizableContent);
        data?: any;
        strategy?: string;
        notification?: string;
    }

    interface LeaderboardUpdatePayload {
        action: UpdateAction;
        name: string;
        text?: string;
    }

    interface LocalizableContent {
        default: string;
        localizations: LocalizationsDict;
    }

    interface DataObject { [ key: string ]: string | number; }

    interface StatsObject { [ key: string ]: string | number; }

    interface IncrementObject { [ key: string ]: number; }

    type LocalizationsDict = any;

    type SignedPurchaseRequest = string;

    type ContextFilter = "NEW_CONTEXT_ONLY" | "INCLUDE_EXISTING_CHALLENGES" | "NEW_PLAYERS_ONLY";

    type UpdateAction = "CUSTOM" | "LEADERBOARD";

    type Platform = "IOS" | "ANDROID" | "WEB" | "MOBILE_WEB";

    type Type = "POST" | "THREAD" | "GROUP" | "SOLO";

    type Intent = "INVITE" | "REQUEST" | "CHALLENGE" | "SHARE";

    type ErrorCodeType = "ADS_FREQUENT_LOAD" |
                                 "ADS_NO_FILL" |
                                 "ADS_NOT_LOADED" |
                                 "ADS_TOO_MANY_INSTANCES" |
                                 "ANALYTICS_POST_EXCEPTION" |
                                 "CLIENT_REQUIRES_UPDATE" |
                                 "CLIENT_UNSUPPORTED_OPERATION" |
                                 "INVALID_OPERATION" |
                                 "INVALID_PARAM" |
                                 "LEADERBOARD_NOT_FOUND" |
                                 "LEADERBOARD_WRONG_CONTEXT" |
                                 "NETWORK_FAILURE" |
                                 "PENDING_REQUEST" |
                                 "RATE_LIMITED" |
                                 "SAME_CONTEXT" |
                                 "UNKNOWN" |
                                 "USER_INPUT";
}
