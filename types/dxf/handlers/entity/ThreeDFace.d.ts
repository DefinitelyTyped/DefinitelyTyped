import * as DXFCommon from '../../Common';
import * as Common from './common';

export type ThreeDFaceEntityData = {
  vertices: [DXFCommon.Point3D, DXFCommon.Point3D, DXFCommon.Point3D, DXFCommon.Point3D];
} & Partial<Common.CommonEntityData>;
