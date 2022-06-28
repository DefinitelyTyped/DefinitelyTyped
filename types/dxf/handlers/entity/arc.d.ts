import { Property } from '../../Information';
import { Point3D } from "../../Common";
import { CommonEntityData } from "./common";

export const TYPE: string;

export type ArcEntityData = {
  r?: number;
  thickness?: number;
  startAngle: number;
  endAngle: number;
} & Partial<Point3D> & Partial<CommonEntityData>;

export function process(value: Property): ArcEntityData;

export default ArcEntityData;
