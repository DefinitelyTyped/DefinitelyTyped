// Type definitions for PDF.js v0.1.0
// Project: https://github.com/mozilla/pdf.js
// Definitions by: Josh Baldwin <https://github.com/jbaldwin>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/*
Copyright (c) 2013 Josh Baldwin https://github.com/jbaldwin/pdf.d.ts

Permission is hereby granted, free of charge, to any person
obtaining a copy of this software and associated documentation
files (the "Software"), to deal in the Software without
restriction, including without limitation the rights to use,
copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the
Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
OTHER DEALINGS IN THE SOFTWARE.
*/
declare module "pdfjs-dist" {
  export = PDF;
}

declare namespace PDF {
  interface PDFPromise<T> {
    isResolved(): boolean;
    isRejected(): boolean;
    resolve(value: T): void;
    reject(reason: string): void;
    then<U>(onResolve: (promise: T) => U, onReject?: (reason: string) => void): PDFPromise<U>;
  }

  interface PDFTreeNode {
    title: string;
    bold: boolean;
    italic: boolean;
    color: number[]; // [r,g,b]
    dest: any;
    items: PDFTreeNode[];
  }

  interface PDFInfo {
    PDFFormatVersion: string;
    IsAcroFormPresent: boolean;
    IsXFAPresent: boolean;
    [key: string]: any;	// return type is string, typescript chokes
  }

  interface PDFMetadata {
    parse(): void;
    get(name: string): string;
    has(name: string): boolean;
  }

  interface PDFSource {
    url?: string;
    data?: Uint8Array;
    httpHeaders?: any;
    password?: string;
  }

  interface PDFProgressData {
    loaded: number;
    total: number;
  }

  interface PDFDocumentProxy {

    /**
     * Total number of pages the PDF contains.
     **/
    numPages: number;

    /**
     * A unique ID to identify a PDF.  Not guaranteed to be unique.  [jbaldwin: haha what]
     **/
    fingerprint: string;

    /**
     * True if embedded document fonts are in use.  Will be set during rendering of the pages.
     **/
    embeddedFontsUsed(): boolean;

    /**
     * @param number The page number to get.  The first page is 1.
     * @return A promise that is resolved with a PDFPageProxy.
     **/
    getPage(number: number): PDFPromise<PDFPageProxy>;

    /**
     * TODO: return type of Promise<???>
     *  A promise that is resolved with a lookup table for mapping named destinations to reference numbers.
     **/
    getDestinations(): PDFPromise<any[]>;

    /**
     *  A promise that is resolved with an array of all the JavaScript strings in the name tree.
     **/
    getJavaScript(): PDFPromise<string[]>;

    /**
     *  A promise that is resolved with an array that is a tree outline (if it has one) of the PDF.  @see PDFTreeNode
     **/
    getOutline(): PDFPromise<PDFTreeNode[]>;

    /**
     * A promise that is resolved with the info and metadata of the PDF.
     **/
    getMetadata(): PDFPromise<{ info: PDFInfo; metadata: PDFMetadata }>;

    /**
     * Is the PDF encrypted?
     **/
    isEncrypted(): PDFPromise<boolean>;

    /**
     * A promise that is resolved with Uint8Array that has the raw PDF data.
     **/
    getData(): PDFPromise<Uint8Array>;

    /**
     * TODO: return type of Promise<???>
     * A promise that is resolved when the document's data is loaded.
     **/
    dataLoaded(): PDFPromise<any[]>;

    /**
     *
     **/
    destroy(): void;
  }

  interface PDFRef {
    num: number;
    gen: any; // todo
  }

  interface PDFPageViewportOptions {
    viewBox: any;
    scale: number;
    rotation: number;
    offsetX: number;
    offsetY: number;
    dontFlip: boolean;
  }

  interface PDFPageViewport {
    width: number;
    height: number;
    fontScale: number;
    transforms: number[];

    clone(options: PDFPageViewportOptions): PDFPageViewport;
    convertToViewportPoint(x: number, y: number): number[]; // [x, y]
    convertToViewportRectangle(rect: number[]): number[]; // [x1, y1, x2, y2]
    convertToPdfPoint(x: number, y: number): number[]; // [x, y]
  }

  interface PDFAnnotationData {
    subtype: string;
    rect: number[]; // [x1, y1, x2, y2]
    annotationFlags: any; // todo
    color: number[]; // [r,g,b]
    borderWidth: number;
    hasAppearance: boolean;
  }

