import { Property } from '../../Information';
import { Point2D } from "../../Common";
import { CommonEntityData } from "./common";

export const TYPE: string;

export type PolylineEntityData = {
  closed?: boolean;
  vertices?: Point2D[];
  polygonMesh?: boolean;
  polyfaceMesh?: boolean;
  thickness?: number;
} & Partial<CommonEntityData>;

export function process(value: Property): PolylineEntityData;

export default PolylineEntityData;
