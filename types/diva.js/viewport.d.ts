import { Dimensions, Region } from './interfaces';

export default class Viewport {
  intersectionTolerance: number;
  outer: HTMLElement;

  top: number;
  left: number;
  width: number;
  height: number;
  bottom: number;
  right: number;

  constructor(outer: HTMLElement, options?: { intersectionTolerance: number });
  intersectsRegion(region: Region): boolean;
  hasVerticalOverlap(region: Region): boolean;
  hasHorizontalOverlap(region: Region): boolean;
  invalidate(): void;
  setInnerDimensions(dimensions: Dimensions): void;
}
