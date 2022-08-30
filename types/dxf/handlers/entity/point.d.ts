import * as Common from '../../Common';
import common, { CommonEntityData } from "./common";
import { Property } from '../../Information';

export const TYPE: string;

export type PointEntityData = {
    thickness?: number;
} & Partial<Common.Point3D> & Partial<CommonEntityData>;

export function process(value: Property): PointEntityData;

export default PointEntityData;
