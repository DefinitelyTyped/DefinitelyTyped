// Type definitions for Node OAuth2 Server
// Project: https://github.com/thomseddon/node-oauth2-server
// Definitions by: Robbie Van Gorkom <https://github.com/vangorra>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/* =================== USAGE ===================

 import * as oauthserver from "oauth2-server";
 var oauth = oauthserver();

 =============================================== */




import {RequestHandler} from "express";
import {Request} from "express";

declare function o(config: o.Config): o.OAuth2Server;

declare namespace o {
    interface OAuth2Server {
        grant(): RequestHandler;
        authorise(): any;
        errorHandler(): any;
    }

    interface Config {
        /**
         * Model object
         */
        model: {};

        /**
         * grant types you wish to support, currently the module supports authorization_code,
         * password, refresh_token and client_credentials
         */
        grants: string[];

        /**
         * If true errors will be logged to console. You may also pass a custom function, in
         * which case that function will be called with the error as its first argument
         * Default: false
         */
        debug?: boolean;

        /**
         * Life of access tokens in seconds
         * If null, tokens will considered to never expire
         * Default: 3600
         */
        accessTokenLifetime?: number;

        /**
         * Life of refresh tokens in seconds
         * If null, tokens will considered to never expire
         * Default: 1209600
         */
        refreshTokenLifetime?: number;

        /**
         * Life of auth codes in seconds
         * Default: 30
         */
        authCodeLifetime?: number;

        /**
         * Regex to sanity check client id against before checking model. Note: the default
         * just matches common client_id structures, change as needed
         * Default: /^[a-z0-9-_]{3,40}$/i
         */
        clientIdRegex?: RegExp;

        /**
         * If true, non grant errors will not be handled internally (so you can ensure a
         * consistent format with the rest of your api)
         */
        passthroughErrors?: boolean;

        /**
         * If true, next will be called even if a response has been sent (you probably don't want this)
         */
        continueAfterResponse?: boolean;
    }

    interface BaseModel {
        /**
         *
         * @param bearerToken - The bearer token (access token) that has been provided
         * @param callback
         */
        getAccessToken(bearerToken: string,
            callback: GetAccessTokenCallback): void;

        /**
         *
         * @param clientId
         * @param clientSecret - If null, omit from search query (only search by clientId)
         * @param callback
         */
        getClient(clientId: string,
            clientSecret: string,
            callback: GetClientCallback): void;

        /**
         *
         * @param clientId
         * @param grantType
         * @param callback
         */
        grantTypeAllowed(clientId: string,
            grantType: string,
            callback: GrantTypeAllowedCallback): void;

        /**
         *
         * @param accessToken
         * @param clientId
         * @param expires
         * @param user
         * @param callback
         */
        saveAccessToken(accessToken: string,
            clientId: string,
            expires: Date,
            user: User,
            callback: SaveAccessTokenCallback): void;
    }

    interface AuthorizationCodeModel extends BaseModel {
        /**
         *
         * @param authCode
         * @param callback
         */
        getAuthCode(authCode: string,
            callback: GetAuthCodeCallback): void;

        /**
         *
         * @param authCode
         * @param clientId
         * @param expires
         * @param user - Whatever was passed as user to the codeGrant function (see example)
         * @param callback
         */
        saveAuthCode(authCode: string,
            clientId: string,
            expires: Date,
            user: User | string,
            callback: SaveAuthCodeCallback): void;
    }

    interface PasswordModel extends BaseModel {
        /**
         *
         * @param username
         * @param password
         * @param callback
         */
        getUser(username: string,
            password: string,
            callback: GetUserCallback): void;
    }

    interface RefreshTokenModel extends BaseModel {
        /**
         *
         * @param refreshToken
         * @param clientId
         * @param expires
         * @param user
         * @param callback
         */
        saveRefreshToken(refreshToken: string,
            clientId: string,
            expires: Date,
            user: User,
            callback: SaveRefreshTokenCallback): void;

        /**
         *
         * @param refreshToken - The bearer token (refresh token) that has been provided
         * @param callback
         */
        getRefreshToken(refreshToken: string,
            callback: GetRefreshTokenCallback): void;

        /**
         * The spec does not actually require that you revoke the old token - hence this is
         * optional (Last paragraph: http://tools.ietf.org/html/rfc6749#section-6)
         * @param refreshToken
         * @param callback
         */
        revokeRefreshToken?(refreshToken: string,
            callback: RevokeRefreshTokenCallback): void;
    }

