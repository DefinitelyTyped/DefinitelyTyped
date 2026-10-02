/**
 * @see https://github.com/WICG/web-printing
 */

interface Window {
    readonly printing: WebPrintingManager;
}

declare var printing: WebPrintingManager;

interface WebPrintingManager {
    /**
     * Retrieves a list of available web printers accessible to the system.
     * @return A Promise that resolves to an array of WebPrinter objects
     *   representing the available printers.
     * @throws {NotAllowedError} If the access to web printing is not allowed.
     */
    getPrinters(): Promise<WebPrinter[]>;
}

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
    /** The resolution in the cross-feed direction, measured in units per distance. */
    crossFeedDirectionResolution?: number;
    /** The resolution in the feed direction, measured in units per distance. */
    feedDirectionResolution?: number;
    /** The unit of measurement used for the resolution values. */
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
    /** A string representing the name of the media size. */
    mediaSizeName?: string;
    /** The dimensions associated with the media size collection. */
    mediaSize?: WebPrintingMediaSize;
}

interface WebPrintingMediaSizeRequested {
    /** The requested vertical dimension. */
    yDimension: number;
    /** The requested horizontal dimension. */
    xDimension: number;
}

interface WebPrintingMediaCollectionRequested {
    /** The requested media size. */
    mediaSize: WebPrintingMediaSizeRequested;
}

interface WebPrintJobTemplateAttributes {
    /** The number of copies to be printed. */
    copies?: number;
    /** The requested media collection for the print job. */
    mediaCol?: WebPrintingMediaCollectionRequested;
    /** A string representing the input tray or source for the media. */
    mediaSource?: string;
    /** Specifies how multiple documents are handled in the print job. */
    multipleDocumentHandling?: WebPrintingMultipleDocumentHandling;
    /** The requested orientation for the printed pages. */
    orientationRequested?: WebPrintingOrientationRequested;
    /** The printer resolution settings for the job. */
    printerResolution?: WebPrintingResolution;
    /** The color mode used for printing, such as color or monochrome. */
    printColorMode?: WebPrintColorMode;
    /** The requested print quality level. */
    printQuality?: WebPrintQuality;
    /** Specifies whether printing is single-sided or double-sided. */
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
    /** An array of supported media collections available on the printer. */
    mediaColDatabase?: WebPrintingMediaCollection[];
    /** A string representing the default media source. */
    mediaSourceDefault?: string;
    /** An array of strings representing supported media sources. */
    mediaSourceSupported?: string[];
    /** The default document format accepted by the printer. */
    documentFormatDefault?: WebPrintingMimeMediaType;
    /** An array of supported document formats. */
    documentFormatSupported?: WebPrintingMimeMediaType[];
    /** The default multiple document handling setting. */
    multipleDocumentHandlingDefault?: WebPrintingMultipleDocumentHandling;
    /** An array of supported multiple document handling options. */
    multipleDocumentHandlingSupported?: WebPrintingMultipleDocumentHandling[];
    /** The default orientation requested setting. */
    orientationRequestedDefault?: WebPrintingOrientationRequested;
    /** An array of supported orientation options. */
    orientationRequestedSupported?: WebPrintingOrientationRequested[];
    /** The default printer resolution. */
    printerResolutionDefault?: WebPrintingResolution;
    /** An array of supported printer resolutions. */
    printerResolutionSupported?: WebPrintingResolution[];
    /** The default print color mode. */
    printColorModeDefault?: WebPrintColorMode;
    /** An array of supported print color modes. */
    printColorModeSupported?: WebPrintColorMode[];
    /** The current operational state of the printer. */
    printerState?: WebPrinterState;
    /**
     * A human-readable string providing additional details about the printer
     * state.
     */
    printerStateMessage?: string;
    /**
     * An array of reasons detailing the current printer state, such as warnings or
     * errors.
     */
    printerStateReasons?: WebPrinterStateReason[];
    /** The default print quality level. */
    printQualityDefault?: WebPrintQuality;
    /** An array of supported print quality levels. */
    printQualitySupported?: WebPrintQuality[];
    /** The default sides printing setting. */
    sidesDefault?: WebPrintingSides;
    /** An array of supported sides printing options. */
    sidesSupported?: WebPrintingSides[];
}

interface WebPrinter {
    /**
     * Retrieves the currently cached attribute values for the printer without
     * performing a network fetch.
     * @return The cached attributes of the printer.
     */
    cachedAttributes(): WebPrinterAttributes;
    /**
     * Fetches the current attributes and capabilities of the printer from the
     * device.
     * @return A Promise that resolves to the latest printer attributes.
     * @throws {NetworkError} If communication with the printer fails.
     */
    fetchAttributes(): Promise<WebPrinterAttributes>;
    /**
     * Submits a print job containing a document and specified configuration
     * attributes to the printer.
     * @param job_name A string representing the name of the print job.
     * @param document_data A Blob containing the raw data of the document to be
     *   printed.
     * @param attributes The template attributes defining print options such as
     *   color, media size, and duplexing.
     * @return A Promise that resolves to a WebPrintJob representing the submitted
     *   job.
     * @throws {NotAllowedError} If permission to print is denied.
     * @throws {TypeError} If the document data is empty or the attributes are
     *   invalid.
     */
    submitPrintJob(
        job_name: string,
        document_data: Blob,
        attributes: WebPrintJobTemplateAttributes,
    ): Promise<WebPrintJob>;
}

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
    /** The current state of the print job. */
    jobState?: WebPrintJobState;
}

interface WebPrintJobEventMap {
    "jobstatechange": Event;
}

interface WebPrintJob extends EventTarget {
    /**
     * Retrieves the current attributes of the print job.
     * @return A WebPrintJobAttributes object containing details about the print
     *   job.
     */
    attributes(): WebPrintJobAttributes;
    /** Requests the cancellation of the print job. */
    cancel(): void;
    /** EventHandler invoked when the state of the print job changes. */
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
