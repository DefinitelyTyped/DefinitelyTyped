import type { EventEmitter } from "events";
import Steam = require("steam");
import SteamID = require("steamid");
import SteamUser = require("steam-user");
import SteamCommunity = require("steamcommunity");
import CEconItem = require("steamcommunity/classes/CEconItem");
import FileManager = require("file-manager");
import TradeOffer = require("./lib/classes/TradeOffer");

export = TradeOfferManager;

declare class TradeOfferManager extends EventEmitter {
    constructor(options?: TradeOfferManager.TradeOfferManagerOptions);

    pollInterval: number;
    cancelTime: number | null;
    pendingCancelTime: number | null;
    cancelOfferCount: number | null;
    cancelOfferCountMinAge: number;
    pollData: any;
    readonly apiKey: string | null;
    steamID: SteamID | null;
    storage: FileManager;

    /**
     * Sets node-steam-tradeoffer-manager's internal cookie buffer and retrieves your API key, registering one if needed.
     * Therefore, usage of this module constitutes agreement to the Steam Web API terms.
     *
     * @param cookies An array of cookies in name=value form. This is the format used by node-steam, node-steam-user, and node-steamcommunity, so any of those modules can be used to get cookies.
     * @param familyViewPin If your account has Family View enabled, you need to supply your PIN here.
     * Once you've set cookies initially, you can use parentalUnlock if you need to re-authenticate for any reason.
     * @param callback Will be called once the API key is retrieved and the module is ready for use. The first argument will be null on success or an Error object on failure.
     * You'll get an Access Denied error if your account is limited.
     */
    setCookies(cookies: string[], familyViewPin?: string, callback?: (err: Error | null) => void): void;
    setCookies(cookies: string[], callback?: (err: Error | null) => void): void;

    /**
     * Stops polling, removes the Steam client reference, and clears cookies. Suitable for use if you want to log out of your bot's account but not terminate the process.
     */
    shutdown(): void;

    /**
     * If your account has Family View enabled, you'll need to call this right after each setCookies call to unlock the session for trading.
     * You don't need to wait for the setCookies callback to call this.
     *
     * You need to supply your PIN directly to setCookies the first time you call it. On subsequent calls, you have a choice of providing it to either setCookies or calling parentalUnlock.
     *
     * @param pin Your 4-digit PIN code
     * @param callback Called on completion with a single argument which is null on success or an Error object on failure. Error is Incorrect PIN if your PIN was wrong.
     */
    parentalUnlock(pin: string, callback?: (err: Error | null) => void): void;

    /**
     * Creates a new empty TradeOffer and returns it to you. You can pass either a SteamID (as an object or a string) or a trade URL to partner. If you pass a trade URL,
     * then your trade partner's SteamID (and access token, if present) will be extracted from the URL.
     *
     * Important: If you use a trade URL, make sure you verify the user's SteamID if the URL was user-provided. Users can give you trade URLs that don't belong to them, causing you to
     * send unsolicited trade offers to random users!
     *
     * @param partner A trade URL, a SteamID object, or a string which can parse into a SteamID (STEAM_0:0:23071901, [U:1:46143802], 76561198006409530).
     * @param token Your trade partner's access token, if needed
     */
    createOffer(partner: SteamID | string, token?: string): TradeOffer;

    /**
     * Gets a TradeOffer object for a specific offer ID. As of v1.1.0, on failure, the err object may contain an eresult property.
     *
     * @param id The ID of the trade offer, as a string or number
     * @param callback Called on completion with an Error on failure (null on success) and the TradeOffer object for the requested offer.
     */
    getOffer(
        id: number | string,
        callback: (err: TradeOfferManager.EResultError | null, offer: TradeOffer) => void,
    ): void;

    /**
     * Retrieves a list of trade offers matching specific criteria. As of v1.1.0, on failure, the err object may contain an eresult property.
     *
     * @param filter A value from EOfferFilter
     * @param callback Called on completion with an Error on failure (null on success), an array of TradeOffer objects for offers sent by you matching the filter, and an array of
     * TradeOffer objects for offers received by you matching the filter.
     */
    getOffers(
        filter: number,
        callback: (err: TradeOfferManager.EResultError | null, sent: TradeOffer[], received: TradeOffer[]) => void,
    ): void;

