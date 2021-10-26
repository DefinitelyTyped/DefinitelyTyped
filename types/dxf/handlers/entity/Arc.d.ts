import { Point3D } from "../../Common";
import { CommonEntityData } from "./common";

export type ArcEntityData = {
  r?: number;
  thickness?: number;
  startAngle: number;
  endAngle: number;
} & Partial<Point3D> & Partial<CommonEntityData>;
