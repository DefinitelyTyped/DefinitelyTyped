const callback = (_: google.CredentialResponse): void => {};

const idConfiguration: google.IdConfiguration = {
    client_id: 'test',
    auto_select: false,
    callback,
    native_callback: () => {},
    cancel_on_tap_outside: false,
    prompt_parent_id: '',
    nonce: '',
    context: '',
    state_cookie_domain: '',
};

google.accounts.id.initialize(idConfiguration);

google.accounts.id.disableAutoSelect();
google.accounts.id.storeCredential('', () => {});
google.accounts.id.cancel();

google.accounts.id.onGoogleLibraryLoad = () => {};

google.accounts.id.prompt(promptMomentNotification => {
    const isDisplayMoment: boolean = promptMomentNotification.isDisplayMoment();
    const isDisplayed: boolean = promptMomentNotification.isDisplayed();
    const isNotDisplayed: boolean = promptMomentNotification.isNotDisplayed();
    const getNotDisplayedReason:
        | 'browser_not_supported'
        | 'invalid_client'
        | 'missing_client_id'
        | 'opt_out_or_no_session'
        | 'secure_http_required'
        | 'suppressed_by_user'
        | 'unregistered_origin'
        | 'unknown_reason' = promptMomentNotification.getNotDisplayedReason();
    const isSkippedMoment: boolean = promptMomentNotification.isSkippedMoment();
    const getSkippedReason:
        | 'auto_cancel'
        | 'user_cancel'
        | 'tap_outside'
        | 'issuing_failed' = promptMomentNotification.getSkippedReason();
    const isDismissedMoment: boolean = promptMomentNotification.isDismissedMoment();
    const getDismissedReason:
        | 'credential_returned'
        | 'cancel_called'
        | 'flow_restarted' = promptMomentNotification.getDismissedReason();
    const getMomentType: 'display' | 'skipped' | 'dismissed' = promptMomentNotification.getMomentType();
});
