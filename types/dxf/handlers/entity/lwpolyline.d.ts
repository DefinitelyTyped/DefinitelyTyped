import { Point2D } from "../../Common";
import { Property } from "../../Information";
import { CommonEntityData } from "./common";

export const TYPE: string;

// eslint-disable-next-line @typescript-eslint/consistent-type-definitions
export type LWPolylineEntityData = {
    closed?: boolean;
    vertices?: Point2D[];
    bulge?: number;
    thickness?: number;
    vertexX?: any;
} & Partial<CommonEntityData>;

export function process(value: Property): LWPolylineEntityData;

export default LWPolylineEntityData;
