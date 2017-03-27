// Type definitions for Angular JS (ngAnimate module) 1.5
// Project: http://angularjs.org
// Definitions by: Michel Salib <https://github.com/michelsalib>, Adi Dahiya <https://github.com/adidahiya>, Raphael Schweizer <https://github.com/rasch>, Cody Schaaf <https://github.com/codyschaaf>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="jquery" />

declare var _: string;
export = _;

import * as angular from 'angular';

declare module 'angular' {
    /**
     * ngAnimate module (angular-animate.js)
     */
    namespace animate {
        interface IAnimateFactory {
            (...args: any[]): IAnimateCallbackObject;
        }

        interface IAnimateCallbackObject {
            eventFn?: (element: JQuery, doneFunction: Function, options: IAnimationOptions) => any;
            setClass?: (element: JQuery, addedClasses: string, removedClasses: string, doneFunction: Function, options: IAnimationOptions) => any;
            addClass?: (element: JQuery, addedClasses: string, doneFunction: Function, options: IAnimationOptions) => any;
            removeClass?: (element: JQuery, removedClasses: string, doneFunction: Function, options: IAnimationOptions) => any;
            enter?: (element: JQuery, doneFunction: Function, options: IAnimationOptions) => any;
            leave?: (element: JQuery, doneFunction: Function, options: IAnimationOptions) => any;
            move?: (element: JQuery, doneFunction: Function, options: IAnimationOptions) => any;
            animate?: (element: JQuery, fromStyles: string, toStyles: string, doneFunction: Function, options: IAnimationOptions) => any;
        }

        interface IAnimationPromise extends IPromise<void> { }

        /**
         * AnimateService
         * see http://docs.angularjs.org/api/ngAnimate/service/$animate
         */
        interface IAnimateService {
            /**
             * Sets up an event listener to fire whenever the animation event has fired on the given element or among any of its children.
             *
             * @param event the animation event that will be captured (e.g. enter, leave, move, addClass, removeClass, etc...)
             * @param container the container element that will capture each of the animation events that are fired on itself as well as among its children
             * @param callback the callback function that will be fired when the listener is triggered
             */
            on(event: string, container: JQuery, callback: (element?: JQuery, phase?: string) => any): void;

            /**
             * Deregisters an event listener based on the event which has been associated with the provided element.
             *
             * @param event the animation event (e.g. enter, leave, move, addClass, removeClass, etc...)
             * @param container the container element the event listener was placed on
             * @param callback the callback function that was registered as the listener
             */
            off(event: string, container?: JQuery, callback?: (element?: JQuery, phase?: string) => any): void;

            /**
             * Associates the provided element with a host parent element to allow the element to be animated even if it exists outside of the DOM structure of the Angular application.
             *
             * @param element the external element that will be pinned
             * @param parentElement the host parent element that will be associated with the external element
             */
            pin(element: JQuery, parentElement: JQuery): void;

            /**
            * Globally enables / disables animations.
            *
            * @param element If provided then the element will be used to represent the enable/disable operation.
            * @param value If provided then set the animation on or off.
            * @returns current animation state
            */
            enabled(element: JQuery, value?: boolean): boolean;
            enabled(value?: boolean): boolean;

            /**
             * Cancels the provided animation.
             */
            cancel(animationPromise: IAnimationPromise): void;

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
            animate(element: JQuery, from: any, to: any, className?: string, options?: IAnimationOptions): IAnimationPromise;

            /**
             * Appends the element to the parentElement element that resides in the document and then runs the enter animation.
             *
             * @param element the element that will be the focus of the enter animation
             * @param parentElement the parent element of the element that will be the focus of the enter animation
             * @param afterElement the sibling element (which is the previous element) of the element that will be the focus of the enter animation
             * @param options an optional collection of styles that will be picked up by the CSS transition/animation
             * @returns the animation callback promise
             */
            enter(element: JQuery, parentElement: JQuery, afterElement?: JQuery, options?: IAnimationOptions): IAnimationPromise;

            /**
             * Runs the leave animation operation and, upon completion, removes the element from the DOM.
             *
             * @param element the element that will be the focus of the leave animation
             * @param options an optional collection of styles that will be picked up by the CSS transition/animation
             * @returns the animation callback promise
             */
            leave(element: JQuery, options?: IAnimationOptions): IAnimationPromise;

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
            move(element: JQuery, parentElement: JQuery, afterElement?: JQuery): IAnimationPromise;

            /**
             * Triggers a custom animation event based off the className variable and then attaches the className
             * value to the element as a CSS class.
             *
             * @param element the element that will be animated
             * @param className the CSS class that will be added to the element and then animated
             * @param options an optional collection of styles that will be picked up by the CSS transition/animation
             * @returns the animation callback promise
             */
            addClass(element: JQuery, className: string, options?: IAnimationOptions): IAnimationPromise;

