// $ExpectType CodeClient
google.accounts.oauth2.initCodeClient({
    client_id: '',
    scope: '',
});

// $ExpectType TokenClient
google.accounts.oauth2.initTokenClient({
    client_id: '',
    callback: response => {
        // response.access_token
        response.access_token;
        // $ExpectType string
        response.expires_in;
        // $ExpectType string
        response.hd;
        // $ExpectType string
        response.prompt;
        // $ExpectType string
        response.token_type;
        // $ExpectType string
        response.scopes;
        // $ExpectType string
        response.state;
        // $ExpectType string
        response.error;
        // $ExpectType string
        response.error_description;
        // $ExpectType string
        response.error_uri;
    },
});

// $ExpectType boolean
google.accounts.oauth2.hasGrantedAllScopes(
    {
        access_token: '',
        expires_in: '',
        hd: '',
        prompt: '',
        token_type: '',
        scopes: '',
        state: '',
        error: '',
        error_description: '',
        error_uri: '',
    },
    '',
    '...',
);

// $ExpectType boolean
google.accounts.oauth2.hasGrantedAnyScope(
    {
        access_token: '',
        expires_in: '',
        hd: '',
        prompt: '',
        token_type: '',
        scopes: '',
        state: '',
        error: '',
        error_description: '',
        error_uri: '',
    },
    '',
    '...',
);

google.accounts.oauth2.revoke('', () => {});

// required options
google.accounts.id.initialize({ client_id: 'YOUR_GOOGLE_CLIENT_ID' });

// all options
google.accounts.id.initialize({
    client_id: 'YOUR_GOOGLE_CLIENT_ID',
    callback: response => {
        // $ExpectType string
        response.credential;
        // $ExpectType string
        response.select_by;
    },
    auto_select: true,
    login_uri: '',
    native_callback: response => {
        // $ExpectType string
        response.credential;
        // $ExpectType string
        response.select_by;
    },
    cancel_on_tap_outside: true,
    prompt_parent_id: '',
    nonce: '',
    context: 'signin',
    state_cookie_domain: '',
    ux_mode: 'popup',
    allowed_parent_origin: '',
    intermediate_iframe_close_callback: () => {},
    itp_support: true,
});

google.accounts.id.prompt();

google.accounts.id.prompt(notification => {
    // $ExpectType boolean
    notification.isNotDisplayed();
    // $ExpectType boolean
    notification.isSkippedMoment();
    // $ExpectType "credential_returned" | "cancel_called" | "flow_restarted"
    notification.getDismissedReason();
    // $ExpectType "display" | "skipped" | "dismissed"
    notification.getMomentType();
    // $ExpectType "browser_not_supported" | "invalid_client" | "missing_client_id" | "opt_out_or_no_session" | "secure_http_required" | "suppressed_by_user" | "unregistered_origin" | "unknown_reason"
    notification.getNotDisplayedReason();
    // $ExpectType "auto_cancel" | "user_cancel" | "tap_outside" | "issuing_failed"
    notification.getSkippedReason();
    // $ExpectType boolean
    notification.isDismissedMoment();
    // $ExpectType boolean
    notification.isDisplayed();
    // $ExpectType boolean
    notification.isSkippedMoment();
});

// required options
google.accounts.id.renderButton(
    document.getElementById('buttonDiv')!,

    {
        type: 'standard',
    },
);

// all options
google.accounts.id.renderButton(
    document.getElementById('buttonDiv')!,

    {
        type: 'standard',
        theme: 'outline',
        size: 'small',
        text: 'signin_with',
        shape: 'rectangular',
        logo_alignment: 'left',
        width: '',
        locale: '',
    },
);

google.accounts.id.disableAutoSelect();

google.accounts.id.storeCredential({ id: '...', password: '...' });

google.accounts.id.cancel();

google.accounts.id.revoke('1618033988749895', done => {
    // $ExpectType boolean
    done.successful;
    if (done.error) {
        // $ExpectType string
        done.error;
    }
});
