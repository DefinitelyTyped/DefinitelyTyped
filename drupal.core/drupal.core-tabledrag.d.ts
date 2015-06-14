// Type definitions for Drupal-8.0.x Core-TableDrag
// Project: https://www.drupal.org/project/drupal
// Definitions by: Andor Dávid <https://github.com/Sweetchuck>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/// <reference path="../jquery/jquery.d.ts"/>
/// <reference path="drupal.core.d.ts"/>

declare module drupal {

    export module Core {

        export interface ITableSettings {

        }

        export interface ITableDragRowSettings {

            target: string;

        }

        export interface ITableDragRow {

            new (
                tableRow: Element,
                method: string,
                indentEnabled: boolean,
                maxDepth: number,
                addClasses: boolean
            ): ITableDragRow;

            element: Element;

            method: string;

            group: Element[];

            groupDepth: number;

            changed: boolean;

            table: Element;

            indentEnabled: boolean;

            maxDepth: number;

            direction: string;

            indents?: number;

            children: Element[];

            findChildren: (
                addClasses: boolean
            ) => void;

            isValidSwap: (
                row: Element
            ) => boolean;

            swap: (
                position: string,
                row: Element
            ) => boolean;

            validIndentInterval: (
                pervRow: Element,
                nextRow: Element
            ) => Core.IRange;

            indent: (
                indentDiff: number
            ) => number;

            findSiblings: (
                rowSettings: ITableDragRowSettings
            ) => Element[];

            removeIndentClasses: () => void;

            markChanged: () => void;

            onIndent: () => void;

            onSwap: (
                swappedRow: Element
            ) => void;

        }

        export interface ITableDrag {

            new (
                table: Element,
                tableSettings: ITableSettings
            ): ITableDrag;

            $table: JQuery;

            table: Element;

            tableSettings: ITableSettings;

            dragObject: any;

            rowObject: any;

            oldRowElement: Element;

            oldY: number;

            changed: boolean;

            maxDepth: number;

            rtl: boolean;

            striping: boolean;

            scrollSettings: {

                amount: number;

                interval: number;

                trigger: number;

            };

            scrollInterval: number;

            scrollY: number;

            windowHeight: number;

            indentEnabled: boolean;

            indentAmount: number;

            initColumns: () => void;

            addColspanClass: (
                columnIndex: number
            ) => () => void;

            displayColumns: (
                displayWeight: boolean
            ) => void;

            toggleColumns: () => void;

            hideColumns: () => void;

            showColumns: () => void;

            rowSettings: (
                group: string,
                row: string
            ) => ITableDragRowSettings;

            makeDraggable: (
                item: Element
            ) => void;

            dragStart: (
                event: JQueryEventObject,
                self: ITableDrag,
                item: Element
            ) => void;

            dragRow: (
                event: JQueryEventObject,
                self: ITableDrag
            ) => boolean;

            dropRow: (
                event: JQueryEventObject,
                self: ITableDrag
            ) => void;

            pointerCoords: (
                event: JQueryEventObject
            ) => Core.IPoint;

            getPointerOffset: (
                target: Element,
                event: JQueryEventObject
            ) => Core.IPoint;

            findDropTargetRow: (
                x: number,
                y: number
            ) => Element;

            updateFields: (
                changedRow: Element
            ) => void;

            updateField: (
                changedRow: Element,
                group: string
            ) => void;

            copyDragClasses: (
                sourceRow: Element,
                targetRow: Element,
                group: string
            ) => void;

            checkScroll: (
                cursorY: number
            ) => number;

            setScroll: (
                scrollAmount: number
            ) => void;

            restripeTable: () => void;

            onDrag: () => void;

            onDrop: () => void;

            row: ITableDragRow;

        }

        export interface ITheme {

            tableDragChangedMarker: () => string;

            tableDragIndentation: () => string;

            tableDragChangedWarning: () => string;

        }

        export interface IBehaviors {

            tableDrag?: IBehavior;

        }

    }

    export interface IDrupalStatic {

        tableDrag: Core.ITableDrag;

    }

}
