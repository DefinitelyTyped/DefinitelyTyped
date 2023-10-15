import { DashboardObjectType, FilterUpdateType, SelectionUpdateType, SheetType } from "./enums";
import {
    Filter,
    FilterOptions,
    HierarchicalFilterOptions,
    RangeFilterOptions,
    RelativeDateFilterOptions,
} from "./filtering";
import { Mark } from "./marks";
import { Point, Size } from "./other";
import { DataSource, Workbook } from "./workbook";

// ! Docs specify SheetSize but there is no definition for SheetSize,
// ! we assume here that it refers to the generic Size type.
export type SheetSize = Size;

export class SheetInfo {
    // properties
    getName(): string;
    getIndex(): number;
    getIsActive(): boolean;
    getIsHidden(): boolean;
    getSheetType(): SheetType;
    getSize(): SheetSize;
    getUrl(): string;
    getWorkbook(): Workbook;
}

export class Sheet extends SheetInfo {
    // methods
    changeSizeAsync(options: SheetSizeOptions): Promise<SheetSize>;
}

export type SheetSizeOptions =
    | { behavior: "AUTOMATIC" }
    | { behavior: "EXACTLY" | "RANGE"; maxSize: SheetSize; minSize: SheetSize }
    | { behavior: "ATMOST"; maxSize: SheetSize }
    | { behavior: "ATLEAST"; minSize: SheetSize };

export class DataTable {
    getName(): string;
    getData(): any[][];
    getColumns(): Column[];
    getTotalRowCount(): number;
    getIsSummaryData(): boolean;
}

export class LogicalTable {
    getTableId(): string;
    getCaption(): string;
}

export class Column {
    getFieldName(): string;
    getDataType(): string;
    getIsReferenced(): boolean;
    getIndex(): number;
}

export class Worksheet extends Sheet {
    // properties
    getParentDashboard(): Dashboard;
    getParentStoryPoint(): StoryPoint;
    // methods
    getDataSourcesAsync(): Promise<DataSource[]>;
    getSummaryDataAsync(options: GetSummaryDataOptions | GetUnderlyingDataOptions): Promise<DataTable>;
    getUnderlyingTablesAsync(): Promise<LogicalTable[]>;
    getUnderlyingTableDataAsync(tableId: string, options: GetUnderlyingDataOptions): Promise<DataTable>;
    // filtering
    getFiltersAsync(): Promise<Filter[]>;
    applyFilterAsync(
        fieldName: string,
        values: object | object[],
        updateType: FilterUpdateType,
        options?: FilterOptions,
    ): Promise<string>;
    applyRangeFilterAsync(fieldName: string, range: RangeFilterOptions): Promise<string>;
    applyRelativeDateFilterAsync(fieldName: string, options: RelativeDateFilterOptions): Promise<string>;
    applyHierarchicalFilterAsync(
        fieldName: string,
        values: any[] | object,
        options: HierarchicalFilterOptions,
    ): Promise<string>;
    clearFilterAsync(fieldName: string): Promise<string>;
    // marks selection
    clearSelectedMarksAsync(): Promise<void>;
    getSelectedMarksAsync(): Promise<Mark[]>;
    selectMarksAsync(fieldName: string, value: object | object[], updateType: SelectionUpdateType): Promise<void>;
    selectMarksAsync(fieldValueMap: { [fieldName: string]: any[] }, updateType: SelectionUpdateType): Promise<void>;
    // tslint:disable-next-line:unified-signatures
    selectMarksAsync(marks: Mark[], updateType: SelectionUpdateType): Promise<void>;
}

export interface GetSummaryDataOptions {
    ignoreAliases: boolean;
    ignoreSelection: boolean;
    maxRows: number;
}

export interface GetUnderlyingDataOptions extends GetSummaryDataOptions {
    includeAllColumns: boolean;
}

export class Dashboard extends Sheet {
    // properties
    getObjects(): DashboardObject[];
    getWorksheets(): Worksheet[];
    getParentStoryPoint(): StoryPoint;
    // filtering
    getFiltersAsync(): Promise<Filter[]>;
    applyFilterAsync(
        fieldName: string,
        values: object | object[],
        updateType: FilterUpdateType,
        options?: FilterOptions,
    ): Promise<string>;
}

export class DashboardObject {
    // properties
    getObjectType(): DashboardObjectType;
    getDashboard(): Dashboard;
    getWorksheet(): Worksheet;
    getPosition(): Point;
    getSize(): Size;
}

export class Story extends Sheet {
    // properties
    getStoryPointsInfo(): StoryPointInfo[];
    getActiveStoryPoint(): StoryPoint;
    // methods
    activateStoryPointAsync(index: number): Promise<StoryPoint>;
    activateNextStoryPointAsync(): Promise<StoryPoint>;
    activatePreviousStoryPoint(): Promise<StoryPoint>;
    revertStoryPointAsync(): Promise<StoryPoint>;
}

export class StoryPointInfo {
    getIndex(): number;
    getCaption(): string;
    getIsActive(): boolean;
    getIsUpdated(): boolean;
    getParentStory(): Story;
}

export class StoryPoint {
    getIndex(): number;
    getCaption(): string;
    getIsActive(): boolean;
    getIsUpdated(): boolean;
    getContainedSheet(): Sheet | null;
    getParentStory(): Story;
}
