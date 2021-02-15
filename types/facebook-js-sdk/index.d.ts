// Type definitions for the Facebook Javascript SDK 3.3
// Project: https://developers.facebook.com/docs/javascript
// Definitions by:  Amrit Kahlon    <https://github.com/amritk>
//                  Mahmoud Zohdi   <https://github.com/mahmoudzohdi>
//                  Marc Knaup      <https://github.com/fluidsonic>
//                  Ben Grynhaus    <https://github.com/bengry>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

import fb = facebook;
declare var FB: fb.FacebookStatic;
declare namespace facebook {
    type FacebookEventType =
        | 'auth.authResponseChange'
        | 'auth.logout'
        | 'auth.login'
        | 'auth.statusChange'
        | 'xfbml.render';

    type LoginStatus =
        | 'authorization_expired'
        | 'connected'
        | 'not_authorized'
        | 'unknown';

    type FacebookEventCallback<
        TEvent extends FacebookEventType
    > = TEvent extends 'xfbl.render'
        ? () => void
        : (response: StatusResponse) => void;

    type UserField =
        | 'id'
        | 'about'
        | 'age_range'
        | 'birthday'
        | 'education'
        | 'email'
        | 'favorite_athletes'
        | 'favorite_teams'
        | 'first_name'
        | 'gender'
        | 'hometown'
        | 'inspirational_people'
        | 'install_type'
        | 'is_guest_user'
        | 'languages'
        | 'last_name'
        | 'link'
        | 'location'
        | 'meeting_for'
        | 'middle_name'
        | 'name'
        | 'name_format'
        | 'payment_pricepoints'
        | 'name_political'
        | 'profile_pic'
        | 'quotes'
        | 'relationship_status'
        | 'religion'
        | 'shared_login_upgrade_required_by'
        | 'short_name'
        | 'significant_other'
        | 'sports'
        | 'supports_donate_button_in_live_video'
        | 'token_for_business'
        | 'video_upload_limits'
        | 'website';

    type AgeRange = { min: 13; max: 17 } | { min: 18; max: 20 } | { min: 21; max: undefined };
    type EducationExperience = any;
    type Experience = any;
    type Page = any;
    type PaymentPricepoints = any;
    type User = any;
    type VideoUploadLimits = any;

    interface FacebookStaticEvent {
        subscribe<TEvent extends FacebookEventType>(
            event: TEvent,
            callback: FacebookEventCallback<TEvent>
        ): void;
        unsubscribe<TEvent extends FacebookEventType>(
            event: TEvent,
            callback: FacebookEventCallback<TEvent>
        ): void;
    }

    interface FacebookStatic {
        api<TResponse>(
            path: string,
            callback: (response: TResponse) => void
        ): void;
        api<TParams extends object, TResponse>(
            path: string,
            params: TParams,
            callback: (response: TResponse) => void
        ): void;
        api<TParam extends UserField>(
            path: '/me',
            params: { fields: TParam[] },
            callback: (response: {
                id: number;
                about?: TParam extends 'about' ? string : never;
                age_range?: TParam extends 'age_range' ? AgeRange : never;
                birthday?: TParam extends 'birthday' ? string : never;
                education?: TParam extends 'education' ? EducationExperience[] : never;
                email?: TParam extends 'email' ? string : never;
                favorite_athletes?: TParam extends 'favorite_athletes' ? Experience[] : never;
                favorite_teams?: TParam extends 'favorite_teams' ? Experience[] : never;
                first_name?: TParam extends 'first_name' ? string : never;
                gender?: TParam extends 'gender' ? string : never;
                hometown?: TParam extends 'hometown' ? Page : never;
                inspirational_people?: TParam extends 'inspirational_people' ? Experience[] : never;
                install_type?: TParam extends 'install_type' ? any : never;
                is_guest_user?: TParam extends 'is_guest_user' ? boolean : never;
                languages?: TParam extends 'languages' ? Experience[] : never;
                last_name?: TParam extends 'last_name' ? string : never;
                link?: TParam extends 'link' ? string : never;
                location?: TParam extends 'location' ? Page : never;
                meeting_for?: TParam extends 'meeting_for' ? string[] : never;
                middle_name?: TParam extends 'middle_name' ? string : never;
                name?: TParam extends 'name' ? string : never;
                name_format?: TParam extends 'name_format' ? string : never;
                payment_pricepoints?: TParam extends 'payment_pricepoints' ? PaymentPricepoints : never;
                name_political?: TParam extends 'political' ? string : never;
                profile_pic?: TParam extends 'profile_pic' ? string : never;
                quotes?: TParam extends 'quotes' ? string : never;
                relationship_status?: TParam extends 'relationship_status' ? string : never;
                religion?: TParam extends 'religion' ? string : never;
                shared_login_upgrade_required_by?: TParam extends 'shared_login_upgrade_required_by' ? any : never;
                short_name?: TParam extends 'short_name' ? any : never;
                significant_other?: TParam extends 'significant_other' ? User : never;
                sports?: TParam extends 'sports' ? Experience[] : never;
                supports_donate_button_in_live_video?: TParam extends 'supports_donate_button_in_live_video'
                    ? boolean
                    : never;
                token_for_business?: TParam extends 'token_for_business' ? VideoUploadLimits : never;
                video_upload_limits?: TParam extends 'video_upload_limits' ? string : never;
                website?: TParam extends 'website' ? string : never;
            }) => void,
        ): void;
        api<TParams extends object, TResponse>(
            path: string,
            method: 'get' | 'post' | 'delete',
            params: TParams,
            callback: (response: TResponse) => void
        ): void;

