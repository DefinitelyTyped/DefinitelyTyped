/// <reference path="google-apps-script.types.d.ts" />
/// <reference path="google-apps-script.base.d.ts" />
/// <reference path="google-apps-script.spreadsheet.d.ts" />

declare namespace GoogleAppsScript {
    namespace Slides {
        /**
         * A 3x3 matrix used to transform source coordinates (x1, y1) into destination coordinates (x2, y2)
         * according to matrix multiplication:
         *
         *     [ x2 ]   [ scaleX shearX translateX ] [ x1 ]
         *     [ y2 ] = [ shearY scaleY translateY ] [ y1 ]
         *     [ 1  ]   [   0      0        1      ] [ 1  ]
         *
         * After transformation,
         *
         *     x2 = scaleX * x1 + shearX * y1 + translateX
         *     y2 = scaleY * y1 + shearY * x1 + translateY
         */
        interface AffineTransform {
            getScaleX(): number;
            getScaleY(): number;
            getShearX(): number;
            getShearY(): number;
            getTranslateX(): number;
            getTranslateY(): number;
            toBuilder(): AffineTransformBuilder;
        }
        /**
         * A builder for AffineTransform objects. Defaults to the identity transform.
         *
         * Call AffineTransformBuilder#build() to get the AffineTransform object.
         *
         *     var transform =
         *         SlidesApp.newAffineTransformBuilder().setScaleX(2.0).setShearY(1.1).build();
         *
         *     The resulting transform matrix is
         *       [ 2.0   0.0   0.0 ]
         *       [ 1.1   1.0   0.0 ]
         *       [  0     0     1  ]
         */
        interface AffineTransformBuilder {
            build(): AffineTransform;
            setScaleX(scaleX: number): AffineTransformBuilder;
            setScaleY(scaleY: number): AffineTransformBuilder;
            setShearX(shearX: number): AffineTransformBuilder;
            setShearY(shearY: number): AffineTransformBuilder;
            setTranslateX(translateX: number): AffineTransformBuilder;
            setTranslateY(translateY: number): AffineTransformBuilder;
        }
        /**
         * The alignment position to apply.
         */
        enum AlignmentPosition {
            CENTER,
            HORIZONTAL_CENTER,
            VERTICAL_CENTER,
        }
        /**
         * The kinds of start and end forms with which linear geometry can be rendered.
         *
         * Some values are based on the "ST_LineEndType" simple type described in section 20.1.10.33 of
         * of "Office Open XML File Formats - Fundamentals and Markup Language Reference", part 1 of ECMA-376 4th
         * edition.
         */
        enum ArrowStyle {
            UNSUPPORTED,
            NONE,
            STEALTH_ARROW,
            FILL_ARROW,
            FILL_CIRCLE,
            FILL_SQUARE,
            FILL_DIAMOND,
            OPEN_ARROW,
            OPEN_CIRCLE,
            OPEN_SQUARE,
            OPEN_DIAMOND,
        }
        /**
         * An element of text that is dynamically replaced with content that can change over time, such as a
         * slide number.
         */
        interface AutoText {
            getAutoTextType(): AutoTextType;
            getIndex(): Integer;
            getRange(): TextRange;
        }
        /**
         * The types of auto text.
         */
        enum AutoTextType {
            UNSUPPORTED,
            SLIDE_NUMBER,
        }
        /**
         * Describes the border around an element.
         */
        interface Border {
            getDashStyle(): DashStyle;
            getLineFill(): LineFill;
            getWeight(): number;
            isVisible(): boolean;
            setDashStyle(style: DashStyle): Border;
            setTransparent(): Border;
            setWeight(points: number): Border;
        }
        /**
         * The table cell merge states.
         */
        enum CellMergeState {
            NORMAL,
            HEAD,
            MERGED,
        }
        /**
         * An opaque color
         */
        interface Color {
            asRgbColor(): Base.RgbColor;
            asThemeColor(): ThemeColor;
            getColorType(): Base.ColorType;
        }
        /**
         * A color scheme defines a mapping from members of ThemeColorType to the actual colors used
         * to render them.
         */
        interface ColorScheme {
            getConcreteColor(theme: ThemeColorType): Color;
            getThemeColors(): ThemeColorType[];
            setConcreteColor(type: ThemeColorType, color: Color): ColorScheme;
            setConcreteColor(type: ThemeColorType, red: Integer, green: Integer, blue: Integer): ColorScheme;
            setConcreteColor(type: ThemeColorType, hexColor: string): ColorScheme;
        }
        /**
         * The connection site on a PageElement that can connect to a connector.
         */
        interface ConnectionSite {
            getIndex(): Integer;
            getPageElement(): PageElement;
        }
        /**
         * The content alignments for a Shape or TableCell. The supported alignments
         * correspond to predefined text anchoring types from the ECMA-376 standard.
         *
         * More information on those alignments can be found in the description of
         * the ST_TextAnchoringType simple type in section 20.1.10.59 of "Office Open XML File
         * Formats - Fundamentals and Markup Language Reference", part 1 of ECMA-376 4th
         * edition.
         */
        enum ContentAlignment {
            UNSUPPORTED,
            TOP,
            MIDDLE,
            BOTTOM,
        }
        /**
         * The kinds of dashes with which linear geometry can be rendered. These values are based on the
         * "ST_PresetLineDashVal" simple type described in section 20.1.10.48 of "Office Open XML File
         * Formats - Fundamentals and Markup Language Reference", part 1 of ECMA-376 4th
         * edition.
         */
        enum DashStyle {
            UNSUPPORTED,
            SOLID,
            DOT,
            DASH,
            DASH_DOT,
            LONG_DASH,
            LONG_DASH_DOT,
        }
        /**
         * Describes the page element's background
         */
        interface Fill {
            getSolidFill(): SolidFill;
            getType(): FillType;
            isVisible(): boolean;
            setSolidFill(color: Color): void;
            setSolidFill(color: Color, alpha: number): void;
            setSolidFill(red: Integer, green: Integer, blue: Integer): void;
            setSolidFill(red: Integer, green: Integer, blue: Integer, alpha: number): void;
            setSolidFill(hexString: string): void;
            setSolidFill(hexString: string, alpha: number): void;
            setSolidFill(color: ThemeColorType): void;
            setSolidFill(color: ThemeColorType, alpha: number): void;
            setTransparent(): void;
        }
        /**
         * The kinds of fill.
         */
        enum FillType {
            UNSUPPORTED,
            NONE,
            SOLID,
        }
        /**
         * A collection of PageElements joined as a single unit.
         */
        interface Group {
            alignOnPage(alignmentPosition: AlignmentPosition): Group;
            bringForward(): Group;
            bringToFront(): Group;
            duplicate(): PageElement;
            getChildren(): PageElement[];
            getConnectionSites(): ConnectionSite[];
            getDescription(): string;
            getHeight(): number;
            getInherentHeight(): number;
            getInherentWidth(): number;
            getLeft(): number;
            getObjectId(): string;
            getPageElementType(): PageElementType;
            getParentGroup(): Group;
            getParentPage(): Page;
            getRotation(): number;
            getTitle(): string;
            getTop(): number;
            getTransform(): AffineTransform;
            getWidth(): number;
            preconcatenateTransform(transform: AffineTransform): Group;
            remove(): void;
            scaleHeight(ratio: number): Group;
            scaleWidth(ratio: number): Group;
            select(): void;
            select(replace: boolean): void;
            sendBackward(): Group;
            sendToBack(): Group;
            setDescription(description: string): Group;
            setHeight(height: number): Group;
            setLeft(left: number): Group;
            setRotation(angle: number): Group;
            setTitle(title: string): Group;
            setTop(top: number): Group;
            setTransform(transform: AffineTransform): Group;
            setWidth(width: number): Group;
            ungroup(): void;
        }
        /**
         * A PageElement representing an image.
         */
        interface Image {
            alignOnPage(alignmentPosition: AlignmentPosition): Image;
            bringForward(): Image;
            bringToFront(): Image;
            duplicate(): PageElement;
            getAs(contentType: string): Base.Blob;
            getBlob(): Base.Blob;
            getBorder(): Border;
            getConnectionSites(): ConnectionSite[];
            getContentUrl(): string;
            getDescription(): string;
            getHeight(): number;
            getInherentHeight(): number;
            getInherentWidth(): number;
            getLeft(): number;
            getLink(): Link;
            getObjectId(): string;
            getPageElementType(): PageElementType;
            getParentGroup(): Group;
            getParentPage(): Page;
            getRotation(): number;
            getSourceUrl(): string;
            getTitle(): string;
            getTop(): number;
            getTransform(): AffineTransform;
            getWidth(): number;
            preconcatenateTransform(transform: AffineTransform): Image;
            remove(): void;
            removeLink(): void;
            replace(blobSource: Base.BlobSource): Image;
            replace(blobSource: Base.BlobSource, crop: boolean): Image;
            replace(imageUrl: string): Image;
            replace(imageUrl: string, crop: boolean): Image;
            scaleHeight(ratio: number): Image;
            scaleWidth(ratio: number): Image;
            select(): void;
            select(replace: boolean): void;
            sendBackward(): Image;
            sendToBack(): Image;
            setDescription(description: string): Image;
            setHeight(height: number): Image;
            setLeft(left: number): Image;
            setLinkSlide(slideIndex: Integer): Link;
            setLinkSlide(slide: Slide): Link;
            setLinkSlide(slidePosition: SlidePosition): Link;
            setLinkUrl(url: string): Link;
            setRotation(angle: number): Image;
            setTitle(title: string): Image;
            setTop(top: number): Image;
            setTransform(transform: AffineTransform): Image;
            setWidth(width: number): Image;
        }
        /**
         * A layout in a presentation.
         *
         * Each layout serves as a template for slides that inherit from it, determining how content on
         * those slides is arranged and styled.
         */
        interface Layout {
            getBackground(): PageBackground;
            getColorScheme(): ColorScheme;
            getGroups(): Group[];
            getImages(): Image[];
            getLayoutName(): string;
            getLines(): Line[];
            getMaster(): Master;
            getObjectId(): string;
            getPageElementById(id: string): PageElement;
            getPageElements(): PageElement[];
            getPageType(): PageType;
            getPlaceholder(placeholderType: PlaceholderType): PageElement;
            getPlaceholder(placeholderType: PlaceholderType, placeholderIndex: Integer): PageElement;
            getPlaceholders(): PageElement[];
            getShapes(): Shape[];
            getSheetsCharts(): SheetsChart[];
            getTables(): Table[];
            getVideos(): Video[];
            getWordArts(): WordArt[];
            group(pageElements: PageElement[]): Group;
            insertGroup(group: Group): Group;
            insertImage(blobSource: Base.BlobSource): Image;
            insertImage(blobSource: Base.BlobSource, left: number, top: number, width: number, height: number): Image;
            insertImage(image: Image): Image;
            insertImage(imageUrl: string): Image;
            insertImage(imageUrl: string, left: number, top: number, width: number, height: number): Image;
            insertLine(line: Line): Line;
            insertLine(
                lineCategory: LineCategory,
                startConnectionSite: ConnectionSite,
                endConnectionSite: ConnectionSite,
            ): Line;
            insertLine(
                lineCategory: LineCategory,
                startLeft: number,
                startTop: number,
                endLeft: number,
                endTop: number,
            ): Line;
            insertPageElement(pageElement: PageElement): PageElement;
            insertShape(shape: Shape): Shape;
            insertShape(shapeType: ShapeType): Shape;
            insertShape(shapeType: ShapeType, left: number, top: number, width: number, height: number): Shape;
            insertSheetsChart(sourceChart: Spreadsheet.EmbeddedChart): SheetsChart;
            insertSheetsChart(
                sourceChart: Spreadsheet.EmbeddedChart,
                left: number,
                top: number,
                width: number,
                height: number,
            ): SheetsChart;
            insertSheetsChart(sheetsChart: SheetsChart): SheetsChart;
            insertSheetsChartAsImage(sourceChart: Spreadsheet.EmbeddedChart): Image;
            insertSheetsChartAsImage(
                sourceChart: Spreadsheet.EmbeddedChart,
                left: number,
                top: number,
                width: number,
                height: number,
            ): Image;
            insertTable(numRows: Integer, numColumns: Integer): Table;
            insertTable(
                numRows: Integer,
                numColumns: Integer,
                left: number,
                top: number,
                width: number,
                height: number,
            ): Table;
            insertTable(table: Table): Table;
            insertTextBox(text: string): Shape;
            insertTextBox(text: string, left: number, top: number, width: number, height: number): Shape;
            insertVideo(videoUrl: string): Video;
            insertVideo(videoUrl: string, left: number, top: number, width: number, height: number): Video;
            insertVideo(video: Video): Video;
            insertWordArt(wordArt: WordArt): WordArt;
            remove(): void;
            replaceAllText(findText: string, replaceText: string): Integer;
            replaceAllText(findText: string, replaceText: string, matchCase: boolean): Integer;
            selectAsCurrentPage(): void;
        }
        /**
         * A PageElement representing a line.
         */
        interface Line {
            alignOnPage(alignmentPosition: AlignmentPosition): Line;
            bringForward(): Line;
            bringToFront(): Line;
            duplicate(): PageElement;
            getConnectionSites(): ConnectionSite[];
            getDashStyle(): DashStyle;
            getDescription(): string;
            getEnd(): Point;
            getEndArrow(): ArrowStyle;
            getEndConnection(): ConnectionSite;
            getHeight(): number;
            getInherentHeight(): number;
            getInherentWidth(): number;
            getLeft(): number;
            getLineCategory(): LineCategory;
            getLineFill(): LineFill;
            getLineType(): LineType;
            getLink(): Link;
            getObjectId(): string;
            getPageElementType(): PageElementType;
            getParentGroup(): Group;
            getParentPage(): Page;
            getRotation(): number;
            getStart(): Point;
            getStartArrow(): ArrowStyle;
            getStartConnection(): ConnectionSite;
            getTitle(): string;
            getTop(): number;
            getTransform(): AffineTransform;
            getWeight(): number;
            getWidth(): number;
            isConnector(): boolean;
            preconcatenateTransform(transform: AffineTransform): Line;
            remove(): void;
            removeLink(): void;
            reroute(): Line;
            scaleHeight(ratio: number): Line;
            scaleWidth(ratio: number): Line;
            select(): void;
            select(replace: boolean): void;
            sendBackward(): Line;
            sendToBack(): Line;
            setDashStyle(style: DashStyle): Line;
            setDescription(description: string): Line;
            setEnd(left: number, top: number): Line;
            setEnd(point: Point): Line;
            setEndArrow(style: ArrowStyle): Line;
            setEndConnection(connectionSite: ConnectionSite): Line;
            setHeight(height: number): Line;
            setLeft(left: number): Line;
            setLineCategory(lineCategory: LineCategory): Line;
            setLinkSlide(slideIndex: Integer): Link;
            setLinkSlide(slide: Slide): Link;
            setLinkSlide(slidePosition: SlidePosition): Link;
            setLinkUrl(url: string): Link;
            setRotation(angle: number): Line;
            setStart(left: number, top: number): Line;
            setStart(point: Point): Line;
            setStartArrow(style: ArrowStyle): Line;
            setStartConnection(connectionSite: ConnectionSite): Line;
            setTitle(title: string): Line;
            setTop(top: number): Line;
            setTransform(transform: AffineTransform): Line;
            setWeight(points: number): Line;
            setWidth(width: number): Line;
        }
        /**
         * The line category.
         *
         * The exact LineType created is determined based on the category and how it's routed to
         * connect to other page elements.
         */
        enum LineCategory {
            UNSUPPORTED,
            STRAIGHT,
            BENT,
            CURVED,
        }
        /**
         * Describes the fill of a line or outline
         */
        interface LineFill {
            getFillType(): LineFillType;
            getSolidFill(): SolidFill;
            setSolidFill(color: Color): void;
            setSolidFill(color: Color, alpha: number): void;
            setSolidFill(red: Integer, green: Integer, blue: Integer): void;
            setSolidFill(red: Integer, green: Integer, blue: Integer, alpha: number): void;
            setSolidFill(hexString: string): void;
            setSolidFill(hexString: string, alpha: number): void;
            setSolidFill(color: ThemeColorType): void;
            setSolidFill(color: ThemeColorType, alpha: number): void;
        }
        /**
         * The kinds of line fill.
         */
        enum LineFillType {
            UNSUPPORTED,
            NONE,
            SOLID,
        }
        /**
         * The line types.
         *
         * Derived from a subset of the values of the "ST_ShapeType" simple type in section 20.1.10.55 of
         * "Office Open XML File Formats - Fundamentals and Markup Language Reference", part 1 of ECMA-376 4th
         * edition.
         */
        enum LineType {
            UNSUPPORTED,
            STRAIGHT_CONNECTOR_1,
            BENT_CONNECTOR_2,
            BENT_CONNECTOR_3,
            BENT_CONNECTOR_4,
            BENT_CONNECTOR_5,
            CURVED_CONNECTOR_2,
            CURVED_CONNECTOR_3,
            CURVED_CONNECTOR_4,
            CURVED_CONNECTOR_5,
            STRAIGHT_LINE,
        }
        /**
         * A hypertext link.
         */
        interface Link {
            getLinkType(): LinkType;
            getLinkedSlide(): Slide;
            getSlideId(): string;
            getSlideIndex(): Integer;
            getSlidePosition(): SlidePosition;
            getUrl(): string;
        }
        /**
         * The types of a Link.
         */
        enum LinkType {
            UNSUPPORTED,
            URL,
            SLIDE_POSITION,
            SLIDE_ID,
            SLIDE_INDEX,
        }
        /**
         * A list in the text.
         */
        interface List {
            getListId(): string;
            getListParagraphs(): Paragraph[];
        }
        /**
         * Preset patterns of glyphs for lists in text.
         *
         * These presets use these glyphs:
         *
         * ARROW: An arrow, ➔, corresponding to a Unicode U+2794 code point
         *
         * ARROW3D: An arrow with 3D shading, ➢, corresponding to a Unicode U+27a2 code point
         *
         * CHECKBOX: A hollow square, ❏, corresponding to a Unicode U+274f code point
         *
         * CIRCLE: A hollow circle, ○, corresponding to a Unicode U+25cb code point
         *
         * DIAMOND: A solid diamond, ◆, corresponding to a Unicode U+25c6 code point
         *
         * `DIAMONDX: A diamond with an 'x', ❖, corresponding to a Unicode U+2756 code point
         *
         * HOLLOWDIAMOND: A hollow diamond, ◇, corresponding to a Unicode U+25c7 code point
         *
         * DISC: A solid circle, ●, corresponding to a Unicode U+25cf code point
         *
         * SQUARE: A solid square, ■, corresponding to a Unicode U+25a0 code point
         *
         * STAR: A star, ★, corresponding to a Unicode U+2605 code point
         *
         * ALPHA: A lowercase letter, like 'a', 'b', or 'c'.
         *
         * UPPERALPHA: An uppercase letter, like 'A', 'B', or 'C'.
         *
         * DIGIT: A number, like '1', '2', or '3'.
         *
         * ZERODIGIT: A number where single digit numbers are prefixed with a zero, like '01', '02',
         *       or '03'. Numbers with more than one digit are not prefixed a zero.
         *
         * ROMAN: A lowercase roman numeral, like 'i', 'ii', or 'iii'.
         *
         * UPPERROMAN: A uppercase roman numeral, like 'I', 'II', or 'III'.
         *
         * LEFTTRIANGLE: A triangle pointing left, ◄, corresponding to a Unicode U+25c4 code
         *       point
         */
        enum ListPreset {
            DISC_CIRCLE_SQUARE,
            DIAMONDX_ARROW3D_SQUARE,
            CHECKBOX,
            ARROW_DIAMOND_DISC,
            STAR_CIRCLE_SQUARE,
            ARROW3D_CIRCLE_SQUARE,
            LEFTTRIANGLE_DIAMOND_DISC,
            DIAMONDX_HOLLOWDIAMOND_SQUARE,
            DIAMOND_CIRCLE_SQUARE,
            DIGIT_ALPHA_ROMAN,
            DIGIT_ALPHA_ROMAN_PARENS,
            DIGIT_NESTED,
            UPPERALPHA_ALPHA_ROMAN,
            UPPERROMAN_UPPERALPHA_DIGIT,
            ZERODIGIT_ALPHA_ROMAN,
        }
        /**
         * The list styling for a range of text.
         */
        interface ListStyle {
            applyListPreset(listPreset: ListPreset): ListStyle;
            getGlyph(): string;
            getList(): List;
            getNestingLevel(): Integer;
            isInList(): boolean;
            removeFromList(): ListStyle;
        }
        /**
         * A master in a presentation.
         *
         * Masters contains all common page elements and the common properties for a set of layouts. They
         * serve three purposes:
         *
         * Placeholder shapes on a master contain the default text styles and shape properties of all
         *       placeholder shapes on pages that use that master.
         *
         * The properties of a master page define the common page properties inherited by its layouts.
         *
         * Any other shapes on the master slide appear on all slides using that master, regardless of
         *       their layout.
         */
        interface Master {
            getBackground(): PageBackground;
            getColorScheme(): ColorScheme;
            getGroups(): Group[];
            getImages(): Image[];
            getLayouts(): Layout[];
            getLines(): Line[];
            getObjectId(): string;
            getPageElementById(id: string): PageElement;
            getPageElements(): PageElement[];
            getPageType(): PageType;
            getPlaceholder(placeholderType: PlaceholderType): PageElement;
            getPlaceholder(placeholderType: PlaceholderType, placeholderIndex: Integer): PageElement;
            getPlaceholders(): PageElement[];
            getShapes(): Shape[];
            getSheetsCharts(): SheetsChart[];
            getTables(): Table[];
            getVideos(): Video[];
            getWordArts(): WordArt[];
            group(pageElements: PageElement[]): Group;
            insertGroup(group: Group): Group;
            insertImage(blobSource: Base.BlobSource): Image;
            insertImage(blobSource: Base.BlobSource, left: number, top: number, width: number, height: number): Image;
            insertImage(image: Image): Image;
            insertImage(imageUrl: string): Image;
            insertImage(imageUrl: string, left: number, top: number, width: number, height: number): Image;
            insertLine(line: Line): Line;
            insertLine(
                lineCategory: LineCategory,
                startConnectionSite: ConnectionSite,
                endConnectionSite: ConnectionSite,
            ): Line;
            insertLine(
                lineCategory: LineCategory,
                startLeft: number,
                startTop: number,
                endLeft: number,
                endTop: number,
            ): Line;
            insertPageElement(pageElement: PageElement): PageElement;
            insertShape(shape: Shape): Shape;
            insertShape(shapeType: ShapeType): Shape;
            insertShape(shapeType: ShapeType, left: number, top: number, width: number, height: number): Shape;
            insertSheetsChart(sourceChart: Spreadsheet.EmbeddedChart): SheetsChart;
            insertSheetsChart(
                sourceChart: Spreadsheet.EmbeddedChart,
                left: number,
                top: number,
                width: number,
                height: number,
            ): SheetsChart;
            insertSheetsChart(sheetsChart: SheetsChart): SheetsChart;
            insertSheetsChartAsImage(sourceChart: Spreadsheet.EmbeddedChart): Image;
            insertSheetsChartAsImage(
                sourceChart: Spreadsheet.EmbeddedChart,
                left: number,
                top: number,
                width: number,
                height: number,
            ): Image;
            insertTable(numRows: Integer, numColumns: Integer): Table;
            insertTable(
                numRows: Integer,
                numColumns: Integer,
                left: number,
                top: number,
                width: number,
                height: number,
            ): Table;
            insertTable(table: Table): Table;
            insertTextBox(text: string): Shape;
            insertTextBox(text: string, left: number, top: number, width: number, height: number): Shape;
            insertVideo(videoUrl: string): Video;
            insertVideo(videoUrl: string, left: number, top: number, width: number, height: number): Video;
            insertVideo(video: Video): Video;
            insertWordArt(wordArt: WordArt): WordArt;
            remove(): void;
            replaceAllText(findText: string, replaceText: string): Integer;
            replaceAllText(findText: string, replaceText: string, matchCase: boolean): Integer;
            selectAsCurrentPage(): void;
        }
        /**
         * A notes master in a presentation.
         *
         * Notes masters define the default text styles and page elements for all notes pages. Notes
         * masters are read-only.
         */
        interface NotesMaster {
            getGroups(): Group[];
            getImages(): Image[];
            getLines(): Line[];
            getObjectId(): string;
            getPageElementById(id: string): PageElement;
            getPageElements(): PageElement[];
            getPlaceholder(placeholderType: PlaceholderType): PageElement;
            getPlaceholder(placeholderType: PlaceholderType, placeholderIndex: Integer): PageElement;
            getPlaceholders(): PageElement[];
            getShapes(): Shape[];
            getSheetsCharts(): SheetsChart[];
            getTables(): Table[];
            getVideos(): Video[];
            getWordArts(): WordArt[];
        }
        /**
         * A notes page in a presentation.
         *
         * These pages contain the content for presentation handouts, including a a shape that contains
         * the slide's speaker notes. Each slide has one corresponding notes page. Only the text in the
         * speaker notes shape can be modified.
         */
        interface NotesPage {
            getGroups(): Group[];
            getImages(): Image[];
            getLines(): Line[];
            getObjectId(): string;
            getPageElementById(id: string): PageElement;
            getPageElements(): PageElement[];
            getPlaceholder(placeholderType: PlaceholderType): PageElement;
            getPlaceholder(placeholderType: PlaceholderType, placeholderIndex: Integer): PageElement;
            getPlaceholders(): PageElement[];
            getShapes(): Shape[];
            getSheetsCharts(): SheetsChart[];
            getSpeakerNotesShape(): Shape;
            getTables(): Table[];
            getVideos(): Video[];
            getWordArts(): WordArt[];
            replaceAllText(findText: string, replaceText: string): Integer;
            replaceAllText(findText: string, replaceText: string, matchCase: boolean): Integer;
        }
        /**
         * A page in a presentation.
         */
        interface Page {
            asLayout(): Layout;
            asMaster(): Master;
            asSlide(): Slide;
            getBackground(): PageBackground;
            getColorScheme(): ColorScheme;
            getGroups(): Group[];
            getImages(): Image[];
            getLines(): Line[];
            getObjectId(): string;
            getPageElementById(id: string): PageElement;
            getPageElements(): PageElement[];
            getPageType(): PageType;
            getPlaceholder(placeholderType: PlaceholderType): PageElement;
            getPlaceholder(placeholderType: PlaceholderType, placeholderIndex: Integer): PageElement;
            getPlaceholders(): PageElement[];
            getShapes(): Shape[];
            getSheetsCharts(): SheetsChart[];
            getTables(): Table[];
            getVideos(): Video[];
            getWordArts(): WordArt[];
            group(pageElements: PageElement[]): Group;
            insertGroup(group: Group): Group;
            insertImage(blobSource: Base.BlobSource): Image;
            insertImage(blobSource: Base.BlobSource, left: number, top: number, width: number, height: number): Image;
            insertImage(image: Image): Image;
            insertImage(imageUrl: string): Image;
            insertImage(imageUrl: string, left: number, top: number, width: number, height: number): Image;
            insertLine(line: Line): Line;
            insertLine(
                lineCategory: LineCategory,
                startConnectionSite: ConnectionSite,
                endConnectionSite: ConnectionSite,
            ): Line;
            insertLine(
                lineCategory: LineCategory,
                startLeft: number,
                startTop: number,
                endLeft: number,
                endTop: number,
            ): Line;
            insertPageElement(pageElement: PageElement): PageElement;
            insertShape(shape: Shape): Shape;
            insertShape(shapeType: ShapeType): Shape;
            insertShape(shapeType: ShapeType, left: number, top: number, width: number, height: number): Shape;
            insertSheetsChart(sourceChart: Spreadsheet.EmbeddedChart): SheetsChart;
            insertSheetsChart(
                sourceChart: Spreadsheet.EmbeddedChart,
                left: number,
                top: number,
                width: number,
                height: number,
            ): SheetsChart;
            insertSheetsChart(sheetsChart: SheetsChart): SheetsChart;
            insertSheetsChartAsImage(sourceChart: Spreadsheet.EmbeddedChart): Image;
            insertSheetsChartAsImage(
                sourceChart: Spreadsheet.EmbeddedChart,
                left: number,
                top: number,
                width: number,
                height: number,
            ): Image;
            insertTable(numRows: Integer, numColumns: Integer): Table;
            insertTable(
                numRows: Integer,
                numColumns: Integer,
                left: number,
                top: number,
                width: number,
                height: number,
            ): Table;
            insertTable(table: Table): Table;
            insertTextBox(text: string): Shape;
            insertTextBox(text: string, left: number, top: number, width: number, height: number): Shape;
            insertVideo(videoUrl: string): Video;
            insertVideo(videoUrl: string, left: number, top: number, width: number, height: number): Video;
            insertVideo(video: Video): Video;
            insertWordArt(wordArt: WordArt): WordArt;
            remove(): void;
            replaceAllText(findText: string, replaceText: string): Integer;
            replaceAllText(findText: string, replaceText: string, matchCase: boolean): Integer;
            selectAsCurrentPage(): void;
        }
        /**
         * Describes the page's background
         */
        interface PageBackground {
            getPictureFill(): PictureFill;
            getSolidFill(): SolidFill;
            getType(): PageBackgroundType;
            isVisible(): boolean;
            setPictureFill(blobSource: Base.BlobSource): void;
            setPictureFill(imageUrl: string): void;
            setSolidFill(color: Color): void;
            setSolidFill(color: Color, alpha: number): void;
            setSolidFill(red: Integer, green: Integer, blue: Integer): void;
            setSolidFill(red: Integer, green: Integer, blue: Integer, alpha: number): void;
            setSolidFill(hexString: string): void;
            setSolidFill(hexString: string, alpha: number): void;
            setSolidFill(color: ThemeColorType): void;
            setSolidFill(color: ThemeColorType, alpha: number): void;
            setTransparent(): void;
        }
        /**
         * The kinds of page backgrounds.
         */
        enum PageBackgroundType {
            UNSUPPORTED,
            NONE,
            SOLID,
            PICTURE,
        }
        /**
         * A visual element rendered on a page.
         */
        interface PageElement {
            alignOnPage(alignmentPosition: AlignmentPosition): PageElement;
            asGroup(): Group;
            asImage(): Image;
            asLine(): Line;
            asShape(): Shape;
            asSheetsChart(): SheetsChart;
            asTable(): Table;
            asVideo(): Video;
            asWordArt(): WordArt;
            bringForward(): PageElement;
            bringToFront(): PageElement;
            duplicate(): PageElement;
            getConnectionSites(): ConnectionSite[];
            getDescription(): string;
            getHeight(): number;
            getInherentHeight(): number;
            getInherentWidth(): number;
            getLeft(): number;
            getObjectId(): string;
            getPageElementType(): PageElementType;
            getParentGroup(): Group;
            getParentPage(): Page;
            getRotation(): number;
            getTitle(): string;
            getTop(): number;
            getTransform(): AffineTransform;
            getWidth(): number;
            preconcatenateTransform(transform: AffineTransform): PageElement;
            remove(): void;
            scaleHeight(ratio: number): PageElement;
            scaleWidth(ratio: number): PageElement;
            select(): void;
            select(replace: boolean): void;
            sendBackward(): PageElement;
            sendToBack(): PageElement;
            setDescription(description: string): PageElement;
            setHeight(height: number): PageElement;
            setLeft(left: number): PageElement;
            setRotation(angle: number): PageElement;
            setTitle(title: string): PageElement;
            setTop(top: number): PageElement;
            setTransform(transform: AffineTransform): PageElement;
            setWidth(width: number): PageElement;
        }
        /**
         * A collection of one or more PageElement instances.
         */
        interface PageElementRange {
            getPageElements(): PageElement[];
        }
        /**
         * The page element type.
         */
        enum PageElementType {
            UNSUPPORTED,
            SHAPE,
            IMAGE,
            VIDEO,
            TABLE,
            GROUP,
            LINE,
            WORD_ART,
            SHEETS_CHART,
        }
        /**
         * A collection of one or more Page instances.
         */
        interface PageRange {
            getPages(): Page[];
        }
        /**
         * The page types.
         */
        enum PageType {
            UNSUPPORTED,
            SLIDE,
            LAYOUT,
            MASTER,
        }
        /**
         * A segment of text terminated by a newline character.
         */
        interface Paragraph {
            getIndex(): Integer;
            getRange(): TextRange;
        }
        /**
         * The types of text alignment for a paragraph.
         */
        enum ParagraphAlignment {
            UNSUPPORTED,
            START,
            CENTER,
            END,
            JUSTIFIED,
        }
        /**
         * The styles of text that apply to entire paragraphs.
         *
         * Read methods in this class return null if the corresponding TextRange spans
         * multiple paragraphs, and those paragraphs have different values for the read method being called.
         * To avoid this, query for paragraph styles using the TextRange returned by the Paragraph.getRange() method.
         */
        interface ParagraphStyle {
            getIndentEnd(): number;
            getIndentFirstLine(): number;
            getIndentStart(): number;
            getLineSpacing(): number;
            getParagraphAlignment(): ParagraphAlignment;
            getSpaceAbove(): number;
            getSpaceBelow(): number;
            getSpacingMode(): SpacingMode;
            getTextDirection(): TextDirection;
            setIndentEnd(indent: number): ParagraphStyle;
            setIndentFirstLine(indent: number): ParagraphStyle;
            setIndentStart(indent: number): ParagraphStyle;
            setLineSpacing(spacing: number): ParagraphStyle;
            setParagraphAlignment(alignment: ParagraphAlignment): ParagraphStyle;
            setSpaceAbove(space: number): ParagraphStyle;
            setSpaceBelow(space: number): ParagraphStyle;
            setSpacingMode(mode: SpacingMode): ParagraphStyle;
            setTextDirection(direction: TextDirection): ParagraphStyle;
        }
        /**
         * A fill that renders an image that's stretched to the dimensions of its container.
         */
        interface PictureFill {
            getAs(contentType: string): Base.Blob;
            getBlob(): Base.Blob;
            getContentUrl(): string;
            getSourceUrl(): string;
        }
        /**
         * The placeholder types. Many of these placeholder types correspond to placeholder IDs from the
         * ECMA-376 standard. More information on those shapes can be found in the description of the
         * "ST_PlaceholderType" type in section 19.7.10 of "Office Open XML File Formats - Fundamentals and
         * Markup Language Reference", part 1 of ECMA-376 5th
         * edition.
         */
        enum PlaceholderType {
            UNSUPPORTED,
            NONE,
            BODY,
            CHART,
            CLIP_ART,
            CENTERED_TITLE,
            DIAGRAM,
            DATE_AND_TIME,
            FOOTER,
            HEADER,
            MEDIA,
            OBJECT,
            PICTURE,
            SLIDE_NUMBER,
            SUBTITLE,
            TABLE,
            TITLE,
            SLIDE_IMAGE,
        }
        /**
         * A point representing a location.
         */
        interface Point {
            getX(): number;
            getY(): number;
        }
        /**
         * Predefined layouts. These are commonly found layouts in presentations. However, there is no
         * guarantee that these layouts are present in the current master as they could have been deleted or
         * not part of the used theme. Additionally, the placeholders on each layout may have been changed.
         */
        enum PredefinedLayout {
            UNSUPPORTED,
            BLANK,
            CAPTION_ONLY,
            TITLE,
            TITLE_AND_BODY,
            TITLE_AND_TWO_COLUMNS,
            TITLE_ONLY,
            SECTION_HEADER,
            SECTION_TITLE_AND_DESCRIPTION,
            ONE_COLUMN_TEXT,
            MAIN_POINT,
            BIG_NUMBER,
        }
        /**
         * A presentation.
         */
        interface Presentation {
            addEditor(emailAddress: string): Presentation;
            addEditor(user: Base.User): Presentation;
            addEditors(emailAddresses: string[]): Presentation;
            addViewer(emailAddress: string): Presentation;
            addViewer(user: Base.User): Presentation;
            addViewers(emailAddresses: string[]): Presentation;
            appendSlide(): Slide;
            appendSlide(layout: Layout): Slide;
            appendSlide(predefinedLayout: PredefinedLayout): Slide;
            appendSlide(slide: Slide): Slide;
            appendSlide(slide: Slide, linkingMode: SlideLinkingMode): Slide;
            getEditors(): Base.User[];
            getId(): string;
            getLayouts(): Layout[];
            getMasters(): Master[];
            getName(): string;
            getNotesMaster(): NotesMaster;
            getNotesPageHeight(): number;
            getNotesPageWidth(): number;
            getPageElementById(id: string): PageElement;
            getPageHeight(): number;
            getPageWidth(): number;
            getSelection(): Selection;
            getSlideById(id: string): Slide;
            getSlides(): Slide[];
            getUrl(): string;
            getViewers(): Base.User[];
            insertSlide(insertionIndex: Integer): Slide;
            insertSlide(insertionIndex: Integer, layout: Layout): Slide;
            insertSlide(insertionIndex: Integer, predefinedLayout: PredefinedLayout): Slide;
            insertSlide(insertionIndex: Integer, slide: Slide): Slide;
            insertSlide(insertionIndex: Integer, slide: Slide, linkingMode: SlideLinkingMode): Slide;
            removeEditor(emailAddress: string): Presentation;
            removeEditor(user: Base.User): Presentation;
            removeViewer(emailAddress: string): Presentation;
            removeViewer(user: Base.User): Presentation;
            replaceAllText(findText: string, replaceText: string): Integer;
            replaceAllText(findText: string, replaceText: string, matchCase: boolean): Integer;
            saveAndClose(): void;
            setName(name: string): void;
        }
        /**
         * The user's selection in the active presentation.
         *
         *     var selection = SlidesApp.getActivePresentation().getSelection();
         *     var currentPage = selection.getCurrentPage();
         *     var selectionType = selection.getSelectionType();
         *     }
         */
        interface Selection {
            getCurrentPage(): Page;
            getPageElementRange(): PageElementRange;
            getPageRange(): PageRange;
            getSelectionType(): SelectionType;
            getTableCellRange(): TableCellRange;
            getTextRange(): TextRange;
        }
        /**
         * Type of Selection.
         *
         * The SelectionType represents the most specific type of one or more objects that are
         * selected. As an example if one or more TableCell instances are selected in a Table, the selection type is SelectionType.TABLE_CELL. The TableCellRange can be
         * retrieved by using the Selection.getTableCellRange. The Table can be retrieved by
         * using the Selection.getPageElementRange and the Page can be retrieved from the
         * Selection.getCurrentPage.
         */
        enum SelectionType {
            UNSUPPORTED,
            NONE,
            TEXT,
            TABLE_CELL,
            PAGE,
            PAGE_ELEMENT,
            CURRENT_PAGE,
        }
        /**
         * A PageElement representing a generic shape that does not have a more specific
         * classification. Includes text boxes, rectangles, and other predefined shapes.
         */
        interface Shape {
            alignOnPage(alignmentPosition: AlignmentPosition): Shape;
            bringForward(): Shape;
            bringToFront(): Shape;
            duplicate(): PageElement;
            getBorder(): Border;
            getConnectionSites(): ConnectionSite[];
            getContentAlignment(): ContentAlignment;
            getDescription(): string;
            getFill(): Fill;
            getHeight(): number;
            getInherentHeight(): number;
            getInherentWidth(): number;
            getLeft(): number;
            getLink(): Link;
            getObjectId(): string;
            getPageElementType(): PageElementType;
            getParentGroup(): Group;
            getParentPage(): Page;
            getParentPlaceholder(): PageElement;
            getPlaceholderIndex(): Integer;
            getPlaceholderType(): PlaceholderType;
            getRotation(): number;
            getShapeType(): ShapeType;
            getText(): TextRange;
            getTitle(): string;
            getTop(): number;
            getTransform(): AffineTransform;
            getWidth(): number;
            preconcatenateTransform(transform: AffineTransform): Shape;
            remove(): void;
            removeLink(): void;
            replaceWithImage(blobSource: Base.BlobSource): Image;
            replaceWithImage(blobSource: Base.BlobSource, crop: boolean): Image;
            replaceWithImage(imageUrl: string): Image;
            replaceWithImage(imageUrl: string, crop: boolean): Image;
            replaceWithSheetsChart(sourceChart: Spreadsheet.EmbeddedChart): SheetsChart;
            replaceWithSheetsChartAsImage(sourceChart: Spreadsheet.EmbeddedChart): Image;
            scaleHeight(ratio: number): Shape;
            scaleWidth(ratio: number): Shape;
            select(): void;
            select(replace: boolean): void;
            sendBackward(): Shape;
            sendToBack(): Shape;
            setContentAlignment(contentAlignment: ContentAlignment): Shape;
            setDescription(description: string): Shape;
            setHeight(height: number): Shape;
            setLeft(left: number): Shape;
            setLinkSlide(slideIndex: Integer): Link;
            setLinkSlide(slide: Slide): Link;
            setLinkSlide(slidePosition: SlidePosition): Link;
            setLinkUrl(url: string): Link;
            setRotation(angle: number): Shape;
            setTitle(title: string): Shape;
            setTop(top: number): Shape;
            setTransform(transform: AffineTransform): Shape;
            setWidth(width: number): Shape;
        }
        /**
         * The shape types. Many of these shapes correspond to predefined shapes from the ECMA-376 standard.
         * More information on those shapes can be found in the description of the "ST_ShapeType" simple
         * type in section 20.1.10.55 of "Office Open XML File Formats - Fundamentals and Markup Language
         * Reference", part 1 of ECMA-376 4th
         * edition.
         */
        enum ShapeType {
            UNSUPPORTED,
            TEXT_BOX,
            RECTANGLE,
            ROUND_RECTANGLE,
            ELLIPSE,
            ARC,
            BENT_ARROW,
            BENT_UP_ARROW,
            BEVEL,
            BLOCK_ARC,
            BRACE_PAIR,
            BRACKET_PAIR,
            CAN,
            CHEVRON,
            CHORD,
            CLOUD,
            CORNER,
            CUBE,
            CURVED_DOWN_ARROW,
            CURVED_LEFT_ARROW,
            CURVED_RIGHT_ARROW,
            CURVED_UP_ARROW,
            DECAGON,
            DIAGONAL_STRIPE,
            DIAMOND,
            DODECAGON,
            DONUT,
            DOUBLE_WAVE,
            DOWN_ARROW,
            DOWN_ARROW_CALLOUT,
            FOLDED_CORNER,
            FRAME,
            HALF_FRAME,
            HEART,
            HEPTAGON,
            HEXAGON,
            HOME_PLATE,
            HORIZONTAL_SCROLL,
            IRREGULAR_SEAL_1,
            IRREGULAR_SEAL_2,
            LEFT_ARROW,
            LEFT_ARROW_CALLOUT,
            LEFT_BRACE,
            LEFT_BRACKET,
            LEFT_RIGHT_ARROW,
            LEFT_RIGHT_ARROW_CALLOUT,
            LEFT_RIGHT_UP_ARROW,
            LEFT_UP_ARROW,
            LIGHTNING_BOLT,
            MATH_DIVIDE,
            MATH_EQUAL,
            MATH_MINUS,
            MATH_MULTIPLY,
            MATH_NOT_EQUAL,
            MATH_PLUS,
            MOON,
            NO_SMOKING,
            NOTCHED_RIGHT_ARROW,
            OCTAGON,
            PARALLELOGRAM,
            PENTAGON,
            PIE,
            PLAQUE,
            PLUS,
            QUAD_ARROW,
            QUAD_ARROW_CALLOUT,
            RIBBON,
            RIBBON_2,
            RIGHT_ARROW,
            RIGHT_ARROW_CALLOUT,
            RIGHT_BRACE,
            RIGHT_BRACKET,
            ROUND_1_RECTANGLE,
            ROUND_2_DIAGONAL_RECTANGLE,
            ROUND_2_SAME_RECTANGLE,
            RIGHT_TRIANGLE,
            SMILEY_FACE,
            SNIP_1_RECTANGLE,
            SNIP_2_DIAGONAL_RECTANGLE,
            SNIP_2_SAME_RECTANGLE,
            SNIP_ROUND_RECTANGLE,
            STAR_10,
            STAR_12,
            STAR_16,
            STAR_24,
            STAR_32,
            STAR_4,
            STAR_5,
            STAR_6,
            STAR_7,
            STAR_8,
            STRIPED_RIGHT_ARROW,
            SUN,
            TRAPEZOID,
            TRIANGLE,
            UP_ARROW,
            UP_ARROW_CALLOUT,
            UP_DOWN_ARROW,
            UTURN_ARROW,
            VERTICAL_SCROLL,
            WAVE,
            WEDGE_ELLIPSE_CALLOUT,
            WEDGE_RECTANGLE_CALLOUT,
            WEDGE_ROUND_RECTANGLE_CALLOUT,
            FLOW_CHART_ALTERNATE_PROCESS,
            FLOW_CHART_COLLATE,
            FLOW_CHART_CONNECTOR,
            FLOW_CHART_DECISION,
            FLOW_CHART_DELAY,
            FLOW_CHART_DISPLAY,
            FLOW_CHART_DOCUMENT,
            FLOW_CHART_EXTRACT,
            FLOW_CHART_INPUT_OUTPUT,
            FLOW_CHART_INTERNAL_STORAGE,
            FLOW_CHART_MAGNETIC_DISK,
            FLOW_CHART_MAGNETIC_DRUM,
            FLOW_CHART_MAGNETIC_TAPE,
            FLOW_CHART_MANUAL_INPUT,
            FLOW_CHART_MANUAL_OPERATION,
            FLOW_CHART_MERGE,
            FLOW_CHART_MULTIDOCUMENT,
            FLOW_CHART_OFFLINE_STORAGE,
            FLOW_CHART_OFFPAGE_CONNECTOR,
            FLOW_CHART_ONLINE_STORAGE,
            FLOW_CHART_OR,
            FLOW_CHART_PREDEFINED_PROCESS,
            FLOW_CHART_PREPARATION,
            FLOW_CHART_PROCESS,
            FLOW_CHART_PUNCHED_CARD,
            FLOW_CHART_PUNCHED_TAPE,
            FLOW_CHART_SORT,
            FLOW_CHART_SUMMING_JUNCTION,
            FLOW_CHART_TERMINATOR,
            ARROW_EAST,
            ARROW_NORTH_EAST,
            ARROW_NORTH,
            SPEECH,
            STARBURST,
            TEARDROP,
            ELLIPSE_RIBBON,
            ELLIPSE_RIBBON_2,
            CLOUD_CALLOUT,
            CUSTOM,
        }
        /**
         * A PageElement representing a linked chart embedded from Google Sheets.
         */
        interface SheetsChart {
            alignOnPage(alignmentPosition: AlignmentPosition): SheetsChart;
            asImage(): Image;
            bringForward(): SheetsChart;
            bringToFront(): SheetsChart;
            duplicate(): PageElement;
            getChartId(): Integer;
            getConnectionSites(): ConnectionSite[];
            getDescription(): string;
            getEmbedType(): SheetsChartEmbedType;
            getHeight(): number;
            getInherentHeight(): number;
            getInherentWidth(): number;
            getLeft(): number;
            getLink(): Link;
            getObjectId(): string;
            getPageElementType(): PageElementType;
            getParentGroup(): Group;
            getParentPage(): Page;
            getRotation(): number;
            getSpreadsheetId(): string;
            getTitle(): string;
            getTop(): number;
            getTransform(): AffineTransform;
            getWidth(): number;
            preconcatenateTransform(transform: AffineTransform): SheetsChart;
            refresh(): void;
            remove(): void;
            removeLink(): void;
            scaleHeight(ratio: number): SheetsChart;
            scaleWidth(ratio: number): SheetsChart;
            select(): void;
            select(replace: boolean): void;
            sendBackward(): SheetsChart;
            sendToBack(): SheetsChart;
            setDescription(description: string): SheetsChart;
            setHeight(height: number): SheetsChart;
            setLeft(left: number): SheetsChart;
            setLinkSlide(slideIndex: Integer): Link;
            setLinkSlide(slide: Slide): Link;
            setLinkSlide(slidePosition: SlidePosition): Link;
            setLinkUrl(url: string): Link;
            setRotation(angle: number): SheetsChart;
            setTitle(title: string): SheetsChart;
            setTop(top: number): SheetsChart;
            setTransform(transform: AffineTransform): SheetsChart;
            setWidth(width: number): SheetsChart;
        }
        /**
         * The Sheets chart's embed type.
         */
        enum SheetsChartEmbedType {
            UNSUPPORTED,
            IMAGE,
        }
        /**
         * A slide in a presentation.
         *
         * These pages contain the content you are presenting to your audience. Most slides are based on
         * a master and a layout. You can specify which layout to use for each slide when it is created.
         */
        interface Slide {
            duplicate(): Slide;
            getBackground(): PageBackground;
            getColorScheme(): ColorScheme;
            getGroups(): Group[];
            getImages(): Image[];
            getLayout(): Layout;
            getLines(): Line[];
            getNotesPage(): NotesPage;
            getObjectId(): string;
            getPageElementById(id: string): PageElement;
            getPageElements(): PageElement[];
            getPageType(): PageType;
            getPlaceholder(placeholderType: PlaceholderType): PageElement;
            getPlaceholder(placeholderType: PlaceholderType, placeholderIndex: Integer): PageElement;
            getPlaceholders(): PageElement[];
            getShapes(): Shape[];
            getSheetsCharts(): SheetsChart[];
            getSlideLinkingMode(): SlideLinkingMode;
            getSourcePresentationId(): string;
            getSourceSlideObjectId(): string;
            getTables(): Table[];
            getVideos(): Video[];
            getWordArts(): WordArt[];
            group(pageElements: PageElement[]): Group;
            insertGroup(group: Group): Group;
            insertImage(blobSource: Base.BlobSource): Image;
            insertImage(blobSource: Base.BlobSource, left: number, top: number, width: number, height: number): Image;
            insertImage(image: Image): Image;
            insertImage(imageUrl: string): Image;
            insertImage(imageUrl: string, left: number, top: number, width: number, height: number): Image;
            insertLine(line: Line): Line;
            insertLine(
                lineCategory: LineCategory,
                startConnectionSite: ConnectionSite,
                endConnectionSite: ConnectionSite,
            ): Line;
            insertLine(
                lineCategory: LineCategory,
                startLeft: number,
                startTop: number,
                endLeft: number,
                endTop: number,
            ): Line;
            insertPageElement(pageElement: PageElement): PageElement;
            insertShape(shape: Shape): Shape;
            insertShape(shapeType: ShapeType): Shape;
            insertShape(shapeType: ShapeType, left: number, top: number, width: number, height: number): Shape;
            insertSheetsChart(sourceChart: Spreadsheet.EmbeddedChart): SheetsChart;
            insertSheetsChart(
                sourceChart: Spreadsheet.EmbeddedChart,
                left: number,
                top: number,
                width: number,
                height: number,
            ): SheetsChart;
            insertSheetsChart(sheetsChart: SheetsChart): SheetsChart;
            insertSheetsChartAsImage(sourceChart: Spreadsheet.EmbeddedChart): Image;
            insertSheetsChartAsImage(
                sourceChart: Spreadsheet.EmbeddedChart,
                left: number,
                top: number,
                width: number,
                height: number,
            ): Image;
            insertTable(numRows: Integer, numColumns: Integer): Table;
            insertTable(
                numRows: Integer,
                numColumns: Integer,
                left: number,
                top: number,
                width: number,
                height: number,
            ): Table;
            insertTable(table: Table): Table;
            insertTextBox(text: string): Shape;
            insertTextBox(text: string, left: number, top: number, width: number, height: number): Shape;
            insertVideo(videoUrl: string): Video;
            insertVideo(videoUrl: string, left: number, top: number, width: number, height: number): Video;
            insertVideo(video: Video): Video;
            insertWordArt(wordArt: WordArt): WordArt;
            isSkipped(): boolean;
            move(index: Integer): void;
            refreshSlide(): void;
            remove(): void;
            replaceAllText(findText: string, replaceText: string): Integer;
            replaceAllText(findText: string, replaceText: string, matchCase: boolean): Integer;
            selectAsCurrentPage(): void;
            setSkipped(isSkipped: boolean): void;
            unlink(): void;
        }
        /**
         * The mode of links between slides.
         */
        enum SlideLinkingMode {
            UNSUPPORTED,
            LINKED,
            NOT_LINKED,
        }
        /**
         * The relative position of a Slide.
         */
        enum SlidePosition {
            NEXT_SLIDE,
            PREVIOUS_SLIDE,
            FIRST_SLIDE,
            LAST_SLIDE,
        }
        /**
         * Creates and opens Presentations that can be edited.
         *
         *     // Open a presentation by ID.
         *     var preso = SlidesApp.openById('PRESENTATION_ID_GOES_HERE');
         *
         *     // Create and open a presentation.
         *     preso = SlidesApp.create('Presentation Name');
         */
        interface SlidesApp {
            AlignmentPosition: typeof AlignmentPosition;
            ArrowStyle: typeof ArrowStyle;
            AutoTextType: typeof AutoTextType;
            CellMergeState: typeof CellMergeState;
            ColorType: typeof Base.ColorType;
            ContentAlignment: typeof ContentAlignment;
            DashStyle: typeof DashStyle;
            FillType: typeof FillType;
            LineCategory: typeof LineCategory;
            LineFillType: typeof LineFillType;
            LineType: typeof LineType;
            LinkType: typeof LinkType;
            ListPreset: typeof ListPreset;
            PageBackgroundType: typeof PageBackgroundType;
            PageElementType: typeof PageElementType;
            PageType: typeof PageType;
            ParagraphAlignment: typeof ParagraphAlignment;
            PlaceholderType: typeof PlaceholderType;
            PredefinedLayout: typeof PredefinedLayout;
            SelectionType: typeof SelectionType;
            ShapeType: typeof ShapeType;
            SheetsChartEmbedType: typeof SheetsChartEmbedType;
            SlideLinkingMode: typeof SlideLinkingMode;
            SlidePosition: typeof SlidePosition;
            SpacingMode: typeof SpacingMode;
            TextBaselineOffset: typeof TextBaselineOffset;
            TextDirection: typeof TextDirection;
            ThemeColorType: typeof ThemeColorType;
            VideoSourceType: typeof VideoSourceType;
            create(name: string): Presentation;
            getActivePresentation(): Presentation;
            getUi(): Base.Ui;
            newAffineTransformBuilder(): AffineTransformBuilder;
            openById(id: string): Presentation;
            openByUrl(url: string): Presentation;
        }
        /**
         * A solid color fill.
         *
         * SolidFill objects are detached and immutable, so do not reflect changes made after
         * they have been created.
         */
        interface SolidFill {
            getAlpha(): number;
            getColor(): Color;
        }
        /**
         * The different modes for paragraph spacing.
         */
        enum SpacingMode {
            UNSUPPORTED,
            NEVER_COLLAPSE,
            COLLAPSE_LISTS,
        }
        /**
         * A PageElement representing a table.
         */
        interface Table {
            alignOnPage(alignmentPosition: AlignmentPosition): Table;
            appendColumn(): TableColumn;
            appendRow(): TableRow;
            bringForward(): Table;
            bringToFront(): Table;
            duplicate(): PageElement;
            getCell(rowIndex: Integer, columnIndex: Integer): TableCell;
            getColumn(columnIndex: Integer): TableColumn;
            getConnectionSites(): ConnectionSite[];
            getDescription(): string;
            getHeight(): number;
            getInherentHeight(): number;
            getInherentWidth(): number;
            getLeft(): number;
            getNumColumns(): Integer;
            getNumRows(): Integer;
            getObjectId(): string;
            getPageElementType(): PageElementType;
            getParentGroup(): Group;
            getParentPage(): Page;
            getRotation(): number;
            getRow(rowIndex: Integer): TableRow;
            getTitle(): string;
            getTop(): number;
            getTransform(): AffineTransform;
            getWidth(): number;
            insertColumn(index: Integer): TableColumn;
            insertRow(index: Integer): TableRow;
            preconcatenateTransform(transform: AffineTransform): Table;
            remove(): void;
            scaleHeight(ratio: number): Table;
            scaleWidth(ratio: number): Table;
            select(): void;
            select(replace: boolean): void;
            sendBackward(): Table;
            sendToBack(): Table;
            setDescription(description: string): Table;
            setHeight(height: number): Table;
            setLeft(left: number): Table;
            setRotation(angle: number): Table;
            setTitle(title: string): Table;
            setTop(top: number): Table;
            setTransform(transform: AffineTransform): Table;
            setWidth(width: number): Table;
        }
        /**
         * A cell in a table.
         */
        interface TableCell {
            getColumnIndex(): Integer;
            getColumnSpan(): Integer;
            getContentAlignment(): ContentAlignment;
            getFill(): Fill;
            getHeadCell(): TableCell;
            getMergeState(): CellMergeState;
            getParentColumn(): TableColumn;
            getParentRow(): TableRow;
            getParentTable(): Table;
            getRowIndex(): Integer;
            getRowSpan(): Integer;
            getText(): TextRange;
            setContentAlignment(contentAlignment: ContentAlignment): TableCell;
        }
        /**
         * A collection of one or more TableCell instances.
         */
        interface TableCellRange {
            getTableCells(): TableCell[];
        }
        /**
         * A column in a table. A column consists of a list of table cells. A column is identified by the
         * column index.
         */
        interface TableColumn {
            getCell(cellIndex: Integer): TableCell;
            getIndex(): Integer;
            getNumCells(): Integer;
            getParentTable(): Table;
            getWidth(): number;
            remove(): void;
        }
        /**
         * A row in a table. A row consists of a list of table cells. A row is identified by the row index.
         */
        interface TableRow {
            getCell(cellIndex: Integer): TableCell;
            getIndex(): Integer;
            getMinimumHeight(): number;
            getNumCells(): Integer;
            getParentTable(): Table;
            remove(): void;
        }
        /**
         * The text vertical offset from its normal position.
         */
        enum TextBaselineOffset {
            UNSUPPORTED,
            NONE,
            SUPERSCRIPT,
            SUBSCRIPT,
        }
        /**
         * The directions text can flow in.
         */
        enum TextDirection {
            UNSUPPORTED,
            LEFT_TO_RIGHT,
            RIGHT_TO_LEFT,
        }
        /**
         * A segment of the text contents of a Shape or a TableCell.
         */
        interface TextRange {
            appendParagraph(text: string): Paragraph;
            appendRange(textRange: TextRange): TextRange;
            appendRange(textRange: TextRange, matchSourceFormatting: boolean): TextRange;
            appendText(text: string): TextRange;
            asRenderedString(): string;
            asString(): string;
            clear(): void;
            clear(startOffset: Integer, endOffset: Integer): void;
            find(pattern: string): TextRange[];
            find(pattern: string, startOffset: Integer): TextRange[];
            getAutoTexts(): AutoText[];
            getEndIndex(): Integer;
            getLength(): Integer;
            getLinks(): TextRange[];
            getListParagraphs(): Paragraph[];
            getListStyle(): ListStyle;
            getParagraphStyle(): ParagraphStyle;
            getParagraphs(): Paragraph[];
            getRange(startOffset: Integer, endOffset: Integer): TextRange;
            getRuns(): TextRange[];
            getStartIndex(): Integer;
            getTextStyle(): TextStyle;
            insertParagraph(startOffset: Integer, text: string): Paragraph;
            insertRange(startOffset: Integer, textRange: TextRange): TextRange;
            insertRange(startOffset: Integer, textRange: TextRange, matchSourceFormatting: boolean): TextRange;
            insertText(startOffset: Integer, text: string): TextRange;
            isEmpty(): boolean;
            replaceAllText(findText: string, replaceText: string): Integer;
            replaceAllText(findText: string, replaceText: string, matchCase: boolean): Integer;
            select(): void;
            setText(newText: string): TextRange;
        }
        /**
         * The style of text.
         *
         * Read methods in this class return null if the corresponding TextRange spans
         * multiple text runs, and those runs have different values for the read method being called. To
         * avoid this, query for text styles using the TextRanges returned by the TextRange.getRuns() method.
         */
        interface TextStyle {
            getBackgroundColor(): Color;
            getBaselineOffset(): TextBaselineOffset;
            getFontFamily(): string;
            getFontSize(): number;
            getFontWeight(): Integer;
            getForegroundColor(): Color;
            getLink(): Link;
            hasLink(): boolean;
            isBackgroundTransparent(): boolean;
            isBold(): boolean;
            isItalic(): boolean;
            isSmallCaps(): boolean;
            isStrikethrough(): boolean;
            isUnderline(): boolean;
            removeLink(): TextStyle;
            setBackgroundColor(color: Color): TextStyle;
            setBackgroundColor(red: Integer, green: Integer, blue: Integer): TextStyle;
            setBackgroundColor(hexColor: string): TextStyle;
            setBackgroundColor(color: ThemeColorType): TextStyle;
            setBackgroundColorTransparent(): TextStyle;
            setBaselineOffset(offset: TextBaselineOffset): TextStyle;
            setBold(bold: boolean): TextStyle;
            setFontFamily(fontFamily: string): TextStyle;
            setFontFamilyAndWeight(fontFamily: string, fontWeight: Integer): TextStyle;
            setFontSize(fontSize: number): TextStyle;
            setForegroundColor(foregroundColor: Color): TextStyle;
            setForegroundColor(red: Integer, green: Integer, blue: Integer): TextStyle;
            setForegroundColor(hexColor: string): TextStyle;
            setForegroundColor(color: ThemeColorType): TextStyle;
            setItalic(italic: boolean): TextStyle;
            setLinkSlide(slideIndex: Integer): TextStyle;
            setLinkSlide(slide: Slide): TextStyle;
            setLinkSlide(slidePosition: SlidePosition): TextStyle;
            setLinkUrl(url: string): TextStyle;
            setSmallCaps(smallCaps: boolean): TextStyle;
            setStrikethrough(strikethrough: boolean): TextStyle;
            setUnderline(underline: boolean): TextStyle;
        }
        /**
         * A color that refers to an entry in the page's ColorScheme.
         */
        interface ThemeColor {
            getColorType(): Base.ColorType;
            getThemeColorType(): ThemeColorType;
        }
        /**
         * The name of an entry in the page's color scheme.
         */
        enum ThemeColorType {
            UNSUPPORTED,
            DARK1,
            LIGHT1,
            DARK2,
            LIGHT2,
            ACCENT1,
            ACCENT2,
            ACCENT3,
            ACCENT4,
            ACCENT5,
            ACCENT6,
            HYPERLINK,
            FOLLOWED_HYPERLINK,
        }
        /**
         * A PageElement representing a video.
         */
        interface Video {
            alignOnPage(alignmentPosition: AlignmentPosition): Video;
            bringForward(): Video;
            bringToFront(): Video;
            duplicate(): PageElement;
            getBorder(): Border;
            getConnectionSites(): ConnectionSite[];
            getDescription(): string;
            getHeight(): number;
            getInherentHeight(): number;
            getInherentWidth(): number;
            getLeft(): number;
            getObjectId(): string;
            getPageElementType(): PageElementType;
            getParentGroup(): Group;
            getParentPage(): Page;
            getRotation(): number;
            getSource(): VideoSourceType;
            getThumbnailUrl(): string;
            getTitle(): string;
            getTop(): number;
            getTransform(): AffineTransform;
            getUrl(): string;
            getVideoId(): string;
            getWidth(): number;
            preconcatenateTransform(transform: AffineTransform): Video;
            remove(): void;
            scaleHeight(ratio: number): Video;
            scaleWidth(ratio: number): Video;
            select(): void;
            select(replace: boolean): void;
            sendBackward(): Video;
            sendToBack(): Video;
            setDescription(description: string): Video;
            setHeight(height: number): Video;
            setLeft(left: number): Video;
            setRotation(angle: number): Video;
            setTitle(title: string): Video;
            setTop(top: number): Video;
            setTransform(transform: AffineTransform): Video;
            setWidth(width: number): Video;
        }
        /**
         * The video source types.
         */
        enum VideoSourceType {
            UNSUPPORTED,
            YOUTUBE,
        }
        /**
         * A PageElement representing word art.
         */
        interface WordArt {
            alignOnPage(alignmentPosition: AlignmentPosition): WordArt;
            bringForward(): WordArt;
            bringToFront(): WordArt;
            duplicate(): PageElement;
            getConnectionSites(): ConnectionSite[];
            getDescription(): string;
            getHeight(): number;
            getInherentHeight(): number;
            getInherentWidth(): number;
            getLeft(): number;
            getLink(): Link;
            getObjectId(): string;
            getPageElementType(): PageElementType;
            getParentGroup(): Group;
            getParentPage(): Page;
            getRenderedText(): string;
            getRotation(): number;
            getTitle(): string;
            getTop(): number;
            getTransform(): AffineTransform;
            getWidth(): number;
            preconcatenateTransform(transform: AffineTransform): WordArt;
            remove(): void;
            removeLink(): void;
            scaleHeight(ratio: number): WordArt;
            scaleWidth(ratio: number): WordArt;
            select(): void;
            select(replace: boolean): void;
            sendBackward(): WordArt;
            sendToBack(): WordArt;
            setDescription(description: string): WordArt;
            setHeight(height: number): WordArt;
            setLeft(left: number): WordArt;
            setLinkSlide(slideIndex: Integer): Link;
            setLinkSlide(slide: Slide): Link;
            setLinkSlide(slidePosition: SlidePosition): Link;
            setLinkUrl(url: string): Link;
            setRotation(angle: number): WordArt;
            setTitle(title: string): WordArt;
            setTop(top: number): WordArt;
            setTransform(transform: AffineTransform): WordArt;
            setWidth(width: number): WordArt;
        }
    }
}

declare var SlidesApp: GoogleAppsScript.Slides.SlidesApp;
