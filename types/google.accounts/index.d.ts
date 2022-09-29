// Type definitions for non-npm package Google Identity Services JavaScript SDK 0.0
// Project: https://developers.google.com/identity/oauth2/web/reference/js-reference
//     https://developers.google.com/identity/gsi/web/reference/js-reference
// Definitions by: Arthur E. Jones <https://github.com/partylich>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare namespace google.accounts {
    namespace oauth2 {
        /**
         * Initializes and returns a code client, with the configurations in the
         * parameter.
         */
        function initCodeClient(config: CodeClientConfig): CodeClient;

        /**
         * Initializes and returns a token client, with the configurations in the
         * parameter.
         */
        function initTokenClient(config: TokenClientConfig): TokenClient;

        /**
         * Checks if the user granted all the specified scope or scopes.
         */
        function hasGrantedAllScopes(
            tokenResponse: TokenResponse,
            firstScope: string,
            ...restScopes: string[]
        ): boolean;

        /**
         * Checks if the user granted any of the specified scope or scopes.
         */
        function hasGrantedAnyScope(tokenResponse: TokenResponse, firstScope: string, ...restScopes: string[]): boolean;

        /**
         * Revokes all of the scopes that the user granted to the app. A valid
         * access token is required to revoke the permission
         */
        function revoke(accessToken: string, done: () => void): void;

        interface OverridableTokenClientConfig {
            /**
             * Optional. A space-delimited, case-sensitive list of prompts to
             * present the user.
             */
            prompt?: string;

            /**
             * Optional. If set to false, more granular Google Account
             * permissions will be disabled for clients created before 2019. No
             * effect for newer clients, since more granular permissions is
             * always enabled for them.
             */
            enable_serial_consent?: boolean;

            /**
             * Optional. If your application knows which user should authorize
             * the request, it can use this property to provide a hint to
             * Google. The email address for the target user. For more
             * information, see the login_hint field in the OpenID Connect docs.
             */
            hint?: string;

            /**
             * Optional. Not recommended. Specifies any string value that your
             * application uses to maintain state between your authorization
             * request and the authorization server's response.
             */
            state?: string;
        }

        interface TokenClient {
            /**
             * starts the OAuth 2.0 Token UX flow
             */
            requestAccessToken: (overrideConfig?: OverridableTokenClientConfig) => void;
        }

        interface CodeClient {
            /**
             * starts the OAuth 2.0 Code UX flow.
             */
            requestCode: () => void;
        }

        /**
         * A TokenResponse JavaScript object will be passed to your callback
         * method in the popup UX.
         */
        interface TokenResponse {
            /**
             * The access token of a successful token response.
             */
            access_token: string;

            /**
             * The lifetime in seconds of the access token.
             */
            expires_in: string;

            /**
             * The hosted domain the signed-in user belongs to.
             */
            hd: string;

            /**
             * The prompt value that was used from the possible list of values
             * specified by TokenClientConfig or OverridableTokenClientConfig.
             */
            prompt: string;

            /**
             * The type of the token issued.
             */
            token_type: string;

            /**
             * A space-delimited list of scopes that are approved by the user.
             */
            scopes: string;

            /**
             * The string value that your application uses to maintain state
             * between your authorization request and the response.
             */
            state: string;

            /**
             * A single ASCII error code.
             */
            error: string;

            /**
             * Human-readable ASCII text providing additional information, used
             * to assist the client developer in understanding the error that
             * occurred.
             */
            error_description: string;

            /**
             * A URI identifying a human-readable web page with information
             * about the error, used to provide the client developer with
             * additional information about the error.
             */
            error_uri: string;
        }

        interface TokenClientConfig {
            /**
             * Required.
             * The client ID for your application. You can find this value in
             * the API Console.
             */
            client_id: string;

            /**
             * Required. The JavaScript function name that handles returned
             * token response.
             */
            callback: (tokenResponse: TokenResponse) => void;

            /**
             * Optional.
             * A space-delimited list of scopes that identify the resources that
             * your application could access on the user's behalf. These values
             * inform the consent screen that Google displays to the user.
             */
            scope?: string;

            /**
             * Optional, defaults to 'select_account'.
             * A space-delimited, case-sensitive list of prompts to present the
             * user.
             * Possible values are:
             * empty string The user will be prompted only the first time your
             *     app requests access. Cannot be specified with other values.
             * 'none' Do not display any authentication or consent screens. Must
             *     not be specified with other values.
             * 'consent' Prompt the user for consent.
             * 'select_account' Prompt the user to select an account.
             */
            prompt?: '' | 'none' | 'consent' | 'select_account';

            /**
             * Optional, defaults to true.
             * If set to false, more granular Google Account permissions will be
             * disabled for clients created before 2019. No effect for newer
             * clients, since more granular permissions is always enabled for
             * them.
             */
            enable_serial_consent?: boolean;

            /**
             * Optional.
             * If your application knows which user should authorize the
             * request, it can use this property to provide a hint to Google.
             * The email address for the target user. For more information, see
             * the login_hint field in the OpenID Connect docs.
             */
            hint?: string;

            /**
             * Optional.
             * If your application knows the Workspace domain the user belongs
             * to, use this to provide a hint to Google. For more information,
             * see the hd field in the OpenID Connect docs.
             */
            hosted_domain?: string;

            /**
             * Optional. Not recommended.
             * Specifies any string value that your application uses to maintain
             * state between your authorization request and the authorization
             * server's response.
             */
            state?: string;
        }

        interface CodeClientConfig {
            /**
             * Required. The client ID for your application. You can find this
             * value in the API Console.
             */
            client_id: string;

            /**
             * Required. A space-delimited list of scopes that identify the
             * resources that your application could access on the user's
             * behalf. These values inform the consent screen that Google
             * displays to the user.
             */
            scope: string;

            /**
             * Required for redirect UX. Determines where the API server
             * redirects the user after the user completes the authorization
             * flow. The value must exactly match one of the authorized redirect
             * URIs for the OAuth 2.0 client, which you configured in the API
             * Console and must conform to our Redirect URI validation rules.
             * The property will be ignored by the popup UX.
             */
            redirect_uri?: string;

            /**
             * Required for popup UX. The JavaScript function name that handles
             * returned code response. The property will be ignored by the
             * redirect UX.
             */
            callback?: (response: unknown) => void;

            /**
             * Optional. Recommended for redirect UX. Specifies any string value
             * that your application uses to maintain state between your
             * authorization request and the authorization server's response.
             */
            state?: string;

            /**
             * Optional, defaults to true. If set to false, more granular Google
             * Account permissions will be disabled for clients created before
             * 2019. No effect for newer clients, since more granular
             * permissions is always enabled for them.
             */
            enable_serial_consent?: boolean;

            /**
             * Optional. If your application knows which user should authorize
             * the request, it can use this property to provide a hint to
             * Google. The email address for the target user. For more
             * information, see the login_hint field in the OpenID Connect docs.
             */
            hint?: string;

            /**
             * Optional. If your application knows the Workspace domain the user
             * belongs to, use this to provide a hint to Google. For more
             * information, see the hd field in the OpenID Connect docs.
             */
            hosted_domain?: string;

            /**
             * Optional. The UX mode to use for the authorization flow. By
             * default, it will open the consent flow in a popup. Valid values
             * are popup and redirect.
             */
            ux_mode?: 'popup' | 'redirect';

            /**
             * Optional, defaults to 'false'. Boolean value to prompt the user
             * to select an account.
             */
            select_account?: boolean;
        }
    }

    namespace id {
        /**
         * Initializes the Sign In With Google client based on the configuration
         * object.
         */
        function initialize(idConfig: IdConfiguration): void;

        /**
         * Displays the One Tap prompt or the browser native credential manager
         * after the initialize() method is invoked.
         */
        function prompt(momentListener?: (promptMomentNotification: PromptMomentNotification) => void): void;

        /**
         * Renders a Sign In With Google button in your web pages.
         */
        function renderButton(parent: HTMLElement, options: GsiButtonConfiguration): void;

        /**
         * When the user signs out of your website, you need to call the method
         * google.accounts.id.disableAutoSelect to record the status in cookies.
         * This prevents a UX dead loop.
         */
        function disableAutoSelect(): void;

        /**
         * A simple wrapper for the store() method of the browser's native
         * credential manager API. Therefore, it can only be used to store a
         * password credential.
         */
        function storeCredential(credential: Credential, callback?: () => void): void;

        /**
         * Cancel the One Tap flow if you remove the prompt from the relying
         * party DOM. The cancel operation is ignored if a credential is already
         * selected
         */
        function cancel(): void;

        /**
         * Revokes the OAuth grant used to share the ID token for the specified
         * user.
         */
        function revoke(hint: string, callback?: (response: RevocationResponse) => void): void;

        interface RevocationResponse {
            /**
             * This field is a boolean value set to true if the revoke method
             * call succeeded or false on failure.
             */
            successful: boolean;

            /**
             * This field is a string value and contains a detailed error
             * message if the revoke method call failed, it is undefined on
             * success.
             */
            error?: string;
        }

        interface Credential {
            id: string;
            password: string;
        }

        interface IdConfiguration {
            /**
             * Your application's client ID
             */
            client_id: string;

            /**
             * Enables automatic selection.
             */
            auto_select?: boolean;

            /**
             * The JavaScript function that handles ID tokens.
             * Required for Google One Tap and the Sign In With Google button
             * popup UX mode
             */
            callback?: (response: CredentialResponse) => void;

            /**
             * The URL of your login endpoint.
             * Defaults to the URI of the current page, or the value you
             * specify.
             * Only used when ux_mode: "redirect" is set.
             */
            login_uri?: string;

            /**
             * The JavaScript function that handles password credentials.
             */
            native_callback?: (response: CredentialResponse) => void;

            /**
             * Cancels the prompt if the user clicks outside the prompt.
             * Default value is true.
             */
            cancel_on_tap_outside?: boolean;

            /**
             * The DOM ID of the One Tap prompt container element
             * If it's not set, the One Tap prompt is displayed in the top-right
             * corner of the window.
             */
            prompt_parent_id?: string;

            /**
             * A random string for ID tokens
             */
            nonce?: string;

            /**
             * Sets the title and message in the One Tap prompt
             * Available contexts:
             *   signin "Sign in with Google"
             *   signup "Sign up with Google"
             *   use    "Use with Google"
             */
            context?: 'signin' | 'signup' | 'use';

            /**
             * If you need to call One Tap in the parent domain and its
             * subdomains, pass the parent domain to this field so that a single
             * shared cookie is used.
             */
            state_cookie_domain?: string;

            /**
             * The Sign In With Google button UX flow. The default value is
             * popup.
             */
            ux_mode?: 'popup' | 'redirect';

            /**
             * The origins that are allowed to embed the intermediate iframe.
             * One Tap will run in the intermediate iframe mode if this field
             * presents.
             */
            allowed_parent_origin?: string | string[];

            /**
             * Overrides the default intermediate iframe behavior when users
             * manually close One Tap.
             */
            intermediate_iframe_close_callback?: () => void;

            /**
             * This field determines if the upgraded One Tap UX should be enabled
             * on browsers that support Intelligent Tracking Prevention (ITP).
             */
            itp_support?: boolean;
        }

        interface PromptMomentNotification {
            /**
             * Is this notification for a display moment?
             */
            isDisplayMoment(): boolean;

            /**
             * Is this notification for a display moment, and the UI is
             * displayed?
             */
            isDisplayed(): boolean;

            /**
             * Is this notification for a display moment, and the UI isn't
             * displayed?
             */
            isNotDisplayed(): boolean;

            /**
             * The detailed reason why the UI isn't displayed.
             */
            getNotDisplayedReason():
                | 'browser_not_supported'
                | 'invalid_client'
                | 'missing_client_id'
                | 'opt_out_or_no_session'
                | 'secure_http_required'
                | 'suppressed_by_user'
                | 'unregistered_origin'
                | 'unknown_reason';

            /**
             * Is this notification for a skipped moment?
             */
            isSkippedMoment(): boolean;

            /**
             * The detailed reason for the skipped moment.
             */
            getSkippedReason(): 'auto_cancel' | 'user_cancel' | 'tap_outside' | 'issuing_failed';

            /**
             * Is this notification for a dismissed moment?
             */
            isDismissedMoment(): boolean;

            /**
             * The detailed reason for the dismissal.
             */
            getDismissedReason(): 'credential_returned' | 'cancel_called' | 'flow_restarted';

            /**
             * Return a string for the moment type.
             */
            getMomentType(): 'display' | 'skipped' | 'dismissed';
        }

        /**
         * When your callback function is invoked, a CredentialResponse object
         * is passed as the parameter.
         */
        interface CredentialResponse {
            /**
             * the ID token as a base64-encoded JSON Web Token (JWT) string.
             */
            credential: string;

            /**
             * This field sets how the credential is selected.
             */
            select_by: string;
        }

        interface GsiButtonConfiguration {
            /**
             * The button type: icon, or standard button.
             */
            type: 'standard' | 'icon';

            /**
             * The button theme. For example, filled_blue or filled_black.
             * outline  A standard button theme:
             * filled_blue  A blue-filled button theme:
             * filled_black  A black-filled button theme:
             */
            theme?: 'outline' | 'filled_blue' | 'filled_black';

            /**
             * The button size. For example, small or large.
             */
            size?: 'small' | 'medium' | 'large';

            /**
             * The button text. The default value is signin_with.
             * There are no visual differences for the text of icon buttons that
             * have different text attributes. The only exception is when the
             * text is read for screen accessibility.
             *
             * signin_with  The button text is “Sign in with Google”:
             * signup_with  The button text is “Sign up with Google”:
             * continue_with  The button text is “Continue with Google”:
             * signup_with  The button text is “Sign in”:
             */
            text?: 'signin_with' | 'signup_with' | 'continue_with' | 'signin';

            /**
             * The button shape. The default value is rectangular.
             */
            shape?: 'rectangular' | 'pill' | 'circle' | 'square';

            /**
             * The alignment of the Google logo. The default value is left.
             * This attribute only applies to the standard button type.
             */
            logo_alignment?: 'left' | 'center';

            /**
             * The minimum button width, in pixels. The maximum width is 400
             * pixels.
             */
            width?: string;

            /**
             * The pre-set locale of the button text. If it's not set, the
             * browser's default locale or the Google session user’s preference
             * is used.
             */
            locale?: string;
        }
    }
}
