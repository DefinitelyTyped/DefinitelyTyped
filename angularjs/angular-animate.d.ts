// Type definitions for Angular JS 1.2+ (ngAnimate module)
// Project: http://angularjs.org
// Definitions by: Michel Salib <michelsalib@hotmail.com>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/// <reference path="angular.d.ts" />


///////////////////////////////////////////////////////////////////////////////
// ngAnimate module (angular-animate.js)
///////////////////////////////////////////////////////////////////////////////
declare module ng.animate {

    ///////////////////////////////////////////////////////////////////////////
    // AnimateService
    // see http://docs.angularjs.org/api/ngAnimate.$animate
    ///////////////////////////////////////////////////////////////////////////
    interface IAnimateService extends ng.IAnimateService {
        enabled(value?: boolean, element?: JQuery): boolean;
    }
}
