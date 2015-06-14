// Type definitions for Drupal-8.0.x Core-TableHeader
// Project: https://www.drupal.org/project/drupal
// Definitions by: Andor Dávid <https://github.com/Sweetchuck>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/// <reference path="../jquery/jquery.d.ts"/>
/// <reference path="drupal.core.d.ts"/>

declare module drupal {

    export module Core {

        export interface ITableHeader {

            new (
                table: Element
            ): ITableHeader;

            $originalTable: JQuery;

            $originalHeader: JQuery;

            $originalHeaderCells: JQuery;

            $stickyTable: JQuery;

            $stickyHeaderCells: JQuery;

            displayWeight: any;

            tableHeight: number;

            tableOffset: JQueryCoordinates;

            tables: ITableHeader[];

            minHeight: number;

            stickyVisible: boolean;

            createSticky: () => void;

            stickyPosition: (
                offsetTop: number,
                offsetLeft: number
            ) => string;

            checkStickyVisible: () => boolean;

            onScroll: (
                e: JQueryEventObject
            ) => void;

            recalculateSticky: (
                event: JQueryEventObject
            ) => void;

        }

        export interface IBehaviors {

            tableHeader?: IBehavior;

        }

    }

    export interface IDrupalStatic {

        TableHeader: Core.ITableHeader;

    }

}
