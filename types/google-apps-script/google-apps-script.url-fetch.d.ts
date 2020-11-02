// Type definitions for Google Apps Script 2020-11-02
// Project: https://developers.google.com/apps-script/
// Definitions by: motemen <https://github.com/motemen/>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference path="google-apps-script.types.d.ts" />
/// <reference path="google-apps-script.base.d.ts" />

declare namespace GoogleAppsScript {
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
     * Fetch resources and communicate with other hosts over the Internet.
     *
     * This service allows scripts to communicate with other applications or access other resources
     * on the web by fetching URLs. A script can use the URL Fetch service to issue HTTP and HTTPS
     * requests and receive responses. The URL Fetch service uses Google's network infrastructure for
     * efficiency and scaling purposes.
     *
     * Requests made using this service originate from a set pool of IP ranges. You can look up the full list of IP addresses
     * if you need to whitelist or approve these requests.
     *
     * This service requires the https://www.googleapis.com/auth/script.external_request
     * scope. In most cases Apps Script automatically detects and includes the scopes a script needs,
     * but if you are setting your scopes
     * explicitly you must manually add this scope to use UrlFetchApp.
     * See also
     *
     * HTTPResponse
     *
     * Setting explicit scopes
     */
    export interface UrlFetchApp {
      fetch(url: string): HTTPResponse;
      fetch(url: string, params: Object): HTTPResponse;
      fetchAll(requests: Object[]): HTTPResponse[];
      getRequest(url: string): Object;
      getRequest(url: string, params: Object): Object;
    }

  }
}

declare var UrlFetchApp: GoogleAppsScript.URL_Fetch.UrlFetchApp;
