// Type definitions for bootstrap-multiselect 0.9
// Project: https://github.com/davidstutz/bootstrap-multiselect
// Definitions by: Mustafa Salaheldin <https://github.com/mustafasalahuldin>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

/// <reference types="jquery"/>

interface Templates {
    button?: string;
    ul?: string;
    filter?: string;
    filterClearBtn?: string;
    li?: string;
    divider?: string;
    liGroup?: string;
}

interface MultiSelectOptionElement {
    label: string;
    title?: string;
    value?: string | number;
    selected?: boolean;
    disabled?: boolean;
    children?: MultiSelectOptionElement[];
    attributes?: {[name: string]: any};
}

interface MultiSelectOptions {
    /**
     * XSS injection is a serious threat for all modern web applications. Setting enableHTML to false (default setting) will create a XSS safe multiselect.
     */
    enableHTML?: boolean;

    /**
     * If set to true, optgroup's will be clickable, allowing to easily select multiple options belonging to the same group.
     * enableClickableOptGroups is not available in single selection mode, i.e. when the multiple attribute is not present.
     * When using selectedClass, the selected classes are also applied on the option groups.
     */
    enableClickableOptGroups?: boolean;

    /**
     * If set to true, optgroup's will be collapsible.
     */
    enableCollapsibleOptGroups?: boolean;

    /**
     * If set to true, the multiselect will be disabled if no options are given.
     */
    disableIfEmpty?: boolean;

    /**
     * The text shown if the multiselect is disabled.
     * Note that this option is set to the empty string '' by default,
     * that is nonSelectedText is shown if the multiselect is disabled and no options are selected.
     */
    disabledText?: string;

    /**
     * The dropdown can also be dropped right.
     */
    dropRight?: boolean;

    /**
     * The dropdown can also be dropped up. Note that it is recommended to also set {@link maxHeight}.
     * The plugin calculates the necessary height of the dropdown and takes the minimum of the calculated value and maxHeight.
     */
    dropUp?: boolean;

    /**
     * The maximum height of the dropdown. This is useful when using the plugin with plenty of options.
     */
    maxHeight?: number;

    /**
     * The name used for the generated checkboxes.
     * See {@link https://davidstutz.github.io/bootstrap-multiselect/#post|Server-Side Processing} for details.
     */
    checkboxName?: string;

    /**
     * A function which is triggered on the change event of the options.
     * Note that the event is not triggered when selecting or deselecting options using the select and deselect methods provided by the plugin.
     * @param option The option item that was changed, wrapped in a JQuery object.
     * @param checked Whether the checkbox was checked or not.
     */
    onChange?: (option: JQuery, checked: boolean) => void;

    /**
     * A function which is triggered when the multiselect is finished initializing.
     */
    onInitialized?: (select: HTMLSelectElement, container: HTMLElement) => void;

    /**
     * A callback called when the dropdown is shown.
     * The onDropdownShow option is not available when using Twitter Bootstrap 2.3.
     */
    onDropdownShow?: (event: Event) => void;

    /**
     * A callback called when the dropdown is closed.
     * The onDropdownHide option is not available when using Twitter Bootstrap 2.3.
     */
    onDropdownHide?: (event: Event) => void;

    /**
     * A callback called after the dropdown has been shown.
     * The onDropdownShown option is not available when using Twitter Bootstrap 2.3.
     */
    onDropdownShown?: (event: Event) => void;

    /**
     * A callback called after the dropdown has been closed.
     * The onDropdownHidden option is not available when using Twitter Bootstrap 2.3.
     */
    onDropdownHidden?: (event: Event) => void;

    /**
     * The class of the multiselect button.
     * @exampl.
     * $('#example-buttonClass').multiselect({
     *      buttonClass: 'btn btn-link'
     *   });
     */
    buttonClass?: string;

    /**
     * Inherit the class of the button from the original select.
     */
    inheritClass?: boolean;

    /**
     * The container holding both the button as well as the dropdown.
     * @exampl.
     * $('#example-buttonContainer').multiselect({
     *       buttonContainer: '<div class="btn-group" />'
     *   });
     */
    buttonContainer?: string;

    /**
     * The width of the multiselect button may be fixed using this option.
     * Actually, buttonWidth describes the width of the .btn-group container and the width of the button is set to 100%.
     * @example.
     * $('#example-buttonWidth').multiselect({
     *       buttonWidth: '400px'
     *   });
     */
    buttonWidth?: string;

    /**
     * A callback specifying the text shown on the button dependent on the currently selected options.
     * The callback gets the currently selected options and the select as argument and returns the string shown as button text.
     * The default buttonText callback returns nonSelectedText in the case no option is selected,
     * {@link nSelectedText} in the case more than {@link numberDisplayed} options are selected
     * and the names of the selected options if less than {@link numberDisplayed} options are selected.
     * @param options
     * @param select
     */
    buttonText?: (options: HTMLOptionsCollection, select: HTMLSelectElement) => string;

