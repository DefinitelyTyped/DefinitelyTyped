// Type definitions for Figma API 1.0
// Project: https://www.figma.com/plugin-docs/intro
// Definitions by: Rudi Chen <https://github.com/rudi-c>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
//
// Talk to the Figma team regarding changes to the typings.
//   rudi@figma.com, jonas@figma.com
// While changes to the types aren't breaking changes to how plugins run,
// it is preferable to coordinate breaking type changes with breaking API changes.

// Global variable with Figma's plugin API.
declare const figma: PluginAPI;
declare const __html__: string;

interface PluginAPI {
    readonly apiVersion: "1.0.0";
    readonly command: string;
    readonly root: DocumentNode;
    readonly viewport: ViewportAPI;
    closePlugin(message?: string): void;

    showUI(html: string, options?: ShowUIOptions): void;
    readonly ui: UIAPI;

    readonly clientStorage: ClientStorageAPI;

    getNodeById(id: string): BaseNode | null;
    getStyleById(id: string): BaseStyle | null;

    currentPage: PageNode;

    readonly mixed: symbol;

    createRectangle(): RectangleNode;
    createLine(): LineNode;
    createEllipse(): EllipseNode;
    createPolygon(): PolygonNode;
    createStar(): StarNode;
    createVector(): VectorNode;
    createText(): TextNode;
    createBooleanOperation(): BooleanOperationNode;
    createFrame(): FrameNode;
    createComponent(): ComponentNode;
    createPage(): PageNode;
    createSlice(): SliceNode;

    createPaintStyle(): PaintStyle;
    createTextStyle(): TextStyle;
    createEffectStyle(): EffectStyle;
    createGridStyle(): GridStyle;

    importComponentByKeyAsync(key: string): Promise<ComponentNode>;
    importStyleByKeyAsync(key: string): Promise<BaseStyle>;

    listAvailableFontsAsync(): Promise<Font[]>;
    loadFontAsync(fontName: FontName): Promise<void>;
    readonly hasMissingFont: boolean;

    createNodeFromSvg(svg: string): FrameNode;

    createImage(data: Uint8Array): Image;
    getImageByHash(hash: string): Image;

    group(nodes: ReadonlyArray<BaseNode>, parent: BaseNode & ChildrenMixin, index?: number): FrameNode;
    flatten(nodes: ReadonlyArray<BaseNode>, parent?: BaseNode & ChildrenMixin, index?: number): VectorNode;
}

interface ClientStorageAPI {
    getAsync(key: string): Promise<any>; // remember that any could be undefined
    setAsync(key: string, value: any): Promise<void>;
}

interface ShowUIOptions {
    visible?: boolean;
    width?: number;
    height?: number;
}

interface UIPostMessageOptions {
    targetOrigin?: string;
}

interface OnMessageProperties {
    sourceOrigin: string;
}

interface UIAPI {
    show(): void;
    hide(): void;
    resize(width: number, height: number): void;
    close(): void;

    postMessage(pluginMessage: any, options?: UIPostMessageOptions): void;
    onmessage: ((pluginMessage: any, props: OnMessageProperties) => void) | undefined;
}

interface ViewportAPI {
    center: { x: number, y: number };
    zoom: number;
    scrollAndZoomIntoView(nodes: ReadonlyArray<BaseNode>): void;
}

////////////////////////////////////////////////////////////////////////////////
// Datatypes

type Transform = [
    [number, number, number],
    [number, number, number]
];

interface Vector {
    readonly x: number;
    readonly y: number;
}

interface RGB {
    readonly r: number;
    readonly g: number;
    readonly b: number;
}

interface RGBA {
    readonly r: number;
    readonly g: number;
    readonly b: number;
    readonly a: number;
}

interface FontName {
    readonly family: string;
    readonly style: string;
}

type TextCase = "ORIGINAL" | "UPPER" | "LOWER" | "TITLE";

type TextDecoration = "NONE" | "UNDERLINE" | "STRIKETHROUGH";

interface ArcData {
    readonly startingAngle: number;
    readonly endingAngle: number;
    readonly innerRadius: number;
}

