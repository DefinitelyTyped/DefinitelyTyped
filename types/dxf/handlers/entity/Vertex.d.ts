import { Point3D } from "../../Common";
import { CommonEntityData } from "./common";

export type VertexEntityData = {
  bulge?: number;
} & Partial<Point3D> & Partial<CommonEntityData>;
