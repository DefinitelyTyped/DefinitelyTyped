import {
  Dimensions,
  Offset,
  PageGroup,
  PageInfo,
  RendererConfig,
  Region,
} from './interfaces';

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