            /**
             * Triggers a custom animation event based off the className variable and then removes the CSS class
             * provided by the className value from the element.
             *
             * @param element the element that will be animated
             * @param className the CSS class that will be animated and then removed from the element
             * @param options an optional collection of styles that will be picked up by the CSS transition/animation
             * @returns the animation callback promise
             */
            removeClass(element: JQuery, className: string, options?: IAnimationOptions): IAnimationPromise;

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
            setClass(element: JQuery, add: string, remove: string, options?: IAnimationOptions): IAnimationPromise;
        }

        /**
         * AnimateProvider
         * see http://docs.angularjs.org/api/ngAnimate/provider/$animateProvider
         */
        interface IAnimateProvider {
            /**
             * Registers a new injectable animation factory function.
             *
             * @param name The name of the animation.
             * @param factory The factory function that will be executed to return the animation object.
             */
            register(name: string, factory: IAnimateFactory): void;

            /**
             * Gets and/or sets the CSS class expression that is checked when performing an animation.
             *
             * @param expression The className expression which will be checked against all animations.
             * @returns The current CSS className expression value. If null then there is no expression value.
             */
            classNameFilter(expression?: RegExp): RegExp;
        }

        /**
         * Angular Animation Options
         * see https://docs.angularjs.org/api/ngAnimate/#applying-directive-specific-styles-to-an-animation
         */
        interface IAnimationOptions {
            /**
             * The DOM event (e.g. enter, leave, move). When used, a generated CSS class of ng-EVENT and
             * ng-EVENT-active will be applied to the element during the animation. Multiple events can be provided when
             * spaces are used as a separator. (Note that this will not perform any DOM operation.)
             */
            event?: string;

            /**
         * Indicates that the ng-prefix will be added to the event class. Setting to false or
         * omitting will turn ng-EVENT and ng-EVENT-active in EVENT and EVENT-active. Unused if event is omitted.
         */
            structural?: boolean;

            /**
                 * The CSS easing value that will be applied to the transition or keyframe animation (or both).
                 */
            easing?: string;

            /**
             * The raw CSS transition style that will be used (e.g. 1s linear all).
             */
            transitionStyle?: string;

            /**
             * The raw CSS keyframe animation style that will be used (e.g. 1s my_animation linear).
             */
            keyframeStyle?: string;

            /**
             * The starting CSS styles (a key/value object) that will be applied at the start of the animation.
             */
            from?: Object;

            /**
             * The ending CSS styles (a key/value object) that will be applied across the animation via a CSS transition.
             */
            to?: Object;

            /**
             * A space separated list of CSS classes that will be added to the element and spread across the animation.
             */
            addClass?: string;

            /**
             * A space separated list of CSS classes that will be removed from the element and spread across
             * the animation.
             */
            removeClass?: string;

            /**
             * A number value representing the total duration of the transition and/or keyframe (note that a value
             * of 1 is 1000ms). If a value of 0 is provided then the animation will be skipped entirely.
             */
            duration?: number;

            /**
             * A number value representing the total delay of the transition and/or keyframe (note that a value of
             * 1 is 1000ms). If a value of true is used then whatever delay value is detected from the CSS classes will be
             * mirrored on the elements styles (e.g. by setting delay true then the style value of the element will be
             * transition-delay: DETECTED_VALUE). Using true is useful when you want the CSS classes and inline styles to
             * all share the same CSS delay value.
             */
            delay?: number;

            /**
             * A numeric time value representing the delay between successively animated elements (Click here to
             * learn how CSS-based staggering works in ngAnimate.)
             */
            stagger?: number;

            /**
             * The numeric index representing the stagger item (e.g. a value of 5 is equal to the sixth item
             * in the stagger; therefore when a stagger option value of 0.1 is used then there will be a stagger delay of 600ms)
         *
             */
            staggerIndex?: number;

            /**
             * Whether or not the provided from and to styles will be removed once the animation is closed. This is useful for
             * when the styles are used purely for the sake of the animation and do not have a lasting visual effect on the element
             * (e.g. a colapse and open animation). By default this value is set to false.
             */
            cleanupStyles?: boolean;
        }

        interface IAnimateCssRunner {
            /**
             * Starts the animation
             *
             * @returns The animation runner with a done function for supplying a callback.
             */
            start(): IAnimateCssRunnerStart;

            /**
             * Ends (aborts) the animation
             */
            end(): void;
        }

        interface IAnimateCssRunnerStart extends IPromise<void> {
            /**
             * Allows you to add done callbacks to the running animation
             *
             * @param callbackFn: the callback function to be run
             */
            done(callbackFn: (animationFinished: boolean) => void): void;
        }

        /**
         * AnimateCssService
         * see http://docs.angularjs.org/api/ngAnimate/service/$animateCss
         */
        interface IAnimateCssService {
            (element: JQuery, animateCssOptions: IAnimationOptions): IAnimateCssRunner;
        }
    }

    interface IModule {
        animation(name: string, animationFactory: angular.animate.IAnimateFactory): IModule;
        animation(name: string, inlineAnnotatedFunction: any[]): IModule;
        animation(object: Object): IModule;
    }
}
