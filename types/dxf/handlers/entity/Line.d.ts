import { Property } from '../../Information';
import common, { CommonEntityData } from "./common";
import { Point3D } from "../../Common";

export const TYPE: string;

export type LineEntityData = {
  start?: Partial<Point3D>;
  end?: Partial<Point3D>;
  thickness?: number;
} & Partial<CommonEntityData>;

export function process(value: Property): LineEntityData;

export default LineEntityData;
