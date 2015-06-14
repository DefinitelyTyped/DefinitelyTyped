// Type definitions for Drupal-8.0.x Toolbar
// Project: https://www.drupal.org/project/drupal
// Definitions by: Andor Dávid <https://github.com/Sweetchuck>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/// <reference path="../backbone/backbone.d.ts"/>
/// <reference path="../jquery/jquery.d.ts"/>
/// <reference path="../drupal.core/drupal.core.d.ts"/>

declare module drupal {

    export module Toolbar {

        export interface IDrupalSettings {

            breakpoints: {

                'toolbar.narrow': string;

                'toolbar.standard': string;

                'toolbar.wide': string;

            };

            strings: {

                [key: string]: string;

            }

        }

        export interface IMenuModel extends Backbone.Model {}

        export interface IToolbarModel extends Backbone.Model {}

        export interface IBodyVisualView extends Backbone.View<Backbone.Model> {}

        export interface IMenuVisualView extends Backbone.View<Backbone.Model> {}

        export interface IToolbarAuralView extends Backbone.View<Backbone.Model> {

            onOrientationChange: (
                model: IToolbarModel,
                orientation: string
            ) => void;

        }

        export interface IDrupalStatic {

            //views: Backbone.View[];

            //models: Backbone.Model[];

            mql: MediaQueryList[];

            setSubtrees: JQueryDeferred<any>;

            mediaQueryChangeHandler: (
                model: any,
                label: string,
                mql: MediaQueryList
            ) => void;

        }

    }

    export module Core {

        export interface ITheme {

            toolbarOrientationToggle: () => string;

        }

        export interface IBehaviors {

            escapeAdmin?: IBehavior;

            toolbar?: IBehavior;

        }

    }

    export interface IDrupalSettings {

        toolbar: Toolbar.IDrupalSettings;

    }

    export interface IDrupalStatic {

        toolbar?: Toolbar.IDrupalStatic;

    }

}
