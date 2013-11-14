// Type definitions for Purl 2.3.1
// Project: https://github.com/allmarkedup/purl
// Definitions by: Daniel Ferreira Monteiro Alves <https://github.com/danfma>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

declare module purl {

    export interface Url {

        /**
         * The .attr() method is used to return information on various parts of the URL.
         */
        attr(option: string): string;

        /** 
         * The .param() method is used to return the values of querystring parameters. 
         */
        param(parameterName: string): string;

        /**
         * The .segment() method is used to return values of individual segments from the URL's path.
         * Pass in an integer value to get the value of that segment - note however that the count is not zero-indexed like an array - i.e. .segment(1) returns the first segment, not the second one.
         * You can also pass in negative values, in which case it will count back from the end of the path rather than forwards from the start.
         */
        segment(position: number): string;

        /**
         * Gets a parameter from the fragment segment
         */
        fparam(parameterName: string): string;

        /**
         * Gets the fragment segment at the especified position.
         */
        fsegment(position: number): string;
    }

}

/**
 * Parse the current page URL 
 */
declare function purl(): purl.Url;

/** 
 * Pass in a URI as a string and parse that 
 * 
 * @param someUrl the url to be parsed
 */
declare function purl(someUrl: string): purl.Url;
