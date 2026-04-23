import { appid, Callback, CallbackError, contextid, userid } from "../index";
import CEconItem = require("../classes/CEconItem");

export interface Users {
    /**
     * Adds the user as a friend.
     *
     * @param userID
     * @param callback
     */
    addFriend(userID: userid, callback: Callback): void;

    /**
     * Accepts a pending friend request from this user.
     *
     * @param userID
     * @param callback
     */
    acceptFriendRequest(userID: userid, callback: Callback): void;

    /**
     * Removes the user from your friends list.
     *
     * @param userID
     * @param callback Optional.
     */
    removeFriend(userID: userid, callback?: Callback): void;

    /**
     * Blocks all communication with the user.
     *
     * @param userID
     * @param callback
     */
    blockCommunication(userID: userid, callback: Callback): void;

    /**
     * Removes the user from your blocked list.
     *
     * @param userID
     * @param callback Optional.
     */
    unblockCommunication(userID: userid, callback?: Callback): void;

    postUserComment(userID: userid, message: string, callback: Callback): void;

    deleteUserComment(userID: userid, commentID: any, callback: Callback): void;

    getUserComments(userID: userid, options: any, callback: Callback): any;

    inviteUserToGroup(userID: userid, groupID: any, callback: Callback): void;

    getUserAliases(userID: userid, callback: Callback): any;

    getUserProfileBackground(userID: userid, callback: Callback): void;

    /**
     * Gets info about what inventories are available to a user. Calling this for your own logged-in account will reset the number of new items you have to 0.
     *
     * @param userID The user's SteamID as a SteamID object or a string which can parse into one
     * @param callback Required. Called when the requested data is available.
     */
    getUserInventoryContexts(
        userID: userid,
        callback: (
            err: CallbackError,
            /** An object whose keys are AppIDs and values are objects containing app and context data. */
            apps: any,
        ) => any,
    ): void;

    /**
     * Get the contents of a user's inventory context.
     * @deprecated Use getUserInventoryContents instead
     * @param userID - The user's SteamID as a SteamID object or a string which can parse into one
     * @param appID - The Steam application ID of the game for which you want an inventory
     * @param contextID - The ID of the "context" within the game you want to retrieve
     * @param tradableOnly - true to get only tradable items and currencies
     * @param callback
     */
    getUserInventory(
        userID: userid,
        appID: appid,
        contextID: contextid,
        tradableOnly: boolean,
        callback: (
            err: CallbackError,
            /** An array containing `CEconItem` objects for the user's inventory items. */
            inventory: CEconItem[],
            /** An array containing `CEconItem` objects for the user's currency items (only used by Spiral Knights to the extent of my knowledge). */
            currency: CEconItem[],
        ) => any,
    ): void;

    /**
     * Get the contents of a user's inventory context.
     * @param userID - The user's SteamID as a SteamID object or a string which can parse into one
     * @param appID - The Steam application ID of the game for which you want an inventory
     * @param contextID - The ID of the "context" within the game you want to retrieve
     * @param tradableOnly - true to get only tradable items and currencies
     * @param [language] - The language of item descriptions to return. Omit for default (which may either be English or your account's chosen language)
     * @param callback
     */
    getUserInventoryContents(
        userID: userid,
        appID: appid,
        contextID: contextid,
        tradableOnly: boolean,
        language: string,
        callback: (
            err: CallbackError,
            /** An array containing `CEconItem` objects for the user's inventory items. */
            inventory: CEconItem[],
            /** An array containing `CEconItem` objects for the user's currency items (only used by Spiral Knights to the extent of my knowledge). */
            currency: CEconItem[],
            /** A number containing the total number of items in this contextid. */
            totalItems: number,
        ) => any,
    ): void;

    /**
     * Upload an image to Steam and send it to another user over Steam chat.
     * @param userID - Either a SteamID object or a string that can parse into one
     * @param imageContentsBuffer - The image contents, as a Buffer
     * @param [options]
     * @param callback
     */
    sendImageToUser(userID: userid, imageContentsBuffer: Buffer, options: any, callback: Callback): void;
}
