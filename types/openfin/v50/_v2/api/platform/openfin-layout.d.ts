/// <reference types="resize-observer-browser"/>

import { Fin, Window, ChannelClient, View } from '../../main';
import { ResizableView, ViewState } from './resizable-view';
import { Platform } from './platform';
import { ViewComponent } from './utils';
import { ViewDetached } from '../events/window';
export declare class LayoutManager {
    private fin;
    client: ChannelClient;
    container: HTMLElement;
    containerResizeObserver: typeof ResizeObserver;
    dragProxy: any;
    isDragging: boolean;
    layout: GoldenLayout.GoldenLayout;
    ofWindow: Window;
    platform: Platform;
    resizing: boolean;
    constructor(fin: Fin);
    initManager: () => Promise<void>;
    createLayout: (layout: GoldenLayout.Config, container: HTMLElement) => void;
    setContainer: (container: HTMLElement) => void;
    setupDragDropRegions: () => void;
    replaceLayout: (layout: GoldenLayout.Config, container: HTMLElement) => Promise<void>;
    onViewDetached: (e: ViewDetached<"window", "view-detached">) => Promise<void>;
    setupLayoutListeners: () => void;
    registerViewComponent: () => void;
    setupWindowListeners: () => void;
    setupContainerResizeObserver: () => void;
    onStackCreated: (stack: GoldenLayout.ContentItem) => void;
    onTabCreated: (tab: GoldenLayout.Tab) => void;
    replaceCloseTabButton: (tab: GoldenLayout.Tab) => void;
    onCloseTabButtonClick: (tab: GoldenLayout.Tab) => Promise<void>;
    setTabTitle: (tab: GoldenLayout.Tab, title: string) => Promise<void>;
    setTabBody: (container: GoldenLayout.Container, message: string) => void;
    updateButtonDisplay: () => void;
    onItemCreated: (item: GoldenLayout.ContentItem) => Promise<void>;
    handleOutOfWindowDrop: (e: {
        screenY: number;
        screenX: number;
    }, parentTab: GoldenLayout.Tab, dimensions: {
        width: any;
        height: any;
    }) => Promise<void>;
    onTabDrag: (dragListener: GoldenLayout.EventEmitter, parentTab: GoldenLayout.Tab) => Promise<void>;
    addView: (viewConfig: ViewState) => Promise<View>;
    removeView: (viewConfig: any) => Promise<View>;
    closeView: (viewConfig: any) => Promise<void>;
    createChannelConnections: () => Promise<void>;
    getViewComponent: (identity: {
        uuid?: string;
        name: string;
    }) => ViewComponent;
    getViewComponents: () => ViewComponent[];
    hideHighlight: () => void;
    getOfViewFromComponentState: (componentState: {
        name: any;
    }) => View;
    hideAllViews: () => void;
    showAllViews: (resize?: boolean) => Promise<any[]>;
    initializeLayoutViews: () => Promise<void>;
    createResizableView: (bv: ViewComponent) => ResizableView;
    attachView: (rView: ResizableView, bv: ViewComponent) => Promise<View>;
    createAndAttachView: (bv: ViewComponent) => Promise<View>;
    handleRenderError(component: ViewComponent, e: Error): void;
    setFallbackBodyAndTitle: (viewComponent: ViewComponent) => void;
    setupViewEvents: (view: View, viewComponent: ViewComponent) => void;
    dispatchLayoutEvent: (action: string, payload?: {}) => Promise<void>;
}
