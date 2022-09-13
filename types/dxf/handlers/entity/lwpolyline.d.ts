import { Property } from '../../Information';
import { Point2D } from "../../Common";
import { CommonEntityData } from "./common";

export const TYPE: string;

// tslint:disable-next-line: interface-over-type-literal
export type LWPolylineEntityData = {
  closed?: boolean;
  vertices?: Point2D[];
  bulge?: number;
  thickness?: number;
  vertexX?: any;
} & Partial<CommonEntityData>;

export function process(value: Property): LWPolylineEntityData;

export default LWPolylineEntityData;
