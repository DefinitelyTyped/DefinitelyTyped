// Type definitions for PDF.js v2.2
// Project: https://github.com/mozilla/pdf.js
// Definitions by: Konrad Albrecht <https://github.com/kdshop>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.0

import { PDFDocumentProxy, PDFPageProxy, PDFPageViewport, PDFRef, TextContent } from '../index';

export enum ZoomScale {
    AUTO = 'auto',
    PAGEHEIGHT = 'page-height',
    PAGEFIT = 'page-fit',
    PAGEWIDTH = 'page-width',
    PAGEACTUAL = 'page-actual',
}

export interface AnnotationLayerBuilderOptions {
    pageDiv: HTMLDivElement;
    pdfPage?: PDFPageProxy;
    linkService?: PDFLinkService | SimpleLinkService;
    downloadManager?: DownloadManager;
    imageResourcePath?: string;
    renderInteractiveForms?: boolean;
    l10n?: L10n;
}

declare class AnnotationLayerBuilder {
    pageDiv: HTMLDivElement;
    pdfPage: undefined | PDFPageProxy;
    linkService: PDFLinkService | SimpleLinkService;
    downloadManager: undefined | DownloadManager;
    imageResourcesPath: string;
    renderInteractiveForms: boolean;
    l10n: L10n;
    div: null | HTMLDivElement;

    constructor(options: AnnotationLayerBuilderOptions);

    render(viewport: PDFPageViewport, intent?: 'display' | 'print'): void;

    cancel(): void;

    hide(): void;
}

declare class DefaultAnnotationLayerFactory {
    createAnnotationLayerBuilder(
        pageDiv: Node | Element,
        pdfPage?: PDFPageProxy,
        imageResourcesPath?: string,
        renderInteractiveForms?: boolean,
        l10n?: L10n
    ): AnnotationLayerBuilder;
}

declare class DefaultTextLayerFactory {
    createTextLayerBuilder(
        textLayerDiv: Node | Element,
        pageIndex?: number,
        viewport?: PDFPageViewport,
        enhanceTextSelection?: boolean,
        eventBus?: EventBus
    ): TextLayerBuilder;
}

declare class DownloadManager {
    constructor(options: { disableCreateObjectURL: boolean });

    downloadUrl(url: string, filename: string): void;

    downloadData(data: any, filename: string, contentType: string): void;

    download(blob: any, url: string, filename: string): void;
}

export interface EventBusOptions {
    dispatchToDOM: boolean;
}

export enum PDFEvent {
    FINDBARCLOSE = 'findbarclose',
    ZOOMIN = 'zoomin',
    ZOOMOUT = 'zoomout',
    ZOOMRESET = 'zoomreset',
    SECONDARYTOOLBARRESET = 'secondarytoolbarreset',
    FILEATTACHMENTANNOTATION = 'fileattachmentannotation',
    LOCALIZED = 'localized',
    DOCUMENTLOADED = 'documentloaded',
    DOCUMENTINIT = 'documentinit',
    RESIZE = 'resize',
    HASHCHANGE = 'hashchange',
    BEFOREPRINT = 'beforeprint',
    AFTERPRINT = 'afterprint',
    FILEINPUTCHANGE = 'fileinputchange',
    OPENFILE = 'openfile',
    DOWNLOAD = 'download',
    BASEVIEWERINIT = 'baseviewerinit',
    PAGECHANGING = 'pagechanging',
    ROTATIONCHANGING = 'rotationchanging',
    PAGESLOADED = 'pagesloaded',
    PAGESINIT = 'pagesinit',
    SCALECHANGING = 'scalechanging',
    UPDATEVIEWAREA = 'updateviewarea',
    SCROLLMODECHANGED = 'scrollmodechanged',
    SPREADMODECHANGED = 'spreadmodechanged',
    ATTACHMENTSLOADED = 'attachmentsloaded',
    CURSORTOOLCHANGED = 'cursortoolchanged',
    UPDATETEXTLAYERMATCHES = 'updatetextlayermatches',
    UPDATEFINDMATCHESCOUNT = 'updatefindmatchescount',
    UPDATEFINDCONTROLSTATE = 'updatefindcontrolstate',
    FINDFROMURLHASH = 'findfromurlhash',
    PAGEMODE = 'pagemode',
    NAMEDACTION = 'namedaction',
    OUTLINELOADED = 'outlineloaded',
    PAGERENDERED = 'pagerendered',
    PAGERENDER = 'pagerender',
    FIRSTPAGE = 'firstpage',
    LASTPAGE = 'lastpage',
    ROTATECW = 'rotatecw',
    ROTATECCW = 'rotateccw',
    PRESENTATIONMODECHANGED = 'presentationmodechanged',
    SIDEBARVIEWCHANGED = 'sidebarviewchanged',
    TOGGLEOUTLINETREE = 'toggleoutlinetree',
    TEXTLAYERRENDERED = 'textlayerrendered',
    PAGENUMBERCHANGED = 'pagenumberchanged',
    SCALECHANGED = 'scalechanged',
}

