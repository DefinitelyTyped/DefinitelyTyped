import { appid, Callback, CallbackError, contextid, gid, UserComment } from '../index';
import CEconItem = require('../classes/CEconItem');
import SteamID = require('steamid');

export = CSteamUser;

declare function CSteamUser(community: any, userData: any, customurl: any): void;

/**
 * A class which stands for a Steam user. This class cannot be instantiated directly; it must be received from a call to getSteamUser.
 */
declare class CSteamUser {
    constructor(community: any, userData: any, customurl: any);

    /** A SteamID object containing the user's SteamID. Visit a user's profile at https://steamcommunity.com/profiles/SteamID */
    steamID: SteamID;
    /** The user's current profile name (can be changed). */
    name: string;
    /** The user's current online state. One of `in-game`, `online`, or `offline`. */
    onlineState: 'in-game' | 'online' | 'offline';
    /** A message describing the user's current online state. Displayed on the profile below their status. */
    stateMessage: string;
    /** One of `public`, `friendsonly`, `private`. May also be a legacy value like `friendsfriendsonly`, these should be treated as private. */
    privacyState: 'public' | 'friendsonly' | 'private' | string;
    /** The user's visibility state relative to you, as an integer. `1` if visible, `0` if private. If privateState is a legacy value, this will be 1 although it should in effect be 0. */
    visibilityState: 0 | 1;
    /** The hash of the user's avatar. */
    avatarHash: string;
    /** `true` if the user has one or more VAC bans on record, `false` otherwise. */
    vacBanned: boolean;
    /** One of `None`, `Probation`, or `Banned`. */
    tradeBanState: 'None' | 'Probation' | 'Banned';
    /** `true` if the user's account is limited, `false` otherwise. */
    isLimitedAccount: boolean;
    /** The user's custom vanity URL. */
    customURL: string;
    /** A Date object for the user's account creation date (unavailable and null if private). */
    memberSince: Date;
    /** The user's given location (unavailable and null if private or not provided). */
    location: string | null;
    /** The user's given real name (unavailable and null if private or not provided). */
    realName: string | null;
    /** The user's profile summary (unavailable and null if private). */
    summary: string | null;
    /** An array of SteamID objects for the user's joined groups. */
    groups: SteamID[];
    /** A SteamID object for the user's chosen primary group. */
    primaryGroup: SteamID;

    /**
     * Returns a URL where you can download this user's avatar image
     *
     * @param size Optional. One of small (default), medium, full.
     * @param protocol Optional. One of http:// (default), https://, // (protocol aware).
     */
    getAvatarURL(size?: string, protocol?: 'http://' | 'https://' | string): void;

    /**
     * Adds the user as a friend.
     *
     * @param callback Optional.
     */
    addFriend(callback?: Callback): void;

    /**
     * Accepts a pending friend request from this user.
     *
     * @param callback Optional.
     */
    acceptFriendRequest(callback?: Callback): void;

    /**
     * Removes the user from your friends list.
     *
     * @param callback Optional.
     */
    removeFriend(callback?: Callback): void;

    /**
     * Blocks all communication with the user.
     *
     * @param callback Optional.
     */
    blockCommunication(callback?: Callback): void;

    /**
     * Removes the user from your blocked list.
     *
     * @param callback Optional.
     */
    unblockCommunication(callback?: Callback): void;

    /**
     * Attempts to post a comment on the user's profile. Fails if profile is private or you don't have permission to post comments on the user's profile.
     *
     * @param message The message to leave on the user's profile.
     * @param callback Optional.
     */
    comment(message: any, callback?: Callback): void;

    /**
     * Deletes a comment from a user's profile. Must be your own profile, or your own comment on someone else's profile.
     *
     * @param commentID The ID of the comment you want to delete.
     * @param callback Optional. Called when the request completes.
     */
    deleteComment(commentID: string, callback: Callback): void;

