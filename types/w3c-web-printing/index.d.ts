/**
 * @see https://github.com/WICG/web-printing
 */

interface Window {
    readonly printing: WebPrintingManager;
}

declare var printing: WebPrintingManager;

interface WebPrintingManager {
    /**
     * Retrieves a list of available web printers accessible to the application.
     * @return A Promise that resolves to an array of WebPrinter objects
     *   representing the available printers.
     * @throws {NotAllowedError} If the frame is not sufficiently isolated, the
     *   "web-printing" Permissions Policy is disabled, or the user denies
     *   permission.
     * @throws {SecurityError} If the Web Printing API is not accessible in the
     *   current configuration.
     * @throws {NotSupportedError} If the current execution context is detached.
     */
    getPrinters(): Promise<WebPrinter[]>;
}

declare var WebPrintingManager: {
    prototype: WebPrintingManager;
    new(): WebPrintingManager;
};

type WebPrintingMimeMediaType = "application/pdf";

type WebPrintingMultipleDocumentHandling =
    | "separate-documents-collated-copies"
    | "separate-documents-uncollated-copies";

type WebPrintingOrientationRequested =
    | "portrait"
    | "landscape";

type WebPrintingResolutionUnits =
    | "dots-per-inch"
    | "dots-per-centimeter";

type WebPrintingSides =
    | "one-sided"
    | "two-sided-long-edge"
    | "two-sided-short-edge";

type WebPrintQuality =
    | "draft"
    | "normal"
    | "high";

type WebPrintColorMode =
    | "color"
    | "monochrome";

type WebPrinterState =
    | "idle"
    | "processing"
    | "stopped";

type WebPrinterStateReason =
    | "none"
    | "other"
    | "connecting-to-device"
    | "cover-open"
    | "developer-empty"
    | "developer-low"
    | "door-open"
    | "fuser-over-temp"
    | "fuser-under-temp"
    | "input-tray-missing"
    | "interlock-open"
    | "interpreter-resource-unavailable"
    | "marker-supply-empty"
    | "marker-supply-low"
    | "marker-waste-almost-full"
    | "marker-waste-full"
    | "media-empty"
    | "media-jam"
    | "media-low"
    | "media-needed"
    | "moving-to-paused"
    | "opc-life-over"
    | "opc-near-eol"
    | "output-area-almost-full"
    | "output-area-full"
    | "output-tray-missing"
    | "paused"
    | "shutdown"
    | "spool-area-full"
    | "stopped-partly"
    | "stopping"
    | "timed-out"
    | "toner-empty"
    | "toner-low"
    | "cups-pki-expired";

interface WebPrintingRange {
    /** The lower bound of the range. */
    from?: number;
    /** The upper bound of the range. */
    to?: number;
}

interface WebPrintingResolution {
    /** Resolution in the cross-feed direction. */
    crossFeedDirectionResolution?: number;
    /** Resolution in the feed direction. */
    feedDirectionResolution?: number;
    /** The units used for the resolution values. */
    units?: WebPrintingResolutionUnits;
}

type WebPrintingMediaSizeDimension = WebPrintingRange | number;

interface WebPrintingMediaSize {
    /** The vertical dimension of the media size. */
    yDimension?: WebPrintingMediaSizeDimension;
    /** The horizontal dimension of the media size. */
    xDimension?: WebPrintingMediaSizeDimension;
}

interface WebPrintingMediaCollection {
    /** A string representing the name of the media collection. */
    mediaSizeName?: string;
    /** The media size associated with the collection. */
    mediaSize?: WebPrintingMediaSize;
}

interface WebPrintingMediaSizeRequested {
    /** The requested vertical dimension of the media size. */
    yDimension: number;
    /** The requested horizontal dimension of the media size. */
    xDimension: number;
}

interface WebPrintingMediaCollectionRequested {
    /** The requested media size. */
    mediaSize: WebPrintingMediaSizeRequested;
}

interface WebPrintJobTemplateAttributes {
    /** The number of copies to be printed. */
    copies?: number;
    /** The requested media collection attributes for the print job. */
    mediaCol?: WebPrintingMediaCollectionRequested;
    /** A string representing the input source or tray for the media. */
    mediaSource?: string;
    /** The handling method for multiple documents in a print job. */
    multipleDocumentHandling?: WebPrintingMultipleDocumentHandling;
    /** The requested page orientation for the print job. */
    orientationRequested?: WebPrintingOrientationRequested;
    /** The resolution settings for the print job. */
    printerResolution?: WebPrintingResolution;
    /** The color mode to be used for printing. */
    printColorMode?: WebPrintColorMode;
    /** The print quality setting. */
    printQuality?: WebPrintQuality;
    /** The sides printing mode (e.g., simplex or duplex). */
    sides?: WebPrintingSides;
    /** An AbortSignal that can be used to abort the print job operation. */
    signal?: AbortSignal;
}

