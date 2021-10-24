import * as Common from '../../Common';

export type CommonEntityData = {
  layer: string;
  lineTypeScale: any;
  lineTypeName: string;
  visible: boolean;
  colorNumber?: number;
  extrusionX: any;
  extrusionY: any;
  extrusionZ: any;
  $INSUNITS?: Common.UnitTypes;
};

export type DXFEntityType = {
  6: 'lineTypeName',
  8: 'layer',
  48: 'lineTypeScale'
  60: 'visible',
  62: 'colorNumber',
  210: 'extrusionX',
  220: 'extrusionY',
  230: 'extrusionZ',
};