interface ShadowEffect {
    readonly type: "DROP_SHADOW" | "INNER_SHADOW";
    readonly color: RGBA;
    readonly offset: Vector;
    readonly radius: number;
    readonly visible: boolean;
    readonly blendMode: BlendMode;
}

interface BlurEffect {
    readonly type: "LAYER_BLUR" | "BACKGROUND_BLUR";
    readonly radius: number;
    readonly visible: boolean;
}

type Effect = ShadowEffect | BlurEffect;

type ConstraintType = "MIN" | "CENTER" | "MAX" | "STRETCH" | "SCALE";

interface Constraints {
    readonly horizontal: ConstraintType;
    readonly vertical: ConstraintType;
}

interface ColorStop {
    readonly position: number;
    readonly color: RGBA;
}

interface ImageFilters {
    exposure?: number;
    contrast?: number;
    saturation?: number;
    temperature?: number;
    tint?: number;
    highlights?: number;
    shadows?: number;
}

interface SolidPaint {
    readonly type: "SOLID";
    readonly color: RGB;

    readonly visible?: boolean;
    readonly opacity?: number;
    readonly blendMode?: BlendMode;
}

interface GradientPaint {
    readonly type: "GRADIENT_LINEAR" | "GRADIENT_RADIAL" | "GRADIENT_ANGULAR" | "GRADIENT_DIAMOND";
    readonly gradientTransform: Transform;
    readonly gradientStops: ReadonlyArray<ColorStop>;

    readonly visible?: boolean;
    readonly opacity?: number;
    readonly blendMode?: BlendMode;
}

interface ImagePaint {
    readonly type: "IMAGE";
    readonly scaleMode: "FILL" | "FIT" | "CROP" | "TILE";
    readonly imageHash: string | null;
    readonly imageTransform?: Transform; // setting for "CROP"
    readonly scalingFactor?: number; // setting for "TILE"
    readonly filters?: ImageFilters;

    readonly visible?: boolean;
    readonly opacity?: number;
    readonly blendMode?: BlendMode;
}

type Paint = SolidPaint | GradientPaint | ImagePaint;

interface Guide {
    readonly axis: "X" | "Y";
    readonly offset: number;
}

interface RowsColsLayoutGrid {
    readonly pattern: "ROWS" | "COLUMNS";
    readonly alignment: "MIN" | "MAX" | "STRETCH" | "CENTER";
    readonly gutterSize: number;

    readonly count: number;        // Infinity when "Auto" is set in the UI
    readonly sectionSize?: number; // Not set for alignment: "STRETCH"
    readonly offset?: number;      // Not set for alignment: "CENTER"

    readonly visible?: boolean;
    readonly color?: RGBA;
}

interface GridLayoutGrid {
    readonly pattern: "GRID";
    readonly sectionSize: number;

    readonly visible?: boolean;
    readonly color?: RGBA;
}

type LayoutGrid = RowsColsLayoutGrid | GridLayoutGrid;

interface ExportSettingsConstraints {
    type: "SCALE" | "WIDTH" | "HEIGHT";
    value: number;
}

interface ExportSettingsImage {
    format: "JPG" | "PNG";
    contentsOnly?: boolean;    // defaults to true
    suffix?: string;
    constraint?: ExportSettingsConstraints;
}

interface ExportSettingsSVG {
    format: "SVG";
    contentsOnly?: boolean;    // defaults to true
    suffix?: string;
    svgOutlineText?: boolean;  // defaults to true
    svgIdAttribute?: boolean;  // defaults to false
    svgSimplifyStroke?: boolean; // defaults to true
}

interface ExportSettingsPDF {
    format: "PDF";
    contentsOnly?: boolean;    // defaults to true
    suffix?: string;
}

type ExportSettings = ExportSettingsImage | ExportSettingsSVG | ExportSettingsPDF;

type WindingRule = "NONZERO" | "EVENODD";

interface VectorVertex {
    readonly x: number;
    readonly y: number;
    readonly strokeCap?: StrokeCap;
    readonly strokeJoin?: StrokeJoin;
    readonly cornerRadius?: number;
    readonly handleMirroring?: HandleMirroring;
}

