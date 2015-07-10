// Type definitions for Drupal-8.0.x Views
// Project: https://www.drupal.org/project/drupal
// Definitions by: Andor Dávid <https://github.com/Sweetchuck>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/// <reference path="../drupal.core/drupal.core-ajax.d.ts"/>

declare module drupal {

    export module Views {

        export interface DrupalSettingsAjaxViewsEntry {

            view_dom_id: string;

            view_name?: string;

            view_display_id?: string;

        }

        export interface DrupalSettings {

            ajaxViews: {
                [key: string]: DrupalSettingsAjaxViewsEntry;
            };

        }

        export interface AjaxView {

            new (
                settings: DrupalSettingsAjaxViewsEntry
            ): AjaxView;

            $view: JQuery;

            // @todo Remove any.
            element_settings: {
                [key: string]: any;
            };

            settings: DrupalSettingsAjaxViewsEntry;

            $exposed_form: JQuery;

            refreshViewAjax: drupal.Core.Ajax;

            attachExposedFormAjax: () => void;

            filterNestedViews: () => boolean;

            attachPagerAjax: () => void;

            attachPagerLinkAjax: (
                id: string,
                link: string
            ) => void;

        }

        export interface DrupalStaticMain {

            parseQueryString: (
                query: string
            ) => {
                [key: string]: any
            };


            parseViewArgs: (
                href: string,
                viewPath: string
            ) => {
                view_args: string;
                view_path: string;
            };

            pathPortion: (
                href: string
            ) => string;

            getPath: (
                href: string
            ) => string;

            ajaxView: AjaxView;

        }

        export interface DrupalStatic {

            instances: {
                [key: string]: AjaxView;
            };

        }

    }

    export module Core {

        export interface AjaxCommands {

            viewsScrollTop: (
                ajax: Ajax,
                response: {selector: string}
            ) => void;

        }

        export interface Behaviors {

            ViewsAjaxView?: Behavior;

            viewsContextualLinks?: Behavior;

        }

    }

    export interface DrupalSettings {

        views: Views.DrupalSettings;

    }

    export interface DrupalStatic {

        Views?: Views.DrupalStaticMain;

        view?: Views.DrupalStatic;

    }
}
