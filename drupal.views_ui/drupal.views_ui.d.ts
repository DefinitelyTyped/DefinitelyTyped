// Type definitions for Drupal-8.0.x ViewUI
// Project: https://www.drupal.org/project/drupal
// Definitions by: Andor Dávid <https://github.com/Sweetchuck>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/// <reference path="../jquery/jquery.d.ts"/>
/// <reference path="../drupal.core/drupal.core-ajax.d.ts"/>

declare module drupal {

    export module Core {

        export interface IAjaxCommands {

            viewsHighlight: IAjaxCommand;

            viewsShowButtons: IAjaxCommand;

            viewsTriggerPreview: IAjaxCommand;

            viewsReplaceTitle: IAjaxCommand;

        }

        export interface IBehaviors {

            livePreview?: IBehavior;

            syncPreviewDisplay?: IBehavior;

            // @todo Define the "collapseReplaced".
            viewsAjax?: IBehavior;

            viewsModalContent?: IBehavior;

            viewsUiEditView?: IBehavior;

            viewsUiAddView?: IBehavior;

            addItemForm?: IBehavior;

            // @todo Define the "toggleMenu".
            viewsUiRenderAddViewButton?: IBehavior;

            viewsUiSearchOptions?: IBehavior;

            viewsUiPreview?: IBehavior;

            viewsUiRearrangeFilter?: IBehavior;

            viewsFilterConfigSelectAll?: IBehavior;

            viewsRemoveIconClass?: IBehavior;

            viewsUiCheckboxify?: IBehavior;

            viewsUiChangeDefaultWidget?: IBehavior;

            viewsUiOverrideSelect?: IBehavior;

            viewsUiHandlerRemoveLink?: IBehavior;

            viewTableFilterByText?: IBehavior;

        }

    }

    export module ViewsUI {

        export interface IFormFieldFiller {

            new (
                $target: JQuery,
                exclude: boolean,
                replace: string,
                suffix: string
            ): IFormFieldFiller;

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

        export interface IAddItemForm {

            new (
                $form: JQuery
            ): IAddItemForm;

            $form: JQuery;

            $selected_div: JQuery;

            checkedItems: string[];

            handleCheck: (
                event: JQueryEventObject
            ) => void

            refreshCheckedItems: () => void

        }

        export interface IOptionInfo {
            searchText: string;

            $div: JQuery;
        }

        export interface IOptionsSearch {

            new (
                $form: JQuery
            ): IOptionsSearch;

            $form: JQuery;

            $searchBox: JQuery;

            options: {
                [key: number]: IOptionInfo
            };

            getOptions: (
                $allOptions: JQuery
            ) => {
                [key: number]: IOptionInfo
            };

            handleKeyup: (
                event: JQueryEventObject
            ) => void

        }

        export interface IRearrangeFilterHandler {

            new (
                $table: JQuery,
                $operator: JQuery
            ): IRearrangeFilterHandler;

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

        export interface ICheckboxifier {

            new (
                button: HTMLElement
            ): ICheckboxifier;

            $button: JQuery;

            $parent: JQuery;

            $input: JQuery;

            clickHandler: (
                e: JQueryEventObject
            ) => void;

        }

        export interface IDrupalStatic {

            FormFieldFiller: ViewsUI.IFormFieldFiller;

            AddItemForm: ViewsUI.IAddItemForm;

            OptionsSearch: ViewsUI.IOptionsSearch;

            RearrangeFilterHandler: ViewsUI.IRearrangeFilterHandler;

            Checkboxifier: ViewsUI.ICheckboxifier;

        }

    }

    export interface IDrupalStatic {

        viewsUi?: ViewsUI.IDrupalStatic;

    }
}
