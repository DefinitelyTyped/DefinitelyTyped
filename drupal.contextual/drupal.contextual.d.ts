// Type definitions for Drupal-8.0.x Contextual
// Project: https://www.drupal.org/project/drupal
// Definitions by: Andor Dávid <https://github.com/Sweetchuck>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/// <reference path="../backbone/backbone.d.ts"/>
/// <reference path="../drupal.core/drupal.core.d.ts"/>

declare module drupal {

    export module Contextual {

        export interface IDrupalSettings {

            strings: {

                open: string;

                close: string;

            }

        }

        export interface IVisualView {}

        export interface IAuralView {}

        export interface IKeyboardView {}

        export interface IRegionView {}

        export interface IView {

            visualView: IVisualView;

            auralView: IAuralView;

            keyboardView: IKeyboardView;

        }

        export interface IStateModel extends Backbone.Model {

            toggleOpen: () => IStateModel;

            close: () => IStateModel;

            focus: () => IStateModel;

            blur: () => IStateModel;

        }

        export interface IDrupalStatic {

            views: Contextual.IView[];

            regionViews: Contextual.IRegionView[];

            collection: Backbone.Collection<Contextual.IStateModel>;

            StateModel: Contextual.IStateModel;

        }

        export interface IToolbarStateModel {

            initialize: (
                attrs: {[key: string]: any},
                options: {[key: string]: any}
            ) => void;

            countContextualLinks: (
                contextualModel: Contextual.IStateModel,
                contextualCollection: Backbone.Collection<Contextual.IStateModel>
            ) => void;

            lockNewContextualLinks: (
                contextualModel: Contextual.IStateModel,
                contextualCollection: Backbone.Collection<Contextual.IStateModel>
            ) => void;

            updateVisibility: () => void;

        }

        export interface IDrupalStaticToolbar {

            model: IToolbarStateModel;

            StateModel: IToolbarStateModel;

        }

    }

    export module Core {

        export interface ITheme {

            contextualTrigger?: () => string;

        }

        export interface IBehaviors {

            contextual?: IBehavior;

            contextualToolbar?: IBehavior;

        }

    }

    export interface IDrupalSettings {

        contextual?: Contextual.IDrupalSettings;

    }

    export interface IDrupalStatic {

        contextual?: Contextual.IDrupalStatic;

        contextualToolbar?: Contextual.IDrupalStaticToolbar;

    }

}
