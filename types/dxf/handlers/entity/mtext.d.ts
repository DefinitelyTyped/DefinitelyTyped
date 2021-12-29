import common, { CommonEntityData } from './common';
import { ColorNumber } from '../../Common';
import { Property } from '../../Information';

export const TYPE: string;

export type MTextEntityData = {
  string?: string;
  styleName?: any;
  x?: any;
  y?: any;
  z?: any;
  nominalTextHeight?: any;
  refRectangleWidth?: any;
  attachmentPoint?: any;
  drawingDirection?: any;
  xAxisX?: any;
  xAxisY?: any;
  xAxisZ?: any;
  horizontalWidth?: any;
  verticalHeight?: any;
  lineSpacingStyle?: any;
  lineSpacingFactor?: any;
  backgroundFill?: any;
  columnType?: any;
  columnCount?: any;
  columnFlowReversed?: any;
  columnAutoheight?: any;
  columnWidth?: any;
  columnGutter?: any;
  columnHeights?: any;
  fillBoxStyle?: any;
  bgFillColor?: ColorNumber;
  bgColorRGB0?: ColorNumber;
  bgColorRGB1?: ColorNumber;
  bgColorRGB2?: ColorNumber;
  bgColorRGB3?: ColorNumber;
  bgColorRGB4?: ColorNumber;
  bgColorRGB5?: ColorNumber;
  bgColorRGB6?: ColorNumber;
  bgColorRGB7?: ColorNumber;
  bgColorRGB8?: ColorNumber;
  bgColorRGB9?: ColorNumber;
  bgColorName0?: string;
  bgColorName1?: string;
  bgColorName2?: string;
  bgColorName3?: string;
  bgColorName4?: string;
  bgColorName5?: string;
  bgColorName6?: string;
  bgColorName7?: string;
  bgColorName8?: string;
  bgColorName9?: string;
  bgFillTransparency?: any;
} & Partial<CommonEntityData>;

export function process(value: Property): MTextEntityData;

export default MTextEntityData;
