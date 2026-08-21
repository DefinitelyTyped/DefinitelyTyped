/// <reference types="jquery" />

type FancyBoxInteractionTypes = "close" | "next" | "nextOrClose" | "toggleControls" | "zoom" | false;

type FancyBoxInteractionMethod = (slide?: FancyBoxSlide, event?: JQuery.Event) => FancyBoxInteractionTypes;

type FancyBoxInteractions = FancyBoxInteractionTypes | FancyBoxInteractionMethod;

interface FancyBoxPlainObject {
    [key: string]: string | number | boolean | (() => void);
}

interface FancyBoxGroupItemWithFilledProps extends FancyBoxGroupItem {
    $thumb?: JQuery | undefined;
    thumb?: any;
    contentType?: string | undefined;
    index?: number | undefined;
}

interface FancyBoxGroupItem {
    src: string;
    type?: "image" | "inline" | "ajax" | "iframe" | "html" | undefined;
    opts?: FancyBoxOptions | undefined;
}

interface FancyBoxSlide extends FancyBoxGroupItemWithFilledProps {
    $content?: JQuery | undefined;
    $image?: JQuery | undefined;
    $slide?: JQuery | undefined;
    $spinner?: JQuery | undefined;
    $iframe?: JQuery<HTMLIFrameElement> | undefined;
    forcedDuration?: number | undefined;
    height: number;
    isComplete: boolean;
    isLoaded: boolean;
    isLoading: boolean;
    isRevealed: boolean;
    contentSource?: string | undefined;
    pos: number;
    width: number;
}

interface FancyBoxImageOption {
    /**
     * Wait for images to load before displaying
     *   true  - wait for image to load and then display;
     *   false - display thumbnail and load the full-sized image over top,
     *               requires predefined image dimensions (`data-width` and `data-height` attributes)
     */
    preload: boolean;
}

interface FancyBoxAjaxOption {
    /**
     * Object containing settings for ajax request
     */
    settings: JQueryAjaxSettings;
}

interface FancyBoxIframeSettings {
    /**
     * Iframe template
     */
    tpl?: string | undefined;
    /**
     * Preload iframe before displaying it
     * This allows to calculate iframe content width and height
     * (note: Due to "Same Origin Policy", you can't get cross domain data).
     */
    preload?: boolean | undefined;
    /**
     * Custom CSS styling for iframe wrapping element
     * You can use this to set custom iframe dimensions
     */
    css?: FancyBoxPlainObject | undefined;
    /**
     * Iframe tag attributes
     */
    attr?: FancyBoxPlainObject | undefined;
}

interface FancyBoxVideoOptions {
    tpl?: string | undefined;
    format?: string | undefined;
    autoStart?: boolean | undefined;
}

interface FancyBoxButtonTemplateOptions {
    download?: string | undefined;
    zoom?: string | undefined;
    close?: string | undefined;
    arrowLeft?: string | undefined;
    arrowRight?: string | undefined;
    /**
     * This small close button will be appended to your html/inline/ajax content by default,
     * if "smallBtn" option is not set to false
     */
    smallBtn?: string | undefined;
}

interface FancyBoxTouchOptions {
    /**
     *  Allow to drag content vertically
     */
    vertical?: boolean | undefined;
    /**
     * Continue movement after releasing mouse/touch when panning
     */
    momentum?: boolean | undefined;
}

interface FancyThumbsOptions {
    /**
     * Display thumbnails on opening
     */
    autoStart?: boolean | undefined;
    /**
     * Hide thumbnail grid when closing animation starts
     */
    hideOnClose?: boolean | undefined;
    /**
     * Container is injected into this element
     */
    parentEl?: string | undefined;
    /**
     * Vertical (y) or horizontal (x) scrolling
     */
    axis?: "x" | "y" | undefined;
}

interface FancyBoxInternationalizatioObject {
    CLOSE?: string | undefined;
    NEXT?: string | undefined;
    PREV?: string | undefined;
    ERROR?: string | undefined;
    PLAY_START?: string | undefined;
    PLAY_STOP?: string | undefined;
    FULL_SCREEN?: string | undefined;
    THUMBS?: string | undefined;
    DOWNLOAD?: string | undefined;
    SHARE?: string | undefined;
    ZOOM?: string | undefined;
}

interface FancyBoxInternationalizationOptions {
    [key: string]: FancyBoxInternationalizatioObject;
}

interface FancyBoxButtonTypes {
    "zoom": string;
    "share": string;
    "slideShow": string;
    "fullScreen": string;
    "download": string;
    "thumbs": string;
    "close": string;
}

