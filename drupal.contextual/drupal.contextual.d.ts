// Type definitions for Drupal-8.0.x Contextual
// Project: https://www.drupal.org/project/drupal
// Definitions by: Andor Dávid <https://github.com/Sweetchuck>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/// <reference path="../backbone/backbone.d.ts"/>
/// <reference path="../drupal.core/drupal.core.d.ts"/>

declare module drupal {

    export module Contextual {

        export interface DrupalSettings {

            strings: {

                open: string;

                close: string;

            }

        }

        export interface VisualView {}

        export interface AuralView {}

        export interface KeyboardView {}

        export interface RegionView {}

        export interface View {

            visualView: VisualView;

            auralView: AuralView;

            keyboardView: KeyboardView;

        }

        export interface StateModel extends Backbone.Model {

            toggleOpen: () => StateModel;

            close: () => StateModel;

            focus: () => StateModel;

            blur: () => StateModel;

        }

        export interface DrupalStatic {

            views: Contextual.View[];

            regionViews: Contextual.RegionView[];

            collection: Backbone.Collection<Contextual.StateModel>;

            StateModel: Contextual.StateModel;

        }

        export interface ToolbarStateModel {

            initialize: (
                attrs: {[key: string]: any},
                options: {[key: string]: any}
            ) => void;

            countContextualLinks: (
                contextualModel: Contextual.StateModel,
                contextualCollection: Backbone.Collection<Contextual.StateModel>
            ) => void;

            lockNewContextualLinks: (
                contextualModel: Contextual.StateModel,
                contextualCollection: Backbone.Collection<Contextual.StateModel>
            ) => void;

            updateVisibility: () => void;

        }

        export interface DrupalStaticToolbar {

            model: ToolbarStateModel;

            StateModel: ToolbarStateModel;

        }

    }

    export module Core {

        export interface Theme {

            contextualTrigger?: () => string;

        }

        export interface Behaviors {

            contextual?: Behavior;

            contextualToolbar?: Behavior;

        }

    }

    export interface DrupalSettings {

        contextual?: Contextual.DrupalSettings;

    }

    export interface DrupalStatic {

        contextual?: Contextual.DrupalStatic;

        contextualToolbar?: Contextual.DrupalStaticToolbar;

    }

}
