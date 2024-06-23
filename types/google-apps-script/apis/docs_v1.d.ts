declare namespace GoogleAppsScript {
    namespace Docs {
        namespace Collection {
            interface DocumentsCollection {
                // Applies one or more updates to the document.
                // Each request is validated before
                // being applied. If any request is not valid, then the entire request will
                // fail and nothing will be applied.
                // Some requests have replies to
                // give you some information about how they are applied. Other requests do
                // not need to return information; these each return an empty reply.
                // The order of replies matches that of the requests.
                // For example, suppose you call batchUpdate with four updates, and only the
                // third one returns information. The response would have two empty replies,
                // the reply to the third request, and another empty reply, in that order.
                // Because other users may be editing the document, the document
                // might not exactly reflect your changes: your changes may
                // be altered with respect to collaborator changes. If there are no
                // collaborators, the document should reflect your changes. In any case,
                // the updates in your request are guaranteed to be applied together
                // atomically.
                batchUpdate(
                    resource: Schema.BatchUpdateDocumentRequest,
                    documentId: string,
                ): Docs.Schema.BatchUpdateDocumentResponse;
                // Creates a blank document using the title given in the request. Other fields
                // in the request, including any provided content, are ignored.
                // Returns the created document.
                create(resource: Schema.Document): Docs.Schema.Document;
                // Gets the latest version of the specified document.
                get(documentId: string): Docs.Schema.Document;
                // Gets the latest version of the specified document.
                get(documentId: string, optionalArgs: object): Docs.Schema.Document;
            }
        }
        namespace Schema {
            interface AutoText {
                suggestedDeletionIds?: string[] | undefined;
                suggestedInsertionIds?: string[] | undefined;
                suggestedTextStyleChanges?: object | undefined;
                textStyle?: Docs.Schema.TextStyle | undefined;
                type?: string | undefined;
            }
            interface Background {
                color?: Docs.Schema.OptionalColor | undefined;
            }
            interface BackgroundSuggestionState {
                backgroundColorSuggested?: boolean | undefined;
            }
            interface BatchUpdateDocumentRequest {
                requests?: Docs.Schema.Request[] | undefined;
                writeControl?: Docs.Schema.WriteControl | undefined;
            }
            interface BatchUpdateDocumentResponse {
                documentId?: string | undefined;
                replies?: Docs.Schema.Response[] | undefined;
                writeControl?: Docs.Schema.WriteControl | undefined;
            }
            interface Body {
                content?: Docs.Schema.StructuralElement[] | undefined;
            }
            interface Bullet {
                listId?: string | undefined;
                nestingLevel?: number | undefined;
                textStyle?: Docs.Schema.TextStyle | undefined;
            }
            interface BulletSuggestionState {
                listIdSuggested?: boolean | undefined;
                nestingLevelSuggested?: boolean | undefined;
                textStyleSuggestionState?: Docs.Schema.TextStyleSuggestionState | undefined;
            }
            interface Color {
                rgbColor?: Docs.Schema.RgbColor | undefined;
            }
            interface ColumnBreak {
                suggestedDeletionIds?: string[] | undefined;
                suggestedInsertionIds?: string[] | undefined;
                suggestedTextStyleChanges?: object | undefined;
                textStyle?: Docs.Schema.TextStyle | undefined;
            }
            interface CreateNamedRangeRequest {
                name?: string | undefined;
                range?: Docs.Schema.Range | undefined;
            }
            interface CreateNamedRangeResponse {
                namedRangeId?: string | undefined;
            }
            interface CreateParagraphBulletsRequest {
                bulletPreset?: string | undefined;
                range?: Docs.Schema.Range | undefined;
            }
            interface CropProperties {
                angle?: number | undefined;
                offsetBottom?: number | undefined;
                offsetLeft?: number | undefined;
                offsetRight?: number | undefined;
                offsetTop?: number | undefined;
            }
            interface CropPropertiesSuggestionState {
                angleSuggested?: boolean | undefined;
                offsetBottomSuggested?: boolean | undefined;
                offsetLeftSuggested?: boolean | undefined;
                offsetRightSuggested?: boolean | undefined;
                offsetTopSuggested?: boolean | undefined;
            }
            interface DeleteContentRangeRequest {
                range?: Docs.Schema.Range | undefined;
            }
            interface DeleteNamedRangeRequest {
                name?: string | undefined;
                namedRangeId?: string | undefined;
            }
            interface DeleteParagraphBulletsRequest {
                range?: Docs.Schema.Range | undefined;
            }
            interface DeletePositionedObjectRequest {
                objectId?: string | undefined;
            }
            interface DeleteTableColumnRequest {
                tableCellLocation?: Docs.Schema.TableCellLocation | undefined;
            }
            interface DeleteTableRowRequest {
                tableCellLocation?: Docs.Schema.TableCellLocation | undefined;
            }
            interface Dimension {
                magnitude?: number | undefined;
                unit?: string | undefined;
            }
            interface Document {
                body?: Docs.Schema.Body | undefined;
                documentId?: string | undefined;
                documentStyle?: Docs.Schema.DocumentStyle | undefined;
                footers?: object | undefined;
                footnotes?: object | undefined;
                headers?: object | undefined;
                inlineObjects?: object | undefined;
                lists?: object | undefined;
                namedRanges?: object | undefined;
                namedStyles?: Docs.Schema.NamedStyles | undefined;
                positionedObjects?: object | undefined;
                revisionId?: string | undefined;
                suggestedDocumentStyleChanges?: object | undefined;
                suggestedNamedStylesChanges?: object | undefined;
                suggestionsViewMode?: string | undefined;
                title?: string | undefined;
            }
            interface DocumentStyle {
                background?: Docs.Schema.Background | undefined;
                defaultFooterId?: string | undefined;
                defaultHeaderId?: string | undefined;
                evenPageFooterId?: string | undefined;
                evenPageHeaderId?: string | undefined;
                firstPageFooterId?: string | undefined;
                firstPageHeaderId?: string | undefined;
                marginBottom?: Docs.Schema.Dimension | undefined;
                marginLeft?: Docs.Schema.Dimension | undefined;
                marginRight?: Docs.Schema.Dimension | undefined;
                marginTop?: Docs.Schema.Dimension | undefined;
                pageNumberStart?: number | undefined;
                pageSize?: Docs.Schema.Size | undefined;
                useEvenPageHeaderFooter?: boolean | undefined;
                useFirstPageHeaderFooter?: boolean | undefined;
            }
            interface DocumentStyleSuggestionState {
                backgroundSuggestionState?: Docs.Schema.BackgroundSuggestionState | undefined;
                defaultFooterIdSuggested?: boolean | undefined;
                defaultHeaderIdSuggested?: boolean | undefined;
                evenPageFooterIdSuggested?: boolean | undefined;
                evenPageHeaderIdSuggested?: boolean | undefined;
                firstPageFooterIdSuggested?: boolean | undefined;
                firstPageHeaderIdSuggested?: boolean | undefined;
                marginBottomSuggested?: boolean | undefined;
                marginLeftSuggested?: boolean | undefined;
                marginRightSuggested?: boolean | undefined;
                marginTopSuggested?: boolean | undefined;
                pageNumberStartSuggested?: boolean | undefined;
                pageSizeSuggestionState?: Docs.Schema.SizeSuggestionState | undefined;
                useEvenPageHeaderFooterSuggested?: boolean | undefined;
                useFirstPageHeaderFooterSuggested?: boolean | undefined;
            }
            interface EmbeddedObject {
                description?: string | undefined;
                embeddedDrawingProperties?: any;
                embeddedObjectBorder?: Docs.Schema.EmbeddedObjectBorder | undefined;
                imageProperties?: Docs.Schema.ImageProperties | undefined;
                linkedContentReference?: Docs.Schema.LinkedContentReference | undefined;
                marginBottom?: Docs.Schema.Dimension | undefined;
                marginLeft?: Docs.Schema.Dimension | undefined;
                marginRight?: Docs.Schema.Dimension | undefined;
                marginTop?: Docs.Schema.Dimension | undefined;
                size?: Docs.Schema.Size | undefined;
                title?: string | undefined;
            }
            interface EmbeddedObjectBorder {
                color?: Docs.Schema.OptionalColor | undefined;
                dashStyle?: string | undefined;
                propertyState?: string | undefined;
                width?: Docs.Schema.Dimension | undefined;
            }
            interface EmbeddedObjectBorderSuggestionState {
                colorSuggested?: boolean | undefined;
                dashStyleSuggested?: boolean | undefined;
                propertyStateSuggested?: boolean | undefined;
                widthSuggested?: boolean | undefined;
            }
            interface EmbeddedObjectSuggestionState {
                descriptionSuggested?: boolean | undefined;
                embeddedDrawingPropertiesSuggestionState?: any;
                embeddedObjectBorderSuggestionState?: Docs.Schema.EmbeddedObjectBorderSuggestionState | undefined;
                imagePropertiesSuggestionState?: Docs.Schema.ImagePropertiesSuggestionState | undefined;
                linkedContentReferenceSuggestionState?: Docs.Schema.LinkedContentReferenceSuggestionState | undefined;
                marginBottomSuggested?: boolean | undefined;
                marginLeftSuggested?: boolean | undefined;
                marginRightSuggested?: boolean | undefined;
                marginTopSuggested?: boolean | undefined;
                sizeSuggestionState?: Docs.Schema.SizeSuggestionState | undefined;
                titleSuggested?: boolean | undefined;
            }
            interface EndOfSegmentLocation {
                segmentId?: string | undefined;
            }
            interface Equation {
                suggestedDeletionIds?: string[] | undefined;
                suggestedInsertionIds?: string[] | undefined;
            }
            interface Footer {
                content?: Docs.Schema.StructuralElement[] | undefined;
                footerId?: string | undefined;
            }
            interface Footnote {
                content?: Docs.Schema.StructuralElement[] | undefined;
                footnoteId?: string | undefined;
            }
            interface FootnoteReference {
                footnoteId?: string | undefined;
                footnoteNumber?: string | undefined;
                suggestedDeletionIds?: string[] | undefined;
                suggestedInsertionIds?: string[] | undefined;
                suggestedTextStyleChanges?: object | undefined;
                textStyle?: Docs.Schema.TextStyle | undefined;
            }
            interface Header {
                content?: Docs.Schema.StructuralElement[] | undefined;
                headerId?: string | undefined;
            }
            interface HorizontalRule {
                suggestedDeletionIds?: string[] | undefined;
                suggestedInsertionIds?: string[] | undefined;
                suggestedTextStyleChanges?: object | undefined;
                textStyle?: Docs.Schema.TextStyle | undefined;
            }
            interface ImageProperties {
                angle?: number | undefined;
                brightness?: number | undefined;
                contentUri?: string | undefined;
                contrast?: number | undefined;
                cropProperties?: Docs.Schema.CropProperties | undefined;
                sourceUri?: string | undefined;
                transparency?: number | undefined;
            }
            interface ImagePropertiesSuggestionState {
                angleSuggested?: boolean | undefined;
                brightnessSuggested?: boolean | undefined;
                contentUriSuggested?: boolean | undefined;
                contrastSuggested?: boolean | undefined;
                cropPropertiesSuggestionState?: Docs.Schema.CropPropertiesSuggestionState | undefined;
                sourceUriSuggested?: boolean | undefined;
                transparencySuggested?: boolean | undefined;
            }
            interface InlineObject {
                inlineObjectProperties?: Docs.Schema.InlineObjectProperties | undefined;
                objectId?: string | undefined;
                suggestedDeletionIds?: string[] | undefined;
                suggestedInlineObjectPropertiesChanges?: object | undefined;
                suggestedInsertionId?: string | undefined;
            }
            interface InlineObjectElement {
                inlineObjectId?: string | undefined;
                suggestedDeletionIds?: string[] | undefined;
                suggestedInsertionIds?: string[] | undefined;
                suggestedTextStyleChanges?: object | undefined;
                textStyle?: Docs.Schema.TextStyle | undefined;
            }
            interface InlineObjectProperties {
                embeddedObject?: Docs.Schema.EmbeddedObject | undefined;
            }
            interface InlineObjectPropertiesSuggestionState {
                embeddedObjectSuggestionState?: Docs.Schema.EmbeddedObjectSuggestionState | undefined;
            }
            interface InsertInlineImageRequest {
                endOfSegmentLocation?: Docs.Schema.EndOfSegmentLocation | undefined;
                location?: Docs.Schema.Location | undefined;
                objectSize?: Docs.Schema.Size | undefined;
                uri?: string | undefined;
            }
            interface InsertInlineImageResponse {
                objectId?: string | undefined;
            }
            interface InsertInlineSheetsChartResponse {
                objectId?: string | undefined;
            }
            interface InsertPageBreakRequest {
                endOfSegmentLocation?: Docs.Schema.EndOfSegmentLocation | undefined;
                location?: Docs.Schema.Location | undefined;
            }
            interface InsertTableRequest {
                columns?: number | undefined;
                endOfSegmentLocation?: Docs.Schema.EndOfSegmentLocation | undefined;
                location?: Docs.Schema.Location | undefined;
                rows?: number | undefined;
            }
            interface InsertTableRowRequest {
                insertBelow?: boolean | undefined;
                tableCellLocation?: Docs.Schema.TableCellLocation | undefined;
            }
            interface InsertTextRequest {
                endOfSegmentLocation?: Docs.Schema.EndOfSegmentLocation | undefined;
                location?: Docs.Schema.Location | undefined;
                text?: string | undefined;
            }
            interface Link {
                bookmarkId?: string | undefined;
                headingId?: string | undefined;
                url?: string | undefined;
            }
            interface LinkedContentReference {
                sheetsChartReference?: Docs.Schema.SheetsChartReference | undefined;
            }
            interface LinkedContentReferenceSuggestionState {
                sheetsChartReferenceSuggestionState?: Docs.Schema.SheetsChartReferenceSuggestionState | undefined;
            }
            interface List {
                listProperties?: Docs.Schema.ListProperties | undefined;
                suggestedDeletionIds?: string[] | undefined;
                suggestedInsertionId?: string | undefined;
                suggestedListPropertiesChanges?: object | undefined;
            }
            interface ListProperties {
                nestingLevels?: Docs.Schema.NestingLevel[] | undefined;
            }
            interface ListPropertiesSuggestionState {
                nestingLevelsSuggestionStates?: Docs.Schema.NestingLevelSuggestionState[] | undefined;
            }
            interface Location {
                index?: number | undefined;
                segmentId?: string | undefined;
            }
            interface NamedRange {
                name?: string | undefined;
                namedRangeId?: string | undefined;
                ranges?: Docs.Schema.Range[] | undefined;
            }
            interface NamedRanges {
                name?: string | undefined;
                namedRanges?: Docs.Schema.NamedRange[] | undefined;
            }
            interface NamedStyle {
                namedStyleType?: string | undefined;
                paragraphStyle?: Docs.Schema.ParagraphStyle | undefined;
                textStyle?: Docs.Schema.TextStyle | undefined;
            }
            interface NamedStyleSuggestionState {
                namedStyleType?: string | undefined;
                paragraphStyleSuggestionState?: Docs.Schema.ParagraphStyleSuggestionState | undefined;
                textStyleSuggestionState?: Docs.Schema.TextStyleSuggestionState | undefined;
            }
            interface NamedStyles {
                styles?: Docs.Schema.NamedStyle[] | undefined;
            }
            interface NamedStylesSuggestionState {
                stylesSuggestionStates?: Docs.Schema.NamedStyleSuggestionState[] | undefined;
            }
            interface NestingLevel {
                bulletAlignment?: string | undefined;
                glyphFormat?: string | undefined;
                glyphSymbol?: string | undefined;
                glyphType?: string | undefined;
                indentFirstLine?: Docs.Schema.Dimension | undefined;
                indentStart?: Docs.Schema.Dimension | undefined;
                startNumber?: number | undefined;
                textStyle?: Docs.Schema.TextStyle | undefined;
            }
            interface NestingLevelSuggestionState {
                bulletAlignmentSuggested?: boolean | undefined;
                glyphFormatSuggested?: boolean | undefined;
                glyphSymbolSuggested?: boolean | undefined;
                glyphTypeSuggested?: boolean | undefined;
                indentFirstLineSuggested?: boolean | undefined;
                indentStartSuggested?: boolean | undefined;
                startNumberSuggested?: boolean | undefined;
                textStyleSuggestionState?: Docs.Schema.TextStyleSuggestionState | undefined;
            }
            interface ObjectReferences {
                objectIds?: string[] | undefined;
            }
            interface OptionalColor {
                color?: Docs.Schema.Color | undefined;
            }
            interface PageBreak {
                suggestedDeletionIds?: string[] | undefined;
                suggestedInsertionIds?: string[] | undefined;
                suggestedTextStyleChanges?: object | undefined;
                textStyle?: Docs.Schema.TextStyle | undefined;
            }
            interface Paragraph {
                bullet?: Docs.Schema.Bullet | undefined;
                elements?: Docs.Schema.ParagraphElement[] | undefined;
                paragraphStyle?: Docs.Schema.ParagraphStyle | undefined;
                positionedObjectIds?: string[] | undefined;
                suggestedBulletChanges?: object | undefined;
                suggestedParagraphStyleChanges?: object | undefined;
                suggestedPositionedObjectIds?: object | undefined;
            }
            interface ParagraphBorder {
                color?: Docs.Schema.OptionalColor | undefined;
                dashStyle?: string | undefined;
                padding?: Docs.Schema.Dimension | undefined;
                width?: Docs.Schema.Dimension | undefined;
            }
            interface ParagraphElement {
                autoText?: Docs.Schema.AutoText | undefined;
                columnBreak?: Docs.Schema.ColumnBreak | undefined;
                endIndex?: number | undefined;
                equation?: Docs.Schema.Equation | undefined;
                footnoteReference?: Docs.Schema.FootnoteReference | undefined;
                horizontalRule?: Docs.Schema.HorizontalRule | undefined;
                inlineObjectElement?: Docs.Schema.InlineObjectElement | undefined;
                pageBreak?: Docs.Schema.PageBreak | undefined;
                startIndex?: number | undefined;
                textRun?: Docs.Schema.TextRun | undefined;
            }
            interface ParagraphStyle {
                alignment?: string | undefined;
                avoidWidowAndOrphan?: boolean | undefined;
                borderBetween?: Docs.Schema.ParagraphBorder | undefined;
                borderBottom?: Docs.Schema.ParagraphBorder | undefined;
                borderLeft?: Docs.Schema.ParagraphBorder | undefined;
                borderRight?: Docs.Schema.ParagraphBorder | undefined;
                borderTop?: Docs.Schema.ParagraphBorder | undefined;
                direction?: string | undefined;
                headingId?: string | undefined;
                indentEnd?: Docs.Schema.Dimension | undefined;
                indentFirstLine?: Docs.Schema.Dimension | undefined;
                indentStart?: Docs.Schema.Dimension | undefined;
                keepLinesTogether?: boolean | undefined;
                keepWithNext?: boolean | undefined;
                lineSpacing?: number | undefined;
                namedStyleType?: string | undefined;
                shading?: Docs.Schema.Shading | undefined;
                spaceAbove?: Docs.Schema.Dimension | undefined;
                spaceBelow?: Docs.Schema.Dimension | undefined;
                spacingMode?: string | undefined;
                tabStops?: Docs.Schema.TabStop[] | undefined;
            }
            interface ParagraphStyleSuggestionState {
                alignmentSuggested?: boolean | undefined;
                avoidWidowAndOrphanSuggested?: boolean | undefined;
                borderBetweenSuggested?: boolean | undefined;
                borderBottomSuggested?: boolean | undefined;
                borderLeftSuggested?: boolean | undefined;
                borderRightSuggested?: boolean | undefined;
                borderTopSuggested?: boolean | undefined;
                directionSuggested?: boolean | undefined;
                headingIdSuggested?: boolean | undefined;
                indentEndSuggested?: boolean | undefined;
                indentFirstLineSuggested?: boolean | undefined;
                indentStartSuggested?: boolean | undefined;
                keepLinesTogetherSuggested?: boolean | undefined;
                keepWithNextSuggested?: boolean | undefined;
                lineSpacingSuggested?: boolean | undefined;
                namedStyleTypeSuggested?: boolean | undefined;
                shadingSuggestionState?: Docs.Schema.ShadingSuggestionState | undefined;
                spaceAboveSuggested?: boolean | undefined;
                spaceBelowSuggested?: boolean | undefined;
                spacingModeSuggested?: boolean | undefined;
            }
            interface PositionedObject {
                objectId?: string | undefined;
                positionedObjectProperties?: Docs.Schema.PositionedObjectProperties | undefined;
                suggestedDeletionIds?: string[] | undefined;
                suggestedInsertionId?: string | undefined;
                suggestedPositionedObjectPropertiesChanges?: object | undefined;
            }
            interface PositionedObjectPositioning {
                layout?: string | undefined;
                leftOffset?: Docs.Schema.Dimension | undefined;
                topOffset?: Docs.Schema.Dimension | undefined;
            }
            interface PositionedObjectPositioningSuggestionState {
                layoutSuggested?: boolean | undefined;
                leftOffsetSuggested?: boolean | undefined;
                topOffsetSuggested?: boolean | undefined;
            }
            interface PositionedObjectProperties {
                embeddedObject?: Docs.Schema.EmbeddedObject | undefined;
                positioning?: Docs.Schema.PositionedObjectPositioning | undefined;
            }
            interface PositionedObjectPropertiesSuggestionState {
                embeddedObjectSuggestionState?: Docs.Schema.EmbeddedObjectSuggestionState | undefined;
                positioningSuggestionState?: Docs.Schema.PositionedObjectPositioningSuggestionState | undefined;
            }
            interface Range {
                endIndex?: number | undefined;
                segmentId?: string | undefined;
                startIndex?: number | undefined;
            }
            interface ReplaceAllTextRequest {
                containsText?: Docs.Schema.SubstringMatchCriteria | undefined;
                replaceText?: string | undefined;
            }
            interface ReplaceAllTextResponse {
                occurrencesChanged?: number | undefined;
            }
            interface Request {
                createNamedRange?: Docs.Schema.CreateNamedRangeRequest | undefined;
                createParagraphBullets?: Docs.Schema.CreateParagraphBulletsRequest | undefined;
                deleteContentRange?: Docs.Schema.DeleteContentRangeRequest | undefined;
                deleteNamedRange?: Docs.Schema.DeleteNamedRangeRequest | undefined;
                deleteParagraphBullets?: Docs.Schema.DeleteParagraphBulletsRequest | undefined;
                deletePositionedObject?: Docs.Schema.DeletePositionedObjectRequest | undefined;
                deleteTableColumn?: Docs.Schema.DeleteTableColumnRequest | undefined;
                deleteTableRow?: Docs.Schema.DeleteTableRowRequest | undefined;
                insertInlineImage?: Docs.Schema.InsertInlineImageRequest | undefined;
                insertPageBreak?: Docs.Schema.InsertPageBreakRequest | undefined;
                insertTable?: Docs.Schema.InsertTableRequest | undefined;
                insertTableRow?: Docs.Schema.InsertTableRowRequest | undefined;
                insertText?: Docs.Schema.InsertTextRequest | undefined;
                replaceAllText?: Docs.Schema.ReplaceAllTextRequest | undefined;
                updateParagraphStyle?: Docs.Schema.UpdateParagraphStyleRequest | undefined;
                updateTextStyle?: Docs.Schema.UpdateTextStyleRequest | undefined;
            }
            interface Response {
                createNamedRange?: Docs.Schema.CreateNamedRangeResponse | undefined;
                insertInlineImage?: Docs.Schema.InsertInlineImageResponse | undefined;
                insertInlineSheetsChart?: Docs.Schema.InsertInlineSheetsChartResponse | undefined;
                replaceAllText?: Docs.Schema.ReplaceAllTextResponse | undefined;
            }
            interface RgbColor {
                blue?: number | undefined;
                green?: number | undefined;
                red?: number | undefined;
            }
            interface SectionBreak {
                sectionStyle?: Docs.Schema.SectionStyle | undefined;
                suggestedDeletionIds?: string[] | undefined;
                suggestedInsertionIds?: string[] | undefined;
            }
            interface SectionColumnProperties {
                paddingEnd?: Docs.Schema.Dimension | undefined;
                width?: Docs.Schema.Dimension | undefined;
            }
            interface SectionStyle {
                columnProperties?: Docs.Schema.SectionColumnProperties[] | undefined;
                columnSeparatorStyle?: string | undefined;
                contentDirection?: string | undefined;
            }
            interface Shading {
                backgroundColor?: Docs.Schema.OptionalColor | undefined;
            }
            interface ShadingSuggestionState {
                backgroundColorSuggested?: boolean | undefined;
            }
            interface SheetsChartReference {
                chartId?: number | undefined;
                spreadsheetId?: string | undefined;
            }
            interface SheetsChartReferenceSuggestionState {
                chartIdSuggested?: boolean | undefined;
                spreadsheetIdSuggested?: boolean | undefined;
            }
            interface Size {
                height?: Docs.Schema.Dimension | undefined;
                width?: Docs.Schema.Dimension | undefined;
            }
            interface SizeSuggestionState {
                heightSuggested?: boolean | undefined;
                widthSuggested?: boolean | undefined;
            }
            interface StructuralElement {
                endIndex?: number | undefined;
                paragraph?: Docs.Schema.Paragraph | undefined;
                sectionBreak?: Docs.Schema.SectionBreak | undefined;
                startIndex?: number | undefined;
                table?: Docs.Schema.Table | undefined;
                tableOfContents?: Docs.Schema.TableOfContents | undefined;
            }
            interface SubstringMatchCriteria {
                matchCase?: boolean | undefined;
                text?: string | undefined;
            }
            interface SuggestedBullet {
                bullet?: Docs.Schema.Bullet | undefined;
                bulletSuggestionState?: Docs.Schema.BulletSuggestionState | undefined;
            }
            interface SuggestedDocumentStyle {
                documentStyle?: Docs.Schema.DocumentStyle | undefined;
                documentStyleSuggestionState?: Docs.Schema.DocumentStyleSuggestionState | undefined;
            }
            interface SuggestedInlineObjectProperties {
                inlineObjectProperties?: Docs.Schema.InlineObjectProperties | undefined;
                inlineObjectPropertiesSuggestionState?: Docs.Schema.InlineObjectPropertiesSuggestionState | undefined;
            }
            interface SuggestedListProperties {
                listProperties?: Docs.Schema.ListProperties | undefined;
                listPropertiesSuggestionState?: Docs.Schema.ListPropertiesSuggestionState | undefined;
            }
            interface SuggestedNamedStyles {
                namedStyles?: Docs.Schema.NamedStyles | undefined;
                namedStylesSuggestionState?: Docs.Schema.NamedStylesSuggestionState | undefined;
            }
            interface SuggestedParagraphStyle {
                paragraphStyle?: Docs.Schema.ParagraphStyle | undefined;
                paragraphStyleSuggestionState?: Docs.Schema.ParagraphStyleSuggestionState | undefined;
            }
            interface SuggestedPositionedObjectProperties {
                positionedObjectProperties?: Docs.Schema.PositionedObjectProperties | undefined;
                positionedObjectPropertiesSuggestionState?:
                    | Docs.Schema.PositionedObjectPropertiesSuggestionState
                    | undefined;
            }
            interface SuggestedTableCellStyle {
                tableCellStyle?: Docs.Schema.TableCellStyle | undefined;
                tableCellStyleSuggestionState?: Docs.Schema.TableCellStyleSuggestionState | undefined;
            }
            interface SuggestedTableRowStyle {
                tableRowStyle?: Docs.Schema.TableRowStyle | undefined;
                tableRowStyleSuggestionState?: Docs.Schema.TableRowStyleSuggestionState | undefined;
            }
            interface SuggestedTextStyle {
                textStyle?: Docs.Schema.TextStyle | undefined;
                textStyleSuggestionState?: Docs.Schema.TextStyleSuggestionState | undefined;
            }
            interface TabStop {
                alignment?: string | undefined;
                offset?: Docs.Schema.Dimension | undefined;
            }
            interface Table {
                columns?: number | undefined;
                rows?: number | undefined;
                suggestedDeletionIds?: string[] | undefined;
                suggestedInsertionIds?: string[] | undefined;
                tableRows?: Docs.Schema.TableRow[] | undefined;
                tableStyle?: Docs.Schema.TableStyle | undefined;
            }
            interface TableCell {
                content?: Docs.Schema.StructuralElement[] | undefined;
                endIndex?: number | undefined;
                startIndex?: number | undefined;
                suggestedDeletionIds?: string[] | undefined;
                suggestedInsertionIds?: string[] | undefined;
                suggestedTableCellStyleChanges?: object | undefined;
                tableCellStyle?: Docs.Schema.TableCellStyle | undefined;
            }
            interface TableCellBorder {
                color?: Docs.Schema.OptionalColor | undefined;
                dashStyle?: string | undefined;
                width?: Docs.Schema.Dimension | undefined;
            }
            interface TableCellLocation {
                columnIndex?: number | undefined;
                rowIndex?: number | undefined;
                tableStartLocation?: Docs.Schema.Location | undefined;
            }
            interface TableCellStyle {
                backgroundColor?: Docs.Schema.OptionalColor | undefined;
                borderBottom?: Docs.Schema.TableCellBorder | undefined;
                borderLeft?: Docs.Schema.TableCellBorder | undefined;
                borderRight?: Docs.Schema.TableCellBorder | undefined;
                borderTop?: Docs.Schema.TableCellBorder | undefined;
                columnSpan?: number | undefined;
                contentAlignment?: string | undefined;
                paddingBottom?: Docs.Schema.Dimension | undefined;
                paddingLeft?: Docs.Schema.Dimension | undefined;
                paddingRight?: Docs.Schema.Dimension | undefined;
                paddingTop?: Docs.Schema.Dimension | undefined;
                rowSpan?: number | undefined;
            }
            interface TableCellStyleSuggestionState {
                backgroundColorSuggested?: boolean | undefined;
                borderBottomSuggested?: boolean | undefined;
                borderLeftSuggested?: boolean | undefined;
                borderRightSuggested?: boolean | undefined;
                borderTopSuggested?: boolean | undefined;
                columnSpanSuggested?: boolean | undefined;
                contentAlignmentSuggested?: boolean | undefined;
                paddingBottomSuggested?: boolean | undefined;
                paddingLeftSuggested?: boolean | undefined;
                paddingRightSuggested?: boolean | undefined;
                paddingTopSuggested?: boolean | undefined;
                rowSpanSuggested?: boolean | undefined;
            }
            interface TableColumnProperties {
                width?: Docs.Schema.Dimension | undefined;
                widthType?: string | undefined;
            }
            interface TableOfContents {
                content?: Docs.Schema.StructuralElement[] | undefined;
                suggestedDeletionIds?: string[] | undefined;
                suggestedInsertionIds?: string[] | undefined;
            }
            interface TableRow {
                endIndex?: number | undefined;
                startIndex?: number | undefined;
                suggestedDeletionIds?: string[] | undefined;
                suggestedInsertionIds?: string[] | undefined;
                suggestedTableRowStyleChanges?: object | undefined;
                tableCells?: Docs.Schema.TableCell[] | undefined;
                tableRowStyle?: Docs.Schema.TableRowStyle | undefined;
            }
            interface TableRowStyle {
                minRowHeight?: Docs.Schema.Dimension | undefined;
            }
            interface TableRowStyleSuggestionState {
                minRowHeightSuggested?: boolean | undefined;
            }
            interface TableStyle {
                tableColumnProperties?: Docs.Schema.TableColumnProperties[] | undefined;
            }
            interface TextRun {
                content?: string | undefined;
                suggestedDeletionIds?: string[] | undefined;
                suggestedInsertionIds?: string[] | undefined;
                suggestedTextStyleChanges?: object | undefined;
                textStyle?: Docs.Schema.TextStyle | undefined;
            }
            interface TextStyle {
                backgroundColor?: Docs.Schema.OptionalColor | undefined;
                baselineOffset?: string | undefined;
                bold?: boolean | undefined;
                fontSize?: Docs.Schema.Dimension | undefined;
                foregroundColor?: Docs.Schema.OptionalColor | undefined;
                italic?: boolean | undefined;
                link?: Docs.Schema.Link | undefined;
                smallCaps?: boolean | undefined;
                strikethrough?: boolean | undefined;
                underline?: boolean | undefined;
                weightedFontFamily?: Docs.Schema.WeightedFontFamily | undefined;
            }
            interface TextStyleSuggestionState {
                backgroundColorSuggested?: boolean | undefined;
                baselineOffsetSuggested?: boolean | undefined;
                boldSuggested?: boolean | undefined;
                fontSizeSuggested?: boolean | undefined;
                foregroundColorSuggested?: boolean | undefined;
                italicSuggested?: boolean | undefined;
                linkSuggested?: boolean | undefined;
                smallCapsSuggested?: boolean | undefined;
                strikethroughSuggested?: boolean | undefined;
                underlineSuggested?: boolean | undefined;
                weightedFontFamilySuggested?: boolean | undefined;
            }
            interface UpdateParagraphStyleRequest {
                fields?: string | undefined;
                paragraphStyle?: Docs.Schema.ParagraphStyle | undefined;
                range?: Docs.Schema.Range | undefined;
            }
            interface UpdateTextStyleRequest {
                fields?: string | undefined;
                range?: Docs.Schema.Range | undefined;
                textStyle?: Docs.Schema.TextStyle | undefined;
            }
            interface WeightedFontFamily {
                fontFamily?: string | undefined;
                weight?: number | undefined;
            }
            interface WriteControl {
                requiredRevisionId?: string | undefined;
                targetRevisionId?: string | undefined;
            }
        }
    }
    interface Docs {
        Documents?: Docs.Collection.DocumentsCollection | undefined;
        // Create a new instance of AutoText
        newAutoText(): Docs.Schema.AutoText;
        // Create a new instance of Background
        newBackground(): Docs.Schema.Background;
        // Create a new instance of BatchUpdateDocumentRequest
        newBatchUpdateDocumentRequest(): Docs.Schema.BatchUpdateDocumentRequest;
        // Create a new instance of Body
        newBody(): Docs.Schema.Body;
        // Create a new instance of Bullet
        newBullet(): Docs.Schema.Bullet;
        // Create a new instance of Color
        newColor(): Docs.Schema.Color;
        // Create a new instance of ColumnBreak
        newColumnBreak(): Docs.Schema.ColumnBreak;
        // Create a new instance of CreateNamedRangeRequest
        newCreateNamedRangeRequest(): Docs.Schema.CreateNamedRangeRequest;
        // Create a new instance of CreateParagraphBulletsRequest
        newCreateParagraphBulletsRequest(): Docs.Schema.CreateParagraphBulletsRequest;
        // Create a new instance of DeleteContentRangeRequest
        newDeleteContentRangeRequest(): Docs.Schema.DeleteContentRangeRequest;
        // Create a new instance of DeleteNamedRangeRequest
        newDeleteNamedRangeRequest(): Docs.Schema.DeleteNamedRangeRequest;
        // Create a new instance of DeleteParagraphBulletsRequest
        newDeleteParagraphBulletsRequest(): Docs.Schema.DeleteParagraphBulletsRequest;
        // Create a new instance of DeletePositionedObjectRequest
        newDeletePositionedObjectRequest(): Docs.Schema.DeletePositionedObjectRequest;
        // Create a new instance of DeleteTableColumnRequest
        newDeleteTableColumnRequest(): Docs.Schema.DeleteTableColumnRequest;
        // Create a new instance of DeleteTableRowRequest
        newDeleteTableRowRequest(): Docs.Schema.DeleteTableRowRequest;
        // Create a new instance of Dimension
        newDimension(): Docs.Schema.Dimension;
        // Create a new instance of Document
        newDocument(): Docs.Schema.Document;
        // Create a new instance of DocumentStyle
        newDocumentStyle(): Docs.Schema.DocumentStyle;
        // Create a new instance of EndOfSegmentLocation
        newEndOfSegmentLocation(): Docs.Schema.EndOfSegmentLocation;
        // Create a new instance of Equation
        newEquation(): Docs.Schema.Equation;
        // Create a new instance of FootnoteReference
        newFootnoteReference(): Docs.Schema.FootnoteReference;
        // Create a new instance of HorizontalRule
        newHorizontalRule(): Docs.Schema.HorizontalRule;
        // Create a new instance of InlineObjectElement
        newInlineObjectElement(): Docs.Schema.InlineObjectElement;
        // Create a new instance of InsertInlineImageRequest
        newInsertInlineImageRequest(): Docs.Schema.InsertInlineImageRequest;
        // Create a new instance of InsertPageBreakRequest
        newInsertPageBreakRequest(): Docs.Schema.InsertPageBreakRequest;
        // Create a new instance of InsertTableRequest
        newInsertTableRequest(): Docs.Schema.InsertTableRequest;
        // Create a new instance of InsertTableRowRequest
        newInsertTableRowRequest(): Docs.Schema.InsertTableRowRequest;
        // Create a new instance of InsertTextRequest
        newInsertTextRequest(): Docs.Schema.InsertTextRequest;
        // Create a new instance of Link
        newLink(): Docs.Schema.Link;
        // Create a new instance of Location
        newLocation(): Docs.Schema.Location;
        // Create a new instance of NamedStyle
        newNamedStyle(): Docs.Schema.NamedStyle;
        // Create a new instance of NamedStyles
        newNamedStyles(): Docs.Schema.NamedStyles;
        // Create a new instance of OptionalColor
        newOptionalColor(): Docs.Schema.OptionalColor;
        // Create a new instance of PageBreak
        newPageBreak(): Docs.Schema.PageBreak;
        // Create a new instance of Paragraph
        newParagraph(): Docs.Schema.Paragraph;
        // Create a new instance of ParagraphBorder
        newParagraphBorder(): Docs.Schema.ParagraphBorder;
        // Create a new instance of ParagraphElement
        newParagraphElement(): Docs.Schema.ParagraphElement;
        // Create a new instance of ParagraphStyle
        newParagraphStyle(): Docs.Schema.ParagraphStyle;
        // Create a new instance of Range
        newRange(): Docs.Schema.Range;
        // Create a new instance of ReplaceAllTextRequest
        newReplaceAllTextRequest(): Docs.Schema.ReplaceAllTextRequest;
        // Create a new instance of Request
        newRequest(): Docs.Schema.Request;
        // Create a new instance of RgbColor
        newRgbColor(): Docs.Schema.RgbColor;
        // Create a new instance of SectionBreak
        newSectionBreak(): Docs.Schema.SectionBreak;
        // Create a new instance of SectionColumnProperties
        newSectionColumnProperties(): Docs.Schema.SectionColumnProperties;
        // Create a new instance of SectionStyle
        newSectionStyle(): Docs.Schema.SectionStyle;
        // Create a new instance of Shading
        newShading(): Docs.Schema.Shading;
        // Create a new instance of Size
        newSize(): Docs.Schema.Size;
        // Create a new instance of StructuralElement
        newStructuralElement(): Docs.Schema.StructuralElement;
        // Create a new instance of SubstringMatchCriteria
        newSubstringMatchCriteria(): Docs.Schema.SubstringMatchCriteria;
        // Create a new instance of TabStop
        newTabStop(): Docs.Schema.TabStop;
        // Create a new instance of Table
        newTable(): Docs.Schema.Table;
        // Create a new instance of TableCell
        newTableCell(): Docs.Schema.TableCell;
        // Create a new instance of TableCellBorder
        newTableCellBorder(): Docs.Schema.TableCellBorder;
        // Create a new instance of TableCellLocation
        newTableCellLocation(): Docs.Schema.TableCellLocation;
        // Create a new instance of TableCellStyle
        newTableCellStyle(): Docs.Schema.TableCellStyle;
        // Create a new instance of TableColumnProperties
        newTableColumnProperties(): Docs.Schema.TableColumnProperties;
        // Create a new instance of TableOfContents
        newTableOfContents(): Docs.Schema.TableOfContents;
        // Create a new instance of TableRow
        newTableRow(): Docs.Schema.TableRow;
        // Create a new instance of TableRowStyle
        newTableRowStyle(): Docs.Schema.TableRowStyle;
        // Create a new instance of TableStyle
        newTableStyle(): Docs.Schema.TableStyle;
        // Create a new instance of TextRun
        newTextRun(): Docs.Schema.TextRun;
        // Create a new instance of TextStyle
        newTextStyle(): Docs.Schema.TextStyle;
        // Create a new instance of UpdateParagraphStyleRequest
        newUpdateParagraphStyleRequest(): Docs.Schema.UpdateParagraphStyleRequest;
        // Create a new instance of UpdateTextStyleRequest
        newUpdateTextStyleRequest(): Docs.Schema.UpdateTextStyleRequest;
        // Create a new instance of WeightedFontFamily
        newWeightedFontFamily(): Docs.Schema.WeightedFontFamily;
        // Create a new instance of WriteControl
        newWriteControl(): Docs.Schema.WriteControl;
    }
}

declare var Docs: GoogleAppsScript.Docs;