interface VectorSegment {
    readonly start: number;
    readonly end: number;
    readonly tangentStart?: Vector;  // Defaults to { x: 0, y: 0 }
    readonly tangentEnd?: Vector;  // Defaults to { x: 0, y: 0 }
}

interface VectorRegion {
    readonly windingRule: WindingRule;
    readonly loops: ReadonlyArray<ReadonlyArray<number>>;
}

interface VectorNetwork {
    readonly vertices: ReadonlyArray<VectorVertex>;
    readonly segments: ReadonlyArray<VectorSegment>;
    readonly regions?: ReadonlyArray<VectorRegion>; // Defaults to []
}

interface VectorPath {
    readonly windingRule: WindingRule | "NONE";
    readonly data: string;
}

type VectorPaths = ReadonlyArray<VectorPath>;

interface LetterSpacing {
    readonly value: number;
    readonly unit: "PIXELS" | "PERCENT";
}

type LineHeight = {
    readonly value: number;
    readonly unit: "PIXELS" | "PERCENT";
} | {
    readonly unit: "AUTO"
};

type BlendMode =
    "PASS_THROUGH" |
    "NORMAL" |
    "DARKEN" |
    "MULTIPLY" |
    "LINEAR_BURN" |
    "COLOR_BURN" |
    "LIGHTEN" |
    "SCREEN" |
    "LINEAR_DODGE" |
    "COLOR_DODGE" |
    "OVERLAY" |
    "SOFT_LIGHT" |
    "HARD_LIGHT" |
    "DIFFERENCE" |
    "EXCLUSION" |
    "HUE" |
    "SATURATION" |
    "COLOR" |
    "LUMINOSITY";

interface Font {
    fontName: FontName;
}

////////////////////////////////////////////////////////////////////////////////
// Mixins

interface BaseNodeMixin {
    readonly id: string;
    readonly parent: (BaseNode & ChildrenMixin) | null;
    name: string; // Note: setting this also sets \`autoRename\` to false on TextNodes
    readonly removed: boolean;
    toString(): string;
    remove(): void;

    getPluginData(key: string): string;
    setPluginData(key: string, value: string): void;

    // Namespace is a string that must be at least 3 alphanumeric characters, and should
    // be a name related to your plugin. Other plugins will be able to read this data.
    getSharedPluginData(namespace: string, key: string): string;
    setSharedPluginData(namespace: string, key: string, value: string): void;
}

interface SceneNodeMixin {
    visible: boolean;
    locked: boolean;
}

interface ChildrenMixin {
    readonly children: ReadonlyArray<BaseNode>;

    appendChild(child: BaseNode): void;
    insertChild(index: number, child: BaseNode): void;

    findAll(callback?: (node: BaseNode) => boolean): ReadonlyArray<BaseNode>;
    findOne(callback: (node: BaseNode) => boolean): BaseNode | null;
}

interface ConstraintMixin {
    constraints: Constraints;
}

interface LayoutMixin {
    readonly absoluteTransform: Transform;
    relativeTransform: Transform;
    x: number;
    y: number;
    rotation: number; // In degrees

    readonly width: number;
    readonly height: number;

    resize(width: number, height: number): void;
    resizeWithoutConstraints(width: number, height: number): void;
}

interface BlendMixin {
    opacity: number;
    blendMode: BlendMode;
    isMask: boolean;
    effects: ReadonlyArray<Effect>;
    effectStyleId: string;
}

interface FrameMixin {
    backgrounds: ReadonlyArray<Paint>;
    layoutGrids: ReadonlyArray<LayoutGrid>;
    clipsContent: boolean;
    guides: ReadonlyArray<Guide>;
    gridStyleId: string;
    backgroundStyleId: string;
}

type StrokeCap = "NONE" | "ROUND" | "SQUARE" | "ARROW_LINES" | "ARROW_EQUILATERAL";
type StrokeJoin = "MITER" | "BEVEL" | "ROUND";
type HandleMirroring = "NONE" | "ANGLE" | "ANGLE_AND_LENGTH";

