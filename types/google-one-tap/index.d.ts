export as namespace google;

export const accounts: accounts;

export interface accounts {
    id: {
        initialize: (idConfiguration: IdConfiguration) => void;
        disableAutoSelect: () => void;
        storeCredential: (credential?: string, callback?: () => void) => void;
        cancel: () => void;
        revoke: (hint: string, callback?: (response: RevocationResponse) => void) => void;
        prompt: (momentListener?: (promptMomentNotification: PromptMomentNotification) => void) => void;
        renderButton: (parent: HTMLElement, options: GsiButtonConfiguration, clickHandler?: () => void) => void;
    };
}

export interface GsiButtonConfiguration {
    type?: "standard" | "icon";
    theme?: "outline" | "filled_blue" | "filled_black";
    size?: "large" | "medium" | "small";
    text?: "signin_with" | "signup_with" | "continue_with" | "signin";
    shape?: "rectangular" | "pill" | "circle" | "square";
    logo_alignment?: "left" | "center";
    width?: number;
    locale?: string;
}

export interface CredentialResponse {
    credential: string;
    select_by:
        | "auto"
        | "user"
        | "user_1tap"
        | "user_2tap"
        | "btn"
        | "btn_confirm"
        | "btn_add_session"
        | "btn_confirm_add_session";
}

/// https://developers.google.com/identity/gsi/web/reference/js-reference
export interface IdConfiguration {
    client_id: string;
    auto_select?: boolean;
    callback?: (credentialResponse: CredentialResponse) => void;
    login_uri?: string;
    native_callback?: () => void;
    cancel_on_tap_outside?: boolean;
    prompt_parent_id?: string;
    nonce?: string;
    context?: "signin" | "signup" | "use";
    state_cookie_domain?: string;
    ux_mode?: "popup" | "redirect";
    allowed_parent_origin?: string | string[];
    intermediate_iframe_close_callback?: () => void;
    itp_support?: boolean;

    // Undocumented, but extraordinarily helpful: https://stackoverflow.com/a/72883451/229792
    log_level?: "debug" | "info" | "warn";
}

export interface PromptMomentNotification {
    isDisplayMoment: () => boolean;
    isDisplayed: () => boolean;
    isNotDisplayed: () => boolean;
    getNotDisplayedReason: () =>
        | "browser_not_supported"
        | "invalid_client"
        | "missing_client_id"
        | "opt_out_or_no_session"
        | "secure_http_required"
        | "suppressed_by_user"
        | "unregistered_origin"
        | "unknown_reason";
    isSkippedMoment: () => boolean;
    getSkippedReason: () => "auto_cancel" | "user_cancel" | "tap_outside" | "issuing_failed";
    isDismissedMoment: () => boolean;
    getDismissedReason: () => "credential_returned" | "cancel_called" | "flow_restarted";
    getMomentType: () => "display" | "skipped" | "dismissed";
}

export interface RevocationResponse {
    successful: boolean;
    error?: string;
}
