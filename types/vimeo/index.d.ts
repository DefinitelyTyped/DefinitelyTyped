// Type definitions for Vimeo 2.1
// Project: https://github.com/vimeo/vimeo.js
// Definitions by: Matthew Leffler <https://github.com/mattleff>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export type CompleteCallback = (
    err: string | undefined,
    result: any,
    statusCode?: number,
    headers?: object
) => void;

export type ProgressCallback = (bytesUploaded: number, bytesTotal: number) => void;
export type ErrorCallback = (err: string) => void;
export type UriCallback = (uri: string) => void;

export interface RequestOptions {
    method: string;
    path: string;
    query?: object;
    headers?: object;
}

export class Vimeo {
    /**
     * This object is used to interface with the Vimeo API.
     *
     * @param clientId     OAuth 2 Client Identifier
     * @param clientSecret OAuth 2 Client Secret
     * @param accessToken  OAuth 2 Optional pre-authorized access token
     */
    constructor(clientId: string, clientSecret: string, accessToken?: string);

    /**
     * Performs an API call.
     *
     * Can be called one of two ways:
     *
     * 1. Url + Callback
     *    If a url is provided, we fill in the rest of the request options with defaults
     *    (GET http://api.vimeo.com/{url}).
     *
     * 2. Options + callback
     *    If an object is provided, it should match the response of urlModule.parse. Path is the only
     *    required parameter.
     *
     *    - hostname
     *    - port
     *    - query (will be applied to the url if GET, request body if POST)
     *    - headers
     *    - path (can include a querystring)
     *    - method
     *
     * The callback takes two parameters, `err` and `json`.
     * If an error has occured, your callback will be called as `callback(err)`;
     * If an error has not occured, your callback will be called as `callback(null, json)`;
     *
     * @param options   String path (default GET), or object with `method`, path`,
     *                                  `host`, `port`, `query` or `headers`.
     * @param callback  Called when complete, `function (err, json)`.
     */
    request(url: string | RequestOptions, callback: CompleteCallback): void;

    /**
     * Set a user access token to be used with library requests.
     *
     * @param accessToken
     */
    setAccessToken(accessToken: string): void;

    /**
     * Exchange a code for an access token. This code should exist on your `redirectUri`.
     *
     * @param code         The code provided on your `redirectUri`.
     * @param redirectUri  The exact `redirectUri` provided to `buildAuthorizationEndpoint`
     *                                and configured in your API app settings.
     * @param fn           Callback to execute on completion.
     */
    accessToken(code: string, redirectUri: string, fn: CompleteCallback): void;

    /**
     * The first step of the authorization process.
     *
     * This function returns a URL, which the user should be sent to (via redirect or link).
     *
     * The destination allows the user to accept or deny connecting with vimeo, and accept or deny each
     * of the scopes you requested. Scopes are passed through the second parameter as an array of
     * strings, or a space delimited list.
     *
     * Once accepted or denied, the user is redirected back to the `redirectUri`.
     *
     * @param redirectUri   The URI that will exchange a code for an access token. Must match
     *                                the URI in your API app settings.
     * @param scope  An array of scopes. See https://developer.vimeo.com/api/authentication#scopes
     *                                for more.
     * @param state         A unique state that will be returned to you on your redirect URI.
     */
    buildAuthorizationEndpoint(redirectUri: string, scope: string | string[], state: string): void;

    /**
     * Generates an unauthenticated access token. This is necessary to make unauthenticated requests
     *
     * @param scope  An array of scopes. See https://developer.vimeo.com/api/authentication#scopes
     *                          for more.
     * @param fn    A function that is called when the request is complete. If an error
     *                          occured the first parameter will be that error, otherwise the first
     *                          parameter will be null.
     */
    generateClientCredentials(scope: string | string[], fn: CompleteCallback): void;

    /**
     * Upload a file.
     *
     * This should be used to upload a local file. If you want a form for your site to upload direct to
     * Vimeo, you should look at the `POST /me/videos` endpoint.
     *
     * https://developer.vimeo.com/api/reference/videos#upload_video
     *
     * @param file              Path to the file you wish to upload.
     * @param params            Parameters to send when creating a new video (name,
     *                                      privacy restrictions, etc.). See the API documentation for
     *                                      supported parameters.
     * @param completeCallback  Callback to be executed when the upload completes.
     * @param progressCallback  Callback to be executed when upload progress is updated.
     * @param errorCallback     Callback to be executed when the upload returns an error.
     */
    upload(
        filePath: string,
        params: object,
        completeCallback: UriCallback,
        progressCallback: ProgressCallback | undefined,
        errorCallback: ErrorCallback,
    ): void;
    upload(
        filePath: string,
        completeCallback: UriCallback,
        progressCallback: ProgressCallback | undefined,
        errorCallback: ErrorCallback,
    ): void;

    /**
     * Replace the source of a single Vimeo video.
     *
     * https://developer.vimeo.com/api/reference/videos#create_video_version
     *
     * @param file              Path to the file you wish to upload.
     * @param videoUri          Video URI of the video file to replace.
     * @param params            Parameters to send when creating a new video (name,
     *                                      privacy restrictions, etc.). See the API documentation for
     *                                      supported parameters.
     * @param completeCallback  Callback to be executed when the upload completes.
     * @param progressCallback  Callback to be executed when upload progress is updated.
     * @param errorCallback     Callback to be executed when the upload returns an error.
     */
    replace(
        file: string,
        videoUri: string,
        params: object,
        completeCallback: UriCallback,
        progressCallback: ProgressCallback | undefined,
        errorCallback: ErrorCallback,
    ): void;
}
