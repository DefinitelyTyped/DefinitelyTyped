// Type definitions for Drupal-8.0.x Core-VerticalTabs
// Project: https://www.drupal.org/project/drupal
// Definitions by: Andor Dávid <https://github.com/Sweetchuck>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/// <reference path="../jquery/jquery.d.ts"/>
/// <reference path="drupal.core.d.ts"/>

declare module drupal {

    export module Core {

        export interface IVerticalTabThemeSettings {

            title: string;

            details: JQuery;

        }

        export interface IVerticalTabThemeReturn {

            item: JQuery;

            link: JQuery;

            summary: JQuery;

        }

        export interface IVerticalTab extends IVerticalTabThemeSettings, IVerticalTabThemeReturn {

            new (
                settings: IVerticalTabThemeSettings
            ): IVerticalTab;

            focus: () => void;

            updateSummary: () => void;

            tabShow: () => IVerticalTab;

            tabHide: () => IVerticalTab;

        }

        export interface ITheme {

            verticalTab: () => IVerticalTabThemeReturn;

        }

        export interface IBehaviors {

            verticalTabs?: IBehavior;

        }

    }

    export interface IDrupalStatic {

        verticalTab: Core.IVerticalTab;

    }
}