/**
 * EventBus supports custom events.
 */
export type PDFCustomEvent = string;

interface EventBusListenerArgs {
    source: BaseViewer | PDFPageView;
    [key: string]: any;
}

declare class EventBus {
    constructor(params?: EventBusOptions);

    on(eventName: PDFEvent | PDFCustomEvent, listener: (args: EventBusListenerArgs) => void): void;

    off(eventName: PDFEvent | PDFCustomEvent, listener: () => void): void;

    dispatch(eventName: PDFEvent | PDFCustomEvent): void;
}

export enum LanguageDirection {
    RTL = 'rtl',
    LTR = 'ltr',
}

export enum TextDirection {
    TTB = 'ttb',
    RTL = 'rtl',
    LTR = 'ltr',
}

interface L10n {
    /**
     * Resolves to the current locale.
     */
    getLanguage(): Promise<string>;

    [key: string]: any;

    /**
     * Resolves to 'rtl' or 'ltr'.
     */
    getDirection(): Promise<LanguageDirection>;

    /**
     * Translates text identified by the key and adds/formats data using the args
     * property bag. If the key was not found, translation falls back to the
     * fallback text.
     */
    get(key: string, args: object, fallback: string): Promise<string>;

    /**
     * Translates HTML element.
     */
    translate(element: Element): Promise<void>;
}

declare class GenericL10n implements L10n {
    constructor(lang: string);

    get(key: string, args: object, fallback: string): Promise<string>;

    getDirection(): Promise<LanguageDirection>;

    getLanguage(): Promise<string>;

    translate(element: Element): Promise<void>;
}

declare const NullL10n: L10n;

export interface PDFFindControllerOptions {
    linkService: PDFLinkService | SimpleLinkService;
    eventBus: EventBus;
}

export enum PDFFindCommand {
    FINDHIGHLIGHTALLCHANGE = 'findhighlightallchange',
    FIND = 'find',
    FINDAGAIN = 'findagain',
}

export type PDFFindControllerQueryState = { query: string } | null;

declare class PDFFindController {
    constructor(options: PDFFindControllerOptions);

    highlightMatches: boolean;
    pageMatches: number[][];
    pageMatchesLength: number[][];
    selected: {
        pageIdx: number;
        matchIdx: number;
    };
    state: PDFFindControllerQueryState;

    setDocument(pdfDocument: PDFDocumentProxy): void;

    executeCommand(cmd: PDFFindCommand, state: PDFFindControllerQueryState): void;

    scrollMatchIntoView(scrollTo: { element: Element; pageIndex: number; matchIndex: number }): void;
}

export interface PDFHistoryOptions {
    eventBus: EventBus;
    linkService: PDFLinkService | SimpleLinkService;
}

declare class PDFHistory {
    eventBus: EventBus;
    linkService: PDFLinkService | SimpleLinkService;

    constructor(options: PDFHistoryOptions);