        AppEvents: any;
        Canvas: any;
        Event: FacebookStaticEvent;

        /**
         * The method FB.getAuthResponse() is a synchronous accessor for the current authResponse.
         * The synchronous nature of this method is what sets it apart from the other login methods.
         *
         * This method is similar in nature to FB.getLoginStatus(), but it returns just the authResponse object.
         */
        getAuthResponse(): AuthResponse | null;

        /**
         * FB.getLoginStatus() allows you to determine if a user is
         * logged in to Facebook and has authenticated your app.
         *
         * @param callback function to handle the response.
         * @param roundtrip force a roundtrip to Facebook - effectively refreshing the cache of the response object
         */
        getLoginStatus(
            callback: (response: StatusResponse) => void,
            roundtrip?: boolean
        ): void;

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
        login(
            callback: (response: StatusResponse) => void,
            options?: LoginOptions
        ): void;

        /**
         * Use this function to log the user in
         *
         * Calling FB.login() results in the JS SDK attempting to open a popup window.
         * As such, this method should only be called after a user click event, otherwise
         * the popup window will be blocked by most browsers.
         *
         * @param options optional ILoginOption to add params such as scope.
         */
        login(options?: LoginOptions): void;

        /**
         * The method FB.logout() logs the user out of your site and, in some cases, Facebook.
         *
         * @param callback optional function to handle the response
         */
        logout(callback?: (response: StatusResponse) => void): void;

        /**
         * @see https://developers.facebook.com/docs/sharing/reference/share-dialog
         */
        ui(
            params: ShareDialogParams,
            callback?: (response: ShareDialogResponse) => void
        ): void;

        /**
         * @see https://developers.facebook.com/docs/sharing/reference/share-dialog
         */
        ui(
            params: ShareOpenGraphDialogParams,
            callback?: (response: ShareOpenGraphDialogResponse) => void
        ): void;

        /**
         * @see https://developers.facebook.com/docs/pages/page-tab-dialog
         */
        ui(
            params: AddPageTabDialogParams,
            callback?: (response: DialogResponse) => void
        ): void;

        /**
         * @see https://developers.facebook.com/docs/games/services/gamerequests
         */
        ui(
            params: GameRequestDialogParams,
            callback?: (response: GameRequestDialogResponse) => void
        ): void;

        /**
         * @see https://developers.facebook.com/docs/payments/reference/paydialog
         */
        ui(
            params: PayDialogParams,
            callback?: (response: PayDialogResponse) => void
        ): void;

        /**
         * @see https://developers.facebook.com/docs/games_payments/payments_lite
         */
        ui(
            params: PaymentsLiteDialogParams,
            callback?: (response: PaymentsLiteDialogResponse) => void
        ): void;

        /**
         * @see https://developers.facebook.com/docs/videos/live-video/exploring-live#golivedialog
         */
        ui(
            params: LiveDialogParams,
            callback?: (response: LiveDialogResponse) => void
        ): void;

        /**
         * @see https://developers.facebook.com/docs/sharing/reference/send-dialog
         */
        ui(
            params: SendDialogParams,
            callback?: (response: DialogResponse) => void
        ): void;

        /**
         * @see https://developers.facebook.com/docs/marketing-api/guides/offer-ads/#create-offer-dialog
         */
        ui(
            params: CreateOfferDialogParams,
            callback?: (response: CreateOfferDialogResponse) => void
        ): void;

        /**
         * @see https://developers.facebook.com/docs/marketing-api/guides/lead-ads/create#create-leadgen-dialog
         */
        ui(
            params: LeadgenDialogParams,
            callback?: (response: LeadgenDialogResponse) => void
        ): void;

        /**
         * @see https://developers.facebook.com/docs/marketing-api/guides/canvas-ads#canvas-ads-dialog
         */
        ui(
            params: InstantExperiencesAdsDialogParams,
            callback?: (response: InstantExperiencesAdsDialogResponse) => void
        ): void;

        /**
         * @see https://developers.facebook.com/docs/marketing-api/guides/canvas-ads#canvas-preview-dialog
         */
        ui(
            params: InstantExperiencesPreviewDialogParams,
            callback?: (response: DialogResponse) => void
        ): void;

