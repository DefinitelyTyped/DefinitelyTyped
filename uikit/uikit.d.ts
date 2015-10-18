// Type definitions for uikit 2.23.0
// Project: http://getuikit.org
// Definitions by: Giovanni Silva <https://github.com/giovannicandido>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/// <reference path="../jquery/jquery.d.ts" />

declare module UIkit {
    interface ModalElement {
        /**
         * Show the modal
         */
        show(): void
        /**
         * Hide the modal
         */
        hide(): void
        /**
         * Return if the modal is active on the page
         * @return {boolean} True if the modal is current active on the page, false otherwise
         */
        isActive(): boolean
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
	 *
	 *	'show.uk.modal': function(){
	 *    console.log("Modal is visible.");
	 *	},
	 *
	 *   'hide.uk.modal': function(){
	 *    console.log("Element is not visible.");
	 *  }
	 *	});
     * </code></pre>
     */
    interface Modal {
        /**
         * Create a alert dialog
         * @param  {string} message The message to display. Can be Html
         */
        alert(message:string): void
        /**
         * Create a confirm dialog and execute the function on positive confirmation
         * @param  {string} message The message to display. Can be Html
         * @param  {function}      fn      A function to execute on confirmation
         */
        confirm(message:string, fn:() => any): void
        /**
         * Create a prompt dialog, where the user enter information
         * @param  {string} message The message to display. Can be Html
         * @param  {function} fn  A function to execute on confirmation. The function
         * receive the new value as a parameter
         */
        prompt(message:string, fn:(newValue:string) => any): void
        /**
         * Create a prompt dialog, where the user enter information
         * @param  {string} message The message to display. Can be Html
         * @param  {string} value   A value to init the input
         * @param  {function} fn  A function to execute on confirmation. The function
         * receive the new value as a parameter
         */
        prompt(message:string, value:string, fn:(newValue:string) => any): void
        /**
         * Create a modal that blocks the entire page
         * @param {string} content A content to display. Can be Html
         */
        blockUI(content:string): ModalElement
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
        (selector:string|JQuery): ModalElement
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
         * @param  {string} selector A CSS selector
         */
        show(selector:string): void
        /**
         * Hide any active offcanvas. Set force to true, if you don't want any
         * animation
         * @param  {boolean} force When seted to true do not run animations.
         * @default false
         */
        hide(force?:boolean): void
    }
    interface LightBoxOptions {
        /**
         * Group name to group elements as a gallery to show.
         * @default false
         */
        group?: string
        /**
         * Animation duration between gallery item change
         * @default 400
         */
        duration?: number
        /**
         * Allow keyboard navigation
         * @default true
         */
        keyboard?: boolean
    }
    interface LightBoxItem {
        source: string
        type: string
    }
    interface LightBoxElement {
        /**
         * Open the lightbox
         */
        show(): void
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
         * @param  {Array<LightBoxItem>} items Group of items on the lightbox
         * @return {LightBoxElement}           The lightbox element to show
         */
        create(items:Array<LightBoxItem>): LightBoxElement
        /**
         * Init element manually
         */
        (element:string|JQuery, options?:LightBoxOptions): LightBoxElement

    }
    type CallbackAutoComplete = () => string
    interface AutoCompleteOptions {
        /**
         * Data source
         * @default []
         */
        source?: string|string[]|CallbackAutoComplete
        /**
         * Min. input length before triggering autocomplete
         * @default 3
         */
        minLength?: number
        /**
         * Query name when sending ajax request
         * @default search
         */
        param?: string
        /**
         * Delay time after stop typing
         * @default 300
         */
        delay?: number
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
    interface AutoComplete {
        /**
         * Init element manually
         * @param element
         * @param options
         */
        (element:string|JQuery, options?:AutoCompleteOptions): any
    }
    interface DatePickerOptions {
        /**
         * Start of the week
         * integer (0..6)
         * @default 1
         */
        weekstart?: number
        /**
         * Language string definitions
         * @default { months:['January',...], weekdays:['Sun',..,'Sat'] }
         */
        i18n?: {}
        /**
         * Date format string
         * @default 'DD.MM.YYYY'
         */
        format?: string
        /**
         * Offset to the input value
         * @default 5
         */
        offsettop?: number
        /**
         * Min. date
         * bool (false to ignore the option)
         * string (date as in format)
         * integer (offset in days from current date)
         * @default false
         */
        minDate?: string|boolean|number
        /**
         * Max. date
         * bool (false to ignore the option)
         * string (date as in format)
         * integer (offset in days from current date)
         * @default false
         */
        maxDate?: string|boolean|number
        /**
         * Position of the datepicker
         * 'auto', 'top', 'bottom'
         * @default 'auto'
         */
        pos?: string

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
    interface DatePicker {
        /**
         * Init element manually
         * @param element
         * @param options
         */
        (element:string|JQuery, options?:DatePickerOptions): any
    }
    interface HtmlEditorOptions {
        /**
         * View mode
         * Possible values 'split','tab'
         * @default 'split'
         */
        mode?: string
        /**
         * Button list to appear in the toolbar
         * @default [ "bold", "italic", "strike", "link", "picture", ... ]
         */
        toolbar?: string[]
        /**
         * Min. browser width when to switch to responsive tab mode when in split mode
         * @default 1000
         */
        maxsplitsize?: number
        /**
         * Label string for preview mode
         * @default 'Preview'
         */
        lblPreview?: string
        /**
         * Label string for code mode
         * @default 'Markdown'
         */
        lblCodeview?: string
    }
    /**
     * Create a rich HTML or markdown editor with an immediate preview and syntax highlighting
     * Documentation {@link http://getuikit.org/docs/htmleditor.html}
     */
    interface HtmlEditor {
        /**
         * Init element manually
         * @param element
         * @param options
         */
        (element: string|JQuery, options?: HtmlEditorOptions): any
    }
    interface SliderOptions {
        /**
         * Center items mode
         * @default false
         */
        center?: boolean
        /**
         * Mouse movement threshold in pixel until trigger element dragging
         * @default true
         */
        threshold?: boolean
        /**
         * Infinite scrolling
         * @default true
         */
        infinite?: boolean
        /**
         * Class added on active item in center mode
         * @default uk-active
         */
        activecls?: string
        /**
         * Defines whether or not the slider items should switch automatically
         * @default false
         */
        autoplay?: boolean
        /**
         * Pause autoplay when hovering a slider
         * @default true
         */
        pauseOnHover?: boolean
        /**
         * Defines the timespan between switching slider items
         * @default 7000
         */
        autoplayInterval?: number
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
    interface Slider {
        /**
         * Init element manually
         * @param element
         * @param options
         */
        (element:string|JQuery, options?:SliderOptions): any
    }
    interface SlideSetOptions {
        /**
         * Default visible items in a set
         * @default 1
         */
            default?: number
        /**
         * Visible items in a set at small breakpoint
         * @default null
         */
        small?: number
        /**
         * Visible items in a set at medium breakpoint
         * @default null
         */
        medium?: number
        /**
         * Visible items in a set at large breakpoint
         * @default null
         */
        large?: number
        /**
         * Visible items in a set at xlarge breakpoint
         * @default null
         */
        xlarge?: number
        /**
         * Animation name
         * @default 'fade'
         */
        animation?: string
        /**
         * Animation duration in ms
         * @default 200
         */
        duration?: number
        /**
         * Animation delay between items in a set
         * @default 100
         */
        delay?: number
        /**
         * Items filter
         * @default ""
         */
        filter?: string
        /**
         * Defines whether or not the slideset items should switch automatically.
         * @default false
         */
        autoplay?: boolean
        /**
         * Pause autoplay when hovering a slideset.
         * @default true
         */
        pauseOnHover?: boolean
        /**
         * Defines the timespan between switching slideset items.
         * @default 7000
         */
        autoplayInterval?: number
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
    interface SlideSet {
        /**
         * Init element manually
         * @param element
         * @param options
         */
        (element:string|JQuery, options?:SlideSetOptions): any
    }
    interface SlideShowOptions {
        /**
         * Defines the preferred transition between items.
         * @default 'fade
         */
        animation?: string

        /**
         * Defines the transition duration.
         * @default 500
         */
        duration?: number

        /**
         * Defines the slideshow height.
         * @default 'auto'
         */
        height?: string

        /**
         * Defines the first slideshow item to be displayed.
         * @default 0
         */
        start?: number

        /**
         * Defines whether or not the slideshow items should switch automatically.
         * @default false
         */
        autoplay?: boolean

        /**
         * Pause autoplay when hovering a slideshow.
         * @default true
         */
        pauseOnHover?: boolean

        /**
         * Defines the timespan between switching slideshow items.
         * @default 7000
         */
        autoplayInterval?: number

        /**
         * Defines whether or not a video starts automatically.
         * @default true
         */
        videoautoplay?: boolean

        /**
         * Defines whether or not a video is muted.
         * @default false
         */
        videomute?: boolean

        /**
         * Defines whether or not the Ken Burns effect is active. If kenburns is a numeric value, it will be used as
         * the animation duration.
         * @default false
         */
        kenburns?: boolean

        /**
         * Animation series.
         * @default 'uk-animation-middle-left, uk-animation-top-right, uk-animation-bottom-left, uk-animation-top-center,uk-animation-bottom-right'
         */
        kenburnsanimations?: string

        /**
         * Defines the number of slices, if a "Slice" transition is set.
         * @default 15
         */
        slices?: number
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
    interface SlideShow {
        /**
         * Init element manually
         * @param element
         * @param options
         */
        (element:string|JQuery, options:SlideShowOptions): any
    }
    interface ParallaxOptions {

        /**
         * Animation velocity during scrolling
         * @default 0.5
         */
        velocity?: number
        /**
         * Element dimension reference for animation duration.
         * @default false
         */
        target?: boolean
        /**
         * Animation range depending on the viewport.
         * <h2>Possible value</h2>
         * float (0 to 1)
         * @default false
         */
        viewport?: number
        /**
         * Condition for the active status with a width as integer (e.g. 640) or a css media query
         * @default false
         * <h2>Possible Value</h2>
         * integer / string
         */
        media?: number|string

    }
    /**
     * Animate CSS properties depending on the scroll position of the document.
     * Documentation {@link http://getuikit.org/docs/parallax.html}
     */
    interface Parallax {
        /**
         * Init element manually
         * @param element
         * @param options
         */
        (element:string|JQuery, options:ParallaxOptions): any
    }
    interface AccordionOptions {
        /**
         * Show first item on init
         * @default true
         * <h2>Possible value</h2>
         * boolean
         */
        showfirst?: boolean
        /**
         * Allow multiple open items
         * @default true
         * <h2>Possible value</h2>
         * boolean
         */
        collapse?: boolean
        /**
         * Animate toggle
         * @default true
         * <h2>Possible value</h2>
         * boolean
         */
        animate?: boolean
        /**
         * Animation function
         * @default swing
         * <h2>Possible value</h2>
         * string
         */
        easing?: string
        /**
         * Animation duration
         * @default 300
         * <h2>Possible value</h2>
         * integer
         */
        duration?: number
        /**
         * Css selector for toggles
         * @default .uk-accordion-title
         * <h2>Possible value</h2>
         * string
         */
        toggle?: string
        /**
         * Css selector for content containers
         * @default .uk-accordion-content
         * <h2>Possible value</h2>
         * string
         */
        containers?: string
        /**
         * Class to add when an item is active
         * @default uk-active
         * <h2>Possible value</h2>
         * string
         */
        clsactive?: string
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
    interface Accordion {
        /**
         * Init element manually
         * @param element
         * @param options
         */
        (element:string|JQuery, options:AccordionOptions): any
    }

    interface NotifyOptions {
        /**
         * The message to display
         */
        message?: string

        /**
         * A notification can be styled by adding a status to the message to indicate an info, success, warning or a
         * danger status.
         * <h2>Possible values</h2>
         * info, sucess, warning, danger
         * If you want to create one set its style with the CSS class uk-notify-message-yourStatus
         * @default 'info'
         */
        status?: string

        /**
         * Amount of tiem in milliseconds a messa is visible. Set to 0 for sticky message
         * @default 5000
         */
        timeout?: number

        /**
         * Adjust the notification's position to different corners.
         * @default  'top-center'
         * <h2>Possible values</h2>
         * top-center, top-left, top-right, bottom-center, bottom-left, bottom-right
         * If you want to create one value set its style with the CSS uk-notify-yourPosition
         */
        pos?: string
    }
    /**
     * Create toggleable notifications that fade out automatically
     * Documentation {@link http://getuikit.org/docs/notify.html}
     */
    interface Notify {
        /**
         * Show a message with default options
         * @param message The html message
         */
        (message:string): any
        /**
         * Show a message with a different status
         * @param message The html message
         * @param status The string status
         */
        (message:string, status:string): any
        /**
         * Show a message with diferente options
         * @param message The html message
         * @param options Options
         */
        (message:string, options:NotifyOptions): any
        /**
         * Show a message with diferent options
         * @param options Options
         */
        (options:NotifyOptions): any
    }
    interface SearchOptions {
        /**
         * Data source url
         * @default ''
         * <h2>Possible value</h2>
         * string
         */
        source?: string

        /**
         * Min. input length before triggering autocomplete
         * @default 3
         * <h2>Possible value</h2>
         * integer
         */
        minLength?: number

        /**
         * Query name when sending ajax request
         * @default search
         * <h2>Possible value</h2>
         * string
         */
        param?: string

        /**
         * Delay time after stop typing
         * @default 300
         * <h2>Possible value</h2>
         * integer
         */
        delay?: number

    }
    /**
     * Easily create a nicely looking search.
     * Documentation {@link http://getuikit.org/docs/search.html}
     */
    interface Search {
        /**
         * Init element manually
         * @param element
         * @param options
         */
        (element:string|JQuery, options:SearchOptions): any
    }
    interface NestableOptions {
        /**
         * List group
         * @default false
         * <h2>Possible value</h2>
         * string
         */
        group?: string
        /**
         * Max nesting level
         * @default 10
         * <h2>Possible value</h2>
         * integer
         */
        maxDepth?: number
        /**
         * Pixel threshold before starting to drag
         * @default 20
         * <h2>Possible value</h2>
         * integer
         */
        threshold?: number
        /**
         * List node name
         * @default ul
         * <h2>Possible value</h2>
         * string
         */
        listNodeName?: string
        /**
         * Item node name
         * @default li
         * <h2>Possible value</h2>
         * string
         */
        itemNodeName?: string
        /**
         * List base class
         * @default uk-nestable
         * <h2>Possible value</h2>
         * string
         */
        listBaseClass?: string
        /**
         * List class
         * @default uk-nestable-list
         * <h2>Possible value</h2>
         * string
         */
        listClass?: string
        /**
         * List item class
         * @default uk-nestable-list-item
         * <h2>Possible value</h2>
         * string
         */
        listitemClass?: string
        /**
         * Item class
         * @default uk-nestable-item
         * <h2>Possible value</h2>
         * string
         */
        itemClass?: string
        /**
         * Class added to dragged list
         * @default uk-nestable-list-dragged
         * <h2>Possible value</h2>
         * string
         */
        dragClass?: string
        /**
         * Class added to <code>&lt;html&gt;</code> when moving
         * @default uk-nestable-moving
         * <h2>Possible value</h2>
         * string
         */
        movingClass?: string
        /**
         * Class for drag handle
         * @default uk-nestable-handle
         * <h2>Possible value</h2>
         * string
         */
        handleClass?: string
        /**
         * Class for collapsed items
         * @default uk-nestable-collapsed
         * <h2>Possible value</h2>
         * string
         */
        collapsedClass?: string
        /**
         * Class for placeholder of currently dragged element
         * @default uk-nestable-placeholder
         * <h2>Possible value</h2>
         * string
         */
        placeClass?: string
        /**
         * Elements with this class will not trigger dragging. Useful when having the complete item draggable and not
         * just the handle.
         * @default uk-nestable-nodrag
         * <h2>Possible value</h2>
         * string
         */
        noDragClass?: string
        /**
         * Class for empty lists
         * @default uk-nestable-empty
         * <h2>Possible value</h2>
         * string
         */
        emptyClass?: string

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
    interface Nestable {
        /**
         * Init element manually
         * @param element
         * @param options
         */
        (element:string|JQuery, options:NestableOptions): any
    }
    interface SortableOptions {
        /**
         * List group
         * @default false
         * <h2>Possible value</h2>
         * string
         */
        group?: string
        /**
         * Animation speed in ms
         * @default 150
         * <h2>Possible value</h2>
         * integer
         */
        animation?: string
        /**
         * Mouse movement threshold in pixel until trigger element dragging
         * @default 10
         * <h2>Possible value</h2>
         * integer
         */
        threshold?: string
        /**
         * Custom class to define elements which can trigger sorting
         * @default ''
         * <h2>Possible value</h2>
         * string
         */
        handleClass?: string
        /**
         * Custom class added to the dragged element
         * @default ''
         * <h2>Possible value</h2>
         * string
         */
        dragCustomClass?: string

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
    interface Sortable {
        /**
         * Init element manually
         * @param element
         * @param options
         */
        (element:string|JQuery, options:SortableOptions): any
    }
    interface StickyOptions {
        /**
         * Top offset whent sticky should be triggered
         * @default 0
         * <h2>Possible value</h2>
         * integer
         */
        top?: number
        /**
         * UIkit animation class
         * @default ''
         * <h2>Possible value</h2>
         * string
         */
        animation?: string
        /**
         * Init class when the element is sticky for the first time
         * @default uk-sticky-init
         * <h2>Possible value</h2>
         * string
         */
        clsinit?: string
        /**
         * Active class to add, when element is sticky
         * @default uk-active
         * <h2>Possible value</h2>
         * string
         */
        clsactive?: string
        /**
         * Class to add, when element is not sticky
         * @default ''
         * <h2>Possible value</h2>
         * string
         */
        clsinactive?: string
        /**
         * Css selector where to get the width from in sticky mode. By default it takes the width from the created wrapper element.
         * @default ''
         * <h2>Possible value</h2>
         * string
         */
        getWidthFrom?: string
        /**
         * Condition for the active status with a width as integer (e.g. 640) or a css media query
         * @default false
         * <h2>Possible value</h2>
         * integer / string
         */
        media?: number|string
        /**
         * Make sure that a sticky element is not over a targeted element via location hash on dom-ready.
         * @default false
         * <h2>Possible value</h2>
         * boolean
         */
        target?: boolean
        /**
         * Show sticky element only when scrolling up.
         * @default false
         * <h2>Possible value</h2>
         * boolean
         */
        showup?: boolean
        /**
         * Set to <code>true</code> to bind sticky to the parent or a Css selector to bind sticky to a specific element.
         * @default false
         * <h2>Possible value</h2>
         * mixed
         */
        boundary?: boolean|string

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
    interface Sticky {
        /**
         * Init the element manually
         * @param element
         * @param options
         */
        (element:string|JQuery, options:StickyOptions): any
    }
    interface TimepickerOptions {
        /**
         * Defines the preferred time notation
         * @default '24h'
         * <h2>Possible value</h2>
         * '24h' or '12h'
         */
        format?: string
        /**
         * Start time
         * @default 0
         * <h2>Possible value</h2>
         * Integer between 0 and 24
         */
        start?: number
        /**
         * End time
         * @default 24
         * <h2>Possible value</h2>
         * Integer between 0 and 24
         */
        end?: number

    }
    /**
     * Create a timepicker which can easily be used by selecting a time value from a pre filled dropdown.
     * Documentation {@link http://getuikit.org/docs/timepicker.html}
     */
    interface Timepicker {
        /**
         * Init element manually
         * @param element
         * @param options
         */
        (element:string|JQuery, options:TimepickerOptions): any
    }
    interface TooltipOptions {
        /**
         * Offset to the source element
         * @default 5
         * <h2>Possible value</h2>
         * integer
         */
        offset?: number
        /**
         * Tooltip position
         * @default 'top'
         * <h2>Possible value</h2>
         * string
         */
        pos?: string
        /**
         * Fade in tooltip
         * @default false
         * <h2>Possible value</h2>
         * boolean
         */
        animation?: boolean
        /**
         * Delay tooltip show in ms
         * @default 0
         * <h2>Possible value</h2>
         * integer
         */
        delay?: number
        /**
         * Custom class to add on show
         * @default ''
         * <h2>Possible value</h2>
         * string
         */
        cls?: string
        /**
         * Toggled active class
         * @default 'uk-active'
         * <h2>Possible value</h2>
         * string
         */
        activeClass?: string

    }
    /**
     * Easily create a nicely looking tooltip.
     * Documentation {@link http://getuikit.org/docs/tooltip.html}
     */
    interface Tooltip {
        /**
         * Init element manually
         * @param element
         * @param options
         */
        (element:string|JQuery, options:TooltipOptions): any
    }
    interface UploadOptions {
        /**
         * Target url for the upload
         * @default ''
         * <h2>Possible value</h2>
         * string
         */
        action?: string
        /**
         * Send each file one by one
         * @default true
         * <h2>Possible value</h2>
         * boolean
         */
        single?: boolean
        /**
         * Post query name
         * @default files[]
         * <h2>Possible value</h2>
         * string
         */
        param?: string
        /**
         * Additional request parameters
         * @default {}
         * <h2>Possible value</h2>
         * JSON Object
         */
        params?: {}
        /**
         * File filter
         * @default *.*
         * <h2>Possible value</h2>
         * string
         */
        allow?: string
        /**
         * Limit the number of files to upload
         * @default false
         * <h2>Possible value</h2>
         * integer
         */
            filelimit?: number
        /**
         * Response type from server
         * @default text
         * <h2>Possible Value</h2>
         * (text|json)
         */
        "type"?: string
        before?: (settings: UploadOptions, files: string|string[]) => any
        beforeAll?: (files: string|string[]) => any
        beforeSend?: (xhr: XMLHttpRequest) => any
        progress?: (percent: number) => any
        complete?: (response: any, xhr: XMLHttpRequest) => any
        allcomplete?: (response: any, xhr: XMLHttpRequest) => any
        notallowed?: (file: string|string[], settings: UploadOptions) => any
        loadstart?: (event: any) => any
        load?: (event: any) => any
        loadend?: (event: any) => any
        error?: (event: any) => any
        abort?: (event: any) => any
        readystatechange?: (event: any) => any
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
    interface Upload {
        /**
         * Init element manually
         * @param element
         * @param options
         */
        (element:string|JQuery, options:UploadOptions): any
    }
    export var modal:Modal;
    export var lightbox:LightBox;
    export var offcanvas:OffCanvas;
    export var autocomplete:AutoComplete;
    export var datepicker:DatePicker;
    export var htmleditor:HtmlEditor;
    export var slider:Slider;
    export var slideset:SlideSet;
    export var slideshow:SlideShow;
    export var parallax:Parallax;
    export var accordion:Accordion;
    export var notify:Notify;
    export var search:Search;
    export var nestable:Nestable;
    export var sortable:Sortable;
    export var sticky:Sticky;
    export var timepicker:Timepicker;
    export var tooltip:Tooltip;
    export var uploadSelect: Upload;
    export var uploadDrop: Upload;
}

declare module 'uikit' {
    export = UIkit
}
