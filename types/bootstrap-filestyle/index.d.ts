// Type definitions for bootstrap-filestyle 0.9
// Project: https://github.com/davidstutz/bootstrap-filestyle
// Definitions by: Makoto Schoppert <https://github.com/mak0t0san>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

/// <reference types="jquery"/>

/**
 * See {@link https://davidstutz.github.io/bootstrap-filestyle/#configuration-options|https://davidstutz.github.io/bootstrap-filestyle/#configuration-options}
 */
interface FilestyleOptions {
    buttonText?: string;
    iconName?: string;
    buttonName?: string;
    size?: string;
    input?: boolean;
    badge?: boolean;
    icon?: boolean;
    buttonBefore?: boolean;
    disabled?: boolean;
    placeholder?: string;
}

interface JQuery {
    filestyle(options?: FilestyleOptions): JQuery;

    /**
     * This method is used to destroy the plugin on the given element - meaning unbinding the plugin.
     */
    filestyle(method: 'clear'): JQuery;

    /**
     * This method is used to refresh the checked checkboxes based on the currently selected options within the select. 
     * Click 'Select some options' to select some of the options. Then click refresh. 
     * The plugin will update the checkboxes accordingly.
     */
    filestyle(method: 'destroy'): JQuery;

    /**
     * Rebuilds the whole dropdown menu. All selected options will remain selected (if still existent!).
     */
    filestyle(method: 'disabled', value: boolean): JQuery;

    /**
     * Selects an option by its value. Works also using an array of values.
     * @param triggerOnChange  If set to true, the method will manually trigger the onChange option.
     */
    filestyle(method: 'buttonBefore', value: boolean): JQuery;

    /**
     * Deselect an option by its value. Works also using an array of values.
     * @param triggerOnChange  If set to true, the method will manually trigger the onChange option.
     */
    filestyle(method: 'icon', value: boolean): JQuery;

    /**
     * Selects all options. 
     * @param justVisible If set to true or not provided, all visible options are selected (when using the filter), 
     * otherwise (justVisible set to false) all options are selected.
     */
    filestyle(method: 'input', value: boolean): JQuery;

    /**
     * Deselects all options. 
     * @param justVisible If set to true or not provided, all visible options are deselected,  
     * otherwise (justVisible set to false) all options are deselected.
     */
    filestyle(method: 'size', value: string): JQuery;

    /**
     * When manually selecting/deselecting options and the corresponding checkboxes, this function updates the text and title of the button.
     * 
     * Note that usually this method is only needed when using .filestyle('selectAll', justVisible) or .filestyle('deselectAll', justVisible). In all other cases, .filestyle('refresh') should be used.
     */
    filestyle(method: 'placeholder', value: string): JQuery;

    /**
     * Used to change configuration after initializing the filestyle. This may be useful in combination with {@link filestyle('rebuild')}.
     * @example  
     * $('#example-setOptions').filestyle('setOptions', options);
     * $('#example-setOptions').filestyle('rebuild');
     */
    filestyle(method: 'buttonText', value: string): JQuery;

    /**
     * Disable both the underlying select and the dropdown button.
     */
    filestyle(method: 'buttonName', value: string): JQuery;

    /**
     * Enable both the underlying select and the dropdown button.
     */
    filestyle(method: 'iconName', value: string): JQuery;

    /**
     * This method is used to provide options programmatically
     */
    filestyle(method: 'htmlIcon'): JQuery;

    /**
     * This method is used to programmatically provide a new text to display in the button when all options are selected, at runtime.
     */
    filestyle(method: 'htmlInput'): JQuery;

    /**
     * This method is used to programmatically provide a new text to display in the button when all options are selected, at runtime.
     */
    filestyle(method: 'pushNameFiles'): JQuery;

    /**
     * This method is used to programmatically provide a new text to display in the button when all options are selected, at runtime.
     */
    //filestyle(method: 'constructor'): JQuery;
}