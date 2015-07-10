// Type definitions for Drupal-8.0.x FieldUI
// Project: https://www.drupal.org/project/drupal
// Definitions by: Andor Dávid <https://github.com/Sweetchuck>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/// <reference path="../jquery/jquery.d.ts"/>
/// <reference path="../drupal.core/drupal.core-tabledrag.d.ts"/>

declare module drupal {

    export module FieldUI {

        export interface Overview {

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

        export interface DisplayOverviewField {

            new (
                row: HTMLTableRowElement,
                data: {[key: string]: any}
            ): DisplayOverviewField;

            row: HTMLTableRowElement;

            name: string;

            region: string;

            tableDrag: Core.TableDrag;

            $pluginSelect: JQuery;

            getRegion: () => string;

            regionChange: (
                region: string
            ) => {
                [key: string]: HTMLElement;
            }

        }

        export interface DisplayOverview {

            field: DisplayOverviewField;

        }

    }

    export module Core {

        export interface Behaviors {

            fieldUIFieldStorageAddForm?: Behavior;

            fieldUIDisplayOverview?: Behavior;

        }

    }

    export interface DrupalSettings {

        existingFieldLabels?: {
            [key: string]: string;
        }

    }

    export interface DrupalStatic {

        fieldUIOverview?: FieldUI.Overview;

        fieldUIDisplayOverview?: FieldUI.DisplayOverview

    }

}
