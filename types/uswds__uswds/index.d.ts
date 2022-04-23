// Type definitions for @uswds/uswds 3.0
// Project: https://github.com/uswds/uswds
// Definitions by: Morgan Spencer <https://github.com/morganmspencer>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export namespace accordion {
    const ACCORDION: string;
    const BUTTON: string;
    function init(root: HTMLElement | Document): void;
    function on(el: HTMLElement): void;
    function off(el: HTMLElement): void;
    function show(button: HTMLButtonElement): boolean;
    function hide(button: HTMLButtonElement): boolean;
    /**
     * Toggle a button's "pressed" state, optionally providing a target
     * state.
     *
     * @param button
     * @param expanded If no state is provided, the current
     * state will be toggled (from false to true, and vice-versa).
     * @return the resulting state
     */
    function toggle(button: HTMLButtonElement, expanded?: boolean): boolean;
    /**
     * Get an Array of button elements belonging directly to the given
     * accordion element.
     * @param accordion
     * @return buttons
     */
    function getButtons(accordion: HTMLElement): HTMLButtonElement[];
}

export namespace banner {
    function on(el: HTMLElement): void;
    function off(el: HTMLElement): void;
}

export namespace characterCount {
    function init(root: HTMLElement | Document): void;
    const MESSAGE_INVALID_CLASS: string;
    const VALIDATION_MESSAGE: string;
    function on(el: HTMLElement): void;
    function off(el: HTMLElement): void;
}

export namespace comboBox {
    function init(root: HTMLElement | Document): void;
    const COMBO_BOX_CLASS: string;
    function on(el: HTMLElement): void;
    function off(el: HTMLElement): void;
    /**
     * Get an object of elements belonging directly to the given
     * combo box component.
     *
     * @param el the element within the combo box
     * @returns elements
     */
    function getComboBoxContext(el: HTMLElement): {
        comboBoxEl: HTMLElement;
        selectEl: HTMLSelectElement;
        inputEl: HTMLInputElement;
        listEl: HTMLUListElement;
        statusEl: HTMLDivElement;
        focusedOptionEl: HTMLLIElement;
        selectedOptionEl: HTMLLIElement;
        toggleListBtnEl: HTMLButtonElement;
        clearInputBtnEl: HTMLButtonElement;
        isPristine: boolean;
        disableFiltering: boolean;
    };
    /**
     * Enhance a select element into a combo box component.
     *
     * @param _comboBoxEl The initial element of the combo box component
     */
    function enhanceComboBox(_comboBoxEl: HTMLElement): void;
    /**
     * Generate a dynamic regular expression based off of a replaceable and possibly filtered value.
     *
     * @param filter An element within the combo box component
     * @param query The value to use in the regular expression
     * @param extras An object of regular expressions to replace and filter the query
     */
    function generateDynamicRegExp(filter: any, query?: string, extras?: object): RegExp;
    /**
     * Disable the combo-box component
     *
     * @param el An element within the combo box component
     */
    function disable(el: HTMLInputElement): void;
    /**
     * Enable the combo-box component
     *
     * @param el An element within the combo box component
     */
    function enable(el: HTMLInputElement): void;
    /**
     * Display the option list of a combo box component.
     *
     * @param el An element within the combo box component
     */
    function displayList(el: HTMLInputElement): void;
    /**
     * Hide the option list of a combo box component.
     *
     * @param el An element within the combo box component
     */
    function hideList(el: HTMLInputElement): void;
}

