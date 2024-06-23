import { DynamsoftEnums as Dynamsoft } from "./Dynamsoft.Enum";
import { WebTwainEdit } from "./WebTwain.Edit";

export interface WebTwainAcquire extends WebTwainEdit {
    /**
     * Start image acquisition.
     * @param deviceConfiguration Configuration for the acquisition.
     * @param successCallback A callback function that is executed if the request succeeds.
     * @param failureCallback A callback function that is executed if the request fails.
     * @argument errorCode The error code.
     * @argument errorString The error string.
     */
    AcquireImage(
        successCallBack?: () => void,
        failureCallBack?: (
            errorCode: number,
            errorString: string,
        ) => void,
    ): void;
    AcquireImage(
        deviceConfiguration?: DeviceConfiguration,
        successCallBack?: () => void,
        failureCallBack?: (
            deviceConfiguration: DeviceConfiguration,
            errorCode: number,
            errorString: string,
        ) => void,
    ): void;
    /**
     * Close the data source (a TWAIN/ICA/SANE device which in most cases is a scanner) to free it to be used by other applications.
     */
    CloseSource(): boolean;
    /**
     * Close the data source (a TWAIN/ICA/SANE device which in most cases is a scanner) to free it to be used by other applications.
     */
    CloseSourceAsync(): Promise<boolean>;
    /**
     * Disable the data source (a TWAIN/ICA/SANE device which in most cases is a scanner) to stop the acquiring process. If the data source's user interface is displayed, it will be closed.
     */
    DisableSource(): boolean;
    /**
     * Enable the data source to start the acquiring process.
     */
    EnableSource(): boolean;
    /**
     * Display the TWAIN source's built-in user interface.
     * @param successCallback A callback function that is executed if the request succeeds.
     * @param failureCallback A callback function that is executed if the request fails.
     * @argument errorCode The error code.
     * @argument errorString The error string.
     */
    EnableSourceUI(
        successCallBack: () => void,
        failureCallBack: (
            errorCode: number,
            errorString: string,
        ) => void,
    ): void;
    /**
     * Load a data source to get it ready to acquire images.
     */
    OpenSource(): boolean;
    /**
     * Return all available data sources (scanners, etc.) and optionally all detailed information about them.
     * @param bIncludeDetails Whether to return more details about the data sources or just their names.
     */
    /**
     * Load a data source to get it ready to acquire images.
     */
    OpenSourceAsync(): Promise<boolean>;
    GetSourceNames(bIncludeDetails?: boolean): string[] | SourceDetails[];
    /**
     * Return all available data sources (scanners, etc.) and optionally all detailed information about them.
     * @param bIncludeDetails Whether to return more details about the data sources or just their names.
     */
    GetSourceNamesAsync(bIncludeDetails: boolean): Promise<string[] | SourceDetails[]>;
    /**
     * Bring up the Source Selection User Interface (UI) for the user to choose a data source.
     * @param successCallback A callback function that is executed if the request succeeds.
     * @param failureCallback A callback function that is executed if the request fails.
     * @argument errorCode The error code.
     * @argument errorString The error string.
     */
    SelectSource(
        successCallBack?: () => void,
        failureCallBack?: (errorCode: number, errorString: string) => void,
        // eslint-disable-next-line @typescript-eslint/no-invalid-void-type
    ): boolean | void;
    /**
     * Bring up the Source Selection User Interface (UI) for the user to choose a data source.
     * @param successCallback A callback function that is executed if the request succeeds.
     * @param failureCallback A callback function that is executed if the request fails.
     * @argument errorCode The error code.
     * @argument errorString The error string.
     */
    SelectSourceAsync(
        successCallBack?: () => void,
        failureCallBack?: (errorCode: number, errorString: string) => void,
    ): Promise<boolean>;
    /**
     * Select a data source by its index.
     * @param index The index of the data source.
     */
    SelectSourceByIndex(index: number): boolean;
    /**
     * Select a data source by its index.
     * @param index The index of the data source.
     */
    SelectSourceByIndexAsync(index: number): Promise<boolean>;
    /**
     * Sets a timer which stops the data source opening process once it expires.
     * @param duration Define the duration of the timer (in milliseconds).
     */
    SetOpenSourceTimeout(duration: number): boolean;
    /**
     * Start the acquisition by passing all settings at once.
     * @param scanSetup Configuration for the acquisition.
     */
    startScan(scanSetup: ScanSetup): Promise<ScanSetup>;
    /**
     * Cancels all pending transfers.
     */
    CancelAllPendingTransfers(): boolean;
    /**
     * Closes and unloads Data Source Manager.
     */
    CloseSourceManager(): boolean;
    /**
     * Closes and unloads Data Source Manager.
     */
    CloseSourceManagerAsync(): Promise<boolean>;
    /**
     * Closes the scanning process to release resources on the machine.
     */
    CloseWorkingProcess(): boolean;
    /**
     * Ejects the current page and begins scanning the next page in the document feeder.
     */
    FeedPage(): boolean;
    /**
     * Get the custom data source data and saves the data in a specified file.
     * @param fileName The path of the file to save the data source data to.
     */
    GetCustomDSData(fileName: string): boolean;
    /**
     * Gets custom DS data and returns it in a base64 string.
     */
    GetCustomDSDataEx(): string;
    /**
     * Inspect the current data source and return whether it is a scanner, a webcam, etc.
     */
    GetDeviceType(): number;
    /**
     * Get the name of a data source by its index in data source manager source list.
     * @param index The index of the data source.
     */
    GetSourceNameItems(index: number): string;
    /**
     * Load and open data source manager.
     */
    OpenSourceManager(): boolean;
    /**
     * Load and open data source manager.
     */
    OpenSourceManagerAsync(): Promise<boolean>;
    /**
     * Reset the image layout in the data source.
     */
    ResetImageLayout(): boolean;
    /**
     * If called while {IfFeederEnabled} property is true, the data source will return the current page to the input area and return the last page from the output area into the acquisition area.
     */
    RewindPage(): boolean;
    /**
     * Sets custom data source data to be used for scanning, the data is stored in a file which can be regarded as a scanning profile.
     * @param fileName The path  of the file.
     */
    SetCustomDSData(fileName: string): boolean;
    /**
     * Set custom data source data to be used for scanning, the input is a base64 string.
     * @param dsDataString The string that contains custom data source data.
     */
    SetCustomDSDataEx(dsDataString: string): boolean;
    /**
     * Set the file transfer information to be used in File Transfer mode.
     * @param fileName The path to transfer the file to.
     * @param fileFormat The format of the file.
     */
    SetFileXferInfo(
        fileName: string,
        fileFormat: Dynamsoft.EnumDWT_FileFormat | number,
    ): boolean;
    /**
     * Set the left, top, right, and bottom sides of the image layout
     * rectangle for the current data source. The image layout rectangle
     * defines a frame of the data source's scanning area to be acquired.
     * @param left Specify the rectangle (leftmost coordinate).
     * @param top Specify the rectangle (topmost coordinate).
     * @param right Specify the rectangle (rightmost coordinate).
     * @param bottom Specify the rectangle (bottommost coordinate).
     */
    SetImageLayout(
        left: number,
        top: number,
        right: number,
        bottom: number,
    ): boolean;
    /**
     * Return or set the pixel bit depth for the current value of `PixelType`.
     */
    BitDepth: number;
    /**
     * Return or set whether newly acquired images are inserted or appended.
     */
    IfAppendImage: boolean;
    /**
     * Return or set whether to close the user interface after all images have been acquired.
     */
    IfDisableSourceAfterAcquire: boolean;
    /**
     * Return or set whether to enable duplex scanning (in other words, whether to scan both sides of the paper).
     */
    IfDuplexEnabled: boolean;
    /**
     * Return or set whether a data source's Automatic Document Feeder (ADF) is enabled for scanning.
     */
    IfFeederEnabled: boolean;
    /**
     * Return or set whether the data source displays the user interface when scanning.
     */
    IfShowUI: boolean;
    /**
     * Return or set whether to use TWAIN or ICA protocol on macOS.
     */
    ImageCaptureDriverType: Dynamsoft.EnumDWT_Driver | number;
    /**
     * Return or set the page size the data source uses to acquire images.
     */
    PageSize: Dynamsoft.EnumDWT_CapSupportedSizes | number;
    /**
     * Return or set the pixel type used when acquiring images.
     */
    PixelType: Dynamsoft.EnumDWT_PixelType | number;
    /**
     * Return or set the resolution used when acquiring images.
     */
    Resolution: number;
    /**
     * Returns how many data sources are available on the local system.
     */
    readonly SourceCount: number;
    /**
     * Return or set the brightness to be used for scanning by the data source.
     */
    Brightness: number;
    /**
     * Return or set Contrast to be used for scanning by the data source.
     */
    Contrast: number;
    /**
     * Return the device name of current source.
     */
    readonly CurrentSourceName: string;
    /**
     * Return a value that indicates the data source status.
     */
    DataSourceStatus: number;
    /**
     * Return the name of the default source.
     */
    DefaultSourceName: string;
    /**
     * Return whether the source supports duplex. If yes, it further returns the level of duplex the data source supports.
     */
    readonly Duplex: Dynamsoft.EnumDWT_DUPLEX | number;
    /**
     * Return or set whether to enable the data source's auto-brightness feature.
     */
    IfAutoBright: boolean;
    /**
     * Return or set whether the data source (the scanner) discards blank images during scanning automatically.
     */
    IfAutoDiscardBlankpages: boolean;
    /**
     * Return or set whether to enable the data source's automatic document feeding process.
     */
    IfAutoFeed: boolean;
    /**
     * Return or set whether to enable the data source's automatic border detection feature.
     */
    IfAutomaticBorderDetection: boolean;
    /**
     * Return or set whether to enable the data source's automatic skew correction feature.
     */
    IfAutomaticDeskew: boolean;
    /**
     * Return or set whether to enable the data source's automatic document scanning process.
     */
    IfAutoScan: boolean;
    /**
     * Return whether or not there are documents loaded in the data source's feeder.
     */
    readonly IfFeederLoaded: boolean;
    /**
     * Return whether the Source has a paper sensor that can detect pages on the ADF or Flatbed.
     */
    readonly IfPaperDetectable: boolean;
    /**
     * Return or set whether the data source displays a progress indicator during acquisition and transfer.
     */
    IfShowIndicator: boolean;
    /**
     * Return whether the data source supports acquisitions with the UI (User Interface) disabled.
     */
    readonly IfUIControllable: boolean;
    /**
     * Return or set whether the new TWAIN DSM (data source Manager) is used for acquisitions. The new TWAIN DSM is a DLL called 'TWAINDSM.dll' while the default | old DSM is called 'twain_32.dll'.
     */
    IfUseTwainDSM: boolean;
    /**
     * Return the value of the bottom edge of the current image frame (in Unit).
     */
    readonly ImageLayoutFrameBottom: number;
    /**
     * Return the value of the left edge of the current image frame (in Unit).
     */
    readonly ImageLayoutFrameLeft: number;
    /**
     * Return the value of the right edge of the current image frame (in Unit).
     */
    readonly ImageLayoutFrameRight: number;
    /**
     * Return the value of the top edge of the current image frame (in Unit).
     */
    readonly ImageLayoutFrameTop: number;
    /**
     * Return the document number of the current image.
     */
    readonly ImageLayoutDocumentNumber: number;
    /**
     * Return the page number of the current image.
     */
    readonly ImageLayoutPageNumber: number;
    /**
     * Return the bit depth of the current image.
     */
    readonly ImageBitsPerPixel: number;
    /**
     * Return the pixel type of the current image.
     */
    readonly ImagePixelType: Dynamsoft.EnumDWT_PixelType | number;
    /**
     * Return the length of the current image.
     */
    readonly ImageLength: number;
    /**
     * Return the width of the current image.
     */
    readonly ImageWidth: number;
    /**
     * Return the horizontal resolution of the current image.
     */
    readonly ImageXResolution: number;
    /**
     * Return the vertical resolution of the current image.
     */
    readonly ImageYResolution: number;
    /**
     * Return the data of the magnetic data if the data source supports magnetic data recognition.
     */
    readonly MagData: string;
    /**
     * Return the type of the magnetic data if the data source supports magnetic data recognition.
     */
    readonly MagType: Dynamsoft.EnumDWT_MagType | number;
    /**
     * Return the number of transfers the data source is ready to supply upon demand.
     */
    readonly PendingXfers: number;
    /**
     * Return or set the pixel flavor to be used for acquiring images.
     */
    PixelFlavor: number;
    /**
     * Return or set the data source's transfer mode.
     */
    TransferMode: Dynamsoft.EnumDWT_TransferMode | number;
    /**
     * Return or set the unit of measure for all quantities.
     */
    Unit: Dynamsoft.EnumDWT_UnitType | number;
    /**
     * Return and set the number of images your application is willing to accept for each scan job.
     */
    XferCount: number;
    /**
     * Gets detailed information about all capabilities of the current data source.
     * @param successCallback A callback function that is executed if the request succeeds.
     * @param failureCallback A callback function that is executed if the request fails.
     * @argument capabilityDetails Detailed information about the specified capabilities.
     * @argument errorCode The error code.
     * @argument errorString The error string.
     */
    getCapabilities(
        succssCallback: (capabilityDetails: CapabilityDetails[]) => void,
        failureCallback: (
            errorCode: number,
            errorString: string,
        ) => void,
    ): void;
    /**
     * Sets up one or multiple capabilities in one call.
     * @param capabilities A object that describes how to set capabilities.
     * @param successCallback A callback function that is executed if the request succeeds.
     * @param failureCallback A callback function that is executed if the request fails.
     * @argument capabilities The capabilities to set.
     */
    setCapabilities(
        capabilities: Capabilities,
        succssCallback: (capabilities: Capabilities) => void,
        failureCallback: (capabilities: Capabilities) => void,
    ): void;
    /**
     * [Deprecation] Specifies the capabiltiy to be negotiated. This is a runtime property.
     * [Alternative] Use getCapabilities() and setCapabilities() instead.
     */
    Capability: Dynamsoft.EnumDWT_Cap;
    /**
     * [Deprecation] Return or set the index (0-based) of
     * a list to indicate the Current Value when the value of
     * the CapType property is TWON_ENUMERATION. If the data type
     * of the capability is String, the list is in CapItemsString property.
     * For other data types, the list is in CapItems property. This is a runtime property.
     * [Alternative] Use getCapabilities() and setCapabilities() instead.
     */
    CapCurrentIndex: number;
    /**
     * [Deprecation] Return or set the current value in a range when the
     * value of the CapType property is TWON_RANGE. This is a runtime property.
     * [Alternative] Use getCapabilities() and setCapabilities() instead.
     */
    CapCurrentValue: number;
    /**
     * [Deprecation] Return the index (0-based) of a list to indicate the
     * Default Value when the value of the CapType property is TWON_ENUMERATION.
     * If the data type of the capability is String, the list is in CapItemsString property.
     *  For other data types, the list is in CapItems property. This is a runtime, read-only property.
     * [Alternative] Use getCapabilities() and setCapabilities() instead.
     */
    readonly CapDefaultIndex: number;
    /**
     * [Deprecation] Return the default value in a range when the value of the
     * CapType property is TWON_RANGE. This is a runtime, read-only property.
     * [Alternative] Use getCapabilities() and setCapabilities() instead.
     */
    CapDefaultValue: number;
    /**
     * [Deprecation] Retruns the description for a capability
     * [Alternative] Use getCapabilities() and setCapabilities() instead.
     */
    CapDescription: string;
    /**
     * [Deprecation] Return or set the maximum value in a range when the
     * value of the CapType property is TWON_RANGE. This is a runtime property.
     * [Alternative] Use getCapabilities() and setCapabilities() instead.
     */
    CapMaxValue: number;
    /**
     * [Deprecation] Return or set the minimum value in a range when the
     * value of the CapType property is TWON_RANGE. This is a runtime property.
     * [Alternative] Use getCapabilities() and setCapabilities() instead.
     */
    CapMinValue: number;
    /**
     * [Deprecation] Return or set how many items are in the list when the
     *  value of the CapType property is TWON_ARRAY or TWON_ENUMERATION.
     * For String data type, the list is in CapItemsString property.
     * For other data types, the list is in CapItems property.
     * This is a runtime property.
     * [Alternative] Use getCapabilities() and setCapabilities() instead.
     */
    CapNumItems: number;
    /**
     * [Deprecation] Return or set the step size in a range when the value
     * of the CapType property is TWON_RANGE. This is a runtime property.
     * [Alternative] Use getCapabilities() and setCapabilities() instead.
     */
    CapStepSize: number;
    /**
     * [Deprecation] Return or set the type of capability container used
     * to exchange capability information between application and source.
     * This is a runtime property.
     */
    CapType: Dynamsoft.EnumDWT_CapType;
    /**
     * [Deprecation] Return or set the value of the capability specified by
     *  Capability property when the value of the CapType property is TWON_ONEVALUE.
     * This is a runtime property.
     * [Alternative] Use getCapabilities() and setCapabilities() instead.
     */
    CapValue: number;
    /**
     * [Deprecation] Return or set the string value for a capability when the
     * value of the CapType property is TWON_ONEVALUE. This is a runtime property.
     * [Alternative] Use getCapabilities() and setCapabilities() instead.
     */
    CapValueString: string;
    /**
     * [Deprecation] Return or set the value type for reading the value of a capability.
     *  This is a runtime property.
     * [Alternative] Use getCapabilities() and setCapabilities() instead.
     */
    CapValueType: number;
    /**
     * [Deprecation] Gets information of the capability specified by the Capability property.
     * [Alternative] Use getCapabilities() and setCapabilities() instead.
     */
    CapGet(): boolean;
    /**
     * [Deprecation] Return the Source's current Value for the specified capability.
     * [Alternative] Use getCapabilities() and setCapabilities() instead.
     */
    CapGetCurrent(): boolean;
    /**
     * [Deprecation] Return the Source's Default Value for the specified capability.
     * This is the Source's preferred default value.
     * [Alternative] Use getCapabilities() and setCapabilities() instead.
     */
    CapGetDefault(): boolean;
    /**
     * [Deprecation] Return the value of the bottom-most edge of the specified frame.
     * [Alternative] Use getCapabilities() and setCapabilities() instead.
     * @param index specifies the value of which frame to get. The index is 0-based.
     */
    CapGetFrameBottom(index: number): number;
    /**
     * [Deprecation] Return the value (in Unit) of the left-most edge of the specified frame.
     * [Alternative] Use getCapabilities() and setCapabilities() instead.
     * @param index specifies the value of which frame to get. The index is 0-based.
     */
    CapGetFrameLeft(index: number): number;
    /**
     * [Deprecation] Return the value (in Unit) of the left-most edge of the specified frame.
     * [Alternative] Use getCapabilities() and setCapabilities() instead.
     * @param index specifies the value of which frame to get. The index is 0-based.
     */
    CapGetFrameRight(index: number): number;
    /**
     * [Deprecation] Return the value (in Unit) of the top-most edge of the specified frame.
     * [Alternative] Use getCapabilities() and setCapabilities() instead.
     * @param index specifies the value of which frame to get. The index is 0-based.
     */
    CapGetFrameTop(index: number): number;
    /**
     * [Deprecation] Use getCapabilities() and setCapabilities() instead.
     */
    CapGetHelp(index: number): number;
    /**
     * [Deprecation] Use getCapabilities() and setCapabilities() instead.
     */
    CapGetLabel(index: number): number;
    /**
     * [Deprecation] Use getCapabilities() and setCapabilities() instead.
     */
    CapGetLabels(index: number): number;
    /**
     * [Deprecation] Queries whether the Source supports a particular operation on the capability.
     * [Alternative] Use getCapabilities() and setCapabilities() instead.
     * @param {Dynamsoft.EnumDWT_MessageType} messageType specifies the type of capability operation.
     */
    CapIfSupported(messageType: Dynamsoft.EnumDWT_MessageType): boolean;
    /**
     * [Deprecation] Changes the Current Value of the capability specified by
     * Capability property back to its power-on value.
     * [Alternative] Use getCapabilities() and setCapabilities() instead.
     */
    CapReset(): boolean;
    /**
     * [Deprecation] Sets the current capability using the container type specified by
     * CapType property. The current capability is specified by Capability property.
     * [Alternative] Use getCapabilities() and setCapabilities() instead.
     */
    CapSet(): boolean;
    /**
     * [Deprecation] Sets the values of the specified frame.
     * [Alternative] Use getCapabilities() and setCapabilities() instead.
     * @param index  specifies the values of which frame to set. The index is 0-based.
     * @param left the value (in Unit) of the left-most edge of the specified frame.
     * @param top the value (in Unit) of the top-most edge of the specified frame.
     * @param right  the value (in Unit) of the right-most edge of the specified frame.
     * @param bottom  the value (in Unit) of the bottom-most edge of the specified frame.
     */
    CapSetFrame(index: number, left: number, top: number, right: number, bottom: number): boolean;
    /**
     * Get the cap item value of the capability specified by Capability property,
     * when the value of the CapType property is TWON_ARRAY or TWON_ENUMERATION.
     * [Alternative] Use getCapabilities() and setCapabilities() instead.
     * @param index Index is 0-based. It is the index of the cap item.
     */
    GetCapItems(index: number): number;
    /**
     * Returns the cap item value of the capability specified by Capability property,
     * when the value of the CapType property is TWON_ARRAY or TWON_ENUMERATION.
     * [Alternative] Use getCapabilities() and setCapabilities() instead.
     * @param index Index is 0-based. It is the index of the cap item.
     */
    GetCapItemsString(index: number): string;
    /**
     * [Deprecation] Set the value of the specified cap item.
     * @param index Index is 0-based. It is the index of the cap item.
     * @param newVal For string type, please use CapItemsstring property.
     */
    SetCapItems(index: number, newVal: number): void;
    /**
     * [Deprecation] Set the cap item value of the capability specified by Capability property,
     * when the value of the CapType property is TWON_ARRAY or TWON_ENUMERATION.
     * [Alternative] Use getCapabilities() and setCapabilities() instead.
     * @param index Index is 0-based. It is the index of the cap item.
     * @param newVal The new value to be set.
     */
    SetCapItemsString(index: number, newVal: string): void;
}
export interface DeviceConfiguration {
    /**
     * Whether to show the built-in User Interface from the device vendor
     */
    IfShowUI?: boolean | undefined;
    /**
     * How a pixel is represented. Basically it means whether to scan in color, grey or black & white
     */
    PixelType?: Dynamsoft.EnumDWT_PixelType | number | string | undefined;
    /**
     * How detailed is the acquisition. Measured by dots per pixel (DPI)
     */
    Resolution?: number | undefined;
    /**
     * Whether to use the document feeder or the flatbed of the device.
     */
    IfFeederEnabled?: boolean | undefined;
    /**
     * Whether to scan one side or both sides of each paper.
     */
    IfDuplexEnabled?: boolean | undefined;
    /**
     * Whether to close the built-in User Interface after aquisition. Only valid when {IfShowUI} is true.
     */
    IfDisableSourceAfterAcquire?: boolean | undefined;
    /**
     * Whether to retrieve information about the image after it's transferred.
     */
    IfGetImageInfo?: boolean | undefined;
    /**
     * Whether to retrieve extended information about the image after it's transferred.
     */
    IfGetExtImageInfo?: boolean | undefined;
    /**
     * How much extended information is retrieved. Only valid when {IfGetExtImageInfo} is true.
     */
    extendedImageInfoQueryLevel?: number | undefined;
}
export interface SourceDetails {
    /**
     * The driver type which can be "TWAIN" | "ICA" | "SANE"
     */
    DriverType?: string | undefined;
    /**
     * Information about the driver if it's DriverType is "ICA"
     */
    DeviceInfo?: any;
    /**
     * The name of the data source. E.g. "TWAIN2 FreeImage Software Scanner".
     */
    ProductName?: string | undefined;
    /**
     * Whether it is the default source.
     */
    IsDefaultSource?: boolean | undefined;
    /**
     * Whether it is the current source.
     */
    IsCurrentSource?: boolean | undefined;
    /**
     * The family name of the data source. E.g. "Software Scan".
     */
    ProductFamily?: string | undefined;
    /**
     * The manufacturer of the data source. E.g. "TWAIN Working Group".
     */
    Manufacturer?: string | undefined;
    /**
     * Supported Groups
     */
    SupportedGroups?: number | undefined;
    /**
     * The version of the protocol based on which the data source is developed.
     */
    ProtocolMajor?: number | undefined;
    ProtocolMinor?: number | undefined;
    /**
     * Detailed version of the data source.
     */
    Version?: Version | undefined;
}
export interface Version {
    MajorNum?: number | undefined;
    MinorNum?: number | undefined;
    Language?: number | undefined;
    Country?: number | undefined;
    Info?: string | undefined;
}
export interface ScanSetup {
    /**
     * An id that specifies this specific setup.
     */
    setupId?: string | undefined;
    /**
     * Whether to ignore or fail the acquistion when an exception is raised. Set "ignore" or "fail".
     */
    exception?: string | undefined;
    /**
     * The name of the data source (the scanner). If not set, the default data source is used.
     */
    scanner?: string | undefined;
    ui?: {
        /**
         * Whether to show the UI of the device.
         */
        bShowUI?: boolean | undefined;
        /**
         * Whether to show the indicator of the device.
         */
        bShowIndicator?: boolean | undefined;
    } | undefined;
    /**
     * The TWAIN transfer mode.
     */
    transferMode?: Dynamsoft.EnumDWT_TransferMode | number | undefined;
    /**
     * Set how the transfer is done.
     */
    fileXfer?: {
        /**
         * Specify the file name (or pattern) for file transfer.
         * Example: "C:\\WebTWAIN<%06d>.bmp"
         */
        fileName?: string | undefined;
        /**
         * Specify the file format.
         */
        fileFormat?: Dynamsoft.EnumDWT_FileFormat | number | undefined;
        /**
         * Specify the quality of JPEG files.
         */
        jpegQuality?: number | undefined;
        /**
         * Specify the compression type of the file.
         */
        compressionType?: Dynamsoft.EnumDWT_CompressionType | number | undefined;
    } | undefined;
    /**
     * Set where the scanned images are inserted.
     */
    insertingIndex?: number | undefined;
    /**
     * The profile is a base64 string, if present, it overrides settings and more settings.
     */
    profile?: string | undefined;
    /**
     * Basic settings.
     */
    settings?: {
        /**
         * "ignore" (default) or "fail".
         */
        exception?: string | undefined;
        /**
         * Specify the pixel type.
         */
        pixelType?: Dynamsoft.EnumDWT_PixelType | number | undefined;
        /**
         * Specify the resolution.
         */
        resolution?: number | undefined;
        /**
         * Whether to enable document feader.
         */
        bFeeder?: boolean | undefined;
        /**
         * Whether to enable duplex scan.
         */
        bDuplex?: boolean | undefined;
    } | undefined;
    moreSettings?: {
        /**
         * "ignore" (default) or "fail".
         */
        exception?: string | undefined;
        /**
         * Specify the bit depth.
         */
        bitDepth?: number | undefined;
        /**
         * Specify the page size.
         */
        pageSize?: Dynamsoft.EnumDWT_CapSupportedSizes | number | undefined;
        /**
         * Specify the unit.
         */
        unit?: Dynamsoft.EnumDWT_UnitType | number | undefined;
        /**
         * Specify a layout to scan, if present, it'll override pageSize.
         */
        layout?: {
            left?: number | undefined;
            top?: number | undefined;
            right?: number | undefined;
            bottom?: number | undefined;
        } | undefined;
        /**
         * Specify the pixel flavor.
         */
        pixelFlavor?: Dynamsoft.EnumDWT_CapPixelFlavor | number | undefined;
        /**
         * Specify Brightness.
         */
        brightness?: number | undefined;
        /**
         * Specify contrast.
         */
        contrast?: number | undefined;
        /**
         * Specify how many images are transferred per session.
         */
        nXferCount?: number | undefined;
        /**
         * Whether to enable automatic blank image detection and removal.
         */
        autoDiscardBlankPages?: boolean | undefined;
        /**
         * Whether to enable automatic border detection.
         */
        autoBorderDetection?: boolean | undefined;
        /**
         * Whether to enable automatic skew correction.
         */
        autoDeskew?: boolean | undefined;
        /**
         * Whether to enable automatic brightness adjustment.
         */
        autoBright?: boolean | undefined;
    } | undefined;
    /**
     * A callback triggered before the scan, after the scan and after each page has been transferred.
     */
    funcScanStatus?: ((status: Status) => void) | undefined;
    /**
     * Set up how the scanned images are outputted.
     */
    outputSetup?: {
        /**
         * Output type. "http" is the only supported type for now.
         */
        type?: string | undefined;
        /**
         * Set the output format.
         */
        format?: Dynamsoft.EnumDWT_ImageType | number | undefined;
        /**
         * Specify how many times the library will try the output.
         */
        reTries?: number | undefined;
        /**
         * Whether to use the FileUploader.
         */
        useUploader?: false | undefined;
        /**
         * Whether to upload all images in one HTTP post.
         */
        singlePost?: boolean | undefined;
        /**
         * Whether to show a progress bar when outputting.
         */
        showProgressBar?: boolean | undefined;
        /**
         * Whether to remove the images after outputting.
         */
        removeAfterOutput?: boolean | undefined;
        /**
         * A callback triggered during the outputting.
         * @argument fileInfo A JSON object that contains the fileName, percentage, statusCode, responseString, etc.
         */
        funcHttpUploadStatus?: ((fileInfo: any) => void) | undefined;
        /**
         * Setup for PDF output.
         */
        pdfSetup?: {
            author?: string | undefined;
            compression?: Dynamsoft.EnumDWT_PDFCompressionType | number | undefined;
            creator?: string | undefined;
            /**
             * Example: 'D:20181231'
             */
            creationDate?: string | undefined;
            keyWords?: string | undefined;
            /**
             * Example: 'D:20181231'
             */
            modifiedDate?: string | undefined;
            producer?: string | undefined;
            subject?: string | undefined;
            title?: string | undefined;
            version?: number | undefined;
            quality?: number | undefined;
        } | undefined;
        /**
         * Setup for TIFF output.
         */
        tiffSetup?: {
            quality?: number | undefined;
            compression?: Dynamsoft.EnumDWT_TIFFCompressionType | number | undefined;
            /**
             * Specify Tiff custom tags.
             */
            tiffTags?: TiffTag[] | undefined;
        } | undefined;
        /**
         * Setup for HTTP upload via Post.
         */
        httpParams?: {
            /**
             * Target of the request.
             * Example: "http://dynamsoft.com/receivepost.aspx"
             */
            url?: string | undefined;
            /**
             * Custom headers in the form.
             * Example: {md5: ""}
             */
            headers?: any;
            /**
             * Custom form fields.
             * Example: {"UploadedBy": "Dynamsoft"}
             */
            formFields?: any;
            /**
             * The maximum size of a file to be uploaded (in bytes).
             */
            maxSizeLimit?: number | undefined;
            /**
             * Specify how many threads (<=4) are to be used. Only valid when {useUploader} is true.
             */
            threads?: number | undefined;
            /**
             * Specify the names for the files in the form.
             * Example: "RemoteName<%06d>"
             */
            remoteName?: string | undefined;
            /**
             * Specify the name(s) (pattern) of the uploaded files.
             * Example: "uploadedFile<%06d>.jpg"
             */
            fileName?: string | undefined;
        } | undefined;
    } | undefined;
}
export interface Status {
    bScanCompleted?: boolean | undefined;
    event?: string | undefined;
    result?: {
        currentPageNum?: number | undefined;
    } | undefined;
}
export interface TiffTag {
    tagIdentifier?: number | undefined;
    content?: string | undefined;
    useBase64Encoding?: boolean | undefined;
}
/**
 * Detailed information about a specific capability,
 */
