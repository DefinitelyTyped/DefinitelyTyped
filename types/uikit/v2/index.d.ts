// Type definitions for uikit 2.27
// Project: https://getuikit.com
// Definitions by: Giovanni Silva <https://github.com/giovannicandido>, Ivo Senner <https://github.com/s0x>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

/// <reference types="jquery" />

declare namespace UIkit {
    interface DropdownElement {
        /**
         * Show the dropdown
         */
        show(): void;
        /**
         * Hide the dropdown
         */
        hide(force?: boolean): void;
    }
    type DropdownPosition =
        | 'bottom-left'
        | 'bottom-center'
        | 'bottom-right'
        | 'top-left'
        | 'top-center'
        | 'top-right'
        | 'left-top'
        | 'left-center'
        | 'left-bottom'
        | 'right-top'
        | 'right-center'
        | 'right-bottom';
    interface DropdownOptions {
        /**
         * Dropdown position
         * @default 'bottom-left'
         */
        pos?: DropdownPosition | undefined;
        /**
         * Dropdown trigger behaviour
         * @default 'hover'
         */
        mode?: 'hover' | 'click' | undefined;
        /**
         * Remain time before auto closing dropdown in hover mode
         * @default 800
         */
        remaintime?: number | undefined;
        /**
         * Stretch dropdown width to a specified element
         * @default false
         */
        justify?: string | JQuery | false | undefined;
        /**
         * Referenced element to keep dropdowns visibilty
         * @default window
         */
        boundary?: string | JQuery | Window | undefined;
        /**
         * Delay time in hover mode before a dropdown is shown in ms
         * @default 0
         */
        delay?: number | undefined;
        /**
         * Dropdown selector
         * @default '.uk-dropdown,.uk-dropdown-blank'
         */
        dropdownSelector?: string | JQuery | undefined;
        /**
         * Is added to the delay time when hovering from one active dropdown to another dropdown (in ms)
         * @default 250
         */
        hoverDelayIdle?: number | undefined;
        /**
         * Prevent automatic dropdown flip
         * Possible values: 'x', 'y', true, false
         * @default false
         */
        preventflip?: 'x' | 'y' | boolean | undefined;
    }
    /**
     * Create a toggleable dropdown with different styles
     * Documentation: {@link http://getuikit.org/docs/dropdown.html}
     *
     * Events:
     * Name               Description
     * show.uk.dropdown   Triggered on dropdown show
     * hide.uk.dropdown   Triggered on dropdown hide
     * stack.uk.dropdown  Triggered when a dropdown stacks to fit into screen
     */
    type Dropdown = (selector: string | JQuery, options?: DropdownOptions) => DropdownElement;
    interface ModalElement {
        /**
         * Show the modal
         */
        show(): void;
        /**
         * Hide the modal
         */
        hide(): void;
        /**
         * Return if the modal is active on the page
         * @return True if the modal is current active on the page, false otherwise
         */
        isActive(): boolean;
    }
    interface ModalOptions {
        /**
         * Allows controls from keyboard (ESC to close)
         * @default true
         * <h2>Possible value</h2>
         * boolean
         */
        keyboard?: boolean | undefined;
        /**
         * Allow modal to close automatically when clicking on the modal overlay
         * @default true
         * <h2>Possible value</h2>
         * boolean
         */
        bgclose?: boolean | undefined;
        /**
         * Set the height for overflow container to start scrolling
         * @default 150
         * <h2>Possible value</h2>
         * integer
         */
        minScrollHeight?: number | undefined;
        /**
         * Vertically center the modal
         * @default false
         * <h2>Possible value</h2>
         * boolean
         */
        center?: boolean | undefined;
        /**
         * Close currently opened modals on opening modal
         * @default true
         * <h2>Possible value</h2>
         * boolean
         */
        modal?: boolean | undefined;
    }
    /**
     * Create modal dialogs with different styles and transitions
     * Documentation: {@link http://getuikit.org/docs/modal.html}
     *
     * <h2>Events</h2>
     *
     * <table>
     * <tr>
     * <th>Name</th>
     * <th>Parameter</th>
     * <th>Description</th>
     * </tr>
     *
     * <tr>
     * <td><code>show.uk.modal</code></td>
     * <td>event</td>
     * <td>On modal show</td>
     * </tr>
     * <tr>
     * <td><code>hide.uk.modal</code></td>
     * <td>event</td>
     * <td>On modal hide</td>
     * </tr>
     * </table>
     * @example
     * <pre><code>
     * $('.modalSelector').on({
     *     'show.uk.modal': function(){
     *         console.log("Modal is visible.");
     *     },
     *
     *     'hide.uk.modal': function(){
     *         console.log("Element is not visible.");
     *     }
     * });
     * </code></pre>
     */
    interface Modal {
        /**
         * Create a alert dialog
         * @param  message The message to display. Can be Html
         */
        alert(message: string): void;
        /**
         * Create a confirm dialog
         * @param  message The message to display. Can be Html
         * @param  [options={bgclose: true, keyboard: false, modal: false}] The modal options
         */
        confirm(message: string, options?: ModalOptions): void;
        /**
         * Create a confirm dialog and execute onconfirm on confirmation
         * @param  message The message to display. Can be Html
         * @param  onconfirm A function to execute on confirmation
         * @param  [options={bgclose: true, keyboard: false, modal: false}] The modal options
         */
        confirm(message: string, onconfirm: () => any, options?: ModalOptions): void;
        /**
         * Create a confirm dialog and execute onconfirm on confirmation and oncancel on cancelation.
         * @param  message The message to display. Can be Html
         * @param  onconfirm A function to execute on confirmation
         * @param  oncancel A function to execute on cancelation
         * @param  [options={bgclose: true, keyboard: false, modal: false}] The modal options
         */
        confirm(message: string, onconfirm: () => any, oncancel?: () => any, options?: ModalOptions): void;
        /**
         * Create a prompt dialog, where the user enter information
         * @param  message The message to display. Can be Html
         * @param  value   A value to init the input
         * @param  fn  A function to execute on submission. The function receive the new value as a parameter
         * @param  [options={bgclose: true, keyboard: false, modal: false}] The modal options
         */
        prompt(message: string, value: string, onsubmit?: (newValue: string) => any, options?: ModalOptions): void;
        /**
         * Create a modal that blocks the entire page
         * @param content A content to display. Can be Html
         * @param  [options={bgclose: true, keyboard: false, modal: false}] The modal options
         */
        blockUI(content: string, options?: ModalOptions): ModalElement;
        /**
         * Select a modal element on page and return it.
         * @example
         * <pre><code>
         * var modal = UIkit.modal(".modalSelector");
         *
         * if ( modal.isActive() ) {
         *   modal.hide();
         *   } else {
         *   modal.show();
         * }
         * </code></pre>
         */
        (selector: string | JQuery, options?: ModalOptions): ModalElement;
    }
    /**
     * Create a smooth off-canvas sidebar that slides in and out of the page
     * Documentation: {@link http://getuikit.org/docs/offcanvas.html}
     * <h2>Events:</h2>
     * <table class="uk-table uk-table-striped uk-text-nowrap">
     * <tr>
     * <th>Name</th>
     * <th>Parameter</th>
     * <th>Description</th>
     * </tr>
     * <tr>
     * <td><code>show.uk.offcanvas</code></td>
     * <td>event, panel, bar</td>
     * <td>On offcanvas show</td>
     * </tr>
     * <tr>
     * <td><code>hide.uk.offcanvas</code></td>
     * <td>event, panel, bar</td>
     * <td>On offcanvas hide</td>
     * </tr>
     * </table>
     */
    interface OffCanvas {
        /**
         * Show an off-canvas matching the passed CSS selector
         * @param  selector A CSS selector
         */
        show(selector: string): void;
        /**
         * Hide any active offcanvas. Set force to true, if you don't want any
         * animation
         * @param  force When seted to true do not run animations.
         * @default false
         */
        hide(force?: boolean): void;
    }
    interface LightBoxOptions {
        /**
         * Group name to group elements as a gallery to show.
         * @default false
         */
        group?: string | undefined;
        /**
         * Animation duration between gallery item change
         * @default 400
         */
        duration?: number | undefined;
        /**
         * Allow keyboard navigation
         * @default true
         */
        keyboard?: boolean | undefined;
    }
    interface LightBoxItem {
        source: string;
        type: string;
    }
    interface LightBoxElement {
        /**
         * Open the lightbox
         */
        show(): void;
    }
    /**
     * Create a fancy lightbox for images and videos utilizing the @see {@link modal|Modal Component}
     * Documentation {@link http://getuikit.org/docs/lightbox.html}
     * <h2>Events:</h2>
     * <table>
     * <tr>
     * <th>Name</th>
     * <th>Parameter</th>
     * <th>Description</th>
     * </tr>
     * <tr>
     * <td><code>showitem.uk.lightbox</code></td>
     * <td>event, data</td>
     * <td>On lightbox show</td>
     * </tr>
     * </table>
     */
    interface LightBox {
        /**
         * Create dynamic lightbox
         * @param  items Group of items on the lightbox
         * @return           The lightbox element to show
         */
        create(items: LightBoxItem[]): LightBoxElement;
        /**
         * Init element manually
         */
        (element: string | JQuery, options?: LightBoxOptions): LightBoxElement;
    }
    type CallbackAutoComplete = () => string;
    interface AutoCompleteOptions {
        /**
         * Data source
         * @default []
         */
        source?: string | string[] | CallbackAutoComplete | undefined;
        /**
         * Min. input length before triggering autocomplete
         * @default 3
         */
        minLength?: number | undefined;
        /**
         * Query name when sending ajax request
         * @default search
         */
        param?: string | undefined;
        /**
         * Delay time after stop typing
         * @default 300
         */
        delay?: number | undefined;
    }
    /**
     * Create inputs that allow users to choose from a list of pre-generated values while typing
     * Documentation {@link http://getuikit.org/docs/autocomplete.html}
     * <h2>Events</h2>
     * <table>
     * <tr>
     * <th>Name</th>
     * <th>Parameter</th>
     * <th>Description</th>
     * </tr>
     * <tr>
     * <td><code>selectitem.uk.autocomplete</code></td>
     * <td>event, data, acobject</td>
     * <td>On item selected</td>
     * </tr>
     * <tr>
     * <td><code>show.uk.autocomplete</code></td>
     * <td>event</td>
     * <td>On autocomplete dropdown show</td>
     * </tr>
     * </table>
     */
    type AutoComplete = (element: string | JQuery, options?: AutoCompleteOptions) => any;
    interface DatePickerOptions {
        /**
         * Start of the week
         * integer (0..6)
         * @default 1
         */
        weekstart?: number | undefined;
        /**
         * Language string definitions
         * @default { months:['January',...], weekdays:['Sun',..,'Sat'] }
         */
        i18n?: {} | undefined;
        /**
         * Date format string
         * @default 'DD.MM.YYYY'
         */
        format?: string | undefined;
        /**
         * Offset to the input value
         * @default 5
         */
        offsettop?: number | undefined;
        /**
         * Min. date
         * bool (false to ignore the option)
         * string (date as in format)
         * integer (offset in days from current date)
         * @default false
         */
        minDate?: string | boolean | number | undefined;
        /**
         * Max. date
         * bool (false to ignore the option)
         * string (date as in format)
         * integer (offset in days from current date)
         * @default false
         */
        maxDate?: string | boolean | number | undefined;
        /**
         * Position of the datepicker
         * 'auto', 'top', 'bottom'
         * @default 'auto'
         */
        pos?: string | undefined;
    }
    /**
     * Create a toggleable dropdown with an datepicker
     * Documentation {@link http://getuikit.org/docs/datepicker.html}
     * <h2>Events</h2>
     * <table>
     * <tr>
     * <th>Name</th>
     * <th>Parameter</th>
     * <th>Description</th>
     * </tr>
     * <tr>
     * <td><code>show.uk.datepicker</code></td>
     * <td>event</td>
     * <td>On datepicker dropdown show</td>
     * </tr>
     * <tr>
     * <td><code>hide.uk.datepicker</code></td>
     * <td>event</td>
     * <td>On datepicker dropdown hide</td>
     * </tr>
     * <tr>
     * <td><code>update.uk.datepicker</code></td>
     * <td>event</td>
     * <td>On calendar rendering</td>
     * </tr>
     * </table>
     */
    type DatePicker = (element: string | JQuery, options?: DatePickerOptions) => any;
    interface HtmlEditorOptions {
        /**
         * View mode
         * Possible values 'split','tab'
         * @default 'split'
         */
        mode?: string | undefined;
        /**
         * Button list to appear in the toolbar
         * @default [ "bold", "italic", "strike", "link", "picture", ... ]
         */
        toolbar?: string[] | undefined;
        /**
         * Min. browser width when to switch to responsive tab mode when in split mode
         * @default 1000
         */
        maxsplitsize?: number | undefined;
        /**
         * Label string for preview mode
         * @default 'Preview'
         */
        lblPreview?: string | undefined;
        /**
         * Label string for code mode
         * @default 'Markdown'
         */
        lblCodeview?: string | undefined;
    }
    /**
     * Create a rich HTML or markdown editor with an immediate preview and syntax highlighting
     * Documentation {@link http://getuikit.org/docs/htmleditor.html}
     */
    type HtmlEditor = (element: string | JQuery, options?: HtmlEditorOptions) => any;
    interface SliderOptions {
        /**
         * Center items mode
         * @default false
         */
        center?: boolean | undefined;
        /**
         * Mouse movement threshold in pixel until trigger element dragging
         * @default true
         */
        threshold?: boolean | undefined;
        /**
         * Infinite scrolling
         * @default true
         */
        infinite?: boolean | undefined;
        /**
         * Class added on active item in center mode
         * @default uk-active
         */
        activecls?: string | undefined;
        /**
         * Defines whether or not the slider items should switch automatically
         * @default false
         */
        autoplay?: boolean | undefined;
        /**
         * Pause autoplay when hovering a slider
         * @default true
         */
        pauseOnHover?: boolean | undefined;
        /**
         * Defines the timespan between switching slider items
         * @default 7000
         */
        autoplayInterval?: number | undefined;
    }
    /**
     * Create a list of items to use as a responsive carousel slider
     * Documentation {@link http://getuikit.org/docs/slider.html}
     * <h2>Events</h2>
     * <table class="uk-table uk-table-striped uk-text-nowrap">
     * <tr>
     * <th>Name</th>
     * <th>Parameter</th>
     * <th>Description</th>
     * </tr>
     * <tr>
     * <td><code>focusitem.uk.slider</code></td>
     * <td>event, index, item</td>
     * <td>On item focus</td>
     * </tr>
     * </table>
     */
    type Slider = (element: string | JQuery, options?: SliderOptions) => any;
    interface SlideSetOptions {
        /**
         * Default visible items in a set
         * @default 1
         */
        default?: number | undefined;
        /**
         * Visible items in a set at small breakpoint
         * @default null
         */
        small?: number | undefined;
        /**
         * Visible items in a set at medium breakpoint
         * @default null
         */
        medium?: number | undefined;
        /**
         * Visible items in a set at large breakpoint
         * @default null
         */
        large?: number | undefined;
        /**
         * Visible items in a set at xlarge breakpoint
         * @default null
         */
        xlarge?: number | undefined;
        /**
         * Animation name
         * @default 'fade'
         */
        animation?: string | undefined;
        /**
         * Animation duration in ms
         * @default 200
         */
        duration?: number | undefined;
        /**
         * Animation delay between items in a set
         * @default 100
         */
        delay?: number | undefined;
        /**
         * Items filter
         * @default ""
         */
        filter?: string | undefined;
        /**
         * Defines whether or not the slideset items should switch automatically.
         * @default false
         */
        autoplay?: boolean | undefined;
        /**
         * Pause autoplay when hovering a slideset.
         * @default true
         */
        pauseOnHover?: boolean | undefined;
        /**
         * Defines the timespan between switching slideset items.
         * @default 7000
         */
        autoplayInterval?: number | undefined;
    }
    /**
     * Create sets and groups of items, allowing to loop through the sets.
     * Documentation {@link http://getuikit.org/docs/slideset.html}
     * <h2>Events</h2>
     * <table>
     * <tr>
     * <th>Name</th>
     * <th>Parameter</th>
     * <th>Description</th>
     * </tr>
     * <tr>
     * <td><code>show.uk.slideset</code></td>
     * <td>event, set</td>
     * <td>On set show</td>
     * </tr>
     * </table>
     */
    type SlideSet = (element: string | JQuery, options?: SlideSetOptions) => any;
    interface SlideShowOptions {
        /**
         * Defines the preferred transition between items.
         * @default 'fade
         */
        animation?: string | undefined;

