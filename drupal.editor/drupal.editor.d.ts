// Type definitions for Drupal-8.0.x Editor
// Project: https://www.drupal.org/project/drupal
// Definitions by: Andor Dávid <https://github.com/Sweetchuck>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/// <reference path="../drupal.core/drupal.core.d.ts"/>
/// <reference path="../drupal.core/drupal.core-ajax.d.ts"/>

declare module drupal {

    export module Editor {

        export interface IFormat {

            editor: string;

            format: string;

        }

        export interface IEditorBase {

            editorSupportsContentFiltering: boolean;

            attach: (
                element: HTMLTextAreaElement,
                format: IFormat
            ) => void;

            detach: (
                element: HTMLTextAreaElement,
                format: IFormat
            ) => void;

            onChange: (
                element: HTMLTextAreaElement,
                callback: (editorData: any) => void
            ) => boolean;

            attachInlineEditor: (
                element: HTMLTextAreaElement,
                format: IFormat,
                mainToolbarId: string,
                floatedToolbarId: string
            ) => void;

            _loadExternalPlugins: (
                format: IFormat
            ) => void;

        }

        export interface IEditorFeature {

            new (
                name: string
            ): IEditorFeature;

            name?: string

            rules?: IEditorFeatureHTMLRule[];

            addHTMLRule?: (
                rule: IEditorFeatureHTMLRule
            ) => void;

        }

        export interface IRuleDefinition {

            tags?: string[];

            attributes?: string[];

            styles?: string[];

            classes?: string[];

        }

        export interface IEditorFeatureHTMLRule extends  IEditorFeature {

            new () : IEditorFeatureHTMLRule;

            required: IRuleDefinition;

            allowed: IRuleDefinition;

            raw?: any;

        }

        export interface IEditorConfiguration {

            addedFeature?: (
                feature: IEditorFeature
            ) => void;

            removedFeature?: (
                feature: IEditorFeature
            ) => void;

            modifiedFeature?: (
                feature: IEditorFeature
            ) => void;

            featureIsAllowedByFilters?: (
                feature: IEditorFeature
            ) => boolean;

        }

        export interface IFilterStatus {

            new (
                name: string
            ): IFilterStatus;

            name?: string;

            active?: boolean;

            rules?: IEditorFeatureHTMLRule[];

            addHTMLRule?: (
                rule: IEditorFeatureHTMLRule
            ) => void;

        }

        export interface IFilterHTMLRule {

            (): {

                tags: string[];

                allow: boolean;

                restrictedTags: {

                    tags: string[];

                    allowed: IRuleDefinition;

                    forbidden: IRuleDefinition;

                }

            };

        }

        export interface IFilterConfiguration {

            statuses?: {

                [key: string]: IFilterStatus;

            };

            liveSettingParsers?: {

                [key: string]: any;

            };

            update?: () => void;

        }

        export interface IEditors {}

        export interface IQuickEditEditor {

            textFormat?: any;

            textFormatHasTransformations?: boolean;

            textEditor?: IEditorBase;

            $textElement?: JQuery;

            _getUntransformedText?: (
                callback?: (data: Object) => void
            ) => string;

        }

        export interface IDrupalSettings {

            editor?: {

                formats?: {

                    [key: string]: IFormat;

                }

            }

        }

        export interface IDrupalStatic {

            editors?: IEditors;

            editorAttach?: (
                element: HTMLTextAreaElement,
                format: any
            ) => void;

            editorDetach?: (
                element: HTMLTextAreaElement,
                format: any,
                trigger: string
            ) => void;

            editorConfiguration?: IEditorConfiguration;

            EditorFeature?: IEditorFeature;

            EditorFeatureHTMLRule?: IEditorFeatureHTMLRule;

            FilterStatus?: IFilterStatus;

            FilterHTMLRule?: IFilterHTMLRule;

            filterConfiguration?: IFilterConfiguration;

        }

    }

    export module QuickEdit {

        export interface IEditors {

            editor?: Editor.IQuickEditEditor;

        }

    }

    export module Core {

        export interface IAjaxCommands {

            editorDialogSave?: IAjaxCommand;

        }

        export interface IBehaviors {

            editor?: IBehavior;

            initializeFilterConfiguration?: IBehavior;

        }


    }

    export interface IDrupalSettings extends Editor.IDrupalSettings {}

    export interface IDrupalStatic extends Editor.IDrupalStatic {}

}
