// Type definitions for Drupal-8.0.x Core-TableDrag
// Project: https://www.drupal.org/project/drupal
// Definitions by: Andor Dávid <https://github.com/Sweetchuck>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/// <reference path="../jquery/jquery.d.ts"/>
/// <reference path="drupal.core.d.ts"/>

declare module drupal {

    export module Core {

        export interface TableSettings {

        }

        export interface TableDragRowSettings {

            target: string;

        }

        export interface TableDragRow {

            new (
                tableRow: Element,
                method: string,
                indentEnabled: boolean,
                maxDepth: number,
                addClasses: boolean
            ): TableDragRow;

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
            ) => Core.Range;

            indent: (
                indentDiff: number
            ) => number;

            findSiblings: (
                rowSettings: TableDragRowSettings
            ) => Element[];

            removeIndentClasses: () => void;

            markChanged: () => void;

            onIndent: () => void;

            onSwap: (
                swappedRow: Element
            ) => void;

        }

        export interface TableDrag {

            new (
                table: Element,
                tableSettings: TableSettings
            ): TableDrag;

            $table: JQuery;

            table: Element;

            tableSettings: TableSettings;

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
            ) => TableDragRowSettings;

            makeDraggable: (
                item: Element
            ) => void;

            dragStart: (
                event: JQueryEventObject,
                self: TableDrag,
                item: Element
            ) => void;

            dragRow: (
                event: JQueryEventObject,
                self: TableDrag
            ) => boolean;

            dropRow: (
                event: JQueryEventObject,
                self: TableDrag
            ) => void;

            pointerCoords: (
                event: JQueryEventObject
            ) => Core.Point;

            getPointerOffset: (
                target: Element,
                event: JQueryEventObject
            ) => Core.Point;

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

            row: TableDragRow;

        }

        export interface Theme {

            tableDragChangedMarker: () => string;

            tableDragIndentation: () => string;

            tableDragChangedWarning: () => string;

        }

        export interface Behaviors {

            tableDrag?: Behavior;

        }

    }

    export interface DrupalStatic {

        tableDrag: Core.TableDrag;

    }

}