    /**
     * Retrieves a list of trade offers matching specific criteria. As of v1.1.0, on failure, the err object may contain an eresult property.
     *
     * @param filter A value from EOfferFilter
     * @param historicalCutoff If filter is ActiveOnly and this is a Date object in the past, then offers which are either active or have a modification date after this date will be returned.
     * Omit or pass null if filter is not ActiveOnly or if you only wish to get offers in Active state.
     * @param callback Called on completion with an Error on failure (null on success), an array of TradeOffer objects for offers sent by you matching the filter, and an array of TradeOffer
     * objects for offers received by you matching the filter.
     */
    getOffers(
        filter: number,
        historicalCutoff: Date | null,
        callback: (err: TradeOfferManager.EResultError | null, sent: TradeOffer[], received: TradeOffer[]) => void,
    ): void;

    /**
     * Gets the contents of your own inventory. This method uses the newer /inventory/SteamID endpoint, which is less rate-limited than the older, deprecated /profiles/SteamID/inventory/json
     * endpoint. However, the output data is slightly different. The only known difference right now is that app_data is not available. You will need to use other means to obtain that data
     * if you need it. Don't rely on the older endpoint and the deprecated loadInventory method as it will likely be removed in the future.
     *
     * @param appid The Steam App ID of the game for which you want to load your own inventory
     * @param contextid The ID of the context within the app that you're loading the inventory for
     * @param tradableOnly true to only include tradable items, false to include all
     * @param callback Invoked when data is ready, includes an Error on failure (null on success), an array of the user's inventory items as CEconItem objects,
     * and an array of the user's currency items as CEconItem objects
     */
    getInventoryContents(
        appid: number,
        contextid: number,
        tradableOnly: boolean,
        callback: TradeOfferManager.InventoryCallback,
    ): void;

    /**
     * Same as getInventoryContents, but can retrieve another user's inventory.
     *
     * @param steamID Either a SteamID object or a string which can parse into one
     * @param appid The Steam App ID of the game for which you want to load the user's inventory
     * @param contextid The ID of the context within the app that you're loading the inventory for
     * @param tradableOnly true to only include tradable items, false to include all
     * @param callback Invoked when data is ready, includes an Error on failure (null on success), an array of the user's inventory items as CEconItem objects,
     * and an array of the user's currency items as CEconItem objects
     */
    getUserInventoryContents(
        steamID: SteamID | string,
        appid: number,
        contextid: number,
        tradableOnly: boolean,
        callback: TradeOfferManager.InventoryCallback,
    ): void;

    /**
     * THIS METHOD IS DEPRECATED AS OF v2.5.0; USE getInventoryContents INSTEAD.
     *
     * Retrieves the contents of your own inventory for a specific game and context.
     *
     * @param appid The Steam App ID of the game for which you want to load your inventory
     * @param contextid The ID of the context within the app that you're loading the inventory for
     * @param tradableOnly true to only include tradable items, false to include all
     * @param callback Invoked when data is ready, includes an Error on failure (null on success), an array of the user's inventory items as CEconItem objects,
     * and an array of the user's currency items as CEconItem objects
     */
    loadInventory(
        appid: number,
        contextid: number,
        tradableOnly: boolean,
        callback: TradeOfferManager.InventoryCallback,
    ): void;

    /**
     * HIS METHOD IS DEPRECATED AS OF v2.5.0; USE getUserInventoryContents INSTEAD.
     *
     * Retrieves the contents of some other user's inventory for a specific game and context.
     *
     * @param steamID Either a SteamID object or a string which can parse into one
     * @param appid The Steam App ID of the game for which you want to load the user's inventory
     * @param contextid The ID of the context within the app that you're loading the inventory for
     * @param tradableOnly true to only include tradable items, false to include all
     * @param callback Invoked when data is ready, includes an Error on failure (null on success), an array of the user's inventory items as CEconItem objects,
     * and an array of the user's currency items as CEconItem objects
     */
    loadUserInventory(
        steamID: SteamID | string,
        appid: number,
        contextid: number,
        tradableOnly: boolean,
        callback: TradeOfferManager.InventoryCallback,
    ): void;