export interface CapabilityDetails {
    /**
     * The Capability.
     */
    capability: ValueAndLabel;
    /**
     * The container type of the Capability
     */
    conType: ValueAndLabel;
    /**
     * The index for the current value of the Capability
     */
    curIndex: number;
    /**
     * The current value of the Capability
     */
    curValue: ValueAndLabel;
    /**
     * The index for the default value of the Capability
     */
    defIndex: number;
    /**
     * The operation types that are supported by the Capability. Types include {"get", "set", "reset" "getdefault", "getcurrent"}
     */
    query: string[];
    /**
     * The value type of the Capability. Value types include
     * TWTY_BOOL: 6
     * TWTY_FIX32: 7
     * TWTY_FRAME: 8
     * TWTY_INT8: 0
     * TWTY_INT16: 1
     * TWTY_INT32: 2
     * TWTY_STR32: 9
     * TWTY_STR64: 10
     * TWTY_STR128: 11
     * TWTY_STR255: 12
     * TWTY_UINT8: 3
     * TWTY_UINT16: 4
     * TWTY_int: 5
     */
    valueType: ValueAndLabel;
    /**
     * The available values of the Capability
     */
    values: ValueAndLabel[];
}
export interface ValueAndLabel {
    /**
     * Numeric representation of the item
     */
    value: Dynamsoft.EnumDWT_Cap | Dynamsoft.EnumDWT_CapType | Dynamsoft.EnumDWT_CapValueType | number;
    /**
     * Label or name of the item
     */
    label: string;
}
export interface Capabilities {
    /**
     * Whether to "ignore" or "fail" the request if an exception occurs. This is an overall setting that is inherited by all capabilities.
     */
    exceptition: string;
    /**
     * Specifies how to set capabilities
     */
    capabilities: CapabilitySetup[];
}
export interface CapabilitySetup {
    /**
     * Specify a capability
     */
    capability: Dynamsoft.EnumDWT_Cap | number;
    /**
     * The value to set to the capability or the value of the capability after setting.
     */
    curValue: number | string;
    errorCode?: number | undefined;
    errorString?: string | undefined;
    /**
     * Whether to "ignore" or "fail" the request if an exception occurs when setting this specific capability.
     */
    exception?: string | undefined;
}
