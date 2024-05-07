import {
    CMYKColorDescriptor,
    ColorConversionModel,
    ColorDescriptor,
    GrayscaleColorDescriptor,
    HSBColorDescriptor,
    LabColorDescriptor,
    RGB32ColorDescriptor,
    RGBColorDescriptor,
} from "../util/colorTypes";
/** @ignore */
declare type NotificationListener = (name: string, descriptor: ActionDescriptor) => void;
/** @ignore */
export interface ActionReference {
    [index: string]: number | string;
}
/** @ignore */
export interface ActionDescriptor {
    _obj: string;
    [prop: string]: any;
}
/**
 * @targetfolder objects/returnobjects
 * @minVersion 22.5
 */
interface Scheduling {
    playLevel?: number;
    eventLevel?: number;
    timeOut?: number;
}
/**
 * @optionobject
 * @targetfolder objects/options
 * @minVersion 23.0
 */
export interface BatchPlayCommandOptions {
    /**
     * @minVersion 23.0
     */
    commandEnablement?: "normal" | "never" | "always";
    /**
     * @minVersion 23.0
     */
    dialogOptions?: "silent" | "dontDisplay" | "display";
    /**
     * @minVersion 23.0
     */
    propagateErrorToDefaultHandler?: boolean;
    /**
     * @minVersion 23.0
     */
    synchronousExecution?: boolean;
    /**
     * @minVersion 23.0
     */
    modalBehavior?: "wait" | "execute" | "fail";
    /**
     * @minVersion 23.0
     */
    useMultiGet?: boolean;
    /**
     * @minVersion 23.0
     */
    suppressPlayLevelIncrease?: boolean;
    /**
     * Do not stop a batchPlay when a descriptor fails and continue with remaining descriptors in batch.
     * @minVersion 24.5
     */
    continueOnError?: boolean;
}
export declare type CPUVendorKind = "Intel" | "AMD" | "ARM" | "Unknown";
/**
 * @targetfolder objects/returnobjects
 * @minVersion 23.0
 */
export interface CPUInfo {
    /**
     * @minVersion 23.0
     */
    vendor: CPUVendorKind;
    /**
     * @minVersion 23.0
     */
    physicalCores: number;
    /**
     * @minVersion 23.0
     */
    logicalCores: number;
    /**
     * @minVersion 23.0
     */
    frequencyMhz: number;
    /**
     * @minVersion 23.0
     */
    emulationMode?: "rosetta2";
}
/**
 * @targetfolder objects/returnobjects
 * @minVersion 23.0
 */
export interface OpenGLDeviceInfo {
    /**
     * @minVersion 23.0
     */
    version: string;
    /**
     * @minVersion 23.0
     */
    memoryMB: number;
    /**
     * @minVersion 23.0
     */
    name: string;
    /**
     * @minVersion 23.0
     */
    driverVersion: string;
    /**
     * @minVersion 23.0
     */
    vendor: string;
    /**
     * @minVersion 23.0
     */
    isIntegrated: string;
    /**
     * @minVersion 23.0
     */
    glDriver: string;
}
/**
 * @targetfolder objects/returnobjects
 * @minVersion 23.0
 */
export interface OpenCLDeviceInfo {
    /**
     * @minVersion 23.0
     */
    version: string;
    /**
     * @minVersion 23.0
     */
    memoryMB: number;
    /**
     * @minVersion 23.0
     */
    name: string;
    /**
     * @minVersion 23.0
     */
    driverVersion: string;
    /**
     * @minVersion 23.0
     */
    vendor: string;
    /**
     * @minVersion 23.0
     */
    isIntegrated: string;
    /**
     * @minVersion 23.0
     */
    oclBandwidth: number;
    /**
     * @minVersion 23.0
     */
    oclCompute: number;
    /**
     * @minVersion 23.0
     */
    clDeviceVersion: string;
    /**
     * @minVersion 23.0
     */
    clPlatformVersion: string;
}
/**
 * @targetfolder objects/returnobjects
 * @minVersion 23.0
 */
export interface GPUInfo {
    /**
     * @minVersion 23.0
     */
    gpuInfoList?: OpenGLDeviceInfo[];
    /**
     * @minVersion 23.0
     */
    clgpuInfoList?: OpenCLDeviceInfo[];
}
/**
 * @targetfolder objects/returnobjects
 * @minVersion 23.0
 */
