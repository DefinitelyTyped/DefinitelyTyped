import { StyleEnum } from '../types/enums';
import {
  BaseNodeMixin,
  SceneNodeMixin,
  StrokesMixin,
  BlendMixin,
  LayoutMixin,
  ExportMixin,
  ConstraintMixin,
  TransitionMixin,
} from './mixin';

import { Path } from '../types/path';

/**
 * 向量类型
 */
export interface Vector {
  x: number;
  y: number;
}

/**
 * 矢量路径类型
 */
export interface VectorMixin
  extends BaseNodeMixin,
    SceneNodeMixin,
    BlendMixin,
    LayoutMixin,
    ExportMixin,
    ConstraintMixin,
    StrokesMixin,
    TransitionMixin {
  layoutGrow: number;
  fillGeometry: Path[];

  styles: Map<StyleEnum, string>;
}
