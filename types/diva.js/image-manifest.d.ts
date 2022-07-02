import { Dimensions, ManifestData, Offset, Page } from './interfaces';

export type IIIFSourceAdapter = any;

export default class ImageManifest {
  pages: Page[];
  maxZoom: number;
  maxRatio: number;
  itemTitle: string;
  metadata: object;
  paged: boolean;

  constructor(data: ManifestData, urlAdapter: IIIFSourceAdapter);
  static fromIIIF(iiifManifest: object): ImageManifest;
  isPageValid(pageIndex: number, showNonPagedPages: boolean): boolean;
  getMaxPageDimensions(pageIndex: number): Dimensions;
  getPageDimensionsAtZoomLevel(
    pageIndex: number,
    zoomLevel: number,
  ): Dimensions;
  getPageImageURL(pageIndex: number, size?: Dimensions): string;
  etPageImageTiles(
    pageIndex: number,
    zoomLevel: number,
    tileDimensions: Dimensions,
  ): {
    zoomLevel: number;
    rows: number;
    cols: number;
    tiles: {
      row: number;
      col: number;
      dimensions: Dimensions;
      offset: Offset;
      url: string;
    };
  };
}
