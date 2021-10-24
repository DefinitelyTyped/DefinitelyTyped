import * as Common from '../Common';
import * as EntCommon from './Common';

export type PointEntityData = {
  thickness: number;
} & Common.Point2D & Partial<EntCommon.CommonEntityData>;

export type DXFEntityType = {
  10: 'x',
  20: 'y',
  30: 'z',
  39: 'thickness',
} & EntCommon.DXFEntityType;
