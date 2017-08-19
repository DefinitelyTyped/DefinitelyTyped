// Type definitions for prime8consulting:meteor-oauth2
// Project: https://github.com/prime-8-consulting/meteor-oauth2/
// Definitions by: Robbie Van Gorkom <https://github.com/vangorra>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="meteor" />

declare namespace OAuth2Server {
    interface RefreshToken {
        refreshToken : string;
        clientId : string;
        userId : string;
        expires : Date;
    }

    interface AuthCode {
        authCode : string;
        clientId : string;
        userId : string;
        expires : Date;
    }

    interface AccessToken {
        accessToken : string;
        clientId : string;
        userId : string;
        expires : Date
    }

    interface Client {
        clientId : string;
        active : boolean;
        redirectUri : string;
        clientSecret : string;
    }

    interface PubSubNames {
        /**
         * Constant string representing the auth codes pub/sub.
         */
        authCodes : string;

        /**
         * Constant string representing the refresh token pub/sub.
         */
        refreshTokens : string;
    }

    interface MethodNames {
        /**
         * Constant string representing th authCodeGran meteor method.
         */
        authCodeGrant : string;
    }

    interface Collections {
        /**
         * Collection of the refresh tokens.
         */
        refreshToken : Mongo.Collection<RefreshToken>;

        /**
         * Collection of the authorization codes.
         */
        authCode : Mongo.Collection<AuthCode>;

        /**
         * (server only) Collection of the access tokens.
         */
        accessToken : Mongo.Collection<AccessToken>;

        /**
         * (server only) Collection of the clients authorized to use the oauth2 service.
         */
        client : Mongo.Collection<Client>;
    }

    interface SubscribeTo {
        /**
         * Wrapper function to subscribe to the auth code subscription. Returns a standard subscription handle.
         */
        authCode() : Meteor.SubscriptionHandle;
    }

    interface AuthCodeGrantResult {
        success : boolean;
        error : any;
        authorizationCode : string;
        redirectToUri : string;
    }

    interface CallMethod {
        /**
         * Wrapper for Meteor.method to create an authorization code. This is an async function and a callback must be provided to be of any use.
         */
        authCodeGrant(
            client_id : string,
            redirect_uri : string,
            response_type : string,
            scope : string[],
            state : string,
            callback : (err : Meteor.Error, authCodeGrantResult : AuthCodeGrantResult) => void
        ) : void;
    }

    interface OAuth2Server {
        pubSubNames : PubSubNames;
        methodNames : MethodNames;
        collections : Collections;
        oauthserver : any;
        subscribeTo : SubscribeTo;
        callMethod : CallMethod;
    }
}

declare var oAuth2Server : OAuth2Server.OAuth2Server;
