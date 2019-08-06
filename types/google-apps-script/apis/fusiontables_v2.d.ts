// Type definitions for Google Apps Script 2019-03-25
// Project: https://developers.google.com/apps-script/
// Generator: https://github.com/grant/google-apps-script-dts
// Definitions by: grant <https://github.com/grant/>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare namespace GoogleAppsScript {
  namespace FusionTables {
    namespace Collection {
      export interface ColumnCollection {
        // Retrieves a specific column by its ID.
        get(tableId: string, columnId: string): FusionTables.Schema.Column;
        // Adds a new column to the table.
        insert(resource: Schema.Column, tableId: string): FusionTables.Schema.Column;
        // Retrieves a list of columns.
        list(tableId: string): FusionTables.Schema.ColumnList;
        // Retrieves a list of columns.
        list(tableId: string, optionalArgs: object): FusionTables.Schema.ColumnList;
        // Updates the name or type of an existing column. This method supports patch semantics.
        patch(resource: Schema.Column, tableId: string, columnId: string): FusionTables.Schema.Column;
        // Deletes the specified column.
        remove(tableId: string, columnId: string): void;
        // Updates the name or type of an existing column.
        update(resource: Schema.Column, tableId: string, columnId: string): FusionTables.Schema.Column;
      }
      export interface QueryCollection {
        // Executes a Fusion Tables SQL statement, which can be any of
        // - SELECT
        // - INSERT
        // - UPDATE
        // - DELETE
        // - SHOW
        // - DESCRIBE
        // - CREATE statement.
        sql(sql: string): FusionTables.Schema.Sqlresponse;
        // Executes a Fusion Tables SQL statement, which can be any of
        // - SELECT
        // - INSERT
        // - UPDATE
        // - DELETE
        // - SHOW
        // - DESCRIBE
        // - CREATE statement.
        sql(sql: string, optionalArgs: object): FusionTables.Schema.Sqlresponse;
        // Executes a SQL statement which can be any of
        // - SELECT
        // - SHOW
        // - DESCRIBE
        sqlGet(sql: string): FusionTables.Schema.Sqlresponse;
        // Executes a SQL statement which can be any of
        // - SELECT
        // - SHOW
        // - DESCRIBE
        sqlGet(sql: string, optionalArgs: object): FusionTables.Schema.Sqlresponse;
      }
      export interface StyleCollection {
        // Gets a specific style.
        get(tableId: string, styleId: number): FusionTables.Schema.StyleSetting;
        // Adds a new style for the table.
        insert(resource: Schema.StyleSetting, tableId: string): FusionTables.Schema.StyleSetting;
        // Retrieves a list of styles.
        list(tableId: string): FusionTables.Schema.StyleSettingList;
        // Retrieves a list of styles.
        list(tableId: string, optionalArgs: object): FusionTables.Schema.StyleSettingList;
        // Updates an existing style. This method supports patch semantics.
        patch(resource: Schema.StyleSetting, tableId: string, styleId: number): FusionTables.Schema.StyleSetting;
        // Deletes a style.
        remove(tableId: string, styleId: number): void;
        // Updates an existing style.
        update(resource: Schema.StyleSetting, tableId: string, styleId: number): FusionTables.Schema.StyleSetting;
      }
      export interface TableCollection {
        // Copies a table.
        copy(tableId: string): FusionTables.Schema.Table;
        // Copies a table.
        copy(tableId: string, optionalArgs: object): FusionTables.Schema.Table;
        // Retrieves a specific table by its ID.
        get(tableId: string): FusionTables.Schema.Table;
        // Imports more rows into a table.
        importRows(tableId: string): FusionTables.Schema.Import;
        // Imports more rows into a table.
        importRows(tableId: string, mediaData: any): FusionTables.Schema.Import;
        // Imports more rows into a table.
        importRows(tableId: string, mediaData: any, optionalArgs: object): FusionTables.Schema.Import;
        // Imports a new table.
        importTable(name: string): FusionTables.Schema.Table;
        // Imports a new table.
        importTable(name: string, mediaData: any): FusionTables.Schema.Table;
        // Imports a new table.
        importTable(name: string, mediaData: any, optionalArgs: object): FusionTables.Schema.Table;
        // Creates a new table.
        insert(resource: Schema.Table): FusionTables.Schema.Table;
        // Retrieves a list of tables a user owns.
        list(): FusionTables.Schema.TableList;
        // Retrieves a list of tables a user owns.
        list(optionalArgs: object): FusionTables.Schema.TableList;
        // Updates an existing table. Unless explicitly requested, only the name, description, and attribution will be updated. This method supports patch semantics.
        patch(resource: Schema.Table, tableId: string): FusionTables.Schema.Table;
        // Updates an existing table. Unless explicitly requested, only the name, description, and attribution will be updated. This method supports patch semantics.
        patch(resource: Schema.Table, tableId: string, optionalArgs: object): FusionTables.Schema.Table;
        // Replaces rows of the table with the rows of the spreadsheet that is first imported from. Current rows remain visible until all replacement rows are ready.
        refetchSheet(tableId: string): FusionTables.Schema.Task;
        // Deletes a table.
        remove(tableId: string): void;
        // Replaces rows of an existing table. Current rows remain visible until all replacement rows are ready.
        replaceRows(tableId: string): FusionTables.Schema.Task;
        // Replaces rows of an existing table. Current rows remain visible until all replacement rows are ready.
        replaceRows(tableId: string, mediaData: any): FusionTables.Schema.Task;
        // Replaces rows of an existing table. Current rows remain visible until all replacement rows are ready.
        replaceRows(tableId: string, mediaData: any, optionalArgs: object): FusionTables.Schema.Task;
        // Updates an existing table. Unless explicitly requested, only the name, description, and attribution will be updated.
        update(resource: Schema.Table, tableId: string): FusionTables.Schema.Table;
        // Updates an existing table. Unless explicitly requested, only the name, description, and attribution will be updated.
        update(resource: Schema.Table, tableId: string, optionalArgs: object): FusionTables.Schema.Table;
      }
      export interface TaskCollection {
        // Retrieves a specific task by its ID.
        get(tableId: string, taskId: string): FusionTables.Schema.Task;
        // Retrieves a list of tasks.
        list(tableId: string): FusionTables.Schema.TaskList;
        // Retrieves a list of tasks.
        list(tableId: string, optionalArgs: object): FusionTables.Schema.TaskList;
        // Deletes a specific task by its ID, unless that task has already started running.
        remove(tableId: string, taskId: string): void;
      }
      export interface TemplateCollection {
        // Retrieves a specific template by its id
        get(tableId: string, templateId: number): FusionTables.Schema.Template;
        // Creates a new template for the table.
        insert(resource: Schema.Template, tableId: string): FusionTables.Schema.Template;
        // Retrieves a list of templates.
        list(tableId: string): FusionTables.Schema.TemplateList;
        // Retrieves a list of templates.
        list(tableId: string, optionalArgs: object): FusionTables.Schema.TemplateList;
        // Updates an existing template. This method supports patch semantics.
        patch(resource: Schema.Template, tableId: string, templateId: number): FusionTables.Schema.Template;
        // Deletes a template
        remove(tableId: string, templateId: number): void;
        // Updates an existing template
        update(resource: Schema.Template, tableId: string, templateId: number): FusionTables.Schema.Template;
      }
    }
    namespace Schema {
      export interface Bucket {
        color?: string;
        icon?: string;
        max?: number;
        min?: number;
        opacity?: number;
        weight?: number;
      }
      export interface Column {
        baseColumn?: FusionTables.Schema.ColumnBaseColumn;
        columnId?: number;
        columnJsonSchema?: string;
        columnPropertiesJson?: string;
        description?: string;
        formatPattern?: string;
        graphPredicate?: string;
        kind?: string;
        name?: string;
        type?: string;
        validValues?: string[];
        validateData?: boolean;
      }
      export interface ColumnBaseColumn {
        columnId?: number;
        tableIndex?: number;
      }
      export interface ColumnList {
        items?: FusionTables.Schema.Column[];
        kind?: string;
        nextPageToken?: string;
        totalItems?: number;
      }
      export interface Geometry {
        geometries?: object[];
        geometry?: object;
        type?: string;
      }
      export interface Import {
        kind?: string;
        numRowsReceived?: string;
      }
      export interface Line {
        coordinates?: number[][];
        type?: string;
      }
      export interface LineStyle {
        strokeColor?: string;
        strokeColorStyler?: FusionTables.Schema.StyleFunction;
        strokeOpacity?: number;
        strokeWeight?: number;
        strokeWeightStyler?: FusionTables.Schema.StyleFunction;
      }
      export interface Point {
        coordinates?: number[];
        type?: string;
      }
      export interface PointStyle {
        iconName?: string;
        iconStyler?: FusionTables.Schema.StyleFunction;
      }
      export interface Polygon {
        coordinates?: number[][][];
        type?: string;
      }
      export interface PolygonStyle {
        fillColor?: string;
        fillColorStyler?: FusionTables.Schema.StyleFunction;
        fillOpacity?: number;
        strokeColor?: string;
        strokeColorStyler?: FusionTables.Schema.StyleFunction;
        strokeOpacity?: number;
        strokeWeight?: number;
        strokeWeightStyler?: FusionTables.Schema.StyleFunction;
      }
      export interface Sqlresponse {
        columns?: string[];
        kind?: string;
        rows?: object[][];
      }
      export interface StyleFunction {
        buckets?: FusionTables.Schema.Bucket[];
        columnName?: string;
        gradient?: FusionTables.Schema.StyleFunctionGradient;
        kind?: string;
      }
      export interface StyleFunctionGradient {
        colors?: FusionTables.Schema.StyleFunctionGradientColors[];
        max?: number;
        min?: number;
      }
      export interface StyleFunctionGradientColors {
        color?: string;
        opacity?: number;
      }
      export interface StyleSetting {
        kind?: string;
        markerOptions?: FusionTables.Schema.PointStyle;
        name?: string;
        polygonOptions?: FusionTables.Schema.PolygonStyle;
        polylineOptions?: FusionTables.Schema.LineStyle;
        styleId?: number;
        tableId?: string;
      }
      export interface StyleSettingList {
        items?: FusionTables.Schema.StyleSetting[];
        kind?: string;
        nextPageToken?: string;
        totalItems?: number;
      }
      export interface Table {
        attribution?: string;
        attributionLink?: string;
        baseTableIds?: string[];
        columnPropertiesJsonSchema?: string;
        columns?: FusionTables.Schema.Column[];
        description?: string;
        isExportable?: boolean;
        kind?: string;
        name?: string;
        sql?: string;
        tableId?: string;
        tablePropertiesJson?: string;
        tablePropertiesJsonSchema?: string;
      }
      export interface TableList {
        items?: FusionTables.Schema.Table[];
        kind?: string;
        nextPageToken?: string;
      }
      export interface Task {
        kind?: string;
        progress?: string;
        started?: boolean;
        taskId?: string;
        type?: string;
      }
      export interface TaskList {
        items?: FusionTables.Schema.Task[];
        kind?: string;
        nextPageToken?: string;
        totalItems?: number;
      }
      export interface Template {
        automaticColumnNames?: string[];
        body?: string;
        kind?: string;
        name?: string;
        tableId?: string;
        templateId?: number;
      }
      export interface TemplateList {
        items?: FusionTables.Schema.Template[];
        kind?: string;
        nextPageToken?: string;
        totalItems?: number;
      }
    }
  }
  export interface FusionTables {
    Column?: FusionTables.Collection.ColumnCollection;
    Query?: FusionTables.Collection.QueryCollection;
    Style?: FusionTables.Collection.StyleCollection;
    Table?: FusionTables.Collection.TableCollection;
    Task?: FusionTables.Collection.TaskCollection;
    Template?: FusionTables.Collection.TemplateCollection;
    // Create a new instance of Bucket
    newBucket(): FusionTables.Schema.Bucket;
    // Create a new instance of Column
    newColumn(): FusionTables.Schema.Column;
    // Create a new instance of ColumnBaseColumn
    newColumnBaseColumn(): FusionTables.Schema.ColumnBaseColumn;
    // Create a new instance of LineStyle
    newLineStyle(): FusionTables.Schema.LineStyle;
    // Create a new instance of PointStyle
    newPointStyle(): FusionTables.Schema.PointStyle;
    // Create a new instance of PolygonStyle
    newPolygonStyle(): FusionTables.Schema.PolygonStyle;
    // Create a new instance of StyleFunction
    newStyleFunction(): FusionTables.Schema.StyleFunction;
    // Create a new instance of StyleFunctionGradient
    newStyleFunctionGradient(): FusionTables.Schema.StyleFunctionGradient;
    // Create a new instance of StyleFunctionGradientColors
    newStyleFunctionGradientColors(): FusionTables.Schema.StyleFunctionGradientColors;
    // Create a new instance of StyleSetting
    newStyleSetting(): FusionTables.Schema.StyleSetting;
    // Create a new instance of Table
    newTable(): FusionTables.Schema.Table;
    // Create a new instance of Template
    newTemplate(): FusionTables.Schema.Template;
  }
}

declare var FusionTables: GoogleAppsScript.FusionTables;
