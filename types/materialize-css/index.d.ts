// Type definitions for materialize-css 1.0
// Project: http://materializecss.com/
// Definitions by:  胡玮文 <https://github.com/huww98>
//                  Daniel Hoenes <https://github.com/broccoliarchy>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

/// <reference types="jquery" />

export = M;

declare global {
    namespace M {
        /**
         * 'JavaScript' Section
         */

        function AutoInit(context?: Element): void;

        class Carousel extends Component<CarouselOptions> {
            /**
             * Create a carousel
             * @param elem element
             * @param options carousel options
             */
            static init(elem: Element, options?: Partial<CarouselOptions>): Carousel;

            /**
             * Move carousel to next slide or go forward a given amount of slides.
             * @param n How many times the carousel slides.
             */
            next(n?: number): void;

            /**
             * Move carousel to previous slide or go back a given amount of slides.
             * @param n How many times the carousel slides.
             */
            prev(n?: number): void;

            /**
             * Move carousel to nth slide
             * @param n Index of slide.
             */
            set(n?: number): void; // code has a second parameter, but it isn't documented

            /**
             * Destroy plugin instance and teardown
             */
            destroy(): void;

            /**
             * Get Instance
             */
            static getInstance(elem: Element): Carousel;

            /**
             * If the carousel is being clicked or tapped.
             */
            pressed: boolean;

            /**
             * If the carousel is currently being dragged.
             */
            dragged: boolean;

            /**
             * The index of the center carousel item.
             */
            center: number;
        }
        interface CarouselOptions {
            /**
             * Transition duration in milliseconds.
             * @default 200
             */
            duration: number;

            /**
             * Perspective zoom. If 0, all items are the same size.
             * @default -200
             */
            dist: number;

            /**
             * Set the spacing of the center item.
             * @default 0
             */
            shift: number;

            /**
             * Set the padding between non center items.
             * @default 0
             */
            padding: number;

            /**
             * Set the number of visible items.
             * @default 5
             */
            numVisible: number;

            /**
             * Make the carousel a full width slider like the second example.
             * @default false
             */
            fullWidth: boolean;

            /**
             * Set to true to show indicators.
             * @default false
             */
            indicators: boolean;

            /**
             * Don't wrap around and cycle through items.
             * @default false
             */
            noWrap: boolean;

            /**
             * Callback for when a new slide is cycled to.
             * @default null
             */
            onCycleTo: () => void;
        }

        class Collapsible extends Component<CollapsibleOptions> {
            /**
             * Create a collapsible
             * @param elem element
             * @param options collapsible options
             */
            static init(elem: Element, options?: Partial<CollapsibleOptions>): Collapsible;

            /**
             * Open collapsible section.
             * @param index 0th index of slide
             */
            open(index: number): void;

            /**
             * Close collapsible section.
             * @param index 0th index of slide
             */
            close(index: number): void;

            /**
             * Destroy plugin instance and teardown
             */
            destroy(): void;

            /**
             * Get Instance
             */
            static getInstance(elem: Element): Collapsible;
        }
        interface CollapsibleOptions {
            /**
             * If accordion versus collapsible.
             * @default true
             */
            accordion: boolean;

            /**
             * Callback function called before collapsible is opened.
             * @default null
             */
            onOpenStart: () => void;

            /**
             * Callback function called after collapsible is opened.
             * @default null
             */
            onOpenEnd: () => void;

            /**
             * Callback function called before collapsible is closed.
             * @default null
             */
            onCloseStart: () => void;

            /**
             * Callback function called after collapsible is closed.
             * @default null
             */
            onCloseEnd: () => void;

            /**
             * Transition in duration in milliseconds.
             * @default 300
             */
            inDuration: number;

            /**
             * Transition out duration in milliseconds.
             * @default 300
             */
            outDuration: number;
        }

        class Dropdown extends Component<DropdownOptions> {
            /**
             * Create a dropdown
             * @param elem element
             * @param options dropdown options
             */
            static init(elem: Element, options?: Partial<DropdownOptions>): Dropdown;

            /**
             * Opens Dropdown
             */
            open(): void;

            /**
             * Closes Dropdown
             */
            close(): void;

            /**
             * While dropdown is open, you can recalculate its dimensions if its contents have changed.
             */
            recalculateDimensions(): void;

            /**
             * Destroy plugin instance and teardown
             */
            destroy(): void;

            /**
             * Get Instance
             */
            static getInstance(elem: Element): Dropdown;

            /**
             * ID of the dropdown element.
             */
            id: string;

            /**
             * The DOM element of the dropdown.
             */
            dropdownEl: Element;

            /**
             * Describes open/close state of the Dropdown
             */
            isOpen: boolean;

            /**
             * If the dropdown content is scrollable.
             */
            isScrollable: boolean;

            /**
             * The index of the item focused.
             */
            focusedIndex: number;
        }
        interface DropdownOptions {
            /**
             * Defines the edge the menu is aligned to.
             * @default 'left'
             */
            alignment: string;

            /**
             * If true, automatically focus dropdown el for keyboard.
             * @default true
             */
            autoTrigger: boolean;

            /**
             * If true, constrainWidth to the size of the dropdown activator.
             * @default true
             */
            constrainWidth: boolean;

            /**
             * Provide an element that will be the bounding container of the dropdown.
             * @default null
             */
            container: Element;

            /**
             * If false, the dropdown will show below the trigger.
             * @default true
             */
            coverTrigger: boolean;

            /**
             * If true, close dropdown on item click.
             * @default true
             */
            closeOnClick: boolean;

            /**
             * If true, the dropdown will open on hover.
             * @default false
             */
            hover: boolean;

            /**
             * The duration of the transition enter in milliseconds.
             * @default 150
             */
            inDuration: number;

            /**
             * The duration of the transition out in milliseconds.
             * @default 250
             */
            outDuration: number;

            /**
             * Function called when dropdown starts entering.
             * @default null
             */
            onOpenStart: () => void;

            /**
             * Function called when dropdown finishes entering.
             * @default null
             */
            onOpenEnd: () => void;

            /**
             * Function called when dropdown starts exiting.
             * @default null
             */
            onCloseStart: () => void;

            /**
             * Function called when dropdown finishes exiting.
             * @default null
             */
            onCloseEnd: () => void;
        }

        // A.K.A. 'FeatureDiscovery'
        class TapTarget extends Component<TapTargetOptions> {
            /**
             * Create a tap target
             * @param elem element
             * @param options tap target options
             */
            static init(elem: Element, options?: Partial<TapTargetOptions>): TapTarget;

            /**
             * Opens TapTarget
             */
            open(): void;

            /**
             * Closes TapTarget
             */
            close(): void;

            /**
             * Destroy plugin instance and teardown
             */
            destroy(): void;

            /**
             * Get Instance
             */
            static getInstance(elem: Element): TapTarget;

            /**
             * Describes open/close state of TapTarget
             */
            isOpen: boolean;
        }
        interface TapTargetOptions {
            /**
             * Callback function called when Tap Target is opened.
             * @default null
             */
            onOpen: () => void;

            /**
             * Callback function called when Tap Target is closed.
             * @default null
             */
            onClose: () => void;
        }

        class Materialbox extends Component<MaterialboxOptions> {
            /**
             * Create a materialbox
             * @param elem element
             * @param options materialbox options
             */
            static init(elem: Element, options?: Partial<MaterialboxOptions>): Materialbox;

            /**
             * Opens materialbox
             */
            open(): void;

            /**
             * Closes materialbox
             */
            close(): void;

            /**
             * Destroy plugin instance and teardown
             */
            destroy(): void;

            /**
             * Get Instance
             */
            static getInstance(elem: Element): Materialbox;

            /**
             * If the materialbox overlay is showing.
             */
            overlayActive: boolean;

            /**
             * If the carousel is no longer being animated.
             */
            doneAnimating: boolean;

            /**
             * Caption if specified.
             */
            caption: string;

            /**
             * Original width of image.
             */
            originalWidth: number;

            /**
             * Original height of image.
             */
            originalHeight: number;
        }
        interface MaterialboxOptions {
            /**
             * Transition in duration in milliseconds.
             * @default 275
             */
            inDuration: number;

            /**
             * Transition out duration in milliseconds.
             * @default 200
             */
            outDuration: number;

            /**
             * Callback function called before materialbox is opened.
             * @default null
             */
            onOpenStart: () => void;

            /**
             * Callback function called after materialbox is opened.
             * @default null
             */
            onOpenEnd: () => void;

            /**
             * Callback function called before materialbox is closed.
             * @default null
             */
            onCloseStart: () => void;

            /**
             * Callback function called after materialbox is closed.
             * @default null
             */
            onCloseEnd: () => void;
        }

        class Slider extends Component<SliderOptions> {
            /**
             * Create a slider
             * @param elem element
             * @param options slider options
             */
            static init(elem: Element, options?: Partial<SliderOptions>): Slider;

            /**
             * Pause slider autoslide
             */
            pause(): void;

            /**
             * Start slider autoslide
             */
            start(): void;

            /**
             * Move to next slider
             */
            next(): void;

            /**
             * Move to previous slider
             */
            prev(): void;

            /**
             * Destroy plugin instance and teardown
             */
            destroy(): void;

            /**
             * Get Instance
             */
            static getInstance(elem: Element): Slider;

            /**
             * Index of current slide.
             */
            activeIndex: number;
        }
        interface SliderOptions {
            /**
             * Set to false to hide slide indicators.
             * @default true
             */
            indicators: boolean;

            /**
             * Set height of slider.
             * @default 400
             */
            height: number;

            /**
             * Set the duration of the transition animation in ms.
             * @default 500
             */
            duration: number;

            /**
             * Set the duration between transitions in ms.
             * @default 6000
             */
            interval: number;
        }

        class Modal extends Component<ModalOptions> {
            /**
             * Create a modal
             * @param elem element
             * @param options modal options
             */
            static init(elem: Element, options?: Partial<ModalOptions>): Modal;

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
             * Destroy plugin instance and teardown
             */
            destroy(): void;

            /**
             * If the modal is open.
             */
            isOpen: boolean;

            /**
             * ID of the modal element
             */
            id: string;
        }
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
             * Callback function called before modal is opened.
             * @default null
             */
            onOpenStart: () => void;

            /**
             * Callback function called after modal is opened.
             * @default null
             */
            onOpenEnd: () => void;

            /**
             * Callback function called before modal is closed.
             * @default null
             */
            onCloseStart: () => void;

            /**
             * Callback function called after modal is closed.
             * @default null
             */
            onCloseEnd: () => void;

            /**
             * Prevent page from scrolling while modal is open.
             * @default true
             */
            preventScrolling: boolean;

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

        class Parallax extends Component<ParallaxOptions> {
            /**
             * Create a parallax
             * @param elem element
             * @param options parallax options
             */
            static init(elem: Element, options?: Partial<ParallaxOptions>): Parallax;

            /**
             * Destroy plugin instance and teardown
             */
            destroy(): void;

            /**
             * Get Instance
             */
            static getInstance(elem: Element): Parallax;
        }
        interface ParallaxOptions {
            /**
             * The minimum width of the screen, in pixels, where the parallax functionality starts working.
             * @default 0
             */
            responsiveThreshold: number;
        }

        class Pushpin extends Component<PushpinOptions> {
            /**
             * Create a pushpin
             * @param elem element
             * @param options pushpin options
             */
            static init(elem: Element, options?: Partial<PushpinOptions>): Pushpin;

            /**
             * Destroy plugin instance and teardown
             */
            destroy(): void;

            /**
             * Get Instance
             */
            static getInstance(elem: Element): Pushpin;

            /**
             * Original offsetTop of element.
             */
            originalOffset: number;
        }
        interface PushpinOptions {
            /**
             * The distance in pixels from the top of the page where the element becomes fixed.
             * @default 0
             */
            top: number;

            /**
             * The distance in pixels from the top of the page where the elements stops being fixed.
             * @default Infinity
             */
            bottom: number;

            /**
             * The offset from the top the element will be fixed at.
             * @default 0
             */
            offset: number;

            /**
             * Callback function called when pushpin position changes. You are provided with a position string.
             * @default null
             */
            onPositionChange: (position: 'pinned' | 'pin-top' | 'pin-bottom') => void;
        }

        class ScrollSpy extends Component<ScrollSpyOptions> {
            /**
             * Create a ScrollSpy
             * @param elem element
             * @param options ScrollSpy options
             */
            static init(elem: Element, options?: Partial<ScrollSpyOptions>): ScrollSpy;

            /**
             * Destroy plugin instance and teardown
             */
            destroy(): void;

            /**
             * Get Instance
             */
            static getInstance(elem: Element): ScrollSpy;
        }
        interface ScrollSpyOptions {
            /**
             * Throttle of scroll handler.
             * @default 100
             */
            throttle: number;

            /**
             * Offset for centering element when scrolled to.
             * @default 200
             */
            scrollOffset: number;

            /**
             * Class applied to active elements.
             * @default 'active'
             */
            activeClass: string;

            /**
             * Used to find active element.
             * @default Function
             */
            getActiveElement: (id: string) => string;
        }

        class Sidenav extends Component<SidenavOptions> {
            /**
             * Create a sidenav
             * @param elem element
             * @param options sidenav options
             */
            static init(elem: Element, options?: Partial<SidenavOptions>): Sidenav;

            /**
             * Opens Sidenav
             */
            open(): void;

            /**
             * Closes Sidenav
             */
            close(): void;

            /**
             * Destroy plugin instance and teardown
             */
            destroy(): void;

            /**
             * Get Instance
             */
            static getInstance(elem: Element): Sidenav;

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
            onOpenStart: (elem: Element) => void;

            /**
             * Function called when sidenav finishes entering
             */
            onOpenEnd: (elem: Element) => void;

            /**
             * Function called when sidenav starts exiting
             */
            onCloseStart: (elem: Element) => void;

            /**
             * Function called when sidenav finishes exiting
             */
            onCloseEnd: (elem: Element) => void;

            /**
             * Prevent page from scrolling when sidenav is open
             * @default true
             */
            preventScrolling: boolean;
        }

        class Tabs extends Component<TabsOptions> {
            /**
             * Create a Tabs
             * @param elem element
             * @param options Tabs options
             */
            static init(elem: Element, options?: Partial<TabsOptions>): Tabs;

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
             * Recalculate tab indicator position. This is useful when the indicator position is not correct.
             */
            updateTabIndicator(): void;

            /**
             * Destroy plugin instance and teardown
             */
            destroy(): void;

            /**
             * The index of tab that is currently shown
             */
            index: number;
        }
        interface TabsOptions {
            /**
             * Transition duration in milliseconds.
             * @default 300
             */
            duration: number;

            /**
             * Callback for when a new tab content is shown
             * @default null
             */
            onShow: (el: Element) => void;

            /**
             * Set to true to enable swipeable tabs. This also uses the responsiveThreshold option
             * @default false
             */
            swipeable: boolean;

            /**
             * The maximum width of the screen, in pixels, where the swipeable functionality initializes.
             * @default Infinity
             */
            responsiveThreshold: number;
        }
        function toast(options: Partial<ToastOptions>): Toast;
        class Toast {
            // constructor not exposed/documented

            /**
             * The DOM element the plugin was initialized with
             */
            el: Element;

            /**
             * The options the instance was initialized with
             */
            options: ToastOptions;

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

        class Tooltip extends Component<TooltipOptions> {
            /**
             * Create a Tooltip
             * @param elem element
             * @param options Tooltip options
             */
            static init(elem: Element, options?: Partial<TooltipOptions>): Tooltip;

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
             * Destroy plugin instance and teardown
             */
            destroy(): void;

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

        /**
         * 'Components' Section
         */

        class FloatingActionButton extends Component<FloatingActionButtonOptions> {
            /**
             * Create a FAB
             * @param elem element
             * @param options FAB options
             */
            static init(elem: Element, options?: Partial<FloatingActionButtonOptions>): FloatingActionButton;

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
             * Destroy plugin instance and teardown
             */
            destroy(): void;

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

        /**
         * 'Forms' Section
         */
        class Autocomplete extends Component<AutocompleteOptions> {
            /**
             * Create an Autocomplete
             * @param elem element
             * @param options Autocomplete options
             */
            static init(elem: Element, options?: Partial<AutocompleteOptions>): Autocomplete;

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
             * Destroy plugin instance and teardown
             */
            destroy(): void;

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

            /**
             * Instance of the dropdown plugin for this autocomplete.
             */
            dropdown: Dropdown;
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
            onAutocomplete: (text: string) => void;

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
        interface AutocompleteData {
            [key: string]: string | null;
        }

        class Chips extends Component<ChipsOptions> {
            /**
             * Create a 'Chips'
             * @param elem element
             * @param options Chips options
             */
            static init(elem: Element, options?: Partial<ChipsOptions>): Chips;

            /**
             * Add chip to input.
             */
            addChip(chip: Chip): void;

            /**
             * Select nth chip.
             */
            selectChip(chipIndex: number): void;

            /**
             * Delete nth chip.
             */
            deleteChip(chipIndex: number): void;

            /**
             * Destroy plugin instance and teardown
             */
            destroy(): void;

            /**
             * Get Instance
             */
            static getInstance(elem: Element): Chips;

            /**
             * Array of the current chips data.
             */
            chipsData: Chip[];

            /**
             * If the chips has autocomplete enabled.
             */
            hasAutocomplete: boolean;

            /**
             * Autocomplete instance, if any.
             */
            autocomplete: Autocomplete;
        }
        interface ChipsOptions {
            /**
             * Set the chip data (look at the Chip data object)
             * @default []
             */
            data: Chip[];

            /**
             * Set first placeholder when there are no tags.
             * @default ''
             */
            placeholder: string;

            /**
             * Set second placeholder when adding additional tags.
             * @default ''
             */
            secondaryPlaceholder: string;

            /**
             * Set autocomplete options.
             * @default {}
             */
            autocompleteOptions: AutocompleteOptions;

            /**
             * Set chips limit.
             * @default Infinity
             */
            limit: number;

            /**
             * Callback for chip add.
             * @default null
             */
            onChipAdd: () => void;

            /**
             * Callback for chip select.
             * @default null
             */
            onChipSelect: () => void;

            /**
             * Callback for chip delete.
             * @default null
             */
            onChipDelete: () => void;
        }
        interface Chip {
            tag: string;
            image: string | '';
        }

        class DatePicker extends Component<DatePickerOptions> {
            /**
             * Create a DatePicker
             * @param elem element
             * @param options DatePicker options
             */
            static init(elem: Element, options?: Partial<DatePickerOptions>): DatePicker;

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

            /**
             * Destroy plugin instance and teardown
             */
            destroy(): void;
        }
        interface DatePickerOptions {
            /**
             * Automatically close picker when date is selected.
             * @default false
             */
            autoClose: boolean;

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
             * @default null
             */
            minDate: Date;

            /**
             * The latest date that can be selected.
             * @default null
             */
            maxDate: Date;

            /**
             * Number of years either side, or array of upper/lower range.
             * @default 10
             */
            yearRange: number | [number, number];

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
             * @default null
             */
            container: Element;

            /**
             *  Show the clear button in the datepicker.
             * @default false
             */
            showClearBtn: boolean;

            /**
             * Internationalization options.
             */
            i18n: DatePickerLocalization;

            /**
             * An array of string returned by `Date.toDateString()`, indicating there are events in the specified days.
             * @default []
             */
            events: string[];

            /**
             * Callback function when date is selected, first parameter is the newly selected date.
             */
            onSelect: (selectedDate: Date) => void;

            /**
             * Callback function when Datepicker is opened
             */
            onOpen: () => void;

            /**
             * Callback function when Datepicker is closed
             */
            onClose: () => void;

            /**
             * Callback function when Datepicker HTML is refreshed
             */
            onDraw: () => void;
        }
        interface DatePickerLocalization {
            /**
             * @default 'Cancel'
             */
            cancel: string;

            /**
             * @default 'Clear'
             */
            clear: string;

            /**
             * @default 'Ok'
             */
            done: string;

            /**
             * @default '‹'
             */
            previousMonth: string;

            /**
             * @default '›'
             */
            nextMonth: string;

            /**
             * @default ['January','February','March','April','May','June','July','August','September','October','November','December']
             */
            months: string[];

            /**
             * @default ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec']
             */
            monthsShort: string[];

            /**
             * @default ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday']
             */
            weekdays: string[];

            /**
             * @default ['Sun','Mon','Tue','Wed','Thu','Fri','Sat']
             */
            weekdaysShort: string[];

            /**
             * @default ['S','M','T','W','T','F','S']
             */
            weekdaysAbbrev: string[];
        }

        class TimePicker extends Component<TimePickerOptions> {
            /**
             * Create a TimePicker
             * @param elem element
             * @param options TimePicker options
             */
            static init(elem: Element, options?: Partial<TimePickerOptions>): TimePicker;

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
             * Destroy plugin instance and teardown
             */
            destroy(): void;

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
             * Show the clear button in the Timepicker.
             * @default false
             */
            showClearBtn: boolean;

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
             * Internationalization options.
             */
            i18n: TimePickerLocalization;

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

            /**
             * Callback function called before modal is opened.
             * @default null
             */
            onOpenStart: () => void;

            /**
             * Callback function called after modal is opened.
             * @default null
             */
            onOpenEnd: () => void;

            /**
             * Callback function called before modal is closed.
             * @default null
             */
            onCloseStart: () => void;

            /**
             * Callback function called after modal is closed.
             * @default null
             */
            onCloseEnd: () => void;

            /**
             * Callback function when a time is selected, first parameter is the hour and the second is the minute.
             * @default null
             */
            onSelect: () => void;
        }
        interface TimePickerLocalization {
            /**
             * @default 'Cancel'
             */
            cancel: string;

            /**
             * @default 'Clear'
             */
            clear: string;

            /**
             * @default 'Ok'
             */
            done: string;
        }

        class FormSelect extends Component<FormSelectOptions> {
            /**
             * Create a FormSelect
             * @param elem element
             * @param options FormSelect options
             */
            static init(elem: Element, options?: Partial<FormSelectOptions>): FormSelect;

            /**
             * Get selected values in an array.
             */
            getSelectedValues(): string[];

            /**
             * Destroy plugin instance and teardown
             */
            destroy(): void;

            /**
             * Get Instance
             */
            static getInstance(elem: Element): FormSelect;

            /**
             * If this is a multiple select.
             */
            isMultiple: boolean;

            /**
             * The select wrapper element.
             */
            wrapper: Element;

            /**
             * Dropdown UL element.
             */
            dropdownOptions: Element;

            /**
             * Text input that shows current selected option.
             */
            input: Element;

            /**
             * Instance of the dropdown plugin for this select.
             */
            dropdown: Dropdown;
        }
        interface FormSelectOptions {
            /**
             * Classes to be added to the select wrapper element.
             * @default ''
             */
            classes: string;

            /**
             * Pass options object to select dropdown initialization.
             * @default {}
             */
            dropdownOptions: DropdownOptions;
        }

        class CharacterCounter extends Component<undefined> {
            /**
             * Create a CharacterCounter
             * @param elem element
             */
            static init(elem: Element): CharacterCounter;
            /**
             * Get Instance
             */
            static getInstance(elem: Element): CharacterCounter;

            /**
             * Destroy plugin instance and teardown
             */
            destroy(): void;
        }

        abstract class Component<TOptions> {
            /**
             * Construct component instance and set everything up
             */
            constructor(elem: Element, options?: Partial<TOptions>);

            /**
             * The DOM element the plugin was initialized with
             */
            el: Element;

            /**
             * The options the instance was initialized with
             */
            options: TOptions;
        }
    }

    interface JQuery {
        // no AutoInit documented

        // Pick<T,K> to check methods exist.

        // Carousel
        carousel(options?: Partial<M.CarouselOptions>): JQuery;
        carousel(method: keyof Pick<M.Carousel, "next" | "prev" | "set">, n?: number): JQuery;
        carousel(method: keyof Pick<M.Carousel, "destroy">): JQuery;
        // Collapsible
        collapsible(options?: Partial<M.CollapsibleOptions>): JQuery;
        collapsible(method: keyof Pick<M.Collapsible, "open" | "close" | "destroy">): JQuery;
        // Dropdown
        dropdown(options?: Partial<M.DropdownOptions>): JQuery;
        dropdown(method: keyof Pick<M.Dropdown, "open" | "close" | "recalculateDimensions" | "destroy">): JQuery;
        // TapTarget
        tapTarget(options?: Partial<M.TapTargetOptions>): JQuery;
        tapTarget(method: keyof Pick<M.TapTarget, "open" | "close" | "destroy">): JQuery;
        // Materialbox
        materialbox(options?: Partial<M.MaterialboxOptions>): JQuery;
        materialbox(method: keyof Pick<M.Materialbox, "open" | "close" | "destroy">): JQuery;
        // Slider
        slider(options?: Partial<M.SliderOptions>): JQuery;
        slider(method: keyof Pick<M.Slider, "pause" | "start" | "next" | "prev" | "destroy">): JQuery;
        // Modal
        modal(method: keyof Pick<M.Modal, "open" | "close" | "destroy">): JQuery;
        modal(options?: Partial<M.ModalOptions>): JQuery;
        // Parallax
        parallax(options?: Partial<M.ParallaxOptions>): JQuery;
        parallax(method: keyof Pick<M.Parallax, "destroy">): JQuery;
        // Pushpin
        pushpin(options?: Partial<M.PushpinOptions>): JQuery;
        pushpin(method: keyof Pick<M.Pushpin, "destroy">): JQuery;
        // ScrollSpy
        scrollSpy(options?: Partial<M.ScrollSpyOptions>): JQuery;
        scrollSpy(method: keyof Pick<M.ScrollSpy, "destroy">): JQuery;
        // Sidenav
        sidenav(options?: Partial<M.SidenavOptions>): JQuery;
        sidenav(method: keyof Pick<M.Sidenav, "open" | "close" | "destroy">): JQuery;
        // Tabs
        tabs(options?: Partial<M.TabsOptions>): JQuery;
        tabs(method: keyof Pick<M.Tabs, "select">, tabId: string): JQuery;
        tabs(method: keyof Pick<M.Tabs, "updateTabIndicator" | "destroy">): JQuery;
        // Toast
        // Toast can not be invoked using jQuery.
        // Tooltip
        tooltip(options?: Partial<M.TooltipOptions>): JQuery;
        tooltip(method: keyof Pick<M.Tooltip, "open" | "close" | "destroy">): JQuery;
        // FloatingActionButton
        floatingActionButton(method: keyof Pick<M.FloatingActionButton, "open" | "close" | "destroy">): JQuery;
        floatingActionButton(options?: Partial<M.FloatingActionButtonOptions>): JQuery;
        // Autocomplete
        autocomplete(options?: Partial<M.AutocompleteOptions>): JQuery;
        autocomplete(method: keyof Pick<M.Autocomplete, "destroy">): JQuery;
        autocomplete(method: keyof Pick<M.Autocomplete, "selectOption">, el: Element): JQuery;
        autocomplete(method: keyof Pick<M.Autocomplete, "updateData">, data: M.AutocompleteData): JQuery;
        // Chips
        chips(options?: Partial<M.ChipsOptions>): JQuery;
        chips(method: keyof Pick<M.Chips, "addChip">, chip: M.Chip): JQuery;
        chips(method: keyof Pick<M.Chips, "deleteChip" | "selectChip">, index: number): JQuery;
        chips(method: keyof Pick<M.Chips, "destroy">): JQuery;
        // DatePicker
        datepicker(options?: Partial<M.DatePickerOptions>): JQuery;
        datepicker(method: keyof Pick<M.DatePicker, "open" | "close" | "destroy">): JQuery;
        datepicker(method: keyof Pick<M.DatePicker, "toString">): string;
        datepicker(method: keyof Pick<M.DatePicker, "setDate">, date?: Date): JQuery;
        datepicker(method: keyof Pick<M.DatePicker, "gotoDate">, date: Date): JQuery;
        // TimePicker
        timepicker(options?: Partial<M.TimePickerOptions>): JQuery;
        timepicker(method: keyof Pick<M.TimePicker, "open" | "close" | "destroy">): JQuery;
        timepicker(method: keyof Pick<M.TimePicker, "showView">, view: "hours" | "minutes"): JQuery;
        // FormSelect
        formSelect(options?: Partial<M.FormSelectOptions>): JQuery;
        formSelect(method: keyof Pick<M.FormSelect, "destroy">): JQuery;
        formSelect(method: keyof Pick<M.FormSelect, "getSelectedValues">): string[];
        // CharacterCounter
        characterCounter(): JQuery;
        // tslint:disable-next-line unified-signatures
        characterCounter(method: keyof Pick<M.CharacterCounter, "destroy">): JQuery;
    }
}
