import { ToolbarPosition, ToolbarButtonName, TableauEventName } from './enums';
import {
    CustomViewEvent,
    FilterEvent,
    MarksEvent,
    ParameterEvent,
    StoryPointSwitchEvent,
    TabSwitchEvent,
    TableauEvent,
    ToolbarStateEvent,
    UrlActionEvent,
    VizResizeEvent,
} from './viz.event';
import { Workbook } from './workbook';
import { Sheet, SheetInfo } from './sheet';

// Define types to use in addEventListener and removeEventListener overloads
export type TableauEventCustomView = Extract<
    TableauEventName,
    | TableauEventName.CUSTOM_VIEW_LOAD
    | TableauEventName.CUSTOM_VIEW_REMOVE
    | TableauEventName.CUSTOM_VIEW_SAVE
    | TableauEventName.CUSTOM_VIEW_SET_DEFAULT
>;
export type TableauEventFilterChange = Extract<TableauEventName, TableauEventName.FILTER_CHANGE>;
export type TableauEventMarks = Extract<
    TableauEventName,
    TableauEventName.MARKS_HIGHLIGHT | TableauEventName.MARKS_SELECTION
>;
export type TableauEventParameterChange = Extract<TableauEventName, TableauEventName.PARAMETER_VALUE_CHANGE>;
export type TableauEventStoryPointSwitch = Extract<TableauEventName, TableauEventName.STORY_POINT_SWITCH>;
export type TableauEventTabSwitch = Extract<TableauEventName, TableauEventName.TAB_SWITCH>;
export type TableauEventToolbarStateChange = Extract<TableauEventName, TableauEventName.TOOLBAR_STATE_CHANGE>;
export type TableauEventUrlAction = Extract<TableauEventName, TableauEventName.URL_ACTION>;
export type TableauEventVizResize = Extract<TableauEventName, TableauEventName.VIZ_RESIZE>;

// Embedded device types, controls which variant of the viz displays
export type DeviceType = 'default' | 'desktop' | 'tablet' | 'phone';

export class VizManager {
    getVizs(): Viz[];
}

export class Viz {
    constructor(parentElement: HTMLElement, url: string, options: VizCreateOptions);
    // properties
    getAreTabsHidden(): boolean;
    getIsToolbarHidden(): boolean;
    getIsHidden(): boolean;
    getParentElement(): HTMLElement;
    getUrl(): string;
    getWorkbook(): Workbook;
    getAreAutomaticUpdatesPaused(): boolean;
    // events
    addEventListener(type: TableauEventCustomView, listener: (event: CustomViewEvent) => void): void;
    addEventListener(type: TableauEventFilterChange, listener: (event: FilterEvent) => void): void;
    addEventListener(type: TableauEventMarks, listener: (event: MarksEvent) => void): void;
    addEventListener(type: TableauEventParameterChange, listener: (event: ParameterEvent) => void): void;
    addEventListener(type: TableauEventStoryPointSwitch, listener: (event: StoryPointSwitchEvent) => void): void;
    addEventListener(type: TableauEventTabSwitch, listener: (event: TabSwitchEvent) => void): void;
    addEventListener(type: TableauEventToolbarStateChange, listener: (event: ToolbarStateEvent) => void): void;
    addEventListener(type: TableauEventUrlAction, listener: (event: UrlActionEvent) => void): void;
    addEventListener(type: TableauEventVizResize, listener: (event: VizResizeEvent) => void): void;
    removeEventListener(type: TableauEventCustomView, listener: (event: CustomViewEvent) => void): void;
    removeEventListener(type: TableauEventFilterChange, listener: (event: FilterEvent) => void): void;
    removeEventListener(type: TableauEventMarks, listener: (event: MarksEvent) => void): void;
    removeEventListener(type: TableauEventParameterChange, listener: (event: ParameterEvent) => void): void;
    removeEventListener(type: TableauEventStoryPointSwitch, listener: (event: StoryPointSwitchEvent) => void): void;
    removeEventListener(type: TableauEventTabSwitch, listener: (event: TabSwitchEvent) => void): void;
    removeEventListener(type: TableauEventToolbarStateChange, listener: (event: ToolbarStateEvent) => void): void;
    removeEventListener(type: TableauEventUrlAction, listener: (event: UrlActionEvent) => void): void;
    removeEventListener(type: TableauEventVizResize, listener: (event: VizResizeEvent) => void): void;
    // methods
    show(): void;
    hide(): void;
    dispose(): void;
    pauseAutomaticUpdatesAsync(): Promise<void>;
    resumeAutomaticUpdatesAsync(): Promise<void>;
    toggleAutomaticUpdatesAsync(): Promise<void>;
    revertAllAsync(): void;
    refreshDataAsync(): void;
    showDownloadWorkbookDialog(): void;
    showExportImageDialog(): void;
    showExportPDFDialog(): void;
    showExportPowerPointDialog(): void;
    showExportDataDialog(worksheetInDashboard: Sheet | SheetInfo | string): void;
    showExportCrossTabDialog(worksheetInDashboard: Sheet | SheetInfo | string): void;
    exportCrossTabToExcel(worksheetInDashboard?: Sheet | SheetInfo | string): void;
    showShareDialog(): void;
    setFrameSize(width: number, height: number): void;
    getCurrentUrlAsync(): Promise<string>;
    redoAsync(): void;
    undoAsync(): void;
}

export interface VizCreateOptions {
    disableUrlActionsPopups?: boolean | undefined;
    hideTabs?: boolean | undefined;
    hideToolbar?: boolean | undefined;
    instanceIdToClone?: string | undefined;
    width?: string | undefined;
    height?: string | undefined;
    device?: DeviceType | undefined;
    onFirstInteractive?: ((event: TableauEvent) => void) | undefined;
    onFirstVizSizeKnown?: ((event: VizResizeEvent) => void) | undefined;
    toolbarPosition?: ToolbarPosition | undefined;
}

export class ToolbarState {
    // properties
    getViz(): Viz;
    isButtonEnabled(toolbarButtonName: ToolbarButtonName): boolean;
}
