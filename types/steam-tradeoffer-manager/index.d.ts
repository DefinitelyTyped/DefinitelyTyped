// Type definitions for steam-tradeoffer-manager 2.10
// Project: https://github.com/DoctorMcKay/node-steam-tradeoffer-manager
// Definitions by: kldzj <https://github.com/kldzj>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import type { EventEmitter } from 'events';
import type Steam = require('steam');
import type SteamID = require('steamid');
import type SteamUser = require('steam-user');
import type SteamCommunity = require('steamcommunity');
import type CEconItem = require('steamcommunity/classes/CEconItem');
import type FileManager = require('file-manager');

export = TradeOfferManager;

declare class TradeOfferManager extends EventEmitter {
    constructor(options: TradeOfferManagerOptions);

    pollInterval: number;
    cancelTime: number;
    cancelOfferCount: number;
    cancelOfferCountMinAge: number;
    pendingCancelTime: number;
    pollData: any;
    apiKey: string;
    steamID: SteamID;
    storage: FileManager;

    setCookies(cookies: string[], callback?: (err: Error | null) => void): void;
    setCookies(cookies: string[], familyViewPin: string, callback?: (err: Error | null) => void): void;

    shutdown(): void;
    parentalUnlock(pin: string, callback?: (err: Error | null) => void): void;

    /**
     * Get the contents of a user's specific inventory context.
     */
    getInventoryContents(
        appid: number,
        contextid: number,
        tradableOnly: boolean,
        callback: InventoryContentsCallback,
    ): void;

    /**
     * Get the contents of a user's specific inventory context.
     */
    getUserInventoryContents(
        sid: SteamID | string,
        appid: number,
        contextid: number,
        tradableOnly: boolean,
        callback: InventoryContentsCallback,
    ): void;

    /**
     * Get the contents of your own specific inventory context.
     * @deprecated Use getInventoryContents instead
     */
    loadInventory(appid: number, contextid: number, tradableOnly: boolean, callback: InventoryContentsCallback): void;

    /**
     * Get the contents of a user's specific inventory context.
     * @deprecated Use getUserInventoryContents instead
     */
    loadUserInventory(
        sid: SteamID | string,
        appid: number,
        contextid: number,
        tradableOnly: boolean,
        callback: InventoryContentsCallback,
    ): void;

    /**
     * Get the token parameter from your account's Trade URL
     */
    getOfferToken(callback: (err: Error | null, token?: string) => void): void;

    getOffersContainingItems(items: CEconItem | CEconItem[], callback: OffersContainingCallback): void;
    getOffersContainingItems(
        items: CEconItem | CEconItem[],
        includeInactive: boolean,
        callback: OffersContainingCallback,
    ): void;

    /**
     * Create a new TradeOffer object.
     */
    createOffer(partner: SteamID | string, token?: string): TradeOffer;

    /**
     * Get a trade offer that is already sent (either by you or to you)
     */
    getOffer(id: number | string, callback: (err: Error | null, offer: TradeOffer) => void): void;

    /**
     * Get a list of trade offers either sent to you or by you
     */
    getOffers(filter: number, callback: OffersContainingCallback): void;
    getOffers(filter: number, historicalCutoff: Date, callback: OffersContainingCallback): void;

    on<T extends keyof TradeOfferManagerEvents>(eventType: T, callback: TradeOfferManagerEvents[T]): this;

    // Static constants
    static readonly ETradeOfferState: ETradeOfferState;
    static readonly EOfferFilter: EOfferFilter;
    static readonly EResult: EResult;
    static readonly EConfirmationMethod: EConfirmationMethod;
    static readonly ETradeStatus: ETradeStatus;
    static readonly SteamID: typeof SteamID;
}

interface TradeOfferManagerEvents {
    newOffer: (offer: TradeOffer) => void;
    sentOfferChanged: (offer: TradeOffer, oldState: number) => void;
    sentOfferCanceled: (offer: TradeOffer, reason: 'cancelTime' | 'cancelOfferCount') => void;
    sentPendingOfferCanceled: (offer: TradeOffer) => void;
    unknownOfferSent: (offer: TradeOffer) => void;
    receivedOfferChanged: (offer: TradeOffer, oldState: number) => void;
    realTimeTradeConfirmationRequired: (offer: TradeOffer) => void;
    realTimeTradeCompleted: (offer: TradeOffer) => void;
    pollFailure: (err: Error) => void;
    pollSuccess: () => void;
    pollData: (data: any) => void;
    offerList: (filter: number, sent: TradeOffer[], received: TradeOffer[]) => void;
}

