// Type definitions for Google Apps Script 2021-02-11
// Project: https://developers.google.com/apps-script/
// Generator: https://github.com/mtgto/dts-google-apps-script-advanced
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare namespace GoogleAppsScript {
    namespace Sheets {
        namespace Collection {
            namespace Spreadsheets {
                interface DeveloperMetadataCollection {
                    // Returns the developer metadata with the specified ID. The caller must specify the spreadsheet ID and the developer
                    // metadata's unique metadataId.
                    get(spreadsheetId: string, metadataId: Integer): Schema.DeveloperMetadata;
                    // Returns all developer metadata matching the specified DataFilter. If the provided DataFilter represents a
                    // DeveloperMetadataLookup object, this will return all DeveloperMetadata entries selected by it. If the DataFilter
                    // represents a location in a spreadsheet, this will return all developer metadata associated with locations intersecting
                    // that region.
                    search(resource: Schema.SearchDeveloperMetadataRequest, spreadsheetId: string): Schema.SearchDeveloperMetadataResponse;
                }
                interface SheetsCollection {
                    // Copies a single sheet from a spreadsheet to another spreadsheet. Returns the properties of the newly created sheet.
                    copyTo(resource: Schema.CopySheetToAnotherSpreadsheetRequest, spreadsheetId: string, sheetId: Integer): Schema.SheetProperties;
                }
                interface ValuesCollection {
                    // Appends values to a spreadsheet. The input range is used to search for existing data and find a "table" within that
                    // range. Values will be appended to the next row of the table, starting with the first column of the table. See the
                    // [guide](/sheets/api/guides/values#appending_values) and [sample code](/sheets/api/samples/writing#append_values) for
                    // specific details of how tables are detected and data is appended. The caller must specify the spreadsheet ID, range, and
                    // a valueInputOption. The `valueInputOption` only controls how the input data will be added to the sheet (column-wise or
                    // row-wise), it does not influence what cell the data starts being written to.
                    append(resource: Schema.ValueRange, spreadsheetId: string, range: string): Schema.AppendValuesResponse;
                    // Appends values to a spreadsheet. The input range is used to search for existing data and find a "table" within that
                    // range. Values will be appended to the next row of the table, starting with the first column of the table. See the
                    // [guide](/sheets/api/guides/values#appending_values) and [sample code](/sheets/api/samples/writing#append_values) for
                    // specific details of how tables are detected and data is appended. The caller must specify the spreadsheet ID, range, and
                    // a valueInputOption. The `valueInputOption` only controls how the input data will be added to the sheet (column-wise or
                    // row-wise), it does not influence what cell the data starts being written to.
                    append(resource: Schema.ValueRange, spreadsheetId: string, range: string, optionalArgs: object): Schema.AppendValuesResponse;
                    // Clears one or more ranges of values from a spreadsheet. The caller must specify the spreadsheet ID and one or more
                    // ranges. Only values are cleared -- all other properties of the cell (such as formatting, data validation, etc..) are
                    // kept.
                    batchClear(resource: Schema.BatchClearValuesRequest, spreadsheetId: string): Schema.BatchClearValuesResponse;
                    // Clears one or more ranges of values from a spreadsheet. The caller must specify the spreadsheet ID and one or more
                    // DataFilters. Ranges matching any of the specified data filters will be cleared. Only values are cleared -- all other
                    // properties of the cell (such as formatting, data validation, etc..) are kept.
                    batchClearByDataFilter(resource: Schema.BatchClearValuesByDataFilterRequest, spreadsheetId: string): Schema.BatchClearValuesByDataFilterResponse;
                    // Returns one or more ranges of values from a spreadsheet. The caller must specify the spreadsheet ID and one or more
                    // ranges.
                    batchGet(spreadsheetId: string): Schema.BatchGetValuesResponse;
                    // Returns one or more ranges of values from a spreadsheet. The caller must specify the spreadsheet ID and one or more
                    // ranges.
                    batchGet(spreadsheetId: string, optionalArgs: object): Schema.BatchGetValuesResponse;
                    // Returns one or more ranges of values that match the specified data filters. The caller must specify the spreadsheet ID
                    // and one or more DataFilters. Ranges that match any of the data filters in the request will be returned.
                    batchGetByDataFilter(resource: Schema.BatchGetValuesByDataFilterRequest, spreadsheetId: string): Schema.BatchGetValuesByDataFilterResponse;
                    // Sets values in one or more ranges of a spreadsheet. The caller must specify the spreadsheet ID, a valueInputOption, and
                    // one or more ValueRanges.
                    batchUpdate(resource: Schema.BatchUpdateValuesRequest, spreadsheetId: string): Schema.BatchUpdateValuesResponse;
                    // Sets values in one or more ranges of a spreadsheet. The caller must specify the spreadsheet ID, a valueInputOption, and
                    // one or more DataFilterValueRanges.
                    batchUpdateByDataFilter(resource: Schema.BatchUpdateValuesByDataFilterRequest, spreadsheetId: string): Schema.BatchUpdateValuesByDataFilterResponse;
                    // Clears values from a spreadsheet. The caller must specify the spreadsheet ID and range. Only values are cleared -- all
                    // other properties of the cell (such as formatting, data validation, etc..) are kept.
                    clear(resource: any, spreadsheetId: string, range: string): Schema.ClearValuesResponse;
                    // Returns a range of values from a spreadsheet. The caller must specify the spreadsheet ID and a range.
                    get(spreadsheetId: string, range: string): Schema.ValueRange;
                    // Returns a range of values from a spreadsheet. The caller must specify the spreadsheet ID and a range.
                    get(spreadsheetId: string, range: string, optionalArgs: object): Schema.ValueRange;
                    // Sets values in a range of a spreadsheet. The caller must specify the spreadsheet ID, range, and a valueInputOption.
                    update(resource: Schema.ValueRange, spreadsheetId: string, range: string): Schema.UpdateValuesResponse;
                    // Sets values in a range of a spreadsheet. The caller must specify the spreadsheet ID, range, and a valueInputOption.
                    update(resource: Schema.ValueRange, spreadsheetId: string, range: string, optionalArgs: object): Schema.UpdateValuesResponse;
                }
            }
            interface SpreadsheetsCollection {
                DeveloperMetadata?: Collection.Spreadsheets.DeveloperMetadataCollection;
                Sheets?: Collection.Spreadsheets.SheetsCollection;
                Values?: Collection.Spreadsheets.ValuesCollection;
                // Applies one or more updates to the spreadsheet. Each request is validated before being applied. If any request is not
                // valid then the entire request will fail and nothing will be applied. Some requests have replies to give you some
                // information about how they are applied. The replies will mirror the requests. For example, if you applied 4 updates and
                // the 3rd one had a reply, then the response will have 2 empty replies, the actual reply, and another empty reply, in that
                // order. Due to the collaborative nature of spreadsheets, it is not guaranteed that the spreadsheet will reflect exactly
                // your changes after this completes, however it is guaranteed that the updates in the request will be applied together
                // atomically. Your changes may be altered with respect to collaborator changes. If there are no collaborators, the
                // spreadsheet should reflect your changes.
                batchUpdate(resource: Schema.BatchUpdateSpreadsheetRequest, spreadsheetId: string): Schema.BatchUpdateSpreadsheetResponse;
                // Creates a spreadsheet, returning the newly created spreadsheet.
                create(resource: Schema.Spreadsheet): Schema.Spreadsheet;
                // Returns the spreadsheet at the given ID. The caller must specify the spreadsheet ID. By default, data within grids will
                // not be returned. You can include grid data one of two ways: * Specify a field mask listing your desired fields using the
                // `fields` URL parameter in HTTP * Set the includeGridData URL parameter to true. If a field mask is set, the
                // `includeGridData` parameter is ignored For large spreadsheets, it is recommended to retrieve only the specific fields of
                // the spreadsheet that you want. To retrieve only subsets of the spreadsheet, use the ranges URL parameter. Multiple
                // ranges can be specified. Limiting the range will return only the portions of the spreadsheet that intersect the
                // requested ranges. Ranges are specified using A1 notation.
                get(spreadsheetId: string): Schema.Spreadsheet;
                // Returns the spreadsheet at the given ID. The caller must specify the spreadsheet ID. By default, data within grids will
                // not be returned. You can include grid data one of two ways: * Specify a field mask listing your desired fields using the
                // `fields` URL parameter in HTTP * Set the includeGridData URL parameter to true. If a field mask is set, the
                // `includeGridData` parameter is ignored For large spreadsheets, it is recommended to retrieve only the specific fields of
                // the spreadsheet that you want. To retrieve only subsets of the spreadsheet, use the ranges URL parameter. Multiple
                // ranges can be specified. Limiting the range will return only the portions of the spreadsheet that intersect the
                // requested ranges. Ranges are specified using A1 notation.
                get(spreadsheetId: string, optionalArgs: object): Schema.Spreadsheet;
                // Returns the spreadsheet at the given ID. The caller must specify the spreadsheet ID. This method differs from
                // GetSpreadsheet in that it allows selecting which subsets of spreadsheet data to return by specifying a dataFilters
                // parameter. Multiple DataFilters can be specified. Specifying one or more data filters will return the portions of the
                // spreadsheet that intersect ranges matched by any of the filters. By default, data within grids will not be returned. You
                // can include grid data one of two ways: * Specify a field mask listing your desired fields using the `fields` URL
                // parameter in HTTP * Set the includeGridData parameter to true. If a field mask is set, the `includeGridData` parameter
                // is ignored For large spreadsheets, it is recommended to retrieve only the specific fields of the spreadsheet that you
                // want.
                getByDataFilter(resource: Schema.GetSpreadsheetByDataFilterRequest, spreadsheetId: string): Schema.Spreadsheet;
            }
        }
        namespace Schema {
            // Adds a new banded range to the spreadsheet.
            interface AddBandingRequest {
                // The banded range to add. The bandedRangeId field is optional; if one is not set, an id will be randomly generated. (It
                // is an error to specify the ID of a range that already exists.)
                bandedRange?: Schema.BandedRange;
            }
            // The result of adding a banded range.
            interface AddBandingResponse {
                // The banded range that was added.
                bandedRange?: Schema.BandedRange;
            }
            // Adds a chart to a sheet in the spreadsheet.
            interface AddChartRequest {
                // The chart that should be added to the spreadsheet, including the position where it should be placed. The chartId field
                // is optional; if one is not set, an id will be randomly generated. (It is an error to specify the ID of an embedded
                // object that already exists.)
                chart?: Schema.EmbeddedChart;
            }
            // The result of adding a chart to a spreadsheet.
            interface AddChartResponse {
                // The newly added chart.
                chart?: Schema.EmbeddedChart;
            }
            // Adds a new conditional format rule at the given index. All subsequent rules' indexes are incremented.
            interface AddConditionalFormatRuleRequest {
                // The zero-based index where the rule should be inserted.
                index?: Integer;
                // The rule to add.
                rule?: Schema.ConditionalFormatRule;
            }
            // Adds a data source. After the data source is added successfully, an associated DATA_SOURCE sheet is created and an
            // execution is triggered to refresh the sheet to read data from the data source. The request requires an additional
            // `bigquery.readonly` OAuth scope.
            interface AddDataSourceRequest {
                // The data source to add.
                dataSource?: Schema.DataSource;
            }
            // The result of adding a data source.
            interface AddDataSourceResponse {
                // The data execution status.
                dataExecutionStatus?: Schema.DataExecutionStatus;
                // The data source that was created.
                dataSource?: Schema.DataSource;
            }
            // Creates a group over the specified range. If the requested range is a superset of the range of an existing group G, then
            // the depth of G is incremented and this new group G' has the depth of that group. For example, a group [C:D, depth 1] +
            // [B:E] results in groups [B:E, depth 1] and [C:D, depth 2]. If the requested range is a subset of the range of an
            // existing group G, then the depth of the new group G' becomes one greater than the depth of G. For example, a group [B:E,
            // depth 1] + [C:D] results in groups [B:E, depth 1] and [C:D, depth 2]. If the requested range starts before and ends
            // within, or starts within and ends after, the range of an existing group G, then the range of the existing group G
            // becomes the union of the ranges, and the new group G' has depth one greater than the depth of G and range as the
            // intersection of the ranges. For example, a group [B:D, depth 1] + [C:E] results in groups [B:E, depth 1] and [C:D, depth
            // 2].
            interface AddDimensionGroupRequest {
                // The range over which to create a group.
                range?: Schema.DimensionRange;
            }
            // The result of adding a group.
            interface AddDimensionGroupResponse {
                // All groups of a dimension after adding a group to that dimension.
                dimensionGroups?: Schema.DimensionGroup[];
            }
            // Adds a filter view.
            interface AddFilterViewRequest {
                // The filter to add. The filterViewId field is optional; if one is not set, an id will be randomly generated. (It is an
                // error to specify the ID of a filter that already exists.)
                filter?: Schema.FilterView;
            }
            // The result of adding a filter view.
            interface AddFilterViewResponse {
                // The newly added filter view.
                filter?: Schema.FilterView;
            }
            // Adds a named range to the spreadsheet.
            interface AddNamedRangeRequest {
                // The named range to add. The namedRangeId field is optional; if one is not set, an id will be randomly generated. (It is
                // an error to specify the ID of a range that already exists.)
                namedRange?: Schema.NamedRange;
            }
            // The result of adding a named range.
            interface AddNamedRangeResponse {
                // The named range to add.
                namedRange?: Schema.NamedRange;
            }
            // Adds a new protected range.
            interface AddProtectedRangeRequest {
                // The protected range to be added. The protectedRangeId field is optional; if one is not set, an id will be randomly
                // generated. (It is an error to specify the ID of a range that already exists.)
                protectedRange?: Schema.ProtectedRange;
            }
            // The result of adding a new protected range.
            interface AddProtectedRangeResponse {
                // The newly added protected range.
                protectedRange?: Schema.ProtectedRange;
            }
            // Adds a new sheet. When a sheet is added at a given index, all subsequent sheets' indexes are incremented. To add an
            // object sheet, use AddChartRequest instead and specify EmbeddedObjectPosition.sheetId or EmbeddedObjectPosition.newSheet.
            interface AddSheetRequest {
                // The properties the new sheet should have. All properties are optional. The sheetId field is optional; if one is not set,
                // an id will be randomly generated. (It is an error to specify the ID of a sheet that already exists.)
                properties?: Schema.SheetProperties;
            }
            // The result of adding a sheet.
            interface AddSheetResponse {
                // The properties of the newly added sheet.
                properties?: Schema.SheetProperties;
            }
            // Adds a slicer to a sheet in the spreadsheet.
            interface AddSlicerRequest {
                // The slicer that should be added to the spreadsheet, including the position where it should be placed. The slicerId field
                // is optional; if one is not set, an id will be randomly generated. (It is an error to specify the ID of a slicer that
                // already exists.)
                slicer?: Schema.Slicer;
            }
            // The result of adding a slicer to a spreadsheet.
            interface AddSlicerResponse {
                // The newly added slicer.
                slicer?: Schema.Slicer;
            }
            // Adds new cells after the last row with data in a sheet, inserting new rows into the sheet if necessary.
            interface AppendCellsRequest {
                // The fields of CellData that should be updated. At least one field must be specified. The root is the CellData;
                // 'row.values.' should not be specified. A single `"*"` can be used as short-hand for listing every field.
                fields?: string;
                // The data to append.
                rows?: Schema.RowData[];
                // The sheet ID to append the data to.
                sheetId?: Integer;
            }
            // Appends rows or columns to the end of a sheet.
            interface AppendDimensionRequest {
                // Whether rows or columns should be appended.
                dimension?: string;
                // The number of rows or columns to append.
                length?: Integer;
                // The sheet to append rows or columns to.
                sheetId?: Integer;
            }
            // The response when updating a range of values in a spreadsheet.
            interface AppendValuesResponse {
                // The spreadsheet the updates were applied to.
                spreadsheetId?: string;
                // The range (in A1 notation) of the table that values are being appended to (before the values were appended). Empty if no
                // table was found.
                tableRange?: string;
                // Information about the updates that were applied.
                updates?: Schema.UpdateValuesResponse;
            }
            // Fills in more data based on existing data.
            interface AutoFillRequest {
                // The range to autofill. This will examine the range and detect the location that has data and automatically fill that
                // data in to the rest of the range.
                range?: Schema.GridRange;
                // The source and destination areas to autofill. This explicitly lists the source of the autofill and where to extend that
                // data.
                sourceAndDestination?: Schema.SourceAndDestination;
                // True if we should generate data with the "alternate" series. This differs based on the type and amount of source data.
                useAlternateSeries?: boolean;
            }
            // Automatically resizes one or more dimensions based on the contents of the cells in that dimension.
            interface AutoResizeDimensionsRequest {
                // The dimensions on a data source sheet to automatically resize.
                dataSourceSheetDimensions?: Schema.DataSourceSheetDimensionRange;
                // The dimensions to automatically resize.
                dimensions?: Schema.DimensionRange;
            }
            // A banded (alternating colors) range in a sheet.
            interface BandedRange {
                // The id of the banded range.
                bandedRangeId?: Integer;
                // Properties for column bands. These properties are applied on a column- by-column basis throughout all the columns in the
                // range. At least one of row_properties or column_properties must be specified.
                columnProperties?: Schema.BandingProperties;
                // The range over which these properties are applied.
                range?: Schema.GridRange;
                // Properties for row bands. These properties are applied on a row-by-row basis throughout all the rows in the range. At
                // least one of row_properties or column_properties must be specified.
                rowProperties?: Schema.BandingProperties;
            }
            // Properties referring a single dimension (either row or column). If both BandedRange.row_properties and
            // BandedRange.column_properties are set, the fill colors are applied to cells according to the following rules: *
            // header_color and footer_color take priority over band colors. * first_band_color takes priority over second_band_color.
            // * row_properties takes priority over column_properties. For example, the first row color takes priority over the first
            // column color, but the first column color takes priority over the second row color. Similarly, the row header takes
            // priority over the column header in the top left cell, but the column header takes priority over the first row color if
            // the row header is not set.
            interface BandingProperties {
                // The first color that is alternating. (Required)
                firstBandColor?: Schema.Color;
                // The first color that is alternating. (Required) If first_band_color is also set, this field takes precedence.
                firstBandColorStyle?: Schema.ColorStyle;
                // The color of the last row or column. If this field is not set, the last row or column is filled with either
                // first_band_color or second_band_color, depending on the color of the previous row or column.
                footerColor?: Schema.Color;
                // The color of the last row or column. If this field is not set, the last row or column is filled with either
                // first_band_color or second_band_color, depending on the color of the previous row or column. If footer_color is also
                // set, this field takes precedence.
                footerColorStyle?: Schema.ColorStyle;
                // The color of the first row or column. If this field is set, the first row or column is filled with this color and the
                // colors alternate between first_band_color and second_band_color starting from the second row or column. Otherwise, the
                // first row or column is filled with first_band_color and the colors proceed to alternate as they normally would.
                headerColor?: Schema.Color;
                // The color of the first row or column. If this field is set, the first row or column is filled with this color and the
                // colors alternate between first_band_color and second_band_color starting from the second row or column. Otherwise, the
                // first row or column is filled with first_band_color and the colors proceed to alternate as they normally would. If
                // header_color is also set, this field takes precedence.
                headerColorStyle?: Schema.ColorStyle;
                // The second color that is alternating. (Required)
                secondBandColor?: Schema.Color;
                // The second color that is alternating. (Required) If second_band_color is also set, this field takes precedence.
                secondBandColorStyle?: Schema.ColorStyle;
            }
            // Formatting options for baseline value.
            interface BaselineValueFormat {
                // The comparison type of key value with baseline value.
                comparisonType?: string;
                // Description which is appended after the baseline value. This field is optional.
                description?: string;
                // Color to be used, in case baseline value represents a negative change for key value. This field is optional.
                negativeColor?: Schema.Color;
                // Color to be used, in case baseline value represents a negative change for key value. This field is optional. If
                // negative_color is also set, this field takes precedence.
                negativeColorStyle?: Schema.ColorStyle;
                // Specifies the horizontal text positioning of baseline value. This field is optional. If not specified, default
                // positioning is used.
                position?: Schema.TextPosition;
                // Color to be used, in case baseline value represents a positive change for key value. This field is optional.
                positiveColor?: Schema.Color;
                // Color to be used, in case baseline value represents a positive change for key value. This field is optional. If
                // positive_color is also set, this field takes precedence.
                positiveColorStyle?: Schema.ColorStyle;
                // Text formatting options for baseline value.
                textFormat?: Schema.TextFormat;
            }
            // An axis of the chart. A chart may not have more than one axis per axis position.
            interface BasicChartAxis {
                // The format of the title. Only valid if the axis is not associated with the domain.
                format?: Schema.TextFormat;
                // The position of this axis.
                position?: string;
                // The title of this axis. If set, this overrides any title inferred from headers of the data.
                title?: string;
                // The axis title text position.
                titleTextPosition?: Schema.TextPosition;
                // The view window options for this axis.
                viewWindowOptions?: Schema.ChartAxisViewWindowOptions;
            }
            // The domain of a chart. For example, if charting stock prices over time, this would be the date.
            interface BasicChartDomain {
                // The data of the domain. For example, if charting stock prices over time, this is the data representing the dates.
                domain?: Schema.ChartData;
                // True to reverse the order of the domain values (horizontal axis).
                reversed?: boolean;
            }
            // A single series of data in a chart. For example, if charting stock prices over time, multiple series may exist, one for
            // the "Open Price", "High Price", "Low Price" and "Close Price".
            interface BasicChartSeries {
                // The color for elements (such as bars, lines, and points) associated with this series. If empty, a default color is used.
                color?: Schema.Color;
                // The color for elements (such as bars, lines, and points) associated with this series. If empty, a default color is used.
                // If color is also set, this field takes precedence.
                colorStyle?: Schema.ColorStyle;
                // Information about the data labels for this series.
                dataLabel?: Schema.DataLabel;
                // The line style of this series. Valid only if the chartType is AREA, LINE, or SCATTER. COMBO charts are also supported if
                // the series chart type is AREA or LINE.
                lineStyle?: Schema.LineStyle;
                // The style for points associated with this series. Valid only if the chartType is AREA, LINE, or SCATTER. COMBO charts
                // are also supported if the series chart type is AREA, LINE, or SCATTER. If empty, a default point style is used.
                pointStyle?: Schema.PointStyle;
                // The data being visualized in this chart series.
                series?: Schema.ChartData;
                // Style override settings for series data points.
                styleOverrides?: Schema.BasicSeriesDataPointStyleOverride[];
                // The minor axis that will specify the range of values for this series. For example, if charting stocks over time, the
                // "Volume" series may want to be pinned to the right with the prices pinned to the left, because the scale of trading
                // volume is different than the scale of prices. It is an error to specify an axis that isn't a valid minor axis for the
                // chart's type.
                targetAxis?: string;
                // The type of this series. Valid only if the chartType is COMBO. Different types will change the way the series is
                // visualized. Only LINE, AREA, and COLUMN are supported.
                type?: string;
            }
            // The specification for a basic chart. See BasicChartType for the list of charts this supports.
            interface BasicChartSpec {
                // The axis on the chart.
                axis?: Schema.BasicChartAxis[];
                // The type of the chart.
                chartType?: string;
                // The behavior of tooltips and data highlighting when hovering on data and chart area.
                compareMode?: string;
                // The domain of data this is charting. Only a single domain is supported.
                domains?: Schema.BasicChartDomain[];
                // The number of rows or columns in the data that are "headers". If not set, Google Sheets will guess how many rows are
                // headers based on the data. (Note that BasicChartAxis.title may override the axis title inferred from the header values.)
                headerCount?: Integer;
                // If some values in a series are missing, gaps may appear in the chart (e.g, segments of lines in a line chart will be
                // missing). To eliminate these gaps set this to true. Applies to Line, Area, and Combo charts.
                interpolateNulls?: boolean;
                // The position of the chart legend.
                legendPosition?: string;
                // Gets whether all lines should be rendered smooth or straight by default. Applies to Line charts.
                lineSmoothing?: boolean;
                // The data this chart is visualizing.
                series?: Schema.BasicChartSeries[];
                // The stacked type for charts that support vertical stacking. Applies to Area, Bar, Column, Combo, and Stepped Area
                // charts.
                stackedType?: string;
                // True to make the chart 3D. Applies to Bar and Column charts.
                threeDimensional?: boolean;
                // Controls whether to display additional data labels on stacked charts which sum the total value of all stacked values at
                // each value along the domain axis. These data labels can only be set when chart_type is one of AREA, BAR, COLUMN, COMBO
                // or STEPPED_AREA and stacked_type is either STACKED or PERCENT_STACKED. In addition, for COMBO, this will only be
                // supported if there is only one type of stackable series type or one type has more series than the others and each of the
                // other types have no more than one series. For example, if a chart has two stacked bar series and one area series, the
                // total data labels will be supported. If it has three bar series and two area series, total data labels are not allowed.
                // Neither CUSTOM nor placement can be set on the total_data_label.
                totalDataLabel?: Schema.DataLabel;
            }
            // The default filter associated with a sheet.
            interface BasicFilter {
                // The criteria for showing/hiding values per column. The map's key is the column index, and the value is the criteria for
                // that column. This field is deprecated in favor of filter_specs.
                criteria?: object;
                // The filter criteria per column. Both criteria and filter_specs are populated in responses. If both fields are specified
                // in an update request, this field takes precedence.
                filterSpecs?: Schema.FilterSpec[];
                // The range the filter covers.
                range?: Schema.GridRange;
                // The sort order per column. Later specifications are used when values are equal in the earlier specifications.
                sortSpecs?: Schema.SortSpec[];
            }
            // Style override settings for a single series data point.
            interface BasicSeriesDataPointStyleOverride {
                // Color of the series data point. If empty, the series default is used.
                color?: Schema.Color;
                // Color of the series data point. If empty, the series default is used. If color is also set, this field takes precedence.
                colorStyle?: Schema.ColorStyle;
                // Zero based index of the series data point.
                index?: Integer;
                // Point style of the series data point. Valid only if the chartType is AREA, LINE, or SCATTER. COMBO charts are also
                // supported if the series chart type is AREA, LINE, or SCATTER. If empty, the series default is used.
                pointStyle?: Schema.PointStyle;
            }
            // The request for clearing more than one range selected by a DataFilter in a spreadsheet.
            interface BatchClearValuesByDataFilterRequest {
                // The DataFilters used to determine which ranges to clear.
                dataFilters?: Schema.DataFilter[];
            }
            // The response when clearing a range of values selected with DataFilters in a spreadsheet.
            interface BatchClearValuesByDataFilterResponse {
                // The ranges that were cleared, in A1 notation. If the requests are for an unbounded range or a ranger larger than the
                // bounds of the sheet, this is the actual ranges that were cleared, bounded to the sheet's limits.
                clearedRanges?: string[];
                // The spreadsheet the updates were applied to.
                spreadsheetId?: string;
            }
            // The request for clearing more than one range of values in a spreadsheet.
            interface BatchClearValuesRequest {
                // The ranges to clear, in A1 notation.
                ranges?: string[];
            }
            // The response when clearing a range of values in a spreadsheet.
            interface BatchClearValuesResponse {
                // The ranges that were cleared, in A1 notation. If the requests are for an unbounded range or a ranger larger than the
                // bounds of the sheet, this is the actual ranges that were cleared, bounded to the sheet's limits.
                clearedRanges?: string[];
                // The spreadsheet the updates were applied to.
                spreadsheetId?: string;
            }
            // The request for retrieving a range of values in a spreadsheet selected by a set of DataFilters.
            interface BatchGetValuesByDataFilterRequest {
                // The data filters used to match the ranges of values to retrieve. Ranges that match any of the specified data filters are
                // included in the response.
                dataFilters?: Schema.DataFilter[];
                // How dates, times, and durations should be represented in the output. This is ignored if value_render_option is
                // FORMATTED_VALUE. The default dateTime render option is [DateTimeRenderOption.SERIAL_NUMBER].
                dateTimeRenderOption?: string;
                // The major dimension that results should use. For example, if the spreadsheet data is: `A1=1,B1=2,A2=3,B2=4`, then a
                // request that selects that range and sets `majorDimension=ROWS` returns `[[1,2],[3,4]]`, whereas a request that sets
                // `majorDimension=COLUMNS` returns `[[1,3],[2,4]]`.
                majorDimension?: string;
                // How values should be represented in the output. The default render option is ValueRenderOption.FORMATTED_VALUE.
                valueRenderOption?: string;
            }
            // The response when retrieving more than one range of values in a spreadsheet selected by DataFilters.
            interface BatchGetValuesByDataFilterResponse {
                // The ID of the spreadsheet the data was retrieved from.
                spreadsheetId?: string;
                // The requested values with the list of data filters that matched them.
                valueRanges?: Schema.MatchedValueRange[];
            }
            // The response when retrieving more than one range of values in a spreadsheet.
            interface BatchGetValuesResponse {
                // The ID of the spreadsheet the data was retrieved from.
                spreadsheetId?: string;
                // The requested values. The order of the ValueRanges is the same as the order of the requested ranges.
                valueRanges?: Schema.ValueRange[];
            }
            // The request for updating any aspect of a spreadsheet.
            interface BatchUpdateSpreadsheetRequest {
                // Determines if the update response should include the spreadsheet resource.
                includeSpreadsheetInResponse?: boolean;
                // A list of updates to apply to the spreadsheet. Requests will be applied in the order they are specified. If any request
                // is not valid, no requests will be applied.
                requests?: Schema.Request[];
                // True if grid data should be returned. Meaningful only if include_spreadsheet_in_response is 'true'. This parameter is
                // ignored if a field mask was set in the request.
                responseIncludeGridData?: boolean;
                // Limits the ranges included in the response spreadsheet. Meaningful only if include_spreadsheet_in_response is 'true'.
                responseRanges?: string[];
            }
            // The reply for batch updating a spreadsheet.
            interface BatchUpdateSpreadsheetResponse {
                // The reply of the updates. This maps 1:1 with the updates, although replies to some requests may be empty.
                replies?: Schema.Response[];
                // The spreadsheet the updates were applied to.
                spreadsheetId?: string;
                // The spreadsheet after updates were applied. This is only set if
                // [BatchUpdateSpreadsheetRequest.include_spreadsheet_in_response] is `true`.
                updatedSpreadsheet?: Schema.Spreadsheet;
            }
            // The request for updating more than one range of values in a spreadsheet.
            interface BatchUpdateValuesByDataFilterRequest {
                // The new values to apply to the spreadsheet. If more than one range is matched by the specified DataFilter the specified
                // values are applied to all of those ranges.
                data?: Schema.DataFilterValueRange[];
                // Determines if the update response should include the values of the cells that were updated. By default, responses do not
                // include the updated values. The `updatedData` field within each of the BatchUpdateValuesResponse.responses contains the
                // updated values. If the range to write was larger than the range actually written, the response includes all values in
                // the requested range (excluding trailing empty rows and columns).
                includeValuesInResponse?: boolean;
                // Determines how dates, times, and durations in the response should be rendered. This is ignored if
                // response_value_render_option is FORMATTED_VALUE. The default dateTime render option is
                // DateTimeRenderOption.SERIAL_NUMBER.
                responseDateTimeRenderOption?: string;
                // Determines how values in the response should be rendered. The default render option is
                // ValueRenderOption.FORMATTED_VALUE.
                responseValueRenderOption?: string;
                // How the input data should be interpreted.
                valueInputOption?: string;
            }
            // The response when updating a range of values in a spreadsheet.
            interface BatchUpdateValuesByDataFilterResponse {
                // The response for each range updated.
                responses?: Schema.UpdateValuesByDataFilterResponse[];
                // The spreadsheet the updates were applied to.
                spreadsheetId?: string;
                // The total number of cells updated.
                totalUpdatedCells?: Integer;
                // The total number of columns where at least one cell in the column was updated.
                totalUpdatedColumns?: Integer;
                // The total number of rows where at least one cell in the row was updated.
                totalUpdatedRows?: Integer;
                // The total number of sheets where at least one cell in the sheet was updated.
                totalUpdatedSheets?: Integer;
            }
            // The request for updating more than one range of values in a spreadsheet.
            interface BatchUpdateValuesRequest {
                // The new values to apply to the spreadsheet.
                data?: Schema.ValueRange[];
                // Determines if the update response should include the values of the cells that were updated. By default, responses do not
                // include the updated values. The `updatedData` field within each of the BatchUpdateValuesResponse.responses contains the
                // updated values. If the range to write was larger than the range actually written, the response includes all values in
                // the requested range (excluding trailing empty rows and columns).
                includeValuesInResponse?: boolean;
                // Determines how dates, times, and durations in the response should be rendered. This is ignored if
                // response_value_render_option is FORMATTED_VALUE. The default dateTime render option is
                // DateTimeRenderOption.SERIAL_NUMBER.
                responseDateTimeRenderOption?: string;
                // Determines how values in the response should be rendered. The default render option is
                // ValueRenderOption.FORMATTED_VALUE.
                responseValueRenderOption?: string;
                // How the input data should be interpreted.
                valueInputOption?: string;
            }
            // The response when updating a range of values in a spreadsheet.
            interface BatchUpdateValuesResponse {
                // One UpdateValuesResponse per requested range, in the same order as the requests appeared.
                responses?: Schema.UpdateValuesResponse[];
                // The spreadsheet the updates were applied to.
                spreadsheetId?: string;
                // The total number of cells updated.
                totalUpdatedCells?: Integer;
                // The total number of columns where at least one cell in the column was updated.
                totalUpdatedColumns?: Integer;
                // The total number of rows where at least one cell in the row was updated.
                totalUpdatedRows?: Integer;
                // The total number of sheets where at least one cell in the sheet was updated.
                totalUpdatedSheets?: Integer;
            }
            // The specification of a BigQuery data source that's connected to a sheet.
            interface BigQueryDataSourceSpec {
                // The ID of a BigQuery enabled GCP project with a billing account attached. For any queries executed against the data
                // source, the project is charged.
                projectId?: string;
                // A BigQueryQuerySpec.
                querySpec?: Schema.BigQueryQuerySpec;
                // A BigQueryTableSpec.
                tableSpec?: Schema.BigQueryTableSpec;
            }
            // Specifies a custom BigQuery query.
            interface BigQueryQuerySpec {
                // The raw query string.
                rawQuery?: string;
            }
            // Specifies a BigQuery table definition. Only [native tables](https://cloud.google.com/bigquery/docs/tables-intro) is
            // allowed.
            interface BigQueryTableSpec {
                // The BigQuery dataset id.
                datasetId?: string;
                // The BigQuery table id.
                tableId?: string;
                // The ID of a BigQuery project the table belongs to. If not specified, the project_id is assumed.
                tableProjectId?: string;
            }
            // A condition that can evaluate to true or false. BooleanConditions are used by conditional formatting, data validation,
            // and the criteria in filters.
            interface BooleanCondition {
                // The type of condition.
                type?: string;
                // The values of the condition. The number of supported values depends on the condition type. Some support zero values,
                // others one or two values, and ConditionType.ONE_OF_LIST supports an arbitrary number of values.
                values?: Schema.ConditionValue[];
            }
            // A rule that may or may not match, depending on the condition.
            interface BooleanRule {
                // The condition of the rule. If the condition evaluates to true, the format is applied.
                condition?: Schema.BooleanCondition;
                // The format to apply. Conditional formatting can only apply a subset of formatting: bold, italic, strikethrough,
                // foreground color & background color.
                format?: Schema.CellFormat;
            }
            // A border along a cell.
            interface Border {
                // The color of the border.
                color?: Schema.Color;
                // The color of the border. If color is also set, this field takes precedence.
                colorStyle?: Schema.ColorStyle;
                // The style of the border.
                style?: string;
                // The width of the border, in pixels. Deprecated; the width is determined by the "style" field.
                width?: Integer;
            }
            // The borders of the cell.
            interface Borders {
                // The bottom border of the cell.
                bottom?: Schema.Border;
                // The left border of the cell.
                left?: Schema.Border;
                // The right border of the cell.
                right?: Schema.Border;
                // The top border of the cell.
                top?: Schema.Border;
            }
            // A bubble chart.
            interface BubbleChartSpec {
                // The bubble border color.
                bubbleBorderColor?: Schema.Color;
                // The bubble border color. If bubble_border_color is also set, this field takes precedence.
                bubbleBorderColorStyle?: Schema.ColorStyle;
                // The data containing the bubble labels. These do not need to be unique.
                bubbleLabels?: Schema.ChartData;
                // The max radius size of the bubbles, in pixels. If specified, the field must be a positive value.
                bubbleMaxRadiusSize?: Integer;
                // The minimum radius size of the bubbles, in pixels. If specific, the field must be a positive value.
                bubbleMinRadiusSize?: Integer;
                // The opacity of the bubbles between 0 and 1.0. 0 is fully transparent and 1 is fully opaque.
                bubbleOpacity?: number;
                // The data contianing the bubble sizes. Bubble sizes are used to draw the bubbles at different sizes relative to each
                // other. If specified, group_ids must also be specified. This field is optional.
                bubbleSizes?: Schema.ChartData;
                // The format of the text inside the bubbles. Strikethrough and underline are not supported.
                bubbleTextStyle?: Schema.TextFormat;
                // The data containing the bubble x-values. These values locate the bubbles in the chart horizontally.
                domain?: Schema.ChartData;
                // The data containing the bubble group IDs. All bubbles with the same group ID are drawn in the same color. If
                // bubble_sizes is specified then this field must also be specified but may contain blank values. This field is optional.
                groupIds?: Schema.ChartData;
                // Where the legend of the chart should be drawn.
                legendPosition?: string;
                // The data contianing the bubble y-values. These values locate the bubbles in the chart vertically.
                series?: Schema.ChartData;
            }
            // A candlestick chart.
            interface CandlestickChartSpec {
                // The Candlestick chart data. Only one CandlestickData is supported.
                data?: Schema.CandlestickData[];
                // The domain data (horizontal axis) for the candlestick chart. String data will be treated as discrete labels, other data
                // will be treated as continuous values.
                domain?: Schema.CandlestickDomain;
            }
            // The Candlestick chart data, each containing the low, open, close, and high values for a series.
            interface CandlestickData {
                // The range data (vertical axis) for the close/final value for each candle. This is the top of the candle body. If greater
                // than the open value the candle will be filled. Otherwise the candle will be hollow.
                closeSeries?: Schema.CandlestickSeries;
                // The range data (vertical axis) for the high/maximum value for each candle. This is the top of the candle's center line.
                highSeries?: Schema.CandlestickSeries;
                // The range data (vertical axis) for the low/minimum value for each candle. This is the bottom of the candle's center
                // line.
                lowSeries?: Schema.CandlestickSeries;
                // The range data (vertical axis) for the open/initial value for each candle. This is the bottom of the candle body. If
                // less than the close value the candle will be filled. Otherwise the candle will be hollow.
                openSeries?: Schema.CandlestickSeries;
            }
            // The domain of a CandlestickChart.
            interface CandlestickDomain {
                // The data of the CandlestickDomain.
                data?: Schema.ChartData;
                // True to reverse the order of the domain values (horizontal axis).
                reversed?: boolean;
            }
            // The series of a CandlestickData.
            interface CandlestickSeries {
                // The data of the CandlestickSeries.
                data?: Schema.ChartData;
            }
            // Data about a specific cell.
            interface CellData {
                // Output only. Information about a data source formula on the cell. The field is set if user_entered_value is a formula
                // referencing some DATA_SOURCE sheet, e.g `=SUM(DataSheet!Column)`.
                dataSourceFormula?: Schema.DataSourceFormula;
                // A data source table anchored at this cell. The size of data source table itself is computed dynamically based on its
                // configuration. Only the first cell of the data source table contains the data source table definition. The other cells
                // will contain the display values of the data source table result in their effective_value fields.
                dataSourceTable?: Schema.DataSourceTable;
                // A data validation rule on the cell, if any. When writing, the new data validation rule will overwrite any prior rule.
                dataValidation?: Schema.DataValidationRule;
                // The effective format being used by the cell. This includes the results of applying any conditional formatting and, if
                // the cell contains a formula, the computed number format. If the effective format is the default format, effective format
                // will not be written. This field is read-only.
                effectiveFormat?: Schema.CellFormat;
                // The effective value of the cell. For cells with formulas, this is the calculated value. For cells with literals, this is
                // the same as the user_entered_value. This field is read-only.
                effectiveValue?: Schema.ExtendedValue;
                // The formatted value of the cell. This is the value as it's shown to the user. This field is read-only.
                formattedValue?: string;
                // A hyperlink this cell points to, if any. If the cell contains multiple hyperlinks, this field will be empty. This field
                // is read-only. To set it, use a `=HYPERLINK` formula in the userEnteredValue.formulaValue field.
                hyperlink?: string;
                // Any note on the cell.
                note?: string;
                // A pivot table anchored at this cell. The size of pivot table itself is computed dynamically based on its data, grouping,
                // filters, values, etc. Only the top-left cell of the pivot table contains the pivot table definition. The other cells
                // will contain the calculated values of the results of the pivot in their effective_value fields.
                pivotTable?: Schema.PivotTable;
                // Runs of rich text applied to subsections of the cell. Runs are only valid on user entered strings, not formulas, bools,
                // or numbers. Properties of a run start at a specific index in the text and continue until the next run. Runs will inherit
                // the properties of the cell unless explicitly changed. When writing, the new runs will overwrite any prior runs. When
                // writing a new user_entered_value, previous runs are erased.
                textFormatRuns?: Schema.TextFormatRun[];
                // The format the user entered for the cell. When writing, the new format will be merged with the existing format.
                userEnteredFormat?: Schema.CellFormat;
                // The value the user entered in the cell. e.g, `1234`, `'Hello'`, or `=NOW()` Note: Dates, Times and DateTimes are
                // represented as doubles in serial number format.
                userEnteredValue?: Schema.ExtendedValue;
            }
            // The format of a cell.
            interface CellFormat {
                // The background color of the cell.
                backgroundColor?: Schema.Color;
                // The background color of the cell. If background_color is also set, this field takes precedence.
                backgroundColorStyle?: Schema.ColorStyle;
                // The borders of the cell.
                borders?: Schema.Borders;
                // The horizontal alignment of the value in the cell.
                horizontalAlignment?: string;
                // How a hyperlink, if it exists, should be displayed in the cell.
                hyperlinkDisplayType?: string;
                // A format describing how number values should be represented to the user.
                numberFormat?: Schema.NumberFormat;
                // The padding of the cell.
                padding?: Schema.Padding;
                // The direction of the text in the cell.
                textDirection?: string;
                // The format of the text in the cell (unless overridden by a format run).
                textFormat?: Schema.TextFormat;
                // The rotation applied to text in a cell
                textRotation?: Schema.TextRotation;
                // The vertical alignment of the value in the cell.
                verticalAlignment?: string;
                // The wrap strategy for the value in the cell.
                wrapStrategy?: string;
            }
            // The options that define a "view window" for a chart (such as the visible values in an axis).
            interface ChartAxisViewWindowOptions {
                // The maximum numeric value to be shown in this view window. If unset, will automatically determine a maximum value that
                // looks good for the data.
                viewWindowMax?: number;
                // The minimum numeric value to be shown in this view window. If unset, will automatically determine a minimum value that
                // looks good for the data.
                viewWindowMin?: number;
                // The view window's mode.
                viewWindowMode?: string;
            }
            // Custom number formatting options for chart attributes.
            interface ChartCustomNumberFormatOptions {
                // Custom prefix to be prepended to the chart attribute. This field is optional.
                prefix?: string;
                // Custom suffix to be appended to the chart attribute. This field is optional.
                suffix?: string;
            }
            // The data included in a domain or series.
            interface ChartData {
                // The aggregation type for the series of a data source chart. Not supported for regular charts.
                aggregateType?: string;
                // The reference to the data source column that the data reads from.
                columnReference?: Schema.DataSourceColumnReference;
                // The rule to group the data by if the ChartData backs the domain of a data source chart. Not supported for regular
                // charts.
                groupRule?: Schema.ChartGroupRule;
                // The source ranges of the data.
                sourceRange?: Schema.ChartSourceRange;
            }
            // Allows you to organize the date-time values in a source data column into buckets based on selected parts of their date
            // or time values.
            interface ChartDateTimeRule {
                // The type of date-time grouping to apply.
                type?: string;
            }
            // An optional setting on the ChartData of the domain of a data source chart that defines buckets for the values in the
            // domain rather than breaking out each individual value. For example, when plotting a data source chart, you can specify a
            // histogram rule on the domain (it should only contain numeric values), grouping its values into buckets. Any values of a
            // chart series that fall into the same bucket are aggregated based on the aggregate_type.
            interface ChartGroupRule {
                // A ChartDateTimeRule.
                dateTimeRule?: Schema.ChartDateTimeRule;
                // A ChartHistogramRule
                histogramRule?: Schema.ChartHistogramRule;
            }
            // Allows you to organize numeric values in a source data column into buckets of constant size.
            interface ChartHistogramRule {
                // The size of the buckets that are created. Must be positive.
                intervalSize?: number;
                // The maximum value at which items are placed into buckets. Values greater than the maximum are grouped into a single
                // bucket. If omitted, it is determined by the maximum item value.
                maxValue?: number;
                // The minimum value at which items are placed into buckets. Values that are less than the minimum are grouped into a
                // single bucket. If omitted, it is determined by the minimum item value.
                minValue?: number;
            }
            // Source ranges for a chart.
            interface ChartSourceRange {
                // The ranges of data for a series or domain. Exactly one dimension must have a length of 1, and all sources in the list
                // must have the same dimension with length 1. The domain (if it exists) & all series must have the same number of source
                // ranges. If using more than one source range, then the source range at a given offset must be in order and contiguous
                // across the domain and series. For example, these are valid configurations: domain sources: A1:A5 series1 sources: B1:B5
                // series2 sources: D6:D10 domain sources: A1:A5, C10:C12 series1 sources: B1:B5, D10:D12 series2 sources: C1:C5, E10:E12
                sources?: Schema.GridRange[];
            }
            // The specifications of a chart.
            interface ChartSpec {
                // The alternative text that describes the chart. This is often used for accessibility.
                altText?: string;
                // The background color of the entire chart. Not applicable to Org charts.
                backgroundColor?: Schema.Color;
                // The background color of the entire chart. Not applicable to Org charts. If background_color is also set, this field
                // takes precedence.
                backgroundColorStyle?: Schema.ColorStyle;
                // A basic chart specification, can be one of many kinds of charts. See BasicChartType for the list of all charts this
                // supports.
                basicChart?: Schema.BasicChartSpec;
                // A bubble chart specification.
                bubbleChart?: Schema.BubbleChartSpec;
                // A candlestick chart specification.
                candlestickChart?: Schema.CandlestickChartSpec;
                // If present, the field contains data source chart specific properties.
                dataSourceChartProperties?: Schema.DataSourceChartProperties;
                // The filters applied to the source data of the chart. Only supported for data source charts.
                filterSpecs?: Schema.FilterSpec[];
                // The name of the font to use by default for all chart text (e.g. title, axis labels, legend). If a font is specified for
                // a specific part of the chart it will override this font name.
                fontName?: string;
                // Determines how the charts will use hidden rows or columns.
                hiddenDimensionStrategy?: string;
                // A histogram chart specification.
                histogramChart?: Schema.HistogramChartSpec;
                // True to make a chart fill the entire space in which it's rendered with minimum padding. False to use the default
                // padding. (Not applicable to Geo and Org charts.)
                maximized?: boolean;
                // An org chart specification.
                orgChart?: Schema.OrgChartSpec;
                // A pie chart specification.
                pieChart?: Schema.PieChartSpec;
                // A scorecard chart specification.
                scorecardChart?: Schema.ScorecardChartSpec;
                // The order to sort the chart data by. Only a single sort spec is supported. Only supported for data source charts.
                sortSpecs?: Schema.SortSpec[];
                // The subtitle of the chart.
                subtitle?: string;
                // The subtitle text format. Strikethrough and underline are not supported.
                subtitleTextFormat?: Schema.TextFormat;
                // The subtitle text position. This field is optional.
                subtitleTextPosition?: Schema.TextPosition;
                // The title of the chart.
                title?: string;
                // The title text format. Strikethrough and underline are not supported.
                titleTextFormat?: Schema.TextFormat;
                // The title text position. This field is optional.
                titleTextPosition?: Schema.TextPosition;
                // A treemap chart specification.
                treemapChart?: Schema.TreemapChartSpec;
                // A waterfall chart specification.
                waterfallChart?: Schema.WaterfallChartSpec;
            }
            // Clears the basic filter, if any exists on the sheet.
            interface ClearBasicFilterRequest {
                // The sheet ID on which the basic filter should be cleared.
                sheetId?: Integer;
            }
            // The response when clearing a range of values in a spreadsheet.
            interface ClearValuesResponse {
                // The range (in A1 notation) that was cleared. (If the request was for an unbounded range or a ranger larger than the
                // bounds of the sheet, this will be the actual range that was cleared, bounded to the sheet's limits.)
                clearedRange?: string;
                // The spreadsheet the updates were applied to.
                spreadsheetId?: string;
            }
            // Represents a color in the RGBA color space. This representation is designed for simplicity of conversion to/from color
            // representations in various languages over compactness; for example, the fields of this representation can be trivially
            // provided to the constructor of "java.awt.Color" in Java; it can also be trivially provided to UIColor's
            // "+colorWithRed:green:blue:alpha" method in iOS; and, with just a little work, it can be easily formatted into a CSS
            // "rgba()" string in JavaScript, as well. Note: this proto does not carry information about the absolute color space that
            // should be used to interpret the RGB value (e.g. sRGB, Adobe RGB, DCI-P3, BT.2020, etc.). By default, applications SHOULD
            // assume the sRGB color space. Note: when color equality needs to be decided, implementations, unless documented
            // otherwise, will treat two colors to be equal if all their red, green, blue and alpha values each differ by at most 1e-5.
            // Example (Java): import com.google.type.Color; // ... public static java.awt.Color fromProto(Color protocolor) { float
            // alpha = protocolor.hasAlpha() ? protocolor.getAlpha().getValue() : 1.0; return new java.awt.Color( protocolor.getRed(),
            // protocolor.getGreen(), protocolor.getBlue(), alpha); } public static Color toProto(java.awt.Color color) { float red =
            // (float) color.getRed(); float green = (float) color.getGreen(); float blue = (float) color.getBlue(); float denominator
            // = 255.0; Color.Builder resultBuilder = Color .newBuilder() .setRed(red / denominator) .setGreen(green / denominator)
            // .setBlue(blue / denominator); int alpha = color.getAlpha(); if (alpha != 255) { result.setAlpha( FloatValue
            // .newBuilder() .setValue(((float) alpha) / denominator) .build()); } return resultBuilder.build(); } // ... Example (iOS
            // / Obj-C): // ... static UIColor* fromProto(Color* protocolor) { float red = [protocolor red]; float green = [protocolor
            // green]; float blue = [protocolor blue]; FloatValue* alpha_wrapper = [protocolor alpha]; float alpha = 1.0; if
            // (alpha_wrapper != nil) { alpha = [alpha_wrapper value]; } return [UIColor colorWithRed:red green:green blue:blue
            // alpha:alpha]; } static Color* toProto(UIColor* color) { CGFloat red, green, blue, alpha; if (![color getRed:&red
            // green:&green blue:&blue alpha:&alpha]) { return nil; } Color* result = [[Color alloc] init]; [result setRed:red];
            // [result setGreen:green]; [result setBlue:blue]; if (alpha <= 0.9999) { [result setAlpha:floatWrapperWithValue(alpha)]; }
            // [result autorelease]; return result; } // ... Example (JavaScript): // ... var protoToCssColor = function(rgb_color) {
            // var redFrac = rgb_color.red || 0.0; var greenFrac = rgb_color.green || 0.0; var blueFrac = rgb_color.blue || 0.0; var
            // red = Math.floor(redFrac * 255); var green = Math.floor(greenFrac * 255); var blue = Math.floor(blueFrac * 255); if
            // (!('alpha' in rgb_color)) { return rgbToCssColor_(red, green, blue); } var alphaFrac = rgb_color.alpha.value || 0.0; var
            // rgbParams = [red, green, blue].join(','); return ['rgba(', rgbParams, ',', alphaFrac, ')'].join(''); }; var
            // rgbToCssColor_ = function(red, green, blue) { var rgbNumber = new Number((red << 16) | (green << 8) | blue); var
            // hexString = rgbNumber.toString(16); var missingZeros = 6 - hexString.length; var resultBuilder = ['#']; for (var i = 0;
            // i < missingZeros; i++) { resultBuilder.push('0'); } resultBuilder.push(hexString); return resultBuilder.join(''); }; //
            // ...
            interface Color {
                // The fraction of this color that should be applied to the pixel. That is, the final pixel color is defined by the
                // equation: pixel color = alpha * (this color) + (1.0 - alpha) * (background color) This means that a value of 1.0
                // corresponds to a solid color, whereas a value of 0.0 corresponds to a completely transparent color. This uses a wrapper
                // message rather than a simple float scalar so that it is possible to distinguish between a default value and the value
                // being unset. If omitted, this color object is to be rendered as a solid color (as if the alpha value had been explicitly
                // given with a value of 1.0).
                alpha?: number;
                // The amount of blue in the color as a value in the interval [0, 1].
                blue?: number;
                // The amount of green in the color as a value in the interval [0, 1].
                green?: number;
                // The amount of red in the color as a value in the interval [0, 1].
                red?: number;
            }
            // A color value.
            interface ColorStyle {
                // RGB color.
                rgbColor?: Schema.Color;
                // Theme color.
                themeColor?: string;
            }
            // The value of the condition.
            interface ConditionValue {
                // A relative date (based on the current date). Valid only if the type is DATE_BEFORE, DATE_AFTER, DATE_ON_OR_BEFORE or
                // DATE_ON_OR_AFTER. Relative dates are not supported in data validation. They are supported only in conditional formatting
                // and conditional filters.
                relativeDate?: string;
                // A value the condition is based on. The value is parsed as if the user typed into a cell. Formulas are supported (and
                // must begin with an `=` or a '+').
                userEnteredValue?: string;
            }
            // A rule describing a conditional format.
            interface ConditionalFormatRule {
                // The formatting is either "on" or "off" according to the rule.
                booleanRule?: Schema.BooleanRule;
                // The formatting will vary based on the gradients in the rule.
                gradientRule?: Schema.GradientRule;
                // The ranges that are formatted if the condition is true. All the ranges must be on the same grid.
                ranges?: Schema.GridRange[];
            }
            // Copies data from the source to the destination.
            interface CopyPasteRequest {
                // The location to paste to. If the range covers a span that's a multiple of the source's height or width, then the data
                // will be repeated to fill in the destination range. If the range is smaller than the source range, the entire source data
                // will still be copied (beyond the end of the destination range).
                destination?: Schema.GridRange;
                // How that data should be oriented when pasting.
                pasteOrientation?: string;
                // What kind of data to paste.
                pasteType?: string;
                // The source range to copy.
                source?: Schema.GridRange;
            }
            // The request to copy a sheet across spreadsheets.
            interface CopySheetToAnotherSpreadsheetRequest {
                // The ID of the spreadsheet to copy the sheet to.
                destinationSpreadsheetId?: string;
            }
            // A request to create developer metadata.
            interface CreateDeveloperMetadataRequest {
                // The developer metadata to create.
                developerMetadata?: Schema.DeveloperMetadata;
            }
            // The response from creating developer metadata.
            interface CreateDeveloperMetadataResponse {
                // The developer metadata that was created.
                developerMetadata?: Schema.DeveloperMetadata;
            }
            // Moves data from the source to the destination.
            interface CutPasteRequest {
                // The top-left coordinate where the data should be pasted.
                destination?: Schema.GridCoordinate;
                // What kind of data to paste. All the source data will be cut, regardless of what is pasted.
                pasteType?: string;
                // The source data to cut.
                source?: Schema.GridRange;
            }
            // The data execution status. A data execution is created to sync a data source object with the latest data from a
            // DataSource. It is usually scheduled to run at background, you can check its state to tell if an execution completes
            // There are several scenarios where a data execution is triggered to run: * Adding a data source creates an associated
            // data source sheet as well as a data execution to sync the data from the data source to the sheet. * Updating a data
            // source creates a data execution to refresh the associated data source sheet similarly. * You can send refresh request to
            // explicitly refresh one or multiple data source objects.
            interface DataExecutionStatus {
                // The error code.
                errorCode?: string;
                // The error message, which may be empty.
                errorMessage?: string;
                // Gets the time the data last successfully refreshed.
                lastRefreshTime?: string;
                // The state of the data execution.
                state?: string;
            }
            // Filter that describes what data should be selected or returned from a request.
            interface DataFilter {
                // Selects data that matches the specified A1 range.
                a1Range?: string;
                // Selects data associated with the developer metadata matching the criteria described by this DeveloperMetadataLookup.
                developerMetadataLookup?: Schema.DeveloperMetadataLookup;
                // Selects data that matches the range described by the GridRange.
                gridRange?: Schema.GridRange;
            }
            // A range of values whose location is specified by a DataFilter.
            interface DataFilterValueRange {
                // The data filter describing the location of the values in the spreadsheet.
                dataFilter?: Schema.DataFilter;
                // The major dimension of the values.
                majorDimension?: string;
                // The data to be written. If the provided values exceed any of the ranges matched by the data filter then the request
                // fails. If the provided values are less than the matched ranges only the specified values are written, existing values in
                // the matched ranges remain unaffected.
                values?: object[][];
            }
            // Settings for one set of data labels. Data labels are annotations that appear next to a set of data, such as the points
            // on a line chart, and provide additional information about what the data represents, such as a text representation of the
            // value behind that point on the graph.
            interface DataLabel {
                // Data to use for custom labels. Only used if type is set to CUSTOM. This data must be the same length as the series or
                // other element this data label is applied to. In addition, if the series is split into multiple source ranges, this
                // source data must come from the next column in the source data. For example, if the series is B2:B4,E6:E8 then this data
                // must come from C2:C4,F6:F8.
                customLabelData?: Schema.ChartData;
                // The placement of the data label relative to the labeled data.
                placement?: string;
                // The text format used for the data label.
                textFormat?: Schema.TextFormat;
                // The type of the data label.
                type?: string;
            }
            // Information about an external data source in the spreadsheet.
            interface DataSource {
                // All calculated columns in the data source.
                calculatedColumns?: Schema.DataSourceColumn[];
                // The spreadsheet-scoped unique ID that identifies the data source. Example: 1080547365.
                dataSourceId?: string;
                // The ID of the Sheet connected with the data source. The field cannot be changed once set. When creating a data source,
                // an associated DATA_SOURCE sheet is also created, if the field is not specified, the ID of the created sheet will be
                // randomly generated.
                sheetId?: Integer;
                // The DataSourceSpec for the data source connected with this spreadsheet.
                spec?: Schema.DataSourceSpec;
            }
            // Properties of a data source chart.
            interface DataSourceChartProperties {
                // Output only. The data execution status.
                dataExecutionStatus?: Schema.DataExecutionStatus;
                // ID of the data source that the chart is associated with.
                dataSourceId?: string;
            }
            // A column in a data source.
            interface DataSourceColumn {
                // The formula of the calculated column.
                formula?: string;
                // The column reference.
                reference?: Schema.DataSourceColumnReference;
            }
            // An unique identifier that references a data source column.
            interface DataSourceColumnReference {
                // The display name of the column. It should be unique within a data source.
                name?: string;
            }
            // A data source formula.
            interface DataSourceFormula {
                // Output only. The data execution status.
                dataExecutionStatus?: Schema.DataExecutionStatus;
                // The ID of the data source the formula is associated with.
                dataSourceId?: string;
            }
            // Reference to a data source object.
            interface DataSourceObjectReference {
                // References to a data source chart.
                chartId?: Integer;
                // References to a cell containing DataSourceFormula.
                dataSourceFormulaCell?: Schema.GridCoordinate;
                // References to a data source PivotTable anchored at the cell.
                dataSourcePivotTableAnchorCell?: Schema.GridCoordinate;
                // References to a DataSourceTable anchored at the cell.
                dataSourceTableAnchorCell?: Schema.GridCoordinate;
                // References to a DATA_SOURCE sheet.
                sheetId?: string;
            }
            // A list of references to data source objects.
            interface DataSourceObjectReferences {
                // The references.
                references?: Schema.DataSourceObjectReference[];
            }
            // A parameter in a data source's query. The parameter allows the user to pass in values from the spreadsheet into a query.
            interface DataSourceParameter {
                // Named parameter. Must be a legitimate identifier for the DataSource that supports it. For example, [BigQuery
                // identifier](https://cloud.google.com/bigquery/docs/reference/standard-sql/lexical#identifiers).
                name?: string;
                // ID of a NamedRange. Its size must be 1x1.
                namedRangeId?: string;
                // A range that contains the value of the parameter. Its size must be 1x1.
                range?: Schema.GridRange;
            }
            // A schedule for data to refresh every day in a given time interval.
            interface DataSourceRefreshDailySchedule {
                // The start time of a time interval in which a data source refresh is scheduled. Only `hours` part is used. The time
                // interval size defaults to that in the Sheets editor.
                startTime?: Schema.TimeOfDay;
            }
            // A monthly schedule for data to refresh on specific days in the month in a given time interval.
            interface DataSourceRefreshMonthlySchedule {
                // Days of the month to refresh. Only 1-28 are supported, mapping to the 1st to the 28th day. At lesat one day must be
                // specified.
                daysOfMonth?: Integer[];
                // The start time of a time interval in which a data source refresh is scheduled. Only `hours` part is used. The time
                // interval size defaults to that in the Sheets editor.
                startTime?: Schema.TimeOfDay;
            }
            // Schedule for refreshing the data source. Data sources in the spreadsheet are refreshed within a time interval. You can
            // specify the start time by clicking the Scheduled Refresh button in the Sheets editor, but the interval is fixed at 4
            // hours. For example, if you specify a start time of 8am , the refresh will take place between 8am and 12pm every day.
            interface DataSourceRefreshSchedule {
                // Daily refresh schedule.
                dailySchedule?: Schema.DataSourceRefreshDailySchedule;
                // True if the refresh schedule is enabled, or false otherwise.
                enabled?: boolean;
                // Monthly refresh schedule.
                monthlySchedule?: Schema.DataSourceRefreshMonthlySchedule;
                // Output only. The time interval of the next run.
                nextRun?: Schema.Interval;
                // The scope of the refresh. Must be ALL_DATA_SOURCES.
                refreshScope?: string;
                // Weekly refresh schedule.
                weeklySchedule?: Schema.DataSourceRefreshWeeklySchedule;
            }
            // A weekly schedule for data to refresh on specific days in a given time interval.
            interface DataSourceRefreshWeeklySchedule {
                // Days of the week to refresh. At least one day must be specified.
                daysOfWeek?: string[];
                // The start time of a time interval in which a data source refresh is scheduled. Only `hours` part is used. The time
                // interval size defaults to that in the Sheets editor.
                startTime?: Schema.TimeOfDay;
            }
            // A range along a single dimension on a DATA_SOURCE sheet.
            interface DataSourceSheetDimensionRange {
                // The columns on the data source sheet.
                columnReferences?: Schema.DataSourceColumnReference[];
                // The ID of the data source sheet the range is on.
                sheetId?: Integer;
            }
            // Additional properties of a DATA_SOURCE sheet.
            interface DataSourceSheetProperties {
                // The columns displayed on the sheet, corresponding to the values in RowData.
                columns?: Schema.DataSourceColumn[];
                // The data execution status.
                dataExecutionStatus?: Schema.DataExecutionStatus;
                // ID of the DataSource the sheet is connected to.
                dataSourceId?: string;
            }
            // This specifies the details of the data source. For example, for BigQuery, this specifies information about the BigQuery
            // source.
            interface DataSourceSpec {
                // A BigQueryDataSourceSpec.
                bigQuery?: Schema.BigQueryDataSourceSpec;
                // The parameters of the data source, used when querying the data source.
                parameters?: Schema.DataSourceParameter[];
            }
            // A data source table, which allows the user to import a static table of data from the DataSource into Sheets. This is
            // also known as "Extract" in the Sheets editor.
            interface DataSourceTable {
                // The type to select columns for the data source table. Defaults to SELECTED.
                columnSelectionType?: string;
                // Columns selected for the data source table. The column_selection_type must be SELECTED.
                columns?: Schema.DataSourceColumnReference[];
                // Output only. The data execution status.
                dataExecutionStatus?: Schema.DataExecutionStatus;
                // The ID of the data source the data source table is associated with.
                dataSourceId?: string;
                // Filter specifications in the data source table.
                filterSpecs?: Schema.FilterSpec[];
                // The limit of rows to return. If not set, a default limit is applied. Please refer to the Sheets editor for the default
                // and max limit.
                rowLimit?: Integer;
                // Sort specifications in the data source table. The result of the data source table is sorted based on the sort
                // specifications in order.
                sortSpecs?: Schema.SortSpec[];
            }
            // A data validation rule.
            interface DataValidationRule {
                // The condition that data in the cell must match.
                condition?: Schema.BooleanCondition;
                // A message to show the user when adding data to the cell.
                inputMessage?: string;
                // True if the UI should be customized based on the kind of condition. If true, "List" conditions will show a dropdown.
                showCustomUi?: boolean;
                // True if invalid data should be rejected.
                strict?: boolean;
            }
            // Allows you to organize the date-time values in a source data column into buckets based on selected parts of their date
            // or time values. For example, consider a pivot table showing sales transactions by date: +----------+--------------+ |
            // Date | SUM of Sales | +----------+--------------+ | 1/1/2017 | $621.14 | | 2/3/2017 | $708.84 | | 5/8/2017 | $326.84 |
            // ... +----------+--------------+ Applying a date-time group rule with a DateTimeRuleType of YEAR_MONTH results in the
            // following pivot table. +--------------+--------------+ | Grouped Date | SUM of Sales | +--------------+--------------+ |
            // 2017-Jan | $53,731.78 | | 2017-Feb | $83,475.32 | | 2017-Mar | $94,385.05 | ... +--------------+--------------+
            interface DateTimeRule {
                // The type of date-time grouping to apply.
                type?: string;
            }
            // Removes the banded range with the given ID from the spreadsheet.
            interface DeleteBandingRequest {
                // The ID of the banded range to delete.
                bandedRangeId?: Integer;
            }
            // Deletes a conditional format rule at the given index. All subsequent rules' indexes are decremented.
            interface DeleteConditionalFormatRuleRequest {
                // The zero-based index of the rule to be deleted.
                index?: Integer;
                // The sheet the rule is being deleted from.
                sheetId?: Integer;
            }
            // The result of deleting a conditional format rule.
            interface DeleteConditionalFormatRuleResponse {
                // The rule that was deleted.
                rule?: Schema.ConditionalFormatRule;
            }
            // Deletes a data source. The request also deletes the associated data source sheet, and unlinks all associated data source
            // objects.
            interface DeleteDataSourceRequest {
                // The ID of the data source to delete.
                dataSourceId?: string;
            }
            // A request to delete developer metadata.
            interface DeleteDeveloperMetadataRequest {
                // The data filter describing the criteria used to select which developer metadata entry to delete.
                dataFilter?: Schema.DataFilter;
            }
            // The response from deleting developer metadata.
            interface DeleteDeveloperMetadataResponse {
                // The metadata that was deleted.
                deletedDeveloperMetadata?: Schema.DeveloperMetadata[];
            }
            // Deletes a group over the specified range by decrementing the depth of the dimensions in the range. For example, assume
            // the sheet has a depth-1 group over B:E and a depth-2 group over C:D. Deleting a group over D:E leaves the sheet with a
            // depth-1 group over B:D and a depth-2 group over C:C.
            interface DeleteDimensionGroupRequest {
                // The range of the group to be deleted.
                range?: Schema.DimensionRange;
            }
            // The result of deleting a group.
            interface DeleteDimensionGroupResponse {
                // All groups of a dimension after deleting a group from that dimension.
                dimensionGroups?: Schema.DimensionGroup[];
            }
            // Deletes the dimensions from the sheet.
            interface DeleteDimensionRequest {
                // The dimensions to delete from the sheet.
                range?: Schema.DimensionRange;
            }
            // Removes rows within this range that contain values in the specified columns that are duplicates of values in any
            // previous row. Rows with identical values but different letter cases, formatting, or formulas are considered to be
            // duplicates. This request also removes duplicate rows hidden from view (for example, due to a filter). When removing
            // duplicates, the first instance of each duplicate row scanning from the top downwards is kept in the resulting range.
            // Content outside of the specified range isn't removed, and rows considered duplicates do not have to be adjacent to each
            // other in the range.
            interface DeleteDuplicatesRequest {
                // The columns in the range to analyze for duplicate values. If no columns are selected then all columns are analyzed for
                // duplicates.
                comparisonColumns?: Schema.DimensionRange[];
                // The range to remove duplicates rows from.
                range?: Schema.GridRange;
            }
            // The result of removing duplicates in a range.
            interface DeleteDuplicatesResponse {
                // The number of duplicate rows removed.
                duplicatesRemovedCount?: Integer;
            }
            // Deletes the embedded object with the given ID.
            interface DeleteEmbeddedObjectRequest {
                // The ID of the embedded object to delete.
                objectId?: Integer;
            }
            // Deletes a particular filter view.
            interface DeleteFilterViewRequest {
                // The ID of the filter to delete.
                filterId?: Integer;
            }
            // Removes the named range with the given ID from the spreadsheet.
            interface DeleteNamedRangeRequest {
                // The ID of the named range to delete.
                namedRangeId?: string;
            }
            // Deletes the protected range with the given ID.
            interface DeleteProtectedRangeRequest {
                // The ID of the protected range to delete.
                protectedRangeId?: Integer;
            }
            // Deletes a range of cells, shifting other cells into the deleted area.
            interface DeleteRangeRequest {
                // The range of cells to delete.
                range?: Schema.GridRange;
                // The dimension from which deleted cells will be replaced with. If ROWS, existing cells will be shifted upward to replace
                // the deleted cells. If COLUMNS, existing cells will be shifted left to replace the deleted cells.
                shiftDimension?: string;
            }
            // Deletes the requested sheet.
            interface DeleteSheetRequest {
                // The ID of the sheet to delete. If the sheet is of SheetType.DATA_SOURCE type, the associated DataSource is also deleted.
                sheetId?: Integer;
            }
            // Developer metadata associated with a location or object in a spreadsheet. Developer metadata may be used to associate
            // arbitrary data with various parts of a spreadsheet and will remain associated at those locations as they move around and
            // the spreadsheet is edited. For example, if developer metadata is associated with row 5 and another row is then
            // subsequently inserted above row 5, that original metadata will still be associated with the row it was first associated
            // with (what is now row 6). If the associated object is deleted its metadata is deleted too.
            interface DeveloperMetadata {
                // The location where the metadata is associated.
                location?: Schema.DeveloperMetadataLocation;
                // The spreadsheet-scoped unique ID that identifies the metadata. IDs may be specified when metadata is created, otherwise
                // one will be randomly generated and assigned. Must be positive.
                metadataId?: Integer;
                // The metadata key. There may be multiple metadata in a spreadsheet with the same key. Developer metadata must always have
                // a key specified.
                metadataKey?: string;
                // Data associated with the metadata's key.
                metadataValue?: string;
                // The metadata visibility. Developer metadata must always have a visibility specified.
                visibility?: string;
            }
            // A location where metadata may be associated in a spreadsheet.
            interface DeveloperMetadataLocation {
                // Represents the row or column when metadata is associated with a dimension. The specified DimensionRange must represent a
                // single row or column; it cannot be unbounded or span multiple rows or columns.
                dimensionRange?: Schema.DimensionRange;
                // The type of location this object represents. This field is read-only.
                locationType?: string;
                // The ID of the sheet when metadata is associated with an entire sheet.
                sheetId?: Integer;
                // True when metadata is associated with an entire spreadsheet.
                spreadsheet?: boolean;
            }
            // Selects DeveloperMetadata that matches all of the specified fields. For example, if only a metadata ID is specified this
            // considers the DeveloperMetadata with that particular unique ID. If a metadata key is specified, this considers all
            // developer metadata with that key. If a key, visibility, and location type are all specified, this considers all
            // developer metadata with that key and visibility that are associated with a location of that type. In general, this
            // selects all DeveloperMetadata that matches the intersection of all the specified fields; any field or combination of
            // fields may be specified.
            interface DeveloperMetadataLookup {
                // Determines how this lookup matches the location. If this field is specified as EXACT, only developer metadata associated
                // on the exact location specified is matched. If this field is specified to INTERSECTING, developer metadata associated on
                // intersecting locations is also matched. If left unspecified, this field assumes a default value of INTERSECTING. If this
                // field is specified, a metadataLocation must also be specified.
                locationMatchingStrategy?: string;
                // Limits the selected developer metadata to those entries which are associated with locations of the specified type. For
                // example, when this field is specified as ROW this lookup only considers developer metadata associated on rows. If the
                // field is left unspecified, all location types are considered. This field cannot be specified as SPREADSHEET when the
                // locationMatchingStrategy is specified as INTERSECTING or when the metadataLocation is specified as a non-spreadsheet
                // location: spreadsheet metadata cannot intersect any other developer metadata location. This field also must be left
                // unspecified when the locationMatchingStrategy is specified as EXACT.
                locationType?: string;
                // Limits the selected developer metadata to that which has a matching DeveloperMetadata.metadata_id.
                metadataId?: Integer;
                // Limits the selected developer metadata to that which has a matching DeveloperMetadata.metadata_key.
                metadataKey?: string;
                // Limits the selected developer metadata to those entries associated with the specified location. This field either
                // matches exact locations or all intersecting locations according the specified locationMatchingStrategy.
                metadataLocation?: Schema.DeveloperMetadataLocation;
                // Limits the selected developer metadata to that which has a matching DeveloperMetadata.metadata_value.
                metadataValue?: string;
                // Limits the selected developer metadata to that which has a matching DeveloperMetadata.visibility. If left unspecified,
                // all developer metadata visibile to the requesting project is considered.
                visibility?: string;
            }
            // A group over an interval of rows or columns on a sheet, which can contain or be contained within other groups. A group
            // can be collapsed or expanded as a unit on the sheet.
            interface DimensionGroup {
                // This field is true if this group is collapsed. A collapsed group remains collapsed if an overlapping group at a
                // shallower depth is expanded. A true value does not imply that all dimensions within the group are hidden, since a
                // dimension's visibility can change independently from this group property. However, when this property is updated, all
                // dimensions within it are set to hidden if this field is true, or set to visible if this field is false.
                collapsed?: boolean;
                // The depth of the group, representing how many groups have a range that wholly contains the range of this group.
                depth?: Integer;
                // The range over which this group exists.
                range?: Schema.DimensionRange;
            }
            // Properties about a dimension.
            interface DimensionProperties {
                // Output only. If set, this is a column in a data source sheet.
                dataSourceColumnReference?: Schema.DataSourceColumnReference;
                // The developer metadata associated with a single row or column.
                developerMetadata?: Schema.DeveloperMetadata[];
                // True if this dimension is being filtered. This field is read-only.
                hiddenByFilter?: boolean;
                // True if this dimension is explicitly hidden.
                hiddenByUser?: boolean;
                // The height (if a row) or width (if a column) of the dimension in pixels.
                pixelSize?: Integer;
            }
            // A range along a single dimension on a sheet. All indexes are zero-based. Indexes are half open: the start index is
            // inclusive and the end index is exclusive. Missing indexes indicate the range is unbounded on that side.
            interface DimensionRange {
                // The dimension of the span.
                dimension?: string;
                // The end (exclusive) of the span, or not set if unbounded.
                endIndex?: Integer;
                // The sheet this span is on.
                sheetId?: Integer;
                // The start (inclusive) of the span, or not set if unbounded.
                startIndex?: Integer;
            }
            // Duplicates a particular filter view.
            interface DuplicateFilterViewRequest {
                // The ID of the filter being duplicated.
                filterId?: Integer;
            }
            // The result of a filter view being duplicated.
            interface DuplicateFilterViewResponse {
                // The newly created filter.
                filter?: Schema.FilterView;
            }
            // Duplicates the contents of a sheet.
            interface DuplicateSheetRequest {
                // The zero-based index where the new sheet should be inserted. The index of all sheets after this are incremented.
                insertSheetIndex?: Integer;
                // If set, the ID of the new sheet. If not set, an ID is chosen. If set, the ID must not conflict with any existing sheet
                // ID. If set, it must be non-negative.
                newSheetId?: Integer;
                // The name of the new sheet. If empty, a new name is chosen for you.
                newSheetName?: string;
                // The sheet to duplicate. If the source sheet is of DATA_SOURCE type, its backing DataSource is also duplicated and
                // associated with the new copy of the sheet. No data execution is triggered, the grid data of this sheet is also copied
                // over but only available after the batch request completes.
                sourceSheetId?: Integer;
            }
            // The result of duplicating a sheet.
            interface DuplicateSheetResponse {
                // The properties of the duplicate sheet.
                properties?: Schema.SheetProperties;
            }
            // The editors of a protected range.
            interface Editors {
                // True if anyone in the document's domain has edit access to the protected range. Domain protection is only supported on
                // documents within a domain.
                domainUsersCanEdit?: boolean;
                // The email addresses of groups with edit access to the protected range.
                groups?: string[];
                // The email addresses of users with edit access to the protected range.
                users?: string[];
            }
            // A chart embedded in a sheet.
            interface EmbeddedChart {
                // The border of the chart.
                border?: Schema.EmbeddedObjectBorder;
                // The ID of the chart.
                chartId?: Integer;
                // The position of the chart.
                position?: Schema.EmbeddedObjectPosition;
                // The specification of the chart.
                spec?: Schema.ChartSpec;
            }
            // A border along an embedded object.
            interface EmbeddedObjectBorder {
                // The color of the border.
                color?: Schema.Color;
                // The color of the border. If color is also set, this field takes precedence.
                colorStyle?: Schema.ColorStyle;
            }
            // The position of an embedded object such as a chart.
            interface EmbeddedObjectPosition {
                // If true, the embedded object is put on a new sheet whose ID is chosen for you. Used only when writing.
                newSheet?: boolean;
                // The position at which the object is overlaid on top of a grid.
                overlayPosition?: Schema.OverlayPosition;
                // The sheet this is on. Set only if the embedded object is on its own sheet. Must be non-negative.
                sheetId?: Integer;
            }
            // An error in a cell.
            interface ErrorValue {
                // A message with more information about the error (in the spreadsheet's locale).
                message?: string;
                // The type of error.
                type?: string;
            }
            // The kinds of value that a cell in a spreadsheet can have.
            interface ExtendedValue {
                // Represents a boolean value.
                boolValue?: boolean;
                // Represents an error. This field is read-only.
                errorValue?: Schema.ErrorValue;
                // Represents a formula.
                formulaValue?: string;
                // Represents a double value. Note: Dates, Times and DateTimes are represented as doubles in "serial number" format.
                numberValue?: number;
                // Represents a string value. Leading single quotes are not included. For example, if the user typed `'123` into the UI,
                // this would be represented as a `stringValue` of `"123"`.
                stringValue?: string;
            }
            // Criteria for showing/hiding rows in a filter or filter view.
            interface FilterCriteria {
                // A condition that must be true for values to be shown. (This does not override hidden_values -- if a value is listed
                // there, it will still be hidden.)
                condition?: Schema.BooleanCondition;
                // Values that should be hidden.
                hiddenValues?: string[];
                // The background fill color to filter by; only cells with this fill color are shown. Mutually exclusive with
                // visible_foreground_color.
                visibleBackgroundColor?: Schema.Color;
                // The background fill color to filter by; only cells with this fill color are shown. This field is mutually exclusive with
                // visible_foreground_color, and must be set to an RGB-type color. If visible_background_color is also set, this field
                // takes precedence.
                visibleBackgroundColorStyle?: Schema.ColorStyle;
                // The foreground color to filter by; only cells with this foreground color are shown. Mutually exclusive with
                // visible_background_color.
                visibleForegroundColor?: Schema.Color;
                // The foreground color to filter by; only cells with this foreground color are shown. This field is mutually exclusive
                // with visible_background_color, and must be set to an RGB-type color. If visible_foreground_color is also set, this field
                // takes precedence.
                visibleForegroundColorStyle?: Schema.ColorStyle;
            }
            // The filter criteria associated with a specific column.
            interface FilterSpec {
                // The column index.
                columnIndex?: Integer;
                // Reference to a data source column.
                dataSourceColumnReference?: Schema.DataSourceColumnReference;
                // The criteria for the column.
                filterCriteria?: Schema.FilterCriteria;
            }
            // A filter view.
            interface FilterView {
                // The criteria for showing/hiding values per column. The map's key is the column index, and the value is the criteria for
                // that column. This field is deprecated in favor of filter_specs.
                criteria?: object;
                // The filter criteria for showing/hiding values per column. Both criteria and filter_specs are populated in responses. If
                // both fields are specified in an update request, this field takes precedence.
                filterSpecs?: Schema.FilterSpec[];
                // The ID of the filter view.
                filterViewId?: Integer;
                // The named range this filter view is backed by, if any. When writing, only one of range or named_range_id may be set.
                namedRangeId?: string;
                // The range this filter view covers. When writing, only one of range or named_range_id may be set.
                range?: Schema.GridRange;
                // The sort order per column. Later specifications are used when values are equal in the earlier specifications.
                sortSpecs?: Schema.SortSpec[];
                // The name of the filter view.
                title?: string;
            }
            // Finds and replaces data in cells over a range, sheet, or all sheets.
            interface FindReplaceRequest {
                // True to find/replace over all sheets.
                allSheets?: boolean;
                // The value to search.
                find?: string;
                // True if the search should include cells with formulas. False to skip cells with formulas.
                includeFormulas?: boolean;
                // True if the search is case sensitive.
                matchCase?: boolean;
                // True if the find value should match the entire cell.
                matchEntireCell?: boolean;
                // The range to find/replace over.
                range?: Schema.GridRange;
                // The value to use as the replacement.
                replacement?: string;
                // True if the find value is a regex. The regular expression and replacement should follow Java regex rules at
                // https://docs.oracle.com/javase/8/docs/api/java/util/regex/Pattern.html. The replacement string is allowed to refer to
                // capturing groups. For example, if one cell has the contents `"Google Sheets"` and another has `"Google Docs"`, then
                // searching for `"o.* (.*)"` with a replacement of `"$1 Rocks"` would change the contents of the cells to `"GSheets
                // Rocks"` and `"GDocs Rocks"` respectively.
                searchByRegex?: boolean;
                // The sheet to find/replace over.
                sheetId?: Integer;
            }
            // The result of the find/replace.
            interface FindReplaceResponse {
                // The number of formula cells changed.
                formulasChanged?: Integer;
                // The number of occurrences (possibly multiple within a cell) changed. For example, if replacing `"e"` with `"o"` in
                // `"Google Sheets"`, this would be `"3"` because `"Google Sheets"` -> `"Googlo Shoots"`.
                occurrencesChanged?: Integer;
                // The number of rows changed.
                rowsChanged?: Integer;
                // The number of sheets changed.
                sheetsChanged?: Integer;
                // The number of non-formula cells changed.
                valuesChanged?: Integer;
            }
            // The request for retrieving a Spreadsheet.
            interface GetSpreadsheetByDataFilterRequest {
                // The DataFilters used to select which ranges to retrieve from the spreadsheet.
                dataFilters?: Schema.DataFilter[];
                // True if grid data should be returned. This parameter is ignored if a field mask was set in the request.
                includeGridData?: boolean;
            }
            // A rule that applies a gradient color scale format, based on the interpolation points listed. The format of a cell will
            // vary based on its contents as compared to the values of the interpolation points.
            interface GradientRule {
                // The final interpolation point.
                maxpoint?: Schema.InterpolationPoint;
                // An optional midway interpolation point.
                midpoint?: Schema.InterpolationPoint;
                // The starting interpolation point.
                minpoint?: Schema.InterpolationPoint;
            }
            // A coordinate in a sheet. All indexes are zero-based.
            interface GridCoordinate {
                // The column index of the coordinate.
                columnIndex?: Integer;
                // The row index of the coordinate.
                rowIndex?: Integer;
                // The sheet this coordinate is on.
                sheetId?: Integer;
            }
            // Data in the grid, as well as metadata about the dimensions.
            interface GridData {
                // Metadata about the requested columns in the grid, starting with the column in start_column.
                columnMetadata?: Schema.DimensionProperties[];
                // The data in the grid, one entry per row, starting with the row in startRow. The values in RowData will correspond to
                // columns starting at start_column.
                rowData?: Schema.RowData[];
                // Metadata about the requested rows in the grid, starting with the row in start_row.
                rowMetadata?: Schema.DimensionProperties[];
                // The first column this GridData refers to, zero-based.
                startColumn?: Integer;
                // The first row this GridData refers to, zero-based.
                startRow?: Integer;
            }
            // Properties of a grid.
            interface GridProperties {
                // The number of columns in the grid.
                columnCount?: Integer;
                // True if the column grouping control toggle is shown after the group.
                columnGroupControlAfter?: boolean;
                // The number of columns that are frozen in the grid.
                frozenColumnCount?: Integer;
                // The number of rows that are frozen in the grid.
                frozenRowCount?: Integer;
                // True if the grid isn't showing gridlines in the UI.
                hideGridlines?: boolean;
                // The number of rows in the grid.
                rowCount?: Integer;
                // True if the row grouping control toggle is shown after the group.
                rowGroupControlAfter?: boolean;
            }
            // A range on a sheet. All indexes are zero-based. Indexes are half open, i.e. the start index is inclusive and the end
            // index is exclusive -- [start_index, end_index). Missing indexes indicate the range is unbounded on that side. For
            // example, if `"Sheet1"` is sheet ID 0, then: `Sheet1!A1:A1 == sheet_id: 0, start_row_index: 0, end_row_index: 1,
            // start_column_index: 0, end_column_index: 1` `Sheet1!A3:B4 == sheet_id: 0, start_row_index: 2, end_row_index: 4,
            // start_column_index: 0, end_column_index: 2` `Sheet1!A:B == sheet_id: 0, start_column_index: 0, end_column_index: 2`
            // `Sheet1!A5:B == sheet_id: 0, start_row_index: 4, start_column_index: 0, end_column_index: 2` `Sheet1 == sheet_id:0` The
            // start index must always be less than or equal to the end index. If the start index equals the end index, then the range
            // is empty. Empty ranges are typically not meaningful and are usually rendered in the UI as `#REF!`.
            interface GridRange {
                // The end column (exclusive) of the range, or not set if unbounded.
                endColumnIndex?: Integer;
                // The end row (exclusive) of the range, or not set if unbounded.
                endRowIndex?: Integer;
                // The sheet this range is on.
                sheetId?: Integer;
                // The start column (inclusive) of the range, or not set if unbounded.
                startColumnIndex?: Integer;
                // The start row (inclusive) of the range, or not set if unbounded.
                startRowIndex?: Integer;
            }
            // A histogram chart. A histogram chart groups data items into bins, displaying each bin as a column of stacked items.
            // Histograms are used to display the distribution of a dataset. Each column of items represents a range into which those
            // items fall. The number of bins can be chosen automatically or specified explicitly.
            interface HistogramChartSpec {
                // By default the bucket size (the range of values stacked in a single column) is chosen automatically, but it may be
                // overridden here. E.g., A bucket size of 1.5 results in buckets from 0 - 1.5, 1.5 - 3.0, etc. Cannot be negative. This
                // field is optional.
                bucketSize?: number;
                // The position of the chart legend.
                legendPosition?: string;
                // The outlier percentile is used to ensure that outliers do not adversely affect the calculation of bucket sizes. For
                // example, setting an outlier percentile of 0.05 indicates that the top and bottom 5% of values when calculating buckets.
                // The values are still included in the chart, they will be added to the first or last buckets instead of their own
                // buckets. Must be between 0.0 and 0.5.
                outlierPercentile?: number;
                // The series for a histogram may be either a single series of values to be bucketed or multiple series, each of the same
                // length, containing the name of the series followed by the values to be bucketed for that series.
                series?: Schema.HistogramSeries[];
                // Whether horizontal divider lines should be displayed between items in each column.
                showItemDividers?: boolean;
            }
            // Allows you to organize the numeric values in a source data column into buckets of a constant size. All values from
            // HistogramRule.start to HistogramRule.end are placed into groups of size HistogramRule.interval. In addition, all values
            // below HistogramRule.start are placed in one group, and all values above HistogramRule.end are placed in another. Only
            // HistogramRule.interval is required, though if HistogramRule.start and HistogramRule.end are both provided,
            // HistogramRule.start must be less than HistogramRule.end. For example, a pivot table showing average purchase amount by
            // age that has 50+ rows: +-----+-------------------+ | Age | AVERAGE of Amount | +-----+-------------------+ | 16 | $27.13
            // | | 17 | $5.24 | | 18 | $20.15 | ... +-----+-------------------+ could be turned into a pivot table that looks like the
            // one below by applying a histogram group rule with a HistogramRule.start of 25, an HistogramRule.interval of 20, and an
            // HistogramRule.end of 65. +-------------+-------------------+ | Grouped Age | AVERAGE of Amount |
            // +-------------+-------------------+ | < 25 | $19.34 | | 25-45 | $31.43 | | 45-65 | $35.87 | | > 65 | $27.55 |
            // +-------------+-------------------+ | Grand Total | $29.12 | +-------------+-------------------+
            interface HistogramRule {
                // The maximum value at which items are placed into buckets of constant size. Values above end are lumped into a single
                // bucket. This field is optional.
                end?: number;
                // The size of the buckets that are created. Must be positive.
                interval?: number;
                // The minimum value at which items are placed into buckets of constant size. Values below start are lumped into a single
                // bucket. This field is optional.
                start?: number;
            }
            // A histogram series containing the series color and data.
            interface HistogramSeries {
                // The color of the column representing this series in each bucket. This field is optional.
                barColor?: Schema.Color;
                // The color of the column representing this series in each bucket. This field is optional. If bar_color is also set, this
                // field takes precedence.
                barColorStyle?: Schema.ColorStyle;
                // The data for this histogram series.
                data?: Schema.ChartData;
            }
            // Inserts rows or columns in a sheet at a particular index.
            interface InsertDimensionRequest {
                // Whether dimension properties should be extended from the dimensions before or after the newly inserted dimensions. True
                // to inherit from the dimensions before (in which case the start index must be greater than 0), and false to inherit from
                // the dimensions after. For example, if row index 0 has red background and row index 1 has a green background, then
                // inserting 2 rows at index 1 can inherit either the green or red background. If `inheritFromBefore` is true, the two new
                // rows will be red (because the row before the insertion point was red), whereas if `inheritFromBefore` is false, the two
                // new rows will be green (because the row after the insertion point was green).
                inheritFromBefore?: boolean;
                // The dimensions to insert. Both the start and end indexes must be bounded.
                range?: Schema.DimensionRange;
            }
            // Inserts cells into a range, shifting the existing cells over or down.
            interface InsertRangeRequest {
                // The range to insert new cells into.
                range?: Schema.GridRange;
                // The dimension which will be shifted when inserting cells. If ROWS, existing cells will be shifted down. If COLUMNS,
                // existing cells will be shifted right.
                shiftDimension?: string;
            }
            // A single interpolation point on a gradient conditional format. These pin the gradient color scale according to the
            // color, type and value chosen.
            interface InterpolationPoint {
                // The color this interpolation point should use.
                color?: Schema.Color;
                // The color this interpolation point should use. If color is also set, this field takes precedence.
                colorStyle?: Schema.ColorStyle;
                // How the value should be interpreted.
                type?: string;
                // The value this interpolation point uses. May be a formula. Unused if type is MIN or MAX.
                value?: string;
            }
            // Represents a time interval, encoded as a Timestamp start (inclusive) and a Timestamp end (exclusive). The start must be
            // less than or equal to the end. When the start equals the end, the interval is empty (matches no time). When both start
            // and end are unspecified, the interval matches any time.
            interface Interval {
                // Optional. Exclusive end of the interval. If specified, a Timestamp matching this interval will have to be before the
                // end.
                endTime?: string;
                // Optional. Inclusive start of the interval. If specified, a Timestamp matching this interval will have to be the same or
                // after the start.
                startTime?: string;
            }
            // Settings to control how circular dependencies are resolved with iterative calculation.
            interface IterativeCalculationSettings {
                // When iterative calculation is enabled and successive results differ by less than this threshold value, the calculation
                // rounds stop.
                convergenceThreshold?: number;
                // When iterative calculation is enabled, the maximum number of calculation rounds to perform.
                maxIterations?: Integer;
            }
            // Formatting options for key value.
            interface KeyValueFormat {
                // Specifies the horizontal text positioning of key value. This field is optional. If not specified, default positioning is
                // used.
                position?: Schema.TextPosition;
                // Text formatting options for key value.
                textFormat?: Schema.TextFormat;
            }
            // Properties that describe the style of a line.
            interface LineStyle {
                // The dash type of the line.
                type?: string;
                // The thickness of the line, in px.
                width?: Integer;
            }
            // Allows you to manually organize the values in a source data column into buckets with names of your choosing. For
            // example, a pivot table that aggregates population by state: +-------+-------------------+ | State | SUM of Population |
            // +-------+-------------------+ | AK | 0.7 | | AL | 4.8 | | AR | 2.9 | ... +-------+-------------------+ could be turned
            // into a pivot table that aggregates population by time zone by providing a list of groups (for example, groupName =
            // 'Central', items = ['AL', 'AR', 'IA', ...]) to a manual group rule. Note that a similar effect could be achieved by
            // adding a time zone column to the source data and adjusting the pivot table. +-----------+-------------------+ | Time
            // Zone | SUM of Population | +-----------+-------------------+ | Central | 106.3 | | Eastern | 151.9 | | Mountain | 17.4 |
            // ... +-----------+-------------------+
            interface ManualRule {
                // The list of group names and the corresponding items from the source data that map to each group name.
                groups?: Schema.ManualRuleGroup[];
            }
            // A group name and a list of items from the source data that should be placed in the group with this name.
            interface ManualRuleGroup {
                // The group name, which must be a string. Each group in a given ManualRule must have a unique group name.
                groupName?: Schema.ExtendedValue;
                // The items in the source data that should be placed into this group. Each item may be a string, number, or boolean. Items
                // may appear in at most one group within a given ManualRule. Items that do not appear in any group will appear on their
                // own.
                items?: Schema.ExtendedValue[];
            }
            // A developer metadata entry and the data filters specified in the original request that matched it.
            interface MatchedDeveloperMetadata {
                // All filters matching the returned developer metadata.
                dataFilters?: Schema.DataFilter[];
                // The developer metadata matching the specified filters.
                developerMetadata?: Schema.DeveloperMetadata;
            }
            // A value range that was matched by one or more data filers.
            interface MatchedValueRange {
                // The DataFilters from the request that matched the range of values.
                dataFilters?: Schema.DataFilter[];
                // The values matched by the DataFilter.
                valueRange?: Schema.ValueRange;
            }
            // Merges all cells in the range.
            interface MergeCellsRequest {
                // How the cells should be merged.
                mergeType?: string;
                // The range of cells to merge.
                range?: Schema.GridRange;
            }
            // Moves one or more rows or columns.
            interface MoveDimensionRequest {
                // The zero-based start index of where to move the source data to, based on the coordinates *before* the source data is
                // removed from the grid. Existing data will be shifted down or right (depending on the dimension) to make room for the
                // moved dimensions. The source dimensions are removed from the grid, so the the data may end up in a different index than
                // specified. For example, given `A1..A5` of `0, 1, 2, 3, 4` and wanting to move `"1"` and `"2"` to between `"3"` and
                // `"4"`, the source would be `ROWS [1..3)`,and the destination index would be `"4"` (the zero-based index of row 5). The
                // end result would be `A1..A5` of `0, 3, 1, 2, 4`.
                destinationIndex?: Integer;
                // The source dimensions to move.
                source?: Schema.DimensionRange;
            }
            // A named range.
            interface NamedRange {
                // The name of the named range.
                name?: string;
                // The ID of the named range.
                namedRangeId?: string;
                // The range this represents.
                range?: Schema.GridRange;
            }
            // The number format of a cell.
            interface NumberFormat {
                // Pattern string used for formatting. If not set, a default pattern based on the user's locale will be used if necessary
                // for the given type. See the [Date and Number Formats guide](/sheets/api/guides/formats) for more information about the
                // supported patterns.
                pattern?: string;
                // The type of the number format. When writing, this field must be set.
                type?: string;
            }
            // An org chart. Org charts require a unique set of labels in labels and may optionally include parent_labels and tooltips.
            // parent_labels contain, for each node, the label identifying the parent node. tooltips contain, for each node, an
            // optional tooltip. For example, to describe an OrgChart with Alice as the CEO, Bob as the President (reporting to Alice)
            // and Cathy as VP of Sales (also reporting to Alice), have labels contain "Alice", "Bob", "Cathy", parent_labels contain
            // "", "Alice", "Alice" and tooltips contain "CEO", "President", "VP Sales".
            interface OrgChartSpec {
                // The data containing the labels for all the nodes in the chart. Labels must be unique.
                labels?: Schema.ChartData;
                // The color of the org chart nodes.
                nodeColor?: Schema.Color;
                // The color of the org chart nodes. If node_color is also set, this field takes precedence.
                nodeColorStyle?: Schema.ColorStyle;
                // The size of the org chart nodes.
                nodeSize?: string;
                // The data containing the label of the parent for the corresponding node. A blank value indicates that the node has no
                // parent and is a top-level node. This field is optional.
                parentLabels?: Schema.ChartData;
                // The color of the selected org chart nodes.
                selectedNodeColor?: Schema.Color;
                // The color of the selected org chart nodes. If selected_node_color is also set, this field takes precedence.
                selectedNodeColorStyle?: Schema.ColorStyle;
                // The data containing the tooltip for the corresponding node. A blank value results in no tooltip being displayed for the
                // node. This field is optional.
                tooltips?: Schema.ChartData;
            }
            // The location an object is overlaid on top of a grid.
            interface OverlayPosition {
                // The cell the object is anchored to.
                anchorCell?: Schema.GridCoordinate;
                // The height of the object, in pixels. Defaults to 371.
                heightPixels?: Integer;
                // The horizontal offset, in pixels, that the object is offset from the anchor cell.
                offsetXPixels?: Integer;
                // The vertical offset, in pixels, that the object is offset from the anchor cell.
                offsetYPixels?: Integer;
                // The width of the object, in pixels. Defaults to 600.
                widthPixels?: Integer;
            }
            // The amount of padding around the cell, in pixels. When updating padding, every field must be specified.
            interface Padding {
                // The bottom padding of the cell.
                bottom?: Integer;
                // The left padding of the cell.
                left?: Integer;
                // The right padding of the cell.
                right?: Integer;
                // The top padding of the cell.
                top?: Integer;
            }
            // Inserts data into the spreadsheet starting at the specified coordinate.
            interface PasteDataRequest {
                // The coordinate at which the data should start being inserted.
                coordinate?: Schema.GridCoordinate;
                // The data to insert.
                data?: string;
                // The delimiter in the data.
                delimiter?: string;
                // True if the data is HTML.
                html?: boolean;
                // How the data should be pasted.
                type?: string;
            }
            // A pie chart.
            interface PieChartSpec {
                // The data that covers the domain of the pie chart.
                domain?: Schema.ChartData;
                // Where the legend of the pie chart should be drawn.
                legendPosition?: string;
                // The size of the hole in the pie chart.
                pieHole?: number;
                // The data that covers the one and only series of the pie chart.
                series?: Schema.ChartData;
                // True if the pie is three dimensional.
                threeDimensional?: boolean;
            }
            // Criteria for showing/hiding rows in a pivot table.
            interface PivotFilterCriteria {
                // A condition that must be true for values to be shown. (`visibleValues` does not override this -- even if a value is
                // listed there, it is still hidden if it does not meet the condition.) Condition values that refer to ranges in
                // A1-notation are evaluated relative to the pivot table sheet. References are treated absolutely, so are not filled down
                // the pivot table. For example, a condition value of `=A1` on "Pivot Table 1" is treated as `'Pivot Table 1'!$A$1`. The
                // source data of the pivot table can be referenced by column header name. For example, if the source data has columns
                // named "Revenue" and "Cost" and a condition is applied to the "Revenue" column with type `NUMBER_GREATER` and value
                // `=Cost`, then only columns where "Revenue" > "Cost" are included.
                condition?: Schema.BooleanCondition;
                // Whether values are visible by default. If true, the visible_values are ignored, all values that meet condition (if
                // specified) are shown. If false, values that are both in visible_values and meet condition are shown.
                visibleByDefault?: boolean;
                // Values that should be included. Values not listed here are excluded.
                visibleValues?: string[];
            }
            // The pivot table filter criteria associated with a specific source column offset.
            interface PivotFilterSpec {
                // The column offset of the source range.
                columnOffsetIndex?: Integer;
                // The reference to the data source column.
                dataSourceColumnReference?: Schema.DataSourceColumnReference;
                // The criteria for the column.
                filterCriteria?: Schema.PivotFilterCriteria;
            }
            // A single grouping (either row or column) in a pivot table.
            interface PivotGroup {
                // The reference to the data source column this grouping is based on.
                dataSourceColumnReference?: Schema.DataSourceColumnReference;
                // The count limit on rows or columns to apply to this pivot group.
                groupLimit?: Schema.PivotGroupLimit;
                // The group rule to apply to this row/column group.
                groupRule?: Schema.PivotGroupRule;
                // The labels to use for the row/column groups which can be customized. For example, in the following pivot table, the row
                // label is `Region` (which could be renamed to `State`) and the column label is `Product` (which could be renamed `Item`).
                // Pivot tables created before December 2017 do not have header labels. If you'd like to add header labels to an existing
                // pivot table, please delete the existing pivot table and then create a new pivot table with same parameters.
                // +--------------+---------+-------+ | SUM of Units | Product | | | Region | Pen | Paper |
                // +--------------+---------+-------+ | New York | 345 | 98 | | Oregon | 234 | 123 | | Tennessee | 531 | 415 |
                // +--------------+---------+-------+ | Grand Total | 1110 | 636 | +--------------+---------+-------+
                label?: string;
                // True if the headings in this pivot group should be repeated. This is only valid for row groupings and is ignored by
                // columns. By default, we minimize repitition of headings by not showing higher level headings where they are the same.
                // For example, even though the third row below corresponds to "Q1 Mar", "Q1" is not shown because it is redundant with
                // previous rows. Setting repeat_headings to true would cause "Q1" to be repeated for "Feb" and "Mar". +--------------+ |
                // Q1 | Jan | | | Feb | | | Mar | +--------+-----+ | Q1 Total | +--------------+
                repeatHeadings?: boolean;
                // True if the pivot table should include the totals for this grouping.
                showTotals?: boolean;
                // The order the values in this group should be sorted.
                sortOrder?: string;
                // The column offset of the source range that this grouping is based on. For example, if the source was `C10:E15`, a
                // `sourceColumnOffset` of `0` means this group refers to column `C`, whereas the offset `1` would refer to column `D`.
                sourceColumnOffset?: Integer;
                // The bucket of the opposite pivot group to sort by. If not specified, sorting is alphabetical by this group's values.
                valueBucket?: Schema.PivotGroupSortValueBucket;
                // Metadata about values in the grouping.
                valueMetadata?: Schema.PivotGroupValueMetadata[];
            }
            // The count limit on rows or columns in the pivot group.
            interface PivotGroupLimit {
                // The order in which the group limit is applied to the pivot table. Pivot group limits are applied from lower to higher
                // order number. Order numbers are normalized to consecutive integers from 0. For write request, to fully customize the
                // applying orders, all pivot group limits should have this field set with an unique number. Otherwise, the order is
                // determined by the index in the PivotTable.rows list and then the PivotTable.columns list.
                applyOrder?: Integer;
                // The count limit.
                countLimit?: Integer;
            }
            // An optional setting on a PivotGroup that defines buckets for the values in the source data column rather than breaking
            // out each individual value. Only one PivotGroup with a group rule may be added for each column in the source data, though
            // on any given column you may add both a PivotGroup that has a rule and a PivotGroup that does not.
            interface PivotGroupRule {
                // A DateTimeRule.
                dateTimeRule?: Schema.DateTimeRule;
                // A HistogramRule.
                histogramRule?: Schema.HistogramRule;
                // A ManualRule.
                manualRule?: Schema.ManualRule;
            }
            // Information about which values in a pivot group should be used for sorting.
            interface PivotGroupSortValueBucket {
                // Determines the bucket from which values are chosen to sort. For example, in a pivot table with one row group & two
                // column groups, the row group can list up to two values. The first value corresponds to a value within the first column
                // group, and the second value corresponds to a value in the second column group. If no values are listed, this would
                // indicate that the row should be sorted according to the "Grand Total" over the column groups. If a single value is
                // listed, this would correspond to using the "Total" of that bucket.
                buckets?: Schema.ExtendedValue[];
                // The offset in the PivotTable.values list which the values in this grouping should be sorted by.
                valuesIndex?: Integer;
            }
            // Metadata about a value in a pivot grouping.
            interface PivotGroupValueMetadata {
                // True if the data corresponding to the value is collapsed.
                collapsed?: boolean;
                // The calculated value the metadata corresponds to. (Note that formulaValue is not valid, because the values will be
                // calculated.)
                value?: Schema.ExtendedValue;
            }
            // A pivot table.
            interface PivotTable {
                // Each column grouping in the pivot table.
                columns?: Schema.PivotGroup[];
                // An optional mapping of filters per source column offset. The filters are applied before aggregating data into the pivot
                // table. The map's key is the column offset of the source range that you want to filter, and the value is the criteria for
                // that column. For example, if the source was `C10:E15`, a key of `0` will have the filter for column `C`, whereas the key
                // `1` is for column `D`. This field is deprecated in favor of filter_specs.
                criteria?: object;
                // Output only. The data execution status for data source pivot tables.
                dataExecutionStatus?: Schema.DataExecutionStatus;
                // The ID of the data source the pivot table is reading data from.
                dataSourceId?: string;
                // The filters applied to the source columns before aggregating data for the pivot table. Both criteria and filter_specs
                // are populated in responses. If both fields are specified in an update request, this field takes precedence.
                filterSpecs?: Schema.PivotFilterSpec[];
                // Each row grouping in the pivot table.
                rows?: Schema.PivotGroup[];
                // The range the pivot table is reading data from.
                source?: Schema.GridRange;
                // Whether values should be listed horizontally (as columns) or vertically (as rows).
                valueLayout?: string;
                // A list of values to include in the pivot table.
                values?: Schema.PivotValue[];
            }
            // The definition of how a value in a pivot table should be calculated.
            interface PivotValue {
                // If specified, indicates that pivot values should be displayed as the result of a calculation with another pivot value.
                // For example, if calculated_display_type is specified as PERCENT_OF_GRAND_TOTAL, all the pivot values are displayed as
                // the percentage of the grand total. In the Sheets editor, this is referred to as "Show As" in the value section of a
                // pivot table.
                calculatedDisplayType?: string;
                // The reference to the data source column that this value reads from.
                dataSourceColumnReference?: Schema.DataSourceColumnReference;
                // A custom formula to calculate the value. The formula must start with an `=` character.
                formula?: string;
                // A name to use for the value.
                name?: string;
                // The column offset of the source range that this value reads from. For example, if the source was `C10:E15`, a
                // `sourceColumnOffset` of `0` means this value refers to column `C`, whereas the offset `1` would refer to column `D`.
                sourceColumnOffset?: Integer;
                // A function to summarize the value. If formula is set, the only supported values are SUM and CUSTOM. If
                // sourceColumnOffset is set, then `CUSTOM` is not supported.
                summarizeFunction?: string;
            }
            // The style of a point on the chart.
            interface PointStyle {
                // The point shape. If empty or unspecified, a default shape is used.
                shape?: string;
                // The point size. If empty, a default size is used.
                size?: number;
            }
            // A protected range.
            interface ProtectedRange {
                // The description of this protected range.
                description?: string;
                // The users and groups with edit access to the protected range. This field is only visible to users with edit access to
                // the protected range and the document. Editors are not supported with warning_only protection.
                editors?: Schema.Editors;
                // The named range this protected range is backed by, if any. When writing, only one of range or named_range_id may be set.
                namedRangeId?: string;
                // The ID of the protected range. This field is read-only.
                protectedRangeId?: Integer;
                // The range that is being protected. The range may be fully unbounded, in which case this is considered a protected sheet.
                // When writing, only one of range or named_range_id may be set.
                range?: Schema.GridRange;
                // True if the user who requested this protected range can edit the protected area. This field is read-only.
                requestingUserCanEdit?: boolean;
                // The list of unprotected ranges within a protected sheet. Unprotected ranges are only supported on protected sheets.
                unprotectedRanges?: Schema.GridRange[];
                // True if this protected range will show a warning when editing. Warning-based protection means that every user can edit
                // data in the protected range, except editing will prompt a warning asking the user to confirm the edit. When writing: if
                // this field is true, then editors is ignored. Additionally, if this field is changed from true to false and the `editors`
                // field is not set (nor included in the field mask), then the editors will be set to all the editors in the document.
                warningOnly?: boolean;
            }
            // Randomizes the order of the rows in a range.
            interface RandomizeRangeRequest {
                // The range to randomize.
                range?: Schema.GridRange;
            }
            // The execution status of refreshing one data source object.
            interface RefreshDataSourceObjectExecutionStatus {
                // The data execution status.
                dataExecutionStatus?: Schema.DataExecutionStatus;
                // Reference to a data source object being refreshed.
                reference?: Schema.DataSourceObjectReference;
            }
            // Refreshes one or multiple data source objects in the spreadsheet by the specified references. The request requires an
            // additional `bigquery.readonly` OAuth scope. If there are multiple refresh requests referencing the same data source
            // objects in one batch, only the last refresh request is processed, and all those requests will have the same response
            // accordingly.
            interface RefreshDataSourceRequest {
                // Reference to a DataSource. If specified, refreshes all associated data source objects for the data source.
                dataSourceId?: string;
                // Refreshes the data source objects regardless of the current state. If not set and a referenced data source object was in
                // error state, the refresh will fail immediately.
                force?: boolean;
                // Refreshes all existing data source objects in the spreadsheet.
                isAll?: boolean;
                // References to data source objects to refresh.
                references?: Schema.DataSourceObjectReferences;
            }
            // The response from refreshing one or multiple data source objects.
            interface RefreshDataSourceResponse {
                // All the refresh status for the data source object references specified in the request. If is_all is specified, the field
                // contains only those in failure status.
                statuses?: Schema.RefreshDataSourceObjectExecutionStatus[];
            }
            // Updates all cells in the range to the values in the given Cell object. Only the fields listed in the fields field are
            // updated; others are unchanged. If writing a cell with a formula, the formula's ranges will automatically increment for
            // each field in the range. For example, if writing a cell with formula `=A1` into range B2:C4, B2 would be `=A1`, B3 would
            // be `=A2`, B4 would be `=A3`, C2 would be `=B1`, C3 would be `=B2`, C4 would be `=B3`. To keep the formula's ranges
            // static, use the `$` indicator. For example, use the formula `=$A$1` to prevent both the row and the column from
            // incrementing.
            interface RepeatCellRequest {
                // The data to write.
                cell?: Schema.CellData;
                // The fields that should be updated. At least one field must be specified. The root `cell` is implied and should not be
                // specified. A single `"*"` can be used as short-hand for listing every field.
                fields?: string;
                // The range to repeat the cell in.
                range?: Schema.GridRange;
            }
            // A single kind of update to apply to a spreadsheet.
            interface Request {
                // Adds a new banded range
                addBanding?: Schema.AddBandingRequest;
                // Adds a chart.
                addChart?: Schema.AddChartRequest;
                // Adds a new conditional format rule.
                addConditionalFormatRule?: Schema.AddConditionalFormatRuleRequest;
                // Adds a data source.
                addDataSource?: Schema.AddDataSourceRequest;
                // Creates a group over the specified range.
                addDimensionGroup?: Schema.AddDimensionGroupRequest;
                // Adds a filter view.
                addFilterView?: Schema.AddFilterViewRequest;
                // Adds a named range.
                addNamedRange?: Schema.AddNamedRangeRequest;
                // Adds a protected range.
                addProtectedRange?: Schema.AddProtectedRangeRequest;
                // Adds a sheet.
                addSheet?: Schema.AddSheetRequest;
                // Adds a slicer.
                addSlicer?: Schema.AddSlicerRequest;
                // Appends cells after the last row with data in a sheet.
                appendCells?: Schema.AppendCellsRequest;
                // Appends dimensions to the end of a sheet.
                appendDimension?: Schema.AppendDimensionRequest;
                // Automatically fills in more data based on existing data.
                autoFill?: Schema.AutoFillRequest;
                // Automatically resizes one or more dimensions based on the contents of the cells in that dimension.
                autoResizeDimensions?: Schema.AutoResizeDimensionsRequest;
                // Clears the basic filter on a sheet.
                clearBasicFilter?: Schema.ClearBasicFilterRequest;
                // Copies data from one area and pastes it to another.
                copyPaste?: Schema.CopyPasteRequest;
                // Creates new developer metadata
                createDeveloperMetadata?: Schema.CreateDeveloperMetadataRequest;
                // Cuts data from one area and pastes it to another.
                cutPaste?: Schema.CutPasteRequest;
                // Removes a banded range
                deleteBanding?: Schema.DeleteBandingRequest;
                // Deletes an existing conditional format rule.
                deleteConditionalFormatRule?: Schema.DeleteConditionalFormatRuleRequest;
                // Deletes a data source.
                deleteDataSource?: Schema.DeleteDataSourceRequest;
                // Deletes developer metadata
                deleteDeveloperMetadata?: Schema.DeleteDeveloperMetadataRequest;
                // Deletes rows or columns in a sheet.
                deleteDimension?: Schema.DeleteDimensionRequest;
                // Deletes a group over the specified range.
                deleteDimensionGroup?: Schema.DeleteDimensionGroupRequest;
                // Removes rows containing duplicate values in specified columns of a cell range.
                deleteDuplicates?: Schema.DeleteDuplicatesRequest;
                // Deletes an embedded object (e.g, chart, image) in a sheet.
                deleteEmbeddedObject?: Schema.DeleteEmbeddedObjectRequest;
                // Deletes a filter view from a sheet.
                deleteFilterView?: Schema.DeleteFilterViewRequest;
                // Deletes a named range.
                deleteNamedRange?: Schema.DeleteNamedRangeRequest;
                // Deletes a protected range.
                deleteProtectedRange?: Schema.DeleteProtectedRangeRequest;
                // Deletes a range of cells from a sheet, shifting the remaining cells.
                deleteRange?: Schema.DeleteRangeRequest;
                // Deletes a sheet.
                deleteSheet?: Schema.DeleteSheetRequest;
                // Duplicates a filter view.
                duplicateFilterView?: Schema.DuplicateFilterViewRequest;
                // Duplicates a sheet.
                duplicateSheet?: Schema.DuplicateSheetRequest;
                // Finds and replaces occurrences of some text with other text.
                findReplace?: Schema.FindReplaceRequest;
                // Inserts new rows or columns in a sheet.
                insertDimension?: Schema.InsertDimensionRequest;
                // Inserts new cells in a sheet, shifting the existing cells.
                insertRange?: Schema.InsertRangeRequest;
                // Merges cells together.
                mergeCells?: Schema.MergeCellsRequest;
                // Moves rows or columns to another location in a sheet.
                moveDimension?: Schema.MoveDimensionRequest;
                // Pastes data (HTML or delimited) into a sheet.
                pasteData?: Schema.PasteDataRequest;
                // Randomizes the order of the rows in a range.
                randomizeRange?: Schema.RandomizeRangeRequest;
                // Refreshs one or multiple data sources and associated dbobjects.
                refreshDataSource?: Schema.RefreshDataSourceRequest;
                // Repeats a single cell across a range.
                repeatCell?: Schema.RepeatCellRequest;
                // Sets the basic filter on a sheet.
                setBasicFilter?: Schema.SetBasicFilterRequest;
                // Sets data validation for one or more cells.
                setDataValidation?: Schema.SetDataValidationRequest;
                // Sorts data in a range.
                sortRange?: Schema.SortRangeRequest;
                // Converts a column of text into many columns of text.
                textToColumns?: Schema.TextToColumnsRequest;
                // Trims cells of whitespace (such as spaces, tabs, or new lines).
                trimWhitespace?: Schema.TrimWhitespaceRequest;
                // Unmerges merged cells.
                unmergeCells?: Schema.UnmergeCellsRequest;
                // Updates a banded range
                updateBanding?: Schema.UpdateBandingRequest;
                // Updates the borders in a range of cells.
                updateBorders?: Schema.UpdateBordersRequest;
                // Updates many cells at once.
                updateCells?: Schema.UpdateCellsRequest;
                // Updates a chart's specifications.
                updateChartSpec?: Schema.UpdateChartSpecRequest;
                // Updates an existing conditional format rule.
                updateConditionalFormatRule?: Schema.UpdateConditionalFormatRuleRequest;
                // Updates a data source.
                updateDataSource?: Schema.UpdateDataSourceRequest;
                // Updates an existing developer metadata entry
                updateDeveloperMetadata?: Schema.UpdateDeveloperMetadataRequest;
                // Updates the state of the specified group.
                updateDimensionGroup?: Schema.UpdateDimensionGroupRequest;
                // Updates dimensions' properties.
                updateDimensionProperties?: Schema.UpdateDimensionPropertiesRequest;
                // Updates an embedded object's border.
                updateEmbeddedObjectBorder?: Schema.UpdateEmbeddedObjectBorderRequest;
                // Updates an embedded object's (e.g. chart, image) position.
                updateEmbeddedObjectPosition?: Schema.UpdateEmbeddedObjectPositionRequest;
                // Updates the properties of a filter view.
                updateFilterView?: Schema.UpdateFilterViewRequest;
                // Updates a named range.
                updateNamedRange?: Schema.UpdateNamedRangeRequest;
                // Updates a protected range.
                updateProtectedRange?: Schema.UpdateProtectedRangeRequest;
                // Updates a sheet's properties.
                updateSheetProperties?: Schema.UpdateSheetPropertiesRequest;
                // Updates a slicer's specifications.
                updateSlicerSpec?: Schema.UpdateSlicerSpecRequest;
                // Updates the spreadsheet's properties.
                updateSpreadsheetProperties?: Schema.UpdateSpreadsheetPropertiesRequest;
            }
            // A single response from an update.
            interface Response {
                // A reply from adding a banded range.
                addBanding?: Schema.AddBandingResponse;
                // A reply from adding a chart.
                addChart?: Schema.AddChartResponse;
                // A reply from adding a data source.
                addDataSource?: Schema.AddDataSourceResponse;
                // A reply from adding a dimension group.
                addDimensionGroup?: Schema.AddDimensionGroupResponse;
                // A reply from adding a filter view.
                addFilterView?: Schema.AddFilterViewResponse;
                // A reply from adding a named range.
                addNamedRange?: Schema.AddNamedRangeResponse;
                // A reply from adding a protected range.
                addProtectedRange?: Schema.AddProtectedRangeResponse;
                // A reply from adding a sheet.
                addSheet?: Schema.AddSheetResponse;
                // A reply from adding a slicer.
                addSlicer?: Schema.AddSlicerResponse;
                // A reply from creating a developer metadata entry.
                createDeveloperMetadata?: Schema.CreateDeveloperMetadataResponse;
                // A reply from deleting a conditional format rule.
                deleteConditionalFormatRule?: Schema.DeleteConditionalFormatRuleResponse;
                // A reply from deleting a developer metadata entry.
                deleteDeveloperMetadata?: Schema.DeleteDeveloperMetadataResponse;
                // A reply from deleting a dimension group.
                deleteDimensionGroup?: Schema.DeleteDimensionGroupResponse;
                // A reply from removing rows containing duplicate values.
                deleteDuplicates?: Schema.DeleteDuplicatesResponse;
                // A reply from duplicating a filter view.
                duplicateFilterView?: Schema.DuplicateFilterViewResponse;
                // A reply from duplicating a sheet.
                duplicateSheet?: Schema.DuplicateSheetResponse;
                // A reply from doing a find/replace.
                findReplace?: Schema.FindReplaceResponse;
                // A reply from refreshing data source objects.
                refreshDataSource?: Schema.RefreshDataSourceResponse;
                // A reply from trimming whitespace.
                trimWhitespace?: Schema.TrimWhitespaceResponse;
                // A reply from updating a conditional format rule.
                updateConditionalFormatRule?: Schema.UpdateConditionalFormatRuleResponse;
                // A reply from updating a data source.
                updateDataSource?: Schema.UpdateDataSourceResponse;
                // A reply from updating a developer metadata entry.
                updateDeveloperMetadata?: Schema.UpdateDeveloperMetadataResponse;
                // A reply from updating an embedded object's position.
                updateEmbeddedObjectPosition?: Schema.UpdateEmbeddedObjectPositionResponse;
            }
            // Data about each cell in a row.
            interface RowData {
                // The values in the row, one per column.
                values?: Schema.CellData[];
            }
            // A scorecard chart. Scorecard charts are used to highlight key performance indicators, known as KPIs, on the spreadsheet.
            // A scorecard chart can represent things like total sales, average cost, or a top selling item. You can specify a single
            // data value, or aggregate over a range of data. Percentage or absolute difference from a baseline value can be
            // highlighted, like changes over time.
            interface ScorecardChartSpec {
                // The aggregation type for key and baseline chart data in scorecard chart. This field is not supported for data source
                // charts. Use the ChartData.aggregateType field of the key_value_data or baseline_value_data instead for data source
                // charts. This field is optional.
                aggregateType?: string;
                // The data for scorecard baseline value. This field is optional.
                baselineValueData?: Schema.ChartData;
                // Formatting options for baseline value. This field is needed only if baseline_value_data is specified.
                baselineValueFormat?: Schema.BaselineValueFormat;
                // Custom formatting options for numeric key/baseline values in scorecard chart. This field is used only when
                // number_format_source is set to CUSTOM. This field is optional.
                customFormatOptions?: Schema.ChartCustomNumberFormatOptions;
                // The data for scorecard key value.
                keyValueData?: Schema.ChartData;
                // Formatting options for key value.
                keyValueFormat?: Schema.KeyValueFormat;
                // The number format source used in the scorecard chart. This field is optional.
                numberFormatSource?: string;
                // Value to scale scorecard key and baseline value. For example, a factor of 10 can be used to divide all values in the
                // chart by 10. This field is optional.
                scaleFactor?: number;
            }
            // A request to retrieve all developer metadata matching the set of specified criteria.
            interface SearchDeveloperMetadataRequest {
                // The data filters describing the criteria used to determine which DeveloperMetadata entries to return. DeveloperMetadata
                // matching any of the specified filters are included in the response.
                dataFilters?: Schema.DataFilter[];
            }
            // A reply to a developer metadata search request.
            interface SearchDeveloperMetadataResponse {
                // The metadata matching the criteria of the search request.
                matchedDeveloperMetadata?: Schema.MatchedDeveloperMetadata[];
            }
            // Sets the basic filter associated with a sheet.
            interface SetBasicFilterRequest {
                // The filter to set.
                filter?: Schema.BasicFilter;
            }
            // Sets a data validation rule to every cell in the range. To clear validation in a range, call this with no rule
            // specified.
            interface SetDataValidationRequest {
                // The range the data validation rule should apply to.
                range?: Schema.GridRange;
                // The data validation rule to set on each cell in the range, or empty to clear the data validation in the range.
                rule?: Schema.DataValidationRule;
            }
            // A sheet in a spreadsheet.
            interface Sheet {
                // The banded (alternating colors) ranges on this sheet.
                bandedRanges?: Schema.BandedRange[];
                // The filter on this sheet, if any.
                basicFilter?: Schema.BasicFilter;
                // The specifications of every chart on this sheet.
                charts?: Schema.EmbeddedChart[];
                // All column groups on this sheet, ordered by increasing range start index, then by group depth.
                columnGroups?: Schema.DimensionGroup[];
                // The conditional format rules in this sheet.
                conditionalFormats?: Schema.ConditionalFormatRule[];
                // Data in the grid, if this is a grid sheet. The number of GridData objects returned is dependent on the number of ranges
                // requested on this sheet. For example, if this is representing `Sheet1`, and the spreadsheet was requested with ranges
                // `Sheet1!A1:C10` and `Sheet1!D15:E20`, then the first GridData will have a startRow/startColumn of `0`, while the second
                // one will have `startRow 14` (zero-based row 15), and `startColumn 3` (zero-based column D). For a DATA_SOURCE sheet, you
                // can not request a specific range, the GridData contains all the values.
                data?: Schema.GridData[];
                // The developer metadata associated with a sheet.
                developerMetadata?: Schema.DeveloperMetadata[];
                // The filter views in this sheet.
                filterViews?: Schema.FilterView[];
                // The ranges that are merged together.
                merges?: Schema.GridRange[];
                // The properties of the sheet.
                properties?: Schema.SheetProperties;
                // The protected ranges in this sheet.
                protectedRanges?: Schema.ProtectedRange[];
                // All row groups on this sheet, ordered by increasing range start index, then by group depth.
                rowGroups?: Schema.DimensionGroup[];
                // The slicers on this sheet.
                slicers?: Schema.Slicer[];
            }
            // Properties of a sheet.
            interface SheetProperties {
                // Output only. If present, the field contains DATA_SOURCE sheet specific properties.
                dataSourceSheetProperties?: Schema.DataSourceSheetProperties;
                // Additional properties of the sheet if this sheet is a grid. (If the sheet is an object sheet, containing a chart or
                // image, then this field will be absent.) When writing it is an error to set any grid properties on non-grid sheets. If
                // this sheet is a DATA_SOURCE sheet, this field is output only but contains the properties that reflect how a data source
                // sheet is rendered in the UI, e.g. row_count.
                gridProperties?: Schema.GridProperties;
                // True if the sheet is hidden in the UI, false if it's visible.
                hidden?: boolean;
                // The index of the sheet within the spreadsheet. When adding or updating sheet properties, if this field is excluded then
                // the sheet is added or moved to the end of the sheet list. When updating sheet indices or inserting sheets, movement is
                // considered in "before the move" indexes. For example, if there were 3 sheets (S1, S2, S3) in order to move S1 ahead of
                // S2 the index would have to be set to 2. A sheet index update request is ignored if the requested index is identical to
                // the sheets current index or if the requested new index is equal to the current sheet index + 1.
                index?: Integer;
                // True if the sheet is an RTL sheet instead of an LTR sheet.
                rightToLeft?: boolean;
                // The ID of the sheet. Must be non-negative. This field cannot be changed once set.
                sheetId?: Integer;
                // The type of sheet. Defaults to GRID. This field cannot be changed once set.
                sheetType?: string;
                // The color of the tab in the UI.
                tabColor?: Schema.Color;
                // The color of the tab in the UI. If tab_color is also set, this field takes precedence.
                tabColorStyle?: Schema.ColorStyle;
                // The name of the sheet.
                title?: string;
            }
            // A slicer in a sheet.
            interface Slicer {
                // The position of the slicer. Note that slicer can be positioned only on existing sheet. Also, width and height of slicer
                // can be automatically adjusted to keep it within permitted limits.
                position?: Schema.EmbeddedObjectPosition;
                // The ID of the slicer.
                slicerId?: Integer;
                // The specification of the slicer.
                spec?: Schema.SlicerSpec;
            }
            // The specifications of a slicer.
            interface SlicerSpec {
                // True if the filter should apply to pivot tables. If not set, default to `True`.
                applyToPivotTables?: boolean;
                // The background color of the slicer.
                backgroundColor?: Schema.Color;
                // The background color of the slicer. If background_color is also set, this field takes precedence.
                backgroundColorStyle?: Schema.ColorStyle;
                // The column index in the data table on which the filter is applied to.
                columnIndex?: Integer;
                // The data range of the slicer.
                dataRange?: Schema.GridRange;
                // The filtering criteria of the slicer.
                filterCriteria?: Schema.FilterCriteria;
                // The horizontal alignment of title in the slicer. If unspecified, defaults to `LEFT`
                horizontalAlignment?: string;
                // The text format of title in the slicer.
                textFormat?: Schema.TextFormat;
                // The title of the slicer.
                title?: string;
            }
            // Sorts data in rows based on a sort order per column.
            interface SortRangeRequest {
                // The range to sort.
                range?: Schema.GridRange;
                // The sort order per column. Later specifications are used when values are equal in the earlier specifications.
                sortSpecs?: Schema.SortSpec[];
            }
            // A sort order associated with a specific column or row.
            interface SortSpec {
                // The background fill color to sort by; cells with this fill color are sorted to the top. Mutually exclusive with
                // foreground_color.
                backgroundColor?: Schema.Color;
                // The background fill color to sort by; cells with this fill color are sorted to the top. Mutually exclusive with
                // foreground_color, and must be an RGB-type color. If background_color is also set, this field takes precedence.
                backgroundColorStyle?: Schema.ColorStyle;
                // Reference to a data source column.
                dataSourceColumnReference?: Schema.DataSourceColumnReference;
                // The dimension the sort should be applied to.
                dimensionIndex?: Integer;
                // The foreground color to sort by; cells with this foreground color are sorted to the top. Mutually exclusive with
                // background_color.
                foregroundColor?: Schema.Color;
                // The foreground color to sort by; cells with this foreground color are sorted to the top. Mutually exclusive with
                // background_color, and must be an RGB-type color. If foreground_color is also set, this field takes precedence.
                foregroundColorStyle?: Schema.ColorStyle;
                // The order data should be sorted.
                sortOrder?: string;
            }
            // A combination of a source range and how to extend that source.
            interface SourceAndDestination {
                // The dimension that data should be filled into.
                dimension?: string;
                // The number of rows or columns that data should be filled into. Positive numbers expand beyond the last row or last
                // column of the source. Negative numbers expand before the first row or first column of the source.
                fillLength?: Integer;
                // The location of the data to use as the source of the autofill.
                source?: Schema.GridRange;
            }
            // Resource that represents a spreadsheet.
            interface Spreadsheet {
                // Output only. A list of data source refresh schedules.
                dataSourceSchedules?: Schema.DataSourceRefreshSchedule[];
                // A list of external data sources connected with the spreadsheet.
                dataSources?: Schema.DataSource[];
                // The developer metadata associated with a spreadsheet.
                developerMetadata?: Schema.DeveloperMetadata[];
                // The named ranges defined in a spreadsheet.
                namedRanges?: Schema.NamedRange[];
                // Overall properties of a spreadsheet.
                properties?: Schema.SpreadsheetProperties;
                // The sheets that are part of a spreadsheet.
                sheets?: Schema.Sheet[];
                // The ID of the spreadsheet. This field is read-only.
                spreadsheetId?: string;
                // The url of the spreadsheet. This field is read-only.
                spreadsheetUrl?: string;
            }
            // Properties of a spreadsheet.
            interface SpreadsheetProperties {
                // The amount of time to wait before volatile functions are recalculated.
                autoRecalc?: string;
                // The default format of all cells in the spreadsheet. CellData.effectiveFormat will not be set if the cell's format is
                // equal to this default format. This field is read-only.
                defaultFormat?: Schema.CellFormat;
                // Determines whether and how circular references are resolved with iterative calculation. Absence of this field means that
                // circular references result in calculation errors.
                iterativeCalculationSettings?: Schema.IterativeCalculationSettings;
                // The locale of the spreadsheet in one of the following formats: * an ISO 639-1 language code such as `en` * an ISO 639-2
                // language code such as `fil`, if no 639-1 code exists * a combination of the ISO language code and country code, such as
                // `en_US` Note: when updating this field, not all locales/languages are supported.
                locale?: string;
                // Theme applied to the spreadsheet.
                spreadsheetTheme?: Schema.SpreadsheetTheme;
                // The time zone of the spreadsheet, in CLDR format such as `America/New_York`. If the time zone isn't recognized, this may
                // be a custom time zone such as `GMT-07:00`.
                timeZone?: string;
                // The title of the spreadsheet.
                title?: string;
            }
            // Represents spreadsheet theme
            interface SpreadsheetTheme {
                // Name of the primary font family.
                primaryFontFamily?: string;
                // The spreadsheet theme color pairs. To update you must provide all theme color pairs.
                themeColors?: Schema.ThemeColorPair[];
            }
            // The format of a run of text in a cell. Absent values indicate that the field isn't specified.
            interface TextFormat {
                // True if the text is bold.
                bold?: boolean;
                // The font family.
                fontFamily?: string;
                // The size of the font.
                fontSize?: Integer;
                // The foreground color of the text.
                foregroundColor?: Schema.Color;
                // The foreground color of the text. If foreground_color is also set, this field takes precedence.
                foregroundColorStyle?: Schema.ColorStyle;
                // True if the text is italicized.
                italic?: boolean;
                // True if the text has a strikethrough.
                strikethrough?: boolean;
                // True if the text is underlined.
                underline?: boolean;
            }
            // A run of a text format. The format of this run continues until the start index of the next run. When updating, all
            // fields must be set.
            interface TextFormatRun {
                // The format of this run. Absent values inherit the cell's format.
                format?: Schema.TextFormat;
                // The character index where this run starts.
                startIndex?: Integer;
            }
            // Position settings for text.
            interface TextPosition {
                // Horizontal alignment setting for the piece of text.
                horizontalAlignment?: string;
            }
            // The rotation applied to text in a cell.
            interface TextRotation {
                // The angle between the standard orientation and the desired orientation. Measured in degrees. Valid values are between
                // -90 and 90. Positive angles are angled upwards, negative are angled downwards. Note: For LTR text direction positive
                // angles are in the counterclockwise direction, whereas for RTL they are in the clockwise direction
                angle?: Integer;
                // If true, text reads top to bottom, but the orientation of individual characters is unchanged. For example: | V | | e | |
                // r | | t | | i | | c | | a | | l |
                vertical?: boolean;
            }
            // Splits a column of text into multiple columns, based on a delimiter in each cell.
            interface TextToColumnsRequest {
                // The delimiter to use. Used only if delimiterType is CUSTOM.
                delimiter?: string;
                // The delimiter type to use.
                delimiterType?: string;
                // The source data range. This must span exactly one column.
                source?: Schema.GridRange;
            }
            // A pair mapping a spreadsheet theme color type to the concrete color it represents.
            interface ThemeColorPair {
                // The concrete color corresponding to the theme color type.
                color?: Schema.ColorStyle;
                // The type of the spreadsheet theme color.
                colorType?: string;
            }
            // Represents a time of day. The date and time zone are either not significant or are specified elsewhere. An API may
            // choose to allow leap seconds. Related types are google.type.Date and `google.protobuf.Timestamp`.
            interface TimeOfDay {
                // Hours of day in 24 hour format. Should be from 0 to 23. An API may choose to allow the value "24:00:00" for scenarios
                // like business closing time.
                hours?: Integer;
                // Minutes of hour of day. Must be from 0 to 59.
                minutes?: Integer;
                // Fractions of seconds in nanoseconds. Must be from 0 to 999,999,999.
                nanos?: Integer;
                // Seconds of minutes of the time. Must normally be from 0 to 59. An API may allow the value 60 if it allows leap-seconds.
                seconds?: Integer;
            }
            // A color scale for a treemap chart.
            interface TreemapChartColorScale {
                // The background color for cells with a color value greater than or equal to maxValue. Defaults to #109618 if not
                // specified.
                maxValueColor?: Schema.Color;
                // The background color for cells with a color value greater than or equal to maxValue. Defaults to #109618 if not
                // specified. If max_value_color is also set, this field takes precedence.
                maxValueColorStyle?: Schema.ColorStyle;
                // The background color for cells with a color value at the midpoint between minValue and maxValue. Defaults to #efe6dc if
                // not specified.
                midValueColor?: Schema.Color;
                // The background color for cells with a color value at the midpoint between minValue and maxValue. Defaults to #efe6dc if
                // not specified. If mid_value_color is also set, this field takes precedence.
                midValueColorStyle?: Schema.ColorStyle;
                // The background color for cells with a color value less than or equal to minValue. Defaults to #dc3912 if not specified.
                minValueColor?: Schema.Color;
                // The background color for cells with a color value less than or equal to minValue. Defaults to #dc3912 if not specified.
                // If min_value_color is also set, this field takes precedence.
                minValueColorStyle?: Schema.ColorStyle;
                // The background color for cells that have no color data associated with them. Defaults to #000000 if not specified.
                noDataColor?: Schema.Color;
                // The background color for cells that have no color data associated with them. Defaults to #000000 if not specified. If
                // no_data_color is also set, this field takes precedence.
                noDataColorStyle?: Schema.ColorStyle;
            }
            // A Treemap chart.
            interface TreemapChartSpec {
                // The data that determines the background color of each treemap data cell. This field is optional. If not specified,
                // size_data is used to determine background colors. If specified, the data is expected to be numeric. color_scale will
                // determine how the values in this data map to data cell background colors.
                colorData?: Schema.ChartData;
                // The color scale for data cells in the treemap chart. Data cells are assigned colors based on their color values. These
                // color values come from color_data, or from size_data if color_data is not specified. Cells with color values less than
                // or equal to min_value will have minValueColor as their background color. Cells with color values greater than or equal
                // to max_value will have maxValueColor as their background color. Cells with color values between min_value and max_value
                // will have background colors on a gradient between minValueColor and maxValueColor, the midpoint of the gradient being
                // midValueColor. Cells with missing or non-numeric color values will have noDataColor as their background color.
                colorScale?: Schema.TreemapChartColorScale;
                // The background color for header cells.
                headerColor?: Schema.Color;
                // The background color for header cells. If header_color is also set, this field takes precedence.
                headerColorStyle?: Schema.ColorStyle;
                // True to hide tooltips.
                hideTooltips?: boolean;
                // The number of additional data levels beyond the labeled levels to be shown on the treemap chart. These levels are not
                // interactive and are shown without their labels. Defaults to 0 if not specified.
                hintedLevels?: Integer;
                // The data that contains the treemap cell labels.
                labels?: Schema.ChartData;
                // The number of data levels to show on the treemap chart. These levels are interactive and are shown with their labels.
                // Defaults to 2 if not specified.
                levels?: Integer;
                // The maximum possible data value. Cells with values greater than this will have the same color as cells with this value.
                // If not specified, defaults to the actual maximum value from color_data, or the maximum value from size_data if
                // color_data is not specified.
                maxValue?: number;
                // The minimum possible data value. Cells with values less than this will have the same color as cells with this value. If
                // not specified, defaults to the actual minimum value from color_data, or the minimum value from size_data if color_data
                // is not specified.
                minValue?: number;
                // The data the contains the treemap cells' parent labels.
                parentLabels?: Schema.ChartData;
                // The data that determines the size of each treemap data cell. This data is expected to be numeric. The cells
                // corresponding to non-numeric or missing data will not be rendered. If color_data is not specified, this data is used to
                // determine data cell background colors as well.
                sizeData?: Schema.ChartData;
                // The text format for all labels on the chart.
                textFormat?: Schema.TextFormat;
            }
            // Trims the whitespace (such as spaces, tabs, or new lines) in every cell in the specified range. This request removes all
            // whitespace from the start and end of each cell's text, and reduces any subsequence of remaining whitespace characters to
            // a single space. If the resulting trimmed text starts with a '+' or '=' character, the text remains as a string value and
            // isn't interpreted as a formula.
            interface TrimWhitespaceRequest {
                // The range whose cells to trim.
                range?: Schema.GridRange;
            }
            // The result of trimming whitespace in cells.
            interface TrimWhitespaceResponse {
                // The number of cells that were trimmed of whitespace.
                cellsChangedCount?: Integer;
            }
            // Unmerges cells in the given range.
            interface UnmergeCellsRequest {
                // The range within which all cells should be unmerged. If the range spans multiple merges, all will be unmerged. The range
                // must not partially span any merge.
                range?: Schema.GridRange;
            }
            // Updates properties of the supplied banded range.
            interface UpdateBandingRequest {
                // The banded range to update with the new properties.
                bandedRange?: Schema.BandedRange;
                // The fields that should be updated. At least one field must be specified. The root `bandedRange` is implied and should
                // not be specified. A single `"*"` can be used as short-hand for listing every field.
                fields?: string;
            }
            // Updates the borders of a range. If a field is not set in the request, that means the border remains as-is. For example,
            // with two subsequent UpdateBordersRequest: 1. range: A1:A5 `{ top: RED, bottom: WHITE }` 2. range: A1:A5 `{ left: BLUE }`
            // That would result in A1:A5 having a borders of `{ top: RED, bottom: WHITE, left: BLUE }`. If you want to clear a border,
            // explicitly set the style to NONE.
            interface UpdateBordersRequest {
                // The border to put at the bottom of the range.
                bottom?: Schema.Border;
                // The horizontal border to put within the range.
                innerHorizontal?: Schema.Border;
                // The vertical border to put within the range.
                innerVertical?: Schema.Border;
                // The border to put at the left of the range.
                left?: Schema.Border;
                // The range whose borders should be updated.
                range?: Schema.GridRange;
                // The border to put at the right of the range.
                right?: Schema.Border;
                // The border to put at the top of the range.
                top?: Schema.Border;
            }
            // Updates all cells in a range with new data.
            interface UpdateCellsRequest {
                // The fields of CellData that should be updated. At least one field must be specified. The root is the CellData;
                // 'row.values.' should not be specified. A single `"*"` can be used as short-hand for listing every field.
                fields?: string;
                // The range to write data to. If the data in rows does not cover the entire requested range, the fields matching those set
                // in fields will be cleared.
                range?: Schema.GridRange;
                // The data to write.
                rows?: Schema.RowData[];
                // The coordinate to start writing data at. Any number of rows and columns (including a different number of columns per
                // row) may be written.
                start?: Schema.GridCoordinate;
            }
            // Updates a chart's specifications. (This does not move or resize a chart. To move or resize a chart, use
            // UpdateEmbeddedObjectPositionRequest.)
            interface UpdateChartSpecRequest {
                // The ID of the chart to update.
                chartId?: Integer;
                // The specification to apply to the chart.
                spec?: Schema.ChartSpec;
            }
            // Updates a conditional format rule at the given index, or moves a conditional format rule to another index.
            interface UpdateConditionalFormatRuleRequest {
                // The zero-based index of the rule that should be replaced or moved.
                index?: Integer;
                // The zero-based new index the rule should end up at.
                newIndex?: Integer;
                // The rule that should replace the rule at the given index.
                rule?: Schema.ConditionalFormatRule;
                // The sheet of the rule to move. Required if new_index is set, unused otherwise.
                sheetId?: Integer;
            }
            // The result of updating a conditional format rule.
            interface UpdateConditionalFormatRuleResponse {
                // The index of the new rule.
                newIndex?: Integer;
                // The new rule that replaced the old rule (if replacing), or the rule that was moved (if moved)
                newRule?: Schema.ConditionalFormatRule;
                // The old index of the rule. Not set if a rule was replaced (because it is the same as new_index).
                oldIndex?: Integer;
                // The old (deleted) rule. Not set if a rule was moved (because it is the same as new_rule).
                oldRule?: Schema.ConditionalFormatRule;
            }
            // Updates a data source. After the data source is updated successfully, an execution is triggered to refresh the
            // associated DATA_SOURCE sheet to read data from the updated data source. The request requires an additional
            // `bigquery.readonly` OAuth scope.
            interface UpdateDataSourceRequest {
                // The data source to update.
                dataSource?: Schema.DataSource;
                // The fields that should be updated. At least one field must be specified. The root `dataSource` is implied and should not
                // be specified. A single `"*"` can be used as short-hand for listing every field.
                fields?: string;
            }
            // The response from updating data source.
            interface UpdateDataSourceResponse {
                // The data execution status.
                dataExecutionStatus?: Schema.DataExecutionStatus;
                // The updated data source.
                dataSource?: Schema.DataSource;
            }
            // A request to update properties of developer metadata. Updates the properties of the developer metadata selected by the
            // filters to the values provided in the DeveloperMetadata resource. Callers must specify the properties they wish to
            // update in the fields parameter, as well as specify at least one DataFilter matching the metadata they wish to update.
            interface UpdateDeveloperMetadataRequest {
                // The filters matching the developer metadata entries to update.
                dataFilters?: Schema.DataFilter[];
                // The value that all metadata matched by the data filters will be updated to.
                developerMetadata?: Schema.DeveloperMetadata;
                // The fields that should be updated. At least one field must be specified. The root `developerMetadata` is implied and
                // should not be specified. A single `"*"` can be used as short-hand for listing every field.
                fields?: string;
            }
            // The response from updating developer metadata.
            interface UpdateDeveloperMetadataResponse {
                // The updated developer metadata.
                developerMetadata?: Schema.DeveloperMetadata[];
            }
            // Updates the state of the specified group.
            interface UpdateDimensionGroupRequest {
                // The group whose state should be updated. The range and depth of the group should specify a valid group on the sheet, and
                // all other fields updated.
                dimensionGroup?: Schema.DimensionGroup;
                // The fields that should be updated. At least one field must be specified. The root `dimensionGroup` is implied and should
                // not be specified. A single `"*"` can be used as short-hand for listing every field.
                fields?: string;
            }
            // Updates properties of dimensions within the specified range.
            interface UpdateDimensionPropertiesRequest {
                // The columns on a data source sheet to update.
                dataSourceSheetRange?: Schema.DataSourceSheetDimensionRange;
                // The fields that should be updated. At least one field must be specified. The root `properties` is implied and should not
                // be specified. A single `"*"` can be used as short-hand for listing every field.
                fields?: string;
                // Properties to update.
                properties?: Schema.DimensionProperties;
                // The rows or columns to update.
                range?: Schema.DimensionRange;
            }
            // Updates an embedded object's border property.
            interface UpdateEmbeddedObjectBorderRequest {
                // The border that applies to the embedded object.
                border?: Schema.EmbeddedObjectBorder;
                // The fields that should be updated. At least one field must be specified. The root `border` is implied and should not be
                // specified. A single `"*"` can be used as short-hand for listing every field.
                fields?: string;
                // The ID of the embedded object to update.
                objectId?: Integer;
            }
            // Update an embedded object's position (such as a moving or resizing a chart or image).
            interface UpdateEmbeddedObjectPositionRequest {
                // The fields of OverlayPosition that should be updated when setting a new position. Used only if
                // newPosition.overlayPosition is set, in which case at least one field must be specified. The root
                // `newPosition.overlayPosition` is implied and should not be specified. A single `"*"` can be used as short-hand for
                // listing every field.
                fields?: string;
                // An explicit position to move the embedded object to. If newPosition.sheetId is set, a new sheet with that ID will be
                // created. If newPosition.newSheet is set to true, a new sheet will be created with an ID that will be chosen for you.
                newPosition?: Schema.EmbeddedObjectPosition;
                // The ID of the object to moved.
                objectId?: Integer;
            }
            // The result of updating an embedded object's position.
            interface UpdateEmbeddedObjectPositionResponse {
                // The new position of the embedded object.
                position?: Schema.EmbeddedObjectPosition;
            }
            // Updates properties of the filter view.
            interface UpdateFilterViewRequest {
                // The fields that should be updated. At least one field must be specified. The root `filter` is implied and should not be
                // specified. A single `"*"` can be used as short-hand for listing every field.
                fields?: string;
                // The new properties of the filter view.
                filter?: Schema.FilterView;
            }
            // Updates properties of the named range with the specified namedRangeId.
            interface UpdateNamedRangeRequest {
                // The fields that should be updated. At least one field must be specified. The root `namedRange` is implied and should not
                // be specified. A single `"*"` can be used as short-hand for listing every field.
                fields?: string;
                // The named range to update with the new properties.
                namedRange?: Schema.NamedRange;
            }
            // Updates an existing protected range with the specified protectedRangeId.
            interface UpdateProtectedRangeRequest {
                // The fields that should be updated. At least one field must be specified. The root `protectedRange` is implied and should
                // not be specified. A single `"*"` can be used as short-hand for listing every field.
                fields?: string;
                // The protected range to update with the new properties.
                protectedRange?: Schema.ProtectedRange;
            }
            // Updates properties of the sheet with the specified sheetId.
            interface UpdateSheetPropertiesRequest {
                // The fields that should be updated. At least one field must be specified. The root `properties` is implied and should not
                // be specified. A single `"*"` can be used as short-hand for listing every field.
                fields?: string;
                // The properties to update.
                properties?: Schema.SheetProperties;
            }
            // Updates a slicer's specifications. (This does not move or resize a slicer. To move or resize a slicer use
            // UpdateEmbeddedObjectPositionRequest.
            interface UpdateSlicerSpecRequest {
                // The fields that should be updated. At least one field must be specified. The root `SlicerSpec` is implied and should not
                // be specified. A single "*"` can be used as short-hand for listing every field.
                fields?: string;
                // The id of the slicer to update.
                slicerId?: Integer;
                // The specification to apply to the slicer.
                spec?: Schema.SlicerSpec;
            }
            // Updates properties of a spreadsheet.
            interface UpdateSpreadsheetPropertiesRequest {
                // The fields that should be updated. At least one field must be specified. The root 'properties' is implied and should not
                // be specified. A single `"*"` can be used as short-hand for listing every field.
                fields?: string;
                // The properties to update.
                properties?: Schema.SpreadsheetProperties;
            }
            // The response when updating a range of values by a data filter in a spreadsheet.
            interface UpdateValuesByDataFilterResponse {
                // The data filter that selected the range that was updated.
                dataFilter?: Schema.DataFilter;
                // The number of cells updated.
                updatedCells?: Integer;
                // The number of columns where at least one cell in the column was updated.
                updatedColumns?: Integer;
                // The values of the cells in the range matched by the dataFilter after all updates were applied. This is only included if
                // the request's `includeValuesInResponse` field was `true`.
                updatedData?: Schema.ValueRange;
                // The range (in A1 notation) that updates were applied to.
                updatedRange?: string;
                // The number of rows where at least one cell in the row was updated.
                updatedRows?: Integer;
            }
            // The response when updating a range of values in a spreadsheet.
            interface UpdateValuesResponse {
                // The spreadsheet the updates were applied to.
                spreadsheetId?: string;
                // The number of cells updated.
                updatedCells?: Integer;
                // The number of columns where at least one cell in the column was updated.
                updatedColumns?: Integer;
                // The values of the cells after updates were applied. This is only included if the request's `includeValuesInResponse`
                // field was `true`.
                updatedData?: Schema.ValueRange;
                // The range (in A1 notation) that updates were applied to.
                updatedRange?: string;
                // The number of rows where at least one cell in the row was updated.
                updatedRows?: Integer;
            }
            // Data within a range of the spreadsheet.
            interface ValueRange {
                // The major dimension of the values. For output, if the spreadsheet data is: `A1=1,B1=2,A2=3,B2=4`, then requesting
                // `range=A1:B2,majorDimension=ROWS` will return `[[1,2],[3,4]]`, whereas requesting `range=A1:B2,majorDimension=COLUMNS`
                // will return `[[1,3],[2,4]]`. For input, with `range=A1:B2,majorDimension=ROWS` then `[[1,2],[3,4]]` will set
                // `A1=1,B1=2,A2=3,B2=4`. With `range=A1:B2,majorDimension=COLUMNS` then `[[1,2],[3,4]]` will set `A1=1,B1=3,A2=2,B2=4`.
                // When writing, if this field is not set, it defaults to ROWS.
                majorDimension?: string;
                // The range the values cover, in A1 notation. For output, this range indicates the entire requested range, even though the
                // values will exclude trailing rows and columns. When appending values, this field represents the range to search for a
                // table, after which values will be appended.
                range?: string;
                // The data that was read or to be written. This is an array of arrays, the outer array representing all the data and each
                // inner array representing a major dimension. Each item in the inner array corresponds with one cell. For output, empty
                // trailing rows and columns will not be included. For input, supported value types are: bool, string, and double. Null
                // values will be skipped. To set a cell to an empty value, set the string value to an empty string.
                values?: object[][];
            }
            // Styles for a waterfall chart column.
            interface WaterfallChartColumnStyle {
                // The color of the column.
                color?: Schema.Color;
                // The color of the column. If color is also set, this field takes precedence.
                colorStyle?: Schema.ColorStyle;
                // The label of the column's legend.
                label?: string;
            }
            // A custom subtotal column for a waterfall chart series.
            interface WaterfallChartCustomSubtotal {
                // True if the data point at subtotal_index is the subtotal. If false, the subtotal will be computed and appear after the
                // data point.
                dataIsSubtotal?: boolean;
                // A label for the subtotal column.
                label?: string;
                // The 0-based index of a data point within the series. If data_is_subtotal is true, the data point at this index is the
                // subtotal. Otherwise, the subtotal appears after the data point with this index. A series can have multiple subtotals at
                // arbitrary indices, but subtotals do not affect the indices of the data points. For example, if a series has three data
                // points, their indices will always be 0, 1, and 2, regardless of how many subtotals exist on the series or what data
                // points they are associated with.
                subtotalIndex?: Integer;
            }
            // The domain of a waterfall chart.
            interface WaterfallChartDomain {
                // The data of the WaterfallChartDomain.
                data?: Schema.ChartData;
                // True to reverse the order of the domain values (horizontal axis).
                reversed?: boolean;
            }
            // A single series of data for a waterfall chart.
            interface WaterfallChartSeries {
                // Custom subtotal columns appearing in this series. The order in which subtotals are defined is not significant. Only one
                // subtotal may be defined for each data point.
                customSubtotals?: Schema.WaterfallChartCustomSubtotal[];
                // The data being visualized in this series.
                data?: Schema.ChartData;
                // Information about the data labels for this series.
                dataLabel?: Schema.DataLabel;
                // True to hide the subtotal column from the end of the series. By default, a subtotal column will appear at the end of
                // each series. Setting this field to true will hide that subtotal column for this series.
                hideTrailingSubtotal?: boolean;
                // Styles for all columns in this series with negative values.
                negativeColumnsStyle?: Schema.WaterfallChartColumnStyle;
                // Styles for all columns in this series with positive values.
                positiveColumnsStyle?: Schema.WaterfallChartColumnStyle;
                // Styles for all subtotal columns in this series.
                subtotalColumnsStyle?: Schema.WaterfallChartColumnStyle;
            }
            // A waterfall chart.
            interface WaterfallChartSpec {
                // The line style for the connector lines.
                connectorLineStyle?: Schema.LineStyle;
                // The domain data (horizontal axis) for the waterfall chart.
                domain?: Schema.WaterfallChartDomain;
                // True to interpret the first value as a total.
                firstValueIsTotal?: boolean;
                // True to hide connector lines between columns.
                hideConnectorLines?: boolean;
                // The data this waterfall chart is visualizing.
                series?: Schema.WaterfallChartSeries[];
                // The stacked type.
                stackedType?: string;
                // Controls whether to display additional data labels on stacked charts which sum the total value of all stacked values at
                // each value along the domain axis. stacked_type must be STACKED and neither CUSTOM nor placement can be set on the
                // total_data_label.
                totalDataLabel?: Schema.DataLabel;
            }
        }
    }
    // Reads and writes Google Sheets.
    interface Sheets {
        Spreadsheets?: Sheets.Collection.SpreadsheetsCollection;
        // Create a new instance of AddBandingRequest
        newAddBandingRequest(): Sheets.Schema.AddBandingRequest;
        // Create a new instance of AddChartRequest
        newAddChartRequest(): Sheets.Schema.AddChartRequest;
        // Create a new instance of AddConditionalFormatRuleRequest
        newAddConditionalFormatRuleRequest(): Sheets.Schema.AddConditionalFormatRuleRequest;
        // Create a new instance of AddDataSourceRequest
        newAddDataSourceRequest(): Sheets.Schema.AddDataSourceRequest;
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
        // Create a new instance of AddSlicerRequest
        newAddSlicerRequest(): Sheets.Schema.AddSlicerRequest;
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
        // Create a new instance of BaselineValueFormat
        newBaselineValueFormat(): Sheets.Schema.BaselineValueFormat;
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
        // Create a new instance of BasicSeriesDataPointStyleOverride
        newBasicSeriesDataPointStyleOverride(): Sheets.Schema.BasicSeriesDataPointStyleOverride;
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
        // Create a new instance of BigQueryDataSourceSpec
        newBigQueryDataSourceSpec(): Sheets.Schema.BigQueryDataSourceSpec;
        // Create a new instance of BigQueryQuerySpec
        newBigQueryQuerySpec(): Sheets.Schema.BigQueryQuerySpec;
        // Create a new instance of BigQueryTableSpec
        newBigQueryTableSpec(): Sheets.Schema.BigQueryTableSpec;
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
        // Create a new instance of ChartAxisViewWindowOptions
        newChartAxisViewWindowOptions(): Sheets.Schema.ChartAxisViewWindowOptions;
        // Create a new instance of ChartCustomNumberFormatOptions
        newChartCustomNumberFormatOptions(): Sheets.Schema.ChartCustomNumberFormatOptions;
        // Create a new instance of ChartData
        newChartData(): Sheets.Schema.ChartData;
        // Create a new instance of ChartDateTimeRule
        newChartDateTimeRule(): Sheets.Schema.ChartDateTimeRule;
        // Create a new instance of ChartGroupRule
        newChartGroupRule(): Sheets.Schema.ChartGroupRule;
        // Create a new instance of ChartHistogramRule
        newChartHistogramRule(): Sheets.Schema.ChartHistogramRule;
        // Create a new instance of ChartSourceRange
        newChartSourceRange(): Sheets.Schema.ChartSourceRange;
        // Create a new instance of ChartSpec
        newChartSpec(): Sheets.Schema.ChartSpec;
        // Create a new instance of ClearBasicFilterRequest
        newClearBasicFilterRequest(): Sheets.Schema.ClearBasicFilterRequest;
        // Create a new instance of ClearValuesRequest
        newClearValuesRequest(): any;
        // Create a new instance of Color
        newColor(): Sheets.Schema.Color;
        // Create a new instance of ColorStyle
        newColorStyle(): Sheets.Schema.ColorStyle;
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
        // Create a new instance of DataExecutionStatus
        newDataExecutionStatus(): Sheets.Schema.DataExecutionStatus;
        // Create a new instance of DataFilter
        newDataFilter(): Sheets.Schema.DataFilter;
        // Create a new instance of DataFilterValueRange
        newDataFilterValueRange(): Sheets.Schema.DataFilterValueRange;
        // Create a new instance of DataLabel
        newDataLabel(): Sheets.Schema.DataLabel;
        // Create a new instance of DataSource
        newDataSource(): Sheets.Schema.DataSource;
        // Create a new instance of DataSourceChartProperties
        newDataSourceChartProperties(): Sheets.Schema.DataSourceChartProperties;
        // Create a new instance of DataSourceColumn
        newDataSourceColumn(): Sheets.Schema.DataSourceColumn;
        // Create a new instance of DataSourceColumnReference
        newDataSourceColumnReference(): Sheets.Schema.DataSourceColumnReference;
        // Create a new instance of DataSourceFormula
        newDataSourceFormula(): Sheets.Schema.DataSourceFormula;
        // Create a new instance of DataSourceObjectReference
        newDataSourceObjectReference(): Sheets.Schema.DataSourceObjectReference;
        // Create a new instance of DataSourceObjectReferences
        newDataSourceObjectReferences(): Sheets.Schema.DataSourceObjectReferences;
        // Create a new instance of DataSourceParameter
        newDataSourceParameter(): Sheets.Schema.DataSourceParameter;
        // Create a new instance of DataSourceRefreshDailySchedule
        newDataSourceRefreshDailySchedule(): Sheets.Schema.DataSourceRefreshDailySchedule;
        // Create a new instance of DataSourceRefreshMonthlySchedule
        newDataSourceRefreshMonthlySchedule(): Sheets.Schema.DataSourceRefreshMonthlySchedule;
        // Create a new instance of DataSourceRefreshSchedule
        newDataSourceRefreshSchedule(): Sheets.Schema.DataSourceRefreshSchedule;
        // Create a new instance of DataSourceRefreshWeeklySchedule
        newDataSourceRefreshWeeklySchedule(): Sheets.Schema.DataSourceRefreshWeeklySchedule;
        // Create a new instance of DataSourceSheetDimensionRange
        newDataSourceSheetDimensionRange(): Sheets.Schema.DataSourceSheetDimensionRange;
        // Create a new instance of DataSourceSheetProperties
        newDataSourceSheetProperties(): Sheets.Schema.DataSourceSheetProperties;
        // Create a new instance of DataSourceSpec
        newDataSourceSpec(): Sheets.Schema.DataSourceSpec;
        // Create a new instance of DataSourceTable
        newDataSourceTable(): Sheets.Schema.DataSourceTable;
        // Create a new instance of DataValidationRule
        newDataValidationRule(): Sheets.Schema.DataValidationRule;
        // Create a new instance of DateTimeRule
        newDateTimeRule(): Sheets.Schema.DateTimeRule;
        // Create a new instance of DeleteBandingRequest
        newDeleteBandingRequest(): Sheets.Schema.DeleteBandingRequest;
        // Create a new instance of DeleteConditionalFormatRuleRequest
        newDeleteConditionalFormatRuleRequest(): Sheets.Schema.DeleteConditionalFormatRuleRequest;
        // Create a new instance of DeleteDataSourceRequest
        newDeleteDataSourceRequest(): Sheets.Schema.DeleteDataSourceRequest;
        // Create a new instance of DeleteDeveloperMetadataRequest
        newDeleteDeveloperMetadataRequest(): Sheets.Schema.DeleteDeveloperMetadataRequest;
        // Create a new instance of DeleteDimensionGroupRequest
        newDeleteDimensionGroupRequest(): Sheets.Schema.DeleteDimensionGroupRequest;
        // Create a new instance of DeleteDimensionRequest
        newDeleteDimensionRequest(): Sheets.Schema.DeleteDimensionRequest;
        // Create a new instance of DeleteDuplicatesRequest
        newDeleteDuplicatesRequest(): Sheets.Schema.DeleteDuplicatesRequest;
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
        // Create a new instance of EmbeddedObjectBorder
        newEmbeddedObjectBorder(): Sheets.Schema.EmbeddedObjectBorder;
        // Create a new instance of EmbeddedObjectPosition
        newEmbeddedObjectPosition(): Sheets.Schema.EmbeddedObjectPosition;
        // Create a new instance of ErrorValue
        newErrorValue(): Sheets.Schema.ErrorValue;
        // Create a new instance of ExtendedValue
        newExtendedValue(): Sheets.Schema.ExtendedValue;
        // Create a new instance of FilterCriteria
        newFilterCriteria(): Sheets.Schema.FilterCriteria;
        // Create a new instance of FilterSpec
        newFilterSpec(): Sheets.Schema.FilterSpec;
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
        // Create a new instance of Interval
        newInterval(): Sheets.Schema.Interval;
        // Create a new instance of IterativeCalculationSettings
        newIterativeCalculationSettings(): Sheets.Schema.IterativeCalculationSettings;
        // Create a new instance of KeyValueFormat
        newKeyValueFormat(): Sheets.Schema.KeyValueFormat;
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
        // Create a new instance of PivotFilterCriteria
        newPivotFilterCriteria(): Sheets.Schema.PivotFilterCriteria;
        // Create a new instance of PivotFilterSpec
        newPivotFilterSpec(): Sheets.Schema.PivotFilterSpec;
        // Create a new instance of PivotGroup
        newPivotGroup(): Sheets.Schema.PivotGroup;
        // Create a new instance of PivotGroupLimit
        newPivotGroupLimit(): Sheets.Schema.PivotGroupLimit;
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
        // Create a new instance of PointStyle
        newPointStyle(): Sheets.Schema.PointStyle;
        // Create a new instance of ProtectedRange
        newProtectedRange(): Sheets.Schema.ProtectedRange;
        // Create a new instance of RandomizeRangeRequest
        newRandomizeRangeRequest(): Sheets.Schema.RandomizeRangeRequest;
        // Create a new instance of RefreshDataSourceRequest
        newRefreshDataSourceRequest(): Sheets.Schema.RefreshDataSourceRequest;
        // Create a new instance of RepeatCellRequest
        newRepeatCellRequest(): Sheets.Schema.RepeatCellRequest;
        // Create a new instance of Request
        newRequest(): Sheets.Schema.Request;
        // Create a new instance of RowData
        newRowData(): Sheets.Schema.RowData;
        // Create a new instance of ScorecardChartSpec
        newScorecardChartSpec(): Sheets.Schema.ScorecardChartSpec;
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
        // Create a new instance of Slicer
        newSlicer(): Sheets.Schema.Slicer;
        // Create a new instance of SlicerSpec
        newSlicerSpec(): Sheets.Schema.SlicerSpec;
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
        // Create a new instance of SpreadsheetTheme
        newSpreadsheetTheme(): Sheets.Schema.SpreadsheetTheme;
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
        // Create a new instance of ThemeColorPair
        newThemeColorPair(): Sheets.Schema.ThemeColorPair;
        // Create a new instance of TimeOfDay
        newTimeOfDay(): Sheets.Schema.TimeOfDay;
        // Create a new instance of TreemapChartColorScale
        newTreemapChartColorScale(): Sheets.Schema.TreemapChartColorScale;
        // Create a new instance of TreemapChartSpec
        newTreemapChartSpec(): Sheets.Schema.TreemapChartSpec;
        // Create a new instance of TrimWhitespaceRequest
        newTrimWhitespaceRequest(): Sheets.Schema.TrimWhitespaceRequest;
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
        // Create a new instance of UpdateDataSourceRequest
        newUpdateDataSourceRequest(): Sheets.Schema.UpdateDataSourceRequest;
        // Create a new instance of UpdateDeveloperMetadataRequest
        newUpdateDeveloperMetadataRequest(): Sheets.Schema.UpdateDeveloperMetadataRequest;
        // Create a new instance of UpdateDimensionGroupRequest
        newUpdateDimensionGroupRequest(): Sheets.Schema.UpdateDimensionGroupRequest;
        // Create a new instance of UpdateDimensionPropertiesRequest
        newUpdateDimensionPropertiesRequest(): Sheets.Schema.UpdateDimensionPropertiesRequest;
        // Create a new instance of UpdateEmbeddedObjectBorderRequest
        newUpdateEmbeddedObjectBorderRequest(): Sheets.Schema.UpdateEmbeddedObjectBorderRequest;
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
        // Create a new instance of UpdateSlicerSpecRequest
        newUpdateSlicerSpecRequest(): Sheets.Schema.UpdateSlicerSpecRequest;
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
declare const Sheets: GoogleAppsScript.Sheets;
