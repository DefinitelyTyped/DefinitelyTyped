// Type definitions for the Facebook Javascript SDK 2.8
// Project: https://developers.facebook.com/docs/javascript
// Definitions by: Amrit Kahlon <https://github.com/amritk>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import fb = facebook;
declare var FB: fb.FacebookStatic;
declare namespace facebook {

    interface FacebookStatic {
        api: any;
        AppEvents: any;
        Canvas: any;
        Event: any;

        /**
         * The method FB.getAuthResponse() is a synchronous accessor for the current authResponse.
         * The synchronous nature of this method is what sets it apart from the other login methods.
         *
         * @param callback function to handle the response.
         */
        getAuthResponse(callback: (response: AuthResponse) => void): void;
        /**
         * FB.getLoginStatus() allows you to determine if a user is
         * logged in to Facebook and has authenticated your app.
         *
         * @param callback function to handle the response.
         */
        getLoginStatus(callback: (response: AuthResponse) => void, roundtrip?: boolean ): void;
        /**
         * The method FB.init() is used to initialize and setup the SDK.
         *
         * @param params params for the initialization.
         */
        init(params: InitParams): void;
        /**
         * Use this function to log the user in
         *
         * Calling FB.login() results in the JS SDK attempting to open a popup window.
         * As such, this method should only be called after a user click event, otherwise
         * the popup window will be blocked by most browsers.
         *
         * @param callback function to handle the response.
         * @param options optional ILoginOption to add params such as scope.
         */
        login(callback: (response: AuthResponse) => void, options?: LoginOptions): void;
        /**
         * The method FB.logout() logs the user out of your site and, in some cases, Facebook.
         *
         * @param callback function to handle the response
         */
        logout(callback: (response: AuthResponse) => void): void;

        /**
         * @see https://developers.facebook.com/docs/sharing/reference/share-dialog
         */
        ui(params: ShareDialogParams, callback: (response: ShareDialogResponse) => void): void;

        /**
         * @see https://developers.facebook.com/docs/games/services/gamerequests
         */
        ui(params: GameRequestDialogParams, callback: (response: GameRequestDialogResponse) => void): void;

        /**
         * @see https://developers.facebook.com/docs/payments/reference/paydialog
         */
        ui(params: PayDialogParams, callback: (response: PayDialogResponse) => void): void;

        /**
         * @see https://developers.facebook.com/docs/videos/live-video/exploring-live
         */
        ui(params: LiveDialogParams, callback: (response: LiveDialogResponse) => void): void;

        /**
         * @see https://developers.facebook.com/docs/sharing/reference/send-dialog
         * @see https://developers.facebook.com/docs/pages/page-tab-dialog
         */
        ui(params: SendDialogParams | AddPageTabDialogParams, callback: (response: null) => void): void;

        XFBML: any;
    }

    interface InitParams {
        appId: string;
        version?: string;
        cookie?: boolean;
        status?: boolean;
        xfbml?: boolean;
        frictionlessRequests?: boolean;
        hideFlashCallback?: boolean;
    }

    interface LoginOptions {
        auth_type?: string;
        scope?: string;
        return_scopes?: boolean;
        enable_profile_selector?: boolean;
        profile_selector_ids?: string;
    }

    ////////////////////////
    //
    //  DIALOGS
    //
    ////////////////////////

    interface DialogParams {
        app_id?: string;
        redirect_uri?: string;
        display?: 'page' | 'iframe' | 'async' | 'popup';
    }

    interface ShareDialogParams extends DialogParams {
        method: 'share';
        href: string;
        picture?: string;
        hashtag?: string;
        quote?: string;
        mobile_iframe?: boolean;
    }

    interface AddPageTabDialogParams extends DialogParams {
        method: 'pagetab';
        redirect_uri: string;
    }

    interface GameRequestDialogParams extends DialogParams {
        method: 'apprequests';
        message: string;
        action_type?: 'send' | 'askfor' | 'turn';
        data?: number;
        exclude_ids?: string[];
        filters?: 'app_users' | 'app_non_users' | Array<{ name: string, user_ids: string[] }>;
        max_recipients?: number;
        object_id?: string;
        suggestions?: string[];
        title?: number;
        to?: string | number;
    }

    interface SendDialogParams extends DialogParams {
        method: 'send';
        to?: string;
        link: string;
    }

    interface PayDialogParams extends DialogParams {
        method: 'pay';
        action: 'purchaseitem';
        product: string;
        quantity?: number;
        quantity_min?: number;
        quantity_max?: number;
        request_id?: string;
        test_currency?: string;
    }

    interface LiveDialogParams extends DialogParams {
        method: 'live_broadcast';
        display: 'popup' | 'iframe';
        phase: 'create' | 'publish';
        broadcast_data?: LiveDialogResponse;
    }

    ////////////////////////
    //
    //  RESPONSES
    //
    ////////////////////////

    interface AuthResponse {
        status: string;
        authResponse: {
            accessToken: string;
            expiresIn: number;
	    grantedScopes: string;
            signedRequest: string;
            userID: string;
        };
    }

    interface ShareDialogResponse {
        post_id?: string;
        error_message?: string;
    }

    interface GameRequestDialogResponse {
        request: string;
        to: string[];
    }

    interface PayDialogResponse {
        payment_id: string;
        amount: string;
        currency: string;
        quantity: string;
        request_id: string;
        status: string;
        signed_request: string;
    }

    interface LiveDialogResponse {
        id: string;
        stream_url: string;
        secure_stream_url: string;
        status: string;
    }
}
