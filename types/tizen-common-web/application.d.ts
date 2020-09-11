/**
 * This API provides a way to launch other applications and access
 * application management.
 *
 * The `ApplicationManager` interface also provides methods to launch other applications
 * explicitly and implicitly through the `ApplicationControl` interface.
 * The `ApplicationControl` interface consists of an operation, URI, and MIME type
 * and also describes an action to be performed by other
 * applications and can carry the result from the subsequent application.
 * The `ApplicationManager` interface also provides methods to handle the application
 * lifecycle, to access the installed applications on the device, and to let
 * an application be notified of a change in the application list.
 *
 * The `Application` interface defines the current application's information and
 * the basic operations for the current application such as exit or hide.
 *
 * Since Tizen 2.4 the `Application` interface provides application event broadcasting and listening features. An application can broadcast user events to other listening applications and listen to broadcasted user events from other applications. In a future Tizen release, applications will also be able to receive pre-defined system events from the platform.
 *
 * For more information on the Application features, see Application Guide, Application Group Guide or Application Control Guide.
 *
 * @since 1.0
 *
 * @defAPIFeature http://tizen.org/feature/battery
 * To guarantee the running of the application on a device which has battery, declare the following feature requirement in the config file:
 */

import { ErrorCallback, SuccessCallback } from './tizen';
import { PackageId } from './package';
/**
 * The unique ID for an installed application.
 */
export type ApplicationId = string;

/**
 * The unique ID for a running application.
 */
export type ApplicationContextId = string;

/**
 * Specifies the user event data.
 *
 * @since 2.4
 */
export type UserEventData = object;

/**
 * Specifies the user or system defined event data.
 *
 * @since 2.4
 */
export type EventData = SystemEventData | UserEventData;

/**
 * This interface represents filter for defining period of time, which will be used as a condition in `getAppsUsageInfo` method.
 *
 * The maximum retention period is 90 days.
 *
 * @since 4.0
 */
export type ApplicationUsageFilter = {
    /**
     * The attribute to store period of time, from which data is accumulated, in days.
     * The  period of time begins `timeSpan` days ago and ends with current date.
     *
     * If the attribute is given, the attributes `startTime` and `endTime` of this interface are not taken into an account.
     * If `timeSpan` is greater than ***90***, ***90*** will be used instead.
     */
    timeSpan?: number;
    /**
     * The attribute to store the date, which is used as a lower bound for selecting data.
     *
     * If only `startTime` attribute is given, by default `endTime` is equal to the current date.
     * If `startTime` date predates the 90 days from the current time, data will be accumulated from last 90 days.
     */
    startTime?: Date;
    /**
     * The attribute to store the date, which is used as an upper bound for selecting data.
     *
     * If only `endTime` attribute is given, data will be accumulated from 90 days ago to `endTime` date.
     */
    endTime?: Date;
};

/**
 * The EventInfo dictionary identifies an event with information such as event name. If it is an user event, the broadcasting application's identifier is also specified.
 *
 * System events do not require an application identifier to be specified. If one is specified, the event will be interpreted as an user event.
 *
 * @since 2.4
 */
export type EventInfo = {
    /**
     * The unique identifier of the application which is broadcasting an event.
     *
     * An application can listen to events from other applications. However, it can only broadcast its own events. Therefore, when broadcasting an event, this dictionary member must be the identifier of the application which is broadcasting the event.
     *
     * System events do not require an application identifier to be specified. If one is specified, the event will be interpreted as an user event.
     */
    appId: ApplicationId;
    /**
     * Name which describes the event.
     *
     * Must only contain the ASCII characters "[A-Z][a-z][0-9]_" and may not begin with a digit.
     * Must be at least 1 byte in length and not exceed the maximum name length of 127 bytes.
     */
    name: string;
};

