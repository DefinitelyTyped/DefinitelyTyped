import { Property } from '../../Information';
import common, { CommonEntityData } from "./common";
import { Point3D } from "../../Common";

export const TYPE: string;

/**
 * Describes a DXF Dimension
 * "attachementPoint" is mispelled in the source code so I'll leave it here as
 * it is until that can be corrected
 */
export type DimensionEntityData = {
    block: any;
    start: Point3D
    end: Point3D
    textMidpoint: Point3D;
    measureStart: Point3D;
    measureEnd: Point3D;
    rotation?: number;
    horizonRotation?: number;
    extensionRotation?: number;
    textRotation?: number;
    attachementPoint: any;
    extrudeDirection?: Point3D
    ordinateType?: boolean;
    uniqueBlockReference?: boolean;
    userDefinedLocation?: boolean;
    dimensionType: any;
} & Partial<CommonEntityData>;

export function process(value: Property): DimensionEntityData;

export default DimensionEntityData;
