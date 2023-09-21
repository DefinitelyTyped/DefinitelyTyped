import * as Common from '../../Common';
import { EntityType } from '../entities';

export interface CommonEntityData {
  layer: string;
  lineTypeScale: any;
  lineTypeName: string;
  visible: boolean;
  colorNumber?: Common.ColorNumber;
  extrusionX: any;
  extrusionY: any;
  extrusionZ: any;
  $INSUNITS?: Common.UnitTypes;
  type: EntityType;
}

export default function common(type: number, value: any): CommonEntityData;