/**
 * Specifies the application launch mode when it is launched by `launchAppControl()`. This value may be overridden if application launched by `launchAppControl()` has value `SINGLE` configured in application manifest.
 *
 * The launch modes defined by this enumerator are:
 *
 * - `SINGLE` - Launch application as standalone instance.
 * - `GROUP` - Launch application in subgroup.
 *
 * @since 2.4
 */
export enum ApplicationControlLaunchMode {
    SINGLE = 'SINGLE',
    GROUP = 'GROUP',
}

/**
 * Specifies the possible modes of getting statistics of application usage.
 *
 * Possible types are:
 *
 * - `RECENTLY` - Indicates most recently used applications, in a descending order of the application use counts.
 * - `FREQUENTLY` - Indicates most frequently used applications, in a descending order of the application use counts.
 *
 * @since 4.0
 */
export enum ApplicationUsageMode {
    RECENTLY = 'RECENTLY',
    FREQUENTLY = 'FREQUENTLY',
}

/**
 * This interface defines what is instantiated by the `Tizen` object on the Tizen Platform.
 *
 * The `tizen.application` object allows access to the Application API's functionality.
 *
 * @since 2.0
 */
export interface ApplicationManager {
    /**
     * Gets the `Application` object defining the current application.
     *
     *
     * @remark This method is not supported by Web Widget.
     *
     * @returns The data structure that defines the current application.
     *
     * @throw WebAPIException UnknownError
     *
     */
    getCurrentApplication: () => Application;

    /**
     * Kills an application with the specified application context ID.
     *
     * The `ErrorCallback` method is launched with these error types:
     *
     * - `NotFoundError` - If the context is not found with the specified context ID.
     * - `InvalidValuesError` - If any of the input parameters contain an invalid value
     *   or if the specified context ID matches the context ID of the calling application.
     * - `UnknownError` - If any other error occurs.
     *
     *
     * @privilegeLevel partner
     * @privilegeName http://tizen.org/privilege/appmanager.kill
     *
     * @param contextId The identifier of the application to kill.
     * @param successCallback The method to invoke when an application is killed successfully.
     * @param errorCallback The method to invoke when an error occurs.
     *
     * @throw WebAPIException TypeMismatchError, SecurityError
     *
     */
    kill: (contextId: ApplicationContextId, successCallback?: SuccessCallback, errorCallback?: ErrorCallback) => void;

    /**
     * Launches an application with the given application ID.
     *
     * The `ErrorCallback` method is launched with these error types:
     *
     * - `NotFoundError` - If the application is not found with the specified ID.
     * - `UnknownError` - If any other error occurs.
     *
     *
     * @privilegeLevel public
     * @privilegeName http://tizen.org/privilege/application.launch
     *
     * @remark Since Tizen 2.4, the launch request of the service application from other package is restricted by the platform.
     * @remark Use this method for proper case only, for example to launch your own app. Do not abuse the API for other app(s) launch without business consideration.
     *
     * @param id A unique string representing the application ID.
     * @param successCallback The method to call when the invocation ends successfully.
     * @param errorCallback The method to call when an error occurs.
     *
     * @throw WebAPIException TypeMismatchError, SecurityError
     *
     */
    launch: (id: ApplicationId, successCallback?: SuccessCallback, errorCallback?: ErrorCallback) => void;

