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

        export interface IDrupalSettingsDialog extends JQueryUI.DialogOptions {

            buttonClass?: string;

            buttonPrimaryClass?: string;

            autoResize: boolean;

            maxHeight: number;

        }

        export interface IDialogButtonDefinition {

            text: string;

            'class': string;

            click: (
                e: JQueryEventObject
            ) => void;

        }

        export interface IBehaviorDialog extends IBehavior {

            prepareDialogButtons: (
                $dialog: JQuery
            ) => IDialogButtonDefinition[];

        }

        export interface IBehaviors {

            dialog?: IBehaviorDialog;

        }

        export interface IDialogHandler {

            open: boolean;

            returnValue: any;

            show: () => void

            showModal: () => void

            close: (
                value: any
            ) => void;

        }

        export interface IAjaxCommands {

            openDialog?: IAjaxCommand;

            closeDialog?: IAjaxCommand;

            setDialogOption?: IAjaxCommand;

        }

    }

    export interface IDrupalSettings {

        dialog?: Core.IDrupalSettingsDialog;

    }

    export interface IDrupalStatic {

        dialog?: (
            element: Element,
            options: Core.IDrupalSettingsDialog
        ) => Core.IDialogHandler;

    }

}
