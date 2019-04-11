// Type definitions for Google Apps Script 2019-03-25
// Project: https://developers.google.com/apps-script/
// Generator: https://github.com/grant/google-apps-script-dts
// Definitions by: grant <https://github.com/grant/>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare namespace GoogleAppsScript {
  namespace Sheets_v4 {
    namespace Collection {
      namespace Spreadsheets {
        export interface DeveloperMetadataCollection {
          // Returns the developer metadata with the specified ID.
          // The caller must specify the spreadsheet ID and the developer metadata's
          // unique metadataId.
          get(spreadsheetId: string, metadataId: number): Sheets_v4.Schema.DeveloperMetadata;
          // Returns all developer metadata matching the specified DataFilter.
          // If the provided DataFilter represents a DeveloperMetadataLookup object,
          // this will return all DeveloperMetadata entries selected by it. If the
          // DataFilter represents a location in a spreadsheet, this will return all
          // developer metadata associated with locations intersecting that region.
          search(resource: Schema.SearchDeveloperMetadataRequest, spreadsheetId: string): Sheets_v4.Schema.SearchDeveloperMetadataResponse;
        }
        export interface SheetsCollection {
          // Copies a single sheet from a spreadsheet to another spreadsheet.
          // Returns the properties of the newly created sheet.
          copyTo(resource: Schema.CopySheetToAnotherSpreadsheetRequest, spreadsheetId: string, sheetId: number): Sheets_v4.Schema.SheetProperties;
        }
        export interface ValuesCollection {
          // Appends values to a spreadsheet. The input range is used to search for
          // existing data and find a "table" within that range. Values will be
          // appended to the next row of the table, starting with the first column of
          // the table. See the
          // [guide](/sheets/api/guides/values#appending_values)
          // and
          // [sample code](/sheets/api/samples/writing#append_values)
          // for specific details of how tables are detected and data is appended.
          // The caller must specify the spreadsheet ID, range, and
          // a valueInputOption.  The `valueInputOption` only
          // controls how the input data will be added to the sheet (column-wise or
          // row-wise), it does not influence what cell the data starts being written
          // to.
          append(resource: Schema.ValueRange, spreadsheetId: string, range: string): Sheets_v4.Schema.AppendValuesResponse;
          // Appends values to a spreadsheet. The input range is used to search for
          // existing data and find a "table" within that range. Values will be
          // appended to the next row of the table, starting with the first column of
          // the table. See the
          // [guide](/sheets/api/guides/values#appending_values)
          // and
          // [sample code](/sheets/api/samples/writing#append_values)
          // for specific details of how tables are detected and data is appended.
          // The caller must specify the spreadsheet ID, range, and
          // a valueInputOption.  The `valueInputOption` only
          // controls how the input data will be added to the sheet (column-wise or
          // row-wise), it does not influence what cell the data starts being written
          // to.
          append(resource: Schema.ValueRange, spreadsheetId: string, range: string, optionalArgs: object): Sheets_v4.Schema.AppendValuesResponse;
          // Clears one or more ranges of values from a spreadsheet.
          // The caller must specify the spreadsheet ID and one or more ranges.
          // Only values are cleared -- all other properties of the cell (such as
          // formatting, data validation, etc..) are kept.
          batchClear(resource: Schema.BatchClearValuesRequest, spreadsheetId: string): Sheets_v4.Schema.BatchClearValuesResponse;
          // Clears one or more ranges of values from a spreadsheet.
          // The caller must specify the spreadsheet ID and one or more
          // DataFilters. Ranges matching any of the specified data
          // filters will be cleared.  Only values are cleared -- all other properties
          // of the cell (such as formatting, data validation, etc..) are kept.
          batchClearByDataFilter(resource: Schema.BatchClearValuesByDataFilterRequest, spreadsheetId: string): Sheets_v4.Schema.BatchClearValuesByDataFilterResponse;
          // Returns one or more ranges of values from a spreadsheet.
          // The caller must specify the spreadsheet ID and one or more ranges.
          batchGet(spreadsheetId: string): Sheets_v4.Schema.BatchGetValuesResponse;
          // Returns one or more ranges of values from a spreadsheet.
          // The caller must specify the spreadsheet ID and one or more ranges.
          batchGet(spreadsheetId: string, optionalArgs: object): Sheets_v4.Schema.BatchGetValuesResponse;
          // Returns one or more ranges of values that match the specified data filters.
          // The caller must specify the spreadsheet ID and one or more
          // DataFilters.  Ranges that match any of the data filters in
          // the request will be returned.
          batchGetByDataFilter(resource: Schema.BatchGetValuesByDataFilterRequest, spreadsheetId: string): Sheets_v4.Schema.BatchGetValuesByDataFilterResponse;
          // Sets values in one or more ranges of a spreadsheet.
          // The caller must specify the spreadsheet ID,
          // a valueInputOption, and one or more
          // ValueRanges.
          batchUpdate(resource: Schema.BatchUpdateValuesRequest, spreadsheetId: string): Sheets_v4.Schema.BatchUpdateValuesResponse;
          // Sets values in one or more ranges of a spreadsheet.
          // The caller must specify the spreadsheet ID,
          // a valueInputOption, and one or more
          // DataFilterValueRanges.
          batchUpdateByDataFilter(resource: Schema.BatchUpdateValuesByDataFilterRequest, spreadsheetId: string): Sheets_v4.Schema.BatchUpdateValuesByDataFilterResponse;
          // Clears values from a spreadsheet.
          // The caller must specify the spreadsheet ID and range.
          // Only values are cleared -- all other properties of the cell (such as
          // formatting, data validation, etc..) are kept.
          clear(resource: any, /* Schema.ClearValuesRequest */ spreadsheetId: string, range: string): Sheets_v4.Schema.ClearValuesResponse;
          // Returns a range of values from a spreadsheet.
          // The caller must specify the spreadsheet ID and a range.
          get(spreadsheetId: string, range: string): Sheets_v4.Schema.ValueRange;
          // Returns a range of values from a spreadsheet.
          // The caller must specify the spreadsheet ID and a range.
          get(spreadsheetId: string, range: string, optionalArgs: object): Sheets_v4.Schema.ValueRange;
          // Sets values in a range of a spreadsheet.
          // The caller must specify the spreadsheet ID, range, and
          // a valueInputOption.
          update(resource: Schema.ValueRange, spreadsheetId: string, range: string): Sheets_v4.Schema.UpdateValuesResponse;
          // Sets values in a range of a spreadsheet.
          // The caller must specify the spreadsheet ID, range, and
          // a valueInputOption.
          update(resource: Schema.ValueRange, spreadsheetId: string, range: string, optionalArgs: object): Sheets_v4.Schema.UpdateValuesResponse;
        }
      }
      export interface SpreadsheetsCollection {
        DeveloperMetadata?: Sheets_v4.Collection.Spreadsheets.DeveloperMetadataCollection;
        Sheets?: Sheets_v4.Collection.Spreadsheets.SheetsCollection;
        Values?: Sheets_v4.Collection.Spreadsheets.ValuesCollection;
        // Applies one or more updates to the spreadsheet.
        // Each request is validated before
        // being applied. If any request is not valid then the entire request will
        // fail and nothing will be applied.
        // Some requests have replies to
        // give you some information about how
        // they are applied. The replies will mirror the requests.  For example,
        // if you applied 4 updates and the 3rd one had a reply, then the
        // response will have 2 empty replies, the actual reply, and another empty
        // reply, in that order.
        // Due to the collaborative nature of spreadsheets, it is not guaranteed that
        // the spreadsheet will reflect exactly your changes after this completes,
        // however it is guaranteed that the updates in the request will be
        // applied together atomically. Your changes may be altered with respect to
        // collaborator changes. If there are no collaborators, the spreadsheet
        // should reflect your changes.
        batchUpdate(resource: Schema.BatchUpdateSpreadsheetRequest, spreadsheetId: string): Sheets_v4.Schema.BatchUpdateSpreadsheetResponse;
        // Creates a spreadsheet, returning the newly created spreadsheet.
        create(resource: Schema.Spreadsheet): Sheets_v4.Schema.Spreadsheet;
        // Returns the spreadsheet at the given ID.
        // The caller must specify the spreadsheet ID.
        // By default, data within grids will not be returned.
        // You can include grid data one of two ways:
        // * Specify a field mask listing your desired fields using the `fields` URL
        // parameter in HTTP
        // * Set the includeGridData
        // URL parameter to true.  If a field mask is set, the `includeGridData`
        // parameter is ignored
        // For large spreadsheets, it is recommended to retrieve only the specific
        // fields of the spreadsheet that you want.
        // To retrieve only subsets of the spreadsheet, use the
        // ranges URL parameter.
        // Multiple ranges can be specified.  Limiting the range will
        // return only the portions of the spreadsheet that intersect the requested
        // ranges. Ranges are specified using A1 notation.
        get(spreadsheetId: string): Sheets_v4.Schema.Spreadsheet;
        // Returns the spreadsheet at the given ID.
        // The caller must specify the spreadsheet ID.
        // By default, data within grids will not be returned.
        // You can include grid data one of two ways:
        // * Specify a field mask listing your desired fields using the `fields` URL
        // parameter in HTTP
        // * Set the includeGridData
        // URL parameter to true.  If a field mask is set, the `includeGridData`
        // parameter is ignored
        // For large spreadsheets, it is recommended to retrieve only the specific
        // fields of the spreadsheet that you want.
        // To retrieve only subsets of the spreadsheet, use the
        // ranges URL parameter.
        // Multiple ranges can be specified.  Limiting the range will
        // return only the portions of the spreadsheet that intersect the requested
        // ranges. Ranges are specified using A1 notation.
        get(spreadsheetId: string, optionalArgs: object): Sheets_v4.Schema.Spreadsheet;
        // Returns the spreadsheet at the given ID.
        // The caller must specify the spreadsheet ID.
        // This method differs from GetSpreadsheet in that it allows selecting
        // which subsets of spreadsheet data to return by specifying a
        // dataFilters parameter.
        // Multiple DataFilters can be specified.  Specifying one or
        // more data filters will return the portions of the spreadsheet that
        // intersect ranges matched by any of the filters.
        // By default, data within grids will not be returned.
        // You can include grid data one of two ways:
        // * Specify a field mask listing your desired fields using the `fields` URL
        // parameter in HTTP
        // * Set the includeGridData
        // parameter to true.  If a field mask is set, the `includeGridData`
        // parameter is ignored
        // For large spreadsheets, it is recommended to retrieve only the specific
        // fields of the spreadsheet that you want.
        getByDataFilter(resource: Schema.GetSpreadsheetByDataFilterRequest, spreadsheetId: string): Sheets_v4.Schema.Spreadsheet;
      }
    }
    namespace Schema {
      export interface AddBandingRequest {
        bandedRange?: Sheets_v4.Schema.BandedRange;
      }
      export interface AddBandingResponse {
        bandedRange?: Sheets_v4.Schema.BandedRange;
      }
      export interface AddChartRequest {
        chart?: Sheets_v4.Schema.EmbeddedChart;
      }
      export interface AddChartResponse {
        chart?: Sheets_v4.Schema.EmbeddedChart;
      }
      export interface AddConditionalFormatRuleRequest {
        index?: number;
        rule?: Sheets_v4.Schema.ConditionalFormatRule;
      }
      export interface AddDimensionGroupRequest {
        range?: Sheets_v4.Schema.DimensionRange;
      }
      export interface AddDimensionGroupResponse {
        dimensionGroups?: Sheets_v4.Schema.DimensionGroup[];
      }
      export interface AddFilterViewRequest {
        filter?: Sheets_v4.Schema.FilterView;
      }
      export interface AddFilterViewResponse {
        filter?: Sheets_v4.Schema.FilterView;
      }
      export interface AddNamedRangeRequest {
        namedRange?: Sheets_v4.Schema.NamedRange;
      }
      export interface AddNamedRangeResponse {
        namedRange?: Sheets_v4.Schema.NamedRange;
      }
      export interface AddProtectedRangeRequest {
        protectedRange?: Sheets_v4.Schema.ProtectedRange;
      }
      export interface AddProtectedRangeResponse {
        protectedRange?: Sheets_v4.Schema.ProtectedRange;
      }
      export interface AddSheetRequest {
        properties?: Sheets_v4.Schema.SheetProperties;
      }
      export interface AddSheetResponse {
        properties?: Sheets_v4.Schema.SheetProperties;
      }
      export interface AppendCellsRequest {
        fields?: string;
        rows?: Sheets_v4.Schema.RowData[];
        sheetId?: number;
      }
      export interface AppendDimensionRequest {
        dimension?: string;
        length?: number;
        sheetId?: number;
      }
      export interface AppendValuesResponse {
        spreadsheetId?: string;
        tableRange?: string;
        updates?: Sheets_v4.Schema.UpdateValuesResponse;
      }
      export interface AutoFillRequest {
        range?: Sheets_v4.Schema.GridRange;
        sourceAndDestination?: Sheets_v4.Schema.SourceAndDestination;
        useAlternateSeries?: boolean;
      }
      export interface AutoResizeDimensionsRequest {
        dimensions?: Sheets_v4.Schema.DimensionRange;
      }
      export interface BandedRange {
        bandedRangeId?: number;
        columnProperties?: Sheets_v4.Schema.BandingProperties;
        range?: Sheets_v4.Schema.GridRange;
        rowProperties?: Sheets_v4.Schema.BandingProperties;
      }
      export interface BandingProperties {
        firstBandColor?: Sheets_v4.Schema.Color;
        footerColor?: Sheets_v4.Schema.Color;
        headerColor?: Sheets_v4.Schema.Color;
        secondBandColor?: Sheets_v4.Schema.Color;
      }
      export interface BasicChartAxis {
        format?: Sheets_v4.Schema.TextFormat;
        position?: string;
        title?: string;
        titleTextPosition?: Sheets_v4.Schema.TextPosition;
      }
      export interface BasicChartDomain {
        domain?: Sheets_v4.Schema.ChartData;
        reversed?: boolean;
      }
      export interface BasicChartSeries {
        color?: Sheets_v4.Schema.Color;
        lineStyle?: Sheets_v4.Schema.LineStyle;
        series?: Sheets_v4.Schema.ChartData;
        targetAxis?: string;
        type?: string;
      }
      export interface BasicChartSpec {
        axis?: Sheets_v4.Schema.BasicChartAxis[];
        chartType?: string;
        compareMode?: string;
        domains?: Sheets_v4.Schema.BasicChartDomain[];
        headerCount?: number;
        interpolateNulls?: boolean;
        legendPosition?: string;
        lineSmoothing?: boolean;
        series?: Sheets_v4.Schema.BasicChartSeries[];
        stackedType?: string;
        threeDimensional?: boolean;
      }
      export interface BasicFilter {
        criteria?: object;
        range?: Sheets_v4.Schema.GridRange;
        sortSpecs?: Sheets_v4.Schema.SortSpec[];
      }
      export interface BatchClearValuesByDataFilterRequest {
        dataFilters?: Sheets_v4.Schema.DataFilter[];
      }
      export interface BatchClearValuesByDataFilterResponse {
        clearedRanges?: string[];
        spreadsheetId?: string;
      }
      export interface BatchClearValuesRequest {
        ranges?: string[];
      }
      export interface BatchClearValuesResponse {
        clearedRanges?: string[];
        spreadsheetId?: string;
      }
      export interface BatchGetValuesByDataFilterRequest {
        dataFilters?: Sheets_v4.Schema.DataFilter[];
        dateTimeRenderOption?: string;
        majorDimension?: string;
        valueRenderOption?: string;
      }
      export interface BatchGetValuesByDataFilterResponse {
        spreadsheetId?: string;
        valueRanges?: Sheets_v4.Schema.MatchedValueRange[];
      }
      export interface BatchGetValuesResponse {
        spreadsheetId?: string;
        valueRanges?: Sheets_v4.Schema.ValueRange[];
      }
      export interface BatchUpdateSpreadsheetRequest {
        includeSpreadsheetInResponse?: boolean;
        requests?: Sheets_v4.Schema.Request[];
        responseIncludeGridData?: boolean;
        responseRanges?: string[];
      }
      export interface BatchUpdateSpreadsheetResponse {
        replies?: Sheets_v4.Schema.Response[];
        spreadsheetId?: string;
        updatedSpreadsheet?: Sheets_v4.Schema.Spreadsheet;
      }
      export interface BatchUpdateValuesByDataFilterRequest {
        data?: Sheets_v4.Schema.DataFilterValueRange[];
        includeValuesInResponse?: boolean;
        responseDateTimeRenderOption?: string;
        responseValueRenderOption?: string;
        valueInputOption?: string;
      }
      export interface BatchUpdateValuesByDataFilterResponse {
        responses?: Sheets_v4.Schema.UpdateValuesByDataFilterResponse[];
        spreadsheetId?: string;
        totalUpdatedCells?: number;
        totalUpdatedColumns?: number;
        totalUpdatedRows?: number;
        totalUpdatedSheets?: number;
      }
      export interface BatchUpdateValuesRequest {
        data?: Sheets_v4.Schema.ValueRange[];
        includeValuesInResponse?: boolean;
        responseDateTimeRenderOption?: string;
        responseValueRenderOption?: string;
        valueInputOption?: string;
      }
      export interface BatchUpdateValuesResponse {
        responses?: Sheets_v4.Schema.UpdateValuesResponse[];
        spreadsheetId?: string;
        totalUpdatedCells?: number;
        totalUpdatedColumns?: number;
        totalUpdatedRows?: number;
        totalUpdatedSheets?: number;
      }
      export interface BooleanCondition {
        type?: string;
        values?: Sheets_v4.Schema.ConditionValue[];
      }
      export interface BooleanRule {
        condition?: Sheets_v4.Schema.BooleanCondition;
        format?: Sheets_v4.Schema.CellFormat;
      }
      export interface Border {
        color?: Sheets_v4.Schema.Color;
        style?: string;
        width?: number;
      }
      export interface Borders {
        bottom?: Sheets_v4.Schema.Border;
        left?: Sheets_v4.Schema.Border;
        right?: Sheets_v4.Schema.Border;
        top?: Sheets_v4.Schema.Border;
      }
      export interface BubbleChartSpec {
        bubbleBorderColor?: Sheets_v4.Schema.Color;
        bubbleLabels?: Sheets_v4.Schema.ChartData;
        bubbleMaxRadiusSize?: number;
        bubbleMinRadiusSize?: number;
        bubbleOpacity?: Number;
        bubbleSizes?: Sheets_v4.Schema.ChartData;
        bubbleTextStyle?: Sheets_v4.Schema.TextFormat;
        domain?: Sheets_v4.Schema.ChartData;
        groupIds?: Sheets_v4.Schema.ChartData;
        legendPosition?: string;
        series?: Sheets_v4.Schema.ChartData;
      }
      export interface CandlestickChartSpec {
        data?: Sheets_v4.Schema.CandlestickData[];
        domain?: Sheets_v4.Schema.CandlestickDomain;
      }
      export interface CandlestickData {
        closeSeries?: Sheets_v4.Schema.CandlestickSeries;
        highSeries?: Sheets_v4.Schema.CandlestickSeries;
        lowSeries?: Sheets_v4.Schema.CandlestickSeries;
        openSeries?: Sheets_v4.Schema.CandlestickSeries;
      }
      export interface CandlestickDomain {
        data?: Sheets_v4.Schema.ChartData;
        reversed?: boolean;
      }
      export interface CandlestickSeries {
        data?: Sheets_v4.Schema.ChartData;
      }
      export interface CellData {
        dataValidation?: Sheets_v4.Schema.DataValidationRule;
        effectiveFormat?: Sheets_v4.Schema.CellFormat;
        effectiveValue?: Sheets_v4.Schema.ExtendedValue;
        formattedValue?: string;
        hyperlink?: string;
        note?: string;
        pivotTable?: Sheets_v4.Schema.PivotTable;
        textFormatRuns?: Sheets_v4.Schema.TextFormatRun[];
        userEnteredFormat?: Sheets_v4.Schema.CellFormat;
        userEnteredValue?: Sheets_v4.Schema.ExtendedValue;
      }
      export interface CellFormat {
        backgroundColor?: Sheets_v4.Schema.Color;
        borders?: Sheets_v4.Schema.Borders;
        horizontalAlignment?: string;
        hyperlinkDisplayType?: string;
        numberFormat?: Sheets_v4.Schema.NumberFormat;
        padding?: Sheets_v4.Schema.Padding;
        textDirection?: string;
        textFormat?: Sheets_v4.Schema.TextFormat;
        textRotation?: Sheets_v4.Schema.TextRotation;
        verticalAlignment?: string;
        wrapStrategy?: string;
      }
      export interface ChartData {
        sourceRange?: Sheets_v4.Schema.ChartSourceRange;
      }
      export interface ChartSourceRange {
        sources?: Sheets_v4.Schema.GridRange[];
      }
      export interface ChartSpec {
        altText?: string;
        backgroundColor?: Sheets_v4.Schema.Color;
        basicChart?: Sheets_v4.Schema.BasicChartSpec;
        bubbleChart?: Sheets_v4.Schema.BubbleChartSpec;
        candlestickChart?: Sheets_v4.Schema.CandlestickChartSpec;
        fontName?: string;
        hiddenDimensionStrategy?: string;
        histogramChart?: Sheets_v4.Schema.HistogramChartSpec;
        maximized?: boolean;
        orgChart?: Sheets_v4.Schema.OrgChartSpec;
        pieChart?: Sheets_v4.Schema.PieChartSpec;
        subtitle?: string;
        subtitleTextFormat?: Sheets_v4.Schema.TextFormat;
        subtitleTextPosition?: Sheets_v4.Schema.TextPosition;
        title?: string;
        titleTextFormat?: Sheets_v4.Schema.TextFormat;
        titleTextPosition?: Sheets_v4.Schema.TextPosition;
        treemapChart?: Sheets_v4.Schema.TreemapChartSpec;
        waterfallChart?: Sheets_v4.Schema.WaterfallChartSpec;
      }
      export interface ClearBasicFilterRequest {
        sheetId?: number;
      }
      export interface ClearValuesResponse {
        clearedRange?: string;
        spreadsheetId?: string;
      }
      export interface Color {
        alpha?: Number;
        blue?: Number;
        green?: Number;
        red?: Number;
      }
      export interface ConditionValue {
        relativeDate?: string;
        userEnteredValue?: string;
      }
      export interface ConditionalFormatRule {
        booleanRule?: Sheets_v4.Schema.BooleanRule;
        gradientRule?: Sheets_v4.Schema.GradientRule;
        ranges?: Sheets_v4.Schema.GridRange[];
      }
      export interface CopyPasteRequest {
        destination?: Sheets_v4.Schema.GridRange;
        pasteOrientation?: string;
        pasteType?: string;
        source?: Sheets_v4.Schema.GridRange;
      }
      export interface CopySheetToAnotherSpreadsheetRequest {
        destinationSpreadsheetId?: string;
      }
      export interface CreateDeveloperMetadataRequest {
        developerMetadata?: Sheets_v4.Schema.DeveloperMetadata;
      }
      export interface CreateDeveloperMetadataResponse {
        developerMetadata?: Sheets_v4.Schema.DeveloperMetadata;
      }
      export interface CutPasteRequest {
        destination?: Sheets_v4.Schema.GridCoordinate;
        pasteType?: string;
        source?: Sheets_v4.Schema.GridRange;
      }
      export interface DataFilter {
        a1Range?: string;
        developerMetadataLookup?: Sheets_v4.Schema.DeveloperMetadataLookup;
        gridRange?: Sheets_v4.Schema.GridRange;
      }
      export interface DataFilterValueRange {
        dataFilter?: Sheets_v4.Schema.DataFilter;
        majorDimension?: string;
        values?: Object[][];
      }
      export interface DataValidationRule {
        condition?: Sheets_v4.Schema.BooleanCondition;
        inputMessage?: string;
        showCustomUi?: boolean;
        strict?: boolean;
      }
      export interface DateTimeRule {
        type?: string;
      }
      export interface DeleteBandingRequest {
        bandedRangeId?: number;
      }
      export interface DeleteConditionalFormatRuleRequest {
        index?: number;
        sheetId?: number;
      }
      export interface DeleteConditionalFormatRuleResponse {
        rule?: Sheets_v4.Schema.ConditionalFormatRule;
      }
      export interface DeleteDeveloperMetadataRequest {
        dataFilter?: Sheets_v4.Schema.DataFilter;
      }
      export interface DeleteDeveloperMetadataResponse {
        deletedDeveloperMetadata?: Sheets_v4.Schema.DeveloperMetadata[];
      }
      export interface DeleteDimensionGroupRequest {
        range?: Sheets_v4.Schema.DimensionRange;
      }
      export interface DeleteDimensionGroupResponse {
        dimensionGroups?: Sheets_v4.Schema.DimensionGroup[];
      }
      export interface DeleteDimensionRequest {
        range?: Sheets_v4.Schema.DimensionRange;
      }
      export interface DeleteEmbeddedObjectRequest {
        objectId?: number;
      }
      export interface DeleteFilterViewRequest {
        filterId?: number;
      }
      export interface DeleteNamedRangeRequest {
        namedRangeId?: string;
      }
      export interface DeleteProtectedRangeRequest {
        protectedRangeId?: number;
      }
      export interface DeleteRangeRequest {
        range?: Sheets_v4.Schema.GridRange;
        shiftDimension?: string;
      }
      export interface DeleteSheetRequest {
        sheetId?: number;
      }
      export interface DeveloperMetadata {
        location?: Sheets_v4.Schema.DeveloperMetadataLocation;
        metadataId?: number;
        metadataKey?: string;
        metadataValue?: string;
        visibility?: string;
      }
      export interface DeveloperMetadataLocation {
        dimensionRange?: Sheets_v4.Schema.DimensionRange;
        locationType?: string;
        sheetId?: number;
        spreadsheet?: boolean;
      }
      export interface DeveloperMetadataLookup {
        locationMatchingStrategy?: string;
        locationType?: string;
        metadataId?: number;
        metadataKey?: string;
        metadataLocation?: Sheets_v4.Schema.DeveloperMetadataLocation;
        metadataValue?: string;
        visibility?: string;
      }
      export interface DimensionGroup {
        collapsed?: boolean;
        depth?: number;
        range?: Sheets_v4.Schema.DimensionRange;
      }
      export interface DimensionProperties {
        developerMetadata?: Sheets_v4.Schema.DeveloperMetadata[];
        hiddenByFilter?: boolean;
        hiddenByUser?: boolean;
        pixelSize?: number;
      }
      export interface DimensionRange {
        dimension?: string;
        endIndex?: number;
        sheetId?: number;
        startIndex?: number;
      }
      export interface DuplicateFilterViewRequest {
        filterId?: number;
      }
      export interface DuplicateFilterViewResponse {
        filter?: Sheets_v4.Schema.FilterView;
      }
      export interface DuplicateSheetRequest {
        insertSheetIndex?: number;
        newSheetId?: number;
        newSheetName?: string;
        sourceSheetId?: number;
      }
      export interface DuplicateSheetResponse {
        properties?: Sheets_v4.Schema.SheetProperties;
      }
      export interface Editors {
        domainUsersCanEdit?: boolean;
        groups?: string[];
        users?: string[];
      }
      export interface EmbeddedChart {
        chartId?: number;
        position?: Sheets_v4.Schema.EmbeddedObjectPosition;
        spec?: Sheets_v4.Schema.ChartSpec;
      }
      export interface EmbeddedObjectPosition {
        newSheet?: boolean;
        overlayPosition?: Sheets_v4.Schema.OverlayPosition;
        sheetId?: number;
      }
      export interface ErrorValue {
        message?: string;
        type?: string;
      }
      export interface ExtendedValue {
        boolValue?: boolean;
        errorValue?: Sheets_v4.Schema.ErrorValue;
        formulaValue?: string;
        numberValue?: Number;
        stringValue?: string;
      }
      export interface FilterCriteria {
        condition?: Sheets_v4.Schema.BooleanCondition;
        hiddenValues?: string[];
      }
      export interface FilterView {
        criteria?: object;
        filterViewId?: number;
        namedRangeId?: string;
        range?: Sheets_v4.Schema.GridRange;
        sortSpecs?: Sheets_v4.Schema.SortSpec[];
        title?: string;
      }
      export interface FindReplaceRequest {
        allSheets?: boolean;
        find?: string;
        includeFormulas?: boolean;
        matchCase?: boolean;
        matchEntireCell?: boolean;
        range?: Sheets_v4.Schema.GridRange;
        replacement?: string;
        searchByRegex?: boolean;
        sheetId?: number;
      }
      export interface FindReplaceResponse {
        formulasChanged?: number;
        occurrencesChanged?: number;
        rowsChanged?: number;
        sheetsChanged?: number;
        valuesChanged?: number;
      }
      export interface GetSpreadsheetByDataFilterRequest {
        dataFilters?: Sheets_v4.Schema.DataFilter[];
        includeGridData?: boolean;
      }
      export interface GradientRule {
        maxpoint?: Sheets_v4.Schema.InterpolationPoint;
        midpoint?: Sheets_v4.Schema.InterpolationPoint;
        minpoint?: Sheets_v4.Schema.InterpolationPoint;
      }
      export interface GridCoordinate {
        columnIndex?: number;
        rowIndex?: number;
        sheetId?: number;
      }
      export interface GridData {
        columnMetadata?: Sheets_v4.Schema.DimensionProperties[];
        rowData?: Sheets_v4.Schema.RowData[];
        rowMetadata?: Sheets_v4.Schema.DimensionProperties[];
        startColumn?: number;
        startRow?: number;
      }
      export interface GridProperties {
        columnCount?: number;
        columnGroupControlAfter?: boolean;
        frozenColumnCount?: number;
        frozenRowCount?: number;
        hideGridlines?: boolean;
        rowCount?: number;
        rowGroupControlAfter?: boolean;
      }
      export interface GridRange {
        endColumnIndex?: number;
        endRowIndex?: number;
        sheetId?: number;
        startColumnIndex?: number;
        startRowIndex?: number;
      }
      export interface HistogramChartSpec {
        bucketSize?: Number;
        legendPosition?: string;
        outlierPercentile?: Number;
        series?: Sheets_v4.Schema.HistogramSeries[];
        showItemDividers?: boolean;
      }
      export interface HistogramRule {
        end?: Number;
        interval?: Number;
        start?: Number;
      }
      export interface HistogramSeries {
        barColor?: Sheets_v4.Schema.Color;
        data?: Sheets_v4.Schema.ChartData;
      }
      export interface InsertDimensionRequest {
        inheritFromBefore?: boolean;
        range?: Sheets_v4.Schema.DimensionRange;
      }
      export interface InsertRangeRequest {
        range?: Sheets_v4.Schema.GridRange;
        shiftDimension?: string;
      }
      export interface InterpolationPoint {
        color?: Sheets_v4.Schema.Color;
        type?: string;
        value?: string;
      }
      export interface IterativeCalculationSettings {
        convergenceThreshold?: Number;
        maxIterations?: number;
      }
      export interface LineStyle {
        type?: string;
        width?: number;
      }
      export interface ManualRule {
        groups?: Sheets_v4.Schema.ManualRuleGroup[];
      }
      export interface ManualRuleGroup {
        groupName?: Sheets_v4.Schema.ExtendedValue;
        items?: Sheets_v4.Schema.ExtendedValue[];
      }
      export interface MatchedDeveloperMetadata {
        dataFilters?: Sheets_v4.Schema.DataFilter[];
        developerMetadata?: Sheets_v4.Schema.DeveloperMetadata;
      }
      export interface MatchedValueRange {
        dataFilters?: Sheets_v4.Schema.DataFilter[];
        valueRange?: Sheets_v4.Schema.ValueRange;
      }
      export interface MergeCellsRequest {
        mergeType?: string;
        range?: Sheets_v4.Schema.GridRange;
      }
      export interface MoveDimensionRequest {
        destinationIndex?: number;
        source?: Sheets_v4.Schema.DimensionRange;
      }
      export interface NamedRange {
        name?: string;
        namedRangeId?: string;
        range?: Sheets_v4.Schema.GridRange;
      }
      export interface NumberFormat {
        pattern?: string;
        type?: string;
      }
      export interface OrgChartSpec {
        labels?: Sheets_v4.Schema.ChartData;
        nodeColor?: Sheets_v4.Schema.Color;
        nodeSize?: string;
        parentLabels?: Sheets_v4.Schema.ChartData;
        selectedNodeColor?: Sheets_v4.Schema.Color;
        tooltips?: Sheets_v4.Schema.ChartData;
      }
      export interface OverlayPosition {
        anchorCell?: Sheets_v4.Schema.GridCoordinate;
        heightPixels?: number;
        offsetXPixels?: number;
        offsetYPixels?: number;
        widthPixels?: number;
      }
      export interface Padding {
        bottom?: number;
        left?: number;
        right?: number;
        top?: number;
      }
      export interface PasteDataRequest {
        coordinate?: Sheets_v4.Schema.GridCoordinate;
        data?: string;
        delimiter?: string;
        html?: boolean;
        type?: string;
      }
      export interface PieChartSpec {
        domain?: Sheets_v4.Schema.ChartData;
        legendPosition?: string;
        pieHole?: Number;
        series?: Sheets_v4.Schema.ChartData;
        threeDimensional?: boolean;
      }
      export interface PivotFilterCriteria {
        visibleValues?: string[];
      }
      export interface PivotGroup {
        groupRule?: Sheets_v4.Schema.PivotGroupRule;
        label?: string;
        repeatHeadings?: boolean;
        showTotals?: boolean;
        sortOrder?: string;
        sourceColumnOffset?: number;
        valueBucket?: Sheets_v4.Schema.PivotGroupSortValueBucket;
        valueMetadata?: Sheets_v4.Schema.PivotGroupValueMetadata[];
      }
      export interface PivotGroupRule {
        dateTimeRule?: Sheets_v4.Schema.DateTimeRule;
        histogramRule?: Sheets_v4.Schema.HistogramRule;
        manualRule?: Sheets_v4.Schema.ManualRule;
      }
      export interface PivotGroupSortValueBucket {
        buckets?: Sheets_v4.Schema.ExtendedValue[];
        valuesIndex?: number;
      }
      export interface PivotGroupValueMetadata {
        collapsed?: boolean;
        value?: Sheets_v4.Schema.ExtendedValue;
      }
      export interface PivotTable {
        columns?: Sheets_v4.Schema.PivotGroup[];
        criteria?: object;
        rows?: Sheets_v4.Schema.PivotGroup[];
        source?: Sheets_v4.Schema.GridRange;
        valueLayout?: string;
        values?: Sheets_v4.Schema.PivotValue[];
      }
      export interface PivotValue {
        calculatedDisplayType?: string;
        formula?: string;
        name?: string;
        sourceColumnOffset?: number;
        summarizeFunction?: string;
      }
      export interface ProtectedRange {
        description?: string;
        editors?: Sheets_v4.Schema.Editors;
        namedRangeId?: string;
        protectedRangeId?: number;
        range?: Sheets_v4.Schema.GridRange;
        requestingUserCanEdit?: boolean;
        unprotectedRanges?: Sheets_v4.Schema.GridRange[];
        warningOnly?: boolean;
      }
      export interface RandomizeRangeRequest {
        range?: Sheets_v4.Schema.GridRange;
      }
      export interface RepeatCellRequest {
        cell?: Sheets_v4.Schema.CellData;
        fields?: string;
        range?: Sheets_v4.Schema.GridRange;
      }
      export interface Request {
        addBanding?: Sheets_v4.Schema.AddBandingRequest;
        addChart?: Sheets_v4.Schema.AddChartRequest;
        addConditionalFormatRule?: Sheets_v4.Schema.AddConditionalFormatRuleRequest;
        addDimensionGroup?: Sheets_v4.Schema.AddDimensionGroupRequest;
        addFilterView?: Sheets_v4.Schema.AddFilterViewRequest;
        addNamedRange?: Sheets_v4.Schema.AddNamedRangeRequest;
        addProtectedRange?: Sheets_v4.Schema.AddProtectedRangeRequest;
        addSheet?: Sheets_v4.Schema.AddSheetRequest;
        appendCells?: Sheets_v4.Schema.AppendCellsRequest;
        appendDimension?: Sheets_v4.Schema.AppendDimensionRequest;
        autoFill?: Sheets_v4.Schema.AutoFillRequest;
        autoResizeDimensions?: Sheets_v4.Schema.AutoResizeDimensionsRequest;
        clearBasicFilter?: Sheets_v4.Schema.ClearBasicFilterRequest;
        copyPaste?: Sheets_v4.Schema.CopyPasteRequest;
        createDeveloperMetadata?: Sheets_v4.Schema.CreateDeveloperMetadataRequest;
        cutPaste?: Sheets_v4.Schema.CutPasteRequest;
        deleteBanding?: Sheets_v4.Schema.DeleteBandingRequest;
        deleteConditionalFormatRule?: Sheets_v4.Schema.DeleteConditionalFormatRuleRequest;
        deleteDeveloperMetadata?: Sheets_v4.Schema.DeleteDeveloperMetadataRequest;
        deleteDimension?: Sheets_v4.Schema.DeleteDimensionRequest;
        deleteDimensionGroup?: Sheets_v4.Schema.DeleteDimensionGroupRequest;
        deleteEmbeddedObject?: Sheets_v4.Schema.DeleteEmbeddedObjectRequest;
        deleteFilterView?: Sheets_v4.Schema.DeleteFilterViewRequest;
        deleteNamedRange?: Sheets_v4.Schema.DeleteNamedRangeRequest;
        deleteProtectedRange?: Sheets_v4.Schema.DeleteProtectedRangeRequest;
        deleteRange?: Sheets_v4.Schema.DeleteRangeRequest;
        deleteSheet?: Sheets_v4.Schema.DeleteSheetRequest;
        duplicateFilterView?: Sheets_v4.Schema.DuplicateFilterViewRequest;
        duplicateSheet?: Sheets_v4.Schema.DuplicateSheetRequest;
        findReplace?: Sheets_v4.Schema.FindReplaceRequest;
        insertDimension?: Sheets_v4.Schema.InsertDimensionRequest;
        insertRange?: Sheets_v4.Schema.InsertRangeRequest;
        mergeCells?: Sheets_v4.Schema.MergeCellsRequest;
        moveDimension?: Sheets_v4.Schema.MoveDimensionRequest;
        pasteData?: Sheets_v4.Schema.PasteDataRequest;
        randomizeRange?: Sheets_v4.Schema.RandomizeRangeRequest;
        repeatCell?: Sheets_v4.Schema.RepeatCellRequest;
        setBasicFilter?: Sheets_v4.Schema.SetBasicFilterRequest;
        setDataValidation?: Sheets_v4.Schema.SetDataValidationRequest;
        sortRange?: Sheets_v4.Schema.SortRangeRequest;
        textToColumns?: Sheets_v4.Schema.TextToColumnsRequest;
        unmergeCells?: Sheets_v4.Schema.UnmergeCellsRequest;
        updateBanding?: Sheets_v4.Schema.UpdateBandingRequest;
        updateBorders?: Sheets_v4.Schema.UpdateBordersRequest;
        updateCells?: Sheets_v4.Schema.UpdateCellsRequest;
        updateChartSpec?: Sheets_v4.Schema.UpdateChartSpecRequest;
        updateConditionalFormatRule?: Sheets_v4.Schema.UpdateConditionalFormatRuleRequest;
        updateDeveloperMetadata?: Sheets_v4.Schema.UpdateDeveloperMetadataRequest;
        updateDimensionGroup?: Sheets_v4.Schema.UpdateDimensionGroupRequest;
        updateDimensionProperties?: Sheets_v4.Schema.UpdateDimensionPropertiesRequest;
        updateEmbeddedObjectPosition?: Sheets_v4.Schema.UpdateEmbeddedObjectPositionRequest;
        updateFilterView?: Sheets_v4.Schema.UpdateFilterViewRequest;
        updateNamedRange?: Sheets_v4.Schema.UpdateNamedRangeRequest;
        updateProtectedRange?: Sheets_v4.Schema.UpdateProtectedRangeRequest;
        updateSheetProperties?: Sheets_v4.Schema.UpdateSheetPropertiesRequest;
        updateSpreadsheetProperties?: Sheets_v4.Schema.UpdateSpreadsheetPropertiesRequest;
      }
      export interface Response {
        addBanding?: Sheets_v4.Schema.AddBandingResponse;
        addChart?: Sheets_v4.Schema.AddChartResponse;
        addDimensionGroup?: Sheets_v4.Schema.AddDimensionGroupResponse;
        addFilterView?: Sheets_v4.Schema.AddFilterViewResponse;
        addNamedRange?: Sheets_v4.Schema.AddNamedRangeResponse;
        addProtectedRange?: Sheets_v4.Schema.AddProtectedRangeResponse;
        addSheet?: Sheets_v4.Schema.AddSheetResponse;
        createDeveloperMetadata?: Sheets_v4.Schema.CreateDeveloperMetadataResponse;
        deleteConditionalFormatRule?: Sheets_v4.Schema.DeleteConditionalFormatRuleResponse;
        deleteDeveloperMetadata?: Sheets_v4.Schema.DeleteDeveloperMetadataResponse;
        deleteDimensionGroup?: Sheets_v4.Schema.DeleteDimensionGroupResponse;
        duplicateFilterView?: Sheets_v4.Schema.DuplicateFilterViewResponse;
        duplicateSheet?: Sheets_v4.Schema.DuplicateSheetResponse;
        findReplace?: Sheets_v4.Schema.FindReplaceResponse;
        updateConditionalFormatRule?: Sheets_v4.Schema.UpdateConditionalFormatRuleResponse;
        updateDeveloperMetadata?: Sheets_v4.Schema.UpdateDeveloperMetadataResponse;
        updateEmbeddedObjectPosition?: Sheets_v4.Schema.UpdateEmbeddedObjectPositionResponse;
      }
      export interface RowData {
        values?: Sheets_v4.Schema.CellData[];
      }
      export interface SearchDeveloperMetadataRequest {
        dataFilters?: Sheets_v4.Schema.DataFilter[];
      }
      export interface SearchDeveloperMetadataResponse {
        matchedDeveloperMetadata?: Sheets_v4.Schema.MatchedDeveloperMetadata[];
      }
      export interface SetBasicFilterRequest {
        filter?: Sheets_v4.Schema.BasicFilter;
      }
      export interface SetDataValidationRequest {
        range?: Sheets_v4.Schema.GridRange;
        rule?: Sheets_v4.Schema.DataValidationRule;
      }
      export interface Sheet {
        bandedRanges?: Sheets_v4.Schema.BandedRange[];
        basicFilter?: Sheets_v4.Schema.BasicFilter;
        charts?: Sheets_v4.Schema.EmbeddedChart[];
        columnGroups?: Sheets_v4.Schema.DimensionGroup[];
        conditionalFormats?: Sheets_v4.Schema.ConditionalFormatRule[];
        data?: Sheets_v4.Schema.GridData[];
        developerMetadata?: Sheets_v4.Schema.DeveloperMetadata[];
        filterViews?: Sheets_v4.Schema.FilterView[];
        merges?: Sheets_v4.Schema.GridRange[];
        properties?: Sheets_v4.Schema.SheetProperties;
        protectedRanges?: Sheets_v4.Schema.ProtectedRange[];
        rowGroups?: Sheets_v4.Schema.DimensionGroup[];
      }
      export interface SheetProperties {
        gridProperties?: Sheets_v4.Schema.GridProperties;
        hidden?: boolean;
        index?: number;
        rightToLeft?: boolean;
        sheetId?: number;
        sheetType?: string;
        tabColor?: Sheets_v4.Schema.Color;
        title?: string;
      }
      export interface SortRangeRequest {
        range?: Sheets_v4.Schema.GridRange;
        sortSpecs?: Sheets_v4.Schema.SortSpec[];
      }
      export interface SortSpec {
        dimensionIndex?: number;
        sortOrder?: string;
      }
      export interface SourceAndDestination {
        dimension?: string;
        fillLength?: number;
        source?: Sheets_v4.Schema.GridRange;
      }
      export interface Spreadsheet {
        developerMetadata?: Sheets_v4.Schema.DeveloperMetadata[];
        namedRanges?: Sheets_v4.Schema.NamedRange[];
        properties?: Sheets_v4.Schema.SpreadsheetProperties;
        sheets?: Sheets_v4.Schema.Sheet[];
        spreadsheetId?: string;
        spreadsheetUrl?: string;
      }
      export interface SpreadsheetProperties {
        autoRecalc?: string;
        defaultFormat?: Sheets_v4.Schema.CellFormat;
        iterativeCalculationSettings?: Sheets_v4.Schema.IterativeCalculationSettings;
        locale?: string;
        timeZone?: string;
        title?: string;
      }
      export interface TextFormat {
        bold?: boolean;
        fontFamily?: string;
        fontSize?: number;
        foregroundColor?: Sheets_v4.Schema.Color;
        italic?: boolean;
        strikethrough?: boolean;
        underline?: boolean;
      }
      export interface TextFormatRun {
        format?: Sheets_v4.Schema.TextFormat;
        startIndex?: number;
      }
      export interface TextPosition {
        horizontalAlignment?: string;
      }
      export interface TextRotation {
        angle?: number;
        vertical?: boolean;
      }
      export interface TextToColumnsRequest {
        delimiter?: string;
        delimiterType?: string;
        source?: Sheets_v4.Schema.GridRange;
      }
      export interface TreemapChartColorScale {
        maxValueColor?: Sheets_v4.Schema.Color;
        midValueColor?: Sheets_v4.Schema.Color;
        minValueColor?: Sheets_v4.Schema.Color;
        noDataColor?: Sheets_v4.Schema.Color;
      }
      export interface TreemapChartSpec {
        colorData?: Sheets_v4.Schema.ChartData;
        colorScale?: Sheets_v4.Schema.TreemapChartColorScale;
        headerColor?: Sheets_v4.Schema.Color;
        hideTooltips?: boolean;
        hintedLevels?: number;
        labels?: Sheets_v4.Schema.ChartData;
        levels?: number;
        maxValue?: Number;
        minValue?: Number;
        parentLabels?: Sheets_v4.Schema.ChartData;
        sizeData?: Sheets_v4.Schema.ChartData;
        textFormat?: Sheets_v4.Schema.TextFormat;
      }
      export interface UnmergeCellsRequest {
        range?: Sheets_v4.Schema.GridRange;
      }
      export interface UpdateBandingRequest {
        bandedRange?: Sheets_v4.Schema.BandedRange;
        fields?: string;
      }
      export interface UpdateBordersRequest {
        bottom?: Sheets_v4.Schema.Border;
        innerHorizontal?: Sheets_v4.Schema.Border;
        innerVertical?: Sheets_v4.Schema.Border;
        left?: Sheets_v4.Schema.Border;
        range?: Sheets_v4.Schema.GridRange;
        right?: Sheets_v4.Schema.Border;
        top?: Sheets_v4.Schema.Border;
      }
      export interface UpdateCellsRequest {
        fields?: string;
        range?: Sheets_v4.Schema.GridRange;
        rows?: Sheets_v4.Schema.RowData[];
        start?: Sheets_v4.Schema.GridCoordinate;
      }
      export interface UpdateChartSpecRequest {
        chartId?: number;
        spec?: Sheets_v4.Schema.ChartSpec;
      }
      export interface UpdateConditionalFormatRuleRequest {
        index?: number;
        newIndex?: number;
        rule?: Sheets_v4.Schema.ConditionalFormatRule;
        sheetId?: number;
      }
      export interface UpdateConditionalFormatRuleResponse {
        newIndex?: number;
        newRule?: Sheets_v4.Schema.ConditionalFormatRule;
        oldIndex?: number;
        oldRule?: Sheets_v4.Schema.ConditionalFormatRule;
      }
      export interface UpdateDeveloperMetadataRequest {
        dataFilters?: Sheets_v4.Schema.DataFilter[];
        developerMetadata?: Sheets_v4.Schema.DeveloperMetadata;
        fields?: string;
      }
      export interface UpdateDeveloperMetadataResponse {
        developerMetadata?: Sheets_v4.Schema.DeveloperMetadata[];
      }
      export interface UpdateDimensionGroupRequest {
        dimensionGroup?: Sheets_v4.Schema.DimensionGroup;
        fields?: string;
      }
      export interface UpdateDimensionPropertiesRequest {
        fields?: string;
        properties?: Sheets_v4.Schema.DimensionProperties;
        range?: Sheets_v4.Schema.DimensionRange;
      }
      export interface UpdateEmbeddedObjectPositionRequest {
        fields?: string;
        newPosition?: Sheets_v4.Schema.EmbeddedObjectPosition;
        objectId?: number;
      }
      export interface UpdateEmbeddedObjectPositionResponse {
        position?: Sheets_v4.Schema.EmbeddedObjectPosition;
      }
      export interface UpdateFilterViewRequest {
        fields?: string;
        filter?: Sheets_v4.Schema.FilterView;
      }
      export interface UpdateNamedRangeRequest {
        fields?: string;
        namedRange?: Sheets_v4.Schema.NamedRange;
      }
      export interface UpdateProtectedRangeRequest {
        fields?: string;
        protectedRange?: Sheets_v4.Schema.ProtectedRange;
      }
      export interface UpdateSheetPropertiesRequest {
        fields?: string;
        properties?: Sheets_v4.Schema.SheetProperties;
      }
      export interface UpdateSpreadsheetPropertiesRequest {
        fields?: string;
        properties?: Sheets_v4.Schema.SpreadsheetProperties;
      }
      export interface UpdateValuesByDataFilterResponse {
        dataFilter?: Sheets_v4.Schema.DataFilter;
        updatedCells?: number;
        updatedColumns?: number;
        updatedData?: Sheets_v4.Schema.ValueRange;
        updatedRange?: string;
        updatedRows?: number;
      }
      export interface UpdateValuesResponse {
        spreadsheetId?: string;
        updatedCells?: number;
        updatedColumns?: number;
        updatedData?: Sheets_v4.Schema.ValueRange;
        updatedRange?: string;
        updatedRows?: number;
      }
      export interface ValueRange {
        majorDimension?: string;
        range?: string;
        values?: Object[][];
      }
      export interface WaterfallChartColumnStyle {
        color?: Sheets_v4.Schema.Color;
        label?: string;
      }
      export interface WaterfallChartCustomSubtotal {
        dataIsSubtotal?: boolean;
        label?: string;
        subtotalIndex?: number;
      }
      export interface WaterfallChartDomain {
        data?: Sheets_v4.Schema.ChartData;
        reversed?: boolean;
      }
      export interface WaterfallChartSeries {
        customSubtotals?: Sheets_v4.Schema.WaterfallChartCustomSubtotal[];
        data?: Sheets_v4.Schema.ChartData;
        hideTrailingSubtotal?: boolean;
        negativeColumnsStyle?: Sheets_v4.Schema.WaterfallChartColumnStyle;
        positiveColumnsStyle?: Sheets_v4.Schema.WaterfallChartColumnStyle;
        subtotalColumnsStyle?: Sheets_v4.Schema.WaterfallChartColumnStyle;
      }
      export interface WaterfallChartSpec {
        connectorLineStyle?: Sheets_v4.Schema.LineStyle;
        domain?: Sheets_v4.Schema.WaterfallChartDomain;
        firstValueIsTotal?: boolean;
        hideConnectorLines?: boolean;
        series?: Sheets_v4.Schema.WaterfallChartSeries[];
        stackedType?: string;
      }
    }
  }
  export interface Sheets_v4 {
    Spreadsheets?: Sheets_v4.Collection.SpreadsheetsCollection;
    // Create a new instance of AddBandingRequest
    newAddBandingRequest(): Sheets_v4.Schema.AddBandingRequest;
    // Create a new instance of AddChartRequest
    newAddChartRequest(): Sheets_v4.Schema.AddChartRequest;
    // Create a new instance of AddConditionalFormatRuleRequest
    newAddConditionalFormatRuleRequest(): Sheets_v4.Schema.AddConditionalFormatRuleRequest;
    // Create a new instance of AddDimensionGroupRequest
    newAddDimensionGroupRequest(): Sheets_v4.Schema.AddDimensionGroupRequest;
    // Create a new instance of AddFilterViewRequest
    newAddFilterViewRequest(): Sheets_v4.Schema.AddFilterViewRequest;
    // Create a new instance of AddNamedRangeRequest
    newAddNamedRangeRequest(): Sheets_v4.Schema.AddNamedRangeRequest;
    // Create a new instance of AddProtectedRangeRequest
    newAddProtectedRangeRequest(): Sheets_v4.Schema.AddProtectedRangeRequest;
    // Create a new instance of AddSheetRequest
    newAddSheetRequest(): Sheets_v4.Schema.AddSheetRequest;
    // Create a new instance of AppendCellsRequest
    newAppendCellsRequest(): Sheets_v4.Schema.AppendCellsRequest;
    // Create a new instance of AppendDimensionRequest
    newAppendDimensionRequest(): Sheets_v4.Schema.AppendDimensionRequest;
    // Create a new instance of AutoFillRequest
    newAutoFillRequest(): Sheets_v4.Schema.AutoFillRequest;
    // Create a new instance of AutoResizeDimensionsRequest
    newAutoResizeDimensionsRequest(): Sheets_v4.Schema.AutoResizeDimensionsRequest;
    // Create a new instance of BandedRange
    newBandedRange(): Sheets_v4.Schema.BandedRange;
    // Create a new instance of BandingProperties
    newBandingProperties(): Sheets_v4.Schema.BandingProperties;
    // Create a new instance of BasicChartAxis
    newBasicChartAxis(): Sheets_v4.Schema.BasicChartAxis;
    // Create a new instance of BasicChartDomain
    newBasicChartDomain(): Sheets_v4.Schema.BasicChartDomain;
    // Create a new instance of BasicChartSeries
    newBasicChartSeries(): Sheets_v4.Schema.BasicChartSeries;
    // Create a new instance of BasicChartSpec
    newBasicChartSpec(): Sheets_v4.Schema.BasicChartSpec;
    // Create a new instance of BasicFilter
    newBasicFilter(): Sheets_v4.Schema.BasicFilter;
    // Create a new instance of BatchClearValuesByDataFilterRequest
    newBatchClearValuesByDataFilterRequest(): Sheets_v4.Schema.BatchClearValuesByDataFilterRequest;
    // Create a new instance of BatchClearValuesRequest
    newBatchClearValuesRequest(): Sheets_v4.Schema.BatchClearValuesRequest;
    // Create a new instance of BatchGetValuesByDataFilterRequest
    newBatchGetValuesByDataFilterRequest(): Sheets_v4.Schema.BatchGetValuesByDataFilterRequest;
    // Create a new instance of BatchUpdateSpreadsheetRequest
    newBatchUpdateSpreadsheetRequest(): Sheets_v4.Schema.BatchUpdateSpreadsheetRequest;
    // Create a new instance of BatchUpdateValuesByDataFilterRequest
    newBatchUpdateValuesByDataFilterRequest(): Sheets_v4.Schema.BatchUpdateValuesByDataFilterRequest;
    // Create a new instance of BatchUpdateValuesRequest
    newBatchUpdateValuesRequest(): Sheets_v4.Schema.BatchUpdateValuesRequest;
    // Create a new instance of BooleanCondition
    newBooleanCondition(): Sheets_v4.Schema.BooleanCondition;
    // Create a new instance of BooleanRule
    newBooleanRule(): Sheets_v4.Schema.BooleanRule;
    // Create a new instance of Border
    newBorder(): Sheets_v4.Schema.Border;
    // Create a new instance of Borders
    newBorders(): Sheets_v4.Schema.Borders;
    // Create a new instance of BubbleChartSpec
    newBubbleChartSpec(): Sheets_v4.Schema.BubbleChartSpec;
    // Create a new instance of CandlestickChartSpec
    newCandlestickChartSpec(): Sheets_v4.Schema.CandlestickChartSpec;
    // Create a new instance of CandlestickData
    newCandlestickData(): Sheets_v4.Schema.CandlestickData;
    // Create a new instance of CandlestickDomain
    newCandlestickDomain(): Sheets_v4.Schema.CandlestickDomain;
    // Create a new instance of CandlestickSeries
    newCandlestickSeries(): Sheets_v4.Schema.CandlestickSeries;
    // Create a new instance of CellData
    newCellData(): Sheets_v4.Schema.CellData;
    // Create a new instance of CellFormat
    newCellFormat(): Sheets_v4.Schema.CellFormat;
    // Create a new instance of ChartData
    newChartData(): Sheets_v4.Schema.ChartData;
    // Create a new instance of ChartSourceRange
    newChartSourceRange(): Sheets_v4.Schema.ChartSourceRange;
    // Create a new instance of ChartSpec
    newChartSpec(): Sheets_v4.Schema.ChartSpec;
    // Create a new instance of ClearBasicFilterRequest
    newClearBasicFilterRequest(): Sheets_v4.Schema.ClearBasicFilterRequest;
    // Create a new instance of ClearValuesRequest
    newClearValuesRequest(): any; // Schema.ClearValuesRequest;
    // Create a new instance of Color
    newColor(): Sheets_v4.Schema.Color;
    // Create a new instance of ConditionValue
    newConditionValue(): Sheets_v4.Schema.ConditionValue;
    // Create a new instance of ConditionalFormatRule
    newConditionalFormatRule(): Sheets_v4.Schema.ConditionalFormatRule;
    // Create a new instance of CopyPasteRequest
    newCopyPasteRequest(): Sheets_v4.Schema.CopyPasteRequest;
    // Create a new instance of CopySheetToAnotherSpreadsheetRequest
    newCopySheetToAnotherSpreadsheetRequest(): Sheets_v4.Schema.CopySheetToAnotherSpreadsheetRequest;
    // Create a new instance of CreateDeveloperMetadataRequest
    newCreateDeveloperMetadataRequest(): Sheets_v4.Schema.CreateDeveloperMetadataRequest;
    // Create a new instance of CutPasteRequest
    newCutPasteRequest(): Sheets_v4.Schema.CutPasteRequest;
    // Create a new instance of DataFilter
    newDataFilter(): Sheets_v4.Schema.DataFilter;
    // Create a new instance of DataFilterValueRange
    newDataFilterValueRange(): Sheets_v4.Schema.DataFilterValueRange;
    // Create a new instance of DataValidationRule
    newDataValidationRule(): Sheets_v4.Schema.DataValidationRule;
    // Create a new instance of DateTimeRule
    newDateTimeRule(): Sheets_v4.Schema.DateTimeRule;
    // Create a new instance of DeleteBandingRequest
    newDeleteBandingRequest(): Sheets_v4.Schema.DeleteBandingRequest;
    // Create a new instance of DeleteConditionalFormatRuleRequest
    newDeleteConditionalFormatRuleRequest(): Sheets_v4.Schema.DeleteConditionalFormatRuleRequest;
    // Create a new instance of DeleteDeveloperMetadataRequest
    newDeleteDeveloperMetadataRequest(): Sheets_v4.Schema.DeleteDeveloperMetadataRequest;
    // Create a new instance of DeleteDimensionGroupRequest
    newDeleteDimensionGroupRequest(): Sheets_v4.Schema.DeleteDimensionGroupRequest;
    // Create a new instance of DeleteDimensionRequest
    newDeleteDimensionRequest(): Sheets_v4.Schema.DeleteDimensionRequest;
    // Create a new instance of DeleteEmbeddedObjectRequest
    newDeleteEmbeddedObjectRequest(): Sheets_v4.Schema.DeleteEmbeddedObjectRequest;
    // Create a new instance of DeleteFilterViewRequest
    newDeleteFilterViewRequest(): Sheets_v4.Schema.DeleteFilterViewRequest;
    // Create a new instance of DeleteNamedRangeRequest
    newDeleteNamedRangeRequest(): Sheets_v4.Schema.DeleteNamedRangeRequest;
    // Create a new instance of DeleteProtectedRangeRequest
    newDeleteProtectedRangeRequest(): Sheets_v4.Schema.DeleteProtectedRangeRequest;
    // Create a new instance of DeleteRangeRequest
    newDeleteRangeRequest(): Sheets_v4.Schema.DeleteRangeRequest;
    // Create a new instance of DeleteSheetRequest
    newDeleteSheetRequest(): Sheets_v4.Schema.DeleteSheetRequest;
    // Create a new instance of DeveloperMetadata
    newDeveloperMetadata(): Sheets_v4.Schema.DeveloperMetadata;
    // Create a new instance of DeveloperMetadataLocation
    newDeveloperMetadataLocation(): Sheets_v4.Schema.DeveloperMetadataLocation;
    // Create a new instance of DeveloperMetadataLookup
    newDeveloperMetadataLookup(): Sheets_v4.Schema.DeveloperMetadataLookup;
    // Create a new instance of DimensionGroup
    newDimensionGroup(): Sheets_v4.Schema.DimensionGroup;
    // Create a new instance of DimensionProperties
    newDimensionProperties(): Sheets_v4.Schema.DimensionProperties;
    // Create a new instance of DimensionRange
    newDimensionRange(): Sheets_v4.Schema.DimensionRange;
    // Create a new instance of DuplicateFilterViewRequest
    newDuplicateFilterViewRequest(): Sheets_v4.Schema.DuplicateFilterViewRequest;
    // Create a new instance of DuplicateSheetRequest
    newDuplicateSheetRequest(): Sheets_v4.Schema.DuplicateSheetRequest;
    // Create a new instance of Editors
    newEditors(): Sheets_v4.Schema.Editors;
    // Create a new instance of EmbeddedChart
    newEmbeddedChart(): Sheets_v4.Schema.EmbeddedChart;
    // Create a new instance of EmbeddedObjectPosition
    newEmbeddedObjectPosition(): Sheets_v4.Schema.EmbeddedObjectPosition;
    // Create a new instance of ErrorValue
    newErrorValue(): Sheets_v4.Schema.ErrorValue;
    // Create a new instance of ExtendedValue
    newExtendedValue(): Sheets_v4.Schema.ExtendedValue;
    // Create a new instance of FilterView
    newFilterView(): Sheets_v4.Schema.FilterView;
    // Create a new instance of FindReplaceRequest
    newFindReplaceRequest(): Sheets_v4.Schema.FindReplaceRequest;
    // Create a new instance of GetSpreadsheetByDataFilterRequest
    newGetSpreadsheetByDataFilterRequest(): Sheets_v4.Schema.GetSpreadsheetByDataFilterRequest;
    // Create a new instance of GradientRule
    newGradientRule(): Sheets_v4.Schema.GradientRule;
    // Create a new instance of GridCoordinate
    newGridCoordinate(): Sheets_v4.Schema.GridCoordinate;
    // Create a new instance of GridData
    newGridData(): Sheets_v4.Schema.GridData;
    // Create a new instance of GridProperties
    newGridProperties(): Sheets_v4.Schema.GridProperties;
    // Create a new instance of GridRange
    newGridRange(): Sheets_v4.Schema.GridRange;
    // Create a new instance of HistogramChartSpec
    newHistogramChartSpec(): Sheets_v4.Schema.HistogramChartSpec;
    // Create a new instance of HistogramRule
    newHistogramRule(): Sheets_v4.Schema.HistogramRule;
    // Create a new instance of HistogramSeries
    newHistogramSeries(): Sheets_v4.Schema.HistogramSeries;
    // Create a new instance of InsertDimensionRequest
    newInsertDimensionRequest(): Sheets_v4.Schema.InsertDimensionRequest;
    // Create a new instance of InsertRangeRequest
    newInsertRangeRequest(): Sheets_v4.Schema.InsertRangeRequest;
    // Create a new instance of InterpolationPoint
    newInterpolationPoint(): Sheets_v4.Schema.InterpolationPoint;
    // Create a new instance of IterativeCalculationSettings
    newIterativeCalculationSettings(): Sheets_v4.Schema.IterativeCalculationSettings;
    // Create a new instance of LineStyle
    newLineStyle(): Sheets_v4.Schema.LineStyle;
    // Create a new instance of ManualRule
    newManualRule(): Sheets_v4.Schema.ManualRule;
    // Create a new instance of ManualRuleGroup
    newManualRuleGroup(): Sheets_v4.Schema.ManualRuleGroup;
    // Create a new instance of MergeCellsRequest
    newMergeCellsRequest(): Sheets_v4.Schema.MergeCellsRequest;
    // Create a new instance of MoveDimensionRequest
    newMoveDimensionRequest(): Sheets_v4.Schema.MoveDimensionRequest;
    // Create a new instance of NamedRange
    newNamedRange(): Sheets_v4.Schema.NamedRange;
    // Create a new instance of NumberFormat
    newNumberFormat(): Sheets_v4.Schema.NumberFormat;
    // Create a new instance of OrgChartSpec
    newOrgChartSpec(): Sheets_v4.Schema.OrgChartSpec;
    // Create a new instance of OverlayPosition
    newOverlayPosition(): Sheets_v4.Schema.OverlayPosition;
    // Create a new instance of Padding
    newPadding(): Sheets_v4.Schema.Padding;
    // Create a new instance of PasteDataRequest
    newPasteDataRequest(): Sheets_v4.Schema.PasteDataRequest;
    // Create a new instance of PieChartSpec
    newPieChartSpec(): Sheets_v4.Schema.PieChartSpec;
    // Create a new instance of PivotGroup
    newPivotGroup(): Sheets_v4.Schema.PivotGroup;
    // Create a new instance of PivotGroupRule
    newPivotGroupRule(): Sheets_v4.Schema.PivotGroupRule;
    // Create a new instance of PivotGroupSortValueBucket
    newPivotGroupSortValueBucket(): Sheets_v4.Schema.PivotGroupSortValueBucket;
    // Create a new instance of PivotGroupValueMetadata
    newPivotGroupValueMetadata(): Sheets_v4.Schema.PivotGroupValueMetadata;
    // Create a new instance of PivotTable
    newPivotTable(): Sheets_v4.Schema.PivotTable;
    // Create a new instance of PivotValue
    newPivotValue(): Sheets_v4.Schema.PivotValue;
    // Create a new instance of ProtectedRange
    newProtectedRange(): Sheets_v4.Schema.ProtectedRange;
    // Create a new instance of RandomizeRangeRequest
    newRandomizeRangeRequest(): Sheets_v4.Schema.RandomizeRangeRequest;
    // Create a new instance of RepeatCellRequest
    newRepeatCellRequest(): Sheets_v4.Schema.RepeatCellRequest;
    // Create a new instance of Request
    newRequest(): Sheets_v4.Schema.Request;
    // Create a new instance of RowData
    newRowData(): Sheets_v4.Schema.RowData;
    // Create a new instance of SearchDeveloperMetadataRequest
    newSearchDeveloperMetadataRequest(): Sheets_v4.Schema.SearchDeveloperMetadataRequest;
    // Create a new instance of SetBasicFilterRequest
    newSetBasicFilterRequest(): Sheets_v4.Schema.SetBasicFilterRequest;
    // Create a new instance of SetDataValidationRequest
    newSetDataValidationRequest(): Sheets_v4.Schema.SetDataValidationRequest;
    // Create a new instance of Sheet
    newSheet(): Sheets_v4.Schema.Sheet;
    // Create a new instance of SheetProperties
    newSheetProperties(): Sheets_v4.Schema.SheetProperties;
    // Create a new instance of SortRangeRequest
    newSortRangeRequest(): Sheets_v4.Schema.SortRangeRequest;
    // Create a new instance of SortSpec
    newSortSpec(): Sheets_v4.Schema.SortSpec;
    // Create a new instance of SourceAndDestination
    newSourceAndDestination(): Sheets_v4.Schema.SourceAndDestination;
    // Create a new instance of Spreadsheet
    newSpreadsheet(): Sheets_v4.Schema.Spreadsheet;
    // Create a new instance of SpreadsheetProperties
    newSpreadsheetProperties(): Sheets_v4.Schema.SpreadsheetProperties;
    // Create a new instance of TextFormat
    newTextFormat(): Sheets_v4.Schema.TextFormat;
    // Create a new instance of TextFormatRun
    newTextFormatRun(): Sheets_v4.Schema.TextFormatRun;
    // Create a new instance of TextPosition
    newTextPosition(): Sheets_v4.Schema.TextPosition;
    // Create a new instance of TextRotation
    newTextRotation(): Sheets_v4.Schema.TextRotation;
    // Create a new instance of TextToColumnsRequest
    newTextToColumnsRequest(): Sheets_v4.Schema.TextToColumnsRequest;
    // Create a new instance of TreemapChartColorScale
    newTreemapChartColorScale(): Sheets_v4.Schema.TreemapChartColorScale;
    // Create a new instance of TreemapChartSpec
    newTreemapChartSpec(): Sheets_v4.Schema.TreemapChartSpec;
    // Create a new instance of UnmergeCellsRequest
    newUnmergeCellsRequest(): Sheets_v4.Schema.UnmergeCellsRequest;
    // Create a new instance of UpdateBandingRequest
    newUpdateBandingRequest(): Sheets_v4.Schema.UpdateBandingRequest;
    // Create a new instance of UpdateBordersRequest
    newUpdateBordersRequest(): Sheets_v4.Schema.UpdateBordersRequest;
    // Create a new instance of UpdateCellsRequest
    newUpdateCellsRequest(): Sheets_v4.Schema.UpdateCellsRequest;
    // Create a new instance of UpdateChartSpecRequest
    newUpdateChartSpecRequest(): Sheets_v4.Schema.UpdateChartSpecRequest;
    // Create a new instance of UpdateConditionalFormatRuleRequest
    newUpdateConditionalFormatRuleRequest(): Sheets_v4.Schema.UpdateConditionalFormatRuleRequest;
    // Create a new instance of UpdateDeveloperMetadataRequest
    newUpdateDeveloperMetadataRequest(): Sheets_v4.Schema.UpdateDeveloperMetadataRequest;
    // Create a new instance of UpdateDimensionGroupRequest
    newUpdateDimensionGroupRequest(): Sheets_v4.Schema.UpdateDimensionGroupRequest;
    // Create a new instance of UpdateDimensionPropertiesRequest
    newUpdateDimensionPropertiesRequest(): Sheets_v4.Schema.UpdateDimensionPropertiesRequest;
    // Create a new instance of UpdateEmbeddedObjectPositionRequest
    newUpdateEmbeddedObjectPositionRequest(): Sheets_v4.Schema.UpdateEmbeddedObjectPositionRequest;
    // Create a new instance of UpdateFilterViewRequest
    newUpdateFilterViewRequest(): Sheets_v4.Schema.UpdateFilterViewRequest;
    // Create a new instance of UpdateNamedRangeRequest
    newUpdateNamedRangeRequest(): Sheets_v4.Schema.UpdateNamedRangeRequest;
    // Create a new instance of UpdateProtectedRangeRequest
    newUpdateProtectedRangeRequest(): Sheets_v4.Schema.UpdateProtectedRangeRequest;
    // Create a new instance of UpdateSheetPropertiesRequest
    newUpdateSheetPropertiesRequest(): Sheets_v4.Schema.UpdateSheetPropertiesRequest;
    // Create a new instance of UpdateSpreadsheetPropertiesRequest
    newUpdateSpreadsheetPropertiesRequest(): Sheets_v4.Schema.UpdateSpreadsheetPropertiesRequest;
    // Create a new instance of ValueRange
    newValueRange(): Sheets_v4.Schema.ValueRange;
    // Create a new instance of WaterfallChartColumnStyle
    newWaterfallChartColumnStyle(): Sheets_v4.Schema.WaterfallChartColumnStyle;
    // Create a new instance of WaterfallChartCustomSubtotal
    newWaterfallChartCustomSubtotal(): Sheets_v4.Schema.WaterfallChartCustomSubtotal;
    // Create a new instance of WaterfallChartDomain
    newWaterfallChartDomain(): Sheets_v4.Schema.WaterfallChartDomain;
    // Create a new instance of WaterfallChartSeries
    newWaterfallChartSeries(): Sheets_v4.Schema.WaterfallChartSeries;
    // Create a new instance of WaterfallChartSpec
    newWaterfallChartSpec(): Sheets_v4.Schema.WaterfallChartSpec;
  }
}

declare var Sheets_v4: GoogleAppsScript.Sheets_v4;