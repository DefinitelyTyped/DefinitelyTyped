import * as Common from './common';
import { Property } from '../../Information';

export const TYPE: string;

export type InsertEntityData = {
  block: any;
  x: number;
  y: number;
  z: number;
  scaleX: number;
  scaleY: number;
  scaleZ: number;
  columnSpacing: number;
  rowSpacing: number;
  rotation: number;
  columnCount: number;
  rowCount: number;
  extrusionX: any;
  extrusionY: any;
  extrusionZ: any;
} & Partial<Common.CommonEntityData>;

export function process(value: Property): InsertEntityData;

export default InsertEntityData;
