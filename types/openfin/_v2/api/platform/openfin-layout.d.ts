import { Fin, Window, ChannelClient } from '../../main';
import { ViewState } from './resizable-view';
import { Platform } from './platform';
import { ViewComponent } from './utils';
export declare class Layout {
    private fin;
    container: HTMLElement;
    ofWindow: Window;
    layout: GoldenLayout.GoldenLayout;
    isDragging: boolean;
    resizing: boolean;
    dragProxy: any;
    client: ChannelClient;
    platform: Platform;
    constructor(fin: Fin, config: GoldenLayout.Config, container: HTMLElement);
    on(eventName: any, fn: any): void;
    off(eventName: any, fn: any): void;
    init: () => Promise<void>;
    setupDragDropRegions: () => void;
    onViewDetached: () => Promise<void>;
    setupLayoutListeners: () => void;
    setupResizeListeners: () => void;
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
    addView: (viewConfig: ViewState) => Promise<unknown>;
    removeView: (viewConfig: any) => Promise<import("../view/view").View>;
    closeView: (viewConfig: any) => Promise<void>;
    createChannelConnections: () => Promise<void>;
    getViewComponent: (identity: {
        name: string;
    }) => ViewComponent;
    getViewComponents: () => ViewComponent[];
    hideHighlight: () => void;
    attachViews: () => void;
    getOfViewFromComponentState: (componentState: {
        name: any;
    }) => import("../view/view").View;
    hideAllViews: () => void;
    showAllViews: () => void;
    attachView: (bv: ViewComponent) => Promise<unknown>;
}
export declare function addFinLayoutManager(fin: Fin): void;
