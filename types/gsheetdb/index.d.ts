/// <reference types="node" />

import { JWT, UserRefreshClient } from "google-auth-library";

declare class gsheetdb {
    spreadsheetId: string;
    sheetName: string;
    credentialsJSON: object;

    client?: JWT | UserRefreshClient;
    headerRow: Row;

    constructor(parameters: GSheetDBParameters);

    connect(): Promise<void>;
    getData(dataRange?: string): Promise<SheetData>;
    insertRows(rows: Row[]): Promise<void>;
    updateRow(rowNumber: number, rowArray: Row): Promise<void>;
}

interface GSheetDBParameters {
    spreadsheetId: string;
    sheetName: string;
    credentialsJSON: object;
}

type SheetData = Array<{
    values: Row;
    rowNb: number;
}>;

type Row = Array<boolean | string | number | null>;

export = gsheetdb;
