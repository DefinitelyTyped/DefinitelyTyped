import { CrashedEvent } from './application';
import { WindowEvent, BaseEventMap } from './base';
import { WindowOptionDiff, WindowOption } from '../window/windowOption';
import { WebContentsEventMapping, WindowResourceLoadFailedEvent, WindowResourceResponseReceivedEvent } from './webcontents';
import { PropagatedViewEventMapping, InputEvent } from './view';
import { Identity } from '../../main';
export declare type SpecificWindowEvent<Type> = WindowEvent<'window', Type>;
export interface WindowAlertRequestedEvent<Topic, Type> extends WindowEvent<Topic, Type> {
    message: string;
    url: string;
}
export interface WindowAuthRequestedEvent<Topic, Type> extends WindowEvent<Topic, Type> {
    authInfo: {
        host: string;
        isProxy: boolean;
        port: number;
        realm: string;
        scheme: string;
    };
}
export interface WindowEndLoadEvent<Topic, Type> extends WindowEvent<Topic, Type> {
    documentName: string;
    isMain: boolean;
}
export interface WindowNavigationRejectedEvent<Topic, Type> extends WindowEvent<Topic, Type> {
    sourceName?: string;
    url: string;
}
export interface WindowReloadedEvent<Topic, Type> extends WindowEvent<Topic, Type> {
    url: string;
}
export interface WindowOptionsChangedEvent<Topic, Type> extends WindowEvent<Topic, Type> {
    options: WindowOption;
    diff: WindowOptionDiff;
}
export interface WindowExternalProcessExitedEvent<Topic, Type> extends WindowEvent<Topic, Type> {
    processUuid: string;
    exitCode: number;
}
export interface WindowExternalProcessStartedEvent<Topic, Type> extends WindowEvent<Topic, Type> {
    processUuid: string;
}
export interface WindowHiddenEvent<Topic, Type> extends WindowEvent<Topic, Type> {
    reason: 'closing' | 'hide' | 'hide-on-close';
}
export interface PreloadScriptInfoRunning {
    state: 'load-started' | 'load-failed' | 'load-succeeded' | 'failed' | 'succeeded';
}
export interface PreloadScriptInfo {
    state: 'load-failed' | 'failed' | 'succeeded';
}
export interface WindowPreloadScriptsStateChangeEvent<Topic, Type> extends WindowEvent<Topic, Type> {
    preloadScripts: (PreloadScriptInfoRunning & any)[];
}
export interface WindowPreloadScriptsStateChangedEvent<Topic, Type> extends WindowEvent<Topic, Type> {
    preloadScripts: (PreloadScriptInfoRunning & any)[];
}
export interface WindowBeginBoundsChangingEvent<Topic, Type> extends WindowEvent<Topic, Type> {
    height: number;
    left: number;
    top: number;
    width: number;
    windowState: 'minimized' | 'normal' | 'maximized';
}
export interface WindowEndBoundsChangingEvent<Topic, Type> extends WindowEvent<Topic, Type> {
    height: number;
    left: number;
    top: number;
    width: number;
    windowState: 'minimized' | 'normal' | 'maximized';
}
export interface WindowBoundsChange<Topic, Type> extends WindowEvent<Topic, Type> {
    changeType: 0 | 1 | 2;
    deferred: boolean;
    height: number;
    left: number;
    top: number;
    width: number;
}
export interface WillMoveOrResize<Topic, Type> extends WindowEvent<Topic, Type> {
    height: number;
    left: number;
    top: number;
    width: number;
    monitorScaleFactor: number;
}
export interface WindowGroupChanged<Topic, Type> extends WindowEvent<Topic, Type> {
    memberOf: 'source' | 'target' | 'nothing';
    reason: 'leave' | 'join' | 'merge' | 'disband';
    sourceGroup: {
        appUuid: string;
        windowName: string;
    }[];
    sourceWindowAppUuid: string;
    sourceWindowName: string;
    targetGroup: {
        appUuid: string;
        windowName: string;
    }[];
    targetWindowAppUuid: string;
    targetWindowName: string;
}
export declare type WindowPerformanceReport<Topic, Type> = Performance & WindowEvent<Topic, Type>;
export interface ViewDetached<Topic, Type> extends WindowEvent<Topic, Type> {
    previousTarget: Identity;
    target: Identity;
    viewIdentity: Identity;
}
export interface WindowEventMapping<Topic = string, Type = string> extends WebContentsEventMapping {
    'auth-requested': WindowAuthRequestedEvent<Topic, Type>;
    'begin-user-bounds-changing': WindowBeginBoundsChangingEvent<Topic, Type>;
    'bounds-changed': WindowBoundsChange<Topic, Type>;
    'bounds-changing': WindowBoundsChange<Topic, Type>;
    'close-requested': WindowEvent<Topic, Type>;
    'closed': WindowEvent<Topic, Type>;
    'closing': WindowEvent<Topic, Type>;
    'disabled-movement-bounds-changed': WindowBoundsChange<Topic, Type>;
    'disabled-movement-bounds-changing': WindowBoundsChange<Topic, Type>;
    'embedded': WindowEvent<Topic, Type>;
    'end-user-bounds-changing': WindowEndBoundsChangingEvent<Topic, Type>;
    'external-process-exited': WindowExternalProcessExitedEvent<Topic, Type>;
    'external-process-started': WindowExternalProcessStartedEvent<Topic, Type>;
    'group-changed': WindowGroupChanged<Topic, Type>;
    'hidden': WindowHiddenEvent<Topic, Type>;
    'hotkey': InputEvent & WindowEvent<Topic, Type>;
    'initialized': WindowEvent<Topic, Type>;
    'layout-initialized': WindowEvent<Topic, Type>;
    'layout-ready': WindowEvent<Topic, Type>;
    'maximized': WindowEvent<Topic, Type>;
    'minimized': WindowEvent<Topic, Type>;
    'options-changed': WindowOptionsChangedEvent<Topic, Type>;
    'performance-report': WindowPerformanceReport<Topic, Type>;
    'preload-scripts-state-changed': WindowPreloadScriptsStateChangeEvent<Topic, Type>;
    'preload-scripts-state-changing': WindowPreloadScriptsStateChangeEvent<Topic, Type>;
    'reloaded': WindowReloadedEvent<Topic, Type>;
    'restored': WindowEvent<Topic, Type>;
    'show-requested': WindowEvent<Topic, Type>;
    'shown': WindowEvent<Topic, Type>;
    'user-movement-disabled': WindowEvent<Topic, Type>;
    'user-movement-enabled': WindowEvent<Topic, Type>;
    'view-attached': WindowEvent<Topic, Type>;
    'view-detached': ViewDetached<Topic, Type>;
    'will-move': WillMoveOrResize<Topic, Type>;
    'will-resize': WillMoveOrResize<Topic, Type>;
}
export interface PropagatedWindowEventMapping<Topic = string, Type = string> extends BaseEventMap {
    'window-begin-user-bounds-changing': WindowBeginBoundsChangingEvent<Topic, Type>;
    'window-blurred': WindowEvent<Topic, Type>;
    'window-bounds-changed': WindowBoundsChange<Topic, Type>;
    'window-bounds-changing': WindowBoundsChange<Topic, Type>;
    'window-closed': WindowEvent<Topic, Type>;
    'window-closing': WindowEvent<Topic, Type>;
    'window-crashed': CrashedEvent & WindowEvent<Topic, Type>;
    'window-disabled-movement-bounds-changed': WindowBoundsChange<Topic, Type>;
    'window-disabled-movement-bounds-changing': WindowBoundsChange<Topic, Type>;
    'window-embedded': WindowEvent<Topic, Type>;
    'window-end-user-bounds-changing': WindowBeginBoundsChangingEvent<Topic, Type>;
    'window-external-process-exited': WindowExternalProcessExitedEvent<Topic, Type>;
    'window-external-process-started': WindowExternalProcessStartedEvent<Topic, Type>;
    'window-focused': WindowEvent<Topic, Type>;
    'window-group-changed': WindowGroupChanged<Topic, Type>;
    'window-hidden': WindowHiddenEvent<Topic, Type>;
    'window-hotkey': InputEvent & WindowEvent<Topic, Type>;
    'window-initialized': WindowEvent<Topic, Type>;
    'window-layout-initialized': WindowEvent<Topic, Type>;
    'window-layout-ready': WindowEvent<Topic, Type>;
    'window-maximized': WindowEvent<Topic, Type>;
    'window-minimized': WindowEvent<Topic, Type>;
    'window-navigation-rejected': WindowNavigationRejectedEvent<Topic, Type>;
    'window-options-changed': WindowOptionsChangedEvent<Topic, Type>;
    'window-performance-report': WindowPerformanceReport<Topic, Type>;
    'window-preload-scripts-state-changed': WindowPreloadScriptsStateChangeEvent<Topic, Type>;
    'window-preload-scripts-state-changing': WindowPreloadScriptsStateChangedEvent<Topic, Type>;
    'window-resource-load-failed': WindowResourceLoadFailedEvent<Topic, Type>;
    'window-resource-response-received': WindowResourceResponseReceivedEvent<Topic, Type>;
    'window-reloaded': WindowReloadedEvent<Topic, Type>;
    'window-restored': WindowEvent<Topic, Type>;
    'window-shown': WindowEvent<Topic, Type>;
    'window-user-movement-disabled': WindowEvent<Topic, Type>;
    'window-user-movement-enabled': WindowEvent<Topic, Type>;
    'window-will-move': WillMoveOrResize<Topic, Type>;
    'window-will-resize': WillMoveOrResize<Topic, Type>;
}
export declare type WindowEvents = PropagatedViewEventMapping<'window'> & {
    [Type in keyof WindowEventMapping]: WindowEventMapping<'window', Type>[Type];
};
export declare type PropagatedWindowEvents<Topic> = {
    [Type in keyof PropagatedWindowEventMapping]: PropagatedWindowEventMapping<Topic, Type>[Type];
};
