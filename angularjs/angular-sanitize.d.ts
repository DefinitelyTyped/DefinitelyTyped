// Type definitions for Angular JS 1.3 (ngSanitize module)
// Project: http://angularjs.org
// Definitions by: Diego Vilar <http://github.com/diegovilar>
// Definitions: https://github.com/borisyankov/DefinitelyTyped


/// <reference path="angular.d.ts" />

///////////////////////////////////////////////////////////////////////////////
// ngSanitize module (angular-sanitize.js)
///////////////////////////////////////////////////////////////////////////////
declare module ng.sanitize {

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

        // Finds links in text input and turns them into html links. 
        // Supports http/https/ftp/mailto and plain email address links.
        // see http://code.angularjs.org/1.2.0/docs/api/ngSanitize.filter:linky
        interface ILinky {
            (text: string, target?: string): string;
        }
    }
}
