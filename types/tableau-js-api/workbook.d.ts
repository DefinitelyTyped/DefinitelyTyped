import { FieldAggregationType, FieldRoleType } from "./enums";
import { Parameter } from "./parameter";
import { Sheet, SheetInfo } from "./sheet";
import { Viz } from "./viz";

export class Workbook {
    // properties
    getViz(): Viz;
    getActiveSheet(): Sheet;
    getActiveCustomView(): CustomView;
    getPublishedSheetsInfo(): SheetInfo[];
    getName(): string;
    // methods
    activateSheetAsync(sheetNameOrIndex: number | string): Promise<Sheet>;
    revertAllAsync(): Promise<void>;
    getParametersAsync(): Promise<Parameter[]>;
    changeParameterValueAsync(name: string, value: any): Promise<Parameter>;
    getCustomViewAsync(customViewName: string): Promise<CustomView>;
    removeCustomViewAsync(customViewName: string): Promise<CustomView>;
    rememberCustomViewAsync(customViewName: string): Promise<CustomView>;
    setActiveCustomViewAsDefaultAsync(): Promise<void>;
}

export class DataSource {
    // properties
    getName(): string;
    getIsPrimary(): boolean;
    getFields(): Field[];
}

export class Field {
    // properties
    getName(): string;
    getAggregation(): FieldAggregationType;
    getDataSource(): DataSource;
    getRole(): FieldRoleType;
}

export class CustomView {
    // properties
    getName(): string;
    setName(name: string): string;
    getAdvertised(): boolean;
    setAdvertised(advertised: boolean): boolean;
    getDefault(): boolean;
    getOwnerName(): string;
    getUrl(): string;
    getWorkbook(): Workbook;
    // methods
    saveAsync(): Promise<CustomView>;
}
