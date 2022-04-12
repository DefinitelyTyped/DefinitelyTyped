import { ColorDescriptor, ColorConversionModel } from "../util/colorTypes";
/** @ignore */
declare type NotificationListener = (name: string, descriptor: ActionDescriptor) => void;
export interface ActionDescriptor {
    _obj: string;
    [prop: string]: any;
}
interface Scheduling {
    playLevel?: number;
    eventLevel?: number;
    timeOut?: number;
}
export interface BatchPlayCommandOptions {
    commandEnablement?: "normal" | "never" | "always";
    dialogOptions?: "silent" | "dontDisplay" | "display";
    propagateErrorToDefaultHandler?: boolean;
    historyStateInfo?: {
        name: string;
        target: object;
    };
    synchronousExecution?: boolean;
    modalBehavior?: "wait" | "execute" | "fail";
    useMultiGet?: boolean;
    suppressPlayLevelIncrease?: boolean;
}
export declare type CPUVendorKind = "Intel" | "AMD" | "ARM" | "Unknown";
export interface CPUInfo {
    vendor: CPUVendorKind;
    physicalCores: number;
    logicalCores: number;
    frequencyMhz: number;
    emulationMode?: "rosetta2";
}
export interface OpenGLDeviceInfo {
    version: string;
    memoryMB: number;
    name: string;
    driverVersion: string;
    vendor: string;
    isIntegrated: string;
    glDriver: string;
}
export interface OpenCLDeviceInfo {
    version: string;
    memoryMB: number;
    name: string;
    driverVersion: string;
    vendor: string;
    isIntegrated: string;
    oclBandwidth: number;
    oclCompute: number;
    clDeviceVersion: string;
    clPlatformVersion: string;
}
export interface GPUInfo {
    gpuInfoList?: OpenGLDeviceInfo[];
    clgpuInfoList?: OpenCLDeviceInfo[];
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
     */
    function batchPlay(commands: ActionDescriptor[], options?: BatchPlayCommandOptions): Promise<Array<ActionDescriptor>>;
    /**
     * Performs a batchPlay call with the provided commands. Equivalent
     * to an `executeAction` in ExtendScript.
     * ```javascript
     * var target = { _ref: 'layer', _enum: 'ordinal', _value: 'targetEnum'}
     * var commands = [{ _obj: 'hide', _target: target }]
     * await PhotoshopAction.batchPlay(commands)
     * ```
     */
    function batchPlaySync(commands: ActionDescriptor[], options?: BatchPlayCommandOptions): Array<ActionDescriptor>;
    /**
     * Attach a listener to a Photoshop event. A callback in the form
     * of `(eventName: string, descriptor: Descriptor) => void` will be performed.
     * ```javascript
     * await PhotoshopAction.addNotificationListener(['open'], onOpenNewDocument)
     * ```
     */
    function addNotificationListener(events: string[], notifier: NotificationListener): Promise<void>;
    /**
     * Detaches a listener from a Photoshop event.
     * @see addNotificationListener
     * ```javascript
     * await PhotoshopAction.removeNotificationListener(['open'], onOpenNewDocument)
     * ```
     */
    function removeNotificationListener(events: string[], notifier: NotificationListener): Promise<void>;
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
     */
    let apiVersion: number;
    /**
     *  Returns true if the plugin is currently in a modal state using [[executeAsModal]]
     */
    function isModal(): boolean;
    /**
     * Given a Photoshop ZString (of format `"$$$/slash/separated/key=english default value"`),
     * will return the translated string for the current UI language
     */
    function translateUIString(zstring: string): string;
    /**
     * Invokes the menu command via its `commandID`. Returns false
     * on failure, or if the command is not available.
     * ```javascript
     * // select all
     * await PhotoshopCore.performMenuCommand({ commandID: 1017 })
     * ```
     */
    function performMenuCommand(options: {
        commandID: number;
        scheduling?: Scheduling;
    }): Promise<boolean>;
    /**
     * Returns whether a command menu item is available for invoking.
     * ```javascript
     * // can a Fill be performed?
     * var canFill = await PhotoshopCore.getMenuCommandState({ commandID: 1042 })
     * ```
     */
    function getMenuCommandState(options: {
        commandID: number;
        scheduling?: Scheduling;
    }): Promise<boolean>;
    /**
     * Returns the localized menu title of the menu command item.
     * ```javascript
     * var renameLayerStr = await PhotoshopCore.getMenuCommandTitle({ commandID: 2983 })
     * ```
     */
    function getMenuCommandTitle(options: {
        commandID?: number;
        menuID?: number;
        scheduling?: Scheduling;
    }): Promise<string>;
    /**
     * Returns information about the active Photoshop tool.
     * ```javascript
     * { title } = await PhotoshopCore.getActiveTool()
     * ```
     */
    function getActiveTool(): Promise<{
        title: string;
        isModal: boolean;
        key: string;
        classID: string;
    }>;
    /**
     * Returns information about the host CPU.
     * ```javascript
     * { logicalCores, frequencyMhz, vendor } = PhotoshopCore.getCPUInfo()
     * var isAMD = vendor === "AMD"
     * var isARM = vendor === "ARM"
     * ```
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
     */
    function getGPUInfo(): GPUInfo;
    /**
     * End the current modal tool editing state.
     * ```javascript
     * // close the modal dialog, cancelling changes
     * await PhotoshopCore.endModalToolState(false)
     * ```
     */
    function endModalToolState(commit: boolean): Promise<void>;
    /**
     * Show a generic alert box to the user. 'OK' to dismiss.
     * ```javascript
     * // script has completed.
     * await PhotoshopCore.showAlert({ message: 'Operation successful'})
     * ```
     */
    function showAlert(options: {
        message: string;
    }): Promise<void>;
    /**
     * Returns the effective size of a dialog.
     * ```javascript
     * var idealSize = { width: 200, height: 500 }
     * { width, height} = await PhotoshopCore.calculateDialogSize(idealSize)
     * ```
     */
    function calculateDialogSize(preferredSize: {
        width: number;
        height: number;
    }, identifier?: string, minimumSize?: {
        width: number;
        height: number;
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
     */
    function executeAsModal(targetFunction: (executionContext: ExecutionContext) => Promise<any>, options: ExecuteAsModalOptions): Promise<void>;
    /**
     * Converts the given color (in descriptor form) to the
     * given color space, returning the color descriptor.
     *
     * This is an internal API that is used for [[SolidColor]]
     * and all the other color classes.
     *
     * Currently, this API uses the application color settings
     * for conversion (Edit > Color Settings...). '
     * In the future, we will provide color conversion
     * based on embedded color profiles.
     */
    function convertColor(sourceColor: ColorDescriptor, targetModel: ColorConversionModel): ColorDescriptor;
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
     */
    function setExecutionMode(options: {
        enableErrorStacktraces?: boolean;
        logRejections?: boolean;
    }): Promise<void>;
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
     */
    function getPluginInfo(): Promise<ActionDescriptor>;
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
     */
    function addNotificationListener(group: string, events: string[], notifier: NotificationListener): Promise<void>;
    /**
     * Specifies the number of seconds a user must be idle on Photoshop before invoking the
     * userIdle event handler defined with [[addNotificationListener]]. An idleTime of 0
     * turns off idle notifications.
     *
     * ```javascript
     * await PhotoshopCore.setUserIdleTIme(3)
     * ```
     */
    function setUserIdleTime(idleTime: number): Promise<void>;
}
export interface ExecuteAsModalOptions {
    /**
     * Name of the command, it will be used in the progress bar if the operation takes a noticeable amount of time
     */
    commandName: string;
}
/**
 * Options for the history state that [[Document.suspendHistory]] will create
 */
export interface HistoryStateInfo {
    /**
     * Name of the history state to be shown in History panel
     */
    name: string;
    /**
     * A single document reference in an array with `_id` of the document whose history will be suspended
     */
    target: [{
        _ref: "document";
        _id: number;
    }];
}
/**
 * This object is passed to the callback of `core.executeAsModal` for modality related APIs
 */
export interface ExecutionContext {
    /**
     * True if user has cancelled the modal interaction.
     *
     * User can cancel by hitting the Escape key, or by pressing the "Cancel" button in the progress bar.
     */
    isCancelled: boolean;
    /**
     * If assigned a method, it will be called when user cancels the modal interaction.
     */
    onCancel: void;
    /**
     * Call this to customize the progress bar.
     */
    reportProgress: void;
    /**
     * Use the methods in here to control Photoshop state
     */
    hostControl: {
        /**
         * Call to suspend history on a target document, returns the suspension ID which can be used for resumeHistory
         */
        suspendHistory: (info: {
            historyStateInfo: HistoryStateInfo;
        }) => Promise<number>;
        /**
         * Call to resume history on a target document
         */
        resumeHistory: (suspensionID: number) => void;
    };
}
export {};