        /**
         * @see https://developers.facebook.com/docs/marketing-api/guides/collection#collection-ads-dialog
         */
        ui(
            params: CollectionAdsDialogParams,
            callback?: (response: CollectionAdsDialogResponse) => void
        ): void;

        XFBML: any;
    }

    interface InitParams {
        appId?: string;
        version: string;
        cookie?: boolean;
        status?: boolean;
        xfbml?: boolean;
        frictionlessRequests?: boolean;
        hideFlashCallback?: boolean;
        autoLogAppEvents?: boolean;
    }

    interface LoginOptions {
        auth_type?: 'reauthenticate' | 'reauthorize' | 'rerequest';
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
        hashtag?: string;
        quote?: string;
        mobile_iframe?: boolean;
    }

    interface ShareOpenGraphDialogParams extends DialogParams {
        method: 'share_open_graph';
        action_type: string;
        action_properties: { [property: string]: any };
        href: string;
        hashtag?: string;
        quote?: string;
        mobile_iframe?: false;
    }

    interface AddPageTabDialogParams extends DialogParams {
        method: 'pagetab';
        redirect_uri: string;
    }

    interface GameRequestDialogParams extends DialogParams {
        method: 'apprequests';
        message: string;
        action_type?: 'send' | 'askfor' | 'turn';
        data?: string;
        exclude_ids?: string[];
        filters?:
            | 'app_users'
            | 'app_non_users'
            | Array<{ name: string; user_ids: string[] }>;
        max_recipients?: number;
        object_id?: string;
        suggestions?: string[];
        title?: string;
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
        pricepoint_id?: string;
        request_id?: string;
        test_currency?: string;
    }

    interface PaymentsLiteDialogParams extends DialogParams {
        method: 'pay';
        action: 'purchaseiap';
        product_id: string;
        developer_payload?: string;
        quantity?: number;
    }

    interface LiveDialogParams extends DialogParams {
        method: 'live_broadcast';
        display: 'popup' | 'iframe';
        phase: 'create' | 'publish';
        broadcast_data?: LiveDialogResponse;
    }

    interface CreateOfferDialogParams extends DialogParams {
        account_id: string;
        display: 'popup';
        method: 'create_offer';
        objective:
            | 'APP_INSTALLS'
            | 'CONVERSIONS'
            | 'LINK_CLICKS'
            | 'OFFER_CLAIMS'
            | 'PRODUCT_CATALOG_SALES'
            | 'STORE_VISITS';
        page_id: string;
    }

    interface LeadgenDialogParams extends DialogParams {
        account_id: string;
        display: 'popup';
        method: 'lead_gen';
        page_id: string;
    }

    interface InstantExperiencesAdsDialogParams extends DialogParams {
        display: 'popup';
        method: 'canvas_editor';
        business_id: string;
        page_id: string;
        canvas_id?: string;
    }

    interface InstantExperiencesPreviewDialogParams extends DialogParams {
        display: 'popup';
        method: 'canvas_preview';
        canvas_id: string;
    }

    interface CollectionAdsDialogParams
        extends InstantExperiencesAdsDialogParams {
        account_id: string;
        canvas_id?: undefined;
        template_id: string;
        product_catalog_id?: string;
        product_set_id?: string;
    }

    ////////////////////////
    //
    //  RESPONSES
    //
    ////////////////////////
    interface AuthResponse {
        accessToken: string;
        expiresIn: number;
        signedRequest: string;
        userID: string;
        grantedScopes?: string;
        reauthorize_required_in?: number;
    }

    interface StatusResponse {
        status: LoginStatus;
        authResponse: AuthResponse;
    }

    interface DialogResponse {
        error_code?: number;
        error_message?: string;
    }

    interface ShareDialogResponse extends DialogResponse {
        post_id: string;
    }

    interface ShareOpenGraphDialogResponse extends DialogResponse {
        post_id: string;
    }

    interface GameRequestDialogResponse extends DialogResponse {
        request: string;
        to: string[];
    }

    interface PayDialogResponse extends DialogResponse {
        payment_id: string;
        amount: string;
        currency: string;
        quantity: string;
        request_id?: string;
        status: 'completed' | 'initiated';
        signed_request: string;
    }

    interface PaymentsLiteDialogResponse extends DialogResponse {
        app_id: number;
        developer_payload?: string;
        payment_id: number;
        product_id: string;
        purchase_time: number;
        purchase_token: string;
        signed_request: string;
    }

    interface LiveDialogResponse extends DialogResponse {
        id: string;
        stream_url: string;
        secure_stream_url: string;
        status: string;
    }

    interface CreateOfferDialogResponse extends DialogResponse {
        id: string;
        success: boolean;
    }

    interface LeadgenDialogResponse extends DialogResponse {
        formID: string;
        success: boolean;
    }

    interface InstantExperiencesAdsDialogResponse extends DialogResponse {
        id: string;
        success: boolean;
    }

    interface CollectionAdsDialogResponse
        extends InstantExperiencesAdsDialogResponse {}
}
