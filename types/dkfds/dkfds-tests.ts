import * as DKFDS from "dkfds";

// Test init function
DKFDS.init({ scope: document.body }); // $ExpectType void
DKFDS.init({ scope: document.getElementById("app")! }); // $ExpectType void

// Test Accordion
const accordionElement = document.createElement("ul");
const accordionStrings = { open_all: "Åbn alle", close_all: "Luk alle" };

const accordion1 = new DKFDS.Accordion(accordionElement, accordionStrings); // $ExpectType Accordion

accordion1.init(); // $ExpectType void
accordion1.bulkEvent(); // $ExpectType void

const button = document.createElement("button");
const pointerEvent = new PointerEvent("click");
accordion1.eventOnClick(button, pointerEvent); // $ExpectType void
accordion1.toggleButton(button); // $ExpectType void
accordion1.toggleButton(button, true); // $ExpectType void
accordion1.toggleButton(button, false, true); // $ExpectType void

// Test DatePicker
const datePickerEl = document.createElement("div");

DKFDS.datePicker.init(datePickerEl); // $ExpectType void
DKFDS.datePicker.add(datePickerEl); // $ExpectType void
DKFDS.datePicker.on(datePickerEl); // $ExpectType void
DKFDS.datePicker.off(datePickerEl); // $ExpectType void

DKFDS.datePicker.setLanguage({
    open_calendar: "Åbn kalender",
    choose_a_date: "Vælg en dato",
    choose_a_date_between: "Vælg en dato mellem",
    choose_a_date_before: "Vælg en dato før",
    choose_a_date_after: "Vælg en dato efter",
    aria_label_date: "Dato",
    current_month_displayed: "Nuværende måned vist",
    first_possible_date: "Første mulige dato",
    last_possible_date: "Sidste mulige dato",
    previous_year: "Forrige år",
    previous_month: "Forrige måned",
    next_month: "Næste måned",
    next_year: "Næste år",
    select_month: "Vælg måned",
    select_year: "Vælg år",
    previous_years: "Forrige år",
    next_years: "Næste år",
    guide: "Vejledning",
    months_displayed: "Måneder vist",
    years_displayed: "År vist",
    january: "Januar",
    february: "Februar",
    march: "Marts",
    april: "April",
    may: "Maj",
    june: "Juni",
    july: "Juli",
    august: "August",
    september: "September",
    october: "Oktober",
    november: "November",
    december: "December",
    monday: "Mandag",
    tuesday: "Tirsdag",
    wednesday: "Onsdag",
    thursday: "Torsdag",
    friday: "Fredag",
    saturday: "Lørdag",
    sunday: "Søndag",
});

DKFDS.datePicker.disable(datePickerEl); // $ExpectType void
DKFDS.datePicker.enable(datePickerEl); // $ExpectType void

DKFDS.datePicker.isDateInputInvalid(datePickerEl); // $ExpectType boolean

DKFDS.datePicker.setCalendarValue(datePickerEl, "2023-12-31"); // $ExpectType void
DKFDS.datePicker.validateDateInput(datePickerEl); // $ExpectType void

DKFDS.datePicker.renderCalendar(datePickerEl); // $ExpectType HTMLElement
DKFDS.datePicker.renderCalendar(datePickerEl, new Date()); // $ExpectType HTMLElement

DKFDS.datePicker.updateCalendarIfVisible(datePickerEl); // $ExpectType void

const context = DKFDS.datePicker.getDatePickerContext(datePickerEl); // $ExpectType DatePickerContext | undefined
if (context) {
    context.calendarEl; // $ExpectType HTMLDivElement
    context.datePickerEl; // $ExpectType HTMLElement
    context.dialogEl; // $ExpectType HTMLDivElement
    context.internalInputEl; // $ExpectType HTMLInputElement
    context.externalInputEl; // $ExpectType HTMLInputElement
    context.statusEl; // $ExpectType HTMLDivElement
    context.guideEl; // $ExpectType HTMLDivElement
    context.firstYearChunkEl; // $ExpectType HTMLDivElement
    context.calendarDate; // $ExpectType Date
    context.minDate; // $ExpectType Date
    context.maxDate; // $ExpectType Date
    context.selectedDate; // $ExpectType Date
    context.rangeDate; // $ExpectType Date
    context.defaultDate; // $ExpectType Date
}

// Test Tooltip
const tooltipWrapper = document.createElement("div");

const tooltip1 = new DKFDS.Tooltip(tooltipWrapper); // $ExpectType Tooltip

tooltip1.init(); // $ExpectType void
tooltip1.hideTooltip(); // $ExpectType void
tooltip1.showTooltip(); // $ExpectType void

tooltip1.isShowing(); // $ExpectType boolean
tooltip1.updateTooltipPosition(); // $ExpectType void

// Test Alert
const alertElement = document.createElement("div");

