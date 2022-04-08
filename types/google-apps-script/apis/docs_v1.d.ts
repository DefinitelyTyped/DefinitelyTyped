// Type definitions for Google Apps Script 2019-03-25
// Project: https://developers.google.com/apps-script/
// Generator: https://github.com/grant/google-apps-script-dts
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

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
        batchUpdate(resource: Schema.BatchUpdateDocumentRequest, documentId: string): Docs.Schema.BatchUpdateDocumentResponse;
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
        suggestedDeletionIds?: string[];
        suggestedInsertionIds?: string[];
        suggestedTextStyleChanges?: object;
        textStyle?: Docs.Schema.TextStyle;
        type?: string;
      }
      interface Background {
        color?: Docs.Schema.OptionalColor;
      }
      interface BackgroundSuggestionState {
        backgroundColorSuggested?: boolean;
      }
      interface BatchUpdateDocumentRequest {
        requests?: Docs.Schema.Request[];
        writeControl?: Docs.Schema.WriteControl;
      }
      interface BatchUpdateDocumentResponse {
        documentId?: string;
        replies?: Docs.Schema.Response[];
        writeControl?: Docs.Schema.WriteControl;
      }
      interface Body {
        content?: Docs.Schema.StructuralElement[];
      }
      interface Bullet {
        listId?: string;
        nestingLevel?: number;
        textStyle?: Docs.Schema.TextStyle;
      }
      interface BulletSuggestionState {
        listIdSuggested?: boolean;
        nestingLevelSuggested?: boolean;
        textStyleSuggestionState?: Docs.Schema.TextStyleSuggestionState;
      }
      interface Color {
        rgbColor?: Docs.Schema.RgbColor;
      }
      interface ColumnBreak {
        suggestedDeletionIds?: string[];
        suggestedInsertionIds?: string[];
        suggestedTextStyleChanges?: object;
        textStyle?: Docs.Schema.TextStyle;
      }
      interface CreateNamedRangeRequest {
        name?: string;
        range?: Docs.Schema.Range;
      }
      interface CreateNamedRangeResponse {
        namedRangeId?: string;
      }
      interface CreateParagraphBulletsRequest {
        bulletPreset?: string;
        range?: Docs.Schema.Range;
      }
      interface CropProperties {
        angle?: number;
        offsetBottom?: number;
        offsetLeft?: number;
        offsetRight?: number;
        offsetTop?: number;
      }
      interface CropPropertiesSuggestionState {
        angleSuggested?: boolean;
        offsetBottomSuggested?: boolean;
        offsetLeftSuggested?: boolean;
        offsetRightSuggested?: boolean;
        offsetTopSuggested?: boolean;
      }
      interface DeleteContentRangeRequest {
        range?: Docs.Schema.Range;
      }
      interface DeleteNamedRangeRequest {
        name?: string;
        namedRangeId?: string;
      }
      interface DeleteParagraphBulletsRequest {
        range?: Docs.Schema.Range;
      }
      interface DeletePositionedObjectRequest {
        objectId?: string;
      }
      interface DeleteTableColumnRequest {
        tableCellLocation?: Docs.Schema.TableCellLocation;
      }
      interface DeleteTableRowRequest {
        tableCellLocation?: Docs.Schema.TableCellLocation;
      }
      interface Dimension {
        magnitude?: number;
        unit?: string;
      }
      interface Document {
        body?: Docs.Schema.Body;
        documentId?: string;
        documentStyle?: Docs.Schema.DocumentStyle;
        footers?: object;
        footnotes?: object;
        headers?: object;
        inlineObjects?: object;
        lists?: object;
        namedRanges?: object;
        namedStyles?: Docs.Schema.NamedStyles;
        positionedObjects?: object;
        revisionId?: string;
        suggestedDocumentStyleChanges?: object;
        suggestedNamedStylesChanges?: object;
        suggestionsViewMode?: string;
        title?: string;
      }
      interface DocumentStyle {
        background?: Docs.Schema.Background;
        defaultFooterId?: string;
        defaultHeaderId?: string;
        evenPageFooterId?: string;
        evenPageHeaderId?: string;
        firstPageFooterId?: string;
        firstPageHeaderId?: string;
        marginBottom?: Docs.Schema.Dimension;
        marginLeft?: Docs.Schema.Dimension;
        marginRight?: Docs.Schema.Dimension;
        marginTop?: Docs.Schema.Dimension;
        pageNumberStart?: number;
        pageSize?: Docs.Schema.Size;
        useEvenPageHeaderFooter?: boolean;
        useFirstPageHeaderFooter?: boolean;
      }
      interface DocumentStyleSuggestionState {
        backgroundSuggestionState?: Docs.Schema.BackgroundSuggestionState;
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
        pageSizeSuggestionState?: Docs.Schema.SizeSuggestionState;
        useEvenPageHeaderFooterSuggested?: boolean;
        useFirstPageHeaderFooterSuggested?: boolean;
      }
      interface EmbeddedObject {
        description?: string;
        embeddedDrawingProperties?: any;
        embeddedObjectBorder?: Docs.Schema.EmbeddedObjectBorder;
        imageProperties?: Docs.Schema.ImageProperties;
        linkedContentReference?: Docs.Schema.LinkedContentReference;
        marginBottom?: Docs.Schema.Dimension;
        marginLeft?: Docs.Schema.Dimension;
        marginRight?: Docs.Schema.Dimension;
        marginTop?: Docs.Schema.Dimension;
        size?: Docs.Schema.Size;
        title?: string;
      }
      interface EmbeddedObjectBorder {
        color?: Docs.Schema.OptionalColor;
        dashStyle?: string;
        propertyState?: string;
        width?: Docs.Schema.Dimension;
      }
      interface EmbeddedObjectBorderSuggestionState {
        colorSuggested?: boolean;
        dashStyleSuggested?: boolean;
        propertyStateSuggested?: boolean;
        widthSuggested?: boolean;
      }
      interface EmbeddedObjectSuggestionState {
        descriptionSuggested?: boolean;
        embeddedDrawingPropertiesSuggestionState?: any;
        embeddedObjectBorderSuggestionState?: Docs.Schema.EmbeddedObjectBorderSuggestionState;
        imagePropertiesSuggestionState?: Docs.Schema.ImagePropertiesSuggestionState;
        linkedContentReferenceSuggestionState?: Docs.Schema.LinkedContentReferenceSuggestionState;
        marginBottomSuggested?: boolean;
        marginLeftSuggested?: boolean;
        marginRightSuggested?: boolean;
        marginTopSuggested?: boolean;
        sizeSuggestionState?: Docs.Schema.SizeSuggestionState;
        titleSuggested?: boolean;
      }
      interface EndOfSegmentLocation {
        segmentId?: string;
      }
      interface Equation {
        suggestedDeletionIds?: string[];
        suggestedInsertionIds?: string[];
      }
      interface Footer {
        content?: Docs.Schema.StructuralElement[];
        footerId?: string;
      }
      interface Footnote {
        content?: Docs.Schema.StructuralElement[];
        footnoteId?: string;
      }
      interface FootnoteReference {
        footnoteId?: string;
        footnoteNumber?: string;
        suggestedDeletionIds?: string[];
        suggestedInsertionIds?: string[];
        suggestedTextStyleChanges?: object;
        textStyle?: Docs.Schema.TextStyle;
      }
      interface Header {
        content?: Docs.Schema.StructuralElement[];
        headerId?: string;
      }
      interface HorizontalRule {
        suggestedDeletionIds?: string[];
        suggestedInsertionIds?: string[];
        suggestedTextStyleChanges?: object;
        textStyle?: Docs.Schema.TextStyle;
      }
      interface ImageProperties {
        angle?: number;
        brightness?: number;
        contentUri?: string;
        contrast?: number;
        cropProperties?: Docs.Schema.CropProperties;
        sourceUri?: string;
        transparency?: number;
      }
      interface ImagePropertiesSuggestionState {
        angleSuggested?: boolean;
        brightnessSuggested?: boolean;
        contentUriSuggested?: boolean;
        contrastSuggested?: boolean;
        cropPropertiesSuggestionState?: Docs.Schema.CropPropertiesSuggestionState;
        sourceUriSuggested?: boolean;
        transparencySuggested?: boolean;
      }
      interface InlineObject {
        inlineObjectProperties?: Docs.Schema.InlineObjectProperties;
        objectId?: string;
        suggestedDeletionIds?: string[];
        suggestedInlineObjectPropertiesChanges?: object;
        suggestedInsertionId?: string;
      }
      interface InlineObjectElement {
        inlineObjectId?: string;
        suggestedDeletionIds?: string[];
        suggestedInsertionIds?: string[];
        suggestedTextStyleChanges?: object;
        textStyle?: Docs.Schema.TextStyle;
      }
      interface InlineObjectProperties {
        embeddedObject?: Docs.Schema.EmbeddedObject;
      }
      interface InlineObjectPropertiesSuggestionState {
        embeddedObjectSuggestionState?: Docs.Schema.EmbeddedObjectSuggestionState;
      }
      interface InsertInlineImageRequest {
        endOfSegmentLocation?: Docs.Schema.EndOfSegmentLocation;
        location?: Docs.Schema.Location;
        objectSize?: Docs.Schema.Size;
        uri?: string;
      }
      interface InsertInlineImageResponse {
        objectId?: string;
      }
      interface InsertInlineSheetsChartResponse {
        objectId?: string;
      }
      interface InsertPageBreakRequest {
        endOfSegmentLocation?: Docs.Schema.EndOfSegmentLocation;
        location?: Docs.Schema.Location;
      }
      interface InsertTableRequest {
        columns?: number;
        endOfSegmentLocation?: Docs.Schema.EndOfSegmentLocation;
        location?: Docs.Schema.Location;
        rows?: number;
      }
      interface InsertTableRowRequest {
        insertBelow?: boolean;
        tableCellLocation?: Docs.Schema.TableCellLocation;
      }
      interface InsertTextRequest {
        endOfSegmentLocation?: Docs.Schema.EndOfSegmentLocation;
        location?: Docs.Schema.Location;
        text?: string;
      }
      interface Link {
        bookmarkId?: string;
        headingId?: string;
        url?: string;
      }
      interface LinkedContentReference {
        sheetsChartReference?: Docs.Schema.SheetsChartReference;
      }
      interface LinkedContentReferenceSuggestionState {
        sheetsChartReferenceSuggestionState?: Docs.Schema.SheetsChartReferenceSuggestionState;
      }
      interface List {
        listProperties?: Docs.Schema.ListProperties;
        suggestedDeletionIds?: string[];
        suggestedInsertionId?: string;
        suggestedListPropertiesChanges?: object;
      }
      interface ListProperties {
        nestingLevels?: Docs.Schema.NestingLevel[];
      }
      interface ListPropertiesSuggestionState {
        nestingLevelsSuggestionStates?: Docs.Schema.NestingLevelSuggestionState[];
      }
      interface Location {
        index?: number;
        segmentId?: string;
      }
      interface NamedRange {
        name?: string;
        namedRangeId?: string;
        ranges?: Docs.Schema.Range[];
      }
      interface NamedRanges {
        name?: string;
        namedRanges?: Docs.Schema.NamedRange[];
      }
      interface NamedStyle {
        namedStyleType?: string;
        paragraphStyle?: Docs.Schema.ParagraphStyle;
        textStyle?: Docs.Schema.TextStyle;
      }
      interface NamedStyleSuggestionState {
        namedStyleType?: string;
        paragraphStyleSuggestionState?: Docs.Schema.ParagraphStyleSuggestionState;
        textStyleSuggestionState?: Docs.Schema.TextStyleSuggestionState;
      }
      interface NamedStyles {
        styles?: Docs.Schema.NamedStyle[];
      }
      interface NamedStylesSuggestionState {
        stylesSuggestionStates?: Docs.Schema.NamedStyleSuggestionState[];
      }
      interface NestingLevel {
        bulletAlignment?: string;
        glyphFormat?: string;
        glyphSymbol?: string;
        glyphType?: string;
        indentFirstLine?: Docs.Schema.Dimension;
        indentStart?: Docs.Schema.Dimension;
        startNumber?: number;
        textStyle?: Docs.Schema.TextStyle;
      }
      interface NestingLevelSuggestionState {
        bulletAlignmentSuggested?: boolean;
        glyphFormatSuggested?: boolean;
        glyphSymbolSuggested?: boolean;
        glyphTypeSuggested?: boolean;
        indentFirstLineSuggested?: boolean;
        indentStartSuggested?: boolean;
        startNumberSuggested?: boolean;
        textStyleSuggestionState?: Docs.Schema.TextStyleSuggestionState;
      }
      interface ObjectReferences {
        objectIds?: string[];
      }
      interface OptionalColor {
        color?: Docs.Schema.Color;
      }
      interface PageBreak {
        suggestedDeletionIds?: string[];
        suggestedInsertionIds?: string[];
        suggestedTextStyleChanges?: object;
        textStyle?: Docs.Schema.TextStyle;
      }
      interface Paragraph {
        bullet?: Docs.Schema.Bullet;
        elements?: Docs.Schema.ParagraphElement[];
        paragraphStyle?: Docs.Schema.ParagraphStyle;
        positionedObjectIds?: string[];
        suggestedBulletChanges?: object;
        suggestedParagraphStyleChanges?: object;
        suggestedPositionedObjectIds?: object;
      }
      interface ParagraphBorder {
        color?: Docs.Schema.OptionalColor;
        dashStyle?: string;
        padding?: Docs.Schema.Dimension;
        width?: Docs.Schema.Dimension;
      }
      interface ParagraphElement {
        autoText?: Docs.Schema.AutoText;
        columnBreak?: Docs.Schema.ColumnBreak;
        endIndex?: number;
        equation?: Docs.Schema.Equation;
        footnoteReference?: Docs.Schema.FootnoteReference;
        horizontalRule?: Docs.Schema.HorizontalRule;
        inlineObjectElement?: Docs.Schema.InlineObjectElement;
        pageBreak?: Docs.Schema.PageBreak;
        startIndex?: number;
        textRun?: Docs.Schema.TextRun;
      }
      interface ParagraphStyle {
        alignment?: string;
        avoidWidowAndOrphan?: boolean;
        borderBetween?: Docs.Schema.ParagraphBorder;
        borderBottom?: Docs.Schema.ParagraphBorder;
        borderLeft?: Docs.Schema.ParagraphBorder;
        borderRight?: Docs.Schema.ParagraphBorder;
        borderTop?: Docs.Schema.ParagraphBorder;
        direction?: string;
        headingId?: string;
        indentEnd?: Docs.Schema.Dimension;
        indentFirstLine?: Docs.Schema.Dimension;
        indentStart?: Docs.Schema.Dimension;
        keepLinesTogether?: boolean;
        keepWithNext?: boolean;
        lineSpacing?: number;
        namedStyleType?: string;
        shading?: Docs.Schema.Shading;
        spaceAbove?: Docs.Schema.Dimension;
        spaceBelow?: Docs.Schema.Dimension;
        spacingMode?: string;
        tabStops?: Docs.Schema.TabStop[];
      }
      interface ParagraphStyleSuggestionState {
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
        shadingSuggestionState?: Docs.Schema.ShadingSuggestionState;
        spaceAboveSuggested?: boolean;
        spaceBelowSuggested?: boolean;
        spacingModeSuggested?: boolean;
      }
      interface PositionedObject {
        objectId?: string;
        positionedObjectProperties?: Docs.Schema.PositionedObjectProperties;
        suggestedDeletionIds?: string[];
        suggestedInsertionId?: string;
        suggestedPositionedObjectPropertiesChanges?: object;
      }
      interface PositionedObjectPositioning {
        layout?: string;
        leftOffset?: Docs.Schema.Dimension;
        topOffset?: Docs.Schema.Dimension;
      }
      interface PositionedObjectPositioningSuggestionState {
        layoutSuggested?: boolean;
        leftOffsetSuggested?: boolean;
        topOffsetSuggested?: boolean;
      }
      interface PositionedObjectProperties {
        embeddedObject?: Docs.Schema.EmbeddedObject;
        positioning?: Docs.Schema.PositionedObjectPositioning;
      }
      interface PositionedObjectPropertiesSuggestionState {
        embeddedObjectSuggestionState?: Docs.Schema.EmbeddedObjectSuggestionState;
        positioningSuggestionState?: Docs.Schema.PositionedObjectPositioningSuggestionState;
      }
      interface Range {
        endIndex?: number;
        segmentId?: string;
        startIndex?: number;
      }
      interface ReplaceAllTextRequest {
        containsText?: Docs.Schema.SubstringMatchCriteria;
        replaceText?: string;
      }
      interface ReplaceAllTextResponse {
        occurrencesChanged?: number;
      }
      interface Request {
        createNamedRange?: Docs.Schema.CreateNamedRangeRequest;
        createParagraphBullets?: Docs.Schema.CreateParagraphBulletsRequest;
        deleteContentRange?: Docs.Schema.DeleteContentRangeRequest;
        deleteNamedRange?: Docs.Schema.DeleteNamedRangeRequest;
        deleteParagraphBullets?: Docs.Schema.DeleteParagraphBulletsRequest;
        deletePositionedObject?: Docs.Schema.DeletePositionedObjectRequest;
        deleteTableColumn?: Docs.Schema.DeleteTableColumnRequest;
        deleteTableRow?: Docs.Schema.DeleteTableRowRequest;
        insertInlineImage?: Docs.Schema.InsertInlineImageRequest;
        insertPageBreak?: Docs.Schema.InsertPageBreakRequest;
        insertTable?: Docs.Schema.InsertTableRequest;
        insertTableRow?: Docs.Schema.InsertTableRowRequest;
        insertText?: Docs.Schema.InsertTextRequest;
        replaceAllText?: Docs.Schema.ReplaceAllTextRequest;
        updateParagraphStyle?: Docs.Schema.UpdateParagraphStyleRequest;
        updateTextStyle?: Docs.Schema.UpdateTextStyleRequest;
      }
      interface Response {
        createNamedRange?: Docs.Schema.CreateNamedRangeResponse;
        insertInlineImage?: Docs.Schema.InsertInlineImageResponse;
        insertInlineSheetsChart?: Docs.Schema.InsertInlineSheetsChartResponse;
        replaceAllText?: Docs.Schema.ReplaceAllTextResponse;
      }
      interface RgbColor {
        blue?: number;
        green?: number;
        red?: number;
      }
      interface SectionBreak {
        sectionStyle?: Docs.Schema.SectionStyle;
        suggestedDeletionIds?: string[];
        suggestedInsertionIds?: string[];
      }
      interface SectionColumnProperties {
        paddingEnd?: Docs.Schema.Dimension;
        width?: Docs.Schema.Dimension;
      }
      interface SectionStyle {
        columnProperties?: Docs.Schema.SectionColumnProperties[];
        columnSeparatorStyle?: string;
        contentDirection?: string;
      }
      interface Shading {
        backgroundColor?: Docs.Schema.OptionalColor;
      }
      interface ShadingSuggestionState {
        backgroundColorSuggested?: boolean;
      }
      interface SheetsChartReference {
        chartId?: number;
        spreadsheetId?: string;
      }
      interface SheetsChartReferenceSuggestionState {
        chartIdSuggested?: boolean;
        spreadsheetIdSuggested?: boolean;
      }
      interface Size {
        height?: Docs.Schema.Dimension;
        width?: Docs.Schema.Dimension;
      }
      interface SizeSuggestionState {
        heightSuggested?: boolean;
        widthSuggested?: boolean;
      }
      interface StructuralElement {
        endIndex?: number;
        paragraph?: Docs.Schema.Paragraph;
        sectionBreak?: Docs.Schema.SectionBreak;
        startIndex?: number;
        table?: Docs.Schema.Table;
        tableOfContents?: Docs.Schema.TableOfContents;
      }
      interface SubstringMatchCriteria {
        matchCase?: boolean;
        text?: string;
      }
      interface SuggestedBullet {
        bullet?: Docs.Schema.Bullet;
        bulletSuggestionState?: Docs.Schema.BulletSuggestionState;
      }
      interface SuggestedDocumentStyle {
        documentStyle?: Docs.Schema.DocumentStyle;
        documentStyleSuggestionState?: Docs.Schema.DocumentStyleSuggestionState;
      }
      interface SuggestedInlineObjectProperties {
        inlineObjectProperties?: Docs.Schema.InlineObjectProperties;
        inlineObjectPropertiesSuggestionState?: Docs.Schema.InlineObjectPropertiesSuggestionState;
      }
      interface SuggestedListProperties {
        listProperties?: Docs.Schema.ListProperties;
        listPropertiesSuggestionState?: Docs.Schema.ListPropertiesSuggestionState;
      }
      interface SuggestedNamedStyles {
        namedStyles?: Docs.Schema.NamedStyles;
        namedStylesSuggestionState?: Docs.Schema.NamedStylesSuggestionState;
      }
      interface SuggestedParagraphStyle {
        paragraphStyle?: Docs.Schema.ParagraphStyle;
        paragraphStyleSuggestionState?: Docs.Schema.ParagraphStyleSuggestionState;
      }
      interface SuggestedPositionedObjectProperties {
        positionedObjectProperties?: Docs.Schema.PositionedObjectProperties;
        positionedObjectPropertiesSuggestionState?: Docs.Schema.PositionedObjectPropertiesSuggestionState;
      }
      interface SuggestedTableCellStyle {
        tableCellStyle?: Docs.Schema.TableCellStyle;
        tableCellStyleSuggestionState?: Docs.Schema.TableCellStyleSuggestionState;
      }
      interface SuggestedTableRowStyle {
        tableRowStyle?: Docs.Schema.TableRowStyle;
        tableRowStyleSuggestionState?: Docs.Schema.TableRowStyleSuggestionState;
      }
      interface SuggestedTextStyle {
        textStyle?: Docs.Schema.TextStyle;
        textStyleSuggestionState?: Docs.Schema.TextStyleSuggestionState;
      }
      interface TabStop {
        alignment?: string;
        offset?: Docs.Schema.Dimension;
      }
      interface Table {
        columns?: number;
        rows?: number;
        suggestedDeletionIds?: string[];
        suggestedInsertionIds?: string[];
        tableRows?: Docs.Schema.TableRow[];
        tableStyle?: Docs.Schema.TableStyle;
      }
      interface TableCell {
        content?: Docs.Schema.StructuralElement[];
        endIndex?: number;
        startIndex?: number;
        suggestedDeletionIds?: string[];
        suggestedInsertionIds?: string[];
        suggestedTableCellStyleChanges?: object;
        tableCellStyle?: Docs.Schema.TableCellStyle;
      }
      interface TableCellBorder {
        color?: Docs.Schema.OptionalColor;
        dashStyle?: string;
        width?: Docs.Schema.Dimension;
      }
      interface TableCellLocation {
        columnIndex?: number;
        rowIndex?: number;
        tableStartLocation?: Docs.Schema.Location;
      }
      interface TableCellStyle {
        backgroundColor?: Docs.Schema.OptionalColor;
        borderBottom?: Docs.Schema.TableCellBorder;
        borderLeft?: Docs.Schema.TableCellBorder;
        borderRight?: Docs.Schema.TableCellBorder;
        borderTop?: Docs.Schema.TableCellBorder;
        columnSpan?: number;
        contentAlignment?: string;
        paddingBottom?: Docs.Schema.Dimension;
        paddingLeft?: Docs.Schema.Dimension;
        paddingRight?: Docs.Schema.Dimension;
        paddingTop?: Docs.Schema.Dimension;
        rowSpan?: number;
      }
      interface TableCellStyleSuggestionState {
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
      interface TableColumnProperties {
        width?: Docs.Schema.Dimension;
        widthType?: string;
      }
      interface TableOfContents {
        content?: Docs.Schema.StructuralElement[];
        suggestedDeletionIds?: string[];
        suggestedInsertionIds?: string[];
      }
      interface TableRow {
        endIndex?: number;
        startIndex?: number;
        suggestedDeletionIds?: string[];
        suggestedInsertionIds?: string[];
        suggestedTableRowStyleChanges?: object;
        tableCells?: Docs.Schema.TableCell[];
        tableRowStyle?: Docs.Schema.TableRowStyle;
      }
      interface TableRowStyle {
        minRowHeight?: Docs.Schema.Dimension;
      }
      interface TableRowStyleSuggestionState {
        minRowHeightSuggested?: boolean;
      }
      interface TableStyle {
        tableColumnProperties?: Docs.Schema.TableColumnProperties[];
      }
      interface TextRun {
        content?: string;
        suggestedDeletionIds?: string[];
        suggestedInsertionIds?: string[];
        suggestedTextStyleChanges?: object;
        textStyle?: Docs.Schema.TextStyle;
      }
      interface TextStyle {
        backgroundColor?: Docs.Schema.OptionalColor;
        baselineOffset?: string;
        bold?: boolean;
        fontSize?: Docs.Schema.Dimension;
        foregroundColor?: Docs.Schema.OptionalColor;
        italic?: boolean;
        link?: Docs.Schema.Link;
        smallCaps?: boolean;
        strikethrough?: boolean;
        underline?: boolean;
        weightedFontFamily?: Docs.Schema.WeightedFontFamily;
      }
      interface TextStyleSuggestionState {
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
      interface UpdateParagraphStyleRequest {
        fields?: string;
        paragraphStyle?: Docs.Schema.ParagraphStyle;
        range?: Docs.Schema.Range;
      }
      interface UpdateTextStyleRequest {
        fields?: string;
        range?: Docs.Schema.Range;
        textStyle?: Docs.Schema.TextStyle;
      }
      interface WeightedFontFamily {
        fontFamily?: string;
        weight?: number;
      }
      interface WriteControl {
        requiredRevisionId?: string;
        targetRevisionId?: string;
      }
    }
  }
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
