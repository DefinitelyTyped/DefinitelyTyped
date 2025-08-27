import { TableauEventName } from "./enums";
import { Filter } from "./filtering";
import { Mark } from "./marks";
import { Size } from "./other";
import { Parameter } from "./parameter";
import { StoryPoint, StoryPointInfo, Worksheet } from "./sheet";
import { ToolbarState, Viz } from "./viz";
import { CustomView } from "./workbook";

export class TableauEvent {
    getViz(): Viz;
    getEventName(): TableauEventName;
}

export class CustomViewEvent extends TableauEvent {
    // methods
    getCustomViewAsync(): Promise<CustomView>;
}

export class FilterEvent extends TableauEvent {
    // properties
    getWorksheet(): Worksheet;
    getFieldName(): string;
    // methods
    getFilterAsync(): Promise<Filter>;
}

export class MarksEvent extends TableauEvent {
    // properties
    getWorksheet(): Worksheet;
    // methods
    getMarksAsync(): Promise<Mark[]>;
}

export class ParameterEvent extends TableauEvent {
    // properties
    getParameterName(): string;
    // methods
    getParameterAsync(): Promise<Parameter>;
}

export class StoryPointSwitchEvent extends TableauEvent {
    // properties
    getOldStoryPointInfo(): StoryPointInfo;
    getNewStoryPoint(): StoryPoint;
}

export class TabSwitchEvent extends TableauEvent {
    // properties
    getOldSheetName(): string;
    getNewSheetName(): string;
}

export class ToolbarStateEvent {
    getToolbarState(): ToolbarState;
}

export class UrlActionEvent {
    getURL(): string;
    getTarget(): string;
}

export class VizResizeEvent extends TableauEvent {
    getVizSize(): Size;
}