interface LayerTreeInfo {
    /**
     * @minVersion 23.0
     */
    name: string;
    /**
     * @minVersion 23.0
     */
    layerID: number;
    /**
     * @minVersion 23.0
     */
    kind: string;
    /**
     * @minVersion 23.0
     */
    layers?: LayerTreeInfo[];
}
/**
 * The module that facilitates Actions being performed in the
 * UXP-Photoshop world. You may perform your own `batchPlay` commands,
 * or attach listeners using this module.
 *
 * ```javascript
 * var PhotoshopAction = require('photoshop').action;
 * ```
 *
 * @targetfolder media
 */
export declare namespace photoshopAction {
    /**
     * Performs a batchPlay call with the provided commands. Equivalent
     * to an `executeAction` in ExtendScript.
     * ```javascript
     * var target = { _ref: 'layer', _enum: 'ordinal', _value: 'targetEnum'}
     * var commands = [{ _obj: 'hide', _target: target }]
     * await PhotoshopAction.batchPlay(commands)
     * ```
     * @minVersion 23.0
     */
    function batchPlay(
        commands: ActionDescriptor[],
        options?: BatchPlayCommandOptions,
    ): Promise<ActionDescriptor[]>;
    /**
     * Attach a listener to a Photoshop event. A callback in the form
     * of `(eventName: string, descriptor: Descriptor) => void` will be performed.
     * ```javascript
     * await PhotoshopAction.addNotificationListener(['open'], onOpenNewDocument)
     * ```
     * @minVersion 23.0
     */
    function addNotificationListener(events: string[], notifier: NotificationListener): Promise<void>;
    /**
     * Detaches a listener from a Photoshop event.
     * See [addNotificationListener](#addNotificationListener)
     * ```javascript
     * await PhotoshopAction.removeNotificationListener(['open'], onOpenNewDocument)
     * ```
     * @minVersion 23.0
     */
    function removeNotificationListener(events: string[], notifier: NotificationListener): Promise<void>;
    /**
     * Synchronously validates the given action reference, returning true if it still
     * exists. For example, calling this with a closed document would return false.
     *
     * This feature is intended for advanced developers who understand well how batchPlay works.
     * Validate reference could get handy when you want to add new DOM functionality or use low-level code for
     * performance optimization.
     *
     * See [Action references](../batchplay#action-references) for details.
     *
     * Supported reference classes:
     * `action`,
     * `document`,
     * `channel`,
     * `layer`,
     * `guide`,
     * `historyState`,
     * `compsClass`,
     * `path`,
     * `actionSet`
     *
     * @minVersion 23.1
     */
    function validateReference(ref: ActionReference | ActionReference[]): boolean;
    /**
     * Return the identifier number assigned to an action string value.
     * If the string is not already registered, a new ID will be created and returned.
     * @minVersion 24.0
     */
    function getIDFromString(value: string): number;
}
/**
 * The module that allows access to specialized commands
 * within the application. Various application state can be
 * modified or queried here.
 *
 * ```javascript
 * var PhotoshopCore = require('photoshop').core;
 * ```
 *
 * @targetfolder media
 */
