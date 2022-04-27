// Type definitions for @uswds/uswds 3.0
// Project: https://github.com/uswds/uswds
// Definitions by: Morgan Spencer <https://github.com/morganmspencer>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export const accordion: {
    ACCORDION: string;
    BUTTON: string;
    init(root: HTMLElement | Document): void;
    on(el: HTMLElement): void;
    off(el: HTMLElement): void;
    show(button: HTMLButtonElement): boolean;
    hide(button: HTMLButtonElement): boolean;
    /**
     * Toggle a button's "pressed" state, optionally providing a target
     * state.
     *
     * @param button
     * @param expanded If no state is provided, the current
     * state will be toggled (from false to true, and vice-versa).
     * @return the resulting state
     */
    toggle(button: HTMLButtonElement, expanded?: boolean): boolean;
    /**
     * Get an Array of button elements belonging directly to the given
     * accordion element.
     * @param accordion
     * @return buttons
     */
    getButtons(accordion: HTMLElement): HTMLButtonElement[];
};

export const banner: {
    on(el: HTMLElement): void;
    off(el: HTMLElement): void;
};

export const characterCount: {
    init(root: HTMLElement | Document): void;
    MESSAGE_INVALID_CLASS: string;
    VALIDATION_MESSAGE: string;
    on(el: HTMLElement): void;
    off(el: HTMLElement): void;
};

export const comboBox: {
    init(root: HTMLElement | Document): void;
    COMBO_BOX_CLASS: string;
    on(el: HTMLElement): void;
    off(el: HTMLElement): void;
    /**
     * Get an object of elements belonging directly to the given
     * combo box component.
     *
     * @param el the element within the combo box
     * @returns elements
     */
    getComboBoxContext(el: HTMLElement): {
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
    enhanceComboBox(_comboBoxEl: HTMLElement): void;
    /**
     * Generate a dynamic regular expression based off of a replaceable and possibly filtered value.
     *
     * @param filter An element within the combo box component
     * @param query The value to use in the regular expression
     * @param extras An object of regular expressions to replace and filter the query
     */
    generateDynamicRegExp(filter: string, query?: string, extras?: object): RegExp;
    /**
     * Disable the combo-box component
     *
     * @param el An element within the combo box component
     */
    disable(el: HTMLInputElement): void;
    /**
     * Enable the combo-box component
     *
     * @param el An element within the combo box component
     */
    enable(el: HTMLInputElement): void;
    /**
     * Display the option list of a combo box component.
     *
     * @param el An element within the combo box component
     */
    displayList(el: HTMLInputElement): void;
    /**
     * Hide the option list of a combo box component.
     *
     * @param el An element within the combo box component
     */
    hideList(el: HTMLInputElement): void;
};

export const datePicker: {
    init(root: HTMLElement | Document): void;
    on(el: HTMLElement): void;
    off(el: HTMLElement): void;
    /**
     * Get an object of the properties and elements belonging directly to the given
     * date picker component.
     *
     * @param el the element within the date picker
     * @returns elements
     */
    getDatePickerContext(el: HTMLElement): {
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
    disable(el: HTMLInputElement): void;
    /**
     * Enable the date picker component
     *
     * @param el An element within the date picker component
     */
    enable(el: HTMLInputElement): void;
    /**
     * Validate the value in the input as a valid date of format M/D/YYYY
     *
     * @param el An element within the date picker component
     */
    isDateInputInvalid(el: HTMLInputElement): boolean;
    /**
     * Select the value of the date picker inputs.
     *
     * @param el An element within the date picker component
     * @param dateString The date string to update in YYYY-MM-DD format
     */
    setCalendarValue(el: HTMLButtonElement, dateString: string): void;
    /**
     * Validate the value in the input as a valid date of format M/D/YYYY
     *
     * @param el An element within the date picker component
     */
    validateDateInput(el: HTMLElement): void;
    /**
     * render the calendar.
     *
     * @param el An element within the date picker component
     * @param _dateToDisplay a date to render on the calendar
     * @returns a reference to the new calendar element
     */
    renderCalendar(el: HTMLElement, _dateToDisplay: Date): HTMLElement;
    /**
     * Update the calendar when visible.
     *
     * @param el an element within the date picker
     */
    updateCalendarIfVisible(el: HTMLElement): void;
};

export const dateRangePicker: {
    init(root: HTMLElement | Document): void;
    on(el: HTMLElement): void;
    off(el: HTMLElement): void;
};

export const fileInput: {
    init(root: HTMLElement | Document): void;
    on(el: HTMLElement): void;
    off(el: HTMLElement): void;
    /**
     * Get an object of the properties and elements belonging directly to the given
     * file input component.
     *
     * @param el the element within the file input
     * @returns elements
     */
    getFileInputContext(el: HTMLElement): {
        dropZoneEl: HTMLDivElement;
        inputEl: HTMLInputElement;
    };
    /**
     * Disable the file input component
     *
     * @param el An element within the file input component
     */
    disable(el: HTMLInputElement): void;
    /**
     * Enable the file input component
     *
     * @param el An element within the file input component
     */
    enable(el: HTMLInputElement): void;
};

export const footer: {
    HIDE_MAX_WIDTH: number;
    init(root: HTMLElement | Document): void;
    on(el: HTMLElement): void;
    off(el: HTMLElement): void;
    teardown(): void;
};

export const inputPrefixSuffix: {
    init(root: HTMLElement | Document): void;
    on(el: HTMLElement): void;
    off(el: HTMLElement): void;
};

export const modal: {
    focusTrap: null;
    init(root: HTMLElement | Document): void;
    on(el: HTMLElement): void;
    off(el: HTMLElement): void;
    /**
     *  Toggle the visibility of a modal window
     *
     * @param event the keydown event
     * @returns safeActive if mobile is open
     */
    toggleModal(event: KeyboardEvent): boolean;
};

export const navigation: {
    focusTrap: null;
    init(root: HTMLElement | Document): void;
    on(el: HTMLElement): void;
    off(el: HTMLElement): void;
    teardown(): void;
    toggleNav(active: boolean): boolean;
};

export const password: {
    on(el: HTMLElement): void;
    off(el: HTMLElement): void;
};

export const search: {
    init(root: HTMLElement | Document): void;
    on(el: HTMLElement): void;
    off(el: HTMLElement): void;
    teardown(): void;
};

export const skipnav: {
    on(el: HTMLElement): void;
    off(el: HTMLElement): void;
};

export const table: {
    TABLE: string;
    SORTABLE_HEADER: string;
    SORT_BUTTON: string;
    init(root: HTMLElement | Document): void;
    on(el: HTMLElement): void;
    off(el: HTMLElement): void;
};

export const timePicker: {
    FILTER_DATASET: {
        filter: string;
        apQueryFilter: string;
        hourQueryFilter: string;
        minuteQueryFilter: string;
    };
    init(root: HTMLElement | Document): void;
    on(el: HTMLElement): void;
    off(el: HTMLElement): void;
};

export const tooltip: {
    init(root: HTMLElement | Document): void;
    on(el: HTMLElement): void;
    off(el: HTMLElement): void;
};

export const validator: {
    on(el: HTMLElement): void;
    off(el: HTMLElement): void;
};
