import { Color, ColorStop } from './color';
import { Vector } from '../core/vector';
import { Transform } from './transform';
import { BlendModeEnum, PaintEnum, ScaleModeEnum } from './enums';

/**
 * 定义应用于图像绘制的图像过滤器。所有值都是从 -1 到 1。
 */
type ImageFilters = {
  exposure: number;
  contrast: number;
  saturation: number;
  temperature: number;
  tint: number;
  shadows: number;
};

/**
 * Paint基础类
 */
export interface Paint {
  type: PaintEnum;
  visible: boolean;
  opacity: number;
  color: Color;
  blendMode: BlendModeEnum;
  gradientHandlePositions: Vector[];
  gradientStops: ColorStop[];
  scaleMode: ScaleModeEnum; // 图像缩放模式
  imageTransform: Transform; // 仅在 scaleMode 为 STRETCH 时存在
  scalingFactor: number; // 仅当 scaleMode 为 TILE 时才存在
  imageRef: string;
  rotation: number;
  filters: ImageFilters;
  gifRef: string;
}