    /**
     * Launches an application with the specified application control.
     *
     * An application can launch other applications with the application control,
     * and get back the results from the launched applications.
     *
     * The application control consists of an operation, URI, and MIME type, and describes
     * the request to be performed by the newly launched application. The
     * application control is passed to the `launchAppControl()` method to launch an
     * application. The system tries to find the proper application
     * to perform the requested application control, then launches the selected application.
     *
     * The application control request is passed to the newly launched application
     * and it can be accessed by the `getRequestedAppControl()` method. The passed
     * application control contains the reason the application has been launched and
     * information about what the application is doing. The launched application
     * can send a result to the caller application with the `replyResult()` method of the
     * `RequestedApplicationControl` interface.
     *
     * The `ErrorCallback` method is launched with these error types:
     *
     * - `NotFoundError` - If the system cannot find the application that matches the specified application control.
     * - `SecurityError` - If the application does not have the privilege to call the specified application control operation.
     * - `UnknownError` - If any other error occurs.
     *
     *
     * @privilegeLevel public
     * @privilegeName http://tizen.org/privilege/application.launch
     *
     * @remark Since Tizen 2.4, the launch request of the service application from other package is restricted by the platform.
     * Also, implicit launch requests are NOT delivered to service applications since 2.4. To launch a service application, an explicit launch request with `ApplicationId id` MUST be sent.
     * @remark Use this method for proper case only, for example to launch your own app. Do not abuse the API for other app(s) launch without business consideration.
     *
     * @param appControl The data structure describing application control details.
     * @param id An identifier of the application to be launched. If the ID is ***null*** or not specified, then the system tries to find the application to be launched for the requested application control.
     * @param successCallback The method to call when the invocation ends successfully.
     * @param errorCallback The method to invoke when an error occurs.
     * @param replyCallback The method to invoke when the application gets back results from the launched application.
     *
     * @throw WebAPIException TypeMismatchError, SecurityError
     *
     */
    launchAppControl: (
        appControl: ApplicationControl,
        id?: ApplicationId,
        successCallback?: SuccessCallback,
        errorCallback?: ErrorCallback,
        replyCallback?: ApplicationControlDataArrayReplyCallback,
    ) => void;

    /**
     * Finds which applications can be launched with the given application control.
     *
     * An application can get a list of other applications that can be launched with the application control.
     *
     * The `ErrorCallback` method is launched with these error types:
     *
     * - `NotFoundError` - If the application is not found with the given Appcontrol.
     * - `UnknownError` - If any other error occurs.
     *
     *
     * @param appControl A data structure describing application control details.
     * @param successCallback The method to call that returns a list of application information.
     * @param errorCallback The method to call when an error occurs.
     *
     * @throw WebAPIException TypeMismatchError
     *
     */
    findAppControl: (
        appControl: ApplicationControl,
        successCallback: FindAppControlSuccessCallback,
        errorCallback?: ErrorCallback,
    ) => void;

    /**
     * Gets a list of application contexts for applications that are currently running on a device.
     * The information contained for each application corresponds to the application state at the time when the list had been generated.
     *
     * The `ErrorCallback` method is launched with this error type:
     *
     * - `UnknownError` - If an unknown error occurs.
     *
     * @param successCallback The method to call when the invocation ends successfully.
     * @param errorCallback The method to call when an error occurs.
     *
     * @throw WebAPIException TypeMismatchError
     *
     */
    getAppsContext: (successCallback: ApplicationContextArraySuccessCallback, errorCallback?: ErrorCallback) => void;

    /**
     * Gets the application context for the specified application context ID.
     * If the ID is set to ***null*** or is not set at all, the method returns the application context of the current application.
     * The list of running applications and their application IDs is obtained with `getAppsContext()`.
     *
     *
     * @param contextId A string representing an application context ID
     * If the ID is not provided, the application context of the calling application is returned.
     *
     * @returns A data structure that lists running application details.
     *
     * @throw WebAPIException NotFoundError, UnknownError
     *
     */
    getAppContext: (contextId?: ApplicationContextId) => ApplicationContext;

    /**
     * Gets the list of installed applications' information on a device.
     * The information contained on each application corresponds to the application state at the time when the list had been generated.
     *
     * The `ErrorCallback` method is launched with this error type:
     *
     * - `UnknownError` - If an unknown error occurs.
     *
     * @param successCallback The method to call when the invocation ends successfully.
     * @param errorCallback The method to call when an error occurs.
     *
     * @throw WebAPIException TypeMismatchError
     *
     */
    getAppsInfo: (successCallback: ApplicationInformationArraySuccessCallback, errorCallback?: ErrorCallback) => void;

