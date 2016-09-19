/// <reference path="facebook-js-sdk.d.ts" />

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
