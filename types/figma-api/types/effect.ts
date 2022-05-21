import { Color } from './color';
import { Vector } from '../core/vector';
import { BlendModeEnum, EffectEnum } from './enums';

/**
 * 效果基础类型
 */
export interface Effect {
  type: EffectEnum;
  visible: boolean;
  radius: number; // 只适用于阴影
  color: Color; // 阴影的颜色
  blendMode: BlendModeEnum; // 阴影的混合模式
  offset: Vector; // 阴影在 x 和 y 方向上投影的距离
  spread: number; // 阴影扩散距离
  showShadowBehindNode: boolean; //是否在半透明或透明像素后面显示阴影（仅适用于投影）
}
