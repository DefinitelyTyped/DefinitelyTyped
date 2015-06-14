// Type definitions for Drupal-8.0.x Core-TableSelect
// Project: https://www.drupal.org/project/drupal
// Definitions by: Andor Dávid <https://github.com/Sweetchuck>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/// <reference path="drupal.core.d.ts"/>

declare module drupal {

    export module Core {

        export interface Behaviors {

            tableSelect?: Behavior;

        }

    }

    export interface DrupalStatic {

        tableSelect: () => void;

        tableSelectRange: (
            from: HTMLTableRowElement,
            to: HTMLTableRowElement,
            state: boolean
        ) => void;

    }

}
