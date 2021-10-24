import { Point3D } from '../Common';
import { CommonEntityData } from './Common';

export type EllipseEntityData = {
  r?: number;
  majorX?: number;
  majorY?: number;
  majorZ?: number;
  axisRatio?: number;
  startAngle: number;
  endAngle: number;
} & Partial<Point3D> & Partial<CommonEntityData>;
