// Type definitions for steam-tradeoffer-manager 2.10
// Project: https://github.com/DoctorMcKay/node-steam-tradeoffer-manager
// Definitions by: kldzj <https://github.com/kldzj>, Kyle Smith <https://github.com/kjsmita6>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import type { EventEmitter } from 'events';
import Steam = require('steam');
import SteamID = require('steamid');
import SteamUser = require('steam-user');
import SteamCommunity = require('steamcommunity');
import CEconItem = require('steamcommunity/classes/CEconItem');
import FileManager = require('file-manager');

export = TradeOfferManager;

declare class TradeOfferManager extends EventEmitter {
    constructor(options: TradeOfferManagerOptions);

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
    getOffer(id: number | string, callback: (err: EResultError | null, offer: TradeOffer) => void): void;

    /**
     * Retrieves a list of trade offers matching specific criteria. As of v1.1.0, on failure, the err object may contain an eresult property.
     *
     * @param filter A value from EOfferFilter
     * @param callback Called on completion with an Error on failure (null on success), an array of TradeOffer objects for offers sent by you matching the filter, and an array of
     * TradeOffer objects for offers received by you matching the filter.
     */
    getOffers(filter: number, callback: (err: EResultError | null, sent: TradeOffer[], received: TradeOffer[]) => void): void;

    /**
     * Retrieves a list of trade offers matching specific criteria. As of v1.1.0, on failure, the err object may contain an eresult property.
     *
     * @param filter A value from EOfferFilter
     * @param historicalCutoff If filter is ActiveOnly and this is a Date object in the past, then offers which are either active or have a modification date after this date will be returned.
     * Omit or pass null if filter is not ActiveOnly or if you only wish to get offers in Active state.
     * @param callback Called on completion with an Error on failure (null on success), an array of TradeOffer objects for offers sent by you matching the filter, and an array of TradeOffer
     * objects for offers received by you matching the filter.
     */
    getOffers(filter: number, historicalCutoff: Date | null, callback: (err: EResultError | null, sent: TradeOffer[], received: TradeOffer[]) => void): void;

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
    getInventoryContents(appid: number, contextid: number, tradableOnly: boolean, callback: InventoryCallback): void;

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
    getUserInventoryContents(steamID: SteamID | string, appid: number, contextid: number, tradableOnly: boolean, callback: InventoryCallback): void;

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
    loadInventory(appid: number, contextid: number, tradableOnly: boolean, callback: InventoryCallback): void;

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
    loadUserInventory(steamID: SteamID | string, appid: number, contextid: number, tradableOnly: boolean, callback: InventoryCallback): void;

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
    getOffersContainingItem(items: CEconItem | CEconItem[], includeInactive: boolean, callback: OfferCallback): void;

    /**
     * Finds offers which contain the given item(s). Any offer which contains at least one item you passed in will be returned. Might be useful to avoid sending duplicate offers,
     * or to cancel previous ones.
     *
     * @param items Either a single item object (with appid, contextid, and assetid/id properties) or an array of item objects
     * @param callback Called on completion with an Error on failure (null on success), an array of TradeOffer objects for offers you sent which contain the item(s),
     * and an array of TradeOffer objects for offers you received which contain the item(s)
     */
    getOffersContainingItem(items: CEconItem | CEconItem[], callback: OfferCallback): void;

    /**
     * Immediately performs a poll. Can be used even if timed polling is disabled to poll on your own schedule. Don't worry about spamming this method,
     * node-steam-tradeoffer-manager will automatically limit polls to at most one per second.
     */
    doPoll(): void;

    on<T extends keyof TradeOfferManagerEvents>(eventType: T, callback: TradeOfferManagerEvents[T]): this;

    // Static constants
    static readonly ETradeOfferState: TradeOfferManager.ETradeOfferState;
    static readonly EOfferFilter: TradeOfferManager.EOfferFilter;
    static readonly EResult: TradeOfferManager.EResult;
    static readonly EConfirmationMethod: TradeOfferManager.EConfirmationMethod;
    static readonly ETradeStatus: TradeOfferManager.ETradeStatus;
    static readonly SteamID: typeof SteamID;
}

type EResultError = Error & { eresult?: TradeOfferManager.EResult; };

type OfferCallback = (
    err: EResultError | null,
    sent: TradeOffer[],
    received: TradeOffer[]
) => void;

