// Type definitions for Drupal-8.0.x ViewUI
// Project: https://www.drupal.org/project/drupal
// Definitions by: Andor Dávid <https://github.com/Sweetchuck>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/// <reference path="../jquery/jquery.d.ts"/>
/// <reference path="../drupal.core/drupal.core-ajax.d.ts"/>

declare module drupal {

    export module Core {

        export interface AjaxCommands {

            viewsHighlight: AjaxCommand;

            viewsShowButtons: AjaxCommand;

            viewsTriggerPreview: AjaxCommand;

            viewsReplaceTitle: AjaxCommand;

        }

        export interface Behaviors {

            livePreview?: Behavior;

            syncPreviewDisplay?: Behavior;

            // @todo Define the "collapseReplaced".
            viewsAjax?: Behavior;

            viewsModalContent?: Behavior;

            viewsUiEditView?: Behavior;

            viewsUiAddView?: Behavior;

            addItemForm?: Behavior;

            // @todo Define the "toggleMenu".
            viewsUiRenderAddViewButton?: Behavior;

            viewsUiSearchOptions?: Behavior;

            viewsUiPreview?: Behavior;

            viewsUiRearrangeFilter?: Behavior;

            viewsFilterConfigSelectAll?: Behavior;

            viewsRemoveIconClass?: Behavior;

            viewsUiCheckboxify?: Behavior;

            viewsUiChangeDefaultWidget?: Behavior;

            viewsUiOverrideSelect?: Behavior;

            viewsUiHandlerRemoveLink?: Behavior;

            viewTableFilterByText?: Behavior;

        }

    }

    export module ViewsUI {

        export interface FormFieldFiller {

            new (
                $target: JQuery,
                exclude: boolean,
                replace: string,
                suffix: string
            ): FormFieldFiller;

            source: JQuery;

            target: JQuery;

            exclude: boolean;

            replace: string;

            suffix: string;

            populate: () => any;

            // @todo According to real code the return type is "void", but the
            // return value is used by the this.populate().
            _populate: () => any;

            bind: () => void;

            unbind: () => any;

            rebind: (
                $fields: JQuery
            ) => any;

            getTransliterated: () => string;

        }

        export interface AddItemForm {

            new (
                $form: JQuery
            ): AddItemForm;

            $form: JQuery;

            $selected_div: JQuery;

            checkedItems: string[];

            handleCheck: (
                event: JQueryEventObject
            ) => void

            refreshCheckedItems: () => void

        }

        export interface OptionInfo {
            searchText: string;

            $div: JQuery;
        }

        export interface OptionsSearch {

            new (
                $form: JQuery
            ): OptionsSearch;

            $form: JQuery;

            $searchBox: JQuery;

            options: {
                [key: number]: OptionInfo
            };

            getOptions: (
                $allOptions: JQuery
            ) => {
                [key: number]: OptionInfo
            };

            handleKeyup: (
                event: JQueryEventObject
            ) => void

        }

        export interface RearrangeFilterHandler {

            new (
                $table: JQuery,
                $operator: JQuery
            ): RearrangeFilterHandler;

            table: JQuery;

            operator: JQuery;

            hasGroupOperator: boolean;

            draggableRows: JQuery;

            addGroupButton: JQuery;

            removeGroupButtons: JQuery;

            dropdowns?: JQuery;

            insertAddRemoveFilterGroupLinks: () => void;

            clickAddGroupButton: (
                event: JQueryEventObject
            ) => void;


            clickRemoveGroupButton: (
                event: JQueryEventObject
            ) => void;

            duplicateGroupsOperator: () => JQuery;

            syncGroupsOperators: () => void;

            operatorChangeHandler: (
                event: JQueryEventObject
            ) => void;

            modifyTableDrag: () => void;

            redrawOperatorLabels: () => void;

            updateRowspans: () => void;

        }

        export interface Checkboxifier {

            new (
                button: HTMLElement
            ): Checkboxifier;

            $button: JQuery;

            $parent: JQuery;

            $input: JQuery;

            clickHandler: (
                e: JQueryEventObject
            ) => void;

        }

        export interface DrupalStatic {

            FormFieldFiller: ViewsUI.FormFieldFiller;

            AddItemForm: ViewsUI.AddItemForm;

            OptionsSearch: ViewsUI.OptionsSearch;

            RearrangeFilterHandler: ViewsUI.RearrangeFilterHandler;

            Checkboxifier: ViewsUI.Checkboxifier;

        }

    }

    export interface DrupalStatic {

        viewsUi?: ViewsUI.DrupalStatic;

    }
}
