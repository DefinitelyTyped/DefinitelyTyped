// Type definitions for google-one-tap 1.0
// Project: https://developers.google.com/identity/one-tap/web
// Definitions by: voidpumpkin <https://github.com/voidpumpkin>
//                 kostasmanionis <https://github.com/kostasmanionis>
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
    };
}

export interface CredentialResponse {
    credential: string;
    select_by: string;
    client_id: string;
}

export interface IdConfiguration {
    client_id?: string;
    auto_select?: boolean;
    callback?: (credentialResponse: CredentialResponse) => void;
    native_callback?: () => void;
    cancel_on_tap_outside?: boolean;
    prompt_parent_id?: string;
    nonce?: string;
    context?: string;
    state_cookie_domain?: string;
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
