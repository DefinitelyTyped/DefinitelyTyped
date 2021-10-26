import { Point2D } from "../../Common";
import { CommonEntityData } from "./common";

// tslint:disable-next-line: interface-over-type-literal
export type LWPolylineEntityData = {
  closed: boolean;
  vertices: Point2D[];
  bulge?: number;
  thickness?: number;
} & Partial<CommonEntityData>;

// tslint:disable-next-line: interface-over-type-literal
export type DXFEntityType = {
  70: 'closed',
  10: 'vertexX',
  20: 'vertexY',
  39: 'thickness',
  42: 'bulge',
};