    /**
     * Initialize the history for the PDF document, using either the current
     * browser history entry or the document hash (for example `pdfDocument.fingerprint`), whichever is present.
     */
    initialize(params: { fingerprint: string; resetHistory?: boolean; updateUrl?: boolean }): void;

    /**
     * Reset the current `PDFHistory` instance, and consequently prevent any
     * further updates and/or navigation of the browser history.
     */
    reset(): void;

    /**
     * Push an internal destination to the browser history.
     */
    push(pushParameters: { explicitDest: string[]; pageNumber: number; namedDest?: string }): void;

    /**
     * Push the current position to the browser history.
     */
    pushCurrentPosition(): void;

    /**
     * Go back one step in the browser history.
     * NOTE: Avoids navigating away from the document, useful for 'named actions.
     */
    back(): void;

    /**
     * Go forward one step in the browser history.
     * NOTE: Avoids navigating away from the document, useful for 'named actions'.
     */
    forward(): void;

    /**
     * Indicating if the user is currently moving through the
     *   browser history, useful e.g. for skipping the next 'hashchange' event.
     */
    popStateInProgress: boolean;

    initialBookmark: string | null;

    initialRotation: number | null;
}

export enum PDFLinkNamedAction {
    GOBACK = 'GoBack',
    GOFORWARD = 'GoForward',
    NEXTPAGE = 'NextPage',
    PREVPAGE = 'PrevPage',
    LASTPAGE = 'LastPage',
    FIRSTPAGE = 'FirstPage',
}

export enum LinkTarget {
    NONE = 0, // Default value.
    SELF = 1,
    BLANK = 2,
    PARENT = 3,
    TOP = 4,
}

export interface PDFLinkServiceOptions {
    eventBus: EventBus;
    externalLinkTarget?: LinkTarget;
    externalLinkRel?: string;
    externalLinkEnabled?: boolean;
    ignoreDestinationZoom?: boolean;
}

/**
 * Performs navigation functions inside PDF, such as opening specified page,
 * or destination.
 */
declare class PDFLinkService {
    baseUrl: string | null;
    eventBus: EventBus;
    externalLinkEnabled: boolean;
    externalLinkRel: string | null;
    externalLinkTarget: LinkTarget | null;
    pdfDocument: null | PDFDocumentProxy;
    pdfHistory: null | PDFHistory;
    pdfViewer: null | BaseViewer;

    constructor(options: PDFLinkServiceOptions);

    setDocument(pdfDocument: PDFDocumentProxy, baseUrl: string): void;

    setViewer(pdfViewer: BaseViewer): void;

    setHistory(pdfHistory: PDFHistory): void;

    setHash(hash: string): void;

    pagesCount: number;

    page: number;

    rotation: number;

    /**
     * @param dest - The named, or explicit, PDF destination.
     */
    navigateTo(dest: string | any[]): void;

    /**
     * @param dest - The PDF destination object.
     * @returns The hyperlink to the PDF object.
     */
    getDestinationHash(dest: string | any[]): string;

    /**
     * Prefix the full url on anchor links to make sure that links are resolved
     * relative to the current URL instead of the one defined in <base href>.
     * @param anchor The anchor hash, including the #.
     * @returns The hyperlink to the PDF object.
     */
    getAnchorUrl(anchor: string): string;

    executeNamedAction(action: PDFLinkNamedAction): void;

    cachePageRef(pageNum: number, pageRef: object): void;

    isPageVisible(pageNumber: number): boolean;
}

export enum RenderingState {
    INITIAL = 0,
    RUNNING = 1,
    PAUSED = 2,
    FINISHED = 3,
}

export interface RenderableView {
    /**
     * Unique ID for rendering queue.
     */
    renderingId(): string;

    renderingState(): RenderingState;

    /**
     * Resolved on draw completion.
     */
    draw(): Promise<void>;

    resume(): void;
}

export interface PDFThumbnailViewOptions {
    /**
     * The viewer element.
     */
    container: HTMLDivElement;

    /**
     * The thumbnail's unique ID (normally its number).
     */
    id: number;

