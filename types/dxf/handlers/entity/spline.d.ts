import { Property } from '../../Information';
import { Point3D } from "../../Common";
import { CommonEntityData } from "./common";

export const TYPE: string;

export enum SplineTypeFlag {
  CLOSED = 1,
  PERIODIC = 2,
  RATIONAL = 4,
  PLANAR = 8,
  LINEAR = 16
}

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

export function process(value: Property): SplineEntityData;

export default SplineEntityData;
