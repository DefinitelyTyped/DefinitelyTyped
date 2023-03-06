import { Property } from '../../Information';
import { Point3D } from "../../Common";
import { CommonEntityData } from "./common";

export const TYPE: string;

export type ThreeDFaceEntityData = {
  vertices: [Point3D, Point3D, Point3D, Point3D];
} & Partial<CommonEntityData>;

export function process(value: Property): ThreeDFaceEntityData;

export default ThreeDFaceEntityData;
