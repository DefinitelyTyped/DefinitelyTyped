// Type definitions for Purl 2.3.1
// Project: https://github.com/allmarkedup/purl
// Definitions by: Daniel Ferreira Monteiro Alves <https://github.com/danfma>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/// <reference path="../jquery/jquery.d.ts" />
/// <reference path="purl.d.ts" />

interface JQueryStatic {

    /**
     * Parse the current page URL 
     */
    url(): purl.Url;

    /** 
     * Pass in a URI as a string and parse that 
     * 
     * @param someUrl the url to be parsed
     */
    url(someUrl: string): purl.Url;

}

interface JQuery {

    /** 
     * extract the URL from the selected element and parse that - will work on any element with a `src`, `href` or `action` attribute.
     */
    url(): purl.Url;

}
