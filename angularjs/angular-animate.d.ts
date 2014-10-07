// Type definitions for Angular JS 1.2+ (ngAnimate module)
// Project: http://angularjs.org
// Definitions by: Michel Salib <https://github.com/michelsalib>
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

    /**
     * The animation object which contains callback functions for each event that is expected to be animated.
     */
    interface IAnimateCallbackObject {
        eventFn(element: Node, doneFn: () => void): Function;
    }

    interface IAnimateProvider {
        /**
         * Registers a new injectable animation factory function.
         */
        register(name: string, factory: () => IAnimateCallbackObject): void;

        /**
         * Gets and/or sets the CSS class expression that is checked when performing an animation.
         */
        classNameFilter(expression?: RegExp): RegExp;
    }
}
