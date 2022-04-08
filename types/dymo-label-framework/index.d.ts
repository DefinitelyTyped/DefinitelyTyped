// Type definitions for DYMO Label Framework v1.2.6
// Project: http://www.labelwriter.com/software/dls/sdk/docs/DYMOLabelFrameworkJavaScriptHelp/index.html
// Definitions by: Thijs Kuipers <https://github.com/thijskuipers>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/**
 * Top namespace for DYMO Label Framework JavaScript library.
 * Latest library available at http://labelwriter.com/software/dls/sdk/js/DYMO.Label.Framework.latest.js
 *
 * Based on information from http://www.labelwriter.com/software/dls/sdk/docs/DYMOLabelFrameworkJavaScriptHelp/index.html
 * which is Copyright (c), 2010, Sanford, L.P. All Rights Reserved.
 *
 * Based on information from http://developers.dymo.com/2010/06/02/dymo-label-framework-overview/
 * which is © 2013 DYMO Label Inside Out
 */
declare namespace dymo.label.framework {

    /** Enumeration that specifies where to draw the Intellegent Mail barcode for an Address object. */
    enum AddressBarcodePosition {
        /** Indicates to print the barcode above the address. */
        AboveAddress,
        /** Indicates to print the barcode below the address. */
        BelowAddress,
        /** Indicates to not print the barcode at all. */
        Suppress
    }

    /**
     * Emuneration that specifies the direction in which objects and object text are laid out on the label.
     * For Middle East labels/content specify "RightToLeft", otherwise specify "LeftToRight" (default).
     */
    enum FlowDirection {
        /** Indicates that the content flows from left to right. */
        LeftToRight,
        /** Indicates that the content flows from right to left. */
        RightToLeft
    }

    /**
     * Enumeration that specifies the print quality when printing to a LabelWriter printer.
     */
    enum LabelWriterPrintQuality {
        /** Indicates that text print quality (fast) is used. */
        Text,
        /** Indicates that barcode and images print quality (slow) is used. */
        BarcodeAndGraphics,
        /** Indicates that the print quality is automatically determined based on the types of objects on the label. */
        Auto
    }

    /** Print Job Status */
    enum PrintJobStatus {
        Error,
        Finished,
        InQueue,
        InvalidJobId,
        NotSpooled,
        PaperOut,
        PrinterBusy,
        Printing,
        ProcessingError,
        Unknown
    }

    /** Enumeration that specifies the leader and trailer for a tape label when printing to a Tape printer. */
    enum TapeAlignment {
        /** Indicates a 10mm leader and a 10mm trailer. */
        Center,
        /** Indicates a 6mm leader and a 10mm trailer. */
        Left,
        /** Indicates a 10mm leader and a 6mm trailer. */
        Right
    }

    /** Enumeration that specifies the tape cut mode when printing multiple labels to a Tape printer. Note: This enumeration affects multiple page print jobs only. If a one page job is printed, the tape is always cut. */
    enum TapeCutMode {
        /** Indicates to cut the tape between labels. */
        AutoCut,
        /** Indicates to print cut marks between labels. */
        ChainMarks
    }

    /** Enumeration that specifies which roll to print to when printing to a Twin Turbo printer. */
    enum TwinTurboRoll {
        /** Indicates to print to the left roll only. */
        Left,
        /** Indicates to print to the right roll only. */
        Right,
        /** Indicates to continue printing to the other roll when the current roll is out of paper. Note: This does not indicate which roll to print to first; printing may start on either roll. */
        Auto
    }

    /** Returns the library version number, e.g. "1.2.6" */
    var VERSION: string;

    /** Checks that the browser enviroment is suitable for the Framework. */
    function checkEnvironment(): {
        /** Indicates whether the browser is supported or not. */
        isBrowserSupported: boolean;
        /** Indicates whether the Framework is installed or not. */
        isFrameworkInstalled: boolean;
        /** An empty string if no error is detected; an error message if an error is detected. */
        errorDetails: string;
    };

    /**
     * Object with properties 'a' or 'alpha' to specify color's alpha channel,
     * r/red, g/green, b/blue for red, green, blue channels.
     * The valid range for a/r/g/b fields is [0..255].
     */
    interface Color {
        /** alpha channel [0..255] default: 255 */
        alpha?: number;
        /** red channel [0..255] default: 0 */
        red?: number;
        /** green channel [0..255] default: 0 */
        green?: number;
        /** blue channel [0..255] default: 0 */
        blue?: number;
    }

