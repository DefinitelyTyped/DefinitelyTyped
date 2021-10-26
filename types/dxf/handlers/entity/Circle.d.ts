import { Point3D } from "../../Common";
import { CommonEntityData } from "./common";

export type CircleEntityData = {
  r?: number;
} & Partial<Point3D> & Partial<CommonEntityData>;
