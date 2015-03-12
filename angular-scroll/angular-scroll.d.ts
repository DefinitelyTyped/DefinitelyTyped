// Type definitions for angular-scroll
// Project: https://github.com/oblador/angular-scroll
// Definitions by: Sam Herrmann <https://github.com/samherrmann>
// Definitions: https://github.com/borisyankov/DefinitelyTyped


/// <reference path="../angularjs/angular.d.ts" />

declare module duScroll {

    /**
     * Extends the angular.element object returned by the $document sercive with a few jQuery like functions.
     * see https://github.com/oblador/angular-scroll#angularelement-scroll-api
     */
    interface IDocumentService extends angular.IDocumentService {

        duScrollTo(left: number, top: number): void;
        duScrollTo(left: number, top: number, duration: number, easing?: Function): angular.IPromise<void>;

        duScrollTo(element: angular.IAugmentedJQuery, offset?: number): void;
        duScrollTo(element: angular.IAugmentedJQuery, offset: number, duration: number, easing?: Function): angular.IPromise<void>;

        duScrollToElement(element: angular.IAugmentedJQuery, offset?: number): void;
        duScrollToElement(element: angular.IAugmentedJQuery, offset: number, duration: number, easing?: Function): angular.IPromise<void>;

        duScrollToElementAnimated(element: angular.IAugmentedJQuery, offset?: number): angular.IPromise<void>;
        duScrollToElementAnimated(element: angular.IAugmentedJQuery, offset: number, duration: number, easing?: Function): angular.IPromise<void>;

        duScrollTop(top: number): void;
        duScrollTop(top: number, duration: number, easing?: Function): angular.IPromise<void>;

        duScrollTopAnimated(top: number): angular.IPromise<void>;
        duScrollTopAnimated(top: number, duration: number, easing?: Function): angular.IPromise<void>;

        duScrollLeft(left: number): void;
        duScrollLeft(left: number, duration: number, easing?: Function): angular.IPromise<void>;

        duScrollLeftAnimated(left: number): angular.IPromise<void>;
        duScrollLeftAnimated(left: number, duration: number, easing?: Function): angular.IPromise<void>;

        duScrollTop(): number;
        duScrollLeft(): number;
    }
}