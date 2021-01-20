import { WebContentsEventMapping, WindowResourceLoadFailedEvent, WindowResourceResponseReceivedEvent } from './webcontents';
import { WindowEvent, BaseEventMap } from './base';
import { WindowNavigationRejectedEvent } from './window';
import { CrashedEvent } from './application';
import { NamedIdentity } from '../../identity';
export interface ViewEventMapping<Topic = string, Type = string> extends WebContentsEventMapping {
    'attached': WindowEvent<Topic, Type>;
    'created': WindowEvent<Topic, Type>;
    'destroyed': WindowEvent<Topic, Type>;
    'hidden': WindowEvent<Topic, Type>;
    'hotkey': InputEvent & WindowEvent<Topic, Type>;
    'shown': WindowEvent<Topic, Type>;
    'target-changed': TargetChangedEvent<Topic, Type>;
}
interface PropagatedViewIdentity {
    viewIdentity: NamedIdentity;
}
export interface PropagatedViewEventMapping<Topic = string, Type = string> extends BaseEventMap {
    'view-blurred': WindowEvent<Topic, Type> & PropagatedViewIdentity;
    'view-crashed': CrashedEvent & WindowEvent<Topic, Type> & PropagatedViewIdentity;
    'view-created': CrashedEvent & WindowEvent<Topic, Type> & PropagatedViewIdentity;
    'view-destroyed': WindowEvent<Topic, Type> & PropagatedViewIdentity;
    'view-did-change-theme-color': WindowEvent<Topic, Type> & PropagatedViewIdentity;
    'view-focused': WindowEvent<Topic, Type> & PropagatedViewIdentity;
    'view-hidden': WindowEvent<Topic, Type> & PropagatedViewIdentity;
    'view-hotkey': InputEvent & WindowEvent<Topic, Type> & PropagatedViewIdentity;
    'view-navigation-rejected': WindowNavigationRejectedEvent<Topic, Type> & PropagatedViewIdentity;
    'view-page-favicon-updated': WindowEvent<Topic, Type> & PropagatedViewIdentity;
    'view-page-title-updated': WindowEvent<Topic, Type> & PropagatedViewIdentity;
    'view-resource-load-failed': WindowResourceLoadFailedEvent<Topic, Type> & PropagatedViewIdentity;
    'view-resource-response-received': WindowResourceResponseReceivedEvent<Topic, Type> & PropagatedViewIdentity;
    'view-shown': WindowEvent<Topic, Type> & PropagatedViewIdentity;
    'view-target-changed': TargetChangedEvent<Topic, Type> & PropagatedViewIdentity;
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
    previousTarget: NamedIdentity;
    target: NamedIdentity;
}
export {};
