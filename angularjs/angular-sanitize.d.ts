// Type definitions for Angular JS 1.3 (ngSanitize module)
// Project: http://angularjs.org
// Definitions by: Diego Vilar <http://github.com/diegovilar>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped


/// <reference path="angular.d.ts" />

declare module "angular-sanitize" {
    var _: string;
    export = _;
}

///////////////////////////////////////////////////////////////////////////////
// ngSanitize module (angular-sanitize.js)
///////////////////////////////////////////////////////////////////////////////
declare namespace angular.sanitize {

    ///////////////////////////////////////////////////////////////////////////
    // SanitizeService
    // see http://docs.angularjs.org/api/ngSanitize.$sanitize
    ///////////////////////////////////////////////////////////////////////////
    interface ISanitizeService {
        (html: string): string;
    }

    ///////////////////////////////////////////////////////////////////////////
    // Filters included with the ngSanitize
    // see https://github.com/angular/angular.js/tree/v1.2.0/src/ngSanitize/filter
    ///////////////////////////////////////////////////////////////////////////
    export module filter {
        /**
         * Finds links in text input and turns them into html links. Supports http/https/ftp/mailto and plain email address links.
         * @param text Input text.
         * @param target ILinkyTargetType Window (_blank|_self|_parent|_top) or named frame to open links in.
         * @param attributes Add custom attributes to the link element.
         * @return Html-linkified and sanitized text.
         * see https://docs.angularjs.org/api/ngSanitize/filter/linky
         */
        interface ILinky {
            (text: string, target: string, attributes?: { [attribute: string]: string } | ((url: string) => { [attribute: string]: string })): string;
        }

    }
}
///////////////////////////////////////////////////////////////////////////////
// Extend angular $filter declarations to include filters from angular.sanitize module
///////////////////////////////////////////////////////////////////////////////
declare namespace angular {
    interface IFilterService {
        (name: 'linky'): angular.sanitize.filter.ILinky;
    }
}