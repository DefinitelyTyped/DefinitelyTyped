// Type definitions for Google Apps Script 2019-03-25
// Project: https://developers.google.com/apps-script/
// Generator: https://github.com/grant/google-apps-script-dts
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

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
          getThumbnail(presentationId: string, pageObjectId: string, optionalArgs: object): Slides.Schema.Thumbnail;
        }
      }
      interface PresentationsCollection {
        Pages?: Slides.Collection.Presentations.PagesCollection;
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
        batchUpdate(resource: Schema.BatchUpdatePresentationRequest, presentationId: string): Slides.Schema.BatchUpdatePresentationResponse;
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
        scaleX?: number;
        scaleY?: number;
        shearX?: number;
        shearY?: number;
        translateX?: number;
        translateY?: number;
        unit?: string;
      }
      interface AutoText {
        content?: string;
        style?: Slides.Schema.TextStyle;
        type?: string;
      }
      interface BatchUpdatePresentationRequest {
        requests?: Slides.Schema.Request[];
        writeControl?: Slides.Schema.WriteControl;
      }
      interface BatchUpdatePresentationResponse {
        presentationId?: string;
        replies?: Slides.Schema.Response[];
        writeControl?: Slides.Schema.WriteControl;
      }
      interface Bullet {
        bulletStyle?: Slides.Schema.TextStyle;
        glyph?: string;
        listId?: string;
        nestingLevel?: number;
      }
      interface ColorScheme {
        colors?: Slides.Schema.ThemeColorPair[];
      }
      interface ColorStop {
        alpha?: number;
        color?: Slides.Schema.OpaqueColor;
        position?: number;
      }
      interface CreateImageRequest {
        elementProperties?: Slides.Schema.PageElementProperties;
        objectId?: string;
        url?: string;
      }
      interface CreateImageResponse {
        objectId?: string;
      }
      interface CreateLineRequest {
        category?: string;
        elementProperties?: Slides.Schema.PageElementProperties;
        lineCategory?: string;
        objectId?: string;
      }
      interface CreateLineResponse {
        objectId?: string;
      }
      interface CreateParagraphBulletsRequest {
        bulletPreset?: string;
        cellLocation?: Slides.Schema.TableCellLocation;
        objectId?: string;
        textRange?: Slides.Schema.Range;
      }
      interface CreateShapeRequest {
        elementProperties?: Slides.Schema.PageElementProperties;
        objectId?: string;
        shapeType?: string;
      }
      interface CreateShapeResponse {
        objectId?: string;
      }
      interface CreateSheetsChartRequest {
        chartId?: number;
        elementProperties?: Slides.Schema.PageElementProperties;
        linkingMode?: string;
        objectId?: string;
        spreadsheetId?: string;
      }
      interface CreateSheetsChartResponse {
        objectId?: string;
      }
      interface CreateSlideRequest {
        insertionIndex?: number;
        objectId?: string;
        placeholderIdMappings?: Slides.Schema.LayoutPlaceholderIdMapping[];
        slideLayoutReference?: Slides.Schema.LayoutReference;
      }
      interface CreateSlideResponse {
        objectId?: string;
      }
      interface CreateTableRequest {
        columns?: number;
        elementProperties?: Slides.Schema.PageElementProperties;
        objectId?: string;
        rows?: number;
      }
      interface CreateTableResponse {
        objectId?: string;
      }
      interface CreateVideoRequest {
        elementProperties?: Slides.Schema.PageElementProperties;
        id?: string;
        objectId?: string;
        source?: string;
      }
      interface CreateVideoResponse {
        objectId?: string;
      }
      interface CropProperties {
        angle?: number;
        bottomOffset?: number;
        leftOffset?: number;
        rightOffset?: number;
        topOffset?: number;
      }
      interface DeleteObjectRequest {
        objectId?: string;
      }
      interface DeleteParagraphBulletsRequest {
        cellLocation?: Slides.Schema.TableCellLocation;
        objectId?: string;
        textRange?: Slides.Schema.Range;
      }
      interface DeleteTableColumnRequest {
        cellLocation?: Slides.Schema.TableCellLocation;
        tableObjectId?: string;
      }
      interface DeleteTableRowRequest {
        cellLocation?: Slides.Schema.TableCellLocation;
        tableObjectId?: string;
      }
      interface DeleteTextRequest {
        cellLocation?: Slides.Schema.TableCellLocation;
        objectId?: string;
        textRange?: Slides.Schema.Range;
      }
      interface Dimension {
        magnitude?: number;
        unit?: string;
      }
      interface DuplicateObjectRequest {
        objectId?: string;
        objectIds?: object;
      }
      interface DuplicateObjectResponse {
        objectId?: string;
      }
      interface Group {
        children?: Slides.Schema.PageElement[];
      }
      interface GroupObjectsRequest {
        childrenObjectIds?: string[];
        groupObjectId?: string;
      }
      interface GroupObjectsResponse {
        objectId?: string;
      }
      interface Image {
        contentUrl?: string;
        imageProperties?: Slides.Schema.ImageProperties;
        sourceUrl?: string;
      }
      interface ImageProperties {
        brightness?: number;
        contrast?: number;
        cropProperties?: Slides.Schema.CropProperties;
        link?: Slides.Schema.Link;
        outline?: Slides.Schema.Outline;
        recolor?: Slides.Schema.Recolor;
        shadow?: Slides.Schema.Shadow;
        transparency?: number;
      }
      interface InsertTableColumnsRequest {
        cellLocation?: Slides.Schema.TableCellLocation;
        insertRight?: boolean;
        number?: number;
        tableObjectId?: string;
      }
      interface InsertTableRowsRequest {
        cellLocation?: Slides.Schema.TableCellLocation;
        insertBelow?: boolean;
        number?: number;
        tableObjectId?: string;
      }
      interface InsertTextRequest {
        cellLocation?: Slides.Schema.TableCellLocation;
        insertionIndex?: number;
        objectId?: string;
        text?: string;
      }
      interface LayoutPlaceholderIdMapping {
        layoutPlaceholder?: Slides.Schema.Placeholder;
        layoutPlaceholderObjectId?: string;
        objectId?: string;
      }
      interface LayoutProperties {
        displayName?: string;
        masterObjectId?: string;
        name?: string;
      }
      interface LayoutReference {
        layoutId?: string;
        predefinedLayout?: string;
      }
      interface Line {
        lineCategory?: string;
        lineProperties?: Slides.Schema.LineProperties;
        lineType?: string;
      }
      interface LineConnection {
        connectedObjectId?: string;
        connectionSiteIndex?: number;
      }
      interface LineFill {
        solidFill?: Slides.Schema.SolidFill;
      }
      interface LineProperties {
        dashStyle?: string;
        endArrow?: string;
        endConnection?: Slides.Schema.LineConnection;
        lineFill?: Slides.Schema.LineFill;
        link?: Slides.Schema.Link;
        startArrow?: string;
        startConnection?: Slides.Schema.LineConnection;
        weight?: Slides.Schema.Dimension;
      }
      interface Link {
        pageObjectId?: string;
        relativeLink?: string;
        slideIndex?: number;
        url?: string;
      }
      interface List {
        listId?: string;
        nestingLevel?: object;
      }
      interface MasterProperties {
        displayName?: string;
      }
      interface MergeTableCellsRequest {
        objectId?: string;
        tableRange?: Slides.Schema.TableRange;
      }
      interface NestingLevel {
        bulletStyle?: Slides.Schema.TextStyle;
      }
      interface NotesProperties {
        speakerNotesObjectId?: string;
      }
      interface OpaqueColor {
        rgbColor?: Slides.Schema.RgbColor;
        themeColor?: string;
      }
      interface OptionalColor {
        opaqueColor?: Slides.Schema.OpaqueColor;
      }
      interface Outline {
        dashStyle?: string;
        outlineFill?: Slides.Schema.OutlineFill;
        propertyState?: string;
        weight?: Slides.Schema.Dimension;
      }
      interface OutlineFill {
        solidFill?: Slides.Schema.SolidFill;
      }
      interface Page {
        layoutProperties?: Slides.Schema.LayoutProperties;
        masterProperties?: Slides.Schema.MasterProperties;
        notesProperties?: Slides.Schema.NotesProperties;
        objectId?: string;
        pageElements?: Slides.Schema.PageElement[];
        pageProperties?: Slides.Schema.PageProperties;
        pageType?: string;
        revisionId?: string;
        slideProperties?: Slides.Schema.SlideProperties;
      }
      interface PageBackgroundFill {
        propertyState?: string;
        solidFill?: Slides.Schema.SolidFill;
        stretchedPictureFill?: Slides.Schema.StretchedPictureFill;
      }
      interface PageElement {
        description?: string;
        elementGroup?: Slides.Schema.Group;
        image?: Slides.Schema.Image;
        line?: Slides.Schema.Line;
        objectId?: string;
        shape?: Slides.Schema.Shape;
        sheetsChart?: Slides.Schema.SheetsChart;
        size?: Slides.Schema.Size;
        table?: Slides.Schema.Table;
        title?: string;
        transform?: Slides.Schema.AffineTransform;
        video?: Slides.Schema.Video;
        wordArt?: Slides.Schema.WordArt;
      }
      interface PageElementProperties {
        pageObjectId?: string;
        size?: Slides.Schema.Size;
        transform?: Slides.Schema.AffineTransform;
      }
      interface PageProperties {
        colorScheme?: Slides.Schema.ColorScheme;
        pageBackgroundFill?: Slides.Schema.PageBackgroundFill;
      }
      interface ParagraphMarker {
        bullet?: Slides.Schema.Bullet;
        style?: Slides.Schema.ParagraphStyle;
      }
      interface ParagraphStyle {
        alignment?: string;
        direction?: string;
        indentEnd?: Slides.Schema.Dimension;
        indentFirstLine?: Slides.Schema.Dimension;
        indentStart?: Slides.Schema.Dimension;
        lineSpacing?: number;
        spaceAbove?: Slides.Schema.Dimension;
        spaceBelow?: Slides.Schema.Dimension;
        spacingMode?: string;
      }
      interface Placeholder {
        index?: number;
        parentObjectId?: string;
        type?: string;
      }
      interface Presentation {
        layouts?: Slides.Schema.Page[];
        locale?: string;
        masters?: Slides.Schema.Page[];
        notesMaster?: Slides.Schema.Page;
        pageSize?: Slides.Schema.Size;
        presentationId?: string;
        revisionId?: string;
        slides?: Slides.Schema.Page[];
        title?: string;
      }
      interface Range {
        endIndex?: number;
        startIndex?: number;
        type?: string;
      }
      interface Recolor {
        name?: string;
        recolorStops?: Slides.Schema.ColorStop[];
      }
      interface RefreshSheetsChartRequest {
        objectId?: string;
      }
      interface ReplaceAllShapesWithImageRequest {
        containsText?: Slides.Schema.SubstringMatchCriteria;
        imageReplaceMethod?: string;
        imageUrl?: string;
        pageObjectIds?: string[];
        replaceMethod?: string;
      }
      interface ReplaceAllShapesWithImageResponse {
        occurrencesChanged?: number;
      }
      interface ReplaceAllShapesWithSheetsChartRequest {
        chartId?: number;
        containsText?: Slides.Schema.SubstringMatchCriteria;
        linkingMode?: string;
        pageObjectIds?: string[];
        spreadsheetId?: string;
      }
      interface ReplaceAllShapesWithSheetsChartResponse {
        occurrencesChanged?: number;
      }
      interface ReplaceAllTextRequest {
        containsText?: Slides.Schema.SubstringMatchCriteria;
        pageObjectIds?: string[];
        replaceText?: string;
      }
      interface ReplaceAllTextResponse {
        occurrencesChanged?: number;
      }
      interface ReplaceImageRequest {
        imageObjectId?: string;
        imageReplaceMethod?: string;
        url?: string;
      }
      interface Request {
        createImage?: Slides.Schema.CreateImageRequest;
        createLine?: Slides.Schema.CreateLineRequest;
        createParagraphBullets?: Slides.Schema.CreateParagraphBulletsRequest;
        createShape?: Slides.Schema.CreateShapeRequest;
        createSheetsChart?: Slides.Schema.CreateSheetsChartRequest;
        createSlide?: Slides.Schema.CreateSlideRequest;
        createTable?: Slides.Schema.CreateTableRequest;
        createVideo?: Slides.Schema.CreateVideoRequest;
        deleteObject?: Slides.Schema.DeleteObjectRequest;
        deleteParagraphBullets?: Slides.Schema.DeleteParagraphBulletsRequest;
        deleteTableColumn?: Slides.Schema.DeleteTableColumnRequest;
        deleteTableRow?: Slides.Schema.DeleteTableRowRequest;
        deleteText?: Slides.Schema.DeleteTextRequest;
        duplicateObject?: Slides.Schema.DuplicateObjectRequest;
        groupObjects?: Slides.Schema.GroupObjectsRequest;
        insertTableColumns?: Slides.Schema.InsertTableColumnsRequest;
        insertTableRows?: Slides.Schema.InsertTableRowsRequest;
        insertText?: Slides.Schema.InsertTextRequest;
        mergeTableCells?: Slides.Schema.MergeTableCellsRequest;
        refreshSheetsChart?: Slides.Schema.RefreshSheetsChartRequest;
        replaceAllShapesWithImage?: Slides.Schema.ReplaceAllShapesWithImageRequest;
        replaceAllShapesWithSheetsChart?: Slides.Schema.ReplaceAllShapesWithSheetsChartRequest;
        replaceAllText?: Slides.Schema.ReplaceAllTextRequest;
        replaceImage?: Slides.Schema.ReplaceImageRequest;
        rerouteLine?: Slides.Schema.RerouteLineRequest;
        ungroupObjects?: Slides.Schema.UngroupObjectsRequest;
        unmergeTableCells?: Slides.Schema.UnmergeTableCellsRequest;
        updateImageProperties?: Slides.Schema.UpdateImagePropertiesRequest;
        updateLineCategory?: Slides.Schema.UpdateLineCategoryRequest;
        updateLineProperties?: Slides.Schema.UpdateLinePropertiesRequest;
        updatePageElementAltText?: Slides.Schema.UpdatePageElementAltTextRequest;
        updatePageElementTransform?: Slides.Schema.UpdatePageElementTransformRequest;
        updatePageElementsZOrder?: Slides.Schema.UpdatePageElementsZOrderRequest;
        updatePageProperties?: Slides.Schema.UpdatePagePropertiesRequest;
        updateParagraphStyle?: Slides.Schema.UpdateParagraphStyleRequest;
        updateShapeProperties?: Slides.Schema.UpdateShapePropertiesRequest;
        updateSlidesPosition?: Slides.Schema.UpdateSlidesPositionRequest;
        updateTableBorderProperties?: Slides.Schema.UpdateTableBorderPropertiesRequest;
        updateTableCellProperties?: Slides.Schema.UpdateTableCellPropertiesRequest;
        updateTableColumnProperties?: Slides.Schema.UpdateTableColumnPropertiesRequest;
        updateTableRowProperties?: Slides.Schema.UpdateTableRowPropertiesRequest;
        updateTextStyle?: Slides.Schema.UpdateTextStyleRequest;
        updateVideoProperties?: Slides.Schema.UpdateVideoPropertiesRequest;
      }
      interface RerouteLineRequest {
        objectId?: string;
      }
      interface Response {
        createImage?: Slides.Schema.CreateImageResponse;
        createLine?: Slides.Schema.CreateLineResponse;
        createShape?: Slides.Schema.CreateShapeResponse;
        createSheetsChart?: Slides.Schema.CreateSheetsChartResponse;
        createSlide?: Slides.Schema.CreateSlideResponse;
        createTable?: Slides.Schema.CreateTableResponse;
        createVideo?: Slides.Schema.CreateVideoResponse;
        duplicateObject?: Slides.Schema.DuplicateObjectResponse;
        groupObjects?: Slides.Schema.GroupObjectsResponse;
        replaceAllShapesWithImage?: Slides.Schema.ReplaceAllShapesWithImageResponse;
        replaceAllShapesWithSheetsChart?: Slides.Schema.ReplaceAllShapesWithSheetsChartResponse;
        replaceAllText?: Slides.Schema.ReplaceAllTextResponse;
      }
      interface RgbColor {
        blue?: number;
        green?: number;
        red?: number;
      }
      interface Shadow {
        alignment?: string;
        alpha?: number;
        blurRadius?: Slides.Schema.Dimension;
        color?: Slides.Schema.OpaqueColor;
        propertyState?: string;
        rotateWithShape?: boolean;
        transform?: Slides.Schema.AffineTransform;
        type?: string;
      }
      interface Shape {
        placeholder?: Slides.Schema.Placeholder;
        shapeProperties?: Slides.Schema.ShapeProperties;
        shapeType?: string;
        text?: Slides.Schema.TextContent;
      }
      interface ShapeBackgroundFill {
        propertyState?: string;
        solidFill?: Slides.Schema.SolidFill;
      }
      interface ShapeProperties {
        contentAlignment?: string;
        link?: Slides.Schema.Link;
        outline?: Slides.Schema.Outline;
        shadow?: Slides.Schema.Shadow;
        shapeBackgroundFill?: Slides.Schema.ShapeBackgroundFill;
      }
      interface SheetsChart {
        chartId?: number;
        contentUrl?: string;
        sheetsChartProperties?: Slides.Schema.SheetsChartProperties;
        spreadsheetId?: string;
      }
      interface SheetsChartProperties {
        chartImageProperties?: Slides.Schema.ImageProperties;
      }
      interface Size {
        height?: Slides.Schema.Dimension;
        width?: Slides.Schema.Dimension;
      }
      interface SlideProperties {
        layoutObjectId?: string;
        masterObjectId?: string;
        notesPage?: Slides.Schema.Page;
      }
      interface SolidFill {
        alpha?: number;
        color?: Slides.Schema.OpaqueColor;
      }
      interface StretchedPictureFill {
        contentUrl?: string;
        size?: Slides.Schema.Size;
      }
      interface SubstringMatchCriteria {
        matchCase?: boolean;
        text?: string;
      }
      interface Table {
        columns?: number;
        horizontalBorderRows?: Slides.Schema.TableBorderRow[];
        rows?: number;
        tableColumns?: Slides.Schema.TableColumnProperties[];
        tableRows?: Slides.Schema.TableRow[];
        verticalBorderRows?: Slides.Schema.TableBorderRow[];
      }
      interface TableBorderCell {
        location?: Slides.Schema.TableCellLocation;
        tableBorderProperties?: Slides.Schema.TableBorderProperties;
      }
      interface TableBorderFill {
        solidFill?: Slides.Schema.SolidFill;
      }
      interface TableBorderProperties {
        dashStyle?: string;
        tableBorderFill?: Slides.Schema.TableBorderFill;
        weight?: Slides.Schema.Dimension;
      }
      interface TableBorderRow {
        tableBorderCells?: Slides.Schema.TableBorderCell[];
      }
      interface TableCell {
        columnSpan?: number;
        location?: Slides.Schema.TableCellLocation;
        rowSpan?: number;
        tableCellProperties?: Slides.Schema.TableCellProperties;
        text?: Slides.Schema.TextContent;
      }
      interface TableCellBackgroundFill {
        propertyState?: string;
        solidFill?: Slides.Schema.SolidFill;
      }
      interface TableCellLocation {
        columnIndex?: number;
        rowIndex?: number;
      }
      interface TableCellProperties {
        contentAlignment?: string;
        tableCellBackgroundFill?: Slides.Schema.TableCellBackgroundFill;
      }
      interface TableColumnProperties {
        columnWidth?: Slides.Schema.Dimension;
      }
      interface TableRange {
        columnSpan?: number;
        location?: Slides.Schema.TableCellLocation;
        rowSpan?: number;
      }
      interface TableRow {
        rowHeight?: Slides.Schema.Dimension;
        tableCells?: Slides.Schema.TableCell[];
        tableRowProperties?: Slides.Schema.TableRowProperties;
      }
      interface TableRowProperties {
        minRowHeight?: Slides.Schema.Dimension;
      }
      interface TextContent {
        lists?: object;
        textElements?: Slides.Schema.TextElement[];
      }
      interface TextElement {
        autoText?: Slides.Schema.AutoText;
        endIndex?: number;
        paragraphMarker?: Slides.Schema.ParagraphMarker;
        startIndex?: number;
        textRun?: Slides.Schema.TextRun;
      }
      interface TextRun {
        content?: string;
        style?: Slides.Schema.TextStyle;
      }
      interface TextStyle {
        backgroundColor?: Slides.Schema.OptionalColor;
        baselineOffset?: string;
        bold?: boolean;
        fontFamily?: string;
        fontSize?: Slides.Schema.Dimension;
        foregroundColor?: Slides.Schema.OptionalColor;
        italic?: boolean;
        link?: Slides.Schema.Link;
        smallCaps?: boolean;
        strikethrough?: boolean;
        underline?: boolean;
        weightedFontFamily?: Slides.Schema.WeightedFontFamily;
      }
      interface ThemeColorPair {
        color?: Slides.Schema.RgbColor;
        type?: string;
      }
      interface Thumbnail {
        contentUrl?: string;
        height?: number;
        width?: number;
      }
      interface UngroupObjectsRequest {
        objectIds?: string[];
      }
      interface UnmergeTableCellsRequest {
        objectId?: string;
        tableRange?: Slides.Schema.TableRange;
      }
      interface UpdateImagePropertiesRequest {
        fields?: string;
        imageProperties?: Slides.Schema.ImageProperties;
        objectId?: string;
      }
      interface UpdateLineCategoryRequest {
        lineCategory?: string;
        objectId?: string;
      }
      interface UpdateLinePropertiesRequest {
        fields?: string;
        lineProperties?: Slides.Schema.LineProperties;
        objectId?: string;
      }
      interface UpdatePageElementAltTextRequest {
        description?: string;
        objectId?: string;
        title?: string;
      }
      interface UpdatePageElementTransformRequest {
        applyMode?: string;
        objectId?: string;
        transform?: Slides.Schema.AffineTransform;
      }
      interface UpdatePageElementsZOrderRequest {
        operation?: string;
        pageElementObjectIds?: string[];
      }
      interface UpdatePagePropertiesRequest {
        fields?: string;
        objectId?: string;
        pageProperties?: Slides.Schema.PageProperties;
      }
      interface UpdateParagraphStyleRequest {
        cellLocation?: Slides.Schema.TableCellLocation;
        fields?: string;
        objectId?: string;
        style?: Slides.Schema.ParagraphStyle;
        textRange?: Slides.Schema.Range;
      }
      interface UpdateShapePropertiesRequest {
        fields?: string;
        objectId?: string;
        shapeProperties?: Slides.Schema.ShapeProperties;
      }
      interface UpdateSlidesPositionRequest {
        insertionIndex?: number;
        slideObjectIds?: string[];
      }
      interface UpdateTableBorderPropertiesRequest {
        borderPosition?: string;
        fields?: string;
        objectId?: string;
        tableBorderProperties?: Slides.Schema.TableBorderProperties;
        tableRange?: Slides.Schema.TableRange;
      }
      interface UpdateTableCellPropertiesRequest {
        fields?: string;
        objectId?: string;
        tableCellProperties?: Slides.Schema.TableCellProperties;
        tableRange?: Slides.Schema.TableRange;
      }
      interface UpdateTableColumnPropertiesRequest {
        columnIndices?: number[];
        fields?: string;
        objectId?: string;
        tableColumnProperties?: Slides.Schema.TableColumnProperties;
      }
      interface UpdateTableRowPropertiesRequest {
        fields?: string;
        objectId?: string;
        rowIndices?: number[];
        tableRowProperties?: Slides.Schema.TableRowProperties;
      }
      interface UpdateTextStyleRequest {
        cellLocation?: Slides.Schema.TableCellLocation;
        fields?: string;
        objectId?: string;
        style?: Slides.Schema.TextStyle;
        textRange?: Slides.Schema.Range;
      }
      interface UpdateVideoPropertiesRequest {
        fields?: string;
        objectId?: string;
        videoProperties?: Slides.Schema.VideoProperties;
      }
      interface Video {
        id?: string;
        source?: string;
        url?: string;
        videoProperties?: Slides.Schema.VideoProperties;
      }
      interface VideoProperties {
        autoPlay?: boolean;
        end?: number;
        mute?: boolean;
        outline?: Slides.Schema.Outline;
        start?: number;
      }
      interface WeightedFontFamily {
        fontFamily?: string;
        weight?: number;
      }
      interface WordArt {
        renderedText?: string;
      }
      interface WriteControl {
        requiredRevisionId?: string;
      }
    }
  }
  interface Slides {
    Presentations?: Slides.Collection.PresentationsCollection;
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