    interface CreateLabelRenderParamsXmlParams {
        /** The color of the label. */
        labelColor?: Color;
        /** The color of label shadow. */
        shadowColor?: Color;
        /** The shadow width in TWIPS. If '0' is specified, no shadow is rendered. */
        shadowDepth?: number;
        /**  The direction of the label content on the label (left-to-right or right-to-left). Use the dymo.label.framework.FlowDirection enumeration to specify the value. */
        flowDirection?: FlowDirection;
        /**
         * If true, the PNG will be generated using the display resolution.
         * If false, the PNG will be generated using the printer resolution.
         * If the display resolution is used, the resulting PNG will be smaller.
         * Use the printer resolution if the resulting image will be zoomed. This will give the zoomed preview better quality.
         */
        pngUseDisplayResolution?: boolean;
    }

    /**
     * Creates an XML string suitable to pass to the dymo.label.framework.renderLabel function
     * as renderParamsXml parameter. Returns an XML string.
     *
     * @param params A JavaScript object with the following properties
     *   (not all properties must be defined; if a property is not defined, a default value is used)
     */
    function createLabelRenderParamsXml(params: CreateLabelRenderParamsXmlParams): string;

    interface CreateLabelWriterPrintParamsXmlParams {
        /** The number of copies to print. */
        copies?: number;
        /** The print job title/description. */
        jobTitle?: string;
        /** The direction of the label content on the label (left-to-right or right-to-left). Use the dymo.label.framework.FlowDirection enumeration to specify the value. */
        flowDirection?: FlowDirection;
        /** The print quality. Use the dymo.label.framework.LabelWriterPrintQuality enumeration to specify the value. */
        printQuality?: LabelWriterPrintQuality;
        /** The roll to print to if the printer is a TwinTurbo printer. Use the dymo.label.framework.TwinTurboRoll enumeration to specify the value. */
        twinTurboRoll?: TwinTurboRoll;
    }

    /**
     * Creates an XML string suitable to to pass to the dymo.label.framework.printLabel function
     * as printParamsXml parameter. Created print parameters are for printing to LabelWriter printers.
     * Returns an XML string.
     *
     * @param params A JavaScript object with the following properties
     *   (not all properties must be defined; if a property is not defined, a default value is used)
     */
    function createLabelWriterPrintParamsXml(params: CreateLabelWriterPrintParamsXmlParams): string;

    interface CreateTapePrintParamsXmlParams {
        /** The number of copies to print. */
        copies?: number;
        /** The print job title/description. */
        jobTitle?: string;
        /** The direction of the label content on the label (left-to-right or right-to-left). Use the dymo.label.framework.FlowDirection enumeration to specify the value. */
        flowDirection?: FlowDirection;
        /** The label alignment on the tape. Use the dymo.label.framework.TapeAlignment enumeration to specify the value. */
        alignment?: TapeAlignment;
        /** The cut mode (if auto-cut is supported by the printer). Use the dymo.label.framework.TapeCutMode enumeration to specify the value. */
        cutMode?: TapeCutMode;
    }

    /**
     * Creates an XML string suitable to pass to the dymo.label.framework.printLabel function as printParamsXml parameter. Created print parameters are for printing to Tape printers.
     * Returns an XML string.
     *
     * @param params A JavaScript object with the following properties
     *   (not all properties must be defined; if a property is not defined, a default value is used)
     */
    function createTapePrintParamsXml(params: CreateTapePrintParamsXmlParams): string;

    interface PrinterInfo {
        /** Indicates whether the Auto-Cut feature is supported by the printer or not. Note: The property is only defined if printerType is "TapePrinter". */
        isAutoCutSupported: boolean;
        /** Indicates whether the printer is connected to a computer or not. Note: Currently only returns properly for local USB-connected printers on Windows. */
        isConnected: boolean;
        /** Indicates whether the printer is a local USB-connected printer or a shared network printer. Note: Currently only returns properly on Windows. */
        isLocal: boolean;
        /** Indicates whether the printer is a "LabelWriter Twin Turbo" (has two rolls) or not. Note: The property is only defined if printerType is "LabelWriterPrinter". */
        isTwinTurbo: boolean;
        /** Returns the printer model/driver name. */
        modelName: string;
        /** Returns the printer name (print queue name on Mac). */
        name: string;
        /** Returns the printer type; "LabelWriterPrinter" or "TapePrinter". */
        printerType: string;
    }

