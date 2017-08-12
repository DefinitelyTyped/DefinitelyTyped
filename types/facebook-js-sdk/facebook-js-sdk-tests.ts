

FB.init({
   appId: '***********',
   version: 'v2.5',
   status: true,
   cookie: true,
   xfbml: true
});

FB.getLoginStatus(function(response: fb.AuthResponse) {
    console.log(response);
    console.log(response.status);
    console.log(response.authResponse.accessToken);
});

FB.getLoginStatus(function(response: fb.AuthResponse) {
    console.log(response);
    console.log(response.status);
    console.log(response.authResponse.accessToken);
}, true);

FB.getAuthResponse(function(response: fb.AuthResponse) {
    console.log(response);
    console.log(response.status);
    console.log(response.authResponse.accessToken);
});

FB.login(function(response: fb.AuthResponse) {
    console.log(response);
    console.log(response.status);
    console.log(response.authResponse.accessToken);
}, {
    scope: 'public_profile'
});

FB.logout(function(response: fb.AuthResponse) {
    console.log(response);
    console.log(response.status);
    console.log(response.authResponse.accessToken);
});

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
}, data => {
    console.log(data.payment_id);
});

FB.ui({
    method: 'pagetab',
    redirect_uri: 'YOUR_URL'
}, response => {});

FB.ui({
    method: 'send',
    link: 'http://www.nytimes.com/interactive/2015/04/15/travel/europe-favorite-streets.html',
}, response => {});

FB.ui({
    method: 'apprequests',
    message: 'Take this bomb to blast your way to victory!',
    to: 'USER_ID, USER_ID, INVITE_TOKEN',
    action_type:'send',
    object_id: 'YOUR_OBJECT_ID',  // e.g. '191181717736427'
}, response => {
    console.log(response);
});

FB.ui({
    method: 'apprequests',
    message: 'Friend Smash Request!',
    filters: [
        { name:'GROUP_1_NAME', user_ids:['USER_ID','USER_ID','USER_ID'] },
        { name:'GROUP_2_NAME', user_ids: ['USER_ID','USER_ID','USER_ID'] },
    ]
}, response => {
  console.log(response);
});

FB.ui({
    method: 'share',
    mobile_iframe: true,
    href: 'https://developers.facebook.com/docs/',
    picture: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/2000px-Google_2015_logo.svg.png',
}, response => {});