interface GeometryMixin {
    fills: ReadonlyArray<Paint> | symbol;
    strokes: ReadonlyArray<Paint>;
    strokeWeight: number;
    strokeAlign: "CENTER" | "INSIDE" | "OUTSIDE";
    strokeCap: StrokeCap | symbol;
    strokeJoin: StrokeJoin | symbol;
    dashPattern: ReadonlyArray<number>;
    fillStyleId: string | symbol;
    strokeStyleId: string;
}

interface CornerMixin {
    cornerRadius: number | symbol;
    cornerSmoothing: number;
}

interface ExportMixin {
    exportSettings: ExportSettings[];
    exportAsync(settings?: ExportSettings): Promise<Uint8Array>; // Defaults to PNG format
}

interface DefaultShapeMixin extends
BaseNodeMixin, SceneNodeMixin,
BlendMixin, GeometryMixin, LayoutMixin, ExportMixin {
}

interface DefaultContainerMixin extends
BaseNodeMixin, SceneNodeMixin,
ChildrenMixin, FrameMixin,
BlendMixin, ConstraintMixin, LayoutMixin, ExportMixin {
}

////////////////////////////////////////////////////////////////////////////////
// Nodes

interface DocumentNode extends BaseNodeMixin, ChildrenMixin {
    readonly type: "DOCUMENT";
}

interface PageNode extends BaseNodeMixin, ChildrenMixin, ExportMixin {
    readonly type: "PAGE";
    clone(): PageNode;

    guides: ReadonlyArray<Guide>;
    selection: ReadonlyArray<SceneNode>;
}

interface FrameNode extends DefaultContainerMixin {
    readonly type: "FRAME" | "GROUP";
    clone(): FrameNode;
}

interface SliceNode extends BaseNodeMixin, SceneNodeMixin, LayoutMixin, ExportMixin {
    readonly type: "SLICE";
    clone(): SliceNode;
}

interface RectangleNode extends DefaultShapeMixin, ConstraintMixin, CornerMixin {
    readonly type: "RECTANGLE";
    clone(): RectangleNode;
    topLeftRadius: number;
    topRightRadius: number;
    bottomLeftRadius: number;
    bottomRightRadius: number;
}

interface LineNode extends DefaultShapeMixin, ConstraintMixin {
    readonly type: "LINE";
    clone(): LineNode;
}

interface EllipseNode extends DefaultShapeMixin, ConstraintMixin, CornerMixin {
    readonly type: "ELLIPSE";
    clone(): EllipseNode;
    arcData: ArcData;
}

interface PolygonNode extends DefaultShapeMixin, ConstraintMixin, CornerMixin {
    readonly type: "POLYGON";
    clone(): PolygonNode;
    pointCount: number;
}

interface StarNode extends DefaultShapeMixin, ConstraintMixin, CornerMixin {
    readonly type: "STAR";
    clone(): StarNode;
    pointCount: number;
    innerRadius: number;
}

interface VectorNode extends DefaultShapeMixin, ConstraintMixin, CornerMixin {
    readonly type: "VECTOR";
    clone(): VectorNode;
    vectorNetwork: VectorNetwork;
    vectorPaths: VectorPaths;
    handleMirroring: HandleMirroring | symbol;
}

interface TextNode extends DefaultShapeMixin, ConstraintMixin {
    readonly type: "TEXT";
    clone(): TextNode;
    characters: string;
    readonly hasMissingFont: boolean;
    textAlignHorizontal: "LEFT" | "CENTER" | "RIGHT" | "JUSTIFIED";
    textAlignVertical: "TOP" | "CENTER" | "BOTTOM";
    textAutoResize: "NONE" | "WIDTH_AND_HEIGHT" | "HEIGHT";
    paragraphIndent: number;
    paragraphSpacing: number;
    autoRename: boolean;

    textStyleId: string | symbol;
    fontSize: number | symbol;
    fontName: FontName | symbol;
    textCase: TextCase | symbol;
    textDecoration: TextDecoration | symbol;
    letterSpacing: LetterSpacing | symbol;
    lineHeight: LineHeight | symbol;

