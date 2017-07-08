

// Code samples from:
//  - https://github.com/AzureAD/azure-activedirectory-library-for-js
//  - https://github.com/Azure-Samples/active-directory-angularjs-singlepageapp

// Variable provided by AngularJS
var $httpProvider: angular.IHttpProvider = null;
var adalAuthenticationServiceProvider: adal.AdalAuthenticationServiceProvider = null;
var adalAuthenticationService: adal.AdalAuthenticationService = null;

var endpoints = {
    "https://yourhost/api": "b6a68585-5287-45b2-ba82-383ba1f60932",
};
adalAuthenticationServiceProvider.init({
        tenant: "52d4b072-9470-49fb-8721-bc3a1c9912a1",
        clientId: "e9a5a8b6-8af7-4719-9821-0deef255f68e",
        endpoints: endpoints
    },
    $httpProvider
);

adalAuthenticationServiceProvider.init({
    clientId: "e9a5a8b6-8af7-4719-9821-0deef255f68e"
    },
    $httpProvider
);

adalAuthenticationServiceProvider.init(
    {
        clientId: 'cb68f72f...',
        cacheLocation: 'localStorage'
    },
    $httpProvider   // pass http provider to inject request interceptor to attach tokens
);

adalAuthenticationServiceProvider.init({
        tenant: 'Enter your tenant name here e.g. contoso.onmicrosoft.com',
        clientId: 'Enter your client ID here e.g. e9a5a8b6-8af7-4719-9821-0deef255f68e',
        extraQueryParameter: 'nux=1'
    },
    $httpProvider
);

adalAuthenticationService.login();
adalAuthenticationService.logOut();
