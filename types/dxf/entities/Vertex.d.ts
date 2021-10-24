import { Point3D } from "../Common";
import { CommonEntityData } from "./Common";

export type VertexEntityData = {
  bulge?: number;
} & Partial<Point3D> & Partial<CommonEntityData>;
