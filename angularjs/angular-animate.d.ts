// Type definitions for Angular JS 1.2+ (ngAnimate module)
// Project: http://angularjs.org
// Definitions by: Michel Salib <https://github.com/michelsalib>, Adi Dahiya <https://github.com/adidahiya>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/// <reference path="angular.d.ts" />


///////////////////////////////////////////////////////////////////////////////
// ngAnimate module (angular-animate.js)
///////////////////////////////////////////////////////////////////////////////
declare module ng.animate {

    ///////////////////////////////////////////////////////////////////////////
    // AnimateService
    // see http://docs.angularjs.org/api/ngAnimate/service/$animate
    ///////////////////////////////////////////////////////////////////////////
    interface IAnimateService extends ng.IAnimateService {
        /**
        * Globally enables / disables animations.
        *
        * @param value If provided then set the animation on or off.
        * @param element If provided then the element will be used to represent the enable/disable operation.
        * @returns current animation state
        */
        enabled(value?: boolean, element?: JQuery): boolean;

        /**
         * Appends the element to the parentElement element that resides in the document and then runs the enter animation.
         *
         * @param element the element that will be the focus of the enter animation
         * @param parentElement the parent element of the element that will be the focus of the enter animation
         * @param afterElement the sibling element (which is the previous element) of the element that will be the focus of the enter animation
         * @returns the animation callback promise
         */
        enter(element: JQuery, parentElement: JQuery, afterElement?: JQuery): ng.IPromise<void>;

        /**
         * Runs the leave animation operation and, upon completion, removes the element from the DOM.
         *
         * @param element the element that will be the focus of the leave animation
         * @returns the animation callback promise
         */
        leave(element: JQuery): ng.IPromise<void>;

        /**
         * Fires the move DOM operation. Just before the animation starts, the animate service will either append
         * it into the parentElement container or add the element directly after the afterElement element if present.
         * Then the move animation will be run.
         *
         * @param element the element that will be the focus of the move animation
         * @param parentElement the parent element of the element that will be the focus of the move animation
         * @param afterElement the sibling element (which is the previous element) of the element that will be the focus of the move animation
         * @returns the animation callback promise
         */
        move(element: JQuery, parentElement: JQuery, afterElement?: JQuery): ng.IPromise<void>;

        /**
         * Triggers a custom animation event based off the className variable and then attaches the className
         * value to the element as a CSS class.
         *
         * @param element the element that will be animated
         * @param className the CSS class that will be added to the element and then animated
         * @returns the animation callback promise
         */
        addClass(element: JQuery, className: string): ng.IPromise<void>;

        /**
         * Triggers a custom animation event based off the className variable and then removes the CSS class
         * provided by the className value from the element.
         *
         * @param element the element that will be animated
         * @param className the CSS class that will be animated and then removed from the element
         * @returns the animation callback promise
         */
        removeClass(element: JQuery, className: string): ng.IPromise<void>;

        /**
         * Adds and/or removes the given CSS classes to and from the element. Once complete, the done() callback
         * will be fired (if provided).
         *
         * @param element the element which will have its CSS classes changed removed from it
         * @param add the CSS classes which will be added to the element
         * @param remove the CSS class which will be removed from the element CSS classes have been set on the element
         * @returns the animation callback promise
         */
        setClass(element: JQuery, add: string, remove: string): ng.IPromise<void>;

        /**
         * Cancels the provided animation.
         */
        cancel(animationPromise: ng.IPromise<void>): void;
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
        register(name: string, factory: () => ng.IAnimateCallbackObject): void;

        /**
         * Gets and/or sets the CSS class expression that is checked when performing an animation.
         *
         * @param expression The className expression which will be checked against all animations.
         * @returns The current CSS className expression value. If null then there is no expression value.
         */
        classNameFilter(expression?: RegExp): RegExp;
    }
}
