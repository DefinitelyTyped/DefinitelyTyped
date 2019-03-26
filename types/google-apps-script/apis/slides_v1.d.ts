// Type definitions for Google Apps Script 2019-03-25
// Project: https://developers.google.com/apps-script/
// Generator: https://github.com/grant/google-apps-script-dts
// Definitions by: grant <https://github.com/grant/>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare namespace GoogleAppsScript {
  namespace Slides_v1 {
    namespace Collection {
      namespace Presentations {
        export interface PagesCollection {
          // Gets the latest version of the specified page in the presentation.
          get(presentationId: string, pageObjectId: string): Slides_v1.Schema.Page;
          // Generates a thumbnail of the latest version of the specified page in the
          // presentation and returns a URL to the thumbnail image.
          // This request counts as an [expensive read request](/slides/limits) for
          // quota purposes.
          getThumbnail(presentationId: string, pageObjectId: string): Slides_v1.Schema.Thumbnail;
          // Generates a thumbnail of the latest version of the specified page in the
          // presentation and returns a URL to the thumbnail image.
          // This request counts as an [expensive read request](/slides/limits) for
          // quota purposes.
          getThumbnail(presentationId: string, pageObjectId: string, optionalArgs: object): Slides_v1.Schema.Thumbnail;
        }
      }
      export interface PresentationsCollection {
        Pages?: Slides_v1.Collection.Presentations.PagesCollection;
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
        batchUpdate(resource: Schema.BatchUpdatePresentationRequest, presentationId: string): Slides_v1.Schema.BatchUpdatePresentationResponse;
        // Creates a blank presentation using the title given in the request. If a
        // `presentationId` is provided, it is used as the ID of the new presentation.
        // Otherwise, a new ID is generated. Other fields in the request, including
        // any provided content, are ignored.
        // Returns the created presentation.
        create(resource: Schema.Presentation): Slides_v1.Schema.Presentation;
        // Gets the latest version of the specified presentation.
        get(presentationId: string): Slides_v1.Schema.Presentation;
      }
    }
    namespace Schema {
      export interface AffineTransform {
        scaleX?: Number;
        scaleY?: Number;
        shearX?: Number;
        shearY?: Number;
        translateX?: Number;
        translateY?: Number;
        unit?: string;
      }
      export interface AutoText {
        content?: string;
        style?: Slides_v1.Schema.TextStyle;
        type?: string;
      }
      export interface BatchUpdatePresentationRequest {
        requests?: Slides_v1.Schema.Request[];
        writeControl?: Slides_v1.Schema.WriteControl;
      }
      export interface BatchUpdatePresentationResponse {
        presentationId?: string;
        replies?: Slides_v1.Schema.Response[];
        writeControl?: Slides_v1.Schema.WriteControl;
      }
      export interface Bullet {
        bulletStyle?: Slides_v1.Schema.TextStyle;
        glyph?: string;
        listId?: string;
        nestingLevel?: number;
      }
      export interface ColorScheme {
        colors?: Slides_v1.Schema.ThemeColorPair[];
      }
      export interface ColorStop {
        alpha?: Number;
        color?: Slides_v1.Schema.OpaqueColor;
        position?: Number;
      }
      export interface CreateImageRequest {
        elementProperties?: Slides_v1.Schema.PageElementProperties;
        objectId?: string;
        url?: string;
      }
      export interface CreateImageResponse {
        objectId?: string;
      }
      export interface CreateLineRequest {
        category?: string;
        elementProperties?: Slides_v1.Schema.PageElementProperties;
        lineCategory?: string;
        objectId?: string;
      }
      export interface CreateLineResponse {
        objectId?: string;
      }
      export interface CreateParagraphBulletsRequest {
        bulletPreset?: string;
        cellLocation?: Slides_v1.Schema.TableCellLocation;
        objectId?: string;
        textRange?: Slides_v1.Schema.Range;
      }
      export interface CreateShapeRequest {
        elementProperties?: Slides_v1.Schema.PageElementProperties;
        objectId?: string;
        shapeType?: string;
      }
      export interface CreateShapeResponse {
        objectId?: string;
      }
      export interface CreateSheetsChartRequest {
        chartId?: number;
        elementProperties?: Slides_v1.Schema.PageElementProperties;
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
        placeholderIdMappings?: Slides_v1.Schema.LayoutPlaceholderIdMapping[];
        slideLayoutReference?: Slides_v1.Schema.LayoutReference;
      }
      export interface CreateSlideResponse {
        objectId?: string;
      }
      export interface CreateTableRequest {
        columns?: number;
        elementProperties?: Slides_v1.Schema.PageElementProperties;
        objectId?: string;
        rows?: number;
      }
      export interface CreateTableResponse {
        objectId?: string;
      }
      export interface CreateVideoRequest {
        elementProperties?: Slides_v1.Schema.PageElementProperties;
        id?: string;
        objectId?: string;
        source?: string;
      }
      export interface CreateVideoResponse {
        objectId?: string;
      }
      export interface CropProperties {
        angle?: Number;
        bottomOffset?: Number;
        leftOffset?: Number;
        rightOffset?: Number;
        topOffset?: Number;
      }
      export interface DeleteObjectRequest {
        objectId?: string;
      }
      export interface DeleteParagraphBulletsRequest {
        cellLocation?: Slides_v1.Schema.TableCellLocation;
        objectId?: string;
        textRange?: Slides_v1.Schema.Range;
      }
      export interface DeleteTableColumnRequest {
        cellLocation?: Slides_v1.Schema.TableCellLocation;
        tableObjectId?: string;
      }
      export interface DeleteTableRowRequest {
        cellLocation?: Slides_v1.Schema.TableCellLocation;
        tableObjectId?: string;
      }
      export interface DeleteTextRequest {
        cellLocation?: Slides_v1.Schema.TableCellLocation;
        objectId?: string;
        textRange?: Slides_v1.Schema.Range;
      }
      export interface Dimension {
        magnitude?: Number;
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
        children?: Slides_v1.Schema.PageElement[];
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
        imageProperties?: Slides_v1.Schema.ImageProperties;
        sourceUrl?: string;
      }
      export interface ImageProperties {
        brightness?: Number;
        contrast?: Number;
        cropProperties?: Slides_v1.Schema.CropProperties;
        link?: Slides_v1.Schema.Link;
        outline?: Slides_v1.Schema.Outline;
        recolor?: Slides_v1.Schema.Recolor;
        shadow?: Slides_v1.Schema.Shadow;
        transparency?: Number;
      }
      export interface InsertTableColumnsRequest {
        cellLocation?: Slides_v1.Schema.TableCellLocation;
        insertRight?: boolean;
        number?: number;
        tableObjectId?: string;
      }
      export interface InsertTableRowsRequest {
        cellLocation?: Slides_v1.Schema.TableCellLocation;
        insertBelow?: boolean;
        number?: number;
        tableObjectId?: string;
      }
      export interface InsertTextRequest {
        cellLocation?: Slides_v1.Schema.TableCellLocation;
        insertionIndex?: number;
        objectId?: string;
        text?: string;
      }
      export interface LayoutPlaceholderIdMapping {
        layoutPlaceholder?: Slides_v1.Schema.Placeholder;
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
        lineProperties?: Slides_v1.Schema.LineProperties;
        lineType?: string;
      }
      export interface LineConnection {
        connectedObjectId?: string;
        connectionSiteIndex?: number;
      }
      export interface LineFill {
        solidFill?: Slides_v1.Schema.SolidFill;
      }
      export interface LineProperties {
        dashStyle?: string;
        endArrow?: string;
        endConnection?: Slides_v1.Schema.LineConnection;
        lineFill?: Slides_v1.Schema.LineFill;
        link?: Slides_v1.Schema.Link;
        startArrow?: string;
        startConnection?: Slides_v1.Schema.LineConnection;
        weight?: Slides_v1.Schema.Dimension;
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
        tableRange?: Slides_v1.Schema.TableRange;
      }
      export interface NestingLevel {
        bulletStyle?: Slides_v1.Schema.TextStyle;
      }
      export interface NotesProperties {
        speakerNotesObjectId?: string;
      }
      export interface OpaqueColor {
        rgbColor?: Slides_v1.Schema.RgbColor;
        themeColor?: string;
      }
      export interface OptionalColor {
        opaqueColor?: Slides_v1.Schema.OpaqueColor;
      }
      export interface Outline {
        dashStyle?: string;
        outlineFill?: Slides_v1.Schema.OutlineFill;
        propertyState?: string;
        weight?: Slides_v1.Schema.Dimension;
      }
      export interface OutlineFill {
        solidFill?: Slides_v1.Schema.SolidFill;
      }
      export interface Page {
        layoutProperties?: Slides_v1.Schema.LayoutProperties;
        masterProperties?: Slides_v1.Schema.MasterProperties;
        notesProperties?: Slides_v1.Schema.NotesProperties;
        objectId?: string;
        pageElements?: Slides_v1.Schema.PageElement[];
        pageProperties?: Slides_v1.Schema.PageProperties;
        pageType?: string;
        revisionId?: string;
        slideProperties?: Slides_v1.Schema.SlideProperties;
      }
      export interface PageBackgroundFill {
        propertyState?: string;
        solidFill?: Slides_v1.Schema.SolidFill;
        stretchedPictureFill?: Slides_v1.Schema.StretchedPictureFill;
      }
      export interface PageElement {
        description?: string;
        elementGroup?: Slides_v1.Schema.Group;
        image?: Slides_v1.Schema.Image;
        line?: Slides_v1.Schema.Line;
        objectId?: string;
        shape?: Slides_v1.Schema.Shape;
        sheetsChart?: Slides_v1.Schema.SheetsChart;
        size?: Slides_v1.Schema.Size;
        table?: Slides_v1.Schema.Table;
        title?: string;
        transform?: Slides_v1.Schema.AffineTransform;
        video?: Slides_v1.Schema.Video;
        wordArt?: Slides_v1.Schema.WordArt;
      }
      export interface PageElementProperties {
        pageObjectId?: string;
        size?: Slides_v1.Schema.Size;
        transform?: Slides_v1.Schema.AffineTransform;
      }
      export interface PageProperties {
        colorScheme?: Slides_v1.Schema.ColorScheme;
        pageBackgroundFill?: Slides_v1.Schema.PageBackgroundFill;
      }
      export interface ParagraphMarker {
        bullet?: Slides_v1.Schema.Bullet;
        style?: Slides_v1.Schema.ParagraphStyle;
      }
      export interface ParagraphStyle {
        alignment?: string;
        direction?: string;
        indentEnd?: Slides_v1.Schema.Dimension;
        indentFirstLine?: Slides_v1.Schema.Dimension;
        indentStart?: Slides_v1.Schema.Dimension;
        lineSpacing?: Number;
        spaceAbove?: Slides_v1.Schema.Dimension;
        spaceBelow?: Slides_v1.Schema.Dimension;
        spacingMode?: string;
      }
      export interface Placeholder {
        index?: number;
        parentObjectId?: string;
        type?: string;
      }
      export interface Presentation {
        layouts?: Slides_v1.Schema.Page[];
        locale?: string;
        masters?: Slides_v1.Schema.Page[];
        notesMaster?: Slides_v1.Schema.Page;
        pageSize?: Slides_v1.Schema.Size;
        presentationId?: string;
        revisionId?: string;
        slides?: Slides_v1.Schema.Page[];
        title?: string;
      }
      export interface Range {
        endIndex?: number;
        startIndex?: number;
        type?: string;
      }
      export interface Recolor {
        name?: string;
        recolorStops?: Slides_v1.Schema.ColorStop[];
      }
      export interface RefreshSheetsChartRequest {
        objectId?: string;
      }
      export interface ReplaceAllShapesWithImageRequest {
        containsText?: Slides_v1.Schema.SubstringMatchCriteria;
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
        containsText?: Slides_v1.Schema.SubstringMatchCriteria;
        linkingMode?: string;
        pageObjectIds?: string[];
        spreadsheetId?: string;
      }
      export interface ReplaceAllShapesWithSheetsChartResponse {
        occurrencesChanged?: number;
      }
      export interface ReplaceAllTextRequest {
        containsText?: Slides_v1.Schema.SubstringMatchCriteria;
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
        createImage?: Slides_v1.Schema.CreateImageRequest;
        createLine?: Slides_v1.Schema.CreateLineRequest;
        createParagraphBullets?: Slides_v1.Schema.CreateParagraphBulletsRequest;
        createShape?: Slides_v1.Schema.CreateShapeRequest;
        createSheetsChart?: Slides_v1.Schema.CreateSheetsChartRequest;
        createSlide?: Slides_v1.Schema.CreateSlideRequest;
        createTable?: Slides_v1.Schema.CreateTableRequest;
        createVideo?: Slides_v1.Schema.CreateVideoRequest;
        deleteObject?: Slides_v1.Schema.DeleteObjectRequest;
        deleteParagraphBullets?: Slides_v1.Schema.DeleteParagraphBulletsRequest;
        deleteTableColumn?: Slides_v1.Schema.DeleteTableColumnRequest;
        deleteTableRow?: Slides_v1.Schema.DeleteTableRowRequest;
        deleteText?: Slides_v1.Schema.DeleteTextRequest;
        duplicateObject?: Slides_v1.Schema.DuplicateObjectRequest;
        groupObjects?: Slides_v1.Schema.GroupObjectsRequest;
        insertTableColumns?: Slides_v1.Schema.InsertTableColumnsRequest;
        insertTableRows?: Slides_v1.Schema.InsertTableRowsRequest;
        insertText?: Slides_v1.Schema.InsertTextRequest;
        mergeTableCells?: Slides_v1.Schema.MergeTableCellsRequest;
        refreshSheetsChart?: Slides_v1.Schema.RefreshSheetsChartRequest;
        replaceAllShapesWithImage?: Slides_v1.Schema.ReplaceAllShapesWithImageRequest;
        replaceAllShapesWithSheetsChart?: Slides_v1.Schema.ReplaceAllShapesWithSheetsChartRequest;
        replaceAllText?: Slides_v1.Schema.ReplaceAllTextRequest;
        replaceImage?: Slides_v1.Schema.ReplaceImageRequest;
        rerouteLine?: Slides_v1.Schema.RerouteLineRequest;
        ungroupObjects?: Slides_v1.Schema.UngroupObjectsRequest;
        unmergeTableCells?: Slides_v1.Schema.UnmergeTableCellsRequest;
        updateImageProperties?: Slides_v1.Schema.UpdateImagePropertiesRequest;
        updateLineCategory?: Slides_v1.Schema.UpdateLineCategoryRequest;
        updateLineProperties?: Slides_v1.Schema.UpdateLinePropertiesRequest;
        updatePageElementAltText?: Slides_v1.Schema.UpdatePageElementAltTextRequest;
        updatePageElementTransform?: Slides_v1.Schema.UpdatePageElementTransformRequest;
        updatePageElementsZOrder?: Slides_v1.Schema.UpdatePageElementsZOrderRequest;
        updatePageProperties?: Slides_v1.Schema.UpdatePagePropertiesRequest;
        updateParagraphStyle?: Slides_v1.Schema.UpdateParagraphStyleRequest;
        updateShapeProperties?: Slides_v1.Schema.UpdateShapePropertiesRequest;
        updateSlidesPosition?: Slides_v1.Schema.UpdateSlidesPositionRequest;
        updateTableBorderProperties?: Slides_v1.Schema.UpdateTableBorderPropertiesRequest;
        updateTableCellProperties?: Slides_v1.Schema.UpdateTableCellPropertiesRequest;
        updateTableColumnProperties?: Slides_v1.Schema.UpdateTableColumnPropertiesRequest;
        updateTableRowProperties?: Slides_v1.Schema.UpdateTableRowPropertiesRequest;
        updateTextStyle?: Slides_v1.Schema.UpdateTextStyleRequest;
        updateVideoProperties?: Slides_v1.Schema.UpdateVideoPropertiesRequest;
      }
      export interface RerouteLineRequest {
        objectId?: string;
      }
      export interface Response {
        createImage?: Slides_v1.Schema.CreateImageResponse;
        createLine?: Slides_v1.Schema.CreateLineResponse;
        createShape?: Slides_v1.Schema.CreateShapeResponse;
        createSheetsChart?: Slides_v1.Schema.CreateSheetsChartResponse;
        createSlide?: Slides_v1.Schema.CreateSlideResponse;
        createTable?: Slides_v1.Schema.CreateTableResponse;
        createVideo?: Slides_v1.Schema.CreateVideoResponse;
        duplicateObject?: Slides_v1.Schema.DuplicateObjectResponse;
        groupObjects?: Slides_v1.Schema.GroupObjectsResponse;
        replaceAllShapesWithImage?: Slides_v1.Schema.ReplaceAllShapesWithImageResponse;
        replaceAllShapesWithSheetsChart?: Slides_v1.Schema.ReplaceAllShapesWithSheetsChartResponse;
        replaceAllText?: Slides_v1.Schema.ReplaceAllTextResponse;
      }
      export interface RgbColor {
        blue?: Number;
        green?: Number;
        red?: Number;
      }
      export interface Shadow {
        alignment?: string;
        alpha?: Number;
        blurRadius?: Slides_v1.Schema.Dimension;
        color?: Slides_v1.Schema.OpaqueColor;
        propertyState?: string;
        rotateWithShape?: boolean;
        transform?: Slides_v1.Schema.AffineTransform;
        type?: string;
      }
      export interface Shape {
        placeholder?: Slides_v1.Schema.Placeholder;
        shapeProperties?: Slides_v1.Schema.ShapeProperties;
        shapeType?: string;
        text?: Slides_v1.Schema.TextContent;
      }
      export interface ShapeBackgroundFill {
        propertyState?: string;
        solidFill?: Slides_v1.Schema.SolidFill;
      }
      export interface ShapeProperties {
        contentAlignment?: string;
        link?: Slides_v1.Schema.Link;
        outline?: Slides_v1.Schema.Outline;
        shadow?: Slides_v1.Schema.Shadow;
        shapeBackgroundFill?: Slides_v1.Schema.ShapeBackgroundFill;
      }
      export interface SheetsChart {
        chartId?: number;
        contentUrl?: string;
        sheetsChartProperties?: Slides_v1.Schema.SheetsChartProperties;
        spreadsheetId?: string;
      }
      export interface SheetsChartProperties {
        chartImageProperties?: Slides_v1.Schema.ImageProperties;
      }
      export interface Size {
        height?: Slides_v1.Schema.Dimension;
        width?: Slides_v1.Schema.Dimension;
      }
      export interface SlideProperties {
        layoutObjectId?: string;
        masterObjectId?: string;
        notesPage?: Slides_v1.Schema.Page;
      }
      export interface SolidFill {
        alpha?: Number;
        color?: Slides_v1.Schema.OpaqueColor;
      }
      export interface StretchedPictureFill {
        contentUrl?: string;
        size?: Slides_v1.Schema.Size;
      }
      export interface SubstringMatchCriteria {
        matchCase?: boolean;
        text?: string;
      }
      export interface Table {
        columns?: number;
        horizontalBorderRows?: Slides_v1.Schema.TableBorderRow[];
        rows?: number;
        tableColumns?: Slides_v1.Schema.TableColumnProperties[];
        tableRows?: Slides_v1.Schema.TableRow[];
        verticalBorderRows?: Slides_v1.Schema.TableBorderRow[];
      }
      export interface TableBorderCell {
        location?: Slides_v1.Schema.TableCellLocation;
        tableBorderProperties?: Slides_v1.Schema.TableBorderProperties;
      }
      export interface TableBorderFill {
        solidFill?: Slides_v1.Schema.SolidFill;
      }
      export interface TableBorderProperties {
        dashStyle?: string;
        tableBorderFill?: Slides_v1.Schema.TableBorderFill;
        weight?: Slides_v1.Schema.Dimension;
      }
      export interface TableBorderRow {
        tableBorderCells?: Slides_v1.Schema.TableBorderCell[];
      }
      export interface TableCell {
        columnSpan?: number;
        location?: Slides_v1.Schema.TableCellLocation;
        rowSpan?: number;
        tableCellProperties?: Slides_v1.Schema.TableCellProperties;
        text?: Slides_v1.Schema.TextContent;
      }
      export interface TableCellBackgroundFill {
        propertyState?: string;
        solidFill?: Slides_v1.Schema.SolidFill;
      }
      export interface TableCellLocation {
        columnIndex?: number;
        rowIndex?: number;
      }
      export interface TableCellProperties {
        contentAlignment?: string;
        tableCellBackgroundFill?: Slides_v1.Schema.TableCellBackgroundFill;
      }
      export interface TableColumnProperties {
        columnWidth?: Slides_v1.Schema.Dimension;
      }
      export interface TableRange {
        columnSpan?: number;
        location?: Slides_v1.Schema.TableCellLocation;
        rowSpan?: number;
      }
      export interface TableRow {
        rowHeight?: Slides_v1.Schema.Dimension;
        tableCells?: Slides_v1.Schema.TableCell[];
        tableRowProperties?: Slides_v1.Schema.TableRowProperties;
      }
      export interface TableRowProperties {
        minRowHeight?: Slides_v1.Schema.Dimension;
      }
      export interface TextContent {
        lists?: object;
        textElements?: Slides_v1.Schema.TextElement[];
      }
      export interface TextElement {
        autoText?: Slides_v1.Schema.AutoText;
        endIndex?: number;
        paragraphMarker?: Slides_v1.Schema.ParagraphMarker;
        startIndex?: number;
        textRun?: Slides_v1.Schema.TextRun;
      }
      export interface TextRun {
        content?: string;
        style?: Slides_v1.Schema.TextStyle;
      }
      export interface TextStyle {
        backgroundColor?: Slides_v1.Schema.OptionalColor;
        baselineOffset?: string;
        bold?: boolean;
        fontFamily?: string;
        fontSize?: Slides_v1.Schema.Dimension;
        foregroundColor?: Slides_v1.Schema.OptionalColor;
        italic?: boolean;
        link?: Slides_v1.Schema.Link;
        smallCaps?: boolean;
        strikethrough?: boolean;
        underline?: boolean;
        weightedFontFamily?: Slides_v1.Schema.WeightedFontFamily;
      }
      export interface ThemeColorPair {
        color?: Slides_v1.Schema.RgbColor;
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
        tableRange?: Slides_v1.Schema.TableRange;
      }
      export interface UpdateImagePropertiesRequest {
        fields?: string;
        imageProperties?: Slides_v1.Schema.ImageProperties;
        objectId?: string;
      }
      export interface UpdateLineCategoryRequest {
        lineCategory?: string;
        objectId?: string;
      }
      export interface UpdateLinePropertiesRequest {
        fields?: string;
        lineProperties?: Slides_v1.Schema.LineProperties;
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
        transform?: Slides_v1.Schema.AffineTransform;
      }
      export interface UpdatePageElementsZOrderRequest {
        operation?: string;
        pageElementObjectIds?: string[];
      }
      export interface UpdatePagePropertiesRequest {
        fields?: string;
        objectId?: string;
        pageProperties?: Slides_v1.Schema.PageProperties;
      }
      export interface UpdateParagraphStyleRequest {
        cellLocation?: Slides_v1.Schema.TableCellLocation;
        fields?: string;
        objectId?: string;
        style?: Slides_v1.Schema.ParagraphStyle;
        textRange?: Slides_v1.Schema.Range;
      }
      export interface UpdateShapePropertiesRequest {
        fields?: string;
        objectId?: string;
        shapeProperties?: Slides_v1.Schema.ShapeProperties;
      }
      export interface UpdateSlidesPositionRequest {
        insertionIndex?: number;
        slideObjectIds?: string[];
      }
      export interface UpdateTableBorderPropertiesRequest {
        borderPosition?: string;
        fields?: string;
        objectId?: string;
        tableBorderProperties?: Slides_v1.Schema.TableBorderProperties;
        tableRange?: Slides_v1.Schema.TableRange;
      }
      export interface UpdateTableCellPropertiesRequest {
        fields?: string;
        objectId?: string;
        tableCellProperties?: Slides_v1.Schema.TableCellProperties;
        tableRange?: Slides_v1.Schema.TableRange;
      }
      export interface UpdateTableColumnPropertiesRequest {
        columnIndices?: number[];
        fields?: string;
        objectId?: string;
        tableColumnProperties?: Slides_v1.Schema.TableColumnProperties;
      }
      export interface UpdateTableRowPropertiesRequest {
        fields?: string;
        objectId?: string;
        rowIndices?: number[];
        tableRowProperties?: Slides_v1.Schema.TableRowProperties;
      }
      export interface UpdateTextStyleRequest {
        cellLocation?: Slides_v1.Schema.TableCellLocation;
        fields?: string;
        objectId?: string;
        style?: Slides_v1.Schema.TextStyle;
        textRange?: Slides_v1.Schema.Range;
      }
      export interface UpdateVideoPropertiesRequest {
        fields?: string;
        objectId?: string;
        videoProperties?: Slides_v1.Schema.VideoProperties;
      }
      export interface Video {
        id?: string;
        source?: string;
        url?: string;
        videoProperties?: Slides_v1.Schema.VideoProperties;
      }
      export interface VideoProperties {
        autoPlay?: boolean;
        end?: number;
        mute?: boolean;
        outline?: Slides_v1.Schema.Outline;
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
  export interface Slides_v1 {
    Presentations?: Slides_v1.Collection.PresentationsCollection;
    // Create a new instance of AffineTransform
    newAffineTransform(): Slides_v1.Schema.AffineTransform;
    // Create a new instance of AutoText
    newAutoText(): Slides_v1.Schema.AutoText;
    // Create a new instance of BatchUpdatePresentationRequest
    newBatchUpdatePresentationRequest(): Slides_v1.Schema.BatchUpdatePresentationRequest;
    // Create a new instance of Bullet
    newBullet(): Slides_v1.Schema.Bullet;
    // Create a new instance of ColorScheme
    newColorScheme(): Slides_v1.Schema.ColorScheme;
    // Create a new instance of ColorStop
    newColorStop(): Slides_v1.Schema.ColorStop;
    // Create a new instance of CreateImageRequest
    newCreateImageRequest(): Slides_v1.Schema.CreateImageRequest;
    // Create a new instance of CreateLineRequest
    newCreateLineRequest(): Slides_v1.Schema.CreateLineRequest;
    // Create a new instance of CreateParagraphBulletsRequest
    newCreateParagraphBulletsRequest(): Slides_v1.Schema.CreateParagraphBulletsRequest;
    // Create a new instance of CreateShapeRequest
    newCreateShapeRequest(): Slides_v1.Schema.CreateShapeRequest;
    // Create a new instance of CreateSheetsChartRequest
    newCreateSheetsChartRequest(): Slides_v1.Schema.CreateSheetsChartRequest;
    // Create a new instance of CreateSlideRequest
    newCreateSlideRequest(): Slides_v1.Schema.CreateSlideRequest;
    // Create a new instance of CreateTableRequest
    newCreateTableRequest(): Slides_v1.Schema.CreateTableRequest;
    // Create a new instance of CreateVideoRequest
    newCreateVideoRequest(): Slides_v1.Schema.CreateVideoRequest;
    // Create a new instance of CropProperties
    newCropProperties(): Slides_v1.Schema.CropProperties;
    // Create a new instance of DeleteObjectRequest
    newDeleteObjectRequest(): Slides_v1.Schema.DeleteObjectRequest;
    // Create a new instance of DeleteParagraphBulletsRequest
    newDeleteParagraphBulletsRequest(): Slides_v1.Schema.DeleteParagraphBulletsRequest;
    // Create a new instance of DeleteTableColumnRequest
    newDeleteTableColumnRequest(): Slides_v1.Schema.DeleteTableColumnRequest;
    // Create a new instance of DeleteTableRowRequest
    newDeleteTableRowRequest(): Slides_v1.Schema.DeleteTableRowRequest;
    // Create a new instance of DeleteTextRequest
    newDeleteTextRequest(): Slides_v1.Schema.DeleteTextRequest;
    // Create a new instance of Dimension
    newDimension(): Slides_v1.Schema.Dimension;
    // Create a new instance of DuplicateObjectRequest
    newDuplicateObjectRequest(): Slides_v1.Schema.DuplicateObjectRequest;
    // Create a new instance of Group
    newGroup(): Slides_v1.Schema.Group;
    // Create a new instance of GroupObjectsRequest
    newGroupObjectsRequest(): Slides_v1.Schema.GroupObjectsRequest;
    // Create a new instance of Image
    newImage(): Slides_v1.Schema.Image;
    // Create a new instance of ImageProperties
    newImageProperties(): Slides_v1.Schema.ImageProperties;
    // Create a new instance of InsertTableColumnsRequest
    newInsertTableColumnsRequest(): Slides_v1.Schema.InsertTableColumnsRequest;
    // Create a new instance of InsertTableRowsRequest
    newInsertTableRowsRequest(): Slides_v1.Schema.InsertTableRowsRequest;
    // Create a new instance of InsertTextRequest
    newInsertTextRequest(): Slides_v1.Schema.InsertTextRequest;
    // Create a new instance of LayoutPlaceholderIdMapping
    newLayoutPlaceholderIdMapping(): Slides_v1.Schema.LayoutPlaceholderIdMapping;
    // Create a new instance of LayoutProperties
    newLayoutProperties(): Slides_v1.Schema.LayoutProperties;
    // Create a new instance of LayoutReference
    newLayoutReference(): Slides_v1.Schema.LayoutReference;
    // Create a new instance of Line
    newLine(): Slides_v1.Schema.Line;
    // Create a new instance of LineConnection
    newLineConnection(): Slides_v1.Schema.LineConnection;
    // Create a new instance of LineFill
    newLineFill(): Slides_v1.Schema.LineFill;
    // Create a new instance of LineProperties
    newLineProperties(): Slides_v1.Schema.LineProperties;
    // Create a new instance of Link
    newLink(): Slides_v1.Schema.Link;
    // Create a new instance of MasterProperties
    newMasterProperties(): Slides_v1.Schema.MasterProperties;
    // Create a new instance of MergeTableCellsRequest
    newMergeTableCellsRequest(): Slides_v1.Schema.MergeTableCellsRequest;
    // Create a new instance of NotesProperties
    newNotesProperties(): Slides_v1.Schema.NotesProperties;
    // Create a new instance of OpaqueColor
    newOpaqueColor(): Slides_v1.Schema.OpaqueColor;
    // Create a new instance of OptionalColor
    newOptionalColor(): Slides_v1.Schema.OptionalColor;
    // Create a new instance of Outline
    newOutline(): Slides_v1.Schema.Outline;
    // Create a new instance of OutlineFill
    newOutlineFill(): Slides_v1.Schema.OutlineFill;
    // Create a new instance of Page
    newPage(): Slides_v1.Schema.Page;
    // Create a new instance of PageBackgroundFill
    newPageBackgroundFill(): Slides_v1.Schema.PageBackgroundFill;
    // Create a new instance of PageElement
    newPageElement(): Slides_v1.Schema.PageElement;
    // Create a new instance of PageElementProperties
    newPageElementProperties(): Slides_v1.Schema.PageElementProperties;
    // Create a new instance of PageProperties
    newPageProperties(): Slides_v1.Schema.PageProperties;
    // Create a new instance of ParagraphMarker
    newParagraphMarker(): Slides_v1.Schema.ParagraphMarker;
    // Create a new instance of ParagraphStyle
    newParagraphStyle(): Slides_v1.Schema.ParagraphStyle;
    // Create a new instance of Placeholder
    newPlaceholder(): Slides_v1.Schema.Placeholder;
    // Create a new instance of Presentation
    newPresentation(): Slides_v1.Schema.Presentation;
    // Create a new instance of Range
    newRange(): Slides_v1.Schema.Range;
    // Create a new instance of Recolor
    newRecolor(): Slides_v1.Schema.Recolor;
    // Create a new instance of RefreshSheetsChartRequest
    newRefreshSheetsChartRequest(): Slides_v1.Schema.RefreshSheetsChartRequest;
    // Create a new instance of ReplaceAllShapesWithImageRequest
    newReplaceAllShapesWithImageRequest(): Slides_v1.Schema.ReplaceAllShapesWithImageRequest;
    // Create a new instance of ReplaceAllShapesWithSheetsChartRequest
    newReplaceAllShapesWithSheetsChartRequest(): Slides_v1.Schema.ReplaceAllShapesWithSheetsChartRequest;
    // Create a new instance of ReplaceAllTextRequest
    newReplaceAllTextRequest(): Slides_v1.Schema.ReplaceAllTextRequest;
    // Create a new instance of ReplaceImageRequest
    newReplaceImageRequest(): Slides_v1.Schema.ReplaceImageRequest;
    // Create a new instance of Request
    newRequest(): Slides_v1.Schema.Request;
    // Create a new instance of RerouteLineRequest
    newRerouteLineRequest(): Slides_v1.Schema.RerouteLineRequest;
    // Create a new instance of RgbColor
    newRgbColor(): Slides_v1.Schema.RgbColor;
    // Create a new instance of Shadow
    newShadow(): Slides_v1.Schema.Shadow;
    // Create a new instance of Shape
    newShape(): Slides_v1.Schema.Shape;
    // Create a new instance of ShapeBackgroundFill
    newShapeBackgroundFill(): Slides_v1.Schema.ShapeBackgroundFill;
    // Create a new instance of ShapeProperties
    newShapeProperties(): Slides_v1.Schema.ShapeProperties;
    // Create a new instance of SheetsChart
    newSheetsChart(): Slides_v1.Schema.SheetsChart;
    // Create a new instance of SheetsChartProperties
    newSheetsChartProperties(): Slides_v1.Schema.SheetsChartProperties;
    // Create a new instance of Size
    newSize(): Slides_v1.Schema.Size;
    // Create a new instance of SlideProperties
    newSlideProperties(): Slides_v1.Schema.SlideProperties;
    // Create a new instance of SolidFill
    newSolidFill(): Slides_v1.Schema.SolidFill;
    // Create a new instance of StretchedPictureFill
    newStretchedPictureFill(): Slides_v1.Schema.StretchedPictureFill;
    // Create a new instance of SubstringMatchCriteria
    newSubstringMatchCriteria(): Slides_v1.Schema.SubstringMatchCriteria;
    // Create a new instance of Table
    newTable(): Slides_v1.Schema.Table;
    // Create a new instance of TableBorderCell
    newTableBorderCell(): Slides_v1.Schema.TableBorderCell;
    // Create a new instance of TableBorderFill
    newTableBorderFill(): Slides_v1.Schema.TableBorderFill;
    // Create a new instance of TableBorderProperties
    newTableBorderProperties(): Slides_v1.Schema.TableBorderProperties;
    // Create a new instance of TableBorderRow
    newTableBorderRow(): Slides_v1.Schema.TableBorderRow;
    // Create a new instance of TableCell
    newTableCell(): Slides_v1.Schema.TableCell;
    // Create a new instance of TableCellBackgroundFill
    newTableCellBackgroundFill(): Slides_v1.Schema.TableCellBackgroundFill;
    // Create a new instance of TableCellLocation
    newTableCellLocation(): Slides_v1.Schema.TableCellLocation;
    // Create a new instance of TableCellProperties
    newTableCellProperties(): Slides_v1.Schema.TableCellProperties;
    // Create a new instance of TableColumnProperties
    newTableColumnProperties(): Slides_v1.Schema.TableColumnProperties;
    // Create a new instance of TableRange
    newTableRange(): Slides_v1.Schema.TableRange;
    // Create a new instance of TableRow
    newTableRow(): Slides_v1.Schema.TableRow;
    // Create a new instance of TableRowProperties
    newTableRowProperties(): Slides_v1.Schema.TableRowProperties;
    // Create a new instance of TextContent
    newTextContent(): Slides_v1.Schema.TextContent;
    // Create a new instance of TextElement
    newTextElement(): Slides_v1.Schema.TextElement;
    // Create a new instance of TextRun
    newTextRun(): Slides_v1.Schema.TextRun;
    // Create a new instance of TextStyle
    newTextStyle(): Slides_v1.Schema.TextStyle;
    // Create a new instance of ThemeColorPair
    newThemeColorPair(): Slides_v1.Schema.ThemeColorPair;
    // Create a new instance of UngroupObjectsRequest
    newUngroupObjectsRequest(): Slides_v1.Schema.UngroupObjectsRequest;
    // Create a new instance of UnmergeTableCellsRequest
    newUnmergeTableCellsRequest(): Slides_v1.Schema.UnmergeTableCellsRequest;
    // Create a new instance of UpdateImagePropertiesRequest
    newUpdateImagePropertiesRequest(): Slides_v1.Schema.UpdateImagePropertiesRequest;
    // Create a new instance of UpdateLineCategoryRequest
    newUpdateLineCategoryRequest(): Slides_v1.Schema.UpdateLineCategoryRequest;
    // Create a new instance of UpdateLinePropertiesRequest
    newUpdateLinePropertiesRequest(): Slides_v1.Schema.UpdateLinePropertiesRequest;
    // Create a new instance of UpdatePageElementAltTextRequest
    newUpdatePageElementAltTextRequest(): Slides_v1.Schema.UpdatePageElementAltTextRequest;
    // Create a new instance of UpdatePageElementTransformRequest
    newUpdatePageElementTransformRequest(): Slides_v1.Schema.UpdatePageElementTransformRequest;
    // Create a new instance of UpdatePageElementsZOrderRequest
    newUpdatePageElementsZOrderRequest(): Slides_v1.Schema.UpdatePageElementsZOrderRequest;
    // Create a new instance of UpdatePagePropertiesRequest
    newUpdatePagePropertiesRequest(): Slides_v1.Schema.UpdatePagePropertiesRequest;
    // Create a new instance of UpdateParagraphStyleRequest
    newUpdateParagraphStyleRequest(): Slides_v1.Schema.UpdateParagraphStyleRequest;
    // Create a new instance of UpdateShapePropertiesRequest
    newUpdateShapePropertiesRequest(): Slides_v1.Schema.UpdateShapePropertiesRequest;
    // Create a new instance of UpdateSlidesPositionRequest
    newUpdateSlidesPositionRequest(): Slides_v1.Schema.UpdateSlidesPositionRequest;
    // Create a new instance of UpdateTableBorderPropertiesRequest
    newUpdateTableBorderPropertiesRequest(): Slides_v1.Schema.UpdateTableBorderPropertiesRequest;
    // Create a new instance of UpdateTableCellPropertiesRequest
    newUpdateTableCellPropertiesRequest(): Slides_v1.Schema.UpdateTableCellPropertiesRequest;
    // Create a new instance of UpdateTableColumnPropertiesRequest
    newUpdateTableColumnPropertiesRequest(): Slides_v1.Schema.UpdateTableColumnPropertiesRequest;
    // Create a new instance of UpdateTableRowPropertiesRequest
    newUpdateTableRowPropertiesRequest(): Slides_v1.Schema.UpdateTableRowPropertiesRequest;
    // Create a new instance of UpdateTextStyleRequest
    newUpdateTextStyleRequest(): Slides_v1.Schema.UpdateTextStyleRequest;
    // Create a new instance of UpdateVideoPropertiesRequest
    newUpdateVideoPropertiesRequest(): Slides_v1.Schema.UpdateVideoPropertiesRequest;
    // Create a new instance of Video
    newVideo(): Slides_v1.Schema.Video;
    // Create a new instance of VideoProperties
    newVideoProperties(): Slides_v1.Schema.VideoProperties;
    // Create a new instance of WeightedFontFamily
    newWeightedFontFamily(): Slides_v1.Schema.WeightedFontFamily;
    // Create a new instance of WordArt
    newWordArt(): Slides_v1.Schema.WordArt;
    // Create a new instance of WriteControl
    newWriteControl(): Slides_v1.Schema.WriteControl;
  }
}

declare var Slides_v1: GoogleAppsScript.Slides_v1;