import {
    ConstraintEnum,
    LayoutConstraintVerticalEnum,
    LayoutConstraintHorizontalEnum,
  } from './enums';
  
  // 相对于 Frame 的布局约束
  export interface LayoutConstraint {
    vertical: LayoutConstraintVerticalEnum;
    horizontal: LayoutConstraintHorizontalEnum;
  }
  
  export interface Constraint {
    type: ConstraintEnum;
    value: number;
  }
  