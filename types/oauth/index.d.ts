// Type definitions for oauth 0.9
// Project: https://github.com/ciaranj/node-oauth#readme
// Definitions by: nonAlgebraic <https://github.com/nonAlgebraic>
//                 Eduardo AC <https://github.com/EduardoAC>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types='node' />

import { Agent, ClientRequest, IncomingMessage, OutgoingHttpHeaders, RequestOptions } from "http";

import { UrlWithStringQuery } from "url";

export type oauth1tokenCallback = (
    err: { statusCode: number; data?: any },
    token: string,
    token_secret: string,
    parsedQueryString: any,
) => any;

export type oauth2tokenCallback = (
    err: { statusCode: number; data?: any },
    access_token: string,
    refresh_token: string,
    result: any,
) => any;

export type dataCallback = (
    err: { statusCode: number; data?: any },
    result?: string | Buffer,
    response?: IncomingMessage,
) => any;

export class OAuth {
    protected _isEcho: boolean;
    protected _requestUrl: string;
    protected _accessUrl: string;
    protected _consumerKey: string;
    protected _consumerSecret: string;
    protected _protectedKey: string;
    protected _version: string;
    protected _authorize_callback: string;
    protected _signatureMethod: string;
    protected _nonceSize: number;
    protected _headers: OutgoingHttpHeaders;
    protected _clientOptions: {
        requestTokenHttpMethod: string;
        accessTokenHttpMethod: string;
        followRedirects: boolean;
    };
    protected _oauthParameterSeperator: string;
    protected _realm: string;
    protected _verifyCredentials: string;

    NONCE_CHARS: string[];

    constructor(
        requestUrl: string,
        accessUrl: string,
        consumerKey: string,
        consumerSecret: string,
        version: string,
        authorize_callback: string | null,
        signatureMethod: string,
        nonceSize?: number,
        customHeaders?: OutgoingHttpHeaders,
    );

    setClientOptions(options: {
        requestTokenHttpMethod: string;
        accessTokenHttpMethod: string;
        followRedirects: boolean;
    }): void;

    getOAuthAccessToken(
        oauth_token: string,
        oauth_token_secret: string,
        oauth_verifier: string,
        callback: oauth1tokenCallback,
    ): void;
    getOAuthAccessToken(
        oauth_token: string,
        oauth_token_secret: string,
        callback: oauth1tokenCallback,
    ): void;

    getProtectedResource(
        url: string,
        method: string,
        oauth_token: string,
        oauth_token_secret: string,
        callback: dataCallback,
    ): void;

    delete(
        url: string,
        oauth_token: string,
        oauth_token_secret: string,
        callback: dataCallback,
    ): ClientRequest;

    get(
        url: string,
        oauth_token: string,
        oauth_token_secret: string,
        callback: dataCallback,
    ): ClientRequest;

    put(
        url: string,
        oauth_token: string,
        oauth_token_secret: string,
        post_body?: any,
        post_content_type?: string,
        callback?: dataCallback,
    ): ClientRequest;

    post(
        url: string,
        oauth_token: string,
        oauth_token_secret: string,
        post_body?: any,
        post_content_type?: string,
        callback?: dataCallback,
    ): ClientRequest;

    getOAuthRequestToken(
        extraparams: any,
        callback: oauth1tokenCallback,
    ): void;
    getOAuthRequestToken(callback: oauth1tokenCallback): void;

    signUrl(
        url: string,
        oauth_token: string,
        oauth_token_secret: string,
        method?: string,
    ): string;

    authHeader(
        url: string,
        oauth_token: string,
        oauth_token_secret: string,
        method?: string,
    ): string;

    protected _getTimestamp(): number | string;

    protected _encodeData(toEncode: string): string;

    protected _decodeData(toDecode: string): string;

    protected _getSignature(
        method: string,
        url: string,
        parameters: string,
        tokenSecret: string,
    ): string;

