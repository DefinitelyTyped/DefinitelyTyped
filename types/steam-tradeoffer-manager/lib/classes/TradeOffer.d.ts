import TradeOfferManager = require("../../index");
import SteamID = require("steamid");
import CEconItem = require("steamcommunity/classes/CEconItem");

export = TradeOffer;

/**
 * TradeOffer is a class which represents an individual trade offer sent or received by your account. It cannot be instantiated directly, it must be created using
 * TradeOfferManager#createOffer, TradeOfferManager#getOffer, or TradeOfferManager#getOffers.
 */
declare class TradeOffer {
    constructor(manager: TradeOfferManager, partner: SteamID, token: string);

    /**
     * The `TradeOfferManager` which owns this `TradeOffer`. If you want to get the SteamID of the bot account which sent/received this trade offer, use `offer.manager.steamID`.
     */
    readonly manager: TradeOfferManager;

    /**
     * The trade offer's unique numeric ID, represented as a string
     */
    readonly id?: string;

    /**
     * The other party in this offer, as a `SteamID` object
     */
    readonly partner: SteamID;

    /**
     * A value from the {@link TradeOfferManager.ETradeOfferState} enum
     */
    readonly state: number;

    /**
     * A message, possibly empty, included with the trade offer by its sender
     */
    readonly message: string;

    /**
     * An array of items to be given from your account should this offer be accepted
     * - If this offer has not yet been sent or was just sent, object in this array will not contain `classid` or `instanceid` properties, as it would had you loaded a sent offer
     */
    readonly itemsToGive: CEconItem[];

    /**
     * An array of items to be given from the other account and received by yours should this offer be accepted
     * - If this offer has not yet been sent or was just sent, object in this array will not contain `classid` or `instanceid` properties, as it would had you loaded a sent offer
     */
    readonly itemsToReceive: CEconItem[];

    /**
     * `true` if this offer was sent by you, `false` if you received it
     */
    readonly isOurOffer: boolean;

    /**
     * A numeric trade ID, represented as a string, if the offer was accepted. `null` otherwise. This value won't be very useful to you.
     */
    readonly tradeID?: string;

    /**
     * `true` if this trade offer was created automatically from a real-time trade that was committed, `false` if it was explicitly sent as a trade offer
     */
    readonly fromRealTimeTrade: boolean;

    /**
     * If this offer needs to be confirmed by you, this is a value from {@link TradeOfferManager.EConfirmationMethod}
     */
    readonly confirmationMethod: number;

    /**
     * The stringified raw JSON from the WebAPI from which this `TradeOffer` object was constructed
     */
    readonly rawJson: string;

    /**
     * A `Date` object representing when the trade offer was sent
     */
    readonly created: Date;

    /**
     * A `Date` object representing when the trade offer was last updated (equal to `created` if never updated)
     */
    readonly updated: Date;

    /**
     * A `Date` object representing when the trade offer will expire if not acted on
     */
    readonly expires: Date;

    /**
     * If this offer is in state `InEscrow` (11), this is a `Date` object representing when the offer should exit escrow
     */
    readonly escrowEnds: Date;

    /**
     * Checks if the offer is "glitched". Returns `true` (glitched) or `false` (not glitched).
     * An offer is considered "glitched" if it has been sent and either contains no items
     * (`itemsToGive` and `itemsToReceive` are both empty) or any item has an empty or undefined `name`.
     * Neither of these conditions can be met under normal, non-buggy Steam conditions.
     */
    isGlitched(): boolean;

