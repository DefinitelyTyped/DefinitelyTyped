// Type definitions for Drupal-8.0.x Tour
// Project: https://www.drupal.org/project/drupal
// Definitions by: Andor Dávid <https://github.com/Sweetchuck>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/// <reference path="../backbone/backbone.d.ts"/>
/// <reference path="../jquery/jquery.d.ts"/>
/// <reference path="../drupal.core/drupal.core.d.ts"/>

declare module drupal {

    export module Tour {

        export interface IStateModel extends Backbone.Model {
            // @todo Defaults.
        }

        export interface IModels {

            StateModel: IStateModel;

        }

        export interface IToggleTourView extends Backbone.View<IStateModel> {

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

        export interface IViews {

            ToggleTourView: IToggleTourView;

        }

        export interface IDrupalStatic {

            models: IModels;

            views: IViews;

        }

    }

    export module Core {

        export interface IBehaviors {

            tour?: IBehavior;

        }

    }

    export interface IDrupalStatic {

        tour?: Tour.IDrupalStatic;

    }
}