    /**
     * Retrieves the token part of your account's trade URL.
     *
     * @param callback Called when requested data is available, with an Error on failure (null on success) and your account's trade offer token
     */
    getOfferToken(callback: (err: Error | null, token: string) => void): void;

    /**
     * Finds offers which contain the given item(s). Any offer which contains at least one item you passed in will be returned.
     * Might be useful to avoid sending duplicate offers, or to cancel previous ones.
     *
     * @param items Either a single item object (with appid, contextid, and assetid/id properties) or an array of item objects
     * @param includeInactive If true, then offers which aren't Active or InEscrow will be checked. Default false.
     * @param callback Called on completion with an Error on failure (null on success), an array of TradeOffer objects for offers you sent which contain the item(s),
     * and an array of TradeOffer objects for offers you received which contain the item(s)
     */
    getOffersContainingItem(
        items: CEconItem | CEconItem[],
        includeInactive: boolean,
        callback: TradeOfferManager.OfferCallback,
    ): void;

    /**
     * Finds offers which contain the given item(s). Any offer which contains at least one item you passed in will be returned. Might be useful to avoid sending duplicate offers,
     * or to cancel previous ones.
     *
     * @param items Either a single item object (with appid, contextid, and assetid/id properties) or an array of item objects
     * @param callback Called on completion with an Error on failure (null on success), an array of TradeOffer objects for offers you sent which contain the item(s),
     * and an array of TradeOffer objects for offers you received which contain the item(s)
     */
    getOffersContainingItem(items: CEconItem | CEconItem[], callback: TradeOfferManager.OfferCallback): void;

    /**
     * Immediately performs a poll. Can be used even if timed polling is disabled to poll on your own schedule. Don't worry about spamming this method,
     * node-steam-tradeoffer-manager will automatically limit polls to at most one per second.
     */
    doPoll(): void;

    on<T extends keyof TradeOfferManager.TradeOfferManagerEvents>(
        eventType: T,
        callback: TradeOfferManager.TradeOfferManagerEvents[T],
    ): this;

    // Static constants
    static readonly ETradeOfferState: TradeOfferManager.ETradeOfferState;
    static readonly EOfferFilter: TradeOfferManager.EOfferFilter;
    static readonly EResult: TradeOfferManager.EResult;
    static readonly EConfirmationMethod: TradeOfferManager.EConfirmationMethod;
    static readonly ETradeStatus: TradeOfferManager.ETradeStatus;
    static readonly SteamID: typeof SteamID;
}

declare namespace TradeOfferManager {
    interface MEconItemExchange extends CEconItem {
        appid: number;
        contextid: number;
        assetid: number;
        amount: number;
        classid: number;
        new_assetid?: number;
        new_contextid?: number;
        rollback_new_assetid?: number;
        rollback_new_contextid?: number;
    }

    interface ETradeOfferState extends Record<string | number, string | number> {
        /** 1 - Invalid. */
        Invalid: number;
        /** 2 - This trade offer has been sent, neither party has acted on it yet. */
        Active: number;
        /** 3 - The trade offer was accepted by the recipient and items were exchanged. */
        Accepted: number;
        /** 4 - The recipient made a counter offer. */
        Countered: number;
        /** 5 - The trade offer was not accepted before the expiration date. */
        Expired: number;
        /** 6 - The sender cancelled the offer. */
        Canceled: number;
        /** 7 - The recipient declined the offer. */
        Declined: number;
        /** 8 - Some of the items in the offer are no longer available (indicated by the missing flag in the output). */
        InvalidItems: number;
        /** 9 - The offer hasn't been sent yet and is awaiting email/mobile confirmation. The offer is only visible to the sender. */
        CreatedNeedsConfirmation: number;
        /** 10 - Either party canceled the offer via email/mobile. The offer is visible to both parties, even if the sender canceled it before it was sent. */
        CanceledBySecondFactor: number;
        /** 11 - The trade has been placed on hold. The items involved in the trade have all been removed from both parties' inventories and will be automatically delivered in the future. */
        InEscrow: number;
        "1": string;
        "2": string;
        "3": string;
        "4": string;
        "5": string;
        "6": string;
        "7": string;
        "8": string;
        "9": string;
        "10": string;
        "11": string;
    }

