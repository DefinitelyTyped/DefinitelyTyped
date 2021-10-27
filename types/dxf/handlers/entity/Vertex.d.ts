import { Property } from '../../Information';
import { Point3D } from "../../Common";
import { CommonEntityData } from "./common";

export const TYPE: string;

export type VertexEntityData = {
  bulge?: number;
} & Partial<Point3D> & Partial<CommonEntityData>;

export function process(value: Property): VertexEntityData;

export default VertexEntityData;
