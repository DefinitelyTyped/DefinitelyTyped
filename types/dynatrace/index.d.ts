// Type definitions for dynatrace 1.0
// Project: https://www.dynatrace.com/, https://github.com/npm/deprecate-holder
// Definitions by: Alvaro Cruz <https://github.com/alvaro450>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

interface dynaTrace {
    /**
     * @description disable automatic detection
     * Use in conjuction with enterAction
     * @example
     *     dynaTrace.setAutomaticActionDetection(false);
     *     dynaTrace.enterAction('action message', 'select', null, null);
     */
    setAutomaticActionDetection(on: boolean): void;
    /**
     * @description capture load event manually.
     * followed by a signalLoadEnd to complete the capture.
     */
    setLoadEndManually(): void;
    /**
     * @description Signal load start. If load start can be determined more accurately
     * than the automatic detection, this function can be used.
     */
    signalLoadStart(): void;
    /**
     * @description Signals that the page has finished loading
     */
    signalLoadEnd(): void;
    /**
     * @description Force signal sending to make certain that actions aren't lost.
     * @param forceSync - Force synchronous sending of signal (if false, it'll be sent asynchronously)
     * @param sendPreview - Force sending of preview signals which haven't been closed yet.
     * @param killUnfinished - Kills unfinished actions and sends them immediately. Handle with care, actions might be inaccurate.
     */
    sendSignal(
        forceSync: boolean,
        sendPreview: boolean,
        killUnfinished: boolean
    ): void;
    /**
     * @description parentAction: optional id of parent action.
     *     - if parameter is not passed => appended to currently running action
     *     - if a number is passed => action is added as subaction to action with given id
     *     - if false => new root action is started.
     * The function returns an internal tracking object that represents the action that was started.
     * This tracking object must be passed to dynaTrace.leaveAction().
     * @param name - name of the action
     * @param type
     * @param startTime - time in milliseconds. if null, current time is used.
     * @param parentAction optional id of parent action. if parameter is not passed=> appended to
     *  currently running action, if false => root action, if a number is passed, action is added
     *  as subaction to action with given id.
     * @returns id of created action
     */
    enterAction(
        name: string,
        type: string,
        time?: number,
        parentAction?: number | boolean
    ): number;
    /**
     * @description stops the action that is represented by the given tracking object.
     * @param actionId - id of action to leave. must be the value returned by enterAction
     * @param time - end time in milliseconds
     * @param startTime - optional start time in milliseconds (necessary if start time should be modified)
     */
    leaveAction(actionId: number, time?: number, startTime?: number): void;
    /**
     * @description Reports an error message
     * @param parentAction - parent action id. if not passed or null, error is added to current action
     */
    reportError(error: string | Error, parentAction?: number): void;
    /**
     * @description Reports a warning message
     * @param parentAction - parent action id. if not passed or null, error is added to current action
     */
    reportWarning(warning: string, parentAction?: number): void;
    /**
     * @description Reports an event
     * @param parentAction - parent action id. if not passed or null, error is added to current action
     */
    reportEvent(msg: string, parentAction?: number): void;
    /**
     * @description Reports a key value pair to the server. The data can e.g. be used to create charts.
     */
    reportValue(key: string, value: number): void;
    /**
     * @description Reports a key value pair to the server. The data can e.g. be used to create charts.
     * The difference to the reportValue function is that here the value is a string.
     */
    reportString(key: string, value: string): void;
    /**
     * @description The JavaScript ADK enables you to tag your visits with any value you want.
     * Use tagVisit(visitName) to tag the current visit with the specified value
     */
    tagVisit(visitName: string): void;
    /**
     * @description Indicates start of a third party resource
     * @param type - i = image, s = script, c = custom
     */
    startThirdParty(type: "i" | "s" | "c", url: string): void;
    /**
     * @description Indicates stop of a third party resource
     * @param url - Complete URL of resource (must match URL provided in startThirdParty).
     * @param success - True if the resource was loaded successfully, false if not.
     * @param start - Absolute start time in milliseconds. When parameter is not passed or <= 0,
     *     time of startThirdParty call is used.
     * @param stop - Absolute stop time in milliseconds. When parameter is not passed or <= 0,
     *     time of stopThirdParty call is used.
     */
    stopThirdParty(
        url: string,
        success: boolean,
        start?: number,
        stop?: number
    ): void;
    /**
     * @description Adds a listener that is called when the user is leaving the page,
     * but before the monitor signal is sent
     * @param listener A function that will be called in case the user leaves the page.
     */
    addPageLeavingListener(listener: (key: string) => {}): void;
    /**
     * @description Sends a Streaming Node to the Server
     * @param source - URL of the streaming resource
     * @param duration - duration of the streaming resource in seconds
     * @param userTriggered - did the user trigger the playback or did it start automatically?
     * @param watchedCompletely - did the streaming resource play to the end?
     * @param maxPlayTime - maximum progress this streaming resource had in seconds
     * @param playTime - the time this streaming resource was playing in seconds
     * @param bufferingCount - amount of bufferings that occured during the playback
     * @param bufferingTime - total time spent with buffering in seconds
     * @param type - action type of the streaming node. Is used for classifying events
     *     on the serverside, e.g. _info_, _warn_, _error_
     */
    addStreamingNode(
        source: string,
        duration: number,
        userTriggered: boolean,
        watchedCompletely: boolean,
        maxPlayTime: number,
        playTime: number,
        bufferingCount: number,
        bufferingTime: number,
        type: "_info_" | "_warn_" | "_error_"
    ): void;
    /**
     * @description Indicates the start of a user input. User inputs must always
     * be stopped by calling endUserInput. If an xhr call or a page load happens
     *  it is checked if a user input is active. If yes, the user input is set to
     * have triggered the page action.
     * @param domNode - Which triggered the action (button, etc) is used for determining its caption
     * @param type - Type of the user input: 'click', 'keypress', 'scroll',...
     * @param addInfo - Additional info for user input such as key, mouse button, etc ('F5', 'RETURN',...)
     * @param validTime - How long should the user input be able to open actions? default is 30ms
     */
    beginUserInput(
        domNode: any,
        type: string,
        addInfo: string,
        validTime: number
    ): any;
    /**
     * @description the user input object returned by beginUserInput
     */
    endUserInput(userInputObject: any): void;
    /**
     * @description Initiate ajax action. Must be closed by leaveXhrAction afterwards.
     * @param type Additional info about type of xhr (eg. framework name,etc)
     * @param mode - The action mode: 0 .. just extend running ajax actions 1 .. extend any running action 2 ..
     * extend any running action - visible subaction 3 .. start action if user input is present
     * @param webSocket - Indicates if this action is a webSocket action or not
     * @returns id of action
     */
    enterXhrAction(type: string, mode: number, webSocket: boolean): number;
    /**
     * @description Indicates the end of an xhr action. Must be started by leaveXhrAction beforehand.
     * @param id -  id of action (must be the value returned by enterXhrAction)
     */
    leaveXhrAction(id: number): void;
    /**
     * @description Indicates that an xhr callback is active (eg. XMLHttpRequest onreadystatechange).
     * This is necessary to automatically add actions started during a callback as subactions.
     * Xhr callback must be stopped by leaveXhrCallback.
     * @param actionId - id of action where callback belongs to
     */
    enterXhrCallback(actionId: number): void;
    /**
     * @description Indicates the end of an xhr callback. Must be called after enterXhrCallback.
     * @param actionId - id of action where callback belongs to
     */
    leaveXhrCallback(actionId: number): void;
    /**
     * @description Indicates the start of a load action. Frameworks often have their own load callback functions.
     * This can be used when framework starts load before "DOMContentLoaded".
     */
    signalOnLoadStart(): void;
    /**
     * @description Tells the JavaScript agent to wait for an additional call of signalOnLoadEnd.
     * When the last call of signalOnLoadEnd is performed the "onload" action is closed.
     *  Note: if this function is called, signalOnLoadEnd MUST be called afterwards to indicated the end of one load.
     * Otherwise there will be unexpected action behaviour.
     */
    incrementOnLoadEndMarkers(): void;
    /**
     * @description Indicates the end of a load action. needs incrementOnLoadEndMarkers to be called before.
     *  As soon as the last signalOnLoadEnd is called, the "onload" action is closed.
     */
    signalOnLoadEnd(): void;
    /**
     * @description By default a visit ends after a configurable inactivity time (default is 30 min.).
     * Using the ADK, a visit can be ended forcibly, for example when a user logs out from an application.
     * Simply call dynaTrace.endVisit() and the visit ends without waiting for the inactivity time.
     * For correlation purposes the visit shows as active in the client for about three minutes,
     *  but actions sent after dynaTrace.endVisit() are added to a new visit.
     * End the current UEM visit. This is useful for "logout" buttons, so that,
     * when the user logs out, the user's visit can also be closed by calling this method.
     */
    endVisit(): void;
    /**
     * @description Set the application version for this visit.
     * This will be read on the server side and included as part of each visit for easy splitting.
     * @param appVersion - The version string to be set.
     */
    setAppVersion(appVersion: string): void;
    /**
     * @description Set meta-data for the page via a key/value pair.
     * @param key - The readable key for the value
     * @param value - The value to associate with the identifier
     */
    setMetaData(key: string, value: string): void;
}

declare let dynaTrace: dynaTrace;
