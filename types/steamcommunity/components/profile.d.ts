import { appid, Callback, CallbackError, EditProfileSettings, ProfileSetting } from '../index';

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
    editProfile(settings: EditProfileSettings, callback: Callback): void;

    /**
     * Updates one or more parts of your profile settings.
     *
     * @param settings An profile settings object.
     * @param callback Optional. Called when the request completes.
     */
    profileSettings(settings: ProfileSetting, callback: Callback): void;

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
        appID: appid
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
