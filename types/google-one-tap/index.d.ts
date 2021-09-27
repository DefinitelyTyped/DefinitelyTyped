// Type definitions for google-one-tap 1.1
// Project: https://developers.google.com/identity/one-tap/web
// Definitions by: voidpumpkin <https://github.com/voidpumpkin>
//                 kostasmanionis <https://github.com/kostasmanionis>
//                 cmgt <https://github.com/cmgt>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export as namespace google;

export const accounts: accounts;

export interface accounts {
    id: {
        initialize: (idConfiguration: IdConfiguration) => void;
        disableAutoSelect: () => void;
        storeCredential: (credential?: string, callback?: () => void) => void;
        cancel: () => void;
        onGoogleLibraryLoad: () => void;
        prompt: (momentListener?: (promptMomentNotification: PromptMomentNotification) => void) => void;
        renderButton: (parent: HTMLElement, options: GsiButtonConfiguration, clickHandler?: () => void) => void;
    };
}

export interface GsiButtonConfiguration {
    type?: 'standard' | 'icon';
    theme?: 'outline' | 'filled_blue' | 'filled_black';
    size?: 'large' | 'medium' | 'small';
    text?: 'signin_with' | 'signup_with' | 'continue_with' | 'signup_with';
    shape?: 'rectangular' | 'pill' | 'circle' | 'square';
    logo_alignment?: 'left' | 'center';
    width?: number;
    locale?: string;
  }

export interface CredentialResponse {
    credential: string;
    select_by: string;
    client_id: string;
}

/// https://developers.google.com/identity/gsi/web/reference/js-reference
export interface IdConfiguration {
    client_id?: string | undefined;
    auto_select?: boolean | undefined;
    callback?: ((credentialResponse: CredentialResponse) => void) | undefined;
    login_uri?: string;
    native_callback?: (() => void) | undefined;
    cancel_on_tap_outside?: boolean | undefined;
    prompt_parent_id?: string | undefined;
    nonce?: string | undefined;
    context?: string | undefined;
    state_cookie_domain?: string | undefined;
    ux_mode?: 'popup' | 'redirect';
    allowed_parent_origin?: string | string[] | undefined;
    intermediate_iframe_close_callback?: (() => void) | undefined;
}

export interface PromptMomentNotification {
    isDisplayMoment: () => boolean;
    isDisplayed: () => boolean;
    isNotDisplayed: () => boolean;
    getNotDisplayedReason: () =>
        | 'browser_not_supported'
        | 'invalid_client'
        | 'missing_client_id'
        | 'opt_out_or_no_session'
        | 'secure_http_required'
        | 'suppressed_by_user'
        | 'unregistered_origin'
        | 'unknown_reason';
    isSkippedMoment: () => boolean;
    getSkippedReason: () => 'auto_cancel' | 'user_cancel' | 'tap_outside' | 'issuing_failed';
    isDismissedMoment: () => boolean;
    getDismissedReason: () => 'credential_returned' | 'cancel_called' | 'flow_restarted';
    getMomentType: () => 'display' | 'skipped' | 'dismissed';
}