    /**
     * Gets application information for a specified application ID.
     *
     * If the ID is set to ***null*** or not set at all, it returns application information for the current application.
     * The list of installed applications and their application IDs is obtained with `getAppsInfo()`.
     *
     *
     * @param id A string representing an application ID
     * If the ID is not provided, the application information of the calling application is returned.
     *
     * @returns The information of an application.
     *
     * @throw WebAPIException NotFoundError, UnknownError
     *
     */
    getAppInfo: (id?: ApplicationId) => ApplicationInformation;

    /**
     * Gets application certificates for a specified application ID.
     *
     * If the ID is set to ***null*** or not set at all, it returns application certificates for the current application.
     *
     * The certificate types are listed below:
     *
     * - `AUTHOR_ROOT` - Author Root Certificate
     * - `AUTHOR_INTERMEDIATE` - Author Intermediate Certificate
     * - `AUTHOR_SIGNER` - Author Signer Certificate
     * - `DISTRIBUTOR_ROOT` - Distributor Root Certificate
     * - `DISTRIBUTOR_INTERMEDIATE` - Distributor Intermediate Certificate
     * - `DISTRIBUTOR_SIGNER` - Distributor Signer Certificate
     * - `DISTRIBUTOR2_ROOT` - Distributor2 Root Certificate
     * - `DISTRIBUTOR2_INTERMEDIATE` - Distributor2 Intermediate Certificate
     * - `DISTRIBUTOR2_SIGNER` - Distributor2 Signer Certificate
     *
     * @privilegeLevel partner
     * @privilegeName http://tizen.org/privilege/appmanager.certificate
     *
     * @param id A string representing an application ID. If the ID is not provided, the application certificate of the calling application is returned.
     *
     * @returns Array of certificate information of a specified application.
     *
     * @throw WebAPIException SecurityError, NotFoundError, UnknownError
     *
     */
    getAppCerts: (id?: ApplicationId) => ApplicationCertificate[];

    /**
     * Gets the URI of the read-only shared directory of an application for a specified application ID.
     *
     * The shared directory is used to export data to other applications. Its structure is described in
     * File System Directory Hierarchy
     *
     * @remark Since Tizen 3.0, ***shared/data*** directory is not created for web applications. For other applications it will be not created by default and should be considered as optional
     * (refer to table about shared/data for more details).
     *
     * If the ID is set to ***null*** or not set at all, it returns the shared directory URI for the current application.
     *
     * @since 2.1
     *
     * @param id A string representing an application ID. If the ID is not provided, the shared directory URI of the calling application is returned.
     *
     * @returns The shared directory URI of an application.
     *
     * @throw WebAPIException NotFoundError, UnknownError
     *
     */
    getAppSharedURI: (id?: ApplicationId) => string;

    /**
     * Gets the application meta data array for a specified application ID.
     *
     * If the ID is set to ***null*** or not set at all, it returns the application meta data array for the current application.
     *
     * @since 2.2
     *
     * @privilegeLevel public
     * @privilegeName http://tizen.org/privilege/application.info
     *
     * @param id A string representing an application ID. If the ID is not provided, the application metadata array of the calling application is returned.
     *
     * @returns Array of meta data of a specified application. If there are no meta data for a specified application,
     * an empty array is returned
     *
     * @throw WebAPIException SecurityError, NotFoundError, UnknownError
     *
     */
    getAppMetaData: (id?: ApplicationId) => ApplicationMetaData[];

