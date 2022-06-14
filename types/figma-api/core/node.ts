import { BooleanOperationEnum, LineTypesEnum } from '../types/enums';
import { Rectangle } from '../types/rectangle';
import { Transform } from '../types/transform';
import { TypeStyle } from '../types/type-style';
import { Vector, VectorMixin } from './vector';
import { FrameMixin } from './frame';
import { CanvasNode } from './canvas';
import {
  BaseNodeMixin,
  ChildrenMixin,
  ExportMixin,
  CornerMixin,
} from './mixin';

export interface DocumentNode extends BaseNodeMixin, ChildrenMixin {
  type: 'DOCUMENT';
}

export interface FrameNode extends FrameMixin {
  type: 'FRAME';
}

export interface GroupNode extends FrameMixin {
  type: 'GROUP';
}

export interface ComponentNode extends FrameMixin {
  type: 'COMPONENT';
  componentId: string;
}

export interface ComponentSetNode extends FrameMixin {
  type: 'COMPONENT_SET';
}

export interface InstanceNode extends FrameMixin {
  type: 'INSTANCE';
  componentId: string;
}

export interface VectorNode extends VectorMixin {
  type: 'VECTOR';
}

export interface BooleanOperationNode extends VectorMixin {
  type: 'BOOLEAN_OPERATION';
  booleanOperation: BooleanOperationEnum;
}

export interface StarNode extends VectorMixin {
  type: 'STAR';
}

export interface LineNode extends VectorMixin {
  type: 'LINE';
}

type ArcDataType = {
  startingAngle: number;
  endingAngle: number;
  innerRadius: number;
};
export interface EllipseNode extends VectorMixin {
  type: 'ELLIPSE';
  arcData: ArcDataType;
}

export interface RegularPolygonNode extends VectorMixin {
  type: 'REGULAR_POLYGON';
}

export interface RectangleNode extends VectorMixin, CornerMixin {
  type: 'RECTANGLE';
}

export interface TextNode extends VectorMixin {
  type: 'TEXT';
  characters: string;
  style: TypeStyle;
  characterStyleOverrides: number[];
  styleOverrideTable: Map<string, TypeStyle>;
  lineTypes: LineTypesEnum[];
  lineIndentations: number[];
}

export interface SliceNode extends ExportMixin {
  type: 'SLICE';
  absoluteBoundingBox: Rectangle;
  size: Vector;
  relativeTransform: Transform;
}

type BaseNode =
  | DocumentNode
  | CanvasNode
  | SliceNode
  | FrameNode
  | GroupNode
  | ComponentSetNode
  | ComponentNode
  | InstanceNode
  | BooleanOperationNode
  | VectorNode
  | StarNode
  | LineNode
  | EllipseNode
  | RegularPolygonNode
  | RectangleNode
  | TextNode;

export type NodeType = BaseNode['type'];

export * from './canvas';
