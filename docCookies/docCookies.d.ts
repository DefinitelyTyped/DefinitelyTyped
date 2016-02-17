// Type definitions for docCookies
// Project: https://developer.mozilla.org/en-US/docs/Web/API/document.cookie
// Definitions by: Jon Egerton <https://github.com/jonegerton>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

interface docCookies {

    /**
    Create/overwrite a cookie.
    @param {string} name (required) The name of the cookie to create/overwrite 
    @param {string} value (required) The value of the cookie 
    @param {number} end (optional) The max-age in seconds (e.g. 31536e3 for a year, Infinity for a never-expires cookie). If not specified it will expire at the end of session
    @param {string} path (optional) E.g., "/", "/mydir"; if not specified, defaults to the current path of the current document location
    @param {string} domain (optional) E.g., "example.com", ".example.com" (includes all subdomains) or "subdomain.example.com"; if not specified, defaults to the host portion of the current document location
    @param {boolean} secure (optional) The cookie will be transmitted only over secure protocol as https
    */   
    setItem(sKey: string, sValue: string, vEnd?: number, sPath?: string, sDomain?: string, bSecure?: boolean): boolean;

    /**
    Create/overwrite a cookie.
    @param {string} name (required) The name of the cookie to create/overwrite 
    @param {string} value (required) The value of the cookie 
    @param {string} end (optional) The expires date in GMTString format. If not specified it will expire at the end of session
    @param {string} path (optional) E.g., "/", "/mydir"; if not specified, defaults to the current path of the current document location
    @param {string} domain (optional) E.g., "example.com", ".example.com" (includes all subdomains) or "subdomain.example.com"; if not specified, defaults to the host portion of the current document location
    @param {boolean} secure (optional) The cookie will be transmitted only over secure protocol as https
    */
    setItem(sKey: string, sValue: string, vEnd?: string, sPath?: string, sDomain?: string, bSecure?: boolean): boolean;

    /**
    Create/overwrite a cookie.
    @param {string} name (required) The name of the cookie to create/overwrite 
    @param {string} value (required) The value of the cookie 
    @param {Date} end (optional) The expires date as a Date object. If not specified it will expire at the end of session
    @param {string} path (optional) E.g., "/", "/mydir"; if not specified, defaults to the current path of the current document location
    @param {string} domain (optional) E.g., "example.com", ".example.com" (includes all subdomains) or "subdomain.example.com"; if not specified, defaults to the host portion of the current document location
    @param {boolean} secure (optional) The cookie will be transmitted only over secure protocol as https
    */
    setItem(sKey: string, sValue: string, vEnd?: Date, sPath?: string, sDomain?: string, bSecure?: boolean): boolean;

    /**
    Read a cookie. If the cookie doesn't exist a null value will be returned.
    @param {string} name (required) The name of the cookie to read 
    */
    getItem(sKey: string): string;

    /**
    Delete a cookie.
    @param {string} name (required) The name of the cookie to remove 
    */
    removeItem(sKey: string, sPath?: string): boolean;

    /**
    Check if a cookie exists.
    @param {string} name (required) The name of the cookie to test
    */
    hasItem(sKey: string): boolean;

    /**
    Returns an array of all readable cookies from this location.
    */
    keys(): string[];
}

declare var docCookies: docCookies;

