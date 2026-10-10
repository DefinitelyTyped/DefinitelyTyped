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
import { Dimensions, SimpleBounds } from "./types/GeneralTypes";
/** @ignore */
declare type NotificationListener = (eventName: string, descriptor: ActionDescriptor) => void;
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
}
/**
 * Return object.
 * @targetfolder objects/returnobjects
 * @minVersion 23.0
 */
export interface CPUInfo {
    /**
     * One of 'Intel', 'AMD', 'ARM', or 'Unknown'
     * @minVersion 23.0
     */
    vendor: string;
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
 * Return object.
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
 * Return object.
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
 * Return object.
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
 * @optionobject
 * @targetfolder objects/options
 * @minVersion 23.0
 */
export interface DisplayConfigurationOptions {
    /**
     * @minVersion 23.0
     */
    physicalResolution?: true;
}
/**
 * This object literal contains information about the properties of the connected display.
 *
 * Further discussion of the units may be found on [Display Units](../../media/displayunits)
 * Return object.
 * @targetfolder objects/returnobjects
 * @minVersion 23.0
 */
export interface DisplayConfiguration {
    /**
     * @minVersion 23.0
     */
    globalBounds: SimpleBounds;
    /**
     * @minVersion 23.0
     */
    globalWorkingBounds: SimpleBounds;
    /**
     * @minVersion 23.0
     */
    isPrimary: boolean;
    /**
     * @minVersion 26.5
     */
    maximumExtendedDynamicRangeColorComponent: number;
    /**
     * @minVersion 23.0
     */
    physicalResolution?: Dimensions;
    /**
     * @minVersion 23.0
     */
    scaleFactor: number;
    /**
     * @minVersion 26.3
     */
    screensHaveSeparateSpaces: boolean;
}
/**
 * Return object.
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
 * const {action} = require('photoshop');
 * ```
 *
 * @targetfolder media
 */
export declare namespace photoshopAction {
    /**
     * Performs a batchPlay call with the provided commands. Equivalent
     * to an `executeAction` in ExtendScript.
     * ```javascript
     * const target = { _ref: 'layer', _enum: 'ordinal', _value: 'targetEnum' };
     * const commands = [{ _obj: 'hide', _target: target }];
     * await action.batchPlay(commands);
     * ```
     * @minVersion 23.0
     */
    export function batchPlay(
        commands: ActionDescriptor[],
        options?: BatchPlayCommandOptions,
    ): Promise<Array<ActionDescriptor>>;
    /**
     * Performs a batchPlay call with the provided commands. Equivalent
     * to an `executeAction` in ExtendScript.
     * ```javascript
     * const target = { _ref: 'layer', _enum: 'ordinal', _value: 'targetEnum' };
     * const commands = [{ _obj: 'hide', _target: target }];
     * await action.batchPlay(commands);
     * ```
     * @minVersion 23.1
     */
    export function batchPlaySync(
        commands: ActionDescriptor[],
        options?: BatchPlayCommandOptions,
    ): Array<ActionDescriptor>;
    /**
     * Attach a callback function to one or more Photoshop events.
     * The callback has the form `(eventName: string, descriptor: ActionDescriptor) => void`.
     * ```javascript
     * await action.addNotificationListener(['open'], onOpenDocumentHandler);
     * ```
     * A [table of events is available](./eventcodes#action-events) or
     * the [introspection methods described under `batchPlay`](./batchplay) may be employed.
     *
     * @async
     * @minVersion 23.0
     */
    export function addNotificationListener(events: string[], callback: NotificationListener): Promise<void>;
    /**
     * Detaches a listener from a Photoshop event.
     * See [addNotificationListener](#addnotificationlistener)
     * ```javascript
     * await action.removeNotificationListener(['open'], onOpenNewDocument);
     * ```
     * @minVersion 23.0
     */
    export function removeNotificationListener(events: string[], listener: NotificationListener): Promise<void>;
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
    export function validateReference(ref: ActionReference | ActionReference[]): boolean;
    interface RecordActionOptions {
        /**
         * User visible string for the Actions panel.
         */
        name: string;
        /**
         * Name of top level JavaScript function callback.
         */
        methodName: string;
    }
    /**
     * Records this plugin's action to an active Action recording.
     * See [Action Recording](./action-recording/) for usage and manifest requirements.
     *
     * ```javascript
     * await action.recordAction({ name: 'My Command', methodName: 'actionHandler'}, {prop: value} );
     * ```
     * When the action is invoked, the following top level JavaScript function will be invoked:
     * ```javascript
     * async function actionHandler(executionContext, info) {
     *     let propValue = info['prop'];
     * }
     * ```
     * @param options
     * @param info Object with action specific information. See [Action Recording](./action-recording/).
     * @minVersion 25.0
     */
    export function recordAction(options: RecordActionOptions, info: ActionDescriptor): Promise<void>;
    /**
     * Return the identifier number assigned to an action string value.
     * If the string is not already registered, a new ID will be created and returned.
     * @minVersion 24.0
     */
    export function getIDFromString(value: string): number;
    export {};
}
/**
 * The `core` module allows access to specialized commands
 * within the application. Various application state properties can be
 * modified or queried here.
 *
 * Some of these commands can be considered experimental.  Some will be integrated
 * into the DOM at a later date. The use of which will then be easier, for example,
 * removing the need to specify the document ID as an argument.
 *
 * ```javascript
 * const {core} = require('photoshop');
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
     * Attach a listener to a Photoshop core event. A callback in the form
     * of `(eventName: string, descriptor: ActionDescriptor) => void` will be performed.
     *
     * A [table of events is available](./eventcodes#core-events).
     *
     * For example: using group '`UI`' and event '`userIdle`'
     *
     * - Invoked after the Photoshop user idles for a specified number of seconds. See [[setUserIdleTime]].
     * - Invoked a second time with the descriptor `{idleEnd: true}` if the user is no longer idle. This signal can
     * be used to finish up tasks being performed during the idle time.
     * ```javascript
     * await core.addNotificationListener('UI', ['userIdle'], onUserIdle);
     * ```
     * @minVersion 23.3
     * @async
     */
    function addNotificationListener(group: string, events: string[], callback: NotificationListener): Promise<void>;
    /**
     * Returns the effective size of a dialog.
     * ```javascript
     * const idealSize = { width: 200, height: 500 };
     * const { width, height } = await core.calculateDialogSize(idealSize);
     * ```
     * @minVersion 22.5
     * @async
     */
    function calculateDialogSize(
        preferredSize: {
            width: number;
            height: number;
        },
        identifier?: string,
        minimumSize?: {
            width: number;
            height: number;
        },
    ): Promise<{
        width: number;
        height: number;
    }>;
    /**
     * Given the (x,y) coordinates of a position in global (display) space, we convert to coordinates
     * with the origin based at the top left corner of the given panel.
     * A plugin can only make calls against panels that are defined in its manifest,
     * so the given `target` must be defined there.
     *
     * In the example manifest on the documentation page for
     * [UXP manifest v5](https://developer.adobe.com/photoshop/uxp/2022/guides/uxp_guide/uxp-misc/manifest-v5/),
     * the identifier is "panelName".
     *
     * Note: global coordinates differ between macOS and Windows. On macOS global coordinates are expressed as
     * points while on Windows the unit is pixels. See [[getDisplayConfiguration]] for more information
     * on global coordinates.
     *
     * ```javascript
     * const target = 'panelName';
     * const location = { x: 200, y: 500 };
     * const { x, y } = await core.convertGlobalToLocal(target, location);
     * ```
     *
     * @param target The `id` of the panel to use as the origin.
     * @param location Point coordinates in the form {x, y}.
     *
     * @minVersion 26.0
     * @async
     */
    function convertGlobalToLocal(target: string, location: {
        x: number;
        y: number;
    }): Promise<{
        x: number;
        y: number;
    }>;
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
     * Create a temporary duplicate document for background processing.  This document does not appear in the UI,
     * and there are limitations with some editing features.
     *
     * ```javascript
     * await core.createTemporaryDocument({ documentID: 123 });
     * ```
     *
     * @param options Object containing the id the document to duplicate under property `documentID`.
     * @minVersion 23.0
     */
    function createTemporaryDocument(options: {
        documentID: number;
    }): {
        documentID: number;
    };
    /**
     * Remove a temporary document.
     *
     * ```javascript
     * await core.deleteTemporaryDocument({ documentID: 146 });
     * ```
     * @param options Object containing key of `documentID` for the document to delete.
     * @minVersion 23.0
     */
    function deleteTemporaryDocument(options: {
        documentID: number;
    }): void;
    /**
     * End the current modal tool editing state.
     * ```javascript
     * // close the modal dialog, cancelling changes
     * await core.endModalToolState(false);
     * ```
     * @minVersion 22.5
     * @async
     */
    function endModalToolState(commit: boolean): Promise<void>;
    /**
     * ExecuteAsModal is needed when a plugin wants to make modifications to the Photoshop state.
     * This includes scenarios where the plugin wants to create or modify documents,
     * or the plugin wants to update UI or preference state.
     *
     * ExecuteAsModal is only available to plugin that is using apiVersion 2 or higher.
     *
     * See [Modal Execution](../executeasmodal) for details
     * @minVersion 22.5
     * @async
     */
    function executeAsModal(
        targetFunction: (executionContext: ExecutionContext, descriptor?: object) => Promise<any>,
        options: ExecuteAsModalOptions,
    ): Promise<void>;
    /**
     * Returns information about the active Photoshop tool.
     * ```javascript
     * const { title } = await core.getActiveTool();
     * ```
     * @minVersion 22.5
     * @async
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
     * const { logicalCores, frequencyMhz, vendor } = core.getCPUInfo();
     * const isAMD = vendor === 'AMD';
     * const isARM = vendor === 'ARM';
     * ```
     * @minVersion 23.1
     */
    function getCPUInfo(): CPUInfo;
    /**
     * Returns the current display configuration as an array with an entry for each display.
     *
     * Note: returned units differ by platform.
     *  - Mac uses logical units, points.
     *  - Windows uses physical units, pixels.
     * Further discussion of the units may be found on [Display Units](../../media/displayunits)
     *
     * ```javascript
     * core.getDisplayConfiguration({ physicalResolution: true });
     * ```
     *
     * @param options Additional properties to include, e.g., `physicalResolution`.
     * @minVersion 23.0
     */
    function getDisplayConfiguration(options?: DisplayConfigurationOptions): Promise<[DisplayConfiguration]>;
    /**
     * Returns OpenGL and OpenCL information about the available graphics processor.
     * ```javascript
     * const { gpuInfoList, clgpuInfoList } = core.getGPUInfo();
     * console.log(JSON.stringify(gpuInfoList));
     * // > [{"version":"2.1 ATI-4.5.14","memoryMB":8192,"name":"16915464", ...}]
     * console.log(JSON.stringify(clgpuInfoList));
     * // > [{"version":"OpenCL 1.2 ","memoryMB":8589,"name":"AMD Radeon Pro 580X Compute Engine", ...}]
     * ```
     * @minVersion 23.1
     */
    function getGPUInfo(): GPUInfo;
    /**
     * Returns a list of the layers contained by the specified layer group.
     *
     * ```javascript
     * await core.getLayerGroupContents({ documentID: 123, layerID: 9 });
     * ```
     * @minVersion 23.1
     */
    function getLayerGroupContents(options: {
        documentID: number;
        layerID: number;
    }): Promise<{
        list: LayerTreeInfo[];
    }>;
    /**
     * Returns a list of the layers contained by the specified layer group.
     *
     * ```javascript
     * core.getLayerGroupContentsSync({ documentID: 123, layerID: 9 });
     * ```
     * @minVersion 23.1
     */
    function getLayerGroupContentsSync(options: {
        documentID: number;
        layerID: number;
    }): {
        list: LayerTreeInfo[];
    };
    /**
     * Returns the full hierarchy of the layer stack in nested "lists".
     * ```javascript
     * await core.getLayerTree({ documentID: 123 });
     * ```
     *
     * @async
     * @param options Object containing key of `documentID` for the target document.
     * @minVersion 23.1
     */
    function getLayerTree(options: {
        documentID: number;
    }): Promise<{
        list: LayerTreeInfo[];
    }>;
    /**
     * Returns the full hierarchy of the layer stack in nested "lists".
     * ```javascript
     * core.getLayerTreeSync({ documentID: 123 });
     * ```
     *
     * @param options Object containing key of `documentID` for the target document.
     * @minVersion 23.1
     */
    function getLayerTreeSync(options: {
        documentID: number;
    }): {
        list: LayerTreeInfo[];
    };
    /**
     * Returns whether a command menu item is available for invoking.
     * ```javascript
     * // can a Fill be performed?
     * const canFill = await core.getMenuCommandState({ commandID: 1042 });
     * ```
     * @async
     * @minVersion 22.5
     */
    function getMenuCommandState(options: {
        commandID: number;
    }): Promise<boolean>;
    /**
     * Returns the localized menu title of the menu command item.
     * ```javascript
     * const renameLayerStr = await core.getMenuCommandTitle({ commandID: 2983 });
     * ```
     * @minVersion 22.5
     * @async
     */
    function getMenuCommandTitle(options: {
        commandID?: number;
        menuID?: number;
    }): Promise<string>;
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
     * await core.getPluginInfo();
     * ```
     * @minVersion 23.2
     * @async
     */
    function getPluginInfo(): Promise<ActionDescriptor>;
    /**
     * Return the current number of seconds for user idle time. See also: [[setUserIdleTime]]
     *
     * ```javascript
     * await core.getUserIdleTime();
     * ```
     * @minVersion 23.3
     */
    function getUserIdleTime(): Promise<void>;
    /**
     * Returns true if the history is in a suspended state.  See [[Document.suspendHistory]].
     * ```javascript
     * await core.historySuspended( {documentID: 123} );
     * ```
     *
     * @param options Object containing key of `documentID` for the target document.
     * @minVersion 23.1
     */
    function historySuspended(options: {
        documentID: number;
    }): Promise<boolean>;
    /**
     * Returns true if the plugin is currently in a modal state using [[executeAsModal]].
     * @minVersion 23.1
     */
    function isModal(): boolean;
    /**
     * Invokes the menu command via its `commandID`. Returns false
     * on failure, or if the command is not available.
     * Record Action Notifications via the Plugins > Development menu can be used to capture the command IDs.
     * ```javascript
     * // menu item Select > All
     * await core.performMenuCommand({ commandID: 1017 });
     * ```
     * @minVersion 22.5
     * @param options Object containing key of `commandID` for the menu item.
     * @async
     */
    function performMenuCommand(options: {
        commandID: number;
    }): Promise<boolean>;
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
     * await core.redrawDocument({ documentID: 123 });
     * ```
     * @minVersion 24.1
     * @async
     */
    function redrawDocument(options: {
        documentID: number;
    }): Promise<number>;
    /**
     * Detaches a listener from a Photoshop event.
     * See [addNotificationListener](#addnotificationlistener)
     * ```javascript
     * await core.addNotificationListener('UI', ['userIdle'], onUserIdle);
     * ```
     *
     * @param group Notification group.
     * @param events Array of event names.
     * @param callback The Notification Listener to change.
     * @minVersion 23.0
     */
    function removeNotificationListener(group: string, events: string[], listener: NotificationListener): Promise<void>;
    /**
     * The execution mode can be used while debugging a plugin. It is only available
     * when the developer mode is enabled.
     *
     * The following example illustrate how to enable stacktraces for batchPlay commands
     * that fail. When stacktraces are enabled, then an error result descriptor from a
     * batchPlay request will include a stacktrace property. The property can be used when
     * reporting bugs to Adobe.
     * ```javascript
     * await core.setExecutionMode({ enableErrorStacktraces: true });
     * ```
     * The following illustrates how to enable console warnings when a promise is rejected:
     * ```javascript
     * await core.setExecutionMode({ logRejections: true });
     * ```
     * @minVersion 23.2
     * @async
     */
    function setExecutionMode(options: {
        enableErrorStacktraces?: boolean;
        logRejections?: boolean;
    }): Promise<void>;
    /**
     * Specifies the number of seconds a user must be idle on Photoshop before invoking the
     * userIdle event handler defined with [[addNotificationListener]]. An idleTime of 0
     * turns off idle notifications.
     *
     * ```javascript
     * await core.setUserIdleTime(3);
     * ```
     *
     * @async
     * @minVersion 23.3
     */
    function setUserIdleTime(idleTime: number): Promise<void>;
    /**
     * Show a generic alert box to the user. 'OK' to dismiss.
     * ```javascript
     * // script has completed.
     * await core.showAlert({ message: 'Operation successful' });
     * ```
     *
     * @async
     * @minVersion 22.5
     */
    function showAlert(options: {
        message: string;
    }): Promise<void>;
    /**
     * The "resize gripper", a small square in the botton-right corner of a panel, may be hidden
     * by this function. This square will appear above the contents the panel itself including
     * scrollbars. While many panels over the years have simply left space at the bottom to
     * accomodate the gripper, this option removes it.
     *
     * ```javascript
     * await core.suppressResizeGripper({ type: 'panel', target: 'panel's ID', value: true });
     * ```
     *
     * The value for `target` above will be the id attached to the panel's entry under `entrypoints` in the plugin manifest.
     *
     * @param options Object containing type, target, and value.
     * @minVersion 23.1
     */
    function suppressResizeGripper(options: any): Promise<void>;
    /**
     * Given a Photoshop ZString (of format `"$$$/slash/separated/key=english default value"`),
     * will return the translated string for the current UI language
     * @minVersion 22.5
     */
    function translateUIString(zstring: string): string;
}
/**
 * Return object.
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
    /**
     * If an existing modal state is encountered at execution, this request will retry until this duration of seconds has passed.
     * @minVersion 25.10
     */
    timeOut?: number;
}
/**
 * Options for the history state that [[Document.suspendHistory]] will create.
 * @optionobject
 * @targetfolder objects/options
 */
export interface HistoryStateInfo {
    /**
     * Name of the history state to be shown in the History panel.
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
 * Return object.
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
    onCancel: void;
    /**
     * Call this to customize the progress bar.
     * @minVersion 23.0
     */
    reportProgress: void;
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
    };
}
export {};