    /**
     * Gets a list of all printers supported by the DYMO Label Framework.
     * Results are returned in an array-like object.
     * Each item is of the type dymo.label.framework.PrinterInfo.
     * In addition, items can be accessed by printer name.
     */
    function getPrinters(): PrinterInfo[];

    /**
     * Convenience method (overload of getPrinters) to get a list of all printers of type "LabelWriterPrinter".
     */
    function getLabelWriterPrinters(): PrinterInfo[];

    /**
     * Convenience method (overload of getPrinters) to get a list of all printers of type "TapePrinter".
     */
    function getTapePrinters(): PrinterInfo[];

    /**
     * Loads an image from a URL or file and returns it as a base64-encoded PNG stream.
     * The loaded image is not necessarily in PNG format.
     * The image can be in any format supported by the Framework (by DYMO Label v.8).
     * The loaded data can be used to set content for an image object on a label.
     * Note: The comments for {@link openLabelFile} apply to this function as well.
     *
     * @param imageUri URL or file name to load the image from.
     *
     * @returns A base64-encoded PNG stream.
     */
    function loadImageAsPngBase64(imageUri: string): string;

    /** Print Job */
    interface PrintJob {
        /**
         * Gets a status of the print job
         *
         * @param replyCallback a function called when the status is available
         */
        getStatus(replyCallback: (printJobStatusInfo: PrintJobStatusInfo) => any): void;
    }

    /** Print Job Status Info */
    interface PrintJobStatusInfo {
        statusMessage: string;
        status: PrintJobStatus;
    }

    /**
     * There is no constructor function for ILabel. To get ILabel instance use the
     * dymo.label.framework.openLabelFile or dymo.label.framework.openLabelXml function.
     * ILabel provides methods for manipulating label content, such as set address or text
     * on the label.
     */
    interface ILabel {
        /**
         * Gets the Intelligent Mail barcode position for an Address object.
         *
         * @param addressIndex The zero-based index of the Address object in a 'virtual' array of all Address objects on the label.
         *
         * @returns A string with one of the values defined by the dymo.label.framework.AddressBarcodePosition enumeration.
         */
        getAddressBarcodePosition(addressIndex: number): AddressBarcodePosition;

        /**
         * Gets the number of Address objects on the label.
         */
        getAddressObjectCount(): number;

        /**
         * Gets the text content of an Address object.
         *
         * @param addressIndex The zero-based index of the Address object in a 'virtual' array of all Address objects on the label.
         *
         * @returns The plain text from the Address object.
         */
        getAddressText(addressIndex: number): string;

        /**
         * Returns the current label as an XML string. The returned XML string can be passed
         * to functions that accept label XML as a parameter, or can be used to direct content
         * manipulations not currently supported by the Framework.
         */
        getLabelXml(): string;

        /**
         * Gets an array of object reference names on the label. Returns an array of strings.
         */
        getObjectNames(): string[];

        /**
         * Gets the 'text' content of an object. The content depends on the object type.
         * * Address and Text objects - Returns the object text without formatting.
         * * Barcode object - Returns the barcode string.
         * * Image - Returns the base64-encoded string on the image's PNG stream (only if image data is embedded with the label and not linked to a URL or file).
         * * Circular Text object - Returns the object text.
         * * Other objects - Returns an empty string.
         *
         * @param objectName The name of the object.
         */
        getObjectText(objectName: string): string;

        /**
         * Prints the label.
         *
          * @param printerName The name of the printer to print to. A list of printers can be obtained using dymo.label.framework.getPrinters.
          * @param printParamsXml The print parameters, such as number of copies, print quality, etc. See [PrintParams.xsd]{@link http://labelwriter.com/software/dls/sdk/PrintParams.xsd}.
          * @param labelSetXml
         *   The LabelSet to print. LabelSet is used to print multiple labels with the same layout, but with different
         *   data, such as multiple addresses. Use the dymo.label.framework.LabelSetBuilder class to create a LabelSet
         *   or construct XML manually according to [LabelSet.xsd]{@link http://labelwriter.com/software/dls/sdk/LabelSet.xsd}.
         */
        print(printerName: string, printParamsXml: string, labelSetXml: string): void;

