// Type definitions for non-npm package Sign In With Google JavaScript API 0.0
// Project: https://developers.google.com/identity/gsi/web/reference/js-reference
// Definitions by: Aron Høyer <https://github.com/aronhoyer>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

interface IdConfiguration {
    /** Your application's client ID */
    client_id: string;
    /** Enables automatic selection. */
    auto_select?: boolean;
    /** The JavaScript function that handles ID tokens. Google One Tap and the Sign In With Google button popup UX mode use this attribute. */
    callback?: (token: CredentialResponse) => void;
    /** The URL of your login endpoint. The Sign In With Google button redirect UX mode uses this attribute. */
    login_uri?: string;
    /** The JavaScript function that handles password credentials. */
    native_callback?: (credential: GsiCredential) => void;
    /** Cancels the prompt if the user clicks outside the prompt. */
    cancel_on_tap_outside?: boolean;
    /** The DOM ID of the One Tap prompt container element. */
    prompt_parent_id?: string;
    /** A random string for ID tokens. */
    nonce?: string;
    /** The title and words in the One Tap prompt. */
    context?: 'signin' | 'signup' | 'use';
    /** If you need to call One Tap in the parent domain and its subdomains, pass the parent domain to this field so that a single shared cookie is used. */
    state_cookie_domain?: string;
    /** The Sign In With Google button UX flow. */
    ux_mode?: 'popup' | 'redirect';
    /** The origins that are allowed to embed the intermediate iframe. One Tap will run in the intermediate iframe mode if this field presents. */
    allowed_parent_origin?: string | string[];
    /** Overrides the default intermediate iframe behavior when users manually close One Tap. */
    intermediate_iframe_close_callback?: () => void;
    /** Enables upgraded One Tap UX on ITP browsers. */
    itp_support?: boolean;
}

interface CredentialResponse {
    /** This field is the returned ID token. */
    credential: string;
    /** This field sets how the credential is selected. */
    select_by:
        | 'auto'
        | 'user'
        | 'user_1tap'
        | 'user_2tap'
        | 'btn'
        | 'btn_confirm'
        | 'btn_add_session'
        | 'btn_confirm_add_session';
}

interface GsiCredential {
    /** Identifies the user. */
    id: string;
    /** The password. */
    password: string;
}

interface PromptMomentNotification {
    /** Is this notification for a display moment? */
    isDisplayMoment: () => boolean;
    /** Is this notification for a display moment, and the UI is displayed? */
    isDisplayed: () => boolean;
    /** Is this notification for a display moment, and the UI isn't displayed? */
    isNotDisplayed: () => boolean;
    /** The detailed reason why the UI isn't displayed. */
    getNotDisplayedReason: () =>
        | 'browser_not_supported'
        | 'invalid_client'
        | 'missing_client_id'
        | 'opt_out_or_no_session'
        | 'secure_http_required'
        | 'suppressed_by_user'
        | 'unregistered_origin'
        | 'unknown_reason';
    /** Is this notification for a skipped moment? */
    isSkippedMoment: () => boolean;
    /** The detailed reason for the skipped moment. */
    getSkippedReason: () => 'auto_cancel' | 'user_cancel' | 'tap_outside' | 'issuing_failed';
    /** Is this notification for a dismissed moment? */
    isDismissedMoment: () => boolean;
    /** The detailed reason for the dismissal. */
    getDismissedReason: () => 'credential_returned' | 'cancel_called' | 'flow_restarted';
    /** Return a string for the moment type. */
    getMomentType: () => 'display' | 'skipped' | 'dismissed';
}

type MomentListener = (notification: PromptMomentNotification) => void;

interface GsiButtonConfiguration {
    /** The button type: icon, or standard button. */
    type: 'standard' | 'icon';
    /** The button theme. For example, filled_blue or filled_black. */
    theme?: 'outline' | 'filled_blue' | 'filled_black';
    /** The button size. For example, small or large. */
    size?: 'large' | 'medium' | 'small';
    /** The button text. For example, "Sign in with Google" or "Sign up with Google" */
    text?: 'signin_with' | 'signup_with' | 'continue_with';
    /** The button shape. For example, rectangular or circular. */
    shape?: 'rectangular' | 'pill' | 'circle' | 'square';
    /** The Google logo alignment: left or center. */
    logo_alignment?: 'left' | 'center';
    /** The button width, in pixels. */
    width?: string;
    /** If set, then the button language is rendered. */
    locale?: string;
}

interface RevocationResponse {
    /** This field is the return value of the method call. */
    successful: boolean;
    /** This field optionally contains a detailed error response message. */
    error: string;
}

