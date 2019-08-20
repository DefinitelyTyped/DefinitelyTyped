import { Dimensions, Offset, Region } from './interfaces';

interface RendererConfig {
  pageLayouts: object;
  padding: Offset;
  maxZoomLevel: number | null;
  verticallyOriented: boolean;
}

interface PageGroup {
  index: number;
  dimensions: Dimensions;
  pages: number[];
  region: Region;
  padding: Offset;
}

interface PageInfo {
  index;
  number;
  group: PageGroup;
  dimensions: Dimensions;
  groupOffset: Offset;
}

export default class DocumentLayout {
  dimensions: Dimensions;
  pageGroups: PageGroup[];

  constructor(config: RendererConfig, zoomLevel: number);
  getPageInfo(pageIndex: number): PageInfo | null;
  getPageDimensions(pageIndex: number): Dimensions;
  getPageOffset(pageIndex: number, options: object): Offset;
  getPageRegion(pageIndex: number, options: object): Offset;
  getPageToViewportCenterOffset(
    pageIndex: number,
    viewport: Region,
  ): { x: number; y: number };
}
