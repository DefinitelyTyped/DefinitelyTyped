import * as Common from './Common';

export type MTextEntityData = {
  string?: string;
  xAxisX: number;
  xAxisY: number;
} & Partial<Common.CommonEntityData>;

// tslint:disable-next-line: interface-over-type-literal
export type DXFEntityType = {
  10: 'x',
  20: 'y',
  30: 'z',
  40: 'nominalTextHeight',
  41: 'refRectangleWidth',
  71: 'attachmentPoint',
  72: 'drawingDirection',
  7: 'styleName',
  11: 'xAxisX',
  21: 'xAxisY',
  31: 'xAxisZ',
  42: 'horizontalWidth',
  43: 'verticalHeight',
  73: 'lineSpacingStyle',
  44: 'lineSpacingFactor',
  90: 'backgroundFill',
  420: 'bgColorRGB0',
  421: 'bgColorRGB1',
  422: 'bgColorRGB2',
  423: 'bgColorRGB3',
  424: 'bgColorRGB4',
  425: 'bgColorRGB5',
  426: 'bgColorRGB6',
  427: 'bgColorRGB7',
  428: 'bgColorRGB8',
  429: 'bgColorRGB9',
  430: 'bgColorName0',
  431: 'bgColorName1',
  432: 'bgColorName2',
  433: 'bgColorName3',
  434: 'bgColorName4',
  435: 'bgColorName5',
  436: 'bgColorName6',
  437: 'bgColorName7',
  438: 'bgColorName8',
  439: 'bgColorName9',
  45: 'fillBoxStyle',
  63: 'bgFillColor',
  441: 'bgFillTransparency',
  75: 'columnType',
  76: 'columnCount',
  78: 'columnFlowReversed',
  79: 'columnAutoheight',
  48: 'columnWidth',
  49: 'columnGutter',
  50: 'columnHeights'
};
