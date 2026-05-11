export class Accordion {
    constructor($accordion: HTMLElement, strings: { open_all: string; close_all: string });

    bulkEvent(): void;

    eventOnClick($button: HTMLButtonElement, e: PointerEvent): void;

    init(): void;

    toggleButton(button: HTMLButtonElement, expanded?: boolean, bulk?: boolean): void;
}

export class Alert {
    constructor(element: HTMLElement);

    hide(): void;

    init(): void;

    show(): void;
}

export class BackToTop {
    constructor(element: HTMLElement);

    init(): void;
}

export class CharacterLimit {
    constructor(
        element: HTMLElement,
        strings: {
            character_remaining: string;
            characters_remaining: string;
            character_too_many: string;
            characters_too_many: string;
        },
    );

    charactersLeft(): number;

    silentUpdateMessages(): void;

    updateMessages(): void;

    init(): void;
}

export class CheckboxToggleContent {
    constructor(element: HTMLInputElement);

    collapse(triggerEl: HTMLInputElement, targetEl: HTMLElement): void;

    expand(checkboxElement: HTMLInputElement, contentElement: HTMLElement): void;

    init(): void;

    toggle(): void;
}

export class Dropdown {
    constructor(element: HTMLButtonElement);

    hide(): void;

    init(): void;

    show(): void;
}

export class DropdownSort {
    constructor(container: HTMLElement);

    init(): void;

    onOptionClick(e: PointerEvent): void;

    updateSelectedValue(): void;
}

export class ErrorSummary {
    constructor(element: HTMLElement);
    focusTarget($target: HTMLElement): boolean;

    getAssociatedLegendOrLabel($input: HTMLElement): HTMLElement | null;

    getFragmentFromUrl(url: string): string | false;

    handleClick(e: MouseEvent): void;

    init(): void;
}

export class MenuDropdown {
    constructor(element: HTMLButtonElement);

    hide(): void;

    init(): void;

    show(): void;
}

export class Modal {
    constructor(element: HTMLElement);

    hide(): void;

    init(): void;

    show(): void;
}

export class Navigation {
    init(): void;

    teardown(): void;
}

export class RadioToggleGroup {
    constructor(containerElement: HTMLElement);

    collapse(triggerEl: HTMLInputElement, targetEl: HTMLElement): void;

    expand(checkboxElement: HTMLInputElement, contentElement: HTMLElement): void;

    init(): void;

    toggle(radioInputElement: HTMLInputElement): void;
}

export class TableSelectableRows {
    constructor(tableElement: HTMLTableElement);

    getCheckboxList(): HTMLCollection;

    getGroupCheckbox(): HTMLElement | false;

    init(): void;
}

export class Tabs {
    constructor(element: HTMLElement);

    activateTab(tab: HTMLButtonElement, setFocus: boolean): void;

    init(): void;
}

export class Toast {
    constructor(element: HTMLElement);

    hide(): void;

    show(): void;
}

export class Tooltip {
    constructor(wrapper: HTMLElement);

    hideTooltip(): void;

    init(): void;

    isShowing(): boolean;

    showTooltip(): void;

    updateTooltipPosition(): void;
}

export class ResponsiveTable {
    constructor(table: HTMLTableElement);
}

export function init(options?: { scope: HTMLElement }): void;

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

export const datePicker: {
    add(root: HTMLElement): void;

    disable(element: HTMLElement): void;

    enable(element: HTMLElement): void;

    getDatePickerContext(element: HTMLElement): DatePickerContext | undefined;

    init(root: HTMLElement): void;

    isDateInputInvalid(element: HTMLElement): boolean;

    off(root: HTMLElement): void;

    on(root: HTMLElement): void;

    remove(root: HTMLElement): void;

    renderCalendar(el: HTMLElement, _dateToDisplay?: Date): HTMLElement;

    setCalendarValue(el: HTMLElement, dateString: string): void;

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

    updateCalendarIfVisible(el: HTMLElement): void;

    validateDateInput(el: HTMLElement): void;
};

export as namespace DKFDS;
