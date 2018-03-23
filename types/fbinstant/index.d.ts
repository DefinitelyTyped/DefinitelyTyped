// Type definitions for FBInstant 6.1
// Project: https://developers.facebook.com/docs/games/instant-games
// Definitions by: Menushka Weeratunga <https://github.com/menushka>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare class FBInstant {
    player: Player;
    context: Context;
    payments: Payments;

    getLocale(): string;
    getPlatform(): string;
    getSDKVersion(): string;
    initializeAsync(): Promise<any>;
    setLoadingProgress(progress: number): void;
    getSupportedAPIs(): string[];
    getEntryPointData(): any;
    getEntryPointAsync(): Promise<string>;
    setSessionData(sessionData: any): void;
    startGameAsync(): Promise<any>;
    shareAsync(payload: SharePayload): Promise<void>;
    updateAsync(payload: UpdatePayload): Promise<void>;
    switchGameAsync(appID: string, data: string): Promise<void>;
    canCreateShortcutAsync(): Promise<boolean>;
    createShortcutAsync(): Promise<void>;
    quit(): void;
    logEvent(eventName: string, valueToSum?: number, parameter?: any): APIError;
    onPause(func: () => void): void;
    getInterstitialAdAsync(placementID: string): Promise<AdInstance>;
    getRewardedVideoAsync(placementID: string): Promise<AdInstance>;
    matchPlayerAsync(matchTag: string, switchContextWhenMatched?: boolean): Promise<void>;
    checkCanPlayerMatchAsync(): Promise<boolean>;
    getLeaderboardAsync(name: string): Promise<Leaderboard>;
}

declare class Player {
    getID(): string;
    getSignedPlayerInfoAsync(requestPayload: string): Promise<SignedPlayerInfo>;
    canSubscribeBotAsync(): Promise<boolean>;
    subscribeBotAsync(): Promise<void>;
    getName(): string;
    getPhoto(): string;
    getDataAsync(keys: string[]): Promise<DataObject>;
    setDataAsync(data: DataObject): Promise<void>;
    flushDataAsync(): Promise<void>;
    getStatsAsync(keys: string[]): Promise<StatsObject>;
    setStatsAsync(stats: StatsObject): Promise<void>;
    incrementStatsAsync(increments: IncrementObject): Promise<StatsObject>;
    getConnectedPlayersAsync(): Promise<ConnectedPlayer[]>;
}

declare class Context {
    getID(): string;
    getType(): Type;
    isSizeBetween(minSize: number, maxSize: number): ContextSizeResponse;
    switchAsync(id: string): Promise<void>;
    chooseAsync(options: ContextOptions): Promise<void>;
    createAsync(playerID: string): Promise<void>;
    getPlayersAsync(): Promise<ContextPlayer[]>;
}

declare class Leaderboard {
    getName(): string;
    getContextID(): string;
    getEntryCountAsync(): Promise<number>;
    setScoreAsync(score: number, extraData: string): Promise<LeaderboardEntry>;
    getPlayerEntryAsync(): Promise<LeaderboardEntry>;
    getEntriesAsync(count: number, offset: number): Promise<LeaderboardEntry[]>;
}

declare class LeaderboardEntry {
    getScore(): number;
    getFormattedScore(): string;
    getTimestamp(): number;
    getRank(): number;
    getExtraData(): string;
    getPlayer(): LeaderboardPlayer;
}

declare class LeaderboardPlayer {
    getName(): string;
    getPhoto(): string;
    getID(): string;
}

declare class ConnectedPlayer {
    getID(): string;
    getName(): string;
    getPhoto(): string;
}

declare class SignedPlayerInfo {
    getPlayerID(): string;
    getSignature(): string;
}

declare class ContextPlayer {
    getID(): string;
    getName(): string;
    getPhoto(): string;
}

declare class AdInstance {
    getPlacementID(): string;
    loadAsync(): Promise<void>;
    showAsync(): Promise<void>;
}

declare class Payments {
    purchaseAsync(purchaseConfig: PurchaseConfig): Promise<Purchase>;
    getPurchasesAsync(): Promise<Purchase[]>;
    consumePurchaseAsync(purchaseToken: string): Promise<void>;
    onReady(callback: () => void): void;
}

declare interface Product {
    title: string;
    productID: string;
    description?: string;
    imageURI?: string;
    price: string;
    priceCurrencyCode: string;
}

declare interface ContextSizeResponse {
    answer: boolean;
    minSize?: number;
    maxSize?: number;
}

declare interface Purchase {
    developerPayload?: string;
    paymentID: string;
    productID: string;
    purchaseTime: string;
    purchaseToken: string;
    signedRequest: SignedPurchaseRequest;
}

declare interface ContextOptions {
    filters?: ContextFilter[];
    maxSize?: number;
    minSize?: number;
}

declare interface SharePayload {
    intent?: Intent;
    image?: string;
    text?: string;
    data?: any;
}

declare interface APIError {
    code: ErrorCodeType;
    message: string;
}

declare interface PurchaseConfig {
    productID: string;
    developerPayload?: string;
}

declare interface UpdatePayload {
    action?: UpdateAction;
    template?: string;
    cta?: (string | LocalizableContent);
    image?: string;
    text?: (string | LocalizableContent);
    data?: any;
    strategy?: string;
    notification?: string;
}

declare interface LeaderboardUpdatePayload {
    action: UpdateAction;
    name: string;
    text?: string;
}

declare interface LocalizableContent {
    default: string;
    localizations: LocalizationsDict;
}

declare interface DataObject { [ key: string ]: string | number; }

declare interface StatsObject { [ key: string ]: string | number; }

declare interface IncrementObject { [ key: string ]: number; }

declare type LocalizationsDict = any;

declare type SignedPurchaseRequest = string;

declare type ContextFilter = "NEW_CONTEXT_ONLY" | "INCLUDE_EXISTING_CHALLENGES" | "NEW_PLAYERS_ONLY";

declare type UpdateAction = "CUSTOM" | "LEADERBOARD";

declare type Platform = "IOS" | "ANDROID" | "WEB" | "MOBILE_WEB";

declare type Type = "POST" | "THREAD" | "GROUP" | "SOLO";

declare type Intent = "INVITE" | "REQUEST" | "CHALLENGE" | "SHARE";

declare type ErrorCodeType = "ADS_FREQUENT_LOAD" |
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
