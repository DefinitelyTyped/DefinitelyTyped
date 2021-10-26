import * as Common from './common';

export type TextEntityData = {
  string: string;
} & Partial<Common.CommonEntityData>;

export type DXFEntityType = {
  1: 'string',
  10: 'x',
  20: 'y',
  30: 'z',
  11: 'x2',
  21: 'y2',
  31: 'z2',
  39: 'thickness',
  40: 'textHeight',
  41: 'relScaleX',
  50: 'rotation',
  51: 'obliqueAngle',
  7: 'styleName',
  71: 'mirror',
  72: 'hAlign',
  73: 'vAlign',
  210: 'extX',
  220: 'extY',
  230: 'extZ'
} & Common.DXFEntityType;
