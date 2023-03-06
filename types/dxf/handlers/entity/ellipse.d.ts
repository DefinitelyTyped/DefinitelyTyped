import { Property } from '../../Information';
import { Point3D } from "../../Common";
import { CommonEntityData } from "./common";

export const TYPE: string;

export type EllipseEntityData = {
  r?: number;
  majorX?: number;
  majorY?: number;
  majorZ?: number;
  axisRatio?: number;
  startAngle: number;
  endAngle: number;
} & Partial<Point3D> & Partial<CommonEntityData>;

export function process(value: Property): EllipseEntityData;

export default EllipseEntityData;
