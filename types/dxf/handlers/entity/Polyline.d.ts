import { Point2D } from "../../Common";
import { CommonEntityData } from "./common";

export type PolylineEntityData = {
  closed: boolean;
  vertices: Point2D[];
  polygonMesh?: boolean;
  polyfaceMesh?: boolean;
  thickness?: number;
} & Partial<CommonEntityData>;
