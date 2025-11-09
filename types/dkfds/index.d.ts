export function init(options: { scope: HTMLElement }): void;

export interface AccordionInstance {
    init(): void;
    bulkEvent(): void;
    eventOnClick($button: HTMLButtonElement, e: PointerEvent): void;
    toggleButton(button: HTMLButtonElement, expanded?: boolean, bulk?: boolean): void;
}

export const Accordion: {
    /**
     * Adds click functionality to accordion list
     * @param $accordion The accordion <ul> element
     * @param strings Translated labels: {"open_all": "Åbn alle", "close_all": "Luk alle"}
     */
    ($accordion: HTMLElement, strings: { open_all: string; close_all: string }): AccordionInstance;

    /**
     * Adds click functionality to accordion list
     * @param $accordion The accordion <ul> element
     * @param strings Translated labels: {"open_all": "Åbn alle", "close_all": "Luk alle"}
     */
    new ($accordion: HTMLElement, strings: { open_all: string; close_all: string }): AccordionInstance;
};

/**
 * The properties and elements within the date picker.
 */
export interface DatePickerContext {
    calendarEl: HTMLDivElement;
    datePickerEl: HTMLElement;
    dialogEl: HTMLDivElement;
    internalInputEl: HTMLInputElement;
    externalInputEl: HTMLInputElement;
    statusEl: HTMLDivElement;
    guideEl: HTMLDivElement;
    firstYearChunkEl: HTMLDivElement;
    calendarDate: Date;
    minDate: Date;
    maxDate: Date;
    selectedDate: Date;
    rangeDate: Date;
    defaultDate: Date;
}

export interface DatePicker {
    init: (root: HTMLElement) => void;
    add: DatePicker["init"];
    on: DatePicker["init"];
    off: (root: HTMLElement) => void;
    setLanguage(language: {
        open_calendar: string;
        choose_a_date: string;
        choose_a_date_between: string;
        choose_a_date_before: string;
        choose_a_date_after: string;
        aria_label_date: string;
        current_month_displayed: string;
        first_possible_date: string;
        last_possible_date: string;
        previous_year: string;
        previous_month: string;
        next_month: string;
        next_year: string;
        select_month: string;
        select_year: string;
        previous_years: string;
        next_years: string;
        guide: string;
        months_displayed: string;
        years_displayed: string;
        january: string;
        february: string;
        march: string;
        april: string;
        may: string;
        june: string;
        july: string;
        august: string;
        september: string;
        october: string;
        november: string;
        december: string;
        monday: string;
        tuesday: string;
        wednesday: string;
        thursday: string;
        friday: string;
        saturday: string;
        sunday: string;
    }): void;
    disable: (element: HTMLElement) => void;
    enable: (element: HTMLElement) => void;
    isDateInputInvalid: (element: HTMLElement) => boolean;
    /**
     * Select the value of the date picker inputs.
     *
     * @param {HTMLButtonElement} el An element within the date picker component
     * @param {string} dateString The date string to update in YYYY-MM-DD format
     */
    setCalendarValue: (el: HTMLElement, dateString: string) => void;
    validateDateInput: (el: HTMLElement) => void;
    /**
     * render the calendar.
     *
     * @param {HTMLElement} el An element within the date picker component
     * @param {Date} _dateToDisplay a date to render on the calendar
     * @returns {HTMLElement} a reference to the new calendar element
     */
    renderCalendar: (el: HTMLElement, _dateToDisplay?: Date) => HTMLElement;
    updateCalendarIfVisible: (el: HTMLElement) => void;
    getDatePickerContext(element: HTMLElement): DatePickerContext | undefined;
}

export const datePicker: DatePicker;

export interface TooltipInstance {
    init(): void;
    hideTooltip(): void;
    showTooltip(): void;
    isShowing(): boolean;
    updateTooltipPosition(): void;
}

export const Tooltip: {
    (wrapper: HTMLElement): TooltipInstance;
    new (wrapper: HTMLElement): TooltipInstance;
};

