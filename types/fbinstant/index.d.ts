// Type definitions for FBInstant 6.1
// Project: https://developers.facebook.com/docs/games/instant-games
// Definitions by: Menushka Weeratunga <https://github.com/menushka>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare class FBInstant {
    player: FBInstant.Player;
    context: FBInstant.Context;
    payments: FBInstant.Payments;

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
    shareAsync(payload: FBInstant.SharePayload): Promise<void>;
    updateAsync(payload: FBInstant.UpdatePayload): Promise<void>;
    switchGameAsync(appID: string, data: string): Promise<void>;
    canCreateShortcutAsync(): Promise<boolean>;
    createShortcutAsync(): Promise<void>;
    quit(): void;
    logEvent(eventName: string, valueToSum?: number, parameter?: any): FBInstant.APIError;
    onPause(func: () => void): void;
    getInterstitialAdAsync(placementID: string): Promise<FBInstant.AdInstance>;
    getRewardedVideoAsync(placementID: string): Promise<FBInstant.AdInstance>;
    matchPlayerAsync(matchTag: string, switchContextWhenMatched?: boolean): Promise<void>;
    checkCanPlayerMatchAsync(): Promise<boolean>;
    getLeaderboardAsync(name: string): Promise<FBInstant.Leaderboard>;
}

declare namespace FBInstant {
    class Player {
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

    class Context {
        getID(): string;
        getType(): Type;
        isSizeBetween(minSize: number, maxSize: number): ContextSizeResponse;
        switchAsync(id: string): Promise<void>;
        chooseAsync(options: ContextOptions): Promise<void>;
        createAsync(playerID: string): Promise<void>;
        getPlayersAsync(): Promise<ContextPlayer[]>;
    }

    class Leaderboard {
        getName(): string;
        getContextID(): string;
        getEntryCountAsync(): Promise<number>;
        setScoreAsync(score: number, extraData: string): Promise<LeaderboardEntry>;
        getPlayerEntryAsync(): Promise<LeaderboardEntry>;
        getEntriesAsync(count: number, offset: number): Promise<LeaderboardEntry[]>;
    }

    class LeaderboardEntry {
        getScore(): number;
        getFormattedScore(): string;
        getTimestamp(): number;
        getRank(): number;
        getExtraData(): string;
        getPlayer(): LeaderboardPlayer;
    }

    class LeaderboardPlayer {
        getName(): string;
        getPhoto(): string;
        getID(): string;
    }

    class ConnectedPlayer {
        getID(): string;
        getName(): string;
        getPhoto(): string;
    }

    class SignedPlayerInfo {
        getPlayerID(): string;
        getSignature(): string;
    }

    class ContextPlayer {
        getID(): string;
        getName(): string;
        getPhoto(): string;
    }

    class AdInstance {
        getPlacementID(): string;
        loadAsync(): Promise<void>;
        showAsync(): Promise<void>;
    }

    class Payments {
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
