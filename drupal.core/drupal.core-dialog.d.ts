// Type definitions for Drupal-8.0.x Core-Dialog
// Project: https://www.drupal.org/project/drupal
// Definitions by: Andor Dávid <https://github.com/Sweetchuck>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/// <reference path="../jquery/jquery.d.ts"/>
/// <reference path="../jqueryui/jqueryui.d.ts"/>
/// <reference path="drupal.core.d.ts"/>
/// <reference path="drupal.core-ajax.d.ts"/>

declare module drupal {

    export module Core {

        export interface DrupalSettingsDialog extends JQueryUI.DialogOptions {

            buttonClass?: string;

            buttonPrimaryClass?: string;

            autoResize: boolean;

            maxHeight: number;

        }

        export interface DialogButtonDefinition {

            text: string;

            'class': string;

            click: (
                e: JQueryEventObject
            ) => void;

        }

        export interface BehaviorDialog extends Behavior {

            prepareDialogButtons: (
                $dialog: JQuery
            ) => DialogButtonDefinition[];

        }

        export interface Behaviors {

            dialog?: BehaviorDialog;

        }

        export interface DialogHandler {

            open: boolean;

            returnValue: any;

            show: () => void

            showModal: () => void

            close: (
                value: any
            ) => void;

        }

        export interface AjaxCommands {

            openDialog?: AjaxCommand;

            closeDialog?: AjaxCommand;

            setDialogOption?: AjaxCommand;

        }

    }

    export interface DrupalSettings {

        dialog?: Core.DrupalSettingsDialog;

    }

    export interface DrupalStatic {

        dialog?: (
            element: Element,
            options: Core.DrupalSettingsDialog
        ) => Core.DialogHandler;

    }

}
