// Type definitions for Drupal-8.0.x Tour
// Project: https://www.drupal.org/project/drupal
// Definitions by: Andor Dávid <https://github.com/Sweetchuck>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/// <reference path="../backbone/backbone.d.ts"/>
/// <reference path="../jquery/jquery.d.ts"/>
/// <reference path="../drupal.core/drupal.core.d.ts"/>

declare module drupal {

    export module Tour {

        export interface StateModel extends Backbone.Model {
            // @todo Defaults.
        }

        export interface Models {

            StateModel: StateModel;

        }

        export interface ToggleTourView extends Backbone.View<StateModel> {

            toggleTour: () => void;

            onClick: (
                event: JQueryEventObject
            ) => void;

            _getTour: () => JQuery;

            _getDocument: () => JQuery;

            _removeIrrelevantTourItems: (
                $tour: JQuery,
                $document: JQuery
            ) => void;

        }

        export interface Views {

            ToggleTourView: ToggleTourView;

        }

        export interface DrupalStatic {

            models: Models;

            views: Views;

        }

    }

    export module Core {

        export interface Behaviors {

            tour?: Behavior;

        }

    }

    export interface DrupalStatic {

        tour?: Tour.DrupalStatic;

    }
}
