import * as DXFCommon from '../../Common';
import * as EntCommon from './common';

/**
 * Describes a DXF Dimension
 * "attachementPoint" is mispelled in the source code so I'll leave it here as
 * it is until that can be corrected
 */
export type DimensionEntityData = {
  block: any;
  start: DXFCommon.Point3D
  end: DXFCommon.Point3D
  textMidpoint: DXFCommon.Point3D;
  measureStart: DXFCommon.Point3D;
  measureEnd: DXFCommon.Point3D;
  rotation?: number;
  horizonRotation?: number;
  extensionRotation?: number;
  textRotation?: number;
  attachementPoint: any;
  extrudeDirection?: DXFCommon.Point3D
  ordinateType?: boolean;
  uniqueBlockReference?: boolean;
  userDefinedLocation?: boolean;
  dimensionType: any;
} & Partial<EntCommon.CommonEntityData>;
