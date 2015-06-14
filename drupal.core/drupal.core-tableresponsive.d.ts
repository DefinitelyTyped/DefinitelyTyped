// Type definitions for Drupal-8.0.x Core-TableResponsive
// Project: https://www.drupal.org/project/drupal
// Definitions by: Andor Dávid <https://github.com/Sweetchuck>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/// <reference path="../jquery/jquery.d.ts"/>
/// <reference path="drupal.core.d.ts"/>

declare module drupal {

    export module Core {

        export interface ITableResponsive {

            new (
                table: Element
            ): ITableResponsive;

            table: Element;

            $table: JQuery;

            showText: string;

            hideText: string;

            $headers: JQuery;

            $link: JQuery;

            tables: ITableResponsive[];

            eventhandlerEvaluateColumnVisibility: (
                e: JQueryEventObject
            ) => void;

            eventhandlerToggleColumns: (
                e: JQueryEventObject
            ) => void;

        }

        export interface IBehaviors {

            tableResponsive?: IBehavior;

        }
    }

    export interface IDrupalStatic {

        TableResponsive: Core.ITableResponsive;

    }
}