interface FancyBoxOptions {
    /**
     * Close existing modals
     * Set this to false if you do not need to stack multiple instances
     */
    closeExisting?: boolean | undefined;
    /**
     * Enable infinite gallery navigation
     */
    loop?: boolean | undefined;
    /**
     * Horizontal space between slides
     */
    gutter?: number | undefined;
    /**
     * Enable keyboard navigation
     */
    keyboard?: boolean | undefined;
    /**
     * Should allow caption to overlap the content
     */
    preventCaptionOverlap?: boolean | undefined;
    /**
     * Should display navigation arrows at the screen edges
     */
    arrows?: boolean | undefined;
    /**
     * Should display counter at the top left corner
     */
    infobar?: boolean | undefined;
    /**
     * Should display close button (using `btnTpl.smallBtn` template) over the content
     * Can be true, false, "auto"
     * If "auto" - will be automatically enabled for "html", "inline" or "ajax" items
     */
    smallBtn?: boolean | "auto" | undefined;
    /**
     * Should display toolbar (buttons at the top)
     * Can be true, false, "auto"
     * If "auto" - will be automatically hidden if "smallBtn" is enabled
     */
    toolbar?: boolean | "auto" | undefined;
    /**
     * What buttons should appear in the top right corner.
     * Buttons will be created using templates from `btnTpl` option
     * and they will be placed into toolbar (class="fancybox-toolbar"` element)
     */
    buttons?: Array<keyof FancyBoxButtonTypes> | undefined;
    /**
     * Detect "idle" time in seconds
     */
    idleTime?: number | undefined;
    /**
     * Disable right-click and use simple image protection for images
     */
    protect?: boolean | undefined;
    /**
     * Shortcut to make content "modal" - disable keyboard navigtion, hide buttons, etc
     */
    modal?: boolean | undefined;
    image?: FancyBoxImageOption | undefined;
    ajax?: FancyBoxAjaxOption | undefined;
    iframe?: FancyBoxIframeSettings | undefined;
    /**
     * For HTML5 video only
     */
    video?: FancyBoxVideoOptions | undefined;
    /**
     * Default content type if cannot be detected automatically
     */
    defaultType?: "image" | "inline" | "ajax" | "iframe" | "html" | undefined;
    /**
     * Open/close animation type
     * Possible values:
     * false                    - disable
     * "zoom"               - zoom images from/to thumbnail
     * "fade"
     * "zoom-in-out"
     */
    animationEffect?: boolean | "zoom" | "fade" | "zoom-in-out" | undefined;
    /**
     * Duration in ms for open/close animation
     */
    animationDuration?: number | undefined;
    /**
     * Should image change opacity while zooming
     * If opacity is "auto", then opacity will be changed if image and thumbnail have different aspect ratios
     */
    zoomOpacity?: "auto" | boolean | undefined;
    /**
     * Transition effect between slides
     * Possible values:
     * false
     * "fade"
     * "slide"
     * "circular"
     * "tube"
     * "zoom-in-out"
     * "rotate"
     */
    transitionEffect?: "fade" | "slide" | "circular" | "tube" | "zoom-in-out" | "rotate" | boolean | undefined;
    /**
     * Duration in ms for transition animation
     */
    transitionDuration?: number | undefined;
    /**
     * Custom CSS class for slide element
     */
    slideClass?: string | undefined;
    /**
     * Custom CSS class for layout
     */
    baseClass?: string | undefined;
    /**
     * Base template for layout
     */
    baseTpl?: string | undefined;
    /**
     * Loading indicator template
     */
    spinnerTpl?: string | undefined;
    /**
     * Error message template
     */
    errorTpl?: string | undefined;
    /**
     * Button templates
     */
    btnTpl?: FancyBoxButtonTemplateOptions | undefined;
    /**
     * Container is injected into this element
     */
    parentEl?: string | undefined;
    /**
     * Hide browser vertical scrollbars; use at your own risk
     */
    hideScrollbar?: boolean | undefined;
    /**
     * Try to focus on the first focusable element after opening
     */
    autoFocus?: boolean | undefined;
    /**
     * Put focus back to active element after closing
     */
    backFocus?: boolean | undefined;
    /**
     * Do not let user to focus on element outside modal content
     */
    trapFocus?: boolean | undefined;
    fullScreen?: { autostart: boolean } | undefined;
    /**
     * Set `touch: false` to disable panning/swiping
     */
    touch?: FancyBoxTouchOptions | false | undefined;
    /**
     * Hash value when initializing manually,
     * set `false` to disable hash change
     */
    hash?: any;
    /**
     * Customize or add new media types
     * Example:
     * media : {
     *   youtube : {
     *     params : {
     *       autoplay : 0
     *     }
     *   }
     * }
     */
    media?: FancyBoxPlainObject | undefined;
    slideShow?: { autoStart?: boolean | undefined; speed?: number | undefined } | undefined;
    thumbs?: FancyThumbsOptions | undefined;
    /**
     * Use mousewheel to navigate gallery
     * If 'auto' - enabled for images only
     */
    wheel?: "auto" | false | undefined;
    /**
     * When instance has been initialized
     */
    onInit?(instance: FancyBoxInstance): void;
    /**
     * Before the content of a slide is being loaded
     */
    beforeLoad?(instance: FancyBoxInstance, current: FancyBoxSlide): void;
    /**
     * When the content of a slide is done loading
     */
    afterLoad?(instance: FancyBoxInstance, current: FancyBoxSlide): void;
    /**
     * Before open animation starts
     */
    beforeShow?(instance: FancyBoxInstance, current: FancyBoxSlide): void;
    /**
     * When content is done loading and animating
     */
    afterShow?(instance: FancyBoxInstance, current: FancyBoxSlide): void;
    /**
     * Before the instance attempts to close. Return false to cancel the close.
     */
    beforeClose?(instance: FancyBoxInstance, current: FancyBoxSlide): void;
    /**
     * After instance has been closed
     */
    afterClose?(instance: FancyBoxInstance, current: FancyBoxSlide): void;
    /**
     * When instance is brought to front
     */
    onActivate?(instance: FancyBoxInstance): void;
    /**
     * When other instance has been activated
     */
    onDeactivate?(instance: FancyBoxInstance): void;
    /**
     * Clicked on the content
     */
    clickContent?: FancyBoxInteractions | undefined;
    /**
     * Clicked on the slide
     */
    clickSlide?: FancyBoxInteractions | undefined;
    /**
     * Clicked on the background (backdrop) element;
     * if you have not changed the layout, then most likely you need to use `clickSlide` option
     */
    clickOutside?: FancyBoxInteractions | undefined;
    /**
     * Same as previous two, but for double click
     */
    dblclickContent?: FancyBoxInteractions | undefined;
    /**
     * Same as previous two, but for double click
     */
    dblclickSlide?: FancyBoxInteractions | undefined;
    /**
     * Same as previous two, but for double click
     */
    dblclickOutside?: FancyBoxInteractions | undefined;
    lang?: string | undefined;
    i18n?: FancyBoxInternationalizationOptions | undefined;
    caption?: string | ((instance: FancyBoxInstance, current: FancyBoxSlide) => string) | undefined;
}