interface TradeOfferManagerOptions {
    steam?: Steam.SteamClient | SteamUser;
    community?: SteamCommunity;
    domain?: string;
    language?: string;
    pollInterval?: number;
    cancelTime?: number;
    cancelOfferCount?: number;
    cancelOfferCountMinAge?: number;
    pendingCancelTime?: number;
    pollData?: any;
    globalAssetCache?: boolean;
    assetCacheMaxItems?: number;
    assetCacheGcInterval?: number;
    dataDirectory?: string | null;
    gzipData?: boolean;
    savePollData?: boolean;
}

type InventoryContentsCallback = (err: Error | null, inventory: CEconItem[], currencies: CEconItem[]) => void;

type OffersContainingCallback = (err: Error | null, sent: TradeOffer[], received: TradeOffer[]) => void;

declare class TradeOffer {
    constructor(manager: TradeOfferManager, partner: SteamID, token: string);
    readonly manager: TradeOfferManager;
    readonly id?: string;
    readonly partner: SteamID;
    readonly state: number;
    readonly message: string;
    readonly itemsToGive: CEconItem[];
    readonly itemsToReceive: CEconItem[];
    readonly isOurOffer: boolean;
    readonly tradeID?: string;
    readonly fromRealTimeTrade: boolean;
    readonly confirmationMethod: number;
    readonly rawJson: string;
    readonly created: Date;
    readonly updated: Date;
    readonly expires: Date;
    readonly escrowEnds: Date;

    /**
     * Checks if the offer is "glitched". Returns true (glitched) or false (not glitched).
     * An offer is considered "glitched" if it has been sent and either contains no items
     * (itemsToGive and itemsToReceive are both empty) or any item has an empty or undefined name.
     * Neither of these conditions can be met under normal, non-buggy Steam conditions.
     */
    isGlitched(): boolean;

    /**
     * Gets or sets any arbitrary data you wish to associate with a trade offer. This can be useful to give offers context.
     * This data is stored in poll data, so you will need to save and restore that if you want your offer data to persist
     * across app sessions.
     */
    data(key: string, value?: any): any;

    /**
     * Gets the contents of your trading partner's inventory for a particular app and context. Same difference from
     * loadPartnerInventory as there is between TradeOfferManager#getInventoryContents and TradeOfferManager#loadInventory.
     * See that documentation for more information.
     */
    getPartnerInventoryContents(appid: number, contextid: number, callback: InventoryContentsCallback): void;

    /**
     * Gets the contents of your trading partner's inventory for a particular app and context.
     * @deprecated Use getPartnerInventoryContents instead.
     */
    loadPartnerInventory(appid: number, contextid: number, callback: InventoryContentsCallback): void;

    /**
     * Adds a given item to a new trade offer. The item object should be in the same format as is returned by the Steam inventory.
     *
     * Returns true if the item wasn't already in the offer and so was added successfully, or false if it was already in the offer.
     *
     * As trade offers are created locally, this method does not involve any networking and returns immediately with no callback.
     */
    addItem(item: CEconItem | MEconItemAmount): boolean;

    /**
     * Convenience method which simply calls addMyItem for each item in the array. Returns the number of items that were successfully added.
     */
    addMyItems(items: Array<CEconItem | MEconItemAmount>): void;

    /**
     * Removes an item from your side of the trade offer. Returns true if the item was found and removed successfully, or false if the item wasn't found in the offer.
     *
     * As trade offers are created locally, this method does not involve any networking and returns immediately with no callback.
     */
    removeMyItem(item: CEconItem | MEconItemAmount): void;

    /**
     * Convenience method which simply calls removeMyItem for each item in the array. Returns the number of items that were successfully removed.
     */
    removeMyItems(items: Array<CEconItem | MEconItemAmount>): void;

    /**
     * Same as addMyItem, but for the partner's side of the trade.
     */
    addTheirItem(item: CEconItem | MEconItemAmount): boolean;

    /**
     * Convenience method which simply calls addTheirItem for each item in the array. Returns the number of items that were successfully added.
     */
    addTheirItems(items: Array<CEconItem | MEconItemAmount>): void;

