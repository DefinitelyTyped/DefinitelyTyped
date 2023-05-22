import TradeOfferManager = require("../../index");
import SteamID = require('steamid');
import CEconItem = require('steamcommunity/classes/CEconItem');

export = TradeOffer;

/**
 * TradeOffer is a class which represents an individual trade offer sent or received by your account. It cannot be instantiated directly, it must be created using
 * TradeOfferManager#createOffer, TradeOfferManager#getOffer, or TradeOfferManager#getOffers.
 */
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
    getPartnerInventoryContents(appid: number, contextid: number, callback: TradeOfferManager.InventoryCallback): void;

    /**
     * Gets the contents of your trading partner's inventory for a particular app and context.
     * @deprecated Use getPartnerInventoryContents instead.
     */
    loadPartnerInventory(appid: number, contextid: number, callback: TradeOfferManager.InventoryCallback): void;

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
    getUserDetails(callback: (err: Error | null, me: TradeOffer.UserDetails, them: TradeOffer.UserDetails) => void): void;

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
    cancel(callback: (err: TradeOfferManager.EResultError | null) => void): void;

    /**
     * Alias of cancel
     */
    decline(callback: (err: TradeOfferManager.EResultError | null) => void): void;

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
        callback?: (err: (TradeOfferManager.EResultError & { cause?: 'TradeBan' | 'NewDevice' | 'TargetCannotTrade'; }) | null, status: 'pending' | 'accepted' | 'escrow') => void,
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
    getExchangeDetails(callback: TradeOffer.ExchangeDetailsCallback): void;
    getExchangeDetails(getDetailsIfFailed: boolean, callback: TradeOffer.ExchangeDetailsCallback): void;
}

declare namespace TradeOffer {
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
}
