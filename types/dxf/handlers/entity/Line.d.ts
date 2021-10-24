import { DXFEntityType as CommonEntityType, CommonEntityData } from "./Common";
import { Point2D } from "../../Common";

export type DXFEntityType = LineStartType
& LineEndType
& CommonEntityType
& {
  39: 'thickness',
};

export type LineStartType = {
  10: 'x',
  20: 'y',
  30: 'z',
};

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
