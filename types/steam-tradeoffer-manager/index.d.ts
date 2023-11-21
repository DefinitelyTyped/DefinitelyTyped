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

    interface ETradeOfferState {
        /* Invalid. */
        "Invalid": 1;
        /* This trade offer has been sent, neither party has acted on it yet. */
        "Active": 2;
        /* The trade offer was accepted by the recipient and items were exchanged. */
        "Accepted": 3;
        /* The recipient made a counter offer */
        "Countered": 4;
        /* The trade offer was not accepted before the expiration date */
        "Expired": 5;
        /* The sender cancelled the offer */
        "Canceled": 6;
        /* The recipient declined the offer */
        "Declined": 7;
        /* Some of the items in the offer are no longer available (indicated by the missing flag in the output) */
        "InvalidItems": 8;
        /* The offer hasn't been sent yet and is awaiting further confirmation */
        "CreatedNeedsConfirmation": 9;
        /* Either party canceled the offer via email/mobile confirmation */
        "CanceledBySecondFactor": 10;
        /* The trade has been placed on hold */
        "InEscrow": 11;

        "1": "Invalid";
        "2": "Active";
        "3": "Accepted";
        "4": "Countered";
        "5": "Expired";
        "6": "Canceled";
        "7": "Declined";
        "8": "InvalidItems";
        "9": "CreatedNeedsConfirmation";
        "10": "CanceledBySecondFactor";
        "11": "InEscrow";
    }

    interface EOfferFilter {
        ActiveOnly: 1;
        HistoricalOnly: 2;
        All: 3;
    }

    interface EResult {
        Invalid: 0;
        OK: 1;
        Fail: 2;
        NoConnection: 3;
        InvalidPassword: 5;
        LoggedInElsewhere: 6;
        InvalidProtocolVer: 7;
        InvalidParam: 8;
        FileNotFound: 9;
        Busy: 10;
        InvalidState: 11;
        InvalidName: 12;
        InvalidEmail: 13;
        DuplicateName: 14;
        AccessDenied: 15;
        Timeout: 16;
        Banned: 17;
        AccountNotFound: 18;
        InvalidSteamID: 19;
        ServiceUnavailable: 20;
        NotLoggedOn: 21;
        Pending: 22;
        EncryptionFailure: 23;
        InsufficientPrivilege: 24;
        LimitExceeded: 25;
        Revoked: 26;
        Expired: 27;
        AlreadyRedeemed: 28;
        DuplicateRequest: 29;
        AlreadyOwned: 30;
        IPNotFound: 31;
        PersistFailed: 32;
        LockingFailed: 33;
        LogonSessionReplaced: 34;
        ConnectFailed: 35;
        HandshakeFailed: 36;
        IOFailure: 37;
        RemoteDisconnect: 38;
        ShoppingCartNotFound: 39;
        Blocked: 40;
        Ignored: 41;
        NoMatch: 42;
        AccountDisabled: 43;
        ServiceReadOnly: 44;
        AccountNotFeatured: 45;
        AdministratorOK: 46;
        ContentVersion: 47;
        TryAnotherCM: 48;
        PasswordRequiredToKickSession: 49;
        AlreadyLoggedInElsewhere: 50;
        Suspended: 51;
        Cancelled: 52;
        DataCorruption: 53;
        DiskFull: 54;
        RemoteCallFailed: 55;
        PasswordNotSet: 56;
        PasswordUnset: 56;
        ExternalAccountUnlinked: 57;
        PSNTicketInvalid: 58;
        ExternalAccountAlreadyLinked: 59;
        RemoteFileConflict: 60;
        IllegalPassword: 61;
        SameAsPreviousValue: 62;
        AccountLogonDenied: 63;
        CannotUseOldPassword: 64;
        InvalidLoginAuthCode: 65;
        AccountLogonDeniedNoMailSent: 66;
        AccountLogonDeniedNoMail: 66;
        HardwareNotCapableOfIPT: 67;
        IPTInitError: 68;
        ParentalControlRestricted: 69;
        FacebookQueryError: 70;
        ExpiredLoginAuthCode: 71;
        IPLoginRestrictionFailed: 72;
        AccountLocked: 73;
        AccountLockedDown: 73;
        AccountLogonDeniedVerifiedEmailRequired: 74;
        NoMatchingURL: 75;
        BadResponse: 76;
        RequirePasswordReEntry: 77;
        ValueOutOfRange: 78;
        UnexpectedError: 79;
        Disabled: 80;
        InvalidCEGSubmission: 81;
        RestrictedDevice: 82;
        RegionLocked: 83;
        RateLimitExceeded: 84;
        AccountLogonDeniedNeedTwoFactorCode: 85;
        AccountLoginDeniedNeedTwoFactor: 85;
        ItemOrEntryHasBeenDeleted: 86;
        ItemDeleted: 86;
        AccountLoginDeniedThrottle: 87;
        TwoFactorCodeMismatch: 88;
        TwoFactorActivationCodeMismatch: 89;
        AccountAssociatedToMultiplePlayers: 90;
        AccountAssociatedToMultiplePartners: 90;
        NotModified: 91;
        NoMobileDeviceAvailable: 92;
        NoMobileDevice: 92;
        TimeIsOutOfSync: 93;
        TimeNotSynced: 93;
        SMSCodeFailed: 94;
        TooManyAccountsAccessThisResource: 95;
        AccountLimitExceeded: 95;
        AccountActivityLimitExceeded: 96;
        PhoneActivityLimitExceeded: 97;
        RefundToWallet: 98;
        EmailSendFailure: 99;
        NotSettled: 100;
        NeedCaptcha: 101;
        GSLTDenied: 102;
        GSOwnerDenied: 103;
        InvalidItemType: 104;
        IPBanned: 105;
        GSLTExpired: 106;
        InsufficientFunds: 107;
        TooManyPending: 108;
        NoSiteLicensesFound: 109;
        WGNetworkSendExceeded: 110;
        AccountNotFriends: 111;
        LimitedUserAccount: 112;
        CantRemoveItem: 113;
        AccountHasBeenDeleted: 114;
        AccountHasAnExistingUserCancelledLicense: 115;
        DeniedDueToCommunityCooldown: 116;
        NoLauncherSpecified: 117;
        MustAgreeToSSA: 118;
        ClientNoLongerSupported: 119;
        LauncherMigrated: 119;
        "0": "Invalid";
        "1": "OK";
        "2": "Fail";
        "3": "NoConnection";
        "5": "InvalidPassword";
        "6": "LoggedInElsewhere";
        "7": "InvalidProtocolVer";
        "8": "InvalidParam";
        "9": "FileNotFound";
        "10": "Busy";
        "11": "InvalidState";
        "12": "InvalidName";
        "13": "InvalidEmail";
        "14": "DuplicateName";
        "15": "AccessDenied";
        "16": "Timeout";
        "17": "Banned";
        "18": "AccountNotFound";
        "19": "InvalidSteamID";
        "20": "ServiceUnavailable";
        "21": "NotLoggedOn";
        "22": "Pending";
        "23": "EncryptionFailure";
        "24": "InsufficientPrivilege";
        "25": "LimitExceeded";
        "26": "Revoked";
        "27": "Expired";
        "28": "AlreadyRedeemed";
        "29": "DuplicateRequest";
        "30": "AlreadyOwned";
        "31": "IPNotFound";
        "32": "PersistFailed";
        "33": "LockingFailed";
        "34": "LogonSessionReplaced";
        "35": "ConnectFailed";
        "36": "HandshakeFailed";
        "37": "IOFailure";
        "38": "RemoteDisconnect";
        "39": "ShoppingCartNotFound";
        "40": "Blocked";
        "41": "Ignored";
        "42": "NoMatch";
        "43": "AccountDisabled";
        "44": "ServiceReadOnly";
        "45": "AccountNotFeatured";
        "46": "AdministratorOK";
        "47": "ContentVersion";
        "48": "TryAnotherCM";
        "49": "PasswordRequiredToKickSession";
        "50": "AlreadyLoggedInElsewhere";
        "51": "Suspended";
        "52": "Cancelled";
        "53": "DataCorruption";
        "54": "DiskFull";
        "55": "RemoteCallFailed";
        "56": "PasswordUnset";
        "57": "ExternalAccountUnlinked";
        "58": "PSNTicketInvalid";
        "59": "ExternalAccountAlreadyLinked";
        "60": "RemoteFileConflict";
        "61": "IllegalPassword";
        "62": "SameAsPreviousValue";
        "63": "AccountLogonDenied";
        "64": "CannotUseOldPassword";
        "65": "InvalidLoginAuthCode";
        "66": "AccountLogonDeniedNoMail";
        "67": "HardwareNotCapableOfIPT";
        "68": "IPTInitError";
        "69": "ParentalControlRestricted";
        "70": "FacebookQueryError";
        "71": "ExpiredLoginAuthCode";
        "72": "IPLoginRestrictionFailed";
        "73": "AccountLockedDown";
        "74": "AccountLogonDeniedVerifiedEmailRequired";
        "75": "NoMatchingURL";
        "76": "BadResponse";
        "77": "RequirePasswordReEntry";
        "78": "ValueOutOfRange";
        "79": "UnexpectedError";
        "80": "Disabled";
        "81": "InvalidCEGSubmission";
        "82": "RestrictedDevice";
        "83": "RegionLocked";
        "84": "RateLimitExceeded";
        "85": "AccountLoginDeniedNeedTwoFactor";
        "86": "ItemDeleted";
        "87": "AccountLoginDeniedThrottle";
        "88": "TwoFactorCodeMismatch";
        "89": "TwoFactorActivationCodeMismatch";
        "90": "AccountAssociatedToMultiplePartners";
        "91": "NotModified";
        "92": "NoMobileDevice";
        "93": "TimeNotSynced";
        "94": "SMSCodeFailed";
        "95": "AccountLimitExceeded";
        "96": "AccountActivityLimitExceeded";
        "97": "PhoneActivityLimitExceeded";
        "98": "RefundToWallet";
        "99": "EmailSendFailure";
        "100": "NotSettled";
        "101": "NeedCaptcha";
        "102": "GSLTDenied";
        "103": "GSOwnerDenied";
        "104": "InvalidItemType";
        "105": "IPBanned";
        "106": "GSLTExpired";
        "107": "InsufficientFunds";
        "108": "TooManyPending";
        "109": "NoSiteLicensesFound";
        "110": "WGNetworkSendExceeded";
        "111": "AccountNotFriends";
        "112": "LimitedUserAccount";
    }

    interface EConfirmationMethod {
        None: 0;
        Email: 1;
        MobileApp: 2;

        "0": "None";
        "1": "Email";
        "2": "MobileApp";
    }

    interface ETradeStatus {
        /* Trade has just been accepted/confirmed, but no work has been done yet */
        Init: 0;
        /* Steam is about to start committing the trade */
        PreCommitted: 1;
        /* The items have been exchanged */
        Committed: 2;
        /* All work is finished */
        Complete: 3;
        /* Something went wrong after Init, but before Committed, and the trade has been rolled back */
        Failed: 4;
        /* A support person rolled back the trade for one side */
        PartialSupportRollback: 5;
        /* A support person rolled back the trade for both sides */
        FullSupportRollback: 6;
        /* A support person rolled back the trade for some set of items */
        SupportRollback_Selective: 7;
        /* We tried to roll back the trade when it failed, but haven't managed to do that for all items yet */
        RollbackFailed: 8;
        /* We tried to roll back the trade, but some failure didn't go away and we gave up */
        RollbackAbandoned: 9;
        /* Trade is in escrow */
        InEscrow: 10;
        /* A trade in escrow was rolled back */
        EscrowRollback: 11;

        "0": "Init";
        "1": "PreCommitted";
        "2": "Committed";
        "3": "Complete";
        "4": "Failed";
        "5": "PartialSupportRollback";
        "6": "FullSupportRollback";
        "7": "SupportRollback_Selective";
        "8": "RollbackFailed";
        "9": "RollbackAbandoned";
        "10": "InEscrow";
        "11": "EscrowRollback";
    }

    type EResultError = Error & {
        eresult?: EResult;
    };

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