export interface AlertInstance {
    init(): void;
    hide(): void;
    show(): void;
}
export const Alert: {
    (element: HTMLElement): AlertInstance;
    new (element: HTMLElement): AlertInstance;
};

export interface BackToTopInstance {
    init(): void;
}

export const BackToTop: {
    (element: HTMLElement): BackToTopInstance;
    new (element: HTMLElement): BackToTopInstance;
};

export interface CharacterLimitInstance {
    init(): void;
}

export const CharacterLimit: {
    (
        element: HTMLElement,
        strings: {
            character_remaining: string;
            characters_remaining: string;
            character_too_many: string;
            characters_too_many: string;
        }
    ): CharacterLimitInstance;
    new (
        element: HTMLElement,
        strings: {
            character_remaining: string;
            characters_remaining: string;
            character_too_many: string;
            characters_too_many: string;
        }
    ): CharacterLimitInstance;
};

export interface CheckboxToggleContentInstance {
    init(): void;
    toggle(): void;
    expand(checkboxElement: HTMLInputElement, contentElement: HTMLElement): void;
    collapse(triggerEl: HTMLInputElement, targetEl: HTMLElement): void;
}

export const CheckboxToggleContent: {
    (element: HTMLInputElement): CheckboxToggleContentInstance;
    new (element: HTMLInputElement): CheckboxToggleContentInstance;
};

export interface DropdownInstance {
    init(): void;
    hide(): void;
    show(): void;
}

export const Dropdown: {
    (element: HTMLButtonElement): DropdownInstance;
    new (element: HTMLButtonElement): DropdownInstance;
};

export interface ErrorSummaryInstance {
    init(): void;
    handleClick: (e: MouseEvent) => void;
    focusTarget: ($target: HTMLElement) => boolean;
    getFragmentFromUrl: (url: string) => string | false;
    getAssociatedLegendOrLabel: ($input: HTMLElement) => HTMLElement | null;
}

export const ErrorSummary: {
    (element: HTMLElement): ErrorSummaryInstance;
    new (element: HTMLElement): ErrorSummaryInstance;
};

export interface ModalInstance {
    init(): void;
    hide(): void;
    show(): void;
}

export const Modal: {
    (element: HTMLElement): ModalInstance;
    new (element: HTMLElement): ModalInstance;
};

export interface MenuDropdownInstance {
    init(): void;
    hide(): void;
    show(): void;
}

export const MenuDropdown: {
    (element: HTMLButtonElement): MenuDropdownInstance;
    new (element: HTMLButtonElement): MenuDropdownInstance;
};

export class Navigation {
    init(): void;
    teardown(): void;
}

export interface RadioToggleGroupInstance {
    init(): void;
    toggle(radioInputElement: HTMLInputElement): void;
    expand(checkboxElement: HTMLInputElement, contentElement: HTMLElement): void;
    collapse(triggerEl: HTMLInputElement, targetEl: HTMLElement): void;
}

export const RadioToggleGroup: {
    (containerElement: HTMLElement): RadioToggleGroupInstance;
    new (containerElement: HTMLElement): RadioToggleGroupInstance;
};

export interface TableSelectableRowsInstance {
    init(): void;
    getGroupCheckbox(): HTMLElement | false;
    getCheckboxList(): HTMLCollection;
}

export const TableSelectableRows: {
    (tableElement: HTMLTableElement): TableSelectableRowsInstance;
    new (tableElement: HTMLTableElement): TableSelectableRowsInstance;
};

export class ResponsiveTable {
    constructor(table: HTMLTableElement);
}

export interface TabsInstance {
    init(): void;
    activateTab(tab: HTMLButtonElement, setFocus: boolean): void;
}

export const Tabs: {
    (element: HTMLElement): TabsInstance;
    new (element: HTMLElement): TabsInstance;
};

export interface ToastInstance {
    show(): void;
    hide(): void;
}

export const Toast: {
    (element: HTMLElement): ToastInstance;
    new (element: HTMLElement): ToastInstance;
};
