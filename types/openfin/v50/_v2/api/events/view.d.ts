import { WebContentsEventMapping, WindowResourceLoadFailedEvent, WindowResourceResponseReceivedEvent } from './webcontents';
import { WindowEvent, BaseEventMap } from './base';
import { WindowNavigationRejectedEvent } from './window';
import { CrashedEvent } from './application';
import { Identity } from '../../main';
export interface ViewEventMapping<Topic = string, Type = string> extends WebContentsEventMapping {
    'attached': WindowEvent<Topic, Type>;
    'created': WindowEvent<Topic, Type>;
    'destroyed': WindowEvent<Topic, Type>;
    'focused': WindowEvent<Topic, Type>;
    'hidden': WindowEvent<Topic, Type>;
    'hotkey': InputEvent & WindowEvent<Topic, Type>;
    'shown': WindowEvent<Topic, Type>;
    'target-changed': TargetChangedEvent<Topic, Type>;
}
export interface PropagatedViewEventMapping<Topic = string, Type = string> extends BaseEventMap {
    'view-crashed': CrashedEvent & WindowEvent<Topic, Type>;
    'view-created': CrashedEvent & WindowEvent<Topic, Type>;
    'view-destroyed': WindowEvent<Topic, Type>;
    'view-did-change-theme-color': WindowEvent<Topic, Type>;
    'view-focused': WindowEvent<Topic, Type>;
    'view-hidden': WindowEvent<Topic, Type>;
    'view-hotkey': InputEvent & WindowEvent<Topic, Type>;
    'view-navigation-rejected': WindowNavigationRejectedEvent<Topic, Type>;
    'view-page-favicon-updated': WindowEvent<Topic, Type>;
    'view-page-title-updated': WindowEvent<Topic, Type>;
    'view-resource-load-failed': WindowResourceLoadFailedEvent<Topic, Type>;
    'view-resource-response-received': WindowResourceResponseReceivedEvent<Topic, Type>;
    'view-shown': WindowEvent<Topic, Type>;
    'view-target-changed': TargetChangedEvent<Topic, Type>;
}
export declare type ViewEvents = {
    [Type in keyof ViewEventMapping]: ViewEventMapping<'view', Type>[Type];
};
export declare type PropagatedViewEvents<Topic> = {
    [Type in keyof PropagatedViewEventMapping]: PropagatedViewEventMapping<Topic, Type>[Type];
};
export interface InputEvent {
    inputType: 'keyUp' | 'keyDown';
    ctrlKey: boolean;
    shiftKey: boolean;
    altKey: boolean;
    metaKey: boolean;
    key: string;
    code: string;
    repeat: boolean;
    command?: string;
}
export interface TargetChangedEvent<Topic, Type> extends WindowEvent<Topic, Type> {
    previousTarget: Identity;
    target: Identity;
}