interface WebPrinterAttributes {
    /** A string representing the human-readable name of the printer. */
    printerName?: string;
    /** A string representing the unique identifier of the printer. */
    printerId?: string;
    /** The default number of copies. */
    copiesDefault?: number;
    /** The range of supported copy counts. */
    copiesSupported?: WebPrintingRange;
    /** The default media collection attribute. */
    mediaColDefault?: WebPrintingMediaCollection;
    /** A sequence of supported media collections available on the printer. */
    mediaColDatabase?: WebPrintingMediaCollection[];
    /** A string representing the default media source. */
    mediaSourceDefault?: string;
    /** A sequence of strings representing supported media sources. */
    mediaSourceSupported?: string[];
    /** The default document format accepted by the printer. */
    documentFormatDefault?: WebPrintingMimeMediaType;
    /** A sequence of supported document formats. */
    documentFormatSupported?: WebPrintingMimeMediaType[];
    /** The default multiple document handling mode. */
    multipleDocumentHandlingDefault?: WebPrintingMultipleDocumentHandling;
    /** A sequence of supported multiple document handling modes. */
    multipleDocumentHandlingSupported?: WebPrintingMultipleDocumentHandling[];
    /** The default orientation requested. */
    orientationRequestedDefault?: WebPrintingOrientationRequested;
    /** A sequence of supported page orientations. */
    orientationRequestedSupported?: WebPrintingOrientationRequested[];
    /** The default printer resolution. */
    printerResolutionDefault?: WebPrintingResolution;
    /** A sequence of supported printer resolutions. */
    printerResolutionSupported?: WebPrintingResolution[];
    /** The default color mode. */
    printColorModeDefault?: WebPrintColorMode;
    /** A sequence of supported color modes. */
    printColorModeSupported?: WebPrintColorMode[];
    /** The current operational state of the printer. */
    printerState?: WebPrinterState;
    /**
     * A string representing additional details regarding the current printer
     * state.
     */
    printerStateMessage?: string;
    /** A sequence of reasons explaining the current printer state. */
    printerStateReasons?: WebPrinterStateReason[];
    /** The default print quality. */
    printQualityDefault?: WebPrintQuality;
    /** A sequence of supported print qualities. */
    printQualitySupported?: WebPrintQuality[];
    /** The default sides printing mode. */
    sidesDefault?: WebPrintingSides;
    /** A sequence of supported sides printing modes. */
    sidesSupported?: WebPrintingSides[];
}

interface WebPrinter {
    /** Synchronously returns the currently cached attributes of the web printer. */
    cachedAttributes(): WebPrinterAttributes;
    /**
     * Fetches the latest attributes from the web printer asynchronously.
     * @return A Promise that resolves to a WebPrinterAttributes object containing
     *   the updated printer capabilities and settings.
     * @throws {InvalidStateError} If a call to fetchAttributes() is already in
     *   progress.
     * @throws {NetworkError} If unable to connect to the printer.
     * @throws {NotAllowedError} If user permission to access the Web Printing API
     *   is denied.
     * @throws {NotSupportedError} If the execution context has shut down.
     */
    fetchAttributes(): Promise<WebPrinterAttributes>;
    /**
     * Submits a print job to the web printer with the specified document and
     * template attributes.
     * @param job_name A string representing the name of the print job.
     * @param document_data A Blob containing the document data to be printed.
     * @param attributes The template attributes defining print options such as
     *   paper size, color mode, and orientation.
     * @return A Promise that resolves to a WebPrintJob object representing the
     *   submitted print job.
     * @throws {TypeError} If the specified template attributes are invalid.
     * @throws {DataError} If the requested attributes do not align with the
     *   printer capabilities or the document data is malformed.
     * @throws {NetworkError} If unable to connect to the printer.
     * @throws {NotAllowedError} If user permission to access the Web Printing API
     *   is denied.
     * @throws {NotSupportedError} If the execution context has shut down.
     */
    submitPrintJob(
        job_name: string,
        document_data: Blob,
        attributes: WebPrintJobTemplateAttributes,
    ): Promise<WebPrintJob>;
}

declare var WebPrinter: {
    prototype: WebPrinter;
    new(): WebPrinter;
};

type WebPrintJobState =
    | "preliminary"
    | "pending"
    | "processing"
    | "completed"
    | "canceled"
    | "aborted";

interface WebPrintJobAttributes {
    /** A string representing the name of the print job. */
    jobName?: string;
    /** The total number of pages in the print job. */
    jobPages?: number;
    /** The number of pages that have been printed so far. */
    jobPagesCompleted?: number;
    /** The current execution state of the print job. */
    jobState?: WebPrintJobState;
}

interface WebPrintJobEventMap {
    "jobstatechange": Event;
}

interface WebPrintJob extends EventTarget {
    /**
     * Retrieves the current attributes of the print job.
     * @return A WebPrintJobAttributes object containing the job's current details.
     */
    attributes(): WebPrintJobAttributes;
    /** Attempts to cancel the ongoing print job. */
    cancel(): void;
    /**
     * EventHandler for the jobstatechange event, triggered when the print job
     * changes state.
     */
    onjobstatechange: ((this: this, ev: Event) => any) | null;

    addEventListener<K extends keyof WebPrintJobEventMap>(
        type: K,
        listener: (this: this, ev: WebPrintJobEventMap[K]) => any,
        options?: boolean | AddEventListenerOptions,
    ): void;
    addEventListener(
        type: string,
        listener: EventListenerOrEventListenerObject,
        options?: boolean | AddEventListenerOptions,
    ): void;
    removeEventListener<K extends keyof WebPrintJobEventMap>(
        type: K,
        listener: (this: this, ev: WebPrintJobEventMap[K]) => any,
        options?: boolean | EventListenerOptions,
    ): void;
    removeEventListener(
        type: string,
        listener: EventListenerOrEventListenerObject,
        options?: boolean | EventListenerOptions,
    ): void;
}

declare var WebPrintJob: {
    prototype: WebPrintJob;
    new(): WebPrintJob;
};
