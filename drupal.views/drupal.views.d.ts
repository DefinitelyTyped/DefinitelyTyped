// Type definitions for Drupal-8.0.x Views
// Project: https://www.drupal.org/project/drupal
// Definitions by: Andor Dávid <https://github.com/Sweetchuck>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/// <reference path="../drupal.core/drupal.core-ajax.d.ts"/>

declare module drupal {

    export module Views {

        export interface IDrupalSettingsAjaxViewsEntry {

            view_dom_id: string;

            view_name?: string;

            view_display_id?: string;

        }

        export interface IDrupalSettings {

            ajaxViews: {
                [key: string]: IDrupalSettingsAjaxViewsEntry;
            };

        }

        export interface IAjaxView {

            new (
                settings: IDrupalSettingsAjaxViewsEntry
            ): IAjaxView;

            $view: JQuery;

            // @todo Remove any.
            element_settings: {
                [key: string]: any;
            };

            settings: IDrupalSettingsAjaxViewsEntry;

            $exposed_form: JQuery;

            refreshViewAjax: drupal.Core.IAjax;

            attachExposedFormAjax: () => void;

            filterNestedViews: () => boolean;

            attachPagerAjax: () => void;

            attachPagerLinkAjax: (
                id: string,
                link: string
            ) => void;

        }

        export interface IDrupalStaticMain {

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

            ajaxView: IAjaxView;

        }

        export interface IDrupalStatic {

            instances: {
                [key: string]: IAjaxView;
            };

        }

    }

    export module Core {

        export interface IAjaxCommands {

            viewsScrollTop: (
                ajax: IAjax,
                response: {selector: string}
            ) => void;

        }

        export interface IBehaviors {

            ViewsAjaxView?: IBehavior;

            viewsContextualLinks?: IBehavior;

        }

    }

    export interface IDrupalSettings {

        views: Views.IDrupalSettings;

    }

    export interface IDrupalStatic {

        Views?: Views.IDrupalStaticMain;

        view?: Views.IDrupalStatic;

    }
}