    /**
     * Removes an item from the other side of the trade offer. Returns true if the item was found and removed successfully, or false if the item wasn't found in the offer.
     *
     * As trade offers are created locally, this method does not involve any networking and returns immediately with no callback.
     */
    removeTheirItem(item: CEconItem | MEconItemAmount): void;

    /**
     * Convenience method which simply calls removeTheirItem for each item in the array. Returns the number of items that were successfully removed.
     */
    removeTheirItems(items: Array<CEconItem | MEconItemAmount>): void;

    /**
     * Returns true if the given item is in this offer, or false if not.
     */
    containsItem(item: CEconItem | MEconItemAmount): boolean;

    /**
     * Sets this unsent offer's message. Messages are limited by Steam to 128 characters.
     */
    setMessage(message: string): void;

    /**
     * Sets this unsent offer's access token, which is needed to send trade offers to non-friends. This token will be used to send the offer, and then will be discarded.
     */
    setToken(token: string): void;

    /**
     * Sends a newly-created offer. Only works if this is an offer created with TradeOfferManager#createOffer which hasn't been
     * sent yet. When the callback fires, if successful, the offer's id parameter will be defined. All other parameters will be
     * defined with the module's best guess for their values. As of v1.1.0, on failure, the err object may contain an eresult
     * property. As of v1.3.0, on failure, the err object may contain a cause property which will be one of the following strings:
     *
     * - TradeBan - The trade partner is trade banned
     * - NewDevice - You've logged in from a new device and must wait to be able to trade
     * - TargetCannotTrade - The trade partner cannot trade due to Steam Guard, password reset, etc.
     * - OfferLimitExceeded - You have sent too many trade offers (5 per trade partner, 30 total)
     * - ItemServerUnavailable - Steam couldn't contact the item server for a game you're trying to trade items in
     */
    send(callback: (err: Error | null, status: 'pending' | 'sent') => void): void;

    /**
     * If this trade offer was sent by us, cancels it. If it was sent to us, declines it. As of v1.1.0, on failure, the err object may contain an eresult property.
     */
    cancel(callback: (err: Error | null) => void): void;

    /**
     * Alias of cancel
     */
    decline(callback: (err: Error | null) => void): void;

    /**
     * Accepts an offer that was sent to us. Once the callback fires, you can call getReceivedItems to get details about the items you received,
     * including their new assetids. As of v1.1.0, on failure, the err object may contain an eresult property. As of v1.3.0, on failure,
     * the err object may contain a cause property which will be one of TradeBan (if the partner is trade banned),
     * NewDevice (if you've logged in from a new device and must wait), or TargetCannotTrade (if the partner cannot trade due to Steam Guard, password reset, etc.).
     *
     * With the default value of false for skipStateUpdate, TradeOfferManager will query the trade offer's new status from the WebAPI
     * before calling your callback. This allows it to check whether the trade went into escrow or not, and the exact time when escrow will end for this offer.
     *
     * If this is not a concern for you, you may provide true for skipStateUpdate. This will bypass the extra request
     * (which may error out in some cases when acceptance succeeded), but status will be accepted instead of escrow if
     * the trade is placed on hold. The state property of the TradeOffer will also not be updated in this case.
     */
    accept(callback: (err: Error | null, status: 'pending' | 'accepted' | 'escrow') => void): void;
    accept(
        skipStateUpdate: boolean,
        callback: (err: Error | null, status: 'pending' | 'accepted' | 'escrow') => void,
    ): void;

    /**
     * Returns a new unsent TradeOffer object that contains the same items as this one. Same as TradeOffer#counter,
     * except sending this offer won't mark the original as Countered.
     */
    duplicate(): TradeOffer;

    /**
     * Returns a new unsent TradeOffer object that contains the same items as this one. Sending the new trade offer will
     * send a counter offer, and this offer will be marked as Countered.
     */
    counter(): TradeOffer;

    /**
     * Fetch the latest data for this offer from the WebAPI. When the callback is fired, if an error didn't occur then all
     * of this offer's properties will be updated with the newest values.
     */
    update(callback: (err: Error | null) => void): void;

    /**
     * Can be called on an accepted offer to retrieve item data about the items you received, including names, descriptions,
     * and new assetids. Will not include any actions (e.g. the CS:GO inspect link) unless getActions is true.
     */
    getReceivedItems(callback: (err: Error | null, items: CEconItem[]) => void): void;
    getReceivedItems(getActions: boolean, callback: (err: Error | null, items: CEconItem[]) => void): void;

