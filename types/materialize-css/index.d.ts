// Type definitions for materialize-css 1.0
// Project: http://materializecss.com/
// Definitions by:  胡玮文 <https://github.com/huww98>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.4

/// <reference types="jquery" />

export = M;

declare global {
    namespace M {
        class Autocomplete extends Component<AutocompleteOptions> {
            /**
             * Get Instance
             */
            static getInstance(elem: Element): Autocomplete;

            /**
             * Select a specific autocomplete options.
             * @param el Element of the autocomplete option.
             */
            selectOption(el: Element): void;

            /**
             * Update autocomplete options data.
             * @param data Autocomplete options data object.
             */
            updateData(data: AutocompleteData): void;

            /**
             * If the autocomplete is open.
             */
            isOpen: boolean;

            /**
             * Number of matching autocomplete options.
             */
            count: number;

            /**
             * Index of the current selected option.
             */
            activeIndex: number;
        }

        interface AutocompleteData {
            [key: string]: string | null;
        }

        interface AutocompleteOptions {
            /**
             * Data object defining autocomplete options with optional icon strings.
             */
            data: AutocompleteData;

            /**
             * Limit of results the autocomplete shows.
             * @default infinity
             */
            limit: number;

            /**
             * Callback for when autocompleted.
             */
            onAutocomplete: (this: Autocomplete, text: string) => void;

            /**
             * Minimum number of characters before autocomplete starts.
             * @default 1
             */
            minLength: number;

            /**
             * Sort function that defines the order of the list of autocomplete options.
             */
            sortFunction: (a: string, b: string, inputText: string) => number;
        }

        class DatePicker extends Component<DatePickerOptions> implements Openable {
            /**
             * Get Instance
             */
            static getInstance(elem: Element): DatePicker;

            /**
             * If the picker is open.
             */
            isOpen: boolean;

            /**
             * The selected Date.
             */
            date: Date;

            /**
             * Open datepicker
             */
            open(): void;

            /**
             * Close datepicker
             */
            close(): void;

            /**
             * Gets a string representation of the selected date
             */
            toString(): string;

            /**
             * Set a date on the datepicker
             * @param date Date to set on the datepicker.
             */
            setDate(date?: Date): void;

            /**
             * Change date view to a specific date on the datepicker
             * @param date Date to show on the datepicker.
             */
            gotoDate(date: Date): void;
        }

        interface DatePickerOptions {
            /**
             * The date output format for the input field value.
             * @default 'mmm dd, yyyy'
             */
            format: string;

            /**
             * Used to create date object from current input string.
             */
            parse: (value: string, format: string) => Date;

            /**
             * The initial date to view when first opened.
             */
            defaultDate: Date;

            /**
             * Make the `defaultDate` the initial selected value
             * @default false
             */
            setDefaultDate: boolean;

            /**
             * Prevent selection of any date on the weekend.
             * @default false
             */
            disableWeekends: boolean;

            /**
             * Custom function to disable certain days.
             */
            disableDayFn: (day: Date) => boolean;

            /**
             * First day of week (0: Sunday, 1: Monday etc).
             * @default 0
             */
            firstDay: number;

            /**
             * The earliest date that can be selected.
             */
            minDate: Date;

            /**
             * The latest date that can be selected.
             */
            maxDate: Date;

            /**
             * Number of years either side, or array of upper/lower range.
             * @default 10
             */
            yearRange: number | number[];

            /**
             * Changes Datepicker to RTL.
             * @default false
             */
            isRTL: boolean;

            /**
             * Show month after year in Datepicker title.
             * @default false
             */
            showMonthAfterYear: boolean;

            /**
             * Render days of the calendar grid that fall in the next or previous month.
             * @default false
             */
            showDaysInNextAndPreviousMonths: boolean;

            /**
             * Specify a selector for a DOM element to render the calendar in, by default it will be placed before the input.
             */
            container: string;

            /**
             * An array of string returned by `Date.toDateString()`, indicating there are events in the specified days.
             * @default []
             */
            events: string[];

            /**
             * Callback function when date is selected, first parameter is the newly selected date.
             */
            onSelect: (this: DatePicker, selectedDate: Date) => void;

            /**
             * Callback function when Datepicker is opened
             */
            onOpen: (this: DatePicker) => void;

            /**
             * Callback function when Datepicker is closed
             */
            onClose: (this: DatePicker) => void;

            /**
             * Callback function when Datepicker HTML is refreshed
             */
            onDraw: (this: DatePicker) => void;
        }

        class FloatingActionButton extends Component<FloatingActionButtonOptions> implements Openable {
            /**
             * Get Instance
             */
            static getInstance(elem: Element): FloatingActionButton;

            /**
             * Open FAB
             */
            open(): void;

            /**
             * Close FAB
             */
            close(): void;

            /**
             * Describes open/close state of FAB.
             */
            isOpen: boolean;
        }

        interface FloatingActionButtonOptions {
            /**
             * Direction FAB menu opens
             * @default "top"
             */
            direction: "top" | "right" | "buttom" | "left";

            /**
             * true: FAB menu appears on hover, false: FAB menu appears on click
             * @default true
             */
            hoverEnabled: boolean;

            /**
             * Enable transit the FAB into a toolbar on click
             * @default false
             */
            toolbarEnabled: boolean;
        }

        class Sidenav extends Component<SidenavOptions> implements Openable {
            /**
             * Get Instance
             */
            static getInstance(elem: Element): Sidenav;

            /**
             * Opens Sidenav
             */
            open(): void;

            /**
             * Closes Sidenav
             */
            close(): void;

            /**
             * Describes open/close state of Sidenav
             */
            isOpen: boolean;

            /**
             * Describes if sidenav is fixed
             */
            isFixed: boolean;

            /**
             * Describes if Sidenav is being dragged
             */
            isDragged: boolean;
        }

        /**
         * Options for the Sidenav
         */
        interface SidenavOptions {
            /**
             * Side of screen on which Sidenav appears
             * @default 'left'
             */
            edge: 'left' | 'right';

            /**
             * Allow swipe gestures to open/close Sidenav
             * @default true
             */
            draggable: boolean;

            /**
             * Length in ms of enter transition
             * @default 250
             */
            inDuration: number;

            /**
             * Length in ms of exit transition
             * @default 200
             */
            outDuration: number;

            /**
             * Function called when sidenav starts entering
             */
            onOpenStart: (this: Sidenav, elem: Element) => void;

            /**
             * Function called when sidenav finishes entering
             */
            onOpenEnd: (this: Sidenav, elem: Element) => void;

            /**
             * Function called when sidenav starts exiting
             */
            onCloseStart: (this: Sidenav, elem: Element) => void;

            /**
             * Function called when sidenav finishes exiting
             */
            onCloseEnd: (this: Sidenav, elem: Element) => void;
        }

        class Tabs extends Component<TabsOptions> {
            /**
             * Get Instance
             */
            static getInstance(elem: Element): Tabs;

            /**
             * Show tab content that corresponds to the tab with the id
             * @param tabId The id of the tab that you want to switch to
             */
            select(tabId: string): void;

            /**
             * The index of tab that is currently shown
             */
            index: number;
        }

        /**
         * Options for the Tabs
         */
        interface TabsOptions {
            /**
             * Transition duration in milliseconds.
             * @default 300
             */
            duration: number;

            /**
             * Callback for when a new tab content is shown
             */
            onShow: (this: Tabs, newContent: Element) => void;

            /**
             * Set to true to enable swipeable tabs. This also uses the responsiveThreshold option
             * @default false
             */
            swipeable: boolean;

            /**
             * The maximum width of the screen, in pixels, where the swipeable functionality initializes.
             * @default infinity
             */
            responsiveThreshold: number;
        }

        class TimePicker extends Component<TimePickerOptions> {
            /**
             * Get Instance
             */
            static getInstance(elem: Element): TimePicker;

            /**
             * If the picker is open.
             */
            isOpen: boolean;

            /**
             * The selected time.
             */
            time: string;

            /**
             * Open timepicker
             */
            open(): void;

            /**
             * Close timepicker
             */
            close(): void;

            /**
             * Show hours or minutes view on timepicker
             * @param view The name of the view you want to switch to, 'hours' or 'minutes'.
             */
            showView(view: "hours" | "minutes"): void;
        }

        interface TimePickerOptions {
            /**
             * Duration of the transition from/to the hours/minutes view.
             * @default 350
             */
            duration: number;

            /**
             * Specify a selector for a DOM element to render the calendar in, by default it will be placed before the input.
             */
            container: string;

            /**
             * Default time to set on the timepicker 'now' or '13:14'
             * @default 'now';
             */
            defaultTime: string;

            /**
             * Millisecond offset from the defaultTime.
             * @default 0
             */
            fromnow: number;

            /**
             * Done button text.
             * @default 'Ok'
             */
            doneText: string;

            /**
             * Clear button text.
             * @default 'Clear'
             */
            clearText: string;

            /**
             * Cancel button text.
             * @default 'Cancel'
             */
            cancelText: string;

            /**
             * Automatically close picker when minute is selected.
             * @default false;
             */
            autoClose: boolean;

            /**
             * Use 12 hour AM/PM clock instead of 24 hour clock.
             * @default true
             */
            twelveHour: boolean;

            /**
             * Vibrate device when dragging clock hand.
             * @default true
             */
            vibrate: boolean;
        }

        class Modal extends Component<ModalOptions> implements Openable {
            /**
             * Get Instance
             */
            static getInstance(elem: Element): Modal;

            /**
             * Open modal
             */
            open(): void;

            /**
             * Close modal
             */
            close(): void;

            /**
             * If the modal is open.
             */
            isOpen: boolean;

            /**
             * ID of the modal element
             */
            id: string;
        }

        /**
         * Options for the Modal
         */
        interface ModalOptions {
            /**
             * Opacity of the modal overlay.
             * @default 0.5
             */
            opacity: number;

            /**
             * Transition in duration in milliseconds.
             * @default 250
             */
            inDuration: number;

            /**
             * Transition out duration in milliseconds.
             * @default 250
             */
            outDuration: number;

            /**
             * Callback function called when modal is finished entering.
             */
            ready: (this: Modal, elem: Element, openingTrigger: Element) => void;

            /**
             * Callback function called when modal is finished exiting.
             */
            complete: (this: Modal, elem: Element) => void;

            /**
             * Allow modal to be dismissed by keyboard or overlay click.
             * @default true
             */
            dismissible: boolean;

            /**
             * Starting top offset
             * @default '4%'
             */
            startingTop: string;

            /**
             * Ending top offset
             * @default '10%'
             */
            endingTop: string;
        }

        class Toast extends ComponentBase<ToastOptions> {
            /**
             * Get Instance
             */
            static getInstance(elem: Element): Toast;

            /**
             * Describes the current pan state of the Toast.
             */
            panning: boolean;

            /**
             * The remaining amount of time in ms that the toast will stay before dismissal.
             */
            timeRemaining: number;

            /**
             * remove a specific toast
             */
            dismiss(): void;

            /**
             * dismiss all toasts
             */
            static dismissAll(): void;
        }

        interface ToastOptions {
            /**
             * The HTML content of the Toast.
             */
            html: string;

            /**
             * Length in ms the Toast stays before dismissal.
             * @default 4000
             */
            displayLength: number;

            /**
             * Transition in duration in milliseconds.
             * @default 300
             */
            inDuration: number;

            /**
             * Transition out duration in milliseconds.
             * @default 375
             */
            outDuration: number;

            /**
             * Classes to be added to the toast element.
             */
            classes: string;

            /**
             * Callback function called when toast is dismissed.
             */
            completeCallback: () => void;

            /**
             * The percentage of the toast's width it takes for a drag to dismiss a Toast.
             * @default 0.8
             */
            activationPercent: number;
        }

        /**
         * Create a toast
         */
        function toast(options: Partial<ToastOptions>): Toast;

        class Tooltip extends Component<TooltipOptions> implements Openable {
            /**
             * Get Instance
             */
            static getInstance(elem: Element): Tooltip;

            /**
             * Show tooltip.
             */
            open(): void;

            /**
             * Hide tooltip.
             */
            close(): void;

            /**
             * If tooltip is open.
             */
            isOpen: boolean;

            /**
             * If tooltip is hovered.
             */
            isHovered: boolean;
        }

        interface TooltipOptions {
            /**
             * Delay time before tooltip disappears.
             * @default 0
             */
            exitDelay: number;

            /**
             * Delay time before tooltip appears.
             * @default 200
             */
            enterDelay: number;

            /**
             * Can take regular text or HTML strings.
             * @default null
             */
            html: string | null;

            /**
             * Set distance tooltip appears away from its activator excluding transitionMovement.
             * @default 5
             */
            margin: number;

            /**
             * Enter transition duration.
             * @default 300
             */
            inDuration: number;

            /**
             * Exit transition duration.
             * @default 250
             */
            outDuration: number;

            /**
             * Set the direction of the tooltip.
             * @default 'bottom'
             */
            position: 'top' | 'right' | 'bottom' | 'left';

            /**
             * Amount in px that the tooltip moves during its transition.
             * @default 10
             */
            transitionMovement: number;
        }

        function updateTextFields(): void;

        class CharacterCounter extends Component<undefined> {
            /**
             * Get Instance
             */
            static getInstance(elem: Element): CharacterCounter;
        }

        abstract class Component<TOptions> extends ComponentBase<TOptions> {
            /**
             * Construct component instance and set everything up
             */
            constructor(elem: Element, options?: Partial<TOptions>);

            /**
             * Destroy plugin instance and teardown
             */
            destroy(): void;
        }

        abstract class ComponentBase<TOptions> {
            constructor(options?: Partial<TOptions>);

            /**
             * The DOM element the plugin was initialized with
             */
            el: Element;

            /**
             * The options the instance was initialized with
             */
            options: TOptions;
        }

        interface Openable {
            isOpen: boolean;
            open(): void;
            close(): void;
        }
    }

    interface JQuery {
        // Pick<T,K> to check methods exist.
        autocomplete(method: keyof Pick<M.Autocomplete, "destroy">): JQuery;
        autocomplete(method: keyof Pick<M.Autocomplete, "selectOption">, el: Element): JQuery;
        autocomplete(method: keyof Pick<M.Autocomplete, "updateData">, data: M.AutocompleteData): JQuery;
        autocomplete(options?: Partial<M.AutocompleteOptions>): JQuery;

        datepicker(method: keyof Pick<M.DatePicker, "open" | "close" | "destroy">): JQuery;
        datepicker(method: keyof Pick<M.DatePicker, "setDate">, date?: Date): JQuery;
        datepicker(method: keyof Pick<M.DatePicker, "gotoDate">, date: Date): JQuery;
        datepicker(options?: Partial<M.DatePickerOptions>): JQuery;

        floatingActionButton(method: keyof Pick<M.FloatingActionButton, "open" | "close" | "destroy">): JQuery;
        floatingActionButton(options?: Partial<M.FloatingActionButtonOptions>): JQuery;

        sidenav(method: keyof Pick<M.Sidenav, "open" | "close" | "destroy">): JQuery;
        sidenav(options?: Partial<M.SidenavOptions>): JQuery;

        tabs(method: keyof Pick<M.Tabs, "destroy">): JQuery;
        tabs(method: keyof Pick<M.Tabs, "select">, tabId: string): JQuery;
        tabs(options?: Partial<M.TabsOptions>): JQuery;

        timepicker(method: keyof Pick<M.TimePicker, "open" | "close" | "destroy">): JQuery;
        timepicker(method: keyof Pick<M.TimePicker, "showView">, view: "hours" | "minutes"): JQuery;
        timepicker(options?: Partial<M.TimePickerOptions>): JQuery;

        // Toast can not be invoked using jQuery.

        tooltip(method: keyof Pick<M.Tooltip, "open" | "close" | "destroy">): JQuery;
        tooltip(options?: Partial<M.TooltipOptions>): JQuery;

        modal(method: keyof Pick<M.Modal, "open" | "close" | "destroy">): JQuery;
        modal(options?: Partial<M.ModalOptions>): JQuery;

        // tslint:disable-next-line unified-signatures
        characterCounter(method: keyof Pick<M.CharacterCounter, "destroy">): JQuery;
        characterCounter(): JQuery;
    }
}