export declare namespace photoshopCore {
    /**
     * API Version declared by the plugin's manifest.json under `host.data.apiVersion` field.
     *
     * If value 1, you will have access to Photoshop 22.0 DOM and be able to make mutable calls outside a modal state.
     * If 2, you will have access to latest DOM, modal execution and everything else new we're adding.
     * @minVersion 22.5
     */
    let apiVersion: number;
    /**
     * Returns true if the plugin is currently in a modal state using [[executeAsModal]]
     * @minVersion 23.1
     */
    function isModal(): boolean;
    /**
     * Given a Photoshop ZString (of format `"$$$/slash/separated/key=english default value"`),
     * will return the translated string for the current UI language
     * @minVersion 22.5
     */
    function translateUIString(zstring: string): string;
    /**
     * Invokes the menu command via its `commandID`. Returns false
     * on failure, or if the command is not available.
     * ```javascript
     * // select all
     * await PhotoshopCore.performMenuCommand({ commandID: 1017 })
     * ```
     * @minVersion 22.5
     * @async
     */
    function performMenuCommand(options: MenuCommandOptions): Promise<PerformMenuCommandResult>;
    /**
     * Returns whether a command menu item is available for invoking.
     * ```javascript
     * // can a Fill be performed?
     * var canFill = await PhotoshopCore.getMenuCommandState({ commandID: 1042 })
     * ```
     * @minVersion 22.5
     * @async
     */
    function getMenuCommandState(options: MenuCommandOptions): Promise<[boolean]>;
    /**
     * Returns the localized menu title of the menu command item.
     * ```javascript
     * var renameLayerStr = await PhotoshopCore.getMenuCommandTitle({ commandID: 2983 })
     * ```
     * @minVersion 22.5
     * @async
     */
    function getMenuCommandTitle(options: MenuCommandMenuIDOptions): any;
    function getMenuCommandTitle(options: MenuCommandOptions): any;
    /**
     * Returns information about the active Photoshop tool.
     * ```javascript
     * { title } = await PhotoshopCore.getActiveTool()
     * ```
     * @minVersion 22.5
     * @async
     */
    function getActiveTool(): Promise<GetActiveToolResult>;
    /**
     * Returns information about the host CPU.
     * ```javascript
     * { logicalCores, frequencyMhz, vendor } = PhotoshopCore.getCPUInfo()
     * var isAMD = vendor === "AMD"
     * var isARM = vendor === "ARM"
     * ```
     * @minVersion 23.1
     */
    function getCPUInfo(): CPUInfo;
    /**
     * Returns OpenGL and OpenCL information about the available graphics processor.
     * ```javascript
     * { gpuInfoList, clgpuInfoList } = PhotoshopCore.getGPUInfo()
     * console.log(JSON.stringify(gpuInfoList))
     * // > [{"version":"2.1 ATI-4.5.14","memoryMB":8192,"name":"16915464", ...}]
     * console.log(JSON.stringify(clgpuInfoList))
     * // > [{"version":"OpenCL 1.2 ","memoryMB":8589,"name":"AMD Radeon Pro 580X Compute Engine", ...}]
     * ```
     * @minVersion 23.1
     */
    function getGPUInfo(): GPUInfo;
    /**
     * End the current modal tool editing state.
     * ```javascript
     * // close the modal dialog, cancelling changes
     * await PhotoshopCore.endModalToolState(false)
     * ```
     * @minVersion 22.5
     * @async
     */
    function endModalToolState(commit: boolean): Promise<void>;
    /**
     * Request that Photoshop redraws (updates) a document immediately.
     * This method can be used to ensure that the document is updated
     * immediately while a user is interacting with a UI element (such as a slider).
     * This can provide a more responsive interaction.
     * Updating a document can be time consuming, and will often happen at a lower frequency
     * than UI events are received.
     * Plugins may therefore want to implement a throttle between UI events and calls to
     * redrawDocument.
     * A throttle could be implemented by using a timer, or by avoiding to call redrawDocument
     * for a small amount of time after a previous request completes.
     * redrawDocument returns the time that it took Photoshop to update the target document
     * in seconds. This number can be used to refine the throttle.
     * redrawDocument is only available to a plugin that is using apiVersion 2 or higher.
     * ```javascript
     * await PhotoshopCore.redrawDocument({ documentID: 123})
     * ```
     *
     * Note: This is not available if DOM API version is set to `1`.
     *
     * @minVersion 24.1
     * @async
     */
    function redrawDocument(options: RedrawDocumentOptions): Promise<number>;
    /**
     * Show a generic alert box to the user. 'OK' to dismiss.
     * ```javascript
     * // script has completed.
     * await PhotoshopCore.showAlert({ message: 'Operation successful'})
     * ```
     * @minVersion 22.5
     * @async
     */
    function showAlert(
        options: string | {
            message: string;
        },
    ): Promise<void>;
    /**
     * Returns the effective size of a dialog.
     * ```javascript
     * var idealSize = { width: 200, height: 500 }
     * { width, height} = await PhotoshopCore.calculateDialogSize(idealSize)
     * ```
     * @minVersion 22.5
     * @async
     */
    function calculateDialogSize(options: {
        preferredSize: {
            width: number;
            height: number;
        };
        identifier?: string;
        minimumSize?: {
            width: number;
            height: number;
        };
    }): Promise<{
        width: number;
        height: number;
    }>;
    /**
     * ExecuteAsModal is needed when a plugin wants to make modifications to the Photoshop state.
     * This includes scenarios where the plugin wants to create or modify documents,
     * or the plugin wants to update UI or preference state.
     *
     * ExecuteAsModal is only available to plugin that is using apiVersion 2 or higher.
     *
     * See [Modal Execution](../executeasmodal) for details
     *
     * ***Fixes in Photoshop 24.0:***
     * - *Returned values can now be instances of classes and contain functions*
     *
     * @minVersion 22.5
     * @async
     */
    function executeAsModal<T>(
        targetFunction: (executionContext: ExecutionContext, descriptor?: object) => Promise<T>,
        options: ExecuteAsModalOptions,
    ): Promise<T>;
    /**
     * Converts the given color (in descriptor form) to RGB,
     * returning the color descriptor.
     *
     * This is an internal API that is used for [[SolidColor]]
     * and all the other color classes.
     *
     * Currently, this API uses the application color settings
     * for conversion (Edit > Color Settings...). '
     * In the future, we will provide color conversion
     * based on embedded color profiles.
     * @minVersion 23.0
     */
    function convertColor(
        sourceColor: ColorDescriptor,
        targetModel: ColorConversionModel.RGB,
    ): RGBColorDescriptor | RGB32ColorDescriptor;
    /**
     * Convert to Lab
     * @minVersion 23.0
     */
    function convertColor(sourceColor: ColorDescriptor, targetModel: ColorConversionModel.Lab): LabColorDescriptor;
    /**
     * Convert to HSB
     * @minVersion 23.0
     */
    function convertColor(sourceColor: ColorDescriptor, targetModel: ColorConversionModel.HSB): HSBColorDescriptor;
    /**
     * Convert to Grayscale
     * @minVersion 23.0
     */
    function convertColor(
        sourceColor: ColorDescriptor,
        targetModel: ColorConversionModel.Gray,
    ): GrayscaleColorDescriptor;
    /**
     * Convert to CMYK
     * @minVersion 23.0
     */
    function convertColor(sourceColor: ColorDescriptor, targetModel: ColorConversionModel.CMYK): CMYKColorDescriptor;
    /**
     * The execution mode can be used while debugging a plugin. It is only available
     * when the developer mode is enabled.
     *
     * The following example illustrate how to enable stacktraces for batchPlay commands
     * that fail. When stacktraces are enabled, then an error result descriptor from a
     * batchPlay request will include a stacktrace property. The property can be used when
     * reporting bugs to Adobe.
     * ```javascript
     * await PhotoshopCore.setExecutionMode({ enableErrorStacktraces: true })
     * ```
     * The following illustrates how to enable console warnings when a promise is rejected:
     * ```javascript
     * await PhotoshopCore.setExecutionMode({ logRejections: true })
     * ```
     * @minVersion 23.2
     * @async
     */
    function setExecutionMode(options: SetExecutionModeOptions): Promise<void>;
    /**
     * Return information about the execution of the plugin.
     * This method is intended for developing plugins.
     * Shipping code should not use this method.
     *
     * The returned information include the following properties:
     *
     * `numberOfPendingMainThreadTasks`: Number of pending promises.
     *
     * `batchPlayCount`: Number of `batchPlay` calls since the plugin was loaded.
     *
     * `mainThreadTimeOutCount`: Number of JavaScript calls that have timed out.
     * This is typically caused by executing commands while Photoshop is modal without using
     * `executeAsModal`.
     *
     * `v8HeapSize`: V8 heap allocated for the plugin. This number is only accurate
     * when loading plugins through the UXP Developer Tool.
     *
     * ```javascript
     * await PhotoshopCore.getPluginInfo()
     * ```
     * @minVersion 23.2
     * @async
     */
    function getPluginInfo(): Promise<GetPluginInfoResult>;
    /**
     * Attach a listener to a Photoshop core event. A callback in the form
     * of `(eventName: string, descriptor: Descriptor) => void` will be performed.
     * The event(s) below are supported:
     *
     * group: '`UI`', event: '`userIdle`'
     *
     * - Invoked after the Photoshop user idles for a specified number of seconds. See [[setUserIdleTime]].
     * - Invoked a second time with the descriptor `{idleEnd: true}` if the user is no longer idle. This signal can
     * be used to finish up tasks being performed during the idle time.
     * ```javascript
     * await PhotoshopCore.addNotificationListener('UI', ['userIdle'], onUserIdle)
     * ```
     * @minVersion 23.3
     * @async
     */
    function addNotificationListener(group: string, events: string[], notifier: NotificationListener): Promise<void>;
    /**
     * Specifies the number of seconds a user must be idle on Photoshop before invoking the
     * userIdle event handler defined with [[addNotificationListener]]. An idleTime of 0
     * turns off idle notifications.
     *
     * ```javascript
     * await PhotoshopCore.setUserIdleTime(3)
     * ```
     * @minVersion 23.3
     */
    function setUserIdleTime(idleTime: number): Promise<void>;
    /**
     * Changes visibility of resize gripper in bottom right corner of panel. This can be useful when resize gripper
     * is obstructing the view o panel content.
     */
    function suppressResizeGripper(options: SuppressResizeGripperOptions): Promise<void>;
    /**
     * Returns display configuration with information about each display
     */
    function getDisplayConfiguration(options: DisplayConfigurationOptions): Promise<DisplayConfiguration[]>;
    /**
     * Gets the number of seconds a user must be idle on Photoshop before invoking the
     * userIdle event handler defined with [[addNotificationListener]]. An idleTime of 0
     * means turned off idle notifications.
     */
    function getUserIdleTime(): Promise<number>;
}
/**
 * @targetfolder objects/returnobjects
 */