    /**
     * Gets detailed information for the items exchanged in this trade, including old and new asset IDs. This can be called for any
     * trade offer that has a tradeID property defined that isn't null, including those that are in escrow or have failed.
     *
     * If you pass true to getDetailsIfFailed, it is vitally important that you check the status to be sure that the
     * trade hasn't failed or been rolled back before processing the trade as having completed.
     */
    getExchangeDetails(callback: ExchangeDetailsCallback): void;
    getExchangeDetails(getDetailsIfFailed: boolean, callback: ExchangeDetailsCallback): void;
}

type ExchangeDetailsCallback = (
    err: Error | null,
    status: number,
    tradeInitTime: Date,
    receivedItems: MEconItemExchange[],
    sentItems: MEconItemExchange[],
) => void;

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

interface MEconItem {
    assetid: string;
    appid: string;
    contextid: string;
}

interface MEconItemAmount extends MEconItem {
    amount: number;
}

interface ETradeOfferState extends Record<string | number, string | number> {
    Invalid: number;
    Active: number;
    Accepted: number;
    Countered: number;
    Expired: number;
    Canceled: number;
    Declined: number;
    InvalidItems: number;
    CreatedNeedsConfirmation: number;
    CanceledBySecondFactor: number;
    InEscrow: number;
    '1': string;
    '2': string;
    '3': string;
    '4': string;
    '5': string;
    '6': string;
    '7': string;
    '8': string;
    '9': string;
    '10': string;
    '11': string;
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
    '0': string;
    '1': string;
    '2': string;
    '3': string;
    '5': string;
    '6': string;
    '7': string;
    '8': string;
    '9': string;
    '10': string;
    '11': string;
    '12': string;
    '13': string;
    '14': string;
    '15': string;
    '16': string;
    '17': string;
    '18': string;
    '19': string;
    '20': string;
    '21': string;
    '22': string;
    '23': string;
    '24': string;
    '25': string;
    '26': string;
    '27': string;
    '28': string;
    '29': string;
    '30': string;
    '31': string;
    '32': string;
    '33': string;
    '34': string;
    '35': string;
    '36': string;
    '37': string;
    '38': string;
    '39': string;
    '40': string;
    '41': string;
    '42': string;
    '43': string;
    '44': string;
    '45': string;
    '46': string;
    '47': string;
    '48': string;
    '49': string;
    '50': string;
    '51': string;
    '52': string;
    '53': string;
    '54': string;
    '55': string;
    '56': string;
    '57': string;
    '58': string;
    '59': string;
    '60': string;
    '61': string;
    '62': string;
    '63': string;
    '64': string;
    '65': string;
    '66': string;
    '67': string;
    '68': string;
    '69': string;
    '70': string;
    '71': string;
    '72': string;
    '73': string;
    '74': string;
    '75': string;
    '76': string;
    '77': string;
    '78': string;
    '79': string;
    '80': string;
    '81': string;
    '82': string;
    '83': string;
    '84': string;
    '85': string;
    '86': string;
    '87': string;
    '88': string;
    '89': string;
    '90': string;
    '91': string;
    '92': string;
    '93': string;
    '94': string;
    '95': string;
    '96': string;
    '97': string;
    '98': string;
    '99': string;
    '100': string;
    '101': string;
    '102': string;
    '103': string;
    '104': string;
    '105': string;
    '106': string;
    '107': string;
    '108': string;
    '109': string;
    '110': string;
    '111': string;
    '112': string;
}

interface EConfirmationMethod extends Record<string | number, string | number> {
    None: number;
    Email: number;
    MobileApp: number;
    '0': string;
    '1': string;
    '2': string;
}

interface ETradeStatus extends Record<string | number, string | number> {
    Init: number;
    PreCommitted: number;
    Committed: number;
    Complete: number;
    Failed: number;
    PartialSupportRollback: number;
    FullSupportRollback: number;
    SupportRollback_Selective: number;
    RollbackFailed: number;
    RollbackAbandoned: number;
    InEscrow: number;
    EscrowRollback: number;
    '0': string;
    '1': string;
    '2': string;
    '3': string;
    '4': string;
    '5': string;
    '6': string;
    '7': string;
    '8': string;
    '9': string;
    '10': string;
    '11': string;
}