    /**
     * Adds a listener for receiving any notification for changes in the list of installed applications
     * on a device.
     *
     * @note `deprecated` 2.4 Instead, use `tizen.package.setPackageInfoEventListener()`
     *
     * It installs a callback that is triggered every time a change occurs on
     * the list of installed applications on a device. This change may
     * occur due to a new installation, uninstall, or update of an application.
     *
     * When executed, the implementation must immediately return a listener
     * ID that identifies the listener. After returning the ID, the change
     * detection operation is started asynchronously.
     *
     * The `ApplicationInformationEventCallback` must be invoked every time a new
     * application is installed, removed, or updated.
     *
     * The change detection must continue until the `removeAppInfoEventListener()` method is called
     * with the corresponding listener identifier.
     *
     *
     * @param eventCallback The method to call when a change on the installed applications is made
     *
     * @returns ID of the listener that can be used to remove the listener later.
     *
     * @throw WebAPIException TypeMismatchError, UnknownError
     *
     */
    addAppInfoEventListener: (eventCallback: ApplicationInformationEventCallback) => number;

    /**
     * Removes the listener to stop receiving notifications for changes on the list of installed applications on a device.
     *
     * @note `deprecated` 2.4 Instead, use `tizen.package.unsetPackageInfoEventListener()`
     *
     *
     * @param watchId An ID that identifies the listener
     *
     * @throw WebAPIException NotFoundError, UnknownError
     *
     */
    removeAppInfoEventListener: (watchId: number) => void;

    /**
     * Adds a listener for receiving any notification for status changes of the installed applications on a device.
     *
     * @since 4.0
     *
     * @param eventCallback The method to call when status of the installed applications is changed.
     * @param appId The id of the application which status changes should be monitored. If the application id is omitted or it is equal to ***null***, all applications status changes will be monitored.
     *
     * @returns Listener id that can be used to remove the listener later.
     *
     * @throw WebAPIException TypeMismatchError, InvalidValuesError, AbortError
     *
     */
    addAppStatusChangeListener: (eventCallback: StatusEventCallback, appId?: ApplicationId) => number;

    /**
     * Removes the listener to stop receiving notifications for status changes of the installed applications on a device.
     *
     * Calling this function has no effect if there is no listener with given id.
     *
     * @since 4.0
     *
     * @param watchId An ID that identifies the listener.
     *
     * @throw WebAPIException AbortError
     *
     */
    removeAppStatusChangeListener: (watchId: number) => void;
}

/**
 * This interface defines the current application's information and
 * the basic operations (such as exit or hide) for the current application.
 *
 * @since 2.0
 */
export interface Application {
    /**
     * An attribute to store the application information for the current application.
     */
    readonly appInfo: ApplicationInformation;

    /**
     * An attribute to store the ID of a running application.
     */
    readonly contextId: ApplicationContextId;

    /**
     * Exits the current application.
     *
     *
     * @remark This method is not supported by Web Widget.
     *
     * @throw WebAPIException UnknownError
     *
     */
    exit: () => void;

    /**
     * Hides the current application.
     *
     *
     * @remark This method is not supported by Web Widget.
     *
     * @throw WebAPIException UnknownError
     *
     */
    hide: () => void;

    /**
     * Gets the requested application control passed to the current application.
     *
     * Gets the requested application control that contains the application control
     * passed by the `launchAppControl()` method from the calling application.
     * The requested application control contains the reason the application
     * is launched and what it has to perform. For example, an application
     * might be launched to display an image on a page by another
     * application's request. In all of these cases, the application is
     * responsible for checking the contents of the application control and responding
     * appropriately when it is launched.
     *
     *
     * @remark This method is not supported by Web Widget.
     *
     * @returns The details of a requested application control.
     *
     * @throw WebAPIException UnknownError
     *
     */
    getRequestedAppControl: () => RequestedApplicationControl;

    /**
     * Adds a listener which will invoke a callback function when an event occurs.
     *
     * System events do not require an application identifier to be specified. Therefore, the ***appId*** attribute of the EventInfo dictionary should not be specified when listening for system events. If it is specified, the event to listen for will be interpreted as an user event.
     *
     * @since 2.4
     *
     * @param event Event which will invoke the callback.
     * @param callback Callback function to be invoked when the event occurs.
     *
     * @returns Listener identifier.
     *
     * @throw WebAPIException TypeMismatchError, UnknownError
     *
     */
    addEventListener: (event: EventInfo, callback: EventCallback) => number;

