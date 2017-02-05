import * as angular from 'angular';

angular.module('angular-oauth2-test', ['angular-oauth2'])
       .config(['OAuthProvider', function(OAuthProvider:angular.oauth2.IOAuthProvider){
            OAuthProvider.configure({
                baseUrl: 'https://api.website.com',
                clientId: 'CLIENT_ID',
                clientSecret: 'CLIENT_SECRET' // optional
            });
       }]);