    /**
     * The page viewport.
     */
    defaultViewport: PDFPageViewport;

    /**
     * The navigation/linking service.
     */
    linkService: PDFLinkService | SimpleLinkService;

    /**
     * The rendering queue object.
     */
    renderingQueue: PDFRenderingQueue;

    /**
     * Don't convert the canvas thumbnails to images. This prevents `toDataURL` calls,
     * but increases the overall memory usage. The default value is `false`.
     */
    disableCanvasToImageConversion: boolean;

    /**
     * Localization service.
     */
    l10n: L10n;
}

declare class PDFThumbnailView {
    constructor(options: PDFThumbnailViewOptions);

    static cleanup(): void;

    setPdfPage(pdfPage: PDFPageProxy): void;

    reset(): void;

    update(rotation: number): void;

    /**
     * PLEASE NOTE: Most likely you want to use the `this.reset()` method,
     *              rather than calling this one directly.
     */
    cancelRendering(): void;

    draw(): Promise<void>;

    setImage(pageView: PDFPageView): void;

    setPageLabel(label: string | null): void;
}

export interface PDFThumbnailViewerOptions {
    /**
     * The container for the thumbnail.
     */
    container: HTMLDivElement;

    /**
     * The navigation/linking service.
     */
    linkService: PDFLinkService | SimpleLinkService;

    /**
     * The rendering queue object.
     */
    renderingQueue: PDFRenderingQueue;

    /**
     * Localization service.
     */
    l10n: L10n;
}

/**
 * Viewer control to display thumbnails for pages in a PDF document.
 */
declare class PDFThumbnailViewer {
    constructor(options: PDFThumbnailViewOptions);

    getThumbnail(index: number): void;

    scrollThumbnailIntoView(pageNumber: number): void;

    pagesRotation(rotation: number): void;

    cleanup(): void;

    setDocument(pdfDocument: PDFDocumentProxy): void;

    setPageLabels(labels: string[] | null): void;

    forceRendering(): boolean;
}

/**
 * Controls rendering of the views for pages and thumbnails.
 */
declare class PDFRenderingQueue {
    setViewer(pdfViewer: BaseViewer): void;

    setThumbnailViewer(pdfThumbnailViewer: PDFThumbnailViewer): void;

    isHighestPriority(view: RenderableView): boolean;

    renderHighestPriority(currentlyVisiblePages: any): void;

    getHighestPriority(visible: object, views: PDFPageView[], scrolledDown: boolean): void | null;

    isViewFinished(view: RenderableView): boolean;

    /**
     * Render a page or thumbnail view. This calls the appropriate function
     * based on the views state. If the view is already rendered it will return
     * `false`.
     */
    renderView(view: RenderableView): RenderingState;
}

export interface PDFPageViewOptions {
    /**
     * The viewer element.
     */
    container: Element;

    /**
     * The application event bus.
     */
    eventBus: EventBus;

    /**
     * The page viewport.
     */
    defaultViewport: PDFPageViewport | { rotation: number };

    /**
     * The page unique ID (normally its number).
     */
    id?: number;

    /**
     * The page scale display.
     */
    scale?: number;

    /**
     * Storage for annotation data in forms. The default value is `null`.
     */
    annotationStorage?: AnnotationStorage;

    /**
     * The rendering queue object.
     */
    renderingQueue?: PDFRenderingQueue;

    textLayerFactory?: DefaultTextLayerFactory;

    /**
     * Controls if the text layer used for
     * selection and searching is created, and if the improved text selection
     * behaviour is enabled. The constants from {TextLayerMode} should be used.
     * The default value is 1.
     *   DISABLE = 0,
     *   ENABLE = 1,
     *   ENABLE_ENHANCE = 2,
     */
    textLayerMode?: 0 | 1 | 2;

    annotationLayerFactory?: DefaultAnnotationLayerFactory;

    /**
     * Path for image resources, mainly
     * for annotation icons. Include trailing slash.
     */
    imageResourcesPath?: string;

    /**
     * Turns on rendering of interactive form elements. The default is `false`.
     */
    renderInteractiveForms?: boolean;