const alert1 = new DKFDS.Alert(alertElement); // $ExpectType Alert

alert1.init(); // $ExpectType void
alert1.hide(); // $ExpectType void
alert1.show(); // $ExpectType void

// Test BackToTop
const backToTopElement = document.createElement("div");

const backToTop1 = new DKFDS.BackToTop(backToTopElement); // $ExpectType BackToTop

backToTop1.init(); // $ExpectType void

// Test CharacterLimit
const charLimitElement = document.createElement("div");
const charLimitStrings = {
    character_remaining: "tegn tilbage",
    characters_remaining: "tegn tilbage",
    character_too_many: "tegn for meget",
    characters_too_many: "tegn for meget",
};

const charLimit1 = new DKFDS.CharacterLimit(charLimitElement, charLimitStrings); // $ExpectType CharacterLimit

charLimit1.init(); // $ExpectType void

// Test CheckboxToggleContent
const checkboxInput = document.createElement("input");

const checkboxToggle1 = new DKFDS.CheckboxToggleContent(checkboxInput); // $ExpectType CheckboxToggleContent

checkboxToggle1.init(); // $ExpectType void
checkboxToggle1.toggle(); // $ExpectType void

const contentElement = document.createElement("div");
checkboxToggle1.expand(checkboxInput, contentElement); // $ExpectType void
checkboxToggle1.collapse(checkboxInput, contentElement); // $ExpectType void

// Test Dropdown
const dropdownButton = document.createElement("button");

const dropdown1 = new DKFDS.Dropdown(dropdownButton); // $ExpectType Dropdown

dropdown1.init(); // $ExpectType void
dropdown1.hide(); // $ExpectType void
dropdown1.show(); // $ExpectType void

// Test ErrorSummary
const errorSummaryElement = document.createElement("div");

const errorSummary1 = new DKFDS.ErrorSummary(errorSummaryElement); // $ExpectType ErrorSummary

errorSummary1.init(); // $ExpectType void

const mouseEvent = new MouseEvent("click");
errorSummary1.handleClick(mouseEvent); // $ExpectType void

const targetElement = document.createElement("div");
errorSummary1.focusTarget(targetElement); // $ExpectType boolean

errorSummary1.getFragmentFromUrl("http://example.com#test"); // $ExpectType string | false

const inputElement = document.createElement("input");
errorSummary1.getAssociatedLegendOrLabel(inputElement); // $ExpectType HTMLElement | null

// Test Modal
const modalElement = document.createElement("div");

const modal1 = new DKFDS.Modal(modalElement); // $ExpectType Modal

modal1.init(); // $ExpectType void
modal1.hide(); // $ExpectType void
modal1.show(); // $ExpectType void

// Test MenuDropdown
const menuButton = document.createElement("button");

const menuDropdown1 = new DKFDS.MenuDropdown(menuButton); // $ExpectType MenuDropdown

menuDropdown1.init(); // $ExpectType void
menuDropdown1.hide(); // $ExpectType void
menuDropdown1.show(); // $ExpectType void

// Test Navigation
const navigation = new DKFDS.Navigation(); // $ExpectType Navigation
navigation.init(); // $ExpectType void
navigation.teardown(); // $ExpectType void

// Test RadioToggleGroup
const radioContainer = document.createElement("div");

const radioToggle1 = new DKFDS.RadioToggleGroup(radioContainer); // $ExpectType RadioToggleGroup

radioToggle1.init(); // $ExpectType void

const radioInput = document.createElement("input");
radioToggle1.toggle(radioInput); // $ExpectType void
radioToggle1.expand(radioInput, contentElement); // $ExpectType void
radioToggle1.collapse(radioInput, contentElement); // $ExpectType void

// Test TableSelectableRows
const tableElement = document.createElement("table");

const tableSelectable1 = new DKFDS.TableSelectableRows(tableElement); // $ExpectType TableSelectableRows

tableSelectable1.init(); // $ExpectType void

tableSelectable1.getGroupCheckbox(); // $ExpectType false | HTMLElement
tableSelectable1.getCheckboxList(); // $ExpectType HTMLCollection

// Test ResponsiveTable
const responsiveTable = new DKFDS.ResponsiveTable(tableElement); // $ExpectType ResponsiveTable

// Test Tabs
const tabsElement = document.createElement("div");

const tabs1 = new DKFDS.Tabs(tabsElement); // $ExpectType Tabs

tabs1.init(); // $ExpectType void

const tabButton = document.createElement("button");
tabs1.activateTab(tabButton, true); // $ExpectType void
tabs1.activateTab(tabButton, false); // $ExpectType void

// Test Toast
const toastElement = document.createElement("div");

const toast1 = new DKFDS.Toast(toastElement); // $ExpectType Toast

toast1.show(); // $ExpectType void
toast1.hide(); // $ExpectType void