  interface PDFAnnotations {
    getData(): PDFAnnotationData;
    hasHtml(): boolean; // always false
    getHtmlElement(commonOjbs: any): HTMLElement; // throw new NotImplementedException()
    getEmptyContainer(tagName: string, rect: number[]): HTMLElement; // deprecated
    isViewable(): boolean;
    loadResources(keys: any): PDFPromise<any>;
    getOperatorList(evaluator: any): PDFPromise<any>;
    // ... todo
  }

  interface PDFRenderTextLayer {
    beginLayout(): void;
    endLayout(): void;
    appendText(): void;
  }

  interface PDFRenderImageLayer {
    beginLayout(): void;
    endLayout(): void;
    appendImage(): void;
  }

  interface PDFRenderParams {
    canvasContext: CanvasRenderingContext2D;
    viewport?: PDFPageViewport;
    textLayer?: PDFRenderTextLayer;
    imageLayer?: PDFRenderImageLayer;
    continueCallback?: (_continue: () => void) => void;
  }

  interface PDFViewerParams {
    container: HTMLElement;
    viewer?: HTMLElement;
  }

  /**
   * RenderTask is basically a promise but adds a cancel function to termiate it.
   **/
  interface PDFRenderTask extends PDFPromise<PDFPageProxy> {

    /**
     * Cancel the rendering task.  If the task is currently rendering it will not be cancelled until graphics pauses with a timeout.  The promise that this object extends will resolve when cancelled.
     **/
    cancel(): void;
  }

  interface PDFPageProxy {

    /**
     * Page number of the page.  First page is 1.
     **/
    pageNumber: number;

    /**
     * The number of degrees the page is rotated clockwise.
     **/
    rotate: number;

    /**
     * The reference that points to this page.
     **/
    ref: PDFRef;

    /**
     * @return An array of the visible portion of the PDF page in the user space units - [x1, y1, x2, y2].
     **/
    view: number[];

    /**
     * @param scale The desired scale of the viewport.
     * @param rotate Degrees to rotate the viewport.  If omitted this defaults to the page rotation.
     * @return
     **/
    getViewport(scale: number, rotate?: number): PDFPageViewport;

    /**
     * A promise that is resolved with an array of the annotation objects.
     **/
    getAnnotations(): PDFPromise<PDFAnnotations>;

    /**
     * Begins the process of rendering a page to the desired context.
     * @param params Rendering options.
     * @return An extended promise that is resolved when the page finishes rendering.
     **/
    render(params: PDFRenderParams): PDFRenderTask;

    /**
     * A promise that is resolved with the string that is the text content frm the page.
     **/
    getTextContent(): PDFPromise<TextContent>;

    /**
     * marked as future feature
     **/
    //getOperationList(): PDFPromise<>;

    /**
     * Destroyes resources allocated by the page.
     **/
    destroy(): void;
  }

  interface TextContentItem {
    str: string;
    transform: number[]; // [0..5]   4=x, 5=y
    width: number;
    height: number;
    dir: string; // Left-to-right (ltr), etc
    fontName: string; // A lookup into the styles map of the owning TextContent
  }

  interface TextContent {
    items: TextContentItem[];
    styles: any;
  }

  /**
   * A PDF document and page is built of many objects.  E.g. there are objects for fonts, images, rendering code and such.  These objects might get processed inside of a worker.  The `PDFObjects` implements some basic functions to manage these objects.
   **/
  interface PDFObjects {
    get(objId: number, callback?: any): any;
    resolve(objId: number, data: any): any;
    isResolved(objId: number): boolean;
    hasData(objId: number): boolean;
    getData(objId: number): any;
    clear(): void;
  }

  interface PDFJSUtilStatic {
    /**
     * Normalize rectangle so that (x1,y1) < (x2,y2)
     * @param {number[]} rect - the rectangle with [x1,y1,x2,y2]
     *
     * For coordinate systems whose origin lies in the bottom-left, this
     * means normalization to (BL,TR) ordering. For systems with origin in the
     * top-left, this means (TL,BR) ordering.
     **/
    normalizeRect(rect:number[]): number[];
  }

  interface PDFJSStatic {

    /**
     * The maximum allowed image size in total pixels e.g. width * height.  Images above this value will not be drawn.  Use -1 for no limit.
     **/
    maxImageSize: number;

    /**
     * The url of where the predefined Adobe CMaps are located. Include trailing
     * slash.
     */
    cMapUrl: string;

    /**
     * Specifies if CMaps are binary packed.
     */
    cMapPacked: boolean;

    /**
     * By default fonts are converted to OpenType fonts and loaded via font face rules.  If disabled, the font will be rendered using a built in font renderer that constructs the glyphs with primitive path commands.
     **/
    disableFontFace: boolean;

