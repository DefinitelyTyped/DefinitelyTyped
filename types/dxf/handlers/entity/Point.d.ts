import * as Common from '../../Common';
import * as common from './common';

export type PointEntityData = {
  thickness: number;
} & Common.Point2D & Partial<common.CommonEntityData>;

export type DXFEntityType = {
  10: 'x',
  20: 'y',
  30: 'z',
  39: 'thickness',
} & common.DXFEntityType;
