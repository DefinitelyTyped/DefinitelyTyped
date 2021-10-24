import * as Common from '../Common';
import * as Line from './entity/Line';
import * as Point from './entity/Point';
import * as LWPolyline from './entity/LWPolyline';
import * as Polyline from './entity/Polyline';
import * as Vertex from './entity/Vertex';
import * as Arc from './entity/Arc';
import * as Circle from './entity/Circle';
import * as Ellipse from './entity/Ellipse';
import * as Spline from './entity/Spline';
import * as Solid from './entity/Solid';
import * as MText from './entity/MText';
import * as Text from './entity/Text';
import * as Insert from './entity/Insert';
import * as ThreeDFace from './entity/ThreeDFace';
import * as Dimension from './entity/Dimension';

export type LayerGroupedEntities = Record<string, Entity>;
export type EntityType =
'POINT'|
'LINE' |
'LWPOLYLINE' |
'POLYLINE' |
'VERTEX' |
'ARC' |
'CIRCLE' |
'ELLIPSE' |
'SPLINE' |
'SOLID' |
'TEXT' |
'MTEXT' |
'INSERT' |
'3DFACE' |
'DIMENSION';

export type Entity =
  DXFEntity |
  DXFVertexEntity |
  DXFTextEntity |
  DXFSplineEntity |
  DXFSolidEntity |
  DXFPolylineEntity |
  DXFPointEntity |
  DXFMTextEntity |
  DXFLineEntity |
  DXFLWPolylineEntity |
  DXFInsertEntity |
  DXFEllipseEntity |
  DXFDimensionEntity |
  DXFCircleEntity |
  DXFArcEntity |
  DXF3DFaceEntity;

export interface DXFEntity {
  TYPE: EntityType;
}

export type DXFPointEntity = {
  TYPE: 'POINT'
} & Point.PointEntityData;

export type DXFLineEntity = {
  TYPE: 'LINE'
} & Line.LineEntityData;

export type DXFLWPolylineEntity = {
  TYPE: 'LWPOLYLINE'
} & LWPolyline.LWPolylineEntityData;

export type DXFPolylineEntity = {
  TYPE: 'POLYLINE'
} & Polyline.PolylineEntityData;

export type DXFVertexEntity = {
  TYPE: 'VERTEX'
} & Vertex.VertexEntityData;

export type DXFArcEntity = {
  TYPE: 'ARC'
} & Arc.ArcEntityData;

export type DXFCircleEntity = {
  TYPE: 'CIRCLE'
} & Circle.CircleEntityData;

export type DXFEllipseEntity = {
  TYPE: 'ELLIPSE'
} & Ellipse.EllipseEntityData;

export type DXFSplineEntity = {
  TYPE: 'SPLINE'
} & Spline.SplineEntityData;

export type DXFSolidEntity = {
  TYPE: 'SOLID'
} & Solid.SolidEntityData;

export type DXFMTextEntity = {
  TYPE: 'MTEXT'
} & MText.MTextEntityData;

export type DXFTextEntity = {
  TYPE: 'TEXT'
} & Text.TextEntityData;

export type DXFInsertEntity = {
  TYPE: 'INSERT'
} & Insert.InsertEntityData;

export type DXF3DFaceEntity = {
  TYPE: '3DFACE'
} & ThreeDFace.ThreeDFaceEntityData;

export type DXFDimensionEntity = {
  TYPE: 'DIMENSION'
} & Dimension.DimensionEntityData;