    /**
     * Path for image resources, mainly for annotation icons. Include trailing
     * slash.
     */
    imageResourcesPath: string;

    /**
     * Disable the web worker and run all code on the main thread. This will happen
     * automatically if the browser doesn't support workers or sending typed arrays
     * to workers.
     */
    disableWorker: boolean;

    /**
     * Path and filename of the worker file. Required when the worker is enabled in
     * development mode. If unspecified in the production build, the worker will be
     * loaded based on the location of the pdf.js file.
     */
    workerSrc: string;

    /**
     * Disable range request loading of PDF files. When enabled and if the server
     * supports partial content requests then the PDF will be fetched in chunks.
     * Enabled (false) by default.
     */
    disableRange: boolean;

    /**
     * Disable streaming of PDF file data. By default PDF.js attempts to load PDF
     * in chunks. This default behavior can be disabled.
     */
    disableStream: boolean;

    /**
     * Disable pre-fetching of PDF file data. When range requests are enabled PDF.js
     * will automatically keep fetching more data even if it isn't needed to display
     * the current page. This default behavior can be disabled.
     *
     * NOTE: It is also necessary to disable streaming, see above,
     *       in order for disabling of pre-fetching to work correctly.
     */
    disableAutoFetch: boolean;

    /**
     * Enables special hooks for debugging PDF.js.
     */
    pdfBug: boolean;

    /**
     * Enables transfer usage in postMessage for ArrayBuffers.
     */
    postMessageTransfers: boolean;

    /**
     * Disables URL.createObjectURL usage.
     */
    disableCreateObjectURL: boolean;

    /**
     * Disables WebGL usage.
     */
    disableWebGL: boolean;

    /**
     * Disables fullscreen support, and by extension Presentation Mode,
     * in browsers which support the fullscreen API.
     */
    disableFullscreen: boolean;
      
    /**
     * Disable the text layer of PDF when used PDF.js renders a canvas instead of div elements
     *
     */
    disableTextLayer: boolean;

    /**
     * Enables CSS only zooming.
     */
    useOnlyCssZoom: boolean;

    /**
     * Controls the logging level.
     * The constants from PDFJS.VERBOSITY_LEVELS should be used:
     * - errors
     * - warnings [default]
     * - infos
     */
    verbosity: number;

    /**
     * The maximum supported canvas size in total pixels e.g. width * height.
     * The default value is 4096 * 4096. Use -1 for no limit.
     */
    maxCanvasPixels: number;

    /**
     * Opens external links in a new window if enabled. The default behavior opens
     * external links in the PDF.js window.
     */
    openExternalLinksInNewWindow: boolean;

    /**
     * Determines if we can eval strings as JS. Primarily used to improve
     * performance for font rendering.
     */
    isEvalSupported: boolean;

    Util: PDFJSUtilStatic;

    /**
     * This is the main entry point for loading a PDF and interacting with it.
     * NOTE: If a URL is used to fetch the PDF data a standard XMLHttpRequest(XHR)
     * is used, which means it must follow the same origin rules that any XHR does
     * e.g. No corss domain requests without CORS.
     * @param source
     * @param pdfDataRangeTransport Used if you want to manually server range requests for data in the PDF.  @ee viewer.js for an example of pdfDataRangeTransport's interface.
     * @param passwordCallback Used to request a password if wrong or no password was provided.  The callback receives two parameters: function that needs to be called with new password and the reason.
     * @param progressCallback Progress callback.
     * @return A promise that is resolved with PDFDocumentProxy object.
     **/
    getDocument(
        source: string,
        pdfDataRangeTransport?: any,
        passwordCallback?: (fn: (password: string) => void, reason: string) => string,
        progressCallback?: (progressData: PDFProgressData) => void)
        : PDFPromise<PDFDocumentProxy>;

    getDocument(
        source: Uint8Array,
        pdfDataRangeTransport?: any,
        passwordCallback?: (fn: (password: string) => void, reason: string) => string,
        progressCallback?: (progressData: PDFProgressData) => void)
        : PDFPromise<PDFDocumentProxy>;

    getDocument(
        source: PDFSource,
        pdfDataRangeTransport?: any,
        passwordCallback?: (fn: (password: string) => void, reason: string) => string,
        progressCallback?: (progressData: PDFProgressData) => void)
        : PDFPromise<PDFDocumentProxy>;

    PDFViewer(params: PDFViewerParams): void;
    /**
    * yet another viewer, this will render only one page at the time, reducing rendering time
    * very important for mobile development
    * @params {PDFViewerParams}
    */
    PDFSinglePageViewer(params: PDFViewerParams): void;
  }
}
