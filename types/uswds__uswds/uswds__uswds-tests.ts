import * as components from "@uswds/uswds/js";

type ComponentKey = keyof typeof components;

const {
    accordion,
    banner,
    button,
    characterCount,
    comboBox,
    datePicker,
    dateRangePicker,
    fileInput,
    footer,
    inPageNavigation,
    inputMask,
    inputPrefixSuffix,
    languageSelector,
    modal,
    navigation,
    password,
    range,
    search,
    skipnav,
    table,
    timePicker,
    tooltip,
    validator,
} = components;

const element = document.createElement("div");
const buttonElement = document.createElement("button");
const input = document.createElement("input");

// Accordion
accordion.ACCORDION; // $ExpectType string
accordion.BUTTON; // $ExpectType string
accordion.init(); // $ExpectType void
accordion.init(element); // $ExpectType void
accordion.on(); // $ExpectType void
accordion.on(element); // $ExpectType void
accordion.off(); // $ExpectType void
accordion.off(element); // $ExpectType void
accordion.show(buttonElement); // $ExpectType boolean
accordion.hide(buttonElement); // $ExpectType boolean
accordion.toggle(buttonElement); // $ExpectType boolean
accordion.toggle(buttonElement, true); // $ExpectType boolean
accordion.getButtons(element); // $ExpectType HTMLButtonElement[]

// Banner
banner.on(); // $ExpectType void
banner.on(element); // $ExpectType void
banner.off(); // $ExpectType void
banner.off(element); // $ExpectType void

// Button
button.on(); // $ExpectType void
button.on(element); // $ExpectType void
button.off(); // $ExpectType void
button.off(element); // $ExpectType void

// Character Count
characterCount.DEFAULT_STATUS_LABEL; // $ExpectType string
characterCount.FORM_GROUP_ERROR_CLASS; // $ExpectType string
characterCount.LABEL_ERROR_CLASS; // $ExpectType string
characterCount.INPUT_ERROR_CLASS; // $ExpectType string
characterCount.MESSAGE_INVALID_CLASS; // $ExpectType string
characterCount.STATUS_MESSAGE_CLASS; // $ExpectType string
characterCount.STATUS_MESSAGE_SR_ONLY_CLASS; // $ExpectType string
characterCount.VALIDATION_MESSAGE; // $ExpectType string
characterCount.init(); // $ExpectType void
characterCount.init(element); // $ExpectType void
characterCount.on(); // $ExpectType void
characterCount.on(element); // $ExpectType void
characterCount.off(); // $ExpectType void
characterCount.off(element); // $ExpectType void
characterCount.createStatusMessages(element); // $ExpectType void
characterCount.getCountMessage(2, 25); // $ExpectType string
characterCount.updateCountMessage(input); // $ExpectType void

// Combo Box
comboBox.init(); // $ExpectType void
comboBox.init(element); // $ExpectType void
comboBox.COMBO_BOX_CLASS; // $ExpectType string
comboBox.on(); // $ExpectType void
comboBox.on(element); // $ExpectType void
comboBox.off(); // $ExpectType void
comboBox.off(element); // $ExpectType void
/*
$ExpectType {
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
}
*/
comboBox.getComboBoxContext(element);
comboBox.enhanceComboBox(element); // $ExpectType void
comboBox.generateDynamicRegExp("string"); // $ExpectType RegExp
comboBox.disable(input); // $ExpectType void
comboBox.enable(input); // $ExpectType void
comboBox.displayList(input); // $ExpectType void
comboBox.hideList(input); // $ExpectType void

// Date Picker
datePicker.init(); // $ExpectType void
datePicker.init(element); // $ExpectType void
datePicker.on(); // $ExpectType void
datePicker.on(element); // $ExpectType void
datePicker.off(); // $ExpectType void
datePicker.off(element); // $ExpectType void
/*
$ExpectType {
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
}
*/
datePicker.getDatePickerContext(element);
datePicker.disable(input); // $ExpectType void
datePicker.enable(input); // $ExpectType void
datePicker.isDateInputInvalid(input); // $ExpectType boolean
datePicker.setCalendarValue(buttonElement, "2022-01-01"); // $ExpectType void
datePicker.validateDateInput(element); // $ExpectType void
datePicker.renderCalendar(element, new Date()); // $ExpectType HTMLElement
datePicker.updateCalendarIfVisible(element); // $ExpectType void

// Date Range Picker
dateRangePicker.init(); // $ExpectType void
dateRangePicker.init(element); // $ExpectType void
dateRangePicker.on(); // $ExpectType void
dateRangePicker.on(element); // $ExpectType void
dateRangePicker.off(); // $ExpectType void
dateRangePicker.off(element); // $ExpectType void

// File Input
fileInput.init(); // $ExpectType void
fileInput.init(element); // $ExpectType void
fileInput.teardown(); // $ExpectType void
fileInput.teardown(element); // $ExpectType void
fileInput.on(); // $ExpectType void
fileInput.on(element); // $ExpectType void
fileInput.off(); // $ExpectType void
fileInput.off(element); // $ExpectType void
/*
$ExpectType {
    dropZoneEl: HTMLDivElement;
    inputEl: HTMLInputElement;
}
*/
fileInput.getFileInputContext(element);
fileInput.disable(input); // $ExpectType void
fileInput.enable(input); // $ExpectType void

// Footer
footer.HIDE_MAX_WIDTH; // $ExpectType number
footer.init(); // $ExpectType void
footer.on(element); // $ExpectType void
footer.off(element); // $ExpectType void
footer.teardown(); // $ExpectType void

