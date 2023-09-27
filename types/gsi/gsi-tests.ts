// Tests copied from examples on https://developers.google.com/identity/gsi/web/reference/js-reference

google.accounts.id.initialize({
    client_id: "YOUR_GOOGLE_CLIENT_ID",
    callback: () => {},
});

google.accounts.id.initialize({
    client_id: "YOUR_GOOGLE_CLIENT_ID",
    callback: response => {
        // $ExpectType string
        response.credential;
        // $ExpectType "auto" | "user" | "user_1tap" | "user_2tap" | "btn" | "btn_confirm" | "btn_add_session" | "btn_confirm_add_session"
        response.select_by;
    },
    auto_select: true,
    login_uri: "",
    cancel_on_tap_outside: true,
    prompt_parent_id: "",
    nonce: "",
    context: "signin",
    state_cookie_domain: "",
    ux_mode: "popup",
    allowed_parent_origin: "",
    intermediate_iframe_close_callback: () => {},
    itp_support: true,
    login_hint: "user@test.com",
    hd: "*",
    use_fedcm_for_prompt: true,
});

/**
 * @see https://developers.google.com/identity/gsi/web/reference/js-reference#google.accounts.id.prompt
 */
google.accounts.id.prompt(notification => {
    if (notification.isNotDisplayed() || notification.isSkippedMoment()) {
        // continue with another identity provider.
    }
});

/**
 * @see https://developers.google.com/identity/gsi/web/reference/js-reference#google.accounts.id.renderButton
 */
google.accounts.id.renderButton("#parent-element", { type: "standard" });

/**
 * @see https://developers.google.com/identity/gsi/web/reference/js-reference#google.accounts.id.disableAutoSelect
 */
google.accounts.id.disableAutoSelect();

/**
 * @see https://developers.google.com/identity/gsi/web/reference/js-reference#google.accounts.id.storeCredential
 */
function onSignIn() {
    const cred: GsiCredential = { id: "...", password: "..." };
    google.accounts.id.storeCredential(cred);
}

/**
 * @see https://developers.google.com/identity/gsi/web/reference/js-reference#google.accounts.id.cancel
 */
function onNextButtonClicked() {
    google.accounts.id.cancel();
}

/**
 * @see https://developers.google.com/identity/gsi/web/reference/js-reference#google.accounts.id.revoke
 */
google.accounts.id.revoke("1618033988749895", done => {
    if (done.successful) {
        // ...
    } else {
        console.log(done.error);
    }
});

/**
 * @see https://developers.google.com/identity/gsi/web/reference/js-reference#onGoogleLibraryLoad
 */
window.onGoogleLibraryLoad = () => {
    google.accounts.id.initialize({ client_id: "YOUR_CLIENT_ID" });
    google.accounts.id.prompt(() => {});
};
