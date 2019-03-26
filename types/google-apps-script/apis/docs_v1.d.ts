// Type definitions for Google Apps Script 2019-03-25
// Project: https://developers.google.com/apps-script/
// Generator: https://github.com/grant/google-apps-script-dts
// Definitions by: grant <https://github.com/grant/>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare namespace GoogleAppsScript {
  namespace Docs_v1 {
    namespace Collection {
      export interface DocumentsCollection {
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
        batchUpdate(resource: Schema.BatchUpdateDocumentRequest, documentId: string): Docs_v1.Schema.BatchUpdateDocumentResponse;
        // Creates a blank document using the title given in the request. Other fields
        // in the request, including any provided content, are ignored.
        // Returns the created document.
        create(resource: Schema.Document): Docs_v1.Schema.Document;
        // Gets the latest version of the specified document.
        get(documentId: string): Docs_v1.Schema.Document;
        // Gets the latest version of the specified document.
        get(documentId: string, optionalArgs: object): Docs_v1.Schema.Document;
      }
    }
    namespace Schema {
      export interface AutoText {
        suggestedDeletionIds?: string[];
        suggestedInsertionIds?: string[];
        suggestedTextStyleChanges?: object;
        textStyle?: Docs_v1.Schema.TextStyle;
        type?: string;
      }
      export interface Background {
        color?: Docs_v1.Schema.OptionalColor;
      }
      export interface BackgroundSuggestionState {
        backgroundColorSuggested?: boolean;
      }
      export interface BatchUpdateDocumentRequest {
        requests?: Docs_v1.Schema.Request[];
        writeControl?: Docs_v1.Schema.WriteControl;
      }
      export interface BatchUpdateDocumentResponse {
        documentId?: string;
        replies?: Docs_v1.Schema.Response[];
        writeControl?: Docs_v1.Schema.WriteControl;
      }
      export interface Body {
        content?: Docs_v1.Schema.StructuralElement[];
      }
      export interface Bullet {
        listId?: string;
        nestingLevel?: number;
        textStyle?: Docs_v1.Schema.TextStyle;
      }
      export interface BulletSuggestionState {
        listIdSuggested?: boolean;
        nestingLevelSuggested?: boolean;
        textStyleSuggestionState?: Docs_v1.Schema.TextStyleSuggestionState;
      }
      export interface Color {
        rgbColor?: Docs_v1.Schema.RgbColor;
      }
      export interface ColumnBreak {
        suggestedDeletionIds?: string[];
        suggestedInsertionIds?: string[];
        suggestedTextStyleChanges?: object;
        textStyle?: Docs_v1.Schema.TextStyle;
      }
      export interface CreateNamedRangeRequest {
        name?: string;
        range?: Docs_v1.Schema.Range;
      }
      export interface CreateNamedRangeResponse {
        namedRangeId?: string;
      }
      export interface CreateParagraphBulletsRequest {
        bulletPreset?: string;
        range?: Docs_v1.Schema.Range;
      }
      export interface CropProperties {
        angle?: Number;
        offsetBottom?: Number;
        offsetLeft?: Number;
        offsetRight?: Number;
        offsetTop?: Number;
      }
      export interface CropPropertiesSuggestionState {
        angleSuggested?: boolean;
        offsetBottomSuggested?: boolean;
        offsetLeftSuggested?: boolean;
        offsetRightSuggested?: boolean;
        offsetTopSuggested?: boolean;
      }
      export interface DeleteContentRangeRequest {
        range?: Docs_v1.Schema.Range;
      }
      export interface DeleteNamedRangeRequest {
        name?: string;
        namedRangeId?: string;
      }
      export interface DeleteParagraphBulletsRequest {
        range?: Docs_v1.Schema.Range;
      }
      export interface DeletePositionedObjectRequest {
        objectId?: string;
      }
      export interface DeleteTableColumnRequest {
        tableCellLocation?: Docs_v1.Schema.TableCellLocation;
      }
      export interface DeleteTableRowRequest {
        tableCellLocation?: Docs_v1.Schema.TableCellLocation;
      }
      export interface Dimension {
        magnitude?: Number;
        unit?: string;
      }
      export interface Document {
        body?: Docs_v1.Schema.Body;
        documentId?: string;
        documentStyle?: Docs_v1.Schema.DocumentStyle;
        footers?: object;
        footnotes?: object;
        headers?: object;
        inlineObjects?: object;
        lists?: object;
        namedRanges?: object;
        namedStyles?: Docs_v1.Schema.NamedStyles;
        positionedObjects?: object;
        revisionId?: string;
        suggestedDocumentStyleChanges?: object;
        suggestedNamedStylesChanges?: object;
        suggestionsViewMode?: string;
        title?: string;
      }
      export interface DocumentStyle {
        background?: Docs_v1.Schema.Background;
        defaultFooterId?: string;
        defaultHeaderId?: string;
        evenPageFooterId?: string;
        evenPageHeaderId?: string;
        firstPageFooterId?: string;
        firstPageHeaderId?: string;
        marginBottom?: Docs_v1.Schema.Dimension;
        marginLeft?: Docs_v1.Schema.Dimension;
        marginRight?: Docs_v1.Schema.Dimension;
        marginTop?: Docs_v1.Schema.Dimension;
        pageNumberStart?: number;
        pageSize?: Docs_v1.Schema.Size;
        useEvenPageHeaderFooter?: boolean;
        useFirstPageHeaderFooter?: boolean;
      }
      export interface DocumentStyleSuggestionState {
        backgroundSuggestionState?: Docs_v1.Schema.BackgroundSuggestionState;
        defaultFooterIdSuggested?: boolean;
        defaultHeaderIdSuggested?: boolean;
        evenPageFooterIdSuggested?: boolean;
        evenPageHeaderIdSuggested?: boolean;
        firstPageFooterIdSuggested?: boolean;
        firstPageHeaderIdSuggested?: boolean;
        marginBottomSuggested?: boolean;
        marginLeftSuggested?: boolean;
        marginRightSuggested?: boolean;
        marginTopSuggested?: boolean;
        pageNumberStartSuggested?: boolean;
        pageSizeSuggestionState?: Docs_v1.Schema.SizeSuggestionState;
        useEvenPageHeaderFooterSuggested?: boolean;
        useFirstPageHeaderFooterSuggested?: boolean;
      }
      export interface EmbeddedObject {
        description?: string;
        embeddedDrawingProperties?: any;
        embeddedObjectBorder?: Docs_v1.Schema.EmbeddedObjectBorder;
        imageProperties?: Docs_v1.Schema.ImageProperties;
        linkedContentReference?: Docs_v1.Schema.LinkedContentReference;
        marginBottom?: Docs_v1.Schema.Dimension;
        marginLeft?: Docs_v1.Schema.Dimension;
        marginRight?: Docs_v1.Schema.Dimension;
        marginTop?: Docs_v1.Schema.Dimension;
        size?: Docs_v1.Schema.Size;
        title?: string;
      }
      export interface EmbeddedObjectBorder {
        color?: Docs_v1.Schema.OptionalColor;
        dashStyle?: string;
        propertyState?: string;
        width?: Docs_v1.Schema.Dimension;
      }
      export interface EmbeddedObjectBorderSuggestionState {
        colorSuggested?: boolean;
        dashStyleSuggested?: boolean;
        propertyStateSuggested?: boolean;
        widthSuggested?: boolean;
      }
      export interface EmbeddedObjectSuggestionState {
        descriptionSuggested?: boolean;
        embeddedDrawingPropertiesSuggestionState?: any;
        embeddedObjectBorderSuggestionState?: Docs_v1.Schema.EmbeddedObjectBorderSuggestionState;
        imagePropertiesSuggestionState?: Docs_v1.Schema.ImagePropertiesSuggestionState;
        linkedContentReferenceSuggestionState?: Docs_v1.Schema.LinkedContentReferenceSuggestionState;
        marginBottomSuggested?: boolean;
        marginLeftSuggested?: boolean;
        marginRightSuggested?: boolean;
        marginTopSuggested?: boolean;
        sizeSuggestionState?: Docs_v1.Schema.SizeSuggestionState;
        titleSuggested?: boolean;
      }
      export interface EndOfSegmentLocation {
        segmentId?: string;
      }
      export interface Equation {
        suggestedDeletionIds?: string[];
        suggestedInsertionIds?: string[];
      }
      export interface Footer {
        content?: Docs_v1.Schema.StructuralElement[];
        footerId?: string;
      }
      export interface Footnote {
        content?: Docs_v1.Schema.StructuralElement[];
        footnoteId?: string;
      }
      export interface FootnoteReference {
        footnoteId?: string;
        footnoteNumber?: string;
        suggestedDeletionIds?: string[];
        suggestedInsertionIds?: string[];
        suggestedTextStyleChanges?: object;
        textStyle?: Docs_v1.Schema.TextStyle;
      }
      export interface Header {
        content?: Docs_v1.Schema.StructuralElement[];
        headerId?: string;
      }
      export interface HorizontalRule {
        suggestedDeletionIds?: string[];
        suggestedInsertionIds?: string[];
        suggestedTextStyleChanges?: object;
        textStyle?: Docs_v1.Schema.TextStyle;
      }
      export interface ImageProperties {
        angle?: Number;
        brightness?: Number;
        contentUri?: string;
        contrast?: Number;
        cropProperties?: Docs_v1.Schema.CropProperties;
        sourceUri?: string;
        transparency?: Number;
      }
      export interface ImagePropertiesSuggestionState {
        angleSuggested?: boolean;
        brightnessSuggested?: boolean;
        contentUriSuggested?: boolean;
        contrastSuggested?: boolean;
        cropPropertiesSuggestionState?: Docs_v1.Schema.CropPropertiesSuggestionState;
        sourceUriSuggested?: boolean;
        transparencySuggested?: boolean;
      }
      export interface InlineObject {
        inlineObjectProperties?: Docs_v1.Schema.InlineObjectProperties;
        objectId?: string;
        suggestedDeletionIds?: string[];
        suggestedInlineObjectPropertiesChanges?: object;
        suggestedInsertionId?: string;
      }
      export interface InlineObjectElement {
        inlineObjectId?: string;
        suggestedDeletionIds?: string[];
        suggestedInsertionIds?: string[];
        suggestedTextStyleChanges?: object;
        textStyle?: Docs_v1.Schema.TextStyle;
      }
      export interface InlineObjectProperties {
        embeddedObject?: Docs_v1.Schema.EmbeddedObject;
      }
      export interface InlineObjectPropertiesSuggestionState {
        embeddedObjectSuggestionState?: Docs_v1.Schema.EmbeddedObjectSuggestionState;
      }
      export interface InsertInlineImageRequest {
        endOfSegmentLocation?: Docs_v1.Schema.EndOfSegmentLocation;
        location?: Docs_v1.Schema.Location;
        objectSize?: Docs_v1.Schema.Size;
        uri?: string;
      }
      export interface InsertInlineImageResponse {
        objectId?: string;
      }
      export interface InsertInlineSheetsChartResponse {
        objectId?: string;
      }
      export interface InsertPageBreakRequest {
        endOfSegmentLocation?: Docs_v1.Schema.EndOfSegmentLocation;
        location?: Docs_v1.Schema.Location;
      }
      export interface InsertTableRequest {
        columns?: number;
        endOfSegmentLocation?: Docs_v1.Schema.EndOfSegmentLocation;
        location?: Docs_v1.Schema.Location;
        rows?: number;
      }
      export interface InsertTableRowRequest {
        insertBelow?: boolean;
        tableCellLocation?: Docs_v1.Schema.TableCellLocation;
      }
      export interface InsertTextRequest {
        endOfSegmentLocation?: Docs_v1.Schema.EndOfSegmentLocation;
        location?: Docs_v1.Schema.Location;
        text?: string;
      }
      export interface Link {
        bookmarkId?: string;
        headingId?: string;
        url?: string;
      }
      export interface LinkedContentReference {
        sheetsChartReference?: Docs_v1.Schema.SheetsChartReference;
      }
      export interface LinkedContentReferenceSuggestionState {
        sheetsChartReferenceSuggestionState?: Docs_v1.Schema.SheetsChartReferenceSuggestionState;
      }
      export interface List {
        listProperties?: Docs_v1.Schema.ListProperties;
        suggestedDeletionIds?: string[];
        suggestedInsertionId?: string;
        suggestedListPropertiesChanges?: object;
      }
      export interface ListProperties {
        nestingLevels?: Docs_v1.Schema.NestingLevel[];
      }
      export interface ListPropertiesSuggestionState {
        nestingLevelsSuggestionStates?: Docs_v1.Schema.NestingLevelSuggestionState[];
      }
      export interface Location {
        index?: number;
        segmentId?: string;
      }
      export interface NamedRange {
        name?: string;
        namedRangeId?: string;
        ranges?: Docs_v1.Schema.Range[];
      }
      export interface NamedRanges {
        name?: string;
        namedRanges?: Docs_v1.Schema.NamedRange[];
      }
      export interface NamedStyle {
        namedStyleType?: string;
        paragraphStyle?: Docs_v1.Schema.ParagraphStyle;
        textStyle?: Docs_v1.Schema.TextStyle;
      }
      export interface NamedStyleSuggestionState {
        namedStyleType?: string;
        paragraphStyleSuggestionState?: Docs_v1.Schema.ParagraphStyleSuggestionState;
        textStyleSuggestionState?: Docs_v1.Schema.TextStyleSuggestionState;
      }
      export interface NamedStyles {
        styles?: Docs_v1.Schema.NamedStyle[];
      }
      export interface NamedStylesSuggestionState {
        stylesSuggestionStates?: Docs_v1.Schema.NamedStyleSuggestionState[];
      }
      export interface NestingLevel {
        bulletAlignment?: string;
        glyphFormat?: string;
        glyphSymbol?: string;
        glyphType?: string;
        indentFirstLine?: Docs_v1.Schema.Dimension;
        indentStart?: Docs_v1.Schema.Dimension;
        startNumber?: number;
        textStyle?: Docs_v1.Schema.TextStyle;
      }
      export interface NestingLevelSuggestionState {
        bulletAlignmentSuggested?: boolean;
        glyphFormatSuggested?: boolean;
        glyphSymbolSuggested?: boolean;
        glyphTypeSuggested?: boolean;
        indentFirstLineSuggested?: boolean;
        indentStartSuggested?: boolean;
        startNumberSuggested?: boolean;
        textStyleSuggestionState?: Docs_v1.Schema.TextStyleSuggestionState;
      }
      export interface ObjectReferences {
        objectIds?: string[];
      }
      export interface OptionalColor {
        color?: Docs_v1.Schema.Color;
      }
      export interface PageBreak {
        suggestedDeletionIds?: string[];
        suggestedInsertionIds?: string[];
        suggestedTextStyleChanges?: object;
        textStyle?: Docs_v1.Schema.TextStyle;
      }
      export interface Paragraph {
        bullet?: Docs_v1.Schema.Bullet;
        elements?: Docs_v1.Schema.ParagraphElement[];
        paragraphStyle?: Docs_v1.Schema.ParagraphStyle;
        positionedObjectIds?: string[];
        suggestedBulletChanges?: object;
        suggestedParagraphStyleChanges?: object;
        suggestedPositionedObjectIds?: object;
      }
      export interface ParagraphBorder {
        color?: Docs_v1.Schema.OptionalColor;
        dashStyle?: string;
        padding?: Docs_v1.Schema.Dimension;
        width?: Docs_v1.Schema.Dimension;
      }
      export interface ParagraphElement {
        autoText?: Docs_v1.Schema.AutoText;
        columnBreak?: Docs_v1.Schema.ColumnBreak;
        endIndex?: number;
        equation?: Docs_v1.Schema.Equation;
        footnoteReference?: Docs_v1.Schema.FootnoteReference;
        horizontalRule?: Docs_v1.Schema.HorizontalRule;
        inlineObjectElement?: Docs_v1.Schema.InlineObjectElement;
        pageBreak?: Docs_v1.Schema.PageBreak;
        startIndex?: number;
        textRun?: Docs_v1.Schema.TextRun;
      }
      export interface ParagraphStyle {
        alignment?: string;
        avoidWidowAndOrphan?: boolean;
        borderBetween?: Docs_v1.Schema.ParagraphBorder;
        borderBottom?: Docs_v1.Schema.ParagraphBorder;
        borderLeft?: Docs_v1.Schema.ParagraphBorder;
        borderRight?: Docs_v1.Schema.ParagraphBorder;
        borderTop?: Docs_v1.Schema.ParagraphBorder;
        direction?: string;
        headingId?: string;
        indentEnd?: Docs_v1.Schema.Dimension;
        indentFirstLine?: Docs_v1.Schema.Dimension;
        indentStart?: Docs_v1.Schema.Dimension;
        keepLinesTogether?: boolean;
        keepWithNext?: boolean;
        lineSpacing?: Number;
        namedStyleType?: string;
        shading?: Docs_v1.Schema.Shading;
        spaceAbove?: Docs_v1.Schema.Dimension;
        spaceBelow?: Docs_v1.Schema.Dimension;
        spacingMode?: string;
        tabStops?: Docs_v1.Schema.TabStop[];
      }
      export interface ParagraphStyleSuggestionState {
        alignmentSuggested?: boolean;
        avoidWidowAndOrphanSuggested?: boolean;
        borderBetweenSuggested?: boolean;
        borderBottomSuggested?: boolean;
        borderLeftSuggested?: boolean;
        borderRightSuggested?: boolean;
        borderTopSuggested?: boolean;
        directionSuggested?: boolean;
        headingIdSuggested?: boolean;
        indentEndSuggested?: boolean;
        indentFirstLineSuggested?: boolean;
        indentStartSuggested?: boolean;
        keepLinesTogetherSuggested?: boolean;
        keepWithNextSuggested?: boolean;
        lineSpacingSuggested?: boolean;
        namedStyleTypeSuggested?: boolean;
        shadingSuggestionState?: Docs_v1.Schema.ShadingSuggestionState;
        spaceAboveSuggested?: boolean;
        spaceBelowSuggested?: boolean;
        spacingModeSuggested?: boolean;
      }
      export interface PositionedObject {
        objectId?: string;
        positionedObjectProperties?: Docs_v1.Schema.PositionedObjectProperties;
        suggestedDeletionIds?: string[];
        suggestedInsertionId?: string;
        suggestedPositionedObjectPropertiesChanges?: object;
      }
      export interface PositionedObjectPositioning {
        layout?: string;
        leftOffset?: Docs_v1.Schema.Dimension;
        topOffset?: Docs_v1.Schema.Dimension;
      }
      export interface PositionedObjectPositioningSuggestionState {
        layoutSuggested?: boolean;
        leftOffsetSuggested?: boolean;
        topOffsetSuggested?: boolean;
      }
      export interface PositionedObjectProperties {
        embeddedObject?: Docs_v1.Schema.EmbeddedObject;
        positioning?: Docs_v1.Schema.PositionedObjectPositioning;
      }
      export interface PositionedObjectPropertiesSuggestionState {
        embeddedObjectSuggestionState?: Docs_v1.Schema.EmbeddedObjectSuggestionState;
        positioningSuggestionState?: Docs_v1.Schema.PositionedObjectPositioningSuggestionState;
      }
      export interface Range {
        endIndex?: number;
        segmentId?: string;
        startIndex?: number;
      }
      export interface ReplaceAllTextRequest {
        containsText?: Docs_v1.Schema.SubstringMatchCriteria;
        replaceText?: string;
      }
      export interface ReplaceAllTextResponse {
        occurrencesChanged?: number;
      }
      export interface Request {
        createNamedRange?: Docs_v1.Schema.CreateNamedRangeRequest;
        createParagraphBullets?: Docs_v1.Schema.CreateParagraphBulletsRequest;
        deleteContentRange?: Docs_v1.Schema.DeleteContentRangeRequest;
        deleteNamedRange?: Docs_v1.Schema.DeleteNamedRangeRequest;
        deleteParagraphBullets?: Docs_v1.Schema.DeleteParagraphBulletsRequest;
        deletePositionedObject?: Docs_v1.Schema.DeletePositionedObjectRequest;
        deleteTableColumn?: Docs_v1.Schema.DeleteTableColumnRequest;
        deleteTableRow?: Docs_v1.Schema.DeleteTableRowRequest;
        insertInlineImage?: Docs_v1.Schema.InsertInlineImageRequest;
        insertPageBreak?: Docs_v1.Schema.InsertPageBreakRequest;
        insertTable?: Docs_v1.Schema.InsertTableRequest;
        insertTableRow?: Docs_v1.Schema.InsertTableRowRequest;
        insertText?: Docs_v1.Schema.InsertTextRequest;
        replaceAllText?: Docs_v1.Schema.ReplaceAllTextRequest;
        updateParagraphStyle?: Docs_v1.Schema.UpdateParagraphStyleRequest;
        updateTextStyle?: Docs_v1.Schema.UpdateTextStyleRequest;
      }
      export interface Response {
        createNamedRange?: Docs_v1.Schema.CreateNamedRangeResponse;
        insertInlineImage?: Docs_v1.Schema.InsertInlineImageResponse;
        insertInlineSheetsChart?: Docs_v1.Schema.InsertInlineSheetsChartResponse;
        replaceAllText?: Docs_v1.Schema.ReplaceAllTextResponse;
      }
      export interface RgbColor {
        blue?: Number;
        green?: Number;
        red?: Number;
      }
      export interface SectionBreak {
        sectionStyle?: Docs_v1.Schema.SectionStyle;
        suggestedDeletionIds?: string[];
        suggestedInsertionIds?: string[];
      }
      export interface SectionColumnProperties {
        paddingEnd?: Docs_v1.Schema.Dimension;
        width?: Docs_v1.Schema.Dimension;
      }
      export interface SectionStyle {
        columnProperties?: Docs_v1.Schema.SectionColumnProperties[];
        columnSeparatorStyle?: string;
        contentDirection?: string;
      }
      export interface Shading {
        backgroundColor?: Docs_v1.Schema.OptionalColor;
      }
      export interface ShadingSuggestionState {
        backgroundColorSuggested?: boolean;
      }
      export interface SheetsChartReference {
        chartId?: number;
        spreadsheetId?: string;
      }
      export interface SheetsChartReferenceSuggestionState {
        chartIdSuggested?: boolean;
        spreadsheetIdSuggested?: boolean;
      }
      export interface Size {
        height?: Docs_v1.Schema.Dimension;
        width?: Docs_v1.Schema.Dimension;
      }
      export interface SizeSuggestionState {
        heightSuggested?: boolean;
        widthSuggested?: boolean;
      }
      export interface StructuralElement {
        endIndex?: number;
        paragraph?: Docs_v1.Schema.Paragraph;
        sectionBreak?: Docs_v1.Schema.SectionBreak;
        startIndex?: number;
        table?: Docs_v1.Schema.Table;
        tableOfContents?: Docs_v1.Schema.TableOfContents;
      }
      export interface SubstringMatchCriteria {
        matchCase?: boolean;
        text?: string;
      }
      export interface SuggestedBullet {
        bullet?: Docs_v1.Schema.Bullet;
        bulletSuggestionState?: Docs_v1.Schema.BulletSuggestionState;
      }
      export interface SuggestedDocumentStyle {
        documentStyle?: Docs_v1.Schema.DocumentStyle;
        documentStyleSuggestionState?: Docs_v1.Schema.DocumentStyleSuggestionState;
      }
      export interface SuggestedInlineObjectProperties {
        inlineObjectProperties?: Docs_v1.Schema.InlineObjectProperties;
        inlineObjectPropertiesSuggestionState?: Docs_v1.Schema.InlineObjectPropertiesSuggestionState;
      }
      export interface SuggestedListProperties {
        listProperties?: Docs_v1.Schema.ListProperties;
        listPropertiesSuggestionState?: Docs_v1.Schema.ListPropertiesSuggestionState;
      }
      export interface SuggestedNamedStyles {
        namedStyles?: Docs_v1.Schema.NamedStyles;
        namedStylesSuggestionState?: Docs_v1.Schema.NamedStylesSuggestionState;
      }
      export interface SuggestedParagraphStyle {
        paragraphStyle?: Docs_v1.Schema.ParagraphStyle;
        paragraphStyleSuggestionState?: Docs_v1.Schema.ParagraphStyleSuggestionState;
      }
      export interface SuggestedPositionedObjectProperties {
        positionedObjectProperties?: Docs_v1.Schema.PositionedObjectProperties;
        positionedObjectPropertiesSuggestionState?: Docs_v1.Schema.PositionedObjectPropertiesSuggestionState;
      }
      export interface SuggestedTableCellStyle {
        tableCellStyle?: Docs_v1.Schema.TableCellStyle;
        tableCellStyleSuggestionState?: Docs_v1.Schema.TableCellStyleSuggestionState;
      }
      export interface SuggestedTableRowStyle {
        tableRowStyle?: Docs_v1.Schema.TableRowStyle;
        tableRowStyleSuggestionState?: Docs_v1.Schema.TableRowStyleSuggestionState;
      }
      export interface SuggestedTextStyle {
        textStyle?: Docs_v1.Schema.TextStyle;
        textStyleSuggestionState?: Docs_v1.Schema.TextStyleSuggestionState;
      }
      export interface TabStop {
        alignment?: string;
        offset?: Docs_v1.Schema.Dimension;
      }
      export interface Table {
        columns?: number;
        rows?: number;
        suggestedDeletionIds?: string[];
        suggestedInsertionIds?: string[];
        tableRows?: Docs_v1.Schema.TableRow[];
        tableStyle?: Docs_v1.Schema.TableStyle;
      }
      export interface TableCell {
        content?: Docs_v1.Schema.StructuralElement[];
        endIndex?: number;
        startIndex?: number;
        suggestedDeletionIds?: string[];
        suggestedInsertionIds?: string[];
        suggestedTableCellStyleChanges?: object;
        tableCellStyle?: Docs_v1.Schema.TableCellStyle;
      }
      export interface TableCellBorder {
        color?: Docs_v1.Schema.OptionalColor;
        dashStyle?: string;
        width?: Docs_v1.Schema.Dimension;
      }
      export interface TableCellLocation {
        columnIndex?: number;
        rowIndex?: number;
        tableStartLocation?: Docs_v1.Schema.Location;
      }
      export interface TableCellStyle {
        backgroundColor?: Docs_v1.Schema.OptionalColor;
        borderBottom?: Docs_v1.Schema.TableCellBorder;
        borderLeft?: Docs_v1.Schema.TableCellBorder;
        borderRight?: Docs_v1.Schema.TableCellBorder;
        borderTop?: Docs_v1.Schema.TableCellBorder;
        columnSpan?: number;
        contentAlignment?: string;
        paddingBottom?: Docs_v1.Schema.Dimension;
        paddingLeft?: Docs_v1.Schema.Dimension;
        paddingRight?: Docs_v1.Schema.Dimension;
        paddingTop?: Docs_v1.Schema.Dimension;
        rowSpan?: number;
      }
      export interface TableCellStyleSuggestionState {
        backgroundColorSuggested?: boolean;
        borderBottomSuggested?: boolean;
        borderLeftSuggested?: boolean;
        borderRightSuggested?: boolean;
        borderTopSuggested?: boolean;
        columnSpanSuggested?: boolean;
        contentAlignmentSuggested?: boolean;
        paddingBottomSuggested?: boolean;
        paddingLeftSuggested?: boolean;
        paddingRightSuggested?: boolean;
        paddingTopSuggested?: boolean;
        rowSpanSuggested?: boolean;
      }
      export interface TableColumnProperties {
        width?: Docs_v1.Schema.Dimension;
        widthType?: string;
      }
      export interface TableOfContents {
        content?: Docs_v1.Schema.StructuralElement[];
        suggestedDeletionIds?: string[];
        suggestedInsertionIds?: string[];
      }
      export interface TableRow {
        endIndex?: number;
        startIndex?: number;
        suggestedDeletionIds?: string[];
        suggestedInsertionIds?: string[];
        suggestedTableRowStyleChanges?: object;
        tableCells?: Docs_v1.Schema.TableCell[];
        tableRowStyle?: Docs_v1.Schema.TableRowStyle;
      }
      export interface TableRowStyle {
        minRowHeight?: Docs_v1.Schema.Dimension;
      }
      export interface TableRowStyleSuggestionState {
        minRowHeightSuggested?: boolean;
      }
      export interface TableStyle {
        tableColumnProperties?: Docs_v1.Schema.TableColumnProperties[];
      }
      export interface TextRun {
        content?: string;
        suggestedDeletionIds?: string[];
        suggestedInsertionIds?: string[];
        suggestedTextStyleChanges?: object;
        textStyle?: Docs_v1.Schema.TextStyle;
      }
      export interface TextStyle {
        backgroundColor?: Docs_v1.Schema.OptionalColor;
        baselineOffset?: string;
        bold?: boolean;
        fontSize?: Docs_v1.Schema.Dimension;
        foregroundColor?: Docs_v1.Schema.OptionalColor;
        italic?: boolean;
        link?: Docs_v1.Schema.Link;
        smallCaps?: boolean;
        strikethrough?: boolean;
        underline?: boolean;
        weightedFontFamily?: Docs_v1.Schema.WeightedFontFamily;
      }
      export interface TextStyleSuggestionState {
        backgroundColorSuggested?: boolean;
        baselineOffsetSuggested?: boolean;
        boldSuggested?: boolean;
        fontSizeSuggested?: boolean;
        foregroundColorSuggested?: boolean;
        italicSuggested?: boolean;
        linkSuggested?: boolean;
        smallCapsSuggested?: boolean;
        strikethroughSuggested?: boolean;
        underlineSuggested?: boolean;
        weightedFontFamilySuggested?: boolean;
      }
      export interface UpdateParagraphStyleRequest {
        fields?: string;
        paragraphStyle?: Docs_v1.Schema.ParagraphStyle;
        range?: Docs_v1.Schema.Range;
      }
      export interface UpdateTextStyleRequest {
        fields?: string;
        range?: Docs_v1.Schema.Range;
        textStyle?: Docs_v1.Schema.TextStyle;
      }
      export interface WeightedFontFamily {
        fontFamily?: string;
        weight?: number;
      }
      export interface WriteControl {
        requiredRevisionId?: string;
        targetRevisionId?: string;
      }
    }
  }
  export interface Docs_v1 {
    Documents?: Docs_v1.Collection.DocumentsCollection;
    // Create a new instance of AutoText
    newAutoText(): Docs_v1.Schema.AutoText;
    // Create a new instance of Background
    newBackground(): Docs_v1.Schema.Background;
    // Create a new instance of BatchUpdateDocumentRequest
    newBatchUpdateDocumentRequest(): Docs_v1.Schema.BatchUpdateDocumentRequest;
    // Create a new instance of Body
    newBody(): Docs_v1.Schema.Body;
    // Create a new instance of Bullet
    newBullet(): Docs_v1.Schema.Bullet;
    // Create a new instance of Color
    newColor(): Docs_v1.Schema.Color;
    // Create a new instance of ColumnBreak
    newColumnBreak(): Docs_v1.Schema.ColumnBreak;
    // Create a new instance of CreateNamedRangeRequest
    newCreateNamedRangeRequest(): Docs_v1.Schema.CreateNamedRangeRequest;
    // Create a new instance of CreateParagraphBulletsRequest
    newCreateParagraphBulletsRequest(): Docs_v1.Schema.CreateParagraphBulletsRequest;
    // Create a new instance of DeleteContentRangeRequest
    newDeleteContentRangeRequest(): Docs_v1.Schema.DeleteContentRangeRequest;
    // Create a new instance of DeleteNamedRangeRequest
    newDeleteNamedRangeRequest(): Docs_v1.Schema.DeleteNamedRangeRequest;
    // Create a new instance of DeleteParagraphBulletsRequest
    newDeleteParagraphBulletsRequest(): Docs_v1.Schema.DeleteParagraphBulletsRequest;
    // Create a new instance of DeletePositionedObjectRequest
    newDeletePositionedObjectRequest(): Docs_v1.Schema.DeletePositionedObjectRequest;
    // Create a new instance of DeleteTableColumnRequest
    newDeleteTableColumnRequest(): Docs_v1.Schema.DeleteTableColumnRequest;
    // Create a new instance of DeleteTableRowRequest
    newDeleteTableRowRequest(): Docs_v1.Schema.DeleteTableRowRequest;
    // Create a new instance of Dimension
    newDimension(): Docs_v1.Schema.Dimension;
    // Create a new instance of Document
    newDocument(): Docs_v1.Schema.Document;
    // Create a new instance of DocumentStyle
    newDocumentStyle(): Docs_v1.Schema.DocumentStyle;
    // Create a new instance of EndOfSegmentLocation
    newEndOfSegmentLocation(): Docs_v1.Schema.EndOfSegmentLocation;
    // Create a new instance of Equation
    newEquation(): Docs_v1.Schema.Equation;
    // Create a new instance of FootnoteReference
    newFootnoteReference(): Docs_v1.Schema.FootnoteReference;
    // Create a new instance of HorizontalRule
    newHorizontalRule(): Docs_v1.Schema.HorizontalRule;
    // Create a new instance of InlineObjectElement
    newInlineObjectElement(): Docs_v1.Schema.InlineObjectElement;
    // Create a new instance of InsertInlineImageRequest
    newInsertInlineImageRequest(): Docs_v1.Schema.InsertInlineImageRequest;
    // Create a new instance of InsertPageBreakRequest
    newInsertPageBreakRequest(): Docs_v1.Schema.InsertPageBreakRequest;
    // Create a new instance of InsertTableRequest
    newInsertTableRequest(): Docs_v1.Schema.InsertTableRequest;
    // Create a new instance of InsertTableRowRequest
    newInsertTableRowRequest(): Docs_v1.Schema.InsertTableRowRequest;
    // Create a new instance of InsertTextRequest
    newInsertTextRequest(): Docs_v1.Schema.InsertTextRequest;
    // Create a new instance of Link
    newLink(): Docs_v1.Schema.Link;
    // Create a new instance of Location
    newLocation(): Docs_v1.Schema.Location;
    // Create a new instance of NamedStyle
    newNamedStyle(): Docs_v1.Schema.NamedStyle;
    // Create a new instance of NamedStyles
    newNamedStyles(): Docs_v1.Schema.NamedStyles;
    // Create a new instance of OptionalColor
    newOptionalColor(): Docs_v1.Schema.OptionalColor;
    // Create a new instance of PageBreak
    newPageBreak(): Docs_v1.Schema.PageBreak;
    // Create a new instance of Paragraph
    newParagraph(): Docs_v1.Schema.Paragraph;
    // Create a new instance of ParagraphBorder
    newParagraphBorder(): Docs_v1.Schema.ParagraphBorder;
    // Create a new instance of ParagraphElement
    newParagraphElement(): Docs_v1.Schema.ParagraphElement;
    // Create a new instance of ParagraphStyle
    newParagraphStyle(): Docs_v1.Schema.ParagraphStyle;
    // Create a new instance of Range
    newRange(): Docs_v1.Schema.Range;
    // Create a new instance of ReplaceAllTextRequest
    newReplaceAllTextRequest(): Docs_v1.Schema.ReplaceAllTextRequest;
    // Create a new instance of Request
    newRequest(): Docs_v1.Schema.Request;
    // Create a new instance of RgbColor
    newRgbColor(): Docs_v1.Schema.RgbColor;
    // Create a new instance of SectionBreak
    newSectionBreak(): Docs_v1.Schema.SectionBreak;
    // Create a new instance of SectionColumnProperties
    newSectionColumnProperties(): Docs_v1.Schema.SectionColumnProperties;
    // Create a new instance of SectionStyle
    newSectionStyle(): Docs_v1.Schema.SectionStyle;
    // Create a new instance of Shading
    newShading(): Docs_v1.Schema.Shading;
    // Create a new instance of Size
    newSize(): Docs_v1.Schema.Size;
    // Create a new instance of StructuralElement
    newStructuralElement(): Docs_v1.Schema.StructuralElement;
    // Create a new instance of SubstringMatchCriteria
    newSubstringMatchCriteria(): Docs_v1.Schema.SubstringMatchCriteria;
    // Create a new instance of TabStop
    newTabStop(): Docs_v1.Schema.TabStop;
    // Create a new instance of Table
    newTable(): Docs_v1.Schema.Table;
    // Create a new instance of TableCell
    newTableCell(): Docs_v1.Schema.TableCell;
    // Create a new instance of TableCellBorder
    newTableCellBorder(): Docs_v1.Schema.TableCellBorder;
    // Create a new instance of TableCellLocation
    newTableCellLocation(): Docs_v1.Schema.TableCellLocation;
    // Create a new instance of TableCellStyle
    newTableCellStyle(): Docs_v1.Schema.TableCellStyle;
    // Create a new instance of TableColumnProperties
    newTableColumnProperties(): Docs_v1.Schema.TableColumnProperties;
    // Create a new instance of TableOfContents
    newTableOfContents(): Docs_v1.Schema.TableOfContents;
    // Create a new instance of TableRow
    newTableRow(): Docs_v1.Schema.TableRow;
    // Create a new instance of TableRowStyle
    newTableRowStyle(): Docs_v1.Schema.TableRowStyle;
    // Create a new instance of TableStyle
    newTableStyle(): Docs_v1.Schema.TableStyle;
    // Create a new instance of TextRun
    newTextRun(): Docs_v1.Schema.TextRun;
    // Create a new instance of TextStyle
    newTextStyle(): Docs_v1.Schema.TextStyle;
    // Create a new instance of UpdateParagraphStyleRequest
    newUpdateParagraphStyleRequest(): Docs_v1.Schema.UpdateParagraphStyleRequest;
    // Create a new instance of UpdateTextStyleRequest
    newUpdateTextStyleRequest(): Docs_v1.Schema.UpdateTextStyleRequest;
    // Create a new instance of WeightedFontFamily
    newWeightedFontFamily(): Docs_v1.Schema.WeightedFontFamily;
    // Create a new instance of WriteControl
    newWriteControl(): Docs_v1.Schema.WriteControl;
  }
}

declare var Docs_v1: GoogleAppsScript.Docs_v1;