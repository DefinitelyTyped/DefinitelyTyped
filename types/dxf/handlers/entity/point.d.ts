import * as Common from "../../Common";
import { Property } from "../../Information";
import common, { CommonEntityData } from "./common";

export const TYPE: string;

export type PointEntityData =
    & {
        thickness?: number;
    }
    & Partial<Common.Point3D>
    & Partial<CommonEntityData>;

export function process(value: Property): PointEntityData;

export default PointEntityData;
