import { Property } from '../../Information';
import { Point3D } from "../../Common";
import { CommonEntityData } from "./common";

export const TYPE: string;

export type SolidEntityData = {
  corners: [Point3D, Point3D, Point3D, Point3D];
  thickness: number;
} & Partial<CommonEntityData>;

export function process(value: Property): SolidEntityData;

export default SolidEntityData;
