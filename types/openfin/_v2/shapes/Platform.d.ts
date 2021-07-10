import { ApplicationOption } from '../api/application/applicationOption';
import { ViewCreationOptions } from '../api/view/view';
import { Identity } from './Identity';
import { Layout } from './Layout';
import { EntityType } from './EntityType';
import { WindowOptions } from './WindowOptions';
import { MonitorInfo } from '../api/system/monitor';
import { WindowOption } from '../api/window/windowOption';
export declare enum HostContextChangedReasons {
    updated = "updated",
    reparented = "reparented"
}
export declare enum WindowCreationReason {
    Tearout = "tearout",
    CreateViewWithoutTarget = "create-view-without-target",
    APICall = "api-call",
    AppCreation = "app-creation",
    Restore = "restore"
}
export interface PlatformWindowCreationOptions extends WindowOption {
    reason?: WindowCreationReason | undefined;
}
export interface HostContextChangedPayload {
    context: any;
    reason: HostContextChangedReasons;
}
export interface ApplySnapshotOptions {
    closeExistingWindows?: boolean | undefined;
    skipOutOfBoundsCheck?: boolean | undefined;
}
export interface ApplySnapshotPayload {
    snapshot: Snapshot;
    options?: ApplySnapshotOptions | undefined;
}
export interface CreateViewPayload {
    opts: ViewCreationOptions;
    target: Identity;
}
export interface CloseViewPayload {
    view: Identity;
}
export interface ReplaceLayoutOpts {
    layout: Layout;
}
export interface ReplaceLayoutPayload {
    opts: ReplaceLayoutOpts;
    target: Identity;
}
export interface SetWindowContextPayload {
    context: any;
    entityType: EntityType;
    target: Identity;
}
export interface GetWindowContextPayload {
    entityType: EntityType;
    target: Identity;
}
export interface PlatformOptions extends ApplicationOption {
    defaultWindowOptions?: DefaultWindowOptions | undefined;
    defaultViewOptions?: ViewCreationOptions | undefined;
    disableDefaultCommands?: boolean | undefined;
}
export interface Snapshot {
    windows: WindowOptions[];
    snapshotDetails?: {
        monitorInfo: MonitorInfo;
        runtimeInfo: string;
        timeStamp: string;
    } | undefined;
}
export interface DefaultWindowOptions extends WindowOption {
    stylesheetUrl: string;
}
declare type PlatformProvider = any;
export declare type OverrideCallback<T extends PlatformProvider> = (arg: PlatformProvider) => T;
export interface InitPlatformOptions {
    overrideCallback: OverrideCallback<any>;
}
export {};
