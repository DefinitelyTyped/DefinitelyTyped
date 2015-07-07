// Type definitions for Angular JS 1.3 (ngAnimate module)
// Project: http://angularjs.org
// Definitions by: Michel Salib <https://github.com/michelsalib>, Adi Dahiya <https://github.com/adidahiya>, Raphael Schweizer <https://github.com/rasch>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/// <reference path="angular.d.ts" />

declare module "angular-animate" {
    var _: string;
    export = _;
}

///////////////////////////////////////////////////////////////////////////////
// ngAnimate module (angular-animate.js)
///////////////////////////////////////////////////////////////////////////////
declare module angular.animate {

    ///////////////////////////////////////////////////////////////////////////
    // AnimateService
    // see http://docs.angularjs.org/api/ngAnimate/service/$animate
    ///////////////////////////////////////////////////////////////////////////
    interface IAnimateService extends angular.IAnimateService {
        /**
        * Globally enables / disables animations.
        *
        * @param value If provided then set the animation on or off.
        * @param element If provided then the element will be used to represent the enable/disable operation.
        * @returns current animation state
        */
        enabled(value?: boolean, element?: JQuery): boolean;

        /**
         * Performs an inline animation on the element.
         *
         * @param element the element that will be the focus of the animation
         * @param from a collection of CSS styles that will be applied to the element at the start of the animation
         * @param to a collection of CSS styles that the element will animate towards
         * @param className an optional CSS class that will be added to the element for the duration of the animation (the default class is 'ng-inline-animate')
         * @param options an optional collection of styles that will be picked up by the CSS transition/animation
         * @returns the animation callback promise
         */
        animate(element: JQuery, from: any, to: any, className?: string, options?: IAnimationOptions): IPromise<void>;

        /**
         * Appends the element to the parentElement element that resides in the document and then runs the enter animation.
         *
         * @param element the element that will be the focus of the enter animation
         * @param parentElement the parent element of the element that will be the focus of the enter animation
         * @param afterElement the sibling element (which is the previous element) of the element that will be the focus of the enter animation
         * @param options an optional collection of styles that will be picked up by the CSS transition/animation
         * @returns the animation callback promise
         */
        enter(element: JQuery, parentElement: JQuery, afterElement?: JQuery, options?: IAnimationOptions): IPromise<void>;

        /**
         * Runs the leave animation operation and, upon completion, removes the element from the DOM.
         *
         * @param element the element that will be the focus of the leave animation
         * @param options an optional collection of styles that will be picked up by the CSS transition/animation
         * @returns the animation callback promise
         */
        leave(element: JQuery, options?: IAnimationOptions): IPromise<void>;

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
        move(element: JQuery, parentElement: JQuery, afterElement?: JQuery): IPromise<void>;

        /**
         * Triggers a custom animation event based off the className variable and then attaches the className
         * value to the element as a CSS class.
         *
         * @param element the element that will be animated
         * @param className the CSS class that will be added to the element and then animated
         * @param options an optional collection of styles that will be picked up by the CSS transition/animation
         * @returns the animation callback promise
         */
        addClass(element: JQuery, className: string, options?: IAnimationOptions): IPromise<void>;

        /**
         * Triggers a custom animation event based off the className variable and then removes the CSS class
         * provided by the className value from the element.
         *
         * @param element the element that will be animated
         * @param className the CSS class that will be animated and then removed from the element
         * @param options an optional collection of styles that will be picked up by the CSS transition/animation
         * @returns the animation callback promise
         */
        removeClass(element: JQuery, className: string, options?: IAnimationOptions): IPromise<void>;

        /**
         * Adds and/or removes the given CSS classes to and from the element. Once complete, the done() callback
         * will be fired (if provided).
         *
         * @param element the element which will have its CSS classes changed removed from it
         * @param add the CSS classes which will be added to the element
         * @param remove the CSS class which will be removed from the element CSS classes have been set on the element
         * @param options an optional collection of styles that will be picked up by the CSS transition/animation
         * @returns the animation callback promise
         */
        setClass(element: JQuery, add: string, remove: string, options?: IAnimationOptions): IPromise<void>;

        /**
         * Cancels the provided animation.
         */
        cancel(animationPromise: IPromise<void>): void;
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
        register(name: string, factory: () => IAnimateCallbackObject): void;

        /**
         * Gets and/or sets the CSS class expression that is checked when performing an animation.
         *
         * @param expression The className expression which will be checked against all animations.
         * @returns The current CSS className expression value. If null then there is no expression value.
         */
        classNameFilter(expression?: RegExp): RegExp;
    }

	///////////////////////////////////////////////////////////////////////////
    // Angular Animation Options
	// see https://docs.angularjs.org/api/ngAnimate/#applying-directive-specific-styles-to-an-animation
	///////////////////////////////////////////////////////////////////////////
	interface IAnimationOptions {
		to?: Object;
		from?: Object;
	}
}
