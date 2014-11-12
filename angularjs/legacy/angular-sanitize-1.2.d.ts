// Type definitions for Angular JS 1.2 (ngSanitize module)
// Project: http://angularjs.org
// Definitions by: Diego Vilar <http://github.com/diegovilar>
// Definitions: https://github.com/borisyankov/DefinitelyTyped


/// <reference path="angular-1.2.d.ts" />

///////////////////////////////////////////////////////////////////////////////
// ngSanitize module (angular-sanitize.js)
///////////////////////////////////////////////////////////////////////////////
declare module ng.sanitize {

    ///////////////////////////////////////////////////////////////////////////
    // SanitizeService
    // see https://code.angularjs.org/1.2.26/docs/api/ngSanitize/service/$sanitize
    ///////////////////////////////////////////////////////////////////////////
    interface ISanitizeService {
        (html: string): string;
    }

    ///////////////////////////////////////////////////////////////////////////
    // Filters included with the ngSanitize
    // see https://code.angularjs.org/1.2.26/docs/api/ngSanitize/filter
    ///////////////////////////////////////////////////////////////////////////
    export module filter {

        // Finds links in text input and turns them into html links. 
        // Supports http/https/ftp/mailto and plain email address links.
        // see https://code.angularjs.org/1.2.26/docs/api/ngSanitize/filter/linky
        interface ILinky {
            (text: string, target?: string): string;
        }
    }
}