    protected _normalizeUrl(url: string): string;

    protected _isParameterNameAnOAuthParameter(parameter: string): boolean;

    protected _buildAuthorizationHeaders(orderedParameters: string[][]): string;

    protected _makeArrayOfArgumentsHash(
        argumentHash: { [key: string]: string | string[] },
    ): string[][];

    protected _sortRequestParams(argument_pairs: string[][]): string[][];

    protected _normaliseRequestParams(args: string[][]): string;

    protected _createSignatureBase(
        method: string,
        url: string,
        parameters: string,
    ): string;

    protected _createSignature(signatureBase: string, tokenSecret: string): string;

    protected _getNonce(nonceSize: number): string;

    protected _createClient(
        port?: number | string,
        hostname?: string,
        method?: string,
        path?: string,
        headers?: OutgoingHttpHeaders,
        sslEnabled?: boolean,
    ): ClientRequest;

    protected _prepareParameters(
        oauth_token: string,
        oauth_token_secret: string,
        method: string,
        url: string,
        extra_params?: any,
    ): string[][];
    protected _prepareParameters(
        oauth_token_secret: string,
        method: string,
        url: string,
        extra_params?: any,
    ): string[][];

    protected _performSecureRequest(
        oauth_token: string,
        oauth_token_secret: string,
        method: string,
        url: string,
        extra_params?: any,
        post_body?: any,
        post_content_type?: string,
        callback?: dataCallback,
    ): ClientRequest;

    protected _putOrPost(
        method: string,
        url: string,
        oauth_token: string,
        oauth_token_secret: string,
        post_body?: any,
        post_content_type?: string,
        callback?: dataCallback,
    ): ClientRequest;
}

export class OAuthEcho extends OAuth {
    constructor(
        realm: string,
        verify_credentials: string,
        consumerKey: string,
        consumerSecret: string,
        version: string,
        signatureMethod: string,
        nonceSize?: number,
        customHeaders?: OutgoingHttpHeaders,
    );
}

export class OAuth2 {
    protected _clientId: string;
    protected _clientSecret: string;
    protected _baseSite: string;
    protected _authorizeUrl: string;
    protected _accessTokenUrl: string;
    protected _accessTokenName: string;
    protected _authMethod: string;
    protected _customHeaders: OutgoingHttpHeaders;
    protected _useAuthorizationHeaderForGET: boolean;
    protected _agent: Agent | boolean;

    constructor(
        clientId: string,
        clientSecret: string,
        baseSite: string,
        authorizePath?: string,
        accessTokenPath?: string,
        customHeaders?: OutgoingHttpHeaders,
    );

    setAgent(agent: Agent | boolean): void;

    setAccessTokenName(name: string): void;

    setAuthMethod(authMethod: string): void;

    useAuthorizationHeaderforGET(useIt: boolean): void;

    buildAuthHeader(token: string): string;

    getAuthorizeUrl(params?: any): string;

    getOAuthAccessToken(
        code: string,
        params: any,
        callback: oauth2tokenCallback,
    ): void;
    getOAuthAccessToken(code: string, callback: oauth2tokenCallback): void;

    getProtectedResource(
        url: string,
        access_token: string,
        callback: dataCallback,
    ): void;

    get(url: string, access_token: string, callback: dataCallback): void;

    protected _getAccessTokenUrl(): string;

    protected _chooseHttpLibrary(parsedUrl: UrlWithStringQuery): string;

    protected _request(
        method: string,
        url: string,
        headers: OutgoingHttpHeaders | null,
        post_body: any,
        access_token: string | null,
        callback: dataCallback,
    ): void;

    protected _executeRequest(
        http_library: string,
        options: RequestOptions,
        post_body: any,
        callback: dataCallback,
    ): void;
    protected _executeRequest(
        http_library: string,
        options: RequestOptions,
        callback: dataCallback,
    ): void;
}