        /**
         * Defines the transition duration.
         * @default 500
         */
        duration?: number | undefined;

        /**
         * Defines the slideshow height.
         * @default 'auto'
         */
        height?: string | undefined;

        /**
         * Defines the first slideshow item to be displayed.
         * @default 0
         */
        start?: number | undefined;

        /**
         * Defines whether or not the slideshow items should switch automatically.
         * @default false
         */
        autoplay?: boolean | undefined;

        /**
         * Pause autoplay when hovering a slideshow.
         * @default true
         */
        pauseOnHover?: boolean | undefined;

        /**
         * Defines the timespan between switching slideshow items.
         * @default 7000
         */
        autoplayInterval?: number | undefined;

        /**
         * Defines whether or not a video starts automatically.
         * @default true
         */
        videoautoplay?: boolean | undefined;

        /**
         * Defines whether or not a video is muted.
         * @default false
         */
        videomute?: boolean | undefined;

        /**
         * Defines whether or not the Ken Burns effect is active. If kenburns is a numeric value, it will be used as
         * the animation duration.
         * @default false
         */
        kenburns?: boolean | undefined;

        /**
         * Animation series.
         * @default 'uk-animation-middle-left, uk-animation-top-right, uk-animation-bottom-left, uk-animation-top-center,uk-animation-bottom-right'
         */
        kenburnsanimations?: string | undefined;

