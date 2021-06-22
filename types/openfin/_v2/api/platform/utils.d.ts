/// <reference types="jquery" />
import { Identity } from '../../identity';
import { ViewState } from './resizable-view';
import { Bounds } from '../../shapes/shapes';
import { View } from '../../main';
import { MonitorInfo } from '../system/monitor';
import { Snapshot } from '../../shapes/Platform';
export interface ViewComponent extends GoldenLayout.ContentItem {
    componentState: ViewState;
}
export interface LayoutEventPayload {
    success: boolean;
    reason?: string;
    identity: Identity;
}
export declare const addComponentToContentItem: (component: ViewComponent, target: GoldenLayout.ItemConfig) => void;
export declare const emitLocalEvent: (event: string, identity: Identity, container: HTMLElement) => void;
export declare type LayoutPresetTypes = 'columns' | 'grid' | 'rows' | 'tabs';
export declare const getPresetLayoutFunction: {
    columns: (components: ViewComponent[]) => GoldenLayout.Config;
    grid: (components: ViewComponent[]) => GoldenLayout.Config;
    rows: (components: ViewComponent[]) => GoldenLayout.Config;
    tabs: (components: ViewComponent[]) => GoldenLayout.Config;
};
export declare const generatePresetLayoutContent: (components: ViewComponent[], type: LayoutPresetTypes) => GoldenLayout.Config;
export declare function createComponent(componentState: {
    name: string;
}): GoldenLayout.ComponentConfig;
export declare const debounce: <T extends (...args: any[]) => any>(callback: T, delay: number, resizing: boolean) => (...args: Parameters<T>) => void;
export declare const delay: (delay: number) => Promise<unknown>;
export declare const generateLayoutContent: (componentState: any) => GoldenLayout.Config;
export declare const getSourceIdentity: (e: JQuery.DragEventBase<HTMLElement, Identity, HTMLElement, HTMLElement>) => {
    uuid: string;
    name: string;
};
export declare function handleRenderError(component: ViewComponent, e: Error): void;
export declare const getOutOfWindowDropBounds: (e: {
    screenY: number;
    screenX: number;
}, container: HTMLElement, dimensions: {
    width: any;
    height: any;
}) => Partial<Bounds>;
export declare const isSameApp: (e: JQuery.DragEventBase<HTMLElement, undefined, HTMLElement, HTMLElement>, currentWindow: Identity) => boolean;
export declare const isSameWindow: (e: JQuery.DragEventBase<HTMLElement, Identity, HTMLElement, HTMLElement>, currentWindow: Identity) => boolean;
export declare const mock: {
    on: () => void;
};
export declare function setContainerMessage(container: GoldenLayout.Container, message: string): void;
export declare function setTabTitle(tab: GoldenLayout.Tab, title: string): void;
export declare function setFallbackBodyAndTitle(viewComponent: ViewComponent): void;
export declare const setViewBoundsByRect: (rect: ClientRect | DOMRect | Bounds, ofView: View) => Promise<View>;
export declare const getComponentBounds: (bv: ViewComponent) => DOMRect;
export declare const buildFailedEventPayload: (response: string, identity: Identity) => {
    success: boolean;
    response: string;
    identity: Identity;
};
export declare const promisifyViewLoadEvents: (view: View, windowIdentity: Identity) => Promise<LayoutEventPayload>;
export declare const getOutOfBoundsWindows: (snapshot: Snapshot, monitorInfo: MonitorInfo) => Promise<import("../../shapes/WindowOptions").WindowOptions[]>;
