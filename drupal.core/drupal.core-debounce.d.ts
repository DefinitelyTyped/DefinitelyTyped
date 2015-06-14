// Type definitions for Drupal-8.0.x Core-Debounce
// Project: https://www.drupal.org/project/drupal
// Definitions by: Andor Dávid <https://github.com/Sweetchuck>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

declare module drupal {

    export interface DrupalStatic {

        /**
         * My doc.
         *
         * @param func
         * @param wait
         * @param immediate
         */
        debounce?:(
            func: (...args: any[]) => any,
            wait: number,
            immediate: boolean
        ) => any;

    }
}