        /**
         * Defines the number of slices, if a "Slice" transition is set.
         * @default 15
         */
        slices?: number | undefined;
    }
    /**
     * Create a responsive image or video slideshow with stunning transition effects, fullscreen mode and overlays.
     * Documentation {@link http://getuikit.org/docs/slideshow.html}
     * <h2>Events</h2>
     * <table>
     * <tr>
     * <th>Name</th>
     * <th>Parameter</th>
     * <th>Description</th>
     * </tr>
     * <tr>
     * <td><code>show.uk.slideshow</code></td>
     * <td>event, next slide</td>
     * <td>On showing a new slide (after animation is finished)</td>
     * </tr>
     * </table>
     */
    type SlideShow = (element: string | JQuery, options: SlideShowOptions) => any;
    interface ParallaxOptions {
        /**
         * Animation velocity during scrolling
         * @default 0.5
         */
        velocity?: number | undefined;
        /**
         * Element dimension reference for animation duration.
         * @default false
         */
        target?: boolean | undefined;
        /**
         * Animation range depending on the viewport.
         * <h2>Possible value</h2>
         * float (0 to 1)
         * @default false
         */
        viewport?: number | undefined;
        /**
         * Condition for the active status with a width as integer (e.g. 640) or a css media query
         * @default false
         * <h2>Possible Value</h2>
         * integer / string
         */
        media?: number | string | undefined;
    }
    /**
     * Animate CSS properties depending on the scroll position of the document.
     * Documentation {@link http://getuikit.org/docs/parallax.html}
     */
    type Parallax = (element: string | JQuery, options: ParallaxOptions) => any;
    interface AccordionOptions {
        /**
         * Show first item on init
         * @default true
         * <h2>Possible value</h2>
         * boolean
         */
        showfirst?: boolean | undefined;
        /**
         * Allow multiple open items
         * @default true
         * <h2>Possible value</h2>
         * boolean
         */
        collapse?: boolean | undefined;
        /**
         * Animate toggle
         * @default true
         * <h2>Possible value</h2>
         * boolean
         */
        animate?: boolean | undefined;
        /**
         * Animation function
         * @default swing
         * <h2>Possible value</h2>
         * string
         */
        easing?: string | undefined;
        /**
         * Animation duration
         * @default 300
         * <h2>Possible value</h2>
         * integer
         */
        duration?: number | undefined;
        /**
         * Css selector for toggles
         * @default .uk-accordion-title
         * <h2>Possible value</h2>
         * string
         */
        toggle?: string | undefined;
        /**
         * Css selector for content containers
         * @default .uk-accordion-content
         * <h2>Possible value</h2>
         * string
         */
        containers?: string | undefined;
        /**
         * Class to add when an item is active
         * @default uk-active
         * <h2>Possible value</h2>
         * string
         */
        clsactive?: string | undefined;
    }
    /**
     * Create a list of items, allowing each item's content to be expanded and collapsed by clicking its header.
     * Documentation {@link http://getuikit.org/docs/accordion.html}
     * <h2>Events</h2>
     * <table class="uk-table uk-table-striped uk-text-nowrap">
     * <tr>
     * <th>Name</th>
     * <th>Parameter</th>
     * <th>Description</th>
     * </tr>
     * <tr>
     * <td><code>toggle.uk.accordion</code></td>
     * <td>event, active, toggle, content</td>
     * <td>On item toggle</td>
     * </tr>
     * </table>
     */
    type Accordion = (element: string | JQuery, options: AccordionOptions) => any;
    interface NotifyOptions {
        /**
         * The message to display
         */
        message?: string | undefined;