        /**
         * Prints a label and runs status checking in a loop
         *
          * @param printerName The name of the printer to print to. A list of printers can be obtained using dymo.label.framework.getPrinters.
          * @param printParamsXml The print parameters, such as number of copies, print quality, etc. See [PrintParams.xsd]{@link http://labelwriter.com/software/dls/sdk/PrintParams.xsd}.
          * @param labelSetXml The LabelSet to print.
         *   LabelSet is used to print multiple labels with the same layout, but with different data, such as multiple
         *   addresses. Use the dymo.label.framework.LabelSetBuilder class to create a LabelSet or construct XML manually
         *   according to [LabelSet.xsd]{@link http://labelwriter.com/software/dls/sdk/LabelSet.xsd}.
         * @param statusCallback Status callback function called when the service returned status information.
         *   The callback takes two parameters; the first is PrintJob object. It can be used to get the status information on demand,
         *   without using polling. Also, it might be extended in the future to provide more control over the print job, e.g. an ability
         *   to cancel it. The second parameter to the callback is PrintJobStatusInfo class. PrintJobStatusInfo has two properties:
         *   statusMessage that contains a status message string; and status that contains status code. The callback has to return a
         *   boolean value. If true is returned, than pritnAndPollStatus() will poll the service again after the pollInterval passed.
         *   If false is returned, then printAndPollStatus() finishes processing.
         * @param pollInterval Interval in milliseconds to ask the proxy service for the job status information.
         *
         * @returns The print job.
         */
        printAndPollStatus(
            printerName: string,
            printParamsXml: string,
            labelSetXml: string,
            statusCallback: (printJob: PrintJob, printJobStatusInfo: PrintJobStatusInfo) => boolean,
            pollInterval: number): PrintJob;

        /**
         * Creates a label raster image that can be used for label previewing.
         *
         * @param renderParamsXml Rendering parameters, such as shadow depth, label color, etc.
         *   See [LabelRenderParams.xsd]{@link http://labelwriter.com/software/dls/sdk/LabelRenderParams.xsd}.
         * @param printerName The name of the printer that the preview is generated for.
         *   The preview/output can be different for different printers,
         *   especially for tape printers with different print head sizes.
         *   If it is not important what printer the label is printed to,
         *   an empty string can be passed. In this case, the default printer metrics will
         *   be used. The default is LW400 for LabelWriter printers and LW400 DUO Tape for
         *   tape printers.
         */
        render(renderParamsXml: string, printerName: string): string;

        /**
         * Sets the Intelligent Mail barcode position for an Address object.
         *
         * @param addressIndex The zero-based index of the Address object in a 'virtual' array of all Address objects on the label.
         * @param barcodePosition The barcode position.
         *
         * @returns self
         */
        setAddressBarcodePosition(addressIndex: number, barcodePosition: AddressBarcodePosition): ILabel;

        /**
         * Sets the text content of an Address object.
         *
         * @param addressIndex The zero-based index of the Address object in a 'virtual' array of all Address objects on the label.
          * @param text The plain text string that contains the content of the Address object. Note: The current text formatting is retained on a line-by-line basis.
          *
          * @returns self
         */
        setAddressText(addressIndex: number, text: string): ILabel;

        /**
         * Sets the text content for an object. The content and/or text formatting are set differently
         * depending on the object type.
         *
         * * Address object - The formatting is applied on a line-by-line basis (using list).
         * * Text object - The formatting of the current first character is applied to all text.
         * * Barcode object - The barcode text.
         * * Image object - The base64-encoded string of image's PNG stream.
         * * CircularText object - The object text.
         * * Date and Time and Counter objects - The object's 'Before' text.
         * * Other objects - An empty string.
         *
         * @param objectName The name of the object.
         * @param text The plain text string for new object content.
         */
        setObjectText(objectName: string, text: string): ILabel;
    }