    interface ExtensionModel extends BaseModel {
        /**
         *
         * @param grantType
         * @param req
         * @param callback
         */
        extendedGrant(grantType: string,
            req: Request,
            callback: ExtendedGrantCallback): void;
    }

    interface ClientCredentialsModel extends BaseModel {
        /**
         *
         * @param clientId
         * @param clientSecret
         * @param callback
         */
        getUserFromClient(clientId: string,
            clientSecret: string,
            callback: GetUserFromClientCallback): void;

        /**
         *
         * @param type - accessToken or refreshToken
         * @param req - The current express request
         * @param callback
         */
        generateToken?(type: string,
            req: Request,
            callback: GenerateTokenCallback): void;
    }

    interface GenerateTokenCallback {
        /**
         *
         * @param error - Truthy to indicate an error
         * @param token - string indicates success
         * null indicates to revert to the default token generator
         * object indicates a reissue (i.e. will not be passed to saveAccessToken/saveRefreshToken)
         * Must contain the following keys (if object):
         * string accessToken OR refreshToken dependant on type
         */
        (error: any, token: string | Object): void;
    }

    interface GetUserFromClientCallback {
        /**
         *
         * @param error - Truthy to indicate an error
         * @param user - The user retrieved from storage or falsey to indicate an invalid user
         * Saved in req.user
         */
        (error: any, user: User): void;
    }

    interface ExtendedGrantCallback {
        /**
         *
         * @param error - Truthy to indicate an error
         * @param supported - Whether you support the grant type
         * @param user - The user retrieved from storage or falsey to indicate an invalid user
         * Saved in req.user
         */
        (error: any, supported: boolean, user: User): void;
    }

    interface RevokeRefreshTokenCallback {
        /**
         * Truthy to indicate an error
         * @param error
         */
        (error: any): void;
    }

    interface GetRefreshTokenCallback {
        /**
         *
         * @param error - Truthy to indicate an error
         * @param refreshToken - The refresh token retrieved form storage or falsey to indicate invalid refresh token
         */
        (error: any, refreshToken: RefreshToken): void;
    }

    interface SaveRefreshTokenCallback {
        /**
         *
         * @param error - Truthy to indicate an error
         */
        (error: any): void;
    }

    interface GetUserCallback {
        /**
         *
         * @param error - Truthy to indicate an error
         * @param user - The user retrieved from storage or falsey to indicate an invalid user
         * Saved in req.user
         */
        (error: any, user: User): void;
    }

    interface SaveAuthCodeCallback {
        /**
         *
         * @param error - Truthy to indicate an error
         */
        (error: any): void;
    }

    interface GetAuthCodeCallback {
        /**
         *
         * @param error - Truthy to indicate an error
         * @param authCode - The authorization code retrieved form storage or falsey to indicate invalid code
         */
        (error: String, authCode: AuthCode): void
    }

    interface SaveAccessTokenCallback {
        /**
         *
         * @param error - Truthy to indicate an error
         */
        (error: any): void;
    }

    interface GetAccessTokenCallback {
        /**
         *
         * @param error - Truthy to indicate an error
         * @param accessToken - The access token retrieved form storage or falsey to indicate invalid access token
         */
        (error: any, accessToken: AccessToken): void;
    }

    interface GetClientCallback {
        /**
         *
         * @param error - Truthy to indicate an error
         * @param client - The client retrieved from storage or falsey to indicate an invalid client
         * Saved in req.client
         */
        (error: any, client: Client): void;
    }

    interface GrantTypeAllowedCallback {
        /**
         *
         * @param error - Truthy to indicate an error
         * @param allowed - Indicates whether the grantType is allowed for this clientId
         */
        (error: any, allowed: boolean): void;
    }

    interface RefreshToken {
        /**
         * client id associated with this token
         */
        clientId: string;

        /**
         * The date when it expires
         * null to indicate the token never expires
         */
        expires: Date;

        /**
         *
         */
        userId: string;
    }

    interface AuthCode {
        /**
         * client id associated with this auth code
         */
        clientId: string;

        /**
         * The date when it expires
         */
        expires: Date;

        /**
         * The userId
         */
        userId: string;
    }

    interface User {
        id: string;
    }

    interface Client {
        clientId: string;

        /**
         * authorization_code grant type only
         */
        redirectUri: string;
    }

    interface AccessToken {
        /**
         * The date when it expires
         * null to indicate the token never expires
         */
        expires: Date;

        /**
         * If a user key exists, this is saved as req.user
         */
        user?: User;

        /**
         * If a user key exists, this is saved as req.user
         * Otherwise a userId key must exist, which is saved in req.user.id
         */
        userId?: string;
    }
}

export = o;
