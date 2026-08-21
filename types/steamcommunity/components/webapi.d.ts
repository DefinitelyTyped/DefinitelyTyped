import { Callback, CallbackError, CreateWebApiKeyOptions, CreateWebApiKeyResult } from "../index";

export interface WebApi {
    /**
     * Retrieves your account's Web API key, provided that you already have one created. If you haven't created an API key yet, use createWebApiKey(). If you use this method without having first created an API key, an error will be returned instead.
     *
     * @param callback A function to be called once the key is obtained.
     */
    getWebApiKey(
        callback: (
            /** If an error occurred, this is an Error object. The message property will be Access Denied if you attempt to retrieve an API key on a limited account. */
            err: CallbackError,
            /** Your API key on success. */
            key: string,
        ) => any,
    ): any;

    /**
     * Creates a new Web API key for your account. Your account must be eligible for an API key, and must have a Steam Guard Mobile Authenticator. If you call this without having a Mobile Authenticator, you will get back error NoMobileDevice.
     *
     * @param options An object containing options for this request
     * @param callback A function to be called once the key is obtained.
     */
    createWebApiKey(
        options: CreateWebApiKeyOptions,
        callback: (
            /** If an error occurred, this is an Error object. The message property will be Access Denied if you attempt to retrieve an API key on a limited account. */
            err: CallbackError,
            /** Result object. */
            result: CreateWebApiKeyResult,
        ) => any,
    ): any;

    /**
     * Gets an oauth access token for those WebAPI methods that need one.
     * This only works if you logged in via node-steamcommunity and you didn't disable mobile login. Thus, you should just use the token returned in the callback to login.
     *
     * @deprecated No longer works if not logged in via mobile login. Will be removed in a future release.
     * @param callback A function to be called once the token is obtained.
     */
    getWebApiOauthToken(callback: Callback): any;
}
