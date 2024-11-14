export = Auth;
/**
 * Auth
 *
 * @constructor
 * @param {string} ak The access key.
 * @param {string} sk The security key.
 */
declare function Auth(ak: string, sk: string): void;
declare class Auth {
    /**
     * Auth
     *
     * @constructor
     * @param {string} ak The access key.
     * @param {string} sk The security key.
     */
    constructor(ak: string, sk: string);
    ak: string;
    sk: string;
    /**
     * Generate the signature based on http://gollum.baidu.com/AuthenticationMechanism
     *
     * @param {string} method The http request method, such as GET, POST, DELETE, PUT, ...
     * @param {string} resource The request path.
     * @param {Object=} params The query strings.
     * @param {Object=} headers The http request headers.
     * @param {number=} timestamp Set the current timestamp.
     * @param {number=} expirationInSeconds The signature validation time.
     * @param {Array.<string>=} headersToSign The request headers list which will be used to calcualate the signature.
     *
     * @return {string} The signature.
     */
    generateAuthorization(
        method: string,
        resource: string,
        params?: any | undefined,
        headers?: any | undefined,
        timestamp?: number | undefined,
        expirationInSeconds?: number | undefined,
        headersToSign?: Array<string> | undefined,
    ): string;
    uriCanonicalization(uri: any): any;
    /**
     * Canonical the query strings.
     *
     * @see http://gollum.baidu.com/AuthenticationMechanism#生成CanonicalQueryString
     * @param {Object} params The query strings.
     * @return {string}
     */
    queryStringCanonicalization(params: any): string;
    /**
     * Canonical the http request headers.
     *
     * @see http://gollum.baidu.com/AuthenticationMechanism#生成CanonicalHeaders
     * @param {Object} headers The http request headers.
     * @param {Array.<string>=} headersToSign The request headers list which will be used to calcualate the signature.
     * @return {*} canonicalHeaders and signedHeaders
     */
    headersCanonicalization(headers: any, headersToSign?: Array<string> | undefined): any;
    hash(data: any, key: any): any;
}