export interface GetPluginInfoResult {
    _obj: "pluginInfo";
    batchPlayCount: number;
    isFirstParty: boolean;
    launchTimeImpact: number;
    mainThreadTimeOutCount: number;
    mainThreadUnhandledExceptionCount: number;
    name?: string;
    numberOfPendingMainThreadTasks: number;
    path?: string;
    pendingDeferralCount: number;
    pluginLoadTime: number;
    usedMainThreadTime: number;
    v8HeapSize: number;
    version?: string;
}
/**
 * @targetfolder objects/returnobjects
 */
export interface LayerTreeList {
    list: LayerTreeInfo[];
}
/**
 * @optionobject
 * @targetfolder objects/options
 */
export declare type GetLayerGroupContentsOptions = GetLayerParentOptions;
/**
 * @optionobject
 * @targetfolder objects/options
 */
export declare type HistorySuspendedOptions = DocumentCoreOptions;
/**
 * @optionobject
 * @targetfolder objects/options
 */
export declare type GetLayerTreeOptions = DocumentCoreOptions;
interface DocumentCoreOptions {
    documentID: number;
}
interface GetLayerParentOptions {
    documentID: number;
    layerID: number;
}
/**
 * @targetfolder objects/returnobjects
 */
export declare type GetLayerParentResult = {} | {
    index: number;
    layerID: number;
    layerKind: number;
    name: string;
};
export interface DisplayConfigurationOptions {
    physicalResolution?: boolean;
}
/**
 * @targetfolder objects/returnobjects
 */
