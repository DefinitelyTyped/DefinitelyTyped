FB.init({
    version: 'v8.0',
});

FB.init({
    appId: '***********',
    version: 'v2.5',
    status: true,
    cookie: true,
    xfbml: true,
    autoLogAppEvents: false
});

FB.getLoginStatus(function(response: fb.StatusResponse) {
    console.log(response);
    console.log(response.status);
    console.log(response.authResponse.accessToken);
});

FB.getLoginStatus(function(response: fb.StatusResponse) {
    console.log(response);
    console.log(response.status);
    console.log(response.authResponse.accessToken);
}, true);

const authResponse: fb.AuthResponse = FB.getAuthResponse();
console.log(authResponse.accessToken);

FB.login();

FB.login(function(response: fb.StatusResponse) {
    console.log(response);
    console.log(response.status);
    console.log(response.authResponse.accessToken);
});

FB.login(function(response: fb.StatusResponse) {
    console.log(response);
    console.log(response.status);
    console.log(response.authResponse.accessToken);
}, {
    scope: 'public_profile'
});

FB.login({
    scope: 'public_profile'
});

FB.logout(function(response: fb.StatusResponse) {
    console.log(response);
    console.log(response.status);
    console.log(response.authResponse.accessToken);
});

FB.login({ auth_type: 'reauthenticate' });
FB.login({ auth_type: 'reauthorize' });
FB.login({ auth_type: 'rerequest' });

FB.logout();

/**
 * Dialog samples from Facebook documentation:
 */
FB.ui({
    display: 'popup',
    method: 'live_broadcast',
    phase: 'create',
}, response => {
    if (!response.id) {
        alert('dialog canceled');
        return;
    }
    alert('stream url:' + response.secure_stream_url);

    FB.ui({
        display: 'popup',
        method: 'live_broadcast',
        phase: 'publish',
        broadcast_data: response,
    }, response => {
        alert("video status: \n" + response.status);
    });
});

FB.ui({
    method: 'pay',
    action: 'purchaseitem',
    product: 'YOUR_PRODUCT_URL'
}, response => {
    console.log(response.payment_id);
});

FB.ui({
    method: 'pay',
    action: 'purchaseiap',
    product_id: 'com.fb.friendsmash.coins.10',
    developer_payload: 'this_is_a_test_payload'
}, response => {
    console.log(response.payment_id);
});

FB.ui({
    method: 'pagetab',
    redirect_uri: 'YOUR_URL'
}, response => {
    console.log(response.error_code);
});

FB.ui({
    method: 'send',
    link: 'http://www.nytimes.com/interactive/2015/04/15/travel/europe-favorite-streets.html',
}, response => {
    console.log(response.error_code);
});

FB.ui({
    method: 'apprequests',
    message: 'Take this bomb to blast your way to victory!',
    to: 'USER_ID, USER_ID, INVITE_TOKEN',
    action_type: 'send',
    object_id: 'YOUR_OBJECT_ID',  // e.g. '191181717736427'
}, response => {
    console.log(response.request);
});

FB.ui({
    method: 'apprequests',
    message: 'Friend Smash Request!',
    filters: [
        { name: 'GROUP_1_NAME', user_ids: ['USER_ID', 'USER_ID', 'USER_ID'] },
        { name: 'GROUP_2_NAME', user_ids: ['USER_ID', 'USER_ID', 'USER_ID'] },
    ]
}, response => {
  console.log(response.request);
});

FB.ui({
    method: 'share',
    mobile_iframe: true,
    href: 'https://developers.facebook.com/docs/'
}, response => {
    console.log(response.post_id);
});

FB.ui({
    account_id: '<ACCOUNT_ID>',
    display: 'popup',
    method: 'create_offer',
    objective: 'APP_INSTALLS',
    page_id: '<PAGE_ID>',
}, response => {
    console.log(response.id)
});

FB.ui({
    account_id: '<ACCOUNT_ID>',
    display: 'popup',
    method: 'lead_gen',
    page_id: '<PAGE_ID>',
}, response => {
    console.log(response.formID)
});

FB.ui({
    display: 'popup',
    method: 'canvas_editor',
    business_id: '<BUSINESS_ID>',
    page_id: '<PAGE_ID>'
}, response => {
    console.log(response.id)
});

FB.ui({
    display: 'popup',
    method: 'canvas_editor',
    account_id: '<AD_ACCOUNT_ID>',
    business_id: '<BUSINESS_ID>',
    page_id: '<PAGE_ID>',
    template_id: '<TEMPLATE_ID>'
}, response => {
    console.log(response.id)
});

FB.ui({
    display: 'popup',
    method: 'canvas_preview',
    canvas_id: '<CANVAS_ID>'
});

FB.Event.subscribe('auth.authResponseChange', response => {
    if (response.status === 'connected') {
        response.authResponse.accessToken;
    }
});

FB.Event.unsubscribe('auth.authResponseChange', () => {});

FB.api('/me', response => {});
FB.api('/me', 'get', { fields: ['last_name'] }, response => {});
FB.api('/me',  { fields: ['last_name', 'age_range'] }, response => {
    console.log(response.last_name)
    console.log(response.age_range.min === 18 && response.age_range.max === 20)
});
FB.api('/me',  { fields: ['last_name'] }, response => {
    console.log(response.last_name)
    console.log(response.age_range === undefined)
});