    /**
     * A callback specifying the title of the button.
     * The callback gets the currently selected options and the select as argument and returns the title of the button as string.
     * The default buttonTitle callback returns nonSelectedText in the case no option is selected and the names of the selected options of less than {@link numberDisplayed} options are selected.
     * If more than numberDisplayed options are selected, {@link nSelectedText} is returned.
     * @param options
     * @param select
     */
    buttonTitle?: (options: HTMLOptionElement[], select: HTMLSelectElement) => string;

    /**
     * The text displayed when no option is selected. This option is used in the default buttonText and buttonTitle functions.
     */
    nonSelectedText?: string;

    /**
     * The text displayed if more than  {@link numberDisplayed} options are selected. This option is used by the default buttonText and buttonTitle callbacks.
     */
    nSelectedText?: string;

    /**
     * allSelectedText is the text displayed if all options are selected. You can disable displaying the allSelectedText by setting it to false.
     */
    allSelectedText?: string | boolean;

    /**
     * This option is used by the buttonText and buttonTitle functions to determine of too much options would be displayed.
     */
    numberDisplayed?: number;

    /**
     * Sets the separator for the list of selected items for mouse-over. Defaults to ', '. Set to '\n' for a neater display.
     */
    delimiterText?: string;

    /**
     * A callback used to define the labels of the options.
     */
    optionLabel?: (element: HTMLElement) => string;

    /**
     * A callback used to define the classes for the li elements containing checkboxes and labels.
     */
    optionClass?: (element: HTMLElement) => string;

    /**
     * The class(es) applied on selected options.
     */
    selectedClass?: string;

    /**
     *  Set to true or false to enable or disable the select all option.
     */
    includeSelectAllOption?: boolean;

    /**
     * Setting both {@link includeSelectAllOption} and {@link enableFiltering} to true, the select all option does always select only the visible option.
     * With setting selectAllJustVisible to false this behavior is changed such that always all options (irrespective of whether they are visible) are selected.
     */
    selectAllJustVisible?: boolean;

    /**
     * The text displayed for the select all option.
     */
    selectAllText?: string;

    /**
     * The select all option is added as additional option within the select.
     * To distinguish this option from the original options the value used for the select all option can be configured using the selectAllValue option.
     */
    selectAllValue?: string | number;

    /**
     * This option allows to control the name given to the select all option.
     * See {@link https://davidstutz.github.io/bootstrap-multiselect/#post|Server-Side Processing} for more details.
     */
    selectAllName?: string;

    /**
     * If set to true (default), the number of selected options will be shown in parantheses when all options are seleted.
     */
    selectAllNumber?: boolean;

    /**
     * This function is triggered when the select all option is used to select all options.
     * Note that this can also be triggered manually using the {@link .multiselect('selectAll')} method.
     * Note that the onChange option is not triggered when (de)selecting all options using the select all option.
     * The onSelectAll option is only triggered if the select all option was checked.
     * it is not triggered if all options were checked manually (causing the select all option to be checked as well).
     */
    onSelectAll?: () => void;

    /**
     * This function is triggered when the select all option is used to deselect all options.
     * Note that this can also be triggered manually using the {@link .multiselect('deselectAll')} method.
     * Note that the onChange option is not triggered when (de)selecting all options using the select all option.
     * The onDeselectAll option is only triggered if the select all option was unchecked.
     * it is not triggered if all options were unchecked manually (causing the select all option to be unchecked as well).
     */
    onDeselectAll?: () => void;

    /**
     * Set to true or false to enable or disable the filter. A filter input will be added to dynamically filter all options.
     */
    enableFiltering?: boolean;

    /**
     * The filter as configured above will use case sensitive filtering.
     * by setting enableCaseInsensitiveFiltering to true this behavior can be changed to use case insensitive filtering.
     */
    enableCaseInsensitiveFiltering?: boolean;

    /**
     * Set to true to enable full value filtering, that is all options are shown where the query is a prefix of.
     */
    enableFullValueFiltering?: boolean;

    /**
     * The options are filtered based on their text. This behavior can be changed to use the value of the options or both the text and the value.
     */
    filterBehavior?: 'text' | 'value' | 'both';

    /**
     * The placeholder used for the filter input.
     * @example   $('#example-filter-placeholder').multiselect({
     *        enableFiltering: true,
     *        filterPlaceholder: 'Search for something...'
     *   });
     */
    filterPlaceholder?: string;

    /**
     * The generated HTML markup can be controlled using templates. Basically, templates are simple configuration options.
     */
    templates?: Templates;
}

interface JQuery {
    multiselect(options?: MultiSelectOptions): JQuery;

    multiselect(method: 'destroy' | 'refresh' | 'rebuild' | 'updateButtonText'| 'disable' | 'enable'): JQuery;

    multiselect(method: 'select' | 'deselect', value: string | string[] | number, triggerOnChange?: boolean): JQuery;

    multiselect(method: 'selectAll' | 'deselectAll', justVisible?: boolean): JQuery;

    multiselect(method: 'setOptions', options: MultiSelectOptions): JQuery;

    multiselect(method: 'dataprovider', data: MultiSelectOptionElement[]): JQuery;

    multiselect(method: 'setAllSelectedText', value: string): JQuery;
}
