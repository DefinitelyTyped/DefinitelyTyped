// Type definitions for jquery-editable-select 2.2
// Project: https://github.com/indrimuska/jquery-editable-select
// Definitions by: Vincent Biret <https://github.com/baywet>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

/// <reference types="jquery"/>

declare namespace JQueryEditableSelect {
    interface EditableSelectOptions {
        /**
         * Filter (or not) items in list while typing.
         */
        filter?: boolean;
        /**
         * Easing used for showing and hiding the dropdown list.
         */
        effects?: 'default' | 'slide' | 'fade';
        /**
         * Duration of the easings (in milliseconds).
         */
        duration?: number | 'fast' | 'slow';
        /**
         * Where to append the dropdown list in the DOM.
         */
        appendTo?: string | JQuery;
        /**
         * How dropdown list is triggered.
         */
        trigger?: 'focus'| 'manual';
    }
}

interface JQuery {
    /**
     * Transforms the <select> into a typeahead field. Accepts an optional options object.
     *
     * @param options Options setting the editable select behavior
     */
    editableSelect(options?: JQueryEditableSelect.EditableSelectOptions): JQuery;
    /**
     * Manually shows/hide/filters/clears/destorys the dropdown list.
     *
     * @param action Action to apply
     */
    editableSelect(action: 'show'| 'hide'| 'filter' | 'clear'| 'destroy'): void;
    /**
     * Manually sets the value of the text field to the value of the $element passed as parameter.
     *
     * @param action Action to apply, must be 'select'
     * @param element element to select (it must be one of the elements in the dropdown list)
     */
    editableSelect(action: 'select', element: JQuery): void;
    /**
     * Adds a new option in the dropdown list
     *
     * @param action Action to apply, must be 'add'
     * @param text Test to be displayed
     * @param index position to insert the element at.
     * @param attrs optional attributes to add to the element
     * @param data optional data to add to the element
     */
    editableSelect(action: 'add', text: string , index?: number, attrs?: Array<{name: string, value: string}>, data?: string): void;
    /**
     * Removes an option in the dropdown list at the given index.
     *
     * @param action Action to apply, must be 'remove'
     * @param index position of the element to remove.
     */
    editableSelect(action: 'remove', index: number): void;
}
