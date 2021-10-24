import { Point3D } from "../../Common";
import { CommonEntityData } from "./Common";

export type CircleEntityData = {
  r?: number;
} & Partial<Point3D> & Partial<CommonEntityData>;