    /**
     * Removes an event listener with a specified listener identifier.
     *
     * Calling this function has no effect if there is no listener with given id.
     *
     * @since 2.4
     *
     * @param watchId Listener identifier.
     *
     * @throw WebAPIException UnknownError
     *
     */
    removeEventListener: (watchId: number) => void;

    /**
     * Broadcasts a user defined event to all the listeners which are listening for this event.
     *
     * An application can listen to events from other applications. However, it can only broadcast its own events. Therefore, the ***appId*** attribute of the EventInfo dictionary must be the identifier of the application which calls this method.
     *
     * @since 2.4
     *
     * @param event Event to broadcast.
     * @param data User defined event data to broadcast.
     *
     * @throw WebAPIException TypeMismatchError, UnknownError
     *
     */
    broadcastEvent: (event: EventInfo, data: UserEventData) => void;

    /**
     * Broadcasts a user defined event to all the trusted listeners which are listening for this event. Applications which have the same certificate as the sending application can receive the event.
     *
     * An application can listen to events from other applications. However, it can only broadcast its own events. Therefore, the ***appId*** attribute of the EventInfo dictionary must be the identifier of the application which calls this method.
     *
     * @since 2.4
     *
     * @param event Trusted event to broadcast.
     * @param data User defined trusted event data to broadcast.
     *
     * @throw WebAPIException TypeMismatchError, UnknownError
     *
     */
    broadcastTrustedEvent: (event: EventInfo, data: UserEventData) => void;
}

/**
 * This interface defines the general information available to an installed application.
 */
export interface ApplicationInformation {
    /**
     * An attribute to store the identifier of an application for application management.
     */
    readonly id: ApplicationId;
    /**
     * An attribute to store the name of an application.
     */
    readonly name: string;
    /**
     * An attribute to store the icon path of an application.
     */
    readonly iconPath: string;
    /**
     * An attribute to store the version of an application.
     */
    readonly version: string;
    /**
     * An attribute that determines whether the application information should
     * be shown (such as in menus).
     */
    readonly show: boolean;
    /**
     * An array of attributes to store the categories that the app belongs to.
     *
     * @since 2.0
     */
    readonly categories: string[];
    /**
     * An attribute to store the application install/update time.
     *
     * @since 2.0
     */
    readonly installDate: Date;
    /**
     * An attribute to store the application size (installed space).
     *
     * @since 2.0
     *
     * @privilegeLevel public
     * @privilegeName http://tizen.org/privilege/application.info
     *
     * @throw WebAPIException SecurityError
     */
    readonly size: number;
    /**
     * An attribute to store the package ID of an application.
     *
     * @since 2.1
     */
    readonly packageId: PackageId;
}

/**
 * This interface defines the information available about a running
 * application.
 */
export interface ApplicationContext {
    /**
     * An attribute to store the ID of a running application.
     */
    readonly id: ApplicationContextId;
    /**
     * An attribute to store the ID of an installed application.
     */
    readonly appId: ApplicationId;
}

/**
 * This interface defines information about battery usage of application.
 *
 * @since 4.0
 */
export interface ApplicationBatteryUsage {
    /**
     * An attribute storing ID of an application.
     */
    readonly appId: ApplicationId;
    /**
     * An attribute which stores information about battery usage of an application with ApplicationId `appId`.
     * Battery usage is a ratio of battery consumption of the application with ApplicationId `appId` to the total battery consumption of all applications.
     * The attribute value scales from ***0*** to ***1***, the higher value, the more battery is consumed.
     */
    readonly batteryUsage: number;
}

/**
 * This interface defines information about usage of application.
 *
 * @since 4.0
 */
