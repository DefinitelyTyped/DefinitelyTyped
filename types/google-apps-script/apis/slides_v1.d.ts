// Type definitions for Google Apps Script 2019-03-25
// Project: https://developers.google.com/apps-script/
// Generator: https://github.com/grant/google-apps-script-dts
// Definitions by: grant <https://github.com/grant/>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare namespace GoogleAppsScript {
  namespace Slides {
    namespace Collection {
      namespace Presentations {
        export interface PagesCollection {
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
      export interface PresentationsCollection {
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
      export interface AffineTransform {
        scaleX?: number;
        scaleY?: number;
        shearX?: number;
        shearY?: number;
        translateX?: number;
        translateY?: number;
        unit?: string;
      }
      export interface AutoText {
        content?: string;
        style?: Slides.Schema.TextStyle;
        type?: string;
      }
      export interface BatchUpdatePresentationRequest {
        requests?: Slides.Schema.Request[];
        writeControl?: Slides.Schema.WriteControl;
      }
      export interface BatchUpdatePresentationResponse {
        presentationId?: string;
        replies?: Slides.Schema.Response[];
        writeControl?: Slides.Schema.WriteControl;
      }
      export interface Bullet {
        bulletStyle?: Slides.Schema.TextStyle;
        glyph?: string;
        listId?: string;
        nestingLevel?: number;
      }
      export interface ColorScheme {
        colors?: Slides.Schema.ThemeColorPair[];
      }
      export interface ColorStop {
        alpha?: number;
        color?: Slides.Schema.OpaqueColor;
        position?: number;
      }
      export interface CreateImageRequest {
        elementProperties?: Slides.Schema.PageElementProperties;
        objectId?: string;
        url?: string;
      }
      export interface CreateImageResponse {
        objectId?: string;
      }
      export interface CreateLineRequest {
        category?: string;
        elementProperties?: Slides.Schema.PageElementProperties;
        lineCategory?: string;
        objectId?: string;
      }
      export interface CreateLineResponse {
        objectId?: string;
      }
      export interface CreateParagraphBulletsRequest {
        bulletPreset?: string;
        cellLocation?: Slides.Schema.TableCellLocation;
        objectId?: string;
        textRange?: Slides.Schema.Range;
      }
      export interface CreateShapeRequest {
        elementProperties?: Slides.Schema.PageElementProperties;
        objectId?: string;
        shapeType?: string;
      }
      export interface CreateShapeResponse {
        objectId?: string;
      }
      export interface CreateSheetsChartRequest {
        chartId?: number;
        elementProperties?: Slides.Schema.PageElementProperties;
        linkingMode?: string;
        objectId?: string;
        spreadsheetId?: string;
      }
      export interface CreateSheetsChartResponse {
        objectId?: string;
      }
      export interface CreateSlideRequest {
        insertionIndex?: number;
        objectId?: string;
        placeholderIdMappings?: Slides.Schema.LayoutPlaceholderIdMapping[];
        slideLayoutReference?: Slides.Schema.LayoutReference;
      }
      export interface CreateSlideResponse {
        objectId?: string;
      }
      export interface CreateTableRequest {
        columns?: number;
        elementProperties?: Slides.Schema.PageElementProperties;
        objectId?: string;
        rows?: number;
      }
      export interface CreateTableResponse {
        objectId?: string;
      }
      export interface CreateVideoRequest {
        elementProperties?: Slides.Schema.PageElementProperties;
        id?: string;
        objectId?: string;
        source?: string;
      }
      export interface CreateVideoResponse {
        objectId?: string;
      }
      export interface CropProperties {
        angle?: number;
        bottomOffset?: number;
        leftOffset?: number;
        rightOffset?: number;
        topOffset?: number;
      }
      export interface DeleteObjectRequest {
        objectId?: string;
      }
      export interface DeleteParagraphBulletsRequest {
        cellLocation?: Slides.Schema.TableCellLocation;
        objectId?: string;
        textRange?: Slides.Schema.Range;
      }
      export interface DeleteTableColumnRequest {
        cellLocation?: Slides.Schema.TableCellLocation;
        tableObjectId?: string;
      }
      export interface DeleteTableRowRequest {
        cellLocation?: Slides.Schema.TableCellLocation;
        tableObjectId?: string;
      }
      export interface DeleteTextRequest {
        cellLocation?: Slides.Schema.TableCellLocation;
        objectId?: string;
        textRange?: Slides.Schema.Range;
      }
      export interface Dimension {
        magnitude?: number;
        unit?: string;
      }
      export interface DuplicateObjectRequest {
        objectId?: string;
        objectIds?: object;
      }
      export interface DuplicateObjectResponse {
        objectId?: string;
      }
      export interface Group {
        children?: Slides.Schema.PageElement[];
      }
      export interface GroupObjectsRequest {
        childrenObjectIds?: string[];
        groupObjectId?: string;
      }
      export interface GroupObjectsResponse {
        objectId?: string;
      }
      export interface Image {
        contentUrl?: string;
        imageProperties?: Slides.Schema.ImageProperties;
        sourceUrl?: string;
      }
      export interface ImageProperties {
        brightness?: number;
        contrast?: number;
        cropProperties?: Slides.Schema.CropProperties;
        link?: Slides.Schema.Link;
        outline?: Slides.Schema.Outline;
        recolor?: Slides.Schema.Recolor;
        shadow?: Slides.Schema.Shadow;
        transparency?: number;
      }
      export interface InsertTableColumnsRequest {
        cellLocation?: Slides.Schema.TableCellLocation;
        insertRight?: boolean;
        number?: number;
        tableObjectId?: string;
      }
      export interface InsertTableRowsRequest {
        cellLocation?: Slides.Schema.TableCellLocation;
        insertBelow?: boolean;
        number?: number;
        tableObjectId?: string;
      }
      export interface InsertTextRequest {
        cellLocation?: Slides.Schema.TableCellLocation;
        insertionIndex?: number;
        objectId?: string;
        text?: string;
      }
      export interface LayoutPlaceholderIdMapping {
        layoutPlaceholder?: Slides.Schema.Placeholder;
        layoutPlaceholderObjectId?: string;
        objectId?: string;
      }
      export interface LayoutProperties {
        displayName?: string;
        masterObjectId?: string;
        name?: string;
      }
      export interface LayoutReference {
        layoutId?: string;
        predefinedLayout?: string;
      }
      export interface Line {
        lineCategory?: string;
        lineProperties?: Slides.Schema.LineProperties;
        lineType?: string;
      }
      export interface LineConnection {
        connectedObjectId?: string;
        connectionSiteIndex?: number;
      }
      export interface LineFill {
        solidFill?: Slides.Schema.SolidFill;
      }
      export interface LineProperties {
        dashStyle?: string;
        endArrow?: string;
        endConnection?: Slides.Schema.LineConnection;
        lineFill?: Slides.Schema.LineFill;
        link?: Slides.Schema.Link;
        startArrow?: string;
        startConnection?: Slides.Schema.LineConnection;
        weight?: Slides.Schema.Dimension;
      }
      export interface Link {
        pageObjectId?: string;
        relativeLink?: string;
        slideIndex?: number;
        url?: string;
      }
      export interface List {
        listId?: string;
        nestingLevel?: object;
      }
      export interface MasterProperties {
        displayName?: string;
      }
      export interface MergeTableCellsRequest {
        objectId?: string;
        tableRange?: Slides.Schema.TableRange;
      }
      export interface NestingLevel {
        bulletStyle?: Slides.Schema.TextStyle;
      }
      export interface NotesProperties {
        speakerNotesObjectId?: string;
      }
      export interface OpaqueColor {
        rgbColor?: Slides.Schema.RgbColor;
        themeColor?: string;
      }
      export interface OptionalColor {
        opaqueColor?: Slides.Schema.OpaqueColor;
      }
      export interface Outline {
        dashStyle?: string;
        outlineFill?: Slides.Schema.OutlineFill;
        propertyState?: string;
        weight?: Slides.Schema.Dimension;
      }
      export interface OutlineFill {
        solidFill?: Slides.Schema.SolidFill;
      }
      export interface Page {
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
      export interface PageBackgroundFill {
        propertyState?: string;
        solidFill?: Slides.Schema.SolidFill;
        stretchedPictureFill?: Slides.Schema.StretchedPictureFill;
      }
      export interface PageElement {
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
      export interface PageElementProperties {
        pageObjectId?: string;
        size?: Slides.Schema.Size;
        transform?: Slides.Schema.AffineTransform;
      }
      export interface PageProperties {
        colorScheme?: Slides.Schema.ColorScheme;
        pageBackgroundFill?: Slides.Schema.PageBackgroundFill;
      }
      export interface ParagraphMarker {
        bullet?: Slides.Schema.Bullet;
        style?: Slides.Schema.ParagraphStyle;
      }
      export interface ParagraphStyle {
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
      export interface Placeholder {
        index?: number;
        parentObjectId?: string;
        type?: string;
      }
      export interface Presentation {
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
      export interface Range {
        endIndex?: number;
        startIndex?: number;
        type?: string;
      }
      export interface Recolor {
        name?: string;
        recolorStops?: Slides.Schema.ColorStop[];
      }
      export interface RefreshSheetsChartRequest {
        objectId?: string;
      }
      export interface ReplaceAllShapesWithImageRequest {
        containsText?: Slides.Schema.SubstringMatchCriteria;
        imageReplaceMethod?: string;
        imageUrl?: string;
        pageObjectIds?: string[];
        replaceMethod?: string;
      }
      export interface ReplaceAllShapesWithImageResponse {
        occurrencesChanged?: number;
      }
      export interface ReplaceAllShapesWithSheetsChartRequest {
        chartId?: number;
        containsText?: Slides.Schema.SubstringMatchCriteria;
        linkingMode?: string;
        pageObjectIds?: string[];
        spreadsheetId?: string;
      }
      export interface ReplaceAllShapesWithSheetsChartResponse {
        occurrencesChanged?: number;
      }
      export interface ReplaceAllTextRequest {
        containsText?: Slides.Schema.SubstringMatchCriteria;
        pageObjectIds?: string[];
        replaceText?: string;
      }
      export interface ReplaceAllTextResponse {
        occurrencesChanged?: number;
      }
      export interface ReplaceImageRequest {
        imageObjectId?: string;
        imageReplaceMethod?: string;
        url?: string;
      }
      export interface Request {
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
      export interface RerouteLineRequest {
        objectId?: string;
      }
      export interface Response {
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
      export interface RgbColor {
        blue?: number;
        green?: number;
        red?: number;
      }
      export interface Shadow {
        alignment?: string;
        alpha?: number;
        blurRadius?: Slides.Schema.Dimension;
        color?: Slides.Schema.OpaqueColor;
        propertyState?: string;
        rotateWithShape?: boolean;
        transform?: Slides.Schema.AffineTransform;
        type?: string;
      }
      export interface Shape {
        placeholder?: Slides.Schema.Placeholder;
        shapeProperties?: Slides.Schema.ShapeProperties;
        shapeType?: string;
        text?: Slides.Schema.TextContent;
      }
      export interface ShapeBackgroundFill {
        propertyState?: string;
        solidFill?: Slides.Schema.SolidFill;
      }
      export interface ShapeProperties {
        contentAlignment?: string;
        link?: Slides.Schema.Link;
        outline?: Slides.Schema.Outline;
        shadow?: Slides.Schema.Shadow;
        shapeBackgroundFill?: Slides.Schema.ShapeBackgroundFill;
      }
      export interface SheetsChart {
        chartId?: number;
        contentUrl?: string;
        sheetsChartProperties?: Slides.Schema.SheetsChartProperties;
        spreadsheetId?: string;
      }
      export interface SheetsChartProperties {
        chartImageProperties?: Slides.Schema.ImageProperties;
      }
      export interface Size {
        height?: Slides.Schema.Dimension;
        width?: Slides.Schema.Dimension;
      }
      export interface SlideProperties {
        layoutObjectId?: string;
        masterObjectId?: string;
        notesPage?: Slides.Schema.Page;
      }
      export interface SolidFill {
        alpha?: number;
        color?: Slides.Schema.OpaqueColor;
      }
      export interface StretchedPictureFill {
        contentUrl?: string;
        size?: Slides.Schema.Size;
      }
      export interface SubstringMatchCriteria {
        matchCase?: boolean;
        text?: string;
      }
      export interface Table {
        columns?: number;
        horizontalBorderRows?: Slides.Schema.TableBorderRow[];
        rows?: number;
        tableColumns?: Slides.Schema.TableColumnProperties[];
        tableRows?: Slides.Schema.TableRow[];
        verticalBorderRows?: Slides.Schema.TableBorderRow[];
      }
      export interface TableBorderCell {
        location?: Slides.Schema.TableCellLocation;
        tableBorderProperties?: Slides.Schema.TableBorderProperties;
      }
      export interface TableBorderFill {
        solidFill?: Slides.Schema.SolidFill;
      }
      export interface TableBorderProperties {
        dashStyle?: string;
        tableBorderFill?: Slides.Schema.TableBorderFill;
        weight?: Slides.Schema.Dimension;
      }
      export interface TableBorderRow {
        tableBorderCells?: Slides.Schema.TableBorderCell[];
      }
      export interface TableCell {
        columnSpan?: number;
        location?: Slides.Schema.TableCellLocation;
        rowSpan?: number;
        tableCellProperties?: Slides.Schema.TableCellProperties;
        text?: Slides.Schema.TextContent;
      }
      export interface TableCellBackgroundFill {
        propertyState?: string;
        solidFill?: Slides.Schema.SolidFill;
      }
      export interface TableCellLocation {
        columnIndex?: number;
        rowIndex?: number;
      }
      export interface TableCellProperties {
        contentAlignment?: string;
        tableCellBackgroundFill?: Slides.Schema.TableCellBackgroundFill;
      }
      export interface TableColumnProperties {
        columnWidth?: Slides.Schema.Dimension;
      }
      export interface TableRange {
        columnSpan?: number;
        location?: Slides.Schema.TableCellLocation;
        rowSpan?: number;
      }
      export interface TableRow {
        rowHeight?: Slides.Schema.Dimension;
        tableCells?: Slides.Schema.TableCell[];
        tableRowProperties?: Slides.Schema.TableRowProperties;
      }
      export interface TableRowProperties {
        minRowHeight?: Slides.Schema.Dimension;
      }
      export interface TextContent {
        lists?: object;
        textElements?: Slides.Schema.TextElement[];
      }
      export interface TextElement {
        autoText?: Slides.Schema.AutoText;
        endIndex?: number;
        paragraphMarker?: Slides.Schema.ParagraphMarker;
        startIndex?: number;
        textRun?: Slides.Schema.TextRun;
      }
      export interface TextRun {
        content?: string;
        style?: Slides.Schema.TextStyle;
      }
      export interface TextStyle {
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
      export interface ThemeColorPair {
        color?: Slides.Schema.RgbColor;
        type?: string;
      }
      export interface Thumbnail {
        contentUrl?: string;
        height?: number;
        width?: number;
      }
      export interface UngroupObjectsRequest {
        objectIds?: string[];
      }
      export interface UnmergeTableCellsRequest {
        objectId?: string;
        tableRange?: Slides.Schema.TableRange;
      }
      export interface UpdateImagePropertiesRequest {
        fields?: string;
        imageProperties?: Slides.Schema.ImageProperties;
        objectId?: string;
      }
      export interface UpdateLineCategoryRequest {
        lineCategory?: string;
        objectId?: string;
      }
      export interface UpdateLinePropertiesRequest {
        fields?: string;
        lineProperties?: Slides.Schema.LineProperties;
        objectId?: string;
      }
      export interface UpdatePageElementAltTextRequest {
        description?: string;
        objectId?: string;
        title?: string;
      }
      export interface UpdatePageElementTransformRequest {
        applyMode?: string;
        objectId?: string;
        transform?: Slides.Schema.AffineTransform;
      }
      export interface UpdatePageElementsZOrderRequest {
        operation?: string;
        pageElementObjectIds?: string[];
      }
      export interface UpdatePagePropertiesRequest {
        fields?: string;
        objectId?: string;
        pageProperties?: Slides.Schema.PageProperties;
      }
      export interface UpdateParagraphStyleRequest {
        cellLocation?: Slides.Schema.TableCellLocation;
        fields?: string;
        objectId?: string;
        style?: Slides.Schema.ParagraphStyle;
        textRange?: Slides.Schema.Range;
      }
      export interface UpdateShapePropertiesRequest {
        fields?: string;
        objectId?: string;
        shapeProperties?: Slides.Schema.ShapeProperties;
      }
      export interface UpdateSlidesPositionRequest {
        insertionIndex?: number;
        slideObjectIds?: string[];
      }
      export interface UpdateTableBorderPropertiesRequest {
        borderPosition?: string;
        fields?: string;
        objectId?: string;
        tableBorderProperties?: Slides.Schema.TableBorderProperties;
        tableRange?: Slides.Schema.TableRange;
      }
      export interface UpdateTableCellPropertiesRequest {
        fields?: string;
        objectId?: string;
        tableCellProperties?: Slides.Schema.TableCellProperties;
        tableRange?: Slides.Schema.TableRange;
      }
      export interface UpdateTableColumnPropertiesRequest {
        columnIndices?: number[];
        fields?: string;
        objectId?: string;
        tableColumnProperties?: Slides.Schema.TableColumnProperties;
      }
      export interface UpdateTableRowPropertiesRequest {
        fields?: string;
        objectId?: string;
        rowIndices?: number[];
        tableRowProperties?: Slides.Schema.TableRowProperties;
      }
      export interface UpdateTextStyleRequest {
        cellLocation?: Slides.Schema.TableCellLocation;
        fields?: string;
        objectId?: string;
        style?: Slides.Schema.TextStyle;
        textRange?: Slides.Schema.Range;
      }
      export interface UpdateVideoPropertiesRequest {
        fields?: string;
        objectId?: string;
        videoProperties?: Slides.Schema.VideoProperties;
      }
      export interface Video {
        id?: string;
        source?: string;
        url?: string;
        videoProperties?: Slides.Schema.VideoProperties;
      }
      export interface VideoProperties {
        autoPlay?: boolean;
        end?: number;
        mute?: boolean;
        outline?: Slides.Schema.Outline;
        start?: number;
      }
      export interface WeightedFontFamily {
        fontFamily?: string;
        weight?: number;
      }
      export interface WordArt {
        renderedText?: string;
      }
      export interface WriteControl {
        requiredRevisionId?: string;
      }
    }
  }
  export interface Slides {
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