interface FancyBoxRefs {
    bg: JQuery;
    caption: JQuery;
    container: JQuery;
    infobar: JQuery;
    inner: JQuery;
    navigation: JQuery;
    stage: JQuery;
    toolbar: JQuery;
}

interface FancyBoxFullScreen {
    enabled(): boolean;
    exit(): void;
    isFullscreen(): boolean;
    request(elem: HTMLElement): void;
    toggle(elem: HTMLElement): void;
}

interface FancyBoxGestures {
    $bg: JQuery;
    $container: JQuery;
    $stage: JQuery;
    instance: FancyBoxInstance;
    destroy(): void;
    endPanning(): void;
    endSwiping(swiping: "x" | "y", scrolling: boolean): void;
    endZooming(): void;
    limitMovement(): void;
    limitPosition(newOffsetX: number, newOffsetY: number, newWidth: number, newHeight: number): void;
    onPan(): void;
    onSwipe(e: JQuery.Event): void;
    onTap(e: JQuery.Event): void;
    onZoom(): void;
    onscroll(e: JQuery.ScrollEvent): void;
    ontouchend(e: JQuery.TouchEndEvent): void;
    ontouchmove(e: JQuery.TouchMoveEvent): void;
    ontouchstart(e: JQuery.TouchStartEvent): void;
}

interface FancyBoxSlideShow {
    $button?: JQuery | undefined;
    $progress: JQuery;
    instance: FancyBoxInstance;
    clear(): void;
    init(): void;
    isActive: boolean;
    set(force: boolean): void;
    start(): void;
    stop(): void;
    timer?: number | undefined;
    toggle(): void;
}

