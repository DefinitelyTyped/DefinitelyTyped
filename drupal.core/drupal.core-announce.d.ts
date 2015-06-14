// Type definitions for Drupal-8.0.x Core-Announce
// Project: https://www.drupal.org/project/drupal
// Definitions by: Andor Dávid <https://github.com/Sweetchuck>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/// <reference path="drupal.core.d.ts"/>

declare module drupal {

    export module Core {

        export interface IBehaviors {

            drupalAnnounce?: IBehavior;

        }

    }

    export interface IDrupalStatic {

        // @todo Some kind of enum for priority.
        // Return value come from the Drupal.debounce().
        announce?: (text: string, priority: string) => any;

    }
}
