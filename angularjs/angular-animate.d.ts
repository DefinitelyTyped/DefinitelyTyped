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

    ///////////////////////////////////////////////////////////////////////////
    // AngularProvider
    // see http://docs.angularjs.org/api/ngAnimate/provider/$animateProvider
    ///////////////////////////////////////////////////////////////////////////
    interface IAnimateProvider {
        /**
         * Registers a new injectable animation factory function.
         *
         * @param name The name of the animation.
         * @param factory The factory function that will be executed to return the animation object.
         */
        register(name: string, factory: () => ng.IAnimateCallbackObject);

        /**
         * Gets and/or sets the CSS class expression that is checked when performing an animation.
         *
         * @param expression The className expression which will be checked against all animations.
         * @returns The current CSS className expression value. If null then there is no expression value.
         */
        classNameFilter(expression?: RegExp): RegExp;
    }
}
