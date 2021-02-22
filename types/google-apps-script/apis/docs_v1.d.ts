// Type definitions for Google Apps Script 2021-02-11
// Project: https://developers.google.com/apps-script/
// Generator: https://github.com/mtgto/dts-google-apps-script-advanced
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare namespace GoogleAppsScript {
    namespace Docs {
        namespace Collection {
            interface DocumentsCollection {
                // Applies one or more updates to the document. Each request is validated before being applied. If any request is not
                // valid, then the entire request will fail and nothing will be applied. Some requests have replies to give you some
                // information about how they are applied. Other requests do not need to return information; these each return an empty
                // reply. The order of replies matches that of the requests. For example, suppose you call batchUpdate with four updates,
                // and only the third one returns information. The response would have two empty replies, the reply to the third request,
                // and another empty reply, in that order. Because other users may be editing the document, the document might not exactly
                // reflect your changes: your changes may be altered with respect to collaborator changes. If there are no collaborators,
                // the document should reflect your changes. In any case, the updates in your request are guaranteed to be applied together
                // atomically.
                batchUpdate(resource: Schema.BatchUpdateDocumentRequest, documentId: string): Schema.BatchUpdateDocumentResponse;
                // Creates a blank document using the title given in the request. Other fields in the request, including any provided
                // content, are ignored. Returns the created document.
                create(resource: Schema.Document): Schema.Document;
                // Gets the latest version of the specified document.
                get(documentId: string): Schema.Document;
                // Gets the latest version of the specified document.
                get(documentId: string, optionalArgs: object): Schema.Document;
            }
        }
        namespace Schema {
            // A ParagraphElement representing a spot in the text that is dynamically replaced with content that can change over time,
            // like a page number.
            interface AutoText {
                // The suggested deletion IDs. If empty, then there are no suggested deletions of this content.
                suggestedDeletionIds?: string[];
                // The suggested insertion IDs. An AutoText may have multiple insertion IDs if it is a nested suggested change. If empty,
                // then this is not a suggested insertion.
                suggestedInsertionIds?: string[];
                // The suggested text style changes to this AutoText, keyed by suggestion ID.
                suggestedTextStyleChanges?: object;
                // The text style of this AutoText.
                textStyle?: Schema.TextStyle;
                // The type of this auto text.
                type?: string;
            }
            // Represents the background of a document.
            interface Background {
                // The background color.
                color?: Schema.OptionalColor;
            }
            // A mask that indicates which of the fields on the base Background have been changed in this suggestion. For any field set
            // to true, the Backgound has a new suggested value.
            interface BackgroundSuggestionState {
                // Indicates whether the current background color has been modified in this suggestion.
                backgroundColorSuggested?: boolean;
            }
            // Request message for BatchUpdateDocument.
            interface BatchUpdateDocumentRequest {
                // A list of updates to apply to the document.
                requests?: Schema.Request[];
                // Provides control over how write requests are executed.
                writeControl?: Schema.WriteControl;
            }
            // Response message from a BatchUpdateDocument request.
            interface BatchUpdateDocumentResponse {
                // The ID of the document to which the updates were applied to.
                documentId?: string;
                // The reply of the updates. This maps 1:1 with the updates, although replies to some requests may be empty.
                replies?: Schema.Response[];
                // The updated write control after applying the request.
                writeControl?: Schema.WriteControl;
            }
            // The document body. The body typically contains the full document contents except for headers, footers and footnotes.
            interface Body {
                // The contents of the body. The indexes for the body's content begin at zero.
                content?: Schema.StructuralElement[];
            }
            // Describes the bullet of a paragraph.
            interface Bullet {
                // The ID of the list this paragraph belongs to.
                listId?: string;
                // The nesting level of this paragraph in the list.
                nestingLevel?: Integer;
                // The paragraph specific text style applied to this bullet.
                textStyle?: Schema.TextStyle;
            }
            // A mask that indicates which of the fields on the base Bullet have been changed in this suggestion. For any field set to
            // true, there is a new suggested value.
            interface BulletSuggestionState {
                // Indicates if there was a suggested change to the list_id.
                listIdSuggested?: boolean;
                // Indicates if there was a suggested change to the nesting_level.
                nestingLevelSuggested?: boolean;
                // A mask that indicates which of the fields in text style have been changed in this suggestion.
                textStyleSuggestionState?: Schema.TextStyleSuggestionState;
            }
            // A solid color.
            interface Color {
                // The RGB color value.
                rgbColor?: Schema.RgbColor;
            }
            // A ParagraphElement representing a column break. A column break makes the subsequent text start at the top of the next
            // column.
            interface ColumnBreak {
                // The suggested deletion IDs. If empty, then there are no suggested deletions of this content.
                suggestedDeletionIds?: string[];
                // The suggested insertion IDs. A ColumnBreak may have multiple insertion IDs if it is a nested suggested change. If empty,
                // then this is not a suggested insertion.
                suggestedInsertionIds?: string[];
                // The suggested text style changes to this ColumnBreak, keyed by suggestion ID.
                suggestedTextStyleChanges?: object;
                // The text style of this ColumnBreak. Similar to text content, like text runs and footnote references, the text style of a
                // column break can affect content layout as well as the styling of text inserted adjacent to it.
                textStyle?: Schema.TextStyle;
            }
            // Creates a Footer. The new footer is applied to the SectionStyle at the location of the SectionBreak if specificed,
            // otherwise it is applied to the DocumentStyle. If a footer of the specified type already exists, a 400 bad request error
            // is returned.
            interface CreateFooterRequest {
                // The location of the SectionBreak immediately preceding the section whose SectionStyle this footer should belong to. If
                // this is unset or refers to the first section break in the document, the footer applies to the document style.
                sectionBreakLocation?: Schema.Location;
                // The type of footer to create.
                type?: string;
            }
            // The result of creating a footer.
            interface CreateFooterResponse {
                // The ID of the created footer.
                footerId?: string;
            }
            // Creates a Footnote segment and inserts a new FootnoteReference to it at the given location. The new Footnote segment
            // will contain a space followed by a newline character.
            interface CreateFootnoteRequest {
                // Inserts the footnote reference at the end of the document body. Footnote references cannot be inserted inside a header,
                // footer or footnote. Since footnote references can only be inserted in the body, the segment ID field must be empty.
                endOfSegmentLocation?: Schema.EndOfSegmentLocation;
                // Inserts the footnote reference at a specific index in the document. The footnote reference must be inserted inside the
                // bounds of an existing Paragraph. For instance, it cannot be inserted at a table's start index (i.e. between the table
                // and its preceding paragraph). Footnote references cannot be inserted inside an equation, header, footer or footnote.
                // Since footnote references can only be inserted in the body, the segment ID field must be empty.
                location?: Schema.Location;
            }
            // The result of creating a footnote.
            interface CreateFootnoteResponse {
                // The ID of the created footnote.
                footnoteId?: string;
            }
            // Creates a Header. The new header is applied to the SectionStyle at the location of the SectionBreak if specificed,
            // otherwise it is applied to the DocumentStyle. If a header of the specified type already exists, a 400 bad request error
            // is returned.
            interface CreateHeaderRequest {
                // The location of the SectionBreak which begins the section this header should belong to. If `section_break_location' is
                // unset or if it refers to the first section break in the document body, the header applies to the DocumentStyle
                sectionBreakLocation?: Schema.Location;
                // The type of header to create.
                type?: string;
            }
            // The result of creating a header.
            interface CreateHeaderResponse {
                // The ID of the created header.
                headerId?: string;
            }
            // Creates a NamedRange referencing the given range.
            interface CreateNamedRangeRequest {
                // The name of the NamedRange. Names do not need to be unique. Names must be at least 1 character and no more than 256
                // characters, measured in UTF-16 code units.
                name?: string;
                // The range to apply the name to.
                range?: Schema.Range;
            }
            // The result of creating a named range.
            interface CreateNamedRangeResponse {
                // The ID of the created named range.
                namedRangeId?: string;
            }
            // Creates bullets for all of the paragraphs that overlap with the given range. The nesting level of each paragraph will be
            // determined by counting leading tabs in front of each paragraph. To avoid excess space between the bullet and the
            // corresponding paragraph, these leading tabs are removed by this request. This may change the indices of parts of the
            // text. If the paragraph immediately before paragraphs being updated is in a list with a matching preset, the paragraphs
            // being updated are added to that preceding list.
            interface CreateParagraphBulletsRequest {
                // The kinds of bullet glyphs to be used.
                bulletPreset?: string;
                // The range to apply the bullet preset to.
                range?: Schema.Range;
            }
            // The crop properties of an image. The crop rectangle is represented using fractional offsets from the original content's
            // four edges. - If the offset is in the interval (0, 1), the corresponding edge of crop rectangle is positioned inside of
            // the image's original bounding rectangle. - If the offset is negative or greater than 1, the corresponding edge of crop
            // rectangle is positioned outside of the image's original bounding rectangle. - If all offsets and rotation angle are 0,
            // the image is not cropped.
            interface CropProperties {
                // The clockwise rotation angle of the crop rectangle around its center, in radians. Rotation is applied after the offsets.
                angle?: number;
                // The offset specifies how far inwards the bottom edge of the crop rectangle is from the bottom edge of the original
                // content as a fraction of the original content's height.
                offsetBottom?: number;
                // The offset specifies how far inwards the left edge of the crop rectangle is from the left edge of the original content
                // as a fraction of the original content's width.
                offsetLeft?: number;
                // The offset specifies how far inwards the right edge of the crop rectangle is from the right edge of the original content
                // as a fraction of the original content's width.
                offsetRight?: number;
                // The offset specifies how far inwards the top edge of the crop rectangle is from the top edge of the original content as
                // a fraction of the original content's height.
                offsetTop?: number;
            }
            // A mask that indicates which of the fields on the base CropProperties have been changed in this suggestion. For any field
            // set to true, there is a new suggested value.
            interface CropPropertiesSuggestionState {
                // Indicates if there was a suggested change to angle.
                angleSuggested?: boolean;
                // Indicates if there was a suggested change to offset_bottom.
                offsetBottomSuggested?: boolean;
                // Indicates if there was a suggested change to offset_left.
                offsetLeftSuggested?: boolean;
                // Indicates if there was a suggested change to offset_right.
                offsetRightSuggested?: boolean;
                // Indicates if there was a suggested change to offset_top.
                offsetTopSuggested?: boolean;
            }
            // Deletes content from the document.
            interface DeleteContentRangeRequest {
                // The range of content to delete. Deleting text that crosses a paragraph boundary may result in changes to paragraph
                // styles, lists, positioned objects and bookmarks as the two paragraphs are merged. Attempting to delete certain ranges
                // can result in an invalid document structure in which case a 400 bad request error is returned. Some examples of invalid
                // delete requests include: * Deleting one code unit of a surrogate pair. * Deleting the last newline character of a Body,
                // Header, Footer, Footnote, TableCell or TableOfContents. * Deleting the start or end of a Table, TableOfContents or
                // Equation without deleting the entire element. * Deleting the newline character before a Table, TableOfContents or
                // SectionBreak without deleting the element. * Deleting individual rows or cells of a table. Deleting the content within a
                // table cell is allowed.
                range?: Schema.Range;
            }
            // Deletes a Footer from the document.
            interface DeleteFooterRequest {
                // The id of the footer to delete. If this footer is defined on DocumentStyle, the reference to this footer is removed,
                // resulting in no footer of that type for the first section of the document. If this footer is defined on a SectionStyle,
                // the reference to this footer is removed and the footer of that type is now continued from the previous section.
                footerId?: string;
            }
            // Deletes a Header from the document.
            interface DeleteHeaderRequest {
                // The id of the header to delete. If this header is defined on DocumentStyle, the reference to this header is removed,
                // resulting in no header of that type for the first section of the document. If this header is defined on a SectionStyle,
                // the reference to this header is removed and the header of that type is now continued from the previous section.
                headerId?: string;
            }
            // Deletes a NamedRange.
            interface DeleteNamedRangeRequest {
                // The name of the range(s) to delete. All named ranges with the given name will be deleted.
                name?: string;
                // The ID of the named range to delete.
                namedRangeId?: string;
            }
            // Deletes bullets from all of the paragraphs that overlap with the given range. The nesting level of each paragraph will
            // be visually preserved by adding indent to the start of the corresponding paragraph.
            interface DeleteParagraphBulletsRequest {
                // The range to delete bullets from.
                range?: Schema.Range;
            }
            // Deletes a PositionedObject from the document.
            interface DeletePositionedObjectRequest {
                // The ID of the positioned object to delete.
                objectId?: string;
            }
            // Deletes a column from a table.
            interface DeleteTableColumnRequest {
                // The reference table cell location from which the column will be deleted. The column this cell spans will be deleted. If
                // this is a merged cell that spans multiple columns, all columns that the cell spans will be deleted. If no columns remain
                // in the table after this deletion, the whole table is deleted.
                tableCellLocation?: Schema.TableCellLocation;
            }
            // Deletes a row from a table.
            interface DeleteTableRowRequest {
                // The reference table cell location from which the row will be deleted. The row this cell spans will be deleted. If this
                // is a merged cell that spans multiple rows, all rows that the cell spans will be deleted. If no rows remain in the table
                // after this deletion, the whole table is deleted.
                tableCellLocation?: Schema.TableCellLocation;
            }
            // A magnitude in a single direction in the specified units.
            interface Dimension {
                // The magnitude.
                magnitude?: number;
                // The units for magnitude.
                unit?: string;
            }
            // A Google Docs document.
            interface Document {
                // Output only. The main body of the document.
                body?: Schema.Body;
                // Output only. The ID of the document.
                documentId?: string;
                // Output only. The style of the document.
                documentStyle?: Schema.DocumentStyle;
                // Output only. The footers in the document, keyed by footer ID.
                footers?: object;
                // Output only. The footnotes in the document, keyed by footnote ID.
                footnotes?: object;
                // Output only. The headers in the document, keyed by header ID.
                headers?: object;
                // Output only. The inline objects in the document, keyed by object ID.
                inlineObjects?: object;
                // Output only. The lists in the document, keyed by list ID.
                lists?: object;
                // Output only. The named ranges in the document, keyed by name.
                namedRanges?: object;
                // Output only. The named styles of the document.
                namedStyles?: Schema.NamedStyles;
                // Output only. The positioned objects in the document, keyed by object ID.
                positionedObjects?: object;
                // Output only. The revision ID of the document. Can be used in update requests to specify which revision of a document to
                // apply updates to and how the request should behave if the document has been edited since that revision. Only populated
                // if the user has edit access to the document. The format of the revision ID may change over time, so it should be treated
                // opaquely. A returned revision ID is only guaranteed to be valid for 24 hours after it has been returned and cannot be
                // shared across users. If the revision ID is unchanged between calls, then the document has not changed. Conversely, a
                // changed ID (for the same document and user) usually means the document has been updated; however, a changed ID can also
                // be due to internal factors such as ID format changes.
                revisionId?: string;
                // Output only. The suggested changes to the style of the document, keyed by suggestion ID.
                suggestedDocumentStyleChanges?: object;
                // Output only. The suggested changes to the named styles of the document, keyed by suggestion ID.
                suggestedNamedStylesChanges?: object;
                // Output only. The suggestions view mode applied to the document. Note: When editing a document, changes must be based on
                // a document with SUGGESTIONS_INLINE.
                suggestionsViewMode?: string;
                // The title of the document.
                title?: string;
            }
            // The style of the document.
            interface DocumentStyle {
                // The background of the document. Documents cannot have a transparent background color.
                background?: Schema.Background;
                // The ID of the default footer. If not set, there is no default footer. This property is read-only.
                defaultFooterId?: string;
                // The ID of the default header. If not set, there is no default header. This property is read-only.
                defaultHeaderId?: string;
                // The ID of the footer used only for even pages. The value of use_even_page_header_footer determines whether to use the
                // default_footer_id or this value for the footer on even pages. If not set, there is no even page footer. This property is
                // read-only.
                evenPageFooterId?: string;
                // The ID of the header used only for even pages. The value of use_even_page_header_footer determines whether to use the
                // default_header_id or this value for the header on even pages. If not set, there is no even page header. This property is
                // read-only.
                evenPageHeaderId?: string;
                // The ID of the footer used only for the first page. If not set then a unique footer for the first page does not exist.
                // The value of use_first_page_header_footer determines whether to use the default_footer_id or this value for the footer
                // on the first page. If not set, there is no first page footer. This property is read-only.
                firstPageFooterId?: string;
                // The ID of the header used only for the first page. If not set then a unique header for the first page does not exist.
                // The value of use_first_page_header_footer determines whether to use the default_header_id or this value for the header
                // on the first page. If not set, there is no first page header. This property is read-only.
                firstPageHeaderId?: string;
                // The bottom page margin. Updating the bottom page margin on the document style clears the bottom page margin on all
                // section styles.
                marginBottom?: Schema.Dimension;
                // The amount of space between the bottom of the page and the contents of the footer.
                marginFooter?: Schema.Dimension;
                // The amount of space between the top of the page and the contents of the header.
                marginHeader?: Schema.Dimension;
                // The left page margin. Updating the left page margin on the document style clears the left page margin on all section
                // styles. It may also cause columns to resize in all sections.
                marginLeft?: Schema.Dimension;
                // The right page margin. Updating the right page margin on the document style clears the right page margin on all section
                // styles. It may also cause columns to resize in all sections.
                marginRight?: Schema.Dimension;
                // The top page margin. Updating the top page margin on the document style clears the top page margin on all section
                // styles.
                marginTop?: Schema.Dimension;
                // The page number from which to start counting the number of pages.
                pageNumberStart?: Integer;
                // The size of a page in the document.
                pageSize?: Schema.Size;
                // Indicates whether DocumentStyle margin_header, SectionStyle margin_header and DocumentStyle margin_footer, SectionStyle
                // margin_footer are respected. When false, the default values in the Docs editor for header and footer margin are used.
                // This property is read-only.
                useCustomHeaderFooterMargins?: boolean;
                // Indicates whether to use the even page header / footer IDs for the even pages.
                useEvenPageHeaderFooter?: boolean;
                // Indicates whether to use the first page header / footer IDs for the first page.
                useFirstPageHeaderFooter?: boolean;
            }
            // A mask that indicates which of the fields on the base DocumentStyle have been changed in this suggestion. For any field
            // set to true, there is a new suggested value.
            interface DocumentStyleSuggestionState {
                // A mask that indicates which of the fields in background have been changed in this suggestion.
                backgroundSuggestionState?: Schema.BackgroundSuggestionState;
                // Indicates if there was a suggested change to default_footer_id.
                defaultFooterIdSuggested?: boolean;
                // Indicates if there was a suggested change to default_header_id.
                defaultHeaderIdSuggested?: boolean;
                // Indicates if there was a suggested change to even_page_footer_id.
                evenPageFooterIdSuggested?: boolean;
                // Indicates if there was a suggested change to even_page_header_id.
                evenPageHeaderIdSuggested?: boolean;
                // Indicates if there was a suggested change to first_page_footer_id.
                firstPageFooterIdSuggested?: boolean;
                // Indicates if there was a suggested change to first_page_header_id.
                firstPageHeaderIdSuggested?: boolean;
                // Indicates if there was a suggested change to margin_bottom.
                marginBottomSuggested?: boolean;
                // Indicates if there was a suggested change to margin_footer.
                marginFooterSuggested?: boolean;
                // Indicates if there was a suggested change to margin_header.
                marginHeaderSuggested?: boolean;
                // Indicates if there was a suggested change to margin_left.
                marginLeftSuggested?: boolean;
                // Indicates if there was a suggested change to margin_right.
                marginRightSuggested?: boolean;
                // Indicates if there was a suggested change to margin_top.
                marginTopSuggested?: boolean;
                // Indicates if there was a suggested change to page_number_start.
                pageNumberStartSuggested?: boolean;
                // A mask that indicates which of the fields in size have been changed in this suggestion.
                pageSizeSuggestionState?: Schema.SizeSuggestionState;
                // Indicates if there was a suggested change to use_custom_header_footer_margins.
                useCustomHeaderFooterMarginsSuggested?: boolean;
                // Indicates if there was a suggested change to use_even_page_header_footer.
                useEvenPageHeaderFooterSuggested?: boolean;
                // Indicates if there was a suggested change to use_first_page_header_footer.
                useFirstPageHeaderFooterSuggested?: boolean;
            }
            // An embedded object in the document.
            interface EmbeddedObject {
                // The description of the embedded object. The `title` and `description` are both combined to display alt text.
                description?: string;
                // The properties of an embedded drawing.
                embeddedDrawingProperties?: any;
                // The border of the embedded object.
                embeddedObjectBorder?: Schema.EmbeddedObjectBorder;
                // The properties of an image.
                imageProperties?: Schema.ImageProperties;
                // A reference to the external linked source content. For example, it contains a reference to the source Sheets chart when
                // the embedded object is a linked chart. If unset, then the embedded object is not linked.
                linkedContentReference?: Schema.LinkedContentReference;
                // The bottom margin of the embedded object.
                marginBottom?: Schema.Dimension;
                // The left margin of the embedded object.
                marginLeft?: Schema.Dimension;
                // The right margin of the embedded object.
                marginRight?: Schema.Dimension;
                // The top margin of the embedded object.
                marginTop?: Schema.Dimension;
                // The visible size of the image after cropping.
                size?: Schema.Size;
                // The title of the embedded object. The `title` and `description` are both combined to display alt text.
                title?: string;
            }
            // A border around an EmbeddedObject.
            interface EmbeddedObjectBorder {
                // The color of the border.
                color?: Schema.OptionalColor;
                // The dash style of the border.
                dashStyle?: string;
                // The property state of the border property.
                propertyState?: string;
                // The width of the border.
                width?: Schema.Dimension;
            }
            // A mask that indicates which of the fields on the base EmbeddedObjectBorder have been changed in this suggestion. For any
            // field set to true, there is a new suggested value.
            interface EmbeddedObjectBorderSuggestionState {
                // Indicates if there was a suggested change to color.
                colorSuggested?: boolean;
                // Indicates if there was a suggested change to dash_style.
                dashStyleSuggested?: boolean;
                // Indicates if there was a suggested change to property_state.
                propertyStateSuggested?: boolean;
                // Indicates if there was a suggested change to width.
                widthSuggested?: boolean;
            }
            // A mask that indicates which of the fields on the base EmbeddedObject have been changed in this suggestion. For any field
            // set to true, there is a new suggested value.
            interface EmbeddedObjectSuggestionState {
                // Indicates if there was a suggested change to description.
                descriptionSuggested?: boolean;
                // A mask that indicates which of the fields in embedded_drawing_properties have been changed in this suggestion.
                embeddedDrawingPropertiesSuggestionState?: any;
                // A mask that indicates which of the fields in embedded_object_border have been changed in this suggestion.
                embeddedObjectBorderSuggestionState?: Schema.EmbeddedObjectBorderSuggestionState;
                // A mask that indicates which of the fields in image_properties have been changed in this suggestion.
                imagePropertiesSuggestionState?: Schema.ImagePropertiesSuggestionState;
                // A mask that indicates which of the fields in linked_content_reference have been changed in this suggestion.
                linkedContentReferenceSuggestionState?: Schema.LinkedContentReferenceSuggestionState;
                // Indicates if there was a suggested change to margin_bottom.
                marginBottomSuggested?: boolean;
                // Indicates if there was a suggested change to margin_left.
                marginLeftSuggested?: boolean;
                // Indicates if there was a suggested change to margin_right.
                marginRightSuggested?: boolean;
                // Indicates if there was a suggested change to margin_top.
                marginTopSuggested?: boolean;
                // A mask that indicates which of the fields in size have been changed in this suggestion.
                sizeSuggestionState?: Schema.SizeSuggestionState;
                // Indicates if there was a suggested change to title.
                titleSuggested?: boolean;
            }
            // Location at the end of a body, header, footer or footnote. The location is immediately before the last newline in the
            // document segment.
            interface EndOfSegmentLocation {
                // The ID of the header, footer or footnote the location is in. An empty segment ID signifies the document's body.
                segmentId?: string;
            }
            // A ParagraphElement representing an equation.
            interface Equation {
                // The suggested deletion IDs. If empty, then there are no suggested deletions of this content.
                suggestedDeletionIds?: string[];
                // The suggested insertion IDs. A Equation may have multiple insertion IDs if it is a nested suggested change. If empty,
                // then this is not a suggested insertion.
                suggestedInsertionIds?: string[];
            }
            // A document footer.
            interface Footer {
                // The contents of the footer. The indexes for a footer's content begin at zero.
                content?: Schema.StructuralElement[];
                // The ID of the footer.
                footerId?: string;
            }
            // A document footnote.
            interface Footnote {
                // The contents of the footnote. The indexes for a footnote's content begin at zero.
                content?: Schema.StructuralElement[];
                // The ID of the footnote.
                footnoteId?: string;
            }
            // A ParagraphElement representing a footnote reference. A footnote reference is the inline content rendered with a number
            // and is used to identify the footnote.
            interface FootnoteReference {
                // The ID of the footnote that contains the content of this footnote reference.
                footnoteId?: string;
                // The rendered number of this footnote.
                footnoteNumber?: string;
                // The suggested deletion IDs. If empty, then there are no suggested deletions of this content.
                suggestedDeletionIds?: string[];
                // The suggested insertion IDs. A FootnoteReference may have multiple insertion IDs if it is a nested suggested change. If
                // empty, then this is not a suggested insertion.
                suggestedInsertionIds?: string[];
                // The suggested text style changes to this FootnoteReference, keyed by suggestion ID.
                suggestedTextStyleChanges?: object;
                // The text style of this FootnoteReference.
                textStyle?: Schema.TextStyle;
            }
            // A document header.
            interface Header {
                // The contents of the header. The indexes for a header's content begin at zero.
                content?: Schema.StructuralElement[];
                // The ID of the header.
                headerId?: string;
            }
            // A ParagraphElement representing a horizontal line.
            interface HorizontalRule {
                // The suggested deletion IDs. If empty, then there are no suggested deletions of this content.
                suggestedDeletionIds?: string[];
                // The suggested insertion IDs. A HorizontalRule may have multiple insertion IDs if it is a nested suggested change. If
                // empty, then this is not a suggested insertion.
                suggestedInsertionIds?: string[];
                // The suggested text style changes to this HorizontalRule, keyed by suggestion ID.
                suggestedTextStyleChanges?: object;
                // The text style of this HorizontalRule. Similar to text content, like text runs and footnote references, the text style
                // of a horizontal rule can affect content layout as well as the styling of text inserted adjacent to it.
                textStyle?: Schema.TextStyle;
            }
            // The properties of an image.
            interface ImageProperties {
                // The clockwise rotation angle of the image, in radians.
                angle?: number;
                // The brightness effect of the image. The value should be in the interval [-1.0, 1.0], where 0 means no effect.
                brightness?: number;
                // A URI to the image with a default lifetime of 30 minutes. This URI is tagged with the account of the requester. Anyone
                // with the URI effectively accesses the image as the original requester. Access to the image may be lost if the document's
                // sharing settings change.
                contentUri?: string;
                // The contrast effect of the image. The value should be in the interval [-1.0, 1.0], where 0 means no effect.
                contrast?: number;
                // The crop properties of the image.
                cropProperties?: Schema.CropProperties;
                // The source URI is the URI used to insert the image. The source URI can be empty.
                sourceUri?: string;
                // The transparency effect of the image. The value should be in the interval [0.0, 1.0], where 0 means no effect and 1
                // means completely transparent.
                transparency?: number;
            }
            // A mask that indicates which of the fields on the base ImageProperties have been changed in this suggestion. For any
            // field set to true, there is a new suggested value.
            interface ImagePropertiesSuggestionState {
                // Indicates if there was a suggested change to angle.
                angleSuggested?: boolean;
                // Indicates if there was a suggested change to brightness.
                brightnessSuggested?: boolean;
                // Indicates if there was a suggested change to content_uri.
                contentUriSuggested?: boolean;
                // Indicates if there was a suggested change to contrast.
                contrastSuggested?: boolean;
                // A mask that indicates which of the fields in crop_properties have been changed in this suggestion.
                cropPropertiesSuggestionState?: Schema.CropPropertiesSuggestionState;
                // Indicates if there was a suggested change to source_uri.
                sourceUriSuggested?: boolean;
                // Indicates if there was a suggested change to transparency.
                transparencySuggested?: boolean;
            }
            // An object that appears inline with text. An InlineObject contains an EmbeddedObject such as an image.
            interface InlineObject {
                // The properties of this inline object.
                inlineObjectProperties?: Schema.InlineObjectProperties;
                // The ID of this inline object.
                objectId?: string;
                // The suggested deletion IDs. If empty, then there are no suggested deletions of this content.
                suggestedDeletionIds?: string[];
                // The suggested changes to the inline object properties, keyed by suggestion ID.
                suggestedInlineObjectPropertiesChanges?: object;
                // The suggested insertion ID. If empty, then this is not a suggested insertion.
                suggestedInsertionId?: string;
            }
            // A ParagraphElement that contains an InlineObject.
            interface InlineObjectElement {
                // The ID of the InlineObject this element contains.
                inlineObjectId?: string;
                // The suggested deletion IDs. If empty, then there are no suggested deletions of this content.
                suggestedDeletionIds?: string[];
                // The suggested insertion IDs. An InlineObjectElement may have multiple insertion IDs if it is a nested suggested change.
                // If empty, then this is not a suggested insertion.
                suggestedInsertionIds?: string[];
                // The suggested text style changes to this InlineObject, keyed by suggestion ID.
                suggestedTextStyleChanges?: object;
                // The text style of this InlineObjectElement. Similar to text content, like text runs and footnote references, the text
                // style of an inline object element can affect content layout as well as the styling of text inserted adjacent to it.
                textStyle?: Schema.TextStyle;
            }
            // Properties of an InlineObject.
            interface InlineObjectProperties {
                // The embedded object of this inline object.
                embeddedObject?: Schema.EmbeddedObject;
            }
            // A mask that indicates which of the fields on the base InlineObjectProperties have been changed in this suggestion. For
            // any field set to true, there is a new suggested value.
            interface InlineObjectPropertiesSuggestionState {
                // A mask that indicates which of the fields in embedded_object have been changed in this suggestion.
                embeddedObjectSuggestionState?: Schema.EmbeddedObjectSuggestionState;
            }
            // Inserts an InlineObject containing an image at the given location.
            interface InsertInlineImageRequest {
                // Inserts the text at the end of a header, footer or the document body. Inline images cannot be inserted inside a
                // footnote.
                endOfSegmentLocation?: Schema.EndOfSegmentLocation;
                // Inserts the image at a specific index in the document. The image must be inserted inside the bounds of an existing
                // Paragraph. For instance, it cannot be inserted at a table's start index (i.e. between the table and its preceding
                // paragraph). Inline images cannot be inserted inside a footnote or equation.
                location?: Schema.Location;
                // The size that the image should appear as in the document. This property is optional and the final size of the image in
                // the document is determined by the following rules: * If neither width nor height is specified, then a default size of
                // the image is calculated based on its resolution. * If one dimension is specified then the other dimension is calculated
                // to preserve the aspect ratio of the image. * If both width and height are specified, the image is scaled to fit within
                // the provided dimensions while maintaining its aspect ratio.
                objectSize?: Schema.Size;
                // The image URI. The image is fetched once at insertion time and a copy is stored for display inside the document. Images
                // must be less than 50MB in size, cannot exceed 25 megapixels, and must be in one of PNG, JPEG, or GIF format. The
                // provided URI can be at most 2 kB in length. The URI itself is saved with the image, and exposed via the
                // ImageProperties.content_uri field.
                uri?: string;
            }
            // The result of inserting an inline image.
            interface InsertInlineImageResponse {
                // The ID of the created InlineObject.
                objectId?: string;
            }
            // The result of inserting an embedded Google Sheets chart.
            interface InsertInlineSheetsChartResponse {
                // The object ID of the inserted chart.
                objectId?: string;
            }
            // Inserts a page break followed by a newline at the specified location.
            interface InsertPageBreakRequest {
                // Inserts the page break at the end of the document body. Page breaks cannot be inserted inside a footnote, header or
                // footer. Since page breaks can only be inserted inside the body, the segment ID field must be empty.
                endOfSegmentLocation?: Schema.EndOfSegmentLocation;
                // Inserts the page break at a specific index in the document. The page break must be inserted inside the bounds of an
                // existing Paragraph. For instance, it cannot be inserted at a table's start index (i.e. between the table and its
                // preceding paragraph). Page breaks cannot be inserted inside a table, equation, footnote, header or footer. Since page
                // breaks can only be inserted inside the body, the segment ID field must be empty.
                location?: Schema.Location;
            }
            // Inserts a section break at the given location. A newline character will be inserted before the section break.
            interface InsertSectionBreakRequest {
                // Inserts a newline and a section break at the end of the document body. Section breaks cannot be inserted inside a
                // footnote, header or footer. Because section breaks can only be inserted inside the body, the segment ID field must be
                // empty.
                endOfSegmentLocation?: Schema.EndOfSegmentLocation;
                // Inserts a newline and a section break at a specific index in the document. The section break must be inserted inside the
                // bounds of an existing Paragraph. For instance, it cannot be inserted at a table's start index (i.e. between the table
                // and its preceding paragraph). Section breaks cannot be inserted inside a table, equation, footnote, header, or footer.
                // Since section breaks can only be inserted inside the body, the segment ID field must be empty.
                location?: Schema.Location;
                // The type of section to insert.
                sectionType?: string;
            }
            // Inserts an empty column into a table.
            interface InsertTableColumnRequest {
                // Whether to insert new column to the right of the reference cell location. - `True`: insert to the right. - `False`:
                // insert to the left.
                insertRight?: boolean;
                // The reference table cell location from which columns will be inserted. A new column will be inserted to the left (or
                // right) of the column where the reference cell is. If the reference cell is a merged cell, a new column will be inserted
                // to the left (or right) of the merged cell.
                tableCellLocation?: Schema.TableCellLocation;
            }
            // Inserts a table at the specified location. A newline character will be inserted before the inserted table.
            interface InsertTableRequest {
                // The number of columns in the table.
                columns?: Integer;
                // Inserts the table at the end of the given header, footer or document body. A newline character will be inserted before
                // the inserted table. Tables cannot be inserted inside a footnote.
                endOfSegmentLocation?: Schema.EndOfSegmentLocation;
                // Inserts the table at a specific model index. A newline character will be inserted before the inserted table, therefore
                // the table start index will be at the specified location index + 1. The table must be inserted inside the bounds of an
                // existing Paragraph. For instance, it cannot be inserted at a table's start index (i.e. between an existing table and its
                // preceding paragraph). Tables cannot be inserted inside a footnote or equation.
                location?: Schema.Location;
                // The number of rows in the table.
                rows?: Integer;
            }
            // Inserts an empty row into a table.
            interface InsertTableRowRequest {
                // Whether to insert new row below the reference cell location. - `True`: insert below the cell. - `False`: insert above
                // the cell.
                insertBelow?: boolean;
                // The reference table cell location from which rows will be inserted. A new row will be inserted above (or below) the row
                // where the reference cell is. If the reference cell is a merged cell, a new row will be inserted above (or below) the
                // merged cell.
                tableCellLocation?: Schema.TableCellLocation;
            }
            // Inserts text at the specified location.
            interface InsertTextRequest {
                // Inserts the text at the end of a header, footer, footnote or the document body.
                endOfSegmentLocation?: Schema.EndOfSegmentLocation;
                // Inserts the text at a specific index in the document. Text must be inserted inside the bounds of an existing Paragraph.
                // For instance, text cannot be inserted at a table's start index (i.e. between the table and its preceding paragraph). The
                // text must be inserted in the preceding paragraph.
                location?: Schema.Location;
                // The text to be inserted. Inserting a newline character will implicitly create a new Paragraph at that index. The
                // paragraph style of the new paragraph will be copied from the paragraph at the current insertion index, including lists
                // and bullets. Text styles for inserted text will be determined automatically, generally preserving the styling of
                // neighboring text. In most cases, the text style for the inserted text will match the text immediately before the
                // insertion index. Some control characters (U+0000-U+0008, U+000C-U+001F) and characters from the Unicode Basic
                // Multilingual Plane Private Use Area (U+E000-U+F8FF) will be stripped out of the inserted text.
                text?: string;
            }
            // A reference to another portion of a document or an external URL resource.
            interface Link {
                // The ID of a bookmark in this document.
                bookmarkId?: string;
                // The ID of a heading in this document.
                headingId?: string;
                // An external URL.
                url?: string;
            }
            // A reference to the external linked source content.
            interface LinkedContentReference {
                // A reference to the linked chart.
                sheetsChartReference?: Schema.SheetsChartReference;
            }
            // A mask that indicates which of the fields on the base LinkedContentReference have been changed in this suggestion. For
            // any field set to true, there is a new suggested value.
            interface LinkedContentReferenceSuggestionState {
                // A mask that indicates which of the fields in sheets_chart_reference have been changed in this suggestion.
                sheetsChartReferenceSuggestionState?: Schema.SheetsChartReferenceSuggestionState;
            }
            // A List represents the list attributes for a group of paragraphs that all belong to the same list. A paragraph that is
            // part of a list has a reference to the list's ID in its bullet.
            interface List {
                // The properties of the list.
                listProperties?: Schema.ListProperties;
                // The suggested deletion IDs. If empty, then there are no suggested deletions of this list.
                suggestedDeletionIds?: string[];
                // The suggested insertion ID. If empty, then this is not a suggested insertion.
                suggestedInsertionId?: string;
                // The suggested changes to the list properties, keyed by suggestion ID.
                suggestedListPropertiesChanges?: object;
            }
            // The properties of a list which describe the look and feel of bullets belonging to paragraphs associated with a list.
            interface ListProperties {
                // Describes the properties of the bullets at the associated level. A list has at most nine levels of nesting with nesting
                // level 0 corresponding to the top-most level and nesting level 8 corresponding to the most nested level. The nesting
                // levels are returned in ascending order with the least nested returned first.
                nestingLevels?: Schema.NestingLevel[];
            }
            // A mask that indicates which of the fields on the base ListProperties have been changed in this suggestion. For any field
            // set to true, there is a new suggested value.
            interface ListPropertiesSuggestionState {
                // A mask that indicates which of the fields on the corresponding NestingLevel in nesting_levels have been changed in this
                // suggestion. The nesting level suggestion states are returned in ascending order of the nesting level with the least
                // nested returned first.
                nestingLevelsSuggestionStates?: Schema.NestingLevelSuggestionState[];
            }
            // A particular location in the document.
            interface Location {
                // The zero-based index, in UTF-16 code units. The index is relative to the beginning of the segment specified by
                // segment_id.
                index?: Integer;
                // The ID of the header, footer or footnote the location is in. An empty segment ID signifies the document's body.
                segmentId?: string;
            }
            // Merges cells in a Table.
            interface MergeTableCellsRequest {
                // The table range specifying which cells of the table to merge. Any text in the cells being merged will be concatenated
                // and stored in the "head" cell of the range. This is the upper-left cell of the range when the content direction is left
                // to right, and the upper-right cell of the range otherwise. If the range is non-rectangular (which can occur in some
                // cases where the range covers cells that are already merged or where the table is non-rectangular), a 400 bad request
                // error is returned.
                tableRange?: Schema.TableRange;
            }
            // A collection of Ranges with the same named range ID. Named ranges allow developers to associate parts of a document with
            // an arbitrary user-defined label so their contents can be programmatically read or edited at a later time. A document can
            // contain multiple named ranges with the same name, but every named range has a unique ID. A named range is created with a
            // single Range, and content inserted inside a named range generally expands that range. However, certain document changes
            // can cause the range to be split into multiple ranges. Named ranges are not private. All applications and collaborators
            // that have access to the document can see its named ranges.
            interface NamedRange {
                // The name of the named range.
                name?: string;
                // The ID of the named range.
                namedRangeId?: string;
                // The ranges that belong to this named range.
                ranges?: Schema.Range[];
            }
            // A collection of all the NamedRanges in the document that share a given name.
            interface NamedRanges {
                // The name that all the named ranges share.
                name?: string;
                // The NamedRanges that share the same name.
                namedRanges?: Schema.NamedRange[];
            }
            // A named style. Paragraphs in the document can inherit their TextStyle and ParagraphStyle from this named style when they
            // have the same named style type.
            interface NamedStyle {
                // The type of this named style.
                namedStyleType?: string;
                // The paragraph style of this named style.
                paragraphStyle?: Schema.ParagraphStyle;
                // The text style of this named style.
                textStyle?: Schema.TextStyle;
            }
            // A suggestion state of a NamedStyle message.
            interface NamedStyleSuggestionState {
                // The named style type that this suggestion state corresponds to. This field is provided as a convenience for matching the
                // NamedStyleSuggestionState with its corresponding NamedStyle.
                namedStyleType?: string;
                // A mask that indicates which of the fields in paragraph style have been changed in this suggestion.
                paragraphStyleSuggestionState?: Schema.ParagraphStyleSuggestionState;
                // A mask that indicates which of the fields in text style have been changed in this suggestion.
                textStyleSuggestionState?: Schema.TextStyleSuggestionState;
            }
            // The named styles. Paragraphs in the document can inherit their TextStyle and ParagraphStyle from these named styles.
            interface NamedStyles {
                // The named styles. There is an entry for each of the possible named style types.
                styles?: Schema.NamedStyle[];
            }
            // The suggestion state of a NamedStyles message.
            interface NamedStylesSuggestionState {
                // A mask that indicates which of the fields on the corresponding NamedStyle in styles have been changed in this
                // suggestion. The order of these named style suggestion states match the order of the corresponding named style within the
                // named styles suggestion.
                stylesSuggestionStates?: Schema.NamedStyleSuggestionState[];
            }
            // Contains properties describing the look and feel of a list bullet at a given level of nesting.
            interface NestingLevel {
                // The alignment of the bullet within the space allotted for rendering the bullet.
                bulletAlignment?: string;
                // The format string used by bullets at this level of nesting. The glyph format contains one or more placeholders, and
                // these placeholder are replaced with the appropriate values depending on the glyph_type or glyph_symbol. The placeholders
                // follow the pattern `%[nesting_level]`. Furthermore, placeholders can have prefixes and suffixes. Thus, the glyph format
                // follows the pattern `%[nesting_level]`. Note that the prefix and suffix are optional and can be arbitrary strings. For
                // example, the glyph format `%0.` indicates that the rendered glyph will replace the placeholder with the corresponding
                // glyph for nesting level 0 followed by a period as the suffix. So a list with a glyph type of UPPER_ALPHA and glyph
                // format `%0.` at nesting level 0 will result in a list with rendered glyphs `A.` `B.` `C.` The glyph format can contain
                // placeholders for the current nesting level as well as placeholders for parent nesting levels. For example, a list can
                // have a glyph format of `%0.` at nesting level 0 and a glyph format of `%0.%1.` at nesting level 1. Assuming both nesting
                // levels have DECIMAL glyph types, this would result in a list with rendered glyphs `1.` `2.` ` 2.1.` ` 2.2.` `3.` For
                // nesting levels that are ordered, the string that replaces a placeholder in the glyph format for a particular paragraph
                // depends on the paragraph's order within the list.
                glyphFormat?: string;
                // A custom glyph symbol used by bullets when paragraphs at this level of nesting are unordered. The glyph symbol replaces
                // placeholders within the glyph_format. For example, if the glyph_symbol is the solid circle corresponding to Unicode
                // U+25cf code point and the glyph_format is `%0`, the rendered glyph would be the solid circle.
                glyphSymbol?: string;
                // The type of glyph used by bullets when paragraphs at this level of nesting are ordered. The glyph type determines the
                // type of glyph used to replace placeholders within the glyph_format when paragraphs at this level of nesting are ordered.
                // For example, if the nesting level is 0, the glyph_format is `%0.` and the glyph type is DECIMAL, then the rendered glyph
                // would replace the placeholder `%0` in the glyph format with a number corresponding to list item's order within the list.
                glyphType?: string;
                // The amount of indentation for the first line of paragraphs at this level of nesting.
                indentFirstLine?: Schema.Dimension;
                // The amount of indentation for paragraphs at this level of nesting. Applied to the side that corresponds to the start of
                // the text, based on the paragraph's content direction.
                indentStart?: Schema.Dimension;
                // The number of the first list item at this nesting level. A value of 0 is treated as a value of 1 for lettered lists and
                // roman numeraled lists, i.e. for values of both 0 and 1, lettered and roman numeraled lists will begin at `a` and `i`
                // respectively. This value is ignored for nesting levels with unordered glyphs.
                startNumber?: Integer;
                // The text style of bullets at this level of nesting.
                textStyle?: Schema.TextStyle;
            }
            // A mask that indicates which of the fields on the base NestingLevel have been changed in this suggestion. For any field
            // set to true, there is a new suggested value.
            interface NestingLevelSuggestionState {
                // Indicates if there was a suggested change to bullet_alignment.
                bulletAlignmentSuggested?: boolean;
                // Indicates if there was a suggested change to glyph_format.
                glyphFormatSuggested?: boolean;
                // Indicates if there was a suggested change to glyph_symbol.
                glyphSymbolSuggested?: boolean;
                // Indicates if there was a suggested change to glyph_type.
                glyphTypeSuggested?: boolean;
                // Indicates if there was a suggested change to indent_first_line.
                indentFirstLineSuggested?: boolean;
                // Indicates if there was a suggested change to indent_start.
                indentStartSuggested?: boolean;
                // Indicates if there was a suggested change to start_number.
                startNumberSuggested?: boolean;
                // A mask that indicates which of the fields in text style have been changed in this suggestion.
                textStyleSuggestionState?: Schema.TextStyleSuggestionState;
            }
            // A collection of object IDs.
            interface ObjectReferences {
                // The object IDs.
                objectIds?: string[];
            }
            // A color that can either be fully opaque or fully transparent.
            interface OptionalColor {
                // If set, this will be used as an opaque color. If unset, this represents a transparent color.
                color?: Schema.Color;
            }
            // A ParagraphElement representing a page break. A page break makes the subsequent text start at the top of the next page.
            interface PageBreak {
                // The suggested deletion IDs. If empty, then there are no suggested deletions of this content.
                suggestedDeletionIds?: string[];
                // The suggested insertion IDs. A PageBreak may have multiple insertion IDs if it is a nested suggested change. If empty,
                // then this is not a suggested insertion.
                suggestedInsertionIds?: string[];
                // The suggested text style changes to this PageBreak, keyed by suggestion ID.
                suggestedTextStyleChanges?: object;
                // The text style of this PageBreak. Similar to text content, like text runs and footnote references, the text style of a
                // page break can affect content layout as well as the styling of text inserted adjacent to it.
                textStyle?: Schema.TextStyle;
            }
            // A StructuralElement representing a paragraph. A paragraph is a range of content that is terminated with a newline
            // character.
            interface Paragraph {
                // The bullet for this paragraph. If not present, the paragraph does not belong to a list.
                bullet?: Schema.Bullet;
                // The content of the paragraph broken down into its component parts.
                elements?: Schema.ParagraphElement[];
                // The style of this paragraph.
                paragraphStyle?: Schema.ParagraphStyle;
                // The IDs of the positioned objects tethered to this paragraph.
                positionedObjectIds?: string[];
                // The suggested changes to this paragraph's bullet.
                suggestedBulletChanges?: object;
                // The suggested paragraph style changes to this paragraph, keyed by suggestion ID.
                suggestedParagraphStyleChanges?: object;
                // The IDs of the positioned objects that are suggested to be attached to this paragraph, keyed by suggestion ID.
                suggestedPositionedObjectIds?: object;
            }
            // A border around a paragraph.
            interface ParagraphBorder {
                // The color of the border.
                color?: Schema.OptionalColor;
                // The dash style of the border.
                dashStyle?: string;
                // The padding of the border.
                padding?: Schema.Dimension;
                // The width of the border.
                width?: Schema.Dimension;
            }
            // A ParagraphElement describes content within a Paragraph.
            interface ParagraphElement {
                // An auto text paragraph element.
                autoText?: Schema.AutoText;
                // A column break paragraph element.
                columnBreak?: Schema.ColumnBreak;
                // The zero-base end index of this paragraph element, exclusive, in UTF-16 code units.
                endIndex?: Integer;
                // An equation paragraph element.
                equation?: Schema.Equation;
                // A footnote reference paragraph element.
                footnoteReference?: Schema.FootnoteReference;
                // A horizontal rule paragraph element.
                horizontalRule?: Schema.HorizontalRule;
                // An inline object paragraph element.
                inlineObjectElement?: Schema.InlineObjectElement;
                // A page break paragraph element.
                pageBreak?: Schema.PageBreak;
                // The zero-based start index of this paragraph element, in UTF-16 code units.
                startIndex?: Integer;
                // A text run paragraph element.
                textRun?: Schema.TextRun;
            }
            // Styles that apply to a whole paragraph. Inherited paragraph styles are represented as unset fields in this message. A
            // paragraph style's parent depends on where the paragraph style is defined: * The ParagraphStyle on a Paragraph inherits
            // from the paragraph's corresponding named style type. * The ParagraphStyle on a named style inherits from the normal text
            // named style. * The ParagraphStyle of the normal text named style inherits from the default paragraph style in the Docs
            // editor. * The ParagraphStyle on a Paragraph element that is contained in a table may inherit its paragraph style from
            // the table style. If the paragraph style does not inherit from a parent, unsetting fields will revert the style to a
            // value matching the defaults in the Docs editor.
            interface ParagraphStyle {
                // The text alignment for this paragraph.
                alignment?: string;
                // Whether to avoid widows and orphans for the paragraph. If unset, the value is inherited from the parent.
                avoidWidowAndOrphan?: boolean;
                // The border between this paragraph and the next and previous paragraphs. If unset, the value is inherited from the
                // parent. The between border is rendered when the adjacent paragraph has the same border and indent properties. Paragraph
                // borders cannot be partially updated. When making changes to a paragraph border the new border must be specified in its
                // entirety.
                borderBetween?: Schema.ParagraphBorder;
                // The border at the bottom of this paragraph. If unset, the value is inherited from the parent. The bottom border is
                // rendered when the paragraph below has different border and indent properties. Paragraph borders cannot be partially
                // updated. When making changes to a paragraph border the new border must be specified in its entirety.
                borderBottom?: Schema.ParagraphBorder;
                // The border to the left of this paragraph. If unset, the value is inherited from the parent. Paragraph borders cannot be
                // partially updated. When making changes to a paragraph border the new border must be specified in its entirety.
                borderLeft?: Schema.ParagraphBorder;
                // The border to the right of this paragraph. If unset, the value is inherited from the parent. Paragraph borders cannot be
                // partially updated. When making changes to a paragraph border the new border must be specified in its entirety.
                borderRight?: Schema.ParagraphBorder;
                // The border at the top of this paragraph. If unset, the value is inherited from the parent. The top border is rendered
                // when the paragraph above has different border and indent properties. Paragraph borders cannot be partially updated. When
                // making changes to a paragraph border the new border must be specified in its entirety.
                borderTop?: Schema.ParagraphBorder;
                // The text direction of this paragraph. If unset, the value defaults to LEFT_TO_RIGHT since paragraph direction is not
                // inherited.
                direction?: string;
                // The heading ID of the paragraph. If empty, then this paragraph is not a heading. This property is read-only.
                headingId?: string;
                // The amount of indentation for the paragraph on the side that corresponds to the end of the text, based on the current
                // paragraph direction. If unset, the value is inherited from the parent.
                indentEnd?: Schema.Dimension;
                // The amount of indentation for the first line of the paragraph. If unset, the value is inherited from the parent.
                indentFirstLine?: Schema.Dimension;
                // The amount of indentation for the paragraph on the side that corresponds to the start of the text, based on the current
                // paragraph direction. If unset, the value is inherited from the parent.
                indentStart?: Schema.Dimension;
                // Whether all lines of the paragraph should be laid out on the same page or column if possible. If unset, the value is
                // inherited from the parent.
                keepLinesTogether?: boolean;
                // Whether at least a part of this paragraph should be laid out on the same page or column as the next paragraph if
                // possible. If unset, the value is inherited from the parent.
                keepWithNext?: boolean;
                // The amount of space between lines, as a percentage of normal, where normal is represented as 100.0. If unset, the value
                // is inherited from the parent.
                lineSpacing?: number;
                // The named style type of the paragraph. Since updating the named style type affects other properties within
                // ParagraphStyle, the named style type is applied before the other properties are updated.
                namedStyleType?: string;
                // The shading of the paragraph. If unset, the value is inherited from the parent.
                shading?: Schema.Shading;
                // The amount of extra space above the paragraph. If unset, the value is inherited from the parent.
                spaceAbove?: Schema.Dimension;
                // The amount of extra space below the paragraph. If unset, the value is inherited from the parent.
                spaceBelow?: Schema.Dimension;
                // The spacing mode for the paragraph.
                spacingMode?: string;
                // A list of the tab stops for this paragraph. The list of tab stops is not inherited. This property is read-only.
                tabStops?: Schema.TabStop[];
            }
            // A mask that indicates which of the fields on the base ParagraphStyle have been changed in this suggestion. For any field
            // set to true, there is a new suggested value.
            interface ParagraphStyleSuggestionState {
                // Indicates if there was a suggested change to alignment.
                alignmentSuggested?: boolean;
                // Indicates if there was a suggested change to avoid_widow_and_orphan.
                avoidWidowAndOrphanSuggested?: boolean;
                // Indicates if there was a suggested change to border_between.
                borderBetweenSuggested?: boolean;
                // Indicates if there was a suggested change to border_bottom.
                borderBottomSuggested?: boolean;
                // Indicates if there was a suggested change to border_left.
                borderLeftSuggested?: boolean;
                // Indicates if there was a suggested change to border_right.
                borderRightSuggested?: boolean;
                // Indicates if there was a suggested change to border_top.
                borderTopSuggested?: boolean;
                // Indicates if there was a suggested change to direction.
                directionSuggested?: boolean;
                // Indicates if there was a suggested change to heading_id.
                headingIdSuggested?: boolean;
                // Indicates if there was a suggested change to indent_end.
                indentEndSuggested?: boolean;
                // Indicates if there was a suggested change to indent_first_line.
                indentFirstLineSuggested?: boolean;
                // Indicates if there was a suggested change to indent_start.
                indentStartSuggested?: boolean;
                // Indicates if there was a suggested change to keep_lines_together.
                keepLinesTogetherSuggested?: boolean;
                // Indicates if there was a suggested change to keep_with_next.
                keepWithNextSuggested?: boolean;
                // Indicates if there was a suggested change to line_spacing.
                lineSpacingSuggested?: boolean;
                // Indicates if there was a suggested change to named_style_type.
                namedStyleTypeSuggested?: boolean;
                // A mask that indicates which of the fields in shading have been changed in this suggestion.
                shadingSuggestionState?: Schema.ShadingSuggestionState;
                // Indicates if there was a suggested change to space_above.
                spaceAboveSuggested?: boolean;
                // Indicates if there was a suggested change to space_below.
                spaceBelowSuggested?: boolean;
                // Indicates if there was a suggested change to spacing_mode.
                spacingModeSuggested?: boolean;
            }
            // An object that is tethered to a Paragraph and positioned relative to the beginning of the paragraph. A PositionedObject
            // contains an EmbeddedObject such as an image.
            interface PositionedObject {
                // The ID of this positioned object.
                objectId?: string;
                // The properties of this positioned object.
                positionedObjectProperties?: Schema.PositionedObjectProperties;
                // The suggested deletion IDs. If empty, then there are no suggested deletions of this content.
                suggestedDeletionIds?: string[];
                // The suggested insertion ID. If empty, then this is not a suggested insertion.
                suggestedInsertionId?: string;
                // The suggested changes to the positioned object properties, keyed by suggestion ID.
                suggestedPositionedObjectPropertiesChanges?: object;
            }
            // The positioning of a PositionedObject. The positioned object is positioned relative to the beginning of the Paragraph it
            // is tethered to.
            interface PositionedObjectPositioning {
                // The layout of this positioned object.
                layout?: string;
                // The offset of the left edge of the positioned object relative to the beginning of the Paragraph it is tethered to. The
                // exact positioning of the object can depend on other content in the document and the document's styling.
                leftOffset?: Schema.Dimension;
                // The offset of the top edge of the positioned object relative to the beginning of the Paragraph it is tethered to. The
                // exact positioning of the object can depend on other content in the document and the document's styling.
                topOffset?: Schema.Dimension;
            }
            // A mask that indicates which of the fields on the base PositionedObjectPositioning have been changed in this suggestion.
            // For any field set to true, there is a new suggested value.
            interface PositionedObjectPositioningSuggestionState {
                // Indicates if there was a suggested change to layout.
                layoutSuggested?: boolean;
                // Indicates if there was a suggested change to left_offset.
                leftOffsetSuggested?: boolean;
                // Indicates if there was a suggested change to top_offset.
                topOffsetSuggested?: boolean;
            }
            // Properties of a PositionedObject.
            interface PositionedObjectProperties {
                // The embedded object of this positioned object.
                embeddedObject?: Schema.EmbeddedObject;
                // The positioning of this positioned object relative to the newline of the Paragraph that references this positioned
                // object.
                positioning?: Schema.PositionedObjectPositioning;
            }
            // A mask that indicates which of the fields on the base PositionedObjectProperties have been changed in this suggestion.
            // For any field set to true, there is a new suggested value.
            interface PositionedObjectPropertiesSuggestionState {
                // A mask that indicates which of the fields in embedded_object have been changed in this suggestion.
                embeddedObjectSuggestionState?: Schema.EmbeddedObjectSuggestionState;
                // A mask that indicates which of the fields in positioning have been changed in this suggestion.
                positioningSuggestionState?: Schema.PositionedObjectPositioningSuggestionState;
            }
            // Specifies a contiguous range of text.
            interface Range {
                // The zero-based end index of this range, exclusive, in UTF-16 code units. In all current uses, an end index must be
                // provided. This field is an Int32Value in order to accommodate future use cases with open-ended ranges.
                endIndex?: Integer;
                // The ID of the header, footer or footnote that this range is contained in. An empty segment ID signifies the document's
                // body.
                segmentId?: string;
                // The zero-based start index of this range, in UTF-16 code units. In all current uses, a start index must be provided.
                // This field is an Int32Value in order to accommodate future use cases with open-ended ranges.
                startIndex?: Integer;
            }
            // Replaces all instances of text matching a criteria with replace text.
            interface ReplaceAllTextRequest {
                // Finds text in the document matching this substring.
                containsText?: Schema.SubstringMatchCriteria;
                // The text that will replace the matched text.
                replaceText?: string;
            }
            // The result of replacing text.
            interface ReplaceAllTextResponse {
                // The number of occurrences changed by replacing all text.
                occurrencesChanged?: Integer;
            }
            // Replaces an existing image with a new image. Replacing an image removes some image effects from the existing image in
            // order to mirror the behavior of the Docs editor.
            interface ReplaceImageRequest {
                // The ID of the existing image that will be replaced.
                imageObjectId?: string;
                // The replacement method.
                imageReplaceMethod?: string;
                // The URI of the new image. The image is fetched once at insertion time and a copy is stored for display inside the
                // document. Images must be less than 50MB in size, cannot exceed 25 megapixels, and must be in one of PNG, JPEG, or GIF
                // format. The provided URI can be at most 2 kB in length. The URI itself is saved with the image, and exposed via the
                // ImageProperties.source_uri field.
                uri?: string;
            }
            // Replaces the contents of the specified NamedRange or NamedRanges with the given replacement content. Note that an
            // individual NamedRange may consist of multiple discontinuous ranges. In this case, only the content in the first range
            // will be replaced. The other ranges and their content will be deleted. In cases where replacing or deleting any ranges
            // would result in an invalid document structure, a 400 bad request error is returned.
            interface ReplaceNamedRangeContentRequest {
                // The ID of the named range whose content will be replaced. If there is no named range with the given ID a 400 bad request
                // error is returned.
                namedRangeId?: string;
                // The name of the NamedRanges whose content will be replaced. If there are multiple named ranges with the given name, then
                // the content of each one will be replaced. If there are no named ranges with the given name, then the request will be a
                // no-op.
                namedRangeName?: string;
                // Replaces the content of the specified named range(s) with the given text.
                text?: string;
            }
            // A single update to apply to a document.
            interface Request {
                // Creates a footer.
                createFooter?: Schema.CreateFooterRequest;
                // Creates a footnote.
                createFootnote?: Schema.CreateFootnoteRequest;
                // Creates a header.
                createHeader?: Schema.CreateHeaderRequest;
                // Creates a named range.
                createNamedRange?: Schema.CreateNamedRangeRequest;
                // Creates bullets for paragraphs.
                createParagraphBullets?: Schema.CreateParagraphBulletsRequest;
                // Deletes content from the document.
                deleteContentRange?: Schema.DeleteContentRangeRequest;
                // Deletes a footer from the document.
                deleteFooter?: Schema.DeleteFooterRequest;
                // Deletes a header from the document.
                deleteHeader?: Schema.DeleteHeaderRequest;
                // Deletes a named range.
                deleteNamedRange?: Schema.DeleteNamedRangeRequest;
                // Deletes bullets from paragraphs.
                deleteParagraphBullets?: Schema.DeleteParagraphBulletsRequest;
                // Deletes a positioned object from the document.
                deletePositionedObject?: Schema.DeletePositionedObjectRequest;
                // Deletes a column from a table.
                deleteTableColumn?: Schema.DeleteTableColumnRequest;
                // Deletes a row from a table.
                deleteTableRow?: Schema.DeleteTableRowRequest;
                // Inserts an inline image at the specified location.
                insertInlineImage?: Schema.InsertInlineImageRequest;
                // Inserts a page break at the specified location.
                insertPageBreak?: Schema.InsertPageBreakRequest;
                // Inserts a section break at the specified location.
                insertSectionBreak?: Schema.InsertSectionBreakRequest;
                // Inserts a table at the specified location.
                insertTable?: Schema.InsertTableRequest;
                // Inserts an empty column into a table.
                insertTableColumn?: Schema.InsertTableColumnRequest;
                // Inserts an empty row into a table.
                insertTableRow?: Schema.InsertTableRowRequest;
                // Inserts text at the specified location.
                insertText?: Schema.InsertTextRequest;
                // Merges cells in a table.
                mergeTableCells?: Schema.MergeTableCellsRequest;
                // Replaces all instances of the specified text.
                replaceAllText?: Schema.ReplaceAllTextRequest;
                // Replaces an image in the document.
                replaceImage?: Schema.ReplaceImageRequest;
                // Replaces the content in a named range.
                replaceNamedRangeContent?: Schema.ReplaceNamedRangeContentRequest;
                // Unmerges cells in a table.
                unmergeTableCells?: Schema.UnmergeTableCellsRequest;
                // Updates the style of the document.
                updateDocumentStyle?: Schema.UpdateDocumentStyleRequest;
                // Updates the paragraph style at the specified range.
                updateParagraphStyle?: Schema.UpdateParagraphStyleRequest;
                // Updates the section style of the specified range.
                updateSectionStyle?: Schema.UpdateSectionStyleRequest;
                // Updates the style of table cells.
                updateTableCellStyle?: Schema.UpdateTableCellStyleRequest;
                // Updates the properties of columns in a table.
                updateTableColumnProperties?: Schema.UpdateTableColumnPropertiesRequest;
                // Updates the row style in a table.
                updateTableRowStyle?: Schema.UpdateTableRowStyleRequest;
                // Updates the text style at the specified range.
                updateTextStyle?: Schema.UpdateTextStyleRequest;
            }
            // A single response from an update.
            interface Response {
                // The result of creating a footer.
                createFooter?: Schema.CreateFooterResponse;
                // The result of creating a footnote.
                createFootnote?: Schema.CreateFootnoteResponse;
                // The result of creating a header.
                createHeader?: Schema.CreateHeaderResponse;
                // The result of creating a named range.
                createNamedRange?: Schema.CreateNamedRangeResponse;
                // The result of inserting an inline image.
                insertInlineImage?: Schema.InsertInlineImageResponse;
                // The result of inserting an inline Google Sheets chart.
                insertInlineSheetsChart?: Schema.InsertInlineSheetsChartResponse;
                // The result of replacing text.
                replaceAllText?: Schema.ReplaceAllTextResponse;
            }
            // An RGB color.
            interface RgbColor {
                // The blue component of the color, from 0.0 to 1.0.
                blue?: number;
                // The green component of the color, from 0.0 to 1.0.
                green?: number;
                // The red component of the color, from 0.0 to 1.0.
                red?: number;
            }
            // A StructuralElement representing a section break. A section is a range of content which has the same SectionStyle. A
            // section break represents the start of a new section, and the section style applies to the section after the section
            // break. The document body always begins with a section break.
            interface SectionBreak {
                // The style of the section after this section break.
                sectionStyle?: Schema.SectionStyle;
                // The suggested deletion IDs. If empty, then there are no suggested deletions of this content.
                suggestedDeletionIds?: string[];
                // The suggested insertion IDs. A SectionBreak may have multiple insertion IDs if it is a nested suggested change. If
                // empty, then this is not a suggested insertion.
                suggestedInsertionIds?: string[];
            }
            // Properties that apply to a section's column.
            interface SectionColumnProperties {
                // The padding at the end of the column.
                paddingEnd?: Schema.Dimension;
                // Output only. The width of the column.
                width?: Schema.Dimension;
            }
            // The styling that applies to a section.
            interface SectionStyle {
                // The section's columns properties. If empty, the section contains one column with the default properties in the Docs
                // editor. A section can be updated to have no more than three columns. When updating this property, setting a concrete
                // value is required. Unsetting this property will result in a 400 bad request error.
                columnProperties?: Schema.SectionColumnProperties[];
                // The style of column separators. This style can be set even when there is one column in the section. When updating this
                // property, setting a concrete value is required. Unsetting this property results in a 400 bad request error.
                columnSeparatorStyle?: string;
                // The content direction of this section. If unset, the value defaults to LEFT_TO_RIGHT. When updating this property,
                // setting a concrete value is required. Unsetting this property results in a 400 bad request error.
                contentDirection?: string;
                // The ID of the default footer. If unset, the value inherits from the previous SectionBreak's SectionStyle. If the value
                // is unset in the first SectionBreak, it inherits from DocumentStyle's default_footer_id. This property is read-only.
                defaultFooterId?: string;
                // The ID of the default header. If unset, the value inherits from the previous SectionBreak's SectionStyle. If the value
                // is unset in the first SectionBreak, it inherits from DocumentStyle's default_header_id. This property is read-only.
                defaultHeaderId?: string;
                // The ID of the footer used only for even pages. If the value of DocumentStyle's use_even_page_header_footer is true, this
                // value is used for the footers on even pages in the section. If it is false, the footers on even pages uses the
                // default_footer_id. If unset, the value inherits from the previous SectionBreak's SectionStyle. If the value is unset in
                // the first SectionBreak, it inherits from DocumentStyle's even_page_footer_id. This property is read-only.
                evenPageFooterId?: string;
                // The ID of the header used only for even pages. If the value of DocumentStyle's use_even_page_header_footer is true, this
                // value is used for the headers on even pages in the section. If it is false, the headers on even pages uses the
                // default_header_id. If unset, the value inherits from the previous SectionBreak's SectionStyle. If the value is unset in
                // the first SectionBreak, it inherits from DocumentStyle's even_page_header_id. This property is read-only.
                evenPageHeaderId?: string;
                // The ID of the footer used only for the first page of the section. If use_first_page_header_footer is true, this value is
                // used for the footer on the first page of the section. If it is false, the footer on the first page of the section uses
                // the default_footer_id. If unset, the value inherits from the previous SectionBreak's SectionStyle. If the value is unset
                // in the first SectionBreak, it inherits from DocumentStyle's first_page_footer_id. This property is read-only.
                firstPageFooterId?: string;
                // The ID of the header used only for the first page of the section. If use_first_page_header_footer is true, this value is
                // used for the header on the first page of the section. If it is false, the header on the first page of the section uses
                // the default_header_id. If unset, the value inherits from the previous SectionBreak's SectionStyle. If the value is unset
                // in the first SectionBreak, it inherits from DocumentStyle's first_page_header_id. This property is read-only.
                firstPageHeaderId?: string;
                // The bottom page margin of the section. If unset, uses margin_bottom from DocumentStyle. When updating this property,
                // setting a concrete value is required. Unsetting this property results in a 400 bad request error.
                marginBottom?: Schema.Dimension;
                // The footer margin of the section. If unset, uses margin_footer from DocumentStyle. If updated,
                // use_custom_header_footer_margins is set to true on DocumentStyle. The value of use_custom_header_footer_margins on
                // DocumentStyle indicates if a footer margin is being respected for this section When updating this property, setting a
                // concrete value is required. Unsetting this property results in a 400 bad request error.
                marginFooter?: Schema.Dimension;
                // The header margin of the section. If unset, uses margin_header from DocumentStyle. If updated,
                // use_custom_header_footer_margins is set to true on DocumentStyle. The value of use_custom_header_footer_margins on
                // DocumentStyle indicates if a header margin is being respected for this section. When updating this property, setting a
                // concrete value is required. Unsetting this property results in a 400 bad request error.
                marginHeader?: Schema.Dimension;
                // The left page margin of the section. If unset, uses margin_left from DocumentStyle. Updating left margin causes columns
                // in this section to resize. Since the margin affects column width, it is applied before column properties. When updating
                // this property, setting a concrete value is required. Unsetting this property results in a 400 bad request error.
                marginLeft?: Schema.Dimension;
                // The right page margin of the section. If unset, uses margin_right from DocumentStyle. Updating right margin causes
                // columns in this section to resize. Since the margin affects column width, it is applied before column properties. When
                // updating this property, setting a concrete value is required. Unsetting this property results in a 400 bad request
                // error.
                marginRight?: Schema.Dimension;
                // The top page margin of the section. If unset, uses margin_top from DocumentStyle. When updating this property, setting a
                // concrete value is required. Unsetting this property results in a 400 bad request error.
                marginTop?: Schema.Dimension;
                // The page number from which to start counting the number of pages for this section. If unset, page numbering continues
                // from the previous section. If the value is unset in the first SectionBreak, refer to DocumentStyle's page_number_start.
                // When updating this property, setting a concrete value is required. Unsetting this property results in a 400 bad request
                // error.
                pageNumberStart?: Integer;
                // Output only. The type of section.
                sectionType?: string;
                // Indicates whether to use the first page header / footer IDs for the first page of the section. If unset, it inherits
                // from DocumentStyle's use_first_page_header_footer for the first section. If the value is unset for subsequent sectors,
                // it should be interpreted as false. When updating this property, setting a concrete value is required. Unsetting this
                // property results in a 400 bad request error.
                useFirstPageHeaderFooter?: boolean;
            }
            // The shading of a paragraph.
            interface Shading {
                // The background color of this paragraph shading.
                backgroundColor?: Schema.OptionalColor;
            }
            // A mask that indicates which of the fields on the base Shading have been changed in this suggested change. For any field
            // set to true, there is a new suggested value.
            interface ShadingSuggestionState {
                // Indicates if there was a suggested change to the Shading.
                backgroundColorSuggested?: boolean;
            }
            // A reference to a linked chart embedded from Google Sheets.
            interface SheetsChartReference {
                // The ID of the specific chart in the Google Sheets spreadsheet that is embedded.
                chartId?: Integer;
                // The ID of the Google Sheets spreadsheet that contains the source chart.
                spreadsheetId?: string;
            }
            // A mask that indicates which of the fields on the base SheetsChartReference have been changed in this suggestion. For any
            // field set to true, there is a new suggested value.
            interface SheetsChartReferenceSuggestionState {
                // Indicates if there was a suggested change to chart_id.
                chartIdSuggested?: boolean;
                // Indicates if there was a suggested change to spreadsheet_id.
                spreadsheetIdSuggested?: boolean;
            }
            // A width and height.
            interface Size {
                // The height of the object.
                height?: Schema.Dimension;
                // The width of the object.
                width?: Schema.Dimension;
            }
            // A mask that indicates which of the fields on the base Size have been changed in this suggestion. For any field set to
            // true, the Size has a new suggested value.
            interface SizeSuggestionState {
                // Indicates if there was a suggested change to height.
                heightSuggested?: boolean;
                // Indicates if there was a suggested change to width.
                widthSuggested?: boolean;
            }
            // A StructuralElement describes content that provides structure to the document.
            interface StructuralElement {
                // The zero-based end index of this structural element, exclusive, in UTF-16 code units.
                endIndex?: Integer;
                // A paragraph type of structural element.
                paragraph?: Schema.Paragraph;
                // A section break type of structural element.
                sectionBreak?: Schema.SectionBreak;
                // The zero-based start index of this structural element, in UTF-16 code units.
                startIndex?: Integer;
                // A table type of structural element.
                table?: Schema.Table;
                // A table of contents type of structural element.
                tableOfContents?: Schema.TableOfContents;
            }
            // A criteria that matches a specific string of text in the document.
            interface SubstringMatchCriteria {
                // Indicates whether the search should respect case: - `True`: the search is case sensitive. - `False`: the search is case
                // insensitive.
                matchCase?: boolean;
                // The text to search for in the document.
                text?: string;
            }
            // A suggested change to a Bullet.
            interface SuggestedBullet {
                // A Bullet that only includes the changes made in this suggestion. This can be used along with the bullet_suggestion_state
                // to see which fields have changed and their new values.
                bullet?: Schema.Bullet;
                // A mask that indicates which of the fields on the base Bullet have been changed in this suggestion.
                bulletSuggestionState?: Schema.BulletSuggestionState;
            }
            // A suggested change to the DocumentStyle.
            interface SuggestedDocumentStyle {
                // A DocumentStyle that only includes the changes made in this suggestion. This can be used along with the
                // document_style_suggestion_state to see which fields have changed and their new values.
                documentStyle?: Schema.DocumentStyle;
                // A mask that indicates which of the fields on the base DocumentStyle have been changed in this suggestion.
                documentStyleSuggestionState?: Schema.DocumentStyleSuggestionState;
            }
            // A suggested change to InlineObjectProperties.
            interface SuggestedInlineObjectProperties {
                // An InlineObjectProperties that only includes the changes made in this suggestion. This can be used along with the
                // inline_object_properties_suggestion_state to see which fields have changed and their new values.
                inlineObjectProperties?: Schema.InlineObjectProperties;
                // A mask that indicates which of the fields on the base InlineObjectProperties have been changed in this suggestion.
                inlineObjectPropertiesSuggestionState?: Schema.InlineObjectPropertiesSuggestionState;
            }
            // A suggested change to ListProperties.
            interface SuggestedListProperties {
                // A ListProperties that only includes the changes made in this suggestion. This can be used along with the
                // list_properties_suggestion_state to see which fields have changed and their new values.
                listProperties?: Schema.ListProperties;
                // A mask that indicates which of the fields on the base ListProperties have been changed in this suggestion.
                listPropertiesSuggestionState?: Schema.ListPropertiesSuggestionState;
            }
            // A suggested change to the NamedStyles.
            interface SuggestedNamedStyles {
                // A NamedStyles that only includes the changes made in this suggestion. This can be used along with the
                // named_styles_suggestion_state to see which fields have changed and their new values.
                namedStyles?: Schema.NamedStyles;
                // A mask that indicates which of the fields on the base NamedStyles have been changed in this suggestion.
                namedStylesSuggestionState?: Schema.NamedStylesSuggestionState;
            }
            // A suggested change to a ParagraphStyle.
            interface SuggestedParagraphStyle {
                // A ParagraphStyle that only includes the changes made in this suggestion. This can be used along with the
                // paragraph_suggestion_state to see which fields have changed and their new values.
                paragraphStyle?: Schema.ParagraphStyle;
                // A mask that indicates which of the fields on the base ParagraphStyle have been changed in this suggestion.
                paragraphStyleSuggestionState?: Schema.ParagraphStyleSuggestionState;
            }
            // A suggested change to PositionedObjectProperties.
            interface SuggestedPositionedObjectProperties {
                // A PositionedObjectProperties that only includes the changes made in this suggestion. This can be used along with the
                // positioned_object_properties_suggestion_state to see which fields have changed and their new values.
                positionedObjectProperties?: Schema.PositionedObjectProperties;
                // A mask that indicates which of the fields on the base PositionedObjectProperties have been changed in this suggestion.
                positionedObjectPropertiesSuggestionState?: Schema.PositionedObjectPropertiesSuggestionState;
            }
            // A suggested change to a TableCellStyle.
            interface SuggestedTableCellStyle {
                // A TableCellStyle that only includes the changes made in this suggestion. This can be used along with the
                // table_cell_style_suggestion_state to see which fields have changed and their new values.
                tableCellStyle?: Schema.TableCellStyle;
                // A mask that indicates which of the fields on the base TableCellStyle have been changed in this suggestion.
                tableCellStyleSuggestionState?: Schema.TableCellStyleSuggestionState;
            }
            // A suggested change to a TableRowStyle.
            interface SuggestedTableRowStyle {
                // A TableRowStyle that only includes the changes made in this suggestion. This can be used along with the
                // table_row_style_suggestion_state to see which fields have changed and their new values.
                tableRowStyle?: Schema.TableRowStyle;
                // A mask that indicates which of the fields on the base TableRowStyle have been changed in this suggestion.
                tableRowStyleSuggestionState?: Schema.TableRowStyleSuggestionState;
            }
            // A suggested change to a TextStyle.
            interface SuggestedTextStyle {
                // A TextStyle that only includes the changes made in this suggestion. This can be used along with the
                // text_style_suggestion_state to see which fields have changed and their new values.
                textStyle?: Schema.TextStyle;
                // A mask that indicates which of the fields on the base TextStyle have been changed in this suggestion.
                textStyleSuggestionState?: Schema.TextStyleSuggestionState;
            }
            // A tab stop within a paragraph.
            interface TabStop {
                // The alignment of this tab stop. If unset, the value defaults to START.
                alignment?: string;
                // The offset between this tab stop and the start margin.
                offset?: Schema.Dimension;
            }
            // A StructuralElement representing a table.
            interface Table {
                // Number of columns in the table. It is possible for a table to be non-rectangular, so some rows may have a different
                // number of cells.
                columns?: Integer;
                // Number of rows in the table.
                rows?: Integer;
                // The suggested deletion IDs. If empty, then there are no suggested deletions of this content.
                suggestedDeletionIds?: string[];
                // The suggested insertion IDs. A Table may have multiple insertion IDs if it is a nested suggested change. If empty, then
                // this is not a suggested insertion.
                suggestedInsertionIds?: string[];
                // The contents and style of each row.
                tableRows?: Schema.TableRow[];
                // The style of the table.
                tableStyle?: Schema.TableStyle;
            }
            // The contents and style of a cell in a Table.
            interface TableCell {
                // The content of the cell.
                content?: Schema.StructuralElement[];
                // The zero-based end index of this cell, exclusive, in UTF-16 code units.
                endIndex?: Integer;
                // The zero-based start index of this cell, in UTF-16 code units.
                startIndex?: Integer;
                // The suggested deletion IDs. If empty, then there are no suggested deletions of this content.
                suggestedDeletionIds?: string[];
                // The suggested insertion IDs. A TableCell may have multiple insertion IDs if it is a nested suggested change. If empty,
                // then this is not a suggested insertion.
                suggestedInsertionIds?: string[];
                // The suggested changes to the table cell style, keyed by suggestion ID.
                suggestedTableCellStyleChanges?: object;
                // The style of the cell.
                tableCellStyle?: Schema.TableCellStyle;
            }
            // A border around a table cell. Table cell borders cannot be transparent. To hide a table cell border, make its width 0.
            interface TableCellBorder {
                // The color of the border. This color cannot be transparent.
                color?: Schema.OptionalColor;
                // The dash style of the border.
                dashStyle?: string;
                // The width of the border.
                width?: Schema.Dimension;
            }
            // Location of a single cell within a table.
            interface TableCellLocation {
                // The zero-based column index. For example, the second column in the table has a column index of 1.
                columnIndex?: Integer;
                // The zero-based row index. For example, the second row in the table has a row index of 1.
                rowIndex?: Integer;
                // The location where the table starts in the document.
                tableStartLocation?: Schema.Location;
            }
            // The style of a TableCell. Inherited table cell styles are represented as unset fields in this message. A table cell
            // style can inherit from the table's style.
            interface TableCellStyle {
                // The background color of the cell.
                backgroundColor?: Schema.OptionalColor;
                // The bottom border of the cell.
                borderBottom?: Schema.TableCellBorder;
                // The left border of the cell.
                borderLeft?: Schema.TableCellBorder;
                // The right border of the cell.
                borderRight?: Schema.TableCellBorder;
                // The top border of the cell.
                borderTop?: Schema.TableCellBorder;
                // The column span of the cell. This property is read-only.
                columnSpan?: Integer;
                // The alignment of the content in the table cell. The default alignment matches the alignment for newly created table
                // cells in the Docs editor.
                contentAlignment?: string;
                // The bottom padding of the cell.
                paddingBottom?: Schema.Dimension;
                // The left padding of the cell.
                paddingLeft?: Schema.Dimension;
                // The right padding of the cell.
                paddingRight?: Schema.Dimension;
                // The top padding of the cell.
                paddingTop?: Schema.Dimension;
                // The row span of the cell. This property is read-only.
                rowSpan?: Integer;
            }
            // A mask that indicates which of the fields on the base TableCellStyle have been changed in this suggestion. For any field
            // set to true, there is a new suggested value.
            interface TableCellStyleSuggestionState {
                // Indicates if there was a suggested change to background_color.
                backgroundColorSuggested?: boolean;
                // Indicates if there was a suggested change to border_bottom.
                borderBottomSuggested?: boolean;
                // Indicates if there was a suggested change to border_left.
                borderLeftSuggested?: boolean;
                // Indicates if there was a suggested change to border_right.
                borderRightSuggested?: boolean;
                // Indicates if there was a suggested change to border_top.
                borderTopSuggested?: boolean;
                // Indicates if there was a suggested change to column_span.
                columnSpanSuggested?: boolean;
                // Indicates if there was a suggested change to content_alignment.
                contentAlignmentSuggested?: boolean;
                // Indicates if there was a suggested change to padding_bottom.
                paddingBottomSuggested?: boolean;
                // Indicates if there was a suggested change to padding_left.
                paddingLeftSuggested?: boolean;
                // Indicates if there was a suggested change to padding_right.
                paddingRightSuggested?: boolean;
                // Indicates if there was a suggested change to padding_top.
                paddingTopSuggested?: boolean;
                // Indicates if there was a suggested change to row_span.
                rowSpanSuggested?: boolean;
            }
            // The properties of a column in a table.
            interface TableColumnProperties {
                // The width of the column. Set when the column's `width_type` is FIXED_WIDTH.
                width?: Schema.Dimension;
                // The width type of the column.
                widthType?: string;
            }
            // A StructuralElement representing a table of contents.
            interface TableOfContents {
                // The content of the table of contents.
                content?: Schema.StructuralElement[];
                // The suggested deletion IDs. If empty, then there are no suggested deletions of this content.
                suggestedDeletionIds?: string[];
                // The suggested insertion IDs. A TableOfContents may have multiple insertion IDs if it is a nested suggested change. If
                // empty, then this is not a suggested insertion.
                suggestedInsertionIds?: string[];
            }
            // A table range represents a reference to a subset of a table. It's important to note that the cells specified by a table
            // range do not necessarily form a rectangle. For example, let's say we have a 3 x 3 table where all the cells of the last
            // row are merged together. The table looks like this: [ ] A table range with table cell location = (table_start_location,
            // row = 0, column = 0), row span = 3 and column span = 2 specifies the following cells: x x [ x x x ]
            interface TableRange {
                // The column span of the table range.
                columnSpan?: Integer;
                // The row span of the table range.
                rowSpan?: Integer;
                // The cell location where the table range starts.
                tableCellLocation?: Schema.TableCellLocation;
            }
            // The contents and style of a row in a Table.
            interface TableRow {
                // The zero-based end index of this row, exclusive, in UTF-16 code units.
                endIndex?: Integer;
                // The zero-based start index of this row, in UTF-16 code units.
                startIndex?: Integer;
                // The suggested deletion IDs. If empty, then there are no suggested deletions of this content.
                suggestedDeletionIds?: string[];
                // The suggested insertion IDs. A TableRow may have multiple insertion IDs if it is a nested suggested change. If empty,
                // then this is not a suggested insertion.
                suggestedInsertionIds?: string[];
                // The suggested style changes to this row, keyed by suggestion ID.
                suggestedTableRowStyleChanges?: object;
                // The contents and style of each cell in this row. It is possible for a table to be non-rectangular, so some rows may have
                // a different number of cells than other rows in the same table.
                tableCells?: Schema.TableCell[];
                // The style of the table row.
                tableRowStyle?: Schema.TableRowStyle;
            }
            // Styles that apply to a table row.
            interface TableRowStyle {
                // The minimum height of the row. The row will be rendered in the Docs editor at a height equal to or greater than this
                // value in order to show all the content in the row's cells.
                minRowHeight?: Schema.Dimension;
            }
            // A mask that indicates which of the fields on the base TableRowStyle have been changed in this suggestion. For any field
            // set to true, there is a new suggested value.
            interface TableRowStyleSuggestionState {
                // Indicates if there was a suggested change to min_row_height.
                minRowHeightSuggested?: boolean;
            }
            // Styles that apply to a table.
            interface TableStyle {
                // The properties of each column. Note that in Docs, tables contain rows and rows contain cells, similar to HTML. So the
                // properties for a row can be found on the row's table_row_style.
                tableColumnProperties?: Schema.TableColumnProperties[];
            }
            // A ParagraphElement that represents a run of text that all has the same styling.
            interface TextRun {
                // The text of this run. Any non-text elements in the run are replaced with the Unicode character U+E907.
                content?: string;
                // The suggested deletion IDs. If empty, then there are no suggested deletions of this content.
                suggestedDeletionIds?: string[];
                // The suggested insertion IDs. A TextRun may have multiple insertion IDs if it is a nested suggested change. If empty,
                // then this is not a suggested insertion.
                suggestedInsertionIds?: string[];
                // The suggested text style changes to this run, keyed by suggestion ID.
                suggestedTextStyleChanges?: object;
                // The text style of this run.
                textStyle?: Schema.TextStyle;
            }
            // Represents the styling that can be applied to text. Inherited text styles are represented as unset fields in this
            // message. A text style's parent depends on where the text style is defined: * The TextStyle of text in a Paragraph
            // inherits from the paragraph's corresponding named style type. * The TextStyle on a named style inherits from the normal
            // text named style. * The TextStyle of the normal text named style inherits from the default text style in the Docs
            // editor. * The TextStyle on a Paragraph element that is contained in a table may inherit its text style from the table
            // style. If the text style does not inherit from a parent, unsetting fields will revert the style to a value matching the
            // defaults in the Docs editor.
            interface TextStyle {
                // The background color of the text. If set, the color is either an RGB color or transparent, depending on the `color`
                // field.
                backgroundColor?: Schema.OptionalColor;
                // The text's vertical offset from its normal position. Text with `SUPERSCRIPT` or `SUBSCRIPT` baseline offsets is
                // automatically rendered in a smaller font size, computed based on the `font_size` field. The `font_size` itself is not
                // affected by changes in this field.
                baselineOffset?: string;
                // Whether or not the text is rendered as bold.
                bold?: boolean;
                // The size of the text's font.
                fontSize?: Schema.Dimension;
                // The foreground color of the text. If set, the color is either an RGB color or transparent, depending on the `color`
                // field.
                foregroundColor?: Schema.OptionalColor;
                // Whether or not the text is italicized.
                italic?: boolean;
                // The hyperlink destination of the text. If unset, there is no link. Links are not inherited from parent text. Changing
                // the link in an update request causes some other changes to the text style of the range: * When setting a link, the text
                // foreground color will be updated to the default link color and the text will be underlined. If these fields are modified
                // in the same request, those values will be used instead of the link defaults. * Setting a link on a text range that
                // overlaps with an existing link will also update the existing link to point to the new URL. * Links are not settable on
                // newline characters. As a result, setting a link on a text range that crosses a paragraph boundary, such as `"ABC\n123"`,
                // will separate the newline character(s) into their own text runs. The link will be applied separately to the runs before
                // and after the newline. * Removing a link will update the text style of the range to match the style of the preceding
                // text (or the default text styles if the preceding text is another link) unless different styles are being set in the
                // same request.
                link?: Schema.Link;
                // Whether or not the text is in small capital letters.
                smallCaps?: boolean;
                // Whether or not the text is struck through.
                strikethrough?: boolean;
                // Whether or not the text is underlined.
                underline?: boolean;
                // The font family and rendered weight of the text. If an update request specifies values for both `weighted_font_family`
                // and `bold`, the `weighted_font_family` is applied first, then `bold`. If `weighted_font_family#weight` is not set, it
                // defaults to `400`. If `weighted_font_family` is set, then `weighted_font_family#font_family` must also be set with a
                // non-empty value. Otherwise, a 400 bad request error is returned.
                weightedFontFamily?: Schema.WeightedFontFamily;
            }
            // A mask that indicates which of the fields on the base TextStyle have been changed in this suggestion. For any field set
            // to true, there is a new suggested value.
            interface TextStyleSuggestionState {
                // Indicates if there was a suggested change to background_color.
                backgroundColorSuggested?: boolean;
                // Indicates if there was a suggested change to baseline_offset.
                baselineOffsetSuggested?: boolean;
                // Indicates if there was a suggested change to bold.
                boldSuggested?: boolean;
                // Indicates if there was a suggested change to font_size.
                fontSizeSuggested?: boolean;
                // Indicates if there was a suggested change to foreground_color.
                foregroundColorSuggested?: boolean;
                // Indicates if there was a suggested change to italic.
                italicSuggested?: boolean;
                // Indicates if there was a suggested change to link.
                linkSuggested?: boolean;
                // Indicates if there was a suggested change to small_caps.
                smallCapsSuggested?: boolean;
                // Indicates if there was a suggested change to strikethrough.
                strikethroughSuggested?: boolean;
                // Indicates if there was a suggested change to underline.
                underlineSuggested?: boolean;
                // Indicates if there was a suggested change to weighted_font_family.
                weightedFontFamilySuggested?: boolean;
            }
            // Unmerges cells in a Table.
            interface UnmergeTableCellsRequest {
                // The table range specifying which cells of the table to unmerge. All merged cells in this range will be unmerged, and
                // cells that are already unmerged will not be affected. If the range has no merged cells, the request will do nothing. If
                // there is text in any of the merged cells, the text will remain in the "head" cell of the resulting block of unmerged
                // cells. The "head" cell is the upper-left cell when the content direction is from left to right, and the upper-right
                // otherwise.
                tableRange?: Schema.TableRange;
            }
            // Updates the DocumentStyle.
            interface UpdateDocumentStyleRequest {
                // The styles to set on the document. Certain document style changes may cause other changes in order to mirror the
                // behavior of the Docs editor. See the documentation of DocumentStyle for more information.
                documentStyle?: Schema.DocumentStyle;
                // The fields that should be updated. At least one field must be specified. The root `document_style` is implied and should
                // not be specified. A single `"*"` can be used as short-hand for listing every field. For example to update the
                // background, set `fields` to `"background"`.
                fields?: string;
            }
            // Update the styling of all paragraphs that overlap with the given range.
            interface UpdateParagraphStyleRequest {
                // The fields that should be updated. At least one field must be specified. The root `paragraph_style` is implied and
                // should not be specified. For example, to update the paragraph style's alignment property, set `fields` to `"alignment"`.
                // To reset a property to its default value, include its field name in the field mask but leave the field itself unset.
                fields?: string;
                // The styles to set on the paragraphs. Certain paragraph style changes may cause other changes in order to mirror the
                // behavior of the Docs editor. See the documentation of ParagraphStyle for more information.
                paragraphStyle?: Schema.ParagraphStyle;
                // The range overlapping the paragraphs to style.
                range?: Schema.Range;
            }
            // Updates the SectionStyle.
            interface UpdateSectionStyleRequest {
                // The fields that should be updated. At least one field must be specified. The root `section_style` is implied and must
                // not be specified. A single `"*"` can be used as short-hand for listing every field. For example to update the left
                // margin, set `fields` to `"margin_left"`.
                fields?: string;
                // The range overlapping the sections to style. Because section breaks can only be inserted inside the body, the segment ID
                // field must be empty.
                range?: Schema.Range;
                // The styles to be set on the section. Certain section style changes may cause other changes in order to mirror the
                // behavior of the Docs editor. See the documentation of SectionStyle for more information.
                sectionStyle?: Schema.SectionStyle;
            }
            // Updates the style of a range of table cells.
            interface UpdateTableCellStyleRequest {
                // The fields that should be updated. At least one field must be specified. The root `tableCellStyle` is implied and should
                // not be specified. A single `"*"` can be used as short-hand for listing every field. For example to update the table cell
                // background color, set `fields` to `"backgroundColor"`. To reset a property to its default value, include its field name
                // in the field mask but leave the field itself unset.
                fields?: string;
                // The style to set on the table cells. When updating borders, if a cell shares a border with an adjacent cell, the
                // corresponding border property of the adjacent cell is updated as well. Borders that are merged and invisible are not
                // updated. Since updating a border shared by adjacent cells in the same request can cause conflicting border updates,
                // border updates are applied in the following order: - `border_right` - `border_left` - `border_bottom` - `border_top`
                tableCellStyle?: Schema.TableCellStyle;
                // The table range representing the subset of the table to which the updates are applied.
                tableRange?: Schema.TableRange;
                // The location where the table starts in the document. When specified, the updates are applied to all the cells in the
                // table.
                tableStartLocation?: Schema.Location;
            }
            // Updates the TableColumnProperties of columns in a table.
            interface UpdateTableColumnPropertiesRequest {
                // The list of zero-based column indices whose property should be updated. If no indices are specified, all columns will be
                // updated.
                columnIndices?: Integer[];
                // The fields that should be updated. At least one field must be specified. The root `tableColumnProperties` is implied and
                // should not be specified. A single `"*"` can be used as short-hand for listing every field. For example to update the
                // column width, set `fields` to `"width"`.
                fields?: string;
                // The table column properties to update. If the value of `table_column_properties#width` is less than 5 points (5/72
                // inch), a 400 bad request error is returned.
                tableColumnProperties?: Schema.TableColumnProperties;
                // The location where the table starts in the document.
                tableStartLocation?: Schema.Location;
            }
            // Updates the TableRowStyle of rows in a table.
            interface UpdateTableRowStyleRequest {
                // The fields that should be updated. At least one field must be specified. The root `tableRowStyle` is implied and should
                // not be specified. A single `"*"` can be used as short-hand for listing every field. For example to update the minimum
                // row height, set `fields` to `"min_row_height"`.
                fields?: string;
                // The list of zero-based row indices whose style should be updated. If no indices are specified, all rows will be updated.
                rowIndices?: Integer[];
                // The styles to be set on the rows.
                tableRowStyle?: Schema.TableRowStyle;
                // The location where the table starts in the document.
                tableStartLocation?: Schema.Location;
            }
            // Update the styling of text.
            interface UpdateTextStyleRequest {
                // The fields that should be updated. At least one field must be specified. The root `text_style` is implied and should not
                // be specified. A single `"*"` can be used as short-hand for listing every field. For example, to update the text style to
                // bold, set `fields` to `"bold"`. To reset a property to its default value, include its field name in the field mask but
                // leave the field itself unset.
                fields?: string;
                // The range of text to style. The range may be extended to include adjacent newlines. If the range fully contains a
                // paragraph belonging to a list, the paragraph's bullet is also updated with the matching text style. Ranges cannot be
                // inserted inside a relative UpdateTextStyleRequest.
                range?: Schema.Range;
                // The styles to set on the text. If the value for a particular style matches that of the parent, that style will be set to
                // inherit. Certain text style changes may cause other changes in order to to mirror the behavior of the Docs editor. See
                // the documentation of TextStyle for more information.
                textStyle?: Schema.TextStyle;
            }
            // Represents a font family and weight of text.
            interface WeightedFontFamily {
                // The font family of the text. The font family can be any font from the Font menu in Docs or from [Google Fonts]
                // (https://fonts.google.com/). If the font name is unrecognized, the text is rendered in `Arial`.
                fontFamily?: string;
                // The weight of the font. This field can have any value that is a multiple of `100` between `100` and `900`, inclusive.
                // This range corresponds to the numerical values described in the CSS 2.1 Specification, [section
                // 15.6](https://www.w3.org/TR/CSS21/fonts.html#font-boldness), with non-numerical values disallowed. The default value is
                // `400` ("normal"). The font weight makes up just one component of the rendered font weight. The rendered weight is
                // determined by a combination of the `weight` and the text style's resolved `bold` value, after accounting for
                // inheritance: * If the text is bold and the weight is less than `400`, the rendered weight is 400. * If the text is bold
                // and the weight is greater than or equal to `400` but is less than `700`, the rendered weight is `700`. * If the weight
                // is greater than or equal to `700`, the rendered weight is equal to the weight. * If the text is not bold, the rendered
                // weight is equal to the weight.
                weight?: Integer;
            }
            // Provides control over how write requests are executed.
            interface WriteControl {
                // The revision ID of the document that the write request will be applied to. If this is not the latest revision of the
                // document, the request will not be processed and will return a 400 bad request error. When a required revision ID is
                // returned in a response, it indicates the revision ID of the document after the request was applied.
                requiredRevisionId?: string;
                // The target revision ID of the document that the write request will be applied to. If collaborator changes have occurred
                // after the document was read using the API, the changes produced by this write request will be transformed against the
                // collaborator changes. This results in a new revision of the document which incorporates both the changes in the request
                // and the collaborator changes, and the Docs server will resolve conflicting changes. When using `target_revision_id`, the
                // API client can be thought of as another collaborator of the document. The target revision ID may only be used to write
                // to recent versions of a document. If the target revision is too far behind the latest revision, the request will not be
                // processed and will return a 400 bad request error and the request should be retried after reading the latest version of
                // the document. In most cases a `revision_id` will remain valid for use as a target revision for several minutes after it
                // is read, but for frequently-edited documents this window may be shorter.
                targetRevisionId?: string;
            }
        }
    }
    // Reads and writes Google Docs documents.
    interface Docs {
        Documents?: Docs.Collection.DocumentsCollection;
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
        // Create a new instance of CreateFooterRequest
        newCreateFooterRequest(): Docs.Schema.CreateFooterRequest;
        // Create a new instance of CreateFootnoteRequest
        newCreateFootnoteRequest(): Docs.Schema.CreateFootnoteRequest;
        // Create a new instance of CreateHeaderRequest
        newCreateHeaderRequest(): Docs.Schema.CreateHeaderRequest;
        // Create a new instance of CreateNamedRangeRequest
        newCreateNamedRangeRequest(): Docs.Schema.CreateNamedRangeRequest;
        // Create a new instance of CreateParagraphBulletsRequest
        newCreateParagraphBulletsRequest(): Docs.Schema.CreateParagraphBulletsRequest;
        // Create a new instance of DeleteContentRangeRequest
        newDeleteContentRangeRequest(): Docs.Schema.DeleteContentRangeRequest;
        // Create a new instance of DeleteFooterRequest
        newDeleteFooterRequest(): Docs.Schema.DeleteFooterRequest;
        // Create a new instance of DeleteHeaderRequest
        newDeleteHeaderRequest(): Docs.Schema.DeleteHeaderRequest;
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
        // Create a new instance of InsertSectionBreakRequest
        newInsertSectionBreakRequest(): Docs.Schema.InsertSectionBreakRequest;
        // Create a new instance of InsertTableColumnRequest
        newInsertTableColumnRequest(): Docs.Schema.InsertTableColumnRequest;
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
        // Create a new instance of MergeTableCellsRequest
        newMergeTableCellsRequest(): Docs.Schema.MergeTableCellsRequest;
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
        // Create a new instance of ReplaceImageRequest
        newReplaceImageRequest(): Docs.Schema.ReplaceImageRequest;
        // Create a new instance of ReplaceNamedRangeContentRequest
        newReplaceNamedRangeContentRequest(): Docs.Schema.ReplaceNamedRangeContentRequest;
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
        // Create a new instance of TableRange
        newTableRange(): Docs.Schema.TableRange;
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
        // Create a new instance of UnmergeTableCellsRequest
        newUnmergeTableCellsRequest(): Docs.Schema.UnmergeTableCellsRequest;
        // Create a new instance of UpdateDocumentStyleRequest
        newUpdateDocumentStyleRequest(): Docs.Schema.UpdateDocumentStyleRequest;
        // Create a new instance of UpdateParagraphStyleRequest
        newUpdateParagraphStyleRequest(): Docs.Schema.UpdateParagraphStyleRequest;
        // Create a new instance of UpdateSectionStyleRequest
        newUpdateSectionStyleRequest(): Docs.Schema.UpdateSectionStyleRequest;
        // Create a new instance of UpdateTableCellStyleRequest
        newUpdateTableCellStyleRequest(): Docs.Schema.UpdateTableCellStyleRequest;
        // Create a new instance of UpdateTableColumnPropertiesRequest
        newUpdateTableColumnPropertiesRequest(): Docs.Schema.UpdateTableColumnPropertiesRequest;
        // Create a new instance of UpdateTableRowStyleRequest
        newUpdateTableRowStyleRequest(): Docs.Schema.UpdateTableRowStyleRequest;
        // Create a new instance of UpdateTextStyleRequest
        newUpdateTextStyleRequest(): Docs.Schema.UpdateTextStyleRequest;
        // Create a new instance of WeightedFontFamily
        newWeightedFontFamily(): Docs.Schema.WeightedFontFamily;
        // Create a new instance of WriteControl
        newWriteControl(): Docs.Schema.WriteControl;
    }
}
declare const Docs: GoogleAppsScript.Docs;