    /**
     * The default is CANVAS.
     */
    renderer?: 'canvas' | 'svg';

    /**
     * Enables WebGL accelerated rendering for
     * some operations. The default value is `false`.
     */
    enableWebGL?: boolean;

    /**
     * Enables CSS only zooming. The default value is `false`.
     */
    useOnlyCssZoom?: boolean;

    /**
     * The maximum supported canvas size in total pixels, i.e. width * height.
     * Use -1 for no limit.
     * The default value is 4096 * 4096 (16 mega-pixels).
     */
    maxCanvasPixels?: number;

    /**
     * Localization service.
     */
    l10n?: L10n;
}

export interface PaintTask {
    promise: Promise<void>;

    onRenderContinue(cont: () => void): void;

    cancel(): void;
}

export interface PDFDocumentStats {
    /**
     * Used stream types in the document
     * (an item is set to true if specific
     *  stream ID was used in the document).
     */
    streamTypes: {
        [streamID: string]: boolean;
    };

    /**
     * Used font types in the document
     * (an item is set to true if specific
     *  font ID was used in the document).
     */
    fontTypes: {
        [fontID: string]: boolean;
    };
}

declare class PDFPageView {
    annotationLayer: AnnotationLayerBuilder | null;
    annotationLayerFactory: DefaultAnnotationLayerFactory | BaseViewer;
    canvas: HTMLCanvasElement | undefined;
    div: HTMLDivElement;
    enableWebGL: boolean;
    error: null | Error;
    eventBus: EventBus;
    hasRestrictedScaling: boolean;
    id: number | undefined;
    imageResourcesPath: string;
    l10n: L10n;
    maxCanvasPixels: number;
    outputScale: { sx: number; sy: number; scaled: boolean };
    pageLabel: null | string;
    paintTask: null | PaintTask;
    paintedViewportMap: WeakMap<HTMLCanvasElement, PDFPageViewport>;
    pdfPage: PDFPageProxy | null;
    pdfPageRotate: number;
    renderInteractiveForms: boolean;
    renderer: 'canvas' | 'svg';
    renderingId: string;
    renderingQueue: PDFRenderingQueue | undefined;
    renderingState: number;
    resume: () => void | null;
    rotation: number;
    scale: number;
    stats: PDFDocumentStats | null | undefined;
    textLayer: TextLayerBuilder | null;
    textLayerFactory: BaseViewer | undefined;
    textLayerMode: number;
    useOnlyCssZoom: boolean;
    viewport: PDFPageViewport;
    zoomLayer: Element | null;

    constructor(options: PDFPageViewOptions);

    setPdfPage(pdfPage: PDFPageProxy): void;

    destroy(): void;

    reset(keepZoomLayer?: boolean, keepAnnotations?: boolean): void;

    update(scale?: string | number, rotation?: string | number): void;

    /**
     * PLEASE NOTE: Most likely you want to use the `this.reset()` method,
     *              rather than calling this one directly.
     */
    cancelRendering(keepAnnotations?: boolean): void;

    // @TODO
    cssTransform(target: any, redrawAnnotations?: boolean): void;

    width: number;

    height: number;

    getPagePoint(x: number, y: number): number[];

    draw(): Promise<void>;

    paintOnCanvas(canvasWrapper: HTMLDivElement): void;

    paintOnSvg(wrapper: HTMLDivElement): void;

    setPageLabel(label: string | null): void;
}

export type TransformArray = [number, number, number, number, number, number];

export interface TextItem {
    str: string;
    dir: TextDirection;
    transform: TransformArray;
    width: number;
    height: number;
    fontName: string;
}

export interface TextStyle {
    ascent: number;
    descent: number;
    vertical: boolean;
    fontFamily: string;
}

export interface TextLayerRenderTask {
    promise: Promise<void>;

    cancel(): void;

    expandTextDivs(expandDivs: Element[]): void;
}

