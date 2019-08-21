export interface Options {
  acceptHeader: string;
  adaptivePadding: number;
  arrowScrollAmount: number;
  blockMobileMove: boolean;
  objectData: object | string;
  enableAutoTitle: boolean;
  enableFilename: boolean;
  enableFullscreen: boolean;
  enableGotoPage: boolean;
  enableGotoSuggestions: boolean;
  enableGridIcon: boolean;
  enableGridControls: string;
  enableImageTitles: boolean;
  enableIndexAsLabel: boolean;
  enableKeyScroll: boolean;
  enableLinkIcon: boolean;
  enableNonPagedVisibilityIcon: boolean;
  enableSpaceScroll: boolean;
  enableToolbar: boolean;
  enableZoomControls: string;
  fillParentHeight: boolean;
  fixedPadding: number;
  fixedHeightGrid: boolean;
  goDirectlyTo: number;
  hashParamSuffix: string;
  inFullscreen: boolean;
  inBookLayout: boolean;
  inGrid: boolean;
  maxPagesPerRow: number;
  maxZoomLevel: number;
  minPagesPerRow: number;
  minZoomLevel: number;
  onGotoSubmit: () => any;
  pageAliases: {};
  pageAliasFunction: () => any;
  pageLoadTimeout: number;
  pagesPerRow: number;
  showNonPagedPages: boolean;
  throbberTimeout: number;
  tileHeight: number;
  tileWidth: number;
  toolbarParentObject: object;
  verticallyOriented: boolean;
  viewportMargin: number;
  zoomLevel: number;
}

export interface ViewerState {
  currentPageIndices: number[];
  activePageIndex: number;
  horizontalOffset: number;
  horizontalPadding: number;
  ID: string;
  initialKeyScroll: boolean;
  initialSpaceScroll: boolean;
  innerElement: HTMLElement;
  innerObject: HTMLElement;
  isActiveDiva: boolean;
  isScrollable: boolean;
  isZooming: boolean;
  loaded: boolean;
  manifest: object;
  mobileWebkit: boolean;
  numPages: number;
  oldZoomLevel: number;
  options: Options;
  outerElement: HTMLElement;
  outerObject: HTMLElement;
  pageOverlays: object; // new PageOverlayManager();
  pageTools: object[]; // plugins as page tools
  parentObject: HTMLElement;
  pendingManifestRequest: XMLHttpRequest;
  pluginInstances: object[]; // enabled plugins from the registr;
  renderer: object; // Renderer objec;
  resizeTimer: number;
  scrollbarWidth: number;
  selector: string;
  throbberTimeoutID: number;
  toolbar: object;
  verticalOffset: number;
  verticalPadding: number;
  viewHandler: object;
  viewport: object;
  viewportElement: HTMLElement;
  viewportObject: HTMLElement;
  zoomDuration: number;
}

export interface State {
  f: boolean;
  v: string;
  z: number;
  n: number;
  i: boolean | string;
  p: boolean | number;
  y: boolean | number;
  x: boolean | number;
}

export interface Region {
  top: number;
  bottom: number;
  left: number;
  right: number;
}

export interface Dimensions {
  height: number;
  width: number;
}

export interface Offset {
  top: number;
  left: number;
}

export interface RendererConfig {
  pageLayouts: object;
  padding: Offset;
  maxZoomLevel: number | null;
  verticallyOriented: boolean;
}

export interface PageGroup {
  index: number;
  dimensions: Dimensions;
  pages: number[];
  region: Region;
  padding: Offset;
}

export interface PageInfo {
  index: number;
  group: PageGroup;
  dimensions: Dimensions;
  groupOffset: Offset;
}

export interface ViewportPosition {
  zoomLevel: null | number;
  anchorPage: boolean;
  verticalOffset: number;
  horizontalOffset: number;
}

export interface SourceProvider {
  zoomLevel: number;
  rows: number;
  cols: number;
  titles: Array<{
    url: string;
    zoomLevel: number;
    row: number;
    col: number;
    dimensions: Dimensions;
    offset: Offset;
  }>;
}

export type Settings = Options & ViewerState;
