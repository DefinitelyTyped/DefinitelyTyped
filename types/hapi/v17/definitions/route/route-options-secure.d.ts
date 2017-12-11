/**
 * Default value: false (security headers disabled).
 * Sets common security headers. To enable, set security to true or to an object with the following options:
 * * hsts - controls the 'Strict-Transport-Security' header, where:
 * * * true - the header will be set to max-age=15768000. This is the default value.
 * * * a number - the maxAge parameter will be set to the provided value.
 * * * an object with the following fields:
 * * * * maxAge - the max-age portion of the header, as a number. Default is 15768000.
 * * * * includeSubDomains - a boolean specifying whether to add the includeSubDomains flag to the header.
 * * * * preload - a boolean specifying whether to add the 'preload' flag (used to submit domains inclusion in Chrome's HTTP Strict Transport Security (HSTS) preload list) to the header.
 * * xframe - controls the 'X-Frame-Options' header, where:
 * * * true - the header will be set to 'DENY'. This is the default value.
 * * * 'deny' - the headers will be set to 'DENY'.
 * * * 'sameorigin' - the headers will be set to 'SAMEORIGIN'.
 * * * an object for specifying the 'allow-from' rule, where:
 * * * * rule - one of:
 * * * * * 'deny'
 * * * * * 'sameorigin'
 * * * * * 'allow-from'
 * * * * source - when rule is 'allow-from' this is used to form the rest of the header, otherwise this field is ignored. If rule is 'allow-from' but source is unset, the rule will be automatically changed to 'sameorigin'.
 * * xss - boolean that controls the 'X-XSS-PROTECTION' header for Internet Explorer. Defaults to true which sets the header to equal '1; mode=block'.
 *       Note: this setting can create a security vulnerability in versions of Internet Exploere below 8, as well as unpatched versions of IE8. See here and here for more information. If you actively support old versions of IE, it may be wise to explicitly set this flag to false.
 * * noOpen - boolean controlling the 'X-Download-Options' header for Internet Explorer, preventing downloads from executing in your context. Defaults to true setting the header to 'noopen'.
 * * noSniff - boolean controlling the 'X-Content-Type-Options' header. Defaults to true setting the header to its only and default option, 'nosniff'.
 * [See docs](https://github.com/hapijs/hapi/blob/master/API.md#-routeoptionssecurity)
 */
export interface RouteOptionsSecureObject {
    hsts?: boolean | number | {
        maxAge: number;
        includeSubdomains: boolean;
        preload: boolean;
    };
    xframe?: true | 'deny' | 'sameorigin' | {
        rule: 'deny' | 'sameorigin' | 'allow-from';
        source: string;
    };
    xss: boolean;
    noOpen?: boolean;
    noSniff?: boolean;
}


export type RouteOptionsSecure = boolean | RouteOptionsSecureObject;
