/// <reference types="angular" />

var myapp = angular.module("myapp", ["angular-oauth2"]);

myapp.config(['OAuthProvider', function( OAuthProvider:ng.oauth2.IOAuthProvider ) {

    OAuthProvider.configure({
      baseUrl: 'https://api.website.com',
      clientId: 'CLIENT_ID',
      clientSecret: 'CLIENT_SECRET' // optional
    });

}]);

myapp.controller('Auth', ['OAuth', function( OAuth:ng.oauth2.IOAuth ){

    OAuth.getAccessToken({ username: 'use', password: 'pass' }).then(function(response){
        // ...
    });

    OAuth.revokeToken();

}])