    /**
     * ILabelSetRecord instance holds data of one LabelSet record. ILabelSetRecord provides
     * methods for adding data to the record. To create ILabelSetRecord instance,
     * use dymo.label.framework.LabelSetBuilder.prototype.addRecord method.
     */
    interface ILabelSetRecord {
        /**
         * Adds image data to the record.
         *
          * @param objectName The name of the object that the markup is set for.
          * @param base64Image The string containing the base64-encoded PNG image stream.
         *
         * @returns self
         */
        setBase64Image(objectName: string, base64Image: string): ILabelSetRecord;

        /** Adds data to the record specified as plain text.
         *
         * @param objectName The name of the object that the markup is set for.
         * @param text The object text to set.
         *
         * @returns self
         */
        setText(objectName: string, text: string): ILabelSetRecord;

        /**
         * Adds data to the record specified as text markup.
         *
         * @param objectName The name of the object that the markup is set for.
          * @param textMarkup The markup string. See [TextMarkup.xsd]{@link http://labelwriter.com/software/dls/sdk/TextMarkup.xsd}.
         *
         * @returns self
         */
        setTextMarkup(objectName: string, textMarkup: string): ILabelSetRecord;
    }

    /**
     * Loads label content from a file or URL.
     * The following considerations should be taken before using this function:
     *
     * * The full file name or URL should be specified. The function will not honor relative paths based on document.location.href.
     * * The fileName can be an http:// or file:// URL. On Windows the file name can be a regular file name, for example 'c:\users\desktop\address.label'.
     * * The content of the label will be loaded synchronously. Therefore, if the remote server is down there will be a timeout.
     * * Any local file can be accessed or attempted to be accessed. The function is not limited by any browser restrictions. However, only a valid label file (according to label.xsd schema) can be loaded. This could still be a potential security concern.
     * * The URL is not limited to same-site-origin browser policy. Any URL can be opened.
     * * The proxy settings are the system default settings, these are not necessarily the browser settings.
     *
     * Use this function only when there is no other way to load label data. In most cases, label data should be loaded using dymo.label.framework.openLabelXml.
     *
     * @param fileName FileName or URL to load label from.
     * 
     * @returns Returns Label object; provides label manipulation methods.
     */
    function openLabelFile(fileName: string): ILabel;

    /**
     * Loads label content from an XML stream/string.
     * Note: This is the preferred way to load/open label files.
     * Use XMLHttpRequest() or other standard browser methods to get XML string.
     *
     * @param labelXml The label definition as an XML string.
     * @returns Label object.
     */
    function openLabelXml(labelXml: string): ILabel;

    /**
     * Prints one or more labels.
     *
     * @param printerName The name of the printer to print to. A list of printers can be obtained using
     *   dymo.label.framework.getPrinters.
     * @param printParamsXml The print parameters, such as number of copies, print quality, etc.
     *   See [PrintParams.xsd]{@link http://labelwriter.com/software/dls/sdk/PrintParams.xsd}.
     * @param labelXml The label to print.
     * @param labelSetXml The LabelSet to print. LabelSet is used to print multiple labels with the same layout,
     *   but with different data, such as multiple addresses. Use dymo.label.framework.LabelSetBuilder class to
     *   create a LabelSet, or construct XML manualy according to
     *   [LabelSet.xsd]{@link http://labelwriter.com/software/dls/sdk/LabelSet.xsd}.
     */
    function printLabel(printerName: string, printParamsXml: string, labelXml: string, labelSetXml: string): void;

    /**
     * Prints a label and returns a print job object
     *
     * @param printerName The printer to print on. A list of printers can be obtained by getPrinters()
     * @param printParamsXml Printing parameters, like number of copies, print quality, etc. See [PrintParams.xsd]{@link http://labelwriter.com/software/dls/sdk/PrintParams.xsd}
     * @param labelXml Label to print
     * @param labelSetXml
     *   LabelSet to print. LabelSet is used to print multiple labels with same layout but different data, e.g. multiple addresses.
     *   Use LabelSetBuilder to create a LabelSet or construct xml manualy according to [LabelSet.xsd]{@link http://labelwriter.com/software/dls/sdk/LabelSet.xsd}.
     */
    function printLabel2(printerName: string, printParamsXml: string, labelXml: string, labelSetXml: string): PrintJob;

