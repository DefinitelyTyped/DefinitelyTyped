import {
    BaseNodeMixin,
    SceneNodeMixin,
    ChildrenMixin,
    ContainerMixin,
    TransitionMixin,
    MinimalStrokesMixin,
    CornerMixin,
    ExportMixin,
    BlendMixin,
    ConstraintMixin,
    LayoutMixin,
    FramePrototypingMixin,
    PaddingMixin,
  } from './mixin';
  
  import { LayoutGrid } from '../types/layout-grid';
  import { Color } from '../types/color';
  
  import {
    LayoutModeEnum,
    PrimaryAxisAlignItemsEnum,
    CounterAxisAlignItemsEnum,
    AxisSizingModeEnum,
  } from '../types/enums';
  
  export interface FrameMixin
    extends BaseNodeMixin,
      SceneNodeMixin,
      ChildrenMixin,
      ContainerMixin,
      TransitionMixin,
      MinimalStrokesMixin,
      CornerMixin,
      ExportMixin,
      BlendMixin,
      ConstraintMixin,
      LayoutMixin,
      FramePrototypingMixin,
      PaddingMixin {
    backgroundColor: Color;
    isMaskOutline: boolean;
    clipsContent: boolean;
    layoutMode: LayoutModeEnum;
    primaryAxisSizingMode: AxisSizingModeEnum;
    counterAxisSizingMode: AxisSizingModeEnum;
    primaryAxisAlignItems: PrimaryAxisAlignItemsEnum;
    counterAxisAlignItems: CounterAxisAlignItemsEnum;
    layoutGrids: LayoutGrid[];
    itemSpacing: number;
  }
  