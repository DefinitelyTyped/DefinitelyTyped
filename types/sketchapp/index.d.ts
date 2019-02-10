// Type definitions for the SketchApp 1.0
// Project: https://github.com/xlayers/xlayers
// Definitions by: Wassim Chegham <https://github.com/manekinekko>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

type SketchMSBorderPositionEnum = 0 | 1 | 2 | 3;
type SketchMSBorderLineCapStyle = 0 | 1 | 2;
type SketchMSBorderLineJoinStyle = 0 | 1 | 2;
type SketchMSFillTypeEnum = 0 | 1 | 4 | 5;
type SketchMSPatternFillTypeEnum = 0 | 1 | 2 | 3;
type SketchMSBlendModeEnum = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15;
type SketchMSLineDecorationTypeEnum = 0 | 1 | 2 | 3;
type SketchMSBooleanOperation = -1 | 0 | 1 | 2 | 3;
type SketchMSCurveMode = 0 | 1 | 2 | 3 | 4;
type SketchMSResizingType = 0 | 1 | 2 | 3;
type SketchMSLayerListExpandedType = 0 | 1 | 2;
type SketchMSEncodedBase64BinaryPlist = string;
type SketchMSNSColorArchive = SketchMSKeyValueArchive;
type SketchMSLayer = SketchMSPage | SketchMSSymbolMaster;
interface SketchMSNestedSymbolOverride {
  symbolID: string;
}
interface SketchMSStringAttribute {
  _class: 'stringAttribute';
  attributes: {
    MSAttributedStringFontAttribute: {
      _class: 'fontDescriptor';
      attributes: {
        name: string;
        size: number;
      }
    };
    paragraphStyle: {
      _class: 'paragraphStyle',
      allowsDefaultTighteningForTruncation: number
    },
    foregroundColor: SketchMSKeyValueArchive
  };
}
interface SketchMSAttributedString {
  _class: 'attributedString';
  string: string;
  attributes: SketchMSStringAttribute[];
  archivedAttributedString?: SketchMSKeyValueArchive;
}
interface SketchMSKeyValueArchive {
  _archive: SketchMSEncodedBase64BinaryPlist;
}
interface SketchMSFontAttribute {
  _class: 'fontDescriptor';
  _archive?: string;
  attributes: {
    name: string;
    size: number;
  };
}
interface SketchMSBorder {
  _class: 'border';
  isEnabled: boolean;
  color: SketchMSColor;
  fillType: SketchMSFillTypeEnum;
  position: SketchMSBorderPositionEnum;
  thickness: number;
}
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
type SketchMSPointString = string;
interface SketchMSPath {
  _class: 'path';
  isClosed: boolean;
  points: SketchMSCurvePoint[];
}
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
interface SketchMSImageCollection {
  do_objectID?: string;
  _class: 'imageCollection';
  images: any[];
}
interface SketchMSAssetCollection {
  do_objectID?: string;
  _class: 'assetCollection';
  gradients: any[];
  colors: any[];
  imageCollection: SketchMSImageCollection;
  images: any[];
}
interface SketchMSStyleBorder {
  position: number;
  color: SketchMSColor;
  do_objectID?: string;
  _class: 'styleBorder';
  gradient: SketchMSGradient;
  fillType: number;
  thickness: number;
  contextSettings: SketchMSGraphicsContextSettings;
  isEnabled: number;
}
interface SketchMSGradientStop {
  do_objectID?: string;
  _class: 'gradientStop';
  color: SketchMSColor;
  position: number;
}
interface SketchMSGradient {
  from: {
    x: number;
    y: number;
  };
  shouldSmoothenOpacity: boolean;
  gradientType: number;
  do_objectID?: string;
  _class: 'gradient';
  stops: SketchMSGradientStop[];
  to: {
    x: number;
    y: number;
  };
  elipseLength: number;
}
interface SketchMSStyleFill {
  contextSettings: SketchMSGraphicsContextSettings;
  color: SketchMSColor;
  do_objectID?: string;
  _class: 'styleFill';
  gradient: SketchMSGradient;
  fillType: number;
  noiseIntensity: number;
  patternFillType: number;
  patternTileScale: number;
  noiseIndex: number;
  isEnabled: number;
}
interface SketchMSStyleShadow {
  spread: number;
  color: SketchMSColor;
  offsetY: number;
  offsetX: number;
  do_objectID?: string;
  _class: 'styleShadow';
  blurRadius: number;
  contextSettings: SketchMSGraphicsContextSettings;
  isEnabled: number;
}
interface SketchMSSharedStyle {
  do_objectID?: string;
  _class: 'sharedStyle';
  value: SketchMSStyle;
  objectID: string;
  name: string;
}
interface SketchMSTextStyle {
  _class: 'textStyle';
  encodedAttributes: {
    MSAttributedStringColorAttribute?: SketchMSColor;
    NSColor: SketchMSKeyValueArchive;
    MSAttributedStringFontAttribute?: SketchMSFontAttribute;
    NSParagraphStyle?: SketchMSKeyValueArchive;
    NSKern: number;
  };
}
interface SketchMSSharedStyleContainer {
  do_objectID?: string;
  _class: 'sharedStyleContainer';
  objects: SketchMSSharedStyle[];
}
interface SketchMSStyleBorderOptions {
  lineJoinStyle: number;
  do_objectID?: string;
  _class: 'styleBorderOptions';
  isEnabled: number;
  lineCapStyle: number;
  dashPattern: any[];
}
interface SketchMSGraphicsContextSettings {
  do_objectID?: string;
  _class: 'graphicsContextSettings';
  opacity: number;
  blendMode: number;
}
interface SketchMSStyleBlur {
  radius: number;
  do_objectID?: string;
  _class: 'styleBlur';
  motionAngle: number;
  isEnabled: number;
  type: number;
  center: {
    x: number;
    y: number;
  };
}
interface SketchMSStyleReflection {
  do_objectID?: string;
  _class: 'styleReflection';
  strength: number;
  isEnabled: number;
  distance: number;
}
interface SketchMSStyleColorControls {
  hue: number;
  do_objectID?: string;
  _class: 'styleColorControls';
  brightness: number;
  contrast: number;
  isEnabled: number;
  saturation: number;
}
interface SketchMSStyle {
  startDecorationType: number;
  borderOptions: SketchMSStyleBorderOptions;
  endDecorationType: number;
  contextSettings: SketchMSGraphicsContextSettings;
  blur: SketchMSStyleBlur;
  textStyle: SketchMSTextStyle;
  reflection: SketchMSStyleReflection;
  do_objectID?: string;
  _class: 'style';
  miterLimit: number;
  colorControls: SketchMSStyleColorControls;
  fills: SketchMSStyleFill[];
  borders: SketchMSStyleBorder[];
  innerShadows: SketchMSStyleShadow[];
  shadows: SketchMSStyleShadow[];
}
interface SketchMSRulerData {
  do_objectID?: string;
  _class: 'rulerData';
  base: number;
  guides: any[];
}
interface SketchMSRect {
  y: number;
  do_objectID?: string;
  _class: 'rect';
  constrainProportions: boolean;
  height: number;
  width: number;
  x: number;
}
interface SketchMSExportOptions {
  shouldTrim: boolean;
  do_objectID?: string;
  _class: 'exportOptions';
  includedLayerIds: any[];
  layerOptions: number;
  exportFormats: any[];
}
interface SketchMSColor {
  do_objectID?: string;
  _class: 'color';

