// Type definitions for non-npm package the SketchApp 56.0
// Project: https://github.com/xlayers/xlayers
// Definitions by: Wassim Chegham <https://github.com/manekinekko>
//                 Phetsinorath William <https://github.com/shikanime>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.0

type SketchMSFillTypeEnum = 0 | 1 | 4 | 5;
type SketchMSBorderPositionEnum = 0 | 1 | 2 | 3;
interface SketchMSBorder {
    _class: 'border';
    isEnabled: boolean;
    color: SketchMSColor;
    fillType: SketchMSFillTypeEnum;
    position: SketchMSBorderPositionEnum;
    thickness: number;
}
type SketchMSBorderLineCapStyle = 0 | 1 | 2;
type SketchMSBorderLineJoinStyle = 0 | 1 | 2;
interface SketchMSBorderOptions {
    _class: 'borderOptions';
    isEnabled: boolean;
    dashPattern: number[];
    lineCapStyle: SketchMSBorderLineCapStyle;
    lineJoinStyle: SketchMSBorderLineJoinStyle;
}
interface SketchMSImageDataReference {
    _class: 'jSONOriginalDataReference';
    _ref: string;
    _ref_class: 'imageData';
    data: {
        _data: string;
    };
    sha1: {
        _data: string;
    };
}
type SketchMSPatternFillTypeEnum = 0 | 1 | 2 | 3;
interface SketchMSFill {
    _class: 'fill';
    isEnabled: boolean;
    color?: SketchMSColor;
    fillType: SketchMSFillTypeEnum;
    image?: SketchMSImageDataReference;
    noiseIndex: number;
    noiseIntensity: number;
    patternFillType: SketchMSPatternFillTypeEnum;
    patternTileScale: number;
}
interface SketchMSShadow {
    _class: 'shadow' | 'MSInnerShadow';
    isEnabled: boolean;
    blurRadius: number;
    color: SketchMSColor;
    contextSettings: SketchMSGraphicsContextSettings;
    offsetX: number;
    offsetY: number;
    spread: number;
}
interface SketchMSStyleBorder {
    _class: 'styleBorder';
    position: number;
    color: SketchMSColor;
    gradient: SketchMSGradient;
    fillType: number;
    thickness: number;
    contextSettings: SketchMSGraphicsContextSettings;
    isEnabled: number;
}
interface SketchMSGradientStop {
    _class: 'gradientStop';
    color: SketchMSColor;
    position: number;
}
interface SketchMSGradient {
    _class: 'gradient';
    from: {
        x: number;
        y: number;
    };
    shouldSmoothenOpacity: boolean;
    gradientType: number;
    stops: SketchMSGradientStop[];
    to: {
        x: number;
        y: number;
    };
    elipseLength: number;
}
interface SketchMSStyleFill {
    _class: 'styleFill';
    contextSettings: SketchMSGraphicsContextSettings;
    color: SketchMSColor;
    gradient: SketchMSGradient;
    fillType: number;
    noiseIntensity: number;
    patternFillType: number;
    patternTileScale: number;
    noiseIndex: number;
    isEnabled: number;
}
interface SketchMSStyleShadow {
    _class: 'styleShadow';
    spread: number;
    color: SketchMSColor;
    offsetY: number;
    offsetX: number;
    blurRadius: number;
    contextSettings: SketchMSGraphicsContextSettings;
    isEnabled: number;
}
interface SketchMSParagraphStyle {
    _class: 'paragraphStyle';
    alignment: number;
    allowsDefaultTighteningForTruncation: number;
}
interface SketchMSStyleBorderOptions {
    _class: 'styleBorderOptions';
    lineJoinStyle: number;
    isEnabled: number;
    lineCapStyle: number;
    dashPattern: unknown[];
}
interface SketchMSGraphicsContextSettings {
    _class: 'graphicsContextSettings';
    opacity: number;
    blendMode: SketchMSGraphicsContextSettingsBlendMode;
}
type SketchMSGraphicsContextSettingsBlendMode = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15;
interface SketchMSStyleBlur {
    _class: 'styleBlur';
    radius: number;
    motionAngle: number;
    isEnabled: number;
    type: number;
    center: {
        x: number;
        y: number;
    };
}
interface SketchMSStyleReflection {
    _class: 'styleReflection';
    strength: number;
    isEnabled: number;
    distance: number;
}
interface SketchMSStyleColorControls {
    _class: 'styleColorControls';
    hue: number;
    brightness: number;
    contrast: number;
    isEnabled: number;
    saturation: number;
}
interface SketchMSFontAttribute {
    _class: 'fontDescriptor';
    attributes: {
        name: string;
        size: number;
    };
}
interface SketchMSAttributes {
    MSAttributedStringColorAttribute: SketchMSColor;
    MSAttributedStringFontAttribute: SketchMSFontAttribute;
    paragraphStyle: SketchMSParagraphStyle;
    kerning: number;
}
interface SketchMSStringAttribute {
    _class: 'stringAttribute';
    attributes: SketchMSAttributes;
}
interface SketchMSTextStyle {
    _class: 'textStyle';
    encodedAttributes: SketchMSAttributes;
}
interface SketchMSStyle {
    _class: 'style';
    do_objectID: string;
    endMarkerType: number;
    miterLimit: number;
    startMarkerType: number;
    windingRule: number;
    startDecorationType?: number;
    borderOptions?: SketchMSStyleBorderOptions;
    endDecorationType?: number;
    contextSettings?: SketchMSGraphicsContextSettings;
    blur?: SketchMSStyleBlur;
    textStyle?: SketchMSTextStyle;
    reflection?: SketchMSStyleReflection;
    colorControls?: SketchMSStyleColorControls;
    fills?: SketchMSStyleFill[];
    borders?: SketchMSStyleBorder[];
    innerShadows?: SketchMSStyleShadow[];
    shadows?: SketchMSStyleShadow[];
}
interface SketchMSAttributedString {
    _class: 'attributedString';
    string: string;
    attributes: SketchMSStringAttribute[];
    archivedAttributedString?: {
      _archive: string;
    };
}
interface SketchMSTextLayer extends SketchMSContainerLayer {
    _class: 'text';
    attributedString: SketchMSAttributedString;
}
interface SketchMSLayoutSimpleGrid {
    _class: 'simpleGrid';
    thickGridTimes: number;
    isEnabled: number;
    gridSize: number;
}
interface SketchMSLayoutGrid {
    _class: 'layoutGrid';
    isEnabled: boolean;
    columnWidth: number;
    drawHorizontal: boolean;
    drawHorizontalLines: boolean;
    drawVertical: boolean;
    gutterHeight: number;
    gutterWidth: number;
    guttersOutside: boolean;
    horizontalOffset: number;
    numberOfColumns: number;
    rowHeightMultiplication: number;
    totalWidth: number;
}
type SketchMSLayout = SketchMSLayoutGrid | SketchMSLayoutSimpleGrid;
interface SketchMSFlowConnection {
    _class: 'immutableFlowConnection';
    animationType: number;
    destinationArtboardID?: string | 'back';
}
type SketchMSFlow = SketchMSFlowConnection;
interface SketchMSImmutableHotspotLayer extends SketchMSLayer {
    _class: 'MSImmutableHotspotLayer';
    flow: SketchMSFlow;
}
type SketchMSPointString = string;
type SketchMSCurveMode = 0 | 1 | 2 | 3 | 4;
interface SketchMSCurvePoint {
    _class: 'curvePoint';
    cornerRadius: number;
    curveFrom: SketchMSPointString;
    curveMode: SketchMSCurveMode;
    curveTo: SketchMSPointString;
    hasCurveFrom: boolean;
    hasCurveTo: boolean;
    point: SketchMSPointString;
}
type SketchMSPoint = SketchMSCurvePoint;
interface SketchMSPathLayer extends SketchMSLayer {
    _class: 'path' | 'shapePath' | 'rectangle' | 'oval' | 'triangle';
    edited: boolean;
    isClosed: boolean;
    pointRadiusBehaviour: number;
    points: SketchMSPoint[];
}
interface SketchMSColor {
    _class: 'color';
    red: number;
    green: number;
    blue: number;
    alpha: number;
}
interface SketchMSSymbolMasterLayer extends SketchMSPageLayer {
    _class: 'symbolMaster';
    backgroundColor: SketchMSColor;
    hasBackgroundColor: boolean;
    includeBackgroundColorInExport: boolean;
    isFlowHome: boolean;
    resizesContent: boolean;
    includeBackgroundColorInInstance: boolean;
    symbolID: string;
    changeIdentifier: number;
}
interface SketchMSSymbolInstanceLayer extends SketchMSLayer {
    _class: 'symbolInstance';
    horizontalSpacing: number;
    overrideValues: unknown[];
    scale: number;
    symbolID: string;
    verticalSpacing: number;
}
interface SketchMSRulerData {
    _class: 'rulerData';
    base: number;
    guides: unknown[];
}
interface SketchMSPageLayer extends SketchMSContainerLayer {
    _class: 'page' | 'symbolMaster';
    hasClickThrough: boolean;
    horizontalRulerData: SketchMSRulerData;
    includeInCloudUpload: boolean;
    verticalRulerData: SketchMSRulerData;
}
interface SketchMSRect {
    _class: 'rect';
    constrainProportions: boolean;
    height: number;
    width: number;
    x: number;
    y: number;
}
type SketchMSLayerBooleanOperation = -1 | 0 | 1 | 2 | 3;
interface SketchMSLayerExportOptions {
    _class: 'exportOptions';
    exportFormats: unknown[];
    includedLayerIds: unknown[];
    layerOptions: number;
    shouldTrim: boolean;
}
type SketchMSLayerFrame = SketchMSRect;
type SketchMSLayerResizingType = 0 | 1 | 2 | 3;
type SketchMSLayerClippingMaskMode = 0 | 1;
interface SketchMSContainerLayer extends SketchMSLayer {
    _class: string;
    layers: SketchMSContainerLayer[];
}
interface SketchMSLayer {
    _class: string;
    do_objectID: string;
    booleanOperation: SketchMSLayerBooleanOperation;
    exportOptions: SketchMSLayerExportOptions;
    frame: SketchMSLayerFrame;
    isFixedToViewport: boolean;
    isFlippedHorizontal: boolean;
    isFlippedVertical: boolean;
    isLocked: boolean;
    isVisible: boolean;
    layerListExpandedType: number;
    name: string;
    nameIsFixed: boolean;
    resizingConstraint: number;
    resizingType: SketchMSLayerResizingType;
    rotation: number;
    shouldBreakMaskChain: boolean;
    clippingMaskMode: SketchMSLayerClippingMaskMode;
    hasClippingMask: boolean;
    style: SketchMSStyle;
    layers?: SketchMSLayer[];

