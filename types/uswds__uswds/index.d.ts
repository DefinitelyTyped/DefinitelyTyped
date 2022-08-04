// Type definitions for @uswds/uswds 3.0
// Project: https://github.com/uswds/uswds
// Definitions by: Morgan Spencer <https://github.com/morganmspencer>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

// ------------------------------
// Components
// ------------------------------

// Define components
declare namespace __USWDS {
    const accordion: {
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

    const banner: {
        on(el: HTMLElement): void;
        off(el: HTMLElement): void;
    };

    const characterCount: {
        init(root: HTMLElement | Document): void;
        MESSAGE_INVALID_CLASS: string;
        VALIDATION_MESSAGE: string;
        on(el: HTMLElement): void;
        off(el: HTMLElement): void;
    };

    const comboBox: {
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

    const datePicker: {
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

    const dateRangePicker: {
        init(root: HTMLElement | Document): void;
        on(el: HTMLElement): void;
        off(el: HTMLElement): void;
    };

    const fileInput: {
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

    const footer: {
        HIDE_MAX_WIDTH: number;
        init(root: HTMLElement | Document): void;
        on(el: HTMLElement): void;
        off(el: HTMLElement): void;
        teardown(): void;
    };

    const inputPrefixSuffix: {
        init(root: HTMLElement | Document): void;
        on(el: HTMLElement): void;
        off(el: HTMLElement): void;
    };

    const modal: {
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

    const navigation: {
        focusTrap: null;
        init(root: HTMLElement | Document): void;
        on(el: HTMLElement): void;
        off(el: HTMLElement): void;
        teardown(): void;
        toggleNav(active: boolean): boolean;
    };

    const password: {
        on(el: HTMLElement): void;
        off(el: HTMLElement): void;
    };

    const search: {
        init(root: HTMLElement | Document): void;
        on(el: HTMLElement): void;
        off(el: HTMLElement): void;
        teardown(): void;
    };

    const skipnav: {
        on(el: HTMLElement): void;
        off(el: HTMLElement): void;
    };

    const table: {
        TABLE: string;
        SORTABLE_HEADER: string;
        SORT_BUTTON: string;
        init(root: HTMLElement | Document): void;
        on(el: HTMLElement): void;
        off(el: HTMLElement): void;
    };

    const timePicker: {
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

    const tooltip: {
        init(root: HTMLElement | Document): void;
        on(el: HTMLElement): void;
        off(el: HTMLElement): void;
    };

    const validator: {
        on(el: HTMLElement): void;
        off(el: HTMLElement): void;
    };
}

// All components
declare module '@uswds/uswds/js' {
    import accordion = __USWDS.accordion;
    import banner = __USWDS.banner;
    import characterCount = __USWDS.characterCount;
    import comboBox = __USWDS.comboBox;
    import datePicker = __USWDS.datePicker;
    import dateRangePicker = __USWDS.dateRangePicker;
    import fileInput = __USWDS.fileInput;
    import footer = __USWDS.footer;
    import inputPrefixSuffix = __USWDS.inputPrefixSuffix;
    import modal = __USWDS.modal;
    import navigation = __USWDS.navigation;
    import password = __USWDS.password;
    import search = __USWDS.search;
    import skipnav = __USWDS.skipnav;
    import table = __USWDS.table;
    import timePicker = __USWDS.timePicker;
    import tooltip = __USWDS.tooltip;
    import validator = __USWDS.validator;

    export {
        accordion,
        banner,
        characterCount,
        comboBox,
        datePicker,
        dateRangePicker,
        fileInput,
        footer,
        inputPrefixSuffix,
        modal,
        navigation,
        password,
        search,
        skipnav,
        table,
        timePicker,
        tooltip,
        validator,
    };
}

declare module '@uswds/uswds/src/js/components' {
    import accordion = __USWDS.accordion;
    import banner = __USWDS.banner;
    import characterCount = __USWDS.characterCount;
    import comboBox = __USWDS.comboBox;
    import datePicker = __USWDS.datePicker;
    import dateRangePicker = __USWDS.dateRangePicker;
    import fileInput = __USWDS.fileInput;
    import footer = __USWDS.footer;
    import inputPrefixSuffix = __USWDS.inputPrefixSuffix;
    import modal = __USWDS.modal;
    import navigation = __USWDS.navigation;
    import password = __USWDS.password;
    import search = __USWDS.search;
    import skipnav = __USWDS.skipnav;
    import table = __USWDS.table;
    import timePicker = __USWDS.timePicker;
    import tooltip = __USWDS.tooltip;
    import validator = __USWDS.validator;

    export {
        accordion,
        banner,
        characterCount,
        comboBox,
        datePicker,
        dateRangePicker,
        fileInput,
        footer,
        inputPrefixSuffix,
        modal,
        navigation,
        password,
        search,
        skipnav,
        table,
        timePicker,
        tooltip,
        validator,
    };
}

// Individual components

declare module '@uswds/uswds/js/usa-accordion' {
    import accordion = __USWDS.accordion;
    export default accordion;
}

declare module '@uswds/uswds/js/usa-banner' {
    import banner = __USWDS.banner;
    export default banner;
}

declare module '@uswds/uswds/js/usa-character-count' {
    import characterCount = __USWDS.characterCount;
    export default characterCount;
}

declare module '@uswds/uswds/js/usa-combo-box' {
    import comboBox = __USWDS.comboBox;
    export default comboBox;
}

declare module '@uswds/uswds/js/usa-date-picker' {
    import datePicker = __USWDS.datePicker;
    export default datePicker;
}

declare module '@uswds/uswds/js/usa-date-range-picker' {
    import dateRangePicker = __USWDS.dateRangePicker;
    export default dateRangePicker;
}

declare module '@uswds/uswds/js/usa-file-input' {
    import fileInput = __USWDS.fileInput;
    export default fileInput;
}

declare module '@uswds/uswds/js/usa-footer' {
    import footer = __USWDS.footer;
    export default footer;
}

declare module '@uswds/uswds/js/usa-header' {
    import navigation = __USWDS.navigation;
    export default navigation;
}

declare module '@uswds/uswds/js/usa-input-prefix-suffix' {
    import inputPrefixSuffix = __USWDS.inputPrefixSuffix;
    export default inputPrefixSuffix;
}

declare module '@uswds/uswds/js/usa-modal' {
    import modal = __USWDS.modal;
    export default modal;
}

declare module '@uswds/uswds/js/_usa-password' {
    import password = __USWDS.password;
    export default password;
}

declare module '@uswds/uswds/js/usa-search' {
    import search = __USWDS.search;
    export default search;
}

declare module '@uswds/uswds/js/usa-skipnav' {
    import skipnav = __USWDS.skipnav;
    export default skipnav;
}

declare module '@uswds/uswds/js/usa-table' {
    import table = __USWDS.table;
    export default table;
}

declare module '@uswds/uswds/js/usa-time-picker' {
    import timePicker = __USWDS.timePicker;
    export default timePicker;
}

declare module '@uswds/uswds/js/usa-tooltip' {
    import tooltip = __USWDS.tooltip;
    export default tooltip;
}

declare module '@uswds/uswds/js/usa-validation' {
    import validator = __USWDS.validator;
    export default validator;
}

// ------------------------------
// Styles
// ------------------------------

declare module '@uswds/uswds/css/uswds.css' {
    const value: any;
    export = value;
}

declare module '@uswds/uswds/css/uswds.min.css' {
    const value: any;
    export = value;
}

declare module '@uswds/uswds/css/uswds.min.css.map' {
    const value: any;
    export = value;
}

declare module '@uswds/uswds/scss/usa-*' {
    const value: any;
    export = value;
}

declare module '@uswds/uswds/scss/uswds' {
    const value: any;
    export = value;
}

declare module '@uswds/uswds/scss/uswds-*' {
    const value: any;
    export = value;
}

// ------------------------------
// Images
// ------------------------------

declare module '@uswds/uswds/img/*.gif' {
    const value: any;
    export = value;
}

declare module '@uswds/uswds/src/img/*.gif' {
    const value: any;
    export = value;
}

declare module '@uswds/uswds/img/*.png' {
    const value: any;
    export = value;
}

declare module '@uswds/uswds/src/img/*.png' {
    const value: any;
    export = value;
}

declare module '@uswds/uswds/img/*.svg' {
    const value: any;
    export = value;
}

declare module '@uswds/uswds/src/img/*.svg' {
    const value: any;
    export = value;
}

declare module '@uswds/uswds/img/favicons/*.png' {
    const value: any;
    export = value;
}

declare module '@uswds/uswds/src/img/favicons/*.png' {
    const value: any;
    export = value;
}

declare module '@uswds/uswds/img/favicons/favicon.ico' {
    const value: any;
    export = value;
}

declare module '@uswds/uswds/src/img/favicons/favicon.ico' {
    const value: any;
    export = value;
}

declare module '@uswds/uswds/img/material-icons/*.svg' {
    const value: any;
    export = value;
}

declare module '@uswds/uswds/src/img/material-icons/*.svg' {
    const value: any;
    export = value;
}

declare module '@uswds/uswds/img/material-icons-deprecated/*.svg' {
    const value: any;
    export = value;
}

declare module '@uswds/uswds/src/img/material-icons-deprecated/*.svg' {
    const value: any;
    export = value;
}

declare module '@uswds/uswds/img/usa-icons/*.svg' {
    const value: any;
    export = value;
}

declare module '@uswds/uswds/src/img/usa-icons/*.svg' {
    const value: any;
    export = value;
}

declare module '@uswds/uswds/img/usa-icons-bg/*.svg' {
    const value: any;
    export = value;
}

declare module '@uswds/uswds/src/img/usa-icons-bg/*.svg' {
    const value: any;
    export = value;
}

declare module '@uswds/uswds/img/uswds-icons/*.svg' {
    const value: any;
    export = value;
}

declare module '@uswds/uswds/src/img/uswds-icons/*.svg' {
    const value: any;
    export = value;
}

// ------------------------------
// Fonts
// ------------------------------

declare module '@uswds/uswds/fonts/merriweather/*' {
    const value: any;
    export = value;
}

declare module '@uswds/uswds/fonts/public-sans/*' {
    const value: any;
    export = value;
}

declare module '@uswds/uswds/fonts/roboto-mono/*' {
    const value: any;
    export = value;
}

declare module '@uswds/uswds/fonts/source-sans-pro/*' {
    const value: any;
    export = value;
}