  /**
   * ex: "#FFFFFF"
   * ex: rgb(1,0,1)
   */
  value: string;
  red: number;
  green: number;
  blue: number;
  alpha: number;
}
interface SketchMSSimpleGrid {
  do_objectID?: string;
  _class: 'simpleGrid';
  thickGridTimes: number;
  objectID: string;
  isEnabled: number;
  gridSize: number;
}
interface SketchMSLayoutGrid {
  columnWidth: number;
  totalWidth: number;
  drawHorizontalLines: number;
  objectID: string;
  gutterWidth: number;
  horizontalOffset: number;
  isEnabled: number;
  do_objectID?: string;
  _class: 'layoutGrid';
  gutterHeight: number;
  drawHorizontal: number;
  guttersOutside: number;
  numberOfColumns: number;
  drawVertical: number;
  rowHeightMultiplication: number;
}
interface SketchMSSymbolMaster {
  isFlippedHorizontal: number;
  includeBackgroundColorInInstance: number;
  objectID: string;
  horizontalRulerData: SketchMSRulerData;
  frame: SketchMSRect;
  hasClickThrough: number;
  includeInCloudUpload: number;
  exportOptions: SketchMSExportOptions;
  hasBackgroundColor: number;
  layerListExpandedType: number;
  resizesContent: number;
  backgroundColor: SketchMSColor;
  rotation: number;
  style: SketchMSStyle;
  verticalRulerData: SketchMSRulerData;
  constrainProportions: boolean;
  isFlippedVertical: number;
  do_objectID?: string;
  _class: 'symbolMaster';
  attributedString: SketchMSAttributedString;
  name: string;
  layers: SketchMSLayer[];
  isVisible: boolean;
  nameIsFixed: boolean;
  grid: SketchMSSimpleGrid;
  resizingType: number;
  userInfo: any;
  isLocked: boolean;
  layout: SketchMSLayoutGrid;
  shouldBreakMaskChain: number;
  resizingConstraint: 63 | number;
  includeBackgroundColorInExport: number;
  flow?: SketchMSImmutableFlowConnection;