        /**
         * A notification can be styled by adding a status to the message to indicate an info, success, warning or a
         * danger status.
         * <h2>Possible values</h2>
         * info, sucess, warning, danger
         * If you want to create one set its style with the CSS class uk-notify-message-yourStatus
         * @default 'info'
         */
        status?: string | undefined;

        /**
         * Amount of tiem in milliseconds a messa is visible. Set to 0 for sticky message
         * @default 5000
         */
        timeout?: number | undefined;

        /**
         * Adjust the notification's position to different corners.
         * @default  'top-center'
         * <h2>Possible values</h2>
         * top-center, top-left, top-right, bottom-center, bottom-left, bottom-right
         * If you want to create one value set its style with the CSS uk-notify-yourPosition
         */
        pos?: string | undefined;
    }
    /**
     * Create toggleable notifications that fade out automatically
     * Documentation {@link http://getuikit.org/docs/notify.html}
     */
    interface Notify {
        /**
         * Show a notification
         * @param message The html message
         * @param [status] The status or options
         */
        (message: string, status?: string | NotifyOptions): any;
        /**
         * Show a notification
         * @param options Options
         */
        (options: NotifyOptions): any;
    }
    interface SearchOptions {
        /**
         * Data source url
         * @default ''
         * <h2>Possible value</h2>
         * string
         */
        source?: string | undefined;