    interface EOfferFilter {
        ActiveOnly: number;
        HistoricalOnly: number;
        All: number;
    }

    interface EResult extends Record<string | number, string | number> {
        Invalid: number;
        OK: number;
        Fail: number;
        NoConnection: number;
        InvalidPassword: number;
        LoggedInElsewhere: number;
        InvalidProtocolVer: number;
        InvalidParam: number;
        FileNotFound: number;
        Busy: number;
        InvalidState: number;
        InvalidName: number;
        InvalidEmail: number;
        DuplicateName: number;
        AccessDenied: number;
        Timeout: number;
        Banned: number;
        AccountNotFound: number;
        InvalidSteamID: number;
        ServiceUnavailable: number;
        NotLoggedOn: number;
        Pending: number;
        EncryptionFailure: number;
        InsufficientPrivilege: number;
        LimitExceeded: number;
        Revoked: number;
        Expired: number;
        AlreadyRedeemed: number;
        DuplicateRequest: number;
        AlreadyOwned: number;
        IPNotFound: number;
        PersistFailed: number;
        LockingFailed: number;
        LogonSessionReplaced: number;
        ConnectFailed: number;
        HandshakeFailed: number;
        IOFailure: number;
        RemoteDisconnect: number;
        ShoppingCartNotFound: number;
        Blocked: number;
        Ignored: number;
        NoMatch: number;
        AccountDisabled: number;
        ServiceReadOnly: number;
        AccountNotFeatured: number;
        AdministratorOK: number;
        ContentVersion: number;
        TryAnotherCM: number;
        PasswordRequiredToKickSession: number;
        AlreadyLoggedInElsewhere: number;
        Suspended: number;
        Cancelled: number;
        DataCorruption: number;
        DiskFull: number;
        RemoteCallFailed: number;
        PasswordNotSet: number;
        PasswordUnset: number;
        ExternalAccountUnlinked: number;
        PSNTicketInvalid: number;
        ExternalAccountAlreadyLinked: number;
        RemoteFileConflict: number;
        IllegalPassword: number;
        SameAsPreviousValue: number;
        AccountLogonDenied: number;
        CannotUseOldPassword: number;
        InvalidLoginAuthCode: number;
        AccountLogonDeniedNoMailSent: number;
        AccountLogonDeniedNoMail: number;
        HardwareNotCapableOfIPT: number;
        IPTInitError: number;
        ParentalControlRestricted: number;
        FacebookQueryError: number;
        ExpiredLoginAuthCode: number;
        IPLoginRestrictionFailed: number;
        AccountLocked: number;
        AccountLockedDown: number;
        AccountLogonDeniedVerifiedEmailRequired: number;
        NoMatchingURL: number;
        BadResponse: number;
        RequirePasswordReEntry: number;
        ValueOutOfRange: number;
        UnexpectedError: number;
        Disabled: number;
        InvalidCEGSubmission: number;
        RestrictedDevice: number;
        RegionLocked: number;
        RateLimitExceeded: number;
        AccountLogonDeniedNeedTwoFactorCode: number;
        AccountLoginDeniedNeedTwoFactor: number;
        ItemOrEntryHasBeenDeleted: number;
        ItemDeleted: number;
        AccountLoginDeniedThrottle: number;
        TwoFactorCodeMismatch: number;
        TwoFactorActivationCodeMismatch: number;
        AccountAssociatedToMultiplePlayers: number;
        AccountAssociatedToMultiplePartners: number;
        NotModified: number;
        NoMobileDeviceAvailable: number;
        NoMobileDevice: number;
        TimeIsOutOfSync: number;
        TimeNotSynced: number;
        SMSCodeFailed: number;
        TooManyAccountsAccessThisResource: number;
        AccountLimitExceeded: number;
        AccountActivityLimitExceeded: number;
        PhoneActivityLimitExceeded: number;
        RefundToWallet: number;
        EmailSendFailure: number;
        NotSettled: number;
        NeedCaptcha: number;
        GSLTDenied: number;
        GSOwnerDenied: number;
        InvalidItemType: number;
        IPBanned: number;
        GSLTExpired: number;
        InsufficientFunds: number;
        TooManyPending: number;
        NoSiteLicensesFound: number;
        WGNetworkSendExceeded: number;
        AccountNotFriends: number;
        LimitedUserAccount: number;
        "0": string;
        "1": string;
        "2": string;
        "3": string;
        "5": string;
        "6": string;
        "7": string;
        "8": string;
        "9": string;
        "10": string;
        "11": string;
        "12": string;
        "13": string;
        "14": string;
        "15": string;
        "16": string;
        "17": string;
        "18": string;
        "19": string;
        "20": string;
        "21": string;
        "22": string;
        "23": string;
        "24": string;
        "25": string;
        "26": string;
        "27": string;
        "28": string;
        "29": string;
        "30": string;
        "31": string;
        "32": string;
        "33": string;
        "34": string;
        "35": string;
        "36": string;
        "37": string;
        "38": string;
        "39": string;
        "40": string;
        "41": string;
        "42": string;
        "43": string;
        "44": string;
        "45": string;
        "46": string;
        "47": string;
        "48": string;
        "49": string;
        "50": string;
        "51": string;
        "52": string;
        "53": string;
        "54": string;
        "55": string;
        "56": string;
        "57": string;
        "58": string;
        "59": string;
        "60": string;
        "61": string;
        "62": string;
        "63": string;
        "64": string;
        "65": string;
        "66": string;
        "67": string;
        "68": string;
        "69": string;
        "70": string;
        "71": string;
        "72": string;
        "73": string;
        "74": string;
        "75": string;
        "76": string;
        "77": string;
        "78": string;
        "79": string;
        "80": string;
        "81": string;
        "82": string;
        "83": string;
        "84": string;
        "85": string;
        "86": string;
        "87": string;
        "88": string;
        "89": string;
        "90": string;
        "91": string;
        "92": string;
        "93": string;
        "94": string;
        "95": string;
        "96": string;
        "97": string;
        "98": string;
        "99": string;
        "100": string;
        "101": string;
        "102": string;
        "103": string;
        "104": string;
        "105": string;
        "106": string;
        "107": string;
        "108": string;
        "109": string;
        "110": string;
        "111": string;
        "112": string;
    }

