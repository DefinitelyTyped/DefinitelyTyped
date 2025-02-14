declare namespace GoogleAppsScript {
    namespace Sheets {
        namespace Collection {
            namespace Spreadsheets {
                interface DeveloperMetadataCollection {
                    // Returns the developer metadata with the specified ID.
                    // The caller must specify the spreadsheet ID and the developer metadata's
                    // unique metadataId.
                    get(spreadsheetId: string, metadataId: number): Sheets.Schema.DeveloperMetadata;
                    // Returns all developer metadata matching the specified DataFilter.
                    // If the provided DataFilter represents a DeveloperMetadataLookup object,
                    // this will return all DeveloperMetadata entries selected by it. If the
                    // DataFilter represents a location in a spreadsheet, this will return all
                    // developer metadata associated with locations intersecting that region.
                    search(
                        resource: Schema.SearchDeveloperMetadataRequest,
                        spreadsheetId: string,
                    ): Sheets.Schema.SearchDeveloperMetadataResponse;
                }
                interface SheetsCollection {
                    // Copies a single sheet from a spreadsheet to another spreadsheet.
                    // Returns the properties of the newly created sheet.
                    copyTo(
                        resource: Schema.CopySheetToAnotherSpreadsheetRequest,
                        spreadsheetId: string,
                        sheetId: number,
                    ): Sheets.Schema.SheetProperties;
                }
                interface ValuesCollection {
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
                    append(
                        resource: Schema.ValueRange,
                        spreadsheetId: string,
                        range: string,
                    ): Sheets.Schema.AppendValuesResponse;
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
                    append(
                        resource: Schema.ValueRange,
                        spreadsheetId: string,
                        range: string,
                        optionalArgs: object,
                    ): Sheets.Schema.AppendValuesResponse;
                    // Clears one or more ranges of values from a spreadsheet.
                    // The caller must specify the spreadsheet ID and one or more ranges.
                    // Only values are cleared -- all other properties of the cell (such as
                    // formatting, data validation, etc..) are kept.
                    batchClear(
                        resource: Schema.BatchClearValuesRequest,
                        spreadsheetId: string,
                    ): Sheets.Schema.BatchClearValuesResponse;
                    // Clears one or more ranges of values from a spreadsheet.
                    // The caller must specify the spreadsheet ID and one or more
                    // DataFilters. Ranges matching any of the specified data
                    // filters will be cleared.  Only values are cleared -- all other properties
                    // of the cell (such as formatting, data validation, etc..) are kept.
                    batchClearByDataFilter(
                        resource: Schema.BatchClearValuesByDataFilterRequest,
                        spreadsheetId: string,
                    ): Sheets.Schema.BatchClearValuesByDataFilterResponse;
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
                    batchGetByDataFilter(
                        resource: Schema.BatchGetValuesByDataFilterRequest,
                        spreadsheetId: string,
                    ): Sheets.Schema.BatchGetValuesByDataFilterResponse;
                    // Sets values in one or more ranges of a spreadsheet.
                    // The caller must specify the spreadsheet ID,
                    // a valueInputOption, and one or more
                    // ValueRanges.
                    batchUpdate(
                        resource: Schema.BatchUpdateValuesRequest,
                        spreadsheetId: string,
                    ): Sheets.Schema.BatchUpdateValuesResponse;
                    // Sets values in one or more ranges of a spreadsheet.
                    // The caller must specify the spreadsheet ID,
                    // a valueInputOption, and one or more
                    // DataFilterValueRanges.
                    batchUpdateByDataFilter(
                        resource: Schema.BatchUpdateValuesByDataFilterRequest,
                        spreadsheetId: string,
                    ): Sheets.Schema.BatchUpdateValuesByDataFilterResponse;
                    // Clears values from a spreadsheet.
                    // The caller must specify the spreadsheet ID and range.
                    // Only values are cleared -- all other properties of the cell (such as
                    // formatting, data validation, etc..) are kept.
                    clear(
                        resource: any,
                        /* Schema.ClearValuesRequest */ spreadsheetId: string,
                        range: string,
                    ): Sheets.Schema.ClearValuesResponse;
                    // Returns a range of values from a spreadsheet.
                    // The caller must specify the spreadsheet ID and a range.
                    get(spreadsheetId: string, range: string): Sheets.Schema.ValueRange;
                    // Returns a range of values from a spreadsheet.
                    // The caller must specify the spreadsheet ID and a range.
                    get(spreadsheetId: string, range: string, optionalArgs: object): Sheets.Schema.ValueRange;
                    // Sets values in a range of a spreadsheet.
                    // The caller must specify the spreadsheet ID, range, and
                    // a valueInputOption.
                    update(
                        resource: Schema.ValueRange,
                        spreadsheetId: string,
                        range: string,
                    ): Sheets.Schema.UpdateValuesResponse;
                    // Sets values in a range of a spreadsheet.
                    // The caller must specify the spreadsheet ID, range, and
                    // a valueInputOption.
                    update(
                        resource: Schema.ValueRange,
                        spreadsheetId: string,
                        range: string,
                        optionalArgs: object,
                    ): Sheets.Schema.UpdateValuesResponse;
                }
            }
            interface SpreadsheetsCollection {
                DeveloperMetadata?: Sheets.Collection.Spreadsheets.DeveloperMetadataCollection | undefined;
                Sheets?: Sheets.Collection.Spreadsheets.SheetsCollection | undefined;
                Values?: Sheets.Collection.Spreadsheets.ValuesCollection | undefined;
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
                batchUpdate(
                    resource: Schema.BatchUpdateSpreadsheetRequest,
                    spreadsheetId: string,
                ): Sheets.Schema.BatchUpdateSpreadsheetResponse;
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
                getByDataFilter(
                    resource: Schema.GetSpreadsheetByDataFilterRequest,
                    spreadsheetId: string,
                ): Sheets.Schema.Spreadsheet;
            }
        }
        namespace Schema {
            interface AddBandingRequest {
                bandedRange?: Sheets.Schema.BandedRange | undefined;
            }
            interface AddBandingResponse {
                bandedRange?: Sheets.Schema.BandedRange | undefined;
            }
            interface AddChartRequest {
                chart?: Sheets.Schema.EmbeddedChart | undefined;
            }
            interface AddChartResponse {
                chart?: Sheets.Schema.EmbeddedChart | undefined;
            }
            interface AddConditionalFormatRuleRequest {
                index?: number | undefined;
                rule?: Sheets.Schema.ConditionalFormatRule | undefined;
            }
            interface AddDimensionGroupRequest {
                range?: Sheets.Schema.DimensionRange | undefined;
            }
            interface AddDimensionGroupResponse {
                dimensionGroups?: Sheets.Schema.DimensionGroup[] | undefined;
            }
            interface AddFilterViewRequest {
                filter?: Sheets.Schema.FilterView | undefined;
            }
            interface AddFilterViewResponse {
                filter?: Sheets.Schema.FilterView | undefined;
            }
            interface AddNamedRangeRequest {
                namedRange?: Sheets.Schema.NamedRange | undefined;
            }
            interface AddNamedRangeResponse {
                namedRange?: Sheets.Schema.NamedRange | undefined;
            }
            interface AddProtectedRangeRequest {
                protectedRange?: Sheets.Schema.ProtectedRange | undefined;
            }
            interface AddProtectedRangeResponse {
                protectedRange?: Sheets.Schema.ProtectedRange | undefined;
            }
            interface AddSheetRequest {
                properties?: Sheets.Schema.SheetProperties | undefined;
            }
            interface AddSheetResponse {
                properties?: Sheets.Schema.SheetProperties | undefined;
            }
            interface AppendCellsRequest {
                fields?: string | undefined;
                rows?: Sheets.Schema.RowData[] | undefined;
                sheetId?: number | undefined;
            }
            interface AppendDimensionRequest {
                dimension?: string | undefined;
                length?: number | undefined;
                sheetId?: number | undefined;
            }
            interface AppendValuesResponse {
                spreadsheetId?: string | undefined;
                tableRange?: string | undefined;
                updates?: Sheets.Schema.UpdateValuesResponse | undefined;
            }
            interface AutoFillRequest {
                range?: Sheets.Schema.GridRange | undefined;
                sourceAndDestination?: Sheets.Schema.SourceAndDestination | undefined;
                useAlternateSeries?: boolean | undefined;
            }
            interface AutoResizeDimensionsRequest {
                dimensions?: Sheets.Schema.DimensionRange | undefined;
            }
            interface BandedRange {
                bandedRangeId?: number | undefined;
                columnProperties?: Sheets.Schema.BandingProperties | undefined;
                range?: Sheets.Schema.GridRange | undefined;
                rowProperties?: Sheets.Schema.BandingProperties | undefined;
            }
            interface BandingProperties {
                firstBandColor?: Sheets.Schema.Color | undefined;
                footerColor?: Sheets.Schema.Color | undefined;
                headerColor?: Sheets.Schema.Color | undefined;
                secondBandColor?: Sheets.Schema.Color | undefined;
            }
            interface BasicChartAxis {
                format?: Sheets.Schema.TextFormat | undefined;
                position?: string | undefined;
                title?: string | undefined;
                titleTextPosition?: Sheets.Schema.TextPosition | undefined;
            }
            interface BasicChartDomain {
                domain?: Sheets.Schema.ChartData | undefined;
                reversed?: boolean | undefined;
            }
            interface BasicChartSeries {
                color?: Sheets.Schema.Color | undefined;
                lineStyle?: Sheets.Schema.LineStyle | undefined;
                series?: Sheets.Schema.ChartData | undefined;
                targetAxis?: string | undefined;
                type?: string | undefined;
            }
            interface BasicChartSpec {
                axis?: Sheets.Schema.BasicChartAxis[] | undefined;
                chartType?: string | undefined;
                compareMode?: string | undefined;
                domains?: Sheets.Schema.BasicChartDomain[] | undefined;
                headerCount?: number | undefined;
                interpolateNulls?: boolean | undefined;
                legendPosition?: string | undefined;
                lineSmoothing?: boolean | undefined;
                series?: Sheets.Schema.BasicChartSeries[] | undefined;
                stackedType?: string | undefined;
                threeDimensional?: boolean | undefined;
            }
            interface BasicFilter {
                criteria?: object | undefined;
                range?: Sheets.Schema.GridRange | undefined;
                sortSpecs?: Sheets.Schema.SortSpec[] | undefined;
            }
            interface BatchClearValuesByDataFilterRequest {
                dataFilters?: Sheets.Schema.DataFilter[] | undefined;
            }
            interface BatchClearValuesByDataFilterResponse {
                clearedRanges?: string[] | undefined;
                spreadsheetId?: string | undefined;
            }
            interface BatchClearValuesRequest {
                ranges?: string[] | undefined;
            }
            interface BatchClearValuesResponse {
                clearedRanges?: string[] | undefined;
                spreadsheetId?: string | undefined;
            }
            interface BatchGetValuesByDataFilterRequest {
                dataFilters?: Sheets.Schema.DataFilter[] | undefined;
                dateTimeRenderOption?: string | undefined;
                majorDimension?: string | undefined;
                valueRenderOption?: string | undefined;
            }
            interface BatchGetValuesByDataFilterResponse {
                spreadsheetId?: string | undefined;
                valueRanges?: Sheets.Schema.MatchedValueRange[] | undefined;
            }
            interface BatchGetValuesResponse {
                spreadsheetId?: string | undefined;
                valueRanges?: Sheets.Schema.ValueRange[] | undefined;
            }
            interface BatchUpdateSpreadsheetRequest {
                includeSpreadsheetInResponse?: boolean | undefined;
                requests?: Sheets.Schema.Request[] | undefined;
                responseIncludeGridData?: boolean | undefined;
                responseRanges?: string[] | undefined;
            }
            interface BatchUpdateSpreadsheetResponse {
                replies?: Sheets.Schema.Response[] | undefined;
                spreadsheetId?: string | undefined;
                updatedSpreadsheet?: Sheets.Schema.Spreadsheet | undefined;
            }
            interface BatchUpdateValuesByDataFilterRequest {
                data?: Sheets.Schema.DataFilterValueRange[] | undefined;
                includeValuesInResponse?: boolean | undefined;
                responseDateTimeRenderOption?: string | undefined;
                responseValueRenderOption?: string | undefined;
                valueInputOption?: string | undefined;
            }
            interface BatchUpdateValuesByDataFilterResponse {
                responses?: Sheets.Schema.UpdateValuesByDataFilterResponse[] | undefined;
                spreadsheetId?: string | undefined;
                totalUpdatedCells?: number | undefined;
                totalUpdatedColumns?: number | undefined;
                totalUpdatedRows?: number | undefined;
                totalUpdatedSheets?: number | undefined;
            }
            interface BatchUpdateValuesRequest {
                data?: Sheets.Schema.ValueRange[] | undefined;
                includeValuesInResponse?: boolean | undefined;
                responseDateTimeRenderOption?: string | undefined;
                responseValueRenderOption?: string | undefined;
                valueInputOption?: string | undefined;
            }
            interface BatchUpdateValuesResponse {
                responses?: Sheets.Schema.UpdateValuesResponse[] | undefined;
                spreadsheetId?: string | undefined;
                totalUpdatedCells?: number | undefined;
                totalUpdatedColumns?: number | undefined;
                totalUpdatedRows?: number | undefined;
                totalUpdatedSheets?: number | undefined;
            }
            interface BooleanCondition {
                type?: string | undefined;
                values?: Sheets.Schema.ConditionValue[] | undefined;
            }
            interface BooleanRule {
                condition?: Sheets.Schema.BooleanCondition | undefined;
                format?: Sheets.Schema.CellFormat | undefined;
            }
            interface Border {
                color?: Sheets.Schema.Color | undefined;
                style?: string | undefined;
                width?: number | undefined;
            }
            interface Borders {
                bottom?: Sheets.Schema.Border | undefined;
                left?: Sheets.Schema.Border | undefined;
                right?: Sheets.Schema.Border | undefined;
                top?: Sheets.Schema.Border | undefined;
            }
            interface BubbleChartSpec {
                bubbleBorderColor?: Sheets.Schema.Color | undefined;
                bubbleLabels?: Sheets.Schema.ChartData | undefined;
                bubbleMaxRadiusSize?: number | undefined;
                bubbleMinRadiusSize?: number | undefined;
                bubbleOpacity?: number | undefined;
                bubbleSizes?: Sheets.Schema.ChartData | undefined;
                bubbleTextStyle?: Sheets.Schema.TextFormat | undefined;
                domain?: Sheets.Schema.ChartData | undefined;
                groupIds?: Sheets.Schema.ChartData | undefined;
                legendPosition?: string | undefined;
                series?: Sheets.Schema.ChartData | undefined;
            }
            interface CandlestickChartSpec {
                data?: Sheets.Schema.CandlestickData[] | undefined;
                domain?: Sheets.Schema.CandlestickDomain | undefined;
            }
            interface CandlestickData {
                closeSeries?: Sheets.Schema.CandlestickSeries | undefined;
                highSeries?: Sheets.Schema.CandlestickSeries | undefined;
                lowSeries?: Sheets.Schema.CandlestickSeries | undefined;
                openSeries?: Sheets.Schema.CandlestickSeries | undefined;
            }
            interface CandlestickDomain {
                data?: Sheets.Schema.ChartData | undefined;
                reversed?: boolean | undefined;
            }
            interface CandlestickSeries {
                data?: Sheets.Schema.ChartData | undefined;
            }
            interface CellData {
                dataValidation?: Sheets.Schema.DataValidationRule | undefined;
                effectiveFormat?: Sheets.Schema.CellFormat | undefined;
                effectiveValue?: Sheets.Schema.ExtendedValue | undefined;
                formattedValue?: string | undefined;
                hyperlink?: string | undefined;
                note?: string | undefined;
                pivotTable?: Sheets.Schema.PivotTable | undefined;
                textFormatRuns?: Sheets.Schema.TextFormatRun[] | undefined;
                userEnteredFormat?: Sheets.Schema.CellFormat | undefined;
                userEnteredValue?: Sheets.Schema.ExtendedValue | undefined;
            }
            interface CellFormat {
                backgroundColor?: Sheets.Schema.Color | undefined;
                borders?: Sheets.Schema.Borders | undefined;
                horizontalAlignment?: string | undefined;
                hyperlinkDisplayType?: string | undefined;
                numberFormat?: Sheets.Schema.NumberFormat | undefined;
                padding?: Sheets.Schema.Padding | undefined;
                textDirection?: string | undefined;
                textFormat?: Sheets.Schema.TextFormat | undefined;
                textRotation?: Sheets.Schema.TextRotation | undefined;
                verticalAlignment?: string | undefined;
                wrapStrategy?: string | undefined;
            }
            interface ChartData {
                sourceRange?: Sheets.Schema.ChartSourceRange | undefined;
            }
            interface ChartSourceRange {
                sources?: Sheets.Schema.GridRange[] | undefined;
            }
            interface ChartSpec {
                altText?: string | undefined;
                backgroundColor?: Sheets.Schema.Color | undefined;
                basicChart?: Sheets.Schema.BasicChartSpec | undefined;
                bubbleChart?: Sheets.Schema.BubbleChartSpec | undefined;
                candlestickChart?: Sheets.Schema.CandlestickChartSpec | undefined;
                fontName?: string | undefined;
                hiddenDimensionStrategy?: string | undefined;
                histogramChart?: Sheets.Schema.HistogramChartSpec | undefined;
                maximized?: boolean | undefined;
                orgChart?: Sheets.Schema.OrgChartSpec | undefined;
                pieChart?: Sheets.Schema.PieChartSpec | undefined;
                subtitle?: string | undefined;
                subtitleTextFormat?: Sheets.Schema.TextFormat | undefined;
                subtitleTextPosition?: Sheets.Schema.TextPosition | undefined;
                title?: string | undefined;
                titleTextFormat?: Sheets.Schema.TextFormat | undefined;
                titleTextPosition?: Sheets.Schema.TextPosition | undefined;
                treemapChart?: Sheets.Schema.TreemapChartSpec | undefined;
                waterfallChart?: Sheets.Schema.WaterfallChartSpec | undefined;
            }
            interface ClearBasicFilterRequest {
                sheetId?: number | undefined;
            }
            interface ClearValuesResponse {
                clearedRange?: string | undefined;
                spreadsheetId?: string | undefined;
            }
            interface Color {
                alpha?: number | undefined;
                blue?: number | undefined;
                green?: number | undefined;
                red?: number | undefined;
            }
            interface ConditionValue {
                relativeDate?: string | undefined;
                userEnteredValue?: string | undefined;
            }
            interface ConditionalFormatRule {
                booleanRule?: Sheets.Schema.BooleanRule | undefined;
                gradientRule?: Sheets.Schema.GradientRule | undefined;
                ranges?: Sheets.Schema.GridRange[] | undefined;
            }
            interface CopyPasteRequest {
                destination?: Sheets.Schema.GridRange | undefined;
                pasteOrientation?: string | undefined;
                pasteType?: string | undefined;
                source?: Sheets.Schema.GridRange | undefined;
            }
            interface CopySheetToAnotherSpreadsheetRequest {
                destinationSpreadsheetId?: string | undefined;
            }
            interface CreateDeveloperMetadataRequest {
                developerMetadata?: Sheets.Schema.DeveloperMetadata | undefined;
            }
            interface CreateDeveloperMetadataResponse {
                developerMetadata?: Sheets.Schema.DeveloperMetadata | undefined;
            }
            interface CutPasteRequest {
                destination?: Sheets.Schema.GridCoordinate | undefined;
                pasteType?: string | undefined;
                source?: Sheets.Schema.GridRange | undefined;
            }
            interface DataFilter {
                a1Range?: string | undefined;
                developerMetadataLookup?: Sheets.Schema.DeveloperMetadataLookup | undefined;
                gridRange?: Sheets.Schema.GridRange | undefined;
            }
            interface DataFilterValueRange {
                dataFilter?: Sheets.Schema.DataFilter | undefined;
                majorDimension?: string | undefined;
                values?: any[][] | undefined;
            }
            interface DataValidationRule {
                condition?: Sheets.Schema.BooleanCondition | undefined;
                inputMessage?: string | undefined;
                showCustomUi?: boolean | undefined;
                strict?: boolean | undefined;
            }
            interface DateTimeRule {
                type?: string | undefined;
            }
            interface DeleteBandingRequest {
                bandedRangeId?: number | undefined;
            }
            interface DeleteConditionalFormatRuleRequest {
                index?: number | undefined;
                sheetId?: number | undefined;
            }
            interface DeleteConditionalFormatRuleResponse {
                rule?: Sheets.Schema.ConditionalFormatRule | undefined;
            }
            interface DeleteDeveloperMetadataRequest {
                dataFilter?: Sheets.Schema.DataFilter | undefined;
            }
            interface DeleteDeveloperMetadataResponse {
                deletedDeveloperMetadata?: Sheets.Schema.DeveloperMetadata[] | undefined;
            }
            interface DeleteDimensionGroupRequest {
                range?: Sheets.Schema.DimensionRange | undefined;
            }
            interface DeleteDimensionGroupResponse {
                dimensionGroups?: Sheets.Schema.DimensionGroup[] | undefined;
            }
            interface DeleteDimensionRequest {
                range?: Sheets.Schema.DimensionRange | undefined;
            }
            interface DeleteEmbeddedObjectRequest {
                objectId?: number | undefined;
            }
            interface DeleteFilterViewRequest {
                filterId?: number | undefined;
            }
            interface DeleteNamedRangeRequest {
                namedRangeId?: string | undefined;
            }
            interface DeleteProtectedRangeRequest {
                protectedRangeId?: number | undefined;
            }
            interface DeleteRangeRequest {
                range?: Sheets.Schema.GridRange | undefined;
                shiftDimension?: string | undefined;
            }
            interface DeleteSheetRequest {
                sheetId?: number | undefined;
            }
            interface DeveloperMetadata {
                location?: Sheets.Schema.DeveloperMetadataLocation | undefined;
                metadataId?: number | undefined;
                metadataKey?: string | undefined;
                metadataValue?: string | undefined;
                visibility?: string | undefined;
            }
            interface DeveloperMetadataLocation {
                dimensionRange?: Sheets.Schema.DimensionRange | undefined;
                locationType?: string | undefined;
                sheetId?: number | undefined;
                spreadsheet?: boolean | undefined;
            }
            interface DeveloperMetadataLookup {
                locationMatchingStrategy?: string | undefined;
                locationType?: string | undefined;
                metadataId?: number | undefined;
                metadataKey?: string | undefined;
                metadataLocation?: Sheets.Schema.DeveloperMetadataLocation | undefined;
                metadataValue?: string | undefined;
                visibility?: string | undefined;
            }
            interface DimensionGroup {
                collapsed?: boolean | undefined;
                depth?: number | undefined;
                range?: Sheets.Schema.DimensionRange | undefined;
            }
            interface DimensionProperties {
                developerMetadata?: Sheets.Schema.DeveloperMetadata[] | undefined;
                hiddenByFilter?: boolean | undefined;
                hiddenByUser?: boolean | undefined;
                pixelSize?: number | undefined;
            }
            interface DimensionRange {
                dimension?: string | undefined;
                endIndex?: number | undefined;
                sheetId?: number | undefined;
                startIndex?: number | undefined;
            }
            interface DuplicateFilterViewRequest {
                filterId?: number | undefined;
            }
            interface DuplicateFilterViewResponse {
                filter?: Sheets.Schema.FilterView | undefined;
            }
            interface DuplicateSheetRequest {
                insertSheetIndex?: number | undefined;
                newSheetId?: number | undefined;
                newSheetName?: string | undefined;
                sourceSheetId?: number | undefined;
            }
            interface DuplicateSheetResponse {
                properties?: Sheets.Schema.SheetProperties | undefined;
            }
            interface Editors {
                domainUsersCanEdit?: boolean | undefined;
                groups?: string[] | undefined;
                users?: string[] | undefined;
            }
            interface EmbeddedChart {
                chartId?: number | undefined;
                position?: Sheets.Schema.EmbeddedObjectPosition | undefined;
                spec?: Sheets.Schema.ChartSpec | undefined;
            }
            interface EmbeddedObjectPosition {
                newSheet?: boolean | undefined;
                overlayPosition?: Sheets.Schema.OverlayPosition | undefined;
                sheetId?: number | undefined;
            }
            interface ErrorValue {
                message?: string | undefined;
                type?: string | undefined;
            }
            interface ExtendedValue {
                boolValue?: boolean | undefined;
                errorValue?: Sheets.Schema.ErrorValue | undefined;
                formulaValue?: string | undefined;
                numberValue?: number | undefined;
                stringValue?: string | undefined;
            }
            interface FilterCriteria {
                condition?: Sheets.Schema.BooleanCondition | undefined;
                hiddenValues?: string[] | undefined;
            }
            interface FilterView {
                criteria?: object | undefined;
                filterViewId?: number | undefined;
                namedRangeId?: string | undefined;
                range?: Sheets.Schema.GridRange | undefined;
                sortSpecs?: Sheets.Schema.SortSpec[] | undefined;
                title?: string | undefined;
            }
            interface FindReplaceRequest {
                allSheets?: boolean | undefined;
                find?: string | undefined;
                includeFormulas?: boolean | undefined;
                matchCase?: boolean | undefined;
                matchEntireCell?: boolean | undefined;
                range?: Sheets.Schema.GridRange | undefined;
                replacement?: string | undefined;
                searchByRegex?: boolean | undefined;
                sheetId?: number | undefined;
            }
            interface FindReplaceResponse {
                formulasChanged?: number | undefined;
                occurrencesChanged?: number | undefined;
                rowsChanged?: number | undefined;
                sheetsChanged?: number | undefined;
                valuesChanged?: number | undefined;
            }
            interface GetSpreadsheetByDataFilterRequest {
                dataFilters?: Sheets.Schema.DataFilter[] | undefined;
                includeGridData?: boolean | undefined;
            }
            interface GradientRule {
                maxpoint?: Sheets.Schema.InterpolationPoint | undefined;
                midpoint?: Sheets.Schema.InterpolationPoint | undefined;
                minpoint?: Sheets.Schema.InterpolationPoint | undefined;
            }
            interface GridCoordinate {
                columnIndex?: number | undefined;
                rowIndex?: number | undefined;
                sheetId?: number | undefined;
            }
            interface GridData {
                columnMetadata?: Sheets.Schema.DimensionProperties[] | undefined;
                rowData?: Sheets.Schema.RowData[] | undefined;
                rowMetadata?: Sheets.Schema.DimensionProperties[] | undefined;
                startColumn?: number | undefined;
                startRow?: number | undefined;
            }
            interface GridProperties {
                columnCount?: number | undefined;
                columnGroupControlAfter?: boolean | undefined;
                frozenColumnCount?: number | undefined;
                frozenRowCount?: number | undefined;
                hideGridlines?: boolean | undefined;
                rowCount?: number | undefined;
                rowGroupControlAfter?: boolean | undefined;
            }
            interface GridRange {
                endColumnIndex?: number | undefined;
                endRowIndex?: number | undefined;
                sheetId?: number | undefined;
                startColumnIndex?: number | undefined;
                startRowIndex?: number | undefined;
            }
            interface HistogramChartSpec {
                bucketSize?: number | undefined;
                legendPosition?: string | undefined;
                outlierPercentile?: number | undefined;
                series?: Sheets.Schema.HistogramSeries[] | undefined;
                showItemDividers?: boolean | undefined;
            }
            interface HistogramRule {
                end?: number | undefined;
                interval?: number | undefined;
                start?: number | undefined;
            }
            interface HistogramSeries {
                barColor?: Sheets.Schema.Color | undefined;
                data?: Sheets.Schema.ChartData | undefined;
            }
            interface InsertDimensionRequest {
                inheritFromBefore?: boolean | undefined;
                range?: Sheets.Schema.DimensionRange | undefined;
            }
            interface InsertRangeRequest {
                range?: Sheets.Schema.GridRange | undefined;
                shiftDimension?: string | undefined;
            }
            interface InterpolationPoint {
                color?: Sheets.Schema.Color | undefined;
                type?: string | undefined;
                value?: string | undefined;
            }
            interface IterativeCalculationSettings {
                convergenceThreshold?: number | undefined;
                maxIterations?: number | undefined;
            }
            interface LineStyle {
                type?: string | undefined;
                width?: number | undefined;
            }
            interface ManualRule {
                groups?: Sheets.Schema.ManualRuleGroup[] | undefined;
            }
            interface ManualRuleGroup {
                groupName?: Sheets.Schema.ExtendedValue | undefined;
                items?: Sheets.Schema.ExtendedValue[] | undefined;
            }
            interface MatchedDeveloperMetadata {
                dataFilters?: Sheets.Schema.DataFilter[] | undefined;
                developerMetadata?: Sheets.Schema.DeveloperMetadata | undefined;
            }
            interface MatchedValueRange {
                dataFilters?: Sheets.Schema.DataFilter[] | undefined;
                valueRange?: Sheets.Schema.ValueRange | undefined;
            }
            interface MergeCellsRequest {
                mergeType?: string | undefined;
                range?: Sheets.Schema.GridRange | undefined;
            }
            interface MoveDimensionRequest {
                destinationIndex?: number | undefined;
                source?: Sheets.Schema.DimensionRange | undefined;
            }
            interface NamedRange {
                name?: string | undefined;
                namedRangeId?: string | undefined;
                range?: Sheets.Schema.GridRange | undefined;
            }
            interface NumberFormat {
                pattern?: string | undefined;
                type?: string | undefined;
            }
            interface OrgChartSpec {
                labels?: Sheets.Schema.ChartData | undefined;
                nodeColor?: Sheets.Schema.Color | undefined;
                nodeSize?: string | undefined;
                parentLabels?: Sheets.Schema.ChartData | undefined;
                selectedNodeColor?: Sheets.Schema.Color | undefined;
                tooltips?: Sheets.Schema.ChartData | undefined;
            }
            interface OverlayPosition {
                anchorCell?: Sheets.Schema.GridCoordinate | undefined;
                heightPixels?: number | undefined;
                offsetXPixels?: number | undefined;
                offsetYPixels?: number | undefined;
                widthPixels?: number | undefined;
            }
            interface Padding {
                bottom?: number | undefined;
                left?: number | undefined;
                right?: number | undefined;
                top?: number | undefined;
            }
            interface PasteDataRequest {
                coordinate?: Sheets.Schema.GridCoordinate | undefined;
                data?: string | undefined;
                delimiter?: string | undefined;
                html?: boolean | undefined;
                type?: string | undefined;
            }
            interface PieChartSpec {
                domain?: Sheets.Schema.ChartData | undefined;
                legendPosition?: string | undefined;
                pieHole?: number | undefined;
                series?: Sheets.Schema.ChartData | undefined;
                threeDimensional?: boolean | undefined;
            }
            interface PivotFilterCriteria {
                visibleValues?: string[] | undefined;
            }
            interface PivotGroup {
                groupRule?: Sheets.Schema.PivotGroupRule | undefined;
                label?: string | undefined;
                repeatHeadings?: boolean | undefined;
                showTotals?: boolean | undefined;
                sortOrder?: string | undefined;
                sourceColumnOffset?: number | undefined;
                valueBucket?: Sheets.Schema.PivotGroupSortValueBucket | undefined;
                valueMetadata?: Sheets.Schema.PivotGroupValueMetadata[] | undefined;
            }
            interface PivotGroupRule {
                dateTimeRule?: Sheets.Schema.DateTimeRule | undefined;
                histogramRule?: Sheets.Schema.HistogramRule | undefined;
                manualRule?: Sheets.Schema.ManualRule | undefined;
            }
            interface PivotGroupSortValueBucket {
                buckets?: Sheets.Schema.ExtendedValue[] | undefined;
                valuesIndex?: number | undefined;
            }
            interface PivotGroupValueMetadata {
                collapsed?: boolean | undefined;
                value?: Sheets.Schema.ExtendedValue | undefined;
            }
            interface PivotTable {
                columns?: Sheets.Schema.PivotGroup[] | undefined;
                criteria?: object | undefined;
                rows?: Sheets.Schema.PivotGroup[] | undefined;
                source?: Sheets.Schema.GridRange | undefined;
                valueLayout?: string | undefined;
                values?: Sheets.Schema.PivotValue[] | undefined;
            }
            interface PivotValue {
                calculatedDisplayType?: string | undefined;
                formula?: string | undefined;
                name?: string | undefined;
                sourceColumnOffset?: number | undefined;
                summarizeFunction?: string | undefined;
            }
            interface ProtectedRange {
                description?: string | undefined;
                editors?: Sheets.Schema.Editors | undefined;
                namedRangeId?: string | undefined;
                protectedRangeId?: number | undefined;
                range?: Sheets.Schema.GridRange | undefined;
                requestingUserCanEdit?: boolean | undefined;
                unprotectedRanges?: Sheets.Schema.GridRange[] | undefined;
                warningOnly?: boolean | undefined;
            }
            interface RandomizeRangeRequest {
                range?: Sheets.Schema.GridRange | undefined;
            }
            interface RepeatCellRequest {
                cell?: Sheets.Schema.CellData | undefined;
                fields?: string | undefined;
                range?: Sheets.Schema.GridRange | undefined;
            }
            interface Request {
                addBanding?: Sheets.Schema.AddBandingRequest | undefined;
                addChart?: Sheets.Schema.AddChartRequest | undefined;
                addConditionalFormatRule?: Sheets.Schema.AddConditionalFormatRuleRequest | undefined;
                addDimensionGroup?: Sheets.Schema.AddDimensionGroupRequest | undefined;
                addFilterView?: Sheets.Schema.AddFilterViewRequest | undefined;
                addNamedRange?: Sheets.Schema.AddNamedRangeRequest | undefined;
                addProtectedRange?: Sheets.Schema.AddProtectedRangeRequest | undefined;
                addSheet?: Sheets.Schema.AddSheetRequest | undefined;
                appendCells?: Sheets.Schema.AppendCellsRequest | undefined;
                appendDimension?: Sheets.Schema.AppendDimensionRequest | undefined;
                autoFill?: Sheets.Schema.AutoFillRequest | undefined;
                autoResizeDimensions?: Sheets.Schema.AutoResizeDimensionsRequest | undefined;
                clearBasicFilter?: Sheets.Schema.ClearBasicFilterRequest | undefined;
                copyPaste?: Sheets.Schema.CopyPasteRequest | undefined;
                createDeveloperMetadata?: Sheets.Schema.CreateDeveloperMetadataRequest | undefined;
                cutPaste?: Sheets.Schema.CutPasteRequest | undefined;
                deleteBanding?: Sheets.Schema.DeleteBandingRequest | undefined;
                deleteConditionalFormatRule?: Sheets.Schema.DeleteConditionalFormatRuleRequest | undefined;
                deleteDeveloperMetadata?: Sheets.Schema.DeleteDeveloperMetadataRequest | undefined;
                deleteDimension?: Sheets.Schema.DeleteDimensionRequest | undefined;
                deleteDimensionGroup?: Sheets.Schema.DeleteDimensionGroupRequest | undefined;
                deleteEmbeddedObject?: Sheets.Schema.DeleteEmbeddedObjectRequest | undefined;
                deleteFilterView?: Sheets.Schema.DeleteFilterViewRequest | undefined;
                deleteNamedRange?: Sheets.Schema.DeleteNamedRangeRequest | undefined;
                deleteProtectedRange?: Sheets.Schema.DeleteProtectedRangeRequest | undefined;
                deleteRange?: Sheets.Schema.DeleteRangeRequest | undefined;
                deleteSheet?: Sheets.Schema.DeleteSheetRequest | undefined;
                duplicateFilterView?: Sheets.Schema.DuplicateFilterViewRequest | undefined;
                duplicateSheet?: Sheets.Schema.DuplicateSheetRequest | undefined;
                findReplace?: Sheets.Schema.FindReplaceRequest | undefined;
                insertDimension?: Sheets.Schema.InsertDimensionRequest | undefined;
                insertRange?: Sheets.Schema.InsertRangeRequest | undefined;
                mergeCells?: Sheets.Schema.MergeCellsRequest | undefined;
                moveDimension?: Sheets.Schema.MoveDimensionRequest | undefined;
                pasteData?: Sheets.Schema.PasteDataRequest | undefined;
                randomizeRange?: Sheets.Schema.RandomizeRangeRequest | undefined;
                repeatCell?: Sheets.Schema.RepeatCellRequest | undefined;
                setBasicFilter?: Sheets.Schema.SetBasicFilterRequest | undefined;
                setDataValidation?: Sheets.Schema.SetDataValidationRequest | undefined;
                sortRange?: Sheets.Schema.SortRangeRequest | undefined;
                textToColumns?: Sheets.Schema.TextToColumnsRequest | undefined;
                unmergeCells?: Sheets.Schema.UnmergeCellsRequest | undefined;
                updateBanding?: Sheets.Schema.UpdateBandingRequest | undefined;
                updateBorders?: Sheets.Schema.UpdateBordersRequest | undefined;
                updateCells?: Sheets.Schema.UpdateCellsRequest | undefined;
                updateChartSpec?: Sheets.Schema.UpdateChartSpecRequest | undefined;
                updateConditionalFormatRule?: Sheets.Schema.UpdateConditionalFormatRuleRequest | undefined;
                updateDeveloperMetadata?: Sheets.Schema.UpdateDeveloperMetadataRequest | undefined;
                updateDimensionGroup?: Sheets.Schema.UpdateDimensionGroupRequest | undefined;
                updateDimensionProperties?: Sheets.Schema.UpdateDimensionPropertiesRequest | undefined;
                updateEmbeddedObjectPosition?: Sheets.Schema.UpdateEmbeddedObjectPositionRequest | undefined;
                updateFilterView?: Sheets.Schema.UpdateFilterViewRequest | undefined;
                updateNamedRange?: Sheets.Schema.UpdateNamedRangeRequest | undefined;
                updateProtectedRange?: Sheets.Schema.UpdateProtectedRangeRequest | undefined;
                updateSheetProperties?: Sheets.Schema.UpdateSheetPropertiesRequest | undefined;
                updateSpreadsheetProperties?: Sheets.Schema.UpdateSpreadsheetPropertiesRequest | undefined;
            }
            interface Response {
                addBanding?: Sheets.Schema.AddBandingResponse | undefined;
                addChart?: Sheets.Schema.AddChartResponse | undefined;
                addDimensionGroup?: Sheets.Schema.AddDimensionGroupResponse | undefined;
                addFilterView?: Sheets.Schema.AddFilterViewResponse | undefined;
                addNamedRange?: Sheets.Schema.AddNamedRangeResponse | undefined;
                addProtectedRange?: Sheets.Schema.AddProtectedRangeResponse | undefined;
                addSheet?: Sheets.Schema.AddSheetResponse | undefined;
                createDeveloperMetadata?: Sheets.Schema.CreateDeveloperMetadataResponse | undefined;
                deleteConditionalFormatRule?: Sheets.Schema.DeleteConditionalFormatRuleResponse | undefined;
                deleteDeveloperMetadata?: Sheets.Schema.DeleteDeveloperMetadataResponse | undefined;
                deleteDimensionGroup?: Sheets.Schema.DeleteDimensionGroupResponse | undefined;
                duplicateFilterView?: Sheets.Schema.DuplicateFilterViewResponse | undefined;
                duplicateSheet?: Sheets.Schema.DuplicateSheetResponse | undefined;
                findReplace?: Sheets.Schema.FindReplaceResponse | undefined;
                updateConditionalFormatRule?: Sheets.Schema.UpdateConditionalFormatRuleResponse | undefined;
                updateDeveloperMetadata?: Sheets.Schema.UpdateDeveloperMetadataResponse | undefined;
                updateEmbeddedObjectPosition?: Sheets.Schema.UpdateEmbeddedObjectPositionResponse | undefined;
            }
            interface RowData {
                values?: Sheets.Schema.CellData[] | undefined;
            }
            interface SearchDeveloperMetadataRequest {
                dataFilters?: Sheets.Schema.DataFilter[] | undefined;
            }
            interface SearchDeveloperMetadataResponse {
                matchedDeveloperMetadata?: Sheets.Schema.MatchedDeveloperMetadata[] | undefined;
            }
            interface SetBasicFilterRequest {
                filter?: Sheets.Schema.BasicFilter | undefined;
            }
            interface SetDataValidationRequest {
                range?: Sheets.Schema.GridRange | undefined;
                rule?: Sheets.Schema.DataValidationRule | undefined;
            }
            interface Sheet {
                bandedRanges?: Sheets.Schema.BandedRange[] | undefined;
                basicFilter?: Sheets.Schema.BasicFilter | undefined;
                charts?: Sheets.Schema.EmbeddedChart[] | undefined;
                columnGroups?: Sheets.Schema.DimensionGroup[] | undefined;
                conditionalFormats?: Sheets.Schema.ConditionalFormatRule[] | undefined;
                data?: Sheets.Schema.GridData[] | undefined;
                developerMetadata?: Sheets.Schema.DeveloperMetadata[] | undefined;
                filterViews?: Sheets.Schema.FilterView[] | undefined;
                merges?: Sheets.Schema.GridRange[] | undefined;
                properties?: Sheets.Schema.SheetProperties | undefined;
                protectedRanges?: Sheets.Schema.ProtectedRange[] | undefined;
                rowGroups?: Sheets.Schema.DimensionGroup[] | undefined;
            }
            interface SheetProperties {
                gridProperties?: Sheets.Schema.GridProperties | undefined;
                hidden?: boolean | undefined;
                index?: number | undefined;
                rightToLeft?: boolean | undefined;
                sheetId?: number | undefined;
                sheetType?: string | undefined;
                tabColor?: Sheets.Schema.Color | undefined;
                title?: string | undefined;
            }
            interface SortRangeRequest {
                range?: Sheets.Schema.GridRange | undefined;
                sortSpecs?: Sheets.Schema.SortSpec[] | undefined;
            }
            interface SortSpec {
                dimensionIndex?: number | undefined;
                sortOrder?: string | undefined;
            }
            interface SourceAndDestination {
                dimension?: string | undefined;
                fillLength?: number | undefined;
                source?: Sheets.Schema.GridRange | undefined;
            }
            interface Spreadsheet {
                developerMetadata?: Sheets.Schema.DeveloperMetadata[] | undefined;
                namedRanges?: Sheets.Schema.NamedRange[] | undefined;
                properties?: Sheets.Schema.SpreadsheetProperties | undefined;
                sheets?: Sheets.Schema.Sheet[] | undefined;
                spreadsheetId?: string | undefined;
                spreadsheetUrl?: string | undefined;
            }
            interface SpreadsheetProperties {
                autoRecalc?: string | undefined;
                defaultFormat?: Sheets.Schema.CellFormat | undefined;
                iterativeCalculationSettings?: Sheets.Schema.IterativeCalculationSettings | undefined;
                locale?: string | undefined;
                timeZone?: string | undefined;
                title?: string | undefined;
            }
            interface TextFormat {
                bold?: boolean | undefined;
                fontFamily?: string | undefined;
                fontSize?: number | undefined;
                foregroundColor?: Sheets.Schema.Color | undefined;
                italic?: boolean | undefined;
                strikethrough?: boolean | undefined;
                underline?: boolean | undefined;
                link?: Sheets.Schema.Link | undefined;
            }
            interface Link {
                uri?: string | undefined;
            }
            interface TextFormatRun {
                format?: Sheets.Schema.TextFormat | undefined;
                startIndex?: number | undefined;
            }
            interface TextPosition {
                horizontalAlignment?: string | undefined;
            }
            interface TextRotation {
                angle?: number | undefined;
                vertical?: boolean | undefined;
            }
            interface TextToColumnsRequest {
                delimiter?: string | undefined;
                delimiterType?: string | undefined;
                source?: Sheets.Schema.GridRange | undefined;
            }
            interface TreemapChartColorScale {
                maxValueColor?: Sheets.Schema.Color | undefined;
                midValueColor?: Sheets.Schema.Color | undefined;
                minValueColor?: Sheets.Schema.Color | undefined;
                noDataColor?: Sheets.Schema.Color | undefined;
            }
            interface TreemapChartSpec {
                colorData?: Sheets.Schema.ChartData | undefined;
                colorScale?: Sheets.Schema.TreemapChartColorScale | undefined;
                headerColor?: Sheets.Schema.Color | undefined;
                hideTooltips?: boolean | undefined;
                hintedLevels?: number | undefined;
                labels?: Sheets.Schema.ChartData | undefined;
                levels?: number | undefined;
                maxValue?: number | undefined;
                minValue?: number | undefined;
                parentLabels?: Sheets.Schema.ChartData | undefined;
                sizeData?: Sheets.Schema.ChartData | undefined;
                textFormat?: Sheets.Schema.TextFormat | undefined;
            }
            interface UnmergeCellsRequest {
                range?: Sheets.Schema.GridRange | undefined;
            }
            interface UpdateBandingRequest {
                bandedRange?: Sheets.Schema.BandedRange | undefined;
                fields?: string | undefined;
            }
            interface UpdateBordersRequest {
                bottom?: Sheets.Schema.Border | undefined;
                innerHorizontal?: Sheets.Schema.Border | undefined;
                innerVertical?: Sheets.Schema.Border | undefined;
                left?: Sheets.Schema.Border | undefined;
                range?: Sheets.Schema.GridRange | undefined;
                right?: Sheets.Schema.Border | undefined;
                top?: Sheets.Schema.Border | undefined;
            }
            interface UpdateCellsRequest {
                fields?: string | undefined;
                range?: Sheets.Schema.GridRange | undefined;
                rows?: Sheets.Schema.RowData[] | undefined;
                start?: Sheets.Schema.GridCoordinate | undefined;
            }
            interface UpdateChartSpecRequest {
                chartId?: number | undefined;
                spec?: Sheets.Schema.ChartSpec | undefined;
            }
            interface UpdateConditionalFormatRuleRequest {
                index?: number | undefined;
                newIndex?: number | undefined;
                rule?: Sheets.Schema.ConditionalFormatRule | undefined;
                sheetId?: number | undefined;
            }
            interface UpdateConditionalFormatRuleResponse {
                newIndex?: number | undefined;
                newRule?: Sheets.Schema.ConditionalFormatRule | undefined;
                oldIndex?: number | undefined;
                oldRule?: Sheets.Schema.ConditionalFormatRule | undefined;
            }
            interface UpdateDeveloperMetadataRequest {
                dataFilters?: Sheets.Schema.DataFilter[] | undefined;
                developerMetadata?: Sheets.Schema.DeveloperMetadata | undefined;
                fields?: string | undefined;
            }
            interface UpdateDeveloperMetadataResponse {
                developerMetadata?: Sheets.Schema.DeveloperMetadata[] | undefined;
            }
            interface UpdateDimensionGroupRequest {
                dimensionGroup?: Sheets.Schema.DimensionGroup | undefined;
                fields?: string | undefined;
            }
            interface UpdateDimensionPropertiesRequest {
                fields?: string | undefined;
                properties?: Sheets.Schema.DimensionProperties | undefined;
                range?: Sheets.Schema.DimensionRange | undefined;
            }
            interface UpdateEmbeddedObjectPositionRequest {
                fields?: string | undefined;
                newPosition?: Sheets.Schema.EmbeddedObjectPosition | undefined;
                objectId?: number | undefined;
            }
            interface UpdateEmbeddedObjectPositionResponse {
                position?: Sheets.Schema.EmbeddedObjectPosition | undefined;
            }
            interface UpdateFilterViewRequest {
                fields?: string | undefined;
                filter?: Sheets.Schema.FilterView | undefined;
            }
            interface UpdateNamedRangeRequest {
                fields?: string | undefined;
                namedRange?: Sheets.Schema.NamedRange | undefined;
            }
            interface UpdateProtectedRangeRequest {
                fields?: string | undefined;
                protectedRange?: Sheets.Schema.ProtectedRange | undefined;
            }
            interface UpdateSheetPropertiesRequest {
                fields?: string | undefined;
                properties?: Sheets.Schema.SheetProperties | undefined;
            }
            interface UpdateSpreadsheetPropertiesRequest {
                fields?: string | undefined;
                properties?: Sheets.Schema.SpreadsheetProperties | undefined;
            }
            interface UpdateValuesByDataFilterResponse {
                dataFilter?: Sheets.Schema.DataFilter | undefined;
                updatedCells?: number | undefined;
                updatedColumns?: number | undefined;
                updatedData?: Sheets.Schema.ValueRange | undefined;
                updatedRange?: string | undefined;
                updatedRows?: number | undefined;
            }
            interface UpdateValuesResponse {
                spreadsheetId?: string | undefined;
                updatedCells?: number | undefined;
                updatedColumns?: number | undefined;
                updatedData?: Sheets.Schema.ValueRange | undefined;
                updatedRange?: string | undefined;
                updatedRows?: number | undefined;
            }
            interface ValueRange {
                majorDimension?: string | undefined;
                range?: string | undefined;
                values?: any[][] | undefined;
            }
            interface WaterfallChartColumnStyle {
                color?: Sheets.Schema.Color | undefined;
                label?: string | undefined;
            }
            interface WaterfallChartCustomSubtotal {
                dataIsSubtotal?: boolean | undefined;
                label?: string | undefined;
                subtotalIndex?: number | undefined;
            }
            interface WaterfallChartDomain {
                data?: Sheets.Schema.ChartData | undefined;
                reversed?: boolean | undefined;
            }
            interface WaterfallChartSeries {
                customSubtotals?: Sheets.Schema.WaterfallChartCustomSubtotal[] | undefined;
                data?: Sheets.Schema.ChartData | undefined;
                hideTrailingSubtotal?: boolean | undefined;
                negativeColumnsStyle?: Sheets.Schema.WaterfallChartColumnStyle | undefined;
                positiveColumnsStyle?: Sheets.Schema.WaterfallChartColumnStyle | undefined;
                subtotalColumnsStyle?: Sheets.Schema.WaterfallChartColumnStyle | undefined;
            }
            interface WaterfallChartSpec {
                connectorLineStyle?: Sheets.Schema.LineStyle | undefined;
                domain?: Sheets.Schema.WaterfallChartDomain | undefined;
                firstValueIsTotal?: boolean | undefined;
                hideConnectorLines?: boolean | undefined;
                series?: Sheets.Schema.WaterfallChartSeries[] | undefined;
                stackedType?: string | undefined;
            }
        }
    }
    interface Sheets {
        Spreadsheets?: Sheets.Collection.SpreadsheetsCollection | undefined;
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
