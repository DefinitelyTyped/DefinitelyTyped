// Type definitions for angular-aria 1.7
// Project: http://angularjs.org
// Definitions by: chivesrs <https://github.com/chivesrs>
//                 Piotr Błażejewicz <https://github.com/peterblazejewicz>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="angular" />

// `ngAria` string
declare const exportedString: 'ngAria';
export default exportedString;

// re-export aliases for shorter syntax
export type IAriaOptions = angular.aria.IAriaOptions;
export type IAriaProvider = angular.aria.IAriaProvider;

declare module 'angular' {
    /**
     * ngAria module (angular-aria.js)
     * see {@link https://docs.angularjs.org/api/ngAria/service/$aria}
     */
    namespace aria {
        /**
         * AriaProvider
         * Used for configuring the ARIA attributes injected and managed by ngAria.
         * see {@link https://docs.angularjs.org/api/ngAria/provider/$ariaProvider}
         */
        // tslint:disable-next-line interface-name
        interface IAriaProvider {
            /** Enables/disables various ARIA attributes */
            config(config: IAriaOptions): void;
        }

        /**
         * see {@link https://docs.angularjs.org/api/ngAria/provider/$ariaProvider}
         */
        // tslint:disable-next-line interface-name
        interface IAriaOptions {
            /** Enables/disables aria-hidden tags */
            ariaHidden?: boolean;
            /** Enables/disables aria-checked tags */
            ariaChecked?: boolean;
            /** Enables/disables aria-readonly tags */
            ariaReadonly?: boolean;
            /** Enables/disables aria-disabled tags */
            ariaDisabled?: boolean;
            /** Enables/disables aria-required tags */
            ariaRequired?: boolean;
            /** Enables/disables aria-invalid tags */
            ariaInvalid?: boolean;
            /** Enables/disables aria-valuemin, aria-valuemax and aria-valuenow tags */
            ariaValue?: boolean;
            /** Enables/disables tabindex tags */
            tabindex?: boolean;
            /**
             * Enables/disables keyboard event binding on non-interactive elements
             * (such as `div` or `li`) using ng-click, making them more accessible to users of assistive technologies
             */
            bindKeydown?: boolean;
            /**
             * Adds `role=button` to non-interactive elements
             * (such as `div` or `li`) using ng-click, making them more accessible to users of assistive technologies
             */
            bindRoleForClick?: boolean;
        }
    }
}