  // add this property to hold all CSS properties
  // of the current layer
  css?: { [key: string]: string };
}
interface SketchMSSymbolInstanceLayer {
  _class: 'symbolInstance';
  frame: SketchMSRect;
  horizontalSpacing: number;
  verticalSpacing: number;
  masterInfluenceEdgeMinXPadding?: number;
  masterInfluenceEdgeMaxXPadding?: number;
  masterInfluenceEdgeMinYPadding?: number;
  masterInfluenceEdgeMaxYPadding?: number;
  symbolID: string;
  overrides?: {
    [objectId: string]: string | SketchMSNestedSymbolOverride | SketchMSImageDataReference;
  };
  isFlippedHorizontal: number;
  includeBackgroundColorInInstance: number;
  objectID: string;
  horizontalRulerData: SketchMSRulerData;
  hasClickThrough: number;
  includeInCloudUpload: number;
  exportOptions: SketchMSExportOptions;
  hasBackgroundColor: number;
  layerListExpandedType: number;
  resizesContent: number;
  backgroundColor: SketchMSColor;
  rotation: number;
  style: SketchMSStyle;
  verticalRulerData: SketchMSRulerData;
  isFlippedVertical: number;
  do_objectID?: string;
  name: string;
  layers: SketchMSLayer[];
  isVisible: boolean;
  nameIsFixed: boolean;
  grid: SketchMSSimpleGrid;
  resizingType: number;
  userInfo: any;
  isLocked: boolean;
  layout: SketchMSLayoutGrid;
  shouldBreakMaskChain: number;
  resizingConstraint: 63 | number;
  includeBackgroundColorInExport: number;
  flow?: SketchMSImmutableFlowConnection;
}
interface SketchMSPage {
  isFlippedHorizontal: number;
  style: SketchMSStyle;
  horizontalRulerData: SketchMSRulerData;
  frame: SketchMSRect;
  hasClickThrough: number;
  includeInCloudUpload: number;
  exportOptions: SketchMSExportOptions;
  objectID: string;
  id: string;
  rotation: number;
  layerListExpandedType: number;
  verticalRulerData: SketchMSRulerData;
  isFlippedVertical: number;
  resizingType: number;
  do_objectID?: string;
  _class: 'page' | 'layer';
  layers: SketchMSLayer[];
  isVisible: boolean;
  nameIsFixed: number;
  name: string;
  constrainProportions: boolean;
  attributedString: SketchMSAttributedString;
  isLocked: boolean;
  shouldBreakMaskChain: number;
  resizingConstraint: number;
  fixedRadius: number;

  // add this property to hold all CSS properties
  // of the current layer
  css?: { [key: string]: string };
}
interface SketchMSSharedTextStyleContainer {
  do_objectID?: string;
  _class: 'sharedTextStyleContainer';
  objects: any[];
}
interface SketchMSSymbolContainers {
  do_objectID?: string;
  _class: 'symbolContainer';
  objects: any[];
}
interface SketchMSDocumentData {
  assets: SketchMSAssetCollection;
  currentPageIndex: number;
  foreignSymbols: any[];
  layerStyles: SketchMSSharedStyleContainer;
  pages: SketchMSPage[];
  enableSliceInteraction: number;
  do_objectID?: string;
  _class: 'documentData';
  layerTextStyles: SketchMSSharedTextStyleContainer;
  enableLayerInteraction: number;
  layerSymbols: SketchMSSymbolContainers;
  objectID: string;
}
interface SketchMSArtboards {
  name: string;
  artboards: SketchMSArtboard;
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
interface SketchMSPagesAndArtboards {
  [key: string]: SketchMSArtboards;
}
interface SketchMSMetadata {
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
interface SketchMSImmutableFlowConnection {
  _class: 'immutableFlowConnection';
  animationType: number;
  destinationArtboardID?: string | 'back';
}
