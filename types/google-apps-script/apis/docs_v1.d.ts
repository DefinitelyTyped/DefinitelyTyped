declare namespace GoogleAppsScript {
    namespace Docs {
        namespace Collection {
            interface DocumentsCollection {
                batchUpdate(
                    $resource: Docs.Schema.BatchUpdateDocumentRequest,
                    documentId: string,
                ): Docs.Schema.BatchUpdateDocumentResponse;
                create(
                    $resource: Docs.Schema.Document,
                ): Docs.Schema.Document;
                get(
                    documentId: string,
                    args?: {
                        commentsViewMode?:
                            | "COMMENTS_VIEW_MODE_UNSPECIFIED"
                            | "COMMENTS_VIEW_MODE_DEFAULT_FOR_CURRENT_ACCESS"
                            | "COMMENTS_VIEW_MODE_OMITTED"
                            | "COMMENTS_VIEW_MODE_INCLUDED"
                            | undefined;
                        includeTabsContent?: boolean | undefined;
                        suggestionsViewMode?:
                            | "DEFAULT_FOR_CURRENT_ACCESS"
                            | "SUGGESTIONS_INLINE"
                            | "PREVIEW_SUGGESTIONS_ACCEPTED"
                            | "PREVIEW_WITHOUT_SUGGESTIONS"
                            | undefined;
                    },
                ): Docs.Schema.Document;
            }
        }
        namespace Schema {
            interface AcceptSuggestionRequest {
                suggestionId?: string | undefined;
            }
            interface AddCommentReplyRequest {
                commentId?: string | undefined;
                post?: Docs.Schema.Post | undefined;
                suggestionId?: string | undefined;
            }
            interface AddCommentReplyResponse {
                post?: Docs.Schema.Post | undefined;
            }
            interface AddDocumentTabRequest {
                tabProperties?: Docs.Schema.TabProperties | undefined;
            }
            interface AddDocumentTabResponse {
                tabProperties?: Docs.Schema.TabProperties | undefined;
            }
            interface AutoText {
                suggestedDeletionIds?: Array<string> | undefined;
                suggestedInsertionIds?: Array<string> | undefined;
                suggestedTextStyleChanges?: Record<string, Docs.Schema.SuggestedTextStyle> | undefined;
                textStyle?: Docs.Schema.TextStyle | undefined;
                type?: "TYPE_UNSPECIFIED" | "PAGE_NUMBER" | "PAGE_COUNT" | undefined;
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
                commentUpdateState?:
                    | "COMMENT_UPDATE_STATE_UNSPECIFIED"
                    | "NO_UPDATES_REQUESTED"
                    | "ALL_SAVED"
                    | "ALL_FAILED_UNKNOWN_REASON"
                    | undefined;
                documentId?: string | undefined;
                replies?: Docs.Schema.Response[] | undefined;
                suggestionResponses?: Docs.Schema.SuggestionResponse[] | undefined;
                writeControl?: Docs.Schema.WriteControl | undefined;
            }
            interface Body {
                content?: Docs.Schema.StructuralElement[] | undefined;
            }
            interface BookmarkLink {
                id?: string | undefined;
                tabId?: string | undefined;
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
                suggestedDeletionIds?: Array<string> | undefined;
                suggestedInsertionIds?: Array<string> | undefined;
                suggestedTextStyleChanges?: Record<string, Docs.Schema.SuggestedTextStyle> | undefined;
                textStyle?: Docs.Schema.TextStyle | undefined;
            }
            interface CommentAnchor {
                anchorId?: string | undefined;
                ranges?: Docs.Schema.Range[] | undefined;
            }
            interface CommentThread {
                anchorId?: string | undefined;
                commentId?: string | undefined;
                headPost?: Docs.Schema.Post | undefined;
                plainTextQuote?: string | undefined;
                replies?: Docs.Schema.Post[] | undefined;
                status?: "STATUS_UNSPECIFIED" | "OPEN" | "RESOLVED" | undefined;
            }
            interface CreateDropdownDefinitionRequest {
                dropdownDefinition?: Docs.Schema.DropdownDefinition | undefined;
                tabId?: string | undefined;
            }
            interface CreateDropdownDefinitionResponse {
                dropdownDefinition?: Docs.Schema.DropdownDefinition | undefined;
            }
            interface CreateFooterRequest {
                sectionBreakLocation?: Docs.Schema.Location | undefined;
                type?: "HEADER_FOOTER_TYPE_UNSPECIFIED" | "DEFAULT" | undefined;
            }
            interface CreateFooterResponse {
                footerId?: string | undefined;
            }
            interface CreateFootnoteRequest {
                endOfSegmentLocation?: Docs.Schema.EndOfSegmentLocation | undefined;
                location?: Docs.Schema.Location | undefined;
            }
            interface CreateFootnoteResponse {
                footnoteId?: string | undefined;
            }
            interface CreateHeaderRequest {
                sectionBreakLocation?: Docs.Schema.Location | undefined;
                type?: "HEADER_FOOTER_TYPE_UNSPECIFIED" | "DEFAULT" | undefined;
            }
            interface CreateHeaderResponse {
                headerId?: string | undefined;
            }
            interface CreateNamedRangeRequest {
                name?: string | undefined;
                range?: Docs.Schema.Range | undefined;
            }
            interface CreateNamedRangeResponse {
                namedRangeId?: string | undefined;
            }
            interface CreateParagraphBulletsRequest {
                bulletPreset?:
                    | "BULLET_GLYPH_PRESET_UNSPECIFIED"
                    | "BULLET_DISC_CIRCLE_SQUARE"
                    | "BULLET_DIAMONDX_ARROW3D_SQUARE"
                    | "BULLET_CHECKBOX"
                    | "BULLET_ARROW_DIAMOND_DISC"
                    | "BULLET_STAR_CIRCLE_SQUARE"
                    | "BULLET_ARROW3D_CIRCLE_SQUARE"
                    | "BULLET_LEFTTRIANGLE_DIAMOND_DISC"
                    | "BULLET_DIAMONDX_HOLLOWDIAMOND_SQUARE"
                    | "BULLET_DIAMOND_CIRCLE_SQUARE"
                    | "NUMBERED_DECIMAL_ALPHA_ROMAN"
                    | "NUMBERED_DECIMAL_ALPHA_ROMAN_PARENS"
                    | "NUMBERED_DECIMAL_NESTED"
                    | "NUMBERED_UPPERALPHA_ALPHA_ROMAN"
                    | "NUMBERED_UPPERROMAN_UPPERALPHA_DECIMAL"
                    | "NUMBERED_ZERODECIMAL_ALPHA_ROMAN"
                    | undefined;
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
            interface DateElement {
                dateElementProperties?: Docs.Schema.DateElementProperties | undefined;
                dateId?: string | undefined;
                suggestedDateElementPropertiesChanges?:
                    | Record<string, Docs.Schema.SuggestedDateElementProperties>
                    | undefined;
                suggestedDeletionIds?: Array<string> | undefined;
                suggestedInsertionIds?: Array<string> | undefined;
                suggestedTextStyleChanges?: Record<string, Docs.Schema.SuggestedTextStyle> | undefined;
                textStyle?: Docs.Schema.TextStyle | undefined;
            }
            interface DateElementProperties {
                dateFormat?:
                    | "DATE_FORMAT_UNSPECIFIED"
                    | "DATE_FORMAT_CUSTOM"
                    | "DATE_FORMAT_MONTH_DAY_ABBREVIATED"
                    | "DATE_FORMAT_MONTH_DAY_FULL"
                    | "DATE_FORMAT_MONTH_DAY_YEAR_ABBREVIATED"
                    | "DATE_FORMAT_ISO8601"
                    | undefined;
                displayText?: string | undefined;
                locale?: string | undefined;
                timeFormat?:
                    | "TIME_FORMAT_UNSPECIFIED"
                    | "TIME_FORMAT_DISABLED"
                    | "TIME_FORMAT_HOUR_MINUTE"
                    | "TIME_FORMAT_HOUR_MINUTE_TIMEZONE"
                    | undefined;
                timestamp?: string | undefined;
                timeZoneId?: string | undefined;
            }
            interface DateElementPropertiesSuggestionState {
                dateFormatSuggested?: boolean | undefined;
                localeSuggested?: boolean | undefined;
                timeFormatSuggested?: boolean | undefined;
                timestampSuggested?: boolean | undefined;
                timeZoneIdSuggested?: boolean | undefined;
            }
            interface DeleteCommentReplyRequest {
                commentId?: string | undefined;
                postId?: string | undefined;
                suggestionId?: string | undefined;
            }
            interface DeleteCommentRequest {
                commentId?: string | undefined;
            }
            interface DeleteContentRangeRequest {
                range?: Docs.Schema.Range | undefined;
            }
            interface DeleteDropdownDefinitionRequest {
                dropdownDefinitionId?: string | undefined;
                tabId?: string | undefined;
            }
            interface DeleteFooterRequest {
                footerId?: string | undefined;
                tabId?: string | undefined;
            }
            interface DeleteHeaderRequest {
                headerId?: string | undefined;
                tabId?: string | undefined;
            }
            interface DeleteNamedRangeRequest {
                name?: string | undefined;
                namedRangeId?: string | undefined;
                tabsCriteria?: Docs.Schema.TabsCriteria | undefined;
            }
            interface DeleteParagraphBulletsRequest {
                range?: Docs.Schema.Range | undefined;
            }
            interface DeletePositionedObjectRequest {
                objectId?: string | undefined;
                tabId?: string | undefined;
            }
            interface DeleteSuggestionRequest {
                suggestionId?: string | undefined;
            }
            interface DeleteTableColumnRequest {
                tableCellLocation?: Docs.Schema.TableCellLocation | undefined;
            }
            interface DeleteTableRowRequest {
                tableCellLocation?: Docs.Schema.TableCellLocation | undefined;
            }
            interface DeleteTabRequest {
                tabId?: string | undefined;
            }
            interface Dimension {
                magnitude?: number | undefined;
                unit?: "UNIT_UNSPECIFIED" | "PT" | undefined;
            }
            interface Document {
                body?: Docs.Schema.Body | undefined;
                comments?: Docs.Schema.CommentThread[] | undefined;
                commentsViewMode?:
                    | "COMMENTS_VIEW_MODE_UNSPECIFIED"
                    | "COMMENTS_VIEW_MODE_DEFAULT_FOR_CURRENT_ACCESS"
                    | "COMMENTS_VIEW_MODE_OMITTED"
                    | "COMMENTS_VIEW_MODE_INCLUDED"
                    | undefined;
                documentId?: string | undefined;
                documentStyle?: Docs.Schema.DocumentStyle | undefined;
                footers?: Record<string, Docs.Schema.Footer> | undefined;
                footnotes?: Record<string, Docs.Schema.Footnote> | undefined;
                headers?: Record<string, Docs.Schema.Header> | undefined;
                inlineObjects?: Record<string, Docs.Schema.InlineObject> | undefined;
                lists?: Record<string, Docs.Schema.List> | undefined;
                namedRanges?: Record<string, Docs.Schema.NamedRanges> | undefined;
                namedStyles?: Docs.Schema.NamedStyles | undefined;
                positionedObjects?: Record<string, Docs.Schema.PositionedObject> | undefined;
                revisionId?: string | undefined;
                suggestedDocumentStyleChanges?:
                    | Record<string, Docs.Schema.SuggestedDocumentStyle>
                    | undefined;
                suggestedNamedStylesChanges?: Record<string, Docs.Schema.SuggestedNamedStyles> | undefined;
                suggestions?: Docs.Schema.SuggestionThread[] | undefined;
                suggestionsViewMode?:
                    | "DEFAULT_FOR_CURRENT_ACCESS"
                    | "SUGGESTIONS_INLINE"
                    | "PREVIEW_SUGGESTIONS_ACCEPTED"
                    | "PREVIEW_WITHOUT_SUGGESTIONS"
                    | undefined;
                tabs?: Docs.Schema.Tab[] | undefined;
                title?: string | undefined;
            }
            interface DocumentFormat {
                documentMode?: "DOCUMENT_MODE_UNSPECIFIED" | "PAGES" | "PAGELESS" | undefined;
            }
            interface DocumentStyle {
                background?: Docs.Schema.Background | undefined;
                defaultFooterId?: string | undefined;
                defaultHeaderId?: string | undefined;
                documentFormat?: Docs.Schema.DocumentFormat | undefined;
                evenPageFooterId?: string | undefined;
                evenPageHeaderId?: string | undefined;
                firstPageFooterId?: string | undefined;
                firstPageHeaderId?: string | undefined;
                flipPageOrientation?: boolean | undefined;
                marginBottom?: Docs.Schema.Dimension | undefined;
                marginFooter?: Docs.Schema.Dimension | undefined;
                marginHeader?: Docs.Schema.Dimension | undefined;
                marginLeft?: Docs.Schema.Dimension | undefined;
                marginRight?: Docs.Schema.Dimension | undefined;
                marginTop?: Docs.Schema.Dimension | undefined;
                pageNumberStart?: number | undefined;
                pageSize?: Docs.Schema.Size | undefined;
                useCustomHeaderFooterMargins?: boolean | undefined;
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
                flipPageOrientationSuggested?: boolean | undefined;
                marginBottomSuggested?: boolean | undefined;
                marginFooterSuggested?: boolean | undefined;
                marginHeaderSuggested?: boolean | undefined;
                marginLeftSuggested?: boolean | undefined;
                marginRightSuggested?: boolean | undefined;
                marginTopSuggested?: boolean | undefined;
                pageNumberStartSuggested?: boolean | undefined;
                pageSizeSuggestionState?: Docs.Schema.SizeSuggestionState | undefined;
                useCustomHeaderFooterMarginsSuggested?: boolean | undefined;
                useEvenPageHeaderFooterSuggested?: boolean | undefined;
                useFirstPageHeaderFooterSuggested?: boolean | undefined;
            }
            interface DocumentTab {
                body?: Docs.Schema.Body | undefined;
                commentAnchors?: Record<string, Docs.Schema.CommentAnchor> | undefined;
                documentStyle?: Docs.Schema.DocumentStyle | undefined;
                dropdownDefinitions?: Record<string, Docs.Schema.DropdownDefinition> | undefined;
                footers?: Record<string, Docs.Schema.Footer> | undefined;
                footnotes?: Record<string, Docs.Schema.Footnote> | undefined;
                headers?: Record<string, Docs.Schema.Header> | undefined;
                inlineObjects?: Record<string, Docs.Schema.InlineObject> | undefined;
                lists?: Record<string, Docs.Schema.List> | undefined;
                namedRanges?: Record<string, Docs.Schema.NamedRanges> | undefined;
                namedStyles?: Docs.Schema.NamedStyles | undefined;
                positionedObjects?: Record<string, Docs.Schema.PositionedObject> | undefined;
                suggestedDocumentStyleChanges?:
                    | Record<string, Docs.Schema.SuggestedDocumentStyle>
                    | undefined;
                suggestedNamedStylesChanges?: Record<string, Docs.Schema.SuggestedNamedStyles> | undefined;
            }
            interface Dropdown {
                dropdownId?: string | undefined;
                dropdownProperties?: Docs.Schema.DropdownProperties | undefined;
                suggestedDeletionIds?: Array<string> | undefined;
                suggestedDropdownPropertiesChanges?:
                    | Record<string, Docs.Schema.SuggestedDropdownProperties>
                    | undefined;
                suggestedInsertionIds?: Array<string> | undefined;
                suggestedTextStyleChanges?: Record<string, Docs.Schema.SuggestedTextStyle> | undefined;
                textStyle?: Docs.Schema.TextStyle | undefined;
            }
            interface DropdownDefinition {
                dropdownDefinitionId?: string | undefined;
                dropdownDefinitionProperties?: Docs.Schema.DropdownDefinitionProperties | undefined;
                suggestedDeletionId?: string | undefined;
                suggestedDropdownDefinitionPropertiesChanges?:
                    | Record<string, Docs.Schema.SuggestedDropdownDefinitionProperties>
                    | undefined;
                suggestedInsertionId?: string | undefined;
            }
            interface DropdownDefinitionProperties {
                options?: Docs.Schema.DropdownOption[] | undefined;
                title?: string | undefined;
            }
            interface DropdownDefinitionPropertiesSuggestionState {
                optionsSuggested?: boolean | undefined;
                titleSuggested?: boolean | undefined;
            }
            interface DropdownOption {
                displayValue?: string | undefined;
                optionId?: string | undefined;
                textStyle?: Docs.Schema.TextStyle | undefined;
            }
            interface DropdownProperties {
                displayValue?: string | undefined;
                dropdownDefinitionId?: string | undefined;
                selectedOptionId?: string | undefined;
            }
            interface DropdownPropertiesSuggestionState {
                selectedOptionIdSuggested?: boolean | undefined;
            }
            // eslint-disable-next-line @typescript-eslint/no-empty-interface
            interface EmbeddedDrawingProperties {
            }
            // eslint-disable-next-line @typescript-eslint/no-empty-interface
            interface EmbeddedDrawingPropertiesSuggestionState {
            }
            interface EmbeddedObject {
                description?: string | undefined;
                embeddedDrawingProperties?: Docs.Schema.EmbeddedDrawingProperties | undefined;
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
                dashStyle?: "DASH_STYLE_UNSPECIFIED" | "SOLID" | "DOT" | "DASH" | undefined;
                propertyState?: "RENDERED" | "NOT_RENDERED" | undefined;
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
                embeddedDrawingPropertiesSuggestionState?:
                    | Docs.Schema.EmbeddedDrawingPropertiesSuggestionState
                    | undefined;
                embeddedObjectBorderSuggestionState?:
                    | Docs.Schema.EmbeddedObjectBorderSuggestionState
                    | undefined;
                imagePropertiesSuggestionState?: Docs.Schema.ImagePropertiesSuggestionState | undefined;
                linkedContentReferenceSuggestionState?:
                    | Docs.Schema.LinkedContentReferenceSuggestionState
                    | undefined;
                marginBottomSuggested?: boolean | undefined;
                marginLeftSuggested?: boolean | undefined;
                marginRightSuggested?: boolean | undefined;
                marginTopSuggested?: boolean | undefined;
                sizeSuggestionState?: Docs.Schema.SizeSuggestionState | undefined;
                titleSuggested?: boolean | undefined;
            }
            interface EndOfSegmentLocation {
                segmentId?: string | undefined;
                tabId?: string | undefined;
            }
            interface Equation {
                suggestedDeletionIds?: Array<string> | undefined;
                suggestedInsertionIds?: Array<string> | undefined;
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
                suggestedDeletionIds?: Array<string> | undefined;
                suggestedInsertionIds?: Array<string> | undefined;
                suggestedTextStyleChanges?: Record<string, Docs.Schema.SuggestedTextStyle> | undefined;
                textStyle?: Docs.Schema.TextStyle | undefined;
            }
            interface Header {
                content?: Docs.Schema.StructuralElement[] | undefined;
                headerId?: string | undefined;
            }
            interface HeadingLink {
                id?: string | undefined;
                tabId?: string | undefined;
            }
            interface HorizontalRule {
                suggestedDeletionIds?: Array<string> | undefined;
                suggestedInsertionIds?: Array<string> | undefined;
                suggestedTextStyleChanges?: Record<string, Docs.Schema.SuggestedTextStyle> | undefined;
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
                suggestedDeletionIds?: Array<string> | undefined;
                suggestedInlineObjectPropertiesChanges?:
                    | Record<string, Docs.Schema.SuggestedInlineObjectProperties>
                    | undefined;
                suggestedInsertionId?: string | undefined;
            }
            interface InlineObjectElement {
                inlineObjectId?: string | undefined;
                suggestedDeletionIds?: Array<string> | undefined;
                suggestedInsertionIds?: Array<string> | undefined;
                suggestedTextStyleChanges?: Record<string, Docs.Schema.SuggestedTextStyle> | undefined;
                textStyle?: Docs.Schema.TextStyle | undefined;
            }
            interface InlineObjectProperties {
                embeddedObject?: Docs.Schema.EmbeddedObject | undefined;
            }
            interface InlineObjectPropertiesSuggestionState {
                embeddedObjectSuggestionState?: Docs.Schema.EmbeddedObjectSuggestionState | undefined;
            }
            interface InsertCommentRequest {
                assigneeEmailAddress?: string | undefined;
                content?: string | undefined;
                range?: Docs.Schema.Range | undefined;
            }
            interface InsertCommentResponse {
                commentThread?: Docs.Schema.CommentThread | undefined;
            }
            interface InsertDateRequest {
                dateElementProperties?: Docs.Schema.DateElementProperties | undefined;
                endOfSegmentLocation?: Docs.Schema.EndOfSegmentLocation | undefined;
                location?: Docs.Schema.Location | undefined;
            }
            interface InsertDropdownRequest {
                dropdownDefinitionId?: string | undefined;
                endOfSegmentLocation?: Docs.Schema.EndOfSegmentLocation | undefined;
                location?: Docs.Schema.Location | undefined;
                selectedOptionId?: string | undefined;
            }
            interface InsertDropdownResponse {
                dropdown?: Docs.Schema.Dropdown | undefined;
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
            interface InsertPersonRequest {
                endOfSegmentLocation?: Docs.Schema.EndOfSegmentLocation | undefined;
                location?: Docs.Schema.Location | undefined;
                personProperties?: Docs.Schema.PersonProperties | undefined;
            }
            interface InsertRichLinkRequest {
                endOfSegmentLocation?: Docs.Schema.EndOfSegmentLocation | undefined;
                location?: Docs.Schema.Location | undefined;
                richLinkProperties?: Docs.Schema.RichLinkProperties | undefined;
            }
            interface InsertSectionBreakRequest {
                endOfSegmentLocation?: Docs.Schema.EndOfSegmentLocation | undefined;
                location?: Docs.Schema.Location | undefined;
                sectionType?: "SECTION_TYPE_UNSPECIFIED" | "CONTINUOUS" | "NEXT_PAGE" | undefined;
            }
            interface InsertTableColumnRequest {
                insertRight?: boolean | undefined;
                tableCellLocation?: Docs.Schema.TableCellLocation | undefined;
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
                bookmark?: Docs.Schema.BookmarkLink | undefined;
                bookmarkId?: string | undefined;
                heading?: Docs.Schema.HeadingLink | undefined;
                headingId?: string | undefined;
                tabId?: string | undefined;
                url?: string | undefined;
            }
            interface LinkedContentReference {
                sheetsChartReference?: Docs.Schema.SheetsChartReference | undefined;
            }
            interface LinkedContentReferenceSuggestionState {
                sheetsChartReferenceSuggestionState?:
                    | Docs.Schema.SheetsChartReferenceSuggestionState
                    | undefined;
            }
            interface List {
                listProperties?: Docs.Schema.ListProperties | undefined;
                suggestedDeletionIds?: Array<string> | undefined;
                suggestedInsertionId?: string | undefined;
                suggestedListPropertiesChanges?:
                    | Record<string, Docs.Schema.SuggestedListProperties>
                    | undefined;
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
                tabId?: string | undefined;
            }
            interface MergeTableCellsRequest {
                tableRange?: Docs.Schema.TableRange | undefined;
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
                namedStyleType?:
                    | "NAMED_STYLE_TYPE_UNSPECIFIED"
                    | "NORMAL_TEXT"
                    | "TITLE"
                    | "SUBTITLE"
                    | "HEADING_1"
                    | "HEADING_2"
                    | "HEADING_3"
                    | "HEADING_4"
                    | "HEADING_5"
                    | "HEADING_6"
                    | undefined;
                paragraphStyle?: Docs.Schema.ParagraphStyle | undefined;
                textStyle?: Docs.Schema.TextStyle | undefined;
            }
            interface NamedStyles {
                styles?: Docs.Schema.NamedStyle[] | undefined;
            }
            interface NamedStylesSuggestionState {
                stylesSuggestionStates?: Docs.Schema.NamedStyleSuggestionState[] | undefined;
            }
            interface NamedStyleSuggestionState {
                namedStyleType?:
                    | "NAMED_STYLE_TYPE_UNSPECIFIED"
                    | "NORMAL_TEXT"
                    | "TITLE"
                    | "SUBTITLE"
                    | "HEADING_1"
                    | "HEADING_2"
                    | "HEADING_3"
                    | "HEADING_4"
                    | "HEADING_5"
                    | "HEADING_6"
                    | undefined;
                paragraphStyleSuggestionState?: Docs.Schema.ParagraphStyleSuggestionState | undefined;
                textStyleSuggestionState?: Docs.Schema.TextStyleSuggestionState | undefined;
            }
            interface NestingLevel {
                bulletAlignment?: "BULLET_ALIGNMENT_UNSPECIFIED" | "START" | "CENTER" | "END" | undefined;
                glyphFormat?: string | undefined;
                glyphSymbol?: string | undefined;
                glyphType?:
                    | "GLYPH_TYPE_UNSPECIFIED"
                    | "NONE"
                    | "DECIMAL"
                    | "ZERO_DECIMAL"
                    | "UPPER_ALPHA"
                    | "ALPHA"
                    | "UPPER_ROMAN"
                    | "ROMAN"
                    | undefined;
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
                objectIds?: Array<string> | undefined;
            }
            interface OptionalColor {
                color?: Docs.Schema.Color | undefined;
            }
            interface PageBreak {
                suggestedDeletionIds?: Array<string> | undefined;
                suggestedInsertionIds?: Array<string> | undefined;
                suggestedTextStyleChanges?: Record<string, Docs.Schema.SuggestedTextStyle> | undefined;
                textStyle?: Docs.Schema.TextStyle | undefined;
            }
            interface Paragraph {
                bullet?: Docs.Schema.Bullet | undefined;
                elements?: Docs.Schema.ParagraphElement[] | undefined;
                paragraphStyle?: Docs.Schema.ParagraphStyle | undefined;
                positionedObjectIds?: Array<string> | undefined;
                suggestedBulletChanges?: Record<string, Docs.Schema.SuggestedBullet> | undefined;
                suggestedParagraphStyleChanges?:
                    | Record<string, Docs.Schema.SuggestedParagraphStyle>
                    | undefined;
                suggestedPositionedObjectIds?: Record<string, Docs.Schema.ObjectReferences> | undefined;
            }
            interface ParagraphBorder {
                color?: Docs.Schema.OptionalColor | undefined;
                dashStyle?: "DASH_STYLE_UNSPECIFIED" | "SOLID" | "DOT" | "DASH" | undefined;
                padding?: Docs.Schema.Dimension | undefined;
                width?: Docs.Schema.Dimension | undefined;
            }
            interface ParagraphElement {
                autoText?: Docs.Schema.AutoText | undefined;
                columnBreak?: Docs.Schema.ColumnBreak | undefined;
                dateElement?: Docs.Schema.DateElement | undefined;
                dropdown?: Docs.Schema.Dropdown | undefined;
                endIndex?: number | undefined;
                equation?: Docs.Schema.Equation | undefined;
                footnoteReference?: Docs.Schema.FootnoteReference | undefined;
                horizontalRule?: Docs.Schema.HorizontalRule | undefined;
                inlineObjectElement?: Docs.Schema.InlineObjectElement | undefined;
                pageBreak?: Docs.Schema.PageBreak | undefined;
                person?: Docs.Schema.Person | undefined;
                richLink?: Docs.Schema.RichLink | undefined;
                startIndex?: number | undefined;
                textRun?: Docs.Schema.TextRun | undefined;
            }
            interface ParagraphStyle {
                alignment?: "ALIGNMENT_UNSPECIFIED" | "START" | "CENTER" | "END" | "JUSTIFIED" | undefined;
                avoidWidowAndOrphan?: boolean | undefined;
                borderBetween?: Docs.Schema.ParagraphBorder | undefined;
                borderBottom?: Docs.Schema.ParagraphBorder | undefined;
                borderLeft?: Docs.Schema.ParagraphBorder | undefined;
                borderRight?: Docs.Schema.ParagraphBorder | undefined;
                borderTop?: Docs.Schema.ParagraphBorder | undefined;
                direction?: "CONTENT_DIRECTION_UNSPECIFIED" | "LEFT_TO_RIGHT" | "RIGHT_TO_LEFT" | undefined;
                headingId?: string | undefined;
                indentEnd?: Docs.Schema.Dimension | undefined;
                indentFirstLine?: Docs.Schema.Dimension | undefined;
                indentStart?: Docs.Schema.Dimension | undefined;
                keepLinesTogether?: boolean | undefined;
                keepWithNext?: boolean | undefined;
                lineSpacing?: number | undefined;
                namedStyleType?:
                    | "NAMED_STYLE_TYPE_UNSPECIFIED"
                    | "NORMAL_TEXT"
                    | "TITLE"
                    | "SUBTITLE"
                    | "HEADING_1"
                    | "HEADING_2"
                    | "HEADING_3"
                    | "HEADING_4"
                    | "HEADING_5"
                    | "HEADING_6"
                    | undefined;
                pageBreakBefore?: boolean | undefined;
                shading?: Docs.Schema.Shading | undefined;
                spaceAbove?: Docs.Schema.Dimension | undefined;
                spaceBelow?: Docs.Schema.Dimension | undefined;
                spacingMode?: "SPACING_MODE_UNSPECIFIED" | "NEVER_COLLAPSE" | "COLLAPSE_LISTS" | undefined;
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
                pageBreakBeforeSuggested?: boolean | undefined;
                shadingSuggestionState?: Docs.Schema.ShadingSuggestionState | undefined;
                spaceAboveSuggested?: boolean | undefined;
                spaceBelowSuggested?: boolean | undefined;
                spacingModeSuggested?: boolean | undefined;
            }
            interface Person {
                personId?: string | undefined;
                personProperties?: Docs.Schema.PersonProperties | undefined;
                suggestedDeletionIds?: Array<string> | undefined;
                suggestedInsertionIds?: Array<string> | undefined;
                suggestedTextStyleChanges?: Record<string, Docs.Schema.SuggestedTextStyle> | undefined;
                textStyle?: Docs.Schema.TextStyle | undefined;
            }
            interface PersonProperties {
                email?: string | undefined;
                name?: string | undefined;
            }
            interface PinTableHeaderRowsRequest {
                pinnedHeaderRowsCount?: number | undefined;
                tableStartLocation?: Docs.Schema.Location | undefined;
            }
            interface PositionedObject {
                objectId?: string | undefined;
                positionedObjectProperties?: Docs.Schema.PositionedObjectProperties | undefined;
                suggestedDeletionIds?: Array<string> | undefined;
                suggestedInsertionId?: string | undefined;
                suggestedPositionedObjectPropertiesChanges?:
                    | Record<string, Docs.Schema.SuggestedPositionedObjectProperties>
                    | undefined;
            }
            interface PositionedObjectPositioning {
                layout?:
                    | "POSITIONED_OBJECT_LAYOUT_UNSPECIFIED"
                    | "WRAP_TEXT"
                    | "BREAK_LEFT"
                    | "BREAK_RIGHT"
                    | "BREAK_LEFT_RIGHT"
                    | "IN_FRONT_OF_TEXT"
                    | "BEHIND_TEXT"
                    | undefined;
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
                positioningSuggestionState?:
                    | Docs.Schema.PositionedObjectPositioningSuggestionState
                    | undefined;
            }
            interface Post {
                assigneeEmail?: string | undefined;
                author?: Docs.Schema.PostAuthor | undefined;
                commentAction?:
                    | "COMMENT_ACTION_TYPE_UNSPECIFIED"
                    | "NO_COMMENT_ACTION_CHANGE"
                    | "RESOLVE"
                    | "REOPEN"
                    | undefined;
                content?: string | undefined;
                contentHtml?: string | undefined;
                createTime?: string | undefined;
                deleted?: boolean | undefined;
                fromCopiedDocument?: boolean | undefined;
                fromDocumentComparison?: boolean | undefined;
                fromImportedDocument?: boolean | undefined;
                postId?: string | undefined;
                suggestionAction?:
                    | "SUGGESTION_ACTION_TYPE_UNSPECIFIED"
                    | "NO_SUGGESTION_ACTION_CHANGE"
                    | "ACCEPT"
                    | "REJECT"
                    | undefined;
                updateTime?: string | undefined;
            }
            interface PostAuthor {
                anonymous?: boolean | undefined;
                displayName?: string | undefined;
                me?: boolean | undefined;
                user?: string | undefined;
            }
            interface Range {
                endIndex?: number | undefined;
                segmentId?: string | undefined;
                startIndex?: number | undefined;
                tabId?: string | undefined;
            }
            interface RejectSuggestionRequest {
                suggestionId?: string | undefined;
            }
            interface ReplaceAllTextRequest {
                containsText?: Docs.Schema.SubstringMatchCriteria | undefined;
                replaceText?: string | undefined;
                tabsCriteria?: Docs.Schema.TabsCriteria | undefined;
            }
            interface ReplaceAllTextResponse {
                occurrencesChanged?: number | undefined;
            }
            interface ReplaceImageRequest {
                imageObjectId?: string | undefined;
                imageReplaceMethod?: "IMAGE_REPLACE_METHOD_UNSPECIFIED" | "CENTER_CROP" | undefined;
                tabId?: string | undefined;
                uri?: string | undefined;
            }
            interface ReplaceNamedRangeContentRequest {
                namedRangeId?: string | undefined;
                namedRangeName?: string | undefined;
                tabsCriteria?: Docs.Schema.TabsCriteria | undefined;
                text?: string | undefined;
            }
            interface Request {
                acceptSuggestion?: Docs.Schema.AcceptSuggestionRequest | undefined;
                addCommentReply?: Docs.Schema.AddCommentReplyRequest | undefined;
                addDocumentTab?: Docs.Schema.AddDocumentTabRequest | undefined;
                createDropdownDefinition?: Docs.Schema.CreateDropdownDefinitionRequest | undefined;
                createFooter?: Docs.Schema.CreateFooterRequest | undefined;
                createFootnote?: Docs.Schema.CreateFootnoteRequest | undefined;
                createHeader?: Docs.Schema.CreateHeaderRequest | undefined;
                createNamedRange?: Docs.Schema.CreateNamedRangeRequest | undefined;
                createParagraphBullets?: Docs.Schema.CreateParagraphBulletsRequest | undefined;
                deleteComment?: Docs.Schema.DeleteCommentRequest | undefined;
                deleteCommentReply?: Docs.Schema.DeleteCommentReplyRequest | undefined;
                deleteContentRange?: Docs.Schema.DeleteContentRangeRequest | undefined;
                deleteDropdownDefinition?: Docs.Schema.DeleteDropdownDefinitionRequest | undefined;
                deleteFooter?: Docs.Schema.DeleteFooterRequest | undefined;
                deleteHeader?: Docs.Schema.DeleteHeaderRequest | undefined;
                deleteNamedRange?: Docs.Schema.DeleteNamedRangeRequest | undefined;
                deleteParagraphBullets?: Docs.Schema.DeleteParagraphBulletsRequest | undefined;
                deletePositionedObject?: Docs.Schema.DeletePositionedObjectRequest | undefined;
                deleteSuggestion?: Docs.Schema.DeleteSuggestionRequest | undefined;
                deleteTab?: Docs.Schema.DeleteTabRequest | undefined;
                deleteTableColumn?: Docs.Schema.DeleteTableColumnRequest | undefined;
                deleteTableRow?: Docs.Schema.DeleteTableRowRequest | undefined;
                insertComment?: Docs.Schema.InsertCommentRequest | undefined;
                insertDate?: Docs.Schema.InsertDateRequest | undefined;
                insertDropdown?: Docs.Schema.InsertDropdownRequest | undefined;
                insertInlineImage?: Docs.Schema.InsertInlineImageRequest | undefined;
                insertPageBreak?: Docs.Schema.InsertPageBreakRequest | undefined;
                insertPerson?: Docs.Schema.InsertPersonRequest | undefined;
                insertRichLink?: Docs.Schema.InsertRichLinkRequest | undefined;
                insertSectionBreak?: Docs.Schema.InsertSectionBreakRequest | undefined;
                insertTable?: Docs.Schema.InsertTableRequest | undefined;
                insertTableColumn?: Docs.Schema.InsertTableColumnRequest | undefined;
                insertTableRow?: Docs.Schema.InsertTableRowRequest | undefined;
                insertText?: Docs.Schema.InsertTextRequest | undefined;
                mergeTableCells?: Docs.Schema.MergeTableCellsRequest | undefined;
                pinTableHeaderRows?: Docs.Schema.PinTableHeaderRowsRequest | undefined;
                rejectSuggestion?: Docs.Schema.RejectSuggestionRequest | undefined;
                replaceAllText?: Docs.Schema.ReplaceAllTextRequest | undefined;
                replaceImage?: Docs.Schema.ReplaceImageRequest | undefined;
                replaceNamedRangeContent?: Docs.Schema.ReplaceNamedRangeContentRequest | undefined;
                unmergeTableCells?: Docs.Schema.UnmergeTableCellsRequest | undefined;
                updateCommentPost?: Docs.Schema.UpdateCommentPostRequest | undefined;
                updateDocumentStyle?: Docs.Schema.UpdateDocumentStyleRequest | undefined;
                updateDocumentTabProperties?: Docs.Schema.UpdateDocumentTabPropertiesRequest | undefined;
                updateDropdownDefinitionProperties?:
                    | Docs.Schema.UpdateDropdownDefinitionPropertiesRequest
                    | undefined;
                updateDropdownProperties?: Docs.Schema.UpdateDropdownPropertiesRequest | undefined;
                updateNamedStyle?: Docs.Schema.UpdateNamedStyleRequest | undefined;
                updateParagraphStyle?: Docs.Schema.UpdateParagraphStyleRequest | undefined;
                updateSectionStyle?: Docs.Schema.UpdateSectionStyleRequest | undefined;
                updateTableCellStyle?: Docs.Schema.UpdateTableCellStyleRequest | undefined;
                updateTableColumnProperties?: Docs.Schema.UpdateTableColumnPropertiesRequest | undefined;
                updateTableRowStyle?: Docs.Schema.UpdateTableRowStyleRequest | undefined;
                updateTextStyle?: Docs.Schema.UpdateTextStyleRequest | undefined;
            }
            interface Response {
                addCommentReply?: Docs.Schema.AddCommentReplyResponse | undefined;
                addDocumentTab?: Docs.Schema.AddDocumentTabResponse | undefined;
                createDropdownDefinition?: Docs.Schema.CreateDropdownDefinitionResponse | undefined;
                createFooter?: Docs.Schema.CreateFooterResponse | undefined;
                createFootnote?: Docs.Schema.CreateFootnoteResponse | undefined;
                createHeader?: Docs.Schema.CreateHeaderResponse | undefined;
                createNamedRange?: Docs.Schema.CreateNamedRangeResponse | undefined;
                insertComment?: Docs.Schema.InsertCommentResponse | undefined;
                insertDropdown?: Docs.Schema.InsertDropdownResponse | undefined;
                insertInlineImage?: Docs.Schema.InsertInlineImageResponse | undefined;
                insertInlineSheetsChart?: Docs.Schema.InsertInlineSheetsChartResponse | undefined;
                replaceAllText?: Docs.Schema.ReplaceAllTextResponse | undefined;
            }
            interface RgbColor {
                blue?: number | undefined;
                green?: number | undefined;
                red?: number | undefined;
            }
            interface RichLink {
                richLinkId?: string | undefined;
                richLinkProperties?: Docs.Schema.RichLinkProperties | undefined;
                suggestedDeletionIds?: Array<string> | undefined;
                suggestedInsertionIds?: Array<string> | undefined;
                suggestedTextStyleChanges?: Record<string, Docs.Schema.SuggestedTextStyle> | undefined;
                textStyle?: Docs.Schema.TextStyle | undefined;
            }
            interface RichLinkProperties {
                mimeType?: string | undefined;
                title?: string | undefined;
                uri?: string | undefined;
            }
            interface SectionBreak {
                sectionStyle?: Docs.Schema.SectionStyle | undefined;
                suggestedDeletionIds?: Array<string> | undefined;
                suggestedInsertionIds?: Array<string> | undefined;
            }
            interface SectionColumnProperties {
                paddingEnd?: Docs.Schema.Dimension | undefined;
                width?: Docs.Schema.Dimension | undefined;
            }
            interface SectionStyle {
                columnProperties?: Docs.Schema.SectionColumnProperties[] | undefined;
                columnSeparatorStyle?:
                    | "COLUMN_SEPARATOR_STYLE_UNSPECIFIED"
                    | "NONE"
                    | "BETWEEN_EACH_COLUMN"
                    | undefined;
                contentDirection?: "CONTENT_DIRECTION_UNSPECIFIED" | "LEFT_TO_RIGHT" | "RIGHT_TO_LEFT" | undefined;
                defaultFooterId?: string | undefined;
                defaultHeaderId?: string | undefined;
                evenPageFooterId?: string | undefined;
                evenPageHeaderId?: string | undefined;
                firstPageFooterId?: string | undefined;
                firstPageHeaderId?: string | undefined;
                flipPageOrientation?: boolean | undefined;
                marginBottom?: Docs.Schema.Dimension | undefined;
                marginFooter?: Docs.Schema.Dimension | undefined;
                marginHeader?: Docs.Schema.Dimension | undefined;
                marginLeft?: Docs.Schema.Dimension | undefined;
                marginRight?: Docs.Schema.Dimension | undefined;
                marginTop?: Docs.Schema.Dimension | undefined;
                pageNumberStart?: number | undefined;
                sectionType?: "SECTION_TYPE_UNSPECIFIED" | "CONTINUOUS" | "NEXT_PAGE" | undefined;
                useFirstPageHeaderFooter?: boolean | undefined;
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
                searchByRegex?: boolean | undefined;
                text?: string | undefined;
            }
            interface SuggestedBullet {
                bullet?: Docs.Schema.Bullet | undefined;
                bulletSuggestionState?: Docs.Schema.BulletSuggestionState | undefined;
            }
            interface SuggestedDateElementProperties {
                dateElementProperties?: Docs.Schema.DateElementProperties | undefined;
                dateElementPropertiesSuggestionState?:
                    | Docs.Schema.DateElementPropertiesSuggestionState
                    | undefined;
            }
            interface SuggestedDocumentStyle {
                documentStyle?: Docs.Schema.DocumentStyle | undefined;
                documentStyleSuggestionState?: Docs.Schema.DocumentStyleSuggestionState | undefined;
            }
            interface SuggestedDropdownDefinitionProperties {
                dropdownDefinitionProperties?: Docs.Schema.DropdownDefinitionProperties | undefined;
                dropdownDefinitionPropertiesSuggestionState?:
                    | Docs.Schema.DropdownDefinitionPropertiesSuggestionState
                    | undefined;
            }
            interface SuggestedDropdownProperties {
                dropdownProperties?: Docs.Schema.DropdownProperties | undefined;
                dropdownPropertiesSuggestionState?:
                    | Docs.Schema.DropdownPropertiesSuggestionState
                    | undefined;
            }
            interface SuggestedInlineObjectProperties {
                inlineObjectProperties?: Docs.Schema.InlineObjectProperties | undefined;
                inlineObjectPropertiesSuggestionState?:
                    | Docs.Schema.InlineObjectPropertiesSuggestionState
                    | undefined;
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
            interface SuggestionResponse {
                acceptedSuggestionIds?: Array<string> | undefined;
                createdSuggestionIds?: Array<string> | undefined;
                deletedSuggestionIds?: Array<string> | undefined;
                rejectedSuggestionIds?: Array<string> | undefined;
                updatedSummarySuggestionIds?: Array<string> | undefined;
            }
            interface SuggestionThread {
                headPost?: Docs.Schema.Post | undefined;
                replies?: Docs.Schema.Post[] | undefined;
                status?: "STATUS_UNSPECIFIED" | "OPEN" | "ACCEPTED" | "REJECTED" | undefined;
                suggestionId?: string | undefined;
                summaryHtml?: string | undefined;
                summaryText?: string | undefined;
            }
            interface Tab {
                childTabs?: Docs.Schema.Tab[] | undefined;
                documentTab?: Docs.Schema.DocumentTab | undefined;
                tabProperties?: Docs.Schema.TabProperties | undefined;
            }
            interface Table {
                columns?: number | undefined;
                rows?: number | undefined;
                suggestedDeletionIds?: Array<string> | undefined;
                suggestedInsertionIds?: Array<string> | undefined;
                tableRows?: Docs.Schema.TableRow[] | undefined;
                tableStyle?: Docs.Schema.TableStyle | undefined;
            }
            interface TableCell {
                content?: Docs.Schema.StructuralElement[] | undefined;
                endIndex?: number | undefined;
                startIndex?: number | undefined;
                suggestedDeletionIds?: Array<string> | undefined;
                suggestedInsertionIds?: Array<string> | undefined;
                suggestedTableCellStyleChanges?:
                    | Record<string, Docs.Schema.SuggestedTableCellStyle>
                    | undefined;
                tableCellStyle?: Docs.Schema.TableCellStyle | undefined;
            }
            interface TableCellBorder {
                color?: Docs.Schema.OptionalColor | undefined;
                dashStyle?: "DASH_STYLE_UNSPECIFIED" | "SOLID" | "DOT" | "DASH" | undefined;
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
                contentAlignment?:
                    | "CONTENT_ALIGNMENT_UNSPECIFIED"
                    | "CONTENT_ALIGNMENT_UNSUPPORTED"
                    | "TOP"
                    | "MIDDLE"
                    | "BOTTOM"
                    | undefined;
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
                widthType?: "WIDTH_TYPE_UNSPECIFIED" | "EVENLY_DISTRIBUTED" | "FIXED_WIDTH" | undefined;
            }
            interface TableOfContents {
                content?: Docs.Schema.StructuralElement[] | undefined;
                suggestedDeletionIds?: Array<string> | undefined;
                suggestedInsertionIds?: Array<string> | undefined;
            }
            interface TableRange {
                columnSpan?: number | undefined;
                rowSpan?: number | undefined;
                tableCellLocation?: Docs.Schema.TableCellLocation | undefined;
            }
            interface TableRow {
                endIndex?: number | undefined;
                startIndex?: number | undefined;
                suggestedDeletionIds?: Array<string> | undefined;
                suggestedInsertionIds?: Array<string> | undefined;
                suggestedTableRowStyleChanges?:
                    | Record<string, Docs.Schema.SuggestedTableRowStyle>
                    | undefined;
                tableCells?: Docs.Schema.TableCell[] | undefined;
                tableRowStyle?: Docs.Schema.TableRowStyle | undefined;
            }
            interface TableRowStyle {
                minRowHeight?: Docs.Schema.Dimension | undefined;
                preventOverflow?: boolean | undefined;
                tableHeader?: boolean | undefined;
            }
            interface TableRowStyleSuggestionState {
                minRowHeightSuggested?: boolean | undefined;
            }
            interface TableStyle {
                tableColumnProperties?: Docs.Schema.TableColumnProperties[] | undefined;
            }
            interface TabProperties {
                iconEmoji?: string | undefined;
                index?: number | undefined;
                nestingLevel?: number | undefined;
                parentTabId?: string | undefined;
                tabId?: string | undefined;
                title?: string | undefined;
            }
            interface TabsCriteria {
                tabIds?: Array<string> | undefined;
            }
            interface TabStop {
                alignment?: "TAB_STOP_ALIGNMENT_UNSPECIFIED" | "START" | "CENTER" | "END" | undefined;
                offset?: Docs.Schema.Dimension | undefined;
            }
            interface TextRun {
                content?: string | undefined;
                suggestedDeletionIds?: Array<string> | undefined;
                suggestedInsertionIds?: Array<string> | undefined;
                suggestedTextStyleChanges?: Record<string, Docs.Schema.SuggestedTextStyle> | undefined;
                textStyle?: Docs.Schema.TextStyle | undefined;
            }
            interface TextStyle {
                backgroundColor?: Docs.Schema.OptionalColor | undefined;
                baselineOffset?: "BASELINE_OFFSET_UNSPECIFIED" | "NONE" | "SUPERSCRIPT" | "SUBSCRIPT" | undefined;
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
            interface UnmergeTableCellsRequest {
                tableRange?: Docs.Schema.TableRange | undefined;
            }
            interface UpdateCommentPostRequest {
                commentId?: string | undefined;
                content?: string | undefined;
                postId?: string | undefined;
                suggestionId?: string | undefined;
            }
            interface UpdateDocumentStyleRequest {
                documentStyle?: Docs.Schema.DocumentStyle | undefined;
                fields?: string | undefined;
                tabId?: string | undefined;
            }
            interface UpdateDocumentTabPropertiesRequest {
                fields?: string | undefined;
                tabProperties?: Docs.Schema.TabProperties | undefined;
            }
            interface UpdateDropdownDefinitionPropertiesRequest {
                dropdownDefinitionId?: string | undefined;
                dropdownDefinitionProperties?: Docs.Schema.DropdownDefinitionProperties | undefined;
                fields?: string | undefined;
                selectedOptionIdReplacements?: Record<string, string> | undefined;
                tabId?: string | undefined;
            }
            interface UpdateDropdownPropertiesRequest {
                dropdownId?: string | undefined;
                dropdownProperties?: Docs.Schema.DropdownProperties | undefined;
                fields?: string | undefined;
                tabId?: string | undefined;
            }
            interface UpdateNamedStyleRequest {
                fields?: string | undefined;
                namedStyle?: Docs.Schema.NamedStyle | undefined;
                tabId?: string | undefined;
            }
            interface UpdateParagraphStyleRequest {
                fields?: string | undefined;
                paragraphStyle?: Docs.Schema.ParagraphStyle | undefined;
                range?: Docs.Schema.Range | undefined;
            }
            interface UpdateSectionStyleRequest {
                fields?: string | undefined;
                range?: Docs.Schema.Range | undefined;
                sectionStyle?: Docs.Schema.SectionStyle | undefined;
            }
            interface UpdateTableCellStyleRequest {
                fields?: string | undefined;
                tableCellStyle?: Docs.Schema.TableCellStyle | undefined;
                tableRange?: Docs.Schema.TableRange | undefined;
                tableStartLocation?: Docs.Schema.Location | undefined;
            }
            interface UpdateTableColumnPropertiesRequest {
                columnIndices?: Array<number> | undefined;
                fields?: string | undefined;
                tableColumnProperties?: Docs.Schema.TableColumnProperties | undefined;
                tableStartLocation?: Docs.Schema.Location | undefined;
            }
            interface UpdateTableRowStyleRequest {
                fields?: string | undefined;
                rowIndices?: Array<number> | undefined;
                tableRowStyle?: Docs.Schema.TableRowStyle | undefined;
                tableStartLocation?: Docs.Schema.Location | undefined;
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
                writeMode?: "WRITE_MODE_UNSPECIFIED" | "EDIT" | "SUGGEST" | undefined;
            }
        }
    }
    interface Docs {
        Documents: Docs.Collection.DocumentsCollection;
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

/**
 * The `Docs` advanced service must be enabled.
 */
declare var Docs: GoogleAppsScript.Docs | undefined;
