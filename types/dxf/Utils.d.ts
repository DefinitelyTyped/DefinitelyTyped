import * as Common from './Common';

export type ParsedContent = {
  box2: Box;
};

export type UtilVertex = [number, number];

export interface Box {
  min: Common.Point2D;
  max: Common.Point2D;
  valid: boolean;
  expandByPoint(point: UtilVertex): void;
}
