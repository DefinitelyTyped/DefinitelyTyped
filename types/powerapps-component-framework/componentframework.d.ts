declare namespace ComponentFramework {
    /**
     * Interface for the PowerApps Controls (Standard)
     */
    interface StandardControl<TInputs, TOutputs> {
        /**
         * Used to initialize the control instance. Controls can kick off remote server calls and other initialization actions here.
         * Data-set values are not initialized here, use updateView.
         * @param context The entire property bag available to control via Context Object; It contains values as set up by the customizer mapped
         * to property names defined in the manifest, as well as utility functions.
         * @param notifyOutputChanged A callback method to alert the framework that the control has new outputs ready to be retrieved asynchronously.
         * @param state A piece of data that persists in one session for a single user. Can be set at any point in a controls life cycle by calling
         * 'setControlState' in the Mode interface.
         * @param container If a control is marked control-type='standard', it will receive an empty div element within which it can render its content.
         */
        init(context: Context<TInputs>, notifyOutputChanged?: () => void, state?: Dictionary, container?: HTMLDivElement): void;

        /**
         * Called when any value in the property bag has changed. This includes field values, data-sets, global values such as container height and width,
         * offline status, control metadata values such as label, visible, etc.
         * @param context The entire property bag available to control via Context Object; It contains values as set up by the customizer mapped to names
         * defined in the manifest, as well as utility functions
         */
        updateView(context: Context<TInputs>): void;

        /**
         * Called when the control is to be removed from the DOM tree. Controls should use this call for cleanup.
         * i.e. cancelling any pending remote calls, removing listeners, etc.
         */
        destroy(): void;

        /**
         * It is called by the framework prior to a control receiving new data.
         * @returns an object based on nomenclature defined in manifest, expecting object[s] for property marked as "bound" or "output"
         */
        getOutputs?(): TOutputs;
    }

    /**
     * The entire property bag interface available to control via Context Object
     */
    interface Context<TInputs> {
        client: Client;
        device: Device;
        factory: Factory;
        formatting: Formatting;
        mode: Mode;
        navigation: Navigation;
        resources: Resources;
        userSettings: UserSettings;
        utils: Utility;
        webAPI: WebApi;
        parameters: TInputs;
        updatedProperties: string[];
    }

    /**
     * The interface for the context.client
     */
    interface Client {
        /**
         * Whether this control should disable its scrolling capabilities.
         */
        disableScroll: boolean;

        /**
         * Device form factor.
         * Unknown = 0
         * Desktop = 1
         * Tablet = 2
         * Phone = 3
         */
        getFormFactor(): number;

        /**
         * Returns a value to indicate which client the script is executing in.
         * Web: Web application, or Unified Interface
         * Outlook: Outlook
         * Mobile: Mobile app
         */
        getClient(): string;

        /**
         * Returns information whether the server is online or offline.
         */
        isOffline(): boolean;
    }

    /**
     * The interface for the context.device
     */
    interface Device {
        /**
         * Invokes the device microphone to record audio.
         */
        captureAudio(): Promise<FileObject>;

        /**
         * Invokes the device camera to capture an image.
         */
        captureImage(options?: DeviceApi.CaptureImageOptions): Promise<FileObject>;

        /**
         * Invokes the device camera to record video.
         */
        captureVideo(): Promise<FileObject>;

        /**
         * Invokes the device camera to scan the barcode information, such as a product number.
         */
        getBarcodeValue(): Promise<string>;

        /**
         * Returns the current location using the device geolocation capability.
         */
        getCurrentPosition(): Promise<DeviceApi.Position>;

        /**
         * Opens a dialog box to select files from your computer (web client) or mobile device (mobile clients).
         */
        pickFile(options?: DeviceApi.PickFileOptions): Promise<FileObject[]>;
    }

    /**
     * The interface for the context.factory
     */
    interface Factory {
        /**
         * Gets the popup service which help create Popup and manage Popup easily
         */
        getPopupService(): FactoryApi.Popup.PopupService;

        /**
         * Requests re-rendering of the control with updated data.
         */
        requestRender(): void;
    }

    /**
     * The interface for the context.formatting
     */
    interface Formatting {
        /**
         * Returns a formatted string that represents the currency value after being formatted.
         * @param value A value object to be formatted.
         * @param precision The number of digits after decimal point.
         * @param symbol The currency symbol/code to be added with currency value.
         */
        formatCurrency(value: number, precision?: number, symbol?: string): string;

        /**
         * Returns a formatted string that represents the decimal value after being formatted.
         * @param value A value object to be formatted.
         * @param precision The number of digits after decimal point.
         */
        formatDecimal(value: number, precision?: number): string;

        /**
         * Returns a formatted string that represents a date in a YYYY-MM-DD standard UTC format.
         * Result pattern is based on Standard UTC format.
         * @param value The date to be formatted.
         * @param includeTime If time component should be included in the return value.
         */
        formatDateAsFilterStringInUTC(value: Date, includeTime?: boolean): string;

        /**
         * Returns a formatted string that represents a date in the long form.
         * Result pattern is based on culture. In USA it's "Day of week, Month dd, yyyy"in USA
         * @param value Date to format.
         */
        formatDateLong(value: Date): string;

        /**
         * Returns a formatted string that represents a date in the long form using abbreviations.
         * Result pattern is based on culture. In USA it's "Abbreviated Day of week, Month dd, yyyy" in USA
         * @param value Date to format.
         */
        formatDateLongAbbreviated(value: Date): string;

        /**
         * Returns a string represents the datetime value after being formatted.
         * Result pattern is based on culture. In USA it's 'MM/DD/YYYY' in USA
         * @param value Date to format.
         * @param includeTime Whether to show time in formatted value.
         */
        formatDateShort(value: Date, includeTime?: boolean): string;

        /**
         * Returns a formatted string that represents a date in the year month format.
         * @param value Date to format.
         */
        formatDateYearMonth(value: Date): string;

        /**
         * Returns a formatted string represents a given integer value.
         * @param value A number primitive to be formatted.
         */
        formatInteger(value: number): string;

        /**
         * Returns a formatted string that represents a given language
         * @param input A language code to be formatted. Reference: https://go.microsoft.com/fwlink/?linkid=122128
         * @returns A formatted string represents a given language value.
         */
        formatLanguage(value: number): string;

        /**
         * Returns a formatted string that represents the datetime value after being formatted.
         * @param value The date to be formatted.
         * @param behavior The behavior of the datetime object to be formatted.
         * None = 0,
         * UserLocal = 1,
         * TimeZoneIndependent = 3
         */
        formatTime(value: Date, behavior: FormattingApi.Types.DateTimeFieldBehavior): string;

        /**
         * Gets the ISO week number of the year for a given date. Range 1-53
         * @param value The DateTime to convert.
         */
        getWeekOfYear(value: Date): number;
    }

    /**
     * The interface for the context.mode
     */
    interface Mode {
        /**
         * Height in pixels allocated to the control. If it's -1, then there is no limit on height
         */
        allocatedHeight: number;

        /**
         * Width in pixels allocated to the control.
         */
        allocatedWidth: number;

        /**
         * Is the control in 'Read-only' mode.
         */
        isControlDisabled: boolean;

        /**
         * Is the control in 'Visible' mode.
         */
        isVisible: boolean;

        /**
         * The defined control label
         */
        label: string;

        /**
         * set control state so that it will be stored in one session
         */
        setControlState(state: Dictionary): boolean;

        /**
         * Make the control full screen.
         * @param value True if control needs to autosize to full screen. False if control needs to autosize to allocated width.
         */
        setFullScreen(value: boolean): void;

        /**
         * API to determine container sizing if control needs to react. Control will get allocatedWidth/allocatedHeight if input is 'true'
         * @param value True if controls needs to track container size, control will get allocatedWidth/allocatedHeight
         */
        trackContainerResize(value: boolean): void;
    }

    /**
     * The navigation interface of context.navigation
     */
    interface Navigation {
        /**
         * Opens Alert Dialog
         * @param alertStrings Strings to be used in alert dialog
         * @param options Dialog options
         * @returns promise defining success or failure of operation
         */
        openAlertDialog(alertStrings: NavigationApi.AlertDialogStrings, options?: NavigationApi.AlertDialogOptions): Promise<void>;

        /**
         * Opens Confirm Dialog
         * @param confirmStrings String which will be used in the dialog
         * @param options Options for the dialog
         * @returns promise defining success or failure of operation. the success case returns a boolean specifying whether yes or no button was pressed
         */
        openConfirmDialog(confirmStrings: NavigationApi.ConfirmDialogStrings, options?: NavigationApi.ConfirmDialogOptions): Promise<NavigationApi.ConfirmDialogResponse>;

        /**
         * Opens an Error Dialog.
         * @param options Error Dialog options.
         * @returns promise defining success or failure of operation.
         */
        openErrorDialog(options: NavigationApi.ErrorDialogOptions): Promise<void>;

        /**
         * Open a file
         * @param file An object describing the file to open
         * @param options Options for openFile. OpenMode field in the options allows to save file instead opening.
         * @returns promise defining success or failure of operation.
         */
        openFile(file: FileObject, options?: NavigationApi.OpenFileOptions): Promise<void>;

        /**
         * Opens an entity form or quick create form.
         * @param options entity form options.
         * @param parameters entity form parameters.
         * @returns promise defining success or failure of operation
         */
        openForm(options: NavigationApi.EntityFormOptions, parameters?: {[key: string]: string}): Promise<NavigationApi.OpenFormSuccessResponse>;

        /**
         * Open url, including file urls.
         * @param url url to be opened.
         * @param options window options for the url.
         */
        openUrl(url: string, options?: NavigationApi.OpenUrlOptions): void;

        /**
         * Opens an HTML web resource.
         * @param name The name of the HTML web resource to open.
         * @param options Window options for the web resource.
         * @param data Data to be passed into the data parameter.
         */
        openWebResource(name: string, options?: NavigationApi.OpenWebResourceOptions, data?: string): void;
    }

    /**
     * The resource interface of context.resources
     */
    interface Resources {
        /**
         * Gets a resource referenced by the control manifest.
         * @param id The resource string identifier.
         * @param success The success callback. Resource data is returned in base 64 encoded format.
         * @param failure The failure callback.
         */
        getResource(id: string, success: (data: string) => void, failure: () => void): void;

        /**
         * Get the localized string for the given identifier.
         * @param id name of resource in the control manifest.
         */
        getString(id: string): string;
    }

    /**
     * The interface for context.userSettings
     */
    interface UserSettings {
        /**
         * Date formatting information as retrieved from the server.
         */
        dateFormattingInfo: UserSettingApi.DateFormattingInfo;

        /**
         * Returns true if the language is right to left
         */
        isRTL: boolean;

        /**
         * Current user's language id
         *
         */
        languageId: number;

        /**
         * Number formatting information as retrieved from the server.
         */
        numberFormattingInfo: UserSettingApi.NumberFormattingInfo;

        /**
         * Current user roles
         */
        securityRoles: string[];

        /**
         * The id of the current user
         */
        userId: string;

        /**
         * The username of the current user
         */
        userName: string;

        /**
         * Gets the offset in minutes from UTC for the given date
         * @param date date to get the offset from utc for
         */
        getTimeZoneOffsetMinutes(date?: Date): number;
    }

    /**
     * The interface for context.utils
     */
    interface Utility {
        /**
         * Gets the entity metadata for the specified entity.
         * @param entityType The logical name of the entity.
         * @param attributes The attributes to get metadata for.
         */
        getEntityMetadata(entityName: string, attributes?: string[]): Promise<PropertyHelper.EntityMetadata>;

        /**
         * Function to return if the user has Privilege for one specific entity
         * @param entityTypeName entity type name
         * @param privilegeType privilege type i.e. Create, Read, Write etc.
         * @param privilegeDepth privilege depth i.e. basic, Global etc.
         */
        hasEntityPrivilege(entityTypeName: string, privilegeType: PropertyHelper.Types.PrivilegeType, privilegeDepth: PropertyHelper.Types.PrivilegeDepth): boolean;

        /**
         * Opens a lookup dialog allowing the user to select one or more entities.
         * @param lookupOptions Options for opening the lookup dialog.
         */
        lookupObjects(lookupOptions: UtilityApi.LookupOptions): Promise<LookupValue[]>;
    }

    /**
     * The interface for context.webApi
     */
    interface WebApi {
        /**
         * Creates an entity record.
         * @param entityType logical name of the entity type record to create
         * @param data dictionary with attribute schema name and value
         * @returns The deferred object for the result of the operation. The created record object will be resolved if successful.
         */
        createRecord(entityType: string, data: WebApi.Entity): Promise<LookupValue>;

        /**
         * Deletes an entity record.
         * @param entityType logical name of the entity type record to delete
         * @param id GUID of the entity record you want to delete.
         * @returns The deferred object for the result of the operation. The deleted record object will be resolved if successful.
         */
        deleteRecord(entityType: string, id: string): Promise<LookupValue>;

        /**
         * Updates an entity record.
         * @param entityType logical name of the entity type record to update
         * @param id GUID of the entity record you want to update.
         * @param data dictionary containing to-change attributes with schema name and value
         * @returns The deferred object for the result of the operation. The updated record object will be resolved if successful.
         */
        updateRecord(entityType: string, id: string, data: WebApi.Entity): Promise<LookupValue>;

        /**
         * Retrieves a collection of entity records.
         * @param entityType logical name of the entity type record to retrieve
         * @param options OData system query options or FetchXML query to retrieve your data.
         * For support options, please refer to https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/xrm-webapi/retrievemultiplerecords
         * @param maxPageSize Max number of records to be retrieved per page
         * @returns The deferred object for the result of the operation. An object with interface RetrieveMultipleResponse will be resolved if successful.
         */
        retrieveMultipleRecords(entityType: string, options?: string, maxPageSize?: number): Promise<WebApi.RetrieveMultipleResponse>;

        /**
         * Retrieves an entity record.
         * @param entityType logical name of the entity type record to retrieve
         * @param id GUID of the entity record you want to retrieve.
         * @param options OData system query options, $select and $expand, to retrieve your data.
         * For support options, please refer to https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/xrm-webapi/retrieverecord
         * @returns The deferred object for the result of the operation. A JSON object with the retrieved properties and values will be resolved if successful.
         */
        retrieveRecord(entityType: string, id: string, options?: string): Promise<WebApi.Entity>;
    }

    //////////////// Define namespace of each context first-level child interface's helper ////////////////

    interface Dictionary {
        [key: string]: any;
    }

    /**
     * Helper of Device API interface
     */
    namespace DeviceApi {
        /**
         * Interface of input argument 'options' in context.device.captureImage
         */
        interface CaptureImageOptions {
            /**
             * Indicates whether to edit the image before saving.
             */
            allowEdit: boolean;

            /**
             * Height of the image to capture.
             */
            height: number;

            /**
             * Indicates whether to capture image using the front camera of the device.
             */
            preferFrontCamera: boolean;

            /**
             * Quality of the image file in percentage.
             */
            quality: number;

            /**
             * Width of the image to capture.
             */
            width: number;
        }

        /**
         * Interface of return geological information in context.device.getCurrentPosition
         */
        interface Position {
            /**
             * Contains a set of geographic coordinates along with associated accuracy as well as a set of other optional attributes such as altitude and speed.
             */
            coords: {
                latitude: number;
                longitude: number;
                accuracy: number;
                altitude: number;
                heading: number;
                speed: number;
                altitudeAccuracy: number;
            };

            /**
             * Represents the time when the object was acquired and is represented as DOMTimeStamp.
             */
            timestamp: Date;
        }

        /**
         * Interface of input argument 'pickupFileOption' in context.device.pickupFile
         */
        interface PickFileOptions {
            /**
             * Image file types to select. Valid values are "audio", "video", or "image".
             */
            accept: string;

            /**
             * Indicates whether to allow selecting multiple files.
             */
            allowMultipleFiles: boolean;

            /**
             * Maximum size of the files(s) to be selected.
             */
            maximumAllowedFileSize: number;
        }
    }

    /**
     * Helper of Factory Pop API interface
     */
    namespace FactoryApi.Popup {
        interface PopupService {
            /**
             * Create a new popup element
             * @param props The popup properties object, see Popup interface for more
             */
            createPopup(props: Popup): void;

            /**
             * Open an existing popup in the service with the given name. Does nothing if popup does not exist yet.
             * @param name the name of the popup you're trying to open
             */
            openPopup(name: string): void;

            /**
             * Close an existing popup in the service with the given name. Does nothing if popup does not exist yet.
             * @param name the name of the popup you're trying to close
             */
            closePopup(name: string): void;

            /**
             * Update an existing popup in the service with the given name, patching new content to the same popup element. Does nothing if popup does not exist yet.
             * @param name the name of the popup you're trying to update
             * @param newProps the updated properties to give to the popup.
             */
            updatePopup(name: string, newProps: Popup): void;

            /**
             * Remove the referenced popup from the popupService, unregister the service
             * @param name The name of the popup to remove
             */
            deletePopup(name: string): void;

            /**
             * Sets the ID (on the DOM and in the system) for the root popup element.
             * @param id The string to set as the id
             */
            setPopupsId(id: string): void;

            /**
             * Gets the currently set popup Id
             */
            getPopupsId(): string;
        }

        namespace Types {
            /**
             * Root popup in the popup stack
             * 1 - Root - Root popup in the popup stack,
             * 2 - Nested - Not root popup in the popup stack
             */
            type PopupType = 1 | 2;
        }

        interface Popup {
            /**
             * The id to be set to the anchor control if any.
             */
            id?: string | undefined;

            /**
             * The name of the Popup. Used as the reference to open Popups.
             */
            name: string;

            /**
             * Indicates whether popup close on an outside mouse click.
             * When it's false, the popup will not be closed on an outside mouse click.
             */
            closeOnOutsideClick?: boolean | undefined;

            /**
             * The name of Popup which should be opened.
             * Should be defined ONLY in a Root Popup.
             * To open nested Popups, should be provided string like "rootName.nestedName.[allOtherNestedNames]".
             * To close Popups, should be provided empty string.
             * This prop will be automatically propagated to children.
             */
            popupToOpen?: string | undefined;

            /**
             * The type of Popup, which is described in PopupType enum. Should be only one "root" Popup for each set of Popups.
             */
            type: Types.PopupType;

            /**
             * Static DOM element to be inserted
             */
            content: HTMLElement;
        }
    }

    /**
     * Helper of Formatting API interface
     */
    namespace FormattingApi.Types {
        /**
         * DateTime Field Behavior options
         * 0 - None - Unknown DateTime Behavior,
         * 1 - UserLocal - Respect user local time. Dates stored as UTC,
         * 3 - TimeZoneIndependent - Dates and time stored without conversion to UTC
         */
        type DateTimeFieldBehavior = 0 | 1 | 3;
    }

    /**
     * Helper of Navigation API interface
     */
    namespace NavigationApi {
        /**
         * Interface for alert dialog options.
         */
        interface AlertDialogOptions {
            /**
             * Height of the alert dialog in pixels.
             */
            height?: number | undefined;

            /**
             * Width of the alert dialog pixels.
             */
            width?: number | undefined;
        }

        /**
         * Represents the String parameters for Alert Dialog.
         */
        interface AlertDialogStrings {
            /**
             * The message to be displyed in the alert dialog.
             */
            text: string;

            /**
             * The confirm button label. If you do not specify the button label, OK (in user's preferred language) is used as the button label.
             */
            confirmButtonLabel?: string | undefined;
        }

        /**
         * Interface for confirm dialog options.
         */
        interface ConfirmDialogOptions {
            /**
             * Height of the confirmation dialog in pixels.
             */
            height?: number | undefined;

            /**
             *  Width of the confirmation dialog pixels.
             */
            width?: number | undefined;
        }

        /**
         * Represents the String parameters for Confirm Dialog.
         */
        interface ConfirmDialogStrings {
            /**
             * Confirm Dialog Title.
             */
            title?: string | undefined;

            /**
             * Confirm Dialog Subtitle
             */
            subtitle?: string | undefined;

            /**
             * Confirm Dialog Text\Message.
             */
            text: string;

            /**
             * The confirm button label. If you do not specify the button label, OK (in user's preferred language) is used as the button label.
             */
            confirmButtonLabel?: string | undefined;

            /**
             * Cancel Button label.
             */
            cancelButtonLabel?: string | undefined;
        }

        /**
         * An object with the confirmed (Boolean) attribute is passed that indicates whether the confirm button was clicked to close the dialog.
         */
        interface ConfirmDialogResponse {
            /**
             *  confirmed (Boolean) attribute is passed that indicates whether the confirm button was clicked to close the dialog.
             */
            confirmed: boolean;
        }

        /**
         * Interface for entity form options.
         */
        interface EntityFormOptions {
            /**
             * Designates a record that will provide default values based on mapped attribute values. The lookup object has the following String properties: entityType, id, and name
             */
            createFromEntity?: EntityReference | undefined;

            /**
             * ID of the entity record to display the form for.
             */
            entityId?: string | undefined;

            /**
             * Logical name of the entity to display the form for.
             */
            entityName: string;

            /**
             * ID of the form instance to be displayed.
             */
            formId?: string | undefined;

            /**
             * Height of the form window to be displayed in pixels.
             */
            height?: number | undefined;

            /**
             * Indicates whether to display form in a new window.
             */
            openInNewWindow?: boolean | undefined;

            /**
             * Indicates whether to open a quick create form. If you do not specify this, by default false is passed.
             */
            useQuickCreateForm?: boolean | undefined;

            /**
             * Width of the form window to be displayed in pixels.
             */
            width?: number | undefined;

            /**
             * Specify one of the following values for the window position of the form on the screen:
             *   1:center
             *   2:side
             */
            windowPosition?: number | undefined;
        }

        /**
         * Interface for error dialog options.
         * You must set either the errorCode or message attribute.
         */
        interface ErrorDialogOptions {
            /**
             * Details about the error. When you specify this, the Download Log File button is available in the error message, and clicking it will let users download a text file with
             * the content specified in this attribute.
             */
            details?: string | undefined;

            /**
             * If you just set errorCode, the message for the error code is automatically retrieved from the server and displayed in the error dialog. If you specify an errorCode value,
             * an error dialog with a default error message is displyed.
             */
            errorCode?: number | undefined;

            /**
             * The message to be displayed in the error dialog.
             */
            message?: string | undefined;
        }

        namespace Types {
            /**
             * The options for openFile mode.
             * 1 - open - default,
             * 2 - save
             */
            type OpenFileMode = 1 | 2;
        }

        /**
         * Interface for open file options.
         */
        interface OpenFileOptions {
            /**
             * Specify whether to open or save the file
             * Values:
             *   1 - open
             *   2 - save
             */
            openMode: Types.OpenFileMode;
        }

        /**
         * The object returned when a save is successful for open form.
         */
        interface OpenFormSuccessResponse {
            savedEntityReference: LookupValue[];
        }

        /**
         * Interface for OpenUrl options.
         */
        interface OpenUrlOptions {
            /**
             * Height of the window to display the resultant page in pixels.
             */
            height?: number | undefined;

            /**
             * Width of the window to display the resultant page in pixels.
             */
            width?: number | undefined;
        }

        /**
         * Interface for OpenWebResource options.
         */
        interface OpenWebResourceOptions {
            /**
             * Height of the window to display the resultant page in pixels.
             */
            height?: number | undefined;

            /**
             * Indicates whether to open the web resource in a new window.
             */
            openInNewWindow: boolean;

            /**
             * Width of the window to display the resultant page in pixels.
             */
            width?: number | undefined;
        }
    }

    /**
     * Helper of UserSettings API interface
     */
    namespace UserSettingApi {
        namespace Types {
            /**
             * Day Of Week Enum
             * 0 - Sunday,
             * 1 - Monday,
             * 2 - Tuesday,
             * 3 - Wednesday,
             * 4 - Thursday,
             * 5 - Friday,
             * 6 - Saturday
             */
            type DayOfWeek = 0 | 1 | 2 | 3 | 4 | 5 | 6;
        }

        /**
         * The interface for Org Date Format Info exposed to a custom control
         * Result pattern is based on culture,examples are for 'USA' area
         */
        interface DateFormattingInfo {
            /**
             * @example "AM"
             */
            amDesignator: string;

            /**
             * @example { "Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat" }
             */
            abbreviatedDayNames: string[];

            /**
             * @example { "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec", "" }
             */
            abbreviatedMonthGenitiveNames: string[];

            /**
             * @example { "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec", "" }
             */
            abbreviatedMonthNames: string[];

            /**
             * @example 0
             */
            calendarWeekRule: number;

            /**
             * @example See interface Calendar
             */
            calendar: Calendar;

            /**
             * @example "/"
             */
            dateSeparator: string;

            /**
             * @example { "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday" }
             */
            dayNames: string[];

            /**
             * @example See interface DayOfWeek
             */
            firstDayOfWeek: Types.DayOfWeek;

            /**
             * @example "dddd, MMMM d, yyyy h:mm:ss tt"
             */
            fullDateTimePattern: string;

            /**
             * @example "dddd, MMMM d, yyyy"
             */
            longDatePattern: string;

            /**
             * @example "hh:mm:ss tt"
             */
            longTimePattern: string;

            /**
             * @example "MMMM dd"
             */
            monthDayPattern: string;

            /**
             * @example { "January", "February", "March", ...  "December", "" }
             */
            monthGenitiveNames: string[];

            /**
             * @example { "January", "February", "March", ...  "December", "" }
             */
            monthNames: string[];

            /**
             * @example "PM"
             */
            pmDesignator: string;

            /**
             * @example "M/d/yyyy"
             */
            shortDatePattern: string;

            /**
             * @example "h:mm tt"
             */
            shortTimePattern: string;

            /**
             * @example { "Su", "Mo", "Tu", "We", "Th", "Fr", "Sa" }
             */
            shortestDayNames: string[];

            /**
             * @example "yyyy'-'MM'-'dd'T'HH':'mm':'ss"
             */
            sortableDateTimePattern: string;

            /**
             * @example ":"
             */
            timeSeparator: string;

            /**
             * @example "yyyy'-'MM'-'dd HH':'mm':'ss'Z'"
             */
            universalSortableDateTimePattern: string;

            /**
             * @example "MMMM yyyy"
             */
            yearMonthPattern: string;
        }

        /**
         * The interface for the Org System Settings Number Format Info exposed to a custom control
         * Comments indicate example values
         */
        interface NumberFormattingInfo {
            /**
             * @example 2
             */
            currencyDecimalDigits: number;

            /**
             * @example "."
             */
            currencyDecimalSeparator: string;

            /**
             * @example ","
             */
            currencyGroupSeparator: string;

            /**
             * @example [ 3 ]
             */
            currencyGroupSizes: number[];

            /**
             * @example 0
             */
            currencyNegativePattern: number;

            /**
             * @example 0
             */
            currencyPositivePattern: number;

            /**
             * @example "$"
             */
            currencySymbol: string;

            /**
             * @example "NaN"
             */
            nanSymbol: string;

            /**
             * @example { "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"}
             */
            nativeDigits: string[];

            /**
             * @example "-Infinity"
             */
            negativeInfinitySymbol: string;

            /**
             * @example "-"
             */
            negativeSign: string;

            /**
             * @example 2
             */
            numberDecimalDigits: number;

            /**
             * @example "."
             */
            numberDecimalSeparator: string;

            /**
             * @example ","
             */
            numberGroupSeparator: string;

            /**
             * @example [3]
             */
            numberGroupSizes: number[];

            /**
             * @example 1
             */
            numberNegativePattern: number;

            /**
             * @example ""
             */
            perMilleSymbol: string;

            /**
             * @example 2
             */
            percentDecimalDigits: number;

            /**
             * @example "."
             */
            percentDecimalSeparator: string;

            /**
             * @example ","
             */
            percentGroupSeparator: string;

            /**
             * @example [3]
             */
            percentGroupSizes: number[];

            /**
             * @example 0
             */
            percentNegativePattern: number;

            /**
             * @example 0
             */
            percentPositivePattern: number;

            /**
             * @example "%"
             */
            percentSymbol: string;

            /**
             * @example "Infinity"
             */
            positiveInfinitySymbol: string;

            /**
             * @example "+"
             */
            positiveSign: string;
        }

        /**
         * The interface for the Calendar exposed in DateFormattingInfo
         */
        interface Calendar {
            /**
             * @example "/Date(-62135568000000)/"
             */
            minSupportedDateTime: Date;

            /**
             * @example "/Date(253402300799999)/"
             */
            maxSupportedDateTime: Date;

            /**
             * @example 1
             */
            algorithmType: number;

            /**
             * @example 1
             */
            calendarType: number;

            /**
             * @example  2029
             */
            twoDigitYearMax: number;
        }
    }

    /**
     * Helper of Utils API interface
     */
    namespace UtilityApi {
        /**
         * Options used when opening a lookup dialog.
         */
        interface LookupOptions {
            /**
             * Whether the lookup allows more than one item to be selected.
             */
            allowMultiSelect: boolean;

            /**
             * The default entity type.
             */
            defaultEntityType: string;

            /**
             * The default view to use.
             */
            defaultViewId: string;

            /**
             * The entity types to display.
             */
            entityTypes: string[];

            /**
             * The views to be available in the view picker. Only System views are supported (not user views).
             */
            viewIds: string[];
        }
    }

    /**
     * Objects related to interacting with the Web API.
     */
    namespace WebApi {
        /**
         * Interface that describes an entity sent or received from the SDK through the Web API.
         */
        interface Entity {
            [key: string]: any;
        }

        interface RetrieveMultipleResponse {
            /**
             * An array of JSON objects, where each object represents the retrieved entity record containing attributes and their values
             */
            entities: Entity[];

            /**
             * If the number of records being retrieved is more than the value specified in the 'maxPageSize' parameter in the request, this attribute returns the URL to return next set of records.
             */
            nextLink: string;
        }
    }

    /**
     * An object that encapsulates an Entity Reference as a plain object suitable for storing in the state tree
     */
    interface EntityReference {
        /**
         * The record id. Read-only.
         */
        id: { guid: string; };

        /**
         * The entity logical name. Read-only.
         */
        etn?: string | undefined;

        /**
         * The name of the entity reference. Read-only.
         */
        name: string;
    }

    /**
     * An object used to contain an entity reference to a selected Lookup value. Fields defined as
     * such to align with other Lookup APIs
     */
    interface LookupValue {
        /**
         * The record id.
         */
        id: string;

        /**
         * The name of the record the lookup selection references.
         */
        name?: string | undefined;

        /**
         * The entity logical name of the record the lookup selection references.
         */
        entityType: string;
    }

    /**
     * Interface of one file object
     */
    interface FileObject {
        /**
         * Contents of the file.
         */
        fileContent: string;

        /**
         * Name of the file.
         */
        fileName: string;

        /**
         * Size of the file in KB.
         */
        fileSize: number;

        /**
         * File MIME type.
         */
        mimeType: string;
    }

///////////////////// Parameter ////////////////////////

    namespace PropertyTypes {
        /**
         * Interface for context.parameters.[property_key]
         */
        interface Property {
            error: boolean;
            errorMessage: string;
            formatted?: string | undefined;
            security?: PropertyHelper.SecurityValues | undefined;
            raw: any;
            type: string;
            attributes?: PropertyHelper.FieldPropertyMetadata.Metadata | undefined;
        }

        /**
         * Property Interface for context.parameters.[property_key], when property manifest type is Whole.None|FP|Decimal
         */
        interface NumberProperty extends Property {
            raw: number | null;
            attributes?: PropertyHelper.FieldPropertyMetadata.NumberMetadata | undefined;
        }

        /**
         * Property Interface for context.parameters.[property_key], when property manifest type is Decimal
         */
        interface DecimalNumberProperty extends NumberProperty {
            attributes?: PropertyHelper.FieldPropertyMetadata.DecimalNumberMetadata | undefined;
        }

        /**
         * Property Interface for context.parameters.[property_key], when property manifest type is FP
         */
        interface FloatingNumberProperty extends NumberProperty {
            attributes?: PropertyHelper.FieldPropertyMetadata.FloatingNumberMetadata | undefined;
        }

        /**
         * Property Interface for context.parameters.[property_key], when property manifest type is Whole.None
         */
        interface WholeNumberProperty extends NumberProperty {
            attributes?: PropertyHelper.FieldPropertyMetadata.WholeNumberMetadata | undefined;
        }

        /**
         * Property Interface for context.parameters.[property_key], when property manifest type starts from DateTime
         */
        interface DateTimeProperty extends Property {
            raw: Date | null;
            attributes?: PropertyHelper.FieldPropertyMetadata.DateTimeMetadata | undefined;
        }

        /**
         * Property Interface for context.parameters.[property_key], when property manifest type starts from SingleLine
         */
        interface StringProperty extends Property {
            raw: string | null;
            attributes?: PropertyHelper.FieldPropertyMetadata.StringMetadata | undefined;
        }

        /**
         * Property Interface for context.parameters.[property_key], when property manifest type is Enum
         */
        interface EnumProperty<EnumType> {
            type: string;
            raw: EnumType;
        }

        /**
         * Property Interface for context.parameters.[property_key], when property manifest type is OptionSet
         */
        interface OptionSetProperty extends Property {
            raw: number | null;
            attributes?: PropertyHelper.FieldPropertyMetadata.OptionSetMetadata | undefined;
        }

        /**
         * Property Interface for context.parameters.[property_key], when property manifest type is MultiSelectOptionSet
         */
        interface MultiSelectOptionSetProperty extends Property {
            raw: number[] | null;
            attributes?: PropertyHelper.FieldPropertyMetadata.OptionSetMetadata | undefined;
        }

        /**
         * Property Interface for context.parameters.[property_key], when property manifest type is TwoOptions
         */
        interface TwoOptionsProperty extends Property {
            raw: boolean;
            attributes?: PropertyHelper.FieldPropertyMetadata.TwoOptionMetadata | undefined;
        }

        /**
         * Property Interface for context.parameters.[property_key], when property manifest type is Lookup. Currently
         * targeted for use with Lookup.Simple only, and interface will be expanded as more features are made public.
         */
        interface LookupProperty extends Property {
            raw: LookupValue[];

            /**
             * Get Lookup target entity type
             */
            getTargetEntityType(): string;

            /**
             * Gets Id of view used by the lookup property
             */
            getViewId(): string;
        }

        /**
         * The structure returned by getCellImageInfo and propagated down to the control to display conditional images.
         */
        interface ImageInfo {
            /**
             * The Url of the conditional image.
             */
            Url: string;

            /**
             * The tooltip associated with that image.
             */
            Tooltip: string;
        }

        /**
         * The structure of a dataset property as it would be passed to a control
         */
        interface DataSet {
            /**
             * Adds column to the columnset
             * @param name column name to be added to the columnset
             * @param entityAlias entity alias for which the column name needs to be added
             */
            addColumn?: ((name: string, entityAlias?: string) => void) | undefined;

            /**
             * Set of columns available in this dataset.
             */
            columns: PropertyHelper.DataSetApi.Column[];

            /**
             * True if encountered error while data retrieval
             */
            error: boolean;

            /**
             * The error message associated with the last encountered error, if applicable
             */
            errorMessage: string;

            /**
             * The column filtering for the current query.
             */
            filtering: PropertyHelper.DataSetApi.Filtering;

            /**
             * Related entity info
             */
            linking: PropertyHelper.DataSetApi.Linking;

            /**
             * Indicate if the dataset property is in loading state or not
             */
            loading: boolean;

            /**
             * Pagination status and actions.
             */
            paging: PropertyHelper.DataSetApi.Paging;

            /**
             * Map of IDs to the full record object
             */
            records: {
                [id: string]: PropertyHelper.DataSetApi.EntityRecord;
            };

            /**
             * IDs of the records in the dataset, order by the query response result
             */
            sortedRecordIds: string[];

            /**
             * The sorting status for the current query.
             */
            sorting: PropertyHelper.DataSetApi.SortStatus[];

            /**
             * Clear selected record ids list
             */
            clearSelectedRecordIds(): void;

            /**
             * Retrieves all selected record ids
             */
            getSelectedRecordIds(): string[];

            /**
             * Get DataSet target entity logical name
             */
            getTargetEntityType(): string;

            /**
             * Retrieves the view display name used by the dataset property
             */
            getTitle(): string;

            /**
             * Gets Id of view used by the dataset property
             */
            getViewId(): string;

            /**
             * Open dataSet item for a given EntityReference. It will check if there is a command with command button id "Mscrm.OpenRecordItem".
             * If there is, it will execute the command, otherwise it will just navigate to the associated form of the entityReference
             * @param entityReference entity reference
             */
            openDatasetItem(entityReference: EntityReference): void;

            /**
             * Refreshes the dataset based on filters, sorting, linking, new column. New data will be pushed to control in another 'updateView' cycle.
             */
            refresh(): void;

            /**
             * Set the ids of the selected records
             * @param ids List of recordId's
             */
            setSelectedRecordIds(ids: string[]): void;
        }
    }

    namespace PropertyHelper {
        namespace Types {
            /**
             * Ime Mode
             * 0 - Auto,
             * 1 - Inactive,
             * 2 - Active,
             * 3 - Disabled
             */
            type ImeMode = 0 | 1 | 2 | 3;

            /**
             * Entity privilege types.
             * 0 - None
             * 1 - Create
             * 2 - Read
             * 3 - Write
             * 4 - Delete
             * 5 - Assign
             * 6 - Share
             * 7 - Append
             * 8 - AppendTo
             */
            type PrivilegeType = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;

            /**
             * Entity Priviledge Depth
             * -1 - None
             * 0 - Basic
             * 1 - Local
             * 2 - Deep
             * 3 - Global
             */
            type PrivilegeDepth = -1 | 0 | 1 | 2 | 3;

            /**
             * Attribute required level
             * -1 - Unknown
             * 0 - None
             * 1 - SystemRequired
             * 2 - ApplicationRequired
             * 3 - Recommended
             */
            type RequiredLevel = -1 | 0 | 1 | 2 | 3;
        }

        /**
         * Entity metadata refer to online documentation
         * https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/xrm-utility/getentitymetadata
         */
        interface EntityMetadata {
            [key: string]: any;
        }

        /**
         * Option Item Metadata
         */
        interface OptionMetadata {
            Label: string;
            Value: number;
            Color: string;
        }

        /**
         * Entity metadata security privileges.
         */
        interface SecurityPrivilegeMetadata {
            CanBeBasic: boolean;
            CanBeDeep: boolean;
            CanBeGlobal: boolean;
            CanBeLocal: boolean;
            CanBeEntityReference: boolean;
            CanBeParentEntityReference: boolean;
            Name: string;
            PrivilegeId: string;
            PrivilegeType: Types.PrivilegeType;
        }

        /**
         * Entity metadata security values
         */
        interface SecurityValues {
            editable: boolean;
            readable: boolean;
            secured: boolean;
        }

        namespace FieldPropertyMetadata {
            interface Metadata {
                DisplayName: string;
                LogicalName: string;
                RequiredLevel: Types.RequiredLevel;
                IsSecured: boolean;
                SourceType: number;
                Description: string;
            }

            interface NumberMetadata extends Metadata {
                MinValue: number;
                MaxValue: number;
                ImeMode: Types.ImeMode;
            }

            interface StringMetadata extends Metadata {
                MaxLength: number;
                ImeMode: Types.ImeMode;
            }

            interface FloatingNumberMetadata extends NumberMetadata {
                Precision: number;
            }

            interface DecimalNumberMetadata extends NumberMetadata {
                Precision: number;
            }

            interface WholeNumberMetadata extends NumberMetadata {
                Format: string;
                LanguageByCode?: Dictionary | undefined;
                TimeZoneByCode?: Dictionary | undefined;
            }

            interface DateTimeMetadata extends Metadata {
                Behavior: FormattingApi.Types.DateTimeFieldBehavior;
                Format: string;
                ImeMode: Types.ImeMode;
            }

            interface LookupMetadata extends Metadata {
                Targets: string[];
            }

            interface StringMetadata extends Metadata {
                Format: string;
            }

            interface OptionSetMetadata extends Metadata {
                Options: OptionMetadata[];
                DefaultValue: number;
            }

            interface TwoOptionMetadata extends Metadata {
                Options: [OptionMetadata, OptionMetadata];
                DefaultValue: boolean;
            }
        }

        namespace DataSetApi {
            namespace Types {
                /**
                 * Supported Condition Operator for filtering expression condition
                 * This is subset of full condition operators list defined in https://docs.microsoft.com/en-us/dotnet/api/microsoft.xrm.sdk.query.conditionoperator
                 */
                type ConditionOperator = -1 | 0 | 1 | 2 | 3 | 4 | 5 | 6 | 8 | 12 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 22 | 23
                                            | 25 | 26 | 27 | 28 | 29 | 33 | 34 | 37 | 38 | 49 | 70 | 75 | 76 | 77 | 78 | 79 | 87;

                /**
                 * Supported Filter Operator for filtering expression linkage
                 * 0 - And,
                 * 1 - Or
                 */
                type FilterOperator = 0 | 1;

                /**
                 * Column Sort Direction
                 * -1 - None,
                 * 0 - Ascending,
                 * 1 - Descending
                 */
                type SortDirection = -1 | 0 | 1;
            }

            /**
             * An expression used to represent a filter condition.
             */
            interface ConditionExpression {
                /**
                 * The name of the data-set column to apply the filter on.
                 */
                attributeName: string;

                /**
                 * The value evaluated by the condition
                 */
                conditionOperator: Types.ConditionOperator;

                /**
                 * The value evaluated by the condition.
                 */
                value: string | string[];

                /**
                 * Entity alias name so filtering can be used on linked entities.
                 */
                entityAliasName?: string | undefined;
            }

            /**
             * An expression used to represent a filter.
             */
            interface FilterExpression {
                /**
                 * The set of conditions associated with this filter.
                 */
                conditions: ConditionExpression[];

                /**
                 * The operator used to combine conditions in this filter.
                 */
                filterOperator: Types.FilterOperator;

                /**
                 * Any child filters that should be evaluated after evaluating this filter.
                 */
                filters?: FilterExpression[] | undefined;
            }

            /**
             * Filter state for a dataset.
             */
            interface Filtering {
                /**
                 * Returns the top-most filter associated with the data-set
                 */
                getFilter(): FilterExpression;

                /**
                 * Sets the top-most filter associated with the data-set
                 * @param expression filter expression to be set
                 */
                setFilter(expression: FilterExpression): void;

                /**
                 * Clears the filter associated with the data-set.
                 */
                clearFilter(): void;
            }

            /**
             * Metadata about a column in a dataset
             */
            interface Column {
                /**
                 * Name of the column, unique in this dataset
                 */
                name: string;

                /**
                 * Localized display name for the column
                 */
                displayName: string;

                /**
                 * The manifest type of this column's values.
                 */
                dataType: string;

                /**
                 * The alias of this column.
                 */
                alias: string;

                /**
                 * The column order for the layout
                 */
                order: number;

                /**
                 * Customized column width ratios
                 */
                visualSizeFactor: number;

                /**
                 * The column visibility state.
                 */
                isHidden?: boolean | undefined;

                /**
                 * Is specific column the primary attrribute of the view's entity
                 */
                isPrimary?: boolean | undefined;

                /**
                 * Prevents the UI from making the column sortable.
                 */
                disableSorting?: boolean | undefined;
            }

            /**
             * Base interface for dataset record result. Supports value retrival by column name.
             */
            interface EntityRecord {
                /**
                 * Get the current formatted value of this record column.
                 * @param columnName Column name of the record
                 */
                getFormattedValue(columnName: string): string;

                /**
                 * Get the record ID
                 */
                getRecordId(): string;

                /**
                 * Get the raw value of the record's column
                 * @param columnName Column name of the record
                 */
                getValue(columnName: string): string | Date | number | number[] | boolean | EntityReference | EntityReference[] | LookupValue | LookupValue[];

                /**
                 * Get the object that encapsulates an Entity Reference as a plain object
                 */
                getNamedReference(): EntityReference;
            }

            /**
             * Current sort status of a dataset column
             */
            interface SortStatus {
                /**
                 * The name of the column
                 */
                name: string;

                /**
                 * The current sort direction for the column.
                 */
                sortDirection: Types.SortDirection;
            }

            /**
             * Paging state for a dataset
             */
            interface Paging {
                /**
                 * Total number of results on the server for the currently applied query.
                 */
                totalResultCount: number;

                /**
                 * The number of the first page to retrieve
                 */
                firstPageNumber: number;

                /**
                 * The number of the last page to retrieve
                 */
                lastPageNumber: number;

                /**
                 * The pagesize for each page retrieved
                 */
                pageSize: number;

                /**
                 * Whether the result set can be paged forwards.
                 */
                hasNextPage: boolean;

                /**
                 * Whether the result set can be paged backwards.
                 */
                hasPreviousPage: boolean;

                /**
                 * Request the next page of results to be loaded. Returns results for the whole page range.
                 * New data will be pushed to control in another 'updateView' cycle.
                 * @param loadOnlyNewPage Limits return value to only newly loaded page.
                 */
                loadNextPage(loadOnlyNewPage?: boolean): void;

                /**
                 * Request the previous page of results to be loaded. Returns results for the whole page range.
                 * New data will be pushed to control in another 'updateView' cycle.
                 * @param loadOnlyNewPage Limits return value to only newly loaded page.
                 */
                loadPreviousPage(loadOnlyNewPage?: boolean): void;

                /**
                 * Reload the results from the server, and reset to page 1.
                 */
                reset(): void;

                /**
                 * Sets the number of results to return per page on the next data refresh.
                 * @param pageSize pageSize to be set.
                 */
                setPageSize(pageSize: number): void;

                /**
                 * Request the exact page of results to be loaded.
                 * @param pageNumber exact page to be loaded.
                 */
                loadExactPage(pageNumber: number): void;
            }

            /**
             * Dataset entity linking.
             */
            interface Linking {
                /**
                 * Returns all the linked entities information
                 */
                getLinkedEntities(): LinkEntityExposedExpression[];

                /**
                 * Add a new linked entity relationship with the existed query primary entity
                 * @param expression The new linked entity to add
                 */
                addLinkedEntity(expression: LinkEntityExposedExpression): void;
            }

            /**
             * Entity linking expression
             */
            interface LinkEntityExposedExpression {
                /**
                 * The 'name' of the entity to link to
                 */
                name: string;

                /**
                 * The 'from' attribute in the link-entity relationship
                 */
                from: string;

                /**
                 * The 'to' attribute in the link-entity relationship
                 */
                to: string;

                /**
                 * The 'type' of the link, referred by the link-entity attribute
                 */
                linkType: string;

                /**
                 * The 'alias' for the link-entity relationship
                 */
                alias: string;
            }
        }
    }
}
