/// <reference types="angular" />

declare var _: string;
export = _;

import * as angular from "angular";

declare module "angular" {
    export namespace loadingBar {
        interface ILoadingBarProvider {
            /**
             * Turn the spinner on or off
             */
            includeSpinner?: boolean | undefined;

            /**
             * Turn the loading bar on or off
             */
            includeBar?: boolean | undefined;

            /**
             * HTML template
             */
            spinnerTemplate?: string | undefined;

            /**
             * Loading bar template
             */
            loadingBarTemplate?: string | undefined;

            /**
             * Latency Threshold
             */
            latencyThreshold?: number | undefined;
            /**
             * HTML element selector of parent
             */
            parentSelector?: string | undefined;

            /**
             * Starting size
             */
            startSize?: number | undefined;

            /**
             * Give illusion that there's always progress
             */
            autoIncrement?: boolean | undefined;

            /**
             * Broadcast the start event
             */
            start(): void;

            /**
             * Set the percentage completed
             * @param {number} n - number between 0 and 1
             */
            set(n: number): void;

            /**
             * Get the percentage completed
             * @returns {number}
             */
            status(): number;

            /**
             * Increment the loading bar
             */
            inc(): void;

            /**
             * Complete the loading bar
             */
            complete(): void;
        }
    }

    interface IRequestShortcutConfig {
        /**
         * Indicates that the loading bar should be hidden.
         */
        ignoreLoadingBar?: boolean | undefined;
    }
}
