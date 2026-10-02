async function testWebPrintingApi() {
    // --------------------------------------------------------------------------------
    // Synchronous Type Definitions (Enums, Dictionaries)
    // --------------------------------------------------------------------------------

    const mimeType: WebPrintingMimeMediaType = "application/pdf";
    // $ExpectType "application/pdf"
    mimeType;

    const docHandling: WebPrintingMultipleDocumentHandling = "separate-documents-collated-copies";
    // $ExpectType "separate-documents-collated-copies"
    docHandling;

    const orientation: WebPrintingOrientationRequested = "portrait";
    // $ExpectType "portrait"
    orientation;

    const resolutionUnits: WebPrintingResolutionUnits = "dots-per-inch";
    // $ExpectType "dots-per-inch"
    resolutionUnits;

    const sides: WebPrintingSides = "two-sided-long-edge";
    // $ExpectType "two-sided-long-edge"
    sides;

    const quality: WebPrintQuality = "high";
    // $ExpectType "high"
    quality;

    const colorMode: WebPrintColorMode = "color";
    // $ExpectType "color"
    colorMode;

    const printerState: WebPrinterState = "idle";
    // $ExpectType "idle"
    printerState;

    const stateReason: WebPrinterStateReason = "media-empty";
    // $ExpectType "media-empty"
    stateReason;

    const jobState: WebPrintJobState = "processing";
    // $ExpectType "processing"
    jobState;

    const range: WebPrintingRange = {
        from: 1,
        to: 10,
    };
    // $ExpectType number | undefined
    range.from;
    // $ExpectType number | undefined
    range.to;

    const resolution: WebPrintingResolution = {
        crossFeedDirectionResolution: 300,
        feedDirectionResolution: 300,
        units: resolutionUnits,
    };
    // $ExpectType WebPrintingResolutionUnits | undefined
    resolution.units;

    const mediaSizeDimensionNumber: WebPrintingMediaSizeDimension = 21000;
    // $ExpectType number
    mediaSizeDimensionNumber;

    const mediaSizeDimensionRange: WebPrintingMediaSizeDimension = range;
    // $ExpectType WebPrintingRange
    mediaSizeDimensionRange;

    const mediaSize: WebPrintingMediaSize = {
        xDimension: 21000,
        yDimension: { from: 29700, to: 29700 },
    };
    // $ExpectType WebPrintingMediaSizeDimension | undefined
    mediaSize.xDimension;

    const mediaCollection: WebPrintingMediaCollection = {
        mediaSizeName: "iso_a4_210x297mm",
        mediaSize,
    };
    // $ExpectType string | undefined
    mediaCollection.mediaSizeName;

    // @ts-expect-error - Missing required xDimension and yDimension
    const invalidMediaSizeRequested: WebPrintingMediaSizeRequested = {};

    const mediaSizeRequested: WebPrintingMediaSizeRequested = {
        xDimension: 21000,
        yDimension: 29700,
    };
    // $ExpectType number
    mediaSizeRequested.xDimension;

    // @ts-expect-error - Missing required mediaSize
    const invalidMediaColRequested: WebPrintingMediaCollectionRequested = {};

    const mediaColRequested: WebPrintingMediaCollectionRequested = {
        mediaSize: mediaSizeRequested,
    };
    // $ExpectType WebPrintingMediaSizeRequested
    mediaColRequested.mediaSize;

    // --------------------------------------------------------------------------------
    // WebPrintingManager (Window Augmentation)
    // --------------------------------------------------------------------------------

    if (window.printing) {
        const printingManager = window.printing;
        // $ExpectType WebPrintingManager
        printingManager;

        // $ExpectType Promise<WebPrinter[]>
        printingManager.getPrinters();

        // $ExpectType Promise<WebPrinter[]>
        printing.getPrinters();
    }

    // --------------------------------------------------------------------------------
    // WebPrinter & WebPrinterAttributes
    // --------------------------------------------------------------------------------

    const printer: WebPrinter = {} as WebPrinter;

    const cachedAttrs = printer.cachedAttributes();
    // $ExpectType WebPrinterAttributes
    cachedAttrs;
    // $ExpectType string | undefined
    cachedAttrs.printerName;
    // $ExpectType string | undefined
    cachedAttrs.printerId;
    // $ExpectType WebPrinterState | undefined
    cachedAttrs.printerState;
    // $ExpectType WebPrinterStateReason[] | undefined
    cachedAttrs.printerStateReasons;
    // $ExpectType "application/pdf" | undefined
    cachedAttrs.documentFormatDefault;

    const fetchedAttrsPromise = printer.fetchAttributes();
    // $ExpectType Promise<WebPrinterAttributes>
    fetchedAttrsPromise;

    const templateAttributes: WebPrintJobTemplateAttributes = {
        copies: 2,
        mediaCol: mediaColRequested,
        mediaSource: "main",
        multipleDocumentHandling: docHandling,
        orientationRequested: orientation,
        printerResolution: resolution,
        printColorMode: colorMode,
        printQuality: quality,
        sides,
        signal: {} as AbortSignal,
    };

    const documentData = new Blob(["PDF content"], { type: "application/pdf" });
    const printJobPromise = printer.submitPrintJob(
        "My Print Job",
        documentData,
        templateAttributes,
    );
    // $ExpectType Promise<WebPrintJob>
    printJobPromise;

    // --------------------------------------------------------------------------------
    // WebPrintJob & Events
    // --------------------------------------------------------------------------------

    const printJob: WebPrintJob = {} as WebPrintJob;

    const jobAttrs = printJob.attributes();
    // $ExpectType WebPrintJobAttributes
    jobAttrs;
    // $ExpectType string | undefined
    jobAttrs.jobName;
    // $ExpectType number | undefined
    jobAttrs.jobPages;
    // $ExpectType number | undefined
    jobAttrs.jobPagesCompleted;
    // $ExpectType WebPrintJobState | undefined
    jobAttrs.jobState;

    // $ExpectType void
    printJob.cancel();

    // $ExpectType ((this: WebPrintJob, ev: Event) => any) | null
    printJob.onjobstatechange;

    printJob.addEventListener("jobstatechange", (e) => {
        // $ExpectType Event
        e;
    });

    printJob.addEventListener("jobstatechange", function(e) {
        // $ExpectType WebPrintJob
        this;
    });
}
