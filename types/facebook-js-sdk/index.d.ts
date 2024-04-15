declare function fbAsyncInit(): void;

import fb = facebook;
declare var FB: fb.FacebookStatic;
declare namespace facebook {
    type FacebookEventType =
        | "auth.authResponseChange"
        | "auth.logout"
        | "auth.login"
        | "auth.statusChange"
        | "xfbml.render";

    type LoginStatus =
        | "authorization_expired"
        | "connected"
        | "not_authorized"
        | "unknown";

    type FacebookEventCallback<
        TEvent extends FacebookEventType,
    > = TEvent extends "xfbl.render" ? () => void
        : (response: StatusResponse) => void;

    type UserField =
        | "id"
        | "about"
        | "age_range"
        | "birthday"
        | "education"
        | "email"
        | "favorite_athletes"
        | "favorite_teams"
        | "first_name"
        | "gender"
        | "hometown"
        | "inspirational_people"
        | "install_type"
        | "is_guest_user"
        | "languages"
        | "last_name"
        | "link"
        | "location"
        | "meeting_for"
        | "middle_name"
        | "name"
        | "name_format"
        | "payment_pricepoints"
        | "name_political"
        | "profile_pic"
        | "quotes"
        | "relationship_status"
        | "religion"
        | "shared_login_upgrade_required_by"
        | "short_name"
        | "significant_other"
        | "sports"
        | "supports_donate_button_in_live_video"
        | "token_for_business"
        | "video_upload_limits"
        | "website";

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
            callback: FacebookEventCallback<TEvent>,
        ): void;
        unsubscribe<TEvent extends FacebookEventType>(
            event: TEvent,
            callback: FacebookEventCallback<TEvent>,
        ): void;
    }

    interface FacebookStatic {
        api<TResponse>(
            path: string,
            callback: (response: TResponse) => void,
        ): void;
        api<TParams extends object, TResponse>(
            path: string,
            params: TParams,
            callback: (response: TResponse) => void,
        ): void;
        api<TParam extends UserField>(
            path: "/me",
            params: { fields: TParam[] },
            callback: (response: {
                id: number;
                about?: TParam extends "about" ? string : never | undefined | undefined;
                age_range?: TParam extends "age_range" ? AgeRange : never | undefined | undefined;
                birthday?: TParam extends "birthday" ? string : never | undefined | undefined;
                education?: TParam extends "education" ? EducationExperience[] : never | undefined | undefined;
                email?: TParam extends "email" ? string : never | undefined | undefined;
                favorite_athletes?: TParam extends "favorite_athletes" ? Experience[] : never | undefined | undefined;
                favorite_teams?: TParam extends "favorite_teams" ? Experience[] : never | undefined | undefined;
                first_name?: TParam extends "first_name" ? string : never | undefined | undefined;
                gender?: TParam extends "gender" ? string : never | undefined | undefined;
                hometown?: TParam extends "hometown" ? Page : never | undefined | undefined;
                inspirational_people?: TParam extends "inspirational_people" ? Experience[]
                    : never | undefined | undefined;
                install_type?: TParam extends "install_type" ? any : never | undefined | undefined;
                is_guest_user?: TParam extends "is_guest_user" ? boolean : never | undefined | undefined;
                languages?: TParam extends "languages" ? Experience[] : never | undefined | undefined;
                last_name?: TParam extends "last_name" ? string : never | undefined | undefined;
                link?: TParam extends "link" ? string : never | undefined | undefined;
                location?: TParam extends "location" ? Page : never | undefined | undefined;
                meeting_for?: TParam extends "meeting_for" ? string[] : never | undefined | undefined;
                middle_name?: TParam extends "middle_name" ? string : never | undefined | undefined;
                name?: TParam extends "name" ? string : never | undefined | undefined;
                name_format?: TParam extends "name_format" ? string : never | undefined | undefined;
                payment_pricepoints?: TParam extends "payment_pricepoints" ? PaymentPricepoints
                    : never | undefined | undefined;
                name_political?: TParam extends "political" ? string : never | undefined | undefined;
                profile_pic?: TParam extends "profile_pic" ? string : never | undefined | undefined;
                quotes?: TParam extends "quotes" ? string : never | undefined | undefined;
                relationship_status?: TParam extends "relationship_status" ? string : never | undefined | undefined;
                religion?: TParam extends "religion" ? string : never | undefined | undefined;
                shared_login_upgrade_required_by?: TParam extends "shared_login_upgrade_required_by" ? any
                    : never | undefined | undefined;
                short_name?: TParam extends "short_name" ? any : never | undefined | undefined;
                significant_other?: TParam extends "significant_other" ? User : never | undefined | undefined;
                sports?: TParam extends "sports" ? Experience[] : never | undefined | undefined;
                supports_donate_button_in_live_video?: TParam extends "supports_donate_button_in_live_video" ? boolean
                    : never | undefined | undefined;
                token_for_business?: TParam extends "token_for_business" ? VideoUploadLimits
                    : never | undefined | undefined;
                video_upload_limits?: TParam extends "video_upload_limits" ? string : never | undefined | undefined;
                website?: TParam extends "website" ? string : never | undefined | undefined;
            }) => void,
        ): void;
        api<TParams extends object, TResponse>(
            path: string,
            method: "get" | "post" | "delete",
            params: TParams,
            callback: (response: TResponse) => void,
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
            roundtrip?: boolean,
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
            options?: LoginOptions,
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
            callback?: (response: ShareDialogResponse) => void,
        ): void;

        /**
         * @see https://developers.facebook.com/docs/sharing/reference/share-dialog
         */
        ui(
            params: ShareOpenGraphDialogParams,
            callback?: (response: ShareOpenGraphDialogResponse) => void,
        ): void;

        /**
         * @see https://developers.facebook.com/docs/pages/page-tab-dialog
         */
        ui(
            params: AddPageTabDialogParams,
            callback?: (response: DialogResponse) => void,
        ): void;

        /**
         * @see https://developers.facebook.com/docs/games/services/gamerequests
         */
        ui(
            params: GameRequestDialogParams,
            callback?: (response: GameRequestDialogResponse) => void,
        ): void;

        /**
         * @see https://developers.facebook.com/docs/payments/reference/paydialog
         */
        ui(
            params: PayDialogParams,
            callback?: (response: PayDialogResponse) => void,
        ): void;

        /**
         * @see https://developers.facebook.com/docs/games_payments/payments_lite
         */
        ui(
            params: PaymentsLiteDialogParams,
            callback?: (response: PaymentsLiteDialogResponse) => void,
        ): void;

        /**
         * @see https://developers.facebook.com/docs/videos/live-video/exploring-live#golivedialog
         */
        ui(
            params: LiveDialogParams,
            callback?: (response: LiveDialogResponse) => void,
        ): void;

        /**
         * @see https://developers.facebook.com/docs/sharing/reference/send-dialog
         */
        ui(
            params: SendDialogParams,
            callback?: (response: DialogResponse) => void,
        ): void;

        /**
         * @see https://developers.facebook.com/docs/marketing-api/guides/offer-ads/#create-offer-dialog
         */
        ui(
            params: CreateOfferDialogParams,
            callback?: (response: CreateOfferDialogResponse) => void,
        ): void;

        /**
         * @see https://developers.facebook.com/docs/marketing-api/guides/lead-ads/create#create-leadgen-dialog
         */
        ui(
            params: LeadgenDialogParams,
            callback?: (response: LeadgenDialogResponse) => void,
        ): void;

        /**
         * @see https://developers.facebook.com/docs/marketing-api/guides/canvas-ads#canvas-ads-dialog
         */
        ui(
            params: InstantExperiencesAdsDialogParams,
            callback?: (response: InstantExperiencesAdsDialogResponse) => void,
        ): void;

        /**
         * @see https://developers.facebook.com/docs/marketing-api/guides/canvas-ads#canvas-preview-dialog
         */
        ui(
            params: InstantExperiencesPreviewDialogParams,
            callback?: (response: DialogResponse) => void,
        ): void;

        /**
         * @see https://developers.facebook.com/docs/marketing-api/guides/collection#collection-ads-dialog
         */
        ui(
            params: CollectionAdsDialogParams,
            callback?: (response: CollectionAdsDialogResponse) => void,
        ): void;

        XFBML: any;
    }

    interface InitParams {
        appId?: string | undefined;
        version: string;
        cookie?: boolean | undefined;
        status?: boolean | undefined;
        xfbml?: boolean | undefined;
        frictionlessRequests?: boolean | undefined;
        hideFlashCallback?: boolean | undefined;
        autoLogAppEvents?: boolean | undefined;
    }

    interface LoginOptions {
        auth_type?: "reauthenticate" | "reauthorize" | "rerequest" | undefined;
        scope?: string | undefined;
        return_scopes?: boolean | undefined;
        enable_profile_selector?: boolean | undefined;
        profile_selector_ids?: string | undefined;
        config_id?: string | undefined;
        response_type?: string | undefined;
        override_default_response_type?: boolean | undefined;
    }

    ////////////////////////
    //
    //  DIALOGS
    //
    ////////////////////////

    interface DialogParams {
        app_id?: string | undefined;
        redirect_uri?: string | undefined;
        display?: "page" | "iframe" | "async" | "popup" | undefined;
    }

    interface ShareDialogParams extends DialogParams {
        method: "share";
        href: string;
        hashtag?: string | undefined;
        quote?: string | undefined;
        mobile_iframe?: boolean | undefined;
    }

    interface ShareOpenGraphDialogParams extends DialogParams {
        method: "share_open_graph";
        action_type: string;
        action_properties: { [property: string]: any };
        href: string;
        hashtag?: string | undefined;
        quote?: string | undefined;
        mobile_iframe?: false | undefined;
    }

    interface AddPageTabDialogParams extends DialogParams {
        method: "pagetab";
        redirect_uri: string;
    }

    interface GameRequestDialogParams extends DialogParams {
        method: "apprequests";
        message: string;
        action_type?: "send" | "askfor" | "turn" | undefined;
        data?: string | undefined;
        exclude_ids?: string[] | undefined;
        filters?:
            | "app_users"
            | "app_non_users"
            | Array<{ name: string; user_ids: string[] }>
            | undefined;
        max_recipients?: number | undefined;
        object_id?: string | undefined;
        suggestions?: string[] | undefined;
        title?: string | undefined;
        to?: string | number | undefined;
    }

    interface SendDialogParams extends DialogParams {
        method: "send";
        to?: string | undefined;
        link: string;
    }

    interface PayDialogParams extends DialogParams {
        method: "pay";
        action: "purchaseitem";
        product: string;
        quantity?: number | undefined;
        quantity_min?: number | undefined;
        quantity_max?: number | undefined;
        pricepoint_id?: string | undefined;
        request_id?: string | undefined;
        test_currency?: string | undefined;
    }

    interface PaymentsLiteDialogParams extends DialogParams {
        method: "pay";
        action: "purchaseiap";
        product_id: string;
        developer_payload?: string | undefined;
        quantity?: number | undefined;
    }

    interface LiveDialogParams extends DialogParams {
        method: "live_broadcast";
        display: "popup" | "iframe";
        phase: "create" | "publish";
        broadcast_data?: LiveDialogResponse | undefined;
    }

    interface CreateOfferDialogParams extends DialogParams {
        account_id: string;
        display: "popup";
        method: "create_offer";
        objective:
            | "APP_INSTALLS"
            | "CONVERSIONS"
            | "LINK_CLICKS"
            | "OFFER_CLAIMS"
            | "PRODUCT_CATALOG_SALES"
            | "STORE_VISITS";
        page_id: string;
    }

    interface LeadgenDialogParams extends DialogParams {
        account_id: string;
        display: "popup";
        method: "lead_gen";
        page_id: string;
    }

    interface InstantExperiencesAdsDialogParams extends DialogParams {
        display: "popup";
        method: "canvas_editor";
        business_id: string;
        page_id: string;
        canvas_id?: string | undefined;
    }

    interface InstantExperiencesPreviewDialogParams extends DialogParams {
        display: "popup";
        method: "canvas_preview";
        canvas_id: string;
    }

    interface CollectionAdsDialogParams extends InstantExperiencesAdsDialogParams {
        account_id: string;
        canvas_id?: undefined;
        template_id: string;
        product_catalog_id?: string | undefined;
        product_set_id?: string | undefined;
    }

    ////////////////////////
    //
    //  RESPONSES
    //
    ////////////////////////
    interface AuthResponse {
        accessToken?: string | undefined;
        data_access_expiration_time?: number | undefined;
        expiresIn: number;
        signedRequest?: string | undefined;
        userID: string;
        grantedScopes?: string | undefined;
        reauthorize_required_in?: number | undefined;
        code?: string | undefined;
    }

    interface StatusResponse {
        status: LoginStatus;
        authResponse: AuthResponse;
    }

    interface DialogResponse {
        error_code?: number | undefined;
        error_message?: string | undefined;
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
        request_id?: string | undefined;
        status: "completed" | "initiated";
        signed_request: string;
    }

    interface PaymentsLiteDialogResponse extends DialogResponse {
        app_id: number;
        developer_payload?: string | undefined;
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

    interface CollectionAdsDialogResponse extends InstantExperiencesAdsDialogResponse {}
}