export namespace datePicker {
    function init(root: HTMLElement | Document): void;
    function on(el: HTMLElement): void;
    function off(el: HTMLElement): void;
    /**
     * Get an object of the properties and elements belonging directly to the given
     * date picker component.
     *
     * @param el the element within the date picker
     * @returns elements
     */
    function getDatePickerContext(el: HTMLElement): {
        calendarEl: HTMLDivElement;
        datePickerEl: HTMLElement;
        internalInputEl: HTMLInputElement;
        externalInputEl: HTMLInputElement;
        statusEl: HTMLDivElement;
        firstYearChunkEl: HTMLDivElement;
        calendarDate: Date;
        minDate: Date;
        maxDate: Date;
        selectedDate: Date;
        rangeDate: Date;
        defaultDate: Date;
    };
    /**
     * Disable the date picker component
     *
     * @param el An element within the date picker component
     */
    function disable(el: HTMLInputElement): void;
    /**
     * Enable the date picker component
     *
     * @param el An element within the date picker component
     */
    function enable(el: HTMLInputElement): void;
    /**
     * Validate the value in the input as a valid date of format M/D/YYYY
     *
     * @param el An element within the date picker component
     */
    function isDateInputInvalid(el: HTMLInputElement): boolean;
    /**
     * Select the value of the date picker inputs.
     *
     * @param el An element within the date picker component
     * @param dateString The date string to update in YYYY-MM-DD format
     */
    function setCalendarValue(el: HTMLButtonElement, dateString: string): void;
    /**
     * Validate the value in the input as a valid date of format M/D/YYYY
     *
     * @param el An element within the date picker component
     */
    function validateDateInput(el: HTMLElement): void;
    /**
     * render the calendar.
     *
     * @param el An element within the date picker component
     * @param _dateToDisplay a date to render on the calendar
     * @returns a reference to the new calendar element
     */
    function renderCalendar(el: HTMLElement, _dateToDisplay: Date): HTMLElement;
    /**
     * Update the calendar when visible.
     *
     * @param el an element within the date picker
     */
    function updateCalendarIfVisible(el: HTMLElement): void;
}

export namespace dateRangePicker {
    function init(root: HTMLElement | Document): void;
    function on(el: HTMLElement): void;
    function off(el: HTMLElement): void;
}

export namespace fileInput {
    function init(root: HTMLElement | Document): void;
    function on(el: HTMLElement): void;
    function off(el: HTMLElement): void;
    /**
     * Get an object of the properties and elements belonging directly to the given
     * file input component.
     *
     * @param el the element within the file input
     * @returns elements
     */
    function getFileInputContext(el: HTMLElement): {
        dropZoneEl: HTMLDivElement;
        inputEl: HTMLInputElement;
    };
    /**
     * Disable the file input component
     *
     * @param el An element within the file input component
     */
    function disable(el: HTMLInputElement): void;
    /**
     * Enable the file input component
     *
     * @param el An element within the file input component
     */
    function enable(el: HTMLInputElement): void;
}

export namespace footer {
    const HIDE_MAX_WIDTH: number;
    function init(root: HTMLElement | Document): void;
    function on(el: HTMLElement): void;
    function off(el: HTMLElement): void;
    function teardown(): void;
}

export namespace inputPrefixSuffix {
    function init(root: HTMLElement | Document): void;
    function on(el: HTMLElement): void;
    function off(el: HTMLElement): void;
}

export namespace modal {
    const focusTrap: null;
    function init(root: HTMLElement | Document): void;
    function on(el: HTMLElement): void;
    function off(el: HTMLElement): void;
    /**
     *  Toggle the visibility of a modal window
     *
     * @param event the keydown event
     * @returns safeActive if mobile is open
     */
    function toggleModal(event: KeyboardEvent): boolean;
}

export namespace navigation {
    const focusTrap: null;
    function init(root: HTMLElement | Document): void;
    function on(el: HTMLElement): void;
    function off(el: HTMLElement): void;
    function teardown(): void;
    function toggleNav(active: any): boolean;
}

export namespace password {
    function on(el: HTMLElement): void;
    function off(el: HTMLElement): void;
}

export namespace search {
    function init(root: HTMLElement | Document): void;
    function on(el: HTMLElement): void;
    function off(el: HTMLElement): void;
    function teardown(): void;
}

export namespace skipnav {
    function on(el: HTMLElement): void;
    function off(el: HTMLElement): void;
}

export namespace table {
    const TABLE: string;
    const SORTABLE_HEADER: string;
    const SORT_BUTTON: string;
    function init(root: HTMLElement | Document): void;
    function on(el: HTMLElement): void;
    function off(el: HTMLElement): void;
}

export namespace timePicker {
    const FILTER_DATASET: {
        filter: string;
        apQueryFilter: string;
        hourQueryFilter: string;
        minuteQueryFilter: string;
    };
    function init(root: HTMLElement | Document): void;
    function on(el: HTMLElement): void;
    function off(el: HTMLElement): void;
}

export namespace tooltip {
    function init(root: HTMLElement | Document): void;
    function on(el: HTMLElement): void;
    function off(el: HTMLElement): void;
}

export namespace validator {
    function on(el: HTMLElement): void;
    function off(el: HTMLElement): void;
}
