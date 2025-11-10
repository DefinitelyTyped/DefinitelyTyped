declare namespace DKFDS {
    class Accordion {
        constructor($accordion: HTMLElement, strings: { open_all: string; close_all: string });

        bulkEvent(): void;

        eventOnClick($button: HTMLButtonElement, e: PointerEvent): void;

        init(): void;

        toggleButton(button: HTMLButtonElement, expanded?: boolean, bulk?: boolean): void;
    }

    class Alert {
        constructor(element: HTMLElement);

        hide(): void;

        init(): void;

        show(): void;
    }

    class BackToTop {
        constructor(element: HTMLElement);

        init(): void;
    }

    class CharacterLimit {
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

    class CheckboxToggleContent {
        constructor(element: HTMLInputElement);

        collapse(triggerEl: HTMLInputElement, targetEl: HTMLElement): void;

        expand(checkboxElement: HTMLInputElement, contentElement: HTMLElement): void;

        init(): void;

        toggle(): void;
    }

    class Dropdown {
        constructor(element: HTMLButtonElement);

        hide(): void;

        init(): void;

        show(): void;
    }

    class DropdownSort {
        constructor(container: HTMLElement);

        init(): void;

        onOptionClick(e: PointerEvent): void;

        updateSelectedValue(): void;
    }

    class ErrorSummary {
        constructor(element: HTMLElement);
        focusTarget($target: HTMLElement): boolean;

        getAssociatedLegendOrLabel($input: HTMLElement): HTMLElement | null;

        getFragmentFromUrl(url: string): string | false;

        handleClick(e: MouseEvent): void;

        init(): void;
    }

    class MenuDropdown {
        constructor(element: HTMLButtonElement);

        hide(): void;

        init(): void;

        show(): void;
    }

    class Modal {
        constructor(element: HTMLElement);

        hide(): void;

        init(): void;

        show(): void;
    }

    class Navigation {
        init(): void;

        teardown(): void;
    }

    class RadioToggleGroup {
        constructor(containerElement: HTMLElement);

        collapse(triggerEl: HTMLInputElement, targetEl: HTMLElement): void;

        expand(checkboxElement: HTMLInputElement, contentElement: HTMLElement): void;

        init(): void;

        toggle(radioInputElement: HTMLInputElement): void;
    }

    class TableSelectableRows {
        constructor(tableElement: HTMLTableElement);

        getCheckboxList(): HTMLCollection;

        getGroupCheckbox(): HTMLElement | false;

        init(): void;
    }

    class Tabs {
        constructor(element: HTMLElement);

        activateTab(tab: HTMLButtonElement, setFocus: boolean): void;

        init(): void;
    }

    class Toast {
        constructor(element: HTMLElement);

        hide(): void;

        show(): void;
    }

    class Tooltip {
        constructor(wrapper: HTMLElement);

        hideTooltip(): void;

        init(): void;

        isShowing(): boolean;

        showTooltip(): void;

        updateTooltipPosition(): void;
    }

    class ResponsiveTable {
        constructor(table: HTMLTableElement);
    }

    function init(options?: { scope: HTMLElement }): void;

    interface DatePickerContext {
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

    namespace datePicker {
        function add(root: HTMLElement): void;

        function disable(element: HTMLElement): void;

        function enable(element: HTMLElement): void;

        function getDatePickerContext(element: HTMLElement): DatePickerContext | undefined;

        function init(root: HTMLElement): void;

        function isDateInputInvalid(element: HTMLElement): boolean;

        function off(root: HTMLElement): void;

        function on(root: HTMLElement): void;

        function remove(root: HTMLElement): void;

        function renderCalendar(el: HTMLElement, _dateToDisplay?: Date): HTMLElement;

        function setCalendarValue(el: HTMLElement, dateString: string): void;

        function setLanguage(language: {
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

        function updateCalendarIfVisible(el: HTMLElement): void;

        function validateDateInput(el: HTMLElement): void;
    }
}
