import { Transform } from '../types/transform';
import { Effect } from '../types/effect';
import { LayoutConstraint } from '../types/constraint';
import { Paint } from '../types/paint';
import { Vector } from './vector';
import { Rectangle } from '../types/rectangle';

import {
  BlendModeEnum,
  LayoutAlignEnum,
  EasingEnum,
  OverflowDirectionEnum,
  StrokeAlignEnum,
  StrokeCapEnum,
  StrokeJoinEnum,
} from '../types/enums';

import { ExportSetting } from '../types/export-settings';
import { Color } from '../types/color';
import { Path } from '../types/path';

/**
 * 基础信息
 */
export interface BaseNodeMixin {
  id: string;
  name: string;
  visible: boolean;
  type: string;
}

/**
 * 场景节点
 */
export interface SceneNodeMixin {
  visible: boolean;
  locked: boolean;
}

/**
 * 子节点
 */
export interface ChildrenMixin {
  readonly children: Node[];
}

/**
 * 约束
 */
export interface ConstraintMixin {
  constraints: LayoutConstraint;
}

export interface LayoutMixin {
  relativeTransform: Transform;
  layoutAlign: LayoutAlignEnum;
  size: Vector;
  preserveRatio: boolean;
  absoluteBoundingBox: Rectangle;

  // readonly width: number;
  // readonly height: number;
  // constrainProportions: boolean;

  // layoutGrow: number;
}

export interface BlendMixin {
  opacity: number;
  blendMode: BlendModeEnum;
  isMask: boolean;
  effects: Effect[];
  fills: ReadonlyArray<Paint>;
  // effectStyleId: string;
}

export interface ContainerMixin {
  expanded: boolean;
  background: Paint[]; // DEPRECATED: use 'fills' instead
  backgroundColor: Color;
  // backgroundStyleId: string; // DEPRECATED: use 'fillStyleId' instead
}

export interface MinimalStrokesMixin {
  strokes: Paint[];
  strokeWeight: number;
  strokeAlign: StrokeAlignEnum;
}

export interface StrokesMixin {
  // strokeStyleId: string;
  // dashPattern: number[];
  strokeJoin: StrokeJoinEnum;
  strokes: Paint[];
  strokeWeight: number;
  strokeCap: StrokeCapEnum;
  strokeDashes: number[];
  strokeMiterAngle: number;
  strokeGeometry: Path[];
  strokeAlign: StrokeAlignEnum;
}

export interface CornerMixin {
  cornerRadius: number;
  rectangleCornerRadii: number[];
  // cornerSmoothing: number
}

export interface ExportMixin {
  exportSettings: ReadonlyArray<ExportSetting>;
}

export interface TransitionMixin {
  transitionNodeID: string;
  transitionDuration: number;
  transitionEasing: EasingEnum;
}

export interface PaddingMixin {
  paddingLeft: number;
  paddingRight: number;
  paddingTop: number;
  paddingBottom: number;
  horizontalPadding: number;
  verticalPadding: number;
}

export interface FramePrototypingMixin {
  overflowDirection: OverflowDirectionEnum;
  // numberOfFixedChildren: number;
}
