import { Callback, CallbackError } from '../index';

export interface WebApi {
    /**
     * Retrieves your account's Web API key, and registers one if needed. Usage of this method constitutes agreement to the Steam Web API terms of use.
     *
     * @param domain A domain name to associate with your key.
     * @param callback A function to be called once the key is obtained.
     */
    getWebApiKey(domain: string, callback: (
        /** If an error occurred, this is an Error object. The message property will be Access Denied if you attempt to retrieve an API key on a limited account. */
        err: CallbackError,
        /** Your API key on success. */
        key: string,
    ) => any): any;

    /**
     * Gets an oauth access token for those WebAPI methods that need one.
     * This only works if you logged in via node-steamcommunity and you didn't disable mobile login. Thus, you should just use the token returned in the callback to login.
     *
     * @deprecated No longer works if not logged in via mobile login. Will be removed in a future release.
     * @param callback A function to be called once the token is obtained.
     */
    getWebApiOauthToken(callback: Callback): any;
}
