// Type definitions for Angular JS 1.4 (ngSanitize module)
// Project: http://angularjs.org
// Definitions by: Diego Vilar <http://github.com/diegovilar>, Dmitri Suvorov <https://github.com/suvjunmd>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/// <reference path="angular.d.ts" />

declare module "angular-sanitize" {
    var _: string;
    export = _;
}

///////////////////////////////////////////////////////////////////////////////
// ngSanitize module (angular-sanitize.js)
///////////////////////////////////////////////////////////////////////////////
declare module angular.sanitize {

    ///////////////////////////////////////////////////////////////////////////
    // SanitizeService
    // see https://code.angularjs.org/1.4.7/docs/api/ngSanitize/service/$sanitize
    ///////////////////////////////////////////////////////////////////////////
    interface ISanitizeService {
        /**
        * The input is sanitized by parsing the HTML into tokens. All safe tokens (from a whitelist) are then serialized back to properly escaped html string. This means that no unsafe input can make it into the returned string, however, since our parser is more strict than a typical browser parser, it's possible that some obscure input, which would be recognized as valid HTML by a browser, won't make it through the sanitizer. The input may also contain SVG markup. The whitelist is configured using the functions aHrefSanitizationWhitelist and imgSrcSanitizationWhitelist of $compileProvider.
        *
        * @param html HTML input.
        * @return Sanitized HTML.
        */
        (html: string): string;
    }

    ///////////////////////////////////////////////////////////////////////////
    // Filters included with the ngSanitize
    // see https://code.angularjs.org/1.4.7/docs/api/ngSanitize/filter
    ///////////////////////////////////////////////////////////////////////////
    export module filter {

        interface ILinky {
            /**
            * Finds links in text input and turns them into html links. Supports http/https/ftp/mailto and plain email address links.
            *
            * @param text Input text.
            * @param target Window (_blank|_self|_parent|_top) or named frame to open links in.
            * @return Html-linkified text.
            */
            (text: string, target?: string): string;
        }
    }
}
