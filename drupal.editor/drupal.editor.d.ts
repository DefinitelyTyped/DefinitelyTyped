// Type definitions for Drupal-8.0.x Editor
// Project: https://www.drupal.org/project/drupal
// Definitions by: Andor Dávid <https://github.com/Sweetchuck>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/// <reference path="../drupal.core/drupal.core.d.ts"/>
/// <reference path="../drupal.core/drupal.core-ajax.d.ts"/>

declare module drupal {

    export module Editor {

        export interface Format {

            editor: string;

            format: string;

        }

        export interface EditorBase {

            editorSupportsContentFiltering: boolean;

            attach: (
                element: HTMLTextAreaElement,
                format: Format
            ) => void;

            detach: (
                element: HTMLTextAreaElement,
                format: Format
            ) => void;

            onChange: (
                element: HTMLTextAreaElement,
                callback: (editorData: any) => void
            ) => boolean;

            attachInlineEditor: (
                element: HTMLTextAreaElement,
                format: Format,
                mainToolbarId: string,
                floatedToolbarId: string
            ) => void;

            _loadExternalPlugins: (
                format: Format
            ) => void;

        }

        export interface EditorFeature {

            new (
                name: string
            ): EditorFeature;

            name?: string

            rules?: EditorFeatureHTMLRule[];

            addHTMLRule?: (
                rule: EditorFeatureHTMLRule
            ) => void;

        }

        export interface RuleDefinition {

            tags?: string[];

            attributes?: string[];

            styles?: string[];

            classes?: string[];

        }

        export interface EditorFeatureHTMLRule extends  EditorFeature {

            new () : EditorFeatureHTMLRule;

            required: RuleDefinition;

            allowed: RuleDefinition;

            raw?: any;

        }

        export interface EditorConfiguration {

            addedFeature?: (
                feature: EditorFeature
            ) => void;

            removedFeature?: (
                feature: EditorFeature
            ) => void;

            modifiedFeature?: (
                feature: EditorFeature
            ) => void;

            featureIsAllowedByFilters?: (
                feature: EditorFeature
            ) => boolean;

        }

        export interface FilterStatus {

            new (
                name: string
            ): FilterStatus;

            name?: string;

            active?: boolean;

            rules?: EditorFeatureHTMLRule[];

            addHTMLRule?: (
                rule: EditorFeatureHTMLRule
            ) => void;

        }

        export interface FilterHTMLRule {

            (): {

                tags: string[];

                allow: boolean;

                restrictedTags: {

                    tags: string[];

                    allowed: RuleDefinition;

                    forbidden: RuleDefinition;

                }

            };

        }

        export interface FilterConfiguration {

            statuses?: {

                [key: string]: FilterStatus;

            };

            liveSettingParsers?: {

                [key: string]: any;

            };

            update?: () => void;

        }

        export interface Editors {}

        export interface QuickEditEditor {

            textFormat?: any;

            textFormatHasTransformations?: boolean;

            textEditor?: EditorBase;

            $textElement?: JQuery;

            _getUntransformedText?: (
                callback?: (data: Object) => void
            ) => string;

        }

        export interface DrupalSettings {

            editor?: {

                formats?: {

                    [key: string]: Format;

                }

            }

        }

        export interface DrupalStatic {

            editors?: Editors;

            editorAttach?: (
                element: HTMLTextAreaElement,
                format: any
            ) => void;

            editorDetach?: (
                element: HTMLTextAreaElement,
                format: any,
                trigger: string
            ) => void;

            editorConfiguration?: EditorConfiguration;

            EditorFeature?: EditorFeature;

            EditorFeatureHTMLRule?: EditorFeatureHTMLRule;

            FilterStatus?: FilterStatus;

            FilterHTMLRule?: FilterHTMLRule;

            filterConfiguration?: FilterConfiguration;

        }

    }

    export module QuickEdit {

        export interface Editors {

            editor?: Editor.QuickEditEditor;

        }

    }

    export module Core {

        export interface AjaxCommands {

            editorDialogSave?: AjaxCommand;

        }

        export interface Behaviors {

            editor?: Behavior;

            initializeFilterConfiguration?: Behavior;

        }


    }

    export interface DrupalSettings extends Editor.DrupalSettings {}

    export interface DrupalStatic extends Editor.DrupalStatic {}

}