    /**
     * Gets or sets any arbitrary data you wish to associate with a trade offer. This can be useful to give offers context. This data is stored in poll data,
     * so you will need to save and restore that if you want your offer data to persist across app sessions.
     *
     * Omit `value` to get the data, specify it to set. For example:
     * ```js
     * var offer = manager.createOffer('[U:1:46143802]');
     * console.log(offer.data('foo')); // undefined
     * offer.data('foo', 'bar');
     * console.log(offer.data('foo')); // bar
     * ```
     *
     * This offer data is permanently tied to the trade offer, so it can be accessed and updated anywhere the offer's object is available (e.g. when creating
     * an object, in an update event, or in getOffer). You can use this method before you send an offer, but any data you set will be discarded if the offer is
     * not sent and assigned an offer ID.
     *
     * Some data keys are special, and are used to modify the properties or options of a specific trade offer. These are:
     *
     * `cancelTime`
     *
     * Used to change the time after which the trade offer will be automatically canceled if not acted on by the other party. This can only be set for an offer
     * which we created, and only if the offer is either unsent or Active.
     *
     * Set to 0 to disable automatic cancellation, undefined to use the TradeOfferManager's cancelTime (default if not set), or any other numeric value to automatically
     * cancel the offer after that many milliseconds have passed after it was sent.
     *
     * Usage of this option is governed by the same rules as cancelTime in the TradeOfferManager's constructor (e.g. this is only effective if timed polling is enabled).
     *
     * @param key - A `string` containing the data key you wish to get/set
     * @param value - Any arbitrary data type that can be stringified using JSON.stringify. Using undefined will unset the value.
     */
    data(key: string, value?: any): any;

    /**
     * Gets the contents of your trading partner's inventory for a particular app and context. Same difference from `loadPartnerInventory` as there is between
     * {@link TradeOfferManager.getInventoryContents} and {@link TradeOfferManager.loadInventory}. See that documentation for more information.
     *
     * @param appid - The ID of the app for which you wish to load the inventory
     * @param contextid - The ID of the context within the app for which you wish to load the inventory
     * @param callback - A callback to be invoked when complete.
     * - `err` - An `Error` object on failure, `null` on success
     * - `inventory` - An array of the user's inventory items, as `EconItem` objects
     * - `currencies` - An array of the user's currency items, as `EconItem` objects
     */
    getPartnerInventoryContents(appid: number, contextid: number, callback: TradeOfferManager.InventoryCallback): void;

    /**
     * Gets the contents of your trading partner's inventory for a particular app and context.
     *
     * @param appid - The ID of the app for which you wish to load the inventory
     * @param contextid - The ID of the context within the app for which you wish to load the inventory
     * @param callback - A callback to be invoked when complete.
     * - `err` - An `Error` object on failure, `null` on success
     * - `inventory` - An array of the user's inventory items, as `EconItem` objects
     * - `currencies` - An array of the user's currency items, as `EconItem` objects
     * @deprecated Use getPartnerInventoryContents instead.
     */
    loadPartnerInventory(appid: number, contextid: number, callback: TradeOfferManager.InventoryCallback): void;

    /**
     * Adds a given item to a new trade offer. The item object should be in the same format as is returned by the Steam inventory.
     *
     * Returns `true` if the item wasn't already in the offer and so was added successfully, or `false` if it was already in the offer.
     *
     * As trade offers are created locally, this method does not involve any networking and returns immediately with no callback.
     *
     * @param item - An item object
     */
    addMyItem(item: CEconItem): boolean;

    /**
     * Convenience method which simply calls addMyItem for each item in the array. Returns the number of items that were successfully added.
     *
     * @param items - An array of item objects
     */
    addMyItems(items: CEconItem[]): number;

    /**
     * Removes an item from your side of the trade offer. Returns true if the item was found and removed successfully, or false if the item wasn't found in the offer.
     *
     * As trade offers are created locally, this method does not involve any networking and returns immediately with no callback.
     *
     * @param item - An item object
     */
    removeMyItem(item: CEconItem): boolean;

    /**
     * Convenience method which simply calls removeMyItem for each item in the array. Returns the number of items that were successfully removed.
     *
     * @param items - An array of item objects
     */
    removeMyItems(items: CEconItem[]): number;

    /**
     * Same as addMyItem, but for the partner's side of the trade.
     *
     * @param item - An item object
     */
    addTheirItem(item: CEconItem): boolean;

