// Type definitions for Angular JS 1.3 (ngAnimate module)
// Project: http://angularjs.org
// Definitions by: Michel Salib <https://github.com/michelsalib>, Adi Dahiya <https://github.com/adidahiya>, Raphael Schweizer <https://github.com/rasch>, Cody Schaaf <https://github.com/codyschaaf>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/// <reference path="angular.d.ts" />

declare module "angular-animate" {
    var _: string;
    export = _;
}

/**
 * ngAnimate module (angular-animate.js)
 */
declare module angular.animate {
    interface IAnimateFactory extends Function {
        enter?: (element: ng.IAugmentedJQuery, doneFn: Function) => IAnimateCssRunner|void;
        leave?: (element: ng.IAugmentedJQuery, doneFn: Function) => IAnimateCssRunner|void;
        addClass?: (element: ng.IAugmentedJQuery, className: string, doneFn: Function) => IAnimateCssRunner|void;
        removeClass?: (element: ng.IAugmentedJQuery, className: string, doneFn: Function) => IAnimateCssRunner|void;
        setClass?: (element: ng.IAugmentedJQuery, className: string, doneFn: Function) => IAnimateCssRunner|void;
    }

    /**
     * AnimateService
     * see http://docs.angularjs.org/api/ngAnimate/service/$animate
     */
    interface IAnimateService {
        /**
        * Globally enables / disables animations.
        *
        * @param element If provided then the element will be used to represent the enable/disable operation.
        * @param value If provided then set the animation on or off.
        * @returns current animation state
        */
        enabled(element?: JQuery, value?: boolean): boolean;

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

    /**
     * AngularProvider
     * see http://docs.angularjs.org/api/ngAnimate/provider/$animateProvider
     */
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

    /**
     * Angular Animation Options
     * see https://docs.angularjs.org/api/ngAnimate/#applying-directive-specific-styles-to-an-animation
     */
    interface IAnimationOptions {
        /**
         * The ending CSS styles (a key/value object) that will be applied across the animation via a CSS transition.
         */
        to?: Object;

        /**
         * The starting CSS styles (a key/value object) that will be applied at the start of the animation.
         */
        from?: Object;

        /**
         * The DOM event (e.g. enter, leave, move). When used, a generated CSS class of ng-EVENT and
         * ng-EVENT-active will be applied to the element during the animation. Multiple events can be provided when
         * spaces are used as a separator. (Note that this will not perform any DOM operation.)
         */
        event?: string;

        /**
         * The CSS easing value that will be applied to the transition or keyframe animation (or both).
         */
        easing?: string;

        /**
         * The raw CSS transition style that will be used (e.g. 1s linear all).
         */
        transition?: string;

        /**
         * The raw CSS keyframe animation style that will be used (e.g. 1s my_animation linear).
         */
        keyframe?: string;

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
         * applyClassesEarly - Whether or not the classes being added or removed will be used when detecting the animation.
         * This is set by $animate when enter/leave/move animations are fired to ensure that the CSS classes are resolved in time.
         * (Note that this will prevent any transitions from occuring on the classes being added and removed.)
         */
        staggerIndex?: number;
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

declare module angular {
    interface IModule {
        animate(cssSelector: string, animateFactory: angular.animate.IAnimateFactory): IModule;
    }
}