export interface PerformMenuCommandResult {
    /** If true then the menu command was available and was executed. If false, then Photoshop was in a state where the requested command was not available. */
    available: boolean;
    /** If the menu command was executed (if available is true), then this value is true if the user cancelled the request. */
    userCancelled: boolean;
}
/**
 * @targetfolder objects/returnobjects
 */
export interface DisplayConfiguration {
    isPrimary: boolean;
    scaleFactor: number;
    globalBounds: DisplayConfigurationBounds;
    globalWorkingBounds: DisplayConfigurationBounds;
    physicalResolution: DisplayConfigurationPhysical;
}
/**
 * @targetfolder objects/returnobjects
 */
export interface DisplayConfigurationBounds {
    bottom: number;
    left: number;
    right: number;
    top: number;
}
/**
 * @targetfolder objects/returnobjects
 */
export interface GetActiveToolResult {
    title: string;
    isModal: boolean;
    key: string;
    classId: string;
}
/**
 * @targetfolder objects/returnobjects
 */
export interface DisplayConfigurationPhysical {
    horizontal: number;
    vertical: number;
}
/**
 * @optionobject
 * @targetfolder objects/options
 */
export interface SetExecutionModeOptions {
    enableErrorStacktraces?: boolean;
    logRejections?: boolean;
}
/**
 * @optionobject
 * @targetfolder objects/options
 */
export declare type RedrawDocumentOptions = DocumentCoreOptions;
/**
 * @optionobject
 * @targetfolder objects/options
 */
export declare type DeleteTemporaryDocumentOptions = DocumentCoreOptions;
/**
 * @optionobject
 * @targetfolder objects/options
 */
export declare type CreateTemporaryDocumentOptions = DocumentCoreOptions;
/**
 * @targetfolder objects/returnobjects
 */
export declare type CreateTemporaryDocumentResult = DocumentCoreOptions;
/**
 * Object to be passed as argument into `suppressResizeGripper()`. `type` and `target` arguments should match
 * witch some entrypoint specified in manifest file.
 * @optionobject
 * @targetfolder objects/options
 */
export interface SuppressResizeGripperOptions {
    /** Type of entrypoint e.g. `panel`*/
    type: string;
    /** Id of entrypoint in manifest file */
    target: string;
    /** Set true to hide resize gripper */
    value: boolean;
}
/**
 * Object to be passed as argument into `getMenuCommandTitle()`, `performMenuCommand()` and `getMenuCommandState()`
 * @optionobject
 * @targetfolder objects/options
 */