        /**
         * Min. input length before triggering autocomplete
         * @default 3
         * <h2>Possible value</h2>
         * integer
         */
        minLength?: number | undefined;

        /**
         * Query name when sending ajax request
         * @default search
         * <h2>Possible value</h2>
         * string
         */
        param?: string | undefined;

        /**
         * Delay time after stop typing
         * @default 300
         * <h2>Possible value</h2>
         * integer
         */
        delay?: number | undefined;
    }
    /**
     * Easily create a nicely looking search.
     * Documentation {@link http://getuikit.org/docs/search.html}
     */
    type Search = (element: string | JQuery, options: SearchOptions) => any;
    interface NestableOptions {
        /**
         * List group
         * @default false
         * <h2>Possible value</h2>
         * string
         */
        group?: string | undefined;
        /**
         * Max nesting level
         * @default 10
         * <h2>Possible value</h2>
         * integer
         */
        maxDepth?: number | undefined;
        /**
         * Pixel threshold before starting to drag
         * @default 20
         * <h2>Possible value</h2>
         * integer
         */
        threshold?: number | undefined;
        /**
         * List node name
         * @default ul
         * <h2>Possible value</h2>
         * string
         */
        listNodeName?: string | undefined;
        /**
         * Item node name
         * @default li
         * <h2>Possible value</h2>
         * string
         */
        itemNodeName?: string | undefined;
        /**
         * List base class
         * @default uk-nestable
         * <h2>Possible value</h2>
         * string
         */
        listBaseClass?: string | undefined;
        /**
         * List class
         * @default uk-nestable-list
         * <h2>Possible value</h2>
         * string
         */
        listClass?: string | undefined;
        /**
         * List item class
         * @default uk-nestable-list-item
         * <h2>Possible value</h2>
         * string
         */
        listitemClass?: string | undefined;
        /**
         * Item class
         * @default uk-nestable-item
         * <h2>Possible value</h2>
         * string
         */
        itemClass?: string | undefined;
        /**
         * Class added to dragged list
         * @default uk-nestable-list-dragged
         * <h2>Possible value</h2>
         * string
         */
        dragClass?: string | undefined;
        /**
         * Class added to <code>&lt;html&gt;</code> when moving
         * @default uk-nestable-moving
         * <h2>Possible value</h2>
         * string
         */
        movingClass?: string | undefined;
        /**
         * Class for drag handle
         * @default uk-nestable-handle
         * <h2>Possible value</h2>
         * string
         */
        handleClass?: string | undefined;
        /**
         * Class for collapsed items
         * @default uk-nestable-collapsed
         * <h2>Possible value</h2>
         * string
         */
        collapsedClass?: string | undefined;
        /**
         * Class for placeholder of currently dragged element
         * @default uk-nestable-placeholder
         * <h2>Possible value</h2>
         * string
         */
        placeClass?: string | undefined;
        /**
         * Elements with this class will not trigger dragging. Useful when having the complete item draggable and not
         * just the handle.
         * @default uk-nestable-nodrag
         * <h2>Possible value</h2>
         * string
         */
        noDragClass?: string | undefined;
        /**
         * Class for empty lists
         * @default uk-nestable-empty
         * <h2>Possible value</h2>
         * string
         */
        emptyClass?: string | undefined;
    }
    /**
     * Create nestable lists that can be sorted by drag and drop.
     * Documentation {@link http://getuikit.org/docs/nestable.html}
     * <h2>Events</h2>
     * <table>
     * <tr>
     * <th>Name</th>
     * <th>Parameter</th>
     * <th>Description</th>
     * </tr>
     * <tr>
     * <td><code>start.uk.nestable</code></td>
     * <td>event, nestable object</td>
     * <td>On nestable drag start</td>
     * </tr>
     * <tr>
     * <td><code>move.uk.nestable</code></td>
     * <td>event, nestable object</td>
     * <td>On nestable move item</td>
     * </tr>
     * <tr>
     * <td><code>stop.uk.nestable</code></td>
     * <td>event, nestable object</td>
     * <td>On nestable stop dragging</td>
     * </tr>
     * <tr>
     * <td><code>change.uk.nestable</code></td>
     * <td>event, sortable object, dragged element, action</td>
     * <td>On nestable change item</td>
     * </tr>
     * </table>
     */
    type Nestable = (element: string | JQuery, options: NestableOptions) => any;
    interface SortableOptions {
        /**
         * List group
         * @default false
         * <h2>Possible value</h2>
         * string
         */
        group?: string | undefined;
        /**
         * Animation speed in ms
         * @default 150
         * <h2>Possible value</h2>
         * integer
         */
        animation?: string | undefined;
        /**
         * Mouse movement threshold in pixel until trigger element dragging
         * @default 10
         * <h2>Possible value</h2>
         * integer
         */
        threshold?: string | undefined;
        /**
         * Custom class to define elements which can trigger sorting
         * @default ''
         * <h2>Possible value</h2>
         * string
         */
        handleClass?: string | undefined;
        /**
         * Custom class added to the dragged element
         * @default ''
         * <h2>Possible value</h2>
         * string
         */
        dragCustomClass?: string | undefined;
    }
    /**
     * Create sortable grids and lists to rearrange the order of its elements.
     * Documentation {@link http://getuikit.org/docs/sortable.html}
     * <h2>Events</h2>
     * <table class="uk-table uk-table-striped uk-text-nowrap">
     * <tr>
     * <th>Name</th>
     * <th>Parameter</th>
     * <th>Description</th>
     * </tr>
     * <tr>
     * <td><code>start.uk.sortable</code></td>
     * <td>event, sortable object, dragged element</td>
     * <td>On sortable drag start</td>
     * </tr>
     * <tr>
     * <td><code>move.uk.sortable</code></td>
     * <td>event, sortable object</td>
     * <td>On sortable move item</td>
     * </tr>
     * <tr>
     * <td><code>stop.uk.sortable</code></td>
     * <td>event, sortable object, dragged element</td>
     * <td>On sortable stop dragging</td>
     * </tr>
     * <tr>
     * <td><code>change.uk.sortable</code></td>
     * <td>event, sortable object, dragged element, action</td>
     * <td>On sortable change item</td>
     * </tr>
     * </table>
     */
    type Sortable = (element: string | JQuery, options: SortableOptions) => any;
    interface StickyOptions {
        /**
         * Top offset whent sticky should be triggered
         * @default 0
         * <h2>Possible value</h2>
         * integer
         */
        top?: number | undefined;
        /**
         * UIkit animation class
         * @default ''
         * <h2>Possible value</h2>
         * string
         */
        animation?: string | undefined;
        /**
         * Init class when the element is sticky for the first time
         * @default uk-sticky-init
         * <h2>Possible value</h2>
         * string
         */
        clsinit?: string | undefined;
        /**
         * Active class to add, when element is sticky
         * @default uk-active
         * <h2>Possible value</h2>
         * string
         */
        clsactive?: string | undefined;
        /**
         * Class to add, when element is not sticky
         * @default ''
         * <h2>Possible value</h2>
         * string
         */
        clsinactive?: string | undefined;
        /**
         * Css selector where to get the width from in sticky mode. By default it takes the width from the created wrapper element.
         * @default ''
         * <h2>Possible value</h2>
         * string
         */
        getWidthFrom?: string | undefined;
        /**
         * Condition for the active status with a width as integer (e.g. 640) or a css media query
         * @default false
         * <h2>Possible value</h2>
         * integer / string
         */
        media?: number | string | undefined;
        /**
         * Make sure that a sticky element is not over a targeted element via location hash on dom-ready.
         * @default false
         * <h2>Possible value</h2>
         * boolean
         */
        target?: boolean | undefined;
        /**
         * Show sticky element only when scrolling up.
         * @default false
         * <h2>Possible value</h2>
         * boolean
         */
        showup?: boolean | undefined;
        /**
         * Set to <code>true</code> to bind sticky to the parent or a Css selector to bind sticky to a specific element.
         * @default false
         * <h2>Possible value</h2>
         * mixed
         */
        boundary?: boolean | string | undefined;
    }
    /**
     * Make elements remain at the top of the viewport, like a sticky navbar.
     * Documentation {@link http://getuikit.org/docs/sticky.html}
     * <h2>Events</h2>
     * <table class="uk-table uk-table-striped uk-text-nowrap">
     * <tr>
     * <th>Name</th>
     * <th>Parameter</th>
     * <th>Description</th>
     * </tr>
     * <tr>
     * <td><code>active.uk.sticky</code></td>
     * <td>event</td>
     * <td>Element getting sticky</td>
     * </tr>
     * <tr>
     * <td><code>inactive.uk.sticky</code></td>
     * <td>event</td>
     * <td>Element leaving sticky mode</td>
     * </tr>
     * </table>
     */
    type Sticky = (element: string | JQuery, options: StickyOptions) => any;
    interface TimepickerOptions {
        /**
         * Defines the preferred time notation
         * @default '24h'
         * <h2>Possible value</h2>
         * '24h' or '12h'
         */
        format?: string | undefined;
        /**
         * Start time
         * @default 0
         * <h2>Possible value</h2>
         * Integer between 0 and 24
         */
        start?: number | undefined;
        /**
         * End time
         * @default 24
         * <h2>Possible value</h2>
         * Integer between 0 and 24
         */
        end?: number | undefined;
    }
    /**
     * Create a timepicker which can easily be used by selecting a time value from a pre filled dropdown.
     * Documentation {@link http://getuikit.org/docs/timepicker.html}
     */
    type Timepicker = (element: string | JQuery, options: TimepickerOptions) => any;
    interface TooltipOptions {
        /**
         * Offset to the source element
         * @default 5
         * <h2>Possible value</h2>
         * integer
         */
        offset?: number | undefined;
        /**
         * Tooltip position
         * @default 'top'
         * <h2>Possible value</h2>
         * string
         */
        pos?: string | undefined;
        /**
         * Fade in tooltip
         * @default false
         * <h2>Possible value</h2>
         * boolean
         */
        animation?: boolean | undefined;
        /**
         * Delay tooltip show in ms
         * @default 0
         * <h2>Possible value</h2>
         * integer
         */
        delay?: number | undefined;
        /**
         * Custom class to add on show
         * @default ''
         * <h2>Possible value</h2>
         * string
         */
        cls?: string | undefined;
        /**
         * Toggled active class
         * @default 'uk-active'
         * <h2>Possible value</h2>
         * string
         */
        activeClass?: string | undefined;
    }
    /**
     * Easily create a nicely looking tooltip.
     * Documentation {@link http://getuikit.org/docs/tooltip.html}
     */
    type Tooltip = (element: string | JQuery, options: TooltipOptions) => any;
    interface UploadOptions {
        /**
         * Target url for the upload
         * @default ''
         * <h2>Possible value</h2>
         * string
         */
        action?: string | undefined;
        /**
         * Send each file one by one
         * @default true
         * <h2>Possible value</h2>
         * boolean
         */
        single?: boolean | undefined;
        /**
         * Post query name
         * @default files[]
         * <h2>Possible value</h2>
         * string
         */
        param?: string | undefined;
        /**
         * Additional request parameters
         * @default {}
         * <h2>Possible value</h2>
         * JSON Object
         */
        params?: {} | undefined;
        /**
         * File filter
         * @default *.*
         * <h2>Possible value</h2>
         * string
         */
        allow?: string | undefined;
        /**
         * Limit the number of files to upload
         * @default false
         * <h2>Possible value</h2>
         * integer
         */
        filelimit?: number | undefined;
        /**
         * Response type from server
         * @default text
         * <h2>Possible Value</h2>
         * (text|json)
         */
        type?: string | undefined;
        before?(settings: UploadOptions, files: string | string[]): any;
        beforeAll?(files: string | string[]): any;
        beforeSend?(xhr: XMLHttpRequest): any;
        progress?(percent: number): any;
        complete?(response: any, xhr: XMLHttpRequest): any;
        allcomplete?(response: any, xhr: XMLHttpRequest): any;
        notallowed?(file: string | string[], settings: UploadOptions): any;
        loadstart?(event: any): any;
        load?(event: any): any;
        loadend?(event: any): any;
        error?(event: any): any;
        abort?(event: any): any;
        readystatechange?(event: any): any;
    }

