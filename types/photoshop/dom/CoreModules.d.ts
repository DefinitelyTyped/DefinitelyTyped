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
    propagateErrorToDefaultHandler?: boolean;
    historyStateInfo?: {
        name: string;
        target: object;
    };
    modalBehavior?: "wait" | "execute" | "fail";
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
     * This includes scenarios where the plugin wants to create or modify documents, or the plugin wants to update UI or preference state.
     *
     * ExecuteAsModal is only available to plugin that is using apiVersion 2 or higher.
     *
     * See [Modal Execution](../executeAsModal) for details
     */
    function executeAsModal(targetFunction: (executionContext: ExecutionContext) => Promise<any>, options: ExecuteAsModalOptions): Promise<void>;
}
export interface ExecuteAsModalOptions {
    /**
     * Name of the command, it will be used in the progress bar if the operation takes a noticeable amount of time
     */
    commandName: string;
}
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
         * Call to suspend history on a target document
         */
        suspendHistory: void;
        /**
         * Call to resume history on a target document
         */
        resumeHistory: void;
    };
}
export {};
