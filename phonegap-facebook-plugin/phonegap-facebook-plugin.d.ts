// Type definitions for phonegap-facebook-plugin 0.11.0
// Project: https://github.com/Wizcorp/phonegap-facebook-plugin
// Definitions by: Justin Unterreiner <https://github.com/Justin-Credible>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare namespace PhonegapFacebookPlugin {

    //#region API Methods

    interface FacebookConnectPluginStatic {

        /**
         * Allows access to the Facebook Graph API. This API allows for additional permission because, unlike login, the Graph API can
         * accept multiple permissions. In order to make calls to the Graph API on behalf of a user, the user has to be logged into your
         * app using Facebook login.
         *
         * @param graphPath The graph API path to use for the query.
         * @param permissions The permissions to request.
         * @param successCallback The callback to be executed when the call completes successfully.
         * @param failureCallback The callback to be executed when the call fails.
         */
        api: (graphPath: string, permissions: string[], successCallback?: (result: any) => void, failureCallback?: (error: string) => void) => void;

        /**
         * Used to retreive the access token for the current user.
         *
         * @param successCallback The callback to be executed when the call completes successfully.
         * @param failureCallback The callback to be executed when the call fails.
         */
        getAccessToken: (successCallback?: (token: string) => void, failureCallback?: (error: string) => void) => void;

        /**
         * Used to get the login status for the current user.
         *
         * @param successCallback The callback to be executed when the call completes successfully.
         * @param failureCallback The callback to be executed when the call fails.
         */
        getLoginStatus: (successCallback?: (status: LoginResult) => void, failureCallback?: (error: string) => void) => void;

        /**
         * Used to log an event.
         *
         * @param name Name of the event.
         * @param params Extra data to log with the event (optional).
         * @param valueToSum a property which is an arbitrary number that can represent any value (e.g., a price or a quantity).
         *          When reported, all of the valueToSum properties will be summed together. For example, if 10 people each purchased
         *          one item that cost $10 (and passed in valueToSum) then they would be summed to report a number of $100. (optional)
         * @param successCallback The callback to be executed when the call completes successfully.
         * @param failureCallback The callback to be executed when the call fails.
         */
        logEvent: (name: string, params?: any, valueToSum?: number, successCallback?: () => void, failureCallback?: (error: string) => void) => void;

        /**
         * Used to log a purchase.
         *
         * @param value The value of the purchase.
         * @param currency An ISO-4217 currency code.
         * @param successCallback The callback to be executed when the call completes successfully.
         * @param failureCallback The callback to be executed when the call fails.
         */
        logPurchase: (value: number, currency: string, successCallback?: () => void, failureCallback?: (error: string) => void) => void;

        /**
         * Used to log the user in via Facebook. Calling this will result in a Facebook login dialog (or external
         * webpage) launching. Once the user completes the flow, one of the two callbacks will be executed.
         *
         * @param permissions The permissions to request during login.
         * @param successCallback The callback to be executed when the call completes successfully.
         * @param failureCallback The callback to be executed when the call fails.
         */
        login: (permissions: string[], successCallback?: (result: LoginResult) => void, failureCallback?: (error: string) => void) => void;

        /**
         * Used to log the user out of Facebook. This will invalidate their access token.
         *
         * @param successCallback The callback to be executed when the call completes successfully.
         * @param failureCallback The callback to be executed when the call fails.
         */
        logout: (successCallback?: () => void, failureCallback?: (error: string) => void) => void;

        /**
         * Used to open a Facebook dialog.
         *
         * @param options The options that control the dialog and it's behavior.
         * @param successCallback The callback to be executed when the call completes successfully.
         * @param failureCallback The callback to be executed when the call fails.
         */
        showDialog: (options: BaseDialogOptions, successCallback?: (status: BaseDialogResult) => void, failureCallback?: (error: string) => void) => void;
    }

    //#endregion

    //#region Method Parameters

    interface BaseDialogOptions {

        /**
         * The type of dialog to show, can be one of the following.
         *
         * Depeneding on the type, a different options object will be used:
         *
         * Method               Options Type
         * feed                 FeedDialogOptions
         * send                 SendDialogOptions
         * share                ShareDialogOptions
         * share_open_graph     ShareOpenGraphDialogOptions
         */
        method: string;
    }

    /**
     * You can add the Feed Dialog to your app so people can publish individual stories to their timeline. This
     * includes captions that your app manages and a personal comment from the person sharing the content.
     *
     * For use with showDialog() of method type 'feed'.
     */
    interface FeedDialogOptions extends BaseDialogOptions {

        /**
         * The ID of the person posting the message. If this is unspecified, it defaults to the current person.
         * If specified, it must be the ID of the person or of a page that the person administers.
         */
        from?: string;

        /**
         * The ID of the profile that this story will be published to. If this is unspecified, it defaults to
         * the value of from. The ID must be a friend who also uses your app.
         */
        to?: string;

        /**
         * The link attached to this post.
         */
        link?: string;

        /**
         * The URL of a picture attached to this post. The picture must be at least 200px by 200px.
         */
        picture?: string;

        /**
         * The URL of a media file (either SWF or MP3) attached to this post. If SWF, you must also specify
         * 'picture' to provide a thumbnail for the video.
         */
        source?: string;

        /**
         * The name of the link attachment.
         */
        name?: string;

        /**
         * The caption of the link (appears beneath the link name). If not specified, this field is automatically
         * populated with the URL of the link.
         */
        caption?: string;

        /**
         * The description of the link (appears beneath the link caption). If not specified, this field is
         * automatically populated by information scraped from the link, typically the title of the page.
         */
        description?: string;

        /**
         * This argument is a comma-separated list, consisting of at most 5 distinct items, each of length at
         * least 1 and at most 15 characters drawn from the set
         * '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz_'.
         * Each category is used in Facebook Insights to help you measure the performance of different types
         * of post.
         */
        ref?: string;
    }

    /**
     * The Send Dialog lets people privately send content to specific friends. They'll have the option to privately
     * share a link as a Facebook message or group post. The Send Dialog does not require any extended permissions.
     *
     * For use with showDialog() of method type 'send'.
     */
    interface SendDialogOptions extends BaseDialogOptions {

        /**
         * A user ID of a recipient. Once the dialog comes up, the sender can specify additional people, and groups
         * addresses as recipients. Sending content to a Facebook group will post it to the group's wall.
         */
        to: string;

        /**
         * Required parameter. The URL that is being sent in the message.
         */
        link: string;
    }

    /**
     * The Share dialog prompts a person to publish an individual story or an Open Graph story to their timeline.
     * This does not require Facebook Login or any extended permissions, so it is the easiest way to enable
     * sharing on web.
     *
     * For use with showDialog() of method type 'share'.
     */
    interface ShareDialogOptions extends BaseDialogOptions {

        /**
         * The link attached to this post. Required when using method share. Include open graph meta tags in the
         * page at this URL to customize the story that is shared.
         */
        href: string;
    }

    /**
     * The Share dialog prompts a person to publish an individual story or an Open Graph story to their timeline.
     * This does not require Facebook Login or any extended permissions, so it is the easiest way to enable
     * sharing on web.
     *
     * For use with showDialog() of method type 'share_open_graph'.
     */
    interface ShareOpenGraphDialogOptions extends BaseDialogOptions {

        /**
         * A string specifying which Open Graph action type to publish, e.g., og.likes for the built in like type.
         * The dialog also supports approved custom types.
         */
        action_type: string;

        /**
         * A JSON object of key/value pairs specifying parameters which correspond to the action_type being used.
         * Valid key/value pairs are the same parameters that can be used when publishing Open Graph Actions using
         * the API.
         */
        action_properties: string;
    }

    //#endregion

    //#region Callback Results

    /**
     * Result for the login() and getLoginStatus() success callbacks.
     */
    interface LoginResult {
        authResponse: {
            accessToken: string;
            expiresIn: string;
            secret: string;
            session_key: boolean;
            sig: string;
            userID: string;
        },
        status: string;
    }

    /**
     * The base result type for all showDialog() success callbacks.
     */
    interface BaseDialogResult {
        error_code: string;
        error_message: string;
    }

    /**
     * The response object returned from a success callback for showDialog() of type 'feed'.
     */
    interface FeedDialogResult extends BaseDialogResult {

        /**
         * The ID of the posted story, if the person chose to publish.
         */
        post_id: string;
    }

    /**
     * The response object returned from a success callback for showDialog() of type 'send'.
     */
    interface SendDialogResult extends BaseDialogResult {
    }

    /**
     * The response object returned from a success callback for showDialog() of type 'share' or 'share_open_graph'.
     */
    interface ShareDialogResult extends BaseDialogResult {

        /**
         * Only available if the user is logged into your app using Facebook and has granted publish_actions.
         * If present, this is the ID of the published Open Graph story.
         */
        post_id: string;
    }

    //#endregion
}

declare var facebookConnectPlugin: PhonegapFacebookPlugin.FacebookConnectPluginStatic;
