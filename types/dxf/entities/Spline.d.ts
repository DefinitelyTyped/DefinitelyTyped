import { Point3D } from '../Common';
import { CommonEntityData } from './Common';

export type SplineTypeFlag = {
  1: 'CLOSED',
  2: 'PERIODIC',
  4: 'RATIONAL'
  8: 'PLANAR',
  16: 'LINEAR'
};

export type SplineEntityData = {
  controlPoints: Point3D[];
  controlPointTolerance?: any;
  knots: number;
  knotTolerance?: any;
  weights?: number[];
  fitTolerance?: any;
  flag?: SplineTypeFlag;
  closed?: boolean;
  degree?: number;
  numberOfKnots?: number;
  numberOfControlPoints?: number;
  numberOfFitPoints?: number;
} & Partial<Point3D> & Partial<CommonEntityData>;