    /**
     * Convenience method which simply calls addTheirItem for each item in the array. Returns the number of items that were successfully added.
     *
     * @param items - An array of item objects
     */
    addTheirItems(items: CEconItem[]): number;

    /**
     * Removes an item from the other side of the trade offer. Returns true if the item was found and removed successfully, or false if the item wasn't found in the offer.
     *
     * As trade offers are created locally, this method does not involve any networking and returns immediately with no callback.
     *
     * @param item - An item object
     */
    removeTheirItem(item: CEconItem): boolean;

    /**
     * Convenience method which simply calls removeTheirItem for each item in the array. Returns the number of items that were successfully removed.
     *
     * @param items - An array of item objects
     */
    removeTheirItems(items: CEconItem[]): number;

    /**
     * Returns true if the given item is in this offer, or false if not.
     *
     * @param item - An item object containing `appid`, `contextid`, and `assetid`/`id` properties
     */
    containsItem(item: CEconItem): boolean;

    /**
     * Sets this unsent offer's message. Messages are limited by Steam to 128 characters.
     *
     * @param message - The new message you want to send with this offer. Can be empty string.
     */
    setMessage(message: string): void;

    /**
     * Sets this unsent offer's access token, which is needed to send trade offers to non-friends. This token will be used to send the offer, and then will be discarded.
     *
     * @param token - The access token you want to use to send this offer
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
     * @param callback Called when the requested data is available
     * - `err` - An `Error` object if there was an error, or `null` on success
     * - `me` - An object containing your user data
     * - `them` - An object containing the other user's user data
     */
    getUserDetails(
        callback: (err: Error | null, me: TradeOffer.UserDetails, them: TradeOffer.UserDetails) => void,
    ): void;

    /**
     * Sends a newly-created offer. Only works if this is an offer created with {@link TradeOfferManager.createOffer} which hasn't been
     * sent yet. When the callback fires, if successful, the offer's `id` parameter will be defined. All other parameters will be
     * defined with the module's best guess for their values. As of v1.1.0, on failure, the `err` object may contain an `eresult`
     * property. As of v1.3.0, on failure, the `err` object may contain a `cause` property which will be one of the following strings:
     *
     * - TradeBan - The trade partner is trade banned
     * - NewDevice - You've logged in from a new device and must wait to be able to trade
     * - TargetCannotTrade - The trade partner cannot trade due to Steam Guard, password reset, etc.
     * - OfferLimitExceeded - You have sent too many trade offers (5 per trade partner, 30 total)
     * - ItemServerUnavailable - Steam couldn't contact the item server for a game you're trying to trade items in
     *
     * @param callback - Optional. A callback to be invoked when complete.
     * - `err` - An `Error` object on failure, `null` on success
     * - `status` - `pending` if awaiting email/mobile confirmation, `sent` if offer was successfully sent to the other party
     */
    send(
        callback?: (
            err:
                | TradeOfferManager.EResultError & {
                    cause?:
                        | "TradeBan"
                        | "NewDevice"
                        | "TargetCannotTrade"
                        | "OfferLimitExceeded"
                        | "ItemServerUnavailable";
                }
                | null,
            status: "pending" | "sent",
        ) => void,
    ): void;

    /**
     * If this trade offer was sent by us, cancels it. If it was sent to us, declines it. As of v1.1.0, on failure, the err object may contain an eresult property.
     *
     * @param callback - Optional. A callback to be invoked when complete.
     * - `err` - An `Error` object on failure, `null` on success
     */
    cancel(callback?: (err: TradeOfferManager.EResultError | null) => void): void;