    /**
     * Prints a label and runs status checking in a loop
     *
     * @param printerName The printer to print on. A list of printers can be obtained by getPrinters()
     * @param printParamsXml Printing parameters, like number of copies, print quality, etc. See [PrintParams.xsd]{@link http://labelwriter.com/software/dls/sdk/PrintParams.xsd}
     * @param labelXml Label to print
     * @param labelSetXml
     *   LabelSet to print. LabelSet is used to print multiple labels with same layout but different data, e.g.
     *   multiple addresses.
     *   Use LabelSetBuilder to create a LabelSet or construct xml manually according to
     *   [LabelSet.xsd]{@link http://labelwriter.com/software/dls/sdk/LabelSet.xsd}
     * @param statusCallback
     *   Function to be called when a print job status is available.
     *   To continue polling the status the function should return true, false otherwise.
     * @param pollInterval Polling interval in milliseconds
     */
    function printLabelAndPollStatus(
        printerName: string,
        printParamsXml: string,
        labelXml: string,
        labelSetXml: string,
        statusCallback: (printJob: PrintJob, printJobStatusInfo: PrintJobStatusInfo) => boolean,
        pollInterval: number): PrintJob;

    /**
     * Creates a label raster image that can be used for label previewing.
     * Returns a string that is a base64-encoded PNG stream of the label image.
     * This string can be used as data: url for  element.
     * Note: data: urls are not supported by IE6 and IE7. IE8 supports them with a 32KB limit (so it may not be possible to preview 'large' labels).
     *
     * @param labelXml Label to preview.
     * @param renderParamsXml The rendering parameters, such as shadow depth, label color, etc. See [LabelRenderParams.xsd]{@link http://labelwriter.com/software/dls/sdk/LabelRenderParams.xsd}.
     * @param printerName The name of the printer that the preview is generated for.
     *   The preview/output can be different for different printers, especially for tape printers
     *   with different print head sizes. If it is not important what printer the label is
     *   printed to, an empty string can be passed. In this case, the default printer metrics
     *   will be used. The default is LW400 for LabelWriter printers and LW400 DUO Tape for tape printers.
     *
     * @returns A base64-encoded PNG stream of the label image.
     */
    function renderLabel(labelXml: string, renderParamsXml: string, printerName: string): string;

    /**
     * Undocumented
     */
    interface AddPrinterUriCallback {
        (printerUri: string): any;
    }

    /**
     * Undocumented, removed, see http://developers.dymo.com/2013/08/14/dymo-sdk-qa/#comment-27119
     */
    function addPrinterUri(
        printerUri: string,
        location?: string,
        successCallback?: AddPrinterUriCallback,
        errorCallback?: AddPrinterUriCallback): void;

    /**
     * Undocumented, removed, see http://developers.dymo.com/2013/08/14/dymo-sdk-qa/#comment-27119
     */
    function removePrinterUri(printerUri: string): void;

    /**
     * Undocumented, removed, see http://developers.dymo.com/2013/08/14/dymo-sdk-qa/#comment-27119
     */
    function removeAllPrinterUri(): void;

    /**
     * LabelSetBuilder is used to create a LabelSet to print multiple labels in one print job.
     * LabelSet is a collection of records. Each record contains multiple pairs; each pair consists
     * of the object name and the object text data/content. The data of each record are applied to all
     * corresponend objects and for each record one label is printed.
     */
    class LabelSetBuilder {
        /**
         * Converts record objects to XML format. The XML format schema is defined in [LabelSet.xsd]{@link http://labelwriter.com/software/dls/sdk/LabelSet.xsd}.
         * Returned XML can be passed to dymo.label.framefork.printLabel as labelSetXml parameter. This function can be used independent of other LabelSetBuilder methods, if records data is generated by other functions.
         *
         * @param records The records to convert to XML. Records should be an array-like object of associative-arrays with object names as keys and object text as values.
         *
         * @returns An XML string.
         */
        static toXml(records: {}[]): string;

        /**
         * Adds a new record to the LabelSet. Returns a record object.
         */
        addRecord(): ILabelSetRecord;

        /**
         * Get all record objects in this LabelSetBuilder.
         */
        getRecords(): ILabelSetRecord[];

        /**
         * Converts the builder's content to an XML string suitable to pass to dymo.label.framefork.printLabel.
         */
        toString(): string;
    }
}