    interface EConfirmationMethod extends Record<string | number, string | number> {
        None: number;
        Email: number;
        MobileApp: number;
        "0": string;
        "1": string;
        "2": string;
    }

    interface ETradeStatus extends Record<string | number, string | number> {
        /** 0 - Trade has just been accepted/confirmed, but no work has been done yet. */
        Init: number;
        /** 1 - Steam is about to start committing the trade. */
        PreCommitted: number;
        /** 2 - The items have been exchanged. */
        Committed: number;
        /** 3 - All work is finished. */
        Complete: number;
        /** 4 - Something went wrong after Init, but before Committed, and the trade has been rolled back. */
        Failed: number;
        /** 5 - A support person rolled back the trade for one side. */
        PartialSupportRollback: number;
        /** 6 - A support person rolled back the trade for both sides. */
        FullSupportRollback: number;
        /** 7 - A support person rolled back the trade for some set of items. */
        SupportRollback_Selective: number;
        /** 8 - We tried to roll back the trade when it failed, but haven't managed to do that for all items yet. */
        RollbackFailed: number;
        /** 9 - We tried to roll back the trade, but some failure didn't go away and we gave up. */
        RollbackAbandoned: number;
        /** 10 - Trade is in escrow. */
        InEscrow: number;
        /** 11 - A trade in escrow was rolled back  */
        EscrowRollback: number;
        "0": string;
        "1": string;
        "2": string;
        "3": string;
        "4": string;
        "5": string;
        "6": string;
        "7": string;
        "8": string;
        "9": string;
        "10": string;
        "11": string;
    }

    type EResultError = Error & { eresult?: EResult };

    type InventoryCallback = (
        err: Error | null,
        inventory: CEconItem[],
        currencies: CEconItem[],
    ) => void;

    type OfferCallback = (
        err: EResultError | null,
        sent: TradeOffer[],
        received: TradeOffer[],
    ) => void;

    interface TradeOfferManagerEvents {
        /**
         * Emitted when polling detects a new trade offer sent to us. Only emitted if polling is enabled.
         *
         * @param offer A TradeOffer object for the newly-received offer
         */
        newOffer: (offer: TradeOffer) => void;

