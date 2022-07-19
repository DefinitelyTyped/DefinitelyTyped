// Tests copied from examples on https://developers.google.com/identity/gsi/web/reference/js-reference

google.accounts.id.initialize({
    client_id: 'YOUR_GOOGLE_CLIENT_ID',
    callback: () => {},
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
google.accounts.id.renderButton('#parent-element', { type: 'standard' });

/**
 * @see https://developers.google.com/identity/gsi/web/reference/js-reference#google.accounts.id.disableAutoSelect
 */
google.accounts.id.disableAutoSelect();

/**
 * @see https://developers.google.com/identity/gsi/web/reference/js-reference#google.accounts.id.storeCredential
 */
function onSignIn() {
    const cred: GsiCredential = { id: '...', password: '...' };
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
google.accounts.id.revoke('1618033988749895', done => {
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
    google.accounts.id.initialize({ client_id: 'YOUR_CLIENT_ID' });
    google.accounts.id.prompt(() => {});
};
