import * as Common from '../Common';

export interface Header {
  extMin: Common.Point2D;
  extMax: Common.Point2D;
  dimArrowSize: ArrowSize;
  $INSUNITS: Common.UnitTypes;
}

export type ArrowSize = number;
export type DXFHeaderPropertyType = 10 | 20 | 30 | 40 | 70;
export type DXFHeaderPropertyValue = '$MEASUREMENT' | '$INSUNITS' | '$EXTMIN' | '$EXTMAX' | '$DIMASZ';