export interface MenuCommandOptions {
    commandID: number;
    scheduling?: Scheduling;
}
/**
 * Object to be passed as argument into `getMenuCommandTitle()`
 * @optionobject
 * @targetfolder objects/options
 */
export interface MenuCommandMenuIDOptions {
    menuID: number;
    scheduling?: Scheduling;
}
/**
 * @targetfolder objects/returnobjects
 */
export interface ExecuteAsModalOptions {
    /**
     * Name of the command. It will be shown in the progress bar if the operation takes a noticeable amount of time.
     * @minVersion 22.5
     */
    commandName: string;
    /**
     * An object literal that is passed as the second parameter of `targetFunction` following an [executeAsModal](../executeasmodal) call.
     * Cannot include functions.
     * @minVersion 22.5
     */
    descriptor?: object;
    /**
     * Optional mode where UI interactions are permissible within the executeAsModal state. Useful for allowing users to input
     * data into invoked dialogs or workspaces. See [Modal Execution](../executeasmodal).
     * @minVersion 23.3
     */
    interactive?: boolean;
}
/**
 * Options for the history state that [[Document.suspendHistory]] will create.
 * @optionobject
 * @targetfolder objects/options
 */
export interface HistoryStateInfo {
    /**
     * Name of the history state to be shown in History panel
     * @minVersion 23.0
     */
    name: string;
    /**
     * The target document's ID that will have its history suspended with suspendHistory.
     * @minVersion 23.0
     */
    documentID: number;
}
/**
 * This object is provided by the `suspendHistory` API when a document's history state is suspended, and is
 * needed to `resumeHistory`.
 * @targetfolder objects/returnobjects
 * @minVersion 23.0
 */
export interface HistorySuspension {
    /**
     * An identifier generated by Photoshop to identify the history suspension.
     * @minVersion 23.0
     */
    historySuspensionID: number;
}
/**
 * @optionobject
 * @targetfolder objects/options
 */
export interface ResumeHistorySuspensionOptions extends HistorySuspension {
    /**
     * The desired name of the resulting history state when successfully resumed and committed.
     * @minVersion 23.0
     */
    finalName?: string;
}
/**
 * This object is passed to the callback of `core.executeAsModal` for modality related APIs.
 * @optionobject
 * @targetfolder objects/options
 * @minVersion 23.0
 */
export interface ExecutionContext {
    /**
     * True if user has cancelled the modal interaction.
     *
     * User can cancel by hitting the Escape key, or by pressing the "Cancel" button in the progress bar.
     * @minVersion 23.0
     */
    isCancelled: boolean;
    /**
     * If assigned a method, it will be called when user cancels the modal interaction.
     * @minVersion 23.0
     */
    onCancel: undefined | ((e?: OnCancelCbArgument) => void);
    /**
     * Call this to customize the progress bar.
     * @minVersion 23.0
     */
    reportProgress: (params: ReportProgressOptions) => void;
    /**
     * Use the methods in here to control Photoshop state.
     * @minVersion 23.0
     */
    hostControl: {
        /**
         * Call to suspend history on a target document, returns the suspension ID which can be used for resumeHistory.
         * @minVersion 23.0
         */
        suspendHistory: (params: HistoryStateInfo) => Promise<HistorySuspension>;
        /**
         * Call to resume history on a target document.
         * commit (optional): if false, the current modified document state is dropped, and the document returns to
         * the state when `suspendHistory` was invoked.
         * @minVersion 23.0
         */
        resumeHistory: (params: ResumeHistorySuspensionOptions, commit?: boolean) => Promise<void>;
        /**
         * Register a document to be closed when the modal scope exits.
         * @param documentID
         */
        registerAutoCloseDocument: (documentID: number) => Promise<void>;
        /**
         * Unregister a document from being closed when the modal scope exits.
         * @param documentID
         */
        unregisterAutoCloseDocument: (documentID: number) => Promise<void>;
    };
}
export interface OnCancelCbArgument {
    reason: string;
}
/**
 * Object to be passed as an argument into `reportProgress()`
 *
 * @optionobject
 * @targetfolder objects/options
 */
export interface ReportProgressOptions {
    /**
     * Value in range [0,1] where 0 is 0% and 1 is 100%
     */
    value?: number;
    /**
     * Text shown in progress bar dialog. Usually explaining the current progress
     */
    commandName?: string;
}
export {};