export interface ApplicationUsage {
    /**
     * An attribute to store the ID of an application.
     */
    readonly appId: ApplicationId;
    /**
     * An attribute to store the total number of times the application was in the foreground.
     */
    readonly totalCount: number;
    /**
     * An attribute to store the total time of application usage in seconds.
     */
    readonly totalDuration: number;
    /**
     * An attribute to store the last time when the application was used.
     */
    readonly lastTime: Date;
}

export interface ApplicationControlDataConstructor {
    new (key: string, value: string[]): ApplicationControlData;
}

/**
 * This interface defines a key/value pair used to pass data
 * between applications through the `ApplicationControl` interface.
 *
 * @since 2.0
 *
 */
export class ApplicationControlData {
    constructor(key: string, value: string[]);
    /**
     * An attribute to store the name of a key.
     */
    key: string;
    /**
     * An attribute to store the value associated with a key.
     */
    value: string[];
}

export interface ApplicationControlConstructor {
    new (
        operation: string,
        uri?: string,
        mime?: string,
        category?: string,
        data?: ApplicationControlData[],
        launchMode?: ApplicationControlLaunchMode | 'SINGLE' | 'GROUP',
    ): ApplicationControl;
}

/**
 * This interface consists of an operation, URI, MIME type,
 * and data. It describes an action to be performed by other applications
 * and is passed to launch other applications.
 * If the system gets the application control request, it finds
 * the corresponding application to be launched with the delivered application control
 * and launches the selected application.
 *
 * @since 2.0
 *
 */
export class ApplicationControl {
    constructor(
        operation: string,
        uri?: string,
        mime?: string,
        category?: string,
        data?: ApplicationControlData[],
        launchMode?: ApplicationControlLaunchMode | 'SINGLE' | 'GROUP',
        // | keyof ApplicationControlLaunchMode
    );
    /**
     * An attribute to store the string that defines the action to be
     * performed by an application control.
     */
    operation: string;
    /**
     * An attribute to store the URI needed by an application control.
     */
    uri?: string;
    /**
     * An attribute to store the MIME type of content.
     */
    mime?: string;
    /**
     * An attribute to store the category of the application to be launched.
     */
    category?: string;
    /**
     * An array of attributes to store the data needed for an application control.
     */
    data: ApplicationControlData[];
    /**
     * An attribute to specify launch mode. Default application launch mode is `SINGLE`.
     *
     * @since 2.4
     */
    launchMode: ApplicationControlLaunchMode;
}

/**
 * This interface has an application control information requested and passed
 * from another application and is passed to launch other applications. The newly
 * launched application can get the requested application control through the `getRequestedAppControl()` method, and send the results
 * to the calling application through the `replyResult()` method after performing the
 * required action requested by the calling application.
 *
 * @since 2.0
 */
export interface RequestedApplicationControl {
    /**
     * An attribute to store the application control object that describes the caller application's request.
     * It contains the information that the calling application passed to `launchAppControl`.
     */
    readonly appControl: ApplicationControl;
    /**
     * An attribute to store the caller application's ID.
     *
     * @since 2.1
     */
    readonly callerAppId: ApplicationId;
    /**
     * Sends the results to the caller application.
     *
     *
     * @param data An array of ApplicationControlData objects.
     *
     * @throw WebAPIException TypeMismatchError, NotFoundError, UnknownError
     *
     */
    replyResult: (data?: ApplicationControlData[]) => void;
    /**
     * Notifies the calling application that the application failed
     * to perform the requested action.
     *
     *
     * @throw WebAPIException NotFoundError, UnknownError
     *
     */
    replyFailure: () => void;
}

/**
 * This interface defines the certificate information of an installed application.
 *
 * @since 2.0
 */
export interface ApplicationCertificate {
    /**
     * An attribute to store the type of the application certificate
     */
    readonly type: string;
    /**
     * An attribute to store the value of the application certificate
     */
    readonly value: string;
}

/**
 * This interface defines the meta data of an installed application
 *
 * @since 2.2
 */
export interface ApplicationMetaData {
    /**
     * An attribute to store the key of the application meta data
     */
    readonly key: string;
    /**
     * An attribute to store the value of the application meta data
     */
    readonly value: string;
}

