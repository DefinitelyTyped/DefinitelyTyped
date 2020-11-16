import {
  Dimensions,
  Offset,
  Options,
  Region,
  Settings,
  SourceProvider,
  ViewerState,
} from './interfaces';
import { Diva } from './index';
import Layout from './document-layout';

export default class ViewerCore {
  parentObject: HTMLElement;
  publicInstance: Diva;
  viewerState: ViewerState;
  settings: Settings;

  constructor(element: HTMLElement, options: Options, publicInstance: Diva);
  isValidOption(key: string, value: any): boolean;
  elemAttrs(ident: string, base: object): object;
  getPageData(pageIndex: number, attribute: string | symbol): any;
  clearViewer(): void;
  hasChangedOption(options: object, key: string | symbol): boolean;
  escapeListener(e: KeyboardEvent): void;
  reloadViewer(newOptions: Options): boolean;
  prepareModeChange(options: Options): void;
  updateViewHandlerAndRendering(): void;
  initializeRenderer(): void;
  getCurrentSourceProvider(): {
    getAllZoomLevelsForPage: number | SourceProvider[];
    getBestZoomLevelForPage: number | SourceProvider;
  };
  getPadding(): {
    document: Region;
    page: Region;
  };
  updatePageOverlays(): void;
  handleZoom(newZoomLevel: number, focalPoint?: object): boolean;
  getYOffset(pageIndex: number, anchor?: string): number;
  getXOffset(pageIndex: number, anchor?: string): number;
  updatePanelSize(): void;
  updateOffsets(): void;
  bindMouseEvents(): void;
  onResize(): void;
  bindTouchEvents(): void;
  scrollFunction(): void;
  handleEvents(): void;
  initPlugins(): void;
  showThrobber(): void;
  hideThrobber(): void;
  showError(message: string): void;
  setManifest(manifest: object, loadOptions: Options): void;
  publish(event: string): void;
  getSettings(): Settings;
  getInternalState(): ViewerState;
  getPublicInstance(): Diva;
  getPageTools(): object;
  getCurrentLayout(): Layout;
  getViewport(): Region & Dimensions;
  addPageOverlay(overlay: object): void;
  removePageOverlay(overlay: object): void;
  getPageRegion(pageIndex: number, options: object): Region;
  getPagePositionAtViewportOffset(
    coords: Offset,
  ): {
    anchorPage: number;
    offset: Offset;
  };
  setCurrentPages(activePage: number, visiblePages: number[]): void;
  getPageName(pageIndex: number): string;
  reload(newOptions: Options): void;
  zoom(zoomLevel: number, focalPoint?: object): boolean;
  enableScrollable(): void;
  enableDragScrollable(): void;
  disableScrollable(): void;
  disableDragScrollable(): void;
  clear(): void;
  setPendingManifestRequest(pendingManifestRequest: Promise<Response>): void;
  destroy(): void;
}
