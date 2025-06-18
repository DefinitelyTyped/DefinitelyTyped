export namespace UIkit {
    const util: {
        /** Sets up a function that will be called whenever the specified event is delivered to the target. */
        on(element: UIkitElement, type: string, listener: (e: Event) => void): void;
        /** Removes an event listener previously registered with on. */
        off(element: UIkitElement, type: string, listener: (e: Event) => void): void;
        [key: string]: any;
    };
    const component: object;
    const data: string;
    const prefix: string;
    const options: object;
    const version: string;
    const mixin: object;
    const extend: object;
    const update: object;

    function use(plugin: Plugin): typeof UIkit;

    type UIkitElement = object | HTMLElement | string;
    type UIkitNodes = NodeList | HTMLCollection | UIkitNode;
    type UIkitNode = Node;

    // Option types
    type UIkitAlign = "left" | "right" | "center";
    type UIkitCssSelector = string;
    type UIkitClickHoverMode = "click" | "hover" | ("click" | "hover")[];
    type UIkitPosition =
        | "top-left"
        | "top-center"
        | "top-right"
        | "bottom-left"
        | "bottom-center"
        | "bottom-right"
        | "left-top"
        | "left-center"
        | "left-bottom"
        | "right-top"
        | "right-center"
        | "right-bottom";
    type UIkitStretch = "x" | "y" | boolean;

    // Base classes

    interface Plugin {
        (uikit: typeof UIkit): void;
        installed?: boolean;
    }

    interface UIkitElementBase {
        /**
         * Destroys the component.
         * @param removeEl If true, also removes the element from the DOM.
         */
        $destroy(removeEl?: boolean): void;

        /** The HTML element to which the UIkit element is attached. */
        readonly $el: HTMLElement;
    }

    /** A helper type that represents a UIkit initialization function. */
    type UIkitFunction<TOptions extends {}, TElement extends UIkitElementBase = UIkitElementBase> = (
        element: UIkitElement,
        options?: TOptions,
    ) => TElement;

    // Core elements

    // Accordion

    interface UIkitAccordionOptions {
        /** Index of the element to open initially. */
        active?: number;
        /** Reveal item directly or with a transition. */
        animation?: boolean;
        /** Allow all items to be closed. */
        collapsible?: boolean;
        /** The content selector, which selects the accordion content elements. */
        content?: string;
        /** Animation duration in milliseconds. */
        duration?: number;
        /** Allow multiple open items. */
        multiple?: boolean;
        /** CSS selector of the element(s) to toggle. */
        targets?: string;
        /** The toggle selector, which toggles accordion items. */
        toggle?: string;
        /** The transition to use when revealing items. Use keyword for easing functions. */
        transition?: string;
        /** Pixel offset added to scroll top. */
        offset?: number;
    }

    interface UIkitAccordionElement extends UIkitElementBase {
        /** The list of accordion content elements. */
        get content(): HTMLElement[];
        /** The list of accordion items. */
        get items(): HTMLElement[];
        /**
         * Toggles the content pane.
         * @param index Accordion pane to toggle. 0 based index.
         * @param animate Suppress opening animation by passing false.
         */
        toggle(index: string | number | UIkitNode, animate?: boolean): void;
    }

    type Accordion = UIkitFunction<UIkitAccordionOptions, UIkitAccordionElement>;

    // Alert

    interface UIkitAlertOptions {
        /** Fade out or hide directly. */
        animation?: boolean | string;
        /** Animation duration in milliseconds. */
        duration?: number;
        /** The close trigger element. */
        selClose?: UIkitCssSelector;
    }

    interface UIkitAlertElement extends UIkitElementBase {
        /** Closes and removes the Alert. */
        close(): void;
    }

    type Alert = UIkitFunction<UIkitAlertOptions, UIkitAlertElement>;

    // Cover

    interface UIkitCoverOptions {
        /** Tries to automute the iframe's video. */
        automute?: boolean;
        /** The element's width. */
        width?: number;
        /** The element's height. */
        height?: number;
    }

    type Cover = UIkitFunction<UIkitCoverOptions>;

    // Drop, Dropdown & Dropnav base options

    interface UIkitDropOptionsBase {
        /** CSS selector for the element to be used as toggle. By default, the preceding element. */
        toggle?: UIkitCssSelector;
        /** Drop position. */
        pos?: UIkitPosition;
        /** Stretch drop on both (true) or given axis (x, y). */
        stretch?: UIkitStretch;
        /** Comma-separated list of drop trigger behavior modes (click, hover). */
        mode?: UIkitClickHoverMode;
        /** Delay time in hover mode before a drop is shown in ms. */
        delayShow?: number;
        /** Delay time in hover mode before a drop is hidden in ms. */
        delayHide?: number;
        /** Disable dynamic positioning while scrolling by setting this option to false. */
        autoUpdate?: boolean;
        /** The area the drop can't exceed causing it to flip and shift. By default, the nearest scrolling ancestor. */
        boundary?: UIkitCssSelector;
        /** The area on the x-axis the drop can't exceed causing it to flip and shift. */
        boundaryX?: UIkitCssSelector;
        /** The area on the y-axis the drop can't exceed causing it to flip and shift. */
        boundaryY?: UIkitCssSelector;
        /** The element the drop is positioned to (true for window). */
        target?: boolean | UIkitCssSelector;
        /** The element's X axis the drop is positioned to (true for window). */
        targetX?: boolean | UIkitCssSelector;
        /** The element's Y axis the drop is positioned to (true for window). */
        targetY?: boolean | UIkitCssSelector;
        /** Position inside its target. */
        inset?: boolean;
        /** Flip the drop along the main axis if it overflows the boundary. */
        flip?: boolean | string;
        /** Shift the drop along the cross-axis if it overflows the boundary. */
        shift?: boolean;
        /** The drop offset. */
        offset?: number;
        /** Space-separated names of animations. Comma-separated for animation out. */
        animation?: string;
        /** Use animation when closing the drop. */
        animateOut?: boolean;
        /** Allow background scrolling while dropdown is opened. */
        bgScroll?: boolean;
        /** Close the dropdown on scrolling a parent scroll container. */
        closeOnScroll?: boolean;
        /** The animation duration. */
        duration?: number;
        /** Define a target container via a selector to specify where the drop should be appended in the DOM. */
        container?: UIkitElement | boolean;
        /** Undocumented. */
        "boundary-align"?: boolean | undefined;
    }

    // Drop

    type UIkitDropOptions = UIkitDropOptionsBase;

    interface UIkitDropElement extends UIkitElementBase {
        /** Shows the drop. */
        show(): void;
        /**
         * Hides the drop.
         * @param delay Delay hiding the drop.
         */
        hide(delay?: boolean): void;
    }

    type Drop = UIkitFunction<UIkitDropOptions, UIkitDropElement>;

    // Dropdown

    type UIkitDropdownOptions = UIkitDropOptionsBase;

    interface UIkitDropdownElement extends UIkitElementBase {
        /** Shows the dropdown. */
        show(): void;
        /**
         * Hides the dropdown.
         * @param delay Delay hiding the Dropdown.
         */
        hide(delay?: boolean): void;
    }

    type Dropdown = UIkitFunction<UIkitDropdownOptions, UIkitDropdownElement>;

    // Dropnav

    interface UIkitDropnavOptions extends
        Pick<
            UIkitDropOptionsBase,
            | "stretch"
            | "mode"
            | "delayShow"
            | "delayHide"
            | "boundary"
            | "target"
            | "targetX"
            | "targetY"
            | "offset"
            | "animation"
            | "animateOut"
            | "bgScroll"
            | "closeOnScroll"
            | "duration"
            | "container"
        >
    {
        /** Dropdown alignment (left, right, center). */
        align?: UIkitAlign;
        /**	Enable or disable dropbar behavior. */
        dropbar?: boolean;
        /** If set, dropbar will be inserted after the anchor element. */
        dropbarAnchor?: UIkitCssSelector | undefined;
    }

    type Dropnav = UIkitFunction<UIkitDropnavOptions>;

    // Form

    interface UIkitFormOptions {
        /** Value display target. */
        target?: UIkitCssSelector | boolean;
    }

    type FormCustom = UIkitFunction<UIkitFormOptions>;

    // Grid

    interface UIkitGridOptions {
        /** This class is added to items that break into the next row, typically to create margin to the previous row. */
        margin?: string;
        /** This class is added to the first element in each row. */
        firstcolumn?: string;
        /** Enables masonry layout for this grid. */
        masonry?: string | boolean;
        /** Parallax translation value. The value can be in vh, % and px. Falsy disables the parallax effect (default). */
        parallax?: number;
        /** Start offset. The value can be in vh, % and px. It supports basic mathematics operands + and -. The default value of 0 means that the grid's top border and viewport's bottom border intersect. */
        parallaxStart?: string;
        /** End offset. The value can be in vh, % and px. It supports basic mathematics operands + and -. The default value of 0 means that the grid's bottom border and the viewport's top border intersect. */
        parallaxEnd?: string;
        /** With parallax enabled, all columns will reach the bottom at the same time. */
        parallaxJustify?: boolean;
    }

    type Grid = UIkitFunction<UIkitGridOptions>;

    // Height match

    interface UIkitHeightMatchOptions {
        /** Elements that should match. */
        target?: string;
        /**
         * By default only items in the same row will be matched. For example, once grid columns extend to a width of 100%,
         * their heights will no longer be matched. This makes sense, for example, if they stack vertically in narrower viewports.
         */
        row?: boolean;
    }

    type HeightMatch = UIkitFunction<UIkitHeightMatchOptions>;

    // Placeholder height

    type HeightPlaceholder = UIkitFunction<{}>;

    // Height viewport

    interface UIkitHeightViewportOptions {
        /** Subtracts the element's (true) or given element's (CSS Selector) offset top from its height. */
        offsetTop?: boolean | UIkitCssSelector;
        /** Subtracts the height (true) of the sibling that immediately follows the element, the given percentage (Number), Pixel (px) value from element's own height or the given element's height. */
        offsetBottom?: boolean | number | UIkitCssSelector;
        /** Expands the element's height to make a short page fill the viewport. */
        expand?: boolean;
        /** Sets a minimum height. Useful if all children are positioned absolutely. */
        min?: number;
        /** The CSS property to set. (min-height, height, max-height) */
        property?: string;
    }

    type HeightViewport = UIkitFunction<UIkitHeightViewportOptions>;

    // Icon

    interface UIkitIconOptions {
        /** The icon to display. */
        icon?: string;
        /** The icon size ratio. */
        ratio?: number;
    }

    interface UIkitIconElement extends UIkitElementBase {
        /** A JavaScript Promise that will resolve with the added SVG Node. */
        svg: Promise<SVGElement>;
    }

    type Icon = UIkitFunction<UIkitIconOptions, UIkitIconElement> & {
        /** Adds an icon to the library. */
        add(name: string, svg: string): void;
        /** Adds a set of icons to the library. */
        add(contents: { [key: string]: string }): void;
    };

    // Image

    interface UIkitImageOptions {
        /**	The image's src attribute. */
        dataSrc?: string;
        /** Undocumented. */
        dataSrcset?: string | boolean;
        /** The image's sources. This option is used for background images only. The source attributes are passed in key: value; format for a single source. For multiple sources in JSON format. */
        sources?: string;
        /** Enable lazy/eager loading. Set to eager for images within the first visible viewport. */
        loading?: "lazy" | "eager";
        /** The margin is added to the viewport's bounding box, before computing an intersection with the image. The value must be in px or % units. */
        margin?: string;
        /** Undocumented. */
        sizes?: string | boolean;
        /** Undocumented. */
        width?: string | boolean;
        /** Undocumented. */
        height?: string | boolean;
        /** Undocumented. */
        offsetTop?: string;
        /** Undocumented. */
        offsetLeft?: string | number;
        /** A list of targets whose bounding boxes will be used to compute an intersection with the image. Defaults to the image itself. */
        target?: string | boolean;
    }

    type Img = UIkitFunction<UIkitImageOptions>;

    // Inverse

    interface UIkitInverseOptions {
        /** A list of targets that will be checked. */
        target?: UIkitCssSelector;
        /** A selector that needs to match for a color to be set, otherwise the color is removed. If omitted, color will always be set. */
        selActive?: UIkitCssSelector;
    }

    type Inverse = UIkitFunction<UIkitInverseOptions>;

    // Leader

    interface UIkitLeaderOptions {
        /**	Optional fill character. */
        fill?: string;
        /** Condition for the space filling - a width as integer (e.g. 640) or a breakpoint (e.g. @s, @m, @l, @xl) or any valid media query (e.g. (min-width: 900px)). */
        media?: boolean | number | string;
    }

    type Leader = UIkitFunction<UIkitLeaderOptions>;

    // Margin

    interface UIkitMarginOptions {
        /** This class is added to items that break into the next row, typically to create a margin for the previous row. */
        margin?: string;
        /** This class is added to the first element in each row. */
        firstColumn?: string;
    }

    type Margin = UIkitFunction<UIkitMarginOptions>;

    // Modal

    interface UIkitModalOptions {
        /** Close the modal when the Esc key is pressed. */
        escClose?: boolean;
        /** Close the modal when the background is clicked. */
        bgClose?: boolean;
        /** Stack modals, when more than one is open. By default, the previous modal will be hidden. */
        stack?: boolean;
        /** Define a target container via a selector to specify where the modal should be appended in the DOM. Setting it to false will prevent this behavior. */
        container?: UIkitElement | boolean;
        /** Class to add to <html> when modal is active */
        clsPage?: string;
        /** Class of the element to be considered the panel of the modal. */
        clsPanel?: string;
        /** CSS selector for all elements that should trigger the closing of the modal */
        selClose?: string;
    }

    interface UIkitModalElement extends UIkitElementBase {
        /** Shows the Modal. */
        show(): void;
        /** Hides the Modal. */
        hide(): void;
    }

    interface UIkitDialogOptions extends UIkitModalOptions {
        i18n: {
            ok: string;
            cancel: string;
        };
    }

    type UIkitDialogResult<T = void> = Promise<T> & {
        dialog: UIkitElementBase;
    };

    type Modal = UIkitFunction<UIkitModalOptions, UIkitModalElement> & {
        /** Show an alert box with one button. */
        alert(message: string, options?: UIkitDialogOptions): UIkitDialogResult<void>;
        /**
         * Show a confirm dialog with your message and two buttons.
         * @returns A promise that will resolve, or rejects if the modal is dismissed or cancelled.
         */
        confirm(message: string, options?: UIkitDialogOptions): UIkitDialogResult<void>;
        /**
         * Show a dialog asking for a text input.
         * @param content The message content.
         * @param value The default value.
         * @param options The modal options.
         * @returns The value entered, or null if dismissed or cancelled.
         */
        prompt(content: string, value?: string, options?: UIkitDialogOptions): UIkitDialogResult<string | null>;
        /**
         * Show dialog with any HTML content.
         * @param content The message content.
         * @param options The modal options.
         */
        dialog(content: string, options?: UIkitDialogOptions): UIkitDialogResult<void>;
        /** The default button labels. */
        i18n: UIkitDialogOptions["i18n"];
    };

    // Nav

    interface UIkitNavOptions {
        /** The element(s) to toggle. */
        targets?: UIkitCssSelector;
        /** The toggle element(s). */
        toggle?: UIkitCssSelector;
        /** The content element(s). */
        content?: UIkitCssSelector;
        /** Allow all items to be closed. */
        collapsible?: boolean;
        /** Allow multiple open items. */
        multiple?: boolean;
        /** The transition to use. */
        transition?: string;
        /** Space-separated names of animations. Comma-separated for animation out. */
        animation?: string | boolean;
        /** The animation duration in milliseconds. */
        duration?: number;
    }

    interface UIkitNavElement extends UIkitElementBase {
        /**
         * Toggles the content pane.
         * @param index Nav pane to toggle. 0 based index.
         * @param animate Suppress opening animation by passing false.
         */
        toggle(index: string | number | UIkitNode, animate?: boolean): void;
    }

    type Nav = UIkitFunction<UIkitNavOptions, UIkitNavElement>;

    // Navbar

    interface UIkitNavbarOptions {
        /** Dropdown alignment (left, right, center). */
        align?: UIkitAlign;
        /**	Enable or disable dropbar behavior. */
        dropbar?: boolean;
        /** If set, dropbar will be inserted after the anchor element. */
        dropbarAnchor?: UIkitCssSelector;
        /** The dropbar transparent mode (behind, remove). */
        dropbarTransparentMode?: "behind" | "remove" | boolean;
        /** Stretch dropdown on both (true) or given axis (x, y). */
        stretch?: UIkitStretch;
        /** Comma-separated list of dropdown trigger behavior modes (click, hover). */
        mode?: UIkitClickHoverMode;
        /** Delay time in hover mode before a dropdown is shown in ms */
        delayShow?: number;
        /** Delay time in hover mode before a dropdown is hidden in ms. */
        delayHide?: number;
        /** The area the dropdown can't exceed causing it to flip and shift. By default, the nearest scrolling ancestor. */
        boundary?: UIkitCssSelector;
        /** The element the dropdown is positioned to (true for window). */
        target?: UIkitCssSelector | boolean;
        /** The element's X axis the drop is positioned to (true for window). */
        targetX?: boolean | UIkitCssSelector;
        /** The element's Y axis the drop is positioned to (true for window). */
        targetY?: boolean | UIkitCssSelector;
        /** The dropdown offset. */
        offset?: number;
        /** Space-separated names of animations. Comma-separated for animation out. */
        animation?: string;
        /** Use animation when closing the drop. */
        animateOut?: boolean;
        /** Allow background scrolling while dropdown is opened. */
        bgScroll?: boolean;
        /** Close the dropdown on scrolling a parent scroll container. */
        closeOnScroll?: boolean;
        /** The animation duration. */
        duration?: number;
        /** Define a target container via a selector to specify where the drop should be appended in the DOM. */
        container?: UIkitElement | boolean;
        /** Undocumented. */
        "boundary-align"?: boolean;
    }

    type Navbar = UIkitFunction<UIkitNavbarOptions>;

    // Ofcanvas

    interface UIkitOffcanvasOptions {
        /** Off-canvas animation mode (slide, reveal, push or none). */
        mode?: "slide" | "reveal" | "push" | "none";
        /** Flip off-canvas to the right side. */
        flip?: boolean;
        /** Display the off-canvas together with an overlay. */
        overlay?: boolean;
        /** Close the off-canvas when the Esc key is pressed. */
        escClose?: boolean;
        /** Close the off-canvas when the background is clicked. */
        bgClose?: boolean;
        /** Define a target container via a selector to specify where the off-canvas should be appended in the DOM. Setting it to false will prevent this behavior. */
        container?: UIkitElement | boolean;
    }

    interface UIkitOffcanvasElement extends UIkitElementBase {
        /** Shows the Offcanvas. */
        show(): void;
        /** Hides the Offcanvas. */
        hide(): void;
    }

    type Offcanvas = UIkitFunction<UIkitOffcanvasOptions, UIkitOffcanvasElement>;

    // Scroll
    interface UIkitScrollOptions {
        /** Offset added to scroll top. */
        offset?: number;
    }

    interface UIkitScrollElement extends UIkitElementBase {
        /**
         * Scroll to the given element.
         * @param el The element to scroll to.
         */
        scrollTo(el: string | UIkitNode): void;
    }

    type Scroll = UIkitFunction<UIkitScrollOptions, UIkitScrollElement>;

    // Scrollspy

    interface UIkitScrollspyOptionsBase {
        /** Class to toggle when the element enters/leaves viewport. */
        cls?: string;
        /**	Target to apply the scrollspy to. Defaults to the element itself. */
        target?: boolean | UIkitCssSelector;
    }

    interface UIkitScrollspyOptions extends UIkitScrollspyOptionsBase {
        /** Hides the element while out of view. */
        hidden?: boolean;
        /** The margin is added to the viewport's bounding box, before computing an intersection with the element. The value must be in px or % units. */
        margin?: string;
        /** Applies the cls class every time the element is in view. */
        repeat?: boolean;
        /** Delay time in ms. */
        delay?: number;
        /** Undocumented. */
        "offset-top"?: number;
        /** Undocumented. */
        "offset-left"?: number;
    }

    interface UIkitScrollspyNavOptions extends UIkitScrollspyOptionsBase {
        /** Target to apply the class to. Defaults to the element itself. */
        closest?: boolean | UIkitCssSelector;
        /** Adds the Scroll component to its links. */
        scroll?: boolean;
        /** Offset added to scroll top. */
        offset?: number;
        /** Undocumented. */
        overflow?: boolean;
    }

    type Scrollspy = UIkitFunction<UIkitScrollspyOptions>;
    type ScrollspyNav = UIkitFunction<UIkitScrollspyNavOptions>;

    // Sticky

    interface UIkitStickyOptions {
        /** The position the element should be stuck to. */
        position?: "top" | "bottom";
        /**
         * Start offset. The value can be in vh, % and px. It supports basic mathematics operands + and -.
         * The default value of 0 means that the element's top border and viewport's top border intersect.
         * A CSS Selector will set the start to the selected element's bottom border and the element's top border.
         */
        start?: number | string;
        /**
         * End offset. The value can be in vh, % and px. It supports basic mathematics operands + and -.
         * A value of 0 means that the element's top border and viewport's top border intersect, which would cause the
         * element not to be sticky at all if the start is also set to 0. A CSS Selector will set the end to the selected
         * element's bottom and the element's bottom border. false will make the element stick until the end of the page.
         * true selects the parent element.
         */
        end?: boolean | number | string;
        /**	The offset the Sticky should be fixed to. The value can be in vh, % and px. It supports basic mathematics operands + and -. */
        offset?: number | string;
        /** The offset the Sticky should be fixed to if the element overflows the viewport. The value can be in vh, % and px. It supports basic mathematics operands + and -. */
        overflowEnd?: number;
        /** Flip the Sticky's position option if the element overflows the viewport and disable overflow scrolling. */
        overflowFlip?: boolean;
        /** The animation to use when the element becomes sticky. */
        animation?: string | boolean;
        /** The active class. */
        clsActive?: string;
        /** The inactive class. */
        clsInactive?: string;
        /** Only show sticky element when scrolling up. */
        showOnUp?: boolean;
        /** Condition for the active status - a width as integer (e.g. 640) or a breakpoint (e.g. @s, @m, @l, @xl) or any valid media query (e.g. (min-width: 900px)). */
        media?: number | string | boolean;
        /**
         * Initially make sure that the Sticky element is not over a referenced element via the page's location hash.
         * The offset is defined by how far the element will be above the referenced element. false will disable this behavior.
         */
        targetOffset?: boolean | number;
        /** Undocumented. */
        "show-on-up"?: boolean;
        /** Undocumented. */
        "width-element"?: string | boolean;
    }

    type Sticky = UIkitFunction<UIkitStickyOptions>;

    // Svg

    interface UIkitSvgOptions {
        /**	The SVG source URL. If a location hash is present, only the <symbol> of the SVG with the given ID is shown. */
        src?: string;
        /** Animate all elements with the stroke attribute in the SVG. */
        strokeAnimation?: boolean;
    }

    interface UIkitSvgElement extends UIkitElementBase {
        /** A JavaScript Promise that will resolve with the added SVG Node. */
        svg: Promise<SVGElement>;
    }

    type Svg = UIkitFunction<UIkitSvgOptions, UIkitSvgElement>;

    // Switcher

    interface UIkitSwitcherOptions {
        /**	Related items container. By default succeeding elements with class 'uk-switcher'. */
        connect?: UIkitCssSelector;
        /** Select the clickable elements which trigger content switching. */
        toggle?: UIkitCssSelector;
        /** Related nav container. By default, nav items are found in related items container only. */
        itemNav?: UIkitCssSelector;
        /**	Active index on init. Providing a negative number indicates a position starting from the end of the set. */
        active?: number;
        /**	Space-separated names of animations. Comma-separated for animation out. */
        animation?: string;
        /** The animation duration. */
        duration?: number;
        /** Use swiping. */
        swiping?: boolean;
        /**	Selection follows focus automatically. */
        followFocus?: boolean;
    }

    interface UIkitSwitcherElement extends UIkitElementBase {
        /**
         * Shows the Switcher item with given index.
         * @param index Switcher item to show. 0 based index.
         */
        show(index: string | number | UIkitNode): void;
    }

    type Switcher = UIkitFunction<UIkitSwitcherOptions, UIkitSwitcherElement>;

    // Tab
    interface UIkitTabOptions {
        /** Related item's container. By default, this is the next element with the 'uk-switcher' class. */
        connect?: UIkitCssSelector;
        /** The toggle selector, which triggers content switching on click. */
        toggle?: UIkitCssSelector;
        /** Active index on init. Providing a negative number indicates a position starting from the end of the set. */
        active?: number;
        /** Space-separated names of animations. Comma-separated for animation out. */
        animation?: string;
        /**	The animation duration. */
        duration?: number;
        /**	Use swiping. */
        swiping?: boolean;
        /** 	When to switch to horizontal mode - a width as integer (e.g. 640) or a breakpoint (e.g. @s, @m, @l, @xl) or any valid media query (e.g. (min-width: 900px)). */
        media?: number | string;
    }

    interface UIkitTabElement extends UIkitElementBase {
        /**
         * Shows the Tab item with the given index.
         * @param index Tab item to show. 0 based index.
         */
        show(index: string | number | UIkitNode): void;
    }

    type Tab = UIkitFunction<UIkitTabOptions, UIkitTabElement>;

    // Toggle

    interface UIkitToggleOptions {
        /** CSS selector of the element(s) to toggle. */
        target?: UIkitElement;
        /** Comma-separated list of trigger behaviour modes. (hover, click, media) */
        mode?: string;
        /** The class that is being toggled. Defaults to the hidden attribute. */
        cls?: string;
        /**	In media mode, the breakpoint that triggers the toggle - a width as integer (e.g. 640) or a breakpoint (e.g. @s, @m, @l, @xl) or any valid media query (e.g. (min-width: 900px)). */
        media?: number | string;
        /**	Space-separated names of animations. Comma-separated for animation out. */
        animation?: string;
        /** Animation duration in milliseconds. */
        duration?: number;
        /** Toggle the targets successively. */
        queued?: boolean;
    }

    interface UIkitToggleElement extends UIkitElementBase {
        /** Toggles the Toggle's target. */
        toggle(): void;
    }

    type Toggle = UIkitFunction<UIkitToggleOptions, UIkitToggleElement>;

    // Video

    interface UIkitVideoOptions {
        /**	The video automatically plays/pauses as it's visible/hidden on the page. Additionally, the video can play when its in the viewport or hovered with the mouse (inview, hover). */
        autoplay?: boolean | string;
        /** Automatically mute YouTube or Vimeo videos */
        automute?: boolean;
    }

    type Video = UIkitFunction<UIkitVideoOptions>;

    // Components

    // Countdown

    interface UIkitCountdownOptions {
        /** Any string parsable by Date.parse. */
        date?: string | Date | boolean | number;
        /** Reload page after countdown expires. Initially expired countdowns won't reload the page. */
        reload?: boolean;
    }

    interface UIkitCountdownElement extends UIkitElementBase {
        /** Starts the countdown. */
        start(): void;
        /** Stops the countdown. */
        stop(): void;
    }

    type Countdown = UIkitFunction<UIkitCountdownOptions, UIkitCountdownElement>;

    // Filter

    interface UIkitFilterOptions {
        /** The targeted list on which to apply the filter to. */
        target?: string;
        /** A selector for the initially active filter controls. */
        selActive?: string | boolean;
        /** Animation mode (slide, fade, delayed-fade or false). */
        animation?: "slide" | "fade" | "delayed-fade" | false;
        /** Animation duration in milliseconds. */
        duration?: number;
    }

    type Filter = UIkitFunction<UIkitFilterOptions>;

    // Lightbox and panel options

    interface UIkitLightboxOptionsBase {
        /** Lightbox animation mode (slide, fade or scale). */
        animation?: string;
        /** Lightbox autoplays. */
        autoplay?: boolean;
        /** The delay between switching slides in autoplay mode. */
        autoplayInterval?: number;
        /** Pause autoplay mode on hover. */
        pauseOnHover?: boolean;
        /** Lightbox videos autoplay. A value of inline will autoplay the video, make it muted and without controls. */
        videoAutoplay?: boolean;
        /** Lightbox shows counter. */
        counter?: boolean;
        /** Lightbox navigation (dotnav, thumbnav). */
        nav?: "dotnav" | "thumbnav" | boolean;
        /** Lightbox shows slidenav controls. */
        slidenav?: boolean;
        /** The initial item to show. (zero-based). */
        index?: number;
        /**	Delay time before controls fade out in ms. Setting 0 will prevent hiding controls. */
        delayControls?: number;
    }

    // Lightbox panel

    interface UIkitLightboxPanelOptions extends UIkitLightboxOptionsBase {
        /**	The animation velocity (pixel/ms). */
        velocity?: number;
        /** The number of items to preload. (left and right of the currently active item). */
        preload?: number;
        /**	An array of items to display, e.g. [{source: 'images/size1.jpg', caption: '900x600'}] */
        items?: object[];
        /** The template string. */
        template?: string;
        /** Toggle selector - opens the Lightbox Panel upon click. */
        toggle?: UIkitCssSelector;
        /** Define a target container via a selector to specify where the Lightbox should be appended in the DOM. */
        container?: string;
    }

    interface UIkitLightboxPanelElement extends UIkitElementBase {
        /**
         * Shows the Lightbox Panel and item.
         * @param index Lightbox item to show. 0 based index.
         */
        show(index: number): void;
        /** Hides the Lightbox Panel. */
        hide(): void;
        /** Starts the Lightbox's autoplay. */
        startAutoplay(): void;
        /** Stops the Lightbox's autoplay. */
        stopAutoplay(): void;
    }

    type LightboxPanel = (optionsOrElement: UIkitLightboxPanelOptions | UIkitElement) => UIkitLightboxPanelElement;

    // Lightbox

    interface UIkitLightboxOptions extends UIkitLightboxOptionsBase {
        /** Toggle selector - opens the Lightbox Panel upon click. */
        toggle?: UIkitCssSelector;
    }

    interface UIkitLightboxElement extends UIkitElementBase {
        show(index: number): void;
        hide(): void;
    }

    type Lightbox = UIkitFunction<UIkitLightboxOptions, UIkitLightboxElement>;

    // Notification

    interface UIkitNotificationOptions {
        /**	Notification message to show. */
        message?: string;
        /** Notification status color. */
        status?: string | "primary" | "success" | "warning" | "danger";
        /** Visibility duration until a notification disappears. If set to 0, notification will not hide automatically. */
        timeout?: number;
        /** Useful, if you want to close all notifications in a specific group. */
        group?: string;
        /** Display corner. */
        pos?: "top-left" | "top-center" | "top-right" | "bottom-left" | "bottom-center" | "bottom-right";
    }

    interface UIkitNotificationElement extends UIkitElementBase {
        /**
         * Closes the notification.
         * @param immediate Transition the notification out.
         */
        close(immediate?: boolean): void;
    }

    interface Notification {
        (options: UIkitNotificationOptions): UIkitNotificationElement;
        (
            message: string,
            optionsOrStatus?: UIkitNotificationOptions | UIkitNotificationOptions["status"],
        ): UIkitNotificationElement;
        /**
         * Closes all notifications.
         * @param group The optional group to filter by.
         * @param immediate Transition the notification out.
         */
        closeAll(group?: string, immediate?: boolean): void;
    }

    // Parallax

    interface UIkitParallaxOptions {
        /** Animation easing during scrolling */
        easing?: number;
        /** Element dimension reference for animation duration. */
        target?: UIkitCssSelector;
        /** Start offset. The value can be in vh, % and px. It supports basic mathematics operands + and -. The default value of 0 means that the target's top border and viewport's bottom border intersect. */
        start?: number | string;
        /** End offset. The value can be in vh, % and px. It supports basic mathematics operands + and -. The default value of 0 means that the target's bottom border and the viewport's top border intersect. */
        end?: number | string;
        /** Condition for the active status - a width as integer (e.g. 640) or a breakpoint (e.g. @s, @m, @l, @xl) or any valid media query (e.g. (min-width: 900px)). */
        media?: boolean | number | string;
    }

    type Parallax = UIkitFunction<UIkitParallaxOptions>;

    // Slider

    interface UIkitSliderOptions {
        /** Slider autoplays. */
        autoplay?: boolean;
        /** The delay between switching slides in autoplay mode. */
        autoplayInterval?: number;
        /** Center the active slide. */
        center?: boolean;
        /** Enable pointer dragging. */
        draggable?: boolean;
        /** The animation easing (CSS timing functions or cubic-bezier). */
        easing?: string;
        /** Disable infinite sliding. */
        finite?: boolean;
        /** Slider item to show. 0 based index. */
        index?: number;
        /** Slider item/items to apply the transition active class to (all, first). */
        active?: string;
        /** Pause autoplay mode on hover. */
        pauseOnHover?: boolean;
        /** Slide in sets. */
        sets?: boolean;
        /** The animation velocity (pixel/ms). */
        velocity?: number;
    }

    interface UIkitSliderElement extends UIkitElementBase {
        /**
         * Shows the slider item.
         * @param index The item to show. (zero-based).
         */
        show(index: number): void;
        /** Starts the slider autoplay. */
        startAutoplay(): void;
        /** Stops the slider autoplay. */
        stopAutoplay(): void;
    }

    type Slider = UIkitFunction<UIkitSliderOptions, UIkitSliderElement>;

    // Slideshow

    interface UIkitSlideshowOptions {
        /** Slideshow animation mode (slide, fade, scale, pull or push). */
        animation?: "slide" | "fade" | "scale" | "pull" | "push";
        /** Slideshow autoplays. */
        autoplay?: boolean;
        /**	The delay between switching slides in autoplay mode. */
        autoplayInterval?: number;
        /**	Enable pointer dragging. */
        draggable?: boolean;
        /** The animation easing (CSS timing functions or cubic-bezier). */
        easing?: string;
        /** Disable infinite sliding. */
        finite?: boolean;
        /** Pause autoplay mode on hover. */
        pauseOnHover?: boolean;
        /**	Slideshow item to show. 0 based index. */
        index?: number;
        /** The animation velocity (pixel/ms). */
        velocity?: number;
        /** The ratio. (false prevents height adjustment) */
        ratio?: string | number;
        /** The minimum height. */
        minHeight?: boolean | number;
        /** The maximum height. */
        maxHeight?: boolean | number;
    }

    interface UIkitSlideshowElement extends UIkitElementBase {
        /**
         * Shows the slideshow item.
         * @param index The item to show. 0 based index.
         */
        show(index: number): void;
        /** Starts the slideshow autoplay. */
        startAutoplay(): void;
        /** Stops the slideshow autoplay. */
        stopAutoplay(): void;
    }

    type Slideshow = UIkitFunction<UIkitSlideshowOptions, UIkitSlideshowElement>;

    /** @deprecated */
    type UIkitSlidershowElement = UIkitSlideshowElement;
    /** @deprecated */
    type Slidershow = Slideshow;

    // Sortable

    interface UIkitSortableOptions {
        /** The group. */
        group?: string;
        /** Animation mode (slide, false). */
        animation?: boolean | string;
        /** Animation duration in milliseconds. */
        duration?: number;
        /** Mouse move threshold before dragging starts. */
        threshold?: number;
        /** The item class. */
        clsItem?: string;
        /** The placeholder class. */
        clsPlaceholder?: string;
        /** The ghost class. */
        clsDrag?: string;
        /** The body's dragging class. */
        clsDragState?: string;
        /** The list's class. */
        clsBase?: string;
        /**	Disable dragging on elements with this class. */
        clsNoDrag?: string;
        /** The empty list class. */
        clsEmpty?: string;
        /** The ghost's custom class. */
        clsCustom?: string;
        /** The handle selector. */
        handle?: string;
    }

    type Sortable = UIkitFunction<UIkitSortableOptions>;

    // Tooltip

    interface UIkitTooltipOptions {
        /** Tooltip text. */
        title?: string;
        /**	Tooltip position. */
        pos?: "top" | "top-left" | "top-right" | "bottom" | "bottom-left" | "bottom-right" | "left" | "right";
        /** Tooltip offset. */
        offset?: number | boolean;
        /**	Space-separated names of animations. Comma-separated for animation out. */
        animation?: string;
        /**	The animation duration. */
        duration?: number;
        /** The show delay. */
        delay?: number;
        /** The active class. */
        cls?: string;
        /** Define a target container via a selector to specify where the tooltip should be appended in the DOM. */
        container?: UIkitElement;
    }

    interface UIkitTooltipElement extends UIkitElementBase {
        /** Shows the Tooltip. */
        show(): void;
        /** Hides the Tooltip. */
        hide(): void;
    }

    type Tooltip = UIkitFunction<UIkitTooltipOptions, UIkitTooltipElement>;

    // Upload

    interface UIkitUploadOptions {
        /**	The request url. */
        url?: string;
        /** Allow multiple files to be uploaded. */
        multiple?: boolean;
        /** The name parameter. */
        name?: string;
        /** Additional parameters. */
        params?: object;
        /** File name filter. (eg. *.png). */
        allow?: string | boolean;
        /** File MIME type filter. (eg. image/*) */
        mime?: string | boolean;
        /**	Number of files that will be uploaded simultaneously. */
        concurrent?: number;
        /**	The expected response data type (xml, json, script, or html) */
        type?: string;
        /**	The request method */
        method?: string;
        /** Invalid MIME type message. */
        invalidMime?: string;
        /** Invalid name message. */
        invalidName?: string;
        /** The class used when dragging. */
        clsDragover?: string;
        /** The abort callback. */
        abort?: object;
        /** The beforeAll callback. */
        beforeAll?: object;
        /**	The beforeSend callback. */
        beforeSend?: object;
        /**	The complete callback. */
        complete?: object;
        /** The completeAll callback. */
        completeAll?: object;
        /** The error callback. */
        error?: object;
        /** The load callback. */
        load?: object;
        /** The loadEnd callback. */
        loadEnd?: object;
        /** The loadStart callback. */
        loadStart?: object;
        /** The progress callback. */
        progress?: object;
        /**	The fail callback. If the name or MIME type is invalid. */
        fail?: object;
    }

    type Upload = UIkitFunction<UIkitUploadOptions>;

    // Core

    const accordion: Accordion;
    const alert: Alert;
    const cover: Cover;
    const drop: Drop;
    const dropdown: Dropdown;
    const dropnav: Dropnav;
    const formCustom: FormCustom;
    const grid: Grid;
    const heightMatch: HeightMatch;
    const heightPlaceholder: HeightPlaceholder;
    const heightViewport: HeightViewport;
    const icon: Icon;
    const img: Img;
    const inverse: Inverse;
    const leader: Leader;
    const margin: Margin;
    const modal: Modal;
    const nav: Nav;
    const navbar: Navbar;
    const offcanvas: Offcanvas;
    const scroll: Scroll;
    const scrollspy: Scrollspy;
    const scrollspyNav: ScrollspyNav;
    const sticky: Sticky;
    const svg: Svg;
    const switcher: Switcher;
    const tab: Tab;
    const toggle: Toggle;
    const video: Video;

    // Components
    const countdown: Countdown;
    const filter: Filter;
    const lightbox: Lightbox;
    const lightboxPanel: LightboxPanel;
    const notification: Notification;
    const parallax: Parallax;
    const slider: Slider;
    const slideshow: Slideshow;
    const sortable: Sortable;
    const tooltip: Tooltip;
    const upload: Upload;
}

export default UIkit;
