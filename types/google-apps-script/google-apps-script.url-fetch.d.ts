// Type definitions for Google Apps Script 2018-08-08
// Project: https://developers.google.com/apps-script/
// Definitions by: motemen <https://github.com/motemen/>
//                 takoyaki9n <https://github.com/takoyaki9n>
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

    export interface URLFetchRequestOptions {
      /**
       * the content type (defaults to 'application/x-www-form-urlencoded'). Another example of content
       * type is 'application/xml; charset=utf-8'.
       */
      contentType?: string;

      /**
       * a JavaScript key/value map of HTTP headers for the request
       */
      headers?: Object;

      /**
       * the HTTP method for the request: get, delete, patch, post, or put. The default is get.
       */
      method?: 'get' | 'delete' | 'patch' | 'post' | 'put';

      /**
       * the payload (e.g. POST body) for the request. Certain HTTP methods (e.g. GET) do not accept a
       * payload. It can be a string, a byte array, or a JavaScript object. A JavaScript object will be
       * interpretted as a map of form field names to values, where the values can be either strings or blobs.
       */
      payload?: string | object | Base.Blob;

      /**
       * Deprecated. This instructs fetch to resolve the specified URL within the intranet linked to your
       * domain through (deprecated) SDC
       */
      useIntranet?: boolean;

      /**
       * if this is set to false, the fetch will ignore any invalid certificates for HTTPS requests.
       * The default is true.
       */
      validateHttpsCertificates?: boolean;

      /**
       * if this is set to false, the fetch not automatically follow HTTP redirects; it will return
       * the original HTTP response. The default is true.
       */
      followRedirects?: boolean;

      /**
       * if this is set to true, the fetch will not throw an exception if the response code indicates
       * failure, and will instead return the HTTPResponse (default: false)
       */
      muteHttpExceptions?: boolean;

      /**
       * if this is set to false, reserved characters in the URL will not be escaped (default: true)
       */
      escaping?: boolean;
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
      fetch(url: string, params?: URLFetchRequestOptions): HTTPResponse;
      fetchAll(requests: Object[]): HTTPResponse[];
      getRequest(url: string, params?: URLFetchRequestOptions): Object;
    }

  }
}

declare var UrlFetchApp: GoogleAppsScript.URL_Fetch.UrlFetchApp;
