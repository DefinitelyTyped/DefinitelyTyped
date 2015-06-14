// Type definitions for Drupal-8.0.x SimpleTest
// Project: https://www.drupal.org/project/drupal
// Definitions by: Andor Dávid <https://github.com/Sweetchuck>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/// <reference path="../drupal.core/drupal.core.d.ts"/>

declare module drupal {

    export module Core {

        export interface IBehaviors {

            simpleTestGroupCollapse?: IBehavior;

            simpleTestSelectAll?: IBehavior;

            simpletestTableFilterByText?: IBehavior;

        }

    }

}