    /**
     * Allow users to upload files through a file input form element or a placeholder area.
     * Documentation {@link http://getuikit.org/docs/upload.html}
     * <h2>Callbacks</h2>
     * <table class="uk-table uk-table-striped">
     * <tr>
     * <th>Name</th>
     * <th>Parameter</th>
     * </tr>
     * <tr>
     * <td><code>before</code></td>
     * <td>settings, files</td>
     * </tr>
     * <tr>
     * <td><code>beforeAll</code></td>
     * <td>files</td>
     * </tr>
     * <tr>
     * <td><code>beforeSend</code></td>
     * <td>xhr</td>
     * </tr>
     * <tr>
     * <td><code>progress</code></td>
     * <td>percent</td>
     * </tr>
     * <tr>
     * <td><code>complete</code></td>
     * <td>response, xhr</td>
     * </tr>
     * <tr>
     * <td><code>allcomplete</code></td>
     * <td>response, xhr</td>
     * </tr>
     * <tr>
     * <td><code>notallowed</code></td>
     * <td>file, settings</td>
     * </tr>
     * <tr>
     * <td><code>loadstart</code></td>
     * <td>event</td>
     * </tr>
     * <tr>
     * <td><code>load</code></td>
     * <td>event</td>
     * </tr>
     * <tr>
     * <td><code>loadend</code></td>
     * <td>event</td>
     * </tr>
     * <tr>
     * <td><code>error</code></td>
     * <td>event</td>
     * </tr>
     * <tr>
     * <td><code>abort</code></td>
     * <td>event</td>
     * </tr>
     * <tr>
     * <td><code>readystatechange</code></td>
     * <td>event</td>
     * </tr>
     * </table>
     */
    type Upload = (element: string | JQuery, options: UploadOptions) => any;
    const dropdown: Dropdown;
    const modal: Modal;
    const lightbox: LightBox;
    const offcanvas: OffCanvas;
    const autocomplete: AutoComplete;
    const datepicker: DatePicker;
    const htmleditor: HtmlEditor;
    const slider: Slider;
    const slideset: SlideSet;
    const slideshow: SlideShow;
    const parallax: Parallax;
    const accordion: Accordion;
    const notify: Notify;
    const search: Search;
    const nestable: Nestable;
    const sortable: Sortable;
    const sticky: Sticky;
    const timepicker: Timepicker;
    const tooltip: Tooltip;
    const uploadSelect: Upload;
    const uploadDrop: Upload;
}