declare namespace google.accounts.id {
    /**
     * The google.accounts.id.initialize method initializes the Sign In With Google client based on the configuration object.
     *
     * The following code example implements the google.accounts.id.initialize method with an onload function:
     *
     * ```
     * <script>
     * window.onload = function () {
     *   google.accounts.id.initialize({
     *     client_id: 'YOUR_GOOGLE_CLIENT_ID',
     *     callback: handleCredentialResponse
     *   })
     *   google.accounts.id.prompt()
     * }
     * </script>
     * ```
     *
     * @param configuration Id configuration options.
     */
    function initialize(configuration: IdConfiguration): void;

    /**
     * The google.accounts.id.prompt method displays the One Tap prompt or the browser native credential manager after the initialize() method is invoked.
     *
     * Normally, the prompt() method is called on page load. Due to the session status and user settings on the Google side, the One Tap prompt UI might not be displayed.
     * To get notified on the UI status for different moments, pass a function to receive UI status notifications.
     *
     * Notifications are fired on the following moments:
     * - **Display moment:** This occurs after the prompt() method is called. The notification contains a boolean value to indicate whether the UI is displayed or not.
     * - **Skipped moment:** This occurs when the One Tap prompt is closed by an auto cancel, a manual cancel, or when Google fails to issue a credential,
     * such as when the selected session has signed out of Google. In these cases, we recommend that you continue on to the next identity providers, if there are any.
     * - **Dismissed moment:** This occurs when Google successfully retrieves a credential or a user wants to stop the credential retrieval flow.
     * For example, when the user begins to input their username and password in your login dialog, you can call the google.accounts.id.cancel()
     * method to close the One Tap prompt and trigger a dismissed moment.
     *
     * The following code example implements the skipped moment:
     *
     * ```
     * <script>
     * window.onload = function () {
     *   google.accounts.id.initialize(...)
     *   google.accounts.id.prompt((notification) => {
     *     if (notification.isNotDisplayed() || notification.isSkippedMoment()) {
     *       // continue with another identity provider.
     *     }
     *   })
     * }
     * </script>
     * ```
     *
     * @param listener Listener function to handle moments.
     */
    function prompt(listener: MomentListener): void;

    /**
     * The google.accounts.id.renderButton method renders a Sign In With Google button in your web pages.
     *
     * @param parent The parent element onto which to mount the Sign In With Google button.
     * @param options Button configuration options.
     */
    function renderButton(parent: string, options: GsiButtonConfiguration): void;

    /**
     * When the user signs out of your website, you need to call the method google.accounts.id.disableAutoSelect to record the status in cookies. This prevents a UX dead loop.
     *
     * The following code example implements the google.accounts.id.disableAutoSelect method with an onSignout() function:
     *
     * ```
     * <script>
     * function onSignout() {
     *   google.accounts.id.disableAutoSelect()
     * }
     * </script>
     * ```
     */
    function disableAutoSelect(): void;

    /**
     * This method is a simple wrapper for the store() method of the browser's native credential manager API. Therefore, it can only be used to store a password credential.
     *
     * The following code example implements the google.accounts.id.storeCredential method with an onSignIn() function:
     *
     * ```
     * <script>
     * function onSignIn() {
     *   let cred = {id: '...', password: '...'}
     *   google.accounts.id.storeCredential(cred)
     * }
     * </script>
     * ```
     *
     * @param credential Credential object.
     * @param callback Optional callback to run code after the credentials are stored.
     */
    function storeCredential(credential: GsiCredential, callback?: () => void): void;

    /**
     * You can cancel the One Tap flow if you remove the prompt from the relying party DOM. The cancel operation is ignored if a credential is already selected.
     *
     * The following code example implements the google.accounts.id.cancel() method with an onNextButtonClicked() function:
     *
     * ```
     * <script>
     * function onNextButtonClicked() {
     *   google.accounts.id.cancel()
     *   showPasswordPage()
     * }
     * </script>
     * ```
     */
    function cancel(): void;

    /**
     * The google.accounts.id.revoke method revokes the OAuth grant used to share the ID token for the specified user.
     *
     * The following code sample shows how use the revoke method with an Id.
     *
     * ```
     * google.accounts.id.revoke('1618033988749895', done => {
     *   console.log(done.error)
     * })
     * ```
     * @param hint The email address or unique ID of the user's Google Account. The ID is the sub property of the credential payload.
     * @param callback Optional RevocationResponse handler.
     */
    function revoke(hint: string, callback?: (done: RevocationResponse) => void): void;
}

interface Window {
    /**
     * You can register an onGoogleLibraryLoad callback. It's notified after the Sign In With Google JavaScript library is loaded:
     *
     * ```
     * window.onGoogleLibraryLoad = () => {
     *   // ...
     * }
     * ```
     *
     * This callback is just a shortcut for the window.onload callback. There are no differences in behavior.
     *
     * The following code example implements an onGoogleLibraryLoad callback:
     *
     * ```
     * <script>
     * window.onGoogleLibraryLoad = () => {
     *   google.accounts.id.initialize({
     *     // ...
     *   })
     *   google.accounts.id.prompt()
     * }
     * </script>
     * ```
     */
    onGoogleLibraryLoad?: () => void;
}