declare class TextLayerBuilder {
    enhanceTextSelection: false;
    eventBus: EventBus;
    findController: null | PDFFindController;
    matches: [];
    pageIdx: undefined | number;
    pageNumber: number;
    renderingDone: boolean;
    textContent: null;
    textContentItemsStr: string[];
    textContentStream: ReadableStream;
    textDivs: Element[];
    textLayerDiv: HTMLDivElement;
    textLayerRenderTask: null | TextLayerRenderTask;
    viewport: undefined | PDFPageViewport;

    constructor(params: {
        textLayerDiv: Node | Element;
        eventBus: EventBus;
        pageIndex?: number;
        viewport?: PDFPageViewport;
        findController?: boolean;
        enhanceTextSelection?: boolean;
    });

    /**
     * Renders the text layer.
     * [timeout] - Wait for a specified amount of milliseconds before rendering.
     */
    render(timeout?: number): void;

    /**
     * Cancel rendering of the text layer.
     */
    cancel(): void;

    setTextContentStream(readableStream: ReadableStream): void;

    setTextContent(textContent: TextContent): void;
}

declare class AnnotationStorage {
    getOrCreateValue<T = object>(key: string, defaultValue: T): T;

    setValue(key: string, value: object): void;

    getAll(): object[];

    size(): number;
}

export enum RenderTextMode {
    DISABLED = 0,
    ENABLED = 1,
    ENHANCED = 2,
}

interface PDFViewerOptions {
    container: Element;
    eventBus: EventBus;
    viewer?: Element;
    linkService?: PDFLinkService | SimpleLinkService;
    downloadManager?: DownloadManager;
    findController?: PDFFindController;
    removePageBorders?: boolean;
    textLayerMode?: RenderTextMode;
    imageResourcesPath?: string;
    renderInteractiveForms?: boolean;
    enablePrintAutoRotate?: boolean;
    renderer?: 'canvas' | 'svg';
    enableWebGL?: boolean;
    useOnlyCssZoom?: boolean;
    maxCanvasPixels?: number;
    l10n?: L10n;
    defaultRenderingQueue?: PDFRenderingQueue;
}

export enum ScrollMode {
    UNKNOWN = -1,
    VERTICAL = 0, // Default value.
    HORIZONTAL = 1,
    WRAPPED = 2,
}

export enum SpreadMode {
    UNKNOWN = -1,
    NONE = 0, // Default value.
    ODD = 1,
    EVEN = 2,
}

declare class BaseViewer {
    container: Element;
    defaultRenderingQueue: boolean;
    downloadManager: DownloadManager | null;
    enablePrintAutoRotate: boolean;
    enableWebGL: boolean;
    eventBus: EventBus;
    findController: PDFFindController | null;
    imageResourcesPath: string;
    l10n: L10n;
    linkService: PDFLinkService | SimpleLinkService;
    maxCanvasPixels: number | undefined;
    pdfDocument: PDFDocumentProxy;
    presentationModeState: number;
    removePageBorders: boolean;
    renderInteractiveForms: boolean;
    renderer: 'canvas' | 'svg';
    renderingQueue: PDFRenderingQueue;
    scroll: { right: boolean; down: boolean; lastX: number; lastY: number };
    textLayerMode: 0 | 1 | 2;
    useOnlyCssZoom: boolean;
    viewer: Element;

    constructor(options: PDFViewerOptions);

    pagesCount: number;

    getPageView(index: number): PDFPageView;

    /**
     * True if all {PDFPageView} objects are initialized.
     */
    pageViewsReady: boolean;

    currentPageNumber: number;

    /**
     * Returns the current page label, or `null` if no page
     *   labels exist.
     */
    currentPageLabel: string | null;

    currentScale: number;

    currentScaleValue: ZoomScale | number;
    /**
     * @param rotation - The rotation of the pages (0, 90, 180, 270).
     */
    pagesRotation: number;

    firstPagePromise: PDFDocumentProxy | Promise<PDFDocumentProxy>;

    onePageRendered: PDFDocumentProxy | Promise<PDFDocumentProxy>;