/**
 * The SystemEventData interface defines what is retrieved from the event listener.
 *
 * @since 2.4
 *
 * Platform modules will be able to broadcast system events in a future Tizen release.
 */
export interface SystemEventData {
    /**
     * Value of the system event data item.
     *
     * @since 2.4
     */
    value: string;
    /**
     * Type of the system event data item.
     *
     * @since 2.4
     */
    type: string;
}

/**
 * The EventCallback interface specifies a callback for getting notified when a specified event occurs.
 *
 * @since 2.4
 */
export interface EventCallback {
    /**
     * Defines a listener for caption setting change notifications.
     * @since 2.3
     */
    (event: EventInfo, data: EventData): void;
}

/**
 * The ApplicationControlDataArrayReplyCallback callback specifies success callbacks that are invoked as a reply from the requested application control within the application control requester.
 *
 * This callback interface specifies two methods:
 *
 * - `onsuccess()` - Invoked if the callee application calls `RequestedApplicationControl.replyResult()`.
 * - `onfailure()` - Invoked if the callee application calls `RequestedApplicationControl.replyFailure()`.
 *
 *
 * @since 2.0
 *
 */
export interface ApplicationControlDataArrayReplyCallback {
    /**
     * Called when the callee application calls `RequestedApplicationControl.replyResult()`.
     *
     *
     * @param data An array of `ApplicationControlData` objects.
     */
    onsuccess?(data?: ApplicationControlData[]): void;
    /**
     * Called when the callee application calls `RequestedApplicationControl.replyFailure()`.
     *
     */
    onfailure?(): void;
}

/**
 * This callback interface specifies a success callback that is invoked when the system has finished searching applications that match a specific application control .
 *
 * This callback interface specifies a success method with an array of
 * `ApplicationInformation` objects and application control as an input parameter.
 * It is used in `ApplicationManager.findAppControl()`.
 *
 * @since 2.0
 */
export interface FindAppControlSuccessCallback {
    (informationArray: ApplicationInformation[], appControl: ApplicationControl): void;
}

/**
 * This callback interface specifies a success callback that is invoked when the list of running applications is retrieved.
 *
 * This callback interface specifies a success method with
 * an array of `ApplicationContext` objects as an input parameter. It is used in `ApplicationManager.getAppsContext()`.
 */
export interface ApplicationContextArraySuccessCallback {
    (contexts: ApplicationContext[]): void;
}

/**
 * This callback interface specifies a success callback that is invoked when the installed application list is retrieved.
 *
 * This callback interface specifies a success method with an array of
 * `ApplicationInformation` objects as an input parameter. It is used in `ApplicationManager.getAppsInfo()`.
 */
export interface ApplicationInformationArraySuccessCallback {
    (informationArray: ApplicationInformation[]): void;
}

/**
 * The StatusEventCallback interface specifies a callback for getting notified when status of the installed application has been changed.
 *
 * @since 4.0
 */
export interface StatusEventCallback {
    /**
     * Called when the status event occurs.
     *
     * Example of using can be find at addAppStatusChangeListener code example.
     *
     *
     * @param appId Id of the application that status has been changed.
     * @param isActive The new status of the application.
     */
    (appId: ApplicationId, isActive: boolean): void;
}

/**
 * This callback interface specifies methods that are invoked when an application is installed, updated, or uninstalled.
 */
export interface ApplicationInformationEventCallback {
    /**
     * Called when an application is installed.
     *
     * @param info The information of the installed application.
     */
    oninstalled?(info: ApplicationInformation): void;
    /**
     * Called when an application is updated.
     *
     * @param info The information of the updated application.
     */
    onupdated?(info: ApplicationInformation): void;
    /**
     * Called when an application is uninstalled.
     *
     * @param id The ID of the uninstalled application.
     */
    onuninstalled?(id: PackageId): void;
}
