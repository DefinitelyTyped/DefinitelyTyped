/// <reference types="angular" />

declare namespace duScroll {

    /**
     * Extends the angular.element object returned by the $document service with a few jQuery like functions.
     * see https://github.com/oblador/angular-scroll#angularelement-scroll-api
     */
    interface IDocumentService extends ng.IDocumentService {

        duScrollTo(left: number, top: number): void;
        duScrollTo(left: number, top: number, duration: number, easing?: Function): ng.IPromise<void>;

        duScrollTo(element: ng.IAugmentedJQuery, offset?: number): void;
        duScrollTo(element: ng.IAugmentedJQuery, offset: number, duration: number, easing?: Function): ng.IPromise<void>;

        duScrollToElement(element: ng.IAugmentedJQuery, offset?: number): void;
        duScrollToElement(element: ng.IAugmentedJQuery, offset: number, duration: number, easing?: Function): ng.IPromise<void>;

        duScrollToElementAnimated(element: ng.IAugmentedJQuery, offset?: number): ng.IPromise<void>;
        duScrollToElementAnimated(element: ng.IAugmentedJQuery, offset: number, duration: number, easing?: Function): ng.IPromise<void>;

        duScrollTop(top: number): void;
        duScrollTop(top: number, duration: number, easing?: Function): ng.IPromise<void>;

        duScrollTopAnimated(top: number): ng.IPromise<void>;
        duScrollTopAnimated(top: number, duration: number, easing?: Function): ng.IPromise<void>;

        duScrollLeft(left: number): void;
        duScrollLeft(left: number, duration: number, easing?: Function): ng.IPromise<void>;

        duScrollLeftAnimated(left: number): ng.IPromise<void>;
        duScrollLeftAnimated(left: number, duration: number, easing?: Function): ng.IPromise<void>;

        duScrollTop(): number;
        duScrollLeft(): number;
    }
}
