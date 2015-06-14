// Type definitions for Drupal-8.0.x CKEditor
// Project: https://www.drupal.org/project/drupal
// Definitions by: Andor Dávid <https://github.com/Sweetchuck>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/// <reference path="../ckeditor/ckeditor.d.ts"/>
/// <reference path="../backbone/backbone.d.ts" />
/// <reference path="../jqueryui/jqueryui.d.ts"/>
/// <reference path="../drupal.core/drupal.core.d.ts"/>
/// <reference path="../drupal.editor/drupal.editor.d.ts"/>

declare module drupal {

    export module CKEditor {

        export interface IEditor extends Editor.IEditorBase {}

        export interface IMain {

            views: {

                [key: string]: any;

            }

            models: {

                [key: string]: any;

            }

            registerButtonMove?: (
                view: any,
                $button: JQuery,
                callback: (foo: boolean) => void
            ) => void;

            registerGroupMove?: (
                view: any,
                $button: JQuery
            ) => void;

            openGroupNameDialog?: (
                view: any,
                $button: JQuery,
                callback: (foo: boolean) => void
            ) => void;

            saveCallback?: () => any;

            openDialog?: (
                editor: CKEDITOR.editor,
                url: string,
                existingValues: {[key: string]: any},
                saveCallback: () => any,
                dialogSettings: JQueryUI.DialogOptions
            ) => void;

        }

    }

    export module Editor {

        export interface IEditors {

            ckeditor?: CKEditor.IEditor;

        }

    }

    export module Core {

        export interface ITheme {

            ckeditorRow?: () => string;

            ckeditorToolbarGroup?: () => string;

            ckeditorButtonGroupNameForm?: () => string;

            ckeditorButtonGroupNamesToggle?: () => string;

            ckeditorNewButtonGroup?: () => string;

        }

        export interface IBehaviors {

            ckeditorAdmin?: IBehavior;

            ckeditorAdminButtonPluginSettings?: IBehavior;

            ckeditorDrupalImageSettingsSummary?: IBehavior;

            ckeditorStylesComboSettings?: IBehavior;

            ckeditorStylesComboSettingsSummary?: IBehavior;

        }

    }

    export interface IDrupalStatic {

        ckeditor?: CKEditor.IMain;

    }

}
