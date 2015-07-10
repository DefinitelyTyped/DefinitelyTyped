// Type definitions for Drupal-8.0.x Filter
// Project: https://www.drupal.org/project/drupal
// Definitions by: Andor Dávid <https://github.com/Sweetchuck>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/// <reference path="../drupal.core/drupal.core.d.ts"/>

declare module drupal {

    export module Core {

        export interface Behaviors {

            // @todo Hopefully this will be a standard behavior.
            filterFilterHtmlUpdating?: Behavior;

            filterGuidelines?: Behavior;

            filterStatus?: Behavior;

        }

    }

}