    /**
     * Gets comments from a user's Steam profile.
     *
     * @param options Optional. An object containing zero or more of these properties.
     * @param callback Called when the request completes.
     */
    getComments(options: Array<{
        /** The offset of the first comment you want to retrieve (default 0). */
        start: number,
        /** How many comments you want to retrieve. */
        count: number
    }>, callback: (
        err: CallbackError,
        /** An array containing objects representing the comments. */
        comments: UserComment[],
        /** The total number of comments on this profile. */
        totalCount: number,
    ) => any): void;

    /**
     * Attempts to invite the user to a Steam group. Fails if you're not friends with them.
     *
     * @param groupID The SteamID of the group, as a SteamID object or a string which can be parsed into one.
     * @param callback Optional.
     */
    inviteToGroup(groupID: gid, callback?: Callback): void;

    /**
     * Gets a user's persona name history.
     *
     * @param callback Required. Called when requested data is available.
     */
    getAliases(callback: (
        err: CallbackError,
        /** A string containing the user's profile background URL. `null` if they have no custom background. */
        backgroundUrl: string | null,
    ) => any): void;

    /**
     * Gets info about what inventories are available to a user. Calling this for your own logged-in account will reset the number of new items you have to 0.
     *
     * @param callback Required. Called when the requested data is available.
     */
    getInventoryContexts(callback: (
        err: CallbackError,
        /** An object whose keys are AppIDs and values are objects containing app and context data. */
        apps: any,
    ) => any): void;

    /**
     * Get the contents of a user's inventory context.
     * @deprecated Use CSteamUser#getInventoryContents instead
     * @param appID - The Steam application ID of the game for which you want an inventory
     * @param contextID - The ID of the "context" within the game you want to retrieve
     * @param tradableOnly - true to get only tradable items and currencies
     * @param callback Required. Called when requested data is available.
     */
    getInventory(appID: appid, contextID: contextid, tradableOnly: boolean, callback: (
        err: CallbackError,
        /** An array containing `CEconItem` objects for the user's inventory items. */
        inventory: CEconItem[],
        /** An array containing `CEconItem` objects for the user's currency items (only used by Spiral Knights to the extent of my knowledge). */
        currency: CEconItem[],
    ) => any): void;

    /**
     * Get the contents of a user's inventory context.
     * @param appID The Steam application ID of the game for which you want an inventory
     * @param contextID The ID of the "context" within the game you want to retrieve
     * @param tradableOnly true to get only tradable items and currencies
     * @param [language] The language of item descriptions to return. Omit for default (which may either be English or your account's chosen language)
     * @param callback
     */
    getInventoryContents(appID: appid, contextID: contextid, tradableOnly: boolean, language: string, callback: (
        err: CallbackError,
        /** An array containing `CEconItem` objects for the user's inventory items. */
        inventory: CEconItem[],
        /** An array containing `CEconItem` objects for the user's currency items (only used by Spiral Knights to the extent of my knowledge). */
        currency: CEconItem[],
        /** A number containing the total number of items in this contextid. */
        totalItems: number,
    ) => any): void;

    /**
     * Get the background URL of user's profile.
     * @param callback Required. Called when requested data is available.
     */
    getProfileBackground(callback: () => {
        err: CallbackError,
        /** A string containing the user's profile background URL. `null` if they have no custom background. */
        backgroundUrl: string | null
    }): void;

    /**
     * Upload an image to Steam and send it to the target user over chat.
     * @param imageContentsBuffer - The image contents, as a Buffer
     * @param options Optional. An object with zero or more of these properties.
     * @param callback Required. Called when the request completes
     */
    sendImage(imageContentsBuffer: Buffer, options: {
        /** `true` to mark this as a spoiler (default `false`). */
        spoiler: boolean
    }, callback: (
        err: CallbackError,
        /** The URL to the uploaded image. */
        imageUrl: string,
    ) => any): void;
}