    pagesPromise: PDFDocumentProxy | Promise<PDFDocumentProxy>;

    setDocument(pdfDocument: PDFDocumentProxy): void;

    setPageLabels(labels: string[]): void;

    /**
     * Scrolls page into view.
     *
     * pageNumber - The page number.
     * destArray - The original PDF destination array, in the format: <page-ref> </XYZ|/FitXXX> <args..>
     * allowNegativeOffset - Allow negative page offsets. The default value is `false`.
     * ignoreDestinationZoom - Ignore the zoom argument in the destination array. The default value is `false`.
     */
    scrollPageIntoView(parameters: {
        pageNumber: number;
        destArray: [];
        allowNegativeOffset: boolean;
        ignoreDestinationZoom: boolean;
    }): void;

    update(): void;

    containsElement(element: Element): boolean;

    focus(): void;

    isInPresentationMode: boolean;

    isChangingPresentationMode: boolean;

    isHorizontalScrollbarEnabled: boolean;

    isVerticalScrollbarEnabled: boolean;

    isPageVisible(pageNumber: number): boolean;

    cleanup(): void;

    forceRendering(currentlyVisiblePages: object): boolean;

    createTextLayerBuilder(
        textLayerDiv: Element,
        pageIndex: number,
        viewport: PDFPageViewport,
        enhanceTextSelection: boolean,
        eventBus: EventBus
    ): TextLayerBuilder;

    createAnnotationLayerBuilder(
        pageDiv: HTMLDivElement,
        pdfPage: PDFPageProxy,
        annotationStorage: AnnotationStorage,
        /**
         * imageResourcesPath - Path for image resources, mainly for annotation icons.
         * Include trailing slash
         */
        imageResourcesPath: string,
        renderInteractiveForms: boolean,
        l10n: L10n
    ): AnnotationLayerBuilder;

    /**
     * Whether all pages of the PDF document have identical widths and heights.
     */
    hasEqualPageSizes: boolean;

    /**
     * Returns sizes of the pages.
     * Array of objects with width/height/rotation fields.
     */
    getPagesOverview(): object[];

    /**
     * The direction in which the document pages should be
     * laid out within the scrolling container.
     * The constants from {ScrollMode} should be used.
     */
    scrollMode(mode: ScrollMode): void;

    /**
     * Group the pages in spreads, starting with odd- or
     * even-number pages (unless `SpreadMode.NONE` is used).
     * The constants from {SpreadMode} should be used.
     */
    spreadMode(mode: SpreadMode): void;
}

export interface ProgressBarOptions {
    units: string;
    height: number;
    width?: number;
}

declare class ProgressBar {
    bar: Element;
    div: Element;
    height: number;
    units: string;
    visible: boolean;
    width: string;

    /**
     * id - query selector witch contains element with class `.progress`
     */
    constructor(id: string, options?: ProgressBarOptions);

    percent(): number;

    setWidth(viewer: Element): void;

    hide(): void;

    show(): void;
}

declare class SimpleLinkService {
    externalLinkEnabled: boolean;
    externalLinkRel: string | null;
    externalLinkTarget: string | null;

    pagesCount: number;

    page: number;

    rotation: number;

    navigateTo(dest: string | any[]): void;

    getDestinationHash(dest: string | any[]): string;

    getAnchorUrl(hash: string): string;

    setHash(hash: string): void;

    executeNamedAction(action: PDFLinkNamedAction): void;

    cachePageRef(pageNum: number, pageRef: PDFRef): void;

    isPageVisible(pageNumber: number): boolean;
}

export {
    AnnotationLayerBuilder,
    DefaultAnnotationLayerFactory,
    DefaultTextLayerFactory,
    DownloadManager,
    EventBus,
    GenericL10n,
    NullL10n,
    PDFFindController,
    PDFHistory,
    PDFLinkService,
    PDFPageView,
    BaseViewer as PDFSinglePageViewer,
    BaseViewer as PDFViewer,
    ProgressBar,
    SimpleLinkService,
    TextLayerBuilder,
};