type InventoryCallback = (
    err: Error | null,
    inventory: CEconItem[],
    currencies: CEconItem[]
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
    sentOfferCanceled: (offer: TradeOffer, reason: 'cancelTime' | 'cancelOfferCount') => void;

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

/**
 * TradeOffer is a class which represents an individual trade offer sent or received by your account. It cannot be instantiated directly, it must be created using
 * TradeOfferManager#createOffer, TradeOfferManager#getOffer, or TradeOfferManager#getOffers.
 */
declare class TradeOffer {
    private constructor(manager: TradeOfferManager, partner: SteamID, token: string);
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
    getPartnerInventoryContents(appid: number, contextid: number, callback: InventoryCallback): void;

    /**
     * Gets the contents of your trading partner's inventory for a particular app and context.
     * @deprecated Use getPartnerInventoryContents instead.
     */
    loadPartnerInventory(appid: number, contextid: number, callback: InventoryCallback): void;

    /**
     * Adds a given item to a new trade offer. The item object should be in the same format as is returned by the Steam inventory.
     *
     * Returns true if the item wasn't already in the offer and so was added successfully, or false if it was already in the offer.
     *
     * As trade offers are created locally, this method does not involve any networking and returns immediately with no callback.
     */
    addMyItem(item: CEconItem): boolean;

    /**
     * Convenience method which simply calls addMyItem for each item in the array. Returns the number of items that were successfully added.
     */
    addMyItems(items: CEconItem[]): number;

    /**
     * Removes an item from your side of the trade offer. Returns true if the item was found and removed successfully, or false if the item wasn't found in the offer.
     *
     * As trade offers are created locally, this method does not involve any networking and returns immediately with no callback.
     */
    removeMyItem(item: CEconItem): boolean;

    /**
     * Convenience method which simply calls removeMyItem for each item in the array. Returns the number of items that were successfully removed.
     */
    removeMyItems(items: CEconItem[]): number;

    /**
     * Same as addMyItem, but for the partner's side of the trade.
     */
    addTheirItem(item: CEconItem): boolean;

    /**
     * Convenience method which simply calls addTheirItem for each item in the array. Returns the number of items that were successfully added.
     */
    addTheirItems(items: CEconItem[]): number;

    /**
     * Removes an item from the other side of the trade offer. Returns true if the item was found and removed successfully, or false if the item wasn't found in the offer.
     *
     * As trade offers are created locally, this method does not involve any networking and returns immediately with no callback.
     */
    removeTheirItem(item: CEconItem): boolean;

    /**
     * Convenience method which simply calls removeTheirItem for each item in the array. Returns the number of items that were successfully removed.
     */
    removeTheirItems(items: CEconItem[]): number;

    /**
     * Returns true if the given item is in this offer, or false if not.
     */
    containsItem(item: CEconItem): boolean;

    /**
     * Sets this unsent offer's message. Messages are limited by Steam to 128 characters.
     */
    setMessage(message: string): void;

    /**
     * Sets this unsent offer's access token, which is needed to send trade offers to non-friends. This token will be used to send the offer, and then will be discarded.
     */
    setToken(token: string): void;

    /**
     * Gets data about both users in this trade. May be called for offers that meet one of these criteria:
     *
     * * Created by you, unsent, and you're friends with the other user
     * * Created by you, unsent, and you supplied the other user's correct trade token (either in the constructor or with setToken)
     * * Created by them, sent, and Active
     *
     * If there was an error and the offer was created by you and is unsent, then the error might describe a reason why you can't trade with the other user at all
     * (e.g. they're trade banned, wrong trade token, they're on a trade cooldown, etc). The error might also be something else, like an HTTP error.
     *
     * @param callback Contains an Error on failure (null on success), an object containing your user data, and an object containing the user oither's data
     */
    getUserDetails(callback: (err: Error | null, me: UserDetails, them: UserDetails) => void): void;

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
    send(callback: (err: (Error & { cause?: 'TradeBan' | 'NewDevice' | 'TargetCannotTrade' | 'OfferLimitExceeded' | 'ItemServerUnavailable'; } | null), status: 'pending' | 'sent') => void): void;

    /**
     * If this trade offer was sent by us, cancels it. If it was sent to us, declines it. As of v1.1.0, on failure, the err object may contain an eresult property.
     */
    cancel(callback: (err: EResultError | null) => void): void;

    /**
     * Alias of cancel
     */
    decline(callback: (err: EResultError | null) => void): void;

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
    accept(
        skipStateUpdate?: boolean,
        callback?: (err: (EResultError & { cause?: 'TradeBan' | 'NewDevice' | 'TargetCannotTrade'; }) | null, status: 'pending' | 'accepted' | 'escrow') => void,
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

interface UserDetails {
    personaName: string;
    contexts: any;
    escrowDays: number;
    probation?: boolean;
    avatarIcon: string;
    avatarMedium: string;
    avatarFull: string;
}

type ExchangeDetailsCallback = (
    err: Error | null,
    status: TradeOfferManager.ETradeStatus,
    tradeInitTime: Date,
    receivedItems: TradeOfferManager.MEconItemExchange[],
    sentItems: TradeOfferManager.MEconItemExchange[],
) => void;

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
}
