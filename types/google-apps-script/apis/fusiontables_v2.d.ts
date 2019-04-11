// Type definitions for Google Apps Script 2019-03-25
// Project: https://developers.google.com/apps-script/
// Generator: https://github.com/grant/google-apps-script-dts
// Definitions by: grant <https://github.com/grant/>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare namespace GoogleAppsScript {
  namespace Fusiontables_v2 {
    namespace Collection {
      export interface ColumnCollection {
        // Retrieves a specific column by its ID.
        get(tableId: string, columnId: string): Fusiontables_v2.Schema.Column;
        // Adds a new column to the table.
        insert(resource: Schema.Column, tableId: string): Fusiontables_v2.Schema.Column;
        // Retrieves a list of columns.
        list(tableId: string): Fusiontables_v2.Schema.ColumnList;
        // Retrieves a list of columns.
        list(tableId: string, optionalArgs: object): Fusiontables_v2.Schema.ColumnList;
        // Updates the name or type of an existing column. This method supports patch semantics.
        patch(resource: Schema.Column, tableId: string, columnId: string): Fusiontables_v2.Schema.Column;
        // Deletes the specified column.
        remove(tableId: string, columnId: string): void;
        // Updates the name or type of an existing column.
        update(resource: Schema.Column, tableId: string, columnId: string): Fusiontables_v2.Schema.Column;
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
        sql(sql: string): Fusiontables_v2.Schema.Sqlresponse;
        // Executes a Fusion Tables SQL statement, which can be any of
        // - SELECT
        // - INSERT
        // - UPDATE
        // - DELETE
        // - SHOW
        // - DESCRIBE
        // - CREATE statement.
        sql(sql: string, optionalArgs: object): Fusiontables_v2.Schema.Sqlresponse;
        // Executes a SQL statement which can be any of
        // - SELECT
        // - SHOW
        // - DESCRIBE
        sqlGet(sql: string): Fusiontables_v2.Schema.Sqlresponse;
        // Executes a SQL statement which can be any of
        // - SELECT
        // - SHOW
        // - DESCRIBE
        sqlGet(sql: string, optionalArgs: object): Fusiontables_v2.Schema.Sqlresponse;
      }
      export interface StyleCollection {
        // Gets a specific style.
        get(tableId: string, styleId: number): Fusiontables_v2.Schema.StyleSetting;
        // Adds a new style for the table.
        insert(resource: Schema.StyleSetting, tableId: string): Fusiontables_v2.Schema.StyleSetting;
        // Retrieves a list of styles.
        list(tableId: string): Fusiontables_v2.Schema.StyleSettingList;
        // Retrieves a list of styles.
        list(tableId: string, optionalArgs: object): Fusiontables_v2.Schema.StyleSettingList;
        // Updates an existing style. This method supports patch semantics.
        patch(resource: Schema.StyleSetting, tableId: string, styleId: number): Fusiontables_v2.Schema.StyleSetting;
        // Deletes a style.
        remove(tableId: string, styleId: number): void;
        // Updates an existing style.
        update(resource: Schema.StyleSetting, tableId: string, styleId: number): Fusiontables_v2.Schema.StyleSetting;
      }
      export interface TableCollection {
        // Copies a table.
        copy(tableId: string): Fusiontables_v2.Schema.Table;
        // Copies a table.
        copy(tableId: string, optionalArgs: object): Fusiontables_v2.Schema.Table;
        // Retrieves a specific table by its ID.
        get(tableId: string): Fusiontables_v2.Schema.Table;
        // Imports more rows into a table.
        importRows(tableId: string): Fusiontables_v2.Schema.Import;
        // Imports more rows into a table.
        importRows(tableId: string, mediaData: any): Fusiontables_v2.Schema.Import;
        // Imports more rows into a table.
        importRows(tableId: string, mediaData: any, optionalArgs: object): Fusiontables_v2.Schema.Import;
        // Imports a new table.
        importTable(name: string): Fusiontables_v2.Schema.Table;
        // Imports a new table.
        importTable(name: string, mediaData: any): Fusiontables_v2.Schema.Table;
        // Imports a new table.
        importTable(name: string, mediaData: any, optionalArgs: object): Fusiontables_v2.Schema.Table;
        // Creates a new table.
        insert(resource: Schema.Table): Fusiontables_v2.Schema.Table;
        // Retrieves a list of tables a user owns.
        list(): Fusiontables_v2.Schema.TableList;
        // Retrieves a list of tables a user owns.
        list(optionalArgs: object): Fusiontables_v2.Schema.TableList;
        // Updates an existing table. Unless explicitly requested, only the name, description, and attribution will be updated. This method supports patch semantics.
        patch(resource: Schema.Table, tableId: string): Fusiontables_v2.Schema.Table;
        // Updates an existing table. Unless explicitly requested, only the name, description, and attribution will be updated. This method supports patch semantics.
        patch(resource: Schema.Table, tableId: string, optionalArgs: object): Fusiontables_v2.Schema.Table;
        // Replaces rows of the table with the rows of the spreadsheet that is first imported from. Current rows remain visible until all replacement rows are ready.
        refetchSheet(tableId: string): Fusiontables_v2.Schema.Task;
        // Deletes a table.
        remove(tableId: string): void;
        // Replaces rows of an existing table. Current rows remain visible until all replacement rows are ready.
        replaceRows(tableId: string): Fusiontables_v2.Schema.Task;
        // Replaces rows of an existing table. Current rows remain visible until all replacement rows are ready.
        replaceRows(tableId: string, mediaData: any): Fusiontables_v2.Schema.Task;
        // Replaces rows of an existing table. Current rows remain visible until all replacement rows are ready.
        replaceRows(tableId: string, mediaData: any, optionalArgs: object): Fusiontables_v2.Schema.Task;
        // Updates an existing table. Unless explicitly requested, only the name, description, and attribution will be updated.
        update(resource: Schema.Table, tableId: string): Fusiontables_v2.Schema.Table;
        // Updates an existing table. Unless explicitly requested, only the name, description, and attribution will be updated.
        update(resource: Schema.Table, tableId: string, optionalArgs: object): Fusiontables_v2.Schema.Table;
      }
      export interface TaskCollection {
        // Retrieves a specific task by its ID.
        get(tableId: string, taskId: string): Fusiontables_v2.Schema.Task;
        // Retrieves a list of tasks.
        list(tableId: string): Fusiontables_v2.Schema.TaskList;
        // Retrieves a list of tasks.
        list(tableId: string, optionalArgs: object): Fusiontables_v2.Schema.TaskList;
        // Deletes a specific task by its ID, unless that task has already started running.
        remove(tableId: string, taskId: string): void;
      }
      export interface TemplateCollection {
        // Retrieves a specific template by its id
        get(tableId: string, templateId: number): Fusiontables_v2.Schema.Template;
        // Creates a new template for the table.
        insert(resource: Schema.Template, tableId: string): Fusiontables_v2.Schema.Template;
        // Retrieves a list of templates.
        list(tableId: string): Fusiontables_v2.Schema.TemplateList;
        // Retrieves a list of templates.
        list(tableId: string, optionalArgs: object): Fusiontables_v2.Schema.TemplateList;
        // Updates an existing template. This method supports patch semantics.
        patch(resource: Schema.Template, tableId: string, templateId: number): Fusiontables_v2.Schema.Template;
        // Deletes a template
        remove(tableId: string, templateId: number): void;
        // Updates an existing template
        update(resource: Schema.Template, tableId: string, templateId: number): Fusiontables_v2.Schema.Template;
      }
    }
    namespace Schema {
      export interface Bucket {
        color?: string;
        icon?: string;
        max?: Number;
        min?: Number;
        opacity?: Number;
        weight?: number;
      }
      export interface Column {
        baseColumn?: Fusiontables_v2.Schema.ColumnBaseColumn;
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
        items?: Fusiontables_v2.Schema.Column[];
        kind?: string;
        nextPageToken?: string;
        totalItems?: number;
      }
      export interface Geometry {
        geometries?: Object[];
        geometry?: object;
        type?: string;
      }
      export interface Import {
        kind?: string;
        numRowsReceived?: string;
      }
      export interface Line {
        coordinates?: Number[][];
        type?: string;
      }
      export interface LineStyle {
        strokeColor?: string;
        strokeColorStyler?: Fusiontables_v2.Schema.StyleFunction;
        strokeOpacity?: Number;
        strokeWeight?: number;
        strokeWeightStyler?: Fusiontables_v2.Schema.StyleFunction;
      }
      export interface Point {
        coordinates?: Number[];
        type?: string;
      }
      export interface PointStyle {
        iconName?: string;
        iconStyler?: Fusiontables_v2.Schema.StyleFunction;
      }
      export interface Polygon {
        coordinates?: Number[][][];
        type?: string;
      }
      export interface PolygonStyle {
        fillColor?: string;
        fillColorStyler?: Fusiontables_v2.Schema.StyleFunction;
        fillOpacity?: Number;
        strokeColor?: string;
        strokeColorStyler?: Fusiontables_v2.Schema.StyleFunction;
        strokeOpacity?: Number;
        strokeWeight?: number;
        strokeWeightStyler?: Fusiontables_v2.Schema.StyleFunction;
      }
      export interface Sqlresponse {
        columns?: string[];
        kind?: string;
        rows?: Object[][];
      }
      export interface StyleFunction {
        buckets?: Fusiontables_v2.Schema.Bucket[];
        columnName?: string;
        gradient?: Fusiontables_v2.Schema.StyleFunctionGradient;
        kind?: string;
      }
      export interface StyleFunctionGradient {
        colors?: Fusiontables_v2.Schema.StyleFunctionGradientColors[];
        max?: Number;
        min?: Number;
      }
      export interface StyleFunctionGradientColors {
        color?: string;
        opacity?: Number;
      }
      export interface StyleSetting {
        kind?: string;
        markerOptions?: Fusiontables_v2.Schema.PointStyle;
        name?: string;
        polygonOptions?: Fusiontables_v2.Schema.PolygonStyle;
        polylineOptions?: Fusiontables_v2.Schema.LineStyle;
        styleId?: number;
        tableId?: string;
      }
      export interface StyleSettingList {
        items?: Fusiontables_v2.Schema.StyleSetting[];
        kind?: string;
        nextPageToken?: string;
        totalItems?: number;
      }
      export interface Table {
        attribution?: string;
        attributionLink?: string;
        baseTableIds?: string[];
        columnPropertiesJsonSchema?: string;
        columns?: Fusiontables_v2.Schema.Column[];
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
        items?: Fusiontables_v2.Schema.Table[];
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
        items?: Fusiontables_v2.Schema.Task[];
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
        items?: Fusiontables_v2.Schema.Template[];
        kind?: string;
        nextPageToken?: string;
        totalItems?: number;
      }
    }
  }
  export interface Fusiontables_v2 {
    Column?: Fusiontables_v2.Collection.ColumnCollection;
    Query?: Fusiontables_v2.Collection.QueryCollection;
    Style?: Fusiontables_v2.Collection.StyleCollection;
    Table?: Fusiontables_v2.Collection.TableCollection;
    Task?: Fusiontables_v2.Collection.TaskCollection;
    Template?: Fusiontables_v2.Collection.TemplateCollection;
    // Create a new instance of Bucket
    newBucket(): Fusiontables_v2.Schema.Bucket;
    // Create a new instance of Column
    newColumn(): Fusiontables_v2.Schema.Column;
    // Create a new instance of ColumnBaseColumn
    newColumnBaseColumn(): Fusiontables_v2.Schema.ColumnBaseColumn;
    // Create a new instance of LineStyle
    newLineStyle(): Fusiontables_v2.Schema.LineStyle;
    // Create a new instance of PointStyle
    newPointStyle(): Fusiontables_v2.Schema.PointStyle;
    // Create a new instance of PolygonStyle
    newPolygonStyle(): Fusiontables_v2.Schema.PolygonStyle;
    // Create a new instance of StyleFunction
    newStyleFunction(): Fusiontables_v2.Schema.StyleFunction;
    // Create a new instance of StyleFunctionGradient
    newStyleFunctionGradient(): Fusiontables_v2.Schema.StyleFunctionGradient;
    // Create a new instance of StyleFunctionGradientColors
    newStyleFunctionGradientColors(): Fusiontables_v2.Schema.StyleFunctionGradientColors;
    // Create a new instance of StyleSetting
    newStyleSetting(): Fusiontables_v2.Schema.StyleSetting;
    // Create a new instance of Table
    newTable(): Fusiontables_v2.Schema.Table;
    // Create a new instance of Template
    newTemplate(): Fusiontables_v2.Schema.Template;
  }
}

declare var Fusiontables_v2: GoogleAppsScript.Fusiontables_v2;
