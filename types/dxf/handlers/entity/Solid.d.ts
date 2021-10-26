import { Point3D } from "../../Common";
import { CommonEntityData } from './common';

export type SolidEntityData = {
  corners: [Point3D, Point3D, Point3D, Point3D];
  thickness: number;
} & Partial<CommonEntityData>;
