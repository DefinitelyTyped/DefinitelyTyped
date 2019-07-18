// Type definitions for Google Apps Script 2019-03-25
// Project: https://developers.google.com/apps-script/
// Generator: https://github.com/grant/google-apps-script-dts
// Definitions by: grant <https://github.com/grant/>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare namespace GoogleAppsScript {
  namespace Sheets {
    namespace Collection {
      namespace Spreadsheets {
        export interface DeveloperMetadataCollection {
          // Returns the developer metadata with the specified ID.
          // The caller must specify the spreadsheet ID and the developer metadata's
          // unique metadataId.
          get(spreadsheetId: string, metadataId: number): Sheets.Schema.DeveloperMetadata;
          // Returns all developer metadata matching the specified DataFilter.
          // If the provided DataFilter represents a DeveloperMetadataLookup object,
          // this will return all DeveloperMetadata entries selected by it. If the
          // DataFilter represents a location in a spreadsheet, this will return all
          // developer metadata associated with locations intersecting that region.
          search(resource: Schema.SearchDeveloperMetadataRequest, spreadsheetId: string): Sheets.Schema.SearchDeveloperMetadataResponse;
        }
        export interface SheetsCollection {
          // Copies a single sheet from a spreadsheet to another spreadsheet.
          // Returns the properties of the newly created sheet.
          copyTo(resource: Schema.CopySheetToAnotherSpreadsheetRequest, spreadsheetId: string, sheetId: number): Sheets.Schema.SheetProperties;
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
          append(resource: Schema.ValueRange, spreadsheetId: string, range: string): Sheets.Schema.AppendValuesResponse;
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
          append(resource: Schema.ValueRange, spreadsheetId: string, range: string, optionalArgs: object): Sheets.Schema.AppendValuesResponse;
          // Clears one or more ranges of values from a spreadsheet.
          // The caller must specify the spreadsheet ID and one or more ranges.
          // Only values are cleared -- all other properties of the cell (such as
          // formatting, data validation, etc..) are kept.
          batchClear(resource: Schema.BatchClearValuesRequest, spreadsheetId: string): Sheets.Schema.BatchClearValuesResponse;
          // Clears one or more ranges of values from a spreadsheet.
          // The caller must specify the spreadsheet ID and one or more
          // DataFilters. Ranges matching any of the specified data
          // filters will be cleared.  Only values are cleared -- all other properties
          // of the cell (such as formatting, data validation, etc..) are kept.
          batchClearByDataFilter(resource: Schema.BatchClearValuesByDataFilterRequest, spreadsheetId: string): Sheets.Schema.BatchClearValuesByDataFilterResponse;
          // Returns one or more ranges of values from a spreadsheet.
          // The caller must specify the spreadsheet ID and one or more ranges.
          batchGet(spreadsheetId: string): Sheets.Schema.BatchGetValuesResponse;
          // Returns one or more ranges of values from a spreadsheet.
          // The caller must specify the spreadsheet ID and one or more ranges.
          batchGet(spreadsheetId: string, optionalArgs: object): Sheets.Schema.BatchGetValuesResponse;
          // Returns one or more ranges of values that match the specified data filters.
          // The caller must specify the spreadsheet ID and one or more
          // DataFilters.  Ranges that match any of the data filters in
          // the request will be returned.
          batchGetByDataFilter(resource: Schema.BatchGetValuesByDataFilterRequest, spreadsheetId: string): Sheets.Schema.BatchGetValuesByDataFilterResponse;
          // Sets values in one or more ranges of a spreadsheet.
          // The caller must specify the spreadsheet ID,
          // a valueInputOption, and one or more
          // ValueRanges.
          batchUpdate(resource: Schema.BatchUpdateValuesRequest, spreadsheetId: string): Sheets.Schema.BatchUpdateValuesResponse;
          // Sets values in one or more ranges of a spreadsheet.
          // The caller must specify the spreadsheet ID,
          // a valueInputOption, and one or more
          // DataFilterValueRanges.
          batchUpdateByDataFilter(resource: Schema.BatchUpdateValuesByDataFilterRequest, spreadsheetId: string): Sheets.Schema.BatchUpdateValuesByDataFilterResponse;
          // Clears values from a spreadsheet.
          // The caller must specify the spreadsheet ID and range.
          // Only values are cleared -- all other properties of the cell (such as
          // formatting, data validation, etc..) are kept.
          clear(resource: any, /* Schema.ClearValuesRequest */ spreadsheetId: string, range: string): Sheets.Schema.ClearValuesResponse;
          // Returns a range of values from a spreadsheet.
          // The caller must specify the spreadsheet ID and a range.
          get(spreadsheetId: string, range: string): Sheets.Schema.ValueRange;
          // Returns a range of values from a spreadsheet.
          // The caller must specify the spreadsheet ID and a range.
          get(spreadsheetId: string, range: string, optionalArgs: object): Sheets.Schema.ValueRange;
          // Sets values in a range of a spreadsheet.
          // The caller must specify the spreadsheet ID, range, and
          // a valueInputOption.
          update(resource: Schema.ValueRange, spreadsheetId: string, range: string): Sheets.Schema.UpdateValuesResponse;
          // Sets values in a range of a spreadsheet.
          // The caller must specify the spreadsheet ID, range, and
          // a valueInputOption.
          update(resource: Schema.ValueRange, spreadsheetId: string, range: string, optionalArgs: object): Sheets.Schema.UpdateValuesResponse;
        }
      }
      export interface SpreadsheetsCollection {
        DeveloperMetadata?: Sheets.Collection.Spreadsheets.DeveloperMetadataCollection;
        Sheets?: Sheets.Collection.Spreadsheets.SheetsCollection;
        Values?: Sheets.Collection.Spreadsheets.ValuesCollection;
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
        batchUpdate(resource: Schema.BatchUpdateSpreadsheetRequest, spreadsheetId: string): Sheets.Schema.BatchUpdateSpreadsheetResponse;
        // Creates a spreadsheet, returning the newly created spreadsheet.
        create(resource: Schema.Spreadsheet): Sheets.Schema.Spreadsheet;
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
        get(spreadsheetId: string): Sheets.Schema.Spreadsheet;
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
        get(spreadsheetId: string, optionalArgs: object): Sheets.Schema.Spreadsheet;
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
        getByDataFilter(resource: Schema.GetSpreadsheetByDataFilterRequest, spreadsheetId: string): Sheets.Schema.Spreadsheet;
      }
    }
    namespace Schema {
      export interface AddBandingRequest {
        bandedRange?: Sheets.Schema.BandedRange;
      }
      export interface AddBandingResponse {
        bandedRange?: Sheets.Schema.BandedRange;
      }
      export interface AddChartRequest {
        chart?: Sheets.Schema.EmbeddedChart;
      }
      export interface AddChartResponse {
        chart?: Sheets.Schema.EmbeddedChart;
      }
      export interface AddConditionalFormatRuleRequest {
        index?: number;
        rule?: Sheets.Schema.ConditionalFormatRule;
      }
      export interface AddDimensionGroupRequest {
        range?: Sheets.Schema.DimensionRange;
      }
      export interface AddDimensionGroupResponse {
        dimensionGroups?: Sheets.Schema.DimensionGroup[];
      }
      export interface AddFilterViewRequest {
        filter?: Sheets.Schema.FilterView;
      }
      export interface AddFilterViewResponse {
        filter?: Sheets.Schema.FilterView;
      }
      export interface AddNamedRangeRequest {
        namedRange?: Sheets.Schema.NamedRange;
      }
      export interface AddNamedRangeResponse {
        namedRange?: Sheets.Schema.NamedRange;
      }
      export interface AddProtectedRangeRequest {
        protectedRange?: Sheets.Schema.ProtectedRange;
      }
      export interface AddProtectedRangeResponse {
        protectedRange?: Sheets.Schema.ProtectedRange;
      }
      export interface AddSheetRequest {
        properties?: Sheets.Schema.SheetProperties;
      }
      export interface AddSheetResponse {
        properties?: Sheets.Schema.SheetProperties;
      }
      export interface AppendCellsRequest {
        fields?: string;
        rows?: Sheets.Schema.RowData[];
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
        updates?: Sheets.Schema.UpdateValuesResponse;
      }
      export interface AutoFillRequest {
        range?: Sheets.Schema.GridRange;
        sourceAndDestination?: Sheets.Schema.SourceAndDestination;
        useAlternateSeries?: boolean;
      }
      export interface AutoResizeDimensionsRequest {
        dimensions?: Sheets.Schema.DimensionRange;
      }
      export interface BandedRange {
        bandedRangeId?: number;
        columnProperties?: Sheets.Schema.BandingProperties;
        range?: Sheets.Schema.GridRange;
        rowProperties?: Sheets.Schema.BandingProperties;
      }
      export interface BandingProperties {
        firstBandColor?: Sheets.Schema.Color;
        footerColor?: Sheets.Schema.Color;
        headerColor?: Sheets.Schema.Color;
        secondBandColor?: Sheets.Schema.Color;
      }
      export interface BasicChartAxis {
        format?: Sheets.Schema.TextFormat;
        position?: string;
        title?: string;
        titleTextPosition?: Sheets.Schema.TextPosition;
      }
      export interface BasicChartDomain {
        domain?: Sheets.Schema.ChartData;
        reversed?: boolean;
      }
      export interface BasicChartSeries {
        color?: Sheets.Schema.Color;
        lineStyle?: Sheets.Schema.LineStyle;
        series?: Sheets.Schema.ChartData;
        targetAxis?: string;
        type?: string;
      }
      export interface BasicChartSpec {
        axis?: Sheets.Schema.BasicChartAxis[];
        chartType?: string;
        compareMode?: string;
        domains?: Sheets.Schema.BasicChartDomain[];
        headerCount?: number;
        interpolateNulls?: boolean;
        legendPosition?: string;
        lineSmoothing?: boolean;
        series?: Sheets.Schema.BasicChartSeries[];
        stackedType?: string;
        threeDimensional?: boolean;
      }
      export interface BasicFilter {
        criteria?: object;
        range?: Sheets.Schema.GridRange;
        sortSpecs?: Sheets.Schema.SortSpec[];
      }
      export interface BatchClearValuesByDataFilterRequest {
        dataFilters?: Sheets.Schema.DataFilter[];
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
        dataFilters?: Sheets.Schema.DataFilter[];
        dateTimeRenderOption?: string;
        majorDimension?: string;
        valueRenderOption?: string;
      }
      export interface BatchGetValuesByDataFilterResponse {
        spreadsheetId?: string;
        valueRanges?: Sheets.Schema.MatchedValueRange[];
      }
      export interface BatchGetValuesResponse {
        spreadsheetId?: string;
        valueRanges?: Sheets.Schema.ValueRange[];
      }
      export interface BatchUpdateSpreadsheetRequest {
        includeSpreadsheetInResponse?: boolean;
        requests?: Sheets.Schema.Request[];
        responseIncludeGridData?: boolean;
        responseRanges?: string[];
      }
      export interface BatchUpdateSpreadsheetResponse {
        replies?: Sheets.Schema.Response[];
        spreadsheetId?: string;
        updatedSpreadsheet?: Sheets.Schema.Spreadsheet;
      }
      export interface BatchUpdateValuesByDataFilterRequest {
        data?: Sheets.Schema.DataFilterValueRange[];
        includeValuesInResponse?: boolean;
        responseDateTimeRenderOption?: string;
        responseValueRenderOption?: string;
        valueInputOption?: string;
      }
      export interface BatchUpdateValuesByDataFilterResponse {
        responses?: Sheets.Schema.UpdateValuesByDataFilterResponse[];
        spreadsheetId?: string;
        totalUpdatedCells?: number;
        totalUpdatedColumns?: number;
        totalUpdatedRows?: number;
        totalUpdatedSheets?: number;
      }
      export interface BatchUpdateValuesRequest {
        data?: Sheets.Schema.ValueRange[];
        includeValuesInResponse?: boolean;
        responseDateTimeRenderOption?: string;
        responseValueRenderOption?: string;
        valueInputOption?: string;
      }
      export interface BatchUpdateValuesResponse {
        responses?: Sheets.Schema.UpdateValuesResponse[];
        spreadsheetId?: string;
        totalUpdatedCells?: number;
        totalUpdatedColumns?: number;
        totalUpdatedRows?: number;
        totalUpdatedSheets?: number;
      }
      export interface BooleanCondition {
        type?: string;
        values?: Sheets.Schema.ConditionValue[];
      }
      export interface BooleanRule {
        condition?: Sheets.Schema.BooleanCondition;
        format?: Sheets.Schema.CellFormat;
      }
      export interface Border {
        color?: Sheets.Schema.Color;
        style?: string;
        width?: number;
      }
      export interface Borders {
        bottom?: Sheets.Schema.Border;
        left?: Sheets.Schema.Border;
        right?: Sheets.Schema.Border;
        top?: Sheets.Schema.Border;
      }
      export interface BubbleChartSpec {
        bubbleBorderColor?: Sheets.Schema.Color;
        bubbleLabels?: Sheets.Schema.ChartData;
        bubbleMaxRadiusSize?: number;
        bubbleMinRadiusSize?: number;
        bubbleOpacity?: number;
        bubbleSizes?: Sheets.Schema.ChartData;
        bubbleTextStyle?: Sheets.Schema.TextFormat;
        domain?: Sheets.Schema.ChartData;
        groupIds?: Sheets.Schema.ChartData;
        legendPosition?: string;
        series?: Sheets.Schema.ChartData;
      }
      export interface CandlestickChartSpec {
        data?: Sheets.Schema.CandlestickData[];
        domain?: Sheets.Schema.CandlestickDomain;
      }
      export interface CandlestickData {
        closeSeries?: Sheets.Schema.CandlestickSeries;
        highSeries?: Sheets.Schema.CandlestickSeries;
        lowSeries?: Sheets.Schema.CandlestickSeries;
        openSeries?: Sheets.Schema.CandlestickSeries;
      }
      export interface CandlestickDomain {
        data?: Sheets.Schema.ChartData;
        reversed?: boolean;
      }
      export interface CandlestickSeries {
        data?: Sheets.Schema.ChartData;
      }
      export interface CellData {
        dataValidation?: Sheets.Schema.DataValidationRule;
        effectiveFormat?: Sheets.Schema.CellFormat;
        effectiveValue?: Sheets.Schema.ExtendedValue;
        formattedValue?: string;
        hyperlink?: string;
        note?: string;
        pivotTable?: Sheets.Schema.PivotTable;
        textFormatRuns?: Sheets.Schema.TextFormatRun[];
        userEnteredFormat?: Sheets.Schema.CellFormat;
        userEnteredValue?: Sheets.Schema.ExtendedValue;
      }
      export interface CellFormat {
        backgroundColor?: Sheets.Schema.Color;
        borders?: Sheets.Schema.Borders;
        horizontalAlignment?: string;
        hyperlinkDisplayType?: string;
        numberFormat?: Sheets.Schema.NumberFormat;
        padding?: Sheets.Schema.Padding;
        textDirection?: string;
        textFormat?: Sheets.Schema.TextFormat;
        textRotation?: Sheets.Schema.TextRotation;
        verticalAlignment?: string;
        wrapStrategy?: string;
      }
      export interface ChartData {
        sourceRange?: Sheets.Schema.ChartSourceRange;
      }
      export interface ChartSourceRange {
        sources?: Sheets.Schema.GridRange[];
      }
      export interface ChartSpec {
        altText?: string;
        backgroundColor?: Sheets.Schema.Color;
        basicChart?: Sheets.Schema.BasicChartSpec;
        bubbleChart?: Sheets.Schema.BubbleChartSpec;
        candlestickChart?: Sheets.Schema.CandlestickChartSpec;
        fontName?: string;
        hiddenDimensionStrategy?: string;
        histogramChart?: Sheets.Schema.HistogramChartSpec;
        maximized?: boolean;
        orgChart?: Sheets.Schema.OrgChartSpec;
        pieChart?: Sheets.Schema.PieChartSpec;
        subtitle?: string;
        subtitleTextFormat?: Sheets.Schema.TextFormat;
        subtitleTextPosition?: Sheets.Schema.TextPosition;
        title?: string;
        titleTextFormat?: Sheets.Schema.TextFormat;
        titleTextPosition?: Sheets.Schema.TextPosition;
        treemapChart?: Sheets.Schema.TreemapChartSpec;
        waterfallChart?: Sheets.Schema.WaterfallChartSpec;
      }
      export interface ClearBasicFilterRequest {
        sheetId?: number;
      }
      export interface ClearValuesResponse {
        clearedRange?: string;
        spreadsheetId?: string;
      }
      export interface Color {
        alpha?: number;
        blue?: number;
        green?: number;
        red?: number;
      }
      export interface ConditionValue {
        relativeDate?: string;
        userEnteredValue?: string;
      }
      export interface ConditionalFormatRule {
        booleanRule?: Sheets.Schema.BooleanRule;
        gradientRule?: Sheets.Schema.GradientRule;
        ranges?: Sheets.Schema.GridRange[];
      }
      export interface CopyPasteRequest {
        destination?: Sheets.Schema.GridRange;
        pasteOrientation?: string;
        pasteType?: string;
        source?: Sheets.Schema.GridRange;
      }
      export interface CopySheetToAnotherSpreadsheetRequest {
        destinationSpreadsheetId?: string;
      }
      export interface CreateDeveloperMetadataRequest {
        developerMetadata?: Sheets.Schema.DeveloperMetadata;
      }
      export interface CreateDeveloperMetadataResponse {
        developerMetadata?: Sheets.Schema.DeveloperMetadata;
      }
      export interface CutPasteRequest {
        destination?: Sheets.Schema.GridCoordinate;
        pasteType?: string;
        source?: Sheets.Schema.GridRange;
      }
      export interface DataFilter {
        a1Range?: string;
        developerMetadataLookup?: Sheets.Schema.DeveloperMetadataLookup;
        gridRange?: Sheets.Schema.GridRange;
      }
      export interface DataFilterValueRange {
        dataFilter?: Sheets.Schema.DataFilter;
        majorDimension?: string;
        values?: any[][];
      }
      export interface DataValidationRule {
        condition?: Sheets.Schema.BooleanCondition;
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
        rule?: Sheets.Schema.ConditionalFormatRule;
      }
      export interface DeleteDeveloperMetadataRequest {
        dataFilter?: Sheets.Schema.DataFilter;
      }
      export interface DeleteDeveloperMetadataResponse {
        deletedDeveloperMetadata?: Sheets.Schema.DeveloperMetadata[];
      }
      export interface DeleteDimensionGroupRequest {
        range?: Sheets.Schema.DimensionRange;
      }
      export interface DeleteDimensionGroupResponse {
        dimensionGroups?: Sheets.Schema.DimensionGroup[];
      }
      export interface DeleteDimensionRequest {
        range?: Sheets.Schema.DimensionRange;
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
        range?: Sheets.Schema.GridRange;
        shiftDimension?: string;
      }
      export interface DeleteSheetRequest {
        sheetId?: number;
      }
      export interface DeveloperMetadata {
        location?: Sheets.Schema.DeveloperMetadataLocation;
        metadataId?: number;
        metadataKey?: string;
        metadataValue?: string;
        visibility?: string;
      }
      export interface DeveloperMetadataLocation {
        dimensionRange?: Sheets.Schema.DimensionRange;
        locationType?: string;
        sheetId?: number;
        spreadsheet?: boolean;
      }
      export interface DeveloperMetadataLookup {
        locationMatchingStrategy?: string;
        locationType?: string;
        metadataId?: number;
        metadataKey?: string;
        metadataLocation?: Sheets.Schema.DeveloperMetadataLocation;
        metadataValue?: string;
        visibility?: string;
      }
      export interface DimensionGroup {
        collapsed?: boolean;
        depth?: number;
        range?: Sheets.Schema.DimensionRange;
      }
      export interface DimensionProperties {
        developerMetadata?: Sheets.Schema.DeveloperMetadata[];
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
        filter?: Sheets.Schema.FilterView;
      }
      export interface DuplicateSheetRequest {
        insertSheetIndex?: number;
        newSheetId?: number;
        newSheetName?: string;
        sourceSheetId?: number;
      }
      export interface DuplicateSheetResponse {
        properties?: Sheets.Schema.SheetProperties;
      }
      export interface Editors {
        domainUsersCanEdit?: boolean;
        groups?: string[];
        users?: string[];
      }
      export interface EmbeddedChart {
        chartId?: number;
        position?: Sheets.Schema.EmbeddedObjectPosition;
        spec?: Sheets.Schema.ChartSpec;
      }
      export interface EmbeddedObjectPosition {
        newSheet?: boolean;
        overlayPosition?: Sheets.Schema.OverlayPosition;
        sheetId?: number;
      }
      export interface ErrorValue {
        message?: string;
        type?: string;
      }
      export interface ExtendedValue {
        boolValue?: boolean;
        errorValue?: Sheets.Schema.ErrorValue;
        formulaValue?: string;
        numberValue?: number;
        stringValue?: string;
      }
      export interface FilterCriteria {
        condition?: Sheets.Schema.BooleanCondition;
        hiddenValues?: string[];
      }
      export interface FilterView {
        criteria?: object;
        filterViewId?: number;
        namedRangeId?: string;
        range?: Sheets.Schema.GridRange;
        sortSpecs?: Sheets.Schema.SortSpec[];
        title?: string;
      }
      export interface FindReplaceRequest {
        allSheets?: boolean;
        find?: string;
        includeFormulas?: boolean;
        matchCase?: boolean;
        matchEntireCell?: boolean;
        range?: Sheets.Schema.GridRange;
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
        dataFilters?: Sheets.Schema.DataFilter[];
        includeGridData?: boolean;
      }
      export interface GradientRule {
        maxpoint?: Sheets.Schema.InterpolationPoint;
        midpoint?: Sheets.Schema.InterpolationPoint;
        minpoint?: Sheets.Schema.InterpolationPoint;
      }
      export interface GridCoordinate {
        columnIndex?: number;
        rowIndex?: number;
        sheetId?: number;
      }
      export interface GridData {
        columnMetadata?: Sheets.Schema.DimensionProperties[];
        rowData?: Sheets.Schema.RowData[];
        rowMetadata?: Sheets.Schema.DimensionProperties[];
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
        bucketSize?: number;
        legendPosition?: string;
        outlierPercentile?: number;
        series?: Sheets.Schema.HistogramSeries[];
        showItemDividers?: boolean;
      }
      export interface HistogramRule {
        end?: number;
        interval?: number;
        start?: number;
      }
      export interface HistogramSeries {
        barColor?: Sheets.Schema.Color;
        data?: Sheets.Schema.ChartData;
      }
      export interface InsertDimensionRequest {
        inheritFromBefore?: boolean;
        range?: Sheets.Schema.DimensionRange;
      }
      export interface InsertRangeRequest {
        range?: Sheets.Schema.GridRange;
        shiftDimension?: string;
      }
      export interface InterpolationPoint {
        color?: Sheets.Schema.Color;
        type?: string;
        value?: string;
      }
      export interface IterativeCalculationSettings {
        convergenceThreshold?: number;
        maxIterations?: number;
      }
      export interface LineStyle {
        type?: string;
        width?: number;
      }
      export interface ManualRule {
        groups?: Sheets.Schema.ManualRuleGroup[];
      }
      export interface ManualRuleGroup {
        groupName?: Sheets.Schema.ExtendedValue;
        items?: Sheets.Schema.ExtendedValue[];
      }
      export interface MatchedDeveloperMetadata {
        dataFilters?: Sheets.Schema.DataFilter[];
        developerMetadata?: Sheets.Schema.DeveloperMetadata;
      }
      export interface MatchedValueRange {
        dataFilters?: Sheets.Schema.DataFilter[];
        valueRange?: Sheets.Schema.ValueRange;
      }
      export interface MergeCellsRequest {
        mergeType?: string;
        range?: Sheets.Schema.GridRange;
      }
      export interface MoveDimensionRequest {
        destinationIndex?: number;
        source?: Sheets.Schema.DimensionRange;
      }
      export interface NamedRange {
        name?: string;
        namedRangeId?: string;
        range?: Sheets.Schema.GridRange;
      }
      export interface NumberFormat {
        pattern?: string;
        type?: string;
      }
      export interface OrgChartSpec {
        labels?: Sheets.Schema.ChartData;
        nodeColor?: Sheets.Schema.Color;
        nodeSize?: string;
        parentLabels?: Sheets.Schema.ChartData;
        selectedNodeColor?: Sheets.Schema.Color;
        tooltips?: Sheets.Schema.ChartData;
      }
      export interface OverlayPosition {
        anchorCell?: Sheets.Schema.GridCoordinate;
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
        coordinate?: Sheets.Schema.GridCoordinate;
        data?: string;
        delimiter?: string;
        html?: boolean;
        type?: string;
      }
      export interface PieChartSpec {
        domain?: Sheets.Schema.ChartData;
        legendPosition?: string;
        pieHole?: number;
        series?: Sheets.Schema.ChartData;
        threeDimensional?: boolean;
      }
      export interface PivotFilterCriteria {
        visibleValues?: string[];
      }
      export interface PivotGroup {
        groupRule?: Sheets.Schema.PivotGroupRule;
        label?: string;
        repeatHeadings?: boolean;
        showTotals?: boolean;
        sortOrder?: string;
        sourceColumnOffset?: number;
        valueBucket?: Sheets.Schema.PivotGroupSortValueBucket;
        valueMetadata?: Sheets.Schema.PivotGroupValueMetadata[];
      }
      export interface PivotGroupRule {
        dateTimeRule?: Sheets.Schema.DateTimeRule;
        histogramRule?: Sheets.Schema.HistogramRule;
        manualRule?: Sheets.Schema.ManualRule;
      }
      export interface PivotGroupSortValueBucket {
        buckets?: Sheets.Schema.ExtendedValue[];
        valuesIndex?: number;
      }
      export interface PivotGroupValueMetadata {
        collapsed?: boolean;
        value?: Sheets.Schema.ExtendedValue;
      }
      export interface PivotTable {
        columns?: Sheets.Schema.PivotGroup[];
        criteria?: object;
        rows?: Sheets.Schema.PivotGroup[];
        source?: Sheets.Schema.GridRange;
        valueLayout?: string;
        values?: Sheets.Schema.PivotValue[];
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
        editors?: Sheets.Schema.Editors;
        namedRangeId?: string;
        protectedRangeId?: number;
        range?: Sheets.Schema.GridRange;
        requestingUserCanEdit?: boolean;
        unprotectedRanges?: Sheets.Schema.GridRange[];
        warningOnly?: boolean;
      }
      export interface RandomizeRangeRequest {
        range?: Sheets.Schema.GridRange;
      }
      export interface RepeatCellRequest {
        cell?: Sheets.Schema.CellData;
        fields?: string;
        range?: Sheets.Schema.GridRange;
      }
      export interface Request {
        addBanding?: Sheets.Schema.AddBandingRequest;
        addChart?: Sheets.Schema.AddChartRequest;
        addConditionalFormatRule?: Sheets.Schema.AddConditionalFormatRuleRequest;
        addDimensionGroup?: Sheets.Schema.AddDimensionGroupRequest;
        addFilterView?: Sheets.Schema.AddFilterViewRequest;
        addNamedRange?: Sheets.Schema.AddNamedRangeRequest;
        addProtectedRange?: Sheets.Schema.AddProtectedRangeRequest;
        addSheet?: Sheets.Schema.AddSheetRequest;
        appendCells?: Sheets.Schema.AppendCellsRequest;
        appendDimension?: Sheets.Schema.AppendDimensionRequest;
        autoFill?: Sheets.Schema.AutoFillRequest;
        autoResizeDimensions?: Sheets.Schema.AutoResizeDimensionsRequest;
        clearBasicFilter?: Sheets.Schema.ClearBasicFilterRequest;
        copyPaste?: Sheets.Schema.CopyPasteRequest;
        createDeveloperMetadata?: Sheets.Schema.CreateDeveloperMetadataRequest;
        cutPaste?: Sheets.Schema.CutPasteRequest;
        deleteBanding?: Sheets.Schema.DeleteBandingRequest;
        deleteConditionalFormatRule?: Sheets.Schema.DeleteConditionalFormatRuleRequest;
        deleteDeveloperMetadata?: Sheets.Schema.DeleteDeveloperMetadataRequest;
        deleteDimension?: Sheets.Schema.DeleteDimensionRequest;
        deleteDimensionGroup?: Sheets.Schema.DeleteDimensionGroupRequest;
        deleteEmbeddedObject?: Sheets.Schema.DeleteEmbeddedObjectRequest;
        deleteFilterView?: Sheets.Schema.DeleteFilterViewRequest;
        deleteNamedRange?: Sheets.Schema.DeleteNamedRangeRequest;
        deleteProtectedRange?: Sheets.Schema.DeleteProtectedRangeRequest;
        deleteRange?: Sheets.Schema.DeleteRangeRequest;
        deleteSheet?: Sheets.Schema.DeleteSheetRequest;
        duplicateFilterView?: Sheets.Schema.DuplicateFilterViewRequest;
        duplicateSheet?: Sheets.Schema.DuplicateSheetRequest;
        findReplace?: Sheets.Schema.FindReplaceRequest;
        insertDimension?: Sheets.Schema.InsertDimensionRequest;
        insertRange?: Sheets.Schema.InsertRangeRequest;
        mergeCells?: Sheets.Schema.MergeCellsRequest;
        moveDimension?: Sheets.Schema.MoveDimensionRequest;
        pasteData?: Sheets.Schema.PasteDataRequest;
        randomizeRange?: Sheets.Schema.RandomizeRangeRequest;
        repeatCell?: Sheets.Schema.RepeatCellRequest;
        setBasicFilter?: Sheets.Schema.SetBasicFilterRequest;
        setDataValidation?: Sheets.Schema.SetDataValidationRequest;
        sortRange?: Sheets.Schema.SortRangeRequest;
        textToColumns?: Sheets.Schema.TextToColumnsRequest;
        unmergeCells?: Sheets.Schema.UnmergeCellsRequest;
        updateBanding?: Sheets.Schema.UpdateBandingRequest;
        updateBorders?: Sheets.Schema.UpdateBordersRequest;
        updateCells?: Sheets.Schema.UpdateCellsRequest;
        updateChartSpec?: Sheets.Schema.UpdateChartSpecRequest;
        updateConditionalFormatRule?: Sheets.Schema.UpdateConditionalFormatRuleRequest;
        updateDeveloperMetadata?: Sheets.Schema.UpdateDeveloperMetadataRequest;
        updateDimensionGroup?: Sheets.Schema.UpdateDimensionGroupRequest;
        updateDimensionProperties?: Sheets.Schema.UpdateDimensionPropertiesRequest;
        updateEmbeddedObjectPosition?: Sheets.Schema.UpdateEmbeddedObjectPositionRequest;
        updateFilterView?: Sheets.Schema.UpdateFilterViewRequest;
        updateNamedRange?: Sheets.Schema.UpdateNamedRangeRequest;
        updateProtectedRange?: Sheets.Schema.UpdateProtectedRangeRequest;
        updateSheetProperties?: Sheets.Schema.UpdateSheetPropertiesRequest;
        updateSpreadsheetProperties?: Sheets.Schema.UpdateSpreadsheetPropertiesRequest;
      }
      export interface Response {
        addBanding?: Sheets.Schema.AddBandingResponse;
        addChart?: Sheets.Schema.AddChartResponse;
        addDimensionGroup?: Sheets.Schema.AddDimensionGroupResponse;
        addFilterView?: Sheets.Schema.AddFilterViewResponse;
        addNamedRange?: Sheets.Schema.AddNamedRangeResponse;
        addProtectedRange?: Sheets.Schema.AddProtectedRangeResponse;
        addSheet?: Sheets.Schema.AddSheetResponse;
        createDeveloperMetadata?: Sheets.Schema.CreateDeveloperMetadataResponse;
        deleteConditionalFormatRule?: Sheets.Schema.DeleteConditionalFormatRuleResponse;
        deleteDeveloperMetadata?: Sheets.Schema.DeleteDeveloperMetadataResponse;
        deleteDimensionGroup?: Sheets.Schema.DeleteDimensionGroupResponse;
        duplicateFilterView?: Sheets.Schema.DuplicateFilterViewResponse;
        duplicateSheet?: Sheets.Schema.DuplicateSheetResponse;
        findReplace?: Sheets.Schema.FindReplaceResponse;
        updateConditionalFormatRule?: Sheets.Schema.UpdateConditionalFormatRuleResponse;
        updateDeveloperMetadata?: Sheets.Schema.UpdateDeveloperMetadataResponse;
        updateEmbeddedObjectPosition?: Sheets.Schema.UpdateEmbeddedObjectPositionResponse;
      }
      export interface RowData {
        values?: Sheets.Schema.CellData[];
      }
      export interface SearchDeveloperMetadataRequest {
        dataFilters?: Sheets.Schema.DataFilter[];
      }
      export interface SearchDeveloperMetadataResponse {
        matchedDeveloperMetadata?: Sheets.Schema.MatchedDeveloperMetadata[];
      }
      export interface SetBasicFilterRequest {
        filter?: Sheets.Schema.BasicFilter;
      }
      export interface SetDataValidationRequest {
        range?: Sheets.Schema.GridRange;
        rule?: Sheets.Schema.DataValidationRule;
      }
      export interface Sheet {
        bandedRanges?: Sheets.Schema.BandedRange[];
        basicFilter?: Sheets.Schema.BasicFilter;
        charts?: Sheets.Schema.EmbeddedChart[];
        columnGroups?: Sheets.Schema.DimensionGroup[];
        conditionalFormats?: Sheets.Schema.ConditionalFormatRule[];
        data?: Sheets.Schema.GridData[];
        developerMetadata?: Sheets.Schema.DeveloperMetadata[];
        filterViews?: Sheets.Schema.FilterView[];
        merges?: Sheets.Schema.GridRange[];
        properties?: Sheets.Schema.SheetProperties;
        protectedRanges?: Sheets.Schema.ProtectedRange[];
        rowGroups?: Sheets.Schema.DimensionGroup[];
      }
      export interface SheetProperties {
        gridProperties?: Sheets.Schema.GridProperties;
        hidden?: boolean;
        index?: number;
        rightToLeft?: boolean;
        sheetId?: number;
        sheetType?: string;
        tabColor?: Sheets.Schema.Color;
        title?: string;
      }
      export interface SortRangeRequest {
        range?: Sheets.Schema.GridRange;
        sortSpecs?: Sheets.Schema.SortSpec[];
      }
      export interface SortSpec {
        dimensionIndex?: number;
        sortOrder?: string;
      }
      export interface SourceAndDestination {
        dimension?: string;
        fillLength?: number;
        source?: Sheets.Schema.GridRange;
      }
      export interface Spreadsheet {
        developerMetadata?: Sheets.Schema.DeveloperMetadata[];
        namedRanges?: Sheets.Schema.NamedRange[];
        properties?: Sheets.Schema.SpreadsheetProperties;
        sheets?: Sheets.Schema.Sheet[];
        spreadsheetId?: string;
        spreadsheetUrl?: string;
      }
      export interface SpreadsheetProperties {
        autoRecalc?: string;
        defaultFormat?: Sheets.Schema.CellFormat;
        iterativeCalculationSettings?: Sheets.Schema.IterativeCalculationSettings;
        locale?: string;
        timeZone?: string;
        title?: string;
      }
      export interface TextFormat {
        bold?: boolean;
        fontFamily?: string;
        fontSize?: number;
        foregroundColor?: Sheets.Schema.Color;
        italic?: boolean;
        strikethrough?: boolean;
        underline?: boolean;
      }
      export interface TextFormatRun {
        format?: Sheets.Schema.TextFormat;
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
        source?: Sheets.Schema.GridRange;
      }
      export interface TreemapChartColorScale {
        maxValueColor?: Sheets.Schema.Color;
        midValueColor?: Sheets.Schema.Color;
        minValueColor?: Sheets.Schema.Color;
        noDataColor?: Sheets.Schema.Color;
      }
      export interface TreemapChartSpec {
        colorData?: Sheets.Schema.ChartData;
        colorScale?: Sheets.Schema.TreemapChartColorScale;
        headerColor?: Sheets.Schema.Color;
        hideTooltips?: boolean;
        hintedLevels?: number;
        labels?: Sheets.Schema.ChartData;
        levels?: number;
        maxValue?: number;
        minValue?: number;
        parentLabels?: Sheets.Schema.ChartData;
        sizeData?: Sheets.Schema.ChartData;
        textFormat?: Sheets.Schema.TextFormat;
      }
      export interface UnmergeCellsRequest {
        range?: Sheets.Schema.GridRange;
      }
      export interface UpdateBandingRequest {
        bandedRange?: Sheets.Schema.BandedRange;
        fields?: string;
      }
      export interface UpdateBordersRequest {
        bottom?: Sheets.Schema.Border;
        innerHorizontal?: Sheets.Schema.Border;
        innerVertical?: Sheets.Schema.Border;
        left?: Sheets.Schema.Border;
        range?: Sheets.Schema.GridRange;
        right?: Sheets.Schema.Border;
        top?: Sheets.Schema.Border;
      }
      export interface UpdateCellsRequest {
        fields?: string;
        range?: Sheets.Schema.GridRange;
        rows?: Sheets.Schema.RowData[];
        start?: Sheets.Schema.GridCoordinate;
      }
      export interface UpdateChartSpecRequest {
        chartId?: number;
        spec?: Sheets.Schema.ChartSpec;
      }
      export interface UpdateConditionalFormatRuleRequest {
        index?: number;
        newIndex?: number;
        rule?: Sheets.Schema.ConditionalFormatRule;
        sheetId?: number;
      }
      export interface UpdateConditionalFormatRuleResponse {
        newIndex?: number;
        newRule?: Sheets.Schema.ConditionalFormatRule;
        oldIndex?: number;
        oldRule?: Sheets.Schema.ConditionalFormatRule;
      }
      export interface UpdateDeveloperMetadataRequest {
        dataFilters?: Sheets.Schema.DataFilter[];
        developerMetadata?: Sheets.Schema.DeveloperMetadata;
        fields?: string;
      }
      export interface UpdateDeveloperMetadataResponse {
        developerMetadata?: Sheets.Schema.DeveloperMetadata[];
      }
      export interface UpdateDimensionGroupRequest {
        dimensionGroup?: Sheets.Schema.DimensionGroup;
        fields?: string;
      }
      export interface UpdateDimensionPropertiesRequest {
        fields?: string;
        properties?: Sheets.Schema.DimensionProperties;
        range?: Sheets.Schema.DimensionRange;
      }
      export interface UpdateEmbeddedObjectPositionRequest {
        fields?: string;
        newPosition?: Sheets.Schema.EmbeddedObjectPosition;
        objectId?: number;
      }
      export interface UpdateEmbeddedObjectPositionResponse {
        position?: Sheets.Schema.EmbeddedObjectPosition;
      }
      export interface UpdateFilterViewRequest {
        fields?: string;
        filter?: Sheets.Schema.FilterView;
      }
      export interface UpdateNamedRangeRequest {
        fields?: string;
        namedRange?: Sheets.Schema.NamedRange;
      }
      export interface UpdateProtectedRangeRequest {
        fields?: string;
        protectedRange?: Sheets.Schema.ProtectedRange;
      }
      export interface UpdateSheetPropertiesRequest {
        fields?: string;
        properties?: Sheets.Schema.SheetProperties;
      }
      export interface UpdateSpreadsheetPropertiesRequest {
        fields?: string;
        properties?: Sheets.Schema.SpreadsheetProperties;
      }
      export interface UpdateValuesByDataFilterResponse {
        dataFilter?: Sheets.Schema.DataFilter;
        updatedCells?: number;
        updatedColumns?: number;
        updatedData?: Sheets.Schema.ValueRange;
        updatedRange?: string;
        updatedRows?: number;
      }
      export interface UpdateValuesResponse {
        spreadsheetId?: string;
        updatedCells?: number;
        updatedColumns?: number;
        updatedData?: Sheets.Schema.ValueRange;
        updatedRange?: string;
        updatedRows?: number;
      }
      export interface ValueRange {
        majorDimension?: string;
        range?: string;
        values?: any[][];
      }
      export interface WaterfallChartColumnStyle {
        color?: Sheets.Schema.Color;
        label?: string;
      }
      export interface WaterfallChartCustomSubtotal {
        dataIsSubtotal?: boolean;
        label?: string;
        subtotalIndex?: number;
      }
      export interface WaterfallChartDomain {
        data?: Sheets.Schema.ChartData;
        reversed?: boolean;
      }
      export interface WaterfallChartSeries {
        customSubtotals?: Sheets.Schema.WaterfallChartCustomSubtotal[];
        data?: Sheets.Schema.ChartData;
        hideTrailingSubtotal?: boolean;
        negativeColumnsStyle?: Sheets.Schema.WaterfallChartColumnStyle;
        positiveColumnsStyle?: Sheets.Schema.WaterfallChartColumnStyle;
        subtotalColumnsStyle?: Sheets.Schema.WaterfallChartColumnStyle;
      }
      export interface WaterfallChartSpec {
        connectorLineStyle?: Sheets.Schema.LineStyle;
        domain?: Sheets.Schema.WaterfallChartDomain;
        firstValueIsTotal?: boolean;
        hideConnectorLines?: boolean;
        series?: Sheets.Schema.WaterfallChartSeries[];
        stackedType?: string;
      }
    }
  }
  export interface Sheets {
    Spreadsheets?: Sheets.Collection.SpreadsheetsCollection;
    // Create a new instance of AddBandingRequest
    newAddBandingRequest(): Sheets.Schema.AddBandingRequest;
    // Create a new instance of AddChartRequest
    newAddChartRequest(): Sheets.Schema.AddChartRequest;
    // Create a new instance of AddConditionalFormatRuleRequest
    newAddConditionalFormatRuleRequest(): Sheets.Schema.AddConditionalFormatRuleRequest;
    // Create a new instance of AddDimensionGroupRequest
    newAddDimensionGroupRequest(): Sheets.Schema.AddDimensionGroupRequest;
    // Create a new instance of AddFilterViewRequest
    newAddFilterViewRequest(): Sheets.Schema.AddFilterViewRequest;
    // Create a new instance of AddNamedRangeRequest
    newAddNamedRangeRequest(): Sheets.Schema.AddNamedRangeRequest;
    // Create a new instance of AddProtectedRangeRequest
    newAddProtectedRangeRequest(): Sheets.Schema.AddProtectedRangeRequest;
    // Create a new instance of AddSheetRequest
    newAddSheetRequest(): Sheets.Schema.AddSheetRequest;
    // Create a new instance of AppendCellsRequest
    newAppendCellsRequest(): Sheets.Schema.AppendCellsRequest;
    // Create a new instance of AppendDimensionRequest
    newAppendDimensionRequest(): Sheets.Schema.AppendDimensionRequest;
    // Create a new instance of AutoFillRequest
    newAutoFillRequest(): Sheets.Schema.AutoFillRequest;
    // Create a new instance of AutoResizeDimensionsRequest
    newAutoResizeDimensionsRequest(): Sheets.Schema.AutoResizeDimensionsRequest;
    // Create a new instance of BandedRange
    newBandedRange(): Sheets.Schema.BandedRange;
    // Create a new instance of BandingProperties
    newBandingProperties(): Sheets.Schema.BandingProperties;
    // Create a new instance of BasicChartAxis
    newBasicChartAxis(): Sheets.Schema.BasicChartAxis;
    // Create a new instance of BasicChartDomain
    newBasicChartDomain(): Sheets.Schema.BasicChartDomain;
    // Create a new instance of BasicChartSeries
    newBasicChartSeries(): Sheets.Schema.BasicChartSeries;
    // Create a new instance of BasicChartSpec
    newBasicChartSpec(): Sheets.Schema.BasicChartSpec;
    // Create a new instance of BasicFilter
    newBasicFilter(): Sheets.Schema.BasicFilter;
    // Create a new instance of BatchClearValuesByDataFilterRequest
    newBatchClearValuesByDataFilterRequest(): Sheets.Schema.BatchClearValuesByDataFilterRequest;
    // Create a new instance of BatchClearValuesRequest
    newBatchClearValuesRequest(): Sheets.Schema.BatchClearValuesRequest;
    // Create a new instance of BatchGetValuesByDataFilterRequest
    newBatchGetValuesByDataFilterRequest(): Sheets.Schema.BatchGetValuesByDataFilterRequest;
    // Create a new instance of BatchUpdateSpreadsheetRequest
    newBatchUpdateSpreadsheetRequest(): Sheets.Schema.BatchUpdateSpreadsheetRequest;
    // Create a new instance of BatchUpdateValuesByDataFilterRequest
    newBatchUpdateValuesByDataFilterRequest(): Sheets.Schema.BatchUpdateValuesByDataFilterRequest;
    // Create a new instance of BatchUpdateValuesRequest
    newBatchUpdateValuesRequest(): Sheets.Schema.BatchUpdateValuesRequest;
    // Create a new instance of BooleanCondition
    newBooleanCondition(): Sheets.Schema.BooleanCondition;
    // Create a new instance of BooleanRule
    newBooleanRule(): Sheets.Schema.BooleanRule;
    // Create a new instance of Border
    newBorder(): Sheets.Schema.Border;
    // Create a new instance of Borders
    newBorders(): Sheets.Schema.Borders;
    // Create a new instance of BubbleChartSpec
    newBubbleChartSpec(): Sheets.Schema.BubbleChartSpec;
    // Create a new instance of CandlestickChartSpec
    newCandlestickChartSpec(): Sheets.Schema.CandlestickChartSpec;
    // Create a new instance of CandlestickData
    newCandlestickData(): Sheets.Schema.CandlestickData;
    // Create a new instance of CandlestickDomain
    newCandlestickDomain(): Sheets.Schema.CandlestickDomain;
    // Create a new instance of CandlestickSeries
    newCandlestickSeries(): Sheets.Schema.CandlestickSeries;
    // Create a new instance of CellData
    newCellData(): Sheets.Schema.CellData;
    // Create a new instance of CellFormat
    newCellFormat(): Sheets.Schema.CellFormat;
    // Create a new instance of ChartData
    newChartData(): Sheets.Schema.ChartData;
    // Create a new instance of ChartSourceRange
    newChartSourceRange(): Sheets.Schema.ChartSourceRange;
    // Create a new instance of ChartSpec
    newChartSpec(): Sheets.Schema.ChartSpec;
    // Create a new instance of ClearBasicFilterRequest
    newClearBasicFilterRequest(): Sheets.Schema.ClearBasicFilterRequest;
    // Create a new instance of ClearValuesRequest
    newClearValuesRequest(): any; // Schema.ClearValuesRequest;
    // Create a new instance of Color
    newColor(): Sheets.Schema.Color;
    // Create a new instance of ConditionValue
    newConditionValue(): Sheets.Schema.ConditionValue;
    // Create a new instance of ConditionalFormatRule
    newConditionalFormatRule(): Sheets.Schema.ConditionalFormatRule;
    // Create a new instance of CopyPasteRequest
    newCopyPasteRequest(): Sheets.Schema.CopyPasteRequest;
    // Create a new instance of CopySheetToAnotherSpreadsheetRequest
    newCopySheetToAnotherSpreadsheetRequest(): Sheets.Schema.CopySheetToAnotherSpreadsheetRequest;
    // Create a new instance of CreateDeveloperMetadataRequest
    newCreateDeveloperMetadataRequest(): Sheets.Schema.CreateDeveloperMetadataRequest;
    // Create a new instance of CutPasteRequest
    newCutPasteRequest(): Sheets.Schema.CutPasteRequest;
    // Create a new instance of DataFilter
    newDataFilter(): Sheets.Schema.DataFilter;
    // Create a new instance of DataFilterValueRange
    newDataFilterValueRange(): Sheets.Schema.DataFilterValueRange;
    // Create a new instance of DataValidationRule
    newDataValidationRule(): Sheets.Schema.DataValidationRule;
    // Create a new instance of DateTimeRule
    newDateTimeRule(): Sheets.Schema.DateTimeRule;
    // Create a new instance of DeleteBandingRequest
    newDeleteBandingRequest(): Sheets.Schema.DeleteBandingRequest;
    // Create a new instance of DeleteConditionalFormatRuleRequest
    newDeleteConditionalFormatRuleRequest(): Sheets.Schema.DeleteConditionalFormatRuleRequest;
    // Create a new instance of DeleteDeveloperMetadataRequest
    newDeleteDeveloperMetadataRequest(): Sheets.Schema.DeleteDeveloperMetadataRequest;
    // Create a new instance of DeleteDimensionGroupRequest
    newDeleteDimensionGroupRequest(): Sheets.Schema.DeleteDimensionGroupRequest;
    // Create a new instance of DeleteDimensionRequest
    newDeleteDimensionRequest(): Sheets.Schema.DeleteDimensionRequest;
    // Create a new instance of DeleteEmbeddedObjectRequest
    newDeleteEmbeddedObjectRequest(): Sheets.Schema.DeleteEmbeddedObjectRequest;
    // Create a new instance of DeleteFilterViewRequest
    newDeleteFilterViewRequest(): Sheets.Schema.DeleteFilterViewRequest;
    // Create a new instance of DeleteNamedRangeRequest
    newDeleteNamedRangeRequest(): Sheets.Schema.DeleteNamedRangeRequest;
    // Create a new instance of DeleteProtectedRangeRequest
    newDeleteProtectedRangeRequest(): Sheets.Schema.DeleteProtectedRangeRequest;
    // Create a new instance of DeleteRangeRequest
    newDeleteRangeRequest(): Sheets.Schema.DeleteRangeRequest;
    // Create a new instance of DeleteSheetRequest
    newDeleteSheetRequest(): Sheets.Schema.DeleteSheetRequest;
    // Create a new instance of DeveloperMetadata
    newDeveloperMetadata(): Sheets.Schema.DeveloperMetadata;
    // Create a new instance of DeveloperMetadataLocation
    newDeveloperMetadataLocation(): Sheets.Schema.DeveloperMetadataLocation;
    // Create a new instance of DeveloperMetadataLookup
    newDeveloperMetadataLookup(): Sheets.Schema.DeveloperMetadataLookup;
    // Create a new instance of DimensionGroup
    newDimensionGroup(): Sheets.Schema.DimensionGroup;
    // Create a new instance of DimensionProperties
    newDimensionProperties(): Sheets.Schema.DimensionProperties;
    // Create a new instance of DimensionRange
    newDimensionRange(): Sheets.Schema.DimensionRange;
    // Create a new instance of DuplicateFilterViewRequest
    newDuplicateFilterViewRequest(): Sheets.Schema.DuplicateFilterViewRequest;
    // Create a new instance of DuplicateSheetRequest
    newDuplicateSheetRequest(): Sheets.Schema.DuplicateSheetRequest;
    // Create a new instance of Editors
    newEditors(): Sheets.Schema.Editors;
    // Create a new instance of EmbeddedChart
    newEmbeddedChart(): Sheets.Schema.EmbeddedChart;
    // Create a new instance of EmbeddedObjectPosition
    newEmbeddedObjectPosition(): Sheets.Schema.EmbeddedObjectPosition;
    // Create a new instance of ErrorValue
    newErrorValue(): Sheets.Schema.ErrorValue;
    // Create a new instance of ExtendedValue
    newExtendedValue(): Sheets.Schema.ExtendedValue;
    // Create a new instance of FilterView
    newFilterView(): Sheets.Schema.FilterView;
    // Create a new instance of FindReplaceRequest
    newFindReplaceRequest(): Sheets.Schema.FindReplaceRequest;
    // Create a new instance of GetSpreadsheetByDataFilterRequest
    newGetSpreadsheetByDataFilterRequest(): Sheets.Schema.GetSpreadsheetByDataFilterRequest;
    // Create a new instance of GradientRule
    newGradientRule(): Sheets.Schema.GradientRule;
    // Create a new instance of GridCoordinate
    newGridCoordinate(): Sheets.Schema.GridCoordinate;
    // Create a new instance of GridData
    newGridData(): Sheets.Schema.GridData;
    // Create a new instance of GridProperties
    newGridProperties(): Sheets.Schema.GridProperties;
    // Create a new instance of GridRange
    newGridRange(): Sheets.Schema.GridRange;
    // Create a new instance of HistogramChartSpec
    newHistogramChartSpec(): Sheets.Schema.HistogramChartSpec;
    // Create a new instance of HistogramRule
    newHistogramRule(): Sheets.Schema.HistogramRule;
    // Create a new instance of HistogramSeries
    newHistogramSeries(): Sheets.Schema.HistogramSeries;
    // Create a new instance of InsertDimensionRequest
    newInsertDimensionRequest(): Sheets.Schema.InsertDimensionRequest;
    // Create a new instance of InsertRangeRequest
    newInsertRangeRequest(): Sheets.Schema.InsertRangeRequest;
    // Create a new instance of InterpolationPoint
    newInterpolationPoint(): Sheets.Schema.InterpolationPoint;
    // Create a new instance of IterativeCalculationSettings
    newIterativeCalculationSettings(): Sheets.Schema.IterativeCalculationSettings;
    // Create a new instance of LineStyle
    newLineStyle(): Sheets.Schema.LineStyle;
    // Create a new instance of ManualRule
    newManualRule(): Sheets.Schema.ManualRule;
    // Create a new instance of ManualRuleGroup
    newManualRuleGroup(): Sheets.Schema.ManualRuleGroup;
    // Create a new instance of MergeCellsRequest
    newMergeCellsRequest(): Sheets.Schema.MergeCellsRequest;
    // Create a new instance of MoveDimensionRequest
    newMoveDimensionRequest(): Sheets.Schema.MoveDimensionRequest;
    // Create a new instance of NamedRange
    newNamedRange(): Sheets.Schema.NamedRange;
    // Create a new instance of NumberFormat
    newNumberFormat(): Sheets.Schema.NumberFormat;
    // Create a new instance of OrgChartSpec
    newOrgChartSpec(): Sheets.Schema.OrgChartSpec;
    // Create a new instance of OverlayPosition
    newOverlayPosition(): Sheets.Schema.OverlayPosition;
    // Create a new instance of Padding
    newPadding(): Sheets.Schema.Padding;
    // Create a new instance of PasteDataRequest
    newPasteDataRequest(): Sheets.Schema.PasteDataRequest;
    // Create a new instance of PieChartSpec
    newPieChartSpec(): Sheets.Schema.PieChartSpec;
    // Create a new instance of PivotGroup
    newPivotGroup(): Sheets.Schema.PivotGroup;
    // Create a new instance of PivotGroupRule
    newPivotGroupRule(): Sheets.Schema.PivotGroupRule;
    // Create a new instance of PivotGroupSortValueBucket
    newPivotGroupSortValueBucket(): Sheets.Schema.PivotGroupSortValueBucket;
    // Create a new instance of PivotGroupValueMetadata
    newPivotGroupValueMetadata(): Sheets.Schema.PivotGroupValueMetadata;
    // Create a new instance of PivotTable
    newPivotTable(): Sheets.Schema.PivotTable;
    // Create a new instance of PivotValue
    newPivotValue(): Sheets.Schema.PivotValue;
    // Create a new instance of ProtectedRange
    newProtectedRange(): Sheets.Schema.ProtectedRange;
    // Create a new instance of RandomizeRangeRequest
    newRandomizeRangeRequest(): Sheets.Schema.RandomizeRangeRequest;
    // Create a new instance of RepeatCellRequest
    newRepeatCellRequest(): Sheets.Schema.RepeatCellRequest;
    // Create a new instance of Request
    newRequest(): Sheets.Schema.Request;
    // Create a new instance of RowData
    newRowData(): Sheets.Schema.RowData;
    // Create a new instance of SearchDeveloperMetadataRequest
    newSearchDeveloperMetadataRequest(): Sheets.Schema.SearchDeveloperMetadataRequest;
    // Create a new instance of SetBasicFilterRequest
    newSetBasicFilterRequest(): Sheets.Schema.SetBasicFilterRequest;
    // Create a new instance of SetDataValidationRequest
    newSetDataValidationRequest(): Sheets.Schema.SetDataValidationRequest;
    // Create a new instance of Sheet
    newSheet(): Sheets.Schema.Sheet;
    // Create a new instance of SheetProperties
    newSheetProperties(): Sheets.Schema.SheetProperties;
    // Create a new instance of SortRangeRequest
    newSortRangeRequest(): Sheets.Schema.SortRangeRequest;
    // Create a new instance of SortSpec
    newSortSpec(): Sheets.Schema.SortSpec;
    // Create a new instance of SourceAndDestination
    newSourceAndDestination(): Sheets.Schema.SourceAndDestination;
    // Create a new instance of Spreadsheet
    newSpreadsheet(): Sheets.Schema.Spreadsheet;
    // Create a new instance of SpreadsheetProperties
    newSpreadsheetProperties(): Sheets.Schema.SpreadsheetProperties;
    // Create a new instance of TextFormat
    newTextFormat(): Sheets.Schema.TextFormat;
    // Create a new instance of TextFormatRun
    newTextFormatRun(): Sheets.Schema.TextFormatRun;
    // Create a new instance of TextPosition
    newTextPosition(): Sheets.Schema.TextPosition;
    // Create a new instance of TextRotation
    newTextRotation(): Sheets.Schema.TextRotation;
    // Create a new instance of TextToColumnsRequest
    newTextToColumnsRequest(): Sheets.Schema.TextToColumnsRequest;
    // Create a new instance of TreemapChartColorScale
    newTreemapChartColorScale(): Sheets.Schema.TreemapChartColorScale;
    // Create a new instance of TreemapChartSpec
    newTreemapChartSpec(): Sheets.Schema.TreemapChartSpec;
    // Create a new instance of UnmergeCellsRequest
    newUnmergeCellsRequest(): Sheets.Schema.UnmergeCellsRequest;
    // Create a new instance of UpdateBandingRequest
    newUpdateBandingRequest(): Sheets.Schema.UpdateBandingRequest;
    // Create a new instance of UpdateBordersRequest
    newUpdateBordersRequest(): Sheets.Schema.UpdateBordersRequest;
    // Create a new instance of UpdateCellsRequest
    newUpdateCellsRequest(): Sheets.Schema.UpdateCellsRequest;
    // Create a new instance of UpdateChartSpecRequest
    newUpdateChartSpecRequest(): Sheets.Schema.UpdateChartSpecRequest;
    // Create a new instance of UpdateConditionalFormatRuleRequest
    newUpdateConditionalFormatRuleRequest(): Sheets.Schema.UpdateConditionalFormatRuleRequest;
    // Create a new instance of UpdateDeveloperMetadataRequest
    newUpdateDeveloperMetadataRequest(): Sheets.Schema.UpdateDeveloperMetadataRequest;
    // Create a new instance of UpdateDimensionGroupRequest
    newUpdateDimensionGroupRequest(): Sheets.Schema.UpdateDimensionGroupRequest;
    // Create a new instance of UpdateDimensionPropertiesRequest
    newUpdateDimensionPropertiesRequest(): Sheets.Schema.UpdateDimensionPropertiesRequest;
    // Create a new instance of UpdateEmbeddedObjectPositionRequest
    newUpdateEmbeddedObjectPositionRequest(): Sheets.Schema.UpdateEmbeddedObjectPositionRequest;
    // Create a new instance of UpdateFilterViewRequest
    newUpdateFilterViewRequest(): Sheets.Schema.UpdateFilterViewRequest;
    // Create a new instance of UpdateNamedRangeRequest
    newUpdateNamedRangeRequest(): Sheets.Schema.UpdateNamedRangeRequest;
    // Create a new instance of UpdateProtectedRangeRequest
    newUpdateProtectedRangeRequest(): Sheets.Schema.UpdateProtectedRangeRequest;
    // Create a new instance of UpdateSheetPropertiesRequest
    newUpdateSheetPropertiesRequest(): Sheets.Schema.UpdateSheetPropertiesRequest;
    // Create a new instance of UpdateSpreadsheetPropertiesRequest
    newUpdateSpreadsheetPropertiesRequest(): Sheets.Schema.UpdateSpreadsheetPropertiesRequest;
    // Create a new instance of ValueRange
    newValueRange(): Sheets.Schema.ValueRange;
    // Create a new instance of WaterfallChartColumnStyle
    newWaterfallChartColumnStyle(): Sheets.Schema.WaterfallChartColumnStyle;
    // Create a new instance of WaterfallChartCustomSubtotal
    newWaterfallChartCustomSubtotal(): Sheets.Schema.WaterfallChartCustomSubtotal;
    // Create a new instance of WaterfallChartDomain
    newWaterfallChartDomain(): Sheets.Schema.WaterfallChartDomain;
    // Create a new instance of WaterfallChartSeries
    newWaterfallChartSeries(): Sheets.Schema.WaterfallChartSeries;
    // Create a new instance of WaterfallChartSpec
    newWaterfallChartSpec(): Sheets.Schema.WaterfallChartSpec;
  }
}

declare var Sheets: GoogleAppsScript.Sheets;