    // xLayers custom property
    css?: string;
}
interface SketchMSSharedStyle {
    _class: 'sharedStyle';
    value: SketchMSStyle;
    name: string;
}
interface SketchMSImageCollection {
    _class: 'imageCollection';
    images: unknown[];
}
interface SketchMSDocumentAssets {
    _class: 'assetCollection';
    gradients: unknown[];
    colors: unknown[];
    imageCollection: SketchMSImageCollection;
    images: unknown[];
}
interface SketchMSImmutableForeignSymbol {
    _class: 'MSImmutableForeignSymbol';
    libraryID: string;
    sourceLibraryName: string;
    symbolPrivate: boolean;
    originalMaster: SketchMSSymbolMasterLayer;
    symbolMaster: SketchMSSymbolMasterLayer;
}
interface SketchMSSharedStyleContainer {
    _class: 'sharedStyleContainer';
    objects: SketchMSSharedStyle[];
}
interface SketchMSSymbolContainers {
    _class: 'symbolContainer';
    objects: unknown[];
}
interface SketchMSSharedTextStyleContainer {
    _class: 'sharedTextStyleContainer';
    objects: unknown[];
}
interface SketchMSPageReference {
    _class: 'MSJSONFileReference';
    _ref_class: 'MSImmutablePage';
    _ref: string;
}
interface SketchMSDocument {
    _class: 'documentData';
    do_objectID: string;
    assets: SketchMSDocumentAssets;
    colorSpace: number;
    currentPageIndex: number;
    foreignSymbols: SketchMSImmutableForeignSymbol[];
    foreignTextStyles: unknown[];
    layerStyles: SketchMSSharedStyleContainer;
    layerSymbols: SketchMSSymbolContainers;
    layerTextStyles: SketchMSSharedTextStyleContainer;
    pages: SketchMSPageReference[];
}
interface SketchMSArtboard {
    frame: SketchMSRect;
    backgroundColor: SketchMSColor;
    hasBackgroundColor: boolean;
    horizontalRulerData?: SketchMSRulerData;
    verticalRulerData?: SketchMSRulerData;
    includeBackgroundColorInExport?: boolean;
    includeInCloudUpload?: boolean;
    isFlowHome?: boolean;
}
interface SketchMSArtboards {
    name: string;
    artboards: SketchMSArtboard;
}
interface SketchMSPagesAndArtboards {
    [key: string]: SketchMSArtboards;
}
interface SketchMSMeta {
    commit: string;
    pagesAndArtboards: SketchMSPagesAndArtboards;
    version: number;
    fonts: string[];
    compatibilityVersion: number;
    app: string;
    autosaved: number;
    variant: string;
    created: {
        commit: string;
        appVersion: string;
        build: number;
        app: string;
        compatibilityVersion: number;
        version: number;
        variant: string;
    };
    saveHistory: string[];
    appVersion: string;
    build: number;
}
interface SketchMSUserDocument {
    document: {
        pageListHeight: number;
        pageListCollapsed: number;
    };
}
interface SketchMSUserPages {
    [key: string]: {
        scrollOrigin: SketchMSCurvePoint;
        zoomValue: number;
    };
}
type SketchMSUser = SketchMSUserPages | SketchMSUserDocument;
interface SketchMSPreview {
    source: string;
    width: number;
    height: number;
}
interface SketchMSData {
    pages: SketchMSPageLayer[];
    previews: SketchMSPreview[];
    document: SketchMSDocument;
    user: SketchMSUser;
    meta: SketchMSMeta;
}
