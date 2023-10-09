declare namespace GoogleAppsScript {
    namespace Slides {
        namespace Collection {
            namespace Presentations {
                interface PagesCollection {
                    // Gets the latest version of the specified page in the presentation.
                    get(presentationId: string, pageObjectId: string): Slides.Schema.Page;
                    // Generates a thumbnail of the latest version of the specified page in the
                    // presentation and returns a URL to the thumbnail image.
                    // This request counts as an [expensive read request](/slides/limits) for
                    // quota purposes.
                    getThumbnail(presentationId: string, pageObjectId: string): Slides.Schema.Thumbnail;
                    // Generates a thumbnail of the latest version of the specified page in the
                    // presentation and returns a URL to the thumbnail image.
                    // This request counts as an [expensive read request](/slides/limits) for
                    // quota purposes.
                    getThumbnail(
                        presentationId: string,
                        pageObjectId: string,
                        optionalArgs: object,
                    ): Slides.Schema.Thumbnail;
                }
            }
            interface PresentationsCollection {
                Pages?: Slides.Collection.Presentations.PagesCollection | undefined;
                // Applies one or more updates to the presentation.
                // Each request is validated before
                // being applied. If any request is not valid, then the entire request will
                // fail and nothing will be applied.
                // Some requests have replies to
                // give you some information about how they are applied. Other requests do
                // not need to return information; these each return an empty reply.
                // The order of replies matches that of the requests.
                // For example, suppose you call batchUpdate with four updates, and only the
                // third one returns information. The response would have two empty replies:
                // the reply to the third request, and another empty reply, in that order.
                // Because other users may be editing the presentation, the presentation
                // might not exactly reflect your changes: your changes may
                // be altered with respect to collaborator changes. If there are no
                // collaborators, the presentation should reflect your changes. In any case,
                // the updates in your request are guaranteed to be applied together
                // atomically.
                batchUpdate(
                    resource: Schema.BatchUpdatePresentationRequest,
                    presentationId: string,
                ): Slides.Schema.BatchUpdatePresentationResponse;
                // Creates a blank presentation using the title given in the request. If a
                // `presentationId` is provided, it is used as the ID of the new presentation.
                // Otherwise, a new ID is generated. Other fields in the request, including
                // any provided content, are ignored.
                // Returns the created presentation.
                create(resource: Schema.Presentation): Slides.Schema.Presentation;
                // Gets the latest version of the specified presentation.
                get(presentationId: string): Slides.Schema.Presentation;
            }
        }
        namespace Schema {
            interface AffineTransform {
                scaleX?: number | undefined;
                scaleY?: number | undefined;
                shearX?: number | undefined;
                shearY?: number | undefined;
                translateX?: number | undefined;
                translateY?: number | undefined;
                unit?: string | undefined;
            }
            interface AutoText {
                content?: string | undefined;
                style?: Slides.Schema.TextStyle | undefined;
                type?: string | undefined;
            }
            interface BatchUpdatePresentationRequest {
                requests?: Slides.Schema.Request[] | undefined;
                writeControl?: Slides.Schema.WriteControl | undefined;
            }
            interface BatchUpdatePresentationResponse {
                presentationId?: string | undefined;
                replies?: Slides.Schema.Response[] | undefined;
                writeControl?: Slides.Schema.WriteControl | undefined;
            }
            interface Bullet {
                bulletStyle?: Slides.Schema.TextStyle | undefined;
                glyph?: string | undefined;
                listId?: string | undefined;
                nestingLevel?: number | undefined;
            }
            interface ColorScheme {
                colors?: Slides.Schema.ThemeColorPair[] | undefined;
            }
            interface ColorStop {
                alpha?: number | undefined;
                color?: Slides.Schema.OpaqueColor | undefined;
                position?: number | undefined;
            }
            interface CreateImageRequest {
                elementProperties?: Slides.Schema.PageElementProperties | undefined;
                objectId?: string | undefined;
                url?: string | undefined;
            }
            interface CreateImageResponse {
                objectId?: string | undefined;
            }
            interface CreateLineRequest {
                category?: string | undefined;
                elementProperties?: Slides.Schema.PageElementProperties | undefined;
                lineCategory?: string | undefined;
                objectId?: string | undefined;
            }
            interface CreateLineResponse {
                objectId?: string | undefined;
            }
            interface CreateParagraphBulletsRequest {
                bulletPreset?: string | undefined;
                cellLocation?: Slides.Schema.TableCellLocation | undefined;
                objectId?: string | undefined;
                textRange?: Slides.Schema.Range | undefined;
            }
            interface CreateShapeRequest {
                elementProperties?: Slides.Schema.PageElementProperties | undefined;
                objectId?: string | undefined;
                shapeType?: string | undefined;
            }
            interface CreateShapeResponse {
                objectId?: string | undefined;
            }
            interface CreateSheetsChartRequest {
                chartId?: number | undefined;
                elementProperties?: Slides.Schema.PageElementProperties | undefined;
                linkingMode?: string | undefined;
                objectId?: string | undefined;
                spreadsheetId?: string | undefined;
            }
            interface CreateSheetsChartResponse {
                objectId?: string | undefined;
            }
            interface CreateSlideRequest {
                insertionIndex?: number | undefined;
                objectId?: string | undefined;
                placeholderIdMappings?: Slides.Schema.LayoutPlaceholderIdMapping[] | undefined;
                slideLayoutReference?: Slides.Schema.LayoutReference | undefined;
            }
            interface CreateSlideResponse {
                objectId?: string | undefined;
            }
            interface CreateTableRequest {
                columns?: number | undefined;
                elementProperties?: Slides.Schema.PageElementProperties | undefined;
                objectId?: string | undefined;
                rows?: number | undefined;
            }
            interface CreateTableResponse {
                objectId?: string | undefined;
            }
            interface CreateVideoRequest {
                elementProperties?: Slides.Schema.PageElementProperties | undefined;
                id?: string | undefined;
                objectId?: string | undefined;
                source?: string | undefined;
            }
            interface CreateVideoResponse {
                objectId?: string | undefined;
            }
            interface CropProperties {
                angle?: number | undefined;
                bottomOffset?: number | undefined;
                leftOffset?: number | undefined;
                rightOffset?: number | undefined;
                topOffset?: number | undefined;
            }
            interface DeleteObjectRequest {
                objectId?: string | undefined;
            }
            interface DeleteParagraphBulletsRequest {
                cellLocation?: Slides.Schema.TableCellLocation | undefined;
                objectId?: string | undefined;
                textRange?: Slides.Schema.Range | undefined;
            }
            interface DeleteTableColumnRequest {
                cellLocation?: Slides.Schema.TableCellLocation | undefined;
                tableObjectId?: string | undefined;
            }
            interface DeleteTableRowRequest {
                cellLocation?: Slides.Schema.TableCellLocation | undefined;
                tableObjectId?: string | undefined;
            }
            interface DeleteTextRequest {
                cellLocation?: Slides.Schema.TableCellLocation | undefined;
                objectId?: string | undefined;
                textRange?: Slides.Schema.Range | undefined;
            }
            interface Dimension {
                magnitude?: number | undefined;
                unit?: string | undefined;
            }
            interface DuplicateObjectRequest {
                objectId?: string | undefined;
                objectIds?: object | undefined;
            }
            interface DuplicateObjectResponse {
                objectId?: string | undefined;
            }
            interface Group {
                children?: Slides.Schema.PageElement[] | undefined;
            }
            interface GroupObjectsRequest {
                childrenObjectIds?: string[] | undefined;
                groupObjectId?: string | undefined;
            }
            interface GroupObjectsResponse {
                objectId?: string | undefined;
            }
            interface Image {
                contentUrl?: string | undefined;
                imageProperties?: Slides.Schema.ImageProperties | undefined;
                sourceUrl?: string | undefined;
            }
            interface ImageProperties {
                brightness?: number | undefined;
                contrast?: number | undefined;
                cropProperties?: Slides.Schema.CropProperties | undefined;
                link?: Slides.Schema.Link | undefined;
                outline?: Slides.Schema.Outline | undefined;
                recolor?: Slides.Schema.Recolor | undefined;
                shadow?: Slides.Schema.Shadow | undefined;
                transparency?: number | undefined;
            }
            interface InsertTableColumnsRequest {
                cellLocation?: Slides.Schema.TableCellLocation | undefined;
                insertRight?: boolean | undefined;
                number?: number | undefined;
                tableObjectId?: string | undefined;
            }
            interface InsertTableRowsRequest {
                cellLocation?: Slides.Schema.TableCellLocation | undefined;
                insertBelow?: boolean | undefined;
                number?: number | undefined;
                tableObjectId?: string | undefined;
            }
            interface InsertTextRequest {
                cellLocation?: Slides.Schema.TableCellLocation | undefined;
                insertionIndex?: number | undefined;
                objectId?: string | undefined;
                text?: string | undefined;
            }
            interface LayoutPlaceholderIdMapping {
                layoutPlaceholder?: Slides.Schema.Placeholder | undefined;
                layoutPlaceholderObjectId?: string | undefined;
                objectId?: string | undefined;
            }
            interface LayoutProperties {
                displayName?: string | undefined;
                masterObjectId?: string | undefined;
                name?: string | undefined;
            }
            interface LayoutReference {
                layoutId?: string | undefined;
                predefinedLayout?: string | undefined;
            }
            interface Line {
                lineCategory?: string | undefined;
                lineProperties?: Slides.Schema.LineProperties | undefined;
                lineType?: string | undefined;
            }
            interface LineConnection {
                connectedObjectId?: string | undefined;
                connectionSiteIndex?: number | undefined;
            }
            interface LineFill {
                solidFill?: Slides.Schema.SolidFill | undefined;
            }
            interface LineProperties {
                dashStyle?: string | undefined;
                endArrow?: string | undefined;
                endConnection?: Slides.Schema.LineConnection | undefined;
                lineFill?: Slides.Schema.LineFill | undefined;
                link?: Slides.Schema.Link | undefined;
                startArrow?: string | undefined;
                startConnection?: Slides.Schema.LineConnection | undefined;
                weight?: Slides.Schema.Dimension | undefined;
            }
            interface Link {
                pageObjectId?: string | undefined;
                relativeLink?: string | undefined;
                slideIndex?: number | undefined;
                url?: string | undefined;
            }
            interface List {
                listId?: string | undefined;
                nestingLevel?: object | undefined;
            }
            interface MasterProperties {
                displayName?: string | undefined;
            }
            interface MergeTableCellsRequest {
                objectId?: string | undefined;
                tableRange?: Slides.Schema.TableRange | undefined;
            }
            interface NestingLevel {
                bulletStyle?: Slides.Schema.TextStyle | undefined;
            }
            interface NotesProperties {
                speakerNotesObjectId?: string | undefined;
            }
            interface OpaqueColor {
                rgbColor?: Slides.Schema.RgbColor | undefined;
                themeColor?: string | undefined;
            }
            interface OptionalColor {
                opaqueColor?: Slides.Schema.OpaqueColor | undefined;
            }
            interface Outline {
                dashStyle?: string | undefined;
                outlineFill?: Slides.Schema.OutlineFill | undefined;
                propertyState?: string | undefined;
                weight?: Slides.Schema.Dimension | undefined;
            }
            interface OutlineFill {
                solidFill?: Slides.Schema.SolidFill | undefined;
            }
            interface Page {
                layoutProperties?: Slides.Schema.LayoutProperties | undefined;
                masterProperties?: Slides.Schema.MasterProperties | undefined;
                notesProperties?: Slides.Schema.NotesProperties | undefined;
                objectId?: string | undefined;
                pageElements?: Slides.Schema.PageElement[] | undefined;
                pageProperties?: Slides.Schema.PageProperties | undefined;
                pageType?: string | undefined;
                revisionId?: string | undefined;
                slideProperties?: Slides.Schema.SlideProperties | undefined;
            }
            interface PageBackgroundFill {
                propertyState?: string | undefined;
                solidFill?: Slides.Schema.SolidFill | undefined;
                stretchedPictureFill?: Slides.Schema.StretchedPictureFill | undefined;
            }
            interface PageElement {
                description?: string | undefined;
                elementGroup?: Slides.Schema.Group | undefined;
                image?: Slides.Schema.Image | undefined;
                line?: Slides.Schema.Line | undefined;
                objectId?: string | undefined;
                shape?: Slides.Schema.Shape | undefined;
                sheetsChart?: Slides.Schema.SheetsChart | undefined;
                size?: Slides.Schema.Size | undefined;
                table?: Slides.Schema.Table | undefined;
                title?: string | undefined;
                transform?: Slides.Schema.AffineTransform | undefined;
                video?: Slides.Schema.Video | undefined;
                wordArt?: Slides.Schema.WordArt | undefined;
            }
            interface PageElementProperties {
                pageObjectId?: string | undefined;
                size?: Slides.Schema.Size | undefined;
                transform?: Slides.Schema.AffineTransform | undefined;
            }
            interface PageProperties {
                colorScheme?: Slides.Schema.ColorScheme | undefined;
                pageBackgroundFill?: Slides.Schema.PageBackgroundFill | undefined;
            }
            interface ParagraphMarker {
                bullet?: Slides.Schema.Bullet | undefined;
                style?: Slides.Schema.ParagraphStyle | undefined;
            }
            interface ParagraphStyle {
                alignment?: string | undefined;
                direction?: string | undefined;
                indentEnd?: Slides.Schema.Dimension | undefined;
                indentFirstLine?: Slides.Schema.Dimension | undefined;
                indentStart?: Slides.Schema.Dimension | undefined;
                lineSpacing?: number | undefined;
                spaceAbove?: Slides.Schema.Dimension | undefined;
                spaceBelow?: Slides.Schema.Dimension | undefined;
                spacingMode?: string | undefined;
            }
            interface Placeholder {
                index?: number | undefined;
                parentObjectId?: string | undefined;
                type?: string | undefined;
            }
            interface Presentation {
                layouts?: Slides.Schema.Page[] | undefined;
                locale?: string | undefined;
                masters?: Slides.Schema.Page[] | undefined;
                notesMaster?: Slides.Schema.Page | undefined;
                pageSize?: Slides.Schema.Size | undefined;
                presentationId?: string | undefined;
                revisionId?: string | undefined;
                slides?: Slides.Schema.Page[] | undefined;
                title?: string | undefined;
            }
            interface Range {
                endIndex?: number | undefined;
                startIndex?: number | undefined;
                type?: string | undefined;
            }
            interface Recolor {
                name?: string | undefined;
                recolorStops?: Slides.Schema.ColorStop[] | undefined;
            }
            interface RefreshSheetsChartRequest {
                objectId?: string | undefined;
            }
            interface ReplaceAllShapesWithImageRequest {
                containsText?: Slides.Schema.SubstringMatchCriteria | undefined;
                imageReplaceMethod?: string | undefined;
                imageUrl?: string | undefined;
                pageObjectIds?: string[] | undefined;
                replaceMethod?: string | undefined;
            }
            interface ReplaceAllShapesWithImageResponse {
                occurrencesChanged?: number | undefined;
            }
            interface ReplaceAllShapesWithSheetsChartRequest {
                chartId?: number | undefined;
                containsText?: Slides.Schema.SubstringMatchCriteria | undefined;
                linkingMode?: string | undefined;
                pageObjectIds?: string[] | undefined;
                spreadsheetId?: string | undefined;
            }
            interface ReplaceAllShapesWithSheetsChartResponse {
                occurrencesChanged?: number | undefined;
            }
            interface ReplaceAllTextRequest {
                containsText?: Slides.Schema.SubstringMatchCriteria | undefined;
                pageObjectIds?: string[] | undefined;
                replaceText?: string | undefined;
            }
            interface ReplaceAllTextResponse {
                occurrencesChanged?: number | undefined;
            }
            interface ReplaceImageRequest {
                imageObjectId?: string | undefined;
                imageReplaceMethod?: string | undefined;
                url?: string | undefined;
            }
            interface Request {
                createImage?: Slides.Schema.CreateImageRequest | undefined;
                createLine?: Slides.Schema.CreateLineRequest | undefined;
                createParagraphBullets?: Slides.Schema.CreateParagraphBulletsRequest | undefined;
                createShape?: Slides.Schema.CreateShapeRequest | undefined;
                createSheetsChart?: Slides.Schema.CreateSheetsChartRequest | undefined;
                createSlide?: Slides.Schema.CreateSlideRequest | undefined;
                createTable?: Slides.Schema.CreateTableRequest | undefined;
                createVideo?: Slides.Schema.CreateVideoRequest | undefined;
                deleteObject?: Slides.Schema.DeleteObjectRequest | undefined;
                deleteParagraphBullets?: Slides.Schema.DeleteParagraphBulletsRequest | undefined;
                deleteTableColumn?: Slides.Schema.DeleteTableColumnRequest | undefined;
                deleteTableRow?: Slides.Schema.DeleteTableRowRequest | undefined;
                deleteText?: Slides.Schema.DeleteTextRequest | undefined;
                duplicateObject?: Slides.Schema.DuplicateObjectRequest | undefined;
                groupObjects?: Slides.Schema.GroupObjectsRequest | undefined;
                insertTableColumns?: Slides.Schema.InsertTableColumnsRequest | undefined;
                insertTableRows?: Slides.Schema.InsertTableRowsRequest | undefined;
                insertText?: Slides.Schema.InsertTextRequest | undefined;
                mergeTableCells?: Slides.Schema.MergeTableCellsRequest | undefined;
                refreshSheetsChart?: Slides.Schema.RefreshSheetsChartRequest | undefined;
                replaceAllShapesWithImage?: Slides.Schema.ReplaceAllShapesWithImageRequest | undefined;
                replaceAllShapesWithSheetsChart?: Slides.Schema.ReplaceAllShapesWithSheetsChartRequest | undefined;
                replaceAllText?: Slides.Schema.ReplaceAllTextRequest | undefined;
                replaceImage?: Slides.Schema.ReplaceImageRequest | undefined;
                rerouteLine?: Slides.Schema.RerouteLineRequest | undefined;
                ungroupObjects?: Slides.Schema.UngroupObjectsRequest | undefined;
                unmergeTableCells?: Slides.Schema.UnmergeTableCellsRequest | undefined;
                updateImageProperties?: Slides.Schema.UpdateImagePropertiesRequest | undefined;
                updateLineCategory?: Slides.Schema.UpdateLineCategoryRequest | undefined;
                updateLineProperties?: Slides.Schema.UpdateLinePropertiesRequest | undefined;
                updatePageElementAltText?: Slides.Schema.UpdatePageElementAltTextRequest | undefined;
                updatePageElementTransform?: Slides.Schema.UpdatePageElementTransformRequest | undefined;
                updatePageElementsZOrder?: Slides.Schema.UpdatePageElementsZOrderRequest | undefined;
                updatePageProperties?: Slides.Schema.UpdatePagePropertiesRequest | undefined;
                updateParagraphStyle?: Slides.Schema.UpdateParagraphStyleRequest | undefined;
                updateShapeProperties?: Slides.Schema.UpdateShapePropertiesRequest | undefined;
                updateSlidesPosition?: Slides.Schema.UpdateSlidesPositionRequest | undefined;
                updateTableBorderProperties?: Slides.Schema.UpdateTableBorderPropertiesRequest | undefined;
                updateTableCellProperties?: Slides.Schema.UpdateTableCellPropertiesRequest | undefined;
                updateTableColumnProperties?: Slides.Schema.UpdateTableColumnPropertiesRequest | undefined;
                updateTableRowProperties?: Slides.Schema.UpdateTableRowPropertiesRequest | undefined;
                updateTextStyle?: Slides.Schema.UpdateTextStyleRequest | undefined;
                updateVideoProperties?: Slides.Schema.UpdateVideoPropertiesRequest | undefined;
            }
            interface RerouteLineRequest {
                objectId?: string | undefined;
            }
            interface Response {
                createImage?: Slides.Schema.CreateImageResponse | undefined;
                createLine?: Slides.Schema.CreateLineResponse | undefined;
                createShape?: Slides.Schema.CreateShapeResponse | undefined;
                createSheetsChart?: Slides.Schema.CreateSheetsChartResponse | undefined;
                createSlide?: Slides.Schema.CreateSlideResponse | undefined;
                createTable?: Slides.Schema.CreateTableResponse | undefined;
                createVideo?: Slides.Schema.CreateVideoResponse | undefined;
                duplicateObject?: Slides.Schema.DuplicateObjectResponse | undefined;
                groupObjects?: Slides.Schema.GroupObjectsResponse | undefined;
                replaceAllShapesWithImage?: Slides.Schema.ReplaceAllShapesWithImageResponse | undefined;
                replaceAllShapesWithSheetsChart?: Slides.Schema.ReplaceAllShapesWithSheetsChartResponse | undefined;
                replaceAllText?: Slides.Schema.ReplaceAllTextResponse | undefined;
            }
            interface RgbColor {
                blue?: number | undefined;
                green?: number | undefined;
                red?: number | undefined;
            }
            interface Shadow {
                alignment?: string | undefined;
                alpha?: number | undefined;
                blurRadius?: Slides.Schema.Dimension | undefined;
                color?: Slides.Schema.OpaqueColor | undefined;
                propertyState?: string | undefined;
                rotateWithShape?: boolean | undefined;
                transform?: Slides.Schema.AffineTransform | undefined;
                type?: string | undefined;
            }
            interface Shape {
                placeholder?: Slides.Schema.Placeholder | undefined;
                shapeProperties?: Slides.Schema.ShapeProperties | undefined;
                shapeType?: string | undefined;
                text?: Slides.Schema.TextContent | undefined;
            }
            interface ShapeBackgroundFill {
                propertyState?: string | undefined;
                solidFill?: Slides.Schema.SolidFill | undefined;
            }
            interface ShapeProperties {
                contentAlignment?: string | undefined;
                link?: Slides.Schema.Link | undefined;
                outline?: Slides.Schema.Outline | undefined;
                shadow?: Slides.Schema.Shadow | undefined;
                shapeBackgroundFill?: Slides.Schema.ShapeBackgroundFill | undefined;
            }
            interface SheetsChart {
                chartId?: number | undefined;
                contentUrl?: string | undefined;
                sheetsChartProperties?: Slides.Schema.SheetsChartProperties | undefined;
                spreadsheetId?: string | undefined;
            }
            interface SheetsChartProperties {
                chartImageProperties?: Slides.Schema.ImageProperties | undefined;
            }
            interface Size {
                height?: Slides.Schema.Dimension | undefined;
                width?: Slides.Schema.Dimension | undefined;
            }
            interface SlideProperties {
                layoutObjectId?: string | undefined;
                masterObjectId?: string | undefined;
                notesPage?: Slides.Schema.Page | undefined;
            }
            interface SolidFill {
                alpha?: number | undefined;
                color?: Slides.Schema.OpaqueColor | undefined;
            }
            interface StretchedPictureFill {
                contentUrl?: string | undefined;
                size?: Slides.Schema.Size | undefined;
            }
            interface SubstringMatchCriteria {
                matchCase?: boolean | undefined;
                text?: string | undefined;
            }
            interface Table {
                columns?: number | undefined;
                horizontalBorderRows?: Slides.Schema.TableBorderRow[] | undefined;
                rows?: number | undefined;
                tableColumns?: Slides.Schema.TableColumnProperties[] | undefined;
                tableRows?: Slides.Schema.TableRow[] | undefined;
                verticalBorderRows?: Slides.Schema.TableBorderRow[] | undefined;
            }
            interface TableBorderCell {
                location?: Slides.Schema.TableCellLocation | undefined;
                tableBorderProperties?: Slides.Schema.TableBorderProperties | undefined;
            }
            interface TableBorderFill {
                solidFill?: Slides.Schema.SolidFill | undefined;
            }
            interface TableBorderProperties {
                dashStyle?: string | undefined;
                tableBorderFill?: Slides.Schema.TableBorderFill | undefined;
                weight?: Slides.Schema.Dimension | undefined;
            }
            interface TableBorderRow {
                tableBorderCells?: Slides.Schema.TableBorderCell[] | undefined;
            }
            interface TableCell {
                columnSpan?: number | undefined;
                location?: Slides.Schema.TableCellLocation | undefined;
                rowSpan?: number | undefined;
                tableCellProperties?: Slides.Schema.TableCellProperties | undefined;
                text?: Slides.Schema.TextContent | undefined;
            }
            interface TableCellBackgroundFill {
                propertyState?: string | undefined;
                solidFill?: Slides.Schema.SolidFill | undefined;
            }
            interface TableCellLocation {
                columnIndex?: number | undefined;
                rowIndex?: number | undefined;
            }
            interface TableCellProperties {
                contentAlignment?: string | undefined;
                tableCellBackgroundFill?: Slides.Schema.TableCellBackgroundFill | undefined;
            }
            interface TableColumnProperties {
                columnWidth?: Slides.Schema.Dimension | undefined;
            }
            interface TableRange {
                columnSpan?: number | undefined;
                location?: Slides.Schema.TableCellLocation | undefined;
                rowSpan?: number | undefined;
            }
            interface TableRow {
                rowHeight?: Slides.Schema.Dimension | undefined;
                tableCells?: Slides.Schema.TableCell[] | undefined;
                tableRowProperties?: Slides.Schema.TableRowProperties | undefined;
            }
            interface TableRowProperties {
                minRowHeight?: Slides.Schema.Dimension | undefined;
            }
            interface TextContent {
                lists?: object | undefined;
                textElements?: Slides.Schema.TextElement[] | undefined;
            }
            interface TextElement {
                autoText?: Slides.Schema.AutoText | undefined;
                endIndex?: number | undefined;
                paragraphMarker?: Slides.Schema.ParagraphMarker | undefined;
                startIndex?: number | undefined;
                textRun?: Slides.Schema.TextRun | undefined;
            }
            interface TextRun {
                content?: string | undefined;
                style?: Slides.Schema.TextStyle | undefined;
            }
            interface TextStyle {
                backgroundColor?: Slides.Schema.OptionalColor | undefined;
                baselineOffset?: string | undefined;
                bold?: boolean | undefined;
                fontFamily?: string | undefined;
                fontSize?: Slides.Schema.Dimension | undefined;
                foregroundColor?: Slides.Schema.OptionalColor | undefined;
                italic?: boolean | undefined;
                link?: Slides.Schema.Link | undefined;
                smallCaps?: boolean | undefined;
                strikethrough?: boolean | undefined;
                underline?: boolean | undefined;
                weightedFontFamily?: Slides.Schema.WeightedFontFamily | undefined;
            }
            interface ThemeColorPair {
                color?: Slides.Schema.RgbColor | undefined;
                type?: string | undefined;
            }
            interface Thumbnail {
                contentUrl?: string | undefined;
                height?: number | undefined;
                width?: number | undefined;
            }
            interface UngroupObjectsRequest {
                objectIds?: string[] | undefined;
            }
            interface UnmergeTableCellsRequest {
                objectId?: string | undefined;
                tableRange?: Slides.Schema.TableRange | undefined;
            }
            interface UpdateImagePropertiesRequest {
                fields?: string | undefined;
                imageProperties?: Slides.Schema.ImageProperties | undefined;
                objectId?: string | undefined;
            }
            interface UpdateLineCategoryRequest {
                lineCategory?: string | undefined;
                objectId?: string | undefined;
            }
            interface UpdateLinePropertiesRequest {
                fields?: string | undefined;
                lineProperties?: Slides.Schema.LineProperties | undefined;
                objectId?: string | undefined;
            }
            interface UpdatePageElementAltTextRequest {
                description?: string | undefined;
                objectId?: string | undefined;
                title?: string | undefined;
            }
            interface UpdatePageElementTransformRequest {
                applyMode?: string | undefined;
                objectId?: string | undefined;
                transform?: Slides.Schema.AffineTransform | undefined;
            }
            interface UpdatePageElementsZOrderRequest {
                operation?: string | undefined;
                pageElementObjectIds?: string[] | undefined;
            }
            interface UpdatePagePropertiesRequest {
                fields?: string | undefined;
                objectId?: string | undefined;
                pageProperties?: Slides.Schema.PageProperties | undefined;
            }
            interface UpdateParagraphStyleRequest {
                cellLocation?: Slides.Schema.TableCellLocation | undefined;
                fields?: string | undefined;
                objectId?: string | undefined;
                style?: Slides.Schema.ParagraphStyle | undefined;
                textRange?: Slides.Schema.Range | undefined;
            }
            interface UpdateShapePropertiesRequest {
                fields?: string | undefined;
                objectId?: string | undefined;
                shapeProperties?: Slides.Schema.ShapeProperties | undefined;
            }
            interface UpdateSlidesPositionRequest {
                insertionIndex?: number | undefined;
                slideObjectIds?: string[] | undefined;
            }
            interface UpdateTableBorderPropertiesRequest {
                borderPosition?: string | undefined;
                fields?: string | undefined;
                objectId?: string | undefined;
                tableBorderProperties?: Slides.Schema.TableBorderProperties | undefined;
                tableRange?: Slides.Schema.TableRange | undefined;
            }
            interface UpdateTableCellPropertiesRequest {
                fields?: string | undefined;
                objectId?: string | undefined;
                tableCellProperties?: Slides.Schema.TableCellProperties | undefined;
                tableRange?: Slides.Schema.TableRange | undefined;
            }
            interface UpdateTableColumnPropertiesRequest {
                columnIndices?: number[] | undefined;
                fields?: string | undefined;
                objectId?: string | undefined;
                tableColumnProperties?: Slides.Schema.TableColumnProperties | undefined;
            }
            interface UpdateTableRowPropertiesRequest {
                fields?: string | undefined;
                objectId?: string | undefined;
                rowIndices?: number[] | undefined;
                tableRowProperties?: Slides.Schema.TableRowProperties | undefined;
            }
            interface UpdateTextStyleRequest {
                cellLocation?: Slides.Schema.TableCellLocation | undefined;
                fields?: string | undefined;
                objectId?: string | undefined;
                style?: Slides.Schema.TextStyle | undefined;
                textRange?: Slides.Schema.Range | undefined;
            }
            interface UpdateVideoPropertiesRequest {
                fields?: string | undefined;
                objectId?: string | undefined;
                videoProperties?: Slides.Schema.VideoProperties | undefined;
            }
            interface Video {
                id?: string | undefined;
                source?: string | undefined;
                url?: string | undefined;
                videoProperties?: Slides.Schema.VideoProperties | undefined;
            }
            interface VideoProperties {
                autoPlay?: boolean | undefined;
                end?: number | undefined;
                mute?: boolean | undefined;
                outline?: Slides.Schema.Outline | undefined;
                start?: number | undefined;
            }
            interface WeightedFontFamily {
                fontFamily?: string | undefined;
                weight?: number | undefined;
            }
            interface WordArt {
                renderedText?: string | undefined;
            }
            interface WriteControl {
                requiredRevisionId?: string | undefined;
            }
        }
    }
    interface Slides {
        Presentations?: Slides.Collection.PresentationsCollection | undefined;
        // Create a new instance of AffineTransform
        newAffineTransform(): Slides.Schema.AffineTransform;
        // Create a new instance of AutoText
        newAutoText(): Slides.Schema.AutoText;
        // Create a new instance of BatchUpdatePresentationRequest
        newBatchUpdatePresentationRequest(): Slides.Schema.BatchUpdatePresentationRequest;
        // Create a new instance of Bullet
        newBullet(): Slides.Schema.Bullet;
        // Create a new instance of ColorScheme
        newColorScheme(): Slides.Schema.ColorScheme;
        // Create a new instance of ColorStop
        newColorStop(): Slides.Schema.ColorStop;
        // Create a new instance of CreateImageRequest
        newCreateImageRequest(): Slides.Schema.CreateImageRequest;
        // Create a new instance of CreateLineRequest
        newCreateLineRequest(): Slides.Schema.CreateLineRequest;
        // Create a new instance of CreateParagraphBulletsRequest
        newCreateParagraphBulletsRequest(): Slides.Schema.CreateParagraphBulletsRequest;
        // Create a new instance of CreateShapeRequest
        newCreateShapeRequest(): Slides.Schema.CreateShapeRequest;
        // Create a new instance of CreateSheetsChartRequest
        newCreateSheetsChartRequest(): Slides.Schema.CreateSheetsChartRequest;
        // Create a new instance of CreateSlideRequest
        newCreateSlideRequest(): Slides.Schema.CreateSlideRequest;
        // Create a new instance of CreateTableRequest
        newCreateTableRequest(): Slides.Schema.CreateTableRequest;
        // Create a new instance of CreateVideoRequest
        newCreateVideoRequest(): Slides.Schema.CreateVideoRequest;
        // Create a new instance of CropProperties
        newCropProperties(): Slides.Schema.CropProperties;
        // Create a new instance of DeleteObjectRequest
        newDeleteObjectRequest(): Slides.Schema.DeleteObjectRequest;
        // Create a new instance of DeleteParagraphBulletsRequest
        newDeleteParagraphBulletsRequest(): Slides.Schema.DeleteParagraphBulletsRequest;
        // Create a new instance of DeleteTableColumnRequest
        newDeleteTableColumnRequest(): Slides.Schema.DeleteTableColumnRequest;
        // Create a new instance of DeleteTableRowRequest
        newDeleteTableRowRequest(): Slides.Schema.DeleteTableRowRequest;
        // Create a new instance of DeleteTextRequest
        newDeleteTextRequest(): Slides.Schema.DeleteTextRequest;
        // Create a new instance of Dimension
        newDimension(): Slides.Schema.Dimension;
        // Create a new instance of DuplicateObjectRequest
        newDuplicateObjectRequest(): Slides.Schema.DuplicateObjectRequest;
        // Create a new instance of Group
        newGroup(): Slides.Schema.Group;
        // Create a new instance of GroupObjectsRequest
        newGroupObjectsRequest(): Slides.Schema.GroupObjectsRequest;
        // Create a new instance of Image
        newImage(): Slides.Schema.Image;
        // Create a new instance of ImageProperties
        newImageProperties(): Slides.Schema.ImageProperties;
        // Create a new instance of InsertTableColumnsRequest
        newInsertTableColumnsRequest(): Slides.Schema.InsertTableColumnsRequest;
        // Create a new instance of InsertTableRowsRequest
        newInsertTableRowsRequest(): Slides.Schema.InsertTableRowsRequest;
        // Create a new instance of InsertTextRequest
        newInsertTextRequest(): Slides.Schema.InsertTextRequest;
        // Create a new instance of LayoutPlaceholderIdMapping
        newLayoutPlaceholderIdMapping(): Slides.Schema.LayoutPlaceholderIdMapping;
        // Create a new instance of LayoutProperties
        newLayoutProperties(): Slides.Schema.LayoutProperties;
        // Create a new instance of LayoutReference
        newLayoutReference(): Slides.Schema.LayoutReference;
        // Create a new instance of Line
        newLine(): Slides.Schema.Line;
        // Create a new instance of LineConnection
        newLineConnection(): Slides.Schema.LineConnection;
        // Create a new instance of LineFill
        newLineFill(): Slides.Schema.LineFill;
        // Create a new instance of LineProperties
        newLineProperties(): Slides.Schema.LineProperties;
        // Create a new instance of Link
        newLink(): Slides.Schema.Link;
        // Create a new instance of MasterProperties
        newMasterProperties(): Slides.Schema.MasterProperties;
        // Create a new instance of MergeTableCellsRequest
        newMergeTableCellsRequest(): Slides.Schema.MergeTableCellsRequest;
        // Create a new instance of NotesProperties
        newNotesProperties(): Slides.Schema.NotesProperties;
        // Create a new instance of OpaqueColor
        newOpaqueColor(): Slides.Schema.OpaqueColor;
        // Create a new instance of OptionalColor
        newOptionalColor(): Slides.Schema.OptionalColor;
        // Create a new instance of Outline
        newOutline(): Slides.Schema.Outline;
        // Create a new instance of OutlineFill
        newOutlineFill(): Slides.Schema.OutlineFill;
        // Create a new instance of Page
        newPage(): Slides.Schema.Page;
        // Create a new instance of PageBackgroundFill
        newPageBackgroundFill(): Slides.Schema.PageBackgroundFill;
        // Create a new instance of PageElement
        newPageElement(): Slides.Schema.PageElement;
        // Create a new instance of PageElementProperties
        newPageElementProperties(): Slides.Schema.PageElementProperties;
        // Create a new instance of PageProperties
        newPageProperties(): Slides.Schema.PageProperties;
        // Create a new instance of ParagraphMarker
        newParagraphMarker(): Slides.Schema.ParagraphMarker;
        // Create a new instance of ParagraphStyle
        newParagraphStyle(): Slides.Schema.ParagraphStyle;
        // Create a new instance of Placeholder
        newPlaceholder(): Slides.Schema.Placeholder;
        // Create a new instance of Presentation
        newPresentation(): Slides.Schema.Presentation;
        // Create a new instance of Range
        newRange(): Slides.Schema.Range;
        // Create a new instance of Recolor
        newRecolor(): Slides.Schema.Recolor;
        // Create a new instance of RefreshSheetsChartRequest
        newRefreshSheetsChartRequest(): Slides.Schema.RefreshSheetsChartRequest;
        // Create a new instance of ReplaceAllShapesWithImageRequest
        newReplaceAllShapesWithImageRequest(): Slides.Schema.ReplaceAllShapesWithImageRequest;
        // Create a new instance of ReplaceAllShapesWithSheetsChartRequest
        newReplaceAllShapesWithSheetsChartRequest(): Slides.Schema.ReplaceAllShapesWithSheetsChartRequest;
        // Create a new instance of ReplaceAllTextRequest
        newReplaceAllTextRequest(): Slides.Schema.ReplaceAllTextRequest;
        // Create a new instance of ReplaceImageRequest
        newReplaceImageRequest(): Slides.Schema.ReplaceImageRequest;
        // Create a new instance of Request
        newRequest(): Slides.Schema.Request;
        // Create a new instance of RerouteLineRequest
        newRerouteLineRequest(): Slides.Schema.RerouteLineRequest;
        // Create a new instance of RgbColor
        newRgbColor(): Slides.Schema.RgbColor;
        // Create a new instance of Shadow
        newShadow(): Slides.Schema.Shadow;
        // Create a new instance of Shape
        newShape(): Slides.Schema.Shape;
        // Create a new instance of ShapeBackgroundFill
        newShapeBackgroundFill(): Slides.Schema.ShapeBackgroundFill;
        // Create a new instance of ShapeProperties
        newShapeProperties(): Slides.Schema.ShapeProperties;
        // Create a new instance of SheetsChart
        newSheetsChart(): Slides.Schema.SheetsChart;
        // Create a new instance of SheetsChartProperties
        newSheetsChartProperties(): Slides.Schema.SheetsChartProperties;
        // Create a new instance of Size
        newSize(): Slides.Schema.Size;
        // Create a new instance of SlideProperties
        newSlideProperties(): Slides.Schema.SlideProperties;
        // Create a new instance of SolidFill
        newSolidFill(): Slides.Schema.SolidFill;
        // Create a new instance of StretchedPictureFill
        newStretchedPictureFill(): Slides.Schema.StretchedPictureFill;
        // Create a new instance of SubstringMatchCriteria
        newSubstringMatchCriteria(): Slides.Schema.SubstringMatchCriteria;
        // Create a new instance of Table
        newTable(): Slides.Schema.Table;
        // Create a new instance of TableBorderCell
        newTableBorderCell(): Slides.Schema.TableBorderCell;
        // Create a new instance of TableBorderFill
        newTableBorderFill(): Slides.Schema.TableBorderFill;
        // Create a new instance of TableBorderProperties
        newTableBorderProperties(): Slides.Schema.TableBorderProperties;
        // Create a new instance of TableBorderRow
        newTableBorderRow(): Slides.Schema.TableBorderRow;
        // Create a new instance of TableCell
        newTableCell(): Slides.Schema.TableCell;
        // Create a new instance of TableCellBackgroundFill
        newTableCellBackgroundFill(): Slides.Schema.TableCellBackgroundFill;
        // Create a new instance of TableCellLocation
        newTableCellLocation(): Slides.Schema.TableCellLocation;
        // Create a new instance of TableCellProperties
        newTableCellProperties(): Slides.Schema.TableCellProperties;
        // Create a new instance of TableColumnProperties
        newTableColumnProperties(): Slides.Schema.TableColumnProperties;
        // Create a new instance of TableRange
        newTableRange(): Slides.Schema.TableRange;
        // Create a new instance of TableRow
        newTableRow(): Slides.Schema.TableRow;
        // Create a new instance of TableRowProperties
        newTableRowProperties(): Slides.Schema.TableRowProperties;
        // Create a new instance of TextContent
        newTextContent(): Slides.Schema.TextContent;
        // Create a new instance of TextElement
        newTextElement(): Slides.Schema.TextElement;
        // Create a new instance of TextRun
        newTextRun(): Slides.Schema.TextRun;
        // Create a new instance of TextStyle
        newTextStyle(): Slides.Schema.TextStyle;
        // Create a new instance of ThemeColorPair
        newThemeColorPair(): Slides.Schema.ThemeColorPair;
        // Create a new instance of UngroupObjectsRequest
        newUngroupObjectsRequest(): Slides.Schema.UngroupObjectsRequest;
        // Create a new instance of UnmergeTableCellsRequest
        newUnmergeTableCellsRequest(): Slides.Schema.UnmergeTableCellsRequest;
        // Create a new instance of UpdateImagePropertiesRequest
        newUpdateImagePropertiesRequest(): Slides.Schema.UpdateImagePropertiesRequest;
        // Create a new instance of UpdateLineCategoryRequest
        newUpdateLineCategoryRequest(): Slides.Schema.UpdateLineCategoryRequest;
        // Create a new instance of UpdateLinePropertiesRequest
        newUpdateLinePropertiesRequest(): Slides.Schema.UpdateLinePropertiesRequest;
        // Create a new instance of UpdatePageElementAltTextRequest
        newUpdatePageElementAltTextRequest(): Slides.Schema.UpdatePageElementAltTextRequest;
        // Create a new instance of UpdatePageElementTransformRequest
        newUpdatePageElementTransformRequest(): Slides.Schema.UpdatePageElementTransformRequest;
        // Create a new instance of UpdatePageElementsZOrderRequest
        newUpdatePageElementsZOrderRequest(): Slides.Schema.UpdatePageElementsZOrderRequest;
        // Create a new instance of UpdatePagePropertiesRequest
        newUpdatePagePropertiesRequest(): Slides.Schema.UpdatePagePropertiesRequest;
        // Create a new instance of UpdateParagraphStyleRequest
        newUpdateParagraphStyleRequest(): Slides.Schema.UpdateParagraphStyleRequest;
        // Create a new instance of UpdateShapePropertiesRequest
        newUpdateShapePropertiesRequest(): Slides.Schema.UpdateShapePropertiesRequest;
        // Create a new instance of UpdateSlidesPositionRequest
        newUpdateSlidesPositionRequest(): Slides.Schema.UpdateSlidesPositionRequest;
        // Create a new instance of UpdateTableBorderPropertiesRequest
        newUpdateTableBorderPropertiesRequest(): Slides.Schema.UpdateTableBorderPropertiesRequest;
        // Create a new instance of UpdateTableCellPropertiesRequest
        newUpdateTableCellPropertiesRequest(): Slides.Schema.UpdateTableCellPropertiesRequest;
        // Create a new instance of UpdateTableColumnPropertiesRequest
        newUpdateTableColumnPropertiesRequest(): Slides.Schema.UpdateTableColumnPropertiesRequest;
        // Create a new instance of UpdateTableRowPropertiesRequest
        newUpdateTableRowPropertiesRequest(): Slides.Schema.UpdateTableRowPropertiesRequest;
        // Create a new instance of UpdateTextStyleRequest
        newUpdateTextStyleRequest(): Slides.Schema.UpdateTextStyleRequest;
        // Create a new instance of UpdateVideoPropertiesRequest
        newUpdateVideoPropertiesRequest(): Slides.Schema.UpdateVideoPropertiesRequest;
        // Create a new instance of Video
        newVideo(): Slides.Schema.Video;
        // Create a new instance of VideoProperties
        newVideoProperties(): Slides.Schema.VideoProperties;
        // Create a new instance of WeightedFontFamily
        newWeightedFontFamily(): Slides.Schema.WeightedFontFamily;
        // Create a new instance of WordArt
        newWordArt(): Slides.Schema.WordArt;
        // Create a new instance of WriteControl
        newWriteControl(): Slides.Schema.WriteControl;
    }
}

declare var Slides: GoogleAppsScript.Slides;
