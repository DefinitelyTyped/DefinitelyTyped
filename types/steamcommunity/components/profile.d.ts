import { Callback, CallbackError } from '../index';
import SteamID = require('steamid');

export interface Profile {
    /**
     * If your Steam account is new and your profile isn't set up yet, you can call this to create it.
     *
     * @param callback Called when the action is complete.
     */
    setupProfile(callback: Callback): void;

    /**
     * Updates one or more parts of your profile.
     *
     * @param settings
     * @param callback
     */
    editProfile(settings: {
        /** Your new profile name. */
        name: any,
        /** Your new profile "real name", or empty string to remove it. */
        realName: any,
        /** Your new profile summary. */
        summary: any,
        /** A country code, like US, or empty string to remove it. */
        country: string,
        /** A state code, like FL, or empty string to remove it. */
        state: string,
        /** A numeric city code, or empty string to remove it. */
        city: number | string,
        /** Your new profile custom URL. */
        customURL: any,
        /** The assetid of an owned profile background which you want to equip, or empty string to remove it. */
        background: any,
        /** The ID of your new featured badge, or empty string to remove it. Currently game badges aren't supported, only badges whose pages end in /badge/<id>. */
        featuredBadge: any,
        /** A SteamID object for your new primary Steam group, or a string which can parse into a SteamID. */
        primaryGroup: SteamID | string
    }, callback: Callback): void;

    /**
     * Updates one or more parts of your profile settings.
     *
     * @param settings An profile settings object.
     * @param callback Optional. Called when the request completes.
     */
    profileSettings(settings: {
        /** A value from SteamCommunity.PrivacyState for your desired profile privacy state. */
        profile: any,
        /** A value from SteamCommunity.PrivacyState for your desired profile comments privacy state. */
        comments: any,
        /** A value from SteamCommunity.PrivacyState for your desired inventory privacy state. */
        inventory: any,
        /** true to keep your Steam gift inventory private, false otherwise. */
        inventoryGifts: any,
        /** A value from SteamCommunity.PrivacyState for your desired privacy level required to view games you own and what game you're currently playing. */
        gameDetails: any,
        /** `true` to keep your game playtime private, `false` otherwise. */
        playtime: boolean,
        /** A value from SteamCommunity.PrivacyState for your desired privacy level required to view your friends list. */
        friendsList: any
    }, callback: Callback): void;

    /**
     * Replaces your current avatar image with a new one.
     *
     * @param image A `Buffer` containing the image, a string containing a URL to the image, or a string containing the path to the image on the local disk.
     * @param format Optional. The format of the image.
     * Is required if `image` is a `Buffer`, else it will be detected from the `Content-Type` header (if `image` is a URL) or the file extension (if `image` is a local path).
     * If provided, `format` should be one of `jpg` (or `jpeg`), `gif`, or `png`. These are the only supported image formats.
     * @param callback Optional. Called when the upload is complete or fails.
     */
    uploadAvatar(image: Buffer | string, format: any, callback: (
        err: CallbackError,
        /** The URL to the new image on Steam's CDN. */
        url: string,
    ) => any): void;

    /**
     * Posts a status update to your profile feed.
     *
     * @param statusText A string containing your new status update's content (can contain BBCode and emoticons).
     * @param options Optional. Can be omitted if no options are desired. An object containing zero or more of properties.
     * @param callback Required. Called when request completes.
     */
    postProfileStatus(statusText: any, options: {
        /** An integer appID if you want this status update to be tagged with a specific game. */
        appID: number
    }, callback: (
        err: CallbackError,
        /** The ID of this new post. */
        postID: any,
    ) => any): void;

    /**
     * Delete a previously-posted profile status update.
     * @param postID
     * @param [callback]
     */
    deleteProfileStatus(postID: number, callback: Callback): void;
}