// In Page Navigation
inPageNavigation.init(); // $ExpectType void
inPageNavigation.init(element); // $ExpectType void
inPageNavigation.on(); // $ExpectType void
inPageNavigation.on(element); // $ExpectType void
inPageNavigation.off(); // $ExpectType void
inPageNavigation.off(element); // $ExpectType void

// Input Mask
inputMask.init(); // $ExpectType void
inputMask.init(element); // $ExpectType void
inputMask.on(); // $ExpectType void
inputMask.on(element); // $ExpectType void
inputMask.off(); // $ExpectType void
inputMask.off(element); // $ExpectType void

// Input Prefix Suffix
inputPrefixSuffix.init(); // $ExpectType void
inputPrefixSuffix.init(element); // $ExpectType void
inputPrefixSuffix.on(); // $ExpectType void
inputPrefixSuffix.on(element); // $ExpectType void
inputPrefixSuffix.off(); // $ExpectType void
inputPrefixSuffix.off(element); // $ExpectType void

// Language Selector
languageSelector.focusTrap; // $ExpectType null
languageSelector.init(element); // $ExpectType void
languageSelector.teardown(); // $ExpectType void
languageSelector.on(); // $ExpectType void
languageSelector.on(element); // $ExpectType void
languageSelector.off(); // $ExpectType void
languageSelector.off(element); // $ExpectType void

// Modal
modal.focusTrap; // $ExpectType null
modal.init(); // $ExpectType void
modal.init(element); // $ExpectType void
modal.teardown(); // $ExpectType void
modal.teardown(element); // $ExpectType void
modal.on(); // $ExpectType void
modal.on(element); // $ExpectType void
modal.off(); // $ExpectType void
modal.off(element); // $ExpectType void
modal.toggleModal(new KeyboardEvent("keydown")); // $ExpectType boolean

// Navigation
navigation.focusTrap; // $ExpectType null
navigation.init(); // $ExpectType void
navigation.init(element); // $ExpectType void
navigation.on(); // $ExpectType void
navigation.on(element); // $ExpectType void
navigation.off(); // $ExpectType void
navigation.off(element); // $ExpectType void
navigation.teardown(); // $ExpectType void
navigation.toggleNav(true); // $ExpectType boolean

// Password
password.on(); // $ExpectType void
password.on(element); // $ExpectType void
password.off(); // $ExpectType void
password.off(element); // $ExpectType void

// Range
range.on(); // $ExpectType void
range.on(element); // $ExpectType void
range.off(); // $ExpectType void
range.off(element); // $ExpectType void
range.init(); // $ExpectType void
range.init(element); // $ExpectType void
range.updateCallout(input); // $ExpectType void

// Search
search.init(); // $ExpectType void
search.init(element); // $ExpectType void
search.on(); // $ExpectType void
search.on(element); // $ExpectType void
search.off(); // $ExpectType void
search.off(element); // $ExpectType void
search.teardown(); // $ExpectType void

// Skipnav
skipnav.on(); // $ExpectType void
skipnav.on(element); // $ExpectType void
skipnav.off(); // $ExpectType void
skipnav.off(element); // $ExpectType void

// Table
table.TABLE; // $ExpectType string
table.SORTABLE_HEADER; // $ExpectType string
table.SORT_BUTTON; // $ExpectType string
table.init(); // $ExpectType void
table.init(element); // $ExpectType void
table.on(); // $ExpectType void
table.on(element); // $ExpectType void
table.off(); // $ExpectType void
table.off(element); // $ExpectType void

// Time Picker
/*
$ExpectType {
    filter: string;
    apQueryFilter: string;
    hourQueryFilter: string;
    minuteQueryFilter: string;
}
*/
timePicker.FILTER_DATASET;
timePicker.init(); // $ExpectType void
timePicker.init(element); // $ExpectType void
timePicker.on(); // $ExpectType void
timePicker.on(element); // $ExpectType void
timePicker.off(); // $ExpectType void
timePicker.off(element); // $ExpectType void

// Tooltip
tooltip.init(); // $ExpectType void
tooltip.init(element); // $ExpectType void
tooltip.on(); // $ExpectType void
tooltip.on(element); // $ExpectType void
tooltip.off(); // $ExpectType void
tooltip.off(element); // $ExpectType void
tooltip.show(element, element, "left"); // $ExpectType void
tooltip.hide(element); // $ExpectType void
/*
$ExpectType {
    tooltipBody: HTMLSpanElement;
    position: string;
    tooltipContent: string;
    wrapper: HTMLSpanElement;
}
*/
tooltip.setup(element);
/*
$ExpectType {
    trigger: HTMLElement;
    wrapper: HTMLElement;
    body: HTMLElement;
}
*/
tooltip.getTooltipElements(element);

// Validator
validator.init(); // $ExpectType void
validator.init(element); // $ExpectType void
validator.on(); // $ExpectType void
validator.on(element); // $ExpectType void
validator.off(); // $ExpectType void
validator.off(element); // $ExpectType void

// Common Interface
Object.keys(components).forEach((key) => {
    const component = components[key as ComponentKey];
    component.on(); // $ExpectType void
    component.on(element); // $ExpectType void
    component.off(); // $ExpectType void
    component.off(element); // $ExpectType void
});
import("@uswds/uswds").then((imports) => {
    Object.keys(components).forEach((key) => {
        const component = imports[key as ComponentKey];
        component.on(); // $ExpectType void
        component.on(element); // $ExpectType void
        component.off(); // $ExpectType void
        component.off(element); // $ExpectType void
    });
});
import("@uswds/uswds/src/js/components").then((imports) => {
    Object.keys(components).forEach((key) => {
        const component = imports[key as ComponentKey];
        component.on(); // $ExpectType void
        component.on(element); // $ExpectType void
        component.off(); // $ExpectType void
        component.off(element); // $ExpectType void
    });
});
