import {
    Accordion,
    Alert,
    BackToTop,
    CharacterLimit,
    CheckboxToggleContent,
    datePicker,
    DatePickerContext,
    Dropdown,
    ErrorSummary,
    init,
    MenuDropdown,
    Modal,
    Navigation,
    RadioToggleGroup,
    ResponsiveTable,
    TableSelectableRows,
    Tabs,
    Toast,
    Tooltip,
} from "dkfds";

// Test init function
init({ scope: document.body }); // $ExpectType void
init({ scope: document.getElementById("app")! }); // $ExpectType void

// Test Accordion
const accordionElement = document.createElement("ul");
const accordionStrings = { open_all: "Åbn alle", close_all: "Luk alle" };

const accordion1 = Accordion(accordionElement, accordionStrings); // $ExpectType AccordionInstance
const accordion2 = new Accordion(accordionElement, accordionStrings); // $ExpectType AccordionInstance

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

datePicker.init(datePickerEl); // $ExpectType void
datePicker.add(datePickerEl); // $ExpectType void
datePicker.on(datePickerEl); // $ExpectType void
datePicker.off(datePickerEl); // $ExpectType void

datePicker.setLanguage({
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

datePicker.disable(datePickerEl); // $ExpectType void
datePicker.enable(datePickerEl); // $ExpectType void

datePicker.isDateInputInvalid(datePickerEl); // $ExpectType boolean

datePicker.setCalendarValue(datePickerEl, "2023-12-31"); // $ExpectType void
datePicker.validateDateInput(datePickerEl); // $ExpectType void

datePicker.renderCalendar(datePickerEl); // $ExpectType HTMLElement
datePicker.renderCalendar(datePickerEl, new Date()); // $ExpectType HTMLElement

datePicker.updateCalendarIfVisible(datePickerEl); // $ExpectType void

const context = datePicker.getDatePickerContext(datePickerEl); // $ExpectType DatePickerContext | undefined
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

const tooltip1 = Tooltip(tooltipWrapper); // $ExpectType TooltipInstance
const tooltip2 = new Tooltip(tooltipWrapper); // $ExpectType TooltipInstance

tooltip1.init(); // $ExpectType void
tooltip1.hideTooltip(); // $ExpectType void
tooltip1.showTooltip(); // $ExpectType void

tooltip1.isShowing(); // $ExpectType boolean
tooltip1.updateTooltipPosition(); // $ExpectType void

// Test Alert
const alertElement = document.createElement("div");

const alert1 = Alert(alertElement); // $ExpectType AlertInstance
const alert2 = new Alert(alertElement); // $ExpectType AlertInstance

alert1.init(); // $ExpectType void
alert1.hide(); // $ExpectType void
alert1.show(); // $ExpectType void

// Test BackToTop
const backToTopElement = document.createElement("div");

const backToTop1 = BackToTop(backToTopElement); // $ExpectType BackToTopInstance
const backToTop2 = new BackToTop(backToTopElement); // $ExpectType BackToTopInstance

backToTop1.init(); // $ExpectType void

// Test CharacterLimit
const charLimitElement = document.createElement("div");
const charLimitStrings = {
    character_remaining: "tegn tilbage",
    characters_remaining: "tegn tilbage",
    character_too_many: "tegn for meget",
    characters_too_many: "tegn for meget",
};

const charLimit1 = CharacterLimit(charLimitElement, charLimitStrings); // $ExpectType CharacterLimitInstance
const charLimit2 = new CharacterLimit(charLimitElement, charLimitStrings); // $ExpectType CharacterLimitInstance

charLimit1.init(); // $ExpectType void

// Test CheckboxToggleContent
const checkboxInput = document.createElement("input");

const checkboxToggle1 = CheckboxToggleContent(checkboxInput); // $ExpectType CheckboxToggleContentInstance
const checkboxToggle2 = new CheckboxToggleContent(checkboxInput); // $ExpectType CheckboxToggleContentInstance

checkboxToggle1.init(); // $ExpectType void
checkboxToggle1.toggle(); // $ExpectType void

const contentElement = document.createElement("div");
checkboxToggle1.expand(checkboxInput, contentElement); // $ExpectType void
checkboxToggle1.collapse(checkboxInput, contentElement); // $ExpectType void

// Test Dropdown
const dropdownButton = document.createElement("button");

const dropdown1 = Dropdown(dropdownButton); // $ExpectType DropdownInstance
const dropdown2 = new Dropdown(dropdownButton); // $ExpectType DropdownInstance

dropdown1.init(); // $ExpectType void
dropdown1.hide(); // $ExpectType void
dropdown1.show(); // $ExpectType void

// Test ErrorSummary
const errorSummaryElement = document.createElement("div");

const errorSummary1 = ErrorSummary(errorSummaryElement); // $ExpectType ErrorSummaryInstance
const errorSummary2 = new ErrorSummary(errorSummaryElement); // $ExpectType ErrorSummaryInstance

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

const modal1 = Modal(modalElement); // $ExpectType ModalInstance
const modal2 = new Modal(modalElement); // $ExpectType ModalInstance

modal1.init(); // $ExpectType void
modal1.hide(); // $ExpectType void
modal1.show(); // $ExpectType void

// Test MenuDropdown
const menuButton = document.createElement("button");

const menuDropdown1 = MenuDropdown(menuButton); // $ExpectType MenuDropdownInstance
const menuDropdown2 = new MenuDropdown(menuButton); // $ExpectType MenuDropdownInstance

menuDropdown1.init(); // $ExpectType void
menuDropdown1.hide(); // $ExpectType void
menuDropdown1.show(); // $ExpectType void

// Test Navigation
const navigation = new Navigation(); // $ExpectType Navigation
navigation.init(); // $ExpectType void
navigation.teardown(); // $ExpectType void

// Test RadioToggleGroup
const radioContainer = document.createElement("div");

const radioToggle1 = RadioToggleGroup(radioContainer); // $ExpectType RadioToggleGroupInstance
const radioToggle2 = new RadioToggleGroup(radioContainer); // $ExpectType RadioToggleGroupInstance

radioToggle1.init(); // $ExpectType void

const radioInput = document.createElement("input");
radioToggle1.toggle(radioInput); // $ExpectType void
radioToggle1.expand(radioInput, contentElement); // $ExpectType void
radioToggle1.collapse(radioInput, contentElement); // $ExpectType void

// Test TableSelectableRows
const tableElement = document.createElement("table");

const tableSelectable1 = TableSelectableRows(tableElement); // $ExpectType TableSelectableRowsInstance
const tableSelectable2 = new TableSelectableRows(tableElement); // $ExpectType TableSelectableRowsInstance

tableSelectable1.init(); // $ExpectType void

tableSelectable1.getGroupCheckbox(); // $ExpectType false | HTMLElement
tableSelectable1.getCheckboxList(); // $ExpectType HTMLCollection

// Test ResponsiveTable
const responsiveTable = new ResponsiveTable(tableElement); // $ExpectType ResponsiveTable

// Test Tabs
const tabsElement = document.createElement("div");

const tabs1 = Tabs(tabsElement); // $ExpectType TabsInstance
const tabs2 = new Tabs(tabsElement); // $ExpectType TabsInstance

tabs1.init(); // $ExpectType void

const tabButton = document.createElement("button");
tabs1.activateTab(tabButton, true); // $ExpectType void
tabs1.activateTab(tabButton, false); // $ExpectType void

// Test Toast
const toastElement = document.createElement("div");

const toast1 = Toast(toastElement); // $ExpectType ToastInstance
const toast2 = new Toast(toastElement); // $ExpectType ToastInstance

toast1.show(); // $ExpectType void
toast1.hide(); // $ExpectType void
