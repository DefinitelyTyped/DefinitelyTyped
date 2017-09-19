// Type definitions for angular-loading-bar
// Project: https://github.com/chieffancypants/angular-loading-bar
// Definitions by:  Stephen Lautier <https://github.com/stephenlautier>
//                  Tyrone Dougherty <https://github.com/tyronedougherty>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

/// <reference types="angular" />

import * as angular from 'angular';

declare module 'angular' {
    export namespace loadingBar {

        interface ILoadingBarProvider {
            /**
             * Turn the spinner on or off
             */
            includeSpinner?: boolean;

            /**
             * Turn the loading bar on or off
             */
            includeBar?: boolean;

            /**
             * HTML template
             */
            spinnerTemplate?: string;

            /**
             * Loading bar template
             */
            loadingBarTemplate?: string;

            /**
             * Latency Threshold
             */
            latencyThreshold?: number;
            /**
             * HTML element selector of parent
             */
            parentSelector?: string;

            /**
             * Starting size
             */
            startSize?: number;

            /**
             * Give illusion that there's always progress
             */
            autoIncrement?: boolean;
        }
    }

    interface IRequestShortcutConfig {
        /**
         * Indicates that the loading bar should be hidden.
         */
        ignoreLoadingBar?: boolean;
    }

}
