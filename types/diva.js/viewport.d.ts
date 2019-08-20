import { Dimensions, Region } from './interfaces';

export default class Viewport {
  intersectionTolerance: number;
  outer: HTMLElement;

  // TODO Add these definitions
  top: object;
  left: object;
  width: object;
  height: object;
  bottom: object;
  right: object;

  constructor(outer: HTMLElement, options?: { intersectionTolerance: number });
  intersectsRegion(region: Region): boolean;
  hasVerticalOverlap(region: Region): boolean;
  hasHorizontalOverlap(region: Region): boolean;
  invalidate(): void;
  setInnerDimensions(dimensions: Dimensions): void;
}