    getRangeFontSize(start: number, end: number): number | symbol;
    setRangeFontSize(start: number, end: number, value: number): void;
    getRangeFontName(start: number, end: number): FontName | symbol;
    setRangeFontName(start: number, end: number, value: FontName): void;
    getRangeTextCase(start: number, end: number): TextCase | symbol;
    setRangeTextCase(start: number, end: number, value: TextCase): void;
    getRangeTextDecoration(start: number, end: number): TextDecoration | symbol;
    setRangeTextDecoration(start: number, end: number, value: TextDecoration): void;
    getRangeLetterSpacing(start: number, end: number): LetterSpacing | symbol;
    setRangeLetterSpacing(start: number, end: number, value: LetterSpacing): void;
    getRangeLineHeight(start: number, end: number): LineHeight | symbol;
    setRangeLineHeight(start: number, end: number, value: LineHeight): void;
    getRangeFills(start: number, end: number): Paint[] | symbol;
    setRangeFills(start: number, end: number, value: Paint[]): void;
    getRangeTextStyleId(start: number, end: number): string | symbol;
    setRangeTextStyleId(start: number, end: number, value: string): void;
    getRangeFillStyleId(start: number, end: number): string | symbol;
    setRangeFillStyleId(start: number, end: number, value: string): void;
}

interface ComponentNode extends DefaultContainerMixin {
    readonly type: "COMPONENT";
    clone(): ComponentNode;

    createInstance(): InstanceNode;
    description: string;
    readonly remote: boolean;
    readonly key: string; // The key to use with "importComponentByKeyAsync"
}

interface InstanceNode extends DefaultContainerMixin  {
    readonly type: "INSTANCE";
    clone(): InstanceNode;
    masterComponent: ComponentNode;
}

interface BooleanOperationNode extends DefaultShapeMixin, ChildrenMixin, CornerMixin {
    readonly type: "BOOLEAN_OPERATION";
    clone(): BooleanOperationNode;
    booleanOperation: "UNION" | "INTERSECT" | "SUBTRACT" | "EXCLUDE";
}

type BaseNode =
    DocumentNode |
    PageNode |
    SceneNode;

type SceneNode =
    SliceNode |
    FrameNode |
    ComponentNode |
    InstanceNode |
    BooleanOperationNode |
    VectorNode |
    StarNode |
    LineNode |
    EllipseNode |
    PolygonNode |
    RectangleNode |
    TextNode;

type NodeType =
    "DOCUMENT" |
    "PAGE" |
    "SLICE" |
    "FRAME" |
    "GROUP" |
    "COMPONENT" |
    "INSTANCE" |
    "BOOLEAN_OPERATION" |
    "VECTOR" |
    "STAR" |
    "LINE" |
    "ELLIPSE" |
    "POLYGON" |
    "RECTANGLE" |
    "TEXT";

////////////////////////////////////////////////////////////////////////////////
// Styles
type StyleType = "PAINT" | "TEXT" | "EFFECT" | "GRID";

interface BaseStyle {
    readonly id: string;
    readonly type: StyleType;
    name: string;
    description: string;
    remote: boolean;
    readonly key: string; // The key to use with "importStyleByKeyAsync"
    remove(): void;
}

interface PaintStyle extends BaseStyle {
    type: "PAINT";
    paints: ReadonlyArray<Paint>;
}

interface TextStyle extends BaseStyle {
    type: "TEXT";
    fontSize: number;
    textDecoration: TextDecoration;
    fontName: FontName;
    letterSpacing: LetterSpacing;
    lineHeight: LineHeight;
    paragraphIndent: number;
    paragraphSpacing: number;
    textCase: TextCase;
}

interface EffectStyle extends BaseStyle {
    type: "EFFECT";
    effects: ReadonlyArray<Effect>;
}

interface GridStyle extends BaseStyle {
    type: "GRID";
    layoutGrids: ReadonlyArray<LayoutGrid>;
}

////////////////////////////////////////////////////////////////////////////////
// Other

interface Image {
    readonly hash: string;
    getBytesAsync(): Promise<Uint8Array>;
}