    /**
     * Alias of {@link cancel}
     *
     * @param callback - Optional. A callback to be invoked when complete.
     * - `err` - An `Error` object on failure, `null` on success
     */
    decline(callback?: (err: TradeOfferManager.EResultError | null) => void): void;

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
     *
     * @param skipStateUpdate - Optional. Defaults to `false`
     * @param callback - Optional. A callback to be invoked when complete.
     * - `err` - An `Error` object on failure, `null` on success
     * - `status` - `pending` if awaiting email confirmation to be committed, `accepted` if successfully accepted, `escrow` if it went into escrow
     */
    accept(
        skipStateUpdate?: boolean,
        callback?: (
            err: TradeOfferManager.EResultError & { cause?: "TradeBan" | "NewDevice" | "TargetCannotTrade" } | null,
            status: "pending" | "accepted" | "escrow",
        ) => void,
    ): void;

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
     *
     * @param callback - Optional. A callback to be invoked when complete.
     * - `err` - An `Error` object on failure, `null` on success
     * - `status` - `pending` if awaiting email confirmation to be committed, `accepted` if successfully accepted, `escrow` if it went into escrow
     */
    accept(
        callback?: (
            err: TradeOfferManager.EResultError & { cause?: "TradeBan" | "NewDevice" | "TargetCannotTrade" } | null,
            status: "pending" | "accepted" | "escrow",
        ) => void,
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
     *
     * @param callback - Required. A callback to be invoked when complete.
     * - `err` - An `Error` object on failure, `null` on success
     */
    update(callback: (err: TradeOfferManager.EResultError | null) => void): void;

    /**
     * Can be called on an accepted offer to retrieve item data about the items you received, including names, descriptions,
     * and new assetids. Will not include any actions (e.g. the CS:GO inspect link) unless getActions is true.
     *
     * @param getActions - Optional. If `true`, then the descriptions of the received items willi be loaded from the WebAPI in order to populate the items' `actions`. Default `false.
     * @param callback - Required. A callback to be invoked when complete.
     * - `err` - An `Error` object on failure, `null` on success
     * - `items` - An array of `EconItem` objects that you received
     */
    getReceivedItems(getActions: boolean, callback: (err: Error | null, items: CEconItem[]) => void): void;

    /**
     * Can be called on an accepted offer to retrieve item data about the items you received, including names, descriptions,
     * and new assetids. Will not include any actions (e.g. the CS:GO inspect link) unless getActions is true.
     *
     * @param callback - Required. A callback to be invoked when complete.
     * - `err` - An `Error` object on failure, `null` on success
     * - `items` - An array of `EconItem` objects that you received
     */
    getReceivedItems(callback: (err: Error | null, items: CEconItem[]) => void): void;

    /**
     * Gets detailed information for the items exchanged in this trade, including old and new asset IDs. This can be called for any
     * trade offer that has a tradeID property defined that isn't null, including those that are in escrow or have failed.
     *
     * If you pass true to getDetailsIfFailed, it is vitally important that you check the status to be sure that the
     * trade hasn't failed or been rolled back before processing the trade as having completed.
     *
     * Each object in `receivedItems` and `sentItems` has these properties in addition to standard `EconItem` properties:
     * - `appid` - The AppID of the game to which the item belongs
     * - `contextid` - The context ID within the app to which this item belonged **before the exchange happened**
     * - `assetid` - The asset ID of the item **before the exchange happened**
     * - `amount` - The amount of the stack which was exchanged (usually 1)
     * - `classid` - The classid of the item **before the exchange happened**
     * - `instanceid` - The instanceid of the item **before the exchange happened**
     * - `new_assetid` - Only present if the trade completed successfully (e.g. is not in escrow, has not failed, and has not been rolled back).
     * The item's new asset ID in its new owner's inventory, **after the exchange**
     * - `new_contextid` - Only present if the trade completed successfully (e.g. is not in escrow, has not failed, and has not been rolled back).
     * The item's new context ID in its new owner's inventory, **after the exchange** (usually the same as the one from before the exchange, but not always for all games)
     * - `rollback_new_assetid` - Only present if the trade was rolled back (e.g. due to a failure, by Steam Support, or by a canceled trade hold).
     * The item's new asset ID after it was returned to its original owner's inventory after the trade was rolled back.
     * - `rollback_new_contextid` - Only present if the trade was rolled back (e.g. due to a failure, by Steam Support, or by a canceled trade hold).
     * The item's new context ID after it was returned to its original owner's inventory after the trade was rolled back.
     *
     * @param callback - Required. A callback to be invoked when complete.
     * - `err` - An `Error` object on failure, or `null` on success
     * - `status` - The status of this trade, which differs from the trade **offer** state. One of the values from the
     * [`ETradeStatus`](https://github.com/DoctorMcKay/node-steam-tradeoffer-manager/blob/master/resources/ETradeStatus.js) enum, which is accessible via `TradeOfferManager.ETradeStatus`.
     * - `tradeInitTime` - A `Date` object representing when Steam began processing the item exchange. If this trade was held, then this is the time when Steam
     * began removing items from both parties' inventories, i.e. the time when the trade went into escrow.
     * - `receivedItems` - An array of `EconItem` objects for items you received in this trade (see below)
     * - `sentItems` - An array of `EconItem` objects for items you lost in this trade (see below)
     */
    getExchangeDetails(callback: TradeOffer.ExchangeDetailsCallback): void;

    /**
     * Gets detailed information for the items exchanged in this trade, including old and new asset IDs. This can be called for any
     * trade offer that has a tradeID property defined that isn't null, including those that are in escrow or have failed.
     *
     * If you pass true to getDetailsIfFailed, it is vitally important that you check the status to be sure that the
     * trade hasn't failed or been rolled back before processing the trade as having completed.
     *
     * Each object in `receivedItems` and `sentItems` has these properties in addition to standard `EconItem` properties:
     * - `appid` - The AppID of the game to which the item belongs
     * - `contextid` - The context ID within the app to which this item belonged **before the exchange happened**
     * - `assetid` - The asset ID of the item **before the exchange happened**
     * - `amount` - The amount of the stack which was exchanged (usually 1)
     * - `classid` - The classid of the item **before the exchange happened**
     * - `instanceid` - The instanceid of the item **before the exchange happened**
     * - `new_assetid` - Only present if the trade completed successfully (e.g. is not in escrow, has not failed, and has not been rolled back).
     * The item's new asset ID in its new owner's inventory, **after the exchange**
     * - `new_contextid` - Only present if the trade completed successfully (e.g. is not in escrow, has not failed, and has not been rolled back).
     * The item's new context ID in its new owner's inventory, **after the exchange** (usually the same as the one from before the exchange, but not always for all games)
     * - `rollback_new_assetid` - Only present if the trade was rolled back (e.g. due to a failure, by Steam Support, or by a canceled trade hold).
     * The item's new asset ID after it was returned to its original owner's inventory after the trade was rolled back.
     * - `rollback_new_contextid` - Only present if the trade was rolled back (e.g. due to a failure, by Steam Support, or by a canceled trade hold).
     * The item's new context ID after it was returned to its original owner's inventory after the trade was rolled back.
     *
     * @param getDetailsIfFailed - If `false`, and the trade's state is anything but `Complete`, `InEscrow`, or `EscrowRollback`, then the callback will report
     * an error instead of returning the data to you. This is intended to prevent ignorant developers from blindly trusting the data they get without verifying
     * that the trade has completed successfully. Defaults to `false`.
     * @param callback - Required. A callback to be invoked when complete.
     * - `err` - An `Error` object on failure, or `null` on success
     * - `status` - The status of this trade, which differs from the trade **offer** state. One of the values from the
     * [`ETradeStatus`](https://github.com/DoctorMcKay/node-steam-tradeoffer-manager/blob/master/resources/ETradeStatus.js) enum,
     * which is accessible via `TradeOfferManager.ETradeStatus`.
     * - `tradeInitTime` - A `Date` object representing when Steam began processing the item exchange. If this trade was held, then this is the time when
     * Steam began removing items from both parties' inventories, i.e. the time when the trade went into escrow.
     * - `receivedItems` - An array of `EconItem` objects for items you received in this trade (see below)
     * - `sentItems` - An array of `EconItem` objects for items you lost in this trade (see below)
     */
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
