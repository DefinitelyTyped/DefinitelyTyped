/// <reference path="google-apps-script.types.d.ts" />
/// <reference path="google-apps-script.base.d.ts" />

declare namespace GoogleAppsScript {
    namespace URL_Fetch {
        /**
         * This class allows users to access specific information on HTTP responses.
         * See also
         *
         * UrlFetchApp
         */
        interface HTTPResponse {
            getAllHeaders(): object;
            getAs(contentType: string): Base.Blob;
            getBlob(): Base.Blob;
            getContent(): Byte[];
            getContentText(): string;
            getContentText(charset: string): string;
            getHeaders(): object;
            getResponseCode(): Integer;
        }
        interface URLFetchRequest extends URLFetchRequestOptions {
            url: string;
        }
        interface URLFetchRequestOptions {
            /**
             * the content type (defaults to 'application/x-www-form-urlencoded'). Another example of content
             * type is 'application/xml; charset=utf-8'.
             */
            contentType?: string | undefined;
            /**
             * a JavaScript key/value map of HTTP headers for the request
             */
            headers?: HttpHeaders | undefined;
            /**
             * the HTTP method for the request: get, delete, patch, post, or put. The default is get.
             */
            method?: HttpMethod | undefined;
            /**
             * the payload (e.g. POST body) for the request. Certain HTTP methods (e.g. GET) do not accept a
             * payload. It can be a string, a byte array, or a JavaScript object. A JavaScript object will be
             * interpretted as a map of form field names to values, where the values can be either strings or blobs.
             */
            payload?: Payload | undefined;
            /**
             * Deprecated. This instructs fetch to resolve the specified URL within the intranet linked to your
             * domain through (deprecated) SDC
             */
            useIntranet?: boolean | undefined;
            /**
             * if this is set to false, the fetch will ignore any invalid certificates for HTTPS requests.
             * The default is true.
             */
            validateHttpsCertificates?: boolean | undefined;
            /**
             * if this is set to false, the fetch not automatically follow HTTP redirects; it will return
             * the original HTTP response. The default is true.
             */
            followRedirects?: boolean | undefined;
            /**
             * if this is set to true, the fetch will not throw an exception if the response code indicates
             * failure, and will instead return the HTTPResponse (default: false)
             */
            muteHttpExceptions?: boolean | undefined;
            /**
             * if this is set to false, reserved characters in the URL will not be escaped (default: true)
             */
            escaping?: boolean | undefined;
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
        interface UrlFetchApp {
            fetch(url: string): HTTPResponse;
            fetch(url: string, params: URLFetchRequestOptions): HTTPResponse;
            fetchAll(requests: Array<URLFetchRequest | string>): HTTPResponse[];
            getRequest(url: string): URLFetchRequest;
            getRequest(url: string, params: URLFetchRequestOptions): URLFetchRequest;
        }
        interface HttpHeaders {
            [key: string]: string;
        }
        type HttpMethod = "get" | "delete" | "patch" | "post" | "put";
        type Payload = string | { [key: string]: any } | Base.Blob;
    }
}

declare var UrlFetchApp: GoogleAppsScript.URL_Fetch.UrlFetchApp;