        /**
         * Emitted when an offer we sent changes state. This might mean that it was accepted/declined by the other party, that we cancelled it, or that we confirmed a pending offer via email.
         * Only emitted if polling is enabled.
         *
         * @param offer A TradeOffer object for the changed offer
         * @param oldState The previous known ETradeOfferState of the offer
         */
        sentOfferChanged: (offer: TradeOffer, oldState: number) => void;

        /**
         * Emitted when the manager automatically cancels an offer due to either your cancelTime constructor option or your cancelOfferCount constructor option. sentOfferChanged will also be
         * emitted on next poll.
         *
         * @param offer TradeOffer object for the canceled offer
         * @param reason A string containing the reason why it was canceled ("cancelTime" - The cancelTime timeout was reached, "cancelOfferCount" - The cancelOfferCount limit was reached)
         */
        sentOfferCanceled: (offer: TradeOffer, reason: "cancelTime" | "cancelOfferCount") => void;

        /**
         * Emitted when the manager automatically cancels an offer due to your pendingCancelTime constructor option. sentOfferChanged will also be emitted on next poll.
         *
         * @param offer A TradeOffer object for the canceled offer
         */
        sentPendingOfferCanceled: (offer: TradeOffer) => void;

        /**
         * Emitted when the manager finds a trade offer that was sent by us, but that wasn't sent via node-steam-tradeoffer-manager (i.e. it's not in the poll data, so this will emit for
         * all sent offers on every startup if you don't restore poll data).
         *
         * You could use this to cancel offers that error when you call send() but actually go through later, because of how awful Steam is.
         *
         * @param offer A TradeOffer object for the offer that was sent
         */
        unknownOfferSent: (offer: TradeOffer) => void;

        /**
         * Emitted when an offer we received changes state. This might mean that it was cancelled by the other party, or that we accepted/declined it. Only emitted if polling is enabled.
         *
         * @param offer A TradeOffer object for the changed offer
         * @param oldState The previous known ETradeOfferState of the offer
         */
        receivedOfferChanged: (offer: TradeOffer, oldState: number) => void;

        /**
         * Emitted when polling reveals that we have a new trade offer that was created from a real-time trade session that requires confirmation. See real-time trades for more information.
         *
         * @param offer A TradeOffer object for the offer that needs to be confirmed
         */
        realTimeTradeConfirmationRequired: (offer: TradeOffer) => void;

        /**
         * Emitted when polling reveals that a trade offer that was created from a real-time trade is now Accepted, meaning that the trade has completed. See real-time trades for more information.
         *
         * @param offer A TradeOffer object for the offer that has completed
         */
        realTimeTradeCompleted: (offer: TradeOffer) => void;

        /**
         * Emitted when there's a problem polling the API. You can use this to alert users that Steam is currently down or acting up, if you wish.
         *
         * @param err An Error object
         */
        pollFailure: (err: Error) => void;

        /**
         * Emitted when a poll succeeds.
         */
        pollSuccess: () => void;

        /**
         * Emitted when new poll data is available.
         *
         * @param data The new poll data
         */
        pollData: (data: any) => void;

        /**
         * Emitted whenever a getOffers call succeeds, regardless of the source of the call. Note that if filter is EOfferFilter.ActiveOnly then there may have been a historical
         * cutoff provided so there may also be some historical offers present in the output.
         *
         * @param filter The EOfferFilter value that was used to get this list
         * @param sent An array of TradeOffer objects for offers we sent
         * @param received An array of TradeOffer objects for offers we received
         */
        offerList: (filter: number, sent: TradeOffer[], received: TradeOffer[]) => void;
    }

    interface TradeOfferManagerOptions {
        steam?: Steam.SteamClient | SteamUser;
        community?: SteamCommunity;
        domain?: string;
        language?: string;
        pollInterval?: number;
        cancelTime?: number;
        pendingCancelTime?: number;
        cancelOfferCount?: number;
        cancelOfferCountMinAge?: number;
        globalAssetCache?: boolean;
        assetCacheMaxItems?: number;
        assetCacheGcInterval?: number;
        pollData?: any;
        dataDirectory?: string | null;
        gzipData?: boolean;
        savePollData?: boolean;
    }
}