interface FancyThumbs {
    $button?: JQuery | undefined;
    $grid?: JQuery | undefined;
    $list?: JQuery | undefined;
    instance: FancyBoxInstance;
    opts: FancyThumbsOptions;
    create(): void;
    focus(duration: number): void;
    hide(): void;
    init(instance: FancyBoxInstance): void;
    isActive: boolean;
    isVisible: boolean;
    show(): void;
    toggle(): void;
    update(): void;
}

interface FancyBoxInstanceMethods {
    /**
     * Activates current instance - brings container to the front and enables keyboard,
     * notifies other instances about deactivating
     */
    activate(): void;
    /**
     * Populate current group with fresh content
     * Check if each object has valid type and content
     * @param content
     */
    addContent(content: FancyBoxPlainObject | JQuery): void;
    /**
     * Attach an event handler functions for:
     *   - navigation buttons
     *   - browser scrolling, resizing;
     *   - focusing
     *   - keyboard
     *   - detecting inactivity
     */
    addEvents(): void;
    /**
     * Prevent caption overlap,
     * fix css inconsistency across browsers
     * @param slide
     */
    adjustCaption(slide: FancyBoxSlide): void;
    /**
     * Simple hack to fix inconsistency across browsers, described here (affects Edge, too):
     * https://bugzilla.mozilla.org/show_bug.cgi?id=748518
     * @param slide
     */
    adjustLayout(slide: FancyBoxSlide): void;
    /**
     * Adjustments after slide content has been loaded
     * @param slide
     */
    afterLoad(slide: FancyBoxSlide): void;
    /**
     * Check if image dimensions exceed parent element
     * @param nextWidth
     * @param nextHeight
     */
    canPan(nextWidth?: number, nextHeight?: number): boolean;
    /**
     * Horizontally center slide
     * @param duration
     */
    centerSlide(duration: number): void;
    /**
     * Check if image has srcset and get the source
     * @param slide
     */
    checkSrcset(slide: FancyBoxSlide): void;
    /**
     * Final adjustments after removing the instance
     * @param e
     */
    cleanUp(e: JQuery.Event): void;
    /**
     * Close current or all instances
     * @param e
     * @param duration
     */
    close(e: JQuery.Event, duration?: number): void;
    /**
     * Final adjustments after current gallery item is moved to position
     * and it`s content is loaded
     */
    complete(): void;
    /**
     * Create new "slide" element
     * These are gallery items  that are actually added to DOM
     * @param pos
     */
    createSlide(pos: number): FancyBoxSlide;
    /**
     * Try to find and focus on the first focusable element
     * @param e
     * @param firstRun
     */
    focus(e: JQuery.Event, firstRun: boolean): void;
    /**
     * Calculate image size to fit inside viewport
     * @param slide
     */
    getFitPos(slide: FancyBoxSlide): FancyBoxGetFitPosResults;
    /**
     * Check if we can and have to zoom from thumbnail
     * @param slide
     */
    getThumbPos(slide: FancyBoxSlide): FancyBoxThumbPos;
    /**
     * Hide toolbar and caption
     * @param andCaption
     */
    hideControls(andCaption: boolean): void;
    /**
     * Remove loading icon from the slide
     * @param slide
     */
    hideLoading(slide: FancyBoxSlide): void;
    /**
     * Create DOM structure
     */
    init(): void;
    /**
     * Check if current slide is moved (swiped)
     * @param slide
     */
    isMoved(slide: FancyBoxSlide): boolean;
    /**
     * Check if current image dimensions are smaller than actual
     * @param nextWidth
     * @param nextHeight
     */
    isScaledDown(nextWidth?: number, nextHeight?: number): boolean;
    /**
     * Check if current slide is zoomable
     */
    isZoomable(): boolean;
    /**
     * Switch to selected gallery item
     * @param pos
     * @param duration
     */
    jumpTo(pos: number, duration: number): void;
    /**
     * Load content into the slide
     * @param slide
     */
    loadSlide(slide: FancyBoxSlide): void;
    /**
     * Change to next gallery item
     * @param duration
     */
    next(duration: number): void;
    /**
     * Preload next and previous slides
     * @param type
     */
    preload(type: string): void;
    /**
     * Change to previous gallery item
     * @param duration
     */
    previous(duration: number): void;
    /**
     * Remove events added by the core
     */
    removeEvents(): void;
    /**
     * Computes the slide size from image size and maxWidth/maxHeight
     * @param slide
     * @param imgWidth
     * @param imgHeight
     */
    resolveImageSlideSize(slide: FancyBoxSlide, imgWidth: number, imgHeight: number): void;
    /**
     * Make content visible
     * This method is called right after content has been loaded or
     * user navigates gallery and transition should start
     * @param slide
     */
    revealContent(slide: FancyBoxSlide): void;
    /**
     * Scale image to the actual size of the image;
     * x and y values should be relative to the slide
     * @param x
     * @param y
     * @param duration
     */
    scaleToActual(x?: number, y?: number, duration?: number): void;
    /**
     * Scale image to fit inside parent element
     * @param duration
     */
    scaleToFit(duration: number): void;
    /**
     * Create full-size image
     * @param slide
     */
    setBigImage(slide: FancyBoxSlide): void;
    /**
     * Wrap and append content to the slide
     * @param slide
     * @param content
     */
    setContent(slide: FancyBoxSlide, content: JQuery | string): void;
    /**
     * Display error message
     * @param slide
     */
    setError(slide: FancyBoxSlide): void;
    /**
     * Create iframe wrapper, iframe and bindings
     * @param slide
     */
    setIframe(slide: FancyBoxSlide): void;
    /**
     * Use thumbnail image, if possible
     * @param slide
     */
    setImage(slide: FancyBoxSlide): void;
    /**
     * Show toolbar and caption
     */
    showControls(): void;
    /**
     * Show loading icon inside the slide
     * @param slide
     */
    showLoading(slide: FancyBoxSlide): void;
    /**
     * Toggle toolbar and caption
     */
    toggleControls(): void;
    /**
     * Simple i18n support - replaces object keys found in template
     * with corresponding values
     * @param obj
     * @param str
     */
    translate(obj: any, str: string): string;
    /**
     * Call callback and trigger an event
     * @param name
     * @param slide
     */
    trigger(name: string, slide: FancyBoxSlide): void;
    /**
     * Update content size and position for all slides
     * @param e
     */
    update(e: any): void;
    /**
     * Update infobar values, navigation button states and reveal caption
     */
    updateControls(): void;
    /**
     * Update cursor style depending if content can be zoomed
     * @param nextWidth
     * @param nextHeight
     */
    updateCursor(nextWidth: number, nextHeight: number): void;
    /**
     * Update slide content position and size
     * @param slide
     * @param e
     */
    updateSlide(slide: FancyBoxSlide, e?: any): void;
}

