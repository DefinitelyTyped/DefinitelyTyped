// Type definitions for Drupal-8.0.x Core-VerticalTabs
// Project: https://www.drupal.org/project/drupal
// Definitions by: Andor Dávid <https://github.com/Sweetchuck>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/// <reference path="../jquery/jquery.d.ts"/>
/// <reference path="drupal.core.d.ts"/>

declare module drupal {

    export module Core {

        export interface VerticalTabThemeSettings {

            title: string;

            details: JQuery;

        }

        export interface VerticalTabThemeReturn {

            item: JQuery;

            link: JQuery;

            summary: JQuery;

        }

        export interface VerticalTab extends VerticalTabThemeSettings, VerticalTabThemeReturn {

            new (
                settings: VerticalTabThemeSettings
            ): VerticalTab;

            focus: () => void;

            updateSummary: () => void;

            tabShow: () => VerticalTab;

            tabHide: () => VerticalTab;

        }

        export interface Theme {

            verticalTab: () => VerticalTabThemeReturn;

        }

        export interface Behaviors {

            verticalTabs?: Behavior;

        }

    }

    export interface DrupalStatic {

        verticalTab: Core.VerticalTab;

    }
}
