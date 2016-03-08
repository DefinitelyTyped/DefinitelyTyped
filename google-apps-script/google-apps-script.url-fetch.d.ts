// Type definitions for Google Apps Script 2015-11-12
// Project: https://developers.google.com/apps-script/
// Definitions by: motemen <https://github.com/motemen/>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference path="google-apps-script.types.d.ts" />
/// <reference path="google-apps-script.base.d.ts" />

declare module GoogleAppsScript {
  export module URL_Fetch {
    /**
     * This class allows users to access specific information on HTTP responses.
     * See also
     * 
     * UrlFetchApp
     */
    export interface HTTPResponse {
      getAllHeaders(): Object;
      getAs(contentType: string): Base.Blob;
      getBlob(): Base.Blob;
      getContent(): Byte[];
      getContentText(): string;
      getContentText(charset: string): string;
      getHeaders(): Object;
      getResponseCode(): Integer;
    }

    /**
     * 
     * Deprecated. This class is deprecated and should not be used in new scripts.
     * Represents configuration settings for an OAuth-enabled remote service.
     * See also
     * 
     * UrlFetchApp
     */
    export interface OAuthConfig {
      getAccessTokenUrl(): string;
      getAuthorizationUrl(): string;
      getMethod(): string;
      getParamLocation(): string;
      getRequestTokenUrl(): string;
      getServiceName(): string;
      setAccessTokenUrl(url: string): void;
      setAuthorizationUrl(url: string): void;
      setConsumerKey(consumerKey: string): void;
      setConsumerSecret(consumerSecret: string): void;
      setMethod(method: string): void;
      setParamLocation(location: string): void;
      setRequestTokenUrl(url: string): void;
    }

    /**
     * Fetch resources and communicate with other hosts over the Internet.
     * 
     *  This service allows scripts to communicate with other applications or access other resources on
     *  the web by fetching URLs. A script can use the URL Fetch service to issue HTTP and HTTPS requests
     *  and receive responses. The URL Fetch service uses Google's network infrastructure for efficiency
     *  and scaling purposes.
     * See also
     * 
     * OAuthConfig
     * 
     * HTTPResponse
     */
    export interface UrlFetchApp {
      fetch(url: string): HTTPResponse;
      fetch(url: string, params: Object): HTTPResponse;
      getRequest(url: string): Object;
      getRequest(url: string, params: Object): Object;
      addOAuthService(serviceName: string): OAuthConfig;
      removeOAuthService(serviceName: string): void;
    }

  }
}

declare var UrlFetchApp: GoogleAppsScript.URL_Fetch.UrlFetchApp;