// Type definitions for Drupal-8.0.x FieldUI
// Project: https://www.drupal.org/project/drupal
// Definitions by: Andor Dávid <https://github.com/Sweetchuck>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/// <reference path="../jquery/jquery.d.ts"/>
/// <reference path="../drupal.core/drupal.core-tabledrag.d.ts"/>

declare module drupal {

    export module FieldUI {

        export interface IOverview {

            // @todo Better types.
            attach: (
                table: HTMLTableElement,
                rowsData: {
                    [key: string]: any;
                },
                rowsHandlers: any
            ) => void;

            onChange: () => void;

            onDrop: () => void;

            onSwap: (
                draggedRow: any
            ) => void;

            AJAXRefreshRows: (
                rows: any
            ) => void;

        }

        export interface IDisplayOverviewField {

            new (
                row: HTMLTableRowElement,
                data: {[key: string]: any}
            ): IDisplayOverviewField;

            row: HTMLTableRowElement;

            name: string;

            region: string;

            tableDrag: Core.ITableDrag;

            $pluginSelect: JQuery;

            getRegion: () => string;

            regionChange: (
                region: string
            ) => {
                [key: string]: HTMLElement;
            }

        }

        export interface IDisplayOverview {

            field: IDisplayOverviewField;

        }

    }

    export module Core {

        export interface IBehaviors {

            fieldUIFieldStorageAddForm?: IBehavior;

            fieldUIDisplayOverview?: IBehavior;

        }

    }

    export interface IDrupalSettings {

        existingFieldLabels?: {
            [key: string]: string;
        }

    }

    export interface IDrupalStatic {

        fieldUIOverview?: FieldUI.IOverview;

        fieldUIDisplayOverview?: FieldUI.IDisplayOverview

    }

}
