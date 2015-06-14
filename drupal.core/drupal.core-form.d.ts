// Type definitions for Drupal-8.0.x Core-Form
// Project: https://www.drupal.org/project/drupal
// Definitions by: Andor Dávid <https://github.com/Sweetchuck>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/// <reference path="../jquery/jquery.d.ts"/>
/// <reference path="drupal.core.d.ts"/>

interface JQuery {

    /**
     * Retrieves the summary for the first element.
     */
    drupalGetSummary: () => string;

    /**
     * Sets the summary for all matched elements.
     *
     * @param callback
     *   Either a function that will be called each time the summary is
     *   retrieved or a string (which is returned each time).
     */
    drupalSetSummary: (
        callback: string | ((element: HTMLElement) => string)
    ) => JQuery;

}

declare module drupal {

    export module Core {

        export interface Behaviors {

            formSingleSubmit?: Behavior;

            formUpdated?: Behavior;

            fillUserInfoFromBrowser?: Behavior;

        }

    }

}
