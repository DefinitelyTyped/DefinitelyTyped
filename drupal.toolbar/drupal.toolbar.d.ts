// Type definitions for Drupal-8.0.x Toolbar
// Project: https://www.drupal.org/project/drupal
// Definitions by: Andor Dávid <https://github.com/Sweetchuck>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/// <reference path="../backbone/backbone.d.ts"/>
/// <reference path="../jquery/jquery.d.ts"/>
/// <reference path="../drupal.core/drupal.core.d.ts"/>

declare module drupal {

    export module Toolbar {

        export interface DrupalSettings {

            breakpoints: {

                'toolbar.narrow': string;

                'toolbar.standard': string;

                'toolbar.wide': string;

            };

            strings: {

                [key: string]: string;

            }

        }

        export interface MenuModel extends Backbone.Model {}

        export interface ToolbarModel extends Backbone.Model {}

        export interface BodyVisualView extends Backbone.View<Backbone.Model> {}

        export interface MenuVisualView extends Backbone.View<Backbone.Model> {}

        export interface ToolbarAuralView extends Backbone.View<Backbone.Model> {

            onOrientationChange: (
                model: ToolbarModel,
                orientation: string
            ) => void;

        }

        export interface DrupalStatic {

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

        export interface Theme {

            toolbarOrientationToggle: () => string;

        }

        export interface Behaviors {

            escapeAdmin?: Behavior;

            toolbar?: Behavior;

        }

    }

    export interface DrupalSettings {

        toolbar: Toolbar.DrupalSettings;

    }

    export interface DrupalStatic {

        toolbar?: Toolbar.DrupalStatic;

    }

}
