/**
 * 混合模式的枚举类型
 */
 export declare type BlendModeEnum =
 | 'PASS_THROUGH'
 | 'NORMAL'
 | 'DARKEN'
 | 'MULTIPLY'
 | 'LINEAR_BURN'
 | 'COLOR_BURN'
 | 'LIGHTEN'
 | 'SCREEN'
 | 'LINEAR_DODGE'
 | 'COLOR_DODGE'
 | 'OVERLAY'
 | 'SOFT_LIGHT'
 | 'HARD_LIGHT'
 | 'DIFFERENCE'
 | 'EXCLUSION'
 | 'HUE'
 | 'SATURATION'
 | 'COLOR'
 | 'LUMINOSITY';

/**
* 确定图层是否应沿父级的反轴拉伸。此属性仅提供给自动布局框架的直接子级。
* INHERIT，STRETCH：以前版本的自动布局。确定图层在自动布局框架内的对齐方式。
* 在水平自动布局帧中，“MIN”和“MAX”对应于“TOP”和“BOTTOM”。在垂直自动布局框架中，“MIN”和“MAX”对应于“LEFT”和“RIGHT”。
*/
export declare type LayoutAlignEnum =
 | 'INHERIT'
 | 'STRETCH'
 | 'MIN'
 | 'CENTER'
 | 'MAX'
 | 'STRETCH';

/**
* 自动布局枚举类型
*/
export declare type LayoutModeEnum = 'NONE' | 'HORIZONTAL' | 'VERTICAL';

/**
* 自动布局下子项在主轴方向上对齐方式，默认值：auto
*/
export declare type PrimaryAxisAlignItemsEnum =
 | 'MIN'
 | 'CENTER'
 | 'MAX'
 | 'SPACE_BETWEEN';

/**
* 自动布局下子项在副轴方向上对齐方式，默认值：auto
*/
export declare type CounterAxisAlignItemsEnum = 'MIN' | 'CENTER' | 'MAX';

/**
* 自动布局下宽度是否固定，默认值：auto
*/
export type AxisSizingModeEnum = 'AUTO' | 'FIXED';

// 相对于 Frame 的垂直布局约束枚举
export type LayoutConstraintVerticalEnum =
 | 'TOP'
 | 'BOTTOM'
 | 'CENTER'
 | 'TOP_BOTTOM'
 | 'SCALE';

// 相对于 Frame 的水平布局约束枚举
export type LayoutConstraintHorizontalEnum =
 | 'LEFT'
 | 'RIGHT'
 | 'CENTER'
 | 'LEFT_RIGHT'
 | 'SCALE';

/**
* 网格方向枚举类型
*/
export declare type LayoutGridPatternEnum = 'COLUMNS' | 'ROWS' | 'GRID';

/**
* 网格定位枚举类型
*/
export declare type LayoutGridAlignEnum = 'MIN' | 'STRETCH' | 'CENTER';

/**
* overflow 枚举类型
*/
export declare type OverflowDirectionEnum =
 | 'HORIZONTAL_SCROLLING'
 | 'VERTICAL_SCROLLING'
 | 'HORIZONTAL_AND_VERTICAL_SCROLLING';

/**
* 线段类型枚举类型
*/
export declare type LineTypesEnum = 'ORDERED' | 'UNORDERED' | 'NONE';

/**
* 布局约束类型
*/
export type ConstraintEnum = 'SCALE' | 'WIDTH' | 'HEIGHT';

/**
* 布尔计算枚举类型
*/
export declare type BooleanOperationEnum =
 | 'UNION'
 | 'INTERSECT'
 | 'SUBTRACT'
 | 'EXCLUDE';

/**
* 动画缓动曲线的枚举类型
*/
export declare type EasingEnum = 'EASE_IN' | 'EASE_OUT' | 'EASE_IN_AND_OUT';

/**
* 矢量路径对齐枚举类型
*/
export declare type StrokeAlignEnum = 'INSIDE' | 'OUTSIDE' | 'CENTER';

/**
* 矢量路径Cap枚举类型
*/
export declare type StrokeCapEnum =
 | 'NONE'
 | 'ROUND'
 | 'SQUARE'
 | 'LINE_ARROW'
 | 'TRIANGLE_ARROW';

/**
*矢量路径Join枚举类型
*/
export declare type StrokeJoinEnum = 'MITTER' | 'BEVEL' | 'ROUND';

/**
* style 类型
*/
export declare type StyleEnum = 'FILL' | 'TEXT' | 'EFFECT' | 'GRID';

/**
* 效果枚举
*/
export type EffectEnum =
 | 'INNER_SHADOW'
 | 'DROP_SHADOW'
 | 'LAYER_BLUR'
 | 'BACKGROUND_BLUR';

/**
* 导出格式枚举
*/
export type ExportFormatEnum = 'JPG' | 'PNG' | 'SVG' | 'PDF';

/**
* Paint类型
*/
export type PaintEnum =
 | 'SOLID'
 | 'GRADIENT_LINEAR'
 | 'GRADIENT_RADIAL'
 | 'GRADIENT_ANGULAR'
 | 'GRADIENT_DIAMOND'
 | 'IMAGE'
 | 'EMOJI';

/**
* 图像缩放模式
*/
export type ScaleModeEnum = 'FILL' | 'FIT' | 'TILE' | 'STRETCH';
