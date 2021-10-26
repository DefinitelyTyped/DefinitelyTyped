import { DXFEntityType as CommonEntityType, CommonEntityData } from "./common";
import { Point2D } from "../../Common";

// tslint:disable-next-line: interface-over-type-literal
export type DXFEntityType = LineStartType
  & LineEndType
  & CommonEntityType
  & {
  39: 'thickness',
};

// tslint:disable-next-line: interface-over-type-literal
export type LineStartType = {
  10: 'x',
  20: 'y',
  30: 'z',
};

// tslint:disable-next-line: interface-over-type-literal
export type LineEndType = {
  11: 'x',
  21: 'y',
  31: 'z',
};

export type LineEntityData = {
  start: Point2D;
  end: Point2D;
  thickness?: number;
} & Partial<CommonEntityData>;