interface FancyBoxInstance extends FancyBoxInstanceMethods {
    $caption?: JQuery | undefined;
    $refs?: FancyBoxRefs | undefined;
    $trigger?: JQuery | undefined;
    FullScreen: FancyBoxFullScreen;
    Guestures: FancyBoxGestures;
    SlideShow: FancyBoxSlideShow;
    Thumbs: FancyThumbs;
    currIndex: number;
    currPos: number;
    current: FancyBoxSlide;
    firstRun: boolean;
    group: FancyBoxGroupItem[];
    hasHiddenControls: boolean;
    id: number;
    idleInterval: number;
    idleSecondsCounter: number;
    isAnimating: boolean;
    isIdle: boolean;
    isVisible: boolean;
    opts: FancyBoxOptions;
    prevIndex: number;
    prevPos: number;
    slides: { [key: number]: FancyBoxSlide };
}

interface FancyBoxThumbPos extends FancyBoxGetFitPosResults {
    scaleX?: number | undefined;
    scaleY?: number | undefined;
}

interface FancyBoxGetFitPosResults {
    top?: number | undefined;
    left?: number | undefined;
    width?: number | undefined;
    height?: number | undefined;
}

interface FancyBoxJQueryMethods {
    animate(
        $el: JQuery,
        to: FancyBoxThumbPos,
        duration: number,
        callback: () => void,
        leaveAnimationName: boolean,
    ): void;
    close(all?: boolean): void;
    defaults: FancyBoxOptions;
    destroy(): void;
    getInstance(command?: string | (() => void)): FancyBoxInstance;
    getTranslate($el: JQuery): void;
    isMobile: boolean;
    open(
        items: JQuery | string | FancyBoxGroupItem[] | FancyBoxGroupItem,
        opts?: FancyBoxOptions,
        index?: number,
    ): FancyBoxInstance;
    setTranslate($el: JQuery, props: { left?: number | undefined; top?: number | undefined }): void;
    stop($el: JQuery, callCallback: boolean): void;
    use3d: string;
    version: string;
}

interface JQuery {
    fancybox(options?: FancyBoxOptions): JQuery;
}

interface JQueryStatic {
    fancybox: FancyBoxJQueryMethods;
}
